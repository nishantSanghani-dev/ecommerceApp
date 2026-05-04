import React, { useEffect, useRef, useState } from 'react'
import Dropify from '../../../Common/Dropify';
import ProductForm from '../components/ProductForm';
import { toast, ToastContainer } from 'react-toastify';
import { getCategoryApi } from '../../category/services/categoryApi';
import { materialViewApi } from '../../materials/services/materialApi';
import { colorViewApi } from '../../color/services/colorApi';
import 'dropify/dist/css/dropify.min.css';
import 'dropify/dist/js/dropify.min.js';
import $ from 'jquery';
export default function AddProduct() {
    const [categoryData, setcategoryData] = useState([])
    const [subCategoryData, setsubCategoryData] = useState([])
    const [subSubCategoryData, setsubSubCategoryData] = useState([])
    const [materialData, setmaterialData] = useState([])
    const [colorData, setcolorData] = useState([])
    const categoryView = async () => {
        try {
            const res = await getCategoryApi()
            setcategoryData(res?.data?.data)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const materailView = async () => {
        try {
            const res = await materialViewApi()
            setmaterialData(res?.data?.data)
        } catch (error) {
            toast.error(error?.response?.data?.message ?? error.message)
        }
    }

    const colorView = async () => {
        try {
            const res = await colorViewApi()
            setcolorData(res?.data?.data)
        } catch (error) {
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

    useEffect(() => {
        categoryView()
        materailView()
        colorView()
    }, [])
    return (
        <>
            <ToastContainer />
            <section className='mt-5 max-w-full rounded-md  ' id='addProduct'>
                {/* <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                    <h3 className='text-[26px] font-semibold'>Add Sub Category</h3>
                </div> */}
                <div>

                    <ProductForm
                        categoryData={categoryData}
                        setsubCategoryData={setsubCategoryData}
                        subCategoryData={subCategoryData}
                        subSubCategoryData={subSubCategoryData}
                        setsubSubCategoryData={setsubSubCategoryData}
                        materialData={materialData}
                        colorData={colorData} />
                </div>
            </section>
        </>
    )
}
