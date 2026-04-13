import {
  o as o2,
  r as r3
} from "./chunk-OXKG6ITC.js";
import {
  i,
  o,
  r as r2,
  s as s2
} from "./chunk-EM42ND2E.js";
import {
  f as f2
} from "./chunk-TTRHBDVK.js";
import {
  n as n2
} from "./chunk-MXBCSABZ.js";
import {
  u as u2
} from "./chunk-XJP3RSS7.js";
import {
  j as j2
} from "./chunk-R3PBZCGD.js";
import {
  y3 as y
} from "./chunk-Z5I3WFZJ.js";
import {
  u
} from "./chunk-GM5PCDS3.js";
import {
  S as S2,
  j
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  G,
  d
} from "./chunk-LANOLZOB.js";
import {
  I,
  f2 as f
} from "./chunk-LAAWMBRE.js";
import {
  n2 as n,
  r3 as r,
  s2 as s
} from "./chunk-6I475YAP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/geometryService/cut.js
async function i2(i3, p2, n3, m) {
  const a = f2(i3), u3 = p2[0].spatialReference, f3 = __spreadProps(__spreadValues({}, m), { responseType: "json", query: __spreadProps(__spreadValues({}, a.query), { f: "json", sr: d(u3), target: JSON.stringify({ geometryType: u(p2[0]), geometries: p2 }), cutter: JSON.stringify(n3) }) }), y3 = await f(a.path + "/cut", f3), { cutIndexes: c, geometries: g = [] } = y3.data;
  return { cutIndexes: c, geometries: g.map((e) => {
    const t = u2(e);
    return t.spatialReference = u3, t;
  }) };
}

// node_modules/@arcgis/core/rest/geometryService/simplify.js
async function p(p2, m, f3) {
  const n3 = "string" == typeof p2 ? I(p2) : p2, a = m[0].spatialReference, u3 = u(m[0]), y3 = __spreadProps(__spreadValues({}, f3), { query: __spreadProps(__spreadValues({}, n3.query), { f: "json", sr: d(a), geometries: JSON.stringify(o2(m)) }) }), { data: l } = await f(n3.path + "/simplify", y3);
  return r3(l.geometries, u3, a);
}

