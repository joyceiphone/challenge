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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"GET_USERS\": () => (/* binding */ GET_USERS),\n/* harmony export */   \"getAllUsers\": () => (/* binding */ getAllUsers)\n/* harmony export */ });\nvar BASE_URL = 'http://localhost:3000';\nvar GET_USERS = '/users';\nvar headers = {\n  'Content-Type': 'application/json',\n  'Access-Control-Allow-Origin': 'http://localhost:3030',\n  'Access-Control-Allow-Origin-Method': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'\n};\nvar getUsersParams = {\n  method: 'GET',\n  url: \"\".concat(BASE_URL).concat(GET_USERS),\n  headers: headers\n};\nvar getAllUsers = function getAllUsers() {\n  return fetch(getUsersParams).then(function (data) {\n    console.log(data);\n    return data;\n  });\n};\n\n//# sourceURL=webpack://challenge/./src/frontend/api.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a724d1759daf04bc2873")
/******/ })();
/******/ 
/******/ }
);