import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { UpdateRole } from "../components/UpdateRole"

export const EditRole = ()=>{

    return <div className="h-screen w-screen flex flex-col">
    <Navbar/>        
    <div className="flex h-full border">
            <Sidebar/>
            <UpdateRole/>
    </div>
</div>
}