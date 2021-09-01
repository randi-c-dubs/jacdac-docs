"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7476],{

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

/***/ 95067:
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord');

exports.Z = _default;

/***/ }),

/***/ 29065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ReadingFieldGrid; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95823);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31186);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7746);
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95067);
/* harmony import */ var _devices_useDeviceName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5738);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64973);


 // tslint:disable-next-line: no-submodule-imports match-default-export-name




var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(() => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
  vmiddle: {
    verticalAlign: "middle"
  }
}));

function ReadingFieldGridItem(props) {
  var {
    register,
    handleRegisterCheck,
    recording,
    registerChecked,
    liveDataSet
  } = props;
  var {
    service
  } = register;
  var {
    device
  } = service;
  var gridBreakpoints = (0,_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)();
  var classes = useStyles();
  var deviceName = (0,_devices_useDeviceName__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(device);

  var handleCheck = () => handleRegisterCheck(register);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({
    item: true
  }, gridBreakpoints, {
    key: "source" + register.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    subheader: register.service.name,
    title: deviceName + "/" + register.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, register.fields.map(field => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    key: field.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    className: classes.vmiddle,
    fontSize: "large",
    style: {
      color: registerChecked && (liveDataSet === null || liveDataSet === void 0 ? void 0 : liveDataSet.colorOf(field)) || "#ccc"
    }
  }), field.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    disabled: recording,
    onChange: handleCheck,
    checked: registerChecked,
    label: "record " + deviceName + "/" + register.name
  }))));
}

function ReadingFieldGrid(props) {
  var {
    readingRegisters,
    registerIdsChecked,
    recording,
    handleRegisterCheck,
    liveDataSet
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, readingRegisters.map(register => {
    var registerChecked = registerIdsChecked.indexOf(register.id) > -1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReadingFieldGridItem, {
      key: register.id,
      register: register,
      registerChecked: registerChecked,
      recording: recording,
      handleRegisterCheck: handleRegisterCheck,
      liveDataSet: liveDataSet
    });
  }));
}

/***/ }),

/***/ 64797:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModelOutput; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90293);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74601);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95371);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37171);
/* harmony import */ var _Trend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25090);
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95067);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47739);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83808);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54774);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71815);
/* harmony import */ var _ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29065);
/* harmony import */ var _FieldDataSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64616);
/* harmony import */ var _MBDataSet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99941);




 // tslint:disable-next-line: match-default-export-name no-submodule-imports













var LIVE_HORIZON = 100;

function createDataSet(bus, registers, name, palette) {
  var fields = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .arrayConcatMany */ .ue)(registers.map(reg => reg.fields));
  var colors = fields.map((f, i) => palette[i % palette.length]);
  var set = new _FieldDataSet__WEBPACK_IMPORTED_MODULE_9__/* .default */ .ZP(bus, name, fields, colors);
  set.maxRows = LIVE_HORIZON + 4;
  return set;
}

