import {
  e
} from "./chunk-FWMUKVLY.js";
import {
  B,
  I,
  S,
  ce,
  ie,
  r,
  x,
  z
} from "./chunk-B3N4XLHQ.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureBackedBuffer/TextureBackedBufferFieldCreation.js
var i = class {
  constructor(e4, t, o) {
    this.elementCount = e4, this.elementType = t, this.bufferViewConstructor = o, this.byteSize = p(o);
  }
};
function p(e4) {
  return e(e4.ElementType) * e4.ElementCount;
}
var l = { u8: new i(1, "uint", S), vec4u8: new i(4, "uint", z), unorm8: new i(1, "float", ie), vec4unorm8: new i(4, "float", ce), f16: new i(1, "float", r ? x : B), f32: new i(1, "float", B), mat3f32: new i(9, "float", I) };

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureBackedBuffer/TextureBackedBufferLayoutField.js
var e2 = class {
  constructor(e4, t, r2, n) {
    this._declaration = e4, this._byteOffset = t, this._creationInfo = n, this._startTexel = Math.floor(t / r2);
    const i3 = n.byteSize;
    this._numTexels = Math.ceil((t + i3) / r2) - this._startTexel, this._texelByteStride = r2;
  }
  get name() {
    return this._declaration.name;
  }
  get fieldType() {
    return this._declaration.type;
  }
  get byteOffset() {
    return this._byteOffset;
  }
  get startTexel() {
    return this._startTexel;
  }
  get numTexels() {
    return this._numTexels;
  }
  get texelByteStride() {
    return this._texelByteStride;
  }
  get elementType() {
    return this._creationInfo.elementType;
  }
  get elementCount() {
    return this._creationInfo.elementCount;
  }
  get byteSize() {
    return this._creationInfo.byteSize;
  }
  get bufferViewConstructor() {
    return this._creationInfo.bufferViewConstructor;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureBackedBuffer/TextureBufferView.js
var e3 = class {
  constructor(e4, t, r2, s2 = 0) {
    this.layout = e4, this.byteOffset = s2, this._bufferViews = /* @__PURE__ */ new Map(), this.buffer = "number" == typeof t ? new ArrayBuffer(t * e4.byteStride) : t, this.texelElementBuffer = new r2(this.buffer, s2);
    const f = this._bufferViews;
    for (const [n, i3] of this.layout.fields) f.set(n, new i3.bufferViewConstructor(this.buffer, s2 + i3.byteOffset, this.layout.byteStride));
  }
  get stride() {
    return this.layout.byteStride;
  }
  get count() {
    return this.byteLength / this.stride;
  }
  get byteLength() {
    return this.buffer.byteLength - this.byteOffset;
  }
  getField(e4, t) {
    const r2 = this._bufferViews.get(e4);
    return null != r2 && r2.elementCount === t.ElementCount && r2.elementType === t.ElementType ? r2 : null;
  }
  get usedMemory() {
    return this.byteLength;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureBackedBuffer/TextureBackedBufferLayout.js
var i2 = class {
  constructor(r2) {
    this._fields = /* @__PURE__ */ new Map(), this.texelByteStride = 4, this.texelElementArrayConstructor = Uint8Array;
    let i3 = 0;
    const n = [];
    for (let t = 0; t < r2.length; ++t) {
      const s2 = r2[t], { type: o2 } = s2, f2 = l[o2];
      n.push({ declaration: s2, byteOffset: i3, creationInfo: f2 }), i3 += f2.byteSize;
    }
    i3 = s(i3);
    const o = i3, f = this._fields, { texelByteStride: l2 } = this;
    for (const { declaration: e4, byteOffset: s2, creationInfo: a } of n) f.set(e4.name, new e2(e4, s2, l2, a));
    this.byteStride = o, this.texelStride = Math.ceil(o / l2);
  }
  get stride() {
    return this.byteStride;
  }
  get fields() {
    return this._fields;
  }
  createBuffer(e4) {
    return new e3(this, e4, this.texelElementArrayConstructor);
  }
  createView(e4, t) {
    return new e3(this, e4, this.texelElementArrayConstructor, t);
  }
};
function s(e4) {
  return e4 + 3 & -4;
}

export {
  i2 as i
};
//# sourceMappingURL=chunk-NV3NZKNW.js.map
