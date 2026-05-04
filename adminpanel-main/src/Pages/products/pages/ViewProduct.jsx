import React from 'react'
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
export default function ViewProduct() {
    return (
        <>
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='viewSubSubCategory'>
                <div className=' bg-slate-100  p-4 form-heading'>

                    <h3 className='text-[26px] font-semibold'>Product Items</h3>


                </div>
                <div className='form px-4 '>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className=' h-[40px] 
                        text-sm text-gray-700 uppercase bg-gray-50 
                        '>
                            <tr className=''>
                                {/* <th className='w-[5%]'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='w-5 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' />
                                    </div>
                                </th> */}

                                <th scope='col' className='w-[8%] font-bold' >Delete</th>
                                <th scope='col' className='w-[8%]' >S. no.</th>
                                <th scope='col' className='w-[15%]' >Product Name</th>
                                <th scope='col' className='w-[20%]' >Description</th>
                                <th scope='col' className='w-[18%]' >Short Description</th>
                                <th scope='col' className='w-[15%]'>Thumbnails</th>
                                <th scope='col' className='w-[10%]'>action</th>
                                <th scope='col' className='w-[11%]' >status</th>

                            </tr>
                        </thead>
                        <tbody className='px-6 py-4 text-[16px]  whitespace-nowrap '>


                            <tr className='bg-white my-2  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 border-b-1'>
                                <td className='w-[3%] py-7'>
                                    <input type="checkbox" className='w-4 h-4' name="" id="" />
                                </td>
                                <td >1</td>
                                <td >Men</td>
                                <td >Lorem ipsum dolor sit... <br />

                                    <span className='text-blue-500 font-semibold'>Read More</span></td>
                                <td >Lorem ipsum dolor sit... <br />

                                    <span className='text-blue-500 font-semibold'>Read More</span></td>
                                <td><img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" alt="" className='rounded-sm w-16 h-16' /></td>
                                <td className=''>
                                    <div className='flex items-center gap-2'>
                                    <RiDeleteBin6Line className='text-red-500 text-xl' /> &nbsp;|
                                    <FaEdit className='text-md text-yellow-400' />
                                    </div>
                                </td>
                                <td>Active</td>
                            </tr>

                            <tr className='bg-white my-2  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 border-b-1'>
                                <td className='w-[3%] py-7'>
                                    <input type="checkbox" className='w-4 h-4' name="" id="" />
                                </td>
                                <td >2</td>
                                <td >Men</td>
                                <td >Lorem ipsum dolor sit... <br />

                                    <span className='text-blue-500 font-semibold'>Read More</span></td>
                                <td >Lorem ipsum dolor sit... <br />

                                    <span className='text-blue-500 font-semibold'>Read More</span></td>
                                <td><img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" alt="" className='rounded-sm w-16 h-16' /></td>
                                <td className=''>
                                    <div className='flex items-center gap-2'>
                                    <RiDeleteBin6Line className='text-red-500 text-xl' /> &nbsp;|
                                    <FaEdit className='text-md text-yellow-400' />
                                    </div>
                                </td>
                                <td>Active</td>
                            </tr>

                            <tr className='bg-white my-2  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 border-b-1'>
                                <td className='w-[3%] py-7'>
                                    <input type="checkbox" className='w-4 h-4' name="" id="" />
                                </td>
                                <td >3</td>
                                <td >Men</td>
                                <td >Lorem ipsum dolor sit... <br />

                                    <span className='text-blue-500 font-semibold'>Read More</span></td>
                                <td >Lorem ipsum dolor sit... <br />

                                    <span className='text-blue-500 font-semibold'>Read More</span></td>
                                <td><img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" alt="" className='rounded-sm w-16 h-16' /></td>
                                <td className=''>
                                    <div className='flex items-center gap-2'>
                                    <RiDeleteBin6Line className='text-red-500 text-xl' /> &nbsp;|
                                    <FaEdit className='text-md text-yellow-400' />
                                    </div>
                                </td>
                                <td>Active</td>
                            </tr>
                            <tr className='bg-white my-2  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 border-b-1'>
                                <td className='w-[3%] py-7'>
                                    <input type="checkbox" className='w-4 h-4' name="" id="" />
                                </td>
                                <td >4</td>
                                <td >Men</td>
                                <td >Lorem ipsum dolor sit... <br />

                                    <span className='text-blue-500 font-semibold'>Read More</span></td>
                                <td >Lorem ipsum dolor sit... <br />

                                    <span className='text-blue-500 font-semibold'>Read More</span></td>
                                <td><img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" alt="" className='rounded-sm w-16 h-16' /></td>
                                <td className=''>
                                    <div className='flex items-center gap-2'>
                                    <RiDeleteBin6Line className='text-red-500 text-xl' /> &nbsp;|
                                    <FaEdit className='text-md text-yellow-400' />
                                    </div>
                                </td>
                                <td>Active</td>
                            </tr>
                            <tr className='bg-white my-2  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 border-b-1'>
                                <td className='w-[3%] py-7'>
                                    <input type="checkbox" className='w-4 h-4' name="" id="" />
                                </td>
                                <td >5</td>
                                <td >Men</td>
                                <td >Lorem ipsum dolor sit... <br />

                                    <span className='text-blue-500 font-semibold'>Read More</span></td>
                                <td >Lorem ipsum dolor sit... <br />

                                    <span className='text-blue-500 font-semibold'>Read More</span></td>
                                <td><img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" alt="" className='rounded-sm w-16 h-16' /></td>
                                <td className=''>
                                    <div className='flex items-center gap-2'>
                                    <RiDeleteBin6Line className='text-red-500 text-xl' /> &nbsp;|
                                    <FaEdit className='text-md text-yellow-400' />
                                    </div>
                                </td>
                                <td>Active</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
