import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { categoryModel } from "./category.model.js";

export const subCategoryModel = sequelize.define("subcategory", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: categoryModel, // table name
            key: "id"
        },
    },
    image: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 252]
        }
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true
        }
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ["name", "categoryId"]
        },
        {
            unique: true,
            fields: ["order", "categoryId"]
        }
    ]
});