import {
  g as g2
} from "./chunk-G6Z7GZKS.js";
import {
  a,
  c,
  d as d2,
  f,
  l as l3,
  s
} from "./chunk-6EWCUMLH.js";
import {
  b as b2,
  j as j3,
  q as q2
} from "./chunk-OZ4UTONJ.js";
import {
  w
} from "./chunk-JU72IZ4F.js";
import {
  J,
  O,
  R,
  U,
  W as W2,
  X,
  k,
  v as v3,
  y
} from "./chunk-G4CWCLTJ.js";
import {
  p as p4
} from "./chunk-KEB6LZZ5.js";
import {
  u
} from "./chunk-UMSS7GXZ.js";
import {
  A,
  C,
  F,
  H,
  P,
  W,
  _ as _3,
  e as e3,
  g,
  j as j2,
  o as o3,
  p as p3,
  u as u2,
  v as v2
} from "./chunk-YM62CGUL.js";
import {
  l as l2,
  n as n3,
  r as r2
} from "./chunk-ULRT2MRD.js";
import {
  n as n2
} from "./chunk-IXOUFXRS.js";
import {
  _ as _2,
  o as o2
} from "./chunk-XA4KTSOB.js";
import {
  i
} from "./chunk-RTWZV6QR.js";
import {
  N as N2,
  n,
  r,
  t
} from "./chunk-MLBRAI7B.js";
import {
  B,
  E,
  _,
  b,
  d,
  e as e2,
  j,
  o,
  p,
  q
} from "./chunk-EFJUSEVJ.js";
import {
  p as p2,
  v
} from "./chunk-QK7JX7UE.js";
import {
  e
} from "./chunk-7RKO4CUB.js";
import {
  l,
  m
} from "./chunk-ZILR7JK7.js";
import {
  N,
  h
} from "./chunk-KWV5EQET.js";

