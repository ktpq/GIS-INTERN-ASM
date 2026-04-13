import {
  s as s8
} from "./chunk-IFJNDNEE.js";
import {
  E,
  P as P2,
  _ as _3,
  a,
  b as b2,
  b2 as b4,
  d,
  f as f2,
  g,
  g2 as g3,
  i as i2,
  j as j2,
  l as l2,
  l2 as l3,
  o as o3,
  p as p3,
  p2 as p4,
  s as s4,
  s2 as s5,
  s3 as s7,
  u as u2
} from "./chunk-7VPGM7XN.js";
import {
  T
} from "./chunk-4JLAUTVL.js";
import {
  M,
  b,
  p as p2,
  x,
  y as y2
} from "./chunk-A5OJG5V4.js";
import {
  D,
  I as I3,
  O,
  P as P3,
  R as R2,
  b as b3,
  x as x2,
  z as z3
} from "./chunk-CG5XSOLV.js";
import {
  r as r2,
  t as t2
} from "./chunk-PK262WYA.js";
import {
  I as I2
} from "./chunk-UFM6MIJC.js";
import {
  p
} from "./chunk-GRTVQTEC.js";
import {
  Ae,
  H,
  I,
  Je,
  K,
  Ke,
  L,
  Le,
  P,
  Pe,
  Q,
  R,
  Re,
  Se,
  U,
  _ as _2,
  de,
  e as e2,
  ge,
  ie,
  je,
  n as n5,
  ne,
  oe,
  q,
  r as r3,
  re,
  s as s3,
  s2 as s6,
  te,
  tt,
  v,
  ve,
  ye,
  z as z2
} from "./chunk-R4SZFRNU.js";
import {
  M as M2,
  g as g2,
  h as h2,
  k,
  o as o4,
  w,
  y as y3
} from "./chunk-ZCK3VSUL.js";
import {
  o as o2
} from "./chunk-KUQTK7UY.js";
import {
  c,
  i,
  l,
  n as n4,
  s as s2
} from "./chunk-N7U7MERC.js";
import {
  t as t3
} from "./chunk-LKWKFYCL.js";
import {
  e,
  n as n3,
  o,
  t
} from "./chunk-TPJLJ32L.js";
import {
  u
} from "./chunk-4YKWF6M6.js";
import {
  m
} from "./chunk-BMYA7NZP.js";
import {
  j
} from "./chunk-V7SQTPST.js";
import {
  y3 as y
} from "./chunk-NNANCYKT.js";
import {
  M as M3
} from "./chunk-RMATTWBS.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import {
  _,
  s
} from "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import {
  f2 as f
} from "./chunk-2OF3JE3F.js";
import {
  r
} from "./chunk-MSRN4ADD.js";
import {
  C,
  n2
} from "./chunk-POW25PFR.js";
import {
  has,
  n2 as n
} from "./chunk-IDI4VM7T.js";
import {
  h
} from "./chunk-KWV5EQET.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/functions/geomsync.js
var G;
async function H2() {
  null == G && (G = await import("./operators-F4THCLP4.js"), await G.loadAll());
}
function F(H5, F4) {
  H5.disjoint = function(e4, n7) {
    return F4(e4, n7, (t5, i5, a3) => (a3 = Je(a3), P3(a3, e4, n7), null === a3[0] || null === a3[1] || G.disjoint.execute(a3[0], a3[1])));
  }, H5.intersects = function(e4, n7) {
    return F4(e4, n7, (t5, i5, a3) => (a3 = Je(a3), P3(a3, e4, n7), null !== a3[0] && null !== a3[1] && G.intersects.execute(a3[0], a3[1])));
  }, H5.touches = function(e4, n7) {
    return F4(e4, n7, (t5, i5, a3) => (a3 = Je(a3), P3(a3, e4, n7), null !== a3[0] && null !== a3[1] && G.touches.execute(a3[0], a3[1])));
  }, H5.crosses = function(e4, n7) {
    return F4(e4, n7, (t5, i5, a3) => (a3 = Je(a3), P3(a3, e4, n7), null !== a3[0] && null !== a3[1] && G.crosses.execute(a3[0], a3[1])));
  }, H5.within = function(e4, n7) {
    return F4(e4, n7, (t5, i5, a3) => (a3 = Je(a3), P3(a3, e4, n7), null !== a3[0] && null !== a3[1] && G.within.execute(a3[0], a3[1])));
  }, H5.contains = function(e4, n7) {
    return F4(e4, n7, (t5, i5, a3) => (a3 = Je(a3), P3(a3, e4, n7), null !== a3[0] && null !== a3[1] && G.contains.execute(a3[0], a3[1])));
  }, H5.overlaps = function(e4, n7) {
    return F4(e4, n7, (t5, i5, a3) => (a3 = Je(a3), P3(a3, e4, n7), null !== a3[0] && null !== a3[1] && G.overlaps.execute(a3[0], a3[1])));
  }, H5.equals = function(e4, n7) {
    return F4(e4, n7, (t5, r5, u4) => (oe(u4, 2, 2, e4, n7), u4[0] === u4[1] || (u4[0] instanceof s && u4[1] instanceof s ? G.equals.execute(u4[0], u4[1]) : (ne(u4[0]) && ne(u4[1]) || ie(u4[0]) && ie(u4[1]) || !(!re(u4[0]) || !re(u4[1]))) && u4[0].equals(u4[1]))));
  }, H5.relate = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      if (o6 = Je(o6), oe(o6, 3, 3, e4, t5), o6[0] instanceof s && o6[1] instanceof s) return G.relate.execute(o6[0], o6[1], ge(o6[2]));
      if (o6[0] instanceof s && null === o6[1]) return false;
      if (o6[1] instanceof s && null === o6[0]) return false;
      if (null === o6[0] && null === o6[1]) return false;
      throw new n4(e4, "InvalidParameter", t5);
    });
  }, H5.intersection = function(e4, n7) {
    return F4(e4, n7, (t5, i5, a3) => (a3 = Je(a3), P3(a3, e4, n7), null === a3[0] || null === a3[1] ? null : G.intersection.execute(a3[0], a3[1])));
  }, H5.union = function(e4, i5) {
    return F4(e4, i5, (a3, l5, o6) => {
      if (0 === (o6 = Je(o6)).length) throw new n4(e4, "WrongNumberOfParameters", i5);
      const u4 = [];
      if (1 === o6.length) if (o(o6[0])) {
        for (const t5 of Je(o6[0])) if (null !== t5) {
          if (!(t5 instanceof s)) throw new n4(e4, "InvalidParameter", i5);
          u4.push(t5);
        }
      } else {
        if (!te(o6[0])) {
          if (o6[0] instanceof s) return je(o2(o6[0]), e4.spatialReference);
          if (null === o6[0]) return null;
          throw new n4(e4, "InvalidParameter", i5);
        }
        for (const t5 of Je(o6[0].toArray())) if (null !== t5) {
          if (!(t5 instanceof s)) throw new n4(e4, "InvalidParameter", i5);
          u4.push(t5);
        }
      }
      else for (const t5 of o6) if (null !== t5) {
        if (!(t5 instanceof s)) throw new n4(e4, "InvalidParameter", i5);
        u4.push(t5);
      }
      return 0 === u4.length ? null : G.union.executeMany(u4);
    });
  }, H5.difference = function(e4, n7) {
    return F4(e4, n7, (i5, a3, l5) => (l5 = Je(l5), P3(l5, e4, n7), null === l5[0] ? null : null === l5[1] ? o2(l5[0]) : G.difference.execute(l5[0], l5[1])));
  }, H5.symmetricdifference = function(e4, n7) {
    return F4(e4, n7, (i5, a3, l5) => (l5 = Je(l5), P3(l5, e4, n7), null === l5[0] && null === l5[1] ? null : null === l5[0] ? o2(l5[1]) : null === l5[1] ? o2(l5[0]) : G.symmetricDifference.execute(l5[0], l5[1])));
  }, H5.clip = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      if (o6 = Je(o6), oe(o6, 2, 2, e4, t5), !(o6[1] instanceof z) && null !== o6[1]) throw new n4(e4, "InvalidParameter", t5);
      if (null === o6[0]) return null;
      if (!(o6[0] instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      return null === o6[1] ? null : G.clip.execute(o6[0], o6[1]);
    });
  }, H5.cut = function(e4, a3) {
    return F4(e4, a3, (l5, o6, u4) => {
      if (u4 = Je(u4), oe(u4, 2, 2, e4, a3), !(u4[1] instanceof y) && null !== u4[1]) throw new n4(e4, "InvalidParameter", a3);
      if (null === u4[0]) return [];
      if (!(u4[0] instanceof s)) throw new n4(e4, "InvalidParameter", a3);
      return null === u4[1] ? [o2(u4[0])] : G.cut.execute(u4[0], u4[1]);
    });
  }, H5.area = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      oe(o6, 1, 2, e4, t5);
      let u4 = (o6 = Je(o6))[0];
      if ((o(o6[0]) || te(o6[0])) && (u4 = Re(o6[0], e4.spatialReference)), null === u4) return 0;
      if (!(u4 instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      return k(u4.spatialReference, g2(o6[1]), G.area.execute(u4));
    });
  }, H5.areageodetic = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      oe(o6, 1, 3, e4, t5);
      let u4 = (o6 = Je(o6))[0];
      (o(u4) || te(u4)) && (u4 = Re(u4, e4.spatialReference));
      const c3 = g2(o6[1]), d4 = D(o6[2]);
      if (null == u4) return 0;
      if (!U(u4)) throw new n4(e4, "InvalidParameter", t5);
      return y3(M2, c3, G.geodeticArea.execute(u4, { curveType: d4 }));
    });
  }, H5.length = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      oe(o6, 1, 2, e4, t5);
      let u4 = (o6 = Je(o6))[0];
      if ((o(o6[0]) || te(o6[0])) && (u4 = ve(o6[0], e4.spatialReference)), null === u4) return 0;
      if (!(u4 instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      return k(u4.spatialReference, w(o6[1]), G.length.execute(u4));
    });
  }, H5.length3d = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      oe(o6, 1, 2, e4, t5);
      let u4 = (o6 = Je(o6))[0];
      if ((o(o6[0]) || te(o6[0])) && (u4 = ve(o6[0], e4.spatialReference)), null === u4) return 0;
      if (!(u4 instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      return true === u4.hasZ ? k(u4.spatialReference, w(o6[1]), x2(u4)) : k(u4.spatialReference, w(o6[1]), G.length.execute(u4));
    });
  }, H5.lengthgeodetic = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      oe(o6, 1, 3, e4, t5);
      let u4 = (o6 = Je(o6))[0];
      (o(o6[0]) || te(o6[0])) && (u4 = ve(o6[0], e4.spatialReference));
      const c3 = D(o6[2]);
      if (null == u4) return 0;
      if (null != u4 && !U(u4)) throw new n4(e4, "InvalidParameter", t5);
      const s10 = w(o6[1]);
      return y3(o4, s10, G.geodeticLength.execute(u4, { curveType: c3 }));
    });
  }, H5.distance = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      o6 = Je(o6), oe(o6, 2, 3, e4, t5);
      let u4 = o6[0];
      if ((o(o6[0]) || te(o6[0])) && (u4 = Pe(o6[0], e4.spatialReference)), !(u4 instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      let c3 = o6[1];
      if ((o(o6[1]) || te(o6[1])) && (c3 = Pe(o6[1], e4.spatialReference)), !(c3 instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      return k(u4.spatialReference, w(o6[2]), G.distance.execute(u4, c3));
    });
  }, H5.distancegeodetic = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      o6 = Je(o6), oe(o6, 2, 4, e4, t5);
      const u4 = o6[0];
      if (!(u4 instanceof _)) throw new n4(e4, "InvalidParameter", t5);
      const f4 = o6[1];
      if (!(f4 instanceof _)) throw new n4(e4, "InvalidParameter", t5);
      const c3 = w(o6[2]), s10 = D(o6[3]), m3 = new y({ paths: [], spatialReference: u4.spatialReference });
      return m3.addPath([u4, f4]), y3(o4, c3, G.geodeticLength.execute(m3, { curveType: s10 }));
    });
  }, H5.densify = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      if (o6 = Je(o6), oe(o6, 2, 3, e4, t5), null === o6[0]) return null;
      if (!(o6[0] instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      const u4 = Se(o6[1]);
      if (isNaN(u4)) throw new n4(e4, "InvalidParameter", t5);
      if (u4 <= 0) throw new n4(e4, "InvalidParameter", t5);
      const f4 = h2(w(o6[2]), o6[0].spatialReference, u4);
      switch (o6[0].type) {
        case "polygon":
        case "polyline":
        case "extent":
          return G.densify.execute(o6[0], f4);
        default:
          return o6[0];
      }
    });
  }, H5.densifygeodetic = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      o6 = Je(o6), oe(o6, 2, 4, e4, t5);
      const u4 = o6[0];
      if (null == u4) return null;
      if (!U(u4)) throw new n4(e4, "InvalidParameter", t5);
      const f4 = Se(o6[1]);
      if (isNaN(f4)) throw new n4(e4, "InvalidParameter", t5);
      if (f4 <= 0) throw new n4(e4, "InvalidParameter", t5);
      const c3 = w(o6[2]), s10 = D(o6[3]), d4 = y3(c3, o4, f4);
      switch (u4.type) {
        case "polygon":
        case "polyline":
        case "extent":
          return G.geodeticDensify.execute(u4, d4, { curveType: s10 });
        default:
          return u4;
      }
    });
  }, H5.generalize = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      if (o6 = Je(o6), oe(o6, 2, 4, e4, t5), null === o6[0]) return null;
      if (!(o6[0] instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      const u4 = Se(o6[1]);
      if (isNaN(u4)) throw new n4(e4, "InvalidParameter", t5);
      const f4 = h2(w(o6[3]), o6[0].spatialReference, u4);
      return G.generalize.execute(o6[0], f4, { removeDegenerateParts: Ae(z2(o6[2], true)) });
    });
  }, H5.buffer = function(e4, a3) {
    return F4(e4, a3, (l5, o6, u4) => {
      if (u4 = Je(u4), oe(u4, 2, 3, e4, a3), null === u4[0]) return null;
      if (!(u4[0] instanceof s)) throw new n4(e4, "InvalidParameter", a3);
      const f4 = Se(u4[1]);
      if (isNaN(f4)) throw new n4(e4, "InvalidParameter", a3);
      return 0 === f4 ? o2(u4[0]) : G.buffer.execute(u4[0], h2(w(u4[2]), u4[0].spatialReference, f4));
    });
  }, H5.buffergeodetic = function(e4, a3) {
    return F4(e4, a3, (l5, o6, u4) => {
      u4 = Je(u4), oe(u4, 2, 4, e4, a3);
      const f4 = u4[0];
      if (null == f4) return null;
      if (!U(f4)) throw new n4(e4, "InvalidParameter", a3);
      const c3 = Se(u4[1]);
      if (isNaN(c3)) throw new n4(e4, "InvalidParameter", a3);
      if (0 === c3) return o2(f4);
      const s10 = w(u4[2]), d4 = D(u4[3]);
      return G.geodesicBuffer.execute(f4, y3(s10, o4, c3), { curveType: d4 });
    });
  }, H5.offset = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      o6 = Je(o6), oe(o6, 2, 6, e4, t5);
      const u4 = o6[0];
      if (null === u4) return null;
      if (!(u4 instanceof j || u4 instanceof y)) throw new n4(e4, "InvalidParameter", t5);
      const f4 = Se(o6[1]);
      if (isNaN(f4)) throw new n4(e4, "InvalidParameter", t5);
      const c3 = o6[2], s10 = z3(o6[3]), m3 = Se(z2(o6[4], 10));
      if (isNaN(m3)) throw new n4(e4, "InvalidParameter", t5);
      const d4 = Se(z2(o6[5], 0));
      if (isNaN(d4)) throw new n4(e4, "InvalidParameter", t5);
      return G.executeOffset(u4, f4, c3, s10, m3, d4);
    });
  }, H5.rotate = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      if (o6 = Je(o6), oe(o6, 2, 3, e4, t5), null === o6[0]) return null;
      if (!(o6[0] instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      const u4 = o6[0] instanceof z ? j.fromExtent(o6[0]) : o6[0], f4 = Se(o6[1]);
      if (isNaN(f4)) throw new n4(e4, "InvalidParameter", t5);
      const c3 = z2(o6[2], null);
      if (null === c3) {
        const e5 = "point" === u4.type ? u4 : u4.extent?.center;
        return G.rotate(u4, f4, e5?.x, e5?.y);
      }
      if (c3 instanceof _) return G.rotate(u4, f4, c3.x, c3.y);
      throw new n4(e4, "InvalidParameter", t5);
    });
  }, H5.centroid = function(e4, t5) {
    return F4(e4, t5, (e5, t6, a3) => {
      if (a3 = Je(a3), oe(a3, 1, 2, e5, t6), null === a3[0]) return null;
      const l5 = O(a3[1]);
      let o6 = a3[0];
      if ((o(a3[0]) || te(a3[0])) && (o6 = "geometric" === l5 ? Pe(a3[0], e5.spatialReference) : Re(a3[0], e5.spatialReference), null === o6)) return null;
      if (!(o6 instanceof s)) throw new n4(e5, "InvalidParameter", t6);
      return "geometric" === l5 ? G.centroid.execute(o6) : G.labelPoint.execute(o6);
    });
  }, H5.measuretocoordinate = function(e4, n7) {
    return F4(e4, n7, I3);
  }, H5.pointtocoordinate = function(e4, n7) {
    return F4(e4, n7, R2);
  }, H5.distancetocoordinate = function(e4, n7) {
    return F4(e4, n7, b3);
  }, H5.multiparttosinglepart = function(e4, a3) {
    return F4(e4, a3, (l5, o6, u4) => {
      if (u4 = Je(u4), oe(u4, 1, 1, e4, a3), null === u4[0]) return null;
      if (!(u4[0] instanceof s)) throw new n4(e4, "InvalidParameter", a3);
      if (u4[0] instanceof _) return [je(o2(u4[0]), e4.spatialReference)];
      if (u4[0] instanceof z) return [je(o2(u4[0]), e4.spatialReference)];
      const f4 = G.simplify.execute(u4[0]);
      if (f4 instanceof j) {
        const e5 = [], n7 = [];
        for (let t5 = 0; t5 < f4.rings.length; t5++) if (f4.isClockwise(f4.rings[t5])) {
          const n8 = u({ rings: [f4.rings[t5]], hasZ: true === f4.hasZ, hasM: true === f4.hasM, spatialReference: f4.spatialReference.toJSON() });
          e5.push(n8);
        } else n7.push({ ring: f4.rings[t5], pt: f4.getPoint(t5, 0) });
        for (let t5 = 0; t5 < n7.length; t5++) for (let r5 = 0; r5 < e5.length; r5++) if (e5[r5].contains(n7[t5].pt)) {
          e5[r5].addRing(n7[t5].ring);
          break;
        }
        return e5;
      }
      if (f4 instanceof y) {
        const e5 = [];
        for (let n7 = 0; n7 < f4.paths.length; n7++) {
          const t5 = u({ paths: [f4.paths[n7]], hasZ: true === f4.hasZ, hasM: true === f4.hasM, spatialReference: f4.spatialReference.toJSON() });
          e5.push(t5);
        }
        return e5;
      }
      if (u4[0] instanceof m) {
        const n7 = [], r5 = je(o2(u4[0]), e4.spatialReference);
        for (let e5 = 0; e5 < r5.points.length; e5++) n7.push(r5.getPoint(e5));
        return n7;
      }
      return null;
    });
  }, H5.isselfintersecting = function(e4, n7) {
    return F4(e4, n7, (e5, n8, t5) => {
      oe(t5, 1, 1, e5, n8);
      let a3 = (t5 = Je(t5))[0];
      if ((o(t5[0]) || te(t5[0])) && (a3 = ve(t5[0], e5.spatialReference)), a3 instanceof m) {
        const e6 = a3.points;
        for (let n9 = 0; n9 < e6.length; n9++) for (let t6 = n9 + 1; t6 < e6.length; t6++) if (h(e6[n9], e6[t6])) return true;
        return false;
      }
      return (a3 instanceof y || a3 instanceof j) && G.isSelfIntersecting(a3);
    });
  }, H5.issimple = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      if (o6 = Je(o6), oe(o6, 1, 1, e4, t5), null === o6[0]) return true;
      if (!(o6[0] instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      return G.simplify.isSimple(o6[0]);
    });
  }, H5.simplify = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      if (o6 = Je(o6), oe(o6, 1, 1, e4, t5), null === o6[0]) return null;
      if (!(o6[0] instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      return G.simplify.execute(o6[0]);
    });
  }, H5.convexhull = function(e4, t5) {
    return F4(e4, t5, (a3, l5, o6) => {
      if (o6 = Je(o6), oe(o6, 1, 1, e4, t5), null === o6[0]) return null;
      if (!(o6[0] instanceof s)) throw new n4(e4, "InvalidParameter", t5);
      return G.convexHull.execute(o6[0]);
    });
  }, H5.nearestcoordinate = function(t5, a3) {
    return F4(t5, a3, (l5, o6, u4) => {
      if (u4 = Je(u4), oe(u4, 2, 2, t5, a3), !(u4[0] instanceof s || null === u4[0])) throw new n4(t5, "InvalidParameter", a3);
      if (!(u4[1] instanceof _ || null === u4[1])) throw new n4(t5, "InvalidParameter", a3);
      if (null === u4[0] || null === u4[1]) return null;
      const f4 = u4[0] instanceof z ? j.fromExtent(u4[0]) : u4[0], c3 = G.proximity.getNearestCoordinate(f4, u4[1], { calculateLeftRightSide: true });
      return null === c3 || c3.isEmpty ? null : p.convertObjectToArcadeDictionary({ coordinate: c3.coordinate, distance: c3.distance, sideOfLine: 0 === c3.distance ? "straddle" : c3.isRightSide ? "right" : "left" }, Ke(t5), false, true);
    });
  }, H5.nearestvertex = function(t5, a3) {
    return F4(t5, a3, (l5, o6, u4) => {
      if (u4 = Je(u4), oe(u4, 2, 2, t5, a3), !(u4[0] instanceof s || null === u4[0])) throw new n4(t5, "InvalidParameter", a3);
      if (!(u4[1] instanceof _ || null === u4[1])) throw new n4(t5, "InvalidParameter", a3);
      if (null === u4[0] || null === u4[1]) return null;
      const f4 = u4[0] instanceof z ? j.fromExtent(u4[0]) : u4[0], c3 = G.executeNearestVertex(f4, u4[1]);
      return null == c3 ? null : p.convertObjectToArcadeDictionary({ coordinate: c3.coordinate, distance: c3.distance, sideOfLine: c3.sideOfLine }, Ke(t5), false, true);
    });
  };
}

