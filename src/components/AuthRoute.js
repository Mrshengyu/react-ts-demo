// 封装高阶组件
//核心路由有无token，如果有token，则进入页面，如果没有token，则跳转到登录页面

import {getToken} from "../utils/token"

import { Navigate } from "react-router-dom"

// 以路由组件为参数，返回一个新的路由组件
export function AuthRoute({children}){
    const token = getToken();
    if(token){
        return <>{children}</>
    }else{
        return <Navigate to={'/login'}></Navigate>
    }
}

