import {
  g
} from "./chunk-ZKKD37XB.js";
import {
  e
} from "./chunk-C3Y7VH5G.js";
import "./chunk-6OPXXNEA.js";
import "./chunk-KTT7CVOJ.js";
import {
  f as f2
} from "./chunk-WLT354DA.js";
import "./chunk-FQA45FSP.js";
import "./chunk-6ZXIHJYY.js";
import "./chunk-54KJR4YB.js";
import "./chunk-RCFUJF2D.js";
import "./chunk-2TISYHLG.js";
import "./chunk-DZSF27H2.js";
import "./chunk-MXAZZ5UX.js";
import "./chunk-F4H4QHCY.js";
import "./chunk-A3TI5LYY.js";
import "./chunk-J7JBGJAS.js";
import "./chunk-GRBMK6HO.js";
import "./chunk-RS3JOHKF.js";
import "./chunk-BEEP3FKE.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-YM62CGUL.js";
import "./chunk-RCUTEESF.js";
import "./chunk-AHPCQT3Y.js";
import "./chunk-5XBFAIUN.js";
import "./chunk-L3NTTNVH.js";
import "./chunk-QEI2MEKM.js";
import "./chunk-PYMCJBOT.js";
import "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-7DXPO6B2.js";
import "./chunk-JJJRQB6X.js";
import "./chunk-SQMAPKVO.js";
import "./chunk-QEE2QYIE.js";
import {
  f
} from "./chunk-AEEIJGHJ.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-BQWO5RXV.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-4QSSUPBC.js";
import "./chunk-FHDG7GP6.js";
import "./chunk-JC7PAMG4.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-4YKWF6M6.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import {
  y3 as y
} from "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import {
  m
} from "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
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
import "./chunk-6BQZ6NJY.js";
import {
  h,
  l
} from "./chunk-55ZAYF5P.js";
import "./chunk-FMPS52FS.js";
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

