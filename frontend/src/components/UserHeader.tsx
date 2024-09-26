
import { ReactNode } from "react";
export const UserHeader = ({type, logo}: {type:string, logo?: ReactNode})=>{

    return <div className="flex items-center">
            {type}
            {logo}
        </div>
        
}