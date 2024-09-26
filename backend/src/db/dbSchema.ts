export interface IAdmin{
    emai: string,
    password: string
}

export interface IUser{
    id: number,
    name: string,
    mobile: number,
    email: string,
    role: string,
    status: "Active" | "Inactive",
    img_upload: string
}

export interface IRole{
    id: number,
    role: string,
    status: string
}