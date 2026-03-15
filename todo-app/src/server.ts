import app from "../src/app"

import { connectDB } from "./config/db"

import dotenv from "dotenv"

dotenv.config()

connectDB()

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})