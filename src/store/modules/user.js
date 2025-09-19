// 和用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";
import {request} from "@/utils";
import {setToken as _setToken,getToken,removeToken} from "@/utils/token"
import { message } from "antd";

const userStore = createSlice({
  name: "user",
  //数据状态
  initialState: {
    // token:localStorage.getItem("token_key") || "",
    token:getToken() || "",
    userInfo:{ }
  },
  // 同步方法
  reducers: {
    setToken(state, action) { 
      state.token = action.payload;
      // localstorage 存一份
      // localStorage.setItem("token_key", action.payload);
      _setToken(action.payload);
    },

    setUserInfo(state, action) {
      state.userInfo = action.payload;
      // state.userInfo = {...state.userInfo,...action.payload};
      // 正规写法 数据不可变
      // return{
      //   ...state,
      //   userInfo:action.payload
      // }
    },

    clearUserInfo(state){
      state.token = "";
      state.userInfo = {};
      // localStorage.removeItem("token_key");
      removeToken();
    }
  },
}); 

//结构出actionCreater
const { setToken,setUserInfo,clearUserInfo } = userStore.actions;
//获取reducer函数
const userReducer = userStore.reducer;

// 异步方法，完成获取token；
const fetchLogin =(loginForm)=>{
    // return (dispatch) => {
    //     // 异步请求获取token
    //     // 这里模拟网络请求
    //     request({
    //         url:"/authorizations",
    //         method:"post",
    //         data:loginForm
    //     }).then(res=>{
    //         // console.log(res);
    //         dispatch(setToken(res.data.token));
    //     }).catch(err=>{
    //         console.log(err);
    //     }) 
    // }
    return async (dispatch)=>{
        const res = await request.post('authorizations',loginForm);
        //提交同步action进行token的存入；
        dispatch(setToken(res.data.token));
    }
}

 // 获取用户信息的异步方法
 const fetchUserInfo = () => {
  return async (dispatch) => {
        // const res = await request.get('authorizations',loginForm);
        //提交同步action进行token的存入；
        message.success("模拟获取用户信息成功");
        const res = {data:{name:"zhaoshengyu"}}
        dispatch(setUserInfo(res.data));
  }
 }
export {  fetchUserInfo,fetchLogin,setToken,clearUserInfo };
export default userReducer;
