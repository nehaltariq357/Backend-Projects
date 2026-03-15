import { Router } from "express";

import { createTodos, deleteTodo, getTodos, updateTodo } from "../controllers/todo.controller"
import logger from "../middleware/logger.middleware";
import validateTodo from "../middleware/validateTodo.middleware";
const router = Router()

router.get("/todos", logger, getTodos)
router.post("/todos", logger,validateTodo, createTodos)
router.put("/todos/:id", logger, updateTodo)
router.delete("/todos/:id", logger, deleteTodo)

export default router