import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchWishList } from '../features/wishList/wishListSlice'

export default function MainLayouts() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
