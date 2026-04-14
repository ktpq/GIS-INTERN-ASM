import {
  _
} from "./chunk-CEZV45C4.js";
import "./chunk-CNFMBRMA.js";
import "./chunk-NMDBB7YG.js";
import "./chunk-HHAFAO43.js";
import "./chunk-6MXJH5GI.js";
import "./chunk-DVZUPJLC.js";
import "./chunk-OCH3WOG3.js";
import {
  l
} from "./chunk-64FAF3ZU.js";
import {
  p
} from "./chunk-4D44WGVM.js";
import {
  l as l2
} from "./chunk-OVAE44XM.js";
import "./chunk-THQIBUZ6.js";
import "./chunk-B55MAW2I.js";
import {
  g
} from "./chunk-W7IBGF5G.js";
import {
  e
} from "./chunk-ATR3ATPI.js";
import {
  d2 as d,
  u,
  y
} from "./chunk-IQYWMUVX.js";
import "./chunk-IJHRPSGC.js";
import "./chunk-DTAUH247.js";
import "./chunk-TMWNM5ZK.js";
import "./chunk-I4DPELMA.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-B2F3RTYB.js";
import {
  b
} from "./chunk-4N35QWIB.js";
import "./chunk-VITXUMTH.js";
import "./chunk-DHYKXKX3.js";
import "./chunk-OCN6JBSQ.js";
import "./chunk-IANKUBS7.js";
import {
  c2
} from "./chunk-F2LKHJX3.js";
import "./chunk-KYLXXMSB.js";
import "./chunk-6KBSN3RJ.js";
import "./chunk-7F3DNNUI.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLL3NYBQ.js";
import "./chunk-M756WYLA.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-FMYEMU2E.js";
import "./chunk-L5CCICKP.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-62JQGYSV.js";
import "./chunk-NIB6ADTM.js";
import {
  m
} from "./chunk-GW4HD2NW.js";
import "./chunk-OEXL7OFS.js";
import "./chunk-F6AS75CS.js";
import "./chunk-PM52Q5K4.js";
import "./chunk-ZWC72SJH.js";
import "./chunk-GF53CKBB.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-FVU6XCMJ.js";
import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import {
  P
} from "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import {
  f2,
  qt
} from "./chunk-ZRWCUWWK.js";
import {
  u as u2
} from "./chunk-Y2SQYXOZ.js";
import {
  d as d2,
  n
} from "./chunk-CJBFJRGB.js";
import "./chunk-6XF5AJ25.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c,
  o4 as o
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
  f2 as f
} from "./chunk-PQFEWUZC.js";
import {
  s
} from "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/GeoRSSLayer.js
var G = ["atom", "xml"];
var L = { base: n, key: "type", typeMap: { "simple-line": d2 }, errorContext: "symbol" };
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
__decorate([a()], _2.prototype, "description", void 0), __decorate([a()], _2.prototype, "featureCollections", void 0), __decorate([o("service", "featureCollections", ["featureCollection.layers"])], _2.prototype, "readFeatureCollections", null), __decorate([a({ type: z, json: { name: "lookAtExtent" } })], _2.prototype, "fullExtent", void 0), __decorate([a(u)], _2.prototype, "id", void 0), __decorate([a(d)], _2.prototype, "legendEnabled", void 0), __decorate([a({ types: L, json: { write: true } })], _2.prototype, "lineSymbol", void 0), __decorate([a({ type: ["show", "hide"] })], _2.prototype, "listMode", void 0), __decorate([a({ types: R, json: { write: true } })], _2.prototype, "pointSymbol", void 0), __decorate([a({ types: k, json: { write: true } })], _2.prototype, "polygonSymbol", void 0), __decorate([a({ type: ["GeoRSS"] })], _2.prototype, "operationalLayerType", void 0), __decorate([a(y)], _2.prototype, "url", void 0), __decorate([a({ json: { origins: { service: { read: { source: "name", reader: (e2) => e2 || void 0 } } } } })], _2.prototype, "title", null), __decorate([a({ readOnly: true, json: { read: false }, value: "geo-rss" })], _2.prototype, "type", void 0), _2 = __decorate([c("esri.layers.GeoRSSLayer")], _2);
var w = _2;
export {
  w as default
};
//# sourceMappingURL=GeoRSSLayer-2LBMZGVV.js.map
