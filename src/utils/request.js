//axios的封装，统一处理请求
import axios from 'axios'
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
  return Promise.reject(error)
})
// 5 导出请求方法
export default request