import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { UserSection } from "../components/UserSection"

export const Users = ()=>{

    return <div className="h-screen w-screen flex flex-col">
        <Navbar/>        
        <div className="flex h-full border">
                <Sidebar/>
                <UserSection/>
        </div>
        
    </div>
}