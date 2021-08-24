"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3382],{

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

/***/ 52377:
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
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
}), 'GetApp');

exports.Z = _default;

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

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48086);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["label"];


function SwitchWithLabel(props) {
  var {
    label
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, rest),
    label: label
  });
}

/***/ }),

/***/ 2649:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EdgeImpulse; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(90293);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(53719);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(25342);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(85413);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17727);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(95823);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(95148);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(59355);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(27136);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(6210);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(80838);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36176);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54774);
/* harmony import */ var _components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7746);
/* harmony import */ var _jacdac_ts_src_jdom_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47235);
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31477);
/* harmony import */ var _components_ui_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95453);
/* harmony import */ var _components_useEffectAsync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7751);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71815);
/* harmony import */ var _components_FieldDataSet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64616);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13173);
/* harmony import */ var _components_ui_CircularProgressWithLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29177);
/* harmony import */ var _components_Trend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25090);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(52377);
/* harmony import */ var _components_ServiceList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15548);
/* harmony import */ var _model_uploader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(83625);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(81794);
/* harmony import */ var _components_devices_useDeviceName__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(5738);
/* harmony import */ var _components_ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(29065);
/* harmony import */ var _components_useChartPalette__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(74039);
/* harmony import */ var _jacdac_ts_src_clients_sensoraggregatorclient__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(59381);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(99330);
/* harmony import */ var _jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(10913);
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(94431);
/* harmony import */ var _components_ApiKeyAccordion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(42495);
/* harmony import */ var _components_hooks_useSecret__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(21984);




















 // tslint:disable-next-line: match-default-export-name no-submodule-imports














var EDGE_IMPULSE_API_KEY = "edgeimpulseapikey";
var IDLE = "idle";
var STARTING = "starting";
var SAMPLING = "sampling";
var UPLOADING = "uploading";
var SAMPLING_STATE = "samplingState";

