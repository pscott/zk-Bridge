"use strict";
exports.id = 344;
exports.ids = [344];
exports.modules = {

/***/ 344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Submit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(653);
/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__);


function Component(getAmount, getZkSyncAddress) {
    const { address  } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount)();
    const ethContractAddress = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
    const starknetContractAddress = "0x021ef10f3577727483c51c2fd833cce557b1aa85f2ed6cb58c491ae0d48bf401";
    const calls = [
        {
            contractAddress: ethContractAddress,
            entrypoint: "approve",
            calldata: [
                starknetContractAddress,
                Number(getAmount) * 1000000000000000000,
                0
            ]
        },
        {
            contractAddress: starknetContractAddress,
            entrypoint: "bridge_to",
            calldata: [
                Number(getAmount) * 1000000000000000000,
                0,
                getZkSyncAddress,
                getZkSyncAddress
            ]
        }
    ];
    const { execute , loading , error  } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useStarknetExecute)({
        calls
    });
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "Error, please retry"
            })
        });
    }
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                disabled: true,
                children: [
                    "Sending ",
                    getAmount,
                    " ETH to ",
                    getZkSyncAddress
                ]
            })
        });
    }
    if (!address) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: true,
                children: "Please connect ArgentX ser"
            })
        });
    }
    if (!getZkSyncAddress) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: true,
                children: "Please connect Metamask ser"
            })
        });
    }
    if (!getAmount) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: true,
                children: "Provide amount ser"
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: ()=>execute(),
                children: [
                    "Send ",
                    getAmount,
                    " ETH to ",
                    getZkSyncAddress
                ]
            })
        })
    });
}
function Submit({ getAmount , getZkSyncAddress  }) {
    return Component(getAmount, getZkSyncAddress);
}


/***/ })

};
;