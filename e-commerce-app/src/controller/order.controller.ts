import mongoose from "mongoose";
import Order from "../model/orders.model";
import { Product } from "../model/product.model";
import { Request, Response } from "express";

export const placeOrder = async (req: Request, res: Response) => {

    const session = await mongoose.startSession()

    try {

        await session.withTransaction(async () => {
            const { userId, items } = req.body


            let total = 0

            for (let item of items) {
                const product = await Product.findById(item.productId).session(session)

                // check stock
                if (!product || product.stock < item.quantity) {
                    throw new Error("out of stock")
                }
                console.log("ITEM:", item)
                console.log("PRODUCT:", product)
                //reduce stock

                await Product.updateOne(
                    { _id: item.productId },
                    { $inc: { stock: -item.quantity } },
                    { session }
                )
                total += product.price * item.quantity
                item.price = product.price

            }

            // create order
            await Order.create([{
                userId,
                items,
                total
            }], { session })
        })
        res.json({ message: "order placed successfully" })

    } catch (error) {
        res.status(400).json({ message: (error as Error).message })

    } finally {
        session.endSession()
    }
}

