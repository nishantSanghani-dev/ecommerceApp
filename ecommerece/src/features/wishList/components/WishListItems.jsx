import React from 'react'
import { useAuth, useWishList } from '../../../utils/user.utils'
import { wishListDeleteApi } from '../services/wishListApi'
import { toast } from 'react-toastify'
import { fetchWishList } from '../wishListSlice'
import { useDispatch } from 'react-redux'
import { cartAddApi } from '../../../services/cartApi'
import { fetchCart } from '../../cart/cartSlice'

export default function WishListItems({ value }) {
    const { wishListImagePath } = useWishList()
    const { token } = useAuth()
    const { user } = useAuth()
    const dispatch = useDispatch()
    const removeWishList = async (id) => {
        try {
            const res = await wishListDeleteApi(id, token)
            toast.success(res?.data?.message)
            dispatch(fetchWishList())
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    const addToCart = async (id, colorId,actualPrice) => {
        try {
            if (user) {
                const res = await cartAddApi({
                    productId: id,
                    colorId,
                    quantity: "1",
                    productPrice: actualPrice
                }, token)

                toast.success(res?.data?.message)
                dispatch(fetchCart())
            } else {
                toast.error("Please Login First....!!")
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }
    return (
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
            <img
                src={wishListImagePath + value.product.image}
                alt="product"
                className="rounded-xl mb-4 w-full h-38 object-cover object-fit"
            />

            <h3 className="font-semibold text-lg">{value.product.name}</h3>


            <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-blue-600">₹ {value.product.actualPrice}</span>
            </div>

            <div className="flex gap-2 mt-4">
                <button onClick={() => addToCart(value.product.id, value.color.id,value.product.actualPrice)} className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 text-sm">
                    Add to Cart
                </button>
                <button onClick={() => removeWishList(value.id)} className="flex-1 border border-red-500 text-red-500 py-2 rounded-xl hover:bg-red-50 text-sm">
                    Remove
                </button>
            </div>
        </div>
    )
}
