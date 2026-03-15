import { Todo } from "../models/todo.model";
import { Request, Response } from "express";

// read

const getTodos = async (req: Request, res: Response) => {
    
    //pagination
    const page = Number(req.query.page)
    const limit = Number(req.query.limit)

    const skip = (page - 1) * limit;
    // filtering
    const completed = req.query.completed
    let filter:any = {}
    if (completed !== undefined){
        filter.completed = completed === "true"
    }
    // search
    const search = req.query.search;
    if (search){
        filter.title = {$regex:search, $options:"i"}
    }

    // sort
    const sort = req.query.sort 
    const todos = await Todo.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort as any)


    res.json(todos);
};

// create

const createTodos = async (req: Request, res: Response) => {
    const { title, completed, priority } = req.body;
    const todo = await Todo.create({ title, completed, priority });
    res.json(todo)
};


// update

const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params
    const { title, completed, priority } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, { title, completed, priority }, { new: true });
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }
    res.json(todo);
};

// delete

const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully" });
};

export { getTodos, createTodos, updateTodo, deleteTodo };