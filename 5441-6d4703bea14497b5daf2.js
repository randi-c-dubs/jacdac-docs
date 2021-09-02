"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5441],{

/***/ 75441:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TrainModelDialog; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89952);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52377);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79885);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69672);
/* harmony import */ var _ServiceManagerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99808);
/* harmony import */ var _blockly_fields_PointerBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77298);







var ModelSummaryDropdown = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 6080).then(__webpack_require__.bind(__webpack_require__, 96080)));
var ModelOutput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(7476), __webpack_require__.e(7746)]).then(__webpack_require__.bind(__webpack_require__, 64797)));
function TrainModelDialog(props) {
  var {
    classes,
    chartPalette,
    open,
    onDone,
    model
  } = props;
  var chartProps = {
    CHART_WIDTH: 300,
    CHART_HEIGHT: 300,
    MARK_SIZE: 75,
    TOOLTIP_NUM_FORMAT: "0.2f",
    PALETTE: chartPalette
  };
  var {
    fileStorage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP);
  /* For interface controls */

  var handleCancel = () => {
    // close the modal
    onDone();
  };

  var handleDownloadModel = () => {
    // TODO also download arm model (as a zip file?)
    fileStorage.saveText(model.name + ".json", JSON.stringify(model));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blockly_fields_PointerBoundary__WEBPACK_IMPORTED_MODULE_4__/* .PointerBoundary */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    open: open,
    onClose: handleCancel,
    fullWidth: true,
    maxWidth: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Trained Model", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    onClick: handleDownloadModel,
    title: "Download trained model"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModelSummaryDropdown, {
    reactStyle: classes,
    dataset: undefined,
    model: model
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModelOutput, {
    chartProps: chartProps,
    reactStyle: classes,
    chartPalette: chartPalette,
    model: model
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    variant: "contained",
    color: "primary",
    disabled: false,
    onClick: handleCancel
  }, "Close"))));
}

/***/ })

}]);
//# sourceMappingURL=5441-6d4703bea14497b5daf2.js.map