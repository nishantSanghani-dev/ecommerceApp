import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { cartModel } from "./cart.model.js";
import { colorModel } from "./color.model.js";
import { productModel } from "./product.model.js";

export const cartItemModel = sequelize.define("cart_item", {
    cartId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: cartModel,
            key: "id"
        }
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
            isInt: true,
            min: 1
        }
    },
    productPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ["cartId", "productId", "colorId"]
        }
    ]
}
);