
import Order from "../model/orders.model";

import { Request, Response } from "express";



export const ordersPerUser = async (req: Request, res: Response) => {

    const result = await Order.aggregate([
        {
            $group: {
                _id: "$userId",
                totalOrders: { $sum: 1 }
            }
        }
    ]);

    res.json(result);
};
