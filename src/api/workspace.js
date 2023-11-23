import {httpInstance} from "@/utils/http.js"

export const getWorkContent = (id) => {
    return httpInstance({
        url:`/textbooks/${id}`
    })
}

export const getWork = ()=> {
    return httpInstance({
        url:'/textbooks'
    })
}