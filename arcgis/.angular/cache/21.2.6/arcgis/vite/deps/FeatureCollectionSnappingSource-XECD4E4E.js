import {
  p as p2,
  s as s2
} from "./chunk-Z6PCQRSA.js";
import "./chunk-IYF4C4OE.js";
import "./chunk-CMIKMRJF.js";
import "./chunk-2H6CSSHD.js";
import "./chunk-EWB3NJAR.js";
import {
  h as h2
} from "./chunk-WLT354DA.js";
import "./chunk-Q2X7B3G7.js";
import "./chunk-G6Z7GZKS.js";
import "./chunk-AOH3KBTD.js";
import "./chunk-K3AAWICR.js";
import "./chunk-HIVNEJHE.js";
import "./chunk-FQA45FSP.js";
import {
  P
} from "./chunk-6ZXIHJYY.js";
import "./chunk-2M5GBFWO.js";
import "./chunk-X6WTKQKW.js";
import "./chunk-7F556GNA.js";
import "./chunk-M5IWHRCT.js";
import "./chunk-2TISYHLG.js";
import {
  o as o2,
  r,
  r2
} from "./chunk-5HPX6H5S.js";
import "./chunk-6NPKRFWB.js";
import "./chunk-FZCTYYND.js";
import "./chunk-KEB6LZZ5.js";
import "./chunk-C6P3JIAK.js";
import "./chunk-A4P3ERHS.js";
import {
  t
} from "./chunk-MXAZZ5UX.js";
import "./chunk-F4H4QHCY.js";
import "./chunk-A3TI5LYY.js";
import "./chunk-J7JBGJAS.js";
import "./chunk-GRBMK6HO.js";
import "./chunk-RS3JOHKF.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-YM62CGUL.js";
import "./chunk-RCUTEESF.js";
import "./chunk-AHPCQT3Y.js";
import "./chunk-5XBFAIUN.js";
import "./chunk-L3NTTNVH.js";
import "./chunk-QEI2MEKM.js";
import "./chunk-PYMCJBOT.js";
import "./chunk-7DXPO6B2.js";
import "./chunk-JJJRQB6X.js";
import "./chunk-SQMAPKVO.js";
import "./chunk-QEE2QYIE.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-F3XOF26Q.js";
import "./chunk-DI27LDDB.js";
import "./chunk-AEEIJGHJ.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import {
  o
} from "./chunk-BQWO5RXV.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-4QSSUPBC.js";
import "./chunk-FHDG7GP6.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-4YKWF6M6.js";
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
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3 as a2,
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-6BQZ6NJY.js";
import {
  a,
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
import {
  p,
  s
} from "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
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
//# sourceMappingURL=FeatureCollectionSnappingSource-XECD4E4E.js.map
