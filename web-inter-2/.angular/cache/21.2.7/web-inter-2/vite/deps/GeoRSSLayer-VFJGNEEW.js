import {
  _
} from "./chunk-Z37KRAUQ.js";
import "./chunk-YDQ5OQ56.js";
import "./chunk-SCB6GXME.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-MYLK6AZ6.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-N2NNQJRW.js";
import {
  l
} from "./chunk-LBSKIWRS.js";
import {
  p
} from "./chunk-SP5EDG5W.js";
import {
  l as l2
} from "./chunk-LPNV4GQD.js";
import "./chunk-MX77LL4S.js";
import "./chunk-ZVRAKVBJ.js";
import {
  g
} from "./chunk-NZYRREXI.js";
import {
  e
} from "./chunk-T3TXTZDJ.js";
import {
  d2 as d,
  u,
  y
} from "./chunk-EKKBLUJP.js";
import "./chunk-IJHRPSGC.js";
import {
  b
} from "./chunk-BEBG2VYN.js";
import "./chunk-B3QYCJB5.js";
import "./chunk-FLG5AFOF.js";
import "./chunk-OKJ7MV5V.js";
import "./chunk-23U7MZU6.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import {
  c2
} from "./chunk-T5UM3L76.js";
import "./chunk-LF4XI7IU.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-BJNDU6LU.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-WDPGHXN4.js";
import "./chunk-E4TLNY2F.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-LOVQ4LFC.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import {
  P
} from "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import {
  f2,
  qt
} from "./chunk-2F6BRQJJ.js";
import {
  m
} from "./chunk-PKBHGDEY.js";
import {
  u as u2
} from "./chunk-DNJ342E3.js";
import {
  d as d2,
  n
} from "./chunk-XPGSGU2C.js";
import "./chunk-EKLJIMB3.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c,
  o4 as o
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
  f2 as f
} from "./chunk-WARIPJQI.js";
import {
  s2 as s
} from "./chunk-6I475YAP.js";
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
//# sourceMappingURL=GeoRSSLayer-VFJGNEEW.js.map
