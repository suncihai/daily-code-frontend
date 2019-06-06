
import React, { Component } from 'react';
import { axiosClient } from '../../common/js/axios'
import styled from 'styled-components'
import { Drawer, Tooltip, Button, Form, Input, Row, Col, Select, message, Spin } from 'antd'
import { connect } from 'react-redux'
import { getRecords, getProblems } from '../../store'
import iconGreen from '../../assets/img/submit_green.png'
import iconWhite from '../../assets/img/submit_white.png'
import moment from 'moment'
import cx from 'classname'

const Body = styled.div`

`

const Icon = styled.div`
   position: fixed;
   right: 25px;
   transform: translateY(-80%);
   top: 20%;
   padding: 10px;
   border-radius: 40px;
   border: 2px solid #6abb03;
   cursor: pointer;
   transition: background 0.4s ease-in-out;
   .record-icon {
      width: 30px;
      transition: all 0.4s ease-in-out;
   }
   &.hover-icon {
     background: #6abb03;
   }
`

const { Option } = Select;

class AddRecordWrap extends React.Component {
   state = {
      loading: false,
      hover: false,
      visible: false,
      selectedPro: '',
   }

   componentDidMount() {
      this.fetchProblems()
   }

   fetchProblems = async () => {
      const ret = await axiosClient({
        method: 'GET',
        url: '/api/get_problems',
      })

      if (ret.code === 0) {
        this.props.getProblems(ret.data)
      } 
   }

   handleSubmit(e) {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
         if (!err) {
            this.setState({loading: true},()=>{
               this.submitRecord()
            });
         }
      })
    };

   submitRecord = async () => {
      const timestamp = new Date().getTime()

      const params = {
         username: 'suncihai@gmail.com',
         problems: this.state.selectedPro,
         timestamp,
         success: true,
      }
      const ret = await axiosClient({
        method: 'GET',
        url: '/api/submit_record',
        params: params,
      })

      if (ret.code === 0) {
         setTimeout(()=>{
            this.setState({loading: false, visible: false})
            message.success('添加刷题记录成功！')
            this.props.updateRecords()
         },1000)
      } 
   }
   
   showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
   
   onChange = (e) => {
      this.setState({
         selectedPro: this.filterProblems(e).join('-')
      },()=>{

      })
   }

   filterProblems = (arr) => {
      return arr.map(ele=>ele.split('-')[0])
   }

   onClose = () => {
      this.setState({
        visible: false,
      });
    };
   
   
   render() {
      const { loading, hover, visible } = this.state
      const icon = hover ? iconWhite : iconGreen
      const iconStyle = cx({
         'hover-icon': hover
      })
      const { getFieldDecorator } = this.props.form
      const { problems } = this.props

      return ( 
         <Body>
            <Icon className={iconStyle}>
               <img className="record-icon"
                    onMouseOver={()=>{this.setState({hover:true})}} 
                    onMouseLeave={()=>{this.setState({hover:false})}} 
                    onClick={this.showDrawer}
                    src={icon} />
            </Icon>
            <Drawer
               title="Create a new record"
               width={450}
               onClose={this.onClose}
               visible={visible}
            >
               
                  <Form layout="vertical" hideRequiredMark onSubmit={(e)=>this.handleSubmit(e)}>
                     <Row gutter={16}>
                     <Spin spinning={loading}>   
                        <Col span={24}>
                           <Form.Item label="Problem">
                              {getFieldDecorator('problem', {
                              rules: [{ required: true, message: 'Please select at lease one problem' }],
                              })(
   
                              <Select 
                                 mode="multiple"
                                 size="large"
                                 onChange={this.onChange}
                                 placeholder="Please select at lease one problem">
                                 {
                                    problems.map((item, index)=>{
                                       let v = `${item.number}-${item.name}`
                                       return (
                                          <Option key={item.name} value={v}>
                                             <span>{v}</span>
                                          </Option>
                                       )
                                    })
                                 }
                              </Select>,
                              )}
                           </Form.Item>
                        </Col>
                     </Spin>
                     </Row>
                  </Form>
                  <div
                     style={{
                     position: 'absolute',
                     left: 0,
                     bottom: 0,
                     width: '100%',
                     borderTop: '1px solid #e9e9e9',
                     padding: '10px 16px',
                     background: '#fff',
                     textAlign: 'right',
                     }}
                  >
                     <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                     Cancel
                     </Button>
                     <Button onClick={(e)=>this.handleSubmit(e)} type="primary">
                     Submit
                     </Button>
                  </div>
            </Drawer>
         </Body>
      )
   }
}

const mapDispatchToProps = { getRecords, getProblems }
const mapStateToProps = ({problems}) => ({problems})

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Form.create()(AddRecordWrap))

