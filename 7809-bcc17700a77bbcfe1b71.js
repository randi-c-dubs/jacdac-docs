"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7809],{

/***/ 77809:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardJoystick; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49013);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89196);
/* harmony import */ var _jacdac_ts_src_servers_joystickserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26708);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71815);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48059);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30833);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2285);
/* harmony import */ var _hooks_useAnimationFrame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17368);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82677);


var _buttonLabels;













var buttonLabels = (_buttonLabels = {}, _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Left */ .xC.Left] = "\u25C4", _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Up */ .xC.Up] = "\u25B2", _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Down */ .xC.Down] = "\u25BC", _buttonLabels[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Right */ .xC.Right] = "\u25BA", _buttonLabels);

function decay(value, rate, precision) {
  var nv = value * rate;
  if (Math.abs(nv) < precision) nv = 0;
  return nv;
}

function JoystickWidget(props) {
  var service = props.service;
  var register = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickReg.Direction */ .ztd.Direction);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(register, props),
      x = _useRegisterUnpackedV[1],
      y = _useRegisterUnpackedV[2];

  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var hostValues = function hostValues() {
    var _server$reading$value = server.reading.values(),
        x = _server$reading$value[1],
        y = _server$reading$value[2];

    return [x, y];
  };

  var onUpdate = function onUpdate(newx, newy) {
    var _server$reading$value2 = server.reading.values(),
        buttons = _server$reading$value2[0];

    server.reading.setValues([buttons, newx, newy]);
    register.refresh();
  };

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(color),
      active = _useWidgetTheme.active,
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  var dragSurfaceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      grabbing = _useState[0],
      setGrabbing = _useState[1];

  var w = 40;
  var w2 = w >> 1;
  var cx = w2;
  var cy = w2;
  var rp = 2;
  var rc = 6;
  var rj = 10;
  var pw = 12;
  var ph = 8;
  var jx = cx + (x || 0) * rj;
  var jy = cy + (y || 0) * rj;
  var jw = 1;

  var updateJoystickDrag = function updateJoystickDrag(x, y) {
    var bounds = dragSurfaceRef.current.getBoundingClientRect();
    var dx = (x - bounds.left) * (w / bounds.width) - w2;
    var dy = (y - bounds.top) * (w / bounds.height) - w2;
    var angle = Math.atan2(dy, dx);
    var distance = Math.min(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)), rj) / rj;
    var newx = distance * Math.cos(angle);
    var newy = distance * Math.sin(angle);
    onUpdate(newx, newy);
  };

  var handlePointerDown = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ev) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ev.preventDefault();
              setGrabbing(true);
              updateJoystickDrag(ev.clientX, ev.clientY);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handlePointerDown(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handlePointerUp = function handlePointerUp(ev) {
    ev.preventDefault();
    setGrabbing(false);
  };

  var handlePointerMove = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ev) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ev.preventDefault();
              if (grabbing) updateJoystickDrag(ev.clientX, ev.clientY);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handlePointerMove(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,_hooks_useAnimationFrame__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(function () {
    if (!server || grabbing) return false; // let use do its thing

    var _hostValues = hostValues(),
        ax = _hostValues[0],
        ay = _hostValues[1];

    var nx = decay(ax, 0.9, 16);
    var ny = decay(ay, 0.9, 16); // async

    onUpdate(nx, ny);
    return nx !== 0 || ny !== 0;
  }, [server, grabbing]);
  var handleStyle = {
    cursor: grabbing ? "grabbing" : "grab"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
    ref: dragSurfaceRef,
    className: "joystick-background",
    cx: cx,
    cy: cy,
    r: "16",
    fill: background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
    className: "dpad-up",
    x: "16",
    y: "6",
    width: ph,
    height: pw,
    rx: rp,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
    className: "dpad-down",
    x: "16",
    y: "22",
    width: ph,
    height: pw,
    rx: rp,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
    className: "dpad-right",
    x: "22",
    y: "16",
    width: pw,
    height: ph,
    ry: rp,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
    className: "dpad-left",
    x: "6",
    y: "16",
    width: pw,
    height: ph,
    ry: rp,
    fill: controlBackground
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
    className: "dpad-center",
    cx: cx,
    cy: cy,
    r: rc,
    fill: controlBackground
  }), server ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
    className: "joystick-handle",
    cx: jx,
    cy: jy,
    r: rc,
    fill: background,
    stroke: active,
    strokeWidth: jw,
    tabIndex: 0,
    role: "button",
    "aria-label": "joystick handle",
    "arial-live": "polite",
    onPointerMove: handlePointerMove,
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    onPointerLeave: handlePointerUp,
    style: handleStyle
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
    className: "joystick-handle",
    cx: jx,
    cy: jy,
    r: rc,
    fill: background,
    stroke: active,
    strokeWidth: jw,
    "aria-label": "joystick handle"
  }));
}

function ArcadeButton(props) {
  var cx = props.cx,
      cy = props.cy,
      ro = props.ro,
      color = props.color,
      pressure = props.pressure,
      ri = props.ri,
      button = props.button,
      server = props.server,
      onRefresh = props.onRefresh;

  var _useWidgetTheme2 = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(color),
      textProps = _useWidgetTheme2.textProps,
      active = _useWidgetTheme2.active,
      background = _useWidgetTheme2.background,
      controlBackground = _useWidgetTheme2.controlBackground;

  var checked = (pressure || 0) > 0;
  var title = _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons */ .xC[button];
  var label = buttonLabels[button] || title[0];

  var handleDown = function handleDown() {
    server === null || server === void 0 ? void 0 : server.down(button); //, 0.7)

    onRefresh();
  };

  var handleUp = function handleUp() {
    server === null || server === void 0 ? void 0 : server.up(button);
    onRefresh();
  };

  var buttonProps = (0,_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)(title, handleDown, handleUp);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", {
    transform: "translate(" + cx + "," + cy + ")",
    "aria-label": "button " + title + " " + (checked ? "down" : "up")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
    cx: 0,
    cy: 0,
    r: ro,
    fill: background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", Object.assign({
    cx: 0,
    cy: 0,
    r: ri,
    fill: checked ? active : controlBackground
  }, buttonProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("text", Object.assign({
    cx: 0,
    cy: 0,
    fontSize: ri
  }, textProps), label));
}

