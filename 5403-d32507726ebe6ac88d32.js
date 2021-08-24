"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5403],{

/***/ 88880:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

/***/ }),

/***/ 32832:
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
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'RadioButtonChecked');

exports.Z = _default;

/***/ }),

/***/ 52935:
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'RadioButtonUnchecked');

exports.Z = _default;

/***/ }),

/***/ 14430:
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
  d: "M19 13H5v-2h14v2z"
}), 'Remove');

exports.Z = _default;

/***/ }),

/***/ 69130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ lightEncode; }
/* harmony export */ });
/* harmony import */ var _lightconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23795);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81794);



function cmdCode(cmd) {
  switch (cmd) {
    case "setall":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_SET_ALL */ .Ve;

    case "fade":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_FADE */ .r$;

    case "fadehsv":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_FADE_HSV */ .zy;

    case "rotfwd":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_ROTATE_FWD */ .ln;

    case "rotback":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_ROTATE_BACK */ .fq;

    case "show":
    case "wait":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_SHOW */ .Xo;

    case "range":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_RANGE */ .ht;

    case "mode":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_MODE */ .T;

    case "tmpmode":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_MODE1 */ .Aw;

    case "setone":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_COL1_SET */ .gd;

    case "mult":
      return 0x100;

    default:
      return undefined;
  }
}

function isWhiteSpace(code) {
  return code == 32 || code == 13 || code == 10 || code == 9;
}
/**
 * Encodes a light command into a buffer
 * @param format
 * @param args
 * @returns
 * @category Data Packing
 */


function lightEncode(format, args) {
  // tokens are white-space separated
  // % - number from args[]
  // # - color from args[]
  // #0123ff - color
  // 123 - number
  // commands: set, fade, fadehsv, rotfwd, rotback, pause
  // fadehsv 0 12 #00ffff #ffffff
  var outarr = [];
  var colors = [];
  var pos = 0;
  var currcmd = 0;

  function pushNumber(n) {
    if (n == null || (n | 0) != n || n < 0 || n >= 16383) throw new Error("number out of range: " + n);
    if (n < 128) outarr.push(n);else {
      outarr.push(0x80 | n >> 8);
      outarr.push(n & 0xff);
    }
  }

  function flush() {
    if (currcmd == 0xcf) {
      if (colors.length != 1) throw new Error("setone requires 1 color");
    } else {
      if (colors.length == 0) return;
      if (colors.length <= 3) outarr.push(0xc0 | colors.length);else {
        outarr.push(0xc0);
        outarr.push(colors.length);
      }
    }

    for (var c of colors) {
      outarr.push(c >> 16 & 0xff);
      outarr.push(c >> 8 & 0xff);
      outarr.push(c >> 0 & 0xff);
    }

    colors = [];
  }

  function nextToken() {
    while (isWhiteSpace(format.charCodeAt(pos))) {
      pos++;
    }

    var beg = pos;

    while (pos < format.length && !isWhiteSpace(format.charCodeAt(pos))) {
      pos++;
    }

    return format.slice(beg, pos);
  }

  while (pos < format.length) {
    var token = nextToken();
    var t0 = token.charCodeAt(0);

    if (97 <= t0 && t0 <= 122) {
      // a-z
      flush();
      currcmd = cmdCode(token);
      if (currcmd == undefined) throw new Error("unknown light command: " + token);

      if (currcmd == 0x100) {
        var f = parseFloat(nextToken());
        if (isNaN(f) || f < 0 || f > 2) throw new Error("expecting scale");
        outarr.push(0xd8); // tmpmode

        outarr.push(3); // mult

        outarr.push(0xd0); // setall

        var mm = Math.round(128 * f) & 0xff;
        outarr.push(0xc1);
        outarr.push(mm);
        outarr.push(mm);
        outarr.push(mm);
      } else {
        outarr.push(currcmd);
      }
    } else if (48 <= t0 && t0 <= 57) {
      // 0-9
      pushNumber(parseInt(token));
    } else if (t0 == 37) {
      // %
      if (args.length == 0) throw new Error("out of args, %");
      var v = args.shift();
      if (typeof v != "number") throw new Error("expecting number");
      pushNumber(v);
    } else if (t0 == 35) {
      // #
      if (token.length == 1) {
        if (args.length == 0) throw new Error("out of args, #");

        var _v = args.shift();

        if (typeof _v === "number") colors.push(_v);else if (Array.isArray(_v)) for (var vv of _v) {
          colors.push(vv);
        } else throw Error("invalid number " + _v);
      } else {
        if (token.length == 7) {
          var b = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .fromHex */ .H_)(token.slice(1));
          var c = b[0] << 16 | b[1] << 8 | b[2];
          colors.push(c);
        } else {
          throw new Error("invalid color: " + token);
        }
      }
    }
  }

  flush();
  return new Uint8Array(outarr);
}

