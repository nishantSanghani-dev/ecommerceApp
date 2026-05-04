import { body, validationResult } from "express-validator";
import { userModel } from "../../models/user.model.js";
import { orignalPassword } from "../../utils/hasPassword.js";

export const registerValidator = [
    body("name")
        .notEmpty().withMessage("User Name Is Required....!!"),
    body("email")
        .notEmpty().withMessage("User Email Is Required....!!")
        .isEmail().withMessage("Please Enter Valid Email....!!")
        .bail()
        .custom(async (value) => {
            const isExists = await userModel.findOne({
                where: {
                    email: value
                }
            })
            if (isExists) {
                throw new Error("User Email Already Exists....!!")
            }

        }),
    body("password")
        .notEmpty().withMessage("Current Password Is Required....!!")
        .isLength({ min: 6 }).withMessage("Password Must Be More Than 6 Character....!!"),
    body("confirmPassword")
        .notEmpty().withMessage("Confirm Password Is Required....!!")
        .custom((value, { req }) => {
            if (value != req.body.password) {
                throw new Error("Confirm Password Doesn't Matched....!!")
            }
            return true
        }),

    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(401).json({
                status: false,
                message: error.array()[0].msg
            })
        }
        next()
    }
]

export const loginValidator = [
    body("email")
        .notEmpty().withMessage("User Email Is Required....!!")
        .isEmail().withMessage("Please Enter Valid Email....!!"),
        // .bail()
        // .custom(async (value) => {
        //     const checkEmail = await userModel.findOne({
        //         where: {
        //             email: value
        //         }
        //     })
        //     if (!checkEmail) {
        //         throw new Error("Email Doesn't Exists....!!")
        //     }
        // }),
    body("password")
        .notEmpty().withMessage("User Password Is Required....!!"),
    // .custom(async (value, { req }) => {
    //     const checkUser = await userModel.findOne({
    //         where: {
    //             email: req.body.email
    //         }
    //     })
    //     if (!checkUser) {
    //         throw new Error("Email Doesn't Exists....!!")
    //     }

    //     const isSame = await orignalPassword(value, checkUser.password)

    //     if (!isSame) {
    //         throw new Error("Please Enter Correct Password....!!")
    //     }

    // }),
    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(401).json({
                status: false,
                message: error.array()[0].msg
            })
        }
        next()
    }
]