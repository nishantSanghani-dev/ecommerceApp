import express from "express"
import { faqAddController, faqDeleteController, faqSingleViewController, faqStatusController, faqUpdateController, faqViewController } from "../../controllers/faqController/faq.controller.js"
import { faqValidator } from "../../validators/faqValidator/faq.validator.js"

const faqRoutes = express.Router()
faqRoutes.post("/add", faqValidator, faqAddController)
faqRoutes.get("/view", faqViewController)
faqRoutes.post("/delete", faqDeleteController)
faqRoutes.get("/view/:id", faqSingleViewController)
faqRoutes.put("/edit/:id", faqValidator, faqUpdateController)
faqRoutes.put("/change-status",faqStatusController)
export default faqRoutes