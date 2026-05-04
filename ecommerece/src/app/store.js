import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/auth/authSlice";
import cartSlice from "../features/cart/cartSlice";
import wishListSlice from "../features/wishList/wishListSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        cart: cartSlice,
        wishList: wishListSlice
    }
})