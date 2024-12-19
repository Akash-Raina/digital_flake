import { BringRoles } from "./BringRoles";
import { UserHeader } from "./UserHeader"
import { RiExpandUpDownFill } from "react-icons/ri";
export const AllRoles = ()=>{

    return <>
        <div className="flex justify-between px-3 py-3 mt-6 bg-[#fff8b7] w-[95%] ml-4 items-center ">
            <UserHeader logo = {<RiExpandUpDownFill />} type="Id"/>
            <UserHeader logo = {<RiExpandUpDownFill />} type="Role Name"/>
            <UserHeader logo = {<RiExpandUpDownFill />} type="Status"/>
            <UserHeader type="Action"/>
        </div>
        <BringRoles/>
    </>
}