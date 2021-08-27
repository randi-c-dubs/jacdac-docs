"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3047,274],{

/***/ 52377:
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
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
}), 'GetApp');

exports.Z = _default;

/***/ }),

/***/ 58504:
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
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'Launch');

exports.Z = _default;

/***/ }),

/***/ 2864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LM": function() { return /* binding */ DTDL_CONTEXT; },
/* harmony export */   "d_": function() { return /* binding */ objectSchema; },
/* harmony export */   "yP": function() { return /* binding */ arraySchema; },
/* harmony export */   "Jg": function() { return /* binding */ escapeName; },
/* harmony export */   "n": function() { return /* binding */ escapeDisplayName; }
/* harmony export */ });
/* unused harmony exports DTDL_REFERENCE_URL, DTDL_NAME, DTDLUnits */
/***
 *  DTDL specification: https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md.
 */

/**
 * @internal
 */
var DTDL_REFERENCE_URL = "https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md";
/**
 * @internal
 */

var DTDL_NAME = "Digital Twins Definition Language";
/**
 * @internal
 */

var DTDL_CONTEXT = ["dtmi:dtdl:context;2"]; // warps fields into an object

function objectSchema(schemas) {
  return {
    "@type": "Object",
    fields: schemas
  };
} // wraps a schema into an array

function arraySchema(schema) {
  return {
    "@type": "Array",
    elementSchema: schema
  };
}
function escapeName(name) {
  name = name.trim().replace(/[^a-zA-Z0-9_]/g, "_");
  if (!/^[a-zA-Z]/.test(name)) name = "a" + name;
  name = name[0].toLowerCase() + name.slice(1);
  return name.slice(0, 64);
}
function escapeDisplayName(name) {
  return name.slice(0, 64);
}
function DTDLUnits() {
  return ["metrePerSecondSquared", "centimetrePerSecondSquared", "gForce", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "radianPerSecondSquared", "radianPerSecond", "degreePerSecond", "revolutionPerSecond", "revolutionPerMinute", "squareMetre", "squareCentimetre", "squareMillimetre", "squareKilometre", "hectare", "squareFoot", "squareInch", "acre", "farad", "millifarad", "microfarad", "nanofarad", "picofarad", "ampere", "microampere", "milliampere", "bitPerSecond", "kibibitPerSecond", "mebibitPerSecond", "gibibitPerSecond", "tebibitPerSecond", "exbibitPerSecond", "zebibitPerSecond", "yobibitPerSecond", "bytePerSecond", "kibibytePerSecond", "mebibytePerSecond", "gibibytePerSecond", "tebibytePerSecond", "exbibytePerSecond", "zebibytePerSecond", "yobibytePerSecond", "bit", "kibibit", "mebibit", "gibibit", "tebibit", "exbibit", "zebibit", "yobibit", "byte", "kibibyte", "mebibyte", "gibibyte", "tebibyte", "exbibyte", "zebibyte", "yobibyte", "kilogramPerCubicMetre", "gramPerCubicMetre", "metre", "centimetre", "millimetre", "micrometre", "nanometre", "kilometre", "foot", "inch", "mile", "nauticalMile", "astronomicalUnit", "coulomb", "joule", "kilojoule", "megajoule", "gigajoule", "electronvolt", "megaelectronvolt", "kilowattHour", "newton", "pound", "ounce", "ton", "hertz", "kilohertz", "megahertz", "gigahertz", "kilogramPerCubicMetre", "gramPerCubicMetre", "lux", "footcandle", "henry", "millihenry", "microhenry", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "metre", "centimetre", "millimetre", "micrometre", "nanometre", "kilometre", "foot", "inch", "mile", "nauticalMile", "astronomicalUnit", "candelaPerSquareMetre", "watt", "microwatt", "milliwatt", "kilowatt", "megawatt", "gigawatt", "horsepower", "kilowattHourPerYear", "lumen", "candela", "weber", "maxwell", "tesla", "kilogram", "gram", "milligram", "microgram", "tonne", "slug", "gramPerSecond", "kilogramPerSecond", "gramPerHour", "kilogramPerHour", "watt", "microwatt", "milliwatt", "kilowatt", "megawatt", "gigawatt", "horsepower", "kilowattHourPerYear", "pascal", "kilopascal", "bar", "millibar", "millimetresOfMercury", "poundPerSquareInch", "inchesOfMercury", "inchesOfWater", "unity percent", "ohm", "milliohm", "kiloohm", "megaohm", "decibel", "bel", "kelvin", "degreeCelsius", "degreeFahrenheit", "newton", "pound", "ounce", "ton", "second", "millisecond", "microsecond", "nanosecond", "minute", "hour", "day", "year", "newtonMetre", "metrePerSecond", "centimetrePerSecond", "kilometrePerSecond", "metrePerHour", "kilometrePerHour", "milePerHour", "milePerSecond", "knot", "volt", "millivolt", "microvolt", "kilovolt", "megavolt", "cubicMetre", "cubicCentimetre", "litre", "millilitre", "cubicFoot", "cubicInch", "fluidOunce", "gallon", "litrePerSecond", "millilitrePerSecond", "litrePerHour", "millilitrePerHour"].sort();
}

