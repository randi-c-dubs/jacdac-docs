"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6602,3102],{

/***/ 65957:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81664);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34621);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37595);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59355);








var TRANSITION_DURATION = 4; // seconds

var styles = function styles(theme) {
  var getColor = function getColor(color) {
    return theme.palette.type === 'light' ? (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__/* .lighten */ .$n)(color, 0.62) : (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__/* .darken */ ._j)(color, 0.5);
  };

  var backgroundPrimary = getColor(theme.palette.primary.main);
  var backgroundSecondary = getColor(theme.palette.secondary.main);
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 4,
      '@media print': {
        colorAdjust: 'exact'
      }
    },

    /* Styles applied to the root and bar2 element if `color="primary"`; bar2 if `variant="buffer"`. */
    colorPrimary: {
      backgroundColor: backgroundPrimary
    },

    /* Styles applied to the root and bar2 elements if `color="secondary"`; bar2 if `variant="buffer"`. */
    colorSecondary: {
      backgroundColor: backgroundSecondary
    },

    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {},

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {},

    /* Styles applied to the root element if `variant="buffer"`. */
    buffer: {
      backgroundColor: 'transparent'
    },

    /* Styles applied to the root element if `variant="query"`. */
    query: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the additional bar element if `variant="buffer"`. */
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      animation: '$buffer 3s infinite linear'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="primary"`. */
    dashedColorPrimary: {
      backgroundImage: "radial-gradient(".concat(backgroundPrimary, " 0%, ").concat(backgroundPrimary, " 16%, transparent 42%)"),
      backgroundSize: '10px 10px',
      backgroundPosition: '0 -23px'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="secondary"`. */
    dashedColorSecondary: {
      backgroundImage: "radial-gradient(".concat(backgroundSecondary, " 0%, ").concat(backgroundSecondary, " 16%, transparent 42%)"),
      backgroundSize: '10px 10px',
      backgroundPosition: '0 -23px'
    },

    /* Styles applied to the layered bar1 and bar2 elements. */
    bar: {
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      transformOrigin: 'left'
    },

    /* Styles applied to the bar elements if `color="primary"`; bar2 if `variant` not "buffer". */
    barColorPrimary: {
      backgroundColor: theme.palette.primary.main
    },

    /* Styles applied to the bar elements if `color="secondary"`; bar2 if `variant` not "buffer". */
    barColorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },

    /* Styles applied to the bar1 element if `variant="indeterminate or query"`. */
    bar1Indeterminate: {
      width: 'auto',
      animation: '$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },

    /* Styles applied to the bar1 element if `variant="determinate"`. */
    bar1Determinate: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },

    /* Styles applied to the bar1 element if `variant="buffer"`. */
    bar1Buffer: {
      zIndex: 1,
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },

    /* Styles applied to the bar2 element if `variant="indeterminate or query"`. */
    bar2Indeterminate: {
      width: 'auto',
      animation: '$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite'
    },

    /* Styles applied to the bar2 element if `variant="buffer"`. */
    bar2Buffer: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    '@keyframes indeterminate1': {
      //  |-----|---x-||-----||-----|
      '0%': {
        left: '-35%',
        right: '100%'
      },
      //  |-----|-----||-----||xxxx-|
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes indeterminate2': {
      //  |xxxxx|xxxxx||-----||-----|
      '0%': {
        left: '-200%',
        right: '100%'
      },
      //  |-----|-----||-----||-x----|
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0 -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0 -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    }
  };
};
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

