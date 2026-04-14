import {
  p as p2,
  s as s2
} from "./chunk-HV3O7EOK.js";
import "./chunk-JN5VEURS.js";
import "./chunk-NCBEVXSI.js";
import "./chunk-Q4EMEKGU.js";
import "./chunk-X4R43FDP.js";
import {
  h as h2
} from "./chunk-ISM6FRMB.js";
import "./chunk-AYS5CQ25.js";
import "./chunk-MC4L6QKA.js";
import "./chunk-JRYX6JST.js";
import "./chunk-XSL4ZDJY.js";
import "./chunk-ESFGILEN.js";
import "./chunk-ZV255XC4.js";
import "./chunk-OYBI3GFG.js";
import {
  P
} from "./chunk-KWGDYBY5.js";
import {
  t
} from "./chunk-DPFYRE7L.js";
import "./chunk-HGNFIVPY.js";
import "./chunk-TZ37OLCQ.js";
import "./chunk-K3TG4ANK.js";
import "./chunk-AGQQQ6D2.js";
import "./chunk-T6SJ457A.js";
import "./chunk-MXHLIIX3.js";
import "./chunk-UFNIHRKY.js";
import {
  o as o2,
  r,
  r2
} from "./chunk-EBHMAAHM.js";
import "./chunk-TZSKNWRI.js";
import "./chunk-ACXV2BJH.js";
import "./chunk-A7BPJYHN.js";
import "./chunk-ORTBHKNC.js";
import "./chunk-V4VVCJGU.js";
import "./chunk-OK32G4KK.js";
import "./chunk-H6BWPWXH.js";
import "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import "./chunk-HY6H36LC.js";
import "./chunk-7EZH3JAM.js";
import "./chunk-VCFT2RFZ.js";
import "./chunk-4V776ICJ.js";
import "./chunk-F6XZYXKM.js";
import "./chunk-ZKGNDXUQ.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-H4RHQ5YI.js";
import "./chunk-BRTBYVJG.js";
import "./chunk-YNPTGDAS.js";
import "./chunk-Q3C4JQ3I.js";
import "./chunk-FLG5AFOF.js";
import "./chunk-OKJ7MV5V.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-IANKUBS7.js";
import "./chunk-PXICZPXV.js";
import "./chunk-WRETNREX.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import {
  o
} from "./chunk-DMOCO4H5.js";
import "./chunk-UDRKO2UK.js";
import {
  a as a2,
  h,
  l
} from "./chunk-M44GXGOJ.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-QRPQOATM.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import {
  p,
  s
} from "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
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
    }), l(() => t2.elevationInfo, () => this._snappingElevationAligner.notifyElevationSourceChange(), h), l(() => null != this._layerView3D ? this._layerView3D.layer?.renderer : null, () => this._symbologySnappingFetcher.notifySymbologyChange(), h), a2(() => this._layerView3D?.layer, ["edits", "apply-edits"], () => this._symbologySnappingFetcher.notifySymbologyChange())]);
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
__decorate([a({ constructOnly: true })], f.prototype, "layerSource", void 0), __decorate([a({ constructOnly: true })], f.prototype, "view", void 0), __decorate([a()], f.prototype, "_snappingElevationAligner", null), __decorate([a()], f.prototype, "_snappingElevationFilter", null), __decorate([a()], f.prototype, "_symbologySnappingFetcher", null), __decorate([a()], f.prototype, "_layerView", null), __decorate([a()], f.prototype, "_layerView3D", null), __decorate([a()], f.prototype, "_symbologySnappingSupported", null), f = __decorate([c("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")], f);
export {
  f as FeatureCollectionSnappingSource
};
//# sourceMappingURL=FeatureCollectionSnappingSource-PSUU7UTA.js.map
