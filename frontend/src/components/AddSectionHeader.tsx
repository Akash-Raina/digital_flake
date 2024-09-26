export const AddsectionHeader = ({type} :{type:"Add User" | "Edit User"})=>{


    return <div className="font-bold m-4">
        {type}
    </div>
}