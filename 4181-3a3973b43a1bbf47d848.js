"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4181],{

/***/ 54181:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SpecificationUnitList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80453);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13996);
/* harmony import */ var _ui_PaperBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79739);




function SpecificationUnitList() {
  var u = (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_1__/* .units */ .Dl)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_PaperBox__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, u.map(function (kv) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      item: true,
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2,
      xl: 1,
      key: kv.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      variant: "body1"
    }, kv.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      variant: "caption"
    }, kv.description));
  })));
}

/***/ }),

/***/ 79739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PaperBox; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12265);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59355);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58063);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["children", "padding", "elevation", "bgcolor"];


function PaperBox(props) {
  var children = props.children,
      padding = props.padding,
      elevation = props.elevation,
      bgcolor = props.bgcolor,
      others = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, Object.assign({}, others, {
    bgcolor: bgcolor,
    mb: theme.spacing(0.25)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    square: true,
    elevation: elevation
  }, padding !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    p: theme.spacing(padding || 0.25)
  }, children), padding === 0 && children));
}

/***/ })

}]);