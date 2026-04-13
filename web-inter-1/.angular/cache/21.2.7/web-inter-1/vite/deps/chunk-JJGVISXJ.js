import {
  o as o2,
  x as x2
} from "./chunk-RSIK7DB2.js";
import {
  t as t2
} from "./chunk-TZSKNWRI.js";
import {
  u as u4
} from "./chunk-GSWONWCV.js";
import {
  s,
  t
} from "./chunk-TVLXQ42J.js";
import {
  m as m2,
  o
} from "./chunk-OR24MDO6.js";
import {
  ln
} from "./chunk-Y4WJAV66.js";
import {
  l,
  m,
  x
} from "./chunk-IRS5H2YE.js";
import {
  u as u2
} from "./chunk-R3PBZCGD.js";
import {
  h,
  p
} from "./chunk-DFCHXQYB.js";
import {
  E,
  F,
  g
} from "./chunk-PWZ6VVYN.js";
import {
  e
} from "./chunk-XNNZ2U24.js";
import {
  _,
  u as u3
} from "./chunk-KEY3YQEB.js";
import {
  u
} from "./chunk-SH72BZH2.js";
import {
  re
} from "./chunk-NR66QFNF.js";

// node_modules/@arcgis/core/views/3d/layers/graphics/graphicUtils.js
function w(t3, e2) {
  if ("point" === t3.type) return F2(t3, e2, false);
  if (o2(t3)) switch (t3.type) {
    case "extent":
      return F2(t3.center, e2, false);
    case "polygon":
      return F2(P(t3), e2, false);
    case "polyline":
      return F2(M(t3), e2, true);
    case "mesh":
      return F2(u4(t3.vertexSpace, t3.spatialReference) ?? t3.extent.center, e2, false);
    case "multipoint":
      return;
  }
  else switch (t3.type) {
    case "extent":
      return F2(R(t3), e2, true);
    case "polygon":
      return F2(P(t3), e2, true);
    case "polyline":
      return F2(M(t3), e2, true);
    case "multipoint":
      return;
  }
}
function M(t3) {
  const e2 = t3.paths[0];
  if (!e2 || 0 === e2.length) return null;
  const r = p(e2, h(e2) / 2);
  return t2(r[0], r[1], r[2], t3.spatialReference);
}
function R(t3) {
  return t2(0.5 * (t3.xmax + t3.xmin), 0.5 * (t3.ymax + t3.ymin), null != t3.zmin && null != t3.zmax && isFinite(t3.zmin) && isFinite(t3.zmax) ? 0.5 * (t3.zmax + t3.zmin) : void 0, t3.spatialReference);
}
function P(t3) {
  const e2 = t3.rings[0];
  if (!e2 || 0 === e2.length) return null;
  const r = u2(t3.rings, !!t3.hasZ);
  return t2(r[0], r[1], r[2], t3.spatialReference);
}
function F2(t3, e2, r) {
  const n = r ? t3 : x2(t3);
  return e2 && t3 ? ln(t3, n, e2) ? n : null : n;
}
function A(t3, e2, r, n = 0) {
  if (t3) {
    e2 || (e2 = u());
    const i = t3;
    let o3 = 0.5 * i.width * (r - 1), s2 = 0.5 * i.height * (r - 1);
    return i.width < 1e-7 * i.height ? o3 += s2 / 20 : i.height < 1e-7 * i.width && (s2 += o3 / 20), o(e2, i.xmin - o3 - n, i.ymin - s2 - n, i.xmax + o3 + n, i.ymax + s2 + n), e2;
  }
  return null;
}
function B(t3, e2, r = null) {
  const n = t(s);
  return null != t3 && (n[0] = t3[0], n[1] = t3[1], n[2] = t3[2], t3.length > 3 && (n[3] = t3[3])), null != e2 && (n[3] = e2), r && m2(n, n, r), n;
}
function I(t3 = _, e2, r, n = 1) {
  const i = new Array(3);
  if (null == e2 || null == r) i[0] = 1, i[1] = 1, i[2] = 1;
  else {
    let n2, o3 = 0;
    for (let s2 = 2; s2 >= 0; s2--) {
      const l2 = t3[s2], u5 = null != l2, a = 0 === s2 && !n2 && !u5, m3 = r[s2];
      let c;
      "symbol-value" === l2 || a ? c = 0 !== m3 ? e2[s2] / m3 : 1 : u5 && "proportional" !== l2 && isFinite(l2) && (c = 0 !== m3 ? l2 / m3 : 1), null != c && (i[s2] = c, n2 = c, o3 = Math.max(o3, Math.abs(c)));
    }
    for (let t4 = 2; t4 >= 0; t4--) null == i[t4] ? i[t4] = n2 : 0 === i[t4] && (i[t4] = 1e-3 * o3);
  }
  for (let o3 = 2; o3 >= 0; o3--) i[o3] /= n;
  return u3(i);
}
function U(t3) {
  return null != t3.isPrimitive;
}
function Z(t3) {
  return E2(U(t3) ? [t3.width, t3.depth, t3.height] : t3) ? null : "Symbol sizes may not be negative values";
}
function E2(t3) {
  const e2 = (t4) => null == t4 || t4 >= 0;
  return Array.isArray(t3) ? t3.every(e2) : e2(t3);
}
function G(t3, o3, s2, l2 = e()) {
  return t3 && x(l2, l2, -t3 / 180 * Math.PI), o3 && l(l2, l2, o3 / 180 * Math.PI), s2 && m(l2, l2, s2 / 180 * Math.PI), l2;
}
function N(e2, r, n) {
  if (null != n.minDemResolution) return n.minDemResolution;
  const i = re(r), o3 = g(e2) * i, s2 = E(e2) * i, l2 = F(e2) * (r.isGeographic ? 1 : i);
  return 0 === o3 && 0 === s2 && 0 === l2 ? n.minDemResolutionForPoints : 0.01 * Math.max(o3, s2, l2);
}

export {
  w,
  A,
  B,
  I,
  Z,
  E2 as E,
  G,
  N
};
//# sourceMappingURL=chunk-JJGVISXJ.js.map
