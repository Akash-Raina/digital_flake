import { AddNavbar } from "./AddNavbar"
import exit from "../assets/exit.png"
import { useNavigate, useParams } from "react-router-dom"
import { SelectStatus } from "./SelectStatus";
import { LabbledInput } from "./LabbledInput";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../config";

export const UpdateRole = ()=>{
    const { id } = useParams()
    const [data, setData] = useState({
        id: "",
        role: "",
        status: ""
    })
    const navigate = useNavigate();
    useEffect(()=>{
        const bringData = async()=>{
            const response = await axios.get(`${BACKEND_URL}/role/${id}`, {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setData(response.data.user[0])
        }
        bringData();
    }, [id])
    
    const handleUpdate = async()=>{

        const response = await axios.put(`${BACKEND_URL}/role/${id}`,data,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        } );
        console.log(response)
        navigate('/roles')
    }
    return <div className="border w-[81%] flex flex-col">
        <AddNavbar logo={exit} handleExit={()=>{navigate('/roles')}} type="Edit Role"/>
        <div className="grid grid-cols-3 items-center pl-3 pt-5">            
            <LabbledInput name="role" label="Role Name" value={data?.role} onChange={(e)=>{setData({
                ...data,
                role: e.target.value
            })}} />
            <SelectStatus type="Status" onChange={(e)=>{setData({
                ...data,
                status: e.target.value
            })}} value={data.status}/>
        </div>
        <div className="flex gap-3 self-end mr-4 mt-80 pt-3">
                <Button type="Cancel" className="w-24 h-8 border-2 rounded-xl text-[12px] text-[#9D9D9D] hover:bg-gray-100" onClick={()=>{navigate('/roles')}}/>
                <Button type="Save" className="w-24 h-8 bg-[#662671] rounded-xl text-[12px] text-white hover:bg-fuchsia-800" onClick={handleUpdate}/>
        </div>
    </div>
}