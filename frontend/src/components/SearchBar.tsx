import { ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarType{
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const SearchBar = ({onChange}: SearchBarType)=>{

    return <div className="flex justify-center items-center border-2 border-[#9D9D9D] rounded-md w-[40%]">
    <CiSearch size={25} className="ml-5 text-[#9D9D9D]"/>
    <input type="text" onChange={onChange} className="w-[80%] ml-8 outline-none"/>
</div>
}