/*
A client for the EdgeImpulse remote management
https://docs.edgeimpulse.com/reference#remote-management
*/
var EdgeImpulseClient = /*#__PURE__*/function (_JDClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_25__/* .default */ .Z)(EdgeImpulseClient, _JDClient);

  function EdgeImpulseClient(apiKey, aggregator, inputRegisters, palette) {
    var _this;

    _this = _JDClient.call(this) || this;
    _this.connectionState = _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .DISCONNECT */ .PYu;
    _this.samplingState = IDLE;
    _this.apiKey = apiKey;
    _this.aggregator = aggregator;
    _this.inputRegisters = inputRegisters;
    _this.palette = palette;
    _this.handleMessage = _this.handleMessage.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z)(_this));
    _this.handleOpen = _this.handleOpen.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z)(_this));
    _this.handleError = _this.handleError.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z)(_this));
    _this.handleReport = _this.handleReport.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z)(_this));
    _this.handlePing = _this.handlePing.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z)(_this));
    _this.aggregatorClient = new _jacdac_ts_src_clients_sensoraggregatorclient__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z(_this.aggregator);

    _this.aggregatorClient.subscribeSample(_this.handleReport);

    _this.mount(() => _this.disconnect());

    _this.mount(() => _this.aggregatorClient.unmount());

    return _this;
  }

  var _proto = EdgeImpulseClient.prototype;

  _proto.disconnect = function disconnect() {
    this.clearSampling();

    if (this._pingInterval) {
      clearInterval(this._pingInterval);
      this._pingInterval = undefined;
    } // stop socket


    if (this._ws) {
      var w = this._ws;
      this._ws = undefined;

      try {
        w.close();
      } catch (e) {
        console.debug(e);
      } finally {
        this.setConnectionState(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .DISCONNECT */ .PYu);
      }
    }
  };

  _proto.setConnectionState = function setConnectionState(state) {
    if (this.connectionState !== state) {
      this.connectionState = state;
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .CONNECTION_STATE */ .pzj, this.connectionState);
      console.log("ei: connection state changed", this.connectionState);
    }
  };

  _proto.setSamplingState = function setSamplingState(state) {
    if (this.samplingState !== state) {
      this.samplingState = state;
      this.emit(SAMPLING_STATE, this.samplingState);
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .CHANGE */ .Ver);
      console.log("ei: sampling state changed", this.samplingState);
    }
  };

  _proto.send = function send(msg) {
    var _this$_ws;

    (_this$_ws = this._ws) === null || _this$_ws === void 0 ? void 0 : _this$_ws.send(JSON.stringify(msg));
  };

  _proto.handleOpen = /*#__PURE__*/function () {
    var _handleOpen = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(function* () {
      console.log("ws: open");
      var service = this.aggregator;
      var {
        device
      } = service; // fetch device spec

      var productIdentifier = yield service.device.resolveProductIdentifier();
      var deviceSpec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_12__/* .deviceSpecificationFromProductIdentifier */ .Ht)(productIdentifier);
      this._hello = {
        version: 2,
        apiKey: this.apiKey,
        deviceId: device.deviceId,
        deviceType: (deviceSpec === null || deviceSpec === void 0 ? void 0 : deviceSpec.name) || (productIdentifier === null || productIdentifier === void 0 ? void 0 : productIdentifier.toString(16)) || "Jacdac device",
        connection: "ip",
        // direct connection
        sensors: [{
          name: this.inputRegisters.map(reg => (0,_jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_21__/* .serviceName */ .HV)(reg.service.serviceClass)).join(","),
          maxSampleLengthS: 10000,
          frequencies: [50, 30, 20, 10]
        }]
      };
      this.send({
        hello: this._hello
      });
    });

    function handleOpen() {
      return _handleOpen.apply(this, arguments);
    }

    return handleOpen;
  }();

  _proto.reconnect = function reconnect() {
    this.disconnect();
    this.connect();
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto.handleMessage = function handleMessage(msg) {
    // response to ping?
    if (msg.data === "pong") {
      this.pong = true;
      return;
    }

    var data = JSON.parse(msg.data);

    if (data.hello !== undefined) {
      var hello = data;

      if (!hello.hello) {
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .ERROR */ .pnR, hello.err);
        this.disconnect();
      } else {
        this.setConnectionState(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .CONNECT */ .JD8);
      }
    } else if (data.sample) {
      var sample = data.sample;
      this.startSampling(sample);
    }
  };

  _proto.handleReport = function handleReport(row) {
    console.log("ei: aggregator report", this.connected, this.sampling);
    if (!this.connected) return; // ignore
    // partial data? ignore

    if (row.some(r => r === undefined)) return;
    var {
      bus
    } = this.aggregator.device;
    var {
      timestamp
    } = bus; // first sample, notify we're started

    if (this.samplingState == STARTING) {
      this._sample.startTimestamp = this._sample.lastProgressTimestamp = timestamp;
      this.send({
        sampleStarted: true
      });
      this.setSamplingState(SAMPLING);
    } // store sample


    if (this.samplingState == SAMPLING) {
      var ds = this.dataSet;
      ds.addRow(row);
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .REPORT_RECEIVE */ .Gb8); // debounced progress update

      if (timestamp - this._sample.lastProgressTimestamp > 100) {
        this._sample.lastProgressTimestamp = timestamp;
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .PROGRESS */ .ad7, this.progress);
      }

      if (timestamp - this._sample.startTimestamp >= this._sample.length) {
        // first stop the sampling
        this.stopSampling(); // we're done!

        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .PROGRESS */ .ad7, this.progress); // and upload...

        this.uploadData();
      }
    }
  };

  _proto.uploadData = function uploadData() {
    var _this2 = this;

    this.setSamplingState(UPLOADING);
    var ds = this.dataSet;
    var payload = {
      protected: {
        ver: "v1",
        alg: "none",
        iat: Date.now()
      },
      signature: "",
      payload: {
        device_name: this._hello.deviceId,
        device_type: this._hello.deviceType,
        interval_ms: this._sample.interval,
        sensors: ds.headers.map((h, i) => ({
          name: ds.headers[i],
          units: ds.units[i] || "/"
        })),
        values: ds.data(true)
      }
    };
    console.log("payload", payload); // upload dataset
    // https://docs.edgeimpulse.com/reference#ingestion-api

    return fetch("https://ingestion.edgeimpulse.com" + this._sample.path, {
      method: "POST",
      headers: {
        "x-api-key": this.apiKey,
        "x-label": this._sample.label,
        "x-file-name": ds.name,
        "x-disallow-duplicates": "true",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then( /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(function* (resp) {
        // response contains the filename
        var filename = yield resp.text();
        _this2._sample.generatedFilename = filename;
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).finally(() => {
      this.send({
        sampleFinished: true
      });
      this.setSamplingState(IDLE);
    });
  };

  _proto.handleError = function handleError(ev) {
    this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .ERROR */ .pnR, ev);
    this.reconnect();
  };

  _proto.startSampling = /*#__PURE__*/function () {
    var _startSampling = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(function* (sample) {
      this._sample = sample;
      this._sample.dataSet = _components_FieldDataSet__WEBPACK_IMPORTED_MODULE_11__/* .default.create */ .ZP.create(this.aggregator.device.bus, this.inputRegisters, "sample", this.palette);
      this._sample.unsubscribers = [];
      this.send({
        sample: true
      });
      this.setSamplingState(STARTING); // prepare configuration

      this._sample.aggregatorConfig = {
        samplingInterval: this._sample.interval,
        samplesInWindow: 10,
        inputs: this.inputRegisters.map(reg => ({
          serviceClass: reg.service.serviceClass,
          deviceId: reg.service.device.deviceId,
          serviceIndex: reg.service.serviceIndex
        }))
      };
      console.log("ei: input", this._sample.aggregatorConfig); // setup aggregator client

      yield this.aggregatorClient.setInputs(this._sample.aggregatorConfig); // schedule data collection, ask a few more samples

      yield this.aggregatorClient.collect(this._sample.length * 1.1);
    });

    function startSampling(_x2) {
      return _startSampling.apply(this, arguments);
    }

    return startSampling;
  }();

  _proto.stopSampling = function stopSampling() {
    var sample = this._sample;

    if (sample) {
      sample.unsubscribers.forEach(unsub => {
        try {
          unsub();
        } catch (e) {
          console.log(e);
        }
      });
      sample.unsubscribers = [];
    }
  };

  _proto.clearSampling = function clearSampling() {
    this.stopSampling();

    if (this._sample) {
      this._sample = undefined;
      this._hello = undefined;
      this.setSamplingState(IDLE);
    }
  };

  _proto.connect = function connect() {
    if (this._ws) return; // already connected

    console.log("ei: connect");
    this.setConnectionState(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .CONNECTING */ .BS3);
    this._ws = new WebSocket("wss://remote-mgmt.edgeimpulse.com");
    this._ws.onmessage = this.handleMessage;
    this._ws.onopen = this.handleOpen;
    this._ws.onerror = this.handleError;
    this.pong = true;
    this._pingInterval = setInterval(this.handlePing, 3000);
  };

  _proto.handlePing = function handlePing() {
    if (!this.connected) return;

    if (!this.pong) {
      // the socket did not response
      console.log("missing pong");
      this.reconnect();
    } else {
      // send a new ping and wait for pong
      this.pong = false;

      this._ws.send("ping");
    }
  };

  EdgeImpulseClient.currentProjectInfo = /*#__PURE__*/function () {
    var _currentProjectInfo = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(function* (apiKey) {
      var _rsj$projects, _rsj$projects$;

      if (!apiKey) return {
        valid: false
      };
      var rsj = yield EdgeImpulseClient.apiFetch(apiKey, "projects");

      if (!rsj.success) {
        return {
          valid: false,
          errorStatus: rsj.errorStatus
        };
      } // the API returns the current project when using the API key


      var projectId = (_rsj$projects = rsj.projects) === null || _rsj$projects === void 0 ? void 0 : (_rsj$projects$ = _rsj$projects[0]) === null || _rsj$projects$ === void 0 ? void 0 : _rsj$projects$.id;

      if (!(rsj !== null && rsj !== void 0 && rsj.success) || projectId === undefined) {
        return {
          valid: true,
          errorStatus: 402
        };
      }

      var project = yield EdgeImpulseClient.apiFetch(apiKey, projectId);
      return {
        valid: true,
        errorStatus: project.errorStatus,
        project
      };
    });

    function currentProjectInfo(_x3) {
      return _currentProjectInfo.apply(this, arguments);
    }

    return currentProjectInfo;
  }();

  EdgeImpulseClient.apiFetch = /*#__PURE__*/function () {
    var _apiFetch = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(function* (apiKey, path, body) {
      var API_ROOT = "https://studio.edgeimpulse.com/v1/api/";
      var url = "" + API_ROOT + path;
      var options = {
        method: body ? "POST" : "GET",
        headers: {
          "x-api-key": apiKey,
          Accept: "application/json"
        },
        body: body && JSON.stringify(body)
      };
      if (options.method === "POST") options.headers["Content-Type"] = "application/json";
      var resp = yield fetch(url, options);
      if (resp.status !== 200) return {
        success: false,
        errorStatus: resp.status,
        error: resp.statusText
      };

      try {
        var payload = yield resp.json();
        return payload;
      } catch (e) {
        return {
          success: false,
          errorStatus: 500,
          error: e.message
        };
      }
    });

    function apiFetch(_x4, _x5, _x6) {
      return _apiFetch.apply(this, arguments);
    }

    return apiFetch;
  }();

  EdgeImpulseClient.deviceInfo = /*#__PURE__*/function () {
    var _deviceInfo = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(function* (apiKey, projectId, deviceId) {
      return yield EdgeImpulseClient.apiFetch(apiKey, projectId + "/device/" + deviceId);
    });

    function deviceInfo(_x7, _x8, _x9) {
      return _deviceInfo.apply(this, arguments);
    }

    return deviceInfo;
  }();

  EdgeImpulseClient.renameDevice = /*#__PURE__*/function () {
    var _renameDevice = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(function* (apiKey, projectId, deviceId, name) {
      return yield EdgeImpulseClient.apiFetch(apiKey, projectId + "/devices/" + deviceId + "/rename", {
        name
      });
    });

    function renameDevice(_x10, _x11, _x12, _x13) {
      return _renameDevice.apply(this, arguments);
    }

    return renameDevice;
  }();

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)(EdgeImpulseClient, [{
    key: "dataSet",
    get: function get() {
      var _this$_sample;

      return (_this$_sample = this._sample) === null || _this$_sample === void 0 ? void 0 : _this$_sample.dataSet;
    }
  }, {
    key: "connected",
    get: function get() {
      return this.connectionState === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .CONNECT */ .JD8;
    }
  }, {
    key: "sampling",
    get: function get() {
      return this.samplingState !== IDLE;
    }
  }, {
    key: "generatedSampleName",
    get: function get() {
      var _this$_sample2;

      return (_this$_sample2 = this._sample) === null || _this$_sample2 === void 0 ? void 0 : _this$_sample2.generatedFilename;
    }
  }, {
    key: "aggregatorConfig",
    get: function get() {
      var _this$_sample3;

      return (_this$_sample3 = this._sample) === null || _this$_sample3 === void 0 ? void 0 : _this$_sample3.aggregatorConfig;
    }
  }, {
    key: "progress",
    get: function get() {
      var timestamp = this.aggregator.device.bus.timestamp;
      return this.samplingState !== IDLE && (timestamp - this._sample.startTimestamp) / this._sample.length;
    }
  }]);

  return EdgeImpulseClient;
}(_jacdac_ts_src_jdom_client__WEBPACK_IMPORTED_MODULE_6__/* .JDClient */ .z);

function ApiKeyManager() {
  var validateKey = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(function* (key) {
      var r = yield EdgeImpulseClient.currentProjectInfo(key);
      return {
        status: (r === null || r === void 0 ? void 0 : r.valid) && 200 || (r === null || r === void 0 ? void 0 : r.errorStatus) || 500
      };
    });

    return function validateKey(_x14) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ApiKeyAccordion__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    apiName: EDGE_IMPULSE_API_KEY,
    validateKey: validateKey
  }, "To get an ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, "API key"), ", navigate to \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "https://studio.edgeimpulse.com/studio/8698/keys",
    target: "_blank"
  }, "https://studio.edgeimpulse.com/studio/8698/keys"), "\xA0 and generate a new key.");
}

