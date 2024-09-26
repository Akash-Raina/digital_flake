import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

export const Home = ()=>{

    return <div className="h-screen w-screen flex flex-col">
        <Navbar/>        
        <div className="flex h-full border">
                <Sidebar/>
                <HeroSection/>
        </div>
        
    </div>
}