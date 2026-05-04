import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { userLoginApi } from '../services/auth.service'
import { useDispatch } from 'react-redux'
import { logIn } from '../authSlice'

export default function LoginComponent() {
    const dispatch = useDispatch()
    const [loginValue, setloginValue] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const { type, value, name } = event.target
        setloginValue({
            ...loginValue,
            [name]: value
        })
    }
    const login = (event) => {
        event.preventDefault()
        console.log(loginValue);
        loginUser()
    }

    const loginUser = async () => {
        try {
            const res = await userLoginApi(loginValue)
            toast.success(res?.data?.message)
            dispatch(logIn({ token: res?.data?.token, user: res?.data?.name }))

        } catch (error) {
            toast.error(error?.response?.data?.message ?? error.message)
        }
    }
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
            <form onSubmit={login} action="">
                <input
                    type="email"
                    name='email'
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="password"
                    name='password'
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex justify-between text-sm mb-4">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#" className="text-blue-600">Forgot password?</a>
                </div>

                <button type='submit' className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Login
                </button>
            </form>
        </div>
    )
}
