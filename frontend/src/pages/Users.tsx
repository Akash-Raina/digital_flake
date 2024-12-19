import { ActionNavbar } from "../components/ActionNavbar"
import user from "../assets/user.png"
import { AllUsers } from "../components/AllUsers";
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { useNavigate } from "react-router-dom";

export const Users = ()=>{
    const navigate = useNavigate();
    return <div className="h-screen w-screen flex flex-col">
        <Navbar/>        
        <div className="flex h-full border">
                <Sidebar/>
                <div className="border w-[81%] flex flex-col">
                    <ActionNavbar logo = {user} type={"User"} onclick={()=>{navigate('/create')}}/>
                    <AllUsers/>
                </div>
                
        </div>
        
    </div>
}