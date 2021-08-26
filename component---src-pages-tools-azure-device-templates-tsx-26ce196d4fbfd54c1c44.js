"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1229],{

/***/ 74601:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Accordion_Accordion; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(27490);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(26311);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(71955);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(61415);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(79727);
;// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toArray.js




function _toArray(arr) {
  return (0,arrayWithHoles/* default */.Z)(arr) || (0,iterableToArray/* default */.Z)(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || (0,nonIterableRest/* default */.Z)();
}
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(74540);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(39055);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(58063);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(9866);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(12933);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js













var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        '&:before': {
          display: 'none'
        }
      },
      '&$expanded': {
        margin: '16px 0',
        '&:first-child': {
          marginTop: 0
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          opacity: 0
        }
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      '&:first-child': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      '&:last-child': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        // Fix a rendering issue on Edge
        '@supports (-ms-ime-align: auto)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {}
  };
};
var Accordion = /*#__PURE__*/react.forwardRef(function Accordion(props, ref) {
  var childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      expandedProp = props.expanded,
      onChange = props.onChange,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Collapse/* default */.Z : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);

  var _useControlled = (0,useControlled/* default */.Z)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  }),
      _useControlled2 = (0,slicedToArray/* default */.Z)(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var handleChange = react.useCallback(function (event) {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);

  var _React$Children$toArr = react.Children.toArray(childrenProp),
      _React$Children$toArr2 = _toArray(_React$Children$toArr),
      summary = _React$Children$toArr2[0],
      children = _React$Children$toArr2.slice(1);

  var contextValue = react.useMemo(function () {
    return {
      expanded: expanded,
      disabled: disabled,
      toggle: handleChange
    };
  }, [expanded, disabled, handleChange]);
  return /*#__PURE__*/react.createElement(Paper/* default */.Z, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref: ref,
    square: square
  }, other), /*#__PURE__*/react.createElement(AccordionContext/* default.Provider */.Z.Provider, {
    value: contextValue
  }, summary), /*#__PURE__*/react.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), /*#__PURE__*/react.createElement("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props['aria-controls'],
    role: "region"
  }, children)));
});
 false ? 0 : void 0;
/* harmony default export */ var Accordion_Accordion = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiAccordion'
})(Accordion));

/***/ }),

/***/ 9866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */

var AccordionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

if (false) {}

/* harmony default export */ __webpack_exports__["Z"] = (AccordionContext);

/***/ }),

/***/ 37171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);





var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      padding: theme.spacing(1, 2, 2)
    }
  };
};
var AccordionDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function AccordionDetails(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(styles, {
  name: 'MuiAccordionDetails'
})(AccordionDetails));

/***/ }),

/***/ 95371:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67055);
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23729);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34621);
/* harmony import */ var _Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9866);


/* eslint-disable jsx-a11y/aria-role */








var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: theme.spacing(0, 2),
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused, &$focusVisible': {
        backgroundColor: theme.palette.action.focus
      },
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    },

    /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {},

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focused: {},

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '&$expanded': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'rotate(180deg)'
      }
    }
  };
};
var AccordionSummary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function AccordionSummary(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      expandIcon = props.expandIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$IconButtonProp = props.IconButtonProps,
      IconButtonProps = _props$IconButtonProp === void 0 ? {} : _props$IconButtonProp,
      onClick = props.onClick,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "expandIcon", "focusVisibleClassName", "IconButtonProps", "onClick"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      _React$useContext$dis = _React$useContext.disabled,
      disabled = _React$useContext$dis === void 0 ? false : _React$useContext$dis,
      expanded = _React$useContext.expanded,
      toggle = _React$useContext.toggle;

  var handleChange = function handleChange(event) {
    if (toggle) {
      toggle(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    focusRipple: false,
    disableRipple: true,
    disabled: disabled,
    component: "div",
    "aria-expanded": expanded,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, className, disabled && classes.disabled, expanded && classes.expanded),
    focusVisibleClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.focusVisible, classes.focused, focusVisibleClassName),
    onClick: handleChange,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.content, expanded && classes.expanded)
  }, children), expandIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.expandIcon, expanded && classes.expanded),
    edge: "end",
    component: "div",
    tabIndex: null,
    role: null,
    "aria-hidden": true
  }, IconButtonProps), expandIcon));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(styles, {
  name: 'MuiAccordionSummary'
})(AccordionSummary));

/***/ }),

/***/ 41212:
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
  d: "M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'CheckCircleOutline');

exports.Z = _default;

/***/ }),

