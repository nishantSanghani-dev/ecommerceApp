import { body, validationResult } from "express-validator";

export const materailValidator = [
    body("name")
        .notEmpty().withMessage("Material Name Is Required....!!"),
    body("order")
        .notEmpty().withMessage("Material Order Is Required....!!")
        .isNumeric().withMessage("Material Order Should Be Integer....!!"),

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