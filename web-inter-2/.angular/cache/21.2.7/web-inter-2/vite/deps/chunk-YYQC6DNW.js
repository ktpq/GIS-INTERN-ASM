import {
  f
} from "./chunk-APMZAVZP.js";
import {
  A,
  J,
  Z,
  nt,
  rt
} from "./chunk-D2Z2HLWL.js";
import {
  n,
  o as o2,
  u
} from "./chunk-GM5PCDS3.js";
import {
  o,
  r as r3,
  t,
  z
} from "./chunk-OYOKYTYR.js";
import {
  U
} from "./chunk-LANOLZOB.js";
import {
  r3 as r2
} from "./chunk-6I475YAP.js";
import {
  r
} from "./chunk-GLWFJLHD.js";

// node_modules/@arcgis/core/layers/graphics/data/geometryUtils.js
function o3(n4, t3, o5, i3 = n4.hasZ, s3 = n4.hasM) {
  if (null == t3) return null;
  const u4 = n4.hasZ && i3, l4 = n4.hasM && s3;
  if (o5) {
    const n5 = rt(t3, "esriGeometryPoint", o5, i3, s3);
    return Z(n5, u4, l4);
  }
  return Z(t3, u4, l4);
}
function i(e2, o5, i3, s3, u4, l4) {
  if (null == o5) return null;
  const f3 = "coords" in o5 ? o5 : o5.geometry;
  if (null == f3) return null;
  const { hasZ: c2, hasM: a } = f3, h3 = c2 && (u4 ??= c2), m2 = a && (l4 ??= a);
  if (i3) {
    let o6 = nt(f3, e2, i3, u4, l4);
    return s3 && (o6 = rt(o6, e2, s3)), J(o6, e2, h3, m2);
  }
  if (s3) {
    const n4 = rt(f3, e2, s3, u4, l4);
    return J(n4, e2, h3, m2);
  }
  return J(f3, e2, h3, m2);
}
function s(n4) {
  return n4 && u2 in n4 ? JSON.parse(JSON.stringify(n4, l)) : n4;
}
var u2 = "_geVersion";
var l = (n4, r6) => n4 === u2 ? void 0 : r6;

// node_modules/@arcgis/core/geometry/support/intersects.js
function s2(s3) {
  return "mesh" === s3 ? o : z(s3);
}

// node_modules/@arcgis/core/layers/graphics/contains.js
function t2(t3, r6) {
  return n2(t3, r6.coords[0], r6.coords[1]);
}
function r4(t3, r6) {
  const { coords: o5, lengths: e2, stride: c2 } = r6;
  if (!e2) return false;
  for (let s3 = 0, f3 = 0; s3 < e2.length; s3++, f3 += c2) if (!n2(t3, o5[f3], o5[f3 + 1])) return false;
  return true;
}
function n2(t3, r6, n4) {
  if (!t3) return false;
  const { coords: e2, lengths: c2, stride: s3 } = t3;
  let f3 = false, u4 = 0;
  for (const i3 of c2) f3 = o4(f3, e2, s3, u4, i3, r6, n4), u4 += i3 * s3;
  return f3;
}
function o4(t3, r6, n4, o5, e2, c2, s3) {
  let f3 = t3, u4 = o5;
  for (let i3 = o5, l4 = o5 + e2 * n4; i3 < l4; i3 += n4) {
    u4 = i3 + n4, u4 === l4 && (u4 = o5);
    const t4 = r6[i3], e3 = r6[i3 + 1], d = r6[u4], g3 = r6[u4 + 1];
    (e3 < s3 && g3 >= s3 || g3 < s3 && e3 >= s3) && t4 + (s3 - e3) / (g3 - e3) * (d - t4) < c2 && (f3 = !f3);
  }
  return f3;
}

