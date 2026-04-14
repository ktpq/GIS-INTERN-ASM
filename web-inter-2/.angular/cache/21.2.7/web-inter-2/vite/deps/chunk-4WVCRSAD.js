import {
  e as e4,
  n as n3,
  r as r3,
  t as t2
} from "./chunk-FV6K2WVL.js";
import {
  I
} from "./chunk-6Q257Z6L.js";
import {
  e as e3
} from "./chunk-UFNIHRKY.js";
import {
  A as A2,
  C,
  D,
  F,
  G,
  H,
  J,
  K,
  R,
  S,
  U,
  Z,
  k,
  q,
  z
} from "./chunk-GDMLFOX7.js";
import {
  R as R2,
  _ as _2
} from "./chunk-IODIHRP7.js";
import {
  r as r2
} from "./chunk-UQACG6GI.js";
import {
  b,
  c,
  f,
  g,
  i
} from "./chunk-IRS5H2YE.js";
import {
  e as e2,
  t
} from "./chunk-XNNZ2U24.js";
import {
  n as n2
} from "./chunk-ZEWMLOOY.js";
import {
  _,
  nt,
  ot,
  tt
} from "./chunk-ZRWCUWWK.js";
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  A
} from "./chunk-PQFEWUZC.js";
import {
  n2 as n,
  o,
  r3 as r
} from "./chunk-TX75HZKJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js
function e5(e8 = {}) {
  return __spreadValues({ color: [1, 1, 1], opacity: 1, alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: false, castShadows: true, receiveShadows: true, receiveAmbientOcclusion: true, colorTexture: null, normalTexture: null, occlusionTexture: null, emissiveTexture: null, emissiveStrengthKHR: null, metallicRoughnessTexture: null, colorTextureTransform: null, normalTextureTransform: null, occlusionTextureTransform: null, emissiveTextureTransform: null, metallicRoughnessTextureTransform: null, emissiveFactor: [0, 0, 0], metallicFactor: 1, roughnessFactor: 1, colorMixMode: "multiply" }, e8);
}
function l(e8, l4 = {}) {
  return { data: e8, parameters: __spreadValues({ wrap: __spreadValues({ s: 10497, t: 10497 }, l4.wrap), noUnpackFlip: true, mipmap: false }, l4) };
}

