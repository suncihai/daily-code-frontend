/**
 * 此模块写springboot范例的user的接口
 */
const { axiosServer } = require('./axiosServer')
const {responseWrap, errorResponse} = require('./responseWrap')

const register = (req, res) => {
  axiosServer({
      method: 'GET',
      url: `http://localhost:8080/register`,
      params: req.body,
      headers: req.headers,
    })
    .then(responseWrap(req, res))
    .catch(errorResponse(req, res))
}

const login = (req, res) => {
  axiosServer({
      method: 'GET',
      url: `http://localhost:8080/login`,
      params: req.body,
      headers: req.headers,
    })
    .then(responseWrap(req, res))
    .catch(errorResponse(req, res))
}

module.exports = {
  register,
  login
}
