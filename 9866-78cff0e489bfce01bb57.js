"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9866],{

/***/ 49866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DataSetPlot; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(706);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65541);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69672);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19640);




var VegaLite = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(5666)]).then(__webpack_require__.bind(__webpack_require__, 57337)));
function DataSetPlot(props) {
  var {
    dataset,
    predictedLabels,
    timestamp
  } = props;
  var classes = props.reactStyle;
  var chartProps = props.chartProps;

  var calculateRecordingFeatures = (recording, label, predictedLabel) => {
    var features = {
      class: label,
      "predicted class": predictedLabel,
      correct: label == predictedLabel || predictedLabel == ""
    };
    var headerNames = [];

    var _loop = function _loop(idx) {
      // differentiate input types with the same name (e.g. two buttons)
      var headerName = recording.headers[idx];
      headerNames.push(headerName);
      var headerNameCount = headerNames.filter(name => name == headerName).length;
      if (headerNameCount > 1) headerName += headerNameCount; // calculate features and add them to the dataset

      features["rms-" + headerName] = recording.rms[idx];
      features["sd-" + headerName] = recording.sd[idx];
      features["max-" + headerName] = recording.maxs[idx];
    };

    for (var idx = 0; idx < recording.width; idx++) {
      _loop(idx);
    }

    return features;
  };

  var dataSetPoints = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var setPoints = [];

    if (dataset && dataset.totalRecordings) {
      (function () {
        var labels = dataset.labels;

        var _loop2 = function _loop2(label) {
          dataset.getRecordingsWithLabel(label).forEach(recording => {
            // add info about whether point was correctly labelled
            var predictedLabel = "";

            if (predictedLabels && predictedLabels.length) {
              // grab the predicted label associated with this data point
              var prediction = predictedLabels[setPoints.length];
              predictedLabel = labels[prediction];
            } // add data point to chart


            var recordingFeatures = calculateRecordingFeatures(recording, label, predictedLabel);
            setPoints.push(recordingFeatures);
          });
        };

        for (var label of labels) {
          _loop2(label);
        }
      })();
    }

    return setPoints;
  }, [dataset, predictedLabels, timestamp]);
  var features = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var feats = [];
    var inputNames = [];

    if (dataset) {
      dataset.inputTypes.forEach(inputName => {
        // differentiate input types with the same name (e.g. two buttons)
        inputNames.push(inputName);
        var inputNameCount = inputNames.filter(name => name == inputName).length;
        if (inputNameCount > 1) inputName += inputNameCount;
        feats.push("rms-" + inputName);
        feats.push("sd-" + inputName);
        feats.push("max-" + inputName);
      });
    }

    return feats.sort();
  }, [dataset]);
  var {
    0: xAxis,
    1: setXAxis
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(features[0] || "");
  var {
    0: yAxis,
    1: setYAxis
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(features[1] || "");

  var handleChangedX = event => setXAxis(event.target.value);

  var handleChangedY = event => setYAxis(event.target.value);

  var configTooltip = () => {
    var spec = [{
      field: "class",
      type: "nominal"
    }, {
      field: xAxis,
      type: "quantitative",
      format: chartProps.TOOLTIP_NUM_FORMAT
    }, {
      field: yAxis,
      type: "quantitative",
      format: chartProps.TOOLTIP_NUM_FORMAT
    }];

    if (predictedLabels && predictedLabels.length) {
      spec.splice(1, 0, {
        field: "predicted class",
        type: "nominal"
      });
    }

    return spec;
  };

  var tooltipSpec = configTooltip();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    color: "text.secondary"
  }, "x\u2002", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    className: classes.field,
    id: (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)() + "xAxis",
    variant: "outlined",
    value: xAxis,
    onChange: handleChangedX
  }, features.map(ft => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    key: (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)(),
    value: ft
  }, ft))), "\u2003y\u2002", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    className: classes.field,
    id: (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)() + "yAxis",
    variant: "outlined",
    value: yAxis,
    onChange: handleChangedY
  }, features.map(ft => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    key: (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)(),
    value: ft
  }, ft))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VegaLite, {
    actions: false,
    spec: {
      title: {
        timestamp
      },
      width: chartProps.CHART_WIDTH,
      height: chartProps.CHART_HEIGHT,
      data: {
        values: dataSetPoints
      },
      mark: {
        type: "point",
        size: chartProps.MARK_SIZE,
        filled: true,
        angle: 45
      },
      encoding: {
        x: {
          field: xAxis,
          type: "quantitative"
        },
        y: {
          field: yAxis,
          type: "quantitative"
        },
        color: {
          field: "class",
          type: "nominal",
          scale: {
            range: chartProps.PALETTE
          }
        },
        shape: {
          field: "correct",
          type: "nominal",
          scale: {
            domain: ["true", "false"],
            range: ["circle", "cross"]
          },
          legend: null
        },
        tooltip: tooltipSpec
      }
    }
  }))));
}

/***/ })

}]);
//# sourceMappingURL=9866-78cff0e489bfce01bb57.js.map