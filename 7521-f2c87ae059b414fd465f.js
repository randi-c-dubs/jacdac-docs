"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7521],{

/***/ 67521:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModelSummaryDropdown; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74601);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95371);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37171);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47739);
/* harmony import */ var _ModelSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98629);


 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function ModelSummaryDropdown(props) {
  var {
    dataset,
    model
  } = props;
  var classes = props.reactStyle;
  var [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);

  var handleExpandedSummaryChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    expanded: expanded === "modelSummary",
    onChange: handleExpandedSummaryChange("modelSummary")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, expanded == "modelSummary" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Summary ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Classes: ", model.labels.join(", "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Training Status: ", model.status, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ModelSummary__WEBPACK_IMPORTED_MODULE_1__.default, {
    reactStyle: classes,
    dataset: dataset,
    model: model
  })))));
}

/***/ })

}]);
//# sourceMappingURL=7521-f2c87ae059b414fd465f.js.map