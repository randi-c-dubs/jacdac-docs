(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[317],{

/***/ 74601:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 32253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80453);




var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogContentText(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(styles, {
  name: 'MuiDialogContentText'
})(DialogContentText));

/***/ }),

/***/ 62846:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37595);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },

    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },

    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
      marginLeft: 72
    },

    /* Styles applied to the root element if `light={true}`. */
    light: {
      backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__/* .alpha */ .Fq)(theme.palette.divider, 0.08)
    },

    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      height: '100%',
      width: 1
    },

    /* Styles applied to the root element if `flexItem={true}`. */
    flexItem: {
      alignSelf: 'stretch',
      height: 'auto'
    }
  };
};
var Divider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Divider(props, ref) {
  var _props$absolute = props.absolute,
      absolute = _props$absolute === void 0 ? false : _props$absolute,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'hr' : _props$component,
      _props$flexItem = props.flexItem,
      flexItem = _props$flexItem === void 0 ? false : _props$flexItem,
      _props$light = props.light,
      light = _props$light === void 0 ? false : _props$light,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$role = props.role,
      role = _props$role === void 0 ? Component !== 'hr' ? 'separator' : undefined : _props$role,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'fullWidth' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(props, ["absolute", "classes", "className", "component", "flexItem", "light", "orientation", "role", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className, variant !== 'fullWidth' && classes[variant], absolute && classes.absolute, flexItem && classes.flexItem, light && classes.light, orientation === 'vertical' && classes.vertical),
    role: role,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiDivider'
})(Divider));

/***/ }),

/***/ 71892:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports styles, isHorizontal, getAnchor */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85505);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48649);
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21407);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34621);
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60577);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58063);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81664);
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(381);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59355);












var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `variant="permanent or persistent"`. */
    docked: {
      flex: '0 0 auto'
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: '1 0 auto',
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      // temporary style
      position: 'fixed',
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      outline: 0
    },

    /* Styles applied to the `Paper` component if `anchor="left"`. */
    paperAnchorLeft: {
      left: 0,
      right: 'auto'
    },

    /* Styles applied to the `Paper` component if `anchor="right"`. */
    paperAnchorRight: {
      left: 'auto',
      right: 0
    },

    /* Styles applied to the `Paper` component if `anchor="top"`. */
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"`. */
    paperAnchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="left"` and `variant` is not "temporary". */
    paperAnchorDockedLeft: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="top"` and `variant` is not "temporary". */
    paperAnchorDockedTop: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="right"` and `variant` is not "temporary". */
    paperAnchorDockedRight: {
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"` and `variant` is not "temporary". */
    paperAnchorDockedBottom: {
      borderTop: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Modal` component. */
    modal: {}
  };
};
var oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};
function isHorizontal(anchor) {
  return ['left', 'right'].indexOf(anchor) !== -1;
}
function getAnchor(theme, anchor) {
  return theme.direction === 'rtl' && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
var defaultTransitionDuration = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_1__/* .duration.enteringScreen */ .x9.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_1__/* .duration.leavingScreen */ .x9.leavingScreen
};
/**
 * The props of the [Modal](/api/modal/) component are available
 * when `variant="temporary"` is set.
 */

var Drawer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Drawer(props, ref) {
  var _props$anchor = props.anchor,
      anchorProp = _props$anchor === void 0 ? 'left' : _props$anchor,
      BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 16 : _props$elevation,
      _props$ModalProps = props.ModalProps;
  _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;

  var BackdropPropsProp = _props$ModalProps.BackdropProps,
      ModalProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_props$ModalProps, ["BackdropProps"]),
      onClose = props.onClose,
      _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      SlideProps = props.SlideProps,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Slide__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'temporary' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(props, ["anchor", "BackdropProps", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(); // Let's assume that the Drawer will always be rendered on user space.
  // We use this state is order to skip the appear transition during the
  // initial mount of the component.

  var mounted = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    mounted.current = true;
  }, []);
  var anchor = getAnchor(theme, anchorProp);
  var drawer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Paper__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
    elevation: variant === 'temporary' ? elevation : 0,
    square: true
  }, PaperProps, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.paper, classes["paperAnchor".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(anchor))], PaperProps.className, variant !== 'temporary' && classes["paperAnchorDocked".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(anchor))])
  }), children);

  if (variant === 'permanent') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.root, classes.docked, className),
      ref: ref
    }, other), drawer);
  }

  var slidingDrawer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
    in: open,
    direction: oppositeDirection[anchor],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps), drawer);

  if (variant === 'persistent') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.root, classes.docked, className),
      ref: ref
    }, other), slidingDrawer);
  } // variant === temporary


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
    BackdropProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({}, BackdropProps, BackdropPropsProp, {
      transitionDuration: transitionDuration
    }),
    BackdropComponent: _Backdrop__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.root, classes.modal, className),
    open: open,
    onClose: onClose,
    ref: ref
  }, other, ModalProps), slidingDrawer);
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["ZP"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(styles, {
  name: 'MuiDrawer',
  flip: false
})(Drawer));

/***/ }),

/***/ 38030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80453);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38582);







var styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItemText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z && !disableTypography) {
    primary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z && !disableTypography) {
    secondary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(styles, {
  name: 'MuiListItemText'
})(ListItemText));

/***/ }),

/***/ 14632:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

exports.Z = _default;

/***/ }),

/***/ 33629:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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
  d: "M10 17l5-5-5-5v10z"
}), 'ArrowRight');

exports.Z = _default;

/***/ }),

/***/ 41212:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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

/***/ 11497:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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
  d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
}), 'Mic');

exports.Z = _default;

/***/ }),

/***/ 32832:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'RadioButtonChecked');

exports.Z = _default;

/***/ }),

/***/ 52935:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'RadioButtonUnchecked');

exports.Z = _default;

/***/ }),

/***/ 66869:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74540);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85505);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34621);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12933);
/* harmony import */ var _TreeViewContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83246);








var styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 0,
    margin: 0,
    listStyle: 'none'
  }
};

function arrayDiff(arr1, arr2) {
  if (arr1.length !== arr2.length) return true;

  for (var i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return true;
  }

  return false;
}

var findNextFirstChar = function findNextFirstChar(firstChars, startIndex, char) {
  for (var i = startIndex; i < firstChars.length; i += 1) {
    if (char === firstChars[i]) {
      return i;
    }
  }

  return -1;
};

var defaultExpandedDefault = [];
var defaultSelectedDefault = [];
var TreeView = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TreeView(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      defaultCollapseIcon = props.defaultCollapseIcon,
      defaultEndIcon = props.defaultEndIcon,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? defaultExpandedDefault : _props$defaultExpande,
      defaultExpandIcon = props.defaultExpandIcon,
      defaultParentIcon = props.defaultParentIcon,
      _props$defaultSelecte = props.defaultSelected,
      defaultSelected = _props$defaultSelecte === void 0 ? defaultSelectedDefault : _props$defaultSelecte,
      _props$disableSelecti = props.disableSelection,
      disableSelection = _props$disableSelecti === void 0 ? false : _props$disableSelecti,
      _props$multiSelect = props.multiSelect,
      multiSelect = _props$multiSelect === void 0 ? false : _props$multiSelect,
      expandedProp = props.expanded,
      onNodeSelect = props.onNodeSelect,
      onNodeToggle = props.onNodeToggle,
      selectedProp = props.selected,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "defaultCollapseIcon", "defaultEndIcon", "defaultExpanded", "defaultExpandIcon", "defaultParentIcon", "defaultSelected", "disableSelection", "multiSelect", "expanded", "onNodeSelect", "onNodeToggle", "selected"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      tabbable = _React$useState[0],
      setTabbable = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      focusedNodeId = _React$useState2[0],
      setFocusedNodeId = _React$useState2[1];

  var nodeMap = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  var firstCharMap = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  var visibleNodes = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);

  var _useControlled = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'TreeView',
    state: 'expanded'
  }),
      _useControlled2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var _useControlled3 = (0,_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    controlled: selectedProp,
    default: defaultSelected,
    name: 'TreeView',
    state: 'selected'
  }),
      _useControlled4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(_useControlled3, 2),
      selected = _useControlled4[0],
      setSelectedState = _useControlled4[1];
  /*
   * Status Helpers
   */


  var isExpanded = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (id) {
    return Array.isArray(expanded) ? expanded.indexOf(id) !== -1 : false;
  }, [expanded]);
  var isSelected = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (id) {
    return Array.isArray(selected) ? selected.indexOf(id) !== -1 : selected === id;
  }, [selected]);

  var isTabbable = function isTabbable(id) {
    return tabbable === id;
  };

  var isFocused = function isFocused(id) {
    return focusedNodeId === id;
  };
  /*
   * Node Helpers
   */


  var getNextNode = function getNextNode(id) {
    var nodeIndex = visibleNodes.current.indexOf(id);

    if (nodeIndex !== -1 && nodeIndex + 1 < visibleNodes.current.length) {
      return visibleNodes.current[nodeIndex + 1];
    }

    return null;
  };

  var getPreviousNode = function getPreviousNode(id) {
    var nodeIndex = visibleNodes.current.indexOf(id);

    if (nodeIndex !== -1 && nodeIndex - 1 >= 0) {
      return visibleNodes.current[nodeIndex - 1];
    }

    return null;
  };

  var getLastNode = function getLastNode() {
    return visibleNodes.current[visibleNodes.current.length - 1];
  };

  var getFirstNode = function getFirstNode() {
    return visibleNodes.current[0];
  };

  var getParent = function getParent(id) {
    return nodeMap.current[id].parent;
  };

  var getNodesInRange = function getNodesInRange(a, b) {
    var aIndex = visibleNodes.current.indexOf(a);
    var bIndex = visibleNodes.current.indexOf(b);
    var start = Math.min(aIndex, bIndex);
    var end = Math.max(aIndex, bIndex);
    return visibleNodes.current.slice(start, end + 1);
  };
  /*
   * Focus Helpers
   */


  var focus = function focus(id) {
    if (id) {
      setTabbable(id);
      setFocusedNodeId(id);
    }
  };

  var focusNextNode = function focusNextNode(id) {
    return focus(getNextNode(id));
  };

  var focusPreviousNode = function focusPreviousNode(id) {
    return focus(getPreviousNode(id));
  };

  var focusFirstNode = function focusFirstNode() {
    return focus(getFirstNode());
  };

  var focusLastNode = function focusLastNode() {
    return focus(getLastNode());
  };

  var focusByFirstCharacter = function focusByFirstCharacter(id, char) {
    var start;
    var index;
    var lowercaseChar = char.toLowerCase();
    var firstCharIds = [];
    var firstChars = []; // This really only works since the ids are strings

    Object.keys(firstCharMap.current).forEach(function (nodeId) {
      var firstChar = firstCharMap.current[nodeId];
      var map = nodeMap.current[nodeId];
      var visible = map.parent ? isExpanded(map.parent) : true;

      if (visible) {
        firstCharIds.push(nodeId);
        firstChars.push(firstChar);
      }
    }); // Get start index for search based on position of currentItem

    start = firstCharIds.indexOf(id) + 1;

    if (start === nodeMap.current.length) {
      start = 0;
    } // Check remaining slots in the menu


    index = findNextFirstChar(firstChars, start, lowercaseChar); // If not found in remaining slots, check from beginning

    if (index === -1) {
      index = findNextFirstChar(firstChars, 0, lowercaseChar);
    } // If match was found...


    if (index > -1) {
      focus(firstCharIds[index]);
    }
  };
  /*
   * Expansion Helpers
   */


  var toggleExpansion = function toggleExpansion(event) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : focusedNodeId;
    var newExpanded;

    if (expanded.indexOf(value) !== -1) {
      newExpanded = expanded.filter(function (id) {
        return id !== value;
      });
      setTabbable(function (oldTabbable) {
        var map = nodeMap.current[oldTabbable];

        if (oldTabbable && (map && map.parent ? map.parent.id : null) === value) {
          return value;
        }

        return oldTabbable;
      });
    } else {
      newExpanded = [value].concat(expanded);
    }

    if (onNodeToggle) {
      onNodeToggle(event, newExpanded);
    }

    setExpandedState(newExpanded);
  };

  var expandAllSiblings = function expandAllSiblings(event, id) {
    var map = nodeMap.current[id];
    var parent = nodeMap.current[map.parent];
    var diff;

    if (parent) {
      diff = parent.children.filter(function (child) {
        return !isExpanded(child);
      });
    } else {
      var topLevelNodes = nodeMap.current[-1].children;
      diff = topLevelNodes.filter(function (node) {
        return !isExpanded(node);
      });
    }

    var newExpanded = expanded.concat(diff);

    if (diff.length > 0) {
      setExpandedState(newExpanded);

      if (onNodeToggle) {
        onNodeToggle(event, newExpanded);
      }
    }
  };
  /*
   * Selection Helpers
   */


  var lastSelectedNode = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var lastSelectionWasRange = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var currentRangeSelection = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);

  var handleRangeArrowSelect = function handleRangeArrowSelect(event, nodes) {
    var base = selected;
    var start = nodes.start,
        next = nodes.next,
        current = nodes.current;

    if (!next || !current) {
      return;
    }

    if (currentRangeSelection.current.indexOf(current) === -1) {
      currentRangeSelection.current = [];
    }

    if (lastSelectionWasRange.current) {
      if (currentRangeSelection.current.indexOf(next) !== -1) {
        base = base.filter(function (id) {
          return id === start || id !== current;
        });
        currentRangeSelection.current = currentRangeSelection.current.filter(function (id) {
          return id === start || id !== current;
        });
      } else {
        base.push(next);
        currentRangeSelection.current.push(next);
      }
    } else {
      base.push(next);
      currentRangeSelection.current.push(current, next);
    }

    if (onNodeSelect) {
      onNodeSelect(event, base);
    }

    setSelectedState(base);
  };

  var handleRangeSelect = function handleRangeSelect(event, nodes) {
    var base = selected;
    var start = nodes.start,
        end = nodes.end; // If last selection was a range selection ignore nodes that were selected.

    if (lastSelectionWasRange.current) {
      base = selected.filter(function (id) {
        return currentRangeSelection.current.indexOf(id) === -1;
      });
    }

    var range = getNodesInRange(start, end);
    currentRangeSelection.current = range;
    var newSelected = base.concat(range);
    newSelected = newSelected.filter(function (id, i) {
      return newSelected.indexOf(id) === i;
    });

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var handleMultipleSelect = function handleMultipleSelect(event, value) {
    var newSelected = [];

    if (selected.indexOf(value) !== -1) {
      newSelected = selected.filter(function (id) {
        return id !== value;
      });
    } else {
      newSelected = [value].concat(selected);
    }

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var handleSingleSelect = function handleSingleSelect(event, value) {
    var newSelected = multiSelect ? [value] : value;

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var selectNode = function selectNode(event, id) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (id) {
      if (multiple) {
        handleMultipleSelect(event, id);
      } else {
        handleSingleSelect(event, id);
      }

      lastSelectedNode.current = id;
      lastSelectionWasRange.current = false;
      currentRangeSelection.current = [];
      return true;
    }

    return false;
  };

  var selectRange = function selectRange(event, nodes) {
    var stacked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var _nodes$start = nodes.start,
        start = _nodes$start === void 0 ? lastSelectedNode.current : _nodes$start,
        end = nodes.end,
        current = nodes.current;

    if (stacked) {
      handleRangeArrowSelect(event, {
        start: start,
        next: end,
        current: current
      });
    } else {
      handleRangeSelect(event, {
        start: start,
        end: end
      });
    }

    lastSelectionWasRange.current = true;
    return true;
  };

  var rangeSelectToFirst = function rangeSelectToFirst(event, id) {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }

    var start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    return selectRange(event, {
      start: start,
      end: getFirstNode()
    });
  };

  var rangeSelectToLast = function rangeSelectToLast(event, id) {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }

    var start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    return selectRange(event, {
      start: start,
      end: getLastNode()
    });
  };

  var selectNextNode = function selectNextNode(event, id) {
    return selectRange(event, {
      end: getNextNode(id),
      current: id
    }, true);
  };

  var selectPreviousNode = function selectPreviousNode(event, id) {
    return selectRange(event, {
      end: getPreviousNode(id),
      current: id
    }, true);
  };

  var selectAllNodes = function selectAllNodes(event) {
    return selectRange(event, {
      start: getFirstNode(),
      end: getLastNode()
    });
  };
  /*
   * Mapping Helpers
   */


  var addNodeToNodeMap = function addNodeToNodeMap(id, childrenIds) {
    var currentMap = nodeMap.current[id];
    nodeMap.current[id] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({}, currentMap, {
      children: childrenIds,
      id: id
    });
    childrenIds.forEach(function (childId) {
      var currentChildMap = nodeMap.current[childId];
      nodeMap.current[childId] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({}, currentChildMap, {
        parent: id,
        id: childId
      });
    });
  };

  var getNodesToRemove = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (id) {
    var map = nodeMap.current[id];
    var nodes = [];

    if (map) {
      nodes.push(id);

      if (map.children) {
        nodes.concat(map.children);
        map.children.forEach(function (node) {
          nodes.concat(getNodesToRemove(node));
        });
      }
    }

    return nodes;
  }, []);
  var cleanUpFirstCharMap = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (nodes) {
    var newMap = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({}, firstCharMap.current);

    nodes.forEach(function (node) {
      if (newMap[node]) {
        delete newMap[node];
      }
    });
    firstCharMap.current = newMap;
  }, []);
  var removeNodeFromNodeMap = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (id) {
    var nodes = getNodesToRemove(id);
    cleanUpFirstCharMap(nodes);

    var newMap = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({}, nodeMap.current);

    nodes.forEach(function (node) {
      var map = newMap[node];

      if (map) {
        if (map.parent) {
          var parentMap = newMap[map.parent];

          if (parentMap && parentMap.children) {
            var parentChildren = parentMap.children.filter(function (c) {
              return c !== node;
            });
            newMap[map.parent] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({}, parentMap, {
              children: parentChildren
            });
          }
        }

        delete newMap[node];
      }
    });
    nodeMap.current = newMap;
    setFocusedNodeId(function (oldFocusedNodeId) {
      if (oldFocusedNodeId === id) {
        return null;
      }

      return oldFocusedNodeId;
    });
  }, [getNodesToRemove, cleanUpFirstCharMap]);

  var mapFirstChar = function mapFirstChar(id, firstChar) {
    firstCharMap.current[id] = firstChar;
  };

  var prevChildIds = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      childrenCalculated = _React$useState3[0],
      setChildrenCalculated = _React$useState3[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var childIds = [];
    react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, function (child) {
      if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.props.nodeId) {
        childIds.push(child.props.nodeId);
      }
    });

    if (arrayDiff(prevChildIds.current, childIds)) {
      nodeMap.current[-1] = {
        parent: null,
        children: childIds
      };
      childIds.forEach(function (id, index) {
        if (index === 0) {
          setTabbable(id);
        }
      });
      visibleNodes.current = nodeMap.current[-1].children;
      prevChildIds.current = childIds;
      setChildrenCalculated(true);
    }
  }, [children]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var buildVisible = function buildVisible(nodes) {
      var list = [];

      for (var i = 0; i < nodes.length; i += 1) {
        var item = nodes[i];
        list.push(item);
        var childs = nodeMap.current[item].children;

        if (isExpanded(item) && childs) {
          list = list.concat(buildVisible(childs));
        }
      }

      return list;
    };

    if (childrenCalculated) {
      visibleNodes.current = buildVisible(nodeMap.current[-1].children);
    }
  }, [expanded, childrenCalculated, isExpanded, children]);

  var noopSelection = function noopSelection() {
    return false;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TreeViewContext__WEBPACK_IMPORTED_MODULE_5__/* .default.Provider */ .Z.Provider, {
    value: {
      icons: {
        defaultCollapseIcon: defaultCollapseIcon,
        defaultExpandIcon: defaultExpandIcon,
        defaultParentIcon: defaultParentIcon,
        defaultEndIcon: defaultEndIcon
      },
      focus: focus,
      focusFirstNode: focusFirstNode,
      focusLastNode: focusLastNode,
      focusNextNode: focusNextNode,
      focusPreviousNode: focusPreviousNode,
      focusByFirstCharacter: focusByFirstCharacter,
      expandAllSiblings: expandAllSiblings,
      toggleExpansion: toggleExpansion,
      isExpanded: isExpanded,
      isFocused: isFocused,
      isSelected: isSelected,
      selectNode: disableSelection ? noopSelection : selectNode,
      selectRange: disableSelection ? noopSelection : selectRange,
      selectNextNode: disableSelection ? noopSelection : selectNextNode,
      selectPreviousNode: disableSelection ? noopSelection : selectPreviousNode,
      rangeSelectToFirst: disableSelection ? noopSelection : rangeSelectToFirst,
      rangeSelectToLast: disableSelection ? noopSelection : rangeSelectToLast,
      selectAllNodes: disableSelection ? noopSelection : selectAllNodes,
      isTabbable: isTabbable,
      multiSelect: multiSelect,
      getParent: getParent,
      mapFirstChar: mapFirstChar,
      addNodeToNodeMap: addNodeToNodeMap,
      removeNodeFromNodeMap: removeNodeFromNodeMap
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    role: "tree",
    "aria-multiselectable": multiSelect,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(classes.root, className),
    ref: ref
  }, other), children));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(styles, {
  name: 'MuiTreeView'
})(TreeView));

/***/ }),

/***/ 83246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * @ignore - internal component.
 */

var TreeViewContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

if (false) {}

/* harmony default export */ __webpack_exports__["Z"] = (TreeViewContext);

/***/ }),

/***/ 91547:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var register = __webpack_require__(91383);

var addHook = __webpack_require__(82667);

var removeHook = __webpack_require__(96210); // bind with array of arguments: https://stackoverflow.com/a/21792913


var bind = Function.bind;
var bindable = bind.bind(bind);

function bindApi(hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state]);
  hook.api = {
    remove: removeHookRef
  };
  hook.remove = removeHookRef;
  ['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind];
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args);
  });
}

function HookSingular() {
  var singularHookName = 'h';
  var singularHookState = {
    registry: {}
  };
  var singularHook = register.bind(null, singularHookState, singularHookName);
  bindApi(singularHook, singularHookState, singularHookName);
  return singularHook;
}

function HookCollection() {
  var state = {
    registry: {}
  };
  var hook = register.bind(null, state);
  bindApi(hook, state);
  return hook;
}

var collectionHookDeprecationMessageDisplayed = false;

function Hook() {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
    collectionHookDeprecationMessageDisplayed = true;
  }

  return HookCollection();
}

Hook.Singular = HookSingular.bind();
Hook.Collection = HookCollection.bind();
module.exports = Hook; // expose constructors as a named property for TypeScript

module.exports.Hook = Hook;
module.exports.Singular = Hook.Singular;
module.exports.Collection = Hook.Collection;

/***/ }),

/***/ 82667:
/***/ (function(module) {

module.exports = addHook;

function addHook(state, kind, name, hook) {
  var orig = hook;

  if (!state.registry[name]) {
    state.registry[name] = [];
  }

  if (kind === "before") {
    hook = function hook(method, options) {
      return Promise.resolve().then(orig.bind(null, options)).then(method.bind(null, options));
    };
  }

  if (kind === "after") {
    hook = function hook(method, options) {
      var result;
      return Promise.resolve().then(method.bind(null, options)).then(function (result_) {
        result = result_;
        return orig(result, options);
      }).then(function () {
        return result;
      });
    };
  }

  if (kind === "error") {
    hook = function hook(method, options) {
      return Promise.resolve().then(method.bind(null, options)).catch(function (error) {
        return orig(error, options);
      });
    };
  }

  state.registry[name].push({
    hook: hook,
    orig: orig
  });
}

/***/ }),

/***/ 91383:
/***/ (function(module) {

module.exports = register;

function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }

  if (!options) {
    options = {};
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options);
    }, method)();
  }

  return Promise.resolve().then(function () {
    if (!state.registry[name]) {
      return method(options);
    }

    return state.registry[name].reduce(function (method, registered) {
      return registered.hook.bind(null, method, options);
    }, method)();
  });
}

/***/ }),

/***/ 96210:
/***/ (function(module) {

module.exports = removeHook;

function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }

  var index = state.registry[name].map(function (registered) {
    return registered.orig;
  }).indexOf(method);

  if (index === -1) {
    return;
  }

  state.registry[name].splice(index, 1);
}

/***/ }),

/***/ 75900:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          var inner = classNames.apply(null, arg);

          if (inner) {
            classes.push(inner);
          }
        }
      } else if (argType === 'object') {
        if (arg.toString === Object.prototype.toString) {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        } else {
          classes.push(arg.toString());
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ 62881:
/***/ (function(module) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }

  ;

  var debounced = function debounced() {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  debounced.flush = function () {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}

; // Adds compatibility for ES modules

debounce.debounce = debounce;
module.exports = debounce;

/***/ }),

/***/ 2412:
/***/ (function(module) {

"use strict";
 // do not edit .js files directly - edit src/index.jst

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  } // true if both NaN, false otherwise


  return a !== a && b !== b;
};

/***/ }),

/***/ 62022:
/***/ (function(module) {

module.exports = range;
/*
  range(0, 5); // [0, 1, 2, 3, 4]
  range(5); // [0, 1, 2, 3, 4]
  range(-5); // [0, -1, -2, -3, -4]
  range(0, 20, 5) // [0, 5, 10, 15]
  range(0, -20, -5) // [0, -5, -10, -15]
*/

function range(start, stop, step) {
  if (start != null && typeof start != 'number') {
    throw new Error('start must be a number or null');
  }

  if (stop != null && typeof stop != 'number') {
    throw new Error('stop must be a number or null');
  }

  if (step != null && typeof step != 'number') {
    throw new Error('step must be a number or null');
  }

  if (stop == null) {
    stop = start || 0;
    start = 0;
  }

  if (step == null) {
    step = stop > start ? 1 : -1;
  }

  var toReturn = [];
  var increasing = start < stop; //← here’s the change

  for (; increasing ? start < stop : start > stop; start += step) {
    toReturn.push(start);
  }

  return toReturn;
}

/***/ }),

/***/ 50557:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}
/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */


function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */


function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }

  return false;
}
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */


function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */


function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }

  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */


function baseIsNaN(value) {
  return value !== value;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */


function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function cacheHas(cache, key) {
  return cache.has(key);
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */


function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */


function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */


var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max;
/* Built-in method references that are verified to be native. */

var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */

function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */


function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */


function setCacheHas(value) {
  return this.__data__.has(value);
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */


function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }

  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }

  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }

  outer: while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;
    value = comparator || value !== 0 ? value : 0;

    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;

      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }

      result.push(value);
    } else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }

  return result;
}
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */


function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];

    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }

  return result;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */


function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */


function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */


function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order of result values is determined by the
 * order they occur in the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */


var difference = baseRest(function (array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
});
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */


function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */


var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */


function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */


function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = difference;

/***/ }),

/***/ 76474:
/***/ (function(module, exports) {

"use strict";
 // ref: https://github.com/tc39/proposal-global

var getGlobal = function getGlobal() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('unable to locate global object');
};

var global = getGlobal();
module.exports = exports = global.fetch; // Needed for TypeScript and Webpack.

if (global.fetch) {
  exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ 20918:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wrappy = __webpack_require__(39262);

module.exports = wrappy(once);
module.exports.strict = wrappy(onceStrict);
once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function value() {
      return once(this);
    },
    configurable: true
  });
  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function value() {
      return onceStrict(this);
    },
    configurable: true
  });
});

function once(fn) {
  var f = function f() {
    if (f.called) return f.value;
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  f.called = false;
  return f;
}

function onceStrict(fn) {
  var f = function f() {
    if (f.called) throw new Error(f.onceError);
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  var name = fn.name || 'Function wrapped with `once`';
  f.onceError = name + " shouldn't be called more than once";
  f.called = false;
  return f;
}

/***/ }),

/***/ 71717:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/** @license React v0.26.2
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
  var exports = {};
  'use strict';

  var aa = __webpack_require__(46494),
      ba = __webpack_require__(67294),
      m = __webpack_require__(63840);

  function q(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    }

    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }

  var ca = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      da = 60103,
      ea = 60106,
      fa = 60107,
      ha = 60108,
      ia = 60114,
      ja = 60109,
      ka = 60110,
      la = 60112,
      ma = 60113,
      na = 60120,
      oa = 60115,
      pa = 60116,
      qa = 60121,
      ra = 60129,
      sa = 60130,
      ta = 60131;

  if ("function" === typeof Symbol && Symbol.for) {
    var r = Symbol.for;
    da = r("react.element");
    ea = r("react.portal");
    fa = r("react.fragment");
    ha = r("react.strict_mode");
    ia = r("react.profiler");
    ja = r("react.provider");
    ka = r("react.context");
    la = r("react.forward_ref");
    ma = r("react.suspense");
    na = r("react.suspense_list");
    oa = r("react.memo");
    pa = r("react.lazy");
    qa = r("react.block");
    r("react.scope");
    ra = r("react.debug_trace_mode");
    sa = r("react.offscreen");
    ta = r("react.legacy_hidden");
  }

  var ua = "function" === typeof Symbol && Symbol.iterator;

  function va(a) {
    if (null === a || "object" !== typeof a) return null;
    a = ua && a[ua] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }

  function wa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;

    switch (a) {
      case fa:
        return "Fragment";

      case ea:
        return "Portal";

      case ia:
        return "Profiler";

      case ha:
        return "StrictMode";

      case ma:
        return "Suspense";

      case na:
        return "SuspenseList";
    }

    if ("object" === typeof a) switch (a.$$typeof) {
      case ka:
        return (a.displayName || "Context") + ".Consumer";

      case ja:
        return (a._context.displayName || "Context") + ".Provider";

      case la:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

      case oa:
        return wa(a.type);

      case qa:
        return wa(a._render);

      case pa:
        b = a._payload;
        a = a._init;

        try {
          return wa(a(b));
        } catch (c) {}

    }
    return null;
  }

  function xa(a) {
    var b = a,
        c = a;
    if (a.alternate) for (; b.return;) {
      b = b.return;
    } else {
      a = b;

      do {
        b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return;
      } while (a);
    }
    return 3 === b.tag ? c : null;
  }

  function ya(a) {
    if (xa(a) !== a) throw Error(q(188));
  }

  function za(a) {
    var b = a.alternate;

    if (!b) {
      b = xa(a);
      if (null === b) throw Error(q(188));
      return b !== a ? null : a;
    }

    for (var c = a, d = b;;) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;

      if (null === f) {
        d = e.return;

        if (null !== d) {
          c = d;
          continue;
        }

        break;
      }

      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return ya(e), a;
          if (f === d) return ya(e), b;
          f = f.sibling;
        }

        throw Error(q(188));
      }

      if (c.return !== d.return) c = e, d = f;else {
        for (var g = !1, h = e.child; h;) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }

          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }

          h = h.sibling;
        }

        if (!g) {
          for (h = f.child; h;) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }

            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }

            h = h.sibling;
          }

          if (!g) throw Error(q(189));
        }
      }
      if (c.alternate !== d) throw Error(q(190));
    }

    if (3 !== c.tag) throw Error(q(188));
    return c.stateNode.current === c ? a : b;
  }

  function Aa(a) {
    a = za(a);
    if (!a) return null;

    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child) b.child.return = b, b = b.child;else {
        if (b === a) break;

        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
    }

    return null;
  }

  function Ba(a) {
    a = za(a);
    if (!a) return null;

    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child && 4 !== b.tag) b.child.return = b, b = b.child;else {
        if (b === a) break;

        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
    }

    return null;
  }

  function Ca(a, b) {
    for (var c = a.alternate; null !== b;) {
      if (b === a || b === c) return !0;
      b = b.return;
    }

    return !1;
  }

  var Da = $$$hostConfig.getPublicInstance,
      Ea = $$$hostConfig.getRootHostContext,
      Fa = $$$hostConfig.getChildHostContext,
      Ga = $$$hostConfig.prepareForCommit,
      Ha = $$$hostConfig.resetAfterCommit,
      Ia = $$$hostConfig.createInstance,
      Ja = $$$hostConfig.appendInitialChild,
      Ka = $$$hostConfig.finalizeInitialChildren,
      La = $$$hostConfig.prepareUpdate,
      Ma = $$$hostConfig.shouldSetTextContent,
      Na = $$$hostConfig.createTextInstance,
      Pa = $$$hostConfig.scheduleTimeout,
      Qa = $$$hostConfig.cancelTimeout,
      Ra = $$$hostConfig.noTimeout,
      Sa = $$$hostConfig.isPrimaryRenderer,
      Ta = $$$hostConfig.supportsMutation,
      Ua = $$$hostConfig.supportsPersistence,
      Va = $$$hostConfig.supportsHydration,
      Wa = $$$hostConfig.getInstanceFromNode,
      Xa = $$$hostConfig.makeOpaqueHydratingObject,
      Ya = $$$hostConfig.makeClientId,
      Za = $$$hostConfig.beforeActiveInstanceBlur,
      $a = $$$hostConfig.afterActiveInstanceBlur,
      ab = $$$hostConfig.preparePortalMount,
      bb = $$$hostConfig.supportsTestSelectors,
      cb = $$$hostConfig.findFiberRoot,
      db = $$$hostConfig.getBoundingRect,
      eb = $$$hostConfig.getTextContent,
      fb = $$$hostConfig.isHiddenSubtree,
      gb = $$$hostConfig.matchAccessibilityRole,
      hb = $$$hostConfig.setFocusIfFocusable,
      ib = $$$hostConfig.setupIntersectionObserver,
      jb = $$$hostConfig.appendChild,
      kb = $$$hostConfig.appendChildToContainer,
      lb = $$$hostConfig.commitTextUpdate,
      mb = $$$hostConfig.commitMount,
      nb = $$$hostConfig.commitUpdate,
      ob = $$$hostConfig.insertBefore,
      pb = $$$hostConfig.insertInContainerBefore,
      qb = $$$hostConfig.removeChild,
      rb = $$$hostConfig.removeChildFromContainer,
      sb = $$$hostConfig.resetTextContent,
      tb = $$$hostConfig.hideInstance,
      ub = $$$hostConfig.hideTextInstance,
      vb = $$$hostConfig.unhideInstance,
      wb = $$$hostConfig.unhideTextInstance,
      xb = $$$hostConfig.clearContainer,
      yb = $$$hostConfig.cloneInstance,
      zb = $$$hostConfig.createContainerChildSet,
      Ab = $$$hostConfig.appendChildToContainerChildSet,
      Bb = $$$hostConfig.finalizeContainerChildren,
      Cb = $$$hostConfig.replaceContainerChildren,
      Db = $$$hostConfig.cloneHiddenInstance,
      Eb = $$$hostConfig.cloneHiddenTextInstance,
      Fb = $$$hostConfig.canHydrateInstance,
      Gb = $$$hostConfig.canHydrateTextInstance,
      Hb = $$$hostConfig.isSuspenseInstancePending,
      Ib = $$$hostConfig.isSuspenseInstanceFallback,
      Jb = $$$hostConfig.getNextHydratableSibling,
      Kb = $$$hostConfig.getFirstHydratableChild,
      Lb = $$$hostConfig.hydrateInstance,
      Mb = $$$hostConfig.hydrateTextInstance,
      Nb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
      Ob = $$$hostConfig.commitHydratedContainer,
      Pb = $$$hostConfig.commitHydratedSuspenseInstance,
      Qb;

  function Rb(a) {
    if (void 0 === Qb) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Qb = b && b[1] || "";
    }
    return "\n" + Qb + a;
  }

  var Sb = !1;

  function Tb(a, b) {
    if (!a || Sb) return "";
    Sb = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;

    try {
      if (b) {
        if (b = function b() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", {
          set: function set() {
            throw Error();
          }
        }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (k) {
            var d = k;
          }

          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (k) {
            d = k;
          }

          a.call(b.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (k) {
          d = k;
        }

        a();
      }
    } catch (k) {
      if (k && d && "string" === typeof k.stack) {
        for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) {
          h--;
        }

        for (; 1 <= g && 0 <= h; g--, h--) {
          if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do {
                if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at ");
              } while (1 <= g && 0 <= h);
            }

            break;
          }
        }
      }
    } finally {
      Sb = !1, Error.prepareStackTrace = c;
    }

    return (a = a ? a.displayName || a.name : "") ? Rb(a) : "";
  }

  var Ub = [],
      Vb = -1;

  function Wb(a) {
    return {
      current: a
    };
  }

  function z(a) {
    0 > Vb || (a.current = Ub[Vb], Ub[Vb] = null, Vb--);
  }

  function A(a, b) {
    Vb++;
    Ub[Vb] = a.current;
    a.current = b;
  }

  var Xb = {},
      B = Wb(Xb),
      D = Wb(!1),
      Yb = Xb;

  function Zb(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Xb;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
        f;

    for (f in c) {
      e[f] = b[f];
    }

    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }

  function E(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }

  function $b() {
    z(D);
    z(B);
  }

  function ac(a, b, c) {
    if (B.current !== Xb) throw Error(q(168));
    A(B, b);
    A(D, c);
  }

  function bc(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();

    for (var e in d) {
      if (!(e in a)) throw Error(q(108, wa(b) || "Unknown", e));
    }

    return aa({}, c, d);
  }

  function cc(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Xb;
    Yb = B.current;
    A(B, a);
    A(D, D.current);
    return !0;
  }

  function dc(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(q(169));
    c ? (a = bc(a, b, Yb), d.__reactInternalMemoizedMergedChildContext = a, z(D), z(B), A(B, a)) : z(D);
    A(D, c);
  }

  var ec = null,
      fc = null,
      gc = m.unstable_now;
  gc();
  var hc = 0,
      F = 8;

  function ic(a) {
    if (0 !== (1 & a)) return F = 15, 1;
    if (0 !== (2 & a)) return F = 14, 2;
    if (0 !== (4 & a)) return F = 13, 4;
    var b = 24 & a;
    if (0 !== b) return F = 12, b;
    if (0 !== (a & 32)) return F = 11, 32;
    b = 192 & a;
    if (0 !== b) return F = 10, b;
    if (0 !== (a & 256)) return F = 9, 256;
    b = 3584 & a;
    if (0 !== b) return F = 8, b;
    if (0 !== (a & 4096)) return F = 7, 4096;
    b = 4186112 & a;
    if (0 !== b) return F = 6, b;
    b = 62914560 & a;
    if (0 !== b) return F = 5, b;
    if (a & 67108864) return F = 4, 67108864;
    if (0 !== (a & 134217728)) return F = 3, 134217728;
    b = 805306368 & a;
    if (0 !== b) return F = 2, b;
    if (0 !== (1073741824 & a)) return F = 1, 1073741824;
    F = 8;
    return a;
  }

  function jc(a) {
    switch (a) {
      case 99:
        return 15;

      case 98:
        return 10;

      case 97:
      case 96:
        return 8;

      case 95:
        return 2;

      default:
        return 0;
    }
  }

  function kc(a) {
    switch (a) {
      case 15:
      case 14:
        return 99;

      case 13:
      case 12:
      case 11:
      case 10:
        return 98;

      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;

      case 3:
      case 2:
      case 1:
        return 95;

      case 0:
        return 90;

      default:
        throw Error(q(358, a));
    }
  }

  function lc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return F = 0;
    var d = 0,
        e = 0,
        f = a.expiredLanes,
        g = a.suspendedLanes,
        h = a.pingedLanes;
    if (0 !== f) d = f, e = F = 15;else if (f = c & 134217727, 0 !== f) {
      var k = f & ~g;
      0 !== k ? (d = ic(k), e = F) : (h &= f, 0 !== h && (d = ic(h), e = F));
    } else f = c & ~g, 0 !== f ? (d = ic(f), e = F) : 0 !== h && (d = ic(h), e = F);
    if (0 === d) return 0;
    d = 31 - mc(d);
    d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;

    if (0 !== b && b !== d && 0 === (b & g)) {
      ic(b);
      if (e <= F) return b;
      F = e;
    }

    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) {
      c = 31 - mc(b), e = 1 << c, d |= a[c], b &= ~e;
    }
    return d;
  }

  function nc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }

  function oc(a, b) {
    switch (a) {
      case 15:
        return 1;

      case 14:
        return 2;

      case 12:
        return a = pc(24 & ~b), 0 === a ? oc(10, b) : a;

      case 10:
        return a = pc(192 & ~b), 0 === a ? oc(8, b) : a;

      case 8:
        return a = pc(3584 & ~b), 0 === a && (a = pc(4186112 & ~b), 0 === a && (a = 512)), a;

      case 2:
        return b = pc(805306368 & ~b), 0 === b && (b = 268435456), b;
    }

    throw Error(q(358, a));
  }

  function pc(a) {
    return a & -a;
  }

  function qc(a) {
    for (var b = [], c = 0; 31 > c; c++) {
      b.push(a);
    }

    return b;
  }

  function rc(a, b, c) {
    a.pendingLanes |= b;
    var d = b - 1;
    a.suspendedLanes &= d;
    a.pingedLanes &= d;
    a = a.eventTimes;
    b = 31 - mc(b);
    a[b] = c;
  }

  var mc = Math.clz32 ? Math.clz32 : sc,
      tc = Math.log,
      uc = Math.LN2;

  function sc(a) {
    return 0 === a ? 32 : 31 - (tc(a) / uc | 0) | 0;
  }

  var vc = m.unstable_runWithPriority,
      wc = m.unstable_scheduleCallback,
      xc = m.unstable_cancelCallback,
      yc = m.unstable_shouldYield,
      zc = m.unstable_requestPaint,
      Ac = m.unstable_now,
      Bc = m.unstable_getCurrentPriorityLevel,
      Cc = m.unstable_ImmediatePriority,
      Dc = m.unstable_UserBlockingPriority,
      Ec = m.unstable_NormalPriority,
      Fc = m.unstable_LowPriority,
      Gc = m.unstable_IdlePriority,
      Hc = {},
      Ic = void 0 !== zc ? zc : function () {},
      Jc = null,
      Kc = null,
      Lc = !1,
      Mc = Ac(),
      G = 1E4 > Mc ? Ac : function () {
    return Ac() - Mc;
  };

  function Nc() {
    switch (Bc()) {
      case Cc:
        return 99;

      case Dc:
        return 98;

      case Ec:
        return 97;

      case Fc:
        return 96;

      case Gc:
        return 95;

      default:
        throw Error(q(332));
    }
  }

  function Oc(a) {
    switch (a) {
      case 99:
        return Cc;

      case 98:
        return Dc;

      case 97:
        return Ec;

      case 96:
        return Fc;

      case 95:
        return Gc;

      default:
        throw Error(q(332));
    }
  }

  function Pc(a, b) {
    a = Oc(a);
    return vc(a, b);
  }

  function Qc(a, b, c) {
    a = Oc(a);
    return wc(a, b, c);
  }

  function H() {
    if (null !== Kc) {
      var a = Kc;
      Kc = null;
      xc(a);
    }

    Rc();
  }

  function Rc() {
    if (!Lc && null !== Jc) {
      Lc = !0;
      var a = 0;

      try {
        var b = Jc;
        Pc(99, function () {
          for (; a < b.length; a++) {
            var c = b[a];

            do {
              c = c(!0);
            } while (null !== c);
          }
        });
        Jc = null;
      } catch (c) {
        throw null !== Jc && (Jc = Jc.slice(a + 1)), wc(Cc, H), c;
      } finally {
        Lc = !1;
      }
    }
  }

  var Sc = ca.ReactCurrentBatchConfig;

  function Tc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }

  var I = "function" === typeof Object.is ? Object.is : Tc,
      Uc = Object.prototype.hasOwnProperty;

  function Vc(a, b) {
    if (I(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a),
        d = Object.keys(b);
    if (c.length !== d.length) return !1;

    for (d = 0; d < c.length; d++) {
      if (!Uc.call(b, c[d]) || !I(a[c[d]], b[c[d]])) return !1;
    }

    return !0;
  }

  function Wc(a) {
    switch (a.tag) {
      case 5:
        return Rb(a.type);

      case 16:
        return Rb("Lazy");

      case 13:
        return Rb("Suspense");

      case 19:
        return Rb("SuspenseList");

      case 0:
      case 2:
      case 15:
        return a = Tb(a.type, !1), a;

      case 11:
        return a = Tb(a.type.render, !1), a;

      case 22:
        return a = Tb(a.type._render, !1), a;

      case 1:
        return a = Tb(a.type, !0), a;

      default:
        return "";
    }
  }

  function Xc(a, b) {
    if (a && a.defaultProps) {
      b = aa({}, b);
      a = a.defaultProps;

      for (var c in a) {
        void 0 === b[c] && (b[c] = a[c]);
      }

      return b;
    }

    return b;
  }

  var Yc = Wb(null),
      Zc = null,
      $c = null,
      ad = null;

  function bd() {
    ad = $c = Zc = null;
  }

  function cd(a, b) {
    a = a.type._context;
    Sa ? (A(Yc, a._currentValue), a._currentValue = b) : (A(Yc, a._currentValue2), a._currentValue2 = b);
  }

  function dd(a) {
    var b = Yc.current;
    z(Yc);
    a = a.type._context;
    Sa ? a._currentValue = b : a._currentValue2 = b;
  }

  function ed(a, b) {
    for (; null !== a;) {
      var c = a.alternate;
      if ((a.childLanes & b) === b) {
        if (null === c || (c.childLanes & b) === b) break;else c.childLanes |= b;
      } else a.childLanes |= b, null !== c && (c.childLanes |= b);
      a = a.return;
    }
  }

  function fd(a, b) {
    Zc = a;
    ad = $c = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (gd = !0), a.firstContext = null);
  }

  function J(a, b) {
    if (ad !== a && !1 !== b && 0 !== b) {
      if ("number" !== typeof b || 1073741823 === b) ad = a, b = 1073741823;
      b = {
        context: a,
        observedBits: b,
        next: null
      };

      if (null === $c) {
        if (null === Zc) throw Error(q(308));
        $c = b;
        Zc.dependencies = {
          lanes: 0,
          firstContext: b,
          responders: null
        };
      } else $c = $c.next = b;
    }

    return Sa ? a._currentValue : a._currentValue2;
  }

  var hd = !1;

  function id(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null
      },
      effects: null
    };
  }

  function jd(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      effects: a.effects
    });
  }

  function kd(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }

  function md(a, b) {
    a = a.updateQueue;

    if (null !== a) {
      a = a.shared;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
  }

  function nd(a, b) {
    var c = a.updateQueue,
        d = a.alternate;

    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null,
          f = null;
      c = c.firstBaseUpdate;

      if (null !== c) {
        do {
          var g = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);

        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;

      c = {
        baseState: d.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: d.shared,
        effects: d.effects
      };
      a.updateQueue = c;
      return;
    }

    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }

  function od(a, b, c, d) {
    var e = a.updateQueue;
    hd = !1;
    var f = e.firstBaseUpdate,
        g = e.lastBaseUpdate,
        h = e.shared.pending;

    if (null !== h) {
      e.shared.pending = null;
      var k = h,
          l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var n = a.alternate;

      if (null !== n) {
        n = n.updateQueue;
        var t = n.lastBaseUpdate;
        t !== g && (null === t ? n.firstBaseUpdate = l : t.next = l, n.lastBaseUpdate = k);
      }
    }

    if (null !== f) {
      t = e.baseState;
      g = 0;
      n = l = k = null;

      do {
        h = f.lane;
        var p = f.eventTime;

        if ((d & h) === h) {
          null !== n && (n = n.next = {
            eventTime: p,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });

          a: {
            var y = a,
                x = f;
            h = b;
            p = c;

            switch (x.tag) {
              case 1:
                y = x.payload;

                if ("function" === typeof y) {
                  t = y.call(p, t, h);
                  break a;
                }

                t = y;
                break a;

              case 3:
                y.flags = y.flags & -4097 | 64;

              case 0:
                y = x.payload;
                h = "function" === typeof y ? y.call(p, t, h) : y;
                if (null === h || void 0 === h) break a;
                t = aa({}, t, h);
                break a;

              case 2:
                hd = !0;
            }
          }

          null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
        } else p = {
          eventTime: p,
          lane: h,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        }, null === n ? (l = n = p, k = t) : n = n.next = p, g |= h;

        f = f.next;
        if (null === f) if (h = e.shared.pending, null === h) break;else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
      } while (1);

      null === n && (k = t);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = n;
      pd |= g;
      a.lanes = g;
      a.memoizedState = t;
    }
  }

  function qd(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b],
          e = d.callback;

      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(q(191, e));
        e.call(d);
      }
    }
  }

  var rd = new ba.Component().refs;

  function sd(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : aa({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }

  var vd = {
    isMounted: function isMounted(a) {
      return (a = a._reactInternals) ? xa(a) === a : !1;
    },
    enqueueSetState: function enqueueSetState(a, b, c) {
      a = a._reactInternals;
      var d = K(),
          e = td(a),
          f = kd(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      md(a, f);
      ud(a, e, d);
    },
    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
      a = a._reactInternals;
      var d = K(),
          e = td(a),
          f = kd(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      md(a, f);
      ud(a, e, d);
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
      a = a._reactInternals;
      var c = K(),
          d = td(a),
          e = kd(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      md(a, e);
      ud(a, d, c);
    }
  };

  function wd(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Vc(c, d) || !Vc(e, f) : !0;
  }

  function xd(a, b, c) {
    var d = !1,
        e = Xb;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = J(f) : (e = E(b) ? Yb : B.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Zb(a, e) : Xb);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = vd;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }

  function yd(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && vd.enqueueReplaceState(b, b.state, null);
  }

  function zd(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = rd;
    id(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = J(f) : (f = E(b) ? Yb : B.current, e.context = Zb(a, f));
    od(a, c, e, d);
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (sd(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && vd.enqueueReplaceState(e, e.state, null), od(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4);
  }

  var Ad = Array.isArray;

  function Bd(a, b, c) {
    a = c.ref;

    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;

        if (c) {
          if (1 !== c.tag) throw Error(q(309));
          var d = c.stateNode;
        }

        if (!d) throw Error(q(147, a));
        var e = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

        b = function b(a) {
          var b = d.refs;
          b === rd && (b = d.refs = {});
          null === a ? delete b[e] : b[e] = a;
        };

        b._stringRef = e;
        return b;
      }

      if ("string" !== typeof a) throw Error(q(284));
      if (!c._owner) throw Error(q(290, a));
    }

    return a;
  }

  function Cd(a, b) {
    if ("textarea" !== a.type) throw Error(q(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
  }

  function Dd(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;
        null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
        c.nextEffect = null;
        c.flags = 8;
      }
    }

    function c(c, d) {
      if (!a) return null;

      for (; null !== d;) {
        b(c, d), d = d.sibling;
      }

      return null;
    }

    function d(a, b) {
      for (a = new Map(); null !== b;) {
        null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
      }

      return a;
    }

    function e(a, b) {
      a = Ed(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }

    function f(b, c, d) {
      b.index = d;
      if (!a) return c;
      d = b.alternate;
      if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
      b.flags = 2;
      return c;
    }

    function g(b) {
      a && null === b.alternate && (b.flags = 2);
      return b;
    }

    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag) return b = Fd(c, a.mode, d), b.return = a, b;
      b = e(b, c);
      b.return = a;
      return b;
    }

    function k(a, b, c, d) {
      if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Bd(a, b, c), d.return = a, d;
      d = Gd(c.type, c.key, c.props, null, a.mode, d);
      d.ref = Bd(a, b, c);
      d.return = a;
      return d;
    }

    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Hd(c, a.mode, d), b.return = a, b;
      b = e(b, c.children || []);
      b.return = a;
      return b;
    }

    function n(a, b, c, d, f) {
      if (null === b || 7 !== b.tag) return b = Id(c, a.mode, d, f), b.return = a, b;
      b = e(b, c);
      b.return = a;
      return b;
    }

    function t(a, b, c) {
      if ("string" === typeof b || "number" === typeof b) return b = Fd("" + b, a.mode, c), b.return = a, b;

      if ("object" === typeof b && null !== b) {
        switch (b.$$typeof) {
          case da:
            return c = Gd(b.type, b.key, b.props, null, a.mode, c), c.ref = Bd(a, null, b), c.return = a, c;

          case ea:
            return b = Hd(b, a.mode, c), b.return = a, b;
        }

        if (Ad(b) || va(b)) return b = Id(b, a.mode, c, null), b.return = a, b;
        Cd(a, b);
      }

      return null;
    }

    function p(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case da:
            return c.key === e ? c.type === fa ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

          case ea:
            return c.key === e ? l(a, b, c, d) : null;
        }

        if (Ad(c) || va(c)) return null !== e ? null : n(a, b, c, d, null);
        Cd(a, c);
      }

      return null;
    }

    function y(a, b, c, d, e) {
      if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

      if ("object" === typeof d && null !== d) {
        switch (d.$$typeof) {
          case da:
            return a = a.get(null === d.key ? c : d.key) || null, d.type === fa ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);

          case ea:
            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
        }

        if (Ad(d) || va(d)) return a = a.get(c) || null, n(b, a, d, e, null);
        Cd(b, d);
      }

      return null;
    }

    function x(e, g, h, k) {
      for (var l = null, v = null, u = g, C = g = 0, n = null; null !== u && C < h.length; C++) {
        u.index > C ? (n = u, u = null) : n = u.sibling;
        var w = p(e, u, h[C], k);

        if (null === w) {
          null === u && (u = n);
          break;
        }

        a && u && null === w.alternate && b(e, u);
        g = f(w, g, C);
        null === v ? l = w : v.sibling = w;
        v = w;
        u = n;
      }

      if (C === h.length) return c(e, u), l;

      if (null === u) {
        for (; C < h.length; C++) {
          u = t(e, h[C], k), null !== u && (g = f(u, g, C), null === v ? l = u : v.sibling = u, v = u);
        }

        return l;
      }

      for (u = d(e, u); C < h.length; C++) {
        n = y(u, e, C, h[C], k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? C : n.key), g = f(n, g, C), null === v ? l = n : v.sibling = n, v = n);
      }

      a && u.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }

    function Y(e, g, h, k) {
      var l = va(h);
      if ("function" !== typeof l) throw Error(q(150));
      h = l.call(h);
      if (null == h) throw Error(q(151));

      for (var u = l = null, v = g, n = g = 0, C = null, w = h.next(); null !== v && !w.done; n++, w = h.next()) {
        v.index > n ? (C = v, v = null) : C = v.sibling;
        var x = p(e, v, w.value, k);

        if (null === x) {
          null === v && (v = C);
          break;
        }

        a && v && null === x.alternate && b(e, v);
        g = f(x, g, n);
        null === u ? l = x : u.sibling = x;
        u = x;
        v = C;
      }

      if (w.done) return c(e, v), l;

      if (null === v) {
        for (; !w.done; n++, w = h.next()) {
          w = t(e, w.value, k), null !== w && (g = f(w, g, n), null === u ? l = w : u.sibling = w, u = w);
        }

        return l;
      }

      for (v = d(e, v); !w.done; n++, w = h.next()) {
        w = y(v, e, n, w.value, k), null !== w && (a && null !== w.alternate && v.delete(null === w.key ? n : w.key), g = f(w, g, n), null === u ? l = w : u.sibling = w, u = w);
      }

      a && v.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }

    return function (a, d, f, h) {
      var k = "object" === typeof f && null !== f && f.type === fa && null === f.key;
      k && (f = f.props.children);
      var l = "object" === typeof f && null !== f;
      if (l) switch (f.$$typeof) {
        case da:
          a: {
            l = f.key;

            for (k = d; null !== k;) {
              if (k.key === l) {
                switch (k.tag) {
                  case 7:
                    if (f.type === fa) {
                      c(a, k.sibling);
                      d = e(k, f.props.children);
                      d.return = a;
                      a = d;
                      break a;
                    }

                    break;

                  default:
                    if (k.elementType === f.type) {
                      c(a, k.sibling);
                      d = e(k, f.props);
                      d.ref = Bd(a, k, f);
                      d.return = a;
                      a = d;
                      break a;
                    }

                }

                c(a, k);
                break;
              } else b(a, k);

              k = k.sibling;
            }

            f.type === fa ? (d = Id(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Gd(f.type, f.key, f.props, null, a.mode, h), h.ref = Bd(a, d, f), h.return = a, a = h);
          }

          return g(a);

        case ea:
          a: {
            for (k = f.key; null !== d;) {
              if (d.key === k) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);
                  d = e(d, f.children || []);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, d);
                  break;
                }
              } else b(a, d);
              d = d.sibling;
            }

            d = Hd(f, a.mode, h);
            d.return = a;
            a = d;
          }

          return g(a);
      }
      if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Fd(f, a.mode, h), d.return = a, a = d), g(a);
      if (Ad(f)) return x(a, d, f, h);
      if (va(f)) return Y(a, d, f, h);
      l && Cd(a, f);
      if ("undefined" === typeof f && !k) switch (a.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(q(152, wa(a.type) || "Component"));
      }
      return c(a, d);
    };
  }

  var Jd = Dd(!0),
      Kd = Dd(!1),
      Ld = {},
      L = Wb(Ld),
      Md = Wb(Ld),
      Nd = Wb(Ld);

  function Od(a) {
    if (a === Ld) throw Error(q(174));
    return a;
  }

  function Pd(a, b) {
    A(Nd, b);
    A(Md, a);
    A(L, Ld);
    a = Ea(b);
    z(L);
    A(L, a);
  }

  function Qd() {
    z(L);
    z(Md);
    z(Nd);
  }

  function Rd(a) {
    var b = Od(Nd.current),
        c = Od(L.current);
    b = Fa(c, a.type, b);
    c !== b && (A(Md, a), A(L, b));
  }

  function Sd(a) {
    Md.current === a && (z(L), z(Md));
  }

  var M = Wb(0);

  function Td(a) {
    for (var b = a; null !== b;) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || Hb(c) || Ib(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 64)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }

      if (b === a) break;

      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }

    return null;
  }

  var Ud = null,
      Vd = null,
      Wd = !1;

  function Xd(a, b) {
    var c = Yd(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a;
    c.flags = 8;
    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }

  function Zd(a, b) {
    switch (a.tag) {
      case 5:
        return b = Fb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

      case 6:
        return b = Gb(b, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

      case 13:
        return !1;

      default:
        return !1;
    }
  }

  function $d(a) {
    if (Wd) {
      var b = Vd;

      if (b) {
        var c = b;

        if (!Zd(a, b)) {
          b = Jb(c);

          if (!b || !Zd(a, b)) {
            a.flags = a.flags & -1025 | 2;
            Wd = !1;
            Ud = a;
            return;
          }

          Xd(Ud, c);
        }

        Ud = a;
        Vd = Kb(b);
      } else a.flags = a.flags & -1025 | 2, Wd = !1, Ud = a;
    }
  }

  function ae(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) {
      a = a.return;
    }

    Ud = a;
  }

  function be(a) {
    if (!Va || a !== Ud) return !1;
    if (!Wd) return ae(a), Wd = !0, !1;
    var b = a.type;
    if (5 !== a.tag || "head" !== b && "body" !== b && !Ma(b, a.memoizedProps)) for (b = Vd; b;) {
      Xd(a, b), b = Jb(b);
    }
    ae(a);

    if (13 === a.tag) {
      if (!Va) throw Error(q(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(q(317));
      Vd = Nb(a);
    } else Vd = Ud ? Jb(a.stateNode) : null;

    return !0;
  }

  function ce() {
    Va && (Vd = Ud = null, Wd = !1);
  }

  var de = [];

  function ee() {
    for (var a = 0; a < de.length; a++) {
      var b = de[a];
      Sa ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
    }

    de.length = 0;
  }

  var fe = ca.ReactCurrentDispatcher,
      ge = ca.ReactCurrentBatchConfig,
      he = 0,
      N = null,
      O = null,
      P = null,
      ie = !1,
      je = !1;

  function Q() {
    throw Error(q(321));
  }

  function ke(a, b) {
    if (null === b) return !1;

    for (var c = 0; c < b.length && c < a.length; c++) {
      if (!I(a[c], b[c])) return !1;
    }

    return !0;
  }

  function le(a, b, c, d, e, f) {
    he = f;
    N = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    fe.current = null === a || null === a.memoizedState ? me : ne;
    a = c(d, e);

    if (je) {
      f = 0;

      do {
        je = !1;
        if (!(25 > f)) throw Error(q(301));
        f += 1;
        P = O = null;
        b.updateQueue = null;
        fe.current = oe;
        a = c(d, e);
      } while (je);
    }

    fe.current = pe;
    b = null !== O && null !== O.next;
    he = 0;
    P = O = N = null;
    ie = !1;
    if (b) throw Error(q(300));
    return a;
  }

  function qe() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    null === P ? N.memoizedState = P = a : P = P.next = a;
    return P;
  }

  function re() {
    if (null === O) {
      var a = N.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = O.next;

    var b = null === P ? N.memoizedState : P.next;
    if (null !== b) P = b, O = a;else {
      if (null === a) throw Error(q(310));
      O = a;
      a = {
        memoizedState: O.memoizedState,
        baseState: O.baseState,
        baseQueue: O.baseQueue,
        queue: O.queue,
        next: null
      };
      null === P ? N.memoizedState = P = a : P = P.next = a;
    }
    return P;
  }

  function se(a, b) {
    return "function" === typeof b ? b(a) : b;
  }

  function te(a) {
    var b = re(),
        c = b.queue;
    if (null === c) throw Error(q(311));
    c.lastRenderedReducer = a;
    var d = O,
        e = d.baseQueue,
        f = c.pending;

    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }

      d.baseQueue = e = f;
      c.pending = null;
    }

    if (null !== e) {
      e = e.next;
      d = d.baseState;
      var h = g = f = null,
          k = e;

      do {
        var l = k.lane;
        if ((he & l) === l) null !== h && (h = h.next = {
          lane: 0,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);else {
          var n = {
            lane: l,
            action: k.action,
            eagerReducer: k.eagerReducer,
            eagerState: k.eagerState,
            next: null
          };
          null === h ? (g = h = n, f = d) : h = h.next = n;
          N.lanes |= l;
          pd |= l;
        }
        k = k.next;
      } while (null !== k && k !== e);

      null === h ? f = d : h.next = g;
      I(d, b.memoizedState) || (gd = !0);
      b.memoizedState = d;
      b.baseState = f;
      b.baseQueue = h;
      c.lastRenderedState = d;
    }

    return [b.memoizedState, c.dispatch];
  }

  function ue(a) {
    var b = re(),
        c = b.queue;
    if (null === c) throw Error(q(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
        e = c.pending,
        f = b.memoizedState;

    if (null !== e) {
      c.pending = null;
      var g = e = e.next;

      do {
        f = a(f, g.action), g = g.next;
      } while (g !== e);

      I(f, b.memoizedState) || (gd = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }

    return [f, d];
  }

  function ve(a, b, c) {
    var d = b._getVersion;
    d = d(b._source);
    var e = Sa ? b._workInProgressVersionPrimary : b._workInProgressVersionSecondary;
    if (null !== e) a = e === d;else if (a = a.mutableReadLanes, a = (he & a) === a) Sa ? b._workInProgressVersionPrimary = d : b._workInProgressVersionSecondary = d, de.push(b);
    if (a) return c(b._source);
    de.push(b);
    throw Error(q(350));
  }

  function we(a, b, c, d) {
    var e = R;
    if (null === e) throw Error(q(349));
    var f = b._getVersion,
        g = f(b._source),
        h = fe.current,
        k = h.useState(function () {
      return ve(e, b, c);
    }),
        l = k[1],
        n = k[0];
    k = P;
    var t = a.memoizedState,
        p = t.refs,
        y = p.getSnapshot,
        x = t.source;
    t = t.subscribe;
    var Y = N;
    a.memoizedState = {
      refs: p,
      source: b,
      subscribe: d
    };
    h.useEffect(function () {
      p.getSnapshot = c;
      p.setSnapshot = l;
      var a = f(b._source);

      if (!I(g, a)) {
        a = c(b._source);
        I(n, a) || (l(a), a = td(Y), e.mutableReadLanes |= a & e.pendingLanes);
        a = e.mutableReadLanes;
        e.entangledLanes |= a;

        for (var d = e.entanglements, h = a; 0 < h;) {
          var k = 31 - mc(h),
              t = 1 << k;
          d[k] |= a;
          h &= ~t;
        }
      }
    }, [c, b, d]);
    h.useEffect(function () {
      return d(b._source, function () {
        var a = p.getSnapshot,
            c = p.setSnapshot;

        try {
          c(a(b._source));
          var d = td(Y);
          e.mutableReadLanes |= d & e.pendingLanes;
        } catch (Oa) {
          c(function () {
            throw Oa;
          });
        }
      });
    }, [b, d]);
    I(y, c) && I(x, b) && I(t, d) || (a = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: se,
      lastRenderedState: n
    }, a.dispatch = l = xe.bind(null, N, a), k.queue = a, k.baseQueue = null, n = ve(e, b, c), k.memoizedState = k.baseState = n);
    return n;
  }

  function ye(a, b, c) {
    var d = re();
    return we(d, a, b, c);
  }

  function ze(a) {
    var b = qe();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: se,
      lastRenderedState: a
    };
    a = a.dispatch = xe.bind(null, N, a);
    return [b.memoizedState, a];
  }

  function Ae(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    b = N.updateQueue;
    null === b ? (b = {
      lastEffect: null
    }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }

  function Be(a) {
    var b = qe();
    a = {
      current: a
    };
    return b.memoizedState = a;
  }

  function Ce() {
    return re().memoizedState;
  }

  function De(a, b, c, d) {
    var e = qe();
    N.flags |= a;
    e.memoizedState = Ae(1 | b, c, void 0, void 0 === d ? null : d);
  }

  function Ee(a, b, c, d) {
    var e = re();
    d = void 0 === d ? null : d;
    var f = void 0;

    if (null !== O) {
      var g = O.memoizedState;
      f = g.destroy;

      if (null !== d && ke(d, g.deps)) {
        Ae(b, c, f, d);
        return;
      }
    }

    N.flags |= a;
    e.memoizedState = Ae(1 | b, c, f, d);
  }

  function Fe(a, b) {
    return De(516, 4, a, b);
  }

  function Ge(a, b) {
    return Ee(516, 4, a, b);
  }

  function He(a, b) {
    return Ee(4, 2, a, b);
  }

  function Ie(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }

  function Je(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return Ee(4, 2, Ie.bind(null, b, a), c);
  }

  function Ke() {}

  function Le(a, b) {
    var c = re();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ke(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }

  function Me(a, b) {
    var c = re();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ke(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }

  function Ne(a, b) {
    var c = Nc();
    Pc(98 > c ? 98 : c, function () {
      a(!0);
    });
    Pc(97 < c ? 97 : c, function () {
      var c = ge.transition;
      ge.transition = 1;

      try {
        a(!1), b();
      } finally {
        ge.transition = c;
      }
    });
  }

  function xe(a, b, c) {
    var d = K(),
        e = td(a),
        f = {
      lane: e,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    },
        g = b.pending;
    null === g ? f.next = f : (f.next = g.next, g.next = f);
    b.pending = f;
    g = a.alternate;
    if (a === N || null !== g && g === N) je = ie = !0;else {
      if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
        var h = b.lastRenderedState,
            k = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k;
        if (I(k, h)) return;
      } catch (l) {} finally {}
      ud(a, e, d);
    }
  }

  var pe = {
    readContext: J,
    useCallback: Q,
    useContext: Q,
    useEffect: Q,
    useImperativeHandle: Q,
    useLayoutEffect: Q,
    useMemo: Q,
    useReducer: Q,
    useRef: Q,
    useState: Q,
    useDebugValue: Q,
    useDeferredValue: Q,
    useTransition: Q,
    useMutableSource: Q,
    useOpaqueIdentifier: Q,
    unstable_isNewReconciler: !1
  },
      me = {
    readContext: J,
    useCallback: function useCallback(a, b) {
      qe().memoizedState = [a, void 0 === b ? null : b];
      return a;
    },
    useContext: J,
    useEffect: Fe,
    useImperativeHandle: function useImperativeHandle(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return De(4, 2, Ie.bind(null, b, a), c);
    },
    useLayoutEffect: function useLayoutEffect(a, b) {
      return De(4, 2, a, b);
    },
    useMemo: function useMemo(a, b) {
      var c = qe();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function useReducer(a, b, c) {
      var d = qe();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = d.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      a = a.dispatch = xe.bind(null, N, a);
      return [d.memoizedState, a];
    },
    useRef: Be,
    useState: ze,
    useDebugValue: Ke,
    useDeferredValue: function useDeferredValue(a) {
      var b = ze(a),
          c = b[0],
          d = b[1];
      Fe(function () {
        var b = ge.transition;
        ge.transition = 1;

        try {
          d(a);
        } finally {
          ge.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = ze(!1),
          b = a[0];
      a = Ne.bind(null, a[1]);
      Be(a);
      return [a, b];
    },
    useMutableSource: function useMutableSource(a, b, c) {
      var d = qe();
      d.memoizedState = {
        refs: {
          getSnapshot: b,
          setSnapshot: null
        },
        source: a,
        subscribe: c
      };
      return we(d, a, b, c);
    },
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      if (Wd) {
        var a = !1,
            b = Xa(function () {
          a || (a = !0, c(Ya()));
          throw Error(q(355));
        }),
            c = ze(b)[1];
        0 === (N.mode & 2) && (N.flags |= 516, Ae(5, function () {
          c(Ya());
        }, void 0, null));
        return b;
      }

      b = Ya();
      ze(b);
      return b;
    },
    unstable_isNewReconciler: !1
  },
      ne = {
    readContext: J,
    useCallback: Le,
    useContext: J,
    useEffect: Ge,
    useImperativeHandle: Je,
    useLayoutEffect: He,
    useMemo: Me,
    useReducer: te,
    useRef: Ce,
    useState: function useState() {
      return te(se);
    },
    useDebugValue: Ke,
    useDeferredValue: function useDeferredValue(a) {
      var b = te(se),
          c = b[0],
          d = b[1];
      Ge(function () {
        var b = ge.transition;
        ge.transition = 1;

        try {
          d(a);
        } finally {
          ge.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = te(se)[0];
      return [Ce().current, a];
    },
    useMutableSource: ye,
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      return te(se)[0];
    },
    unstable_isNewReconciler: !1
  },
      oe = {
    readContext: J,
    useCallback: Le,
    useContext: J,
    useEffect: Ge,
    useImperativeHandle: Je,
    useLayoutEffect: He,
    useMemo: Me,
    useReducer: ue,
    useRef: Ce,
    useState: function useState() {
      return ue(se);
    },
    useDebugValue: Ke,
    useDeferredValue: function useDeferredValue(a) {
      var b = ue(se),
          c = b[0],
          d = b[1];
      Ge(function () {
        var b = ge.transition;
        ge.transition = 1;

        try {
          d(a);
        } finally {
          ge.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = ue(se)[0];
      return [Ce().current, a];
    },
    useMutableSource: ye,
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      return ue(se)[0];
    },
    unstable_isNewReconciler: !1
  },
      Oe = ca.ReactCurrentOwner,
      gd = !1;

  function S(a, b, c, d) {
    b.child = null === a ? Kd(b, null, c, d) : Jd(b, a.child, c, d);
  }

  function Pe(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    fd(b, e);
    d = le(a, b, c, d, f, e);
    if (null !== a && !gd) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Re(a, b, e);
    b.flags |= 1;
    S(a, b, d, e);
    return b.child;
  }

  function Se(a, b, c, d, e, f) {
    if (null === a) {
      var g = c.type;
      if ("function" === typeof g && !Te(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, Ue(a, b, g, d, e, f);
      a = Gd(c.type, null, d, b, b.mode, f);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }

    g = a.child;
    if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Vc, c(e, d) && a.ref === b.ref)) return Re(a, b, f);
    b.flags |= 1;
    a = Ed(g, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }

  function Ue(a, b, c, d, e, f) {
    if (null !== a && Vc(a.memoizedProps, d) && a.ref === b.ref) if (gd = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (gd = !0);else return b.lanes = a.lanes, Re(a, b, f);
    return Ve(a, b, c, d, f);
  }

  function We(a, b, c) {
    var d = b.pendingProps,
        e = d.children,
        f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
      if (0 === (b.mode & 4)) b.memoizedState = {
        baseLanes: 0
      }, Xe(b, c);else if (0 !== (c & 1073741824)) b.memoizedState = {
        baseLanes: 0
      }, Xe(b, null !== f ? f.baseLanes : c);else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
        baseLanes: a
      }, Xe(b, a), null;
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, Xe(b, d);
    S(a, b, e, c);
    return b.child;
  }

  function Ye(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
  }

  function Ve(a, b, c, d, e) {
    var f = E(c) ? Yb : B.current;
    f = Zb(b, f);
    fd(b, e);
    c = le(a, b, c, d, f, e);
    if (null !== a && !gd) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Re(a, b, e);
    b.flags |= 1;
    S(a, b, c, e);
    return b.child;
  }

  function Ze(a, b, c, d, e) {
    if (E(c)) {
      var f = !0;
      cc(b);
    } else f = !1;

    fd(b, e);
    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), xd(b, c, d), zd(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
          h = b.memoizedProps;
      g.props = h;
      var k = g.context,
          l = c.contextType;
      "object" === typeof l && null !== l ? l = J(l) : (l = E(c) ? Yb : B.current, l = Zb(b, l));
      var n = c.getDerivedStateFromProps,
          t = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
      t || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && yd(b, g, d, l);
      hd = !1;
      var p = b.memoizedState;
      g.state = p;
      od(b, d, g, e);
      k = b.memoizedState;
      h !== d || p !== k || D.current || hd ? ("function" === typeof n && (sd(b, c, n, d), k = b.memoizedState), (h = hd || wd(b, c, h, d, p, k, l)) ? (t || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
    } else {
      g = b.stateNode;
      jd(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Xc(b.type, h);
      g.props = l;
      t = b.pendingProps;
      p = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = J(k) : (k = E(c) ? Yb : B.current, k = Zb(b, k));
      var y = c.getDerivedStateFromProps;
      (n = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== t || p !== k) && yd(b, g, d, k);
      hd = !1;
      p = b.memoizedState;
      g.state = p;
      od(b, d, g, e);
      var x = b.memoizedState;
      h !== t || p !== x || D.current || hd ? ("function" === typeof y && (sd(b, c, y, d), x = b.memoizedState), (l = hd || wd(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
    }
    return $e(a, b, c, d, f, e);
  }

  function $e(a, b, c, d, e, f) {
    Ye(a, b);
    var g = 0 !== (b.flags & 64);
    if (!d && !g) return e && dc(b, c, !1), Re(a, b, f);
    d = b.stateNode;
    Oe.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Jd(b, a.child, null, f), b.child = Jd(b, null, h, f)) : S(a, b, h, f);
    b.memoizedState = d.state;
    e && dc(b, c, !0);
    return b.child;
  }

  function af(a) {
    var b = a.stateNode;
    b.pendingContext ? ac(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ac(a, b.context, !1);
    Pd(a, b.containerInfo);
  }

  var bf = {
    dehydrated: null,
    retryLane: 0
  };

  function cf(a, b, c) {
    var d = b.pendingProps,
        e = M.current,
        f = !1,
        g;
    (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
    A(M, e & 1);

    if (null === a) {
      void 0 !== d.fallback && $d(b);
      a = d.children;
      e = d.fallback;
      if (f) return a = df(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = bf, a;
      if ("number" === typeof d.unstable_expectedLoadTime) return a = df(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = bf, b.lanes = 33554432, a;
      c = ef({
        mode: "visible",
        children: a
      }, b.mode, c, null);
      c.return = b;
      return b.child = c;
    }

    if (null !== a.memoizedState) {
      if (f) return d = ff(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
        baseLanes: c
      } : {
        baseLanes: e.baseLanes | c
      }, f.childLanes = a.childLanes & ~c, b.memoizedState = bf, d;
      c = gf(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }

    if (f) return d = ff(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
      baseLanes: c
    } : {
      baseLanes: e.baseLanes | c
    }, f.childLanes = a.childLanes & ~c, b.memoizedState = bf, d;
    c = gf(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }

  function df(a, b, c, d) {
    var e = a.mode,
        f = a.child;
    b = {
      mode: "hidden",
      children: b
    };
    0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = ef(b, e, 0, null);
    c = Id(c, e, d, null);
    f.return = a;
    c.return = a;
    f.sibling = c;
    a.child = f;
    return c;
  }

  function gf(a, b, c, d) {
    var e = a.child;
    a = e.sibling;
    c = Ed(e, {
      mode: "visible",
      children: c
    });
    0 === (b.mode & 2) && (c.lanes = d);
    c.return = b;
    c.sibling = null;
    null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
    return b.child = c;
  }

  function ff(a, b, c, d, e) {
    var f = b.mode,
        g = a.child;
    a = g.sibling;
    var h = {
      mode: "hidden",
      children: c
    };
    0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Ed(g, h);
    null !== a ? d = Ed(a, d) : (d = Id(d, f, e, null), d.flags |= 2);
    d.return = b;
    c.return = b;
    c.sibling = d;
    b.child = c;
    return d;
  }

  function hf(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    ed(a.return, b);
  }

  function jf(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      renderingStartTime: 0,
      last: d,
      tail: c,
      tailMode: e,
      lastEffect: f
    } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
  }

  function kf(a, b, c) {
    var d = b.pendingProps,
        e = d.revealOrder,
        f = d.tail;
    S(a, b, d.children, c);
    d = M.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;else {
      if (null !== a && 0 !== (a.flags & 64)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && hf(a, c);else if (19 === a.tag) hf(a, c);else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;

        for (; null === a.sibling;) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }

        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    A(M, d);
    if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
      case "forwards":
        c = b.child;

        for (e = null; null !== c;) {
          a = c.alternate, null !== a && null === Td(a) && (e = c), c = c.sibling;
        }

        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        jf(b, !1, e, c, f, b.lastEffect);
        break;

      case "backwards":
        c = null;
        e = b.child;

        for (b.child = null; null !== e;) {
          a = e.alternate;

          if (null !== a && null === Td(a)) {
            b.child = e;
            break;
          }

          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }

        jf(b, !0, c, null, f, b.lastEffect);
        break;

      case "together":
        jf(b, !1, null, null, void 0, b.lastEffect);
        break;

      default:
        b.memoizedState = null;
    }
    return b.child;
  }

  function Re(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    pd |= b.lanes;

    if (0 !== (c & b.childLanes)) {
      if (null !== a && b.child !== a.child) throw Error(q(153));

      if (null !== b.child) {
        a = b.child;
        c = Ed(a, a.pendingProps);
        b.child = c;

        for (c.return = b; null !== a.sibling;) {
          a = a.sibling, c = c.sibling = Ed(a, a.pendingProps), c.return = b;
        }

        c.sibling = null;
      }

      return b.child;
    }

    return null;
  }

  function lf(a) {
    a.flags |= 4;
  }

  var _mf, nf, of, pf;

  if (Ta) _mf = function mf(a, b) {
    for (var c = b.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) Ja(a, c.stateNode);else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }, nf = function nf() {}, of = function of(a, b, c, d, e) {
    a = a.memoizedProps;

    if (a !== d) {
      var f = b.stateNode,
          g = Od(L.current);
      c = La(f, c, a, d, e, g);
      (b.updateQueue = c) && lf(b);
    }
  }, pf = function pf(a, b, c, d) {
    c !== d && lf(b);
  };else if (Ua) {
    _mf = function mf(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Db(f, e.type, e.memoizedProps, e));
          Ja(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ja(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.flags & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, _mf(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    var qf = function qf(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Db(f, e.type, e.memoizedProps, e));
          Ab(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ab(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.flags & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, qf(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    nf = function nf(a) {
      var b = a.stateNode;

      if (null !== a.firstEffect) {
        var c = b.containerInfo,
            d = zb(c);
        qf(d, a, !1, !1);
        b.pendingChildren = d;
        lf(a);
        Bb(c, d);
      }
    };

    of = function of(a, b, c, d, e) {
      var f = a.stateNode,
          g = a.memoizedProps;
      if ((a = null === b.firstEffect) && g === d) b.stateNode = f;else {
        var h = b.stateNode,
            k = Od(L.current),
            l = null;
        g !== d && (l = La(h, c, g, d, e, k));
        a && null === l ? b.stateNode = f : (f = yb(f, l, c, g, d, b, a, h), Ka(f, c, d, e, k) && lf(b), b.stateNode = f, a ? lf(b) : _mf(f, b, !1, !1));
      }
    };

    pf = function pf(a, b, c, d) {
      c !== d ? (a = Od(Nd.current), c = Od(L.current), b.stateNode = Na(d, a, c, b), lf(b)) : b.stateNode = a.stateNode;
    };
  } else nf = function nf() {}, of = function of() {}, pf = function pf() {};

  function rf(a, b) {
    if (!Wd) switch (a.tailMode) {
      case "hidden":
        b = a.tail;

        for (var c = null; null !== b;) {
          null !== b.alternate && (c = b), b = b.sibling;
        }

        null === c ? a.tail = null : c.sibling = null;
        break;

      case "collapsed":
        c = a.tail;

        for (var d = null; null !== c;) {
          null !== c.alternate && (d = c), c = c.sibling;
        }

        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }

  function sf(a, b, c) {
    var d = b.pendingProps;

    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;

      case 1:
        return E(b.type) && $b(), null;

      case 3:
        Qd();
        z(D);
        z(B);
        ee();
        d = b.stateNode;
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) be(b) ? lf(b) : d.hydrate || (b.flags |= 256);
        nf(b);
        return null;

      case 5:
        Sd(b);
        var e = Od(Nd.current);
        c = b.type;
        if (null !== a && null != b.stateNode) of(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);else {
          if (!d) {
            if (null === b.stateNode) throw Error(q(166));
            return null;
          }

          a = Od(L.current);

          if (be(b)) {
            if (!Va) throw Error(q(175));
            a = Lb(b.stateNode, b.type, b.memoizedProps, e, a, b);
            b.updateQueue = a;
            null !== a && lf(b);
          } else {
            var f = Ia(c, d, e, a, b);

            _mf(f, b, !1, !1);

            b.stateNode = f;
            Ka(f, c, d, e, a) && lf(b);
          }

          null !== b.ref && (b.flags |= 128);
        }
        return null;

      case 6:
        if (a && null != b.stateNode) pf(a, b, a.memoizedProps, d);else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(q(166));
          a = Od(Nd.current);
          e = Od(L.current);

          if (be(b)) {
            if (!Va) throw Error(q(176));
            Mb(b.stateNode, b.memoizedProps, b) && lf(b);
          } else b.stateNode = Na(d, a, e, b);
        }
        return null;

      case 13:
        z(M);
        d = b.memoizedState;
        if (0 !== (b.flags & 64)) return b.lanes = c, b;
        d = null !== d;
        e = !1;
        null === a ? void 0 !== b.memoizedProps.fallback && be(b) : e = null !== a.memoizedState;
        if (d && !e && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & 1)) 0 === T && (T = 3);else {
          if (0 === T || 3 === T) T = 4;
          null === R || 0 === (pd & 134217727) && 0 === (tf & 134217727) || uf(R, U);
        }
        Ua && d && (b.flags |= 4);
        Ta && (d || e) && (b.flags |= 4);
        return null;

      case 4:
        return Qd(), nf(b), null === a && ab(b.stateNode.containerInfo), null;

      case 10:
        return dd(b), null;

      case 17:
        return E(b.type) && $b(), null;

      case 19:
        z(M);
        d = b.memoizedState;
        if (null === d) return null;
        e = 0 !== (b.flags & 64);
        f = d.rendering;
        if (null === f) {
          if (e) rf(d, !1);else {
            if (0 !== T || null !== a && 0 !== (a.flags & 64)) for (a = b.child; null !== a;) {
              f = Td(a);

              if (null !== f) {
                b.flags |= 64;
                rf(d, !1);
                a = f.updateQueue;
                null !== a && (b.updateQueue = a, b.flags |= 4);
                null === d.lastEffect && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                a = c;

                for (d = b.child; null !== d;) {
                  e = d, c = a, e.flags &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, f = e.alternate, null === f ? (e.childLanes = 0, e.lanes = c, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = f.childLanes, e.lanes = f.lanes, e.child = f.child, e.memoizedProps = f.memoizedProps, e.memoizedState = f.memoizedState, e.updateQueue = f.updateQueue, e.type = f.type, c = f.dependencies, e.dependencies = null === c ? null : {
                    lanes: c.lanes,
                    firstContext: c.firstContext
                  }), d = d.sibling;
                }

                A(M, M.current & 1 | 2);
                return b.child;
              }

              a = a.sibling;
            }
            null !== d.tail && G() > vf && (b.flags |= 64, e = !0, rf(d, !1), b.lanes = 33554432);
          }
        } else {
          if (!e) if (a = Td(f), null !== a) {
            if (b.flags |= 64, e = !0, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), rf(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate && !Wd) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
          } else 2 * G() - d.renderingStartTime > vf && 1073741824 !== c && (b.flags |= 64, e = !0, rf(d, !1), b.lanes = 33554432);
          d.isBackwards ? (f.sibling = b.child, b.child = f) : (a = d.last, null !== a ? a.sibling = f : b.child = f, d.last = f);
        }
        return null !== d.tail ? (a = d.tail, d.rendering = a, d.tail = a.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = G(), a.sibling = null, b = M.current, A(M, e ? b & 1 | 2 : b & 1), a) : null;

      case 23:
      case 24:
        return wf(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
    }

    throw Error(q(156, b.tag));
  }

  function xf(a) {
    switch (a.tag) {
      case 1:
        E(a.type) && $b();
        var b = a.flags;
        return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

      case 3:
        Qd();
        z(D);
        z(B);
        ee();
        b = a.flags;
        if (0 !== (b & 64)) throw Error(q(285));
        a.flags = b & -4097 | 64;
        return a;

      case 5:
        return Sd(a), null;

      case 13:
        return z(M), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

      case 19:
        return z(M), null;

      case 4:
        return Qd(), null;

      case 10:
        return dd(a), null;

      case 23:
      case 24:
        return wf(), null;

      default:
        return null;
    }
  }

  function yf(a, b) {
    try {
      var c = "",
          d = b;

      do {
        c += Wc(d), d = d.return;
      } while (d);

      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }

    return {
      value: a,
      source: b,
      stack: e
    };
  }

  function zf(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }

  var Af = "function" === typeof WeakMap ? WeakMap : Map;

  function Bf(a, b, c) {
    c = kd(-1, c);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;

    c.callback = function () {
      Cf || (Cf = !0, Df = d);
      zf(a, b);
    };

    return c;
  }

  function Ef(a, b, c) {
    c = kd(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;

    if ("function" === typeof d) {
      var e = b.value;

      c.payload = function () {
        zf(a, b);
        return d(e);
      };
    }

    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      "function" !== typeof d && (null === Ff ? Ff = new Set([this]) : Ff.add(this), zf(a, b));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }

  var Gf = "function" === typeof WeakSet ? WeakSet : Set;

  function Hf(a) {
    var b = a.ref;
    if (null !== b) if ("function" === typeof b) try {
      b(null);
    } catch (c) {
      If(a, c);
    } else b.current = null;
  }

  function Jf(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;

      case 1:
        if (b.flags & 256 && null !== a) {
          var c = a.memoizedProps,
              d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : Xc(b.type, c), d);
          a.__reactInternalSnapshotBeforeUpdate = b;
        }

        return;

      case 3:
        Ta && b.flags & 256 && xb(b.stateNode.containerInfo);
        return;

      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }

    throw Error(q(163));
  }

  function Kf(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;

    if (null !== b) {
      var c = b = b.next;

      do {
        if ((c.tag & a) === a) {
          var d = c.destroy;
          c.destroy = void 0;
          void 0 !== d && d();
        }

        c = c.next;
      } while (c !== b);
    }
  }

  function Lf(a, b, c) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;

        if (null !== b) {
          a = b = b.next;

          do {
            if (3 === (a.tag & 3)) {
              var d = a.create;
              a.destroy = d();
            }

            a = a.next;
          } while (a !== b);
        }

        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;

        if (null !== b) {
          a = b = b.next;

          do {
            var e = a;
            d = e.next;
            e = e.tag;
            0 !== (e & 4) && 0 !== (e & 1) && (Mf(c, a), Nf(c, a));
            a = d;
          } while (a !== b);
        }

        return;

      case 1:
        a = c.stateNode;
        c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : Xc(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
        b = c.updateQueue;
        null !== b && qd(c, b, a);
        return;

      case 3:
        b = c.updateQueue;

        if (null !== b) {
          a = null;
          if (null !== c.child) switch (c.child.tag) {
            case 5:
              a = Da(c.child.stateNode);
              break;

            case 1:
              a = c.child.stateNode;
          }
          qd(c, b, a);
        }

        return;

      case 5:
        a = c.stateNode;
        null === b && c.flags & 4 && mb(a, c.type, c.memoizedProps, c);
        return;

      case 6:
        return;

      case 4:
        return;

      case 12:
        return;

      case 13:
        Va && null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Pb(c))));
        return;

      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }

    throw Error(q(163));
  }

  function Of(a, b) {
    if (Ta) for (var c = a;;) {
      if (5 === c.tag) {
        var d = c.stateNode;
        b ? tb(d) : vb(c.stateNode, c.memoizedProps);
      } else if (6 === c.tag) d = c.stateNode, b ? ub(d) : wb(d, c.memoizedProps);else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }

      if (c === a) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === a) return;
        c = c.return;
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }

  function Pf(a, b) {
    if (fc && "function" === typeof fc.onCommitFiberUnmount) try {
      fc.onCommitFiberUnmount(ec, b);
    } catch (f) {}

    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a = b.updateQueue;

        if (null !== a && (a = a.lastEffect, null !== a)) {
          var c = a = a.next;

          do {
            var d = c,
                e = d.destroy;
            d = d.tag;
            if (void 0 !== e) if (0 !== (d & 4)) Mf(b, c);else {
              d = b;

              try {
                e();
              } catch (f) {
                If(d, f);
              }
            }
            c = c.next;
          } while (c !== a);
        }

        break;

      case 1:
        Hf(b);
        a = b.stateNode;
        if ("function" === typeof a.componentWillUnmount) try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f) {
          If(b, f);
        }
        break;

      case 5:
        Hf(b);
        break;

      case 4:
        Ta ? Qf(a, b) : Ua && Ua && (b = b.stateNode.containerInfo, a = zb(b), Cb(b, a));
    }
  }

  function Rf(a, b) {
    for (var c = b;;) {
      if (Pf(a, c), null === c.child || Ta && 4 === c.tag) {
        if (c === b) break;

        for (; null === c.sibling;) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }

        c.sibling.return = c.return;
        c = c.sibling;
      } else c.child.return = c, c = c.child;
    }
  }

  function Sf(a) {
    a.alternate = null;
    a.child = null;
    a.dependencies = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.return = null;
    a.updateQueue = null;
  }

  function Tf(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }

  function Uf(a) {
    if (Ta) {
      a: {
        for (var b = a.return; null !== b;) {
          if (Tf(b)) break a;
          b = b.return;
        }

        throw Error(q(160));
      }

      var c = b;
      b = c.stateNode;

      switch (c.tag) {
        case 5:
          var d = !1;
          break;

        case 3:
          b = b.containerInfo;
          d = !0;
          break;

        case 4:
          b = b.containerInfo;
          d = !0;
          break;

        default:
          throw Error(q(161));
      }

      c.flags & 16 && (sb(b), c.flags &= -17);

      a: b: for (c = a;;) {
        for (; null === c.sibling;) {
          if (null === c.return || Tf(c.return)) {
            c = null;
            break a;
          }

          c = c.return;
        }

        c.sibling.return = c.return;

        for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
          if (c.flags & 2) continue b;
          if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
        }

        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }

      d ? Vf(a, c, b) : Wf(a, c, b);
    }
  }

  function Vf(a, b, c) {
    var d = a.tag,
        e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? pb(c, a, b) : kb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Vf(a, b, c), a = a.sibling; null !== a;) {
      Vf(a, b, c), a = a.sibling;
    }
  }

  function Wf(a, b, c) {
    var d = a.tag,
        e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? ob(c, a, b) : jb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Wf(a, b, c), a = a.sibling; null !== a;) {
      Wf(a, b, c), a = a.sibling;
    }
  }

  function Qf(a, b) {
    for (var c = b, d = !1, e, f;;) {
      if (!d) {
        d = c.return;

        a: for (;;) {
          if (null === d) throw Error(q(160));
          e = d.stateNode;

          switch (d.tag) {
            case 5:
              f = !1;
              break a;

            case 3:
              e = e.containerInfo;
              f = !0;
              break a;

            case 4:
              e = e.containerInfo;
              f = !0;
              break a;
          }

          d = d.return;
        }

        d = !0;
      }

      if (5 === c.tag || 6 === c.tag) Rf(a, c), f ? rb(e, c.stateNode) : qb(e, c.stateNode);else if (4 === c.tag) {
        if (null !== c.child) {
          e = c.stateNode.containerInfo;
          f = !0;
          c.child.return = c;
          c = c.child;
          continue;
        }
      } else if (Pf(a, c), null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
        4 === c.tag && (d = !1);
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }

  function Xf(a, b) {
    if (Ta) {
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          Kf(3, b);
          return;

        case 1:
          return;

        case 5:
          var c = b.stateNode;

          if (null != c) {
            var d = b.memoizedProps;
            a = null !== a ? a.memoizedProps : d;
            var e = b.type,
                f = b.updateQueue;
            b.updateQueue = null;
            null !== f && nb(c, f, e, a, d, b);
          }

          return;

        case 6:
          if (null === b.stateNode) throw Error(q(162));
          c = b.memoizedProps;
          lb(b.stateNode, null !== a ? a.memoizedProps : c, c);
          return;

        case 3:
          Va && (b = b.stateNode, b.hydrate && (b.hydrate = !1, Ob(b.containerInfo)));
          return;

        case 12:
          return;

        case 13:
          Yf(b);
          Zf(b);
          return;

        case 19:
          Zf(b);
          return;

        case 17:
          return;

        case 23:
        case 24:
          Of(b, null !== b.memoizedState);
          return;
      }

      throw Error(q(163));
    }

    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        Kf(3, b);
        return;

      case 12:
        return;

      case 13:
        Yf(b);
        Zf(b);
        return;

      case 19:
        Zf(b);
        return;

      case 3:
        Va && (c = b.stateNode, c.hydrate && (c.hydrate = !1, Ob(c.containerInfo)));
        break;

      case 23:
      case 24:
        return;
    }

    a: if (Ua) {
      switch (b.tag) {
        case 1:
        case 5:
        case 6:
        case 20:
          break a;

        case 3:
        case 4:
          b = b.stateNode;
          Cb(b.containerInfo, b.pendingChildren);
          break a;
      }

      throw Error(q(163));
    }
  }

  function Yf(a) {
    null !== a.memoizedState && ($f = G(), Ta && Of(a.child, !0));
  }

  function Zf(a) {
    var b = a.updateQueue;

    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Gf());
      b.forEach(function (b) {
        var d = ag.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }

  function bg(a, b) {
    return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
  }

  var cg = 0,
      dg = 1,
      eg = 2,
      fg = 3,
      gg = 4;

  if ("function" === typeof Symbol && Symbol.for) {
    var hg = Symbol.for;
    cg = hg("selector.component");
    dg = hg("selector.has_pseudo_class");
    eg = hg("selector.role");
    fg = hg("selector.test_id");
    gg = hg("selector.text");
  }

  function ig(a) {
    var b = Wa(a);

    if (null != b) {
      if ("string" !== typeof b.memoizedProps["data-testname"]) throw Error(q(364));
      return b;
    }

    a = cb(a);
    if (null === a) throw Error(q(362));
    return a.stateNode.current;
  }

  function jg(a, b) {
    switch (b.$$typeof) {
      case cg:
        if (a.type === b.value) return !0;
        break;

      case dg:
        a: {
          b = b.value;
          a = [a, 0];

          for (var c = 0; c < a.length;) {
            var d = a[c++],
                e = a[c++],
                f = b[e];

            if (5 !== d.tag || !fb(d)) {
              for (; null != f && jg(d, f);) {
                e++, f = b[e];
              }

              if (e === b.length) {
                b = !0;
                break a;
              } else for (d = d.child; null !== d;) {
                a.push(d, e), d = d.sibling;
              }
            }
          }

          b = !1;
        }

        return b;

      case eg:
        if (5 === a.tag && gb(a.stateNode, b.value)) return !0;
        break;

      case gg:
        if (5 === a.tag || 6 === a.tag) if (a = eb(a), null !== a && 0 <= a.indexOf(b.value)) return !0;
        break;

      case fg:
        if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) return !0;
        break;

      default:
        throw Error(q(365, b));
    }

    return !1;
  }

  function kg(a) {
    switch (a.$$typeof) {
      case cg:
        return "<" + (wa(a.value) || "Unknown") + ">";

      case dg:
        return ":has(" + (kg(a) || "") + ")";

      case eg:
        return '[role="' + a.value + '"]';

      case gg:
        return '"' + a.value + '"';

      case fg:
        return '[data-testname="' + a.value + '"]';

      default:
        throw Error(q(365, a));
    }
  }

  function lg(a, b) {
    var c = [];
    a = [a, 0];

    for (var d = 0; d < a.length;) {
      var e = a[d++],
          f = a[d++],
          g = b[f];

      if (5 !== e.tag || !fb(e)) {
        for (; null != g && jg(e, g);) {
          f++, g = b[f];
        }

        if (f === b.length) c.push(e);else for (e = e.child; null !== e;) {
          a.push(e, f), e = e.sibling;
        }
      }
    }

    return c;
  }

  function mg(a, b) {
    if (!bb) throw Error(q(363));
    a = ig(a);
    a = lg(a, b);
    b = [];
    a = Array.from(a);

    for (var c = 0; c < a.length;) {
      var d = a[c++];
      if (5 === d.tag) fb(d) || b.push(d.stateNode);else for (d = d.child; null !== d;) {
        a.push(d), d = d.sibling;
      }
    }

    return b;
  }

  var ng = null;

  function og(a) {
    if (null === ng) try {
      var b = ("require" + Math.random()).slice(0, 7);
      ng = (module && module[b]).call(module, "timers").setImmediate;
    } catch (c) {
      ng = function ng(a) {
        var b = new MessageChannel();
        b.port1.onmessage = a;
        b.port2.postMessage(void 0);
      };
    }
    return ng(a);
  }

  var pg = Math.ceil,
      qg = ca.ReactCurrentDispatcher,
      rg = ca.ReactCurrentOwner,
      sg = ca.IsSomeRendererActing,
      V = 0,
      R = null,
      W = null,
      U = 0,
      tg = 0,
      ug = Wb(0),
      T = 0,
      vg = null,
      wg = 0,
      pd = 0,
      tf = 0,
      xg = 0,
      yg = null,
      $f = 0,
      vf = Infinity;

  function zg() {
    vf = G() + 500;
  }

  var X = null,
      Cf = !1,
      Df = null,
      Ff = null,
      Ag = !1,
      Bg = null,
      Cg = 90,
      Dg = [],
      Eg = [],
      Fg = null,
      Gg = 0,
      Hg = null,
      Ig = -1,
      Jg = 0,
      Kg = 0,
      Lg = null,
      Mg = !1;

  function K() {
    return 0 !== (V & 48) ? G() : -1 !== Ig ? Ig : Ig = G();
  }

  function td(a) {
    a = a.mode;
    if (0 === (a & 2)) return 1;
    if (0 === (a & 4)) return 99 === Nc() ? 1 : 2;
    0 === Jg && (Jg = wg);

    if (0 !== Sc.transition) {
      0 !== Kg && (Kg = null !== yg ? yg.pendingLanes : 0);
      a = Jg;
      var b = 4186112 & ~Kg;
      b &= -b;
      0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
      return b;
    }

    a = Nc();
    0 !== (V & 4) && 98 === a ? a = oc(12, Jg) : (a = jc(a), a = oc(a, Jg));
    return a;
  }

  function ud(a, b, c) {
    if (50 < Gg) throw Gg = 0, Hg = null, Error(q(185));
    a = Ng(a, b);
    if (null === a) return null;
    rc(a, b, c);
    a === R && (tf |= b, 4 === T && uf(a, U));
    var d = Nc();
    1 === b ? 0 !== (V & 8) && 0 === (V & 48) ? Og(a) : (Z(a, c), 0 === V && (zg(), H())) : (0 === (V & 4) || 98 !== d && 99 !== d || (null === Fg ? Fg = new Set([a]) : Fg.add(a)), Z(a, c));
    yg = a;
  }

  function Ng(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;

    for (a = a.return; null !== a;) {
      a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    }

    return 3 === c.tag ? c.stateNode : null;
  }

  function Z(a, b) {
    for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;) {
      var h = 31 - mc(g),
          k = 1 << h,
          l = f[h];

      if (-1 === l) {
        if (0 === (k & d) || 0 !== (k & e)) {
          l = b;
          ic(k);
          var n = F;
          f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
        }
      } else l <= b && (a.expiredLanes |= k);

      g &= ~k;
    }

    d = lc(a, a === R ? U : 0);
    b = F;
    if (0 === d) null !== c && (c !== Hc && xc(c), a.callbackNode = null, a.callbackPriority = 0);else {
      if (null !== c) {
        if (a.callbackPriority === b) return;
        c !== Hc && xc(c);
      }

      15 === b ? (c = Og.bind(null, a), null === Jc ? (Jc = [c], Kc = wc(Cc, Rc)) : Jc.push(c), c = Hc) : 14 === b ? c = Qc(99, Og.bind(null, a)) : (c = kc(b), c = Qc(c, Pg.bind(null, a)));
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }

  function Pg(a) {
    Ig = -1;
    Kg = Jg = 0;
    if (0 !== (V & 48)) throw Error(q(327));
    var b = a.callbackNode;
    if (Qg() && a.callbackNode !== b) return null;
    var c = lc(a, a === R ? U : 0);
    if (0 === c) return null;
    var d = c;
    var e = V;
    V |= 16;
    var f = Rg();
    if (R !== a || U !== d) zg(), Sg(a, d);

    do {
      try {
        Tg();
        break;
      } catch (h) {
        Ug(a, h);
      }
    } while (1);

    bd();
    qg.current = f;
    V = e;
    null !== W ? d = 0 : (R = null, U = 0, d = T);
    if (0 !== (wg & tf)) Sg(a, 0);else if (0 !== d) {
      2 === d && (V |= 64, a.hydrate && (a.hydrate = !1, xb(a.containerInfo)), c = nc(a), 0 !== c && (d = Vg(a, c)));
      if (1 === d) throw b = vg, Sg(a, 0), uf(a, c), Z(a, G()), b;
      a.finishedWork = a.current.alternate;
      a.finishedLanes = c;

      switch (d) {
        case 0:
        case 1:
          throw Error(q(345));

        case 2:
          Zg(a);
          break;

        case 3:
          uf(a, c);

          if ((c & 62914560) === c && (d = $f + 500 - G(), 10 < d)) {
            if (0 !== lc(a, 0)) break;
            e = a.suspendedLanes;

            if ((e & c) !== c) {
              K();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }

            a.timeoutHandle = Pa(Zg.bind(null, a), d);
            break;
          }

          Zg(a);
          break;

        case 4:
          uf(a, c);
          if ((c & 4186112) === c) break;
          d = a.eventTimes;

          for (e = -1; 0 < c;) {
            var g = 31 - mc(c);
            f = 1 << g;
            g = d[g];
            g > e && (e = g);
            c &= ~f;
          }

          c = e;
          c = G() - c;
          c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * pg(c / 1960)) - c;

          if (10 < c) {
            a.timeoutHandle = Pa(Zg.bind(null, a), c);
            break;
          }

          Zg(a);
          break;

        case 5:
          Zg(a);
          break;

        default:
          throw Error(q(329));
      }
    }
    Z(a, G());
    return a.callbackNode === b ? Pg.bind(null, a) : null;
  }

  function uf(a, b) {
    b &= ~xg;
    b &= ~tf;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;

    for (a = a.expirationTimes; 0 < b;) {
      var c = 31 - mc(b),
          d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }

  function Og(a) {
    if (0 !== (V & 48)) throw Error(q(327));
    Qg();

    if (a === R && 0 !== (a.expiredLanes & U)) {
      var b = U;
      var c = Vg(a, b);
      0 !== (wg & tf) && (b = lc(a, b), c = Vg(a, b));
    } else b = lc(a, 0), c = Vg(a, b);

    0 !== a.tag && 2 === c && (V |= 64, a.hydrate && (a.hydrate = !1, xb(a.containerInfo)), b = nc(a), 0 !== b && (c = Vg(a, b)));
    if (1 === c) throw c = vg, Sg(a, 0), uf(a, b), Z(a, G()), c;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Zg(a);
    Z(a, G());
    return null;
  }

  function $g() {
    if (null !== Fg) {
      var a = Fg;
      Fg = null;
      a.forEach(function (a) {
        a.expiredLanes |= 24 & a.pendingLanes;
        Z(a, G());
      });
    }

    H();
  }

  function ah(a, b) {
    var c = V;
    V |= 1;

    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  }

  function bh(a, b) {
    var c = V;
    if (0 !== (c & 48)) return a(b);
    V |= 1;

    try {
      if (a) return Pc(99, a.bind(null, b));
    } finally {
      V = c, H();
    }
  }

  function Xe(a, b) {
    A(ug, tg);
    tg |= b;
    wg |= b;
  }

  function wf() {
    tg = ug.current;
    z(ug);
  }

  function Sg(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== Ra && (a.timeoutHandle = Ra, Qa(c));
    if (null !== W) for (c = W.return; null !== c;) {
      var d = c;

      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $b();
          break;

        case 3:
          Qd();
          z(D);
          z(B);
          ee();
          break;

        case 5:
          Sd(d);
          break;

        case 4:
          Qd();
          break;

        case 13:
          z(M);
          break;

        case 19:
          z(M);
          break;

        case 10:
          dd(d);
          break;

        case 23:
        case 24:
          wf();
      }

      c = c.return;
    }
    R = a;
    W = Ed(a.current, null);
    U = tg = wg = b;
    T = 0;
    vg = null;
    xg = tf = pd = 0;
  }

  function Ug(a, b) {
    do {
      var c = W;

      try {
        bd();
        fe.current = pe;

        if (ie) {
          for (var d = N.memoizedState; null !== d;) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }

          ie = !1;
        }

        he = 0;
        P = O = N = null;
        je = !1;
        rg.current = null;

        if (null === c || null === c.return) {
          T = 1;
          vg = b;
          W = null;
          break;
        }

        a: {
          var f = a,
              g = c.return,
              h = c,
              k = b;
          b = U;
          h.flags |= 2048;
          h.firstEffect = h.lastEffect = null;

          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k;

            if (0 === (h.mode & 2)) {
              var n = h.alternate;
              n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
            }

            var t = 0 !== (M.current & 1),
                p = g;

            do {
              var y;

              if (y = 13 === p.tag) {
                var x = p.memoizedState;
                if (null !== x) y = null !== x.dehydrated ? !0 : !1;else {
                  var Y = p.memoizedProps;
                  y = void 0 === Y.fallback ? !1 : !0 !== Y.unstable_avoidThisFallback ? !0 : t ? !1 : !0;
                }
              }

              if (y) {
                var u = p.updateQueue;

                if (null === u) {
                  var v = new Set();
                  v.add(l);
                  p.updateQueue = v;
                } else u.add(l);

                if (0 === (p.mode & 2)) {
                  p.flags |= 64;
                  h.flags |= 16384;
                  h.flags &= -2981;
                  if (1 === h.tag) if (null === h.alternate) h.tag = 17;else {
                    var C = kd(-1, 1);
                    C.tag = 2;
                    md(h, C);
                  }
                  h.lanes |= 1;
                  break a;
                }

                k = void 0;
                h = b;
                var Oa = f.pingCache;
                null === Oa ? (Oa = f.pingCache = new Af(), k = new Set(), Oa.set(l, k)) : (k = Oa.get(l), void 0 === k && (k = new Set(), Oa.set(l, k)));

                if (!k.has(h)) {
                  k.add(h);
                  var Qe = ch.bind(null, f, l, h);
                  l.then(Qe, Qe);
                }

                p.flags |= 4096;
                p.lanes = b;
                break a;
              }

              p = p.return;
            } while (null !== p);

            k = Error((wa(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
          }

          5 !== T && (T = 2);
          k = yf(k, h);
          p = g;

          do {
            switch (p.tag) {
              case 3:
                f = k;
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var Wg = Bf(p, f, b);
                nd(p, Wg);
                break a;

              case 1:
                f = k;
                var Xg = p.type,
                    ld = p.stateNode;

                if (0 === (p.flags & 64) && ("function" === typeof Xg.getDerivedStateFromError || null !== ld && "function" === typeof ld.componentDidCatch && (null === Ff || !Ff.has(ld)))) {
                  p.flags |= 4096;
                  b &= -b;
                  p.lanes |= b;
                  var Yg = Ef(p, f, b);
                  nd(p, Yg);
                  break a;
                }

            }

            p = p.return;
          } while (null !== p);
        }

        dh(c);
      } catch (w) {
        b = w;
        W === c && null !== c && (W = c = c.return);
        continue;
      }

      break;
    } while (1);
  }

  function Rg() {
    var a = qg.current;
    qg.current = pe;
    return null === a ? pe : a;
  }

  function Vg(a, b) {
    var c = V;
    V |= 16;
    var d = Rg();
    R === a && U === b || Sg(a, b);

    do {
      try {
        eh();
        break;
      } catch (e) {
        Ug(a, e);
      }
    } while (1);

    bd();
    V = c;
    qg.current = d;
    if (null !== W) throw Error(q(261));
    R = null;
    U = 0;
    return T;
  }

  function eh() {
    for (; null !== W;) {
      fh(W);
    }
  }

  function Tg() {
    for (; null !== W && !yc();) {
      fh(W);
    }
  }

  function fh(a) {
    var b = gh(a.alternate, a, tg);
    a.memoizedProps = a.pendingProps;
    null === b ? dh(a) : W = b;
    rg.current = null;
  }

  function dh(a) {
    var b = a;

    do {
      var c = b.alternate;
      a = b.return;

      if (0 === (b.flags & 2048)) {
        c = sf(c, b, tg);

        if (null !== c) {
          W = c;
          return;
        }

        c = b;

        if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (tg & 1073741824) || 0 === (c.mode & 4)) {
          for (var d = 0, e = c.child; null !== e;) {
            d |= e.lanes | e.childLanes, e = e.sibling;
          }

          c.childLanes = d;
        }

        null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
      } else {
        c = xf(b);

        if (null !== c) {
          c.flags &= 2047;
          W = c;
          return;
        }

        null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
      }

      b = b.sibling;

      if (null !== b) {
        W = b;
        return;
      }

      W = b = a;
    } while (null !== b);

    0 === T && (T = 5);
  }

  function Zg(a) {
    var b = Nc();
    Pc(99, hh.bind(null, a, b));
    return null;
  }

  function hh(a, b) {
    do {
      Qg();
    } while (null !== Bg);

    if (0 !== (V & 48)) throw Error(q(327));
    var c = a.finishedWork;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(q(177));
    a.callbackNode = null;
    var d = c.lanes | c.childLanes,
        e = d,
        f = a.pendingLanes & ~e;
    a.pendingLanes = e;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= e;
    a.mutableReadLanes &= e;
    a.entangledLanes &= e;
    e = a.entanglements;

    for (var g = a.eventTimes, h = a.expirationTimes; 0 < f;) {
      var k = 31 - mc(f),
          l = 1 << k;
      e[k] = 0;
      g[k] = -1;
      h[k] = -1;
      f &= ~l;
    }

    null !== Fg && 0 === (d & 24) && Fg.has(a) && Fg.delete(a);
    a === R && (W = R = null, U = 0);
    1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;

    if (null !== d) {
      e = V;
      V |= 32;
      rg.current = null;
      Lg = Ga(a.containerInfo);
      Mg = !1;
      X = d;

      do {
        try {
          ih();
        } catch (v) {
          if (null === X) throw Error(q(330));
          If(X, v);
          X = X.nextEffect;
        }
      } while (null !== X);

      Lg = null;
      X = d;

      do {
        try {
          for (g = a; null !== X;) {
            var n = X.flags;
            n & 16 && Ta && sb(X.stateNode);

            if (n & 128) {
              var t = X.alternate;

              if (null !== t) {
                var p = t.ref;
                null !== p && ("function" === typeof p ? p(null) : p.current = null);
              }
            }

            switch (n & 1038) {
              case 2:
                Uf(X);
                X.flags &= -3;
                break;

              case 6:
                Uf(X);
                X.flags &= -3;
                Xf(X.alternate, X);
                break;

              case 1024:
                X.flags &= -1025;
                break;

              case 1028:
                X.flags &= -1025;
                Xf(X.alternate, X);
                break;

              case 4:
                Xf(X.alternate, X);
                break;

              case 8:
                h = g;
                f = X;
                Ta ? Qf(h, f) : Rf(h, f);
                var y = f.alternate;
                Sf(f);
                null !== y && Sf(y);
            }

            X = X.nextEffect;
          }
        } catch (v) {
          if (null === X) throw Error(q(330));
          If(X, v);
          X = X.nextEffect;
        }
      } while (null !== X);

      Mg && $a();
      Ha(a.containerInfo);
      a.current = c;
      X = d;

      do {
        try {
          for (n = a; null !== X;) {
            var x = X.flags;
            x & 36 && Lf(n, X.alternate, X);

            if (x & 128) {
              t = void 0;
              var Y = X.ref;

              if (null !== Y) {
                var u = X.stateNode;

                switch (X.tag) {
                  case 5:
                    t = Da(u);
                    break;

                  default:
                    t = u;
                }

                "function" === typeof Y ? Y(t) : Y.current = t;
              }
            }

            X = X.nextEffect;
          }
        } catch (v) {
          if (null === X) throw Error(q(330));
          If(X, v);
          X = X.nextEffect;
        }
      } while (null !== X);

      X = null;
      Ic();
      V = e;
    } else a.current = c;

    if (Ag) Ag = !1, Bg = a, Cg = b;else for (X = d; null !== X;) {
      b = X.nextEffect, X.nextEffect = null, X.flags & 8 && (x = X, x.sibling = null, x.stateNode = null), X = b;
    }
    d = a.pendingLanes;
    0 === d && (Ff = null);
    1 === d ? a === Hg ? Gg++ : (Gg = 0, Hg = a) : Gg = 0;
    c = c.stateNode;
    if (fc && "function" === typeof fc.onCommitFiberRoot) try {
      fc.onCommitFiberRoot(ec, c, void 0, 64 === (c.current.flags & 64));
    } catch (v) {}
    Z(a, G());
    if (Cf) throw Cf = !1, a = Df, Df = null, a;
    if (0 !== (V & 8)) return null;
    H();
    return null;
  }

  function ih() {
    for (; null !== X;) {
      var a = X.alternate;
      Mg || null === Lg || (0 !== (X.flags & 8) ? Ca(X, Lg) && (Mg = !0, Za()) : 13 === X.tag && bg(a, X) && Ca(X, Lg) && (Mg = !0, Za()));
      var b = X.flags;
      0 !== (b & 256) && Jf(a, X);
      0 === (b & 512) || Ag || (Ag = !0, Qc(97, function () {
        Qg();
        return null;
      }));
      X = X.nextEffect;
    }
  }

  function Qg() {
    if (90 !== Cg) {
      var a = 97 < Cg ? 97 : Cg;
      Cg = 90;
      return Pc(a, jh);
    }

    return !1;
  }

  function Nf(a, b) {
    Dg.push(b, a);
    Ag || (Ag = !0, Qc(97, function () {
      Qg();
      return null;
    }));
  }

  function Mf(a, b) {
    Eg.push(b, a);
    Ag || (Ag = !0, Qc(97, function () {
      Qg();
      return null;
    }));
  }

  function jh() {
    if (null === Bg) return !1;
    var a = Bg;
    Bg = null;
    if (0 !== (V & 48)) throw Error(q(331));
    var b = V;
    V |= 32;
    var c = Eg;
    Eg = [];

    for (var d = 0; d < c.length; d += 2) {
      var e = c[d],
          f = c[d + 1],
          g = e.destroy;
      e.destroy = void 0;
      if ("function" === typeof g) try {
        g();
      } catch (k) {
        if (null === f) throw Error(q(330));
        If(f, k);
      }
    }

    c = Dg;
    Dg = [];

    for (d = 0; d < c.length; d += 2) {
      e = c[d];
      f = c[d + 1];

      try {
        var h = e.create;
        e.destroy = h();
      } catch (k) {
        if (null === f) throw Error(q(330));
        If(f, k);
      }
    }

    for (h = a.current.firstEffect; null !== h;) {
      a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
    }

    V = b;
    H();
    return !0;
  }

  function kh(a, b, c) {
    b = yf(c, b);
    b = Bf(a, b, 1);
    md(a, b);
    b = K();
    a = Ng(a, 1);
    null !== a && (rc(a, 1, b), Z(a, b));
  }

  function If(a, b) {
    if (3 === a.tag) kh(a, a, b);else for (var c = a.return; null !== c;) {
      if (3 === c.tag) {
        kh(c, a, b);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;

        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ff || !Ff.has(d))) {
          a = yf(b, a);
          var e = Ef(c, a, 1);
          md(c, e);
          e = K();
          c = Ng(c, 1);
          if (null !== c) rc(c, 1, e), Z(c, e);else if ("function" === typeof d.componentDidCatch && (null === Ff || !Ff.has(d))) try {
            d.componentDidCatch(b, a);
          } catch (f) {}
          break;
        }
      }

      c = c.return;
    }
  }

  function ch(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = K();
    a.pingedLanes |= a.suspendedLanes & c;
    R === a && (U & c) === c && (4 === T || 3 === T && (U & 62914560) === U && 500 > G() - $f ? Sg(a, 0) : xg |= c);
    Z(a, b);
  }

  function ag(a, b) {
    var c = a.stateNode;
    null !== c && c.delete(b);
    b = 0;
    0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === Nc() ? 1 : 2 : (0 === Jg && (Jg = wg), b = pc(62914560 & ~Jg), 0 === b && (b = 4194304)));
    c = K();
    a = Ng(a, b);
    null !== a && (rc(a, b, c), Z(a, c));
  }

  var gh;

  gh = function gh(a, b, c) {
    var d = b.lanes;
    if (null !== a) {
      if (a.memoizedProps !== b.pendingProps || D.current) gd = !0;else if (0 !== (c & d)) gd = 0 !== (a.flags & 16384) ? !0 : !1;else {
        gd = !1;

        switch (b.tag) {
          case 3:
            af(b);
            ce();
            break;

          case 5:
            Rd(b);
            break;

          case 1:
            E(b.type) && cc(b);
            break;

          case 4:
            Pd(b, b.stateNode.containerInfo);
            break;

          case 10:
            cd(b, b.memoizedProps.value);
            break;

          case 13:
            if (null !== b.memoizedState) {
              if (0 !== (c & b.child.childLanes)) return cf(a, b, c);
              A(M, M.current & 1);
              b = Re(a, b, c);
              return null !== b ? b.sibling : null;
            }

            A(M, M.current & 1);
            break;

          case 19:
            d = 0 !== (c & b.childLanes);

            if (0 !== (a.flags & 64)) {
              if (d) return kf(a, b, c);
              b.flags |= 64;
            }

            var e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            A(M, M.current);
            if (d) break;else return null;

          case 23:
          case 24:
            return b.lanes = 0, We(a, b, c);
        }

        return Re(a, b, c);
      }
    } else gd = !1;
    b.lanes = 0;

    switch (b.tag) {
      case 2:
        d = b.type;
        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        e = Zb(b, B.current);
        fd(b, c);
        e = le(null, b, d, a, e, c);
        b.flags |= 1;

        if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
          b.tag = 1;
          b.memoizedState = null;
          b.updateQueue = null;

          if (E(d)) {
            var f = !0;
            cc(b);
          } else f = !1;

          b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
          id(b);
          var g = d.getDerivedStateFromProps;
          "function" === typeof g && sd(b, d, g, a);
          e.updater = vd;
          b.stateNode = e;
          e._reactInternals = b;
          zd(b, d, a, c);
          b = $e(null, b, d, !0, f, c);
        } else b.tag = 0, S(null, b, e, c), b = b.child;

        return b;

      case 16:
        e = b.elementType;

        a: {
          null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          f = e._init;
          e = f(e._payload);
          b.type = e;
          f = b.tag = lh(e);
          a = Xc(e, a);

          switch (f) {
            case 0:
              b = Ve(null, b, e, a, c);
              break a;

            case 1:
              b = Ze(null, b, e, a, c);
              break a;

            case 11:
              b = Pe(null, b, e, a, c);
              break a;

            case 14:
              b = Se(null, b, e, Xc(e.type, a), d, c);
              break a;
          }

          throw Error(q(306, e, ""));
        }

        return b;

      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Ve(a, b, d, e, c);

      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Ze(a, b, d, e, c);

      case 3:
        af(b);
        d = b.updateQueue;
        if (null === a || null === d) throw Error(q(282));
        d = b.pendingProps;
        e = b.memoizedState;
        e = null !== e ? e.element : null;
        jd(a, b);
        od(b, d, null, c);
        d = b.memoizedState.element;
        if (d === e) ce(), b = Re(a, b, c);else {
          e = b.stateNode;
          if (f = e.hydrate) Va ? (Vd = Kb(b.stateNode.containerInfo), Ud = b, f = Wd = !0) : f = !1;

          if (f) {
            if (Va && (a = e.mutableSourceEagerHydrationData, null != a)) for (e = 0; e < a.length; e += 2) {
              f = a[e], g = a[e + 1], Sa ? f._workInProgressVersionPrimary = g : f._workInProgressVersionSecondary = g, de.push(f);
            }
            c = Kd(b, null, d, c);

            for (b.child = c; c;) {
              c.flags = c.flags & -3 | 1024, c = c.sibling;
            }
          } else S(a, b, d, c), ce();

          b = b.child;
        }
        return b;

      case 5:
        return Rd(b), null === a && $d(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ma(d, e) ? g = null : null !== f && Ma(d, f) && (b.flags |= 16), Ye(a, b), S(a, b, g, c), b.child;

      case 6:
        return null === a && $d(b), null;

      case 13:
        return cf(a, b, c);

      case 4:
        return Pd(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Jd(b, null, d, c) : S(a, b, d, c), b.child;

      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Pe(a, b, d, e, c);

      case 7:
        return S(a, b, b.pendingProps, c), b.child;

      case 8:
        return S(a, b, b.pendingProps.children, c), b.child;

      case 12:
        return S(a, b, b.pendingProps.children, c), b.child;

      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          cd(b, f);

          if (null !== g) {
            var h = g.value;
            f = I(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;

            if (0 === f) {
              if (g.children === e.children && !D.current) {
                b = Re(a, b, c);
                break a;
              }
            } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
              var k = h.dependencies;

              if (null !== k) {
                g = h.child;

                for (var l = k.firstContext; null !== l;) {
                  if (l.context === d && 0 !== (l.observedBits & f)) {
                    1 === h.tag && (l = kd(-1, c & -c), l.tag = 2, md(h, l));
                    h.lanes |= c;
                    l = h.alternate;
                    null !== l && (l.lanes |= c);
                    ed(h.return, c);
                    k.lanes |= c;
                    break;
                  }

                  l = l.next;
                }
              } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

              if (null !== g) g.return = h;else for (g = h; null !== g;) {
                if (g === b) {
                  g = null;
                  break;
                }

                h = g.sibling;

                if (null !== h) {
                  h.return = g.return;
                  g = h;
                  break;
                }

                g = g.return;
              }
              h = g;
            }
          }

          S(a, b, e.children, c);
          b = b.child;
        }

        return b;

      case 9:
        return e = b.type, f = b.pendingProps, d = f.children, fd(b, c), e = J(e, f.unstable_observedBits), d = d(e), b.flags |= 1, S(a, b, d, c), b.child;

      case 14:
        return e = b.type, f = Xc(e, b.pendingProps), f = Xc(e.type, f), Se(a, b, e, f, d, c);

      case 15:
        return Ue(a, b, b.type, b.pendingProps, d, c);

      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, E(d) ? (a = !0, cc(b)) : a = !1, fd(b, c), xd(b, d, e), zd(b, d, e, c), $e(null, b, d, !0, a, c);

      case 19:
        return kf(a, b, c);

      case 23:
        return We(a, b, c);

      case 24:
        return We(a, b, c);
    }

    throw Error(q(156, b.tag));
  };

  var mh = {
    current: !1
  },
      nh = m.unstable_flushAllWithoutAsserting,
      oh = "function" === typeof nh;

  function ph() {
    if (void 0 !== nh) return nh();

    for (var a = !1; Qg();) {
      a = !0;
    }

    return a;
  }

  function qh(a) {
    try {
      ph(), og(function () {
        ph() ? qh(a) : a();
      });
    } catch (b) {
      a(b);
    }
  }

  var rh = 0,
      sh = !1;

  function th(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.flags = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }

  function Yd(a, b, c, d) {
    return new th(a, b, c, d);
  }

  function Te(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }

  function lh(a) {
    if ("function" === typeof a) return Te(a) ? 1 : 0;

    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === la) return 11;
      if (a === oa) return 14;
    }

    return 2;
  }

  function Ed(a, b) {
    var c = a.alternate;
    null === c ? (c = Yd(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      lanes: b.lanes,
      firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }

  function Gd(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) Te(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case fa:
        return Id(c.children, e, f, b);

      case ra:
        g = 8;
        e |= 16;
        break;

      case ha:
        g = 8;
        e |= 1;
        break;

      case ia:
        return a = Yd(12, c, b, e | 8), a.elementType = ia, a.type = ia, a.lanes = f, a;

      case ma:
        return a = Yd(13, c, b, e), a.type = ma, a.elementType = ma, a.lanes = f, a;

      case na:
        return a = Yd(19, c, b, e), a.elementType = na, a.lanes = f, a;

      case sa:
        return ef(c, e, f, b);

      case ta:
        return a = Yd(24, c, b, e), a.elementType = ta, a.lanes = f, a;

      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case ja:
            g = 10;
            break a;

          case ka:
            g = 9;
            break a;

          case la:
            g = 11;
            break a;

          case oa:
            g = 14;
            break a;

          case pa:
            g = 16;
            d = null;
            break a;

          case qa:
            g = 22;
            break a;
        }
        throw Error(q(130, null == a ? a : typeof a, ""));
    }
    b = Yd(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }

  function Id(a, b, c, d) {
    a = Yd(7, a, d, b);
    a.lanes = c;
    return a;
  }

  function ef(a, b, c, d) {
    a = Yd(23, a, d, b);
    a.elementType = sa;
    a.lanes = c;
    return a;
  }

  function Fd(a, b, c) {
    a = Yd(6, a, null, b);
    a.lanes = c;
    return a;
  }

  function Hd(a, b, c) {
    b = Yd(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }

  function uh(a, b, c) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = Ra;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 0;
    this.eventTimes = qc(0);
    this.expirationTimes = qc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = qc(0);
    Va && (this.mutableSourceEagerHydrationData = null);
  }

  function vh(a) {
    var b = a._reactInternals;

    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(q(188));
      throw Error(q(268, Object.keys(a)));
    }

    a = Aa(b);
    return null === a ? null : a.stateNode;
  }

  function wh(a, b) {
    a = a.memoizedState;

    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }

  function xh(a, b) {
    wh(a, b);
    (a = a.alternate) && wh(a, b);
  }

  function yh(a) {
    a = Aa(a);
    return null === a ? null : a.stateNode;
  }

  function zh() {
    return null;
  }

  exports.IsThisRendererActing = mh;

  exports.act = function (a) {
    function b() {
      rh--;
      sg.current = c;
      mh.current = d;
    }

    !1 === sh && (sh = !0, console.error("act(...) is not supported in production builds of React, and might not behave as expected."));
    rh++;
    var c = sg.current,
        d = mh.current;
    sg.current = !0;
    mh.current = !0;

    try {
      var e = ah(a);
    } catch (f) {
      throw b(), f;
    }

    if (null !== e && "object" === typeof e && "function" === typeof e.then) return {
      then: function then(a, d) {
        e.then(function () {
          1 < rh || !0 === oh && !0 === c ? (b(), a()) : qh(function (c) {
            b();
            c ? d(c) : a();
          });
        }, function (a) {
          b();
          d(a);
        });
      }
    };

    try {
      1 !== rh || !1 !== oh && !1 !== c || ph(), b();
    } catch (f) {
      throw b(), f;
    }

    return {
      then: function then(a) {
        a();
      }
    };
  };

  exports.attemptContinuousHydration = function (a) {
    if (13 === a.tag) {
      var b = K();
      ud(a, 67108864, b);
      xh(a, 67108864);
    }
  };

  exports.attemptHydrationAtCurrentPriority = function (a) {
    if (13 === a.tag) {
      var b = K(),
          c = td(a);
      ud(a, c, b);
      xh(a, c);
    }
  };

  exports.attemptSynchronousHydration = function (a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;

        if (b.hydrate) {
          var c = ic(b.pendingLanes);
          b.expiredLanes |= c & b.pendingLanes;
          Z(b, G());
          0 === (V & 48) && (zg(), H());
        }

        break;

      case 13:
        var d = K();
        bh(function () {
          return ud(a, 1, d);
        });
        xh(a, 4);
    }
  };

  exports.attemptUserBlockingHydration = function (a) {
    if (13 === a.tag) {
      var b = K();
      ud(a, 4, b);
      xh(a, 4);
    }
  };

  exports.batchedEventUpdates = function (a, b) {
    var c = V;
    V |= 2;

    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  };

  exports.batchedUpdates = ah;

  exports.createComponentSelector = function (a) {
    return {
      $$typeof: cg,
      value: a
    };
  };

  exports.createContainer = function (a, b, c) {
    a = new uh(a, b, c);
    b = Yd(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
    a.current = b;
    b.stateNode = a;
    id(b);
    return a;
  };

  exports.createHasPsuedoClassSelector = function (a) {
    return {
      $$typeof: dg,
      value: a
    };
  };

  exports.createPortal = function (a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: ea,
      key: null == d ? null : "" + d,
      children: a,
      containerInfo: b,
      implementation: c
    };
  };

  exports.createRoleSelector = function (a) {
    return {
      $$typeof: eg,
      value: a
    };
  };

  exports.createTestNameSelector = function (a) {
    return {
      $$typeof: fg,
      value: a
    };
  };

  exports.createTextSelector = function (a) {
    return {
      $$typeof: gg,
      value: a
    };
  };

  exports.deferredUpdates = function (a) {
    return Pc(97, a);
  };

  exports.discreteUpdates = function (a, b, c, d, e) {
    var f = V;
    V |= 4;

    try {
      return Pc(98, a.bind(null, b, c, d, e));
    } finally {
      V = f, 0 === V && (zg(), H());
    }
  };

  exports.findAllNodes = mg;

  exports.findBoundingRects = function (a, b) {
    if (!bb) throw Error(q(363));
    b = mg(a, b);
    a = [];

    for (var c = 0; c < b.length; c++) {
      a.push(db(b[c]));
    }

    for (b = a.length - 1; 0 < b; b--) {
      c = a[b];

      for (var d = c.x, e = d + c.width, f = c.y, g = f + c.height, h = b - 1; 0 <= h; h--) {
        if (b !== h) {
          var k = a[h],
              l = k.x,
              n = l + k.width,
              t = k.y,
              p = t + k.height;

          if (d >= l && f >= t && e <= n && g <= p) {
            a.splice(b, 1);
            break;
          } else if (!(d !== l || c.width !== k.width || p < f || t > g)) {
            t > f && (k.height += t - f, k.y = f);
            p < g && (k.height = g - t);
            a.splice(b, 1);
            break;
          } else if (!(f !== t || c.height !== k.height || n < d || l > e)) {
            l > d && (k.width += l - d, k.x = d);
            n < e && (k.width = e - l);
            a.splice(b, 1);
            break;
          }
        }
      }
    }

    return a;
  };

  exports.findHostInstance = vh;

  exports.findHostInstanceWithNoPortals = function (a) {
    a = Ba(a);
    return null === a ? null : 20 === a.tag ? a.stateNode.instance : a.stateNode;
  };

  exports.findHostInstanceWithWarning = function (a) {
    return vh(a);
  };

  exports.flushControlled = function (a) {
    var b = V;
    V |= 1;

    try {
      Pc(99, a);
    } finally {
      V = b, 0 === V && (zg(), H());
    }
  };

  exports.flushDiscreteUpdates = function () {
    0 === (V & 49) && ($g(), Qg());
  };

  exports.flushPassiveEffects = Qg;
  exports.flushSync = bh;

  exports.focusWithin = function (a, b) {
    if (!bb) throw Error(q(363));
    a = ig(a);
    b = lg(a, b);
    b = Array.from(b);

    for (a = 0; a < b.length;) {
      var c = b[a++];

      if (!fb(c)) {
        if (5 === c.tag && hb(c.stateNode)) return !0;

        for (c = c.child; null !== c;) {
          b.push(c), c = c.sibling;
        }
      }
    }

    return !1;
  };

  exports.getCurrentUpdateLanePriority = function () {
    return hc;
  };

  exports.getFindAllNodesFailureDescription = function (a, b) {
    if (!bb) throw Error(q(363));
    var c = 0,
        d = [];
    a = [ig(a), 0];

    for (var e = 0; e < a.length;) {
      var f = a[e++],
          g = a[e++],
          h = b[g];
      if (5 !== f.tag || !fb(f)) if (jg(f, h) && (d.push(kg(h)), g++, g > c && (c = g)), g < b.length) for (f = f.child; null !== f;) {
        a.push(f, g), f = f.sibling;
      }
    }

    if (c < b.length) {
      for (a = []; c < b.length; c++) {
        a.push(kg(b[c]));
      }

      return "findAllNodes was able to match part of the selector:\n  " + (d.join(" > ") + "\n\nNo matching component was found for:\n  ") + a.join(" > ");
    }

    return null;
  };

  exports.getPublicRootInstance = function (a) {
    a = a.current;
    if (!a.child) return null;

    switch (a.child.tag) {
      case 5:
        return Da(a.child.stateNode);

      default:
        return a.child.stateNode;
    }
  };

  exports.injectIntoDevTools = function (a) {
    a = {
      bundleType: a.bundleType,
      version: a.version,
      rendererPackageName: a.rendererPackageName,
      rendererConfig: a.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ca.ReactCurrentDispatcher,
      findHostInstanceByFiber: yh,
      findFiberByHostInstance: a.findFiberByHostInstance || zh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null
    };
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) a = !1;else {
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!b.isDisabled && b.supportsFiber) try {
        ec = b.inject(a), fc = b;
      } catch (c) {}
      a = !0;
    }
    return a;
  };

  exports.observeVisibleRects = function (a, b, c, d) {
    if (!bb) throw Error(q(363));
    a = mg(a, b);
    var e = ib(a, c, d).disconnect;
    return {
      disconnect: function disconnect() {
        e();
      }
    };
  };

  exports.registerMutableSourceForHydration = function (a, b) {
    var c = b._getVersion;
    c = c(b._source);
    null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
  };

  exports.runWithPriority = function (a, b) {
    var c = hc;

    try {
      return hc = a, b();
    } finally {
      hc = c;
    }
  };

  exports.shouldSuspend = function () {
    return !1;
  };

  exports.unbatchedUpdates = function (a, b) {
    var c = V;
    V &= -2;
    V |= 8;

    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  };

  exports.updateContainer = function (a, b, c, d) {
    var e = b.current,
        f = K(),
        g = td(e);

    a: if (c) {
      c = c._reactInternals;

      b: {
        if (xa(c) !== c || 1 !== c.tag) throw Error(q(170));
        var h = c;

        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;

            case 1:
              if (E(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }

          }

          h = h.return;
        } while (null !== h);

        throw Error(q(171));
      }

      if (1 === c.tag) {
        var k = c.type;

        if (E(k)) {
          c = bc(c, k, h);
          break a;
        }
      }

      c = h;
    } else c = Xb;

    null === b.context ? b.context = c : b.pendingContext = c;
    b = kd(f, g);
    b.payload = {
      element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    md(e, b);
    ud(e, g, f);
    return g;
  };

  return exports;
};

/***/ }),

/***/ 29305:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(71717);
} else {}

/***/ }),

/***/ 39262:
/***/ (function(module) {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy;

function wrappy(fn, cb) {
  if (fn && cb) return wrappy(fn)(cb);
  if (typeof fn !== 'function') throw new TypeError('need wrapper function');
  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k];
  });
  return wrapper;

  function wrapper() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    var ret = fn.apply(this, args);
    var cb = args[args.length - 1];

    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k];
      });
    }

    return ret;
  }
}

/***/ }),

/***/ 59176:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ 41568:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _objectWithoutProperties; }
});

;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ 77475:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(70111);
var isArray = __webpack_require__(43157);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 65417:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(77475);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 6790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(43157);
var toLength = __webpack_require__(17466);
var bind = __webpack_require__(49974);

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ 49974:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(13099);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 43157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(84326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ 84944:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(82109);
var flattenIntoArray = __webpack_require__(6790);
var toObject = __webpack_require__(47908);
var toLength = __webpack_require__(17466);
var toInteger = __webpack_require__(99958);
var arraySpeciesCreate = __webpack_require__(65417);

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});


/***/ }),

/***/ 42495:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/***/ 22632:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ GithubPullRequestButton; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(41568);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var esm_asyncToGenerator = __webpack_require__(59176);
;// CONCATENATED MODULE: ./node_modules/universal-user-agent/dist-web/index.js
function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }

  if (typeof process === "object" && "version" in process) {
    return "Node.js/".concat(process.version.substr(1), " (").concat(process.platform, "; ").concat(process.arch, ")");
  }

  return "<environment undetectable>";
}


// EXTERNAL MODULE: ./node_modules/before-after-hook/index.js
var before_after_hook = __webpack_require__(91547);
;// CONCATENATED MODULE: ./node_modules/@octokit/endpoint/node_modules/is-plain-object/dist/is-plain-object.mjs
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor, prot;
  if (isObject(o) === false) return false; // If has modified constructor

  ctor = o.constructor;
  if (ctor === undefined) return true; // If has modified prototype

  prot = ctor.prototype;
  if (isObject(prot) === false) return false; // If constructor does not have an Object-specific method

  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  } // Most likely a plain Object


  return true;
}


;// CONCATENATED MODULE: ./node_modules/@octokit/endpoint/dist-web/index.js



function lowercaseKeys(object) {
  if (!object) {
    return {};
  }

  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}

function mergeDeep(defaults, options) {
  var result = Object.assign({}, defaults);
  Object.keys(options).forEach(key => {
    if (isPlainObject(options[key])) {
      if (!(key in defaults)) Object.assign(result, {
        [key]: options[key]
      });else result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, {
        [key]: options[key]
      });
    }
  });
  return result;
}

function removeUndefinedProperties(obj) {
  for (var key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }

  return obj;
}

function merge(defaults, route, options) {
  if (typeof route === "string") {
    var [method, url] = route.split(" ");
    options = Object.assign(url ? {
      method,
      url
    } : {
      url: method
    }, options);
  } else {
    options = Object.assign({}, route);
  } // lowercase header names before merging with defaults to avoid duplicates


  options.headers = lowercaseKeys(options.headers); // remove properties with undefined values before merging

  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  var mergedOptions = mergeDeep(defaults || {}, options); // mediaType.previews arrays are merged, instead of overwritten

  if (defaults && defaults.mediaType.previews.length) {
    mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(preview => !mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
  }

  mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(preview => preview.replace(/-preview/, ""));
  return mergedOptions;
}

function addQueryParameters(url, parameters) {
  var separator = /\?/.test(url) ? "&" : "?";
  var names = Object.keys(parameters);

  if (names.length === 0) {
    return url;
  }

  return url + separator + names.map(name => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }

    return "".concat(name, "=").concat(encodeURIComponent(parameters[name]));
  }).join("&");
}

var urlVariableRegex = /\{[^}]+\}/g;

function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}

function extractUrlVariableNames(url) {
  var matches = url.match(urlVariableRegex);

  if (!matches) {
    return [];
  }

  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}

function omit(object, keysToOmit) {
  return Object.keys(object).filter(option => !keysToOmit.includes(option)).reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});
} // Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* istanbul ignore file */


function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }

    return part;
  }).join("");
}

function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);

  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}

function getValues(context, operator, key, modifier) {
  var value = context[key],
      result = [];

  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();

      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }

      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        var tmp = [];

        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            tmp.push(encodeValue(operator, value));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }

        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }

  return result;
}

function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}

function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
    if (expression) {
      var operator = "";
      var values = [];

      if (operators.indexOf(expression.charAt(0)) !== -1) {
        operator = expression.charAt(0);
        expression = expression.substr(1);
      }

      expression.split(/,/g).forEach(function (variable) {
        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
        values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
      });

      if (operator && operator !== "+") {
        var separator = ",";

        if (operator === "?") {
          separator = "&";
        } else if (operator !== "#") {
          separator = operator;
        }

        return (values.length !== 0 ? operator : "") + values.join(separator);
      } else {
        return values.join(",");
      }
    } else {
      return encodeReserved(literal);
    }
  });
}

function parse(options) {
  // https://fetch.spec.whatwg.org/#methods
  var method = options.method.toUpperCase(); // replace :varname with {varname} to make it RFC 6570 compatible

  var url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  var headers = Object.assign({}, options.headers);
  var body;
  var parameters = omit(options, ["method", "baseUrl", "url", "headers", "request", "mediaType"]); // extract variable names from URL to calculate remaining variables later

  var urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);

  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }

  var omittedParameters = Object.keys(options).filter(option => urlVariableNames.includes(option)).concat("baseUrl");
  var remainingParameters = omit(parameters, omittedParameters);
  var isBinaryRequest = /application\/octet-stream/i.test(headers.accept);

  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
      headers.accept = headers.accept.split(/,/).map(preview => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, "application/vnd$1$2.".concat(options.mediaType.format))).join(",");
    }

    if (options.mediaType.previews.length) {
      var previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
      headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map(preview => {
        var format = options.mediaType.format ? ".".concat(options.mediaType.format) : "+json";
        return "application/vnd.github.".concat(preview, "-preview").concat(format);
      }).join(",");
    }
  } // for GET/HEAD requests, set URL query parameters from remaining parameters
  // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters


  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      } else {
        headers["content-length"] = 0;
      }
    }
  } // default content-type for JSON if body is set


  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
  // fetch does not allow to set `content-length` header, but we can set body to an empty string


  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  } // Only return body/request keys if present


  return Object.assign({
    method,
    url,
    headers
  }, typeof body !== "undefined" ? {
    body
  } : null, options.request ? {
    request: options.request
  } : null);
}

function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
  var DEFAULTS = merge(oldDefaults, newDefaults);
  var endpoint = endpointWithDefaults.bind(null, DEFAULTS);
  return Object.assign(endpoint, {
    DEFAULTS,
    defaults: withDefaults.bind(null, DEFAULTS),
    merge: merge.bind(null, DEFAULTS),
    parse
  });
}

var VERSION = "6.0.12";
var userAgent = "octokit-endpoint.js/".concat(VERSION, " ").concat(getUserAgent()); // DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.

var DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: "",
    previews: []
  }
};
var endpoint = withDefaults(null, DEFAULTS);

;// CONCATENATED MODULE: ./node_modules/@octokit/request/node_modules/is-plain-object/dist/is-plain-object.mjs
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function is_plain_object_isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function is_plain_object_isPlainObject(o) {
  var ctor, prot;
  if (is_plain_object_isObject(o) === false) return false; // If has modified constructor

  ctor = o.constructor;
  if (ctor === undefined) return true; // If has modified prototype

  prot = ctor.prototype;
  if (is_plain_object_isObject(prot) === false) return false; // If constructor does not have an Object-specific method

  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  } // Most likely a plain Object


  return true;
}


// EXTERNAL MODULE: ./node_modules/node-fetch/browser.js
var browser = __webpack_require__(76474);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// CONCATENATED MODULE: ./node_modules/deprecation/dist-web/index.js
class Deprecation extends Error {
  constructor(message) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'Deprecation';
  }

}


// EXTERNAL MODULE: ./node_modules/once/once.js
var once = __webpack_require__(20918);
var once_default = /*#__PURE__*/__webpack_require__.n(once);
;// CONCATENATED MODULE: ./node_modules/@octokit/request-error/dist-web/index.js


var logOnceCode = once_default()(deprecation => console.warn(deprecation));
var logOnceHeaders = once_default()(deprecation => console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */

class RequestError extends Error {
  constructor(message, statusCode, options) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = "HttpError";
    this.status = statusCode;
    var headers;

    if ("headers" in options && typeof options.headers !== "undefined") {
      headers = options.headers;
    }

    if ("response" in options) {
      this.response = options.response;
      headers = options.response.headers;
    } // redact request credentials without mutating original request options


    var requestCopy = Object.assign({}, options.request);

    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }

    requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
    // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
    .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]") // OAuth tokens can be passed as URL query parameters, although it is not recommended
    // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
    .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy; // deprecations

    Object.defineProperty(this, "code", {
      get() {
        logOnceCode(new Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }

    });
    Object.defineProperty(this, "headers", {
      get() {
        logOnceHeaders(new Deprecation("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."));
        return headers || {};
      }

    });
  }

}


;// CONCATENATED MODULE: ./node_modules/@octokit/request/dist-web/index.js






var dist_web_VERSION = "5.6.0";

function getBufferResponse(response) {
  return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
  var log = requestOptions.request && requestOptions.request.log ? requestOptions.request.log : console;

  if (is_plain_object_isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  var headers = {};
  var status;
  var url;
  var fetch = requestOptions.request && requestOptions.request.fetch || (browser_default());
  return fetch(requestOptions.url, Object.assign({
    method: requestOptions.method,
    body: requestOptions.body,
    headers: requestOptions.headers,
    redirect: requestOptions.redirect
  }, // `requestOptions.request.agent` type is incompatible
  // see https://github.com/octokit/types.ts/pull/264
  requestOptions.request)).then( /*#__PURE__*/function () {
    var _ref = (0,esm_asyncToGenerator/* default */.Z)(function* (response) {
      url = response.url;
      status = response.status;

      for (var keyAndValue of response.headers) {
        headers[keyAndValue[0]] = keyAndValue[1];
      }

      if ("deprecation" in headers) {
        var matches = headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/);
        var deprecationLink = matches && matches.pop();
        log.warn("[@octokit/request] \"".concat(requestOptions.method, " ").concat(requestOptions.url, "\" is deprecated. It is scheduled to be removed on ").concat(headers.sunset).concat(deprecationLink ? ". See ".concat(deprecationLink) : ""));
      }

      if (status === 204 || status === 205) {
        return;
      } // GitHub API returns 200 for HEAD requests


      if (requestOptions.method === "HEAD") {
        if (status < 400) {
          return;
        }

        throw new RequestError(response.statusText, status, {
          response: {
            url,
            status,
            headers,
            data: undefined
          },
          request: requestOptions
        });
      }

      if (status === 304) {
        throw new RequestError("Not modified", status, {
          response: {
            url,
            status,
            headers,
            data: yield getResponseData(response)
          },
          request: requestOptions
        });
      }

      if (status >= 400) {
        var data = yield getResponseData(response);
        var error = new RequestError(toErrorMessage(data), status, {
          response: {
            url,
            status,
            headers,
            data
          },
          request: requestOptions
        });
        throw error;
      }

      return getResponseData(response);
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()).then(data => {
    return {
      status,
      url,
      headers,
      data
    };
  }).catch(error => {
    if (error instanceof RequestError) throw error;
    throw new RequestError(error.message, 500, {
      request: requestOptions
    });
  });
}

function getResponseData(_x2) {
  return _getResponseData.apply(this, arguments);
}

function _getResponseData() {
  _getResponseData = (0,esm_asyncToGenerator/* default */.Z)(function* (response) {
    var contentType = response.headers.get("content-type");

    if (/application\/json/.test(contentType)) {
      return response.json();
    }

    if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
      return response.text();
    }

    return getBufferResponse(response);
  });
  return _getResponseData.apply(this, arguments);
}

function toErrorMessage(data) {
  if (typeof data === "string") return data; // istanbul ignore else - just in case

  if ("message" in data) {
    if (Array.isArray(data.errors)) {
      return "".concat(data.message, ": ").concat(data.errors.map(JSON.stringify).join(", "));
    }

    return data.message;
  } // istanbul ignore next - just in case


  return "Unknown error: ".concat(JSON.stringify(data));
}

function dist_web_withDefaults(oldEndpoint, newDefaults) {
  var endpoint = oldEndpoint.defaults(newDefaults);

  var newApi = function newApi(route, parameters) {
    var endpointOptions = endpoint.merge(route, parameters);

    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint.parse(endpointOptions));
    }

    var request = (route, parameters) => {
      return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
    };

    Object.assign(request, {
      endpoint,
      defaults: dist_web_withDefaults.bind(null, endpoint)
    });
    return endpointOptions.request.hook(request, endpointOptions);
  };

  return Object.assign(newApi, {
    endpoint,
    defaults: dist_web_withDefaults.bind(null, endpoint)
  });
}

var request = dist_web_withDefaults(endpoint, {
  headers: {
    "user-agent": "octokit-request.js/".concat(dist_web_VERSION, " ").concat(getUserAgent())
  }
});

;// CONCATENATED MODULE: ./node_modules/@octokit/graphql/dist-web/index.js


var graphql_dist_web_VERSION = "4.6.4";

class GraphqlError extends Error {
  constructor(request, response) {
    var message = response.data.errors[0].message;
    super(message);
    Object.assign(this, response.data);
    Object.assign(this, {
      headers: response.headers
    });
    this.name = "GraphqlError";
    this.request = request; // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

}

var NON_VARIABLE_OPTIONS = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"];
var FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
var GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;

function graphql(request, query, options) {
  if (options) {
    if (typeof query === "string" && "query" in options) {
      return Promise.reject(new Error("[@octokit/graphql] \"query\" cannot be used as variable name"));
    }

    for (var key in options) {
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue;
      return Promise.reject(new Error("[@octokit/graphql] \"".concat(key, "\" cannot be used as variable name")));
    }
  }

  var parsedOptions = typeof query === "string" ? Object.assign({
    query
  }, options) : query;
  var requestOptions = Object.keys(parsedOptions).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }

    if (!result.variables) {
      result.variables = {};
    }

    result.variables[key] = parsedOptions[key];
    return result;
  }, {}); // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
  // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451

  var baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl;

  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }

  return request(requestOptions).then(response => {
    if (response.data.errors) {
      var headers = {};

      for (var _key of Object.keys(response.headers)) {
        headers[_key] = response.headers[_key];
      }

      throw new GraphqlError(requestOptions, {
        headers,
        data: response.data
      });
    }

    return response.data.data;
  });
}

function graphql_dist_web_withDefaults(request$1, newDefaults) {
  var newRequest = request$1.defaults(newDefaults);

  var newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };

  return Object.assign(newApi, {
    defaults: graphql_dist_web_withDefaults.bind(null, newRequest),
    endpoint: request.endpoint
  });
}

var graphql$1 = graphql_dist_web_withDefaults(request, {
  headers: {
    "user-agent": "octokit-graphql.js/".concat(graphql_dist_web_VERSION, " ").concat(getUserAgent())
  },
  method: "POST",
  url: "/graphql"
});

function withCustomRequest(customRequest) {
  return graphql_dist_web_withDefaults(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}


;// CONCATENATED MODULE: ./node_modules/@octokit/auth-token/dist-web/index.js


function auth(_x) {
  return _auth.apply(this, arguments);
}
/**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */


function _auth() {
  _auth = (0,esm_asyncToGenerator/* default */.Z)(function* (token) {
    var tokenType = token.split(/\./).length === 3 ? "app" : /^v\d+\./.test(token) ? "installation" : "oauth";
    return {
      type: "token",
      token: token,
      tokenType
    };
  });
  return _auth.apply(this, arguments);
}

function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return "bearer ".concat(token);
  }

  return "token ".concat(token);
}

function hook(_x2, _x3, _x4, _x5) {
  return _hook.apply(this, arguments);
}

function _hook() {
  _hook = (0,esm_asyncToGenerator/* default */.Z)(function* (token, request, route, parameters) {
    var endpoint = request.endpoint.merge(route, parameters);
    endpoint.headers.authorization = withAuthorizationPrefix(token);
    return request(endpoint);
  });
  return _hook.apply(this, arguments);
}

var createTokenAuth = function createTokenAuth(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }

  if (typeof token !== "string") {
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  }

  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};


;// CONCATENATED MODULE: ./node_modules/@octokit/core/dist-web/index.js


var _excluded = ["authStrategy"];





var core_dist_web_VERSION = "3.5.1";

class Octokit {
  constructor() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var hook = new before_after_hook.Collection();
    var requestDefaults = {
      baseUrl: request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        // @ts-ignore internal usage only, no need to type
        hook: hook.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    }; // prepend default user agent with `options.userAgent` if set

    requestDefaults.headers["user-agent"] = [options.userAgent, "octokit-core.js/".concat(core_dist_web_VERSION, " ").concat(getUserAgent())].filter(Boolean).join(" ");

    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }

    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }

    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }

    this.request = request.defaults(requestDefaults);
    this.graphql = withCustomRequest(this.request).defaults(requestDefaults);
    this.log = Object.assign({
      debug: () => {},
      info: () => {},
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, options.log);
    this.hook = hook; // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
    //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
    // (2) If only `options.auth` is set, use the default token authentication strategy.
    // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
    // TODO: type `options.auth` based on `options.authStrategy`.

    if (!options.authStrategy) {
      if (!options.auth) {
        // (1)
        this.auth = /*#__PURE__*/(0,esm_asyncToGenerator/* default */.Z)(function* () {
          return {
            type: "unauthenticated"
          };
        });
      } else {
        // (2)
        var auth = createTokenAuth(options.auth); // @ts-ignore  ¯\_(ツ)_/¯

        hook.wrap("request", auth.hook);
        this.auth = auth;
      }
    } else {
      var {
        authStrategy
      } = options,
          otherOptions = (0,objectWithoutProperties/* default */.Z)(options, _excluded);

      var _auth = authStrategy(Object.assign({
        request: this.request,
        log: this.log,
        // we pass the current octokit instance as well as its constructor options
        // to allow for authentication strategies that return a new octokit instance
        // that shares the same internal state as the current one. The original
        // requirement for this was the "event-octokit" authentication strategy
        // of https://github.com/probot/octokit-auth-probot.
        octokit: this,
        octokitOptions: otherOptions
      }, options.auth)); // @ts-ignore  ¯\_(ツ)_/¯


      hook.wrap("request", _auth.hook);
      this.auth = _auth;
    } // apply plugins
    // https://stackoverflow.com/a/16345172


    var classConstructor = this.constructor;
    classConstructor.plugins.forEach(plugin => {
      Object.assign(this, plugin(this, options));
    });
  }

  static defaults(defaults) {
    var OctokitWithDefaults = class extends this {
      constructor() {
        var options = (arguments.length <= 0 ? undefined : arguments[0]) || {};

        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }

        super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent ? {
          userAgent: "".concat(options.userAgent, " ").concat(defaults.userAgent)
        } : null));
      }

    };
    return OctokitWithDefaults;
  }
  /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */


  static plugin() {
    var _a;

    var currentPlugins = this.plugins;

    for (var _len = arguments.length, newPlugins = new Array(_len), _key = 0; _key < _len; _key++) {
      newPlugins[_key] = arguments[_key];
    }

    var NewOctokit = (_a = class extends this {}, _a.plugins = currentPlugins.concat(newPlugins.filter(plugin => !currentPlugins.includes(plugin))), _a);
    return NewOctokit;
  }

}

Octokit.VERSION = core_dist_web_VERSION;
Octokit.plugins = [];

// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(66475);
;// CONCATENATED MODULE: ./node_modules/octokit-plugin-create-pull-request/dist-web/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function valueToTreeObject(_x, _x2, _x3, _x4, _x5) {
  return _valueToTreeObject.apply(this, arguments);
}

function _valueToTreeObject() {
  _valueToTreeObject = (0,esm_asyncToGenerator/* default */.Z)(function* (octokit, owner, repo, path, value) {
    // Text files can be changed through the .content key
    if (typeof value === "string") {
      return {
        path,
        mode: "100644",
        content: value
      };
    } // Binary files need to be created first using the git blob API,
    // then changed by referencing in the .sha key


    var {
      data
    } = yield octokit.request("POST /repos/{owner}/{repo}/git/blobs", _objectSpread({
      owner,
      repo
    }, value));
    var blobSha = data.sha;
    return {
      path,
      mode: "100644",
      sha: blobSha
    };
  });
  return _valueToTreeObject.apply(this, arguments);
}

function createTree(_x6, _x7) {
  return _createTree.apply(this, arguments);
}

function _createTree() {
  _createTree = (0,esm_asyncToGenerator/* default */.Z)(function* (state, changes) {
    var {
      octokit,
      owner,
      repo,
      fork,
      latestCommitSha,
      latestCommitTreeSha
    } = state;
    var tree = (yield Promise.all(Object.keys(changes.files).map( /*#__PURE__*/function () {
      var _ref2 = (0,esm_asyncToGenerator/* default */.Z)(function* (path) {
        var value = changes.files[path];

        if (value === null) {
          // Deleting a non-existent file from a tree leads to an "GitRPC::BadObjectState" error,
          // so we only attempt to delete the file if it exists.
          try {
            // https://developer.github.com/v3/repos/contents/#get-contents
            yield octokit.request("HEAD /repos/{owner}/{repo}/contents/:path", {
              owner: fork,
              repo,
              ref: latestCommitSha,
              path
            });
            return {
              path,
              mode: "100644",
              sha: null
            };
          } catch (error) {
            return;
          }
        } // When passed a function, retrieve the content of the file, pass it
        // to the function, then return the result


        if (typeof value === "function") {
          var result;

          try {
            var {
              data: file
            } = yield octokit.request("GET /repos/{owner}/{repo}/contents/:path", {
              owner: fork,
              repo,
              ref: latestCommitSha,
              path
            });
            result = yield value(Object.assign(file, {
              exists: true
            }));
          } catch (error) {
            // istanbul ignore if
            if (error.status !== 404) throw error; // @ts-ignore

            result = yield value({
              exists: false
            });
          }

          if (result === null || typeof result === "undefined") return;
          return valueToTreeObject(octokit, owner, repo, path, result);
        }

        return valueToTreeObject(octokit, owner, repo, path, value);
      });

      return function (_x13) {
        return _ref2.apply(this, arguments);
      };
    }()))).filter(Boolean);

    if (tree.length === 0) {
      return null;
    } // https://developer.github.com/v3/git/trees/#create-a-tree


    var {
      data: {
        sha: newTreeSha
      }
    } = yield octokit.request("POST /repos/{owner}/{repo}/git/trees", {
      owner: fork,
      repo,
      base_tree: latestCommitTreeSha,
      tree
    });
    return newTreeSha;
  });
  return _createTree.apply(this, arguments);
}

function createCommit(_x8, _x9, _x10) {
  return _createCommit.apply(this, arguments);
}

function _createCommit() {
  _createCommit = (0,esm_asyncToGenerator/* default */.Z)(function* (state, treeCreated, changes) {
    var {
      octokit,
      repo,
      fork,
      latestCommitSha
    } = state;
    var message = treeCreated ? changes.commit : typeof changes.emptyCommit === "string" ? changes.emptyCommit : changes.commit; // https://developer.github.com/v3/git/commits/#create-a-commit

    var {
      data: latestCommit
    } = yield octokit.request("POST /repos/{owner}/{repo}/git/commits", {
      owner: fork,
      repo,
      message,
      tree: state.latestCommitTreeSha,
      parents: [latestCommitSha]
    });
    return latestCommit.sha;
  });
  return _createCommit.apply(this, arguments);
}

function composeCreatePullRequest(_x11, _x12) {
  return _composeCreatePullRequest.apply(this, arguments);
}

function _composeCreatePullRequest() {
  _composeCreatePullRequest = (0,esm_asyncToGenerator/* default */.Z)(function* (octokit, _ref) {
    var {
      owner,
      repo,
      title,
      body,
      base,
      head,
      createWhenEmpty,
      changes: changesOption,
      draft = false
    } = _ref;
    var changes = Array.isArray(changesOption) ? changesOption : [changesOption];
    if (changes.length === 0) throw new Error('[octokit-plugin-create-pull-request] "changes" cannot be an empty array');
    var state = {
      octokit,
      owner,
      repo
    }; // https://developer.github.com/v3/repos/#get-a-repository

    var {
      data: repository,
      headers
    } = yield octokit.request("GET /repos/{owner}/{repo}", {
      owner,
      repo
    });
    var isUser = !!headers["x-oauth-scopes"];

    if (!repository.permissions) {
      throw new Error("[octokit-plugin-create-pull-request] Missing authentication");
    }

    if (!base) {
      base = repository.default_branch;
    }

    state.fork = owner;

    if (isUser && !repository.permissions.push) {
      // https://developer.github.com/v3/users/#get-the-authenticated-user
      var user = yield octokit.request("GET /user"); // https://developer.github.com/v3/repos/forks/#list-forks

      var forks = yield octokit.request("GET /repos/{owner}/{repo}/forks", {
        owner,
        repo
      });
      var hasFork = forks.data.find(
      /* istanbul ignore next - fork owner can be null, but we don't test that */
      fork => fork.owner && fork.owner.login === user.data.login);

      if (!hasFork) {
        // https://developer.github.com/v3/repos/forks/#create-a-fork
        yield octokit.request("POST /repos/{owner}/{repo}/forks", {
          owner,
          repo
        });
      }

      state.fork = user.data.login;
    } // https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository


    var {
      data: [latestCommit]
    } = yield octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner,
      repo,
      sha: base,
      per_page: 1
    });
    state.latestCommitSha = latestCommit.sha;
    state.latestCommitTreeSha = latestCommit.commit.tree.sha;
    var baseCommitTreeSha = latestCommit.commit.tree.sha;

    for (var change of changes) {
      var treeCreated = false;

      if (change.files && Object.keys(change.files).length) {
        var latestCommitTreeSha = yield createTree(state, change);

        if (latestCommitTreeSha) {
          state.latestCommitTreeSha = latestCommitTreeSha;
          treeCreated = true;
        }
      }

      if (treeCreated || change.emptyCommit !== false) {
        state.latestCommitSha = yield createCommit(state, treeCreated, change);
      }
    }

    var hasNoChanges = baseCommitTreeSha === state.latestCommitTreeSha;

    if (hasNoChanges && createWhenEmpty === false) {
      return null;
    } // https://developer.github.com/v3/git/refs/#create-a-reference


    yield octokit.request("POST /repos/{owner}/{repo}/git/refs", {
      owner: state.fork,
      repo,
      sha: state.latestCommitSha,
      ref: "refs/heads/".concat(head)
    }); // https://developer.github.com/v3/pulls/#create-a-pull-request

    return yield octokit.request("POST /repos/{owner}/{repo}/pulls", {
      owner,
      repo,
      head: "".concat(state.fork, ":").concat(head),
      base,
      title,
      body,
      draft
    });
  });
  return _composeCreatePullRequest.apply(this, arguments);
}

var octokit_plugin_create_pull_request_dist_web_VERSION = "3.9.3";
/**
 * @param octokit Octokit instance
 */

function createPullRequest(octokit) {
  return {
    createPullRequest: composeCreatePullRequest.bind(null, octokit)
  };
}

createPullRequest.VERSION = octokit_plugin_create_pull_request_dist_web_VERSION;

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(52468);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(65733);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(32253);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(89952);
// EXTERNAL MODULE: ./src/components/github.ts + 1 modules
var github = __webpack_require__(85133);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GitHub.js
var GitHub = __webpack_require__(14429);
// EXTERNAL MODULE: ./src/components/ApiKeyAccordion.tsx + 1 modules
var ApiKeyAccordion = __webpack_require__(42495);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/random.ts
var random = __webpack_require__(80303);
// EXTERNAL MODULE: ./src/components/hooks/useSecret.ts + 1 modules
var useSecret = __webpack_require__(21984);
;// CONCATENATED MODULE: ./src/components/buttons/GithubPullRequestButton.tsx















function GithubPullRequestButton(props) {
  var {
    files,
    label = "Create Pull Request",
    title,
    description,
    head
  } = props;
  var {
    value: token
  } = (0,useSecret/* useSecret */.$)(github/* GITHUB_API_KEY */.nJ);
  var {
    1: setResponse
  } = (0,react.useState)(undefined);
  var {
    0: busy,
    1: setBusy
  } = (0,react.useState)(false);
  var {
    setError: setAppError,
    enqueueSnackbar
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var {
    0: confirmDialog,
    1: setConfirmDialog
  } = (0,react.useState)(false);
  var bodyId = (0,react_use_id_hook_esm/* useId */.Me)();
  var {
    0: body,
    1: setBody
  } = (0,react.useState)(description);
  var headSuffix = (0,react.useMemo)(() => (0,utils/* toHex */.NC)((0,random/* anyRandomUint32 */.RO)(2)), []);
  var disabled = busy || !body || !title || !head || !files || !Object.keys(files).length;

  var handleOpenConfirm = () => setConfirmDialog(true);

  var handleCloseConfirm = () => setConfirmDialog(false);

  var handleBodyChange = ev => setBody(ev.target.value);

  var handleCreatePullRequest = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      enqueueSnackbar("creating pull request...");
      setBusy(true);
      setConfirmDialog(false);

      try {
        var MyOctokit = Octokit.plugin(createPullRequest);
        var octokit = new MyOctokit({
          auth: token
        }); // Returns a normal Octokit PR response
        // See https://octokit.github.io/rest.js/#octokit-routes-pulls-create

        var result = yield octokit.createPullRequest({
          owner: "microsoft",
          repo: "jacdac",
          title,
          body,
          head: head + "/" + headSuffix,
          changes: [{
            files,
            commit: "added files"
          }]
        });

        if (result.status === 201) {
          setResponse(result.data);
          var url = result.data.html_url;
          var id = result.data.number;
          enqueueSnackbar( /*#__PURE__*/react.createElement(Typography/* default */.Z, {
            component: "span"
          }, "Pull Request", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
            target: "_blank",
            rel: "no-referrer no-follower",
            href: url
          }, "#", id), " ", "created..."), "success");
        } else {
          setResponse(undefined);
        }
      } catch (e) {
        setAppError(e);
      } finally {
        setBusy(false);
      }
    });

    return function handleCreatePullRequest() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row"
  }, !description && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: bodyId,
    label: "message",
    "aria-label": "Description of the changes",
    placeholder: "Describe your changes",
    fullWidth: true,
    value: body,
    onChange: handleBodyChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    disabled: disabled,
    color: "primary",
    variant: "contained",
    onClick: handleOpenConfirm,
    startIcon: busy ? /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null) : /*#__PURE__*/react.createElement(GitHub/* default */.Z, null)
  }, label))), /*#__PURE__*/react.createElement(Dialog/* default */.Z, {
    open: confirmDialog,
    onClose: handleCloseConfirm
  }, /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(DialogContentText/* default */.Z, null, "We will open a new Pull Request in", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    href: "https://github.com/microsoft/jacdac",
    rel: "noreferrer nofollower"
  }, "microsoft/jacdac"), " ", "with your files. If needed, we will fork", " ", /*#__PURE__*/react.createElement("code", null, "microsoft/jacdac"), " under your account and create a Pull Request in that repository."), /*#__PURE__*/react.createElement(ApiKeyAccordion/* default */.Z, {
    apiName: github/* GITHUB_API_KEY */.nJ,
    title: "GitHub Developer Token"
  }, "Open", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    target: "_blank",
    href: "https://github.com/settings/tokens/new",
    rel: "noreferrer nofollower"
  }, "https://github.com/settings/tokens/new"), " ", "and generate a new personal access token with **repo** scope.")), /*#__PURE__*/react.createElement(DialogActions/* default */.Z, null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "contained",
    color: "primary",
    onClick: handleCreatePullRequest,
    disabled: disabled || !token,
    "aria-label": "create pull request"
  }, "create pull request"))));
}

/***/ }),

/***/ 13546:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": function() { return /* binding */ useMicrophoneAnalyzer; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/hooks/useAudioContext.ts

function useAudioContext() {
  var audioContextRef = (0,react.useRef)(); // final cleanup

  (0,react.useEffect)(() => () => {
    var _audioContextRef$curr;

    return (_audioContextRef$curr = audioContextRef.current) === null || _audioContextRef$curr === void 0 ? void 0 : _audioContextRef$curr.close();
  }, []); // needs to be initiated in onClick on safari mobile

  var onClickActivateAudioContext = () => {
    if (audioContextRef.current) return audioContextRef.current; // activating audio context

    try {
      console.log('activating audio context');
      var ctx = new (window.AudioContext || window.webkitAudioContext)(); // play silence sound within onlick to unlock it

      var buffer = ctx.createBuffer(1, 1, 22050);
      var source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.start();
      audioContextRef.current = ctx;
      console.log("audio context activated");
      return ctx;
    } catch (e) {
      console.error(e);
    }

    return audioContextRef.current;
  };

  return {
    onClickActivateAudioContext
  };
}
;// CONCATENATED MODULE: ./src/components/hooks/useAudioAnalyzer.ts



function useMicrophoneAnalyzer(options) {
  var {
    fftSize,
    smoothingTimeConstant,
    minDecibels,
    maxDecibels
  } = options || {};
  var {
    onClickActivateAudioContext
  } = useAudioContext();
  var analyzerRef = (0,react.useRef)();
  var microphoneSource = (0,react.useRef)();

  var applyOptions = () => {
    var analyzer = analyzerRef.current;

    if (analyzer) {
      // must be multiple of power of two
      if (!isNaN(fftSize)) analyzer.fftSize = fftSize;
      if (!isNaN(smoothingTimeConstant)) analyzer.smoothingTimeConstant = smoothingTimeConstant;
      if (!isNaN(minDecibels)) analyzer.minDecibels = minDecibels;
      if (!isNaN(maxDecibels)) analyzer.maxDecibels = maxDecibels;
    }
  }; // grab microphone


  var onClickActivateMicrophone = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      if (analyzerRef.current) {
        return analyzerRef.current;
      }

      var audioContext = onClickActivateAudioContext();

      try {
        console.log('activating microphone', {
          audioContext
        });
        var resp = yield navigator.mediaDevices.getUserMedia({
          video: false,
          audio: true
        });
        var source = microphoneSource.current = audioContext.createMediaStreamSource(resp);
        var node = audioContext.createAnalyser();
        source.connect(node);
        analyzerRef.current = node;
        applyOptions();
        console.log("microphone analyzer activated");
      } catch (e) {
        console.warn(e);
      }

      return analyzerRef.current;
    });

    return function onClickActivateMicrophone() {
      return _ref.apply(this, arguments);
    };
  }();

  var closeMicrophone = () => {
    if (!microphoneSource.current) return;

    try {
      var _microphoneSource$cur, _microphoneSource$cur2, _analyzerRef$current;

      console.log("closing microphone");
      var stream = (_microphoneSource$cur = microphoneSource.current) === null || _microphoneSource$cur === void 0 ? void 0 : _microphoneSource$cur.mediaStream;
      (_microphoneSource$cur2 = microphoneSource.current) === null || _microphoneSource$cur2 === void 0 ? void 0 : _microphoneSource$cur2.disconnect();
      (_analyzerRef$current = analyzerRef.current) === null || _analyzerRef$current === void 0 ? void 0 : _analyzerRef$current.disconnect();
      var tracks = stream === null || stream === void 0 ? void 0 : stream.getTracks();
      tracks === null || tracks === void 0 ? void 0 : tracks.forEach(track => track.stop());
    } catch (e) {
      console.warn(e);
    } finally {
      microphoneSource.current = undefined;
      analyzerRef.current = undefined;
    }
  }; // final cleanup


  (0,react.useEffect)(() => closeMicrophone, []); // update options

  (0,react.useEffect)(applyOptions, [analyzerRef.current, fftSize, smoothingTimeConstant, minDecibels, maxDecibels]);
  return {
    onClickActivateMicrophone,
    closeMicrophone,
    analyser: () => analyzerRef.current
  };
}

/***/ }),

/***/ 39687:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useBestRegister; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);



function useBestRegister(service) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var specification = service === null || service === void 0 ? void 0 : service.specification;
    var hasReading = specification === null || specification === void 0 ? void 0 : specification.packets.some(reg => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isReading */ .vz)(reg));
    if (hasReading) return service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SystemReg.Reading */ .ZJq.Reading);
    var hasValue = specification === null || specification === void 0 ? void 0 : specification.packets.some(reg => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isValue */ .wh)(reg));
    if (hasValue) return service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SystemReg.Value */ .ZJq.Value);
    var hasIntensity = specification === null || specification === void 0 ? void 0 : specification.packets.some(reg => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isValueOrIntensity */ .sX)(reg));
    if (hasIntensity) return service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SystemReg.Intensity */ .ZJq.Intensity);
    return undefined;
  }, [service]);
}

/***/ }),

/***/ 68786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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
  var {
    onLeft,
    onUp,
    onRight,
    onDown,
    symmetric
  } = options;
  if (!onLeft && !onUp && !onRight && !onDown) return undefined;
  var handlers = {
    [LEFT_KEY]: onLeft,
    [RIGHT_KEY]: onRight,
    [UP_KEY]: onUp || symmetric && onRight,
    [DOWN_KEY]: onDown || symmetric && onLeft
  };
  return e => {
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

  var onMove = offset => () => {
    console.log('keyboard move', {
      offset
    });
    var focusable = Array.from((parentRef === null || parentRef === void 0 ? void 0 : parentRef.querySelectorAll(query)) || []);

    if (focusable.length) {
      var me = focusable.findIndex(f => f === document.activeElement);
      var next = (me + offset + focusable.length) % focusable.length;
      focusable[next].focus();
    }
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

/***/ }),

/***/ 21984:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/***/ 73588:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ RoleListItem; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4381);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38030);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54774);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);




function RoleListItem(props) {
  var {
    role,
    selected,
    onClick
  } = props;
  var {
    deviceId,
    serviceIndex,
    name: roleName
  } = role;
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
  var bound = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(bus, b => b.device(deviceId, true), [deviceId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    button: true,
    selected: selected,
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    primary: roleName,
    secondary: bound ? "assigned to " + bound.friendlyName + "[" + serviceIndex + "]" : "not assigned"
  }));
}

/***/ }),

/***/ 49783:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yw": function() { return /* binding */ DeviceTreeItem; },
  "RL": function() { return /* binding */ ServiceTreeItem; }
});

// UNUSED EXPORTS: AnnounceFlagsTreeItem, EventTreeItem, RegisterTreeItem, ServiceMembersTreeItems

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/jacdac/useEventCount.ts
var useEventCount = __webpack_require__(95926);
// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__(87993);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/useEventRaised.ts
var useEventRaised = __webpack_require__(28417);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/devices/useDeviceName.ts
var useDeviceName = __webpack_require__(5738);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(27490);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(39055);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(59355);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(11291);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/TreeView/TreeViewContext.js
var TreeViewContext = __webpack_require__(83246);
;// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/TreeItem/TreeItem.js


/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions  */








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      outline: 0,
      WebkitTapHighlightColor: 'transparent',
      '&:focus > $content $label': {
        backgroundColor: theme.palette.action.hover
      },
      '&$selected > $content $label': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      },
      '&$selected > $content $label:hover, &$selected:focus > $content $label': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Pseudo-class applied to the root element when expanded. */
    expanded: {},

    /* Pseudo-class applied to the root element when selected. */
    selected: {},

    /* Styles applied to the `role="group"` element. */
    group: {
      margin: 0,
      padding: 0,
      marginLeft: 17
    },

    /* Styles applied to the tree node content. */
    content: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },

    /* Styles applied to the tree node icon and collapse/expand icon. */
    iconContainer: {
      marginRight: 4,
      width: 15,
      display: 'flex',
      flexShrink: 0,
      justifyContent: 'center',
      '& svg': {
        fontSize: 18
      }
    },

    /* Styles applied to the label element. */
    label: {
      width: '100%',
      paddingLeft: 4,
      position: 'relative',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  };
};

var isPrintableCharacter = function isPrintableCharacter(str) {
  return str && str.length === 1 && str.match(/\S/);
};

var TreeItem = /*#__PURE__*/react.forwardRef(function TreeItem(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      collapseIcon = props.collapseIcon,
      endIcon = props.endIcon,
      expandIcon = props.expandIcon,
      iconProp = props.icon,
      label = props.label,
      nodeId = props.nodeId,
      onClick = props.onClick,
      onLabelClick = props.onLabelClick,
      onIconClick = props.onIconClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onMouseDown = props.onMouseDown,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Collapse/* default */.Z : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "collapseIcon", "endIcon", "expandIcon", "icon", "label", "nodeId", "onClick", "onLabelClick", "onIconClick", "onFocus", "onKeyDown", "onMouseDown", "TransitionComponent", "TransitionProps"]);

  var _React$useContext = react.useContext(TreeViewContext/* default */.Z),
      contextIcons = _React$useContext.icons,
      focus = _React$useContext.focus,
      focusFirstNode = _React$useContext.focusFirstNode,
      focusLastNode = _React$useContext.focusLastNode,
      focusNextNode = _React$useContext.focusNextNode,
      focusPreviousNode = _React$useContext.focusPreviousNode,
      focusByFirstCharacter = _React$useContext.focusByFirstCharacter,
      selectNode = _React$useContext.selectNode,
      selectRange = _React$useContext.selectRange,
      selectNextNode = _React$useContext.selectNextNode,
      selectPreviousNode = _React$useContext.selectPreviousNode,
      rangeSelectToFirst = _React$useContext.rangeSelectToFirst,
      rangeSelectToLast = _React$useContext.rangeSelectToLast,
      selectAllNodes = _React$useContext.selectAllNodes,
      expandAllSiblings = _React$useContext.expandAllSiblings,
      toggleExpansion = _React$useContext.toggleExpansion,
      isExpanded = _React$useContext.isExpanded,
      isFocused = _React$useContext.isFocused,
      isSelected = _React$useContext.isSelected,
      isTabbable = _React$useContext.isTabbable,
      multiSelect = _React$useContext.multiSelect,
      getParent = _React$useContext.getParent,
      mapFirstChar = _React$useContext.mapFirstChar,
      addNodeToNodeMap = _React$useContext.addNodeToNodeMap,
      removeNodeFromNodeMap = _React$useContext.removeNodeFromNodeMap;

  var nodeRef = react.useRef(null);
  var contentRef = react.useRef(null);
  var handleRef = (0,useForkRef/* default */.Z)(nodeRef, ref);
  var icon = iconProp;
  var expandable = Boolean(Array.isArray(children) ? children.length : children);
  var expanded = isExpanded ? isExpanded(nodeId) : false;
  var focused = isFocused ? isFocused(nodeId) : false;
  var tabbable = isTabbable ? isTabbable(nodeId) : false;
  var selected = isSelected ? isSelected(nodeId) : false;
  var icons = contextIcons || {};
  var theme = (0,useTheme/* default */.Z)();

  if (!icon) {
    if (expandable) {
      if (!expanded) {
        icon = expandIcon || icons.defaultExpandIcon;
      } else {
        icon = collapseIcon || icons.defaultCollapseIcon;
      }

      if (!icon) {
        icon = icons.defaultParentIcon;
      }
    } else {
      icon = endIcon || icons.defaultEndIcon;
    }
  }

  var handleClick = function handleClick(event) {
    if (!focused) {
      focus(nodeId);
    }

    var multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey); // If already expanded and trying to toggle selection don't close

    if (expandable && !event.defaultPrevented && !(multiple && isExpanded(nodeId))) {
      toggleExpansion(event, nodeId);
    }

    if (multiple) {
      if (event.shiftKey) {
        selectRange(event, {
          end: nodeId
        });
      } else {
        selectNode(event, nodeId, true);
      }
    } else {
      selectNode(event, nodeId);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleMouseDown = function handleMouseDown(event) {
    if (event.shiftKey || event.ctrlKey || event.metaKey) {
      event.preventDefault();
    }

    if (onMouseDown) {
      onMouseDown(event);
    }
  };

  var handleNextArrow = function handleNextArrow(event) {
    if (expandable) {
      if (expanded) {
        focusNextNode(nodeId);
      } else {
        toggleExpansion(event);
      }
    }

    return true;
  };

  var handlePreviousArrow = function handlePreviousArrow(event) {
    if (expanded) {
      toggleExpansion(event, nodeId);
      return true;
    }

    var parent = getParent(nodeId);

    if (parent) {
      focus(parent);
      return true;
    }

    return false;
  };

  var handleKeyDown = function handleKeyDown(event) {
    var flag = false;
    var key = event.key;

    if (event.altKey || event.currentTarget !== event.target) {
      return;
    }

    var ctrlPressed = event.ctrlKey || event.metaKey;

    switch (key) {
      case ' ':
        if (nodeRef.current === event.currentTarget) {
          if (multiSelect && event.shiftKey) {
            flag = selectRange(event, {
              end: nodeId
            });
          } else if (multiSelect) {
            flag = selectNode(event, nodeId, true);
          } else {
            flag = selectNode(event, nodeId);
          }
        }

        event.stopPropagation();
        break;

      case 'Enter':
        if (nodeRef.current === event.currentTarget && expandable) {
          toggleExpansion(event);
          flag = true;
        }

        event.stopPropagation();
        break;

      case 'ArrowDown':
        if (multiSelect && event.shiftKey) {
          selectNextNode(event, nodeId);
        }

        focusNextNode(nodeId);
        flag = true;
        break;

      case 'ArrowUp':
        if (multiSelect && event.shiftKey) {
          selectPreviousNode(event, nodeId);
        }

        focusPreviousNode(nodeId);
        flag = true;
        break;

      case 'ArrowRight':
        if (theme.direction === 'rtl') {
          flag = handlePreviousArrow(event);
        } else {
          flag = handleNextArrow(event);
        }

        break;

      case 'ArrowLeft':
        if (theme.direction === 'rtl') {
          flag = handleNextArrow(event);
        } else {
          flag = handlePreviousArrow(event);
        }

        break;

      case 'Home':
        if (multiSelect && ctrlPressed && event.shiftKey) {
          rangeSelectToFirst(event, nodeId);
        }

        focusFirstNode();
        flag = true;
        break;

      case 'End':
        if (multiSelect && ctrlPressed && event.shiftKey) {
          rangeSelectToLast(event, nodeId);
        }

        focusLastNode();
        flag = true;
        break;

      default:
        if (key === '*') {
          expandAllSiblings(event, nodeId);
          flag = true;
        } else if (multiSelect && ctrlPressed && key.toLowerCase() === 'a') {
          flag = selectAllNodes(event);
        } else if (!ctrlPressed && !event.shiftKey && isPrintableCharacter(key)) {
          focusByFirstCharacter(nodeId, key);
          flag = true;
        }

    }

    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (!focused && event.currentTarget === event.target) {
      focus(nodeId);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  react.useEffect(function () {
    if (addNodeToNodeMap) {
      var childIds = [];
      react.Children.forEach(children, function (child) {
        if ( /*#__PURE__*/react.isValidElement(child) && child.props.nodeId) {
          childIds.push(child.props.nodeId);
        }
      });
      addNodeToNodeMap(nodeId, childIds);
    }
  }, [children, nodeId, addNodeToNodeMap]);
  react.useEffect(function () {
    if (removeNodeFromNodeMap) {
      return function () {
        removeNodeFromNodeMap(nodeId);
      };
    }

    return undefined;
  }, [nodeId, removeNodeFromNodeMap]);
  react.useEffect(function () {
    if (mapFirstChar && label) {
      mapFirstChar(nodeId, contentRef.current.textContent.substring(0, 1).toLowerCase());
    }
  }, [mapFirstChar, nodeId, label]);
  react.useEffect(function () {
    if (focused) {
      nodeRef.current.focus();
    }
  }, [focused]);
  var ariaSelected;

  if (multiSelect) {
    ariaSelected = selected;
  } else if (selected) {
    // single-selection trees unset aria-selected
    ariaSelected = true;
  }

  return /*#__PURE__*/react.createElement("li", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, expanded && classes.expanded, selected && classes.selected),
    role: "treeitem",
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
    "aria-expanded": expandable ? expanded : null,
    "aria-selected": ariaSelected,
    ref: handleRef,
    tabIndex: tabbable ? 0 : -1
  }, other), /*#__PURE__*/react.createElement("div", {
    className: classes.content,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    ref: contentRef
  }, /*#__PURE__*/react.createElement("div", {
    onClick: onIconClick,
    className: classes.iconContainer
  }, icon), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    onClick: onLabelClick,
    component: "div",
    className: classes.label
  }, label)), children && /*#__PURE__*/react.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    unmountOnExit: true,
    className: classes.group,
    in: expanded,
    component: "ul",
    role: "group"
  }, TransitionProps), children));
});
 false ? 0 : void 0;
/* harmony default export */ var TreeItem_TreeItem = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiTreeItem'
})(TreeItem));
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__(50048);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./src/components/ui/StyledTreeView.tsx

var _excluded = ["labelText", "kind", "icon", "labelInfo", "color", "bgColor", "actions", "nodeId", "alert"];
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name



var useTreeItemStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  root: {
    color: theme.palette.text.secondary,
    "&:hover > $content": {
      backgroundColor: theme.palette.action.hover
    },
    "&:focus > $content, &$selected > $content": {
      backgroundColor: "var(--tree-view-bg-color, " + theme.palette.grey + ")",
      color: "var(--tree-view-color)"
    },
    "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
      backgroundColor: "transparent"
    }
  },
  content: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(1)
    }
  },
  expanded: {},
  selected: {
    fontWeight: theme.typography.fontWeightBold
  },
  label: {
    fontWeight: "inherit",
    color: "inherit"
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0)
  },
  labelIcon: {
    marginRight: theme.spacing(0.5)
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
    marginRight: theme.spacing(0.5)
  }
}));
function StyledTreeItem(props) {
  var classes = useTreeItemStyles();

  var {
    labelText,
    kind,
    icon,
    labelInfo,
    color,
    bgColor,
    actions,
    nodeId,
    alert
  } = props,
      other = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var domId = (0,react_use_id_hook_esm/* useId */.Me)();
  return /*#__PURE__*/react.createElement(TreeItem_TreeItem, Object.assign({
    id: domId,
    tabIndex: 0,
    nodeId: nodeId,
    label: /*#__PURE__*/react.createElement("div", {
      className: classes.labelRoot
    }, kind && /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
      kind: kind,
      className: classes.labelIcon
    }), icon, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "body2",
      className: classes.labelText
    }, labelText), alert && "!", /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "caption",
      color: "inherit"
    }, alert && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "caption",
      component: "span"
    }, alert), labelInfo, actions)),
    style: {
      "--tree-view-color": color,
      "--tree-view-bg-color": bgColor
    },
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      selected: classes.selected,
      group: classes.group,
      label: classes.label
    }
  }, other));
}
// EXTERNAL MODULE: ./src/components/hooks/useMediaQueries.tsx
var useMediaQueries = __webpack_require__(20509);
// EXTERNAL MODULE: ./src/components/services/useInstanceName.ts
var useInstanceName = __webpack_require__(20563);
// EXTERNAL MODULE: ./src/components/hooks/useBestRegister.ts
var useBestRegister = __webpack_require__(39687);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
;// CONCATENATED MODULE: ./src/components/tools/JDomTreeViewItems.tsx

var JDomTreeViewItems_excluded = ["device", "serviceFilter"],
    _excluded2 = ["service", "registerFilter", "eventFilter"];
 // tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name







 // tslint:disable-next-line: no-submodule-imports match-default-export-name



 // tslint:disable-next-line: no-submodule-imports match-default-export-name





function DeviceTreeItem(props) {
  var {
    device,
    serviceFilter
  } = props,
      other = (0,objectWithoutProperties/* default */.Z)(props, JDomTreeViewItems_excluded);

  var {
    id,
    physical
  } = (0,react.useMemo)(() => device, [device]);
  var name = (0,useDeviceName/* default */.Z)(device, true);
  var kind = physical ? "device" : "virtualdevice";
  var lost = (0,useEventRaised/* default */.Z)([constants/* LOST */.XWw, constants/* FOUND */.a6y], device, dev => !!(dev !== null && dev !== void 0 && dev.lost));
  var services = (0,useChange/* default */.Z)(device, () => device.services({
    mixins: false
  }).filter(srv => !serviceFilter || serviceFilter(srv)));
  var {
    mobile
  } = (0,useMediaQueries/* default */.Z)();
  var showActions = !mobile;
  var dropped = (0,useChange/* default */.Z)(device.packetStats, _ => _.dropped);
  var serviceNames = (0,utils/* ellipseJoin */.VA)(services.filter(service => service.serviceClass !== constants/* SRV_CONTROL */.gm9 && service.serviceClass !== constants/* SRV_LOGGER */.w9j && service.serviceClass !== constants/* SRV_ROLE_MANAGER */.igi && service.serviceClass !== constants/* SRV_SETTINGS */.B9b).map(service => service.name), 18);
  var alert = lost ? "lost device..." : dropped > 2 ? dropped + " pkt lost" : undefined;
  var labelInfo = [dropped > 1 && dropped + " lost", serviceNames].filter(r => !!r).join(", ");
  return /*#__PURE__*/react.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: name,
    labelInfo: labelInfo,
    alert: alert,
    kind: kind,
    actions: showActions && /*#__PURE__*/react.createElement(DeviceActions/* default */.Z, {
      device: device,
      showReset: true
    })
  }, /*#__PURE__*/react.createElement(AnnounceFlagsTreeItem, {
    device: device
  }), services === null || services === void 0 ? void 0 : services.map(service => /*#__PURE__*/react.createElement(ServiceTreeItem, Object.assign({
    key: service.id,
    service: service
  }, other))));
}
function AnnounceFlagsTreeItem(props) {
  var {
    device
  } = props;
  var {
    announceFlags,
    id,
    deviceId
  } = device;
  var text = [deviceId, announceFlags & constants/* ControlAnnounceFlags.IsClient */.P99.IsClient && "client", announceFlags & constants/* ControlAnnounceFlags.SupportsACK */.P99.SupportsACK && "acks", announceFlags & constants/* ControlAnnounceFlags.SupportsBroadcast */.P99.SupportsBroadcast && "broadcast", announceFlags & constants/* ControlAnnounceFlags.SupportsFrames */.P99.SupportsFrames && "frames", (announceFlags & constants/* ControlAnnounceFlags.StatusLightRgbFade */.P99.StatusLightRgbFade) === constants/* ControlAnnounceFlags.StatusLightMono */.P99.StatusLightMono && "mono status LED", (announceFlags & constants/* ControlAnnounceFlags.StatusLightRgbFade */.P99.StatusLightRgbFade) === constants/* ControlAnnounceFlags.StatusLightRgbNoFade */.P99.StatusLightRgbNoFade && "rgb no fade status LED", (announceFlags & constants/* ControlAnnounceFlags.StatusLightRgbFade */.P99.StatusLightRgbFade) === constants/* ControlAnnounceFlags.StatusLightRgbFade */.P99.StatusLightRgbFade && "rgb fade status LED"].filter(f => !!f).join(", ");
  return /*#__PURE__*/react.createElement(StyledTreeItem, {
    nodeId: id + ":flags",
    labelText: text,
    labelInfo: "0x" + announceFlags.toString(16)
  });
}
function ServiceMembersTreeItems(props) {
  var {
    service,
    registerFilter,
    eventFilter
  } = props,
      other = (0,objectWithoutProperties/* default */.Z)(props, _excluded2);

  var {
    specification,
    mixins
  } = (0,react.useMemo)(() => service, [service]);
  var packets = specification === null || specification === void 0 ? void 0 : specification.packets;
  var registers = packets === null || packets === void 0 ? void 0 : packets.filter(pkt => !pkt.client && (0,spec/* isRegister */.x5)(pkt)).map(info => service.register(info.identifier)).filter(reg => !registerFilter || registerFilter(reg)).sort((l, r) => l.name.localeCompare(r.name));
  var events = packets === null || packets === void 0 ? void 0 : packets.filter(pkt => !pkt.client && (0,spec/* isEvent */.cO)(pkt)).map(info => service.event(info.identifier)).filter(ev => !eventFilter || eventFilter(ev));
  return /*#__PURE__*/react.createElement(react.Fragment, null, registers === null || registers === void 0 ? void 0 : registers.map(register => /*#__PURE__*/react.createElement(RegisterTreeItem, Object.assign({
    key: register.id,
    register: register
  }, other))), events === null || events === void 0 ? void 0 : events.map(event => /*#__PURE__*/react.createElement(EventTreeItem, Object.assign({
    key: event.id,
    event: event
  }, other))), mixins === null || mixins === void 0 ? void 0 : mixins.map(mixin => /*#__PURE__*/react.createElement(ServiceTreeItem, Object.assign({
    key: mixin.id,
    service: mixin
  }, other))));
}
function ServiceTreeItem(props) {
  var {
    service
  } = props;
  var {
    isMixin,
    name,
    id
  } = (0,react.useMemo)(() => service, [service]);
  var instanceName = (0,useInstanceName/* default */.Z)(service);
  var readingRegister = (0,useBestRegister/* default */.Z)(service);
  var reading = (0,useRegisterValue/* useRegisterHumanValue */.e_)(readingRegister);
  var labelText = name + (instanceName ? " " + instanceName : "");
  return /*#__PURE__*/react.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: labelText,
    labelInfo: reading,
    kind: isMixin ? constants/* SERVICE_MIXIN_NODE_NAME */.mLn : constants/* SERVICE_NODE_NAME */.M_U
  }, /*#__PURE__*/react.createElement(ServiceMembersTreeItems, Object.assign({
    service: service
  }, props)));
}
function RegisterTreeItem(props) {
  var {
    register
  } = props;
  var {
    specification,
    id,
    lastGetAttempts
  } = (0,react.useMemo)(() => register, [register]);
  var {
    0: attempts,
    1: setAttempts
  } = (0,react.useState)(lastGetAttempts);
  var optional = !!(specification !== null && specification !== void 0 && specification.optional);
  var failedGet = attempts > 2;
  var labelText = (0,jdspec/* humanify */.lW)("" + ((specification === null || specification === void 0 ? void 0 : specification.name) || id) + (optional ? "?" : ""));
  var humanValue = (0,useRegisterValue/* useRegisterHumanValue */.e_)(register, {
    visible: true
  });
  var handleClick = (0,react.useCallback)(() => register.sendGetAsync(), [register]);
  (0,react.useEffect)(() => register === null || register === void 0 ? void 0 : register.subscribe(constants/* GET_ATTEMPT */.tDM, () => {
    setAttempts(register.lastGetAttempts);
  }), [register]); // if register is optional and no data, hide

  if (optional && failedGet && humanValue === undefined) return /*#__PURE__*/react.createElement(react.Fragment, null);
  return /*#__PURE__*/react.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: labelText,
    labelInfo: humanValue || attempts > 0 && "#" + attempts || "",
    kind: (specification === null || specification === void 0 ? void 0 : specification.kind) || constants/* REGISTER_NODE_NAME */.nJc,
    alert: failedGet && !optional && humanValue === undefined && "???",
    onClick: handleClick
  });
}
function EventTreeItem(props) {
  var {
    event
  } = props;
  var {
    specification,
    id
  } = event;
  var count = (0,useEventCount/* default */.Z)(event);
  var labelText = (0,jdspec/* humanify */.lW)((specification === null || specification === void 0 ? void 0 : specification.name) || event.id);
  return /*#__PURE__*/react.createElement(StyledTreeItem, {
    nodeId: id,
    labelText: labelText,
    labelInfo: (count || "") + "",
    kind: constants/* EVENT_NODE_NAME */.Yuh
  });
}

/***/ }),

/***/ 23461:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SliderWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47895);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14685);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50514);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);

var _excluded = ["label"];



var useStyle = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(theme => ({
  arrow: {
    color: theme.palette.primary.main
  },
  tooltip: {
    backgroundColor: theme.palette.primary.main
  }
}));

function ValueLabelComponent(props) {
  var {
    children,
    open,
    value
  } = props;
  var classes = useStyle();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP, {
    classes: classes,
    open: open,
    arrow: true,
    color: "primary",
    enterTouchDelay: 0,
    placement: "top",
    title: value
  }, children);
}

function SliderWithLabel(props) {
  var {
    label
  } = props,
      others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(props, _excluded);

  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var sliderId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    id: labelId,
    variant: "caption",
    gutterBottom: true
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({
    id: sliderId,
    "aria-labelledby": labelId,
    "aria-label": label,
    ValueLabelComponent: ValueLabelComponent
  }, others)));
}

/***/ }),

/***/ 51761:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CanvasWidget; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var esm_objectWithoutProperties = __webpack_require__(41568);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(66475);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat = __webpack_require__(84944);
// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__(93456);
;// CONCATENATED MODULE: ./node_modules/zustand/esm/index.js


function create$1(createState) {
  var state;
  var listeners = new Set();

  var setState = (partial, replace) => {
    var nextState = typeof partial === "function" ? partial(state) : partial;

    if (nextState !== state) {
      var previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach(listener => listener(state, previousState));
    }
  };

  var getState = () => state;

  var subscribeWithSelector = function subscribeWithSelector(listener) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getState;
    var equalityFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
    var currentSlice = selector(state);

    function listenerToAdd() {
      var nextSlice = selector(state);

      if (!equalityFn(currentSlice, nextSlice)) {
        var previousSlice = currentSlice;
        listener(currentSlice = nextSlice, previousSlice);
      }
    }

    listeners.add(listenerToAdd);
    return () => listeners.delete(listenerToAdd);
  };

  var subscribe = (listener, selector, equalityFn) => {
    if (selector || equalityFn) {
      return subscribeWithSelector(listener, selector, equalityFn);
    }

    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  var destroy = () => listeners.clear();

  var api = {
    setState,
    getState,
    subscribe,
    destroy
  };
  state = createState(setState, getState, api);
  return api;
}

var isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
var useIsomorphicLayoutEffect = isSSR ? react.useEffect : react.useLayoutEffect;

function create(createState) {
  var api = typeof createState === "function" ? create$1(createState) : createState;

  var useStore = function useStore() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : api.getState;
    var equalityFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object.is;
    var [, forceUpdate] = (0,react.useReducer)(c => c + 1, 0);
    var state = api.getState();
    var stateRef = (0,react.useRef)(state);
    var selectorRef = (0,react.useRef)(selector);
    var equalityFnRef = (0,react.useRef)(equalityFn);
    var erroredRef = (0,react.useRef)(false);
    var currentSliceRef = (0,react.useRef)();

    if (currentSliceRef.current === void 0) {
      currentSliceRef.current = selector(state);
    }

    var newStateSlice;
    var hasNewStateSlice = false;

    if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
      newStateSlice = selector(state);
      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
    }

    useIsomorphicLayoutEffect(() => {
      if (hasNewStateSlice) {
        currentSliceRef.current = newStateSlice;
      }

      stateRef.current = state;
      selectorRef.current = selector;
      equalityFnRef.current = equalityFn;
      erroredRef.current = false;
    });
    var stateBeforeSubscriptionRef = (0,react.useRef)(state);
    useIsomorphicLayoutEffect(() => {
      var listener = () => {
        try {
          var nextState = api.getState();
          var nextStateSlice = selectorRef.current(nextState);

          if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
            stateRef.current = nextState;
            currentSliceRef.current = nextStateSlice;
            forceUpdate();
          }
        } catch (error) {
          erroredRef.current = true;
          forceUpdate();
        }
      };

      var unsubscribe = api.subscribe(listener);

      if (api.getState() !== stateBeforeSubscriptionRef.current) {
        listener();
      }

      return unsubscribe;
    }, []);
    return hasNewStateSlice ? newStateSlice : currentSliceRef.current;
  };

  Object.assign(useStore, api);

  useStore[Symbol.iterator] = function () {
    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
    var items = [useStore, api];
    return {
      next() {
        var done = items.length <= 0;
        return {
          value: items.shift(),
          done
        };
      }

    };
  };

  return useStore;
}

/* harmony default export */ var esm = (create);
;// CONCATENATED MODULE: ./node_modules/zustand/esm/shallow.js
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);

  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/* harmony default export */ var esm_shallow = (shallow);
// EXTERNAL MODULE: ./node_modules/react-reconciler/index.js
var react_reconciler = __webpack_require__(29305);
var react_reconciler_default = /*#__PURE__*/__webpack_require__.n(react_reconciler);
// EXTERNAL MODULE: ./node_modules/scheduler/index.js
var scheduler = __webpack_require__(63840);
// EXTERNAL MODULE: ./node_modules/fast-deep-equal/index.js
var fast_deep_equal = __webpack_require__(2412);
var fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal);
;// CONCATENATED MODULE: ./node_modules/use-asset/dist/index.js

var globalCache = [];

function handleAsset(fn, cache, args) {
  var lifespan = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var preload = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  for (var _entry of cache) {
    // Find a match
    if (fast_deep_equal_default()(args, _entry.args)) {
      // If we're pre-loading and the element is present, just return
      if (preload) return; // If an error occurred, throw

      if (_entry.error) throw _entry.error; // If a response was successful, return

      if (_entry.response) return _entry.response; // If the promise is still unresolved, throw

      throw _entry.promise;
    }
  } // The request is new or has changed.


  var entry = {
    args,
    promise: // Make the promise request.
    fn(...args) // Response can't be undefined or else the loop above wouldn't be able to return it
    // This is for promises that do not return results (delays for instance)
    .then(response => entry.response = response != null ? response : true).catch(e => entry.error = e != null ? e : 'unknown error').then(() => {
      if (lifespan > 0) {
        setTimeout(() => {
          var index = cache.indexOf(entry);
          if (index !== -1) cache.splice(index, 1);
        }, lifespan);
      }
    })
  };
  cache.push(entry);
  if (!preload) throw entry.promise;
}

function _clear(cache) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args === undefined || args.length === 0) cache.splice(0, cache.length);else {
    var entry = cache.find(entry => fast_deep_equal_default()(args, entry.args));

    if (entry) {
      var index = cache.indexOf(entry);
      if (index !== -1) cache.splice(index, 1);
    }
  }
}

function createAsset(fn) {
  var lifespan = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var cache = [];
  return {
    /**
     * @throws Suspense Promise if asset is not yet ready
     * @throws Error if the promise rejected for some reason
     */
    read: function read() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return handleAsset(fn, cache, args, lifespan);
    },
    preload: function preload() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return void handleAsset(fn, cache, args, lifespan, true);
    },
    clear: function clear() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _clear(cache, ...args);
    },
    peek: function peek() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var _cache$find;

      return (_cache$find = cache.find(entry => deepEqual(args, entry.args))) == null ? void 0 : _cache$find.response;
    }
  };
}

function useAsset(fn) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    args[_key6 - 1] = arguments[_key6];
  }

  return handleAsset(fn, globalCache, args, useAsset.lifespan);
}

useAsset.lifespan = 0;

useAsset.clear = function () {
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  return _clear(globalCache, ...args);
};

useAsset.preload = function (fn) {
  for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
    args[_key8 - 1] = arguments[_key8];
  }

  return void handleAsset(fn, globalCache, args, useAsset.lifespan, true);
};

useAsset.peek = function () {
  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var _globalCache$find;

  return (_globalCache$find = globalCache.find(entry => fast_deep_equal_default()(args, entry.args))) == null ? void 0 : _globalCache$find.response;
};


;// CONCATENATED MODULE: ./node_modules/react-merge-refs/dist/react-merge-refs.esm.js
function mergeRefs(refs) {
  return function (value) {
    refs.forEach(function (ref) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

/* harmony default export */ var react_merge_refs_esm = (mergeRefs);
// EXTERNAL MODULE: ./node_modules/debounce/index.js
var debounce = __webpack_require__(62881);
;// CONCATENATED MODULE: ./node_modules/react-use-measure/dist/web.js



function useMeasure() {
  var {
    debounce: debounce$1,
    scroll,
    polyfill
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    debounce: 0,
    scroll: false
  };
  var ResizeObserver = polyfill || (typeof window === 'undefined' ? class ResizeObserver {} : window.ResizeObserver);

  if (!ResizeObserver) {
    throw new Error('This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills');
  }

  var [bounds, set] = (0,react.useState)({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0
  }); // keep all state in a ref

  var state = (0,react.useRef)({
    element: null,
    scrollContainers: null,
    resizeObserver: null,
    lastBounds: bounds
  }); // set actual debounce values early, so effects know if they should react accordingly

  var scrollDebounce = debounce$1 ? typeof debounce$1 === 'number' ? debounce$1 : debounce$1.scroll : null;
  var resizeDebounce = debounce$1 ? typeof debounce$1 === 'number' ? debounce$1 : debounce$1.resize : null; // make sure to update state only as long as the component is truly mounted

  var mounted = (0,react.useRef)(false);
  (0,react.useEffect)(() => {
    mounted.current = true;
    return () => void (mounted.current = false);
  }); // memoize handlers, so event-listeners know when they should update

  var [forceRefresh, resizeChange, scrollChange] = (0,react.useMemo)(() => {
    var callback = () => {
      if (!state.current.element) return;
      var {
        left,
        top,
        width,
        height,
        bottom,
        right,
        x,
        y
      } = state.current.element.getBoundingClientRect();
      var size = {
        left,
        top,
        width,
        height,
        bottom,
        right,
        x,
        y
      };
      Object.freeze(size);
      if (mounted.current && !areBoundsEqual(state.current.lastBounds, size)) set(state.current.lastBounds = size);
    };

    return [callback, resizeDebounce ? (0,debounce.debounce)(callback, resizeDebounce) : callback, scrollDebounce ? (0,debounce.debounce)(callback, scrollDebounce) : callback];
  }, [set, scrollDebounce, resizeDebounce]); // cleanup current scroll-listeners / observers

  function removeListeners() {
    if (state.current.scrollContainers) {
      state.current.scrollContainers.forEach(element => element.removeEventListener('scroll', scrollChange, true));
      state.current.scrollContainers = null;
    }

    if (state.current.resizeObserver) {
      state.current.resizeObserver.disconnect();
      state.current.resizeObserver = null;
    }
  } // add scroll-listeners / observers


  function addListeners() {
    if (!state.current.element) return;
    state.current.resizeObserver = new ResizeObserver(scrollChange);
    state.current.resizeObserver.observe(state.current.element);

    if (scroll && state.current.scrollContainers) {
      state.current.scrollContainers.forEach(scrollContainer => scrollContainer.addEventListener('scroll', scrollChange, {
        capture: true,
        passive: true
      }));
    }
  } // the ref we expose to the user


  var ref = node => {
    if (!node || node === state.current.element) return;
    removeListeners();
    state.current.element = node;
    state.current.scrollContainers = findScrollContainers(node);
    addListeners();
  }; // add general event listeners


  useOnWindowScroll(scrollChange, Boolean(scroll));
  useOnWindowResize(resizeChange); // respond to changes that are relevant for the listeners

  (0,react.useEffect)(() => {
    removeListeners();
    addListeners();
  }, [scroll, scrollChange, resizeChange]); // remove all listeners when the components unmounts

  (0,react.useEffect)(() => removeListeners, []);
  return [ref, bounds, forceRefresh];
} // Adds native resize listener to window


function useOnWindowResize(onWindowResize) {
  (0,react.useEffect)(() => {
    var cb = onWindowResize;
    window.addEventListener('resize', cb);
    return () => void window.removeEventListener('resize', cb);
  }, [onWindowResize]);
}

function useOnWindowScroll(onScroll, enabled) {
  (0,react.useEffect)(() => {
    if (enabled) {
      var cb = onScroll;
      window.addEventListener('scroll', cb, {
        capture: true,
        passive: true
      });
      return () => void window.removeEventListener('scroll', cb, true);
    }
  }, [onScroll, enabled]);
} // Returns a list of scroll offsets


function findScrollContainers(element) {
  var result = [];
  if (!element || element === document.body) return result;
  var {
    overflow,
    overflowX,
    overflowY
  } = window.getComputedStyle(element);
  if ([overflow, overflowX, overflowY].some(prop => prop === 'auto' || prop === 'scroll')) result.push(element);
  return [...result, ...findScrollContainers(element.parentElement)];
} // Checks if element boundaries are equal


var keys = ['x', 'y', 'top', 'bottom', 'left', 'right', 'width', 'height'];

var areBoundsEqual = (a, b) => keys.every(key => a[key] === b[key]);

/* harmony default export */ var web = (useMeasure);
;// CONCATENATED MODULE: ./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js


var _excluded = ["args"],
    _excluded2 = ["args"],
    _excluded3 = ["args"],
    _excluded4 = ["params"],
    _excluded5 = ["children", "fallback", "tabIndex", "resize", "id", "style", "className", "events"],
    _excluded6 = ["gl", "size", "mode", "events", "onCreated"];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var threeTypes = /*#__PURE__*/Object.freeze({
  __proto__: null
});
var is = {
  obj: a => a === Object(a) && !is.arr(a) && typeof a !== 'function',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  arr: a => Array.isArray(a),

  equ(a, b) {
    // Wrong type or one of the two undefined, doesn't match
    if (typeof a !== typeof b || !!a !== !!b) return false; // Atomic, just compare a against b

    if (is.str(a) || is.num(a) || is.obj(a)) return a === b; // Array, shallow compare first to see if it's a match

    if (is.arr(a) && a == b) return true; // Last resort, go through keys

    var i;

    for (i in a) {
      if (!(i in b)) return false;
    }

    for (i in b) {
      if (a[i] !== b[i]) return false;
    }

    return is.und(i) ? a === b : true;
  }

};

function makeId(event) {
  return (event.eventObject || event.object).uuid + '/' + event.index;
}

function removeInteractivity(store, object) {
  var {
    internal
  } = store.getState(); // Removes every trace of an object from the data store

  internal.interaction = internal.interaction.filter(o => o !== object);
  internal.initialHits = internal.initialHits.filter(o => o !== object);
  internal.hovered.forEach((value, key) => {
    if (value.eventObject === object || value.object === object) {
      internal.hovered.delete(key);
    }
  });
}

function createEvents(store) {
  var temp = new three_module.Vector3();
  /** Sets up defaultRaycaster */

  function prepareRay(event) {
    var _raycaster$computeOff;

    var state = store.getState();
    var {
      raycaster,
      mouse,
      camera,
      size
    } = state; // https://github.com/pmndrs/react-three-fiber/pull/782
    // Events trigger outside of canvas when moved

    var {
      offsetX,
      offsetY
    } = (_raycaster$computeOff = raycaster.computeOffsets == null ? void 0 : raycaster.computeOffsets(event, state)) != null ? _raycaster$computeOff : event;
    var {
      width,
      height
    } = size;
    mouse.set(offsetX / width * 2 - 1, -(offsetY / height) * 2 + 1);
    raycaster.setFromCamera(mouse, camera);
  }
  /** Calculates delta */


  function calculateDistance(event) {
    var {
      internal
    } = store.getState();
    var dx = event.offsetX - internal.initialClick[0];
    var dy = event.offsetY - internal.initialClick[1];
    return Math.round(Math.sqrt(dx * dx + dy * dy));
  }
  /** Returns true if an instance has a valid pointer-event registered, this excludes scroll, clicks etc */


  function filterPointerEvents(objects) {
    return objects.filter(obj => ['Move', 'Over', 'Enter', 'Out', 'Leave'].some(name => {
      var _r3f$handlers;

      return (_r3f$handlers = obj.__r3f.handlers) == null ? void 0 : _r3f$handlers['onPointer' + name];
    }));
  }

  function intersect(filter) {
    var state = store.getState();
    var {
      raycaster,
      internal
    } = state; // Skip event handling when noEvents is set

    if (!raycaster.enabled) return [];
    var seen = new Set();
    var intersections = []; // Allow callers to eliminate event objects

    var eventsObjects = filter ? filter(internal.interaction) : internal.interaction; // Intersect known handler objects and filter against duplicates

    var intersects = raycaster.intersectObjects(eventsObjects, true).filter(item => {
      var id = makeId(item);
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    }); // https://github.com/mrdoob/three.js/issues/16031
    // Allow custom userland intersect sort order

    if (raycaster.filter) intersects = raycaster.filter(intersects, state);

    for (var _intersect of intersects) {
      var eventObject = _intersect.object; // Bubble event up

      while (eventObject) {
        var _r3f;

        var handlers = (_r3f = eventObject.__r3f) == null ? void 0 : _r3f.handlers;
        if (handlers) intersections.push(_objectSpread(_objectSpread({}, _intersect), {}, {
          eventObject
        }));
        eventObject = eventObject.parent;
      }
    }

    return intersections;
  }
  /**  Creates filtered intersects and returns an array of positive hits */


  function patchIntersects(intersections, event) {
    var {
      internal
    } = store.getState(); // If the interaction is captured, make all capturing targets  part of the
    // intersect.

    if ('pointerId' in event && internal.capturedMap.has(event.pointerId)) {
      intersections.push(...internal.capturedMap.get(event.pointerId).values());
    }

    return intersections;
  }
  /**  Handles intersections by forwarding them to handlers */


  function handleIntersects(intersections, event, callback) {
    var {
      raycaster,
      mouse,
      camera,
      internal
    } = store.getState(); // If anything has been found, forward it to the event listeners

    if (intersections.length) {
      (function () {
        var unprojectedPoint = temp.set(mouse.x, mouse.y, 0).unproject(camera);
        var delta = event.type === 'click' ? calculateDistance(event) : 0;

        var releasePointerCapture = id => event.target.releasePointerCapture(id);

        var localState = {
          stopped: false
        };

        var _loop = function _loop(hit) {
          var hasPointerCapture = id => {
            var _internal$capturedMap, _internal$capturedMap2;

            return (_internal$capturedMap = (_internal$capturedMap2 = internal.capturedMap.get(id)) == null ? void 0 : _internal$capturedMap2.has(hit.eventObject)) != null ? _internal$capturedMap : false;
          };

          var setPointerCapture = id => {
            if (internal.capturedMap.has(id)) {
              // if the pointerId was previously captured, we add the hit to the
              // event capturedMap.
              internal.capturedMap.get(id).set(hit.eventObject, hit);
            } else {
              // if the pointerId was not previously captured, we create a map
              // containing the hitObject, and the hit. hitObject is used for
              // faster access.
              internal.capturedMap.set(id, new Map([[hit.eventObject, hit]]));
            } // Call the original event now


            event.target.setPointerCapture(id);
          }; // Add native event props


          var extractEventProps = {};

          for (var prop in Object.getPrototypeOf(event)) {
            var property = event[prop]; // Only copy over atomics, leave functions alone as these should be
            // called as event.nativeEvent.fn()

            if (typeof property !== 'function') extractEventProps[prop] = property;
          }

          var raycastEvent = _objectSpread(_objectSpread(_objectSpread({}, hit), extractEventProps), {}, {
            spaceX: mouse.x,
            spaceY: mouse.y,
            intersections,
            stopped: localState.stopped,
            delta,
            unprojectedPoint,
            ray: raycaster.ray,
            camera: camera,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation: () => {
              // https://github.com/pmndrs/react-three-fiber/issues/596
              // Events are not allowed to stop propagation if the pointer has been captured
              var capturesForPointer = 'pointerId' in event && internal.capturedMap.get(event.pointerId); // We only authorize stopPropagation...

              if ( // ...if this pointer hasn't been captured
              !capturesForPointer || // ... or if the hit object is capturing the pointer
              capturesForPointer.has(hit.eventObject)) {
                raycastEvent.stopped = localState.stopped = true; // Propagation is stopped, remove all other hover records
                // An event handler is only allowed to flush other handlers if it is hovered itself

                if (internal.hovered.size && Array.from(internal.hovered.values()).find(i => i.eventObject === hit.eventObject)) {
                  // Objects cannot flush out higher up objects that have already caught the event
                  var higher = intersections.slice(0, intersections.indexOf(hit));
                  cancelPointer([...higher, hit]);
                }
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture,
              setPointerCapture,
              releasePointerCapture
            },
            currentTarget: {
              hasPointerCapture,
              setPointerCapture,
              releasePointerCapture
            },
            sourceEvent: event,
            // deprecated
            nativeEvent: event
          }); // Call subscribers


          callback(raycastEvent); // Event bubbling may be interrupted by stopPropagation

          if (localState.stopped === true) return "break";
        };

        for (var hit of intersections) {
          var _ret = _loop(hit);

          if (_ret === "break") break;
        }
      })();
    }

    return intersections;
  }

  function cancelPointer(hits) {
    var {
      internal
    } = store.getState();
    Array.from(internal.hovered.values()).forEach(hoveredObj => {
      // When no objects were hit or the the hovered object wasn't found underneath the cursor
      // we call onPointerOut and delete the object from the hovered-elements map
      if (!hits.length || !hits.find(hit => hit.object === hoveredObj.object && hit.index === hoveredObj.index)) {
        var eventObject = hoveredObj.eventObject;
        var handlers = eventObject.__r3f.handlers;
        internal.hovered.delete(makeId(hoveredObj));

        if (handlers) {
          // Clear out intersects, they are outdated by now
          var data = _objectSpread(_objectSpread({}, hoveredObj), {}, {
            intersections: hits || []
          });

          handlers.onPointerOut == null ? void 0 : handlers.onPointerOut(data);
          handlers.onPointerLeave == null ? void 0 : handlers.onPointerLeave(data);
        }
      }
    });
  }

  var handlePointer = name => {
    // Deal with cancelation
    switch (name) {
      case 'onPointerLeave':
      case 'onPointerCancel':
        return () => cancelPointer([]);

      case 'onLostPointerCapture':
        return event => {
          if ('pointerId' in event) {
            // this will be a problem if one target releases the pointerId
            // and another one is still keeping it, as the line below
            // indifferently deletes all capturing references.
            store.getState().internal.capturedMap.delete(event.pointerId);
          }

          cancelPointer([]);
        };
    } // Any other pointer goes here ...


    return event => {
      var {
        onPointerMissed,
        internal
      } = store.getState();
      prepareRay(event); // Get fresh intersects

      var isPointerMove = name === 'onPointerMove';
      var filter = isPointerMove ? filterPointerEvents : undefined;
      var hits = patchIntersects(intersect(filter), event); // Take care of unhover

      if (isPointerMove) cancelPointer(hits);
      handleIntersects(hits, event, data => {
        var eventObject = data.eventObject;
        var handlers = eventObject.__r3f.handlers; // Check presence of handlers

        if (!handlers) return;

        if (isPointerMove) {
          // Move event ...
          if (handlers.onPointerOver || handlers.onPointerEnter || handlers.onPointerOut || handlers.onPointerLeave) {
            // When enter or out is present take care of hover-state
            var id = makeId(data);
            var hoveredItem = internal.hovered.get(id);

            if (!hoveredItem) {
              // If the object wasn't previously hovered, book it and call its handler
              internal.hovered.set(id, data);
              handlers.onPointerOver == null ? void 0 : handlers.onPointerOver(data);
              handlers.onPointerEnter == null ? void 0 : handlers.onPointerEnter(data);
            } else if (hoveredItem.stopped) {
              // If the object was previously hovered and stopped, we shouldn't allow other items to proceed
              data.stopPropagation();
            }
          } // Call mouse move


          handlers.onPointerMove == null ? void 0 : handlers.onPointerMove(data);
        } else {
          // All other events ...
          var handler = handlers == null ? void 0 : handlers[name];

          if (handler) {
            // Forward all events back to their respective handlers with the exception of click events,
            // which must use the initial target
            if (name !== 'onClick' && name !== 'onContextMenu' && name !== 'onDoubleClick' || internal.initialHits.includes(eventObject)) {
              handler(data);
              pointerMissed(event, internal.interaction.filter(object => object !== eventObject));
            }
          }
        }
      }); // Save initial coordinates on pointer-down

      if (name === 'onPointerDown') {
        internal.initialClick = [event.offsetX, event.offsetY];
        internal.initialHits = hits.map(hit => hit.eventObject);
      } // If a click yields no results, pass it back to the user as a miss


      if ((name === 'onClick' || name === 'onContextMenu' || name === 'onDoubleClick') && !hits.length) {
        if (calculateDistance(event) <= 2) {
          pointerMissed(event, internal.interaction);
          if (onPointerMissed) onPointerMissed(event);
        }
      }
    };
  };

  function pointerMissed(event, objects) {
    objects.forEach(object => {
      var _r3f$handlers2;

      return (_r3f$handlers2 = object.__r3f.handlers) == null ? void 0 : _r3f$handlers2.onPointerMissed == null ? void 0 : _r3f$handlers2.onPointerMissed(event);
    });
  }

  return {
    handlePointer
  };
} // Type guard to tell a store from a portal


var isStore = def => def && !!def.getState;

var getContainer = (container, child) => {
  var _container$__r3f$root, _container$__r3f;

  return {
    // If the container is not a root-store then it must be a THREE.Object3D into which part of the
    // scene is portalled into. Now there can be two variants of this, either that object is part of
    // the regular jsx tree, in which case it already has __r3f with a valid root attached, or it lies
    // outside react, in which case we must take the root of the child that is about to be attached to it.
    root: isStore(container) ? container : (_container$__r3f$root = (_container$__r3f = container.__r3f) == null ? void 0 : _container$__r3f.root) != null ? _container$__r3f$root : child.__r3f.root,
    // The container is the eventual target into which objects are mounted, it has to be a THREE.Object3D
    container: isStore(container) ? container.getState().scene : container
  };
};

var DEFAULT = '__default';
var EMPTY = {};
var FILTER = ['children', 'key', 'ref'];
var catalogue = {};

var extend = objects => void (catalogue = _objectSpread(_objectSpread({}, catalogue), objects)); // Each object in the scene carries a small LocalState descriptor


function prepare(object, state) {
  var instance = object;

  if (state != null && state.instance || !instance.__r3f) {
    instance.__r3f = _objectSpread({
      root: null,
      memoizedProps: {},
      objects: []
    }, state);
  }

  return object;
}

function createRenderer(roots) {
  function applyProps(instance, newProps) {
    var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var accumulative = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var _instance$__r3f, _root$getState, _instance$__r3f2; // Filter equals, events and reserved props


    var localState = (_instance$__r3f = instance == null ? void 0 : instance.__r3f) != null ? _instance$__r3f : {};
    var root = localState.root;
    var rootState = (_root$getState = root == null ? void 0 : root.getState == null ? void 0 : root.getState()) != null ? _root$getState : {};
    var sameProps = [];
    var handlers = [];
    var newMemoizedProps = {};
    var i = 0;
    Object.entries(newProps).forEach(_ref2 => {
      var [key, entry] = _ref2;

      // we don't want children, ref or key in the memoized props
      if (FILTER.indexOf(key) === -1) {
        newMemoizedProps[key] = entry;
      }
    });

    if (localState.memoizedProps && localState.memoizedProps.args) {
      newMemoizedProps.args = localState.memoizedProps.args;
    }

    if (localState.memoizedProps && localState.memoizedProps.attach) {
      newMemoizedProps.attach = localState.memoizedProps.attach;
    }

    if (instance.__r3f) {
      instance.__r3f.memoizedProps = newMemoizedProps;
    }

    var objectKeys = Object.keys(newProps);

    for (i = 0; i < objectKeys.length; i++) {
      if (is.equ(newProps[objectKeys[i]], oldProps[objectKeys[i]])) {
        sameProps.push(objectKeys[i]);
      } // Event-handlers ...
      //   are functions, that
      //   start with "on", and
      //   contain the name "Pointer", "Click", "DoubleClick", "ContextMenu", or "Wheel"


      if (is.fun(newProps[objectKeys[i]]) && /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(objectKeys[i])) {
        handlers.push(objectKeys[i]);
      }
    } // Catch props that existed, but now exist no more ...


    var leftOvers = [];

    if (accumulative) {
      objectKeys = Object.keys(oldProps);

      for (i = 0; i < objectKeys.length; i++) {
        if (!newProps.hasOwnProperty(objectKeys[i])) {
          leftOvers.push(objectKeys[i]);
        }
      }
    }

    var toFilter = [...sameProps, ...FILTER]; // Instances use "object" as a reserved identifier

    if ((_instance$__r3f2 = instance.__r3f) != null && _instance$__r3f2.instance) toFilter.push('object');

    var filteredProps = _objectSpread({}, newProps); // Removes sameProps and reserved props from newProps


    objectKeys = Object.keys(filteredProps);

    for (i = 0; i < objectKeys.length; i++) {
      if (toFilter.indexOf(objectKeys[i]) > -1) {
        delete filteredProps[objectKeys[i]];
      }
    } // Collect all new props


    var filteredPropsEntries = Object.entries(filteredProps); // Prepend left-overs so they can be reset or removed
    // Left-overs must come first!

    for (i = 0; i < leftOvers.length; i++) {
      if (leftOvers[i] !== 'children') {
        filteredPropsEntries.unshift([leftOvers[i], DEFAULT + 'remove']);
      }
    }

    if (filteredPropsEntries.length > 0) {
      filteredPropsEntries.forEach(_ref3 => {
        var [key, value] = _ref3;

        if (!handlers.includes(key)) {
          var currentInstance = instance;
          var targetProp = currentInstance[key];

          if (key.includes('-')) {
            var entries = key.split('-');
            targetProp = entries.reduce((acc, key) => acc[key], instance); // If the target is atomic, it forces us to switch the root

            if (!(targetProp && targetProp.set)) {
              var [name, ...reverseEntries] = entries.reverse();
              currentInstance = reverseEntries.reverse().reduce((acc, key) => acc[key], instance);
              key = name;
            }
          } // https://github.com/mrdoob/three.js/issues/21209
          // HMR/fast-refresh relies on the ability to cancel out props, but threejs
          // has no means to do this. Hence we curate a small collection of value-classes
          // with their respective constructor/set arguments
          // For removed props, try to set default values, if possible


          if (value === DEFAULT + 'remove') {
            if (targetProp && targetProp.constructor) {
              // use the prop constructor to find the default it should be
              value = new targetProp.constructor(newMemoizedProps.args);
            } else if (currentInstance.constructor) {
              // create a blank slate of the instance and copy the particular parameter.
              // @ts-ignore
              var defaultClassCall = new currentInstance.constructor(currentInstance.__r3f.memoizedProps.args);
              value = defaultClassCall[targetProp]; // destory the instance

              if (defaultClassCall.dispose) {
                defaultClassCall.dispose();
              }
            } else {
              // instance does not have constructor, just set it to 0
              value = 0;
            }
          } // Special treatment for objects with support for set/copy, and layers


          if (targetProp && targetProp.set && (targetProp.copy || targetProp instanceof three_module.Layers)) {
            // If value is an array
            if (Array.isArray(value)) {
              if (targetProp.fromArray) {
                targetProp.fromArray(value);
              } else {
                targetProp.set(...value);
              }
            } // Test again target.copy(class) next ...
            else if (targetProp.copy && value && value.constructor && targetProp.constructor.name === value.constructor.name) {
              targetProp.copy(value);
            } // If nothing else fits, just set the single value, ignore undefined
            // https://github.com/react-spring/react-three-fiber/issues/274
            else if (value !== undefined) {
              var isColor = targetProp instanceof three_module.Color; // Allow setting array scalars

              if (!isColor && targetProp.setScalar) targetProp.setScalar(value); // Layers have no copy function, we must therefore copy the mask property
              else if (targetProp instanceof three_module.Layers && value instanceof three_module.Layers) targetProp.mask = value.mask; // Otherwise just set ...
              else targetProp.set(value); // Auto-convert sRGB colors, for now ...
              // https://github.com/react-spring/react-three-fiber/issues/344

              if (!rootState.linear && isColor) targetProp.convertSRGBToLinear();
            } // Else, just overwrite the value

          } else {
            currentInstance[key] = value; // Auto-convert sRGB textures, for now ...
            // https://github.com/react-spring/react-three-fiber/issues/344

            if (!rootState.linear && currentInstance[key] instanceof three_module.Texture) currentInstance[key].encoding = three_module.sRGBEncoding;
          }

          invalidateInstance(instance);
        }
      }); // Preemptively delete the instance from the containers interaction

      if (accumulative && root && instance.raycast && localState.handlers) {
        localState.handlers = undefined;
        var index = rootState.internal.interaction.indexOf(instance);
        if (index > -1) rootState.internal.interaction.splice(index, 1);
      } // Prep interaction handlers


      if (handlers.length) {
        if (accumulative && root && instance.raycast) {
          rootState.internal.interaction.push(instance);
        } // Add handlers to the instances handler-map


        localState.handlers = handlers.reduce((acc, key) => _objectSpread(_objectSpread({}, acc), {}, {
          [key]: newProps[key]
        }), {});
      } // Call the update lifecycle when it is being updated, but only when it is part of the scene


      if (instance.parent) updateInstance(instance);
    }
  }

  function invalidateInstance(instance) {
    var _instance$__r3f3, _instance$__r3f3$root;

    var state = (_instance$__r3f3 = instance.__r3f) == null ? void 0 : (_instance$__r3f3$root = _instance$__r3f3.root) == null ? void 0 : _instance$__r3f3$root.getState == null ? void 0 : _instance$__r3f3$root.getState();
    if (state && state.internal.frames === 0) state.invalidate();
  }

  function updateInstance(instance) {
    instance.onUpdate == null ? void 0 : instance.onUpdate(instance);
  }

  function createInstance(type, _ref4, root, hostContext, internalInstanceHandle) {
    var {
      args = []
    } = _ref4,
        props = (0,esm_objectWithoutProperties/* default */.Z)(_ref4, _excluded);

    var name = "".concat(type[0].toUpperCase()).concat(type.slice(1));
    var instance; // https://github.com/facebook/react/issues/17147
    // Portals do not give us a root, they are themselves treated as a root by the reconciler
    // In order to figure out the actual root we have to climb through fiber internals :(

    if (!isStore(root) && internalInstanceHandle) {
      var fn = node => {
        if (!node.return) return node.stateNode && node.stateNode.containerInfo;else return fn(node.return);
      };

      root = fn(internalInstanceHandle);
    } // Assert that by now we have a valid root


    if (!root || !isStore(root)) throw "No valid root for ".concat(name, "!");

    if (type === 'primitive') {
      if (props.object === undefined) throw "Primitives without 'object' are invalid!";
      var object = props.object;
      instance = prepare(object, {
        root,
        instance: true
      });
    } else {
      var target = catalogue[name] || three_module[name];
      if (!target) throw "".concat(name, " is not part of the THREE namespace! Did you forget to extend? See: https://github.com/pmndrs/react-three-fiber/blob/master/markdown/api.md#using-3rd-party-objects-declaratively");
      var isArgsArr = is.arr(args); // Instanciate new object, link it to the root

      instance = prepare(isArgsArr ? new target(...args) : new target(args), {
        root,
        // append memoized props with args so it's not forgotten
        memoizedProps: {
          args: isArgsArr && args.length === 0 ? null : args
        }
      });
    } // Auto-attach geometries and materials


    if (!('attachFns' in props)) {
      if (name.endsWith('Geometry')) {
        props = _objectSpread({
          attach: 'geometry'
        }, props);
      } else if (name.endsWith('Material')) {
        props = _objectSpread({
          attach: 'material'
        }, props);
      }
    } // It should NOT call onUpdate on object instanciation, because it hasn't been added to the
    // view yet. If the callback relies on references for instance, they won't be ready yet, this is
    // why it passes "true" here


    applyProps(instance, props, {});
    return instance;
  }

  function appendChild(parentInstance, child) {
    var addedAsChild = false;

    if (child) {
      // The attach attribute implies that the object attaches itself on the parent
      if (child.attachArray) {
        if (!is.arr(parentInstance[child.attachArray])) parentInstance[child.attachArray] = [];
        parentInstance[child.attachArray].push(child);
      } else if (child.attachObject) {
        if (!is.obj(parentInstance[child.attachObject[0]])) parentInstance[child.attachObject[0]] = {};
        parentInstance[child.attachObject[0]][child.attachObject[1]] = child;
      } else if (child.attach && !is.fun(child.attach)) {
        parentInstance[child.attach] = child;
      } else if (is.arr(child.attachFns)) {
        var [attachFn] = child.attachFns;

        if (is.str(attachFn) && is.fun(parentInstance[attachFn])) {
          parentInstance[attachFn](child);
        } else if (is.fun(attachFn)) {
          attachFn(child, parentInstance);
        }
      } else if (child.isObject3D) {
        // add in the usual parent-child way
        parentInstance.add(child);
        addedAsChild = true;
      }

      if (!addedAsChild) {
        // This is for anything that used attach, and for non-Object3Ds that don't get attached to props;
        // that is, anything that's a child in React but not a child in the scenegraph.
        parentInstance.__r3f.objects.push(child);

        child.parent = parentInstance;
      }

      updateInstance(child);
      invalidateInstance(child);
    }
  }

  function insertBefore(parentInstance, child, beforeChild) {
    var added = false;

    if (child) {
      if (child.attachArray) {
        var array = parentInstance[child.attachArray];
        if (!is.arr(array)) parentInstance[child.attachArray] = [];
        array.splice(array.indexOf(beforeChild), 0, child);
      } else if (child.attachObject || child.attach && !is.fun(child.attach)) {
        // attach and attachObject don't have an order anyway, so just append
        return appendChild(parentInstance, child);
      } else if (child.isObject3D) {
        child.parent = parentInstance;
        child.dispatchEvent({
          type: 'added'
        });
        var restSiblings = parentInstance.children.filter(sibling => sibling !== child);
        var index = restSiblings.indexOf(beforeChild);
        parentInstance.children = [...restSiblings.slice(0, index), child, ...restSiblings.slice(index)];
        added = true;
      }

      if (!added) {
        parentInstance.__r3f.objects.push(child);

        child.parent = parentInstance;
      }

      updateInstance(child);
      invalidateInstance(child);
    }
  }

  function removeRecursive(array, parent) {
    var dispose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (array) [...array].forEach(child => removeChild(parent, child, dispose));
  }

  function removeChild(parentInstance, child, dispose) {
    if (child) {
      var _child$__r3f2;

      if (parentInstance.__r3f.objects) {
        var oldLength = parentInstance.__r3f.objects.length;
        parentInstance.__r3f.objects = parentInstance.__r3f.objects.filter(x => x !== child);
        var newLength = parentInstance.__r3f.objects.length; // was it in the list?

        if (newLength < oldLength) {
          // we had also set this, so we must clear it now
          child.parent = null;
        }
      } // Remove attachment


      if (child.attachArray) {
        parentInstance[child.attachArray] = parentInstance[child.attachArray].filter(x => x !== child);
      } else if (child.attachObject) {
        delete parentInstance[child.attachObject[0]][child.attachObject[1]];
      } else if (child.attach && !is.fun(child.attach)) {
        parentInstance[child.attach] = null;
      } else if (is.arr(child.attachFns)) {
        var [, detachFn] = child.attachFns;

        if (is.str(detachFn) && is.fun(parentInstance[detachFn])) {
          parentInstance[detachFn](child);
        } else if (is.fun(detachFn)) {
          detachFn(child, parentInstance);
        }
      } else if (child.isObject3D) {
        var _child$__r3f;

        parentInstance.remove(child); // Remove interactivity

        if ((_child$__r3f = child.__r3f) != null && _child$__r3f.root) {
          removeInteractivity(child.__r3f.root, child);
        }
      } // Allow objects to bail out of recursive dispose alltogether by passing dispose={null}
      // Never dispose of primitives because their state may be kept outside of React!
      // In order for an object to be able to dispose it has to have
      //   - a dispose method,
      //   - it cannot be an <instance object={...} />
      //   - it cannot be a THREE.Scene, because three has broken it's own api
      //
      // Since disposal is recursive, we can check the optional dispose arg, which will be undefined
      // when the reconciler calls it, but then carry our own check recursively


      var isInstance = (_child$__r3f2 = child.__r3f) == null ? void 0 : _child$__r3f2.instance;
      var shouldDispose = dispose === undefined ? child.dispose !== null && !isInstance : dispose; // Remove nested child objects. Primitives should not have objects and children that are
      // attached to them declaratively ...

      if (!isInstance) {
        var _child$__r3f3;

        removeRecursive((_child$__r3f3 = child.__r3f) == null ? void 0 : _child$__r3f3.objects, child, shouldDispose);
        removeRecursive(child.children, child, shouldDispose);
      } // Remove references


      if (child.__r3f) {
        delete child.__r3f.root;
        delete child.__r3f.objects;
        delete child.__r3f.handlers;
        delete child.__r3f.memoizedProps;
        if (!isInstance) delete child.__r3f;
      } // Dispose item whenever the reconciler feels like it


      if (shouldDispose && child.dispose && child.type !== 'Scene') {
        (0,scheduler.unstable_runWithPriority)(scheduler.unstable_IdlePriority, () => child.dispose());
      }

      invalidateInstance(parentInstance);
    }
  }

  function switchInstance(instance, type, newProps, fiber) {
    var parent = instance.parent;
    if (!parent) return;
    var newInstance = createInstance(type, newProps, instance.__r3f.root); // https://github.com/pmndrs/react-three-fiber/issues/1348
    // When args change the instance has to be re-constructed, which then
    // forces r3f to re-parent the children and non-scene objects

    if (instance.children) {
      instance.children.forEach(child => appendChild(newInstance, child));
      instance.children = [];
    }

    instance.__r3f.objects.forEach(child => appendChild(newInstance, child));

    instance.__r3f.objects = [];
    removeChild(parent, instance);
    appendChild(parent, newInstance) // This evil hack switches the react-internal fiber node
    // https://github.com/facebook/react/issues/14983
    // https://github.com/facebook/react/pull/15021
    ;
    [fiber, fiber.alternate].forEach(fiber => {
      if (fiber !== null) {
        fiber.stateNode = newInstance;

        if (fiber.ref) {
          if (typeof fiber.ref === 'function') fiber.ref(newInstance);else fiber.ref.current = newInstance;
        }
      }
    });
  }

  var reconciler = react_reconciler_default()({
    now: scheduler.unstable_now,
    createInstance,
    removeChild,
    appendChild,
    appendInitialChild: appendChild,
    insertBefore,
    warnsIfNotActing: true,
    supportsMutation: true,
    isPrimaryRenderer: false,
    // @ts-ignore
    scheduleTimeout: is.fun(setTimeout) ? setTimeout : undefined,
    // @ts-ignore
    cancelTimeout: is.fun(clearTimeout) ? clearTimeout : undefined,
    // @ts-ignore
    setTimeout: is.fun(setTimeout) ? setTimeout : undefined,
    // @ts-ignore
    clearTimeout: is.fun(clearTimeout) ? clearTimeout : undefined,
    noTimeout: -1,
    appendChildToContainer: (parentInstance, child) => {
      var {
        container,
        root
      } = getContainer(parentInstance, child); // Link current root to the default scene

      container.__r3f.root = root;
      appendChild(container, child);
    },
    removeChildFromContainer: (parentInstance, child) => {
      var {
        container
      } = getContainer(parentInstance, child);
      removeChild(container, child);
    },
    insertInContainerBefore: (parentInstance, child, beforeChild) => {
      var {
        container
      } = getContainer(parentInstance, child);
      insertBefore(container, child, beforeChild);
    },

    commitUpdate(instance, updatePayload, type, oldProps, newProps, fiber) {
      if (instance.__r3f.instance && newProps.object && newProps.object !== instance) {
        // <instance object={...} /> where the object reference has changed
        switchInstance(instance, type, newProps, fiber);
      } else {
        // This is a data object, let's extract critical information about it
        var {
          args: argsNew = []
        } = newProps,
            restNew = (0,esm_objectWithoutProperties/* default */.Z)(newProps, _excluded2);

        var {
          args: argsOld = []
        } = oldProps,
            restOld = (0,esm_objectWithoutProperties/* default */.Z)(oldProps, _excluded3); // If it has new props or arguments, then it needs to be re-instanciated


        var hasNewArgs = argsNew.some((value, index) => is.obj(value) ? Object.entries(value).some(_ref5 => {
          var [key, val] = _ref5;
          return val !== argsOld[index][key];
        }) : value !== argsOld[index]);

        if (hasNewArgs) {
          // Next we create a new instance and append it again
          switchInstance(instance, type, newProps, fiber);
        } else {
          // Otherwise just overwrite props
          applyProps(instance, restNew, restOld, true);
        }
      }
    },

    hideInstance(instance) {
      if (instance.isObject3D) {
        instance.visible = false;
        invalidateInstance(instance);
      }
    },

    unhideInstance(instance, props) {
      if (instance.isObject3D && props.visible == null || props.visible) {
        instance.visible = true;
        invalidateInstance(instance);
      }
    },

    hideTextInstance() {
      throw new Error('Text is not allowed in the R3F tree.');
    },

    getPublicInstance(instance) {
      // TODO: might fix switchInstance (?)
      return instance;
    },

    getRootHostContext(rootContainer) {
      return EMPTY;
    },

    getChildHostContext(parentHostContext) {
      return EMPTY;
    },

    createTextInstance() {},

    finalizeInitialChildren(instance) {
      // https://github.com/facebook/react/issues/20271
      // Returning true will trigger commitMount
      return !!instance.__r3f.handlers;
    },

    commitMount(instance)
    /*, type, props*/
    {
      // https://github.com/facebook/react/issues/20271
      // This will make sure events are only added once to the central container
      if (instance.raycast && instance.__r3f.handlers) instance.__r3f.root.getState().internal.interaction.push(instance);
    },

    prepareUpdate() {
      return EMPTY;
    },

    shouldDeprioritizeSubtree() {
      return false;
    },

    prepareForCommit() {
      return null;
    },

    preparePortalMount() {// noop
    },

    resetAfterCommit() {// noop
    },

    shouldSetTextContent() {
      return false;
    },

    clearContainer() {
      return false;
    }

  });
  return {
    reconciler,
    applyProps
  };
}

var isRenderer = def => def && !!def.render;

var isOrthographicCamera = def => def && def.isOrthographicCamera;

var context = /*#__PURE__*/react.createContext(null);

var createStore = (applyProps, _invalidate, _advance, props) => {
  var {
    gl,
    size,
    shadows = false,
    linear = false,
    flat = false,
    vr = false,
    orthographic = false,
    frameloop = 'always',
    dpr = 1,
    performance,
    clock = new three_module.Clock(),
    raycaster: raycastOptions,
    camera: cameraOptions,
    onPointerMissed
  } = props; // Set shadowmap

  if (shadows) {
    gl.shadowMap.enabled = true;
    if (typeof shadows === 'object') Object.assign(gl.shadowMap, shadows);else gl.shadowMap.type = three_module.PCFSoftShadowMap;
  } // Set color management


  if (!linear) {
    if (!flat) gl.toneMapping = three_module.ACESFilmicToneMapping;
    gl.outputEncoding = three_module.sRGBEncoding;
  } // clock.elapsedTime is updated using advance(timestamp)


  if (frameloop === 'never') {
    clock.stop();
    clock.elapsedTime = 0;
  }

  var rootState = esm((set, get) => {
    // Create custom raycaster
    var raycaster = new three_module.Raycaster();

    var _ref6 = raycastOptions || {},
        {
      params
    } = _ref6,
        options = (0,esm_objectWithoutProperties/* default */.Z)(_ref6, _excluded4);

    applyProps(raycaster, _objectSpread(_objectSpread({
      enabled: true
    }, options), {}, {
      params: _objectSpread(_objectSpread({}, raycaster.params), params)
    }), {}); // Create default camera

    var isCamera = cameraOptions instanceof three_module.Camera;
    var camera = isCamera ? cameraOptions : orthographic ? new three_module.OrthographicCamera(0, 0, 0, 0, 0.1, 1000) : new three_module.PerspectiveCamera(75, 0, 0.1, 1000);

    if (!isCamera) {
      camera.position.z = 5;
      if (cameraOptions) applyProps(camera, cameraOptions, {}); // Always look at center by default

      camera.lookAt(0, 0, 0);
    }

    function _setDpr(dpr) {
      return Array.isArray(dpr) ? Math.min(Math.max(dpr[0], window.devicePixelRatio), dpr[1]) : dpr;
    }

    var initialDpr = _setDpr(dpr);

    var position = new three_module.Vector3();
    var defaultTarget = new three_module.Vector3();

    function getCurrentViewport() {
      var camera = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : get().camera;
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTarget;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : get().size;
      var {
        width,
        height
      } = size;
      var aspect = width / height;
      var distance = camera.getWorldPosition(position).distanceTo(target);

      if (isOrthographicCamera(camera)) {
        return {
          width: width / camera.zoom,
          height: height / camera.zoom,
          factor: 1,
          distance,
          aspect
        };
      } else {
        var fov = camera.fov * Math.PI / 180; // convert vertical fov to radians

        var h = 2 * Math.tan(fov / 2) * distance; // visible height

        var w = h * (width / height);
        return {
          width: w,
          height: h,
          factor: width / w,
          distance,
          aspect
        };
      }
    }

    var performanceTimeout = undefined;

    var setPerformanceCurrent = current => set(state => ({
      performance: _objectSpread(_objectSpread({}, state.performance), {}, {
        current
      })
    }));

    return {
      gl,
      set,
      get,
      invalidate: () => _invalidate(get()),
      advance: (timestamp, runGlobalEffects) => _advance(timestamp, runGlobalEffects, get()),
      linear,
      flat,
      scene: prepare(new three_module.Scene()),
      camera,
      controls: null,
      raycaster,
      clock,
      mouse: new three_module.Vector2(),
      vr,
      frameloop,
      onPointerMissed,
      performance: _objectSpread(_objectSpread({
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200
      }, performance), {}, {
        regress: () => {
          var state = get(); // Clear timeout

          if (performanceTimeout) clearTimeout(performanceTimeout); // Set lower bound performance

          if (state.performance.current !== state.performance.min) setPerformanceCurrent(state.performance.min); // Go back to upper bound performance after a while unless something regresses meanwhile

          performanceTimeout = setTimeout(() => setPerformanceCurrent(get().performance.max), state.performance.debounce);
        }
      }),
      size: {
        width: 0,
        height: 0
      },
      viewport: {
        initialDpr,
        dpr: initialDpr,
        width: 0,
        height: 0,
        aspect: 0,
        distance: 0,
        factor: 0,
        getCurrentViewport
      },
      setSize: (width, height) => {
        var size = {
          width,
          height
        };
        set(state => ({
          size,
          viewport: _objectSpread(_objectSpread({}, state.viewport), getCurrentViewport(camera, defaultTarget, size))
        }));
      },
      setDpr: dpr => set(state => ({
        viewport: _objectSpread(_objectSpread({}, state.viewport), {}, {
          dpr: _setDpr(dpr)
        })
      })),
      events: {
        connected: false
      },
      internal: {
        active: false,
        priority: 0,
        frames: 0,
        lastProps: props,
        interaction: [],
        hovered: new Map(),
        subscribers: [],
        initialClick: [0, 0],
        initialHits: [],
        capturedMap: new Map(),
        subscribe: function subscribe(ref) {
          var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          set(_ref7 => {
            var {
              internal
            } = _ref7;
            return {
              internal: _objectSpread(_objectSpread({}, internal), {}, {
                // If this subscription was given a priority, it takes rendering into its own hands
                // For that reason we switch off automatic rendering and increase the manual flag
                // As long as this flag is positive (there could be multiple render subscription)
                // ..there can be no internal rendering at all
                priority: internal.priority + (priority > 0 ? 1 : 0),
                // Register subscriber and sort layers from lowest to highest, meaning,
                // highest priority renders last (on top of the other frames)
                subscribers: [...internal.subscribers, {
                  ref,
                  priority
                }].sort((a, b) => a.priority - b.priority)
              })
            };
          });
          return () => {
            set(_ref8 => {
              var {
                internal
              } = _ref8;
              return {
                internal: _objectSpread(_objectSpread({}, internal), {}, {
                  // Decrease manual flag if this subscription had a priority
                  priority: internal.priority - (priority > 0 ? 1 : 0),
                  // Remove subscriber from list
                  subscribers: internal.subscribers.filter(s => s.ref !== ref)
                })
              };
            });
          };
        }
      }
    };
  }); // Resize camera and renderer on changes to size and pixelratio

  rootState.subscribe(() => {
    var {
      camera,
      size,
      viewport,
      internal
    } = rootState.getState(); // https://github.com/pmndrs/react-three-fiber/issues/92
    // Do not mess with the camera if it belongs to the user

    if (!(internal.lastProps.camera instanceof three_module.Camera)) {
      if (isOrthographicCamera(camera)) {
        camera.left = size.width / -2;
        camera.right = size.width / 2;
        camera.top = size.height / 2;
        camera.bottom = size.height / -2;
      } else {
        camera.aspect = size.width / size.height;
      }

      camera.updateProjectionMatrix(); // https://github.com/pmndrs/react-three-fiber/issues/178
      // Update matrix world since the renderer is a frame late

      camera.updateMatrixWorld();
    } // Update renderer


    gl.setPixelRatio(viewport.dpr);
    gl.setSize(size.width, size.height);
  }, state => [state.viewport.dpr, state.size], esm_shallow);
  var state = rootState.getState(); // Update size

  if (size) state.setSize(size.width, size.height); // Invalidate on any change

  rootState.subscribe(state => _invalidate(state)); // Return root state

  return rootState;
};

function createSubs(callback, subs) {
  var index = subs.length;
  subs.push(callback);
  return () => void subs.splice(index, 1);
}

var i;
var globalEffects = [];
var globalAfterEffects = [];
var globalTailEffects = [];

var addEffect = callback => createSubs(callback, globalEffects);

var addAfterEffect = callback => createSubs(callback, globalAfterEffects);

var addTail = callback => createSubs(callback, globalTailEffects);

function run(effects, timestamp) {
  for (i = 0; i < effects.length; i++) {
    effects[i](timestamp);
  }
}

function render$1(timestamp, state) {
  // Run local effects
  var delta = state.clock.getDelta(); // In frameloop='never' mode, clock times are updated using the provided timestamp

  if (state.frameloop === 'never' && typeof timestamp === 'number') {
    delta = timestamp - state.clock.elapsedTime;
    state.clock.oldTime = state.clock.elapsedTime;
    state.clock.elapsedTime = timestamp;
  } // Call subscribers (useFrame)


  for (i = 0; i < state.internal.subscribers.length; i++) {
    state.internal.subscribers[i].ref.current(state, delta);
  } // Render content


  if (!state.internal.priority && state.gl.render) state.gl.render(state.scene, state.camera); // Decrease frame count

  state.internal.frames = Math.max(0, state.internal.frames - 1);
  return state.frameloop === 'always' ? 1 : state.internal.frames;
}

function createLoop(roots) {
  var running = false;
  var repeat;

  function loop(timestamp) {
    running = true;
    repeat = 0; // Run effects

    run(globalEffects, timestamp); // Render all roots

    roots.forEach(root => {
      var state = root.store.getState(); // If the frameloop is invalidated, do not run another frame

      if (state.internal.active && (state.frameloop === 'always' || state.internal.frames > 0)) repeat += render$1(timestamp, state);
    }); // Run after-effects

    run(globalAfterEffects, timestamp); // Keep on looping if anything invalidates the frameloop

    if (repeat > 0) return requestAnimationFrame(loop); // Tail call effects, they are called when rendering stops
    else run(globalTailEffects, timestamp); // Flag end of operation

    running = false;
  }

  function invalidate(state) {
    if (!state) return roots.forEach(root => invalidate(root.store.getState()));
    if (state.vr || !state.internal.active || state.frameloop === 'never') return; // Increase frames, do not go higher than 60

    state.internal.frames = Math.min(60, state.internal.frames + 1); // If the render-loop isn't active, start it

    if (!running) {
      running = true;
      requestAnimationFrame(loop);
    }
  }

  function advance(timestamp) {
    var runGlobalEffects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var state = arguments.length > 2 ? arguments[2] : undefined;
    if (runGlobalEffects) run(globalEffects, timestamp);
    if (!state) roots.forEach(root => render$1(timestamp, root.store.getState()));else render$1(timestamp, state);
    if (runGlobalEffects) run(globalAfterEffects, timestamp);
  }

  return {
    loop,
    invalidate,
    advance
  };
}

function createPointerEvents(store) {
  var {
    handlePointer
  } = createEvents(store);
  var names = {
    onClick: ['click', false],
    onContextMenu: ['contextmenu', false],
    onDoubleClick: ['dblclick', false],
    onWheel: ['wheel', true],
    onPointerDown: ['pointerdown', true],
    onPointerUp: ['pointerup', true],
    onPointerLeave: ['pointerleave', true],
    onPointerMove: ['pointermove', true],
    onPointerCancel: ['pointercancel', true],
    onLostPointerCapture: ['lostpointercapture', true]
  };
  return {
    connected: false,
    handlers: Object.keys(names).reduce((acc, key) => _objectSpread(_objectSpread({}, acc), {}, {
      [key]: handlePointer(key)
    }), {}),
    connect: target => {
      var _events$handlers;

      var {
        set,
        events
      } = store.getState();
      events.disconnect == null ? void 0 : events.disconnect();
      set(state => ({
        events: _objectSpread(_objectSpread({}, state.events), {}, {
          connected: target
        })
      }));
      Object.entries((_events$handlers = events == null ? void 0 : events.handlers) != null ? _events$handlers : []).forEach(_ref9 => {
        var [name, event] = _ref9;
        var [eventName, passive] = names[name];
        target.addEventListener(eventName, event, {
          passive
        });
      });
    },
    disconnect: () => {
      var {
        set,
        events
      } = store.getState();

      if (events.connected) {
        var _events$handlers2;

        Object.entries((_events$handlers2 = events.handlers) != null ? _events$handlers2 : []).forEach(_ref10 => {
          var [name, event] = _ref10;

          if (events && events.connected instanceof HTMLElement) {
            var [eventName] = names[name];
            events.connected.removeEventListener(eventName, event);
          }
        });
        set(state => ({
          events: _objectSpread(_objectSpread({}, state.events), {}, {
            connected: false
          })
        }));
      }
    }
  };
} // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.


var react_three_fiber_esm_useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;

function Block(_ref11) {
  var {
    set
  } = _ref11;
  react_three_fiber_esm_useIsomorphicLayoutEffect(() => {
    set(new Promise(() => null));
    return () => set(false);
  }, []);
  return null;
}

class ErrorBoundary extends react.Component {
  constructor() {
    super(...arguments);
    this.state = {
      error: false
    };
  }

  componentDidCatch(error) {
    this.props.set(error);
  }

  render() {
    return this.state.error ? null : this.props.children;
  }

}

ErrorBoundary.getDerivedStateFromError = () => ({
  error: true
});

var Canvas = /*#__PURE__*/react.forwardRef(function Canvas(_ref12, forwardedRef) {
  var {
    children,
    fallback,
    tabIndex,
    resize,
    id,
    style,
    className,
    events
  } = _ref12,
      props = (0,esm_objectWithoutProperties/* default */.Z)(_ref12, _excluded5);

  var [containerRef, size] = web(_objectSpread({
    scroll: true,
    debounce: {
      scroll: 50,
      resize: 0
    }
  }, resize));
  var canvasRef = react.useRef(null);
  var [block, setBlock] = react.useState(false);
  var [error, setError] = react.useState(false); // Suspend this component if block is a promise (2nd run)

  if (block) throw block; // Throw exception outwards if anything within canvas throws

  if (error) throw error; // Execute JSX in the reconciler as a layout-effect

  react_three_fiber_esm_useIsomorphicLayoutEffect(() => {
    if (size.width > 0 && size.height > 0) {
      render( /*#__PURE__*/react.createElement(ErrorBoundary, {
        set: setError
      }, /*#__PURE__*/react.createElement(react.Suspense, {
        fallback: /*#__PURE__*/react.createElement(Block, {
          set: setBlock
        })
      }, children)), canvasRef.current, _objectSpread(_objectSpread({}, props), {}, {
        size,
        events: events || createPointerEvents
      }));
    }
  }, [size, children]);
  react_three_fiber_esm_useIsomorphicLayoutEffect(() => {
    var container = canvasRef.current;
    return () => unmountComponentAtNode(container);
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    ref: containerRef,
    id: id,
    className: className,
    tabIndex: tabIndex,
    style: _objectSpread({
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }, style)
  }, /*#__PURE__*/react.createElement("canvas", {
    ref: react_merge_refs_esm([canvasRef, forwardedRef]),
    style: {
      display: 'block'
    }
  }, fallback));
});

function useThree() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state => state;
  var equalityFn = arguments.length > 1 ? arguments[1] : undefined;
  var useStore = react.useContext(context);
  if (!useStore) throw "R3F hooks can only be used within the Canvas component!";
  return useStore(selector, equalityFn);
}

function useFrame(callback) {
  var renderPriority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var {
    subscribe
  } = react.useContext(context).getState().internal; // Update ref

  var ref = react.useRef(callback);
  react.useLayoutEffect(() => void (ref.current = callback), [callback]); // Subscribe/unsub

  react.useLayoutEffect(() => {
    var unsubscribe = subscribe(ref, renderPriority);
    return () => unsubscribe();
  }, [renderPriority, subscribe]);
  return null;
}

function buildGraph(object) {
  var data = {
    nodes: {},
    materials: {}
  };

  if (object) {
    object.traverse(obj => {
      if (obj.name) {
        data.nodes[obj.name] = obj;
      }

      if (obj.material && !data.materials[obj.material.name]) {
        data.materials[obj.material.name] = obj.material;
      }
    });
  }

  return data;
}

function useGraph(object) {
  return React.useMemo(() => buildGraph(object), [object]);
}

function loadingFn(extensions, onProgress) {
  return function (Proto) {
    // Construct new loader and run extensions
    var loader = new Proto();
    if (extensions) extensions(loader); // Go through the urls and load them

    for (var _len = arguments.length, input = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      input[_key - 1] = arguments[_key];
    }

    return Promise.all(input.map(input => new Promise((res, reject) => loader.load(input, data => {
      if (data.scene) Object.assign(data, buildGraph(data.scene));
      res(data);
    }, onProgress, error => reject("Could not load ".concat(input, ": ").concat(error.message))))));
  };
}

function useLoader(Proto, input, extensions, onProgress) {
  // Use suspense to load async assets
  var keys = Array.isArray(input) ? input : [input];
  var results = useAsset(loadingFn(extensions, onProgress), Proto, ...keys); // Return the object/s

  return Array.isArray(input) ? results : results[0];
}

useLoader.preload = function (Proto, input, extensions) {
  var keys = Array.isArray(input) ? input : [input];
  return useAsset.preload(loadingFn(extensions), Proto, ...keys);
};

useLoader.clear = function (Proto, input) {
  var keys = Array.isArray(input) ? input : [input];
  return useAsset.clear(Proto, ...keys);
};

var roots = new Map();
var modes = ['legacy', 'blocking', 'concurrent'];
var {
  invalidate,
  advance
} = createLoop(roots);
var {
  reconciler,
  applyProps
} = createRenderer();

var createRendererInstance = (gl, canvas) => isRenderer(gl) ? gl : new three_module.WebGLRenderer(_objectSpread({
  powerPreference: 'high-performance',
  canvas: canvas,
  antialias: true,
  alpha: true
}, gl));

function render(element, canvas) {
  var _ref13 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      {
    gl,
    size,
    mode = modes[1],
    events,
    onCreated
  } = _ref13,
      props = (0,esm_objectWithoutProperties/* default */.Z)(_ref13, _excluded6);

  var _store; // Allow size to take on container bounds initially


  if (!size) {
    var _canvas$parentElement, _canvas$parentElement2, _canvas$parentElement3, _canvas$parentElement4;

    size = {
      width: (_canvas$parentElement = (_canvas$parentElement2 = canvas.parentElement) == null ? void 0 : _canvas$parentElement2.clientWidth) != null ? _canvas$parentElement : 0,
      height: (_canvas$parentElement3 = (_canvas$parentElement4 = canvas.parentElement) == null ? void 0 : _canvas$parentElement4.clientHeight) != null ? _canvas$parentElement3 : 0
    };
  }

  var root = roots.get(canvas);
  var fiber = root == null ? void 0 : root.fiber;
  var store = root == null ? void 0 : root.store;
  var state = (_store = store) == null ? void 0 : _store.getState();

  if (fiber && state) {
    var lastProps = state.internal.lastProps; // When a root was found, see if any fundamental props must be changed or exchanged
    // Check pixelratio

    if (props.dpr !== undefined && !is.equ(lastProps.dpr, props.dpr)) state.setDpr(props.dpr); // Check size

    if (!is.equ(lastProps.size, size)) state.setSize(size.width, size.height); // For some props we want to reset the entire root
    // Changes to the color-space

    var linearChanged = props.linear !== lastProps.linear;

    if (linearChanged) {
      unmountComponentAtNode(canvas);
      fiber = undefined;
    }
  }

  if (!fiber) {
    // If no root has been found, make one
    // Create gl
    var glRenderer = createRendererInstance(gl, canvas); // Enable VR if requested

    if (props.vr) {
      glRenderer.xr.enabled = true;
      glRenderer.setAnimationLoop(timestamp => advance(timestamp, true));
    } // Create store


    store = createStore(applyProps, invalidate, advance, _objectSpread({
      gl: glRenderer,
      size
    }, props));

    var _state = store.getState(); // Create renderer


    fiber = reconciler.createContainer(store, modes.indexOf(mode), false, null); // Map it

    roots.set(canvas, {
      fiber,
      store
    }); // Store events internally

    if (events) _state.set({
      events: events(store)
    });
  }

  if (store && fiber) {
    reconciler.updateContainer( /*#__PURE__*/react.createElement(Provider, {
      store: store,
      element: element,
      onCreated: onCreated,
      target: canvas
    }), fiber, null, () => undefined);
    return store;
  } else {
    throw 'Error creating root!';
  }
}

function Provider(_ref14) {
  var {
    store,
    element,
    onCreated,
    target
  } = _ref14;
  react.useEffect(() => {
    var state = store.getState(); // Flag the canvas active, rendering will now begin

    state.set(state => ({
      internal: _objectSpread(_objectSpread({}, state.internal), {}, {
        active: true
      })
    })); // Connect events

    state.events.connect == null ? void 0 : state.events.connect(target); // Notifiy that init is completed, the scene graph exists, but nothing has yet rendered

    if (onCreated) onCreated(state);
  }, []);
  return /*#__PURE__*/react.createElement(context.Provider, {
    value: store
  }, element);
}

function unmountComponentAtNode(canvas, callback) {
  var root = roots.get(canvas);
  var fiber = root == null ? void 0 : root.fiber;

  if (fiber) {
    var state = root == null ? void 0 : root.store.getState();
    if (state) state.internal.active = false;
    reconciler.updateContainer(null, fiber, null, () => {
      if (state) {
        setTimeout(() => {
          var _state$gl, _state$gl$renderLists, _state$gl2;

          state.events.disconnect == null ? void 0 : state.events.disconnect();
          (_state$gl = state.gl) == null ? void 0 : (_state$gl$renderLists = _state$gl.renderLists) == null ? void 0 : _state$gl$renderLists.dispose == null ? void 0 : _state$gl$renderLists.dispose();
          (_state$gl2 = state.gl) == null ? void 0 : _state$gl2.forceContextLoss == null ? void 0 : _state$gl2.forceContextLoss();
          dispose(state);
          roots.delete(canvas);
          if (callback) callback(canvas);
        }, 500);
      }
    });
  }
}

function dispose(obj) {
  if (obj.dispose && obj.type !== 'Scene') obj.dispose();

  for (var p in obj) {
    var _dispose, _ref;

    (_dispose = (_ref = p).dispose) == null ? void 0 : _dispose.call(_ref);
    delete obj[p];
  }
}

var act = reconciler.act;
var hasSymbol = is.fun(Symbol) && Symbol.for;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;

function createPortal(children, container, implementation) {
  var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: key == null ? null : '' + key,
    children,
    containerInfo: prepare(container),
    implementation
  };
}

reconciler.injectIntoDevTools({
  bundleType:  true ? 0 : 0,
  rendererPackageName: '@react-three/fiber',
  version: '17.0.2'
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(27490);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var esm_defineProperty = __webpack_require__(75167);
;// CONCATENATED MODULE: ./node_modules/three-stdlib/lines/LineSegmentsGeometry.js



class LineSegmentsGeometry extends three_module.InstancedBufferGeometry {
  constructor() {
    super();

    (0,esm_defineProperty/* default */.Z)(this, "isLineSegmentsGeometry", true);

    (0,esm_defineProperty/* default */.Z)(this, "type", 'LineSegmentsGeometry');

    (0,esm_defineProperty/* default */.Z)(this, "boundingBox", null);

    (0,esm_defineProperty/* default */.Z)(this, "boundingSphere", null);

    (0,esm_defineProperty/* default */.Z)(this, "box", new three_module.Box3());

    (0,esm_defineProperty/* default */.Z)(this, "vector", new three_module.Vector3());

    var positions = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0];
    var uvs = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2];
    var index = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(index);
    this.setAttribute('position', new three_module.Float32BufferAttribute(positions, 3));
    this.setAttribute('uv', new three_module.Float32BufferAttribute(uvs, 2));
  }

  applyMatrix4(matrix) {
    var start = this.attributes.instanceStart;
    var end = this.attributes.instanceEnd;

    if (start !== undefined) {
      start.applyMatrix4(matrix);
      end.applyMatrix4(matrix);
      start.needsUpdate = true;
    }

    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }

    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }

    return this;
  }

  setPositions(array) {
    var lineSegments;

    if (array instanceof Float32Array) {
      lineSegments = array;
    } else if (Array.isArray(array)) {
      lineSegments = new Float32Array(array);
    } else {
      console.error('LineSegmentsGeometry.setPosition requires either a Float32Array or regular array of numbers');
      return this;
    }

    var instanceBuffer = new three_module.InstancedInterleavedBuffer(lineSegments, 6, 1); // xyz, xyz

    this.setAttribute('instanceStart', new three_module.InterleavedBufferAttribute(instanceBuffer, 3, 0)); // xyz

    this.setAttribute('instanceEnd', new three_module.InterleavedBufferAttribute(instanceBuffer, 3, 3)); // xyz
    //

    this.computeBoundingBox();
    this.computeBoundingSphere();
    return this;
  }

  setColors(array) {
    var colors;

    if (array instanceof Float32Array) {
      colors = array;
    } else if (Array.isArray(array)) {
      colors = new Float32Array(array);
    } else {
      console.error('LineSegmentsGeometry.setColors requires either a Float32Array or regular array of numbers');
      return this;
    }

    var instanceColorBuffer = new three_module.InstancedInterleavedBuffer(colors, 6, 1); // rgb, rgb

    this.setAttribute('instanceColorStart', new three_module.InterleavedBufferAttribute(instanceColorBuffer, 3, 0)); // rgb

    this.setAttribute('instanceColorEnd', new three_module.InterleavedBufferAttribute(instanceColorBuffer, 3, 3)); // rgb

    return this;
  }

  fromWireframeGeometry(geometry) {
    this.setPositions(Array.from(geometry.attributes.position.array));
    return this;
  }

  fromEdgesGeometry(geometry) {
    this.setPositions(Array.from(geometry.attributes.position.array));
    return this;
  }

  fromMesh(mesh) {
    this.fromWireframeGeometry(new three_module.WireframeGeometry(mesh.geometry));
    return this;
  }

  fromLineSegments(lineSegments) {
    var geometry = lineSegments.geometry;

    if (geometry.isBufferGeometry) {
      this.setPositions(Array.from(geometry.attributes.position.array)); // assumes non-indexed
    } // set colors, maybe


    return this;
  }

  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new three_module.Box3();
    }

    var start = this.attributes.instanceStart;
    var end = this.attributes.instanceEnd;

    if (start !== undefined && end !== undefined) {
      this.boundingBox.setFromBufferAttribute(start);
      this.box.setFromBufferAttribute(end);
      this.boundingBox.union(this.box);
    }
  }

  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new three_module.Sphere();
    }

    if (this.boundingBox === null) {
      this.computeBoundingBox();
    }

    var start = this.attributes.instanceStart;
    var end = this.attributes.instanceEnd;

    if (start !== undefined && end !== undefined) {
      var center = this.boundingSphere.center;

      if (this.boundingBox) {
        this.boundingBox.getCenter(center);
      }

      var maxRadiusSq = 0;

      for (var i = 0, il = start.count; i < il; i++) {
        this.vector.fromBufferAttribute(start, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(this.vector));
        this.vector.fromBufferAttribute(end, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(this.vector));
      }

      this.boundingSphere.radius = Math.sqrt(maxRadiusSq);

      if (isNaN(this.boundingSphere.radius)) {
        console.error('THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.', this);
      }
    }
  }

  toJSON() {// todo
  }

}


;// CONCATENATED MODULE: ./node_modules/three-stdlib/lines/LineMaterial.js


/**
 * parameters = {
 *  color: <hex>,
 *  linewidth: <float>,
 *  dashed: <boolean>,
 *  dashScale: <float>,
 *  dashSize: <float>,
 *  dashOffset: <float>,
 *  gapSize: <float>,
 *  resolution: <Vector2>, // to be set by renderer
 * }
 */

var LineUniforms = {
  linewidth: {
    value: 1
  },
  resolution: {
    value: new three_module.Vector2(1, 1)
  },
  dashScale: {
    value: 1
  },
  dashSize: {
    value: 1
  },
  dashOffset: {
    value: 0
  },
  gapSize: {
    value: 1
  },
  // todo FIX - maybe change to totalSize
  opacity: {
    value: 1
  }
};
three_module.ShaderLib.line = {
  uniforms: three_module.UniformsUtils.merge([three_module.UniformsLib.common, three_module.UniformsLib.fog, LineUniforms]),
  vertexShader:
  /* glsl */
  "\n\t\t#include <common>\n\t\t#include <color_pars_vertex>\n\t\t#include <fog_pars_vertex>\n\t\t#include <logdepthbuf_pars_vertex>\n\t\t#include <clipping_planes_pars_vertex>\n\n\t\tuniform float linewidth;\n\t\tuniform vec2 resolution;\n\n\t\tattribute vec3 instanceStart;\n\t\tattribute vec3 instanceEnd;\n\n\t\tattribute vec3 instanceColorStart;\n\t\tattribute vec3 instanceColorEnd;\n\n\t\tvarying vec2 vUv;\n\n\t\t#ifdef USE_DASH\n\n\t\t\tuniform float dashScale;\n\t\t\tattribute float instanceDistanceStart;\n\t\t\tattribute float instanceDistanceEnd;\n\t\t\tvarying float vLineDistance;\n\n\t\t#endif\n\n\t\tvoid trimSegment( const in vec4 start, inout vec4 end ) {\n\n\t\t\t// trim end segment so it terminates between the camera plane and the near plane\n\n\t\t\t// conservative estimate of the near plane\n\t\t\tfloat a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column\n\t\t\tfloat b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column\n\t\t\tfloat nearEstimate = - 0.5 * b / a;\n\n\t\t\tfloat alpha = ( nearEstimate - start.z ) / ( end.z - start.z );\n\n\t\t\tend.xyz = mix( start.xyz, end.xyz, alpha );\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\t#ifdef USE_COLOR\n\n\t\t\t\tvColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;\n\n\t\t\t#endif\n\n\t\t\t#ifdef USE_DASH\n\n\t\t\t\tvLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;\n\n\t\t\t#endif\n\n\t\t\tfloat aspect = resolution.x / resolution.y;\n\n\t\t\tvUv = uv;\n\n\t\t\t// camera space\n\t\t\tvec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );\n\t\t\tvec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );\n\n\t\t\t// special case for perspective projection, and segments that terminate either in, or behind, the camera plane\n\t\t\t// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space\n\t\t\t// but we need to perform ndc-space calculations in the shader, so we must address this issue directly\n\t\t\t// perhaps there is a more elegant solution -- WestLangley\n\n\t\t\tbool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column\n\n\t\t\tif ( perspective ) {\n\n\t\t\t\tif ( start.z < 0.0 && end.z >= 0.0 ) {\n\n\t\t\t\t\ttrimSegment( start, end );\n\n\t\t\t\t} else if ( end.z < 0.0 && start.z >= 0.0 ) {\n\n\t\t\t\t\ttrimSegment( end, start );\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\t// clip space\n\t\t\tvec4 clipStart = projectionMatrix * start;\n\t\t\tvec4 clipEnd = projectionMatrix * end;\n\n\t\t\t// ndc space\n\t\t\tvec2 ndcStart = clipStart.xy / clipStart.w;\n\t\t\tvec2 ndcEnd = clipEnd.xy / clipEnd.w;\n\n\t\t\t// direction\n\t\t\tvec2 dir = ndcEnd - ndcStart;\n\n\t\t\t// account for clip-space aspect ratio\n\t\t\tdir.x *= aspect;\n\t\t\tdir = normalize( dir );\n\n\t\t\t// perpendicular to dir\n\t\t\tvec2 offset = vec2( dir.y, - dir.x );\n\n\t\t\t// undo aspect ratio adjustment\n\t\t\tdir.x /= aspect;\n\t\t\toffset.x /= aspect;\n\n\t\t\t// sign flip\n\t\t\tif ( position.x < 0.0 ) offset *= - 1.0;\n\n\t\t\t// endcaps\n\t\t\tif ( position.y < 0.0 ) {\n\n\t\t\t\toffset += - dir;\n\n\t\t\t} else if ( position.y > 1.0 ) {\n\n\t\t\t\toffset += dir;\n\n\t\t\t}\n\n\t\t\t// adjust for linewidth\n\t\t\toffset *= linewidth;\n\n\t\t\t// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...\n\t\t\toffset /= resolution.y;\n\n\t\t\t// select end\n\t\t\tvec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;\n\n\t\t\t// back to clip space\n\t\t\toffset *= clip.w;\n\n\t\t\tclip.xy += offset;\n\n\t\t\tgl_Position = clip;\n\n\t\t\tvec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation\n\n\t\t\t#include <logdepthbuf_vertex>\n\t\t\t#include <clipping_planes_vertex>\n\t\t\t#include <fog_vertex>\n\n\t\t}\n\t\t",
  fragmentShader:
  /* glsl */
  "\n\t\tuniform vec3 diffuse;\n\t\tuniform float opacity;\n\n\t\t#ifdef USE_DASH\n\n\t\t\tuniform float dashSize;\n\t\t\tuniform float dashOffset;\n\t\t\tuniform float gapSize;\n\n\t\t#endif\n\n\t\tvarying float vLineDistance;\n\n\t\t#include <common>\n\t\t#include <color_pars_fragment>\n\t\t#include <fog_pars_fragment>\n\t\t#include <logdepthbuf_pars_fragment>\n\t\t#include <clipping_planes_pars_fragment>\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\t#include <clipping_planes_fragment>\n\n\t\t\t#ifdef USE_DASH\n\n\t\t\t\tif ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps\n\n\t\t\t\tif ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX\n\n\t\t\t#endif\n\n\t\t\tfloat alpha = opacity;\n\n\t\t\t#ifdef ALPHA_TO_COVERAGE\n\n\t\t\t// artifacts appear on some hardware if a derivative is taken within a conditional\n\t\t\tfloat a = vUv.x;\n\t\t\tfloat b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n\t\t\tfloat len2 = a * a + b * b;\n\t\t\tfloat dlen = fwidth( len2 );\n\n\t\t\tif ( abs( vUv.y ) > 1.0 ) {\n\n\t\t\t\talpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );\n\n\t\t\t}\n\n\t\t\t#else\n\n\t\t\tif ( abs( vUv.y ) > 1.0 ) {\n\n\t\t\t\tfloat a = vUv.x;\n\t\t\t\tfloat b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n\t\t\t\tfloat len2 = a * a + b * b;\n\n\t\t\t\tif ( len2 > 1.0 ) discard;\n\n\t\t\t}\n\n\t\t\t#endif\n\n\t\t\tvec4 diffuseColor = vec4( diffuse, alpha );\n\n\t\t\t#include <logdepthbuf_fragment>\n\t\t\t#include <color_fragment>\n\n\t\t\tgl_FragColor = vec4( diffuseColor.rgb, alpha );\n\n\t\t\t#include <tonemapping_fragment>\n\t\t\t#include <encodings_fragment>\n\t\t\t#include <fog_fragment>\n\t\t\t#include <premultiplied_alpha_fragment>\n\n\t\t}\n\t\t"
};

class LineMaterial extends three_module.ShaderMaterial {
  constructor() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super({
      uniforms: three_module.UniformsUtils.clone(three_module.ShaderLib.line.uniforms),
      vertexShader: three_module.ShaderLib.line.vertexShader,
      fragmentShader: three_module.ShaderLib.line.fragmentShader,
      clipping: true // required for clipping support

    });
    /**
     * Everytime I remove this, everything just breaks,
     * so I'm just gonna leave it here.
     */

    (0,esm_defineProperty/* default */.Z)(this, "isLineMaterial", true);

    (0,esm_defineProperty/* default */.Z)(this, "dashed", false);

    (0,esm_defineProperty/* default */.Z)(this, "color", new three_module.Color(0x000000));

    (0,esm_defineProperty/* default */.Z)(this, "lineWidth", 0);

    (0,esm_defineProperty/* default */.Z)(this, "dashScale", 0);

    (0,esm_defineProperty/* default */.Z)(this, "dashOffset", 0);

    (0,esm_defineProperty/* default */.Z)(this, "dashSize", 0);

    (0,esm_defineProperty/* default */.Z)(this, "opacity", 0);

    (0,esm_defineProperty/* default */.Z)(this, "resolution", new three_module.Vector2());

    (0,esm_defineProperty/* default */.Z)(this, "alphaToCoverage", false);

    Object.defineProperties(this, {
      color: {
        enumerable: true,
        get: function get() {
          return this.uniforms.diffuse.value;
        },
        set: function set(value) {
          var colorObj = new three_module.Color(value);
          this.uniforms.diffuse.value = colorObj.getHex();
        }
      },
      linewidth: {
        enumerable: true,
        get: function get() {
          return this.uniforms.linewidth.value;
        },
        set: function set(value) {
          this.uniforms.linewidth.value = value;
        }
      },
      dashScale: {
        enumerable: true,
        get: function get() {
          return this.uniforms.dashScale.value;
        },
        set: function set(value) {
          this.uniforms.dashScale.value = value;
        }
      },
      dashSize: {
        enumerable: true,
        get: function get() {
          return this.uniforms.dashSize.value;
        },
        set: function set(value) {
          this.uniforms.dashSize.value = value;
        }
      },
      dashOffset: {
        enumerable: true,
        get: function get() {
          return this.uniforms.dashOffset.value;
        },
        set: function set(value) {
          this.uniforms.dashOffset.value = value;
        }
      },
      gapSize: {
        enumerable: true,
        get: function get() {
          return this.uniforms.gapSize.value;
        },
        set: function set(value) {
          this.uniforms.gapSize.value = value;
        }
      },
      opacity: {
        enumerable: true,
        get: function get() {
          return this.uniforms.opacity.value;
        },
        set: function set(value) {
          this.uniforms.opacity.value = value;
        }
      },
      resolution: {
        enumerable: true,
        get: function get() {
          return this.uniforms.resolution.value;
        },
        set: function set(value) {
          this.uniforms.resolution.value.copy(value);
        }
      },
      alphaToCoverage: {
        enumerable: true,
        get: function get() {
          return Boolean('ALPHA_TO_COVERAGE' in this.defines);
        },
        set: function set(value) {
          if (Boolean(value) !== Boolean('ALPHA_TO_COVERAGE' in this.defines)) {
            this.needsUpdate = true;
          }

          if (value) {
            this.defines.ALPHA_TO_COVERAGE = '';
            this.extensions.derivatives = true;
          } else {
            delete this.defines.ALPHA_TO_COVERAGE;
            this.extensions.derivatives = false;
          }
        }
      },
      dashed: {
        enumerable: true,
        get: function get() {
          return Boolean('USE_DASH' in this.defines);
        },
        set: function set(value) {
          if (Boolean(value) !== Boolean('USE_DASH' in this.defines)) {
            this.needsUpdate = true;
          }

          if (value) {
            this.defines.USE_DASH = '';
          } else {
            delete this.defines.USE_DASH;
          }
        }
      }
    });
    this.setValues(parameters);
  }

}


;// CONCATENATED MODULE: ./node_modules/three-stdlib/lines/LineSegments2.js





class LineSegments2 extends three_module.Mesh {
  constructor() {
    var _geometry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new LineSegmentsGeometry();

    var _material = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new LineMaterial({
      color: Math.random() * 0xffffff
    });

    super(_geometry, _material);

    (0,esm_defineProperty/* default */.Z)(this, "type", 'LineSegments2');

    (0,esm_defineProperty/* default */.Z)(this, "isLineSegments2", true);

    (0,esm_defineProperty/* default */.Z)(this, "distStart", new three_module.Vector3());

    (0,esm_defineProperty/* default */.Z)(this, "distEnd", new three_module.Vector3());

    (0,esm_defineProperty/* default */.Z)(this, "computeLineDistances", () => {
      var geometry = this.geometry;
      var instanceStart = geometry.attributes.instanceStart;
      var instanceEnd = geometry.attributes.instanceEnd;
      var lineDistances = new Float32Array(2 * instanceStart.data.count);

      for (var i = 0, j = 0, l = instanceStart.data.count; i < l; i++, j += 2) {
        this.distStart.fromBufferAttribute(instanceStart, i);
        this.distEnd.fromBufferAttribute(instanceEnd, i);
        lineDistances[j] = j === 0 ? 0 : lineDistances[j - 1];
        lineDistances[j + 1] = lineDistances[j] + this.distStart.distanceTo(this.distEnd);
      }

      var instanceDistanceBuffer = new three_module.InstancedInterleavedBuffer(lineDistances, 2, 1); // d0, d1

      geometry.setAttribute('instanceDistanceStart', new three_module.InterleavedBufferAttribute(instanceDistanceBuffer, 1, 0)); // d0

      geometry.setAttribute('instanceDistanceEnd', new three_module.InterleavedBufferAttribute(instanceDistanceBuffer, 1, 1)); // d1

      return this;
    });

    (0,esm_defineProperty/* default */.Z)(this, "rayStart", new three_module.Vector4());

    (0,esm_defineProperty/* default */.Z)(this, "rayEnd", new three_module.Vector4());

    (0,esm_defineProperty/* default */.Z)(this, "ssOrigin", new three_module.Vector4());

    (0,esm_defineProperty/* default */.Z)(this, "ssOrigin3", new three_module.Vector3());

    (0,esm_defineProperty/* default */.Z)(this, "mvMatrix", new three_module.Matrix4());

    (0,esm_defineProperty/* default */.Z)(this, "line", new three_module.Line3());

    (0,esm_defineProperty/* default */.Z)(this, "closestPoint", new three_module.Vector3());

    (0,esm_defineProperty/* default */.Z)(this, "raycast", (raycaster, intersects) => {
      if (raycaster.camera === null) {
        console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2.');
      }

      var threshold = 0;
      var ray = raycaster.ray;
      var camera = raycaster.camera;
      var projectionMatrix = camera.projectionMatrix;
      var geometry = this.geometry;
      var material = this.material;
      var resolution = material.resolution;
      var lineWidth = material.linewidth + threshold;
      var instanceStart = geometry.attributes.instanceStart;
      var instanceEnd = geometry.attributes.instanceEnd; // camera forward is negative

      var near = -camera.near; // pick a point 1 unit out along the ray to avoid the ray origin
      // sitting at the camera origin which will cause "w" to be 0 when
      // applying the projection matrix.

      ray.at(1, this.ssOrigin); // ndc space [ - 1.0, 1.0 ]

      this.ssOrigin.w = 1;
      this.ssOrigin.applyMatrix4(camera.matrixWorldInverse);
      this.ssOrigin.applyMatrix4(projectionMatrix);
      this.ssOrigin.multiplyScalar(1 / this.ssOrigin.w); // screen space

      this.ssOrigin.x *= resolution.x / 2;
      this.ssOrigin.y *= resolution.y / 2;
      this.ssOrigin.z = 0;
      this.ssOrigin3.set(this.ssOrigin.x, this.ssOrigin.y, this.ssOrigin.z);
      var matrixWorld = this.matrixWorld;
      this.mvMatrix.multiplyMatrices(camera.matrixWorldInverse, matrixWorld);

      for (var i = 0, l = instanceStart.count; i < l; i++) {
        this.rayStart.fromBufferAttribute(instanceStart, i);
        this.rayEnd.fromBufferAttribute(instanceEnd, i);
        this.rayStart.w = 1;
        this.rayEnd.w = 1; // camera space

        this.rayStart.applyMatrix4(this.mvMatrix);
        this.rayEnd.applyMatrix4(this.mvMatrix); // skip the segment if it's entirely behind the camera

        var isBehindCameraNear = this.rayStart.z > near && this.rayEnd.z > near;

        if (isBehindCameraNear) {
          continue;
        } // trim the segment if it extends behind camera near


        if (this.rayStart.z > near) {
          var deltaDist = this.rayStart.z - this.rayEnd.z;
          var t = (this.rayStart.z - near) / deltaDist;
          this.rayStart.lerp(this.rayEnd, t);
        } else if (this.rayEnd.z > near) {
          var _deltaDist = this.rayEnd.z - this.rayStart.z;

          var _t = (this.rayEnd.z - near) / _deltaDist;

          this.rayEnd.lerp(this.rayStart, _t);
        } // clip space


        this.rayStart.applyMatrix4(projectionMatrix);
        this.rayEnd.applyMatrix4(projectionMatrix); // ndc space [ - 1.0, 1.0 ]

        this.rayStart.multiplyScalar(1 / this.rayStart.w);
        this.rayEnd.multiplyScalar(1 / this.rayEnd.w); // screen space

        this.rayStart.x *= resolution.x / 2;
        this.rayStart.y *= resolution.y / 2;
        this.rayEnd.x *= resolution.x / 2;
        this.rayEnd.y *= resolution.y / 2; // create 2d segment

        this.line.start.set(this.rayStart.x, this.rayStart.y, this.rayStart.z);
        this.line.start.z = 0;
        this.line.end.set(this.rayEnd.x, this.rayEnd.y, this.rayEnd.z);
        this.line.end.z = 0; // get closest point on ray to segment

        var param = this.line.closestPointToPointParameter(this.ssOrigin3, true);
        this.line.at(param, this.closestPoint); // check if the intersection point is within clip space

        var zPos = three_module.MathUtils.lerp(this.rayStart.z, this.rayEnd.z, param);
        var isInClipSpace = zPos >= -1 && zPos <= 1;
        var isInside = this.ssOrigin3.distanceTo(this.closestPoint) < lineWidth * 0.5;

        if (isInClipSpace && isInside) {
          this.line.start.fromBufferAttribute(instanceStart, i);
          this.line.end.fromBufferAttribute(instanceEnd, i);
          this.line.start.applyMatrix4(matrixWorld);
          this.line.end.applyMatrix4(matrixWorld);
          var pointOnLine = new three_module.Vector3();
          var point = new three_module.Vector3();
          ray.distanceSqToSegment(this.line.start, this.line.end, point, pointOnLine);
          intersects.push({
            distance: ray.origin.distanceTo(point),
            point: point,
            face: null,
            faceIndex: i,
            object: this,
            uv: undefined,
            pointOnLine
          });
        }
      }
    });
  }

}


;// CONCATENATED MODULE: ./node_modules/three-stdlib/lines/LineGeometry.js



class LineGeometry extends LineSegmentsGeometry {
  constructor() {
    super();

    (0,esm_defineProperty/* default */.Z)(this, "type", 'LineGeometry');

    (0,esm_defineProperty/* default */.Z)(this, "isLineGeometry", true);

    (0,esm_defineProperty/* default */.Z)(this, "setColors", array => {
      // converts [ r1, g1, b1,  r2, g2, b2, ... ] to pairs format
      var length = array.length - 3;
      var colors = new Float32Array(2 * length);

      for (var i = 0; i < length; i += 3) {
        colors[2 * i] = array[i];
        colors[2 * i + 1] = array[i + 1];
        colors[2 * i + 2] = array[i + 2];
        colors[2 * i + 3] = array[i + 3];
        colors[2 * i + 4] = array[i + 4];
        colors[2 * i + 5] = array[i + 5];
      }

      super.setColors(colors);
      return this;
    });

    (0,esm_defineProperty/* default */.Z)(this, "fromLine", line => {
      var geometry = line.geometry;

      if (geometry.isBufferGeometry) {
        this.setPositions(Array.from(geometry.attributes.position.array)); // assumes non-indexed
      } // set colors, maybe


      return this;
    });

    (0,esm_defineProperty/* default */.Z)(this, "copy", () => {
      // todo
      return this;
    });
  }

  setPositions(array) {
    // converts [ x1, y1, z1,  x2, y2, z2, ... ] to pairs format
    var length = array.length - 3;
    var points = new Float32Array(2 * length);

    for (var i = 0; i < length; i += 3) {
      points[2 * i] = array[i];
      points[2 * i + 1] = array[i + 1];
      points[2 * i + 2] = array[i + 2];
      points[2 * i + 3] = array[i + 3];
      points[2 * i + 4] = array[i + 4];
      points[2 * i + 5] = array[i + 5];
    }

    super.setPositions(points);
    return this;
  }

}


;// CONCATENATED MODULE: ./node_modules/three-stdlib/lines/Line2.js





class Line2 extends LineSegments2 {
  constructor() {
    var geometry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new LineGeometry();
    var material = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new LineMaterial({
      color: Math.random() * 0xffffff
    });
    super(geometry, material);

    (0,esm_defineProperty/* default */.Z)(this, "type", 'Line2');

    (0,esm_defineProperty/* default */.Z)(this, "isLine2", true);
  }

}


;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/Line.js

var Line_excluded = ["points", "color", "vertexColors", "lineWidth", "dashed"];





var Line = /*#__PURE__*/react.forwardRef(function Line(_ref, ref) {
  var {
    points,
    color = 'black',
    vertexColors,
    lineWidth,
    dashed
  } = _ref,
      rest = (0,esm_objectWithoutProperties/* default */.Z)(_ref, Line_excluded);

  var [line2] = react.useState(() => new Line2());
  var [lineMaterial] = react.useState(() => new LineMaterial());
  var [resolution] = react.useState(() => new three_module.Vector2(512, 512));
  var lineGeom = react.useMemo(() => {
    var geom = new LineGeometry();
    var pValues = points.map(p => p instanceof three_module.Vector3 ? p.toArray() : p);
    geom.setPositions(pValues.flat());

    if (vertexColors) {
      var cValues = vertexColors.map(c => c instanceof three_module.Color ? c.toArray() : c);
      geom.setColors(cValues.flat());
    }

    return geom;
  }, [points, vertexColors]);
  react.useLayoutEffect(() => {
    line2.computeLineDistances();
  }, [points, line2]);
  react.useLayoutEffect(() => {
    if (dashed) {
      lineMaterial.defines.USE_DASH = '';
    } else {
      // Setting lineMaterial.defines.USE_DASH to undefined is apparently not sufficient.
      delete lineMaterial.defines.USE_DASH;
    }

    lineMaterial.needsUpdate = true;
  }, [dashed, lineMaterial]);
  react.useEffect(() => {
    return () => lineGeom.dispose();
  }, [lineGeom]);
  return /*#__PURE__*/react.createElement("primitive", (0,esm_extends/* default */.Z)({
    object: line2,
    ref: ref
  }, rest), /*#__PURE__*/react.createElement("primitive", {
    object: lineGeom,
    attach: "geometry"
  }), /*#__PURE__*/react.createElement("primitive", (0,esm_extends/* default */.Z)({
    object: lineMaterial,
    attach: "material",
    color: color,
    vertexColors: Boolean(vertexColors),
    resolution: resolution,
    linewidth: lineWidth,
    dashed: dashed
  }, rest)));
});

;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/shapes.js

var shapes_excluded = ["args", "children"];



function shapes_create(type) {
  var El = type + 'BufferGeometry';
  return /*#__PURE__*/react.forwardRef((_ref, ref) => {
    var {
      args,
      children
    } = _ref,
        props = (0,esm_objectWithoutProperties/* default */.Z)(_ref, shapes_excluded);

    return /*#__PURE__*/react.createElement("mesh", (0,esm_extends/* default */.Z)({
      ref: ref
    }, props), /*#__PURE__*/react.createElement(El, {
      attach: "geometry",
      args: args
    }), children);
  });
}

var Box = shapes_create('box');
var Circle = shapes_create('circle');
var Cone = shapes_create('cone');
var Cylinder = shapes_create('cylinder');
var Sphere = shapes_create('sphere');
var Plane = shapes_create('plane');
var Tube = shapes_create('tube');
var Torus = shapes_create('torus');
var TorusKnot = shapes_create('torusKnot');
var Tetrahedron = shapes_create('tetrahedron');
var Ring = shapes_create('ring');
var Polyhedron = shapes_create('polyhedron');
var Icosahedron = shapes_create('icosahedron');
var Octahedron = shapes_create('octahedron');
var Dodecahedron = shapes_create('dodecahedron');
var Extrude = shapes_create('extrude');
var Lathe = shapes_create('lathe');
var Parametric = shapes_create('parametric');

;// CONCATENATED MODULE: ./node_modules/three-stdlib/controls/OrbitControls.js

 // Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

var moduloWrapAround = (offset, capacity) => (offset % capacity + capacity) % capacity;

class OrbitControls extends three_module.EventDispatcher {
  // Set to false to disable this control
  // "target" sets the location of focus, where the object orbits around
  // How far you can dolly in and out ( PerspectiveCamera only )
  // How far you can zoom in and out ( OrthographicCamera only )
  // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.
  // radians
  // radians
  // How far you can orbit horizontally, upper and lower limits.
  // If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
  // radians
  // radians
  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop
  // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming
  // Set to false to disable rotating
  // Set to false to disable panning
  // if false, pan orthogonal to world-space direction camera.up
  // pixels moved per arrow key push
  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop
  // 30 seconds per orbit when fps is 60
  // The four arrow keys
  // Mouse buttons
  // Touch fingers
  // the target DOM element for key events
  constructor(object, domElement) {
    super();

    (0,esm_defineProperty/* default */.Z)(this, "object", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "domElement", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "enabled", true);

    (0,esm_defineProperty/* default */.Z)(this, "target", new three_module.Vector3());

    (0,esm_defineProperty/* default */.Z)(this, "minDistance", 0);

    (0,esm_defineProperty/* default */.Z)(this, "maxDistance", Infinity);

    (0,esm_defineProperty/* default */.Z)(this, "minZoom", 0);

    (0,esm_defineProperty/* default */.Z)(this, "maxZoom", Infinity);

    (0,esm_defineProperty/* default */.Z)(this, "minPolarAngle", 0);

    (0,esm_defineProperty/* default */.Z)(this, "maxPolarAngle", Math.PI);

    (0,esm_defineProperty/* default */.Z)(this, "minAzimuthAngle", -Infinity);

    (0,esm_defineProperty/* default */.Z)(this, "maxAzimuthAngle", Infinity);

    (0,esm_defineProperty/* default */.Z)(this, "enableDamping", false);

    (0,esm_defineProperty/* default */.Z)(this, "dampingFactor", 0.05);

    (0,esm_defineProperty/* default */.Z)(this, "enableZoom", true);

    (0,esm_defineProperty/* default */.Z)(this, "zoomSpeed", 1.0);

    (0,esm_defineProperty/* default */.Z)(this, "enableRotate", true);

    (0,esm_defineProperty/* default */.Z)(this, "rotateSpeed", 1.0);

    (0,esm_defineProperty/* default */.Z)(this, "enablePan", true);

    (0,esm_defineProperty/* default */.Z)(this, "panSpeed", 1.0);

    (0,esm_defineProperty/* default */.Z)(this, "screenSpacePanning", true);

    (0,esm_defineProperty/* default */.Z)(this, "keyPanSpeed", 7.0);

    (0,esm_defineProperty/* default */.Z)(this, "autoRotate", false);

    (0,esm_defineProperty/* default */.Z)(this, "autoRotateSpeed", 2.0);

    (0,esm_defineProperty/* default */.Z)(this, "keys", {
      LEFT: 'ArrowLeft',
      UP: 'ArrowUp',
      RIGHT: 'ArrowRight',
      BOTTOM: 'ArrowDown'
    });

    (0,esm_defineProperty/* default */.Z)(this, "mouseButtons", {
      LEFT: three_module.MOUSE.ROTATE,
      MIDDLE: three_module.MOUSE.DOLLY,
      RIGHT: three_module.MOUSE.PAN
    });

    (0,esm_defineProperty/* default */.Z)(this, "touches", {
      ONE: three_module.TOUCH.ROTATE,
      TWO: three_module.TOUCH.DOLLY_PAN
    });

    (0,esm_defineProperty/* default */.Z)(this, "target0", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "position0", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "zoom0", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "_domElementKeyEvents", null);

    (0,esm_defineProperty/* default */.Z)(this, "getPolarAngle", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "getAzimuthalAngle", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "setPolarAngle", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "setAzimuthalAngle", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "listenToKeyEvents", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "saveState", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "reset", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "update", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "connect", void 0);

    (0,esm_defineProperty/* default */.Z)(this, "dispose", void 0);

    this.object = object;
    this.domElement = domElement; // for reset

    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object instanceof three_module.PerspectiveCamera ? this.object.zoom : 1; //
    // public methods
    //

    this.getPolarAngle = () => spherical.phi;

    this.getAzimuthalAngle = () => spherical.theta;

    this.setPolarAngle = value => {
      // use modulo wrapping to safeguard value
      var phi = moduloWrapAround(value, 2 * Math.PI);
      var currentPhi = spherical.phi; // convert to the equivalent shortest angle

      if (currentPhi < 0) currentPhi += 2 * Math.PI;
      if (phi < 0) phi += 2 * Math.PI;
      var phiDist = Math.abs(phi - currentPhi);

      if (2 * Math.PI - phiDist < phiDist) {
        if (phi < currentPhi) {
          phi += 2 * Math.PI;
        } else {
          currentPhi += 2 * Math.PI;
        }
      }

      sphericalDelta.phi = phi - currentPhi;
      scope.update();
    };

    this.setAzimuthalAngle = value => {
      // use modulo wrapping to safeguard value
      var theta = moduloWrapAround(value, 2 * Math.PI);
      var currentTheta = spherical.theta; // convert to the equivalent shortest angle

      if (currentTheta < 0) currentTheta += 2 * Math.PI;
      if (theta < 0) theta += 2 * Math.PI;
      var thetaDist = Math.abs(theta - currentTheta);

      if (2 * Math.PI - thetaDist < thetaDist) {
        if (theta < currentTheta) {
          theta += 2 * Math.PI;
        } else {
          currentTheta += 2 * Math.PI;
        }
      }

      sphericalDelta.theta = theta - currentTheta;
      scope.update();
    };

    this.listenToKeyEvents = domElement => {
      domElement.addEventListener('keydown', onKeyDown);
      this._domElementKeyEvents = domElement;
    };

    this.saveState = () => {
      scope.target0.copy(scope.target);
      scope.position0.copy(scope.object.position);
      scope.zoom0 = scope.object instanceof three_module.PerspectiveCamera ? scope.object.zoom : 1;
    };

    this.reset = () => {
      scope.target.copy(scope.target0);
      scope.object.position.copy(scope.position0);

      if (scope.object instanceof three_module.PerspectiveCamera) {
        scope.object.zoom = scope.zoom0;
        scope.object.updateProjectionMatrix();
      }

      scope.dispatchEvent(changeEvent);
      scope.update();
      state = STATE.NONE;
    }; // this method is exposed, but perhaps it would be better if we can make it private...


    this.update = (() => {
      var offset = new three_module.Vector3(); // so camera.up is the orbit axis

      var quat = new three_module.Quaternion().setFromUnitVectors(object.up, new three_module.Vector3(0, 1, 0));
      var quatInverse = quat.clone().invert();
      var lastPosition = new three_module.Vector3();
      var lastQuaternion = new three_module.Quaternion();
      var twoPI = 2 * Math.PI;
      return function update() {
        var position = scope.object.position;
        offset.copy(position).sub(scope.target); // rotate offset to "y-axis-is-up" space

        offset.applyQuaternion(quat); // angle from z-axis around y-axis

        spherical.setFromVector3(offset);

        if (scope.autoRotate && state === STATE.NONE) {
          rotateLeft(getAutoRotationAngle());
        }

        if (scope.enableDamping) {
          spherical.theta += sphericalDelta.theta * scope.dampingFactor;
          spherical.phi += sphericalDelta.phi * scope.dampingFactor;
        } else {
          spherical.theta += sphericalDelta.theta;
          spherical.phi += sphericalDelta.phi;
        } // restrict theta to be between desired limits


        var min = scope.minAzimuthAngle;
        var max = scope.maxAzimuthAngle;

        if (isFinite(min) && isFinite(max)) {
          if (min < -Math.PI) min += twoPI;else if (min > Math.PI) min -= twoPI;
          if (max < -Math.PI) max += twoPI;else if (max > Math.PI) max -= twoPI;

          if (min <= max) {
            spherical.theta = Math.max(min, Math.min(max, spherical.theta));
          } else {
            spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
          }
        } // restrict phi to be between desired limits


        spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
        spherical.makeSafe();
        spherical.radius *= scale; // restrict radius to be between desired limits

        spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius)); // move target to panned location

        if (scope.enableDamping === true) {
          scope.target.addScaledVector(panOffset, scope.dampingFactor);
        } else {
          scope.target.add(panOffset);
        }

        offset.setFromSpherical(spherical); // rotate offset back to "camera-up-vector-is-up" space

        offset.applyQuaternion(quatInverse);
        position.copy(scope.target).add(offset);
        scope.object.lookAt(scope.target);

        if (scope.enableDamping === true) {
          sphericalDelta.theta *= 1 - scope.dampingFactor;
          sphericalDelta.phi *= 1 - scope.dampingFactor;
          panOffset.multiplyScalar(1 - scope.dampingFactor);
        } else {
          sphericalDelta.set(0, 0, 0);
          panOffset.set(0, 0, 0);
        }

        scale = 1; // update condition is:
        // min(camera displacement, camera rotation in radians)^2 > EPS
        // using small-angle approximation cos(x/2) = 1 - x^2 / 8

        if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
          scope.dispatchEvent(changeEvent);
          lastPosition.copy(scope.object.position);
          lastQuaternion.copy(scope.object.quaternion);
          zoomChanged = false;
          return true;
        }

        return false;
      };
    })(); // https://github.com/mrdoob/three.js/issues/20575


    this.connect = domElement => {
      if (domElement === document) {
        console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
      }

      scope.domElement = domElement; // disables touch scroll
      // touch-action needs to be defined for pointer events to work on mobile
      // https://stackoverflow.com/a/48254578

      scope.domElement.style.touchAction = 'none';
      scope.domElement.addEventListener('contextmenu', onContextMenu);
      scope.domElement.addEventListener('pointerdown', onPointerDown);
      scope.domElement.addEventListener('pointercancel', onPointerCancel);
      scope.domElement.addEventListener('wheel', onMouseWheel);
    };

    this.dispose = () => {
      var _scope$domElement, _scope$domElement2, _scope$domElement3, _scope$domElement4, _scope$domElement5, _scope$domElement6;

      (_scope$domElement = scope.domElement) === null || _scope$domElement === void 0 ? void 0 : _scope$domElement.removeEventListener('contextmenu', onContextMenu);
      (_scope$domElement2 = scope.domElement) === null || _scope$domElement2 === void 0 ? void 0 : _scope$domElement2.removeEventListener('pointerdown', onPointerDown);
      (_scope$domElement3 = scope.domElement) === null || _scope$domElement3 === void 0 ? void 0 : _scope$domElement3.removeEventListener('pointercancel', onPointerCancel);
      (_scope$domElement4 = scope.domElement) === null || _scope$domElement4 === void 0 ? void 0 : _scope$domElement4.removeEventListener('wheel', onMouseWheel);
      (_scope$domElement5 = scope.domElement) === null || _scope$domElement5 === void 0 ? void 0 : _scope$domElement5.ownerDocument.removeEventListener('pointermove', onPointerMove);
      (_scope$domElement6 = scope.domElement) === null || _scope$domElement6 === void 0 ? void 0 : _scope$domElement6.ownerDocument.removeEventListener('pointerup', onPointerUp);

      if (scope._domElementKeyEvents !== null) {
        scope._domElementKeyEvents.removeEventListener('keydown', onKeyDown);
      } //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

    }; //
    // internals
    //


    var scope = this;
    var changeEvent = {
      type: 'change'
    };
    var startEvent = {
      type: 'start'
    };
    var endEvent = {
      type: 'end'
    };
    var STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    var state = STATE.NONE;
    var EPS = 0.000001; // current position in spherical coordinates

    var spherical = new three_module.Spherical();
    var sphericalDelta = new three_module.Spherical();
    var scale = 1;
    var panOffset = new three_module.Vector3();
    var zoomChanged = false;
    var rotateStart = new three_module.Vector2();
    var rotateEnd = new three_module.Vector2();
    var rotateDelta = new three_module.Vector2();
    var panStart = new three_module.Vector2();
    var panEnd = new three_module.Vector2();
    var panDelta = new three_module.Vector2();
    var dollyStart = new three_module.Vector2();
    var dollyEnd = new three_module.Vector2();
    var dollyDelta = new three_module.Vector2();
    var pointers = [];
    var pointerPositions = {};

    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }

    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }

    function rotateLeft(angle) {
      sphericalDelta.theta -= angle;
    }

    function rotateUp(angle) {
      sphericalDelta.phi -= angle;
    }

    var panLeft = (() => {
      var v = new three_module.Vector3();
      return function panLeft(distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix

        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    })();

    var panUp = (() => {
      var v = new three_module.Vector3();
      return function panUp(distance, objectMatrix) {
        if (scope.screenSpacePanning === true) {
          v.setFromMatrixColumn(objectMatrix, 1);
        } else {
          v.setFromMatrixColumn(objectMatrix, 0);
          v.crossVectors(scope.object.up, v);
        }

        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    })(); // deltaX and deltaY are in pixels; right and down are positive


    var pan = (() => {
      var offset = new three_module.Vector3();
      return function pan(deltaX, deltaY) {
        var element = scope.domElement;

        if (element && scope.object instanceof three_module.PerspectiveCamera && scope.object.isPerspectiveCamera) {
          // perspective
          var position = scope.object.position;
          offset.copy(position).sub(scope.target);
          var targetDistance = offset.length(); // half of the fov is center to top of screen

          targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0); // we use only clientHeight here so aspect ratio does not distort speed

          panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
          panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
        } else if (element && scope.object instanceof three_module.OrthographicCamera && scope.object.isOrthographicCamera) {
          // orthographic
          panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
          panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
        } else {
          // camera neither orthographic nor perspective
          console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
          scope.enablePan = false;
        }
      };
    })();

    function dollyOut(dollyScale) {
      if (scope.object instanceof three_module.PerspectiveCamera && scope.object.isPerspectiveCamera) {
        scale /= dollyScale;
      } else if (scope.object instanceof three_module.OrthographicCamera && scope.object.isOrthographicCamera) {
        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
        scope.enableZoom = false;
      }
    }

    function dollyIn(dollyScale) {
      if (scope.object instanceof three_module.PerspectiveCamera && scope.object.isPerspectiveCamera) {
        scale *= dollyScale;
      } else if (scope.object instanceof three_module.OrthographicCamera && scope.object.isOrthographicCamera) {
        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
        scope.enableZoom = false;
      }
    } //
    // event callbacks - update the object state
    //


    function handleMouseDownRotate(event) {
      rotateStart.set(event.clientX, event.clientY);
    }

    function handleMouseDownDolly(event) {
      dollyStart.set(event.clientX, event.clientY);
    }

    function handleMouseDownPan(event) {
      panStart.set(event.clientX, event.clientY);
    }

    function handleMouseMoveRotate(event) {
      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      var element = scope.domElement;

      if (element) {
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      }

      rotateStart.copy(rotateEnd);
      scope.update();
    }

    function handleMouseMoveDolly(event) {
      dollyEnd.set(event.clientX, event.clientY);
      dollyDelta.subVectors(dollyEnd, dollyStart);

      if (dollyDelta.y > 0) {
        dollyOut(getZoomScale());
      } else if (dollyDelta.y < 0) {
        dollyIn(getZoomScale());
      }

      dollyStart.copy(dollyEnd);
      scope.update();
    }

    function handleMouseMovePan(event) {
      panEnd.set(event.clientX, event.clientY);
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
      scope.update();
    }

    function handleMouseWheel(event) {
      if (event.deltaY < 0) {
        dollyIn(getZoomScale());
      } else if (event.deltaY > 0) {
        dollyOut(getZoomScale());
      }

      scope.update();
    }

    function handleKeyDown(event) {
      var needsUpdate = false;

      switch (event.code) {
        case scope.keys.UP:
          pan(0, scope.keyPanSpeed);
          needsUpdate = true;
          break;

        case scope.keys.BOTTOM:
          pan(0, -scope.keyPanSpeed);
          needsUpdate = true;
          break;

        case scope.keys.LEFT:
          pan(scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;

        case scope.keys.RIGHT:
          pan(-scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
      }

      if (needsUpdate) {
        // prevent the browser from scrolling on cursor keys
        event.preventDefault();
        scope.update();
      }
    }

    function handleTouchStartRotate() {
      if (pointers.length == 1) {
        rotateStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        var x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        var y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        rotateStart.set(x, y);
      }
    }

    function handleTouchStartPan() {
      if (pointers.length == 1) {
        panStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        var x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        var y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        panStart.set(x, y);
      }
    }

    function handleTouchStartDolly() {
      var dx = pointers[0].pageX - pointers[1].pageX;
      var dy = pointers[0].pageY - pointers[1].pageY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }

    function handleTouchStartDollyPan() {
      if (scope.enableZoom) handleTouchStartDolly();
      if (scope.enablePan) handleTouchStartPan();
    }

    function handleTouchStartDollyRotate() {
      if (scope.enableZoom) handleTouchStartDolly();
      if (scope.enableRotate) handleTouchStartRotate();
    }

    function handleTouchMoveRotate(event) {
      if (pointers.length == 1) {
        rotateEnd.set(event.pageX, event.pageY);
      } else {
        var position = getSecondPointerPosition(event);
        var x = 0.5 * (event.pageX + position.x);
        var y = 0.5 * (event.pageY + position.y);
        rotateEnd.set(x, y);
      }

      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      var element = scope.domElement;

      if (element) {
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      }

      rotateStart.copy(rotateEnd);
    }

    function handleTouchMovePan(event) {
      if (pointers.length == 1) {
        panEnd.set(event.pageX, event.pageY);
      } else {
        var position = getSecondPointerPosition(event);
        var x = 0.5 * (event.pageX + position.x);
        var y = 0.5 * (event.pageY + position.y);
        panEnd.set(x, y);
      }

      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
    }

    function handleTouchMoveDolly(event) {
      var position = getSecondPointerPosition(event);
      var dx = event.pageX - position.x;
      var dy = event.pageY - position.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      dollyEnd.set(0, distance);
      dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
      dollyOut(dollyDelta.y);
      dollyStart.copy(dollyEnd);
    }

    function handleTouchMoveDollyPan(event) {
      if (scope.enableZoom) handleTouchMoveDolly(event);
      if (scope.enablePan) handleTouchMovePan(event);
    }

    function handleTouchMoveDollyRotate(event) {
      if (scope.enableZoom) handleTouchMoveDolly(event);
      if (scope.enableRotate) handleTouchMoveRotate(event);
    } // event handlers - FSM: listen for events and reset state
    //


    function onPointerDown(event) {
      if (scope.enabled === false) return;

      if (pointers.length === 0) {
        var _scope$domElement7, _scope$domElement8;

        (_scope$domElement7 = scope.domElement) === null || _scope$domElement7 === void 0 ? void 0 : _scope$domElement7.ownerDocument.addEventListener('pointermove', onPointerMove);
        (_scope$domElement8 = scope.domElement) === null || _scope$domElement8 === void 0 ? void 0 : _scope$domElement8.ownerDocument.addEventListener('pointerup', onPointerUp);
      }

      addPointer(event);

      if (event.pointerType === 'touch') {
        onTouchStart(event);
      } else {
        onMouseDown(event);
      }
    }

    function onPointerMove(event) {
      if (scope.enabled === false) return;

      if (event.pointerType === 'touch') {
        onTouchMove(event);
      } else {
        onMouseMove(event);
      }
    }

    function onPointerUp(event) {
      if (scope.enabled === false) return;

      if (event.pointerType === 'touch') {
        onTouchEnd();
      } else {
        onMouseUp();
      }

      removePointer(event);

      if (pointers.length === 0) {
        var _scope$domElement9, _scope$domElement10;

        (_scope$domElement9 = scope.domElement) === null || _scope$domElement9 === void 0 ? void 0 : _scope$domElement9.ownerDocument.removeEventListener('pointermove', onPointerMove);
        (_scope$domElement10 = scope.domElement) === null || _scope$domElement10 === void 0 ? void 0 : _scope$domElement10.ownerDocument.removeEventListener('pointerup', onPointerUp);
      }
    }

    function onPointerCancel(event) {
      removePointer(event);
    }

    function onMouseDown(event) {
      var mouseAction;

      switch (event.button) {
        case 0:
          mouseAction = scope.mouseButtons.LEFT;
          break;

        case 1:
          mouseAction = scope.mouseButtons.MIDDLE;
          break;

        case 2:
          mouseAction = scope.mouseButtons.RIGHT;
          break;

        default:
          mouseAction = -1;
      }

      switch (mouseAction) {
        case three_module.MOUSE.DOLLY:
          if (scope.enableZoom === false) return;
          handleMouseDownDolly(event);
          state = STATE.DOLLY;
          break;

        case three_module.MOUSE.ROTATE:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enablePan === false) return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          } else {
            if (scope.enableRotate === false) return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          }

          break;

        case three_module.MOUSE.PAN:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enableRotate === false) return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          } else {
            if (scope.enablePan === false) return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          }

          break;

        default:
          state = STATE.NONE;
      }

      if (state !== STATE.NONE) {
        scope.dispatchEvent(startEvent);
      }
    }

    function onMouseMove(event) {
      if (scope.enabled === false) return;

      switch (state) {
        case STATE.ROTATE:
          if (scope.enableRotate === false) return;
          handleMouseMoveRotate(event);
          break;

        case STATE.DOLLY:
          if (scope.enableZoom === false) return;
          handleMouseMoveDolly(event);
          break;

        case STATE.PAN:
          if (scope.enablePan === false) return;
          handleMouseMovePan(event);
          break;
      }
    }

    function onMouseUp() {
      scope.dispatchEvent(endEvent);
      state = STATE.NONE;
    }

    function onMouseWheel(event) {
      if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) {
        return;
      }

      event.preventDefault();
      scope.dispatchEvent(startEvent);
      handleMouseWheel(event);
      scope.dispatchEvent(endEvent);
    }

    function onKeyDown(event) {
      if (scope.enabled === false || scope.enablePan === false) return;
      handleKeyDown(event);
    }

    function onTouchStart(event) {
      trackPointer(event);

      switch (pointers.length) {
        case 1:
          switch (scope.touches.ONE) {
            case three_module.TOUCH.ROTATE:
              if (scope.enableRotate === false) return;
              handleTouchStartRotate();
              state = STATE.TOUCH_ROTATE;
              break;

            case three_module.TOUCH.PAN:
              if (scope.enablePan === false) return;
              handleTouchStartPan();
              state = STATE.TOUCH_PAN;
              break;

            default:
              state = STATE.NONE;
          }

          break;

        case 2:
          switch (scope.touches.TWO) {
            case three_module.TOUCH.DOLLY_PAN:
              if (scope.enableZoom === false && scope.enablePan === false) return;
              handleTouchStartDollyPan();
              state = STATE.TOUCH_DOLLY_PAN;
              break;

            case three_module.TOUCH.DOLLY_ROTATE:
              if (scope.enableZoom === false && scope.enableRotate === false) return;
              handleTouchStartDollyRotate();
              state = STATE.TOUCH_DOLLY_ROTATE;
              break;

            default:
              state = STATE.NONE;
          }

          break;

        default:
          state = STATE.NONE;
      }

      if (state !== STATE.NONE) {
        scope.dispatchEvent(startEvent);
      }
    }

    function onTouchMove(event) {
      trackPointer(event);

      switch (state) {
        case STATE.TOUCH_ROTATE:
          if (scope.enableRotate === false) return;
          handleTouchMoveRotate(event);
          scope.update();
          break;

        case STATE.TOUCH_PAN:
          if (scope.enablePan === false) return;
          handleTouchMovePan(event);
          scope.update();
          break;

        case STATE.TOUCH_DOLLY_PAN:
          if (scope.enableZoom === false && scope.enablePan === false) return;
          handleTouchMoveDollyPan(event);
          scope.update();
          break;

        case STATE.TOUCH_DOLLY_ROTATE:
          if (scope.enableZoom === false && scope.enableRotate === false) return;
          handleTouchMoveDollyRotate(event);
          scope.update();
          break;

        default:
          state = STATE.NONE;
      }
    }

    function onTouchEnd() {
      scope.dispatchEvent(endEvent);
      state = STATE.NONE;
    }

    function onContextMenu(event) {
      if (scope.enabled === false) return;
      event.preventDefault();
    }

    function addPointer(event) {
      pointers.push(event);
    }

    function removePointer(event) {
      delete pointerPositions[event.pointerId];

      for (var i = 0; i < pointers.length; i++) {
        if (pointers[i].pointerId == event.pointerId) {
          pointers.splice(i, 1);
          return;
        }
      }
    }

    function trackPointer(event) {
      var position = pointerPositions[event.pointerId];

      if (position === undefined) {
        position = new three_module.Vector2();
        pointerPositions[event.pointerId] = position;
      }

      position.set(event.pageX, event.pageY);
    }

    function getSecondPointerPosition(event) {
      var pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
      return pointerPositions[pointer.pointerId];
    } // connect events


    if (domElement !== undefined) this.connect(domElement); // force an update at start

    this.update();
  }

} // This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
// This is very similar to OrbitControls, another set of touch behavior
//
//    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - left mouse, or arrow keys / touch: one-finger move


class MapControls extends (/* unused pure expression or super */ null && (OrbitControls)) {
  constructor(object, domElement) {
    super(object, domElement);
    this.screenSpacePanning = false; // pan orthogonal to world-space direction camera.up

    this.mouseButtons.LEFT = MOUSE.PAN;
    this.mouseButtons.RIGHT = MOUSE.ROTATE;
    this.touches.ONE = TOUCH.PAN;
    this.touches.TWO = TOUCH.DOLLY_ROTATE;
  }

}


;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/OrbitControls.js

var OrbitControls_excluded = ["makeDefault", "camera", "regress", "domElement", "enableDamping", "onChange", "onStart", "onEnd"];




var OrbitControls_OrbitControls = /*#__PURE__*/react.forwardRef((_ref, ref) => {
  var {
    makeDefault,
    camera,
    regress,
    domElement,
    enableDamping = true,
    onChange,
    onStart,
    onEnd
  } = _ref,
      restProps = (0,esm_objectWithoutProperties/* default */.Z)(_ref, OrbitControls_excluded);

  var invalidate = useThree(_ref2 => {
    var {
      invalidate
    } = _ref2;
    return invalidate;
  });
  var defaultCamera = useThree(_ref3 => {
    var {
      camera
    } = _ref3;
    return camera;
  });
  var gl = useThree(_ref4 => {
    var {
      gl
    } = _ref4;
    return gl;
  });
  var set = useThree(_ref5 => {
    var {
      set
    } = _ref5;
    return set;
  });
  var get = useThree(_ref6 => {
    var {
      get
    } = _ref6;
    return get;
  });
  var performance = useThree(_ref7 => {
    var {
      performance
    } = _ref7;
    return performance;
  });
  var explCamera = camera || defaultCamera;
  var explDomElement = domElement || gl.domElement;
  var controls = react.useMemo(() => new OrbitControls(explCamera), [explCamera]);
  useFrame(() => {
    if (controls.enabled) controls.update();
  });
  react.useEffect(() => {
    var callback = e => {
      invalidate();
      if (regress) performance.regress();
      if (onChange) onChange(e);
    };

    controls.connect(explDomElement);
    controls.addEventListener('change', callback);
    if (onStart) controls.addEventListener('start', onStart);
    if (onEnd) controls.addEventListener('end', onEnd);
    return () => {
      controls.removeEventListener('change', callback);
      if (onStart) controls.removeEventListener('start', onStart);
      if (onEnd) controls.removeEventListener('end', onEnd);
      controls.dispose();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChange, onStart, onEnd, regress, controls, invalidate]);
  react.useEffect(() => {
    if (makeDefault) {
      // @ts-expect-error new in @react-three/fiber@7.0.5
      var old = get().controls; // @ts-expect-error new in @react-three/fiber@7.0.5

      set({
        controls
      }); // @ts-expect-error new in @react-three/fiber@7.0.5

      return () => set({
        controls: old
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [makeDefault, controls]);
  return /*#__PURE__*/react.createElement("primitive", (0,esm_extends/* default */.Z)({
    ref: ref,
    object: controls,
    enableDamping: enableDamping
  }, restProps));
});

;// CONCATENATED MODULE: ./src/components/widgets/CanvasWidget.tsx

var CanvasWidget_excluded = ["showAxes"];




function Axis() {
  var lineProps = {
    lineWidth: 4,
    // In pixels (default)
    dashed: false // Default

  };
  var c = 1;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Line, Object.assign({
    points: [[0, 0, 0], [c, 0, 0]] // Array of points
    ,
    color: "blue"
  }, lineProps)), /*#__PURE__*/react.createElement(Line, Object.assign({
    points: [[0, 0, 0], [0, c, 0]] // Array of points
    ,
    color: "red"
  }, lineProps)), /*#__PURE__*/react.createElement(Line, Object.assign({
    points: [[0, 0, 0], [0, 0, c]] // Array of points
    ,
    color: "black"
  }, lineProps)));
}

function Cube(props) {
  var {
    color,
    rotator
  } = props;
  var meshRef = (0,react.useRef)(); // updates outside of react

  useFrame((state, delta) => {
    var {
      current: mesh
    } = meshRef;
    if (!mesh) return;
    var rot = rotator(delta, mesh.rotation);
    if (!rot) return;
    var {
      x,
      y,
      z
    } = rot;
    mesh.rotation.x = x;
    mesh.rotation.y = y;
    mesh.rotation.z = z;
  });
  return /*#__PURE__*/react.createElement("mesh", {
    ref: meshRef,
    receiveShadow: true,
    castShadow: true
  }, /*#__PURE__*/react.createElement("boxBufferGeometry", {
    attach: "geometry"
  }), /*#__PURE__*/react.createElement("meshPhongMaterial", {
    attach: "material",
    color: color
  }));
}

function CanvasWidget(props) {
  var {
    showAxes
  } = props,
      others = (0,objectWithoutProperties/* default */.Z)(props, CanvasWidget_excluded);

  return /*#__PURE__*/react.createElement(Canvas, {
    shadowMap: true,
    camera: {
      position: [-1, 0.5, 2],
      fov: 50
    }
  }, /*#__PURE__*/react.createElement("hemisphereLight", {
    intensity: 0.35
  }), /*#__PURE__*/react.createElement("spotLight", {
    position: [10, 10, 10],
    angle: 0.3,
    penumbra: 1,
    intensity: 2,
    castShadow: true
  }), /*#__PURE__*/react.createElement(Plane, {
    receiveShadow: true,
    castShadow: true,
    args: [5, 5],
    position: [0, -1, 0],
    rotation: [-Math.PI / 2, 0, 0]
  }), showAxes && /*#__PURE__*/react.createElement(Axis, null), /*#__PURE__*/react.createElement(Cube, others), /*#__PURE__*/react.createElement(OrbitControls_OrbitControls, null));
}

/***/ }),

/***/ 99531:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ColorButtons; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23729);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81794);
/* harmony import */ var _material_ui_icons_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32832);
/* harmony import */ var _material_ui_icons_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52935);





function ColorButtons(props) {
  var DEFAULT_COLORS = [0xff0000, 0xff00ff, 0x0000ff, 0x00ff00, 0xffff00, 0x020202];
  var {
    colors = DEFAULT_COLORS,
    color,
    onColorChange
  } = props;

  var handleSetColor = col => () => onColorChange(col);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, colors.map(col => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    key: col,
    item: true,
    xs: colors.length === 2 ? 4 : 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    style: {
      color: (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .rgbToHtmlColor */ .b)(col)
    },
    onClick: handleSetColor(col)
  }, col !== color ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null)))));
}

/***/ }),

/***/ 71598:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LEDMatrixWidget; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _SvgWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48059);
/* harmony import */ var _useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useFireKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8966);
/* harmony import */ var _hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68786);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2285);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81794);







function LEDMatrixWidget(props) {
  var {
    leds,
    brightness = 0.5,
    rows,
    columns,
    color = "primary",
    onChange
  } = props;
  var {
    0: currentLeds,
    1: setCurrentLeds
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(leds);
  var widgetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var {
    background,
    controlBackground,
    active
  } = (0,_useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(color);
  var navProps = (0,_hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(widgetRef.current); // grad new leds value

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => setCurrentLeds(leds), [leds]); // no data about layout

  if (rows === undefined || columns === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null); // compute size

  var minOpacity = 0.3;
  var pw = 8;
  var ph = 8;
  var ps = 0.5;
  var pr = 2;
  var m = 2;
  var w = columns * pw + (columns + 1) * m;
  var h = rows * ph + (rows + 1) * m;
  var columnspadded = columns + (8 - columns % 8);

  var handleLedClick = bitindex => ev => {
    if (ev && !ev.buttons) return;
    var newLeds = currentLeds.slice(0); // ensure that newLeds has the right size

    var n = rows * columnspadded;

    if (newLeds.length !== n) {
      if (newLeds.length > n) newLeds = newLeds.slice(0, n);else {
        var temp = new Uint8Array(n);
        temp.set(newLeds, 0);
        newLeds = temp;
      }
    }

    (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_4__/* .toggleBit */ .LA)(newLeds, bitindex);
    setCurrentLeds(newLeds);
    onChange === null || onChange === void 0 ? void 0 : onChange(newLeds);
  }; // add leds


  var render = () => {
    var boxEls = [];
    var ledEls = [];
    var onFill = active;
    var onStroke = undefined;
    var offFill = controlBackground;
    var offStroke = "transparent";
    var ledProps = {
      className: "clickeable",
      role: "button",
      tabIndex: 0
    };
    var y = m;

    for (var row = 0; row < rows; row++) {
      var x = m;

      for (var col = 0; col < columns; col++) {
        var box = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
          key: "b" + row + "-" + col,
          x: x,
          y: y,
          width: pw,
          height: ph,
          rx: pr,
          ry: pr,
          fill: controlBackground
        });
        boxEls.push(box);
        var bitindex = row * columnspadded + col;
        var byte = currentLeds === null || currentLeds === void 0 ? void 0 : currentLeds[bitindex >> 3];
        var bit = bitindex % 8;
        var on = 1 === (byte >> bit & 1);
        var handleClick = handleLedClick(bitindex);
        var fireClick = (0,_hooks_useFireKey__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(handleClick);
        ledEls.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", Object.assign({
          key: "l" + row + "-" + col,
          x: x,
          y: y,
          width: pw,
          height: ph,
          rx: pr,
          ry: pr,
          fill: on ? onFill : offFill,
          stroke: on ? onStroke : offStroke,
          strokeWidth: ps
        }, ledProps, {
          "aria-label": "led " + row + ", " + col + " " + (on ? "on" : "off"),
          onPointerDown: handleClick,
          onPointerEnter: handleClick,
          onKeyDown: fireClick
        })));
        x += pw + m;
      }

      y += ph + m;
    }

    return {
      boxEls,
      ledEls
    };
  };

  var {
    boxEls,
    ledEls
  } = render();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SvgWidget__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: h,
    rx: 2,
    ry: 2,
    fill: background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", Object.assign({
    ref: widgetRef
  }, navProps), boxEls, ledEls.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    opacity: minOpacity + brightness * (1 - minOpacity)
  }, ledEls)));
}

/***/ }),

/***/ 56931:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LEDWidget; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80838);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60650);
/* harmony import */ var _ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23461);
/* harmony import */ var _ColorButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99531);





 // https://academo.org/demos/wavelength-to-colour-relationship/#:~:text=According%20to%20your%20tool%2C%20light%20at%20405nm%20corresponds,%280%2C0%2C255%29%2C%20has%20a%20quite%20longer%20wavelength%20of%20440nm.

function nmToRGB(wavelength) {
  var Gamma = 0.8;
  var IntensityMax = 255;
  var factor, red, green, blue;

  if (wavelength >= 380 && wavelength < 440) {
    red = -(wavelength - 440) / (440 - 380);
    green = 0.0;
    blue = 1.0;
  } else if (wavelength >= 440 && wavelength < 490) {
    red = 0.0;
    green = (wavelength - 440) / (490 - 440);
    blue = 1.0;
  } else if (wavelength >= 490 && wavelength < 510) {
    red = 0.0;
    green = 1.0;
    blue = -(wavelength - 510) / (510 - 490);
  } else if (wavelength >= 510 && wavelength < 580) {
    red = (wavelength - 510) / (580 - 510);
    green = 1.0;
    blue = 0.0;
  } else if (wavelength >= 580 && wavelength < 645) {
    red = 1.0;
    green = -(wavelength - 645) / (645 - 580);
    blue = 0.0;
  } else if (wavelength >= 645 && wavelength < 781) {
    red = 1.0;
    green = 0.0;
    blue = 0.0;
  } else {
    red = 0.0;
    green = 0.0;
    blue = 0.0;
  } // Let the intensity fall off near the vision limits


  if (wavelength >= 380 && wavelength < 420) {
    factor = 0.3 + 0.7 * (wavelength - 380) / (420 - 380);
  } else if (wavelength >= 420 && wavelength < 701) {
    factor = 1.0;
  } else if (wavelength >= 701 && wavelength < 781) {
    factor = 0.3 + 0.7 * (780 - wavelength) / (780 - 700);
  } else {
    factor = 0.0;
  }

  if (red !== 0) {
    red = Math.round(IntensityMax * Math.pow(red * factor, Gamma));
  }

  if (green !== 0) {
    green = Math.round(IntensityMax * Math.pow(green * factor, Gamma));
  }

  if (blue !== 0) {
    blue = Math.round(IntensityMax * Math.pow(blue * factor, Gamma));
  }

  return (red & 0xff) << 16 | (green & 0xff) << 8 | blue & 0xff;
}

function LEDWidget(props) {
  var {
    color,
    waveLength,
    ledCount,
    ledColor,
    onLedColorChange,
    speed = 32,
    onSpeedChange
  } = props;
  var r = ledColor >> 16 & 0xff;
  var g = ledColor >> 8 & 0xff;
  var b = ledColor >> 0 & 0xff;
  var {
    active
  } = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(color); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var handleSpeedChange = (event, newSpeed) => onSpeedChange(newSpeed);

  var buttonColors = waveLength ? [nmToRGB(waveLength), 0x000000] : [0xff0000, 0xff00ff, 0x0000ff, 0x00ff00, 0xffff00, 0x000000];

  var speedValueLabelFormat = newValue => newValue == 0 ? "100%" : (newValue / 0xff * 100 | 0) + "%";

  var opacity = !r && !b && !g ? 0 : 1;
  var fill = "rgb(" + r + ", " + g + ", " + b + ")";
  var ln = Math.min(ledCount || 1, 5);
  var lw = 15.5;
  var m = 1;
  var w = (lw + m) * ln;
  var h = 42;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    container: true,
    spacing: 1,
    alignItems: "center",
    alignContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    width: w,
    height: h,
    size: "5em"
  }, Array(ln).fill(0).map((_, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    key: i,
    transform: "translate(" + i * (lw + m) + ", 0)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#999",
    d: "M14.2 13V7.1C14.2 3.2 11 0 7.1 0 3.2 0 0 3.2 0 7.1v13.7c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.2-.5-2.3-1.3-3.2z",
    opacity: ".65"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: active,
    d: "M2.8 17.5l-1.2-1.4h1L5 17.5v18.6c0 .3-.5.5-1.1.5-.6 0-1.1-.2-1.1-.5zm10.1 6.7c0-.7-1.1-1.3-2.1-1.8-.4-.2-1.2-.6-1.2-.9v-3.4l2.5-2h-.9l-3.7 2v3.5c0 .7.9 1.2 1.9 1.7.4.2 1.3.8 1.3 1.1v16.9c0 .4.5.7 1.1.7.6 0 1.1-.3 1.1-.7z",
    stroke: "#8c8c8c",
    strokeWidth: "1px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    opacity: opacity,
    fill: fill,
    d: "M14.2 13V7.1C14.2 3.2 11 0 7.1 0 3.2 0 0 3.2 0 7.1v13.7c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.2-.5-2.3-1.3-3.2z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#d1d1d1",
    d: "M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v4.6c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.1-.5-2.2-1.3-3.1z",
    opacity: ".9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#e6e6e6",
    d: "M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v4.6c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.1-.5-2.2-1.3-3.1z",
    opacity: ".7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#e6e6e6",
    d: "M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v3.1c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9 0-1.1-.5-2.2-1.3-3.1z",
    opacity: ".25"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "-7.2",
    cy: "-16.1",
    fill: "#e6e6e6",
    opacity: ".25",
    rx: "7.1",
    ry: "5",
    transform: "scale(-1)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse", {
    cx: "-7.2",
    cy: "-16.1",
    fill: "#e6e6e6",
    opacity: ".25",
    rx: "7.1",
    ry: "5",
    transform: "scale(-1)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    opacity: ".61",
    fill: "#fff",
    d: "M7.2 22c-4.3 0-6.1-2-6.1-2l.7-.7S3.4 21 7.2 21c2.4.1 4.7-.9 6.3-2.7l.8.6C12.4 21 9.9 22.1 7.2 22z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    opacity: ".61",
    fill: "#fff",
    d: "M2.6 3.2C1.5 4.3.9 5.8.9 7.4v10.3l1.9 1.5V8.8c-.9-2.8-.3-4.2.7-5.2-.3-.1-.6-.2-.9-.4zm7.3-1.6l-.3.9c1.5.7 2.6 2.1 2.8 3.7h1c-.3-2-1.6-3.7-3.5-4.6z"
  }))))), onLedColorChange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ColorButtons__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    colors: buttonColors,
    color: ledColor,
    onColorChange: onLedColorChange
  })), onSpeedChange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    label: "speed",
    min: 0,
    step: 5,
    max: 255,
    value: speed,
    valueLabelDisplay: "auto",
    valueLabelFormat: speedValueLabelFormat,
    onChange: handleSpeedChange
  })));
}

/***/ }),

/***/ 28937:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PianoWidget; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(33287);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat = __webpack_require__(84944);
// EXTERNAL MODULE: ./node_modules/just-range/index.js
var just_range = __webpack_require__(62022);
var just_range_default = /*#__PURE__*/__webpack_require__.n(just_range);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(75900);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/lodash.difference/index.js
var lodash_difference = __webpack_require__(50557);
var lodash_difference_default = /*#__PURE__*/__webpack_require__.n(lodash_difference);
;// CONCATENATED MODULE: ./node_modules/react-piano/dist/react-piano.esm.js







function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var SORTED_PITCHES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
var ACCIDENTAL_PITCHES = ['Db', 'Eb', 'Gb', 'Ab', 'Bb'];
var PITCH_INDEXES = {
  C: 0,
  'C#': 1,
  Db: 1,
  D: 2,
  'D#': 3,
  Eb: 3,
  E: 4,
  F: 5,
  'F#': 6,
  Gb: 6,
  G: 7,
  'G#': 8,
  Ab: 8,
  A: 9,
  'A#': 10,
  Bb: 10,
  B: 11
};
var MIDI_NUMBER_C0 = 12;
var MIN_MIDI_NUMBER = MIDI_NUMBER_C0;
var MAX_MIDI_NUMBER = 127;
var NOTE_REGEX = /([a-g])([#b]?)(\d+)/;
var NOTES_IN_OCTAVE = 12; // Converts string notes in scientific pitch notation to a MIDI number, or null.
//
// Example: "c#0" => 13, "eb5" => 75, "abc" => null
//
// References:
// - http://www.flutopedia.com/octave_notation.htm
// - https://github.com/danigb/tonal/blob/master/packages/note/index.js

function fromNote(note) {
  if (!note) {
    throw Error('Invalid note argument');
  }

  var match = NOTE_REGEX.exec(note.toLowerCase());

  if (!match) {
    throw Error('Invalid note argument');
  }

  var _match = _slicedToArray(match, 4),
      letter = _match[1],
      accidental = _match[2],
      octave = _match[3];

  var pitchName = "".concat(letter.toUpperCase()).concat(accidental);
  var pitchIndex = PITCH_INDEXES[pitchName];

  if (pitchIndex == null) {
    throw Error('Invalid note argument');
  }

  return MIDI_NUMBER_C0 + pitchIndex + NOTES_IN_OCTAVE * parseInt(octave, 10);
} //
// Build cache for getAttributes
//


function buildMidiNumberAttributes(midiNumber) {
  var pitchIndex = (midiNumber - MIDI_NUMBER_C0) % NOTES_IN_OCTAVE;
  var octave = Math.floor((midiNumber - MIDI_NUMBER_C0) / NOTES_IN_OCTAVE);
  var pitchName = SORTED_PITCHES[pitchIndex];
  return {
    note: "".concat(pitchName).concat(octave),
    pitchName: pitchName,
    octave: octave,
    midiNumber: midiNumber,
    isAccidental: ACCIDENTAL_PITCHES.includes(pitchName)
  };
}

function buildMidiNumberAttributesCache() {
  return just_range_default()(MIN_MIDI_NUMBER, MAX_MIDI_NUMBER + 1).reduce(function (cache, midiNumber) {
    cache[midiNumber] = buildMidiNumberAttributes(midiNumber);
    return cache;
  }, {});
}

var midiNumberAttributesCache = buildMidiNumberAttributesCache(); // Returns an object containing various attributes for a given MIDI number.
// Throws error for invalid midiNumbers.

function getAttributes(midiNumber) {
  var attrs = midiNumberAttributesCache[midiNumber];

  if (!attrs) {
    throw Error('Invalid MIDI number');
  }

  return attrs;
} // Returns all MIDI numbers corresponding to natural notes, e.g. C and not C# or Bb.


var NATURAL_MIDI_NUMBERS = just_range_default()(MIN_MIDI_NUMBER, MAX_MIDI_NUMBER + 1).filter(function (midiNumber) {
  return !getAttributes(midiNumber).isAccidental;
});
var MidiNumbers = {
  fromNote: fromNote,
  getAttributes: getAttributes,
  MIN_MIDI_NUMBER: MIN_MIDI_NUMBER,
  MAX_MIDI_NUMBER: MAX_MIDI_NUMBER,
  NATURAL_MIDI_NUMBERS: NATURAL_MIDI_NUMBERS
};

var Key = /*#__PURE__*/function (_React$Component) {
  _inherits(Key, _React$Component);

  function Key() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Key);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Key)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onPlayNoteInput", function () {
      _this.props.onPlayNoteInput(_this.props.midiNumber);
    });

    _defineProperty(_assertThisInitialized(_this), "onStopNoteInput", function () {
      _this.props.onStopNoteInput(_this.props.midiNumber);
    });

    return _this;
  }

  _createClass(Key, [{
    key: "getAbsoluteKeyPosition",
    // Key position is represented by the number of natural key widths from the left
    value: function getAbsoluteKeyPosition(midiNumber) {
      var OCTAVE_WIDTH = 7;

      var _MidiNumbers$getAttri = MidiNumbers.getAttributes(midiNumber),
          octave = _MidiNumbers$getAttri.octave,
          pitchName = _MidiNumbers$getAttri.pitchName;

      var pitchPosition = this.props.pitchPositions[pitchName];
      var octavePosition = OCTAVE_WIDTH * octave;
      return pitchPosition + octavePosition;
    }
  }, {
    key: "getRelativeKeyPosition",
    value: function getRelativeKeyPosition(midiNumber) {
      return this.getAbsoluteKeyPosition(midiNumber) - this.getAbsoluteKeyPosition(this.props.noteRange.first);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          naturalKeyWidth = _this$props.naturalKeyWidth,
          accidentalWidthRatio = _this$props.accidentalWidthRatio,
          midiNumber = _this$props.midiNumber,
          gliss = _this$props.gliss,
          useTouchEvents = _this$props.useTouchEvents,
          accidental = _this$props.accidental,
          active = _this$props.active,
          disabled = _this$props.disabled,
          children = _this$props.children; // Need to conditionally include/exclude handlers based on useTouchEvents,
      // because otherwise mobile taps double fire events.

      return react.createElement("div", {
        className: classnames_default()('ReactPiano__Key', {
          'ReactPiano__Key--accidental': accidental,
          'ReactPiano__Key--natural': !accidental,
          'ReactPiano__Key--disabled': disabled,
          'ReactPiano__Key--active': active
        }),
        style: {
          left: ratioToPercentage(this.getRelativeKeyPosition(midiNumber) * naturalKeyWidth),
          width: ratioToPercentage(accidental ? accidentalWidthRatio * naturalKeyWidth : naturalKeyWidth)
        },
        onMouseDown: useTouchEvents ? null : this.onPlayNoteInput,
        onMouseUp: useTouchEvents ? null : this.onStopNoteInput,
        onMouseEnter: gliss ? this.onPlayNoteInput : null,
        onMouseLeave: this.onStopNoteInput,
        onTouchStart: useTouchEvents ? this.onPlayNoteInput : null,
        onTouchCancel: useTouchEvents ? this.onStopNoteInput : null,
        onTouchEnd: useTouchEvents ? this.onStopNoteInput : null
      }, react.createElement("div", {
        className: "ReactPiano__NoteLabelContainer"
      }, children));
    }
  }]);

  return Key;
}(react.Component);

_defineProperty(Key, "propTypes", {
  midiNumber: (prop_types_default()).number.isRequired,
  naturalKeyWidth: (prop_types_default()).number.isRequired,
  // Width as a ratio between 0 and 1
  gliss: (prop_types_default()).bool.isRequired,
  useTouchEvents: (prop_types_default()).bool.isRequired,
  accidental: (prop_types_default()).bool.isRequired,
  active: (prop_types_default()).bool.isRequired,
  disabled: (prop_types_default()).bool.isRequired,
  onPlayNoteInput: (prop_types_default()).func.isRequired,
  onStopNoteInput: (prop_types_default()).func.isRequired,
  accidentalWidthRatio: (prop_types_default()).number.isRequired,
  pitchPositions: (prop_types_default()).object.isRequired,
  children: (prop_types_default()).node
});

_defineProperty(Key, "defaultProps", {
  accidentalWidthRatio: 0.65,
  pitchPositions: {
    C: 0,
    Db: 0.55,
    D: 1,
    Eb: 1.8,
    E: 2,
    F: 3,
    Gb: 3.5,
    G: 4,
    Ab: 4.7,
    A: 5,
    Bb: 5.85,
    B: 6
  }
});

function ratioToPercentage(ratio) {
  return "".concat(ratio * 100, "%");
}

var Keyboard = /*#__PURE__*/function (_React$Component) {
  _inherits(Keyboard, _React$Component);

  function Keyboard() {
    _classCallCheck(this, Keyboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(Keyboard).apply(this, arguments));
  }

  _createClass(Keyboard, [{
    key: "getMidiNumbers",
    // Range of midi numbers on keyboard
    value: function getMidiNumbers() {
      return just_range_default()(this.props.noteRange.first, this.props.noteRange.last + 1);
    }
  }, {
    key: "getNaturalKeyCount",
    value: function getNaturalKeyCount() {
      return this.getMidiNumbers().filter(function (number) {
        var _MidiNumbers$getAttri = MidiNumbers.getAttributes(number),
            isAccidental = _MidiNumbers$getAttri.isAccidental;

        return !isAccidental;
      }).length;
    } // Returns a ratio between 0 and 1

  }, {
    key: "getNaturalKeyWidth",
    value: function getNaturalKeyWidth() {
      return 1 / this.getNaturalKeyCount();
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.props.width ? this.props.width : '100%';
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      if (!this.props.width) {
        return '100%';
      }

      var keyWidth = this.props.width * this.getNaturalKeyWidth();
      return "".concat(keyWidth / this.props.keyWidthToHeight, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var naturalKeyWidth = this.getNaturalKeyWidth();
      return react.createElement("div", {
        className: classnames_default()('ReactPiano__Keyboard', this.props.className),
        style: {
          width: this.getWidth(),
          height: this.getHeight()
        }
      }, this.getMidiNumbers().map(function (midiNumber) {
        var _MidiNumbers$getAttri2 = MidiNumbers.getAttributes(midiNumber),
            note = _MidiNumbers$getAttri2.note,
            isAccidental = _MidiNumbers$getAttri2.isAccidental;

        var isActive = !_this.props.disabled && _this.props.activeNotes.includes(midiNumber);

        return react.createElement(Key, {
          naturalKeyWidth: naturalKeyWidth,
          midiNumber: midiNumber,
          noteRange: _this.props.noteRange,
          active: isActive,
          accidental: isAccidental,
          disabled: _this.props.disabled,
          onPlayNoteInput: _this.props.onPlayNoteInput,
          onStopNoteInput: _this.props.onStopNoteInput,
          gliss: _this.props.gliss,
          useTouchEvents: _this.props.useTouchEvents,
          key: midiNumber
        }, _this.props.disabled ? null : _this.props.renderNoteLabel({
          isActive: isActive,
          isAccidental: isAccidental,
          midiNumber: midiNumber
        }));
      }));
    }
  }]);

  return Keyboard;
}(react.Component);

_defineProperty(Keyboard, "propTypes", {
  noteRange: noteRangePropType,
  activeNotes: prop_types_default().arrayOf((prop_types_default()).number),
  onPlayNoteInput: (prop_types_default()).func.isRequired,
  onStopNoteInput: (prop_types_default()).func.isRequired,
  renderNoteLabel: (prop_types_default()).func.isRequired,
  keyWidthToHeight: (prop_types_default()).number.isRequired,
  className: (prop_types_default()).string,
  disabled: (prop_types_default()).bool,
  gliss: (prop_types_default()).bool,
  useTouchEvents: (prop_types_default()).bool,
  // If width is not provided, must have fixed width and height in parent container
  width: (prop_types_default()).number
});

_defineProperty(Keyboard, "defaultProps", {
  disabled: false,
  gliss: false,
  useTouchEvents: false,
  keyWidthToHeight: 0.33,
  renderNoteLabel: function renderNoteLabel() {}
});

function isNaturalMidiNumber(value) {
  if (typeof value !== 'number') {
    return false;
  }

  return MidiNumbers.NATURAL_MIDI_NUMBERS.includes(value);
}

function noteRangePropType(props, propName, componentName) {
  var _props$propName = props[propName],
      first = _props$propName.first,
      last = _props$propName.last;

  if (!first || !last) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, " must be an object with .first and .last values."));
  }

  if (!isNaturalMidiNumber(first) || !isNaturalMidiNumber(last)) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, " values must be valid MIDI numbers, and should not be accidentals (sharp or flat notes)."));
  }

  if (first >= last) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, ".first must be smaller than ").concat(propName, ".last."));
  }
}

var ControlledPiano = /*#__PURE__*/function (_React$Component) {
  _inherits(ControlledPiano, _React$Component);

  function ControlledPiano() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ControlledPiano);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ControlledPiano)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMouseDown: false,
      useTouchEvents: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleNoteChanges", function (_ref) {
      var prevActiveNotes = _ref.prevActiveNotes,
          nextActiveNotes = _ref.nextActiveNotes;

      if (_this.props.disabled) {
        return;
      }

      var notesStopped = lodash_difference_default()(prevActiveNotes, nextActiveNotes);
      var notesStarted = lodash_difference_default()(nextActiveNotes, prevActiveNotes);
      notesStarted.forEach(function (midiNumber) {
        _this.props.playNote(midiNumber);
      });
      notesStopped.forEach(function (midiNumber) {
        _this.props.stopNote(midiNumber);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMidiNumberForKey", function (key) {
      if (!_this.props.keyboardShortcuts) {
        return null;
      }

      var shortcut = _this.props.keyboardShortcuts.find(function (sh) {
        return sh.key === key;
      });

      return shortcut && shortcut.midiNumber;
    });

    _defineProperty(_assertThisInitialized(_this), "getKeyForMidiNumber", function (midiNumber) {
      if (!_this.props.keyboardShortcuts) {
        return null;
      }

      var shortcut = _this.props.keyboardShortcuts.find(function (sh) {
        return sh.midiNumber === midiNumber;
      });

      return shortcut && shortcut.key;
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      // Don't conflict with existing combinations like ctrl + t
      if (event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }

      var midiNumber = _this.getMidiNumberForKey(event.key);

      if (midiNumber) {
        _this.onPlayNoteInput(midiNumber);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (event) {
      // This *should* also check for event.ctrlKey || event.metaKey || event.ShiftKey like onKeyDown does,
      // but at least on Mac Chrome, when mashing down many alphanumeric keystrokes at once,
      // ctrlKey is fired unexpectedly, which would cause onStopNote to NOT be fired, which causes problematic
      // lingering notes. Since it's fairly safe to call onStopNote even when not necessary,
      // the ctrl/meta/shift check is removed to fix that issue.
      var midiNumber = _this.getMidiNumberForKey(event.key);

      if (midiNumber) {
        _this.onStopNoteInput(midiNumber);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayNoteInput", function (midiNumber) {
      if (_this.props.disabled) {
        return;
      } // Pass in previous activeNotes for recording functionality


      _this.props.onPlayNoteInput(midiNumber, _this.props.activeNotes);
    });

    _defineProperty(_assertThisInitialized(_this), "onStopNoteInput", function (midiNumber) {
      if (_this.props.disabled) {
        return;
      } // Pass in previous activeNotes for recording functionality


      _this.props.onStopNoteInput(midiNumber, _this.props.activeNotes);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function () {
      _this.setState({
        isMouseDown: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      _this.setState({
        isMouseDown: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function () {
      _this.setState({
        useTouchEvents: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderNoteLabel", function (_ref2) {
      var midiNumber = _ref2.midiNumber,
          isActive = _ref2.isActive,
          isAccidental = _ref2.isAccidental;

      var keyboardShortcut = _this.getKeyForMidiNumber(midiNumber);

      return _this.props.renderNoteLabel({
        keyboardShortcut: keyboardShortcut,
        midiNumber: midiNumber,
        isActive: isActive,
        isAccidental: isAccidental
      });
    });

    return _this;
  }

  _createClass(ControlledPiano, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('keydown', this.onKeyDown);
      window.addEventListener('keyup', this.onKeyUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.onKeyDown);
      window.removeEventListener('keyup', this.onKeyUp);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.activeNotes !== prevProps.activeNotes) {
        this.handleNoteChanges({
          prevActiveNotes: prevProps.activeNotes || [],
          nextActiveNotes: this.props.activeNotes || []
        });
      }
    } // This function is responsible for diff'ing activeNotes
    // and playing or stopping notes accordingly.

  }, {
    key: "render",
    value: function render() {
      return react.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        },
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchStart: this.onTouchStart,
        "data-testid": "container"
      }, react.createElement(Keyboard, {
        noteRange: this.props.noteRange,
        onPlayNoteInput: this.onPlayNoteInput,
        onStopNoteInput: this.onStopNoteInput,
        activeNotes: this.props.activeNotes,
        className: this.props.className,
        disabled: this.props.disabled,
        width: this.props.width,
        keyWidthToHeight: this.props.keyWidthToHeight,
        gliss: this.state.isMouseDown,
        useTouchEvents: this.state.useTouchEvents,
        renderNoteLabel: this.renderNoteLabel
      }));
    }
  }]);

  return ControlledPiano;
}(react.Component);

_defineProperty(ControlledPiano, "propTypes", {
  noteRange: (prop_types_default()).object.isRequired,
  activeNotes: prop_types_default().arrayOf((prop_types_default()).number.isRequired).isRequired,
  playNote: (prop_types_default()).func.isRequired,
  stopNote: (prop_types_default()).func.isRequired,
  onPlayNoteInput: (prop_types_default()).func.isRequired,
  onStopNoteInput: (prop_types_default()).func.isRequired,
  renderNoteLabel: (prop_types_default()).func.isRequired,
  className: (prop_types_default()).string,
  disabled: (prop_types_default()).bool,
  width: (prop_types_default()).number,
  keyWidthToHeight: (prop_types_default()).number,
  keyboardShortcuts: prop_types_default().arrayOf(prop_types_default().shape({
    key: (prop_types_default()).string.isRequired,
    midiNumber: (prop_types_default()).number.isRequired
  }))
});

_defineProperty(ControlledPiano, "defaultProps", {
  renderNoteLabel: function renderNoteLabel(_ref3) {
    var keyboardShortcut = _ref3.keyboardShortcut,
        midiNumber = _ref3.midiNumber,
        isActive = _ref3.isActive,
        isAccidental = _ref3.isAccidental;
    return keyboardShortcut ? react.createElement("div", {
      className: classnames_default()('ReactPiano__NoteLabel', {
        'ReactPiano__NoteLabel--active': isActive,
        'ReactPiano__NoteLabel--accidental': isAccidental,
        'ReactPiano__NoteLabel--natural': !isAccidental
      })
    }, keyboardShortcut) : null;
  }
});

var Piano = /*#__PURE__*/function (_React$Component) {
  _inherits(Piano, _React$Component);

  function Piano() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Piano);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Piano)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeNotes: _this.props.activeNotes || []
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlayNoteInput", function (midiNumber) {
      _this.setState(function (prevState) {
        // Need to be handled inside setState in order to set prevActiveNotes without
        // race conditions.
        if (_this.props.onPlayNoteInput) {
          _this.props.onPlayNoteInput(midiNumber, {
            prevActiveNotes: prevState.activeNotes
          });
        } // Don't append note to activeNotes if it's already present


        if (prevState.activeNotes.includes(midiNumber)) {
          return null;
        }

        return {
          activeNotes: prevState.activeNotes.concat(midiNumber)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStopNoteInput", function (midiNumber) {
      _this.setState(function (prevState) {
        // Need to be handled inside setState in order to set prevActiveNotes without
        // race conditions.
        if (_this.props.onStopNoteInput) {
          _this.props.onStopNoteInput(midiNumber, {
            prevActiveNotes: _this.state.activeNotes
          });
        }

        return {
          activeNotes: prevState.activeNotes.filter(function (note) {
            return midiNumber !== note;
          })
        };
      });
    });

    return _this;
  }

  _createClass(Piano, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Make activeNotes "controllable" by using internal
      // state by default, but allowing prop overrides.
      if (prevProps.activeNotes !== this.props.activeNotes && this.state.activeNotes !== this.props.activeNotes) {
        this.setState({
          activeNotes: this.props.activeNotes || []
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeNotes = _this$props.activeNotes,
          onPlayNoteInput = _this$props.onPlayNoteInput,
          onStopNoteInput = _this$props.onStopNoteInput,
          otherProps = _objectWithoutProperties(_this$props, ["activeNotes", "onPlayNoteInput", "onStopNoteInput"]);

      return react.createElement(ControlledPiano, _extends({
        activeNotes: this.state.activeNotes,
        onPlayNoteInput: this.handlePlayNoteInput,
        onStopNoteInput: this.handleStopNoteInput
      }, otherProps));
    }
  }]);

  return Piano;
}(react.Component);

_defineProperty(Piano, "propTypes", {
  noteRange: (prop_types_default()).object.isRequired,
  activeNotes: prop_types_default().arrayOf((prop_types_default()).number.isRequired),
  playNote: (prop_types_default()).func.isRequired,
  stopNote: (prop_types_default()).func.isRequired,
  onPlayNoteInput: (prop_types_default()).func,
  onStopNoteInput: (prop_types_default()).func,
  renderNoteLabel: (prop_types_default()).func,
  className: (prop_types_default()).string,
  disabled: (prop_types_default()).bool,
  width: (prop_types_default()).number,
  keyWidthToHeight: (prop_types_default()).number,
  keyboardShortcuts: prop_types_default().arrayOf(prop_types_default().shape({
    key: (prop_types_default()).string.isRequired,
    midiNumber: (prop_types_default()).number.isRequired
  }))
});

function createKeyboardShortcuts(_ref) {
  var firstNote = _ref.firstNote,
      lastNote = _ref.lastNote,
      keyboardConfig = _ref.keyboardConfig;
  var currentMidiNumber = firstNote;
  var naturalKeyIndex = 0;
  var keyboardShortcuts = [];

  while ( // There are still keys to be assigned
  naturalKeyIndex < keyboardConfig.length && // Note to be assigned does not surpass range
  currentMidiNumber <= lastNote) {
    var key = keyboardConfig[naturalKeyIndex];

    var _MidiNumbers$getAttri = MidiNumbers.getAttributes(currentMidiNumber),
        isAccidental = _MidiNumbers$getAttri.isAccidental;

    if (isAccidental) {
      keyboardShortcuts.push({
        key: key.flat,
        midiNumber: currentMidiNumber
      });
    } else {
      keyboardShortcuts.push({
        key: key.natural,
        midiNumber: currentMidiNumber
      });
      naturalKeyIndex += 1;
    }

    currentMidiNumber += 1;
  }

  return keyboardShortcuts;
}

var KeyboardShortcuts = {
  create: createKeyboardShortcuts,
  // Preset configurations
  BOTTOM_ROW: [{
    natural: 'z',
    flat: 'a',
    sharp: 's'
  }, {
    natural: 'x',
    flat: 's',
    sharp: 'd'
  }, {
    natural: 'c',
    flat: 'd',
    sharp: 'f'
  }, {
    natural: 'v',
    flat: 'f',
    sharp: 'g'
  }, {
    natural: 'b',
    flat: 'g',
    sharp: 'h'
  }, {
    natural: 'n',
    flat: 'h',
    sharp: 'j'
  }, {
    natural: 'm',
    flat: 'j',
    sharp: 'k'
  }, {
    natural: ',',
    flat: 'k',
    sharp: 'l'
  }, {
    natural: '.',
    flat: 'l',
    sharp: ';'
  }, {
    natural: '/',
    flat: ';',
    sharp: "'"
  }],
  HOME_ROW: [{
    natural: 'a',
    flat: 'q',
    sharp: 'w'
  }, {
    natural: 's',
    flat: 'w',
    sharp: 'e'
  }, {
    natural: 'd',
    flat: 'e',
    sharp: 'r'
  }, {
    natural: 'f',
    flat: 'r',
    sharp: 't'
  }, {
    natural: 'g',
    flat: 't',
    sharp: 'y'
  }, {
    natural: 'h',
    flat: 'y',
    sharp: 'u'
  }, {
    natural: 'j',
    flat: 'u',
    sharp: 'i'
  }, {
    natural: 'k',
    flat: 'i',
    sharp: 'o'
  }, {
    natural: 'l',
    flat: 'o',
    sharp: 'p'
  }, {
    natural: ';',
    flat: 'p',
    sharp: '['
  }, {
    natural: "'",
    flat: '[',
    sharp: ']'
  }],
  QWERTY_ROW: [{
    natural: 'q',
    flat: '1',
    sharp: '2'
  }, {
    natural: 'w',
    flat: '2',
    sharp: '3'
  }, {
    natural: 'e',
    flat: '3',
    sharp: '4'
  }, {
    natural: 'r',
    flat: '4',
    sharp: '5'
  }, {
    natural: 't',
    flat: '5',
    sharp: '6'
  }, {
    natural: 'y',
    flat: '6',
    sharp: '7'
  }, {
    natural: 'u',
    flat: '7',
    sharp: '8'
  }, {
    natural: 'i',
    flat: '8',
    sharp: '9'
  }, {
    natural: 'o',
    flat: '9',
    sharp: '0'
  }, {
    natural: 'p',
    flat: '0',
    sharp: '-'
  }, {
    natural: '[',
    flat: '-',
    sharp: '='
  }]
};

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./src/components/widgets/PianoWidget.tsx





function PianoWidget(props) {
  var {
    playTone
  } = props;
  var firstNote = MidiNumbers.fromNote("c4");
  var lastNote = MidiNumbers.fromNote("f5");
  var keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW
  });
  var midiFrequencies = (0,react.useMemo)(() => new Array(127).fill(0).map((_, x) => 440 / 32 * Math.pow(2, (x - 9) / 12)), []);
  var pianoId = (0,react_use_id_hook_esm/* useId */.Me)();
  return /*#__PURE__*/react.createElement(Box/* default */.Z, {
    mb: 1,
    mt: 1
  }, /*#__PURE__*/react.createElement(Piano, {
    id: pianoId,
    width: 400,
    noteRange: {
      first: firstNote,
      last: lastNote
    },
    playNote: midiNumber => {
      var frequency = midiFrequencies[midiNumber];
      playTone(frequency);
    },
    stopNote: () => {// not supported
    },
    keyboardShortcuts: keyboardShortcuts
  }));
}

/***/ }),

/***/ 95926:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEventCount; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);


function useEventCount(event) {
  var {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((event === null || event === void 0 ? void 0 : event.count) || 0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => event === null || event === void 0 ? void 0 : event.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver, () => {
    setCount(event.count);
  }), [event]);
  return count;
}

/***/ })

}]);
//# sourceMappingURL=c8f7fe3b0e41be846d5687592cf2018ff6e22687-9c5aa79dbf1584ada0b2.js.map