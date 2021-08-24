"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6241],{

/***/ 26241:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DataTablePreviewWidget; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _DataTableWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11472);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16582);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);




function DataTablePreviewWidget(props) {
  var {
    compare
  } = props;
  if (!compare) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataTableWidget__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    tableHeight: 295,
    empty: "no data",
    transformed: false,
    maxItems: _toolbox__WEBPACK_IMPORTED_MODULE_2__/* .TABLE_PREVIEW_MAX_ITEMS */ .Sw
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    spacing: 1,
    style: {
      background: "#fff"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataTableWidget__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    label: "before",
    tableHeight: 295,
    empty: "no data",
    transformed: false,
    maxItems: _toolbox__WEBPACK_IMPORTED_MODULE_2__/* .TABLE_PREVIEW_MAX_ITEMS */ .Sw
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataTableWidget__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    label: "after",
    tableHeight: 295,
    empty: "no data",
    transformed: true,
    maxItems: _toolbox__WEBPACK_IMPORTED_MODULE_2__/* .TABLE_PREVIEW_MAX_ITEMS */ .Sw
  })));
}

/***/ })

}]);