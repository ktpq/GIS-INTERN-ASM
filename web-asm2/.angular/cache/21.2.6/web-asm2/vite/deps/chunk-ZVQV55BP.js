import {
  f
} from "./chunk-YUTAX525.js";
import {
  p as p2
} from "./chunk-CEI53J3M.js";
import {
  p,
  u as u2
} from "./chunk-YM62CGUL.js";
import {
  a,
  u
} from "./chunk-XW3QCD2I.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import {
  A,
  U,
  fe,
  me
} from "./chunk-DHNLUBWZ.js";
import {
  C,
  O,
  P,
  T
} from "./chunk-4X5LQ2UO.js";

// node_modules/@arcgis/core/views/support/measurementUtils.js
function l(l2) {
  return U(l2) ? P(l2) || O(l2) || C(l2) || A(l2) ? a : l2 : u(l2);
}

// node_modules/@arcgis/core/views/support/euclideanLengthMeasurementUtils.js
function a2(n2) {
  return f2(n2, 1);
}
function f2(t, r) {
  const { hasZ: l2, spatialReference: i } = t, u3 = l(i);
  let o = 0;
  const s = me(u3);
  if (null == s) return null;
  const a3 = 0 === r ? Z : g;
  for (const n2 of t.paths) {
    if (n2.length < 2) continue;
    const t2 = n2.length - 1;
    for (let e = 0; e < t2; ++e) {
      const t3 = n2[e];
      b[0] = t3[0], b[1] = t3[1], b[2] = l2 ? t3[2] : 0;
      const r2 = n2[e + 1];
      S[0] = r2[0], S[1] = r2[1], S[2] = l2 ? r2[2] : 0;
      const u4 = a3(b, S, i);
      if (null == u4) return null;
      o += u4.value;
    }
  }
  return f(o, s);
}
function m(n2, t) {
  const { spatialReference: e } = n2;
  return T(e, t.spatialReference) ? (b[0] = n2.x, b[1] = n2.y, b[2] = n2.hasZ ? n2.z : 0, S[0] = t.x, S[1] = t.y, S[2] = t.hasZ ? t.z : 0, g(b, S, e)) : null;
}
function z(n2, t) {
  const { spatialReference: e } = n2;
  return T(e, t.spatialReference) ? (b[0] = n2.x, b[1] = n2.y, b[2] = n2.hasZ ? n2.z : 0, S[0] = t.x, S[1] = t.y, S[2] = t.hasZ ? t.z : 0, v(b, S, e)) : null;
}
function x(n2) {
  return null != n2 ? y(n2.hasZ ? n2.z : 0, n2.spatialReference) : null;
}
function y(e, r) {
  const l2 = fe(r);
  return null != l2 ? f(e ?? 0, l2) : null;
}
function Z(t, e, r) {
  const l2 = d(t, e, r, 0);
  return null != l2 ? f(l2.direct, l2.unit) : null;
}
function g(t, e, r) {
  const l2 = d(t, e, r, 1);
  return null != l2 ? f(l2.horizontal, l2.unit) : null;
}
function v(t, e, r) {
  const l2 = d(t, e, r, 2);
  return null != l2 ? f(l2.verticalSigned, l2.unit) : null;
}
function d(n2, t, i, o) {
  const s = l(i), a3 = me(s);
  if (null == a3) return null;
  const f3 = t[2] - n2[2];
  if (2 === o) return { verticalSigned: f3, unit: a3 };
  if (!p2(n2, i, M, s) || !p2(t, i, U2, s)) return null;
  if (0 === o) {
    return { direct: p(U2, M), unit: a3 };
  }
  if (u2(V, n2[0], n2[1], t[2]), !p2(V, i, V, s)) return null;
  const p3 = p(V, U2);
  if (1 === o) return { horizontal: p3, unit: a3 };
  return { direct: p(U2, M), horizontal: p3, vertical: Math.abs(f3), unit: a3 };
}
var b = n();
var S = n();
var M = n();
var U2 = n();
var V = n();

export {
  l,
  a2 as a,
  m,
  z,
  x,
  y,
  g,
  v
};
//# sourceMappingURL=chunk-ZVQV55BP.js.map
