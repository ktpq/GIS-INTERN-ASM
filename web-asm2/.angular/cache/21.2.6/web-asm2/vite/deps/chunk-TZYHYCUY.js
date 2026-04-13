import {
  a as a3,
  a3 as a4,
  m as m3,
  m2 as m4,
  n as n4,
  y as y2
} from "./chunk-4BYXXJF2.js";
import {
  i as i2
} from "./chunk-JJ7ZL4QD.js";
import {
  u as u2
} from "./chunk-MFI7YGPX.js";
import {
  y
} from "./chunk-UAMJLSJM.js";
import {
  c as c2,
  z
} from "./chunk-R5ZARNWA.js";
import {
  M
} from "./chunk-IQ4J5AR2.js";
import {
  l
} from "./chunk-DUGX5C7M.js";
import {
  e2 as e,
  v,
  x
} from "./chunk-WUSMTFBU.js";
import {
  l as l2
} from "./chunk-CD6IOUFB.js";
import {
  m as m2,
  p
} from "./chunk-5AVTDH3Y.js";
import {
  n as n3
} from "./chunk-JADLUMUQ.js";
import {
  a3 as a2,
  c,
  i2 as i,
  m3 as m,
  o4 as o,
  r3 as r,
  r4 as r2,
  u,
  w
} from "./chunk-GUGGSMY4.js";
import {
  a,
  n,
  n2
} from "./chunk-6SPQI6I6.js";
import {
  N
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/renderers/support/UniqueValue.js
var l3 = class extends l(n3) {
  constructor(o2) {
    super(o2), this.value = null, this.value2 = null, this.value3 = null;
  }
};
__decorate([a2(a4)], l3.prototype, "value", void 0), __decorate([a2(a4)], l3.prototype, "value2", void 0), __decorate([a2(a4)], l3.prototype, "value3", void 0), l3 = __decorate([c("esri.renderers.support.UniqueValue")], l3);

// node_modules/@arcgis/core/renderers/support/UniqueValueClass.js
var n5 = class extends l(n3) {
  constructor(e2) {
    super(e2), this.description = null, this.label = null, this.symbol = null;
  }
  get values() {
    return this._get("values");
  }
  set values(e2) {
    if (null != e2) {
      const r3 = typeof (e2 = Array.isArray(e2) ? e2 : [e2])[0];
      e2 = "string" === r3 || "number" === r3 ? e2.map((e3) => new l3({ value: e3 })) : "object" === r3 ? e2[0] instanceof l3 ? e2 : e2.map((e3) => new l3(e3)) : null;
    }
    this._set("values", e2);
  }
};
__decorate([a2({ type: String, json: { write: true } })], n5.prototype, "description", void 0), __decorate([a2({ type: String, json: { write: true } })], n5.prototype, "label", void 0), __decorate([a2(y2)], n5.prototype, "symbol", void 0), __decorate([a2({ json: { type: [[String]], read: { reader: (e2) => e2 ? e2.map((e3) => new l3({ value: e3[0], value2: e3[1], value3: e3[2] })) : null }, write: { writer: (e2, t) => {
  const o2 = [];
  for (const s of e2) {
    const e3 = [s.value, s.value2, s.value3].filter(N).map((e4) => e4.toString());
    o2.push(e3);
  }
  t.values = o2;
} } } })], n5.prototype, "values", null), n5 = __decorate([c("esri.renderers.support.UniqueValueClass")], n5);

// node_modules/@arcgis/core/renderers/support/UniqueValueGroup.js
var p2 = class extends l(n3) {
  constructor(r3) {
    super(r3), this.heading = null, this.classes = null;
  }
};
__decorate([a2({ type: String, json: { write: true } })], p2.prototype, "heading", void 0), __decorate([a2({ type: [n5], json: { write: { isRequired: true } } })], p2.prototype, "classes", void 0), p2 = __decorate([c("esri.renderers.support.UniqueValueGroup")], p2);

// node_modules/@arcgis/core/renderers/support/UniqueValueInfo.js
var l4;
var p3 = l4 = class extends n3 {
  constructor(o2) {
    super(o2), this.description = null, this.label = null, this.symbol = null, this.value = null;
  }
  clone() {
    return new l4({ value: this.value, description: this.description, label: this.label, symbol: this.symbol ? this.symbol.clone() : null });
  }
  getMeshHash() {
    const o2 = JSON.stringify(this.symbol?.toJSON());
    return `${this.value}.${o2}`;
  }
};
__decorate([a2({ type: String, json: { write: true } })], p3.prototype, "description", void 0), __decorate([a2({ type: String, json: { write: true } })], p3.prototype, "label", void 0), __decorate([a2(m4)], p3.prototype, "symbol", void 0), __decorate([a2(a4)], p3.prototype, "value", void 0), p3 = l4 = __decorate([c("esri.renderers.support.UniqueValueInfo")], p3);

// node_modules/@arcgis/core/renderers/UniqueValueRenderer.js
var E;
var M2 = "uvInfos-watcher";
var R = "uvGroups-watcher";
var N2 = ",";
var L = w(p3);
function P(e2) {
  const { field1: t, field2: s, field3: i3, fieldDelimiter: o2, uniqueValueInfos: l5, valueExpression: r3 } = e2, u3 = !(!t || !s);
  return [{ classes: (l5 ?? []).map((e3) => {
    const { symbol: l6, label: n6, value: a5, description: p4 } = e3, [f, d, h] = u3 ? a5?.toString()?.split(o2 || "") || [] : [a5], c3 = [];
    return (t || r3) && c3.push(f), s && c3.push(d), i3 && c3.push(h), { symbol: l6, label: n6, values: [c3], description: p4 };
  }) }];
}
function C(e2) {
  return null != e2 && "" !== e2 && ("string" != typeof e2 || "" !== e2.trim() && "<null>" !== e2.toLowerCase()) || (e2 = null), e2 + "";
}
var $ = E = class extends m3(a3) {
  constructor(e2) {
    super(e2), this._valueInfoMap = {}, this._isDefaultSymbolDerived = false, this._isInfosSource = null, this.type = "unique-value", this.backgroundFillSymbol = null, this.orderByClassesEnabled = false, this.valueExpressionTitle = null, this.legendOptions = null, this.defaultLabel = null, this.portal = null, this.styleOrigin = null, this.diff = { uniqueValueInfos(e3, t) {
      if (!e3 && !t) return;
      if (!e3 || !t) return { type: "complete", oldValue: e3, newValue: t };
      let s = false;
      const i3 = { type: "collection", added: [], removed: [], changed: [], unchanged: [] };
      for (let o2 = 0; o2 < t.length; o2++) {
        const l5 = e3.find((e4) => e4.value === t[o2].value);
        l5 ? y(l5, t[o2]) ? (i3.changed.push({ type: "complete", oldValue: l5, newValue: t[o2] }), s = true) : i3.unchanged.push({ oldValue: l5, newValue: t[o2] }) : (i3.added.push(t[o2]), s = true);
      }
      for (let o2 = 0; o2 < e3.length; o2++) {
        t.find((t2) => t2.value === e3[o2].value) || (i3.removed.push(e3[o2]), s = true);
      }
      return s ? i3 : void 0;
    } }, this._set("uniqueValueInfos", []), this._set("uniqueValueGroups", []);
  }
  get _cache() {
    return { compiledFunc: null };
  }
  set field(e2) {
    this._set("field", e2), this._updateFieldDelimiter(), this._updateUniqueValues();
  }
  castField(e2) {
    return null == e2 || "function" == typeof e2 ? e2 : u(e2);
  }
  writeField(e2, t, i3, o2) {
    "string" == typeof e2 ? t[i3] = e2 : o2?.messages ? i(o2, "UniqueValueRenderer.field", "set to a function cannot be written to JSON") : n2.getLogger(this).error(".field: cannot write field to JSON since it's not a string value");
  }
  set field2(e2) {
    this._set("field2", e2), this._updateFieldDelimiter(), this._updateUniqueValues();
  }
  set field3(e2) {
    this._set("field3", e2), this._updateUniqueValues();
  }
  set valueExpression(e2) {
    this._set("valueExpression", e2), this._updateUniqueValues();
  }
  set defaultSymbol(e2) {
    this._isDefaultSymbolDerived = false, this._set("defaultSymbol", e2);
  }
  set fieldDelimiter(e2) {
    this._set("fieldDelimiter", e2), this._updateUniqueValues();
  }
  readPortal(e2, t, s) {
    return s.portal || M.getDefault();
  }
  readStyleOrigin(e2, t, s) {
    if (t.styleName) return Object.freeze({ styleName: t.styleName });
    if (t.styleUrl) {
      const e3 = p(t.styleUrl, s);
      return Object.freeze({ styleUrl: e3 });
    }
  }
  writeStyleOrigin(e2, t, s, i3) {
    e2.styleName ? t.styleName = e2.styleName : e2.styleUrl && (t.styleUrl = m2(e2.styleUrl, i3));
  }
  set uniqueValueGroups(e2) {
    this.styleOrigin ? n2.getLogger(this).error("#uniqueValueGroups=", "Cannot modify unique value groups of a UniqueValueRenderer created from a web style") : (this._set("uniqueValueGroups", e2), this._updateInfosFromGroups(), this._isInfosSource = false, this._watchUniqueValueGroups());
  }
  set uniqueValueInfos(e2) {
    this.styleOrigin ? n2.getLogger(this).error("#uniqueValueInfos=", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style") : (this._set("uniqueValueInfos", e2), this._updateValueInfoMap(), this._updateGroupsFromInfos(), this._isInfosSource = true, this._watchUniqueValueInfos());
  }
  addUniqueValueInfo(e2, t) {
    if (this.styleOrigin) return void n2.getLogger(this).error("#addUniqueValueInfo()", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style");
    let i3;
    i3 = "object" == typeof e2 ? L(e2) : new p3({ value: e2, symbol: z(t) }), this.uniqueValueInfos?.push(i3), this._valueInfoMap[C(i3.value)] = i3, this._updateGroupsFromInfos(), this._isInfosSource = true, this._watchUniqueValueInfos();
  }
  removeUniqueValueInfo(e2) {
    if (this.styleOrigin) return void n2.getLogger(this).error("#removeUniqueValueInfo()", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style");
    const t = this.uniqueValueInfos;
    if (t) for (let s = 0; s < t.length; s++) {
      const i3 = t[s];
      if (String(i3.value) === String(e2)) {
        delete this._valueInfoMap[C(e2)], t.splice(s, 1);
        break;
      }
    }
    this._updateGroupsFromInfos(), this._isInfosSource = true, this._watchUniqueValueInfos();
  }
  async getUniqueValueInfo(e2, t) {
    let s = t;
    return this.valueExpression && null == t?.arcade && (s = __spreadProps(__spreadValues({}, s), { arcade: await e() })), this._getUniqueValueInfo(e2, s);
  }
  getSymbol(e2, t) {
    if (this.valueExpression && null == t?.arcade) return void n2.getLogger(this).error("#getSymbol()", "Please use getSymbolAsync if valueExpression is used");
    const i3 = this._getUniqueValueInfo(e2, t);
    return i3?.symbol || this.defaultSymbol;
  }
  async getSymbolAsync(e2, t) {
    let s = t;
    if (this.valueExpression && null == s?.arcade) {
      const e3 = await e(), { arcadeUtils: t2 } = e3;
      t2.hasGeometryOperations(this.valueExpression) && await t2.enableGeometryOperations(), s = __spreadProps(__spreadValues({}, s), { arcade: e3 });
    }
    const i3 = this._getUniqueValueInfo(e2, s);
    return i3?.symbol || this.defaultSymbol;
  }
  get symbols() {
    const e2 = [];
    if (this._isInfosSource) for (const t of this.uniqueValueInfos ?? []) t.symbol && e2.push(t.symbol);
    else for (const t of this.uniqueValueGroups ?? []) for (const s of t.classes ?? []) s.symbol && e2.push(s.symbol);
    return this.defaultSymbol && e2.push(this.defaultSymbol), e2;
  }
  getAttributeHash() {
    return this.visualVariables?.reduce((e2, t) => e2 + t.getAttributeHash(), "") ?? "";
  }
  getMeshHash() {
    const e2 = JSON.stringify(this.backgroundFillSymbol), t = JSON.stringify(this.defaultSymbol), s = this.uniqueValueInfos?.reduce((e3, t2) => e3 + t2.getMeshHash(), "");
    return `${e2}.${t}.${s}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`;
  }
  clone() {
    const e2 = new E({ field: this.field, field2: this.field2, field3: this.field3, defaultLabel: this.defaultLabel, defaultSymbol: a(this.defaultSymbol), orderByClassesEnabled: this.orderByClassesEnabled, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, fieldDelimiter: this.fieldDelimiter, visualVariables: a(this.visualVariables), legendOptions: a(this.legendOptions), authoringInfo: a(this.authoringInfo), backgroundFillSymbol: a(this.backgroundFillSymbol) });
    this._isDefaultSymbolDerived && (e2._isDefaultSymbolDerived = true), e2._set("portal", this.portal);
    const s = a(this.uniqueValueInfos), i3 = a(this.uniqueValueGroups);
    return this.styleOrigin && (e2._set("styleOrigin", Object.freeze(a(this.styleOrigin))), Object.freeze(s), Object.freeze(i3)), e2._set("uniqueValueInfos", s), e2._updateValueInfoMap(), e2._set("uniqueValueGroups", i3), e2._isInfosSource = this._isInfosSource, e2._watchUniqueValueInfosAndGroups(), e2;
  }
  get arcadeRequired() {
    return this.arcadeRequiredForVisualVariables || !!this.valueExpression;
  }
  async collectRequiredFields(e2, t) {
    const s = [this.collectVVRequiredFields(e2, t), this.collectSymbolFields(e2, t)];
    await Promise.all(s);
  }
  async collectSymbolFields(e2, t) {
    const s = [...this.symbols.map((s2) => s2.collectRequiredFields(e2, t)), v(e2, t, null, this.valueExpression)];
    x(e2, t, this.field), x(e2, t, this.field2), x(e2, t, this.field3), await Promise.all(s);
  }
  populateFromStyle() {
    return i2(this.styleOrigin, { portal: this.portal }).then((e2) => {
      const t = [];
      return this._valueInfoMap = {}, e2?.data && Array.isArray(e2.data.items) && e2.data.items.forEach((s) => {
        const i3 = new c2({ styleUrl: e2.styleUrl, styleName: e2.styleName, portal: this.portal, name: s.name });
        this.defaultSymbol || s.name !== e2.data.defaultItem || (this.defaultSymbol = i3, this._isDefaultSymbolDerived = true);
        const o2 = new p3({ value: s.name, symbol: i3 });
        t.push(o2), this._valueInfoMap[C(s.name)] = o2;
      }), this._set("uniqueValueInfos", Object.freeze(t)), this._updateGroupsFromInfos(true), this._isInfosSource = null, this._watchUniqueValueInfos(), !this.defaultSymbol && this.uniqueValueInfos?.length && (this.defaultSymbol = this.uniqueValueInfos[0].symbol, this._isDefaultSymbolDerived = true), this;
    });
  }
  _updateFieldDelimiter() {
    this.field && this.field2 && !this.fieldDelimiter && this._set("fieldDelimiter", N2);
  }
  _updateUniqueValues() {
    null != this._isInfosSource && (this._isInfosSource ? this._updateGroupsFromInfos() : this._updateInfosFromGroups());
  }
  _updateValueInfoMap() {
    this._valueInfoMap = {};
    const { uniqueValueInfos: e2 } = this;
    if (e2) for (const t of e2) this._valueInfoMap[C(t.value)] = t;
  }
  _watchUniqueValueInfosAndGroups() {
    this._watchUniqueValueInfos(), this._watchUniqueValueGroups();
  }
  _watchUniqueValueInfos() {
    this.removeHandles(M2);
    const { uniqueValueInfos: e2 } = this;
    if (e2) {
      const t = [];
      for (const s of e2) t.push(l2(() => ({ symbol: s.symbol, value: s.value, label: s.label, description: s.description }), (e3, t2) => {
        e3 !== t2 && (this._updateGroupsFromInfos(), this._isInfosSource = true);
      }, { sync: true }));
      this.addHandles(t, M2);
    }
  }
  _watchUniqueValueGroups() {
    this.removeHandles(R);
    const { uniqueValueGroups: e2 } = this;
    if (e2) {
      const t = [];
      for (const s of e2) {
        t.push(l2(() => ({ classes: s.classes }), (e3, t2) => {
          e3 !== t2 && (this._updateInfosFromGroups(), this._isInfosSource = false);
        }, { sync: true }));
        for (const e3 of s.classes ?? []) t.push(l2(() => ({ symbol: e3.symbol, values: e3.values, label: e3.label, description: e3.description }), (e4, t2) => {
          e4 !== t2 && (this._updateInfosFromGroups(), this._isInfosSource = false);
        }, { sync: true }));
      }
      this.addHandles(t, R);
    }
  }
  _updateInfosFromGroups() {
    if (!this.uniqueValueGroups) return this._set("uniqueValueInfos", null), this._updateValueInfoMap(), void this._watchUniqueValueInfos();
    const e2 = [], { field: t, field2: s, field3: i3, fieldDelimiter: o2, uniqueValueGroups: l5, valueExpression: r3 } = this;
    if (!t && !r3) return this._set("uniqueValueInfos", e2), this._updateValueInfoMap(), void this._watchUniqueValueInfos();
    const u3 = !(!t || !s);
    for (const n6 of l5) for (const t2 of n6.classes ?? []) {
      const { symbol: l6, label: r4, values: n7, description: a5 } = t2;
      for (const t3 of n7 ?? []) {
        const { value: n8, value2: p4, value3: f } = t3, d = [n8];
        s && d.push(p4), i3 && d.push(f);
        const h = u3 ? d.join(o2 || "") : d[0] ?? void 0;
        e2.push(new p3({ symbol: l6, label: r4, value: h, description: a5 }));
      }
    }
    this._set("uniqueValueInfos", e2), this._updateValueInfoMap(), this._watchUniqueValueInfos();
  }
  _updateGroupsFromInfos(e2 = false) {
    if (!this.uniqueValueInfos) return this._set("uniqueValueGroups", null), void this._watchUniqueValueGroups();
    const { field: t, field2: s, valueExpression: i3, fieldDelimiter: o2, uniqueValueInfos: l5 } = this;
    if (!t && !i3 || !l5.length) return this._set("uniqueValueGroups", []), void this._watchUniqueValueGroups();
    const r3 = !(!t || !s), u3 = l5.map((e3) => {
      const { symbol: t2, label: s2, value: i4, description: l6 } = e3, [u4, n7, a5] = r3 ? i4?.toString()?.split(o2 || "") || [] : [i4];
      return new n5({ symbol: t2, label: s2, description: l6, values: [new l3({ value: u4, value2: n7, value3: a5 })] });
    }), n6 = [new p2({ classes: u3 })];
    e2 && Object.freeze(n6), this._set("uniqueValueGroups", n6), this._watchUniqueValueGroups();
  }
  _getUniqueValueInfo(e2, t) {
    return this.valueExpression ? this._getUnqiueValueInfoForExpression(e2, t) : this._getUnqiueValueInfoForFields(e2);
  }
  _getUnqiueValueInfoForExpression(e2, t) {
    const { viewingMode: s, scale: i3, spatialReference: o2, arcade: l5, timeZone: r3 } = t ?? {};
    let u3 = this._cache.compiledFunc;
    const n6 = l5.arcadeUtils;
    if (!u3) {
      const e3 = n6.createSyntaxTree(this.valueExpression);
      u3 = n6.createFunction(e3), this._cache.compiledFunc = u3;
    }
    const a5 = n6.executeFunction(u3, n6.createExecContext(e2, n6.getViewInfo({ viewingMode: s, scale: i3, spatialReference: o2 }), r3));
    return this._valueInfoMap[C(a5)];
  }
  _getUnqiueValueInfoForFields(e2) {
    const t = this.field, s = e2.attributes;
    let i3;
    if (this.field2) {
      const e3 = this.field2, o2 = this.field3, l5 = [];
      t && l5.push(s[t]), e3 && l5.push(s[e3]), o2 && l5.push(s[o2]), i3 = l5.join(this.fieldDelimiter || "");
    } else t && (i3 = s[t]);
    return this._valueInfoMap[C(i3)];
  }
  static fromPortalStyle(e2, t) {
    const i3 = new E(t?.properties);
    i3._set("styleOrigin", Object.freeze({ styleName: e2 })), i3._set("portal", t?.portal || M.getDefault());
    const o2 = i3.populateFromStyle();
    return o2.catch((t2) => {
      n2.getLogger(this.prototype).error(`#fromPortalStyle('${e2}'[, ...])`, "Failed to create unique value renderer from style name", t2);
    }), o2;
  }
  static fromStyleUrl(e2, t) {
    const i3 = new E(t?.properties);
    i3._set("styleOrigin", Object.freeze({ styleUrl: e2 }));
    const o2 = i3.populateFromStyle();
    return o2.catch((t2) => {
      n2.getLogger(this.prototype).error(`#fromStyleUrl('${e2}'[, ...])`, "Failed to create unique value renderer from style URL", t2);
    }), o2;
  }
};
__decorate([a2({ readOnly: true })], $.prototype, "_cache", null), __decorate([r({ uniqueValue: "unique-value" })], $.prototype, "type", void 0), __decorate([a2(n4)], $.prototype, "backgroundFillSymbol", void 0), __decorate([a2({ value: null, json: { type: String, read: { source: "field1" }, write: { target: "field1" } } })], $.prototype, "field", null), __decorate([m("field")], $.prototype, "castField", null), __decorate([r2("field")], $.prototype, "writeField", null), __decorate([a2({ type: String, value: null, json: { write: true } })], $.prototype, "field2", null), __decorate([a2({ type: String, value: null, json: { write: true } })], $.prototype, "field3", null), __decorate([a2({ type: Boolean, json: { name: "drawInClassOrder", default: false, write: true, origins: { "web-scene": { write: false } } } })], $.prototype, "orderByClassesEnabled", void 0), __decorate([a2({ type: String, value: null, json: { write: true } })], $.prototype, "valueExpression", null), __decorate([a2({ type: String, json: { write: true } })], $.prototype, "valueExpressionTitle", void 0), __decorate([a2({ type: u2, json: { write: true } })], $.prototype, "legendOptions", void 0), __decorate([a2({ type: String, json: { write: true } })], $.prototype, "defaultLabel", void 0), __decorate([a2(n(__spreadValues({}, y2), { json: { write: { overridePolicy() {
  return { enabled: !this._isDefaultSymbolDerived };
} }, origins: { "web-scene": { write: { overridePolicy() {
  return { enabled: !this._isDefaultSymbolDerived };
} } } } } }))], $.prototype, "defaultSymbol", null), __decorate([a2({ type: String, value: null, json: { write: true } })], $.prototype, "fieldDelimiter", null), __decorate([a2({ type: M, readOnly: true })], $.prototype, "portal", void 0), __decorate([o("portal", ["styleName"])], $.prototype, "readPortal", null), __decorate([a2({ readOnly: true, json: { write: { enabled: false, overridePolicy: () => ({ enabled: true }) } } })], $.prototype, "styleOrigin", void 0), __decorate([o("styleOrigin", ["styleName", "styleUrl"])], $.prototype, "readStyleOrigin", null), __decorate([r2("styleOrigin", { styleName: { type: String }, styleUrl: { type: String } })], $.prototype, "writeStyleOrigin", null), __decorate([a2({ type: [p2], json: { read: { source: ["uniqueValueGroups", "uniqueValueInfos"], reader: (e2, t, s) => (t.uniqueValueGroups || P(t)).map((e3) => p2.fromJSON(e3, s)) }, write: { overridePolicy() {
  return this.styleOrigin ? { enabled: false } : { enabled: true };
} } } })], $.prototype, "uniqueValueGroups", null), __decorate([a2({ type: [p3], json: { read: false, write: { isRequired: true, overridePolicy() {
  return this.styleOrigin ? { enabled: false } : { enabled: true, isRequired: true };
} } } })], $.prototype, "uniqueValueInfos", null), $ = E = __decorate([c("esri.renderers.UniqueValueRenderer")], $);

export {
  p3 as p,
  $
};
//# sourceMappingURL=chunk-TZYHYCUY.js.map
