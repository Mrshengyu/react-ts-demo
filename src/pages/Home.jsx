import React,{useState} from 'react'
import { NavLink,Outlet ,Navigate} from 'react-router-dom'

export default function Home() {
    const [sum,setSum] = useState(1)
    return (
        <div>
      <h1>Welcome to our Home</h1>
      {sum === 2 ? <Navigate to="/about" /> : <h4>当前值为 {sum}</h4>}
      <button onClick={() => setSum(sum + 1)}>点击我sum变成2</button>

      <ul>
        <li> <NavLink to="/home/news">News</NavLink></li>
        <li> <NavLink to="/home/message">Message</NavLink> </li>
      </ul>
    
      {/* 指定路由组件呈现位置 */}
      <Outlet/>
    </div>
  )
}