// node_modules/@arcgis/core/views/draw/plugins/PolygonPlugin.js
var u = 5;
var c2 = /* @__PURE__ */ Symbol("polygon-snap-to-close-constraint");
var m2 = /* @__PURE__ */ Symbol("polygon-area-measurement");
var g2 = /* @__PURE__ */ Symbol("polygon-area-field");
var y2 = class extends g {
  constructor() {
    super(...arguments), this._autoCloseLineVisualId = /* @__PURE__ */ Symbol("polygon-auto-close-on-commit"), this._defaultClosingLineVisualId = /* @__PURE__ */ Symbol("polygon-default-close-on-cancel"), this.clickToCloseEnabled = true;
  }
  get _totalPreviewGeometry() {
    const { _session: t } = this;
    if (!t) return null;
    const e2 = t.lastPointAddedBySession?.partIndex, o = this._downstreamEditSession?.lastPointAddedBySession?.partIndex, n = e2 ?? o;
    if (!t || null == n) return null;
    const i = t?.getInformationAboutPoint(0, n), s = t?.getInformationAboutPoint(-1, n);
    return t?.generatePreviewGeometry({ includeAutomaticConnection: false, geometryType: "polygon", firstIncludedPoint: i, lastIncludedPoint: s });
  }
  get helpMessageKey() {
    const t = this._session?.lastPointAddedBySession;
    return t ? null != t.pointIndex && t.pointIndex > 0 ? "polygonTwoVertices" : "polygonOneVertex" : "polygonZeroVertices";
  }
  get test() {
    const { _autoCloseLineVisualId: t, _defaultClosingLineVisualId: e2 } = this;
    return { _autoCloseLineVisualId: t, _defaultClosingLineVisualId: e2 };
  }
  start(t) {
    super.start(t), t.createConstraint(c2, (t2, e2) => this._snapToClosingVertex(t2, e2)), t.addOrUpdateVisual(this._autoCloseLineVisualId, { role: "outline", state: "active" }), t.addOrUpdateVisual(this._defaultClosingLineVisualId, { role: "outline", state: "idle" }), this.addHandles([l(() => this._downstreamEditSession?.lastPointAddedBySession, (t2) => {
      if (!t2 || null == t2.pointIndex) return this._context?.addOrUpdateVisual(this._autoCloseLineVisualId, { geometry: null }), void this._context?.addOrUpdateVisual(this._defaultClosingLineVisualId, { geometry: null });
      const e2 = this._session?.getInformationAboutPoint(t2.pointIndex - 1, t2.partIndex), o = this._session?.getInformationAboutPoint(0, t2.partIndex);
      if (t2.point && o?.point) {
        const e3 = [t2.point.x, t2.point.y], n = [o.point.x, o.point.y], i = new y({ spatialReference: t2.point.spatialReference, paths: [[e3, n]] });
        this._context?.addOrUpdateVisual(this._autoCloseLineVisualId, { geometry: i });
      } else this._context?.addOrUpdateVisual(this._autoCloseLineVisualId, { geometry: null });
      if (e2?.point && o?.point) {
        const t3 = [e2.point.x, e2.point.y], n = [o.point.x, o.point.y], i = new y({ spatialReference: o.point.spatialReference, paths: [[t3, n]] });
        this._context?.addOrUpdateVisual(this._defaultClosingLineVisualId, { geometry: i });
      } else this._context?.addOrUpdateVisual(this._defaultClosingLineVisualId, { geometry: null });
    }, h)], this._ownHandlesKey);
  }
  detachPlugin(t, e2) {
    const { _session: o } = this, n = o?.lastPointAddedBySession;
    if (!n || null == n.pointIndex) return;
    "complete" === e2 && this._context?.setGlobalState("drawAtFixedElevation", true);
    const i = o.getInformationAboutPoint(0, n.partIndex), s = o.getInformationAboutPoint(n.pointIndex - 1, n.partIndex), r = "2d" !== this._context?.getViewInformation()?.type;
    if ("complete" === e2 && this.clickToCloseEnabled && (n.pointIndex > 2 || 2 === n.pointIndex && n.curveInfo) && (f3(i?.point, n.point, r) || f3(s?.point, n.point, r))) {
      !n.curveInfo && o?.eraseLastOperation(), this._context?.requestComplete();
    } else "complete" === e2 && this._context?.requestBeginDownstreamPlugin(t.configuration, { cancelExisting: false });
  }
  afterUndoRedo() {
    const t = this._session?.lastPointAddedBySession;
    this._context?.setGlobalState("drawAtFixedElevation", !!t || void 0);
  }
  _getCommittedGeometry() {
    return this._session?.generatePreviewGeometry({ includeAutomaticConnection: false, geometryType: "polygon" });
  }
  _setupGeometrySpecificTooltip() {
    this._context && (this._areaField ??= this._context.createMeasuredField({ id: g2, preset: "area", getMeasurementInput: () => this._totalPreviewGeometry, measure: async (t, e2) => {
      if (!t || !f(t)) return null;
      const o = m(t)?.at(-1);
      if (!o || o.length < 2 || !t.curveRings && o.length < 3) return null;
      const n = e2.inputUnitInfos.area.unit;
      return this._context?.measureArea(t, m2, "tooltip", n);
    }, fieldProperties: { readOnly: true, displayOrder: e.ShapeMeasurements } }));
  }
  _snapToClosingVertex(t, e2) {
    const { _session: o } = this;
    if ("primary" !== e2.handle.role || !o) return t;
    if (e2.handle.dragging && "capture-when-engaged" === e2.handle.captureMode) return t;
    if (!o?.sessionIsOperatingOnSameGeometry(e2.editSession)) return t;
    const n = e2.editSession?.lastPointAddedBySession;
    if (!n || null == n.pointIndex || n.pointIndex < 2) return t;
    const i = o.getInformationAboutPoint(0, n.partIndex);
    if (!t || !i?.point) return t;
    const s = e2.toScreen(t);
    if (!s) return t;
    const r = e2.toScreen(i.point);
    if (!r) return t;
    if (f2(s, r) <= u) return i.point;
    const l2 = o.getInformationAboutPoint(n.pointIndex - 1, n.partIndex);
    if (!l2?.point) return t;
    const a2 = e2.toScreen(l2.point);
    return a2 && f2(s, a2) <= u ? l2.point : t;
  }
};
function f3(t, e2, o) {
  return t === e2 || null != t && null != e2 && t.x === e2.x && t.y === e2.y && (!o || t.z === e2.z);
}
__decorate([a()], y2.prototype, "_areaField", void 0), __decorate([a()], y2.prototype, "_totalPreviewGeometry", null), __decorate([a()], y2.prototype, "clickToCloseEnabled", void 0), __decorate([a()], y2.prototype, "helpMessageKey", null), y2 = __decorate([c("esri.views.draw.plugins.PolygonPlugin")], y2);
export {
  y2 as PolygonPlugin
};
//# sourceMappingURL=PolygonPlugin-AV7VHLBF.js.map
