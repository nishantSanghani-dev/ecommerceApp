import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_ADMIN_BASEURL
})

export const productAddApi = (data) => {
    return api.post("/product/add", data)
}