// node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js
var c = "unsupported-query";
var f2 = { spatialRelationship: { esriSpatialRelIntersects: true, esriSpatialRelContains: true, esriSpatialRelWithin: true, esriSpatialRelCrosses: true, esriSpatialRelDisjoint: true, esriSpatialRelTouches: true, esriSpatialRelOverlaps: true, esriSpatialRelEnvelopeIntersects: true, esriSpatialRelIndexIntersects: false, esriSpatialRelRelation: false }, queryGeometry: { esriGeometryPoint: true, esriGeometryMultiPatch: false, esriGeometryMultipoint: true, esriGeometryPolyline: true, esriGeometryPolygon: true, esriGeometryEnvelope: true }, layerGeometry: { esriGeometryPoint: true, esriGeometryMultiPatch: true, esriGeometryMultipoint: true, esriGeometryPolyline: true, esriGeometryPolygon: true, esriGeometryEnvelope: false } };
function R(e2) {
  return null != e2 && true === f2.spatialRelationship[e2];
}
function S(e2) {
  return null != e2 && true === f2.queryGeometry[u(e2)];
}
function j(e2) {
  return null != e2 && true === f2.layerGeometry[e2];
}
var g2 = { esriSpatialRelIntersects: () => import("./intersectsOperator-F3VYUR3U.js"), esriSpatialRelContains: () => import("./containsOperator-ABVGIURM.js"), esriSpatialRelCrosses: () => import("./crossesOperator-RBE6EXGY.js"), esriSpatialRelDisjoint: () => import("./disjointOperator-HHJMB737.js"), esriSpatialRelEnvelopeIntersects: null, esriSpatialRelIndexIntersects: null, esriSpatialRelOverlaps: () => import("./overlapsOperator-GMURTYBK.js"), esriSpatialRelTouches: () => import("./touchesOperator-MTMOIFL3.js"), esriSpatialRelWithin: () => import("./withinOperator-I526SZKR.js"), esriSpatialRelRelation: null };
function G(e2) {
  const r6 = g2[e2];
  if (null == r6) throw new Error(`Cannot load unsupported spatial operator: ${e2}`);
  return r6();
}
async function h2(e2, n4, a) {
  if (o2(n4)) {
    if ("esriGeometryPoint" === a && ("esriSpatialRelIntersects" === e2 || "esriSpatialRelContains" === e2)) {
      const e3 = A(n4, false, false);
      return (r6) => t2(e3, r6);
    }
    if ("esriGeometryMultipoint" === a) {
      const r6 = A(n4, false, false);
      if ("esriSpatialRelContains" === e2) return (e3) => r4(r6, e3);
    }
  }
  if (n(n4)) {
    if ("esriGeometryPoint" === a && ("esriSpatialRelIntersects" === e2 || "esriSpatialRelContains" === e2)) return (e3) => t(n4, i(a, e3));
    if ("esriGeometryMultipoint" === a && "esriSpatialRelContains" === e2) return (e3) => r3(n4, i(a, e3));
    if ("esriSpatialRelIntersects" === e2) {
      const e3 = s2(a);
      return (r6) => e3(n4, i(a, r6));
    }
  }
  "esriSpatialRelEnvelopeIntersects" === e2 && (e2 = "esriSpatialRelIntersects");
  const y = await G(e2);
  return (e3) => y.execute(n4, i(a, e3));
}
async function I(r6, t3, i3) {
  const { spatialRel: o5, geometry: s3 } = r6;
  if (s3) {
    if (!R(o5)) throw new r2(c, "Unsupported query spatial relationship", { query: r6 });
    if (U(s3.spatialReference) && U(i3)) {
      if (!S(s3)) throw new r2(c, "Unsupported query geometry type", { query: r6 });
      if (!j(t3)) throw new r2(c, "Unsupported layer geometry type", { query: r6 });
      if (r6.outSR) return f(r6.geometry?.spatialReference, r6.outSR);
    }
  }
}
function w(e2) {
  if (n(e2)) return true;
  if (o2(e2)) {
    for (const r6 of e2.rings) {
      if (5 !== r6.length) return false;
      if (r6[0][0] !== r6[1][0] || r6[0][0] !== r6[4][0] || r6[2][0] !== r6[3][0] || r6[0][1] !== r6[3][1] || r6[0][1] !== r6[4][1] || r6[1][1] !== r6[2][1]) return false;
    }
    return true;
  }
  return false;
}

// node_modules/@arcgis/core/layers/graphics/data/timeSupport.js
async function n3(n4, l4) {
  if (!n4) return null;
  const u4 = l4.featureAdapter, { startTimeField: r6, endTimeField: e2 } = n4;
  let i3 = Number.POSITIVE_INFINITY, o5 = Number.NEGATIVE_INFINITY;
  if (r6 && e2) await l4.forEach((n5) => {
    const l5 = u4.getAttribute(r(n5), r6), s3 = u4.getAttribute(r(n5), e2);
    null == l5 || isNaN(l5) || (i3 = Math.min(i3, l5)), null == s3 || isNaN(s3) || (o5 = Math.max(o5, s3));
  });
  else {
    const n5 = r6 || e2;
    await l4.forEach((l5) => {
      const r7 = u4.getAttribute(r(l5), n5);
      null == r7 || isNaN(r7) || (i3 = Math.min(i3, r7), o5 = Math.max(o5, r7));
    });
  }
  return { start: i3, end: o5 };
}
function l3(t3, n4, l4) {
  if (!n4 || !t3) return null;
  const { startTimeField: i3, endTimeField: o5 } = t3;
  if (!i3 && !o5) return null;
  const { start: s3, end: a } = n4;
  if (null === s3 && null === a) return null;
  if (void 0 === s3 && void 0 === a) return e();
  const c2 = l4.getAttributeAsTimestamp?.bind(l4) ?? l4.getAttribute.bind(l4);
  return i3 && o5 ? u3(c2, i3, o5, s3, a) : r5(c2, i3 || o5, s3, a);
}
function u3(t3, n4, l4, u4, r6) {
  return null != u4 && null != r6 ? (e2) => {
    const i3 = t3(e2, n4), o5 = t3(e2, l4);
    return (null == i3 || i3 <= r6) && (null == o5 || o5 >= u4);
  } : null != u4 ? (n5) => {
    const r7 = t3(n5, l4);
    return null == r7 || r7 >= u4;
  } : null != r6 ? (l5) => {
    const u5 = t3(l5, n4);
    return null == u5 || u5 <= r6;
  } : void 0;
}
function r5(t3, n4, l4, u4) {
  return null != l4 && null != u4 && l4 === u4 ? (u5) => t3(u5, n4) === l4 : null != l4 && null != u4 ? (r6) => {
    const e2 = t3(r6, n4);
    return null != e2 && e2 >= l4 && e2 <= u4;
  } : null != l4 ? (u5) => {
    const r6 = t3(u5, n4);
    return null != r6 && r6 >= l4;
  } : null != u4 ? (l5) => {
    const r6 = t3(l5, n4);
    return null != r6 && r6 <= u4;
  } : void 0;
}
function e() {
  return () => false;
}

export {
  o3 as o,
  i,
  s,
  h2 as h,
  I,
  w,
  n3 as n,
  l3 as l
};
//# sourceMappingURL=chunk-YYQC6DNW.js.map
