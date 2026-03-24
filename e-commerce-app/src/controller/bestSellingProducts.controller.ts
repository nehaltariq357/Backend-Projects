
import Order from "../model/orders.model";
import { Request,Response } from "express";

export const bestSellingProduct = async (req:Request, res:Response) => {

  const result = await Order.aggregate([
    { $unwind: "$items" },
    {
      $group: {
        _id: "$items.productId",
        totalSold: { $sum: "$items.quantity" }
      }
    },
    { $sort: { totalSold: -1 } },
    { $limit: 1 }
  ]);

  res.json(result);
};