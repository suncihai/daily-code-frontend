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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/java.png":
/*!*****************************!*\
  !*** ./assets/img/java.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/java_b445a81eeba2b76be7867b1d265a789a.png";

/***/ }),

/***/ "./assets/img/java_fail.png":
/*!**********************************!*\
  !*** ./assets/img/java_fail.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/java_fail_3fc7361dfb094a5de256a6d4c9096051.png";

/***/ }),

/***/ "./assets/img/javascript.png":
/*!***********************************!*\
  !*** ./assets/img/javascript.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/javascript_1250263643f239ebcd7c7e410621d7e1.png";

/***/ }),

/***/ "./assets/img/javascript_fail.png":
/*!****************************************!*\
  !*** ./assets/img/javascript_fail.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/javascript_fail_e3523b26583fb70f7c79d4fece32467f.png";

/***/ }),

/***/ "./assets/img/logo.png":
/*!*****************************!*\
  !*** ./assets/img/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/logo_dfd27ce6e4aa3bdf8190943dae47dfcd.png";

/***/ }),

/***/ "./assets/img/submit_green.png":
/*!*************************************!*\
  !*** ./assets/img/submit_green.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/submit_green_dbe1ab5561bea36395a9b96466e03577.png";

/***/ }),

/***/ "./assets/img/submit_white.png":
/*!*************************************!*\
  !*** ./assets/img/submit_white.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/submit_white_2eaafef9fe06c08d55c62336df441fd1.png";

/***/ }),

/***/ "./common/css/constant.js":
/*!********************************!*\
  !*** ./common/css/constant.js ***!
  \********************************/
/*! exports provided: headHeight, footerHeight, lineHeight, fontSize, themeColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headHeight", function() { return headHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerHeight", function() { return footerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeColor", function() { return themeColor; });
/* 头部导航 */
var headHeight = '50px';
/* 底部 */

var footerHeight = '50px';
/* 统一 UI 样式 */

var lineHeight = '1.5'; // 默认行高

var fontSize = '14px'; // 默认字体大小

var themeColor = '#6abb03'; // 默认主题颜色

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

/***/ "./components/code/AddRecord.js":
/*!**************************************!*\
  !*** ./components/code/AddRecord.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer/style/css */ "antd/lib/drawer/style/css");
