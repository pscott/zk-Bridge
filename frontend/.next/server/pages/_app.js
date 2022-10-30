(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,193,656];
exports.modules = {

/***/ 191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(526);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(653);
/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_starknet_react_core__WEBPACK_IMPORTED_MODULE_2__);



function App({ Component , pageProps  }) {
    const connectors = [
        new _starknet_react_core__WEBPACK_IMPORTED_MODULE_2__.InjectedConnector({
            options: {
                id: "argentX"
            }
        })
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_starknet_react_core__WEBPACK_IMPORTED_MODULE_2__.StarknetConfig, {
        connectors: connectors,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 526:
/***/ (() => {



/***/ }),

/***/ 653:
/***/ ((module) => {

"use strict";
module.exports = require("@starknet-react/core");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(191));
module.exports = __webpack_exports__;

})();