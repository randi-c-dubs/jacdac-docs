"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1171],{

/***/ 27729:
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
  d: "M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"
}), 'VolumeDown');

exports.Z = _default;

/***/ }),

/***/ 32377:
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
  d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
}), 'VolumeUp');

exports.Z = _default;

/***/ }),

/***/ 51171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardBuzzer; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50514);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91635);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89196);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49013);
/* harmony import */ var _jacdac_ts_src_servers_buzzerserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69589);
/* harmony import */ var _material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(27729);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69672);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82677);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6809);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32377);
/* harmony import */ var _ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94564);
















var PianoWidget = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(317)]).then(__webpack_require__.bind(__webpack_require__, 28937));
});
function DashboardBuzzer(props) {
  var service = props.service;
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";
  var volumeRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .BuzzerReg.Volume */ .CGK.Volume);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__/* .useRegisterUnpackedValue */ .Pf)(volumeRegister, props),
      volume = _useRegisterUnpackedV[0];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_10__/* .default */ .ZP),
      playTone = _useContext.playTone,
      onClickActivateAudioContext = _useContext.onClickActivateAudioContext,
      activated = _useContext.activated; // listen for playTone commands from the buzzer


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return server === null || server === void 0 ? void 0 : server.subscribe(_jacdac_ts_src_servers_buzzerserver__WEBPACK_IMPORTED_MODULE_6__/* .default.PLAY_TONE */ .Z.PLAY_TONE, function (_ref) {
      var frequency = _ref.frequency,
          duration = _ref.duration,
          volume = _ref.volume;
      return playTone === null || playTone === void 0 ? void 0 : playTone(frequency, duration, volume);
    });
  }, [server]);

  var sendPlayTone = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(f) {
      var vol, period, duty, duration, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (server) onClickActivateAudioContext(); // enable audio context within click handler

              vol = 1;
              period = 1000000 / f;
              duty = period * vol / 2;
              duration = 400;
              data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("u16 u16 u16", [period, duty, duration]);
              _context.next = 8;
              return service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .BuzzerCmd.PlayTone */ .Rv2.PlayTone, data);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sendPlayTone(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChange = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ev, newValue) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              volumeRegister.sendSetPackedAsync("u0.8", [newValue], true);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleChange(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleUnlock = function handleUnlock() {
    return sendPlayTone(400);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, server && !activated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    severity: "warning"
  }, "Click to activate sounds. \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_9__.IconButton, {
    "aria-label": "unlock sounds",
    onClick: handleUnlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: true,
    "aria-hidden": true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(PianoWidget, {
    playTone: sendPlayTone
  }))), volume !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    color: "disabled"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
    valueLabelDisplay: "off",
    min: 0,
    max: 1,
    step: 0.1,
    "aria-label": "volume",
    value: volume,
    color: color,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    color: "disabled"
  })))));
}

/***/ })

}]);