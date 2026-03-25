import express from "express"
import connectDB from "./config/database"
import homeRoutes from "../src/routes/home.route"
import orderRoutes from "./routes/order.routes"
import productRoutes from "./routes/product.routes"
import userRoutes from "./routes/user.routes"

const app = express()
app.use(express.json()) 
app.use("/api",homeRoutes)
app.use("/api",orderRoutes)
app.use("/api",productRoutes)
app.use("/api",userRoutes)

connectDB().then(() => {
    app.listen(3000, () => {
        console.log("http://localhost:3000/api")
    })
})