var LinearProgress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LinearProgress(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      value = props.value,
      valueBuffer = props.valueBuffer,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(props, ["classes", "className", "color", "value", "valueBuffer", "variant"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  var rootProps = {};
  var inlineStyles = {
    bar1: {},
    bar2: {}
  };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      rootProps['aria-valuemin'] = 0;
      rootProps['aria-valuemax'] = 100;
      var transform = value - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar1.transform = "translateX(".concat(transform, "%)");
    } else if (false) {}
  }

  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      var _transform = (valueBuffer || 0) - 100;

      if (theme.direction === 'rtl') {
        _transform = -_transform;
      }

      inlineStyles.bar2.transform = "translateX(".concat(_transform, "%)");
    } else if (false) {}
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(color))], className, {
      'determinate': classes.determinate,
      'indeterminate': classes.indeterminate,
      'buffer': classes.buffer,
      'query': classes.query
    }[variant]),
    role: "progressbar"
  }, rootProps, {
    ref: ref
  }, other), variant === 'buffer' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.dashed, classes["dashedColor".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(color))])
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.bar, classes["barColor".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(color))], (variant === 'indeterminate' || variant === 'query') && classes.bar1Indeterminate, {
      'determinate': classes.bar1Determinate,
      'buffer': classes.bar1Buffer
    }[variant]),
    style: inlineStyles.bar1
  }), variant === 'determinate' ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.bar, (variant === 'indeterminate' || variant === 'query') && classes.bar2Indeterminate, variant === 'buffer' ? [classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(color))], classes.bar2Buffer] : classes["barColor".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(color))]),
    style: inlineStyles.bar2
  }));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(styles, {
  name: 'MuiLinearProgress'
})(LinearProgress));

/***/ }),

/***/ 74904:
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
  d: "M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"
}), 'DeleteSweep');

exports.Z = _default;

/***/ }),

/***/ 94343:
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
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext');

exports.Z = _default;

/***/ }),

/***/ 73102:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q6": function() { return /* binding */ DEFAULT_MODEL; },
/* harmony export */   "HG": function() { return /* binding */ MCU_SPEED; },
/* harmony export */   "Xl": function() { return /* binding */ MCU_FLOAT_SIZE; },
/* harmony export */   "Ru": function() { return /* binding */ validModelJSON; },
/* harmony export */   "ZP": function() { return /* binding */ MBModel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53719);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85413);
/* harmony import */ var _jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45484);



var DEFAULT_MODEL = "default";
var MCU_SPEED = 64000; // for microbit in 1/ms

