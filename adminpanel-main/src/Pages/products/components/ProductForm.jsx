import React from 'react'
import Dropify from '../../../Common/Dropify'
import { toast } from 'react-toastify'
import { subCategoryCategoryGetApi, subSubCategorySubViewApi } from '../../subSubCategory/services/subSubCategoryApi'
import { tr } from 'zod/v4/locales'
import { productAddApi } from '../services/productApi'

export default function ProductForm({ categoryData, subCategoryData, setsubCategoryData, setsubSubCategoryData, subSubCategoryData, materialData, colorData }) {

    const subCategoryView = async (categoryId) => {
        try {
            const res = await subCategoryCategoryGetApi(categoryId)
            setsubCategoryData(res?.data?.data)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const subSubCategoryView = async (subCategoryId) => {
        try {
            const res = await subSubCategorySubViewApi(subCategoryId)
            setsubSubCategoryData(res?.data?.data)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }


    const productSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        productAdd(formData)
    }


    const productAdd = async (data) => {
        try {
            const res = await productAddApi(data)
            toast.success(res?.data?.message)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <form action="" onSubmit={productSubmit} className='p-2'>
            <div className='grid grid-cols-3 gap-5'>
                <div>
                    <div className=''>
                        <label htmlFor="" className='text-[16px] font-semibold'>Product Image</label>
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
                        <label htmlFor="" className='text-[16px] font-semibold'>Back Image</label>
                        <div>
                            <input
                                name="backImage"
                                type="file"
                                className="dropify"
                                data-height="250"
                            />
                        </div>

                    </div>
                    <div className=''>
                        <label htmlFor="" className='text-[16px] font-semibold'>Gallery Image</label>
                        <div>
                            <input
                                name="galleryImages"
                                type="file"
                                className="dropify"
                                data-height="250"
                                multiple

                            />
                        </div>

                    </div>

                </div>

                <div>
                    <label htmlFor="" className='text-[16px] font-semibold'>Product Name</label>
                    <input type="text" placeholder='Product Name' name="name" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                    <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Category </label>
                    <br />
                    <select name="subCategoryId" id="" onChange={(e) => subSubCategoryView(e.target.value)} className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                        <option value="">Select Sub Category</option>

                        {
                            subCategoryData.map((value, index) => <option key={value.id} value={value.id}>{value.name}</option>)
                        }
                    </select>

                    <label htmlFor="" className='text-[16px] font-semibold'>Select Meterial</label>
                    <br />
                    <select name="materialId" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                        <option value="">Nothing Selected</option>
                        {
                            materialData.map((value, index) => <option key={value.id} value={value.id}>{value.name}</option>)
                        }

                    </select>

                    <label htmlFor="" className='text-[16px] font-semibold'>Select Product Type</label>
                    <br />
                    <select name="type" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                        <option value="">Nothing Selected</option>
                        <option value="FEATURED">Featured</option>
                        <option value="NEW_ARRIVAL">New Arrival</option>
                        <option value="ON_SALE">OnSale</option>
                    </select>

                    <label htmlFor="" className='text-[16px] font-semibold'>Is Top Rated</label>
                    <br />
                    <select name="topRated" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                        <option value="">Nothing Selected</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>


                    <label htmlFor="" className='text-[16px] font-semibold'>Actual Price</label>
                    <input type="text" placeholder='Actual Price' name="actualPrice" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                    <label htmlFor="" className='text-[16px] font-semibold'>Total In Stocks</label>
                    <input type="text" placeholder='Total In Stocks' name="stock" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                </div>


                <div>
                    <label htmlFor="" className='text-[16px] font-semibold'>Select Parent Category</label>
                    <br />
                    <select name="categoryId" onChange={(e) => subCategoryView(e.target.value)} id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                        <option value="">Nothing Selected</option>
                        {
                            categoryData.map((value, index) => <option key={value.id} value={value.id}>{value.name}</option>)
                        }

                    </select>

                    <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Sub Category</label>
                    <br />
                    <select name="subSubCategoryId" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                        <option value="">Nothing Selected</option>
                        {
                            subSubCategoryData.map((value, index) => <option key={value.id} value={value.id}>{value.name}</option>)
                        }
                    </select>

                    <label htmlFor="" className='text-[16px] font-semibold'>Select Color</label>
                    <br />
                    <select name="colorId" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                        <option value="">Nothing Selected</option>
                        {colorData.map((value, index) => <option key={value.id} value={value.id}>{value.name}</option>)}
                    </select>

                    <label htmlFor="" className='text-[16px] font-semibold'>Is Best Selling</label>
                    <br />
                    <select name="bestSelling" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                        <option value="">Nothing Selected</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label htmlFor="" className='text-[16px] font-semibold'>Is Upsell</label>
                    <br />
                    <select name="upSell" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                        <option value="">Nothing Selected</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label htmlFor="" className='text-[16px] font-semibold'>Sale Price</label>
                    <input type="text" placeholder='Sale Price' name="salePrice" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                    <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                    <input type="text" placeholder='Order' name="order" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                </div>
            </div>

            <div className='my-5 '>
                <label htmlFor="" className='text-[16px] font-semibold'>Description</label>
                <textarea name="description" id="" className='border border-gray-300 w-full p-2'></textarea>
            </div>
            <button className=' mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 cursor-pointer'> Create Product </button>
        </form>
    )
}
