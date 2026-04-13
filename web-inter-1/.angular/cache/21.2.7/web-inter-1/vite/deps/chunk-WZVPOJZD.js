import {
  H
} from "./chunk-7UCCZG5W.js";
import {
  l2 as l
} from "./chunk-D3Y3Q73K.js";
import {
  f
} from "./chunk-2QP2OVJC.js";
import {
  i as i2
} from "./chunk-BXFSKL77.js";
import {
  Q,
  t
} from "./chunk-NPUCBGFZ.js";
import {
  o
} from "./chunk-JL3Z5SD5.js";
import {
  e,
  i
} from "./chunk-OFSNX7BB.js";

// node_modules/@arcgis/core/views/3d/support/renderInfoUtils/line.js
function s(o2, t2, i4, s3) {
  const p3 = "polygon" === o2.type ? 1 : 0, c2 = "polygon" === o2.type ? o2.rings : o2.paths, { position: a2, outlines: u2 } = f(c2, !!o2.hasZ, p3, o2.spatialReference), f3 = e(a2.length), m2 = l(a2, o2.spatialReference, 0, f3, 0, a2, 0, a2.length / 3, t2, i4, s3), g2 = null != m2;
  return { lines: g2 ? l2(u2, a2, f3) : [], projectionSuccess: g2, sampledElevation: m2 };
}
function p(e3, t2) {
  const r = "polygon" === e3.type ? 1 : 0, s3 = "polygon" === e3.type ? e3.rings : e3.paths, { position: p3, outlines: c2 } = f(s3, false, r), a2 = o(p3, e3.spatialReference, 0, p3, t2, 0);
  for (let o2 = 2; o2 < p3.length; o2 += 3) p3[o2] = H;
  return { lines: a2 ? l2(c2, p3) : [], projectionSuccess: a2 };
}
function l2(o2, e3, n2 = null) {
  const r = new Array();
  for (const { index: i4, count: s3 } of o2) {
    if (s3 <= 1) continue;
    const o3 = 3 * i4, p3 = 3 * s3;
    r.push({ position: i(e3, 3 * i4, 3 * s3), mapPositions: null != n2 ? i(n2, o3, p3) : void 0 });
  }
  return r;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultLayouts.js
var f2 = Q().vec3f("position").freeze();
var i3 = Q().vec3f("position").vec2f16("uv0").freeze();
var n = Q().vec3f("position").vec4u8("color", { glNormalized: true }).freeze();
var u = Q().vec3f("position").vec2f("uv0").freeze();
var c = Q().vec3f("position").vec2f("uv0").vec4u8("olidColor").freeze();
var s2 = t(f2);
var p2 = t(i3);
var v = t(n);
var m = t(u);
var l3 = t(c);
var a = t(Q().u16("componentIndex", { integer: true }));
var d = [{ name: "colorAndCastShadows", type: "vec4u8" }, { name: "elevationOffset", type: "f32" }, { name: "emissiveStrength", type: "f16" }, { name: "emissiveSourceMode", type: "u8" }];
var y = { name: "olidColor", type: "vec4u8" };
var z = new i2(d);
var g = new i2([...d, y]);

export {
  s,
  p,
  f2 as f,
  i3 as i,
  n,
  u,
  c,
  s2,
  v,
  m,
  l3 as l
};
//# sourceMappingURL=chunk-WZVPOJZD.js.map
