import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BACKEND_URL from "../../config";

const ResetPassword = () => {
    const { token } = useParams();  // Token from URL
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_URL}/admin/reset-password/${token}`, { newPassword });
            alert(response.data.message);
            navigate("/login");
        } catch (error) {
            alert("Error: " + error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex mt-4 gap-2 ml-4">
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="border outline-none"
            />
            <button type="submit" className="bg-slate-500 rounded-md w-32 h-8 text-white font-semibold">Reset Password</button>
        </form>
    );
};

export default ResetPassword;
