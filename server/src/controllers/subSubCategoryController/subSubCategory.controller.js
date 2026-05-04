import { subSubCategoryAddService, subSubCategorySubVieService, subSubCategoryViewService } from "../../services/subSubCategoryServices/subSubCategory.service.js"

export const subSubCategoryAddController = async (req, res) => {
    try {
        const { categoryId, subCategoryId, name, order } = req.body

        const obj = {
            categoryId,
            subCategoryId,
            name,
            order
        }
        if (req.file) {
            if (req.file.filename) {
                obj['image'] = req.file.filename
            }
        }
        const data = await subSubCategoryAddService(obj)

        if (!data.status) {
            return res.status(401).json(data)
        }
        return res.status(201).json({
            status: true,
            message: "Sub Sub Category Added Successfully....!!",
            data: data.dataRes
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const subSubCategoryViewController = async (req, res) => {
    try {
        const data = await subSubCategoryViewService()
        return res.status(200).json({
            status: true,
            staticPath: process.env.SUB_SUB_CATEGORY_STATICPATH,
            message: "Sub Sub Category Viewd Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const subSubCategorySubViewController = async (req, res) => {
    try {
        const { subCategoryId } = req.params
        const data = await subSubCategorySubVieService(subCategoryId)

        return res.status(200).json({
            status: true,
            message: "Sub Sub Category Viewd Successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}