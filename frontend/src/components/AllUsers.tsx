import { BringUser } from "./BringUser";
import { UserHeader } from "./UserHeader"
import { RiExpandUpDownFill } from "react-icons/ri";
import role from "../assets/Role.png"

export const AllUsers = ()=>{
    return <>
        <div className="flex justify-between px-3 py-3 mt-6 bg-[#fff8b7] w-[95%] ml-4 items-center ">
            <UserHeader logo = {<RiExpandUpDownFill />} type="Id"/>
            <UserHeader logo = {<RiExpandUpDownFill />} type="Name"/>
            <UserHeader logo = {<RiExpandUpDownFill />} type="Mobile"/>
            <UserHeader logo = {<RiExpandUpDownFill />} type="Email-Id"/>
            <div className="flex items-center gap-1">
                Role
                <img src={role} alt="r" className="w-6 h-6"/>
            </div>
            <UserHeader logo = {<RiExpandUpDownFill />} type="Status"/>
            <UserHeader type="Action"/>
        </div>
        <BringUser/>
    </>
}