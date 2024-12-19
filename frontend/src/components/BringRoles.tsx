import axios from "axios";
import { useEffect, useState } from "react"
import BACKEND_URL from "../../config";
import edit from "../assets/edit.png";
import delt from "../assets/delete.png"
import { useNavigate } from "react-router-dom";
import { DeletePopUp } from "./DeletePopUp";
interface RoleType{
    id: number,
    role: string,
    status: "Active" | "Inactive"
}

export const BringRoles = ()=>{
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const [roles, setRoles] = useState<RoleType[]>([]);

    useEffect(()=>{
        const getRole = async()=>{
            try{
                const response = await axios.get(`${BACKEND_URL}/role/all`, {
                    headers:{
                        Authorization : `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setRoles(response.data.user)
            }
            catch(err){
                console.log(err)
            }
        }
        getRole()
    },[])

    return <>
        {roles.map((role)=>(
            <div key={role.id} className="flex justify-between px-4 py-1 mt-2 bg-[#f2f2f2] w-[95%] ml-4 items-center">
                <p>{role.id}</p>
                <p>{role.role}</p>
                <p className={role.status === 'Active' ? "text-[#00A11A]" : "text-[#f70505]"}>{role.status}</p>
                <div className="flex gap-2 cursor-pointer">
                <img src={edit} alt="edit" className="w-5 h-5 hover:scale-125" onClick={()=>{navigate(`/role/edit/${role.id}`)}}/>
                <img src={delt} alt="delete" className="w-5 h-5 hover:scale-125" onClick={()=>{setShow(true)}}/>
                <DeletePopUp type="Delete" show = {show} onCancel={()=>{setShow(false)}} onConfirm={()=>{setShow(false)}}/>
                </div>
            </div>
        ))}
    </>
}