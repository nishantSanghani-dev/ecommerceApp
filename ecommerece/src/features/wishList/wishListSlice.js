import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { wishListViewApi } from "./services/wishListApi";
import { logOut } from "../auth/authSlice";

export const fetchWishList = createAsyncThunk(
    '/wishlist/fetchById',
    async (_, { rejectWithValue }) => {
        try {
            const res = await wishListViewApi(localStorage.getItem("TOKEN") ?? '')
            return res?.data
        } catch (error) {
            const message = error?.response?.data?.message || error?.message
            // toast.error(message)
            return rejectWithValue(message)
        }
    }
)

export const wishListSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishList: [],
        wishListImagePath: ""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWishList.fulfilled, (state, action) => {
            state.wishList = action.payload.data
            state.wishListImagePath = action.payload.staticpath
        })
            .addCase(logOut, (state, action) => {
                state.wishList = []
                state.wishListImagePath=""
            })
    }
})

export default wishListSlice.reducer
