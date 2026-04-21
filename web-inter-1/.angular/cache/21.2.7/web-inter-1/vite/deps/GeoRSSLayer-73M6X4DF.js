import {
  l
} from "./chunk-OIQVAUHX.js";
import {
  g
} from "./chunk-SSFB5U5H.js";
import {
  d2,
  u as u2,
  y
} from "./chunk-UBZI7BAL.js";
import {
  _
} from "./chunk-4E4BWIUF.js";
import {
  e
} from "./chunk-WA4JKPH3.js";
import "./chunk-2HNVQGYK.js";
import "./chunk-RNT2VJHG.js";
import {
  p
} from "./chunk-FJNDADL6.js";
import {
  l as l2
} from "./chunk-VLYAMZP3.js";
import "./chunk-XCIG2MTW.js";
import "./chunk-OUD4F5KK.js";
import "./chunk-IJHRPSGC.js";
import "./chunk-TMW4JZMV.js";
import "./chunk-UG7GC5ST.js";
import "./chunk-X4YO53U7.js";
import "./chunk-5MDFQFDX.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-AP2NAWWU.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import "./chunk-56NUZKCZ.js";
import {
  b
} from "./chunk-FWUMTZJM.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import {
  c2
} from "./chunk-MDVA2DB6.js";
import "./chunk-6PVP32FV.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-P476LLZ4.js";
import "./chunk-DWF2MCID.js";
import "./chunk-E3TCHN5O.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-I3MJLPKC.js";
import {
  m
} from "./chunk-LFCO57WV.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import {
  u
} from "./chunk-ZC4RH2DW.js";
import {
  d,
  n
} from "./chunk-ON6HJSAD.js";
import "./chunk-SWZYRYDU.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-HIVGPE4F.js";
import "./chunk-XETCTTJV.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import {
  z2 as z
} from "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import {
  P
} from "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import {
  f2,
  qt
} from "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c,
  o4 as o
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
  f2 as f
} from "./chunk-2KP24SU5.js";
import {
  s
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=GeoRSSLayer-73M6X4DF.js.map
