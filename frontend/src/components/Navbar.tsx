import image from "../assets/navbar.png"
import { Logout } from "./Logout"

export const Navbar = ()=>{

    return <div className="flex justify-between items-center p-3 px-7 bg-[#662671]">
        <img src={image} alt="logo" className="w-64 h-10 "/>
        <Logout/>
    </div>
}