import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { orderModel } from "./order.model.js";
import { productModel } from "./product.model.js";
import { colorModel } from "./color.model.js";

export const orderItemModel = sequelize.define("order_item", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    orderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: orderModel,
            key: "id"
        },
        onDelete: "CASCADE"
    },

    productId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: productModel,
            key: "id"
        }
    },

    colorId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: colorModel,
            key: "id"
        }
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    priceAtPurchase: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }

}, {
    timestamps: true
});