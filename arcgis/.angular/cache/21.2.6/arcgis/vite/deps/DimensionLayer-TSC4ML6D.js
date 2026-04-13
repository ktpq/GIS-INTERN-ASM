import {
  l as l2
} from "./chunk-BTVKCCUH.js";
import {
  g as g2
} from "./chunk-SXJ6VOTR.js";
import "./chunk-TFKEOGZ6.js";
import "./chunk-W3KPPCSW.js";
import {
  e as e2
} from "./chunk-6I4LGQ74.js";
import "./chunk-IQ4Y4GKS.js";
import "./chunk-AHPCQT3Y.js";
import {
  $
} from "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-QEE2QYIE.js";
import {
  e,
  n
} from "./chunk-XK2FSQWW.js";
import "./chunk-AIECNX6R.js";
import "./chunk-MLBRAI7B.js";
import {
  f
} from "./chunk-NSJQHJ2B.js";
import "./chunk-DNCZTJNI.js";
import "./chunk-BQWO5RXV.js";
import "./chunk-TPJLJ32L.js";
import {
  g
} from "./chunk-V6655I3I.js";
import "./chunk-S3BACLSK.js";
import {
  b
} from "./chunk-XFHDI4IR.js";
import "./chunk-4QSSUPBC.js";
import "./chunk-FHDG7GP6.js";
import "./chunk-QLC3W7PG.js";
import {
  q
} from "./chunk-KO4S3BRZ.js";
import "./chunk-PMKUQ7UU.js";
import {
  a as a4
} from "./chunk-JC7PAMG4.js";
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
import {
  e as e3,
  o as o2
} from "./chunk-QWNB5I7T.js";
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
import {
  _
} from "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import {
  a as a3
} from "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  D,
  a,
  a3 as a2,
  c,
  m3 as m,
  r4 as r
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import {
  l,
  w
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
  o4 as o
} from "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import {
  h
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/analysis/DimensionSimpleStyle.js
var u = class extends a3(f) {
  constructor(e4) {
    super(e4), this.type = "simple", this.color = new g("black"), this.textColor = new g("black"), this.textBackgroundColor = new g([255, 255, 255, 0.6]);
  }
  get lineSize() {
    return this._get("lineSize") ?? 2;
  }
  set lineSize(e4) {
    this._set("lineSize", e4);
  }
  get fontSize() {
    return this._get("fontSize") ?? 10;
  }
  set fontSize(e4) {
    this._set("fontSize", e4);
  }
  equals(e4) {
    return this === e4 || this.color.equals(e4.color) && this.lineSize === e4.lineSize && this.fontSize === e4.fontSize && this.textColor.equals(e4.textColor) && this.textBackgroundColor.equals(e4.textBackgroundColor);
  }
};
__decorate([a2({ type: ["simple"], readOnly: true, json: { write: { isRequired: true } } })], u.prototype, "type", void 0), __decorate([a2({ type: g, nonNullable: true, json: { type: [D], write: { isRequired: true } } })], u.prototype, "color", void 0), __decorate([a2({ type: Number, cast: o2, nonNullable: true, range: { min: e3(1) }, json: { write: { isRequired: true } } })], u.prototype, "lineSize", null), __decorate([a2({ type: Number, cast: o2, nonNullable: true, json: { write: { isRequired: true } } })], u.prototype, "fontSize", null), __decorate([a2({ type: g, nonNullable: true, json: { type: [D], write: { isRequired: true } } })], u.prototype, "textColor", void 0), __decorate([a2({ type: g, nonNullable: true, json: { type: [D], write: { isRequired: true } } })], u.prototype, "textBackgroundColor", void 0), u = __decorate([c("esri.analysis.DimensionSimpleStyle")], u);

// node_modules/@arcgis/core/analysis/dimensionUtils.js
var t = ["horizontal", "vertical", "direct"];

