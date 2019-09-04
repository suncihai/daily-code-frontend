
import React, { Component } from 'react';
import { axiosClient } from '../../common/js/axios'
import styled from 'styled-components'
import { problemList } from '../../common/js/const'
import { Calendar, Tooltip, Popover, Spin, Button } from 'antd'
import { connect } from 'react-redux'
import { getRecords } from '../../store'
import moment from 'moment'
import cx from 'classname'
import AddRecord from './AddRecord'
import javaicon from '../../assets/img/java.png'
import javascripticon from '../../assets/img/javascript.png'
import javafailicon from '../../assets/img/java_fail.png'
import javascriptfailicon from '../../assets/img/javascript_fail.png'
import { themeColor } from '../../common/css/constant';

const Body = styled.div`
   min-height: 87vh;
   padding-top: 200px;
   margin: 0 auto;
`

const MonthRow = styled.div`
   width: 1200px;
   margin: 0 auto;
   text-align: left;
   margin-bottom: 20px;
   .prev {
      margin-right: 15px;
   }
`

const CalendarRow = styled.div`
   display: flex;
   justify-content: space-between;
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
      position: relative;
      .records {
         position: absolute;
         right: 10px;
         top: 5px;
         color: #fff;
         background: ${themeColor};
         padding: 5px;
         border-radius:50px;
      }
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
              background: #6abb03;
              color: #fff;
           }
           .case3 {
              border-radius: 5px; 
              background: #287d20;
              color: #fff;
              position: relative;
              overflow: hidden;
              &:after {
               animation: shine 5s ease-in-out infinite;
               animation-fill-mode: forwards;  
               content: "";
               position: absolute;
               top: -110%;
               left: -210%;
               width: 200%;
               height: 200%;
               opacity: 0;
               transform: rotate(30deg);
               background: rgba(255, 255, 255, 0.13);
               background: linear-gradient(
                  to right, 
                  rgba(255, 255, 255, 0.13) 0%,
                  rgba(255, 255, 255, 0.13) 77%,
                  rgba(255, 255, 255, 0.5) 92%,
                  rgba(255, 255, 255, 0.0) 100%
               );
             }
             &:active:after {
               opacity: 0;
             }
             
           }
        }
      }
   }
   @keyframes shine{
      10% {
        opacity: 1;
        top: -30%;
        left: -30%;
        transition-property: left, top, opacity;
        transition-duration: 0.7s, 0.7s, 0.15s;
        transition-timing-function: ease;
      }
      100% {
        opacity: 0;
        top: -30%;
        left: -30%;
        transition-property: left, top, opacity;
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
      img {
         height: 24px;
      }
   }
   tr.fail {
      color: #fd9700;
   }
`

class CalendarWrap extends React.Component {
   state = {
      loading: false,
      page: 1,
   }

   componentDidMount() {
     this.fetchRecords()
   }

   prevPage() {
      this.setState({page: this.state.page+1},()=>{
          this.fetchRecords();
      });
   }

   nextPage() {
      this.setState({page: this.state.page-1},()=>{
         this.fetchRecords();
      });
   }

   fetchRecords = async () => {
      const timestamp = new Date().getTime();

      const params = {
         username: 'suncihai@gmail.com',
         page: this.state.page,
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
                                       <tr className={cx({'fail':ele.success == false})} key={index}>
                                          <td>{ele.problem}</td>
                                          <td>{ele.name}</td>
                                          <td>
                                               {
                                                  (()=>{
                                                     if(ele.language === 'java') {
                                                        if(ele.success === false) {
                                                          return (
                                                             <img src={javafailicon} />
                                                          )
                                                        } else {
                                                          return (
                                                             <img src={javaicon} />
                                                          )
                                                        }
                                                     }else {
                                                        if(ele.success == false) {
                                                          return (
                                                             <img src={javascriptfailicon} />
                                                          )
                                                        } else {
                                                           return (
                                                              <img src={javascripticon} />
                                                           )
                                                        }
                                                     }
                                                  })()
                                               }
                                          </td> 
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
      const { loading, page } = this.state
      const { records } = this.props

      return ( 
         <Body>
            <Spin spinning={loading}>
               <MonthRow>
                  <Button className="prev" onClick={(e)=>this.prevPage(e)} type="primary">
                     Prev
                  </Button>
                  <Button onClick={(e)=>this.nextPage(e)} type="primary">
                     Next
                  </Button>
               </MonthRow>
               <CalendarRow>
                  <CalendarBox>
                     <Calendar 
                        dateFullCellRender={(value)=>this.dateFullCellRender(value,records.prevMonthRecord,moment().subtract(2, 'months').startOf('month').format('M'))} 
                        value={moment().subtract(2, 'months').startOf('month')} 
                        fullscreen={false} 
                        headerRender={() => {
                           return (
                           <div className="month">
                              <div>{moment().subtract(2+3*(page-1), 'months').startOf('month').format('MMM')}</div>
                              <div className="records">{records.prevMonthCount}</div>
                           </div>
                           );
                        }}/>
                  </CalendarBox>
                  <CalendarBox>
                     <Calendar 
                        dateFullCellRender={(value)=>this.dateFullCellRender(value,records.lastMonthRecord,moment().subtract(1, 'months').startOf('month').format('M'))} 
                        value={moment().subtract(1, 'months').startOf('month')}
                        fullscreen={false} 
                        headerRender={() => {
                        return (
                           <div className="month">
                              <div>{moment().subtract(1+3*(page-1), 'months').startOf('month').format('MMM')}</div>
                              <div className="records">{records.lastMonthCount}</div>
                           </div>
                        );
                        }}/>
                  </CalendarBox>
                  <CalendarBox>
                     <Calendar
                        dateFullCellRender={(value)=>this.dateFullCellRender(value,records.currMonthRecord,moment().subtract(0, 'months').startOf('month').format('M'))}  
                        fullscreen={false} 
                        headerRender={() => {
                        return (
                           <div className="month">
                              <div>{moment().subtract(0+3*(page-1), 'months').startOf('month').format('MMM')}</div>
                              <div className="records">{records.currMonthCount}</div>
                           </div>
                        );
                        }}/>
                  </CalendarBox>
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

