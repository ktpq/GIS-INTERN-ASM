import {
  c as c2,
  d
} from "./chunk-GSOC2G2R.js";
import "./chunk-DC5STBXL.js";
import {
  l as l4
} from "./chunk-KWKXXKTD.js";
import {
  s
} from "./chunk-MWXSARGP.js";
import "./chunk-MXAZZ5UX.js";
import "./chunk-BW2AWZNY.js";
import "./chunk-ZRQNE4ME.js";
import "./chunk-M5IWHRCT.js";
import "./chunk-52KYWONX.js";
import "./chunk-C6P3JIAK.js";
import {
  j
} from "./chunk-MV6OFZWZ.js";
import "./chunk-G5AFP77U.js";
import "./chunk-5XSBG4BK.js";
import "./chunk-DO7AIBZH.js";
import "./chunk-YM62CGUL.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import {
  Q
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
  b as b2
} from "./chunk-JWSXOJ4W.js";
import {
  x
} from "./chunk-SKQFZRJZ.js";
import "./chunk-4NYLPGO2.js";
import "./chunk-NASQUHY4.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-J5XU3PTN.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import {
  e,
  n
} from "./chunk-Q25A4AK6.js";
import {
  h as h2,
  l as l3,
  u
} from "./chunk-GLXZFAAW.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-X7ZXABIR.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import {
  f,
  l
} from "./chunk-DUGX5C7M.js";
import "./chunk-WUSMTFBU.js";
import "./chunk-RJMYNJ36.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-IDWN24M7.js";
import {
  l as l2,
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
import "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-ZILR7JK7.js";
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
  a as a2
} from "./chunk-JADLUMUQ.js";
import {
  b
} from "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
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

// node_modules/@arcgis/core/analysis/LineOfSightAnalysisObserver.js
var c3 = class extends a2(l(b)) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return o(this.position, o2.position) && o(this.elevationInfo, o2.elevationInfo) && c2(this.feature, o2.feature);
  }
};
__decorate([a({ type: _, json: { write: { isRequired: true } } })], c3.prototype, "position", void 0), __decorate([a({ type: x }), j()], c3.prototype, "elevationInfo", void 0), __decorate([a(d)], c3.prototype, "feature", void 0), c3 = __decorate([c("esri.analysis.LineOfSightAnalysisObserver")], c3);
var u2 = c3;

// node_modules/@arcgis/core/analysis/LineOfSightAnalysisTarget.js
var m = class extends a2(f) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return o(this.position, o2.position) && o(this.elevationInfo, o2.elevationInfo) && c2(this.feature, o2.feature);
  }
};
__decorate([a({ type: _, json: { write: true, origins: { "web-scene": { write: { isRequired: true } } } } }), j()], m.prototype, "position", void 0), __decorate([a({ type: x }), j()], m.prototype, "elevationInfo", void 0), __decorate([a(d)], m.prototype, "feature", void 0), m = __decorate([c("esri.analysis.LineOfSightAnalysisTarget")], m);

// node_modules/@arcgis/core/analysis/LineOfSightAnalysis.js
var d2 = q.ofType(m);
var x2 = class extends l4 {
  constructor(t) {
    super(t), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles(l2(() => this._computeExtent(), (t) => {
      null == t?.pending && this._set("extent", null != t ? t.extent : null);
    }, w));
  }
  get targets() {
    return this._get("targets") || new d2();
  }
  set targets(t) {
    this._set("targets", n(t, this.targets, d2));
  }
  get spatialReference() {
    return null != this.observer?.position ? this.observer.position.spatialReference : null;
  }
  get valid() {
    return null != this.observer?.position;
  }
  async waitComputeExtent() {
    const t = this._computeExtent();
    return null != t ? t.pending : Promise.resolve();
  }
  _computeExtent() {
    const t = this.spatialReference;
    if (null == this.observer?.position || null == t) return null;
    const e3 = (t2) => "absolute-height" === s(t2.position, t2.elevationInfo), r = this.observer.position, o2 = u(r.x, r.y, r.z, r.x, r.y, r.z);
    for (const i of this.targets) if (null != i.position) {
      const e4 = Q(i.position, t);
      if (null != e4.pending) return { pending: e4.pending, extent: null };
      if (null != e4.geometry) {
        const { x: t2, y: r2, z: s3 } = e4.geometry;
        l3(o2, [t2, r2, s3]);
      }
    }
    const s2 = h2(o2, t);
    return e3(this.observer) && this.targets.every(e3) || (s2.zmin = void 0, s2.zmax = void 0), { pending: null, extent: s2 };
  }
  clear() {
    this.observer = null, this.targets.removeAll();
  }
  equals(t) {
    return this === t || super.equals(t) && o(this.observer, t.observer) && h(this.targets.toArray(), t.targets.toArray(), (t2, e3) => t2.equals(e3));
  }
};
__decorate([a({ type: ["line-of-sight"] })], x2.prototype, "type", void 0), __decorate([a({ type: u2, json: { read: true, write: true } })], x2.prototype, "observer", void 0), __decorate([a({ cast: e, type: d2, nonNullable: true, json: { read: true, write: true } })], x2.prototype, "targets", null), __decorate([a({ value: null, readOnly: true })], x2.prototype, "extent", void 0), __decorate([a()], x2.prototype, "spatialReference", null), __decorate([a({ readOnly: true })], x2.prototype, "valid", null), x2 = __decorate([c("esri.analysis.LineOfSightAnalysis")], x2);

// node_modules/@arcgis/core/layers/LineOfSightLayer.js
var u3 = q.ofType(m);
var m2 = class extends g(e2(b2)) {
  constructor(e3) {
    super(e3), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new x2(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(l2(() => this.analysis, (e3, t) => {
      null != t && t.parent === this && (t.parent = null), null != e3 && (e3.parent = this);
    }, w));
  }
  async load() {
    return null != this.analysis && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
  }
  get observer() {
    return this.analysis?.observer;
  }
  set observer(e3) {
    const { analysis: t } = this;
    t && (t.observer = e3);
  }
  get targets() {
    return null != this.analysis ? this.analysis.targets : new q();
  }
  set targets(e3) {
    n(e3, this.analysis?.targets);
  }
  get fullExtent() {
    return null != this.analysis ? this.analysis.extent : null;
  }
  get spatialReference() {
    return null != this.analysis ? this.analysis.spatialReference : null;
  }
  releaseAnalysis(e3) {
    this.analysis === e3 && (this.analysis = new x2());
  }
};
__decorate([a({ json: { read: false }, readOnly: true })], m2.prototype, "type", void 0), __decorate([a({ type: ["LineOfSightLayer"] })], m2.prototype, "operationalLayerType", void 0), __decorate([a({ type: u2, json: { read: true, write: { isRequired: true, ignoreOrigin: true } } })], m2.prototype, "observer", null), __decorate([a({ type: u3, json: { read: true, write: { ignoreOrigin: true, isRequired: true } } })], m2.prototype, "targets", null), __decorate([a({ type: x2, nonNullable: true, json: { read: false, write: false } })], m2.prototype, "analysis", void 0), __decorate([a({ readOnly: true })], m2.prototype, "fullExtent", null), __decorate([a({ readOnly: true })], m2.prototype, "spatialReference", null), __decorate([a({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], m2.prototype, "opacity", void 0), __decorate([a({ type: ["show", "hide"] })], m2.prototype, "listMode", void 0), m2 = __decorate([c("esri.layers.LineOfSightLayer")], m2);
var c4 = m2;
export {
  c4 as default
};
//# sourceMappingURL=LineOfSightLayer-6NBN4V3Y.js.map
