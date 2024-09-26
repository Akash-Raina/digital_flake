export const Button = ({type, onClick}: {type : "Signup" | "Log In" | "Submit", onClick: ()=>void})=>{
    return <>
        <button onClick = {onClick}className="rounded-xl w-[50%] mt-10 mb-5 h-10 bg-[#5C218B] text-white">{type}</button>
    </>
}