// node_modules/@arcgis/core/analysis/LengthDimension.js
var m2 = class extends a3(f) {
  constructor(t2) {
    super(t2), this.type = "length", this.startPoint = null, this.endPoint = null, this.measureType = "direct", this.offset = 0, this.orientation = 0;
  }
  get valid() {
    return null != this.startPoint && null != this.endPoint;
  }
  equals(t2) {
    return this === t2 || o(this.startPoint, t2.startPoint) && o(this.endPoint, t2.endPoint) && this.measureType === t2.measureType && this.offset === t2.offset && this.orientation === t2.orientation;
  }
};
__decorate([a2({ type: ["length"], json: { write: { isRequired: true } } })], m2.prototype, "type", void 0), __decorate([a2({ type: _, json: { write: { isRequired: true } } })], m2.prototype, "startPoint", void 0), __decorate([a2({ type: _, json: { write: { isRequired: true } } })], m2.prototype, "endPoint", void 0), __decorate([a2({ type: t, nonNullable: true, json: { write: { isRequired: true } } })], m2.prototype, "measureType", void 0), __decorate([a2({ type: Number, nonNullable: true, json: { write: { isRequired: true } } })], m2.prototype, "offset", void 0), __decorate([a2({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), m((t2) => a4.normalize(a(t2), 0, true))], m2.prototype, "orientation", void 0), __decorate([a2({ readOnly: true })], m2.prototype, "valid", null), m2 = __decorate([c("esri.analysis.LengthDimension")], m2);

// node_modules/@arcgis/core/analysis/DimensionAnalysis.js
var y = q.ofType(m2);
var f2 = class extends l2 {
  constructor(e4) {
    super(e4), this.type = "dimension", this.style = new u(), this.extent = null;
  }
  initialize() {
    this.addHandles(l(() => this._computeExtent(), (e4) => {
      null == e4?.pending && this._set("extent", null != e4 ? e4.extent : null);
    }, w));
  }
  get dimensions() {
    return this._get("dimensions") || new y();
  }
  set dimensions(e4) {
    this._set("dimensions", n(e4, this.dimensions, y));
  }
  get spatialReference() {
    for (const e4 of this.dimensions) {
      if (null != e4.startPoint) return e4.startPoint.spatialReference;
      if (null != e4.endPoint) return e4.endPoint.spatialReference;
    }
    return null;
  }
  get valid() {
    return this.dimensions.every((e4) => e4.valid);
  }
  async waitComputeExtent() {
    const e4 = this._computeExtent();
    return null != e4 ? e4.pending : Promise.resolve();
  }
  _computeExtent() {
    const e4 = this.spatialReference;
    if (null == e4) return { pending: null, extent: null };
    const t2 = [];
    for (const s of this.dimensions) null != s.startPoint && t2.push(s.startPoint), null != s.endPoint && t2.push(s.endPoint);
    const n2 = $(t2, e4);
    if (null != n2.pending) return { pending: n2.pending, extent: null };
    let i = null;
    return null != n2.geometries && (i = n2.geometries.reduce((e5, t3) => null == e5 ? null != t3 ? z.fromPoint(t3) : null : null != t3 ? e5.union(z.fromPoint(t3)) : e5, null)), { pending: null, extent: i };
  }
  clear() {
    this.dimensions.removeAll();
  }
  equals(e4) {
    return this === e4 || super.equals(e4) && this.style.equals(e4.style) && h(this.dimensions.toArray(), e4.dimensions.toArray(), (e5, t2) => e5.equals(t2));
  }
};
__decorate([a2({ type: ["dimension"] })], f2.prototype, "type", void 0), __decorate([a2({ cast: e, type: y, nonNullable: true })], f2.prototype, "dimensions", null), __decorate([a2({ readOnly: true })], f2.prototype, "spatialReference", null), __decorate([a2({ types: { key: "type", base: null, typeMap: { simple: u } }, nonNullable: true })], f2.prototype, "style", void 0), __decorate([a2({ value: null, readOnly: true })], f2.prototype, "extent", void 0), __decorate([a2({ readOnly: true })], f2.prototype, "valid", null), f2 = __decorate([c("esri.analysis.DimensionAnalysis")], f2);

// node_modules/@arcgis/core/layers/DimensionLayer.js
var u2 = class extends g2(e2(b)) {
  constructor(e4) {
    if (super(e4), this.type = "dimension", this.operationalLayerType = "ArcGISDimensionLayer", this.source = new f2(), this.opacity = 1, e4) {
      const { source: t2, style: s } = e4;
      t2 && s && (t2.style = s);
    }
  }
  initialize() {
    this.addHandles([l(() => this.source, (e4, t2) => {
      null != t2 && t2.parent === this && (t2.parent = null), null != e4 && (e4.parent = this);
    }, w)]);
  }
  async load() {
    return this.addResolvingPromise(this.source.waitComputeExtent()), this;
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get style() {
    return this.source.style;
  }
  set style(e4) {
    this.source.style = e4;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e4) {
    this.source === e4 && (this.source = new f2());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e4) {
    this.source = e4;
  }
  get dimensions() {
    return this.source.dimensions;
  }
  set dimensions(e4) {
    this.source.dimensions = e4;
  }
  writeDimensions(e4, t2, s, i) {
    t2.dimensions = e4.filter(({ startPoint: e5, endPoint: t3 }) => null != e5 && null != t3).toJSON(i);
  }
};
__decorate([a2({ json: { read: false }, readOnly: true })], u2.prototype, "type", void 0), __decorate([a2({ type: ["ArcGISDimensionLayer"] })], u2.prototype, "operationalLayerType", void 0), __decorate([a2({ nonNullable: true })], u2.prototype, "source", void 0), __decorate([a2({ readOnly: true })], u2.prototype, "spatialReference", null), __decorate([a2({ types: { key: "type", base: null, typeMap: { simple: u } }, json: { write: { ignoreOrigin: true } } })], u2.prototype, "style", null), __decorate([a2({ readOnly: true })], u2.prototype, "fullExtent", null), __decorate([a2({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], u2.prototype, "opacity", void 0), __decorate([a2({ type: ["show", "hide"] })], u2.prototype, "listMode", void 0), __decorate([a2({ type: q.ofType(m2), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], u2.prototype, "dimensions", null), __decorate([r("web-scene", "dimensions")], u2.prototype, "writeDimensions", null), u2 = __decorate([c("esri.layers.DimensionLayer")], u2);
var d = u2;
export {
  d as default
};
//# sourceMappingURL=DimensionLayer-TSC4ML6D.js.map
