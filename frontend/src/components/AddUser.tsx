import { AddsectionHeader } from "./AddSectionHeader"
import { FaCaretDown } from "react-icons/fa";
import { LabbledInput } from "./LabbledInput"
import role from "../assets/Role.png"
import upload from "../assets/upload.png"

export const AddUser = ()=>{

    return <div className="flex flex-col gap-4 border pl-3 w-[81%]">
        <AddsectionHeader type="Add User"/>
        <div className="grid grid-cols-3 items-center">
            <LabbledInput label="Name" onChange={()=>{}} />
            <LabbledInput label="Mobile" onChange={()=>{}} />
            <LabbledInput label="Email-Id" onChange={()=>{}} />

            <div className="flex border-2 border-gray-300 w-[80%] h-10 rounded-lg mb-5 relative">
                <label className="text-[#868686] text-xs bg-white absolute -top-2 left-3  focus:hidden2" htmlFor="role">
                    Role
                </label>
                <select
                    id="role"
                    className="block appearance-none w-full bg-white border hover:border-gray-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="admin">Admin</option>
                    <option value="superadmin">Superadmin</option>
                    <option value="caller">Caller</option>
                    <option value="account">Account</option>
                </select>
                <div className="borderpointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FaCaretDown />
                </div>
            </div>

            <div className="flex gap-3">
                <div className=" flex flex-col items-center border-2 h-20 w-24 rounded-lg justify-center">
                    <img src={role} alt=""  className="w-8 h-8"/>
                </div>
                <div className=" flex items-center border-2 h-20 w-24 rounded-lg border-dotted justify-center">
                    <img src={upload} alt="" className="w-8 h-8"/>
                    <span></span>
                </div>
            </div>

        </div>
        <div className="flex gap-3 self-end mr-4 mt-60">
            <button className="w-24 h-8 border-2 rounded-xl text-[12px] text-[#9D9D9D]">Cancel</button>
            <button className="w-24 h-8 bg-[#662671] rounded-xl text-[12px] text-white">Save</button>
        </div>

    </div>
}