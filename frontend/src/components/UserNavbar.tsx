import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import { AddButton } from "./AddButton";

export const UserNavbar = ()=>{

    return <div className="w-full flex h-10 mt-3 justify-between items-center">
        <div className=" ml-4 flex gap-2 items-center">
            <FaRegUser />
            <span className="font-bold">User</span>
        </div>
        <div className="flex justify-center items-center border-2 border-[#9D9D9D] rounded-md w-[40%]">
            <CiSearch size={25} className="ml-5 text-[#9D9D9D]"/>
            <input type="text" className="w-[80%] ml-8 outline-none"/>
        </div>
        <AddButton route="/create"/>
    </div>
}
