import {
  d,
  h as h2
} from "./chunk-DHIQ5CF2.js";
import {
  c as c3,
  g,
  i
} from "./chunk-EKUGKFFS.js";
import {
  f,
  z2 as z
} from "./chunk-L3WEJB7W.js";
import {
  _,
  s,
  y
} from "./chunk-X7TQ4MJH.js";
import {
  S
} from "./chunk-YDHIJ7J4.js";
import {
  a3 as a2,
  c as c2,
  r4 as r
} from "./chunk-GUGGSMY4.js";
import {
  a,
  c,
  n2 as n
} from "./chunk-6SPQI6I6.js";
import {
  h
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/geometryCursorCollectUtils.js
function t(t2) {
  const n3 = [];
  for (t2.reset(); t2.nextPath(); ) {
    const s3 = [];
    for (; t2.nextPoint(); ) {
      const n4 = [t2.x, t2.y];
      t2.hasZ && n4.push(t2.z), t2.hasM && n4.push(t2.m), s3.push(n4);
    }
    n3.push(s3);
  }
  return t2.reset(), n3;
}
function n2(t2) {
  const n3 = [];
  for (; t2.nextPoint(); ) n3.push([t2.x, t2.y]);
  return t2.seekPathStart(), n3;
}

// node_modules/@arcgis/core/geometry/support/centroid.js
function r2(t2) {
  return t2 ? t2.hasZ ? [t2.xmax - t2.xmin / 2, t2.ymax - t2.ymin / 2, t2.zmax - t2.zmin / 2] : [t2.xmax - t2.xmin / 2, t2.ymax - t2.ymin / 2] : null;
}
function l(t2) {
  return u(t2.rings, t2.hasZ ?? false);
}
function o(t2) {
  const n3 = l(t2);
  if (!n3) return null;
  const { hasZ: e, spatialReference: r3 } = t2, [o2, u2, i3] = n3;
  return isNaN(o2) || isNaN(u2) || e && isNaN(i3) ? null : { x: o2, y: u2, z: e ? i3 : void 0, spatialReference: r3 };
}
function u(t2, n3) {
  if (!t2?.length) return null;
  const e = [], r3 = [], l2 = n3 ? [1 / 0, -1 / 0, 1 / 0, -1 / 0, 1 / 0, -1 / 0] : [1 / 0, -1 / 0, 1 / 0, -1 / 0];
  for (let o2 = 0, u2 = t2.length; o2 < u2; o2++) {
    const e2 = i2(t2[o2], n3, l2);
    e2 && r3.push(e2);
  }
  if (r3.sort((t3, e2) => {
    let r4 = t3[2] - e2[2];
    return 0 === r4 && n3 && (r4 = t3[4] - e2[4]), r4;
  }), r3.length && (e[0] = r3[0][0], e[1] = r3[0][1], n3 && (e[2] = r3[0][3]), (e[0] < l2[0] || e[0] > l2[1] || e[1] < l2[2] || e[1] > l2[3] || n3 && (e[2] < l2[4] || e[2] > l2[5])) && (e.length = 0)), !e.length) {
    const r4 = t2[0] && t2[0].length ? h3(t2[0], n3) : null;
    if (!r4) return null;
    e[0] = r4[0], e[1] = r4[1], n3 && r4.length > 2 && (e[2] = r4[2]);
  }
  return e;
}
function i2(t2, n3, e) {
  let r3 = 0, l2 = 0, o2 = 0, u2 = 0, i3 = 0;
  const s3 = t2.length ? t2[0][0] : 0, h4 = t2.length ? t2[0][1] : 0, I2 = t2.length && n3 ? t2[0][2] : 0;
  for (let f3 = 0; f3 < t2.length; f3++) {
    const c6 = t2[f3], N2 = t2[(f3 + 1) % t2.length], [a4, x3, g2] = c6, m = a4 - s3, P = x3 - h4, [T, y2, E] = N2, p = T - s3, S2 = y2 - h4, z2 = m * S2 - p * P;
    if (u2 += z2, r3 += (m + p) * z2, l2 += (P + S2) * z2, n3 && c6.length > 2 && N2.length > 2) {
      const t3 = g2 - I2, n4 = E - I2, e2 = m * n4 - p * t3;
      o2 += (t3 + n4) * e2, i3 += e2;
    }
    a4 < e[0] && (e[0] = a4), a4 > e[1] && (e[1] = a4), x3 < e[2] && (e[2] = x3), x3 > e[3] && (e[3] = x3), n3 && (g2 < e[4] && (e[4] = g2), g2 > e[5] && (e[5] = g2));
  }
  if (u2 > 0 && (u2 *= -1), i3 > 0 && (i3 *= -1), !u2) return null;
  u2 *= 0.5, i3 *= 0.5;
  const c5 = [r3 / (6 * u2) + s3, l2 / (6 * u2) + h4, u2];
  return n3 && (e[4] === e[5] || 0 === i3 ? (c5[3] = (e[4] + e[5]) / 2, c5[4] = 0) : (c5[3] = o2 / (6 * i3) + I2, c5[4] = i3)), c5;
}
function s2(t2, n3) {
  let e = 0, r3 = 0, l2 = 0;
  t2.nextPoint();
  const o2 = t2.pathSize ? t2.x : 0, u2 = t2.pathSize ? t2.y : 0;
  for (let i3 = 0; i3 < t2.pathSize; i3++) {
    t2.seekInPath(i3);
    const s3 = [t2.x, t2.y];
    t2.seekInPath((i3 + 1) % t2.pathSize);
    const h4 = [t2.x, t2.y], [I2, c5] = s3, f3 = I2 - o2, N2 = c5 - u2, [a4, x3] = h4, g2 = a4 - o2, m = x3 - u2, P = f3 * m - g2 * N2;
    l2 += P, e += (f3 + g2) * P, r3 += (N2 + m) * P, I2 < n3[0] && (n3[0] = I2), I2 > n3[1] && (n3[1] = I2), c5 < n3[2] && (n3[2] = c5), c5 > n3[3] && (n3[3] = c5);
  }
  if (l2 > 0 && (l2 *= -1), !l2) return null;
  l2 *= 0.5;
  return [e / (6 * l2) + o2, r3 / (6 * l2) + u2, l2];
}
function h3(t2, r3) {
  const l2 = r3 ? [0, 0, 0] : [0, 0], o2 = r3 ? [0, 0, 0] : [0, 0];
  let u2 = 0, i3 = 0, s3 = 0, h4 = 0;
  for (let I2 = 0, c5 = t2.length; I2 < c5 - 1; I2++) {
    const c6 = t2[I2], f3 = t2[I2 + 1];
    if (c6 && f3) {
      l2[0] = c6[0], l2[1] = c6[1], o2[0] = f3[0], o2[1] = f3[1], r3 && c6.length > 2 && f3.length > 2 && (l2[2] = c6[2], o2[2] = f3[2]);
      const t3 = i(l2, o2);
      if (t3) {
        u2 += t3;
        const e = c3(c6, f3);
        i3 += t3 * e[0], s3 += t3 * e[1], r3 && e.length > 2 && (h4 += t3 * e[2]);
      }
    }
  }
  return u2 > 0 ? r3 ? [i3 / u2, s3 / u2, h4 / u2] : [i3 / u2, s3 / u2] : t2.length ? t2[0] : null;
}
function I(n3) {
  const { hasZ: e, totalSize: r3 } = n3;
  if (0 === r3) return null;
  const l2 = [], o2 = [], u2 = e ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
  for (n3.reset(); n3.nextPath(); ) {
    const e2 = i2(n2(n3), n3.hasZ, u2);
    e2 && o2.push(e2);
  }
  if (o2.sort((t2, n4) => {
    let r4 = t2[2] - n4[2];
    return 0 === r4 && e && (r4 = t2[4] - n4[4]), r4;
  }), o2.length && (l2[0] = o2[0][0], l2[1] = o2[0][1], e && (l2[2] = o2[0][3]), (l2[0] < u2[0] || l2[0] > u2[1] || l2[1] < u2[2] || l2[1] > u2[3] || e && (l2[2] < u2[4] || l2[2] > u2[5])) && (l2.length = 0)), !l2.length) {
    n3.reset(), n3.nextPath();
    const t2 = n3.pathSize ? c4(n3) : null;
    if (!t2) return null;
    l2[0] = t2[0], l2[1] = t2[1], e && t2.length > 2 && (l2[2] = t2[2]);
  }
  return l2;
}
function c4(t2) {
  const { hasZ: r3 } = t2, l2 = r3 ? [0, 0, 0] : [0, 0], o2 = r3 ? [0, 0, 0] : [0, 0];
  let u2 = 0, i3 = 0, s3 = 0, h4 = 0;
  if (t2.nextPoint()) {
    let I2 = t2.x, c5 = t2.y, f3 = t2.z;
    for (; t2.nextPoint(); ) {
      const N2 = t2.x, a4 = t2.y, x3 = t2.z;
      l2[0] = I2, l2[1] = c5, o2[0] = N2, o2[1] = a4, r3 && (l2[2] = f3, o2[2] = x3);
      const g2 = i(l2, o2);
      if (g2) {
        u2 += g2;
        const t3 = c3(l2, o2);
        i3 += g2 * t3[0], s3 += g2 * t3[1], r3 && t3.length > 2 && (h4 += g2 * t3[2]);
      }
      I2 = N2, c5 = a4, f3 = x3;
    }
  }
  return u2 > 0 ? r3 ? [i3 / u2, s3 / u2, h4 / u2] : [i3 / u2, s3 / u2] : t2.pathSize ? (t2.seekPathStart(), t2.nextPoint(), [t2.x, t2.y]) : null;
}
var f2 = 1e-6;
function N(t2) {
  let n3 = 0;
  for (t2.reset(); t2.nextPath(); ) n3 += t2.getCurrentRingArea();
  if (n3 < f2) {
    const n4 = I(t2);
    return n4 ? [n4[0], n4[1]] : null;
  }
  const e = [0, 0];
  if (t2.reset(), !t2.nextPath() || !t2.nextPoint()) return null;
  const r3 = [t2.x, t2.y];
  for (t2.reset(); t2.nextPath(); ) x(e, r3, t2);
  return e[0] *= 1 / n3, e[1] *= 1 / n3, e[0] += r3[0], e[1] += r3[1], e;
}
var a3 = 1 / 3;
function x(t2, n3, e) {
  if (!t2 || !e || e.pathSize < 3) return null;
  e.nextPoint();
  const r3 = e.x, l2 = e.y;
  e.nextPoint();
  let o2, u2 = e.x - r3, i3 = e.y - l2, s3 = 0, h4 = 0;
  for (; e.nextPoint(); ) s3 = e.x - r3, h4 = e.y - l2, o2 = 0.5 * a3 * (s3 * i3 - h4 * u2), t2[0] += o2 * (u2 + s3), t2[1] += o2 * (i3 + h4), u2 = s3, i3 = h4;
  const I2 = e.getCurrentRingArea(), c5 = [r3, l2];
  return c5[0] -= n3[0], c5[1] -= n3[1], c5[0] *= I2, c5[1] *= I2, t2[0] += c5[0], t2[1] += c5[1], t2;
}

// node_modules/@arcgis/core/geometry/Polygon.js
var d2;
function w(t2) {
  return !Array.isArray(t2[0]);
}
function v(t2) {
  return "number" == typeof t2[0]?.[0];
}
function x2(t2) {
  if (!t2) return;
  let { rings: e, hasM: r3, hasZ: i3, spatialReference: s3 } = t2;
  switch (e ??= [], v(e) && (e = [e]), e[0]?.[0]?.length) {
    case 4:
      i3 ??= true, r3 ??= true;
      break;
    case 3:
      i3 ??= true !== r3, r3 ??= !i3;
      break;
    default:
      i3 ??= false, r3 ??= false;
  }
  return s3 ??= S.WGS84, __spreadProps(__spreadValues({}, t2), { hasM: r3, hasZ: i3, rings: e, spatialReference: s3 });
}
var j = d2 = class extends s {
  static fromExtent(t2) {
    const e = t2.clone().normalize(), { spatialReference: r3 } = t2;
    let i3 = false, s3 = false;
    for (const o2 of e) o2.hasZ && (i3 = true), o2.hasM && (s3 = true);
    const n3 = { rings: e.map((t3) => {
      const e2 = [[t3.xmin, t3.ymin], [t3.xmin, t3.ymax], [t3.xmax, t3.ymax], [t3.xmax, t3.ymin], [t3.xmin, t3.ymin]];
      if (i3 && t3.hasZ) {
        const r4 = t3.zmin + 0.5 * (t3.zmax - t3.zmin);
        for (let t4 = 0; t4 < e2.length; t4++) e2[t4].push(r4);
      }
      if (s3 && t3.hasM) {
        const r4 = t3.mmin + 0.5 * (t3.mmax - t3.mmin);
        for (let t4 = 0; t4 < e2.length; t4++) e2[t4].push(r4);
      }
      return e2;
    }), spatialReference: r3 };
    return i3 && (n3.hasZ = true), s3 && (n3.hasM = true), new d2(n3);
  }
  constructor(t2) {
    super(x2(t2)), this.curveRings = void 0, this.rings = [], this.type = "polygon";
  }
  get cache() {
    return this.commitProperty("curveRings"), this.commitProperty("hasM"), this.commitProperty("hasZ"), this.commitProperty("rings"), this.commitProperty("spatialReference"), {};
  }
  get centroid() {
    c(n.getLogger(this), "centroid", { replacement: "Please use centroidOperator.execute() instead.", version: "4.34", warnOnce: true });
    const t2 = o(this);
    return t2 ? _.fromJSON(t2) : null;
  }
  writeCurveRings(t2, e) {
    e.curveRings = a(t2);
  }
  get extent() {
    const t2 = d(this), { spatialReference: e } = this;
    return t2 ? new z(__spreadProps(__spreadValues({}, t2), { spatialReference: e })) : null;
  }
  writeRings(t2, e) {
    e.rings = a(this.rings);
  }
  addRing(t2) {
    if (!t2) return;
    const e = this.rings, r3 = e.length;
    if (w(t2)) {
      const i3 = [];
      for (let e2 = 0, r4 = t2.length; e2 < r4; e2++) i3[e2] = t2[e2].toArray();
      e[r3] = i3;
    } else e[r3] = t2.slice();
    return this.notifyChange("rings"), this;
  }
  clone() {
    const t2 = new d2();
    return t2.spatialReference = this.spatialReference, t2.rings = a(this.rings), t2.curveRings = a(this.curveRings), t2.hasZ = this.hasZ, t2.hasM = this.hasM, t2;
  }
  equals(t2) {
    if (this === t2) return true;
    if (null == t2) return false;
    const r3 = this.spatialReference, i3 = t2.spatialReference;
    if (null != r3 != (null != i3)) return false;
    if (null != r3 && null != i3 && !r3.equals(i3)) return false;
    if (this.rings.length !== t2.rings.length) return false;
    const s3 = ([t3, e, r4, i4], [s4, n3, o2, a4]) => t3 === s4 && e === n3 && (null == r4 && null == o2 || r4 === o2) && (null == i4 && null == a4 || i4 === a4);
    for (let n3 = 0; n3 < this.rings.length; n3++) {
      const r4 = this.rings[n3], i4 = t2.rings[n3];
      if (!h(r4, i4, s3)) return false;
    }
    return true;
  }
  contains(t2) {
    if (!t2) return false;
    const e = y(t2, this.spatialReference);
    return f(this, null != e ? e : t2);
  }
  isClockwise(t2) {
    const e = w(t2) ? t2.map((t3) => this.hasZ ? this.hasM ? [t3.x, t3.y, t3.z, t3.m] : [t3.x, t3.y, t3.z] : [t3.x, t3.y]) : t2;
    return g(e);
  }
  getPoint(t2, e) {
    if (!this._validateInputs(t2, e)) return null;
    const r3 = this.rings[t2][e], i3 = this.hasZ, s3 = this.hasM;
    return i3 && !s3 ? new _(r3[0], r3[1], r3[2], void 0, this.spatialReference) : s3 && !i3 ? new _(r3[0], r3[1], void 0, r3[2], this.spatialReference) : i3 && s3 ? new _(r3[0], r3[1], r3[2], r3[3], this.spatialReference) : new _(r3[0], r3[1], this.spatialReference);
  }
  insertPoint(t2, e, r3) {
    return this._validateInputs(t2, e, true) ? (h2(this, r3), Array.isArray(r3) || (r3 = r3.toArray()), this.rings[t2].splice(e, 0, r3), this.notifyChange("rings"), this) : this;
  }
  removePoint(t2, e) {
    if (!this._validateInputs(t2, e)) return null;
    const r3 = new _(this.rings[t2].splice(e, 1)[0], this.spatialReference);
    return this.notifyChange("rings"), r3;
  }
  removeRing(t2) {
    if (!this._validateInputs(t2, null)) return null;
    const e = this.rings.splice(t2, 1)[0], r3 = this.spatialReference, i3 = e.map((t3) => new _(t3, r3));
    return this.notifyChange("rings"), i3;
  }
  setPoint(t2, e, r3) {
    return this._validateInputs(t2, e) ? (h2(this, r3), Array.isArray(r3) || (r3 = r3.toArray()), this.rings[t2][e] = r3, this.notifyChange("rings"), this) : this;
  }
  _validateInputs(t2, e, r3 = false) {
    if (null == t2 || t2 < 0 || t2 >= this.rings.length) return false;
    if (null != e) {
      const i3 = this.rings[t2];
      if (r3 && (e < 0 || e > i3.length)) return false;
      if (!r3 && (e < 0 || e >= i3.length)) return false;
    }
    return true;
  }
  toJSON(t2) {
    return this.write({}, t2);
  }
};
__decorate([a2({ readOnly: true })], j.prototype, "cache", null), __decorate([a2({ readOnly: true })], j.prototype, "centroid", null), __decorate([a2({ json: { write: true, origins: { "portal-item": { write: false }, "web-map": { write: false }, "web-scene": { write: false } } } })], j.prototype, "curveRings", void 0), __decorate([r("curveRings")], j.prototype, "writeCurveRings", null), __decorate([a2({ readOnly: true })], j.prototype, "extent", null), __decorate([a2({ type: [[[Number]]], json: { write: { isRequired: true } } })], j.prototype, "rings", void 0), __decorate([r("rings")], j.prototype, "writeRings", null), j = d2 = __decorate([c2("esri.geometry.Polygon")], j), j.prototype.toJSON.isDefaultToJSON = true;

export {
  t,
  n2 as n,
  r2 as r,
  l,
  o,
  u,
  s2 as s,
  I,
  N,
  j
};
//# sourceMappingURL=chunk-4L5TCIUQ.js.map
