import {
  c as c2,
  e as e2
} from "./chunk-IT6BFYBX.js";
import {
  L,
  c,
  e,
  l as l2,
  m,
  n as n3,
  o,
  p,
  s,
  t,
  u as u2
} from "./chunk-VOXS3ZSO.js";
import {
  d as d2,
  l
} from "./chunk-3RP3KUB6.js";
import {
  d,
  h as h2
} from "./chunk-GLZN7WIE.js";
import {
  b,
  f,
  w
} from "./chunk-3T3XBNP3.js";
import {
  h
} from "./chunk-VZQXH6PD.js";
import {
  C,
  U
} from "./chunk-HXLK47WT.js";
import {
  n as n2
} from "./chunk-U5RKVLEL.js";
import {
  u
} from "./chunk-UXWT3ISO.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/symbols/support/previewSymbol3D.js
var S = 22;
var P = 120;
var U2 = 80;
var C2 = 50;
var D = 20;
function O(e3) {
  const t2 = e3.outline, l3 = null != e3.material ? e3.material.color : null, a = null != l3 ? l3.toHex() : null;
  if (null == t2 || "pattern" in t2 && null != t2.pattern && "style" === t2.pattern.type && "none" === t2.pattern.style) return "fill" === e3.type && "#ffffff" === a ? { color: "#bdc3c7", width: 0.75 } : null;
  const s2 = u(t2.size) || 0;
  return { color: "rgba(" + (null != t2.color ? t2.color.toRgba() : "255,255,255,1") + ")", width: Math.min(s2, U2), style: "pattern" in t2 && null != t2.pattern && "style" === t2.pattern.type ? w(t2.pattern.style) : null, join: "butt", cap: "patternCap" in t2 ? t2.patternCap : "butt" };
}
async function E(t2, l3) {
  if (t2.thumbnail?.url) return t2.thumbnail.url;
  if ("icon" === l3.type) {
    const e3 = l3?.resource?.href;
    if (e3) return d(l3);
  }
  const a = n2("esri/images/Legend/legend3dsymboldefault.png");
  if (t2.styleOrigin && (t2.styleOrigin.styleName || t2.styleOrigin.styleUrl)) {
    const e3 = await h(t2.styleOrigin, { portal: t2.styleOrigin.portal }).catch(() => null);
    if (e3 && "thumbnail" in e3 && e3.thumbnail?.url) return e3.thumbnail.url;
  }
  return a;
}
function q(e3, a = 1) {
  const s2 = e3.a, n4 = U(e3), r2 = n4.h, o2 = n4.s / a, i = 100 - (100 - n4.v) / a, { r: c3, g: p2, b: u3 } = C({ h: r2, s: o2, v: i });
  return [c3, p2, u3, s2];
}
function R(e3) {
  return "water" === e3.type ? null == e3.color ? null : e3.color : null == e3.material?.color ? null : e3.material.color;
}
function Z(e3, t2 = 0) {
  const l3 = R(e3);
  if (!l3) {
    if ("fill" === e3.type) return null;
    const l4 = b.r, a2 = u2(l4, t2);
    return [a2, a2, a2, 100];
  }
  const a = l3.toRgba();
  for (let s2 = 0; s2 < 3; s2++) a[s2] = u2(a[s2], t2);
  return a;
}
async function H(t2, l3) {
  const a = t2.style;
  if ("none" === a) return null;
  return { type: "pattern", x: 0, y: 0, src: await f(n2(`esri/symbols/patterns/${a}.png`), l3.toCss(true)), width: 5, height: 5 };
}
function I(e3) {
  return e3.outline ? O(e3) : { color: "rgba(0, 0, 0, 1)", width: 1.5 };
}
function N(e3, t2) {
  const l3 = R(e3);
  if (!l3) return null;
  let a = "rgba(";
  return a += u2(l3.r, t2) + ",", a += u2(l3.g, t2) + ",", a += u2(l3.b, t2) + ",", a + l3.a + ");";
}
function T(e3, t2) {
  const l3 = e3.edges;
  if (!l3 || !l3.color || !l3.size) return null;
  return { color: l3.color.toCss(true), width: Math.min(u(l3.size), t2, U2), join: "round" };
}
function F(e3, t2) {
  const l3 = N(e3, t2);
  if (!l3) return null;
  if ("pattern" in e3 && null != e3.pattern && "style" === e3.pattern.type && "none" === e3.pattern.style) return null;
  const a = { color: l3, width: Math.min(e3.size ? u(e3.size) : 0.75, U2) };
  return "pattern" in e3 && "style" === e3.pattern?.type && (a.style = w(e3.pattern.style)), "cap" in e3 && e3.cap && (a.cap = e3.cap), "join" in e3 && e3.join && (a.join = "miter" === e3.join ? u(2) : e3.join), a;
}
function $(e3, t2, l3) {
  const a = null != l3 ? 0.75 * l3 : 0;
  return { type: "linear", x1: a ? 0.25 * a : 0, y1: a ? 0.5 * a : 0, x2: a || 4, y2: a ? 0.5 * a : 4, colors: [{ color: e3, offset: 0 }, { color: t2, offset: 1 }] };
}
function A(e3) {
  const t2 = e3.depth, l3 = e3.height, a = e3.width;
  return 0 !== a && 0 !== t2 && 0 !== l3 && a === t2 && null != a && null != l3 && a < l3;
}
function B(e3, t2, l3) {
  const a = [];
  if (!e3) return a;
  switch (e3.type) {
    case "icon": {
      const l4 = 0, s2 = 0, n4 = t2, r2 = t2;
      switch (e3.resource?.primitive ?? e2) {
        case "circle":
          a.push({ shape: { type: "circle", cx: 0, cy: 0, r: 0.5 * t2 }, fill: Z(e3, 0), stroke: O(e3) });
          break;
        case "square":
          a.push({ shape: { type: "path", path: [{ command: "M", values: [l4, r2] }, { command: "L", values: [l4, s2] }, { command: "L", values: [n4, s2] }, { command: "L", values: [n4, r2] }, { command: "Z", values: [] }] }, fill: Z(e3, 0), stroke: O(e3) });
          break;
        case "triangle":
          a.push({ shape: { type: "path", path: [{ command: "M", values: [l4, r2] }, { command: "L", values: [0.5 * n4, s2] }, { command: "L", values: [n4, r2] }, { command: "Z", values: [] }] }, fill: Z(e3, 0), stroke: O(e3) });
          break;
        case "cross":
          a.push({ shape: { type: "path", path: [{ command: "M", values: [0.5 * n4, s2] }, { command: "L", values: [0.5 * n4, r2] }, { command: "M", values: [l4, 0.5 * r2] }, { command: "L", values: [n4, 0.5 * r2] }] }, stroke: I(e3) });
          break;
        case "x":
          a.push({ shape: { type: "path", path: [{ command: "M", values: [l4, s2] }, { command: "L", values: [n4, r2] }, { command: "M", values: [n4, s2] }, { command: "L", values: [l4, r2] }] }, stroke: I(e3) });
          break;
        case "kite":
          a.push({ shape: { type: "path", path: [{ command: "M", values: [l4, 0.5 * r2] }, { command: "L", values: [0.5 * n4, s2] }, { command: "L", values: [n4, 0.5 * r2] }, { command: "L", values: [0.5 * n4, r2] }, { command: "Z", values: [] }] }, fill: Z(e3, 0), stroke: O(e3) });
      }
      break;
    }
    case "object":
      switch (e3.resource?.primitive ?? c2) {
        case "cone": {
          const s2 = $(Z(e3, 0), Z(e3, -0.6), l3 ? D : t2), n4 = n3(t2, l3);
          a.push({ shape: n4[0], fill: s2 }, { shape: n4[1], fill: s2 });
          break;
        }
        case "inverted-cone": {
          const l4 = Z(e3, 0), s2 = $(l4, Z(e3, -0.6), t2), n4 = o(t2);
          a.push({ shape: n4[0], fill: s2 }, { shape: n4[1], fill: l4 });
          break;
        }
        case "cube": {
          const s2 = p(t2, l3);
          a.push({ shape: s2[0], fill: Z(e3, 0) }, { shape: s2[1], fill: Z(e3, -0.3) }, { shape: s2[2], fill: Z(e3, -0.5) });
          break;
        }
        case "cylinder": {
          const s2 = $(Z(e3, 0), Z(e3, -0.6), l3 ? D : t2), n4 = L(t2, l3);
          a.push({ shape: n4[0], fill: s2 }, { shape: n4[1], fill: s2 }, { shape: n4[2], fill: Z(e3, 0) });
          break;
        }
        case "diamond": {
          const l4 = l2(t2);
          a.push({ shape: l4[0], fill: Z(e3, -0.3) }, { shape: l4[1], fill: Z(e3, 0) }, { shape: l4[2], fill: Z(e3, -0.3) }, { shape: l4[3], fill: Z(e3, -0.7) });
          break;
        }
        case "sphere": {
          const l4 = $(Z(e3, 0), Z(e3, -0.6));
          l4.x1 = 0, l4.y1 = 0, l4.x2 = 0.25 * t2, l4.y2 = 0.25 * t2, a.push({ shape: { type: "circle", cx: 0, cy: 0, r: 0.5 * t2 }, fill: l4 });
          break;
        }
        case "tetrahedron": {
          const l4 = s(t2);
          a.push({ shape: l4[0], fill: Z(e3, -0.3) }, { shape: l4[1], fill: Z(e3, 0) }, { shape: l4[2], fill: Z(e3, -0.6) });
          break;
        }
      }
      break;
  }
  return a;
}
function G(e3) {
  const t2 = "number" == typeof e3?.size ? e3?.size : null;
  return t2 ? u(t2) : null;
}
function J(e3) {
  return "icon" === e3.type ? "multiply" : "tint";
}
async function K(e3, t2) {
  const l3 = G(t2), a = t2?.maxSize ? u(t2.maxSize) : null, r2 = t2?.disableUpsampling ?? false, o2 = e3.symbolLayers, i = [], c3 = [];
  let p2 = false, u3 = 0, h3 = 0, m2 = 0;
  o2.forEach((s2) => {
    if ("icon" !== s2.type && "object" !== s2.type) return;
    s2 && "icon" === s2.type && (m2 = Math.max(s2.size && u(s2.size), m2));
    const o3 = "icon" === s2.type ? s2.size && u(s2.size) : 0, f3 = l3 || o3 ? Math.ceil(Math.min(l3 || o3, a || P)) : S;
    let y2 = "icon" === s2.type ? s2.angle : null;
    if (null != t2?.rotation && (y2 = (y2 ?? 0) + t2.rotation), c3.push(y2), s2?.resource?.href) {
      const t3 = E(e3, s2).then((e4) => {
        const t4 = s2?.material?.color, l4 = J(s2);
        return d2(e4, f3, t4, l4, r2);
      }).then((e4) => {
        const t4 = e4.width, l4 = e4.height;
        return u3 = Math.max(u3, t4), h3 = Math.max(h3, l4), y2 && (p2 = true), [{ shape: { type: "image", x: 0, y: 0, width: t4, height: l4, src: e4.url }, fill: null, stroke: null }];
      });
      i.push(t3);
    } else {
      let e4 = f3;
      "icon" === s2.type && l3 && (e4 = f3 * (o3 / m2));
      const a2 = "tall" === t2?.symbolConfig || t2?.symbolConfig?.isTall || "object" === s2.type && A(s2);
      u3 = Math.max(u3, a2 ? D : e4), h3 = Math.max(h3, e4), y2 && s2.resource?.primitive && ["square", "triangle", "x"].includes(s2.resource?.primitive) && (p2 = true), i.push(Promise.resolve(B(s2, e4, a2)));
    }
  });
  const f2 = await Promise.allSettled(i), y = [];
  return f2.forEach((e4) => {
    "fulfilled" === e4.status ? y.push(e4.value) : e4.reason && n.getLogger("esri.symbols.support.previewSymbol3D").warn("error while building swatchInfo!", e4.reason);
  }), l(y, [u3, h3], { node: t2?.node, scale: false, opacity: t2?.opacity, ariaLabel: t2?.ariaLabel, rotations: c3, useRotationSize: p2 });
}
function Q(e3, t2) {
  const l3 = e3.symbolLayers, a = [], s2 = h2(e3), r2 = G(t2), o2 = (t2?.maxSize ? u(t2.maxSize) : null) || U2;
  let i, c3 = 0, u3 = 0;
  return l3.forEach((e4, t3) => {
    if (!e4) return;
    if ("line" !== e4.type && "path" !== e4.type) return;
    const l4 = [];
    switch (e4.type) {
      case "line": {
        const a2 = F(e4, 0);
        if (null == a2) break;
        const s3 = a2?.width || 0;
        0 === t3 && (i = s3);
        const n4 = Math.min(r2 || s3, o2), p2 = 0 === t3 ? n4 : r2 ? n4 * (s3 / i) : n4, h3 = p2 > C2 / 2 ? 2 * p2 : C2;
        u3 = Math.max(u3, p2), c3 = Math.max(c3, h3), a2.width = p2, l4.push({ shape: { type: "path", path: [{ command: "M", values: [0, 0.5 * u3] }, { command: "L", values: [c3, 0.5 * u3] }] }, stroke: a2 });
        break;
      }
      case "path": {
        const t4 = Math.min(r2 || S, o2), a2 = Z(e4, 0), s3 = Z(e4, -0.2), n4 = N(e4, -0.4), i2 = n4 ? { color: n4, width: 1 } : {};
        if ("quad" === e4.profile) {
          const t5 = e4.width, n5 = e4.height, r3 = e(t5 && n5 ? t5 / n5 : 1, 0 === n5, 0 === t5), o3 = __spreadProps(__spreadValues({}, i2), { join: "bevel" });
          l4.push({ shape: r3[0], fill: s3, stroke: o3 }, { shape: r3[1], fill: s3, stroke: o3 }, { shape: r3[2], fill: a2, stroke: o3 });
        } else l4.push({ shape: t.pathSymbol3DLayer[0], fill: s3, stroke: i2 }, { shape: t.pathSymbol3DLayer[1], fill: a2, stroke: i2 });
        u3 = Math.max(u3, t4), c3 = u3;
      }
    }
    a.push(l4);
  }), Promise.resolve(l(a, [c3, u3], { node: t2?.node, scale: s2, opacity: t2?.opacity, ariaLabel: t2?.ariaLabel }));
}
async function V(e3, t2) {
  const l3 = "mesh-3d" === e3.type, a = e3.symbolLayers, s2 = G(t2), r2 = t2?.maxSize ? u(t2.maxSize) : null, o2 = s2 || S, i = [];
  let c3 = 0, u3 = 0, h3 = false;
  for (let n4 = 0; n4 < a.length; n4++) {
    const e4 = a.at(n4), t3 = [];
    if (!l3 || "fill" === e4.type) {
      switch (e4.type) {
        case "fill": {
          const a2 = Math.min(o2, r2 || P);
          if (c3 = Math.max(c3, a2), u3 = Math.max(u3, a2), h3 = true, l3) {
            const l4 = t.meshSymbol3DFill, s3 = N(e4, -0.4), n5 = T(e4, 0.05 * a2) ?? (s3 ? { join: "round", color: s3, width: 1 } : null);
            t3.push({ shape: l4[0], fill: Z(e4, 0), stroke: n5 }, { shape: l4[1], fill: Z(e4, -0.2), stroke: n5 }, { shape: l4[2], fill: Z(e4, -0.6), stroke: n5 });
          } else {
            let l4 = Z(e4, 0);
            const a3 = "pattern" in e4 ? e4.pattern : null, s3 = O(e4), n5 = R(e4);
            null != a3 && "style" === a3.type && "solid" !== a3.style && n5 && (l4 = await H(a3, n5)), t3.push({ shape: t.fill[0], fill: l4, stroke: s3 });
          }
          break;
        }
        case "extrude": {
          const l4 = Z(e4, 0), a2 = Z(e4, -0.2), s3 = Math.min(o2, r2 || P), n5 = m(s3), i2 = S, p2 = 0.7 * S + 0.5 * s3, h4 = T(e4, 0.1 * Math.min(i2, p2)) ?? __spreadProps(__spreadValues({ join: "round" }, F(e4, -0.4)), { width: 1 });
          t3.push({ shape: n5[0], fill: a2, stroke: h4 }, { shape: n5[1], fill: a2, stroke: h4 }, { shape: n5[2], fill: l4, stroke: h4 }), c3 = Math.max(c3, i2), u3 = Math.max(u3, p2);
          break;
        }
        case "water": {
          const l4 = R(e4), a2 = q(l4), s3 = q(l4, 2), n5 = q(l4, 3), i2 = c();
          h3 = true, t3.push({ shape: i2[0], fill: a2 }, { shape: i2[1], fill: s3 }, { shape: i2[2], fill: n5 });
          const p2 = Math.min(o2, r2 || P);
          c3 = Math.max(c3, p2), u3 = Math.max(u3, p2);
          break;
        }
      }
      i.push(t3);
    }
  }
  return l(i, [c3, u3], { node: t2?.node, scale: h3, opacity: t2?.opacity, ariaLabel: t2?.ariaLabel });
}
function W(e3, t2) {
  if (0 === e3.symbolLayers.length) return Promise.reject(new r("symbolPreview: renderPreviewHTML3D", "No symbolLayers in the symbol."));
  switch (e3.type) {
    case "point-3d":
      return K(e3, t2);
    case "line-3d":
      return Q(e3, t2);
    case "polygon-3d":
    case "mesh-3d":
      return V(e3, t2);
  }
  return Promise.reject(new r("symbolPreview: swatchInfo3D", "symbol not supported."));
}

export {
  Z,
  H,
  G,
  W
};
//# sourceMappingURL=chunk-XDKTACXQ.js.map
