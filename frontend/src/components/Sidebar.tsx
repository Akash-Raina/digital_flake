import { IoHomeOutline } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Section } from "./Sections";
export const Sidebar = ()=>{

    return <div className="flex flex-col h-[88.4%] w-60 ">
        <Section type="Home" logo = {<IoHomeOutline />} to=""/>
        <Section type="Roles" logo = {<FaHandHoldingUsd />} to = "roles"/>
        <Section type="Users" logo = {<FaRegUser /> } to = "users"/>

    </div>
}