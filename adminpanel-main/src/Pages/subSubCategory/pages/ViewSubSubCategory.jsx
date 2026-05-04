import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import SubSubCategoryTable from '../components/SubSubCategoryTable';
import { toast, ToastContainer } from 'react-toastify';
import { getSubSubCategoryApi } from '../services/subSubCategoryApi';
export default function ViewSubSubCategory() {
    const [subSubCategoryData, setsubSubCategoryData] = useState([])
    const [subSubCategoryStaticPath, setsubSubCategoryStaticPath] = useState("")
    const subSubCategoryView = async () => {
        try {
            const res = await getSubSubCategoryApi()
            setsubSubCategoryData(res?.data?.data)
            setsubSubCategoryStaticPath(res?.data?.staticPath)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    useEffect(() => {
        subSubCategoryView()
    }, [])
    return (
        <>
            <ToastContainer />
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='viewSubSubCategory'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <div className=''>
                        <h3 className='text-[26px] font-semibold'>View Sub Category</h3>
                    </div>
                    <div className='flex items-center gap-2 mr-3'>
                        <div className='text-white font-bold w-[40px] h-[40px] rounded-sm flex justify-center items-center bg-blue-700'>
                            <FaFilter className='' />
                        </div>
                        <button className='bg-green-700 rounded-sm py-2 px-4 font-semibold text-sm text-white'>Change Status</button>
                        <button className='bg-red-700 rounded-sm py-2.5 px-5 font-semibold text-sm text-white'>Delete</button>
                    </div>
                </div>
                <div className='form px-4 '>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs h-[40px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr className=''>
                                <th className='lg:w-[3%] sm:w-[8%]'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' />
                                    </div>
                                </th>

                                <th scope='col' className='lg:w-[25%] sm:w-[18%]'>Parent Category Name</th>
                                <th scope='col' className='lg:w-[20%] sm:w-[17%]'>Sub Category Name</th>
                                <th scope='col' className='w-[20%]'>Category Name</th>
                                <th scope='col' className='w-[10%]'>image</th>
                                <th scope='col' className='lg:w-[8%] sm:w-[10%]' >order</th>
                                <th scope='col' className='lg:w-[11%] sm:w-[13%]' >status</th>
                                <th scope='col' className='w-[15%]'>action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                subSubCategoryData.map((value, index) => <SubSubCategoryTable key={value.id} value={value} subSubCategoryStaticPath={subSubCategoryStaticPath} />)
                            }

                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
