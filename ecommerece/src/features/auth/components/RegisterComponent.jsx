import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { userRegisterApi } from '../services/auth.service'

export default function RegisterComponent() {
    const [registerValue, setregisterValue] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (event) => {
        const { type, value, name } = event.target

        setregisterValue({
            ...registerValue,
            [name]: value
        })
    }
    const register = (event) => {
        event.preventDefault()
        console.log(registerValue);
        registerUser()
    }

    const registerUser = async () => {
        try {
            const res = await userRegisterApi(registerValue)
            toast.success(res?.data?.message)
        } catch (error) {
            toast.error(error?.response?.data?.message ?? error.message)
        }
    }
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
            <form action="" onSubmit={register}>
                <input
                    type="text"
                    placeholder="Full Name"
                    name='name'
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    name='email'
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name='confirmPassword'
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <button type='submit' className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                    Create Account
                </button>
            </form>
        </div>
    )
}
