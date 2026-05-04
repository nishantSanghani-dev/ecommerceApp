import { categoryAddService, categoryViewService } from "../../services/categoryServices/category.service.js"

export const categoryAddController = async (req, res) => {
    try {
        const { name, order } = req.body
        const obj = {
            name,
            order
        }

        if (req.file) {
            if (req.file.filename) {
                obj['image'] = req.file.filename
            }
        }

        // console.log(obj);


        const data = await categoryAddService(obj)

 
        return res.status(201).json({
            status: true,
            message: "Category Added Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const categoryViewController = async (req, res) => {
    try {
        const data = await categoryViewService()
        return res.status(200).json({
            status: true,
            message: "Category Viewd Successfully....!!",
            staticPath: process.env.CATEGORY_STATICPATH,
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}