import { Request, Response, NextFunction } from "express";

const validateTodo = (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.body
    if (!title) {
        return res.json({ message: "Title is required" })
    }
    next()
}

export default validateTodo