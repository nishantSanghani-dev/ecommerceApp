import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { userModel } from "./user.model.js";

export const orderModel = sequelize.define("order", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: userModel,
            key: "id"
        }
    },

 
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },


    status: {
        type: DataTypes.ENUM(
            "pending",
            "placed",
            "shipped",
            "delivered",
            "cancelled"
        ),
        defaultValue: "pending"
    },


    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
    },
    paymentStatus: {
        type: DataTypes.ENUM("pending", "paid", "failed"),
        defaultValue: "pending"
    },

    fullName: {
        type: DataTypes.STRING,
     
    },
    phone: {
        type: DataTypes.STRING,
     
    },
    addressLine1: {
        type: DataTypes.STRING,
     
    },
    addressLine2: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING,
     
    },
    state: {
        type: DataTypes.STRING,
     
    },
    postalCode: {
        type: DataTypes.STRING,
     
    },
    country: {
        type: DataTypes.STRING,
        defaultValue: "India"
    }

}, {
    timestamps: true
});