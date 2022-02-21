/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/data/data.csv":
/*!******************************!*\
  !*** ./src/js/data/data.csv ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = [[\"to\",\"from\",\"heading\",\"body\"],[\"Mary\",\"John\",\"Reminder\",\"Call Cindy on Tuesday\"],[\"Zoe\",\"Bill\",\"Reminder\",\"Buy orange juice\"],[\"Autumn\",\"Lindsey\",\"Letter\",\"I miss you\"]]\n\n//# sourceURL=webpack://starter-app/./src/js/data/data.csv?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_img_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/img.png */ \"./src/img/img.png\");\n/* harmony import */ var _data_data_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/data.csv */ \"./src/js/data/data.csv\");\n/* harmony import */ var _data_data_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_data_csv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_data_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/data.yaml */ \"./src/js/data/data.yaml\");\n/* harmony import */ var _data_data_json5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/data.json5 */ \"./src/js/data/data.json5\");\n/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print.js */ \"./src/js/print.js\");\n\n\n\n //swagger\n\n\n\n\nconsole.log(_data_data_yaml__WEBPACK_IMPORTED_MODULE_2__.title); // output `YAML Example`\nconsole.log(_data_data_yaml__WEBPACK_IMPORTED_MODULE_2__.owner.name); // output `Tom Preston-Werner`\n\nconsole.log(_data_data_json5__WEBPACK_IMPORTED_MODULE_3__.title); // output `JSON5 Example`\nconsole.log(_data_data_json5__WEBPACK_IMPORTED_MODULE_3__.owner.name); // output `Tom Preston-Werner`\n\nfunction component() {\n    const element = document.createElement('div');\n    const btn = document.createElement('button');\n\n    element.innerHTML = 'hi web';\n    element.classList.add('hello');\n\n    const myIcon = new Image();\n    myIcon.src = _img_img_png__WEBPACK_IMPORTED_MODULE_0__;\n  \n    element.appendChild(myIcon);\n\n    console.log((_data_data_csv__WEBPACK_IMPORTED_MODULE_1___default()));\n\n    btn.innerHTML = 'Click me and check the console!';\n  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\n  element.appendChild(btn);\n\n\n    return element;\n  }\n  \n  document.body.appendChild(component());\n\n//# sourceURL=webpack://starter-app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ printMe)\n/* harmony export */ });\nfunction printMe() {\n    console.log('I get called from print.js!');\n  }\n\n//# sourceURL=webpack://starter-app/./src/js/print.js?");

/***/ }),

/***/ "./src/img/img.png":
/*!*************************!*\
  !*** ./src/img/img.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d9329cb95d247e02f3d8.png\";\n\n//# sourceURL=webpack://starter-app/./src/img/img.png?");

/***/ }),

/***/ "./src/js/data/data.json5":
/*!********************************!*\
  !*** ./src/js/data/data.json5 ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"JSON5 Example\",\"owner\":{\"name\":\"Tom Preston-Werner\",\"organization\":\"GitHub\",\"bio\":\"GitHub Cofounder & CEO\\\\nLikes tater tots and beer.\",\"dob\":\"1979-05-27T07:32:00.000Z\"}}');\n\n//# sourceURL=webpack://starter-app/./src/js/data/data.json5?");

/***/ }),

/***/ "./src/js/data/data.yaml":
/*!*******************************!*\
  !*** ./src/js/data/data.yaml ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"YAML Example\",\"owner\":{\"name\":\"Tom Preston-Werner\",\"organization\":\"GitHub\",\"bio\":\"GitHub Cofounder & CEO\\\\nLikes tater tots and beer.\",\"dob\":\"1979-05-27T07:32:00.000Z\"}}');\n\n//# sourceURL=webpack://starter-app/./src/js/data/data.yaml?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;