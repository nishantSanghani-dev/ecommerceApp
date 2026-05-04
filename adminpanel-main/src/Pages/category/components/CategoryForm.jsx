import React, { useEffect } from 'react'

import { categoryAddApi } from '../services/categoryApi'
import { toast } from 'react-toastify'
import 'dropify/dist/css/dropify.min.css';
import 'dropify/dist/js/dropify.min.js';
import $ from 'jquery';
import { useNavigate } from 'react-router';
export default function CategoryForm() {
    const navigate = useNavigate()
    const categorAdd = (event) => {
        event.preventDefault()
        const formValue = new FormData(event.target)
        addCategory(formValue)
    }

    const addCategory = async (data) => {
        try {
            const res = await categoryAddApi(data)
            toast.success(res?.data?.message)
            setTimeout(() => {
                navigate('/category/view')
            },2000)
        } catch (error) {
            console.log(error);
            
            toast.error(error?.response?.data?.message ?? error.message)
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
        <form onSubmit={categorAdd} action="" className='p-2'>
            <div className='grid grid-cols-[32%_auto] gap-5'>
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
                    <label htmlFor="" className='text-[16px] font-semibold'>Category Name</label>
                    <input type="text" placeholder='Enter Category Name' name="name" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                    <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                    <input type="number" placeholder='Order' name="order" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                </div>
            </div>


            <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
        </form>
    )
}
