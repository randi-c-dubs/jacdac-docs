"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[973],{

/***/ 80460:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'ChevronLeft');

exports.Z = _default;

/***/ }),

/***/ 82226:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"
}), 'LiveTv');

exports.Z = _default;

/***/ }),

/***/ 66601:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
}), 'Pause');

exports.Z = _default;

/***/ }),

/***/ 69313:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
}), 'Replay');

exports.Z = _default;

/***/ }),

/***/ 8567:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');

exports.Z = _default;

/***/ }),

/***/ 87202:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k9": function() { return /* binding */ parseTrace; },
/* harmony export */   "Rx": function() { return /* binding */ parseLogicLog; }
/* harmony export */ });
/* unused harmony export replayLog */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81794);
/* harmony import */ var _packet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57683);
/* harmony import */ var _traceplayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35391);
/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79918);
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function parseTrace(contents) {
  var description = [];
  var packets = [];
  contents === null || contents === void 0 ? void 0 : contents.split(/\r?\n/).forEach(function (ln) {
    // parse data
    var m = /^(\d+.?\d*)\s+([a-f0-9]{12,})/i.exec(ln);

    if (!m) {
      // probably junk data
      if (packets.length == 0) description.push(ln);
      return;
    }

    var timestamp = parseInt(m[1]);
    var data = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .fromHex */ .H_)(m[2]); // add to array

    packets.push(_packet__WEBPACK_IMPORTED_MODULE_1__/* .default.fromBinary */ .Z.fromBinary(data, timestamp));
  });
  if (packets.length) return new _trace__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z(packets, description.join("\n").trim());else return undefined;
}
function parseLogicLog(logcontents) {
  if (!logcontents) return undefined;
  var res = [];
  var frameBytes = [];
  var lastTime = 0;

  for (var _iterator = _createForOfIteratorHelperLoose(logcontents.split(/\r?\n/)), _step; !(_step = _iterator()).done;) {
    var ln = _step.value;
    var m = /^JD (\d+) ([0-9a-f]+)/i.exec(ln);

    if (m) {
      res.push({
        timestamp: parseInt(m[1]),
        data: (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .fromHex */ .H_)(m[2])
      });
      continue;
    }
    /** Windows, logic 1.*
    Time [s],Value,Parity Error,Framing Error
    0.042909760000000,0x00,,Error
    0.042980320000000,0xD4,,
    0.042990240000000,0x81,,
    0.043000160000000,0x10,,
    0.043010240000000,0x00,,
    0.043020160000000,0xE8,,
    0.043030240000000,0xDF,,
    0.043040160000000,0xCB,,
    0.043050240000000,0xD1,,
    0.043060160000000,0x97,,
    0.043070240000000,0x34,,
    0.043080160000000,0x37,,
    0.043090240000000,0x48,,
    0.043100160000000,0x0C,,
    0.043110080000000,0x00,,
    0.043120160000000,0x00,,
    0.043130080000000,0x00,,
    0.043140160000000,0x00,,
    0.043150080000000,0x00,,
    0.043160160000000,0x00,,
    0.043170080000000,0x00,,
    0.043180160000000,0xCA,,
    0.043190080000000,0x1F,,
    0.043200160000000,0xDC,,
    0.043210080000000,0x12,,
    0.043220160000000,0x46,,
    0.043230080000000,0x47,,
    0.043240160000000,0x27,,
    0.043250080000000,0x1F,,
    0.043264800000000,0x00,,Error
    0.063968960000000,0x00,,Error
     */


    m = /^([\d.]+),(?:Async Serial,)?.*(0x[A-F0-9][A-F0-9])/.exec(ln);
    if (!m) continue;
    var tm = parseFloat(m[1]);

    if (lastTime && tm - lastTime > 0.1) {
      res.push({
        timestamp: lastTime * 1000,
        data: new Uint8Array(frameBytes),
        info: "timeout"
      });
      frameBytes = [];
      lastTime = 0;
    }

    lastTime = tm;

    if (/(framing error|Error)/.test(ln)) {
      if (frameBytes.length > 0) res.push({
        timestamp: lastTime * 1000,
        data: new Uint8Array(frameBytes)
      });
      frameBytes = [];
      lastTime = 0;
    } else {
      frameBytes.push(parseInt(m[2]));
    }
  }

  return res;
}
function replayLog(bus, frames, speed) {
  var packets = arrayConcatMany(frames.map(function (frame) {
    return Packet.fromFrame(frame.data, frame.timestamp);
  }));
  var player = new TracePlayer(bus, speed);
  player.trace = new Trace(packets);
  bus.clear(packets[0].timestamp);
  player.start();
}

