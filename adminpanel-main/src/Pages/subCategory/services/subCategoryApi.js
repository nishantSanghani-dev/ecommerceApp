import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_ADMIN_BASEURL
})

export const subCategoryAddApi = (data) => {
    return api.post("/sub-category/add",data)
}

export const getSubCategoryApi = () => {
    return api.get(`/sub-category/view`)
}