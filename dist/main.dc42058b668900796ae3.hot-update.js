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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllUsers\": () => (/* binding */ getAllUsers),\n/* harmony export */   \"fetchAllItems\": () => (/* binding */ fetchAllItems),\n/* harmony export */   \"fetchListOfAges\": () => (/* binding */ fetchListOfAges)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar port = \"http://localhost:3000\";\nvar config = {\n  headers: {\n    \"Content-Type\": \"application/json\",\n    \"Access-Control-Allow-Origin\": \"http://localhost:3030\",\n    \"Access-Control-Allow-Methods\": \"GET,PUT,POST,DELETE,PATCH,OPTIONS\"\n  }\n};\nvar getAllUsers = function getAllUsers() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"\".concat(port, \"/users\")).then(function (response) {\n    console.log(response.data);\n    return response.data;\n  })[\"catch\"](function (err) {\n    return console.log(err.response);\n  });\n};\nvar fetchAllItems = function fetchAllItems() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"\".concat(port, \"/users/items\")).then(function (response) {\n    return response.data;\n  })[\"catch\"](function (err) {\n    return console.log(err.response);\n  });\n};\nvar fetchListOfAges = function fetchListOfAges(item) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"\".concat(port, \"/users/age\"), {\n    params: {\n      item: item\n    }\n  }).then(function (response) {\n    return response.data;\n  })[\"catch\"](function (err) {\n    return console.log(err.response);\n  });\n};\n\n//# sourceURL=webpack://challenge/./src/frontend/api.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("868c491ed84d41183c83")
/******/ })();
/******/ 
/******/ }
);