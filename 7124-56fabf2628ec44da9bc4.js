"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7124],{

/***/ 27124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LogViewWidget; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59355);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_vm_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59448);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89801);




function LogViewWidget() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      runner = _useContext.runner;

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      logs = _useState[0],
      setLogs = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLogs([]);
    runner === null || runner === void 0 ? void 0 : runner.subscribe(_jacdac_ts_src_vm_events__WEBPACK_IMPORTED_MODULE_3__/* .VM_LOG_ENTRY */ .aG, function () {
      setLogs((runner === null || runner === void 0 ? void 0 : runner.logData) || []);
    });
  }, [runner]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    style: {
      padding: "0",
      marginBottom: "0",
      background: "none",
      color: theme.palette.text.primary,
      maxHeight: "80vh",
      overflowY: "auto"
    }
  }, logs.slice(-20).map(function (l) {
    return "" + (l.count > 1 ? l.count + ": " : "") + l.text;
  }).join("\n"));
}

/***/ })

}]);