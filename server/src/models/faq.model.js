import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const faqModel = sequelize.define("faq", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    qustions: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [2, 200]
        }
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        defaultValue: 0,
        validate: {
            isInt: true
        }
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true
});