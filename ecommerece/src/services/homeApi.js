import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const productViewApi = (limit,skip) => {
    return api.get("/product/view", {
        params: {
            limit,
            skip
        }
    })
}

export const categoryViewApi = () => {
    return api.get("/category/view")
}