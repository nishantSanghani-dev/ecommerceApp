import express from "express"
import { checkToken } from "../../middleware/checkToken.js"
import { orderAddController, orderViewController } from "../../controllers/orderController/order.controller.js"
export const orderRoutes = express.Router()

orderRoutes.post("/add", checkToken, orderAddController)
orderRoutes.get("/view", checkToken, orderViewController)