/***/ }),

/***/ 94431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33287);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84125);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42862);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
    button: {
      marginLeft: theme.spacing(2)
    }
  });
});

function NoSsrConnectAlert(props) {
  var classes = useStyles();
  var serviceClass = props.serviceClass,
      closeable = props.closeable;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z),
      bus = _useContext.bus;

  var transports = bus.transports;
  var devices = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass,
      ignoreSelf: true
    });
  });
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass); // don't show if no transport, some devices

  if (!transports.length || devices !== null && devices !== void 0 && devices.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    severity: "info",
    closeable: closeable
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(function (transport) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      key: transport.type,
      transport: transport,
      className: classes.button,
      full: true,
      transparent: true
    });
  })));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ 80973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AppDrawer; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js
var Drawer = __webpack_require__(71892);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(62846);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/components/layout.tsx + 24 modules
var layout = __webpack_require__(8391);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronLeft.js
var ChevronLeft = __webpack_require__(80460);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Clear.js
var Clear = __webpack_require__(58590);
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx + 3 modules
var PacketsContext = __webpack_require__(69882);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__(87202);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(57683);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/trace.ts
var jdom_trace = __webpack_require__(79918);
;// CONCATENATED MODULE: ./src/components/trace/TraceImportButton.tsx










var ImportButton = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(__webpack_require__, 20119));
});
function TraceImportButton(props) {
  var icon = props.icon,
      disabled = props.disabled;

  var _useContext = (0,react.useContext)(PacketsContext/* default */.Z),
      recording = _useContext.recording,
      setReplayTrace = _useContext.setReplayTrace;

  var _useContext2 = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext2.setError;

  var _useState = (0,react.useState)(false),
      importing = _useState[0],
      setImporting = _useState[1];

  var handleFiles = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(files) {
      var file, txt, trace, frames, packets;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = files[0];

              if (!file) {
                _context.next = 13;
                break;
              }

              _context.prev = 2;
              setImporting(true);
              _context.next = 6;
              return file.text();

            case 6:
              txt = _context.sent;

              // let's try a few format and see if we're lucky
              try {
                trace = (0,logparser/* parseTrace */.k9)(txt);
              } catch (e) {
                console.log("trace parse error", e);
              } // try logic format


              if (!trace) {
                try {
                  frames = (0,logparser/* parseLogicLog */.Rx)(txt); // ensure format is ok

                  packets = (0,utils/* arrayConcatMany */.ue)(frames.map(function (frame) {
                    return packet/* default.fromFrame */.Z.fromFrame(frame.data, frame.timestamp);
                  }));
                  if (packets !== null && packets !== void 0 && packets.length) trace = new jdom_trace/* default */.Z(packets);
                } catch (e) {
                  console.log("logic parse error", e);
                }
              } // found anything?


              if (trace) {
                console.log("importing " + trace.packets.length + " packets");
                setReplayTrace(trace);
              } else setError("could not parse file");

            case 10:
              _context.prev = 10;
              setImporting(false);
              return _context.finish(10);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2,, 10, 13]]);
    }));

    return function handleFiles(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ImportButton, {
    icon: icon,
    disabled: importing || recording || disabled,
    text: "Import Trace File",
    onFilesUploaded: handleFiles
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Save.js
var Save = __webpack_require__(8567);
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 3 modules
var ServiceManagerContext = __webpack_require__(99808);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
;// CONCATENATED MODULE: ./src/components/trace/TraceSaveButton.tsx
 // tslint:disable-next-line: match-default-export-name no-submodule-imports





function TraceSaveButton(props) {
  var disabled = props.disabled;

  var _useContext = (0,react.useContext)(PacketsContext/* default */.Z),
      replayTrace = _useContext.replayTrace,
      recording = _useContext.recording;

  var _useContext2 = (0,react.useContext)(ServiceManagerContext/* default */.ZP),
      fileStorage = _useContext2.fileStorage;

  var saveTrace = function saveTrace() {
    fileStorage.saveText("trace.jd.txt", replayTrace.serializeToText());
  };

  return /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "save trace",
    disabled: disabled || recording || !(replayTrace !== null && replayTrace !== void 0 && replayTrace.packets.length),
    size: "small",
    key: "save",
    onClick: saveTrace
  }, /*#__PURE__*/react.createElement(Save/* default */.Z, null));
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(19756);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(6018);
;// CONCATENATED MODULE: ./node_modules/@material-ui/icons/esm/FiberManualRecord.js


/* harmony default export */ var FiberManualRecord = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/react.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord'));
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__(16845);
;// CONCATENATED MODULE: ./src/components/trace/TraceRecordButton.tsx

var _excluded = ["disabled"];




function TraceRecordButton(props) {
  var disabled = props.disabled,
      others = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var _useContext = (0,react.useContext)(PacketsContext/* default */.Z),
      recording = _useContext.recording,
      tracing = _useContext.tracing,
      toggleRecording = _useContext.toggleRecording;

  var title = recording ? "Stop recording" : "Record trace";
  return /*#__PURE__*/react.createElement(IconButtonWithProgress/* default */.Z, Object.assign({}, others, {
    "aria-label": title,
    title: title,
    indeterminate: recording,
    disabled: disabled || tracing,
    onClick: toggleRecording,
    progressStyle: {
      color: "#f66"
    }
  }), !recording && /*#__PURE__*/react.createElement(FiberManualRecord, null), recording && /*#__PURE__*/react.createElement(FiberManualRecord, {
    style: {
      color: "#f00"
    }
  }));
}
// EXTERNAL MODULE: ./src/components/trace/TracePlayButton.tsx
var TracePlayButton = __webpack_require__(86360);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Replay.js
var Replay = __webpack_require__(69313);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Pause.js
var Pause = __webpack_require__(66601);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/LiveTv.js
var LiveTv = __webpack_require__(82226);
// EXTERNAL MODULE: ./src/components/trace/TraceClearButton.tsx
var TraceClearButton = __webpack_require__(77653);
;// CONCATENATED MODULE: ./src/components/PacketRecorder.tsx
 // tslint:disable-next-line: no-submodule-imports match-default-export-name








 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name



function PacketRecorder() {
  var _useContext = (0,react.useContext)(PacketsContext/* default */.Z),
      clearPackets = _useContext.clearPackets,
      clearBus = _useContext.clearBus,
      replayTrace = _useContext.replayTrace,
      recording = _useContext.recording,
      tracing = _useContext.tracing,
      paused = _useContext.paused,
      setPaused = _useContext.setPaused;

  return /*#__PURE__*/react.createElement(react.Fragment, null, !recording && replayTrace && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption"
  }, replayTrace.packets.length, " packets"), /*#__PURE__*/react.createElement(TraceImportButton, {
    icon: true,
    disabled: tracing || recording
  }), /*#__PURE__*/react.createElement(TraceSaveButton, {
    disabled: tracing || !replayTrace
  }), "|", /*#__PURE__*/react.createElement(TraceRecordButton, {
    size: "small"
  }), /*#__PURE__*/react.createElement(TracePlayButton/* default */.Z, {
    size: "small"
  }), /*#__PURE__*/react.createElement(TraceClearButton/* default */.Z, {
    size: "small"
  }), "|", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: paused ? "Resume packets" : "pause packets",
    size: "small",
    key: "pausepackets",
    onClick: function onClick() {
      return setPaused(!paused);
    }
  }, paused ? /*#__PURE__*/react.createElement(LiveTv/* default */.Z, null) : /*#__PURE__*/react.createElement(Pause/* default */.Z, null)), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "Clear Packets",
    size: "small",
    key: "clearpackets",
    onClick: clearPackets,
    disabled: recording || tracing
  }, /*#__PURE__*/react.createElement(Clear/* default */.Z, null)), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "Clear Devices",
    size: "small",
    key: "clearbus",
    onClick: clearBus,
    disabled: recording || tracing
  }, /*#__PURE__*/react.createElement(Replay/* default */.Z, null)));
}
// EXTERNAL MODULE: ./src/components/DrawerToolsButtonGroup.tsx
var DrawerToolsButtonGroup = __webpack_require__(95743);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
;// CONCATENATED MODULE: ./src/components/shell/AppDrawer.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name






