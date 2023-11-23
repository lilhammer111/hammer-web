import {httpInstance} from "@/utils/http.js"

export const getSubscriptions = (userID)=> {
    return httpInstance({
        url: `/textbooks/subscription`,
    })
}