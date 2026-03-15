import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: false
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low"
    }
}, {
    timestamps: true
})

export const Todo = mongoose.model("Todo", todoSchema)