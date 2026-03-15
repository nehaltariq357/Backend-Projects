import express from "express"
import { Request, Response } from "express"
import todoRoutes from "./routes/todo.routes"

const app = express()

// Middleware
app.use(express.json()) // Parse JSON bodies

// Routes
app.use("/api", todoRoutes) // Mount todo routes under /api

// Root route
app.get("/", (req: Request, res: Response) => {
    res.send("Todo API - Backend is running!")
})

export default app