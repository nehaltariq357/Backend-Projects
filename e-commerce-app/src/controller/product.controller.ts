import { Product } from "../model/product.model";
import { Request,Response } from "express";


//create product
export const createProduct = async(req:Request,res:Response)=>{
    const {name,price,stock} =req.body

    const product = await Product.create({
        name,
        price,
        stock
    })
    res.json(product)
}

//get products

export const getProducts = async(req:Request,res:Response)=>{
    const product = await Product.find()
    if (!product){
        res.status(400).json({message:"product not found"})
    }
    res.json(product)
}