import express from "express"
import { checkToken } from "../../middleware/checkToken.js"
import { cartAddController, cartDeleteController, cartUpdateController, cartViewController } from "../../controllers/cartController/cart.controller.js"
export const cartRoutes = express.Router()

cartRoutes.post("/add", checkToken, cartAddController)
cartRoutes.get("/view", checkToken, cartViewController)
cartRoutes.delete("/delete/:id", checkToken, cartDeleteController)
cartRoutes.put("/change-qty/:id", checkToken, cartUpdateController)