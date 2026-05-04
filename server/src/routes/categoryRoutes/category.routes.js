import express from "express"

import { categoryAddController, categoryViewController } from "../../controllers/categoryController/category.controller.js"
import { uploads } from "../../utils/multer.util.js"
import { categoryValidator } from "../../validators/categoryValidator/category.validator.js"
const categoryRoutes = express.Router()
categoryRoutes.post('/add', uploads("category").single("image"), categoryValidator,categoryAddController)
categoryRoutes.get("/view",categoryViewController)
export default categoryRoutes