import React, { useEffect, useState } from 'react'
import Dropify from '../../../Common/Dropify'
import SubCategoryForm from '../components/SubCategoryForm'
import { getCategoryApi } from '../../category/services/categoryApi'
import { toast, ToastContainer } from 'react-toastify'


export default function AddSubCategory() {
    const [categoryData, setcategoryData] = useState([])

    const viewCategory = async () => {
        try {
            const res = await getCategoryApi()
            setcategoryData(res?.data?.data)
            
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    useEffect(() => {
        viewCategory()
    },[])
    return (
        <>
            <ToastContainer />
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addCategory'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                    <h3 className='text-[26px] font-semibold'>Add Sub Category</h3>
                </div>
                <div>
                    <SubCategoryForm categoryData={categoryData} />

                </div>
            </section>
        </>
    )
}