function useEdgeImpulseProjectInfo(apiKey) {
  var {
    0: info,
    1: setInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  (0,_components_useEffectAsync__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(function* (mounted) {
      if (!apiKey) {
        if (mounted()) setInfo(undefined);
      } else {
        var r = yield EdgeImpulseClient.currentProjectInfo(apiKey);
        if (mounted()) setInfo(r === null || r === void 0 ? void 0 : r.project);
      }
    });

    return function (_x15) {
      return _ref3.apply(this, arguments);
    };
  }(), [apiKey]);
  return info;
}

function ProjectInfo(props) {
  var _info$project, _info$dataSummary, _info$project2, _info$project3, _info$project4;

  var {
    info
  } = props;
  var disabled = !(info !== null && info !== void 0 && info.success);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, {
    title: (info === null || info === void 0 ? void 0 : (_info$project = info.project) === null || _info$project === void 0 ? void 0 : _info$project.name) || "...",
    subheader: (info === null || info === void 0 ? void 0 : info.dataSummary) && (info === null || info === void 0 ? void 0 : (_info$dataSummary = info.dataSummary) === null || _info$dataSummary === void 0 ? void 0 : _info$dataSummary.dataCount) + " samples"
  }), (info === null || info === void 0 ? void 0 : (_info$project2 = info.project) === null || _info$project2 === void 0 ? void 0 : _info$project2.logo) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__/* .default */ .Z, {
    image: info === null || info === void 0 ? void 0 : (_info$project3 = info.project) === null || _info$project3 === void 0 ? void 0 : _info$project3.logo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_32__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_33__/* .default */ .Z, {
    disabled: disabled,
    target: "_blank",
    href: "https://studio.edgeimpulse.com/studio/" + (info === null || info === void 0 ? void 0 : (_info$project4 = info.project) === null || _info$project4 === void 0 ? void 0 : _info$project4.id) + "/",
    variant: "contained",
    color: "primary"
  }, "Open EdgeImpulse")));
}

