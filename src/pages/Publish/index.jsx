
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'

import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { getChannelsAPI, createArticleAPI } from '@/apis/article'
import { useState, useEffect } from 'react'

const { Option } = Select

const Publish = () => {
  //获取频道列表
  const [channelList, setChannelList] = useState([])

  useEffect(() => {
    //获取频道列表
    const getChannelList = async () => {
      // const res = await getChannelsAPI();
      const res = { data: [] };
      res.data.unshift({ id: 0, name: '推荐' }, { id: 1, name: '最新' }, { id: 2, name: '热榜' }, { id: 3, name: '原创' }, { id: 4, name: '视频' }, { id: 5, name: '问答' })
      setChannelList(res.data)
    }

    //调用函数
    getChannelList()
  }, [])

  // 提交表单
  const onFinish = (formValues) => {
    // console.log(formValues)
    const { title, channel_id, content } = formValues
    const reqData = {
      title,
      content,
      channel_id,
      cover: {
        type: 0,
        image: []
      }
    }
    //调用接口条
    // createArticleAPI(reqData)
  }

  // 上传图片
  const [imageList, setImageList] = useState([])
  const onUploadChange = (info) => {
    setImageList(info.fileList)
  }
  //切换图片封面类型
  const [imgType, setImgType] = useState(1)
  const onTypeChange = (e) => {
    setImgType(e.target.value)
  }
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '发布文章' },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>

              {channelList.map(item =>
                <Option value={item.id} key={item.id}>{item.name}</Option>
              )}
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>

            {/* 
            listType: 选择文件框样式
            showUploadList: 是否显示文件列表
            */}

            {imgType > 0 &&
              <Upload
                name='image'
                listType="picture-card"
                showUploadList
                action={'http://geek.itheima.net/v1_0/upload'}
                onChange={onUploadChange}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>}
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            {/* 富文本编辑器 */}
            <ReactQuill placeholder="请输入文章内容"
              className='publish-quill'
              theme='snow'
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish
