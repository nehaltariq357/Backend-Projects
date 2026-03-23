import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDB = async()=>{
    try{
        const mongoURL = process.env.MONGO_URI
        if (!mongoURL){
            throw new Error('MONGO_URI environment variable is not defined');
        }
        await mongoose.connect(mongoURL)
        console.log("MongoDB Connected");

    }catch(error){

    }
}