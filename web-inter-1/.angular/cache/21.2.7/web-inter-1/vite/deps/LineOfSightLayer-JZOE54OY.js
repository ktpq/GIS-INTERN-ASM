import {
  c as c2,
  d
} from "./chunk-J663MJMN.js";
import "./chunk-E7ANZYHQ.js";
import {
  l as l4
} from "./chunk-DJIWUJTI.js";
import "./chunk-FA7DZUD2.js";
import {
  s
} from "./chunk-YP7OFZOK.js";
import "./chunk-K3TG4ANK.js";
import "./chunk-AGQQQ6D2.js";
import "./chunk-MXHLIIX3.js";
import "./chunk-UFNIHRKY.js";
import "./chunk-DPFYRE7L.js";
import {
  j
} from "./chunk-SWDUU527.js";
import "./chunk-SL3X53X2.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-47CFN4JI.js";
import "./chunk-SGNC5H35.js";
import "./chunk-SQCKII37.js";
import {
  g
} from "./chunk-SSFB5U5H.js";
import "./chunk-UBZI7BAL.js";
import {
  e as e2
} from "./chunk-WA4JKPH3.js";
import "./chunk-IJHRPSGC.js";
import {
  x
} from "./chunk-TMW4JZMV.js";
import "./chunk-UG7GC5ST.js";
import "./chunk-X4YO53U7.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import {
  Q
} from "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import {
  b as b2
} from "./chunk-FWUMTZJM.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-Z3PP4SLW.js";
import {
  e,
  n
} from "./chunk-3Y2ZRVZS.js";
import "./chunk-6PVP32FV.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-DWF2MCID.js";
import "./chunk-E3TCHN5O.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import {
  h as h2,
  l as l3,
  u
} from "./chunk-MZFPTE7Q.js";
import "./chunk-U3RH7VGM.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-253Z6EVN.js";
import {
  f,
  l as l2
} from "./chunk-7ZFYLJ6O.js";
import "./chunk-HIVGPE4F.js";
import "./chunk-XETCTTJV.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import {
  _
} from "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import {
  l,
  w
} from "./chunk-6CYBR6FP.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import {
  a as a2
} from "./chunk-CV6NMUZC.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
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
  o3 as o
} from "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import {
  h
} from "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/analysis/LineOfSightAnalysisObserver.js
var c3 = class extends a2(l2(b)) {
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
    this.addHandles(l(() => this._computeExtent(), (t) => {
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
    this.addHandles(l(() => this.analysis, (e3, t) => {
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
//# sourceMappingURL=LineOfSightLayer-JZOE54OY.js.map
