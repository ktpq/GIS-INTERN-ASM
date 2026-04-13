import {
  r
} from "./chunk-OXKG6ITC.js";
import {
  f as f2,
  s
} from "./chunk-NTFCNJJY.js";
import {
  u
} from "./chunk-GM5PCDS3.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  d
} from "./chunk-LANOLZOB.js";
import {
  f2 as f
} from "./chunk-2F6BRQJJ.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import {
  a3 as a,
  c,
  w
} from "./chunk-JM4CKTH2.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/support/ProjectParameters.js
var n2 = class extends n {
  constructor(r2) {
    super(r2), this.geometries = [], this.outSpatialReference = null, this.transformation = null, this.transformForward = null;
  }
  toJSON() {
    const r2 = this.geometries.map((r3) => r3.toJSON()), t = this.geometries[0], o = {};
    return o.outSR = d(this.outSpatialReference), o.inSR = d(t.spatialReference), o.geometries = JSON.stringify({ geometryType: u(t), geometries: r2 }), this.transformation && (o.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), null != this.transformForward && (o.transformForward = this.transformForward), o;
  }
};
__decorate([a()], n2.prototype, "geometries", void 0), __decorate([a({ type: S, json: { read: { source: "outSR" } } })], n2.prototype, "outSpatialReference", void 0), __decorate([a()], n2.prototype, "transformation", void 0), __decorate([a()], n2.prototype, "transformForward", void 0), n2 = __decorate([c("esri.rest.support.ProjectParameters")], n2);

// node_modules/@arcgis/core/rest/geometryService/project.js
var i = w(n2);
async function n3(o, m, n4) {
  m = i(m);
  const u2 = f2(o), c2 = __spreadValues(__spreadProps(__spreadValues({}, u2.query), { f: "json" }), m.toJSON()), j = m.outSpatialReference, a2 = u(m.geometries[0]), f3 = s(c2, n4);
  return f(u2.path + "/project", f3).then(({ data: { geometries: r2 } }) => r(r2, a2, j));
}

export {
  n2 as n,
  n3 as n2
};
//# sourceMappingURL=chunk-5BCJ35VJ.js.map
