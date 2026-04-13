import {
  o as o2
} from "./chunk-RFD6YLWC.js";
import {
  l as l3,
  z as z2
} from "./chunk-IQZJUZUB.js";
import {
  e as e2
} from "./chunk-TRC3LPOE.js";
import {
  l
} from "./chunk-NNMKPFUV.js";
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
} from "./chunk-O6NQ3G3U.js";
import {
  e
} from "./chunk-T3TXTZDJ.js";
import "./chunk-J5YAKAE5.js";
import "./chunk-IJHRPSGC.js";
import {
  b
} from "./chunk-I5YTT2EB.js";
import "./chunk-22SI6UZM.js";
import "./chunk-FLG5AFOF.js";
import "./chunk-OKJ7MV5V.js";
import "./chunk-23U7MZU6.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-HMYFPFVG.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-TNGHAIJZ.js";
import "./chunk-2RBIX73A.js";
import {
  u
} from "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import {
  _
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-DF4ABCPV.js";
import {
  f2 as f
} from "./chunk-LAAWMBRE.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  o
} from "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import {
  i,
  n2 as n,
  r3 as r
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/BaseTileLayer.js
var d;
var h = new e2(0, 0, 0);
var g2 = d = class extends p(l2(l(b))) {
  constructor(e3) {
    super(e3), this.tileInfo = z2.create({ spatialReference: S.WebMercator, size: 256 }), this.type = "base-tile", this.fullExtent = new z(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, S.WebMercator), this.spatialReference = S.WebMercator;
  }
  addResolvingPromise(e3) {
    super.addResolvingPromise(e3);
  }
  getTileBounds(e3, t, r2, o3) {
    const i2 = o3 || u();
    return h.level = e3, h.row = t, h.col = r2, h.extent = i2, this.tileInfo.updateTileInfo(h), i2;
  }
  fetchTile(e3, r2, o3, i2 = {}) {
    const { signal: s } = i2, a2 = this.getTileUrl(e3, r2, o3), l4 = { responseType: "image", signal: s, query: __spreadValues({}, this.refreshParameters) };
    return f(a2 ?? "", l4).then((e4) => e4.data);
  }
  async fetchImageBitmapTile(e3, r2, o3, i2 = {}) {
    const { signal: s } = i2;
    if (this.fetchTile !== d.prototype.fetchTile) {
      const t = await this.fetchTile(e3, r2, o3, i2);
      return o2(t, e3, r2, o3, s);
    }
    const a2 = this.getTileUrl(e3, r2, o3) ?? "", l4 = { responseType: "blob", signal: s, query: __spreadValues({}, this.refreshParameters) }, { data: p2 } = await f(a2, l4);
    return o2(p2, e3, r2, o3, s);
  }
  getTileUrl() {
    throw new r("basetilelayer:gettileurl-not-implemented", "getTileUrl() is not implemented");
  }
};
__decorate([a({ type: z2 })], g2.prototype, "tileInfo", void 0), __decorate([a({ type: ["show", "hide"] })], g2.prototype, "listMode", void 0), __decorate([a({ readOnly: true, value: "base-tile" })], g2.prototype, "type", void 0), __decorate([a({ nonNullable: true })], g2.prototype, "fullExtent", void 0), __decorate([a({ type: S })], g2.prototype, "spatialReference", void 0), g2 = d = __decorate([c("esri.layers.BaseTileLayer")], g2);

