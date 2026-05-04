import React from 'react'
import { useWishList } from '../../../utils/user.utils'
import WishListItems from '../components/WishListItems';
import { ToastContainer } from 'react-toastify';

export default function WishList() {
    const { wishList } = useWishList()

    return (
        <div className="max-w-6xl mx-auto p-6 font-sans bg-gray-100 my-5 rounded-lg">
            <h1 className="text-3xl font-bold mb-6">My Wishlist ❤️</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {
                    wishList?.map((value, index) => <WishListItems key={value.id} value={value} />)
                }
            </div>
            <ToastContainer />
        </div>
    )
}
