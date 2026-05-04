import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

import { categoryModel } from "./category.model.js";
import { subCategoryModel } from "./subCategory.model.js";
import { subSubCategoryModel } from "./subSubCategory.model.js";
import { materialModel } from "./material.model.js";
import { colorModel } from "./color.model.js";

export const productModel = sequelize.define(
    "product",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 250]
            }
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

        subSubCategoryId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: subSubCategoryModel,
                key: "id"
            }
        },

        materialId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: materialModel,
                key: "id"
            }
        },

        colorId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: colorModel,
                key: "id"
            }
        },

        type: {
            type: DataTypes.ENUM("FEATURED", "NEW_ARRIVAL", "ON_SALE"),
            allowNull: false
        },

        bestSelling: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        topRated: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        upSell: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        actualPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },

        salePrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        order: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 500]
            }
        },

        image: {
            type: DataTypes.STRING
        },

        backImage: {
            type: DataTypes.STRING
        },

        galleryImages: {
            type: DataTypes.JSON
        }
    },
    {
        timestamps: true
    }
);