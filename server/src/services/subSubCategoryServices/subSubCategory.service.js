import { subCategoryModel } from "../../models/subCategory.model.js"
import { categoryModel } from "../../models/category.model.js"
import { subSubCategoryModel } from "../../models/subSubCategory.model.js"


export const subSubCategoryAddService = async (data) => {
    try {
        const { categoryId, subCategoryId, name } = data

        const checkCategory = await categoryModel.findByPk(categoryId)

        if (!checkCategory) {
            return {
                status: false,
                message: "Please Select Valid Category....!!"
            }

        }

        const checkSubCategory = await subCategoryModel.findByPk(subCategoryId)

        if (!checkSubCategory) {
            return {
                status: false,
                message: "Please Select Valid Sub Category....!!"
            }
            // throw new Error()
        }


        const checkName = await subSubCategoryModel.findOne({
            where: {
                name: name,
                categoryId,
                subCategoryId
            }
        })

        if (checkName) {
            return {
                status: false,
                message: "Sub Sub Category Name Already Exists....!!"
            }
        }

        const res = await subSubCategoryModel.create(data)

        return {
            status: true,
            dataRes: res
        }

    } catch (error) {
        throw error
    }
}

export const subSubCategoryViewService = async () => {
    try {
        const data = await subSubCategoryModel.findAll({
            include: [
                {
                    model: categoryModel,
                    as: "category",
                    attributes: ["id", "name"]
                },
                {
                    model: subCategoryModel,
                    as: "subCategory",
                    attributes: ["id", "name"]
                }
            ], order: [["createdAt", "DESC"]]
        })
        return data
    } catch (error) {
        throw error
    }
}

export const subSubCategorySubVieService = async (subCategoryId) => {
    try {
        const res = await subSubCategoryModel.findAll({
            where: {
                subCategoryId
            },
            attributes: {
                exclude: [
                    "subCategoryId",
                    "categoryId"
                ]
            },

            include: [
                {
                    model: subCategoryModel,
                    as: "subCategory",
                    attributes: ["id", "name"]
                },
                {
                    model: categoryModel,
                    as: "category",
                    attributes:["id","name"]
                }
            ]
        })

        return res
    } catch (error) {
        throw error
    }
}
