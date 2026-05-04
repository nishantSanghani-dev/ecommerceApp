import { colorModel } from "../../models/color.model.js"
import { productModel } from "../../models/product.model.js"
import { wishListModel } from "../../models/wishList.model.js"
import { wishListItemsModel } from "../../models/wishListItems.model.js"

export const wishListAddService = async (data, userId) => {
    try {
        const { productId, colorId } = data


        let checkUser = await wishListModel.findOne({
            where: {
                userId
            }
        })

        if (!checkUser) {
            checkUser = await wishListModel.create({ userId })
        }
        const checkWishList = await wishListModel.findOne({
            where: {
                userId
            }
        })

        const checkWishProduct = await wishListItemsModel.findOne({
            where: {
                wishListId: checkWishList.id,
                productId,
                colorId
            }
        })
        // console.log(checkWishProduct);

        if (checkWishProduct) {
            return {
                status: false,
                statusCode: 409,
                message: "Item Already In WishList....!!"
            }
        }
        // console.log(productId, colorId, checkUser.id);

        const creatWishList = await wishListItemsModel.create({
            wishListId: checkUser.id,
            productId,
            colorId
        })

        return {
            status: true,
            dataRes: creatWishList
        }
    } catch (error) {
        throw error
    }
}

export const wishListViewService = async (userId) => {
    try {
        const wishList = await wishListModel.findOne({
            where: {
                userId
            }
        })
        const data = await wishListItemsModel.findAll({

            where: {
                wishListId: wishList.id
            },

            include: [
                {
                    model: wishListModel,
                    as: "wishlist",
                    attributes: ["id", "userId"]
                },
                {
                    model: productModel,
                    as: "product",
                    attributes: ["id", "name", "image", "actualPrice"]
                },
                {
                    model: colorModel,
                    as: "color",
                    attributes: ["id", "name"]
                }
            ],
            order: [["createdAt", "DESC"]]
        })
        // console.log(data);


        return data
    } catch (error) {
        throw error
    }
}

export const wishListDeleteService = async (id, userId) => {
    try {
        // console.log(id);

        const checkWishList = await wishListModel.findOne({
            where: {
                userId
            }
        })
        // console.log(checkWishList);
        const deleteRecord = await wishListItemsModel.destroy({
            where: {
                id,
                wishListId: checkWishList.id
            }
        })

    } catch (error) {
        throw error
    }
}