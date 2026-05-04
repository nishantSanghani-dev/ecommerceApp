import { body, validationResult } from "express-validator";
export const faqValidator = [
    body("qustions")
        .notEmpty().withMessage("Faq Qustion Is Required....!!")
        .isLength({ min: 2 }).withMessage("Qustion Should Be More Than 2 Charactrer....!!"),
    body("answer")
        .notEmpty().withMessage("Faq Answer Is Required....!!")
        .isLength({ min: 2 }).withMessage("Answer Should Be More Than 2 Charactrer....!!"),
    body("order")
        .notEmpty().withMessage("Faq Order Is Required....!!"),

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
]