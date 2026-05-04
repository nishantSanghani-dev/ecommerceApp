/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { faqChangeStatusApi, faqDeleteApi, faqViewApi } from '../services/faq.service';
import FaqTable from '../components/faqTable';
import { toast, ToastContainer } from 'react-toastify';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { IoIosSearch } from 'react-icons/io';
export default function ViewFaq() {
  const [faqData, setfaqData] = useState([])
  const [loading, setloading] = useState(true)
  const [faqIds, setfaqIds] = useState([])
  const [skip, setskip] = useState(1)
  const [searchBox, setsearchBox] = useState(false)
  const [totalPages, setTotalPages] = useState(0);
  const [searchValue, setsearchValue] = useState("")
  const limit = 4
  const viewFaq = async () => {
    try {
      const res = await faqViewApi(skip, limit, searchValue)
      setTotalPages(res?.data?.totalRecords)
      setfaqData(res?.data?.data)
      setloading(false)
    } catch (error) {
      console.log(error);

    }
  }
  const deleteFaq = async () => {
    try {
      if (faqIds.length == 0) {
        return alert("Select Faq Items First....!!")
      }
      if (confirm("Are Want To Sure Delete Faq ? ")) {
        const res = await faqDeleteApi(faqIds)
        toast.success(res?.data?.message)
        viewFaq()
        setfaqIds([])
      }

    } catch (error) {
      toast.error(error.response?.data?.message);

    }

  }

  const changeStatus = async () => {
    try {
      if (faqIds.length == 0) {
        return alert("Select Faq Items First....!!")
      }
      const res = await faqChangeStatusApi(faqIds)
      toast.success(res?.data?.message)
      viewFaq()
      setfaqIds([])
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }
  useEffect(() => {
    viewFaq()
  }, [skip, searchValue])

  useEffect(() => {
    console.log(skip);

  }, [skip])
  return (
    <>
      {
        searchBox
        &&
        <section className='max-w-full my-5 rounded-lg p-5' style={{ border: "1px solid #ccc" }}>
          <div className='w-full'>
            <form action="" className='flex items-center gap-1'>
              <input type="text" onChange={(e) => setsearchValue(e.target.value)} placeholder='Search Name' className='border-1 p-2 w-[350px] rounded-sm bg-[#ffffff] border-[#ccc] h-[40px]' />

              <div className='bg-blue-600 p-2 h-[40px] cursor-pointer w-[40px] rounded-sm flex justify-center items-center'>
                <IoIosSearch className='text-white text-lg font-semibold' />
              </div>
            </form>
          </div>
        </section>
      }
      <ToastContainer />
      <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='viewFaq'>
        <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading'>
          <div className=''>
            <h3 className='text-[26px] font-semibold'>View Faq</h3>
          </div>
          <div className='flex items-center gap-2 mr-3'>
            <div onClick={() => setsearchBox(!searchBox)} className='text-white font-bold w-[40px] h-[40px] rounded-sm flex justify-center items-center bg-blue-700'>
              <FaFilter className='' />
            </div>
            <button onClick={changeStatus} className='bg-green-700 rounded-sm py-2 px-4 font-semibold text-sm text-white'>Change Status</button>
            <button className='bg-red-700 rounded-sm py-2.5 px-5 font-semibold text-sm text-white' onClick={deleteFaq}>Delete</button>
          </div>
        </div>
        <div className='form px-4 '>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs h-[40px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr className=''>
                <th className='lg:w-[3%] sm:w-[7%]'>
                  <div className='flex items-center'>
                    <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' />
                  </div>
                </th>

                <th scope='col' className='lg:w-[20%] sm:w-[33%]'>Question</th>
                <th scope='col' className='w-[30%]' >Answer</th>
                <th scope='col' className='w-[15%] text-center' >order</th>
                <th scope='col' className='lg:w-[11%] sm:w-[15%]' >status</th>
                <th scope='col' className='w-[6%]'>action</th>

              </tr>
            </thead>
            <tbody>
              {
                loading
                  ?
                  <tr>
                    <td>Loading....!!</td>
                  </tr>
                  :
                  faqData.length <= 0
                    ?
                    <tr className='bg-white  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                      <td colSpan={5} className='text-center py-2'>Faq Items Not Found....!!</td>
                    </tr>
                    :
                    faqData.map((value, index) => <FaqTable key={value.id} value={value} setfaqIds={setfaqIds} faqIds={faqIds} />)
              }
            </tbody>
          </table>
          <ResponsivePagination
            current={skip}
            total={Math.ceil(totalPages / limit)}
            onPageChange={setskip}
          />
        </div>
      </section>

    </>
  )
}
