import {
  c as c2,
  d
} from "./chunk-J663MJMN.js";
import "./chunk-E7ANZYHQ.js";
import {
  l as l2
} from "./chunk-NADVWTHZ.js";
import "./chunk-BZTFWLOV.js";
import "./chunk-K3TG4ANK.js";
import "./chunk-AGQQQ6D2.js";
import "./chunk-MXHLIIX3.js";
import "./chunk-UFNIHRKY.js";
import {
  a as a4
} from "./chunk-MXBCSABZ.js";
import "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import {
  $
} from "./chunk-MYLK6AZ6.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import {
  g
} from "./chunk-NZYRREXI.js";
import {
  e as e2
} from "./chunk-T3TXTZDJ.js";
import "./chunk-EKKBLUJP.js";
import "./chunk-IJHRPSGC.js";
import {
  b
} from "./chunk-BEBG2VYN.js";
import "./chunk-B3QYCJB5.js";
import "./chunk-FLG5AFOF.js";
import "./chunk-OKJ7MV5V.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import {
  e,
  n
} from "./chunk-737A5DQP.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import {
  q
} from "./chunk-BJNDU6LU.js";
import "./chunk-KEY3YQEB.js";
import {
  f
} from "./chunk-NLVGGH5B.js";
import "./chunk-WDPGHXN4.js";
import "./chunk-E4TLNY2F.js";
import "./chunk-HJMMRQXJ.js";
import {
  l,
  w
} from "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-PWZ6VVYN.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
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
import {
  _
} from "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import "./chunk-2F6BRQJJ.js";
import {
  r as r2,
  s
} from "./chunk-253Z6EVN.js";
import {
  a as a2
} from "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a,
  a3,
  c,
  m3 as m,
  r4 as r
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
  o
} from "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
import {
  h
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/analysis/Viewshed.js
var m2 = class extends a2(f) {
  constructor(e3) {
    super(e3), this.observer = null, this.farDistance = 1e3, this.heading = 0, this.tilt = 90, this.horizontalFieldOfView = 45, this.verticalFieldOfView = 45, this.feature = null;
  }
  get valid() {
    return null != this.observer && this.farDistance > 0;
  }
  equals(e3) {
    return o(this.observer, e3.observer) && this.farDistance === e3.farDistance && this.heading === e3.heading && this.tilt === e3.tilt && this.horizontalFieldOfView === e3.horizontalFieldOfView && this.verticalFieldOfView === e3.verticalFieldOfView && c2(this.feature, e3.feature);
  }
};
__decorate([a3({ type: _, json: { write: { isRequired: true } } })], m2.prototype, "observer", void 0), __decorate([a3({ type: Number, nonNullable: true, range: { min: 0 }, json: { write: { isRequired: true } } })], m2.prototype, "farDistance", void 0), __decorate([a3({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), m((e3) => a4.normalize(a(e3), void 0, true))], m2.prototype, "heading", void 0), __decorate([a3({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], m2.prototype, "tilt", void 0), __decorate([a3({ type: Number, nonNullable: true, range: { min: 0, max: 360 }, json: { write: { isRequired: true } } })], m2.prototype, "horizontalFieldOfView", void 0), __decorate([a3({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], m2.prototype, "verticalFieldOfView", void 0), __decorate([a3(d)], m2.prototype, "feature", void 0), __decorate([a3({ readOnly: true, json: { read: false } })], m2.prototype, "valid", null), m2 = __decorate([c("esri.analysis.Viewshed")], m2);

// node_modules/@arcgis/core/analysis/ViewshedAnalysis.js
var v = q.ofType(m2);
var y = class extends l2 {
  constructor(e3) {
    super(e3), this.type = "viewshed", this._extent = null;
  }
  initialize() {
    this.addHandles(l(() => this._computeExtent(), (e3) => {
      null == e3.pending && (this._extent = e3.extent);
    }, w));
  }
  get viewsheds() {
    return this._get("viewsheds") || new v();
  }
  set viewsheds(e3) {
    this._set("viewsheds", n(e3, this.viewsheds, v));
  }
  get spatialReference() {
    for (const e3 of this.viewsheds) if (null != e3.observer) return e3.observer.spatialReference;
    return null;
  }
  get extent() {
    return this._extent;
  }
  get valid() {
    return this.viewsheds.every((e3) => e3.valid);
  }
  async waitComputeExtent() {
    const e3 = this._computeExtent();
    null != e3.pending && await e3.pending;
  }
  _computeExtent() {
    const { spatialReference: e3 } = this;
    if (null == e3) return { pending: null, extent: null };
    const t = this.viewsheds.filter((e4) => null != e4.observer), n2 = t.map((e4) => e4.observer).toArray(), r3 = $(n2, e3);
    if (null != r3.pending) return { pending: r3.pending, extent: null };
    return { pending: null, extent: r3.geometries.map((e4, n3) => {
      const r4 = t.at(n3);
      return null != e4 && null != r4 ? this._computeViewshedExtent(this.viewsheds.at(n3), e4) : null;
    }).filter((e4) => null != e4).reduce((e4, t2) => x(e4, t2), null) };
  }
  _computeViewshedExtent(e3, t) {
    const { farDistance: n2, heading: r3, tilt: i, horizontalFieldOfView: s2, verticalFieldOfView: o2 } = e3, { spatialReference: p } = t, c3 = s2 / 2, m3 = o2 / 2, h3 = n2 / p.metersPerUnit, f2 = [a4.normalize(r3 - c3), r3, a4.normalize(r3 + c3)], v2 = z.fromPoint(t), y3 = (e4) => {
      const t2 = f2.map((t3) => a4.normalize(t3 - e4));
      if (t2[0] > t2[2] || 360 === s2) return h3;
      const n3 = t2.map((e5) => Math.abs(e5 > 180 ? 360 - e5 : e5)).reduce((e5, t3) => e5 > t3 ? t3 : e5);
      return n3 > 90 ? 0 : h3 * Math.cos(s(n3));
    };
    v2.xmax += y3(90), v2.xmin -= y3(-90), v2.ymax += y3(0), v2.ymin -= y3(180);
    const x2 = t.z;
    if (null != x2) {
      let e4 = x2, t2 = x2;
      const r4 = i - 90, s3 = r2(r4 + m3, -90, 90), o3 = r2(r4 - m3, -90, 90), l3 = p?.isGeographic ? n2 : h3;
      e4 += l3 * g2(s3), t2 += l3 * g2(o3);
      const a5 = w2(m3) * l3, d2 = g2(r4) * a5 * (1 - w2(c3));
      i < 90 && (e4 -= d2), i > 90 && (t2 -= d2), v2.zmax = Math.max(e4, x2), v2.zmin = Math.min(t2, x2);
    }
    return v2;
  }
  equals(e3) {
    return this === e3 || super.equals(e3) && h(this.viewsheds.toArray(), e3.viewsheds.toArray(), (e4, t) => e4.equals(t));
  }
  clear() {
    this.viewsheds.removeAll();
  }
};
function x(e3, t) {
  return null == e3 ? t : null == t ? e3 : e3.union(t);
}
function w2(e3) {
  return Math.cos(s(e3));
}
function g2(e3) {
  return Math.sin(s(e3));
}
__decorate([a3({ type: ["viewshed"] })], y.prototype, "type", void 0), __decorate([a3({ cast: e, type: v, nonNullable: true })], y.prototype, "viewsheds", null), __decorate([a3({ readOnly: true })], y.prototype, "spatialReference", null), __decorate([a3()], y.prototype, "_extent", void 0), __decorate([a3()], y.prototype, "extent", null), __decorate([a3({ readOnly: true })], y.prototype, "valid", null), y = __decorate([c("esri.analysis.ViewshedAnalysis")], y);

// node_modules/@arcgis/core/layers/ViewshedLayer.js
var y2 = class extends g(e2(b)) {
  constructor(e3) {
    super(e3), this.type = "viewshed", this.operationalLayerType = "ViewshedLayer", this.source = new y(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(l(() => this.source, (e3, r3) => {
      null != r3 && r3.parent === this && (r3.parent = null), null != e3 && (e3.parent = this);
    }, w));
  }
  async load() {
    return this.addResolvingPromise(this.source.waitComputeExtent()), this;
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e3) {
    this.source === e3 && (this.source = new y());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e3) {
    this.source = e3;
  }
  get viewsheds() {
    return this.source.viewsheds;
  }
  set viewsheds(e3) {
    this.source.viewsheds = e3;
  }
  writeViewsheds(e3, r3, t, s2) {
    r3.viewsheds = e3.filter((e4) => e4.valid).toJSON(s2);
  }
};
__decorate([a3({ json: { read: false }, readOnly: true })], y2.prototype, "type", void 0), __decorate([a3({ type: ["ViewshedLayer"] })], y2.prototype, "operationalLayerType", void 0), __decorate([a3({ type: y, nonNullable: true })], y2.prototype, "source", void 0), __decorate([a3({ readOnly: true })], y2.prototype, "spatialReference", null), __decorate([a3({ readOnly: true })], y2.prototype, "fullExtent", null), __decorate([a3({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], y2.prototype, "opacity", void 0), __decorate([a3({ type: ["show", "hide"] })], y2.prototype, "listMode", void 0), __decorate([a3({ type: q.ofType(m2), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], y2.prototype, "viewsheds", null), __decorate([r("web-scene", "viewsheds")], y2.prototype, "writeViewsheds", null), y2 = __decorate([c("esri.layers.ViewshedLayer")], y2);
var h2 = y2;
export {
  h2 as default
};
//# sourceMappingURL=ViewshedLayer-YNNJ6ZBN.js.map
