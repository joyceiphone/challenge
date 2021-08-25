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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllUsers\": () => (/* binding */ getAllUsers),\n/* harmony export */   \"fetchAllItems\": () => (/* binding */ fetchAllItems),\n/* harmony export */   \"fetchListOfAges\": () => (/* binding */ fetchListOfAges)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar BASE_URL = \"http://localhost:3000\";\nvar getAllUsers = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(BASE_URL, \"/users\"));\n\n          case 3:\n            response = _context.sent;\n            return _context.abrupt(\"return\", response.data);\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function getAllUsers() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar fetchAllItems = function fetchAllItems() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"\".concat(port, \"/users/items\")).then(function (response) {\n    return response.data;\n  })[\"catch\"](function (err) {\n    return console.log(err.response);\n  });\n};\nvar fetchListOfAges = function fetchListOfAges(item) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"\".concat(port, \"/users/age\"), {\n    params: {\n      item: item\n    }\n  }).then(function (response) {\n    return response.data;\n  })[\"catch\"](function (err) {\n    return console.log(err.response);\n  });\n};\n\n//# sourceURL=webpack://challenge/./src/frontend/api.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dba936d6aee063d2d6e4")
/******/ })();
/******/ 
/******/ }
);