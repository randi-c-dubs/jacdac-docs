"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9231],{

/***/ 88880:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

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

/***/ 27498:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AddServiceIconButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45650);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65541);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80453);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88880);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79885);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19640);


 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports



function AddServiceIconButton(props) {
  var error = props.error,
      onAdd = props.onAdd,
      children = props.children,
      serviceFilter = props.serviceFilter;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      servicesAnchorEl = _React$useState[0],
      setServicesAnchorEl = _React$useState[1];

  var servicesMenuId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_3__/* .useId */ .Me)();
  var services = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(function (srv) {
      return !(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isInfrastructure */ .lz)(srv);
    }).filter(function (srv) {
      return !serviceFilter || serviceFilter(srv);
    });
  }, [serviceFilter]);

  var handleServiceAddClick = function handleServiceAddClick(event) {
    setServicesAnchorEl(event.currentTarget);
  };

  var handleServiceAddClose = function handleServiceAddClose(id) {
    return function () {
      setServicesAnchorEl(null);

      if (id !== undefined) {
        var srv = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(id);
        onAdd(srv);
      }
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    title: "Add a service",
    "aria-controls": servicesMenuId,
    "aria-haspopup": "true",
    onClick: handleServiceAddClick
  }, children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    id: servicesMenuId,
    anchorEl: servicesAnchorEl,
    keepMounted: true,
    open: Boolean(servicesAnchorEl),
    onClose: handleServiceAddClose(undefined)
  }, services.map(function (srv) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      key: srv.classIdentifier,
      value: srv.classIdentifier.toString(16),
      onClick: handleServiceAddClose(srv.classIdentifier)
    }, srv.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    variant: "caption",
    color: error ? "error" : "inherit",
    component: "div"
  }, error || "Select one or more services."));
}

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

/***/ }),

/***/ 79739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PaperBox; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12265);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59355);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58063);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["children", "padding", "elevation", "bgcolor"];


function PaperBox(props) {
  var children = props.children,
      padding = props.padding,
      elevation = props.elevation,
      bgcolor = props.bgcolor,
      others = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, Object.assign({}, others, {
    bgcolor: bgcolor,
    mb: theme.spacing(0.25)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    square: true,
    elevation: elevation
  }, padding !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    p: theme.spacing(padding || 0.25)
  }, children), padding === 0 && children));
}

/***/ }),

/***/ 50151:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DeviceRegistration; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(42656);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link = __webpack_require__(94850);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__(34093);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(33287);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/Menu.js + 2 modules
var Menu = __webpack_require__(45650);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(65541);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(79739);
// EXTERNAL MODULE: ./src/components/RandomGenerator.tsx
var RandomGenerator = __webpack_require__(72833);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Create.js
var Create = __webpack_require__(91814);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./src/components/github.ts + 2 modules
var github = __webpack_require__(99819);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(27490);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
;// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js





