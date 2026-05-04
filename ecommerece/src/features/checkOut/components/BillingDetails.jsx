import React from 'react'

export default function BillingDetails({ billingData, setbillingData }) {
    const handleChange = (event) => {
        const { value, name } = event.target
        setbillingData({
            ...billingData,
            [name]: value
        })
    }

    return (
        <div className="md:col-span-2 space-y-6">
            <form>
                {/* Billing Details */}
                <div className="border rounded-2xl p-5 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            name="fullName"
                            className="border p-2 rounded col-span-2"
                            placeholder="Full Name"
                            onChange={handleChange}
                        />

                        <input
                            name="phone"
                            className="border p-2 rounded col-span-2"
                            placeholder="Phone Number"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Shipping Address */}
                <div className="border rounded-2xl p-5 shadow-sm my-5">
                    <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            name="addressLine1"
                            className="border p-2 rounded col-span-2"
                            placeholder="Address Line 1"
                            onChange={handleChange}
                        />

                        <input
                            name="addressLine2"
                            className="border p-2 rounded col-span-2"
                            placeholder="Address Line 2"
                            onChange={handleChange}
                        />

                        <input
                            name="city"
                            className="border p-2 rounded"
                            placeholder="City"
                            onChange={handleChange}
                        />

                        <input
                            name="state"
                            className="border p-2 rounded"
                            placeholder="State"
                            onChange={handleChange}
                        />

                        <input
                            name="postalCode"
                            className="border p-2 rounded"
                            placeholder="Postal Code"
                            onChange={handleChange}
                        />

                        <input
                            name="country"
                            className="border p-2 rounded"
                            placeholder="Country"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Payment Method */}
                <div className="border rounded-2xl p-5 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

                    <div className="space-y-3">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="paymentMethod" value="ONLINE" onChange={handleChange} />
                            Online Payment
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="radio" name="paymentMethod" value="UPI" onChange={handleChange} />
                            UPI
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="radio" name="paymentMethod" value="COD" onChange={handleChange} />
                            Cash on Delivery
                        </label>
                    </div>
                </div>

            </form>
        </div>


    )
}