var Toc = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 1018).then(__webpack_require__.bind(__webpack_require__, 91018));
});
var PacketView = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 8445).then(__webpack_require__.bind(__webpack_require__, 38445));
});
var JDomTreeView = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(188)]).then(__webpack_require__.bind(__webpack_require__, 10188));
});
var DrawerSearchResults = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 6130).then(__webpack_require__.bind(__webpack_require__, 86130));
});
var DrawerSearchInput = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 2470).then(__webpack_require__.bind(__webpack_require__, 32470));
});
var useStyles = (0,makeStyles/* default */.Z)(function (theme) {
  var _drawer, _drawerPaper;

  return (0,createStyles/* default */.Z)({
    drawer: (_drawer = {
      width: layout/* DRAWER_WIDTH */.pG + "rem",
      flexShrink: 0
    }, _drawer[theme.breakpoints.down(layout/* MOBILE_BREAKPOINT */.Gh)] = {
      width: "100%"
    }, _drawer),
    drawerPaper: (_drawerPaper = {
      width: layout/* DRAWER_WIDTH */.pG + "rem"
    }, _drawerPaper[theme.breakpoints.down(layout/* MOBILE_BREAKPOINT */.Gh)] = {
      width: "100%"
    }, _drawerPaper),
    tocDrawer: {
      width: layout/* TOC_DRAWER_WIDTH */.a2 + "rem",
      flexShrink: 0
    },
    tocDrawerPaper: {
      width: layout/* TOC_DRAWER_WIDTH */.a2 + "rem"
    },
    drawerHeader: _objectSpread(_objectSpread({
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar), {}, {
      justifyContent: "flex-start"
    }),
    alertButton: {
      marginLeft: theme.spacing(2)
    },
    mdx: {
      margin: theme.spacing(2)
    },
    fluid: {
      flex: 1
    }
  });
});
function AppDrawer(props) {
  var pagePath = props.pagePath;
  var classes = useStyles();

  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      drawerType = _useContext.drawerType,
      setDrawerType = _useContext.setDrawerType,
      searchQuery = _useContext.searchQuery;

  var open = drawerType !== AppContext/* DrawerType.None */.jw.None;
  var showSearchResults = drawerType === AppContext/* DrawerType.Toc */.jw.Toc && !!searchQuery;

  var handleDrawerClose = function handleDrawerClose() {
    setDrawerType(AppContext/* DrawerType.None */.jw.None);
  };

  if (drawerType === AppContext/* DrawerType.None */.jw.None) return /*#__PURE__*/react.createElement(react.Fragment, null);
  var toc = drawerType === AppContext/* DrawerType.Toc */.jw.Toc;
  return /*#__PURE__*/react.createElement(Drawer/* default */.ZP, {
    className: toc ? classes.tocDrawer : classes.drawer,
    variant: "persistent",
    anchor: "left",
    open: open,
    classes: {
      paper: toc ? classes.tocDrawerPaper : classes.drawerPaper
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.drawerHeader
  }, toc && /*#__PURE__*/react.createElement("div", {
    className: classes.fluid
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(DrawerSearchInput, null))), !toc && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(PacketRecorder, null), /*#__PURE__*/react.createElement("span", {
    className: classes.fluid
  }), /*#__PURE__*/react.createElement(DrawerToolsButtonGroup/* default */.Z, {
    showConnect: true
  })), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, {
    "aria-label": "Collapse",
    onClick: handleDrawerClose
  }, /*#__PURE__*/react.createElement(ChevronLeft/* default */.Z, null))), /*#__PURE__*/react.createElement(Divider/* default */.Z, null), showSearchResults && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(DrawerSearchResults, null)), !showSearchResults && drawerType === AppContext/* DrawerType.Toc */.jw.Toc && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(Toc, {
    pagePath: pagePath
  })), !showSearchResults && drawerType === AppContext/* DrawerType.Packets */.jw.Packets ? /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(PacketView, {
    showTime: true
  })) : drawerType === AppContext/* DrawerType.Dom */.jw.Dom ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    closeable: true
  }), /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(JDomTreeView, null))) : undefined);
}

/***/ })

}]);