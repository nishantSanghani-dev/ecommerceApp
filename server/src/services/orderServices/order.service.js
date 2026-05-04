import { cartItemModel } from "../../models/cartItems.model.js";
import { cartModel } from "../../models/cart.model.js";
import { orderModel } from "../../models/order.model.js";
import { orderItemModel } from "../../models/orderItems.model.js";
import { productModel } from "../../models/product.model.js";
import { colorModel } from "../../models/color.model.js";
import { sequelize } from "../../config/db.js";

export const orderAddService = async (data, userId) => {
    try {
        // console.log("fdf");
        return await sequelize.transaction(async (t) => {
            const {
                fullName,
                phone,
                addressLine1,
                addressLine2,
                city,
                state,
                postalCode,
                country,
                paymentMethod
            } = data;

            const cart = await cartModel.findOne({
                where: {
                    userId
                },
                transaction: t
            })
            // console.log(cart);

            if (!cart) {
                return {
                    status: false,
                    statusCode: 404,
                    message: "Cart Not Found....!!"
                };
            }

            const cartItems = await cartItemModel.findAll({
                where: {
                    cartId: cart.id
                },
                transaction: t
            })
            // console.log(cartItems);

            if (!cartItems.length) {
                return {
                    status: false,
                    statusCode: 400,
                    message: "Cart Is Empty....!!"
                };
            }
            let total = 0;
            for (const items of cartItems) {
                // console.log(items);
                
                const product = await productModel.findByPk(items.productId, {
                    transaction: t,
                    lock: t.LOCK.UPDATE
                })
                // console.log(product);
                
                if (!product) {
                    return {
                        status: false,
                        statusCode: 404,
                        message: `Product Not Found :${product.name}`
                    }
                }
                if (product.stock < items.quantity) {
                    return {
                        status: false,
                        statusCode: 401,
                        message: `Insufficient Stock For Product ${product.name}`
                    }
                }
                total += product.actualPrice * items.quantity;
            }
            const order = await orderModel.create({
                userId,
                totalAmount: total,
                paymentMethod,
                fullName,
                phone,
                addressLine1,
                addressLine2,
                city,
                state,
                postalCode,
                country
            }, { transaction: t });
            // console.log(order);
            const orderItems = []
            for (const items of cartItems) {
                const product = await productModel.findByPk(items.productId, {
                    transaction: t,
                    lock: t.LOCK.UPDATE
                })
                // console.log(product);
                
                await product.update(
                    { stock: product.stock - items.quantity },
                    { transaction: t }
                )
                orderItems.push({
                    orderId: order.id,
                    productId: items.productId,
                    colorId: items.colorId,
                    quantity: items.quantity,
                    priceAtPurchase: product.actualPrice
                })
            }

            // const orderItems = cartItems.map((value, index) => {
            //     return {
            //         orderId: order.id,
            //         productId: value.productId,
            //         colorId: value.colorId,
            //         quantity: value.quantity,
            //         priceAtPurchase: value.productPrice
            //     }
            // })
            // console.log(orderItems);
            const addOrderItems = await orderItemModel.bulkCreate(orderItems, {
                transaction: t
            })
            await cartItemModel.destroy({
                where: { cartId: cart.id },
                transaction: t
            });
            return {
                status: true,
                statusCode: 201,
                message: "Order placed successfully",
                dataRes: order
            };
        })

    } catch (error) {
        throw error
    }
}

export const orderViewService = async (userId) => {
    try {
        const data = await orderModel.findAll({
            where: {
                userId
            },
            include: [
                {
                    model: orderItemModel,
                    as: "items",
                    include: [
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
                    ]
                }
            ],
            order: [["createdAt", "DESC"]]
        })
        return data
    } catch (error) {
        throw error
    }
}