import {
  g as g3
} from "./chunk-RXZIA5ML.js";
import {
  u as u4
} from "./chunk-EHL4RJSZ.js";
import "./chunk-SUV4ABMG.js";
import {
  u as u3
} from "./chunk-EGNG62LB.js";
import {
  p as p2
} from "./chunk-MQJV3YQV.js";
import {
  g as g2
} from "./chunk-2HIQV36X.js";
import "./chunk-67ULQRC7.js";
import {
  l as l4
} from "./chunk-EAX6HEDN.js";
import {
  l as l2,
  l2 as l3,
  o,
  o2
} from "./chunk-ZPOFHEY4.js";
import {
  t
} from "./chunk-SPNF4ONJ.js";
import "./chunk-6Q257Z6L.js";
import "./chunk-UFNIHRKY.js";
import {
  e as e3
} from "./chunk-2HXGMW4Y.js";
import "./chunk-RRM5APPM.js";
import {
  q as q2
} from "./chunk-FN2DGEWI.js";
import {
  l
} from "./chunk-GSWONWCV.js";
import {
  c,
  n as n2,
  u as u2
} from "./chunk-53OZ2LR7.js";
import "./chunk-FSUIID2U.js";
import {
  e as e4,
  f,
  s,
  u
} from "./chunk-NZKVNPZ3.js";
import "./chunk-VLXEOEMU.js";
import "./chunk-5QBZBLPU.js";
import {
  A,
  F,
  G,
  H,
  U,
  q,
  v,
  z
} from "./chunk-GDMLFOX7.js";
import "./chunk-OKL2JLQU.js";
import "./chunk-CV6DGA6Y.js";
import "./chunk-DWUF464B.js";
import "./chunk-7EZH3JAM.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-IODIHRP7.js";
import "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import {
  r as r3
} from "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-MYLK6AZ6.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import {
  r as r2
} from "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-QRPQOATM.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-ODWYDPQK.js";
import {
  j,
  n
} from "./chunk-6U5MFJUS.js";
import {
  e as e2
} from "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
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
  p
} from "./chunk-AGHTZMGO.js";
import {
  M,
  T
} from "./chunk-253Z6EVN.js";
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
import {
  e
} from "./chunk-RTVKY37F.js";
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

