import {
  n as n3
} from "./chunk-K4ISSBAQ.js";
import {
  t as t2
} from "./chunk-CVCXGMBS.js";
import {
  a as a2,
  g as g2,
  l as l2,
  m as m2
} from "./chunk-IDLF62WL.js";
import {
  p as p2
} from "./chunk-I22OGKPP.js";
import {
  b as b2,
  q as q2,
  v
} from "./chunk-HAPSASFY.js";
import {
  S
} from "./chunk-CUGZ354X.js";
import {
  f,
  s
} from "./chunk-EASH2KMP.js";
import {
  p
} from "./chunk-CKZBO2VZ.js";
import {
  e
} from "./chunk-6THYW6XH.js";
import {
  T as T2,
  k,
  x,
  y as y2
} from "./chunk-T6SJ457A.js";
import {
  l,
  m
} from "./chunk-MSDXC2ZB.js";
import {
  g,
  j,
  u
} from "./chunk-SGNC5H35.js";
import {
  n as n2
} from "./chunk-KEY3YQEB.js";
import {
  y3 as y
} from "./chunk-GTWJPBIK.js";
import {
  t
} from "./chunk-WSE2ZKFY.js";
import {
  de
} from "./chunk-DMD5CGVA.js";
import {
  T
} from "./chunk-VHQJAPCR.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  n2 as n
} from "./chunk-XE7VYYSA.js";
import {
  d
} from "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/interactive/snapping/FeatureSnappingLayerSource.js
var s2 = class extends b {
  constructor(o2) {
    super(o2), this.layer = null, this.enabled = true, this.updating = false, this.availability = 1, this.sublayerSources = new q();
  }
};
__decorate([a({ constructOnly: true })], s2.prototype, "layer", void 0), __decorate([a()], s2.prototype, "enabled", void 0), __decorate([a()], s2.prototype, "updating", void 0), __decorate([a()], s2.prototype, "availability", void 0), __decorate([a()], s2.prototype, "sublayerSources", void 0), s2 = __decorate([c("esri.views.interactive.snapping.FeatureSnappingLayerSource")], s2);

