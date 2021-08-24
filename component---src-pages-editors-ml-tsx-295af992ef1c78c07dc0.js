"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4230],{

/***/ 98899:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./src/components/blockly/BlockContext.tsx + 16 modules
var BlockContext = __webpack_require__(82393);
// EXTERNAL MODULE: ./src/components/blockly/BlockEditor.tsx + 5 modules
var BlockEditor = __webpack_require__(39067);
// EXTERNAL MODULE: ./src/components/blockly/dsl/variablesdsl.ts
var variablesdsl = __webpack_require__(86947);
// EXTERNAL MODULE: ./src/components/blockly/dsl/shadowdsl.ts
var shadowdsl = __webpack_require__(96958);
// EXTERNAL MODULE: ./src/components/model-editor/modelblockdsl.ts
var modelblockdsl = __webpack_require__(95149);
// EXTERNAL MODULE: ./src/components/model-editor/ModelBlockModals.tsx
var ModelBlockModals = __webpack_require__(22455);
// EXTERNAL MODULE: ./src/components/blockly/dsl/fieldsdsl.ts
var fieldsdsl = __webpack_require__(76658);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./src/components/blockly/BlockDiagnostics.tsx
var BlockDiagnostics = __webpack_require__(9370);
// EXTERNAL MODULE: ./jacdac-ts/src/dsl/workspacevisitor.ts
var workspacevisitor = __webpack_require__(78870);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
// EXTERNAL MODULE: ./src/components/blockly/toolbox.ts
var toolbox = __webpack_require__(16582);
// EXTERNAL MODULE: ./src/components/FieldDataSet.ts
var FieldDataSet = __webpack_require__(64616);
;// CONCATENATED MODULE: ./src/components/model-editor/ModelBlockEditor.tsx















var RecordDataDialog = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(8270), __webpack_require__.e(7476), __webpack_require__.e(2525)]).then(__webpack_require__.bind(__webpack_require__, 82525)));
var MB_EDITOR_ID = "mb";
var MB_SOURCE_STORAGE_KEY = "model-block-blockly-xml";
var MB_DATA_STORAGE_KEY = "model-block-data-json";

function getRecordingsFromLocalStorage() {
  var dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY);
  if (dataObj == null || dataObj == undefined) return {};
  var modelEditorData = JSON.parse(dataObj); // construct new recordings object

  var allRecordings = {};

  for (var id in modelEditorData["recordings"]) {
    var recordings = modelEditorData["recordings"][id];
    allRecordings[id] = recordings.map(recording => {
      return FieldDataSet/* default.createFromFile */.ZP.createFromFile(recording);
    });
  }

  return allRecordings;
}

function getDataSetsFromLocalStorage() {
  return {};
  /*const dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY)
  if (dataObj == null || dataObj == undefined) return {}
  const modelEditorData = JSON.parse(dataObj)
  return MBModel.createFromFile(modelEditorData["datasets"])*/
}

function getModelsFromLocalStorage() {
  return {};
  /*const dataObj = localStorage.getItem(MB_DATA_STORAGE_KEY)
  if (dataObj == null || dataObj == undefined) return {}
  const modelEditorData = JSON.parse(dataObj)
  return MBModel.createFromFile(modelEditorData["model"])*/
}