/***/ }),

/***/ 5443:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lI": function() { return /* binding */ toDTMI; },
/* harmony export */   "eT": function() { return /* binding */ serviceSpecificationToDTDL; },
/* harmony export */   "Jb": function() { return /* binding */ serviceSpecificationsWithDTDL; },
/* harmony export */   "tH": function() { return /* binding */ serviceSpecificationDTMI; },
/* harmony export */   "Aq": function() { return /* binding */ DTMIToRoute; },
/* harmony export */   "Yh": function() { return /* binding */ deviceClassToDTDL; }
/* harmony export */ });
/* unused harmony exports DTDL_JACDAC_PATH, DTDL_SERVICES_PATH, DTDL_DEVICES_PATH, serviceSpecificationToComponent, routeToDTMI, serviceRouteToDTDL, encodedDeviceRouteToDTDL, routeToDTDL */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90293);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71815);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81794);
/* harmony import */ var _dtdl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2864);


/* eslint-disable @typescript-eslint/no-explicit-any */

/***
 * Jacdac service/device specification to DTDL
 *
 *  DTDL specification: https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md.
 */




var DTDL_JACDAC_PATH = "jacdac";
var DTDL_SERVICES_PATH = "services";
var DTDL_DEVICES_PATH = "devices"; // https://github.com/Azure/digital-twin-model-identifier
// ^dtmi:(?:_+[A-Za-z0-9]|[A-Za-z])(?:[A-Za-z0-9_]*[A-Za-z0-9])?(?::(?:_+[A-Za-z0-9]|[A-Za-z])(?:[A-Za-z0-9_]*[A-Za-z0-9])?)*;[1-9][0-9]{0,8}$

