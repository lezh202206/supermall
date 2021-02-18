import { request } from './request'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}

let num1 = []
const num2 = [1, 2, 3]
    //  第一种
    // num1 = num2 // 不可以因为后面有新数组会被覆盖
num1.push(...num2)
    // console.log(num1);