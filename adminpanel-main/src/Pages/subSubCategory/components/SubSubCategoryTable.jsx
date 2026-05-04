import React from 'react'
import { MdEdit } from 'react-icons/md'

export default function SubSubCategoryTable({ value,subSubCategoryStaticPath }) {
    const { category, subCategory, name, order, status ,image} = value
    return (

        <tr className='bg-white  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <td className='w-[3%] py-7'>
                <input type="checkbox" className='w-4 h-4' name="" id="" />
            </td>
            <td className='text-base font-semibold text-black '>{category.name}</td>
            <td className='text-base font-semibold text-black '>{subCategory.name}</td>
            <td className='text-base font-semibold text-black '>{name}</td>
            <td><img src={subSubCategoryStaticPath+image} width={40} height={40} alt="" /></td>
            <td className='text-start'>{order}</td>
            <td className=''>
                {
                    status
                        ?
                        <button className=' bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-1.5 text-white font-semibold px-5 rounded-sm'>Active</button>
                        :
                        <button className=' bg-gradient-to-r from-red-400 via-red-500 to-red-600 py-1.5 text-white font-semibold px-5 rounded-sm'>Deactive</button>
                }

            </td>
            <td>
                <button className=' flex justify-center items-center text-white bg-blue-500 w-[40px] h-[40px] rounded-[50%]'>
                    <MdEdit className='text-[18px]' />
                </button></td>
        </tr>
    )
}
