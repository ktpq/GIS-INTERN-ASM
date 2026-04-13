import {
  m2,
  p
} from "./chunk-BHNYDRJD.js";
import {
  a as a4
} from "./chunk-E4YQMIKY.js";
import {
  s as s3
} from "./chunk-KIQ3K354.js";
import {
  f as f2,
  i as i2,
  l as l2,
  n as n6
} from "./chunk-IZURHDBN.js";
import {
  D as D2,
  F,
  f2 as f,
  x
} from "./chunk-DZN3R4UM.js";
import {
  n as n5,
  r as r2
} from "./chunk-AIECNX6R.js";
import {
  l
} from "./chunk-NSJQHJ2B.js";
import {
  e,
  v,
  x as x2
} from "./chunk-DNCZTJNI.js";
import {
  n as n4
} from "./chunk-HKOFZI3I.js";
import {
  o as o3
} from "./chunk-QWNB5I7T.js";
import {
  n as n3
} from "./chunk-5EUDKAG7.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  D,
  a2,
  a3,
  c,
  i2 as i,
  m3 as m,
  o3 as o2,
  r4 as r,
  s2 as s,
  s4 as s2,
  u
} from "./chunk-LV7AMIAU.js";
import {
  o
} from "./chunk-O4A47ZEM.js";
import {
  a,
  n,
  n2
} from "./chunk-IDI4VM7T.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/renderers/support/AuthoringInfoClassBreakInfo.js
var s4;
var a5 = s4 = class extends n3 {
  constructor(e3) {
    super(e3), this.minValue = 0, this.maxValue = 0;
  }
  clone() {
    return new s4({ minValue: this.minValue, maxValue: this.maxValue });
  }
};
__decorate([a3({ type: Number, json: { write: true } })], a5.prototype, "minValue", void 0), __decorate([a3({ type: Number, json: { write: true } })], a5.prototype, "maxValue", void 0), a5 = s4 = __decorate([c("esri.renderers.support.AuthoringInfoClassBreakInfo")], a5);
var i3 = a5;

// node_modules/@arcgis/core/renderers/support/AuthoringInfoFieldInfo.js
var n7;
var l3 = n7 = class extends n3 {
  constructor(o5) {
    super(o5), this.field = "", this.normalizationField = "", this.label = "", this.classBreakInfos = new Array();
  }
  clone() {
    return new n7({ field: this.field, normalizationField: this.normalizationField, label: this.label, classBreakInfos: a(this.classBreakInfos) });
  }
};
__decorate([a3({ type: String, json: { write: true } })], l3.prototype, "field", void 0), __decorate([a3({ type: String, json: { write: true } })], l3.prototype, "normalizationField", void 0), __decorate([a3({ type: String, json: { write: true } })], l3.prototype, "label", void 0), __decorate([a3({ type: [i3], json: { write: true } })], l3.prototype, "classBreakInfos", void 0), l3 = n7 = __decorate([c("esri.renderers.support.AuthoringInfoFieldInfo")], l3);
var a6 = l3;

// node_modules/@arcgis/core/renderers/support/AuthoringInfoSizeStop.js
var s5;
var i4 = s5 = class extends n3 {
  constructor(e3) {
    super(e3), this.label = null, this.size = null, this.value = null;
  }
  clone() {
    return new s5({ label: this.label, value: this.value, size: this.size });
  }
};
__decorate([a3({ type: String, json: { write: true } })], i4.prototype, "label", void 0), __decorate([a3({ type: Number, json: { write: true } })], i4.prototype, "size", void 0), __decorate([a3({ type: Number, json: { write: true } })], i4.prototype, "value", void 0), i4 = s5 = __decorate([c("esri.renderers.support.AuthoringInfoSizeStop")], i4);
var l4 = i4;

