import {
  n2 as n
} from "./chunk-ZHB32LSG.js";
import {
  o,
  u
} from "./chunk-SVWIACQP.js";
import {
  e,
  v
} from "./chunk-QK7JX7UE.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import {
  _,
  s
} from "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import {
  a3 as a2,
  c,
  r4 as r
} from "./chunk-LV7AMIAU.js";
import {
  a
} from "./chunk-IDI4VM7T.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/support/boundsUtils.js
function o2(n2) {
  return void 0 !== n2.xmin && void 0 !== n2.ymin && void 0 !== n2.xmax && void 0 !== n2.ymax;
}
function u2(n2) {
  return void 0 !== n2.points;
}
function c2(n2) {
  return void 0 !== n2.x && void 0 !== n2.y;
}
function s2(n2) {
  return void 0 !== n2.paths;
}
function l(n2) {
  return void 0 !== n2.rings;
}
function h(n2) {
  function t2(t3, i) {
    return null == t3 ? i : null == i ? t3 : n2(t3, i);
  }
  return t2;
}
var m = h(Math.min);
var a3 = h(Math.max);
function f(n2, t2) {
  return s2(t2) ? y(n2, t2.curvePaths ?? t2.paths, false, false) ?? n2 : l(t2) ? y(n2, t2.curveRings ?? t2.rings, false, false) ?? n2 : u2(t2) ? p(n2, t2.points, false, false, false, false) : o2(t2) ? d(n2, t2) : (c2(t2) && (n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.x, n2[3] = t2.y), n2);
}
function x(n2) {
  let i, r3, e3, o4;
  for (n2.reset(), i = e3 = 1 / 0, r3 = o4 = -1 / 0; n2.nextPath(); ) {
    const t2 = g(n2);
    i = Math.min(t2[0], i), e3 = Math.min(t2[1], e3), r3 = Math.max(t2[2], r3), o4 = Math.max(t2[3], o4);
  }
  return u([i, e3, r3, o4]);
}
function g(n2) {
  let i, r3, e3, o4;
  for (i = e3 = 1 / 0, r3 = o4 = -1 / 0; n2.nextPoint(); ) i = Math.min(n2.x, i), e3 = Math.min(n2.y, e3), r3 = Math.max(n2.x, r3), o4 = Math.max(n2.y, o4);
  return u([i, e3, r3, o4]);
}
function v2(n2, t2) {
  return s2(t2) ? y(n2, t2.curvePaths ?? t2.paths, true, false) ?? n2 : l(t2) ? y(n2, t2.curveRings ?? t2.rings, true, false) ?? n2 : u2(t2) ? p(n2, t2.points, true, false, true, false) : o2(t2) ? d(n2, t2, true, false, true, false) : (c2(t2) && (n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.x, n2[4] = t2.y, n2[5] = t2.z), n2);
}
function y(t2, o4, u5, c5) {
  const s4 = u5 ? 3 : 2;
  if (!o4.length || !o4[0].length) return null;
  let l3, h4, f4, x3, [g2, v4] = v(o4[0][0]), y4 = g2, d3 = v4;
  for (let p2 = 0; p2 < o4.length; p2++) {
    const t3 = o4[p2];
    for (let o5 = 0; o5 < t3.length; o5++) {
      const p3 = v(t3[o5]), [M, z2] = p3;
      if (g2 = m(g2, M), v4 = m(v4, z2), y4 = a3(y4, M), d3 = a3(d3, z2), u5 && p3.length > 2) {
        const n2 = p3[2];
        l3 = m(l3, n2), h4 = a3(h4, n2);
      }
      if (c5 && p3.length > s4) {
        const n2 = p3[s4];
        f4 = m(f4, n2), x3 = a3(x3, n2);
      }
      const P = t3[o5];
      if (e(P) || o5 < 1) continue;
      const j = v(t3[o5 - 1]), R = o(g2, v4, y4, d3);
      [g2, v4, y4, d3] = n(R, j, P);
    }
  }
  return u5 ? c5 ? (t2[0] = g2, t2[1] = v4, t2[2] = l3, t2[3] = f4, t2[4] = y4, t2[5] = d3, t2[6] = h4, t2[7] = x3, t2.length = 8, t2) : (t2[0] = g2, t2[1] = v4, t2[2] = l3, t2[3] = y4, t2[4] = d3, t2[5] = h4, t2.length = 6, t2) : c5 ? (t2[0] = g2, t2[1] = v4, t2[2] = f4, t2[3] = y4, t2[4] = d3, t2[5] = x3, t2.length = 6, t2) : (t2[0] = g2, t2[1] = v4, t2[2] = y4, t2[3] = d3, t2.length = 4, t2);
}
function d(n2, t2, i, r3, e3, o4) {
  const u5 = t2.xmin, c5 = t2.xmax, s4 = t2.ymin, l3 = t2.ymax;
  let h4 = t2.zmin, m4 = t2.zmax, a5 = t2.mmin, f4 = t2.mmax;
  return e3 ? (h4 = h4 || 0, m4 = m4 || 0, o4 ? (a5 = a5 || 0, f4 = f4 || 0, n2[0] = u5, n2[1] = s4, n2[2] = h4, n2[3] = a5, n2[4] = c5, n2[5] = l3, n2[6] = m4, n2[7] = f4, n2) : (n2[0] = u5, n2[1] = s4, n2[2] = h4, n2[3] = c5, n2[4] = l3, n2[5] = m4, n2)) : o4 ? (a5 = a5 || 0, f4 = f4 || 0, n2[0] = u5, n2[1] = s4, n2[2] = a5, n2[3] = c5, n2[4] = l3, n2[5] = f4, n2) : (n2[0] = u5, n2[1] = s4, n2[2] = c5, n2[3] = l3, n2);
}
function p(n2, t2, i, r3, e3, o4) {
  const u5 = i ? 3 : 2, c5 = r3 && o4, s4 = i && e3;
  if (!t2.length || !t2[0].length) return null;
  let l3, h4, f4, x3, [g2, v4] = t2[0], [y4, d3] = t2[0];
  for (let p2 = 0; p2 < t2.length; p2++) {
    const n3 = t2[p2], [i2, r4] = n3;
    if (g2 = m(g2, i2), v4 = m(v4, r4), y4 = a3(y4, i2), d3 = a3(d3, r4), s4 && n3.length > 2) {
      const t3 = n3[2];
      l3 = m(l3, t3), h4 = a3(h4, t3);
    }
    if (c5 && n3.length > u5) {
      const t3 = n3[u5];
      f4 = m(l3, t3), x3 = a3(h4, t3);
    }
  }
  return e3 ? (l3 = l3 || 0, h4 = h4 || 0, o4 ? (f4 = f4 || 0, x3 = x3 || 0, n2[0] = g2, n2[1] = v4, n2[2] = l3, n2[3] = f4, n2[4] = y4, n2[5] = d3, n2[6] = h4, n2[7] = x3, n2) : (n2[0] = g2, n2[1] = v4, n2[2] = l3, n2[3] = y4, n2[4] = d3, n2[5] = h4, n2)) : o4 ? (f4 = f4 || 0, x3 = x3 || 0, n2[0] = g2, n2[1] = v4, n2[2] = f4, n2[3] = y4, n2[4] = d3, n2[5] = x3, n2) : (n2[0] = g2, n2[1] = v4, n2[2] = y4, n2[3] = d3, n2);
}

