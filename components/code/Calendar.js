
import React, { Component } from 'react';
import { axiosClient } from '../../common/js/axios'
import styled from 'styled-components'
import { problemList } from '../../common/js/const'
import { Calendar, Tooltip, Popover, Spin } from 'antd'
import { connect } from 'react-redux'
import { getRecords } from '../../store'
import moment from 'moment'
import cx from 'classname'
import AddRecord from './AddRecord'

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

const PopTable = styled.table`
   tr td {
      text-align: left;
      padding: 0 5px;
   }
`

class CalendarWrap extends React.Component {
   state = {
      loading: false,
   }

   componentDidMount() {
     this.fetchRecords()
   }

   fetchRecords = async () => {
      const timestamp = new Date().getTime();

      const params = {
         username: 'suncihai@gmail.com'
      }

      const ret = await axiosClient({
        method: 'GET',
        url: '/api/get_record',
        params,
      })

      if (ret.code === 0) {
         let data = ret.data
         this.insertName(data.currMonthRecord)
         this.insertName(data.lastMonthRecord)
         this.insertName(data.prevMonthRecord)
         this.props.getRecords(data)
      } 
   }

   insertName = (arr) => {
      arr.map(list=>{
         if(list.length>0) {
            list.map(ele=>{
               ele.name = problemList[ele.problem-1]
            })
         }
      })
   }

   getListData = (value, arr, month) => {
     let date = value.date()
     let cell
     if(month - value.month() == 1) {
       if(arr[date-1]) {
          cell = {
                   count: arr[date-1].length,
                   problems: arr[date-1]
                 }
       }
     }
     return cell
   }

   dateFullCellRender = (value, arr, month) => {
      const cell = this.getListData(value, arr, month)
      if(cell) {
         let cellStyle = cx({
            'case1': cell.count >= 1 && cell.count <= 2,
            'case2': cell.count >= 3 && cell.count <= 4,
            'case3': cell.count >= 5,
         })
         let text
         if(cell.count === 0) {
           text = '你这天偷懒了！'
         }else if(cell.count > 0 && cell.count < 5) {
           text = `你这天刷了${cell.count}题！`
         }else {
           text = `好棒！你这天刷了${cell.count}题！`
         }

         if(cell.count > 0) {
            const content = <PopTable>
                               <tbody>
                               {
                                 cell.problems.map((ele, index)=>{
                                    return (
                                       <tr key={index}>
                                          <td>{ele.problem}</td>
                                          <td>{ele.name}</td> 
                                       </tr>
                                    )
                                 })
                              }
                              </tbody>
                           </PopTable>
            
            return (
               <Popover 
                  placement="bottom"
                  trigger="click"
                  theme="dark"
                  content=
                     {
                        <div>{content}</div>
                    }
               > 
                  <Tooltip title={text}>
                     <DateTd className={cellStyle}>{value.date()}</DateTd>
                  </Tooltip>
               </Popover>
            )
         }else{
            return (
               <Tooltip title={text}>
                  <DateTd className={cellStyle}>{value.date()}</DateTd>
               </Tooltip>
            )
         }
      }else{
         return (
            <DateTd >{value.date()}</DateTd>
         )
      }
   }
   
   render() {
      const { loading } = this.state
      const { records } = this.props

      return ( 
         <Body>
            <Spin spinning={loading}>
               <CalendarRow>
                  <CalendarBox>
                     <Calendar 
                        dateFullCellRender={(value)=>this.dateFullCellRender(value,records.prevMonthRecord,moment().subtract(2, 'months').startOf('month').format('M'))} 
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
                  <div>{records.prevMonthCount}</div>
                  <CalendarBox>
                     <Calendar 
                        dateFullCellRender={(value)=>this.dateFullCellRender(value,records.lastMonthRecord,moment().subtract(1, 'months').startOf('month').format('M'))} 
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
                  <div>{records.lastMonthCount}</div>
                  <CalendarBox>
                     <Calendar
                        dateFullCellRender={(value)=>this.dateFullCellRender(value,records.currMonthRecord,moment().subtract(0, 'months').startOf('month').format('M'))}  
                        fullscreen={false} 
                        headerRender={() => {
                        return (
                           <div className="month">
                              <div>{moment().format("MMM")}</div>
                           </div>
                        );
                        }}/>
                  </CalendarBox>
                  <div>{records.currMonthCount}</div>
               </CalendarRow>
            </Spin>
            <AddRecord updateRecords={this.fetchRecords}/>
         </Body>
      )
   }
}

const mapDispatchToProps = { getRecords }
const mapStateToProps = ({records, problems}) => ({records, problems})

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(CalendarWrap)

