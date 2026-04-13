import {
  q,
  t as t2
} from "./chunk-75MOJZ4V.js";
import {
  x
} from "./chunk-BS2V2OFQ.js";
import {
  s
} from "./chunk-WRETNREX.js";
import {
  n as n3
} from "./chunk-XMB55ILJ.js";
import {
  i
} from "./chunk-W34UF4X5.js";
import {
  u
} from "./chunk-XJP3RSS7.js";
import {
  l
} from "./chunk-NLVGGH5B.js";
import {
  f
} from "./chunk-M44GXGOJ.js";
import {
  t
} from "./chunk-LAAWMBRE.js";
import {
  n as n2
} from "./chunk-FMWSBXS5.js";
import {
  a3 as a,
  c,
  e2 as e
} from "./chunk-JM4CKTH2.js";
import {
  n2 as n,
  p
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/graphic/getIdFieldsProvider.js
var n4 = /* @__PURE__ */ Symbol("idFieldsProviderSymbol");
function o(o2) {
  return !!o2 && n4 in o2;
}
function i2(i3) {
  return o(i3) ? i3[n4] : void 0;
}

// node_modules/@arcgis/core/Graphic.js
var d;
var v;
function _(t3) {
  if (!t3) return null;
  const e2 = {};
  for (const r in t3) {
    const i3 = u(t3[r]);
    i3 && (e2[r] = i3);
  }
  return 0 !== Object.keys(e2).length ? e2 : null;
}
function T(t3) {
  if (null == t3) return null;
  const e2 = {};
  for (const r in t3) {
    const i3 = t3[r];
    i3 && (e2[r] = i3.toJSON());
  }
  return 0 !== Object.keys(e2).length ? e2 : null;
}
var j = class extends l(n2) {
  static {
    d = n3;
  }
  static {
    v = this;
  }
  constructor(t3) {
    super(t3), this[d] = true, this.isAggregate = false, this.layer = null, this.origin = null, this.sourceLayer = null, this._version = 0, Object.defineProperty(this, "uid", { value: e(), configurable: true }), Object.defineProperty(this, "_lastMeshTransform", { value: {}, configurable: true, writable: true, enumerable: false }), arguments.length > 1 && p(n.getLogger(this), "Graphic", { version: "4.30" });
  }
  initialize() {
    this._watchMeshGeometryChanges();
  }
  set aggregateGeometries(t3) {
    const e2 = this._get("aggregateGeometries");
    JSON.stringify(e2) !== JSON.stringify(t3) && this._set("aggregateGeometries", t3);
  }
  set attributes(t3) {
    const e2 = this._get("attributes");
    e2 !== t3 && (this._set("attributes", t3), this._notifyLayer("attributes", e2, t3));
  }
  set geometry(t3) {
    const e2 = this._get("geometry");
    e2 !== t3 && (this._set("geometry", t3), "mesh" !== t3?.type && this._notifyLayer("geometry", e2, t3));
  }
  set popupTemplate(t3) {
    const e2 = this._get("popupTemplate");
    e2 !== t3 && (this._set("popupTemplate", t3), this._notifyLayer("popupTemplate", e2, t3));
  }
  set symbol(t3) {
    const e2 = this._get("symbol");
    e2 !== t3 && (this._set("symbol", t3), this._notifyLayer("symbol", e2, t3));
  }
  get version() {
    return this._version;
  }
  set visible(t3) {
    const e2 = this._get("visible");
    e2 !== t3 && (this._set("visible", t3), this._notifyLayer("visible", e2, t3));
  }
  cloneShallow() {
    return new v({ aggregateGeometries: this.aggregateGeometries, attributes: this.attributes, geometry: this.geometry, isAggregate: this.isAggregate, layer: this.layer, popupTemplate: this.popupTemplate, sourceLayer: this.sourceLayer, symbol: this.symbol, visible: this.visible, origin: this.origin });
  }
  getEffectivePopupTemplate(t3 = false) {
    if (this.popupTemplate) return this.popupTemplate;
    const e2 = t2(this.origin);
    if (e2) return e2.popupTemplate ?? (t3 ? e2.defaultPopupTemplate : null) ?? null;
    const r = this.origin && "layer" in this.origin ? this.origin.layer : null;
    for (const i3 of [r, this.sourceLayer, this.layer]) if (i3 && "object" == typeof i3) {
      if ("popupTemplate" in i3 && i3.popupTemplate) return i3.popupTemplate;
      if (t3 && "defaultPopupTemplate" in i3 && null != i3.defaultPopupTemplate) return i3.defaultPopupTemplate;
    }
    return null;
  }
  getAttribute(t3) {
    return this.attributes?.[t3];
  }
  setAttribute(t3, e2) {
    if (this.attributes) {
      const r = this.getAttribute(t3);
      this.attributes[t3] = e2, this._notifyLayer("attributes", r, e2, t3);
    } else this.attributes = { [t3]: e2 };
  }
  getObjectId() {
    const t3 = i2(this.origin);
    if (t3) return i(this, t3);
    const e2 = this.sourceLayer ?? this.layer;
    return e2 ? i(this, e2) : null;
  }
  getGlobalId() {
    const t3 = i2(this.origin);
    if (t3?.globalIdField) return this.getAttribute(t3.globalIdField);
    const e2 = this.sourceLayer ?? this.layer;
    return e2 && "globalIdField" in e2 && e2.globalIdField ? this.getAttribute(e2.globalIdField) : null;
  }
  toJSON() {
    return { aggregateGeometries: T(this.aggregateGeometries), geometry: null != this.geometry ? this.geometry.toJSON() : null, symbol: null != this.symbol ? this.symbol.toJSON() : null, attributes: t(this.attributes) ? this.attributes.toJSON() : __spreadValues({}, this.attributes), popupTemplate: this.popupTemplate?.toJSON() ?? null };
  }
  notifyMeshTransformChanged(t3 = {}) {
    const { geometry: e2 } = this;
    if ("mesh" === e2?.type) {
      const r = { origin: e2.origin, transform: e2.transform };
      this._notifyLayer("origin-transform", r, r, t3.action);
    }
  }
  _notifyLayer(t3, e2, r, i3) {
    if (this._version++, !this.layer || !("graphicChanged" in this.layer)) return;
    const s2 = { graphic: this, property: t3, oldValue: e2, newValue: r };
    "origin-transform" === t3 && (s2.action = i3), "attributes" === t3 && (s2.attributeName = i3), this.layer.graphicChanged(s2);
  }
  _watchMeshGeometryChanges() {
    this.addHandles([f(() => "mesh" === this.geometry?.type && this.geometry.vertexSpace.origin ? { localMatrix: this.geometry.transform?.localMatrix, origin: this.geometry.vertexSpace.origin } : void 0, ({ localMatrix: t3, origin: e2 }) => {
      this._lastMeshTransform.localMatrix === t3 && this._lastMeshTransform.origin === e2 || (this._lastMeshTransform.localMatrix = t3, this._lastMeshTransform.origin = e2, this.notifyMeshTransformChanged());
    }), f(() => "mesh" === this.geometry?.type ? { vertexAttributes: this.geometry.vertexAttributes } : void 0, () => {
      const t3 = this.geometry;
      "mesh" === t3?.type && t3.vertexSpace.origin ? (this._lastMeshTransform.localMatrix = t3.transform?.localMatrix, this._lastMeshTransform.origin = t3.vertexSpace.origin) : (this._lastMeshTransform.localMatrix = void 0, this._lastMeshTransform.origin = void 0), this._notifyLayer("geometry", this.geometry, this.geometry);
    }, { equals: (t3, e2) => t3 === e2, sync: true })]);
  }
};
__decorate([a({ value: null, json: { read: _ } })], j.prototype, "aggregateGeometries", null), __decorate([a({ value: null })], j.prototype, "attributes", null), __decorate([a({ value: null, types: s, json: { read: u } })], j.prototype, "geometry", null), __decorate([a({ type: Boolean })], j.prototype, "isAggregate", void 0), __decorate([a({ clonable: false })], j.prototype, "layer", void 0), __decorate([a({ clonable: "reference" })], j.prototype, "origin", void 0), __decorate([a({ type: q, value: null })], j.prototype, "popupTemplate", null), __decorate([a({ clonable: "reference" })], j.prototype, "sourceLayer", void 0), __decorate([a({ value: null, types: x })], j.prototype, "symbol", null), __decorate([a({ clonable: false, json: { read: false, write: false } })], j.prototype, "_version", void 0), __decorate([a({ type: Boolean, value: true })], j.prototype, "visible", null), j = v = __decorate([c("esri.Graphic")], j);

export {
  n4 as n,
  j
};
//# sourceMappingURL=chunk-N7QYCMB5.js.map
