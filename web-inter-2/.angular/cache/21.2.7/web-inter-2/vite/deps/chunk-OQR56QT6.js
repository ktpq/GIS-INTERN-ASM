import {
  o as o3
} from "./chunk-HN2DLRDR.js";
import {
  n as n3
} from "./chunk-D64TRQJR.js";
import {
  e as e2
} from "./chunk-ZCNXMVZA.js";
import {
  n as n2,
  p
} from "./chunk-ZNW3WQ74.js";
import {
  i,
  u as u5
} from "./chunk-HLZH52F6.js";
import {
  P
} from "./chunk-NGAI3WTZ.js";
import {
  f as f2,
  s as s2,
  u as u3
} from "./chunk-NTFCNJJY.js";
import {
  m as m2
} from "./chunk-23U7MZU6.js";
import {
  j
} from "./chunk-PF33M5XM.js";
import {
  m as m3,
  s as s3
} from "./chunk-WRETNREX.js";
import {
  u as u2
} from "./chunk-XJP3RSS7.js";
import {
  q
} from "./chunk-BJNDU6LU.js";
import {
  e2 as e3,
  w
} from "./chunk-WDPGHXN4.js";
import {
  o as o2
} from "./chunk-E4TLNY2F.js";
import {
  a as a2
} from "./chunk-M44GXGOJ.js";
import {
  u
} from "./chunk-GM5PCDS3.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  re
} from "./chunk-NR66QFNF.js";
import {
  d
} from "./chunk-LANOLZOB.js";
import {
  f2 as f
} from "./chunk-2F6BRQJJ.js";
import {
  u as u4
} from "./chunk-DNJ342E3.js";
import {
  g
} from "./chunk-EKLJIMB3.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c,
  m,
  o4 as o,
  r4 as r2
} from "./chunk-JM4CKTH2.js";
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  L,
  s,
  y
} from "./chunk-WARIPJQI.js";
import {
  has,
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  N
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/operations/identify.js
function o4(e4, r3) {
  const { dpi: n4, gdbVersion: s4, geometry: o5, geometryPrecision: a6, height: p3, historicMoment: m5, layerOption: f4, mapExtent: y2, maxAllowableOffset: u7, returnFieldName: c3, returnGeometry: d3, returnUnformattedValues: g2, returnZ: x, spatialReference: h, timeExtent: b2, tolerance: E, width: O } = e4.toJSON(), { dynamicLayers: S3, layerDefs: j3, layerIds: N2 } = l(e4), $ = null != r3?.geometry ? r3.geometry : null, I = { historicMoment: m5, geometryPrecision: a6, maxAllowableOffset: u7, returnFieldName: c3, returnGeometry: d3, returnUnformattedValues: g2, returnZ: x, tolerance: E }, R2 = $?.toJSON() || o5;
  I.imageDisplay = `${O},${p3},${n4}`, s4 && (I.gdbVersion = s4), R2 && (delete R2.spatialReference, I.geometry = JSON.stringify(R2), I.geometryType = u(R2));
  const U2 = h ?? R2?.spatialReference ?? y2?.spatialReference;
  if (U2 && (I.sr = d(U2)), I.time = b2 ? [b2.start, b2.end].join(",") : null, y2) {
    const { xmin: e5, ymin: t, xmax: r4, ymax: i2 } = y2;
    I.mapExtent = `${e5},${t},${r4},${i2}`;
  }
  return j3 && (I.layerDefs = j3), S3 && !j3 && (I.dynamicLayers = S3), I.layers = "popup" === f4 ? "visible" : f4, N2 && !S3 && (I.layers += `:${N2.join(",")}`), I;
}
function l(e4) {
  const { mapExtent: t, floors: i2, width: o5, sublayers: l3, layerIds: p3, layerOption: m5, gdbVersion: f4 } = e4, y2 = l3?.find((e5) => null != e5.layer)?.layer?.serviceSublayers, u7 = "popup" === m5, c3 = {}, d3 = i({ extent: t, width: o5, spatialReference: t?.spatialReference }), g2 = [], x = (e5) => {
    const t2 = 0 === d3, r3 = 0 === e5.minScale || d3 <= e5.minScale, i3 = 0 === e5.maxScale || d3 >= e5.maxScale;
    if (e5.visible && (t2 || r3 && i3)) if (e5.sublayers) e5.sublayers.forEach(x);
    else {
      if (false === p3?.includes(e5.id) || u7 && (!e5.popupTemplate || !e5.popupEnabled)) return;
      g2.unshift(e5);
    }
  };
  if (l3?.forEach(x), l3 && !g2.length) c3.layerIds = [];
  else {
    const e5 = e2(g2, y2, f4), t2 = g2.map((e6) => {
      const t3 = n3(i2, e6);
      return e6.toExportImageJSON(t3);
    });
    if (e5) c3.dynamicLayers = JSON.stringify(t2);
    else {
      if (l3) {
        let e7 = g2.map(({ id: e8 }) => e8);
        p3 && (e7 = e7.filter((e8) => p3.includes(e8))), c3.layerIds = e7;
      } else p3?.length && (c3.layerIds = p3);
      const e6 = a3(i2, g2);
      if (null != e6 && e6.length) {
        const t3 = {};
        for (const r3 of e6) r3.definitionExpression && (t3[r3.id] = r3.definitionExpression);
        Object.keys(t3).length && (c3.layerDefs = JSON.stringify(t3));
      }
    }
  }
  return c3;
}
function a3(t, r3) {
  const i2 = !!t?.length, s4 = r3.filter((e4) => null != e4.definitionExpression || i2 && null != e4.floorInfo);
  return s4.length ? s4.map((r4) => {
    const i3 = n3(t, r4), s5 = o2(i3, r4.definitionExpression);
    return { id: r4.id, definitionExpression: s5 ?? void 0 };
  }) : null;
}

// node_modules/@arcgis/core/rest/support/IdentifyParameters.js
var a4;
var d2 = a4 = class extends n {
  static from(t) {
    return m(a4, t);
  }
  constructor(t) {
    super(t), this.dpi = 96, this.floors = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = null, this.height = 400, this.historicMoment = null, this.layerIds = null, this.layerOption = "top", this.mapExtent = null, this.maxAllowableOffset = null, this.returnFieldName = true, this.returnGeometry = false, this.returnM = false, this.returnUnformattedValues = true, this.returnZ = false, this.spatialReference = null, this.timeExtent = null, this.tolerance = null, this.width = 400;
  }
  writeHistoricMoment(t, e4) {
    e4.historicMoment = t && t.getTime();
  }
  get sublayers() {
    return this._get("sublayers") ?? null;
  }
  set sublayers(t) {
    this._set("sublayers", m(q, t));
  }
};
__decorate([a({ type: Number, json: { write: true } })], d2.prototype, "dpi", void 0), __decorate([a()], d2.prototype, "floors", void 0), __decorate([a({ type: String, json: { write: true } })], d2.prototype, "gdbVersion", void 0), __decorate([a({ types: s3, json: { read: u2, write: true } })], d2.prototype, "geometry", void 0), __decorate([a({ type: Number, json: { write: true } })], d2.prototype, "geometryPrecision", void 0), __decorate([a({ type: Number, json: { write: true } })], d2.prototype, "height", void 0), __decorate([a({ type: Date })], d2.prototype, "historicMoment", void 0), __decorate([r2("historicMoment")], d2.prototype, "writeHistoricMoment", null), __decorate([a({ type: [Number], json: { write: true } })], d2.prototype, "layerIds", void 0), __decorate([a({ type: ["top", "visible", "all", "popup"], json: { write: true } })], d2.prototype, "layerOption", void 0), __decorate([a({ type: z, json: { write: true } })], d2.prototype, "mapExtent", void 0), __decorate([a({ type: Number, json: { write: true } })], d2.prototype, "maxAllowableOffset", void 0), __decorate([a({ type: Boolean, json: { write: true } })], d2.prototype, "returnFieldName", void 0), __decorate([a({ type: Boolean, json: { write: true } })], d2.prototype, "returnGeometry", void 0), __decorate([a({ type: Boolean, json: { write: true } })], d2.prototype, "returnM", void 0), __decorate([a({ type: Boolean, json: { write: true } })], d2.prototype, "returnUnformattedValues", void 0), __decorate([a({ type: Boolean, json: { write: true } })], d2.prototype, "returnZ", void 0), __decorate([a({ type: S, json: { write: true } })], d2.prototype, "spatialReference", void 0), __decorate([a()], d2.prototype, "sublayers", null), __decorate([a({ type: m2, json: { write: true } })], d2.prototype, "timeExtent", void 0), __decorate([a({ type: Number, json: { write: true } })], d2.prototype, "tolerance", void 0), __decorate([a({ type: Number, json: { write: true } })], d2.prototype, "width", void 0), d2 = a4 = __decorate([c("esri.rest.support.IdentifyParameters")], d2);
var c2 = d2;

// node_modules/@arcgis/core/rest/support/IdentifyResult.js
var u6 = class extends n {
  constructor(t) {
    super(t), this.displayFieldName = null, this.feature = null, this.layerId = null, this.layerName = null;
  }
  readFeature(t, r3) {
    return j.fromJSON({ attributes: __spreadValues({}, r3.attributes), geometry: __spreadValues({}, r3.geometry) });
  }
  writeFeature(t, e4) {
    if (!t) return;
    const { attributes: r3, geometry: o5 } = t;
    r3 && (e4.attributes = __spreadValues({}, r3)), null != o5 && (e4.geometry = o5.toJSON(), e4.geometryType = m3.toJSON(o5.type));
  }
};
__decorate([a({ type: String, json: { write: true } })], u6.prototype, "displayFieldName", void 0), __decorate([a({ type: j })], u6.prototype, "feature", void 0), __decorate([o("feature", ["attributes", "geometry"])], u6.prototype, "readFeature", null), __decorate([r2("feature")], u6.prototype, "writeFeature", null), __decorate([a({ type: Number, json: { write: true } })], u6.prototype, "layerId", void 0), __decorate([a({ type: String, json: { write: true } })], u6.prototype, "layerName", void 0), u6 = __decorate([c("esri.rest.support.IdentifyResult")], u6);
var l2 = u6;

// node_modules/@arcgis/core/rest/identify.js
async function f3(u7, i2, f4) {
  const c3 = (i2 = a5(i2)).geometry ? [i2.geometry] : [], l3 = f2(u7);
  return l3.path += "/identify", P(c3).then((e4) => {
    const t = o4(i2, { geometry: e4?.[0] }), u8 = u3(__spreadValues(__spreadProps(__spreadValues({}, l3.query), { f: "json" }), t)), a6 = s2(u8, f4);
    return f(l3.path, a6).then(m4).then((r3) => p2(r3, i2.sublayers));
  });
}
function m4(r3) {
  const e4 = r3.data;
  return e4.results = e4.results || [], e4.exceededTransferLimit = Boolean(e4.exceededTransferLimit), e4.results = e4.results.map((r4) => l2.fromJSON(r4)), e4;
}
function a5(r3) {
  return r3 = c2.from(r3);
}
function p2(r3, e4) {
  if (!e4?.length) return r3;
  const t = /* @__PURE__ */ new Map();
  function o5(r4) {
    t.set(r4.id, r4), r4.sublayers && r4.sublayers.forEach(o5);
  }
  e4.forEach(o5);
  for (const s4 of r3.results) s4.feature.sourceLayer = t.get(s4.layerId);
  return r3;
}

// node_modules/@arcgis/core/views/layers/support/MapServiceLayerViewHelper.js
var S2 = null;
function j2(e4, t) {
  return "tile" === t.type || "map-image" === t.type;
}
var P2 = class extends b {
  constructor(e4) {
    super(e4), this._featuresResolutions = /* @__PURE__ */ new WeakMap(), this.highlightGraphics = null, this.highlightGraphicUpdated = null, this.updateHighlightedFeatures = L(async (e5) => {
      this.destroyed || await this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e5).catch(() => {
      }));
    });
  }
  initialize() {
    const e4 = (e5) => {
      for (const t of e5) {
        const { sourceLayer: e6 } = t;
        null != e6 && "geometryType" in e6 && "point" === e6.geometryType && t.visible && (t.visible = false, this.highlightGraphicUpdated?.({ graphic: t, property: "visible", oldValue: true, newValue: false }));
      }
      this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e5).catch(() => {
      })), y(this.updateHighlightedFeatures(this._highlightGeometriesResolution));
    };
    this.addHandles([a2(() => this.highlightGraphics, "change", (t) => e4(t.added), { onListenerAdd: (t) => e4(t) })]);
  }
  async fetchPopupFeaturesAtLocation(e4, t) {
    const { layerView: { layer: r3, view: { scale: i2 } } } = this;
    if (!e4) throw new r("fetchPopupFeatures:invalid-area", "Nothing to fetch without area", { layer: r3 });
    const o5 = V(r3.sublayers, i2, t);
    if (!o5.length) return [];
    const a6 = await R(r3, o5);
    if (!((r3.capabilities?.operations?.supportsIdentify ?? true) && r3.version >= 10.5) && !a6) throw new r("fetchPopupFeatures:not-supported", "query operation is disabled for this service", { layer: r3 });
    return a6 ? this._fetchPopupFeaturesUsingQueries(e4, o5, t) : this._fetchPopupFeaturesUsingIdentify(e4, o5, t);
  }
  clearHighlights() {
    this.highlightGraphics?.removeAll();
  }
  async _updateHighlightedFeaturesSymbols(e4) {
    for (const t of e4) this._updateSymbology(t);
  }
  _updateSymbology(e4) {
    if ("point" === e4.geometry?.type) return this._updatePointSymbology(e4);
  }
  _setGraphicSymbol(e4, t) {
    if (!t) return;
    const r3 = e4.symbol;
    e4.symbol = t, this.highlightGraphicUpdated?.({ graphic: e4, property: "symbol", oldValue: r3, newValue: t });
  }
  _updatePointSymbology(e4) {
    const r3 = e4.sourceLayer && "renderer" in e4.sourceLayer && e4.sourceLayer.renderer, { highlightGraphicUpdated: i2, highlightGraphics: s4, layerView: { view: o5 } } = this, a6 = (e5) => {
      e5.visible || (e5.visible = true, i2?.({ graphic: e5, property: "visible", oldValue: false, newValue: true }));
    };
    r3 && "getSymbolAsync" in r3 ? r3.getSymbolAsync(e4).then(async (i3) => {
      i3 ||= new u4();
      let l3 = null;
      const n4 = "visualVariables" in r3 ? r3.visualVariables?.find((e5) => "size" === e5.type) : void 0;
      n4 && (S2 || (S2 = (await import("./visualVariableUtils-AK72Q5FR.js")).getSize), l3 = S2(n4, e4, { view: o5.type, scale: o5.scale, shape: "simple-marker" === i3.type ? i3.style : null })), l3 ||= "width" in i3 && "height" in i3 && null != i3.width && null != i3.height ? Math.max(i3.width, i3.height) : "size" in i3 ? i3.size : 16, s4?.includes(e4) && (this._setGraphicSymbol(e4, new u4({ style: "square", size: l3, color: new g([255, 255, 255, 1 / 255]), xoffset: "xoffset" in i3 ? i3.xoffset : 0, yoffset: "yoffset" in i3 ? i3.yoffset : 0 })), a6(e4));
    }) : a6(e4);
  }
  get _updateContext() {
    const { layerView: { layer: e4 }, highlightGraphics: t, highlightGraphicUpdated: r3 } = this;
    return r3 && t?.length && e4.capabilities.operations.supportsQuery ? { highlightGraphicUpdated: r3, highlightGraphics: t } : null;
  }
  get highlightFeaturesActive() {
    return !!this._updateContext;
  }
  async _updateHighlightedFeaturesGeometries(e4) {
    this._highlightGeometriesResolution = e4;
    const t = this._updateContext;
    if (!t) return;
    const r3 = this._getTargetResolution(e4), i2 = /* @__PURE__ */ new Map(), { highlightGraphics: s4, highlightGraphicUpdated: a6 } = t;
    for (const u7 of s4) if (!this._featuresResolutions.has(u7) || this._featuresResolutions.get(u7) > r3) {
      const e5 = u7.sourceLayer;
      e(i2, e5, () => /* @__PURE__ */ new Map()).set(u7.getObjectId(), u7);
    }
    const { layerView: { view: l3 } } = this, n4 = Array.from(i2, ([e5, t2]) => {
      const i3 = e5.createQuery();
      return i3.objectIds = [...t2.keys()], i3.outFields = [e5.objectIdField], i3.returnGeometry = true, i3.maxAllowableOffset = r3, i3.outSpatialReference = l3.spatialReference, e5.queryFeatures(i3);
    }), p3 = await Promise.all(n4);
    if (!this.destroyed) for (const { features: o5 } of p3) for (const e5 of o5) {
      const t2 = e5.sourceLayer, o6 = i2.get(t2).get(e5.getObjectId());
      if (o6 && s4.includes(o6)) {
        const t3 = o6.geometry;
        o6.geometry = e5.geometry, a6({ graphic: o6, property: "geometry", oldValue: t3, newValue: o6.geometry }), this._featuresResolutions.set(o6, r3);
      }
    }
  }
  _getTargetResolution(e4) {
    const t = e4 * re(this.layerView.view.spatialReference), r3 = t / 16;
    return r3 <= 10 ? 0 : e4 / t * r3;
  }
  async _fetchPopupFeaturesUsingIdentify(e4, t, r3) {
    const i2 = await this._createIdentifyParameters(e4, t, r3);
    if (null == i2) return [];
    const { results: s4 } = await f3(this.layerView.layer.parsedUrl, i2, r3);
    return s4.map((e5) => e5.feature);
  }
  async _createIdentifyParameters(e4, t, r3) {
    const { floors: i2, layer: s4, timeExtent: o5, view: { spatialReference: a6, scale: l3 } } = this.layerView;
    if (!t.length) return null;
    await Promise.all(t.map(({ sublayer: e5 }) => e5.load(r3).catch(() => {
    })));
    const n4 = Math.min(has("mapservice-popup-identify-max-tolerance"), s4.allSublayers.reduce((e5, t2) => t2.renderer ? o3({ renderer: t2.renderer, pointerType: r3?.pointerType }) : e5, 2)), p3 = this.createFetchPopupFeaturesQueryGeometry(e4, n4), u7 = u5(l3, a6), c3 = Math.round(p3.width / u7), h = new z({ xmin: p3.center.x - u7 * c3, ymin: p3.center.y - u7 * c3, xmax: p3.center.x + u7 * c3, ymax: p3.center.y + u7 * c3, spatialReference: p3.spatialReference });
    return new c2({ floors: i2, gdbVersion: "gdbVersion" in s4 ? s4.gdbVersion : void 0, geometry: e4, height: c3, layerOption: "popup", mapExtent: h, returnGeometry: true, spatialReference: a6, sublayers: s4.sublayers, timeExtent: o5, tolerance: n4, width: c3 });
  }
  async _fetchPopupFeaturesUsingQueries(e4, t, r3) {
    const { layerView: { floors: s4, timeExtent: o5 } } = this, a6 = t.map(async ({ sublayer: t2, popupTemplate: i2 }) => {
      if (await t2.load(r3).catch(() => {
      }), t2.capabilities && !t2.capabilities.operations.supportsQuery) return [];
      const a7 = t2.createQuery(), n4 = o3({ renderer: t2.renderer, pointerType: r3?.pointerType }), p3 = this.createFetchPopupFeaturesQueryGeometry(e4, n4), c3 = /* @__PURE__ */ new Set(), [h] = await Promise.all([p(t2, i2), t2.renderer?.collectRequiredFields(c3, t2.fieldsIndex)]);
      s(r3), w(c3, t2.fieldsIndex, h);
      const y2 = Array.from(c3).sort();
      a7.geometry = p3, a7.outFields = y2, a7.timeExtent = o5;
      const d3 = n3(s4, t2);
      if (a7.where = o2(a7.where, d3), t2.capabilities?.query.supportsOrderBy && t2.orderBy?.[0]) {
        const e5 = t2.orderBy[0], r4 = !e5.valueExpression && e5.field, i3 = "ascending" === e5.order ? "asc" : "desc";
        r4 && (a7.orderByFields = [`${r4} ${i3}`]);
      }
      const m5 = this._getTargetResolution(p3.width / n4), w2 = await U(i2);
      s(r3);
      const v = "point" === t2.geometryType || w2 && w2.arcadeUtils.hasGeometryOperations(i2);
      v || (a7.maxAllowableOffset = m5);
      let { features: x } = await t2.queryFeatures(a7, r3);
      const _ = v ? 0 : m5;
      x = await A(t2, x, r3);
      for (const e5 of x) this._featuresResolutions.set(e5, _);
      return x;
    });
    return (await Promise.allSettled(a6)).reduce((e5, t2) => "fulfilled" === t2.status ? [...e5, ...t2.value] : e5, []).filter(N);
  }
};
function V(e4, t, r3) {
  const i2 = [];
  if (!e4) return i2;
  const s4 = (e5) => {
    const o5 = 0 === e5.minScale || t <= e5.minScale, a6 = 0 === e5.maxScale || t >= e5.maxScale;
    if (e5.visible && o5 && a6) {
      if (e5.sublayers) e5.sublayers.forEach(s4);
      else if (e5.popupEnabled) {
        const t2 = n2(e5, __spreadProps(__spreadValues({}, r3), { defaultPopupTemplateEnabled: false }));
        null != t2 && i2.unshift({ sublayer: e5, popupTemplate: t2 });
      }
    }
  };
  return e4.map(s4), i2;
}
function U(e4) {
  return e4.expressionInfos?.length || Array.isArray(e4.content) && e4.content.some((e5) => "expression" === e5.type) ? e3() : Promise.resolve();
}
async function R(e4, t) {
  if (e4.capabilities?.operations?.supportsQuery) return true;
  try {
    return await Promise.any(t.map(({ sublayer: e5 }) => e5.load().then(() => e5.capabilities.operations.supportsQuery)));
  } catch {
    return false;
  }
}
async function A(e4, t, r3) {
  const i2 = e4.renderer;
  return i2 && "defaultSymbol" in i2 && !i2.defaultSymbol && (t = i2.valueExpression ? await Promise.all(t.map((e5) => i2.getSymbolAsync(e5, r3).then((t2) => t2 ? e5 : null))).then((e5) => e5.filter((e6) => null != e6)) : t.filter((e5) => null != i2.getSymbol(e5))), t;
}
__decorate([a({ constructOnly: true })], P2.prototype, "createFetchPopupFeaturesQueryGeometry", void 0), __decorate([a({ constructOnly: true })], P2.prototype, "layerView", void 0), __decorate([a({ constructOnly: true })], P2.prototype, "highlightGraphics", void 0), __decorate([a({ constructOnly: true })], P2.prototype, "highlightGraphicUpdated", void 0), __decorate([a({ constructOnly: true })], P2.prototype, "updatingHandles", void 0), __decorate([a()], P2.prototype, "_updateContext", null), P2 = __decorate([c("esri.views.layers.support.MapServiceLayerViewHelper")], P2);

export {
  j2 as j,
  P2 as P
};
//# sourceMappingURL=chunk-OQR56QT6.js.map
