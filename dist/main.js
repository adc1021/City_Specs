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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_example__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handlErrors = err => {\n  let errors = [];\n  // debugger\n\n  err.array.forEach(element => {\n    errors.push(element);\n  });\n  return errors;\n};\nconst cityScores = async city => {\n  // debugger\n  await fetch(`https://api.teleport.org/api/urban_areas/slug%3A${city}/scores/`).then(response => {\n    if (response.ok) {\n      return response.json();\n    } else {\n      throw response;\n    }\n  }).then(data => {\n    console.log(data);\n    const categories = data.categories;\n    console.log(categories);\n    return categories;\n  }).catch(errorResponse => console.error(errorResponse));\n};\n\n// cityScores('houston')\n\n// cityScores('jacksonville')\n\n// cityScores('new-york')\n\n// cityScores('los-angeles')\n\n// cityScores('richmond')\n\n// cityScores('charleston')\n// cityScores('atlanta')\n// cityScores('new-orleans')\n// cityScores('miami')\n// cityScores('boston')\n// cityScores('phoenix')\n// cityScores('albuquerque')\n// cityScores('seattle')\n// cityScores('portland-or')\n// cityScores('boise')\n// cityScores('chicago')\n// cityScores('memphis')\n// cityScores('louisville')\n// cityScores('san-diego')\n// cityScores('des-moines')\n// cityScores('omaha')\n// cityScores('st-louis')\n// cityScores('detroit')\n// cityScores('denver')\n// cityScores('denver')\n// cityScores('columbus')//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBRXhDLE1BQU1DLFdBQVcsR0FBSUMsR0FBRyxJQUFLO0VBQzNCLElBQUlDLE1BQU0sR0FBRyxFQUFFO0VBQ2Y7O0VBRUFELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLENBQUNDLE9BQU8sSUFBSTtJQUMzQkgsTUFBTSxDQUFDSSxJQUFJLENBQUNELE9BQU8sQ0FBQztFQUN0QixDQUFDLENBQUM7RUFFRixPQUFPSCxNQUFNO0FBQ2YsQ0FBQztBQUdELE1BQU1LLFVBQVUsR0FBRyxNQUFPQyxJQUFJLElBQUs7RUFDakM7RUFDQSxNQUFNQyxLQUFLLENBQUUsbURBQWtERCxJQUFLLFVBQVMsQ0FBQyxDQUM3RUUsSUFBSSxDQUFFQyxRQUFRLElBQUs7SUFDWixJQUFJQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNmLE9BQU9ELFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO0lBQ3hCLENBQUMsTUFBTTtNQUNMLE1BQU1GLFFBQVE7SUFDaEI7RUFDRixDQUFDLENBQUMsQ0FDUEQsSUFBSSxDQUFFSSxJQUFJLElBQUs7SUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztJQUNqQixNQUFNRyxVQUFVLEdBQUdILElBQUksQ0FBQ0csVUFBVTtJQUNsQ0YsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztJQUN2QixPQUFPQSxVQUFVO0VBQ25CLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUVDLGFBQWEsSUFBS0osT0FBTyxDQUFDSyxLQUFLLENBQUNELGFBQWEsQ0FBQyxDQUFDO0FBQ3pELENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2l0eV9zcGVjcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuXG5jb25zdCBoYW5kbEVycm9ycyA9IChlcnIpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIC8vIGRlYnVnZ2VyXG5cbiAgZXJyLmFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZXJyb3JzLnB1c2goZWxlbWVudClcbiAgfSk7XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5cbmNvbnN0IGNpdHlTY29yZXMgPSBhc3luYyAoY2l0eSkgPT4ge1xuICAvLyBkZWJ1Z2dlclxuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGVsZXBvcnQub3JnL2FwaS91cmJhbl9hcmVhcy9zbHVnJTNBJHtjaXR5fS9zY29yZXMvYClcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZGF0YS5jYXRlZ29yaWVzXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllcylcbiAgICByZXR1cm4gY2F0ZWdvcmllc1xuICB9KVxuICAuY2F0Y2goKGVycm9yUmVzcG9uc2UpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSkpXG59XG5cbi8vIGNpdHlTY29yZXMoJ2hvdXN0b24nKVxuXG4vLyBjaXR5U2NvcmVzKCdqYWNrc29udmlsbGUnKVxuXG4vLyBjaXR5U2NvcmVzKCduZXcteW9yaycpXG5cbi8vIGNpdHlTY29yZXMoJ2xvcy1hbmdlbGVzJylcblxuLy8gY2l0eVNjb3JlcygncmljaG1vbmQnKVxuXG4vLyBjaXR5U2NvcmVzKCdjaGFybGVzdG9uJylcbi8vIGNpdHlTY29yZXMoJ2F0bGFudGEnKVxuLy8gY2l0eVNjb3JlcygnbmV3LW9ybGVhbnMnKVxuLy8gY2l0eVNjb3JlcygnbWlhbWknKVxuLy8gY2l0eVNjb3JlcygnYm9zdG9uJylcbi8vIGNpdHlTY29yZXMoJ3Bob2VuaXgnKVxuLy8gY2l0eVNjb3JlcygnYWxidXF1ZXJxdWUnKVxuLy8gY2l0eVNjb3Jlcygnc2VhdHRsZScpXG4vLyBjaXR5U2NvcmVzKCdwb3J0bGFuZC1vcicpXG4vLyBjaXR5U2NvcmVzKCdib2lzZScpXG4vLyBjaXR5U2NvcmVzKCdjaGljYWdvJylcbi8vIGNpdHlTY29yZXMoJ21lbXBoaXMnKVxuLy8gY2l0eVNjb3JlcygnbG91aXN2aWxsZScpXG4vLyBjaXR5U2NvcmVzKCdzYW4tZGllZ28nKVxuLy8gY2l0eVNjb3JlcygnZGVzLW1vaW5lcycpXG4vLyBjaXR5U2NvcmVzKCdvbWFoYScpXG4vLyBjaXR5U2NvcmVzKCdzdC1sb3VpcycpXG4vLyBjaXR5U2NvcmVzKCdkZXRyb2l0Jylcbi8vIGNpdHlTY29yZXMoJ2RlbnZlcicpXG4vLyBjaXR5U2NvcmVzKCdkZW52ZXInKVxuLy8gY2l0eVNjb3JlcygnY29sdW1idXMnKVxuXG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImhhbmRsRXJyb3JzIiwiZXJyIiwiZXJyb3JzIiwiYXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJjaXR5U2NvcmVzIiwiY2l0eSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRlZ29yaWVzIiwiY2F0Y2giLCJlcnJvclJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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