function toDTMI(segments, version) {
  return ("dtmi:" + DTDL_JACDAC_PATH + ":" + (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(segments).map(seg => seg === undefined ? "???" : typeof seg === "string" ? seg : "x" + seg.toString(16)).map(seg => seg.replace(/(-|_)/g, "")).join(":") + ";" + (version !== undefined ? version : 1)).toLowerCase();
}

function toUnit(pkt) {
  if (pkt.fields.length !== 1) return undefined;
  var field = pkt.fields[0];
  if (!field.unit) return undefined;
  /**
   *     type Unit = "m" | "kg" | "g" | "s" | "A" | "K" | "cd" | "mol" | "Hz" | "rad" | "sr" | "N" | "Pa" | "J" | "W" | "C" | "V" | "F" | "Ohm"
      | "S" | "Wb" | "T" | "H" | "Cel" | "lm" | "lx" | "Bq" | "Gy" | "Sv" | "kat" | "m2" | "m3" | "l" | "m/s" | "m/s2" | "m3/s" | "l/s"
      | "W/m2" | "cd/m2" | "bit" | "bit/s" | "lat" | "lon" | "pH" | "dB" | "dBW" | "Bspl" | "count" | "/" | "%RH" | "%EL" | "EL"
      | "1/s" | "1/min" | "beat/min" | "beats" | "S/m" | "B" | "VA" | "VAs" | "var" | "vars" | "J/m" | "kg/m3" | "deg";
   type SecondaryUnit = "ms" | "min" | "h" | "MHz" | "kW" | "kVA" | "kvar" | "Ah" | "Wh" | "kWh"
      | "varh" | "kvarh" | "kVAh" | "Wh/km" | "KiB" | "GB" | "Mbit/s" | "B/s" | "MB/s" | "mV" | "mA" | "dBm" | "ug/m3"
      | "mm/h" | "m/h" | "ppm" | "/100" | "/1000" | "hPa" | "mm" | "cm" | "km" | "km/h";
   */

  var units = {
    "m/s2": {
      semantic: "Acceleration",
      unit: "metrePerSecondSquared"
    },
    rad: {
      semantic: "Angle",
      unit: "radian"
    },
    "rad/s": {
      semantic: "AngularVelocity",
      unit: "radianPerSecond"
    },
    "rad/s2": {
      semantic: "AngularAcceleration",
      unit: "radianPerSecondSquared"
    },
    m: {
      semantic: "Length",
      unit: "metre"
    },
    m2: {
      semantic: "Area",
      unit: "squareMetre"
    },
    s: {
      semantic: "TimeSpan",
      unit: "second"
    },
    ms: {
      semantic: "TimeSpan",
      unit: "millisecond"
    },
    us: {
      semantic: "TimeSpan",
      unit: "microsecond"
    },
    K: {
      semantic: "Temperature",
      unit: "kelvin"
    },
    C: {
      semantic: "Temperature",
      unit: "degreeCelsius"
    },
    F: {
      semantic: "Temperature",
      unit: "degreeFahrenheit"
    },
    g: {
      semantic: "Acceleration",
      unit: "gForce"
    },
    mA: {
      semantic: "Current",
      unit: "milliampere"
    },
    uA: {
      semantic: "Current",
      unit: "microampere"
    },
    A: {
      semantic: "Current",
      unit: "ampere"
    },
    mV: {
      semantic: "Voltage",
      unit: "millivolt"
    },
    uV: {
      semantic: "Voltage",
      unit: "microvolt"
    },
    V: {
      semantic: "Voltage",
      unit: "volt"
    }
  };
  var unit = units[field.unit];
  if (unit) return unit; // ignoring some known units

  if (["#", "/"].indexOf(field.unit) > -1) return undefined; //console.warn(`unsupported unit ${field.unit}`)

  return undefined;
} // https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#primitive-schemas


function enumDTDI(srv, en) {
  return toDTMI([srv.classIdentifier, en.name]);
}

function enumSchema(srv, en) {
  var dtdl = {
    "@type": "Enum",
    "@id": enumDTDI(srv, en),
    valueSchema: "integer",
    enumValues: Object.keys(en.members).map(k => ({
      name: (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .escapeName */ .Jg)(k),
      displayName: k,
      enumValue: en.members[k]
    }))
  };
  return dtdl;
}

function fieldType(srv, pkt, field) {
  var type;
  if (field.type == "bool") type = "boolean";else if (field.isFloat) type = "float";else if (field.isSimpleType) {
    if (/^(u|i)/.test(field.type)) type = "integer";else if (field.type === "B") // base64 encoded binary data
      type = "string";
  } else if (field.type === "string" || field.type == "string0") type = "string";else if (field.shift && /^(u|i)/.test(field.type)) type = "float"; // decimal type
  else {
    var en = srv.enums[field.type];
    if (en) type = enumDTDI(srv, en);
  } //if (!type)
  //    console.warn(`unknown field type ${field.type}`, field)

  return {
    name: field.name == "_" ? pkt.name : field.name,
    type: type
  };
}

function toLocalizedString(str) {
  return str ? {
    en: str
  } : undefined;
} // converts JADAC pkt data layout into a DTDL schema


function toSchema(srv, pkt, supportsArray) {
  var fields = pkt.fields.map(field => fieldType(srv, pkt, field));
  if (!fields.length) return undefined; // a single data entry

  if (fields.length === 1 && !pkt.fields[0].startRepeats) return fields[0].type; // map fields into schema

  var schemas = fields.map(field => ({
    name: field.name,
    schema: field.type
  })); // is there an array?

  var repeatIndex = pkt.fields.findIndex(field => field.startRepeats);

  if (repeatIndex < 0) {
    // no array
    // wrap schemas into an object
    return (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .objectSchema */ .d_)(schemas);
  } // check if arrays are supported


  if (!supportsArray) {
    //console.warn(`arrays not supported in ${srv.shortName}.${pkt.name}`)
    return undefined;
  }

  if (repeatIndex == 0) {
    // the whole structure is an array
    return (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .arraySchema */ .yP)((0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .objectSchema */ .d_)(schemas));
  } else {
    // split fields into prelude and array data
    var nonRepeat = schemas.slice(0, repeatIndex);
    var repeats = schemas.slice(repeatIndex);
    return (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .objectSchema */ .d_)([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(nonRepeat), [{
      name: "repeat",
      schema: (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .arraySchema */ .yP)(repeats.length > 1 ? (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .objectSchema */ .d_)(repeats) : repeats[0])
    }]));
  }
}

function packetToDTDL(srv, pkt) {
  var types = {
    const: "Property",
    rw: "Property",
    ro: "Telemetry",
    event: "Telemetry"
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var dtdl = {
    "@type": types[pkt.kind] || "Unsupported" + pkt.kind,
    name: pkt.name,
    "@id": toDTMI([srv.classIdentifier, pkt.kind, pkt.name]),
    description: toLocalizedString(pkt.description)
  };

  switch (pkt.kind) {
    case "report":
    case "command":
      // https://docs.microsoft.com/en-us/azure/digital-twins/concepts-models#azure-digital-twins-dtdl-implementation-specifics
      return undefined;

    case "const":
    case "rw":
    case "ro":
    case "event":
      {
        var unit = toUnit(pkt);

        if (unit) {
          dtdl.unit = unit.unit;
        }

        dtdl.schema = toSchema(srv, pkt, false);
        if (pkt.kind === "rw") dtdl.writable = true;

        if (pkt.kind === "event") {
          dtdl["@type"] = [dtdl["@type"], "Event"];
          if (!dtdl.schema) dtdl.schema = "integer";
        } else if (unit && unit.semantic) dtdl["@type"] = [dtdl["@type"], unit.semantic];

        break;
      }

    default:
      //console.log(`unknown packet kind ${pkt.kind}`)
      break;
  }

  if (!dtdl.schema) {
    //console.log(`unknown schema for ${srv.name}.${pkt.name}`);
    return undefined;
  }

  return dtdl;
}

function serviceSpecificationToDTDL(srv) {
  var registers = srv.packets.filter(pkt => (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isHighLevelRegister */ .vr)(pkt) && !pkt.client && pkt.identifier !== _jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemReg.Variant */ .ZJq.Variant);
  var events = srv.packets.filter(pkt => (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isHighLevelEvent */ .jl)(pkt) && !pkt.client);
  var dtdl = {
    "@type": "Interface",
    "@id": serviceSpecificationDTMI(srv),
    displayName: (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .escapeDisplayName */ .n)(srv.name),
    description: toLocalizedString(srv.notes["short"]),
    contents: [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(registers), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(events)).map(pkt => {
      try {
        return packetToDTDL(srv, pkt);
      } catch (e) {
        console.log("failed to generate DTDL for " + srv.name, e);
        return undefined;
      }
    }).filter(c => !!c)
  }; // TODO extends support

  var hasEnums = Object.keys(srv.enums).length;

  if (hasEnums) {
    dtdl.schemas = [];
    if (hasEnums) dtdl.schemas = dtdl.schemas.concat(Object.keys(srv.enums).map(en => enumSchema(srv, srv.enums[en])));
  }

  dtdl["@context"] = _dtdl__WEBPACK_IMPORTED_MODULE_4__/* .DTDL_CONTEXT */ .LM;
  return dtdl;
}
function serviceSpecificationsWithDTDL() {
  var ignoredServices = [_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_CONTROL */ .gm9, _jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_LOGGER */ .w9j, _jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_ROLE_MANAGER */ .igi, _jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_PROTO_TEST */ .$Bn, _jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_BOOTLOADER */ .PWm];
  var specs = (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(spec => ignoredServices.indexOf(spec.classIdentifier) < 0).filter(spec => !/^_/.test(spec.shortId));
  return specs;
}
function serviceSpecificationToComponent(srv, name) {
  var dtdl = {
    "@type": "Component",
    name: name,
    displayName: (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .escapeDisplayName */ .n)(srv.name),
    schema: serviceSpecificationDTMI(srv)
  };
  return dtdl;
}
function serviceSpecificationDTMI(srv, customPath) {
  return toDTMI([customPath || DTDL_SERVICES_PATH, srv.classIdentifier]);
}
function DTMIToRoute(dtmi) {
  var route = dtmi.toLowerCase().replace(/;/, "-").replace(/:/g, "/") + ".json";
  return route;
}

function parseRoute(route, normalize) {
  var [, path, version] = /(.*)-(\d+)\.json$/.exec(route);
  var parts = path.split("/");
  if (normalize) while (parts[0] === "dtmi" || parts[0] === DTDL_JACDAC_PATH) {
    parts.shift();
  }
  return {
    version,
    parts
  };
}

function routeToDTMI(route) {
  var {
    parts,
    version
  } = parseRoute(route);
  if (parts[0] !== "dtmi") parts.unshift("dtmi");
  if (parts[1] !== DTDL_JACDAC_PATH) parts.splice(1, 0, DTDL_JACDAC_PATH);
  return parts.join(":") + ";" + version;
}
function serviceRouteToDTDL(route) {
  var {
    parts
  } = parseRoute(route, true);
  if (parts[0] !== DTDL_SERVICES_PATH) throw Error("invalid route");
  var serviceClass = parseInt("0" + parts[1], 16);
  var specification = (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass);
  var dtdl = serviceSpecificationToDTDL(specification);
  return dtdl;
}
function encodedDeviceRouteToDTDL(route) {
  var {
    parts
  } = parseRoute(route, true);
  if (parts[0] !== DTDL_DEVICES_PATH) throw Error("invalid route");
  var services = parts.slice(1).map(part => {
    var m = /^x(\w{8,8})(\d*)$/.exec(part);
    return {
      service: (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(parseInt(m[1], 16)),
      occurance: m[2] ? parseInt(m[2]) : 1
    };
  });
  var dtdl = {
    "@type": "Interface",
    "@id": routeToDTMI(route),
    displayName: route,
    contents: (0,_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .arrayConcatMany */ .ue)(services.map(_ref => {
      var {
        occurance,
        service
      } = _ref;
      return Array(occurance).fill(0).map((_, i) => serviceSpecificationToComponent(service, "" + service.shortName + i));
    })),
    "@context": _dtdl__WEBPACK_IMPORTED_MODULE_4__/* .DTDL_CONTEXT */ .LM
  };
  return dtdl;
}
var routes = {
  services: serviceRouteToDTDL,
  devices: encodedDeviceRouteToDTDL
};
function routeToDTDL(route) {
  var {
    parts
  } = parseRoute(route, true);
  var path = parts[0];
  var handler = routes[path];
  return handler === null || handler === void 0 ? void 0 : handler(route);
}
function deviceClassToDTDL(dev) {
  var services = dev.services.map(srv => (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(srv)); // allocate names and count services

  var serviceGroups = {};
  var names = [];
  services.forEach(srv => {
    serviceGroups[srv.classIdentifier] = (serviceGroups[srv.classIdentifier] || 0) + 1;
    var name = (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .escapeName */ .Jg)(srv.shortId || srv.shortName);
    if (names.indexOf(name) < 0) names.push(name + "0");else {
      var count = 2;

      while (names.indexOf(name + count) > -1) {
        count++;
      }

      names.push(name + count);
    }
  }); // compute id from groups

  var dtmi = toDTMI([DTDL_DEVICES_PATH].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(Object.keys(serviceGroups).map(cls => "x" + parseInt(cls).toString(16) + serviceGroups[cls]))));
  var dtdl = {
    "@type": "Interface",
    "@id": dtmi,
    displayName: (0,_dtdl__WEBPACK_IMPORTED_MODULE_4__/* .escapeDisplayName */ .n)(dev.name),
    description: toLocalizedString(dev.description),
    contents: services.map((srv, i) => serviceSpecificationToComponent(srv, names[i])),
    "@context": _dtdl__WEBPACK_IMPORTED_MODULE_4__/* .DTDL_CONTEXT */ .LM
  };
  return dtdl;
}

/***/ }),

/***/ 50274:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CodeBlock; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(75167);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 2 modules
var dist = __webpack_require__(18328);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/github/index.js
var github = __webpack_require__(13019);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsDark/index.js
var vsDark = __webpack_require__(41194);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GetApp.js
var GetApp = __webpack_require__(52377);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Launch.js
var Launch = __webpack_require__(58504);
// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__(60102);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(79739);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(44942);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(342);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(3263);
// EXTERNAL MODULE: ./src/components/makecode/MakeCodeSnippetContext.tsx
var makecode_MakeCodeSnippetContext = __webpack_require__(54888);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/makecode/services.ts + 1 modules
var services = __webpack_require__(21389);
;// CONCATENATED MODULE: ./src/components/hooks/useWindowEvent.ts

function useWindowEvent_useWindowEvent(type, listener, passive, deps) {
  if (passive === void 0) {
    passive = false;
  }

  useEffect(() => {
    if (typeof window === "undefined") return undefined; // SSR
    // initiate the event handler

    window.addEventListener(type, listener, passive); // this will clean up the event every time the component is re-rendered

    return () => {
      window.removeEventListener(type, listener);
    };
  }, [type, listener, passive].concat(deps || []));
}
;// CONCATENATED MODULE: ./src/components/makecode/useMakeCodeRenderer.ts





function parseMakeCodeSnippet(source) {
  var ghost;
  var code;
  var meta = {
    dependencies: []
  };

  if (/^---\n/.test(source)) {
    var _front;

    var front;
    var parts = source.replace(/^---\n/, '').split(/---\n/gm);

    switch (parts.length) {
      case 1:
        front = ghost = undefined;
        code = source;
        break;

      case 2:
        [front, code] = parts;
        break;

      default:
        [front, ghost, code] = parts;
        break;
    } // parse front matter


    (_front = front) === null || _front === void 0 ? void 0 : _front.replace(/(.+):\s*(.+)\s*\n/g, (m, name, value) => {
      switch (name) {
        case "dep":
          meta.dependencies.push(value);
          break;

        case "snippet":
          meta.snippet = !!value;
          break;

        default:
          meta[name] = value;
      }

      return "";
    });
  } else {
    code = source;
  } // sniff services


  var mkcds = (0,services/* makeCodeServices */.qs)();
  mkcds.filter(info => {
    var src = (ghost || "") + "\n" + (code || "");
    return src.indexOf(info.client.qName) > -1 || info.client.default && src.indexOf(info.client.default) > -1;
  }).map(info => info.client.name.replace(/^pxt-/, '') + "=github:" + info.client.repo).forEach(dep => meta.dependencies.push(dep)); // add jacdac by default

  if (!meta.dependencies.length) meta.dependencies.push("jacdac=github:microsoft/pxt-jacdac"); // ensure unique deps

  meta.dependencies = (0,utils/* unique */.Tw)(meta.dependencies);
  return {
    code,
    ghost,
    meta
  };
}
function useMakeCodeRenderer() {
  var {
    target,
    rendererUrl
  } = useContext(MakeCodeSnippetContext);
  var lang = "";
  var iframeId = "makecoderenderer" + target;
  var pendingRequests = useMemo(() => ({}), [target, lang]);

  var sendRequest = req => {
    var iframe = typeof document !== "undefined" && document.getElementById(iframeId);
    if (iframe !== null && iframe !== void 0 && iframe.dataset.ready) iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow.postMessage(req, rendererUrl);
  };

  var render = source => {
    var {
      code,
      ghost,
      meta
    } = source;
    var {
      dependencies,
      snippet
    } = meta; // spin up iframe on demans

    if (typeof document !== "undefined" && !document.getElementById(iframeId)) {
      console.log("mkcd: loading iframe");
      var f = document.createElement("iframe");
      f.id = iframeId;
      f.style.position = "absolute";
      f.style.left = "0";
      f.style.bottom = "0";
      f.style.width = "1px";
      f.style.height = "1px";
      f.src = rendererUrl + "?render=1" + (lang ? "&lang=" + lang : '');
      document.body.appendChild(f);
    }

    var req = {
      type: "renderblocks",
      id: "r" + Math.random(),
      code,
      ghost,
      options: {
        dependencies,
        snippetMode: snippet
      }
    };
    return new Promise((resolve, reject) => {
      pendingRequests[req.id] = {
        req,
        resolve,
        reject
      };
      sendRequest(req);
    });
  }; // listen for messages


  var handleMessage = ev => {
    var msg = ev.data;
    if (msg.source != "makecode") return;

    switch (msg.type) {
      case "renderready":
        {
          console.log("mkcd: renderer ready, " + Object.keys(pendingRequests).length + " pending");
          var iframe = typeof document !== "undefined" && document.getElementById(iframeId);

          if (iframe) {
            console.log("flushing messages");
            iframe.dataset.ready = "1";
            Object.keys(pendingRequests).forEach(k => sendRequest(pendingRequests[k].req));
          }

          break;
        }

      case "renderblocks":
        {
          var id = msg.id; // this is the id you sent

          var r = pendingRequests[id];
          if (!r) return;
          delete pendingRequests[id];
          r.resolve(msg);
          break;
        }
    }
  };

  useWindowEvent("message", handleMessage, false, []);
  return {
    render
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeSimulator.tsx






var useStyles = (0,makeStyles/* default */.Z)(() => (0,createStyles/* default */.Z)({
  root: {
    width: "100%"
  },
  root2: {
    position: "relative",
    paddingTop: "86.75%"
  },
  iframe: {
    position: "absolute",
    left: 0,
    top: 0,
    border: "none",
    width: "100%",
    height: "100%"
  }
}));
function MakeCodeSimulator(props) {
  var {
    simUrl
  } = (0,react.useContext)(makecode_MakeCodeSnippetContext/* default */.Z);
  var {
    snippet
  } = props;
  var {
    code,
    ghost,
    meta
  } = snippet;
  var {
    dependencies
  } = meta;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var frameRef = (0,react.useRef)();
  var classes = useStyles();
  var src = (ghost || "") + "\n" + (code || "");
  var url = simUrl + "#single=1&fullscren=1&nofooter=1&deps=" + encodeURIComponent(dependencies.join(",")) + "&code=" + encodeURIComponent(src);
  var origin = new URL(url).origin;
  (0,react.useEffect)(() => bus.subscribe([constants/* PACKET_SEND */.RaS, constants/* PACKET_PROCESS */.wY8], pkt => {
    var _frameRef$current, _frameRef$current$con;

    this.packetSent++;
    var msg = {
      type: "messagepacket",
      channel: "jacdac",
      broadcast: true,
      data: pkt.toBuffer(),
      sender: pkt.sender
    };
    (_frameRef$current = frameRef.current) === null || _frameRef$current === void 0 ? void 0 : (_frameRef$current$con = _frameRef$current.contentWindow) === null || _frameRef$current$con === void 0 ? void 0 : _frameRef$current$con.postMessage(msg, origin);
  }));
  return /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.root2
  }, /*#__PURE__*/react.createElement("iframe", {
    ref: frameRef,
    className: classes.iframe,
    src: url,
    title: "MakeCode rendering iframe to generate blocks images."
  }))));
}
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeSnippet.tsx









