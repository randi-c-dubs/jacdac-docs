"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4128],{

/***/ 73595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export resolveUsedDataVariables */
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73108);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fields_BuiltinDataSetField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69223);
/* harmony import */ var _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44393);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16582);
/* harmony import */ var _workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21190);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89801);
/* harmony import */ var _fields_FileSaveField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4383);
/* harmony import */ var _workers_csv_proxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53480);
/* harmony import */ var _fields_FileOpenField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39311);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74602);
/* harmony import */ var _fields_tidy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47554);
/* harmony import */ var _fields_DataTableField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54741);
/* harmony import */ var _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16229);
/* harmony import */ var _fields_chart_ScatterPlotField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88533);
/* harmony import */ var _fs_fs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31396);


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
var [datasetColour, operatorsColour, computeColour, statisticsColour] = (0,_palette__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z)();
var dataVariablesColour = "%{BKY_VARIABLES_HUE}";
var calcOptions = ["mean", "median", "min", "max", "sum", "deviation", "variance"].map(n => [n, n]);
var dataDsl = {
  id: "dataScience",
  createBlocks: () => [{
    kind: "block",
    type: DATA_ARRANGE_BLOCK,
    message0: "arrange %1 %2",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column"
    }, {
      type: "field_dropdown",
      name: "order",
      options: [["ascending", "ascending"], ["descending", "descending"]]
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      var order = b.getFieldValue("order");
      var descending = order === "descending";
      if (!column) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
        type: "arrange",
        column,
        descending,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_DROP_BLOCK,
    message0: "drop %1 %2 %3",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column1"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column2"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column3"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var columns = [1, 2, 3].map(column => (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column)).filter(c => !!c);
      if (!(columns !== null && columns !== void 0 && columns.length)) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
        type: "drop",
        columns,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_SELECT_BLOCK,
    message0: "select %1 %2 %3 %4",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column1"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column2"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column3"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column4"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var columns = [1, 2, 3, 4].map(column => (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column)).filter(c => !!c);
      if (!(columns !== null && columns !== void 0 && columns.length)) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
        type: "select",
        columns,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_FILTER_COLUMNS_BLOCK,
    message0: "filter %1 %2 %3",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column1"
    }, {
      type: "field_dropdown",
      name: "logic",
      options: [[">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column2"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var columns = [1, 2].map(column => (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column)).filter(c => !!c);
      var logic = b.getFieldValue("logic");
      if (columns.length !== 2) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
        type: "filter_columns",
        columns,
        logic,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_FILTER_STRING_BLOCK,
    message0: "filter %1 %2 %3",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
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
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      var logic = b.getFieldValue("logic");
      var rhs = b.getFieldValue("rhs");
      if (!column) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
        type: "filter_string",
        column,
        logic,
        rhs,
        data
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
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "lhs",
      dataType: "number"
    }, {
      type: "field_dropdown",
      name: "logic",
      options: [["+", "plus"], ["-", "minus"], ["*", "mult"], ["/", "div"], [">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "rhs",
      dataType: "number"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var newcolumn = b.getFieldValue("newcolumn");
      var lhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "lhs", {
        type: "number"
      });
      var rhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "rhs", {
        type: "number"
      });
      var logic = b.getFieldValue("logic");
      if (!newcolumn || !lhs || !rhs) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
        type: "mutate_columns",
        newcolumn,
        lhs,
        rhs,
        logic,
        data
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
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
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
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var newcolumn = b.getFieldValue("newcolumn");
      var lhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "lhs", {
        type: "number"
      });
      var rhs = b.getFieldValue("rhs");
      var logic = b.getFieldValue("logic");
      if (!newcolumn || !lhs) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
        type: "mutate_number",
        newcolumn,
        lhs,
        rhs,
        logic,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_SUMMARIZE_BLOCK,
    message0: "summarize %1 calculate %2",
    colour: computeColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column",
      dataType: "number"
    }, {
      type: "field_dropdown",
      name: "calc",
      options: calcOptions
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var columns = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumns */ .QZ)(data, b, "column", {
        type: "number"
      });
      var calc = b.getFieldValue("calc");
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
        type: "summarize",
        columns,
        calc,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_SUMMARIZE_BY_GROUP_BLOCK,
    message0: "group %1 by %2 calculate %3",
    colour: computeColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "by"
    }, {
      type: "field_dropdown",
      name: "calc",
      options: calcOptions
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      var by = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "by");
      var calc = b.getFieldValue("calc");
      if (!by) return Promise.resolve([]);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
        type: "summarize_by_group",
        column,
        by,
        calc,
        data
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
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var count = b.getFieldValue("count");
      var operator = b.getFieldValue("operator");
      return (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidySlice */ .HA)(data, {
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
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      if (!column) return Promise.resolve([]);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
        type: "count",
        column,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_DATASET_BUILTIN_BLOCK,
    message0: "dataset %1",
    tooltip: "Loads a builtin dataset",
    args0: [{
      type: _fields_BuiltinDataSetField__WEBPACK_IMPORTED_MODULE_1__/* .default.KEY */ .Z.KEY,
      name: "dataset"
    }],
    inputsInline: false,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: datasetColour,
    template: "meta",
    dataPreviewField: true,
    transformData: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .identityTransformData */ .FW
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
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: dataVariablesColour,
    template: "meta",
    dataPreviewField: "after",
    transformData: b => {
      var services = (0,_WorkspaceContext__WEBPACK_IMPORTED_MODULE_5__/* .resolveBlockServices */ .Ys)(b);
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
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: dataVariablesColour,
    template: "meta",
    dataPreviewField: "after",
    transformData: (b, data) => {
      // grab the variable from the block
      var variable = b.getFieldValue("data");
      if (!variable) return Promise.resolve(undefined);
      var readBlocks = b.workspace.getBlocksByType(DATA_DATAVARIABLE_READ_BLOCK, false);
      var readServices = readBlocks.filter(b => b.isEnabled()).filter(b => b.getFieldValue("data") === variable).map(b => b.jacdacServices).filter(services => !!services);
      readServices.forEach(services => services.data = data);
      return Promise.resolve(data);
    }
  }, {
    kind: "block",
    type: DATA_BIN_BLOCK,
    message0: "bin by %1",
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "column",
      dataType: "number"
    }],
    inputsInline: false,
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: computeColour,
    template: "meta",
    dataPreviewField: true,
    transformData: function () {
      var _transformData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z)(function* (b, data) {
        var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column", {
          type: "number"
        });
        if (!column) return Promise.resolve([]);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
          type: "bin",
          column,
          data
        });
      });

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
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "x",
      dataType: "number"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "y",
      dataType: "number"
    }, {
      type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_11__/* .default.KEY */ .Z.KEY,
      name: "preview",
      compare: true
    }, {
      type: "input_dummy"
    }, {
      type: _fields_DataTableField__WEBPACK_IMPORTED_MODULE_10__/* .default.KEY */ .Z.KEY,
      name: "table",
      transformed: true,
      small: true
    }],
    inputsInline: false,
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: statisticsColour,
    template: "meta",
    dataPreviewField: false,
    passthroughData: true,
    transformData: function () {
      var _transformData2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z)(function* (b, data) {
        var column1 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "x", {
          type: "number"
        });
        var column2 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "y", {
          type: "number"
        });
        if (!column1 || !column2) return Promise.resolve([]);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
          type: "correlation",
          column1,
          column2,
          data
        });
      });

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
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "x",
      dataType: "number"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_2__/* .default.KEY */ .Z.KEY,
      name: "y",
      dataType: "number"
    }, {
      type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_11__/* .default.KEY */ .Z.KEY,
      name: "preview",
      compare: true
    }, {
      type: "input_dummy"
    }, {
      type: _fields_chart_ScatterPlotField__WEBPACK_IMPORTED_MODULE_12__/* .default.KEY */ .Z.KEY,
      name: "plot",
      linearRegression: true
    }],
    inputsInline: false,
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: statisticsColour,
    template: "meta",
    dataPreviewField: false,
    passthroughData: true,
    transformData: function () {
      var _transformData3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z)(function* (b, data) {
        var column1 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "x", {
          type: "number"
        });
        var column2 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_9__/* .tidyResolveFieldColumn */ .Fy)(data, b, "y", {
          type: "number"
        });
        if (!column1 || !column2) return Promise.resolve([]);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
          type: "linear_regression",
          column1,
          column2,
          data
        });
      });

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
      type: _fields_FileOpenField__WEBPACK_IMPORTED_MODULE_8__/* .default.KEY */ .Z.KEY,
      name: "file"
    }],
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: datasetColour,
    template: "meta",
    inputsInline: false,
    dataPreviewField: true,
    transformData: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .identityTransformData */ .FW
  }, {
    kind: "block",
    type: DATA_SAVE_FILE_BLOCK,
    message0: "save dataset to file %1",
    args0: [{
      type: _fields_FileSaveField__WEBPACK_IMPORTED_MODULE_6__/* .default.KEY */ .Z.KEY,
      name: "file"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: datasetColour,
    template: "meta",
    inputsInline: false,
    dataPreviewField: "after",
    transformData: function () {
      var _transformData4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z)(function* (block, data) {
        var file = block.getField("file");
        if (file !== null && file !== void 0 && file.fileHandle && data) yield (0,_workers_csv_proxy__WEBPACK_IMPORTED_MODULE_7__/* .saveCSV */ .Eg)(file.fileHandle, data);
        return data;
      });

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
      type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_11__/* .default.KEY */ .Z.KEY,
      name: "preview"
    }, {
      type: "input_dummy"
    }, {
      type: "field_multilinetext",
      name: "text",
      text: "And then...",
      spellcheck: true
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: operatorsColour,
    template: "meta",
    inputsInline: false,
    dataPreviewField: false,
    transformData: _toolbox__WEBPACK_IMPORTED_MODULE_3__/* .identityTransformData */ .FW
  }],
  createCategory: () => [{
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
      callback: workspace => {
        var services = (0,_WorkspaceContext__WEBPACK_IMPORTED_MODULE_5__/* .resolveWorkspaceServices */ .O7)(workspace);
        var directory = services === null || services === void 0 ? void 0 : services.workingDirectory;
        if (!directory) (0,blockly__WEBPACK_IMPORTED_MODULE_0__.alert)("You need to open a directory to import a dataset.");else {
          (0,_fs_fs__WEBPACK_IMPORTED_MODULE_15__/* .importCSVFilesIntoWorkspace */ .U5)(directory.handle).then(() => directory.sync()).then(() => (0,blockly__WEBPACK_IMPORTED_MODULE_0__.alert)("Datasets imported!"));
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
      callback: workspace => blockly__WEBPACK_IMPORTED_MODULE_0__.Variables.createVariableButtonHandler(workspace, null, DATA_TABLE_TYPE)
    }, {
      kind: "block",
      type: DATA_DATAVARIABLE_READ_BLOCK
    }, {
      kind: "block",
      type: DATA_DATAVARIABLE_WRITE_BLOCK
    }]
  }],
  createWorkspaceChangeListener: () => event => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var {
      type,
      blockId
    } = event;
    var isBlockChange = type === blockly__WEBPACK_IMPORTED_MODULE_0__.Events.BLOCK_CHANGE || type === blockly__WEBPACK_IMPORTED_MODULE_0__.Events.BLOCK_MOVE;

    if (isBlockChange || type === blockly__WEBPACK_IMPORTED_MODULE_0__.Events.FINISHED_LOADING) {
      var workspace = event.getEventWorkspace_();

      if (isBlockChange) {
        var block = workspace.getBlockById(blockId);
        if ((block === null || block === void 0 ? void 0 : block.type) !== DATA_DATAVARIABLE_WRITE_BLOCK) return; // nothing so see here
      } // collect set variables blocks,
      // and make sure only 1 of them is enabled


      var setvars = workspace.getBlocksByType(DATA_DATAVARIABLE_WRITE_BLOCK, true).filter(b => b.isEnabled()); // mark and sweep variables, leaving one 1 enabled per kind

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
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (dataDsl);
function resolveUsedDataVariables(block) {
  var {
    type
  } = block;

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

/***/ })

}]);
//# sourceMappingURL=86bd1a670c99d16a75c30550d9a7c34f0739ff9c-1d0c0cfac14d20b51bb1.js.map