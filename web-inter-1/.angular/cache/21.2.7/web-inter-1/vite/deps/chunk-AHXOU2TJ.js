import {
  p
} from "./chunk-MGFQICK7.js";
import {
  N,
  u as u2
} from "./chunk-SGNC5H35.js";
import {
  Q
} from "./chunk-QBEV3F3C.js";
import {
  n
} from "./chunk-KEY3YQEB.js";
import {
  j
} from "./chunk-2YANO3UR.js";
import {
  c as c3,
  i,
  r,
  u
} from "./chunk-6U5MFJUS.js";
import {
  e
} from "./chunk-EQVY5WGD.js";
import {
  c as c2
} from "./chunk-P7NLTDL7.js";
import {
  o
} from "./chunk-5GPMO33J.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/support/mediaLayerUtils.js
var n2 = /* @__PURE__ */ Symbol("ImageElementInstance");
var e2 = /* @__PURE__ */ Symbol("VideoElementInstance");
function t(e3) {
  return null != e3 && "object" == typeof e3 && n2 in e3;
}
function o2(n4) {
  return null != n4 && "object" == typeof n4 && e2 in n4;
}
function c4(n4) {
  return t(n4) || o2(n4);
}

// node_modules/@arcgis/core/layers/support/MediaElementView.js
var p2 = class extends b {
  constructor(o3) {
    super(o3);
  }
  get bounds() {
    const o3 = this.coords;
    return null == o3?.extent ? null : c2(o3.extent);
  }
  get coords() {
    const o3 = this.element.georeference?.coords;
    return Q(o3, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return j.fromJSON(p(this.coords));
  }
  get normalizedBounds() {
    const o3 = null != this.normalizedCoords ? this.normalizedCoords.extent : null;
    return null != o3 ? c2(o3) : null;
  }
};
__decorate([a()], p2.prototype, "spatialReference", void 0), __decorate([a()], p2.prototype, "element", void 0), __decorate([a()], p2.prototype, "bounds", null), __decorate([a()], p2.prototype, "coords", null), __decorate([a()], p2.prototype, "normalizedCoords", null), __decorate([a()], p2.prototype, "normalizedBounds", null), p2 = __decorate([c("esri.layers.support.MediaElementView")], p2);

// node_modules/@arcgis/core/core/perspectiveUtils.js
var c5 = n();
var n3 = e();
var l = e();
var p3 = e();
function u3(r2, i2, m) {
  return u2(c5, i2[0], i2[1], 1), N(c5, c5, u(n3, m)), 0 === c5[2] ? o(r2, c5[0], c5[1]) : o(r2, c5[0] / c5[2], c5[1] / c5[2]);
}
function x(t2, m, s) {
  return b2(l, m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7]), b2(p3, s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7]), i(t2, c3(l, l), p3), 0 !== t2[8] && (t2[0] /= t2[8], t2[1] /= t2[8], t2[2] /= t2[8], t2[3] /= t2[8], t2[4] /= t2[8], t2[5] /= t2[8], t2[6] /= t2[8], t2[7] /= t2[8], t2[8] /= t2[8]), t2;
}
function b2(s, o3, f, l2, p4, u4, x2, b3, g) {
  r(s, o3, l2, u4, f, p4, x2, 1, 1, 1), u2(c5, b3, g, 1), c3(n3, s);
  const [j2, h, v] = N(c5, c5, u(n3, n3));
  return r(n3, j2, 0, 0, 0, h, 0, 0, 0, v), i(s, n3, s);
}

export {
  u3 as u,
  x,
  n2 as n,
  e2 as e,
  o2 as o,
  c4 as c,
  p2 as p
};
//# sourceMappingURL=chunk-AHXOU2TJ.js.map
