import React from 'react'
import RegisterComponent from '../components/RegisterComponent'
import { ToastContainer } from 'react-toastify'
import LoginComponent from '../components/LoginComponent'

export default function Login() {
    return (

        <>
            <ToastContainer />
            <div className=" my-10 flex items-center justify-center px-4">

                <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">

                    {/* Login Card */}
                    <LoginComponent />

                    {/* Signup Card */}
                    <RegisterComponent />

                </div>

            </div>
        </>
    )
}
