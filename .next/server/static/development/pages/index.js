module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/logo.png":
/*!*****************************!*\
  !*** ./assets/img/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/logo_a51d129613c5e2c73aea57858c9d49e2.png";

/***/ }),

/***/ "./common/css/style.css":
/*!******************************!*\
  !*** ./common/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./common/js/axios.js":
/*!****************************!*\
  !*** ./common/js/axios.js ***!
  \****************************/
/*! exports provided: axiosClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosClient", function() { return axiosClient; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./common/js/utils.js");
 // import axiosRetry from 'axios-retry'
// const axiosOrigin = require('axios-proxy-fix')



 // import utils from 'utils'
// axiosOrigin.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axiosOrigin.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

if (false) { var Fingerprint2; }

var cookieData; // if (process.browser) {
//   cookieData =  cookie.parse(document.cookie)
// }

/**
 * [axiosClient description]
 * @type {[type]}
 */

var axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'X-BM-CLIENT': 'WEB',
    'X-BM-DEVICE': 1,
    'X-BM-VERSION': process.env.version || '1.0.0'
  },
  transformRequest: function transformRequest(data, headers) {
    cookieData = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.parse(document.cookie);
    headers['X-BM-DEVICE'] = window.device || 1;
    headers['Authorization'] = cookieData && cookieData.accessToken;
    return qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data);
  },
  transformResponse: function transformResponse(res) {
    //console.log("res",res);
    var host = window.location.host;
    var webDomain = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["breakDownHostUrl"])(host);
    var cookieOptions;

    if (webDomain.indexOf('localhost') < 0) {
      cookieOptions = {
        maxAge: 0,
        domain: ".".concat(webDomain)
      };
    } else {
      cookieOptions = {
        maxAge: 0
      };
    }

    if (+res.code === -6) {
      document.cookie = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.serialize('accessToken', null, cookieOptions);
      document.cookie = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.serialize('accessSalt', null, cookieOptions);
      document.cookie = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.serialize('loginName', null, cookieOptions);
    }

    var ret = JSON.parse(res);
    return ret;
  } // baseURL: process.env.baseUrl,

});
axiosClient.interceptors.response.use(function (res) {
  if (res.status === 200) {
    return res.data;
  }

  return res;
}, function (err) {
  return err;
});

/***/ }),

/***/ "./common/js/utils.js":
/*!****************************!*\
  !*** ./common/js/utils.js ***!
  \****************************/
/*! exports provided: transLang, transLang2, rand, insertSignToParams, filterNAN, isMoneyType, validatePwd, getBrowserLang, breakDownHostUrl, getMainSite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transLang", function() { return transLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transLang2", function() { return transLang2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rand", function() { return rand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertSignToParams", function() { return insertSignToParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNAN", function() { return filterNAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoneyType", function() { return isMoneyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePwd", function() { return validatePwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowserLang", function() { return getBrowserLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakDownHostUrl", function() { return breakDownHostUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainSite", function() { return getMainSite; });
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js/md5 */ "crypto-js/md5");
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__);
 // 正常转化

var transLang = function transLang(lang) {
  var langParam = 'en_US';

  if (lang === 'cn') {
    langParam = 'zh_CN';
  } else if (lang === 'jp') {
    langParam = 'ja_JP';
  } else if (lang === 'kr') {
    langParam = 'ko_KR';
  } else if (lang === 'vn') {
    langParam = 'vi_VN';
  } else if (lang === 'ru') {
    langParam = 'ru_RU';
  } else if (lang === 'cn_tw') {
    langParam = 'zh_TW';
  } else if (lang === 'tr') {
    langParam = 'tr_TR';
  } else {
    langParam = 'en_US';
  }

  return langParam;
}; // 变态转化 只给极验用

var transLang2 = function transLang2(lang) {
  var langParam = 'en';

  if (lang === 'cn') {
    langParam = 'zh-cn';
  } else {
    langParam = 'en';
  }

  return langParam;
};
var rand = function rand(length, current) {
  current = current ? current : '';
  return length ? rand(--length, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 60)) + current) : current;
};
/**
 *
 */

var insertSignToParams = function insertSignToParams(params, timestamp, salt) {
  // asii timsstamp salt => md5
  var keyArr = Object.keys(params);
  var ret = '';
  keyArr = keyArr.sort();
  keyArr.forEach(function (keyName) {
    if (keyName !== 'timestamp') {
      ret = "".concat(ret, "&").concat(keyName, "=").concat(params[keyName]);
    }
  });
  ret = ret.slice(1);
  ret = "".concat(ret).concat(timestamp).concat(salt);
  ret = crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(ret).toString();
  params.sign = ret; // 最后把sign偷偷加上

  return ret;
}; // 对输入框输入数字做格式处理，并返回正确内容

