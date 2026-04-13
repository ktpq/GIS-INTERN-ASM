import {
  y
} from "./chunk-6NPKRFWB.js";
import {
  c as c2,
  o as o2
} from "./chunk-FZCTYYND.js";
import {
  S,
  Z,
  v
} from "./chunk-LW5ZVONF.js";
import {
  e as e4,
  r as r2
} from "./chunk-C6P3JIAK.js";
import {
  f as f3
} from "./chunk-LUNYIW6L.js";
import {
  n as n4
} from "./chunk-ULRT2MRD.js";
import {
  A,
  H,
  N as N2,
  P,
  Q,
  V,
  a as a2,
  c,
  d,
  f as f2,
  g,
  l,
  m,
  s,
  u as u2,
  x
} from "./chunk-YM62CGUL.js";
import {
  u
} from "./chunk-7PBMX777.js";
import {
  C,
  o
} from "./chunk-XWIC4KUB.js";
import {
  n as n3
} from "./chunk-IXOUFXRS.js";
import {
  z
} from "./chunk-XA4KTSOB.js";
import {
  N,
  a,
  e,
  n,
  r
} from "./chunk-MLBRAI7B.js";
import {
  e as e3
} from "./chunk-XSQPGBLC.js";
import {
  f,
  p
} from "./chunk-4F4IE6P5.js";
import {
  e as e2,
  n as n2
} from "./chunk-EF6HOWDG.js";
import {
  E
} from "./chunk-66OU277M.js";
import {
  k
} from "./chunk-TIZ3VJFS.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js
var s2 = class {
  constructor(s3, t2, i = t2) {
    this.data = s3, this.size = t2, this.stride = i;
  }
};
var t = class extends s2 {
  constructor(s3, t2, i, e5 = false, c3 = i) {
    super(s3, i, c3), this.indices = t2, this.exclusive = e5;
  }
};

