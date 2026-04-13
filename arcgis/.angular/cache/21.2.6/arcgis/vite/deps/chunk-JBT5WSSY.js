import {
  R
} from "./chunk-Q67MWUDX.js";
import {
  t as t3
} from "./chunk-NMZ4XVRZ.js";
import {
  m
} from "./chunk-3OHQAA5F.js";
import {
  M
} from "./chunk-NUQMSDRU.js";
import {
  r as r4
} from "./chunk-VQGHDTVE.js";
import {
  i as i4,
  o as o3,
  t as t4,
  u as u3
} from "./chunk-UBZUT3ED.js";
import {
  t as t2
} from "./chunk-DBTV7T3O.js";
import {
  l2 as l4,
  n as n7,
  o2
} from "./chunk-TPQIROG6.js";
import {
  t
} from "./chunk-IN5FJBGG.js";
import {
  d as d2,
  o
} from "./chunk-WJXFIWE3.js";
import {
  d,
  l as l3,
  n as n6,
  r as r2
} from "./chunk-MDYX2LWI.js";
import {
  n as n5
} from "./chunk-NQFL7IHW.js";
import {
  l as l2
} from "./chunk-LOSFMTMN.js";
import {
  F,
  G,
  H,
  U,
  q,
  z
} from "./chunk-B3N4XLHQ.js";
import {
  a as a2
} from "./chunk-ULRT2MRD.js";
import {
  E,
  I,
  _,
  a,
  e as e3,
  i as i2
} from "./chunk-YM62CGUL.js";
import {
  a as a3,
  i as i3
} from "./chunk-HR7MU35Z.js";
import {
  a as a4
} from "./chunk-3HUK6OK6.js";
import {
  r as r3
} from "./chunk-SQMAPKVO.js";
import {
  b
} from "./chunk-2RVDN6RH.js";
import {
  h
} from "./chunk-D4W5U2I5.js";
import {
  u as u2
} from "./chunk-JNCFJPS4.js";
import {
  n as n2,
  u
} from "./chunk-MLBRAI7B.js";
import {
  l,
  w
} from "./chunk-IBGMUXG6.js";
import {
  e as e2
} from "./chunk-XSQPGBLC.js";
import {
  p,
  y
} from "./chunk-S3BACLSK.js";
import {
  i,
  j,
  n as n3
} from "./chunk-4F4IE6P5.js";
import {
  e,
  n as n4
} from "./chunk-EF6HOWDG.js";
import {
  T
} from "./chunk-ZILR7JK7.js";
import {
  f2
} from "./chunk-2OF3JE3F.js";
import {
  f2 as f
} from "./chunk-POW25PFR.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-IDI4VM7T.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/3d/glTF/internal/TextureTransformUtils.js
function s(s3) {
  if (null == s3) return null;
  const a5 = null != s3.offset ? s3.offset : a3, n8 = null != s3.rotation ? s3.rotation : 0, e4 = null != s3.scale ? s3.scale : i3, f3 = n4(1, 0, 0, 0, 1, 0, a5[0], a5[1], 1), c = n4(Math.cos(n8), -Math.sin(n8), 0, Math.sin(n8), Math.cos(n8), 0, 0, 0, 1), m2 = n4(e4[0], 0, 0, 0, e4[1], 0, 0, 0, 1), u4 = e();
  return i(u4, c, m2), i(u4, f3, u4), u4;
}

// node_modules/@arcgis/core/views/3d/layers/graphics/ProcessedObjectResource.js
var s2 = class {
  constructor() {
    this.geometries = new Array(), this.materials = new Array(), this.textures = new Array();
  }
};
var t5 = class {
  constructor(t6, e4, r5) {
    this.name = t6, this.lodThreshold = e4, this.pivotOffset = r5, this.stageResources = new s2(), this.numberOfVertices = 0;
  }
};

