import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_FAQ_BASEURL
})

export const faqViewApi = (skip, limit, searchValue) => {
    return api.get("/view", {
        params: {
            skip,
            limit,
            searchValue
        }
    })
}

export const faqAddApi = (formValue) => {
    return api.post("/add", formValue)
}

export const faqDeleteApi = (ids) => {
    console.log(ids);

    return api.post("/delete", ids)
}

export const faqSingleViewApi = (id) => {
    return api.get(`/view/${id}`)
}

export const faqUpdatewApi = (formValue, id) => {
    return api.put(`/edit/${id}`, formValue)
}

export const faqChangeStatusApi = (ids) => {
    return api.put("/change-status", ids)
}