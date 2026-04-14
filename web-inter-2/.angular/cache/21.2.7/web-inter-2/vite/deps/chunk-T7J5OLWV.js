import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import {
  G
} from "./chunk-ZTEDLWCB.js";
import {
  _,
  s
} from "./chunk-253Z6EVN.js";
import {
  t as t2
} from "./chunk-SY7OJLZ7.js";
import {
  has,
  n2 as n
} from "./chunk-TX75HZKJ.js";
import {
  t
} from "./chunk-GLWFJLHD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/support/flow/dataUtils.js
var s2 = () => n.getLogger("esri.views.support.flow.dataUtils");
function l(t3, e, r, n2, i) {
  if (t3.density <= 0) return [];
  const { positions: a } = i, s3 = [], l2 = new t(), c2 = 1 / Math.max(t3.lineCollisionWidth, 1), h2 = Math.round(r * c2), u2 = Math.round(n2 * c2), m2 = new Int32Array(h2 * u2);
  for (let o = 0; o < m2.length; o++) m2[o] = -1;
  const p2 = { raster: m2, width: h2, height: u2, resolutionFactor: c2 }, w2 = {}, g = t3.lineSpacing / Math.sqrt(t3.density), y = Math.floor(n2 / g), x = Math.floor(r / g);
  for (let o = 0; o < y; o++) {
    const t4 = o * g;
    for (let e2 = 0; e2 < x; e2++) {
      const r2 = e2 * g;
      w2[`${e2}-${o}`] = { x: r2, y: t4, positions: [] };
    }
  }
  for (const { x: o, y: f2 } of a) {
    const t4 = w2[`${Math.floor(o / g)}-${Math.floor(f2 / g)}`];
    t4 && t4.positions.push([o, f2]);
  }
  const M = [];
  for (const o in w2) {
    const t4 = w2[o];
    if (0 === t4.positions.length) M.push({ x: t4.x + g / 2, y: t4.y + g / 2, sort: 0.66 + 0.33 * l2.getFloat(), stage: 0 });
    else {
      const [e2] = t4.positions.splice(0, 1);
      M.push({ x: e2[0], y: e2[1], sort: 0.33 * l2.getFloat(), stage: 1 });
      for (const [r2, o2] of t4.positions) M.push({ x: r2, y: o2, sort: 0.33 + 0.33 * l2.getFloat(), stage: 2 });
    }
  }
  M.sort((t4, e2) => t4.sort - e2.sort);
  for (const { x: o, y: k, stage: v } of M) {
    if (s3.length >= t3.maxNumberOfStreamlines) break;
    const i2 = t3.onlyForwardTracing ? f(1, t3, e, o, k, [r, n2], s3.length, p2) : d(t3, e, o, k, [r, n2], s3.length, l2, p2);
    i2.length < 2 || s3.push({ stage: v, vertices: i2 });
  }
  return s3;
}
function c(t3) {
  for (let e = 0; e < t3.mask.length; e++) 0 === t3.mask[e] && (t3.data[2 * e] = 0, t3.data[2 * e + 1] = 0);
}
function h(t3, e) {
  const r = u(e.data, e.width, e.height, t3.smoothing);
  if (t3.interpolate) {
    return (t4, o) => {
      const n2 = Math.floor(t4), i = Math.floor(o);
      if (n2 < 0 || n2 >= e.width) return [0, 0];
      if (i < 0 || i >= e.height) return [0, 0];
      const a = t4 - n2, s3 = o - i, l2 = n2, c2 = i, h2 = n2 < e.width - 1 ? n2 + 1 : n2, f2 = i < e.height - 1 ? i + 1 : i, d2 = r[2 * (c2 * e.width + l2)], u2 = r[2 * (c2 * e.width + h2)], m2 = r[2 * (f2 * e.width + l2)], p2 = r[2 * (f2 * e.width + h2)], w2 = r[2 * (c2 * e.width + l2) + 1], g = r[2 * (c2 * e.width + h2) + 1];
      return [(d2 * (1 - s3) + m2 * s3) * (1 - a) + (u2 * (1 - s3) + p2 * s3) * a, (w2 * (1 - s3) + r[2 * (f2 * e.width + l2) + 1] * s3) * (1 - a) + (g * (1 - s3) + r[2 * (f2 * e.width + h2) + 1] * s3) * a];
    };
  }
  return (t4, o) => {
    const n2 = Math.round(t4), i = Math.round(o);
    return n2 < 0 || n2 >= e.width || i < 0 || i >= e.height ? [0, 0] : [r[2 * (i * e.width + n2)], r[2 * (i * e.width + n2) + 1]];
  };
}
function f(t3, r, o, i, a, s3, l2, c2) {
  const h2 = [], { raster: f2, width: d2, height: u2, resolutionFactor: m2 } = c2;
  let p2 = i, w2 = a, g = t2(0), [y, x] = o(p2, w2);
  y *= r.velocityScale, x *= r.velocityScale;
  const M = Math.sqrt(y * y + x * x);
  let k, v;
  h2.push({ x: p2, y: w2, time: g, speed: M });
  for (let A = 0; A < r.verticesPerLine; A++) {
    let [i2, a2] = o(p2, w2);
    i2 *= r.velocityScale, a2 *= r.velocityScale;
    const c3 = Math.sqrt(i2 * i2 + a2 * a2);
    if (c3 < r.minSpeedThreshold) return h2;
    const y2 = t3 * i2 / c3, x2 = t3 * a2 / c3;
    p2 += y2 * r.segmentLength, w2 += x2 * r.segmentLength, r.wrapAround && (p2 = _(p2, s3[0]));
    const M2 = t3 * r.segmentLength / c3;
    if (g = t2(g + M2), Math.acos(y2 * k + x2 * v) > r.maxTurnAngle) return h2;
    if (r.collisions) {
      let t4 = Math.round(p2 * m2);
      const o2 = Math.round(w2 * m2);
      if (r.wrapAround && (t4 = _(t4, d2)), t4 < 0 || t4 > d2 - 1 || o2 < 0 || o2 > u2 - 1) return h2;
      const n2 = f2[o2 * d2 + t4];
      if (-1 !== n2 && n2 !== l2) return h2;
      f2[o2 * d2 + t4] = l2;
    }
    h2.push({ x: p2, y: w2, time: g, speed: c3 }), k = y2, v = x2;
  }
  return h2;
}
function d(t3, e, r, o, n2, i, a, s3) {
  const l2 = Math.round((0.2 + 0.6 * a.getFloat()) * t3.verticesPerLine), c2 = t3.verticesPerLine - l2, h2 = f(-1, __spreadProps(__spreadValues({}, t3), { verticesPerLine: c2 }), e, r, o, n2, i, s3), d2 = f(1, __spreadProps(__spreadValues({}, t3), { verticesPerLine: l2 }), e, r, o, n2, i, s3), u2 = h2.reverse();
  u2.splice(-1, 1);
  return u2.concat(d2);
}
function u(t3, e, r, o) {
  if (0 === o) return t3;
  const n2 = Math.round(3 * o), i = new Array(2 * n2 + 1);
  let a = 0;
  for (let c2 = -n2; c2 <= n2; c2++) {
    const t4 = Math.exp(-c2 * c2 / (o * o));
    i[c2 + n2] = t4, a += t4;
  }
  for (let c2 = -n2; c2 <= n2; c2++) i[c2 + n2] /= a;
  const s3 = new Float32Array(t3.length);
  for (let c2 = 0; c2 < r; c2++) for (let r2 = 0; r2 < e; r2++) {
    let o2 = 0, a2 = 0;
    for (let s4 = -n2; s4 <= n2; s4++) {
      if (r2 + s4 < 0 || r2 + s4 >= e) continue;
      const l3 = i[s4 + n2];
      o2 += l3 * t3[2 * (c2 * e + (r2 + s4))], a2 += l3 * t3[2 * (c2 * e + (r2 + s4)) + 1];
    }
    s3[2 * (c2 * e + r2)] = o2, s3[2 * (c2 * e + r2) + 1] = a2;
  }
  const l2 = new Float32Array(t3.length);
  for (let c2 = 0; c2 < e; c2++) for (let t4 = 0; t4 < r; t4++) {
    let o2 = 0, a2 = 0;
    for (let l3 = -n2; l3 <= n2; l3++) {
      if (t4 + l3 < 0 || t4 + l3 >= r) continue;
      const h2 = i[l3 + n2];
      o2 += h2 * s3[2 * ((t4 + l3) * e + c2)], a2 += h2 * s3[2 * ((t4 + l3) * e + c2) + 1];
    }
    l2[2 * (t4 * e + c2)] = o2, l2[2 * (t4 * e + c2) + 1] = a2;
  }
  return l2;
}
async function m(t3, e, r, o, n2, l2) {
  const c2 = performance.now(), h2 = G(e.spatialReference);
  if (!h2) {
    const i = await p(t3, e, r, o, n2, l2);
    return has("esri-2d-profiler") && s2().info("I.7", "loadImagery, early exit (ms)", Math.round(performance.now() - c2)), has("esri-2d-profiler") && s2().info("I.9", "Number of parts", 1), i;
  }
  const [f2, d2] = h2.valid, u2 = d2 - f2, m2 = Math.ceil(e.width / u2), w2 = e.width / m2, g = Math.round(r / m2);
  let y = e.xmin;
  const x = [], M = performance.now();
  for (let a = 0; a < m2; a++) {
    const r2 = new z({ xmin: y, xmax: y + w2, ymin: e.ymin, ymax: e.ymax, spatialReference: e.spatialReference });
    x.push(p(t3, r2, g, o, n2, l2)), y += w2;
  }
  const k = await Promise.all(x);
  if (has("esri-2d-profiler") && s2().info("I.8", "All calls to _fetchPart (ms)", Math.round(performance.now() - M)), has("esri-2d-profiler") && s2().info("I.9", "Number of parts", k.length), 1 === k.length) return has("esri-2d-profiler") && s2().info("I.10", "loadImagery, general exit without stitching back (ms)", Math.round(performance.now() - c2)), k[0];
  const v = { data: new Float32Array(r * o * 2), mask: new Uint8Array(r * o), width: r, height: o };
  let A = 0;
  for (const i of k) {
    for (let t4 = 0; t4 < i.height; t4++) for (let e2 = 0; e2 < i.width; e2++) A + e2 >= r || (v.data[2 * (t4 * r + A + e2)] = i.data[2 * (t4 * i.width + e2)], v.data[2 * (t4 * r + A + e2) + 1] = i.data[2 * (t4 * i.width + e2) + 1], v.mask[t4 * r + A + e2] = i.mask[t4 * i.width + e2]);
    A += i.width;
  }
  return has("esri-2d-profiler") && s2().info("I.10", "loadImagery, general exit (ms)", Math.round(performance.now() - c2)), v;
}
async function p(t3, e, r, o, n2, i) {
  const a = { requestProjectedLocalDirections: true, signal: i, interpolation: "bilinear" };
  if (null != n2 && (a.timeExtent = n2), "imagery" === t3.type) {
    await t3.load({ signal: i });
    const n3 = await t3.internalFetchImage(e, r, o, a);
    if (null == n3?.pixelData?.pixelBlock) return { data: new Float32Array(r * o * 2), mask: new Uint8Array(r * o), width: r, height: o };
    return w(t3.rasterInfo.dataType, n3.pixelData.pixelBlock);
  }
  await t3.load({ signal: i });
  const s3 = await t3.fetchPixels(e, r, o, a);
  if (null == s3?.pixelBlock) return { data: new Float32Array(r * o * 2), mask: new Uint8Array(r * o), width: r, height: o };
  return w(t3.serviceRasterInfo.dataType, s3.pixelBlock);
}
function w(t3, e, o = e.width, n2 = e.height, i = 0, a = 0) {
  const s3 = e.pixels, l2 = o * n2, c2 = 2, h2 = new Float32Array(l2 * c2), f2 = e.width, d2 = (t4, e2) => t4 + i + (e2 + a) * f2, u2 = (t4, e2) => t4 + e2 * o;
  let m2;
  if (null != e.mask) if (o !== e.width || n2 !== e.height || 0 !== i || 0 !== a) {
    m2 = new Uint8Array(l2 * c2);
    const t4 = e.mask;
    for (let e2 = 0; e2 < n2; ++e2) for (let r = 0; r < o; ++r) {
      const o2 = d2(r, e2), n3 = u2(r, e2);
      m2[c2 * n3] = t4[c2 * o2], m2[c2 * n3 + 1] = t4[c2 * o2 + 1];
    }
  } else m2 = e.mask;
  else m2 = new Uint8Array(l2 * c2), m2.fill(255);
  if ("vector-uv" === t3) for (let r = 0; r < n2; ++r) for (let t4 = 0; t4 < o; ++t4) {
    const e2 = d2(t4, r), o2 = u2(t4, r);
    h2[c2 * o2] = s3[0][e2], h2[c2 * o2 + 1] = -s3[1][e2];
  }
  else if ("vector-magdir" === t3) {
    const { cos: t4, sin: e2 } = Math;
    for (let i2 = 0; i2 < n2; ++i2) for (let n3 = 0; n3 < o; ++n3) {
      const o2 = d2(n3, i2), a2 = u2(n3, i2), l3 = s3[0][o2], f3 = s(s3[1][o2]), m3 = t4(f3 - Math.PI / 2), p2 = e2(f3 - Math.PI / 2);
      h2[c2 * a2] = m3 * l3, h2[c2 * a2 + 1] = p2 * l3;
    }
  }
  return { data: h2, mask: m2, width: o, height: n2 };
}

export {
  l,
  c,
  h,
  m
};
//# sourceMappingURL=chunk-T7J5OLWV.js.map
