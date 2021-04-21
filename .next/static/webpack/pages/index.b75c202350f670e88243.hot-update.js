webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/joaopfa/Desktop/Cursos e imers\\xF5es/NLW 05 Podcastr/podcastrnext/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n//formas de consumo de uma api em next\n// SPA se precisamos que as infos sejam carregadas no momento q o user acessa a página,\n// aí se fazem melhores os outros métodos:\n// SSR Server Side Rendering\n// SSG\n\nfunction Home() {\n  _s();\n\n  // SPA: esse método n possibilita a iondexação por parte dos crowlers, \n  //por estes n aguardam a chamada completa da api finalizar para então \n  //coletar as infos disponíveis na página pra indexar no google e tals\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetch('http://localhost:3333/episodes').then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return console.log(data);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: \"Index\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n} // SSR p/ fzer SSR no next: \n// dentro de qlqr p\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCO0FBQ0E7QUFDQTtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxDQUFDLGdDQUFELENBQUwsQ0FDQ0MsSUFERCxDQUNNLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBRGQsRUFFQ0YsSUFGRCxDQUVNLFVBQUFHLElBQUk7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixDQUFKO0FBQUEsS0FGVjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFPQSxzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0QsQyxDQUVEO0FBQ0E7O0dBakJ3Qk4sSTs7S0FBQUEsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2Zvcm1hcyBkZSBjb25zdW1vIGRlIHVtYSBhcGkgZW0gbmV4dFxuLy8gU1BBIHNlIHByZWNpc2Ftb3MgcXVlIGFzIGluZm9zIHNlamFtIGNhcnJlZ2FkYXMgbm8gbW9tZW50byBxIG8gdXNlciBhY2Vzc2EgYSBww6FnaW5hLFxuLy8gYcOtIHNlIGZhemVtIG1lbGhvcmVzIG9zIG91dHJvcyBtw6l0b2Rvczpcbi8vIFNTUiBTZXJ2ZXIgU2lkZSBSZW5kZXJpbmdcbi8vIFNTR1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBTUEE6IGVzc2UgbcOpdG9kbyBuIHBvc3NpYmlsaXRhIGEgaW9uZGV4YcOnw6NvIHBvciBwYXJ0ZSBkb3MgY3Jvd2xlcnMsIFxuICAvL3BvciBlc3RlcyBuIGFndWFyZGFtIGEgY2hhbWFkYSBjb21wbGV0YSBkYSBhcGkgZmluYWxpemFyIHBhcmEgZW50w6NvIFxuICAvL2NvbGV0YXIgYXMgaW5mb3MgZGlzcG9uw612ZWlzIG5hIHDDoWdpbmEgcHJhIGluZGV4YXIgbm8gZ29vZ2xlIGUgdGFsc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvZXBpc29kZXMnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICB9LCBbXSlcblxuXG4gIHJldHVybiAoXG4gICAgPGgxPkluZGV4PC9oMT5cbiAgKVxufVxuXG4vLyBTU1IgcC8gZnplciBTU1Igbm8gbmV4dDogXG4vLyBkZW50cm8gZGUgcWxxciBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})