// node_modules/@arcgis/core/views/3d/support/dito.js
var m2 = 1e-6;
var f4 = n();
var h = n();
function u3(t2, r3) {
  const { data: i, size: n5 } = t2, o3 = i.length / n5;
  if (o3 <= 0) return;
  const s3 = new tt(t2);
  nt(f4, s3.minProj, s3.maxProj), st(f4, f4, 0.5), ot(h, s3.maxProj, s3.minProj);
  const a3 = it(h), m3 = new rt();
  m3.quality = a3, o3 < 14 && (t2 = new s2(new Float64Array(s3.buffer, 112, 42), 3));
  const u4 = n(), j2 = n(), P3 = n(), b2 = n(), x3 = n(), I3 = n(), N5 = n();
  switch (l2(s3, t2, N5, u4, j2, P3, b2, x3, I3, m3)) {
    case 1:
      return void O(f4, h, r3);
    case 2:
      return void K(t2, b2, r3);
  }
  w(t2, N5, u4, j2, P3, b2, x3, I3, m3), L(t2, m3.b0, m3.b1, m3.b2, D, H2);
  const V4 = n();
  ot(V4, H2, D), m3.quality = it(V4), m3.quality < a3 ? Z2(m3.b0, m3.b1, m3.b2, D, H2, V4, r3) : O(f4, h, r3);
}
function l2(t2, r3, i, n5, o3, s3, e5, a3, c3, f5) {
  if (A2(t2, n5, o3), ft(n5, o3) < m2) return 1;
  ot(e5, n5, o3), ct(e5, e5);
  return q(r3, n5, e5, s3) < m2 ? 2 : (ot(a3, o3, s3), ct(a3, a3), ot(c3, s3, n5), ct(c3, c3), at(i, a3, e5), ct(i, i), Y(r3, i, e5, a3, c3, f5), 0);
}
var j = n();
var P2 = n();
var b = n();
var x2 = n();
var I = n();
var N3 = n();
var V2 = n();
var y2 = n();
function w(t2, r3, i, n5, o3, s3, e5, a3, c3) {
  M(t2, r3, i, j, P2), void 0 !== j[0] && (ot(b, j, i), ct(b, b), ot(x2, j, n5), ct(x2, x2), ot(I, j, o3), ct(I, I), at(N3, x2, s3), ct(N3, N3), at(V2, I, e5), ct(V2, V2), at(y2, b, a3), ct(y2, y2), Y(t2, N3, s3, x2, b, c3), Y(t2, V2, e5, I, x2, c3), Y(t2, y2, a3, b, I, c3)), void 0 !== P2[0] && (ot(b, P2, i), ct(b, b), ot(x2, P2, n5), ct(x2, x2), ot(I, P2, o3), ct(I, I), at(N3, x2, s3), ct(N3, N3), at(V2, I, e5), ct(V2, V2), at(y2, b, a3), ct(y2, y2), Y(t2, N3, s3, x2, b, c3), Y(t2, V2, e5, I, x2, c3), Y(t2, y2, a3, b, I, c3));
}
function A2(t2, r3, i) {
  let n5 = ft(t2.maxVert[0], t2.minVert[0]), o3 = 0;
  for (let s3 = 1; s3 < 7; ++s3) {
    const r4 = ft(t2.maxVert[s3], t2.minVert[s3]);
    r4 > n5 && (n5 = r4, o3 = s3);
  }
  et(r3, t2.minVert[o3]), et(i, t2.maxVert[o3]);
}
var g2 = [0, 0, 0];
function q(t2, r3, i, n5) {
  const { data: o3, size: s3 } = t2;
  let e5 = Number.NEGATIVE_INFINITY, a3 = 0;
  for (let c3 = 0; c3 < o3.length; c3 += s3) {
    g2[0] = o3[c3] - r3[0], g2[1] = o3[c3 + 1] - r3[1], g2[2] = o3[c3 + 2] - r3[2];
    const t3 = i[0] * g2[0] + i[1] * g2[1] + i[2] * g2[2], n6 = i[0] * i[0] + i[1] * i[1] + i[2] * i[2], s4 = g2[0] * g2[0] + g2[1] * g2[1] + g2[2] * g2[2] - t3 * t3 / n6;
    s4 > e5 && (e5 = s4, a3 = c3);
  }
  return et(n5, o3, a3), e5;
}
var d2 = n4();
function M(t2, r3, i, n5, o3) {
  G(t2, r3, d2, o3, n5);
  const s3 = ht(i, r3);
  d2[1] - m2 <= s3 && (n5[0] = void 0), d2[0] + m2 >= s3 && (o3[0] = void 0);
}
var F = n();
var T = n();
var v2 = n();
var E2 = n();
var p2 = n();
var z2 = n();
function Y(t2, r3, i, n5, o3, s3) {
  if (mt(r3) < m2) return;
  at(F, i, r3), at(T, n5, r3), at(v2, o3, r3), S2(t2, r3, d2), p2[1] = d2[0], E2[1] = d2[1], z2[1] = E2[1] - p2[1];
  const e5 = [i, n5, o3], a3 = [F, T, v2];
  for (let c3 = 0; c3 < 3; ++c3) {
    S2(t2, e5[c3], d2), p2[0] = d2[0], E2[0] = d2[1], S2(t2, a3[c3], d2), p2[2] = d2[0], E2[2] = d2[1], z2[0] = E2[0] - p2[0], z2[2] = E2[2] - p2[2];
    const i2 = it(z2);
    i2 < s3.quality && (et(s3.b0, e5[c3]), et(s3.b1, r3), et(s3.b2, a3[c3]), s3.quality = i2);
  }
}
var _ = n();
function S2(t2, r3, i) {
  const { data: n5, size: o3 } = t2;
  i[0] = Number.POSITIVE_INFINITY, i[1] = Number.NEGATIVE_INFINITY;
  for (let s3 = 0; s3 < n5.length; s3 += o3) {
    const t3 = n5[s3] * r3[0] + n5[s3 + 1] * r3[1] + n5[s3 + 2] * r3[2];
    i[0] = Math.min(i[0], t3), i[1] = Math.max(i[1], t3);
  }
}
function G(t2, r3, i, n5, o3) {
  const { data: s3, size: e5 } = t2;
  et(n5, s3), et(o3, n5), i[0] = ht(_, r3), i[1] = i[0];
  for (let a3 = e5; a3 < s3.length; a3 += e5) {
    const t3 = s3[a3] * r3[0] + s3[a3 + 1] * r3[1] + s3[a3 + 2] * r3[2];
    t3 < i[0] && (i[0] = t3, et(n5, s3, a3)), t3 > i[1] && (i[1] = t3, et(o3, s3, a3));
  }
}
function O(t2, i, n5) {
  n5.center = t2, n5.halfSize = x(i, i, 0.5), n5.quaternion = r2;
}
var B = n();
var k2 = n();
var C2 = n();
var D = n();
var H2 = n();
var J = n();
function K(t2, r3, i) {
  et(B, r3), Math.abs(r3[0]) > Math.abs(r3[1]) && Math.abs(r3[0]) > Math.abs(r3[2]) ? B[0] = 0 : Math.abs(r3[1]) > Math.abs(r3[2]) ? B[1] = 0 : B[2] = 0, mt(B) < m2 && (B[0] = B[1] = B[2] = 1), at(k2, r3, B), ct(k2, k2), at(C2, r3, k2), ct(C2, C2), L(t2, r3, k2, C2, D, H2), ot(J, H2, D), Z2(r3, k2, C2, D, H2, J, i);
}
function L(t2, r3, i, n5, o3, s3) {
  S2(t2, r3, d2), o3[0] = d2[0], s3[0] = d2[1], S2(t2, i, d2), o3[1] = d2[0], s3[1] = d2[1], S2(t2, n5, d2), o3[2] = d2[0], s3[2] = d2[1];
}
var Q2 = n();
var R = n();
var U = n();
var W = n2(1, 0, 0, 0, 1, 0, 0, 0, 1);
var X = e4();
function Z2(t2, r3, i, n5, e5, a3, c3) {
  W[0] = t2[0], W[1] = t2[1], W[2] = t2[2], W[3] = r3[0], W[4] = r3[1], W[5] = r3[2], W[6] = i[0], W[7] = i[1], W[8] = i[2], c3.quaternion = ut(X, W), nt(Q2, n5, e5), st(Q2, Q2, 0.5), st(R, t2, Q2[0]), st(U, r3, Q2[1]), nt(R, R, U), st(U, i, Q2[2]), c3.center = c(R, R, U), c3.halfSize = x(Q2, a3, 0.5);
}
var $ = 7;
var tt = class {
  constructor(t2) {
    this.minVert = new Array($), this.maxVert = new Array($);
    const r3 = 64 * $;
    this.buffer = new ArrayBuffer(r3);
    let i = 0;
    this.minProj = new Float64Array(this.buffer, i, $), i += 8 * $, this.maxProj = new Float64Array(this.buffer, i, $), i += 8 * $;
    for (let a3 = 0; a3 < $; ++a3) this.minVert[a3] = new Float64Array(this.buffer, i, 3), i += 24;
    for (let a3 = 0; a3 < $; ++a3) this.maxVert[a3] = new Float64Array(this.buffer, i, 3), i += 24;
    for (let a3 = 0; a3 < $; ++a3) this.minProj[a3] = Number.POSITIVE_INFINITY, this.maxProj[a3] = Number.NEGATIVE_INFINITY;
    const n5 = new Array($), o3 = new Array($), { data: s3, size: e5 } = t2;
    for (let a3 = 0; a3 < s3.length; a3 += e5) {
      let t3 = s3[a3];
      t3 < this.minProj[0] && (this.minProj[0] = t3, n5[0] = a3), t3 > this.maxProj[0] && (this.maxProj[0] = t3, o3[0] = a3), t3 = s3[a3 + 1], t3 < this.minProj[1] && (this.minProj[1] = t3, n5[1] = a3), t3 > this.maxProj[1] && (this.maxProj[1] = t3, o3[1] = a3), t3 = s3[a3 + 2], t3 < this.minProj[2] && (this.minProj[2] = t3, n5[2] = a3), t3 > this.maxProj[2] && (this.maxProj[2] = t3, o3[2] = a3), t3 = s3[a3] + s3[a3 + 1] + s3[a3 + 2], t3 < this.minProj[3] && (this.minProj[3] = t3, n5[3] = a3), t3 > this.maxProj[3] && (this.maxProj[3] = t3, o3[3] = a3), t3 = s3[a3] + s3[a3 + 1] - s3[a3 + 2], t3 < this.minProj[4] && (this.minProj[4] = t3, n5[4] = a3), t3 > this.maxProj[4] && (this.maxProj[4] = t3, o3[4] = a3), t3 = s3[a3] - s3[a3 + 1] + s3[a3 + 2], t3 < this.minProj[5] && (this.minProj[5] = t3, n5[5] = a3), t3 > this.maxProj[5] && (this.maxProj[5] = t3, o3[5] = a3), t3 = s3[a3] - s3[a3 + 1] - s3[a3 + 2], t3 < this.minProj[6] && (this.minProj[6] = t3, n5[6] = a3), t3 > this.maxProj[6] && (this.maxProj[6] = t3, o3[6] = a3);
    }
    for (let a3 = 0; a3 < $; ++a3) {
      let t3 = n5[a3];
      et(this.minVert[a3], s3, t3), t3 = o3[a3], et(this.maxVert[a3], s3, t3);
    }
  }
};
var rt = class {
  constructor() {
    this.b0 = r(1, 0, 0), this.b1 = r(0, 1, 0), this.b2 = r(0, 0, 1), this.quality = 0;
  }
};
function it(t2) {
  return t2[0] * t2[1] + t2[0] * t2[2] + t2[1] * t2[2];
}
function nt(t2, r3, i) {
  t2[0] = r3[0] + i[0], t2[1] = r3[1] + i[1], t2[2] = r3[2] + i[2];
}
function ot(t2, r3, i) {
  t2[0] = r3[0] - i[0], t2[1] = r3[1] - i[1], t2[2] = r3[2] - i[2];
}
function st(t2, r3, i) {
  t2[0] = r3[0] * i, t2[1] = r3[1] * i, t2[2] = r3[2] * i;
}
function et(t2, r3, i = 0) {
  t2[0] = r3[i], t2[1] = r3[i + 1], t2[2] = r3[i + 2];
}
function at(t2, r3, i) {
  const n5 = r3[0], o3 = r3[1], s3 = r3[2], e5 = i[0], a3 = i[1], c3 = i[2];
  t2[0] = o3 * c3 - s3 * a3, t2[1] = s3 * e5 - n5 * c3, t2[2] = n5 * a3 - o3 * e5;
}
function ct(t2, r3) {
  const i = r3[0] * r3[0] + r3[1] * r3[1] + r3[2] * r3[2];
  if (i > 0) {
    const n5 = 1 / Math.sqrt(i);
    t2[0] = r3[0] * n5, t2[1] = r3[1] * n5, t2[2] = r3[2] * n5;
  }
}
function mt(t2) {
  return t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2];
}
function ft(t2, r3) {
  const i = r3[0] - t2[0], n5 = r3[1] - t2[1], o3 = r3[2] - t2[2];
  return i * i + n5 * n5 + o3 * o3;
}
function ht(t2, r3) {
  return t2[0] * r3[0] + t2[1] * r3[1] + t2[2] * r3[2];
}
function ut(t2, r3) {
  const i = r3[0] + r3[4] + r3[8];
  if (i > 0) {
    let n5 = Math.sqrt(i + 1);
    t2[3] = 0.5 * n5, n5 = 0.5 / n5, t2[0] = (r3[5] - r3[7]) * n5, t2[1] = (r3[6] - r3[2]) * n5, t2[2] = (r3[1] - r3[3]) * n5;
  } else {
    let i2 = 0;
    r3[4] > r3[0] && (i2 = 1), r3[8] > r3[3 * i2 + i2] && (i2 = 2);
    const n5 = (i2 + 1) % 3, o3 = (i2 + 2) % 3;
    let s3 = Math.sqrt(r3[3 * i2 + i2] - r3[3 * n5 + n5] - r3[3 * o3 + o3] + 1);
    t2[i2] = 0.5 * s3, s3 = 0.5 / s3, t2[3] = (r3[3 * n5 + o3] - r3[3 * o3 + n5]) * s3, t2[n5] = (r3[3 * n5 + i2] + r3[3 * i2 + n5]) * s3, t2[o3] = (r3[3 * o3 + i2] + r3[3 * i2 + o3]) * s3;
  }
  return t2;
}

