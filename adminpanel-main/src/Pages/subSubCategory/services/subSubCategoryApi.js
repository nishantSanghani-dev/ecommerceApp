import axios from "axios";
import { da } from "zod/v4/locales";

const api = axios.create({
    baseURL: import.meta.env.VITE_ADMIN_BASEURL
})

export const getSubSubCategoryApi = () => {
    return api.get("/sub-sub-category/view")
}

export const subCategoryCategoryGetApi = (categoryId) => {
    return api.get(`/sub-category/view/${categoryId}`)
}

export const subSubCategoryAddApi = (data) => {
    return api.post("/sub-sub-category/add", data)
}

export const subSubCategorySubViewApi = (subCategoryId) => {
    return api.get(`/sub-sub-category/view/${subCategoryId}`)
}