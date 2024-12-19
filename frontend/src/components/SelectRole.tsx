import { ChangeEvent } from "react";
import { FaCaretDown } from "react-icons/fa";
interface SelectType{
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    type: string;
    value?:string;
}
export const SelectRole = ({onChange, type, value}: SelectType)=>{

    return <div className="flex border-2 border-gray-300 w-[80%] h-10 rounded-lg mb-5 relative">
    <label className="text-[#868686] text-xs bg-white absolute -top-2 left-3  focus:hidden2">
        {type}
    </label>
    <select
        id="role"
        name="role"
        value={value}
        onChange={onChange}
        className="block appearance-none w-full bg-white border hover:border-gray-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline"
    >
        <option value="">Select a role</option>
        <option value="admin">Admin</option>
        <option value="superadmin">Superadmin</option>
        <option value="caller">Caller</option>
        <option value="account">Account</option>
    </select>
    <div className="borderpointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <FaCaretDown />
    </div>
</div>

}