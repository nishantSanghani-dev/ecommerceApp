/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../utils/user.utils'
import { toast } from 'react-toastify'
import { orderViewApi } from '../services/orderApi'

export default function Order() {
    const [orderData, setorderData] = useState([])
    const { token } = useAuth()
    const getOrder = async () => {
        if(token){

            try {
                const res = await orderViewApi(token)
                setorderData(res?.data?.data)
            } catch (error) {
                toast.error(error?.response?.data?.message || error?.message)
            }
        }
    }

    useEffect(() => {

        getOrder()

    }, [])
    return (
        <>

            {
                console.log(orderData)
            }
            {
                orderData?.map((value, index) => {
                    return (
                        <div className="max-w-5xl mx-auto p-6 font-sans">
                            <h1 className="text-3xl font-bold mb-6">My Order</h1>

                            {/* Order Info */}

                            <div className="border rounded-2xl p-5 mb-6 shadow-sm">
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Order ID:</span>
                                    <span className="font-medium">#{value.id.split("-")[4]}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Date:</span>
                                    <span>{value.createdAt.split("T")[0]}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Status:</span>
                                    <span className="text-green-600 font-semibold">{value.status}</span>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="border rounded-2xl p-5 mb-6 shadow-sm">
                                <h2 className="text-xl font-semibold mb-3">Shipping Address</h2>
                                <p>{value.fullName}</p>
                                <p>{value.addressLine1}t</p>
                                <p>{value.addressLine2}</p>
                                <p>{value.city}, {value.state} - {value.postalCode}</p>
                                <p>{value.country}</p>
                                <p className="mt-2">Phone: {value.phone}</p>
                            </div>

                            {/* Order Items */}
                            <div className="border rounded-2xl p-5 mb-6 shadow-sm">
                                <h2 className="text-xl font-semibold mb-4">Items</h2>

                                {/* Item 1 */}
                                {
                                    value?.items?.map((value, index) => {
                                        return (

                                            <div className="flex justify-between mb-3">
                                                <span>{value.product.name} × {value.quantity}</span>
                                                <span>₹{value.priceAtPurchase*value.quantity}</span>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            {/* Payment + Summary */}
                            <div className="border rounded-2xl p-5 shadow-sm">
                                <h2 className="text-xl font-semibold mb-4">Payment & Summary</h2>

                                <div className="flex justify-between mb-2">
                                    <span>Payment Method</span>
                                    <span>{value.paymentMethod}</span>
                                </div>

                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>₹ {value.totalAmount}</span>
                                </div>

                                <div className="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>₹ 0 </span>
                                </div>

                                <div className="flex justify-between font-bold text-lg mt-3">
                                    <span>Total</span>
                                    <span>₹ {value.totalAmount}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
