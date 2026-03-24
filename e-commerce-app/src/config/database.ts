import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


const connectDB = async () => {
    try {

        const url = process.env.MONGO_URL
        if (!url) {
            throw new Error("mongo url env variable is not defined")
        }

        await mongoose.connect(url)
        console.log("mongoDB connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB