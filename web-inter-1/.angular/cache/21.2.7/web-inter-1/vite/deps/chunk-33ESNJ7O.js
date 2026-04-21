import {
  t2 as t
} from "./chunk-FZAQ64NS.js";
import {
  o2 as o
} from "./chunk-NWF7IRZL.js";
import {
  at,
  dt
} from "./chunk-3EE7FDFG.js";
import {
  n
} from "./chunk-GM5PCDS3.js";
import {
  u
} from "./chunk-UXWT3ISO.js";

// node_modules/@arcgis/core/symbols/cim/SDFHelper.js
var a = 0.45;
function s(t2) {
  switch (t2.type) {
    case "CIMPointSymbol": {
      const o2 = t2.symbolLayers;
      if (!o2 || 1 !== o2.length) return null;
      const n2 = o2[0];
      return "CIMVectorMarker" !== n2.type ? null : s(n2);
    }
    case "CIMVectorMarker": {
      const o2 = t2.markerGraphics;
      if (!o2 || 1 !== o2.length) return null;
      const n2 = o2[0];
      if (!n2) return null;
      const r = n2.geometry, e = c(r);
      if (!e) return null;
      const i = n2.symbol;
      if (!i || "CIMPolygonSymbol" !== i.type && "CIMLineSymbol" !== i.type || i.symbolLayers?.some((t3) => !!t3.effects)) return null;
      let a2 = 0;
      for (const t3 of i.symbolLayers ?? []) a2 = Math.max("CIMSolidStroke" === t3.type ? t3.width : 0, a2);
      const { sdfTextureSize: s2 } = d(e, t2.frame, t2.size, t2.anchorPoint, "Relative" !== t2.anchorPointUnits, a2, t2.scaleSymbolsProportionally);
      return { type: "sdf", geometry: r, sdfTextureSize: s2, sdfPaddingRatio: 0.5, asFill: "CIMPolygonSymbol" === i.type };
    }
  }
}
function l(t2) {
  return t2 ? t2.rings ? t2.rings : t2.paths ? t2.paths : void 0 !== t2.xmin && void 0 !== t2.ymin && void 0 !== t2.xmax && void 0 !== t2.ymax ? [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] : null : null;
}
function f(t2) {
  let o2 = 1 / 0, n2 = -1 / 0, e = 1 / 0, i = -1 / 0;
  for (const r of t2) for (const t3 of r) t3[0] < o2 && (o2 = t3[0]), t3[0] > n2 && (n2 = t3[0]), t3[1] < e && (e = t3[1]), t3[1] > i && (i = t3[1]);
  return new t(o2, e, n2 - o2, i - e);
}
function m(t2) {
  let o2 = 1 / 0, n2 = -1 / 0, r = 1 / 0, e = -1 / 0;
  for (const i of t2) for (const t3 of i) t3[0] < o2 && (o2 = t3[0]), t3[0] > n2 && (n2 = t3[0]), t3[1] < r && (r = t3[1]), t3[1] > e && (e = t3[1]);
  return [o2, r, n2, e];
}
function c(t2) {
  return t2 ? t2.rings ? m(t2.rings) : t2.paths ? m(t2.paths) : n(t2) ? [t2.xmin, t2.ymin, t2.xmax, t2.ymax] : null : null;
}
function h(t2, o2, n2) {
  const [r, e, a2, s2] = c(t2), l2 = a2 - r, f2 = s2 - e, m2 = o2, h2 = at, u3 = Math.floor(0.5 * (m2 * n2 - h2)), y2 = (m2 - 2 * (u3 + h2)) / Math.max(l2, f2), d2 = Math.round(l2 * y2), x2 = Math.round(f2 * y2);
  return { pixelDimensions: [l2, f2], texelDimensions: [Math.round((d2 + 2 * u3) / y2), Math.round((x2 + 2 * u3) / y2)] };
}
var u2 = 1.61803;
var y = 512;
function d(t2, n2, r, s2, l2, f2, m2) {
  const [c2, h2, d2, x2] = t2;
  if (d2 < c2 || x2 < h2) return { frameSizeRatio: 0, anchorX: 0, anchorY: 0, widthRatio: 1, sdfPaddingRatio: 0.5, sdfTextureSize: dt };
  const M2 = d2 - c2, g2 = x2 - h2, p2 = Math.max(M2, g2);
  let S, R = 0.5;
  {
    if (!m2 && null != n2 && r > 0) {
      f2 *= (n2.ymax - n2.ymin) / r;
    }
    const t3 = f2 / (f2 + p2), o2 = 0.1;
    t3 > a && t3 < 1 && (R = Math.min(t3 + o2, 0.99));
  }
  {
    const t3 = n2 ? n2.ymax - n2.ymin : 0, a2 = t3 > 0 ? t3 : g2, s3 = a2 > 0 ? (p2 + f2) / a2 : 1, l3 = u(r) * s3;
    let m3 = Math.floor(l3 * u2 + 2 * at);
    m3 = Math.min(m3, y), m3 = Math.max(m3, dt), S = 1 << 32 - Math.clz32(m3 - 1);
  }
  const w = S, P = at, b = Math.floor(0.5 * (w * R - P)), z = (w - 2 * (b + P)) / p2, C = Math.round(M2 * z) + 2 * b, I = Math.round(g2 * z) + 2 * b;
  let j = 1;
  if (n2) {
    j = I * (1 - R) / ((n2.ymax - n2.ymin) * z);
  }
  let v = 0, T = 0, k = 1;
  s2 && (l2 ? n2 && r && n2.ymax - n2.ymin > 0 && (k = (n2.xmax - n2.xmin) / (n2.ymax - n2.ymin), v = s2.x / (r * k), T = s2.y / r) : (v = s2.x, T = s2.y)), n2 && (v = 0.5 * (n2.xmax + n2.xmin) + v * (n2.xmax - n2.xmin), T = 0.5 * (n2.ymax + n2.ymin) + T * (n2.ymax - n2.ymin)), v -= c2, T -= h2, v *= z, T *= z, v += b, T += b;
  let F = v / C - 0.5, L = T / I - 0.5;
  return l2 && r && (F *= r * k, L *= r), { frameSizeRatio: j, anchorX: F, anchorY: L, widthRatio: k, sdfTextureSize: S, sdfPaddingRatio: R };
}
function x(t2) {
  const o2 = l(t2.geometry), n2 = f(o2), r = t2.sdfTextureSize, e = at, a2 = Math.floor(0.5 * (r * t2.sdfPaddingRatio - e)), s2 = r - 2 * (a2 + e), m2 = s2 / Math.max(n2.width, n2.height), c2 = Math.round(n2.width * m2) + 2 * a2, h2 = Math.round(n2.height * m2) + 2 * a2, u3 = [];
  for (const i of o2) if (i && i.length > 1) {
    const o3 = [];
    for (const r2 of i) {
      let [e2, i2] = r2;
      e2 -= n2.x, i2 -= n2.y, e2 *= m2, i2 *= m2, e2 += a2 - 0.5, i2 += a2 - 0.5, t2.asFill ? o3.push([e2, i2]) : o3.push([Math.round(e2), Math.round(i2)]);
    }
    if (t2.asFill) {
      const t3 = o3.length - 1;
      o3[0][0] === o3[t3][0] && o3[0][1] === o3[t3][1] || o3.push(o3[0]);
    }
    u3.push(o3);
  }
  const y2 = M(u3, c2, h2, a2);
  return t2.asFill && g(u3, c2, h2, a2, y2), { data: p(y2, a2), width: c2, height: h2, sdfPaddingRatio: t2.sdfPaddingRatio, sdfDecodeCoeff: 2 * a2 / s2 };
}
function M(t2, o2, n2, r) {
  const e = o2 * n2, i = new Array(e), a2 = r * r + 1;
  for (let s2 = 0; s2 < e; ++s2) i[s2] = a2;
  for (const s2 of t2) {
    const t3 = s2.length;
    for (let e2 = 1; e2 < t3; ++e2) {
      const t4 = s2[e2 - 1], a3 = s2[e2];
      let l2, f2, m2, c2;
      t4[0] < a3[0] ? (l2 = t4[0], f2 = a3[0]) : (l2 = a3[0], f2 = t4[0]), t4[1] < a3[1] ? (m2 = t4[1], c2 = a3[1]) : (m2 = a3[1], c2 = t4[1]);
      let h2 = Math.floor(l2) - r, u3 = Math.floor(f2) + r, y2 = Math.floor(m2) - r, d2 = Math.floor(c2) + r;
      h2 < 0 && (h2 = 0), u3 > o2 && (u3 = o2), y2 < 0 && (y2 = 0), d2 > n2 && (d2 = n2);
      const x2 = a3[0] - t4[0], M2 = a3[1] - t4[1], g2 = x2 * x2 + M2 * M2;
      for (let r2 = h2; r2 < u3; r2++) for (let e3 = y2; e3 < d2; e3++) {
        const s3 = r2 + 0.5, l3 = e3 + 0.5;
        let f3, m3, c3 = (s3 - t4[0]) * x2 + (l3 - t4[1]) * M2;
        c3 < 0 ? (f3 = t4[0], m3 = t4[1]) : c3 > g2 ? (f3 = a3[0], m3 = a3[1]) : (c3 /= g2, f3 = t4[0] + c3 * x2, m3 = t4[1] + c3 * M2);
        const h3 = (s3 - f3) * (s3 - f3) + (l3 - m3) * (l3 - m3), u4 = (n2 - e3 - 1) * o2 + r2;
        h3 < i[u4] && (i[u4] = h3);
      }
    }
  }
  for (let s2 = 0; s2 < e; ++s2) i[s2] = Math.sqrt(i[s2]);
  return i;
}
function g(t2, o2, n2, r, e) {
  for (const i of t2) {
    const t3 = i.length;
    for (let a2 = 1; a2 < t3; ++a2) {
      const t4 = i[a2 - 1], s2 = i[a2];
      let l2, f2, m2, c2;
      t4[0] < s2[0] ? (l2 = t4[0], f2 = s2[0]) : (l2 = s2[0], f2 = t4[0]), t4[1] < s2[1] ? (m2 = t4[1], c2 = s2[1]) : (m2 = s2[1], c2 = t4[1]);
      let h2 = Math.floor(l2), u3 = Math.floor(f2) + 1, y2 = Math.floor(m2), d2 = Math.floor(c2) + 1;
      h2 < r && (h2 = r), u3 > o2 - r && (u3 = o2 - r), y2 < r && (y2 = r), d2 > n2 - r && (d2 = n2 - r);
      for (let i2 = y2; i2 < d2; ++i2) {
        if (t4[1] > i2 == s2[1] > i2) continue;
        const a3 = i2 + 0.5, l3 = (n2 - i2 - 1) * o2;
        for (let o3 = h2; o3 < u3; ++o3) {
          o3 + 0.5 < (s2[0] - t4[0]) * (a3 - t4[1]) / (s2[1] - t4[1]) + t4[0] && (e[l3 + o3] = -e[l3 + o3]);
        }
        for (let t5 = r; t5 < h2; ++t5) e[l3 + t5] = -e[l3 + t5];
      }
    }
  }
}
function p(o2, n2) {
  const r = 2 * n2, e = o2.length, i = new Uint8Array(4 * e);
  for (let a2 = 0; a2 < e; ++a2) {
    const n3 = 0.5 - o2[a2] / r;
    o(n3, i, 4 * a2);
  }
  return i;
}

export {
  s,
  c,
  h,
  d,
  x
};
//# sourceMappingURL=chunk-33ESNJ7O.js.map