// node_modules/@arcgis/core/arcade/arcadeCompiler.js
var ne2 = () => n.getLogger("esri.arcade.arcadeCompiler");
var te2 = class {
  constructor() {
    this._symbolCounter = 0, this.safeAccessTempVarId = "_Tsat";
  }
  nextVarId() {
    return this._symbolCounter += 1, `_T${this._symbolCounter}`;
  }
  nextTempVarId() {
    return this._symbolCounter += 1, `_Tvar${this._symbolCounter}`;
  }
  nextLocalsSymbolMapId() {
    return this._symbolCounter += 1, `_Locals${this._symbolCounter}`;
  }
};
function re2(e4, n7) {
  const t5 = e4.localScope?.get(n7);
  if (null != t5) return { scope: "local", name: n7, var: t5 };
  const r5 = e4.globalScope.get(n7);
  return null != r5 ? { scope: "global", name: n7, var: r5 } : e4.standardGlobals.has(n7) ? { scope: "global", name: n7, var: n7 } : null;
}
function oe2(n7, t5, r5 = "InvalidIdentifier") {
  const o6 = re2(n7, r2(t5));
  if (null != o6) return o6;
  throw new s2(null, r5, t5);
}
function le(n7, t5, r5) {
  const o6 = re2(n7, r2(t5));
  if (null == o6) throw ne2().error(`Internal error: Symbol "${t5.name}" not declared.`), new s2(null, "NeverReach", t5);
  if (null != r5 && o6.scope !== r5) throw ne2().error(`Internal error: Expected to resolve "${t5.name}" in the ${r5} scope but is in the ${o6.scope} scope.`), new s2(null, "NeverReach", t5);
  return o6;
}
function ae(n7, t5) {
  const r5 = r2(t5), o6 = n7.symbolMetadata;
  if (n7.localStack.length > 0) {
    const e4 = n7.localStack[n7.localStack.length - 1], t6 = o6.locals.get(e4._SymbolsMapId);
    if (null == t6) return void ne2().error(`Internal error: no reflection metadata for ${e4._SymbolsMapId}`);
    const l6 = t6.get(r5);
    if (null != l6) return on.requireInitialized(e4[l6]);
  }
  const l5 = o6.globals.get(r5);
  if (null != l5) return on.requireInitialized(n7.globalScope[l5]);
  if (o6.standardGlobals.has(r5)) return on.requireInitialized(n7.globalScope[r5]);
  throw new n4(null, "InvalidIdentifier", null);
}
var se = class extends r3 {
  constructor(e4, n7) {
    super(), this.paramCount = n7, this.fn = e4;
  }
  createFunction(e4) {
    return (...n7) => {
      if (n7.length !== this.paramCount) throw new n4(e4, "WrongNumberOfParameters", null);
      return this.fn(...n7);
    };
  }
  call(e4, n7) {
    return this.fn(...n7.arguments);
  }
  marshalledCall(e4, n7, t5, r5) {
    return r5(e4, n7, (n8, o6, l5) => {
      l5 = l5.map((n9) => !L(n9) || n9 instanceof s6 ? n9 : n5(n9, e4, r5));
      const a3 = this.call(t5, { arguments: l5 });
      return C(a3) ? a3.then((e5) => n5(e5, t5, r5)) : a3;
    });
  }
};
function ie2(e4, n7, t5) {
  try {
    return t5(e4, null, n7.arguments);
  } catch (r5) {
    throw r5;
  }
}
function ue(e4, n7, t5, r5, l5, a3) {
  const { globals: s10, exports: i5 } = s5(e4);
  r(s10, t5);
  const u4 = new te2(), c3 = [], m3 = /* @__PURE__ */ new Map();
  for (const o6 of s10) if (t5.has(o6) || n7.has(o6)) m3.set(o6, o6);
  else {
    const e5 = u4.nextVarId();
    m3.set(o6, e5), c3.push(`gscope[${JSON.stringify(e5)}] = ${tn};`);
  }
  const p6 = /* @__PURE__ */ new Map(), f4 = /* @__PURE__ */ Object.create(null), d4 = { isAsync: r5, symbols: u4, standardGlobals: n7, globalScope: m3, exports: i5, localScope: null, allLocalSymbolMetadata: p6, moduleFactory: a3, moduleFactoryMap: f4, libraryResolver: l5 };
  return { body: [...c3, `var ${u4.safeAccessTempVarId};`, "var lastStatement = lc.voidOperation;", Ce(d4, e4), "return lastStatement;"].join("\n"), symbolMetadata: { standardGlobals: n7, exports: i5, globals: m3, locals: p6 }, moduleFactoryMap: f4 };
}
function ce(e4, n7) {
  switch (n7.type) {
    case "AssignmentExpression":
      return ve2(e4, n7);
    case "UpdateExpression":
      return be(e4, n7);
    case "TemplateLiteral":
      return Re2(e4, n7);
    case "Identifier":
      return Ge(e4, n7);
    case "MemberExpression":
      return Ee(e4, n7);
    case "Literal":
      return null === n7.value || void 0 === n7.value ? "null" : JSON.stringify(n7.value);
    case "CallExpression":
      return qe(e4, n7);
    case "UnaryExpression":
      return Te(e4, n7);
    case "BinaryExpression":
      return Ue(e4, n7);
    case "LogicalExpression":
      return De(e4, n7);
    case "ArrayExpression":
      return Le2(e4, n7);
    case "ObjectExpression":
      return pe(e4, n7);
    case "MemberAccessChainExpression":
      return Ve(e4, n7);
    case "SafeMemberExpression":
      throw ne2().error("SafeMemberExpression outside of MemberAccessChainExpression"), new s2(null, "Unrecognized", n7);
    default:
      throw new s2(null, "Unrecognized", n7);
  }
}
function me(e4, n7) {
  switch (n7.type) {
    case "EmptyStatement":
      return "lc.voidOperation";
    case "VariableDeclaration":
      return Ae2(e4, n7);
    case "BlockStatement":
      return Ce(e4, n7);
    case "FunctionDeclaration":
      return je2(e4, n7);
    case "ImportDeclaration":
      return Me(e4, n7);
    case "ExportNamedDeclaration":
      return me(e4, n7.declaration);
    case "ReturnStatement":
      return Fe(e4, n7);
    case "IfStatement":
      return Ie(e4, n7);
    case "ExpressionStatement":
      return Se2(e4, n7);
    case "BreakStatement":
      return "break";
    case "ContinueStatement":
      return "continue";
    case "ForStatement":
      return we(e4, n7);
    case "ForInStatement":
      return he(e4, n7);
    case "ForOfStatement":
      return ye2(e4, n7);
    case "WhileStatement":
      return $e(e4, n7);
    default:
      throw new s2(null, "Unrecognized", n7);
  }
}
function pe(e4, n7) {
  let t5 = "lang.dictionary([";
  for (let r5 = 0; r5 < n7.properties.length; r5++) {
    const o6 = n7.properties[r5];
    let l5;
    l5 = "Identifier" === o6.key.type ? "'" + o6.key.name + "'" : ce(e4, o6.key);
    r5 > 0 && (t5 += ","), t5 += "lang.strCheck(" + l5 + ",'ObjectExpression'),lang.aCheck(" + ce(e4, o6.value) + ", 'ObjectExpression')";
  }
  return t5 += "])", t5;
}
function fe(e4, n7, t5, r5, o6 = (e5, n8) => `${e5} = ${n8}`) {
  const l5 = e4.symbols.nextTempVarId(), a3 = e4.symbols.nextTempVarId();
  return [`var ${l5} = ${t5};`, `for (var ${a3} = 0; ${a3} < ${l5}; ${a3}++) {`, `  ${o6(n7, a3)}`, `  ${me(e4, r5)}`, "}", "lastStatement = lc.voidOperation;"].join("\n");
}
function de2(e4, n7, t5, r5, o6 = (e5) => e5) {
  const l5 = e4.symbols.nextTempVarId(), a3 = e4.symbols.nextTempVarId();
  return [`var ${l5} = ${t5};`, `for (var ${a3} of ${l5}) {`, `  ${n7} = ${o6(a3)};`, `  ${me(e4, r5)}`, "}", "lastStatement = lc.voidOperation;"].join("\n");
}
function ge2(e4, n7, t5, r5) {
  const o6 = e4.symbols.nextTempVarId(), l5 = e4.symbols.nextTempVarId(), a3 = e4.symbols.nextTempVarId(), s10 = e4.symbols.nextTempVarId();
  return [`var ${o6} = yield ${t5}.queryAll(runtimeCtx.abortSignal);`, `var ${l5} = { done: false, value: [] };`, `for (var ${a3} = 0; ${a3} < ${l5}.value.length || ((${a3} = 0), !(${l5} = yield ${o6}.next()).done); ${a3}++) {`, `  if (${l5}.value.length === 0) continue;`, `  var ${s10} = ${l5}.value[${a3}];`, `  ${n7} = lang.createFeature(${s10}, ${t5}, runtimeCtx);`, `  ${me(e4, r5)}`, "}"].join("\n");
}
function he(e4, n7) {
  const t5 = e4.symbols.nextTempVarId();
  let r5, o6, l5 = "var " + t5 + " = " + ce(e4, n7.right) + ";\n";
  switch ("VariableDeclaration" === n7.left.type ? (r5 = le(e4, n7.left.declarations[0].id), l5 += me(e4, n7.left)) : r5 = oe2(e4, n7.left), r5.scope) {
    case "local":
      o6 = `lscope['${r5.var}']`;
      break;
    case "global":
      o6 = `gscope['${r5.var}']`;
      break;
    default:
      throw r5.scope, new s2(null, "NeverReach", n7.left);
  }
  return l5 += "if (" + t5 + "===null) {  lastStatement = lc.voidOperation; }\n ", l5 += "else if (lc.isArray(" + t5 + ") || lc.isString(" + t5 + ")) {\n", l5 += fe(e4, o6, `${t5}.length`, n7.body), l5 += "}\n", l5 += "else if (lc.isImmutableArray(" + t5 + ")) {\n", l5 += fe(e4, o6, `${t5}.length()`, n7.body), l5 += "}\n", l5 += "else if (( " + t5 + " instanceof lang.Dictionary) || lc.isDictionaryLike(" + t5 + ")) {\n", l5 += de2(e4, o6, `${t5}.keys()`, n7.body), l5 += "}\n", e4.isAsync && (l5 += "else if (lc.isFeatureSet(" + t5 + ")) {\n", l5 += ge2(e4, o6, t5, n7.body), l5 += "}\n"), l5 += `else if (lc.isGeometry(${t5})) {
`, l5 += de2(e4, o6, `lang.getGeometryKeys(${t5})`, n7.body), l5 += "}\n", l5 += "else { lastStatement = lc.voidOperation; } \n", l5;
}
function ye2(e4, n7) {
  const t5 = e4.symbols.nextTempVarId();
  let r5, o6, l5 = "var " + t5 + " = " + ce(e4, n7.right) + ";\n";
  switch ("VariableDeclaration" === n7.left.type ? (r5 = le(e4, n7.left.declarations[0].id), l5 += me(e4, n7.left)) : r5 = oe2(e4, n7.left), r5.scope) {
    case "local":
      o6 = `lscope['${r5.var}']`;
      break;
    case "global":
      o6 = `gscope['${r5.var}']`;
      break;
    default:
      throw r5.scope, new s2(null, "NeverReach", n7.left);
  }
  return l5 += "if (" + t5 + "===null) {  lastStatement = lc.voidOperation; }\n ", l5 += "else if (lc.isArray(" + t5 + ") || lc.isString(" + t5 + ")) {\n", l5 += fe(e4, o6, `${t5}.length`, n7.body, (e5, n8) => [`if (${n8} >= ${t5}.length) {`, "  lang.error('OutOfBounds');", "}", `${e5} = ${t5}[${n8}];`].join("\n")), l5 += "}\n", l5 += "else if (lc.isImmutableArray(" + t5 + ")) {\n", l5 += fe(e4, o6, `${t5}.length()`, n7.body, (e5, n8) => `${e5} = ${t5}.get(${n8});`), l5 += "}\n", l5 += "else if (( " + t5 + " instanceof lang.Dictionary) || lc.isDictionaryLike(" + t5 + ")) {\n", l5 += de2(e4, o6, `${t5}.keys()`, n7.body, (e5) => `lang.entry(${e5}, ${t5}.field(${e5}))`), l5 += "}\n", e4.isAsync && (l5 += "else if (lc.isFeatureSet(" + t5 + ")) {\n", l5 += ge2(e4, o6, t5, n7.body), l5 += "}\n"), l5 += `else if (lc.isGeometry(${t5})) {
`, l5 += de2(e4, o6, `lang.getGeometryKeys(${t5})`, n7.body, (e5) => `lang.entry(${e5}, lang.getGeometryMember(${t5}, ${e5}, runtimeCtx))`), l5 += "}\n", l5 += "else { lastStatement = lc.voidOperation; } \n", l5;
}
function we(e4, n7) {
  let t5 = "lastStatement = lc.voidOperation; \n";
  null !== n7.init && ("VariableDeclaration" === n7.init.type ? t5 += me(e4, n7.init) : t5 += ce(e4, n7.init) + "; ");
  const r5 = e4.symbols.nextTempVarId(), o6 = e4.symbols.nextTempVarId();
  return t5 += "var " + r5 + " = true; ", t5 += "\n do { ", null !== n7.update && (t5 += " if (" + r5 + "===false) {\n " + ce(e4, n7.update) + "  \n}\n " + r5 + "=false; \n"), null !== n7.test && (t5 += "var " + o6 + " = " + ce(e4, n7.test) + "; ", t5 += "if (" + o6 + "===false) { break; } else if (" + o6 + "!==true) { lang.error('BooleanConditionRequired');   }\n"), t5 += me(e4, n7.body), null !== n7.update && (t5 += "\n " + ce(e4, n7.update)), t5 += "\n" + r5 + " = true; \n} while(true);  lastStatement = lc.voidOperation; ", t5;
}
function be(e4, n7) {
  if ("CallExpression" === n7.argument.type) throw new s2(null, "NeverReach", n7);
  let t5;
  if ("MemberExpression" === n7.argument.type) {
    const r6 = ce(e4, n7.argument.object);
    return t5 = true === n7.argument.computed ? ce(e4, n7.argument.property) : "'" + n7.argument.property.name + "'", "lang.memberupdate(" + r6 + "," + t5 + ",'" + n7.operator + "'," + n7.prefix + ")";
  }
  const r5 = oe2(e4, n7.argument);
  switch (Oe(r5), r5.scope) {
    case "local":
      return `lang.update(lscope, '${r5.var}', '${n7.operator}', ${n7.prefix})`;
    case "global":
      return `lang.update(gscope, '${r5.var}', '${n7.operator}', ${n7.prefix})`;
    default:
      throw r5.scope, new s2(null, "NeverReach", n7.argument);
  }
}
function $e(e4, n7) {
  let t5 = "lastStatement = lc.voidOperation; \n";
  const r5 = e4.symbols.nextTempVarId();
  return t5 += `
  var ${r5} = true;
    do {
      ${r5} = ${ce(e4, n7.test)};
      if (${r5}==false) {
        break;
      }
      if (${r5}!==true) {
        lang.error('BooleanConditionRequired');
      }
      ${me(e4, n7.body)}
    }
    while (${r5} !== false);
    lastStatement = lc.voidOperation;
  `, t5;
}
function ve2(e4, n7) {
  const t5 = ce(e4, n7.right);
  if ("MemberExpression" === n7.left.type) {
    let r6;
    const o6 = ce(e4, n7.left.object);
    return r6 = true === n7.left.computed ? ce(e4, n7.left.property) : "'" + n7.left.property.name + "'", "lang.assignmember(" + o6 + "," + r6 + ",'" + n7.operator + "'," + t5 + ")";
  }
  const r5 = oe2(e4, n7.left);
  switch (Oe(r5), r5.scope) {
    case "local":
      return `lscope['${r5.var}']=lang.assign(${t5},'${n7.operator}', ${"=" === n7.operator ? "null" : rn(`lscope['${r5.var}']`)})`;
    case "global":
      return `gscope['${r5.var}']=lang.assign(${t5},'${n7.operator}', ${"=" === n7.operator ? "null" : rn(`gscope['${r5.var}']`)})`;
    default:
      throw r5.scope, new s2(null, "NeverReach", n7.left);
  }
}
function Se2(e4, n7) {
  return "AssignmentExpression" === n7.expression.type ? "lastStatement = lc.voidOperation; " + ce(e4, n7.expression) + "; \n " : "lastStatement = " + ce(e4, n7.expression) + "; ";
}
function xe(e4, n7) {
  return "BlockStatement" === n7.type ? me(e4, n7) : "ReturnStatement" === n7.type || "BreakStatement" === n7.type || "ContinueStatement" === n7.type ? me(e4, n7) + "; " : "ExpressionStatement" === n7.type ? me(e4, n7) : me(e4, n7) + "; ";
}
function Ie(e4, n7) {
  return `if (lang.mustBoolean(${ce(e4, n7.test)}, runtimeCtx) === true) {
    ${xe(e4, n7.consequent)}
  } ` + (null !== n7.alternate ? "IfStatement" === n7.alternate.type ? " else " + Ie(e4, n7.alternate) : ` else {
      ${xe(e4, n7.alternate)}
    }
` : " else {\n      lastStatement = lc.voidOperation;\n    }\n");
}
function Ce(e4, n7) {
  let t5 = "";
  for (let r5 = 0; r5 < n7.body.length; r5++) "EmptyStatement" !== n7.body[r5].type && ("ReturnStatement" === n7.body[r5].type || "BreakStatement" === n7.body[r5].type || "ContinueStatement" === n7.body[r5].type ? t5 += me(e4, n7.body[r5]) + "; \n" : t5 += me(e4, n7.body[r5]) + " \n");
  return t5;
}
function Fe(e4, n7) {
  if (null === n7.argument) return "return lc.voidOperation";
  return "return " + ce(e4, n7.argument);
}
function Me(e4, n7) {
  const t5 = le(e4, n7.specifiers[0].local, "global"), r5 = e4.libraryResolver?.loadLibrary(t5.name), o6 = e4.symbols.nextVarId();
  void 0 === e4.moduleFactory[r5.uri] && (e4.moduleFactory[r5.uri] = cn(r5.syntax, e4.moduleFactory, e4.isAsync)), e4.moduleFactoryMap[o6] = r5.uri;
  let l5 = "";
  return l5 = e4.isAsync ? "(yield lang.loadModule('" + o6 + "', runtimeCtx) ); " : "lang.loadModule('" + o6 + "', runtimeCtx); ", Oe(t5), `gscope['${t5.var}']=${l5}`;
}
function Oe(e4) {
  if ("global" === e4.scope) switch (e4.name) {
    case "iif":
    case "when":
    case "defaultvalue":
    case "decode":
      throw new c();
  }
}
function je2(n7, t5) {
  const r5 = new Set(t5.params.map((n8) => r2(n8))), o6 = i2(t5);
  r(o6, r5);
  const a3 = n7.symbols, s10 = /* @__PURE__ */ new Map();
  for (const e4 of o6) s10.set(e4, a3.nextVarId());
  const i5 = a3.nextLocalsSymbolMapId();
  n7.allLocalSymbolMetadata.set(i5, s10);
  const u4 = __spreadProps(__spreadValues({}, n7), { localScope: s10 }), c3 = [`lscope._SymbolsMapId = ${JSON.stringify(i5)};`];
  for (let e4 = 0; e4 < t5.params.length; e4++) {
    const n8 = le(u4, t5.params[e4], "local");
    Oe(n8), c3.push(`lscope['${n8.var}'] = arguments[${e4}];`);
  }
  for (const [e4, l5] of s10) r5.has(e4) || c3.push(`lscope['${l5}'] = ${tn};`);
  const m3 = Ce(u4, t5.body), p6 = true === n7.isAsync ? ["return lang.__awaiter(this, void 0, void 0, function* () {", `  ${m3}`, "  return lastStatement;", "});"] : [m3, "return lastStatement;"], f4 = ["new lang.UserDefinedCompiledFunction(", "  lang.functionDepthchecker(", "    function() {", "      var lastStatement = lc.voidOperation;", "      var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];", ...c3, ...p6, "    },", "    runtimeCtx,", "  ),", `  ${t5.params.length},`, ")"].join("\n"), d4 = le(n7, t5.id, "global");
  return Oe(d4), `gscope['${d4.var}']=${f4}; lastStatement = lc.voidOperation;`;
}
function Ae2(e4, n7) {
  const t5 = [];
  for (let r5 = 0; r5 < n7.declarations.length; r5++) t5.push(ke(e4, n7.declarations[r5]));
  return t5.join("\n") + " \n lastStatement=  lc.voidOperation; \n";
}
function ke(e4, n7) {
  const t5 = null === n7.init ? "null" : ce(e4, n7.init), r5 = le(e4, n7.id);
  switch (Oe(r5), r5.scope) {
    case "local":
      return `lscope['${r5.var}']=${t5};`;
    case "global":
      return `gscope['${r5.var}']=${t5};`;
    default:
      throw r5.scope, new s2(null, "NeverReach", n7.id);
  }
}
function Ee(e4, n7) {
  return Ne(e4, ce(e4, n7.object), n7);
}
function Ne(e4, n7, t5) {
  return `lang.member(${n7}, ${t5.computed ? ce(e4, t5.property) : `'${t5.property.name}'`})`;
}
function Be(e4, n7, t5) {
  for (const r5 of t5) switch (r5.type) {
    case "MemberExpression":
      n7 = Ne(e4, n7, r5);
      break;
    case "CallExpression":
      n7 = ze(e4, n7, r5.arguments);
      break;
    default:
      throw new s2(null, "Unrecognized", r5);
  }
  return n7;
}
function _e(e4, n7, t5) {
  return `lang.tryMember(${n7}, ${t5.computed ? ce(e4, t5.property) : `'${t5.property.name}'`})`;
}
function Ve(e4, n7) {
  const t5 = l2(n7);
  let r5 = "", o6 = ce(e4, t5.root);
  for (const l5 of t5.sections) r5 += `(${e4.symbols.safeAccessTempVarId} = ${_e(e4, o6, l5.checked)}) == null ? null : `, o6 = Be(e4, e4.symbols.safeAccessTempVarId, l5.unchecked);
  return `(${r5}${o6})`;
}
function Te(e4, n7) {
  try {
    return "lang.unary(" + ce(e4, n7.argument) + ",'" + n7.operator + "')";
  } catch (t5) {
    throw t5;
  }
}
function Le2(e4, n7) {
  try {
    const t5 = [];
    for (let r5 = 0; r5 < n7.elements.length; r5++) "Literal" === n7.elements[r5].type ? t5.push(ce(e4, n7.elements[r5])) : t5.push("lang.aCheck(" + ce(e4, n7.elements[r5]) + ",'ArrayExpression')");
    return "[" + t5.join(",") + "]";
  } catch (t5) {
    throw t5;
  }
}
function Re2(e4, n7) {
  try {
    const t5 = [];
    let r5 = 0;
    for (const o6 of n7.quasis) t5.push(o6.value ? JSON.stringify(o6.value.cooked) : JSON.stringify("")), false === o6.tail && (t5.push(n7.expressions[r5] ? "lang.castString(lang.aCheck(" + ce(e4, n7.expressions[r5]) + ", 'TemplateLiteral'))" : ""), r5++);
    return "([" + t5.join(",") + "]).join('')";
  } catch (t5) {
    throw t5;
  }
}
function Ue(e4, n7) {
  try {
    return "lang.binary(" + ce(e4, n7.left) + "," + ce(e4, n7.right) + ",'" + n7.operator + "')";
  } catch (t5) {
    throw t5;
  }
}
function De(e4, n7) {
  try {
    if ("AssignmentExpression" === n7.left.type || "UpdateExpression" === n7.left.type) throw new s2(null, "LogicalExpressionOnlyBoolean", n7);
    if ("AssignmentExpression" === n7.right.type || "UpdateExpression" === n7.right.type) throw new s2(null, "LogicalExpressionOnlyBoolean", n7);
    if ("&&" === n7.operator || "||" === n7.operator) return "(lang.logicalCheck(" + ce(e4, n7.left) + ") " + n7.operator + " lang.logicalCheck(" + ce(e4, n7.right) + "))";
    throw new s2(null, "LogicExpressionOrAnd", null);
  } catch (t5) {
    throw t5;
  }
}
function Ge(e4, n7) {
  const t5 = oe2(e4, n7);
  switch (Oe(t5), t5.scope) {
    case "local":
      return rn(`lscope['${t5.var}']`);
    case "global":
      return rn(`gscope['${t5.var}']`);
    default:
      throw t5.scope, new s2(null, "NeverReach", n7);
  }
}
function qe(e4, n7) {
  if ("Identifier" === n7.callee.type) {
    const t5 = oe2(e4, n7.callee, "FunctionNotFound");
    if ("global" === t5.scope) switch (t5.name) {
      case "iif":
        return Pe2(e4, n7);
      case "when":
        return Ke2(e4, n7);
      case "defaultvalue":
        return We(e4, n7);
      case "decode":
        return Ze(e4, n7);
    }
  }
  return ze(e4, ce(e4, n7.callee), n7.arguments);
}
function ze(e4, n7, t5) {
  const r5 = `lang.callfunc(${n7}, [${t5.map((n8) => ce(e4, n8)).join(", ")}], runtimeCtx)`;
  return e4.isAsync ? `(yield ${r5})` : r5;
}
function Pe2(e4, n7) {
  try {
    if (3 !== n7.arguments.length) throw new s2(null, "WrongNumberOfParameters", n7);
    const t5 = e4.symbols.nextTempVarId();
    return `${e4.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t5} = ${ce(e4, n7.arguments[0])};

        if (${t5} === true) {
          return  ${ce(e4, n7.arguments[1])};
        }
        else if (${t5} === false) {
          return ${ce(e4, n7.arguments[2])};
        }
        else {
          lang.error('ExecutionErrorCodes.BooleanConditionRequired');
        }
      ${e4.isAsync ? "})}()))" : "}()"}`;
  } catch (t5) {
    throw t5;
  }
}
function We(e4, n7) {
  try {
    if (n7.arguments.length < 2 || n7.arguments.length > 3) throw new s2(null, "WrongNumberOfParameters", n7);
    const t5 = e4.symbols.nextTempVarId(), r5 = e4.symbols.nextTempVarId();
    return 3 === n7.arguments.length ? `${e4.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
      var ${t5} = ${ce(e4, n7.arguments[0])};
      var ${r5} = ${ce(e4, n7.arguments[1])};
      ${t5} = lang.getNestedOptionalValue(${t5}, ${r5});
      return ${t5} != null && ${t5} !== "" ? ${t5} : ${ce(e4, n7.arguments[2])};
      ${e4.isAsync ? "})}()))" : "}()"}` : `${e4.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t5} = ${ce(e4, n7.arguments[0])};
        if (${t5} === null) {
          return  ${ce(e4, n7.arguments[1])};
        }
        if (${t5} === "") {
          return  ${ce(e4, n7.arguments[1])};
        }
        if (${t5} === undefined) {
          return  ${ce(e4, n7.arguments[1])};
        }
        return ${t5};
      ${e4.isAsync ? "})}()))" : "}()"}`;
  } catch (t5) {
    throw t5;
  }
}
function Ke2(e4, n7) {
  try {
    if (n7.arguments.length < 3) throw new s2(null, "WrongNumberOfParameters", n7);
    if (n7.arguments.length % 2 == 0) throw new s2(null, "WrongNumberOfParameters", n7);
    const t5 = e4.symbols.nextTempVarId();
    let r5 = "var ";
    for (let o6 = 0; o6 < n7.arguments.length - 1; o6 += 2) r5 += `${t5} = lang.mustBoolean(${ce(e4, n7.arguments[o6])}, runtimeCtx);
      if (${t5} === true ) {
        return ${ce(e4, n7.arguments[o6 + 1])}
      }
`;
    return `${e4.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        ${r5}
        return ${ce(e4, n7.arguments[n7.arguments.length - 1])}
        ${e4.isAsync ? "})}()))" : "}()"}`;
  } catch (t5) {
    throw t5;
  }
}
function Ze(e4, n7) {
  try {
    if (n7.arguments.length < 2) throw new s2(null, "WrongNumberOfParameters", n7);
    if (2 === n7.arguments.length) return `(${ce(e4, n7.arguments[1])})`;
    if ((n7.arguments.length - 1) % 2 == 0) throw new s2(null, "WrongNumberOfParameters", n7);
    const t5 = e4.symbols.nextTempVarId();
    let r5;
    if (n7.arguments.every((e5, n8) => n8 % 2 == 0 || "Literal" === e5.type)) {
      r5 = `switch (${t5}) {`;
      for (let t6 = 1; t6 < n7.arguments.length - 1; t6 += 2) {
        const o6 = n7.arguments[t6], l5 = n7.arguments[t6 + 1];
        null == o6.value ? r5 += "\n            case null:\n            case lc.voidOperation:\n          " : r5 += `
            case ${JSON.stringify(o6.value)}:
          `, r5 += `return ${ce(e4, l5)}`;
      }
      r5 += "}";
    } else {
      const o6 = e4.symbols.nextTempVarId();
      r5 = "var ";
      for (let l5 = 1; l5 < n7.arguments.length - 1; l5 += 2) {
        const a3 = n7.arguments[l5], s10 = n7.arguments[l5 + 1];
        r5 += `${o6} = ${ce(e4, a3)};
          if (lang.binary(${o6}, ${t5}, "==") === true ) {
            return ${ce(e4, s10)}
          }
        `;
      }
    }
    return `${e4.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t5} = ${ce(e4, n7.arguments[0])};
        ${r5}
        return ${ce(e4, n7.arguments[n7.arguments.length - 1])}
        ${e4.isAsync ? "})}()))" : "}()"}`;
  } catch (t5) {
    throw t5;
  }
}
function Je2(e4, n7) {
  try {
    return ie2(e4, n7, (e5, n8) => {
      throw new n4(e5, "Unrecognized", n8);
    });
  } catch (t5) {
    throw t5;
  }
}
function Ye(e4) {
  const n7 = function() {
    this.textformatting = p.textFormatting();
  };
  n7.prototype = /* @__PURE__ */ Object.create(null), n7.provided = /* @__PURE__ */ new Set(["textformatting", "infinity", "pi"]), n7.prototype.infinity = Number.POSITIVE_INFINITY, n7.prototype.pi = Math.PI;
  for (const [t5, r5] of Object.entries(e4)) n7.prototype[t5] = new e2(r5), n7.provided.add(t5);
  return n7;
}
function He() {
  const e4 = /* @__PURE__ */ Object.create(null);
  j2(e4, ie2), E(e4, ie2), P2(e4, ie2, ae), g3(e4, ie2), _3(e4, ie2), a(e4, ie2), b4(e4, ie2), e4.iif = Je2, e4.decode = Je2, e4.when = Je2, e4.defaultvalue = Je2;
  const n7 = Ye(e4);
  F(e4, ie2);
  return { ScopeSync: Ye(e4), ScopeAsync: n7 };
}
var { ScopeSync: Qe, ScopeAsync: Xe } = He();
function en(e4, n7) {
  const t5 = { mode: n7, compiled: true, functions: /* @__PURE__ */ Object.create(null), signatures: [], standardFunction: ie2, standardFunctionAsync: ie2, evaluateIdentifier: ae };
  for (const r5 of e4) r5.registerFunctions(t5);
  if ("sync" === n7) for (const [r5, o6] of Object.entries(t5.functions)) Qe.prototype[r5] = new e2(o6), Qe.provided.add(r5);
  else for (const [r5, o6] of Object.entries(t5.functions)) Xe.prototype[r5] = new e2(o6), Xe.provided.add(r5);
  for (const r5 of t5.signatures) o3(r5, n7);
}
en([p4], "sync"), en([p4], "async"), en([T], "async");
var nn = /* @__PURE__ */ Symbol("uninitialized");
var tn = "lang.uninitialized";
function rn(e4) {
  return `lang.requireInitialized(${e4})`;
}
var on = { uninitialized: nn, requireInitialized(e4) {
  if (e4 === nn) throw new n4(null, "InvalidIdentifier", null);
  return e4;
}, isNumber: (e4) => n3(e4), isArray: (e4) => o(e4), isImmutableArray: (e4) => te(e4), isDictionaryLike: (e4) => Q(e4), isString: (e4) => e(e4), isDictionary: (e4) => K(e4), isGeometry: (e4) => U(e4), getGeometryKeys: (e4) => p2(e4), getGeometryMember: (e4, n7, t5) => y2(e4, n7, t5, null), error(e4) {
  throw new n4(null, e4, null);
}, __awaiter(e4, n7, t5, r5) {
  const o6 = r5.apply(e4, n7 || []);
  let l5 = o6.next();
  for (; !l5.done && !C(l5.value); ) l5 = o6.next(l5.value);
  return l5.done ? l5.value : new Promise((e5, n8) => {
    function t6(r6) {
      for (; !r6.done; ) {
        if (C(r6.value)) return void Promise.resolve(r6.value).then((e6) => {
          try {
            t6(o6.next(e6));
          } catch (r7) {
            n8(r7);
          }
        }, (e6) => {
          try {
            t6(o6.throw(e6));
          } catch (r7) {
            n8(r7);
          }
        });
        try {
          r6 = o6.next(r6.value);
        } catch (l6) {
          return void n8(l6);
        }
      }
      e5(r6.value);
    }
    t6(l5);
  });
}, functionDepthchecker: (e4, n7) => function() {
  if (n7.depthCounter.depth++, n7.localStack.push({}), n7.depthCounter.depth > 64) throw new n4(null, "MaximumCallDepth", null);
  const t5 = e4.apply(this, arguments);
  return C(t5) ? t5.then((e5) => (n7.depthCounter.depth--, n7.localStack.length = n7.localStack.length - 1, e5)) : (n7.depthCounter.depth--, n7.localStack.length = n7.localStack.length - 1, t5);
}, mustBoolean(e4, n7) {
  if (true === e4 || false === e4) return e4;
  throw new n4(n7, "BooleanConditionRequired", null);
}, castString: (e4) => ge(e4), aCheck(e4, n7) {
  if (L(e4)) {
    if ("ArrayExpression" === n7) throw new n4(null, "NoFunctionInArray", null);
    if ("ObjectExpression" === n7) throw new n4(null, "NoFunctionInDictionary", null);
    throw new n4(null, "NoFunctionInTemplateLiteral", null);
  }
  return e4 === P ? null : e4;
}, Dictionary: p, Feature: I2, UserDefinedCompiledFunction: se, dictionary(e4) {
  const n7 = /* @__PURE__ */ Object.create(null), t5 = /* @__PURE__ */ new Map();
  for (let o6 = 0; o6 < e4.length; o6 += 2) {
    if (L(e4[o6 + 1])) throw new n4(null, "NoFunctionInDictionary", null);
    if (false === e(e4[o6])) throw new n4(null, "KeyMustBeString", null);
    let r6 = e4[o6].toString();
    const l5 = r6.toLowerCase();
    t5.has(l5) ? r6 = t5.get(l5) : t5.set(l5, r6), e4[o6 + 1] === P ? n7[r6] = null : n7[r6] = e4[o6 + 1];
  }
  const r5 = new p(n7);
  return r5.immutable = false, r5;
}, entry: (e4, n7) => p.containerEntry(e4, n7), strCheck(e4) {
  if (false === e(e4)) throw new n4(null, "KeyMustBeString", null);
  return e4;
}, unary(e4, n7) {
  if (t(e4)) {
    if ("!" === n7) return !e4;
    if ("-" === n7) return -1 * Se(e4);
    if ("+" === n7) return 1 * Se(e4);
    if ("~" === n7) return ~Se(e4);
    throw new n4(null, "UnsupportUnaryOperator", null);
  }
  if ("-" === n7) return -1 * Se(e4);
  if ("+" === n7) return 1 * Se(e4);
  if ("~" === n7) return ~Se(e4);
  throw new n4(null, "UnsupportUnaryOperator", null);
}, logicalCheck(e4) {
  if (false === t(e4)) throw new n4(null, "LogicExpressionOrAnd", null);
  return e4;
}, logical(e4, n7, t5) {
  if (t(e4) && t(n7)) switch (t5) {
    case "||":
      return e4 || n7;
    case "&&":
      return e4 && n7;
    default:
      throw new n4(null, "LogicExpressionOrAnd", null);
  }
  throw new n4(null, "LogicExpressionOrAnd", null);
}, binary(e4, n7, t5) {
  switch (t5) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return Le(Se(e4), Se(n7), t5);
    case "==":
      return ye(e4, n7);
    case "!=":
      return !ye(e4, n7);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return de(e4, n7, t5);
    case "+":
      return e(e4) || e(n7) ? ge(e4) + ge(n7) : Se(e4) + Se(n7);
    case "-":
      return Se(e4) - Se(n7);
    case "*":
      return Se(e4) * Se(n7);
    case "/":
      return Se(e4) / Se(n7);
    case "%":
      return Se(e4) % Se(n7);
    default:
      throw new n4(null, "UnsupportedOperator", null);
  }
}, assign(e4, n7, t5) {
  switch (n7) {
    case "=":
      return e4 === P ? null : e4;
    case "/=":
      return Se(t5) / Se(e4);
    case "*=":
      return Se(t5) * Se(e4);
    case "-=":
      return Se(t5) - Se(e4);
    case "+=":
      return e(t5) || e(e4) ? ge(t5) + ge(e4) : Se(t5) + Se(e4);
    case "%=":
      return Se(t5) % Se(e4);
    default:
      throw new n4(null, "UnsupportedOperator", null);
  }
}, update(e4, n7, t5, r5) {
  const o6 = Se(this.requireInitialized(e4[n7]));
  return e4[n7] = "++" === t5 ? o6 + 1 : o6 - 1, false === r5 ? o6 : "++" === t5 ? o6 + 1 : o6 - 1;
}, createFeature: (e4, n7, t5) => I2.createFromGraphicLikeObject(e4.geometry, e4.attributes, n7, t5.timeZone), memberupdate(e4, n7, t5, r5) {
  let o6;
  if (o(e4)) {
    if (!n3(n7)) throw new n4(null, "ArrayAccessMustBeNumber", null);
    if (n7 < 0 && (n7 = e4.length + n7), n7 < 0 || n7 >= e4.length) throw new n4(null, "OutOfBounds", null);
    o6 = Se(e4[n7]), e4[n7] = "++" === t5 ? o6 + 1 : o6 - 1;
  } else if (e4 instanceof p) {
    if (false === e(n7)) throw new n4(null, "KeyAccessorMustBeString", null);
    if (true !== e4.hasField(n7)) throw new n4(null, "FieldNotFound", null, { key: n7 });
    o6 = Se(e4.field(n7)), e4.setField(n7, "++" === t5 ? o6 + 1 : o6 - 1);
  } else if (H(e4)) {
    if (false === e(n7)) throw new n4(null, "KeyAccessorMustBeString", null);
    if (true !== e4.hasField(n7)) throw new n4(null, "FieldNotFound", null);
    o6 = Se(e4.field(n7)), e4.setField(n7, "++" === t5 ? o6 + 1 : o6 - 1);
  } else {
    if (te(e4)) throw new n4(null, "Immutable", null);
    if (!(e4 instanceof un)) throw new n4(null, "InvalidIdentifier", null);
    if (false === e(n7)) throw new n4(null, "ModuleAccessorMustBeString", null);
    if (true !== e4.hasGlobal(n7)) throw new n4(null, "ModuleExportNotFound", null);
    o6 = Se(e4.global(n7)), e4.setGlobal(n7, "++" === t5 ? o6 + 1 : o6 - 1);
  }
  return false === r5 ? o6 : "++" === t5 ? o6 + 1 : o6 - 1;
}, assignmember(e4, n7, t5, r5) {
  if (o(e4)) {
    if (!n3(n7)) throw new n4(null, "ArrayAccessMustBeNumber", null);
    if (n7 < 0 && (n7 = e4.length + n7), n7 < 0 || n7 > e4.length) throw new n4(null, "OutOfBounds", null);
    if (n7 === e4.length) {
      if ("=" !== t5) throw new n4(null, "OutOfBounds", null);
      e4[n7] = this.assign(r5, t5, e4[n7]);
    } else e4[n7] = this.assign(r5, t5, e4[n7]);
  } else if (e4 instanceof p) {
    if (false === e(n7)) throw new n4(null, "KeyAccessorMustBeString", null);
    if (true === e4.hasField(n7)) e4.setField(n7, this.assign(r5, t5, e4.field(n7)));
    else {
      if ("=" !== t5) throw new n4(null, "FieldNotFound", null);
      e4.setField(n7, this.assign(r5, t5, null));
    }
  } else if (H(e4)) {
    if (false === e(n7)) throw new n4(null, "KeyAccessorMustBeString", null);
    if (true === e4.hasField(n7)) e4.setField(n7, this.assign(r5, t5, e4.field(n7)));
    else {
      if ("=" !== t5) throw new n4(null, "FieldNotFound", null);
      e4.setField(n7, this.assign(r5, t5, null));
    }
  } else {
    if (te(e4)) throw new n4(null, "Immutable", null);
    if (!(e4 instanceof un)) throw new n4(null, "InvalidIdentifier", null);
    if (false === e(n7)) throw new n4(null, "ModuleAccessorMustBeString", null);
    if (!e4.hasGlobal(n7)) throw new n4(null, "ModuleExportNotFound", null);
    e4.setGlobal(n7, this.assign(r5, t5, e4.global(n7)));
  }
}, member: (e4, n7) => M(e4, n7), tryMember: (e4, n7) => x(e4, n7), callfunc(e4, n7, t5) {
  if (L(e4)) return e4.call(t5, { arguments: n7, preparsed: true });
  throw new n4(null, "CallNonFunction", null);
}, loadModule(e4, n7) {
  const t5 = n7.moduleFactoryMap[e4];
  if (n7.moduleSingletons[t5]) return n7.moduleSingletons[t5];
  const r5 = n7.moduleFactory[t5]({ moduleSingletons: n7.moduleSingletons, depthCounter: n7.depthCounter, lrucache: n7.lrucache, interceptor: n7.interceptor, services: n7.services, console: n7.console, abortSignal: n7.abortSignal, timeZone: n7.timeZone ?? null, spatialReference: n7.spatialReference });
  return n7.moduleSingletons[t5] = r5, r5;
}, getNestedOptionalValue: (e4, n7) => b(e4, n7) };
function ln(e4) {
  console.log(e4);
}
function an(t5, o6, l5 = false) {
  let a3 = null;
  t5.usesModules && (a3 = new s4(null, t5.loadedModules));
  const s10 = /* @__PURE__ */ Object.create(null), i5 = new Set(Object.keys(o6?.vars || {}).map((n7) => r2(n7))), u4 = new Set(Object.keys(o6?.customfunctions || {}).map((n7) => r2(n7))), c3 = ue(t5, l5 ? Xe.provided : Qe.provided, /* @__PURE__ */ new Set([...i5, ...u4]), l5, a3, s10);
  let m3;
  m3 = l5 ? ["var runtimeCtx = this.prepare(context, true);", "var lc = this.lc;", "var lang = this.lang;", "var gscope = runtimeCtx.globalScope;", "return lang.__awaiter(this, void 0, void 0, function* () {", "  function mainBody() {", "    return lang.__awaiter(this, void 0, void 0, function* () {", `      ${c3.body}`, "    });", "  }", "  return this.postProcess(yield mainBody());", "});"].join("\n") : ["var runtimeCtx = this.prepare(context, false);", "var lc = this.lc;", "var lang = this.lang;", "var gscope = runtimeCtx.globalScope;", "function mainBody() {", `  ${c3.body}`, "}", "return this.postProcess(mainBody());"].join("\n");
  const { symbolMetadata: p6, moduleFactoryMap: d4 } = c3, g6 = { lc: tt, lang: on, postProcess(e4) {
    if (q(e4)) return null;
    if (L(e4)) throw new n4(null, "IllegalResult", null);
    return e4;
  }, prepare(e4, t6) {
    const r5 = e4.spatialReference ?? S.WebMercator, o7 = t6 ? new Xe() : new Qe();
    for (const n7 of u4) null != e4.customfunctions && n7 in e4.customfunctions ? o7[n7] = e4.customfunctions[n7] ?? null : o7[n7] = nn;
    for (const n7 of i5) {
      if (null == e4.vars || !(n7 in e4.vars)) {
        n7 in o7 || (o7[n7] = nn);
        continue;
      }
      const t7 = e4.vars[n7] ?? null;
      t3(t7) ? o7[n7] = I2.createFromGraphic(t7, e4.timeZone ?? null) : o7[n7] = t7;
    }
    return { lrucache: e4.lrucache, interceptor: e4.interceptor, services: e4.services, console: e4.console ?? ln, abortSignal: e4.abortSignal ?? t2, timeZone: e4.timeZone ?? null, spatialReference: r5, track: e4.track, globalScope: o7, localStack: [], depthCounter: { depth: 1 }, symbolMetadata: p6, moduleFactory: s10, moduleFactoryMap: d4, moduleSingletons: /* @__PURE__ */ Object.create(null) };
  } };
  return new Function("context", m3).bind(g6);
}
async function sn() {
  return en([await import("./geomasync-F4ZMNQAR.js")], "async"), true;
}
var un = class extends s3 {
  constructor(e4) {
    super(), this.moduleContext = e4;
  }
  hasGlobal(n7) {
    const t5 = this.moduleContext.symbolMetadata.exports;
    return t5.has(n7) || t5.has(r2(n7));
  }
  setGlobal(n7, t5) {
    if (L(t5)) throw new n4(null, "AssignModuleFunction", null);
    const r5 = this.moduleContext.symbolMetadata.globals.get(r2(n7));
    if (null == r5) throw new n4(null, "ModuleExportNotFound", null);
    this.moduleContext.globalScope[r5] = t5;
  }
  global(n7) {
    const t5 = this.moduleContext.symbolMetadata.globals.get(r2(n7));
    if (null == t5) throw new n4(null, "ModuleExportNotFound", null);
    const r5 = this.moduleContext.globalScope, o6 = on.requireInitialized(r5[t5]);
    if (L(o6) && !(o6 instanceof s6)) {
      const e4 = new s6();
      return e4.fn = o6, e4.parameterEvaluator = ie2, e4.context = this.moduleContext, r5[t5] = e4, e4;
    }
    return o6;
  }
};
function cn(e4, t5, o6) {
  const l5 = new s4(null, e4.loadedModules), a3 = ue(e4, o6 ? Xe.provided : Qe.provided, /* @__PURE__ */ new Set(), o6, l5, t5);
  let s10;
  s10 = o6 ? ["var runtimeCtx = this.prepare(context, true);", "var lc = this.lc;", "var lang = this.lang;", "var gscope = runtimeCtx.globalScope;", "return lang.__awaiter(this, void 0, void 0, function* () {", "  function mainBody() {", "    return lang.__awaiter(this, void 0, void 0, function* () {", `      ${a3.body}`, "    });", "  }", "  yield mainBody();", "  return this.prepareModule(runtimeCtx);", "});"].join("\n") : ["var runtimeCtx = this.prepare(context, false);", "var lc = this.lc;", "var lang = this.lang;", "var gscope = runtimeCtx.globalScope;", "function mainBody() {", `  ${a3.body}`, "}", "mainBody();", "return this.prepareModule(runtimeCtx);"].join("\n");
  const { symbolMetadata: i5, moduleFactoryMap: u4 } = a3, c3 = { lc: tt, lang: on, prepareModule: (e5) => new un(e5), prepare(e5, r5) {
    const o7 = e5.spatialReference ?? S.WebMercator, l6 = r5 ? new Xe() : new Qe();
    return { lrucache: e5.lrucache, interceptor: e5.interceptor, services: e5.services, console: e5.console ?? ln, abortSignal: e5.abortSignal ?? t2, timeZone: e5.timeZone ?? null, spatialReference: o7, track: null, globalScope: l6, localStack: [], depthCounter: e5.depthCounter, symbolMetadata: i5, moduleFactory: t5, moduleFactoryMap: u4, moduleSingletons: e5.moduleSingletons };
  } };
  return new Function("context", s10).bind(c3);
}

