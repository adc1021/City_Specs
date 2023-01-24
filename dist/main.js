/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_example__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handlErrors = err => {\n  let errors = [];\n  // debugger\n\n  err.array.forEach(element => {\n    errors.push(element);\n  });\n  return errors;\n};\nconst cityScores = async city => {\n  // debugger\n  await fetch(`https://api.teleport.org/api/urban_areas/slug%3A${city}/scores/`).then(response => {\n    if (response.ok) {\n      return response.json();\n    } else {\n      throw response;\n    }\n  }).then(data => {\n    debugger;\n  });\n};\nconsole.log(cityScores('portland-me'));\nconsole.log(cityScores('jacksonville'));\n\n// console.log(cityScores('chuckville'))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBRXhDLE1BQU1DLFdBQVcsR0FBSUMsR0FBRyxJQUFLO0VBQzNCLElBQUlDLE1BQU0sR0FBRyxFQUFFO0VBQ2Y7O0VBRUFELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLENBQUNDLE9BQU8sSUFBSTtJQUMzQkgsTUFBTSxDQUFDSSxJQUFJLENBQUNELE9BQU8sQ0FBQztFQUN0QixDQUFDLENBQUM7RUFFRixPQUFPSCxNQUFNO0FBQ2YsQ0FBQztBQUdELE1BQU1LLFVBQVUsR0FBRyxNQUFPQyxJQUFJLElBQUs7RUFDakM7RUFDQSxNQUFNQyxLQUFLLENBQUUsbURBQWtERCxJQUFLLFVBQVMsQ0FBQyxDQUM3RUUsSUFBSSxDQUFFQyxRQUFRLElBQUs7SUFDWixJQUFJQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNmLE9BQU9ELFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO0lBQ3hCLENBQUMsTUFBTTtNQUNMLE1BQU1GLFFBQVE7SUFDaEI7RUFDRixDQUFDLENBQUMsQ0FDUEQsSUFBSSxDQUFFSSxJQUFJLElBQUs7SUFDZDtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFREMsT0FBTyxDQUFDQyxHQUFHLENBQUNULFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUV0Q1EsT0FBTyxDQUFDQyxHQUFHLENBQUNULFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXR5X3NwZWNzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5cbmNvbnN0IGhhbmRsRXJyb3JzID0gKGVycikgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cbiAgLy8gZGVidWdnZXJcblxuICBlcnIuYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlcnJvcnMucHVzaChlbGVtZW50KVxuICB9KTtcblxuICByZXR1cm4gZXJyb3JzXG59XG5cblxuY29uc3QgY2l0eVNjb3JlcyA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIC8vIGRlYnVnZ2VyXG4gIGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50ZWxlcG9ydC5vcmcvYXBpL3VyYmFuX2FyZWFzL3NsdWclM0Eke2NpdHl9L3Njb3Jlcy9gKVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICBkZWJ1Z2dlclxuICB9KVxufVxuXG5jb25zb2xlLmxvZyhjaXR5U2NvcmVzKCdwb3J0bGFuZC1tZScpKVxuXG5jb25zb2xlLmxvZyhjaXR5U2NvcmVzKCdqYWNrc29udmlsbGUnKSlcblxuLy8gY29uc29sZS5sb2coY2l0eVNjb3JlcygnY2h1Y2t2aWxsZScpKVxuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJoYW5kbEVycm9ycyIsImVyciIsImVycm9ycyIsImFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJwdXNoIiwiY2l0eVNjb3JlcyIsImNpdHkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function() {

eval("// class Example {\n//   constructor(ele){\n//       this.ele = ele;\n//       this.ele.innerHTML = \"<h1>It's ALIVE!!!</h1>\"\n\n//       this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n//   }\n\n//   handleClick(){\n//       this.ele.children[0].innerText = \"Ouch!\";\n//   }\n// }\n\n// export default Example;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2l0eV9zcGVjcy8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGFzcyBFeGFtcGxlIHtcbi8vICAgY29uc3RydWN0b3IoZWxlKXtcbi8vICAgICAgIHRoaXMuZWxlID0gZWxlO1xuLy8gICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+SXQncyBBTElWRSEhITwvaDE+XCJcblxuLy8gICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4vLyAgIH1cblxuLy8gICBoYW5kbGVDbGljaygpe1xuLy8gICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoIVwiO1xuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXR5X3NwZWNzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;