function ModelOutput(props) {
  var classes = props.reactStyle;
  var {
    chartPalette,
    model
  } = props;
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);
  var readingRegisters = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(bus, bus => (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .arrayConcatMany */ .ue)(bus.devices().map(device => device.services().filter(srv => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__/* .isSensor */ .rq)(srv.specification)).map(srv => srv.readingRegister))));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    prepareTestingLogs();
  }, []);
  /* For loading page */

  var prepareTestingLogs = () => {
    // Create space to hold prediction data
    var livePredictionDataSet = {
      name: "live-predictions",
      rows: [],
      headers: model.labels,
      units: model.labels.map(() => {
        return "/";
      }),
      colors: model.labels.map((label, idx) => chartPalette[idx % chartPalette.length])
    };
    setLivePredictions({
      predictionData: _FieldDataSet__WEBPACK_IMPORTED_MODULE_9__/* .default.createFromFile */ .ZP.createFromFile(livePredictionDataSet),
      topClass: model.labels[0]
    });
  };
  /* For predicting with model */


  var {
    0: liveRecording,
    1: setLiveRecording
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  var {
    1: setLiveDataTimestamp
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  var {
    0: registerIdsChecked,
    1: setRegisterIdsChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var {
    0: livePredictions,
    1: setLivePredictions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    predictionData: undefined,
    topClass: ""
  });
  var recordingRegisters = readingRegisters.filter(reg => registerIdsChecked.indexOf(reg.id) > -1);

  var liveRecordingMatchesModel = () => {
    if (liveRecording) {
      var matchingInputs = true;

      if (model.inputTypes) {
        if (!(0,_MBDataSet__WEBPACK_IMPORTED_MODULE_10__/* .arraysEqual */ .cO)(model.inputTypes, liveRecording.headers)) {
          matchingInputs = false;
        }
      }

      return matchingInputs;
    }

    return false;
  };

  var sensorsMatch = !!(recordingRegisters !== null && recordingRegisters !== void 0 && recordingRegisters.length) && liveRecordingMatchesModel();

  var handleRegisterCheck = reg => {
    var i = registerIdsChecked.indexOf(reg.id);
    if (i > -1) registerIdsChecked.splice(i, 1);else registerIdsChecked.push(reg.id);
    registerIdsChecked.sort();
    setRegisterIdsChecked((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(registerIdsChecked));
    setLiveRecording(newRecording(registerIdsChecked));
  };

  var newRecording = registerIds => registerIds.length ? createDataSet(bus, readingRegisters.filter(reg => registerIds.indexOf(reg.id) > -1), "liveData", chartPalette) : undefined;

  var updateLiveData = () => {
    setLiveRecording(liveRecording);
    setLiveDataTimestamp(bus.timestamp);
    updatePrediction();
  };

  var throttleUpdate = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .throttle */ .P2)(() => updateLiveData(), 30); // interval add data entry

  var addRow = values => {
    if (liveRecording) {
      liveRecording.addRow(values);
      throttleUpdate();
    }
  };

  var startStreamingRegisters = () => {
    console.log("start streaming");
    var streamers = recordingRegisters === null || recordingRegisters === void 0 ? void 0 : recordingRegisters.map(reg => reg.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .REPORT_UPDATE */ .rGZ, () => {}));
    return () => {
      console.log("stop streaming");
      streamers.map(streamer => streamer());
    };
  };

  var updatePrediction = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)(function* () {
      // Use the model to do inference on a data point the model hasn't seen before:
      if (!sensorsMatch) return;
      var data = liveRecording.data();
      data = data.slice(data.length - model.inputShape[0]);
      var liveInput = [data];
      var topLabel = model.labels[0];

      if (data && data.length >= model.inputShape[0]) {
        var liveOutput = []; // Get probability values from model

        var predictMsg = {
          worker: "tf",
          type: "predict",
          data: {
            zData: liveInput,
            model: model.toJSON()
          }
        };
        var predResult = yield (0,_blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_2__/* .predictRequest */ .iE)(predictMsg);

        if (predResult) {
          // Save probability for each class in model object
          var prediction = predResult.data.predictAll[0];
          model.labels.forEach(label => {
            liveOutput.push(prediction[label]); // update which class has highest confidence

            if (liveOutput[label] > liveOutput[topLabel]) topLabel = label;
          });
          livePredictions.predictionData.addData(liveOutput);
          livePredictions.topClass = topLabel;
        }
      }
    });

    return function updatePrediction() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var interval = setInterval(() => addRow(), model.inputInterval);
    var stopStreaming = startStreamingRegisters();
    return () => {
      clearInterval(interval);
      stopStreaming();
    };
  }, [registerIdsChecked]);
  var [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);

  var handleExpandedSensorsChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Live Testing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: "predict"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, " ", "Top Class:", " ", model.status == "trained" ? livePredictions.topClass : "--", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: "liveData"
  }, liveRecording && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, model.labels.map(label => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      key: "prediction-key-" + label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
      className: classes.vmiddle,
      fontSize: "small",
      style: {
        color: livePredictions.predictionData.colorOf(undefined, label)
      }
    }), label);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Trend__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    key: "live-data-predictions",
    height: 12,
    dataSet: livePredictions.predictionData,
    horizon: LIVE_HORIZON,
    dot: true,
    gradient: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Trend__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    key: "live-data-trends",
    height: 12,
    dataSet: liveRecording,
    horizon: LIVE_HORIZON,
    dot: true,
    gradient: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    expanded: expanded === "chooseSensors",
    onChange: handleExpandedSensorsChange("chooseSensors")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", null, "Select input sensors"), !sensorsMatch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Sensors should match:", " ", model.inputTypes.join(", "), " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: "sensors"
  }, !readingRegisters.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Waiting for sensors..."), !!readingRegisters.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    recording: false,
    liveDataSet: liveRecording,
    handleRegisterCheck: handleRegisterCheck
  }))))));
}

/***/ })

}]);
//# sourceMappingURL=41a69591c06d74ab821d0a6f985f09ba8c9c9577-c8b150793ad6f1f626d9.js.map