/***/ 2864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LM": function() { return /* binding */ DTDL_CONTEXT; },
/* harmony export */   "d_": function() { return /* binding */ objectSchema; },
/* harmony export */   "yP": function() { return /* binding */ arraySchema; },
/* harmony export */   "Jg": function() { return /* binding */ escapeName; },
/* harmony export */   "n": function() { return /* binding */ escapeDisplayName; }
/* harmony export */ });
/* unused harmony exports DTDL_REFERENCE_URL, DTDL_NAME, DTDLUnits */
/***
 *  DTDL specification: https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md.
 */

/**
 * @internal
 */
var DTDL_REFERENCE_URL = "https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md";
/**
 * @internal
 */

var DTDL_NAME = "Digital Twins Definition Language";
/**
 * @internal
 */

var DTDL_CONTEXT = ["dtmi:dtdl:context;2"]; // warps fields into an object

function objectSchema(schemas) {
  return {
    "@type": "Object",
    fields: schemas
  };
} // wraps a schema into an array

function arraySchema(schema) {
  return {
    "@type": "Array",
    elementSchema: schema
  };
}
function escapeName(name) {
  name = name.trim().replace(/[^a-zA-Z0-9_]/g, "_");
  if (!/^[a-zA-Z]/.test(name)) name = "a" + name;
  name = name[0].toLowerCase() + name.slice(1);
  return name.slice(0, 64);
}
function escapeDisplayName(name) {
  return name.slice(0, 64);
}
function DTDLUnits() {
  return ["metrePerSecondSquared", "centimetrePerSecondSquared", "gForce", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "radianPerSecondSquared", "radianPerSecond", "degreePerSecond", "revolutionPerSecond", "revolutionPerMinute", "squareMetre", "squareCentimetre", "squareMillimetre", "squareKilometre", "hectare", "squareFoot", "squareInch", "acre", "farad", "millifarad", "microfarad", "nanofarad", "picofarad", "ampere", "microampere", "milliampere", "bitPerSecond", "kibibitPerSecond", "mebibitPerSecond", "gibibitPerSecond", "tebibitPerSecond", "exbibitPerSecond", "zebibitPerSecond", "yobibitPerSecond", "bytePerSecond", "kibibytePerSecond", "mebibytePerSecond", "gibibytePerSecond", "tebibytePerSecond", "exbibytePerSecond", "zebibytePerSecond", "yobibytePerSecond", "bit", "kibibit", "mebibit", "gibibit", "tebibit", "exbibit", "zebibit", "yobibit", "byte", "kibibyte", "mebibyte", "gibibyte", "tebibyte", "exbibyte", "zebibyte", "yobibyte", "kilogramPerCubicMetre", "gramPerCubicMetre", "metre", "centimetre", "millimetre", "micrometre", "nanometre", "kilometre", "foot", "inch", "mile", "nauticalMile", "astronomicalUnit", "coulomb", "joule", "kilojoule", "megajoule", "gigajoule", "electronvolt", "megaelectronvolt", "kilowattHour", "newton", "pound", "ounce", "ton", "hertz", "kilohertz", "megahertz", "gigahertz", "kilogramPerCubicMetre", "gramPerCubicMetre", "lux", "footcandle", "henry", "millihenry", "microhenry", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "metre", "centimetre", "millimetre", "micrometre", "nanometre", "kilometre", "foot", "inch", "mile", "nauticalMile", "astronomicalUnit", "candelaPerSquareMetre", "watt", "microwatt", "milliwatt", "kilowatt", "megawatt", "gigawatt", "horsepower", "kilowattHourPerYear", "lumen", "candela", "weber", "maxwell", "tesla", "kilogram", "gram", "milligram", "microgram", "tonne", "slug", "gramPerSecond", "kilogramPerSecond", "gramPerHour", "kilogramPerHour", "watt", "microwatt", "milliwatt", "kilowatt", "megawatt", "gigawatt", "horsepower", "kilowattHourPerYear", "pascal", "kilopascal", "bar", "millibar", "millimetresOfMercury", "poundPerSquareInch", "inchesOfMercury", "inchesOfWater", "unity percent", "ohm", "milliohm", "kiloohm", "megaohm", "decibel", "bel", "kelvin", "degreeCelsius", "degreeFahrenheit", "newton", "pound", "ounce", "ton", "second", "millisecond", "microsecond", "nanosecond", "minute", "hour", "day", "year", "newtonMetre", "metrePerSecond", "centimetrePerSecond", "kilometrePerSecond", "metrePerHour", "kilometrePerHour", "milePerHour", "milePerSecond", "knot", "volt", "millivolt", "microvolt", "kilovolt", "megavolt", "cubicMetre", "cubicCentimetre", "litre", "millilitre", "cubicFoot", "cubicInch", "fluidOunce", "gallon", "litrePerSecond", "millilitrePerSecond", "litrePerHour", "millilitrePerHour"].sort();
}

