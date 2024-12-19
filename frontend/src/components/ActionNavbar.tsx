import { SearchBar } from "./SearchBar";
import { ActionType } from "./ActionType";
import { Button } from "./Button";

export const ActionNavbar = ({logo, type, onclick}: {logo: string, type: "User" | "Roles", onclick: ()=>void})=>{

    return <div className="w-full flex h-10 mt-3 justify-between items-center">
        <ActionType logo = {logo} type={type}/>
        <SearchBar onChange={()=>{}}/>
        <Button onClick={onclick} className="w-20 h-8 bg-[#662671] rounded-lg text-white text-xs font-semibold mr-7 hover:bg-fuchsia-800" type="Add New"/>
    </div>
}
