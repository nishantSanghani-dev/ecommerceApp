import { wishListAddService, wishListDeleteService, wishListViewService } from "../../services/wishListService/wishList.service.js"

export const wishListAddController = async (req, res) => {
    try {
        const { userId } = req
        const data = await wishListAddService(req.body, userId)

        if (!data.status) {
            return res.status(data.statusCode).json({
                status: data.status,
                message: data.message
            })
        }

        return res.status(201).json({
            status: true,
            message: "Item Added In WishList....!!",
            data: data.dataRes
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}
export const wishListViewController = async (req, res) => {
    try {
        const { userId } = req
        const data = await wishListViewService(userId)
        return res.status(200).json({
            status: true,
            staticpath: process.env.PRODUCT_STATICPATH,
            message: "WishList Item View Successfully ....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const wishListDeleteController = async (req, res) => {
    try {
        const { id } = req.params
        const { userId } = req
        // console.log(id);

        const data = await wishListDeleteService(id,userId)
        return res.status(200).json({
            status: true,
            message: "WishList Item Deleted Successfully ....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}