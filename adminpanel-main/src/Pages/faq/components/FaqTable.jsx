import React from 'react'
import { MdEdit } from 'react-icons/md'
import { useNavigate } from 'react-router'

export default function FaqTable({ value, faqIds, setfaqIds }) {
    const navigate = useNavigate()
    const checkedFaqValue = (event) => {
        if (event.target.checked) {
            setfaqIds([...faqIds, event.target.value])
        }
        else {
            setfaqIds(faqIds.filter((value, index) => value != event.target.value))
        }
    }

    const editRecords = (value) => {
     
        navigate(`/faqs/add/${value}`)
    }

    return (
        <tr className='bg-white  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <td className='w-[3%] lg:py-12 sm:py-24'>
                <input type="checkbox" value={value.id} onChange={checkedFaqValue} className='w-4 h-4' name="" id="" />
            </td>
            <td className='text-base font-semibold text-black '>
                {value.qustions}</td>
            <td className='text-justify'>{value.answer}</td>
            <td className='text-center'>{value.order}</td>
            <td className=''>
                {
                    value.status
                        ?
                        <button className=' bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-1.5 text-white font-semibold px-5 rounded-sm'>Active</button>
                        :
                        <button className=' bg-gradient-to-r from-red-400 via-red-500 to-red-600 py-1.5 text-white font-semibold px-5 rounded-sm'>Deactive</button>
                }

            </td>
            <td><button className=' flex justify-center items-center text-white bg-blue-500 w-[40px] h-[40px] rounded-[50%]'>
                <MdEdit onClick={() => editRecords(value.id)} values={value.id} className='text-[18px]' />
            </button></td>
        </tr>
    )
}
