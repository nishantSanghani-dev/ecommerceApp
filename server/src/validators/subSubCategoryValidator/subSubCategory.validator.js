import { body, validationResult } from "express-validator";
import { subSubCategoryModel } from "../../models/subSubCategory.model.js";
import { subCategoryModel } from "../../models/subCategory.model.js";
export const subSubCategoryValidator = [
    body("categoryId")
        .notEmpty().withMessage("Please Enter Parent Category....!!"),
    body("subCategoryId")
        .notEmpty().withMessage("Please Enter Sub Category....!!")
        .bail()
        .custom(async (value, { req }) => {
            const checkSubCategory = await subCategoryModel.findAll({
                where: {
                    categoryId: req.body.categoryId,
                    id: value
                }
            })
            // console.log(checkSubCategory);
            
            if (checkSubCategory.length==0) {
                throw new Error("Please Select Valid Sub Category....!!")
            }
        }),
    body("name")
        .notEmpty().withMessage("Please Enter Sub Sub Category....!!"),
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