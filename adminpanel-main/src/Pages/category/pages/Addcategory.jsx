import React, { useEffect } from 'react'
import Dropify from '../../../Common/Dropify'
import CategoryForm from '../components/CategoryForm'
import { ToastContainer } from 'react-toastify'


export default function Addcategory() {



  return (
    <>
      <ToastContainer />
      <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addCategory'>

        <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
          <h3 className='text-[26px] font-semibold'>Add Category</h3>
        </div>
        <div>
          <CategoryForm />

        </div>
      </section>
    </>
  )
}
