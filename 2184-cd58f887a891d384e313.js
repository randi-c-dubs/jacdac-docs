"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2184],{

/***/ 95393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GridHeader; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4998);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
  hr: {
    background: theme.palette.text.disabled,
    marginBottom: "unset"
  },
  start: {
    width: theme.spacing(2)
  }
}));
function GridHeader(props) {
  var {
    title,
    count,
    variant,
    action
  } = props;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    direction: "row",
    spacing: 1,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.hr, classes.start)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    mr: 1
  }, action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    component: "span",
    variant: variant || "subtitle1"
  }, title), count !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    ml: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    label: count
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: classes.hr
  }))));
}

/***/ }),

/***/ 12184:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ JSONSchemaForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75167);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1059);
/* harmony import */ var _SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64973);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19640);
/* harmony import */ var _GridHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95393);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/ban-types */






function SchemaForm(props) {
  var {
    schema,
    required,
    value,
    setValue
  } = props;
  var {
    type,
    title,
    description
  } = schema;
  var id = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_3__/* .useId */ .Me)();

  var handleChange = event => {
    setValue(event.target.value || "");
  };

  var handleNumberChange = event => {
    var v = parseFloat(event.target.value);
    if (!isNaN(v)) setValue(v);
  };

  var handleIntegerChange = event => {
    var v = parseInt(event.target.value);
    if (!isNaN(v)) setValue(v);
  };

  var handleCheckedChange = (event, checked) => {
    setValue(checked);
  };

  switch (type) {
    case "number":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        item: true,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        id: id,
        label: title,
        required: required,
        helperText: description,
        variant: "outlined",
        type: "number",
        value: value,
        fullWidth: true,
        onChange: handleNumberChange
      }));

    case "integer":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        item: true,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        id: id,
        label: title,
        required: required,
        helperText: description,
        variant: "outlined",
        type: "number",
        value: value,
        fullWidth: true,
        onChange: handleIntegerChange
      }));

    case "string":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        item: true,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        id: id,
        label: title,
        required: required,
        helperText: description,
        variant: "outlined",
        type: "text",
        value: value,
        fullWidth: true,
        onChange: handleChange
      }));

    case "boolean":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        item: true,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        id: id,
        required: required,
        label: title,
        title: description,
        checked: !!value,
        onChange: handleCheckedChange
      }));

    case "object":
      {
        var {
          properties,
          required: _required
        } = schema;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          title: title
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(PropertiesForm, {
          properties: properties,
          required: _required,
          value: value,
          setValue: setValue
        }));
      }
  }

  return null;
}

function PropertiesForm(props) {
  var {
    properties,
    required,
    value,
    setValue
  } = props; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var handleSetValue = (key, v) => newValue => {
    setValue(_objectSpread(_objectSpread({}, v || {}), {}, {
      [key]: newValue
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, Object.entries(properties).map(_ref => {
    var [key, schema] = _ref;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(SchemaForm, {
      key: key,
      schema: schema,
      required: required && required.indexOf(key) > -1,
      value: value === null || value === void 0 ? void 0 : value[key],
      setValue: handleSetValue(key, value)
    });
  }));
}

function JSONSchemaForm(props) {
  var {
    schema,
    value,
    setValue,
    className
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    container: true,
    spacing: 1,
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(SchemaForm, {
    schema: schema,
    value: value,
    setValue: setValue
  }));
}

/***/ })

}]);
//# sourceMappingURL=2184-cd58f887a891d384e313.js.map