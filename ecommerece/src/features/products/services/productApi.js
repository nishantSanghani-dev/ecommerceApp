import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const productSingleViewApi = (id) => {
    return api.get(`/product/view/${id}`)
}

export const productCateView = (cateName) => {
    return api.get(`/product/catView/${cateName}`)
}