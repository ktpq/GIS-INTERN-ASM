import {
  ft
} from "./chunk-3EE7FDFG.js";
import {
  o2 as o
} from "./chunk-EB3674W2.js";
import {
  i,
  r
} from "./chunk-253Z6EVN.js";
import {
  n2 as n
} from "./chunk-TX75HZKJ.js";

// node_modules/@arcgis/core/symbols/cim/constants.js
var e = 15.5;
var i2 = 4;
var o2 = 64;
var r2 = 1024;
var l = { outlineWidth: 0.75, referenceWidth: 0.75, cap: o.CIMSolidStroke.capstyle, join: o.CIMSolidStroke.joinstyle, miterLimit: o.CIMSolidStroke.miterlimit };

// node_modules/@arcgis/core/core/floatRGBA.js
function o3(o4, n2, r4 = 0) {
  const f3 = r(o4, 0, l2);
  for (let t = 0; t < 4; t++) n2[r4 + t] = Math.floor(256 * i3(f3 * e2[t]));
}
function r3(t, o4 = 0) {
  let n2 = 0;
  for (let r4 = 0; r4 < 4; r4++) n2 += t[o4 + r4] * f[r4];
  return n2;
}
var e2 = [1, 256, 65536, 16777216];
var f = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296];
var l2 = r3(new Uint8ClampedArray([255, 255, 255, 255]));
var a = r3(new Uint8ClampedArray([255, 255, 255, 0]));
function i3(t) {
  return t - Math.floor(t);
}

