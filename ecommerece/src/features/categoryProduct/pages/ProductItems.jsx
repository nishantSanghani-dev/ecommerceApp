/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { fetchWishList } from '../../wishList/wishListSlice';
import { wishListAddApi } from '../../wishList/services/wishListApi';
import { fetchCart } from '../../cart/cartSlice';
import { cartAddApi } from '../../../services/cartApi';
import { useAuth, useCart, useWishList } from '../../../utils/user.utils';
import { useDispatch } from 'react-redux';
import { productCateView } from '../../products/services/productApi';

export default function ProductItems() {
    const { catName } = useParams()
    const [productData, setproductData] = useState([])
    const [staticPath, setstaticPath] = useState("")

    const productView = async () => {
        try {
            const res = await productCateView(catName)
            setproductData(res?.data?.data)
            setstaticPath(res?.data?.staticPath)

        } catch (error) {
            console.log(error?.response?.data?.message ?? error.message);
        }
    }
    useEffect(() => {
        productView()
    }, [catName])
    return (
        <section className="px-6 pb-8 my-5">
            <ToastContainer />


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    productData.length == 0
                        ?
                        <p>Product Not Found....!!</p>
                        :
                        productData.map((value) => (
                            <ProductRow
                                key={value?.id}
                                value={value}
                                staticPath={staticPath}
                            />
                        ))}
            </div>
        </section>
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
                            onClick={addToCart}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm"
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

