import { InsertImage } from "./InsertImage"
import { LabbledInput } from "./LabbledInput"
import { SelectRole } from "./SelectRole"
import exit from "../assets/exit.png"
import role from "../assets/Role.png"
import upload from "../assets/upload.png"
import { useNavigate, useParams } from "react-router-dom"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { Button } from "../components/Button"
import { SelectStatus } from "./SelectStatus"
import axios from "axios"
import BACKEND_URL from "../../config"
import { AddNavbar } from "./AddNavbar"

export const UpdateUser = ()=>{
    const [image, setImage] = useState<File | null>(null);
    const inputFileRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const [replaceImage, setReplaceImage] = useState<string | null>(null);
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        mobile: "",
        email: "",
        role: "",
        status: "",
        img_upload: ""
    });

    useEffect(()=>{
       const getData = async()=>{
            try{
                const response = await axios.get(`${BACKEND_URL}/user/get/${id}`,{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                const userData = (response.data.user)
                setUser(response.data.user)

                if(userData.img_upload){
                    setReplaceImage(userData.img_upload);
                }
                console.log("Image URL: ", userData.img_upload);

            }
            catch(err){
                alert("Error Fetching data")
                console.log(err)
            }
       }
       getData()


    }, [id])

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
    
    const handleExit = ()=>{
        navigate('/users')
    }

    const handleNavigate = ()=>{
        navigate("/users")
    }

    const handleSubmit = async ()=>{
        const formData = new FormData();
        formData.append("name", user.name);
        formData.append("mobile", user.mobile);
        formData.append("email", user.email);
        formData.append("role", user.role);
        formData.append("status", user.status)

        if(image){
            formData.append("img_upload", image);
        }

        try{
            const response = await axios.put(`${BACKEND_URL}/user/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",  // Set multipart headers
                },
            })
            console.log(response.data)
            navigate("/users")
        }
        catch(err){
            alert("Error Updating User");
            console.log(err)
        }
    }

    return <div className="border w-[81%] flex flex-col">
        <AddNavbar logo={exit} handleExit={handleExit} type="Edit User"/>
        <div className="grid grid-cols-3 items-center pl-3 pt-5">
            <LabbledInput name="name" label="Name" value = {user.name} onChange={handleChange} />
            <LabbledInput name="mobile" label="Mobile" value = {user.mobile} onChange={handleChange} />
            <LabbledInput name="email" label="Email-Id" value = {user.email} onChange={handleChange} /> 
            <SelectRole onChange={handleChange} type="Role" value = {user.role}/>
            <InsertImage 
                replaceImage={replaceImage} 
                role={replaceImage || role} 
                handleDivClick={handleDivClick}  
                upload={upload}
                inputFileRef={inputFileRef} 
                handleImageChange={handleImageChange}
            />
            <SelectStatus type="Status" onChange={handleChange} value={user.status}/>
        </div>
        <div className="flex gap-3 self-end mr-4 mt-64">
                <Button type="Cancel" className="w-24 h-8 border-2 rounded-xl text-[12px] text-[#9D9D9D] hover:bg-gray-100" onClick={handleNavigate}/>
                <Button type="Save" className="w-24 h-8 bg-[#662671] rounded-xl text-[12px] text-white hover:bg-fuchsia-800" onClick={handleSubmit}/>
        </div>
    </div> 
}