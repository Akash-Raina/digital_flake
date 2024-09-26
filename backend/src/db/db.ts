import mongoose, { mongo } from "mongoose";
import { IAdmin, IRole, IUser } from "./dbSchema";
import dotenv from "dotenv";
import autoIncrementFactory from 'mongoose-sequence';
dotenv.config();
mongoose.connect(process.env.DB_URL as string);

const AutoIncrement = (autoIncrementFactory as any)(mongoose);

const AdminSchema = new mongoose.Schema({
    email: {type: String},
    password: {type: String},
})

const UserSchema = new mongoose.Schema({
    id: {type: Number, required:true},
    name: {type: String, required:true},
    mobile:{type: Number, required:true},
    email: {type: String, required: true},
    role: {type: String, required: true},
    status: {type:String, enum:["Active, Inactive"], required: true},
    img_upload: {type: String, required: true}
})
UserSchema.plugin(AutoIncrement, {inc_field: 'id'})

const RoleSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    role: {type: String, required: true},
    status: {type: String, enum:["Active", "Inactive"]}
})

export const Admin = mongoose.model<IAdmin>("Admin", AdminSchema);
export const User = mongoose.model<IUser>("User", UserSchema);
export const Role = mongoose.model<IRole>("Role", RoleSchema)
