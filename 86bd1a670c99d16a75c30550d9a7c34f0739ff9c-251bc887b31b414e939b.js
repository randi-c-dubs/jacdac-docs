"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4128],{

/***/ 4998:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Chip_Chip; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(6018);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var Cancel = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/react.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(11291);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(81664);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(67055);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js











var styles = function styles(theme) {
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0,
      // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      '&$disabled': {
        opacity: 0.5,
        pointerEvents: 'none'
      },
      '& $avatar': {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12)
      },
      '& $avatarColorPrimary': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark
      },
      '& $avatarColorSecondary': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark
      },
      '& $avatarSmall': {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10)
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1]
      }
    },

    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.primary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.secondary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(backgroundColor, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.primary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.secondary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      '& $avatar': {
        marginLeft: 4
      },
      '& $avatarSmall': {
        marginLeft: 2
      },
      '& $icon': {
        marginLeft: 4
      },
      '& $iconSmall': {
        marginLeft: 2
      },
      '& $deleteIcon': {
        marginRight: 5
      },
      '& $deleteIconSmall': {
        marginRight: 3
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    // TODO v5: remove

    /* Styles applied to the `avatar` element. */
    avatar: {},

    /* Styles applied to the `avatar` element if `size="small"`. */
    avatarSmall: {},

    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {},

    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {},

    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    },

    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      width: 18,
      height: 18,
      marginLeft: 4,
      marginRight: -4
    },

    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: 'inherit'
    },

    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: 'inherit'
    },

    /* Styles applied to the label `span` element. */
    label: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8
    },

    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      height: 22,
      width: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: (0,colorManipulator/* alpha */.Fq)(deleteIconColor, 0.4)
      }
    },

    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      height: 16,
      width: 16,
      marginRight: 4,
      marginLeft: -4
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="default"`. */
    deleteIconColorPrimary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
    deleteIconColorSecondary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.main
      }
    }
  };
};

function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


var Chip = /*#__PURE__*/react.forwardRef(function Chip(props, ref) {
  var avatarProp = props.avatar,
      classes = props.classes,
      className = props.className,
      clickableProp = props.clickable,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      ComponentProp = props.component,
      deleteIconProp = props.deleteIcon,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      iconProp = props.icon,
      label = props.label,
      onClick = props.onClick,
      onDelete = props.onDelete,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);

  var chipRef = react.useRef(null);
  var handleRef = (0,useForkRef/* default */.Z)(chipRef, ref);

  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  var clickable = clickableProp !== false && onClick ? true : clickableProp;
  var small = size === 'small';
  var Component = ComponentProp || (clickable ? ButtonBase/* default */.Z : 'div');
  var moreProps = Component === ButtonBase/* default */.Z ? {
    component: 'div'
  } : {};
  var deleteIcon = null;

  if (onDelete) {
    var customClasses = (0,clsx_m/* default */.Z)(color !== 'default' && (variant === "default" ? classes["deleteIconColor".concat((0,capitalize/* default */.Z)(color))] : classes["deleteIconOutlinedColor".concat((0,capitalize/* default */.Z)(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && /*#__PURE__*/react.isValidElement(deleteIconProp) ? /*#__PURE__*/react.cloneElement(deleteIconProp, {
      className: (0,clsx_m/* default */.Z)(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/react.createElement(Cancel, {
      className: (0,clsx_m/* default */.Z)(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }

  var avatar = null;

  if (avatarProp && /*#__PURE__*/react.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react.cloneElement(avatarProp, {
      className: (0,clsx_m/* default */.Z)(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes["avatarColor".concat((0,capitalize/* default */.Z)(color))])
    });
  }

  var icon = null;

  if (iconProp && /*#__PURE__*/react.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react.cloneElement(iconProp, {
      className: (0,clsx_m/* default */.Z)(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes["iconColor".concat((0,capitalize/* default */.Z)(color))])
    });
  }

  if (false) {}

  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    role: clickable || onDelete ? 'button' : undefined,
    className: (0,clsx_m/* default */.Z)(classes.root, className, color !== 'default' && [classes["color".concat((0,capitalize/* default */.Z)(color))], clickable && classes["clickableColor".concat((0,capitalize/* default */.Z)(color))], onDelete && classes["deletableColor".concat((0,capitalize/* default */.Z)(color))]], variant !== "default" && [classes.outlined, {
      'primary': classes.outlinedPrimary,
      'secondary': classes.outlinedSecondary
    }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable),
    "aria-disabled": disabled ? true : undefined,
    tabIndex: clickable || onDelete ? 0 : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, /*#__PURE__*/react.createElement("span", {
    className: (0,clsx_m/* default */.Z)(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
 false ? 0 : void 0;
/* harmony default export */ var Chip_Chip = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiChip'
})(Chip));

/***/ }),

/***/ 95552:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"
}), 'OpenInBrowser');

exports.Z = _default;

/***/ }),

/***/ 73595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export resolveUsedDataVariables */
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fields_BuiltinDataSetField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69223);
/* harmony import */ var _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44393);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16582);
/* harmony import */ var _workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21190);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89801);
/* harmony import */ var _fields_FileSaveField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4383);
/* harmony import */ var _workers_csv_proxy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53480);
/* harmony import */ var _fields_FileOpenField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39311);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74602);
/* harmony import */ var _fields_tidy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47554);
/* harmony import */ var _fields_DataTableField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54741);
/* harmony import */ var _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16229);
/* harmony import */ var _fields_chart_ScatterPlotField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88533);
/* harmony import */ var _fs_fs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31396);



/* eslint-disable @typescript-eslint/ban-types */















var DATA_ARRANGE_BLOCK = "data_arrange";
var DATA_SELECT_BLOCK = "data_select";
var DATA_DROP_BLOCK = "data_drop";
var DATA_FILTER_COLUMNS_BLOCK = "data_filter_columns";
var DATA_FILTER_STRING_BLOCK = "data_filter_string";
var DATA_MUTATE_COLUMNS_BLOCK = "data_mutate_columns";
var DATA_MUTATE_NUMBER_BLOCK = "data_mutate_number";
var DATA_SLICE_BLOCK = "data_slice";
var DATA_SUMMARIZE_BLOCK = "data_summarize";
var DATA_SUMMARIZE_BY_GROUP_BLOCK = "data_summarize_by_group";
var DATA_COUNT_BLOCK = "data_count";
var DATA_ADD_VARIABLE_CALLBACK = "data_add_variable";
var DATA_DATAVARIABLE_READ_BLOCK = "data_dataset_read";
var DATA_DATAVARIABLE_WRITE_BLOCK = "data_dataset_write";
var DATA_DATASET_BUILTIN_BLOCK = "data_dataset_builtin";
var DATA_ADD_DATASET_CALLBACK = "data_add_dataset_variable";
var DATA_TABLE_TYPE = "DataTable";
var DATA_BIN_BLOCK = "data_bin";
var DATA_CORRELATION_BLOCK = "data_correlation";
var DATA_LINEAR_REGRESSION_BLOCK = "data_linear_regression";
var DATA_LOAD_FILE_BLOCK = "data_load_file";
var DATA_SAVE_FILE_BLOCK = "data_save_file";
var DATA_COMMENT_BLOCK = "data_comment_block";

var _palette = (0,_palette__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z)(),
    datasetColour = _palette[0],
    operatorsColour = _palette[1],
    computeColour = _palette[2],
    statisticsColour = _palette[3];

var dataVariablesColour = "%{BKY_VARIABLES_HUE}";
var calcOptions = ["mean", "median", "min", "max", "sum", "deviation", "variance"].map(function (n) {
  return [n, n];
});
var dataDsl = {
  id: "dataScience",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: DATA_ARRANGE_BLOCK,
      message0: "arrange %1 %2",
      colour: operatorsColour,
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column"
      }, {
        type: "field_dropdown",
        name: "order",
        options: [["ascending", "ascending"], ["descending", "descending"]]
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformData: function transformData(b, data) {
        var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
        var order = b.getFieldValue("order");
        var descending = order === "descending";
        if (!column) return Promise.resolve(data);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          type: "arrange",
          column: column,
          descending: descending,
          data: data
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_DROP_BLOCK,
      message0: "drop %1 %2 %3",
      colour: operatorsColour,
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column1"
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column2"
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column3"
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      transformData: function transformData(b, data) {
        var columns = [1, 2, 3].map(function (column) {
          return (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column);
        }).filter(function (c) {
          return !!c;
        });
        if (!(columns !== null && columns !== void 0 && columns.length)) return Promise.resolve(data);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          type: "drop",
          columns: columns,
          data: data
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_SELECT_BLOCK,
      message0: "select %1 %2 %3 %4",
      colour: operatorsColour,
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column1"
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column2"
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column3"
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column4"
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      transformData: function transformData(b, data) {
        var columns = [1, 2, 3, 4].map(function (column) {
          return (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column);
        }).filter(function (c) {
          return !!c;
        });
        if (!(columns !== null && columns !== void 0 && columns.length)) return Promise.resolve(data);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          type: "select",
          columns: columns,
          data: data
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_FILTER_COLUMNS_BLOCK,
      message0: "filter %1 %2 %3",
      colour: operatorsColour,
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column1"
      }, {
        type: "field_dropdown",
        name: "logic",
        options: [[">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column2"
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      transformData: function transformData(b, data) {
        var columns = [1, 2].map(function (column) {
          return (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column);
        }).filter(function (c) {
          return !!c;
        });
        var logic = b.getFieldValue("logic");
        if (columns.length !== 2) return Promise.resolve(data);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          type: "filter_columns",
          columns: columns,
          logic: logic,
          data: data
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_FILTER_STRING_BLOCK,
      message0: "filter %1 %2 %3",
      colour: operatorsColour,
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column"
      }, {
        type: "field_dropdown",
        name: "logic",
        options: [[">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
      }, {
        type: "field_input",
        name: "rhs",
        spellcheck: false,
        text: "0"
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      transformData: function transformData(b, data) {
        var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
        var logic = b.getFieldValue("logic");
        var rhs = b.getFieldValue("rhs");
        if (!column) return Promise.resolve(data);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          type: "filter_string",
          column: column,
          logic: logic,
          rhs: rhs,
          data: data
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_MUTATE_COLUMNS_BLOCK,
      message0: "compute column %1 as %2 %3 %4",
      colour: computeColour,
      args0: [{
        type: "field_input",
        name: "newcolumn",
        spellcheck: false
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "lhs",
        dataType: "number"
      }, {
        type: "field_dropdown",
        name: "logic",
        options: [["+", "plus"], ["-", "minus"], ["*", "mult"], ["/", "div"], [">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "rhs",
        dataType: "number"
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      transformData: function transformData(b, data) {
        var newcolumn = b.getFieldValue("newcolumn");
        var lhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "lhs", {
          type: "number"
        });
        var rhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "rhs", {
          type: "number"
        });
        var logic = b.getFieldValue("logic");
        if (!newcolumn || !lhs || !rhs) return Promise.resolve(data);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          type: "mutate_columns",
          newcolumn: newcolumn,
          lhs: lhs,
          rhs: rhs,
          logic: logic,
          data: data
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_MUTATE_NUMBER_BLOCK,
      message0: "compute column %1 as %2 %3 %4",
      colour: computeColour,
      args0: [{
        type: "field_input",
        name: "newcolumn",
        spellcheck: false
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "lhs",
        dataType: "number"
      }, {
        type: "field_dropdown",
        name: "logic",
        options: [["+", "plus"], ["-", "minus"], ["*", "mult"], ["/", "div"], [">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
      }, {
        type: "field_number",
        name: "rhs"
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformData: function transformData(b, data) {
        var newcolumn = b.getFieldValue("newcolumn");
        var lhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "lhs", {
          type: "number"
        });
        var rhs = b.getFieldValue("rhs");
        var logic = b.getFieldValue("logic");
        if (!newcolumn || !lhs) return Promise.resolve(data);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          type: "mutate_number",
          newcolumn: newcolumn,
          lhs: lhs,
          rhs: rhs,
          logic: logic,
          data: data
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_SUMMARIZE_BLOCK,
      message0: "summarize %1 calculate %2",
      colour: computeColour,
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column",
        dataType: "number"
      }, {
        type: "field_dropdown",
        name: "calc",
        options: calcOptions
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformData: function transformData(b, data) {
        var columns = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumns */ .QZ)(data, b, "column", {
          type: "number"
        });
        var calc = b.getFieldValue("calc");
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          type: "summarize",
          columns: columns,
          calc: calc,
          data: data
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_SUMMARIZE_BY_GROUP_BLOCK,
      message0: "group %1 by %2 calculate %3",
      colour: computeColour,
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column"
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "by"
      }, {
        type: "field_dropdown",
        name: "calc",
        options: calcOptions
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformData: function transformData(b, data) {
        var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
        var by = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "by");
        var calc = b.getFieldValue("calc");
        if (!by) return Promise.resolve([]);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          type: "summarize_by_group",
          column: column,
          by: by,
          calc: calc,
          data: data
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_SLICE_BLOCK,
      message0: "slice %1 rows from %2",
      colour: operatorsColour,
      args0: [{
        type: "field_number",
        name: "count",
        min: 1,
        precision: 1,
        value: 100
      }, {
        type: "field_dropdown",
        name: "operator",
        options: [["head", "head"], ["tail", "tail"], ["sample", "sample"]]
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformData: function transformData(b, data) {
        var count = b.getFieldValue("count");
        var operator = b.getFieldValue("operator");
        return (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidySlice */ .HA)(data, {
          sliceHead: operator === "head" ? count : undefined,
          sliceTail: operator === "tail" ? count : undefined,
          sliceSample: operator === "sample" ? count : undefined
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_COUNT_BLOCK,
      message0: "count distinct %1",
      colour: computeColour,
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column"
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformData: function transformData(b, data) {
        var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
        if (!column) return Promise.resolve([]);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
          type: "count",
          column: column,
          data: data
        });
      },
      template: "meta"
    }, {
      kind: "block",
      type: DATA_DATASET_BUILTIN_BLOCK,
      message0: "dataset %1",
      tooltip: "Loads a builtin dataset",
      args0: [{
        type: _fields_BuiltinDataSetField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
        name: "dataset"
      }],
      inputsInline: false,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: datasetColour,
      template: "meta",
      dataPreviewField: true,
      transformData: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .identityTransformData */ .FW
    }, {
      kind: "block",
      type: DATA_DATAVARIABLE_READ_BLOCK,
      message0: "dataset variable %1",
      args0: [{
        type: "field_variable",
        name: "data",
        variable: "data",
        variableTypes: [DATA_TABLE_TYPE],
        defaultType: DATA_TABLE_TYPE
      }],
      inputsInline: false,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: dataVariablesColour,
      template: "meta",
      dataPreviewField: "after",
      transformData: function transformData(b) {
        var services = (0,_WorkspaceContext__WEBPACK_IMPORTED_MODULE_6__/* .resolveBlockServices */ .Ys)(b);
        var data = services === null || services === void 0 ? void 0 : services.data;
        return Promise.resolve(data);
      }
    }, {
      kind: "block",
      type: DATA_DATAVARIABLE_WRITE_BLOCK,
      message0: "store in dataset variable %1",
      args0: [{
        type: "field_variable",
        name: "data",
        variable: "data",
        variableTypes: [DATA_TABLE_TYPE],
        defaultType: DATA_TABLE_TYPE
      }],
      inputsInline: false,
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: dataVariablesColour,
      template: "meta",
      dataPreviewField: "after",
      transformData: function transformData(b, data) {
        // grab the variable from the block
        var variable = b.getFieldValue("data");
        if (!variable) return Promise.resolve(undefined);
        var readBlocks = b.workspace.getBlocksByType(DATA_DATAVARIABLE_READ_BLOCK, false);
        var readServices = readBlocks.filter(function (b) {
          return b.isEnabled();
        }).filter(function (b) {
          return b.getFieldValue("data") === variable;
        }).map(function (b) {
          return b.jacdacServices;
        }).filter(function (services) {
          return !!services;
        });
        readServices.forEach(function (services) {
          return services.data = data;
        });
        return Promise.resolve(data);
      }
    }, {
      kind: "block",
      type: DATA_BIN_BLOCK,
      message0: "bin by %1",
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "column",
        dataType: "number"
      }],
      inputsInline: false,
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: computeColour,
      template: "meta",
      dataPreviewField: true,
      transformData: function () {
        var _transformData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(b, data) {
          var column;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column", {
                    type: "number"
                  });

                  if (column) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return", Promise.resolve([]));

                case 3:
                  return _context.abrupt("return", (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
                    type: "bin",
                    column: column,
                    data: data
                  }));

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function transformData(_x, _x2) {
          return _transformData.apply(this, arguments);
        }

        return transformData;
      }()
    }, {
      kind: "block",
      type: DATA_CORRELATION_BLOCK,
      message0: "correlation of %1 %2 %3 %4 %5",
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "x",
        dataType: "number"
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "y",
        dataType: "number"
      }, {
        type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_12__/* .default.KEY */ .Z.KEY,
        name: "preview",
        compare: true
      }, {
        type: "input_dummy"
      }, {
        type: _fields_DataTableField__WEBPACK_IMPORTED_MODULE_11__/* .default.KEY */ .Z.KEY,
        name: "table",
        transformed: true,
        small: true
      }],
      inputsInline: false,
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: statisticsColour,
      template: "meta",
      dataPreviewField: false,
      passthroughData: true,
      transformData: function () {
        var _transformData2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(b, data) {
          var column1, column2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  column1 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "x", {
                    type: "number"
                  });
                  column2 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "y", {
                    type: "number"
                  });

                  if (!(!column1 || !column2)) {
                    _context2.next = 4;
                    break;
                  }

                  return _context2.abrupt("return", Promise.resolve([]));

                case 4:
                  return _context2.abrupt("return", (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
                    type: "correlation",
                    column1: column1,
                    column2: column2,
                    data: data
                  }));

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function transformData(_x3, _x4) {
          return _transformData2.apply(this, arguments);
        }

        return transformData;
      }()
    }, {
      kind: "block",
      type: DATA_LINEAR_REGRESSION_BLOCK,
      message0: "linear regression of x %1 y %2 %3 %4 %5",
      args0: [{
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "x",
        dataType: "number"
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_3__/* .default.KEY */ .Z.KEY,
        name: "y",
        dataType: "number"
      }, {
        type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_12__/* .default.KEY */ .Z.KEY,
        name: "preview",
        compare: true
      }, {
        type: "input_dummy"
      }, {
        type: _fields_chart_ScatterPlotField__WEBPACK_IMPORTED_MODULE_13__/* .default.KEY */ .Z.KEY,
        name: "plot",
        linearRegression: true
      }],
      inputsInline: false,
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: statisticsColour,
      template: "meta",
      dataPreviewField: false,
      passthroughData: true,
      transformData: function () {
        var _transformData3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(b, data) {
          var column1, column2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  column1 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "x", {
                    type: "number"
                  });
                  column2 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_10__/* .tidyResolveFieldColumn */ .Fy)(data, b, "y", {
                    type: "number"
                  });

                  if (!(!column1 || !column2)) {
                    _context3.next = 4;
                    break;
                  }

                  return _context3.abrupt("return", Promise.resolve([]));

                case 4:
                  return _context3.abrupt("return", (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
                    type: "linear_regression",
                    column1: column1,
                    column2: column2,
                    data: data
                  }));

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function transformData(_x5, _x6) {
          return _transformData3.apply(this, arguments);
        }

        return transformData;
      }()
    }, {
      kind: "block",
      type: DATA_LOAD_FILE_BLOCK,
      message0: "load dataset from file %1",
      args0: [{
        type: _fields_FileOpenField__WEBPACK_IMPORTED_MODULE_9__/* .default.KEY */ .Z.KEY,
        name: "file"
      }],
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: datasetColour,
      template: "meta",
      inputsInline: false,
      dataPreviewField: true,
      transformData: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .identityTransformData */ .FW
    }, {
      kind: "block",
      type: DATA_SAVE_FILE_BLOCK,
      message0: "save dataset to file %1",
      args0: [{
        type: _fields_FileSaveField__WEBPACK_IMPORTED_MODULE_7__/* .default.KEY */ .Z.KEY,
        name: "file"
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: datasetColour,
      template: "meta",
      inputsInline: false,
      dataPreviewField: "after",
      transformData: function () {
        var _transformData4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(block, data) {
          var file;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  file = block.getField("file");

                  if (!(file !== null && file !== void 0 && file.fileHandle && data)) {
                    _context4.next = 4;
                    break;
                  }

                  _context4.next = 4;
                  return (0,_workers_csv_proxy__WEBPACK_IMPORTED_MODULE_8__/* .saveCSV */ .Eg)(file.fileHandle, data);

                case 4:
                  return _context4.abrupt("return", data);

                case 5:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        function transformData(_x7, _x8) {
          return _transformData4.apply(this, arguments);
        }

        return transformData;
      }()
    }, {
      kind: "block",
      type: DATA_COMMENT_BLOCK,
      message0: "comment %1 %2 %3",
      args0: [{
        type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_12__/* .default.KEY */ .Z.KEY,
        name: "preview"
      }, {
        type: "input_dummy"
      }, {
        type: "field_multilinetext",
        name: "text",
        text: "And then...",
        spellcheck: true
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour: operatorsColour,
      template: "meta",
      inputsInline: false,
      dataPreviewField: false,
      transformData: _toolbox__WEBPACK_IMPORTED_MODULE_4__/* .identityTransformData */ .FW
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "sep"
    }, {
      kind: "category",
      name: "Data sets",
      colour: datasetColour,
      contents: [{
        kind: "block",
        type: DATA_DATASET_BUILTIN_BLOCK
      }, {
        kind: "block",
        type: DATA_LOAD_FILE_BLOCK
      }, {
        kind: "block",
        type: DATA_SAVE_FILE_BLOCK
      }, {
        kind: "button",
        text: "Import dataset",
        callbackKey: DATA_ADD_DATASET_CALLBACK,
        callback: function callback(workspace) {
          var services = (0,_WorkspaceContext__WEBPACK_IMPORTED_MODULE_6__/* .resolveWorkspaceServices */ .O7)(workspace);
          var directory = services === null || services === void 0 ? void 0 : services.workingDirectory;
          if (!directory) (0,blockly__WEBPACK_IMPORTED_MODULE_1__.alert)("You need to open a directory to import a dataset.");else {
            (0,_fs_fs__WEBPACK_IMPORTED_MODULE_14__/* .importCSVFilesIntoWorkspace */ .U5)(directory.handle).then(function () {
              return directory.sync();
            }).then(function () {
              return (0,blockly__WEBPACK_IMPORTED_MODULE_1__.alert)("Datasets imported!");
            });
          }
        }
      }]
    }, {
      kind: "category",
      name: "Organize",
      colour: operatorsColour,
      contents: [{
        kind: "block",
        type: DATA_COMMENT_BLOCK
      }, {
        kind: "block",
        type: DATA_ARRANGE_BLOCK
      }, {
        kind: "block",
        type: DATA_SELECT_BLOCK
      }, {
        kind: "block",
        type: DATA_DROP_BLOCK
      }, {
        kind: "block",
        type: DATA_FILTER_COLUMNS_BLOCK
      }, {
        kind: "block",
        type: DATA_FILTER_STRING_BLOCK
      }, {
        kind: "block",
        type: DATA_SLICE_BLOCK
      }]
    }, {
      kind: "category",
      name: "Compute",
      colour: computeColour,
      contents: [{
        kind: "block",
        type: DATA_MUTATE_COLUMNS_BLOCK
      }, {
        kind: "block",
        type: DATA_MUTATE_NUMBER_BLOCK
      }, {
        kind: "block",
        type: DATA_SUMMARIZE_BLOCK
      }, {
        kind: "block",
        type: DATA_SUMMARIZE_BY_GROUP_BLOCK
      }, {
        kind: "block",
        type: DATA_COUNT_BLOCK
      }, {
        kind: "block",
        type: DATA_BIN_BLOCK
      }]
    }, {
      kind: "category",
      name: "Statistics",
      colour: statisticsColour,
      contents: [{
        kind: "block",
        type: DATA_CORRELATION_BLOCK
      }, {
        kind: "block",
        type: DATA_LINEAR_REGRESSION_BLOCK
      }]
    }, {
      kind: "category",
      name: "Data variables",
      colour: dataVariablesColour,
      contents: [{
        kind: "button",
        text: "Add dataset variable",
        callbackKey: DATA_ADD_VARIABLE_CALLBACK,
        callback: function callback(workspace) {
          return blockly__WEBPACK_IMPORTED_MODULE_1__.Variables.createVariableButtonHandler(workspace, null, DATA_TABLE_TYPE);
        }
      }, {
        kind: "block",
        type: DATA_DATAVARIABLE_READ_BLOCK
      }, {
        kind: "block",
        type: DATA_DATAVARIABLE_WRITE_BLOCK
      }]
    }];
  },
  createWorkspaceChangeListener: function createWorkspaceChangeListener() {
    return function (event) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var _ref = event,
          type = _ref.type,
          blockId = _ref.blockId;
      var isBlockChange = type === blockly__WEBPACK_IMPORTED_MODULE_1__.Events.BLOCK_CHANGE || type === blockly__WEBPACK_IMPORTED_MODULE_1__.Events.BLOCK_MOVE;

      if (isBlockChange || type === blockly__WEBPACK_IMPORTED_MODULE_1__.Events.FINISHED_LOADING) {
        var workspace = event.getEventWorkspace_();

        if (isBlockChange) {
          var block = workspace.getBlockById(blockId);
          if ((block === null || block === void 0 ? void 0 : block.type) !== DATA_DATAVARIABLE_WRITE_BLOCK) return; // nothing so see here
        } // collect set variables blocks,
        // and make sure only 1 of them is enabled


        var setvars = workspace.getBlocksByType(DATA_DATAVARIABLE_WRITE_BLOCK, true).filter(function (b) {
          return b.isEnabled();
        }); // mark and sweep variables, leaving one 1 enabled per kind

        var marked = {};

        while (setvars.length) {
          var _block = setvars.shift();

          var variable = _block.getField("data").getVariable();

          if (variable) {
            var name = variable.name;

            if (marked[name]) {
              if (_block.isEnabled()) {
                _block.setEnabled(false);

                _block.unplug(true);
              }
            } else marked[name] = true;
          }
        }
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (dataDsl);
function resolveUsedDataVariables(block) {
  var type = block.type;

  if (type === DATA_DATAVARIABLE_READ_BLOCK) {
    var field = block.getField("data");
    var variable = field.getVariable();
    if (variable) return {
      reads: [variable.name]
    };
  } else if (type === DATA_DATAVARIABLE_WRITE_BLOCK) {
    var _field = block.getField("data");

    var _variable = _field.getVariable();

    if (_variable) return {
      write: _variable.name
    };
  }

  return {};
}

/***/ }),

/***/ 45430:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ FileTabs; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts + 2 modules
var useKeyboardNavigationProps = __webpack_require__(68786);
// EXTERNAL MODULE: ./src/components/FileSystemContext.tsx + 2 modules
var FileSystemContext = __webpack_require__(74195);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/OpenInBrowser.js
var OpenInBrowser = __webpack_require__(95552);
;// CONCATENATED MODULE: ./src/components/fs/FileSystemChip.tsx





function FileSystemChip() {
  var _useContext = (0,react.useContext)(FileSystemContext/* default */.Z),
      fileSystem = _useContext.fileSystem,
      showDirectoryPicker = _useContext.showDirectoryPicker;

  var root = (0,useChange/* default */.Z)(fileSystem, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.root;
  });
  var handleOpenDirectory = showDirectoryPicker;

  var handleCloseDirectory = function handleCloseDirectory() {
    return fileSystem.root = undefined;
  };

  if (!fileSystem) return null;
  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    clickable: true,
    avatar: /*#__PURE__*/react.createElement(OpenInBrowser/* default */.Z, null),
    label: (root === null || root === void 0 ? void 0 : root.name) || "open directory",
    onClick: handleOpenDirectory,
    onDelete: root ? handleCloseDirectory : undefined
  });
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(52468);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(65733);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(32253);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(89952);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./src/components/fs/FileNewFileChip.tsx







function FileNewFileChip(props) {
  var newFileName = props.name,
      newFileContent = props.content,
      label = props.label,
      extension = props.extension;

  var _useContext = (0,react.useContext)(FileSystemContext/* default */.Z),
      fileSystem = _useContext.fileSystem;

  var _useState = (0,react.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = (0,react.useState)(""),
      value = _useState2[0],
      setValue = _useState2[1];

  var valueId = (0,react_use_id_hook_esm/* useId */.Me)();

  var handleOpen = function handleOpen() {
    setValue("");
    setOpen(true);
  };

  var handleOk = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var name, d, f;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setOpen(false);
              name = value.toLocaleLowerCase().replace(/\s+/g, "");

              if (!newFileName) {
                _context.next = 7;
                break;
              }

              _context.next = 5;
              return fileSystem.createWorkingDirectory(name, newFileName, newFileContent);

            case 5:
              _context.next = 15;
              break;

            case 7:
              if (extension) name += "." + extension;
              d = fileSystem.workingDirectory || fileSystem.root;
              _context.next = 11;
              return d.fileAsync(name, {
                create: true
              });

            case 11:
              f = _context.sent;
              _context.next = 14;
              return f.write(newFileContent);

            case 14:
              fileSystem.workingFile = f;

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleOk() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCancel = function handleCancel() {
    return setOpen(false);
  };

  var handleValueChange = function handleValueChange(event) {
    setValue(event.target.value);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    clickable: true,
    label: label || "new...",
    icon: /*#__PURE__*/react.createElement(Add/* default */.Z, null),
    onClick: handleOpen
  }), /*#__PURE__*/react.createElement(Dialog/* default */.Z, {
    open: open,
    fullWidth: true
  }, /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(DialogContentText/* default */.Z, null, "Choose a project name"), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: valueId,
    value: value,
    label: "Value",
    fullWidth: true,
    onChange: handleValueChange
  })), /*#__PURE__*/react.createElement(DialogActions/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "contained",
    onClick: handleCancel
  }, "Cancel"), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "contained",
    color: "primary",
    disabled: !value,
    onClick: handleOk
  }, "Ok"))));
}
;// CONCATENATED MODULE: ./src/components/fs/FileSystemNodeChip.tsx


function FileSystemNodeChip(props) {
  var node = props.node,
      selected = props.selected,
      onClick = props.onClick;
  var name = node.name;
  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    clickable: true,
    label: name.replace(/\.json$/i, ""),
    color: selected ? "primary" : undefined,
    onClick: onClick
  });
}
;// CONCATENATED MODULE: ./src/components/fs/FileTabs.tsx








function FileTabs(props) {
  var newFileName = props.newFileName,
      newFileContent = props.newFileContent,
      hideDirectories = props.hideDirectories,
      hideFiles = props.hideFiles,
      directoryFilter = props.directoryFilter,
      fileFilter = props.fileFilter,
      newFileLabel = props.newFileLabel,
      newFileExtension = props.newFileExtension;

  var _useContext = (0,react.useContext)(FileSystemContext/* default */.Z),
      fileSystem = _useContext.fileSystem;

  var root = (0,useChange/* default */.Z)(fileSystem, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.root;
  });
  var workingDirectory = (0,useChange/* default */.Z)(fileSystem, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.workingDirectory;
  });
  var workingFile = (0,useChange/* default */.Z)(fileSystem, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.workingFile;
  });
  var directories = (0,useChange/* default */.Z)(root, function (_) {
    var _$directories;

    return _ === null || _ === void 0 ? void 0 : (_$directories = _.directories) === null || _$directories === void 0 ? void 0 : _$directories.filter(function (d) {
      return !directoryFilter || directoryFilter(d.name);
    });
  });
  var files = (0,useChange/* default */.Z)(root, function (_) {
    var _$files;

    return _ === null || _ === void 0 ? void 0 : (_$files = _.files) === null || _$files === void 0 ? void 0 : _$files.filter(function (d) {
      return !fileFilter || fileFilter(d.name);
    });
  });
  var gridRef = (0,react.useRef)();
  var keyboardProps = (0,useKeyboardNavigationProps/* default */.Z)(gridRef.current);

  var handleDirectorySelected = function handleDirectorySelected(handle) {
    return function () {
      return fileSystem.workingDirectory = handle;
    };
  };

  var handleFileSelected = function handleFileSelected(handle) {
    return function () {
      return fileSystem.workingFile = handle;
    };
  };

  if (!fileSystem) return null;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
    ref: gridRef,
    container: true,
    spacing: 1
  }, keyboardProps), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(FileSystemChip, null)), !hideDirectories && (directories === null || directories === void 0 ? void 0 : directories.map(function (node) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      key: node.name
    }, /*#__PURE__*/react.createElement(FileSystemNodeChip, {
      node: node,
      selected: node === workingDirectory,
      onClick: handleDirectorySelected(node)
    }));
  })), !hideFiles && (files === null || files === void 0 ? void 0 : files.map(function (node) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      key: node.name
    }, /*#__PURE__*/react.createElement(FileSystemNodeChip, {
      node: node,
      selected: node === workingFile,
      onClick: handleFileSelected(node)
    }));
  })), root && newFileContent && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(FileNewFileChip, {
    name: newFileName,
    content: newFileContent,
    label: newFileLabel,
    extension: newFileExtension
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