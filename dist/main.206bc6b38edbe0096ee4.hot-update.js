"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatechallenge"]("main",{

/***/ "./src/frontend/api.js":
/*!*****************************!*\
  !*** ./src/frontend/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"GET_USERS\": () => (/* binding */ GET_USERS),\n/* harmony export */   \"getRequests\": () => (/* binding */ getRequests),\n/* harmony export */   \"getAllUsers\": () => (/* binding */ getAllUsers)\n/* harmony export */ });\nvar BASE_URL = 'http://localhost:3000';\nvar GET_USERS = '/user';\nvar getRequests = function getRequests(obj) {\n  return new Promise(function (resolve, reject) {\n    var request = new XMLHttpRequest();\n    request.open(obj.method, obj.url, false);\n\n    if (header) {\n      Object.keys(obj.headers).forEach(function (key) {\n        return request.setRequestHeader(key, obj.headers[key]);\n      });\n    }\n\n    request.onload = function () {\n      if (request.status >= 200 && request.status < 300) {\n        resolve(request.response);\n      } else {\n        reject(request.response);\n      }\n    };\n\n    request.onerror = function () {\n      return reject(request.statusText);\n    };\n\n    request.send(obj.body);\n  });\n};\nheader;\nvar getUsersParams = {\n  method: 'GET',\n  url: \"\".concat(BASE_URL, \"${GET_USERS}\")\n};\nvar getAllUsers = function getAllUsers() {\n  return getRequests(getUsersParams).then(function (data) {\n    console.log(data);\n    return JSON.parse(data);\n  });\n};\n\n//# sourceURL=webpack://challenge/./src/frontend/api.js?");

/***/ }),

/***/ "./src/frontend/components/AllUsers/index.js":
/*!***************************************************!*\
  !*** ./src/frontend/components/AllUsers/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AllUsers\": () => (/* binding */ AllUsers)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ \"./src/frontend/api.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar AllUsers = /*#__PURE__*/function (_React$Component) {\n  _inherits(AllUsers, _React$Component);\n\n  var _super = _createSuper(AllUsers);\n\n  function AllUsers(props) {\n    var _this;\n\n    _classCallCheck(this, AllUsers);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      userLists: []\n    };\n    return _this;\n  }\n\n  _createClass(AllUsers, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var response = (0,_api__WEBPACK_IMPORTED_MODULE_1__.getAllUsers)();\n      this.setState({\n        userLists: response\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      /*#__PURE__*/\n      react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Hello\"), this.state.map(function (user) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, user.username);\n      }));\n    }\n  }]);\n\n  return AllUsers;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n//# sourceURL=webpack://challenge/./src/frontend/components/AllUsers/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44bac99aab0205fe5dda")
/******/ })();
/******/ 
/******/ }
);