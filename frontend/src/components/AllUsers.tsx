import { UserHeader } from "./UserHeader"
import { RiExpandUpDownFill } from "react-icons/ri";

export const AllUsers = ()=>{

    

    return <div >
        <div className="flex justify-between px-7 py-3 mt-6 bg-yellow-100 w-[95%] ml-4 items-center ">
            <UserHeader logo = {<RiExpandUpDownFill />} type="Id"/>
            <UserHeader logo = {<RiExpandUpDownFill />} type="Name"/>
            <UserHeader logo = {<RiExpandUpDownFill />} type="Mobile"/>
            <UserHeader logo = {<RiExpandUpDownFill />} type="Email-Id"/>
            <UserHeader logo = {<RiExpandUpDownFill />} type="Role"/>
            <UserHeader logo = {<RiExpandUpDownFill />} type="Status"/>
            <UserHeader type="Action"/>
        </div>


    </div>
}