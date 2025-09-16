import './index.scss'
import logo from '../../assets/images/392.png'

import React, { Component } from 'react'
import { Card, Form, Input, Button, message } from 'antd'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'




export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async values => {
    console.log('Success:', values);
    //触发异步action fetchLogin
    //await dispatch(fetchLogin(values));
    //跳转到首页
    navigate('/')
    // 提示用户
    message.info('登录成功');

  };
  return (
    <div className="login">
      <Card className="login-container">
        <img src={logo} alt="" className="login-logo" />

        {/* 登录表单 */}
        <Form
          onFinish={onFinish}
          name="basic"
          validateTrigger="onBlur"

        >
          <Form.Item
            label="手机号"
            name="phone"
            rules={[
              { required: true, message: 'Please input your phone!' },
              { pattern: /^1[3-9]\d{9}$/, message: 'Please input correct phone number!' }
            ]}
          >
            <Input placeholder="请输入手机号" size='large' />
          </Form.Item>
          <Form.Item
            label="验证码"
            name="cord"
            rules={[{ required: true, message: 'Please input your cord!' }]}>
            <Input placeholder="请输入验证码" size='large' />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType='submit' size='large' block>登录</Button>
          </Form.Item>
        </Form>


      </Card>
    </div>
  )



}
