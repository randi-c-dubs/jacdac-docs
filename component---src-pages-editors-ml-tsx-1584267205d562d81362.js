"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4230],{

/***/ 96958:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var builtins = {
  jacdac_on_off: block => block.getFieldValue("value") === "on",
  jacdac_yes_no: block => block.getFieldValue("value") === "on",
  jacdac_time_picker: block => Number(block.getFieldValue("value") || "0"),
  jacdac_angle: block => Number(block.getFieldValue("value") || "0"),
  jacdac_percent: block => Number(block.getFieldValue("value") || "0"),
  jacdac_ratio: block => Number(block.getFieldValue("value") || "0")
};
var shadowDsl = {
  id: "shadow",
  createBlocks: () => [{
    kind: "block",
    type: "jacdac_on_off",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "value",
      options: [["enabled", "on"], ["disabled", "off"]]
    }],
    style: "logic_blocks",
    output: "Boolean"
  }, {
    kind: "block",
    type: "jacdac_yes_no",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "value",
      options: [["yes", "on"], ["no", "off"]]
    }],
    style: "logic_blocks",
    output: "Boolean"
  }, {
    kind: "block",
    type: "jacdac_time_picker",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "value",
      options: [["0.1", "0.1"], ["1", "1"], ["5", "5"], ["30", "30"], ["60", "60"]]
    }],
    style: "math_blocks",
    output: "Number"
  }, {
    kind: "block",
    type: "jacdac_angle",
    message0: "%1",
    args0: [{
      type: "field_angle",
      name: "value",
      min: 0,
      max: 360,
      precision: 10
    }],
    style: "math_blocks",
    output: "Number"
  }, {
    kind: "block",
    type: "jacdac_percent",
    message0: "%1",
    args0: [{
      type: "field_slider",
      name: "value",
      min: 0,
      max: 100,
      precision: 1
    }],
    style: "math_blocks",
    output: "Number"
  }, {
    kind: "block",
    type: "jacdac_byte",
    message0: "%1",
    args0: [{
      type: "field_slider",
      name: "value",
      min: 0,
      max: 255,
      precision: 1
    }],
    style: "math_blocks",
    output: "Number"
  }, {
    kind: "block",
    type: "jacdac_ratio",
    message0: "%1",
    args0: [{
      type: "field_slider",
      name: "value",
      min: 0,
      max: 1,
      precision: 0.1
    }],
    style: "math_blocks",
    output: "Number"
  }, {
    kind: "block",
    type: "jacdac_color",
    message0: "%1",
    args0: [{
      type: "field_colour",
      name: "col",
      colour: "#ff0000",
      colourOptions: ["#ff0000", "#ff8000", "#ffff00", "#ff9da5", "#00ff00", "#b09eff", "#00ffff", "#007fff", "#65471f", "#0000ff", "#7f00ff", "#ff0080", "#ff00ff", "#ffffff", "#999999", "#000000"],
      columns: 4
    }],
    style: "math_blocks",
    output: "Color"
  }],
  blockToValue: block => {
    var _builtins$block$type;

    return (_builtins$block$type = builtins[block.type]) === null || _builtins$block$type === void 0 ? void 0 : _builtins$block$type.call(builtins, block);
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (shadowDsl);

/***/ }),

/***/ 66362:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./src/components/fs/FileTabs.tsx + 3 modules
var FileTabs = __webpack_require__(45430);
// EXTERNAL MODULE: ./src/components/blockly/BlockContext.tsx + 16 modules
var BlockContext = __webpack_require__(23985);
// EXTERNAL MODULE: ./src/components/blockly/BlockEditor.tsx + 5 modules
var BlockEditor = __webpack_require__(39067);
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
var blockly_default = /*#__PURE__*/__webpack_require__.n(blockly);
// EXTERNAL MODULE: ./src/components/model-editor/modelblockdsl.ts
var modelblockdsl = __webpack_require__(95149);
// EXTERNAL MODULE: ./src/components/blockly/dsl/shadowdsl.ts
var shadowdsl = __webpack_require__(96958);
// EXTERNAL MODULE: ./src/components/blockly/dsl/fieldsdsl.ts
var fieldsdsl = __webpack_require__(76658);
// EXTERNAL MODULE: ./src/components/blockly/BlockDiagnostics.tsx
var BlockDiagnostics = __webpack_require__(9370);
// EXTERNAL MODULE: ./jacdac-ts/src/dsl/workspacevisitor.ts
var workspacevisitor = __webpack_require__(78870);
// EXTERNAL MODULE: ./src/components/blockly/toolbox.ts
var toolbox = __webpack_require__(16582);
// EXTERNAL MODULE: ./src/components/FileSystemContext.tsx + 2 modules
var FileSystemContext = __webpack_require__(3365);
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 3 modules
var ServiceManagerContext = __webpack_require__(99808);
// EXTERNAL MODULE: ./src/components/blockly/WorkspaceContext.tsx
var WorkspaceContext = __webpack_require__(89801);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
// EXTERNAL MODULE: ./src/components/FieldDataSet.ts
var FieldDataSet = __webpack_require__(64616);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./src/components/useChartPalette.ts
var useChartPalette = __webpack_require__(74039);
;// CONCATENATED MODULE: ./src/components/dialogs/mb/ModelBlockDialogs.tsx