function ModelDownloadButton(props) {
  var {
    apiKey,
    info,
    setModel
  } = props;
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_34__/* .default */ .Z)();
  var {
    0: downloading,
    1: setDownloading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  var download = info === null || info === void 0 ? void 0 : info.downloads.find(download => download.type === "TensorFlow Lite (float32)");

  var handleDownload = url => /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(function* () {
    try {
      setDownloading(true);
      setError("");
      var resp = yield fetch(url, {
        headers: {
          "x-api-key": apiKey
        }
      });
      var res = yield resp.blob();
      var bytes = yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_17__/* .readBlobToUint8Array */ .Lg)(res);
      setModel(bytes);
    } catch (e) {
      console.log(e);
      setError("Oops, download failed.");
    } finally {
      setDownloading(false);
    }
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__/* .default */ .Z, {
    mb: 1
  }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    severity: "error"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_33__/* .default */ .Z, {
    variant: "contained",
    disabled: !download || downloading,
    startIcon: downloading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_36__/* .default */ .Z, {
      size: theme.spacing(2)
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_37__/* .default */ .Z, null),
    onClick: handleDownload("https://studio.edgeimpulse.com" + (download === null || download === void 0 ? void 0 : download.link))
  }, "DOWNLOAD MODEL"));
}

function AggregatorCard(props) {
  var {
    aggregator,
    selected,
    onChecked
  } = props;
  var {
    device
  } = aggregator;

  var handleChecked = () => onChecked();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    device: device,
    showMedia: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_38__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_39__/* .default */ .Z, {
    checked: selected,
    onChange: handleChecked
  })));
}

