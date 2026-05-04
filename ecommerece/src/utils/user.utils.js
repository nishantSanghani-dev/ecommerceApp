import { useSelector } from "react-redux"

export const useAuth = () => {
    const user = useSelector((store) => store.user)
    return user
}

export const useCart = () => {
    const cart = useSelector((store) => store.cart)
    return cart
}

export const useWishList = () => {
    const wishList = useSelector((store) => store.wishList)
    return wishList
}