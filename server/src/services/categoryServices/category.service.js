import { Op } from "sequelize"
import { categoryModel } from "../../models/category.model.js"

export const categoryAddService = async (data) => {
    try {
        const { name, order } = data

        // const checkName = await categoryModel.findOne({
        //     where: {
        //         name
        //     }
        // })
        // if (checkName) {
        //     return {
        //         status: false,
        //         message: "Category Name Or Already Exists....!!"
        //     }

        // }
        const res = await categoryModel.create(data)

        return res
    } catch (error) {
        throw error
    }
}

export const categoryViewService = async () => {
    try {
        const res = await categoryModel.findAll({
            order: [["createdAt", "DESC"]]
        })

        return res
    } catch (error) {
        throw error
    }
}