var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      // Create a "on paper" color with sufficient contrast retaining the color
      backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, theme.palette.type === 'light' ? 0.11 : 0.13),
      height: '1.2em'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      marginTop: 0,
      marginBottom: 0,
      height: 'auto',
      transformOrigin: '0 60%',
      transform: 'scale(1, 0.60)',
      borderRadius: theme.shape.borderRadius,
      '&:empty:before': {
        content: '"\\00a0"'
      }
    },

    /* Styles applied to the root element if `variant="rect"`. */
    rect: {},

    /* Styles applied to the root element if `variant="circle"`. */
    circle: {
      borderRadius: '50%'
    },

    /* Styles applied to the root element if `animation="pulse"`. */
    pulse: {
      animation: '$pulse 1.5s ease-in-out 0.5s infinite'
    },
    '@keyframes pulse': {
      '0%': {
        opacity: 1
      },
      '50%': {
        opacity: 0.4
      },
      '100%': {
        opacity: 1
      }
    },

    /* Styles applied to the root element if `animation="wave"`. */
    wave: {
      position: 'relative',
      overflow: 'hidden',
      '&::after': {
        animation: '$wave 1.6s linear 0.5s infinite',
        background: "linear-gradient(90deg, transparent, ".concat(theme.palette.action.hover, ", transparent)"),
        content: '""',
        position: 'absolute',
        transform: 'translateX(-100%)',
        // Avoid flash during server-side hydration
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
      }
    },
    '@keyframes wave': {
      '0%': {
        transform: 'translateX(-100%)'
      },
      '60%': {
        // +0.5s of delay between each loop
        transform: 'translateX(100%)'
      },
      '100%': {
        transform: 'translateX(100%)'
      }
    },

    /* Styles applied when the component is passed children. */
    withChildren: {
      '& > *': {
        visibility: 'hidden'
      }
    },

    /* Styles applied when the component is passed children and no width. */
    fitContent: {
      maxWidth: 'fit-content'
    },

    /* Styles applied when the component is passed children and no height. */
    heightAuto: {
      height: 'auto'
    }
  };
};
var Skeleton = /*#__PURE__*/react.forwardRef(function Skeleton(props, ref) {
  var _props$animation = props.animation,
      animation = _props$animation === void 0 ? 'pulse' : _props$animation,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'span' : _props$component,
      height = props.height,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      width = props.width,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["animation", "classes", "className", "component", "height", "variant", "width"]);

  var hasChildren = Boolean(other.children);
  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    ref: ref,
    className: (0,clsx_m/* default */.Z)(classes.root, classes[variant], className, hasChildren && [classes.withChildren, !width && classes.fitContent, !height && classes.heightAuto], animation !== false && classes[animation])
  }, other, {
    style: (0,esm_extends/* default */.Z)({
      width: width,
      height: height
    }, other.style)
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Skeleton_Skeleton = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiSkeleton'
})(Skeleton));
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
;// CONCATENATED MODULE: ./src/components/useBlobCanvas.ts





function readBlobToCanvas(blob, width, height) {
  return new Promise(function (resolve, reject) {
    var url = URL.createObjectURL(blob);
    var img = new Image();

    img.onload = function () {
      URL.revokeObjectURL(url);
      var cvs = document.createElement("canvas");
      cvs.width = width;
      cvs.height = height;
      var ctx = cvs.getContext("2d"); // compute center of image to be copied into canvas

      var cw = cvs.width;
      var ch = cvs.height;
      var car = cw / ch;
      var iw = img.width;
      var ih = img.height;
      var iar = iw / ih;
      var sx = 0,
          sy = 0,
          sw = iw,
          sh = ih;

      if (iar < car) {
        // image is wider, clip sides
        var dw = iw - cw;
        sx = dw >> 1;
        sw = iw - dw;
      } else {
        // klip top
        var dh = ih - ch;
        sy = dh >> 1;
        sh = ih - dh;
      }

      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch); // done

      resolve(cvs);
    };

    img.onerror = function () {
      // error
      URL.revokeObjectURL(url);
      reject(undefined);
    };

    img.src = url;
  });
}

function useBlobCanvas(blob, width, height) {
  var _useState = (0,react.useState)(undefined),
      canvas = _useState[0],
      setCanvas = _useState[1];

  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var cvs;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (blob) {
              _context.next = 4;
              break;
            }

            setCanvas(undefined);
            _context.next = 14;
            break;

          case 4:
            _context.prev = 4;
            _context.next = 7;
            return readBlobToCanvas(blob, width, height);

          case 7:
            cvs = _context.sent;
            setCanvas(cvs);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            setCanvas(undefined);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  })), [blob, width, height]);
  return canvas;
}
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
;// CONCATENATED MODULE: ./src/components/ImageImportCanvas.tsx







