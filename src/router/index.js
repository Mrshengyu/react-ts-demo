import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import News from '../pages/News'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'

import { Navigate } from 'react-router-dom'


export default [
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'message',
                element: <Message />,
                children: [
                    {
                    //  path: 'detail/:id/:title/:content',
                     path: 'detail',
                     element: <Detail/>
                     }
                ]
            },
            { path: 'news', element: <News /> }
        ]
    },
    {
        path: '/about',
        element: <About />
    },
    // { path: '/', element: <Navigate to="/home" /> }
    {
        path: '/',
        element: <Layout />
    },
    {
        path: '/login',
        element: <Login />
    }
]