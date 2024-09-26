import { useNavigate } from "react-router-dom";
export const AddButton = ({route}: {route:string})=>{
    const navigate = useNavigate();
    return <button onClick={()=>{
        navigate(`${route}`)
    }} className="w-20 h-8 bg-[#662671] rounded-lg text-white text-xs font-semibold mr-7">
        Add New
    </button>
}