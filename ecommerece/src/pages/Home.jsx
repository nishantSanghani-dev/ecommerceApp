/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */

import React, { useEffect, useState } from 'react'
import { categoryViewApi, productViewApi } from '../services/homeApi'
import { useAuth, useCart, useWishList } from '../utils/user.utils'
import { toast, ToastContainer } from 'react-toastify'
import { cartAddApi } from '../services/cartApi'
import { fetchCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { wishListAddApi } from '../features/wishList/services/wishListApi'
import { fetchWishList } from '../features/wishList/wishListSlice'
import { Link } from 'react-router-dom'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
export default function Home() {
    const [productData, setproductData] = useState([])
    const [staticPath, setstaticPath] = useState("")
    const [categoryData, setcategoryData] = useState([])
    const [skip, setskip] = useState(1)
    const [totalRecords, settotalRecords] = useState(null)
    const limit = 4
    const productView = async () => {
        try {
            const res = await productViewApi(limit, skip)
            setproductData(res?.data?.data)
            setstaticPath(res?.data?.staticPath)
            settotalRecords(res?.data?.totalRecords)
        } catch (error) {
            toast.error(error?.response?.data?.message ?? error.message);
        }
    }

    const categoryView = async () => {
        try {
            const res = await categoryViewApi()
            setcategoryData(res?.data?.data)
        } catch (error) {
           toast.error(error?.response?.data?.message ?? error.message);
        }
    }

    useEffect(() => {
        productView()
        categoryView()
    }, [skip])

    return (
        <div className="bg-gray-100 min-h-screen">
            <ToastContainer />

            {/* Hero Section */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white py-12 text-center">
                <h1 className="text-4xl font-bold mb-2">Welcome to ShopMate</h1>
                <p className="text-lg">Find the best products at unbeatable prices</p>
            </div>

            {/* Categories */}
            <section className="px-6 py-10">
                <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categoryData.map((value) => (
                        <Link to={`/product-items/${value.name}`}>
                            <div
                                key={value.id}
                                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer capitalize text-center font-medium"
                            >
                                {value.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Products */}
            <section className="px-6 pb-8">
                <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {

                        productData.map((value) => (
                            <ProductRow
                                key={value?.id}
                                value={value}
                                staticPath={staticPath}
                            />
                        ))}
                </div>
            </section>
            <ResponsivePagination
                current={skip}
                total={Math.ceil(totalRecords / limit)}
                onPageChange={setskip}
            />
            {/* Promo Banner */}
            <section className="mt-5 bg-linear-to-r from-green-500 to-emerald-600 text-white text-center py-12 mx-6 rounded-2xl mb-10 shadow">
                <h2 className="text-3xl font-bold mb-2">Limited Time Offer 🎉</h2>
                <p className="text-lg">Get extra 10% off on your first order</p>
            </section>

        </div>
    )
}

function ProductRow({ value, staticPath }) {
    const { id, name, image, subSubCategory, actualPrice, color, stock } = value
    console.log(id);

    const { user, token } = useAuth()
    const dispatch = useDispatch()
    const { wishList } = useWishList()
    const { cart } = useCart()

    const addToCart = async () => {
        // console.log("fdfb");

        try {
            if (user) {


                const res = await cartAddApi({
                    productId: id,
                    colorId: color.id,
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

    const wishListAdd = async () => {
        try {
            if (user) {
                const res = await wishListAddApi({
                    productId: id,
                    colorId: color.id,
                }, token)

                toast.success(res?.data?.message)
                dispatch(fetchWishList())
            } else {
                toast.error("Please Login First....!!")
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }
    const checkCart = cart.filter((items) => items.productId == id)
    const checkWishList = wishList.filter((items) => items.productId == id)
    console.log(checkWishList);
    return (
        <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col">
            <div className="overflow-hidden rounded-xl">
                <img
                    src={staticPath + image}
                    alt="product"
                    className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                />
            </div>

            <div className="mt-4 flex-1">
                <Link to={`/product/${id}`}>
                    <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
                </Link>
                <p className="text-gray-500 text-sm">{subSubCategory?.name} </p>
                {
                    stock == 0
                        ?
                        <p className='text-red-500'>Out Of Stock</p>
                        :
                        <p className='text-green-500'>In Stock : {stock}</p>
                }

            </div>

            <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-blue-600">₹ {actualPrice}</span>
            </div>

            <div className="flex gap-2 mt-4">
                {
                    checkCart.length == 1
                        ?
                        <button
                            onClick={addToCart}
                            className="flex-1 bg-red-600  text-white py-2 rounded-xl text-sm"
                        >
                            Added In Cart
                        </button>
                        : <button
                            disabled={stock == 0}
                            onClick={addToCart}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
                        >
                            Add to Cart
                        </button>
                }

                {
                    checkWishList.length == 1
                        ?
                        <button

                            className="flex-1 border bg-blue-600 border-gray-300  text-white py-2 rounded-xl text-sm"
                        >

                            Added In WishList

                        </button>
                        :
                        <button
                            onClick={wishListAdd}
                            className="flex-1 border border-gray-300 hover:bg-gray-100 py-2 rounded-xl text-sm"
                        >

                            WishList

                        </button>
                }

            </div>
        </div>
    )
}