/***/ }),

/***/ 15403:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardLEDPixel; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(90293);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(65541);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/light.ts
var light = __webpack_require__(69130);
// EXTERNAL MODULE: ./src/components/ui/SelectWithLabel.tsx
var SelectWithLabel = __webpack_require__(15789);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Remove.js
var Remove = __webpack_require__(14430);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayArrow.js
var PlayArrow = __webpack_require__(42404);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/ledpixelserver.ts
var ledpixelserver = __webpack_require__(30524);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(48059);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(82677);
// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__(8966);
;// CONCATENATED MODULE: ./src/components/widgets/LightWidget.tsx









function rgbToHsl(r, g, b) {
  var [r$, g$, b$] = [r / 255, g / 255, b / 255];
  var cMin = Math.min(r$, g$, b$);
  var cMax = Math.max(r$, g$, b$);
  var cDelta = cMax - cMin;
  var h;
  var s;
  var l;
  var maxAndMin = cMax + cMin; //lum

  l = maxAndMin / 2 * 100;
  if (cDelta === 0) s = h = 0;else {
    //hue
    if (cMax === r$) h = 60 * ((g$ - b$) / cDelta % 6);else if (cMax === g$) h = 60 * ((b$ - r$) / cDelta + 2);else if (cMax === b$) h = 60 * ((r$ - g$) / cDelta + 4); //sat

    if (l > 50) s = 100 * (cDelta / (2 - maxAndMin));else s = 100 * (cDelta / maxAndMin);
  } // at least 60% luminosity

  l = Math.max(l, 60);
  return [Math.floor(h), Math.floor(s), Math.floor(l)];
}

function setRgb(el, r, g, b, radius) {
  var hsl = rgbToHsl(r, g, b);
  var [h, s, l] = hsl;
  var fill = "hsl(" + h + ", " + s + "%, " + l + "%)";
  el.setAttribute("fill", fill);

  if (radius !== undefined) {
    var nr = radius * (1 + (l - 60) / 200);
    el.setAttribute("r", "" + nr);
  }
}

function setRgbLeds(pixelsContainer, colors, radius) {
  var pixels = pixelsContainer === null || pixelsContainer === void 0 ? void 0 : pixelsContainer.children;
  if (!colors || !pixels) return;
  var pn = Math.min(pixels.length, colors.length / 3);
  var ci = 0;

  for (var i = 0; i < pn; ++i) {
    var pixel = pixels.item(i);
    setRgb(pixel, colors[ci], colors[ci + 1], colors[ci + 2], radius);
    ci += 3;
  }
}

