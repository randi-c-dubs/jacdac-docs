"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3102],{

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



/***/ })

}]);
//# sourceMappingURL=3102-bed2d39499ce77583903.js.map