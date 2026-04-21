import {
  Z
} from "./chunk-GO4GO6PM.js";
import {
  $,
  A,
  C,
  L as L2,
  N as N2,
  R,
  S as S2,
  l
} from "./chunk-IP5ZPQ4J.js";
import {
  L,
  M,
  N
} from "./chunk-EJ2RGS4X.js";
import {
  u as u2,
  y as y2
} from "./chunk-PEBALSWP.js";
import {
  p2 as p,
  x,
  y
} from "./chunk-XJEMOC6M.js";
import {
  S
} from "./chunk-FAG2TZ7O.js";
import {
  e2 as e
} from "./chunk-DWF2MCID.js";
import {
  o,
  u
} from "./chunk-UXWT3ISO.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/Legend/support/relationshipRampUtils.js
var s = { HH: 315, HL: 45, LL: 135, LH: 225 };
var l2 = { 2: [["HL", "HH"], ["LL", "LH"]], 3: [["HL", "HM", "HH"], ["ML", "MM", "MH"], ["LL", "LM", "LH"]], 4: [["HL", "HM1", "HM2", "HH"], ["M2L", "M2M1", "M2M2", "M2H"], ["M1L", "M1M1", "M1M2", "M1H"], ["LL", "LM1", "LM2", "LH"]] };
function n(t) {
  if (!t) return;
  const { type: s3 } = t;
  if (s3.includes("3d")) return Z(t.symbolLayers.at(0));
  if ("simple-line" === s3) {
    const e3 = y2(t);
    return e3 && e3.color;
  }
  if ("simple-marker" === t.type && ("x" === t.style || "cross" === t.style)) {
    const e3 = y2(t);
    return e3 && e3.color;
  }
  return u2(t);
}
function H(t, o2) {
  const e3 = o2.HH.label, r = o2.LL.label, s3 = o2.HL.label, l3 = o2.LH.label;
  switch (t) {
    case "HH":
    default:
      return { top: e3, bottom: r, left: s3, right: l3 };
    case "HL":
      return { top: s3, bottom: l3, left: r, right: e3 };
    case "LL":
      return { top: r, bottom: e3, left: l3, right: s3 };
    case "LH":
      return { top: l3, bottom: s3, left: e3, right: r };
  }
}
function i(t) {
  const { focus: o2, infos: e3, numClasses: r } = t, s3 = l2[r], L4 = {};
  e3.forEach((t2) => {
    L4[t2.value] = { label: t2.label, fill: n(t2.symbol) };
  });
  const i2 = [];
  for (let l3 = 0; l3 < r; l3++) {
    const t2 = [];
    for (let o3 = 0; o3 < r; o3++) {
      const e4 = L4[s3[l3][o3]];
      t2.push(e4.fill);
    }
    i2.push(t2);
  }
  return { type: "relationship-ramp", numClasses: r, focus: o2, colors: i2, labels: H(o2, L4), rotation: u3(o2) };
}
function u3(t) {
  let o2 = s[t];
  return t && null == o2 && (o2 = s.HH), o2 || 0;
}

