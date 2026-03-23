import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    text: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [commentSchema],

},
    {
        timestamps: true
    }
)

export const Post = mongoose.model("Post", postSchema)