// node_modules/@arcgis/core/views/interactive/snapping/SnappingOptions.js
var u2 = class extends b {
  constructor(e2) {
    super(e2), this.enabled = false, this.enabledToggled = false, this.forceDisabled = false, this.selfEnabled = true, this.featureEnabled = true, this.gridEnabled = false, this.attributeRulesEnabled = false, this.featureSources = new q(), this.distance = p2.distance, this.touchSensitivityMultiplier = p2.touchSensitivityMultiplier;
  }
  get effectiveEnabled() {
    return !this.forceDisabled && (this.enabledToggled ? !this.enabled : this.enabled);
  }
  get effectiveGridEnabled() {
    return this.effectiveEnabled && this.gridEnabled;
  }
  get effectiveSelfEnabled() {
    return this.effectiveEnabled && this.selfEnabled;
  }
  get effectiveFeatureEnabled() {
    return this.effectiveEnabled && this.featureEnabled;
  }
  get _effectiveFeatureSources() {
    const e2 = this.featureSources;
    e2.some(d2) && n.getLogger(this).warnOnce("Do not configure SubtypeGroupLayer sources in SnappingOptions.featureSources directly. Create a FeatureSnappingLayerSource for each SubtypeSublayer.");
    const t3 = e2.filter(p3), a5 = this._get("_effectiveFeatureSources")?.filter(d2) ?? new q();
    for (const r2 of t3) {
      const e3 = a5.find((e4) => e4.layer === r2.layer.parent);
      if (e3) e3.sublayerSources.includes(r2) || e3.sublayerSources.add(r2);
      else if (r2.layer.parent) {
        const e4 = new s2({ layer: r2.layer.parent });
        e4.sublayerSources.add(r2), a5.add(e4);
      }
    }
    for (const r2 of a5) {
      const e3 = r2.sublayerSources.filter((e4) => !t3.includes(e4));
      r2.sublayerSources.removeMany(e3);
    }
    a5.removeMany(a5.filter((e3) => 0 === e3.sublayerSources.length));
    const n4 = e2.filter(c2), l3 = this._get("_effectiveFeatureSources") ?? new q(), { added: u4, removed: f2 } = d(l3.toArray(), [...n4, ...a5]);
    return l3.removeMany(f2), l3.addMany(u4), l3;
  }
};
function d2(e2) {
  return "subtype-group" === e2.layer.type;
}
function c2(e2) {
  return "subtype-group" !== e2.layer.type;
}
function p3(e2) {
  return "subtype-sublayer" === e2.layer.type;
}
__decorate([a()], u2.prototype, "enabled", void 0), __decorate([a()], u2.prototype, "enabledToggled", void 0), __decorate([a()], u2.prototype, "forceDisabled", void 0), __decorate([a()], u2.prototype, "selfEnabled", void 0), __decorate([a()], u2.prototype, "featureEnabled", void 0), __decorate([a()], u2.prototype, "gridEnabled", void 0), __decorate([a()], u2.prototype, "attributeRulesEnabled", void 0), __decorate([a({ type: q.ofType(s2) })], u2.prototype, "featureSources", void 0), __decorate([a()], u2.prototype, "distance", void 0), __decorate([a()], u2.prototype, "touchSensitivityMultiplier", void 0), __decorate([a({ readOnly: true })], u2.prototype, "effectiveEnabled", null), __decorate([a({ readOnly: true })], u2.prototype, "effectiveGridEnabled", null), __decorate([a({ readOnly: true })], u2.prototype, "effectiveSelfEnabled", null), __decorate([a({ readOnly: true })], u2.prototype, "effectiveFeatureEnabled", null), __decorate([a({ readOnly: true })], u2.prototype, "_effectiveFeatureSources", null), u2 = __decorate([c("esri.views.interactive.snapping.SnappingOptions")], u2);

// node_modules/@arcgis/core/views/support/euclideanAreaMeasurementUtils.js
function g3(t3, o2 = x2()) {
  return h(t3, o2);
}
function j2(t3, o2 = x2()) {
  return h(t3, o2, false);
}
function h(r2, g5, j4 = r2.hasZ) {
  const h3 = l2(r2.spatialReference), x4 = de(h3);
  if (null == x4) return null;
  const v4 = (t3, o2) => !(o2.length < 2) && (u(t3, o2[0], o2[1], j4 && o2[2] || 0), true);
  let C = 0;
  for (const t3 of r2.rings) {
    const o2 = t3.length;
    if (o2 < 3) continue;
    const { positionsWorldCoords: a5 } = g5;
    for (; a5.length < o2; ) a5.push(n2());
    const j5 = y3, x5 = u(d3, 0, 0, 0), R2 = 1 / o2;
    for (let n4 = 0; n4 < o2; n4++) {
      if (!v4(j5, t3[n4])) return null;
      if (!p(j5, r2.spatialReference, a5[n4], h3)) return null;
      g(x5, x5, a5[n4], R2);
    }
    const V = k(a5[0], a5[1], x5, x());
    if (0 === j(y2(V))) continue;
    for (let t4 = 0; t4 < o2; t4++) T2(V, x5, a5[t4], a5[t4]);
    const W = b3(a5);
    for (let t4 = 0; t4 < W.length; t4 += 3) C += S(a5[W[t4]], a5[W[t4 + 1]], a5[W[t4 + 2]]);
  }
  return s(C, x4);
}
var y3 = n2();
var d3 = n2();
function x2() {
  return { positionsWorldCoords: [] };
}
function b3(t3) {
  return e(v2(t3), [], 2);
}
function v2(t3) {
  const o2 = new Float64Array(2 * t3.length);
  for (let r2 = 0; r2 < t3.length; ++r2) {
    const n4 = t3[r2], e2 = 2 * r2;
    o2[e2] = n4[0], o2[e2 + 1] = n4[1];
  }
  return o2;
}

