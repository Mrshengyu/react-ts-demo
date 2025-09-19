// 用户相关请求
import { request } from "@/utils";
// 1 登陆请求
export function loginAPI(formaData) {
    return request({
        // url: "/login",
        method:'POST',
        data:formData
    })
}


// 2获取用户信息
export function getProfileAPI(formData) {
    return request({
        url: "/user/profile",
        method:'GET',
    })
}