// node_modules/@arcgis/core/geometry/support/extentUtils.js
function t(n2) {
  return void 0 !== n2.xmin && void 0 !== n2.ymin && void 0 !== n2.xmax && void 0 !== n2.ymax;
}
function u3(n2) {
  return void 0 !== n2.points;
}
function r2(n2) {
  return void 0 !== n2.x && void 0 !== n2.y;
}
function m2(n2) {
  return void 0 !== n2.paths;
}
function o3(n2) {
  return void 0 !== n2.rings;
}
var x2 = [];
function a4(n2, i, t2, u5) {
  return { xmin: n2, ymin: i, xmax: t2, ymax: u5 };
}
function c3(n2, i, t2, u5, r3, m4) {
  return { xmin: n2, ymin: i, zmin: t2, xmax: u5, ymax: r3, zmax: m4 };
}
function s3(n2, i, t2, u5, r3, m4) {
  return { xmin: n2, ymin: i, mmin: t2, xmax: u5, ymax: r3, mmax: m4 };
}
function e2(n2, i, t2, u5, r3, m4, o4, x3) {
  return { xmin: n2, ymin: i, zmin: t2, mmin: u5, xmax: r3, ymax: m4, zmax: o4, mmax: x3 };
}
function f2(n2, i = false, t2 = false) {
  return i ? t2 ? e2(n2[0], n2[1], n2[2], n2[3], n2[4], n2[5], n2[6], n2[7]) : c3(n2[0], n2[1], n2[2], n2[3], n2[4], n2[5]) : t2 ? s3(n2[0], n2[1], n2[2], n2[3], n2[4], n2[5]) : a4(n2[0], n2[1], n2[2], n2[3]);
}
function l2(n2) {
  return n2 ? t(n2) ? n2 : r2(n2) ? v3(n2) : o3(n2) ? d2(n2) : m2(n2) ? h2(n2) : u3(n2) ? y2(n2) : null : null;
}
function y2(n2) {
  const { hasZ: t2, hasM: u5, points: r3 } = n2, m4 = p(x2, r3, t2 ?? false, u5 ?? false, t2 ?? false, u5 ?? false);
  return m4 ? f2(m4, t2, u5) : null;
}
function v3(n2) {
  const { x: i, y: t2, z: u5, m: r3 } = n2, m4 = null != r3;
  return null != u5 ? m4 ? e2(i, t2, u5, r3, i, t2, u5, r3) : c3(i, t2, u5, i, t2, u5) : m4 ? s3(i, t2, r3, i, t2, r3) : a4(i, t2, i, t2);
}
function d2(i) {
  const { hasZ: t2, hasM: u5, rings: r3, curveRings: m4 } = i, o4 = y(x2, m4 ?? r3, t2 ?? false, u5 ?? false);
  return o4 ? f2(o4, t2, u5) : null;
}
function h2(i) {
  const { hasZ: t2, hasM: u5, paths: r3, curvePaths: m4 } = i, o4 = y(x2, m4 ?? r3, t2 ?? false, u5 ?? false);
  return o4 ? f2(o4, t2, u5) : null;
}

