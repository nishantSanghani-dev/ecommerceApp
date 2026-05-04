import React, { useEffect } from 'react'
import 'dropify/dist/css/dropify.min.css';
import 'dropify/dist/js/dropify.min.js';
import $ from 'jquery';
import { toast } from 'react-toastify';
import { subCategoryAddApi } from '../services/subCategoryApi';
import { useNavigate } from 'react-router';
export default function SubCategoryForm({ categoryData }) {
    const navigate=useNavigate()
    const subCategorySave = (event) => {
        event.preventDefault()
        const formValue = new FormData(event.target)
        subCategoryAdd(formValue)
    }

    const subCategoryAdd = async (data) => {
        try {
            const res = await subCategoryAddApi(data)
            toast.success(res?.data?.message)
            setTimeout(() => {
                navigate('/subCategory/view')
            }, 2000)
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error?.response?.data?.messages);

        }
    }


    useEffect(() => {
        // Initialize Dropify with custom placeholder text
        $(".dropify").dropify({
            messages: {
                default: "Drag and drop", // Custom placeholder-like text
                error: "Oops, something went wrong",
                remove: "Remove"
            }
        });
    }, []);
    return (
        <form action="" onSubmit={subCategorySave} className='p-2'>
            <div className='grid grid-cols-[35%_auto] gap-5'>
                <div className='' >
                    <label htmlFor="" className='text-[16px] font-semibold'>Category Image</label>
                    <div>
                        <input
                            name="image"
                            type="file"
                            className="dropify"
                            data-height="250"

                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='text-[16px] font-semibold'>Parent Category Name</label>
                    <br />
                    <select name="categoryId" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                        <option value="">Select Category</option>
                        {
                            categoryData.map((value, index) => <option key={index} value={value.id}>{value.name}</option>)
                        }

                    </select>
                    <label htmlFor="" className='text-[16px] font-semibold'>Sub Category Name</label>
                    <input type="text" placeholder='Enter Category Name' name="name" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                    <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                    <input type="text" placeholder='Category Order' name="order" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                </div>
            </div>


            <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
        </form>
    )
}
