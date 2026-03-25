import { Router } from "express";
import {placeOrder} from "../controller/order.controller"
import {ordersPerUser} from "../controller/oderPerUsers.controller"
import {bestSellingProduct} from "../controller/bestSellingProducts.controller"
import totalSale from "../controller/totalSales.controller"



 const router = Router()

router.post("/order",placeOrder)

router.get("/analytics/sales", totalSale);

router.get("/analytics/best-product", bestSellingProduct);

router.get("/analytics/orders-per-user", ordersPerUser);

export default router