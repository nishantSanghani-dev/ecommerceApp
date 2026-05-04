import React from 'react'

export default function OrderSummary({ value }) {
    // console.log(value);

    return (
        <>
        <div className="space-y-3 mb-4">
            <div className="flex justify-between">
                <span>{value.product.name} x {value.quantity}</span>
                <span>₹ {value.productPrice * value.quantity}</span>
            </div>

        </div>
        
        </>
    )
}
