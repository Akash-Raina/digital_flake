import express, {Request, Response} from "express"
const router = express.Router();
import { AuthCheck, LoginValidation, SignupValidation } from "../middleware";
import multer from "multer"
import path from "path"
import { User } from "../db/db";

router.get("/all", AuthCheck, async(req, res)=>{
    try{
        const user = await User.find({});
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

router.post("/create", AuthCheck, upload.single("img_upload"), async(req, res)=>{
    try{
        const body = req.body;
        const user = await User.create({
            name: body.name,
            mobile: body.mobile,
            email: body.email,
            role: body.role,
            status: "Active",
            img_upload: req.file? `/uploads/${req.file.filename}` : undefined
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

router.get("/get/:id", AuthCheck, async(req, res)=>{
    const {id} = req.params;
    try{
        const numericId = Number(id);
        
        if (isNaN(numericId)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
        const user = await User.findOne({id:numericId});

        if(user && user.img_upload){
            user.img_upload = `${req.protocol}://${req.get('host')}${user.img_upload}`
        }
        return res.status(200).json({
            user,
        })
    }
    catch(err){
        return res.status(500).json({
            msg: err
        })
    }
})

interface MulterRequest extends Request {
    file?: Express.Multer.File;
  }

router.put("/:id", AuthCheck, upload.single("img_upload"), async(req:MulterRequest, res:Response)=>{
    try {
        const { id } = req.params;
        const updatedData = req.body;
        if(req.file){
            updatedData.img_upload = req.file.filename;
        }
        const updatedUser = await User.findOneAndUpdate({ id: id }, updatedData, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "Id not found" });
        }
        res.status(200).json({
            updatedUser
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating User", error });
    }
})

router.delete("/:id", AuthCheck, async (req, res) => {
    const { id } = req.params;
    try {
        const numericId = Number(id);
        if (isNaN(numericId)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const deletedUser = await User.findOneAndDelete({ id: numericId });
        if (!deletedUser) {
            return res.status(404).json({ message: "Id not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Error deleting user", error });
    }
});


export default router;