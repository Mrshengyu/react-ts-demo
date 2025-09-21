import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select,Popconfirm,message  } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'

import { Table, Tag, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/images/error.png'
import { useChannel } from '@/hooks/useChannel'
import { getArticleListAPI,deleteArticleAPI } from '@/apis/article'
import { type } from '@testing-library/user-event/dist/type'


const { Option } = Select
const { RangePicker } = DatePicker


const Article = () => {
  //获取频道列表
  const { channelList } = useChannel();

  // 表格状态枚举
  const statusEnum = {
    1: <Tag color="green">审核通过</Tag>,
    2: <Tag color="warning">审核中</Tag>
  }


  // 准备列数据
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => statusEnum[data]
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={()=>orderPublish(data)}/>
            <Popconfirm title="删除文章？" description="确认要删除当前文章莫" okText="确认" cancelText="取消" onConfirm={()=>onConfirm(data)}>
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>

          </Space>
        )
      }
    }
  ]
  // 准备表格body数据
  const listData = [
    {
      id: '8218',
      channel_id: 0,
      cover: {
        type:1,
        images: [],
      },
      like_count: 0,
      pubdate: '2019-03-11 09:00:00',
      read_count: 2,
      status: 2,
      title: 'wkwebview离线化加载h5资源解决方案',
      content:'无'
    },
    {
      id: '8219',
      channel_id: 1,
      cover: {
        images: [],
        type:0
      },
      like_count: 0,
      pubdate: '2019-03-11 01:00:00',
      read_count: 2,
      status: 1,
      title: 'react资源解决方案',
      content:'无1'
    },
    {
      id: '8220',
      channel_id: 2,
      cover: {
        type:3,
        images: [],
      },
      like_count: 0,
      pubdate: '2019-03-11 03:00:00',
      read_count: 2,
      status: 2,
      title: 'wkwebview资源解决方案',
      content:'无2'
    },

  ]

  // 获取文章列表
  const [articleList, setArticleList] = useState([])

  // 筛选功能
  const [reqData, setReqData] = useState(
    { status: '', channel_id: 0, begin_pubdate: '', end_pubdate: '', page: 1, per_page: 1 }
  )
  useEffect(() => {
    // getArticleListAPI({}).then(res => {
    //   setArticleList(res.data.list)
    // })
    
    async function getList() {
      // const res= await getArticleListAPI(reqData);
      // articleList=listData;
      setArticleList(listData)
    }
    getList()
  }, [reqData])


  // 获取筛选数据
  const onFinish = (formValues) => {
    // 收集表单数据，并且是不可变的
    console.log(formValues)
    setReqData({
      ...reqData,
      channel_id: formValues.channel_id,
      status: formValues.status,
      begin_pubdate: formValues.date[0].format('YYYY-MM-DD'),
      end_pubdate: formValues.date[1].format('YYYY-MM-DD'),
    })
  }

  // 重新拉取文章列表，渲染table逻辑，--敷用
  // 通过 useEffect 监听 reqData 的变化，重新拉取文章列表，渲染table

  // 获取频道列表
  const onPageChange = (page, pageSize) => {
    setReqData({
      ...reqData,
      page,
      // per_page: pageSize
    })
  }

  // 删除文章
  const onConfirm = async(data) => {
    // await deleteArticleAPI(data.id);
   const newList = listData.filter(item => item.id !== data.id)
   listData.splice(listData.findIndex(item => item.id === data.id), 1);
   setArticleList(newList);
    message.success('删除文章')
    // setReqData({...reqData})
  }

  //路由跳转
  const navigate = useNavigate();
  // 跳转到目标详情页
  const orderPublish = (data) => {
    debugger
    const obj=data;
    navigate('/publish', { state: obj });
  }

  return (
    <div>
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '文章列表' },
          ]} />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: '' }} onFinish={onFinish}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={''}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={2}>审核通过</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              defaultValue={0}
              style={{ width: 120 }}
            >
              {channelList.map(item =>
                <Option value={item.id} key={item.id}>{item.name}</Option>
              )}

            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* 表格区域 */}
      <Card title={`根据筛选条件共查询到 ${articleList.length}条结果：`}>
        <Table rowKey="id" columns={columns} dataSource={articleList}
          pagination={{
            total: reqData.length, pageSize: reqData.per_page,
            onChange: onPageChange
          }}
        />
      </Card>
    </div>
  )
}

export default Article
