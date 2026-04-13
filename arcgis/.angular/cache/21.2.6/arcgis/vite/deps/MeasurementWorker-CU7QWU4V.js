import {
  d,
  f as f2,
  s
} from "./chunk-54KJR4YB.js";
import {
  p as p2
} from "./chunk-RCFUJF2D.js";
import "./chunk-2TISYHLG.js";
import {
  b
} from "./chunk-KEB6LZZ5.js";
import "./chunk-DZSF27H2.js";
import {
  u
} from "./chunk-LSYSO7HW.js";
import {
  r
} from "./chunk-KBOGH4PS.js";
import {
  n as n3
} from "./chunk-JORL5UQR.js";
import "./chunk-XI7LMUCI.js";
import {
  n as n2
} from "./chunk-D75VTCRQ.js";
import {
  l,
  m
} from "./chunk-6D6GNYVP.js";
import {
  l as l2,
  m as m2
} from "./chunk-WSICXPNT.js";
import {
  c
} from "./chunk-MQHQ4ODD.js";
import "./chunk-XLMMYZM6.js";
import {
  f,
  m as m3
} from "./chunk-5ZQM3J33.js";
import "./chunk-RTOTWOSZ.js";
import "./chunk-4256WDOP.js";
import "./chunk-2HAOG6WI.js";
import "./chunk-ZQAMXZ7F.js";
import "./chunk-F3UEEVCN.js";
import "./chunk-XQTWTSU3.js";
import "./chunk-ZNBUMLFY.js";
import "./chunk-S5FMCRBW.js";
import "./chunk-MKUY72VH.js";
import "./chunk-GAJDBZ5G.js";
import "./chunk-FZMMQS4X.js";
import "./chunk-U3KYTZUD.js";
import "./chunk-SEVWV2FY.js";
import {
  A as A3,
  P as P2,
  _ as _2,
  c as c2,
  e,
  o,
  u as u3,
  x
} from "./chunk-YM62CGUL.js";
import "./chunk-GBACRMDK.js";
import "./chunk-S5K7KX5U.js";
import {
  an
} from "./chunk-65PBNPQY.js";
import {
  a,
  p,
  u as u2
} from "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-JNCFJPS4.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-IBGMUXG6.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-BMYA7NZP.js";
import {
  j
} from "./chunk-V7SQTPST.js";
import {
  y3 as y
} from "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-ERIUCT52.js";
import {
  _
} from "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import {
  A as A2,
  Me,
  U
} from "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import {
  A,
  C,
  O,
  P,
  T
} from "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/projection/projectDirection.js
function m4(e2, m5, p3, a2, j2) {
  o(s2, e2), c2(f3, e2, m5), p2(s2, p3, s2, j2), p2(f3, p3, f3, j2), e(a2, f3, s2), _2(a2, a2);
}
var s2 = n();
var f3 = n();

// node_modules/@arcgis/core/views/support/measurementWorkerUtils.js
function t(t2) {
  return A(t2) || O(t2) ? 0 : 1;
}

