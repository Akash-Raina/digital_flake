import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { LabbledInput } from "../components/LabbledInput";
import { Button } from "../components/Button";
export const SignupAuth = ()=>{
    const navigate = useNavigate();
    const [input, getInput] = useState({
        email: "",
        password: ""
    })

    const SubmitButton = async()=>{
       try{
        const response = await axios.post("http://localhost:3000/signup", {
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

    <Button onClick={SubmitButton} type="Signup"/>

</div>
}