function ModelBlockEditorWithContext() {
  // store recordings, datasets, and models
  var {
    0: allRecordings,
    1: setAllRecordings
  } = (0,react.useState)(getRecordingsFromLocalStorage() // Randi replace with useMemo(() => ..., [])
  ); // dictionary of recording block ids and FieldDataSet arrays

  var {
    0: allDataSets,
    1: setAllDataSets
  } = (0,react.useState)(getDataSetsFromLocalStorage); // dictionary of dataset vars and ModelDataSet objs

  var {
    0: allModels,
    1: setAllModels
  } = (0,react.useState)(getModelsFromLocalStorage); // dictionary of model vars and MBModel objs
  // block context handles hosting blockly

  var {
    workspace,
    workspaceJSON,
    toolboxConfiguration
  } = (0,react.useContext)(BlockContext/* default */.C);
  var {
    0: recordDataDialogVisible,
    1: setRecordDataDialogVisible
  } = (0,react.useState)(false);

  var toggleRecordDataDialog = () => {
    // update visibility of recording dialog
    var b = !recordDataDialogVisible;
    setRecordDataDialogVisible(b);
  };

  var updateAllRecordings = (recording, blockId) => {
    // Add recording data to list of recordings
    allRecordings[blockId] = recording;
    updateLocalStorage(allRecordings, null, null);
  };

  var updateLocalStorage = (newRecordings, newDataSets, newModels) => {
    var recordings = newRecordings || allRecordings;
    var datasets = newDataSets || allDataSets;
    var models = newModels || allModels; // convert dataset object to JSON string

    var modelBlocksDataJSON = JSON.stringify({
      recordings: recordings,
      datasets: datasets,
      models: models // Randi TODO make sure you stringify this correctly

    }); // save JSON string in local storage

    localStorage.setItem(MB_DATA_STORAGE_KEY, modelBlocksDataJSON);
    console.log("Randi updating saved data for blocks: ", {
      recordings,
      datasets,
      models
    });
  }; // run this when workspaceJSON changes


  (0,react.useEffect)(() => {
    (0,workspacevisitor/* visitWorkspace */.R1)(workspaceJSON, {
      visitBlock: block => {
        // Collect data for dataset blocks
        // Randi TODO remove from allRecordings anything that is no longer present on the workspace
        if (block.type == modelblockdsl/* MODEL_BLOCKS */.GJ + "dataset") {
          console.log("Randi dataset block: ", {
            name: block.inputs[0].fields["dataset_name"],
            id: block.id,
            block: block
          }); // get all nested recordings

          var recordingBlock = block.inputs.filter(input => input.name == "DATASET_RECORDINGS")[0].child;

          if (recordingBlock) {
            var _recordingBlock$child;

            console.log("Randi recording data: ", {
              recording: allRecordings[recordingBlock.id],
              block: recordingBlock
            });
            (_recordingBlock$child = recordingBlock.children) === null || _recordingBlock$child === void 0 ? void 0 : _recordingBlock$child.forEach(childBlock => console.log("Randi recording data: ", {
              recording: allRecordings[childBlock.id],
              block: childBlock
            }));
          }
        } // Collect layers for neural network blocks
        else if (block.type == modelblockdsl/* MODEL_BLOCKS */.GJ + "nn") {
          // Randi TODO delete recordings that are no longer present on the workspace
          console.log("Randi neural network block: ", {
            name: block.inputs[0].fields["classifier_name"],
            id: block.id,
            block: block
          }); // get all nested layers

          var layerBlock = block === null || block === void 0 ? void 0 : block.inputs.filter(input => input.name == "NN_LAYERS")[0].child;

          if (layerBlock) {
            var _layerBlock$children;

            console.log("Randi layer data: ", {
              block: layerBlock
            });
            (_layerBlock$children = layerBlock.children) === null || _layerBlock$children === void 0 ? void 0 : _layerBlock$children.forEach(childBlock => console.log("Randi layer data: ", {
              block: childBlock
            }));
          }
        } else {
          console.log("block " + block.type, {
            block
          });
        }
      }
    });
  }, [workspaceJSON]);
  var buttonsWithDialogs = {
    createNewDataSetButton: ModelBlockModals/* addNewDataSet */.yJ,
    createNewRecordingButton: toggleRecordDataDialog,
    createNewClassifierButton: ModelBlockModals/* addNewClassifier */.WV
  }; // set button callbacks

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
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(BlockEditor/* default */.Z, {
    editorId: MB_EDITOR_ID
  }), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(BlockDiagnostics/* default */.Z, null), recordDataDialogVisible && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(RecordDataDialog, {
    open: recordDataDialogVisible,
    onDone: updateAllRecordings,
    onClose: toggleRecordDataDialog,
    recordingCount: Object.keys(allRecordings).length,
    workspace: workspace
  })));
}

function ModelBlockEditor() {
  var dsls = (0,react.useMemo)(() => {
    return [modelblockdsl/* default */.ZP, shadowdsl/* default */.Z, fieldsdsl/* default */.Z, variablesdsl/* default */.Z];
  }, []);
  return /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(BlockContext/* BlockProvider */.Z, {
    storageKey: MB_SOURCE_STORAGE_KEY,
    dsls: dsls
  }, /*#__PURE__*/react.createElement(ModelBlockEditorWithContext, null)));
}
;// CONCATENATED MODULE: ./src/pages/editors/ml.tsx


function Page() {
  return /*#__PURE__*/react.createElement(ModelBlockEditor, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-editors-ml-tsx-295af992ef1c78c07dc0.js.map