/***/ }),

/***/ 5443:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lI": function() { return /* binding */ toDTMI; },
/* harmony export */   "eT": function() { return /* binding */ serviceSpecificationToDTDL; },
/* harmony export */   "Jb": function() { return /* binding */ serviceSpecificationsWithDTDL; },
/* harmony export */   "tH": function() { return /* binding */ serviceSpecificationDTMI; },
/* harmony export */   "Yh": function() { return /* binding */ deviceClassToDTDL; }
/* harmony export */ });
/* unused harmony exports DTDL_JACDAC_PATH, DTDL_SERVICES_PATH, DTDL_DEVICES_PATH, serviceSpecificationToComponent, DTMIToRoute, routeToDTMI, serviceRouteToDTDL, encodedDeviceRouteToDTDL, routeToDTDL */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90293);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71815);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81794);
/* harmony import */ var _dtdl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2864);


/* eslint-disable @typescript-eslint/no-explicit-any */

/***
 * Jacdac service/device specification to DTDL
 *
 *  DTDL specification: https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md.
 */




var DTDL_JACDAC_PATH = "jacdac";
var DTDL_SERVICES_PATH = "services";
var DTDL_DEVICES_PATH = "devices"; // https://github.com/Azure/digital-twin-model-identifier
// ^dtmi:(?:_+[A-Za-z0-9]|[A-Za-z])(?:[A-Za-z0-9_]*[A-Za-z0-9])?(?::(?:_+[A-Za-z0-9]|[A-Za-z])(?:[A-Za-z0-9_]*[A-Za-z0-9])?)*;[1-9][0-9]{0,8}$

