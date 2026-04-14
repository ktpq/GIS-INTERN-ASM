import {
  g
} from "./chunk-6RK3IJNM.js";
import {
  e
} from "./chunk-CM7VJVX4.js";
import "./chunk-WSJNDDRJ.js";
import "./chunk-EIUKCZCW.js";
import {
  f as f2
} from "./chunk-ZZZRLTTC.js";
import "./chunk-Z7VSM22T.js";
import "./chunk-3VJWTPTP.js";
import "./chunk-LNYVQOBZ.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-H7U52OP3.js";
import "./chunk-VYBZD663.js";
import "./chunk-TZSKNWRI.js";
import "./chunk-ZFWTLX5G.js";
import "./chunk-G2W4NJHG.js";
import "./chunk-XAOSXMFM.js";
import "./chunk-FX3Y4WSL.js";
import "./chunk-FCFPWHNO.js";
import "./chunk-ZWIQBT42.js";
import "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import "./chunk-OMQXFXI3.js";
import "./chunk-UQACG6GI.js";
import "./chunk-HBTHIU55.js";
import "./chunk-6M5I3JU2.js";
import "./chunk-DMPSJLSK.js";
import "./chunk-TM2EVKRF.js";
import "./chunk-HHAFAO43.js";
import "./chunk-6MXJH5GI.js";
import "./chunk-DVZUPJLC.js";
import "./chunk-TMWNM5ZK.js";
import "./chunk-I4DPELMA.js";
import "./chunk-VITXUMTH.js";
import "./chunk-DHYKXKX3.js";
import "./chunk-OCN6JBSQ.js";
import "./chunk-IANKUBS7.js";
import "./chunk-DVV55TEN.js";
import "./chunk-MXBCSABZ.js";
import "./chunk-5EVMO3EL.js";
import "./chunk-3PXGXX6C.js";
import {
  f
} from "./chunk-U4R7X4DP.js";
import "./chunk-UIKAL3FG.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-M756WYLA.js";
import "./chunk-UDRKO2UK.js";
import {
  h,
  l
} from "./chunk-L5CCICKP.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-F6AS75CS.js";
import "./chunk-ZWC72SJH.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import {
  y3 as y
} from "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import {
  m
} from "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=PolygonPlugin-TF5CRHCO.js.map
