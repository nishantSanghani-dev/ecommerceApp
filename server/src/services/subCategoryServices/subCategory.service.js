
import { Op } from "sequelize"
import { categoryModel } from "../../models/index.js"
import { subCategoryModel } from "../../models/subCategory.model.js"

export const subCategoryAddService = async (data) => {
    try {

        const { name, order, categoryId, image } = data
        const checkCategory = await categoryModel.findByPk(categoryId)

        // if (!checkCategory) {
        //     return {
        //         status: false,
        //         message: "Category Doesn't Matched....!!"
        //     }

        // }

        // const checkName = await subCategoryModel.findOne({

        //     where: { name, categoryId }

        // })
        // // console.log("name", checkName);

        // if (checkName) {
        //     return {
        //         status: false,
        //         message: "Sub Category Name Already Exists....!!"
        //     }

        // }
        const res = await subCategoryModel.create({
            name,
            order,
            categoryId,
            image
        })


        return res
    } catch (error) {
        throw error
    }
}

export const subCategoryViewService = async () => {
    try {
        const data = await subCategoryModel.findAll({
            include: [
                {
                    model: categoryModel,
                    as: "category",
                    attributes: ["id", "name"]
                }
            ],
            order: [["createdAt", "DESC"]]
        })
        return data
    } catch (error) {
        throw error
    }
}

export const subCategoryCategoryViewService = async (categoryId) => {
    try {
        const data = await subCategoryModel.findAll({
            where: {
                categoryId
            }
        })

        return data
    } catch (error) {
        throw error
    }
}