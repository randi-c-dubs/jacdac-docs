"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8743],{

/***/ 58743:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardBitRadio; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91635);




var HORIZON = 10;
function DashboardBitRadio(props) {
  var {
    service
  } = props;
  var {
    0: lastEvents,
    1: setLastEvents
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  var appendMessage = data => {
    if (!data) return;
    var [time, deviceSerial, rssi, ...payload] = data;
    setLastEvents(lastEvents => {
      var evs = lastEvents.slice(0);
      var msg = {
        time,
        deviceSerial,
        rssi,
        payload
      };
      evs.push(msg);

      while (evs.length > HORIZON) {
        evs.shift();
      }

      return lastEvents;
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => service.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .REPORT_RECEIVE */ .Gb8, pkt => {
    var values;
    var {
      data,
      serviceCommand
    } = pkt;

    switch (serviceCommand) {
      case _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .BitRadioCmd.NumberReceived */ .GZs.NumberReceived:
        values = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdunpack */ .TE)(data, "u32 u32 i8 x[3] f64 s");
        break;

      case _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .BitRadioCmd.StringReceived */ .GZs.StringReceived:
        values = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdunpack */ .TE)(data, "u32 u32 i8 x[1] s");
        break;

      case _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .BitRadioCmd.BufferReceived */ .GZs.BufferReceived:
        values = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdunpack */ .TE)(data, "u32 u32 i8 x[1] b");
        break;
    }

    if (values) appendMessage(values.filter(v => v !== undefined && v !== ""));
  }), [service, lastEvents]);
  var text = lastEvents.map(ev => {
    var _ev$payload;

    return (_ev$payload = ev.payload) === null || _ev$payload === void 0 ? void 0 : _ev$payload.filter(v => v !== undefined && v !== "").join(",");
  }).filter(el => !!el).join("\n");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, text);
}

/***/ })

}]);
//# sourceMappingURL=8743-ef8fe3af67470abbeb8d.js.map