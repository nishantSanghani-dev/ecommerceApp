import { orderModel } from "../../models/order.model.js"
import { orderAddService, orderViewService } from "../../services/orderServices/order.service.js"

export const orderAddController = async (req, res) => {
    try {
        const { userId } = req
        const data = await orderAddService(req.body, userId)
        if (!data.status) {
            return res.status(data.statusCode).json({
                status: data.status,
                message: data.message
            })
        }
        return res.status(201).json({
            status: true,
            message: "Order Created Successfully....!!",
            data: data.dataRes
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}
export const orderViewController = async (req, res) => {
    try {
        const { userId } = req
        const data = await orderViewService(userId)
        return res.status(201).json({
            status: true,
            message: "Order Viewd Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}