// node_modules/@arcgis/core/views/support/automaticAreaMeasurementUtils.js
var o = (n4) => ({ async autoAreaByElevationMode(o2, a5, i2 = x2(), s4) {
  if ("on-the-ground" === a5) {
    if (u3(o2.spatialReference)) {
      const { area: e2 } = await n4(o2, { unit: "square-meters", curveType: "geodesic" }, s4);
      return e2;
    }
    return j2(o2, i2);
  }
  return g3(o2, i2);
}, async autoArea2D(r2, t3 = x2(), n5) {
  return this.autoAreaByElevationMode(r2, "on-the-ground", t3, n5);
} });
var a3 = null;
async function i() {
  if (!a3) {
    const e2 = new n3();
    e2.preloadGeodetic(), a3 = o(e2.geodeticArea.bind(e2));
  }
  return a3;
}
function u3(e2) {
  const { isGeographic: r2, isWebMercator: t3 } = e2;
  return r2 || t3;
}

// node_modules/@arcgis/core/views/support/geodesicLengthMeasurementUtils.js
var p4 = (e2) => ({ geodesicLength: d4, geodesicDistanceBetweenPoints: y4, geodesicDistance: j3, geodesicLengthAsync: e2.geodeticLength.bind(e2) });
async function g4() {
  await m();
  const e2 = new n3();
  return e2.preloadGeodetic(), p4(e2);
}
function d4(e2) {
  const { spatialReference: t3 } = e2, r2 = t(e2);
  return t2(t3, r2 ? x3 : R, x3, e2);
}
function y4(e2, t3) {
  if (!T(e2.spatialReference, t3.spatialReference)) return null;
  const { spatialReference: r2 } = e2;
  return v3[0] = e2.x, v3[1] = e2.y, v3[2] = e2.hasZ ? e2.z : 0, D[0] = t3.x, D[1] = t3.y, D[2] = t3.hasZ ? t3.z : 0, j3(v3, D, r2);
}
function j3(e2, t3, r2) {
  return t2(r2, h2, w, e2, t3, r2);
}
function h2(t3, n4, s4) {
  return f(q2(U, t3, n4, s4).distance, "meters");
}
function w(t3, r2, n4) {
  return f(l(L(t3, r2, n4), { unit: "meters" }), "meters");
}
function R(t3) {
  return f(v([t3], "meters")[0], "meters");
}
function x3(t3) {
  return f(l(t3, { unit: "meters" }), "meters");
}
function L(e2, t3, r2) {
  return new y({ spatialReference: r2, paths: [[[...e2], [...t3]]] });
}
var U = new b2();
var v3 = n2();
var D = n2();

// node_modules/@arcgis/core/views/support/automaticLengthMeasurementUtils.js
function s3(e2) {
  return { autoLength2D: (t3) => e2.geodesicLength(t3) ?? a2(t3), autoDistanceBetweenPoints2D: (t3, i2) => e2.geodesicDistanceBetweenPoints(t3, i2) ?? m2(t3, i2), autoDistance2D: (n4, i2, o2) => (r[0] = n4[0], r[1] = n4[1], r[2] = 3 === n4.length ? n4[2] : 0, a4[0] = i2[0], a4[1] = i2[1], a4[2] = 3 === i2.length ? i2[2] : 0, e2.geodesicDistance(r, a4, o2) ?? g2(r, a4, o2)) };
}
async function c3() {
  return s3(await g4());
}
var r = n2();
var a4 = n2();

export {
  s2 as s,
  u2 as u,
  g4 as g,
  i,
  u3 as u2,
  c3 as c
};
//# sourceMappingURL=chunk-XNQ46IBO.js.map
