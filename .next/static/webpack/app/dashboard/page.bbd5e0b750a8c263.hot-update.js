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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Nav,Navbar,Row!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _public_assets_vendor_bootstrap_icons_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/assets/vendor/bootstrap-icons/bootstrap-icons.css */ \"(app-pages-browser)/./public/assets/vendor/bootstrap-icons/bootstrap-icons.css\");\n/* harmony import */ var _globals2_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals2.css */ \"(app-pages-browser)/./app/globals2.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./app/dashboard/style.css\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! phosphor-react */ \"(app-pages-browser)/./node_modules/phosphor-react/dist/icons/House.esm.js\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! phosphor-react */ \"(app-pages-browser)/./node_modules/phosphor-react/dist/icons/Airplane.esm.js\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! phosphor-react */ \"(app-pages-browser)/./node_modules/phosphor-react/dist/icons/ChatText.esm.js\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! phosphor-react */ \"(app-pages-browser)/./node_modules/phosphor-react/dist/icons/SignOut.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [isSidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (!token) {\n            window.location.href = \"/login\"; // Redirección si no está logueado\n        }\n    }, []);\n    const logout = ()=>{\n        localStorage.removeItem(\"token\");\n        localStorage.removeItem(\"user\");\n        window.location.href = \"/login\";\n    };\n    const toggleSidebar = ()=>{\n        setSidebarOpen((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"dashboard \".concat(isSidebarOpen ? \"sidebar-open\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"sidebar \".concat(isSidebarOpen ? \"active\" : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            defaultActiveKey: \"/\",\n                            className: \"flex-column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/\",\n                                    className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"logo\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"assets/images/logo.png\",\n                                        alt: \"\",\n                                        className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"img-fluid logodashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 40\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 11\n                                }, undefined),\n                                \"h\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/\",\n                                    className: \"textl hometext\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Inicio\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/dashboard\",\n                                    className: \"textl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Paquetes\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/messages\",\n                                    className: \"textl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Mensajes\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    onClick: logout,\n                                    className: \"textl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            size: 20,\n                                            weight: \"bold\",\n                                            className: \"me-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        \" Cerrar Sesi\\xf3n\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"main-content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                bg: \"light\",\n                                className: \"navbar px-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleSidebar,\n                                    className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"btn btn-outline-primary d-lg-none\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"jsx-ba5bb7c48b30847e\" + \" \" + \"bi bi-list\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                fluid: true,\n                                className: \"py-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Nav_Navbar_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                        className: \"text-center\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Damian\\\\Desktop\\\\viajes\\\\app\\\\dashboard\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ba5bb7c48b30847e\",\n                children: '.dashboard.jsx-ba5bb7c48b30847e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-family:\"Noto Sans\",sans-serif}.sidebar.jsx-ba5bb7c48b30847e{width:250px;height:100vh;background-color:#f8f9fa;border-right:1px solid#dee2e6;position:fixed;top:0;left:0;-webkit-transition:-webkit-transform.3s ease-in-out;-moz-transition:-moz-transform.3s ease-in-out;-o-transition:-o-transform.3s ease-in-out;transition:-webkit-transform.3s ease-in-out;transition:-moz-transform.3s ease-in-out;transition:-o-transform.3s ease-in-out;transition:transform.3s ease-in-out;z-index:1030}.sidebar.active.jsx-ba5bb7c48b30847e{-webkit-transform:translatex(0);-moz-transform:translatex(0);-ms-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}.sidebar.jsx-ba5bb7c48b30847e:not(.active){-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-ms-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}.main-content.jsx-ba5bb7c48b30847e{margin-left:250px;width:-webkit-calc(100% - 250px);width:-moz-calc(100% - 250px);width:calc(100% - 250px);-webkit-transition:margin-left.3s ease-in-out;-moz-transition:margin-left.3s ease-in-out;-o-transition:margin-left.3s ease-in-out;transition:margin-left.3s ease-in-out}.sidebar-open.jsx-ba5bb7c48b30847e .main-content.jsx-ba5bb7c48b30847e{margin-left:250px}.navbar.jsx-ba5bb7c48b30847e{background:white;border-bottom:1px solid#dee2e6}@media(max-width:991px){.sidebar.jsx-ba5bb7c48b30847e{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-ms-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}.sidebar.active.jsx-ba5bb7c48b30847e{-webkit-transform:translatex(0);-moz-transform:translatex(0);-ms-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}.main-content.jsx-ba5bb7c48b30847e{margin-left:0;width:100%}}'\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"J91B9YP21Bk/47ooJc6ZxLtLXRw=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNnQjtBQUNyQjtBQUNzQjtBQUMzQztBQUNKO0FBQytDO0FBRXBFLE1BQU1ZLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxlQUFlQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBRWpERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUNGLE9BQU87WUFDVkcsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsVUFBVSxrQ0FBa0M7UUFDckU7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQyxTQUFTO1FBQ2JMLGFBQWFNLFVBQVUsQ0FBQztRQUN4Qk4sYUFBYU0sVUFBVSxDQUFDO1FBQ3hCSixPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUN6QjtJQUVBLE1BQU1HLGdCQUFnQjtRQUNwQlQsZUFBZSxDQUFDVSxPQUFTLENBQUNBO0lBQzVCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQzswREFBZSxhQUFpRCxPQUFwQ1osZ0JBQWdCLGlCQUFpQjs7a0NBRTVELDhEQUFDWTtrRUFBZSxXQUF5QyxPQUE5QlosZ0JBQWdCLFdBQVc7a0NBQ3BELDRFQUFDUCwyR0FBR0E7NEJBQUNvQixrQkFBaUI7NEJBQUlDLFdBQVU7OzhDQUNwQyw4REFBQ0M7b0NBQUVSLE1BQUs7OEVBQWM7OENBQU8sNEVBQUNTO3dDQUFJQyxLQUFJO3dDQUF5QkMsS0FBSTtrRkFBYTs7Ozs7Ozs7Ozs7Z0NBQStCOzhDQUU3Ryw4REFBQ3pCLDJHQUFHQSxDQUFDMEIsSUFBSTtvQ0FBQ1osTUFBSztvQ0FBSU8sV0FBVTs7c0RBQzdCLDhEQUFDbkIsc0RBQUtBOzRDQUFDeUIsTUFBTTs0Q0FBSUMsUUFBTzs0Q0FBT1AsV0FBVTs7Ozs7O3dDQUFTOzs7Ozs7OzhDQUVsRCw4REFBQ3JCLDJHQUFHQSxDQUFDMEIsSUFBSTtvQ0FBQ1osTUFBSztvQ0FBYU8sV0FBVTs7c0RBQ3RDLDhEQUFDakIsc0RBQVFBOzRDQUFDdUIsTUFBTTs0Q0FBSUMsUUFBTzs0Q0FBT1AsV0FBVTs7Ozs7O3dDQUFTOzs7Ozs7OzhDQUVyRCw4REFBQ3JCLDJHQUFHQSxDQUFDMEIsSUFBSTtvQ0FBQ1osTUFBSztvQ0FBWU8sV0FBVTs7c0RBQ3JDLDhEQUFDbEIsdURBQVFBOzRDQUFDd0IsTUFBTTs0Q0FBSUMsUUFBTzs0Q0FBT1AsV0FBVTs7Ozs7O3dDQUFTOzs7Ozs7OzhDQUVyRCw4REFBQ3JCLDJHQUFHQSxDQUFDMEIsSUFBSTtvQ0FBQ0csU0FBU2Q7b0NBQVFNLFdBQVU7O3NEQUNyQyw4REFBQ2hCLHVEQUFPQTs0Q0FBQ3NCLE1BQU07NENBQUlDLFFBQU87NENBQU9QLFdBQVU7Ozs7Ozt3Q0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU14RCw4REFBQ0Y7a0VBQWM7OzBDQUViLDhEQUFDbEIsNEdBQU1BO2dDQUFDNkIsSUFBRztnQ0FBUVQsV0FBVTswQ0FDM0IsNEVBQUNVO29DQUVDRixTQUFTWjs4RUFEQzs4Q0FHViw0RUFBQ2U7a0ZBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7MENBS2pCLDhEQUFDbkMsNEdBQVNBO2dDQUFDb0MsS0FBSztnQ0FBQ1osV0FBVTswQ0FDekIsNEVBQUN2Qiw0R0FBR0E7OENBQ0YsNEVBQUNDLDRHQUFHQTt3Q0FBQ3NCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RDdCO0dBbkhNZjtLQUFBQTtBQXFITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL3BhZ2UuanN4PzM4ZDciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIE5hdiwgTmF2YmFyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwiQC9wdWJsaWMvYXNzZXRzL3ZlbmRvci9ib290c3RyYXAtaWNvbnMvYm9vdHN0cmFwLWljb25zLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9nbG9iYWxzMi5jc3NcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgSG91c2UsIENoYXRUZXh0LCBBaXJwbGFuZSwgU2lnbk91dCB9IGZyb20gXCJwaG9zcGhvci1yZWFjdFwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbaXNTaWRlYmFyT3Blbiwgc2V0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjsgLy8gUmVkaXJlY2Npw7NuIHNpIG5vIGVzdMOhIGxvZ3VlYWRvXHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpblwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlYmFyT3BlbigocHJldikgPT4gIXByZXYpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGRhc2hib2FyZCAke2lzU2lkZWJhck9wZW4gPyBcInNpZGViYXItb3BlblwiIDogXCJcIn1gfT5cclxuICAgICAgICB7LyogU2lkZWJhciAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGViYXIgJHtpc1NpZGViYXJPcGVuID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICA8TmF2IGRlZmF1bHRBY3RpdmVLZXk9XCIvXCIgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBsb2dvZGFzaGJvYXJkXCIvPjwvYT5cclxuICAgICAgICAgIGhcclxuICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dGwgaG9tZXRleHRcIj5cclxuICAgICAgICAgICAgPEhvdXNlIHNpemU9ezIwfSB3ZWlnaHQ9XCJib2xkXCIgY2xhc3NOYW1lPVwibWUtMlwiIC8+IEluaWNpb1xyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIiBjbGFzc05hbWU9XCJ0ZXh0bFwiPlxyXG4gICAgICAgICAgICA8QWlycGxhbmUgc2l6ZT17MjB9IHdlaWdodD1cImJvbGRcIiBjbGFzc05hbWU9XCJtZS0yXCIgLz4gUGFxdWV0ZXNcclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvbWVzc2FnZXNcIiBjbGFzc05hbWU9XCJ0ZXh0bFwiPlxyXG4gICAgICAgICAgICA8Q2hhdFRleHQgc2l6ZT17MjB9IHdlaWdodD1cImJvbGRcIiBjbGFzc05hbWU9XCJtZS0yXCIgLz4gTWVuc2FqZXNcclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPVwidGV4dGxcIj5cclxuICAgICAgICAgICAgPFNpZ25PdXQgc2l6ZT17MjB9IHdlaWdodD1cImJvbGRcIiBjbGFzc05hbWU9XCJtZS0yXCIgLz4gQ2VycmFyIFNlc2nDs25cclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogTWFpbiBDb250ZW50ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICB7LyogVG9wYmFyICovfVxyXG4gICAgICAgICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgY2xhc3NOYW1lPVwibmF2YmFyIHB4LTNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGQtbGctbm9uZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU2lkZWJhcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWxpc3RcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgICAgey8qIFBhZ2UgQ29udGVudCAqL31cclxuICAgICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicHktNFwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmRhc2hib2FyZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNpZGViYXIge1xyXG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgei1pbmRleDogMTAzMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNpZGViYXIuYWN0aXZlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNpZGViYXI6bm90KC5hY3RpdmUpIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaWRlYmFyLW9wZW4gLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiTmF2IiwiTmF2YmFyIiwiSG91c2UiLCJDaGF0VGV4dCIsIkFpcnBsYW5lIiwiU2lnbk91dCIsIlBhZ2UiLCJpc1NpZGViYXJPcGVuIiwic2V0U2lkZWJhck9wZW4iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwidG9nZ2xlU2lkZWJhciIsInByZXYiLCJkaXYiLCJkZWZhdWx0QWN0aXZlS2V5IiwiY2xhc3NOYW1lIiwiYSIsImltZyIsInNyYyIsImFsdCIsIkxpbmsiLCJzaXplIiwid2VpZ2h0Iiwib25DbGljayIsImJnIiwiYnV0dG9uIiwiaSIsImZsdWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.jsx\n"));

/***/ })

});