import {
  c as c7
} from "./chunk-7QLZSCEB.js";
import {
  f as f5,
  m as m3,
  o as o2
} from "./chunk-VG4ZA3GZ.js";
import {
  A as A2
} from "./chunk-2M6DJG7I.js";
import {
  d,
  g,
  k as k2,
  y as y2,
  z as z3
} from "./chunk-Q65CRSH6.js";
import {
  y
} from "./chunk-6Q257Z6L.js";
import {
  g as g2
} from "./chunk-SYQHLNPP.js";
import {
  a as a6,
  c as c6,
  n as n5
} from "./chunk-67ULQRC7.js";
import {
  u as u5
} from "./chunk-PNDJMSMX.js";
import {
  E as E2,
  F,
  M,
  P,
  V,
  _ as _4,
  k,
  nt,
  q as q2,
  w,
  x as x2
} from "./chunk-EEIMB7C6.js";
import {
  a as a5,
  r as r3
} from "./chunk-NZKVNPZ3.js";
import {
  f as f4
} from "./chunk-U53G3X2R.js";
import {
  c as c5,
  l as l3,
  t,
  u as u4
} from "./chunk-UKLHBUGA.js";
import {
  c as c4
} from "./chunk-WRWVENVU.js";
import {
  i as i2
} from "./chunk-MPUSMVYE.js";
import {
  e as e5,
  r as r4
} from "./chunk-UFNIHRKY.js";
import {
  n as n4
} from "./chunk-QOQBWURX.js";
import {
  E,
  N,
  _ as _3,
  c as c3,
  e as e4,
  u as u3,
  x,
  z as z2
} from "./chunk-SGNC5H35.js";
import {
  D,
  I,
  O,
  c as c2,
  f,
  p as p3
} from "./chunk-IRS5H2YE.js";
import {
  tn
} from "./chunk-QBEV3F3C.js";
import {
  u as u2
} from "./chunk-MAWAFQXQ.js";
import {
  o
} from "./chunk-4YOIFLLS.js";
import {
  _ as _2,
  a as a4,
  n as n2,
  r as r2
} from "./chunk-KEY3YQEB.js";
import {
  j
} from "./chunk-2YANO3UR.js";
import {
  U,
  f as f3,
  h,
  i,
  m as m2
} from "./chunk-MZFPTE7Q.js";
import {
  e as e3
} from "./chunk-U3RH7VGM.js";
import {
  e as e2
} from "./chunk-XNNZ2U24.js";
import {
  n as n3
} from "./chunk-6U5MFJUS.js";
import {
  e
} from "./chunk-EQVY5WGD.js";
import {
  f as f2,
  l as l2
} from "./chunk-7ZFYLJ6O.js";
import {
  p as p2
} from "./chunk-XETCTTJV.js";
import {
  m
} from "./chunk-VEYY6VCN.js";
import {
  z2 as z
} from "./chunk-ORVZAZPX.js";
import {
  _,
  s as s2
} from "./chunk-YVKQ6DO2.js";
import {
  G,
  Rt
} from "./chunk-TPFIN626.js";
import {
  a as a2,
  l
} from "./chunk-6CYBR6FP.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import {
  a3,
  c
} from "./chunk-7ELXYOAW.js";
import {
  A,
  a,
  p,
  s,
  u3 as u
} from "./chunk-2KP24SU5.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/support/meshErrors.js
var t2 = "Mesh must be loaded before applying operations";
var e6 = "Provided component is not part of the list of components";
var n6 = "Expected polygon to be a Polygon instance";
var s3 = "Expected location to be a Point instance";
var i3 = class extends r {
  constructor() {
    super("invalid-input:location", s3);
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js
function r5(e7, r6) {
  switch (e7.type) {
    case "georeferenced":
      return r6.isGeographic;
    case "local":
      return r6.isGeographic || r6.isWebMercator;
  }
}

// node_modules/@arcgis/core/geometry/support/meshUtils/centerAt.js
var g3 = () => n.getLogger("esri.geometry.support.meshUtils.centerAt");
function u6(e7, t3, r6) {
  if (!e7.vertexAttributes?.position) return;
  const { vertexSpace: i4 } = e7, o3 = r6?.origin ?? e7.origin;
  if (t(i4)) x3(e7, t3, o3);
  else {
    r5(i4, o3.spatialReference) ? v(e7, t3, o3) : R(e7, t3, o3);
  }
}
function x3(e7, o3, s4) {
  const { vertexSpace: c10 } = e7;
  if (!t(c10)) return;
  const f8 = h2, m6 = b;
  if (!n4(o3, m6, e7.spatialReference)) return void M(g3(), o3.spatialReference, e7.spatialReference, E2);
  if (!n4(s4, f8, e7.spatialReference)) return void M(g3(), s4.spatialReference, e7.spatialReference, E2);
  const u10 = e4(A3, m6, f8);
  c10.origin = c3(n2(), c10.origin, u10);
}
function v(e7, t3, r6) {
  const i4 = r2(r6.x, r6.y, r6.z ?? 0), n7 = q2(e7, new i2({ origin: i4 }));
  if (!n7) return;
  const a8 = r2(t3.x, t3.y, t3.z ?? 0), f8 = q2({ vertexAttributes: n7, spatialReference: e7.spatialReference, vertexSpace: new i2({ origin: a8 }) }, c4.absolute);
  if (!f8) return;
  const { position: p6, normal: l5, tangent: g6 } = f8;
  e7.vertexAttributes.position = p6, e7.vertexAttributes.normal = l5, e7.vertexAttributes.tangent = g6, e7.vertexAttributesChanged();
}
function R(e7, t3, r6) {
  const i4 = h2, o3 = b;
  if (n4(t3, o3, e7.spatialReference)) {
    if (!n4(r6, i4, e7.spatialReference)) {
      const t4 = e7.origin;
      return i4[0] = t4.x, i4[1] = t4.y, i4[2] = t4.z, void M(g3(), r6.spatialReference, e7.spatialReference, E2);
    }
    j2(e7.vertexAttributes.position, o3, i4), e7.vertexAttributesChanged();
  } else M(g3(), t3.spatialReference, e7.spatialReference, E2);
}
function j2(e7, t3, r6) {
  if (e7) for (let i4 = 0; i4 < e7.length; i4 += 3) for (let o3 = 0; o3 < 3; o3++) e7[i4 + o3] += t3[o3] - r6[o3];
}
var b = n2();
var h2 = n2();
var A3 = n2();

// node_modules/@arcgis/core/geometry/support/meshUtils/extent.js
function l4(r6) {
  const { spatialReference: f8, vertexSpace: l5, untransformedBounds: d4 } = r6, g6 = f3(d4, u7);
  if (t(l5) && r6.transform && r3(g6, g6, r6.transform.localMatrix), "georeferenced" === l5.type) {
    const r7 = l5.origin;
    return r7 && a5(g6, g6, r7), h(m2(g6), f8);
  }
  const y5 = u2(f8), B2 = l5.origin;
  if (!tn(y5, f8)) {
    const [r7, t3, e7] = B2;
    return new z({ xmin: r7, ymin: t3, zmin: e7, xmax: r7, ymax: t3, zmax: e7, spatialReference: f8 });
  }
  return f4(f8, B2, x4, y5), r3(g6, g6, x4), o(g6, y5, 0, g6, f8, 0), h(m2(g6), f8);
}
var x4 = e2();
var u7 = e3(24);

// node_modules/@arcgis/core/geometry/support/meshUtils/loadExternal.js
async function c8(e7, t3, s4) {
  switch (t3.source.type) {
    case "client":
    case "service":
      return u8(e7, t3, s4);
    case "loadable":
      return t3.source.load(e7, s4);
    default:
      t3.source;
  }
}
async function u8(r6, o3, n7) {
  const { source: i4 } = o3, { loadGLTFMesh: a8 } = await p(import("./loadGLTFMesh-S6B264RU.js"), n7), c10 = await f6(i4, n7);
  s(n7);
  const u10 = a8(new _({ x: 0, y: 0, z: 0, spatialReference: r6.spatialReference }), c10.url, { resolveFile: m4(c10), signal: n7?.signal, expectedType: c10.type, unitConversionDisabled: o3.unitConversionDisabled });
  u10.then(() => c10.dispose(), () => c10.dispose());
  const { mesh: { vertexAttributes: p6, components: d4 }, meta: { isDracoDecompressed: h5 } } = await u10;
  if (h5) throw new r("mesh-load-external:draco-not-supported", "The provided mesh uses Draco compression which is not supported.");
  r6.vertexAttributes = p6, r6.components = d4;
}
function m4(e7) {
  const t3 = Rt(e7.url);
  return (s4) => {
    const r6 = G(s4, t3, t3), o3 = r6 ? r6.replace(/^ *\.\//, "") : null;
    return (o3 ? e7.files.get(o3) : null) ?? s4;
  };
}
async function f6(t3, s4) {
  switch (t3.type) {
    case "client":
      return Array.isArray(t3.files) ? h3(t3.files) : d2(t3.files);
    case "service":
      return w2(t3.assets, s4);
    default:
      throw new r("mesh-load-external:invalid-source", "Invalid source type");
  }
}
async function p4(e7, t3) {
  const { parts: r6, assetMimeType: o3, assetName: n7 } = e7;
  if (1 === r6.length) return new j3(r6[0].partUrl);
  const i4 = await e7.toBlob(t3);
  return s(t3), j3.fromBlob(i4, M2(n7, o3));
}
function d2(e7) {
  return j3.fromBlob(e7, M2(e7.name, e7.type));
}
function h3(t3) {
  if (!t3.length) throw new r("mesh-load-external:missing-assets", "There must be at least one file to load");
  return T(t3.map((e7) => ({ name: e7.name, mimeType: e7.type, source: d2(e7) })));
}
async function w2(t3, i4) {
  if (!t3.length) throw new r("mesh-load-external:missing-assets", "There must be at least one file to load");
  const a8 = await A(t3.map(async (e7) => {
    const t4 = await p4(e7);
    return s(i4), { name: e7.assetName, mimeType: e7.assetMimeType, source: t4 };
  }));
  if (a(i4)) throw a8.forEach((e7) => e7.source.dispose()), u();
  return T(a8);
}
var y3 = /^model\/gltf\+json$/;
var g4 = /^model\/gltf-binary$/;
var b2 = /\.gltf$/i;
var v2 = /\.glb$/i;
function x5({ mimeType: e7, source: t3, name: s4 }) {
  return y3.test(e7) || b2.test(s4) ? { url: t3.url, type: "gltf" } : g4.test(e7) || v2.test(s4) ? { url: t3.url, type: "glb" } : null;
}
function T(t3) {
  const s4 = /* @__PURE__ */ new Map();
  let r6 = null, o3 = null;
  for (const e7 of t3) {
    const { source: t4, name: n8 } = e7;
    r6 ??= x5(e7), "ESRI3DO_NORM.glb" === n8 && (o3 = x5(e7)), s4.set(n8, t4.url), t4.files.forEach((e8, t5) => s4.set(t5, e8));
  }
  const n7 = o3 ?? r6;
  if (null == n7) throw new r("mesh-load-external:missing-files", "Missing files to load external mesh source");
  return new j3(n7.url, () => t3.forEach(({ source: e7 }) => e7.dispose()), s4, n7.type);
}
var j3 = class _j {
  constructor(e7, t3 = () => {
  }, s4 = /* @__PURE__ */ new Map(), r6) {
    this.url = e7, this.dispose = t3, this.files = s4, this.type = r6;
  }
  static fromBlob(e7, t3) {
    const s4 = URL.createObjectURL(e7);
    return new _j(s4, () => URL.revokeObjectURL(s4), void 0, t3);
  }
};
function M2(e7, t3) {
  return y3.test(t3) || b2.test(e7) ? "gltf" : g4.test(t3) || b2.test(e7) ? "glb" : void 0;
}

// node_modules/@arcgis/core/geometry/support/meshUtils/Metadata.js
var a7 = class extends f2 {
  constructor(e7) {
    super(e7), this.externalSources = new q(), this._explicitDisplaySource = null, this.addHandles(a2(() => this.externalSources, "after-remove", ({ item: e8 }) => {
      e8 === this._explicitDisplaySource && (this._explicitDisplaySource = null);
    }, { sync: true, onListenerRemove: () => this._explicitDisplaySource = null }));
  }
  get displaySource() {
    return this._explicitDisplaySource ?? this._implicitDisplaySource;
  }
  set displaySource(e7) {
    if (null != e7 && !o2(e7)) throw new Error("Cannot use this source for display: it is not in a supported format.");
    this._explicitDisplaySource = e7, e7 && this.externalSources.every((r6) => !m3(r6, e7)) && this.externalSources.add(e7);
  }
  clearSources() {
    this.externalSources.removeAll();
  }
  getExternalSourcesOnService(e7) {
    return this.externalSources.items.filter((r6) => f5(r6, e7));
  }
  get _implicitDisplaySource() {
    return this.externalSources.find(o2);
  }
};
__decorate([a3()], a7.prototype, "externalSources", void 0), __decorate([a3()], a7.prototype, "displaySource", null), __decorate([a3()], a7.prototype, "_implicitDisplaySource", null), __decorate([a3()], a7.prototype, "_explicitDisplaySource", void 0), a7 = __decorate([c("esri.geometry.support.meshUtils.Metadata")], a7);

// node_modules/@arcgis/core/geometry/support/meshUtils/primitives.js
function c9() {
  const { faceDescriptions: t3, faceVertexOffsets: e7, uvScales: r6 } = b3, n7 = 4 * t3.length, o3 = new Float64Array(3 * n7), s4 = new Float32Array(3 * n7), a8 = new Float32Array(2 * n7), i4 = new Uint32Array(2 * t3.length * 3);
  let l5 = 0, c10 = 0, f8 = 0, u10 = 0;
  for (let h5 = 0; h5 < t3.length; h5++) {
    const n8 = t3[h5], p6 = l5 / 3;
    for (const t4 of e7) i4[u10++] = p6 + t4;
    const m6 = n8.corners;
    for (let t4 = 0; t4 < 4; t4++) {
      const e8 = m6[t4];
      let i5 = 0;
      a8[f8++] = 0.25 * r6[t4][0] + n8.uvOrigin[0], a8[f8++] = n8.uvOrigin[1] - 0.25 * r6[t4][1];
      for (let t5 = 0; t5 < 3; t5++) 0 !== n8.axis[t5] ? (o3[l5++] = 0.5 * n8.axis[t5], s4[c10++] = n8.axis[t5]) : (o3[l5++] = 0.5 * e8[i5++], s4[c10++] = 0);
    }
  }
  return { position: o3, normal: s4, uv: a8, faces: i4 };
}
function f7(t3, e7) {
  const r6 = t3.components[0], n7 = r6.faces, s4 = F2[e7], a8 = 6 * s4, i4 = new Array(6), l5 = new Array(n7.length - 6);
  let c10 = 0, f8 = 0;
  for (let o3 = 0; o3 < n7.length; o3++) o3 >= a8 && o3 < a8 + 6 ? i4[c10++] = n7[o3] : l5[f8++] = n7[o3];
  if (null != t3.vertexAttributes.uv) {
    const e8 = new Float32Array(t3.vertexAttributes.uv), r7 = 4 * s4 * 2, n8 = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let t4 = 0; t4 < n8.length; t4++) e8[r7 + t4] = n8[t4];
    t3.vertexAttributes.uv = e8;
  }
  return t3.components = [new g2({ faces: i4, material: r6.material }), new g2({ faces: l5 })], t3;
}
function u9(t3 = 0) {
  const e7 = Math.round(8 * 2 ** t3), r6 = 2 * e7, n7 = (e7 - 1) * (r6 + 1) + 2 * r6, o3 = new Float64Array(3 * n7), s4 = new Float32Array(3 * n7), a8 = new Float32Array(2 * n7), i4 = new Uint32Array(3 * ((e7 - 1) * r6 * 2));
  let l5 = 0, c10 = 0, f8 = 0, u10 = 0;
  for (let h5 = 0; h5 <= e7; h5++) {
    const t4 = h5 / e7 * Math.PI + 0.5 * Math.PI, n8 = Math.cos(t4), p6 = Math.sin(t4);
    O2[2] = p6;
    const m6 = 0 === h5 || h5 === e7, w4 = m6 ? r6 - 1 : r6;
    for (let v4 = 0; v4 <= w4; v4++) {
      const t5 = v4 / w4 * 2 * Math.PI;
      O2[0] = -Math.sin(t5) * n8, O2[1] = Math.cos(t5) * n8;
      for (let e8 = 0; e8 < 3; e8++) o3[l5] = 0.5 * O2[e8], s4[l5] = O2[e8], ++l5;
      a8[c10++] = (v4 + (m6 ? 0.5 : 0)) / r6, a8[c10++] = h5 / e7, 0 !== h5 && v4 !== r6 && (h5 !== e7 && (i4[f8++] = u10, i4[f8++] = u10 + 1, i4[f8++] = u10 - r6), 1 !== h5 && (i4[f8++] = u10, i4[f8++] = u10 - r6, i4[f8++] = u10 - r6 - 1)), u10++;
    }
  }
  return { position: o3, normal: s4, uv: a8, faces: i4 };
}
function h4(t3 = 0) {
  const e7 = 5, r6 = Math.round(16 * 2 ** t3), n7 = (e7 - 1) * (r6 + 1) + 2 * r6, o3 = new Float64Array(3 * n7), s4 = new Float32Array(3 * n7), a8 = new Float32Array(2 * n7), i4 = new Uint32Array(3 * (4 * r6));
  let l5 = 0, c10 = 0, f8 = 0, u10 = 0, h5 = 0;
  for (let p6 = 0; p6 <= e7; p6++) {
    const t4 = 0 === p6 || p6 === e7, n8 = p6 <= 1 || p6 >= e7 - 1, m6 = 2 === p6 || 4 === p6, w4 = t4 ? r6 - 1 : r6;
    for (let v4 = 0; v4 <= w4; v4++) {
      const g6 = v4 / w4 * 2 * Math.PI, x7 = t4 ? 0 : 0.5;
      O2[0] = x7 * Math.sin(g6), O2[1] = x7 * -Math.cos(g6), O2[2] = p6 <= 2 ? 0.5 : -0.5;
      for (let t5 = 0; t5 < 3; t5++) o3[l5++] = O2[t5], s4[c10++] = n8 ? 2 === t5 ? p6 <= 1 ? 1 : -1 : 0 : 2 === t5 ? 0 : O2[t5] / x7;
      a8[f8++] = (v4 + (t4 ? 0.5 : 0)) / r6, a8[f8++] = p6 <= 1 ? 1 * p6 / 3 : p6 <= 3 ? 1 * (p6 - 2) / 3 + 1 / 3 : 1 * (p6 - 4) / 3 + 2 / 3, m6 || 0 === p6 || v4 === r6 || (p6 !== e7 && (i4[u10++] = h5, i4[u10++] = h5 + 1, i4[u10++] = h5 - r6), 1 !== p6 && (i4[u10++] = h5, i4[u10++] = h5 - r6, i4[u10++] = h5 - r6 - 1)), h5++;
    }
  }
  return { position: o3, normal: s4, uv: a8, faces: i4 };
}
function p5(t3, e7) {
  const r6 = "number" == typeof e7 ? e7 : null != e7 ? e7.width : 1, n7 = "number" == typeof e7 ? e7 : null != e7 ? e7.height : 1;
  switch (t3) {
    case "up":
    case "down":
      return { width: r6, depth: n7 };
    case "north":
    case "south":
      return { width: r6, height: n7 };
    case "east":
    case "west":
      return { depth: r6, height: n7 };
  }
}
function m5(t3) {
  const e7 = x6.facingAxisOrderSwap[t3], r6 = x6.position, n7 = x6.normal, o3 = new Float64Array(r6.length), s4 = new Float32Array(n7.length);
  let a8 = 0;
  for (let i4 = 0; i4 < 4; i4++) {
    const t4 = a8;
    for (let i5 = 0; i5 < 3; i5++) {
      const l5 = e7[i5], c10 = Math.abs(l5) - 1, f8 = l5 >= 0 ? 1 : -1;
      o3[a8] = r6[t4 + c10] * f8, s4[a8] = n7[t4 + c10] * f8, a8++;
    }
  }
  return { position: o3, normal: s4, uv: new Float32Array(x6.uv), faces: new Uint32Array(x6.faces), isPlane: true };
}
var w3 = 1;
var v3 = 2;
var g5 = 3;
var x6 = { position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], uv: [0, 1, 1, 1, 1, 0, 0, 0], faces: [0, 1, 2, 0, 2, 3], facingAxisOrderSwap: { east: [g5, w3, v3], west: [-g5, -w3, v3], north: [-w3, g5, v3], south: [w3, -g5, v3], up: [w3, v3, g5], down: [w3, -v3, -g5] } };
function A4(t3, e7, r6) {
  t3.isPlane || y4(t3), M3(t3, d3(r6?.size, r6?.unit, e7.spatialReference));
  const n7 = l3(e7, r6), l5 = e7.spatialReference.isGeographic ? l3(e7) : n7, c10 = q2({ vertexAttributes: t3, vertexSpace: l5, spatialReference: e7.spatialReference }, n7, { allowBufferReuse: true });
  return { vertexAttributes: new u5(__spreadProps(__spreadValues({}, c10), { uv: t3.uv })), vertexSpace: n7, components: [new g2({ faces: t3.faces, material: r6?.material || null })], spatialReference: e7.spatialReference };
}
function y4(t3) {
  for (let e7 = 0; e7 < t3.position.length; e7 += 3) t3.position[e7 + 2] += 0.5;
}
function d3(t3, e7, r6) {
  const n7 = nt(e7, r6);
  if (null == t3 && 1 === n7) return null;
  if (null == t3) return [n7, n7, n7];
  if ("number" == typeof t3) {
    const e8 = t3 * n7;
    return [e8, e8, e8];
  }
  return [null != t3.width ? t3.width * n7 : n7, null != t3.depth ? t3.depth * n7 : n7, null != t3.height ? t3.height * n7 : n7];
}
function M3(t3, n7) {
  if (null != n7) {
    S[0] = n7[0], S[4] = n7[1], S[8] = n7[2];
    for (let r6 = 0; r6 < t3.position.length; r6 += 3) {
      for (let e7 = 0; e7 < 3; e7++) O2[e7] = t3.position[r6 + e7];
      N(O2, O2, S);
      for (let e7 = 0; e7 < 3; e7++) t3.position[r6 + e7] = O2[e7];
    }
    if (n7[0] !== n7[1] || n7[1] !== n7[2]) {
      S[0] = 1 / n7[0], S[4] = 1 / n7[1], S[8] = 1 / n7[2];
      for (let n8 = 0; n8 < t3.normal.length; n8 += 3) {
        for (let e7 = 0; e7 < 3; e7++) O2[e7] = t3.normal[n8 + e7];
        N(O2, O2, S), _3(O2, O2);
        for (let e7 = 0; e7 < 3; e7++) t3.normal[n8 + e7] = O2[e7];
      }
    }
  }
}
var b3 = { faceDescriptions: [{ axis: [0, -1, 0], uvOrigin: [0, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [1, 0, 0], uvOrigin: [0.25, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 1, 0], uvOrigin: [0.5, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [-1, 0, 0], uvOrigin: [0.75, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [0, 0, 1], uvOrigin: [0, 0.375], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 0, -1], uvOrigin: [0, 0.875], corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]] }], uvScales: [[0, 0], [1, 0], [1, 1], [0, 1]], faceVertexOffsets: [0, 1, 2, 0, 2, 3] };
var F2 = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 };
var O2 = n2();
var S = e();

