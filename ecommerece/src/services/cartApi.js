import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_USER_BASE_URL
})
export const cartAddApi = (data, token) => {
    console.log(data);
    
    return api.post("/cart/add", data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const cartViewApi = (token) => {
    return api.get("/cart/view", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const cartDeleteApi = (id, token) => {
    return api.delete(`/cart/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
export const cartUpdateApi = (id, quantity, token) => {
    console.log(token);
    
    return api.put(`/cart/change-qty/${id}`,{quantity}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}