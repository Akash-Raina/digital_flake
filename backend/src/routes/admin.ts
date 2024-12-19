import express from "express"
const router = express.Router();
import jwt from "jsonwebtoken"
import { LoginValidation, SignupValidation } from "../middleware";
import bcrypt from "bcrypt"
import nodemailer from "nodemailer"
import { Admin } from "../db/db";

const saltRounds = 10;
router.post("/signup",SignupValidation, async(req, res)=>{
    try{
         const body = req.body;
         const password = body.password;
         bcrypt.hash(password, saltRounds, async(err, hashedPassword) => {
            if (err) {
                console.error("Error hashing password:", err);
            } else {
                const user = await Admin.create({
                    email: body.email,
                    password: hashedPassword
                })
                
            const email = req.body.email;
            const userId = user._id;
            const token = jwt.sign({userId}, process.env.JWT_SECRET as string);
     
            res.status(201).json({
                msg: "admin created successfully",
                email,
                token
            })
            }
        });
         
    }
    catch(err){
         return res.status(500).json({
             msg: err
         })
    }
 })

router.post('/login', LoginValidation, async(req, res)=>{
    try{
        const body = req.body;
        const user = await Admin.findOne({emai: body.email});
        const userId = user?._id;
        const token = jwt.sign({userId}, process.env.JWT_SECRET as string);
        res.status(200).json({
            msg: "Admin logged In",
            userId,
            token
        })
    }
    catch(err){
        return res.status(500).json({
            msg: err
        })
    }
})

router.post("/forget-password", async(req, res)=>{
    const  {email}  = req.body;
    try{
        const admin = await Admin.findOne({email});
        if(!admin){
            return res.status(404).json({
                msg: "Email not found"
            })
        }
        const adminId = admin?._id;
        const resetToken = jwt.sign({adminId}, process.env.JWT_SECRET as string, {expiresIn: '1h'});
        const resetLink = `http://localhost:5173/admin/reset-password/${resetToken}`;
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth:{
                user: process.env.EMAIL_USER as string,
                pass: process.env.EMAIL_PASS as string,
            },
            tls: {
                rejectUnauthorized: false
            }
        })
        const mailOptions = {
            from : process.env.EMAIL_USER as string,
            to : admin.email,
            subject : "Password Reset Request",
            html: `
                <h2>Password Reset Request</h2>
                <p>You requested to reset your password. Click the link below to reset it :</p>
                <a href = "${resetLink}">${resetLink}</a>
                <p>This link will expire in 1 hour.</p>
            `
        }
        await transporter.sendMail(mailOptions);
        res.status(200).json({
            msg: "Reset password link sent to your email"
        })
    }
    catch(err){
        return res.status(500).json({
            err
        })
    }
})

interface jwtPayload{
    adminId: string
}

router.post("/reset-password/:token", async(req, res)=>{
    const { token } = req.params;
    const { newPassword } = req.body;
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as jwtPayload;
        const userId = decoded.adminId;

        const user = await Admin.findById(userId);
        if(!user){
            return res.status(404).json({
                msg: "Invalid token or user does not exist"
            })
        }
        bcrypt.hash(newPassword, saltRounds, async(err, hashedPassword) => {
            if (err) {
                console.error("Error hashing password:", err);
            } else {
                const user = await Admin.updateOne({email: req.body.email}, {password: hashedPassword}, {new: true})
                }
            })
        res.status(200).json({message: "Password successfully reset"});
    }
    catch(err){
        return res.status(500).json({
            msg : "Error resetting password",
            err
        })
    }
})



export default router;