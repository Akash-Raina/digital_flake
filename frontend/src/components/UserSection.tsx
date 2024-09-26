import { AllUsers } from "./AllUsers"
import { UserNavbar } from "./UserNavbar"

export const UserSection = ()=>{

    return <div className="border w-[81%] flex flex-col">
            <UserNavbar/>
            <AllUsers/>
    </div>
    
}