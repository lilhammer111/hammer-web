import axios from "axios";

// 创建新的axios实例
export const httpInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080/api/v1',
    timeout: 1000,
})
//请求拦截器
httpInstance.interceptors.request.use(config => {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    return config
})
//响应拦截器
httpInstance.interceptors.response.use(resp => {
    return resp
}, err => {
    return Promise.reject(err)
})