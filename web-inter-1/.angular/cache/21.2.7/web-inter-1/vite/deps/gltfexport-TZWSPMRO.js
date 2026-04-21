import {
  t as t3
} from "./chunk-V3Y7GOQJ.js";
import {
  N,
  W
} from "./chunk-6Q257Z6L.js";
import {
  u as u2
} from "./chunk-RO74S7Q5.js";
import "./chunk-FIXUPULY.js";
import "./chunk-REXVAHXZ.js";
import "./chunk-67ULQRC7.js";
import {
  q
} from "./chunk-EEIMB7C6.js";
import "./chunk-PQF6AZP6.js";
import "./chunk-NZKVNPZ3.js";
import "./chunk-U53G3X2R.js";
import "./chunk-UKLHBUGA.js";
import "./chunk-WRWVENVU.js";
import "./chunk-GDMLFOX7.js";
import "./chunk-OKL2JLQU.js";
import "./chunk-MPUSMVYE.js";
import {
  e as e3,
  r as r2,
  t as t2
} from "./chunk-UFNIHRKY.js";
import "./chunk-QOQBWURX.js";
import "./chunk-YLUPVW2C.js";
import {
  R
} from "./chunk-IODIHRP7.js";
import "./chunk-47CFN4JI.js";
import {
  C,
  P,
  _ as _2,
  e as e2,
  u
} from "./chunk-SGNC5H35.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import {
  _,
  a,
  n as n2,
  t
} from "./chunk-KEY3YQEB.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-SWZYRYDU.js";
import {
  p
} from "./chunk-AGHTZMGO.js";
import {
  s as s2
} from "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import {
  ot,
  tt
} from "./chunk-TPFIN626.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  s
} from "./chunk-2KP24SU5.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  L
} from "./chunk-XCN5EJK7.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/asset.js
var s3 = class {
  constructor() {
    this.copyright = "", this.defaultScene = 0, this.generator = "", this._scenes = [];
  }
  addScene(e7) {
    if (this._scenes.includes(e7)) throw new Error("Scene already added");
    this._scenes.push(e7);
  }
  removeScene(s5) {
    L(this._scenes, s5);
  }
  forEachScene(e7) {
    this._scenes.forEach(e7);
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/glb.js
var t4 = class _t {
  static {
    this.HEADER_SIZE = 12;
  }
  static {
    this.CHUNK_HEADER_SIZE = 8;
  }
  static {
    this.MAGIC = 1179937895;
  }
  static {
    this.VERSION = 2;
  }
  constructor(e7, h) {
    if (!e7) throw new Error("GLB requires a JSON gltf chunk");
    this._length = _t.HEADER_SIZE, this._length += _t.CHUNK_HEADER_SIZE;
    const s5 = i(e7);
    if (this._length += n3(s5.byteLength, 4), h && (this._length += _t.CHUNK_HEADER_SIZE, this._length += h.byteLength, h.byteLength % 4)) throw new Error("Expected BIN chunk length to be divisible by 4 at this point");
    this.buffer = new ArrayBuffer(this._length), this._outView = new DataView(this.buffer), this._writeHeader();
    const r3 = this._writeChunk(s5, 12, 1313821514, 32);
    h && this._writeChunk(h, r3, 5130562);
  }
  _writeHeader() {
    this._outView.setUint32(0, _t.MAGIC, true), this._outView.setUint32(4, _t.VERSION, true), this._outView.setUint32(8, this._length, true);
  }
  _writeChunk(t6, i5, h, s5 = 0) {
    const r3 = n3(t6.byteLength, 4);
    for (this._outView.setUint32(i5, r3, true), this._outView.setUint32(i5 += 4, h, true), e4(this._outView.buffer, t6, i5 += 4, 0, t6.byteLength), i5 += t6.byteLength; i5 % 4; ) s5 && this._outView.setUint8(i5, s5), i5++;
    return i5;
  }
};
function e4(t6, e7, i5, n4, h) {
  new Uint8Array(t6, i5, h).set(new Uint8Array(e7, n4, h), 0);
}
function i(t6) {
  return new TextEncoder().encode(t6).buffer;
}
function n3(t6, e7) {
  return e7 * Math.ceil(t6 / e7);
}

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/bufferview.js
var t5 = class {
  constructor(e7, t6, s5, i5, r3) {
    this._buffer = e7, this._componentType = s5, this._dataType = i5, this._data = [], this._isFinalized = false, this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, t6.bufferViews || (t6.bufferViews = []), this.index = t6.bufferViews.length, this._bufferView = { buffer: e7.index, byteLength: -1, target: r3 };
    const n4 = this._getElementSize();
    n4 >= 4 && 34963 !== r3 && (this._bufferView.byteStride = n4), t6.bufferViews.push(this._bufferView), this._numComponentsForDataType = this._calculateNumComponentsForDataType();
  }
  push(e7) {
    const t6 = this._data.length;
    if (this._data.push(e7), this._accessorIndex >= 0) {
      const s5 = t6 % this._numComponentsForDataType, i5 = this._accessorMin[s5];
      this._accessorMin[s5] = "number" != typeof i5 ? e7 : Math.min(i5, e7);
      const r3 = this._accessorMax[s5];
      this._accessorMax[s5] = "number" != typeof r3 ? e7 : Math.max(r3, e7);
    }
  }
  get dataSize() {
    return this._data.length * this._sizeComponentType();
  }
  get byteSize() {
    function e7(e8, t6) {
      return t6 * Math.ceil(e8 / t6);
    }
    return e7(this.dataSize, 4);
  }
  getByteOffset() {
    if (!this._isFinalized) throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  get byteOffset() {
    if (!this._isFinalized) throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  _createTypedArray(t6, s5) {
    switch (this._componentType) {
      case R.BYTE:
        return new Int8Array(t6, s5);
      case R.FLOAT:
        return new Float32Array(t6, s5);
      case R.SHORT:
        return new Int16Array(t6, s5);
      case R.UNSIGNED_BYTE:
        return new Uint8Array(t6, s5);
      case R.UNSIGNED_INT:
        return new Uint32Array(t6, s5);
      case R.UNSIGNED_SHORT:
        return new Uint16Array(t6, s5);
    }
  }
  writeOutToBuffer(e7, t6) {
    this._createTypedArray(e7, t6).set(this._data);
  }
  writeAsync(e7) {
    if (this._asyncWritePromise) throw new Error("Can't write multiple bufferView values asynchronously");
    return this._asyncWritePromise = e7.then((e8) => {
      const t6 = new Uint8Array(e8);
      for (let s5 = 0; s5 < t6.length; ++s5) this._data.push(t6[s5]);
      delete this._asyncWritePromise;
    }), this._asyncWritePromise;
  }
  startAccessor(e7) {
    if (this._accessorIndex >= 0) throw new Error("Accessor was started without ending the previous one");
    this._accessorIndex = this._data.length, this._accessorAttribute = e7;
    const t6 = this._numComponentsForDataType;
    this._accessorMin = new Array(t6), this._accessorMax = new Array(t6);
  }
  endAccessor() {
    if (this._accessorIndex < 0) throw new Error("An accessor was not started, but was attempted to be ended");
    const t6 = this._getElementSize(), s5 = this._numComponentsForDataType, i5 = (this._data.length - this._accessorIndex) / s5;
    if (i5 % 1) throw new Error("An accessor was ended with missing component values");
    for (let e7 = 0; e7 < this._accessorMin.length; ++e7) "number" != typeof this._accessorMin[e7] && (this._accessorMin[e7] = 0), "number" != typeof this._accessorMax[e7] && (this._accessorMax[e7] = 0);
    const r3 = { byteOffset: t6 * (this._accessorIndex / s5), componentType: this._componentType, count: i5, type: this._dataType, min: this._accessorMin, max: this._accessorMax, name: this._accessorAttribute };
    switch (this._accessorAttribute) {
      case "TEXCOORD_0":
      case "TEXCOORD_1":
      case "COLOR_0":
      case "WEIGHTS_0":
        switch (this._componentType) {
          case R.UNSIGNED_BYTE:
          case R.UNSIGNED_SHORT:
            r3.normalized = true;
        }
    }
    return this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, r3;
  }
  get finalized() {
    return this._finalizedPromise ? this._finalizedPromise : this._isFinalized ? this._finalizedPromise = Promise.resolve() : this._finalizedPromise = new Promise((e7) => this._finalizedPromiseResolve = e7);
  }
  async finalize() {
    const e7 = this._bufferView, t6 = this._buffer.getViewFinalizePromises(this);
    this._asyncWritePromise && t6.push(this._asyncWritePromise), await Promise.allSettled(t6), this._isFinalized = true, e7.byteOffset = this.getByteOffset(), e7.byteLength = this.dataSize, this._finalizedPromiseResolve && this._finalizedPromiseResolve();
  }
  _getElementSize() {
    return this._sizeComponentType() * this._numComponentsForDataType;
  }
  _sizeComponentType() {
    switch (this._componentType) {
      case R.BYTE:
      case R.UNSIGNED_BYTE:
        return 1;
      case R.SHORT:
      case R.UNSIGNED_SHORT:
        return 2;
      case R.UNSIGNED_INT:
      case R.FLOAT:
        return 4;
    }
  }
  _calculateNumComponentsForDataType() {
    switch (this._dataType) {
      case "SCALAR":
        return 1;
      case "VEC2":
        return 2;
      case "VEC3":
        return 3;
      case "VEC4":
      case "MAT2":
        return 4;
      case "MAT3":
        return 9;
      case "MAT4":
        return 16;
    }
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/buffer.js
var i2 = class {
  constructor(e7) {
    this._gltf = e7, this._bufferViews = [], this._isFinalized = false, e7.buffers || (e7.buffers = []), this.index = e7.buffers.length;
    const i5 = { byteLength: -1 };
    e7.buffers.push(i5), this._buffer = i5;
  }
  addBufferView(i5, t6, r3) {
    if (this._finalizePromise) throw new Error("Cannot add buffer view after fiinalizing buffer");
    const f3 = new t5(this, this._gltf, i5, t6, r3);
    return this._bufferViews.push(f3), f3;
  }
  getByteOffset(e7) {
    let i5 = 0;
    for (const t6 of this._bufferViews) {
      if (t6 === e7) return i5;
      i5 += t6.byteSize;
    }
    throw new Error("Given bufferView was not present in this buffer");
  }
  getViewFinalizePromises(e7) {
    const i5 = [];
    for (const t6 of this._bufferViews) {
      if (e7 && t6 === e7) return i5;
      i5.push(t6.finalized);
    }
    return i5;
  }
  getArrayBuffer() {
    if (!this._isFinalized) throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");
    const e7 = this._getTotalSize(), i5 = new ArrayBuffer(e7);
    let t6 = 0;
    for (const r3 of this._bufferViews) r3.writeOutToBuffer(i5, t6), t6 += r3.byteSize;
    return i5;
  }
  finalize() {
    if (this._finalizePromise) throw new Error(`Buffer ${this.index} was already finalized`);
    return this._finalizePromise = Promise.allSettled(this.getViewFinalizePromises()).then(() => {
      this._isFinalized = true;
      const e7 = this.getArrayBuffer();
      this._buffer.byteLength = e7.byteLength, this._buffer.uri = e7;
    }), this._gltf.extras.promises.push(this._finalizePromise), this._finalizePromise;
  }
  _getTotalSize() {
    let e7 = 0;
    for (const i5 of this._bufferViews) e7 += i5.byteSize;
    return e7;
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/geometry.js
function e5(o2, t6) {
  if (o2.components) for (const n4 of o2.components) n4.faces && "smooth" === n4.shading && c(n4.faces, t6);
}
function c(s5, e7) {
  null == e7.normal && (e7.normal = new Float32Array(e7.position.length));
  const { position: c4, normal: a3 } = e7, p2 = s5.length / 3;
  for (let r3 = 0; r3 < p2; ++r3) {
    const e8 = 3 * s5[3 * r3], m4 = 3 * s5[3 * r3 + 1], p3 = 3 * s5[3 * r3 + 2], g = u(i3, c4[e8], c4[e8 + 1], c4[e8 + 2]), h = u(l, c4[m4], c4[m4 + 1], c4[m4 + 2]), u4 = u(f, c4[p3], c4[p3 + 1], c4[p3 + 2]), x = e2(h, h, g), b = e2(u4, u4, g), j = P(x, x, b);
    a3[e8] += j[0], a3[e8 + 1] += j[1], a3[e8 + 2] += j[2], a3[m4] += j[0], a3[m4 + 1] += j[1], a3[m4 + 2] += j[2], a3[p3] += j[0], a3[p3 + 1] += j[1], a3[p3 + 2] += j[2];
  }
  for (let t6 = 0; t6 < a3.length; t6 += 3) u(m, a3[t6], a3[t6 + 1], a3[t6 + 2]), _2(m, m), a3[t6] = m[0], a3[t6 + 1] = m[1], a3[t6 + 2] = m[2];
}
var i3 = n2();
var l = n2();
var f = n2();
var m = n2();

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/imageutils.js
function a2(e7) {
  const t6 = m2(e7);
  return null != t6 ? t6.toDataURL() : "";
}
async function i4(n4, r3) {
  const a3 = m2(n4);
  if (null == a3) throw new r("imageToArrayBuffer", "Unsupported image type");
  const i5 = o(n4), c4 = await new Promise((e7) => a3.toBlob(e7, i5));
  if (s(r3), !c4) throw new r("imageToArrayBuffer", "Failed to encode image");
  const s5 = await c4.arrayBuffer();
  return s(r3), { data: s5, type: i5 };
}
function o(e7) {
  if (!(e7 instanceof HTMLImageElement)) return "image/png";
  const t6 = e7.src;
  if (tt(t6)) {
    const e8 = ot(t6);
    return "image/jpeg" === e8?.mediaType ? e8.mediaType : "image/png";
  }
  return /\.png$/i.test(t6) ? "image/png" : /\.(jpg|jpeg)$/i.test(t6) ? "image/jpeg" : "image/png";
}
function m2(e7) {
  if (e7 instanceof HTMLCanvasElement) return e7;
  if (e7 instanceof HTMLVideoElement) return null;
  const t6 = document.createElement("canvas");
  t6.width = e7.width, t6.height = e7.height;
  const n4 = t6.getContext("2d");
  return e7 instanceof HTMLImageElement ? n4.drawImage(e7, 0, 0, e7.width, e7.height) : e7 instanceof ImageData && n4.putImageData(e7, 0, 0), t6;
}
function c2(e7) {
  const t6 = [], n4 = new Uint8Array(e7);
  for (let r3 = 0; r3 < n4.length; r3++) t6.push(String.fromCharCode(n4[r3]));
  return "data:application/octet-stream;base64," + btoa(t6.join(""));
}
function s4(e7) {
  if (e7.byteLength < 8) return false;
  const t6 = new Uint8Array(e7);
  return 137 === t6[0] && 80 === t6[1] && 78 === t6[2] && 71 === t6[3] && 13 === t6[4] && 10 === t6[5] && 26 === t6[6] && 10 === t6[7];
}

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltf.js
var T = () => n.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");
var _3 = class {
  constructor(e7, t6) {
    this.options = t6, this._materialMap = new Array(), this._imageMap = /* @__PURE__ */ new Map(), this._textureMap = /* @__PURE__ */ new Map(), this.gltf = { asset: { version: "2.0", copyright: e7.copyright, generator: e7.generator }, extras: { output: t6.output, binChunkBuffer: null, promises: [] } }, this._addScenes(e7);
  }
  _addScenes(e7) {
    this.gltf.scene = e7.defaultScene;
    const t6 = this.gltf.extras, s5 = 2 === t6.output.buffer || 2 === t6.output.image;
    s5 && (t6.binChunkBuffer = new i2(this.gltf)), e7.forEachScene((e8) => {
      this._addScene(e8);
    }), s5 && t6.binChunkBuffer.finalize();
  }
  _addScene(e7) {
    this.gltf.scenes || (this.gltf.scenes = []);
    const t6 = {};
    e7.name && (t6.name = e7.name), e7.forEachNode((e8) => {
      t6.nodes || (t6.nodes = []), t6.nodes.push(...this._addNodes(e8));
    }), this.gltf.scenes.push(t6);
  }
  _addNodes(e7) {
    this.gltf.nodes || (this.gltf.nodes = []);
    const t6 = {};
    e7.name && (t6.name = e7.name);
    const s5 = e7.translation;
    C(s5, a) || (t6.translation = t(s5));
    const r3 = e7.rotation;
    N(r3, r2) || (t6.rotation = t2(r3));
    const h = e7.scale;
    C(h, _) || (t6.scale = t(h));
    const f3 = this.gltf.nodes.length;
    if (this.gltf.nodes.push(t6), e7.mesh && e7.mesh.vertexAttributes.position) {
      const s6 = this._createMeshes(e7.mesh), r4 = [f3];
      if (1 === s6.length) this._addMesh(t6, s6[0]);
      else for (const e8 of s6) {
        const t7 = {};
        this._addMesh(t7, e8), r4.push(this.gltf.nodes.length), this.gltf.nodes.push(t7);
      }
      return r4;
    }
    return e7.forEachNode((e8) => {
      t6.children || (t6.children = []), t6.children.push(...this._addNodes(e8));
    }), [f3];
  }
  _addMesh(e7, t6) {
    this.gltf.meshes ??= [];
    const s5 = this.gltf.meshes.length;
    this.gltf.meshes.push(t6), e7.mesh = s5;
  }
  _createMeshes(e7) {
    const t6 = this.gltf.extras, s5 = 2 === t6.output.buffer;
    let r3;
    r3 = s5 ? t6.binChunkBuffer : new i2(this.gltf);
    const i5 = this.options.origin, o2 = e7.vertexSpace.clone();
    o2.origin = [i5.x, i5.y, i5.z ?? 0];
    const a3 = q({ vertexAttributes: e7.vertexAttributes, vertexSpace: e7.vertexSpace, transform: this.options?.ignoreLocalTransform ? null : e7.transform, spatialReference: e7.spatialReference }, o2, { targetUnit: this.options.unitConversionDisabled ? void 0 : "meters" });
    if (!a3) return [];
    e5(e7, a3), M(a3);
    const { position: n4, normal: l3, tangent: c4 } = a3, { uv: u4, color: h } = e7.vertexAttributes, d2 = r3.addBufferView(R.FLOAT, "VEC3", 34962);
    let g, x, T2, _4;
    l3 && (g = r3.addBufferView(R.FLOAT, "VEC3", 34962)), u4 && (x = r3.addBufferView(R.FLOAT, "VEC2", 34962)), c4 && (T2 = r3.addBufferView(R.FLOAT, "VEC4", 34962)), h && (_4 = r3.addBufferView(R.FLOAT, "VEC4", 34962)), d2.startAccessor("POSITION"), g && g.startAccessor("NORMAL"), x && x.startAccessor("TEXCOORD_0"), T2 && T2.startAccessor("TANGENT"), _4 && _4.startAccessor("COLOR_0");
    const A2 = a3.position.length / 3;
    for (let f3 = 0; f3 < A2; ++f3) d2.push(n4[3 * f3]), d2.push(n4[3 * f3 + 1]), d2.push(n4[3 * f3 + 2]), g && null != l3 && (g.push(l3[3 * f3]), g.push(l3[3 * f3 + 1]), g.push(l3[3 * f3 + 2])), x && null != u4 && (x.push(u4[2 * f3]), x.push(u4[2 * f3 + 1])), T2 && null != c4 && (T2.push(c4[4 * f3]), T2.push(c4[4 * f3 + 1]), T2.push(c4[4 * f3 + 2]), T2.push(c4[4 * f3 + 3])), _4 && null != h && (_4.push(w(h[4 * f3] / 255)), _4.push(w(h[4 * f3 + 1] / 255)), _4.push(w(h[4 * f3 + 2] / 255)), _4.push(h[4 * f3 + 3] / 255));
    const v = d2.endAccessor(), O = this._addAccessor(d2.index, v);
    let R2, S, N2, C2, I;
    if (g) {
      const e8 = g.endAccessor();
      R2 = this._addAccessor(g.index, e8);
    }
    if (x) {
      const e8 = x.endAccessor();
      S = this._addAccessor(x.index, e8);
    }
    if (T2) {
      const e8 = T2.endAccessor();
      N2 = this._addAccessor(T2.index, e8);
    }
    if (_4) {
      const e8 = _4.endAccessor();
      C2 = this._addAccessor(_4.index, e8);
    }
    const y = [];
    return e7.components && e7.components.length > 0 && e7.components[0].faces ? (I = r3.addBufferView(R.UNSIGNED_INT, "SCALAR", 34963), this._addMeshVertexIndexed(I, e7.components, y, O, R2, S, N2, C2)) : this._addMeshVertexNonIndexed(e7.components, y, O, R2, S, N2, C2), d2.finalize(), g?.finalize(), x?.finalize(), T2?.finalize(), I?.finalize(), _4?.finalize(), s5 || r3.finalize(), y;
  }
  _addMaterial(e7) {
    if (null == e7) return;
    const t6 = this._materialMap.indexOf(e7);
    if (-1 !== t6) return t6;
    this.gltf.materials || (this.gltf.materials = []);
    const s5 = {};
    switch (e7.alphaMode) {
      case "mask":
        s5.alphaMode = "MASK";
        break;
      case "auto":
      case "blend":
        s5.alphaMode = "BLEND";
    }
    s5.alphaCutoff = e7.alphaCutoff, e7.doubleSided && (s5.doubleSided = e7.doubleSided), s5.pbrMetallicRoughness = {};
    const r3 = (e8) => {
      const t7 = e8.toRgba();
      return t7[0] = w(t7[0] / 255), t7[1] = w(t7[1] / 255), t7[2] = w(t7[2] / 255), t7;
    };
    if (null != e7.color && (s5.pbrMetallicRoughness.baseColorFactor = r3(e7.color)), null != e7.colorTexture && (s5.pbrMetallicRoughness.baseColorTexture = this._createTextureInfo(e7.colorTexture, e7.colorTextureTransform)), null != e7.normalTexture && (s5.normalTexture = this._createTextureInfo(e7.normalTexture, e7.normalTextureTransform)), e7 instanceof u2) {
      if (null != e7.emissiveTexture && (s5.emissiveTexture = this._createTextureInfo(e7.emissiveTexture, e7.emissiveTextureTransform)), null != e7.emissiveColor) {
        const t7 = r3(e7.emissiveColor);
        s5.emissiveFactor = [t7[0], t7[1], t7[2]];
      }
      null != e7.emissiveStrength && (s5.extensions ??= {}, s5.extensions.KHR_materials_emissive_strength = { emissiveStrength: e7.emissiveStrength }), null != e7.occlusionTexture && (s5.occlusionTexture = this._createTextureInfo(e7.occlusionTexture, e7.occlusionTextureTransform)), null != e7.metallicRoughnessTexture && (s5.pbrMetallicRoughness.metallicRoughnessTexture = this._createTextureInfo(e7.metallicRoughnessTexture, e7.metallicRoughnessTextureTransform)), s5.pbrMetallicRoughness.metallicFactor = e7.metallic, s5.pbrMetallicRoughness.roughnessFactor = e7.roughness;
    } else s5.pbrMetallicRoughness.metallicFactor = 1, s5.pbrMetallicRoughness.roughnessFactor = 1, T().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");
    const i5 = this.gltf.materials.length;
    return this.gltf.materials.push(s5), this._materialMap.push(e7), i5;
  }
  _createTextureInfo(e7, t6) {
    const s5 = { index: this._addTexture(e7) };
    return t6 ? (s5.extensions || (s5.extensions = {}), s5.extensions.KHR_texture_transform = { scale: t6.scale, offset: t6.offset, rotation: s2(t6.rotation) }, s5) : s5;
  }
  _addTexture(e7) {
    const t6 = this.gltf.textures ?? [];
    return this.gltf.textures = t6, e(this._textureMap, e7, () => {
      const s5 = { sampler: this._addSampler(e7), source: this._addImage(e7) }, r3 = t6.length;
      return t6.push(s5), r3;
    });
  }
  _addImage(e7) {
    const t6 = this._imageMap.get(e7);
    if (null != t6) return t6;
    this.gltf.images || (this.gltf.images = []);
    const s5 = {};
    if (e7.url) s5.uri = e7.url;
    else {
      const t7 = e7.data;
      s5.extras = t7;
      for (let e8 = 0; e8 < this.gltf.images.length; ++e8) if (t7 === this.gltf.images[e8].extras) return e8;
      const r4 = this.gltf.extras;
      switch (r4.output.image) {
        case 2: {
          const e8 = r4.binChunkBuffer.addBufferView(R.UNSIGNED_BYTE, "SCALAR");
          if (t3(t7)) null != t7.data && e8.writeOutToBuffer(t7.data.buffer, 0);
          else {
            const i5 = i4(t7, this.options.signal).then(({ data: e9, type: t8 }) => (s5.mimeType = t8, e9));
            r4.promises.push(e8.writeAsync(i5).then(() => e8.finalize()));
          }
          s5.bufferView = e8.index;
          break;
        }
        case 1:
          if (t3(t7)) {
            T().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          s5.uri = a2(t7);
          break;
        default:
          if (t3(t7)) {
            T().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          r4.promises.push(i4(t7, this.options.signal).then(({ data: e8, type: t8 }) => {
            s5.uri = e8, s5.mimeType = t8;
          }));
      }
    }
    const r3 = this.gltf.images.length;
    return this.gltf.images.push(s5), this._imageMap.set(e7, r3), r3;
  }
  _addSampler(e7) {
    this.gltf.samplers || (this.gltf.samplers = []);
    let t6 = 10497, s5 = 10497;
    if ("string" == typeof e7.wrap) switch (e7.wrap) {
      case "clamp":
        t6 = 33071, s5 = 33071;
        break;
      case "mirror":
        t6 = 33648, s5 = 33648;
    }
    else {
      switch (e7.wrap.vertical) {
        case "clamp":
          s5 = 33071;
          break;
        case "mirror":
          s5 = 33648;
      }
      switch (e7.wrap.horizontal) {
        case "clamp":
          t6 = 33071;
          break;
        case "mirror":
          t6 = 33648;
      }
    }
    const r3 = { wrapS: t6, wrapT: s5 };
    for (let o2 = 0; o2 < this.gltf.samplers.length; ++o2) if (JSON.stringify(r3) === JSON.stringify(this.gltf.samplers[o2])) return o2;
    const i5 = this.gltf.samplers.length;
    return this.gltf.samplers.push(r3), i5;
  }
  _addAccessor(e7, t6) {
    this.gltf.accessors || (this.gltf.accessors = []);
    const s5 = { bufferView: e7, byteOffset: t6.byteOffset, componentType: t6.componentType, count: t6.count, type: t6.type, min: t6.min, max: t6.max, name: t6.name };
    t6.normalized && (s5.normalized = true);
    const r3 = this.gltf.accessors.length;
    return this.gltf.accessors.push(s5), r3;
  }
  _addMeshVertexIndexed(e7, t6, s5, r3, i5, o2, a3, n4) {
    const l3 = /* @__PURE__ */ new Map();
    for (const c4 of t6) {
      if (e7.startAccessor("INDICES"), c4.faces) for (let s6 = 0; s6 < c4.faces.length; ++s6) e7.push(c4.faces[s6]);
      const t7 = e7.endAccessor(), u4 = { attributes: { POSITION: r3 }, indices: this._addAccessor(e7.index, t7), material: this._addMaterial(c4.material) };
      i5 && "flat" !== c4.shading && (u4.attributes.NORMAL = i5), o2 && (u4.attributes.TEXCOORD_0 = o2), a3 && "flat" !== c4.shading && (u4.attributes.TANGENT = a3), n4 && (u4.attributes.COLOR_0 = n4);
      const h = l3.get(c4.name);
      if (h) h.primitives.push(u4);
      else {
        const e8 = { name: c4.name, primitives: [u4] };
        l3.set(c4.name, e8), s5.push(e8);
      }
    }
  }
  _addMeshVertexNonIndexed(e7, t6, s5, r3, i5, o2, a3) {
    const n4 = { primitives: [] };
    t6.push(n4);
    const l3 = { attributes: { POSITION: s5 } };
    r3 && (l3.attributes.NORMAL = r3), i5 && (l3.attributes.TEXCOORD_0 = i5), o2 && (l3.attributes.TANGENT = o2), a3 && (l3.attributes.COLOR_0 = a3), e7 && (l3.material = this._addMaterial(e7[0].material)), n4.primitives.push(l3);
  }
};
function M({ position: e7, normal: t6, tangent: s5 }) {
  A(e7, 3), A(t6, 3), A(s5, 4);
}
function A(e7, t6) {
  if (null != e7) for (let s5 = 1, r3 = 2; s5 < e7.length; s5 += t6, r3 += t6) {
    const t7 = e7[s5], i5 = e7[r3];
    e7[s5] = i5, e7[r3] = -t7;
  }
}
function w(t6) {
  return t6 ** p;
}

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/node.js
var e6 = class {
  constructor(t6) {
    this.mesh = t6, this.name = "", this.translation = n2(), this.rotation = e3(), this.scale = t(_), this._nodes = [];
  }
  addNode(t6) {
    if (this._nodes.includes(t6)) throw new Error("Node already added");
    this._nodes.push(t6);
  }
  forEachNode(t6) {
    this._nodes.forEach(t6);
  }
  set rotationAngles(s5) {
    W(this.rotation, s5[0], s5[1], s5[2]);
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/scene.js
var d = class {
  constructor() {
    this.name = "", this._nodes = [];
  }
  addNode(d2) {
    if (this._nodes.includes(d2)) throw new Error("Node already added");
    this._nodes.push(d2);
  }
  forEachNode(d2) {
    this._nodes.forEach(d2);
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltfexport.js
var f2 = "model.gltf";
var u3 = "model.glb";
async function c3(e7, s5) {
  const a3 = new _3(e7, s5).gltf, c4 = a3.extras.promises;
  let m4 = 1, l3 = 1, p2 = null;
  await Promise.allSettled(c4), s(s5.signal);
  const g = s5.jsonSpacing ?? 4, d2 = /* @__PURE__ */ new Map(), w2 = JSON.stringify(a3, (t6, e8) => {
    if ("extras" !== t6) {
      if (e8 instanceof ArrayBuffer) {
        if (s4(e8)) switch (s5.output?.image) {
          case 1:
          case 2:
            break;
          default: {
            const t7 = `img${l3}.png`;
            return l3++, d2.set(t7, e8), t7;
          }
        }
        switch (s5.output?.buffer) {
          case 1:
            return c2(e8);
          case 2:
            if (p2) throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");
            return void (p2 = e8);
          default: {
            const t7 = `data${m4}.bin`;
            return m4++, d2.set(t7, e8), t7;
          }
        }
      }
      return e8;
    }
  }, g);
  return 2 === s5.output?.buffer || 2 === s5.output?.image ? d2.set(u3, new t4(w2, p2).buffer) : d2.set(f2, w2), d2;
}
async function m3(t6, e7) {
  const r3 = (await c3(t6, __spreadValues({ output: { buffer: 2, image: 2 }, jsonSpacing: 0 }, e7))).get(u3);
  if (!(r3 && r3 instanceof ArrayBuffer)) throw new Error("failed to export to glb");
  return r3;
}
async function l2(t6, r3) {
  const o2 = new s3(), n4 = new d();
  return o2.addScene(n4), n4.addNode(new e6(t6)), await m3(o2, __spreadValues({ origin: t6.origin }, r3));
}
export {
  c3 as exportGLTF,
  u3 as modelNameGlb,
  f2 as modelNameGltf,
  l2 as toBinaryGLTF
};
//# sourceMappingURL=gltfexport-TZWSPMRO.js.map
