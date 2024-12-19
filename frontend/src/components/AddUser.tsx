
import exit from "../assets/exit.png"
import { LabbledInput } from "./LabbledInput"
import role from "../assets/Role.png"
import upload from "../assets/upload.png"
import { useRef } from "react";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SelectRole } from "./SelectRole";
import { InsertImage } from "./InsertImage";
import { Button } from "./Button";
import BACKEND_URL from "../../config";
import { AddNavbar } from "./AddNavbar";

export const AddUser = ()=>{

    const [image, setImage] = useState<File | null>(null);
    const inputFileRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const [replaceImage, setReplaceImage] = useState<string | null>(null);

    const [user, setUser] = useState({
        name: "",
        mobile: "",
        email_id: "",
        role: ""
    });

    const handleDivClick = ()=>{
        inputFileRef.current?.click();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setUser({
            ...user, 
            [e.target.name]: e.target.value
        })
    }

    const handleImageChange = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files[0]){
            const file = e.target.files[0];
            if(file.type === "image/jpeg" || file.type === "image/png"){
                setImage(file);
                setReplaceImage(URL.createObjectURL(file))
            }
            else{
                alert("Please upload image of JPG or PNG type")
            }
        }
    }

    const handleSubmit = async ()=>{
        const formData = new FormData();
        formData.append("name", user.name);
        formData.append("mobile", user.mobile);
        formData.append("email", user.email_id);
        formData.append("role", user.role);

        if(image){
            formData.append("img_upload", image);
        }
    
        try{
            const response = await axios.post(`${BACKEND_URL}/user/create`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",  // Set multipart headers
                },
            })
            console.log(response.data.msg)
            navigate("/users")
        }
        catch(err){
            alert("Error Creating User");
            console.log(err)
        }
    }

    const handleNavigate = ()=>{
        navigate("/users")
    }

    return <div className="flex flex-col gap-4 border pl-3 w-[81%]">
        <AddNavbar logo={exit} type="Add User" handleExit={()=>{navigate('/users')}}/>
        <div className="grid grid-cols-3 items-center">
            <LabbledInput name="name" label="Name" onChange={handleChange} />
            <LabbledInput name="mobile" label="Mobile" onChange={handleChange} />
            <LabbledInput name="email_id" label="Email-Id" onChange={handleChange} />
            <SelectRole onChange={handleChange} type="Role"/>

            <InsertImage replaceImage={replaceImage} role={role} handleDivClick={handleDivClick}  upload={upload} inputFileRef={inputFileRef} handleImageChange={handleImageChange}/>

        </div>
        <div className="flex gap-3 self-end mr-4 mt-60">
            <Button type="Cancel" className="w-24 h-8 border-2 rounded-xl text-[12px] text-[#9D9D9D] hover:bg-gray-100" onClick={handleNavigate}/>
            <Button type="Save" className="w-24 h-8 bg-[#662671] rounded-xl text-[12px] text-white hover:bg-fuchsia-700" onClick={handleSubmit}/>
        </div>
    </div>
}