function Acquisition(props) {
  var {
    aggregator,
    inputs,
    apiKey,
    info
  } = props;
  var {
    device
  } = aggregator;
  var {
    0: client,
    1: setClient
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  var {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  var {
    0: connectionState,
    1: setConnectionState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .DISCONNECT */ .PYu);
  var {
    0: samplingState,
    1: setSamplingState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(IDLE);
  var {
    0: samplingProgress,
    1: setSamplingProgress
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  var {
    1: setDeviceInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  var {
    deviceId
  } = device;
  var deviceName = (0,_components_devices_useDeviceName__WEBPACK_IMPORTED_MODULE_40__/* .default */ .Z)(device, false);
  var projectId = info === null || info === void 0 ? void 0 : info.id;
  var palette = (0,_components_useChartPalette__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z)();
  var connected = connectionState === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .CONNECT */ .JD8;
  var sampling = samplingState !== IDLE;
  var dataSet = client === null || client === void 0 ? void 0 : client.dataSet;
  var generatedSampleName = client === null || client === void 0 ? void 0 : client.generatedSampleName;
  var aggregatorConfig = client === null || client === void 0 ? void 0 : client.aggregatorConfig;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!apiKey || !aggregator || !(inputs !== null && inputs !== void 0 && inputs.length)) {
      setClient(undefined);
      setError(undefined);
      return undefined;
    } else {
      console.log("ei: start client");
      var c = new EdgeImpulseClient(apiKey, aggregator, inputs, palette);
      c.connect();
      setClient(c);
      setError(undefined);
      return () => c.unmount();
    }
  }, [apiKey, aggregator, inputs === null || inputs === void 0 ? void 0 : inputs.map(ip => ip.id).join(",")]); // subscribe to client changes

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => client === null || client === void 0 ? void 0 : client.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .CONNECTION_STATE */ .pzj, v => setConnectionState(v)), [client]); // subscribe to client changes

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => client === null || client === void 0 ? void 0 : client.subscribe(SAMPLING_STATE, v => setSamplingState(v)), [client]); // listen to errors

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => client === null || client === void 0 ? void 0 : client.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .ERROR */ .pnR, e => setError(e)), [client]); // progress

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => client === null || client === void 0 ? void 0 : client.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .PROGRESS */ .ad7, p => setSamplingProgress(p * 100)), [client]); // name checking

  (0,_components_useEffectAsync__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(function* () {
    if (!apiKey || projectId === undefined) {
      setDeviceInfo(undefined);
    } else {
      var resp = yield EdgeImpulseClient.deviceInfo(apiKey, projectId, deviceId);

      var _info = resp.success && resp.device;

      if (_info && _info.name !== deviceName) {
        // no name assigned, use current
        if (_info.name === deviceId) {
          console.log("ei: sync name");
          var rename = yield EdgeImpulseClient.renameDevice(apiKey, projectId, deviceId, deviceName);

          if (rename.success) {
            _info.name = deviceName;
          }
        }
      }

      setDeviceInfo(_info);
    }
  }), [apiKey, projectId, deviceName]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__/* .default */ .Z, null, connected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    severity: "success"
  }, "Connected to EdgeImpulse"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    severity: "error"
  }, error), sampling && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    severity: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_41__/* .default */ .Z, null, "Sampling..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_CircularProgressWithLabel__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    value: samplingProgress
  })), !!dataSet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Trend__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    dataSet: dataSet
  }), generatedSampleName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_42__/* .default */ .Z, {
    variant: "body2"
  }, "sample name: ", generatedSampleName), aggregatorConfig && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("pre", null, JSON.stringify(aggregatorConfig, null, 2)));
}

