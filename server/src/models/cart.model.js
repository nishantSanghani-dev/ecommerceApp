import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { userModel } from "./user.model.js";
import { colorModel } from "./color.model.js";

export const cartModel = sequelize.define("cart", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: userModel,
            key: "id"
        }
    }
}, {
    timestamps: true
})