function DashboardJoystick(props) {
  var service = props.service;
  var variantRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickReg.Variant */ .ztd.Variant);

  var _useRegisterUnpackedV2 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(variantRegister, props),
      variant = _useRegisterUnpackedV2[0];

  var buttonsAvailableRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickReg.ButtonsAvailable */ .ztd.ButtonsAvailable);

  var _useRegisterUnpackedV3 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(buttonsAvailableRegister, props),
      buttonsAvailable = _useRegisterUnpackedV3[0]; // if variant is not specific, infer from buttons


  if (variant === undefined) {
    if (buttonsAvailable & _jacdac_ts_src_servers_joystickserver__WEBPACK_IMPORTED_MODULE_4__/* .JOYSTICK_GAMEPAD_EXTRA_BUTTONS */ .Jx) variant = _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickVariant.Gamepad */ .BUi.Gamepad;else if (!buttonsAvailable || buttonsAvailable === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.A */ .xC.A) variant = _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickVariant.Thumb */ .BUi.Thumb;
  }

  var directionRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickReg.Direction */ .ztd.Direction);

  var _useRegisterUnpackedV4 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(directionRegister, props),
      buttons = _useRegisterUnpackedV4[0];

  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme3 = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(color),
      background = _useWidgetTheme3.background; // buttonsAvailable should be defined by now


  var analog = !(buttonsAvailable & _jacdac_ts_src_servers_joystickserver__WEBPACK_IMPORTED_MODULE_4__/* .JOYSTICK_DPAD_BUTTONS */ .ef);
  var hasButtons = !!(buttonsAvailable & ~_jacdac_ts_src_servers_joystickserver__WEBPACK_IMPORTED_MODULE_4__/* .JOYSTICK_DPAD_BUTTONS */ .ef);
  var w = 256;
  var h = 128;
  var cw = w / 12;
  var ch = h / 4;
  var ro = cw - 2;
  var ri = ro - 4;
  var sro = ro - 10;
  var sri = sro - 2;
  var scy = sro;
  var pos = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return [{
      id: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Left */ .xC.Left,
      cx: cw * 1.5,
      cy: 2 * ch,
      small: false
    }, {
      id: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Up */ .xC.Up,
      cx: cw * 3,
      cy: ch,
      small: false
    }, {
      id: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Right */ .xC.Right,
      cx: cw * 4.5,
      cy: 2 * ch,
      small: false
    }, {
      id: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Down */ .xC.Down,
      cx: cw * 3,
      cy: 3 * ch,
      small: false
    }, {
      id: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.A */ .xC.A,
      cx: cw * 10.5,
      cy: ch * 1.25,
      small: false
    }, {
      id: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.B */ .xC.B,
      cx: cw * 9.5,
      cy: ch * 2.75,
      small: false
    }, {
      id: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Menu */ .xC.Menu,
      cx: cw * 7,
      cy: scy,
      small: true
    }, {
      id: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Select */ .xC.Select,
      cx: cw * 6,
      cy: scy,
      small: true
    }, {
      id: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Exit */ .xC.Exit,
      cx: cw * 8,
      cy: scy,
      small: true
    }, {
      id: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_5__/* .JoystickButtons.Reset */ .xC.Reset,
      cx: cw * 9,
      cy: scy,
      small: true
    }].filter(function (p) {
      return !!(p.id & buttonsAvailable);
    });
  }, [buttonsAvailable]);

  var handleRefresh = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return directionRegister.refresh();

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleRefresh() {
      return _ref3.apply(this, arguments);
    };
  }();

  var abx = cw * 8 + 1;
  var aby = ch * 3 + 4;
  var abr = cw / 2;
  var abw = cw * 5 - 6;
  var padcx = 3 * cw;
  var padcy = 2 * ch;
  var padr = 2.6 * cw; // need button info

  if (buttonsAvailable === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    width: w,
    height: h
  }, !analog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
    cx: padcx,
    cy: padcy,
    r: padr,
    fill: "none",
    stroke: background,
    strokeWidth: 4
  }), analog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", {
    transform: "scale(" + padr / 16 + ") translate(" + -1.8 + "," + -1.8 + ")"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(JoystickWidget, props)), hasButtons && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
    transform: "rotate(-66, " + abx + ", " + aby + ")",
    x: abx,
    y: aby,
    rx: abr,
    ry: abr,
    width: abw,
    height: cw * 2.2,
    fill: "none",
    stroke: background,
    strokeWidth: 4
  }), pos.map(function (_ref4) {
    var id = _ref4.id,
        cx = _ref4.cx,
        cy = _ref4.cy,
        small = _ref4.small;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ArcadeButton, {
      key: id,
      cx: cx,
      cy: cy,
      ro: small ? sro : ro,
      ri: small ? sri : ri,
      button: id,
      server: server,
      onRefresh: handleRefresh,
      pressure: buttons & id ? 1 : 0,
      color: color
    });
  }));
}

/***/ })

}]);