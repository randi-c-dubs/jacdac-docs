"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[206],{

/***/ 94500:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.Z = _default;

/***/ }),

/***/ 17890:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ClassDataSetGrid; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95823);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29114);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94500);
/* harmony import */ var _Trend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25090);



 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function ClassDataSetGrid(props) {
  var {
    label,
    tables,
    handleDeleteTable
  } = props;

  var handleDelete = table => () => handleDeleteTable(table);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    subheader: label + (", " + tables.length + " sample(s)")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, tables.map(table => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    key: "result" + table.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Trend__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    dataSet: table,
    height: 8,
    mini: true
  }), handleDeleteTable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
    onClick: handleDelete(table),
    title: "Delete this sample"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null))))))));
}

/***/ }),

/***/ 206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlocklyViewDataDialog; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89952);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52377);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79885);
/* harmony import */ var _ClassDataSetGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17890);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69672);
/* harmony import */ var _ServiceManagerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99808);



 // tslint:disable-next-line: no-submodule-imports match-default-export-name





var DataSetPlot = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 9866).then(__webpack_require__.bind(__webpack_require__, 49866)));
function BlocklyViewDataDialog(props) {
  var {
    classes,
    chartPalette,
    open,
    onDone,
    dataset
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP);

  var handleDownloadDataSet = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(function* () {
      fileStorage.saveText(dataset.name + ".csv", dataset.toCSV());
    });

    return function handleDownloadDataSet() {
      return _ref.apply(this, arguments);
    };
  }();
  /* For interface controls */


  var handleDone = () => {
    // close the modal
    onDone();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    open: open,
    onClose: handleDone,
    fullWidth: true,
    maxWidth: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Viewing ", dataset.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    onClick: handleDownloadDataSet,
    title: "Download all recording data",
    disabled: dataset.totalRecordings == 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: "recordedData"
  }, dataset.totalRecordings ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: "recordings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Input type(s):", " ", dataset.inputTypes.join(","), " "), dataset.labels.map(classLabel => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ClassDataSetGrid__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    key: "dataset-" + classLabel,
    label: classLabel,
    tables: dataset.getRecordingsWithLabel(classLabel),
    handleDeleteTable: undefined
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Dataset plot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataSetPlot, {
    chartProps: chartProps,
    reactStyle: classes,
    dataset: dataset,
    predictedLabels: null,
    timestamp: undefined
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Empty"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    variant: "contained",
    onClick: handleDone
  }, "Close")));
}

/***/ })

}]);
//# sourceMappingURL=206-66cbd6123a0271c35184.js.map