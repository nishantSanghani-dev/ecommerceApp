import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-10">

            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">ShopMate</h2>
                    <p className="text-sm">
                        Your one-stop shop for all your daily needs. Quality products at the best prices.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Shop</a></li>
                        <li><a href="#" className="hover:text-white">Categories</a></li>
                        <li><a href="#" className="hover:text-white">Deals</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Customer Service</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">My Account</a></li>
                        <li><a href="#" className="hover:text-white">Orders</a></li>
                        <li><a href="#" className="hover:text-white">Wishlist</a></li>
                        <li><a href="#" className="hover:text-white">Returns</a></li>
                        <li><a href="#" className="hover:text-white">FAQ</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                    <div className="space-y-3 text-sm">
                        <p className="flex items-center gap-2">
                            <MapPin size={16} /> Rajkot, Gujarat, India
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone size={16} /> +91 98765 43210
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail size={16} /> support@shopmate.com
                        </p>
                    </div>
                </div>

            </div>

            {/* Social + Bottom */}
            <div className="border-t border-gray-700 px-6 py-4 flex flex-col md:flex-row justify-between items-center">

                {/* Social Icons */}
                {/* <div className="flex gap-4 mb-3 md:mb-0">
                    <Facebook className="cursor-pointer hover:text-white" />
                    <Instagram className="cursor-pointer hover:text-white" />
                    <Twitter className="cursor-pointer hover:text-white" />
                </div> */}

                {/* Copyright */}
                <p className="text-sm">
                    © 2026 ShopMate. All rights reserved.
                </p>
            </div>

        </footer>
    )
}