// node_modules/@arcgis/core/views/support/MeasurementWorker.js
async function $({ geometryJSON: e2, options: t2 }) {
  await Promise.allSettled([m(), t2?.returnLength ? m2() : void 0]);
  const n4 = B(e2, t2), i = t2?.unit ?? "square-meters", s3 = u(n4) ?? n4, a2 = l(s3, __spreadValues({ unit: i }, t2)), c3 = s(a2, i), m5 = t2?.lengthUnit ?? Me(i);
  return { area: c3, centroid: t2?.returnCentroid ? F(s3).toJSON() : void 0, length: t2?.returnLength ? await G(s3, { unit: m5 }) : void 0 };
}
function A4() {
  m(), m2(), m3();
}
function B(e2, t2) {
  const r2 = "rings" in e2 ? j.fromJSON(e2) : y.fromJSON(e2);
  if (t2?.stagedPoint) {
    const e3 = _.fromJSON(t2.stagedPoint), o2 = ("rings" in r2 ? r2.rings : r2.paths).at(-1);
    if (o2) {
      const { x: t3, y: n4, z: i, m: s3 } = e3, a2 = r2.hasZ && r2.hasM ? [t3, n4, i ?? 0, s3 ?? 0] : r2.hasZ ? [t3, n4, i ?? 0] : r2.hasM ? [t3, n4, s3 ?? 0] : [t3, n4];
      o2.push(a2);
    }
  }
  return r2;
}
function F(e2) {
  return n3(e2);
}
async function G(e2, r2) {
  await m2();
  const o2 = r2?.unit ?? "meters";
  return f2(l2(e2, __spreadProps(__spreadValues({}, r2), { unit: o2 })), o2);
}
function H({ geometryJSON: e2, options: t2 }) {
  return G(B(e2, t2), t2);
}
async function I({ geometry1JSON: e2, geometry2JSON: r2, options: o2 }) {
  await m3();
  const n4 = _.fromJSON(e2), i = _.fromJSON(r2), s3 = o2?.unit ?? "meters";
  return f2(f(n4, i, __spreadProps(__spreadValues({}, o2), { unit: s3 })), s3);
}
function K({ geometryJSON: e2, options: t2 }) {
  return Q(B(e2, t2), t2);
}
function Q(e2, t2) {
  const n4 = t2?.unit ?? "square-meters", i = t2?.lengthUnit ?? Me(n4), s3 = u(e2) ?? e2, a2 = n2(s3, __spreadValues({ unit: n4 }, t2));
  return { area: s(a2, n4), centroid: t2?.returnCentroid ? F(s3).toJSON() : void 0, length: t2?.returnLength ? T2(s3, { unit: i }) : void 0 };
}
function T2(e2, r2) {
  const o2 = r2?.unit ?? "meters";
  return f2(r(e2, __spreadProps(__spreadValues({}, r2), { unit: o2 })), o2);
}
function V({ geometryJSON: e2, options: t2 }) {
  return T2(B(e2, t2), t2);
}
function X({ geometry1JSON: e2, geometry2JSON: r2, options: o2 }) {
  const n4 = _.fromJSON(e2), i = _.fromJSON(r2), s3 = o2?.unit ?? "meters";
  return f2(c(n4, i, __spreadProps(__spreadValues({}, o2), { unit: s3 })), s3);
}
async function Y(e2) {
  return re(e2.geometryJSON.spatialReference, $, K)(e2);
}
async function _3(e2) {
  return re(e2.geometryJSON.spatialReference, H, V)(e2);
}
async function ee(e2) {
  return re(e2.geometry1JSON.spatialReference, I, X)(e2);
}
async function te(t2) {
  const r2 = re(t2.topLeftJSON.spatialReference, I, X), { topLeftJSON: o2, topRightJSON: n4, bottomRightJSON: i, bottomLeftJSON: s3, options: a2 } = t2, [c3, m5, f4, p3] = await Promise.all([r2({ geometry1JSON: s3, geometry2JSON: i, options: a2 }), r2({ geometry1JSON: o2, geometry2JSON: n4, options: a2 }), r2({ geometry1JSON: i, geometry2JSON: n4, options: a2 }), r2({ geometry1JSON: s3, geometry2JSON: o2, options: a2 })]);
  return { width: d(c3, m5), height: d(p3, f4) };
}
function re(e2, t2, r2) {
  switch (t(e2)) {
    case 0:
      return t2;
    case 1:
      return r2;
  }
}
function oe(e2) {
  const { geometryJSON: t2 } = e2, r2 = ae(t2.spatialReference);
  if (!r2) throw new Error("Cannot compute horizontal area without a valid spatial reference.");
  switch (r2.mode) {
    case 0:
      return K(e2);
    case 1:
      return ne(r2, e2);
  }
}
function ne(e2, { geometryJSON: t2, options: r2 }) {
  const o2 = B(t2, r2), n4 = fe, i = ce, s3 = me, a2 = T(o2.spatialReference, e2.spatialReference) ? o2.clone() : an(o2, o2.spatialReference, e2.spatialReference);
  if (!a2) throw new Error(`Cannot project geometry from ${o2.spatialReference?.wkid ?? "unknown"} to ${e2.spatialReference.wkid}.`);
  se(a2, n4, i, s3);
  const { area: c3, centroid: m5, length: f4 } = Q(a2, r2);
  return { area: c3, centroid: ie(m5, n4, i, s3, e2.spatialReference, o2.spatialReference), length: f4 };
}
function ie(e2, t2, r2, o2, n4, s3) {
  if (!e2) return e2;
  x(r2, r2, e2.x), x(o2, o2, e2.y);
  const a2 = pe;
  return c2(a2, r2, o2), c2(a2, a2, t2), e2.x = a2[0], e2.y = a2[1], e2.z = a2[2], e2.spatialReference = n4, an(e2, e2.spatialReference, s3)?.toJSON() ?? void 0;
}
function se(e2, t2, r2, o2) {
  let f4 = 0;
  u3(t2, 0, 0, 0);
  for (const n4 of e2.rings) for (const e3 of n4) t2[0] += e3[0], t2[1] += e3[1], t2[2] += e3[2], f4++;
  x(t2, t2, 1 / f4);
  const p3 = ue;
  _2(p3, t2);
  const u4 = le, l3 = Math.atan2(p3[1], p3[0]);
  u3(u4, -Math.sin(l3), Math.cos(l3), 0), T(e2.spatialReference, a) && (m4(t2, p3, p, p3, e2.spatialReference), m4(t2, u4, p, u4, e2.spatialReference)), b(u4, p3, r2), P2(o2, r2, p3);
  const g = pe;
  for (const i of e2.rings) for (const e3 of i) {
    u3(g, e3[0], e3[1], e3[2]), e(g, g, t2);
    const i2 = A3(r2, g), s3 = A3(o2, g);
    e3[0] = i2, e3[1] = s3;
  }
  e2.hasZ = false, e2.spatialReference = S.WebMercator;
}
function ae(e2) {
  return e2 ? U(e2) ? P(e2) || O(e2) || C(e2) || A2(e2) || T(e2, a) ? { mode: 1, spatialReference: a } : { mode: 0, spatialReference: e2 } : { mode: 1, spatialReference: u2(e2) } : null;
}
var ce = n();
var me = n();
var fe = n();
var pe = n();
var ue = n();
var le = n();
export {
  K as area2D,
  oe as areaHorizontal,
  Y as autoArea2D,
  ee as autoDistance2DBetweenPoints,
  _3 as autoLength2D,
  te as autoSize2D,
  X as distance2DBetweenPoints,
  $ as geodeticArea,
  I as geodeticDistanceBetweenPoints,
  H as geodeticLength,
  V as length2D,
  A4 as preloadGeodetic
};
//# sourceMappingURL=MeasurementWorker-CU7QWU4V.js.map
