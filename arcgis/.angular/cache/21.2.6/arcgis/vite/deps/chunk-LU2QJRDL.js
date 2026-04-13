import {
  c
} from "./chunk-Q75NH6CE.js";
import {
  u
} from "./chunk-ARRYQO7C.js";
import {
  q
} from "./chunk-ZILR7JK7.js";
import {
  o
} from "./chunk-O4A47ZEM.js";

// node_modules/@arcgis/core/layers/raster/functions/pixelUtils.js
var l = 9;
var i = "PixelID";
function o2(t) {
  return null != t && t.pixels?.length > 0;
}
function s(t) {
  if (!t?.length || t.some((t2) => !o2(t2))) return null;
  if (1 === t.length) return t[0]?.clone() ?? null;
  const e = t, { width: l3, height: i3, pixelType: r2 } = e[0];
  if (e.some((t2) => t2.width !== l3 || t2.height !== i3)) return null;
  const s3 = e.map(({ mask: t2 }) => t2).filter((t2) => null != t2);
  let a3 = null;
  s3.length && (a3 = new Uint8Array(l3 * i3), a3.set(s3[0]), s3.length > 1 && k(s3.slice(1), a3));
  const f3 = [];
  e.forEach(({ pixels: t2 }) => f3.push(...t2));
  const h3 = null != a3 && f3.length === e.length ? e.map(({ width: t2, height: e2, mask: n }) => n ?? new Uint8Array(t2 * e2).fill(255)) : null, c4 = e.map(({ statistics: t2 }) => t2).filter((t2) => t2?.length), u4 = [];
  return c4.forEach((t2) => u4.push(...t2)), new c({ pixelType: r2, width: l3, height: i3, mask: a3, bandMasks: h3, pixels: f3, statistics: u4.length ? u4 : null });
}
function a(t) {
  if (!t) return;
  const e = t.colormap;
  if (!e || 0 === e.length) return;
  const n = e.sort((t2, e2) => t2[0] - e2[0]), l3 = n[0][0] < 0 ? n[0][0] : 0, i3 = Math.max(256, n[n.length - 1][0] - l3 + 1), o4 = new Uint8Array(4 * i3), r2 = [], s3 = 5 === n[0].length;
  if (i3 > 65536) return n.forEach((t2) => {
    r2[t2[0] - l3] = s3 ? t2.slice(1) : t2.slice(1).concat([255]);
  }), { indexed2DColormap: r2, offset: l3, alphaSpecified: s3 };
  if (t.fillUnspecified) {
    let t2 = n[0];
    for (let e2 = t2[0] - l3, r3 = 0; e2 < i3; e2++) o4[4 * e2] = t2[1], o4[4 * e2 + 1] = t2[2], o4[4 * e2 + 2] = t2[3], o4[4 * e2 + 3] = s3 ? t2[4] : 255, e2 === t2[0] - l3 && (t2 = r3 === n.length - 1 ? t2 : n[++r3]);
  } else for (let a3 = 0; a3 < n.length; a3++) {
    const t2 = n[a3], e2 = 4 * (t2[0] - l3);
    o4[e2] = t2[1], o4[e2 + 1] = t2[2], o4[e2 + 2] = t2[3], o4[e2 + 3] = s3 ? t2[4] : 255;
  }
  return { indexedColormap: o4, offset: l3, alphaSpecified: s3 };
}
function f(t, e) {
  if (!o2(t)) return t;
  if (!e || !e.indexedColormap && !e.indexed2DColormap) return t;
  const n = t.clone(), l3 = n.pixels;
  let i3 = n.mask;
  const r2 = n.width * n.height;
  if (1 !== l3.length) return t;
  const { indexedColormap: s3, indexed2DColormap: a3, offset: f3, alphaSpecified: h3 } = e, c4 = l3[0], u4 = new Uint8Array(c4.length), p3 = new Uint8Array(c4.length), d3 = new Uint8Array(c4.length);
  let x3, g3 = 0;
  if (s3) {
    const t2 = s3.length - 1;
    if (null != i3) for (let e2 = 0; e2 < r2; e2++) i3[e2] && (g3 = 4 * (c4[e2] - f3), g3 < f3 || g3 > t2 ? i3[e2] = 0 : (u4[e2] = s3[g3], p3[e2] = s3[g3 + 1], d3[e2] = s3[g3 + 2], i3[e2] = s3[g3 + 3]));
    else {
      i3 = new Uint8Array(r2);
      for (let e2 = 0; e2 < r2; e2++) g3 = 4 * (c4[e2] - f3), g3 < f3 || g3 > t2 ? i3[e2] = 0 : (u4[e2] = s3[g3], p3[e2] = s3[g3 + 1], d3[e2] = s3[g3 + 2], i3[e2] = s3[g3 + 3]);
      n.mask = i3;
    }
  } else if (a3) if (null != i3) for (let o4 = 0; o4 < r2; o4++) i3[o4] && (x3 = a3[c4[o4]], u4[o4] = x3[0], p3[o4] = x3[1], d3[o4] = x3[2], i3[o4] = x3[3]);
  else {
    i3 = new Uint8Array(r2);
    for (let t2 = 0; t2 < r2; t2++) x3 = a3[c4[t2]], u4[t2] = x3[0], p3[t2] = x3[1], d3[t2] = x3[2], i3[t2] = x3[3];
    n.mask = i3;
  }
  return n.pixels = [u4, p3, d3], n.statistics = null, n.pixelType = "u8", n.maskIsAlpha = h3, n;
}
function h(t, e) {
  if (!o2(t)) return null;
  const { pixels: l3, mask: i3 } = t, r2 = l3.length;
  let s3 = e.lut;
  const { offset: a3 } = e;
  s3 && 1 === s3[0].length && (s3 = l3.map(() => s3));
  const f3 = [], h3 = e.outputPixelType || "u8";
  for (let n = 0; n < r2; n++) {
    const t2 = c2(l3[n], i3, s3[n], a3 || 0, h3);
    f3.push(t2);
  }
  const u4 = new c({ width: t.width, height: t.height, pixels: f3, mask: i3, pixelType: h3 });
  return u4.updateStatistics(), u4;
}
function c2(t, e, l3, i3, o4) {
  const r2 = t.length, s3 = c.createEmptyBand(o4, r2);
  if (e) for (let n = 0; n < r2; n++) e[n] && (s3[n] = l3[t[n] - i3]);
  else for (let n = 0; n < r2; n++) s3[n] = l3[t[n] - i3];
  return s3;
}
function u2(t, e, n, l3) {
  const { width: i3, height: o4, pixels: r2, mask: s3 } = t, a3 = i3 * o4, { bandId: f3, ranges: h3 } = n, c4 = r2[f3];
  if (!c4) return;
  const u4 = 1 === h3.length, [p3, d3] = h3[0];
  for (let x3 = 0; x3 < a3; x3++) if (!s3 || s3[x3]) {
    const t2 = c4[x3];
    if (u4) t2 >= p3 && t2 <= d3 && (e[x3] = l3);
    else for (let n2 = 0; n2 < h3.length; n2++) {
      const [i4, o5] = h3[n2];
      if (t2 >= i4 && t2 <= o5) {
        e[x3] = l3;
        break;
      }
    }
  }
}
function p(t, e, n, l3) {
  const { width: i3, height: o4, xyMask: r2, xBandId: s3, yBandId: a3, xBandRange: f3, yBandRange: h3 } = n, { pixels: c4, mask: u4 } = t, p3 = c4[s3], d3 = c4[a3], [x3, g3] = f3, [m3, y3] = h3, w3 = (g3 - x3) / i3, k3 = (y3 - m3) / o4;
  for (let M3 = 0; M3 < p3.length; M3++) if (!u4 || u4[M3]) {
    let t2 = p3[M3], n2 = d3[M3];
    if (t2 < x3 || t2 > g3 || n2 < m3 || n2 > y3) continue;
    r2 ? (t2 = (t2 - x3) * w3, t2 = t2 > i3 - 1 ? i3 - 1 : t2 < 0 ? 0 : 255 & t2, n2 = (y3 - n2) * k3, n2 = n2 > o4 - 1 ? o4 - 1 : n2 < 0 ? 0 : 255 & n2, r2[n2 * i3 + t2] && (e[M3] = l3)) : e[M3] = l3;
  }
}
function d(t) {
  const { pixelBlock: e, renderedPixelBlock: n, highlightOptions: l3 } = t;
  if (!o2(e)) return;
  const { width: i3, height: r2 } = e, s3 = i3 * r2, a3 = new Uint8Array(s3);
  for (let o4 = 1; o4 <= l3.length; o4++) {
    const t2 = l3[o4 - 1];
    "bandId" in t2 ? u2(e, a3, t2, o4) : p(e, a3, t2, o4);
  }
  const { pixels: f3 } = n;
  1 === f3.length && (f3[1] = f3[0].slice(), f3[2] = f3[0].slice());
  const h3 = l3.map((t2) => t2.color), [c4, d3, x3] = f3;
  if (n.mask) {
    const t2 = n.mask;
    for (let e2 = 0; e2 < s3; e2++) if (t2[e2]) {
      t2[e2] = 255;
      const n2 = a3[e2];
      if (n2) {
        const l4 = h3[n2 - 1];
        c4[e2] = l4[0], d3[e2] = l4[1], x3[e2] = l4[2], t2[e2] = l4[3];
      }
    }
  } else {
    const t2 = new Uint8Array(s3).fill(255);
    for (let e2 = 0; e2 < s3; e2++) {
      const n2 = a3[e2];
      if (n2) {
        const l4 = h3[n2 - 1];
        c4[e2] = l4[0], d3[e2] = l4[1], x3[e2] = l4[2], t2[e2] = l4[3];
      }
    }
    n.mask = t2;
  }
  n.maskIsAlpha = true;
}
function x(t, e) {
  if (!o2(t)) return null;
  const n = t.clone(), { pixels: l3 } = n, i3 = n.width * n.height, r2 = e.length, s3 = Math.floor(r2 / 2), a3 = e[Math.floor(s3)], f3 = l3[0], h3 = new Uint8Array(i3), c4 = new Uint8Array(i3), u4 = new Uint8Array(i3);
  let p3 = n.mask;
  const d3 = 4 === e[0].mappedColor.length;
  p3 || (p3 = new Uint8Array(i3), p3.fill(d3 ? 255 : 1), n.mask = p3);
  for (let o4 = 0; o4 < i3; o4++) if (p3[o4]) {
    const t2 = f3[o4];
    let n2 = false, l4 = s3, i4 = a3, d4 = 0, x3 = r2 - 1;
    for (; x3 - d4 > 1; ) {
      if (t2 === i4.value) {
        n2 = true;
        break;
      }
      t2 > i4.value ? d4 = l4 : x3 = l4, l4 = Math.floor((d4 + x3) / 2), i4 = e[Math.floor(l4)];
    }
    n2 || (t2 === e[d4].value ? (i4 = e[d4], n2 = true) : t2 === e[x3].value ? (i4 = e[x3], n2 = true) : t2 < e[d4].value ? n2 = false : t2 > e[d4].value && (t2 < e[x3].value ? (i4 = e[d4], n2 = true) : x3 === r2 - 1 ? n2 = false : (i4 = e[x3], n2 = true))), n2 ? (h3[o4] = i4.mappedColor[0], c4[o4] = i4.mappedColor[1], u4[o4] = i4.mappedColor[2], p3[o4] = i4.mappedColor[3]) : h3[o4] = c4[o4] = u4[o4] = p3[o4] = 0;
  }
  return n.pixels = [h3, c4, u4], n.mask = p3, n.pixelType = "u8", n.maskIsAlpha = d3, n;
}
function g(e, n, i3 = false) {
  const o4 = 1e-5, r2 = new Float32Array(3 * l), s3 = n.length;
  for (let a3 = 0; a3 < l; a3++) r2[3 * a3] = e[2 * a3] ?? q - 1, r2[3 * a3 + 1] = e[2 * a3 + 1] ?? q, r2[3 * a3 + 2] = n[a3] ?? 0, a3 < s3 && (a3 > 0 && (r2[3 * a3] -= o4), e[2 * a3 + 1] !== e[2 * a3] && (a3 < s3 - 1 || !i3) && (r2[3 * a3 + 1] -= o4));
  return r2;
}
function m(t, l3) {
  if (!o2(t)) return null;
  const { width: i3, height: r2 } = t, { inputRanges: s3, outputValues: a3, outputPixelType: f3, noDataRanges: h3, allowUnmatched: c4, replacementValue: u4, isLastInputRangeInclusive: p3 } = l3, d3 = t.pixels[0], x3 = c.createEmptyBand(f3, d3.length), g3 = t.mask, m3 = new Uint8Array(i3 * r2);
  g3 ? m3.set(g3) : m3.fill(255);
  const y3 = t.pixelType.startsWith("f") ? 1e-6 : 0, w3 = s3.map((t2) => t2 - y3);
  w3[0] = s3[0], w3[w3.length - 1] = s3[s3.length - 1] + (p3 ? 1e-6 : 0);
  const k3 = s3.length / 2, [M3, A3] = u(f3);
  for (let e = 0; e < r2; e++) for (let t2 = 0; t2 < i3; t2++) {
    const n = e * i3 + t2;
    if (m3[n]) {
      const t3 = d3[n];
      let e2 = false;
      for (let l4 = k3 - 1; l4 >= 0; l4--) if (t3 === s3[2 * l4] || t3 > w3[2 * l4] && t3 < w3[2 * l4 + 1]) {
        x3[n] = a3[l4], e2 = true;
        break;
      }
      e2 || (c4 ? x3[n] = t3 > A3 ? A3 : t3 < M3 ? M3 : u4 ?? t3 : m3[n] = 0);
    }
  }
  const U3 = h3?.length;
  if (U3) for (let e = 0; e < r2; e++) for (let t2 = 0; t2 < i3; t2++) {
    const n = e * i3 + t2;
    if (!g3 || g3[n]) {
      const t3 = d3[n];
      for (let e2 = 0; e2 < U3; e2 += 2) if (t3 >= h3[e2] && t3 <= h3[e2 + 1]) {
        x3[n] = 0, m3[n] = 0;
        break;
      }
    }
  }
  return new c({ width: i3, height: r2, pixelType: f3, pixels: [x3], mask: m3 });
}
function y(t, e, n, l3) {
  const i3 = null != n && n.length >= 2 ? new Set(n) : null, o4 = 1 === n?.length ? n[0] : null, r2 = !!e?.length;
  for (let s3 = 0; s3 < t.length; s3++) if (l3[s3]) {
    const n2 = t[s3];
    if (r2) {
      let t2 = false;
      for (let l4 = 0; l4 < e.length; l4 += 2) if (n2 >= e[l4] && n2 <= e[l4 + 1]) {
        t2 = true;
        break;
      }
      t2 || (l3[s3] = 0);
    }
    l3[s3] && (n2 === o4 || i3?.has(n2)) && (l3[s3] = 0);
  }
}
function w(t, e) {
  const n = t[0].length;
  e ??= new Uint8Array(n).fill(255);
  for (let l3 = 0; l3 < n; l3++) if (e[l3]) {
    let n2 = false;
    for (let e2 = 0; e2 < t.length; e2++) if (t[e2][l3]) {
      n2 = true;
      break;
    }
    n2 || (e[l3] = 0);
  }
  return e;
}
function k(t, e) {
  const n = t[0].length;
  e ??= new Uint8Array(n).fill(255);
  for (let l3 = 0; l3 < n; l3++) if (e[l3]) {
    let n2 = false;
    for (let e2 = 0; e2 < t.length; e2++) if (0 === t[e2][l3]) {
      n2 = true;
      break;
    }
    n2 && (e[l3] = 0);
  }
  return e;
}
function M(t, e) {
  if (!o2(t)) return null;
  const { width: l3, height: i3, pixels: r2 } = t, s3 = l3 * i3, a3 = new Uint8Array(s3);
  t.mask ? a3.set(t.mask) : a3.fill(255);
  const f3 = r2.length, { includedRanges: h3, noDataValues: u4, outputPixelType: p3, matchAll: d3, lookups: x3 } = e;
  if (x3) {
    const t2 = [];
    for (let e2 = 0; e2 < f3; e2++) {
      const n = x3[e2], l4 = c2(r2[e2], a3, n.lut, n.offset || 0, "u8");
      t2.push(l4);
    }
    1 === t2.length ? a3.set(t2[0]) : d3 ? w(t2, a3) : k(t2, a3);
  } else if (d3) {
    const t2 = [];
    for (let e2 = 0; e2 < f3; e2++) {
      const n = new Uint8Array(s3);
      n.set(a3), y(r2[e2], h3?.slice(2 * e2, 2 * e2 + 2), u4?.[e2], n), t2.push(n);
    }
    1 === t2.length ? a3.set(t2[0]) : w(t2, a3);
  } else for (let n = 0; n < f3; n++) y(r2[n], h3?.slice(2 * n, 2 * n + 2), u4?.[n], a3);
  return new c({ width: l3, height: i3, pixelType: p3, pixels: r2, mask: a3 });
}
function A(t) {
  const { srcPixelType: l3, inputRanges: i3, outputValues: o4, allowUnmatched: r2, noDataRanges: s3, isLastInputRangeInclusive: a3, outputPixelType: f3 } = t;
  if ("u8" !== l3 && "s8" !== l3 && "u16" !== l3 && "s16" !== l3) return null;
  const h3 = l3.includes("16") ? 65536 : 256, c4 = l3.includes("s") ? -h3 / 2 : 0, u4 = c.createEmptyBand(f3, h3), p3 = new Uint8Array(h3);
  r2 && p3.fill(255);
  const [d3, x3] = u(f3);
  if (i3?.length && o4?.length) {
    const t2 = 1e-6, e = i3.map((e2) => e2 - t2);
    e[0] = i3[0], a3 && (e[e.length - 1] = i3[i3.length - 1]);
    for (let n = 0; n < e.length; n++) {
      const t3 = o4[n] > x3 ? x3 : o4[n] < d3 ? d3 : o4[n], l4 = Math.ceil(e[2 * n] - c4), r3 = i3[2 * n + 1] === i3[2 * n] ? l4 : Math.floor(e[2 * n + 1] - c4);
      for (let e2 = l4; e2 <= r3; e2++) u4[e2] = t3, p3[e2] = 255;
    }
  }
  if (s3?.length) for (let e = 0; e < s3.length; e++) {
    const t2 = Math.ceil(s3[2 * e] - c4), n = Math.floor(s3[2 * e + 1] - c4);
    for (let e2 = t2; e2 <= n; e2++) p3[e2] = 0;
  }
  return { lut: u4, offset: c4, mask: p3 };
}
function U(t, e, n) {
  if ("u8" !== t && "s8" !== t && "u16" !== t && "s16" !== t) return null;
  const l3 = t.includes("16") ? 65536 : 256, i3 = t.includes("s") ? -l3 / 2 : 0, o4 = new Uint8Array(l3);
  if (e) for (let r2 = 0; r2 < e.length; r2++) {
    const t2 = Math.ceil(e[2 * r2] - i3), n2 = Math.floor(e[2 * r2 + 1] - i3);
    for (let e2 = t2; e2 <= n2; e2++) o4[e2] = 255;
  }
  else o4.fill(255);
  if (n) for (let r2 = 0; r2 < n.length; r2++) o4[n[r2] - i3] = 0;
  return { lut: o4, offset: i3 };
}
function b(t, e, n, l3, i3, o4, r2, s3) {
  return { xmin: i3 <= n * t ? 0 : i3 < n * t + t ? i3 - n * t : t, ymin: o4 <= l3 * e ? 0 : o4 < l3 * e + e ? o4 - l3 * e : e, xmax: i3 + r2 <= n * t ? 0 : i3 + r2 < n * t + t ? i3 + r2 - n * t : t, ymax: o4 + s3 <= l3 * e ? 0 : o4 + s3 < l3 * e + e ? o4 + s3 - l3 * e : e };
}
function T(t, e) {
  if (!t || 0 === t.length) return null;
  const n = t.find((t2) => t2.pixelBlock);
  if (null == n?.pixelBlock) return null;
  const l3 = (n.extent.xmax - n.extent.xmin) / n.pixelBlock.width, i3 = (n.extent.ymax - n.extent.ymin) / n.pixelBlock.height, o4 = 0.01 * Math.min(l3, i3), r2 = t.sort((t2, e2) => Math.abs(t2.extent.ymax - e2.extent.ymax) > o4 ? e2.extent.ymax - t2.extent.ymax : Math.abs(t2.extent.xmin - e2.extent.xmin) > o4 ? t2.extent.xmin - e2.extent.xmin : 0), s3 = Math.min.apply(null, r2.map((t2) => t2.extent.xmin)), a3 = Math.min.apply(null, r2.map((t2) => t2.extent.ymin)), f3 = Math.max.apply(null, r2.map((t2) => t2.extent.xmax)), h3 = Math.max.apply(null, r2.map((t2) => t2.extent.ymax)), c4 = { x: Math.round((e.xmin - s3) / l3), y: Math.round((h3 - e.ymax) / i3) }, u4 = { width: Math.round((f3 - s3) / l3), height: Math.round((h3 - a3) / i3) }, p3 = { width: Math.round((e.xmax - e.xmin) / l3), height: Math.round((e.ymax - e.ymin) / i3) };
  if (Math.round(u4.width / n.pixelBlock.width) * Math.round(u4.height / n.pixelBlock.height) !== r2.length || c4.x < 0 || c4.y < 0 || u4.width < p3.width || u4.height < p3.height) return null;
  return { extent: e, pixelBlock: S(r2.map((t2) => t2.pixelBlock), u4, { clipOffset: c4, clipSize: p3 }) };
}
function B(t, e, n, l3, i3, o4) {
  const { width: r2, height: s3 } = n.block, { x: a3, y: f3 } = n.offset, { width: h3, height: c4 } = n.mosaic, u4 = b(r2, s3, l3, i3, a3, f3, h3, c4);
  let p3 = 0, d3 = 0;
  if (o4) {
    const t2 = o4.hasGCSSShiftTransform ? 360 : o4.halfWorldWidth ?? 0, e2 = r2 * o4.resolutionX, n2 = o4.startX + l3 * e2;
    n2 < t2 && n2 + e2 > t2 ? d3 = o4.rightPadding : n2 >= t2 && (p3 = o4.leftMargin - o4.rightPadding, d3 = 0);
  }
  if (u4.xmax -= d3, "number" != typeof e) for (let x3 = u4.ymin; x3 < u4.ymax; x3++) {
    const n2 = (i3 * s3 + x3 - f3) * h3 + (l3 * r2 - a3) + p3, o5 = x3 * r2;
    for (let l4 = u4.xmin; l4 < u4.xmax; l4++) t[n2 + l4] = e[o5 + l4];
  }
  else for (let x3 = u4.ymin; x3 < u4.ymax; x3++) {
    const n2 = (i3 * s3 + x3 - f3) * h3 + (l3 * r2 - a3) + p3;
    for (let l4 = u4.xmin; l4 < u4.xmax; l4++) t[n2 + l4] = e;
  }
}
function S(t, e, l3 = {}) {
  const { clipOffset: i3, clipSize: r2, alignmentInfo: s3, blockWidths: a3 } = l3;
  if (a3) return v(t, e, { blockWidths: a3 });
  const f3 = t.find((t2) => o2(t2));
  if (null == f3) return null;
  const h3 = r2 ? r2.width : e.width, c4 = r2 ? r2.height : e.height, u4 = f3.width, p3 = f3.height, d3 = e.width / u4, x3 = e.height / p3, g3 = { offset: i3 || { x: 0, y: 0 }, mosaic: r2 || e, block: { width: u4, height: p3 } }, m3 = f3.pixelType, y3 = c.getPixelArrayConstructor(m3), w3 = f3.pixels.length, k3 = [];
  let M3, A3;
  for (let n = 0; n < w3; n++) {
    A3 = new y3(h3 * c4);
    for (let e2 = 0; e2 < x3; e2++) for (let l4 = 0; l4 < d3; l4++) {
      const i4 = t[e2 * d3 + l4];
      o2(i4) && (M3 = i4.pixels[n], B(A3, M3, g3, l4, e2, s3));
    }
    k3.push(A3);
  }
  const U3 = t.some((t2) => null == t2 || null != t2.mask && t2.mask.length > 0), b3 = t.some((t2) => t2?.bandMasks && t2.bandMasks.length > 1), T2 = U3 ? new Uint8Array(h3 * c4) : void 0, S3 = b3 ? [] : void 0;
  if (T2) {
    for (let e2 = 0; e2 < x3; e2++) for (let n = 0; n < d3; n++) {
      const l4 = t[e2 * d3 + n], i4 = null != l4 ? l4.mask : null;
      B(T2, null != i4 ? i4 : l4 ? 255 : 0, g3, n, e2, s3);
    }
    if (S3) for (let e2 = 0; e2 < w3; e2++) {
      const n = new Uint8Array(h3 * c4);
      for (let l4 = 0; l4 < x3; l4++) for (let i4 = 0; i4 < d3; i4++) {
        const o4 = t[l4 * d3 + i4], r3 = o4?.bandMasks?.[e2] ?? o4?.mask;
        B(n, null != r3 ? r3 : o4 ? 255 : 0, g3, i4, l4, s3);
      }
      S3.push(n);
    }
  }
  const C2 = new c({ width: h3, height: c4, pixels: k3, pixelType: m3, bandMasks: S3, mask: T2 });
  return C2.updateStatistics(), C2;
}
function v(t, e, l3) {
  const i3 = t.find((t2) => null != t2);
  if (null == i3) return null;
  const r2 = t.some((t2) => null == t2 || !!t2.mask), { width: s3, height: a3 } = e, f3 = r2 ? new Uint8Array(s3 * a3) : null, { blockWidths: h3 } = l3, c4 = [], u4 = i3.getPlaneCount(), p3 = c.getPixelArrayConstructor(i3.pixelType);
  if (r2) for (let n = 0, y3 = 0; n < t.length; y3 += h3[n], n++) {
    const e2 = t[n];
    if (!o2(e2)) continue;
    const l4 = e2.mask;
    for (let t2 = 0; t2 < a3; t2++) for (let i4 = 0; i4 < h3[n]; i4++) f3[t2 * s3 + i4 + y3] = null == l4 ? 255 : l4[t2 * e2.width + i4];
  }
  const d3 = t.some((t2) => t2?.bandMasks && t2.bandMasks.length > 1), x3 = d3 ? [] : void 0, g3 = s3 * a3;
  for (let n = 0; n < u4; n++) {
    const e2 = new p3(g3), l4 = d3 ? new Uint8Array(g3) : void 0;
    for (let i4 = 0, r3 = 0; i4 < t.length; r3 += h3[i4], i4++) {
      const f4 = t[i4];
      if (!o2(f4)) continue;
      const c5 = f4.pixels[n];
      if (null != c5) {
        for (let t2 = 0; t2 < a3; t2++) for (let n2 = 0; n2 < h3[i4]; n2++) e2[t2 * s3 + n2 + r3] = c5[t2 * f4.width + n2];
        if (l4) {
          const t2 = f4.bandMasks?.[n] ?? f4.mask;
          for (let e3 = 0; e3 < a3; e3++) for (let n2 = 0; n2 < h3[i4]; n2++) l4[e3 * s3 + n2 + r3] = t2 ? t2[e3 * f4.width + n2] : 255;
        }
      }
    }
    c4.push(e2), x3 && l4 && x3.push(l4);
  }
  const m3 = new c({ width: s3, height: a3, mask: f3, bandMasks: x3, pixels: c4, pixelType: i3.pixelType });
  return m3.updateStatistics(), m3;
}
function C(t, e, n) {
  if (!o2(t)) return null;
  const { width: l3, height: i3 } = t, r2 = e.x, s3 = e.y, a3 = n.width + r2, f3 = n.height + s3;
  if (r2 < 0 || s3 < 0 || a3 > l3 || f3 > i3) return t;
  if (0 === r2 && 0 === s3 && a3 === l3 && f3 === i3) return t;
  t.mask || (t.mask = new Uint8Array(l3 * i3));
  const h3 = t.mask;
  for (let o4 = 0; o4 < i3; o4++) {
    const t2 = o4 * l3;
    for (let e2 = 0; e2 < l3; e2++) h3[t2 + e2] = o4 < s3 || o4 >= f3 || e2 < r2 || e2 >= a3 ? 0 : 1;
  }
  return t.updateStatistics(), t;
}
function I(t) {
  if (!o2(t)) return null;
  const e = t.clone(), { width: n, height: l3, pixels: i3 } = t, r2 = i3[0], s3 = e.pixels[0], a3 = t.mask;
  for (let o4 = 2; o4 < l3 - 1; o4++) {
    const t2 = /* @__PURE__ */ new Map();
    for (let l4 = o4 - 2; l4 < o4 + 2; l4++) for (let e3 = 0; e3 < 4; e3++) {
      const i4 = l4 * n + e3;
      _(t2, r2[i4], a3 ? a3[i4] : 1);
    }
    s3[o4 * n] = R(t2), s3[o4 * n + 1] = s3[o4 * n + 2] = s3[o4 * n];
    let e2 = 3;
    for (; e2 < n - 1; e2++) {
      let l4 = (o4 - 2) * n + e2 + 1;
      _(t2, r2[l4], a3 ? a3[l4] : 1), l4 = (o4 - 1) * n + e2 + 1, _(t2, r2[l4], a3 ? a3[l4] : 1), l4 = o4 * n + e2 + 1, _(t2, r2[l4], a3 ? a3[l4] : 1), l4 = (o4 + 1) * n + e2 + 1, _(t2, r2[l4], a3 ? a3[l4] : 1), l4 = (o4 - 2) * n + e2 - 3, P(t2, r2[l4], a3 ? a3[l4] : 1), l4 = (o4 - 1) * n + e2 - 3, P(t2, r2[l4], a3 ? a3[l4] : 1), l4 = o4 * n + e2 - 3, P(t2, r2[l4], a3 ? a3[l4] : 1), l4 = (o4 + 1) * n + e2 - 3, P(t2, r2[l4], a3 ? a3[l4] : 1), s3[o4 * n + e2] = R(t2);
    }
    s3[o4 * n + e2 + 1] = s3[o4 * n + e2];
  }
  for (let o4 = 0; o4 < n; o4++) s3[o4] = s3[n + o4] = s3[2 * n + o4], s3[(l3 - 1) * n + o4] = s3[(l3 - 2) * n + o4];
  return e.updateStatistics(), e;
}
function R(t) {
  if (0 === t.size) return 0;
  let e = 0, n = -1, l3 = 0;
  const i3 = t.keys();
  let o4 = i3.next();
  for (; !o4.done; ) l3 = t.get(o4.value), l3 > e && (n = o4.value, e = l3), o4 = i3.next();
  return n;
}
function P(t, e, n) {
  if (0 === n) return;
  const l3 = t.get(e);
  1 === l3 ? t.delete(e) : t.set(e, l3 - 1);
}
function _(t, e, n) {
  0 !== n && t.set(e, t.has(e) ? t.get(e) + 1 : 1);
}
function F(t, e, l3) {
  let { x: i3, y: r2 } = e;
  const { width: s3, height: a3 } = l3;
  if (0 === i3 && 0 === r2 && a3 === t.height && s3 === t.width) return t;
  const { width: f3, height: h3 } = t, c4 = Math.max(0, r2), u4 = Math.max(0, i3), p3 = Math.min(i3 + s3, f3), d3 = Math.min(r2 + a3, h3);
  if (p3 < 0 || d3 < 0 || !o2(t)) return null;
  i3 = Math.max(0, -i3), r2 = Math.max(0, -r2);
  const { pixels: x3 } = t, g3 = s3 * a3, m3 = x3.length, y3 = [];
  for (let o4 = 0; o4 < m3; o4++) {
    const e2 = x3[o4], l4 = c.createEmptyBand(t.pixelType, g3);
    for (let t2 = c4; t2 < d3; t2++) {
      const n = t2 * f3;
      let o5 = (t2 + r2 - c4) * s3 + i3;
      for (let t3 = u4; t3 < p3; t3++) l4[o5++] = e2[n + t3];
    }
    y3.push(l4);
  }
  const w3 = new Uint8Array(g3), k3 = t.mask;
  for (let n = c4; n < d3; n++) {
    const t2 = n * f3;
    let e2 = (n + r2 - c4) * s3 + i3;
    for (let n2 = u4; n2 < p3; n2++) w3[e2++] = k3 ? k3[t2 + n2] : 1;
  }
  const M3 = new c({ width: l3.width, height: l3.height, pixelType: t.pixelType, pixels: y3, mask: w3 });
  return M3.updateStatistics(), M3;
}
function W(t, e = true) {
  if (!o2(t)) return null;
  const { pixels: l3, width: i3, height: r2, mask: s3, pixelType: a3 } = t, f3 = [], h3 = Math.round(i3 / 2), c4 = Math.round(r2 / 2), u4 = r2 - 1, p3 = i3 - 1;
  for (let o4 = 0; o4 < l3.length; o4++) {
    const t2 = l3[o4], s4 = c.createEmptyBand(a3, h3 * c4);
    let d4 = 0;
    for (let n = 0; n < r2; n += 2) for (let l4 = 0; l4 < i3; l4 += 2) {
      const o5 = t2[n * i3 + l4];
      if (e) {
        const e2 = l4 === p3 ? o5 : t2[n * i3 + l4 + 1], r3 = n === u4 ? o5 : t2[n * i3 + l4 + i3], a4 = l4 === p3 ? r3 : n === u4 ? e2 : t2[n * i3 + l4 + i3 + 1];
        s4[d4++] = (o5 + e2 + r3 + a4) / 4;
      } else s4[d4++] = o5;
    }
    f3.push(s4);
  }
  let d3 = null;
  if (null != s3) {
    d3 = new Uint8Array(h3 * c4);
    let t2 = 0;
    for (let n = 0; n < r2; n += 2) for (let l4 = 0; l4 < i3; l4 += 2) {
      const o4 = s3[n * i3 + l4];
      if (e) {
        const e2 = l4 === p3 ? o4 : s3[n * i3 + l4 + 1], r3 = n === u4 ? o4 : s3[n * i3 + l4 + i3], a4 = l4 === p3 ? r3 : n === u4 ? e2 : s3[n * i3 + l4 + i3 + 1];
        d3[t2++] = o4 * e2 * r3 * a4 ? 1 : 0;
      } else d3[t2++] = o4;
    }
  }
  return new c({ width: h3, height: c4, pixelType: a3, pixels: f3, mask: d3 });
}
function E(t, e, n = 0, l3 = true) {
  if (!o2(t)) return null;
  const { width: i3, height: r2 } = e;
  let { width: s3, height: a3 } = t;
  const f3 = /* @__PURE__ */ new Map(), h3 = { x: 0, y: 0 }, c4 = 1 + n;
  let u4 = t;
  for (let o4 = 0; o4 < c4; o4++) {
    const t2 = Math.ceil(s3 / i3), n2 = Math.ceil(a3 / r2);
    for (let l4 = 0; l4 < n2; l4++) {
      h3.y = l4 * r2;
      for (let n3 = 0; n3 < t2; n3++) {
        h3.x = n3 * i3;
        const t3 = F(u4, h3, e);
        f3.set(`${o4}/${l4}/${n3}`, t3);
      }
    }
    o4 < c4 - 1 && (u4 = W(u4, l3)), s3 = Math.round(s3 / 2), a3 = Math.round(a3 / 2);
  }
  return f3;
}
function D(t) {
  const { pixelBlock: e, tileSize: n, level: l3, row: i3, col: r2, useBilinear: s3 } = t;
  if (!o2(e)) return null;
  const { width: a3, height: f3 } = n, h3 = 2 ** l3, c4 = h3 * a3, u4 = h3 * f3;
  let p3 = F(e, { y: i3 * u4, x: r2 * c4 }, { width: c4, height: u4 });
  if (!p3) return null;
  for (let o4 = l3; o4 > 0; o4--) p3 = W(p3, s3);
  return p3;
}
function N(t, e, n, l3, i3 = 0) {
  const { width: o4, height: r2 } = t, { width: s3, height: a3 } = e, f3 = l3.cols, h3 = l3.rows, c4 = Math.ceil(s3 / f3 - 0.1 / f3), u4 = Math.ceil(a3 / h3 - 0.1 / h3);
  let p3, d3, x3, g3, m3, y3, w3;
  const k3 = c4 * f3, M3 = k3 * u4 * h3, A3 = new Float32Array(M3), U3 = new Float32Array(M3), b3 = new Uint32Array(M3), T2 = new Uint32Array(M3);
  let B2, S3, v3 = 0;
  for (let C2 = 0; C2 < u4; C2++) for (let t2 = 0; t2 < c4; t2++) {
    p3 = 12 * (C2 * c4 + t2), d3 = n[p3], x3 = n[p3 + 1], g3 = n[p3 + 2], m3 = n[p3 + 3], y3 = n[p3 + 4], w3 = n[p3 + 5];
    for (let e2 = 0; e2 < h3; e2++) {
      v3 = (C2 * h3 + e2) * k3 + t2 * f3, S3 = (e2 + 0.5) / h3;
      for (let t3 = 0; t3 < e2; t3++) B2 = (t3 + 0.5) / f3, A3[v3 + t3] = (d3 * B2 + x3 * S3 + g3) * o4 + i3, U3[v3 + t3] = (m3 * B2 + y3 * S3 + w3) * r2 + i3, b3[v3 + t3] = Math.floor(A3[v3 + t3]), T2[v3 + t3] = Math.floor(U3[v3 + t3]);
    }
    p3 += 6, d3 = n[p3], x3 = n[p3 + 1], g3 = n[p3 + 2], m3 = n[p3 + 3], y3 = n[p3 + 4], w3 = n[p3 + 5];
    for (let e2 = 0; e2 < h3; e2++) {
      v3 = (C2 * h3 + e2) * k3 + t2 * f3, S3 = (e2 + 0.5) / h3;
      for (let t3 = e2; t3 < f3; t3++) B2 = (t3 + 0.5) / f3, A3[v3 + t3] = (d3 * B2 + x3 * S3 + g3) * o4 + i3, U3[v3 + t3] = (m3 * B2 + y3 * S3 + w3) * r2 + i3, b3[v3 + t3] = Math.floor(A3[v3 + t3]), T2[v3 + t3] = Math.floor(U3[v3 + t3]);
    }
  }
  return { offsets_x: A3, offsets_y: U3, offsets_xi: b3, offsets_yi: T2, gridWidth: k3 };
}
function j(t, e) {
  const { coefficients: n, spacing: l3 } = e, { offsets_x: i3, offsets_y: o4, gridWidth: r2 } = N(t, t, n, { rows: l3[0], cols: l3[1] }), { width: s3, height: a3 } = t, f3 = new Float32Array(s3 * a3), h3 = 180 / Math.PI;
  for (let c4 = 0; c4 < a3; c4++) for (let t2 = 0; t2 < s3; t2++) {
    const e2 = c4 * r2 + t2, n2 = 0 === c4 ? e2 : e2 - r2, l4 = c4 === a3 - 1 ? e2 : e2 + r2, u4 = i3[n2] - i3[l4], p3 = o4[l4] - o4[n2];
    if (isNaN(u4) || isNaN(p3)) f3[c4 * s3 + t2] = 90;
    else {
      let e3 = Math.atan2(p3, u4) * h3;
      e3 = (360 + e3) % 360, f3[c4 * s3 + t2] = e3;
    }
  }
  return f3;
}
function O(t, e, l3, i3, r2 = "nearest") {
  if (!o2(t)) return null;
  "majority" === r2 && (t = I(t));
  const { pixels: s3, mask: a3, bandMasks: f3, pixelType: h3 } = t, c4 = t.width, u4 = t.height, p3 = c.getPixelArrayConstructor(h3), d3 = s3.length, { width: x3, height: g3 } = e;
  let m3 = false;
  for (let n = 0; n < l3.length; n += 3) -1 === l3[n] && -1 === l3[n + 1] && -1 === l3[n + 2] && (m3 = true);
  const { offsets_x: y3, offsets_y: w3, offsets_xi: k3, offsets_yi: M3, gridWidth: A3 } = N({ width: c4, height: u4 }, e, l3, i3, "majority" === r2 ? 0.5 : 0);
  let U3;
  const b3 = (t2, e2, n, l4) => {
    const i4 = t2 instanceof Float32Array || t2 instanceof Float64Array ? 0 : 0.5;
    for (let o4 = 0; o4 < g3; o4++) {
      U3 = o4 * A3;
      for (let r3 = 0; r3 < x3; r3++) {
        if (y3[U3] < 0 || w3[U3] < 0) t2[o4 * x3 + r3] = 0;
        else if (l4) t2[o4 * x3 + r3] = e2[k3[U3] + M3[U3] * c4];
        else {
          const l5 = Math.floor(y3[U3]), s4 = Math.floor(w3[U3]), a4 = Math.ceil(y3[U3]), f4 = Math.ceil(w3[U3]), h4 = y3[U3] - l5, u5 = w3[U3] - s4;
          if (!n || n[l5 + s4 * c4] && n[a4 + s4 * c4] && n[l5 + f4 * c4] && n[a4 + f4 * c4]) {
            const n2 = (1 - h4) * e2[l5 + s4 * c4] + h4 * e2[a4 + s4 * c4], p4 = (1 - h4) * e2[l5 + f4 * c4] + h4 * e2[a4 + f4 * c4];
            t2[o4 * x3 + r3] = (1 - u5) * n2 + u5 * p4 + i4;
          } else t2[o4 * x3 + r3] = e2[k3[U3] + M3[U3] * c4];
        }
        U3++;
      }
    }
  }, T2 = [];
  let B2;
  const S3 = f3?.length === d3, v3 = [];
  for (let n = 0; n < d3; n++) {
    if (S3) {
      const t2 = new Uint8Array(x3 * g3);
      b3(t2, f3[n], f3[n], true), v3.push(t2);
    }
    B2 = new p3(x3 * g3), b3(B2, s3[n], S3 ? f3[n] : a3, "nearest" === r2 || "majority" === r2), T2.push(B2);
  }
  const C2 = new c({ width: x3, height: g3, pixelType: h3, pixels: T2, bandMasks: S3 ? v3 : void 0 });
  if (null != a3) C2.mask = new Uint8Array(x3 * g3), b3(C2.mask, a3, a3, true);
  else if (m3) {
    C2.mask = new Uint8Array(x3 * g3);
    for (let t2 = 0; t2 < x3 * g3; t2++) C2.mask[t2] = y3[t2] < 0 || w3[t2] < 0 ? 0 : 1;
  }
  return C2.updateStatistics(), C2;
}
function z(t) {
  const { pixelBlock: e, extent: n, fieldNames: l3, skipFactor: o4, skipSpatialReference: r2 = false, pixelIdOffset: s3 = 0 } = t, a3 = [], { width: f3, height: h3, pixels: c4, mask: u4 } = e, p3 = t.imageRowSize ?? f3, d3 = n.width / f3, x3 = n.height / h3, g3 = c4.length, m3 = Math.floor(o4 / 2), { xmin: y3, ymax: w3 } = n, k3 = r2 ? void 0 : n.spatialReference.toJSON();
  for (let M3 = m3; M3 < h3; M3 += o4) for (let t2 = m3; t2 < f3; t2 += o4) {
    const e2 = M3 * f3 + t2;
    if (!u4 || u4[e2]) {
      const n2 = { x: y3 + (t2 + 0.5) * d3, y: w3 - (M3 + 0.5) * x3, spatialReference: k3 }, o5 = { [i]: s3 + M3 * p3 + t2 };
      for (let t3 = 0; t3 < g3; t3++) o5[l3[t3 + 1]] = c4[t3][e2];
      a3.push({ geometry: n2, attributes: o5 });
    }
  }
  return a3;
}