var ViewDataDialog = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 206).then(__webpack_require__.bind(__webpack_require__, 206)));
var RecordDataDialog = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(8270), __webpack_require__.e(5201)]).then(__webpack_require__.bind(__webpack_require__, 85201)));
var TrainModelDialog = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 3753).then(__webpack_require__.bind(__webpack_require__, 93753)));
var NewClassifierDialog = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 7364).then(__webpack_require__.bind(__webpack_require__, 77364)));
var useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  root: {
    marginBottom: theme.spacing(1)
  },
  grow: {
    flexGrow: 1
  },
  field: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    width: theme.spacing(25)
  },
  segment: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  row: {
    marginBottom: theme.spacing(0.5)
  },
  buttons: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  trend: {
    width: theme.spacing(10)
  },
  vmiddle: {
    verticalAlign: "middle"
  }
})); // handling dialogs within Blockly

function addNewDataSet(workspace) {
  // prompt user for dataset name
  blockly_default().prompt("Enter new dataset name:", "", newDataSetName => {
    // check if name is already used
    if (newDataSetName != null && newDataSetName != undefined) {
      if (newDataSetName != "" && !blockly.Variables.nameUsedWithAnyType(newDataSetName, workspace)) {
        // get or create new dataset typed variable
        var newDataSetVar = workspace.createVariable(newDataSetName, modelblockdsl/* MB_DATASET_VAR_TYPE */.vV); // create new dataset block on the workspace

        var newDataSetBlock = workspace.newBlock(modelblockdsl/* MODEL_BLOCKS */.GJ + "dataset"); // automatically insert the variable name into the new block

        var field = newDataSetBlock.getField("DATASET_NAME");
        field.setValue(newDataSetVar.getId()); // add new block to the screen

        newDataSetBlock.initSvg();
        newDataSetBlock.render(false);
        workspace.centerOnBlock(newDataSetBlock.id);
      } else {
        setTimeout(() => blockly_default().alert("That variable name is invalid or already exists"), 10);
      }
    }
  });
} // TODO combine with peceding function to make less redundant

function addNewClassifier(workspace) {
  // prompt user for variable name
  Blockly.prompt("Enter new classifier name:", "", newVariableName => {
    // check if name is already used
    if (newVariableName != null && newVariableName != undefined) {
      if (newVariableName != "" && !Variables.nameUsedWithAnyType(newVariableName, workspace)) {
        // get or create new classifier typed variable
        workspace.createVariable(newVariableName, MB_CLASSIFIER_VAR_TYPE); // create new block with new classifier name

        workspace.paste(Blockly.Xml.textToDom("<block type=\"model_block_nn\"><field name=\"CLASSIFIER_NAME\" variabletype=\"ModelBlockClassifier\">" + newVariableName + "</field><field name=\"NN_TRAINING\" variabletype=\"ModelBlockDataSet\">dataset1</field><field name=\"EXPAND_BUTTON\">{\"parametersVisible\":false,\"totalParams\":0,\"totalLayers\":0,\"totalSize\":0,\"runTimeInMs\":0,\"inputShape\":[0,0],\"optimizer\":\"adam\",\"numEpochs\":200,\"lossFn\":\"categoricalCrossentropy\",\"metrics\":\"acc\"}</field><field name=\"NN_BUTTONS\">{}</field></block>"));
      } else {
        setTimeout(() => Blockly.alert("That variable name is invalid or already exists"), 10);
      }
    }
  });
}
function ModelBlockDialogs(props) {
  var {
    viewDataSetDialogVisible,
    recordDataDialogVisible,
    trainModelDialogVisible,
    newClassifierDialogVisible,
    onRecordingDone,
    onModelUpdate,
    closeModal,
    workspace,
    dataset,
    model,
    recordingCount,
    trainedModelCount
  } = props;
  var classes = useStyles();
  var chartPalette = (0,useChartPalette/* default */.Z)();

  if (viewDataSetDialogVisible) {
    return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ViewDataDialog, {
      classes: classes,
      chartPalette: chartPalette,
      open: viewDataSetDialogVisible,
      onDone: closeModal,
      dataset: dataset
    }));
  } else if (recordDataDialogVisible) {
    return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(RecordDataDialog, {
      classes: classes,
      chartPalette: chartPalette,
      open: recordDataDialogVisible,
      onDone: onRecordingDone,
      recordingCount: recordingCount,
      workspace: workspace
    }));
  } else if (trainModelDialogVisible) {
    return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(TrainModelDialog, {
      classes: classes,
      chartPalette: chartPalette,
      open: trainModelDialogVisible,
      onModelUpdate: onModelUpdate,
      onDone: closeModal,
      dataset: dataset,
      model: model,
      trainedModelCount: trainedModelCount,
      workspace: workspace
    }));
  } else if (newClassifierDialogVisible) {
    return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(NewClassifierDialog, {
      classes: classes,
      open: newClassifierDialogVisible,
      onDone: closeModal,
      workspace: workspace
    }));
  } else return null;
}
// EXTERNAL MODULE: ./src/components/model-editor/MBModel.ts
var MBModel = __webpack_require__(73102);
// EXTERNAL MODULE: ./src/components/model-editor/MBDataSet.ts
var MBDataSet = __webpack_require__(99941);
// EXTERNAL MODULE: ./src/components/model-editor/TrainModel.tsx
var TrainModel = __webpack_require__(23368);
;// CONCATENATED MODULE: ./src/components/model-editor/ModelBlockEditor.tsx























