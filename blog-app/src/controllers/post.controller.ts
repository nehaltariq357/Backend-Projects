
import { Request,Response } from "express"
import { Post } from "../models/post.model"

// welcome page

const welcomePage = async(req:Request,res:Response)=>{
    res.json("welcome to Blog Api")
}

// create post

const createPost = async(req:Request,res:Response)=>{
    const {title,content,userId} =req.body

    const post = await Post.create({
        title,
        content,
        userId
    })
    res.json(post)
}

// add comment

const addComment = async(req:Request,res:Response)=>{
    const {id} = req.params
    const {text,userId} = req.body

    const post = await Post.findByIdAndUpdate(
        id,
        {
            $push:{
                comments:{text,userId}
            }
        },
        {new:true}
    )
    if (!post) {
  return res.status(404).json({ message: "Post not found" });
}
    res.json(post)
}


// get post with user

const getPosts =  async(req:Request,res:Response)=>{
    const posts = await Post.aggregate([
        {
            $lookup:{
                from:"users",
                localField:"userId",
                foreignField:"_id",
                as:"user"
            }
        }
    ])
    res.json(posts)
}

// get posts with comment count

const getPostsWithCommentCount = async(req:Request,res:Response)=>{
    const posts = await Post.aggregate([
        {
            $addFields:{
                commentCount:{
                    $size:"$comments"
                }
            }
        }
    ])
    res.json(posts)
}

export {createPost,addComment,getPosts,getPostsWithCommentCount,welcomePage}