
export const ActionType = ({logo, type}: {logo: string, type: "User" | "Roles" | "Edit User"})=>{
    
    return <div className=" ml-4 flex gap-2 items-center">
    <img src={logo} alt="" className="w-5 h-5"/>
    <span className="font-bold">{type}</span>
</div>
}