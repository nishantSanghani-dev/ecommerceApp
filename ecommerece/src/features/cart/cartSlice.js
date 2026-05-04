import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { cartViewApi } from "../../services/cartApi";
import { logOut } from "../auth/authSlice";

export const fetchCart = createAsyncThunk(
    '/cart/fetchById',
    async (_, { rejectWithValue }) => {
        try {
            const res = await cartViewApi(localStorage.getItem("TOKEN") ?? '')
            return res?.data
        } catch (error) {
            const message = error?.response?.data?.message || error?.message
            // toast.error(message)
            return rejectWithValue(message)
        }
    }
)

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        cartImagePath: ""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.cart = action.payload.data
            state.cartImagePath = action.payload.staticPath
        })
            .addCase(logOut, (state, action) => {
                state.cart = []
                state.cartImagePath = ""
            })
    }
})



export default cartSlice.reducer