// node_modules/@arcgis/core/symbols/cim/rasterizingUtils.js
var i4 = () => n.getLogger("esri.symbols.cim.rasterizingUtils");
var c = 32;
var h = (t) => "vertical" === t || "horizontal" === t || "cross" === t || "esriSFSCross" === t || "esriSFSVertical" === t || "esriSFSHorizontal" === t;
function f2(t, o4, n2) {
  const r4 = o4.style, a2 = i(Math.ceil(n2)), l3 = h(r4) ? 8 * a2 : 16 * a2, s = 2 * a2;
  t.width = l3, t.height = l3;
  const i5 = t.getContext("2d");
  i5.strokeStyle = "#ffffff", i5.lineWidth = a2, i5.beginPath(), "vertical" !== r4 && "cross" !== r4 && "esriSFSCross" !== r4 && "esriSFSVertical" !== r4 || (i5.moveTo(l3 / 2, -s), i5.lineTo(l3 / 2, l3 + s)), "horizontal" !== r4 && "cross" !== r4 && "esriSFSCross" !== r4 && "esriSFSHorizontal" !== r4 || (i5.moveTo(-s, l3 / 2), i5.lineTo(l3 + s, l3 / 2)), "backward-diagonal" !== r4 && "diagonal-cross" !== r4 && "esriSFSDiagonalCross" !== r4 && "esriSFSBackwardDiagonal" !== r4 || (i5.moveTo(-s, -s), i5.lineTo(l3 + s, l3 + s), i5.moveTo(l3 - s, -s), i5.lineTo(l3 + s, s), i5.moveTo(-s, l3 - s), i5.lineTo(s, l3 + s)), "forward-diagonal" !== r4 && "diagonal-cross" !== r4 && "esriSFSForwardDiagonal" !== r4 && "esriSFSDiagonalCross" !== r4 || (i5.moveTo(l3 + s, -s), i5.lineTo(-s, l3 + s), i5.moveTo(s, -s), i5.lineTo(-s, s), i5.moveTo(l3 + s, l3 - s), i5.lineTo(l3 - s, l3 + s)), i5.stroke();
  const c2 = i5.getImageData(0, 0, t.width, t.height), f3 = new Uint8Array(c2.data);
  let u2;
  for (let e3 = 0; e3 < f3.length; e3 += 4) u2 = f3[e3 + 3] / 255, f3[e3] = f3[e3] * u2, f3[e3 + 1] = f3[e3 + 1] * u2, f3[e3 + 2] = f3[e3 + 2] * u2;
  return [f3, t.width, t.height, a2];
}
function u(o4) {
  o4.length % 2 == 1 && (o4 = [...o4, ...o4]);
  let e3 = 0, a2 = o4.length - 1;
  for (; e3 < o4.length && 0 === o4[e3]; ) e3++;
  for (; a2 >= 0 && 0 === o4[a2]; ) a2--;
  let l3 = 0;
  const s = [];
  for (let t = e3; t <= a2; t++) 0 === o4[t] ? l3++ : 0 === l3 ? s.push(o4[t]) : 1 & l3 ? (s[s.length - 1] += o4[t], l3 = 0) : (s.push(o4[t]), l3 = 0);
  if (l3 = e3 + o4.length - 1 - a2, (o4 = s).length <= 1) return 0 === o4.length || e3 % 2 == 0 ? [new Uint8Array(), 0, 1] : [new Uint8Array([255, 255, 255, 255]), 1, 1];
  const i5 = o4.reduce((t, o5) => t + o5, 0), c2 = Math.round(i5 * i2), h2 = 1, f3 = c2 * h2, u2 = new Float32Array(f3);
  let m2 = 0, g2 = 0, d2 = 0.5, p2 = e3 % 2 == 0;
  const C2 = l3 % 2 == 1;
  for (let t = 0; t < o4.length; t++) {
    for (m2 = g2, g2 += o4[t] * i2, 0 === t && C2 && (m2 -= o4[o4.length - 1] * i2), t === o4.length - 1 && C2 && (g2 += o4[0] * i2); d2 <= g2 && d2 - 0.5 < f3; ) {
      const t2 = d2 - 0.5, o5 = Math.min(Math.abs(d2 - m2), Math.abs(d2 - g2));
      u2[t2] = p2 ? -o5 : o5, d2++;
    }
    p2 = !p2;
  }
  const M2 = u2.length, x2 = new Uint8Array(4 * M2);
  for (let w2 = 0; w2 < M2; ++w2) {
    const o5 = u2[w2] / i2;
    o3(o5 / o2 * 0.5 + 0.5, x2, 4 * w2);
  }
  return [x2, c2, h2];
}
function m(o4, e3) {
  null == o4 && (o4 = []);
  const n2 = "Butt" === e3, r4 = "Square" === e3, l3 = !n2 && !r4;
  o4.length % 2 == 1 && (o4 = [...o4, ...o4]);
  const s = e, i5 = 2 * s;
  let c2 = 0;
  for (const t of o4) c2 += t;
  const h2 = Math.round(c2 * s), f3 = new Float32Array(h2 * i5), u2 = 0.5 * s;
  let m2 = 0, g2 = 0, d2 = 0.5, p2 = true;
  for (const t of o4) {
    for (m2 = g2, g2 += t * s; d2 <= g2; ) {
      let t2 = 0.5;
      for (; t2 < i5; ) {
        const o5 = (t2 - 0.5) * h2 + d2 - 0.5, e4 = l3 ? (t2 - s) * (t2 - s) : Math.abs(t2 - s);
        f3[o5] = p2 ? n2 ? Math.max(Math.max(m2 + u2 - d2, e4), Math.max(d2 - g2 + u2, e4)) : e4 : l3 ? Math.min((d2 - m2) * (d2 - m2) + e4, (d2 - g2) * (d2 - g2) + e4) : r4 ? Math.min(Math.max(d2 - m2, e4), Math.max(g2 - d2, e4)) : Math.min(Math.max(d2 - m2 + u2, e4), Math.max(g2 + u2 - d2, e4)), t2++;
      }
      d2++;
    }
    p2 = !p2;
  }
  const C2 = f3.length, M2 = new Uint8Array(4 * C2);
  for (let a2 = 0; a2 < C2; ++a2) {
    const o5 = (l3 ? Math.sqrt(f3[a2]) : f3[a2]) / s;
    o3(o5, M2, 4 * a2);
  }
  return [M2, h2, i5];
}
function g(t, o4) {
  const { colorRamp: e3, gradientType: n2 } = o4, r4 = "CIMFixedColorRamp" === e3.type, a2 = o4.interval || o.CIMGradientFill.interval;
  let s = C(e3);
  return r4 && (s = M(s, a2)), "Discrete" === n2 || r4 ? w(t, s, a2) : x(t, s);
}
var d;
function p(t, o4) {
  const { colorRamp: e3, gradientType: n2 } = o4, r4 = C(e3), a2 = "CIMFixedColorRamp" === e3.type;
  if ("Continuous" === n2 && !a2) return y(t, r4);
  const s = o4.interval ?? o.CIMGradientFill.interval;
  if (a2) {
    return y(t, M(r4, s));
  }
  const i5 = [];
  d ??= document.createElement("canvas"), S(d, r4, s, 1, 0);
  const c2 = d.getContext("2d").getImageData(0, 0, s, 1).data;
  for (let l3 = 0, h2 = 0; l3 < s; l3++, h2 = 4 * l3) {
    const t2 = [c2[h2 + 0], c2[h2 + 1], c2[h2 + 2], c2[h2 + 3]];
    i5.push({ offset: l3 / s, color: t2 }), i5.push({ offset: (l3 + 1) / s, color: t2 });
  }
  return y(t, i5);
}
function C(t) {
  const o4 = [];
  switch (t.type) {
    case "CIMPolarContinuousColorRamp":
    case "CIMLinearContinuousColorRamp": {
      "CIMPolarContinuousColorRamp" === t.type && i4().warnOnce("CIMPolarContinuousColorRamp is currently unsupported. Falling back to CIMLinearContinuousColorRamp.");
      const e3 = t;
      o4.push({ offset: 0, color: [e3.fromColor[0], e3.fromColor[1], e3.fromColor[2], e3.fromColor[3] / 255] }), o4.push({ offset: 1, color: [e3.toColor[0], e3.toColor[1], e3.toColor[2], e3.toColor[3] / 255] });
      break;
    }
    case "CIMFixedColorRamp": {
      const e3 = t, n2 = 1 / (e3.colors.length - 1);
      let r4 = 0;
      for (const t2 of e3.colors) o4.push({ offset: r4, color: [t2[0], t2[1], t2[2], t2[3] / 255] }), r4 += n2;
      break;
    }
    case "CIMMultipartColorRamp": {
      const e3 = t, n2 = e3.weights.reduce((t2, o5) => t2 + o5, 0);
      let r4 = 0;
      for (let t2 = 0; t2 < e3.colorRamps.length; t2++) {
        const a2 = e3.colorRamps[t2], l3 = e3.weights[t2], s = C(a2);
        for (const t3 of s) o4.push({ offset: (r4 + t3.offset * l3) / n2, color: t3.color });
        r4 += l3;
      }
      break;
    }
    default:
      i4().error(`Color ramp "${t.type}" currently unsupported.`);
  }
  return o4;
}
function M(t, o4) {
  const e3 = [], n2 = (t.length - 1) / (o4 - 1);
  for (let r4 = 0; r4 < o4; r4++) {
    const a2 = t[Math.round(r4 * n2)].color;
    e3.push({ offset: r4 / o4, color: a2 }), e3.push({ offset: (r4 + 1) / o4, color: a2 });
  }
  return e3;
}
function x(t, o4) {
  return S(t, o4, c, 1, ft), F(t);
}
function w(t, o4, e3) {
  return S(t, o4, e3, 1, ft), F(t);
}
function y(t, o4, e3 = 0) {
  for (const { offset: n2, color: r4 } of o4) t.addColorStop(Math.min(Math.max(n2, e3), 1 - e3), `rgba(${r4[0]}, ${r4[1]}, ${r4[2]}, ${r4[3]})`);
}
function S(t, o4, e3, n2, r4) {
  const a2 = e3 + 2 * r4;
  t.width = a2, t.height = n2;
  const l3 = (r4 + 1) / a2, s = t.getContext("2d", { willReadFrequently: true });
  if (o4.length > 0) {
    const t2 = s.createLinearGradient(0, 0, a2, n2);
    y(t2, o4, l3), s.fillStyle = t2;
  } else s.fillStyle = "rgba(128, 128, 128, 1)";
  s.fillRect(0, 0, a2, n2);
}
function F(t) {
  const { width: o4, height: e3 } = t, n2 = t.getContext("2d").getImageData(0, 0, o4, e3), r4 = new Uint8Array(n2.data);
  for (let a2 = 0; a2 < r4.length; a2 += 4) {
    const t2 = r4[a2 + 3] / 255;
    r4[a2] *= t2, r4[a2 + 1] *= t2, r4[a2 + 2] *= t2;
  }
  return [r4, o4, e3];
}
function v(t) {
  const o4 = t[0]?.[0]?.[0] ?? 0, e3 = t[0]?.[0]?.[1] ?? 0, n2 = { ymin: e3, xmin: o4, ymax: e3, xmax: o4, width: 0, height: 0 };
  for (let r4 = 0; r4 < t.length; r4++) {
    const o5 = t[r4];
    for (let t2 = 0; t2 < o5.length; t2++) {
      const e4 = o5[t2][0], r5 = o5[t2][1];
      e4 < n2.xmin && (n2.xmin = e4), e4 > n2.xmax && (n2.xmax = e4), r5 < n2.ymin && (n2.ymin = r5), r5 > n2.ymax && (n2.ymax = r5);
    }
  }
  return n2.width = Math.abs(n2.xmax - n2.xmin), n2.height = Math.abs(n2.ymax - n2.ymin), n2;
}
function T(t, o4) {
  const e3 = v(t), n2 = 0 === e3.width ? 1 : e3.width, r4 = 0 === e3.height ? 1 : e3.height, a2 = [];
  for (let l3 = 0; l3 < t.length; l3++) {
    const s = t[l3], i5 = [];
    for (let t2 = 0; t2 < s.length; t2++) {
      let a3 = Math.round(s[t2][0] - e3.xmin), l4 = Math.round(s[t2][1] - e3.ymin);
      if (a3 = o4.xmin + a3 * o4.width / n2, l4 = o4.ymin + l4 * o4.height / r4, isNaN(a3) || isNaN(l4)) throw new Error("Scaled shape has NaN values");
      i5.push([a3, l4]);
    }
    a2.push(i5);
  }
  return a2;
}
function R(t, o4, e3) {
  const n2 = [];
  for (let r4 = 0; r4 < t.length; r4++) {
    const a2 = t[r4], l3 = [];
    for (let t2 = 0; t2 < a2.length; t2++) {
      const n3 = a2[t2][0] + o4, r5 = a2[t2][1] + e3;
      if (isNaN(n3) || isNaN(r5)) throw new Error("Scaled shape has NaN values");
      l3.push([n3, r5]);
    }
    n2.push(l3);
  }
  return n2;
}

export {
  i2 as i,
  o2 as o,
  r2 as r,
  l,
  o3 as o2,
  f2 as f,
  u,
  m,
  g,
  p,
  T,
  R
};
//# sourceMappingURL=chunk-FQP6WOBG.js.map
