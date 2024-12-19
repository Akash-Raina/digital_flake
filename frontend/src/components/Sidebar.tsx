import role from "../assets/hand.png"
import home from "../assets/home.png"
import user from "../assets/user.png"
import { Section } from "./Sections";
export const Sidebar = ()=>{

    return <div className="flex flex-col h-full w-60 bg-[#f4f4f4] ">
        <Section type="Home" logo = {home} to=""/>
        <Section type="Roles" logo = {role} to = "roles"/>
        <Section type="Users" logo = {user } to = "users"/>

    </div>
}