function LightStripWidget(props) {
  var {
    lightVariant,
    numPixels,
    actualBrightness,
    server,
    widgetSize,
    onLedClick
  } = props;
  var {
    background,
    controlBackground
  } = (0,useWidgetTheme/* default */.Z)();
  var pathRef = (0,react.useRef)(undefined);
  var pixelsRef = (0,react.useRef)(undefined);
  var neoradius = 6;
  var neocircleradius = neoradius + 1;
  var sw = neoradius * 2.8;
  var isJewel = lightVariant === constants/* LedPixelVariant.Jewel */.dQg.Jewel;
  var isRing = lightVariant === constants/* LedPixelVariant.Ring */.dQg.Ring;

  var handleLedClick = index => onLedClick ? () => onLedClick(index) : undefined; // paint svg via dom


  var paint = () => {
    //console.log('paint')
    setRgbLeds(pixelsRef.current, server === null || server === void 0 ? void 0 : server.colors, neocircleradius);
  }; // reposition pixels along the path


  (0,react.useEffect)(() => {
    var _pixelsRef$current;

    var p = pathRef.current;
    var pixels = (_pixelsRef$current = pixelsRef.current) === null || _pixelsRef$current === void 0 ? void 0 : _pixelsRef$current.children;
    if (!p || !pixels) return;
    var offset = isJewel ? 1 : 0;
    var pn = pixels.length;
    var length = p.getTotalLength();
    var extra = isRing || isJewel ? 0 : 1;
    var step = length / (pn - offset);

    for (var i = offset; i < pn; ++i) {
      var pixel = pixels.item(i);
      var pos = i - offset;
      var point = p.getPointAtLength(step * (pos + extra / 2.0));
      pixel.setAttribute("cx", "" + point.x);
      pixel.setAttribute("cy", "" + point.y);
    }

    paint();
  }, [lightVariant, numPixels, pathRef.current, pixelsRef.current]); // render when new colors are in

  (0,react.useEffect)(() => server === null || server === void 0 ? void 0 : server.subscribe(constants/* RENDER */.kq7, paint), [server]);
  var width;
  var height;
  var d = "";

  if (lightVariant === constants/* LedPixelVariant.Stick */.dQg.Stick) {
    var dx = neoradius * 3;
    d = "M 0 " + dx;

    for (var i = 0; i < numPixels; ++i) {
      d += " h " + dx + " 0";
    }

    width = numPixels * dx;
    height = 2 * dx;
  } else if (lightVariant === constants/* LedPixelVariant.Strip */.dQg.Strip) {
    var side = Math.ceil(Math.sqrt(numPixels) * 1.6108);
    var _i = 0;
    var dir = 1;

    var _dx = neoradius * 3;

    var tr = neoradius * 6;
    var line = 1;
    d = "M " + 2 * tr + " " + _dx;

    while (_i < numPixels) {
      d += " h " + _dx * dir;

      if (_i % side === side - 1) {
        // turn around
        d += " c " + tr * dir + " 0, " + tr * dir + " " + tr + ", 0 " + tr;
        dir = -dir;
        line++;
      }

      _i++;
    }

    width = side * _dx + 4 * tr;
    height = line * tr + 2 * _dx;
  } else {
    var n = numPixels - (isJewel ? 1 : 0);
    var neoperimeter = n * (2.7 * neoradius);
    var margin = 2 * neoradius;
    var ringradius = 1.5 * neoperimeter / (2 * Math.PI);
    width = 2 * (margin + ringradius);
    height = width;
    var wm = width - 2 * margin;
    d = "M " + margin + "," + (height >> 1) + " a " + ringradius + "," + ringradius + " 0 1,0 " + wm + ",0 a " + ringradius + "," + ringradius + " 0 1,0 -" + wm + ", 0";
  } // tune opacity to account for global opacity


  var alpha = 0.7;
  var opacity = alpha + (1 - alpha) * ((actualBrightness || 0) / 0xff);
  return /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    width: width,
    height: height,
    size: widgetSize
  }, /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("path", {
    ref: pathRef,
    d: d,
    fill: "transparent",
    stroke: background,
    strokeWidth: sw
  }), /*#__PURE__*/react.createElement("g", {
    ref: pixelsRef,
    opacity: opacity
  }, Array(numPixels).fill(0).map((_, i) => {
    var handleClick = handleLedClick(i);
    var fireClick = (0,useFireKey/* default */.Z)(handleClick);
    return /*#__PURE__*/react.createElement("circle", {
      className: "clickeable",
      key: "pixel" + i,
      r: neocircleradius,
      cx: width >> 1,
      cy: height >> 1,
      stroke: controlBackground,
      strokeWidth: 1,
      "aria-label": "pixel " + i,
      onPointerDown: handleClick,
      onPointerEnter: handleClick,
      onKeyDown: fireClick
    }, /*#__PURE__*/react.createElement("title", null, "pixel ", i));
  }))));
}

