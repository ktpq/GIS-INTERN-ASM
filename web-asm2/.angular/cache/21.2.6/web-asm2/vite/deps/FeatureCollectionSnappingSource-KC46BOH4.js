import {
  p as p2,
  s as s2
} from "./chunk-G453RGFQ.js";
import "./chunk-PMIICJPH.js";
import "./chunk-2HAU75HE.js";
import "./chunk-FVUWM462.js";
import "./chunk-EWB3NJAR.js";
import "./chunk-5R5DKW26.js";
import "./chunk-G6Z7GZKS.js";
import {
  h as h2
} from "./chunk-ZDEYOCQG.js";
import "./chunk-AOH3KBTD.js";
import "./chunk-K3AAWICR.js";
import "./chunk-HIVNEJHE.js";
import "./chunk-6EWCUMLH.js";
import "./chunk-OZ4UTONJ.js";
import {
  P
} from "./chunk-MWXSARGP.js";
import {
  t
} from "./chunk-MXAZZ5UX.js";
import "./chunk-JU72IZ4F.js";
import "./chunk-X6WTKQKW.js";
import "./chunk-ZRQNE4ME.js";
import "./chunk-M5IWHRCT.js";
import "./chunk-G4CWCLTJ.js";
import "./chunk-52KYWONX.js";
import "./chunk-C6P3JIAK.js";
import "./chunk-2TISYHLG.js";
import "./chunk-KEB6LZZ5.js";
import {
  o as o2,
  r,
  r2
} from "./chunk-J7U2SLFJ.js";
import "./chunk-UMSS7GXZ.js";
import "./chunk-2M6ICGTQ.js";
import "./chunk-LILFPAOD.js";
import "./chunk-IPN2TOMU.js";
import "./chunk-WAFJ2OD3.js";
import "./chunk-YM62CGUL.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-OR4JKEPP.js";
import "./chunk-FPTKPNJ2.js";
import "./chunk-USGU6VDK.js";
import "./chunk-ZEZJAXNN.js";
import "./chunk-Q7JGI6PX.js";
import "./chunk-HYDNVC4V.js";
import "./chunk-RE2NBV4F.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-BEJRYYIA.js";
import "./chunk-WE5AL7RH.js";
import "./chunk-2IAEDPBU.js";
import "./chunk-L244Y4DX.js";
import "./chunk-4NYLPGO2.js";
import "./chunk-NASQUHY4.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import {
  o
} from "./chunk-RJMYNJ36.js";
import "./chunk-TPJLJ32L.js";
import {
  a as a2,
  h,
  l
} from "./chunk-CD6IOUFB.js";
import "./chunk-OOSRFM7N.js";
import "./chunk-DOVHXPQB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
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
import {
  b
} from "./chunk-SG23UZYK.js";
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
import {
  p,
  s
} from "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=FeatureCollectionSnappingSource-KC46BOH4.js.map
