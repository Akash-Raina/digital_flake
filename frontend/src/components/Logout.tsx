import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { DeletePopUp } from "./DeletePopUp";
import { useNavigate } from "react-router-dom";

export const Logout = ()=>{
    const navigate = useNavigate()
    const [showPopUp, setShowPopup] = useState(false)
    const handleLogout = ()=>{
        setShowPopup(true)
    }
    const handleConfirm = ()=>{
        localStorage.setItem("token", "")
        navigate('/login')
    }
    return <>
        <FaRegUserCircle size={30} className="text-white cursor-pointer" onClick={handleLogout}/>
        <DeletePopUp show={showPopUp} onConfirm={handleConfirm} onCancel={()=>{setShowPopup(false)}} type="Logout" />
    </>
}