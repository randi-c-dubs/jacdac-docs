"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6080],{

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

/***/ 49400:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47895);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34621);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81664);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37595);
/* harmony import */ var _Table_TableContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83604);
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78847);










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.typography.body2, {
      display: 'table-cell',
      verticalAlign: 'inherit',
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: "1px solid\n    ".concat(theme.palette.type === 'light' ? (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .lighten */ .$n)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .alpha */ .Fq)(theme.palette.divider, 1), 0.88) : (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .darken */ ._j)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .alpha */ .Fq)(theme.palette.divider, 1), 0.68)),
      textAlign: 'left',
      padding: 16
    }),

    /* Styles applied to the root element if `variant="head"` or `context.table.head`. */
    head: {
      color: theme.palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    },

    /* Styles applied to the root element if `variant="body"` or `context.table.body`. */
    body: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
    footer: {
      color: theme.palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: '6px 24px 6px 16px',
      '&:last-child': {
        paddingRight: 16
      },
      '&$paddingCheckbox': {
        width: 24,
        // prevent the checkbox column from growing
        padding: '0 12px 0 16px',
        '&:last-child': {
          paddingLeft: 12,
          paddingRight: 16
        },
        '& > *': {
          padding: 0
        }
      }
    },

    /* Styles applied to the root element if `padding="checkbox"`. */
    paddingCheckbox: {
      width: 48,
      // prevent the checkbox column from growing
      padding: '0 0 0 4px',
      '&:last-child': {
        paddingLeft: 0,
        paddingRight: 4
      }
    },

    /* Styles applied to the root element if `padding="none"`. */
    paddingNone: {
      padding: 0,
      '&:last-child': {
        padding: 0
      }
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `context.table.stickyHeader={true}`. */
    stickyHeader: {
      position: 'sticky',
      top: 0,
      left: 0,
      zIndex: 2,
      backgroundColor: theme.palette.background.default
    }
  };
};
/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */

var TableCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TableCell(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      component = props.component,
      paddingProp = props.padding,
      scopeProp = props.scope,
      sizeProp = props.size,
      sortDirection = props.sortDirection,
      variantProp = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(props, ["align", "classes", "className", "component", "padding", "scope", "size", "sortDirection", "variant"]);

  var table = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_TableContext__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);
  var tablelvl2 = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z);
  var isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  var role;
  var Component;

  if (component) {
    Component = component;
    role = isHeadCell ? 'columnheader' : 'cell';
  } else {
    Component = isHeadCell ? 'th' : 'td';
  }

  var scope = scopeProp;

  if (!scope && isHeadCell) {
    scope = 'col';
  }

  var padding = paddingProp || (table && table.padding ? table.padding : 'normal');
  var size = sizeProp || (table && table.size ? table.size : 'medium');
  var variant = variantProp || tablelvl2 && tablelvl2.variant;
  var ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(classes.root, classes[variant], className, align !== 'inherit' && classes["align".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(align))], padding !== 'normal' && classes["padding".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(padding))], size !== 'medium' && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(size))], variant === 'head' && table && table.stickyHeader && classes.stickyHeader),
    "aria-sort": ariaSort,
    role: role,
    scope: scope
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(styles, {
  name: 'MuiTableCell'
})(TableCell));

/***/ }),

/***/ 96080:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ModelSummaryDropdown; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(74601);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
var AccordionSummary = __webpack_require__(95371);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js
var AccordionDetails = __webpack_require__(37171);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(47739);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(49683);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(4093);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(99395);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(49400);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(86300);
// EXTERNAL MODULE: ./src/components/model-editor/MBModel.ts
var MBModel = __webpack_require__(73102);
;// CONCATENATED MODULE: ./src/components/model-editor/components/ModelSummary.tsx