function LightMatrixWidget(props) {
  var {
    columns,
    rows,
    server,
    widgetSize,
    onLedClick
  } = props;
  var {
    background,
    controlBackground
  } = (0,useWidgetTheme/* default */.Z)();
  var widgetRef = (0,react.useRef)(); // compute size

  var pw = 8;
  var ph = 8;
  var ps = 0.5;
  var pr = 1;
  var m = 2;
  var w = columns * pw + (columns + 1) * m;
  var h = rows * ph + (rows + 1) * m;

  var handleLedClick = index => onLedClick ? () => onLedClick(index) : undefined; // paint svg via dom


  var paint = () => setRgbLeds(widgetRef.current, server === null || server === void 0 ? void 0 : server.colors); // add leds


  var render = () => {
    var ledEls = [];
    var y = m;

    for (var row = 0; row < rows; row++) {
      var x = m;

      for (var col = 0; col < columns; col++) {
        var _index = row * columns + col;

        var label = "pixel " + _index + " at " + row + "," + col;
        var handleClick = handleLedClick(_index);
        var fireClick = (0,useFireKey/* default */.Z)(handleClick);
        ledEls.push( /*#__PURE__*/react.createElement("rect", {
          className: "clickeable",
          key: "l" + row + "-" + col,
          x: x,
          y: y,
          width: pw,
          height: ph,
          rx: pr,
          ry: pr,
          fill: controlBackground,
          stroke: "none",
          strokeWidth: ps,
          "aria-label": label,
          onPointerDown: handleClick,
          onPointerEnter: handleClick,
          onKeyDown: fireClick
        }, /*#__PURE__*/react.createElement("title", null, label)));
        x += pw + m;
      }

      y += ph + m;
    }

    return ledEls;
  }; // render when DOM render


  (0,react.useEffect)(paint, [columns, rows, widgetRef.current]); // render when new colors are in

  (0,react.useEffect)(() => server === null || server === void 0 ? void 0 : server.subscribe(constants/* RENDER */.kq7, paint), [server]);
  return /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    width: w,
    height: h,
    size: widgetSize
  }, /*#__PURE__*/react.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: h,
    rx: pr,
    ry: pr,
    fill: background
  }), /*#__PURE__*/react.createElement("g", {
    ref: widgetRef
  }, render()));
}

function LightWidget(props) {
  var {
    service,
    server,
    onLedClick
  } = props;
  var numPixelsRegister = (0,useRegister/* default */.Z)(service, constants/* LedPixelReg.NumPixels */.k9u.NumPixels);
  var variantRegister = (0,useRegister/* default */.Z)(service, constants/* LedPixelReg.Variant */.k9u.Variant);
  var actualBrightnessRegister = (0,useRegister/* default */.Z)(service, constants/* LedPixelReg.ActualBrightness */.k9u.ActualBrightness);
  var numColumnsRegister = (0,useRegister/* default */.Z)(service, constants/* LedPixelReg.NumColumns */.k9u.NumColumns);
  var [numPixels] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(numPixelsRegister, props);
  var [lightVariant] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(variantRegister, props);
  var [actualBrightness] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(actualBrightnessRegister, props);
  var [numColumns] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(numColumnsRegister, props);
  if (numPixels === undefined || actualBrightness === undefined) return /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null); // nothing to render

  if (!numPixels) return null;

  if (lightVariant === constants/* LedPixelVariant.Matrix */.dQg.Matrix) {
    var columns = numColumns || Math.floor(Math.sqrt(numPixels));
    var rows = Math.floor(numPixels / columns);
    return /*#__PURE__*/react.createElement(LightMatrixWidget, {
      lightVariant: lightVariant,
      actualBrightness: actualBrightness,
      server: server,
      columns: columns,
      rows: rows,
      onLedClick: onLedClick
    });
  } else return /*#__PURE__*/react.createElement(LightStripWidget, {
    numPixels: numPixels,
    lightVariant: lightVariant,
    actualBrightness: actualBrightness,
    server: server,
    onLedClick: onLedClick
  });
}
// EXTERNAL MODULE: ./src/components/widgets/ColorButtons.tsx
var ColorButtons = __webpack_require__(99531);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardLEDPixel.tsx






// tslint:disable-next-line: no-submodule-imports match-default-export-name
 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name