// node_modules/@arcgis/core/geometry/support/normalizeUtils.js
var y2 = () => n.getLogger("esri.geometry.support.normalizeUtils");
function x(t) {
  return "polygon" === t.type;
}
function d2(t) {
  return "polygon" === t[0].type;
}
function M(t) {
  return "polyline" === t[0].type;
}
function w(t) {
  const e = [];
  let n3 = 0, o3 = 0;
  for (let s3 = 0; s3 < t.length; s3++) {
    const r4 = t[s3];
    let i3 = null;
    for (let t2 = 0; t2 < r4.length; t2++) i3 = r4[t2], e.push(i3), 0 === t2 ? (n3 = i3[0], o3 = n3) : (n3 = Math.min(n3, i3[0]), o3 = Math.max(o3, i3[0]));
    i3 && e.push([(n3 + o3) / 2, 0]);
  }
  return e;
}
function b(t, e) {
  if (!(t instanceof y || t instanceof j2)) {
    const t2 = "straightLineDensify: the input geometry is neither polyline nor polygon";
    throw y2().error(t2), new r("internal:geometry", t2);
  }
  const o3 = o(t), i3 = [];
  for (const n3 of o3) {
    const t2 = [];
    i3.push(t2), t2.push([n3[0][0], n3[0][1]]);
    for (let o4 = 0; o4 < n3.length - 1; o4++) {
      const s3 = n3[o4][0], r4 = n3[o4][1], i4 = n3[o4 + 1][0], l = n3[o4 + 1][1], c = Math.sqrt((i4 - s3) * (i4 - s3) + (l - r4) * (l - r4)), f3 = (l - r4) / c, u3 = (i4 - s3) / c, a = c / e;
      if (a > 1) {
        for (let l2 = 1; l2 <= a - 1; l2++) {
          const n5 = l2 * e, o6 = u3 * n5 + s3, i6 = f3 * n5 + r4;
          t2.push([o6, i6]);
        }
        const n4 = (c + Math.floor(a - 1) * e) / 2, o5 = u3 * n4 + s3, i5 = f3 * n4 + r4;
        t2.push([o5, i5]);
      }
      t2.push([i4, l]);
    }
  }
  return x(t) ? new j2({ rings: i3, spatialReference: t.spatialReference }) : new y({ paths: i3, spatialReference: t.spatialReference });
}
function j3(t, e, n3) {
  if (e) {
    const e2 = b(t, 1e6);
    t = S2(e2, true);
  }
  return n3 && (t = s2(t, n3)), t;
}
function R(t, e, n3) {
  if (Array.isArray(t)) {
    const o3 = t[0];
    if (o3 > e) {
      const n4 = i(o3, e);
      t[0] = o3 + n4 * (-2 * e);
    } else if (o3 < n3) {
      const e2 = i(o3, n3);
      t[0] = o3 + e2 * (-2 * n3);
    }
  } else {
    const o3 = t.x;
    if (o3 > e) {
      const n4 = i(o3, e);
      t = t.clone().offset(n4 * (-2 * e), 0);
    } else if (o3 < n3) {
      const e2 = i(o3, n3);
      t = t.clone().offset(e2 * (-2 * n3), 0);
    }
  }
  return t;
}
function v(t, e) {
  let n3 = -1;
  for (let o3 = 0; o3 < e.cutIndexes.length; o3++) {
    const s3 = e.cutIndexes[o3], r4 = e.geometries[o3], i3 = o(r4);
    for (let t2 = 0; t2 < i3.length; t2++) {
      const e2 = i3[t2];
      e2.some((n4) => {
        if (n4[0] < 180) return true;
        {
          let n5 = 0;
          for (let t3 = 0; t3 < e2.length; t3++) {
            const o5 = e2[t3][0];
            n5 = o5 > n5 ? o5 : n5;
          }
          n5 = Number(n5.toFixed(9));
          const o4 = -360 * i(n5, 180);
          for (let s4 = 0; s4 < e2.length; s4++) {
            const e3 = r4.getPoint(t2, s4);
            r4.setPoint(t2, s4, e3.clone().offset(o4, 0));
          }
          return true;
        }
      });
    }
    if (s3 === n3) {
      if (d2(t)) for (const e2 of o(r4)) t[s3] = t[s3].addRing(e2);
      else if (M(t)) for (const e2 of o(r4)) t[s3] = t[s3].addPath(e2);
    } else n3 = s3, t[s3] = r4;
  }
  return t;
}
async function P(e, n3, o3) {
  if (!Array.isArray(e)) return P([e], n3);
  n3 && "string" != typeof n3 && y2().warn("normalizeCentralMeridian()", "The url object is deprecated, use the url string instead");
  const i3 = "string" == typeof n3 ? n3 : n3?.url ?? s.geometryServiceUrl;
  let u3, h, x2, d3, M2, w2, b2, z2, L2 = 0;
  const S4 = [], U2 = [];
  for (const t of e) if (null != t) if (u3 || (u3 = t.spatialReference, h = G(u3), x2 = u3.isWebMercator, w2 = x2 ? 102100 : 4326, d3 = r2[w2].maxX, M2 = r2[w2].minX, b2 = r2[w2].plus180Line, z2 = r2[w2].minus180Line), h) if ("mesh" === t.type) U2.push(t);
  else if ("point" === t.type) U2.push(R(t.clone(), d3, M2));
  else if ("multipoint" === t.type) {
    const e2 = t.clone();
    e2.points = e2.points.map((t2) => R(t2, d3, M2)), U2.push(e2);
  } else if ("extent" === t.type) {
    const e2 = t.clone()._normalize(false, false, h);
    U2.push(e2.rings ? new j2(e2) : e2);
  } else if (t.extent) {
    const e2 = t.extent, n4 = i(e2.xmin, M2) * (2 * d3);
    let o4 = 0 === n4 ? t.clone() : s2(t.clone(), n4);
    e2.offset(n4, 0);
    let { xmin: s3, xmax: r4 } = e2;
    s3 = Number(s3.toFixed(9)), r4 = Number(r4.toFixed(9)), e2.intersects(b2) && r4 !== d3 ? (L2 = r4 > L2 ? r4 : L2, o4 = j3(o4, x2), S4.push(o4), U2.push("cut")) : e2.intersects(z2) && s3 !== M2 ? (L2 = r4 * (2 * d3) > L2 ? r4 * (2 * d3) : L2, o4 = j3(o4, x2, 360), S4.push(o4), U2.push("cut")) : U2.push(o4);
  } else U2.push(t.clone());
  else U2.push(t);
  else U2.push(t);
  let A2 = i(L2, d3), C2 = -90;
  const F = A2, N = new y();
  for (; A2 > 0; ) {
    const t = 360 * A2 - 180;
    N.addPath([[t, C2], [t, -1 * C2]]), C2 *= -1, A2--;
  }
  if (S4.length > 0 && F > 0) {
    const t = v(S4, await i2(i3, S4, N, o3)), n4 = [], s3 = [];
    for (let o4 = 0; o4 < U2.length; o4++) {
      const r5 = U2[o4];
      if ("cut" !== r5) s3.push(r5);
      else {
        const r6 = t.shift(), i4 = e[o4];
        null != i4 && "polygon" === i4.type && i4.rings && i4.rings.length > 1 && r6.rings.length >= i4.rings.length ? (n4.push(r6), s3.push("simplify")) : s3.push(x2 ? j(r6) : r6);
      }
    }
    if (!n4.length) return s3;
    const r4 = await p(i3, n4, o3), l = [];
    for (let e2 = 0; e2 < s3.length; e2++) {
      const t2 = s3[e2];
      "simplify" !== t2 ? l.push(t2) : l.push(x2 ? j(r4.shift()) : r4.shift());
    }
    return l;
  }
  const W = [];
  for (let t = 0; t < U2.length; t++) {
    const e2 = U2[t];
    if ("cut" !== e2) W.push(e2);
    else {
      const t2 = S4.shift();
      W.push(true === x2 ? j(t2) : t2);
    }
  }
  return W;
}
function z(t) {
  if (!t) return null;
  const e = t.extent;
  if (!e) return null;
  const n3 = t.spatialReference && G(t.spatialReference);
  if (!n3) return e;
  const [o3, s3] = n3.valid, r4 = 2 * s3, { width: i3 } = e;
  let l, { xmin: c, xmax: f3 } = e;
  if ([c, f3] = [f3, c], "extent" === t.type || 0 === i3 || i3 <= s3 || i3 > r4 || c < o3 || f3 > s3) return e;
  switch (t.type) {
    case "polygon":
      if (!(t.rings.length > 1)) return e;
      l = w(t.rings);
      break;
    case "polyline":
      if (!(t.paths.length > 1)) return e;
      l = w(t.paths);
      break;
    case "multipoint":
      l = t.points;
  }
  const u3 = e.clone();
  for (let a = 0; a < l.length; a++) {
    let t2 = l[a][0];
    t2 < 0 ? (t2 += s3, f3 = Math.max(t2, f3)) : (t2 -= s3, c = Math.min(t2, c));
  }
  return u3.xmin = c, u3.xmax = f3, u3.width < i3 ? (u3.xmin -= s3, u3.xmax -= s3, u3) : e;
}
function L(t, e, n3) {
  const o3 = G(n3);
  if (null == o3) return t;
  const [s3, r4] = o3.valid, i3 = 2 * r4;
  let l = 0, c = 0;
  e > r4 ? l = Math.ceil(Math.abs(e - r4) / i3) : e < s3 && (l = -Math.ceil(Math.abs(e - s3) / i3)), t > r4 ? c = Math.ceil(Math.abs(t - r4) / i3) : t < s3 && (c = -Math.ceil(Math.abs(t - s3) / i3));
  let f3 = t + (l - c) * i3;
  const u3 = f3 - e;
  return u3 > r4 ? f3 -= i3 : u3 < s3 && (f3 += i3), f3;
}
function S3(t, e) {
  const n3 = U(e);
  return n3?.normalize(t) ?? t;
}
function U(t) {
  const n3 = G(t);
  if (null == n3) return null;
  const [o3, s3] = n3.valid;
  return new n2(o3, s3);
}
var A = U(S.WGS84);
var C = U(S.WebMercator);

export {
  b,
  P,
  z,
  L,
  S3 as S,
  A
};
//# sourceMappingURL=chunk-PW6Z3BNO.js.map
