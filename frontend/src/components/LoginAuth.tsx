import { useState } from "react"
import { LabbledInput } from "./LabbledInput"
import {BACKEND_URL} from "../../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { ResetPasswordPopUp } from "./ResetPasswordPopUp"

export const LoginAuth = ()=>{
    const navigate = useNavigate();
    const [state, setState] = useState(false);
    const [email, setMail] = useState("")
    const [popUp, setPopUp] = useState(false);
    const [input, getInput] = useState({
        email: "",
        password: ""
    })

    const SubmitButton = async()=>{
        try{
            setState(true);
            const response = await axios.post(`${BACKEND_URL}/admin/login`, {
                email: input.email,
                password: input.password
            })
            setState(false);
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate('/')
           }
           catch(err){
            alert('wrong credentials')
            console.log(err)
            setState(false)
           }
    }


    const handleReset = async ()=>{

        try{
            const response = await axios.post(`${BACKEND_URL}/admin/forget-password`, {email})
            navigate('/admin/reset-password/')
            console.log(response.data.me)
        }
        catch(err){
            console.log(err)
        }
    }
    return <div className="flex flex-col w-full mt-10 justify-center items-center">
        <LabbledInput  onChange={(e)=>{getInput({
            ...input,   
            email: e.target.value
        })}} label="Email-id" />
        <LabbledInput type="Password" onChange={(e)=>{getInput({
            ...input,
            password: e.target.value
        })}} label="Password" />
        <button className="text-[#5c218b] ml-56" onClick={()=>{setPopUp(true)}}>Forgot Password?</button>
        <ResetPasswordPopUp onChange={(e)=>{setMail(e.target.value)}} show = {popUp} onCancel={()=>{setPopUp(false)}} onConfirm={handleReset}/>
        <Button state= {state} onClick={SubmitButton} type="Log In" className="rounded-xl w-[50%] mt-10 mb-5 h-10 bg-[#5C218B] text-white"/>

    </div>
}