import { Router } from "express";
import {createProduct,getProducts} from "../controller/product.controller"

 const router = Router()

router.post("/product",createProduct)
router.get("/product",getProducts)

export default router