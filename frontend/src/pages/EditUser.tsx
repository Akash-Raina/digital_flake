import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { UpdateUser } from "../components/UpdateUser"

export const EditUser = ()=>{


    return <div className="h-screen w-screen flex flex-col">
        <Navbar/>        
        <div className="flex h-full border">
                <Sidebar/>
                <UpdateUser/>                 
        </div>
    </div>
}