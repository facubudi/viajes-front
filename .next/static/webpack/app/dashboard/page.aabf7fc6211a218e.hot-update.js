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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _public_assets_vendor_bootstrap_icons_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/assets/vendor/bootstrap-icons/bootstrap-icons.css */ \"(app-pages-browser)/./public/assets/vendor/bootstrap-icons/bootstrap-icons.css\");\n/* harmony import */ var _globals2_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals2.css */ \"(app-pages-browser)/./app/globals2.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./app/dashboard/style.css\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! phosphor-react */ \"(app-pages-browser)/./node_modules/phosphor-react/dist/icons/House.esm.js\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! phosphor-react */ \"(app-pages-browser)/./node_modules/phosphor-react/dist/icons/Airplane.esm.js\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ \"(app-pages-browser)/./node_modules/phosphor-react/dist/icons/ChatText.esm.js\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! phosphor-react */ \"(app-pages-browser)/./node_modules/phosphor-react/dist/icons/SignOut.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [isSidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (!token) {\n            window.location.href = \"/login\"; // Redirección si no está logueado\n        }\n    }, []);\n    const logout = ()=>{\n        localStorage.removeItem(\"token\");\n        localStorage.removeItem(\"user\");\n        window.location.href = \"/login\";\n    };\n    const toggleSidebar = ()=>{\n        setSidebarOpen((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"dashboard \".concat(isSidebarOpen ? \"sidebar-open\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"sidebar \".concat(isSidebarOpen ? \"active\" : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            defaultActiveKey: \"/\",\n                            className: \"flex-column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/\",\n                                    className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"logo\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"assets/images/logo.png\",\n                                        alt: \"\",\n                                        className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"img-fluid logodashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 40\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                    style: {\n                                        border: \"none\",\n                                        borderTop: \"1px solid rgb(184, 187, 191)\",\n                                        marginTop: \"30px !important\"\n                                    },\n                                    className: \"jsx-ba5bb7c48b30847e\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/\",\n                                    className: \"textl hometext\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Inicio\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/dashboard\",\n                                    className: \"textl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Paquetes\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/messages\",\n                                    className: \"textl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Mensajes\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    onClick: logout,\n                                    className: \"textl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Cerrar Sesi\\xf3n\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"main-content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                bg: \"light\",\n                                className: \"navbar px-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleSidebar,\n                                    className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"btn btn-outline-primary d-lg-none\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"bi bi-list\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                fluid: true,\n                                className: \"py-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                        className: \"text-center\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ba5bb7c48b30847e\",\n                children: '.dashboard.jsx-ba5bb7c48b30847e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-family:\"Noto Sans\",sans-serif}.sidebar.jsx-ba5bb7c48b30847e{width:250px;height:100vh;background-color:#f8f9fa;border-right:1px solid#dee2e6;position:fixed;top:0;left:0;-webkit-transition:-webkit-transform.3s ease-in-out;-moz-transition:-moz-transform.3s ease-in-out;-o-transition:-o-transform.3s ease-in-out;transition:-webkit-transform.3s ease-in-out;transition:-moz-transform.3s ease-in-out;transition:-o-transform.3s ease-in-out;transition:transform.3s ease-in-out;z-index:1030}.sidebar.active.jsx-ba5bb7c48b30847e{-webkit-transform:translatex(0);-moz-transform:translatex(0);-ms-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}.sidebar.jsx-ba5bb7c48b30847e:not(.active){-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-ms-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}.main-content.jsx-ba5bb7c48b30847e{margin-left:250px;width:-webkit-calc(100% - 250px);width:-moz-calc(100% - 250px);width:calc(100% - 250px);-webkit-transition:margin-left.3s ease-in-out;-moz-transition:margin-left.3s ease-in-out;-o-transition:margin-left.3s ease-in-out;transition:margin-left.3s ease-in-out}.sidebar-open.jsx-ba5bb7c48b30847e .main-content.jsx-ba5bb7c48b30847e{margin-left:250px}.navbar.jsx-ba5bb7c48b30847e{background:white;border-bottom:1px solid#dee2e6}@media(max-width:991px){.sidebar.jsx-ba5bb7c48b30847e{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-ms-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}.sidebar.active.jsx-ba5bb7c48b30847e{-webkit-transform:translatex(0);-moz-transform:translatex(0);-ms-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}.main-content.jsx-ba5bb7c48b30847e{margin-left:0;width:100%}}'\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"J91B9YP21Bk/47ooJc6ZxLtLXRw=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNnQjtBQUNyQjtBQUNzQjtBQUMzQztBQUNKO0FBQytDO0FBRXBFLE1BQU1ZLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxlQUFlQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBRWpERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUNGLE9BQU87WUFDVkcsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsVUFBVSxrQ0FBa0M7UUFDckU7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQyxTQUFTO1FBQ2JMLGFBQWFNLFVBQVUsQ0FBQztRQUN4Qk4sYUFBYU0sVUFBVSxDQUFDO1FBQ3hCSixPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUN6QjtJQUVBLE1BQU1HLGdCQUFnQjtRQUNwQlQsZUFBZSxDQUFDVSxPQUFTLENBQUNBO0lBQzVCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQzswREFBZSxhQUFpRCxPQUFwQ1osZ0JBQWdCLGlCQUFpQjs7a0NBRTVELDhEQUFDWTtrRUFBZSxXQUF5QyxPQUE5QlosZ0JBQWdCLFdBQVc7a0NBQ3BELDRFQUFDUCwyR0FBR0E7NEJBQUNvQixrQkFBaUI7NEJBQUlDLFdBQVU7OzhDQUNwQyw4REFBQ0M7b0NBQUVSLE1BQUs7OEVBQWM7OENBQU8sNEVBQUNTO3dDQUFJQyxLQUFJO3dDQUF5QkMsS0FBSTtrRkFBYTs7Ozs7Ozs7Ozs7OENBQ2hGLDhEQUFDQztvQ0FBR0MsT0FBTzt3Q0FDVEMsUUFBUTt3Q0FDUkMsV0FBVzt3Q0FDWEMsV0FBVztvQ0FDYjs7Ozs7Ozs4Q0FDRSw4REFBQzlCLDJHQUFHQSxDQUFDK0IsSUFBSTtvQ0FBQ2pCLE1BQUs7b0NBQUlPLFdBQVU7O3NEQUM3Qiw4REFBQ25CLHNEQUFLQTs0Q0FBQzhCLE1BQU07NENBQUlDLFFBQU87NENBQU9aLFdBQVU7Ozs7Ozt3Q0FBUzs7Ozs7Ozs4Q0FFbEQsOERBQUNyQiwyR0FBR0EsQ0FBQytCLElBQUk7b0NBQUNqQixNQUFLO29DQUFhTyxXQUFVOztzREFDdEMsOERBQUNqQixzREFBUUE7NENBQUM0QixNQUFNOzRDQUFJQyxRQUFPOzRDQUFPWixXQUFVOzs7Ozs7d0NBQVM7Ozs7Ozs7OENBRXJELDhEQUFDckIsMkdBQUdBLENBQUMrQixJQUFJO29DQUFDakIsTUFBSztvQ0FBWU8sV0FBVTs7c0RBQ3JDLDhEQUFDbEIsdURBQVFBOzRDQUFDNkIsTUFBTTs0Q0FBSUMsUUFBTzs0Q0FBT1osV0FBVTs7Ozs7O3dDQUFTOzs7Ozs7OzhDQUVyRCw4REFBQ3JCLDJHQUFHQSxDQUFDK0IsSUFBSTtvQ0FBQ0csU0FBU25CO29DQUFRTSxXQUFVOztzREFDckMsOERBQUNoQix1REFBT0E7NENBQUMyQixNQUFNOzRDQUFJQyxRQUFPOzRDQUFPWixXQUFVOzs7Ozs7d0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNeEQsOERBQUNGO2tFQUFjOzswQ0FFYiw4REFBQ2xCLDRHQUFNQTtnQ0FBQ2tDLElBQUc7Z0NBQVFkLFdBQVU7MENBQzNCLDRFQUFDZTtvQ0FFQ0YsU0FBU2pCOzhFQURDOzhDQUdWLDRFQUFDb0I7a0ZBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7MENBS2pCLDhEQUFDeEMsNEdBQVNBO2dDQUFDeUMsS0FBSztnQ0FBQ2pCLFdBQVU7MENBQ3pCLDRFQUFDdkIsNEdBQUdBOzhDQUNGLDRFQUFDQyw0R0FBR0E7d0NBQUNzQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUQ3QjtHQXZITWY7S0FBQUE7QUF5SE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9wYWdlLmpzeD8zOGQ3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBOYXYsIE5hdmJhciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIkAvcHVibGljL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLWljb25zL2Jvb3RzdHJhcC1pY29ucy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vZ2xvYmFsczIuY3NzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IEhvdXNlLCBDaGF0VGV4dCwgQWlycGxhbmUsIFNpZ25PdXQgfSBmcm9tIFwicGhvc3Bob3ItcmVhY3RcIjtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzU2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luXCI7IC8vIFJlZGlyZWNjacOzbiBzaSBubyBlc3TDoSBsb2d1ZWFkb1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZWJhck9wZW4oKHByZXYpID0+ICFwcmV2KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BkYXNoYm9hcmQgJHtpc1NpZGViYXJPcGVuID8gXCJzaWRlYmFyLW9wZW5cIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgey8qIFNpZGViYXIgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyICR7aXNTaWRlYmFyT3BlbiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgPE5hdiBkZWZhdWx0QWN0aXZlS2V5PVwiL1wiIGNsYXNzTmFtZT1cImZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxvZ29cIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgbG9nb2Rhc2hib2FyZFwiLz48L2E+XHJcbiAgICAgICAgICA8aHIgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCByZ2IoMTg0LCAxODcsIDE5MSlcIixcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjMwcHggIWltcG9ydGFudFwiXHJcbiAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0bCBob21ldGV4dFwiPlxyXG4gICAgICAgICAgICA8SG91c2Ugc2l6ZT17MjB9IHdlaWdodD1cImJvbGRcIiBjbGFzc05hbWU9XCJtZS0yXCIgLz4gSW5pY2lvXHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2Rhc2hib2FyZFwiIGNsYXNzTmFtZT1cInRleHRsXCI+XHJcbiAgICAgICAgICAgIDxBaXJwbGFuZSBzaXplPXsyMH0gd2VpZ2h0PVwiYm9sZFwiIGNsYXNzTmFtZT1cIm1lLTJcIiAvPiBQYXF1ZXRlc1xyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9tZXNzYWdlc1wiIGNsYXNzTmFtZT1cInRleHRsXCI+XHJcbiAgICAgICAgICAgIDxDaGF0VGV4dCBzaXplPXsyMH0gd2VpZ2h0PVwiYm9sZFwiIGNsYXNzTmFtZT1cIm1lLTJcIiAvPiBNZW5zYWplc1xyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJ0ZXh0bFwiPlxyXG4gICAgICAgICAgICA8U2lnbk91dCBzaXplPXsyMH0gd2VpZ2h0PVwiYm9sZFwiIGNsYXNzTmFtZT1cIm1lLTJcIiAvPiBDZXJyYXIgU2VzacOzblxyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBNYWluIENvbnRlbnQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgIHsvKiBUb3BiYXIgKi99XHJcbiAgICAgICAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBjbGFzc05hbWU9XCJuYXZiYXIgcHgtM1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZC1sZy1ub25lXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktbGlzdFwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L05hdmJhcj5cclxuXHJcbiAgICAgICAgICB7LyogUGFnZSBDb250ZW50ICovfVxyXG4gICAgICAgICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJweS00XCI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZGFzaGJvYXJkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2lkZWJhcjpub3QoLmFjdGl2ZSkge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNpZGViYXItb3BlbiAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJOYXYiLCJOYXZiYXIiLCJIb3VzZSIsIkNoYXRUZXh0IiwiQWlycGxhbmUiLCJTaWduT3V0IiwiUGFnZSIsImlzU2lkZWJhck9wZW4iLCJzZXRTaWRlYmFyT3BlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJ0b2dnbGVTaWRlYmFyIiwicHJldiIsImRpdiIsImRlZmF1bHRBY3RpdmVLZXkiLCJjbGFzc05hbWUiLCJhIiwiaW1nIiwic3JjIiwiYWx0IiwiaHIiLCJzdHlsZSIsImJvcmRlciIsImJvcmRlclRvcCIsIm1hcmdpblRvcCIsIkxpbmsiLCJzaXplIiwid2VpZ2h0Iiwib25DbGljayIsImJnIiwiYnV0dG9uIiwiaSIsImZsdWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.jsx\n"));

/***/ })

});