"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/page.jsx":
/*!********************************!*\
  !*** ./app/dashboard/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _public_assets_vendor_bootstrap_icons_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/assets/vendor/bootstrap-icons/bootstrap-icons.css */ \"(app-pages-browser)/./public/assets/vendor/bootstrap-icons/bootstrap-icons.css\");\n/* harmony import */ var _globals2_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals2.css */ \"(app-pages-browser)/./app/globals2.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./app/dashboard/style.css\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! phosphor-react */ \"(app-pages-browser)/./node_modules/phosphor-react/dist/icons/House.esm.js\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! phosphor-react */ \"(app-pages-browser)/./node_modules/phosphor-react/dist/index.esm.js\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ \"(app-pages-browser)/./node_modules/phosphor-react/dist/icons/SignOut.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [isSidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (!token) {\n            window.location.href = \"/login\"; // Redirección si no está logueado\n        }\n    }, []);\n    const logout = ()=>{\n        localStorage.removeItem(\"token\");\n        localStorage.removeItem(\"user\");\n        window.location.href = \"/login\";\n    };\n    const toggleSidebar = ()=>{\n        setSidebarOpen((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"dashboard \".concat(isSidebarOpen ? \"sidebar-open\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"sidebar \".concat(isSidebarOpen ? \"active\" : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            defaultActiveKey: \"/\",\n                            className: \"flex-column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/\",\n                                    className: \"textl hometext\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Inicio\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/analytics\",\n                                    className: \"textl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Plane, {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Paquetes\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/users\",\n                                    className: \"textl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Mensajes\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    onClick: logout,\n                                    className: \"textl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Cerrar Sesi\\xf3n\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"main-content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                bg: \"light\",\n                                className: \"navbar px-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleSidebar,\n                                    className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"btn btn-outline-primary d-lg-none\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"bi bi-list\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                fluid: true,\n                                className: \"py-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                        className: \"text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"text-primary fw-bold\",\n                                                children: \"Welcome to the Dashboard\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"text-muted\",\n                                                children: \"This is your admin panel.\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ba5bb7c48b30847e\",\n                children: '.dashboard.jsx-ba5bb7c48b30847e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-family:\"Noto Sans\",sans-serif}.sidebar.jsx-ba5bb7c48b30847e{width:250px;height:100vh;background-color:#f8f9fa;border-right:1px solid#dee2e6;position:fixed;top:0;left:0;-webkit-transition:-webkit-transform.3s ease-in-out;-moz-transition:-moz-transform.3s ease-in-out;-o-transition:-o-transform.3s ease-in-out;transition:-webkit-transform.3s ease-in-out;transition:-moz-transform.3s ease-in-out;transition:-o-transform.3s ease-in-out;transition:transform.3s ease-in-out;z-index:1030}.sidebar.active.jsx-ba5bb7c48b30847e{-webkit-transform:translatex(0);-moz-transform:translatex(0);-ms-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}.sidebar.jsx-ba5bb7c48b30847e:not(.active){-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-ms-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}.main-content.jsx-ba5bb7c48b30847e{margin-left:250px;width:-webkit-calc(100% - 250px);width:-moz-calc(100% - 250px);width:calc(100% - 250px);-webkit-transition:margin-left.3s ease-in-out;-moz-transition:margin-left.3s ease-in-out;-o-transition:margin-left.3s ease-in-out;transition:margin-left.3s ease-in-out}.sidebar-open.jsx-ba5bb7c48b30847e .main-content.jsx-ba5bb7c48b30847e{margin-left:250px}.navbar.jsx-ba5bb7c48b30847e{background:white;border-bottom:1px solid#dee2e6}@media(max-width:991px){.sidebar.jsx-ba5bb7c48b30847e{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-ms-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}.sidebar.active.jsx-ba5bb7c48b30847e{-webkit-transform:translatex(0);-moz-transform:translatex(0);-ms-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}.main-content.jsx-ba5bb7c48b30847e{margin-left:0;width:100%}}'\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"J91B9YP21Bk/47ooJc6ZxLtLXRw=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ2dCO0FBQ3JCO0FBQ3NCO0FBQzNDO0FBQ0o7QUFDb0M7QUFFekQsTUFBTVcsT0FBTzs7SUFDWCxNQUFNLENBQUNDLGVBQWVDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFFakRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQ0YsT0FBTztZQUNWRyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxVQUFVLGtDQUFrQztRQUNyRTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1DLFNBQVM7UUFDYkwsYUFBYU0sVUFBVSxDQUFDO1FBQ3hCTixhQUFhTSxVQUFVLENBQUM7UUFDeEJKLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQ3pCO0lBRUEsTUFBTUcsZ0JBQWdCO1FBQ3BCVCxlQUFlLENBQUNVLE9BQVMsQ0FBQ0E7SUFDNUI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDOzBEQUFlLGFBQWlELE9BQXBDWixnQkFBZ0IsaUJBQWlCOztrQ0FFNUQsOERBQUNZO2tFQUFlLFdBQXlDLE9BQTlCWixnQkFBZ0IsV0FBVztrQ0FDcEQsNEVBQUNOLDJHQUFHQTs0QkFBQ21CLGtCQUFpQjs0QkFBSUMsV0FBVTs7OENBQ2xDLDhEQUFDcEIsMkdBQUdBLENBQUNxQixJQUFJO29DQUFDUixNQUFLO29DQUFJTyxXQUFVOztzREFDN0IsOERBQUNsQixzREFBS0E7NENBQUNvQixNQUFNOzRDQUFJQyxRQUFPOzRDQUFPSCxXQUFVOzs7Ozs7d0NBQVM7Ozs7Ozs7OENBRWxELDhEQUFDcEIsMkdBQUdBLENBQUNxQixJQUFJO29DQUFDUixNQUFLO29DQUFhTyxXQUFVOztzREFDdEMsOERBQUNJOzRDQUFNRixNQUFNOzRDQUFJQyxRQUFPOzRDQUFPSCxXQUFVOzs7Ozs7d0NBQVM7Ozs7Ozs7OENBRWxELDhEQUFDcEIsMkdBQUdBLENBQUNxQixJQUFJO29DQUFDUixNQUFLO29DQUFTTyxXQUFVOztzREFDbEMsOERBQUNqQixtREFBT0E7NENBQUNtQixNQUFNOzRDQUFJQyxRQUFPOzRDQUFPSCxXQUFVOzs7Ozs7d0NBQVM7Ozs7Ozs7OENBRXBELDhEQUFDcEIsMkdBQUdBLENBQUNxQixJQUFJO29DQUFDSSxTQUFTWDtvQ0FBUU0sV0FBVTs7c0RBQ3JDLDhEQUFDaEIsdURBQU9BOzRDQUFDa0IsTUFBTTs0Q0FBSUMsUUFBTzs0Q0FBT0gsV0FBVTs7Ozs7O3dDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTXhELDhEQUFDRjtrRUFBYzs7MENBRWIsOERBQUNqQiw0R0FBTUE7Z0NBQUN5QixJQUFHO2dDQUFRTixXQUFVOzBDQUMzQiw0RUFBQ087b0NBRUNGLFNBQVNUOzhFQURDOzhDQUdWLDRFQUFDWTtrRkFBWTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FLakIsOERBQUMvQiw0R0FBU0E7Z0NBQUNnQyxLQUFLO2dDQUFDVCxXQUFVOzBDQUN6Qiw0RUFBQ3RCLDRHQUFHQTs4Q0FDRiw0RUFBQ0MsNEdBQUdBO3dDQUFDcUIsV0FBVTs7MERBQ2IsOERBQUNVOzBGQUFhOzBEQUF1Qjs7Ozs7OzBEQUNyQyw4REFBQ0M7MEZBQVk7MERBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RDFDO0dBbkhNMUI7S0FBQUE7QUFxSE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9wYWdlLmpzeD8zOGQ3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBOYXYsIE5hdmJhciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIkAvcHVibGljL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLWljb25zL2Jvb3RzdHJhcC1pY29ucy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vZ2xvYmFsczIuY3NzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IEhvdXNlLCBNZXNzYWdlLCBTaWduT3V0IH0gZnJvbSBcInBob3NwaG9yLXJlYWN0XCI7XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc1NpZGViYXJPcGVuLCBzZXRTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpblwiOyAvLyBSZWRpcmVjY2nDs24gc2kgbm8gZXN0w6EgbG9ndWVhZG9cclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcclxuICAgIHNldFNpZGViYXJPcGVuKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZGFzaGJvYXJkICR7aXNTaWRlYmFyT3BlbiA/IFwic2lkZWJhci1vcGVuXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIHsvKiBTaWRlYmFyICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZWJhciAke2lzU2lkZWJhck9wZW4gPyBcImFjdGl2ZVwiIDogXCJcIn1gfT5cclxuICAgICAgICAgIDxOYXYgZGVmYXVsdEFjdGl2ZUtleT1cIi9cIiBjbGFzc05hbWU9XCJmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0bCBob21ldGV4dFwiPlxyXG4gICAgICAgICAgICA8SG91c2Ugc2l6ZT17MjB9IHdlaWdodD1cImJvbGRcIiBjbGFzc05hbWU9XCJtZS0yXCIgLz4gSW5pY2lvXHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2FuYWx5dGljc1wiIGNsYXNzTmFtZT1cInRleHRsXCI+XHJcbiAgICAgICAgICAgIDxQbGFuZSBzaXplPXsyMH0gd2VpZ2h0PVwiYm9sZFwiIGNsYXNzTmFtZT1cIm1lLTJcIiAvPiBQYXF1ZXRlc1xyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi91c2Vyc1wiIGNsYXNzTmFtZT1cInRleHRsXCI+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlIHNpemU9ezIwfSB3ZWlnaHQ9XCJib2xkXCIgY2xhc3NOYW1lPVwibWUtMlwiIC8+IE1lbnNhamVzXHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT1cInRleHRsXCI+XHJcbiAgICAgICAgICAgIDxTaWduT3V0IHNpemU9ezIwfSB3ZWlnaHQ9XCJib2xkXCIgY2xhc3NOYW1lPVwibWUtMlwiIC8+IENlcnJhciBTZXNpw7NuXHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIE1haW4gQ29udGVudCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgey8qIFRvcGJhciAqL31cclxuICAgICAgICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGNsYXNzTmFtZT1cIm5hdmJhciBweC0zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBkLWxnLW5vbmVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1saXN0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTmF2YmFyPlxyXG5cclxuICAgICAgICAgIHsvKiBQYWdlIENvbnRlbnQgKi99XHJcbiAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cInB5LTRcIj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LWJvbGRcIj5XZWxjb21lIHRvIHRoZSBEYXNoYm9hcmQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlRoaXMgaXMgeW91ciBhZG1pbiBwYW5lbC48L3A+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5kYXNoYm9hcmQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaWRlYmFyOm5vdCguYWN0aXZlKSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2lkZWJhci1vcGVuIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgLnNpZGViYXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNpZGViYXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIk5hdiIsIk5hdmJhciIsIkhvdXNlIiwiTWVzc2FnZSIsIlNpZ25PdXQiLCJQYWdlIiwiaXNTaWRlYmFyT3BlbiIsInNldFNpZGViYXJPcGVuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsInRvZ2dsZVNpZGViYXIiLCJwcmV2IiwiZGl2IiwiZGVmYXVsdEFjdGl2ZUtleSIsImNsYXNzTmFtZSIsIkxpbmsiLCJzaXplIiwid2VpZ2h0IiwiUGxhbmUiLCJvbkNsaWNrIiwiYmciLCJidXR0b24iLCJpIiwiZmx1aWQiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.jsx\n"));

/***/ })

});