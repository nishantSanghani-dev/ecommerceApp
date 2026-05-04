import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { userModel } from "./user.model.js";

export const wishListModel = sequelize.define("wishlist", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: userModel,
            key: "id"
        }
    }
})