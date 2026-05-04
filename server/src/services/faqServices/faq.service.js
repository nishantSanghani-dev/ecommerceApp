import { faqModel } from "../../models/faq.model.js"
import { Op, Sequelize } from "sequelize"
export const faqAddService = async (data) => {
    try {
        const { qustions, order } = data
        const checkData = await faqModel.findOne({
            where: {
                [Op.or]: [
                    {
                        qustions
                    },
                    {
                        order
                    }
                ]
            }
        })
        if (checkData) {
            return {
                status: false,
                message: "Order Or Qustions Should Be Unique....!!"
            }
        }
        const res = await faqModel.create(data)

        return {
            status: true,
            dataRes:res
        }
    } catch (error) {
        throw error
    }
}

export const faqViewService = async (data) => {
    try {
        const { skip, limit, searchValue } = data
        // console.log(searchValue);
        const whereCondition = searchValue
            ? {
                qustions: {
                    [Op.iLike]: `%${searchValue}%`, // PostgreSQL
                },
            }
            : {};
        const offset = (skip - 1) * limit
        const res = await faqModel.findAndCountAll(
            {
                where: whereCondition,
                limit: limit, offset: offset,
                order: [["createdAt", "DESC"]]
            }
        )
        return res
    } catch (error) {
        throw error
    }
}

export const faqDeleteService = async (faqId) => {
    try {
        // console.log(faqId);

        const data = await faqModel.destroy({
            where: {
                id: faqId
            }
        })

        return data
    } catch (error) {
        throw error
    }
}

export const faqSingleViewService = async (faqId) => {
    try {
        const data = await faqModel.findByPk(faqId)
        return data
    } catch (error) {
        throw error
    }
}

export const faqUpdateService = async (data, faqId) => {
    try {
        const res = await faqModel.update(data, {
            where: {
                id: faqId
            }
        })

        return res
    } catch (error) {
        throw error
    }
}

export const faqStatusService = async (faqId) => {
    try {
        if (faqId.length == 0) {
            throw new Error("Please Select Faq Items...!!")
        }
        const [count] = await faqModel.update(
            {
                status: Sequelize.literal("NOT status"), //  toggle
            },
            {
                where: {
                    id: faqId, // works with array (IN query)
                },
            }
        );

        return count
    } catch (error) {
        throw error
    }
}