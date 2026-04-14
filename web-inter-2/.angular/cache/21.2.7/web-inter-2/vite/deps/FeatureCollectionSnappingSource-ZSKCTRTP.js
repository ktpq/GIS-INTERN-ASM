import {
  p as p2,
  s as s2
} from "./chunk-K7KXYXA3.js";
import "./chunk-6H5OLCAD.js";
import "./chunk-AJ3O6HBY.js";
import "./chunk-7IQ3RIWD.js";
import "./chunk-X4R43FDP.js";
import {
  h as h2
} from "./chunk-ZZZRLTTC.js";
import "./chunk-UQ3VZPCJ.js";
import "./chunk-MC4L6QKA.js";
import "./chunk-JRYX6JST.js";
import "./chunk-XSL4ZDJY.js";
import "./chunk-ESFGILEN.js";
import "./chunk-Z7VSM22T.js";
import "./chunk-3VJWTPTP.js";
import {
  P
} from "./chunk-LNYVQOBZ.js";
import {
  t
} from "./chunk-DPFYRE7L.js";
import "./chunk-U7TKBIZL.js";
import "./chunk-TZ37OLCQ.js";
import "./chunk-435JQ7DO.js";
import "./chunk-AGQQQ6D2.js";
import "./chunk-L553KULD.js";
import "./chunk-WYE7D4KB.js";
import "./chunk-UFNIHRKY.js";
import {
  o as o2,
  r,
  r2
} from "./chunk-MPAGMZUT.js";
import "./chunk-TZSKNWRI.js";
import "./chunk-ACXV2BJH.js";
import "./chunk-IKCUBMQP.js";
import "./chunk-G2W4NJHG.js";
import "./chunk-XAOSXMFM.js";
import "./chunk-FX3Y4WSL.js";
import "./chunk-FCFPWHNO.js";
import "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import "./chunk-OMQXFXI3.js";
import "./chunk-UQACG6GI.js";
import "./chunk-HBTHIU55.js";
import "./chunk-6M5I3JU2.js";
import "./chunk-DMPSJLSK.js";
import "./chunk-TM2EVKRF.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-5JGHASMM.js";
import "./chunk-RUUQ2FUK.js";
import "./chunk-TMWNM5ZK.js";
import "./chunk-I4DPELMA.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-VITXUMTH.js";
import "./chunk-DHYKXKX3.js";
import "./chunk-IANKUBS7.js";
import "./chunk-DVV55TEN.js";
import "./chunk-5EVMO3EL.js";
import "./chunk-3PXGXX6C.js";
import "./chunk-U4R7X4DP.js";
import "./chunk-UIKAL3FG.js";
import "./chunk-KEY3YQEB.js";
import {
  o
} from "./chunk-M756WYLA.js";
import "./chunk-UDRKO2UK.js";
import {
  a as a2,
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
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
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
import {
  b
} from "./chunk-5OGMOTJP.js";
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
import {
  p,
  s
} from "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
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
//# sourceMappingURL=FeatureCollectionSnappingSource-ZSKCTRTP.js.map
