import axios from "axios"
import {useEffect, useState } from "react"
import edit from "../assets/edit.png"
import delt from "../assets/delete.png"
import { useNavigate } from "react-router-dom"
import BACKEND_URL from "../../config"
import { DeletePopUp } from "./DeletePopUp"

interface dataType {
    id: number;
    name: string;
    mobile: number;
    email: string;
    role: string;
    status: "Active" | "Inactive";
} 
  
  export const BringUser = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState<dataType[]>([]);
  
    useEffect(() => {
        const getUser = async () => {
            try {
              const response = await axios.get(`${BACKEND_URL}/user/all`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              });
              setData(response.data.user);
            } catch (err) {
              console.log(err);
            }
          };
        
      getUser();
    }, []);

    const handleDelete = ()=>{
        setShowPopup(true);
    }
    const handleConfirmDelete = async(id:number)=>{
      try {
        const response = await axios.delete(`${BACKEND_URL}/user/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response.data.message);
        setData((prevData) => prevData.filter((user) => user.id !== id));
      } catch (err) {
        console.log(err);
        alert("Error deleting user");
      }
      setShowPopup(false);
    };

    const handleCancelDelete = ()=>{
      setShowPopup(false);
    }
  
   
    return<>
        {data.map((user)=>(
            <div key={user.id} className="flex justify-between px-4 py-1 mt-2 bg-[#f2f2f2] w-[95%] ml-4 items-center">
                <p className="self-center">{user.id}</p>
                <p>{user.name}</p>
                <p>{user.mobile}</p>
                <p>{user.email}</p>
                <p>{user.role}</p>
                <p className={user.status === "Active"?"text-[#00A11A]":"text-[#f70505]"}>{user.status}</p>
                <div className="flex gap-2 cursor-pointer">
                    <img src={edit} alt="edit" className="w-5 h-5 hover:scale-125" onClick={()=>{navigate(`/user/edit/${user.id}`)}}/>
                    <img src={delt} alt="delete" className="w-5 h-5 hover:scale-125" onClick={handleDelete}/>
                    <DeletePopUp show={showPopup} onConfirm={()=>handleConfirmDelete(user.id)} onCancel={handleCancelDelete} type="delete"/>
                </div>
            </div>
        ))}
      </>
    
}
  