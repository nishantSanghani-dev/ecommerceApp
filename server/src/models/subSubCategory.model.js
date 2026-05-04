import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { categoryModel } from "./category.model.js";
import { subCategoryModel } from "./subCategory.model.js";

export const subSubCategoryModel = sequelize.define(
    "subsubcategory",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        categoryId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: categoryModel,
                key: "id"
            }
        },

        subCategoryId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: subCategoryModel,
                key: "id"
            }
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 250]
            }
        },

        image: {
            type: DataTypes.STRING
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
    },
    {
        timestamps: true,

        indexes: [
            {
                unique: true,
                fields: ["name", "subCategoryId"]
            }
        ]
    }
);