export const AddNavbar = ({logo, type, handleExit}: {logo:string, type: string, handleExit: ()=>void})=>{

    return <div className="w-full flex h-10 mt-3 gap-2 items-center pl-4">
        <img src={logo} alt="exit" onClick={handleExit} className="h-4 w-4 cursor-pointer hover:scale-125"/>
        <span className="font-bold">{type}</span>                                                 
    </div>
}