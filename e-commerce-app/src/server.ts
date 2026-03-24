import express from "express"
import connectDB from "./config/database"
import homeRoutes from "../src/routes/home.route"
import orderRoutes from "./routes/order.routes"
import productRoutes from "./routes/product.routes"
connectDB()

const app = express()
app.use("/api",homeRoutes)
app.use("/api",orderRoutes)
app.use("/api",productRoutes)

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})