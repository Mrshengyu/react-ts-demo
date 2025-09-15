import React from 'react'
import { useParams,useMatch,useSearchParams,useLocation } from 'react-router-dom'

export default function Detail() {
    // const { id,title,content } = useParams()
    const [search,setSearch] = useSearchParams()
    // const id = search.get('id');
    // const title = search.get('title');
    // const content = search.get('content');





    // useLocation() 获取当前路由的路径信息
    console.log(useLocation());
    const {state:{id,title,content}} = useLocation();
    

    // const match = useMatch('/detail/:id/:title/:content');
  return (
    <div>
        <li>{id}</li>
        <li>{title}</li>
        <li>{content}</li>
        <button onClick={() => setSearch('id=001&title=hello&content=world')}>点击我 </button>
    </div>
  )
}
