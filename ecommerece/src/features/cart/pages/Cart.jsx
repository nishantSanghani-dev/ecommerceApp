import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import CartTable from "../components/CartTable";
import { useCart } from "../../../utils/user.utils";

export default function Cart() {

    const { cart,cartImagePath } = useCart()
    return (
        <div className="p-6 max-w-5xl mx-auto font-sans">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

            {/* Cart Item 1 */}
            {
                cart.map((value, index) => <CartTable key={value.id} value={value} cartImagePath={cartImagePath} />)
            }


            {/* Cart Item 2 */}


            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    )
}
