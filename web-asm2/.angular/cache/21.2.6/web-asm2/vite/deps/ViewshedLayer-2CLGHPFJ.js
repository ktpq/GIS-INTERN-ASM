import {
  c as c2,
  d
} from "./chunk-GSOC2G2R.js";
import "./chunk-DC5STBXL.js";
import {
  l as l2
} from "./chunk-KWKXXKTD.js";
import "./chunk-BW2AWZNY.js";
import "./chunk-ZRQNE4ME.js";
import "./chunk-M5IWHRCT.js";
import "./chunk-52KYWONX.js";
import "./chunk-C6P3JIAK.js";
import "./chunk-YM62CGUL.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import {
  $
} from "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import {
  g
} from "./chunk-SNVXOKVA.js";
import {
  e as e2
} from "./chunk-SWNARI4F.js";
import "./chunk-DJHTC3GB.js";
import "./chunk-W3KPPCSW.js";
import {
  b
} from "./chunk-JWSXOJ4W.js";
import "./chunk-SKQFZRJZ.js";
import "./chunk-4NYLPGO2.js";
import "./chunk-NASQUHY4.js";
import "./chunk-D4W5U2I5.js";
import {
  a as a4
} from "./chunk-JC7PAMG4.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import {
  e,
  n
} from "./chunk-Q25A4AK6.js";
import "./chunk-GLXZFAAW.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-X7ZXABIR.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import {
  f
} from "./chunk-DUGX5C7M.js";
import "./chunk-WUSMTFBU.js";
import "./chunk-RJMYNJ36.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-IDWN24M7.js";
import {
  l,
  w
} from "./chunk-CD6IOUFB.js";
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
import {
  q
} from "./chunk-4UWOVR5Y.js";
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
  r,
  s
} from "./chunk-ZILR7JK7.js";
import {
  _
} from "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import {
  a as a3
} from "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a,
  a3 as a2,
  c,
  m3 as m,
  r4 as r2
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
  o2 as o
} from "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
import {
  h
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/analysis/Viewshed.js
var m2 = class extends a3(f) {
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
__decorate([a2({ type: _, json: { write: { isRequired: true } } })], m2.prototype, "observer", void 0), __decorate([a2({ type: Number, nonNullable: true, range: { min: 0 }, json: { write: { isRequired: true } } })], m2.prototype, "farDistance", void 0), __decorate([a2({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), m((e3) => a4.normalize(a(e3), void 0, true))], m2.prototype, "heading", void 0), __decorate([a2({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], m2.prototype, "tilt", void 0), __decorate([a2({ type: Number, nonNullable: true, range: { min: 0, max: 360 }, json: { write: { isRequired: true } } })], m2.prototype, "horizontalFieldOfView", void 0), __decorate([a2({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], m2.prototype, "verticalFieldOfView", void 0), __decorate([a2(d)], m2.prototype, "feature", void 0), __decorate([a2({ readOnly: true, json: { read: false } })], m2.prototype, "valid", null), m2 = __decorate([c("esri.analysis.Viewshed")], m2);

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
      const r4 = i - 90, s3 = r(r4 + m3, -90, 90), o3 = r(r4 - m3, -90, 90), l3 = p?.isGeographic ? n2 : h3;
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
__decorate([a2({ type: ["viewshed"] })], y.prototype, "type", void 0), __decorate([a2({ cast: e, type: v, nonNullable: true })], y.prototype, "viewsheds", null), __decorate([a2({ readOnly: true })], y.prototype, "spatialReference", null), __decorate([a2()], y.prototype, "_extent", void 0), __decorate([a2()], y.prototype, "extent", null), __decorate([a2({ readOnly: true })], y.prototype, "valid", null), y = __decorate([c("esri.analysis.ViewshedAnalysis")], y);

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
__decorate([a2({ json: { read: false }, readOnly: true })], y2.prototype, "type", void 0), __decorate([a2({ type: ["ViewshedLayer"] })], y2.prototype, "operationalLayerType", void 0), __decorate([a2({ type: y, nonNullable: true })], y2.prototype, "source", void 0), __decorate([a2({ readOnly: true })], y2.prototype, "spatialReference", null), __decorate([a2({ readOnly: true })], y2.prototype, "fullExtent", null), __decorate([a2({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], y2.prototype, "opacity", void 0), __decorate([a2({ type: ["show", "hide"] })], y2.prototype, "listMode", void 0), __decorate([a2({ type: q.ofType(m2), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], y2.prototype, "viewsheds", null), __decorate([r2("web-scene", "viewsheds")], y2.prototype, "writeViewsheds", null), y2 = __decorate([c("esri.layers.ViewshedLayer")], y2);
var h2 = y2;
export {
  h2 as default
};
//# sourceMappingURL=ViewshedLayer-2CLGHPFJ.js.map
