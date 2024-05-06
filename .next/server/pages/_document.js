"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.js":
/*!********************************!*\
  !*** ./src/pages/_document.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomDocument)\n/* harmony export */ });\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/document */ \"../../node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/next */ \"@mantine/next\");\n/* harmony import */ var _mantine_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"W:\\\\brainbox\\\\Flavorick Website Landing Page\\\\SuperProps - React Next Landing Page Templates\\\\Superprops\\\\Superprops\\\\packages\\\\landing\\\\src\\\\pages\\\\_document.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst stylesServer = (0,_mantine_next__WEBPACK_IMPORTED_MODULE_2__.createStylesServer)();\nclass CustomDocument extends (next_document__WEBPACK_IMPORTED_MODULE_0___default()) {\n  static async getInitialProps(ctx) {\n    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_1__.ServerStyleSheet();\n\n    try {\n      const originalRenderPage = ctx.renderPage;\n\n      ctx.renderPage = () => originalRenderPage({\n        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(App, _objectSpread({}, props), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 44\n        }, this))\n      });\n\n      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_0___default().getInitialProps(ctx);\n      return _objectSpread(_objectSpread({}, initialProps), {}, {\n        styles: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n          children: [initialProps.styles, sheet.getStyleElement()]\n        }, void 0, true)\n      });\n    } finally {\n      sheet.seal();\n    }\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {\n      lang: \"en\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"icon\",\n          href: \"/appicon.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mantine_next__WEBPACK_IMPORTED_MODULE_2__.ServerStyles, {\n          html: this.props.html,\n          server: stylesServer\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"body\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNUSxZQUFZLEdBQUdGLGlFQUFrQixFQUF2QztBQUVlLE1BQU1HLGNBQU4sU0FBNkJULHNEQUE3QixDQUFzQztFQUN2QixhQUFmVSxlQUFlLENBQUNDLEdBQUQsRUFBTTtJQUNoQyxNQUFNQyxLQUFLLEdBQUcsSUFBSVAsK0RBQUosRUFBZDs7SUFFQSxJQUFJO01BQ0YsTUFBTVEsa0JBQWtCLEdBQUdGLEdBQUcsQ0FBQ0csVUFBL0I7O01BQ0FILEdBQUcsQ0FBQ0csVUFBSixHQUFpQixNQUNmRCxrQkFBa0IsQ0FBQztRQUNqQkUsVUFBVSxFQUFHQyxHQUFELElBQ1RDLEtBQUQsSUFBV0wsS0FBSyxDQUFDTSxhQUFOLGVBQW9CLDhEQUFDLEdBQUQsb0JBQVNELEtBQVQ7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQUFwQjtNQUZJLENBQUQsQ0FEcEI7O01BTUEsTUFBTUUsWUFBWSxHQUFHLE1BQU1uQixvRUFBQSxDQUF5QlcsR0FBekIsQ0FBM0I7TUFDQSx1Q0FDS1EsWUFETDtRQUVFQyxNQUFNLGVBQ0o7VUFBQSxXQUNHRCxZQUFZLENBQUNDLE1BRGhCLEVBRUdSLEtBQUssQ0FBQ1MsZUFBTixFQUZIO1FBQUE7TUFISjtJQVNELENBbEJELFNBa0JVO01BQ1JULEtBQUssQ0FBQ1UsSUFBTjtJQUNEO0VBQ0Y7O0VBRURDLE1BQU0sR0FBRztJQUNQLG9CQUNFLDhEQUFDLCtDQUFEO01BQU0sSUFBSSxFQUFDLElBQVg7TUFBQSx3QkFDRSw4REFBQywrQ0FBRDtRQUFBLHdCQUNFO1VBQU0sR0FBRyxFQUFDLE1BQVY7VUFBaUIsSUFBSSxFQUFDO1FBQXRCO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFERixlQUlFLDhEQUFDLHVEQUFEO1VBQWMsSUFBSSxFQUFFLEtBQUtOLEtBQUwsQ0FBV08sSUFBL0I7VUFBcUMsTUFBTSxFQUFFaEI7UUFBN0M7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQUpGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBUUU7UUFBQSx3QkFDRSw4REFBQywrQ0FBRDtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREYsZUFFRSw4REFBQyxxREFBRDtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBRkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBUkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREY7RUFlRDs7QUEzQ2tEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN1cGVycHJvcHMvbmV4dC8uL3NyYy9wYWdlcy9fZG9jdW1lbnQuanM/YzUwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xyXG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXNTZXJ2ZXIsIFNlcnZlclN0eWxlcyB9IGZyb20gXCJAbWFudGluZS9uZXh0XCI7XHJcblxyXG5jb25zdCBzdHlsZXNTZXJ2ZXIgPSBjcmVhdGVTdHlsZXNTZXJ2ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XHJcbiAgICAgIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cclxuICAgICAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xyXG4gICAgICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT5cclxuICAgICAgICAgICAgKHByb3BzKSA9PiBzaGVldC5jb2xsZWN0U3R5bGVzKDxBcHAgey4uLnByb3BzfSAvPiksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5pbml0aWFsUHJvcHMsXHJcbiAgICAgICAgc3R5bGVzOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW5pdGlhbFByb3BzLnN0eWxlc31cclxuICAgICAgICAgICAge3NoZWV0LmdldFN0eWxlRWxlbWVudCgpfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNoZWV0LnNlYWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvYXBwaWNvbi5wbmdcIiAvPlxyXG4gICAgICAgICAgey8qIE5leHQgYW5kIFN0eWxlZCBjb21wb25lbnRzIFNTUiBzdHlsZXMgKi99XHJcbiAgICAgICAgICB7LyogTWFudGluZSBTU1Igc3R5bGVzICovfVxyXG4gICAgICAgICAgPFNlcnZlclN0eWxlcyBodG1sPXt0aGlzLnByb3BzLmh0bWx9IHNlcnZlcj17c3R5bGVzU2VydmVyfSAvPlxyXG4gICAgICAgICAgey8qIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zbXRwanMuY29tL3YzL3NtdHAuanNcIj48L3NjcmlwdD4gKi99XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICA8L0h0bWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiU2VydmVyU3R5bGVTaGVldCIsImNyZWF0ZVN0eWxlc1NlcnZlciIsIlNlcnZlclN0eWxlcyIsInN0eWxlc1NlcnZlciIsIkN1c3RvbURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2hlZXQiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiY29sbGVjdFN0eWxlcyIsImluaXRpYWxQcm9wcyIsInN0eWxlcyIsImdldFN0eWxlRWxlbWVudCIsInNlYWwiLCJyZW5kZXIiLCJodG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_document.js\n");

/***/ }),

/***/ "@mantine/next":
/*!********************************!*\
  !*** external "@mantine/next" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mantine/next");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./src/pages/_document.js")));
module.exports = __webpack_exports__;

})();