/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useAuth, useCart } from '../../../utils/user.utils'
import OrderSummary from '../components/OrderSummary'
import BillingDetails from '../components/BillingDetails'
import { toast, ToastContainer } from 'react-toastify'
import { orderAddApi } from '../../order/services/orderApi'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchCart } from '../../cart/cartSlice'

export default function Checkout() {
    const { cart } = useCart()
    const { token } = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [billingData, setbillingData] = useState({
        fullName: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        paymentMethod: ""
    })
    const total = cart.reduce((acc, cuu) => acc + cuu.productPrice * cuu.quantity, 0)

    const saveOrder = (event) => {
        event.preventDefault()
        console.log(billingData);
        orderAdd()
    }
    const orderAdd = async () => {
        try {
            const res = await orderAddApi(billingData, token)
            toast.success(res?.data?.message)
            dispatch(fetchCart())

        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }
    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    }, [])
    return (
        <>
            <ToastContainer />
            <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6 font-sans">

                {/* Left: Billing + Shipping */}
                <BillingDetails setbillingData={setbillingData} billingData={billingData} />

                {/* Right: Order Summary */}
                <div className="border rounded-2xl p-5 shadow-sm h-fit">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                    {/* Items */}
                    {
                        cart.map((value, index) => <OrderSummary key={value.id} value={value} />)
                    }
                    <form action="" onSubmit={saveOrder}>
                        <div className="flex justify-between">
                            <span>Total  </span>
                            <span>₹ {total}</span>
                        </div>
                        <button type='submit' className='bg-black text-white w-full my-5 p-1 cursor-pointer'>Place Order</button>
                    </form>
                </div>
            </div>
        </>
    )
}
