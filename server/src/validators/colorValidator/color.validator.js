import { body, validationResult } from "express-validator";
export const colorValidator = [
    body("name")
        .notEmpty().withMessage("Color Name Is Required....!!")
        .isLength({ min: 2 }).withMessage("Color Name Should Be More Than 2 Character....!!"),
    body("code")
        .notEmpty().withMessage("Color Code Is Required....!!"),
    body("order")
        .notEmpty().withMessage("Color Order Is Required....!!"),

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