var MCU_FLOAT_SIZE = 2;
function validModelJSON(blockJSON) {
  var _firstLayer$children;

  var warnings = {}; // don't check empty block JSON

  if (!blockJSON) return undefined; // don't check default models

  if (blockJSON == DEFAULT_MODEL) return warnings; // 1. make sure all of the training parameters are present

  var blockParams = blockJSON.inputs[1].fields.expand_button.value;

  if (!blockParams.lossFn || !blockParams.optimizer || !blockParams.metrics || !blockParams.numEpochs) {
    warnings[blockJSON.id] = "Missing training parameters. Expand the block to enter parameters";
  } // 2. make sure there is at least one layer


  var firstLayer = blockJSON.inputs.filter(input => input.name == "LAYER_INPUTS")[0].child;

  if (!firstLayer) {
    warnings[blockJSON.id] = "Cannot train empty model";
    return warnings;
  } // 3. make sure layer arch starts with a conv, pool, or flatten


  var convolutionType;

  if (firstLayer.type == "model_block_conv1d_layer" || firstLayer.type == "model_block_maxpool1d_layer" //layerBlock.type == "model_block_avgpool1d_layer"
  ) {
    convolutionType = "1d";
  } else if (firstLayer.type == "model_block_conv2d_layer" || firstLayer.type == "model_block_maxpool2d_layer" //layerBlock.type == "model_block_avgpool2d_layer"
  ) {
    convolutionType = "2d";
  } else if (firstLayer.type != "model_block_flatten_layer") {
    warnings[firstLayer.id] = "Models must start with a convolutional layer, pooling layer, or flatten layer.";
  } // 4. make sure a flatten layer is present


  var foundFlatten = firstLayer.type == "model_block_flatten_layer"; // 5. the smallest possible model is a flatten layer plus a dense layer

  var minimumModel = false;
  (_firstLayer$children = firstLayer.children) === null || _firstLayer$children === void 0 ? void 0 : _firstLayer$children.forEach((childBlock, idx) => {
    if (!minimumModel) minimumModel = true; // 6. make sure that only dense layers come after flatten

    if (foundFlatten) {
      if (childBlock.type != "model_block_dense_layer") warnings[childBlock.id] = "Only dense layers can go after the flatten layer";
    }

    if (!foundFlatten) foundFlatten = childBlock.type == "model_block_flatten_layer"; // 7. make sure 1d/2d model types are consistent

    if (convolutionType == "1d" && childBlock.type.indexOf("2d") > -1) warnings[childBlock.id] = "All layers in this model must be 1d";else if (convolutionType == "2d" && childBlock.type.indexOf("1d") > -1) warnings[childBlock.id] = "All layers in this model must be 2d"; // 8. check that the last layer is a dense layer

    if (idx == firstLayer.children.length - 1) {
      if (childBlock.type != "model_block_dense_layer") {
        warnings[childBlock.id] = "Last layer in model must be a dense layer";
      } else {
        // dense layer must have units equal to output shape & a softmax activation
        var params = childBlock.inputs[0].fields.expand_button.value; // 9. final dense layer must have a softmax activation

        if (params.activation != "softmax") warnings[childBlock.id] = "The final dense layer must use \"softmax\" as activation function"; // 10. final dense layer must have num units equal to the number of labels

        /*if (params.numUnits != outputShape)
            warnings[
                childBlock.id
            ] = `The final dense layer must have a number of units equal to the output shape`*/
      }
    }
  });

  if (!minimumModel) {
    warnings[blockJSON.id] = "Models must contain one flatten layer that is followed by at least one dense layer";
  }

  if (!foundFlatten) {
    warnings[blockJSON.id] = "Models must contain at least one flatten layer";
  }

  return warnings;
}

var MBModel = /*#__PURE__*/function (_JDEventSource) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(MBModel, _JDEventSource);

  // maintain info about the dataset this model was created for
  // maintain training info about the model
  // maintain the blockJSON that goes with this model
  MBModel.createFromFile = function createFromFile(modelObj) {
    var mbModel = new MBModel(modelObj.name, modelObj.labels, modelObj.modelJSON, modelObj.status);
    mbModel.inputShape = modelObj.inputShape;
    mbModel.inputTypes = modelObj.inputTypes;
    mbModel.inputInterval = modelObj.inputInterval || 100;
    mbModel.outputShape = modelObj.outputShape;
    mbModel.convolutionType = modelObj.convolutionType;
    mbModel.trainingAcc = modelObj.trainingAcc || 0;
    mbModel.weightData = new Uint32Array(modelObj.weights).buffer || new ArrayBuffer(0);
    mbModel.modelStats = modelObj.modelStats || undefined;
    return mbModel;
  };

  function MBModel(name, labels, modelJSON, status) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this.name = name;
    _this.labels = labels;
    _this.modelJSON = modelJSON;
    _this.status = status;
    _this.labels = _this.labels || [];
    _this.modelJSON = _this.modelJSON || "";
    _this.status = _this.status || "empty";
    _this.weightData = new ArrayBuffer(0);
    return _this;
  }

  var _proto = MBModel.prototype;

  _proto.toJSON = function toJSON() {
    return {
      name: this.name,
      inputShape: this.inputShape,
      inputTypes: this.inputTypes,
      inputInterval: this.inputInterval,
      convolutionType: this.convolutionType,
      labels: this.labels,
      modelJSON: this.modelJSON,
      modelStats: this.modelStats,
      outputShape: this.outputShape,
      status: this.status || "empty",
      trainingAcc: this.trainingAcc || 0,
      weights: Array.from(new Uint32Array(this.weightData))
    };
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(MBModel, [{
    key: "summary",
    get: function get() {
      var modelInfo = ["Training Status: " + this.status, "Input Types: " + this.inputTypes];
      if (this.modelStats) modelInfo.push("Model Stats: " + this.modelStatSummary);
      return modelInfo;
    }
  }, {
    key: "modelStatSummary",
    get: function get() {
      if (!this.modelStats || !this.modelStats.layers.length) return "";
      var totalBytes = this.modelStats.total.weightBytes + this.modelStats.total.codeBytes;
      var totalCycles = this.modelStats.total.optimizedCycles;
      var executionTimeMs = totalCycles / MCU_SPEED;
      return this.modelStats.layers.length + " layers, " + (totalBytes / 1000).toPrecision(2) + " KB, " + executionTimeMs.toPrecision(2) + "ms";
    }
  }, {
    key: "parseBlockJSON",
    set: function set(blockJSON) {
      this.blockJSON = blockJSON;
      var layers = []; // get the first layer and add it to the list

      var layerBlock = blockJSON.inputs.filter(input => input.name == "LAYER_INPUTS")[0].child;

      if (layerBlock) {
        var _layerBlock$children;

        layers.push(layerBlock); // determine what dimensionality of CNN is used (1d, 2d, or none)

        this.convolutionType = "";
        if (layerBlock.type.indexOf("1d") > -1) this.convolutionType = "1d";
        if (layerBlock.type.indexOf("2d") > -1) this.convolutionType = "2d"; // add the remaining layers to the list

        (_layerBlock$children = layerBlock.children) === null || _layerBlock$children === void 0 ? void 0 : _layerBlock$children.forEach(childBlock => layers.push(childBlock));
      } // store layers with model


      this.layerJSON = layers;
    }
  }]);

  return MBModel;
}(_jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_0__/* .JDEventSource */ .aE);



