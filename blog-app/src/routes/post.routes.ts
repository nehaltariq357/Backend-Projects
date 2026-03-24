import {Router} from "express"

import {createPost,addComment,getPosts,getPostsWithCommentCount,welcomePage} from "../controllers/post.controller"

const router = Router()

router.post("/posts",createPost)
router.get("/posts",getPosts)
router.post("/posts/:id/comments",addComment)
router.get("/posts/comments/count",getPostsWithCommentCount)
router.get("/",welcomePage)

export default router