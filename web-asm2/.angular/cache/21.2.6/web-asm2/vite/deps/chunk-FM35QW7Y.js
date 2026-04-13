import {
  N as N2,
  b,
  j,
  q as q2
} from "./chunk-OZ4UTONJ.js";
import {
  p,
  q
} from "./chunk-YUTAX525.js";
import {
  p as p2
} from "./chunk-CEI53J3M.js";
import {
  C,
  o,
  u
} from "./chunk-YM62CGUL.js";
import {
  _,
  n as n3
} from "./chunk-ULRT2MRD.js";
import {
  a,
  n as n2
} from "./chunk-JC7PAMG4.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import {
  L
} from "./chunk-EFJUSEVJ.js";
import {
  N
} from "./chunk-DHNLUBWZ.js";
import {
  T
} from "./chunk-4X5LQ2UO.js";

// node_modules/@arcgis/core/views/support/angularMeasurementUtils.js
function j2(e, r) {
  if (null == e || null == r) return;
  const t = b2(e, r);
  return null != t ? p(t, "radians", "geographic") : void 0;
}
var b2 = (() => {
  const e = n(), r = n();
  return (t, o2) => (u(e, t.x, t.y, t.z ?? 0), u(r, o2.x, o2.y, o2.z ?? 0), y(e, r, t.spatialReference, o2.spatialReference));
})();
var y = (() => {
  const e = n3(), r = n(), t = n();
  return (o2, a2, s, u2) => {
    if (C(o2, a2)) return;
    const f = N2(s), p3 = N2(u2);
    if (f && p3 && T(f, p3) && p2(o2, s, r, f) && p2(a2, u2, t, p3)) {
      const { azimuth: e2 } = q2(C2, r, t, f);
      return null != e2 ? N(e2, "degrees", "radians") : void 0;
    }
    e[0] = a2[0] - o2[0], e[1] = a2[1] - o2[1];
    let d = L(_, e);
    return e[0] < 0 && (d = I - d), d;
  };
})();
function x(e, r, t, o2 = "absolute") {
  if (r && t) switch (o2) {
    case "absolute":
      return j2(r, t);
    case "relative":
      return w(z(e, r, t), "relative");
    case "relative-bilateral":
      return w(z(e, r, t), "relative-bilateral");
  }
}
function z(e, r, t) {
  if (!e || !r || !t) return;
  const i = b2(e, r), n4 = b2(r, t);
  return null != i && null != n4 ? p(n4 - i, "radians", "geographic") : void 0;
}
function w(e, r) {
  if (null != e) switch (r) {
    case "absolute":
      return M(e);
    case "relative": {
      const r2 = U(e);
      let t = k.normalize(r2, 0, true);
      return -180 === t && (t = 180), p(t, "degrees", "geographic");
    }
    case "relative-bilateral": {
      const r2 = U(e), t = Math.abs(k.normalize(r2, 0, true));
      return p(t, "degrees", "geographic");
    }
  }
}
function M(e) {
  const r = U(e), t = P.normalize(r, 0, true);
  return p(t, "degrees", "geographic");
}
var R = (() => {
  const e = n();
  return (r, o2, n4, a2, c, l = "geodesic") => {
    o(e, o2);
    const f = U(c);
    if ("geodesic" === l) {
      const t = N2(n4);
      if (t && p2(e, n4, e, t)) return j(r, e, f, a2, t), r[2] = o2[2], !!p2(r, t, r, n4);
    }
    const g = q(f, "geographic", "arithmetic"), p3 = N(g, "degrees", "radians"), v = o2[0] + a2 * Math.cos(p3), j3 = o2[1] + a2 * Math.sin(p3), b3 = o2[2];
    return u(r, v, j3, b3), true;
  };
})();
function U(e) {
  if (null != e) return q(q3(e), e.rotationType, "geographic");
}
function V(e) {
  if (null != e) return q(q3(e), e.rotationType, "arithmetic");
}
function q3(e) {
  return N(e.value, e.unit, "degrees");
}
var C2 = new b();
var I = 2 * Math.PI;
var P = a;
var k = new n2(-180, 180);

export {
  j2 as j,
  y,
  x,
  w,
  M,
  R,
  U,
  V
};
//# sourceMappingURL=chunk-FM35QW7Y.js.map
