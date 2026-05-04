import { body, validationResult } from "express-validator";
import { categoryModel } from "../../models/category.model.js";
import { subCategoryModel } from "../../models/subCategory.model.js";
export const subCategoryValidator = [
    body("categoryId")
        .notEmpty().withMessage("Please Enter Parent Category....!!")
        .bail()
        .custom(async (value) => {
            const checkCategory = await categoryModel.findOne({
                where: {
                    id: value
                }
            })
            if (!checkCategory) {
                const err = new Error("Category Doesn't Matched....!!")
                throw err
            }
        }),
    body("name")
        .notEmpty().withMessage("Please Enter Category....!!")
        .bail()
        .custom(async (value, { req }) => {
            const isExists = await subCategoryModel.findOne({
                where: {
                    categoryId: req.body.categoryId,
                    name: value
                }
            })
            if (isExists) {
                throw new Error("Sub Category Name Already Exists....!!")
            }
        }),
    body("order")
        .notEmpty().withMessage("Please Enter Category Order....!!")
        .isNumeric().withMessage("Cateory Order Must Be Integer....!!"),

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