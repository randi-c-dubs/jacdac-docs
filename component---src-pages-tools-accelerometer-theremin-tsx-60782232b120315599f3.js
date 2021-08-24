"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5023],{

/***/ 67396:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AccelerometerTheremin; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81794);
/* harmony import */ var _components_hooks_useServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2928);
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95393);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(69817);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92206);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(48086);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87198);
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94431);
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31477);
/* harmony import */ var _components_hooks_useBuzzerPlayTone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65611);
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65063);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19640);
/* harmony import */ var react_aria_live__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49647);














var TONE_DURATION = 50;
var TONE_THROTTLE = 100; // this is a React component that gets run numerous time,
// whenever a change is detected in the React state
// for example, useServices is a hook that tracks the accelerometer services,
// so it will render again and update the accelerometers array whenever the bus connects/disconnects
// an accelerometer

function AccelerometerTheremin() {
  var {
    playTone,
    toggleBrowserAudio,
    browserAudio
  } = (0,_components_hooks_useBuzzerPlayTone__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(); // identifiers for accessibility

  var sectionId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__/* .useId */ .Me)(); // useServices accepts a number of filters and returns any services that match
  // get all accelerometer + buzzer services
  // under the hood, it uses the bus and events.

  var accelerometers = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_ACCELEROMETER */ .QF7
  }); // create a state variable to hold the service selected as our accelerometer
  // when using setAccelService, React will render again this component

  var {
    0: accelService,
    1: setAccelService
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // used to hold the value for the axis selected by the radio group. This is also used to set the axis of the accelerometer to sonify. Default value is X. meaning the X axis will be sonified by default.

  var {
    0: axisToSonify,
    1: setAxisToSonify
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("x"); //used to hold user selection of the property of the sound to vary. Default is the frequency.

  var {
    0: sonificationProperty,
    1: setSonificationProperty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("frequency");
  var {
    0: srAnnouncement,
    1: setSRAnnouncement
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""); // event handeler for radio button selection change for axis to sonify

  var handleAccessChange = event => {
    setAxisToSonify(event.target.value);
    setSRAnnouncement("changing " + sonificationProperty + " based on " + event.target.value + " of accelerometer."); // using the value that is being set in the previous line results in the value pre-update being announced. I suspect this has to do with how react re-renders. using event.target.value to mittegate this.
    // in progress: make sure an Aria alert gets generated indecating the access that has been selected when streaming starts, or when radio button selection changes.
  }; //handler for property selection to sonify.


  var handelPropertySelectionChange = event => {
    setSonificationProperty(event.target.value);
    setSRAnnouncement("changing " + event.target.value + " based on " + axisToSonify + " of accelerometer.");
  }; // use a closure to capture accel variable
  // act as a toggle for the button the indicates streaming state.


  var handleSelectAccelerometerService = accel => () => {
    setSRAnnouncement(""); // clearing the live region for the text to be announced when streaming starts. I don't have a good feeling about this approach.

    accelService == accel ? setAccelService(undefined) : setAccelService(accel);

    if (accelService !== accel) {
      setSRAnnouncement("changing " + sonificationProperty + " based on " + axisToSonify + " of accelerometer."); // to investigate: this announcement does not happen after the user changes the selection of the axis and hits the start streaming button. hitting stop streaming and then start streaming however announces that axis being sonified and the property.
    } else {
      setSRAnnouncement("");
    }
  }; // filter to only show accelerometers in dashboard


  var dashboardDeviceFilter = d => d.hasService(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_ACCELEROMETER */ .QF7); // register for accelerometer data events


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // ?. checks that the callee is defined
    var unsubs = accelService === null || accelService === void 0 ? void 0 : accelService.readingRegister.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ, // don't trigger more than every 100ms
    (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .throttle */ .P2)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)(function* () {
      // get x acceleration data
      // const [x] = accelService.readingRegister.unpackedValue
      // get all acceleration data
      var volume = 1;
      var toneFrequencyOffset = 0;
      var [x, y, z] = accelService.readingRegister.unpackedValue;

      if (sonificationProperty == "frequency") {
        if (axisToSonify == "x") {
          toneFrequencyOffset = x;
        } else if (axisToSonify == "y") {
          toneFrequencyOffset = y;
        } else {
          toneFrequencyOffset = z;
        }
      } else {
        if (axisToSonify == "x") {
          volume = Math.abs(x) * 99 / 100.0;
        } else if (axisToSonify == "y") {
          volume = Math.abs(y) * 99 / 100.0;
        } else {
          volume = Math.abs(z) * 99 / 100.0;
        }
      }

      yield playTone(1000 + toneFrequencyOffset * 1000, TONE_DURATION, volume);
    }), TONE_THROTTLE)); // cleanup callback

    return () => unsubs === null || unsubs === void 0 ? void 0 : unsubs();
  }, [accelService, playTone]); // re-register if accelerometers, buzzers change

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    id: sectionId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Audio controls"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "outlined",
    onClick: toggleBrowserAudio
  }, browserAudio ? "Stop browser audio" : "Start browser audio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_aria_live__WEBPACK_IMPORTED_MODULE_11__/* .LiveMessage */ .xb, {
    message: srAnnouncement,
    "aria-live": "assertive"
  })), !accelerometers.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Connect a device"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_ACCELEROMETER */ .QF7
  }))), !!accelerometers.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Available accelerometers"
  }), accelerometers.map(accelerometer => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    item: true,
    xs: 12,
    sm: 6,
    lg: 4,
    xl: 3,
    key: accelerometer.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    device: accelerometer.device,
    showAvatar: true,
    showMedia: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
    variant: "h5"
  }, (accelerometer === accelService ? "Streaming from " : "") + (accelerometer.device.isPhysical ? "Physical " : "Virtual ") + ("Accelerometer " + accelerometer.friendlyName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
    component: "fieldset"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, {
    component: "legend"
  }, "Select axis of the accelerometer to sonify"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    "aria-label": "axis",
    name: "axisToSonify",
    value: axisToSonify,
    onChange: handleAccessChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
    value: "x",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null),
    label: "X axis"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
    value: "y",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null),
    label: "Y axis"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
    value: "z",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null),
    label: "Z axis"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, {
    component: "legend"
  }, "Select property of the sound to change"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    "aria-label": "sonification property",
    name: "soundProperty",
    value: sonificationProperty,
    onChange: handelPropertySelectionChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
    value: "frequency",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null),
    label: "buzzer frequency"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
    value: "volume",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null),
    label: "buzzer volume"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "outlined",
    onClick: handleSelectAccelerometerService(accelerometer)
  }, accelerometer === accelService ? "Stop streaming" : "Start streaming")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    deviceFilter: dashboardDeviceFilter
  }));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-accelerometer-theremin-tsx-60782232b120315599f3.js.map