import {
  n
} from "./chunk-JXVTDZSX.js";
import "./chunk-WF6LRU5G.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-BUWCRCXG.js";
import {
  c
} from "./chunk-FNKAG77W.js";
import {
  h,
  t as t2
} from "./chunk-VOXS3ZSO.js";
import {
  l
} from "./chunk-MYSRLBUK.js";
import {
  f,
  g as g2,
  u as u2,
  y
} from "./chunk-C4K5HSDQ.js";
import "./chunk-52GYCIV3.js";
import {
  I
} from "./chunk-HXLK47WT.js";
import "./chunk-JTTFG3NZ.js";
import "./chunk-JXCCENBV.js";
import "./chunk-P3OSPFTR.js";
import "./chunk-EB3674W2.js";
import {
  U,
  k
} from "./chunk-WOCPFOF3.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-YJ3MZFAR.js";
import "./chunk-7H3HYUBR.js";
import "./chunk-I7B74Y7B.js";
import "./chunk-H4RHQ5YI.js";
import "./chunk-BRTBYVJG.js";
import {
  s
} from "./chunk-WZW6KMAU.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import {
  t
} from "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import "./chunk-2F6BRQJJ.js";
import {
  g
} from "./chunk-EKLJIMB3.js";
import {
  u
} from "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
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
import {
  r3 as r
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/symbols/support/previewSymbol2D.js
var y2 = "picture-fill";
var w = "picture-marker";
var x = "simple-fill";
var b = "simple-line";
var v = "simple-marker";
var M = "text";
var k2 = "Aa";
var z = 22;
var L = 120;
var S = 80;
var j = 50;
var C = 225;
var B = document.createElement("canvas");
function P(t3, e, o) {
  const { extent: i } = t3;
  if (!i) return "";
  const n2 = i.width || 1, h2 = i.height || 1;
  if ("polygon" === t3.type) {
    const l2 = t3.clone();
    t(l2) && (l2.rings = n(l2, e, o, i).rings), U({ originPosition: "upperLeft", scale: [n2 / e, h2 / o], translate: [i.xmin, i.ymax] }, l2, l2);
    let c2 = "";
    for (let t4 = 0; t4 < l2.rings.length; t4++) {
      const e2 = l2.rings[t4];
      for (let t5 = 0; t5 < e2.length; t5++) {
        const o2 = e2[t5][0], i2 = e2[t5][1], n3 = 0 === t5 ? "M" : "l", a = t5 === e2.length - 1 ? " Z" : "";
        c2 += `${"" !== c2 ? " " : ""}${n3}${o2.toString()} ${i2.toString()}${a}`;
      }
    }
    return c2;
  }
  if ("polyline" === t3.type) {
    const a = t3.clone();
    t(a) && (a.paths = n(a, e, o, i).paths), k({ originPosition: "upperLeft", scale: [n2 / e, h2 / o], translate: [i.xmin, i.ymax] }, a, a);
    let c2 = "";
    for (let t4 = 0; t4 < a.paths.length; t4++) {
      const e2 = a.paths[t4];
      for (let t5 = 0; t5 < e2.length; t5++) {
        const o2 = e2[t5][0], i2 = e2[t5][1];
        c2 += `${"" !== c2 ? " " : ""}${0 === t5 ? "M" : "l"}${o2.toString()} ${i2.toString()}`;
      }
    }
    return c2;
  }
  return "";
}
function $(t3, e) {
  const o = B.getContext("2d"), i = [];
  e && (e.weight && i.push(e.weight), e.size && i.push(e.size + "px"), e.family && i.push(e.family)), o.font = i.join(" ");
  const { width: n2, actualBoundingBoxLeft: a, actualBoundingBoxRight: l2, actualBoundingBoxAscent: s2, actualBoundingBoxDescent: r2 } = o.measureText(t3);
  return { width: Math.ceil(Math.max(n2, a + l2)), height: Math.ceil(s2 + r2), x: Math.floor(a), y: Math.floor((s2 - r2) / 2) };
}
function E(t3) {
  const e = t3?.size;
  return { width: null != e && "object" == typeof e && "width" in e ? u(e.width) : null, height: null != e && "object" == typeof e && "height" in e ? u(e.height) : null };
}
async function U2(t3, e) {
  const o = e.fill, i = t3.color;
  if ("pattern" === o?.type && i && t3.type !== y2) {
    const t4 = await f(o.src, i.toCss(true));
    o.src = t4, e.fill = o;
  }
}
async function F(t3, e, o, n2) {
  if (!("font" in t3) || !t3.font || "text" !== e.shape.type) return;
  try {
    await c(t3.font);
  } catch {
  }
  const { width: a, height: l2 } = E(n2);
  if (!/[\uE600-\uE6FF]/.test(e.shape.text)) {
    const { width: i, height: s2, x: r2, y: h2 } = $(e.shape.text, { weight: e.font?.weight, size: e.font?.size, family: e.font?.family });
    o[0] = a ?? i, o[1] = l2 ?? s2, e.shape.x = r2, e.shape.y = h2;
    let c2 = "angle" in t3 ? t3.angle : null;
    if (null != n2?.rotation && (c2 = (c2 ?? 0) + n2.rotation), c2) {
      const t4 = c2 * (Math.PI / 180), e2 = Math.abs(Math.sin(t4)), i2 = Math.abs(Math.cos(t4));
      o[1] = o[0] * e2 + o[1] * i2;
    }
  }
}
function A(t3, e, o, i, a) {
  if (null != t3.haloColor && null != t3.haloSize) {
    a.masking ??= o.map(() => []);
    const l2 = u(t3.haloSize);
    i[0] += l2, i[1] += l2, o.unshift([__spreadProps(__spreadValues({}, e), { fill: null, stroke: { color: t3.haloColor, width: 2 * l2, join: "round", cap: "round" } })]), a.masking.unshift([{ shape: { type: "rect", x: 0, y: 0, width: i[0] + 2 * s, height: i[1] + 2 * s }, fill: [255, 255, 255], stroke: null }, __spreadProps(__spreadValues({}, e), { fill: [0, 0, 0, 0], stroke: null })]);
  }
  null == t3.backgroundColor && null == t3.borderLineColor || (i[0] += 2 * s, i[1] += 2 * s, o.unshift([{ shape: { type: "rect", x: 0, y: 0, width: i[0], height: i[1] }, fill: t3.backgroundColor, stroke: { color: t3.borderLineColor, width: u(t3.borderLineSize) } }]), a.masking?.unshift([]));
}
function Z(t3, e) {
  return t3 > e ? "dark" : "light";
}
function D(t3, e) {
  const o = "number" == typeof e?.size ? e?.size : null, i = null != o ? u(o) : null, a = null != e?.maxSize ? u(e.maxSize) : null;
  let l2 = "angle" in t3 ? t3.angle : null;
  null != e?.rotation && (l2 = (l2 ?? 0) + e.rotation);
  const s2 = u2(t3);
  let r2 = y(t3);
  "dark" !== T(t3, 245) || e?.ignoreWhiteSymbols || (r2 = __spreadProps(__spreadValues({ width: 0.75 }, r2), { color: "#bdc3c7" }));
  let p = null;
  const d = { shape: null, fill: s2, stroke: r2, offset: [0, 0] };
  r2?.width && (r2.width = Math.min(r2.width, S));
  const f2 = r2?.width || 0;
  let g3 = null != e?.size && (null == e?.scale || e?.scale), C2 = 0, B2 = 0, U3 = false;
  switch (t3.type) {
    case v: {
      const o2 = t3.style, { width: s3, height: r3 } = E(e);
      let h2 = s3 === r3 && null != s3 ? s3 : null != i ? i : Math.min(u(t3.size), a || L);
      if (true === e?.useMarkerSymbolSize && null !== s3 && null !== r3) {
        const e2 = Math.min(u(t3.size), a || L);
        h2 = e2 > s3 && e2 > r3 ? Math.min(s3, r3) : e2;
      }
      switch (C2 = h2, B2 = h2, o2) {
        case "circle":
          d.shape = { type: "circle", cx: 0, cy: 0, r: 0.5 * h2 }, g3 || (C2 += f2, B2 += f2);
          break;
        case "cross":
          d.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * B2] }, { command: "L", values: [C2, 0.5 * B2] }, { command: "M", values: [0.5 * C2, 0] }, { command: "L", values: [0.5 * C2, B2] }] };
          break;
        case "diamond":
          d.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * B2] }, { command: "L", values: [0.5 * C2, 0] }, { command: "L", values: [C2, 0.5 * B2] }, { command: "L", values: [0.5 * C2, B2] }, { command: "Z", values: [] }] }, g3 || (C2 += f2, B2 += f2);
          break;
        case "square":
          d.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [C2, 0] }, { command: "L", values: [C2, B2] }, { command: "L", values: [0, B2] }, { command: "Z", values: [] }] }, g3 || (C2 += f2, B2 += f2), l2 && (U3 = true);
          break;
        case "triangle":
          d.shape = { type: "path", path: [{ command: "M", values: [0.5 * C2, 0] }, { command: "L", values: [C2, B2] }, { command: "L", values: [0, B2] }, { command: "Z", values: [] }] }, g3 || (C2 += f2, B2 += f2), l2 && (U3 = true);
          break;
        case "x":
          d.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [C2, B2] }, { command: "M", values: [C2, 0] }, { command: "L", values: [0, B2] }] }, l2 && (U3 = true);
          break;
        case "path":
          d.shape = { type: "path", path: t3.path || "" }, g3 || (C2 += f2, B2 += f2), l2 && (U3 = true), g3 = true;
      }
      break;
    }
    case b: {
      const { width: t4, height: o2 } = E(e), n2 = g2(r2).reduce((t5, e2) => t5 + e2, 0), a2 = n2 && Math.ceil(j / n2), l3 = o2 ?? i ?? f2, s3 = t4 ?? (n2 * a2 || j);
      if (g3 = true, "polyline" === e?.geometry?.type && e?.geometry?.extent) {
        C2 = s3, B2 = o2 ?? C2;
        const t5 = 1e3, i2 = 0.15 * t5;
        p = [C2, B2], B2 = p[0] > p[1] ? t5 * p[1] / p[0] : t5, C2 = p[0] > p[1] ? t5 : t5 * p[0] / p[1], r2?.width && (r2.width = r2.width * t5 / (p[1] > p[0] ? p[1] : p[0]), r2.width > i2 && (r2.width = i2)), d.shape = { type: "path", path: P(e.geometry, C2, B2) };
      } else C2 = null != e?.maxSize ? Math.min(s3, e.maxSize) : s3, B2 = l3, r2 && (r2.width = l3), d.shape = { type: "path", path: [{ command: "M", values: [l3 / 2, B2 / 2] }, { command: "L", values: [C2 - l3 / 2, B2 / 2] }] };
      break;
    }
    case y2:
    case x: {
      const t4 = "object" == typeof e?.symbolConfig && !!e?.symbolConfig?.isSquareFill, { width: o2, height: n2 } = E(e);
      C2 = !t4 && o2 !== n2 || null == o2 ? null != i ? i : z : o2, B2 = !t4 && o2 !== n2 || null == n2 ? C2 : n2, g3 || (C2 += f2, B2 += f2), g3 = true, e?.geometry?.extent && "polygon" === e?.geometry?.type ? (p = [C2, B2], B2 = p[0] > p[1] ? 1e3 * p[1] / p[0] : 1e3, C2 = p[0] > p[1] ? 1e3 : 1e3 * p[0] / p[1], d.shape = { type: "path", path: P(e.geometry, C2, B2) }) : d.shape = t4 ? { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [C2, 0] }, { command: "L", values: [C2, B2] }, { command: "L", values: [0, B2] }, { command: "L", values: [0, 0] }, { command: "Z", values: [] }] } : t2.fill[0];
      break;
    }
    case w: {
      const o2 = Math.min(u(t3.width), a || L), s3 = Math.min(u(t3.height), a || L), { width: r3, height: h2 } = E(e), c2 = r3 === h2 && null != r3 ? r3 : null != i ? i : Math.max(o2, s3), m = t3.width / t3.height;
      C2 = m <= 1 ? Math.ceil(c2 * m) : c2, B2 = m <= 1 ? c2 : Math.ceil(c2 / m), d.shape = { type: "image", x: -Math.round(C2 / 2), y: -Math.round(B2 / 2), width: C2, height: B2, src: t3.url || "" }, l2 && (U3 = true);
      break;
    }
    case M: {
      const o2 = t3, l3 = e?.overrideText || o2.text || k2, s3 = o2.font, { width: r3, height: h2 } = E(e), c2 = null != h2 ? h2 : null != i ? i : Math.min(u(s3.size), a || L), { width: m, height: p2 } = $(l3, { weight: s3.weight, size: c2, family: s3.family }), u3 = /[\uE600-\uE6FF]/.test(l3);
      C2 = r3 ?? (u3 ? c2 : m), B2 = u3 ? c2 : p2;
      let f3 = 0.5 * (u3 ? c2 : p2);
      u3 && (f3 += 5), d.shape = { type: "text", text: l3, x: o2.xoffset || 0, y: o2.yoffset || f3, align: "middle", alignBaseline: o2.verticalAlignment, decoration: s3 && s3.decoration, rotated: o2.rotated, kerning: o2.kerning }, d.font = s3 && { size: c2, style: s3.style, decoration: s3.decoration, weight: s3.weight, family: s3.family };
      break;
    }
  }
  return { shapeDescriptor: d, size: [C2, B2], outputSize: p, renderOptions: { node: e?.node, scale: g3, opacity: e?.opacity, rotations: [l2], useRotationSize: U3, cssEffectFilter: e?.cssEffectFilter, ariaLabel: e?.ariaLabel, clipBloomEffect: e?.clipBloomEffect } };
}
async function q(t3, e) {
  const { shapeDescriptor: i, size: n2, renderOptions: a, outputSize: l2 } = D(t3, e);
  if (!i.shape) throw new r("symbolPreview: renderPreviewHTML2D", "symbol not supported.");
  await U2(t3, i), await F(t3, i, n2, e);
  const s2 = [[i]];
  if ("object" == typeof e?.symbolConfig && e?.symbolConfig?.applyColorModulation) {
    const t4 = 0.6 * n2[0];
    s2.unshift([__spreadProps(__spreadValues({}, i), { offset: [-t4, 0], fill: h(i.fill, -0.3) })]), s2.push([__spreadProps(__spreadValues({}, i), { offset: [t4, 0], fill: h(i.fill, 0.3) })]), n2[0] += 2 * t4, a.scale = false;
  }
  "text" === t3.type && A(t3, i, s2, n2, a);
  const r2 = l(s2, n2, a);
  if (l2 && r2) {
    const t4 = "img" === r2.nodeName.toLowerCase() ? r2 : r2.firstChild;
    "svg" === t4.nodeName.toLowerCase() && t4.setAttribute("viewBox", `0 0 ${n2[0].toString()} ${n2[1].toString()}`), t4.setAttribute("width", l2[0].toString()), t4.setAttribute("height", l2[1].toString()), l2.length > 2 && (t4.style.setProperty("padding-left", l2[2]?.toString() + "px"), t4.style.setProperty("padding-right", l2[2]?.toString() + "px"), t4.style.setProperty("padding-top", l2[3]?.toString() + "px"), t4.style.setProperty("padding-bottom", l2[3]?.toString() + "px"), t4.style.setProperty("box-sizing", "border-box"));
  }
  return r2;
}
function T(o, i = C) {
  const n2 = u2(o), a = y(o), l2 = !n2 || "type" in n2 ? null : new g(n2), s2 = a?.color ? new g(a?.color) : null, r2 = l2 ? Z(I(l2), i) : null, m = s2 ? Z(I(s2), i) : null;
  return m ? r2 ? r2 === m ? r2 : i >= C ? "light" : "dark" : m : r2;
}
export {
  T as getContrastingBackgroundTheme,
  D as getRenderSymbolParameters,
  q as previewSymbol2D
};
//# sourceMappingURL=previewSymbol2D-QD643RJX.js.map