var filterNAN = function filterNAN(str) {
  //得到第一个字符是否为负号
  var s = str.toString();
  var t = str.toString().charAt(0); //先把非数字的都替换掉，除了数字和.

  s = s.replace(/[^\d\.]/g, ''); //必须保证第一个为数字而不是.

  s = s.replace(/^\./g, ''); //保证只有出现一个.而没有多个.

  s = s.replace(/\.{2,}/g, '.'); //保证.只出现一次，而不能出现两次以上

  s = s.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.'); //如果第一位是负号，则允许添加

  if (t == '-') {
    s = '-' + s;
  }

  return s;
}; // 判断是否符合金融格式 只能有一位小数点， 小数点后最长8位， 仅包含数字和一个小数点

var isMoneyType = function isMoneyType(str) {
  var s = str.toString();
  var reg = /^(([1-9]\d*|0)(\.\d{1,8})?)$|(0\.0?([1-9]\d?))$/;
  return reg.test(s);
}; // 8-32  必须包括数字 英文 可以包括 特殊字符 不含空格

var validatePwd = function validatePwd(str) {
  var ret = /[a-zA-Z[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]+/.test(str) && /\d+/.test(str) && str.length >= 6 && str.length <= 32 && !/\s/.test(str);
  return ret;
};
var getBrowserLang = function getBrowserLang() {
  var lang = window.navigator.language;
  var locale;

  if (lang === 'zh-CN' || lang === 'cn') {
    locale = 'cn';
  } else if (lang === 'vi-VN') {
    locale = 'vn';
  } else if (lang === 'ja-JP') {
    locale = 'jp';
  } else if (lang === 'ko-KR') {
    locale = 'kr';
  } else if (lang === 'ru-RU') {
    locale = 'ru';
  } else if (lang === 'zh-TW') {
    locale = 'cn_tw';
  } else if (lang === 'tr-TR') {
    locale = 'tr';
  } else {
    locale = 'en';
  }

  return locale;
};
var breakDownHostUrl = function breakDownHostUrl(url) {
  var hostUrl = url;
  var newUrl = hostUrl; // 防止未做301跳转，产生XXX.XXX的域名

  if (hostUrl.split('.') && hostUrl.split('.').length <= 2) {
    newUrl = hostUrl;
  } else {
    var number = hostUrl.indexOf('.');
    newUrl = hostUrl.slice(number + 1);
  }

  return newUrl;
};
var getMainSite = function getMainSite() {
  var mainSite = 'https://www.bitmart.com';
  var host = window.location.host;
  var webDomain = breakDownHostUrl(host);

  if (process.env.web_env === 'dev') {
    mainSite = "https://web-frontend-v2-dev-d981hkl2m.".concat(webDomain);
  } else if (process.env.web_env === 'testing') {
    mainSite = "https://web-frontend-v2-testing.".concat(webDomain);
  } else if (process.env.web_env === 'master') {
    mainSite = "https://www.".concat(webDomain);
  }

  return mainSite;
};

/***/ }),

/***/ "./components/code/Calendar.js":
/*!*************************************!*\
  !*** ./components/code/Calendar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style/css */ "antd/lib/spin/style/css");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_calendar_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/calendar/style/css */ "antd/lib/calendar/style/css");
/* harmony import */ var antd_lib_calendar_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/calendar */ "antd/lib/calendar");
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/tooltip/style/css */ "antd/lib/tooltip/style/css");
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_js_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/js/axios */ "./common/js/axios.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_10__);







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Body = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Calendar__Body",
  componentId: "sc-1mq0gob-0"
})(["min-height:87vh;padding-top:200px;margin:0 auto;"]);
var CalendarRow = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Calendar__CalendarRow",
  componentId: "sc-1mq0gob-1"
})(["display:flex;justify-content:space-around;width:1200px;margin:0 auto;"]);
var CalendarBox = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Calendar__CalendarBox",
  componentId: "sc-1mq0gob-2"
})(["display:inline-block;width:350px;border:1px solid #d9d9d9;border-radius:4px;.ant-fullcalendar-last-month-cell,.ant-fullcalendar-next-month-btn-day{color:#ccc;}.ant-fullcalendar-selected-day .ant-fullcalendar-value{background:transparent;color:rgba(0,0,0,0.65);box-shadow:none;}.ant-fullcalendar-today .ant-fullcalendar-value{box-shadow:none;}.month{padding:10px;text-align:center;}table{tr{td{.case1{border-radius:5px;background:#cce28c;}.case2{border-radius:5px;background:#287d20;color:#fff;}.case3{border-radius:5px;background:#134f0d;color:#fff;}}}}"]);
var DateTd = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Calendar__DateTd",
  componentId: "sc-1mq0gob-3"
})(["text-align:center;padding:10px;cursor:pointer;"]);

