import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// 兼容包
import '@ant-design/v5-patch-for-react-19';
// 全局初始化样式
import 'normalize.css'
import './index.scss'

// 为提供的创建一个 React 根container并返回根。
const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />

        </Provider>
    </BrowserRouter>
);