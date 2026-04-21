import {
  D,
  I,
  O,
  P,
  R,
  b,
  x,
  z as z3
} from "./chunk-5EURPIOC.js";
import {
  l
} from "./chunk-2P4POXQG.js";
import {
  t
} from "./chunk-JLMB65LM.js";
import {
  a
} from "./chunk-CWBPOIGY.js";
import {
  p
} from "./chunk-D73LDRDL.js";
import {
  Ae,
  B,
  Je,
  Ke,
  Pe,
  Re,
  Se,
  U,
  ge,
  ie,
  je,
  ne,
  oe,
  re,
  te,
  ve,
  z as z2
} from "./chunk-5MXYX4KI.js";
import {
  o as o2
} from "./chunk-B4FJHFAW.js";
import {
  n
} from "./chunk-G3XGV2JB.js";
import {
  M
} from "./chunk-P476LLZ4.js";
import {
  u
} from "./chunk-K5YEU7YE.js";
import {
  o
} from "./chunk-UDRKO2UK.js";
import {
  m
} from "./chunk-FH7ZMRUF.js";
import {
  j
} from "./chunk-2YANO3UR.js";
import {
  y3 as y
} from "./chunk-GTWJPBIK.js";
import {
  z2 as z
} from "./chunk-ORVZAZPX.js";
import {
  _,
  s as s2
} from "./chunk-YVKQ6DO2.js";
import {
  f2 as f,
  s2 as s
} from "./chunk-TPFIN626.js";
import {
  h
} from "./chunk-XCN5EJK7.js";

// node_modules/@arcgis/core/portal/support/utils.js
async function r(r2, t2, s3) {
  const u2 = s?.findCredential(r2.restUrl);
  if (!u2) return null;
  if ("loaded" === r2.loadStatus && "" === t2 && r2.user?.sourceJSON && false === s3) return r2.user.sourceJSON;
  const o3 = { responseType: "json", query: { f: "json" } };
  if (s3 && (o3.query.returnUserLicenseTypeExtensions = true), "" === t2) {
    const e = await f(r2.restUrl + "/community/self", o3);
    if (e.data) {
      const n2 = e.data;
      if (n2?.username) return n2;
    }
    return null;
  }
  const i = await f(r2.restUrl + "/community/users/" + t2, o3);
  if (i.data) {
    const e = i.data;
    return e.error ? null : e;
  }
  return null;
}

