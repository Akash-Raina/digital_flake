import { ReactNode, useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
interface sectionType{
    type : "Home" | "Roles"| "Users"
    logo : ReactNode
    to: string
}
export const Section = ({ type, logo, to }:sectionType) => {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);
  
    return (
      <button
        onClick={() => {
          setIsClicked(true);
          navigate(`/${to}`);
        }}
        className={`flex items-center justify-between w-full p-4 hover:bg-yellow-100 ${
          isClicked ? "bg-yellow-100" : ""
        }`}
      >
        {logo}
        <div className="mr-9">{type}</div>
        <MdKeyboardArrowRight />
      </button>
    );
  };