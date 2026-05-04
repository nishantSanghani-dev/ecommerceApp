
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router'
import { RiDashboard2Fill } from "react-icons/ri";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineInvertColors } from "react-icons/md";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { FaSliders } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FcFaq } from "react-icons/fc";
import { SlNotebook } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import Footer from '../Common/Footer';
import { dropDownData } from '../Data/DropDownList';
import { IoMdContact } from "react-icons/io";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
export default function Home() {

    let [dropdownMenu, setdropdownMenu] = useState(-1)


    let [dashBoradMenu, setdashBoradMenu] = useState(false)

    return (
        <section className='max-w-full' id='dashboard'>
            <div className='w-full grid lg:grid-cols-[18%_auto]'>
                <div className={`h-screen lg:z-0 sm:z-999 overflow-y-scroll sm:fixed lg:static duration-1000 ${dashBoradMenu ? 'left-[0%]' : 'left-[-100%]'}  bg-gray-50`}>
                    <div className='border-b-1 border-gray-400 p-2 w-[95%] mx-auto sm:flex sm:justify-end lg:justify-center'>
                        <figure>
                            <img src="/Images/ChatGPT Image Apr 21, 2026, 05_41_04 PM.png" className='mx-auto mb-5 ' alt="" />

                        </figure>
                        <IoCloseSharp className='text-3xl lg:hidden sm:block hidden' onClick={() => setdashBoradMenu(false)} />
                    </div>
                    <div id='pages' className='m-5'>
                        <nav>
                            <ul>
                                <li className='flex items-center gap-2  hover:bg:rounded-2xl py-4 text-black font-medium lg:text-lg sm:text-sm'>
                                    <RiDashboard2Fill />
                                    <Link to={'/dashboard'}>Dashboard</Link>
                                </li>

                                {
                                    dropDownData.map((value, index) => {

                                        let { id, title, icon, innerIcon, innerTitle, link1, link2, innerTitle2 } = value

                                        // console.log(value)
                                        return (
                                            <div key={id} className='maniItems'>
                                                <li className='flex items-center gap-2 cursor-pointer  hover:bg:rounded-2xl py-2 text-black font-medium lg:text-[16px] sm:text-sm' >
                                                    {icon}
                                                    <p className='w-full flex justify-between items-center' onClick={() => setdropdownMenu(dropdownMenu == id ? -1 : id)}>{title} {dropdownMenu == id ? <RiArrowDropUpLine className='text-[25px]' /> : <RiArrowDropDownLine className='text-[25px]' />}
                                                    </p>

                                                </li>
                                                <div className={`flex  items-center gap-2 innetItems my-2 ${dropdownMenu == id && innerTitle != undefined ? '' : 'hidden'} `}>
                                                    <FaRegDotCircle /><Link to={link1} onClick={() => setdashBoradMenu(false)} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>{innerTitle}
                                                    </Link>
                                                </div>
                                                <div className={`flex  items-center gap-2 innetItems my-2 ${dropdownMenu == id && innerTitle2 != undefined ? '' : 'hidden'} `}>
                                                    <FaRegDotCircle /><Link to={link2} onClick={() => setdashBoradMenu(false)} className='w-full flex justify-between items-center font-semibold  text-[14px] whitespace-nowrap'>{innerTitle2}
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </ul>
                        </nav>
                    </div>
                </div>
                <div id='dashBoardContent' className='h-screen overflow-y-scroll'>
                    <div className='w-[95%] mx-auto flex items-center justify-between my-2' id='heading'>
                        <p className='flex items-center gap-4 text-xl text-gray-500 font-medium'>
                            <AiOutlineMenu className='font-bold text-2xl' onClick={() => setdashBoradMenu(true)} />
                            Dashboard</p>
                        <div className='cursor-pointer relative group'>
                            <figure>
                                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='w-12 h-12 rounded-full object-cover' alt="" />
                            </figure>

                            <div className='w-48 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-2xl absolute right-0 hidden group-hover:block ' id='profile'>
                                <nav>
                                    <ul>
                                        <li className='p-2 border-b border-gray-200 hover:text-blue-600 hover:bg-gray-100'>
                                            <Link to={'/profile'} className='flex items-center font-semibold gap-2'><IoMdContact className='text-lg' />Profile</Link>
                                        </li>
                                        <li className='p-2 border-b hover:text-blue-600 hover:bg-gray-100' >
                                            <Link to={'/company-profile'} className='flex items-center font-semibold gap-2'><HiOutlineOfficeBuilding className='text-lg' />Company Profile</Link>
                                        </li>
                                        <li className='p-2 border-b-1 border-gray-200 hover:text-blue-600 hover:bg-gray-100'>
                                            <Link className='flex items-center font-semibold gap-2'><FaLock className='text-lg' />Logout</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-[#ccc] h-px border-0 my-2" />
                    <div className='w-[95%] mx-auto text-md font-medium my-3 text-gray-700'>
                        <p>Home / Dashboard</p>

                    </div>
                    <hr className="bg-[#ccc] h-px border-0 my-2" />
                    <div className='max-w-[95%] mx-auto  '>
                        <Outlet />
                        <div className='mt-12'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