// node_modules/@arcgis/core/geometry/support/meshUtils/rotate.js
var O3 = () => n.getLogger("esri.geometry.support.meshUtils.rotate");
function B(t3, e7, r6) {
  if (!t3.vertexAttributes?.position || 0 === e7[3]) return;
  const { spatialReference: o3, vertexSpace: i4 } = t3, n7 = r6?.origin ?? t3.origin;
  if (c5(t3)) G2(t3, e7, n7);
  else {
    r5(i4, o3) ? H(t3, e7, n7) : I2(t3, e7, n7);
  }
}
function G2(t3, e7, r6) {
  t3.transform ??= new A2();
  const { vertexSpace: l5, transform: m6, spatialReference: f8 } = t3, [u10, x7, h5] = l5.origin, R2 = new _({ x: u10, y: x7, z: h5, spatialReference: f8 }), d4 = K;
  if (R2.equals(r6)) u3(d4, 0, 0, 0);
  else if (!P(d4, r6, t3)) return void M(O3(), r6.spatialReference, f8, E2);
  y(Z, k2(e7), z3(e7));
  const S2 = D(N2, Z, a4, _2, d4), { localMatrix: U2 } = m6, q4 = c2(N2, S2, U2);
  m6.scale = O(n2(), q4), f(q4, q4, z2(K, m6.scale));
  const L2 = m6.rotationAxis;
  m6.rotation = y2(q4), 0 === m6.rotationAngle && (m6.rotationAxis = L2), m6.translation = I(n2(), q4);
}
function H(t3, r6, o3) {
  const i4 = t3.spatialReference, n7 = u2(i4), s4 = Y;
  if (!n4(o3, s4, n7) && (M(O3(), o3.spatialReference, n7, "Falling back to mesh origin"), !n4(t3.origin, s4, n7))) return void M(O3(), t3.origin.spatialReference, n7);
  const a8 = t3.vertexAttributes.position, l5 = t3.vertexAttributes.normal, m6 = t3.vertexAttributes.tangent, c10 = new Float64Array(a8.length), f8 = null != l5 ? new Float32Array(l5.length) : null, p6 = null != m6 ? new Float32Array(m6.length) : null;
  f4(n7, s4, W, n7), n3(X, W);
  const g6 = Q;
  N(k2(Q), k2(r6), X), g6[3] = r6[3], V(a8, i4, c10, n7) && (null == l5 || null == f8 || w(l5, a8, i4, c10, n7, f8)) && (null == m6 || null == p6 || _4(m6, a8, i4, c10, n7, p6)) ? (J(c10, g6, 3, s4), k(c10, n7, a8, i4) && (null == l5 || null == f8 || (J(f8, g6, 3), x2(f8, a8, i4, c10, n7, l5))) && (null == m6 || null == p6 || (J(p6, g6, 4), F(p6, a8, i4, c10, n7, m6))) ? t3.vertexAttributesChanged() : M(O3(), n7, i4)) : M(O3(), i4, n7);
}
function I2(t3, e7, r6) {
  const o3 = Y;
  if (!n4(r6, o3, t3.spatialReference)) {
    const e8 = t3.origin;
    return o3[0] = e8.x, o3[1] = e8.y, o3[2] = e8.z, void M(O3(), r6.spatialReference, t3.spatialReference, E2);
  }
  J(t3.vertexAttributes.position, e7, 3, o3), J(t3.vertexAttributes.normal, e7, 3), J(t3.vertexAttributes.tangent, e7, 4), t3.vertexAttributesChanged();
}
function J(t3, e7, r6, o3 = a4) {
  if (null != t3) {
    p3(W, z3(e7), k2(e7));
    for (let e8 = 0; e8 < t3.length; e8 += r6) {
      for (let r7 = 0; r7 < 3; r7++) K[r7] = t3[e8 + r7] - o3[r7];
      E(K, K, W);
      for (let r7 = 0; r7 < 3; r7++) t3[e8 + r7] = K[r7] + o3[r7];
    }
  }
}
var K = n2();
var N2 = e2();
var Q = g();
var W = e2();
var X = e();
var Y = n2();
var Z = e5();

