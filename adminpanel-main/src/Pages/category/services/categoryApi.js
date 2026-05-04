import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_ADMIN_BASEURL
})


export const categoryAddApi = (data) => {
    return api.post("/category/add",data)
}

export const getCategoryApi = () => {
    return api.get("/category/view")
}