var MB_EDITOR_ID = "mb";
var MB_SOURCE_STORAGE_KEY = "model-block-blockly-xml";
var MB_DATA_STORAGE_KEY = "model-block-data-json";
var MB_NEW_FILE_CONTENT = JSON.stringify({
  editor: MB_EDITOR_ID,
  xml: ""
});

function getRecordingsFromLocalStorage() {
  // check local storage for blocks
  var dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY);
  if (dataObj == null || dataObj == undefined) return {};
  var modelEditorData = JSON.parse(dataObj); // add recordings from local storage

  var rBlocks = {};

  for (var id in modelEditorData["recordings"]) {
    var recordings = modelEditorData["recordings"][id];
    rBlocks[id] = recordings.map(recording => {
      return FieldDataSet/* default.createFromFile */.ZP.createFromFile(recording);
    });
  }

  return rBlocks;
}

function getTrainedModelsFromLocalStorage() {
  // check local storage for blocks
  var dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY);
  if (dataObj == null || dataObj == undefined) return {};
  var modelEditorData = JSON.parse(dataObj); // add recordings from local storage

  var mBlocks = {};

  for (var id in modelEditorData["models"]) {
    var model = modelEditorData["models"][id];
    mBlocks[id] = MBModel/* default.createFromFile */.ZP.createFromFile(model);
  }

  return mBlocks;
}

function getEmptyMap() {
  return {};
}

