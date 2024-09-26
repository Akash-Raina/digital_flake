import { useState } from "react"
import { LabbledInput } from "./LabbledInput"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

export const LoginAuth = ()=>{
    const navigate = useNavigate();
    const [input, getInput] = useState({
        email: "",
        password: ""
    })

    const SubmitButton = async()=>{
        try{
            const response = await axios.post("http://localhost:3000/login", {
                email: input.email,
                password: input.password
            })
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate('/')
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

        <Button onClick={SubmitButton} type="Log In"/>

    </div>
}