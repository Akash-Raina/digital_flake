import { ChangeEvent } from "react";

interface LabbledInputSchema {
    placeholder?: string;
    type?: string;
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name?: string; 
    value?: string
}

export const LabbledInput = ({ placeholder, onChange, label, type, name, value }: LabbledInputSchema) => {
    return (
        <div className="flex border-2 border-gray-300 w-[80%] h-10 rounded-lg mb-5 relative">
            <label className="text-[#868686] text-xs bg-white absolute -top-2 left-3  focus:hidden">{label}</label>
            <input 
                type={type || "text"} 
                placeholder={placeholder} 
                onChange={onChange} 
                className= "w-[90%] outline-none ml-3"
                name={name} 
                value={value}
            />
        </div>
    );
};
