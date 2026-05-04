import { cartItemModel } from "../../models/cartItems.model.js";
import { cartAddService, cartDeleteService, cartUpdateQtyService, cartViewService } from "../../services/cartService/cart.service.js";

export const cartAddController = async (req, res) => {
    try {
        const { userId } = req
        console.log(userId);
        const data = await cartAddService(req.body, userId)


        if (!data.status) {
            return res.status(data.statusCode).json({
                status: data.status,
                message: data.message
            })
        }

        return res.status(201).json({
            status: true,
            message: "Item Added In Cart....!!",
            data: data.dataRes
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}
export const cartViewController = async (req, res) => {
    try {
        const { userId } = req


        const data = await cartViewService(userId)
        return res.status(201).json({
            status: true,
            message: "Cart Items Viewd Successfully....!!",
            staticPath: process.env.PRODUCT_STATICPATH,
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const cartDeleteController = async (req, res) => {
    try {
        const { userId } = req
        const { id } = req.params
        const data = await cartDeleteService(userId, id)

        return res.status(201).json({
            status: true,
            message: "Cart Item Deleted Successfully....!!"
        })


    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const cartUpdateController = async (req, res) => {
    try {
        const { userId } = req
        // console.log(userId);
        
        const { id } = req.params
        const { quantity } = req.body
        // console.log(quantity);
        
        const data = await cartUpdateQtyService(userId, quantity, id)
        return res.status(201).json({
            status: true,
            message: "Cart Item Quntatity Changed Successfully....!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}