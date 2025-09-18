import React, { useEffect } from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined,HomeOutlined,DiffOutlined,EditOutlined,LogoutOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,Popconfirm} from 'antd';
import { request } from '@/utils'
import './index.scss'
import { Outlet,useNavigate, useLocation } from "react-router-dom";

export default function  GeeLayout() {
  // useEffect(() => {
  //   request.get('/api/test')
  // }, [])

const { Header, Sider } = Layout


const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/publish',
    icon: <EditOutlined />,
  },
 
]


const navigate = useNavigate()

const onMenuClick = (item) => {
    console.log(item);
    // 获取路由地址
    const path= item.key;
    navigate(path);

  }; 
  
  // 反向高亮
  const location = useLocation();
  // const selectedKeys = location.pathname.split('/')[1] || '/';
  const selectedKeys = location.pathname|| '/';


  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">柴柴老师</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            // defaultSelectedKeys={['1']}
            selectedKeys={selectedKeys}
            onClick={onMenuClick}
            items={items}
            style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 内容 */}
          {/* 二级路由出口 */}
          <Outlet> </Outlet>
        </Layout>
      </Layout>
    </Layout>
  )
}
