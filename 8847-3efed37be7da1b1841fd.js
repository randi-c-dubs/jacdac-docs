"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8847],{

/***/ 18847:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardTrafficLight; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48059);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49013);
/* harmony import */ var _widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8584);
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30833);
/* harmony import */ var _hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68786);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82677);












var m = 2;
var r = 8;
var ri = 7;
var w = 2 * r + 2 * m;
var h = 4 * w + 2 * m;
var cx = w / 2;
var sw = 2;

function TrafficLight(props) {
  var cx = props.cx,
      cy = props.cy,
      fill = props.fill,
      background = props.background,
      label = props.label,
      onDown = props.onDown;
  var buttonProps = (0,_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(label, onDown);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: background,
    stroke: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", Object.assign({
    cx: cx,
    cy: cy,
    r: ri,
    fill: fill,
    strokeWidth: sw
  }, buttonProps)));
}

function DashboardTrafficLight(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var widgetRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var redRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .TrafficLightReg.Red */ .r6v.Red);
  var orangeRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .TrafficLightReg.Orange */ .r6v.Orange);
  var greenRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .TrafficLightReg.Green */ .r6v.Green);
  var red = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterBoolValue */ .I8)(redRegister, props);
  var orange = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterBoolValue */ .I8)(orangeRegister, props);
  var green = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterBoolValue */ .I8)(greenRegister, props);
  var lightRegs = [_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .TrafficLightReg.Red */ .r6v.Red, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .TrafficLightReg.Orange */ .r6v.Orange, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .TrafficLightReg.Green */ .r6v.Green];
  var lights = [red, orange, green];
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  var widgetSize = (0,_widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(variant, services === null || services === void 0 ? void 0 : services.length);
  var cy = 0;
  var names = ["red", "yellow", "green"];
  var colors = ["red", "orange", "green"];
  var navProps = (0,_hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(widgetRef.current);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    width: w,
    height: h,
    size: widgetSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", Object.assign({
    ref: widgetRef
  }, navProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: h,
    rx: m,
    fill: background
  }), lights.map(function (v, i) {
    cy += m + 2 * r;
    var fill = v ? colors[i] : controlBackground;

    var onDown = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var reg;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reg = service.register(lightRegs[i]);
                _context.next = 3;
                return reg.sendSetBoolAsync(!v, true);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function onDown() {
        return _ref.apply(this, arguments);
      };
    }();

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(TrafficLight, {
      key: i,
      cx: cx,
      cy: cy,
      background: background,
      fill: fill,
      onDown: onDown,
      label: names[i] + " " + (v ? "on" : "off")
    });
  })));
}

/***/ }),

/***/ 68786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useKeyboardNavigationProps; }
});

// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__(8966);
;// CONCATENATED MODULE: ./src/components/hooks/useArrowKeys.ts

var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
function useArrowKeys(options) {
  var _handlers;

  var onLeft = options.onLeft,
      onUp = options.onUp,
      onRight = options.onRight,
      onDown = options.onDown,
      symmetric = options.symmetric;
  if (!onLeft && !onUp && !onRight && !onDown) return undefined;
  var handlers = (_handlers = {}, _handlers[LEFT_KEY] = onLeft, _handlers[RIGHT_KEY] = onRight, _handlers[UP_KEY] = onUp || symmetric && onRight, _handlers[DOWN_KEY] = onDown || symmetric && onLeft, _handlers);
  return function (e) {
    var charCode = (0,useFireKey/* keyCodeFromEvent */.$)(e);
    var handler = handlers[charCode];

    if (handler) {
      e.preventDefault();
      handler();
    }
  };
}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigation.ts
function useKeyboardNavigation(parentRef) {
  var query = '[tabindex="0"]';

  var onMove = function onMove(offset) {
    return function () {
      console.log('keyboard move', {
        offset: offset
      });
      var focusable = Array.from((parentRef === null || parentRef === void 0 ? void 0 : parentRef.querySelectorAll(query)) || []);

      if (focusable.length) {
        var me = focusable.findIndex(function (f) {
          return f === document.activeElement;
        });
        var next = (me + offset + focusable.length) % focusable.length;
        focusable[next].focus();
      }
    };
  };

  return onMove;
}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts


function useKeyboardNavigationProps(parentRef, vertical) {
  var onMove = useKeyboardNavigation(parentRef);
  var onKeyDown = useArrowKeys({
    onLeft: !vertical && onMove(-1),
    onRight: !vertical && onMove(1),
    onDown: vertical && onMove(1),
    onUp: vertical && onMove(-1)
  });
  return {
    onKeyDown: parentRef && onKeyDown
  };
}

/***/ })

}]);