// node_modules/@arcgis/core/widgets/Legend/styles/support/relationshipUtils.js
var b = "esri-relationship-ramp";
var m = `${b}--diamond`;
var u4 = `${b}--square`;
var c = "http://www.w3.org/2000/svg";
var f = { diamondContainer: `${m}__container`, diamondLeftCol: `${m}__left-column`, diamondRightCol: `${m}__right-column`, diamondMidCol: `${m}__middle-column`, diamondMidColLabel: `${m}__middle-column--label`, diamondMidColRamp: `${m}__middle-column--ramp`, squareTable: `${u4}__table`, squareTableRow: `${u4}__table-row`, squareTableCell: `${u4}__table-cell`, squareTableLabel: `${u4}__table-label`, squareTableLabelLeftBottom: `${u4}__table-label--left-bottom`, squareTableLabelRightBottom: `${u4}__table-label--right-bottom`, squareTableLabelLeftTop: `${u4}__table-label--left-top`, squareTableLabelRightTop: `${u4}__table-label--right-top` };
function k(e3, a2, l3 = {}) {
  const { focus: r, labels: t } = e3, s3 = !!r, o2 = p2(e3, a2, l3), b4 = { justifyContent: "center" }, m2 = y(), u5 = l3.key ?? a2;
  return s3 ? x("div", { class: f.diamondContainer, key: `${u5}-container`, styles: b4 }, x("div", { class: f.diamondLeftCol }, m2 ? t.right : t.left), x("div", { class: f.diamondMidCol }, x("div", { class: f.diamondMidColLabel }, t.top), o2, x("div", { class: f.diamondMidColLabel }, t.bottom)), x("div", { class: f.diamondRightCol }, m2 ? t.left : t.right)) : x("div", { class: f.squareTable, key: `${u5}-container` }, x("div", { class: f.squareTableRow }, x("div", { class: p(f.squareTableCell, f.squareTableLabel, f.squareTableLabelRightBottom) }, m2 ? t.top : t.left), x("div", { class: f.squareTableCell }), x("div", { class: p(f.squareTableCell, f.squareTableLabel, f.squareTableLabelLeftBottom) }, m2 ? t.left : t.top)), x("div", { class: f.squareTableRow }, x("div", { class: f.squareTableCell }), o2, x("div", { class: f.squareTableCell })), x("div", { class: f.squareTableRow }, x("div", { class: p(f.squareTableCell, f.squareTableLabel, f.squareTableLabelRightTop) }, m2 ? t.right : t.bottom), x("div", { class: f.squareTableCell }), x("div", { class: p(f.squareTableCell, f.squareTableLabel, f.squareTableLabelLeftTop) }, m2 ? t.bottom : t.right)));
}
function h(e3, a2, l3) {
  const r = `${l3}_arrowStart`, t = `${l3}_arrowEnd`, s3 = "left" === e3, o2 = { markerStart: null, markerEnd: null };
  switch (a2) {
    case "HL":
      s3 ? o2.markerStart = `url(#${t})` : o2.markerEnd = `url(#${r})`;
      break;
    case "LL":
      o2.markerStart = `url(#${t})`;
      break;
    case "LH":
      s3 ? o2.markerEnd = `url(#${r})` : o2.markerStart = `url(#${t})`;
      break;
    default:
      o2.markerEnd = `url(#${r})`;
  }
  return o2;
}
function p2(i2, d2, b4 = {}) {
  const { focus: m2, numClasses: u5, colors: k4, rotation: p3 } = i2, { opacity: T, cssEffectFilter: _, ariaLabel: q } = b4, $2 = b4.size ?? 60, g3 = !!m2, L4 = Math.sqrt($2 ** 2 + $2 ** 2) + (g3 ? 0 : 5), C2 = [], v = [], w2 = [], y3 = ($2 || 75) / u5;
  for (let t = 0; t < u5; t++) {
    const s3 = t * y3;
    for (let i3 = 0; i3 < u5; i3++) {
      const n2 = i3 * y3, d3 = $(k4[t][i3]), b5 = A(null), m3 = { type: "rect", x: n2, y: s3, width: y3, height: y3 }, u6 = N2(d3);
      u6 && C2.push(u6);
      const c2 = S2(m3, d3.fill, b5, null);
      c2 && v.push(c2), w2.push(L2(m3));
    }
  }
  const R3 = 15, x3 = 15, E = 10;
  let M2 = null;
  g3 || (M2 = "margin: -15px -15px -18px -15px");
  const S4 = h("left", m2, d2), B = h("right", m2, d2), H2 = R(w2), W = C(H2, L4, L4, 0, false, p3, false), j2 = C(H2, L4, L4, 0, false, g3 ? -45 : null, false), U = { filter: _ ?? void 0, opacity: null == T ? "" : `${T}` };
  return x("div", { class: g3 ? f.diamondMidColRamp : f.squareTableCell, styles: U }, x("svg", { "aria-label": q, focusable: false, height: L4, role: "image", style: M2, width: L4, xmlns: c }, x("defs", null, x("marker", { id: `${d2}_arrowStart`, markerHeight: "10", markerUnits: "strokeWidth", markerWidth: "10", orient: "auto", refX: "5", refY: "5" }, x("polyline", { fill: "none", points: "0,0 5,5 0,10", stroke: "#555555", "stroke-width": "1" })), x("marker", { id: `${d2}_arrowEnd`, markerHeight: "10", markerUnits: "strokeWidth", markerWidth: "10", orient: "auto", refX: "0", refY: "5" }, x("polyline", { fill: "none", points: "5,0 0,5 5,10", stroke: "#555555", "stroke-width": "1" })), C2), x("g", { transform: W }, v), x("g", { transform: j2 }, x("line", { fill: "none", "marker-end": S4.markerEnd, "marker-start": S4.markerStart, stroke: "#555555", "stroke-width": "1", x1: -10, x2: -10, y1: $2 - R3, y2: R3 }), x("line", { fill: "none", "marker-end": B.markerEnd, "marker-start": B.markerStart, stroke: "#555555", "stroke-width": "1", x1: x3, x2: $2 - x3, y1: $2 + E, y2: $2 + E }))));
}

