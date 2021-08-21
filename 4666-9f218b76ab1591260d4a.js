"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4666],{

/***/ 24666:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardSoundSpectrum; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(42656);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Mic.js
var Mic = __webpack_require__(11497);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/hooks/useAudioAnalyzer.ts + 1 modules
var useAudioAnalyzer = __webpack_require__(13546);
;// CONCATENATED MODULE: ./src/components/hooks/useMicrophoneSpectrum.ts


function useMicrophoneSpectrum(enabled, options) {
  var _useMicrophoneAnalyze = (0,useAudioAnalyzer/* useMicrophoneAnalyzer */.K)(options),
      analyser = _useMicrophoneAnalyze.analyser,
      onClickActivateMicrophone = _useMicrophoneAnalyze.onClickActivateMicrophone,
      closeMicrophone = _useMicrophoneAnalyze.closeMicrophone;

  var frequencies = (0,react.useRef)(new Uint8Array(0));
  (0,react.useEffect)(function () {
    if (!enabled) closeMicrophone();
  }, [enabled]);
  return {
    onClickActivateMicrophone: onClickActivateMicrophone,
    spectrum: function spectrum() {
      var a = analyser();
      if (!a) return frequencies.current;
      if (frequencies.current.length !== a.frequencyBinCount) frequencies.current = new Uint8Array(a.frequencyBinCount);
      a === null || a === void 0 ? void 0 : a.getByteFrequencyData(frequencies.current);
      return frequencies.current;
    }
  };
}
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__(16845);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(48059);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
;// CONCATENATED MODULE: ./src/components/widgets/BytesBarGraphWidget.tsx





function BytesBarGraphWidget(props) {
  var register = props.register,
      size = props.size,
      visible = props.visible;
  var server = (0,useServiceServer/* default */.Z)(register.service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,useWidgetTheme/* default */.Z)(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active;

  var pathRef = (0,react.useRef)();
  var w = 128;
  var h = w / 1.612;
  var m = 2;
  var dy = (h - 2 * m) / 0xff;
  (0,react.useEffect)(function () {
    return visible && (register === null || register === void 0 ? void 0 : register.subscribe(constants/* REPORT_UPDATE */.rGZ, function () {
      // render outside of react loop
      var current = pathRef.current;
      var bins = register.data;
      if (!current || !bins) return;
      var dx = (w - 2 * m) / bins.length;
      var dw = (w - 2 * m) / (bins.length * 6);
      var d = "M " + m + " " + (h - m) + " ";

      for (var i = 0; i < bins.length; ++i) {
        var bin = bins[i];
        d += " v " + -dy * bin + " h " + (dx - dw) + " v " + dy * bin + " h " + dw;
      }

      d += " z";
      current.setAttribute("d", d);
    }));
  }, [register, visible, pathRef.current]);
  return /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    width: w,
    height: h,
    size: size,
    background: background
  }, /*#__PURE__*/react.createElement("path", {
    fill: active,
    stroke: controlBackground,
    strokeWidth: m / 2,
    ref: pathRef
  }));
}
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(82677);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardSoundSpectrum.tsx













function HostMicrophoneButton(props) {
  var server = props.server,
      service = props.service,
      visible = props.visible;
  var enabledRegister = (0,useRegister/* default */.Z)(service, constants/* SoundSpectrumReg.Enabled */.w4N.Enabled);
  var minDecibelsRegister = (0,useRegister/* default */.Z)(service, constants/* SoundSpectrumReg.MinDecibels */.w4N.MinDecibels);
  var maxDecibelsRegister = (0,useRegister/* default */.Z)(service, constants/* SoundSpectrumReg.MaxDecibels */.w4N.MaxDecibels);
  var fftPow2SizeRegister = (0,useRegister/* default */.Z)(service, constants/* SoundSpectrumReg.FftPow2Size */.w4N.FftPow2Size);
  var smoothingTimeConstantRegister = (0,useRegister/* default */.Z)(service, constants/* SoundSpectrumReg.SmoothingTimeConstant */.w4N.SmoothingTimeConstant);
  var enabled = (0,useRegisterValue/* useRegisterBoolValue */.I8)(enabledRegister, props);

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(minDecibelsRegister, props),
      minDecibels = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(maxDecibelsRegister, props),
      maxDecibels = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(fftPow2SizeRegister, props),
      fftPow2Size = _useRegisterUnpackedV3[0];

  var fftSize = 1 << (fftPow2Size || 5);

  var _useRegisterUnpackedV4 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(smoothingTimeConstantRegister, props),
      smoothingTimeConstant = _useRegisterUnpackedV4[0];

  var _useMicrophoneSpectru = useMicrophoneSpectrum(enabled && !!server, {
    fftSize: fftSize,
    smoothingTimeConstant: smoothingTimeConstant,
    minDecibels: minDecibels,
    maxDecibels: maxDecibels
  }),
      spectrum = _useMicrophoneSpectru.spectrum,
      onClickActivateMicrophone = _useMicrophoneSpectru.onClickActivateMicrophone;

  var title = enabled ? "Stop microphone" : "Start microphone";

  var handleClick = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!enabled && server)) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return onClickActivateMicrophone();

            case 3:
              _context.next = 5;
              return enabledRegister.sendSetBoolAsync(!enabled, true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }(); // update volume on demand


  (0,react.useEffect)(function () {
    return visible && enabled && (server === null || server === void 0 ? void 0 : server.subscribe(constants/* REFRESH */.RGM, function () {
      var v = spectrum === null || spectrum === void 0 ? void 0 : spectrum();

      if (v !== undefined) {
        server.reading.setValues([v], true);
      }
    }));
  }, [server, spectrum, visible]);
  return /*#__PURE__*/react.createElement(IconButtonWithProgress/* default */.Z, {
    "aria-label": title,
    title: title,
    indeterminate: enabled,
    onClick: handleClick
  }, /*#__PURE__*/react.createElement(Mic/* default */.Z, null));
}

function DashboardSoundSpectrum(props) {
  var service = props.service,
      visible = props.visible;
  var frequencyBinsRegister = (0,useRegister/* default */.Z)(service, constants/* SoundSpectrumReg.FrequencyBins */.w4N.FrequencyBins);
  var server = (0,useServiceServer/* default */.Z)(service);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(BytesBarGraphWidget, {
    visible: visible,
    register: frequencyBinsRegister
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(HostMicrophoneButton, {
    service: service,
    server: server,
    visible: visible
  })));
}

/***/ })

}]);