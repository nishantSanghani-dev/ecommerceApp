import express from "express"
import faqRoutes from "../faqRoutes/faq.routes.js"
import categoryRoutes from "../categoryRoutes/category.routes.js"
import subCategoryRoutes from "../subCategoryRoutes/subCategory.routes.js"
import subSubCategoryRoutes from "../subSubCategoryRoutes/subSubCategory.routes.js"
import colorRoutes from "../colorRoutes/color.routes.js"
import materialRoutes from "../materialRoutes/material.routes.js"
import productRoutes from "../productsRoutes/product.routes.js"

const adminRoutes = express.Router()
adminRoutes.use("/faq", faqRoutes)
adminRoutes.use("/category", categoryRoutes)
adminRoutes.use("/sub-category", subCategoryRoutes)
adminRoutes.use("/sub-sub-category", subSubCategoryRoutes)
adminRoutes.use("/color", colorRoutes)
adminRoutes.use("/material", materialRoutes)
adminRoutes.use("/product", productRoutes)
export default adminRoutes