// node_modules/@arcgis/core/renderers/support/AuthoringInfoVisualVariable.js
var p2;
var a7 = new o({ percentTotal: "percent-of-total", ratio: "ratio", percent: "percent" });
var u2 = new o({ sizeInfo: "size", colorInfo: "color", transparencyInfo: "opacity", rotationInfo: "rotation" });
var y = { key: (e3) => "number" == typeof e3 ? "number" : "string", typeMap: { number: Number, string: String }, base: null };
var m3 = ["high-to-low", "above-and-below", "centered-on", "extremes"];
var S = [.../* @__PURE__ */ new Set([...["high-to-low", "above-and-below", "centered-on", "extremes", "above", "below"], ...["high-to-low", "above-and-below", "above", "below", "reference-size", "spike"]])];
var c2 = ["seconds", "minutes", "hours", "days", "months", "years"];
var h = ["circle", "diamond", "hexagon-flat", "hexagon-pointy", "square"];
var d = ["triangle-closed-outline", "triangle-gradient-fill-closed", "triangle-gradient-fill-closed-outline", "triangle-gradient-fill-open", "triangle-gradient-fill-open-outline", "triangle-open-outline", "triangle-solid-fill-closed", "triangle-solid-fill-closed-outline", "triangle-solid-fill-open", "triangle-solid-fill-open-outline"];
var f3 = p2 = class extends n3 {
  constructor(e3) {
    super(e3), this.endTime = null, this.field = null, this.maxSliderValue = null, this.minSliderValue = null, this.startTime = null, this.type = null, this.units = null;
  }
  castEndTime(e3) {
    return "string" == typeof e3 || "number" == typeof e3 ? e3 : null;
  }
  get normalizationField() {
    return "reference-size" === this.theme || "spike" === this.theme ? this._get("normalizationField") : null;
  }
  set normalizationField(e3) {
    this._set("normalizationField", e3);
  }
  get referenceSizeScale() {
    return "reference-size" === this.theme ? this._get("referenceSizeScale") : null;
  }
  set referenceSizeScale(e3) {
    this._set("referenceSizeScale", e3);
  }
  get referenceSizeSymbolStyle() {
    return "reference-size" === this.theme ? this._get("referenceSizeSymbolStyle") : null;
  }
  set referenceSizeSymbolStyle(e3) {
    this._set("referenceSizeSymbolStyle", e3);
  }
  get spikeSymbolStyle() {
    return "spike" === this.theme ? this._get("spikeSymbolStyle") : null;
  }
  set spikeSymbolStyle(e3) {
    this._set("spikeSymbolStyle", e3);
  }
  castStartTime(e3) {
    return "string" == typeof e3 || "number" == typeof e3 ? e3 : null;
  }
  get sizeStops() {
    return "reference-size" === this.theme || "spike" === this.theme ? this._get("sizeStops") : null;
  }
  set sizeStops(e3) {
    this._set("sizeStops", e3);
  }
  get style() {
    return "color" === this.type ? this._get("style") : null;
  }
  set style(e3) {
    this._set("style", e3);
  }
  get theme() {
    return "color" === this.type || "size" === this.type ? this._get("theme") || "high-to-low" : null;
  }
  set theme(e3) {
    this._set("theme", e3);
  }
  clone() {
    return new p2({ endTime: this.endTime, field: this.field, maxSliderValue: this.maxSliderValue, minSliderValue: this.minSliderValue, normalizationField: this.normalizationField, referenceSizeScale: this.referenceSizeScale, referenceSizeSymbolStyle: this.referenceSizeSymbolStyle, spikeSymbolStyle: this.spikeSymbolStyle, sizeStops: a(this.sizeStops), startTime: this.startTime, style: this.style, theme: this.theme, type: this.type, units: this.units });
  }
};
__decorate([a3({ types: y, json: { write: true } })], f3.prototype, "endTime", void 0), __decorate([s("endTime")], f3.prototype, "castEndTime", null), __decorate([a3({ type: String, json: { write: true } })], f3.prototype, "field", void 0), __decorate([a3({ type: Number, json: { write: true } })], f3.prototype, "maxSliderValue", void 0), __decorate([a3({ type: Number, json: { write: true } })], f3.prototype, "minSliderValue", void 0), __decorate([a3({ type: String, json: { origins: { "web-scene": { write: false } }, write: true } })], f3.prototype, "normalizationField", null), __decorate([a3({ type: Number, value: null, json: { origins: { "web-scene": { write: false } }, write: true } })], f3.prototype, "referenceSizeScale", null), __decorate([a3({ type: h, value: null, json: { origins: { "web-scene": { write: false } }, write: true } })], f3.prototype, "referenceSizeSymbolStyle", null), __decorate([a3({ type: d, value: null, json: { origins: { "web-scene": { write: false } }, write: true } })], f3.prototype, "spikeSymbolStyle", null), __decorate([a3({ types: y, json: { write: true } })], f3.prototype, "startTime", void 0), __decorate([s("startTime")], f3.prototype, "castStartTime", null), __decorate([a3({ type: [l4], json: { origins: { "web-scene": { write: false } }, write: true } })], f3.prototype, "sizeStops", null), __decorate([a3({ type: a7.apiValues, value: null, json: { type: a7.jsonValues, read: a7.read, write: a7.write } })], f3.prototype, "style", null), __decorate([a3({ type: S, value: null, json: { type: S, origins: { "web-scene": { type: m3, write: { writer: (e3, t2) => {
  m3.includes(e3) && (t2.theme = e3);
} } } }, write: true } })], f3.prototype, "theme", null), __decorate([a3({ type: u2.apiValues, json: { type: u2.jsonValues, read: u2.read, write: u2.write } })], f3.prototype, "type", void 0), __decorate([a3({ type: c2, json: { type: c2, write: true } })], f3.prototype, "units", void 0), f3 = p2 = __decorate([c("esri.renderers.support.AuthoringInfoVisualVariable")], f3);
var g = f3;

