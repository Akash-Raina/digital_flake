import { RequestHandler, response } from "express";
import z from "zod"
import { Admin } from "./db/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

const inputValid = z.object({
    email: z.string(),
    password: z.string().min(5)
})

export const SignupValidation:RequestHandler = async(req, res, next)=>{
    const success = inputValid.safeParse(req.body);
    if(!success.success){
        return res.status(400).json({
            msg: "Wrong signup credintials"
        })
    }
    const already = await Admin.findOne({emai: req.body.email})
    if(already){
        return res.status(400).json({
            msg: "user already exists"
        })
    }
    next();
}

export const LoginValidation:RequestHandler = async(req, res, next)=>{
    const success = inputValid.safeParse(req.body);
    if(!success.success){
        return res.status(400).json({
            msg: "Wrong login credintials"
        })
    } 
    const already = await Admin.findOne({email: req.body.email})
    if(!already){
        return res.status(400).json({
            msg: "user doesn't exists"
        })
    }
    const password = req.body.password;
    const hashedPassword = already.password;

    bcrypt.compare(password, hashedPassword, (err, result) => {
        if (err) {
            return res.status(401).json({
                msg: err
            })
        } else if (result){}
        else {
            return res.status(401);
        }
    });
    next();
} 

declare module 'express-serve-static-core' {
    interface Request {
      userId?: string;  // Add the custom property
    }
}

interface jwtPayload{
    userid: string
}

export const AuthCheck:RequestHandler = (req, res, next)=>{

    const token = req.headers.authorization;

    if(!token || !token.startsWith('Bearer ')){
        return res.status(401).json({
            msg: "No access"
        })
    }

    const check = token.split(' ')[1];
    try{
        const decoded = jwt.verify(check, process.env.JWT_SECRET as string) as jwtPayload;
        req.userId = decoded.userid;
    }
    catch(err){
        return res.status(401).json({
            msg: "No access"
        })
    }
    next()
}
