import React from 'react'
import { NavLink, Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import routes from './router'

export default function App() {
    const element = useRoutes(routes)

    function computedClassName({ isActive }) {
        return isActive ? 'active' : ''
    }

    return (
        <div>
                {/* 路由链接 */}
            {/* <ul>

                <li><NavLink to="/about" className={computedClassName}>About</NavLink></li>
                <li>
                    <NavLink to="/home">Home</NavLink></li>

            </ul> */}
                {/* 注册路由*/}


            <div>
                    {element}

            </div>
        </div>
    )
}
