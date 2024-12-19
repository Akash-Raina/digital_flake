import { ChangeEvent, RefObject } from "react";

interface insertType {
    replaceImage: string | null;
    role: string;
    handleDivClick: () => void;
    upload: string;
    inputFileRef: RefObject<HTMLInputElement>;
    handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const InsertImage = ({replaceImage, role, handleDivClick, upload, inputFileRef, handleImageChange}: insertType)=>{


    return <div className="flex gap-3">
    <div className=" flex flex-col items-center border-2 h-20 w-24 rounded-lg justify-center">
        {replaceImage ? <img src={replaceImage} alt="seleted"  className="w-full h-full rounded-lg"/> : <img src={role} alt="upload"  className="w-8 h-8"/>}
    </div>
    <div onClick={handleDivClick} className="flex flex-col cursor-pointer items-center border-2 h-20 w-24 rounded-lg border-dotted justify-center">
        <img src={upload} alt="" className="w-[40%] h-[40%] mt-3"/>
        <label className="h-[40%] w-[100%] text-[8px] text-center text-bold mt-2">Upload Maximum allowed file size is 10MB</label>
        <input type="file" accept="image/jpeg, image/png" className="hidden" ref = {inputFileRef} onChange={handleImageChange}/>
    </div>
</div>
}