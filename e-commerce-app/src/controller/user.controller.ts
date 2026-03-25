import { User } from "../model/user.model";
import { Request,Response } from "express";

// create user
const createUsers = async(req:Request,res:Response)=>{
    const {name,email,role} =req.body
    try{

        const user = await User.create({
            name,
            email,
            role
        })
        res.json(user)
    }catch(error){
        res.status(404).json({message:"error"})
    }
}

// get user

const getUsers = async (req:Request,res:Response)=>{
    try{

        const users = await User.find()
        if (users.length ===0){
            res.status(404).json({message:"user not found"})
        }
        res.json(users)
    }catch(error){
        res.status(404).json("user not found")
    }
}

export {createUsers,getUsers}