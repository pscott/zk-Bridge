"use strict";
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectZkSyncWallet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function buttonString(addr) {
    if (addr) {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    }
    return "Connect Metamask    ";
}
const test = async (setZkSyncAddress)=>{
    // Check if MetaMask is installed on user's browser
    if (!window.ethereum) {
        alert("Please install Metamask");
    }
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
    });
    const chainId = await window.ethereum.request({
        method: "eth_chainId"
    });
    // Check if user is connected to Mainnet
    if (chainId != "0x118") {
        alert("Plz switch to zkSync testnet (280)");
    } else {
        let wallet = accounts[0];
        setZkSyncAddress(wallet);
    }
};
function ConnectZkSyncWallet({ getZkSyncAddress , setZkSyncAddress  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: async ()=>test(setZkSyncAddress),
                children: buttonString(getZkSyncAddress)
            })
        })
    });
}


/***/ })

};
;