function toDTMI(segments, version) {
  return ("dtmi:" + DTDL_JACDAC_PATH + ":" + (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(segments).map(seg => seg === undefined ? "???" : typeof seg === "string" ? seg : "x" + seg.toString(16)).map(seg => seg.replace(/(-|_)/g, "")).join(":") + ";" + (version !== undefined ? version : 1)).toLowerCase();
}

function toUnit(pkt) {
  if (pkt.fields.length !== 1) return undefined;
  var field = pkt.fields[0];
  if (!field.unit) return undefined;
  /**
   *     type Unit = "m" | "kg" | "g" | "s" | "A" | "K" | "cd" | "mol" | "Hz" | "rad" | "sr" | "N" | "Pa" | "J" | "W" | "C" | "V" | "F" | "Ohm"
      | "S" | "Wb" | "T" | "H" | "Cel" | "lm" | "lx" | "Bq" | "Gy" | "Sv" | "kat" | "m2" | "m3" | "l" | "m/s" | "m/s2" | "m3/s" | "l/s"
      | "W/m2" | "cd/m2" | "bit" | "bit/s" | "lat" | "lon" | "pH" | "dB" | "dBW" | "Bspl" | "count" | "/" | "%RH" | "%EL" | "EL"
      | "1/s" | "1/min" | "beat/min" | "beats" | "S/m" | "B" | "VA" | "VAs" | "var" | "vars" | "J/m" | "kg/m3" | "deg";
   type SecondaryUnit = "ms" | "min" | "h" | "MHz" | "kW" | "kVA" | "kvar" | "Ah" | "Wh" | "kWh"
      | "varh" | "kvarh" | "kVAh" | "Wh/km" | "KiB" | "GB" | "Mbit/s" | "B/s" | "MB/s" | "mV" | "mA" | "dBm" | "ug/m3"
      | "mm/h" | "m/h" | "ppm" | "/100" | "/1000" | "hPa" | "mm" | "cm" | "km" | "km/h";
   */

  var units = {
    "m/s2": {
      semantic: "Acceleration",
      unit: "metrePerSecondSquared"
    },
    rad: {
      semantic: "Angle",
      unit: "radian"
    },
    "rad/s": {
      semantic: "AngularVelocity",
      unit: "radianPerSecond"
    },
    "rad/s2": {
      semantic: "AngularAcceleration",
      unit: "radianPerSecondSquared"
    },
    m: {
      semantic: "Length",
      unit: "metre"
    },
    m2: {
      semantic: "Area",
      unit: "squareMetre"
    },
    s: {
      semantic: "TimeSpan",
      unit: "second"
    },
    ms: {
      semantic: "TimeSpan",
      unit: "millisecond"
    },
    us: {
      semantic: "TimeSpan",
      unit: "microsecond"
    },
    K: {
      semantic: "Temperature",
      unit: "kelvin"
    },
    C: {
      semantic: "Temperature",
      unit: "degreeCelsius"
    },
    F: {
      semantic: "Temperature",
      unit: "degreeFahrenheit"
    },
    g: {
      semantic: "Acceleration",
      unit: "gForce"
    },
    mA: {
      semantic: "Current",
      unit: "milliampere"
    },
    uA: {
      semantic: "Current",
      unit: "microampere"
    },
    A: {
      semantic: "Current",
      unit: "ampere"
    },
    mV: {
      semantic: "Voltage",
      unit: "millivolt"
    },
    uV: {
      semantic: "Voltage",
      unit: "microvolt"
    },
    V: {
      semantic: "Voltage",
      unit: "volt"
    }
  };
  var unit = units[field.unit];
  if (unit) return unit; // ignoring some known units

  if (["#", "/"].indexOf(field.unit) > -1) return undefined; //console.warn(`unsupported unit ${field.unit}`)

  return undefined;
} // https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#primitive-schemas


function enumDTDI(srv, en) {
  return toDTMI([srv.classIdentifier, en.name]);
}

function enumSchema(srv, en) {
  var dtdl = {
    "@type": "Enum",
    "@id": enumDTDI(srv, en),
    valueSchema: "integer",
    enumValues: Object.keys(en.members).map(k => ({
      name: (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .escapeName */ .Jg)(k),
      displayName: k,
      enumValue: en.members[k]
    }))
  };
  return dtdl;
}

function fieldType(srv, pkt, field) {
  var type;
  if (field.type == "bool") type = "boolean";else if (field.isFloat) type = "float";else if (field.isSimpleType) {
    if (/^(u|i)/.test(field.type)) type = "integer";else if (field.type === "B") // base64 encoded binary data
      type = "string";
  } else if (field.type === "string" || field.type == "string0") type = "string";else if (field.shift && /^(u|i)/.test(field.type)) type = "float"; // decimal type
  else {
    var en = srv.enums[field.type];
    if (en) type = enumDTDI(srv, en);
  } //if (!type)
  //    console.warn(`unknown field type ${field.type}`, field)

  return {
    name: field.name == "_" ? pkt.name : field.name,
    type: type
  };
}

function toLocalizedString(str) {
  return str ? {
    en: str
  } : undefined;
} // converts JADAC pkt data layout into a DTDL schema


function toSchema(srv, pkt, supportsArray) {
  var fields = pkt.fields.map(field => fieldType(srv, pkt, field));
  if (!fields.length) return undefined; // a single data entry

  if (fields.length === 1 && !pkt.fields[0].startRepeats) return fields[0].type; // map fields into schema

  var schemas = fields.map(field => ({
    name: field.name,
    schema: field.type
  })); // is there an array?

  var repeatIndex = pkt.fields.findIndex(field => field.startRepeats);

  if (repeatIndex < 0) {
    // no array
    // wrap schemas into an object
    return (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .objectSchema */ .d_)(schemas);
  } // check if arrays are supported


  if (!supportsArray) {
    //console.warn(`arrays not supported in ${srv.shortName}.${pkt.name}`)
    return undefined;
  }

  if (repeatIndex == 0) {
    // the whole structure is an array
    return (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .arraySchema */ .yP)((0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .objectSchema */ .d_)(schemas));
  } else {
    // split fields into prelude and array data
    var nonRepeat = schemas.slice(0, repeatIndex);
    var repeats = schemas.slice(repeatIndex);
    return (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .objectSchema */ .d_)([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(nonRepeat), [{
      name: "repeat",
      schema: (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .arraySchema */ .yP)(repeats.length > 1 ? (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .objectSchema */ .d_)(repeats) : repeats[0])
    }]));
  }
}

function packetToDTDL(srv, pkt) {
  var types = {
    const: "Property",
    rw: "Property",
    ro: "Telemetry",
    event: "Telemetry"
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var dtdl = {
    "@type": types[pkt.kind] || "Unsupported" + pkt.kind,
    name: pkt.name,
    "@id": toDTMI([srv.classIdentifier, pkt.kind, pkt.name]),
    description: toLocalizedString(pkt.description)
  };

  switch (pkt.kind) {
    case "report":
    case "command":
      // https://docs.microsoft.com/en-us/azure/digital-twins/concepts-models#azure-digital-twins-dtdl-implementation-specifics
      return undefined;

    case "const":
    case "rw":
    case "ro":
    case "event":
      {
        var unit = toUnit(pkt);

        if (unit) {
          dtdl.unit = unit.unit;
        }

        dtdl.schema = toSchema(srv, pkt, false);
        if (pkt.kind === "rw") dtdl.writable = true;

        if (pkt.kind === "event") {
          dtdl["@type"] = [dtdl["@type"], "Event"];
          if (!dtdl.schema) dtdl.schema = "integer";
        } else if (unit && unit.semantic) dtdl["@type"] = [dtdl["@type"], unit.semantic];

        break;
      }

    default:
      //console.log(`unknown packet kind ${pkt.kind}`)
      break;
  }

  if (!dtdl.schema) {
    //console.log(`unknown schema for ${srv.name}.${pkt.name}`);
    return undefined;
  }

  return dtdl;
}

function serviceSpecificationToDTDL(srv) {
  var registers = srv.packets.filter(pkt => (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isHighLevelRegister */ .vr)(pkt) && !pkt.client && pkt.identifier !== _jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemReg.Variant */ .ZJq.Variant);
  var events = srv.packets.filter(pkt => (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isHighLevelEvent */ .jl)(pkt) && !pkt.client);
  var dtdl = {
    "@type": "Interface",
    "@id": serviceSpecificationDTMI(srv),
    displayName: (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .escapeDisplayName */ .n)(srv.name),
    description: toLocalizedString(srv.notes["short"]),
    contents: [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(registers), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(events)).map(pkt => {
      try {
        return packetToDTDL(srv, pkt);
      } catch (e) {
        console.log("failed to generate DTDL for " + srv.name, e);
        return undefined;
      }
    }).filter(c => !!c)
  }; // TODO extends support

  var hasEnums = Object.keys(srv.enums).length;

  if (hasEnums) {
    dtdl.schemas = [];
    if (hasEnums) dtdl.schemas = dtdl.schemas.concat(Object.keys(srv.enums).map(en => enumSchema(srv, srv.enums[en])));
  }

  dtdl["@context"] = _dtdl__WEBPACK_IMPORTED_MODULE_4__/* .DTDL_CONTEXT */ .LM;
  return dtdl;
}
function serviceSpecificationsWithDTDL() {
  var ignoredServices = [_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_CONTROL */ .gm9, _jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_LOGGER */ .w9j, _jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_ROLE_MANAGER */ .igi, _jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_PROTO_TEST */ .$Bn, _jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_BOOTLOADER */ .PWm];
  var specs = (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(spec => ignoredServices.indexOf(spec.classIdentifier) < 0).filter(spec => !/^_/.test(spec.shortId));
  return specs;
}
function serviceSpecificationToComponent(srv, name) {
  var dtdl = {
    "@type": "Component",
    name: name,
    displayName: (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .escapeDisplayName */ .n)(srv.name),
    schema: serviceSpecificationDTMI(srv)
  };
  return dtdl;
}
function serviceSpecificationDTMI(srv, customPath) {
  return toDTMI([customPath || DTDL_SERVICES_PATH, srv.classIdentifier]);
}
function DTMIToRoute(dtmi) {
  var route = dtmi.toLowerCase().replace(/;/, "-").replace(/:/g, "/") + ".json";
  return route;
}

function parseRoute(route, normalize) {
  var [, path, version] = /(.*)-(\d+)\.json$/.exec(route);
  var parts = path.split("/");
  if (normalize) while (parts[0] === "dtmi" || parts[0] === DTDL_JACDAC_PATH) {
    parts.shift();
  }
  return {
    version,
    parts
  };
}

function routeToDTMI(route) {
  var {
    parts,
    version
  } = parseRoute(route);
  if (parts[0] !== "dtmi") parts.unshift("dtmi");
  if (parts[1] !== DTDL_JACDAC_PATH) parts.splice(1, 0, DTDL_JACDAC_PATH);
  return parts.join(":") + ";" + version;
}
function serviceRouteToDTDL(route) {
  var {
    parts
  } = parseRoute(route, true);
  if (parts[0] !== DTDL_SERVICES_PATH) throw Error("invalid route");
  var serviceClass = parseInt("0" + parts[1], 16);
  var specification = (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass);
  var dtdl = serviceSpecificationToDTDL(specification);
  return dtdl;
}
function encodedDeviceRouteToDTDL(route) {
  var {
    parts
  } = parseRoute(route, true);
  if (parts[0] !== DTDL_DEVICES_PATH) throw Error("invalid route");
  var services = parts.slice(1).map(part => {
    var m = /^x(\w{8,8})(\d*)$/.exec(part);
    return {
      service: (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(parseInt(m[1], 16)),
      occurance: m[2] ? parseInt(m[2]) : 1
    };
  });
  var dtdl = {
    "@type": "Interface",
    "@id": routeToDTMI(route),
    displayName: route,
    contents: (0,_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .arrayConcatMany */ .ue)(services.map(_ref => {
      var {
        occurance,
        service
      } = _ref;
      return Array(occurance).fill(0).map((_, i) => serviceSpecificationToComponent(service, "" + service.shortName + i));
    })),
    "@context": _dtdl__WEBPACK_IMPORTED_MODULE_4__/* .DTDL_CONTEXT */ .LM
  };
  return dtdl;
}
var routes = {
  services: serviceRouteToDTDL,
  devices: encodedDeviceRouteToDTDL
};
function routeToDTDL(route) {
  var {
    parts
  } = parseRoute(route, true);
  var path = parts[0];
  var handler = routes[path];
  return handler === null || handler === void 0 ? void 0 : handler(route);
}
function deviceClassToDTDL(dev) {
  var services = dev.services.map(srv => (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(srv)); // allocate names and count services

  var serviceGroups = {};
  var names = [];
  services.forEach(srv => {
    serviceGroups[srv.classIdentifier] = (serviceGroups[srv.classIdentifier] || 0) + 1;
    var name = (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .escapeName */ .Jg)(srv.shortId || srv.shortName);
    if (names.indexOf(name) < 0) names.push(name + "0");else {
      var count = 2;

      while (names.indexOf(name + count) > -1) {
        count++;
      }

      names.push(name + count);
    }
  }); // compute id from groups

  var dtmi = toDTMI([DTDL_DEVICES_PATH].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(Object.keys(serviceGroups).map(cls => "x" + parseInt(cls).toString(16) + serviceGroups[cls]))));
  var dtdl = {
    "@type": "Interface",
    "@id": dtmi,
    displayName: (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .escapeDisplayName */ .n)(dev.name),
    description: toLocalizedString(dev.description),
    contents: services.map((srv, i) => serviceSpecificationToComponent(srv, names[i])),
    "@context": _dtdl__WEBPACK_IMPORTED_MODULE_4__/* .DTDL_CONTEXT */ .LM
  };
  return dtdl;
}

/***/ }),

/***/ 42495:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ApiKeyAccordion; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(27490);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/AccordionActions/AccordionActions.js





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var AccordionActions = /*#__PURE__*/react.forwardRef(function AccordionActions(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className", "disableSpacing"]);

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var AccordionActions_AccordionActions = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiAccordionActions'
})(AccordionActions));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(74601);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
var AccordionSummary = __webpack_require__(95371);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(33287);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js
var AccordionDetails = __webpack_require__(37171);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(47739);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircleOutline.js
var CheckCircleOutline = __webpack_require__(41212);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/hooks/useSecret.ts + 1 modules
var useSecret = __webpack_require__(21984);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
;// CONCATENATED MODULE: ./src/components/ApiKeyAccordion.tsx





 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports





function ApiKeyAccordion(props) {
  var {
    apiName,
    validateKey,
    title,
    children,
    defaultExpanded
  } = props;
  var {
    value: apiKey,
    setValue: setApiKey
  } = (0,useSecret/* useSecret */.$)(apiName);
  var apiKeyId = (0,react_use_id_hook_esm/* useId */.Me)();
  var {
    0: key,
    1: setKey
  } = (0,react.useState)("");
  var {
    0: expanded,
    1: setExpanded
  } = (0,react.useState)(!apiKey || defaultExpanded);
  var {
    0: validated,
    1: setValidated
  } = (0,react.useState)(false);
  var {
    enqueueSnackbar
  } = (0,react.useContext)(AppContext/* default */.ZP);
  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (mounted) {
      if (!apiKey) {
        setValidated(false);
      } else {
        var {
          status
        } = validateKey ? yield validateKey(apiKey) : {
          status: 200
        };
        if (!mounted()) return;

        if (status === 200) {
          setValidated(true);
          setExpanded(false);
        } else {
          setValidated(false);
          if (status === 403) setApiKey(undefined);
        }
      }
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [apiKey]);

  var handleApiChange = event => {
    setKey(event.target.value);
  };

  var handleSave = () => {
    setApiKey(key);
    setKey("");
    enqueueSnackbar("key saved...");
  };

  var handleReset = () => {
    setApiKey("");
    enqueueSnackbar("key cleared...");
  };

  var handleExpanded = () => {
    setExpanded(!expanded);
  };

  return /*#__PURE__*/react.createElement(Accordion/* default */.Z, {
    expanded: expanded,
    onChange: handleExpanded
  }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.Z, {
    expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.Z, null)
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body1"
  }, (title || "API key") + " Configuration"), validated && /*#__PURE__*/react.createElement(Box/* default */.Z, {
    ml: 1,
    color: "success.main"
  }, /*#__PURE__*/react.createElement(CheckCircleOutline/* default */.Z, null))), /*#__PURE__*/react.createElement(AccordionDetails/* default */.Z, {
    style: {
      display: "block"
    }
  }, validated && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "success"
  }, "API key ready!"), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    variant: "caption"
  }, children), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: apiKeyId,
    label: "API key",
    fullWidth: true,
    value: key,
    type: "password",
    onChange: handleApiChange
  })), /*#__PURE__*/react.createElement(AccordionActions_AccordionActions, null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    "aria-label": "save api key",
    disabled: !key,
    variant: "contained",
    color: "primary",
    onClick: handleSave
  }, "Save"), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    "aria-label": "clear api key",
    disabled: !apiKey,
    variant: "contained",
    onClick: handleReset
  }, "Clear")));
}

