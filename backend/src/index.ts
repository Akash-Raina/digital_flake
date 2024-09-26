import express from "express"
import { AuthCheck, LoginValidation, SignupValidation } from "./middleware";
import jwt from "jsonwebtoken"
import multer from "multer"
import path from "path"
import nodemailer from "nodemailer"
import cors from "cors"
import { Admin, Role, User } from "./db/db";
import bcrypt from "bcrypt"
import { resourceLimits } from "worker_threads";

const saltRounds = 10;

const app  = express();
app.use(cors());
app.use(express.json());


app.post("/signup",SignupValidation, async(req, res)=>{
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

app.post('/login', LoginValidation, async(req, res)=>{
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

app.post("/createroles", AuthCheck, async(req, res)=>{
    try{
        const body = req.body
        const role = await Role.create({
            role: body.role,
            status: body.status
        })
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

app.get("/roles", AuthCheck, async(req, res)=>{
    try{
        const role = await Role.find({}).populate('user', "id");
        return res.status(200).json({
            role
        })
    }
    catch(err){
        return res.status(500).json({
            msg: err
        })
    }
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Folder to store images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Add a timestamp to the filename
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error("Only JPG and PNG files are allowed"));
        }
    },
});

app.post("/users", AuthCheck,upload.single("img_upload"), async(req, res)=>{
    try{
        const body = req.body;
        const user = await User.create({

            name: body.name,
            mobile: body.mobile,
            email: body.email,
            role: body.role,
            status: body.status,
            img_upload: req.file?.originalname
        })
        return res.status(201).json({
            msg: "User got created"
        })
    }
    catch(err){
        return res.status(500).json({
            err
        })
    }
})

app.put("/role/:id", AuthCheck, async(req, res)=>{
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedRole = await Role.findOneAndUpdate({ u_id: id }, updateData, { new: true });
        if (!updatedRole) {
            return res.status(404).json({ message: "Id not found" });
        }
        res.status(200).json(updatedRole);
    } catch (error) {
        res.status(500).json({ message: "Error updating Role", error });
    }
})

app.delete("/role/:id", AuthCheck, async(req, res)=>{
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

app.put("/user/:id", AuthCheck, async(req, res)=>{
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedRole = await User.findOneAndUpdate({ u_id: id }, updateData, { new: true });
        if (!updatedRole) {
            return res.status(404).json({ message: "Id not found" });
        }
        res.status(200).json(updatedRole);
    } catch (error) {
        res.status(500).json({ message: "Error updating Role", error });
    }
})

app.delete("/user/:id", AuthCheck, async(req, res)=>{
    const { id } = req.params;

    try {
        const deletedRole = await User.findOneAndDelete({ u_id: id });
        if (!deletedRole) {
            return res.status(404).json({ message: "Id not found" });
        }
        res.status(200).json({ message: "Role deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting Role", error });
    }
})
app.listen(3000);