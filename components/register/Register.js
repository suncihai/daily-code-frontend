
import React, { Component } from 'react';
import { axiosClient } from '../../common/js/axios'
import styled from 'styled-components'
import { Button, Form, Input, message, Spin } from 'antd'
import { MD5 } from 'crypto-js'
import { themeColor } from '../../common/css/constant'

const RegisterBody = styled.div`
   padding-top: 200px;
   width: 400px;
   margin: 0 auto;
   .ant-btn-primary {
      background: ${themeColor};
   }
`

class Register extends React.Component {
   state = {
      loading: false,
   }

   handleSubmit(e) {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
         if (!err) {
            let params = {
               username: values.username,
               password: MD5(values.password).toString(),
            }
            this.setState({loading: true},()=>{
               this.regsiter(params)
            });
         }
      })
    };

   regsiter = async (params) => {
      const ret = await axiosClient({
        method: 'GET',
        url: '/api/register',
        params: params,
      })

     if (ret.code === 0) {
        setTimeout(()=>{
          this.setState({loading: false})
          message.success(`You Add ${params.username}!`)
        },800)
     } else {
         setTimeout(()=>{
         message.error(`${params.username} is already registered!`)
         this.setState({loading: false})
         },800)
     }
  }
   
   render() {
      const { loading } = this.state
      const { getFieldDecorator } = this.props.form

      const ls = {
          textAlign: 'center',
          fontSize: '20px',
          marginBottom: '15px'
      }

      const bs = {
         width: '100%'
      }

      return ( 
         <RegisterBody>
            <Spin spinning={loading}>
               <div style={ls}>Register</div>
               <Form onSubmit={(e)=>this.handleSubmit(e)}>
                  <Form.Item label="Name">
                     {getFieldDecorator('username', {
                        rules: [
                           {
                              required: true,
                              message: 'Please input user name',
                           },
                        ],
                     })(<Input />)}
                  </Form.Item>
                  <Form.Item label="Password">
                     {getFieldDecorator('password', {
                        rules: [
                           {
                              required: true,
                              message: 'Please input user password',
                           },
                        ],
                     })(<Input type="password"/>)}
                  </Form.Item>
                  <Form.Item>
                     <Button style={bs} type="primary" onClick={(e)=>this.handleSubmit(e)}>Register</Button>
                  </Form.Item>
               </Form>
            </Spin>
         </RegisterBody>
      )
   }
}

export default Form.create()(Register)
