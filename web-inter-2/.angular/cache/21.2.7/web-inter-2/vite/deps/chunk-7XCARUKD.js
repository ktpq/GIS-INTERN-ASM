import {
  e
} from "./chunk-CM7VJVX4.js";
import {
  n
} from "./chunk-KBZ7E6F2.js";
import {
  x
} from "./chunk-RV3M7WKB.js";
import {
  D,
  f
} from "./chunk-OU7IBCXM.js";
import {
  P
} from "./chunk-WRETNREX.js";
import {
  h,
  l
} from "./chunk-M44GXGOJ.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/draw/plugins/PolylinePlugin.js
var m = /* @__PURE__ */ Symbol("polyline-committed-length-measurement");
var u = /* @__PURE__ */ Symbol("polyline-staged-measurement");
var c2 = /* @__PURE__ */ Symbol("polyline-cursor-distance-measurement");
var h2 = /* @__PURE__ */ Symbol("polyline-distance-field");
var _ = /* @__PURE__ */ Symbol("polyline-direction-field");
var y = /* @__PURE__ */ Symbol("polyline-total-length-field");
var g = class extends n {
  constructor() {
    super(...arguments), this._lineVisualId = /* @__PURE__ */ Symbol();
  }
  get _downstreamGeometry() {
    return this._downstreamEditSession?.generatePreviewGeometry({ includeAutomaticConnection: true, geometryType: "polyline" });
  }
  get _downstreamEditSession() {
    const { _downstreamPlugin: e2, _context: t } = this;
    return e2 ? t?.getSession(e2) : null;
  }
  get _committed() {
    return this._getCommittedGeometry();
  }
  get helpMessageKey() {
    return this._session?.lastPointAddedBySession ? "polylineOneVertex" : "polylineZeroVertices";
  }
  start(e2) {
    super.start(e2);
    const { session: t } = e2;
    t.automaticRestart = false, e2.addOrUpdateVisual(this._lineVisualId, { role: "outline", state: "active" }), this.addHandles([l(() => this._downstreamEditSession?.lastPointAddedBySession, (t2) => {
      this._cursorVertex = t2;
      const i = this._downstreamGeometry, o = this._session;
      t2 && o ? (this._lastVertex = null != t2.pointIndex && t2.pointIndex > 0 ? o.getInformationAboutPoint(t2.pointIndex - 1, t2.partIndex) : null, this._secondToLastVertex = null != t2.pointIndex && t2.pointIndex > 1 ? o.getInformationAboutPoint(t2.pointIndex - 2, t2.partIndex) : null) : (this._lastVertex = null, this._secondToLastVertex = null), e2.addOrUpdateVisual(this._lineVisualId, { geometry: i });
    }, h)], this._ownHandlesKey), this._setupTooltips();
  }
  complete() {
    this._session?.complete(), this._isComplete = true, this.removeHandles(this._ownHandlesKey), this.removeHandles(this._downstreamHandlesKey);
  }
  attachPlugin(e2) {
    this._downstreamPlugin = e2, this.notifyChange("_downstreamEditSession");
  }
  detachPlugin(e2, t) {
    this.notifyChange("_committed"), "complete" === t && e2.configuration && this._context?.requestBeginDownstreamPlugin(e2.configuration);
  }
  _getCommittedGeometry() {
    return this._session?.generatePreviewGeometry({ includeAutomaticConnection: false, geometryType: "polyline" });
  }
  _setupTooltips() {
    this._context && (this._distanceField ??= this._context.createMeasuredField({ id: h2, preset: "distance", getMeasurementInput: () => [this._lastVertex?.point, this._cursorVertex?.point], measure: async (e2, t) => {
      if (!e2 || !e2[0] || !e2[1]) return null;
      const i = t.inputUnitInfos.length.unit;
      return this._context?.measureDistance([e2[0], e2[1]], c2, "tooltip", i);
    }, fieldProperties: { displayOrder: e.Coordinates + 11 }, fieldFilters: { appliesToHandlesWithRole: "primary" } }), this._directionField ??= this._context.createMeasuredField({ id: _, preset: "direction", getMeasurementInput: () => [this._lastVertex?.point, this._cursorVertex?.point], measure: async ([e2, i], o) => {
      const s = o.sketchOptions.values.effectiveDirectionMode;
      if (e2 && i) {
        const o2 = x(this._secondToLastVertex?.point, e2, i, s);
        return this._directionField && (this._directionField.readOnly = "absolute" === s ? !e2 : !this._secondToLastVertex?.point), o2 ?? ("absolute" === s || this._secondToLastVertex ? D : null);
      }
      return null;
    }, fieldProperties: { displayOrder: e.Coordinates + 10 }, fieldFilters: { appliesToHandlesWithRole: "primary" } }), this._setupGeometrySpecificTooltip());
  }
  _setupGeometrySpecificTooltip() {
    this._context && (this._lengthField ??= this._context.createMeasuredField({ id: y, preset: "totalLength", getMeasurementInput: () => [this._committed, this._downstreamGeometry], measure: async ([e2, t], o, s) => {
      const n2 = o.inputUnitInfos.length.unit, r = t && P(t) ? await this._context?.measureLength(t, u, "tooltip", n2) : void 0, a2 = e2 && e2 !== s?.[0] && P(e2) ? await this._context?.measureLength(e2, m, "tooltip", n2) : e2 ? this._cachedCommittedLength : null;
      return this._cachedCommittedLength = a2, (a2 || r) && (e2 || 0 !== r?.value) ? f((a2?.value ?? 0) + (r?.value ?? 0), n2) : null;
    }, fieldProperties: { displayOrder: e.ShapeMeasurements } }));
  }
};
__decorate([a()], g.prototype, "_downstreamPlugin", void 0), __decorate([a()], g.prototype, "_lastVertex", void 0), __decorate([a()], g.prototype, "_cursorVertex", void 0), __decorate([a()], g.prototype, "_secondToLastVertex", void 0), __decorate([a()], g.prototype, "_lengthField", void 0), __decorate([a()], g.prototype, "_distanceField", void 0), __decorate([a()], g.prototype, "_directionField", void 0), __decorate([a()], g.prototype, "_downstreamGeometry", null), __decorate([a()], g.prototype, "_downstreamEditSession", null), __decorate([a()], g.prototype, "_committed", null), __decorate([a()], g.prototype, "helpMessageKey", null), g = __decorate([c("esri.views.draw.plugins.PolylinePlugin")], g);

export {
  g
};
//# sourceMappingURL=chunk-7XCARUKD.js.map
