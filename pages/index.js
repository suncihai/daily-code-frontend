import React from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components'
import Head from 'next/head'
import * as css from '../common/css/style.css'
import Calendar from '../components/code/Calendar'


const Body = styled.div`
   background: #ebeef0;
`

const Container = styled.div`
    min-height: 93vh;
    padding-top: 50px;
    .title {
        padding-top: 180px;
        width: 1000px;
        margin: 0 auto;

    }
    img {
      width: 290px;
      margin: 5px;
    }
    .ant-carousel {
       padding-top: 180px;
       .slick-slider {
          height: 300px;
          width: 1200px;
          margin: 0 auto;
       }
       .slick-slide {
         img {
            display: inline-block;
         }
       }
       h2 {
         font-size: 30px;
         color: #fff;
       }
    }
`

class Index extends React.Component {
  state = {
    isDark : false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.onScroll)
  }

  onScroll = () => {
    if (window.scrollY > 250) {
       this.setState({isDark: true})
    } else {
       this.setState({isDark: false})
    }
  }

   render(){
      const { isDark } = this.state
 
      return (
        <Layout isDark={isDark} className={css.sovleNextBug}>
          <Head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.slim.js"></script>
          </Head>
          <Body>
            <Container>
              <Calendar />
            </Container>
          </Body>
        </Layout>
      )
   }
}

export default Index



