import {
  i
} from "./chunk-7MRJRWGA.js";
import {
  u
} from "./chunk-YM62CGUL.js";
import {
  a,
  n,
  s
} from "./chunk-IXOUFXRS.js";
import {
  M,
  f,
  l,
  m,
  o as o2
} from "./chunk-XA4KTSOB.js";
import {
  o
} from "./chunk-EFJUSEVJ.js";
import {
  r
} from "./chunk-ZILR7JK7.js";

// node_modules/@arcgis/core/geometry/support/float16.js
var n2 = globalThis.Float16Array;
function t(...t5) {
  return new (n2 ?? Float32Array)(...t5);
}
function l2() {
  return n2;
}
var r2 = !!n2;

// node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js
var t2 = class {
  static {
    this.ElementCount = 9;
  }
  constructor(t5, e4, r3 = 0, f2, s2) {
    this.TypedArrayConstructor = t5, this.elementCount = 9;
    const i2 = this.TypedArrayConstructor;
    void 0 === f2 && (f2 = 9 * i2.BYTES_PER_ELEMENT);
    const d = 0 === e4.byteLength ? 0 : r3;
    this.typedBuffer = null == s2 ? new i2(e4, d) : new i2(e4, d, (s2 - r3) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f2 / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t5, e4, r3 = this.count - e4) {
    const f2 = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t5(this.buffer, f2, this.stride, f2 + r3 * this.stride);
  }
  getMat(t5, e4) {
    let r3 = t5 * this.typedBufferStride;
    for (let f2 = 0; f2 < 9; f2++) e4[f2] = this.typedBuffer[r3++];
    return e4;
  }
  setMat(t5, e4) {
    let r3 = t5 * this.typedBufferStride;
    for (let f2 = 0; f2 < 9; f2++) this.typedBuffer[r3++] = e4[f2];
  }
  get(t5, e4) {
    return this.typedBuffer[t5 * this.typedBufferStride + e4];
  }
  set(t5, e4, r3) {
    this.typedBuffer[t5 * this.typedBufferStride + e4] = r3;
  }
  copyFrom(t5, e4, r3) {
    const f2 = this.typedBuffer, s2 = e4.typedBuffer;
    let i2 = t5 * this.typedBufferStride, d = r3 * e4.typedBufferStride;
    for (let u2 = 0; u2 < 9; ++u2) f2[i2++] = s2[d++];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};

// node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js
var t3 = class {
  static {
    this.ElementCount = 16;
  }
  constructor(t5, e4, r3 = 0, f2, s2) {
    this.TypedArrayConstructor = t5, this.elementCount = 16;
    const i2 = this.TypedArrayConstructor;
    void 0 === f2 && (f2 = 16 * i2.BYTES_PER_ELEMENT);
    const d = 0 === e4.byteLength ? 0 : r3;
    this.typedBuffer = null == s2 ? new i2(e4, d) : new i2(e4, d, (s2 - r3) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f2 / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t5, e4, r3 = this.count - e4) {
    const f2 = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t5(this.buffer, f2, this.stride, f2 + r3 * this.stride);
  }
  getMat(t5, e4) {
    let r3 = t5 * this.typedBufferStride;
    for (let f2 = 0; f2 < 16; f2++) e4[f2] = this.typedBuffer[r3++];
    return e4;
  }
  setMat(t5, e4) {
    let r3 = t5 * this.typedBufferStride;
    for (let f2 = 0; f2 < 16; f2++) this.typedBuffer[r3++] = e4[f2];
  }
  get(t5, e4) {
    return this.typedBuffer[t5 * this.typedBufferStride + e4];
  }
  set(t5, e4, r3) {
    this.typedBuffer[t5 * this.typedBufferStride + e4] = r3;
  }
  copyFrom(t5, e4, r3) {
    this.copyFromTypedBuffer(t5, e4.typedBuffer, r3 * e4.typedBufferStride);
  }
  copyFromTypedBuffer(t5, e4, r3) {
    const f2 = this.typedBuffer;
    let s2 = t5 * this.typedBufferStride;
    for (let i2 = 0; i2 < 16; ++i2) f2[s2++] = e4[r3++];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};

// node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js
var t4 = class {
  static {
    this.ElementCount = 1;
  }
  constructor(t5, e4, r3 = 0, s2, i2) {
    this.TypedArrayConstructor = t5, this.elementCount = 1;
    const f2 = this.TypedArrayConstructor;
    void 0 === s2 && (s2 = f2.BYTES_PER_ELEMENT);
    const u2 = 0 === e4.byteLength ? 0 : r3;
    this.typedBuffer = null == i2 ? new f2(e4, u2) : new f2(e4, u2, (i2 - r3) / f2.BYTES_PER_ELEMENT), this.stride = s2, this.typedBufferStride = s2 / f2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride);
  }
  sliceBuffer(t5, e4, r3 = this.count - e4) {
    const s2 = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t5(this.buffer, s2, this.stride, s2 + r3 * this.stride);
  }
  get(t5) {
    return this.typedBuffer[t5 * this.typedBufferStride];
  }
  set(t5, e4) {
    this.typedBuffer[t5 * this.typedBufferStride] = e4;
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};

// node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js
var e = class {
  static {
    this.ElementCount = 2;
  }
  constructor(t5, e4, r3 = 0, f2, s2) {
    this.TypedArrayConstructor = t5, this.start = r3, this.elementCount = 2;
    const i2 = this.TypedArrayConstructor;
    void 0 === f2 && (f2 = 2 * i2.BYTES_PER_ELEMENT);
    const d = 0 === e4.byteLength ? 0 : r3;
    this.typedBuffer = null == s2 ? new i2(e4, d) : new i2(e4, d, (s2 - r3) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f2 / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t5, e4, r3 = this.count - e4) {
    const f2 = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t5(this.buffer, f2, this.stride, f2 + r3 * this.stride);
  }
  getVec(e4, r3) {
    return e4 *= this.typedBufferStride, o(r3, this.typedBuffer[e4], this.typedBuffer[e4 + 1]);
  }
  setVec(t5, e4) {
    t5 *= this.typedBufferStride, this.typedBuffer[t5++] = e4[0], this.typedBuffer[t5] = e4[1];
  }
  get(t5, e4) {
    return this.typedBuffer[t5 * this.typedBufferStride + e4];
  }
  set(t5, e4, r3) {
    this.typedBuffer[t5 * this.typedBufferStride + e4] = r3;
  }
  setValues(t5, e4, r3) {
    t5 *= this.typedBufferStride, this.typedBuffer[t5++] = e4, this.typedBuffer[t5] = r3;
  }
  copyFrom(t5, e4, r3) {
    const f2 = this.typedBuffer, s2 = e4.typedBuffer;
    let i2 = t5 * this.typedBufferStride, d = r3 * e4.typedBufferStride;
    f2[i2++] = s2[d++], f2[i2] = s2[d];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};

// node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js
var e2 = class {
  static {
    this.ElementCount = 3;
  }
  constructor(t5, e4, r3 = 0, f2, s2) {
    this.TypedArrayConstructor = t5, this.elementCount = 3;
    const i2 = this.TypedArrayConstructor;
    void 0 === f2 && (f2 = 3 * i2.BYTES_PER_ELEMENT);
    const d = 0 === e4.byteLength ? 0 : r3;
    this.typedBuffer = null == s2 ? new i2(e4, d) : new i2(e4, d, (s2 - r3) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f2 / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t5, e4, r3 = this.count - e4) {
    const f2 = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t5(this.buffer, f2, this.stride, f2 + r3 * this.stride);
  }
  getVec(e4, r3) {
    return e4 *= this.typedBufferStride, u(r3, this.typedBuffer[e4], this.typedBuffer[e4 + 1], this.typedBuffer[e4 + 2]);
  }
  setVec(t5, e4) {
    t5 *= this.typedBufferStride, this.typedBuffer[t5++] = e4[0], this.typedBuffer[t5++] = e4[1], this.typedBuffer[t5] = e4[2];
  }
  get(t5, e4) {
    return this.typedBuffer[t5 * this.typedBufferStride + e4];
  }
  set(t5, e4, r3) {
    this.typedBuffer[t5 * this.typedBufferStride + e4] = r3;
  }
  setValues(t5, e4, r3, f2) {
    t5 *= this.typedBufferStride, this.typedBuffer[t5++] = e4, this.typedBuffer[t5++] = r3, this.typedBuffer[t5] = f2;
  }
  copyFrom(t5, e4, r3) {
    const f2 = this.typedBuffer, s2 = e4.typedBuffer;
    let i2 = t5 * this.typedBufferStride, d = r3 * e4.typedBufferStride;
    f2[i2++] = s2[d++], f2[i2++] = s2[d++], f2[i2] = s2[d];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};

// node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js
var e3 = class {
  static {
    this.ElementCount = 4;
  }
  constructor(t5, e4, r3 = 0, f2, s2) {
    this.TypedArrayConstructor = t5, this.start = r3, this.elementCount = 4;
    const i2 = this.TypedArrayConstructor;
    void 0 === f2 && (f2 = 4 * i2.BYTES_PER_ELEMENT);
    const d = 0 === e4.byteLength ? 0 : r3;
    this.typedBuffer = null == s2 ? new i2(e4, d) : new i2(e4, d, (s2 - r3) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f2 / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t5, e4, r3 = this.count - e4) {
    const f2 = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t5(this.buffer, f2, this.stride, f2 + r3 * this.stride);
  }
  getVec(e4, r3) {
    return e4 *= this.typedBufferStride, o2(r3, this.typedBuffer[e4++], this.typedBuffer[e4++], this.typedBuffer[e4++], this.typedBuffer[e4]);
  }
  setVec(t5, e4) {
    t5 *= this.typedBufferStride, this.typedBuffer[t5++] = e4[0], this.typedBuffer[t5++] = e4[1], this.typedBuffer[t5++] = e4[2], this.typedBuffer[t5] = e4[3];
  }
  get(t5, e4) {
    return this.typedBuffer[t5 * this.typedBufferStride + e4];
  }
  set(t5, e4, r3) {
    this.typedBuffer[t5 * this.typedBufferStride + e4] = r3;
  }
  setValues(t5, e4, r3, f2, s2) {
    t5 *= this.typedBufferStride, this.typedBuffer[t5++] = e4, this.typedBuffer[t5++] = r3, this.typedBuffer[t5++] = f2, this.typedBuffer[t5] = s2;
  }
  copyFrom(t5, e4, r3) {
    const f2 = this.typedBuffer, s2 = e4.typedBuffer;
    let i2 = t5 * this.typedBufferStride, d = r3 * e4.typedBufferStride;
    f2[i2++] = s2[d++], f2[i2++] = s2[d++], f2[i2++] = s2[d++], f2[i2] = s2[d];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};

// node_modules/@arcgis/core/geometry/support/buffer/BufferView.js
var x = class extends t4 {
  constructor(e4, t5 = 0, s2, r3) {
    i(r2), super(l2(), e4, t5, s2, r3), this.elementType = "f16";
  }
  static {
    this.ElementType = "f16";
  }
};
var B = class extends t4 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float32Array, e4, t5, s2, r3), this.elementType = "f32";
  }
  static {
    this.ElementType = "f32";
  }
};
var E = class _E extends e {
  constructor(e4, t5 = 0, s2, r3) {
    i(r2), super(l2(), e4, t5, s2, r3), this.elementType = "f16";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_E, e4, t5);
  }
  static {
    this.ElementType = "f16";
  }
};
var A = class _A extends e {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float32Array, e4, t5, s2, r3), this.elementType = "f32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_A, e4, t5);
  }
  static {
    this.ElementType = "f32";
  }
};
var b = class _b extends e2 {
  constructor(e4, t5 = 0, s2, r3) {
    i(r2), super(l2(), e4, t5, s2, r3), this.elementType = "f16";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_b, e4, t5);
  }
  static {
    this.ElementType = "f16";
  }
};
var U = class _U extends e2 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float32Array, e4, t5, s2, r3), this.elementType = "f32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_U, e4, t5);
  }
  static fromTypedArray(e4, t5) {
    return new _U(e4.buffer, e4.byteOffset, t5, e4.byteOffset + e4.byteLength);
  }
  static {
    this.ElementType = "f32";
  }
};
var g = class _g extends e3 {
  constructor(e4, t5 = 0, s2, r3) {
    i(r2), super(l2(), e4, t5, s2, r3), this.elementType = "f16";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_g, e4, t5);
  }
  static {
    this.ElementType = "f16";
  }
};
var F = class _F extends e3 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float32Array, e4, t5, s2, r3), this.elementType = "f32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_F, e4, t5);
  }
  static {
    this.ElementType = "f32";
  }
};
var I = class _I extends t2 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float32Array, e4, t5, s2, r3), this.elementType = "f32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_I, e4, t5);
  }
  static {
    this.ElementType = "f32";
  }
};
var j = class _j extends t2 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float64Array, e4, t5, s2, r3), this.elementType = "f64";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_j, e4, t5);
  }
  static {
    this.ElementType = "f64";
  }
};
var V = class _V extends t3 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float32Array, e4, t5, s2, r3), this.elementType = "f32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_V, e4, t5);
  }
  static {
    this.ElementType = "f32";
  }
};
var O = class _O extends t3 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float64Array, e4, t5, s2, r3), this.elementType = "f64";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_O, e4, t5);
  }
  static {
    this.ElementType = "f64";
  }
};
var w = class _w extends t4 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float64Array, e4, t5, s2, r3), this.elementType = "f64";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_w, e4, t5);
  }
  static {
    this.ElementType = "f64";
  }
};
var M2 = class _M extends e {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float64Array, e4, t5, s2, r3), this.elementType = "f64";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_M, e4, t5);
  }
  static {
    this.ElementType = "f64";
  }
};
var v = class _v extends e2 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float64Array, e4, t5, s2, r3), this.elementType = "f64";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_v, e4, t5);
  }
  static fromTypedArray(e4, t5) {
    return new _v(e4.buffer, e4.byteOffset, t5, e4.byteOffset + e4.byteLength);
  }
  static {
    this.ElementType = "f64";
  }
};
var L = class _L extends e3 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Float64Array, e4, t5, s2, r3), this.elementType = "f64";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_L, e4, t5);
  }
  static {
    this.ElementType = "f64";
  }
};
var S = class _S extends t4 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint8Array, e4, t5, s2, r3), this.elementType = "u8";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_S, e4, t5);
  }
  static {
    this.ElementType = "u8";
  }
};
var k = class _k extends e {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint8Array, e4, t5, s2, r3), this.elementType = "u8";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_k, e4, t5);
  }
  static {
    this.ElementType = "u8";
  }
};
var q = class _q extends e2 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint8Array, e4, t5, s2, r3), this.elementType = "u8";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_q, e4, t5);
  }
  static fromTypedArray(e4, t5) {
    return new _q(e4.buffer, e4.byteOffset, t5, e4.byteOffset + e4.byteLength);
  }
  static {
    this.ElementType = "u8";
  }
};
var z = class _z extends e3 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint8Array, e4, t5, s2, r3), this.elementType = "u8";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_z, e4, t5);
  }
  static {
    this.ElementType = "u8";
  }
};
var C = class _C extends t4 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint16Array, e4, t5, s2, r3), this.elementType = "u16";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_C, e4, t5);
  }
  static {
    this.ElementType = "u16";
  }
};
var D = class _D extends e {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint16Array, e4, t5, s2, r3), this.elementType = "u16";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_D, e4, t5);
  }
  static {
    this.ElementType = "u16";
  }
};
var G = class _G extends e2 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint16Array, e4, t5, s2, r3), this.elementType = "u16";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_G, e4, t5);
  }
  static {
    this.ElementType = "u16";
  }
};
var H = class _H extends e3 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint16Array, e4, t5, s2, r3), this.elementType = "u16";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_H, e4, t5);
  }
  static {
    this.ElementType = "u16";
  }
};
var J = class _J extends t4 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint32Array, e4, t5, s2, r3), this.elementType = "u32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_J, e4, t5);
  }
  static {
    this.ElementType = "u32";
  }
};
var K = class _K extends e {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint32Array, e4, t5, s2, r3), this.elementType = "u32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_K, e4, t5);
  }
  static {
    this.ElementType = "u32";
  }
};
var N = class _N extends e2 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint32Array, e4, t5, s2, r3), this.elementType = "u32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_N, e4, t5);
  }
  static {
    this.ElementType = "u32";
  }
};
var P = class _P extends e3 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Uint32Array, e4, t5, s2, r3), this.elementType = "u32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_P, e4, t5);
  }
  static {
    this.ElementType = "u32";
  }
};
var Q = class _Q extends t4 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int8Array, e4, t5, s2, r3), this.elementType = "i8";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_Q, e4, t5);
  }
  static {
    this.ElementType = "i8";
  }
};
var R = class _R extends e {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int8Array, e4, t5, s2, r3), this.elementType = "i8";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_R, e4, t5);
  }
  static {
    this.ElementType = "i8";
  }
};
var W = class _W extends e2 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int8Array, e4, t5, s2, r3), this.elementType = "i8";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_W, e4, t5);
  }
  static {
    this.ElementType = "i8";
  }
};
var X = class _X extends e3 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int8Array, e4, t5, s2, r3), this.elementType = "i8";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_X, e4, t5);
  }
  static {
    this.ElementType = "i8";
  }
};
var Y = class _Y extends t4 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int16Array, e4, t5, s2, r3), this.elementType = "i16";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_Y, e4, t5);
  }
  static {
    this.ElementType = "i16";
  }
};
var Z = class _Z extends e {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int16Array, e4, t5, s2, r3), this.elementType = "i16";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_Z, e4, t5);
  }
  static {
    this.ElementType = "i16";
  }
};
var $ = class _$ extends e2 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int16Array, e4, t5, s2, r3), this.elementType = "i16";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_$, e4, t5);
  }
  static {
    this.ElementType = "i16";
  }
};
var _ = class __ extends e3 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int16Array, e4, t5, s2, r3), this.elementType = "i16";
  }
  slice(e4, t5) {
    return this.sliceBuffer(__, e4, t5);
  }
  static {
    this.ElementType = "i16";
  }
};
var ee = class _ee extends t4 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int32Array, e4, t5, s2, r3), this.elementType = "i32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_ee, e4, t5);
  }
  static {
    this.ElementType = "i32";
  }
};
var te = class _te extends e {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int32Array, e4, t5, s2, r3), this.elementType = "i32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_te, e4, t5);
  }
  static {
    this.ElementType = "i32";
  }
};
var se = class _se extends e2 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int32Array, e4, t5, s2, r3), this.elementType = "i32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_se, e4, t5);
  }
  static {
    this.ElementType = "i32";
  }
};
var re = class _re extends e3 {
  constructor(e4, t5 = 0, s2, r3) {
    super(Int32Array, e4, t5, s2, r3), this.elementType = "i32";
  }
  slice(e4, t5) {
    return this.sliceBuffer(_re, e4, t5);
  }
  static {
    this.ElementType = "i32";
  }
};
var ie = class _ie extends S {
  constructor(e4, t5 = 0, s2, r3) {
    super(e4, t5, s2, r3);
  }
  get(e4) {
    return this.typedBuffer[e4 * this.typedBufferStride] / 255;
  }
  set(t5, s2) {
    this.typedBuffer[t5 * this.typedBufferStride] = Math.round(255 * r(s2, 0, 1));
  }
  slice(e4, t5) {
    return this.sliceBuffer(_ie, e4, t5);
  }
};
var ce = class _ce extends z {
  constructor(e4, t5 = 0, s2, r3) {
    super(e4, t5, s2, r3);
  }
  getVec(e4, s2) {
    return m(s2, super.getVec(e4, s2), 1 / 255);
  }
  setVec(e4, c) {
    M(ne, f(ne, c, a), s), m(ne, ne, 255), l(ne, ne), super.setVec(e4, ne);
  }
  get(e4, t5) {
    return super.get(e4, t5) / 255;
  }
  set(t5, s2, r3) {
    super.set(t5, s2, Math.round(255 * r(r3, 0, 1)));
  }
  setValues(e4, t5, s2, r3, i2) {
    o2(ne, t5, s2, r3, i2), this.setVec(e4, ne);
  }
  slice(e4, t5) {
    return this.sliceBuffer(_ce, e4, t5);
  }
};
var ne = n();

export {
  t,
  l2 as l,
  r2 as r,
  x,
  B,
  E,
  A,
  b,
  U,
  g,
  F,
  I,
  j,
  V,
  O,
  w,
  M2 as M,
  v,
  L,
  S,
  k,
  q,
  z,
  C,
  D,
  G,
  H,
  J,
  K,
  N,
  P,
  Q,
  R,
  W,
  X,
  Y,
  Z,
  $,
  _,
  ee,
  te,
  se,
  re,
  ie,
  ce
};
//# sourceMappingURL=chunk-B3N4XLHQ.js.map
