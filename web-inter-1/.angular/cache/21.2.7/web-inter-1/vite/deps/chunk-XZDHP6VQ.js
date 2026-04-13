import {
  w as w2
} from "./chunk-WMXRY6SX.js";
import {
  j as j3
} from "./chunk-OYBI3GFG.js";
import {
  c as c3,
  u
} from "./chunk-6EXMULM6.js";
import {
  c as c2
} from "./chunk-WSL4VWRQ.js";
import {
  I
} from "./chunk-SGNC5H35.js";
import {
  m
} from "./chunk-FMIKVU3Q.js";
import {
  j as j2
} from "./chunk-R3PBZCGD.js";
import {
  y3 as y
} from "./chunk-Z5I3WFZJ.js";
import {
  M,
  g,
  v
} from "./chunk-DFCHXQYB.js";
import {
  n
} from "./chunk-KEY3YQEB.js";
import {
  S as S2,
  _,
  j
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  E,
  N as N2,
  ae,
  be,
  re,
  se
} from "./chunk-NR66QFNF.js";
import {
  U,
  r
} from "./chunk-LANOLZOB.js";
import {
  a3 as a2,
  c,
  w
} from "./chunk-JM4CKTH2.js";
import {
  a
} from "./chunk-6I475YAP.js";
import {
  N,
  h
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/geometry/Circle.js
var g2;
var b = g2 = class extends j2 {
  constructor(e) {
    super(e), this.geodesic = false, this.numberOfPoints = 60, this.radius = 1e3, this.radiusUnit = "meters";
  }
  initialize() {
    const e = this.center, o = this.numberOfPoints;
    if (this.hasZ = e?.hasZ ?? false, 0 !== this.rings.length || !e) return;
    const c4 = N2(this.radius, this.radiusUnit, "meters"), n2 = e.spatialReference;
    let p, l = "geographic";
    if (n2.isWebMercator ? l = "webMercator" : (null != (n2.wkid && r[n2.wkid]) || (n2.wkt2 || n2.wkt) && be(n2.wkt2 || n2.wkt)) && (l = "projected"), this.geodesic) {
      let t;
      switch (l) {
        case "webMercator":
          t = S2(e);
          break;
        case "projected":
          console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");
          break;
        case "geographic":
          t = e;
      }
      p = this._createGeodesicCircle(t, c4, o), "webMercator" === l && (p = j(p));
    } else {
      let t;
      "webMercator" === l || "projected" === l ? t = c4 / ae(e.spatialReference) : "geographic" === l && (t = se(c4, "meters", E(e.spatialReference).radius)), p = this._createPlanarCircle(e, t, o);
    }
    this.spatialReference = p.spatialReference, this.addRing(p.rings[0]);
  }
  get center() {
    return this._get("center");
  }
  set center(e) {
    this._set("center", w(_, e));
  }
  clone() {
    const { center: e, numberOfPoints: t, radius: r2, radiusUnit: s, geodesic: i } = this;
    return new g2({ center: e?.clone(), numberOfPoints: t, radius: r2, radiusUnit: s, geodesic: i });
  }
  _createGeodesicCircle(e, t, r2) {
    const s = [], i = [e.x, e.y];
    for (let o = 0; o < 360; o += 360 / r2) {
      const r3 = this.hasZ ? [0, 0, e.z ?? 0] : [0, 0];
      j3(r3, i, o, t, S.WGS84), s.push(r3);
    }
    return s.push(s[0]), new j2({ rings: [s] });
  }
  _createPlanarCircle(e, t, r2) {
    const s = [], i = 2 * Math.PI / r2;
    for (let o = 0; o < r2; ++o) {
      const r3 = i * o, c4 = [e.x + Math.cos(-r3) * t, e.y + Math.sin(-r3) * t];
      this.hasZ && c4.push(e.z ?? 0), s.push(c4);
    }
    return s.push(s[0]), new j2({ spatialReference: e.spatialReference, rings: [s] });
  }
};
__decorate([a2({ type: _, useTypeForAutocast: false, value: null })], b.prototype, "center", null), __decorate([a2()], b.prototype, "geodesic", void 0), __decorate([a2()], b.prototype, "numberOfPoints", void 0), __decorate([a2()], b.prototype, "radius", void 0), __decorate([a2()], b.prototype, "radiusUnit", void 0), b = g2 = __decorate([c("esri.geometry.Circle")], b);
var w3 = b;

// node_modules/@arcgis/core/views/draw/support/createUtils.js
function d(t, e) {
  const o = new _({ x: t[0], y: t[1], spatialReference: e });
  return t.length > 2 && (o.z = t[2]), o;
}
function R(t, e) {
  return new m({ points: t, spatialReference: e });
}
function j4(t, e, o) {
  const n2 = new y({ paths: t, spatialReference: e });
  return o && v(n2), n2;
}
function T(t, n2, r2, a3 = true) {
  const l = a(t);
  l.forEach((t2) => {
    const o = t2[0], n3 = t2[t2.length - 1];
    h(o, n3) && 1 !== t2.length || t2.push(t2[0]);
  });
  let s = new j2({ rings: l, spatialReference: n2 });
  return s.rings.forEach((t2) => {
    g(t2) || t2.reverse();
  }), r2 && v(s), a3 && !c3(s) && U(n2) && (s = u(s) || s), s;
}
function b2(e, o, n2) {
  const r2 = o.mapToLocalMultiple(e), a3 = [], l = { x: r2[0].x, y: r2[0].y }, s = { x: r2[1].x, y: r2[1].y }, i = Math.round(s.x - l.x), c4 = Math.round(s.y - l.y), p = Math.max(Math.abs(i), Math.abs(c4));
  if (n2) {
    const t = { x: l.x + p, y: l.y + p }, e2 = { x: l.x - p, y: l.y - p };
    a3.push(w2(t.x, e2.y), w2(e2.x, e2.y), w2(e2.x, t.y), w2(t.x, t.y));
  } else {
    const t = { x: i > 0 ? l.x + p : l.x - p, y: c4 > 0 ? l.y + p : l.y - p };
    a3.push(w2(l.x, l.y), w2(t.x, l.y), w2(t.x, t.y), w2(l.x, t.y));
  }
  return P(T([a3.map((t) => o.localToMap(t)).filter(N)], o.spatialReference, o.doUnnormalization, true), a3, o);
}
function U2(e, o, n2) {
  let r2 = o.mapToLocalMultiple(e);
  if (1 === r2.length) {
    const t = 48, e2 = r2[0];
    r2 = [w2(e2.x - t, e2.y + t), w2(e2.x + t, e2.y - t), w2(e2.x + t, e2.y - t), w2(e2.x - t, e2.y + t)];
  }
  const a3 = [], l = { x: r2[0].x, y: r2[0].y }, s = { x: r2[1].x, y: r2[1].y };
  if (n2) {
    const t = Math.round(s.x - l.x), e2 = Math.round(s.y - l.y);
    a3.push(w2(l.x - t, l.y - e2), w2(s.x, l.y - e2), w2(s.x, s.y), w2(l.x - t, s.y));
  } else a3.push(w2(l.x, l.y), w2(s.x, l.y), w2(s.x, s.y), w2(l.x, s.y));
  return P(T([a3.map((t) => o.localToMap(t)).filter(N)], o.spatialReference, o.doUnnormalization, true), a3, o);
}
function P(t, e, o) {
  const n2 = z(e[3], e[2], o), r2 = z(e[1], e[2], o), a3 = z(e[0], e[1], o), l = z(e[0], e[3], o);
  return { geometry: t, midpoints: null != n2 && null != r2 && null != a3 && null != l ? { top: n2, right: r2, bottom: a3, left: l } : null };
}
function z(t, e, o) {
  I2[0] = t.x, I2[1] = t.y, I2[2] = 0, L[0] = e.x, L[1] = e.y, L[2] = 0, I(I2, I2, L, 0.5), w4.x = I2[0], w4.y = L[1], w4.z = L[2];
  const n2 = o.localToMap(w4);
  return null != n2 ? d(n2, o.spatialReference) : null;
}
var w4 = w2(0, 0, 0);
var I2 = n();
var L = n();
function v2(t, e, o, r2) {
  const a3 = e.mapToLocalMultiple(t);
  let s = null, i = null;
  if (o) s = a3[0], i = a3[1];
  else {
    const t2 = a3[0], e2 = a3[1], o2 = Math.round(e2.x - t2.x), n2 = Math.round(e2.y - t2.y), r3 = Math.max(Math.abs(o2), Math.abs(n2));
    s = w2(o2 > 0 ? t2.x + r3 / 2 : t2.x - r3 / 2, n2 > 0 ? t2.y + r3 / 2 : t2.y - r3 / 2), i = w2(Math.abs(o2) > Math.abs(n2) ? s.x - r3 / 2 : s.x, Math.abs(o2) > Math.abs(n2) ? s.y : s.y - r3 / 2);
  }
  const c4 = e.localToMap(s), p = e.localToMap(i);
  if (null == c4 || null == p) return null;
  e.doUnnormalization && M([[c4, p]], e.spatialReference);
  const u2 = d(c4, e.spatialReference), m2 = d(p, e.spatialReference), x = re(e.spatialReference);
  let h2 = 0;
  if (U(e.spatialReference)) h2 = x * c2(u2, m2);
  else {
    const t2 = s.x - i.x, e2 = s.y - i.y;
    h2 = x * Math.sqrt(t2 * t2 + e2 * e2) * (r2 || 1);
  }
  const R2 = new w3({ center: u2, radius: h2, radiusUnit: "meters", spatialReference: e.spatialReference });
  return { geometry: T(R2.rings, R2.spatialReference, false), center: u2, edge: m2 };
}
function k(e, o, n2) {
  const r2 = o.mapToLocalMultiple(e), a3 = r2[0], l = r2[1], s = Math.round(l.x - a3.x), i = Math.round(l.y - a3.y), c4 = w2(n2 ? a3.x : a3.x + s / 2, n2 ? a3.y : a3.y + i / 2), p = n2 ? s : s / 2, y2 = n2 ? i : i / 2, u2 = 60, m2 = [], f = 2 * Math.PI / u2;
  function x(t) {
    const e2 = Math.cos(t), o2 = Math.sin(t);
    return w2(p * e2 + c4.x, y2 * o2 + c4.y);
  }
  for (let t = 0; t < u2; t++) m2.push(x(t * f));
  m2.push(m2[0]);
  const { spatialReference: h2, doUnnormalization: M2 } = o, R2 = T([m2.map((t) => o.localToMap(t)).filter(N)], h2, M2, false), j5 = o.localToMap(x(Math.PI / 2)), b3 = o.localToMap(x(0)), U3 = o.localToMap(x(-Math.PI / 2)), P2 = o.localToMap(x(Math.PI));
  return { geometry: R2, midpoints: null != j5 && null != b3 && null != U3 && null != P2 ? { top: d(j5, h2), right: d(b3, h2), bottom: d(U3, h2), left: d(P2, h2) } : null };
}

export {
  R,
  j4 as j,
  T,
  b2 as b,
  U2 as U,
  v2 as v,
  k
};
//# sourceMappingURL=chunk-XZDHP6VQ.js.map