function MakeCodeSnippet(props) {
  var {
    renderedSource
  } = props;
  var {
    source,
    rendered
  } = JSON.parse(renderedSource);
  var {
    height,
    width,
    url
  } = rendered || {};
  var tabs = ["blocks", "typescript", "sim"];
  var {
    editor,
    setEditor
  } = (0,react.useContext)(makecode_MakeCodeSnippetContext/* default */.Z);
  var {
    0: tab,
    1: setTab
  } = (0,react.useState)(tabs.indexOf(editor) || 0);

  var handleTabChange = (event, newValue) => {
    if (newValue < tabs.length - 1) setEditor(tabs[newValue]);
    setTab(newValue);
  };

  var snippet = (0,react.useMemo)(() => parseMakeCodeSnippet(source), [source]);
  var {
    code
  } = snippet;
  return /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "Select MakeCode editor"
  }, /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Blocks"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "JavaScript"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Simulator"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 0
  }, /*#__PURE__*/react.createElement("img", {
    src: (0,gatsby_browser_entry.withPrefix)(url),
    alt: source,
    loading: "lazy"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 1
  }, /*#__PURE__*/react.createElement(CodeBlock, {
    className: "typescript"
  }, code)), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 2
  }, /*#__PURE__*/react.createElement(MakeCodeSimulator, {
    snippet: snippet
  })));
}
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
;// CONCATENATED MODULE: ./src/components/CodeBlock.tsx