// node_modules/@arcgis/core/renderers/support/AuthoringInfo.js
var h2;
var c3 = new o({ esriClassifyDefinedInterval: "defined-interval", esriClassifyEqualInterval: "equal-interval", esriClassifyManual: "manual", esriClassifyNaturalBreaks: "natural-breaks", esriClassifyQuantile: "quantile", esriClassifyStandardDeviation: "standard-deviation" });
var y2 = new o({ classedSize: "class-breaks-size", classedColor: "class-breaks-color", univariateColorSize: "univariate-color-size", relationship: "relationship", predominance: "predominance", dotDensity: "dot-density", flow: "flow" });
var m4 = ["inches", "feet", "yards", "miles", "nautical-miles", "millimeters", "centimeters", "decimeters", "meters", "kilometers"];
var f4 = ["high-to-low", "above-and-below", "above", "below"];
var v2 = ["flow-line", "wave-front"];
var w = ["caret", "circle-caret", "arrow", "circle-arrow", "plus-minus", "circle-plus-minus", "square", "circle", "triangle", "happy-sad", "thumb", "custom"];
var b2 = h2 = class extends n3 {
  constructor(e3) {
    super(e3), this.colorRamp = null, this.fadeRatio = null, this.isAutoGenerated = false, this.lengthUnit = null, this.maxSliderValue = null, this.minSliderValue = null, this.visualVariables = null;
  }
  get classificationMethod() {
    const e3 = this._get("classificationMethod"), t2 = this.type;
    return t2 && "relationship" !== t2 ? "class-breaks-size" === t2 || "class-breaks-color" === t2 ? e3 || "manual" : null : e3;
  }
  set classificationMethod(e3) {
    this._set("classificationMethod", e3);
  }
  readColorRamp(e3) {
    return e3 ? p(e3) : void 0;
  }
  get fields() {
    return this.type && "predominance" !== this.type ? null : this._get("fields");
  }
  set fields(e3) {
    this._set("fields", e3);
  }
  get field1() {
    return this.type && "relationship" !== this.type ? null : this._get("field1");
  }
  set field1(e3) {
    this._set("field1", e3);
  }
  get field2() {
    return this.type && "relationship" !== this.type ? null : this._get("field2");
  }
  set field2(e3) {
    this._set("field2", e3);
  }
  get flowTheme() {
    return "flow" === this.type ? this._get("flowTheme") : null;
  }
  set flowTheme(e3) {
    this._set("flowTheme", e3);
  }
  get focus() {
    return this.type && "relationship" !== this.type ? null : this._get("focus");
  }
  set focus(e3) {
    this._set("focus", e3);
  }
  get numClasses() {
    return this.type && "relationship" !== this.type ? null : this._get("numClasses");
  }
  set numClasses(e3) {
    this._set("numClasses", e3);
  }
  get statistics() {
    return "univariate-color-size" === this.type && "above-and-below" === this.univariateTheme ? this._get("statistics") : null;
  }
  set statistics(e3) {
    this._set("statistics", e3);
  }
  get standardDeviationInterval() {
    const e3 = this.type;
    return e3 && "relationship" !== e3 && "class-breaks-size" !== e3 && "class-breaks-color" !== e3 || this.classificationMethod && "standard-deviation" !== this.classificationMethod ? null : this._get("standardDeviationInterval");
  }
  set standardDeviationInterval(e3) {
    this._set("standardDeviationInterval", e3);
  }
  get type() {
    return this._get("type");
  }
  set type(e3) {
    let t2 = e3;
    "classed-size" === e3 ? t2 = "class-breaks-size" : "classed-color" === e3 && (t2 = "class-breaks-color"), this._set("type", t2);
  }
  get univariateSymbolStyle() {
    return "univariate-color-size" === this.type && "above-and-below" === this.univariateTheme ? this._get("univariateSymbolStyle") : null;
  }
  set univariateSymbolStyle(e3) {
    this._set("univariateSymbolStyle", e3);
  }
  get univariateTheme() {
    return "univariate-color-size" === this.type ? this._get("univariateTheme") : null;
  }
  set univariateTheme(e3) {
    this._set("univariateTheme", e3);
  }
  clone() {
    return new h2({ classificationMethod: this.classificationMethod, colorRamp: a(this.colorRamp), fadeRatio: a(this.fadeRatio), fields: this.fields?.slice(), field1: a(this.field1), field2: a(this.field2), isAutoGenerated: this.isAutoGenerated, focus: this.focus, numClasses: this.numClasses, maxSliderValue: this.maxSliderValue, minSliderValue: this.minSliderValue, lengthUnit: this.lengthUnit, statistics: this.statistics, standardDeviationInterval: this.standardDeviationInterval, type: this.type, visualVariables: this.visualVariables && this.visualVariables.map((e3) => e3.clone()), univariateSymbolStyle: this.univariateSymbolStyle, univariateTheme: this.univariateTheme, flowTheme: this.flowTheme });
  }
};
__decorate([a3({ type: c3.apiValues, value: null, json: { type: c3.jsonValues, read: c3.read, write: c3.write, origins: { "web-document": { default: "manual", type: c3.jsonValues, read: c3.read, write: c3.write } } } })], b2.prototype, "classificationMethod", null), __decorate([a3({ types: m2, json: { write: true } })], b2.prototype, "colorRamp", void 0), __decorate([o2("colorRamp")], b2.prototype, "readColorRamp", null), __decorate([a3({ json: { write: true, origins: { "web-scene": { write: false, read: false } } } })], b2.prototype, "fadeRatio", void 0), __decorate([a3({ type: [String], value: null, json: { write: true } })], b2.prototype, "fields", null), __decorate([a3({ type: a6, value: null, json: { write: true } })], b2.prototype, "field1", null), __decorate([a3({ type: a6, value: null, json: { write: true } })], b2.prototype, "field2", null), __decorate([a3({ type: v2, value: null, json: { write: true, origins: { "web-scene": { write: false } } } })], b2.prototype, "flowTheme", null), __decorate([a3({ type: ["HH", "HL", "LH", "LL"], value: null, json: { write: true } })], b2.prototype, "focus", null), __decorate([a3({ type: Boolean, json: { write: true, default: false, origins: { "web-scene": { write: false } } } })], b2.prototype, "isAutoGenerated", void 0), __decorate([a3({ type: Number, value: null, json: { type: D, write: true } })], b2.prototype, "numClasses", null), __decorate([a3({ type: m4, json: { type: m4, read: false, write: false, origins: { "web-scene": { read: true, write: true } } } })], b2.prototype, "lengthUnit", void 0), __decorate([a3({ type: Number, json: { write: true, origins: { "web-scene": { write: false, read: false } } } })], b2.prototype, "maxSliderValue", void 0), __decorate([a3({ type: Number, json: { write: true, origins: { "web-scene": { write: false, read: false } } } })], b2.prototype, "minSliderValue", void 0), __decorate([a3({ type: Object, value: null, json: { write: true, origins: { "web-scene": { write: false, read: false } } } })], b2.prototype, "statistics", null), __decorate([a3({ type: [0.25, 0.33, 0.5, 1], value: null, json: { type: [0.25, 0.33, 0.5, 1], write: true } })], b2.prototype, "standardDeviationInterval", null), __decorate([a3({ type: y2.apiValues, value: null, json: { type: y2.jsonValues, read: y2.read, write: y2.write } })], b2.prototype, "type", null), __decorate([a3({ type: [g], json: { write: true } })], b2.prototype, "visualVariables", void 0), __decorate([a3({ type: w, value: null, json: { write: true, origins: { "web-scene": { write: false } } } })], b2.prototype, "univariateSymbolStyle", null), __decorate([a3({ type: f4, value: null, json: { write: true, origins: { "web-scene": { write: false } } } })], b2.prototype, "univariateTheme", null), b2 = h2 = __decorate([c("esri.renderers.support.AuthoringInfo")], b2);

