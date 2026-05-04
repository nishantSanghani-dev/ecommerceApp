/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import { productSingleViewApi } from '../services/productApi'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export default function ProductDetails() {
    const { id } = useParams()
    const [productData, setproductData] = useState({})
    const [staticPath, setstaticPath] = useState("")
    const [imageChange, setimageChange] = useState("")
    const getProduct = async () => {
        try {
            const res = await productSingleViewApi(id)
            setproductData(res?.data?.data)
            setstaticPath(res?.data?.staticPath)
            setimageChange(res?.data?.data?.image)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }
    useEffect(() => {
        getProduct()
    }, [id])
    return (

        <>
            <ToastContainer />


            <div className="max-w-6xl mx-auto p-6 font-sans">

                {/* Product Section */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Image Gallery */}
                    <div>
                        {/* Main Image */}
                        <div className="border rounded-2xl p-4 shadow-sm mb-4">
                            <img
                                src={staticPath + imageChange}
                                alt="product"
                                className="w-full h-87.5 object-cover rounded-xl"
                            />
                        </div>

                        {/* Thumbnails (static design) */}
                        <div className="flex gap-3">
                            {
                                productData?.galleryImages?.map((value, index) => {
                                    console.log(value);

                                    return (
                                        <img
                                            src={staticPath + value}
                                            onClick={() => setimageChange(value)}
                                            className="w-20 h-20 object-cover rounded-lg border cursor-pointer"
                                        />
                                    )
                                })
                            }

                        </div>
                    </div>

                    {/* Details */}
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{productData?.name}</h1>
                        <p className="text-gray-500 mb-4">
                            {productData?.category?.name} / {productData?.subCategory?.name}
                        </p>

                        <div className="text-2xl font-bold text-blue-600 mb-4">
                            ₹{productData?.actualPrice}
                        </div>

                        <p className="text-gray-600 mb-6">
                            {productData?.description}
                        </p>

                        {/* Buttons */}
                    </div>
                </div>
            </div>

        </>
    )
}