// node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js
var w2 = () => n.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");
var x = class {
  constructor(e4, t6, r5) {
    this.resource = e4, this.textures = t6, this.usedMemory = r5;
  }
};
async function h2(e4, t6) {
  const r5 = await b2(e4, t6), n8 = await P(r5.textureDefinitions ?? {}, t6);
  let o4 = 0;
  for (const s3 in n8) if (n8.hasOwnProperty(s3)) {
    const e5 = n8[s3];
    o4 += e5?.image ? e5.image.width * e5.image.height * 4 : 0;
  }
  return new x(r5, n8, o4 + u2(r5));
}
async function b2(r5, n8) {
  const s3 = await b(f2(r5, n8));
  if (s3.ok) return s3.value.data;
  f(s3.error), v(s3.error);
}
function v(e4) {
  throw new r("", `Request for object resource failed: ${e4}`);
}
function A(e4) {
  const t6 = e4.params, r5 = t6.topology;
  let n8 = true;
  switch (t6.vertexAttributes || (w2().warn("Geometry must specify vertex attributes"), n8 = false), t6.topology) {
    case "PerAttributeArray":
      break;
    case "Indexed":
    case null:
    case void 0: {
      const e5 = t6.faces;
      if (e5) {
        if (t6.vertexAttributes) for (const r6 in t6.vertexAttributes) {
          const t7 = e5[r6];
          t7?.values ? (null != t7.valueType && "UInt32" !== t7.valueType && (w2().warn(`Unsupported indexed geometry indices type '${t7.valueType}', only UInt32 is currently supported`), n8 = false), null != t7.valuesPerElement && 1 !== t7.valuesPerElement && (w2().warn(`Unsupported indexed geometry values per element '${t7.valuesPerElement}', only 1 is currently supported`), n8 = false)) : (w2().warn(`Indexed geometry does not specify face indices for '${r6}' attribute`), n8 = false);
        }
      } else w2().warn("Indexed geometries must specify faces"), n8 = false;
      break;
    }
    default:
      w2().warn(`Unsupported topology '${r5}'`), n8 = false;
  }
  e4.params.material || (w2().warn("Geometry requires material"), n8 = false);
  const s3 = e4.params.vertexAttributes;
  for (const o4 in s3) {
    s3[o4].values || (w2().warn("Geometries with externally defined attributes are not yet supported"), n8 = false);
  }
  return n8;
}
function j2(e4, t6) {
  const r5 = new Array(), n8 = new Array(), s3 = new Array(), a5 = new t3(), u4 = e4.resource, c = r3.parse(u4.version || "1.0", "wosr");
  E2.validate(c);
  const p2 = u4.model.name, w3 = u4.model.geometries, x2 = u4.materialDefinitions ?? {}, h3 = e4.textures;
  let b3 = 0;
  const v2 = /* @__PURE__ */ new Map();
  for (let o4 = 0; o4 < w3.length; o4++) {
    const e5 = w3[o4];
    if (!A(e5)) continue;
    const i5 = I2(e5), u5 = e5.params.vertexAttributes, c2 = [], p3 = (t7) => {
      if ("PerAttributeArray" === e5.params.topology) return null;
      const r6 = e5.params.faces;
      for (const e6 in r6) if (e6 === t7) return r6[e6].values;
      return null;
    }, j3 = u5.position, M3 = j3.values.length / j3.valuesPerElement;
    for (const t7 in u5) {
      const e6 = u5[t7], r6 = e6.values, n9 = p3(t7) ?? l2(M3);
      c2.push([t7, new t2(r6, n9, e6.valuesPerElement, true)]);
    }
    const P2 = i5.texture, E3 = h3 && h3[P2];
    if (E3 && !v2.has(P2)) {
      const { image: e6, parameters: t7 } = E3, r6 = new M(e6, t7);
      n8.push(r6), v2.set(P2, r6);
    }
    const T2 = v2.get(P2), k = T2 ? T2.id : void 0, O = i5.material;
    let C = a5.get(O, P2);
    if (null == C) {
      const e6 = x2[O.slice(O.lastIndexOf("/") + 1)].params;
      1 === e6.transparency && (e6.transparency = 0);
      const r6 = E3 ? U2(E3.alphaChannelUsage) : void 0, n9 = { ambient: u(e6.diffuse), diffuse: u(e6.diffuse), opacity: 1 - (e6.transparency || 0), textureAlphaMode: r6, textureAlphaCutoff: 0.33, textureId: k, doubleSided: true, cullFace: 0, colorMixMode: e6.externalColorMixMode || "tint", textureAlphaPremultiplied: E3?.parameters.preMultiplyAlpha ?? false };
      t6?.materialParameters && Object.assign(n9, t6.materialParameters), C = new R(n9, t6), a5.set(O, P2, C);
    }
    s3.push(C);
    const $ = new m(C, c2);
    b3 += c2.find((e6) => "position" === e6[0])?.[1]?.indices.length ?? 0, r5.push($);
  }
  return { engineResources: [{ name: p2, stageResources: { textures: n8, materials: s3, geometries: r5 }, pivotOffset: u4.model.pivotOffset, numberOfVertices: b3, lodThreshold: null }], referenceBoundingBox: M2(r5) };
}
function M2(e4) {
  const t6 = w();
  return e4.forEach((e5) => {
    const r5 = e5.boundingInfo;
    null != r5 && (l(t6, r5.bbMin), l(t6, r5.bbMax));
  }), t6;
}
async function P(e4, t6) {
  const r5 = new Array();
  for (const o4 in e4) {
    const n9 = e4[o4], s4 = n9.images[0].data;
    if (!s4) {
      w2().warn("Externally referenced texture data is not yet supported");
      continue;
    }
    const a5 = n9.encoding + ";base64," + s4, i5 = "/textureDefinitions/" + o4, l5 = "rgba" === n9.channels ? n9.alphaChannelUsage || "transparency" : "none", u4 = { noUnpackFlip: true, wrap: { s: 10497, t: 10497 }, preMultiplyAlpha: 1 !== U2(l5) }, c = t6?.disableTextures ? Promise.resolve(null) : r4(a5, t6);
    r5.push(c.then((e5) => ({ refId: i5, image: e5, parameters: u4, alphaChannelUsage: l5 })));
  }
  const n8 = await Promise.all(r5), s3 = {};
  for (const o4 of n8) s3[o4.refId] = o4;
  return s3;
}
function U2(e4) {
  switch (e4) {
    case "mask":
      return 2;
    case "maskAndTransparency":
      return 3;
    case "none":
      return 1;
    default:
      return 0;
  }
}
function I2(e4) {
  const t6 = e4.params;
  return { id: 1, material: t6.material, texture: t6.texture, region: t6.texture };
}
var E2 = new r3(1, 2, "wosr");

