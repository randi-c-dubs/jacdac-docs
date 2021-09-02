"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7364],{

/***/ 77364:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewClassifierDialog; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89711);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(706);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65541);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89952);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94343);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_editor_modelblockdsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95149);

 // tslint:disable-next-line: no-submodule-imports match-default-export-name




var FIVE_CNN_1D = "5-cnn1d";
var TEN_CNN_1D = "10-cnn1d";
var FIVE_CNN_2D = "5-cnn2d";
var TEN_CNN_2D = "10-cnn2d";
var FC_ANN = "fc-ann";
var EMPTY = "empty";
function NewClassifierDialog(props) {
  var {
    classes,
    open,
    onDone,
    workspace
  } = props;
  var {
    0: classifierName,
    1: setClassifierName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var {
    0: classifierType,
    1: setClassifierType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("5-cnn2d");

  var addNewClassifierBlock = () => {
    var newClassifierName = classifierName || "classifier1"; // check if name is already used

    if (classifierType) {
      if (!blockly__WEBPACK_IMPORTED_MODULE_1__.Variables.nameUsedWithAnyType(newClassifierName, workspace)) {
        // get or create new classifier typed variable
        workspace.createVariable(newClassifierName, _model_editor_modelblockdsl__WEBPACK_IMPORTED_MODULE_2__/* .MB_CLASSIFIER_VAR_TYPE */ .pp);
      } // create new block with new classifier name


      if (classifierType == FIVE_CNN_1D) {
        blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.domToBlock(blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.textToDom("<block type=\"model_block_nn\"><field name=\"CLASSIFIER_NAME\" variabletype=\"ModelBlockClassifier\">" + newClassifierName + "</field><field name=\"NN_TRAINING\" variabletype=\"ModelBlockDataSet\">dataset1</field><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"optimizer\":\"adam\",\"numEpochs\":200,\"lossFn\":\"categoricalCrossentropy\",\"metrics\":\"acc\"}</field><field name=\"NN_BUTTONS\">{}</field><statement name=\"LAYER_INPUTS\"><block type=\"model_block_conv1d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numFilters\":16,\"kernelSize\":4,\"strideSize\":1,\"activation\":\"relu\"}</field><next><block type=\"model_block_maxpool1d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"poolSize\":2,\"strideSize\":1}</field><next><block type=\"model_block_dropout_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"rate\":0.1}</field><next><block type=\"model_block_flatten_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false}</field><next><block type=\"model_block_dense_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numUnits\":4,\"activation\":\"softmax\"}</field></block></next></block></next></block></next></block></next></block></statement></block>"), workspace);
      } else if (classifierType == FIVE_CNN_2D) {
        blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.domToBlock(blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.textToDom("<block type=\"model_block_nn\"><field name=\"CLASSIFIER_NAME\" variabletype=\"ModelBlockClassifier\">" + newClassifierName + "</field><field name=\"NN_TRAINING\" variabletype=\"ModelBlockDataSet\">dataset1</field><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"optimizer\":\"adam\",\"numEpochs\":200,\"lossFn\":\"categoricalCrossentropy\",\"metrics\":\"acc\"}</field><field name=\"NN_BUTTONS\">{}</field><statement name=\"LAYER_INPUTS\"><block type=\"model_block_conv2d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numFilters\":16,\"kernelSize\":4,\"strideSize\":1,\"activation\":\"relu\"}</field><next><block type=\"model_block_maxpool2d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"poolSize\":2,\"strideSize\":1}</field><next><block type=\"model_block_dropout_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"rate\":0.1}</field><next><block type=\"model_block_flatten_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false}</field><next><block type=\"model_block_dense_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numUnits\":4,\"activation\":\"softmax\"}</field></block></next></block></next></block></next></block></next></block></statement></block>"), workspace);
      } else if (classifierType == TEN_CNN_1D) {
        blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.domToBlock(blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.textToDom("<block type=\"model_block_nn\"><field name=\"CLASSIFIER_NAME\" variabletype=\"ModelBlockClassifier\">" + newClassifierName + "</field><field name=\"NN_TRAINING\" variabletype=\"ModelBlockDataSet\">dataset1</field><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"optimizer\":\"adam\",\"numEpochs\":200,\"lossFn\":\"categoricalCrossentropy\",\"metrics\":\"acc\"}</field><field name=\"NN_BUTTONS\">{}</field><statement name=\"LAYER_INPUTS\"><block type=\"model_block_conv1d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numFilters\":16,\"kernelSize\":4,\"strideSize\":1,\"activation\":\"relu\"}</field><next><block type=\"model_block_maxpool1d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"poolSize\":2,\"strideSize\":1}</field><next><block type=\"model_block_dropout_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"rate\":0.1}</field><next><block type=\"model_block_conv1d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numFilters\":16,\"kernelSize\":2,\"strideSize\":1,\"activation\":\"relu\"}</field><next><block type=\"model_block_maxpool1d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"poolSize\":2,\"strideSize\":1}</field><next><block type=\"model_block_dropout_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"rate\":0.1}</field><next><block type=\"model_block_conv1d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numFilters\":16,\"kernelSize\":2,\"strideSize\":1,\"activation\":\"relu\"}</field><next><block type=\"model_block_dropout_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"rate\":0.1}</field><next><block type=\"model_block_flatten_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false}</field><next><block type=\"model_block_dense_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numUnits\":4,\"activation\":\"softmax\"}</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block>"), workspace);
      } else if (classifierType == TEN_CNN_2D) {
        blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.domToBlock(blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.textToDom("<block type=\"model_block_nn\"><field name=\"CLASSIFIER_NAME\" variabletype=\"ModelBlockClassifier\">" + newClassifierName + "</field><field name=\"NN_TRAINING\" variabletype=\"ModelBlockDataSet\">dataset1</field><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"optimizer\":\"adam\",\"numEpochs\":200,\"lossFn\":\"categoricalCrossentropy\",\"metrics\":\"acc\"}</field><field name=\"NN_BUTTONS\">{}</field><statement name=\"LAYER_INPUTS\"><block type=\"model_block_conv2d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numFilters\":16,\"kernelSize\":4,\"strideSize\":1,\"activation\":\"relu\"}</field><next><block type=\"model_block_maxpool2d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"poolSize\":2,\"strideSize\":1}</field><next><block type=\"model_block_dropout_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"rate\":0.1}</field><next><block type=\"model_block_conv2d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numFilters\":16,\"kernelSize\":2,\"strideSize\":1,\"activation\":\"relu\"}</field><next><block type=\"model_block_maxpool2d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"poolSize\":2,\"strideSize\":1}</field><next><block type=\"model_block_dropout_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"rate\":0.1}</field><next><block type=\"model_block_conv2d_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numFilters\":16,\"kernelSize\":2,\"strideSize\":1,\"activation\":\"relu\"}</field><next><block type=\"model_block_dropout_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"rate\":0.1}</field><next><block type=\"model_block_flatten_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false}</field><next><block type=\"model_block_dense_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numUnits\":4,\"activation\":\"softmax\"}</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block>"), workspace);
      } else if (classifierType == FC_ANN) {
        blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.domToBlock(blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.textToDom("<block type=\"model_block_nn\"><field name=\"CLASSIFIER_NAME\" variabletype=\"ModelBlockClassifier\">" + newClassifierName + "</field><field name=\"NN_TRAINING\" variabletype=\"ModelBlockDataSet\">dataset1</field><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"optimizer\":\"adam\",\"numEpochs\":200,\"lossFn\":\"categoricalCrossentropy\",\"metrics\":\"acc\"}</field><field name=\"NN_BUTTONS\">{}</field><statement name=\"LAYER_INPUTS\"><block type=\"model_block_flatten_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false}</field><next><block type=\"model_block_dense_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numUnits\":16,\"activation\":\"relu\"}</field><next><block type=\"model_block_dense_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numUnits\":16,\"activation\":\"relu\"}</field><next><block type=\"model_block_dense_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numUnits\":16,\"activation\":\"relu\"}</field><next><block type=\"model_block_dense_layer\"><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"numUnits\":4,\"activation\":\"softmax\"}</field></block></next></block></next></block></next></block></next></block></statement></block>"), workspace);
      } else if (classifierType == EMPTY) {
        blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.domToBlock(blockly__WEBPACK_IMPORTED_MODULE_1___default().Xml.textToDom("<block type=\"model_block_nn\"><field name=\"CLASSIFIER_NAME\" variabletype=\"ModelBlockClassifier\">" + newClassifierName + "</field><field name=\"NN_TRAINING\" variabletype=\"ModelBlockDataSet\">dataset1</field><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"optimizer\":\"adam\",\"numEpochs\":200,\"lossFn\":\"categoricalCrossentropy\",\"metrics\":\"acc\"}</field><field name=\"NN_BUTTONS\">{}</field></block>"), workspace);
      }
    }
  };
  /* For interface controls */


  var handleClassifierNameChange = event => {
    setClassifierName(event.target.value.trim());
  };

  var handleClassifierTypeChange = event => {
    setClassifierType(event.target.value);
  };

  var handleCancel = () => {
    // call the done function
    onDone();
  };

  var handleDone = () => {
    // create and add the new block
    addNewClassifierBlock(); // call the done function

    onDone();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    open: open,
    onClose: handleDone
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Create new classifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    className: classes.field,
    label: "Classifier name",
    defaultValue: "classifier1",
    variant: "outlined",
    onChange: handleClassifierNameChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    id: "starter-label"
  }, "Base architecture", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    labelId: "starter-label",
    className: classes.field,
    value: classifierType,
    variant: "outlined",
    onChange: handleClassifierTypeChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    value: FIVE_CNN_1D
  }, "5-Layer 1D CNN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    value: FIVE_CNN_2D
  }, "5-Layer 2D CNN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    value: TEN_CNN_1D
  }, "10-Layer 1D CNN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    value: TEN_CNN_2D
  }, "10-Layer 2D CNN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    value: FC_ANN
  }, "Fully Connected NN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    value: EMPTY
  }, "Empty"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    variant: "contained",
    onClick: handleCancel
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    variant: "contained",
    color: "primary",
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null),
    onClick: handleDone
  }, "Done")));
}

/***/ })

}]);
//# sourceMappingURL=7364-bcee545f02b0579cdb86.js.map