// node_modules/@arcgis/core/renderers/Renderer.js
var n8 = new o({ simple: "simple", uniqueValue: "unique-value", classBreaks: "class-breaks", heatmap: "heatmap", dotDensity: "dot-density", dictionary: "dictionary", pieChart: "pie-chart" }, { ignoreUnknown: true });
var a8 = class extends n3 {
  constructor(e3) {
    super(e3), this.authoringInfo = null, this.type = null;
  }
  async getRequiredFields(e3) {
    if (!this.collectRequiredFields) return [];
    const r5 = /* @__PURE__ */ new Set();
    return await this.collectRequiredFields(r5, e3), Array.from(r5).sort();
  }
  getSymbol(e3, r5) {
  }
  async getSymbolAsync(e3, r5) {
  }
  get symbols() {
    return [];
  }
  get arcadeRequired() {
    return false;
  }
  getAttributeHash() {
    return JSON.stringify(this);
  }
  getMeshHash() {
    return JSON.stringify(this);
  }
};
__decorate([a3({ type: b2, json: { write: true } })], a8.prototype, "authoringInfo", void 0), __decorate([a3({ type: n8.apiValues, readOnly: true, json: { type: n8.jsonValues, read: false, write: { writer: n8.write, ignoreOrigin: true, isRequired: true } } })], a8.prototype, "type", void 0), a8 = __decorate([c("esri.renderers.Renderer")], a8);

// node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js
var o4;
var l5 = o4 = class extends n3 {
  constructor(e3) {
    super(e3), this.label = null, this.value = null, this.useMinValue = null, this.useMaxValue = null;
  }
  get size() {
    return this._get("size");
  }
  set size(e3) {
    this._set("size", e3);
  }
  clone() {
    return new o4({ label: this.label, size: this.size, value: this.value, useMaxValue: this.useMaxValue, useMinValue: this.useMinValue });
  }
};
__decorate([a3({ type: String, json: { write: true } })], l5.prototype, "label", void 0), __decorate([a3({ type: Number, cast: o3, json: { write: { isRequired: true } } })], l5.prototype, "size", null), __decorate([a3({ type: Number, json: { write: { isRequired: true } } })], l5.prototype, "value", void 0), __decorate([a3({ type: Boolean, json: { write: false } })], l5.prototype, "useMinValue", void 0), __decorate([a3({ type: Boolean, json: { write: false } })], l5.prototype, "useMaxValue", void 0), l5 = o4 = __decorate([c("esri.renderers.visualVariables.support.SizeStop")], l5);

// node_modules/@arcgis/core/renderers/visualVariables/support/VisualVariableLegendOptions.js
var i5 = class extends l(n3) {
  constructor(o5) {
    super(o5), this.showLegend = null, this.title = null;
  }
};
__decorate([a3({ type: Boolean, json: { write: true } })], i5.prototype, "showLegend", void 0), __decorate([a3({ type: String, json: { write: true } })], i5.prototype, "title", void 0), i5 = __decorate([c("esri.renderers.visualVariables.support.VisualVariableLegendOptions")], i5);
var p3 = i5;

// node_modules/@arcgis/core/renderers/visualVariables/support/SizeVariableLegendOptions.js
var t = class extends p3 {
  constructor(e3) {
    super(e3), this.customValues = null;
  }
};
__decorate([a3({ type: [Number], json: { write: true } })], t.prototype, "customValues", void 0), t = __decorate([c("esri.renderers.visualVariables.support.SizeVariableLegendOptions")], t);
var i6 = t;