function EdgeImpulse() {
  var {
    value: apiKey
  } = (0,_components_hooks_useSecret__WEBPACK_IMPORTED_MODULE_24__/* .useSecret */ .$)(EDGE_IMPULSE_API_KEY);
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);
  var {
    0: model,
    1: setModel
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  var {
    0: registerIdsChecked,
    1: setRegisterIdsChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var {
    0: aggregatorId,
    1: setAggregatorId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  var gridBreakPoints = (0,_components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)();
  var info = useEdgeImpulseProjectInfo(apiKey);
  var aggregators = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(bus, bus => bus.services({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .SRV_SENSOR_AGGREGATOR */ .x12
  }));
  var currentAggregator = aggregators.find(srv => srv.id == aggregatorId) || aggregators[0];
  var readingRegisters = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(bus, bus => bus.devices().map(device => {
    var _device$services$find;

    return (_device$services$find = device.services().find(srv => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_12__/* .isSensor */ .rq)(srv.specification))) === null || _device$services$find === void 0 ? void 0 : _device$services$find.readingRegister;
  }).filter(reg => !!reg));
  var inputs = readingRegisters.filter(reg => registerIdsChecked.indexOf(reg.id) > -1);

  var handleAggregatorChecked = srv => () => {
    var id = (srv === null || srv === void 0 ? void 0 : srv.id) == aggregatorId ? "" : srv === null || srv === void 0 ? void 0 : srv.id;
    setAggregatorId(id);
  };

  var handleRegisterCheck = reg => {
    var i = registerIdsChecked.indexOf(reg.id);
    if (i > -1) registerIdsChecked.splice(i, 1);else registerIdsChecked.push(reg.id);
    registerIdsChecked.sort();
    setRegisterIdsChecked((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_43__/* .default */ .Z)(registerIdsChecked));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", null, "Edge Impulse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Use Jacdac to inject data and download models into", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: "https://studio.edgeimpulse.com"
  }, "https://studio.edgeimpulse.com"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ApiKeyManager, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__/* .default */ .Z, {
    mb: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ProjectInfo, {
    info: info
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", null, "Select Sensors"), !(readingRegisters !== null && readingRegisters !== void 0 && readingRegisters.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    severity: "info"
  }, "No sensor found..."), !!readingRegisters.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    handleRegisterCheck: handleRegisterCheck
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", null, "Select Sensor Aggregator"), !(aggregators !== null && aggregators !== void 0 && aggregators.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    severity: "info"
  }, "No data aggregator found..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_44__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, aggregators.map(aggregator => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_44__/* .default */ .Z, Object.assign({
    key: aggregator.id,
    item: true
  }, gridBreakPoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AggregatorCard, {
    aggregator: aggregator,
    selected: currentAggregator === aggregator,
    onChecked: handleAggregatorChecked(aggregator)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", null, "Acquisition status"), !currentAggregator && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    severity: "info"
  }, "No data aggregator selected..."), !(inputs !== null && inputs !== void 0 && inputs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    severity: "info"
  }, "Select sensors to collect data from..."), currentAggregator && !!(inputs !== null && inputs !== void 0 && inputs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Acquisition, {
    aggregator: currentAggregator,
    inputs: inputs,
    apiKey: apiKey,
    info: info === null || info === void 0 ? void 0 : info.project
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Deployment"), model && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_35__/* .default */ .Z, {
    mb: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    severity: "success"
  }, "Model downloaded!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ModelDownloadButton, {
    apiKey: apiKey,
    info: info,
    setModel: setModel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ServiceList__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .SRV_MODEL_RUNNER */ .kVm,
    content: service => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_model_uploader__WEBPACK_IMPORTED_MODULE_16__.ModelContent, {
      service: service
    }),
    actions: service => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_model_uploader__WEBPACK_IMPORTED_MODULE_16__.ModelActions, {
      service: service,
      model: model
    }),
    alertMissing: "No model runner found..."
  }));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-edge-impulse-tsx-4e29e04ce9a24740ddac.js.map