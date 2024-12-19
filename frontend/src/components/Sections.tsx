import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
interface sectionType{
    type : "Home" | "Roles"| "Users"
    logo : string,
    to: string
}
export const  Section = ({ type, logo, to }:sectionType) => {
    const navigate = useNavigate();
    return (
      <button
        onClick={() => {
          navigate(`/${to}`);            
        }}
        className={`flex items-center justify-between w-full p-4 hover:bg-[#fff8b7] active:bg-yellow-100`}
      >
        <img src={logo} alt="icon" className="w-6 h-6" />
        <div className="mr-9">{type}</div>
        <MdKeyboardArrowRight />
      </button>
    );
  };