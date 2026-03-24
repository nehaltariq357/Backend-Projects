import express from "express"
import connectDB from "../src/config/db"
import postRoutes from "./routes/post.routes"
import userRoutes from "./routes/user.routes"
const app = express()
app.use(express.json())
connectDB()

app.use("/api",userRoutes)
app.use("/api",postRoutes)

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})
