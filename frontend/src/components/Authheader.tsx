import image from "../assets/logo.png"
export const Authheader = ({className}: {className: string})=>{

    return <div className="flex flex-col justify-center items-center">
            <img src={image} alt="logo" className={className}/>
            <div className="text-[#868686]">Welcome to Digitalflake admin</div>
    </div>
}