// node_modules/@arcgis/core/views/support/geometry3dUtils.js
function E2({ start: t2, end: n4, type: e4 }, i2, u3) {
  const a2 = [], f2 = e2(nt, n4, t2), m3 = e2(st, t2, i2), d3 = p(f2), h2 = 2 * j(f2, m3), l4 = h2 * h2 - 4 * d3 * (p(m3) - u3 * u3);
  if (0 === l4) {
    const r3 = -h2 / (2 * d3);
    (0 === e4 || r3 >= 0) && a2.push(d(n3(), t2, f2, r3));
  } else if (l4 > 0) {
    const r3 = Math.sqrt(l4), n5 = (-h2 + r3) / (2 * d3);
    (0 === e4 || n5 >= 0) && a2.push(d(n3(), t2, f2, n5));
    const o4 = (-h2 - r3) / (2 * d3);
    (0 === e4 || o4 >= 0) && a2.push(d(n3(), t2, f2, o4));
  }
  return a2;
}
function F2(t2, n4) {
  const s2 = t2.start, c2 = t2.end, i2 = e2(nt, c2, s2), u3 = u2(ot, -i2[1], i2[0], 0), a2 = n4.start, f2 = n4.end, p5 = H(ct, f2, a2), m3 = A(p5, u3), d3 = u2(it, s2[0], s2[1], 0), j4 = H(ut, d3, a2), M = A(j4, u3), g3 = e();
  if (Math.abs(m3) < g3) return Math.abs(M), [];
  const x = g(at, a2, p5, M / m3);
  if (0 === n4.type) {
    const t3 = H(ft, x, a2);
    if (A(t3, p5) < -g3) return [];
  }
  if (1 === t2.type) {
    const t3 = B(st, x, s2);
    if (j(t3, i2) < -g3) return [];
  }
  return [t(x)];
}
function G(t2, r3) {
  return V2(Y(mt, r3[2], t2), r3);
}
function H2(t2, r3) {
  const n4 = 0;
  return T(Y(mt, n4, t2), Y(dt, n4, r3)).map(([t3, r4]) => r2(t3, r4));
}
function I(t2, r3, n4) {
  return O2(t2, Y(mt, t2[2], r3), n4);
}
function K(t2, e4, o4, c2 = n()) {
  const i2 = e2(nt, t2, e4), u3 = q(i2);
  return d(c2, e4, i2, 0 === u3 ? 1 : o4 / u3), c2[2] = t2[2], c2;
}
function O2(t2, { start: r3, end: n4, type: s2 }, e4 = n()) {
  const o4 = H(et, t2, r3), c2 = H(ot, n4, r3), i2 = A(o4, c2) / A(c2, c2);
  return g(e4, r3, c2, 0 === s2 ? Math.max(i2, 0) : i2);
}
var R2 = (() => {
  const t2 = n(), r3 = n(), n4 = n();
  return ({ start: s2, end: e4 }, { center: o4, radius: c2, normal: i2, slicePlane: a2 }) => {
    const f2 = U(o4, i2, pt);
    if ($(W2(f2, s2), 0) && $(W2(f2, e4), 0)) {
      p4(i2, t2, r3);
      const f3 = (s3, e5) => (e3(n4, e5, o4), o(s3, A(n4, t2), A(n4, r3)), s3), p6 = g2({ start: f3(nt, s2), end: f3(st, e4), type: 1 }, l2, c2), m3 = [];
      for (const [n5, s3] of p6) {
        const e5 = o3(n(), o4);
        g(e5, e5, t2, n5), g(e5, e5, r3, s3), a2 && !tt(a2, e5) || m3.push(e5);
      }
      return m3;
    }
    const p5 = n();
    return J(f2, s2, e4, p5) ? !$(p3(p5, o4), c2) || a2 && !tt(a2, p5) ? [] : [p5] : [];
  };
})();
function S({ start: t2, end: n4, type: s2 }, e4, i2) {
  const u3 = [], a2 = e3(et, n4, t2), f2 = e2(st, t2, e4), p5 = p(a2), m3 = 2 * j(a2, f2), d3 = m3 * m3 - 4 * p5 * (p(f2) - i2 * i2);
  if (0 === d3) {
    const r3 = -m3 / (2 * p5);
    (1 === s2 || r3 >= 0) && u3.push(g(n(), t2, a2, r3));
  } else if (d3 > 0) {
    const r3 = Math.sqrt(d3), n5 = (-m3 + r3) / (2 * p5);
    (1 === s2 || n5 >= 0) && u3.push(g(n(), t2, a2, n5));
    const e5 = (-m3 - r3) / (2 * p5);
    (1 === s2 || e5 >= 0) && u3.push(g(n(), t2, a2, e5));
  }
  return u3;
}
function T(t2, r3) {
  const n4 = t2.start, s2 = t2.end, e4 = r3.start, o4 = r3.end, c2 = H(et, s2, n4), i2 = H(ot, o4, e4), u3 = H(ct, e4, n4), a2 = P(it, c2, i2);
  if (!$(A(u3, a2), 0)) return [];
  const f2 = W(a2);
  if ($(f2, 0)) return [];
  const p5 = P(ut, u3, i2), m3 = A(p5, a2) / f2, d3 = g(at, n4, c2, m3);
  if (0 === t2.type) {
    const t3 = H(ft, d3, n4);
    if (A(c2, t3) < -e()) return [];
  }
  if (0 === r3.type) {
    const t3 = H(ft, d3, e4);
    if (A(i2, t3) < -e()) return [];
  }
  return [t(d3)];
}
function V2({ start: t2, end: r3, type: n4 }, s2) {
  const e4 = H(et, s2, t2), o4 = H(ot, r3, t2), c2 = P(ct, o4, e4), i2 = W(c2) / W(o4), u3 = e();
  if (i2 < u3) switch (n4) {
    case 1:
      return [t(s2)];
    case 0:
      return A(o4, e4) < -u3 ? [] : [t(s2)];
  }
  return [];
}
function X2(t2, r3, n4, s2) {
  const [e4, o4] = t2, [c2, u3] = n4, a2 = c2 - e4, f2 = u3 - o4, p5 = a2 * a2 + f2 * f2, d3 = Math.sqrt(p5);
  if (d3 > r3 + s2) return [];
  if (d3 < Math.abs(r3 - s2)) return [];
  if ($(d3, 0) && $(r3, s2)) return [];
  const h2 = (r3 * r3 - s2 * s2 + p5) / (2 * d3), l4 = Math.sqrt(r3 * r3 - h2 * h2), y2 = l4 * f2 / d3, b3 = l4 * a2 / d3, [j4, M] = _(nt, t2, n4, h2 / d3);
  return $(y2, b3) ? [r2(j4, M)] : [r2(j4 + y2, M - b3), r2(j4 - y2, M + b3)];
}
function Y(t2, r3, { start: n4, end: s2, type: e4 }) {
  return u2(t2.start, n4[0], n4[1], r3), u2(t2.end, s2[0], s2[1], r3), t2.type = rt[e4], t2;
}
function Z(t2, r3) {
  return $(t2[2], r3[2]);
}
function $(r3, n4) {
  return m(Math.abs(r3 - n4), 0, e());
}
function _4(t2, r3) {
  return r3.filter((r4) => tt(t2, r4));
}
function tt(t2, r3) {
  return O(t2, r3);
}
var rt = { 0: 1, 1: 0 };
var nt = n3();
var st = n3();
var et = n();
var ot = n();
var ct = n();
var it = n();
var ut = n();
var at = n();
var ft = n();
var pt = v3();
var mt = { start: n(), end: n(), type: 1 };
var dt = { start: n(), end: n(), type: 1 };

