//axios的封装，统一处理请求
import axios from 'axios'
import { getToken,removeToken } from '@/utils/token'
import router from '@/router'
// 1 域名配置
const baseURL = 'api'
// 2 创建axios实例
const request = axios.create({
  baseURL,
  timeout: 10000
})
// 3 请求拦截器
request.interceptors.request.use(config => {
  // 在发送请求之前做一些处理
//   1 获取token
// 2 按照后端格式做token拼接
const token = getToken();
if (token) {
    config.headers.Authorization = `Bearer ${token}`
}
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 4 响应拦截器
request.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response.data
}, error => {
  // 对响应错误做点什么
  console.dir(error)
  if (error.response && error.response.status === 401) {
    // 处理401错误，比如跳转到登录页
    removeToken();
    router.navigate('/login')
    window.location.reload();
    // window.location.href = '/login'
    // 或者使用路由库进行跳转
    // router.push('/login')
    console.log('Unauthorized, redirecting to login...')
  }
  return Promise.reject(error)
})
// 5 导出请求方法
export default request