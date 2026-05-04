import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_USER_BASE_URL
})

export const wishListAddApi = (data, token) => {
    console.log(data);

    return api.post("/wishlist/add", data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const wishListViewApi = (token) => {
    return api.get("/wishlist/view", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
export const wishListDeleteApi = (id, token) => {
    return api.delete(`/wishlist/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}