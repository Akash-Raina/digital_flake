import role from "../assets/hand.png"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { ActionNavbar } from "../components/ActionNavbar";
import { AllRoles } from "../components/AllRoles";
import { useNavigate } from "react-router-dom";

export const Roles = ()=>{
    const navigate = useNavigate()
    return <div className="h-screen w-screen flex flex-col">
        <Navbar/>        
        <div className="flex h-full border">
                <Sidebar/>
                <div className="border w-[81%] flex flex-col">
                    <ActionNavbar logo={role} type="Roles" onclick={()=>{navigate("/role/add")}}/>
                    <AllRoles/>
                </div>
                
        </div>
        
    </div>
}