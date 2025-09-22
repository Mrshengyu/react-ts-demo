import About from '../pages/About'
// import Home from '../pages/Home'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import News from '../pages/News'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
// import Home from '@/pages/Home'
// import Article from '@/pages/Article'
// import Publish from '@/pages/Publish'
import { lazy,Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthRoute } from "@/components/AuthRoute"

// 1 lazy函数对组件进行导入
const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publish = lazy(() => import('@/pages/Publish'))





export default [
    //     {
    //         path: '/home',
    //         element: <Home />,
    //         children: [
    //             {
    //                 path: 'message',
    //                 element: <Message />,
    //                 children: [
    //                     {
    //                         //  path: 'detail/:id/:title/:content',
    //                         path: 'detail',
    //                         element: <Detail />
    //                     }
    //                 ]
    //             },
    //             { path: 'news', element: <News /> }
    //         ]
    //     },
    {
        path: '/about',
        element: <About />
    },
    // { path: '/', element: <Navigate to="/home" /> }
    {
        path: '/',
        // element: <AuthRoute><Layout /></AuthRoute>
        element: <Layout />,
        children: [
            {
                // 设置二级子路由默认
                index: true,
                // path: 'home',
                element: <Suspense fallback={'loading...'}><Home /> </Suspense>
            },
            {
                path: 'article',
                element: <Suspense fallback={'loading...'}><Article /></Suspense>
            },
            {
                path: 'publish',
                element: <Suspense fallback={'loading...'}><Publish /></Suspense>
            }
        ]

    },
    {
        //注意死循环
        path: '/login',
        element: <Login />
    }
]