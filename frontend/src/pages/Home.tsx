import { useNavigate } from "react-router-dom"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

export const Home = ()=>{
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    if(!token){
        navigate('/login');
    }
    return <div className="h-screen w-screen flex flex-col">
        <Navbar/>        
        <div className="flex h-full border">
                <Sidebar/>
                <HeroSection/>
        </div>
        
    </div>
}