import {
  b,
  k
} from "./chunk-7F556GNA.js";
import {
  _,
  a,
  c,
  o,
  x
} from "./chunk-YM62CGUL.js";
import {
  n as n2
} from "./chunk-D4W5U2I5.js";
import {
  n as n3
} from "./chunk-IXOUFXRS.js";
import {
  z
} from "./chunk-XA4KTSOB.js";
import {
  N,
  n,
  t
} from "./chunk-MLBRAI7B.js";
import {
  e,
  r
} from "./chunk-XSQPGBLC.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorResult.js
var f = class {
  get ray() {
    return this._ray;
  }
  get distanceInRenderSpace() {
    return null == this.distance ? null : (x(g, this.ray.direction, this.distance), a(g));
  }
  withinDistance(t3) {
    return !!p(this) && this.distanceInRenderSpace <= t3;
  }
  getIntersectionPoint(t3) {
    return !!p(this) && (x(g, this.ray.direction, this.distance), c(t3, this.ray.origin, g), true);
  }
  getTransformedNormal(t3) {
    return o(u, this.normal), u[3] = 0, z(u, u, this.transformation), o(t3, u), _(t3, t3);
  }
  constructor(t3) {
    this.intersector = 4, this.normal = n(), this.transformation = e(), this._ray = b(), this.init(t3);
  }
  init(t3) {
    this.distance = this.target = this.drapedLayerOrder = this.renderPriority = null, this.intersector = 4, k(t3, this._ray);
  }
  set(r2, e2, s, a2, n4, c3, m) {
    this.intersector = r2, this.distance = s, o(this.normal, a2 ?? N), n2(this.transformation, n4 ?? r), this.target = e2, this.drapedLayerOrder = c3, this.renderPriority = m;
  }
  copy(r2) {
    k(r2.ray, this._ray), this.intersector = r2.intersector, this.distance = r2.distance, this.target = r2.target, this.drapedLayerOrder = r2.drapedLayerOrder, this.renderPriority = r2.renderPriority, o(this.normal, r2.normal), n2(this.transformation, r2.transformation);
  }
};
function p(t3) {
  return null != t3?.distance;
}
var g = n();
var u = n3();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/ObjectTarget.js
var t2 = class {
  constructor(t3, e2, i) {
    this.object = t3, this.geometryId = e2, this.primitiveIndex = i;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/HUDIntersectorResult.js
var o2 = class extends f {
  constructor() {
    super(...arguments), this.intersector = 1;
  }
};
var c2 = class extends t2 {
  constructor(e2, r2) {
    super(e2.object, e2.geometryId, e2.primitiveIndex), this.center = t(r2);
  }
};

export {
  f,
  o2 as o,
  c2 as c
};
//# sourceMappingURL=chunk-VTDNMAHF.js.map
