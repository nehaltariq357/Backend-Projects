import mongoose from "mongoose";
import Order from "../model/orders.model";
import { Request,Response } from "express";

const totalSale = async(req:Request,res:Response)=>{
    const result = await Order.aggregate([
        {
            $group:{
                _id:null,
                totalSales:{$sum:"$total"}
            }
        }
    ])
    res.json(result)
}

export default totalSale