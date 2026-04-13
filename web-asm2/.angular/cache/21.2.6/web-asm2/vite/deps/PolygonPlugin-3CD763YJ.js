import {
  g
} from "./chunk-GOM6OASA.js";
import {
  e
} from "./chunk-C3Y7VH5G.js";
import "./chunk-E62DEL36.js";
import "./chunk-FM35QW7Y.js";
import {
  f as f2
} from "./chunk-ZDEYOCQG.js";
import "./chunk-6EWCUMLH.js";
import "./chunk-OZ4UTONJ.js";
import "./chunk-MWXSARGP.js";
import "./chunk-MXAZZ5UX.js";
import "./chunk-YUTAX525.js";
import "./chunk-CEI53J3M.js";
import "./chunk-2TISYHLG.js";
import "./chunk-3EN5CV4O.js";
import "./chunk-2M6ICGTQ.js";
import "./chunk-LILFPAOD.js";
import "./chunk-IPN2TOMU.js";
import "./chunk-WAFJ2OD3.js";
import "./chunk-GHG4ULKJ.js";
import "./chunk-YM62CGUL.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-OR4JKEPP.js";
import "./chunk-FPTKPNJ2.js";
import "./chunk-USGU6VDK.js";
import "./chunk-ZEZJAXNN.js";
import "./chunk-Q7JGI6PX.js";
import "./chunk-HYDNVC4V.js";
import "./chunk-RE2NBV4F.js";
import "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-2IAEDPBU.js";
import "./chunk-L244Y4DX.js";
import "./chunk-4NYLPGO2.js";
import "./chunk-NASQUHY4.js";
import "./chunk-JC7PAMG4.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-RJMYNJ36.js";
import "./chunk-TPJLJ32L.js";
import {
  h,
  l
} from "./chunk-CD6IOUFB.js";
import {
  f
} from "./chunk-OOSRFM7N.js";
import "./chunk-DOVHXPQB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import {
  y3 as y
} from "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import {
  m
} from "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
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
//# sourceMappingURL=PolygonPlugin-3CD763YJ.js.map