// node_modules/@arcgis/core/views/interactive/sketch/constraints.js
var ft2 = class {
  intersect(t2) {
    return Vt(this, t2);
  }
  closestPoints(t2) {
    return [this.closestTo(t2)];
  }
};
var dt2 = class extends ft2 {
  constructor(t2) {
    super(), this.point = t2;
  }
  equals(t2) {
    return this === t2 || ge(t2) && C(this.point, t2.point);
  }
  closestTo() {
    return d2(this.point);
  }
};
var pt2 = class extends ft2 {
  constructor(t2, e4, r3) {
    super(), this.start = t2, this.end = e4, this.lineLike = { start: t2, end: e4, type: r3 };
  }
  equals(t2) {
    return this === t2 || _e(t2) && this.lineLike.type === t2.lineLike.type && C(this.start, t2.start) && C(this.end, t2.end);
  }
  closestTo(t2) {
    const e4 = f();
    return O2(t2, this.lineLike, e4), e4;
  }
};
var mt2 = class extends pt2 {
  constructor(t2, e4) {
    super(t2, e4, 1);
  }
};
var gt = class extends ft2 {
  constructor(t2, e4) {
    super(), this.start = t2, this.curve = e4;
  }
  closestTo(t2) {
    const { curvePoint: e4, t: r3 } = u(this.start, this.curve, t2), s2 = v(this.curve)[2] ?? 0, n4 = this.start[2] * (1 - r3) + s2 * r3;
    return l3(e4[0], e4[1], n4);
  }
  equals(t2) {
    return this === t2 || xe(t2) && C(this.start, t2.start) && p2(this.curve, t2.curve);
  }
};
var _t = class extends pt2 {
  constructor(t2, e4) {
    super(t2, e4, 0);
  }
};
var xt = class extends ft2 {
  constructor(t2) {
    super(), this.constraints = t2;
  }
  equals(t2) {
    return this === t2 || me(t2) && h(this.constraints, t2.constraints, (t3, e4) => t3.equals(e4));
  }
  closestTo(t2) {
    let e4, r3 = 1 / 0;
    for (const s2 of this.constraints) {
      const n4 = s2.closestTo(t2), i2 = v2(t2, n4);
      i2 < r3 && (r3 = i2, e4 = n4);
    }
    return d2(e4 ?? t2);
  }
  closestPoints(t2) {
    return this.constraints.flatMap((e4) => e4 === this ? [] : e4.closestPoints(t2));
  }
};
var Lt = class extends ft2 {
  constructor(t2, e4) {
    super(), this.center = t2, this.radius = e4;
  }
  equals(t2) {
    return this === t2 || ye(t2) && this.center[0] === t2.center[0] && this.center[1] === t2.center[1] && this.radius === t2.radius;
  }
  closestTo(t2) {
    const e4 = f();
    return K(t2, this.center, this.radius, e4), e4;
  }
};
var kt = class extends ft2 {
  constructor(t2, e4) {
    super(), this.center = t2, this.radius = e4;
  }
  equals(t2) {
    return this === t2 || ve(t2) && C(this.center, t2.center) && this.radius === t2.radius;
  }
  closestTo(t2) {
    const e4 = f();
    return K(t2, this.center, this.radius, e4), e4[2] = this.center[2], e4;
  }
  asCircle() {
    return new yt(d2(this.center), this.radius, a(0, 0, 1));
  }
};
var yt = class extends ft2 {
  constructor(t2, e4, r3, s2) {
    super(), this.center = t2, this.radius = e4, this.normal = r3, this.slicePlane = s2;
  }
  equals(t2) {
    return this === t2 || ze(t2) && C(this.center, t2.center) && C(this.normal, t2.normal) && this.radius === t2.radius;
  }
  closestTo(t2) {
    const { center: e4, radius: r3 } = this;
    R(this.getPlane(zt), t2, vt);
    const s2 = H(vt, vt, e4), n4 = j2(s2);
    if ($(n4, 0)) return d2(t2);
    const i2 = r3 / Math.sqrt(n4), o4 = f();
    g(o4, e4, s2, i2);
    const { slicePlane: c2 } = this;
    if (c2 && !tt(c2, o4)) {
      const e5 = Jt(c2, this);
      return e5?.closestTo(t2) ?? d2(t2);
    }
    return o4;
  }
  getPlane(t2 = v3()) {
    return U(this.center, this.normal, t2);
  }
};
var vt = n();
var zt = v3();
var Mt = class extends ft2 {
  constructor(t2) {
    super(), this.z = t2;
  }
  equals(t2) {
    return this === t2 || Le(t2) && this.z === t2.z;
  }
  closestTo(t2) {
    return a(t2[0], t2[1], this.z);
  }
  getPlane(t2 = v3()) {
    return u2(Pt, 0, 0, this.z), U(Pt, N2, t2);
  }
};
var Pt = n();
var qt = class extends ft2 {
  constructor(t2, e4, r3) {
    super(), this.start = t2, this.end = e4, this.planeLike = { start: s(t2), end: s(e4), type: r3 };
  }
  equals(t2) {
    return this === t2 || ke(t2) && this.planeLike.type === t2.planeLike.type && C(this.start, t2.start) && C(this.end, t2.end);
  }
  closestTo(t2) {
    const e4 = f();
    return I(t2, this.planeLike, e4), e4;
  }
  closestEndTo(t2) {
    const { start: e4, end: r3 } = this.planeLike;
    return Math.sign(j(e2(Tt, r3, e4), e2(wt, s(t2), e4))) > 0 ? this.end : this.start;
  }
  getPlane(t2 = v3()) {
    const e4 = o3(jt, this.end);
    return e4[2] += 1, k(this.start, this.end, e4, t2);
  }
  getSlicePlane(t2 = v3()) {
    const { start: e4, end: r3, type: s2 } = this.planeLike;
    if (0 === s2) return;
    const n4 = u2(jt, e4[0], e4[1], 0), i2 = u2(Dt, r3[0], r3[1], 0), o4 = e3(Dt, i2, n4);
    return U(n4, o4, t2), t2;
  }
};
var Tt = n3();
var wt = n3();
var jt = n();
var Dt = n();
var bt = class extends qt {
  constructor(t2, e4) {
    super(t2, e4, 1);
  }
};
var Rt = class extends qt {
  constructor(t2, e4) {
    super(t2, e4, 0);
  }
};
var At = class extends ft2 {
  constructor(t2, e4) {
    super(), this.sphere = new w(t2, e4), this._center = t(t2);
  }
  equals(t2) {
    return this === t2 || Me(t2) && this.sphere.exactEquals(t2.sphere);
  }
  closestTo(t2) {
    const e4 = f();
    return this.sphere.projectPoint(t2, e4), e4;
  }
  get center() {
    return this._center;
  }
  get radius() {
    return this.sphere.radius;
  }
};
var Ut = class extends ft2 {
  constructor(t2, e4, r3) {
    super(), this.start = t2, this.end = e4, this.getZ = r3, this.planeLike = { start: s(t2), end: s(e4), type: 0 };
  }
  equals(t2) {
    return this === t2 || Pe(t2) && C(this.start, t2.start) && C(this.end, t2.end) && this.getZ === t2.getZ;
  }
  closestTo(t2) {
    return Gt(this, t2);
  }
  addIfOnTheGround(t2, e4) {
    for (const r3 of e4) {
      const e5 = this.getZ(r3[0], r3[1]) ?? 0;
      $(r3[2], e5) && (r3[2] = e5, t2.push(r3));
    }
  }
};
var Zt = class extends ft2 {
  constructor(t2, e4, r3) {
    super(), this._x = t2, this._y = e4, this._z = r3;
  }
  equals(t2) {
    return this === t2 || Te(t2) && this._x === t2._x && this._y === t2._y && this._z === t2._z;
  }
  closestTo([t2, e4, r3]) {
    return l3(this._x ?? t2, this._y ?? e4, this._z ?? r3);
  }
};
var Ct = class extends ft2 {
  constructor(t2, e4, r3, s2, n4) {
    super(), this._origin = t2, this._spatialReference = e4, this._distanceMeters = r3, this._z = s2, this._directionDegrees = n4;
  }
  equals(t2) {
    return this === t2 || qe(t2) && E(this._origin, t2._origin) && this._spatialReference === t2._spatialReference && this._distanceMeters === t2._distanceMeters && this._z === t2._z && this._directionDegrees === t2._directionDegrees;
  }
  closestTo([t2, e4, r3]) {
    return o(It, t2, e4), E(It, this._origin) || this._applyDirectionAndDistance(It), l3(It[0], It[1], this._z ?? r3);
  }
  _applyDirectionAndDistance(t2) {
    if (null != this._directionDegrees && null != this._distanceMeters) j3(t2, this._origin, this._directionDegrees, this._distanceMeters, this._spatialReference);
    else if (null != this._directionDegrees) St(t2, this._origin, this._directionDegrees, t2, this._spatialReference);
    else if (null != this._distanceMeters) {
      const { azimuth: e4 } = q2(Ot, this._origin, t2, this._spatialReference);
      j3(t2, this._origin, e4 ?? 0, this._distanceMeters, this._spatialReference);
    }
  }
};
var It = [0, 0];
var Ot = new b2();
function St(t2, e4, r3, s2, n4) {
  let { azimuth: i2, distance: o4 } = q2(Et, e4, s2, n4);
  i2 ??= 0;
  let c2 = o4 * Math.cos((i2 - r3) * i);
  c2 = Math.max(0, c2), j3(t2, e4, r3, c2, n4);
}
var Et = new b2();
function Gt(t2, e4) {
  const r3 = f();
  return I(e4, t2.planeLike, r3), r3[2] = t2.getZ(r3[0], r3[1]) ?? we, r3;
}
function Vt(t2, e4) {
  if (me(t2)) {
    const r3 = [];
    for (const s2 of t2.constraints) {
      const t3 = s2.intersect(e4);
      t3 && r3.push(t3);
    }
    return pe(r3);
  }
  if (me(e4)) return Vt(e4, t2);
  if (Pe(t2)) return he(t2, e4);
  if (Pe(e4)) return he(e4, t2);
  if (ge(t2)) {
    const { point: r3 } = t2;
    if (ge(e4)) return C(r3, e4.point) ? t2 : void 0;
    const s2 = e4.closestTo(r3);
    return F(s2, r3) ? t2 : void 0;
  }
  if (_e(t2)) {
    if (ge(e4)) return Vt(e4, t2);
    if (_e(e4)) return fe(T(t2.lineLike, e4.lineLike));
    if (Le(e4)) return Bt(t2, e4);
    if (ke(e4)) return fe(F2(e4.planeLike, t2.lineLike));
    if (ye(e4)) return fe(S(t2.lineLike, e4.center, e4.radius));
    if (ze(e4)) return fe(R2(t2.lineLike, e4));
    if (ve(e4)) return Ft(t2, e4);
    if (Me(e4)) return Ht(t2, e4);
  } else if (xe(t2)) {
    if (ge(e4)) return Vt(e4, t2);
  } else if (Le(t2)) {
    if (ge(e4) || _e(e4)) return Vt(e4, t2);
    if (Le(e4)) return Kt(t2, e4);
    if (ke(e4)) return Nt(t2, e4);
    if (ye(e4)) return Qt(t2, e4);
    if (ze(e4)) return Xt(t2, e4);
    if (ve(e4)) return Wt(t2, e4);
    if (Me(e4)) return Yt(t2, e4);
  } else if (ke(t2)) {
    if (ge(e4) || _e(e4) || Le(e4)) return Vt(e4, t2);
    if (ke(e4)) return le(H2(t2.planeLike, e4.planeLike));
    if (ye(e4)) return le(E2(t2.planeLike, e4.center, e4.radius));
    if (ze(e4)) return te(t2, e4);
    if (ve(e4)) return $t(t2, e4);
    if (Me(e4)) return ee(t2, e4);
  } else if (ye(t2)) {
    if (ge(e4) || _e(e4) || Le(e4) || ke(e4)) return Vt(e4, t2);
    if (ye(e4)) return le(X2(s(t2.center), t2.radius, s(e4.center), e4.radius));
    if (ze(e4)) return re();
    if (ve(e4)) return se(t2, e4);
    if (Me(e4)) return ne();
  } else if (ze(t2)) {
    if (ge(e4) || _e(e4) || Le(e4) || ke(e4) || ye(e4)) return Vt(e4, t2);
    if (ze(e4)) return ie();
    if (ve(e4)) return ie(e4.asCircle());
    if (Me(e4)) return oe();
  } else if (ve(t2)) {
    if (ge(e4) || _e(e4) || Le(e4) || ke(e4) || ye(e4) || ze(e4)) return Vt(e4, t2);
    if (ve(e4)) return ce(e4, t2);
    if (Me(e4)) return ue();
  } else if (Me(t2)) {
    if (ge(e4) || _e(e4) || Le(e4) || ke(e4) || ye(e4) || ve(e4)) return Vt(e4, t2);
    if (Me(e4)) return ae();
  }
}
var Bt = (() => {
  const t2 = v3();
  return (e4, r3) => {
    const { start: s2, end: n4 } = e4;
    if (Z(s2, n4) && $(s2[2], r3.z)) return e4;
    const i2 = f();
    return J(r3.getPlane(t2), s2, n4, i2) ? new dt2(i2) : void 0;
  };
})();
function Ft({ lineLike: t2 }, { center: e4, radius: r3 }) {
  const s2 = e4[2];
  return fe(S(t2, e4, r3).filter((t3) => $(t3[2], s2)));
}
function Ht({ lineLike: t2 }, { sphere: e4 }) {
  return fe(e4.intersectLine(t2.start, t2.end));
}
var Jt = (() => {
  const t2 = n2(), e4 = n(), s2 = n();
  return (n4, i2, o4) => {
    const { normal: c2, center: u3, radius: a2 } = i2;
    p4(c2, e4, s2);
    const h2 = y(n4), l4 = a2 * A(h2, e4), f2 = a2 * A(h2, s2);
    o2(t2, u3[0], u3[1], u3[2], 1);
    const d3 = _2(n4, t2), m3 = Math.hypot(l4, f2), g3 = $(m3, 0);
    if ($(W2(n4, u3), 0)) {
      if (g3) return i2;
      if ($(a2, 0)) return !o4 || tt(o4, u3) ? new dt2(d2(u3)) : void 0;
      P(e4, h2, c2), _3(e4, e4);
      const t3 = new Array(), r3 = t(u3);
      g(r3, r3, e4, a2), o4 && !tt(o4, r3) || t3.push(r3);
      const s3 = t(u3);
      return g(s3, s3, e4, -a2), o4 && !tt(o4, s3) || t3.push(s3), fe(t3);
    }
    if (g3) return;
    const _5 = -d3 / m3;
    if (Math.abs(_5) > 1 || $(_5, 1)) return;
    const v4 = Math.atan(l4 / f2), z = l(_5) - v4, T2 = Math.PI - z, w2 = new Array(), j4 = n();
    g(j4, u3, e4, a2 * Math.cos(z)), g(j4, j4, s2, a2 * Math.sin(z)), w2.push(j4);
    const D = n();
    return g(D, u3, e4, a2 * Math.cos(T2)), g(D, D, s2, a2 * Math.sin(T2)), w2.push(D), fe(o4 ? _4(o4, w2) : w2);
  };
})();
function Kt(t2, e4) {
  return $(t2.z, e4.z) ? t2 : void 0;
}
function Nt({ z: t2 }, { planeLike: e4 }) {
  const [r3, s2] = e4.start, [n4, i2] = e4.end, o4 = a(r3, s2, t2), c2 = a(n4, i2, t2);
  return 0 === e4.type ? new mt2(o4, c2) : new _t(o4, c2);
}
function Qt(t2, e4) {
  const [r3, s2] = e4.center;
  return new kt(a(r3, s2, t2.z), e4.radius);
}
function Wt(t2, e4) {
  return $(e4.center[2], t2.z) ? e4 : void 0;
}
var Xt = (() => {
  const t2 = v3();
  return (e4, r3) => Jt(e4.getPlane(t2), r3, r3.slicePlane);
})();
function Yt(t2, { center: e4, radius: r3 }) {
  const s2 = Math.abs(e4[2] - t2.z);
  if (s2 > r3 && !$(s2, r3)) return;
  const n4 = a(e4[0], e4[1], t2.z), i2 = Math.sqrt(r3 ** 2 - s2 ** 2);
  return $(i2, 0) ? void 0 : new kt(n4, i2);
}
var $t = (() => {
  const t2 = v3();
  return (e4, { center: r3, radius: s2 }) => {
    const n4 = E2(e4.planeLike, r3, s2), i2 = r3[2];
    e4.getSlicePlane(t2);
    const o4 = new Array();
    for (const [c2, u3] of n4) {
      const e5 = [c2, u3, i2];
      tt(t2, e5) && o4.push(e5);
    }
    return fe(o4);
  };
})();
var te = (() => {
  const t2 = v3(), e4 = v3();
  return (r3, s2) => Jt(r3.getPlane(t2), s2, r3.getSlicePlane(e4));
})();
var ee = (() => {
  const t2 = v3();
  return (e4, { center: r3, radius: s2 }) => {
    const n4 = e4.getPlane(t2), i2 = X(n4, r3), o4 = Math.abs(i2);
    if (o4 > s2 && !$(o4, s2)) return;
    const c2 = Math.sqrt(s2 ** 2 - i2 ** 2);
    if ($(c2, 0)) {
      const t3 = f();
      return R(n4, r3, t3), new dt2(t3);
    }
    const u3 = f(), a2 = t(y(n4));
    return g(u3, r3, a2, i2), new yt(u3, c2, a2, e4.getSlicePlane());
  };
})();
function re(t2, e4) {
}
function se(t2, e4) {
  const r3 = b(s(t2.center), s(e4.center));
  if ($(r3, 0) && $(t2.radius, e4.radius)) return e4;
  return de(X2(s(t2.center), t2.radius, s(e4.center), e4.radius), e4.center[2]);
}
function ne(t2, e4) {
}
function ie(t2, e4) {
}
function oe(t2, e4) {
}
function ce(t2, e4) {
  if (!Z(t2.center, e4.center)) return;
  const r3 = b(s(t2.center), s(e4.center));
  if ($(r3, 0) && $(t2.radius, e4.radius)) return t2;
  return de(X2(s(t2.center), t2.radius, s(e4.center), e4.radius), t2.center[2]);
}
function ue(t2, e4) {
}
function ae(t2, e4) {
}
function he(t2, e4) {
  const { planeLike: r3, getZ: s2 } = t2, n4 = new Array();
  if (ge(e4)) t2.addIfOnTheGround(n4, G(r3, e4.point));
  else if (_e(e4)) t2.addIfOnTheGround(n4, F2(r3, e4.lineLike));
  else if (ye(e4)) for (const [i2, o4] of E2(r3, e4.center, e4.radius)) {
    const t3 = s2(i2, o4);
    null != t3 && n4.push(r(i2, o4, t3));
  }
  else if (ke(e4) || Pe(e4)) for (const [i2, o4] of H2(r3, e4.planeLike)) {
    const t3 = s2(i2, o4) ?? we;
    n4.push(r(i2, o4, t3));
  }
  return fe(n4);
}
function le(t2) {
  return pe(t2.map(([t3, e4]) => {
    const r3 = a(t3, e4, 0), s2 = a(t3, e4, 1);
    return new mt2(r3, s2);
  }));
}
function fe(t2) {
  return pe(t2.map((t3) => t3 ? new dt2(c(t3)) : void 0));
}
function de(t2, e4) {
  return fe(t2.map(([t3, r3]) => [t3, r3, e4]));
}
function pe(e4) {
  if (0 !== e4.length) return 1 === e4.length ? e4[0] ?? void 0 : new xt(e4.filter(N));
}
function me(t2) {
  return t2 instanceof xt;
}
function ge(t2) {
  return t2 instanceof dt2;
}
function _e(t2) {
  return t2 instanceof pt2;
}
function xe(t2) {
  return t2 instanceof gt;
}
function Le(t2) {
  return t2 instanceof Mt;
}
function ke(t2) {
  return t2 instanceof qt;
}
function ye(t2) {
  return t2 instanceof Lt;
}
function ve(t2) {
  return t2 instanceof kt;
}
function ze(t2) {
  return t2 instanceof yt;
}
function Me(t2) {
  return t2 instanceof At;
}
function Pe(t2) {
  return t2 instanceof Ut;
}
function qe(t2) {
  return t2 instanceof Ct;
}
function Te(t2) {
  return t2 instanceof Zt;
}
var we = 0;

export {
  O2 as O,
  dt2 as dt,
  mt2 as mt,
  gt,
  Lt,
  Mt,
  bt,
  Rt,
  Ut,
  Zt,
  Ct,
  pe,
  ge,
  _e,
  xe,
  Pe
};
//# sourceMappingURL=chunk-5R5DKW26.js.map