// node_modules/@arcgis/core/geometry/support/zmUtils.js
function h3(h4, a5, s4 = false) {
  let { hasM: t2, hasZ: e3 } = h4;
  Array.isArray(a5) ? 4 !== a5.length || t2 || e3 ? 3 === a5.length && s4 && !t2 ? (e3 = true, t2 = false) : 3 === a5.length && t2 && e3 && (t2 = false, e3 = false) : (t2 = true, e3 = true) : (e3 = !e3 && a5.hasZ && (!t2 || a5.hasM), t2 = !t2 && a5.hasM && (!e3 || a5.hasZ)), h4.hasZ = e3, h4.hasM = t2;
}

// node_modules/@arcgis/core/geometry/Polyline.js
var u4;
function c4(t2) {
  return !Array.isArray(t2[0]);
}
function f3(t2) {
  return "number" == typeof t2[0]?.[0];
}
function m3(t2) {
  if (!t2) return;
  let { paths: e3, hasM: s4, hasZ: r3, spatialReference: i } = t2;
  switch (e3 ??= [], f3(e3) && (e3 = [e3]), e3[0]?.[0]?.length) {
    case 4:
      r3 ??= true, s4 ??= true;
      break;
    case 3:
      r3 ??= true !== s4, s4 ??= !r3;
      break;
    default:
      r3 ??= false, s4 ??= false;
  }
  return i ??= S.WGS84, __spreadProps(__spreadValues({}, t2), { hasM: s4, hasZ: r3, paths: e3, spatialReference: i });
}
var y3 = u4 = class extends s {
  constructor(t2) {
    super(m3(t2)), this.curvePaths = void 0, this.paths = [], this.type = "polyline";
  }
  get cache() {
    return this.commitProperty("curvePaths"), this.commitProperty("hasM"), this.commitProperty("hasZ"), this.commitProperty("paths"), this.commitProperty("spatialReference"), {};
  }
  writeCurvePaths(t2, s4) {
    s4.curvePaths = a(t2);
  }
  get extent() {
    const t2 = h2(this), { spatialReference: e3 } = this;
    return t2 ? new z(__spreadProps(__spreadValues({}, t2), { spatialReference: e3 })) : null;
  }
  writePaths(t2, s4) {
    s4.paths = a(this.paths);
  }
  addPath(t2) {
    if (!t2) return;
    const e3 = this.paths, s4 = e3.length;
    if (c4(t2)) {
      const r3 = [];
      for (let e4 = 0, s5 = t2.length; e4 < s5; e4++) r3[e4] = t2[e4].toArray();
      e3[s4] = r3;
    } else e3[s4] = t2.slice();
    return this.notifyChange("paths"), this;
  }
  clone() {
    const t2 = new u4();
    return t2.spatialReference = this.spatialReference, t2.paths = a(this.paths), t2.curvePaths = a(this.curvePaths), t2.hasZ = this.hasZ, t2.hasM = this.hasM, t2;
  }
  getPoint(t2, e3) {
    if (!this._validateInputs(t2, e3)) return null;
    const s4 = this.paths[t2][e3], r3 = this.hasZ, i = this.hasM;
    return r3 && !i ? new _(s4[0], s4[1], s4[2], void 0, this.spatialReference) : i && !r3 ? new _(s4[0], s4[1], void 0, s4[2], this.spatialReference) : r3 && i ? new _(s4[0], s4[1], s4[2], s4[3], this.spatialReference) : new _(s4[0], s4[1], this.spatialReference);
  }
  insertPoint(t2, e3, s4) {
    return this._validateInputs(t2, e3, true) ? (h3(this, s4), Array.isArray(s4) || (s4 = s4.toArray()), this.paths[t2].splice(e3, 0, s4), this.notifyChange("paths"), this) : this;
  }
  removePath(t2) {
    if (!this._validateInputs(t2, null)) return null;
    const e3 = this.paths.splice(t2, 1)[0], s4 = this.spatialReference, r3 = e3.map((t3) => new _(t3, s4));
    return this.notifyChange("paths"), r3;
  }
  removePoint(t2, e3) {
    if (!this._validateInputs(t2, e3)) return null;
    const s4 = new _(this.paths[t2].splice(e3, 1)[0], this.spatialReference);
    return this.notifyChange("paths"), s4;
  }
  setPoint(t2, e3, s4) {
    return this._validateInputs(t2, e3) ? (h3(this, s4), Array.isArray(s4) || (s4 = s4.toArray()), this.paths[t2][e3] = s4, this.notifyChange("paths"), this) : this;
  }
  _validateInputs(t2, e3, s4 = false) {
    if (null == t2 || t2 < 0 || t2 >= this.paths.length) return false;
    if (null != e3) {
      const r3 = this.paths[t2];
      if (s4 && (e3 < 0 || e3 > r3.length)) return false;
      if (!s4 && (e3 < 0 || e3 >= r3.length)) return false;
    }
    return true;
  }
  toJSON(t2) {
    return this.write({}, t2);
  }
};
__decorate([a2({ readOnly: true })], y3.prototype, "cache", null), __decorate([a2({ json: { write: true, origins: { "portal-item": { write: false }, "web-map": { write: false }, "web-scene": { write: false } } } })], y3.prototype, "curvePaths", void 0), __decorate([r("curvePaths")], y3.prototype, "writeCurvePaths", null), __decorate([a2({ readOnly: true })], y3.prototype, "extent", null), __decorate([a2({ type: [[[Number]]], json: { write: { isRequired: true } } })], y3.prototype, "paths", void 0), __decorate([r("paths")], y3.prototype, "writePaths", null), y3 = u4 = __decorate([c("esri.geometry.Polyline")], y3), y3.prototype.toJSON.isDefaultToJSON = true;

export {
  f,
  x,
  g,
  v2 as v,
  y,
  l2 as l,
  y2,
  d2 as d,
  h3 as h,
  y3
};
//# sourceMappingURL=chunk-NNANCYKT.js.map