var CalendarWrap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarWrap, _React$Component);

  function CalendarWrap() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarWrap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarWrap)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      testArr1: [0, 1, 1, 0, 0, 1, 0, 3, 0, 2, 1, 0, 2, 1, 2, 1, 0, 3, 0, 1, 0, 2, 1, 0, 0, 0, 2, 1, 0, 1, 0],
      testArr2: [1, 0, 0, 0, 0, 1, 0, 1, 0, 2, 1, 0, 1, 1, 0, 1, 0, 3, 0, 1, 0, 2, 1, 0, 1, 0, 2, 0, 0, 1, 0],
      testArr3: [3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    });

    _defineProperty(_assertThisInitialized(_this), "getListData", function (value, arr, month) {
      var date = value.date();
      var cell;

      if (month - value.month() == 1) {
        cell = {
          count: arr[date - 1]
        };
      }

      return cell;
    });

    _defineProperty(_assertThisInitialized(_this), "dateFullCellRender", function (value, arr, month) {
      var cell = _this.getListData(value, arr, month);

      if (cell) {
        var cellStyle = classname__WEBPACK_IMPORTED_MODULE_10___default()({
          'case1': cell.count === 1,
          'case2': cell.count === 2,
          'case3': cell.count === 3
        });
        var text;

        if (cell.count === 0) {
          text = '你这天偷懒了！';
        } else {
          text = "\u4F60\u8FD9\u5929\u5237\u4E86".concat(cell.count, "\u9898\uFF01");
        }

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
          title: text
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DateTd, {
          className: cellStyle
        }, value.date()));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DateTd, null, value.date());
      }
    });

    return _this;
  }

  _createClass(CalendarWrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var loading = this.state.loading;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Body, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: loading
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CalendarRow, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CalendarBox, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        dateFullCellRender: function dateFullCellRender(value) {
          return _this2.dateFullCellRender(value, _this2.state.testArr1, moment__WEBPACK_IMPORTED_MODULE_9___default()().subtract(2, 'months').startOf('month').format('M'));
        },
        value: moment__WEBPACK_IMPORTED_MODULE_9___default()().subtract(2, 'months').startOf('month'),
        fullscreen: false,
        headerRender: function headerRender() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "month"
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_9___default()().subtract(2, 'months').startOf('month').format('MMM')));
        }
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CalendarBox, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        dateFullCellRender: function dateFullCellRender(value) {
          return _this2.dateFullCellRender(value, _this2.state.testArr2, moment__WEBPACK_IMPORTED_MODULE_9___default()().subtract(1, 'months').startOf('month').format('M'));
        },
        value: moment__WEBPACK_IMPORTED_MODULE_9___default()().subtract(1, 'months').startOf('month'),
        fullscreen: false,
        headerRender: function headerRender() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "month"
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_9___default()().subtract(1, 'months').startOf('month').format('MMM')));
        }
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CalendarBox, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        dateFullCellRender: function dateFullCellRender(value) {
          return _this2.dateFullCellRender(value, _this2.state.testArr3, moment__WEBPACK_IMPORTED_MODULE_9___default()().subtract(0, 'months').startOf('month').format('M'));
        },
        fullscreen: false,
        headerRender: function headerRender() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "month"
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_9___default()().format("MMM")));
        }
      })))));
    }
  }]);

  return CalendarWrap;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CalendarWrap);

/***/ }),

/***/ "./components/layout/CheckLogin.js":
/*!*****************************************!*\
  !*** ./components/layout/CheckLogin.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CheckLogin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckLogin, _React$Component);

  function CheckLogin() {
    _classCallCheck(this, CheckLogin);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckLogin).apply(this, arguments));
  }

  _createClass(CheckLogin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('testUserName')) {
        this.props.login(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('testUserName'));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }
  }]);

  return CheckLogin;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapDispatchToProps = {
  login: _store__WEBPACK_IMPORTED_MODULE_2__["login"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(CheckLogin));

/***/ }),

