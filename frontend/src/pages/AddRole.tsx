import { FetchRoles } from "../components/FetchRoles"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

export const AddRole = ()=>{

    return <div className="h-screen w-screen flex flex-col">
        <Navbar/>        
        <div className="flex h-full border">
                <Sidebar/>
                <FetchRoles/>          
        </div>
    </div>
}