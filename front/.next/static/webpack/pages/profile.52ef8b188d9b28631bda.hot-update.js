webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/wooramlee/Desktop/prepare/front/components/FollowList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar FolloList = function FolloList(_ref) {\n  var header = _ref.header,\n      data = _ref.data;\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n    style: {\n      marginBottom: '20px'\n    },\n    grid: {\n      gutter: 4,\n      xs: 2,\n      md: 3\n    },\n    size: \"small\",\n    header: __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }\n    }, header),\n    loadMore: __jsx(\"div\", {\n      style: {\n        textAlign: 'center',\n        margin: '10px 0'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 15\n      }\n    }, __jsx(Button, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 69\n      }\n    }, \"\\uB354 \\uBCF4\\uAE30\")),\n    bordered: true,\n    dataSource: data,\n    renderItem: function renderItem(item) {\n      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Item, {\n        style: {\n          marginTop: '20px'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 7\n        }\n      }, __jsx(Card, {\n        actions: [__jsx(StopOutlined, {\n          key: \"stop\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 25\n          }\n        })],\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 9\n        }\n      }, __jsx(Card.Meta, {\n        description: item.nickname,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }\n      })));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  });\n};\n\n_c = FolloList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FolloList);\n\nvar _c;\n\n$RefreshReg$(_c, \"FolloList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzP2ZhMDIiXSwibmFtZXMiOlsiRm9sbG9MaXN0IiwiaGVhZGVyIiwiZGF0YSIsIm1hcmdpbkJvdHRvbSIsImd1dHRlciIsInhzIiwibWQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJpdGVtIiwibWFyZ2luVG9wIiwibmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUUsU0FBWEEsU0FBVyxPQUFzQjtBQUFBLE1BQW5CQyxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDckMsU0FDRSxNQUFDLHlDQUFEO0FBQ0EsU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FEUDtBQUVBLFFBQUksRUFBRTtBQUFFQyxZQUFNLEVBQUUsQ0FBVjtBQUFhQyxRQUFFLEVBQUUsQ0FBakI7QUFBb0JDLFFBQUUsRUFBRTtBQUF4QixLQUZOO0FBR0EsUUFBSSxFQUFDLE9BSEw7QUFJQSxVQUFNLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNTCxNQUFOLENBSlI7QUFLQSxZQUFRLEVBQUU7QUFBSyxXQUFLLEVBQUU7QUFBRU0saUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxjQUFNLEVBQUU7QUFBL0IsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXNELE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUF0RCxDQUxWO0FBTUEsWUFBUSxNQU5SO0FBT0EsY0FBVSxFQUFFTixJQVBaO0FBUUEsY0FBVSxFQUFFLG9CQUFDTyxJQUFEO0FBQUEsYUFDVixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWIsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsSUFBRDtBQUFNLGVBQU8sRUFBRSxDQUFDLE1BQUMsWUFBRDtBQUFjLGFBQUcsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUQsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxJQUFELENBQU0sSUFBTjtBQUFXLG1CQUFXLEVBQUVELElBQUksQ0FBQ0UsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREYsQ0FEVTtBQUFBLEtBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBa0JELENBbkJEOztLQUFNWCxTO0FBcUJTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9sbG93TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IEZvbGxvTGlzdD0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlzdFxuICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19XG4gICAgZ3JpZD17eyBndXR0ZXI6IDQsIHhzOiAyLCBtZDogMyB9fVxuICAgIHNpemU9XCJzbWFsbFwiXG4gICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxuICAgIGxvYWRNb3JlPXs8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCd9fT48QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj48L2Rpdj59XG4gICAgYm9yZGVyZWRcbiAgICBkYXRhU291cmNlPXtkYXRhfVxuICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXG4gICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnIH19PlxuICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIgLz5dfT5cbiAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0xpc3QuSXRlbT5cbiAgICApfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xsb0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

})