function ModelBlockEditorWithContext(props) {
  // block context handles hosting blockly
  var {
    workspace,
    workspaceJSON,
    toolboxConfiguration
  } = (0,react.useContext)(BlockContext/* default */.C);
  var {
    fileSystem
  } = (0,react.useContext)(FileSystemContext/* default */.Z);
  var {
    fileStorage
  } = (0,react.useContext)(ServiceManagerContext/* default */.ZP);
  /* For data storage */

  var {
    allRecordings,
    trainedModels
  } = props;
  var {
    0: currentDataSet,
    1: setCurrentDataSet
  } = (0,react.useState)(undefined);
  var {
    0: currentModel,
    1: setCurrentModel
  } = (0,react.useState)(undefined); // dictionary of model vars and MBModel objs

  var allModels = (0,react.useMemo)(getEmptyMap, []);
  var allDataSets = (0,react.useMemo)(getEmptyMap, []);

  var updateLocalStorage = (newRecordings, newTrainedModels) => {
    var recordings = newRecordings || allRecordings;
    var models = newTrainedModels || trainedModels; // convert dataset object to JSON string

    var modelBlocksDataJSON = JSON.stringify({
      recordings: recordings,
      models: models
    }); // save JSON string in local storage

    localStorage.setItem(MB_DATA_STORAGE_KEY, modelBlocksDataJSON);
  };
  /* For workspace changes */


  var modelBlocks = {};
  var dataSetBlocks = {};

  var updateDataSetBlocks = block => {
    var _block$inputs$0$field;

    var dataSetName = (_block$inputs$0$field = block.inputs[0].fields["dataset_name"].value) === null || _block$inputs$0$field === void 0 ? void 0 : _block$inputs$0$field.toString();

    if (dataSetName) {
      if (dataSetName in dataSetBlocks) {
        setWarning(workspace, block.id, "Two dataset blocks cannot have the same name");
        setWarning(workspace, dataSetBlocks[dataSetName].id, "Two dataset blocks cannot have the same name");
        delete dataSetBlocks[dataSetName];
      } else dataSetBlocks[dataSetName] = block;
    }
  };

  var updateModelBlocks = block => {
    var _block$inputs$0$field2;

    var modelName = (_block$inputs$0$field2 = block.inputs[0].fields["classifier_name"].value) === null || _block$inputs$0$field2 === void 0 ? void 0 : _block$inputs$0$field2.toString();

    if (modelName) {
      if (modelName in modelBlocks) {
        setWarning(workspace, block.id, "Two classifier blocks cannot have the same name");
        setWarning(workspace, modelBlocks[modelName].id, "Two model blocks cannot have the same name");
        delete modelBlocks[modelName];
      } else modelBlocks[modelName] = block;
    }
  }; // clear warnings, collect datasets and models


  (0,react.useEffect)(() => {
    (0,workspacevisitor/* visitWorkspace */.R1)(workspaceJSON, {
      visitBlock: block => {
        // clear warnings on block
        setWarning(workspace, block.id, undefined); // collect dataset blocks

        if (block.type == modelblockdsl/* MODEL_BLOCKS */.GJ + "dataset") {
          updateDataSetBlocks(block);
        } // collect model blocks


        if (block.type == modelblockdsl/* MODEL_BLOCKS */.GJ + "nn") {
          updateModelBlocks(block);
        }
      }
    });
  }, [workspace, workspaceJSON, modelBlocks, dataSetBlocks]);

  var assembleDataSet = dataSetName => {
    // associate block with dataset
    var dataSet = new MBDataSet/* default */.ZP(dataSetName);
    var dataSetBlock = dataSetBlocks[dataSetName]; // grab nested recording blocks and place them in the dataset

    var recordingBlock = dataSetBlock === null || dataSetBlock === void 0 ? void 0 : dataSetBlock.inputs.filter(input => input.name == "LAYER_INPUTS")[0].child;

    if (recordingBlock) {
      var _recordingBlock$input, _recordingBlock$input2, _recordingBlock$child;

      var className = recordingBlock === null || recordingBlock === void 0 ? void 0 : (_recordingBlock$input = recordingBlock.inputs[0].fields) === null || _recordingBlock$input === void 0 ? void 0 : (_recordingBlock$input2 = _recordingBlock$input.class_name) === null || _recordingBlock$input2 === void 0 ? void 0 : _recordingBlock$input2.value;
      allRecordings[recordingBlock.id].forEach(recording => {
        dataSet.addRecording(recording, className, null);
      });
      (_recordingBlock$child = recordingBlock.children) === null || _recordingBlock$child === void 0 ? void 0 : _recordingBlock$child.forEach(childBlock => {
        var _childBlock$inputs$0$, _childBlock$inputs$0$2;

        className = childBlock === null || childBlock === void 0 ? void 0 : (_childBlock$inputs$0$ = childBlock.inputs[0].fields) === null || _childBlock$inputs$0$ === void 0 ? void 0 : (_childBlock$inputs$0$2 = _childBlock$inputs$0$.class_name) === null || _childBlock$inputs$0$2 === void 0 ? void 0 : _childBlock$inputs$0$2.value;
        allRecordings[childBlock.id].forEach(recording => {
          dataSet.addRecording(recording, className, null);
        });
      });
    } // store dataset in memory


    allDataSets[dataSetName] = dataSet;
    return dataSet;
  };

  var assembleModel = modelName => {
    // associate block with model
    var model = allModels[modelName] || new MBModel/* default */.ZP(modelName);
    var modelBlock = modelBlocks[modelName]; // if this model already existed from before

    if (model.blockJSON) {
      // make sure its contents line up with what's saved
      // if not, mark the model as uncompiled / empty
      if (JSON.stringify(modelBlock) != JSON.stringify(model.blockJSON)) {
        model.parseBlockJSON = modelBlock;
        model.status = "empty";
      }
    } else model.parseBlockJSON = modelBlock; // store model in memory


    allModels[modelName] = model;
    return model;
  };

  var addParametersToDataSetBlock = dataSet => {
    var dataSetName = dataSet.name;
    var inputTypes = dataSet.inputTypes;
    var dataSetBlock = workspace.getBlockById(dataSetBlocks[dataSetName].id); // update the parameters of the dataset

    var paramField = dataSetBlock.getField("EXPAND_BUTTON");
    paramField.updateFieldValue({
      numSamples: dataSet.totalRecordings,
      inputClasses: dataSet.labels,
      inputTypes: inputTypes,
      shape: [dataSet.length, dataSet.width]
    });
  };

  var addParametersToModelBlock = model => {
    var modelName = model.name;
    var totalStats = model.modelStats.total;
    var layerStats = model.modelStats.layers; // update field parameters for each block in model

    var modelBlock = workspace.getBlockById(modelBlocks[modelName].id);

    if (modelBlock) {
      var paramField = modelBlock.getField("EXPAND_BUTTON");
      var totalModelSize = totalStats.codeBytes + totalStats.weightBytes;
      var totalModelParams = totalStats.weightBytes / MBModel/* MCU_FLOAT_SIZE */.Xl;
      paramField.updateFieldValue({
        totalLayers: layerStats.length,
        inputShape: totalStats.inputShape,
        runTimeInMs: totalStats.optimizedCycles / MBModel/* MCU_SPEED */.HG,
        totalSize: totalModelSize,
        totalParams: totalModelParams
      }); // go through layers

      model.layerJSON.forEach((layer, idx) => {
        var layerBlock = workspace.getBlockById(layer.id);

        if (layerBlock) {
          var layerParamField = layerBlock.getField("EXPAND_BUTTON");
          var totalLayerSize = layerStats[idx].codeBytes + layerStats[idx].weightBytes;
          var totalLayerParams = layerStats[idx].weightBytes / MBModel/* MCU_FLOAT_SIZE */.Xl;
          layerParamField.updateFieldValue({
            outputShape: layerStats[idx].outputShape,
            percentSize: totalLayerSize * 100 / totalModelSize,
            percentParams: totalLayerParams * 100 / totalModelParams,
            runTimeInMs: layerStats[idx].optimizedCycles / MBModel/* MCU_SPEED */.HG
          });
        }
      });
    } else console.error("Could not locate block " + {
      modelName: modelName,
      id: modelBlocks[modelName].id
    });
  };

  (0,react.useEffect)(() => {
    var _loop = function _loop(dataSetName) {
      var dataSet = assembleDataSet(dataSetName);
      var dataSetWarnings = (0,MBDataSet/* validDataSetJSON */.dP)(dataSetBlocks[dataSetName]);

      if (dataSetWarnings) {
        if (Object.keys(dataSetWarnings).length) {
          Object.keys(dataSetWarnings).forEach(blockId => {
            setWarning(workspace, blockId, dataSetWarnings[blockId]);
          });
        } else {
          (0,TrainModel/* prepareDataSet */.Vn)(dataSet);
          addParametersToDataSetBlock(dataSet);
        }
      }
    };

    // compile datasets and set warnings if necessary
    for (var dataSetName in dataSetBlocks) {
      _loop(dataSetName);
    } // compile all models and set warnings if necessary


    for (var modelName in modelBlocks) {
      var _modelBlocks$modelNam;

      // grab the MBModel associated with a model name
      var model = assembleModel(modelName); // grab the dataset that will be used to train the mbmodel

      var _dataSetName = (_modelBlocks$modelNam = modelBlocks[modelName].inputs[1].fields["nn_training"].value) === null || _modelBlocks$modelNam === void 0 ? void 0 : _modelBlocks$modelNam.toString();

      var trainingDataSet = allDataSets[_dataSetName]; // make sure the dataset does not have warnings on it

      var dataSetWarnings = (0,MBDataSet/* validDataSetJSON */.dP)(dataSetBlocks[_dataSetName]);

      if (dataSetWarnings && !Object.keys(dataSetWarnings).length) {
        (function () {
          // make sure the model (defined by the workspaceJSON) is valid
          var modelWarnings = (0,MBModel/* validModelJSON */.Ru)(model.blockJSON); // if there are warnings, assign warnings to each block in the model

          if (modelWarnings) {
            if (Object.keys(modelWarnings).length) {
              Object.keys(modelWarnings).forEach(blockId => {
                setWarning(workspace, blockId, modelWarnings[blockId]);
              });
            } else {
              // there are no warnings, compile the model
              (0,TrainModel/* prepareModel */.g2)(model, trainingDataSet, addParametersToModelBlock);
            }
          }
        })();
      }
    }
  }, [workspace, workspaceJSON]);
  /* block services (warnings and data) */

  var setWarning = (workspace, blockId, warningText) => {
    var block = workspace.getBlockById(blockId);
    var blockServices = (0,WorkspaceContext/* resolveBlockServices */.Ys)(block);
    if (blockServices) blockServices.setWarning(toolbox/* MB_WARNINGS_CATEGORY */.q1, warningText);
  };

  var setData = (workspace, blockId, dataArray) => {
    var block = workspace.getBlockById(blockId);
    var blockServices = (0,WorkspaceContext/* resolveBlockServices */.Ys)(block);
    if (blockServices) blockServices.data = dataArray;
  };
  /* For dialog handling */


  var {
    0: recordDataDialogVisible,
    1: setRecordDataDialogVisible
  } = (0,react.useState)(false);
  var {
    0: trainModelDialogVisible,
    1: setTrainModelDialogVisible
  } = (0,react.useState)(false);
  var {
    0: viewDataSetDialogVisible,
    1: setViewDataSetDialogVisible
  } = (0,react.useState)(false);
  var {
    0: newClassifierDialogVisible,
    1: setNewClassifierDialogVisible
  } = (0,react.useState)(false);

  var toggleViewDataSetDialog = () => toggleDialog("dataset");

  var toggleRecordDataDialog = () => toggleDialog("recording");

  var toggleTrainModelDialog = () => toggleDialog("model");

  var toggleNewClassifierDialog = () => toggleDialog("classifier");

  var toggleDialog = dialog => {
    if (dialog == "dataset") {
      var b = !viewDataSetDialogVisible;
      setViewDataSetDialogVisible(b);
    } else if (dialog == "recording") {
      var _b = !recordDataDialogVisible;

      setRecordDataDialogVisible(_b);
    } else if (dialog == "model") {
      var _b2 = !trainModelDialogVisible;

      setTrainModelDialogVisible(_b2);
    } else if (dialog == "classifier") {
      var _b3 = !newClassifierDialogVisible;

      setNewClassifierDialogVisible(_b3);
    }
  };

  var closeModal = modal => {
    if (modal == "dataset") {
      // reset dataset that gets passed to dialogs
      setCurrentDataSet(undefined); // close dialog

      toggleViewDataSetDialog();
    } else if (modal == "model") {
      // reset dataset and model that gets passed to dialogs
      setCurrentDataSet(undefined);
      setCurrentModel(undefined); // close dialog

      toggleTrainModelDialog();
    } else if (modal == "classifier") {
      // close diaglog
      toggleNewClassifierDialog();
    }
  };

  var buttonsWithDialogs = {
    createNewDataSetButton: addNewDataSet,
    createNewRecordingButton: toggleRecordDataDialog,
    createNewClassifierButton: toggleNewClassifierDialog
  };

  var openDataSetModal = clickedBlock => {
    var dataSetName = clickedBlock.getField("DATASET_NAME").getText();
    var selectedDataset = allDataSets[dataSetName];
    var dataSetWarnings = (0,MBDataSet/* validDataSetJSON */.dP)(dataSetBlocks[dataSetName]);

    if (!dataSetWarnings || Object.keys(dataSetWarnings).length) {
      blockly_default().alert("This dataset cannot be opened. Address the warnings on the dataset definition block.");
    } else {
      setCurrentDataSet(selectedDataset); // open the view dataset modal

      toggleViewDataSetDialog();
    }
  };

  var closeRecordingModal = (recording, blockId) => {
    // save the new recording
    if (recording && blockId) {
      // Add recording data to list of recordings
      allRecordings[blockId] = recording;
      updateLocalStorage(allRecordings, null); // keep this info so this block can be duplicated

      var newBlock = workspace.getBlockById(blockId);
      var expandField = newBlock.getField("EXPAND_BUTTON");
      expandField.updateFieldValue({
        originalBlock: blockId
      });
    } // close dialog


    toggleRecordDataDialog();
  };

  var openTrainingModal = clickedBlock => {
    // setup model for training
    var modelName = clickedBlock.getField("CLASSIFIER_NAME").getText();
    var selectedModel = allModels[modelName]; // setup dataset for training

    var dataSetName = clickedBlock.getField("NN_TRAINING").getText();
    var selectedDataset = allDataSets[dataSetName];
    var dataSetWarnings = (0,MBDataSet/* validDataSetJSON */.dP)(dataSetBlocks[dataSetName]);

    if (!dataSetWarnings || Object.keys(dataSetWarnings).length) {
      blockly_default().alert("This model cannot be trained. Address the warnings on the dataset definition block.");
    } else {
      var modelWarnings = (0,MBModel/* validModelJSON */.Ru)(modelBlocks[modelName]);

      if (!modelWarnings || Object.keys(modelWarnings).length) {
        blockly_default().alert("This model cannot be trained. Address the warnings on model architecture block.");
      } else {
        // update the model and dataset to pass to the modal
        setCurrentModel(selectedModel);
        setCurrentDataSet(selectedDataset); // open the training modal

        toggleTrainModelDialog();
      }
    }
  };

  var updateModel = (model, blockId) => {
    // Add trained model to record of allModels
    if (model) allModels[model.name] = model; // Model was trained, add model to list of trained models

    if (blockId) {
      var trainedModel = MBModel/* default.createFromFile */.ZP.createFromFile(model.toJSON());
      trainedModels[blockId] = trainedModel; // add dataset and model to new block

      var newBlock = workspace.getBlockById(blockId);
      var services = (0,WorkspaceContext/* resolveBlockServices */.Ys)(newBlock);
      services.data = [currentDataSet, trainedModel]; // keep this info so this block can be duplicated

      var expandField = newBlock.getField("TRAINED_MODEL_DISPLAY");
      expandField.updateFieldValue({
        originalBlock: blockId
      });
      updateLocalStorage(null, trainedModels);
    }
  };
  /* For button callbacks */


  (0,react.useEffect)(() => {
    // register callbacks buttons with custom dialogs
    (0,toolbox/* visitToolbox */.j2)(toolboxConfiguration, {
      visitButton: btn => {
        if (btn.callbackKey in buttonsWithDialogs) {
          btn.callback = workspace => {
            buttonsWithDialogs[btn.callbackKey](workspace);
          };
        }
      }
    });
  }, [toolboxConfiguration]);
  /* For block button clicks */

  var resolveRecordingBlockInfo = recordingBlock => {
    // get recording
    var recording = allRecordings[recordingBlock.id];

    if (!recording) {
      // this block must be a duplicate, get the original block id
      var originalBlockId = JSON.parse(recordingBlock.getFieldValue("EXPAND_BUTTON"))["originalBlock"];
      recording = allRecordings[originalBlockId]; // add duplicate block to list of trained models

      allRecordings[recordingBlock.id] = recording;
      updateLocalStorage(allRecordings, null);
      var expandField = recordingBlock.getField("EXPAND_BUTTON");
      expandField.updateFieldValue({
        originalBlock: recordingBlock.id
      });
    } // add recording data to block


    setData(workspace, recordingBlock.id, recording);
  };

  var resolveTrainedModelBlockInfo = trainedModelBlock => {
    // get model
    var model = trainedModels[trainedModelBlock.id];

    if (!model) {
      // this block must be a duplicate, get the original block id
      var originalBlockId = JSON.parse(trainedModelBlock.getFieldValue("TRAINED_MODEL_DISPLAY"))["originalBlock"];
      model = trainedModels[originalBlockId]; // add duplicate block to list of trained models

      trainedModels[trainedModelBlock.id] = model;
      updateLocalStorage(null, trainedModels);
      var expandField = trainedModelBlock.getField("TRAINED_MODEL_DISPLAY");
      expandField.updateFieldValue({
        originalBlock: trainedModelBlock.id
      });
    } // get dataset


    var dataSetName = trainedModelBlock.getField("MODEL_TEST_SET").getText();
    var dataset = allDataSets[dataSetName];

    if (dataset) {
      var dataSetWarnings = (0,MBDataSet/* validDataSetJSON */.dP)(dataSetBlocks[dataSetName]);

      if (!dataSetWarnings || Object.keys(dataSetWarnings).length) {
        setWarning(workspace, trainedModelBlock.id, "This dataset cannot be tested. Address the warnings on the dataset definition block.");
        dataset = undefined;
      }
    }

    if (dataset && model) setData(workspace, trainedModelBlock.id, [dataset, model, fileStorage]);
  };

  var handleWorkspaceChange = event => {
    if (event.type == (blockly_default()).Events.BLOCK_DELETE) {
      event.ids.forEach(blockId => {
        delete allRecordings[blockId];
        delete trainedModels[blockId];
      });
      updateLocalStorage(allRecordings, trainedModels);
    } else if (event.type == (blockly_default()).Events.BLOCK_CREATE && event.ids) {
      // add info to newly created recording and trained model blocks
      event.ids.forEach(blockId => {
        var createdBlock = workspace.getBlockById(blockId);
        if (createdBlock.type == "model_block_trained_nn") resolveTrainedModelBlockInfo(createdBlock);else if (createdBlock.type == "model_block_recording") resolveRecordingBlockInfo(createdBlock);
      });
    } else if (event.type == (blockly_default()).Events.CLICK && event.blockId) {
      var clickedBlock = workspace.getBlockById(event.blockId);

      if (clickedBlock.data && clickedBlock.data.startsWith("click")) {
        var command = clickedBlock.data.split(".")[1];

        if (command == "download") {
          var recording = allRecordings[clickedBlock.id]; // find the correct recording, dataset, or model to download

          if (recording) {
            // get recording, recording name, and class name
            var className = clickedBlock.getField("CLASS_NAME").getText();
            downloadRecordings(recording, className);
          } else {
            // we have a model or dataset
            if (clickedBlock.type == modelblockdsl/* MODEL_BLOCKS */.GJ + "dataset") {
              var dataSetName = clickedBlock.getField("DATASET_NAME").getText();
              var dataSet = allDataSets[dataSetName];
              downloadFile(dataSet.toCSV(), dataSetName, "csv");
            } else if (clickedBlock.type == modelblockdsl/* MODEL_BLOCKS */.GJ + "nn") {
              var modelName = clickedBlock.getField("CLASSIFIER_NAME").getText();
              var model = allModels[modelName];
              downloadFile(JSON.stringify(model), modelName, "json");
            } else if (clickedBlock.type == modelblockdsl/* MODEL_BLOCKS */.GJ + "trained_nn") {
              var _model = trainedModels[clickedBlock.id];
              downloadFile(JSON.stringify(_model), _model.name, "json");
            }
          }
        } else if (command == "edit") {
          openDataSetModal(clickedBlock);
        } else if (command == "train") {
          openTrainingModal(clickedBlock);
        } // clear the command


        clickedBlock.data = null;
      }
    } else if (event.type == (blockly_default()).Events.BLOCK_CHANGE && event.blockId) {
      // update trained model blocks on dropdown changes
      var changedBlock = workspace.getBlockById(event.blockId);

      if (changedBlock.data && changedBlock.data.startsWith("click")) {
        var _command = changedBlock.data.split(".")[1];

        if (_command == "refreshdisplay") {
          resolveTrainedModelBlockInfo(changedBlock);
        } // clear the command


        changedBlock.data = null;
      }
    }
  };

  var downloadRecordings = (recordings, className) => {
    var recordingCountHeader = "Number of recordings," + recordings.length;
    var recordingData = [];
    recordings.forEach(sample => {
      recordingData.push("Recording metadata," + sample.name + "," + sample.rows.length + "," + className);
      recordingData.push(sample.toCSV());
    });
    var recordData = recordingData.join("\n");
    var csv = [recordingCountHeader, recordData];
    downloadFile(csv.join("\n"), recordings[0].name, "csv");
  };

  var downloadFile = (content, fileName, fileType) => {
    fileStorage.saveText(fileName + "." + fileType, content);
  };

  (0,react.useEffect)(() => {
    if (workspace) workspace.addChangeListener(handleWorkspaceChange);
    return () => {
      if (workspace) workspace.removeChangeListener(handleWorkspaceChange);
    };
  }, [workspace, workspaceJSON]);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, !!fileSystem && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(FileTabs/* default */.Z, {
    newFileName: toolbox/* WORKSPACE_FILENAME */.cR,
    newFileContent: MB_NEW_FILE_CONTENT,
    hideFiles: true
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(BlockEditor/* default */.Z, {
    editorId: MB_EDITOR_ID
  }), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(BlockDiagnostics/* default */.Z, null), /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ModelBlockDialogs, {
    viewDataSetDialogVisible: viewDataSetDialogVisible,
    recordDataDialogVisible: recordDataDialogVisible,
    trainModelDialogVisible: trainModelDialogVisible,
    newClassifierDialogVisible: newClassifierDialogVisible,
    onRecordingDone: closeRecordingModal,
    onModelUpdate: updateModel,
    closeModal: closeModal,
    workspace: workspace,
    dataset: currentDataSet,
    model: currentModel,
    recordingCount: Object.keys(allRecordings).length,
    trainedModelCount: Object.keys(trainedModels).length
  }))), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(BlockDiagnostics/* default */.Z, null));
}

function ModelBlockEditor() {
  var dsls = (0,react.useMemo)(() => {
    return [modelblockdsl/* default */.ZP, shadowdsl/* default */.Z, fieldsdsl/* default */.Z];
  }, []);
  var recordings = getRecordingsFromLocalStorage();
  var models = getTrainedModelsFromLocalStorage();
  return /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(FileSystemContext/* FileSystemProvider */.P, null, /*#__PURE__*/react.createElement(BlockContext/* BlockProvider */.Z, {
    storageKey: MB_SOURCE_STORAGE_KEY,
    dsls: dsls
  }, /*#__PURE__*/react.createElement(ModelBlockEditorWithContext, {
    allRecordings: recordings,
    trainedModels: models
  }))));
}
;// CONCATENATED MODULE: ./src/pages/editors/ml.tsx


function Page() {
  return /*#__PURE__*/react.createElement(ModelBlockEditor, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-editors-ml-tsx-1584267205d562d81362.js.map