/***/ }),

/***/ 23368:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vn": function() { return /* binding */ prepareDataSet; },
/* harmony export */   "g2": function() { return /* binding */ prepareModel; },
/* harmony export */   "ZP": function() { return /* binding */ TrainModel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73108);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65957);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42404);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94343);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52377);
/* harmony import */ var _material_ui_icons_DeleteSweep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74904);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69672);
/* harmony import */ var _ServiceManagerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99808);
/* harmony import */ var _blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83808);
/* harmony import */ var _blockly_dsl_workers_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66037);
/* harmony import */ var _MBDataSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99941);
/* harmony import */ var _MBModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73102);

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name










var ConfusionMatrixHeatMap = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/* import() */ 5063).then(__webpack_require__.bind(__webpack_require__, 75063)));
var DataSetPlot = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/* import() */ 9866).then(__webpack_require__.bind(__webpack_require__, 49866)));
var LossAccChart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/* import() */ 3139).then(__webpack_require__.bind(__webpack_require__, 33139)));
var ModelSummaryDropdown = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(7521)]).then(__webpack_require__.bind(__webpack_require__, 67521)));
function prepareDataSet(set) {
  // Assumptions: the sampling rate, sampling duration, and sensors used are constant
  var sampleLength = -1;
  var sampleChannels = -1;
  var xData = [];
  var yData = [];

  var _loop = function _loop(label) {
    set.getRecordingsWithLabel(label).forEach(table => {
      if (sampleLength < table.length) {
        sampleLength = table.length;
        sampleChannels = table.width;
      } else if (table.width != sampleChannels) {
        alert("All input data must have the same shape: " + table.name + "\n Has " + table.width + " inputs instead of " + sampleChannels);
      }
      /* else if (table.length != sampleLength) {
        // decide what to do about different sized data
      } */
      // For x data, just add each sample as a new row into x_data


      xData.push(table.data());
      yData.push(set.labels.indexOf(label));
    });
  };

  for (var label of set.labels) {
    _loop(label);
  } // save tensors with dataset object


  set.xs = xData;
  set.ys = yData;
  set.length = sampleLength;
  set.width = sampleChannels;
}
function prepareModel(mod, set, callback) {
  // get model set up with dataset features
  mod.labels = set.labels;
  mod.inputShape = [set.length, set.width];
  mod.inputTypes = set.inputTypes;
  mod.inputInterval = set.interval;
  mod.outputShape = set.labels.length;
  /* compile model */

  var compileMsg = {
    worker: "tf",
    type: "compile",
    data: {
      modelBlockJSON: mod.blockJSON || _MBModel__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_MODEL */ .Q6,
      model: mod.toJSON()
    }
  }; // TODO throw an error if this never returns, page needs refresh

  (0,_blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_4__/* .compileRequest */ .yA)(compileMsg).then(result => {
    if (result) {
      mod.modelJSON = result.data.modelJSON || "";
      var modelStats = result.data.modelStats;
      if (modelStats.length > 2) mod.modelStats = {
        total: modelStats.pop(),
        layers: modelStats
      };
      mod.trainingParams = result.data.trainingParams;
      mod.status = "untrained";
    }

    if (callback) callback(mod);
  });
}
function TrainModel(props) {
  var classes = props.reactStyle;
  var chartProps = props.chartProps;
  var {
    fileStorage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP);
  var {
    dataset,
    model,
    onChange,
    onNext
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    prepareDataSet(dataset);

    if (!(0,_MBDataSet__WEBPACK_IMPORTED_MODULE_6__/* .arraysEqual */ .cO)(model.labels, dataset.labels) || !(0,_MBDataSet__WEBPACK_IMPORTED_MODULE_6__/* .arraysEqual */ .cO)(model.inputTypes, dataset.inputTypes)) {
      // If there is already a model, make sure it matches the current dataset
      //   if it does not, reset the model
      var newModel = new _MBModel__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP(model.name);
      prepareModel(newModel, dataset, undefined);
      handleModelUpdate(newModel);
    } else {
      prepareModel(model, dataset, undefined);
      handleModelUpdate(model);
    } // ready to train


    setTrainEnabled(model.modelJSON != "empty");
  }, []);
  /* For training model */

  var {
    0: trainEnabled,
    1: setTrainEnabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var {
    0: trainingProgress,
    1: setTrainingProgress
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  var {
    0: trainingLossLog,
    1: setTrainingLossLog
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var {
    0: trainingAccLog,
    1: setTrainingAccLog
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var {
    0: trainingPredictionResult,
    1: setTrainingPredictionResult
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var {
    0: trainTimestamp,
    1: setTrainTimestamp
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  var trainTFModel = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(function* () {
      model.status = "training";
      model.inputTypes = dataset.inputTypes;
      handleModelUpdate(model); // reset logs and progress

      trainingLossLog.splice(0, trainingLossLog.length);
      trainingAccLog.splice(0, trainingAccLog.length);
      setTrainingProgress(0);
      setTrainEnabled(false); // setup worker
      // subscriber gets messages about training while training is happening

      var stopWorkerSubscribe = (0,_blockly_dsl_workers_proxy__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)("tf").subscribe("message", msg => {
        var epoch = trainingLossLog.length / 2 + 1;
        trainingLossLog.push({
          epoch: epoch,
          loss: msg.data.loss,
          dataset: "training"
        });
        trainingLossLog.push({
          epoch: epoch,
          loss: msg.data.val_loss,
          dataset: "validation"
        });
        trainingAccLog.push({
          epoch: epoch,
          acc: msg.data.acc,
          dataset: "training"
        });
        trainingAccLog.push({
          epoch: epoch,
          acc: msg.data.val_acc,
          dataset: "validation"
        });
        setTrainingProgress(epoch * 100 / model.trainingParams.epochs);
      });
      var trainMsg = {
        worker: "tf",
        type: "train",
        data: {
          trainingParams: model.trainingParams,
          model: model.toJSON(),
          xData: dataset.xs,
          yData: dataset.ys
        }
      };
      var trainResult = yield (0,_blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_4__/* .trainRequest */ ._S)(trainMsg); // stop subscriber after training

      stopWorkerSubscribe();

      if (trainResult && trainResult.data) {
        // handle result from training
        var trainingHistory = trainResult.data.trainingLogs;
        model.weightData = trainResult.data.modelWeights;
        model.armModel = trainResult.data.armModel; // evaluate on training dataset

        var predictMsg = {
          worker: "tf",
          type: "predict",
          data: {
            zData: dataset.xs,
            model: model.toJSON()
          }
        };
        var predResult = yield (0,_blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_4__/* .predictRequest */ .iE)(predictMsg);

        if (predResult) {
          // Save probability for each class in model object
          setTrainingPredictionResult(predResult.data.predictTop);
          setTrainTimestamp(Date.now());
        } // Update model status


        model.status = "trained";
        model.trainingAcc = trainingHistory[trainingHistory.length - 1];
        handleModelUpdate(model);
        setTrainEnabled(true);
      } else {
        model.status = "untrained";
        handleModelUpdate(model);
        setTrainEnabled(true);
      }
    });

    return function trainTFModel() {
      return _ref.apply(this, arguments);
    };
  }();
  /* For page management */


  var handleNext = () => {
    onNext(model);
  };

  var handleModelUpdate = model => {
    onChange(model);
  };

  var handleDownloadModel = () => {
    // TODO also download arm model (as a zip file?)
    fileStorage.saveText(model.name + ".json", JSON.stringify(model));
  };

  var deleteTFModel = () => {
    if (confirm("Are you sure you want to delete current model?")) {
      var newModel = new _MBModel__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP(model.name);
      prepareModel(newModel, dataset, undefined);
      handleModelUpdate(newModel);
      setTrainingLossLog([]);
      setTrainingAccLog([]);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Current Model", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    onClick: handleDownloadModel,
    title: "Download the trained model",
    disabled: model.status != "trained"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    onClick: deleteTFModel,
    title: "Delete current model information"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_DeleteSweep__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ModelSummaryDropdown, {
    reactStyle: classes,
    dataset: dataset,
    model: model
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    size: "large",
    variant: "contained",
    color: "primary",
    "aria-label": "start training model",
    title: trainEnabled ? "Press to start training machine learning model" : "You must have at least two classes to train a model. Go back to first tab.",
    onClick: trainTFModel,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, null),
    disabled: !trainEnabled,
    style: {
      marginTop: 16
    }
  }, "Train Model")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Training Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    variant: "determinate",
    value: trainingProgress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    style: {
      float: "right"
    }
  }, trainingProgress, " / 100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), !!trainingLossLog.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: "vega-loss-acc-charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LossAccChart, {
    chartProps: chartProps,
    lossData: trainingLossLog,
    accData: trainingAccLog,
    timestamp: trainingProgress
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Final training accuracy:", " ", model.status == "trained" ? (model.trainingAcc || 0).toPrecision(2) : "Model has not been trained")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Training Results"), !!trainingPredictionResult.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: "vega-training-set-charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ConfusionMatrixHeatMap, {
    chartProps: chartProps,
    yActual: dataset.ys,
    yPredicted: trainingPredictionResult,
    labels: model.labels,
    timestamp: trainTimestamp
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DataSetPlot, {
    chartProps: chartProps,
    reactStyle: classes,
    dataset: dataset,
    predictedLabels: trainingPredictionResult,
    timestamp: trainTimestamp
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    item: true,
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    variant: "contained",
    color: "secondary",
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, null),
    disabled: model.status !== "trained",
    onClick: handleNext
  }, "Next"))));
}

/***/ })

}]);
//# sourceMappingURL=86ab0ffe4ebd6a8173cf195d01dfee36185fdf2b-d4f1c9871f1363c469d2.js.map