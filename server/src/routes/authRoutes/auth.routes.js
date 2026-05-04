import express from "express"
import { userLoginController, userRegisterController } from "../../controllers/authController/auth.controller.js"
import { loginValidator, registerValidator } from "../../validators/authValidator/auth.validator.js"

export const authRoutes = express.Router()

authRoutes.post("/register", registerValidator, userRegisterController)
authRoutes.post("/login", loginValidator, userLoginController)

