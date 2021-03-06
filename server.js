const express = require('express')
const next = require('next')
const { parse } = require('url')
const { join } = require('path')
const dev = process.env.NODE_ENV !== 'production'
const axios = require('axios')
const qs = require('qs')
const app = next({dev})
const handle = app.getRequestHandler()

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { getRecord, submitRecord } = require('./server/record.js')
const { getProblems } = require('./server/problems.js')
const { register, login } = require('./server/user.js')

if (process.env.NODE_ENV === 'dev') {
  if (!process.env.LOCAL_API) {
    global.baseApiurl = 'https://api-v2-dev-d981hkl2m.bitmart.com/api/v3'
    global.baseNewApiurl = 'https://api-v2-dev-d981hkl2m.bitmart.com/cal'
    global.baseAssetApiurl = 'https://api-v2-dev-d981hkl2m.bitmart.com/asset'
    global.baseMainurl = 'https://api-v2-dev-d981hkl2m.bitmart.com'
    global.apihost = 'api-v2-dev-d981hkl2m.bitmart.com'
    predomain = 'web-frontend-v2-dev-d981hkl2m.'
  } else {
    global.baseApiurl = `http://${process.env.LOCAL_API}/api/v3`
    global.baseNewApiurl = `http://${process.env.LOCAL_API}/cal`
    global.baseAssetApiurl = `http://${process.env.LOCAL_API}/asset`
    global.baseMainurl = `http://${process.env.LOCAL_API}`
    global.apihost = 'api-v2-dev-d981hkl2m.bitmart.com'
    predomain = 'web-frontend-v2-dev-d981hkl2m.'
  }
} else if (process.env.NODE_ENV === 'testing') {
  if (!process.env.LOCAL_API) {
    global.baseApiurl = 'https://api-v2-testing-d8pvw98nl.bitmart.com/api/v3'
    global.baseNewApiurl = 'https://api-v2-testing-d8pvw98nl.bitmart.com/cal'
    global.baseAssetApiurl = 'https://api-v2-testing-d8pvw98nl.bitmart.com/asset'
    global.baseMainurl = 'https://api-v2-testing-d8pvw98nl.bitmart.com'
    global.apihost = 'api-v2-testing-d8pvw98nl.bitmart.com'
    predomain = 'web-frontend-v2-testing-d981hkl2m.'
  } else {
    global.baseApiurl = `http://${process.env.LOCAL_API}/api/v3`
    global.baseNewApiurl = `http://${process.env.LOCAL_API}/cal`
    global.baseAssetApiurl = `http://${process.env.LOCAL_API}/asset`
    global.baseMainurl = `http://${process.env.LOCAL_API}`
    global.apihost = 'api-v2-testing-d8pvw98nl.bitmart.com'
    predomain = 'web-frontend-v2-testing-d981hkl2m.'
  }
} else {
  if (!process.env.LOCAL_API) {
    global.baseApiurl = 'https://api.bitmart.com/api/v3'
    global.baseNewApiurl = 'https://api.bitmart.com/cal'
    global.baseAssetApiurl = 'https://api.bitmart.com/asset'
    global.baseMainurl = 'https://api.bitmart.com'
    global.apihost = 'api.bitmart.com'
    predomain = 'www.'
  } else {
    global.baseApiurl = `http://${process.env.LOCAL_API}/api/v3`
    global.baseNewApiurl = `http://${process.env.LOCAL_API}/cal`
    global.baseAssetApiurl = `http://${process.env.LOCAL_API}/asset`
    global.baseMainurl = `http://${process.env.LOCAL_API}`
    global.apihost = 'api.bitmart.com'
    predomain = 'www.'
  }
}

(async () => {
  await app.prepare()
  const server = express()

  server.use(bodyParser.raw())
  server.use(bodyParser.json())
  server.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  server.use(cookieParser())

  server.use((req, res, next) => {
    req.res = res
    res.req = req
    if (req.url.startsWith('/api')) {
      if (req.method === 'GET') {
        const url_parts = parse(req.url, true)
        req.body = url_parts.query
      }
      req.headers.host = global.apihost
    }
    next()
  })
  
  server.get('/api/register', register)
  server.get('/api/login', login)
  server.get('/api/get_record', getRecord)
  server.get('/api/submit_record', submitRecord)
  server.get('/api/get_problems', getProblems)
  
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    // 这几个特殊文件不需要加static路径访问
    const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.ico']
    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, 'static', parsedUrl.pathname)
      app.serveStatic(req, res, path)
    } else {
      handle(req, res, parsedUrl)
    }
  })

  await server.listen(3009)
  console.log('> Ready on http://localhost:3009')
})()
