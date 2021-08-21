"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5233],{

/***/ 45233:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardHIDMouse; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80453);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91635);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49013);
/* harmony import */ var _jacdac_ts_src_servers_hidmouseserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72191);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54774);









var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    capture: {
      cursor: "pointer",
      "&:hover": {
        borderColor: theme.palette.primary.main
      },
      "&:focus": {
        borderColor: theme.palette.action.active
      }
    }
  });
});
function DashboardHIDMouse(props) {
  var service = props.service;
  var classes = useStyles();
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(service);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      observed = _useState[0],
      setObserved = _useState[1];

  var sendButton = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(buttons, event) {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("u16 u8", [buttons, event]);
              _context.next = 3;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidMouseCmd.SetButton */ .pvv.SetButton, data);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sendButton(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var sendMove = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dx, dy) {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("i16 i16 u16", [dx, dy, 100]);
              _context2.next = 3;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidMouseCmd.Move */ .pvv.Move, data);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function sendMove(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var sendWheel = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(dy) {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("i16 u16", [dy, 100]);
              _context3.next = 3;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidMouseCmd.Wheel */ .pvv.Wheel, data);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function sendWheel(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  var serverValue = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(server, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.lastCommand;
  });
  var value = serverValue || "...";
  var preview = serverValue || observed;

  var handleMouseDown = function handleMouseDown(ev) {
    var buttons = ev.buttons;
    setObserved("set button " + (0,_jacdac_ts_src_servers_hidmouseserver__WEBPACK_IMPORTED_MODULE_5__/* .renderHidMouseButtons */ .z)(buttons) + " down");
  };

  var handleMouseUp = function handleMouseUp(ev) {
    var buttons = ev.buttons;
    setObserved("set button " + (0,_jacdac_ts_src_servers_hidmouseserver__WEBPACK_IMPORTED_MODULE_5__/* .renderHidMouseButtons */ .z)(buttons) + " up");
  };

  var handleKeyDown = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(ev) {
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              ev.stopPropagation();
              ev.preventDefault();
              key = ev.key;
              _context4.t0 = key;
              _context4.next = _context4.t0 === "l" ? 6 : _context4.t0 === "r" ? 8 : _context4.t0 === "m" ? 10 : _context4.t0 === "ArrowRight" ? 12 : _context4.t0 === "ArrowLeft" ? 14 : _context4.t0 === "ArrowUp" ? 16 : _context4.t0 === "ArrowDown" ? 18 : _context4.t0 === "w" ? 20 : _context4.t0 === "s" ? 22 : 24;
              break;

            case 6:
              sendButton(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidMouseButton.Left */ .chA.Left, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidMouseButtonEvent.Click */ .A9D.Click);
              return _context4.abrupt("break", 24);

            case 8:
              sendButton(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidMouseButton.Right */ .chA.Right, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidMouseButtonEvent.Click */ .A9D.Click);
              return _context4.abrupt("break", 24);

            case 10:
              sendButton(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidMouseButton.Middle */ .chA.Middle, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidMouseButtonEvent.Click */ .A9D.Click);
              return _context4.abrupt("break", 24);

            case 12:
              sendMove(10, 0);
              return _context4.abrupt("break", 24);

            case 14:
              sendMove(-10, 0);
              return _context4.abrupt("break", 24);

            case 16:
              sendMove(0, -10);
              return _context4.abrupt("break", 24);

            case 18:
              sendMove(0, 10);
              return _context4.abrupt("break", 24);

            case 20:
              sendWheel(-10);
              return _context4.abrupt("break", 24);

            case 22:
              sendWheel(10);
              return _context4.abrupt("break", 24);

            case 24:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleKeyDown(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("pre", {
    className: classes.capture,
    tabIndex: 0,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onKeyDown: handleKeyDown
  }, value || "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    variant: "caption"
  }, "focus and type l(eft), r(ight), m(iddle) for buttons, arrow keys to move, w(heel up), d(wheel down) for the wheel")), preview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    variant: "caption",
    component: "pre"
  }, "mouse preview: ", preview || "...")));
}

/***/ })

}]);