/* eslint-disable react-hooks/exhaustive-deps */
import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import React, { use, useEffect } from 'react'
import { useAuth, useCart, useWishList } from '../utils/user.utils'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchCart } from '../features/cart/cartSlice'
import { logOut } from '../features/auth/authSlice'
import { fetchWishList } from '../features/wishList/wishListSlice'

export default function Header() {
    const { user } = useAuth()
    const { wishList } = useWishList()
    const dispatch = useDispatch()
    // useEffect(() => {
    //     console.log(user);
    // }, [user])

    const { cart } = useCart()
    console.log(cart);

    useEffect(() => {
        if (user) {

            dispatch(fetchCart())
            dispatch(fetchWishList())
        }

        // console.log("user chened");

    }, [user])

    return (
        <header className="w-full shadow-md bg-white sticky top-0 z-4">

            {/* Top Bar */}
            <div className="bg-gray-900 text-white text-sm py-2 px-6 flex justify-between">
                <p>Free Shipping on Orders Above ₹999</p>
                <p>Call Us: +91 98765 43210</p>
            </div>

            {/* Main Header */}
            <div className="flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    ShopMate
                </div>

                {/* Search Bar */}
                <div className="w-1/2 relative">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
                </div>

                {/* Icons */}
                <div className="flex items-center gap-6 text-gray-700">
                    <div className='flex gap-2'>
                        <NavLink to={'/wishlist'}>
                            <Heart className="cursor-pointer hover:text-red-500" />

                        </NavLink>
                        <div className='bg-red-500 text-white w-6.25 h-6.25 rounded-[50%] flex items-center justify-center'>
                            <p className='b'>{wishList.length}</p>
                        </div>
                    </div>
                    <Link to={'/login'}>
                        <User className="cursor-pointer hover:text-blue-500" />
                    </Link>
                    <div className='flex gap-2'>
                        <Link to={'/cart'}>
                            <ShoppingCart className="cursor-pointer hover:text-green-500" />
                        </Link>
                        <div className='bg-red-500 text-white w-6.25 h-6.25 rounded-[50%] flex items-center justify-center'>
                            <p className='b'>{cart.length}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="border-t border-gray-200 px-6 py-3 flex gap-8 text-gray-700 font-medium">
                <NavLink to={'/'} className="hover:text-blue-600">Home</NavLink>
                <NavLink to={'/cart'} className="hover:text-blue-600">Cart ({cart.length})</NavLink>
                {
                    user
                        ?
                        <Link to={'/'} onClick={() => {
                            if (confirm("Are You Want To Sure LogOut ? ")) {
                                dispatch(logOut())
                                dispatch(fetchCart())
                                dispatch(fetchWishList())
                            }
                        }} className="hover:text-blue-600">Logout ({user})</Link>
                        :
                        <NavLink to={'/login'} className="hover:text-blue-600">Login</NavLink>
                }
                <NavLink to={'/order'} className="hover:text-blue-600">Orders</NavLink>
                <NavLink to={'/checkout'} href="#" className="hover:text-blue-600">Checkout</NavLink>
            </nav>

        </header>
    )
}
