(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["books-add"],{

/***/ "./src/web/components/add/add.js":
/*!***************************************!*\
  !*** ./src/web/components/add/add.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import \"./add.css\";\nconst add = {\n    init() {\n        console.log(\"🍎init\");\n        xtag.create(\"x-add\", class extends XTagElement {\n            constructor() {\n                super();\n            }\n            '::template(true)'() {\n                return `<form>\n                <div class=\"form-group\">\n                  <label for=\"exampleInputPassword1\">书名</label>\n                  <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"请输入书名\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"exampleInputFile\">作者</label>\n                  <input class=\"form-control\" type=\"text\" id=\"exampleInputFile\" placeholder=\"请输入作者\">\n                </div>\n                <button  id=\"add-btn\" class=\"btn btn-default\">提交</button>\n              </form>`\n            }\n            'click::event'(e) {\n                if (e.target.id == \"add-btn\") {\n                    alert(\"请求添加新闻\")\n                }\n            }\n        });\n\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\n\n\n//# sourceURL=webpack:///./src/web/components/add/add.js?");

/***/ }),

/***/ "./src/web/views/books/books-add.entry.js":
/*!************************************************!*\
  !*** ./src/web/views/books/books-add.entry.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/add/add.js */ \"./src/web/components/add/add.js\");\n\n// import banner from '@/banner/banner.js';\n\n_add_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n// banner.init();\n\n\n//# sourceURL=webpack:///./src/web/views/books/books-add.entry.js?");

/***/ })

},[["./src/web/views/books/books-add.entry.js","runtime"]]]);