// node_modules/@arcgis/core/arcade/functions/geomasync.js
function z4(n2) {
  if (null == n2) return n2;
  switch (typeof n2) {
    case "string":
    case "number":
      return n2;
    default:
      throw new n(null, "InvalidParameter", null);
  }
}
function B2(B3) {
  "async" === B3.mode && (B3.functions.disjoint = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, (e, r2, i) => (i = Je(i), P(i, n2, t2), null === i[0] || null === i[1] || a("disjoint", [i[0].toJSON(), i[1].toJSON()])));
  }, B3.functions.intersects = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, (e, r2, i) => (i = Je(i), P(i, n2, t2), null !== i[0] && null !== i[1] && a("intersects", [i[0].toJSON(), i[1].toJSON()])));
  }, B3.functions.touches = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, (e, r2, i) => (i = Je(i), P(i, n2, t2), null !== i[0] && null !== i[1] && a("touches", [i[0].toJSON(), i[1].toJSON()])));
  }, B3.functions.crosses = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, (e, r2, i) => (i = Je(i), P(i, n2, t2), null !== i[0] && null !== i[1] && a("crosses", [i[0].toJSON(), i[1].toJSON()])));
  }, B3.functions.within = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, (e, r2, i) => (i = Je(i), P(i, n2, t2), null !== i[0] && null !== i[1] && a("within", [i[0].toJSON(), i[1].toJSON()])));
  }, B3.functions.contains = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, (e, r2, i) => (i = Je(i), P(i, n2, t2), null !== i[0] && null !== i[1] && a("contains", [i[0].toJSON(), i[1].toJSON()])));
  }, B3.functions.overlaps = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, (e, r2, i) => (i = Je(i), P(i, n2, t2), null !== i[0] && null !== i[1] && a("overlaps", [i[0].toJSON(), i[1].toJSON()])));
  }, B3.functions.equals = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, (e, r2, a2) => (oe(a2, 2, 2, n2, t2), a2[0] === a2[1] || (a2[0] instanceof s2 && a2[1] instanceof s2 ? a("equals", [a2[0].toJSON(), a2[1].toJSON()]) : (ne(a2[0]) && ne(a2[1]) || !!(ie(a2[0]) && ie(a2[1]) || re(a2[0]) && re(a2[1]))) && a2[0].equals(a2[1]))));
  }, B3.functions.relate = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, (r2, o3, s3) => {
      if (s3 = Je(s3), oe(s3, 3, 3, n2, t2), s3[0] instanceof s2 && s3[1] instanceof s2) return a("relate", [s3[0].toJSON(), s3[1].toJSON(), ge(s3[2])]);
      if (s3[0] instanceof s2 && null === s3[1]) return false;
      if (s3[1] instanceof s2 && null === s3[0]) return false;
      if (null === s3[0] && null === s3[1]) return false;
      throw new n(n2, "InvalidParameter", t2);
    });
  }, B3.functions.intersection = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (e, r2, i) => (i = Je(i), P(i, n2, t2), null === i[0] || null === i[1] ? null : u(await a("intersection", [i[0].toJSON(), i[1].toJSON()]))));
  }, B3.functions.union = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (i, o3, s3) => {
      if (0 === (s3 = Je(s3)).length) throw new n(n2, "WrongNumberOfParameters", t2);
      const c = [];
      if (1 === s3.length) if (o(s3[0])) {
        for (const r2 of Je(s3[0])) if (null !== r2) {
          if (!(r2 instanceof s2)) throw new n(n2, "InvalidParameter", t2);
          c.push(r2.toJSON());
        }
      } else {
        if (!te(s3[0])) {
          if (s3[0] instanceof s2) return je(o2(s3[0]), n2.spatialReference);
          if (null === s3[0]) return null;
          throw new n(n2, "InvalidParameter", t2);
        }
        for (const r2 of Je(s3[0].toArray())) if (null !== r2) {
          if (!(r2 instanceof s2)) throw new n(n2, "InvalidParameter", t2);
          c.push(r2.toJSON());
        }
      }
      else for (const r2 of s3) if (null !== r2) {
        if (!(r2 instanceof s2)) throw new n(n2, "InvalidParameter", t2);
        c.push(r2.toJSON());
      }
      return 0 === c.length ? null : u(await a("union", [c]));
    });
  }, B3.functions.difference = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (e, i, o3) => (o3 = Je(o3), P(o3, n2, t2), null === o3[0] ? null : null === o3[1] ? o2(o3[0]) : u(await a("difference", [o3[0].toJSON(), o3[1].toJSON()]))));
  }, B3.functions.symmetricdifference = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (e, i, o3) => (o3 = Je(o3), P(o3, n2, t2), null === o3[0] && null === o3[1] ? null : null === o3[0] ? o2(o3[1]) : null === o3[1] ? o2(o3[0]) : u(await a("symmetricDifference", [o3[0].toJSON(), o3[1].toJSON()]))));
  }, B3.functions.clip = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      if (s3 = Je(s3), oe(s3, 2, 2, n2, t2), !(s3[1] instanceof z) && null !== s3[1]) throw new n(n2, "InvalidParameter", t2);
      if (null === s3[0]) return null;
      if (!(s3[0] instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      return null === s3[1] ? null : u(await a("clip", [s3[0].toJSON(), s3[1].toJSON()]));
    });
  }, B3.functions.cut = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (o3, s3, c) => {
      if (c = Je(c), oe(c, 2, 2, n2, t2), !(c[1] instanceof y) && null !== c[1]) throw new n(n2, "InvalidParameter", t2);
      if (null === c[0]) return [];
      if (!(c[0] instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      return null === c[1] ? [o2(c[0])] : (await a("cut", [c[0].toJSON(), c[1].toJSON()])).map((n3) => u(n3));
    });
  }, B3.functions.area = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      if (oe(s3, 1, 2, n2, t2), s3 = Je(s3), B(s3[0])) {
        const r3 = await s3[0].sumArea(z4(s3[1]), null, n2.abortSignal);
        if (n2.abortSignal.aborted) throw new n(n2, "Cancelled", t2);
        return r3;
      }
      let c = s3[0];
      if ((o(c) || te(c)) && (c = Re(s3[0], n2.spatialReference)), null === c) return 0;
      if (!(c instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      return a("area", [c.toJSON(), z4(s3[1])]);
    });
  }, B3.functions.areageodetic = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      oe(s3, 1, 3, n2, t2);
      let c = (s3 = Je(s3))[0];
      (o(c) || te(c)) && (c = Re(c, n2.spatialReference));
      const l2 = z4(s3[1]), f2 = D(s3[2]);
      if (B(c)) {
        const r3 = await c.sumArea(l2, f2, n2.abortSignal);
        if (n2.abortSignal.aborted) throw new n(n2, "Cancelled", t2);
        return r3;
      }
      if (null == c) return 0;
      if (!U(c)) throw new n(n2, "InvalidParameter", t2);
      return a("geodeticArea", [c.toJSON(), l2, f2]);
    });
  }, B3.functions.length = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      if (oe(s3, 1, 2, n2, t2), s3 = Je(s3), B(s3[0])) {
        const r3 = await s3[0].sumLength(z4(s3[1]), null, n2.abortSignal);
        if (n2.abortSignal.aborted) throw new n(n2, "Cancelled", t2);
        return r3;
      }
      let c = s3[0];
      if ((o(s3[0]) || te(s3[0])) && (c = ve(s3[0], n2.spatialReference)), null === c) return 0;
      if (!(c instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      return a("length", [c.toJSON(), z4(s3[1])]);
    });
  }, B3.functions.length3d = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      if (oe(s3, 1, 2, n2, t2), null === (s3 = Je(s3))[0]) return 0;
      let c = s3[0];
      if ((o(s3[0]) || te(s3[0])) && (c = ve(s3[0], n2.spatialReference)), null === c) return 0;
      if (!(c instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      if (true === c.hasZ) {
        const { convertFromSpatialReferenceUnit: n3, toLengthUnit: t3 } = await import("./unitConversion-AQMZPUW4.js"), e = x(c);
        return n3(c.spatialReference, t3(s3[1]), e);
      }
      return a("length", [c.toJSON(), z4(s3[1])]);
    });
  }, B3.functions.lengthgeodetic = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      oe(s3, 1, 3, n2, t2);
      let c = (s3 = Je(s3))[0];
      (o(s3[0]) || te(s3[0])) && (c = ve(s3[0], n2.spatialReference));
      const l2 = z4(s3[1]), f2 = D(s3[2]);
      if (B(c)) {
        const r3 = await c.sumLength(l2, f2, n2.abortSignal);
        if (n2.abortSignal.aborted) throw new n(n2, "Cancelled", t2);
        return r3;
      }
      if (null === c) return 0;
      if (!U(c)) throw new n(n2, "InvalidParameter", t2);
      return a("geodeticLength", [c.toJSON(), l2, f2]);
    });
  }, B3.functions.distance = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      s3 = Je(s3), oe(s3, 2, 3, n2, t2);
      let c = s3[0];
      if ((o(s3[0]) || te(s3[0])) && (c = Pe(s3[0], n2.spatialReference)), !(c instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      let l2 = s3[1];
      if ((o(s3[1]) || te(s3[1])) && (l2 = Pe(s3[1], n2.spatialReference)), !(l2 instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      return a("distance", [c.toJSON(), l2.toJSON(), z4(s3[2])]);
    });
  }, B3.functions.distancegeodetic = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      s3 = Je(s3), oe(s3, 2, 4, n2, t2);
      const c = s3[0];
      if (!(c instanceof _)) throw new n(n2, "InvalidParameter", t2);
      const l2 = s3[1];
      if (!(l2 instanceof _)) throw new n(n2, "InvalidParameter", t2);
      const u2 = new y({ paths: [], spatialReference: c.spatialReference });
      return u2.addPath([c, l2]), a("geodeticLength", [u2.toJSON(), z4(s3[2]), D(s3[3])]);
    });
  }, B3.functions.densify = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      if (s3 = Je(s3), oe(s3, 2, 3, n2, t2), null === s3[0]) return null;
      if (!(s3[0] instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      const c = Se(s3[1]);
      if (isNaN(c)) throw new n(n2, "InvalidParameter", t2);
      if (c <= 0) throw new n(n2, "InvalidParameter", t2);
      switch (s3[0].type) {
        case "polygon":
        case "polyline":
        case "extent":
          return u(await a("densify", [s3[0].toJSON(), c, z4(s3[2])]));
        default:
          return s3[0];
      }
    });
  }, B3.functions.densifygeodetic = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      s3 = Je(s3), oe(s3, 2, 4, n2, t2);
      const c = s3[0];
      if (null == c) return null;
      if (!U(c)) throw new n(n2, "InvalidParameter", t2);
      const l2 = Se(s3[1]);
      if (isNaN(l2)) throw new n(n2, "InvalidParameter", t2);
      if (l2 <= 0) throw new n(n2, "InvalidParameter", t2);
      const u2 = z4(s3[2]), f2 = D(s3[3]);
      switch (c.type) {
        case "polygon":
        case "polyline":
        case "extent":
          return u(await a("geodeticDensify", [c.toJSON(), l2, u2, f2]));
        default:
          return c;
      }
    });
  }, B3.functions.generalize = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      if (s3 = Je(s3), oe(s3, 2, 4, n2, t2), null === s3[0]) return null;
      if (!(s3[0] instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      const c = Se(s3[1]);
      if (isNaN(c)) throw new n(n2, "InvalidParameter", t2);
      const l2 = Ae(z2(s3[2], true));
      return u(await a("generalize", [s3[0].toJSON(), c, z4(s3[3]), { removeDegenerateParts: l2 }]));
    });
  }, B3.functions.buffer = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (o3, s3, c) => {
      if (c = Je(c), oe(c, 2, 3, n2, t2), null === c[0]) return null;
      if (!(c[0] instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      const l2 = Se(c[1]);
      if (isNaN(l2)) throw new n(n2, "InvalidParameter", t2);
      return 0 === l2 ? o2(c[0]) : u(await a("buffer", [c[0].toJSON(), l2, z4(c[2])]));
    });
  }, B3.functions.buffergeodetic = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (o3, s3, c) => {
      c = Je(c), oe(c, 2, 4, n2, t2);
      const l2 = c[0];
      if (null == l2) return null;
      if (!U(l2)) throw new n(n2, "InvalidParameter", t2);
      const u2 = Se(c[1]);
      if (isNaN(u2)) throw new n(n2, "InvalidParameter", t2);
      if (0 === u2) return o2(l2);
      const f2 = z4(c[2]), d = D(c[3]);
      return u(await a("geodesicBuffer", [l2.toJSON(), u2, f2, d]));
    });
  }, B3.functions.offset = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      s3 = Je(s3), oe(s3, 2, 6, n2, t2);
      const c = s3[0];
      if (null === c) return null;
      if (!(c instanceof j || c instanceof y)) throw new n(n2, "InvalidParameter", t2);
      const l2 = Se(s3[1]);
      if (isNaN(l2)) throw new n(n2, "InvalidParameter", t2);
      const u2 = s3[2], f2 = z3(s3[3]), d = Se(z2(s3[4], 10));
      if (isNaN(d)) throw new n(n2, "InvalidParameter", t2);
      const w = Se(z2(s3[5], 0));
      if (isNaN(w)) throw new n(n2, "InvalidParameter", t2);
      return u(await a("offset", [c.toJSON(), l2, z4(u2), f2, d, w]));
    });
  }, B3.functions.rotate = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      if (s3 = Je(s3), oe(s3, 2, 3, n2, t2), null === s3[0]) return null;
      if (!(s3[0] instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      const c = s3[0] instanceof z ? j.fromExtent(s3[0]) : s3[0], l2 = Se(s3[1]);
      if (isNaN(l2)) throw new n(n2, "InvalidParameter", t2);
      const u2 = z2(s3[2], null);
      if (null === u2) {
        const n3 = "point" === c.type ? c : c.extent?.center;
        return u(await a("rotate", [c.toJSON(), l2, n3?.x, n3?.y]));
      }
      if (u2 instanceof _) return u(await a("rotate", [c.toJSON(), l2, u2.x, u2.y]));
      throw new n(n2, "InvalidParameter", t2);
    });
  }, B3.functions.centroid = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      if (s3 = Je(s3), oe(s3, 1, 2, n2, t2), null === s3[0]) return null;
      const c = O(s3[1]);
      let l2 = s3[0];
      if ((o(s3[0]) || te(s3[0])) && (l2 = "geometric" === c ? Pe(s3[0], n2.spatialReference) : Re(s3[0], n2.spatialReference), null === l2)) return null;
      if (!(l2 instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      return u("geometric" === c ? await a("centroid", [l2.toJSON()]) : await a("labelPoint", [l2.toJSON()]));
    });
  }, B3.functions.measuretocoordinate = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, I);
  }, B3.functions.pointtocoordinate = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, R);
  }, B3.functions.distancetocoordinate = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, b);
  }, B3.functions.multiparttosinglepart = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (o3, s3, c) => {
      if (c = Je(c), oe(c, 1, 1, n2, t2), null === c[0]) return null;
      if (!(c[0] instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      if (c[0] instanceof _) return [je(o2(c[0]), n2.spatialReference)];
      if (c[0] instanceof z) return [je(o2(c[0]), n2.spatialReference)];
      const l2 = u(await a("simplify", [c[0].toJSON()]));
      if (l2 instanceof j) {
        const n3 = [], t3 = [];
        for (let e = 0; e < l2.rings.length; e++) if (l2.isClockwise(l2.rings[e])) {
          const t4 = u({ rings: [l2.rings[e]], hasZ: true === l2.hasZ, hasM: true === l2.hasM, spatialReference: l2.spatialReference.toJSON() });
          n3.push(t4);
        } else t3.push({ ring: l2.rings[e], pt: l2.getPoint(e, 0) });
        for (let e = 0; e < t3.length; e++) for (let r2 = 0; r2 < n3.length; r2++) if (n3[r2].contains(t3[e].pt)) {
          n3[r2].addRing(t3[e].ring);
          break;
        }
        return n3;
      }
      if (l2 instanceof y) {
        const n3 = [];
        for (let t3 = 0; t3 < l2.paths.length; t3++) {
          const e = u({ paths: [l2.paths[t3]], hasZ: true === l2.hasZ, hasM: true === l2.hasM, spatialReference: l2.spatialReference.toJSON() });
          n3.push(e);
        }
        return n3;
      }
      if (c[0] instanceof m) {
        const t3 = [], e = je(o2(c[0]), n2.spatialReference);
        for (let n3 = 0; n3 < e.points.length; n3++) t3.push(e.getPoint(n3));
        return t3;
      }
      return null;
    });
  }, B3.functions.isselfintersecting = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (n3, t3, e) => {
      oe(e, 1, 1, n3, t3);
      let r2 = (e = Je(e))[0];
      if ((o(e[0]) || te(e[0])) && (r2 = ve(e[0], n3.spatialReference)), r2 instanceof m) {
        const n4 = r2.points;
        for (let t4 = 0; t4 < n4.length; t4++) for (let e2 = t4 + 1; e2 < n4.length; e2++) if (h(n4[t4], n4[e2])) return true;
        return false;
      }
      return (r2 instanceof y || r2 instanceof j) && await a("isSelfIntersecting", [r2.toJSON()]);
    });
  }, B3.functions.issimple = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, (r2, o3, s3) => {
      if (s3 = Je(s3), oe(s3, 1, 1, n2, t2), null === s3[0]) return true;
      if (!(s3[0] instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      return a("isSimple", [s3[0].toJSON()]);
    });
  }, B3.functions.simplify = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      if (s3 = Je(s3), oe(s3, 1, 1, n2, t2), null === s3[0]) return null;
      if (!(s3[0] instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      return u(await a("simplify", [s3[0].toJSON()]));
    });
  }, B3.functions.convexhull = function(n2, t2) {
    return B3.standardFunctionAsync(n2, t2, async (r2, o3, s3) => {
      if (s3 = Je(s3), oe(s3, 1, 1, n2, t2), null === s3[0]) return null;
      if (!(s3[0] instanceof s2)) throw new n(n2, "InvalidParameter", t2);
      return u(await a("convexHull", [s3[0].toJSON()]));
    });
  }, B3.functions.getuser = function(r2, a2) {
    return B3.standardFunctionAsync(r2, a2, async (o3, s3, c) => {
      oe(c, 0, 2, r2, a2);
      let u2 = z2(c[1], ""), f2 = true === u2;
      if (u2 = true === u2 || false === u2 ? "" : ge(u2), 0 === c.length || c[0] instanceof t) {
        let n2;
        n2 = r2.services?.portal ? r2.services.portal : M.getDefault(), c.length > 0 && (n2 = l(c[0], n2));
        const e = await r(n2, u2, f2);
        if (e) {
          const n3 = JSON.parse(JSON.stringify(e));
          for (const t2 of ["lastLogin", "created", "modified"]) void 0 !== n3[t2] && null !== n3[t2] && (n3[t2] = new Date(n3[t2]));
          return p.convertObjectToArcadeDictionary(n3, Ke(r2));
        }
        return null;
      }
      let w = null;
      if (B(c[0]) && (w = c[0]), w) {
        if (f2 = false, u2) return null;
        await w.load();
        const e = await w.getOwningSystemUrl();
        if (!e) {
          if (!u2) {
            const n2 = await w.getIdentityUser();
            return n2 ? p.convertObjectToArcadeDictionary({ username: n2 }, Ke(r2)) : null;
          }
          return null;
        }
        let a3;
        a3 = r2.services?.portal ? r2.services.portal : M.getDefault(), a3 = l(new t(e), a3);
        const i = await r(a3, u2, f2);
        if (i) {
          const n2 = JSON.parse(JSON.stringify(i));
          for (const t2 of ["lastLogin", "created", "modified"]) void 0 !== n2[t2] && null !== n2[t2] && (n2[t2] = new Date(n2[t2]));
          return p.convertObjectToArcadeDictionary(n2, Ke(r2));
        }
        return null;
      }
      throw new n(r2, "InvalidParameter", a2);
    });
  }, B3.functions.nearestcoordinate = function(n2, r2) {
    return B3.standardFunctionAsync(n2, r2, async (o3, s3, c) => {
      if (c = Je(c), oe(c, 2, 2, n2, r2), !(c[0] instanceof s2 || null === c[0])) throw new n(n2, "InvalidParameter", r2);
      if (!(c[1] instanceof _ || null === c[1])) throw new n(n2, "InvalidParameter", r2);
      if (null === c[0] || null === c[1]) return null;
      const l2 = c[0] instanceof z ? j.fromExtent(c[0]) : c[0], u2 = await a("getNearestCoordinate", [l2.toJSON(), c[1].toJSON(), { calculateLeftRightSide: true }]);
      return null === u2 ? null : p.convertObjectToArcadeDictionary({ coordinate: u(u2.coordinate), distance: u2.distance, sideOfLine: 0 === u2.distance ? "straddle" : u2.isRightSide ? "right" : "left" }, Ke(n2), false, true);
    });
  }, B3.functions.nearestvertex = function(n2, r2) {
    return B3.standardFunctionAsync(n2, r2, async (o3, s3, c) => {
      if (c = Je(c), oe(c, 2, 2, n2, r2), !(c[0] instanceof s2 || null === c[0])) throw new n(n2, "InvalidParameter", r2);
      if (!(c[1] instanceof _ || null === c[1])) throw new n(n2, "InvalidParameter", r2);
      if (null === c[0] || null === c[1]) return null;
      const l2 = c[0] instanceof z ? j.fromExtent(c[0]) : c[0], u2 = await a("getNearestVertex", [l2.toJSON(), c[1].toJSON()]);
      return null == u2 ? null : p.convertObjectToArcadeDictionary({ coordinate: u(u2.coordinate), distance: u2.distance, sideOfLine: u2.sideOfLine }, Ke(n2), false, true);
    });
  });
}

export {
  B2 as B
};
//# sourceMappingURL=chunk-U4JN7ZBJ.js.map
