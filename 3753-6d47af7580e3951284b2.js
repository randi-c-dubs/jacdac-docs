"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3753],{

/***/ 83102:
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
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'NavigateBefore');

exports.Z = _default;

/***/ }),

/***/ 93753:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TrainModelDialog; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65957);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89952);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(42404);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94343);
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(83102);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52377);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79885);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69672);
/* harmony import */ var _ServiceManagerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99808);
/* harmony import */ var _blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83808);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blockly_dsl_workers_proxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66037);
/* harmony import */ var _blockly_fields_PointerBoundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77298);


 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports









var LossAccChart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 3139).then(__webpack_require__.bind(__webpack_require__, 33139)));
var ModelSummaryDropdown = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(7521)]).then(__webpack_require__.bind(__webpack_require__, 67521)));
var ModelOutput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(7476), __webpack_require__.e(7746)]).then(__webpack_require__.bind(__webpack_require__, 64797)));
function TrainModelDialog(props) {
  var {
    classes,
    chartPalette,
    open,
    onModelUpdate,
    onDone,
    dataset,
    model,
    trainedModelCount,
    workspace
  } = props;
  var chartProps = {
    CHART_WIDTH: 300,
    CHART_HEIGHT: 300,
    MARK_SIZE: 75,
    TOOLTIP_NUM_FORMAT: "0.2f",
    PALETTE: chartPalette
  };
  var {
    fileStorage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP);
  var {
    0: dialogType,
    1: setDialogType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("trainModel");
  /* For training model */

  var {
    0: trainEnabled,
    1: setTrainEnabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(model.status !== "empty");
  var {
    0: predictEnabled,
    1: setPredictEnabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(model.status == "trained"); // for loss/acc graph

  var trainingLossLog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return [];
  }, []);
  var trainingAccLog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return [];
  }, []);
  var {
    0: trainingProgress,
    1: setTrainingProgress
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  var trainTFModel = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(function* () {
      model.status = "training";
      model.inputTypes = dataset.inputTypes; // reset logs and progress

      trainingLossLog.splice(0, trainingLossLog.length);
      trainingAccLog.splice(0, trainingAccLog.length);
      setTrainingProgress(0); // disable train model button

      setTrainEnabled(false); // setup worker
      // subscriber gets messages about training while training is happening

      var stopWorkerSubscribe = (0,_blockly_dsl_workers_proxy__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)("tf").subscribe("message", msg => {
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
          xData: dataset.xs,
          yData: dataset.ys,
          model: model.toJSON(),
          trainingParams: model.trainingParams
        }
      };
      var trainResult = yield (0,_blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_4__/* .trainRequest */ ._S)(trainMsg); // stop subscriber after training

      stopWorkerSubscribe();

      if (trainResult && trainResult.data) {
        // handle result from training
        var trainingHistory = trainResult.data.trainingLogs;
        model.weightData = trainResult.data.modelWeights;
        model.armModel = trainResult.data.armModel; // Update model status

        model.status = "trained";
        model.trainingAcc = trainingHistory[trainingHistory.length - 1];
        addNewTrainedModelBlock();
        setTrainEnabled(true);
        setPredictEnabled(true);
      } else model.status = "untrained";
    });

    return function trainTFModel() {
      return _ref.apply(this, arguments);
    };
  }();

  var addNewTrainedModelBlock = () => {
    // Create new trained model block
    var trainedModelName = model.name + "." + trainedModelCount;
    var dataSetName = dataset.name;
    var newBlock = blockly__WEBPACK_IMPORTED_MODULE_5___default().Xml.domToBlock(blockly__WEBPACK_IMPORTED_MODULE_5___default().Xml.textToDom("<block type=\"model_block_trained_nn\"><field name=\"TRAINED_MODEL_NAME\">" + trainedModelName + "</field><field name=\"MODEL_TEST_SET\" variabletype=\"ModelBlockDataSet\">" + dataSetName + "</field><field name=\"SELECTED_CHART\">model summary</field></block>"), workspace);
    onModelUpdate(model, newBlock.id);
  };
  /* For interface controls */


  var resetInputs = () => {};

  var handleCancel = () => {
    // reset the user inputs
    resetInputs(); // close the modal

    onDone("model");
  };

  var handleBack = () => {
    // go to the previous page
    setDialogType("trainModel");
  };

  var handleNext = () => {
    // go to the next page
    setDialogType("testModel");
  };

  var handleDownloadModel = () => {
    // TODO also download arm model (as a zip file?)
    fileStorage.saveText(model.name + ".json", JSON.stringify(model));
  };

  if (dialogType == "trainModel") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blockly_fields_PointerBoundary__WEBPACK_IMPORTED_MODULE_7__/* .PointerBoundary */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    open: open,
    onClose: handleCancel,
    fullWidth: true,
    maxWidth: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Current Model", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    onClick: handleDownloadModel,
    title: "Download all recording data",
    disabled: dataset.totalRecordings == 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModelSummaryDropdown, {
    reactStyle: classes,
    dataset: dataset,
    model: model
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    size: "large",
    variant: "contained",
    color: "primary",
    "aria-label": "start training model",
    title: trainEnabled ? "Press to start training machine learning model" : "You must have at least two classes to train a model. Go back to first tab.",
    onClick: trainTFModel,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, null),
    disabled: !trainEnabled,
    style: {
      marginTop: 16
    }
  }, "Train Model")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Training Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    variant: "determinate",
    value: trainingProgress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      float: "right"
    }
  }, trainingProgress, " / 100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), !!trainingLossLog.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: "vega-loss-acc-charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LossAccChart, {
    chartProps: chartProps,
    lossData: trainingLossLog,
    accData: trainingAccLog,
    timestamp: trainingProgress
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Final Training Accuracy:", " ", model.status == "untrained" ? "Model has not been trained" : (model.trainingAcc || 0).toPrecision(2))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    variant: "contained",
    onClick: handleCancel
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    variant: "contained",
    color: "primary",
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, null),
    disabled: !predictEnabled,
    onClick: handleNext
  }, "Next"))));else if (dialogType == "testModel") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blockly_fields_PointerBoundary__WEBPACK_IMPORTED_MODULE_7__/* .PointerBoundary */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    open: open,
    onClose: handleCancel,
    fullWidth: true,
    maxWidth: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModelOutput, {
    chartProps: chartProps,
    reactStyle: classes,
    chartPalette: chartPalette,
    model: model
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    variant: "contained",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, null),
    onClick: handleBack
  }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    variant: "contained",
    color: "primary",
    disabled: false,
    onClick: handleCancel
  }, "Close"))));
}

/***/ })

}]);
//# sourceMappingURL=3753-6d47af7580e3951284b2.js.map