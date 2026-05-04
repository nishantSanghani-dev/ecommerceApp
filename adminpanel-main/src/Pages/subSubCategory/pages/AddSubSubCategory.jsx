import React, { useEffect, useState } from 'react'
import Dropify from '../../../Common/Dropify'
import SubSubCategoryForm from '../components/SubSubCategoryForm'
import { toast, ToastContainer } from 'react-toastify'
import { getCategoryApi } from '../../category/services/categoryApi'


export default function AddSubSubCategory() {
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
    }, [])
    return (
        <>
            <ToastContainer />
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addsubsubCategory'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                    <h3 className='text-[26px] font-semibold'>Add Sub Category</h3>
                </div>
                <div>
                    <SubSubCategoryForm categoryData={categoryData} />

                </div>
            </section>
        </>
    )
}
