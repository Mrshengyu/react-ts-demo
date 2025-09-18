import About from '../pages/About'
// import Home from '../pages/Home'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import News from '../pages/News'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Publish from '@/pages/Publish'


import { Navigate } from 'react-router-dom'
import { AuthRoute } from "@/components/AuthRoute"


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
                path: 'home',
                element: <Navigate to="home" />
            },
            {
                path: 'article',
                element: <Article />
            },
            {
                path: 'publish',
                element: <Publish />
            }
        ]

    },
    {
        //注意死循环
        path: '/login',
        element: <Login />
    }
]