import { subCategoryAddService, subCategoryCategoryViewService, subCategoryViewService } from "../../services/subCategoryServices/subCategory.service.js";

export const subCategoryAddController = async (req, res) => {
    try {
        const { name, order, categoryId } = req.body
        const obj = {
            name,
            order,
            categoryId
        }
        // console.log(obj);

        if (req.file) {
            if (req.file.filename) {
                obj['image'] = req.file.filename
            }
        }

        // console.log(obj);

        const data = await subCategoryAddService(obj)


        // if (!data.status) {
        //     return res.status(409).json(data)
        // }


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

export const subCategoryViewController = async (req, res) => {
    try {

        const data = await subCategoryViewService()
        return res.status(200).json({
            status: true,
            message: "subCategory Viewd Successfully....!!",
            staticPath: process.env.SUB_CATEGORY_STATICPATH,
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const subCategoryCategoryViewController = async (req, res) => {
    try {
        const { categoryId } = req.params
        const data = await subCategoryCategoryViewService(categoryId)
        return res.status(200).json({
            status: true,
            message: "subCategory Viewd Successfully....!!",
            staticPath: process.env.SUB_CATEGORY_STATICPATH,
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}