var ImportButton = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(__webpack_require__, 20119));
});
var useStyles = (0,makeStyles/* default */.Z)(function (theme) {
  return (0,createStyles/* default */.Z)({
    root: {
      position: "relative"
    },
    img: {
      margin: "auto",
      display: "block",
      width: "100%"
    },
    btn: {
      position: "absolute",
      borderRadius: "6rem",
      left: "calc(50% - 2rem)",
      top: "calc(50% - 2rem)",
      background: theme.palette.background.paper
    }
  });
});
function ImportImageCanvas(props) {
  var width = props.width,
      height = props.height,
      onImageImported = props.onImageImported;

  var _useState = (0,react.useState)(undefined),
      imageBlob = _useState[0],
      setImageBlob = _useState[1];

  var canvas = useBlobCanvas(imageBlob, width, height);
  var canvasUrl = (0,react.useMemo)(function () {
    return canvas === null || canvas === void 0 ? void 0 : canvas.toDataURL("image/png");
  }, [canvas]);
  var classes = useStyles();

  var handleFilesUploaded = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(files) {
      var file;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = files[0];
              setImageBlob(file);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleFilesUploaded(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // notify of new canvas


  (0,react.useEffect)(function () {
    return canvas && onImageImported(canvas);
  }, [canvas]);
  return /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.img
  }, !canvasUrl && /*#__PURE__*/react.createElement(Skeleton_Skeleton, {
    variant: "rect",
    width: "100%",
    height: "18rem"
  }), canvasUrl && /*#__PURE__*/react.createElement("img", {
    alt: "preview",
    src: canvasUrl,
    width: "100%",
    height: "100%"
  })), /*#__PURE__*/react.createElement(Box/* default */.Z, {
    className: classes.btn
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ImportButton, {
    icon: true,
    text: "Import 4:3 image",
    onFilesUploaded: handleFilesUploaded,
    acceptedFiles: ["image/jpeg", "image/png"]
  }))));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js + 2 modules
var Autocomplete = __webpack_require__(63393);
// EXTERNAL MODULE: ./src/components/firmware/useFirmwareBlobs.ts + 1 modules
var useFirmwareBlobs = __webpack_require__(29394);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/AddServiceIconButton.tsx
var AddServiceIconButton = __webpack_require__(27498);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(53074);
// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(31477);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(73512);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
;// CONCATENATED MODULE: ./src/pages/tools/device-registration.tsx









 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports





 // tslint:disable-next-line: no-submodule-imports











var GithubPullRequestButton = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 22632));
});

function CompanySelect(props) {
  var onValueChange = props.onValueChange,
      value = props.value,
      error = props.error;

  var _useState = (0,react.useState)(value),
      company = _useState[0],
      setCompany = _useState[1];

  var companies = (0,react.useMemo)(function () {
    return (0,utils/* unique */.Tw)((0,spec/* deviceSpecifications */.qx)().map(function (dev) {
      return dev.company;
    }));
  }, []);
  var companyId = (0,react_use_id_hook_esm/* useId */.Me)();
  var helperText = "Name of the company manufacturing this device. The company name will be used to generate the module identifier.";

  var handleChange = function handleChange(ev, newValue) {
    setCompany(newValue);
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
  };

  var renderInputs = function renderInputs(params) {
    return /*#__PURE__*/react.createElement(TextField/* default */.Z, Object.assign({}, params, {
      error: !!error,
      label: "Company",
      helperText: error || helperText,
      variant: "outlined"
    }));
  };

  return /*#__PURE__*/react.createElement(Autocomplete/* default */.ZP, {
    id: companyId,
    freeSolo: true,
    fullWidth: true,
    includeInputInList: true,
    autoComplete: true,
    options: companies,
    renderInput: renderInputs,
    inputValue: company,
    "aria-label": helperText,
    onInputChange: handleChange
  });
}

