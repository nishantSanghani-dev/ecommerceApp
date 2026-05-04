import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useAuth, useCart } from '../../../utils/user.utils';
import { cartDeleteApi, cartUpdateApi } from '../../../services/cartApi';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../cartSlice';

export default function CartTable({ value, cartImagePath }) {
    console.log(value);
    const { token } = useAuth()
    // console.log(token);

    const dispatch = useDispatch()
    const handleRemove = async (id) => {

        try {
            const res = await cartDeleteApi(id, token)
            toast.success(res?.data?.message)
            dispatch(fetchCart())
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    };

    const handleCheckout = () => {
        toast.success("Proceeding to checkout 🚀");
    };


    const handleQtyChnage = async (id, qty) => {
        console.log(id, qty);
        try {
            const res = await cartUpdateApi(id, qty, token);
            // toast.success(res?.data?.message);
            dispatch(fetchCart()); // refresh cart
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }

    }
    return (
        <div className="flex items-center border rounded-2xl p-4 mb-4 shadow-sm">
            <img
                src={cartImagePath + value.product.image}
                alt="Product"
                className="w-24 h-24 rounded-xl object-cover"
            />

            <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{value.product.name}</h2>
                <p className="text-gray-500">₹{value.productPrice*value.quantity}</p>

                <div className="flex items-center mt-2 gap-2">
                    <button onClick={() => {
                        if (value.quantity == 1) {
                            handleRemove(value.id)
                        }
                        else {
                            handleQtyChnage(value.id, value.quantity - 1)
                        }
                    }} className="px-3 py-1 border rounded">-</button>
                    <span>{value.quantity}</span>
                    <button
                        onClick={() => handleQtyChnage(value.id, value.quantity + 1)}
                        className="px-3 py-1 border rounded"
                    >
                        +
                    </button>
                </div>
            </div>

            <button
                onClick={(e) => handleRemove(value.id)}
                className="text-red-500 hover:text-red-700 text-xl"
            >
                <FaTrash />
            </button>
        </div>
    )
}
