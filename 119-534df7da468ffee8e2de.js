"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[119],{

/***/ 95552:
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
  d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"
}), 'OpenInBrowser');

exports.Z = _default;

/***/ }),

/***/ 20119:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ImportButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_icons_OpenInBrowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95552);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79885);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69672);

 // tslint:disable-next-line: no-submodule-imports match-default-export-name




var DropzoneDialog = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/* import() */ 7806).then(__webpack_require__.bind(__webpack_require__, 67806));
});
function ImportButton(props) {
  var text = props.text,
      onFilesUploaded = props.onFilesUploaded,
      disabled = props.disabled,
      acceptedFiles = props.acceptedFiles,
      icon = props.icon,
      filesLimit = props.filesLimit,
      className = props.className;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleSave = function handleSave(files) {
    if (files !== null && files !== void 0 && files.length) onFilesUploaded(files);
    setOpen(false);
  };

  var handleClose = function handleClose() {
    return setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    className: className
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    title: text,
    onClick: handleOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_OpenInBrowser__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null)), !icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    disabled: disabled,
    variant: "outlined",
    onClick: handleOpen,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_OpenInBrowser__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null)
  }, text), open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropzoneDialog, {
    open: open,
    onSave: handleSave,
    maxFileSize: 5000000,
    onClose: handleClose,
    acceptedFiles: acceptedFiles,
    clearOnUnmount: true,
    filesLimit: filesLimit || 1,
    submitButtonText: "import"
  })));
}

/***/ })

}]);