/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/drawer */ "antd/lib/drawer");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style/css */ "antd/lib/button/style/css");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row/style/css */ "antd/lib/row/style/css");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/spin/style/css */ "antd/lib/spin/style/css");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col/style/css */ "antd/lib/col/style/css");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_radio_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/radio/style/css */ "antd/lib/radio/style/css");
/* harmony import */ var antd_lib_radio_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/radio */ "antd/lib/radio");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/switch/style/css */ "antd/lib/switch/style/css");
/* harmony import */ var antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/switch */ "antd/lib/switch");
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/form/style/css */ "antd/lib/form/style/css");
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/message/style/css */ "antd/lib/message/style/css");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/select/style/css */ "antd/lib/select/style/css");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _common_js_axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/js/axios */ "./common/js/axios.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var _assets_img_submit_green_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../assets/img/submit_green.png */ "./assets/img/submit_green.png");
/* harmony import */ var _assets_img_submit_green_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_img_submit_green_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_img_submit_white_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../assets/img/submit_white.png */ "./assets/img/submit_white.png");
/* harmony import */ var _assets_img_submit_white_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_img_submit_white_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _common_css_constant__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../common/css/constant */ "./common/css/constant.js");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_30__);






















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Body = styled_components__WEBPACK_IMPORTED_MODULE_23___default.a.div.withConfig({
  displayName: "AddRecord__Body",
  componentId: "sc-1hr4qll-0"
})([""]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_23___default.a.div.withConfig({
  displayName: "AddRecord__Icon",
  componentId: "sc-1hr4qll-1"
})(["position:fixed;right:25px;transform:translateY(-80%);top:20%;padding:10px;border-radius:40px;border:2px solid ", ";cursor:pointer;transition:background 0.4s ease-in-out;.record-icon{width:30px;transition:all 0.4s ease-in-out;}&.hover-icon{background:", ";}"], _common_css_constant__WEBPACK_IMPORTED_MODULE_29__["themeColor"], _common_css_constant__WEBPACK_IMPORTED_MODULE_29__["themeColor"]);
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_20___default.a.Option;

var AddRecordWrap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddRecordWrap, _React$Component);

  function AddRecordWrap() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddRecordWrap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddRecordWrap)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      hover: false,
      visible: false,
      disableSelect: false,
      switchCheck: true,
      language: 'java',
      selectedPro: ''
    });

    _defineProperty(_assertThisInitialized(_this), "fetchProblems",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee() {
      var ret;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_common_js_axios__WEBPACK_IMPORTED_MODULE_22__["axiosClient"])({
                method: 'GET',
                url: '/api/get_problems'
              });

            case 2:
              ret = _context.sent;

              if (ret.code === 0) {
                _this.props.getProblems(ret.data);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "submitRecord",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee2() {
      var timestamp, params, ret;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              timestamp = new Date().getTime();
              params = {
                username: 'suncihai@gmail.com',
                problems: _this.state.selectedPro,
                timestamp: timestamp,
                language: _this.state.language,
                success: _this.state.switchCheck
              };
              _context2.next = 4;
              return Object(_common_js_axios__WEBPACK_IMPORTED_MODULE_22__["axiosClient"])({
                method: 'GET',
                url: '/api/submit_record',
                params: params
              });

            case 4:
              ret = _context2.sent;

              if (ret.code === 0) {
                setTimeout(function () {
                  _this.setState({
                    loading: false,
                    visible: false
                  });

                  antd_lib_message__WEBPACK_IMPORTED_MODULE_17___default.a.success('添加刷题记录成功！');

                  _this.props.updateRecords();
                }, 1000);
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "showDrawer", function () {
      _this.setState({
        visible: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      if (e.length <= 4) {
        _this.setState({
          switches: e.length,
          disableSelect: false,
          selectedPro: _this.filterProblems(e).join('-')
        }, function () {});
      } else {
        _this.setState({
          switches: e.length,
          disableSelect: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "radioChange", function (e) {
      _this.setState({
        language: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "switchChange", function (checked) {
      _this.setState({
        switchCheck: checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterProblems", function (arr) {
      return arr.map(function (ele) {
        return ele.split('-')[0];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  _createClass(AddRecordWrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchProblems();
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          _this2.setState({
            loading: true
          }, function () {
            _this2.submitRecord();
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          loading = _this$state.loading,
          hover = _this$state.hover,
          visible = _this$state.visible,
          disableSelect = _this$state.disableSelect,
          switchCheck = _this$state.switchCheck,
          language = _this$state.language;
      var icon = hover ? _assets_img_submit_white_png__WEBPACK_IMPORTED_MODULE_27___default.a : _assets_img_submit_green_png__WEBPACK_IMPORTED_MODULE_26___default.a;
      var iconStyle = classname__WEBPACK_IMPORTED_MODULE_30___default()({
        'hover-icon': hover
      });
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var problems = this.props.problems;
      return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Body, null, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Icon, {
        className: iconStyle
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("img", {
        className: "record-icon",
        onMouseOver: function onMouseOver() {
          _this3.setState({
            hover: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          _this3.setState({
            hover: false
          });
        },
        onClick: this.showDrawer,
        src: icon
      })), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
        title: "Create a new record",
        width: 450,
        onClose: this.onClose,
        visible: visible
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default.a, {
        layout: "vertical",
        hideRequiredMark: true,
        onSubmit: function onSubmit(e) {
          return _this3.handleSubmit(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_7___default.a, {
        spinning: loading
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 24
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        label: "Problem"
      }, getFieldDecorator('problem', {
        rules: [{
          required: true,
          message: 'Please select at lease one problem'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(SelectWrapper, {
        onChange: this.onChange,
        problems: problems,
        disableSelect: disableSelect
      }))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        label: "Pass or Fail"
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_13___default.a, {
        defaultChecked: true,
        onChange: this.switchChange
      })), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        label: "Language"
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default.a.Group, {
        onChange: this.radioChange,
        value: language
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default.a, {
        value: "java"
      }, "Java"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default.a, {
        value: "javascript"
      }, "Javascript"))))))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right'
        }
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onClick: this.onClose,
        style: {
          marginRight: 8
        }
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        },
        type: "primary"
      }, "Submit"))));
    }
  }]);

  return AddRecordWrap;
}(react__WEBPACK_IMPORTED_MODULE_21___default.a.Component);

var SelectWrapper = Object(react__WEBPACK_IMPORTED_MODULE_21__["forwardRef"])(function (props, ref) {
  if (!props.disableSelect) {
    return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_20___default.a, {
      mode: "multiple",
      size: "large",
      onChange: props.onChange,
      ref: ref,
      placeholder: "Please select at lease one problem"
    }, props.problems.map(function (item, index) {
      var v = "".concat(item.number, "-").concat(item.name);
      return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Option, {
        key: item.name,
        value: v
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", null, v));
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_20___default.a, {
      mode: "multiple",
      size: "large",
      ref: ref,
      onChange: props.onChange,
      placeholder: "Please select at lease one problem"
    }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Option, {
      key: "000",
      value: "000",
      disabled: true
    }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", null, "You may at least select five problems!")));
  }
});
var mapDispatchToProps = {
  getRecords: _store__WEBPACK_IMPORTED_MODULE_25__["getRecords"],
  getProblems: _store__WEBPACK_IMPORTED_MODULE_25__["getProblems"]
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var problems = _ref3.problems;
  return {
    problems: problems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_24__["connect"])(mapStateToProps, mapDispatchToProps)(antd_lib_form__WEBPACK_IMPORTED_MODULE_15___default.a.create()(AddRecordWrap)));

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
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style/css */ "antd/lib/button/style/css");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/popover/style/css */ "antd/lib/popover/style/css");
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/tooltip/style/css */ "antd/lib/tooltip/style/css");
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_js_axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/js/axios */ "./common/js/axios.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _AddRecord__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AddRecord */ "./components/code/AddRecord.js");
/* harmony import */ var _assets_img_java_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/img/java.png */ "./assets/img/java.png");
/* harmony import */ var _assets_img_java_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_img_java_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_img_javascript_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/img/javascript.png */ "./assets/img/javascript.png");
/* harmony import */ var _assets_img_javascript_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_img_javascript_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_img_java_fail_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/img/java_fail.png */ "./assets/img/java_fail.png");
/* harmony import */ var _assets_img_java_fail_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_img_java_fail_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_img_javascript_fail_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/img/javascript_fail.png */ "./assets/img/javascript_fail.png");
/* harmony import */ var _assets_img_javascript_fail_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_img_javascript_fail_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _common_css_constant__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/css/constant */ "./common/css/constant.js");












function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var Body = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div.withConfig({
  displayName: "Calendar__Body",
  componentId: "sc-1mq0gob-0"
})(["min-height:87vh;padding-top:200px;margin:0 auto;"]);
var MonthRow = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div.withConfig({
  displayName: "Calendar__MonthRow",
  componentId: "sc-1mq0gob-1"
})(["width:1200px;margin:0 auto;text-align:left;margin-bottom:20px;.prev{margin-right:15px;}"]);
var CalendarRow = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div.withConfig({
  displayName: "Calendar__CalendarRow",
  componentId: "sc-1mq0gob-2"
})(["display:flex;justify-content:space-between;width:1200px;margin:0 auto;"]);
var CalendarBox = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div.withConfig({
  displayName: "Calendar__CalendarBox",
  componentId: "sc-1mq0gob-3"
})(["display:inline-block;width:350px;border:1px solid #d9d9d9;border-radius:4px;.ant-fullcalendar-last-month-cell,.ant-fullcalendar-next-month-btn-day{color:#ccc;}.ant-fullcalendar-selected-day .ant-fullcalendar-value{background:transparent;color:rgba(0,0,0,0.65);box-shadow:none;}.ant-fullcalendar-today .ant-fullcalendar-value{box-shadow:none;}.month{padding:10px;text-align:center;position:relative;.records{position:absolute;right:10px;top:5px;color:#fff;background:", ";padding:5px;border-radius:50px;}}table{tr{td{padding:2px;.case1{border-radius:5px;background:#cce28c;}.case2{border-radius:5px;background:#6abb03;color:#fff;}.case3{border-radius:5px;background:#287d20;color:#fff;position:relative;overflow:hidden;&:after{animation:shine 5s ease-in-out infinite;animation-fill-mode:forwards;content:'';position:absolute;top:-110%;left:-210%;width:200%;height:200%;opacity:0;transform:rotate(30deg);background:rgba(255,255,255,0.13);background:linear-gradient( to right,rgba(255,255,255,0.13) 0%,rgba(255,255,255,0.13) 77%,rgba(255,255,255,0.5) 92%,rgba(255,255,255,0) 100% );}&:active:after{opacity:0;}}}}}@keyframes shine{10%{opacity:1;top:-30%;left:-30%;transition-property:left,top,opacity;transition-duration:0.7s,0.7s,0.15s;transition-timing-function:ease;}100%{opacity:0;top:-30%;left:-30%;transition-property:left,top,opacity;}}"], _common_css_constant__WEBPACK_IMPORTED_MODULE_23__["themeColor"]);
var DateTd = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div.withConfig({
  displayName: "Calendar__DateTd",
  componentId: "sc-1mq0gob-4"
})(["text-align:center;padding:10px;cursor:pointer;"]);
var PopTable = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.table.withConfig({
  displayName: "Calendar__PopTable",
  componentId: "sc-1mq0gob-5"
})(["tr td{text-align:left;padding:0 5px;img{height:24px;}}td{&.easy{color:#6abb03;}&.medium{color:#ffb800;}&.hard{color:#ff2d55;}}tr.fail{color:#fd9700;}"]);

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
      page: 1
    });

    _defineProperty(_assertThisInitialized(_this), "fetchRecords",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee() {
      var timestamp, params, ret, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              timestamp = new Date().getTime();
              params = {
                username: 'suncihai@gmail.com',
                page: _this.state.page
              };
              _context.next = 4;
              return Object(_common_js_axios__WEBPACK_IMPORTED_MODULE_12__["axiosClient"])({
                method: 'GET',
                url: '/api/get_record',
                params: params
              });

            case 4:
              ret = _context.sent;

              if (ret.code === 0) {
                data = ret.data; // this.insertName(data.currMonthRecord);
                // this.insertName(data.lastMonthRecord);
                // this.insertName(data.prevMonthRecord);

                _this.props.getRecords(data);
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "getListData", function (value, arr, month) {
      var date = value.date();
      var cell;

      if (month - value.month() == 1) {
        if (arr[date - 1]) {
          cell = {
            count: arr[date - 1].length,
            problems: arr[date - 1]
          };
        }
      }

      return cell;
    });

    _defineProperty(_assertThisInitialized(_this), "dateFullCellRender", function (value, arr, month, problems) {
      var cell = _this.getListData(value, arr, month);

      if (cell) {
        var cellStyle = classname__WEBPACK_IMPORTED_MODULE_17___default()({
          case1: cell.count >= 1 && cell.count <= 3,
          case2: cell.count >= 4 && cell.count <= 7,
          case3: cell.count >= 8
        });
        var text;

        if (cell.count === 0) {
          text = '你这天偷懒了！';
        } else if (cell.count > 0 && cell.count < 5) {
          text = "\u4F60\u8FD9\u5929\u5237\u4E86".concat(cell.count, "\u9898\uFF01");
        } else {
          text = "\u597D\u68D2\uFF01\u4F60\u8FD9\u5929\u5237\u4E86".concat(cell.count, "\u9898\uFF01");
        }

        if (cell.count > 0) {
          var content = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(PopTable, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tbody", null, cell.problems.map(function (ele, index) {
            var cellProblem = problems.filter(function (problem) {
              return problem.number == ele.problem;
            })[0];
            var problemStyle = classname__WEBPACK_IMPORTED_MODULE_17___default()({
              easy: cellProblem && cellProblem.difficulty == 'Easy',
              medium: cellProblem && cellProblem.difficulty == 'Medium',
              hard: cellProblem && cellProblem.difficulty == 'Hard'
            });
            return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", {
              className: classname__WEBPACK_IMPORTED_MODULE_17___default()({
                fail: ele.success == false
              }),
              key: index
            }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
              className: problemStyle
            }, ele.problem), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
              className: problemStyle
            }, cellProblem && cellProblem.name), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
              className: problemStyle
            }, function () {
              if (ele.language === 'java') {
                if (ele.success === false) {
                  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
                    src: _assets_img_java_fail_png__WEBPACK_IMPORTED_MODULE_21___default.a
                  });
                } else {
                  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
                    src: _assets_img_java_png__WEBPACK_IMPORTED_MODULE_19___default.a
                  });
                }
              } else {
                if (ele.success == false) {
                  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
                    src: _assets_img_javascript_fail_png__WEBPACK_IMPORTED_MODULE_22___default.a
                  });
                } else {
                  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
                    src: _assets_img_javascript_png__WEBPACK_IMPORTED_MODULE_20___default.a
                  });
                }
              }
            }()));
          })));
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_7___default.a, {
            placement: "bottom",
            trigger: "click",
            content: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, content)
          }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9___default.a, {
            title: text
          }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(DateTd, {
            className: cellStyle
          }, value.date())));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9___default.a, {
            title: text
          }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(DateTd, {
            className: cellStyle
          }, value.date()));
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(DateTd, null, value.date());
      }
    });

    return _this;
  }

  _createClass(CalendarWrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchRecords();
    }
  }, {
    key: "prevPage",
    value: function prevPage() {
      var _this2 = this;

      this.setState({
        page: this.state.page + 1
      }, function () {
        _this2.fetchRecords();
      });
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      var _this3 = this;

      this.setState({
        page: this.state.page - 1
      }, function () {
        _this3.fetchRecords();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          loading = _this$state.loading,
          page = _this$state.page;
      var _this$props = this.props,
          records = _this$props.records,
          problems = _this$props.problems;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Body, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: loading
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(MonthRow, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "prev",
        onClick: function onClick(e) {
          return _this4.prevPage(e);
        },
        type: "primary"
      }, "Prev"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onClick: function onClick(e) {
          return _this4.nextPage(e);
        },
        type: "primary"
      }, "Next")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(CalendarRow, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(CalendarBox, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        dateFullCellRender: function dateFullCellRender(value) {
          return _this4.dateFullCellRender(value, records.prevMonthRecord, moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(2, 'months').startOf('month').format('M'), problems);
        },
        value: moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(2, 'months').startOf('month'),
        fullscreen: false,
        headerRender: function headerRender() {
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
            className: "month"
          }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(2 + 3 * (page - 1), 'months').startOf('month').format('YYYY, MMM')), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
            className: "records"
          }, records.prevMonthCount));
        }
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(CalendarBox, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        dateFullCellRender: function dateFullCellRender(value) {
          return _this4.dateFullCellRender(value, records.lastMonthRecord, moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(1, 'months').startOf('month').format('M'), problems);
        },
        value: moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(1, 'months').startOf('month'),
        fullscreen: false,
        headerRender: function headerRender() {
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
            className: "month"
          }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(1 + 3 * (page - 1), 'months').startOf('month').format('YYYY, MMM')), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
            className: "records"
          }, records.lastMonthCount));
        }
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(CalendarBox, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        dateFullCellRender: function dateFullCellRender(value) {
          return _this4.dateFullCellRender(value, records.currMonthRecord, moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(0, 'months').startOf('month').format('M'), problems);
        },
        fullscreen: false,
        headerRender: function headerRender() {
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
            className: "month"
          }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(0 + 3 * (page - 1), 'months').startOf('month').format('YYYY, MMM')), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
            className: "records"
          }, records.currMonthCount));
        }
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_AddRecord__WEBPACK_IMPORTED_MODULE_18__["default"], {
        updateRecords: this.fetchRecords
      }));
    }
  }]);

  return CalendarWrap;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

