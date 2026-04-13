import {
  _
} from "./chunk-XQWWS2MW.js";
import "./chunk-N2GOMHYA.js";
import "./chunk-6Q36DUGX.js";
import "./chunk-OCXIU36X.js";
import "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-IDQ6F3RQ.js";
import {
  l
} from "./chunk-N2U436SG.js";
import {
  p
} from "./chunk-ESHFEOYZ.js";
import {
  l as l2
} from "./chunk-5W2KFO6C.js";
import "./chunk-WFD24ML4.js";
import "./chunk-WYBA72UW.js";
import {
  g
} from "./chunk-SNVXOKVA.js";
import {
  e
} from "./chunk-SWNARI4F.js";
import {
  d2,
  u,
  y
} from "./chunk-DJHTC3GB.js";
import "./chunk-W3KPPCSW.js";
import {
  b
} from "./chunk-JWSXOJ4W.js";
import "./chunk-SKQFZRJZ.js";
import "./chunk-4NYLPGO2.js";
import "./chunk-NASQUHY4.js";
import "./chunk-IRE2Q6SD.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import {
  c2
} from "./chunk-GLXJP2Y5.js";
import "./chunk-IQ4J5AR2.js";
import "./chunk-X7ZXABIR.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-WUSMTFBU.js";
import "./chunk-RJMYNJ36.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-IDWN24M7.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-B4Y3SDRP.js";
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
import "./chunk-4UWOVR5Y.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import {
  u as u2
} from "./chunk-J27BSZXM.js";
import "./chunk-VSDCDWT5.js";
import {
  m
} from "./chunk-XKHV7U7B.js";
import {
  d,
  n
} from "./chunk-M2KBLK7K.js";
import "./chunk-TT3WF5RA.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-S3BACLSK.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import {
  P
} from "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import {
  f2,
  qt
} from "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c,
  o4 as o
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
  f2 as f
} from "./chunk-2DNVIDFH.js";
import {
  s
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/GeoRSSLayer.js
var G = ["atom", "xml"];
var L = { base: n, key: "type", typeMap: { "simple-line": d }, errorContext: "symbol" };
var R = { base: n, key: "type", typeMap: { "picture-marker": c2, "simple-marker": u2 }, errorContext: "symbol" };
var k = { base: n, key: "type", typeMap: { "simple-fill": m }, errorContext: "symbol" };
var _2 = class extends p(l(g(_(l2(e(b)))))) {
  constructor(...e2) {
    super(...e2), this.description = null, this.fullExtent = null, this.legendEnabled = true, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e2, t) {
    return "string" == typeof e2 ? __spreadValues({ url: e2 }, t) : e2;
  }
  readFeatureCollections(e2, t) {
    return t.featureCollection.layers.forEach((e3) => {
      const t2 = e3.layerDefinition.drawingInfo.renderer.symbol;
      t2 && "esriSFS" === t2.type && t2.outline?.style.includes("esriSFS") && (t2.outline.style = "esriSLSSolid");
    }), t.featureCollection.layers;
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e2 = this._get("title");
    return e2 && "defaults" !== this.originOf("title") ? e2 : this.url ? qt(this.url, G) || "GeoRSS" : e2;
  }
  set title(e2) {
    this._set("title", e2);
  }
  load(e2) {
    const t = null != e2 ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"] }, e2).catch(f).then(() => this._fetchService(t)).then((e3) => {
      this.read(e3, { origin: "service" });
    })), Promise.resolve(this);
  }
  async hasDataChanged() {
    const e2 = await this._fetchService();
    return this.read(e2, { origin: "service", ignoreDefaults: true }), true;
  }
  async _fetchService(e2) {
    const r = this.spatialReference, { data: i } = await f2(s.geoRSSServiceUrl, { query: { url: this.url, refresh: !!this.loaded || void 0, outSR: P(r) ? void 0 : r.wkid ?? JSON.stringify(r) }, signal: e2 });
    return i;
  }
  _hasGeometry(e2) {
    return this.featureCollections?.some((t) => t.featureSet?.geometryType === e2 && t.featureSet.features?.length > 0) ?? false;
  }
};
__decorate([a()], _2.prototype, "description", void 0), __decorate([a()], _2.prototype, "featureCollections", void 0), __decorate([o("service", "featureCollections", ["featureCollection.layers"])], _2.prototype, "readFeatureCollections", null), __decorate([a({ type: z, json: { name: "lookAtExtent" } })], _2.prototype, "fullExtent", void 0), __decorate([a(u)], _2.prototype, "id", void 0), __decorate([a(d2)], _2.prototype, "legendEnabled", void 0), __decorate([a({ types: L, json: { write: true } })], _2.prototype, "lineSymbol", void 0), __decorate([a({ type: ["show", "hide"] })], _2.prototype, "listMode", void 0), __decorate([a({ types: R, json: { write: true } })], _2.prototype, "pointSymbol", void 0), __decorate([a({ types: k, json: { write: true } })], _2.prototype, "polygonSymbol", void 0), __decorate([a({ type: ["GeoRSS"] })], _2.prototype, "operationalLayerType", void 0), __decorate([a(y)], _2.prototype, "url", void 0), __decorate([a({ json: { origins: { service: { read: { source: "name", reader: (e2) => e2 || void 0 } } } } })], _2.prototype, "title", null), __decorate([a({ readOnly: true, json: { read: false }, value: "geo-rss" })], _2.prototype, "type", void 0), _2 = __decorate([c("esri.layers.GeoRSSLayer")], _2);
var w = _2;
export {
  w as default
};
//# sourceMappingURL=GeoRSSLayer-5RUZS3K3.js.map
