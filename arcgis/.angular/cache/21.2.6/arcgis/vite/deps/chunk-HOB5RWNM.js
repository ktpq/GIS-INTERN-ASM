import {
  e as e3
} from "./chunk-O4MTJEQQ.js";
import {
  v,
  w,
  y
} from "./chunk-6NPKRFWB.js";
import {
  e as e2
} from "./chunk-ALTGJATZ.js";
import {
  t
} from "./chunk-LOSFMTMN.js";
import {
  u
} from "./chunk-YM62CGUL.js";
import {
  e,
  i,
  o
} from "./chunk-DH7E4OJC.js";
import {
  g
} from "./chunk-ZEMVKL33.js";
import {
  s
} from "./chunk-ZILR7JK7.js";
import {
  re,
  te
} from "./chunk-66OU277M.js";

// node_modules/@arcgis/core/geometry/support/polygonUtils.js
function n(t2, o2, s2) {
  const i2 = c(e4, t2, o2, s2) ? y(e4) : [0, 0, 1];
  return Math.abs(i2[2]) > Math.cos(s(80)) ? 2 : Math.abs(i2[1]) > Math.abs(i2[0]) ? 1 : 0;
}
function c(r, a2, m, n2) {
  const c3 = ((r2) => !Array.isArray(r2[0]))(a2) ? (r2, t2) => a2[3 * r2 + t2] : (r2, t2) => a2[r2][t2], e5 = n2 ? re(n2) / te(n2) : 1;
  return w(r, (r2, t2) => u(r2, c3(t2, 0) * e5, c3(t2, 1) * e5, c3(t2, 2)), m);
}
var e4 = v();

// node_modules/@arcgis/core/geometry/support/triangulationUtils.js
function c2(t2) {
  const r = f(t2.rings, t2.hasZ, 1, t2.spatialReference), i2 = new Array();
  let c3 = 0, a2 = 0;
  for (const o2 of r.polygons) {
    const t3 = o2.count, l = o2.index, h2 = i(r.position, 3 * l, 3 * t3), f2 = o2.holeIndices.map((n2) => n2 - l), g4 = t(e3(h2, f2, 3));
    i2.push({ position: h2, faces: g4 }), c3 += h2.length, a2 += g4.length;
  }
  const g3 = h(i2, c3, a2), u2 = Array.isArray(g3.position) ? e2(g3.position, 3, { originalIndices: g3.faces }) : e2(g3.position.buffer, 6, { originalIndices: g3.faces });
  return g3.position = o(new Float64Array(u2.buffer)), g3.faces = u2.indices, g3;
}
function h(n2, t2, e5) {
  if (1 === n2.length) return n2[0];
  const o2 = e(t2), i2 = new Array(e5);
  let l = 0, c3 = 0, h2 = 0;
  for (const r of n2) {
    for (let n3 = 0; n3 < r.position.length; n3++) o2[l++] = r.position[n3];
    for (const n3 of r.faces) i2[c3++] = n3 + h2;
    h2 = l / 3;
  }
  return { position: o2, faces: t(i2) };
}
function f(n2, t2, e5, o2) {
  const s2 = n2.length, i2 = new Array(s2), l = new Array(s2), c3 = new Array(s2), h2 = n2.reduce((n3, t3) => n3 + t3.length, 0);
  let f2 = 0, u2 = 0, p = 0;
  const d = e(3 * h2);
  let m = 0;
  for (let r = s2 - 1; r >= 0; r--) {
    const h3 = n2[r], y2 = 1 === e5 && g2(h3, t2, o2);
    if (y2 && 1 !== s2) i2[f2++] = h3;
    else {
      let n3 = h3.length;
      for (let t3 = 0; t3 < f2; ++t3) n3 += i2[t3].length;
      const e6 = { index: m, pathLengths: new Array(f2 + 1), count: n3, holeIndices: new Array(f2) };
      e6.pathLengths[0] = h3.length, h3.length > 0 && (c3[p++] = { index: m, count: h3.length }), m = y2 ? a(h3, h3.length - 1, -1, d, m, h3.length, t2) : a(h3, 0, 1, d, m, h3.length, t2);
      for (let o3 = 0; o3 < f2; ++o3) {
        const n4 = i2[o3];
        e6.holeIndices[o3] = m, e6.pathLengths[o3 + 1] = n4.length, n4.length > 0 && (c3[p++] = { index: m, count: n4.length }), m = a(n4, 0, 1, d, m, n4.length, t2);
      }
      f2 = 0, e6.count > 0 && (l[u2++] = e6);
    }
  }
  for (let r = 0; r < f2; ++r) {
    const n3 = i2[r];
    n3.length > 0 && (c3[p++] = { index: m, count: n3.length }), m = a(n3, 0, 1, d, m, n3.length, t2);
  }
  return l.length = u2, c3.length = p, { position: d, polygons: l, outlines: c3 };
}
function a(n2, t2, e5, o2, r, s2, i2) {
  r *= 3;
  for (let l = 0; l < s2; ++l) {
    const s3 = n2[t2];
    o2[r++] = s3[0], o2[r++] = s3[1], o2[r++] = i2 && s3[2] ? s3[2] : 0, t2 += e5;
  }
  return r / 3;
}
function g2(n2, e5, o2) {
  if (!e5) return !g(n2);
  const r = n2.length - 1;
  switch (n(n2, r, o2)) {
    case 0:
      return !g(n2, 1, 2);
    case 1:
      return !g(n2, 0, 2);
    case 2:
      return !g(n2, 0, 1);
  }
}

export {
  n,
  c2 as c,
  f
};
//# sourceMappingURL=chunk-HOB5RWNM.js.map
