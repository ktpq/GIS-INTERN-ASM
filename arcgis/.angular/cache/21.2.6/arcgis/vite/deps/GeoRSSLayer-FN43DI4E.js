import {
  l
} from "./chunk-SSSMB36D.js";
import {
  p
} from "./chunk-V4FCUJHW.js";
import {
  l as l2
} from "./chunk-6A5V3JU3.js";
import {
  g
} from "./chunk-SXJ6VOTR.js";
import {
  d2,
  u as u2,
  y
} from "./chunk-TFKEOGZ6.js";
import "./chunk-W3KPPCSW.js";
import {
  _
} from "./chunk-MCN6PQSA.js";
import {
  e
} from "./chunk-6I4LGQ74.js";
import "./chunk-IQ4Y4GKS.js";
import "./chunk-AHPCQT3Y.js";
import "./chunk-PDKX3TBX.js";
import "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-JAXZMTZX.js";
import "./chunk-QIZKSHGT.js";
import "./chunk-TO4LSEU2.js";
import "./chunk-FCVEMPGG.js";
import "./chunk-QEE2QYIE.js";
import "./chunk-2RVDN6RH.js";
import "./chunk-S4XOMMCM.js";
import "./chunk-D4W5U2I5.js";
import {
  c2
} from "./chunk-OD52MENG.js";
import "./chunk-AIECNX6R.js";
import {
  m
} from "./chunk-M3PLR22U.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-DNCZTJNI.js";
import "./chunk-BQWO5RXV.js";
import "./chunk-TPJLJ32L.js";
import {
  u
} from "./chunk-QU4UZ7C2.js";
import {
  d,
  n
} from "./chunk-HKOFZI3I.js";
import "./chunk-V6655I3I.js";
import "./chunk-S3BACLSK.js";
import "./chunk-T6F4SXOT.js";
import {
  b
} from "./chunk-XFHDI4IR.js";
import "./chunk-4QSSUPBC.js";
import "./chunk-FHDG7GP6.js";
import "./chunk-QLC3W7PG.js";
import "./chunk-KO4S3BRZ.js";
import "./chunk-PMKUQ7UU.js";
import "./chunk-RTWZV6QR.js";
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
import "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import {
  P
} from "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import {
  f2,
  qt
} from "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c,
  o3 as o
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-55ZAYF5P.js";
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
  f2 as f
} from "./chunk-POW25PFR.js";
import {
  s
} from "./chunk-IDI4VM7T.js";
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
var R = { base: n, key: "type", typeMap: { "picture-marker": c2, "simple-marker": u }, errorContext: "symbol" };
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
__decorate([a()], _2.prototype, "description", void 0), __decorate([a()], _2.prototype, "featureCollections", void 0), __decorate([o("service", "featureCollections", ["featureCollection.layers"])], _2.prototype, "readFeatureCollections", null), __decorate([a({ type: z, json: { name: "lookAtExtent" } })], _2.prototype, "fullExtent", void 0), __decorate([a(u2)], _2.prototype, "id", void 0), __decorate([a(d2)], _2.prototype, "legendEnabled", void 0), __decorate([a({ types: L, json: { write: true } })], _2.prototype, "lineSymbol", void 0), __decorate([a({ type: ["show", "hide"] })], _2.prototype, "listMode", void 0), __decorate([a({ types: R, json: { write: true } })], _2.prototype, "pointSymbol", void 0), __decorate([a({ types: k, json: { write: true } })], _2.prototype, "polygonSymbol", void 0), __decorate([a({ type: ["GeoRSS"] })], _2.prototype, "operationalLayerType", void 0), __decorate([a(y)], _2.prototype, "url", void 0), __decorate([a({ json: { origins: { service: { read: { source: "name", reader: (e2) => e2 || void 0 } } } } })], _2.prototype, "title", null), __decorate([a({ readOnly: true, json: { read: false }, value: "geo-rss" })], _2.prototype, "type", void 0), _2 = __decorate([c("esri.layers.GeoRSSLayer")], _2);
var w = _2;
export {
  w as default
};
//# sourceMappingURL=GeoRSSLayer-FN43DI4E.js.map