/***/ }),

/***/ 21984:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": function() { return /* binding */ useSecret; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/DbContext.tsx
var DbContext = __webpack_require__(94904);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
;// CONCATENATED MODULE: ./src/components/useDbValue.ts





function useDbValue(id, initialValue) {
  var {
    db
  } = (0,react.useContext)(DbContext/* default */.ZP);
  var {
    0: _value,
    1: _setValue
  } = (0,react.useState)(undefined);
  var values = (0,useChange/* default */.Z)(db, d => d === null || d === void 0 ? void 0 : d.values);
  var _mounted = true;

  var setValue = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (value) {
      yield values === null || values === void 0 ? void 0 : values.set(id, value);
    });

    return function setValue(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // listen to change


  (0,react.useEffect)(() => values === null || values === void 0 ? void 0 : values.subscribe(DbContext/* DB_VALUE_CHANGE */.TB, /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (changed) {
      //    console.log(`db value changed`, id)
      if (changed === id) {
        var v = yield values.get(id);

        if (_mounted) {
          _setValue(v);
        }
      }

      return () => {
        _mounted = false;
      };
    });

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }()), [db, values]); // load intial value

  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)(function* (mounted) {
      var v = yield values === null || values === void 0 ? void 0 : values.get(id);

      if (mounted()) {
        //      console.log(`load dbvalue ${id}`, values, v)
        _setValue(v || initialValue);
      }
    });

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }(), [db, values]);
  return {
    value: _value,
    setValue
  };
}
;// CONCATENATED MODULE: ./src/components/hooks/useSecret.ts