// node_modules/@arcgis/core/geometry/support/meshUtils/scale.js
var q3 = () => n.getLogger("esri.geometry.support.meshUtils.scale");
function z4(e7, t3, r6) {
  if (!e7.vertexAttributes?.position) return;
  const { vertexSpace: o3, spatialReference: i4 } = e7, n7 = r6?.origin ?? e7.origin;
  if (c5(e7)) L(e7, t3, n7);
  else {
    r5(o3, i4) ? M4(e7, t3, n7) : P2(e7, t3, n7);
  }
}
function L(e7, s4, f8) {
  e7.transform ??= new A2();
  const { vertexSpace: u10, transform: x7, spatialReference: A5 } = e7, [b4, d4, y5] = u10.origin, w4 = new _({ x: b4, y: d4, z: y5, spatialReference: A5 }), F3 = V2;
  if (w4.equals(f8)) u3(F3, 0, 0, 0);
  else if (!P(F3, f8, e7)) return void M(q3(), f8.spatialReference, A5, E2);
  const S2 = u3(k3, s4, s4, s4), U2 = D(D2, r4, a4, S2, F3), { localMatrix: z5 } = x7, L2 = c2(D2, U2, z5);
  x7.scale = O(n2(), L2), f(L2, L2, z2(V2, x7.scale));
  const M5 = x7.rotationAxis;
  x7.rotation = y2(L2), 0 === x7.rotationAngle && (x7.rotationAxis = M5), x7.translation = I(n2(), L2);
}
function M4(e7, t3, r6) {
  const o3 = e7.spatialReference, i4 = u2(o3), n7 = E3;
  if (!n4(r6, n7, i4) && (M(q3(), r6.spatialReference, i4, "Falling back to mesh origin"), !n4(e7.origin, n7, i4))) return void M(q3(), e7.origin.spatialReference, i4);
  const s4 = e7.vertexAttributes.position, l5 = e7.vertexAttributes.normal, a8 = e7.vertexAttributes.tangent, c10 = new Float64Array(s4.length), f8 = null != l5 ? new Float32Array(l5.length) : null, m6 = null != a8 ? new Float32Array(a8.length) : null;
  V(s4, o3, c10, i4) && (null == l5 || null == f8 || w(l5, s4, o3, c10, i4, f8)) && (null == a8 || null == m6 || _4(a8, s4, o3, c10, i4, m6)) ? (T2(c10, t3, n7), k(c10, i4, s4, o3) && (null == l5 || null == f8 || x2(f8, s4, o3, c10, i4, l5)) && (null == a8 || null == m6 || F(m6, s4, o3, c10, i4, a8)) ? e7.vertexAttributesChanged() : M(q3(), i4, o3)) : M(q3(), o3, i4);
}
function P2(e7, t3, r6) {
  const o3 = E3;
  if (!n4(r6, o3, e7.spatialReference)) {
    const t4 = e7.origin;
    return o3[0] = t4.x, o3[1] = t4.y, o3[2] = t4.z, void M(q3(), r6.spatialReference, e7.spatialReference, E2);
  }
  T2(e7.vertexAttributes.position, t3, o3), e7.vertexAttributesChanged();
}
function T2(e7, t3, r6 = a4) {
  if (e7) for (let o3 = 0; o3 < e7.length; o3 += 3) {
    for (let t4 = 0; t4 < 3; t4++) V2[t4] = e7[o3 + t4] - r6[t4];
    x(V2, V2, t3);
    for (let t4 = 0; t4 < 3; t4++) e7[o3 + t4] = V2[t4] + r6[t4];
  }
}
var V2 = n2();
var k3 = n2();
var D2 = e2();
var E3 = n2();