// node_modules/@arcgis/core/symbols/support/symbolUtils.js
var d = null;
var b3 = [255, 255, 255];
function g2(e3, t) {
  return Math.floor(Math.random() * (t - e3 + 1) + e3);
}
function w(e3, t, l3) {
  const { backgroundColor: a2, outline: i2, dotSize: r } = e3, s3 = l3?.swatchSize || 22, o2 = 0.8, n2 = Math.round(s3 * s3 / Math.max(r, 0.5) ** 2 * o2), c2 = window.devicePixelRatio, u5 = document.createElement("canvas"), p3 = s3 * c2;
  u5.width = p3, u5.height = p3, u5.style.width = u5.width / c2 + "px", u5.style.height = u5.height / c2 + "px";
  const f2 = u5.getContext("2d");
  if (a2 && (f2.fillStyle = a2.toCss(true), f2.fillRect(0, 0, p3, p3), f2.fill()), f2.fillStyle = t?.toCss(true) ?? "", d && d.length / 2 === n2) for (let h2 = 0; h2 < 2 * n2; h2 += 2) {
    const e4 = d[h2], t2 = d[h2 + 1];
    f2.fillRect(e4, t2, r * c2, r * c2), f2.fill();
  }
  else {
    d = [];
    for (let e4 = 0; e4 < 2 * n2; e4 += 2) {
      const e5 = g2(0, p3), t2 = g2(0, p3);
      d.push(e5, t2), f2.fillRect(e5, t2, r * c2, r * c2), f2.fill();
    }
  }
  i2 && (i2.color && (f2.strokeStyle = i2.color.toCss(true)), f2.lineWidth = i2.width, f2.strokeRect(0, 0, p3, p3));
  const y3 = new Image(s3, s3);
  return y3.src = u5.toDataURL(), y3.ariaLabel = l3?.ariaLabel ?? null, y3.alt = l3?.ariaLabel ?? "", y3;
}
function S3(e3, t = {}) {
  const l3 = t.radius || 40, a2 = 2 * Math.PI * l3, i2 = e3.length, o2 = a2 / i2, n2 = [], c2 = y2(t.outline);
  null != c2?.width && (c2.width *= 2), (c2 || t.backgroundColor) && n2.push({ shape: { type: "circle", cx: l3, cy: l3, r: l3 }, fill: t.backgroundColor, stroke: c2, offset: [0, 0] });
  const u5 = t.values, p3 = u5?.length === i2 && 100 === u5.reduce((e4, t2) => e4 + t2, 0), f2 = [0];
  for (let r = 0; r < i2; r++) {
    let t2 = null;
    p3 && (t2 = u5[r] * a2 / 100, f2.push(t2 + f2[r])), n2.push({ shape: { type: "circle", cx: l3, cy: l3, r: l3 / 2 }, fill: [0, 0, 0, 0], stroke: { width: l3, dashArray: `${(t2 ?? o2) / 2} ${a2}`, dashoffset: "-" + (p3 ? f2[r] / 2 : r * (o2 / 2)), color: e3[r] }, offset: [0, 0] });
  }
  let y3 = null;
  const h2 = 2 * l3 + (c2?.width || 0), m2 = t.holePercentage;
  if (m2) {
    c2 && n2.push({ shape: { type: "circle", cx: l3, cy: l3, r: l3 * m2 }, fill: null, stroke: c2, offset: [0, 0] });
    const e4 = h2 / 2;
    y3 = [[{ shape: { type: "circle", cx: e4, cy: e4, r: e4 }, fill: b3, stroke: c2 ? __spreadProps(__spreadValues({}, c2), { color: b3 }) : null, offset: [0, 0] }, { shape: { type: "circle", cx: e4, cy: e4, r: l3 * m2 }, fill: [0, 0, 0], stroke: null, offset: [0, 0] }]];
  }
  return l([n2], [h2, h2], { cssEffectFilter: t.cssEffectFilter, ignoreStrokeWidth: true, masking: y3, rotations: [-90], ariaLabel: t.ariaLabel });
}
function V(e3, t = {}) {
  const l3 = 24, a2 = 75, i2 = "horizontal" === t.align, r = i2 ? a2 : l3, s3 = i2 ? l3 : a2, o2 = t.width ?? r, n2 = t.height ?? s3, c2 = t.gradient ?? true, u5 = window.devicePixelRatio, p3 = o2 * u5, f2 = n2 * u5, y3 = document.createElement("canvas");
  y3.width = p3, y3.height = f2, y3.ariaLabel = t.ariaLabel ?? null, y3.style.width = `${o2}px`, y3.style.height = `${n2}px`;
  const h2 = y3.getContext("2d"), m2 = i2 ? p3 : 0, d2 = i2 ? 0 : f2;
  if (c2) {
    const t2 = h2.createLinearGradient(0, 0, m2, d2), l4 = e3.length, a3 = 1 === l4 ? 0 : 1 / (l4 - 1);
    e3.forEach((e4, l5) => t2.addColorStop(l5 * a3, e4.toString())), h2.fillStyle = t2, h2.fillRect(0, 0, p3, f2);
  } else {
    const t2 = i2 ? p3 / e3.length : p3, l4 = i2 ? f2 : f2 / e3.length;
    let a3 = 0, r2 = 0;
    for (const s4 of e3) h2.fillStyle = s4.toString(), h2.fillRect(a3, r2, t2, l4), a3 = i2 ? a3 + t2 : 0, r2 = i2 ? 0 : r2 + l4;
  }
  const b4 = document.createElement("div");
  return b4.style.width = `${o2}px`, b4.style.height = `${n2}px`, x2(b4, t?.cssEffectFilter), b4.appendChild(y3), b4;
}
function k3(e3) {
  const t = e3.match(/drop-shadow\(\s*([^\s]+)\s+[^\s]+\s+[^\s]+\s+.+?\)/);
  return t ? t[1] : null;
}
function x2(l3, a2) {
  if (!a2) return;
  l3.style.filter = a2;
  const i2 = k3(a2);
  if (i2) {
    const a3 = u(o(i2));
    a3 < 0 ? l3.style.marginLeft = `${Math.abs(a3)}px` : l3.style.marginRight = `${a3}px`;
  }
}
async function F(e3, t) {
  switch (e3.type) {
    case "web-style": {
      const { previewWebStyleSymbol: l3 } = await import("./previewWebStyleSymbol-U3ZCGSQT.js");
      return l3(e3, F, t);
    }
    case "label-3d":
    case "line-3d":
    case "mesh-3d":
    case "point-3d":
    case "polygon-3d": {
      const { previewSymbol3D: l3 } = await import("./previewSymbol3D-DBYQNEQP.js");
      return l3(e3, t);
    }
    case "simple-marker":
    case "simple-line":
    case "simple-fill":
    case "picture-marker":
    case "picture-fill":
    case "text": {
      const { previewSymbol2D: l3 } = await import("./previewSymbol2D-2RXLVB6S.js");
      return l3(e3, t);
    }
    case "cim": {
      const { previewCIMSymbol: l3 } = await import("./previewCIMSymbol-VXQN6E72.js");
      return l3(e3, t);
    }
    default:
      return;
  }
}
function L3(e3) {
  return e3 && void 0 !== e3.opacity ? e3.opacity * ("parent" in e3 ? L3(e3.parent) : 1) : 1;
}
async function R2(e3, t) {
  if (!e3) return;
  const l3 = e3.sourceLayer, a2 = (null != t && t.useSourceLayer ? l3 : e3.layer) ?? l3, r = t?.ignoreOpacity ? 1 : L3(a2);
  if (null != e3.symbol && (null == t || true !== t.ignoreGraphicSymbol)) {
    const l4 = "web-style" === e3.symbol.type ? await e3.symbol.fetchSymbol(__spreadProps(__spreadValues({}, t), { acceptedFormats: t?.webStyleAcceptedFormats, cache: t?.webStyleCache })) : e3.symbol.clone();
    return L(l4, null, { add: r }), l4;
  }
  const s3 = t?.renderer ?? I(a2);
  let o2 = s3 && "getSymbolAsync" in s3 ? await s3.getSymbolAsync(e3, t) : null;
  if (!o2) return;
  if (o2 = "web-style" === o2.type ? await o2.fetchSymbol(__spreadProps(__spreadValues({}, t), { acceptedFormats: t?.webStyleAcceptedFormats, cache: t?.webStyleCache })) : o2.clone(), !(s3 && "visualVariables" in s3 && s3.visualVariables?.length && j(o2))) return L(o2, null, { add: r }), o2;
  if ("arcadeRequiredForVisualVariables" in s3 && s3.arcadeRequiredForVisualVariables && null == t?.arcade) {
    const e4 = __spreadValues({}, t);
    e4.arcade = await e(), t = e4;
  }
  const { getColor: n2, getOpacity: f2, getAllSizes: y3, getRotationAngle: h2 } = await import("./visualVariableUtils-3ETGTKBA.js"), m2 = [], d2 = [], b4 = [], g3 = [];
  for (const i2 of s3.visualVariables) switch (i2.type) {
    case "color":
      m2.push(i2);
      break;
    case "opacity":
      d2.push(i2);
      break;
    case "rotation":
      g3.push(i2);
      break;
    case "size":
      i2.target || b4.push(i2);
  }
  const w2 = !!m2.length && m2[m2.length - 1], S4 = w2 ? n2(w2, e3, t) : null, v = !!t?.ignoreOpacity, V2 = !!d2.length && d2[d2.length - 1], k4 = V2 ? f2(V2, e3, t) : null;
  if (L(o2, S4, v ? void 0 : { override: k4, add: r }), b4.length && true !== t?.ignoreSizeVariables) {
    const l4 = y3(b4, e3, t);
    await M(o2, l4);
  }
  if (true !== t?.ignoreRotationVariables) for (const i2 of g3) N(o2, h2(i2, e3, t), i2.axis);
  return o2;
}
function j(e3) {
  return !S(e3) || "water" !== e3.symbolLayers.at(0)?.type;
}
function I(e3) {
  if (e3) return "renderer" in e3 ? e3.renderer : void 0;
}

export {
  k,
  i,
  u3 as u,
  w,
  S3 as S,
  V,
  F,
  R2 as R
};
//# sourceMappingURL=chunk-EAVRFZL7.js.map