var mapDispatchToProps = {
  getRecords: _store__WEBPACK_IMPORTED_MODULE_15__["getRecords"]
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var records = _ref2.records,
      problems = _ref2.problems;
  return {
    records: records,
    problems: problems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapDispatchToProps)(CalendarWrap));

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
/* harmony import */ var _common_css_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/css/constant */ "./common/css/constant.js");



var Bar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Bar",
  componentId: "sc-1714oml-0"
})(["background:", ";height:65px;line-height:65px;color:#fff;text-align:center;"], _common_css_constant__WEBPACK_IMPORTED_MODULE_2__["themeColor"]);

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, null, "Copyright 2019 \xA9 code , All Rights Reserved"));
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
/* harmony import */ var _common_css_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/css/constant */ "./common/css/constant.js");




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
})(["background:transparent;position:fixed;top:0;color:", ";height:50px;padding-top:8px;padding-left:10px;width:100%;transition:ease 0.5s;z-index:100;&.isDark{background:#0e1118;}&.light{background:transparent;color:", ";}"], _common_css_constant__WEBPACK_IMPORTED_MODULE_12__["themeColor"], _common_css_constant__WEBPACK_IMPORTED_MODULE_12__["themeColor"]);
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
/*! exports provided: actionTypes, reducer, getRecords, getProblems, login, logout, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecords", function() { return getRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProblems", function() { return getProblems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);


var InitialState = {
  user: null,
  records: {
    prevMonthRecord: [],
    lastMonthRecord: [],
    currMonthRecord: []
  },
  problems: []
};
var actionTypes = {
  GETRECORDS: 'GETRECORDS',
  GETPROBLEMS: 'GETPROBLEMS',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.GETRECORDS:
      return Object.assign({}, state, {
        records: action.payload
      });

    case actionTypes.GETPROBLEMS:
      return Object.assign({}, state, {
        problems: action.payload
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

var getRecords = function getRecords(data) {
  return {
    type: actionTypes.GETRECORDS,
    payload: data
  };
};
var getProblems = function getProblems(data) {
  return {
    type: actionTypes.GETPROBLEMS,
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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style/css":
/*!********************************************!*\
  !*** external "antd/lib/button/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

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

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/col/style/css":
/*!*****************************************!*\
  !*** external "antd/lib/col/style/css" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style/css");

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

/***/ "antd/lib/drawer":
/*!**********************************!*\
  !*** external "antd/lib/drawer" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "antd/lib/drawer/style/css":
/*!********************************************!*\
  !*** external "antd/lib/drawer/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer/style/css");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/form/style/css":
/*!******************************************!*\
  !*** external "antd/lib/form/style/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style/css");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/message/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/message/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style/css");

/***/ }),

/***/ "antd/lib/popover":
/*!***********************************!*\
  !*** external "antd/lib/popover" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "antd/lib/popover/style/css":
/*!*********************************************!*\
  !*** external "antd/lib/popover/style/css" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover/style/css");

/***/ }),

/***/ "antd/lib/radio":
/*!*********************************!*\
  !*** external "antd/lib/radio" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ "antd/lib/radio/style/css":
/*!*******************************************!*\
  !*** external "antd/lib/radio/style/css" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio/style/css");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/row/style/css":
/*!*****************************************!*\
  !*** external "antd/lib/row/style/css" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style/css");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/select/style/css":
/*!********************************************!*\
  !*** external "antd/lib/select/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style/css");

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

/***/ "antd/lib/switch":
/*!**********************************!*\
  !*** external "antd/lib/switch" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),

/***/ "antd/lib/switch/style/css":
/*!********************************************!*\
  !*** external "antd/lib/switch/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch/style/css");

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