// node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js
var a9 = new o({ colorInfo: "color", transparencyInfo: "opacity", rotationInfo: "rotation", sizeInfo: "size" });
var u3 = class extends n3 {
  constructor(e3) {
    super(e3), this.index = null, this.type = null, this.field = null, this.valueExpression = null, this.valueExpressionTitle = null, this.legendOptions = null;
  }
  castField(e3) {
    return null == e3 ? e3 : "function" == typeof e3 ? (n2.getLogger(this).error(".field: field must be a string value"), null) : u(e3);
  }
  get arcadeRequired() {
    return !!this.valueExpression;
  }
  clone() {
  }
  getAttributeHash() {
    return `${this.type}-${this.field}-${this.valueExpression}`;
  }
};
__decorate([a3()], u3.prototype, "index", void 0), __decorate([a3({ type: a9.apiValues, readOnly: true, json: { read: a9.read, write: { writer: a9.write, isRequired: true } } })], u3.prototype, "type", void 0), __decorate([a3({ type: String, json: { write: true } })], u3.prototype, "field", void 0), __decorate([m("field")], u3.prototype, "castField", null), __decorate([a3({ type: String, json: { write: true } })], u3.prototype, "valueExpression", void 0), __decorate([a3({ type: String, json: { write: true } })], u3.prototype, "valueExpressionTitle", void 0), __decorate([a3({ readOnly: true })], u3.prototype, "arcadeRequired", null), __decorate([a3({ type: p3, json: { write: true } })], u3.prototype, "legendOptions", void 0), u3 = __decorate([c("esri.renderers.visualVariables.VisualVariable")], u3);

// node_modules/@arcgis/core/renderers/visualVariables/support/castSizeVariable.js
function e2(e3) {
  return o3(e3);
}