var _excluded = ["children", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name



 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name





var TraceSnippet = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 5599).then(__webpack_require__.bind(__webpack_require__, 15599)));
var CodeSandboxButton = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 8574).then(__webpack_require__.bind(__webpack_require__, 18574)));

function HighlightedCode(props) {
  var {
    children,
    codeSandbox,
    className,
    downloadName,
    downloadText,
    actions,
    url
  } = props;
  var {
    darkMode
  } = (0,react.useContext)(DarkModeContext/* default */.Z);
  var language = (className === null || className === void 0 ? void 0 : className.replace(/language-/, "")) || "";
  var theme = darkMode === "dark" ? vsDark/* default */.Z : github/* default */.Z;
  var valueUri = !!downloadText && "data:application/json;charset=UTF-8," + encodeURIComponent(downloadText);
  return /*#__PURE__*/react.createElement(dist/* default */.ZP, Object.assign({}, dist/* defaultProps */.lG, {
    code: (children === null || children === void 0 ? void 0 : children.replace(/[\s\r\n]*$/g, "")) || "",
    language: language,
    theme: theme
  }), _ref => {
    var {
      className,
      style,
      tokens,
      getLineProps,
      getTokenProps
    } = _ref;
    return /*#__PURE__*/react.createElement("pre", {
      className: className,
      style: _objectSpread({}, style)
    }, !!url && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      style: {
        float: "right"
      },
      href: url
    }, /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
      title: "Open " + url
    }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, null, /*#__PURE__*/react.createElement(Launch/* default */.Z, null)))), !!downloadText && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      style: {
        float: "right"
      },
      href: valueUri,
      download: downloadName || "download"
    }, /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
      title: "Download"
    }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, null, /*#__PURE__*/react.createElement(GetApp/* default */.Z, null)))), codeSandbox && /*#__PURE__*/react.createElement("div", {
      style: {
        float: "right"
      }
    }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(CodeSandboxButton, {
      source: codeSandbox
    }))), actions && /*#__PURE__*/react.createElement("div", {
      style: {
        float: "right"
      }
    }, actions), tokens === null || tokens === void 0 ? void 0 : tokens.map((line, index) => {
      var lineProps = getLineProps({
        line,
        key: index
      });
      return /*#__PURE__*/react.createElement("div", Object.assign({
        key: index
      }, lineProps), line.map((token, key) => /*#__PURE__*/react.createElement("span", Object.assign({
        key: key
      }, getTokenProps({
        token,
        key
      })))));
    }));
  });
}

