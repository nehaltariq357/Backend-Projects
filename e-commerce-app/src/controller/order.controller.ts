import mongoose from "mongoose";
import Order from "../model/orders.model";
import { Product } from "../model/product.model";
import { Request,Response } from "express";

export const placeOrder = async(req:Request,res:Response)=>{

    const session = await mongoose.startSession()

    try{

        await session.withTransaction(async ()=>{
            const {userId,items} = req.body

            let total = 0

            for (let item of items){
                const product = await Product.findById(item.productId).session(session)

                // check stock
                if (!product || product.stock < item.quantiy){
                    throw new Error("out of stock")
                }

                //reduce stock

                await Product.updateOne(
                    {_id:item.productId},
                    {$inc:{stock: -item.quantiy}},
                    {session}
                )
                total +=product.price * item.quantiy
                item.price = product.price

            }

            // create order
            await Order.create([{
                userId,
                items,
                total
            }],{session})
        })
        res.json({message:"order placed successfully"})

    }catch(error){
        res.status(400).json({message:error})
        
    }finally{
        session.endSession()
    }
}

