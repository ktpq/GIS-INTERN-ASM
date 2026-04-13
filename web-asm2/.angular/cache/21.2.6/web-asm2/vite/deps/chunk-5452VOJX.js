import {
  o as o2
} from "./chunk-CSDO4AJ6.js";
import {
  n,
  p
} from "./chunk-RE5OS2GS.js";
import {
  f
} from "./chunk-TEIOPA5N.js";
import {
  n as n2
} from "./chunk-4JUVGHKD.js";
import {
  c as c2
} from "./chunk-TCXNGMY4.js";
import {
  u as u2
} from "./chunk-ZPD3CEEC.js";
import {
  e2,
  w
} from "./chunk-WUSMTFBU.js";
import {
  o
} from "./chunk-RJMYNJ36.js";
import {
  a as a2
} from "./chunk-CD6IOUFB.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import {
  u
} from "./chunk-J27BSZXM.js";
import {
  g
} from "./chunk-TT3WF5RA.js";
import {
  re
} from "./chunk-DHNLUBWZ.js";
import {
  b
} from "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import {
  e
} from "./chunk-O3PP4I47.js";
import {
  L,
  s,
  y
} from "./chunk-2DNVIDFH.js";
import {
  has,
  r3 as r
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

// node_modules/@arcgis/core/views/layers/support/MapServiceLayerViewHelper.js
var S = null;
function j(e3, t) {
  return "tile" === t.type || "map-image" === t.type;
}
var P = class extends b {
  constructor(e3) {
    super(e3), this._featuresResolutions = /* @__PURE__ */ new WeakMap(), this.highlightGraphics = null, this.highlightGraphicUpdated = null, this.updateHighlightedFeatures = L(async (e4) => {
      this.destroyed || await this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e4).catch(() => {
      }));
    });
  }
  initialize() {
    const e3 = (e4) => {
      for (const t of e4) {
        const { sourceLayer: e5 } = t;
        null != e5 && "geometryType" in e5 && "point" === e5.geometryType && t.visible && (t.visible = false, this.highlightGraphicUpdated?.({ graphic: t, property: "visible", oldValue: true, newValue: false }));
      }
      this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e4).catch(() => {
      })), y(this.updateHighlightedFeatures(this._highlightGeometriesResolution));
    };
    this.addHandles([a2(() => this.highlightGraphics, "change", (t) => e3(t.added), { onListenerAdd: (t) => e3(t) })]);
  }
  async fetchPopupFeaturesAtLocation(e3, t) {
    const { layerView: { layer: r2, view: { scale: i } } } = this;
    if (!e3) throw new r("fetchPopupFeatures:invalid-area", "Nothing to fetch without area", { layer: r2 });
    const o3 = V(r2.sublayers, i, t);
    if (!o3.length) return [];
    const a3 = await R(r2, o3);
    if (!((r2.capabilities?.operations?.supportsIdentify ?? true) && r2.version >= 10.5) && !a3) throw new r("fetchPopupFeatures:not-supported", "query operation is disabled for this service", { layer: r2 });
    return a3 ? this._fetchPopupFeaturesUsingQueries(e3, o3, t) : this._fetchPopupFeaturesUsingIdentify(e3, o3, t);
  }
  clearHighlights() {
    this.highlightGraphics?.removeAll();
  }
  async _updateHighlightedFeaturesSymbols(e3) {
    for (const t of e3) this._updateSymbology(t);
  }
  _updateSymbology(e3) {
    if ("point" === e3.geometry?.type) return this._updatePointSymbology(e3);
  }
  _setGraphicSymbol(e3, t) {
    if (!t) return;
    const r2 = e3.symbol;
    e3.symbol = t, this.highlightGraphicUpdated?.({ graphic: e3, property: "symbol", oldValue: r2, newValue: t });
  }
  _updatePointSymbology(e3) {
    const r2 = e3.sourceLayer && "renderer" in e3.sourceLayer && e3.sourceLayer.renderer, { highlightGraphicUpdated: i, highlightGraphics: s2, layerView: { view: o3 } } = this, a3 = (e4) => {
      e4.visible || (e4.visible = true, i?.({ graphic: e4, property: "visible", oldValue: false, newValue: true }));
    };
    r2 && "getSymbolAsync" in r2 ? r2.getSymbolAsync(e3).then(async (i2) => {
      i2 ||= new u();
      let l = null;
      const n3 = "visualVariables" in r2 ? r2.visualVariables?.find((e4) => "size" === e4.type) : void 0;
      n3 && (S || (S = (await import("./visualVariableUtils-5M4JGELT.js")).getSize), l = S(n3, e3, { view: o3.type, scale: o3.scale, shape: "simple-marker" === i2.type ? i2.style : null })), l ||= "width" in i2 && "height" in i2 && null != i2.width && null != i2.height ? Math.max(i2.width, i2.height) : "size" in i2 ? i2.size : 16, s2?.includes(e3) && (this._setGraphicSymbol(e3, new u({ style: "square", size: l, color: new g([255, 255, 255, 1 / 255]), xoffset: "xoffset" in i2 ? i2.xoffset : 0, yoffset: "yoffset" in i2 ? i2.yoffset : 0 })), a3(e3));
    }) : a3(e3);
  }
  get _updateContext() {
    const { layerView: { layer: e3 }, highlightGraphics: t, highlightGraphicUpdated: r2 } = this;
    return r2 && t?.length && e3.capabilities.operations.supportsQuery ? { highlightGraphicUpdated: r2, highlightGraphics: t } : null;
  }
  get highlightFeaturesActive() {
    return !!this._updateContext;
  }
  async _updateHighlightedFeaturesGeometries(e3) {
    this._highlightGeometriesResolution = e3;
    const t = this._updateContext;
    if (!t) return;
    const r2 = this._getTargetResolution(e3), i = /* @__PURE__ */ new Map(), { highlightGraphics: s2, highlightGraphicUpdated: a3 } = t;
    for (const u3 of s2) if (!this._featuresResolutions.has(u3) || this._featuresResolutions.get(u3) > r2) {
      const e4 = u3.sourceLayer;
      e(i, e4, () => /* @__PURE__ */ new Map()).set(u3.getObjectId(), u3);
    }
    const { layerView: { view: l } } = this, n3 = Array.from(i, ([e4, t2]) => {
      const i2 = e4.createQuery();
      return i2.objectIds = [...t2.keys()], i2.outFields = [e4.objectIdField], i2.returnGeometry = true, i2.maxAllowableOffset = r2, i2.outSpatialReference = l.spatialReference, e4.queryFeatures(i2);
    }), p2 = await Promise.all(n3);
    if (!this.destroyed) for (const { features: o3 } of p2) for (const e4 of o3) {
      const t2 = e4.sourceLayer, o4 = i.get(t2).get(e4.getObjectId());
      if (o4 && s2.includes(o4)) {
        const t3 = o4.geometry;
        o4.geometry = e4.geometry, a3({ graphic: o4, property: "geometry", oldValue: t3, newValue: o4.geometry }), this._featuresResolutions.set(o4, r2);
      }
    }
  }
  _getTargetResolution(e3) {
    const t = e3 * re(this.layerView.view.spatialReference), r2 = t / 16;
    return r2 <= 10 ? 0 : e3 / t * r2;
  }
  async _fetchPopupFeaturesUsingIdentify(e3, t, r2) {
    const i = await this._createIdentifyParameters(e3, t, r2);
    if (null == i) return [];
    const { results: s2 } = await f(this.layerView.layer.parsedUrl, i, r2);
    return s2.map((e4) => e4.feature);
  }
  async _createIdentifyParameters(e3, t, r2) {
    const { floors: i, layer: s2, timeExtent: o3, view: { spatialReference: a3, scale: l } } = this.layerView;
    if (!t.length) return null;
    await Promise.all(t.map(({ sublayer: e4 }) => e4.load(r2).catch(() => {
    })));
    const n3 = Math.min(has("mapservice-popup-identify-max-tolerance"), s2.allSublayers.reduce((e4, t2) => t2.renderer ? o2({ renderer: t2.renderer, pointerType: r2?.pointerType }) : e4, 2)), p2 = this.createFetchPopupFeaturesQueryGeometry(e3, n3), u3 = u2(l, a3), c3 = Math.round(p2.width / u3), h = new z({ xmin: p2.center.x - u3 * c3, ymin: p2.center.y - u3 * c3, xmax: p2.center.x + u3 * c3, ymax: p2.center.y + u3 * c3, spatialReference: p2.spatialReference });
    return new c2({ floors: i, gdbVersion: "gdbVersion" in s2 ? s2.gdbVersion : void 0, geometry: e3, height: c3, layerOption: "popup", mapExtent: h, returnGeometry: true, spatialReference: a3, sublayers: s2.sublayers, timeExtent: o3, tolerance: n3, width: c3 });
  }
  async _fetchPopupFeaturesUsingQueries(e3, t, r2) {
    const { layerView: { floors: s2, timeExtent: o3 } } = this, a3 = t.map(async ({ sublayer: t2, popupTemplate: i }) => {
      if (await t2.load(r2).catch(() => {
      }), t2.capabilities && !t2.capabilities.operations.supportsQuery) return [];
      const a4 = t2.createQuery(), n3 = o2({ renderer: t2.renderer, pointerType: r2?.pointerType }), p2 = this.createFetchPopupFeaturesQueryGeometry(e3, n3), c3 = /* @__PURE__ */ new Set(), [h] = await Promise.all([p(t2, i), t2.renderer?.collectRequiredFields(c3, t2.fieldsIndex)]);
      s(r2), w(c3, t2.fieldsIndex, h);
      const y2 = Array.from(c3).sort();
      a4.geometry = p2, a4.outFields = y2, a4.timeExtent = o3;
      const d = n2(s2, t2);
      if (a4.where = o(a4.where, d), t2.capabilities?.query.supportsOrderBy && t2.orderBy?.[0]) {
        const e4 = t2.orderBy[0], r3 = !e4.valueExpression && e4.field, i2 = "ascending" === e4.order ? "asc" : "desc";
        r3 && (a4.orderByFields = [`${r3} ${i2}`]);
      }
      const m = this._getTargetResolution(p2.width / n3), w2 = await U(i);
      s(r2);
      const v = "point" === t2.geometryType || w2 && w2.arcadeUtils.hasGeometryOperations(i);
      v || (a4.maxAllowableOffset = m);
      let { features: x } = await t2.queryFeatures(a4, r2);
      const _ = v ? 0 : m;
      x = await A(t2, x, r2);
      for (const e4 of x) this._featuresResolutions.set(e4, _);
      return x;
    });
    return (await Promise.allSettled(a3)).reduce((e4, t2) => "fulfilled" === t2.status ? [...e4, ...t2.value] : e4, []).filter(N);
  }
};
function V(e3, t, r2) {
  const i = [];
  if (!e3) return i;
  const s2 = (e4) => {
    const o3 = 0 === e4.minScale || t <= e4.minScale, a3 = 0 === e4.maxScale || t >= e4.maxScale;
    if (e4.visible && o3 && a3) {
      if (e4.sublayers) e4.sublayers.forEach(s2);
      else if (e4.popupEnabled) {
        const t2 = n(e4, __spreadProps(__spreadValues({}, r2), { defaultPopupTemplateEnabled: false }));
        null != t2 && i.unshift({ sublayer: e4, popupTemplate: t2 });
      }
    }
  };
  return e3.map(s2), i;
}
function U(e3) {
  return e3.expressionInfos?.length || Array.isArray(e3.content) && e3.content.some((e4) => "expression" === e4.type) ? e2() : Promise.resolve();
}
async function R(e3, t) {
  if (e3.capabilities?.operations?.supportsQuery) return true;
  try {
    return await Promise.any(t.map(({ sublayer: e4 }) => e4.load().then(() => e4.capabilities.operations.supportsQuery)));
  } catch {
    return false;
  }
}
async function A(e3, t, r2) {
  const i = e3.renderer;
  return i && "defaultSymbol" in i && !i.defaultSymbol && (t = i.valueExpression ? await Promise.all(t.map((e4) => i.getSymbolAsync(e4, r2).then((t2) => t2 ? e4 : null))).then((e4) => e4.filter((e5) => null != e5)) : t.filter((e4) => null != i.getSymbol(e4))), t;
}
__decorate([a({ constructOnly: true })], P.prototype, "createFetchPopupFeaturesQueryGeometry", void 0), __decorate([a({ constructOnly: true })], P.prototype, "layerView", void 0), __decorate([a({ constructOnly: true })], P.prototype, "highlightGraphics", void 0), __decorate([a({ constructOnly: true })], P.prototype, "highlightGraphicUpdated", void 0), __decorate([a({ constructOnly: true })], P.prototype, "updatingHandles", void 0), __decorate([a()], P.prototype, "_updateContext", null), P = __decorate([c("esri.views.layers.support.MapServiceLayerViewHelper")], P);

export {
  j,
  P
};
//# sourceMappingURL=chunk-5452VOJX.js.map
