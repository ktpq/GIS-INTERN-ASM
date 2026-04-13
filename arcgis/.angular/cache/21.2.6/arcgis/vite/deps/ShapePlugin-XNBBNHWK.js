import {
  e
} from "./chunk-C3Y7VH5G.js";
import {
  n
} from "./chunk-6OPXXNEA.js";
import {
  U as U2,
  b,
  k,
  v
} from "./chunk-PRY3OORR.js";
import "./chunk-E4ZPULKV.js";
import "./chunk-LW5ZVONF.js";
import "./chunk-C6P3JIAK.js";
import "./chunk-LSYSO7HW.js";
import "./chunk-MQHQ4ODD.js";
import "./chunk-XLMMYZM6.js";
import "./chunk-4256WDOP.js";
import "./chunk-2HAOG6WI.js";
import "./chunk-ZQAMXZ7F.js";
import "./chunk-F3UEEVCN.js";
import "./chunk-XQTWTSU3.js";
import "./chunk-ZNBUMLFY.js";
import "./chunk-S5FMCRBW.js";
import "./chunk-MKUY72VH.js";
import "./chunk-GAJDBZ5G.js";
import "./chunk-FZMMQS4X.js";
import "./chunk-U3KYTZUD.js";
import "./chunk-SEVWV2FY.js";
import "./chunk-F4H4QHCY.js";
import "./chunk-RAVYRPMK.js";
import "./chunk-BEEP3FKE.js";
import "./chunk-YM62CGUL.js";
import "./chunk-GBACRMDK.js";
import "./chunk-S5K7KX5U.js";
import "./chunk-YY77NHLE.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-JNCFJPS4.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-IBGMUXG6.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import {
  U,
  l,
  w
} from "./chunk-55ZAYF5P.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=ShapePlugin-XNBBNHWK.js.map
