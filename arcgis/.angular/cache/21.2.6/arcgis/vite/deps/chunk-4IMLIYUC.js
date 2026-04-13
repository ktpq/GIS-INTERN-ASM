import {
  a as a3,
  m as m2,
  m2 as m3,
  n as n3,
  y
} from "./chunk-RLRR5X7B.js";
import {
  u as u2
} from "./chunk-PUE3QVDM.js";
import {
  z
} from "./chunk-DZN3R4UM.js";
import {
  e2 as e,
  v,
  x
} from "./chunk-DNCZTJNI.js";
import {
  n as n2
} from "./chunk-5EUDKAG7.js";
import {
  a3 as a2,
  c,
  m3 as m,
  o3 as o2,
  r3 as r,
  r4 as r2,
  u,
  w
} from "./chunk-LV7AMIAU.js";
import {
  o
} from "./chunk-O4A47ZEM.js";
import {
  a,
  n2 as n
} from "./chunk-IDI4VM7T.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/renderers/support/ClassBreakInfo.js
var i;
var l = i = class extends n2 {
  constructor(e2) {
    super(e2), this.description = null, this.label = null, this.minValue = null, this.maxValue = 0, this.symbol = null;
  }
  clone() {
    return new i({ description: this.description, label: this.label, minValue: this.minValue, maxValue: this.maxValue, symbol: this.symbol?.clone() ?? null });
  }
  getMeshHash() {
    const e2 = JSON.stringify(this.symbol);
    return `${this.minValue}.${this.maxValue}.${e2}`;
  }
};
__decorate([a2({ type: String, json: { write: true } })], l.prototype, "description", void 0), __decorate([a2({ type: String, json: { write: true } })], l.prototype, "label", void 0), __decorate([a2({ type: Number, json: { read: { source: "classMinValue" }, write: { target: "classMinValue" } } })], l.prototype, "minValue", void 0), __decorate([a2({ type: Number, json: { read: { source: "classMaxValue" }, write: { target: "classMaxValue" } } })], l.prototype, "maxValue", void 0), __decorate([a2(m3)], l.prototype, "symbol", void 0), l = i = __decorate([c("esri.renderers.support.ClassBreakInfo")], l);