// node_modules/@arcgis/core/chunks/mat3.js
function e5(e9, t7, o5) {
  const r5 = e9.typedBuffer, f4 = e9.typedBufferStride, d = t7.typedBuffer, n3 = t7.typedBufferStride, c2 = o5 ? o5.count : t7.count;
  let u6 = (o5?.dstIndex ?? 0) * f4, l5 = (o5?.srcIndex ?? 0) * n3;
  for (let p3 = 0; p3 < c2; ++p3) {
    for (let e10 = 0; e10 < 9; ++e10) r5[u6 + e10] = d[l5 + e10];
    u6 += f4, l5 += n3;
  }
}
var t2 = Object.freeze(Object.defineProperty({ __proto__: null, copy: e5 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/mat4.js
function e6(e9, t7, o5) {
  const r5 = e9.typedBuffer, f4 = e9.typedBufferStride, d = t7.typedBuffer, n3 = t7.typedBufferStride, c2 = o5 ? o5.count : t7.count;
  let u6 = (o5?.dstIndex ?? 0) * f4, l5 = (o5?.srcIndex ?? 0) * n3;
  for (let p3 = 0; p3 < c2; ++p3) {
    for (let e10 = 0; e10 < 16; ++e10) r5[u6 + e10] = d[l5 + e10];
    u6 += f4, l5 += n3;
  }
}
var t3 = Object.freeze(Object.defineProperty({ __proto__: null, copy: e6 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/vec32.js
function e7(e9, f4) {
  t4(e9.typedBuffer, f4.typedBuffer, e9.typedBufferStride, f4.typedBufferStride);
}
function t4(e9, t7, f4 = 3, o5 = f4) {
  const r5 = t7.length / o5;
  let n3 = 0, u6 = 0;
  for (let c2 = 0; c2 < r5; ++c2) e9[n3] = t7[u6], e9[n3 + 1] = t7[u6 + 1], e9[n3 + 2] = t7[u6 + 2], n3 += f4, u6 += o5;
}
function f2(e9, t7, f4, o5, r5) {
  const n3 = e9.typedBuffer, u6 = e9.typedBufferStride, c2 = r5?.count ?? e9.count;
  let d = (r5?.dstIndex ?? 0) * u6;
  for (let l5 = 0; l5 < c2; ++l5) n3[d] = t7, n3[d + 1] = f4, n3[d + 2] = o5, d += u6;
}
var o3 = Object.freeze(Object.defineProperty({ __proto__: null, copy: t4, copyView: e7, fill: f2 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/vec42.js
function e8(e9, f4) {
  t5(e9.typedBuffer, f4, e9.typedBufferStride);
}
function t5(e9, t7, f4 = 4) {
  const o5 = t7.typedBuffer, r5 = t7.typedBufferStride, n3 = t7.count;
  let u6 = 0, c2 = 0;
  for (let d = 0; d < n3; ++d) e9[u6] = o5[c2], e9[u6 + 1] = o5[c2 + 1], e9[u6 + 2] = o5[c2 + 2], e9[u6 + 3] = o5[c2 + 3], u6 += f4, c2 += r5;
}
function f3(e9, t7, f4, o5, r5, n3) {
  const u6 = e9.typedBuffer, c2 = e9.typedBufferStride, d = n3?.count ?? e9.count;
  let l5 = (n3?.dstIndex ?? 0) * c2;
  for (let p3 = 0; p3 < d; ++p3) u6[l5] = t7, u6[l5 + 1] = f4, u6[l5 + 2] = o5, u6[l5 + 3] = r5, l5 += c2;
}
var o4 = Object.freeze(Object.defineProperty({ __proto__: null, copy: t5, copyView: e8, fill: f3 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/geometry/support/buffer/utils.js
function r4(s2, r5) {
  return new s2(new ArrayBuffer(r5 * s2.ElementCount * e3(s2.ElementType)));
}

// node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js
async function O(e9, t7, o5) {
  const n3 = new l3(o5?.resolveFile), s2 = await l4(n3, t7, o5), i = s2.model, a = i.lods.shift(), l5 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Map();
  i.textures.forEach((e10, t8) => l5.set(t8, P(e10))), i.materials.forEach((e10, t8) => c2.set(t8, Q(e10, l5)));
  const f4 = H2(a);
  for (const r5 of f4.parts) J(f4, r5, c2);
  const { position: u6, normal: m, tangent: p3, color: d, texCoord0: h } = f4.vertexAttributes, T2 = l(e9, o5), v2 = e9.spatialReference.isGeographic ? l(e9) : T2, w = q2({ vertexAttributes: { position: u6.typedBuffer, normal: m?.typedBuffer, tangent: p3?.typedBuffer }, vertexSpace: v2, spatialReference: e9.spatialReference }, T2, { allowBufferReuse: true, sourceUnit: o5?.unitConversionDisabled ? void 0 : "meters" });
  if (!w) throw new r("load-gltf-mesh:vertex-space-projection", `Failed to load mesh from glTF because we could not convert the vertex space from ${v2.type} to ${T2.type}`);
  return { mesh: { transform: null, vertexSpace: T2, components: f4.components, spatialReference: e9.spatialReference, vertexAttributes: new u4(__spreadProps(__spreadValues({}, w), { color: d?.typedBuffer, uv: h?.typedBuffer })) }, meta: s2.meta };
}
function q3(e9, t7) {
  if (null == e9) return "-";
  const r5 = e9.typedBuffer;
  return `${e(t7, r5.buffer, () => t7.size)}/${r5.byteOffset}/${r5.byteLength}`;
}
function G2(e9) {
  return null != e9 ? e9.toString() : "-";
}
function H2(e9) {
  let t7 = 0;
  const has = { color: false, tangent: false, normal: false, texCoord0: false }, r5 = /* @__PURE__ */ new Map(), n3 = /* @__PURE__ */ new Map(), s2 = [];
  for (const i of e9.parts) {
    const { position: e10, normal: a, color: l5, tangent: c2, texCoord0: f4 } = i.attributes, u6 = `
      ${q3(e10, r5)}/
      ${q3(a, r5)}/
      ${q3(l5, r5)}/
      ${q3(c2, r5)}/
      ${q3(f4, r5)}/
      ${G2(i.transform)}
    `;
    let m = false;
    const p3 = e(n3, u6, () => (m = true, { start: t7, length: e10.count }));
    m && (t7 += e10.count), a && (has.normal = true), l5 && (has.color = true), c2 && (has.tangent = true), f4 && (has.texCoord0 = true), s2.push({ gltf: i, writeVertices: m, region: p3 });
  }
  return { vertexAttributes: { position: r4(v, t7), normal: has.normal ? r4(U, t7) : null, tangent: has.tangent ? r4(F, t7) : null, color: has.color ? r4(z, t7) : null, texCoord0: has.texCoord0 ? r4(A, t7) : null }, parts: s2, components: [] };
}
function P(e9) {
  return new g2({ data: (t(e9.data), e9.data), wrap: Y(e9.parameters.wrap) });
}
function Q(t7, r5) {
  const o5 = new g(ee(t7.color, t7.opacity)), s2 = t7.emissiveFactor ? new g(te(t7.emissiveFactor)) : null, i = (e9) => e9 ? new p2({ scale: e9.scale ? [e9.scale[0], e9.scale[1]] : [1, 1], rotation: M(e9.rotation ?? 0), offset: e9.offset ? [e9.offset[0], e9.offset[1]] : [0, 0] }) : null;
  return new u3({ color: o5, colorTexture: r5.get(t7.colorTexture), normalTexture: r5.get(t7.normalTexture), emissiveColor: s2, emissiveStrength: t7.emissiveStrengthKHR, emissiveTexture: r5.get(t7.emissiveTexture), occlusionTexture: r5.get(t7.occlusionTexture), alphaMode: X(t7.alphaMode), alphaCutoff: t7.alphaCutoff, doubleSided: t7.doubleSided, metallic: t7.metallicFactor, roughness: t7.roughnessFactor, metallicRoughnessTexture: r5.get(t7.metallicRoughnessTexture), colorTextureTransform: i(t7.colorTextureTransform), normalTextureTransform: i(t7.normalTextureTransform), occlusionTextureTransform: i(t7.occlusionTextureTransform), emissiveTextureTransform: i(t7.emissiveTextureTransform), metallicRoughnessTextureTransform: i(t7.metallicRoughnessTextureTransform) });
}
function J(e9, t7, r5) {
  t7.writeVertices && W(e9, t7);
  const { indices: o5, attributes: n3, primitiveType: s2, material: i } = t7.gltf;
  let a = o2(o5 || n3.position.count, s2);
  const l5 = t7.region.start;
  if (l5) {
    const e10 = new Uint32Array(a);
    for (let t8 = 0; t8 < a.length; t8++) e10[t8] += l5;
    a = e10;
  }
  e9.components.push(new g3({ name: t7.gltf.name, faces: a, material: r5.get(i), shading: n3.normal ? "source" : "flat", trustSourceNormals: true }));
}
function W(e9, t7) {
  const { position: r5, normal: o5, tangent: n3, color: c2, texCoord0: f4 } = e9.vertexAttributes, u6 = t7.region.start, { attributes: m, transform: p3 } = t7.gltf, d = m.position.count;
  if (e4(r5.slice(u6, d), m.position, p3), null != m.normal && null != o5) {
    const e10 = j(e2(), p3), t8 = o5.slice(u6, d);
    f(t8, m.normal, e10), T(e10) && s(t8, t8);
  } else null != o5 && f2(o5, 0, 0, 1, { dstIndex: u6, count: d });
  if (null != m.tangent && null != n3) {
    const e10 = n(e2(), p3), t8 = n3.slice(u6, d);
    n2(t8, m.tangent, e10), T(e10) && u2(t8, t8);
  } else null != n3 && f3(n3, 0, 0, 1, 1, { dstIndex: u6, count: d });
  if (null != m.texCoord0 && null != f4 ? o(f4.slice(u6, d), m.texCoord0) : null != f4 && l2(f4, 0, 0, { dstIndex: u6, count: d }), null != m.color && null != c2) {
    const e10 = m.color, t8 = c2.slice(u6, d);
    if (4 === e10.elementCount) e10 instanceof F ? c(t8, e10, 1, 255) : (e10 instanceof z || e10 instanceof H) && c(t8, e10, 1 / 255, 255);
    else {
      f3(t8, 255, 255, 255, 255);
      const r6 = q.fromTypedArray(t8.typedBuffer, t8.typedBufferStride);
      e10 instanceof U ? u(r6, e10, 1, 255) : (e10 instanceof q || e10 instanceof G) && u(r6, e10, 1 / 255, 255);
    }
  } else null != c2 && f3(c2.slice(u6, d), 255, 255, 255, 255);
}
function X(e9) {
  switch (e9) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function Y(e9) {
  return { horizontal: Z(e9.s), vertical: Z(e9.t) };
}
function Z(e9) {
  switch (e9) {
    case 33071:
      return "clamp";
    case 33648:
      return "mirror";
    case 10497:
      return "repeat";
  }
}
function _(e9) {
  return e9 ** (1 / p) * 255;
}
function ee(e9, t7) {
  return r3(_(e9[0]), _(e9[1]), _(e9[2]), t7);
}
function te(e9) {
  return r2(_(e9[0]), _(e9[1]), _(e9[2]));
}
export {
  O as loadGLTFMesh
};
//# sourceMappingURL=loadGLTFMesh-RKHKC5QC.js.map
