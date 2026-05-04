import express from "express"
import { uploads } from "../../utils/multer.util.js"
import { subSubCategoryAddController, subSubCategorySubViewController, subSubCategoryViewController } from "../../controllers/subSubCategoryController/subSubCategory.controller.js"
import { subSubCategoryValidator } from "../../validators/subSubCategoryValidator/subSubCategory.validator.js"

const subSubCategoryRoutes = express.Router()
subSubCategoryRoutes.post('/add', uploads("subSubCategory").single("image"), subSubCategoryValidator, subSubCategoryAddController)
subSubCategoryRoutes.get("/view", subSubCategoryViewController)
subSubCategoryRoutes.get("/view/:subCategoryId", subSubCategorySubViewController)
export default subSubCategoryRoutes