import express from "express"
import cors from "cors"
import adminRoutes from "./routes/adminRoutes/admin.routes.js"
import { authRoutes } from "./routes/authRoutes/auth.routes.js"
import { cartRoutes } from "./routes/cartRoutes/cart.routes.js"
import { orderRoutes } from "./routes/orderRoutes/order.routes.js"
import { wishListRoutes } from "./routes/wishListRoutes/wishList.routes.js"
const app = express()
app.use(cors())
app.use(express.json())
app.use("/uploads/category", express.static("uploads/category"))
app.use("/uploads/subCategory", express.static("uploads/subCategory"))
app.use("/uploads/subSubCategory", express.static("uploads/subSubCategory"))
app.use("/uploads/product", express.static("uploads/product"))
app.use("/admin", adminRoutes)
app.use("/auth", authRoutes)
app.use("/cart", cartRoutes)
app.use("/order", orderRoutes)
app.use("/wishlist", wishListRoutes)
export default app