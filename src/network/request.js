import axios from 'axios'
// import { config } from 'vue/types/umd'
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })
    instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            console.log(err);
        })
        // 回调出去
        // instance(config).then(res => {
        //     success(res)
        // }).catch(err => {
        //     failure(err)
        // })
    return instance(config)
}