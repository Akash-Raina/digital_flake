import { useState } from "react"
import axios from "axios"
import BACKEND_URL from "../../config"
import { useNavigate } from "react-router-dom"
import { LabbledInput } from "../components/LabbledInput";
import { Button } from "../components/Button";
export const SignupAuth = ()=>{
    const [state, setState] = useState(false)
    const navigate = useNavigate();
    const [input, getInput] = useState({
        email: "",
        password: ""
    })

    const SubmitButton = async()=>{
       try{
        setState(true)
        const response = await axios.post(`${BACKEND_URL}/admin/signup`, {
            email: input.email,
            password: input.password
        })
        setState(false)
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate('/')
       }
       catch(err){
        setState(false)
        alert('wrong input value or email aldready exists')
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

    <Button state= {state} onClick={SubmitButton} type="Signup" className="rounded-xl w-[50%] mt-10 mb-5 h-10 bg-[#5C218B] text-white"/>

</div>
}