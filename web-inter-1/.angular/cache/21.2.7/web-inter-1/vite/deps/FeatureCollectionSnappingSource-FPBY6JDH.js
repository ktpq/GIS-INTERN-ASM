import {
  p as p2,
  s as s2
} from "./chunk-DCCTJNSK.js";
import {
  o as o2,
  r,
  r2
} from "./chunk-XURGJML3.js";
import "./chunk-D5AGPHYX.js";
import "./chunk-2X5HWIJG.js";
import "./chunk-MNFWQFAC.js";
import "./chunk-X4R43FDP.js";
import "./chunk-NFUHF2IU.js";
import "./chunk-MC4L6QKA.js";
import {
  h as h2
} from "./chunk-GFDC56CO.js";
import "./chunk-JRYX6JST.js";
import "./chunk-4DVAYK5J.js";
import "./chunk-ESFGILEN.js";
import "./chunk-MY4KRETZ.js";
import "./chunk-HAPSASFY.js";
import {
  P
} from "./chunk-YP7OFZOK.js";
import "./chunk-LDDM3CX4.js";
import "./chunk-WQBN2KKE.js";
import "./chunk-K3TG4ANK.js";
import "./chunk-AGQQQ6D2.js";
import "./chunk-TZSKNWRI.js";
import "./chunk-T6SJ457A.js";
import "./chunk-MXHLIIX3.js";
import "./chunk-ACXV2BJH.js";
import "./chunk-UFNIHRKY.js";
import {
  t
} from "./chunk-DPFYRE7L.js";
import "./chunk-IBCQZ6GX.js";
import "./chunk-IXCAA3KK.js";
import "./chunk-6AURJHXX.js";
import "./chunk-7DIM55SH.js";
import "./chunk-RUNHW2N4.js";
import "./chunk-47CFN4JI.js";
import "./chunk-SGNC5H35.js";
import "./chunk-G2AJQACY.js";
import "./chunk-PNVUVXFO.js";
import "./chunk-SG27QVO6.js";
import "./chunk-UG7GC5ST.js";
import "./chunk-37CL2A4G.js";
import "./chunk-TSYJHA7W.js";
import "./chunk-2CBDH3OZ.js";
import "./chunk-UU3FW4SQ.js";
import "./chunk-X4YO53U7.js";
import "./chunk-YTCOBTMP.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-IANKUBS7.js";
import "./chunk-EK6IDC6N.js";
import "./chunk-ZBPHFQZH.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-6TJKPIZ2.js";
import "./chunk-7PBHIAQH.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-K5YEU7YE.js";
import {
  o
} from "./chunk-E3TCHN5O.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
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
  a,
  h,
  l
} from "./chunk-6CYBR6FP.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a2,
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
import {
  p,
  s
} from "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureCollectionSnappingSource.js
var f = class extends b {
  get availability() {
    return 1;
  }
  get _snappingElevationAligner() {
    const { view: e } = this, { layer: t2 } = this.layerSource, i = null != e && "3d" === e.type;
    if (!i || "subtype-group" === t2.type) return r();
    const n = async (i2, n2) => (await p(e.whenLayerView(t2), n2)).elevationAlignPointsInFeatures(i2, n2);
    return r(i, { elevationInfo: t2.elevationInfo, alignPointsInFeatures: n });
  }
  get _snappingElevationFilter() {
    const { view: e } = this, t2 = null != e && "3d" === e.type && "subtype-group" !== this.layerSource.layer.type;
    return r2(t2);
  }
  get _symbologySnappingFetcher() {
    const { view: e } = this, { layer: t2 } = this.layerSource;
    return null != e && "3d" === e.type && "subtype-group" !== t2.type ? o2(this._symbologySnappingSupported, async (i, r3) => {
      const o3 = await e.whenLayerView(t2);
      return s(r3), o3.queryForSymbologySnapping({ candidates: i, spatialReference: e.spatialReference }, r3);
    }) : o2();
  }
  get _layerView() {
    const { view: e } = this;
    if (null == e) return null;
    const { layer: t2 } = this.layerSource;
    return e.allLayerViews.find((e2) => e2.layer === t2);
  }
  get _layerView3D() {
    const { view: e } = this;
    return null == e || "2d" === e.type ? null : this._layerView;
  }
  get _symbologySnappingSupported() {
    return null != this._layerView3D && this._layerView3D.symbologySnappingSupported;
  }
  initialize() {
    const { view: e } = this, { layer: t2 } = this.layerSource;
    null != e && "3d" === e.type && "subtype-group" !== t2.type && this.addHandles([e.elevationProvider.on("elevation-change", ({ context: e2 }) => {
      const { elevationInfo: i } = t2;
      P(e2, i) && this._snappingElevationAligner.notifyElevationSourceChange();
    }), l(() => t2.elevationInfo, () => this._snappingElevationAligner.notifyElevationSourceChange(), h), l(() => null != this._layerView3D ? this._layerView3D.layer?.renderer : null, () => this._symbologySnappingFetcher.notifySymbologyChange(), h), a(() => this._layerView3D?.layer, ["edits", "apply-edits"], () => this._symbologySnappingFetcher.notifySymbologyChange())]);
  }
  constructor(e) {
    super(e), this.view = null, this.updating = false, this._memoizedMakeGetGroundElevation = t(p2);
  }
  refresh() {
  }
  async fetchCandidates(e, t2) {
    const { layer: i } = this.layerSource, { source: r3 } = i;
    if (!r3?.querySnapping) return [];
    const o3 = i.createQuery();
    this._layerView && "effectiveDisplayFilter" in this._layerView && (o3.where = o(o3.where, this._layerView.effectiveDisplayFilter?.where));
    const a3 = !("returnZ" in i && false === i.returnZ), l2 = h2({ parameters: e, returnZ: a3, filter: o3 }), p3 = await r3.querySnapping(l2, { signal: t2 });
    s(t2);
    const y = e.coordinateHelper.spatialReference, u = await this._snappingElevationAligner.alignCandidates(p3.candidates, y, t2);
    s(t2);
    const g = await this._symbologySnappingFetcher.fetch(u, t2);
    s(t2);
    const m = 0 === g.length ? u : [...u, ...g], d = this._snappingElevationFilter.filter(l2, m), v = this._memoizedMakeGetGroundElevation(this.view, y);
    return d.map((t3) => s2(t3, e.mode, v));
  }
};
__decorate([a2({ constructOnly: true })], f.prototype, "layerSource", void 0), __decorate([a2({ constructOnly: true })], f.prototype, "view", void 0), __decorate([a2()], f.prototype, "_snappingElevationAligner", null), __decorate([a2()], f.prototype, "_snappingElevationFilter", null), __decorate([a2()], f.prototype, "_symbologySnappingFetcher", null), __decorate([a2()], f.prototype, "_layerView", null), __decorate([a2()], f.prototype, "_layerView3D", null), __decorate([a2()], f.prototype, "_symbologySnappingSupported", null), f = __decorate([c("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")], f);
export {
  f as FeatureCollectionSnappingSource
};
//# sourceMappingURL=FeatureCollectionSnappingSource-FPBY6JDH.js.map