// node_modules/@arcgis/core/chunks/index.js
var e3 = { False: "false", Null: "null", True: "true" };
var t4 = { Break: "break", Continue: "continue", Else: "else", For: "for", Function: "function", If: "if", Import: "import", Export: "export", In: "in", Return: "return", Var: "var", While: "while" };
var u3 = { From: "from", Of: "of" };
var i3 = { AssignmentExpression: "AssignmentExpression", ArrayExpression: "ArrayExpression", BlockComment: "BlockComment", BlockStatement: "BlockStatement", BinaryExpression: "BinaryExpression", BreakStatement: "BreakStatement", CallExpression: "CallExpression", ContinueStatement: "ContinueStatement", EmptyStatement: "EmptyStatement", ExpressionStatement: "ExpressionStatement", ExportNamedDeclaration: "ExportNamedDeclaration", ForStatement: "ForStatement", ForInStatement: "ForInStatement", ForOfStatement: "ForOfStatement", FunctionDeclaration: "FunctionDeclaration", Identifier: "Identifier", IfStatement: "IfStatement", ImportDeclaration: "ImportDeclaration", ImportDefaultSpecifier: "ImportDefaultSpecifier", LineComment: "LineComment", Literal: "Literal", LogicalExpression: "LogicalExpression", MemberAccessChainExpression: "MemberAccessChainExpression", MemberExpression: "MemberExpression", ObjectExpression: "ObjectExpression", Program: "Program", Property: "Property", ReturnStatement: "ReturnStatement", SafeMemberExpression: "SafeMemberExpression", TemplateElement: "TemplateElement", TemplateLiteral: "TemplateLiteral", UnaryExpression: "UnaryExpression", UpdateExpression: "UpdateExpression", VariableDeclaration: "VariableDeclaration", VariableDeclarator: "VariableDeclarator", WhileStatement: "WhileStatement" };
var n6 = ["++", "--"];
var r4 = ["-", "+", "!", "~"];
var s9 = ["=", "/=", "*=", "%=", "+=", "-="];
var a2 = ["||", "&&"];
var o5 = ["|", "&", ">>", "<<", ">>>", "^", "==", "!=", "<", "<=", ">", ">=", "+", "-", "*", "/", "%"];
var D2 = "?.";
var h3 = { "||": 1, "&&": 2, "|": 3, "^": 4, "&": 5, "==": 6, "!=": 6, "<": 7, ">": 7, "<=": 7, ">=": 7, "<<": 8, ">>": 8, ">>>": 8, "+": 9, "-": 9, "*": 10, "/": 10, "%": 10 };
var c2 = { BooleanLiteral: 1, EOF: 2, Identifier: 3, Keyword: 4, NullLiteral: 5, NumericLiteral: 6, Punctuator: 7, StringLiteral: 8, Template: 10 };
var l4 = ["Unknown", "Boolean", "<end>", "Identifier", "Keyword", "Null", "Numeric", "Punctuator", "String", "RegularExpression", "Template"];
var d2 = { InvalidModuleUri: "InvalidModuleUri", ForInOfLoopInitializer: "ForInOfLoopInitializer", IdentifierExpected: "IdentifierExpected", InvalidEscapedReservedWord: "InvalidEscapedReservedWord", InvalidExpression: "InvalidExpression", InvalidFunctionIdentifier: "InvalidFunctionIdentifier", InvalidHexEscapeSequence: "InvalidHexEscapeSequence", InvalidLeftHandSideInAssignment: "InvalidLeftHandSideInAssignment", InvalidLeftHandSideInForIn: "InvalidLeftHandSideInForIn", InvalidTemplateHead: "InvalidTemplateHead", InvalidVariableAssignment: "InvalidVariableAssignment", KeyMustBeString: "KeyMustBeString", NoFunctionInsideBlock: "NoFunctionInsideBlock", NoFunctionInsideFunction: "NoFunctionInsideFunction", ModuleExportRootOnly: "ModuleExportRootOnly", ModuleImportRootOnly: "ModuleImportRootOnly", PunctuatorExpected: "PunctuatorExpected", TemplateOctalLiteral: "TemplateOctalLiteral", UnexpectedBoolean: "UnexpectedBoolean", UnexpectedEndOfScript: "UnexpectedEndOfScript", UnexpectedIdentifier: "UnexpectedIdentifier", UnexpectedKeyword: "UnexpectedKeyword", UnexpectedNull: "UnexpectedNull", UnexpectedNumber: "UnexpectedNumber", UnexpectedPunctuator: "UnexpectedPunctuator", UnexpectedString: "UnexpectedString", UnexpectedTemplate: "UnexpectedTemplate", UnexpectedToken: "UnexpectedToken" };
var C2 = { [d2.InvalidModuleUri]: "Module uri must be a text literal.", [d2.ForInOfLoopInitializer]: "for-in loop variable declaration may not have an initializer.", [d2.IdentifierExpected]: "'${value}' is an invalid identifier.", [d2.InvalidEscapedReservedWord]: "Keyword cannot contain escaped characters.", [d2.InvalidExpression]: "Invalid expression.", [d2.InvalidFunctionIdentifier]: "'${value}' is an invalid function identifier.", [d2.InvalidHexEscapeSequence]: "Invalid hexadecimal escape sequence.", [d2.InvalidLeftHandSideInAssignment]: "Invalid left-hand side in assignment.", [d2.InvalidLeftHandSideInForIn]: "Invalid left-hand side in for-in.", [d2.InvalidTemplateHead]: "Invalid template structure.", [d2.InvalidVariableAssignment]: "Invalid variable assignment.", [d2.KeyMustBeString]: "Object property keys must be a word starting with a letter.", [d2.NoFunctionInsideBlock]: "Functions cannot be declared inside of code blocks.", [d2.NoFunctionInsideFunction]: "Functions cannot be declared inside another function.", [d2.ModuleExportRootOnly]: "Module exports cannot be declared inside of code blocks.", [d2.ModuleImportRootOnly]: "Module import cannot be declared inside of code blocks.", [d2.PunctuatorExpected]: "'${value}' expected.", [d2.TemplateOctalLiteral]: "Octal literals are not allowed in template literals.", [d2.UnexpectedBoolean]: "Unexpected boolean literal.", [d2.UnexpectedEndOfScript]: "Unexpected end of Arcade expression.", [d2.UnexpectedIdentifier]: "Unexpected identifier.", [d2.UnexpectedKeyword]: "Unexpected keyword.", [d2.UnexpectedNull]: "Unexpected null literal.", [d2.UnexpectedNumber]: "Unexpected number.", [d2.UnexpectedPunctuator]: "Unexpected punctuator.", [d2.UnexpectedString]: "Unexpected text literal.", [d2.UnexpectedTemplate]: "Unexpected quasi '${value}'.", [d2.UnexpectedToken]: "Unexpected token '${value}'." };
var F2 = class _F extends Error {
  constructor({ code: e4, index: t5, line: u4, column: i5, len: n7 = 0, description: r5, data: s10 }) {
    super(r5 ?? e4), this.declaredRootClass = "esri.arcade.lib.diagnostic", this.name = "ParsingError", this.code = e4, this.index = t5, this.line = u4, this.column = i5, this.len = n7, this.data = s10, this.description = r5, this.range = { start: { line: u4, column: i5 - 1 }, end: { line: u4, column: i5 + n7 } }, Error.captureStackTrace?.(this, _F);
  }
};
function p5(e4) {
  return !!e4 && "object" == typeof e4 && "type" in e4 && e4.type === i3.Program;
}
function E2(e4) {
  return !!e4 && "object" == typeof e4 && "type" in e4 && e4.type === i3.BlockStatement;
}
function A(e4) {
  return !!e4 && "object" == typeof e4 && "type" in e4 && e4.type === i3.BlockComment;
}
function m2(e4) {
  return !!e4 && "object" == typeof e4 && "type" in e4 && e4.type === i3.EmptyStatement;
}
function f3(e4) {
  return !!e4 && "object" == typeof e4 && "type" in e4 && e4.type === i3.VariableDeclarator;
}
function k2(e4, t5) {
  return t5.loc.end.line === e4.loc.start.line && t5.loc.end.column <= e4.loc.start.column;
}
function g4(e4, t5) {
  return e4.range[0] >= t5.range[0] && e4.range[1] <= t5.range[1];
}
var S2 = class {
  constructor() {
    this.comments = [], this._nodeStack = [], this._newComments = [];
  }
  insertInnerComments(e4) {
    if (!E2(e4) || 0 !== e4.body.length) return;
    const t5 = [];
    for (let u4 = this._newComments.length - 1; u4 >= 0; u4--) {
      const i5 = this._newComments[u4];
      e4.range[1] >= i5.range[0] && (t5.unshift(i5), this._newComments.splice(u4, 1));
    }
    t5.length && (e4.innerComments = t5);
  }
  attachTrailingComments(e4) {
    const t5 = this._nodeStack.at(-1);
    if (!t5) return;
    if (E2(e4) && g4(t5, e4)) for (let i5 = this._newComments.length - 1; i5 >= 0; i5--) {
      const u5 = this._newComments[i5];
      g4(u5, e4) && (t5.trailingComments = [...t5.trailingComments ?? [], u5], this._newComments.splice(i5, 1));
    }
    let u4 = [];
    if (this._newComments.length > 0) for (let i5 = this._newComments.length - 1; i5 >= 0; i5--) {
      const n7 = this._newComments[i5];
      k2(n7, t5) ? (t5.trailingComments = [...t5.trailingComments ?? [], n7], this._newComments.splice(i5, 1)) : k2(n7, e4) && (u4.unshift(n7), this._newComments.splice(i5, 1));
    }
    if (t5.trailingComments) {
      k2(t5.trailingComments[0], e4) && (u4 = [...u4, ...t5.trailingComments], delete t5.trailingComments);
    }
    u4.length > 0 && (e4.trailingComments = u4);
  }
  attachLeadingComments(e4) {
    let t5;
    for (; this._nodeStack.length > 0; ) {
      const u5 = this._nodeStack[this._nodeStack.length - 1];
      if (!(e4.range[0] <= u5.range[0])) break;
      t5 = u5, this._nodeStack.pop();
    }
    const u4 = [], i5 = [];
    if (null != t5) {
      if (!t5.leadingComments) return;
      for (let n7 = t5.leadingComments.length - 1; n7 >= 0; n7--) {
        const r5 = t5.leadingComments[n7];
        e4.range[0] >= r5.range[1] ? (u4.unshift(r5), t5.leadingComments.splice(n7, 1)) : f3(e4) && !A(r5) && (i5.unshift(r5), t5.leadingComments.splice(n7, 1));
      }
      return 0 === t5.leadingComments.length && delete t5.leadingComments, u4.length && (e4.leadingComments = u4), void (i5.length && (e4.trailingComments = [...i5, ...e4.trailingComments ?? []]));
    }
    for (let n7 = this._newComments.length - 1; n7 >= 0; n7--) {
      const t6 = this._newComments[n7];
      e4.range[0] >= t6.range[0] && (u4.unshift(t6), this._newComments.splice(n7, 1));
    }
    u4.length && (e4.leadingComments = u4);
  }
  attachComments(e4) {
    if (p5(e4) && e4.body.length > 0) {
      const t5 = this._nodeStack.at(-1);
      return t5 ? (t5.trailingComments = [...t5.trailingComments ?? [], ...this._newComments], this._newComments.length = 0, void this._nodeStack.pop()) : (e4.trailingComments = [...this._newComments], void (this._newComments.length = 0));
    }
    this.attachTrailingComments(e4), this.attachLeadingComments(e4), this.insertInnerComments(e4), this._nodeStack.push(e4);
  }
  collectComment(e4) {
    this.comments.push(e4), this._newComments.push(e4);
  }
};
var w2 = /\$\{(.*?)\}/gu;
function y4(e4, t5) {
  const u4 = C2[e4];
  return t5 ? u4.replace(w2, (e5, u5) => t5[u5]?.toString() ?? "") : u4;
}
var I4 = class {
  constructor(e4 = false) {
    this.tolerant = e4, this.errors = [];
  }
  recordError(e4) {
    this.errors.push(e4);
  }
  tolerate(e4) {
    if (!this.tolerant) throw e4;
    this.recordError(e4);
  }
  throwError(e4) {
    throw e4.description ??= y4(e4.code, e4.data), new F2(e4);
  }
  tolerateError(e4) {
    e4.description ??= y4(e4.code, e4.data);
    const t5 = new F2(e4);
    if (!this.tolerant) throw t5;
    this.recordError(t5);
  }
};
function T2(e4, t5) {
  if (!e4) throw new Error(`ASSERT: ${t5}`);
}
var b5 = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/u, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/u };
var L2 = { fromCodePoint: (e4) => e4 < 65536 ? String.fromCharCode(e4) : String.fromCharCode(55296 + (e4 - 65536 >> 10)) + String.fromCharCode(56320 + (e4 - 65536 & 1023)), isWhiteSpace: (e4) => 32 === e4 || 9 === e4 || 11 === e4 || 12 === e4 || 160 === e4 || e4 >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].includes(e4), isLineTerminator: (e4) => 10 === e4 || 13 === e4 || 8232 === e4 || 8233 === e4, isIdentifierStart: (e4) => 36 === e4 || 95 === e4 || e4 >= 65 && e4 <= 90 || e4 >= 97 && e4 <= 122 || 92 === e4 || e4 >= 128 && b5.NonAsciiIdentifierStart.test(L2.fromCodePoint(e4)), isIdentifierPart: (e4) => 36 === e4 || 95 === e4 || e4 >= 65 && e4 <= 90 || e4 >= 97 && e4 <= 122 || e4 >= 48 && e4 <= 57 || 92 === e4 || e4 >= 128 && b5.NonAsciiIdentifierPart.test(L2.fromCodePoint(e4)), isDecimalDigit: (e4) => e4 >= 48 && e4 <= 57, isHexDigit: (e4) => e4 >= 48 && e4 <= 57 || e4 >= 65 && e4 <= 70 || e4 >= 97 && e4 <= 102, isOctalDigit: (e4) => e4 >= 48 && e4 <= 55 };
function v2(e4) {
  return "0123456789abcdef".indexOf(e4.toLowerCase());
}
function N(e4) {
  return "01234567".indexOf(e4);
}
var U2 = [[], [], []];
n6.forEach((e4) => U2[e4.length - 1].push(e4)), r4.forEach((e4) => U2[e4.length - 1].push(e4)), a2.forEach((e4) => U2[e4.length - 1].push(e4)), s9.forEach((e4) => U2[e4.length - 1].push(e4)), o5.forEach((e4) => U2[e4.length - 1].push(e4)), U2[D2.length - 1].push(D2);
var P4 = class {
  constructor(e4, t5) {
    this.source = e4, this.errorHandler = t5, this._length = e4.length, this.index = 0, this.lineNumber = 1, this.lineStart = 0, this.curlyStack = [];
  }
  saveState() {
    return { index: this.index, lineNumber: this.lineNumber, lineStart: this.lineStart, curlyStack: this.curlyStack.slice() };
  }
  restoreState(e4) {
    this.index = e4.index, this.lineNumber = e4.lineNumber, this.lineStart = e4.lineStart, this.curlyStack = e4.curlyStack;
  }
  eof() {
    return this.index >= this._length;
  }
  throwUnexpectedToken(e4 = d2.UnexpectedToken) {
    this.errorHandler.throwError({ code: e4, index: this.index, line: this.lineNumber, column: this.index - this.lineStart + 1, data: { value: this.source.charAt(this.index) } });
  }
  tolerateUnexpectedToken(e4 = d2.UnexpectedToken) {
    this.errorHandler.tolerateError({ code: e4, index: this.index, line: this.lineNumber, column: this.index - this.lineStart + 1 });
  }
  skipSingleLineComment(e4) {
    const t5 = [], u4 = this.index - e4, i5 = { start: { line: this.lineNumber, column: this.index - this.lineStart - e4 }, end: { line: 0, column: 0 } };
    for (; !this.eof(); ) {
      const n8 = this.source.charCodeAt(this.index);
      if (this.index += 1, L2.isLineTerminator(n8)) {
        i5.end = { line: this.lineNumber, column: this.index - this.lineStart - 1 };
        const r5 = { multiLine: false, start: u4 + e4, end: this.index - 1, range: [u4, this.index - 1], loc: i5 };
        return t5.push(r5), 13 === n8 && 10 === this.source.charCodeAt(this.index) && (this.index += 1), this.lineNumber += 1, this.lineStart = this.index, t5;
      }
    }
    i5.end = { line: this.lineNumber, column: this.index - this.lineStart };
    const n7 = { multiLine: false, start: u4 + e4, end: this.index, range: [u4, this.index], loc: i5 };
    return t5.push(n7), t5;
  }
  skipMultiLineComment() {
    const e4 = [], t5 = this.index - 2, u4 = { start: { line: this.lineNumber, column: this.index - this.lineStart - 2 }, end: { line: 0, column: 0 } };
    for (; !this.eof(); ) {
      const i6 = this.source.charCodeAt(this.index);
      if (L2.isLineTerminator(i6)) 13 === i6 && 10 === this.source.charCodeAt(this.index + 1) && (this.index += 1), this.lineNumber += 1, this.index += 1, this.lineStart = this.index;
      else if (42 === i6) {
        if (47 === this.source.charCodeAt(this.index + 1)) {
          this.index += 2, u4.end = { line: this.lineNumber, column: this.index - this.lineStart };
          const i7 = { multiLine: true, start: t5 + 2, end: this.index - 2, range: [t5, this.index], loc: u4 };
          return e4.push(i7), e4;
        }
        this.index += 1;
      } else this.index += 1;
    }
    u4.end = { line: this.lineNumber, column: this.index - this.lineStart };
    const i5 = { multiLine: true, start: t5 + 2, end: this.index, range: [t5, this.index], loc: u4 };
    return e4.push(i5), this.tolerateUnexpectedToken(), e4;
  }
  scanComments() {
    let e4 = [];
    for (; !this.eof(); ) {
      let t5 = this.source.charCodeAt(this.index);
      if (L2.isWhiteSpace(t5)) this.index += 1;
      else if (L2.isLineTerminator(t5)) this.index += 1, 13 === t5 && 10 === this.source.charCodeAt(this.index) && (this.index += 1), this.lineNumber += 1, this.lineStart = this.index;
      else {
        if (47 !== t5) break;
        if (t5 = this.source.charCodeAt(this.index + 1), 47 === t5) {
          this.index += 2;
          const t6 = this.skipSingleLineComment(2);
          e4 = [...e4, ...t6];
        } else {
          if (42 !== t5) break;
          {
            this.index += 2;
            const t6 = this.skipMultiLineComment();
            e4 = [...e4, ...t6];
          }
        }
      }
    }
    return e4;
  }
  isKeyword(e4) {
    switch ((e4 = e4.toLowerCase()).length) {
      case 2:
        return e4 === t4.If || e4 === t4.In;
      case 3:
        return e4 === t4.Var || e4 === t4.For;
      case 4:
        return e4 === t4.Else;
      case 5:
        return e4 === t4.Break || e4 === t4.While;
      case 6:
        return e4 === t4.Return || e4 === t4.Import || e4 === t4.Export;
      case 8:
        return e4 === t4.Function || e4 === t4.Continue;
      default:
        return false;
    }
  }
  codePointAt(e4) {
    let t5 = this.source.charCodeAt(e4);
    if (t5 >= 55296 && t5 <= 56319) {
      const u4 = this.source.charCodeAt(e4 + 1);
      u4 >= 56320 && u4 <= 57343 && (t5 = 1024 * (t5 - 55296) + u4 - 56320 + 65536);
    }
    return t5;
  }
  scanHexEscape(e4) {
    const t5 = "u" === e4 ? 4 : 2;
    let u4 = 0;
    for (let i5 = 0; i5 < t5; i5++) {
      if (this.eof() || !L2.isHexDigit(this.source.charCodeAt(this.index))) return null;
      u4 = 16 * u4 + v2(this.source[this.index] ?? ""), this.index += 1;
    }
    return String.fromCharCode(u4);
  }
  scanUnicodeCodePointEscape() {
    let e4 = this.source[this.index], t5 = 0;
    for ("}" === e4 && this.throwUnexpectedToken(); !this.eof() && (e4 = this.source[this.index] ?? "", this.index += 1, L2.isHexDigit(e4.charCodeAt(0))); ) t5 = 16 * t5 + v2(e4);
    return (t5 > 1114111 || "}" !== e4) && this.throwUnexpectedToken(), L2.fromCodePoint(t5);
  }
  getIdentifier() {
    const e4 = this.index;
    for (this.index += 1; !this.eof(); ) {
      const t5 = this.source.charCodeAt(this.index);
      if (92 === t5) return this.index = e4, this.getComplexIdentifier();
      if (t5 >= 55296 && t5 < 57343) return this.index = e4, this.getComplexIdentifier();
      if (!L2.isIdentifierPart(t5)) break;
      this.index += 1;
    }
    return this.source.slice(e4, this.index);
  }
  getComplexIdentifier() {
    let e4, t5 = this.codePointAt(this.index), u4 = L2.fromCodePoint(t5);
    for (this.index += u4.length, 92 === t5 && (117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), this.index += 1, "{" === this.source[this.index] ? (this.index += 1, e4 = this.scanUnicodeCodePointEscape()) : (e4 = this.scanHexEscape("u"), (null === e4 || "\\" === e4 || !L2.isIdentifierStart(e4.charCodeAt(0))) && this.throwUnexpectedToken()), u4 = e4); !this.eof() && (t5 = this.codePointAt(this.index), L2.isIdentifierPart(t5)); ) e4 = L2.fromCodePoint(t5), u4 += e4, this.index += e4.length, 92 === t5 && (u4 = u4.substring(0, u4.length - 1), 117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), this.index += 1, "{" === this.source[this.index] ? (this.index += 1, e4 = this.scanUnicodeCodePointEscape()) : (e4 = this.scanHexEscape("u"), (null === e4 || "\\" === e4 || !L2.isIdentifierPart(e4.charCodeAt(0))) && this.throwUnexpectedToken()), u4 += e4);
    return u4;
  }
  octalToDecimal(e4) {
    let t5 = "0" !== e4, u4 = N(e4);
    return !this.eof() && L2.isOctalDigit(this.source.charCodeAt(this.index)) && (t5 = true, u4 = 8 * u4 + N(this.source[this.index] ?? ""), this.index += 1, "0123".includes(e4) && !this.eof() && L2.isOctalDigit(this.source.charCodeAt(this.index)) && (u4 = 8 * u4 + N(this.source[this.index] ?? ""), this.index += 1)), { code: u4, octal: t5 };
  }
  scanIdentifier() {
    let t5;
    const u4 = this.index, i5 = 92 === this.source.charCodeAt(u4) ? this.getComplexIdentifier() : this.getIdentifier();
    if (t5 = 1 === i5.length ? c2.Identifier : this.isKeyword(i5) ? c2.Keyword : i5.toLowerCase() === e3.Null ? c2.NullLiteral : i5.toLowerCase() === e3.True || i5.toLowerCase() === e3.False ? c2.BooleanLiteral : c2.Identifier, t5 !== c2.Identifier && u4 + i5.length !== this.index) {
      const e4 = this.index;
      this.index = u4, this.tolerateUnexpectedToken(d2.InvalidEscapedReservedWord), this.index = e4;
    }
    return { type: t5, value: i5, lineNumber: this.lineNumber, lineStart: this.lineStart, start: u4, end: this.index };
  }
  scanPunctuator() {
    const e4 = this.index;
    let t5 = this.source[this.index] ?? "";
    switch (t5) {
      case "(":
      case "{":
        "{" === t5 && this.curlyStack.push("{"), this.index += 1;
        break;
      case ".":
      case ")":
      case ";":
      case ",":
      case "[":
      case "]":
      case ":":
      case "~":
        this.index += 1;
        break;
      case "}":
        this.index += 1, this.curlyStack.pop();
        break;
      default:
        for (let e5 = U2.length; e5 > 0; e5--) if (t5 = this.source.substring(this.index, this.index + e5), U2[e5 - 1]?.includes(t5)) {
          this.index += e5;
          break;
        }
    }
    return this.index === e4 && this.throwUnexpectedToken(), { type: c2.Punctuator, value: t5, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
  }
  scanHexLiteral(e4) {
    let t5 = "";
    for (; !this.eof() && L2.isHexDigit(this.source.charCodeAt(this.index)); ) t5 += this.source[this.index], this.index += 1;
    return 0 === t5.length && this.throwUnexpectedToken(), L2.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: c2.NumericLiteral, value: Number.parseInt(`0x${t5}`, 16), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
  }
  scanBinaryLiteral(e4) {
    let t5 = "";
    for (; !this.eof(); ) {
      const e5 = this.source[this.index];
      if ("0" !== e5 && "1" !== e5) break;
      t5 += this.source[this.index], this.index += 1;
    }
    if (0 === t5.length && this.throwUnexpectedToken(), !this.eof()) {
      const e5 = this.source.charCodeAt(this.index);
      (L2.isIdentifierStart(e5) || L2.isDecimalDigit(e5)) && this.throwUnexpectedToken();
    }
    return { type: c2.NumericLiteral, value: Number.parseInt(t5, 2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
  }
  scanOctalLiteral(e4, t5) {
    let u4 = "", i5 = false;
    for (L2.isOctalDigit(e4.charCodeAt(0)) && (i5 = true, u4 = `0${this.source[this.index]}`), this.index += 1; !this.eof() && L2.isOctalDigit(this.source.charCodeAt(this.index)); ) u4 += this.source[this.index], this.index += 1;
    return !i5 && 0 === u4.length && this.throwUnexpectedToken(), (L2.isIdentifierStart(this.source.charCodeAt(this.index)) || L2.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), { type: c2.NumericLiteral, value: Number.parseInt(u4, 8), lineNumber: this.lineNumber, lineStart: this.lineStart, start: t5, end: this.index };
  }
  scanNumericLiteral() {
    const e4 = this.index;
    let t5 = this.source[e4] ?? "";
    T2(L2.isDecimalDigit(t5.charCodeAt(0)) || "." === t5, "Numeric literal must start with a decimal digit or a decimal point");
    let u4 = "";
    if ("." !== t5) {
      if (u4 = this.source[this.index] ?? "", this.index += 1, t5 = this.source[this.index] ?? "", "0" === u4) {
        if ("x" === t5 || "X" === t5) return this.index += 1, this.scanHexLiteral(e4);
        if ("b" === t5 || "B" === t5) return this.index += 1, this.scanBinaryLiteral(e4);
        if ("o" === t5 || "O" === t5) return this.scanOctalLiteral(t5, e4);
      }
      for (; L2.isDecimalDigit(this.source.charCodeAt(this.index)); ) u4 += this.source[this.index], this.index += 1;
      t5 = this.source[this.index] ?? "";
    }
    if ("." === t5) {
      for (u4 += this.source[this.index], this.index += 1; L2.isDecimalDigit(this.source.charCodeAt(this.index)); ) u4 += this.source[this.index], this.index += 1;
      t5 = this.source[this.index] ?? "";
    }
    if ("e" === t5 || "E" === t5) if (u4 += this.source[this.index], this.index += 1, t5 = this.source[this.index] ?? "", ("+" === t5 || "-" === t5) && (u4 += this.source[this.index], this.index += 1), L2.isDecimalDigit(this.source.charCodeAt(this.index))) for (; L2.isDecimalDigit(this.source.charCodeAt(this.index)); ) u4 += this.source[this.index], this.index += 1;
    else this.throwUnexpectedToken();
    return L2.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: c2.NumericLiteral, value: Number.parseFloat(u4), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
  }
  scanStringLiteral() {
    const e4 = this.index;
    let t5 = this.source[e4];
    T2("'" === t5 || '"' === t5, "String literal must starts with a quote"), this.index += 1;
    let u4 = false, i5 = "";
    for (; !this.eof(); ) {
      let e5 = this.source[this.index] ?? "";
      if (this.index += 1, e5 === t5) {
        t5 = "";
        break;
      }
      if ("\\" === e5) if (e5 = this.source[this.index] ?? "", this.index += 1, e5 && L2.isLineTerminator(e5.charCodeAt(0))) this.lineNumber += 1, "\r" === e5 && "\n" === this.source[this.index] && (this.index += 1), this.lineStart = this.index;
      else switch (e5) {
        case "u":
          if ("{" === this.source[this.index]) this.index += 1, i5 += this.scanUnicodeCodePointEscape();
          else {
            const t6 = this.scanHexEscape(e5);
            null === t6 && this.throwUnexpectedToken(), i5 += t6;
          }
          break;
        case "x": {
          const t6 = this.scanHexEscape(e5);
          null === t6 && this.throwUnexpectedToken(d2.InvalidHexEscapeSequence), i5 += t6;
          break;
        }
        case "n":
          i5 += "\n";
          break;
        case "r":
          i5 += "\r";
          break;
        case "t":
          i5 += "	";
          break;
        case "b":
          i5 += "\b";
          break;
        case "f":
          i5 += "\f";
          break;
        case "v":
          i5 += "\v";
          break;
        case "8":
        case "9":
          i5 += e5, this.tolerateUnexpectedToken();
          break;
        default:
          if (e5 && L2.isOctalDigit(e5.charCodeAt(0))) {
            const t6 = this.octalToDecimal(e5);
            u4 = t6.octal || u4, i5 += String.fromCharCode(t6.code);
          } else i5 += e5;
      }
      else {
        if (L2.isLineTerminator(e5.charCodeAt(0))) break;
        i5 += e5;
      }
    }
    return "" !== t5 && (this.index = e4, this.throwUnexpectedToken()), { type: c2.StringLiteral, value: i5, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
  }
  scanTemplate() {
    let e4 = "", t5 = false;
    const u4 = this.index, i5 = "`" === this.source[u4];
    let n7 = false, r5 = 2;
    for (this.index += 1; !this.eof(); ) {
      let u5 = this.source[this.index] ?? "";
      if (this.index += 1, "`" === u5) {
        r5 = 1, n7 = true, t5 = true;
        break;
      }
      if ("$" !== u5) if ("\\" !== u5) L2.isLineTerminator(u5.charCodeAt(0)) ? (this.lineNumber += 1, "\r" === u5 && "\n" === this.source[this.index] && (this.index += 1), this.lineStart = this.index, e4 += "\n") : e4 += u5;
      else if (u5 = this.source[this.index] ?? "", this.index += 1, L2.isLineTerminator(u5.charCodeAt(0))) this.lineNumber += 1, "\r" === u5 && "\n" === this.source[this.index] && (this.index += 1), this.lineStart = this.index;
      else switch (u5) {
        case "n":
          e4 += "\n";
          break;
        case "r":
          e4 += "\r";
          break;
        case "t":
          e4 += "	";
          break;
        case "u":
          if ("{" === this.source[this.index]) this.index += 1, e4 += this.scanUnicodeCodePointEscape();
          else {
            const t6 = this.index, i6 = this.scanHexEscape(u5);
            null !== i6 ? e4 += i6 : (this.index = t6, e4 += u5);
          }
          break;
        case "x": {
          const t6 = this.scanHexEscape(u5);
          null === t6 && this.throwUnexpectedToken(d2.InvalidHexEscapeSequence), e4 += t6;
          break;
        }
        case "b":
          e4 += "\b";
          break;
        case "f":
          e4 += "\f";
          break;
        case "v":
          e4 += "\v";
          break;
        default:
          "0" === u5 ? (L2.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(d2.TemplateOctalLiteral), e4 += "\0") : L2.isOctalDigit(u5.charCodeAt(0)) ? this.throwUnexpectedToken(d2.TemplateOctalLiteral) : e4 += u5;
      }
      else {
        if ("{" === this.source[this.index]) {
          this.curlyStack.push("${"), this.index += 1, t5 = true;
          break;
        }
        e4 += u5;
      }
    }
    return t5 || this.throwUnexpectedToken(), i5 || this.curlyStack.pop(), { type: c2.Template, value: this.source.slice(u4 + 1, this.index - r5), cooked: e4, head: i5, tail: n7, lineNumber: this.lineNumber, lineStart: this.lineStart, start: u4, end: this.index };
  }
  lex() {
    if (this.eof()) return { type: c2.EOF, value: "", lineNumber: this.lineNumber, lineStart: this.lineStart, start: this.index, end: this.index };
    const e4 = this.source.charCodeAt(this.index);
    return L2.isIdentifierStart(e4) ? this.scanIdentifier() : 40 === e4 || 41 === e4 || 59 === e4 ? this.scanPunctuator() : 39 === e4 || 34 === e4 ? this.scanStringLiteral() : 46 === e4 ? L2.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : L2.isDecimalDigit(e4) ? this.scanNumericLiteral() : 96 === e4 || 125 === e4 && "${" === this.curlyStack[this.curlyStack.length - 1] ? this.scanTemplate() : e4 >= 55296 && e4 < 57343 && L2.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator();
  }
};
var M4 = { None: 0, Function: 1, IfClause: 2, ForLoop: 4, ForOfLoop: 8, WhileLoop: 16 };
var O2 = { AsObject: 0, Automatic: 1 };
function R3(e4, t5 = 0) {
  let u4 = e4.start - e4.lineStart, i5 = e4.lineNumber;
  return u4 < 0 && (u4 += t5, i5 -= 1), { index: e4.start, line: i5, column: u4 };
}
function z4(e4) {
  return [__spreadValues({ index: e4.range[0] }, e4.loc.start), __spreadValues({ index: e4.range[1] }, e4.loc.end)];
}
function K2(e4) {
  return e4 in h3 ? h3[e4] : 0;
}
var H3 = class {
  constructor(e4, t5 = {}, u4) {
    this.delegate = u4, this.hasLineTerminator = false, this.options = { tokens: "boolean" == typeof t5.tokens && t5.tokens, comments: "boolean" == typeof t5.comments && t5.comments, tolerant: "boolean" == typeof t5.tolerant && t5.tolerant }, this.options.comments && (this.commentHandler = new S2()), this.errorHandler = new I4(this.options.tolerant), this.scanner = new P4(e4, this.errorHandler), this.context = { isAssignmentTarget: false, blockContext: M4.None, curlyParsingType: O2.AsObject }, this.rawToken = { type: c2.EOF, value: "", lineNumber: this.scanner.lineNumber, lineStart: 0, start: 0, end: 0 }, this.tokens = [], this.startMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.endMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.readNextRawToken(), this.endMarker = { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart };
  }
  throwIfInvalidType(e4, t5, { validTypes: u4, invalidTypes: i5 }) {
    u4?.some((t6) => e4.type === t6) || i5?.some((t6) => e4.type === t6) && this.throwError(d2.InvalidExpression, t5);
  }
  throwError(e4, t5, u4 = this.endMarker) {
    const { index: i5, line: n7, column: r5 } = t5, s10 = u4.index - i5 - 1;
    this.errorHandler.throwError({ code: e4, index: i5, line: n7, column: r5 + 1, len: s10 });
  }
  tolerateError(e4, t5) {
    throw new Error("######################################### !!!");
  }
  unexpectedTokenError(e4 = {}) {
    const { rawToken: t5 } = e4;
    let u4, { code: i5, data: n7 } = e4;
    if (t5) {
      if (!i5) switch (t5.type) {
        case c2.EOF:
          i5 = d2.UnexpectedEndOfScript;
          break;
        case c2.Identifier:
          i5 = d2.UnexpectedIdentifier;
          break;
        case c2.NumericLiteral:
          i5 = d2.UnexpectedNumber;
          break;
        case c2.StringLiteral:
          i5 = d2.UnexpectedString;
          break;
        case c2.Template:
          i5 = d2.UnexpectedTemplate;
      }
      u4 = t5.value.toString();
    } else u4 = "ILLEGAL";
    i5 ??= d2.UnexpectedToken, n7 ??= { value: u4 };
    const r5 = y4(i5, n7);
    if (t5) {
      const e5 = t5.start, u5 = t5.lineNumber, s11 = t5.start - t5.lineStart + 1;
      return new F2({ code: i5, index: e5, line: u5, column: s11, len: t5.end - t5.start - 1, data: n7, description: r5 });
    }
    const { index: s10, line: a3 } = this.endMarker;
    return new F2({ code: i5, index: s10, line: a3, column: this.endMarker.column + 1, data: n7, description: r5 });
  }
  throwUnexpectedToken(e4 = {}) {
    throw e4.rawToken ??= this.rawToken, this.unexpectedTokenError(e4);
  }
  collectComments(e4) {
    const { commentHandler: t5 } = this;
    !t5 || !e4.length || e4.forEach((e5) => {
      const u4 = { type: e5.multiLine ? i3.BlockComment : i3.LineComment, value: this.getSourceValue(e5), range: e5.range, loc: e5.loc };
      t5.collectComment(u4);
    });
  }
  peekAhead(e4) {
    const t5 = () => (this.scanner.scanComments(), this.scanner.lex()), u4 = this.scanner.saveState(), i5 = e4.call(this, t5);
    return this.scanner.restoreState(u4), i5;
  }
  getSourceValue(e4) {
    return this.scanner.source.slice(e4.start, e4.end);
  }
  convertToToken(e4) {
    return { type: l4[e4.type], value: this.getSourceValue(e4), range: [e4.start, e4.end], loc: { start: { line: this.startMarker.line, column: this.startMarker.column }, end: { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart } } };
  }
  readNextRawToken() {
    this.endMarker.index = this.scanner.index, this.endMarker.line = this.scanner.lineNumber, this.endMarker.column = this.scanner.index - this.scanner.lineStart;
    const e4 = this.rawToken;
    this.collectComments(this.scanner.scanComments()), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart), this.rawToken = this.scanner.lex(), this.hasLineTerminator = e4.lineNumber !== this.rawToken.lineNumber, this.options.tokens && this.rawToken.type !== c2.EOF && this.tokens.push(this.convertToToken(this.rawToken));
  }
  captureStartMarker() {
    return { index: this.startMarker.index, line: this.startMarker.line, column: this.startMarker.column };
  }
  getItemLocation(e4) {
    return { range: [e4.index, this.endMarker.index], loc: { start: { line: e4.line, column: e4.column }, end: { line: this.endMarker.line, column: this.endMarker.column } } };
  }
  finalize(e4) {
    return (this.delegate ?? this.commentHandler) && (this.commentHandler?.attachComments(e4), this.delegate?.(e4)), e4;
  }
  expectPunctuator(e4) {
    const t5 = this.rawToken;
    this.matchPunctuator(e4) ? this.readNextRawToken() : this.throwUnexpectedToken({ rawToken: t5, code: d2.PunctuatorExpected, data: { value: e4 } });
  }
  expectKeyword(e4) {
    this.rawToken.type !== c2.Keyword || this.rawToken.value.toLowerCase() !== e4.toString() ? this.throwUnexpectedToken({ rawToken: this.rawToken }) : this.readNextRawToken();
  }
  expectContextualKeyword(e4) {
    this.rawToken.type !== c2.Identifier || this.rawToken.value.toLowerCase() !== e4 ? this.throwUnexpectedToken({ rawToken: this.rawToken }) : this.readNextRawToken();
  }
  matchKeyword(e4) {
    return this.rawToken.type === c2.Keyword && this.rawToken.value.toLowerCase() === e4;
  }
  matchContextualKeyword(e4) {
    return this.rawToken.type === c2.Identifier && this.rawToken.value === e4;
  }
  matchPunctuator(e4) {
    return this.rawToken.type === c2.Punctuator && this.rawToken.value === e4;
  }
  getMatchingPunctuator(e4) {
    if ("string" == typeof e4 && (e4 = e4.split("")), this.rawToken.type === c2.Punctuator && e4.length) return e4.find(this.matchPunctuator.bind(this));
  }
  isolateCoverGrammar(e4) {
    const t5 = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = true;
    const u4 = e4.call(this);
    return this.context.isAssignmentTarget = t5, u4;
  }
  inheritCoverGrammar(e4) {
    const t5 = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = true;
    const u4 = e4.call(this);
    return this.context.isAssignmentTarget &&= t5, u4;
  }
  withBlockContext(e4, t5) {
    const u4 = this.context.blockContext;
    this.context.blockContext |= e4;
    const i5 = this.context.curlyParsingType;
    this.context.curlyParsingType = O2.Automatic;
    const n7 = t5.call(this);
    return this.context.blockContext = u4, this.context.curlyParsingType = i5, n7;
  }
  consumeSemicolon() {
    if (this.matchPunctuator(";")) this.readNextRawToken();
    else if (!this.hasLineTerminator) {
      if (this.rawToken.type === c2.EOF || this.matchPunctuator("}")) return this.endMarker.index = this.startMarker.index, this.endMarker.line = this.startMarker.line, void (this.endMarker.column = this.startMarker.column);
      this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parsePrimaryExpression() {
    const t5 = this.captureStartMarker(), u4 = this.rawToken;
    switch (u4.type) {
      case c2.Identifier:
        return this.readNextRawToken(), this.finalize(__spreadValues({ type: i3.Identifier, name: u4.value }, this.getItemLocation(t5)));
      case c2.NumericLiteral:
      case c2.StringLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize(__spreadValues({ type: i3.Literal, value: u4.value, raw: this.getSourceValue(u4), isString: "string" == typeof u4.value }, this.getItemLocation(t5)));
      case c2.BooleanLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize(__spreadValues({ type: i3.Literal, value: u4.value.toLowerCase() === e3.True, raw: this.getSourceValue(u4), isString: false }, this.getItemLocation(t5)));
      case c2.NullLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize(__spreadValues({ type: i3.Literal, value: null, raw: this.getSourceValue(u4), isString: false }, this.getItemLocation(t5)));
      case c2.Template:
        return this.parseTemplateLiteral();
      case c2.Punctuator:
        switch (u4.value) {
          case "(":
            return this.inheritCoverGrammar(this.parseGroupExpression.bind(this));
          case "[":
            return this.inheritCoverGrammar(this.parseArrayInitializer.bind(this));
          case "{":
            return this.inheritCoverGrammar(this.parseObjectExpression.bind(this));
          default:
            return this.throwUnexpectedToken({ rawToken: this.rawToken });
        }
      case c2.Keyword:
        return this.context.isAssignmentTarget = false, this.throwUnexpectedToken({ rawToken: this.rawToken });
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseArrayInitializer() {
    const e4 = this.captureStartMarker();
    this.expectPunctuator("[");
    const t5 = [];
    for (; !this.matchPunctuator("]"); ) {
      const e5 = this.captureStartMarker();
      this.matchPunctuator(",") ? (this.readNextRawToken(), this.throwError(d2.InvalidExpression, e5)) : (t5.push(this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this))), this.matchPunctuator("]") || this.expectPunctuator(","));
    }
    return this.expectPunctuator("]"), this.finalize(__spreadValues({ type: i3.ArrayExpression, elements: t5 }, this.getItemLocation(e4)));
  }
  parseObjectPropertyKey() {
    const e4 = this.captureStartMarker(), t5 = this.rawToken;
    switch (t5.type) {
      case c2.StringLiteral:
        return this.readNextRawToken(), this.finalize(__spreadValues({ type: i3.Literal, value: t5.value, raw: this.getSourceValue(t5), isString: true }, this.getItemLocation(e4)));
      case c2.Identifier:
      case c2.BooleanLiteral:
      case c2.NullLiteral:
      case c2.Keyword:
        return this.readNextRawToken(), this.finalize(__spreadValues({ type: i3.Identifier, name: t5.value }, this.getItemLocation(e4)));
      default:
        this.throwError(d2.KeyMustBeString, e4);
    }
  }
  parseObjectProperty() {
    const e4 = this.rawToken, t5 = this.captureStartMarker(), u4 = this.parseObjectPropertyKey();
    let n7 = false, r5 = null;
    return this.matchPunctuator(":") ? (this.readNextRawToken(), r5 = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this))) : e4.type === c2.Identifier ? (n7 = true, r5 = this.finalize(__spreadValues({ type: i3.Identifier, name: e4.value }, this.getItemLocation(t5)))) : this.throwUnexpectedToken({ rawToken: this.rawToken }), this.finalize(__spreadValues({ type: i3.Property, kind: "init", key: u4, value: r5, shorthand: n7 }, this.getItemLocation(t5)));
  }
  parseObjectExpression() {
    const e4 = this.captureStartMarker();
    this.expectPunctuator("{");
    const t5 = [];
    for (; !this.matchPunctuator("}"); ) t5.push(this.parseObjectProperty()), this.matchPunctuator("}") || this.expectPunctuator(",");
    return this.expectPunctuator("}"), this.finalize(__spreadValues({ type: i3.ObjectExpression, properties: t5 }, this.getItemLocation(e4)));
  }
  parseTemplateElement(e4 = false) {
    const t5 = this.rawToken;
    t5.type !== c2.Template && this.throwUnexpectedToken({ rawToken: t5 }), e4 && !t5.head && this.throwUnexpectedToken({ code: d2.InvalidTemplateHead, rawToken: t5 });
    const u4 = this.captureStartMarker();
    this.readNextRawToken();
    const { value: n7, cooked: r5, tail: s10 } = t5, a3 = this.finalize(__spreadValues({ type: i3.TemplateElement, value: { raw: n7, cooked: r5 }, tail: s10 }, this.getItemLocation(u4)));
    return a3.loc.start.column += 1, a3.loc.end.column -= s10 ? 1 : 2, a3;
  }
  parseTemplateLiteral() {
    const e4 = this.captureStartMarker(), t5 = [], u4 = [];
    let n7 = this.parseTemplateElement(true);
    for (u4.push(n7); !n7.tail; ) t5.push(this.parseExpression()), n7 = this.parseTemplateElement(), u4.push(n7);
    return this.finalize(__spreadValues({ type: i3.TemplateLiteral, quasis: u4, expressions: t5 }, this.getItemLocation(e4)));
  }
  parseGroupExpression() {
    this.expectPunctuator("(");
    const e4 = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this));
    return this.expectPunctuator(")"), e4;
  }
  parseArguments() {
    this.expectPunctuator("(");
    const e4 = [];
    if (!this.matchPunctuator(")")) for (; ; ) {
      const t5 = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
      if (e4.push(t5), this.matchPunctuator(")") || (this.expectPunctuator(","), this.matchPunctuator(")"))) break;
    }
    return this.expectPunctuator(")"), e4;
  }
  parseMemberName() {
    const e4 = this.rawToken, t5 = this.captureStartMarker();
    return this.readNextRawToken(), e4.type !== c2.NullLiteral && e4.type !== c2.Identifier && e4.type !== c2.Keyword && e4.type !== c2.BooleanLiteral && this.throwUnexpectedToken({ rawToken: e4 }), this.finalize(__spreadValues({ type: i3.Identifier, name: e4.value }, this.getItemLocation(t5)));
  }
  parseLeftHandSideExpression() {
    const e4 = this.captureStartMarker();
    let t5 = this.inheritCoverGrammar(this.parsePrimaryExpression.bind(this));
    const u4 = this.captureStartMarker();
    let n7, r5 = false;
    for (; n7 = this.getMatchingPunctuator(["(", "[", ".", D2]); ) {
      let s10 = false;
      switch (n7 === D2 && (r5 = true, s10 = true, this.expectPunctuator(D2), n7 = this.getMatchingPunctuator("[") ? "[" : "."), n7) {
        case "(": {
          this.context.isAssignmentTarget = false, t5.type !== i3.Identifier && t5.type !== i3.MemberExpression && t5.type !== i3.SafeMemberExpression && this.throwError(d2.IdentifierExpected, e4, u4);
          const n8 = this.parseArguments();
          t5 = this.finalize(__spreadValues({ type: i3.CallExpression, callee: t5, arguments: n8 }, this.getItemLocation(e4)));
          continue;
        }
        case "[": {
          this.context.isAssignmentTarget = !s10, this.expectPunctuator("[");
          const u5 = this.isolateCoverGrammar(() => this.parseExpression());
          this.expectPunctuator("]"), t5 = this.finalize(__spreadValues({ type: s10 ? i3.SafeMemberExpression : i3.MemberExpression, computed: true, object: t5, property: u5 }, this.getItemLocation(e4)));
          continue;
        }
        case ".": {
          this.context.isAssignmentTarget = !s10, s10 || this.expectPunctuator(".");
          const u5 = this.parseMemberName();
          t5 = this.finalize(__spreadValues({ type: s10 ? i3.SafeMemberExpression : i3.MemberExpression, computed: false, object: t5, property: u5 }, this.getItemLocation(e4)));
          continue;
        }
      }
    }
    return r5 ? this.finalize(__spreadValues({ type: i3.MemberAccessChainExpression, expression: t5 }, this.getItemLocation(e4))) : t5;
  }
  parseUpdateExpression() {
    const e4 = this.captureStartMarker();
    let t5 = this.getMatchingPunctuator(n6);
    if (t5) {
      this.readNextRawToken();
      const u5 = this.captureStartMarker(), n7 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
      return n7.type !== i3.Identifier && n7.type !== i3.MemberExpression && n7.type !== i3.CallExpression && this.throwError(d2.InvalidExpression, u5), this.context.isAssignmentTarget || this.tolerateError(d2.InvalidLeftHandSideInAssignment, e4), this.context.isAssignmentTarget = false, this.finalize(__spreadValues({ type: i3.UpdateExpression, operator: t5, argument: n7, prefix: true }, this.getItemLocation(e4)));
    }
    const u4 = this.captureStartMarker(), r5 = this.inheritCoverGrammar(this.parseLeftHandSideExpression.bind(this)), s10 = this.captureStartMarker();
    return this.hasLineTerminator || (t5 = this.getMatchingPunctuator(n6), !t5) ? r5 : (r5.type !== i3.Identifier && r5.type !== i3.MemberExpression && this.throwError(d2.InvalidExpression, u4, s10), this.context.isAssignmentTarget || this.tolerateError(d2.InvalidLeftHandSideInAssignment, e4), this.readNextRawToken(), this.context.isAssignmentTarget = false, this.finalize(__spreadValues({ type: i3.UpdateExpression, operator: t5, argument: r5, prefix: false }, this.getItemLocation(e4))));
  }
  parseUnaryExpression() {
    const e4 = this.getMatchingPunctuator(r4);
    if (e4) {
      const t5 = this.captureStartMarker();
      this.readNextRawToken();
      const u4 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
      return this.context.isAssignmentTarget = false, this.finalize(__spreadValues({ type: i3.UnaryExpression, operator: e4, argument: u4, prefix: true }, this.getItemLocation(t5)));
    }
    return this.parseUpdateExpression();
  }
  parseBinaryExpression() {
    const e4 = this.rawToken;
    let t5 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
    if (this.rawToken.type !== c2.Punctuator) return t5;
    const u4 = this.rawToken.value;
    let i5 = K2(u4);
    if (0 === i5) return t5;
    this.readNextRawToken(), this.context.isAssignmentTarget = false;
    const n7 = [e4, this.rawToken];
    let r5 = t5, s10 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
    const a3 = [r5, u4, s10], o6 = [i5];
    for (; this.rawToken.type === c2.Punctuator && (i5 = K2(this.rawToken.value)) > 0; ) {
      for (; a3.length > 2 && i5 <= o6[o6.length - 1]; ) {
        s10 = a3.pop();
        const e5 = a3.pop();
        o6.pop(), r5 = a3.pop(), n7.pop();
        const t6 = n7[n7.length - 1], u5 = R3(t6, t6.lineStart);
        a3.push(this.finalize(this.createBinaryOrLogicalExpression(u5, e5, r5, s10)));
      }
      a3.push(this.rawToken.value), o6.push(i5), n7.push(this.rawToken), this.readNextRawToken(), a3.push(this.inheritCoverGrammar(this.parseUnaryExpression.bind(this)));
    }
    let D4 = a3.length - 1;
    t5 = a3[D4];
    let h5 = n7.pop();
    for (; D4 > 1; ) {
      const e5 = n7.pop();
      if (!e5) break;
      const u5 = h5?.lineStart, i6 = R3(e5, u5), r6 = a3[D4 - 1];
      t5 = this.finalize(this.createBinaryOrLogicalExpression(i6, r6, a3[D4 - 2], t5)), D4 -= 2, h5 = e5;
    }
    return t5;
  }
  createBinaryOrLogicalExpression(e4, t5, u4, n7) {
    return a2.includes(t5) ? ((u4.type === i3.AssignmentExpression || u4.type === i3.UpdateExpression) && this.throwError(d2.InvalidExpression, ...z4(u4)), (n7.type === i3.AssignmentExpression || n7.type === i3.UpdateExpression) && this.throwError(d2.InvalidExpression, ...z4(u4)), __spreadValues({ type: i3.LogicalExpression, operator: t5, left: u4, right: n7 }, this.getItemLocation(e4))) : __spreadValues({ type: i3.BinaryExpression, operator: t5, left: u4, right: n7 }, this.getItemLocation(e4));
  }
  parseAssignmentExpression() {
    const e4 = this.captureStartMarker(), t5 = this.inheritCoverGrammar(this.parseBinaryExpression.bind(this)), u4 = this.captureStartMarker(), n7 = this.getMatchingPunctuator(s9);
    if (!n7) return t5;
    t5.type !== i3.Identifier && t5.type !== i3.MemberExpression && this.throwError(d2.InvalidExpression, e4, u4), this.context.isAssignmentTarget || this.tolerateError(d2.InvalidLeftHandSideInAssignment, e4), this.matchPunctuator("=") || (this.context.isAssignmentTarget = false), this.readNextRawToken();
    const r5 = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
    return this.finalize(__spreadValues({ type: i3.AssignmentExpression, left: t5, operator: n7, right: r5 }, this.getItemLocation(e4)));
  }
  parseExpression() {
    return this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
  }
  parseStatements(e4) {
    const t5 = [];
    for (; this.rawToken.type !== c2.EOF && !this.matchPunctuator(e4); ) {
      const e5 = this.parseStatementListItem();
      m2(e5) || t5.push(e5);
    }
    return t5;
  }
  parseStatementListItem() {
    return this.context.isAssignmentTarget = true, this.matchKeyword(t4.Function) ? this.parseFunctionDeclaration() : this.matchKeyword(t4.Export) ? this.parseExportDeclaration() : this.matchKeyword(t4.Import) ? this.parseImportDeclaration() : this.parseStatement();
  }
  parseBlock() {
    const e4 = this.captureStartMarker();
    this.expectPunctuator("{");
    const t5 = this.parseStatements("}");
    return this.expectPunctuator("}"), this.finalize(__spreadValues({ type: i3.BlockStatement, body: t5 }, this.getItemLocation(e4)));
  }
  parseObjectStatement() {
    const e4 = this.captureStartMarker(), t5 = this.parseObjectExpression();
    return this.finalize(__spreadValues({ type: i3.ExpressionStatement, expression: t5 }, this.getItemLocation(e4)));
  }
  parseBlockOrObjectStatement() {
    return this.context.curlyParsingType === O2.AsObject || this.peekAhead((e4) => {
      let t5 = e4();
      return !(t5.type !== c2.Identifier && t5.type !== c2.StringLiteral || (t5 = e4(), t5.type !== c2.Punctuator || ":" !== t5.value));
    }) ? this.parseObjectStatement() : this.parseBlock();
  }
  parseIdentifier() {
    const e4 = this.rawToken;
    if (e4.type !== c2.Identifier) return null;
    const t5 = this.captureStartMarker();
    return this.readNextRawToken(), this.finalize(__spreadValues({ type: i3.Identifier, name: e4.value }, this.getItemLocation(t5)));
  }
  parseVariableDeclarator() {
    const e4 = this.captureStartMarker(), t5 = this.parseIdentifier();
    t5 || this.throwUnexpectedToken({ code: d2.IdentifierExpected });
    let u4 = null;
    if (this.matchPunctuator("=")) {
      this.readNextRawToken();
      const e5 = this.rawToken;
      try {
        u4 = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
      } catch {
        this.throwUnexpectedToken({ rawToken: e5, code: d2.InvalidVariableAssignment });
      }
    }
    return this.finalize(__spreadValues({ type: i3.VariableDeclarator, id: t5, init: u4 }, this.getItemLocation(e4)));
  }
  parseVariableDeclarators() {
    const e4 = [this.parseVariableDeclarator()];
    for (; this.matchPunctuator(","); ) this.readNextRawToken(), e4.push(this.parseVariableDeclarator());
    return e4;
  }
  parseVariableDeclaration() {
    const e4 = this.captureStartMarker();
    this.expectKeyword(t4.Var);
    const u4 = this.parseVariableDeclarators();
    return this.consumeSemicolon(), this.finalize(__spreadValues({ type: i3.VariableDeclaration, declarations: u4, kind: "var" }, this.getItemLocation(e4)));
  }
  parseEmptyStatement() {
    const e4 = this.captureStartMarker();
    return this.expectPunctuator(";"), this.finalize(__spreadValues({ type: i3.EmptyStatement }, this.getItemLocation(e4)));
  }
  parseExpressionStatement() {
    const e4 = this.captureStartMarker(), t5 = this.parseExpression();
    return this.consumeSemicolon(), this.finalize(__spreadValues({ type: i3.ExpressionStatement, expression: t5 }, this.getItemLocation(e4)));
  }
  parseIfClause() {
    return this.withBlockContext(M4.IfClause, this.parseStatement.bind(this));
  }
  parseIfStatement() {
    const e4 = this.captureStartMarker();
    this.expectKeyword(t4.If), this.expectPunctuator("(");
    const u4 = this.captureStartMarker(), n7 = this.parseExpression(), r5 = this.captureStartMarker();
    this.expectPunctuator(")"), (n7.type === i3.AssignmentExpression || n7.type === i3.UpdateExpression) && this.throwError(d2.InvalidExpression, u4, r5);
    const s10 = this.parseIfClause();
    let a3 = null;
    return this.matchKeyword(t4.Else) && (this.readNextRawToken(), a3 = this.parseIfClause()), this.finalize(__spreadValues({ type: i3.IfStatement, test: n7, consequent: s10, alternate: a3 }, this.getItemLocation(e4)));
  }
  parseWhileStatement() {
    const e4 = this.captureStartMarker();
    this.expectKeyword(t4.While), this.expectPunctuator("(");
    const u4 = this.captureStartMarker(), n7 = this.parseExpression(), r5 = this.captureStartMarker();
    this.expectPunctuator(")"), (n7.type === i3.AssignmentExpression || n7.type === i3.UpdateExpression) && this.throwError(d2.InvalidExpression, u4, r5);
    const s10 = this.withBlockContext(M4.WhileLoop, this.parseStatement.bind(this));
    return this.finalize(__spreadValues({ type: i3.WhileStatement, test: n7, body: s10 }, this.getItemLocation(e4)));
  }
  parseForStatement() {
    let e4 = i3.ForStatement, n7 = null, r5 = null, s10 = null, a3 = null, o6 = null;
    const D4 = this.captureStartMarker();
    if (this.expectKeyword(t4.For), this.expectPunctuator("("), this.matchKeyword(t4.Var)) {
      const r6 = this.captureStartMarker();
      this.readNextRawToken();
      const s11 = this.parseVariableDeclarators();
      n7 = this.finalize(__spreadValues({ type: i3.VariableDeclaration, declarations: s11, kind: "var" }, this.getItemLocation(r6)));
      const o7 = this.matchKeyword(t4.In), D5 = this.matchContextualKeyword(u3.Of);
      1 === s11.length && (o7 || D5) && (s11[0].init && this.throwError(d2.ForInOfLoopInitializer, r6), e4 = o7 ? i3.ForInStatement : i3.ForOfStatement, a3 = n7);
    } else if (!this.matchPunctuator(";")) {
      const r6 = this.context.isAssignmentTarget, s11 = this.captureStartMarker();
      n7 = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this));
      const o7 = this.matchKeyword(t4.In), D5 = this.matchContextualKeyword(u3.Of);
      o7 || D5 ? (this.context.isAssignmentTarget || this.tolerateError(d2.InvalidLeftHandSideInForIn, s11), n7.type !== i3.Identifier && this.throwError(d2.InvalidLeftHandSideInForIn, s11), e4 = o7 ? i3.ForInStatement : i3.ForOfStatement, a3 = n7) : this.context.isAssignmentTarget = r6;
    }
    e4 === i3.ForStatement ? (this.expectPunctuator(";"), r5 = this.matchPunctuator(";") ? null : this.isolateCoverGrammar(this.parseExpression.bind(this)), this.expectPunctuator(";"), s10 = this.matchPunctuator(")") ? null : this.isolateCoverGrammar(this.parseExpression.bind(this))) : (this.readNextRawToken(), o6 = this.parseExpression()), this.expectPunctuator(")");
    const h5 = this.withBlockContext(e4 === i3.ForOfStatement ? M4.ForOfLoop : M4.ForLoop, () => this.isolateCoverGrammar(this.parseStatement.bind(this)));
    return e4 === i3.ForInStatement || e4 === i3.ForOfStatement ? this.finalize(__spreadValues({ type: e4, left: a3, right: o6, body: h5 }, this.getItemLocation(D4))) : this.finalize(__spreadValues({ type: e4, init: n7, test: r5, update: s10, body: h5 }, this.getItemLocation(D4)));
  }
  parseContinueStatement() {
    const e4 = this.captureStartMarker();
    return this.expectKeyword(t4.Continue), this.consumeSemicolon(), this.finalize(__spreadValues({ type: i3.ContinueStatement }, this.getItemLocation(e4)));
  }
  parseBreakStatement() {
    const e4 = this.captureStartMarker();
    return this.expectKeyword(t4.Break), this.consumeSemicolon(), this.finalize(__spreadValues({ type: i3.BreakStatement }, this.getItemLocation(e4)));
  }
  parseReturnStatement() {
    const e4 = this.captureStartMarker();
    this.expectKeyword(t4.Return);
    const u4 = (this.matchPunctuator(";") || this.matchPunctuator("}") || this.hasLineTerminator || this.rawToken.type === c2.EOF) && this.rawToken.type !== c2.StringLiteral && this.rawToken.type !== c2.Template ? null : this.parseExpression();
    return this.consumeSemicolon(), this.finalize(__spreadValues({ type: i3.ReturnStatement, argument: u4 }, this.getItemLocation(e4)));
  }
  parseStatement() {
    switch (this.rawToken.type) {
      case c2.BooleanLiteral:
      case c2.NullLiteral:
      case c2.NumericLiteral:
      case c2.StringLiteral:
      case c2.Template:
      case c2.Identifier:
        return this.parseExpressionStatement();
      case c2.Punctuator:
        return "{" === this.rawToken.value ? this.parseBlockOrObjectStatement() : "(" === this.rawToken.value ? this.parseExpressionStatement() : ";" === this.rawToken.value ? this.parseEmptyStatement() : this.parseExpressionStatement();
      case c2.Keyword:
        switch (this.rawToken.value.toLowerCase()) {
          case t4.Break:
            return this.parseBreakStatement();
          case t4.Continue:
            return this.parseContinueStatement();
          case t4.For:
            return this.parseForStatement();
          case t4.Function:
            return this.parseFunctionDeclaration();
          case t4.If:
            return this.parseIfStatement();
          case t4.Return:
            return this.parseReturnStatement();
          case t4.Var:
            return this.parseVariableDeclaration();
          case t4.While:
            return this.parseWhileStatement();
          default:
            return this.parseExpressionStatement();
        }
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseFormalParameters() {
    const e4 = [];
    if (this.expectPunctuator("("), !this.matchPunctuator(")")) for (; this.rawToken.type !== c2.EOF; ) {
      const t5 = this.parseIdentifier();
      if (t5 || this.throwUnexpectedToken({ rawToken: this.rawToken, code: d2.IdentifierExpected }), e4.push(t5), this.matchPunctuator(")") || (this.expectPunctuator(","), this.matchPunctuator(")"))) break;
    }
    return this.expectPunctuator(")"), e4;
  }
  parseFunctionDeclaration() {
    (this.context.blockContext & M4.Function) === M4.Function && this.throwUnexpectedToken({ code: d2.NoFunctionInsideFunction }), ((this.context.blockContext & M4.WhileLoop) === M4.WhileLoop || (this.context.blockContext & M4.ForOfLoop) === M4.ForOfLoop || (this.context.blockContext & M4.IfClause) === M4.IfClause) && this.throwUnexpectedToken({ code: d2.NoFunctionInsideBlock });
    const e4 = this.captureStartMarker();
    this.expectKeyword(t4.Function);
    const u4 = this.parseIdentifier();
    u4 || this.throwUnexpectedToken({ code: d2.InvalidFunctionIdentifier });
    const n7 = this.parseFormalParameters(), r5 = this.context.blockContext;
    this.context.blockContext |= M4.Function;
    const s10 = this.parseBlock();
    return this.context.blockContext = r5, this.finalize(__spreadValues({ type: i3.FunctionDeclaration, id: u4, params: n7, body: s10 }, this.getItemLocation(e4)));
  }
  parseScript() {
    const e4 = this.captureStartMarker(), t5 = this.parseStatements(), u4 = this.finalize(__spreadValues({ type: i3.Program, body: t5 }, this.getItemLocation(e4)));
    return this.options.tokens && (u4.tokens = this.tokens), this.options.tolerant && (u4.errors = this.errorHandler.errors), u4;
  }
  parseExportDeclaration() {
    this.context.blockContext !== M4.None && this.throwUnexpectedToken({ code: d2.ModuleExportRootOnly });
    let e4 = null;
    const u4 = this.captureStartMarker();
    return this.expectKeyword(t4.Export), this.matchKeyword(t4.Var) ? e4 = this.parseVariableDeclaration() : this.matchKeyword("function") ? e4 = this.parseFunctionDeclaration() : this.throwUnexpectedToken({ code: d2.InvalidExpression }), this.finalize(__spreadValues({ type: i3.ExportNamedDeclaration, declaration: e4, specifiers: [], source: null }, this.getItemLocation(u4)));
  }
  parseModuleSpecifier() {
    const e4 = this.captureStartMarker(), t5 = this.rawToken;
    if (t5.type === c2.StringLiteral) return this.readNextRawToken(), this.finalize(__spreadValues({ type: i3.Literal, value: t5.value, raw: this.getSourceValue(t5), isString: true }, this.getItemLocation(e4)));
    this.throwError(d2.InvalidModuleUri, e4);
  }
  parseDefaultSpecifier() {
    const e4 = this.captureStartMarker(), t5 = this.parseIdentifier();
    return t5 || this.throwUnexpectedToken({ code: d2.IdentifierExpected }), this.finalize(__spreadValues({ type: i3.ImportDefaultSpecifier, local: t5 }, this.getItemLocation(e4)));
  }
  parseImportDeclaration() {
    this.context.blockContext !== M4.None && this.throwUnexpectedToken({ code: d2.ModuleImportRootOnly });
    const e4 = this.captureStartMarker();
    this.expectKeyword(t4.Import);
    const n7 = this.parseDefaultSpecifier();
    this.expectContextualKeyword(u3.From);
    const r5 = this.parseModuleSpecifier();
    return this.finalize(__spreadValues({ type: i3.ImportDeclaration, specifiers: [n7], source: r5 }, this.getItemLocation(e4)));
  }
};
function V(e4, t5, u4) {
  return new H3(e4, t5, u4).parseScript();
}

// node_modules/@arcgis/core/arcade/parser.js
function d3(d4, r5 = []) {
  const s10 = V(d4);
  if (null === s10.body || void 0 === s10.body) throw new F2({ index: 0, line: 0, column: 0, data: null, description: "", code: d2.InvalidExpression });
  return s10.loadedModules = {}, g(s10, r5), s10;
}

// node_modules/@arcgis/core/arcade/ArcadeModuleResolver.js
var i4 = class _i {
  constructor(t5) {
    this.portalUri = t5;
  }
  static {
    this.mocks = {};
  }
  static {
    this.cachedModules = new s8(30);
  }
  normalizeModuleUri(t5) {
    const r5 = /^[a-z0-9]+(@[0-9]+\.[0-9]+\.[0-9]+)?([?|/].*)?$/gi, o6 = /(?<portalurl>.+)\/home\/item\.html\?id=(?<itemid>.+)$/gi, c3 = /(?<portalurl>.+)\/sharing\/rest\/content\/users\/[a-z0-9]+\/items\/(?<itemid>.+)$/gi, l5 = /(?<portalurl>.+)\/sharing\/rest\/content\/items\/(?<itemid>.+)$/gi, a3 = /(?<itemid>.*)@(?<versionstring>[0-9]+\.[0-9]+\.[0-9]+)([?|/].*)?$/gi;
    if (t5.startsWith("portal+")) {
      let i5 = t5.slice(7), u4 = "", n7 = i5, m3 = false;
      for (const t6 of [o6, l5, c3]) {
        const e4 = t6.exec(i5);
        if (null !== e4) {
          const t7 = e4.groups;
          n7 = t7.itemid, u4 = t7.portalurl, m3 = true;
          break;
        }
      }
      if (false === m3) {
        if (!r5.test(i5)) throw new l("UnsupportedUriProtocol", { uri: t5 });
        n7 = i5, u4 = this.portalUri;
      }
      n7.includes("/") && (n7 = n7.split("/")[0]), n7.includes("?") && (n7 = n7.split("?")[0]);
      let d4 = "current";
      const h5 = a3.exec(n7);
      if (null !== h5) {
        const t6 = h5.groups;
        n7 = t6.itemid, d4 = t6.versionstring;
      }
      return i5 = new M3({ url: u4 }).restUrl + "/content/items/" + n7 + "/resources/" + d4 + ".arc", { url: i5, scheme: "portal", uri: "PO:" + i5 };
    }
    if (t5.startsWith("mock")) {
      if ("mock" === t5) {
        return { url: "", scheme: "mock", data: '\n      export var hello = 1;\n      export function helloWorld() {\n          return "Hello World " + hello;\n      }\n  ', uri: "mock" };
      }
      const e4 = t5.replace("mock:", "");
      if (void 0 !== _i.mocks[e4]) return { url: "", scheme: "mock", data: _i.mocks[e4], uri: t5 };
    }
    throw new l("UnrecognizedUri", { uri: t5 });
  }
  async fetchModule(t5) {
    const e4 = _i.cachedModules.getFromCache(t5.uri);
    if (e4) return e4;
    const r5 = this.fetchSource(t5);
    _i.cachedModules.addToCache(t5.uri, r5);
    let o6 = null;
    try {
      o6 = await r5;
    } catch (s10) {
      throw _i.cachedModules.removeFromCache(t5.uri), s10;
    }
    return o6;
  }
  async fetchSource(o6) {
    if ("portal" === o6.scheme) {
      const e4 = await f(o6.url, { responseType: "text", query: {} });
      if (e4.data) return d3(e4.data, []);
    }
    if ("mock" === o6.scheme) return d3(o6.data ?? "", []);
    throw new l("UnsupportedUriProtocol");
  }
  static create(t5) {
    return new _i(t5);
  }
  static {
    this._default = null;
  }
  static getDefault() {
    return this._default ?? (_i._default = _i._moduleResolverFactory());
  }
  static set moduleResolverClass(t5) {
    this._moduleResolverFactory = t5, this._default = null;
  }
  static {
    this._moduleResolverFactory = () => {
      const t5 = M3.getDefault();
      return new _i(t5.url);
    };
  }
};

// node_modules/@arcgis/core/arcade/arcadeRuntime.js
var ee = () => n.getLogger("esri.arcade.arcadeRuntime");
var te3 = /* @__PURE__ */ Symbol("uninitialized");
function re3(e4) {
  if (e4 === te3) throw new n4(null, "InvalidIdentifier", null);
}
function ne3(e4) {
  return re3(e4), e4;
}
function oe3(t5, r5) {
  const n7 = r2(r5);
  if (null !== t5.localScope) {
    const e4 = t5.localScope[n7];
    if (void 0 !== e4) return { scope: t5.localScope, id: n7, var: e4 };
  }
  const o6 = t5.globalScope[n7];
  if (void 0 !== o6) return { scope: t5.globalScope, id: n7, var: o6 };
  throw new n4(t5, "InvalidIdentifier", r5);
}
function se2(t5, r5, n7 = "InvalidIdentifier") {
  const o6 = r2(r5);
  if (null !== t5.localScope) {
    const e4 = t5.localScope[o6];
    if (void 0 !== e4) return re3(e4), e4.value;
  }
  const s10 = t5.globalScope[o6];
  if (void 0 !== s10) return re3(s10), s10.value;
  throw new n4(t5, n7, r5);
}
var ie3 = function() {
};
ie3.prototype = Object.freeze(/* @__PURE__ */ Object.create(null));
var ae2 = class extends r3 {
  constructor(e4, t5, r5, n7) {
    super(), this.definition = e4, this.context = t5, this._params = r5, this._locals = n7;
  }
  createFunction(e4) {
    return (...t5) => {
      const r5 = { spatialReference: this.context.spatialReference, console: this.context.console, services: this.context.services, timeZone: this.context.timeZone ?? null, lrucache: this.context.lrucache, exports: this.context.exports, libraryResolver: this.context.libraryResolver, interceptor: this.context.interceptor, abortSignal: this.context.abortSignal, localScope: new ie3(), depthCounter: { depth: e4.depthCounter.depth + 1 }, globalScope: this.context.globalScope, track: this.context.track };
      if (r5.depthCounter.depth > 64) throw new n4(e4, "MaximumCallDepth", null);
      return le2(r5, this.definition.body, this._params, this._locals, t5, null);
    };
  }
  call(e4, t5) {
    return fe2(e4, t5, (r5, n7, o6) => {
      const s10 = { spatialReference: e4.spatialReference, services: e4.services, globalScope: e4.globalScope, depthCounter: { depth: e4.depthCounter.depth + 1 }, libraryResolver: e4.libraryResolver, exports: e4.exports, timeZone: e4.timeZone ?? null, console: e4.console, lrucache: e4.lrucache, interceptor: e4.interceptor, abortSignal: e4.abortSignal, localScope: new ie3(), track: e4.track };
      if (s10.depthCounter.depth > 64) throw new n4(e4, "MaximumCallDepth", t5);
      return le2(s10, this.definition.body, this._params, this._locals, o6, t5);
    });
  }
  marshalledCall(e4, t5, r5, n7) {
    return n7(e4, t5, (o6, s10, i5) => {
      const a3 = { spatialReference: e4.spatialReference, globalScope: r5.globalScope, services: e4.services, depthCounter: { depth: e4.depthCounter.depth + 1 }, libraryResolver: e4.libraryResolver, exports: e4.exports, console: e4.console, timeZone: e4.timeZone ?? null, lrucache: e4.lrucache, interceptor: e4.interceptor, abortSignal: e4.abortSignal, localScope: new ie3(), track: e4.track };
      return i5 = i5.map((t6) => !L(t6) || t6 instanceof s6 ? t6 : n5(t6, e4, n7)), n5(le2(a3, this.definition.body, this._params, this._locals, i5, t5), r5, n7);
    });
  }
};
function le2(e4, t5, r5, n7, o6, s10) {
  try {
    if (r5.length !== o6.length) throw new n4(e4, "WrongNumberOfParameters", s10);
    if (null != e4.localScope) {
      for (let t6 = 0; t6 < r5.length; t6++) e4.localScope[r5[t6]] = { value: o6[t6] };
      for (const t6 of n7) e4.localScope[t6] = te3;
    }
    const i5 = he2(e4, t5);
    if (i5 instanceof R) return i5.value;
    if (i5 === I) throw new n4(e4, "UnexpectedToken", s10);
    if (i5 === _2) throw new n4(e4, "UnexpectedToken", s10);
    return i5 instanceof v ? i5.value : i5;
  } catch (i5) {
    throw i5;
  }
}
var ce2 = class _ce extends s3 {
  constructor(e4) {
    super(), this.moduleGlobalContext = e4;
  }
  global(t5) {
    const r5 = r2(t5);
    if (!this.moduleGlobalContext.exports.has(r5)) throw new n4(null, "ModuleExportNotFound", null);
    const n7 = this.moduleGlobalContext.globalScope[r5];
    if (re3(n7), L(n7.value) && !(n7.value instanceof s6)) {
      const e4 = new s6();
      return e4.fn = n7.value, e4.parameterEvaluator = fe2, e4.context = this.moduleGlobalContext, this.moduleGlobalContext.globalScope[r5] = { value: e4 }, e4;
    }
    return n7.value;
  }
  setGlobal(t5, r5) {
    if (L(r5)) throw new n4(null, "AssignModuleFunction", null);
    const n7 = r2(t5);
    if (!this.moduleGlobalContext.exports.has(n7)) throw new n4(null, "ModuleExportNotFound", null);
    this.moduleGlobalContext.globalScope[n7] = { value: r5 };
  }
  hasGlobal(t5) {
    return this.moduleGlobalContext.exports.has(r2(t5));
  }
  static load(e4, r5) {
    const { globals: s10, exports: i5 } = s5(r5), a3 = new Xe2();
    for (const t5 of s10) t5 in a3 || (a3[t5] = te3);
    const l5 = e4.spatialReference ?? S.WebMercator, c3 = { lrucache: e4.lrucache, interceptor: e4.interceptor, services: e4.services, console: e4.console ?? tt2, abortSignal: t2, timeZone: e4.timeZone ?? null, spatialReference: l5, track: e4.track, depthCounter: { depth: 1 }, libraryResolver: new s4(e4.libraryResolver._moduleSingletons, r5.loadedModules), exports: i5, localScope: null, globalScope: a3 };
    return je3(c3, r5), new _ce(c3);
  }
};
function ue2(e4, t5) {
  const r5 = [];
  for (let n7 = 0; n7 < t5.arguments.length; n7++) r5.push(pe2(e4, t5.arguments[n7]));
  return r5;
}
function fe2(e4, t5, r5) {
  try {
    return true === t5.preparsed ? r5(e4, null, t5.arguments) : r5(e4, t5, ue2(e4, t5));
  } catch (n7) {
    throw n7;
  }
}
function pe2(e4, t5) {
  try {
    switch (t5.type) {
      case "AssignmentExpression":
        return Se3(e4, t5);
      case "UpdateExpression":
        return ve3(e4, t5);
      case "TemplateLiteral":
        return qe2(e4, t5);
      case "Identifier":
        return We2(e4, t5);
      case "MemberExpression":
        return Ee2(e4, t5);
      case "Literal":
        return t5.value;
      case "CallExpression":
        return Pe3(e4, t5);
      case "UnaryExpression":
        return ze2(e4, t5);
      case "BinaryExpression":
        return Le3(e4, t5);
      case "LogicalExpression":
        return _e2(e4, t5);
      case "ArrayExpression":
        return De2(e4, t5);
      case "ObjectExpression":
        return de3(e4, t5);
      case "MemberAccessChainExpression":
        return Ge2(e4, t5);
      case "SafeMemberExpression":
        throw ee().error("SafeMemberExpression outside of MemberAccessChainExpression"), new n4(null, "Unrecognized", t5);
      default:
        throw new n4(e4, "Unrecognized", t5);
    }
  } catch (r5) {
    throw i(e4, t5, r5);
  }
}
function he2(e4, t5) {
  switch (t5.type) {
    case "EmptyStatement":
      return P;
    case "VariableDeclaration":
      return Ce2(e4, t5);
    case "ImportDeclaration":
      return Oe2(e4, t5);
    case "ExportNamedDeclaration":
      return Ae3(e4, t5);
    case "BlockStatement":
      return je3(e4, t5);
    case "FunctionDeclaration":
      return Ie2(e4, t5);
    case "ReturnStatement":
      return ke2(e4, t5);
    case "IfStatement":
      return Fe2(e4, t5);
    case "ExpressionStatement":
      return Re3(e4, t5);
    case "BreakStatement":
      return I;
    case "ContinueStatement":
      return _2;
    case "ForStatement":
      return ge3(e4, t5);
    case "ForInStatement":
      return we2(e4, t5);
    case "ForOfStatement":
      return me2(e4, t5);
    case "WhileStatement":
      return be2(e4, t5);
    default:
      throw new n4(e4, "Unrecognized", t5);
  }
}
function de3(e4, t5) {
  const r5 = /* @__PURE__ */ Object.create(null), n7 = /* @__PURE__ */ new Map();
  for (let s10 = 0; s10 < t5.properties.length; s10++) {
    const o7 = t5.properties[s10], i5 = "Identifier" === o7.key.type ? o7.key.name : pe2(e4, o7.key), a3 = pe2(e4, o7.value);
    if (L(a3)) throw new n4(e4, "NoFunctionInDictionary", t5);
    if (false === e(i5)) throw new n4(e4, "KeyMustBeString", t5);
    let l5 = i5.toString();
    const c3 = l5.toLowerCase();
    n7.has(c3) ? l5 = n7.get(c3) : n7.set(c3, l5), r5[l5] = a3 === P ? null : a3;
  }
  const o6 = new p(r5);
  return o6.immutable = false, o6;
}
function we2(e4, t5) {
  const r5 = pe2(e4, t5.right);
  "VariableDeclaration" === t5.left.type && Ce2(e4, t5.left);
  const n7 = oe3(e4, "VariableDeclaration" === t5.left.type ? t5.left.declarations[0].id : t5.left);
  if (o(r5) || e(r5)) {
    const o6 = r5.length;
    for (let r6 = 0; r6 < o6; r6++) {
      n7.scope[n7.id] = { value: r6 };
      const o7 = he2(e4, t5.body);
      if (o7 === I) break;
      if (o7 instanceof R) return o7;
    }
    return P;
  }
  if (te(r5)) {
    for (let o6 = 0; o6 < r5.length(); o6++) {
      n7.scope[n7.id] = { value: o6 };
      const r6 = he2(e4, t5.body);
      if (r6 === I) break;
      if (r6 instanceof R) return r6;
    }
    return P;
  }
  if (r5 instanceof p || Q(r5)) {
    const o6 = r5.keys();
    for (let r6 = 0; r6 < o6.length; r6++) {
      n7.scope[n7.id] = { value: o6[r6] };
      const s10 = he2(e4, t5.body);
      if (s10 === I) break;
      if (s10 instanceof R) return s10;
    }
    return P;
  }
  if (U(r5)) {
    for (const o6 of p2(r5)) {
      n7.scope[n7.id] = { value: o6 };
      const r6 = he2(e4, t5.body);
      if (r6 === I) break;
      if (r6 instanceof R) return r6;
    }
    return P;
  }
  return P;
}
function me2(e4, t5) {
  const r5 = pe2(e4, t5.right);
  "VariableDeclaration" === t5.left.type && he2(e4, t5.left);
  const n7 = oe3(e4, "VariableDeclaration" === t5.left.type ? t5.left.declarations[0].id : t5.left);
  if (o(r5) || e(r5)) {
    const o6 = r5.length;
    for (let s10 = 0; s10 < o6; s10++) {
      if (s10 >= r5.length) throw new n4(e4, "OutOfBounds", t5);
      n7.scope[n7.id] = { value: r5[s10] };
      const o7 = he2(e4, t5.body);
      if (o7 === I) break;
      if (o7 instanceof R) return o7;
    }
    return P;
  }
  if (te(r5)) {
    for (let o6 = 0; o6 < r5.length(); o6++) {
      n7.scope[n7.id] = { value: r5.get(o6) };
      const s10 = he2(e4, t5.body);
      if (s10 === I) break;
      if (s10 instanceof R) return s10;
    }
    return P;
  }
  if (r5 instanceof p || Q(r5)) {
    for (const o6 of r5.keys()) {
      const s10 = r5.field(o6);
      n7.scope[n7.id] = { value: p.containerEntry(o6, s10) };
      const i5 = he2(e4, t5.body);
      if (i5 === I) break;
      if (i5 instanceof R) return i5;
    }
    return P;
  }
  if (U(r5)) {
    for (const o6 of p2(r5)) {
      const s10 = y2(r5, o6, e4, t5);
      n7.scope[n7.id] = { value: p.containerEntry(o6, s10) };
      const i5 = he2(e4, t5.body);
      if (i5 === I) break;
      if (i5 instanceof R) return i5;
    }
    return P;
  }
  return P;
}
function ge3(e4, t5) {
  null !== t5.init && ("VariableDeclaration" === t5.init.type ? he2(e4, t5.init) : pe2(e4, t5.init));
  const r5 = { testResult: true, lastAction: P };
  do {
    ye3(e4, t5, r5);
  } while (true === r5.testResult);
  return r5.lastAction instanceof R ? r5.lastAction : P;
}
function be2(e4, t5) {
  const r5 = { testResult: true, lastAction: P };
  if (r5.testResult = pe2(e4, t5.test), false === r5.testResult) return P;
  if (true !== r5.testResult) throw new n4(e4, "BooleanConditionRequired", t5);
  for (; true === r5.testResult && (r5.lastAction = he2(e4, t5.body), r5.lastAction !== I) && !(r5.lastAction instanceof R); ) if (r5.testResult = pe2(e4, t5.test), true !== r5.testResult && false !== r5.testResult) throw new n4(e4, "BooleanConditionRequired", t5);
  return r5.lastAction instanceof R ? r5.lastAction : P;
}
function ye3(e4, t5, r5) {
  if (null !== t5.test) {
    if (r5.testResult = pe2(e4, t5.test), false === r5.testResult) return;
    if (true !== r5.testResult) throw new n4(e4, "BooleanConditionRequired", t5);
  }
  r5.lastAction = he2(e4, t5.body), r5.lastAction !== I ? r5.lastAction instanceof R ? r5.testResult = false : null !== t5.update && pe2(e4, t5.update) : r5.testResult = false;
}
function ve3(e4, t5) {
  if ("CallExpression" === t5.argument.type) throw new n4(e4, "NeverReach", t5);
  let r5;
  if ("MemberExpression" === t5.argument.type) {
    const n8 = pe2(e4, t5.argument.object);
    let o7;
    if (true === t5.argument.computed) o7 = pe2(e4, t5.argument.property);
    else {
      if ("Identifier" !== t5.argument.property.type) throw new n4(e4, "Unrecognized", t5);
      o7 = t5.argument.property.name;
    }
    if (o(n8)) {
      if (!n3(o7)) throw new n4(e4, "ArrayAccessMustBeNumber", t5);
      if (o7 < 0 && (o7 = n8.length + o7), o7 < 0 || o7 >= n8.length) throw new n4(e4, "OutOfBounds", t5);
      r5 = Se(n8[o7]), n8[o7] = "++" === t5.operator ? r5 + 1 : r5 - 1;
    } else if (n8 instanceof p) {
      if (false === e(o7)) throw new n4(e4, "KeyAccessorMustBeString", t5);
      if (true !== n8.hasField(o7)) throw new n4(e4, "FieldNotFound", t5);
      r5 = Se(n8.field(o7)), n8.setField(o7, "++" === t5.operator ? r5 + 1 : r5 - 1);
    } else if (H(n8)) {
      if (false === e(o7)) throw new n4(e4, "KeyAccessorMustBeString", t5);
      if (true !== n8.hasField(o7)) throw new n4(e4, "FieldNotFound", t5);
      r5 = Se(n8.field(o7)), n8.setField(o7, "++" === t5.operator ? r5 + 1 : r5 - 1);
    } else {
      if (te(n8)) throw new n4(e4, "Immutable", t5);
      if (!(n8 instanceof ce2)) throw new n4(e4, "InvalidParameter", t5);
      if (false === e(o7)) throw new n4(e4, "ModuleAccessorMustBeString", t5);
      if (true !== n8.hasGlobal(o7)) throw new n4(e4, "ModuleExportNotFound", t5);
      r5 = Se(n8.global(o7)), n8.setGlobal(o7, "++" === t5.operator ? r5 + 1 : r5 - 1);
    }
    return false === t5.prefix ? r5 : "++" === t5.operator ? r5 + 1 : r5 - 1;
  }
  const n7 = oe3(e4, t5.argument);
  r5 = Se(ne3(n7.var).value);
  const o6 = "++" === t5.operator ? r5 + 1 : r5 - 1;
  return n7.scope[n7.id] = { value: o6 }, false === t5.prefix ? r5 : "++" === t5.operator ? r5 + 1 : r5 - 1;
}
function xe2(e4, t5, r5, n7, o6) {
  switch (t5) {
    case "=":
      return e4 === P ? null : e4;
    case "/=":
      return Se(r5) / Se(e4);
    case "*=":
      return Se(r5) * Se(e4);
    case "-=":
      return Se(r5) - Se(e4);
    case "+=":
      return e(r5) || e(e4) ? ge(r5) + ge(e4) : Se(r5) + Se(e4);
    case "%=":
      return Se(r5) % Se(e4);
    default:
      throw new n4(o6, "UnsupportedOperator", n7);
  }
}
function Se3(e4, t5) {
  if ("MemberExpression" === t5.left.type) {
    const r6 = pe2(e4, t5.left.object);
    let n8;
    if (true === t5.left.computed) n8 = pe2(e4, t5.left.property);
    else {
      if ("Identifier" !== t5.left.property.type) throw new n4(e4, "InvalidIdentifier", t5);
      n8 = t5.left.property.name;
    }
    const o6 = pe2(e4, t5.right);
    if (o(r6)) {
      if (!n3(n8)) throw new n4(e4, "ArrayAccessMustBeNumber", t5);
      if (n8 < 0 && (n8 = r6.length + n8), n8 < 0 || n8 > r6.length) throw new n4(e4, "OutOfBounds", t5);
      if (n8 === r6.length) {
        if ("=" !== t5.operator) throw new n4(e4, "OutOfBounds", t5);
        r6[n8] = xe2(o6, t5.operator, r6[n8], t5, e4);
      } else r6[n8] = xe2(o6, t5.operator, r6[n8], t5, e4);
    } else if (r6 instanceof p) {
      if (false === e(n8)) throw new n4(e4, "KeyAccessorMustBeString", t5);
      if (true === r6.hasField(n8)) r6.setField(n8, xe2(o6, t5.operator, r6.field(n8), t5, e4));
      else {
        if ("=" !== t5.operator) throw new n4(e4, "FieldNotFound", t5, { key: n8 });
        r6.setField(n8, xe2(o6, t5.operator, null, t5, e4));
      }
    } else if (H(r6)) {
      if (false === e(n8)) throw new n4(e4, "KeyAccessorMustBeString", t5);
      if (true === r6.hasField(n8)) r6.setField(n8, xe2(o6, t5.operator, r6.field(n8), t5, e4));
      else {
        if ("=" !== t5.operator) throw new n4(e4, "FieldNotFound", t5, { key: n8 });
        r6.setField(n8, xe2(o6, t5.operator, null, t5, e4));
      }
    } else {
      if (te(r6)) throw new n4(e4, "Immutable", t5);
      if (!(r6 instanceof ce2)) throw new n4(e4, "InvalidIdentifier", t5);
      if (false === e(n8)) throw new n4(e4, "ModuleAccessorMustBeString", t5);
      if (true !== r6.hasGlobal(n8)) throw new n4(e4, "ModuleExportNotFound", t5);
      r6.setGlobal(n8, xe2(o6, t5.operator, r6.global(n8), t5, e4));
    }
    return P;
  }
  const r5 = oe3(e4, t5.left), n7 = pe2(e4, t5.right);
  return r5.scope[r5.id] = { value: xe2(n7, t5.operator, "=" !== t5.operator ? ne3(r5.var).value : null, t5, e4) }, P;
}
function Re3(e4, t5) {
  const r5 = pe2(e4, t5.expression);
  return r5 === P ? P : new v(r5);
}
function Fe2(e4, t5) {
  const r5 = pe2(e4, t5.test);
  if (true === r5) return he2(e4, t5.consequent);
  if (false === r5) return null !== t5.alternate ? he2(e4, t5.alternate) : P;
  throw new n4(e4, "BooleanConditionRequired", t5);
}
function je3(e4, t5) {
  let r5 = P;
  for (let n7 = 0; n7 < t5.body.length; n7++) if (r5 = he2(e4, t5.body[n7]), r5 instanceof R || r5 === I || r5 === _2) return r5;
  return r5;
}
function ke2(e4, t5) {
  if (null === t5.argument) return new R(P);
  const r5 = pe2(e4, t5.argument);
  return new R(r5);
}
function Ie2(t5, r5) {
  if (null != t5.localScope) throw ee().error("Function declarations are only valid in global scope."), new n4(t5, "NeverReach", r5);
  const n7 = r2(r5.id);
  if (!(n7 in t5.globalScope)) throw ee().error(`Function "${n7}" not declared.`), new n4(t5, "NeverReach", r5);
  const o6 = i2(r5), i5 = r5.params.map((t6) => r2(t6)), a3 = Array.from(o6).filter((e4) => !i5.includes(e4));
  return t5.globalScope[n7] = { value: new ae2(r5, t5, i5, a3) }, P;
}
function Oe2(e4, t5) {
  const r5 = oe3(e4, t5.specifiers[0].local), n7 = e4.libraryResolver;
  if (null == n7) throw ee().error("Internal error: module loader not initialized"), new n4(e4, "NeverReach", t5);
  const o6 = n7.loadLibrary(r5.id);
  let s10;
  return n7._moduleSingletons?.has(o6.uri) ? s10 = n7._moduleSingletons.get(o6.uri) : (s10 = ce2.load(e4, o6.syntax), n7._moduleSingletons?.set(o6.uri, s10)), r5.scope[r5.id] = { value: s10 }, P;
}
function Ae3(e4, t5) {
  return he2(e4, t5.declaration), P;
}
function Ce2(e4, t5) {
  for (let r5 = 0; r5 < t5.declarations.length; r5++) Me2(e4, t5.declarations[r5]);
  return P;
}
function Me2(e4, t5) {
  let r5 = null === t5.init ? null : pe2(e4, t5.init);
  if (r5 === P && (r5 = null), "Identifier" !== t5.id.type) throw new n4(e4, "InvalidIdentifier", t5);
  const n7 = oe3(e4, t5.id);
  n7.scope[n7.id] = { value: r5 };
}
function Ee2(e4, t5) {
  return Ne2(e4, pe2(e4, t5.object), t5);
}
function Ne2(e4, t5, r5) {
  const n7 = r5.computed ? pe2(e4, r5.property) : r5.property.name;
  return M(t5, n7);
}
function Be2(e4, t5, r5) {
  for (const n7 of r5) switch (n7.type) {
    case "MemberExpression":
      t5 = Ne2(e4, t5, n7);
      break;
    case "CallExpression":
      t5 = Ve2(e4, t5, n7);
      break;
    default:
      throw new n4(null, "Unrecognized", n7);
  }
  return t5;
}
function Ue2(e4, t5, r5) {
  const n7 = r5.computed ? pe2(e4, r5.property) : r5.property.name;
  return x(t5, n7);
}
function Ge2(e4, t5) {
  const r5 = l2(t5);
  let n7 = pe2(e4, r5.root);
  for (const o6 of r5.sections) {
    const t6 = Ue2(e4, n7, o6.checked);
    if (null == t6) return null;
    n7 = Be2(e4, t6, o6.unchecked);
  }
  return n7;
}
function ze2(e4, t5) {
  try {
    const r5 = pe2(e4, t5.argument);
    if (t(r5)) {
      if ("!" === t5.operator) return !r5;
      if ("-" === t5.operator) return -1 * Se(r5);
      if ("+" === t5.operator) return 1 * Se(r5);
      if ("~" === t5.operator) return ~Se(r5);
      throw new n4(e4, "UnsupportUnaryOperator", t5);
    }
    if ("~" === t5.operator) return ~Se(r5);
    if ("-" === t5.operator) return -1 * Se(r5);
    if ("+" === t5.operator) return 1 * Se(r5);
    throw new n4(e4, "UnsupportUnaryOperator", t5);
  } catch (r5) {
    throw r5;
  }
}
function De2(e4, t5) {
  try {
    const r5 = [];
    for (let n7 = 0; n7 < t5.elements.length; n7++) {
      const o6 = pe2(e4, t5.elements[n7]);
      if (L(o6)) throw new n4(e4, "NoFunctionInArray", t5);
      o6 === P ? r5.push(null) : r5.push(o6);
    }
    return r5;
  } catch (r5) {
    throw r5;
  }
}
function Le3(e4, t5) {
  try {
    const r5 = pe2(e4, t5.left), n7 = pe2(e4, t5.right);
    switch (t5.operator) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return Le(Se(r5), Se(n7), t5.operator);
      case "==":
        return ye(r5, n7);
      case "!=":
        return !ye(r5, n7);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return de(r5, n7, t5.operator);
      case "+":
        return e(r5) || e(n7) ? ge(r5) + ge(n7) : Se(r5) + Se(n7);
      case "-":
        return Se(r5) - Se(n7);
      case "*":
        return Se(r5) * Se(n7);
      case "/":
        return Se(r5) / Se(n7);
      case "%":
        return Se(r5) % Se(n7);
      default:
        throw t5.operator, new n4(e4, "UnsupportedOperator", t5);
    }
  } catch (r5) {
    throw r5;
  }
}
function _e2(e4, t5) {
  try {
    const r5 = pe2(e4, t5.left);
    if (t(r5)) switch (t5.operator) {
      case "||": {
        if (true === r5) return r5;
        const n7 = pe2(e4, t5.right);
        if (t(n7)) return n7;
        throw new n4(e4, "LogicExpressionOrAnd", t5);
      }
      case "&&": {
        if (false === r5) return r5;
        const n7 = pe2(e4, t5.right);
        if (t(n7)) return n7;
        throw new n4(e4, "LogicExpressionOrAnd", t5);
      }
      default:
        throw t5.operator, new n4(e4, "LogicExpressionOrAnd", t5);
    }
    throw new n4(e4, "LogicalExpressionOnlyBoolean", t5);
  } catch (r5) {
    throw r5;
  }
}
function Ze2(e4, t5, r5) {
  if (L(e4)) throw new n4(t5, "NoFunctionInTemplateLiteral", r5);
  return e4;
}
function qe2(e4, t5) {
  let r5 = "", n7 = 0;
  for (const o6 of t5.quasis) if (r5 += o6.value ? o6.value.cooked : "", false === o6.tail) {
    r5 += t5.expressions[n7] ? ge(Ze2(pe2(e4, t5.expressions[n7]), e4, t5)) : "", n7++;
  }
  return r5;
}
function We2(e4, t5) {
  return se2(e4, t5);
}
function Pe3(e4, t5) {
  return Ve2(e4, "Identifier" === t5.callee.type ? se2(e4, t5.callee, "FunctionNotFound") : pe2(e4, t5.callee), t5);
}
function Ve2(e4, t5, r5) {
  if (L(t5)) return t5.call(e4, r5);
  throw new n4(e4, "CallNonFunction", r5);
}
function Te2(e4, t5) {
  try {
    if (true === t5.preparsed) throw new n4(e4, "NeverReach", t5);
    const r5 = t5.arguments;
    oe(null === r5 ? [] : r5, 3, 3, e4, t5);
    const n7 = pe2(e4, r5[0]);
    if (false === t(n7)) throw new n4(e4, "BooleanConditionRequired", t5);
    return pe2(e4, true === n7 ? r5[1] : r5[2]);
  } catch (r5) {
    throw r5;
  }
}
function Ke3(e4, t5) {
  try {
    if (true === t5.preparsed) throw new n4(e4, "NeverReach", t5);
    const r5 = t5.arguments;
    oe(null === r5 ? [] : r5, 2, 3, e4, t5);
    const n7 = pe2(e4, r5[0]);
    if (3 === r5.length) {
      const t6 = pe2(e4, r5[1]), o6 = b(n7, t6);
      return null != o6 && "" !== o6 ? o6 : pe2(e4, r5[2]);
    }
    return null === n7 || "" === n7 || void 0 === n7 ? pe2(e4, r5[1]) : n7;
  } catch (r5) {
    throw r5;
  }
}
function Ye2(e4, t5) {
  try {
    if (true === t5.preparsed) throw new n4(e4, "NeverReach", t5);
    const r5 = t5.arguments;
    if (r5.length < 2) throw new n4(e4, "WrongNumberOfParameters", t5);
    if (2 === r5.length) return pe2(e4, r5[1]);
    {
      if ((r5.length - 1) % 2 == 0) throw new n4(e4, "WrongNumberOfParameters", t5);
      const n7 = pe2(e4, r5[0]);
      return $e2(e4, t5, 1, n7);
    }
  } catch (r5) {
    throw r5;
  }
}
function $e2(e4, t5, r5, n7) {
  try {
    const o6 = t5.arguments, s10 = pe2(e4, o6[r5]);
    if (ye(s10, n7)) return pe2(e4, o6[r5 + 1]);
    {
      const s11 = o6.length - r5;
      return 1 === s11 ? pe2(e4, o6[r5]) : 2 === s11 ? null : 3 === s11 ? pe2(e4, o6[r5 + 2]) : $e2(e4, t5, r5 + 2, n7);
    }
  } catch (o6) {
    throw o6;
  }
}
function He2(e4, t5) {
  try {
    if (true === t5.preparsed) throw new n4(e4, "NeverReach", t5);
    const r5 = t5.arguments;
    if (r5.length < 3) throw new n4(e4, "WrongNumberOfParameters", t5);
    if (r5.length % 2 == 0) throw new n4(e4, "WrongNumberOfParameters", t5);
    const n7 = pe2(e4, r5[0]);
    if (false === t(n7)) throw new n4(e4, "BooleanConditionRequired", r5[0]);
    return Je3(e4, t5, 0, n7);
  } catch (r5) {
    throw r5;
  }
}
function Je3(e4, t5, r5, n7) {
  try {
    const o6 = t5.arguments;
    if (true === n7) return pe2(e4, o6[r5 + 1]);
    if (3 === o6.length - r5) return pe2(e4, o6[r5 + 2]);
    {
      const n8 = pe2(e4, o6[r5 + 2]);
      if (false === t(n8)) throw new n4(e4, "BooleanConditionRequired", o6[r5 + 2]);
      return Je3(e4, t5, r5 + 2, n8);
    }
  } catch (o6) {
    throw o6;
  }
}
function Qe2() {
  const e4 = /* @__PURE__ */ Object.create(null);
  j2(e4, fe2), E(e4, fe2), P2(e4, fe2, We2), g3(e4, fe2), _3(e4, fe2), a(e4, fe2), F(e4, fe2), b4(e4, fe2), e4.iif = Te2, e4.defaultvalue = Ke3, e4.decode = Ye2, e4.when = He2;
  const t5 = function() {
    this.textformatting = { value: p.textFormatting() };
  };
  t5.prototype = /* @__PURE__ */ Object.create(null), t5.prototype.infinity = Object.freeze({ value: Number.POSITIVE_INFINITY }), t5.prototype.pi = Object.freeze({ value: Math.PI });
  for (const [r5, n7] of Object.entries(e4)) t5.prototype[r5] = Object.freeze({ value: new e2(n7) });
  return t5;
}
var Xe2 = Qe2();
function et(e4) {
  const t5 = { mode: "sync", compiled: false, functions: /* @__PURE__ */ Object.create(null), signatures: [], standardFunction: fe2, evaluateIdentifier: We2 };
  for (let r5 = 0; r5 < e4.length; r5++) e4[r5].registerFunctions(t5);
  for (const [r5, n7] of Object.entries(t5.functions)) Xe2.prototype[r5] = Object.freeze({ value: new e2(n7) });
  for (let r5 = 0; r5 < t5.signatures.length; r5++) o3(t5.signatures[r5], "sync");
}
function tt2(e4) {
  console.log(e4);
}
function rt(r5, s10) {
  const i5 = new Set(Object.keys(s10?.vars || {}).map((t5) => r2(t5))), a3 = new Set(Object.keys(s10?.customfunctions || {}).map((t5) => r2(t5))), { globals: l5, exports: c3 } = s5(r5);
  return (e4) => {
    const o6 = e4.spatialReference ?? S.WebMercator;
    let s11 = null;
    r5.usesModules && (s11 = new s4(/* @__PURE__ */ new Map(), r5.loadedModules));
    const u4 = new Xe2();
    for (const t5 of a3) null != e4.customfunctions && t5 in e4.customfunctions ? u4[t5] = { value: new e2(e4.customfunctions[t5]) } : u4[t5] = te3;
    for (const t5 of i5) {
      if (null == e4.vars || !(t5 in e4.vars)) {
        t5 in u4 || (u4[t5] = te3);
        continue;
      }
      const r6 = e4.vars[t5] ?? null;
      t3(r6) ? u4[t5] = { value: I2.createFromGraphic(r6, e4.timeZone ?? null) } : u4[t5] = { value: r6 };
    }
    for (const t5 of l5) t5 in u4 || (u4[t5] = te3);
    const f4 = { lrucache: e4.lrucache, interceptor: e4.interceptor, services: e4.services, console: e4.console ?? tt2, abortSignal: t2, timeZone: e4.timeZone ?? null, spatialReference: o6, track: e4.track, depthCounter: { depth: 1 }, libraryResolver: s11, exports: c3, localScope: null, globalScope: u4 }, p6 = je3(f4, r5);
    if (p6 instanceof R || p6 instanceof v) {
      const e5 = p6.value;
      if (q(e5)) return null;
      if (L(e5)) throw new n4(f4, "IllegalResult", null);
      return e5;
    }
    if (q(p6)) return null;
    if (p6 === I) throw new n4(f4, "IllegalResult", null);
    if (p6 === _2) throw new n4(f4, "IllegalResult", null);
    throw new n4(f4, "NeverReach", null);
  };
}
function nt(e4, t5) {
  return rt(e4, t5)(t5);
}
et([p4]);