// node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js
var z;
var x3 = new o({ width: "width", depth: "depth", height: "height", widthAndDepth: "width-and-depth", all: "all" });
var w2 = new o({ unknown: "unknown", inch: "inches", foot: "feet", yard: "yards", mile: "miles", "nautical-mile": "nautical-miles", millimeter: "millimeters", centimeter: "centimeters", decimeter: "decimeters", meter: "meters", kilometer: "kilometers" });
function v3(e3) {
  if (null != e3) return "string" == typeof e3 || "number" == typeof e3 ? e2(e3) : "size" === e3.type ? n6(e3) ? e3 : (delete (e3 = __spreadValues({}, e3)).type, new V(e3)) : void 0;
}
function g2(e3, t2, i8) {
  if ("object" != typeof e3) return e3;
  if ("web-scene" === i8.origin) return;
  const s7 = new V();
  return s7.read(e3, i8), s7;
}
function f5(e3, t2, i8, s7) {
  "number" != typeof e3 ? "web-scene" !== s7?.origin ? t2[i8] = e3.toJSON(s7) : a2(s7, "error", "property", `Size variable '${i8}' can only be a number in web scenes.`) : t2[i8] = e3;
}
var V = z = class extends u3 {
  constructor(e3) {
    super(e3), this.axis = null, this.legendOptions = null, this.normalizationField = null, this.scaleBy = null, this.target = null, this.type = "size", this.useSymbolValue = null, this.valueExpression = null, this.valueRepresentation = null, this.valueUnit = null;
  }
  get cache() {
    return { ipData: this._interpolateData(), hasExpression: !!this.valueExpression, compiledFunc: null, isScaleDriven: null != this.valueExpression && f2.test(this.valueExpression) };
  }
  set index(e3) {
    n6(this.maxSize) && (this.maxSize.index = `visualVariables[${e3}].maxSize`), n6(this.minSize) && (this.minSize.index = `visualVariables[${e3}].minSize`), this._set("index", e3);
  }
  get inputValueType() {
    return i2(this);
  }
  set maxDataValue(e3) {
    e3 && this.stops && (n2.getLogger(this).warn("cannot set maxDataValue when stops is not null."), e3 = null), this._set("maxDataValue", e3);
  }
  get maxSize() {
    return this._get("maxSize");
  }
  set maxSize(e3) {
    e3 && this.stops && (n2.getLogger(this).warn("cannot set maxSize when stops is not null."), e3 = null), this._set("maxSize", v3(e3));
  }
  readMaxSize(e3, t2, i8) {
    return g2(e3, t2, i8);
  }
  writeMaxSize(e3, t2, i8, s7) {
    return f5(e3, t2, i8, s7);
  }
  set minDataValue(e3) {
    e3 && this.stops && (n2.getLogger(this).warn("cannot set minDataValue when stops is not null."), e3 = null), this._set("minDataValue", e3);
  }
  get minSize() {
    return this._get("minSize");
  }
  set minSize(e3) {
    e3 && this.stops && (n2.getLogger(this).warn("cannot set minSize when stops is not null."), e3 = null), this._set("minSize", v3(e3));
  }
  readMinSize(e3, t2, i8) {
    return g2(e3, t2, i8);
  }
  writeMinSize(e3, t2, i8, s7) {
    return f5(e3, t2, i8, s7);
  }
  get arcadeRequired() {
    return !!this.valueExpression || (null != this.minSize && "object" == typeof this.minSize && this.minSize.arcadeRequired || null != this.maxSize && "object" == typeof this.maxSize && this.maxSize.arcadeRequired);
  }
  set stops(e3) {
    null == this.minDataValue && null == this.maxDataValue && null == this.minSize && null == this.maxSize ? e3 && Array.isArray(e3) && (e3 = e3.filter((e4) => !!e4)).sort((e4, t2) => e4.value - t2.value) : e3 && (n2.getLogger(this).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."), e3 = null), this._set("stops", e3);
  }
  get transformationType() {
    return l2(this, this.inputValueType);
  }
  readValueExpression(e3, t2) {
    return e3 || t2.expression && "$view.scale";
  }
  writeValueExpressionWebScene(e3, t2, i8, s7) {
    if ("$view.scale" === e3) {
      if (s7?.messages) {
        const e4 = this.index;
        i(s7, `visualVariables[${"string" == typeof e4 ? e4 : `visualVariables[${e4}]`}].valueExpression`, "SizeVariable with '$view.scale' valueExpression is not supported in Web Scene. Please remove this property to save the Web Scene.");
      }
    } else t2[i8] = e3;
  }
  readValueUnit(e3) {
    return e3 ? w2.read(e3) : null;
  }
  clone() {
    return new z({ axis: this.axis, field: this.field, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, maxDataValue: this.maxDataValue, maxSize: n6(this.maxSize) ? this.maxSize.clone() : this.maxSize, minDataValue: this.minDataValue, minSize: n6(this.minSize) ? this.minSize.clone() : this.minSize, normalizationField: this.normalizationField, stops: this.stops?.map((e3) => e3.clone()), target: this.target, useSymbolValue: this.useSymbolValue, valueRepresentation: this.valueRepresentation, valueUnit: this.valueUnit, legendOptions: this.legendOptions?.clone() });
  }
  flipSizes() {
    if ("clamped-linear" === this.transformationType) {
      const { minSize: e3, maxSize: t2 } = this;
      return this.minSize = t2, this.maxSize = e3, this;
    }
    if ("stops" === this.transformationType) {
      const e3 = this.stops;
      if (!e3) return this;
      const t2 = e3.map((e4) => e4.size).reverse(), i8 = e3.length;
      for (let s7 = 0; s7 < i8; s7++) e3[s7].size = t2[s7];
      return this;
    }
    return this;
  }
  getAttributeHash() {
    return `${super.getAttributeHash()}-${this.target}-${this.normalizationField}`;
  }
  _interpolateData() {
    return this.stops?.map((e3) => e3.value || 0);
  }
};
__decorate([a3({ readOnly: true })], V.prototype, "cache", null), __decorate([a3({ type: x3.apiValues, json: { type: x3.jsonValues, origins: { "web-map": { read: false } }, read: x3.read, write: x3.write } })], V.prototype, "axis", void 0), __decorate([a3()], V.prototype, "index", null), __decorate([a3({ type: String, readOnly: true })], V.prototype, "inputValueType", null), __decorate([a3({ type: i6, json: { write: true } })], V.prototype, "legendOptions", void 0), __decorate([a3({ type: Number, value: null, json: { write: true } })], V.prototype, "maxDataValue", null), __decorate([a3({ type: Number, useTypeForAutocast: false, value: null, json: { write: true } })], V.prototype, "maxSize", null), __decorate([o2("maxSize")], V.prototype, "readMaxSize", null), __decorate([r("maxSize")], V.prototype, "writeMaxSize", null), __decorate([a3({ type: Number, value: null, json: { write: true } })], V.prototype, "minDataValue", null), __decorate([a3({ type: Number, useTypeForAutocast: false, value: null, json: { write: true } })], V.prototype, "minSize", null), __decorate([o2("minSize")], V.prototype, "readMinSize", null), __decorate([r("minSize")], V.prototype, "writeMinSize", null), __decorate([a3({ type: String, json: { write: true } })], V.prototype, "normalizationField", void 0), __decorate([a3({ readOnly: true })], V.prototype, "arcadeRequired", null), __decorate([a3({ type: String })], V.prototype, "scaleBy", void 0), __decorate([a3({ type: [l5], value: null, json: { write: true } })], V.prototype, "stops", null), __decorate([a3({ type: ["outline"], json: { write: true } })], V.prototype, "target", void 0), __decorate([a3({ type: String, readOnly: true })], V.prototype, "transformationType", null), __decorate([a3({ type: ["size"], json: { type: ["sizeInfo"] } })], V.prototype, "type", void 0), __decorate([a3({ type: Boolean, json: { write: true, origins: { "web-map": { read: false } } } })], V.prototype, "useSymbolValue", void 0), __decorate([a3({ type: String, json: { write: true } })], V.prototype, "valueExpression", void 0), __decorate([o2("valueExpression", ["valueExpression", "expression"])], V.prototype, "readValueExpression", null), __decorate([r("web-scene", "valueExpression")], V.prototype, "writeValueExpressionWebScene", null), __decorate([a3({ type: ["radius", "diameter", "area", "width", "distance"], json: { write: true } })], V.prototype, "valueRepresentation", void 0), __decorate([a3({ type: w2.apiValues, json: { write: w2.write, origins: { "web-map": { read: false }, "web-scene": { write: true }, "portal-item": { write: true } } } })], V.prototype, "valueUnit", void 0), __decorate([o2("valueUnit")], V.prototype, "readValueUnit", null), V = z = __decorate([c("esri.renderers.visualVariables.SizeVariable")], V);

// node_modules/@arcgis/core/renderers/visualVariables/ColorVariable.js
var i7;
var l6 = i7 = class extends u3 {
  constructor(t2) {
    super(t2), this.type = "color", this.normalizationField = null;
  }
  get cache() {
    return { ipData: this._interpolateData(), hasExpression: !!this.valueExpression, compiledFunc: null };
  }
  set stops(t2) {
    t2 && Array.isArray(t2) && (t2 = t2.filter((t3) => !!t3)).sort((t3, e3) => t3.value - e3.value), this._set("stops", t2);
  }
  clone() {
    return new i7({ field: this.field, normalizationField: this.normalizationField, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, stops: this.stops && this.stops.map((t2) => t2.clone()), legendOptions: this.legendOptions?.clone() });
  }
  getAttributeHash() {
    return `${super.getAttributeHash()}-${this.normalizationField}`;
  }
  _interpolateData() {
    return this.stops && this.stops.map((t2) => t2.value || 0);
  }
};
__decorate([a3({ readOnly: true })], l6.prototype, "cache", null), __decorate([a3({ type: ["color"], json: { type: ["colorInfo"] } })], l6.prototype, "type", void 0), __decorate([a3({ type: String, json: { write: true } })], l6.prototype, "normalizationField", void 0), __decorate([a3({ type: [a4], json: { write: true } })], l6.prototype, "stops", null), l6 = i7 = __decorate([c("esri.renderers.visualVariables.ColorVariable")], l6);

// node_modules/@arcgis/core/renderers/visualVariables/support/OpacityStop.js
var l7;
var u4 = l7 = class extends n3 {
  constructor(r5) {
    super(r5), this.label = null, this.opacity = null, this.value = null;
  }
  readOpacity(r5, t2) {
    return r2(t2.transparency);
  }
  writeOpacity(r5, t2, e3) {
    t2[e3] = n5(r5);
  }
  clone() {
    return new l7({ label: this.label, opacity: this.opacity, value: this.value });
  }
};
__decorate([a3({ type: String, json: { write: true } })], u4.prototype, "label", void 0), __decorate([a3({ type: Number, json: { type: D, write: { target: "transparency", isRequired: true } } })], u4.prototype, "opacity", void 0), __decorate([o2("opacity", ["transparency"])], u4.prototype, "readOpacity", null), __decorate([r("opacity")], u4.prototype, "writeOpacity", null), __decorate([a3({ type: Number, json: { write: { isRequired: true } } })], u4.prototype, "value", void 0), u4 = l7 = __decorate([c("esri.renderers.visualVariables.support.OpacityStop")], u4);
var y3 = u4;

// node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js
var r3;
var a10 = r3 = class extends u3 {
  constructor(t2) {
    super(t2), this.type = "opacity", this.normalizationField = null;
  }
  get cache() {
    return { ipData: this._interpolateData(), hasExpression: !!this.valueExpression, compiledFunc: null };
  }
  set stops(t2) {
    t2 && Array.isArray(t2) && (t2 = t2.filter((t3) => !!t3)).sort((t3, e3) => t3.value - e3.value), this._set("stops", t2);
  }
  clone() {
    return new r3({ field: this.field, normalizationField: this.normalizationField, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, stops: this.stops && this.stops.map((t2) => t2.clone()), legendOptions: this.legendOptions?.clone() });
  }
  getAttributeHash() {
    return `${super.getAttributeHash()}-${this.normalizationField}`;
  }
  _interpolateData() {
    return this.stops && this.stops.map((t2) => t2.value || 0);
  }
};
__decorate([a3({ readOnly: true })], a10.prototype, "cache", null), __decorate([a3({ type: ["opacity"], json: { type: ["transparencyInfo"] } })], a10.prototype, "type", void 0), __decorate([a3({ type: String, json: { write: true } })], a10.prototype, "normalizationField", void 0), __decorate([a3({ type: [y3], json: { write: true } })], a10.prototype, "stops", null), a10 = r3 = __decorate([c("esri.renderers.visualVariables.OpacityVariable")], a10);

// node_modules/@arcgis/core/renderers/visualVariables/RotationVariable.js
var r4;
var s6 = r4 = class extends u3 {
  constructor(e3) {
    super(e3), this.axis = null, this.type = "rotation", this.rotationType = "geographic";
  }
  get cache() {
    return { hasExpression: !!this.valueExpression, compiledFunc: null };
  }
  clone() {
    return new r4({ axis: this.axis, rotationType: this.rotationType, field: this.field, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, legendOptions: this.legendOptions?.clone() });
  }
};
__decorate([a3({ readOnly: true })], s6.prototype, "cache", null), __decorate([a3({ type: ["heading", "tilt", "roll"], json: { origins: { "web-scene": { default: "heading", write: true } } } })], s6.prototype, "axis", void 0), __decorate([a3({ type: ["rotation"], json: { type: ["rotationInfo"] } })], s6.prototype, "type", void 0), __decorate([a3({ type: ["geographic", "arithmetic"], json: { write: true, origins: { "web-document": { write: true, default: "geographic" } } } })], s6.prototype, "rotationType", void 0), s6 = r4 = __decorate([c("esri.renderers.visualVariables.RotationVariable")], s6);

// node_modules/@arcgis/core/renderers/visualVariables/VisualVariableFactory.js
var b3 = { color: l6, size: V, opacity: a10, rotation: s6 };
var u5 = new o({ colorInfo: "color", transparencyInfo: "opacity", rotationInfo: "rotation", sizeInfo: "size" });
var V2 = /^\[([^\]]+)\]$/i;
var h3 = class extends b {
  constructor() {
    super(...arguments), this.colorVariables = null, this.opacityVariables = null, this.rotationVariables = null, this.sizeVariables = null;
  }
  set visualVariables(r5) {
    if (this._resetVariables(), r5 = r5?.filter((r6) => !!r6), r5?.length) {
      for (const t2 of r5) switch (t2.type) {
        case "color":
          this.colorVariables.push(t2);
          break;
        case "opacity":
          this.opacityVariables.push(t2);
          break;
        case "rotation":
          this.rotationVariables.push(t2);
          break;
        case "size":
          this.sizeVariables.push(t2);
      }
      if (this.sizeVariables.length) {
        this.sizeVariables.some((r6) => !!r6.target) && r5.sort((r6, t2) => {
          let s7 = null;
          return s7 = r6.target === t2.target ? 0 : r6.target ? 1 : -1, s7;
        });
      }
      for (let t2 = 0; t2 < r5.length; t2++) {
        r5[t2].index = t2;
      }
      this._set("visualVariables", r5);
    } else this._set("visualVariables", r5);
  }
  readVariables(r5, t2, s7) {
    const { rotationExpression: o5, rotationType: e3 } = t2, i8 = o5?.match(V2), l8 = i8?.[1];
    if (l8 && (r5 || (r5 = []), r5.push({ type: "rotationInfo", rotationType: e3, field: l8 })), r5) return r5.map((r6) => {
      const t3 = u5.read(r6.type), o6 = b3[t3];
      o6 || (n2.getLogger(this).warn(`Unknown variable type: ${t3}`), a2(s7, "warning", "visual-variable", `visualVariable of type '${t3}' is not supported`, { definition: r6 }));
      const e4 = new o6();
      return e4.read(r6, s7), e4;
    });
  }
  writeVariables(r5, t2) {
    const s7 = [];
    for (const a12 of r5) {
      const r6 = a12.toJSON(t2);
      r6 && s7.push(r6);
    }
    return s7;
  }
  _resetVariables() {
    this.colorVariables = [], this.opacityVariables = [], this.rotationVariables = [], this.sizeVariables = [];
  }
};
__decorate([a3()], h3.prototype, "visualVariables", null), h3 = __decorate([c("esri.renderers.visualVariables.VisualVariableFactory")], h3);