// node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js
async function z2(e4, r5) {
  const o4 = q2(a4(e4));
  if ("wosr" === o4.fileType) {
    const e5 = await (r5.cache ? r5.cache.loadWOSR(o4.url, r5) : h2(o4.url, r5)), { engineResources: t6, referenceBoundingBox: s4 } = j2(e5, r5);
    return { lods: t6, referenceBoundingBox: s4, isEsriSymbolResource: false, isWosr: true };
  }
  let s3;
  if (r5.cache) s3 = await r5.cache.loadGLTF(o4.url, r5, !!r5.usePBR, !!r5.useEmissive);
  else {
    const { loadGLTF: e5 } = await import("./loader-HZELKON5.js");
    s3 = await e5(new l4(), o4.url, r5, r5.usePBR, r5.useEmissive);
  }
  const { engineResources: i5, referenceBoundingBox: n8 } = J(s3, r5, o4.specifiedLodIndex);
  return { lods: i5, referenceBoundingBox: n8, isEsriSymbolResource: s3.meta.isEsriSymbolResource, isWosr: false };
}
function q2(e4) {
  const r5 = e4.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);
  if (r5) return { fileType: "gltf", url: r5[1], specifiedLodIndex: null != r5[4] ? Number(r5[4]) : null };
  return e4.match(/(.*\.(json|json\.gz))$/) ? { fileType: "wosr", url: e4, specifiedLodIndex: null } : { fileType: "unknown", url: e4, specifiedLodIndex: null };
}
function J(e4, r5, t6) {
  const o4 = e4.model, s3 = e4.meta, i5 = o4.meta?.ESRI_proxyEllipsoid, n8 = s3.isEsriSymbolResource && null != i5 && "EsriRealisticTreesStyle" === s3.ESRI_webstyle;
  n8 && !e4.customMeta.esriTreeRendering && (e4.customMeta.esriTreeRendering = true, re(e4, i5));
  const l5 = !!r5.usePBR, a5 = s3.isEsriSymbolResource ? { usePBR: l5, isSchematic: false, treeRendering: n8, mrrFactors: i4 } : { usePBR: l5, isSchematic: false, treeRendering: false, mrrFactors: o3 }, u4 = __spreadProps(__spreadValues({}, r5.materialParameters), { treeRendering: n8 }), c = new Array(), m2 = /* @__PURE__ */ new Map(), f3 = /* @__PURE__ */ new Map(), d3 = o4.lods.length, p2 = w();
  return o4.lods.forEach((e5, s4) => {
    const i6 = true === r5.skipHighLods && (d3 > 1 && 0 === s4 || d3 > 3 && 1 === s4) || false === r5.skipHighLods && null != t6 && s4 !== t6;
    if (i6 && 0 !== s4) return;
    const l6 = new t5(e5.name, e5.lodThreshold, [0, 0, 0]);
    e5.parts.forEach((e6) => {
      const t7 = i6 ? new R({}, r5) : X(o4, e6, l6, a5, u4, m2, f3, r5, n8), { geometry: c2, vertexCount: d4 } = Y(e6, t7 ?? new R({}, r5)), g = c2.boundingInfo;
      null != g && 0 === s4 && (l(p2, g.bbMin), l(p2, g.bbMax)), null != t7 && (l6.stageResources.geometries.push(c2), l6.numberOfVertices += d4);
    }), i6 || c.push(l6);
  }), { engineResources: c, referenceBoundingBox: p2 };
}
function X(r5, t6, o4, s3, i5, n8, l5, a5, c) {
  const m2 = r5.materials.get(t6.material);
  if (null == m2) return null;
  const { normal: f3, color: d3, texCoord0: p2, tangent: g } = t6.attributes, x2 = t6.material + (f3 ? "_normal" : "") + (d3 ? "_color" : "") + (p2 ? "_texCoord0" : "") + (g ? "_tangent" : ""), T2 = null != t6.attributes.texCoord0, b3 = null != t6.attributes.normal, h3 = ee(m2.alphaMode);
  if (!n8.has(x2)) {
    if (T2) {
      const e4 = (e5, t8 = false, o6 = false) => {
        if (null != e5 && !l5.has(e5)) {
          const s4 = r5.textures.get(e5);
          if (s4) {
            const r6 = s4.data, i6 = t8 && !t(r6) ? a5.compressionOptions : void 0;
            l5.set(e5, new M(t(r6) ? r6.data : r6, __spreadProps(__spreadValues({}, s4.parameters), { preMultiplyAlpha: !t(r6) && o6, encoding: t(r6) ? r6.encoding : void 0, compressionOptions: i6 })));
          }
        }
      }, t7 = 1 !== h3 && !c;
      e4(m2.colorTexture, t7, 1 !== h3), e4(m2.normalTexture), e4(m2.occlusionTexture, true), e4(m2.emissiveTexture), e4(m2.metallicRoughnessTexture, true);
    }
    const o5 = y(m2.color[0]), f4 = y(m2.color[1]), d4 = y(m2.color[2]), p3 = null != m2.colorTexture && T2 ? l5.get(m2.colorTexture) : null, g2 = t4(m2), y3 = null != m2.normalTextureTransform?.scale ? m2.normalTextureTransform?.scale : a2;
    n8.set(x2, new R(__spreadValues(__spreadProps(__spreadValues({}, s3), { customDepthTest: 1, textureAlphaMode: h3, textureAlphaCutoff: m2.alphaCutoff, diffuse: [o5, f4, d4], ambient: [o5, f4, d4], opacity: "OPAQUE" === m2.alphaMode ? 1 : m2.opacity, doubleSided: m2.doubleSided, doubleSidedType: "winding-order", cullFace: m2.doubleSided ? 0 : 2, hasVertexColors: !!t6.attributes.color, hasVertexTangents: !!t6.attributes.tangent, normalType: b3 ? 0 : 2, castShadows: true, receiveShadows: m2.receiveShadows, receiveAmbientOcclusion: m2.receiveAmbientOcclusion, textureId: null != p3 ? p3.id : void 0, colorMixMode: m2.colorMixMode, normalTextureId: null != m2.normalTexture && T2 ? l5.get(m2.normalTexture).id : void 0, textureAlphaPremultiplied: null != p3 && !!p3.parameters.preMultiplyAlpha, occlusionTextureId: null != m2.occlusionTexture && T2 ? l5.get(m2.occlusionTexture).id : void 0, emissiveTextureId: null != m2.emissiveTexture && T2 ? l5.get(m2.emissiveTexture).id : void 0, metallicRoughnessTextureId: null != m2.metallicRoughnessTexture && T2 ? l5.get(m2.metallicRoughnessTexture).id : void 0, emissiveBaseColor: [m2.emissiveFactor[0], m2.emissiveFactor[1], m2.emissiveFactor[2]], emissiveStrengthKHR: null != m2.emissiveStrengthKHR ? m2.emissiveStrengthKHR : 1, emissiveStrengthFromSymbol: null != i5.emissiveStrengthFromSymbol ? i5.emissiveStrengthFromSymbol : void 0, mrrFactors: g2 ? u3 : [m2.metallicFactor, m2.roughnessFactor, s3.mrrFactors[2]], isSchematic: g2, colorTextureTransformMatrix: s(m2.colorTextureTransform), normalTextureTransformMatrix: s(m2.normalTextureTransform), scale: [y3[0], y3[1]], occlusionTextureTransformMatrix: s(m2.occlusionTextureTransform), emissiveTextureTransformMatrix: s(m2.emissiveTextureTransform), metallicRoughnessTextureTransformMatrix: s(m2.metallicRoughnessTextureTransform) }), i5), a5));
  }
  const y2 = n8.get(x2);
  if (o4.stageResources.materials.push(y2), T2) {
    const e4 = (e5) => {
      null != e5 && o4.stageResources.textures.push(l5.get(e5));
    };
    e4(m2.colorTexture), e4(m2.normalTexture), e4(m2.occlusionTexture), e4(m2.emissiveTexture), e4(m2.metallicRoughnessTexture);
  }
  return y2;
}
function Y(e4, r5) {
  const t6 = e4.attributes.position.count, n8 = o2(e4.indices || t6, e4.primitiveType), l5 = n5(3 * t6), { typedBuffer: a5, typedBufferStride: u4 } = e4.attributes.position;
  r2(l5, a5, e4.transform, 3, u4);
  const c = [["position", new t2(l5, n8, 3, true)]];
  if (null != e4.attributes.normal) {
    const r6 = n5(3 * t6), { typedBuffer: i5, typedBufferStride: l6 } = e4.attributes.normal;
    j(Z, e4.transform), n6(r6, i5, Z, 3, l6), T(Z) && d(r6, r6), c.push(["normal", new t2(r6, n8, 3, true)]);
  }
  if (null != e4.attributes.tangent) {
    const r6 = n5(4 * t6), { typedBuffer: s3, typedBufferStride: l6 } = e4.attributes.tangent;
    n3(Z, e4.transform), o(r6, s3, Z, 4, l6), T(Z) && d(r6, r6, 4), c.push(["tangent", new t2(r6, n8, 4, true)]);
  }
  if (null != e4.attributes.texCoord0) {
    const r6 = n5(2 * t6), { typedBuffer: o4, typedBufferStride: s3 } = e4.attributes.texCoord0;
    n7(r6, o4, 2, s3), c.push(["uv0", new t2(r6, n8, 2, true)]);
  }
  const m2 = e4.attributes.color;
  if (null != m2) {
    const r6 = new Uint8Array(4 * t6);
    4 === m2.elementCount ? m2 instanceof F ? d2(r6, m2, 1, 255) : (m2 instanceof z || m2 instanceof H) && d2(r6, m2, 1 / 255, 255) : (r6.fill(255), m2 instanceof U ? l3(r6, m2.typedBuffer, 1, 255, 4, m2.typedBufferStride) : (e4.attributes.color instanceof q || e4.attributes.color instanceof G) && l3(r6, m2.typedBuffer, 1 / 255, 255, 4, e4.attributes.color.typedBufferStride)), c.push(["color", new t2(r6, n8, 4, true)]);
  }
  return { geometry: new m(r5, c), vertexCount: t6 };
}
var Z = e();
function ee(e4) {
  switch (e4) {
    case "BLEND":
      return 0;
    case "MASK":
      return 2;
    case "OPAQUE":
    case null:
    case void 0:
      return 1;
  }
}
function re(e4, t6) {
  for (let o4 = 0; o4 < e4.model.lods.length; ++o4) {
    const s3 = e4.model.lods[o4];
    for (const i5 of s3.parts) {
      const s4 = i5.attributes.normal;
      if (null == s4) return;
      const n8 = i5.attributes.position, u4 = n8.count, T2 = n2(), b3 = n2(), h3 = n2(), w3 = new Float32Array(4 * u4), R2 = new Float32Array(3 * u4), S = h(e2(), i5.transform);
      let B = 0, j3 = 0;
      for (let l5 = 0; l5 < u4; l5++) {
        n8.getVec(l5, b3), s4.getVec(l5, T2), E(b3, b3, i5.transform), e3(h3, b3, t6.center), i2(h3, h3, t6.radius);
        const a5 = h3[2], u5 = a(h3), x2 = Math.min(0.45 + 0.55 * u5 * u5, 1) ** p;
        i2(h3, h3, t6.radius), null !== S && E(h3, h3, S), _(h3, h3), o4 + 1 !== e4.model.lods.length && e4.model.lods.length > 1 && I(h3, h3, T2, a5 > -1 ? 0.2 : Math.min(-4 * a5 - 3.8, 1)), R2[B] = h3[0], R2[B + 1] = h3[1], R2[B + 2] = h3[2], B += 3, w3[j3] = x2, w3[j3 + 1] = x2, w3[j3 + 2] = x2, w3[j3 + 3] = 1, j3 += 4;
      }
      i5.attributes.normal = new U(R2.buffer), i5.attributes.color = new F(w3.buffer);
    }
  }
}

export {
  s,
  z2 as z,
  q2 as q
};
//# sourceMappingURL=chunk-JBT5WSSY.js.map