var ColorInput = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 2851).then(__webpack_require__.bind(__webpack_require__, 52851)));
/*
0xD6: range P=0 N=length W=1 S=0- range from pixel P, Npixels long (currently unsupported: every Wpixels skip Spixels)
*/

var lightCommands = [{
  name: "setall",
  args: "C+",
  description: "set all pixels in current range to given color pattern"
}, {
  name: "fade",
  args: "C+",
  description: "set pixels in current range to colors between colors in sequence"
}, {
  name: "rotfwd",
  args: "K",
  description: "rotate (shift) pixels away from the connector",
  valueDescription: "pixel positions to rotate"
}, {
  name: "rotback",
  args: "K",
  description: "rotate (shift) pixels towards the connector",
  valueDescription: "pixel positions to rotate"
}];

function LightCommand(props) {
  var {
    service
  } = props;
  var {
    0: sending,
    1: setSending
  } = (0,react.useState)(false);
  var {
    0: command,
    1: setCommand
  } = (0,react.useState)(lightCommands[1]);
  var {
    0: offset,
    1: setOffset
  } = (0,react.useState)("1");
  var {
    0: duration,
    1: setDuration
  } = (0,react.useState)("100");
  var {
    0: colors,
    1: setColors
  } = (0,react.useState)(["#0000ff", "#ff0000"]);
  var {
    0: mode,
    1: setMode
  } = (0,react.useState)(0);
  var {
    name,
    args,
    description,
    valueDescription
  } = command;
  var dcolors = args == "PC" ? colors.slice(0, 1) : colors;
  var encoded = (0,react.useMemo)(() => {
    var sargs = "";
    var vargs = [];

    switch (args) {
      case "C+":
        sargs = Array(colors.length).fill("#").join(" ");
        vargs = colors.map(c => parseInt(c.slice(1), 16));
        break;

      case "K":
        {
          sargs = "%";
          vargs = [parseInt(offset)];
          break;
        }

      case "PC":
        {
          sargs = "% #";
          vargs = [parseInt(offset), parseInt(colors[0].slice(1), 16)];
          break;
        }
    }

    if (mode) vargs.unshift(mode);
    if (vargs.some(v => v === undefined || isNaN(v))) return undefined;
    var ms = parseInt(duration);
    if (isNaN(ms)) ms = 100;
    var src = [mode && "tmpmode %", name + " " + sargs, "show %"].filter(l => !!l).join("\n");
    var largs = [].concat((0,toConsumableArray/* default */.Z)(vargs), [ms]);
    var r = (0,light/* lightEncode */._)(src, largs);
    return r;
  }, [command, colors, duration, offset, mode]);

  var sendCommand = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      if (!encoded) return;

      try {
        setSending(true);
        yield service.sendCmdAsync(constants/* LedPixelCmd.Run */.yB$.Run, encoded);
      } finally {
        setSending(false);
      }
    });

    return function sendCommand() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCommandChange = ev => {
    var newName = ev.target.value;
    setCommand(lightCommands.find(cmd => cmd.name === newName));
  };

  var handleOffsetChange = ev => {
    setOffset(ev.target.value);
  };

  var handleModeChange = ev => {
    var v = parseInt(ev.target.value);
    if (!isNaN(v)) setMode(v);
  };

  var handleDurationChange = ev => {
    setDuration(ev.target.value);
  };

  var handleColorChange = index => /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (color) {
      var cs = colors.slice(0);
      cs[index] = color;
      setColors(cs);
    });

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleRemoveColor = () => {
    var cs = colors.slice(0);
    cs.pop();
    setColors(cs);
  };

  var handleAddColor = () => {
    var cs = colors.slice(0);
    cs.push("#ff0000");
    setColors(cs);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: "descr",
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption"
  }, description)), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: "select",
    xs: 12
  }, /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    disabled: sending,
    fullWidth: true,
    label: "command",
    value: name,
    onChange: handleCommandChange
  }, lightCommands.map(cmd => /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    key: cmd.name,
    value: cmd.name
  }, cmd.name)))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: "time",
    xs: 6
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    variant: "outlined",
    label: "duration (milliseconds)",
    type: "number",
    value: duration,
    onChange: handleDurationChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: "mode",
    xs: 6
  }, /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    fullWidth: true,
    label: "update mode",
    value: mode + "",
    onChange: handleModeChange
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    value: 0
  }, "replace"), /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    value: 1
  }, "add"), /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    value: 2
  }, "substract"), /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    value: 3
  }, "multiply"))))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row",
    alignItems: "center",
    alignContent: "flex-start",
    justifyContent: "flex-start"
  }, (args === "K" || args === "PC") && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: "K"
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    variant: "outlined",
    type: "number",
    helperText: valueDescription,
    value: offset,
    onChange: handleOffsetChange
  })), (args === "C+" || args === "PC") && dcolors.map((c, i) => /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true,
    key: i
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ColorInput, {
    value: c,
    onChange: handleColorChange(i)
  })))), args === "C+" && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true,
    key: "minuscolor"
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    disabled: colors.length < 2,
    title: "Remove color",
    onClick: handleRemoveColor
  }, /*#__PURE__*/react.createElement(Remove/* default */.Z, null)), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    disabled: colors.length > 4,
    title: "Add color",
    onClick: handleAddColor
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: true,
    key: "run"
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    disabled: !encoded,
    title: "Run command",
    onClick: sendCommand
  }, /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null))))));
}