// node_modules/@arcgis/core/geometry/Mesh.js
var Q2;
var X2 = { base: null, key: "type", defaultKeyValue: "georeferenced", typeMap: { georeferenced: c4, local: i2 } };
var Y2 = Q2 = class extends l2(p2(m(s2))) {
  constructor(e7) {
    super(e7), this.components = null, this.vertexSpace = new c4(), this.transform = null, this.metadata = new a7(), this.hasZ = true, this.hasM = false, this.vertexAttributes = new u5(), this.type = "mesh";
  }
  initialize() {
    (0 === this.metadata.externalSources.length || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.addHandles(l(() => ({ vertexAttributes: this.vertexAttributes, components: this.components?.map((e7) => e7.clone()) }), () => this._clearSources(), { once: true, sync: true }));
    });
  }
  get hasExtent() {
    return this.loaded ? this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0) : null != this.metadata.displaySource?.extent;
  }
  get _transformedExtent() {
    const { spatialReference: e7, vertexSpace: t3 } = this, r6 = this;
    return l4({ get transform() {
      return r6.transform;
    }, vertexSpace: t3, spatialReference: e7, untransformedBounds: this._untransformedBounds });
  }
  get _untransformedBounds() {
    const { vertexAttributes: { position: e7 }, components: t3 } = this;
    return 0 === e7.length || 0 === t3?.length ? i(U) : m2(e7);
  }
  get origin() {
    const e7 = u4(this.vertexSpace, this.spatialReference);
    if (null != e7) return e7;
    const { center: t3, zmin: r6 } = this._transformedExtent;
    return new _({ x: t3.x, y: t3.y, z: r6, spatialReference: this.spatialReference });
  }
  get extent() {
    return this.loaded || null == this.metadata?.displaySource?.extent ? this._transformedExtent : this.metadata.displaySource.extent.clone();
  }
  addComponent(e7) {
    this._checkIfLoaded("addComponent()") && (this.components || (this.components = []), this.components.push(g2.from(e7)), this.notifyChange("components"));
  }
  removeComponent(e7) {
    if (this._checkIfLoaded("removeComponent()")) {
      if (this.components) {
        const t3 = this.components.indexOf(e7);
        if (-1 !== t3) return this.components.splice(t3, 1), void this.notifyChange("components");
      }
      n.getLogger(this).error("removeComponent()", e6);
    }
  }
  rotate(e7, t3, r6, o3) {
    return d(e7, t3, r6, $), B(this, $, o3), this;
  }
  offset(e7, t3, r6) {
    if (!this._checkIfLoaded("offset()")) return this;
    const { vertexSpace: o3, vertexAttributes: s4 } = this, n7 = s4?.position;
    if (!n7) return this;
    if (t(o3)) {
      const [s5, n8, i4] = o3.origin;
      o3.origin = r2(s5 + e7, n8 + t3, i4 + r6);
    } else {
      for (let o4 = 0; o4 < n7.length; o4 += 3) n7[o4] += e7, n7[o4 + 1] += t3, n7[o4 + 2] += r6;
      this.vertexAttributesChanged();
    }
    return this;
  }
  scale(e7, t3) {
    return this._checkIfLoaded("scale()") ? (z4(this, e7, t3), this) : this;
  }
  centerAt(e7, t3) {
    return this._checkIfLoaded("centerAt()") ? (u6(this, e7, t3), this) : this;
  }
  load(e7) {
    const { metadata: { displaySource: t3 } } = this;
    return t3 && this.addResolvingPromise(c8(this, t3, e7)), Promise.resolve(this);
  }
  addExternalSources(e7) {
    this.metadata.externalSources.addMany(e7);
  }
  updateDisplaySource(e7) {
    this.metadata.displaySource = e7;
  }
  clone(e7) {
    return super.clone(c6(a6(e7)));
  }
  cloneShallow() {
    return new Q2({ components: this.components, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes, vertexSpace: this.vertexSpace.clone(), transform: this.transform, metadata: this.metadata });
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  async toBinaryGLTF(e7) {
    const [{ toBinaryGLTF: t3 }] = await Promise.all([import("./gltfexport-TZWSPMRO.js"), this.load(e7)]);
    return s(e7), await t3(this, e7);
  }
  get usedMemory() {
    return this.components ? this.components.reduce((e7, t3) => e7 + t3.memoryUsage, this.vertexAttributes.usedMemory) : this.vertexAttributes.usedMemory;
  }
  _clearSources() {
    this.metadata.clearSources();
  }
  _checkIfLoaded(e7) {
    return !!this.loaded || (n.getLogger(this).error(e7, t2), false);
  }
  static createBox(e7, t3) {
    if (!(e7 instanceof _)) return n.getLogger(this.prototype).error(".createBox()", s3), null;
    const r6 = new Q2(A4(c9(), e7, t3));
    return t3?.imageFace && "all" !== t3.imageFace ? f7(r6, t3.imageFace) : r6;
  }
  static createSphere(e7, t3) {
    return e7 instanceof _ ? new Q2(A4(u9(t3?.densificationFactor || 0), e7, t3)) : (n.getLogger(this.prototype).error(".createSphere()", s3), null);
  }
  static createCylinder(e7, t3) {
    return e7 instanceof _ ? new Q2(A4(h4(t3?.densificationFactor || 0), e7, t3)) : (n.getLogger(this.prototype).error(".createCylinder()", s3), null);
  }
  static createPlane(e7, t3) {
    if (!(e7 instanceof _)) return n.getLogger(this.prototype).error(".createPlane()", s3), null;
    const r6 = t3?.facing ?? "up", o3 = p5(r6, t3?.size);
    return new Q2(A4(m5(r6), e7, __spreadProps(__spreadValues({}, t3), { size: o3 })));
  }
  static createFromPolygon(e7, t3) {
    if (!(e7 instanceof j)) return n.getLogger(this.prototype).error(".createFromPolygon()", n6), null;
    const r6 = c7(e7);
    return new Q2({ vertexAttributes: new u5({ position: r6.position }), components: [new g2({ faces: r6.faces, shading: "flat", material: t3?.material ?? null })], spatialReference: e7.spatialReference, vertexSpace: new c4() });
  }
  static async createFromGLTF(e7, t3, r6) {
    if (!(e7 instanceof _)) {
      const e8 = new i3();
      throw n.getLogger(this.prototype).error(".createfromGLTF()", e8.message), e8;
    }
    const { loadGLTFMesh: o3 } = await p(import("./loadGLTFMesh-S6B264RU.js"), r6);
    return new Q2((await o3(e7, t3, r6)).mesh);
  }
  static createWithExternalSource(e7, t3, r6) {
    const o3 = r6?.extent ?? null, { spatialReference: s4 } = e7, n7 = r6?.transform?.clone() ?? new A2(), i4 = l3(e7, r6), a8 = r6?.unitConversionDisabled, p6 = { source: t3, extent: o3, unitConversionDisabled: a8 }, c10 = new a7();
    return c10.externalSources.push(p6), new Q2({ metadata: c10, transform: n7, vertexSpace: i4, spatialReference: s4 });
  }
  static createIncomplete(e7, t3) {
    const { spatialReference: o3 } = e7, s4 = t3?.transform?.clone() ?? new A2(), n7 = l3(e7, t3), i4 = new Q2({ transform: s4, vertexSpace: n7, spatialReference: o3 });
    return i4.addResolvingPromise(Promise.reject(new r("mesh-incomplete", "Mesh resources are not complete"))), i4;
  }
};
__decorate([a3({ type: [g2], json: { write: true } })], Y2.prototype, "components", void 0), __decorate([a3({ nonNullable: true, types: X2, constructOnly: true, json: { write: true }, clonable: (e7, t3) => n5(t3)?.vertexSpace ?? e7.clone(t3) })], Y2.prototype, "vertexSpace", void 0), __decorate([a3({ type: A2, clonable: (e7, t3) => {
  const r6 = n5(t3);
  return r6 && "transform" in r6 ? r6.transform : e7?.clone() ?? e7;
}, json: { write: true } })], Y2.prototype, "transform", void 0), __decorate([a3({ constructOnly: true, type: a7, clonable: (e7, t3) => n5(t3)?.metadata ?? e7.clone() })], Y2.prototype, "metadata", void 0), __decorate([a3()], Y2.prototype, "hasExtent", null), __decorate([a3()], Y2.prototype, "_transformedExtent", null), __decorate([a3()], Y2.prototype, "_untransformedBounds", null), __decorate([a3()], Y2.prototype, "origin", null), __decorate([a3({ readOnly: true, json: { read: false } })], Y2.prototype, "extent", null), __decorate([a3({ readOnly: true, json: { read: false, write: true, default: true } })], Y2.prototype, "hasZ", void 0), __decorate([a3({ readOnly: true, json: { read: false, write: true, default: false } })], Y2.prototype, "hasM", void 0), __decorate([a3({ type: u5, nonNullable: true, json: { write: true }, clonable: (e7, t3) => n5(t3)?.vertexAttributes ?? e7.clone(t3) })], Y2.prototype, "vertexAttributes", void 0), Y2 = Q2 = __decorate([c("esri.geometry.Mesh")], Y2);
var $ = g();

export {
  Y2 as Y
};
//# sourceMappingURL=chunk-RCTVFKZW.js.map
