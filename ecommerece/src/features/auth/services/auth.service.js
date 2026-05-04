import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_USER_BASE_URL
})

export const userRegisterApi = (data) => {
    return api.post("/auth/register", data)
}

export const userLoginApi = (data) => {
    return api.post("/auth/login", data)
}