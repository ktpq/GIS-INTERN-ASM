import {
  d,
  f,
  s
} from "./chunk-OU7IBCXM.js";
import {
  u as u3
} from "./chunk-3THHW4UD.js";
import {
  r
} from "./chunk-IZTLWJ3K.js";
import {
  n as n3
} from "./chunk-Q7AB6NFC.js";
import "./chunk-OLBZK5AE.js";
import {
  n as n2
} from "./chunk-MREPKBQR.js";
import {
  l,
  m
} from "./chunk-VJMCLIV2.js";
import {
  l as l2,
  m as m3
} from "./chunk-HZAG55OK.js";
import {
  c as c2
} from "./chunk-IUSK6MXE.js";
import {
  p as p2
} from "./chunk-X2TALAHM.js";
import "./chunk-TZSKNWRI.js";
import {
  b
} from "./chunk-ACXV2BJH.js";
import "./chunk-62ONSFDS.js";
import {
  f as f2,
  m as m2
} from "./chunk-A3ISMFHI.js";
import "./chunk-HSACVHS7.js";
import "./chunk-DZ6LTFHJ.js";
import "./chunk-BDFU63AY.js";
import "./chunk-Z23LLMA3.js";
import "./chunk-EFCG7PCZ.js";
import "./chunk-AGEBX7DX.js";
import "./chunk-ZGNYH3YF.js";
import "./chunk-UOKS5I7T.js";
import "./chunk-QJ53E7LJ.js";
import "./chunk-L3K266YP.js";
import "./chunk-MSO245PE.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-HDXHQWQ2.js";
import "./chunk-VIRT6ASK.js";
import {
  A as A3,
  P as P2,
  _ as _2,
  c,
  e,
  o,
  u as u2,
  x
} from "./chunk-SGNC5H35.js";
import {
  an
} from "./chunk-5L27TA3I.js";
import {
  a,
  p,
  u
} from "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import {
  n
} from "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-QRPQOATM.js";
import "./chunk-TPDTUQ5K.js";
import "./chunk-QLDYCH6C.js";
import "./chunk-IO7CXLQO.js";
import "./chunk-FMIKVU3Q.js";
import {
  j
} from "./chunk-R3PBZCGD.js";
import {
  y3 as y
} from "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-PWZ6VVYN.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import {
  _
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  A as A2,
  Me,
  U
} from "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import {
  A,
  C,
  O,
  P,
  T
} from "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/projection/projectDirection.js
function m4(e2, m5, p3, a2, j2) {
  o(s2, e2), c(f3, e2, m5), p2(s2, p3, s2, j2), p2(f3, p3, f3, j2), e(a2, f3, s2), _2(a2, a2);
}
var s2 = n();
var f3 = n();

// node_modules/@arcgis/core/views/support/measurementWorkerUtils.js
function t(t2) {
  return A(t2) || O(t2) ? 0 : 1;
}

// node_modules/@arcgis/core/views/support/MeasurementWorker.js
async function $({ geometryJSON: e2, options: t2 }) {
  await Promise.allSettled([m(), t2?.returnLength ? m3() : void 0]);
  const n4 = B(e2, t2), i = t2?.unit ?? "square-meters", s3 = u3(n4) ?? n4, a2 = l(s3, __spreadValues({ unit: i }, t2)), c3 = s(a2, i), m5 = t2?.lengthUnit ?? Me(i);
  return { area: c3, centroid: t2?.returnCentroid ? F(s3).toJSON() : void 0, length: t2?.returnLength ? await G(s3, { unit: m5 }) : void 0 };
}
function A4() {
  m(), m3(), m2();
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
  await m3();
  const o2 = r2?.unit ?? "meters";
  return f(l2(e2, __spreadProps(__spreadValues({}, r2), { unit: o2 })), o2);
}
function H({ geometryJSON: e2, options: t2 }) {
  return G(B(e2, t2), t2);
}
async function I({ geometry1JSON: e2, geometry2JSON: r2, options: o2 }) {
  await m2();
  const n4 = _.fromJSON(e2), i = _.fromJSON(r2), s3 = o2?.unit ?? "meters";
  return f(f2(n4, i, __spreadProps(__spreadValues({}, o2), { unit: s3 })), s3);
}
function K({ geometryJSON: e2, options: t2 }) {
  return Q(B(e2, t2), t2);
}
function Q(e2, t2) {
  const n4 = t2?.unit ?? "square-meters", i = t2?.lengthUnit ?? Me(n4), s3 = u3(e2) ?? e2, a2 = n2(s3, __spreadValues({ unit: n4 }, t2));
  return { area: s(a2, n4), centroid: t2?.returnCentroid ? F(s3).toJSON() : void 0, length: t2?.returnLength ? T2(s3, { unit: i }) : void 0 };
}
function T2(e2, r2) {
  const o2 = r2?.unit ?? "meters";
  return f(r(e2, __spreadProps(__spreadValues({}, r2), { unit: o2 })), o2);
}
function V({ geometryJSON: e2, options: t2 }) {
  return T2(B(e2, t2), t2);
}
function X({ geometry1JSON: e2, geometry2JSON: r2, options: o2 }) {
  const n4 = _.fromJSON(e2), i = _.fromJSON(r2), s3 = o2?.unit ?? "meters";
  return f(c2(n4, i, __spreadProps(__spreadValues({}, o2), { unit: s3 })), s3);
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
  return c(a2, r2, o2), c(a2, a2, t2), e2.x = a2[0], e2.y = a2[1], e2.z = a2[2], e2.spatialReference = n4, an(e2, e2.spatialReference, s3)?.toJSON() ?? void 0;
}
function se(e2, t2, r2, o2) {
  let f4 = 0;
  u2(t2, 0, 0, 0);
  for (const n4 of e2.rings) for (const e3 of n4) t2[0] += e3[0], t2[1] += e3[1], t2[2] += e3[2], f4++;
  x(t2, t2, 1 / f4);
  const p3 = ue;
  _2(p3, t2);
  const u4 = le, l3 = Math.atan2(p3[1], p3[0]);
  u2(u4, -Math.sin(l3), Math.cos(l3), 0), T(e2.spatialReference, a) && (m4(t2, p3, p, p3, e2.spatialReference), m4(t2, u4, p, u4, e2.spatialReference)), b(u4, p3, r2), P2(o2, r2, p3);
  const g = pe;
  for (const i of e2.rings) for (const e3 of i) {
    u2(g, e3[0], e3[1], e3[2]), e(g, g, t2);
    const i2 = A3(r2, g), s3 = A3(o2, g);
    e3[0] = i2, e3[1] = s3;
  }
  e2.hasZ = false, e2.spatialReference = S.WebMercator;
}
function ae(e2) {
  return e2 ? U(e2) ? P(e2) || O(e2) || C(e2) || A2(e2) || T(e2, a) ? { mode: 1, spatialReference: a } : { mode: 0, spatialReference: e2 } : { mode: 1, spatialReference: u(e2) } : null;
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
//# sourceMappingURL=MeasurementWorker-3MEUSML3.js.map
