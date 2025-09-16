// 和用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";
import {request} from "@/utils";
import {setToken as _setToken,getToken,removeToken} from "@/utils/token"

const userStore = createSlice({
  name: "user",
  //数据状态
  initialState: {
    // token:localStorage.getItem("token_key") || "",
    token:getToken() || "",
  },
  // 同步方法
  reducers: {
    setToken(state, action) { 
      state.token = action.payload;
      // localstorage 存一份
      // localStorage.setItem("token_key", action.payload);
      _setToken(action.payload);
    },
  },
}); 

//结构出actionCreater
const { setToken } = userStore.actions;
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
export {  fetchLogin,setToken };
export default userReducer;
