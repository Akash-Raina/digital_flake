import { Authheader } from "../components/Authheader"
import { SignupAuth } from "../components/SignupAuth"

export const Signup = ()=>{

    return <div className="flex items-center justify-center h-screen w-screen bg-[#5C218B33] bg-opacity-20">
        <div className="w-[60%]  sm:w-[460px] sm-[802px] bg-white rounded-lg">
            <Authheader className="mt-10 w-[30%] h-[40%]"/>
            <SignupAuth/>
        </div>
    </div>
}