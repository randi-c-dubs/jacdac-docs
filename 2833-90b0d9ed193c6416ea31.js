"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2833],{

/***/ 31186:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var CardActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

/***/ 13508:
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
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');

exports.Z = _default;

/***/ }),

/***/ 72833:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniqueServiceId": function() { return /* binding */ uniqueServiceId; },
/* harmony export */   "uniqueDeviceId": function() { return /* binding */ uniqueDeviceId; },
/* harmony export */   "uniqueFirmwareId": function() { return /* binding */ uniqueFirmwareId; },
/* harmony export */   "default": function() { return /* binding */ RandomGenerator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15343);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13508);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95453);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42862);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19640);
/* harmony import */ var _jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80303);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81794);




 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports








function looksRandom(n) {
  var s = n.toString(16);
  var h = "0123456789abcdef";

  for (var i = 0; i < h.length; ++i) {
    var hh = h[i];
    if (s.indexOf(hh + hh + hh) >= 0) return false;
  }

  if (/f00d|dead|deaf|beef/.test(s)) return false;
  return true;
}

function genServId() {
  var n = (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_6__/* .cryptoRandomUint32 */ .dG)(1);
  if (n === undefined) return undefined;
  return n[0] & 0xfffffff | 0x10000000;
}

function genFirmwareId() {
  var n = (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_6__/* .cryptoRandomUint32 */ .dG)(1);
  if (n === undefined) return undefined;
  return n[0] & 0xfffffff | 0x30000000;
}

function uniqueServiceId() {
  var id = genServId();

  while (id !== undefined && (!looksRandom(id) || (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(id))) {
    id = genServId();
  }

  return id !== undefined && (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .toFullHex */ .$3)([id]);
}
function uniqueDeviceId() {
  var n = (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_6__/* .cryptoRandomUint32 */ .dG)(2);
  return n !== undefined && (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .toFullHex */ .$3)([n[0], n[1]]);
}
function uniqueFirmwareId() {
  var id = genFirmwareId();

  while (id !== undefined && (!looksRandom(id) || (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .deviceSpecificationFromProductIdentifier */ .Ht)(id))) {
    id = genFirmwareId();
  }

  return id !== undefined && (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .toFullHex */ .$3)([id]);
}
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)({
  root: {
    minWidth: 275,
    marginBottom: "1rem"
  },
  title: {
    fontSize: 14
  }
}));
function RandomGenerator(props) {
  var device = props.device,
      firmware = props.firmware;
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .Me)();
  var fieldId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .Me)();
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(device ? uniqueDeviceId() : uniqueServiceId()),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      copySuccess = _useState2[0],
      setCopySuccess = _useState2[1];

  var handleRegenerate = function handleRegenerate() {
    var v = device ? uniqueDeviceId() : firmware ? uniqueFirmwareId() : uniqueServiceId();
    setValue(v);
    setCopySuccess(false);
  };

  var handleCopy = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return navigator.clipboard.writeText(value);

            case 3:
              setCopySuccess(true);
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              setCopySuccess(false);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function handleCopy() {
      return _ref.apply(this, arguments);
    };
  }();

  var title = device ? "Random Device Identifier" : firmware ? "Random Product Identifier" : "Random Service Identifier";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    id: labelId,
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true
  }, title), value !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    variant: "h5",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    id: fieldId,
    value: value,
    readOnly: true,
    inputProps: {
      "aria-labelledby": labelId
    }
  }), copySuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, null)), value === undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    severity: "error"
  }, "Oops, unable to generate a strong random number.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
    "aria-label": "copy random number to clipboard",
    size: "small",
    variant: "contained",
    onClick: handleCopy
  }, "Copy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
    "aria-label": "regenerate random number",
    size: "small",
    variant: "contained",
    color: "primary",
    onClick: handleRegenerate
  }, "Regenerate"))));
}

/***/ })

}]);