"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3887],{

/***/ 83219:
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
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z"
}), 'VoiceChat');

exports.Z = _default;

/***/ }),

/***/ 83887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardSpeechSynthesis; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83219);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82613);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91635);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19640);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82677);










function DashboardSpeechSynthesis(props) {
  var service = props.service;
  var enabled = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SpeechSynthesisReg.Enabled */ .b3j.Enabled);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("jacdac"),
      text = _useState[0],
      setText = _useState[1];

  var textId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .Me)();

  var handleChange = function handleChange(ev) {
    var newValue = ev.target.value;
    setText(newValue);
  };

  var handleSpeak = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("speak " + text);

              if (enabled.boolValue) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return enabled.sendSetAsync((0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_4__/* .jdpack */ .AV)("u8", [true]), true);

            case 4:
              _context.next = 6;
              return service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SpeechSynthesisCmd.Speak */ .AWi.Speak, (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_4__/* .jdpack */ .AV)("s", [text]));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSpeak() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    id: textId,
    spellCheck: false,
    value: text,
    label: "speech synthesis",
    helperText: "Enter text to speak out",
    onChange: handleChange,
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    disabled: !text,
    title: "speak text",
    onClick: handleSpeak,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null)
  })));
}

/***/ })

}]);