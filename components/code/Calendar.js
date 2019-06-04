
import React, { Component } from 'react';
import { axiosClient } from '../../common/js/axios'
import styled from 'styled-components'
import { Calendar, Tooltip, Button, Form, Input, message, Spin } from 'antd'
import moment from 'moment'
import cx from 'classname'

const Body = styled.div`
   min-height: 87vh;
   padding-top: 200px;
   margin: 0 auto;
`

const CalendarRow = styled.div`
   display: flex;
   justify-content: space-around;
   width: 1200px;
   margin: 0 auto;
`

const CalendarBox = styled.div`
   display: inline-block;
   width: 350px;
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   .ant-fullcalendar-last-month-cell, .ant-fullcalendar-next-month-btn-day {
      color: #ccc;
   }
   .ant-fullcalendar-selected-day .ant-fullcalendar-value {
      background: transparent;
      color: rgba(0,0,0,0.65);
      box-shadow: none;
    }
    .ant-fullcalendar-today .ant-fullcalendar-value {
      box-shadow: none;
    }
   .month {
      padding: 10px;
      text-align: center;
      
   }
   table {
      tr {
        td {
           .case1 {
              border-radius: 5px; 
              background: #cce28c;
           }
           .case2 {
              border-radius: 5px; 
              background: #287d20;
              color: #fff;
           }
           .case3 {
            border-radius: 5px; 
            background: #134f0d;
            color: #fff;
         }
        }
      }
   }
`

const DateTd = styled.div`
   text-align: center;
   padding: 10px;
   cursor: pointer;
`

class CalendarWrap extends React.Component {
   state = {
      loading: false,
      testArr1:[0,1,1,0,0,1,0,3,0,2,1,0,2,1,2,1,0,3,0,1,0,2,1,0,0,0,2,1,0,1,0],
      testArr2:[1,0,0,0,0,1,0,1,0,2,1,0,1,1,0,1,0,3,0,1,0,2,1,0,1,0,2,0,0,1,0],
      testArr3:[3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   }

   componentDidMount() {

   }

   getListData = (value, arr, month) => {
     let date = value.date()
     let cell
     if(month - value.month() == 1) {
       cell = {count: arr[date-1]}
     }
     return cell
   }

   dateFullCellRender = (value, arr, month) => {
      const cell = this.getListData(value, arr, month)
      
      if(cell) {
         let cellStyle = cx({
            'case1': cell.count === 1,
            'case2': cell.count === 2,
            'case3': cell.count === 3,
         })
         let text
         if(cell.count === 0) {
           text = '你这天偷懒了！'
         }else{
           text = `你这天刷了${cell.count}题！`
         }

         return (
            <Tooltip title={text}>
               <DateTd className={cellStyle}>{value.date()}</DateTd>
            </Tooltip>
         )
      }else{
         return (
            <DateTd >{value.date()}</DateTd>
         )
      }
   }
   
   render() {
      const { loading } = this.state

      return ( 
         <Body>
            <Spin spinning={loading}>
               <CalendarRow>
                  <CalendarBox>
                     <Calendar 
                        dateFullCellRender={(value)=>this.dateFullCellRender(value,this.state.testArr1,moment().subtract(2, 'months').startOf('month').format('M'))} 
                        value={moment().subtract(2, 'months').startOf('month')} 
                        fullscreen={false} 
                        headerRender={() => {
                           return (
                           <div className="month">
                              <div>{moment().subtract(2, 'months').startOf('month').format('MMM')}</div>
                           </div>
                           );
                        }}/>
                  </CalendarBox>
                  <CalendarBox>
                     <Calendar 
                        dateFullCellRender={(value)=>this.dateFullCellRender(value,this.state.testArr2,moment().subtract(1, 'months').startOf('month').format('M'))} 
                        value={moment().subtract(1, 'months').startOf('month')}
                        fullscreen={false} 
                        headerRender={() => {
                        return (
                           <div className="month">
                              <div>{moment().subtract(1, 'months').startOf('month').format('MMM')}</div>
                           </div>
                        );
                        }}/>
                  </CalendarBox>
                  <CalendarBox>
                     <Calendar
                        dateFullCellRender={(value)=>this.dateFullCellRender(value,this.state.testArr3,moment().subtract(0, 'months').startOf('month').format('M'))}  
                        fullscreen={false} 
                        headerRender={() => {
                        return (
                           <div className="month">
                              <div>{moment().format("MMM")}</div>
                           </div>
                        );
                        }}/>
                  </CalendarBox>
               </CalendarRow>
            </Spin>
         </Body>
      )
   }
}

export default CalendarWrap