function useSecret(id) {
  var {
    value,
    setValue
  } = useDbValue("secret:" + id, "");
  return {
    value,
    setValue
  };
}

/***/ }),

/***/ 73723:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AzureDeviceTemplateDesigner; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73108);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94850);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1059);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34093);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19640);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36176);
/* harmony import */ var _components_ApiKeyAccordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42495);
/* harmony import */ var _components_hooks_useSecret__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21984);
/* harmony import */ var _components_ui_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95453);
/* harmony import */ var _jacdac_ts_src_azure_iot_dtdlspec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5443);
/* harmony import */ var _components_hooks_useMounted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72179);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13173);



 // tslint:disable-next-line: no-submodule-imports match-default-export-name









var AZURE_IOT_CENTRAL_DOMAIN = "azureiotcentraldomain";
var AZURE_IOT_CENTRAL_API_KEY = "azureiotcentraliotkey";
var AZURE_IOT_API_VERSION = "?api-version=1.0";

function ApiKeyManager() {
  var [domain] = (0,_components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(AZURE_IOT_CENTRAL_DOMAIN);

  var validateKey = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(function* (key) {
      var res = yield fetch(domain + "/api/deviceTemplates?api-version=1.0", {
        headers: {
          authorization: key
        }
      });
      return res;
    });

    return function validateKey(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ApiKeyAccordion__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    apiName: AZURE_IOT_CENTRAL_API_KEY,
    title: "API token",
    validateKey: validateKey,
    defaultExpanded: true
  }, "Open ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Administration"), ",", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, domain ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    target: "_blank",
    href: domain + "admin/tokens"
  }, "API tokens") : "API tokens"), ", create a new Token and copy the value here.");
}