// node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js
var v4 = { base: u3, key: "type", typeMap: { opacity: a10, color: l6, rotation: s6, size: V } };
var m5 = (t2) => {
  const l8 = t2;
  let o5 = class extends l8 {
    constructor() {
      super(...arguments), this._vvFactory = new h3();
    }
    set visualVariables(a12) {
      this._vvFactory.visualVariables = a12, this._set("visualVariables", this._vvFactory.visualVariables);
    }
    readVisualVariables(a12, r5, i8) {
      return this._vvFactory.readVariables(a12, r5, i8);
    }
    writeVisualVariables(a12, r5, i8, s7) {
      r5[i8] = this._vvFactory.writeVariables(a12, s7);
    }
    get arcadeRequiredForVisualVariables() {
      return this.visualVariables?.some(({ arcadeRequired: a12 }) => a12) ?? false;
    }
    hasVisualVariables(a12, r5) {
      return a12 ? this.getVisualVariablesForType(a12, r5).length > 0 : this.getVisualVariablesForType("size", r5).length > 0 || this.getVisualVariablesForType("color", r5).length > 0 || this.getVisualVariablesForType("opacity", r5).length > 0 || this.getVisualVariablesForType("rotation", r5).length > 0;
    }
    getVisualVariablesForType(a12, r5) {
      return this.visualVariables?.filter((i8) => i8.type === a12 && ("string" == typeof r5 ? i8.target === r5 : false !== r5 || !i8.target)) ?? [];
    }
    async collectVVRequiredFields(a12, r5) {
      let i8 = [];
      this.visualVariables && (i8 = i8.concat(this.visualVariables));
      for (const t3 of i8) t3 && (t3.field && x2(a12, r5, t3.field), t3.normalizationField && x2(a12, r5, t3.normalizationField), t3.valueExpression && (y4(t3.valueExpression, a12, r5) || await v(a12, r5, null, t3.valueExpression)));
    }
  };
  return __decorate([a3({ types: [v4], value: null, json: { write: true } })], o5.prototype, "visualVariables", null), __decorate([o2("visualVariables", ["visualVariables", "rotationType", "rotationExpression"])], o5.prototype, "readVisualVariables", null), __decorate([r("visualVariables")], o5.prototype, "writeVisualVariables", null), o5 = __decorate([c("esri.renderers.mixins.VisualVariablesMixin")], o5), o5;
};
function y4(a12, r5, i8) {
  const e3 = e(a12);
  return null != e3 && (x2(r5, i8, e3), true);
}

