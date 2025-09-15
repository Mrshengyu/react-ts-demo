import React,{useState} from 'react'
import { NavLink,Outlet,useNavigate } from 'react-router-dom'

export default function Message() {
    const [message, setMessage]=useState([
        {id:'01',title:'消息1',content:'锄禾日当午'},
        {id:'02',title:'消息2',content:'汗滴禾下土'},
        {id:'03',title:'消息3',content:'谁知盘中餐'},
        {id:'04',title:'消息4',content:'粒粒皆辛苦'}
    ])

    const navigate = useNavigate();

    function showDetail(id,title,content){
        // navigate(`detail?id=${id}&title=${title}&content=${content}`);
        navigate('detail',{
            replace: false,
            state: {id,title,content}
        })
    }
  return (
    <div>
        <ul>
            {message.map(item=>(
                <li key={item.id}>
                    {/* 第二种 */}
                    {/* <NavLink to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</NavLink> */}
                   {/* 第一种 */}
                    {/* <NavLink to={`detail/${item.id}/${item.title}/${item.content}`}>{item.title}</NavLink> */}
                   {/* 第三种 state穿参 */}
                   <NavLink to="detail" state={{id:item.id,title:item.title,content:item.content}} >{item.title}</NavLink>
                   
                    {/* <p>{item.content}</p> */}
                </li>
            ))}
        </ul>

            <hr />

        {/* 展示路由组件 */}
        <Outlet/>
    </div>
  )
}
