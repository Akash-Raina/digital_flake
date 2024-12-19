import express from "express"
const router = express.Router();
import { AuthCheck, LoginValidation, SignupValidation } from "../middleware";
import { Role, User } from "../db/db";

router.post("/create", AuthCheck, async(req, res)=>{
    try{
        
        // 
        //     const role = await Role.create({
        //     role: user.role,
        //     status: user.status
        //      })
        return res.status(201).json({
            msg: "Roles created Successfully"
        })
    }
    catch(err){
        return res.status(500).json({
            err
        })
    }
})

router.get("/all", AuthCheck, async(req, res)=>{
    try{
        const body = req.body
        const user = await User.find({}).select('status role id');
        return res.status(200).json({
            user
        })
    }
    catch(err){
        return res.status(500).json({
            msg: err
        })
    }
})

router.get("/:id", AuthCheck, async(req, res)=>{
    try{
        const {id} = req.params;
        const numericId = Number(id);
        
        if (isNaN(numericId)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
        const user = await User.find({id: numericId}).select('status role id');
        return res.status(200).json({
            user
        })
    }
    catch(err){
        return res.status(500).json({
            msg:err
        })
    }
})



router.put("/:id", AuthCheck, async(req, res)=>{
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedRole = await User.findOneAndUpdate({ id: id }, updateData, { new: true });
        if (!updatedRole) {
            return res.status(404).json({ message: "Id not found" });
        }
        res.status(200).json(updatedRole);
    } catch (error) {
        res.status(500).json({ message: "Error updating Role", error });
    }
})

router.delete("/:id", AuthCheck, async(req, res)=>{
    const { id } = req.params;

    try {
        const deletedRole = await Role.findOneAndDelete({ u_id: id });
        if (!deletedRole) {
            return res.status(404).json({ message: "Id not found" });
        }
        res.status(200).json({ message: "Role deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting Role", error });
    }
})

export default router