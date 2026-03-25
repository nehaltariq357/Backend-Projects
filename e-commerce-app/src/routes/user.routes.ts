import { Router } from "express";
import { createUsers,getUsers } from "../controller/user.controller";

const router = Router()

router.post("/user",createUsers)
router.get("/user",getUsers)

export default router