import {httpInstance} from "@/utils/http.js"

export const login = (data) => {
    return httpInstance({
        url: '/users/login',
        method: 'post',
        data,
    })
}

export const register = (data) => {
    return httpInstance({
        url: '/users',
        method: 'post',
        data,
    })
}

export const sendMsgCode = (phone) => {
    return httpInstance({
        url: '/users/sms?phone=' + phone,
        method: 'get',
    })
}

export const getCaptcha = () => {
    return httpInstance({
        url: '/users/captcha',
        method: 'get'
    })
}