// node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js
var O2 = class _O {
  constructor(t2 = a, e5 = pt, a3 = r2) {
    this._data = [t2[0], t2[1], t2[2], e5[0], e5[1], e5[2], a3[0], a3[1], a3[2], a3[3]];
  }
  clone() {
    return _O.fromData(this._data);
  }
  invalidate() {
    this._data[3] = -1;
  }
  get isValid() {
    return this._data[3] >= 0;
  }
  static fromData(t2) {
    const e5 = new _O();
    return e5._copyFromData(t2), e5;
  }
  static fromJSON(t2) {
    return new _O(t2.center, t2.halfSize, t2.quaternion);
  }
  copy(t2) {
    this._copyFromData(t2.data);
  }
  _copyFromData(t2) {
    for (let e5 = 0; e5 < 10; ++e5) this._data[e5] = t2[e5];
  }
  get center() {
    return u2(c2.get(), this._data[0], this._data[1], this._data[2]);
  }
  get centerX() {
    return this._data[0];
  }
  get centerY() {
    return this._data[1];
  }
  get centerZ() {
    return this._data[2];
  }
  getCenter(t2) {
    return t2[0] = this._data[0], t2[1] = this._data[1], t2[2] = this._data[2], t2;
  }
  set center(t2) {
    this._data[0] = t2[0], this._data[1] = t2[1], this._data[2] = t2[2];
  }
  setCenter(t2, e5, a3) {
    this._data[0] = t2, this._data[1] = e5, this._data[2] = a3;
  }
  get halfSize() {
    return u2(c2.get(), this._data[3], this._data[4], this._data[5]);
  }
  get halfSizeX() {
    return this._data[3];
  }
  get halfSizeY() {
    return this._data[4];
  }
  get halfSizeZ() {
    return this._data[5];
  }
  getHalfSize(t2) {
    return t2[0] = this._data[3], t2[1] = this._data[4], t2[2] = this._data[5], t2;
  }
  set halfSize(t2) {
    this._data[3] = t2[0], this._data[4] = t2[1], this._data[5] = t2[2];
  }
  get quaternion() {
    return Z(o2.get(), this._data[6], this._data[7], this._data[8], this._data[9]);
  }
  get quaternionConjugate() {
    return Z(o2.get(), -this._data[6], -this._data[7], -this._data[8], this._data[9]);
  }
  getQuaternion(t2) {
    return t2[0] = this._data[6], t2[1] = this._data[7], t2[2] = this._data[8], t2[3] = this._data[9], t2;
  }
  set quaternion(t2) {
    this._data[6] = t2[0], this._data[7] = t2[1], this._data[8] = t2[2], this._data[9] = t2[3];
  }
  get data() {
    return this._data;
  }
  getCorners(t2) {
    const e5 = this._data, a3 = Z(T2, e5[6], e5[7], e5[8], e5[9]);
    for (let s3 = 0; s3 < 8; ++s3) {
      const r3 = t2[s3];
      r3[0] = (1 & s3 ? -1 : 1) * e5[3], r3[1] = (2 & s3 ? -1 : 1) * e5[4], r3[2] = (4 & s3 ? -1 : 1) * e5[5], Q(r3, r3, a3), r3[0] += e5[0], r3[1] += e5[1], r3[2] += e5[2];
    }
    return t2;
  }
  getAxes(t2) {
    const e5 = this._data, a3 = Z(T2, e5[6], e5[7], e5[8], e5[9]);
    return Q(t2[0], [1, 0, 0], a3), Q(t2[1], [0, 1, 0], a3), Q(t2[2], [0, 0, 1], a3), t2;
  }
  intersectsFrustum(t2) {
    const e5 = this.center, a3 = t2.planes;
    for (const f5 of a3) {
      const t3 = y(f5), a4 = this.projectedRadius(t3);
      if (A(t3, e5) + f5[3] - a4 > 0) return false;
    }
    const s3 = this.getAxes(lt), r3 = t2.points, i = this.halfSize;
    for (let f5 = 0; f5 < 3; ++f5) {
      const t3 = s3[f5], a4 = -A(t3, e5), n6 = i[f5];
      let o4 = true, h3 = true;
      for (const e6 of r3) {
        const s4 = A(e6, t3) + a4;
        o4 &&= s4 > n6, h3 &&= s4 < -n6;
      }
      if (o4 || h3) return false;
    }
    if (this.getCorners(ut2).some((e6) => t2.intersectsPoint(e6))) return true;
    const n5 = jt;
    for (let f5 = 0; f5 < 3; ++f5) {
      const t3 = s3[f5];
      n5[f5] = A(t3, e5);
    }
    const o3 = (t3) => {
      for (let e6 = 0; e6 < 3; ++e6) {
        const a4 = s3[e6], r4 = i[e6], o4 = A(a4, t3) - n5[e6];
        if (o4 > r4 || o4 < -r4) return false;
      }
      return true;
    };
    if (t2.points.some((t3) => o3(t3))) return true;
    const h2 = t2.lines, c3 = Mt;
    for (let f5 = 0; f5 < 8; ++f5) {
      const t3 = h2[f5].direction;
      for (const a4 of s3) {
        P(c3, t3, a4);
        const s4 = V(c3);
        if (!(s4 > 0)) continue;
        x(c3, c3, 1 / s4);
        const i2 = this.projectedRadius(c3), n6 = A(e5, c3), o4 = n6 - i2, h3 = n6 + i2;
        let f6 = false, _2 = false, g3 = true;
        for (const t4 of r3) {
          const e6 = A(c3, t4);
          if (e6 > h3) {
            if (_2) {
              g3 = false;
              break;
            }
            f6 = true;
          } else {
            if (!(e6 < o4)) {
              g3 = false;
              break;
            }
            if (f6) {
              g3 = false;
              break;
            }
            _2 = true;
          }
        }
        if (g3) return false;
      }
    }
    return true;
  }
  intersectsFrustumConservativeApproximation(t2) {
    return this.intersectPlane(t2[0]) <= 0 && this.intersectPlane(t2[1]) <= 0 && this.intersectPlane(t2[2]) <= 0 && this.intersectPlane(t2[3]) <= 0 && this.intersectPlane(t2[4]) <= 0 && this.intersectPlane(t2[5]) <= 0;
  }
  get radius() {
    const t2 = this._data[3], e5 = this._data[4], a3 = this._data[5];
    return Math.sqrt(t2 * t2 + e5 * e5 + a3 * a3);
  }
  intersectsPoint(t2) {
    const e5 = this.getAxes(lt), a3 = this.halfSize, { center: s3 } = this;
    for (let r3 = 0; r3 < 3; ++r3) {
      const i = e5[r3], n5 = a3[r3], o3 = A(i, t2) - A(i, s3);
      if (o3 > n5 || o3 < -n5) return false;
    }
    return true;
  }
  intersectSphere(t2) {
    const { center: e5, radius: a3 } = t2, s3 = this._data, r3 = s3[3], i = s3[4], n5 = s3[5], o3 = r3 + i + n5 + a3, h2 = s3[0] - e5[0];
    if (Math.abs(h2) > o3) return false;
    const c3 = s3[1] - e5[1];
    if (Math.abs(c3) > o3) return false;
    const f5 = s3[2] - e5[2];
    if (Math.abs(f5) > o3) return false;
    const d3 = -s3[6], u4 = -s3[7], l3 = -s3[8], m3 = u4 * f5 - l3 * c3, _2 = l3 * h2 - d3 * f5, g3 = d3 * c3 - u4 * h2, p3 = u4 * g3 - l3 * _2, b2 = l3 * m3 - d3 * g3, M2 = d3 * _2 - u4 * m3, j2 = 2 * s3[9], S3 = Math.abs(h2 + m3 * j2 + 2 * p3), z3 = Math.abs(c3 + _2 * j2 + 2 * b2), x3 = Math.abs(f5 + g3 * j2 + 2 * M2), y3 = S3 - Math.min(S3, r3), C3 = z3 - Math.min(z3, i), q2 = x3 - Math.min(x3, n5);
    return y3 * y3 + C3 * C3 + q2 * q2 <= a3 * a3;
  }
  intersectSphereWithMBS(t2, e5 = this.radius) {
    const a3 = this._data, { center: s3, radius: r3 } = t2, i = e5 + r3, n5 = a3[0] - s3[0];
    if (n5 > i) return false;
    const o3 = a3[1] - s3[1];
    if (o3 > i) return false;
    const h2 = a3[2] - s3[2];
    if (h2 > i) return false;
    if (n5 * n5 + o3 * o3 + h2 * h2 > i * i) return false;
    const c3 = -a3[6], f5 = -a3[7], d3 = -a3[8], u4 = f5 * h2 - d3 * o3, l3 = d3 * n5 - c3 * h2, m3 = c3 * o3 - f5 * n5, _2 = f5 * m3 - d3 * l3, g3 = d3 * u4 - c3 * m3, p3 = c3 * l3 - f5 * u4, b2 = 2 * a3[9], M2 = Math.abs(n5 + u4 * b2 + 2 * _2), j2 = Math.abs(o3 + l3 * b2 + 2 * g3), S3 = Math.abs(h2 + m3 * b2 + 2 * p3), z3 = M2 - Math.min(M2, a3[3]), x3 = j2 - Math.min(j2, a3[4]), y3 = S3 - Math.min(S3, a3[5]);
    return z3 * z3 + x3 * x3 + y3 * y3 < r3 * r3;
  }
  intersectPlane(t2) {
    const e5 = t2[0] * this._data[0] + t2[1] * this._data[1] + t2[2] * this._data[2] + t2[3], a3 = this.projectedRadius(y(t2));
    return e5 > a3 ? 1 : e5 < -a3 ? -1 : 0;
  }
  intersectRay(t2, e5, a3 = 0) {
    const s3 = this._data, r3 = T2;
    r3[0] = -s3[6], r3[1] = -s3[7], r3[2] = -s3[8], r3[3] = s3[9], E3[0] = t2[0] - s3[0], E3[1] = t2[1] - s3[1], E3[2] = t2[2] - s3[2];
    const i = Q(E3, E3, T2), n5 = Q(I2, e5, T2);
    let o3 = -1 / 0, h2 = 1 / 0;
    const c3 = this.getHalfSize(ct2);
    for (let f5 = 0; f5 < 3; f5++) {
      const t3 = i[f5], e6 = n5[f5], s4 = c3[f5] + a3;
      if (Math.abs(e6) > 1e-6) {
        const a4 = (s4 - t3) / e6, r4 = (-s4 - t3) / e6;
        o3 = Math.max(o3, Math.min(a4, r4)), h2 = Math.min(h2, Math.max(a4, r4));
      } else if (t3 > s4 || t3 < -s4) return false;
    }
    return o3 <= h2;
  }
  projectedArea(a3, s3, r3, n5) {
    const o3 = this.getQuaternion(X2);
    S(T2, o3), E3[0] = a3[0] - this._data[0], E3[1] = a3[1] - this._data[1], E3[2] = a3[2] - this._data[2], Q(E3, E3, T2);
    const h2 = this.getHalfSize(ct2), d3 = E3[0] < -h2[0] ? -1 : E3[0] > h2[0] ? 1 : 0, u4 = E3[1] < -h2[1] ? -1 : E3[1] > h2[1] ? 1 : 0, l3 = E3[2] < -h2[2] ? -1 : E3[2] > h2[2] ? 1 : 0, m3 = Math.abs(d3) + Math.abs(u4) + Math.abs(l3);
    if (0 === m3) return 1 / 0;
    const p3 = 1 === m3 ? 4 : 6, b2 = 6 * (d3 + 3 * u4 + 9 * l3 + 13);
    p(ft2, o3), f(ft2, ft2, h2);
    const M2 = this.getCenter(ot2);
    for (let t2 = 0; t2 < p3; t2++) {
      const e5 = K2[b2 + t2];
      u2(E3, ((1 & e5) << 1) - 1, (2 & e5) - 1, ((4 & e5) >> 1) - 1), N2(E3, E3, ft2), c(J2, M2, E3), J2[3] = 1, z(J2, J2, s3);
      const a4 = 1 / Math.max(1e-6, J2[3]);
      V3[2 * t2] = J2[0] * a4, V3[2 * t2 + 1] = J2[1] * a4;
    }
    const j2 = 2 * p3 - 2;
    let S3 = V3[0] * (V3[3] - V3[j2 + 1]) + V3[j2] * (V3[1] - V3[j2 - 1]);
    for (let t2 = 2; t2 < j2; t2 += 2) S3 += V3[t2] * (V3[t2 + 3] - V3[t2 - 1]);
    return Math.abs(S3) * r3 * n5 * 0.125;
  }
  projectedRadius(t2) {
    const e5 = this.getQuaternion(X2);
    return S(T2, e5), Q(E3, t2, T2), Math.abs(E3[0] * this._data[3]) + Math.abs(E3[1] * this._data[4]) + Math.abs(E3[2] * this._data[5]);
  }
  minimumDistancePlane(t2) {
    return t2[0] * this._data[0] + t2[1] * this._data[1] + t2[2] * this._data[2] + t2[3] - this.projectedRadius(y(t2));
  }
  maximumDistancePlane(t2) {
    return t2[0] * this._data[0] + t2[1] * this._data[1] + t2[2] * this._data[2] + t2[3] + this.projectedRadius(y(t2));
  }
  toAaBoundingBox(e5) {
    const a3 = this.getQuaternion(X2), s3 = p(ft2, a3), r3 = this._data[3] * Math.abs(s3[0]) + this._data[4] * Math.abs(s3[3]) + this._data[5] * Math.abs(s3[6]), i = this._data[3] * Math.abs(s3[1]) + this._data[4] * Math.abs(s3[4]) + this._data[5] * Math.abs(s3[7]), n5 = this._data[3] * Math.abs(s3[2]) + this._data[4] * Math.abs(s3[5]) + this._data[5] * Math.abs(s3[8]);
    e5[0] = this._data[0] - r3, e5[1] = this._data[1] - i, e5[2] = this._data[2] - n5, e5[3] = this._data[0] + r3, e5[4] = this._data[1] + i, e5[5] = this._data[2] + n5;
  }
  transform(t2, e5, a3, s3 = 0, r3 = u(a3), i = u(e5), n5 = C(e5, i)) {
    if (a3 === r3) e5.isGeographic ? st2(this, t2, e5, s3, i) : at2(this, t2, e5, s3, i, n5);
    else if (e5.isGeographic && (a3.isWebMercator || k(a3))) $2(e5, this, a3, t2, s3);
    else if (e5.isWebMercator && k(a3)) tt2(e5, this, a3, t2, s3);
    else {
      const r4 = this.getCenter(ot2);
      r4[2] += s3, o(r4, e5, 0, r4, a3, 0), t2.center = r4, this !== t2 && (t2.quaternion = this.getQuaternion(X2), t2.halfSize = this.getHalfSize(ct2));
    }
  }
};
var T2 = e4();
var X2 = e4();
var Y2 = e4();
var E3 = n();
var I2 = n();
var J2 = n3();
function N4(t2, e5 = new O2()) {
  return u3(t2, e5), e5;
}
var V3 = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2];
var K2 = (() => {
  const t2 = new Int8Array(162);
  let e5 = 0;
  const a3 = (a4) => {
    for (let s3 = 0; s3 < a4.length; s3++) t2[e5 + s3] = a4[s3];
    e5 += 6;
  };
  return a3([6, 2, 3, 1, 5, 4]), a3([0, 2, 3, 1, 5, 4]), a3([0, 2, 3, 7, 5, 4]), a3([0, 1, 3, 2, 6, 4]), a3([0, 1, 3, 2, 0, 0]), a3([0, 1, 5, 7, 3, 2]), a3([0, 1, 3, 7, 6, 4]), a3([0, 1, 3, 7, 6, 2]), a3([0, 1, 5, 7, 6, 2]), a3([0, 1, 5, 4, 6, 2]), a3([0, 1, 5, 4, 0, 0]), a3([0, 1, 3, 7, 5, 4]), a3([0, 2, 6, 4, 0, 0]), a3([0, 0, 0, 0, 0, 0]), a3([1, 3, 7, 5, 0, 0]), a3([2, 3, 7, 6, 4, 0]), a3([2, 3, 7, 6, 0, 0]), a3([2, 3, 1, 5, 7, 6]), a3([0, 1, 5, 7, 6, 2]), a3([0, 1, 5, 7, 6, 4]), a3([0, 1, 3, 7, 6, 4]), a3([4, 5, 7, 6, 2, 0]), a3([4, 5, 7, 6, 0, 0]), a3([4, 5, 1, 3, 7, 6]), a3([0, 2, 3, 7, 5, 4]), a3([6, 2, 3, 7, 5, 4]), a3([6, 2, 3, 1, 5, 4]), t2;
})();
function L2(t2, e5, a3, s3, r3) {
  const n5 = t2.getQuaternion(X2);
  r3.quaternion = n5, S(T2, n5);
  const o3 = t2.getCenter(ot2), h2 = t2.getHalfSize(ct2);
  if (1 === s3) {
    Q(mt2, o3, T2), f2(_t, mt2), l(gt, _t, h2), H(gt, _t, gt);
    const s4 = a2(gt);
    c(gt, _t, h2);
    const i = a2(gt);
    if (s4 < a3) r3.center = o3, u2(mt2, a3, a3, a3), r3.halfSize = c(mt2, h2, mt2);
    else {
      const n6 = i > 0 ? 1 + e5 / i : 1, o4 = s4 > 0 ? 1 + a3 / s4 : 1, c3 = (o4 + n6) / 2, d3 = (o4 - n6) / 2;
      x(gt, _t, d3), r3.halfSize = g(gt, gt, h2, c3), x(gt, _t, c3), g(gt, gt, h2, d3), m(mt2, mt2), s(mt2, gt, mt2);
      const u4 = t2.getQuaternion(Y2);
      r3.center = Q(mt2, mt2, u4);
    }
  } else {
    r3.center = g(mt2, o3, N, (a3 + e5) / 2);
    const t3 = Q(mt2, N, T2);
    f2(t3, t3), r3.halfSize = g(_t, h2, t3, (a3 - e5) / 2);
  }
  return r3;
}
function $2(t2, e5, a3, s3, r3) {
  e5.getCenter(ot2), ot2[2] += r3;
  const i = u(a3);
  o(ot2, t2, 0, ot2, i, 0), et2(i, e5, ot2, a3, s3);
}
function tt2(t2, e5, a3, s3, r3) {
  e5.getCenter(ot2), ot2[2] += r3, et2(t2, e5, ot2, a3, s3);
}
function et2(e5, a3, s3, r3, i) {
  const n5 = a3.getQuaternion(X2), o3 = p(ft2, n5), h2 = a3.getHalfSize(ct2);
  for (let t2 = 0; t2 < 8; ++t2) {
    for (let e6 = 0; e6 < 3; ++e6) nt2[e6] = h2[e6] * (t2 & 1 << e6 ? -1 : 1);
    for (let e6 = 0; e6 < 3; ++e6) {
      let a4 = s3[e6];
      for (let t3 = 0; t3 < 3; ++t3) a4 += nt2[t3] * o3[3 * t3 + e6];
      rt2[3 * t2 + e6] = a4;
    }
  }
  o(rt2, e5, 0, rt2, r3, 0, 8), N4(it2, i);
}
function at2(t2, e5, a3, s3, r3 = u(a3), o3 = C(a3, r3)) {
  t2.getCorners(ut2), t2.getCenter(nt2), nt2[2] += s3, f3(a3, nt2, dt, r3), e5.setCenter(dt[12], dt[13], dt[14]);
  const h2 = 2 * Math.sqrt(1 + dt[0] + dt[5] + dt[10]);
  T2[0] = (dt[6] - dt[9]) / h2, T2[1] = (dt[8] - dt[2]) / h2, T2[2] = (dt[1] - dt[4]) / h2, T2[3] = 0.25 * h2;
  const d3 = t2.getQuaternion(X2);
  e5.quaternion = v(T2, T2, d3), S(T2, T2), u2(_t, 0, 0, 0);
  const u4 = e5.getCenter(ht2);
  for (const i of ut2) i[2] += s3, o3(i, 0, i, 0), H(mt2, i, u4), Q(mt2, mt2, T2), f2(mt2, mt2), d(_t, _t, mt2);
  e5.halfSize = _t;
}
function st2(t2, e5, a3, s3, r3 = u(a3)) {
  const n5 = E(a3), o3 = 1 + Math.max(0, s3) / (n5.radius + t2.centerZ);
  t2.getCenter(nt2), nt2[2] += s3, o(nt2, a3, 0, nt2, r3, 0), e5.center = nt2;
  const h2 = t2.getQuaternion(X2);
  e5.quaternion = h2, S(T2, h2), u2(mt2, 0, 0, 1), Q(mt2, mt2, T2);
  const d3 = t2.getHalfSize(ct2);
  u2(mt2, d3[0] * Math.abs(mt2[0]), d3[1] * Math.abs(mt2[1]), d3[2] * Math.abs(mt2[2])), x(mt2, mt2, n5.inverseFlattening), c(mt2, d3, mt2), e5.halfSize = x(mt2, mt2, o3);
}
var rt2 = new Array(24);
var it2 = new s2(rt2, 3);
var nt2 = n();
var ot2 = n();
var ht2 = n();
var ct2 = n();
var ft2 = e2();
var dt = e3();
var ut2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
var lt = [n(), n(), n()];
var mt2 = n();
var _t = n();
var gt = n();
var pt = e(-1, -1, -1);
var Mt = n();
var jt = [0, 0, 0];

export {
  s2 as s,
  t,
  O2 as O,
  L2 as L
};
//# sourceMappingURL=chunk-DBTV7T3O.js.map
