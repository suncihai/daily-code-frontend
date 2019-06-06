import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { GlobalStyle } from '../common/css/GlobalStyle'
import Head from 'next/head'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Head>
          <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
        </Head>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
          <GlobalStyle />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)