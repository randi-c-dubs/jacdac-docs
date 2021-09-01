"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3139],{

/***/ 33139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LossAccChart; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69672);


var VegaLite = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(5666)]).then(__webpack_require__.bind(__webpack_require__, 57337)));
function LossAccChart(props) {
  var {
    lossData,
    accData,
    timestamp
  } = props;
  var chartProps = props.chartProps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VegaLite, {
    spec: {
      title: {
        timestamp
      },
      width: chartProps.CHART_WIDTH,
      height: chartProps.CHART_HEIGHT,
      data: {
        values: accData
      },
      mark: {
        type: "line",
        interpolate: "monotone"
      },
      encoding: {
        x: {
          field: "epoch",
          type: "quantitative"
        },
        y: {
          field: "acc",
          type: "quantitative"
        },
        color: {
          field: "dataset",
          type: "nominal",
          legend: null,
          scale: {
            range: chartProps.PALETTE
          }
        }
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VegaLite, {
    spec: {
      title: {
        timestamp
      },
      width: chartProps.CHART_WIDTH,
      height: chartProps.CHART_HEIGHT,
      data: {
        values: lossData
      },
      mark: {
        type: "line",
        interpolate: "monotone"
      },
      encoding: {
        x: {
          field: "epoch",
          type: "quantitative"
        },
        y: {
          field: "loss",
          type: "quantitative"
        },
        color: {
          field: "dataset",
          type: "nominal",
          scale: {
            range: chartProps.PALETTE
          }
        }
      }
    }
  }));
}

/***/ })

}]);
//# sourceMappingURL=3139-adcf55f0b9c188a06a5e.js.map