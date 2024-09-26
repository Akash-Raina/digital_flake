import image from "../assets/navbar.png"
import { FaRegUserCircle } from "react-icons/fa";
export const Navbar = ()=>{

    return <div className="flex justify-between items-center p-3 px-7 bg-[#662671]">
        <img src={image} alt="logo" className="w-64 h-10 "/>
        <FaRegUserCircle size={30} className="text-white"/>
    </div>
}