// node_modules/@arcgis/core/layers/raster/functions/vectorFieldUtils.js
var r = /* @__PURE__ */ new Map();
r.set("meter-per-second", 1), r.set("kilometer-per-hour", 0.277778), r.set("knots", 0.514444), r.set("feet-per-second", 0.3048), r.set("mile-per-hour", 0.44704);
var o3 = 180 / Math.PI;
var i2 = 5;
var s2 = new o({ esriMetersPerSecond: "meter-per-second", esriKilometersPerHour: "kilometer-per-hour", esriKnots: "knots", esriFeetPerSecond: "feet-per-second", esriMilesPerHour: "mile-per-hour" });
function a2(t, e) {
  return r.get(t) / r.get(e) || 1;
}
function h2(t) {
  return (450 - t) % 360;
}
function l2(t, e = "geographic") {
  const [n, r2] = t, i3 = Math.sqrt(n * n + r2 * r2);
  let s3 = Math.atan2(r2, n) * o3;
  return s3 = (360 + s3) % 360, "geographic" === e && (s3 = h2(s3)), [i3, s3];
}
function c3(t, e = "geographic") {
  let n = t[1];
  "geographic" === e && (n = h2(n)), n %= 360;
  const r2 = t[0];
  return [r2 * Math.cos(n / o3), r2 * Math.sin(n / o3)];
}
function u3(t, n, r2, o4 = "geographic") {
  if (!o2(t) || null == r2) return t;
  const i3 = "vector-magdir" === n ? t.clone() : f2(t, n), s3 = i3.pixels[1];
  for (let e = 0; e < s3.length; e++) s3[e] = "geographic" === o4 ? (s3[e] + r2[e] + 270) % 360 : (s3[e] + 360 - r2[e]) % 360;
  return "vector-magdir" === n ? i3 : f2(i3, "vector-magdir");
}
function f2(t, r2, o4 = "geographic", i3 = 1) {
  if (!o2(t)) return t;
  const { pixels: s3, width: a3, height: h3 } = t, u4 = a3 * h3, f3 = s3[0], p3 = s3[1], m3 = t.pixelType.startsWith("f") ? t.pixelType : "f32", d3 = c.createEmptyBand(m3, u4), g3 = c.createEmptyBand(m3, u4);
  let x3 = 0;
  for (let e = 0; e < h3; e++) for (let t2 = 0; t2 < a3; t2++) "vector-uv" === r2 ? ([d3[x3], g3[x3]] = l2([f3[x3], p3[x3]], o4), d3[x3] *= i3) : ([d3[x3], g3[x3]] = c3([f3[x3], p3[x3]], o4), d3[x3] *= i3, g3[x3] *= i3), x3++;
  const M3 = new c({ pixelType: m3, width: t.width, height: t.height, mask: t.mask, validPixelCount: t.validPixelCount, maskIsAlpha: t.maskIsAlpha, pixels: [d3, g3] });
  return M3.updateStatistics(), M3;
}
function p2(t, n, r2 = 1) {
  if (1 === r2 || !o2(t)) return t;
  const o4 = t.clone(), { pixels: i3, width: s3, height: a3 } = o4, h3 = i3[0], l3 = i3[1];
  let c4 = 0;
  for (let e = 0; e < a3; e++) for (let t2 = 0; t2 < s3; t2++) "vector-uv" === n ? (h3[c4] *= r2, l3[c4] *= r2) : h3[c4] *= r2, c4++;
  return o4.updateStatistics(), o4;
}
function m2(t, e, n, r2, o4) {
  if (null == o4 || !o4.spatialReference.equals(t.spatialReference)) return { extent: t, width: Math.round(e / r2), height: Math.round(n / r2), resolution: t.width / e };
  const i3 = o4.xmin, s3 = o4.ymax, a3 = (t.xmax - t.xmin) / e * r2, h3 = (t.ymax - t.ymin) / n * r2, l3 = (a3 + h3) / 2;
  return t.xmin = i3 + Math.floor((t.xmin - i3) / a3) * a3, t.xmax = i3 + Math.ceil((t.xmax - i3) / a3) * a3, t.ymin = s3 + Math.floor((t.ymin - s3) / h3) * h3, t.ymax = s3 + Math.ceil((t.ymax - s3) / h3) * h3, { extent: t, width: Math.round(t.width / a3), height: Math.round(t.height / h3), resolution: l3 };
}
var d2 = g2(0, 0, 0);
function g2(t = 0, e = 0, n = Math.PI, r2 = true) {
  r2 && (n = (2 * Math.PI - n) % (2 * Math.PI));
  const o4 = r2 ? -1 : 1, i3 = 13 * o4, s3 = -7 * o4, a3 = -2 * o4, h3 = -16 * o4, l3 = 21.75, [c4, u4] = M2(0, e + i3, n, l3), [f3, p3] = M2(t - 5.5, e + s3, n, l3), [m3, d3] = M2(t + 5.5, e + s3, n, l3), [g3, x3] = M2(t - 1.5, e + a3, n, l3), [k3, w3] = M2(t + 1.5, e + a3, n, l3), [y3, P3] = M2(t - 1.5, e + h3, n, l3), [b3, v3] = M2(t + 1.5, e + h3, n, l3);
  return [c4, u4, f3, p3, g3, x3, k3, w3, m3, d3, y3, P3, b3, v3];
}
function x2(t = 0, e = Math.PI, n = true) {
  n && (e = (2 * Math.PI - e) % (2 * Math.PI));
  const r2 = 10, o4 = n ? -1 : 1, s3 = 5 * o4, a3 = 20 * o4, h3 = 25 * o4, l3 = 45, c4 = 0, u4 = 0, f3 = 2, p3 = 0, m3 = f3 * o4, d3 = n ? 1 : -1, g3 = r2 / 2 * d3;
  let [x3, k3] = [c4 + g3, u4 - a3], [w3, y3] = [x3 + f3 * d3, k3], [P3, b3] = [w3 - p3 * d3, y3 + m3], [v3, I3] = [c4 - g3, u4 - h3], [A3, _3] = [v3 + p3 * d3, I3 - m3], U3 = Math.ceil(t / i2), S3 = Math.floor(U3 / 10);
  U3 -= 8 * S3;
  const D2 = [], F2 = [];
  for (let i3 = 0; i3 < U3 / 2; i3++, S3--) {
    S3 <= 0 && U3 % 2 == 1 && i3 === (U3 - 1) / 2 && (v3 = c4, A3 = v3 + p3 * d3, I3 = (I3 + k3) / 2, _3 = I3 - m3);
    const [t2, n2] = M2(v3, I3, e, l3);
    if (S3 > 0) {
      const [r3, o5] = M2(w3, I3, e, l3), [i4, s4] = M2(x3, k3, e, l3);
      D2.push(r3), D2.push(o5), D2.push(t2), D2.push(n2), D2.push(i4), D2.push(s4);
    } else {
      const [r3, o5] = M2(w3, y3, e, l3), [i4, s4] = M2(P3, b3, e, l3), [a4, h4] = M2(A3, _3, e, l3);
      F2.push(t2), F2.push(n2), F2.push(a4), F2.push(h4), F2.push(i4), F2.push(s4), F2.push(r3), F2.push(o5);
    }
    I3 += s3, k3 += s3, y3 += s3, b3 += s3, _3 += s3;
  }
  const [N2, j2] = M2(c4 + g3, u4 + a3, e, l3), J = (r2 / 2 + f3) * d3, [O2, q2] = M2(c4 + J, u4 + a3, e, l3), [B2, E2] = M2(c4 + g3, u4 - h3, e, l3), [T2, C2] = M2(c4 + J, u4 - h3, e, l3);
  return { pennants: D2, barbs: F2, shaft: [N2, j2, O2, q2, B2, E2, T2, C2] };
}
function M2(t, e, n, r2 = 1) {
  const o4 = Math.sqrt(t * t + e * e) / r2, i3 = (2 * Math.PI + Math.atan2(e, t)) % (2 * Math.PI);
  return [o4, (2 * Math.PI + i3 - n) % (2 * Math.PI)];
}
var k2 = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63];
var w2 = [0, 0.5, 1, 1.5, 2];
var y2 = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
function P2(t, e, n, r2) {
  const o4 = a2(r2 || "knots", n);
  let i3;
  for (i3 = 1; i3 < e.length; i3++) if (i3 === e.length - 1) {
    if (t < e[i3] * o4) break;
  } else if (t <= e[i3] * o4) break;
  return Math.min(i3 - 1, e.length - 2);
}
function b2(t, e, n, r2, o4) {
  let i3 = 0;
  switch (e) {
    case "beaufort_kn":
      i3 = P2(t, k2, "knots", n);
      break;
    case "beaufort_km":
      i3 = P2(t, k2, "kilometer-per-hour", n);
      break;
    case "beaufort_ft":
      i3 = P2(t, k2, "feet-per-second", n);
      break;
    case "beaufort_m":
      i3 = P2(t, k2, "meter-per-second", n);
      break;
    case "classified_arrow":
      i3 = P2(t, o4 ?? [], r2, n);
      break;
    case "ocean_current_m":
      i3 = P2(t, w2, "meter-per-second", n);
      break;
    case "ocean_current_kn":
      i3 = P2(t, y2, "knots", n);
  }
  return i3;
}
function v2(t, e) {
  const { style: n, inputUnit: r2, outputUnit: o4, breakValues: i3 } = e, a3 = s2.fromJSON(r2), h3 = s2.fromJSON(o4), l3 = 7 * 6, c4 = 15;
  let u4 = 0, f3 = 0;
  const { width: p3, height: m3, mask: x3 } = t, M3 = t.pixels[0], k3 = t.pixels[1], w3 = null != x3 ? x3.filter((t2) => t2 > 0).length : p3 * m3, y3 = new Float32Array(w3 * l3), P3 = new Uint32Array(c4 * w3), v3 = e.invertDirection ? g2(0, 0, 0, false) : d2;
  for (let s3 = 0; s3 < m3; s3++) for (let t2 = 0; t2 < p3; t2++) {
    const e2 = s3 * p3 + t2;
    if (!x3 || x3[s3 * p3 + t2]) {
      const r3 = (k3[e2] + 360) % 360 / 180 * Math.PI, o5 = b2(M3[e2], n, a3, h3, i3);
      for (let n2 = 0; n2 < v3.length; n2 += 2) y3[u4++] = (t2 + 0.5) / p3, y3[u4++] = (s3 + 0.5) / m3, y3[u4++] = v3[n2], y3[u4++] = v3[n2 + 1] + r3, y3[u4++] = o5, y3[u4++] = M3[e2];
      const c5 = 7 * (u4 / l3 - 1);
      P3[f3++] = c5, P3[f3++] = c5 + 1, P3[f3++] = c5 + 2, P3[f3++] = c5 + 0, P3[f3++] = c5 + 4, P3[f3++] = c5 + 3, P3[f3++] = c5 + 0, P3[f3++] = c5 + 2, P3[f3++] = c5 + 3, P3[f3++] = c5 + 2, P3[f3++] = c5 + 5, P3[f3++] = c5 + 3, P3[f3++] = c5 + 5, P3[f3++] = c5 + 6, P3[f3++] = c5 + 3;
    }
  }
  return { vertexData: y3, indexData: P3 };
}
var I2 = [];
function A2(t, e) {
  if (0 === I2.length) for (let i3 = 0; i3 < 30; i3++) I2.push(x2(5 * i3, 0, !e.invertDirection));
  const n = a2(s2.fromJSON(e.inputUnit), "knots"), { width: r2, height: o4, mask: h3 } = t, l3 = t.pixels[0], c4 = t.pixels[1], u4 = 6, f3 = [], p3 = [];
  let m3 = 0, d3 = 0;
  for (let s3 = 0; s3 < o4; s3++) for (let t2 = 0; t2 < r2; t2++) {
    const e2 = s3 * r2 + t2, a3 = l3[e2] * n;
    if ((!h3 || h3[s3 * r2 + t2]) && a3 >= i2) {
      const n2 = (c4[e2] + 360) % 360 / 180 * Math.PI, { pennants: i3, barbs: h4, shaft: l4 } = I2[Math.min(Math.floor(a3 / 5), 29)];
      if (i3.length + h4.length === 0) continue;
      let g3 = f3.length / u4;
      const x3 = (t2 + 0.5) / r2, M3 = (s3 + 0.5) / o4;
      for (let t3 = 0; t3 < i3.length; t3 += 2) f3[m3++] = x3, f3[m3++] = M3, f3[m3++] = i3[t3], f3[m3++] = i3[t3 + 1] + n2, f3[m3++] = 0, f3[m3++] = a3;
      for (let t3 = 0; t3 < h4.length; t3 += 2) f3[m3++] = x3, f3[m3++] = M3, f3[m3++] = h4[t3], f3[m3++] = h4[t3 + 1] + n2, f3[m3++] = 0, f3[m3++] = a3;
      for (let t3 = 0; t3 < l4.length; t3 += 2) f3[m3++] = x3, f3[m3++] = M3, f3[m3++] = l4[t3], f3[m3++] = l4[t3 + 1] + n2, f3[m3++] = 0, f3[m3++] = a3;
      for (let t3 = 0; t3 < i3.length / 6; t3++) p3[d3++] = g3, p3[d3++] = g3 + 1, p3[d3++] = g3 + 2, g3 += 3;
      for (let t3 = 0; t3 < h4.length / 8; t3++) p3[d3++] = g3, p3[d3++] = g3 + 1, p3[d3++] = g3 + 2, p3[d3++] = g3 + 1, p3[d3++] = g3 + 2, p3[d3++] = g3 + 3, g3 += 4;
      p3[d3++] = g3 + 0, p3[d3++] = g3 + 1, p3[d3++] = g3 + 2, p3[d3++] = g3 + 1, p3[d3++] = g3 + 3, p3[d3++] = g3 + 2, g3 += 4;
    }
  }
  return { vertexData: new Float32Array(f3), indexData: new Uint32Array(p3) };
}
function _2(t, e) {
  const n = 4 * 6;
  let r2 = 0, o4 = 0;
  const { width: h3, height: l3, mask: c4 } = t, u4 = t.pixels[0], f3 = [], p3 = [], m3 = a2(s2.fromJSON(e.inputUnit), "knots"), d3 = "wind_speed" === e.style ? i2 : Number.MAX_VALUE;
  for (let i3 = 0; i3 < l3; i3++) for (let t2 = 0; t2 < h3; t2++) {
    const e2 = u4[i3 * h3 + t2] * m3;
    if ((!c4 || c4[i3 * h3 + t2]) && e2 < d3) {
      for (let n2 = 0; n2 < 4; n2++) f3[r2++] = (t2 + 0.5) / h3, f3[r2++] = (i3 + 0.5) / l3, f3[r2++] = n2 < 2 ? -0.5 : 0.5, f3[r2++] = n2 % 2 == 0 ? -0.5 : 0.5, f3[r2++] = 0, f3[r2++] = e2;
      const s3 = 4 * (r2 / n - 1);
      p3[o4++] = s3, p3[o4++] = s3 + 1, p3[o4++] = s3 + 2, p3[o4++] = s3 + 1, p3[o4++] = s3 + 2, p3[o4++] = s3 + 3;
    }
  }
  return { vertexData: new Float32Array(f3), indexData: new Uint32Array(p3) };
}
function U2(t, e) {
  return "simple_scalar" === e.style ? _2(t, e) : "wind_speed" === e.style ? A2(t, e) : v2(t, e);
}
function S2(t, e, r2, o4 = [0, 0], i3 = 0.5) {
  const { width: s3, height: a3, mask: h3 } = t, [u4, f3] = t.pixels, [p3, m3] = o4, d3 = Math.round((s3 - p3) / r2), g3 = Math.round((a3 - m3) / r2), x3 = d3 * g3, M3 = new Float32Array(x3), k3 = new Float32Array(x3), w3 = new Uint8Array(x3), y3 = "vector-uv" === e;
  for (let n = 0; n < g3; n++) for (let t2 = 0; t2 < d3; t2++) {
    let e2 = 0;
    const o5 = n * d3 + t2, g4 = Math.max(0, n * r2 + m3), x4 = Math.max(0, t2 * r2 + p3), P4 = Math.min(a3, g4 + r2), b3 = Math.min(s3, x4 + r2);
    for (let t3 = g4; t3 < P4; t3++) for (let n2 = x4; n2 < b3; n2++) {
      const r3 = t3 * s3 + n2;
      if (!h3 || h3[r3]) {
        e2++;
        const t4 = y3 ? [u4[r3], f3[r3]] : [u4[r3], (360 + f3[r3]) % 360], [n3, i4] = y3 ? t4 : c3(t4);
        M3[o5] += n3, k3[o5] += i4;
      }
    }
    if (e2 >= (P4 - g4) * (b3 - x4) * (1 - i3)) {
      w3[o5] = 1;
      const [t3, n2] = l2([M3[o5] / e2, k3[o5] / e2]);
      M3[o5] = t3, k3[o5] = n2;
    } else w3[o5] = 0, M3[o5] = 0, k3[o5] = 0;
  }
  const P3 = new c({ width: d3, height: g3, pixels: [M3, k3], mask: w3 });
  return P3.updateStatistics(), P3;
}

export {
  l,
  o2 as o,
  s,
  a,
  f,
  h,
  c2 as c,
  d,
  x,
  g,
  m,
  k,
  M,
  A,
  U,
  T,
  S,
  C,
  F,
  E,
  D,
  j,
  O,
  z,
  s2,
  a2,
  l2,
  u3 as u,
  f2,
  p2 as p,
  m2,
  _2 as _,
  U2,
  S2
};
//# sourceMappingURL=chunk-LU2QJRDL.js.map