// node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var v2;
var B = "log";
var F = "percent-of-total";
var V = "field";
var E = new o({ esriNormalizeByLog: B, esriNormalizeByPercentOfTotal: F, esriNormalizeByField: V });
var S = w(l);
var w2 = v2 = class extends m2(a3) {
  constructor(e2) {
    super(e2), this._compiledValueExpression = { valueExpression: null, compiledFunction: null }, this.backgroundFillSymbol = null, this.classBreakInfos = null, this.defaultLabel = null, this.defaultSymbol = null, this.field = null, this.isMaxInclusive = true, this.legendOptions = null, this.normalizationField = null, this.normalizationTotal = null, this.type = "class-breaks", this.valueExpression = null, this.valueExpressionTitle = null, this._set("classBreakInfos", []);
  }
  readClassBreakInfos(e2, s, t) {
    if (!Array.isArray(e2)) return;
    let i2 = s.minValue;
    return e2.map((e3) => {
      const s2 = new l();
      return s2.read(e3, t), null == s2.minValue && (s2.minValue = i2), null == s2.maxValue && (s2.maxValue = s2.minValue), i2 = s2.maxValue, s2;
    });
  }
  writeClassBreakInfos(e2, s, t, i2) {
    const o3 = e2.map((e3) => e3.write({}, i2));
    this._areClassBreaksConsecutive() && o3.forEach((e3) => delete e3.classMinValue), s[t] = o3;
  }
  castField(e2) {
    return null == e2 ? e2 : "function" == typeof e2 ? (n.getLogger(this).error(".field: field must be a string value"), null) : u(e2);
  }
  get minValue() {
    return this.classBreakInfos && this.classBreakInfos[0] && this.classBreakInfos[0].minValue || 0;
  }
  get normalizationType() {
    let e2 = this._get("normalizationType");
    const s = !!this.normalizationField, t = null != this.normalizationTotal;
    return s || t ? (e2 = s && V || t && F || null, s && t && n.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")) : e2 !== V && e2 !== F || (e2 = null), e2;
  }
  set normalizationType(e2) {
    this._set("normalizationType", e2);
  }
  addClassBreakInfo(e2, s, i2) {
    let o3 = null;
    o3 = "number" == typeof e2 ? new l({ minValue: e2, maxValue: s, symbol: z(i2) }) : S(a(e2)), this.classBreakInfos.push(o3), 1 === this.classBreakInfos.length && this.notifyChange("minValue");
  }
  removeClassBreakInfo(e2, s) {
    const t = this.classBreakInfos.length;
    for (let i2 = 0; i2 < t; i2++) {
      const t2 = [this.classBreakInfos[i2].minValue, this.classBreakInfos[i2].maxValue];
      if (t2[0] === e2 && t2[1] === s) {
        this.classBreakInfos.splice(i2, 1);
        break;
      }
    }
  }
  getBreakIndex(e2, s) {
    return this.valueExpression && null == s?.arcade && n.getLogger(this).warn(""), this.valueExpression ? this._getBreakIndexForExpression(e2, s) : this._getBreakIndexForField(e2);
  }
  async getClassBreakInfo(e2, s) {
    let t = s;
    this.valueExpression && null == s?.arcade && (t = __spreadProps(__spreadValues({}, t), { arcade: await e() }));
    const i2 = this.getBreakIndex(e2, t);
    return -1 !== i2 ? this.classBreakInfos[i2] : null;
  }
  getSymbol(e2, s) {
    if (this.valueExpression && null == s?.arcade) return void n.getLogger(this).error("#getSymbol()", "Please use getSymbolAsync if valueExpression is used");
    const t = this.getBreakIndex(e2, s);
    return t > -1 ? this.classBreakInfos[t].symbol : this.defaultSymbol;
  }
  async getSymbolAsync(e2, s) {
    let t = s;
    if (this.valueExpression && null == s?.arcade) {
      const e3 = await e(), { arcadeUtils: s2 } = e3;
      s2.hasGeometryOperations(this.valueExpression) && await s2.enableGeometryOperations(), t = __spreadProps(__spreadValues({}, t), { arcade: e3 });
    }
    const i2 = this.getBreakIndex(e2, t);
    return i2 > -1 ? this.classBreakInfos[i2].symbol : this.defaultSymbol;
  }
  get symbols() {
    const e2 = [];
    return this.classBreakInfos.forEach((s) => {
      s.symbol && e2.push(s.symbol);
    }), this.defaultSymbol && e2.push(this.defaultSymbol), e2;
  }
  getAttributeHash() {
    return this.visualVariables?.reduce((e2, s) => e2 + s.getAttributeHash(), "") ?? "";
  }
  getMeshHash() {
    const e2 = JSON.stringify(this.backgroundFillSymbol), s = JSON.stringify(this.defaultSymbol), t = `${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;
    return `${e2}.${s}.${this.classBreakInfos.reduce((e3, s2) => e3 + s2.getMeshHash(), "")}.${t}.${this.field}.${this.valueExpression}`;
  }
  get arcadeRequired() {
    return this.arcadeRequiredForVisualVariables || !!this.valueExpression;
  }
  clone() {
    return new v2({ field: this.field, backgroundFillSymbol: this.backgroundFillSymbol?.clone(), defaultLabel: this.defaultLabel, defaultSymbol: this.defaultSymbol?.clone(), valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, classBreakInfos: a(this.classBreakInfos), isMaxInclusive: this.isMaxInclusive, normalizationField: this.normalizationField, normalizationTotal: this.normalizationTotal, normalizationType: this.normalizationType, visualVariables: a(this.visualVariables), legendOptions: a(this.legendOptions), authoringInfo: a(this.authoringInfo) });
  }
  async collectRequiredFields(e2, s) {
    const t = [this.collectVVRequiredFields(e2, s), this.collectSymbolFields(e2, s)];
    await Promise.all(t);
  }
  async collectSymbolFields(e2, s) {
    const t = [...this.symbols.map((t2) => t2.collectRequiredFields(e2, s)), v(e2, s, null, this.valueExpression)];
    x(e2, s, this.field), x(e2, s, this.normalizationField), await Promise.all(t);
  }
  _getBreakIndexForExpression(e2, s) {
    const { viewingMode: t, scale: i2, spatialReference: o3, arcade: r3, timeZone: a4 } = s ?? {}, { valueExpression: l2 } = this;
    let n4 = this._compiledValueExpression.valueExpression === l2 ? this._compiledValueExpression.compiledFunction : null;
    const u3 = r3.arcadeUtils;
    if (!n4) {
      const e3 = u3.createSyntaxTree(l2);
      n4 = u3.createFunction(e3), this._compiledValueExpression.compiledFunction = n4;
    }
    this._compiledValueExpression.valueExpression = l2;
    const p = u3.executeFunction(n4, u3.createExecContext(e2, u3.getViewInfo({ viewingMode: t, scale: i2, spatialReference: o3 }), a4));
    return this._getBreakIndexfromInfos(p);
  }
  _getBreakIndexForField(e2) {
    const s = this.field, t = e2.attributes, i2 = this.normalizationType;
    let o3 = parseFloat(t[s]);
    if (i2) {
      const e3 = this.normalizationTotal, s2 = parseFloat(this.normalizationField ? t[this.normalizationField] : void 0);
      if (i2 === B) o3 = Math.log(o3) * Math.LOG10E;
      else if (i2 !== F || null == e3 || isNaN(e3)) {
        if (i2 === V && !isNaN(s2)) {
          if (isNaN(o3) || isNaN(s2)) return -1;
          o3 /= s2;
        }
      } else o3 = o3 / e3 * 100;
    }
    return this._getBreakIndexfromInfos(o3);
  }
  _getBreakIndexfromInfos(e2) {
    const s = this.isMaxInclusive;
    if (null != e2 && "number" == typeof e2 && !isNaN(e2)) for (let t = 0; t < this.classBreakInfos.length; t++) {
      const i2 = [this.classBreakInfos[t].minValue, this.classBreakInfos[t].maxValue];
      if (i2[0] <= e2 && (s ? e2 <= i2[1] : e2 < i2[1])) return t;
    }
    return -1;
  }
  _areClassBreaksConsecutive() {
    const e2 = this.classBreakInfos, s = e2.length;
    for (let t = 1; t < s; t++) if (e2[t - 1].maxValue !== e2[t].minValue) return false;
    return true;
  }
};
__decorate([a2(n3)], w2.prototype, "backgroundFillSymbol", void 0), __decorate([a2({ type: [l], json: { write: { isRequired: true } } })], w2.prototype, "classBreakInfos", void 0), __decorate([o2("classBreakInfos")], w2.prototype, "readClassBreakInfos", null), __decorate([r2("classBreakInfos")], w2.prototype, "writeClassBreakInfos", null), __decorate([a2({ type: String, json: { write: true } })], w2.prototype, "defaultLabel", void 0), __decorate([a2(y)], w2.prototype, "defaultSymbol", void 0), __decorate([a2({ type: String, json: { write: true } })], w2.prototype, "field", void 0), __decorate([m("field")], w2.prototype, "castField", null), __decorate([a2({ type: Boolean })], w2.prototype, "isMaxInclusive", void 0), __decorate([a2({ type: u2, json: { write: true } })], w2.prototype, "legendOptions", void 0), __decorate([a2({ type: Number, readOnly: true, value: null, json: { read: false, write: { overridePolicy() {
  return 0 !== this.classBreakInfos.length && this._areClassBreaksConsecutive() ? { enabled: true } : { enabled: false };
} } } })], w2.prototype, "minValue", null), __decorate([a2({ type: String, json: { write: true } })], w2.prototype, "normalizationField", void 0), __decorate([a2({ type: Number, json: { write: true } })], w2.prototype, "normalizationTotal", void 0), __decorate([a2({ type: E.apiValues, value: null, json: { type: E.jsonValues, read: E.read, write: E.write } })], w2.prototype, "normalizationType", null), __decorate([r({ classBreaks: "class-breaks" })], w2.prototype, "type", void 0), __decorate([a2({ type: String, json: { write: true } })], w2.prototype, "valueExpression", void 0), __decorate([a2({ type: String, json: { write: true } })], w2.prototype, "valueExpressionTitle", void 0), w2 = v2 = __decorate([c("esri.renderers.ClassBreaksRenderer")], w2);

export {
  l,
  w2 as w
};
//# sourceMappingURL=chunk-4IMLIYUC.js.map