// node_modules/@arcgis/core/renderers/support/commonProperties.js
var y5 = { types: D2, json: { write: { writer: s3 }, origins: { "web-scene": { types: F, write: { writer: s3 }, read: { reader: s2({ types: F }) } } } } };
var m6 = n({ json: { origins: { "web-scene": { write: { isRequired: true } } } } }, y5);
var n9 = { types: { base: n4, key: "type", typeMap: { "simple-fill": x.typeMap["simple-fill"], "picture-fill": x.typeMap["picture-fill"], "polygon-3d": x.typeMap["polygon-3d"], cim: x.typeMap.cim } }, json: { write: { writer: s3 }, origins: { "web-scene": { type: f, write: { writer: s3 } } } } };
var a11 = { cast: (e3) => null == e3 || "string" == typeof e3 || "number" == typeof e3 ? e3 : `${e3}`, json: { type: String, write: { writer: (e3, r5) => {
  r5.value = e3?.toString();
} } } };

export {
  b2 as b,
  a8 as a,
  u3 as u,
  a10 as a2,
  s6 as s,
  l5 as l,
  i6 as i,
  V,
  m5 as m,
  y5 as y,
  m6 as m2,
  n9 as n,
  a11 as a3
};
//# sourceMappingURL=chunk-RLRR5X7B.js.map