// node_modules/@arcgis/core/layers/BingMapsLayer.js
var m = new o({ BingMapsAerial: "aerial", BingMapsRoad: "road", BingMapsHybrid: "hybrid" });
var h2 = "https://dev.virtualearth.net";
i(n.getLogger("esri.layers.BingMapsLayer"), "esri.layers.BingMapsLayer", { version: "4.33", warnOnce: true });
var b2 = class extends g(e(g2)) {
  constructor(e3) {
    super(e3), this.type = "bing-maps", this.tileInfo = new z2({ size: [256, 256], dpi: 96, origin: new _({ x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: S.WebMercator }), spatialReference: S.WebMercator, lods: [new l3({ level: 1, resolution: 78271.5169639999, scale: 295828763795777e-6 }), new l3({ level: 2, resolution: 39135.7584820001, scale: 147914381897889e-6 }), new l3({ level: 3, resolution: 19567.8792409999, scale: 73957190948944e-6 }), new l3({ level: 4, resolution: 9783.93962049996, scale: 36978595474472e-6 }), new l3({ level: 5, resolution: 4891.96981024998, scale: 18489297737236e-6 }), new l3({ level: 6, resolution: 2445.98490512499, scale: 9244648868618e-6 }), new l3({ level: 7, resolution: 1222.99245256249, scale: 4622324434309e-6 }), new l3({ level: 8, resolution: 611.49622628138, scale: 2311162217155e-6 }), new l3({ level: 9, resolution: 305.748113140558, scale: 1155581108577e-6 }), new l3({ level: 10, resolution: 152.874056570411, scale: 577790.554289 }), new l3({ level: 11, resolution: 76.4370282850732, scale: 288895.277144 }), new l3({ level: 12, resolution: 38.2185141425366, scale: 144447.638572 }), new l3({ level: 13, resolution: 19.1092570712683, scale: 72223.819286 }), new l3({ level: 14, resolution: 9.55462853563415, scale: 36111.909643 }), new l3({ level: 15, resolution: 4.77731426794937, scale: 18055.954822 }), new l3({ level: 16, resolution: 2.38865713397468, scale: 9027.977411 }), new l3({ level: 17, resolution: 1.19432856685505, scale: 4513.988705 }), new l3({ level: 18, resolution: 0.597164283559817, scale: 2256.994353 }), new l3({ level: 19, resolution: 0.298582141647617, scale: 1128.497176 }), new l3({ level: 20, resolution: 0.1492910708238085, scale: 564.248588 })] }), this.key = null, this.style = "road", this.culture = "en-US", this.region = null, this.portalUrl = null, this.hasAttributionData = true;
  }
  get bingMetadata() {
    return this._get("bingMetadata");
  }
  set bingMetadata(e3) {
    this._set("bingMetadata", e3);
  }
  get copyright() {
    return null != this.bingMetadata ? this.bingMetadata.copyright : null;
  }
  get operationalLayerType() {
    return m.toJSON(this.style);
  }
  get bingLogo() {
    return null != this.bingMetadata ? this.bingMetadata.brandLogoUri : null;
  }
  load(e3) {
    return this.key ? this.addResolvingPromise(this._getMetadata()) : this.portalUrl ? this.addResolvingPromise(this._getPortalBingKey().then(() => this._getMetadata())) : this.addResolvingPromise(Promise.reject(new r("bingmapslayer:load", "Bing layer must have bing key."))), Promise.resolve(this);
  }
  getTileUrl(e3, t, r2) {
    if (!this.loaded || null == this.bingMetadata) return null;
    const o3 = this.bingMetadata.resourceSets[0].resources[0], a2 = o3.imageUrlSubdomains[t % o3.imageUrlSubdomains.length], i2 = this._getQuadKey(e3, t, r2);
    return o3.imageUrl.replace("{subdomain}", a2).replace("{quadkey}", i2);
  }
  async fetchAttributionData() {
    return this.load().then(() => {
      if (null == this.bingMetadata) return null;
      return { contributors: this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e3) => ({ attribution: e3.attribution, coverageAreas: e3.coverageAreas.map((e4) => ({ zoomMin: e4.zoomMin - (e4.zoomMin ? 1 : 0), zoomMax: e4.zoomMax - (e4.zoomMin ? 1 : 0), score: 1, bbox: [e4.bbox[0], e4.bbox[1], e4.bbox[2], e4.bbox[3]] })) })) };
    });
  }
  _getMetadata() {
    const e3 = { road: "roadOnDemand", aerial: "aerial", hybrid: "aerialWithLabelsOnDemand" }[this.style];
    return f(`${h2}/REST/v1/Imagery/Metadata/${e3}`, { responseType: "json", query: { include: "ImageryProviders", uriScheme: "https", key: this.key, suppressStatus: true, output: "json", culture: this.culture, userRegion: this.region } }).then((e4) => {
      const t = e4.data;
      if (200 !== t.statusCode) throw new r("bingmapslayer:getmetadata", t.statusDescription);
      if (this.bingMetadata = t, 0 === this.bingMetadata.resourceSets.length) throw new r("bingmapslayer:getmetadata", "no bing resourcesets");
      if (0 === this.bingMetadata.resourceSets[0].resources.length) throw new r("bingmapslayer:getmetadata", "no bing resources");
    }).catch((e4) => {
      throw new r("bingmapslayer:getmetadata", e4.message);
    });
  }
  _getPortalBingKey() {
    return f(this.portalUrl ?? "", { responseType: "json", authMode: "no-prompt", query: { f: "json" } }).then((e3) => {
      if (!e3.data.bingKey) throw new r("bingmapslayer:getportalbingkey", "The referenced Portal does not contain a valid bing key");
      this.key = e3.data.bingKey;
    }).catch((e3) => {
      throw new r("bingmapslayer:getportalbingkey", e3.message);
    });
  }
  _getQuadKey(e3, t, r2) {
    let o3 = "";
    for (let a2 = e3; a2 > 0; a2--) {
      let e4 = 0;
      const i2 = 1 << a2 - 1;
      0 !== (r2 & i2) && (e4 += 1), 0 !== (t & i2) && (e4 += 2), o3 += e4.toString();
    }
    return o3;
  }
};
__decorate([a({ json: { read: false, write: false }, value: null })], b2.prototype, "bingMetadata", null), __decorate([a({ json: { read: false, write: false }, value: "bing-maps", readOnly: true })], b2.prototype, "type", void 0), __decorate([a({ type: z2 })], b2.prototype, "tileInfo", void 0), __decorate([a({ type: String, readOnly: true, json: { read: false, write: false } })], b2.prototype, "copyright", null), __decorate([a({ type: String, json: { write: false, read: false } })], b2.prototype, "key", void 0), __decorate([a({ type: m.apiValues, nonNullable: true, json: { read: { source: "layerType", reader: m.read } } })], b2.prototype, "style", void 0), __decorate([a({ type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"] })], b2.prototype, "operationalLayerType", null), __decorate([a({ type: String, json: { write: false, read: false } })], b2.prototype, "culture", void 0), __decorate([a({ type: String, json: { write: false, read: false } })], b2.prototype, "region", void 0), __decorate([a({ type: String, json: { write: true, read: true } })], b2.prototype, "portalUrl", void 0), __decorate([a({ type: Boolean, json: { write: false, read: false } })], b2.prototype, "hasAttributionData", void 0), __decorate([a({ type: String, readOnly: true })], b2.prototype, "bingLogo", null), b2 = __decorate([c("esri.layers.BingMapsLayer")], b2);
var w = b2;
export {
  w as default
};
//# sourceMappingURL=BingMapsLayer-24T4FKSR.js.map
