import express from "express"
import { Request,Response } from "express"

const app = express()

app.get("/",(req:Request,res:Response)=>{
    res.send("hello express js")
})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})