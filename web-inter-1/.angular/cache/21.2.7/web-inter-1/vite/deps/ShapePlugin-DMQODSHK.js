import {
  e
} from "./chunk-CM7VJVX4.js";
import {
  n
} from "./chunk-O3OH5LJH.js";
import {
  U as U2,
  b,
  k,
  v
} from "./chunk-6OZEDU5Y.js";
import "./chunk-3IEFDVPE.js";
import "./chunk-6Q257Z6L.js";
import "./chunk-CTTX6D5W.js";
import "./chunk-KZEWIST4.js";
import "./chunk-TBB2SXHV.js";
import "./chunk-FUS6P62M.js";
import "./chunk-HAPSASFY.js";
import "./chunk-UFNIHRKY.js";
import "./chunk-ZME7RCBH.js";
import "./chunk-JXCCENBV.js";
import "./chunk-TXF5FFQH.js";
import "./chunk-SGNC5H35.js";
import "./chunk-H2NJYVO6.js";
import "./chunk-AOQZWIJ3.js";
import "./chunk-B3YOBJ3Z.js";
import "./chunk-ZGNYH3YF.js";
import "./chunk-55ANZSLC.js";
import "./chunk-TTDA3WA3.js";
import "./chunk-L3K266YP.js";
import "./chunk-MSO245PE.js";
import "./chunk-QJ53E7LJ.js";
import "./chunk-HDXHQWQ2.js";
import "./chunk-VIRT6ASK.js";
import "./chunk-TPDTUQ5K.js";
import "./chunk-QLDYCH6C.js";
import "./chunk-OR24MDO6.js";
import "./chunk-IANKUBS7.js";
import "./chunk-U54DMEX7.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MZFPTE7Q.js";
import "./chunk-U3RH7VGM.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-253Z6EVN.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import {
  U,
  l,
  w
} from "./chunk-6CYBR6FP.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/draw/plugins/ShapePlugin.js
var u = /* @__PURE__ */ Symbol("own-shape");
var c2 = /* @__PURE__ */ Symbol("shape-area-measurement");
var m = /* @__PURE__ */ Symbol("shape-size-measurement-x");
var f = /* @__PURE__ */ Symbol("shape-size-measurement-y");
var y = /* @__PURE__ */ Symbol("shape-area-field");
var g = /* @__PURE__ */ Symbol("shape-x-size-field");
var _ = /* @__PURE__ */ Symbol("shape-y-size-field");
var S = /* @__PURE__ */ Symbol("shape-radius-field");
var v2 = class extends n {
  constructor() {
    super(...arguments), this.shapeType = "rectangle", this.defaultCentered = false, this.defaultUniform = false;
  }
  get _globalModifierState() {
    return this._context?.getGlobalState();
  }
  get helpMessageKey() {
    return this._interactiveHandle?.dragging ? "shapeEndHybrid" : "shapeStartHybrid";
  }
  get effectiveUniform() {
    return this.defaultUniform !== !!this._globalModifierState?.preserveAspectRatio;
  }
  get effectiveCentered() {
    return this.defaultCentered !== this._globalModifierState?.centered;
  }
  set shapeResult(e2) {
    this._set("shapeResult", e2), e2 ? "center" in e2 ? (this._radiusField?.show(), this._xSizeField?.hide(), this._ySizeField?.hide(), this._areaField?.show()) : "midpoints" in e2 && e2.midpoints && (this._radiusField?.hide(), this._xSizeField?.show(), this._ySizeField?.show(), this._areaField?.show()) : (this._xSizeField?.hide(), this._ySizeField?.hide(), this._radiusField?.hide(), this._areaField?.hide());
    const t = e2?.geometry, i = this._session;
    if (i && t) {
      const e3 = t.curveRings ?? t.rings, s = e3?.at(0);
      s && i.appendOrReplacePart(u, s);
    }
  }
  start(e2) {
    super.start(e2), this._interactiveHandle ??= e2.createInteractiveHandle({ defaultCaptureMode: "capture-when-engaged", selfSnappingEnabled: false }, { disableDefaultXYFields: true }), this.addHandles([l(() => [this._interactiveHandle?.outputMapPosition, this.effectiveCentered, this.effectiveUniform], ([e3, t, i]) => {
      if (!e3 || this._isComplete) return;
      const s = this._interactiveHandle?.outputMapPositionOfDragStart ?? e3, r2 = s === e3 ? null : e3;
      this.shapeResult = this._generateShape(s, r2, t, i);
    }, w), l(() => this._interactiveHandle?.dragging, (t, i) => {
      t && e2.setGlobalState("drawAtFixedElevation", true), !t && i && "grabbable-object" !== this._interactiveHandle?.captureMode && e2.requestComplete();
    }, U)], this._ownHandlesKey), this._areaField ??= this._context?.createMeasuredField({ id: y, preset: "area", getMeasurementInput: () => this.shapeResult?.geometry, measure: async (e3, t) => {
      if (!e3) return null;
      const i = t.inputUnitInfos.area.unit;
      return this._context?.measureArea(e3, c2, "tooltip", i);
    }, fieldProperties: { displayOrder: e.ShapeMeasurements } });
    const r = /* @__PURE__ */ Symbol("Size-group");
    this._xSizeField ??= this._context?.createMeasuredField({ id: g, preset: "generic-length", getMeasurementInput: () => this.shapeResult, measure: async (e3, t) => e3 && "midpoints" in e3 && e3.midpoints ? this._context?.measureDistance([e3.midpoints?.left, e3.midpoints?.right], m, "tooltip", t.inputUnitInfos.length.unit) : null, fieldProperties: { displayOrder: e.Middle + 1, displayGroup: r, title: (e3) => e3.messages.sketch.size, readOnly: true } }), this._ySizeField ??= this._context?.createMeasuredField({ id: _, preset: "generic-length", getMeasurementInput: () => this.shapeResult, measure: async (e3, t) => e3 && "midpoints" in e3 && e3.midpoints ? this._context?.measureDistance([e3.midpoints?.bottom, e3.midpoints?.top], f, "tooltip", t.inputUnitInfos.length.unit) : null, fieldProperties: { displayOrder: e.Middle + 2, displayGroup: r, title: (e3) => e3.messages.sketch.size, readOnly: true } }), this._radiusField ??= this._context?.createMeasuredField({ id: S, preset: "radius", getMeasurementInput: () => this.shapeResult, measure: async (e3, t) => {
      if (e3 && "center" in e3 && null != e3.center) return this._context?.measureDistance([e3.center, e3.edge], f, "tooltip", t.inputUnitInfos.length.unit);
    }, fieldProperties: { displayOrder: e.Middle + 1, readOnly: true } });
  }
  _generateShape(e2, t, i, s) {
    const { shapeType: r } = this, { resolution: a2 } = this._context?.getViewInformation() ?? {}, n2 = this._context?.getViewAlignedSurfaceCoordinateSystem(e2);
    if (!n2 || null == a2) return null;
    const h = [e2.x, e2.y], u2 = t && [t.x, t.y];
    if (!u2) {
      const e3 = [[h, n2.makeMapPoint(h[0] + 48 * a2, h[1])], n2, true];
      return "rectangle" === r ? b(...e3) : v(...e3, void 0);
    }
    const c3 = [[h, u2], n2, i];
    return s ? "circle" === r ? v(...c3, void 0) : b(...c3) : "circle" === r ? k(...c3) : U2(...c3);
  }
};
__decorate([a()], v2.prototype, "_interactiveHandle", void 0), __decorate([a()], v2.prototype, "_areaField", void 0), __decorate([a()], v2.prototype, "_xSizeField", void 0), __decorate([a()], v2.prototype, "_ySizeField", void 0), __decorate([a()], v2.prototype, "_radiusField", void 0), __decorate([a()], v2.prototype, "_globalModifierState", null), __decorate([a()], v2.prototype, "shapeType", void 0), __decorate([a()], v2.prototype, "defaultCentered", void 0), __decorate([a()], v2.prototype, "defaultUniform", void 0), __decorate([a()], v2.prototype, "helpMessageKey", null), __decorate([a()], v2.prototype, "effectiveUniform", null), __decorate([a()], v2.prototype, "effectiveCentered", null), __decorate([a()], v2.prototype, "shapeResult", null), v2 = __decorate([c("esri.views.draw.plugins.ShapePlugin")], v2);
export {
  v2 as ShapePlugin
};
//# sourceMappingURL=ShapePlugin-DMQODSHK.js.map