// node_modules/@arcgis/core/chunks/arcade.js
var h4 = /* @__PURE__ */ new Set(["feature", "angle", "bearing", "centroid", "envelopeintersects", "extent", "geometry", "ringisclockwise", "trackgeometrywindow"]);
var k3 = new Set(["TrackAccelerationAt", "TrackAccelerationWindow", "TrackCurrentAcceleration", "TrackCurrentDistance", "TrackCurrentSpeed", "TrackDistanceAt", "TrackDistanceWindow", "TrackSpeedAt", "TrackSpeedWindow"].map((e4) => r2(e4)));
var T3 = new Set([...k3, "TrackCurrentTime", "TrackDuration", "TrackFieldWindow", "TrackGeometryWindow", "TrackIndex", "TrackStartTime", "TrackWindow"].map((e4) => r2(e4)));
var j3 = false;
var g5 = false;
var x3 = null;
var v3 = [];
var F3 = false;
function M5(r5, t5) {
  if (true === t5.useAsync || true === r5.isAsync) return G2(r5, t5);
  if (has("esri-csp-restrictions")) return rt(r5, t5);
  try {
    return an(r5, t5);
  } catch (n7) {
    if ("esri.arcade.arcadeuncompilableerror" === n7.declaredRootClass) return rt(r5, t5);
    throw n7;
  }
}
function G2(r5, t5) {
  if (null === x3) throw new n4(null, "AsyncNotEnabled", null);
  if (has("esri-csp-restrictions")) return x3.prepareScript(r5, t5);
  try {
    return an(r5, t5, true);
  } catch (n7) {
    if ("esri.arcade.arcadeuncompilableerror" === n7.declaredRootClass) return x3.prepareScript(r5, t5);
    throw n7;
  }
}
function C3(e4) {
  et(e4), en(e4, "sync"), null === x3 ? v3.push(e4) : (en(e4, "async"), x3.extend(e4));
}
function E3(e4, r5 = []) {
  return d3(e4, r5);
}
function I5(e4, r5, t5 = []) {
  return D3(d3(e4, t5), r5);
}
function D3(e4, r5) {
  if (true === r5.useAsync || true === e4.isAsync) {
    if (null === x3) throw new n4(null, "AsyncNotEnabled", null);
    return x3.executeScript(e4, r5);
  }
  return nt(e4, r5);
}
function U3(e4, r5) {
  return l3(e4, r5);
}
function W(e4, r5) {
  return p3(e4, r5);
}
function _4(e4, r5 = false) {
  return void 0 === r5 && (r5 = false), f2(e4).map(({ varId: e5, memberId: r6 }) => `${e5}.${r6}`);
}
function R4(e4) {
  return d(e4);
}
function O3(e4, r5 = []) {
  return void 0 === e4.usesGeometry && g(e4, r5), true === e4.usesGeometry;
}
var P5 = null;
function z5() {
  return P5 || (P5 = L3(), P5);
}
async function L3() {
  return await H2(), g5 = true, true;
}
var $ = null;
function N2() {
  return null !== $ || ($ = q2()), $;
}
async function q2() {
  await sn(), x3 = await import("./arcadeAsyncRuntime-6F6CVYFI.js");
  for (const e4 of v3) x3.extend(e4), en(e4, "async");
  return v3 = null, true;
}
function B() {
  return j3;
}
function V2() {
  return !!x3;
}
function H4() {
  return g5;
}
var J;
var K3 = null;
function Q2() {
  return K3 || (K3 = X(), K3);
}
async function X() {
  await N2();
  const [e4, r5, n7, s10, a3, o6] = await Promise.all([import("./featureSetUtils-C7WY4QAJ.js"), import("./featuresetbase-KVVC6IOI.js"), import("./featuresetgeom-6LZ7X5VG.js"), import("./featuresetstats-O2CAUVLN.js"), import("./featuresetstring-YJKPQQB7.js"), import("./knowledgegraph-IYMNPVZD.js")]);
  return ie4 = e4, x3.extend([r5, n7, s10, a3, o6]), en([r5, n7, s10, a3, o6], "async"), j3 = true, true;
}
function Y() {
  return J ??= s7().then(() => {
    F3 = true;
  });
}
function Z(e4, r5 = []) {
  return void 0 === e4.usesFeatureSet && g(e4, r5), true === e4.usesFeatureSet;
}
function ee2(e4, r5 = []) {
  return void 0 === e4.isAsync && g(e4, r5), true === e4.isAsync;
}
function re4(e4, r5) {
  if (r5) {
    for (const t5 of r5) if (U3(e4, t5)) return true;
    return false;
  }
  return false;
}
async function te4(e4, r5, t5 = [], n7 = false, s10 = null) {
  return ne4(/* @__PURE__ */ new Set(), e4, r5, t5, n7, s10);
}
async function ne4(e4, r5, t5, n7 = [], s10 = false, a3 = null) {
  const o6 = "string" == typeof r5 ? E3(r5) : r5, c3 = [];
  return o6 && (false === H4() && (O3(o6) || s10) && c3.push(z5()), false === V2() && (true === o6.isAsync || t5) && c3.push(N2()), false === B() && (Z(o6) || re4(o6, n7)) && c3.push(Q2()), F3 || le3(o6) && c3.push(Y())), c3.length && await Promise.all(c3), await ae3(e4, o6, a3, t5, s10), true;
}
function se3(e4, r5 = []) {
  return void 0 === e4.usesModules && g(e4, r5), true === e4.usesModules;
}
async function ae3(e4, r5, t5 = null, n7 = false, a3 = false) {
  const o6 = u2(r5);
  null === t5 && o6.length > 0 && (t5 = i4.getDefault()), r5.loadedModules = {};
  for (const s10 of o6) {
    n2(t5);
    const o7 = t5.normalizeModuleUri(s10.source);
    if (e4.has(o7.uri)) throw new n4(null, "CircularModules", null);
    e4.add(o7.uri);
    const c3 = await t5.fetchModule(o7);
    await ne4(e4, c3, n7, [], a3, t5), e4.delete(o7.uri), c3.isAsync && (r5.isAsync = true), c3.usesFeatureSet && (r5.usesFeatureSet = true), c3.usesGeometry && (r5.usesGeometry = true), r5.loadedModules[s10.libname] = { uri: o7.uri, script: c3 };
  }
}
function oe4(e4) {
  if (O3(e4)) return true;
  const r5 = b2(e4);
  let t5 = false;
  for (let n7 = 0; n7 < r5.length; n7++) if (h4.has(r5[n7])) {
    t5 = true;
    break;
  }
  return t5;
}
function ce3(e4, r5) {
  const t5 = null == r5 ? null : new Set(r5.map((e5) => e5.toLowerCase()));
  return f2(e4).some(({ varId: e5, memberId: r6 }) => "$view" === e5 && (null == t5 || t5.has(r6)));
}
var ie4 = null;
function ue3() {
  return ie4;
}
function le3(e4) {
  return b2(e4).some((e5) => k3.has(e5));
}
function pe3(e4) {
  return b2(e4).some((e5) => T3.has(e5));
}
var de4 = Object.freeze(Object.defineProperty({ __proto__: null, _loadScriptDependenciesImpl: ne4, compileScript: M5, enableAsyncSupport: N2, enableAsyncSupportImpl: q2, enableFeatureSetSupport: Q2, enableFeatureSetSupportImpl: X, enableGeometrySupport: z5, enableGeometrySupportImpl: L3, executeScript: D3, extend: C3, extractExpectedFieldLiterals: R4, extractFieldLiterals: _4, featureSetUtils: ue3, isAsyncEnabled: V2, isFeatureSetSupportEnabled: B, isGeometryEnabled: H4, loadDependentModules: ae3, loadScriptDependencies: te4, loadTrackGeometryOperators: Y, parseAndExecuteScript: I5, parseScript: E3, referencesFunction: W, referencesMember: U3, scriptIsAsync: ee2, scriptTouchesGeometry: oe4, scriptUsesFeatureSet: Z, scriptUsesGeometryEngine: O3, scriptUsesModules: se3, scriptUsesTrack: pe3, scriptUsesViewProperties: ce3 }, Symbol.toStringTag, { value: "Module" }));

export {
  M5 as M,
  C3 as C,
  E3 as E,
  I5 as I,
  D3 as D,
  U3 as U,
  W,
  _4 as _,
  R4 as R,
  O3 as O,
  z5 as z,
  L3 as L,
  N2 as N,
  q2 as q,
  B,
  V2 as V,
  H4 as H,
  Q2 as Q,
  X,
  Y,
  Z,
  ee2 as ee,
  te4 as te,
  ne4 as ne,
  se3 as se,
  ae3 as ae,
  oe4 as oe,
  ce3 as ce,
  ue3 as ue,
  pe3 as pe,
  de4 as de
};
//# sourceMappingURL=chunk-S4XF2EDO.js.map