function DeviceRegistration() {
  var _device$name, _device$services, _device$id, _device$productIdenti, _device$services2, _ref2;

  var _useLocalStorage = (0,useLocalStorage/* default */.Z)("jacdac:devicedesigner;2", {
    id: "my-device",
    name: "My device",
    services: [],
    productIdentifiers: [],
    repo: ""
  }),
      device = _useLocalStorage[0],
      setDevice = _useLocalStorage[1];

  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();
  var devices = (0,useDevices/* default */.Z)({
    announced: true,
    physical: true,
    ignoreSelf: true,
    productIdentifier: true
  });

  var updateDevice = function updateDevice() {
    setDevice((0,utils/* clone */.d9)(device));
  };

  var _React$useState = react.useState(null),
      firmwaresAnchorEl = _React$useState[0],
      setFirmwaresAnchorEl = _React$useState[1];

  var _useState2 = (0,react.useState)(undefined),
      imageBase64 = _useState2[0],
      setImageBase64 = _useState2[1];

  var nameId = (0,react_use_id_hook_esm/* useId */.Me)();
  var firmwareMenuId = (0,react_use_id_hook_esm/* useId */.Me)();
  var repoId = (0,react_use_id_hook_esm/* useId */.Me)();
  var identifierId = (0,react_use_id_hook_esm/* useId */.Me)();
  var descriptionId = (0,react_use_id_hook_esm/* useId */.Me)();
  var homepageId = (0,react_use_id_hook_esm/* useId */.Me)();

  var handleServiceAdd = function handleServiceAdd(srv) {
    console.log("add", srv.classIdentifier);
    device.services.push(srv.classIdentifier);
    updateDevice();
  };

  var companyRepos = (0,react.useMemo)(function () {
    return (0,utils/* unique */.Tw)((0,spec/* deviceSpecifications */.qx)().filter(function (d) {
      return d.company === device.company;
    }).map(function (d) {
      return d.repo;
    }).filter(function (repo) {
      return !!repo;
    }));
  }, [device === null || device === void 0 ? void 0 : device.company]);

  var _useFirmwareBlob = (0,useFirmwareBlobs/* useFirmwareBlob */.x)(device.repo),
      firmwareBlobs = _useFirmwareBlob.firmwareBlobs;

  var variant = "outlined";
  var companyError = !device.company ? "select a company" : "";
  var nameError = ((_device$name = device.name) === null || _device$name === void 0 ? void 0 : _device$name.length) > 32 ? "name too long" : undefined;
  var parsedRepo = (0,github/* parseRepoUrl */.Jo)(device.repo);
  var githubError = parsedRepo ? "" : "invalid GitHub repository";
  var linkError = !device.link || /^https:\/\//.test(device.link) ? "" : "Must be https://...";
  var idError = !device.id ? "missing identifier" : (0,spec/* deviceSpecifications */.qx)().find(function (dev) {
    return dev.id == device.id;
  }) ? "identifer already used" : "";
  var servicesError = (_device$services = device.services) !== null && _device$services !== void 0 && _device$services.length ? "" : "Select at least one service";
  var imageError = !imageBase64 ? "missing image" : "";
  var ok = !nameError && parsedRepo && !linkError && !idError && !servicesError && !imageError && !companyError;
  var route = (_device$id = device.id) === null || _device$id === void 0 ? void 0 : _device$id.split("-").join("/");
  var modulePath = ok && "devices/" + route + ".json";
  var imagePath = ok && "devices/" + route + ".jpg";

  var updateDeviceId = function updateDeviceId() {
    var companyid = (0,jdspec/* escapeDeviceIdentifier */.o9)(device.company);
    var nameid = (0,jdspec/* escapeDeviceNameIdentifier */.qh)(device.name);
    device.id = companyid + "-" + nameid;
  };

  var handleNameChange = function handleNameChange(ev) {
    device.name = ev.target.value;
    updateDeviceId();
    updateDevice();
  };

  var handleRepoChange = function handleRepoChange(ev, newValue) {
    console.log("new repo", {
      newValue: newValue
    });
    device.repo = newValue;
    updateDevice();
  };

  var handleLinkChange = function handleLinkChange(ev) {
    device.link = ev.target.value;
    updateDevice();
  };

  var handleDescriptionChange = function handleDescriptionChange(ev) {
    device.description = ev.target.value;
    updateDevice();
  };

  var handleDeleteService = function handleDeleteService(i) {
    return function () {
      device.services.splice(i, 1);
      updateDevice();
    };
  };

  var handleDeleteFirmware = function handleDeleteFirmware(i) {
    return function () {
      device.productIdentifiers.splice(i, 1);
      updateDevice();
    };
  };

  var handleFirmwareAddClick = function handleFirmwareAddClick(event) {
    setFirmwaresAnchorEl(event.currentTarget); // device.firmwares.push(parseInt(uniqueFirmwareId(), 16))

    updateDevice();
  };

  var handleProductIdentifierAddRandomClick = function handleProductIdentifierAddRandomClick() {
    device.productIdentifiers.push(parseInt((0,RandomGenerator.uniqueFirmwareId)(), 16));
    updateDevice();
  };

  var handleFirmwareAddClose = function handleFirmwareAddClose(blob) {
    return function () {
      setFirmwaresAnchorEl(null);
      var id = blob === null || blob === void 0 ? void 0 : blob.productIdentifier;

      if (id !== undefined) {
        device.productIdentifiers.push(id);
        device.name = blob.name;
        updateDeviceId();
        updateDevice();
      }
    };
  };

  var handleImageImported = function handleImageImported(cvs) {
    var url = cvs.toDataURL("image/jpeg", 99);
    setImageBase64(url.slice(url.indexOf(",")));
  };

  var handleCompanyChanged = function handleCompanyChanged(value) {
    device.company = value;
    updateDeviceId();
    updateDevice();
  };

  var renderRepoInput = function renderRepoInput(params) {
    return /*#__PURE__*/react.createElement(TextField/* default */.Z, Object.assign({}, params, {
      error: !!githubError,
      type: "url",
      label: "Firmware repository *",
      helperText: githubError || "GitHub Repository hosting the firmware binaries.",
      variant: "outlined"
    }));
  };

  var handleImportDevice = function handleImportDevice(dev) {
    return /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var controlService, descrReg, urlReg, fw;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              controlService = dev.service(0);
              descrReg = controlService.register(specconstants/* ControlReg.DeviceDescription */.toU.DeviceDescription);
              _context.next = 4;
              return descrReg.refresh(true);

            case 4:
              urlReg = controlService.register(specconstants/* ControlReg.DeviceUrl */.toU.DeviceUrl);
              _context.next = 7;
              return urlReg.refresh(true);

            case 7:
              _context.next = 9;
              return dev.resolveProductIdentifier();

            case 9:
              fw = _context.sent;
              if (fw) device.productIdentifiers = [fw];
              device.services = dev.serviceClasses.slice(1);
              device.description = descrReg.stringValue;
              device.link = urlReg.stringValue;
              updateDevice();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Device Registration"), /*#__PURE__*/react.createElement("p", null, "Compose a device from various services, prepare the metadata and register it to the ", /*#__PURE__*/react.createElement(Link/* default */.Z, {
    href: "/devices/"
  }, "Devices catalog"), "."), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "row",
    spacing: 2
  }, devices.map(function (dev) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
      item: true,
      key: dev.id
    }, gridBreakpoints), /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z, {
      device: dev
    }), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
      variant: "outlined",
      onClick: handleImportDevice(dev)
    }, "Import"))));
  }), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: nameId,
    required: true,
    error: !!nameError,
    helperText: nameError,
    fullWidth: true,
    label: "Name",
    placeholder: "My module",
    value: device.name || "",
    onChange: handleNameChange,
    variant: variant
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Autocomplete/* default */.ZP, {
    id: repoId,
    freeSolo: true,
    autoComplete: true,
    placeholder: "https://github.com/...",
    inputValue: device.repo || "",
    onInputChange: handleRepoChange,
    options: companyRepos,
    renderInput: renderRepoInput
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(CompanySelect, {
    value: device === null || device === void 0 ? void 0 : device.company,
    error: companyError,
    onValueChange: handleCompanyChanged
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(PaperBox/* default */.Z, {
    elevation: 1
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, null, "Product Identifiers"), (_device$productIdenti = device.productIdentifiers) === null || _device$productIdenti === void 0 ? void 0 : _device$productIdenti.map(function (id, i) {
    var blob = firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs.find(function (b) {
      return b.productIdentifier == id;
    });
    return /*#__PURE__*/react.createElement(Box/* default */.Z, {
      component: "span",
      ml: 0.5,
      mb: 0.5,
      key: id
    }, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      label: blob ? blob.name + " (0x" + id.toString(16) + ")" : "0x" + id.toString(16),
      onDelete: handleDeleteFirmware(i)
    }));
  }), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "Add random product identifier",
    onClick: handleProductIdentifierAddRandomClick
  }, /*#__PURE__*/react.createElement(Create/* default */.Z, null)), firmwareBlobs && /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "Add product identifier from repository",
    "aria-controls": firmwareMenuId,
    "aria-haspopup": "true",
    onClick: handleFirmwareAddClick
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null)), /*#__PURE__*/react.createElement(Menu/* default */.Z, {
    id: firmwareMenuId,
    anchorEl: firmwaresAnchorEl,
    keepMounted: true,
    open: Boolean(firmwaresAnchorEl),
    onClose: handleFirmwareAddClose(undefined)
  }, firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs.map(function (blob) {
    return /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
      key: blob.productIdentifier,
      value: blob.productIdentifier.toString(16),
      onClick: handleFirmwareAddClose(blob)
    }, blob.name, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "caption",
      component: "span"
    }, blob.version));
  })), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption",
    component: "div"
  }, "Product identifiers uniquely identify your hardware on the Jacdac bus. Each revision of your hardware may have a different identifier."))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(PaperBox/* default */.Z, {
    elevation: 1
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    color: servicesError ? "error" : "inherit"
  }, "Services *"), (_device$services2 = device.services) === null || _device$services2 === void 0 ? void 0 : _device$services2.map(function (id, i) {
    var _serviceSpecification;

    return /*#__PURE__*/react.createElement(Box/* default */.Z, {
      component: "span",
      m: 0.5,
      key: id
    }, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      label: ((_serviceSpecification = (0,spec/* serviceSpecificationFromClassIdentifier */.d5)(id)) === null || _serviceSpecification === void 0 ? void 0 : _serviceSpecification.name) || id,
      onDelete: handleDeleteService(i)
    }));
  }), /*#__PURE__*/react.createElement(AddServiceIconButton/* default */.Z, {
    onAdd: handleServiceAdd
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: identifierId,
    disabled: true,
    error: !!idError,
    fullWidth: true,
    label: "Identifier",
    helperText: "This generated identifer is a URL friendly string created from your company and product name.",
    variant: variant,
    value: device.id || ""
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: descriptionId,
    fullWidth: true,
    required: true,
    label: "Description",
    multiline: true,
    rows: 4,
    value: device.description || "",
    onChange: handleDescriptionChange,
    variant: variant
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: homepageId,
    label: "Home page url",
    error: !!linkError,
    helperText: linkError,
    fullWidth: true,
    placeholder: "https://...",
    value: device.link || "",
    onChange: handleLinkChange,
    variant: variant,
    type: "url"
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement(Typography/* default */.Z, null, "Catalog image"), /*#__PURE__*/react.createElement(ImportImageCanvas, {
    width: jdspec/* DEVICE_IMAGE_WIDTH */.AE,
    height: jdspec/* DEVICE_IMAGE_HEIGHT */.CO,
    onImageImported: handleImageImported
  }), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption",
    component: "div"
  }, "Import a " + jdspec/* DEVICE_IMAGE_WIDTH */.AE + "x" + jdspec/* DEVICE_IMAGE_HEIGHT */.CO + " image of the device."), imageError && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, imageError))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(GithubPullRequestButton, {
    label: "register device",
    title: "Device: " + device.name,
    head: "devices/" + device.id,
    description: "This pull request registers a new device for Jacdac.",
    files: modulePath && (_ref2 = {}, _ref2[modulePath] = JSON.stringify((0,jdspec/* normalizeDeviceSpecification */.dj)(device), null, 2), _ref2[imagePath] = {
      content: imageBase64,
      encoding: "base64"
    }, _ref2)
  })))));
}

/***/ })

}]);