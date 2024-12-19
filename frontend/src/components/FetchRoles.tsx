
import { AddNavbar } from "./AddNavbar"
import { LabbledInput } from "./LabbledInput"
import exit from "../assets/exit.png"
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
export const FetchRoles = ()=>{
    const navigate = useNavigate()

    return <div className="flex flex-col gap-4 border pl-3 w-[81%]">
        <AddNavbar logo={exit} handleExit={()=>{navigate('/roles')}} type="Add Role"/>
        <div className="w-[30%]">
            <LabbledInput label="Role Name" name="role"  onChange={()=>{}}/>
        </div>
        <div className="flex gap-3 self-end mr-4 mt-80">
            <Button type="Cancel" className="w-24 h-8 border-2 rounded-xl text-[12px] text-[#9D9D9D] hover:bg-gray-100" onClick={()=>{navigate('/roles')}}/>
            <Button type="Save" className="w-24 h-8 bg-[#662671] rounded-xl text-[12px] text-white hover:bg-fuchsia-700" onClick={()=>{}}/>
        </div>
    </div>
}