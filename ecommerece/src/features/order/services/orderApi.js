import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_USER_BASE_URL
})

export const orderViewApi = (token) => {
    return api.get("/order/view",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}

export const orderAddApi = (data, token) => {
    return api.post("/order/add", data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}