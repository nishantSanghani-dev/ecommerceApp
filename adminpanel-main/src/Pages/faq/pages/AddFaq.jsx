/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import z from "zod"
import { faqAddApi, faqSingleViewApi, faqUpdatewApi } from '../services/faq.service';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router';

const faqConstriant = z.object({
    qustions: z.string().min(2, "Qustion Should Be More Than 2 Characters...!!"),
    answer: z
        .string()
        .min(2, "Answer must be at least 2 characters....!!"),
    order: z.coerce
        .number({ invalid_type_error: "Order must be a number" })
        .int("Order must be integer")
        .min(1, "Order must be at least 1")
})
export default function AddFaq() {

    const { id } = useParams()
    // console.log(id);

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, touchedFields, isSubmitting },
    } = useForm({
        resolver: zodResolver(faqConstriant),

    });

    const faqValue = async (data) => {
        try {
            if (id) {
                const res = await faqUpdatewApi(data,id)
                toast.success(res?.data?.message);
            }
            else {
                const res = await faqAddApi(data)
                toast.success(res?.data?.message);
            }
            setTimeout(() => {
                navigate(`/faqs/view`)
            }, 2000)

        } catch (error) {
            toast.error(error.response?.data?.message);

        }
    }

    const singleView = async () => {
        try {
            const res = await faqSingleViewApi(id)
            console.log(res?.data?.data);
            reset({
                qustions: res?.data?.data?.qustions,
                answer: res?.data?.data?.answer,
                order: res?.data?.data?.order,
            });

        } catch (error) {
            toast.error(error?.response?.data?.message);

        }
    }

    useEffect(() => {
        if (id) {
            singleView()
        }
    }, [id])
    return (
        <>
            <ToastContainer />
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addFaq'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <h3 className='text-[26px] font-semibold'>Add Faq</h3>
                </div>
                <div>
                    <form action="" onSubmit={handleSubmit(faqValue)} className='p-2'>

                        <label htmlFor="" className='text-[16px] font-semibold'>Question</label>
                        <input type="text" placeholder='Question' name="qustions" id="" className={`text-sm w-full border-2 shadow-sm ${errors.qustions?.message && `border-red-500`} border-gray-300 h-[40px] p-2 rounded-sm mb-5 mt-1`} {...register("qustions")} />

                        <p className='text-red-500'>{touchedFields.qustions && errors.qustions?.message}</p>


                        <label htmlFor="" className='text-[16px] font-semibold'>Answer</label>
                        <textarea type="number" placeholder='Answer' name="answer" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[150px] p-2 rounded-sm mt-1 resize-none' {...register("answer")} />

                        <p className='text-red-500'>{touchedFields.answer && errors.answer?.message}</p>

                        <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                        <input type="number" placeholder='Order' name="order" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' {...register("order")} />

                        <p className='text-red-500'>{touchedFields.order && errors.order?.message}</p>

                        <button type='submit' disabled={isSubmitting} className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>{id ? 'Update' : 'Add'} Faq</button>
                    </form>

                </div>
            </section>
        </>
    )
}
