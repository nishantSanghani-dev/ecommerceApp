import { body, validationResult } from "express-validator";

export const productValidator = [
    body("name")
        .notEmpty().withMessage("Product name is required....!!")
        .isLength({ min: 2, max: 250 }).withMessage("Name must be 2-250 characters"),

    body("categoryId")
        .notEmpty().withMessage("Category is required....!!"),

    body("subCategoryId")
        .notEmpty().withMessage("SubCategory is required....!!"),


    body("subSubCategoryId")
        .notEmpty().withMessage("SubSubCategory is required....!!"),


    body("materialId")
        .notEmpty().withMessage("Material is required....!!"),


    body("colorId")
        .notEmpty().withMessage("Color is required....!!"),


    body("type")
        .notEmpty().withMessage("Type is required....!!")
        .isIn(["FEATURED", "NEW_ARRIVAL", "ON_SALE"])
        .withMessage("Invalid type....!!"),


    body("bestSelling")
        .notEmpty().withMessage("bestSelling is required....!!")
        .isBoolean().withMessage("bestSelling must be true/false....!!"),

    body("topRated")
        .notEmpty().withMessage("topRated is required....!!")
        .isBoolean().withMessage("topRated must be true/false....!!"),

    body("upSell")
        .notEmpty().withMessage("upSell is required....!!")
        .isBoolean().withMessage("upSell must be true/false....!!"),


    body("actualPrice")
        .notEmpty().withMessage("Actual price is required....!!")
        .isFloat({ gt: 0 }).withMessage("Actual price must be greater than 0....!!"),

    body("salePrice")
        .notEmpty().withMessage("Sale price is required....!!")
        .isFloat({ gt: 0 }).withMessage("Sale price must be greater than 0....!!"),


    body("stock")
        .notEmpty().withMessage("Stock is required....!!")
        .isInt({ min: 0 }).withMessage("Stock must be a positive number....!!"),


    body("order")
        .notEmpty().withMessage("Order is required....!!")
        .isInt({ min: 0 }).withMessage("Order must be a number....!!"),


    body("description")
        .notEmpty().withMessage("Description is required....!!")
        .isLength({ min: 2, max: 500 }).withMessage("Description must be 2-500 characters....!!"),

    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(401).json({
                status: false,
                message:error.array()[0].msg
            })
        }
        next()
    }
];