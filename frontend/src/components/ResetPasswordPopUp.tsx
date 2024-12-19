import { ChangeEvent } from "react";

interface ResetPasswordPopUpProps{
    show: boolean,
    onConfirm: ()=>void;
    onCancel: ()=>void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const ResetPasswordPopUp = ({show, onConfirm, onCancel, onChange}: ResetPasswordPopUpProps)=>{
    if(!show) return null;

    return <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <p className="text-[#5c218b] font-semibold text-lg">Did you forget password?</p>
            <p className="text-[14px] text-[#8f8f8f] pt-3 pb-3">Enter your email address and we will send you a link to restore password</p>
            <div className="flex flex-col gap-2">
                <span className="text-[#8f8f8f] self-start text-md ml-16">Email Address</span>
                <input onChange={onChange} type="text" className="border w-80 h-10 self-center rounded-lg outline-none pl-3"/>
            </div>
            <button onClick={onConfirm} className="h-10 w-80 bg-[#5c218b] rounded-md text-white mt-4">Request reset link</button>
            <p onClick={onCancel} className="text-[#8f8f8f] mt-3 underline cursor-pointer">Back to log in</p>
        </div>
    </div>
}