function AzureDeviceTemplateDesigner() {
  var domainId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var [domain, setDomain] = (0,_components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(AZURE_IOT_CENTRAL_DOMAIN, "");
  var {
    value: apiToken
  } = (0,_components_hooks_useSecret__WEBPACK_IMPORTED_MODULE_5__/* .useSecret */ .$)(AZURE_IOT_CENTRAL_API_KEY);
  var {
    0: working,
    1: setWorking
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var {
    0: output,
    1: setOutput
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var mounted = (0,_components_hooks_useMounted__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)();

  var handleDomainChange = ev => setDomain(ev.target.value);

  var apiPutTemplate = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(function* (dtmi, type, dtdl) {
      var path = "deviceTemplates/" + dtmi;
      var url = domain + "api/" + path + AZURE_IOT_API_VERSION;
      var body = {
        "@type": ["ModelDefinition", type],
        displayName: dtdl.displayName,
        capabilityModel: dtdl,
        contents: [dtdl]
      };
      var options = {
        method: "PUT",
        headers: {
          authorization: apiToken,
          Accept: "application/json"
        },
        body: JSON.stringify(body)
      };
      if (options.method === "POST" || options.method === "PUT" || options.method === "PATCH") options.headers["Content-Type"] = "application/json";
      var res = yield fetch(url, options);
      var status = res.status;
      var success = status === 200;
      var response = yield res.json();
      console.debug(dtdl.displayName + " (" + dtmi + ") upload " + (success ? "success" : "error") + " (" + status + ") ", {
        status,
        body: JSON.stringify(body),
        response
      });
      return {
        status,
        success,
        response
      };
    });

    return function apiPutTemplate(_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleUpload = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(function* () {
      var specifications = (0,_jacdac_ts_src_azure_iot_dtdlspec__WEBPACK_IMPORTED_MODULE_7__/* .serviceSpecificationsWithDTDL */ .Jb)().filter(spec => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_9__/* .isSensor */ .rq)(spec));

      try {
        setWorking(true);
        setError("");
        setOutput("");
        {
          var {
            success
          } = yield apiPutTemplate((0,_jacdac_ts_src_azure_iot_dtdlspec__WEBPACK_IMPORTED_MODULE_7__/* .toDTMI */ .lI)(["template", "device"]), "GatewayModel", {
            "@id": (0,_jacdac_ts_src_azure_iot_dtdlspec__WEBPACK_IMPORTED_MODULE_7__/* .toDTMI */ .lI)(["device"]),
            "@type": "Interface",
            contents: [{
              "@id": (0,_jacdac_ts_src_azure_iot_dtdlspec__WEBPACK_IMPORTED_MODULE_7__/* .toDTMI */ .lI)(["sensor"]),
              "@type": ["Relationship", "GatewayDevice"],
              displayName: "sensor",
              name: "sensor",
              target: []
            }],
            displayName: "device",
            "@context": ["dtmi:iotcentral:context;2", "dtmi:dtdl:context;2"]
          });
          if (!success) return;
        } // upload services

        for (var spec of specifications) {
          var dtmi = (0,_jacdac_ts_src_azure_iot_dtdlspec__WEBPACK_IMPORTED_MODULE_7__/* .serviceSpecificationDTMI */ .tH)(spec, "template");
          var dtdl = (0,_jacdac_ts_src_azure_iot_dtdlspec__WEBPACK_IMPORTED_MODULE_7__/* .serviceSpecificationToDTDL */ .eT)(spec);
          var {
            success: _success
          } = yield apiPutTemplate(dtmi, "DeviceModel", dtdl);
          if (!_success) return;
        }

        setOutput("All services added successfully!");
      } catch (e) {
        if (mounted()) {
          setError(e.message);
          console.debug(e);
        }
      } finally {
        if (mounted()) setWorking(false);
      }
    });

    return function handleUpload() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Azure Device Templates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This page import device templates into your Azure IoT Central application."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    container: true,
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    id: domainId,
    value: domain,
    fullWidth: true,
    variant: "outlined",
    onChange: handleDomainChange,
    helperText: "Azure IoT Central domain",
    placeholder: "https://.....azureiotcentral.com/"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ApiKeyManager, null)), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    severity: "error"
  }, error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "contained",
    color: "primary",
    size: "small",
    disabled: working || !domain || !apiToken,
    onClick: handleUpload,
    title: "Import the device template into your Azure IoT Central application (requires domain and API token)."
  }, "Upload device templates")), domain && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    variant: "caption",
    href: domain + "device-templates",
    target: "_blank"
  }, "Open device templates")))), output && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    severity: "success"
  }, output))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-azure-device-templates-tsx-26ce196d4fbfd54c1c44.js.map