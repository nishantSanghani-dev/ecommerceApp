import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { wishListModel } from "./wishList.model.js";
import { productModel } from "./product.model.js";
import { colorModel } from "./color.model.js";

export const wishListItemsModel = sequelize.define("wishlist_item", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    wishListId: {
        type: DataTypes.UUID,
        references: {
            model: wishListModel,
            key: "id"
        }
    },
    productId: {
        type: DataTypes.UUID,
        references: {
            model: productModel,
            key: "id"
        }
    },
    colorId: {
        type: DataTypes.UUID,
        references: {
            model: colorModel,
            key: "id"
        }
    }
})