// node_modules/@arcgis/core/chunks/scalar.js
function e6(e8, t7) {
  const o3 = e8.count;
  t7 || (t7 = new e8.TypedArrayConstructor(o3));
  for (let r7 = 0; r7 < o3; r7++) t7[r7] = e8.get(r7);
  return t7;
}
var t3 = Object.freeze(Object.defineProperty({ __proto__: null, makeDense: e6 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/libs/dracoMeshDecoder/dracoMeshDecoder.js
var r4;
function t4() {
  return r4 ??= (async () => {
    const { default: r7 } = await import("./draco_mesh_decoder-XMVBIRB5.js");
    return await r7({ locateFile: (r8) => n2(`esri/libs/dracoMeshDecoder/${r8}`) });
  })(), r4;
}

// node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js
var t5 = class {
  constructor(t7) {
    this._data = t7, this._offset4 = 0, this._dataUint32 = new Uint32Array(this._data, 0, Math.floor(this._data.byteLength / 4));
  }
  readUint32() {
    const t7 = this._offset4;
    return this._offset4 += 1, this._dataUint32[t7];
  }
  readUint8Array(t7) {
    const s = 4 * this._offset4;
    return this._offset4 += t7 / 4, new Uint8Array(this._data, s, t7);
  }
  remainingBytes() {
    return this._data.byteLength - 4 * this._offset4;
  }
};

// node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js
var e7 = { baseColorFactor: [1, 1, 1, 1], metallicFactor: 1, roughnessFactor: 1 };
var t6 = { pbrMetallicRoughness: e7, emissiveFactor: [0, 0, 0], alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: false };
var o2 = { ESRI_externalColorMixMode: "tint", ESRI_receiveShadows: true, ESRI_receiveAmbientOcclusion: true };
var r5 = (r7 = {}) => {
  const l4 = __spreadValues(__spreadValues({}, e7), r7.pbrMetallicRoughness), i3 = a(__spreadValues(__spreadValues({}, o2), r7.extras));
  return __spreadProps(__spreadValues(__spreadValues({}, t6), r7), { pbrMetallicRoughness: l4, extras: i3 });
};
function a(e8) {
  switch (e8.ESRI_externalColorMixMode) {
    case "multiply":
    case "tint":
    case "ignore":
    case "replace":
      break;
    default:
      e8.ESRI_externalColorMixMode, e8.ESRI_externalColorMixMode = "tint";
  }
  return e8;
}
var l2 = { magFilter: 9729, minFilter: 9987, wrapS: 10497, wrapT: 10497 };
var i2 = (e8) => __spreadValues(__spreadValues({}, l2), e8);

// node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js
function r6(r7) {
  let e8, t7;
  return r7.replace(/^(.*\/)?([^/]*)$/, (r8, a2, i3) => (e8 = a2 || "", t7 = i3 || "", "")), { dirPart: e8, filePart: t7 };
}

// node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js
var k2 = { MAGIC: 1179937895, CHUNK_TYPE_JSON: 1313821514, CHUNK_TYPE_BIN: 5130562 };
var Y = class _Y {
  constructor(t7, r7, o3, n5) {
    if (this._context = t7, this.uri = r7, this.json = o3, this._glbBuffer = n5, this._bufferLoaders = /* @__PURE__ */ new Map(), this._textureLoaders = /* @__PURE__ */ new Map(), this._dracoBuffersSize = 0, this._textureCache = /* @__PURE__ */ new Map(), this._materialCache = /* @__PURE__ */ new Map(), this._nodeParentMap = /* @__PURE__ */ new Map(), this._nodeTransformCache = /* @__PURE__ */ new Map(), this._supportedExtensions = ["KHR_texture_basisu", "KHR_texture_transform", "KHR_draco_mesh_compression", "KHR_materials_emissive_strength"], this._baseUri = r6(this.uri).dirPart, this._checkVersionSupported(), this._checkRequiredExtensionsSupported(), null == o3.scenes) throw new r("gltf-loader-unsupported-feature", "Scenes must be defined.");
    if (null == o3.meshes) throw new r("gltf-loader-unsupported-feature", "Meshes must be defined");
    if (null == o3.nodes) throw new r("gltf-loader-unsupported-feature", "Nodes must be defined.");
    this._computeNodeParents();
  }
  static async load(t7, r7, o3) {
    if (tt(r7)) {
      const e8 = ot(r7);
      if (e8 && "model/gltf-binary" !== e8.mediaType) try {
        const o5 = JSON.parse(e8.isBase64 ? atob(e8.data) : e8.data);
        return new _Y(t7, r7, o5);
      } catch {
      }
      const o4 = nt(r7);
      if (_Y._isGLBData(o4)) return this._fromGLBData(t7, r7, o4);
    }
    if (te.test(r7) || "gltf" === o3?.expectedType) {
      const e8 = await t7.loadJSON(r7, o3);
      return new _Y(t7, r7, e8);
    }
    const n5 = await t7.loadBinary(r7, o3);
    if (_Y._isGLBData(n5)) return this._fromGLBData(t7, r7, n5);
    if (re.test(r7) || "glb" === o3?.expectedType) throw new r("gltf-loader-invalid-glb", "This is not a valid glb file.");
    const u2 = await t7.loadJSON(r7, o3);
    return new _Y(t7, r7, u2);
  }
  static _isGLBData(e8) {
    if (null == e8) return false;
    const t7 = new t5(e8);
    return t7.remainingBytes() >= 4 && t7.readUint32() === k2.MAGIC;
  }
  static async _fromGLBData(e8, t7, r7) {
    const o3 = await _Y._parseGLBData(r7);
    return new _Y(e8, t7, o3.json, o3.binaryData);
  }
  static async _parseGLBData(r7) {
    const o3 = new t5(r7);
    if (o3.remainingBytes() < 12) throw new r("gltf-loader-error", "glb binary data is insufficiently large.");
    const n5 = o3.readUint32(), s = o3.readUint32(), a2 = o3.readUint32();
    if (n5 !== k2.MAGIC) throw new r("gltf-loader-error", "Magic first 4 bytes do not fit to expected glb value.");
    if (r7.byteLength < a2) throw new r("gltf-loader-error", "glb binary data is smaller than header specifies.");
    if (2 !== s) throw new r("gltf-loader-unsupported-feature", "An unsupported glb container version was detected. Only version 2 is supported.");
    let i3, u2, f2 = 0;
    for (; o3.remainingBytes() >= 8; ) {
      const r8 = o3.readUint32(), n6 = o3.readUint32();
      if (0 === f2) {
        if (n6 !== k2.CHUNK_TYPE_JSON) throw new r("gltf-loader-error", "First glb chunk must be JSON.");
        if (r8 < 0) throw new r("gltf-loader-error", "No JSON data found.");
        i3 = await n3(o3.readUint8Array(r8));
      } else if (1 === f2) {
        if (n6 !== k2.CHUNK_TYPE_BIN) throw new r("gltf-loader-unsupported-feature", "Second glb chunk expected to be BIN.");
        u2 = o3.readUint8Array(r8);
      } else n.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");
      f2 += 1;
    }
    if (!i3) throw new r("gltf-loader-error", "No glb JSON chunk detected.");
    return { json: i3, binaryData: u2 };
  }
  async getBuffer(t7, r7) {
    const o3 = this.json.buffers[t7];
    if (null == o3.uri) {
      if (null == this._glbBuffer) throw new r("gltf-loader-error", "glb buffer not present");
      return this._glbBuffer;
    }
    const n5 = await this._getBufferLoader(t7, r7);
    if (n5.byteLength !== o3.byteLength) throw new r("gltf-loader-error", "Buffer byte lengths should match.");
    return n5;
  }
  async _getBufferLoader(e8, t7) {
    const r7 = this._bufferLoaders.get(e8);
    if (r7) return r7;
    const o3 = this.json.buffers[e8].uri, n5 = this._context.loadBinary(this._resolveUri(o3), t7).then((e9) => new Uint8Array(e9));
    return this._bufferLoaders.set(e8, n5), n5;
  }
  _validateAccessor(t7) {
    if (!this.json.accessors) throw new r("gltf-loader-unsupported-feature", "Accessors missing.");
    const r7 = this.json.accessors[t7];
    if (r7.type in ["MAT2", "MAT3", "MAT4"]) throw new r("gltf-loader-unsupported-feature", `AttributeType ${r7.type} is not supported`);
    return r7;
  }
  _getComponentInfo(e8, t7) {
    const r7 = $[e8.type], o3 = t7?.componentType || e8.componentType, n5 = W[o3];
    return { componentType: o3, componentCount: r7, componentByteSize: n5, denseByteStride: r7 * n5 };
  }
  getDracoAccessor(e8, t7) {
    const r7 = this._validateAccessor(e8), o3 = t7.accessorInfos.get(e8), { componentType: n5, componentCount: s, componentByteSize: a2, denseByteStride: i3 } = this._getComponentInfo(r7, o3);
    return { raw: t7.data.buffer, byteStride: i3, byteOffset: t7.data.byteOffset + (o3?.byteOffset || 0), entryCount: o3?.count ?? r7.count, isDenselyPacked: true, componentCount: s, componentByteSize: a2, componentType: n5, min: r7.min, max: r7.max, normalized: !!r7.normalized };
  }
  async getAccessor(t7, r7) {
    const o3 = this._validateAccessor(t7);
    if (null == o3?.bufferView) throw new r("gltf-loader-unsupported-feature", "Some accessor does not specify a bufferView.");
    const { componentCount: n5, componentByteSize: s, denseByteStride: a2 } = this._getComponentInfo(o3), i3 = this.json.bufferViews[o3.bufferView], u2 = await this.getBuffer(i3.buffer, r7), f2 = i3.byteStride || a2;
    return { raw: u2.buffer, byteStride: f2, byteOffset: u2.byteOffset + (i3.byteOffset || 0) + (o3.byteOffset || 0), entryCount: o3.count, isDenselyPacked: f2 === a2, componentCount: n5, componentByteSize: s, componentType: o3.componentType, min: o3.min, max: o3.max, normalized: !!o3.normalized };
  }
  async getIndexData(e8, t7, r7) {
    if (null == e8.indices) return;
    const o3 = e8.indices, n5 = r7 ? this.getDracoAccessor(o3, r7) : await this.getAccessor(o3, t7);
    if (n5.isDenselyPacked) switch (n5.componentType) {
      case R2.UNSIGNED_BYTE:
        return new Uint8Array(n5.raw, n5.byteOffset, n5.entryCount);
      case R2.UNSIGNED_SHORT:
        return new Uint16Array(n5.raw, n5.byteOffset, n5.entryCount);
      case R2.UNSIGNED_INT:
        return new Uint32Array(n5.raw, n5.byteOffset, n5.entryCount);
    }
    else switch (n5.componentType) {
      case R2.UNSIGNED_BYTE:
        return e6(Z2(S, n5));
      case R2.UNSIGNED_SHORT:
        return e6(Z2(C, n5));
      case R2.UNSIGNED_INT:
        return e6(Z2(J, n5));
    }
  }
  async getPositionData(t7, r7, n5) {
    if (null == t7.attributes.POSITION) throw new r("gltf-loader-unsupported-feature", "No POSITION vertex data found.");
    const s = t7.attributes.POSITION, a2 = n5 ? this.getDracoAccessor(s, n5) : await this.getAccessor(s, r7);
    if (a2.componentType !== R2.FLOAT) throw new r("gltf-loader-unsupported-feature", "Expected type FLOAT for POSITION vertex attribute, but found " + o(R2, a2.componentType));
    if (3 !== a2.componentCount) throw new r("gltf-loader-unsupported-feature", "POSITION vertex attribute must have 3 components, but found " + a2.componentCount.toFixed());
    return Z2(U, a2);
  }
  async getNormalData(t7, r7, n5) {
    if (null == t7.attributes.NORMAL) throw new r("gltf-loader-error", "No NORMAL vertex data found.");
    const s = t7.attributes.NORMAL, a2 = n5 ? this.getDracoAccessor(s, n5) : await this.getAccessor(s, r7);
    if (a2.componentType !== R2.FLOAT) throw new r("gltf-loader-unsupported-feature", "Expected type FLOAT for NORMAL vertex attribute, but found " + o(R2, a2.componentType));
    if (3 !== a2.componentCount) throw new r("gltf-loader-unsupported-feature", "NORMAL vertex attribute must have 3 components, but found " + a2.componentCount.toFixed());
    return Z2(U, a2);
  }
  async getTangentData(t7, r7, n5) {
    if (null == t7.attributes.TANGENT) throw new r("gltf-loader-error", "No TANGENT vertex data found.");
    const s = t7.attributes.TANGENT, a2 = n5 ? this.getDracoAccessor(s, n5) : await this.getAccessor(s, r7);
    if (a2.componentType !== R2.FLOAT) throw new r("gltf-loader-unsupported-feature", "Expected type FLOAT for TANGENT vertex attribute, but found " + o(R2, a2.componentType));
    if (4 !== a2.componentCount) throw new r("gltf-loader-unsupported-feature", "TANGENT vertex attribute must have 4 components, but found " + a2.componentCount.toFixed());
    return Z2(F, a2);
  }
  async getTextureCoordinates(t7, r7, o3) {
    if (null == t7.attributes.TEXCOORD_0) throw new r("gltf-loader-error", "No TEXCOORD_0 vertex data found.");
    const n5 = t7.attributes.TEXCOORD_0, s = o3 ? this.getDracoAccessor(n5, o3) : await this.getAccessor(n5, r7);
    if (2 !== s.componentCount) throw new r("gltf-loader-unsupported-feature", "TEXCOORD_0 vertex attribute must have 2 components, but found " + s.componentCount.toFixed());
    if (s.componentType === R2.FLOAT) return Z2(A2, s);
    if (!s.normalized) throw new r("gltf-loader-unsupported-feature", "Integer component types are only supported for a normalized accessor for TEXCOORD_0.");
    return Q(s);
  }
  async getVertexColors(t7, r7, n5) {
    if (null == t7.attributes.COLOR_0) throw new r("gltf-loader-error", "No COLOR_0 vertex data found.");
    const s = t7.attributes.COLOR_0, a2 = n5 ? this.getDracoAccessor(s, n5) : await this.getAccessor(s, r7);
    if (4 !== a2.componentCount && 3 !== a2.componentCount) throw new r("gltf-loader-unsupported-feature", "COLOR_0 attribute must have 3 or 4 components, but found " + a2.componentCount.toFixed());
    if (4 === a2.componentCount) {
      if (a2.componentType === R2.FLOAT) return Z2(F, a2);
      if (a2.componentType === R2.UNSIGNED_BYTE) return Z2(z, a2);
      if (a2.componentType === R2.UNSIGNED_SHORT) return Z2(H, a2);
    } else if (3 === a2.componentCount) {
      if (a2.componentType === R2.FLOAT) return Z2(U, a2);
      if (a2.componentType === R2.UNSIGNED_BYTE) return Z2(q, a2);
      if (a2.componentType === R2.UNSIGNED_SHORT) return Z2(G, a2);
    }
    throw new r("gltf-loader-unsupported-feature", "Unsupported component type for COLOR_0 attribute: " + o(R2, a2.componentType));
  }
  hasPositions(e8) {
    return void 0 !== e8.attributes.POSITION;
  }
  hasNormals(e8) {
    return void 0 !== e8.attributes.NORMAL;
  }
  hasVertexColors(e8) {
    return void 0 !== e8.attributes.COLOR_0;
  }
  hasTextureCoordinates(e8) {
    return void 0 !== e8.attributes.TEXCOORD_0;
  }
  hasTangents(e8) {
    return void 0 !== e8.attributes.TANGENT;
  }
  async getMaterial(e8, t7, r7, o3) {
    let n5 = e8.material ? this._materialCache.get(e8.material) : void 0;
    if (!n5) {
      const s = null != e8.material ? r5(this.json.materials[e8.material]) : r5(), a2 = s.pbrMetallicRoughness, i3 = this.hasVertexColors(e8), u2 = this.getTexture(a2.baseColorTexture, t7), f2 = this.getTexture(s.normalTexture, t7), c3 = r7 ? this.getTexture(s.occlusionTexture, t7) : void 0, d2 = o3 ? this.getTexture(s.emissiveTexture, t7) : void 0, l4 = r7 ? this.getTexture(a2.metallicRoughnessTexture, t7) : void 0, p = null != e8.material ? e8.material : -1;
      n5 = { alphaMode: s.alphaMode, alphaCutoff: s.alphaCutoff, color: a2.baseColorFactor, doubleSided: !!s.doubleSided, colorTexture: await u2, normalTexture: await f2, name: s.name, id: p, occlusionTexture: await c3, emissiveTexture: await d2, emissiveFactor: s.emissiveFactor, emissiveStrengthKHR: s.extensions?.KHR_materials_emissive_strength?.emissiveStrength, metallicFactor: a2.metallicFactor, roughnessFactor: a2.roughnessFactor, metallicRoughnessTexture: await l4, hasVertexColors: i3, ESRI_externalColorMixMode: s.extras.ESRI_externalColorMixMode, colorTextureTransform: a2?.baseColorTexture?.extensions?.KHR_texture_transform, normalTextureTransform: s.normalTexture?.extensions?.KHR_texture_transform, occlusionTextureTransform: s.occlusionTexture?.extensions?.KHR_texture_transform, emissiveTextureTransform: s.emissiveTexture?.extensions?.KHR_texture_transform, metallicRoughnessTextureTransform: a2?.metallicRoughnessTexture?.extensions?.KHR_texture_transform, receiveAmbientOcclusion: s.extras.ESRI_receiveAmbientOcclusion, receiveShadows: s.extras.ESRI_receiveShadows };
    }
    return n5;
  }
  async decode(t7, r7) {
    const o3 = t7.extensions?.KHR_draco_mesh_compression;
    if (!o3) return;
    if (null == t7.indices) throw new r("gltf-loader-error", "Found Draco compressed primitive without indices.");
    const n5 = this.json.bufferViews[o3.bufferView], s = await this.getBuffer(n5.buffer, r7), a2 = (await t4()).decode(new Uint8Array(s.buffer, s.byteOffset + (n5.byteOffset || 0), n5.byteLength));
    this._bufferLoaders.delete(n5.buffer);
    const i3 = /* @__PURE__ */ new Map([[t7.indices, a2.indices], [t7.attributes.POSITION, a2.positions]]);
    return t7.attributes.TEXCOORD_0 && i3.set(t7.attributes.TEXCOORD_0, a2.uvs), t7.attributes.NORMAL && i3.set(t7.attributes.NORMAL, a2.normals), t7.attributes.COLOR_0 && i3.set(t7.attributes.COLOR_0, a2.colors), t7.attributes.TANGENT && i3.set(t7.attributes.TANGENT, a2.tangents), this._dracoBuffersSize += a2.buffer.byteLength, { data: a2.buffer, accessorInfos: i3 };
  }
  async getTexture(t7, o3) {
    if (!t7) return;
    if (0 !== (t7.texCoord || 0)) throw new r("gltf-loader-unsupported-feature", "Only TEXCOORD with index 0 is supported.");
    const n5 = t7.index, s = this.json.textures[n5], a2 = i2(null != s.sampler ? this.json.samplers[s.sampler] : {}), i3 = ee(s), u2 = this.json.images[i3], f2 = await this._loadTextureImageData(n5, s, o3);
    return e(this._textureCache, n5, () => {
      const t8 = (e8) => 33071 === e8 || 33648 === e8 || 10497 === e8, r7 = (t9) => {
        throw new r("gltf-loader-error", `Unexpected TextureSampler WrapMode: ${t9}`);
      };
      return { data: f2, wrapS: t8(a2.wrapS) ? a2.wrapS : r7(a2.wrapS), wrapT: t8(a2.wrapT) ? a2.wrapT : r7(a2.wrapT), minFilter: a2.minFilter, name: u2.name, id: n5 };
    });
  }
  getNodeTransform(e8) {
    if (void 0 === e8) return X;
    let t7 = this._nodeTransformCache.get(e8);
    if (!t7) {
      const r7 = this.getNodeTransform(this._getNodeParent(e8)), o3 = this.json.nodes[e8];
      o3.matrix ? t7 = c(e2(), r7, o3.matrix) : o3.translation || o3.rotation || o3.scale ? (t7 = t(r7), o3.translation && i(t7, t7, o3.translation), o3.rotation && (J2[3] = I(J2, o3.rotation), b(t7, t7, J2[3], J2)), o3.scale && f(t7, t7, o3.scale)) : t7 = t(r7), this._nodeTransformCache.set(e8, t7);
    }
    return t7;
  }
  _resolveUri(e8) {
    return _(e8, this._baseUri);
  }
  _getNodeParent(e8) {
    return this._nodeParentMap.get(e8);
  }
  _checkVersionSupported() {
    const e8 = r2.parse(this.json.asset.version, "glTF");
    q2.validate(e8);
  }
  _checkRequiredExtensionsSupported() {
    const t7 = this.json;
    if (t7.extensionsRequired) {
      if (!t7.extensionsRequired.every((e8) => this._supportedExtensions.includes(e8))) throw new r("gltf-loader-unsupported-feature", "gltf loader was not able to load unsupported feature. Required extensions: " + t7.extensionsRequired.join(", "));
    }
  }
  _computeNodeParents() {
    this.json.nodes.forEach((e8, t7) => {
      e8.children && e8.children.forEach((e9) => {
        this._nodeParentMap.set(e9, t7);
      });
    });
  }
  async _loadTextureImageData(e8, t7, r7) {
    const o3 = this._textureLoaders.get(e8);
    if (o3) return o3;
    const n5 = this._createTextureLoader(t7, r7);
    return this._textureLoaders.set(e8, n5), n5;
  }
  async _createTextureLoader(t7, r7) {
    const o3 = ee(t7), n5 = this.json.images[o3];
    if (n5.uri) {
      if (n5.uri.endsWith(".ktx2")) {
        const e8 = await this._context.loadBinary(this._resolveUri(n5.uri), r7);
        return new e4(new Uint8Array(e8));
      }
      return this._context.loadImage(this._resolveUri(n5.uri), r7);
    }
    if (null == n5.bufferView) throw new r("gltf-loader-unsupported-feature", "Image bufferView must be defined.");
    if (null == n5.mimeType) throw new r("gltf-loader-unsupported-feature", "Image mimeType must be defined.");
    const s = this.json.bufferViews[n5.bufferView], a2 = await this.getBuffer(s.buffer, r7);
    if (null != s.byteStride) throw new r("gltf-loader-unsupported-feature", "byteStride not supported for image buffer");
    const i3 = a2.byteOffset + (s.byteOffset || 0);
    return r3(new Uint8Array(a2.buffer, i3, s.byteLength), n5.mimeType);
  }
  async getLoadedBuffersSize() {
    if (this._glbBuffer) return this._glbBuffer.byteLength;
    const e8 = await A(Array.from(this._bufferLoaders.values())), t7 = await A(Array.from(this._textureLoaders.values()));
    return e8.reduce((e9, t8) => e9 + (t8?.byteLength ?? 0), 0) + this._dracoBuffersSize + t7.reduce((e9, t8) => e9 + (t8 ? t2(t8) ? t8.data.byteLength : t8.width * t8.height * 4 : 0), 0);
  }
};
var X = g(e2(), Math.PI / 2);
var q2 = new r2(2, 0, "glTF");
var J2 = e3();
var $ = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 };
var W = { [R2.BYTE]: 1, [R2.UNSIGNED_BYTE]: 1, [R2.SHORT]: 2, [R2.UNSIGNED_SHORT]: 2, [R2.HALF_FLOAT]: 2, [R2.FLOAT]: 4, [R2.INT]: 4, [R2.UNSIGNED_INT]: 4 };
function Q(e8) {
  switch (e8.componentType) {
    case R2.BYTE:
      return new R(e8.raw, e8.byteOffset, e8.byteStride, e8.byteOffset + e8.byteStride * e8.entryCount);
    case R2.UNSIGNED_BYTE:
      return new k(e8.raw, e8.byteOffset, e8.byteStride, e8.byteOffset + e8.byteStride * e8.entryCount);
    case R2.SHORT:
      return new Z(e8.raw, e8.byteOffset, e8.byteStride, e8.byteOffset + e8.byteStride * e8.entryCount);
    case R2.UNSIGNED_SHORT:
      return new D(e8.raw, e8.byteOffset, e8.byteStride, e8.byteOffset + e8.byteStride * e8.entryCount);
    case R2.UNSIGNED_INT:
      return new K(e8.raw, e8.byteOffset, e8.byteStride, e8.byteOffset + e8.byteStride * e8.entryCount);
    case R2.FLOAT:
      return new A2(e8.raw, e8.byteOffset, e8.byteStride, e8.byteOffset + e8.byteStride * e8.entryCount);
  }
}
function Z2(e8, t7) {
  return new e8(t7.raw, t7.byteOffset, t7.byteStride, t7.byteOffset + t7.byteStride * (t7.entryCount - 1) + t7.componentByteSize * t7.componentCount);
}
function ee(t7) {
  if (null != t7.extensions?.KHR_texture_basisu) return t7.extensions.KHR_texture_basisu.source;
  if (null !== t7.source) return t7.source;
  throw new r("gltf-loader-unsupported-feature", "Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.");
}
var te = /\.gltf$/i;
var re = /\.glb$/i;

// node_modules/@arcgis/core/views/3d/glTF/loader.js
var n4 = 0;
async function l3(r7, s, l4 = {}, m2 = true, T2 = true) {
  const p = await Y.load(r7, s, l4), f2 = "gltf_" + n4++, x = { lods: [], materials: /* @__PURE__ */ new Map(), textures: /* @__PURE__ */ new Map(), meta: u(p) }, g2 = !(!p.json.asset.extras || "symbolResource" !== p.json.asset.extras.ESRI_type), h = p.json.asset.extras?.ESRI_webstyleSymbol?.webstyle, w = /* @__PURE__ */ new Map();
  let v = false;
  await c2(p, async (r8, s2, a2, n5) => {
    const u2 = w.get(a2) ?? 0;
    w.set(a2, u2 + 1);
    const c3 = void 0 !== r8.mode ? r8.mode : _2.TRIANGLES, g3 = c3 === _2.TRIANGLES || c3 === _2.TRIANGLE_STRIP || c3 === _2.TRIANGLE_FAN ? c3 : null;
    if (null == g3) return void n.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode (" + o(_2, c3) + "). Skipping primitive.");
    if (!p.hasPositions(r8)) return void n.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");
    const h2 = await p.decode(r8, l4);
    v ||= !!h2;
    const S3 = p.getPositionData(r8, l4, h2), R3 = p.getMaterial(r8, l4, m2, T2), _3 = p.hasNormals(r8) ? p.getNormalData(r8, l4, h2) : null, F2 = p.hasTangents(r8) ? p.getTangentData(r8, l4, h2) : null, y = p.hasTextureCoordinates(r8) ? p.getTextureCoordinates(r8, l4, h2) : null, E = p.hasVertexColors(r8) ? p.getVertexColors(r8, l4, h2) : null, I2 = p.getIndexData(r8, l4, h2), M = { name: n5, transform: t(s2), attributes: { position: await S3, normal: _3 ? await _3 : null, texCoord0: y ? await y : null, color: E ? await E : null, tangent: F2 ? await F2 : null }, indices: await I2, primitiveType: g3, material: d(x, await R3, f2) };
    let b2 = null;
    null != x.meta?.ESRI_lod && "screenSpaceRadius" === x.meta.ESRI_lod.metric && (b2 = x.meta.ESRI_lod.thresholds[a2]), x.lods[a2] = x.lods[a2] || { parts: [], name: n5, lodThreshold: b2 }, x.lods[a2].parts[u2] = M;
  });
  for (const e8 of x.lods) e8.parts = e8.parts.filter((e9) => !!e9);
  const S2 = await p.getLoadedBuffersSize();
  return { model: x, meta: { isEsriSymbolResource: g2, uri: p.uri, ESRI_webstyle: h, isDracoDecompressed: v }, customMeta: {}, usedMemory: S2 };
}
function u(e8) {
  const o3 = e8.json;
  let t7 = null;
  return o3.nodes.forEach((e9) => {
    const o4 = e9.extras;
    null != o4 && (o4.ESRI_proxyEllipsoid || o4.ESRI_lod) && (t7 = o4);
  }), t7;
}
async function c2(o3, t7) {
  const r7 = o3.json, s = r7.scenes[r7.scene || 0].nodes, a2 = s.length > 1, i3 = [];
  for (const e8 of s) {
    const o4 = r7.nodes[e8];
    if (i3.push(n5(e8, 0)), m(o4) && !a2) {
      o4.extensions.MSFT_lod.ids.forEach((e9, o5) => n5(e9, o5 + 1));
    }
  }
  async function n5(s2, a3) {
    const l4 = r7.nodes[s2], u2 = o3.getNodeTransform(s2);
    if (null != l4.weights && n.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."), null != l4.mesh) {
      const e8 = r7.meshes[l4.mesh];
      for (const o4 of e8.primitives) i3.push(t7(o4, u2, a3, e8.name));
    }
    for (const e8 of l4.children || []) i3.push(n5(e8, a3));
  }
  await Promise.all(i3);
}
function m(e8) {
  return e8.extensions?.MSFT_lod && Array.isArray(e8.extensions.MSFT_lod.ids);
}
function d(e8, o3, t7) {
  const a2 = (o4) => {
    const r7 = `${t7}_tex_${o4 && o4.id}${o4?.name ? "_" + o4.name : ""}`;
    if (o4 && !e8.textures.has(r7)) {
      const t8 = l(o4.data, { wrap: { s: o4.wrapS, t: o4.wrapT }, mipmap: T.has(o4.minFilter), noUnpackFlip: true });
      e8.textures.set(r7, t8);
    }
    return r7;
  }, i3 = `${t7}_mat_${o3.id}_${o3.name}`;
  if (!e8.materials.has(i3)) {
    const t8 = e5({ color: [o3.color[0], o3.color[1], o3.color[2]], opacity: o3.color[3], alphaMode: o3.alphaMode, alphaCutoff: o3.alphaCutoff, doubleSided: o3.doubleSided, colorMixMode: o3.ESRI_externalColorMixMode, colorTexture: o3.colorTexture ? a2(o3.colorTexture) : void 0, normalTexture: o3.normalTexture ? a2(o3.normalTexture) : void 0, occlusionTexture: o3.occlusionTexture ? a2(o3.occlusionTexture) : void 0, emissiveTexture: o3.emissiveTexture ? a2(o3.emissiveTexture) : void 0, metallicRoughnessTexture: o3.metallicRoughnessTexture ? a2(o3.metallicRoughnessTexture) : void 0, emissiveFactor: [o3.emissiveFactor[0], o3.emissiveFactor[1], o3.emissiveFactor[2]], emissiveStrengthKHR: o3.emissiveStrengthKHR, colorTextureTransform: o3.colorTextureTransform, normalTextureTransform: o3.normalTextureTransform, occlusionTextureTransform: o3.occlusionTextureTransform, emissiveTextureTransform: o3.emissiveTextureTransform, metallicRoughnessTextureTransform: o3.metallicRoughnessTextureTransform, metallicFactor: o3.metallicFactor, roughnessFactor: o3.roughnessFactor, receiveShadows: o3.receiveShadows, receiveAmbientOcclusion: o3.receiveAmbientOcclusion });
    e8.materials.set(i3, t8);
  }
  return i3;
}
var T = /* @__PURE__ */ new Set([9987, 9985]);

export {
  l3 as l
};
//# sourceMappingURL=chunk-4WVCRSAD.js.map
