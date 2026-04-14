import {
  l as l2
} from "./chunk-HYS24A2P.js";
import {
  $
} from "./chunk-HHAFAO43.js";
import "./chunk-6MXJH5GI.js";
import "./chunk-DVZUPJLC.js";
import {
  g
} from "./chunk-W7IBGF5G.js";
import {
  e as e2
} from "./chunk-ATR3ATPI.js";
import "./chunk-IQYWMUVX.js";
import "./chunk-IJHRPSGC.js";
import "./chunk-DTAUH247.js";
import "./chunk-TMWNM5ZK.js";
import "./chunk-I4DPELMA.js";
import {
  b
} from "./chunk-4N35QWIB.js";
import "./chunk-VITXUMTH.js";
import "./chunk-DHYKXKX3.js";
import "./chunk-OCN6JBSQ.js";
import "./chunk-IANKUBS7.js";
import {
  a as a4
} from "./chunk-MXBCSABZ.js";
import {
  e,
  n
} from "./chunk-WEURYJAU.js";
import "./chunk-6KBSN3RJ.js";
import "./chunk-7F3DNNUI.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLL3NYBQ.js";
import "./chunk-M756WYLA.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-FMYEMU2E.js";
import {
  l,
  w
} from "./chunk-L5CCICKP.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-62JQGYSV.js";
import "./chunk-NIB6ADTM.js";
import {
  q
} from "./chunk-OEXL7OFS.js";
import {
  f
} from "./chunk-F6AS75CS.js";
import "./chunk-PM52Q5K4.js";
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
import "./chunk-FVU6XCMJ.js";
import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import {
  _
} from "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import {
  g as g2
} from "./chunk-6XF5AJ25.js";
import {
  e as e3,
  o as o2
} from "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import {
  a as a3
} from "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  D,
  a,
  a3 as a2,
  c,
  m3 as m,
  r4 as r
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
  o4 as o
} from "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import {
  h
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/analysis/DimensionSimpleStyle.js
var u = class extends a3(f) {
  constructor(e4) {
    super(e4), this.type = "simple", this.color = new g2("black"), this.textColor = new g2("black"), this.textBackgroundColor = new g2([255, 255, 255, 0.6]);
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
__decorate([a2({ type: ["simple"], readOnly: true, json: { write: { isRequired: true } } })], u.prototype, "type", void 0), __decorate([a2({ type: g2, nonNullable: true, json: { type: [D], write: { isRequired: true } } })], u.prototype, "color", void 0), __decorate([a2({ type: Number, cast: o2, nonNullable: true, range: { min: e3(1) }, json: { write: { isRequired: true } } })], u.prototype, "lineSize", null), __decorate([a2({ type: Number, cast: o2, nonNullable: true, json: { write: { isRequired: true } } })], u.prototype, "fontSize", null), __decorate([a2({ type: g2, nonNullable: true, json: { type: [D], write: { isRequired: true } } })], u.prototype, "textColor", void 0), __decorate([a2({ type: g2, nonNullable: true, json: { type: [D], write: { isRequired: true } } })], u.prototype, "textBackgroundColor", void 0), u = __decorate([c("esri.analysis.DimensionSimpleStyle")], u);

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
var u2 = class extends g(e2(b)) {
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
//# sourceMappingURL=DimensionLayer-DLS6M25L.js.map
