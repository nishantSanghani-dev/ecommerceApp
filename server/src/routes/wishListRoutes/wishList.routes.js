import express from "express"
import { checkToken } from "../../middleware/checkToken.js"
import { wishListAddController, wishListDeleteController, wishListViewController } from "../../controllers/wishListController/wishList.controller.js"
export const wishListRoutes = express.Router()
wishListRoutes.post("/add", checkToken, wishListAddController)
wishListRoutes.get("/view", checkToken, wishListViewController)
wishListRoutes.delete("/delete/:id", checkToken, wishListDeleteController)