function ModelSummary(props) {
  var {
    model,
    dataset
  } = props;
  return /*#__PURE__*/react.createElement(react.Fragment, null, !!dataset && /*#__PURE__*/react.createElement(react.Fragment, null, " ", dataset.summary.map((line, lineIdx) => {
    return /*#__PURE__*/react.createElement("span", {
      key: "dataset-summary-" + lineIdx
    }, " ", line, " ", /*#__PURE__*/react.createElement("br", null));
  }), " "), model.summary.map((line, lineIdx) => {
    return /*#__PURE__*/react.createElement("span", {
      style: {
        whiteSpace: "pre-wrap"
      },
      key: "model-summary-" + lineIdx
    }, line, /*#__PURE__*/react.createElement("br", null));
  }), !!model.modelStats && /*#__PURE__*/react.createElement(Table/* default */.Z, null, /*#__PURE__*/react.createElement(TableHead/* default */.Z, null, /*#__PURE__*/react.createElement(TableRow/* default */.Z, null, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Layer"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "Shape"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "# of Params"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "# of Bytes (%)"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "# of Cycles (%)"))), /*#__PURE__*/react.createElement(TableBody/* default */.Z, null, /*#__PURE__*/react.createElement(TableRow/* default */.Z, {
    key: "input"
  }, /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    component: "th",
    scope: "row"
  }, "INPUT"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "[", model.inputShape.join(", "), "]"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  })), model.modelStats.layers.map(layer => /*#__PURE__*/react.createElement(TableRow/* default */.Z, {
    key: layer.name
  }, /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    component: "th",
    scope: "row"
  }, layer.name), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "[", layer.outputShape.join(", "), "]"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, layer.weightBytes / 2), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, layer.weightBytes + layer.codeBytes, " (", ((layer.weightBytes + layer.codeBytes) * 100 / (model.modelStats.total.weightBytes + model.modelStats.total.codeBytes)).toPrecision(3), "%)"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, layer.optimizedCycles, " (", (layer.optimizedCycles * 100 / model.modelStats.total.optimizedCycles).toPrecision(3), "%)"))), /*#__PURE__*/react.createElement(TableRow/* default */.Z, null, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "TOTAL"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, model.modelStats.layers.map(layer => {
    return layer.weightBytes;
  }).reduce((total, current) => {
    return total + current;
  }) / MBModel/* MCU_FLOAT_SIZE */.Xl), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, model.modelStats.total.weightBytes + model.modelStats.total.codeBytes, /*#__PURE__*/react.createElement("br", null), "(", ((model.modelStats.total.weightBytes + model.modelStats.total.codeBytes - model.modelStats.layers.map(layer => {
    return layer.weightBytes + layer.codeBytes;
  }).reduce((total, current) => {
    return total + current;
  })) / 1000).toPrecision(2), " ", "KB overhead)"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, model.modelStats.total.optimizedCycles, " ", /*#__PURE__*/react.createElement("br", null), "(", (model.modelStats.total.optimizedCycles / MBModel/* MCU_SPEED */.HG).toPrecision(2), "ms @ 64MHz)")))));
}
;// CONCATENATED MODULE: ./src/components/model-editor/components/ModelSummaryDropdown.tsx


 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function ModelSummaryDropdown(props) {
  var {
    dataset,
    model
  } = props;
  var classes = props.reactStyle;
  var [expanded, setExpanded] = react.useState(false);

  var handleExpandedSummaryChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return /*#__PURE__*/react.createElement(Accordion/* default */.Z, {
    expanded: expanded === "modelSummary",
    onChange: handleExpandedSummaryChange("modelSummary")
  }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.Z, {
    expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.Z, null)
  }, /*#__PURE__*/react.createElement("div", null, expanded == "modelSummary" ? /*#__PURE__*/react.createElement("h2", null, " Summary ") : /*#__PURE__*/react.createElement("span", null, "Classes: ", model.labels.join(", "), " ", /*#__PURE__*/react.createElement("br", null), "Training Status: ", model.status, " ", /*#__PURE__*/react.createElement("br", null)))), /*#__PURE__*/react.createElement(AccordionDetails/* default */.Z, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ModelSummary, {
    reactStyle: classes,
    dataset: dataset,
    model: model
  })))));
}

/***/ })

}]);
//# sourceMappingURL=6080-e8e53b9d1542aece5b6f.js.map