/***/ "./components/layout/Footer.js":
/*!*************************************!*\
  !*** ./components/layout/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Bar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Bar",
  componentId: "sc-1714oml-0"
})(["background:#6abb03;height:65px;line-height:65px;color:#fff;text-align:center;"]);

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, null, "Copyright 2017-2019 \xA9 code , All Rights Reserved"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider/style/css */ "antd/lib/divider/style/css");
/* harmony import */ var antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/logo.png */ "./assets/img/logo.png");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CheckLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CheckLogin */ "./components/layout/CheckLogin.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Bar = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__Bar",
  componentId: "sc-1dlmmob-0"
})(["background:transparent;position:fixed;top:0;color:#6abb03;height:50px;padding-top:8px;padding-left:10px;width:100%;transition:ease 0.5s;z-index:100;&.isDark{background:#0e1118;}&.light{background:transparent;color:#6abb03;}"]);
var Navi = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li.withConfig({
  displayName: "Header__Navi",
  componentId: "sc-1dlmmob-1"
})(["margin:0 15px;display:inline-block;cursor:pointer;&:hover{opacity:0.7;}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1dlmmob-2"
})(["display:inline-block;height:35px;vertical-align:middle;cursor:pointer;"]);
var LoginBoxUl = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({
  displayName: "Header__LoginBoxUl",
  componentId: "sc-1dlmmob-3"
})(["position:absolute;top:12px;right:20px;li{&:hover{opacity:0.7;}}"]);
var naviList = ['Record'];

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.remove('testUserName');
      this.props.logout();
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.replace('/');
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var bgClass = classname__WEBPACK_IMPORTED_MODULE_9___default()({
        'isDark': this.props.isDark,
        'light': this.props.light
      });
      var ls = {
        display: 'inline-block',
        cursor: 'pointer'
      };
      var loginBox;

      if (this.props.user) {
        loginBox = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LoginBoxUl, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, this.props.user)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "vertical"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          onClick: function onClick() {
            return _this.logout();
          }
        }, "Log Out")));
      } else {
        loginBox = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LoginBoxUl, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/register"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Register"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "vertical"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: ls
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/login"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Login"))));
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CheckLogin__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Bar, {
        className: bgClass
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, {
        src: !this.props.light ? _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a : _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          display: 'inline-block',
          marginLeft: '30px'
        }
      }, naviList.map(function (ele, index) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Navi, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/".concat(ele.toLowerCase())
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, ele)));
      })), loginBox));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var mapDispatchToProps = {
  logout: _store__WEBPACK_IMPORTED_MODULE_8__["logout"]
};

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user;
  return {
    user: user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/layout/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/layout/Footer.js");




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isDark: props.isDark,
    light: props.light
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/css/style.css */ "./common/css/style.css");
/* harmony import */ var _common_css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_css_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_code_Calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/code/Calendar */ "./components/code/Calendar.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Body = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Body",
  componentId: "sc-1ao6dy1-0"
})(["background:#ebeef0;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1ao6dy1-1"
})(["min-height:93vh;padding-top:50px;.title{padding-top:180px;width:1000px;margin:0 auto;}img{width:290px;margin:5px;}.ant-carousel{padding-top:180px;.slick-slider{height:300px;width:1200px;margin:0 auto;}.slick-slide{img{display:inline-block;}}h2{font-size:30px;color:#fff;}}"]);

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isDark: false
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function () {
      if (window.scrollY > 250) {
        _this.setState({
          isDark: true
        });
      } else {
        _this.setState({
          isDark: false
        });
      }
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var isDark = this.state.isDark;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        isDark: isDark,
        className: _common_css_style_css__WEBPACK_IMPORTED_MODULE_4__["sovleNextBug"]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.slim.js"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_code_Calendar__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, getCoinPrice, login, logout, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoinPrice", function() { return getCoinPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);


var InitialState = {
  partners: {},
  coins: {},
  user: null
};
var actionTypes = {
  GETCOINPRICE: 'GETCOINPRICE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.GETCOINPRICE:
      return Object.assign({}, state, {
        coins: action.payload
      });

    case actionTypes.LOGIN:
      return Object.assign({}, state, {
        user: action.payload
      });

    case actionTypes.LOGOUT:
      return Object.assign({}, state, {
        user: null
      });

    default:
      return state;
  }
}; // ACTIONS

var getCoinPrice = function getCoinPrice(data) {
  return {
    type: actionTypes.GETCOINPRICE,
    payload: data
  };
};
var login = function login(data) {
  return {
    type: actionTypes.LOGIN,
    payload: data
  };
};
var logout = function logout(data) {
  return {
    type: actionTypes.LOGOUT
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])()));
}

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/calendar":
/*!************************************!*\
  !*** external "antd/lib/calendar" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/calendar");

/***/ }),

/***/ "antd/lib/calendar/style/css":
/*!**********************************************!*\
  !*** external "antd/lib/calendar/style/css" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/calendar/style/css");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/divider/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/divider/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider/style/css");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "antd/lib/spin/style/css":
/*!******************************************!*\
  !*** external "antd/lib/spin/style/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin/style/css");

/***/ }),

/***/ "antd/lib/tooltip":
/*!***********************************!*\
  !*** external "antd/lib/tooltip" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "antd/lib/tooltip/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/tooltip/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip/style/css");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classname":
/*!****************************!*\
  !*** external "classname" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classname");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "crypto-js/md5":
/*!********************************!*\
  !*** external "crypto-js/md5" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto-js/md5");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map