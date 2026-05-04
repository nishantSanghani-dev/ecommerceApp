import { cartModel } from "./cart.model.js";
import { cartItemModel } from "./cartItems.model.js";
import { categoryModel } from "./category.model.js";
import { colorModel } from "./color.model.js";
import { materialModel } from "./material.model.js";
import { orderModel } from "./order.model.js";
import { orderItemModel } from "./orderItems.model.js";
import { productModel } from "./product.model.js";
import { subCategoryModel } from "./subCategory.model.js";
import { subSubCategoryModel } from "./subSubCategory.model.js";
import { wishListModel } from "./wishList.model.js";
import { wishListItemsModel } from "./wishListItems.model.js";

categoryModel.hasMany(subCategoryModel, {
    as: "subCategories",
    foreignKey: "categoryId"
})
subCategoryModel.belongsTo(categoryModel, {
    as: "category",
    foreignKey: "categoryId"
})


categoryModel.hasMany(subSubCategoryModel, {
    as: "subSubCategories",
    foreignKey: "categoryId"
})

subSubCategoryModel.belongsTo(categoryModel, {
    as: "category",
    foreignKey: "categoryId"
})

subCategoryModel.hasMany(subSubCategoryModel, {
    as: "subSubCategories",
    foreignKey: "subCategoryId"
})


subSubCategoryModel.belongsTo(subCategoryModel, {
    as: "subCategory",
    foreignKey: "subCategoryId"
})


// for the products...

categoryModel.hasMany(productModel, {
    as: "products",
    foreignKey: "categoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

productModel.belongsTo(categoryModel, {
    as: "category",
    foreignKey: "categoryId"
})


subCategoryModel.hasMany(productModel, {
    as: "products",
    foreignKey: "subCategoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

productModel.belongsTo(subCategoryModel, {
    as: "subCategory",
    foreignKey: "subCategoryId"
})

subSubCategoryModel.hasMany(productModel, {
    as: "products",
    foreignKey: "subSubCategoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

productModel.belongsTo(subSubCategoryModel, {
    as: "subSubCategory",
    foreignKey: "subSubCategoryId"
})


materialModel.hasMany(productModel, {
    as: "products",
    foreignKey: "materialId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

productModel.belongsTo(materialModel, {
    as: "material",
    foreignKey: "materialId"
})


colorModel.hasMany(productModel, {
    as: "products",
    foreignKey: "colorId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

productModel.belongsTo(colorModel, {
    as: "color",
    foreignKey: "colorId"
})


// for the cart Model.


cartModel.hasMany(cartItemModel, {
    foreignKey: "cartId",
    as: "items"
})

cartItemModel.belongsTo(cartModel, {
    foreignKey: "cartId",
    as: "cart"
})

cartItemModel.belongsTo(productModel, {
    foreignKey: "productId",
    as: "product"
})

cartItemModel.belongsTo(colorModel, {
    foreignKey: "colorId",
    as: "color"
})

// Order → OrderItems
orderModel.hasMany(orderItemModel, {
    foreignKey: "orderId",
    as: "items"
});

orderItemModel.belongsTo(orderModel, {
    foreignKey: "orderId"
});

// Optional (for joins)
orderItemModel.belongsTo(productModel, {
    foreignKey: "productId",
    as: "product"
});

orderItemModel.belongsTo(colorModel, {
    foreignKey: "colorId",
    as: "color"
});


// for the wishlist


wishListModel.hasMany(wishListItemsModel, {
    as: "items",
    foreignKey: "wishListId"
})
wishListItemsModel.belongsTo(wishListModel, {
    as: "wishlist",
    foreignKey: "wishListId"
})
wishListItemsModel.belongsTo(colorModel, {
    as: "color",
    foreignKey: "colorId"
})
wishListItemsModel.belongsTo(productModel, {
    as: "product",
    foreignKey: "productId"
})

export { categoryModel, subCategoryModel, subSubCategoryModel, productModel, cartModel, cartItemModel, orderItemModel, orderModel, wishListItemsModel, wishListModel }