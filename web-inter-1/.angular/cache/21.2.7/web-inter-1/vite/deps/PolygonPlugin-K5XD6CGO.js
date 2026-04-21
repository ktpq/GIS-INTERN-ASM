import {
  g
} from "./chunk-LBUPBXDZ.js";
import {
  e
} from "./chunk-CM7VJVX4.js";
import "./chunk-O3OH5LJH.js";
import "./chunk-SHQIZYMW.js";
import {
  f as f2
} from "./chunk-GFDC56CO.js";
import "./chunk-MY4KRETZ.js";
import "./chunk-HAPSASFY.js";
import "./chunk-YP7OFZOK.js";
import "./chunk-EASH2KMP.js";
import "./chunk-CKZBO2VZ.js";
import "./chunk-TZSKNWRI.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-QOQBWURX.js";
import "./chunk-IXCAA3KK.js";
import "./chunk-6AURJHXX.js";
import "./chunk-7DIM55SH.js";
import "./chunk-RUNHW2N4.js";
import "./chunk-TXF5FFQH.js";
import "./chunk-47CFN4JI.js";
import "./chunk-SGNC5H35.js";
import "./chunk-G2AJQACY.js";
import "./chunk-UG7GC5ST.js";
import "./chunk-37CL2A4G.js";
import "./chunk-TSYJHA7W.js";
import "./chunk-2CBDH3OZ.js";
import "./chunk-UU3FW4SQ.js";
import "./chunk-X4YO53U7.js";
import "./chunk-YTCOBTMP.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import "./chunk-MXBCSABZ.js";
import "./chunk-EK6IDC6N.js";
import "./chunk-ZBPHFQZH.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-6TJKPIZ2.js";
import {
  f
} from "./chunk-7PBHIAQH.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-K5YEU7YE.js";
import "./chunk-E3TCHN5O.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import {
  y3 as y
} from "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import {
  m
} from "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
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
  h,
  l
} from "./chunk-6CYBR6FP.js";
import "./chunk-TUJXLUEV.js";
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
//# sourceMappingURL=PolygonPlugin-K5XD6CGO.js.map