function DashboardLEDPixel(props) {
  var {
    service,
    services,
    expanded
  } = props;
  var {
    0: penColor,
    1: setPenColor
  } = (0,react.useState)(0x020202);
  var server = (0,useServiceServer/* default */.Z)(service, () => new ledpixelserver/* default */.Z());

  var handleColorChange = newColor => setPenColor(newColor);

  var handleLedClick = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)(function* (index) {
      var encoded = (0,light/* lightEncode */._)("setone % #\nshow 20", [index, penColor]);
      yield service === null || service === void 0 ? void 0 : service.sendCmdAsync(constants/* LedPixelCmd.Run */.yB$.Run, encoded);
    });

    return function handleLedClick(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(react.Fragment, null, server && /*#__PURE__*/react.createElement(LightWidget, Object.assign({
    server: server,
    widgetCount: services.length,
    onLedClick: handleLedClick
  }, props)), /*#__PURE__*/react.createElement(ColorButtons/* default */.Z, {
    color: penColor,
    onColorChange: handleColorChange
  }), expanded && /*#__PURE__*/react.createElement(LightCommand, {
    service: service,
    expanded: expanded
  }));
}

/***/ }),

/***/ 15789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectWithLabel; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89711);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(706);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65541);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);



function SelectWithLabel(props) {
  var {
    label,
    fullWidth,
    required,
    disabled,
    value,
    error,
    placeholder,
    onChange,
    onClose,
    children,
    helperText,
    type,
    none
  } = props;
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var descrId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var id = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var hasDescr = !!helperText || !!error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    fullWidth: fullWidth,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    id: labelId,
    key: "label"
  }, required ? label + " *" : label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    id: id,
    disabled: disabled,
    label: label,
    value: value,
    error: !!error,
    fullWidth: true,
    placeholder: placeholder,
    type: type,
    labelId: labelId,
    "aria-describedby": hasDescr ? descrId : undefined,
    onChange: onChange,
    onClose: onClose
  }, none !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    key: "none",
    value: ""
  }, none), children), hasDescr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    id: descrId
  }, error || helperText));
}

/***/ }),

/***/ 99531:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ColorButtons; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23729);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81794);
/* harmony import */ var _material_ui_icons_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32832);
/* harmony import */ var _material_ui_icons_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52935);





function ColorButtons(props) {
  var DEFAULT_COLORS = [0xff0000, 0xff00ff, 0x0000ff, 0x00ff00, 0xffff00, 0x020202];
  var {
    colors = DEFAULT_COLORS,
    color,
    onColorChange
  } = props;

  var handleSetColor = col => () => onColorChange(col);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, colors.map(col => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    key: col,
    item: true,
    xs: colors.length === 2 ? 4 : 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    style: {
      color: (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .rgbToHtmlColor */ .b)(col)
    },
    onClick: handleSetColor(col)
  }, col !== color ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_RadioButtonChecked__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null)))));
}

/***/ })

}]);