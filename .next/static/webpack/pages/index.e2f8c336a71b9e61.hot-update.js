"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_sam_Desktop_00_getboarded_01_VideoWiki_14_solanaWalletAdap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_sam_Desktop_00_getboarded_01_VideoWiki_14_solanaWalletAdap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_sam_Desktop_00_getboarded_01_VideoWiki_14_solanaWalletAdap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"./node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\n\n/* ********************************************************** Use vue solana wallet adapter for these ********************************************************** */ \n\n/* ********************************************************** solana web3 js dependency ********************************************************** */ \nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection)().connection;\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)(), publicKey = ref.publicKey, sendTransaction = ref.sendTransaction;\n    function buy(e) {\n        return _buy.apply(this, arguments);\n    }\n    function _buy() {\n        _buy = /* ********************************************************** Metadata, myAddress and NFT Name must be passed as params ********************************************************** */ // let METADATA_URI = \"https://arweave.net/OZNYTG1Kh3b2p0RPpYCkchLiiAX_1po5PSvOCPSsu3s\";\n        // const myAddress = new PublicKey(\"GPaVkHjVRgDxzyqrK95RqcmEKRrfzwUnXGUwiDKq22vS\")\n        /* ********************************************************** Buy function using wallet ********************************************************** */ _asyncToGenerator(_home_sam_Desktop_00_getboarded_01_VideoWiki_14_solanaWalletAdap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var response, responseBody, error, transaction;\n            return _home_sam_Desktop_00_getboarded_01_VideoWiki_14_solanaWalletAdap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.next = 3;\n                        return fetch(\"/api/checkout\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                account: publicKey.toBase58()\n                            })\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        responseBody = _ctx.sent;\n                        if (!(\"error\" in responseBody)) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        error = responseBody.error;\n                        console.error(error);\n                        alert(\"Error fetching transaction: \".concat(error));\n                        return _ctx.abrupt(\"return\");\n                    case 12:\n                        transaction = _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Transaction.from(Buffer.from(responseBody.transaction, \"base64\"));\n                        _ctx.prev = 13;\n                        _ctx.next = 16;\n                        return sendTransaction(transaction, connection);\n                    case 16:\n                        alert(\"Purchase complete!\");\n                        _ctx.next = 23;\n                        break;\n                    case 19:\n                        _ctx.prev = 19;\n                        _ctx.t0 = _ctx[\"catch\"](13);\n                        console.error(_ctx.t0);\n                        alert(\"Error sending transaction: \".concat(_ctx.t0));\n                    case 23:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    13,\n                    19\n                ]\n            ]);\n        }));\n        return _buy.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"container flex flex-col gap-20 items-center p-4 mx-auto min-h-screen justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl\",\n                    children: \"Buy in your browser\"\n                }, void 0, false, {\n                    fileName: \"/home/sam/Desktop/00-getboarded/01-VideoWiki/14-solanaWalletAdap/pages/index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"basis-1/4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__.WalletMultiButton, {}, void 0, false, {\n                        fileName: \"/home/sam/Desktop/00-getboarded/01-VideoWiki/14-solanaWalletAdap/pages/index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/sam/Desktop/00-getboarded/01-VideoWiki/14-solanaWalletAdap/pages/index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"max-w-fit inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed\",\n                    disabled: !publicKey,\n                    onClick: buy,\n                    children: \"Buy now\"\n                }, void 0, false, {\n                    fileName: \"/home/sam/Desktop/00-getboarded/01-VideoWiki/14-solanaWalletAdap/pages/index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/sam/Desktop/00-getboarded/01-VideoWiki/14-solanaWalletAdap/pages/index.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/sam/Desktop/00-getboarded/01-VideoWiki/14-solanaWalletAdap/pages/index.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"nuT7ctT3oQyaLcmcqayfsnFPiOI=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUFtSyxrS0FFNUY7QUFDSjtBQVNuRSxFQUFxSixvSkFFN0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsUUFBUSxDQUFDSSxJQUFJLEdBQUcsQ0FBQzs7SUFDOUIsR0FBSyxDQUFHQyxVQUFVLEdBQUtMLDJFQUFhLEdBQTVCSyxVQUFVO0lBQ2xCLEdBQUssQ0FBa0NKLEdBQVcsR0FBWEEsdUVBQVMsSUFBeENLLFNBQVMsR0FBc0JMLEdBQVcsQ0FBMUNLLFNBQVMsRUFBRUMsZUFBZSxHQUFLTixHQUFXLENBQS9CTSxlQUFlO2FBU25CQyxHQUFHLENBQUNDLENBQW1CO2VBQXZCRCxJQUFHOzthQUFIQSxJQUFHO1FBQUhBLElBQUcsR0FQbEIsRUFBcUwsb0xBRXJMLEVBQXdGO1FBQ3hGLEVBQWtGO1FBRWxGLEVBQXFKLGtWQUVySixRQUFRLFNBQVdDLENBQW1CLEVBQUUsQ0FBQztnQkFRakNDLFFBQVEsRUFRUkMsWUFBWSxFQUtWQyxLQUFLLEVBU1BDLFdBQVc7Ozs7d0JBN0JqQkosQ0FBQyxDQUFDSyxjQUFjOzsrQkFPT0MsS0FBSyxDQUFDLENBQWUsZ0JBQUUsQ0FBQzs0QkFDN0NDLE1BQU0sRUFBRSxDQUFNOzRCQUNkQyxPQUFPLEVBQUUsQ0FBQztnQ0FBQyxDQUFjLGVBQUUsQ0FBa0I7NEJBQUMsQ0FBQzs0QkFDL0NDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztnQ0FBQ0MsT0FBTyxFQUFFZixTQUFTLENBQUNnQixRQUFROzRCQUFHLENBQUM7d0JBQ3hELENBQUM7O3dCQUpLWixRQUFROzsrQkFRY0EsUUFBUSxDQUFDYSxJQUFJOzt3QkFBbkNaLFlBQVk7OEJBSWQsQ0FBTyxVQUFJQSxZQUFZOzs7O3dCQUNuQkMsS0FBSyxHQUFHRCxZQUFZLENBQUNDLEtBQUs7d0JBQ2hDWSxPQUFPLENBQUNaLEtBQUssQ0FBQ0EsS0FBSzt3QkFDbkJhLEtBQUssQ0FBRSxDQUE0Qiw4QkFBUSxPQUFOYixLQUFLOzs7d0JBT3RDQyxXQUFXLEdBQUdWLDZEQUFnQixDQUNsQ3dCLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDZixZQUFZLENBQUNFLFdBQVcsRUFBRSxDQUFROzs7K0JBR3hDTixlQUFlLENBQUNNLFdBQVcsRUFBRVIsVUFBVTs7d0JBQzdDb0IsS0FBSyxDQUFDLENBQW9COzs7Ozs7d0JBRTFCRCxPQUFPLENBQUNaLEtBQUs7d0JBQ2JhLEtBQUssQ0FBRSxDQUEyQiw2QkFBUTs7Ozs7Ozs7Ozs7UUFFOUMsQ0FBQztlQXhDY2pCLElBQUc7O0lBMENsQixNQUFNLDZFQUNIb0IsQ0FBSTtRQUFDQyxTQUFTLEVBQUMsQ0FBcUY7OEZBQ2xHQyxDQUFHO1lBQUNELFNBQVMsRUFBQyxDQUFxQjs7NEZBQ2pDRSxDQUFFO29CQUFDRixTQUFTLEVBQUMsQ0FBVTs4QkFBQyxDQUFtQjs7Ozs7OzRGQUMzQ0MsQ0FBRztvQkFBQ0QsU0FBUyxFQUFDLENBQVc7MEdBRXZCM0IsOEVBQWlCOzs7Ozs7Ozs7OzRGQUduQjhCLENBQU07b0JBQ0xDLElBQUksRUFBQyxDQUFRO29CQUNiSixTQUFTLEVBQUMsQ0FBZ047b0JBQzFOSyxRQUFRLEdBQUc1QixTQUFTO29CQUNwQjZCLE9BQU8sRUFBRTNCLEdBQUc7OEJBQ2IsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBekV1QkosSUFBSTs7UUFDSEosdUVBQWE7UUFDR0MsbUVBQVM7OztLQUYxQkcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFVzZSB2dWUgc29sYW5hIHdhbGxldCBhZGFwdGVyIGZvciB0aGVzZSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovIFxuXG5pbXBvcnQgeyB1c2VDb25uZWN0aW9uLCB1c2VXYWxsZXQgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xuaW1wb3J0IHsgV2FsbGV0TXVsdGlCdXR0b24gfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aVwiO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIGZyb20gQVBJIFJvdXRlICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuaW1wb3J0IHtcbiAgUG9zdFJlc3BvbnNlIGFzIENoZWNrb3V0UG9zdFJlc3BvbnNlLFxuICBQb3N0RXJyb3IgYXMgQ2hlY2tvdXRQb3N0RXJyb3IsXG59IGZyb20gXCIuL2FwaS9jaGVja291dFwiO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIHNvbGFuYSB3ZWIzIGpzIGRlcGVuZGVuY3kgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5pbXBvcnQgeyBQdWJsaWNLZXksIFRyYW5zYWN0aW9uIH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgY29uc3QgeyBwdWJsaWNLZXksIHNlbmRUcmFuc2FjdGlvbiB9ID0gdXNlV2FsbGV0KCk7XG5cbiAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBNZXRhZGF0YSwgbXlBZGRyZXNzIGFuZCBORlQgTmFtZSBtdXN0IGJlIHBhc3NlZCBhcyBwYXJhbXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4gIC8vIGxldCBNRVRBREFUQV9VUkkgPSBcImh0dHBzOi8vYXJ3ZWF2ZS5uZXQvT1pOWVRHMUtoM2IycDBSUHBZQ2tjaExpaUFYXzFwbzVQU3ZPQ1BTc3Uzc1wiO1xuICAvLyBjb25zdCBteUFkZHJlc3MgPSBuZXcgUHVibGljS2V5KFwiR1BhVmtIalZSZ0R4enlxcks5NVJxY21FS1JyZnp3VW5YR1V3aURLcTIydlNcIilcblxuICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEJ1eSBmdW5jdGlvbiB1c2luZyB3YWxsZXQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGJ1eShlOiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogY2FsbCB0byBBUEkgUm91dGUgYW5kIHBhc3MgcGFyYW1zICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuICAgIC8vIEZldGNoIHRoZSB0cmFuc2FjdGlvbiBmcm9tIG91ciBjaGVja291dCBBUElcbiAgICAvLyBXZSBwYXNzIHRoZSBjb25uZWN0ZWQgd2FsbGV0IGFzIGBhY2NvdW50YFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NoZWNrb3V0XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFjY291bnQ6IHB1YmxpY0tleS50b0Jhc2U1OCgpIH0pLFxuICAgIH0pO1xuXG4gICAgLyogVG8gcHJpbnQgcHVibGljIGtleSB1c2UgcHVibGlja2V5LnRvQmFzZTU4KCkgKi9cblxuICAgIGNvbnN0IHJlc3BvbnNlQm9keSA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzXG4gICAgICB8IENoZWNrb3V0UG9zdFJlc3BvbnNlXG4gICAgICB8IENoZWNrb3V0UG9zdEVycm9yO1xuXG4gICAgaWYgKFwiZXJyb3JcIiBpbiByZXNwb25zZUJvZHkpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gcmVzcG9uc2VCb2R5LmVycm9yO1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBhbGVydChgRXJyb3IgZmV0Y2hpbmcgdHJhbnNhY3Rpb246ICR7ZXJyb3J9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogVHJhbnNhY3Rpb24gdXNpbmcgd2FsbGV0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi8gIFxuXG4gICAgLy8gV2UgcmVjZWl2ZSB0aGUgdHJhbnNhY3Rpb24gc2VyaWFsaXplZCB0byBiYXNlNjQsIGRlc2VyaWFsaXplIGl0IHRvIHNlbmRcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IFRyYW5zYWN0aW9uLmZyb20oXG4gICAgICBCdWZmZXIuZnJvbShyZXNwb25zZUJvZHkudHJhbnNhY3Rpb24sIFwiYmFzZTY0XCIpXG4gICAgKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBjb25uZWN0aW9uKTtcbiAgICAgIGFsZXJ0KFwiUHVyY2hhc2UgY29tcGxldGUhXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIGFsZXJ0KGBFcnJvciBzZW5kaW5nIHRyYW5zYWN0aW9uOiAke2Vycm9yfWApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgZ2FwLTIwIGl0ZW1zLWNlbnRlciBwLTQgbXgtYXV0byBtaW4taC1zY3JlZW4ganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtOFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5CdXkgaW4geW91ciBicm93c2VyPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpcy0xLzRcIj5cbiAgICAgICAgey8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29ubmVjdCB3YWxsZXQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL31cbiAgICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEJ1eSBidXR0b24gdG8gY2FsbCBidXkgZnVuY3Rpb24gb25DbGljayAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctZml0IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctaW5kaWdvLTYwMCBweC02IHB5LTMgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLWluZGlnby03MDAgZGlzYWJsZWQ6b3BhY2l0eS01MCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWRcIlxuICAgICAgICAgIGRpc2FibGVkPXshcHVibGljS2V5fVxuICAgICAgICAgIG9uQ2xpY2s9e2J1eX1cbiAgICAgICAgPlxuICAgICAgICAgIEJ1eSBub3dcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29ubmVjdGlvbiIsInVzZVdhbGxldCIsIldhbGxldE11bHRpQnV0dG9uIiwiVHJhbnNhY3Rpb24iLCJIb21lIiwiY29ubmVjdGlvbiIsInB1YmxpY0tleSIsInNlbmRUcmFuc2FjdGlvbiIsImJ1eSIsImUiLCJyZXNwb25zZSIsInJlc3BvbnNlQm9keSIsImVycm9yIiwidHJhbnNhY3Rpb24iLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWNjb3VudCIsInRvQmFzZTU4IiwianNvbiIsImNvbnNvbGUiLCJhbGVydCIsImZyb20iLCJCdWZmZXIiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJidXR0b24iLCJ0eXBlIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});