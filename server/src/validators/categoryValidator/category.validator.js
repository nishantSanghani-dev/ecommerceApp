import { body, validationResult } from "express-validator";
import { categoryModel } from "../../models/category.model.js";
export const categoryValidator = [
    body("name")
        .notEmpty().withMessage("Please Enter Category....!!")
        .bail()
        .custom(async (value) => {
            const checkCategory = await categoryModel.findOne({
                where: {
                    name: value
                }
            })
            if (checkCategory) {
                const err = new Error("Category Already Exists....!!")
                throw err
            }
        }),
    body("order")
        .notEmpty().withMessage("Please Enter Category Order....!!")
        .isNumeric().withMessage("Cateory Order Must Be Integer....!!"),

    (req, res, next) => {
        const error = validationResult(req)
        // console.log(error);

        if (!error.isEmpty()) {
            const firstError = error.array()[0]
            // console.log(firstError);

            return res.status(firstError.statusCode || 400).json({
                status: false,
                message: firstError.msg
            })
        }
        next()
    }
]