function CodeBlock(props) {
  var {
    children,
    className
  } = props,
      rest = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var language = (className === null || className === void 0 ? void 0 : className.replace(/language-/, "")) || "";

  switch (language) {
    case "trace":
      return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(TraceSnippet, {
        source: children
      }));

    case "blocks":
      return /*#__PURE__*/react.createElement(MakeCodeSnippet, {
        renderedSource: children
      });

    case "vanilla":
      {
        var [source, js, html] = children.split(/\n-{5,}\n/gi);
        return /*#__PURE__*/react.createElement(HighlightedCode, Object.assign({}, rest, {
          className: "javascript",
          codeSandbox: {
            js,
            html
          }
        }), source);
      }

    default:
      return /*#__PURE__*/react.createElement(HighlightedCode, props);
  }
}

/***/ }),

/***/ 16591:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": function() { return /* binding */ DTDLSnippet; }
/* harmony export */ });
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36176);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _ui_Snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34276);



function DTDLSnippet(props) {
  var {
    node,
    name
  } = props;
  var dtdl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => JSON.stringify(node, null, 2), [node]);
  if (!node) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Snippet__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    value: dtdl,
    mode: "json",
    download: (name || "dtdl") + ".json",
    caption: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__.Link, {
      to: "/dtmi"
    }, "DTDL"), " is an open source modelling language developed by Microsoft Azure.")
  });
}

/***/ }),

/***/ 79739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PaperBox; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59355);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58063);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["children", "padding", "elevation", "bgcolor"];


function PaperBox(props) {
  var {
    children,
    padding,
    elevation,
    bgcolor
  } = props,
      others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, Object.assign({}, others, {
    bgcolor: bgcolor,
    mb: theme.spacing(0.25)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    square: true,
    elevation: elevation
  }, padding !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    p: theme.spacing(padding || 0.25)
  }, children), padding === 0 && children));
}

/***/ }),

/***/ 34276:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Snippet; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50274);



function Snippet(props) {
  var {
    value,
    mode,
    download,
    url,
    caption,
    actions
  } = props;
  var v = typeof value === "function" ? value() : value;
  var className = mode && "language-" + (mode === "sts" ? "ts" : mode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: className,
    downloadName: download,
    downloadText: download && v,
    actions: actions,
    url: url
  }, v), caption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    variant: "caption"
  }, caption));
}

/***/ })

}]);
//# sourceMappingURL=252d44aadbc814cc2c323aa97a34faf3348fef4c-34fd7d8d3dc86a366e31.js.map