import { AddUser } from "../components/AddUser"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

export const CreateUser = ()=>{
    return <div className="h-screen w-screen flex flex-col">
        <Navbar/>        
        <div className="flex h-full border ">
                <Sidebar/>
                <AddUser/>
        </div>
        
    </div>
}