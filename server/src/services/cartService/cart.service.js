import { cartItemModel } from "../../models/cartItems.model.js"
import { cartModel } from "../../models/cart.model.js"
import { productModel } from "../../models/product.model.js"
import { colorModel } from "../../models/color.model.js"


export const cartAddService = async (data, userId) => {
    try {
        const { productId, colorId, quantity, productPrice } = data
        // console.log(productId);

        let checkCart = await cartModel.findOne({
            where: {
                userId: userId
            }
        })
        // console.log("cart", checkCart);
        if (!checkCart) {
            checkCart = await cartModel.create({ userId });
        }

        // console.log("cart", checkCart);

        const checKProduct = await productModel.findByPk(productId)

        // console.log(checKProduct);


        if (!checKProduct) {
            return {
                status: false,
                statusCode: 401,
                message: "Product Doesn't Exists....!!"
            }
        }

        const checkColor = await colorModel.findByPk(colorId)
        if (!checkColor) {
            return {
                status: false,
                statusCode: 401,
                message: "Color Doesn't Exists....!!"
            }
        }
        const isExistsInCart = await cartItemModel.findOne({
            where: {
                cartId: checkCart.id,
                productId,
                colorId
            }
        })
        // console.log(isExistsInCart);

        if (isExistsInCart) {
            return {
                status: false,
                statusCode: 409,
                message: "Product Already  Exists In Cart....!!"
            }
        }

        const newItems = await cartItemModel.create({
            cartId: checkCart.id,
            productId,
            colorId,
            quantity,
            productPrice
        })

        // console.log(newItems);

        return {
            status: true,
            dataRes: newItems
        }

    } catch (error) {
        throw error
    }
}

export const cartViewService = async (userId) => {
    try {

        // console.log(userId);
        const cart = await cartModel.findOne({
            where: {
                userId
            }
        })
        // console.log(cart);

        const data = await cartItemModel.findAll({
            where: {
                cartId: cart.id
            },

            include: [
                {
                    model: cartModel,
                    as: "cart",
                    attributes: ["id", "userId"]
                },
                {
                    model: colorModel,
                    as: "color",
                    attributes: ["id", "name"]
                },
                {
                    model: productModel,
                    as: "product",
                    attributes: ["id", "name", "image"]
                }
            ],
            order: [["createdAt", "DESC"]]
        },
        )

        return data
    } catch (error) {
        throw error
    }
}

export const cartDeleteService = async (userId, id) => {
    try {
        // console.log(id);

        const checkCart = await cartModel.findOne({
            where: {
                userId
            }
        })
        // console.log(checkCart);
        const deleteRecord = await cartItemModel.destroy({
            where: {
                id,
                cartId: checkCart.id
            }
        })

    } catch (error) {
        throw error
    }
}

export const cartUpdateQtyService = async (userId, quantity, id) => {
    // console.log(quantity);

    try {
        const checkCart = await cartModel.findOne({
            where: {
                userId
            }
        })
        // console.log(checkCart);
        const cartItems = await cartItemModel.findAll({
            where: {
                cartId: checkCart.id
            }
        })

        const updateQty = await cartItemModel.update(
            { quantity },
            {
                where: { id, cartId: checkCart.id }
            }
        );

    } catch (error) {
        throw error
    }
}