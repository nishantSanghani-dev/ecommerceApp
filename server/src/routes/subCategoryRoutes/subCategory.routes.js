import express from "express"
import { subCategoryAddController, subCategoryCategoryViewController, subCategoryViewController } from "../../controllers/subCategoryController/subCategory.controller.js"
import { uploads } from "../../utils/multer.util.js"
import { subCategoryValidator } from "../../validators/subCategoryValidator/subCategory.validator.js"

const subCategoryRoutes = express.Router()
subCategoryRoutes.post('/add', uploads("subCategory").single("image"), subCategoryValidator, subCategoryAddController)
subCategoryRoutes.get("/view", subCategoryViewController)
subCategoryRoutes.get("/view/:categoryId", subCategoryCategoryViewController)
export default subCategoryRoutes