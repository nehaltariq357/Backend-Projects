import express from "express"
import { Request,Response } from "express"

const app = express()

app.get("/",(req:Request,res:Response)=>{
    res.json({message:"hello express js ecommerce app"})
})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})