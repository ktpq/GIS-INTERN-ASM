import {
  E,
  G,
  N,
  O,
  R,
  S,
  T,
  Y
} from "./chunk-IODIHRP7.js";
import {
  d,
  e,
  s
} from "./chunk-WARIPJQI.js";
import {
  has,
  l2 as l,
  n2 as n,
  r3 as r
} from "./chunk-6I475YAP.js";

// node_modules/@arcgis/core/views/webgl/checkWebGLError.js
var n2 = () => n.getLogger("esri.views.webgl.checkWebGLError");
function t(e2) {
  switch (e2.getError()) {
    case e2.NO_ERROR:
      return null;
    case e2.INVALID_ENUM:
      return "Invalid Enum. An unacceptable value has been specified for an enumerated argument.";
    case e2.INVALID_VALUE:
      return "Invalid Value. A numeric argument is out of range.";
    case e2.INVALID_OPERATION:
      return "Invalid Operation. The specified command is not allowed for the current state.";
    case e2.INVALID_FRAMEBUFFER_OPERATION:
      return "Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";
    case e2.OUT_OF_MEMORY:
      return "Out of memory. Not enough memory is left to execute the command.";
    case e2.CONTEXT_LOST_WEBGL:
      return "WebGL context has been lost";
    default:
      return "Unknown error";
  }
}
var o = !!has("enable-feature:webgl-debug");
function a() {
  return o;
}
function c() {
  return o;
}
function u(r2, o2 = a()) {
  if (o2) {
    const o3 = t(r2);
    if (o3) {
      const r3 = new Error().stack;
      n2().error(new r("webgl-error", "WebGL error occurred", { message: o3, stack: r3 }));
    }
  }
}

// node_modules/@arcgis/core/views/webgl/Util.js
var n3 = /* @__PURE__ */ new Set([R.BYTE, R.SHORT, R.INT, R.UNSIGNED_BYTE, R.UNSIGNED_SHORT, R.UNSIGNED_INT]);
function _(c3, a2, r2, t3 = 0) {
  const R2 = c3.gl;
  c3.bindBuffer(r2);
  for (const _2 of r2.layout) {
    const r3 = a2.get(_2.name);
    if (null == r3) {
      console.warn(`There is no location for vertex attribute '${_2.name}' defined.`);
      continue;
    }
    const i2 = t3 * _2.stride;
    if (_2.count <= 4) _2.integer && n3.has(_2.type) ? R2.vertexAttribIPointer(r3, _2.count, _2.type, _2.stride, _2.offset + i2) : R2.vertexAttribPointer(r3, _2.count, _2.type, _2.normalized, _2.stride, _2.offset + i2), R2.enableVertexAttribArray(r3), _2.divisor > 0 && R2.vertexAttribDivisor(r3, _2.divisor);
    else if (9 === _2.count) for (let e2 = 0; e2 < 3; e2++) R2.vertexAttribPointer(r3 + e2, 3, _2.type, _2.normalized, _2.stride, _2.offset + 12 * e2 + i2), R2.enableVertexAttribArray(r3 + e2), _2.divisor > 0 && R2.vertexAttribDivisor(r3 + e2, _2.divisor);
    else if (16 === _2.count) for (let e2 = 0; e2 < 4; e2++) R2.vertexAttribPointer(r3 + e2, 4, _2.type, _2.normalized, _2.stride, _2.offset + 16 * e2 + i2), R2.enableVertexAttribArray(r3 + e2), _2.divisor > 0 && R2.vertexAttribDivisor(r3 + e2, _2.divisor);
    else console.error("Unsupported vertex attribute element count: " + _2.count);
    if (a()) {
      const e2 = t(c3.gl);
      e2 && console.error(`Unable to bind vertex attribute "${_2.name}" with baseInstanceOffset ${i2}:`, e2, _2);
    }
  }
}
function i(e2) {
  switch (e2) {
    case 6406:
    case 6409:
    case 6403:
    case 36244:
    case 6402:
    case 34041:
      return 1;
    case 6410:
    case 33319:
    case 33320:
      return 2;
    case 6407:
    case 36248:
      return 3;
    case 6408:
    case 36249:
      return 4;
  }
  return 0;
}
function E2(e2) {
  switch (e2) {
    case 6406:
    case 6409:
    case 6403:
    case 36244:
    case E.R8:
    case E.R8I:
    case E.R8UI:
    case E.R8_SNORM:
    case 36168:
      return 1;
    case 6410:
    case 33319:
    case 33320:
    case E.RGBA4:
    case E.R16F:
    case E.R16I:
    case E.R16UI:
    case E.RG8:
    case E.RG8I:
    case E.RG8UI:
    case E.RG8_SNORM:
    case E.RGB565:
    case E.RGB5_A1:
    case T.DEPTH_COMPONENT16:
      return 2;
    case 6407:
    case 36248:
    case E.RGB8:
    case E.RGB8I:
    case E.RGB8UI:
    case E.RGB8_SNORM:
    case E.SRGB8:
    case T.DEPTH_COMPONENT24:
      return 3;
    case 6408:
    case 36249:
    case E.RGBA8:
    case E.R32F:
    case E.R11F_G11F_B10F:
    case E.RG16F:
    case E.R32I:
    case E.R32UI:
    case E.RG16I:
    case E.RG16UI:
    case E.RGBA8I:
    case E.RGBA8UI:
    case E.RGBA8_SNORM:
    case E.SRGB8_ALPHA8:
    case E.RGB9_E5:
    case E.RGB10_A2UI:
    case E.RGB10_A2:
    case T.DEPTH_COMPONENT32F:
    case G.DEPTH24_STENCIL8:
      return 4;
    case G.DEPTH32F_STENCIL8:
      return 5;
    case E.RGB16F:
    case E.RGB16I:
    case E.RGB16UI:
      return 6;
    case E.RG32F:
    case E.RG32I:
    case E.RG32UI:
    case E.RGBA16F:
    case E.RGBA16I:
    case E.RGBA16UI:
      return 8;
    case E.RGB32F:
    case E.RGB32I:
    case E.RGB32UI:
      return 12;
    case E.RGBA32F:
    case E.RGBA32I:
    case E.RGBA32UI:
      return 16;
    case Y.COMPRESSED_RGB_S3TC_DXT1_EXT:
    case Y.COMPRESSED_RGBA_S3TC_DXT1_EXT:
      return 0.5;
    case Y.COMPRESSED_RGBA_S3TC_DXT3_EXT:
    case Y.COMPRESSED_RGBA_S3TC_DXT5_EXT:
      return 1;
    case Y.COMPRESSED_R11_EAC:
    case Y.COMPRESSED_SIGNED_R11_EAC:
    case Y.COMPRESSED_RGB8_ETC2:
    case Y.COMPRESSED_SRGB8_ETC2:
    case Y.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
    case Y.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
      return 0.5;
    case Y.COMPRESSED_RG11_EAC:
    case Y.COMPRESSED_SIGNED_RG11_EAC:
    case Y.COMPRESSED_RGBA8_ETC2_EAC:
    case Y.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
      return 1;
  }
  return 0;
}

// node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var h = class {
  constructor(i2 = 0, h3 = i2) {
    this.width = i2, this.height = h3, this.type = 0, this.target = 3553, this.pixelFormat = 6408, this.dataType = N.UNSIGNED_BYTE, this.samplingMode = 9729, this.wrapMode = 10497, this.maxAnisotropy = 1, this.flipped = false, this.hasMipmap = false, this.isOpaque = false, this.unpackAlignment = 4, this.preMultiplyAlpha = false, this.compareEnabled = false, this.linearFilterDepth = false, this.depth = 1, this.isImmutable = false;
  }
};
function s2(t3) {
  return t3.width <= 0 || t3.height <= 0 || t3.depth <= 0 ? 0 : Math.round(t3.width * t3.height * t3.depth * (t3.hasMipmap ? 4 / 3 : 1) * (null == t3.internalFormat ? 4 : E2(t3.internalFormat)) * (34067 === t3.target ? 6 : 1));
}

// node_modules/@arcgis/core/views/webgl/textureUtils.js
var c2 = () => n.getLogger("esri/views/webgl/textureUtils");
function s3(t3) {
  const { width: e2, height: r2, depth: n4 } = t3;
  (null != e2 && e2 < 0 || null != r2 && r2 < 0 || null != n4 && n4 < 0) && c2().error("Negative dimension parameters are not allowed!");
  const { internalFormat: o2 } = t3;
  if (o2 && (m(o2) || p(o2))) {
    const { linearFilterDepth: e3, compareEnabled: r3, samplingMode: n5, hasMipmap: o3 } = t3;
    o3 && c2().error("Depth textures cannot have mipmaps"), e3 ? 9729 !== n5 && 9728 !== n5 && c2().error("Depth textures cannot sample mipmaps") : (9728 !== n5 && c2().error("Depth textures without filtering must use NEAREST filtering"), r3 && c2().error("Depth textures without filtering cannot use compare function"));
  }
}
function h2(t3) {
  return S.includes(t3);
}
function m(t3) {
  return l(T, t3);
}
function p(t3) {
  return l(G, t3);
}
function f(t3) {
  return null != t3 && l(Y, t3);
}
function d2(t3) {
  return null != t3 && "type" in t3 && "compressed" === t3.type;
}
function g(t3) {
  return null != t3 && "byteLength" in t3;
}
function w(t3) {
  return null != t3 && !d2(t3) && !g(t3);
}
function x(t3) {
  return 32879 === t3 || 35866 === t3;
}
function F(t3, e2, r2, n4 = 1) {
  let o2 = Math.max(e2, r2);
  return 32879 === t3 && (o2 = Math.max(o2, n4)), Math.floor(Math.log2(o2)) + 1;
}
function E3(e2) {
  if (null != e2.internalFormat) return e2.internalFormat;
  switch (e2.dataType) {
    case N.FLOAT:
      switch (e2.pixelFormat) {
        case 6408:
          return E.RGBA32F;
        case 6407:
          return E.RGB32F;
        default:
          throw new r("texture:unknown-format", "Unable to derive format");
      }
    case N.UNSIGNED_BYTE:
      switch (e2.pixelFormat) {
        case 6408:
          return E.RGBA8;
        case 6407:
          return E.RGB8;
      }
  }
  const { pixelFormat: r2 } = e2;
  return e2.internalFormat = 34041 === r2 ? G.DEPTH24_STENCIL8 : 6402 === r2 ? T.DEPTH_COMPONENT24 : r2, e2.internalFormat;
}
function T2(t3) {
  let e2 = "width" in t3 ? t3.width : t3.codedWidth, r2 = "height" in t3 ? t3.height : t3.codedHeight;
  const n4 = 1;
  return t3 instanceof HTMLVideoElement && (e2 = t3.videoWidth, r2 = t3.videoHeight), { width: e2, height: r2, depth: n4 };
}

// node_modules/@arcgis/core/views/webgl/ValidatedTextureDescriptor.js
var t2 = class _t extends h {
  constructor(e2, t3) {
    switch (super(), this.context = e2, Object.assign(this, t3), this.internalFormat) {
      case E.R16F:
      case E.R32F:
      case E.R8_SNORM:
      case E.R8:
        this.pixelFormat = 6403;
        break;
      case E.R8I:
      case E.R8UI:
      case E.R16I:
      case E.R16UI:
      case E.R32I:
      case E.R32UI:
        this.pixelFormat = 36244;
    }
  }
  static validate(s4, e2) {
    return new _t(s4, e2);
  }
};

// node_modules/@arcgis/core/views/webgl/Texture.js
var w2 = !!has("esri-tests-disable-gpu-memory-measurements");
var D = () => n.getLogger("esri/views/webgl/Texture");
var E4 = class _E {
  static {
    this.TEXTURE_UNIT_FOR_UPDATES = 0;
  }
  static {
    this.compressionWorkerHandle = null;
  }
  constructor(e2, i2 = null, r2 = null) {
    if (this.type = 1, this._glName = null, this._samplingModeDirty = false, this._wrapModeDirty = false, this._shadowFilterDirty = false, this._wasImmutablyAllocated = false, "context" in e2) this._descriptor = e2, r2 = i2;
    else {
      const r3 = t2.validate(e2, i2);
      if (!r3) throw new r("texture:invalid-descriptor", "Texture descriptor invalid");
      this._descriptor = r3;
    }
    34067 === this._descriptor.target ? this._setDataCubeMap(r2) : this.setData(r2);
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._descriptor;
  }
  get usedMemory() {
    return w2 ? 0 : s2(this._descriptor);
  }
  get isDirty() {
    return this._samplingModeDirty || this._wrapModeDirty || this._shadowFilterDirty;
  }
  get hasWebGLTextureObject() {
    return !!this._glName;
  }
  dispose() {
    this.abortCompression(), this.hasWebGLTextureObject && this._descriptor.context?.gl && (this._descriptor.context.instanceCounter.decrement(O.Texture, this), this._descriptor.context.unbindTexture(this), this._descriptor.context.gl.deleteTexture(this._glName), this._glName = null, this._descriptor = null);
  }
  release() {
    this.dispose();
  }
  [Symbol.dispose]() {
    this.dispose();
  }
  resize(e2, i2) {
    const r2 = this._descriptor;
    if (r2.width !== e2 || r2.height !== i2) {
      if (this._wasImmutablyAllocated) throw new r("texture:immutable-resize", "Immutable textures can't be resized!");
      r2.width = e2, r2.height = i2, 34067 === this._descriptor.target ? this._setDataCubeMap(null) : this.setData(null);
    }
  }
  enableCompression(t3) {
    this._descriptor.compress = t3;
  }
  disableCompression() {
    this._descriptor.compress = void 0;
  }
  setData(t3) {
    this.abortCompression(), !d2(t3) && this._descriptor.internalFormat && l(Y, this._descriptor.internalFormat) && (this._descriptor.internalFormat = void 0), this._setData(t3), !d2(t3) && this._descriptor.compress && this._compressOnWorker(t3);
  }
  updateData(e2, i2, r2, s4, o2, a2, n4 = 0) {
    a2 || D().error("An attempt to use uninitialized data!"), this.hasWebGLTextureObject || D().error("An attempt to update uninitialized texture!");
    const p2 = this._descriptor;
    p2.internalFormat = E3(p2);
    const { context: l2, pixelFormat: c3, dataType: _2, target: u2, isImmutable: g2 } = p2;
    if (g2 && !this._wasImmutablyAllocated) throw new r("texture:uninitialized", "Cannot update immutable texture before allocation!");
    const x2 = l2.bindTexture(this, _E.TEXTURE_UNIT_FOR_UPDATES, true);
    (i2 < 0 || r2 < 0 || i2 + s4 > p2.width || r2 + o2 > p2.height) && D().error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage();
    const { gl: T3 } = l2;
    n4 && (s4 && o2 || D().warn("Must pass width and height if `UNPACK_SKIP_ROWS` is used"), T3.pixelStorei(T3.UNPACK_SKIP_ROWS, n4)), w(a2) ? T3.texSubImage2D(u2, e2, i2, r2, s4, o2, c3, _2, a2) : d2(a2) ? T3.compressedTexSubImage2D(u2, e2, i2, r2, s4, o2, p2.internalFormat, a2.levels[e2]) : T3.texSubImage2D(u2, e2, i2, r2, s4, o2, c3, _2, a2), n4 && T3.pixelStorei(T3.UNPACK_SKIP_ROWS, 0), l2.bindTexture(x2, _E.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData3D(e2, i2, r2, s4, o2, a2, n4, p2) {
    p2 || D().error("An attempt to use uninitialized data!"), this.hasWebGLTextureObject || D().error("An attempt to update an uninitialized texture!");
    const l2 = this._descriptor;
    l2.internalFormat = E3(l2);
    const { context: d3, pixelFormat: _2, dataType: u2, isImmutable: g2, target: x2 } = l2;
    if (g2 && !this._wasImmutablyAllocated) throw new r("texture:uninitialized", "Cannot update immutable texture before allocation!");
    x(x2) || D().warn("Attempting to set 3D texture data on a non-3D texture");
    const T3 = d3.bindTexture(this, _E.TEXTURE_UNIT_FOR_UPDATES);
    d3.setActiveTexture(_E.TEXTURE_UNIT_FOR_UPDATES), (i2 < 0 || r2 < 0 || s4 < 0 || i2 + o2 > l2.width || r2 + a2 > l2.height || s4 + n4 > l2.depth) && D().error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage();
    const { gl: M } = d3;
    if (d2(p2)) p2 = p2.levels[e2], M.compressedTexSubImage3D(x2, e2, i2, r2, s4, o2, a2, n4, l2.internalFormat, p2);
    else {
      const t3 = p2;
      M.texSubImage3D(x2, e2, i2, r2, s4, o2, a2, n4, _2, u2, t3);
    }
    d3.bindTexture(T3, _E.TEXTURE_UNIT_FOR_UPDATES);
  }
  generateMipmap() {
    const e2 = this._descriptor;
    if (0 === e2.width || 0 === e2.height) return;
    if (!e2.hasMipmap) {
      if (this._wasImmutablyAllocated) throw new r("texture:immutable-change", "Cannot add mipmaps to immutable texture after allocation");
      e2.hasMipmap = true, this._samplingModeDirty = true, s3(e2);
    }
    9729 === e2.samplingMode ? (this._samplingModeDirty = true, e2.samplingMode = 9985) : 9728 === e2.samplingMode && (this._samplingModeDirty = true, e2.samplingMode = 9984);
    const i2 = this._descriptor.context.bindTexture(this, _E.TEXTURE_UNIT_FOR_UPDATES);
    this._descriptor.context.setActiveTexture(_E.TEXTURE_UNIT_FOR_UPDATES), this._descriptor.context.gl.generateMipmap(e2.target), this._descriptor.context.bindTexture(i2, _E.TEXTURE_UNIT_FOR_UPDATES);
  }
  clearMipmap() {
    const e2 = this._descriptor;
    if (e2.hasMipmap) {
      if (this._wasImmutablyAllocated) throw new r("texture:immutable-change", "Cannot delete mipmaps to immutable texture after allocation");
      e2.hasMipmap = false, this._samplingModeDirty = true, s3(e2);
    }
    9985 === e2.samplingMode ? (this._samplingModeDirty = true, e2.samplingMode = 9729) : 9984 === e2.samplingMode && (this._samplingModeDirty = true, e2.samplingMode = 9728);
  }
  setSamplingMode(t3) {
    t3 !== this._descriptor.samplingMode && (this._descriptor.samplingMode = t3, this._samplingModeDirty = true);
  }
  setWrapMode(t3) {
    t3 !== this._descriptor.wrapMode && (this._descriptor.wrapMode = t3, s3(this._descriptor), this._wrapModeDirty = true);
  }
  setShadowFiltering(t3) {
    t3 !== this._descriptor.linearFilterDepth && (this._descriptor.linearFilterDepth = this._descriptor.compareEnabled = t3, this.setSamplingMode(t3 ? 9729 : 9728), s3(this._descriptor), this._shadowFilterDirty = true);
  }
  applyChanges() {
    this._samplingModeDirty && (this._applySamplingMode(), this._samplingModeDirty = false), this._wrapModeDirty && (this._applyWrapMode(), this._wrapModeDirty = false), this._shadowFilterDirty && (this._applyShadowMode(), this._shadowFilterDirty = false);
  }
  abortCompression() {
    this._compressionAbortController = e(this._compressionAbortController);
  }
  _setData(e2, i2) {
    const r2 = this._descriptor, s4 = r2.context?.gl;
    if (!s4) return;
    u(s4), this.hasWebGLTextureObject || (this._glName = s4.createTexture(), r2.context.instanceCounter.increment(O.Texture, this)), s3(r2);
    const o2 = r2.context.bindTexture(this, _E.TEXTURE_UNIT_FOR_UPDATES);
    r2.context.setActiveTexture(_E.TEXTURE_UNIT_FOR_UPDATES), this._configurePixelStorage(), u(s4);
    const p2 = i2 ?? r2.target, l2 = x(p2);
    if (w(e2)) this._setDataFromTexImageSource(e2, p2);
    else {
      const { width: i3, height: o3, depth: n4 } = r2;
      if (null == i3 || null == o3) throw new r("texture:missing-size", "Width and height must be specified!");
      if (l2 && null == n4) throw new r("texture:missing-depth", "Depth must be specified!");
      if (r2.internalFormat = E3(r2), r2.isImmutable && !this._wasImmutablyAllocated && this._texStorage(p2, r2.internalFormat, r2.hasMipmap, i3, o3, n4), d2(e2)) {
        if (!f(r2.internalFormat)) throw new r("texture:format-mismatch", "Attempting to use compressed data with an uncompressed format!");
        this._setDataFromCompressedSource(e2, r2.internalFormat, p2);
      } else this._texImage(p2, 0, r2.internalFormat, i3, o3, n4, e2), u(s4), r2.hasMipmap && this.generateMipmap();
    }
    this._applySamplingMode(), this._applyWrapMode(), this._applyAnisotropicFilteringParameters(), this._applyShadowMode(), u(s4), r2.context.bindTexture(o2, _E.TEXTURE_UNIT_FOR_UPDATES);
  }
  _setDataCubeMap(t3 = null) {
    for (let e2 = 34069; e2 <= 34074; e2++) this._setData(t3, e2);
  }
  _configurePixelStorage() {
    const t3 = this._descriptor.context.gl, { unpackAlignment: e2, flipped: i2, preMultiplyAlpha: r2 } = this._descriptor;
    t3.pixelStorei(t3.UNPACK_ALIGNMENT, e2), t3.pixelStorei(t3.UNPACK_FLIP_Y_WEBGL, i2 ? 1 : 0), t3.pixelStorei(t3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r2 ? 1 : 0);
  }
  _setDataFromTexImageSource(t3, e2) {
    const { gl: i2 } = this._descriptor.context, r2 = this._descriptor;
    r2.internalFormat = E3(r2);
    const s4 = x(e2), { width: o2, height: n4, depth: p2 } = T2(t3);
    r2.width && r2.height, r2.width || (r2.width = o2), r2.height || (r2.height = n4), s4 && r2.depth, s4 && (r2.depth = p2), r2.isImmutable && !this._wasImmutablyAllocated && this._texStorage(e2, r2.internalFormat, r2.hasMipmap, o2, n4, p2), this._texImage(e2, 0, r2.internalFormat, o2, n4, p2, t3), u(i2), r2.hasMipmap && (this.generateMipmap(), u(i2));
  }
  _setDataFromCompressedSource(t3, e2, i2) {
    const r2 = this._descriptor, { width: s4, height: o2, depth: a2 } = r2, n4 = t3.levels, p2 = F(i2, s4, o2, a2), l2 = Math.min(p2, n4.length) - 1;
    this._descriptor.context.gl.texParameteri(r2.target, 33085, l2), this._forEachMipmapLevel((t4, r3, s5, o3) => {
      const a3 = n4[Math.min(t4, n4.length - 1)];
      this._compressedTexImage(i2, t4, e2, r3, s5, o3, a3);
    }, l2);
  }
  _texStorage(e2, i2, r2, s4, o2, a2) {
    const { gl: n4 } = this._descriptor.context;
    if (!h2(i2) && !m(i2) && !p(i2)) throw new r("texture:missing-format", "Immutable textures must have a sized internal format");
    if (!this._descriptor.isImmutable) return;
    const p2 = r2 ? F(e2, s4, o2, a2) : 1;
    if (x(e2)) {
      if (null == a2) throw new r("texture:missing-depth", "Missing depth dimension for 3D texture upload");
      n4.texStorage3D(e2, p2, i2, s4, o2, a2);
    } else n4.texStorage2D(e2, p2, i2, s4, o2);
    this._wasImmutablyAllocated = true;
  }
  _texImage(e2, i2, r2, s4, o2, a2, n4) {
    const p2 = this._descriptor.context.gl, l2 = x(e2), { isImmutable: m2, pixelFormat: h3, dataType: d3 } = this._descriptor;
    if (m2) {
      if (null != n4) {
        const r3 = n4;
        if (l2) {
          if (null == a2) throw new r("texture:missing-depth", "Missing depth dimension for 3D texture upload");
          p2.texSubImage3D(e2, i2, 0, 0, 0, s4, o2, a2, h3, d3, r3);
        } else p2.texSubImage2D(e2, i2, 0, 0, s4, o2, h3, d3, r3);
      }
    } else {
      const m3 = n4;
      if (l2) {
        if (null == a2) throw new r("texture:missing-depth", "Missing depth dimension for 3D texture upload");
        p2.texImage3D(e2, i2, r2, s4, o2, a2, 0, h3, d3, m3);
      } else p2.texImage2D(e2, i2, r2, s4, o2, 0, h3, d3, m3);
    }
  }
  _compressedTexImage(e2, i2, r2, s4, o2, a2, n4) {
    const p2 = this._descriptor.context.gl, l2 = x(e2);
    if (this._descriptor.isImmutable) {
      if (null != n4) if (l2) {
        if (null == a2) throw new r("texture:missing-depth", "Missing depth dimension for 3D texture upload");
        p2.compressedTexSubImage3D(e2, i2, 0, 0, 0, s4, o2, a2, r2, n4);
      } else p2.compressedTexSubImage2D(e2, i2, 0, 0, s4, o2, r2, n4);
    } else if (l2) {
      if (null == a2) throw new r("texture:missing-depth", "Missing depth dimension for 3D texture upload");
      p2.compressedTexImage3D(e2, i2, r2, s4, o2, a2, 0, n4);
    } else p2.compressedTexImage2D(e2, i2, r2, s4, o2, 0, n4);
  }
  async _compressOnWorker(t3) {
    const { width: e2, height: i2, context: r2, flipped: a2, preMultiplyAlpha: n4, hasMipmap: p2 } = this._descriptor, l2 = this._descriptor.compress?.compressionTracker, m2 = this._descriptor.compress?.compressionCallback, { compressedTextureETC: h3, compressedTextureS3TC: d3 } = r2.capabilities;
    if (!_E.compressionWorkerHandle?.isCompressible(t3, this._descriptor) || !h3 && !d3) return;
    this.abortCompression();
    const c3 = new AbortController();
    let _2;
    this._compressionAbortController = c3, l2?.increment();
    try {
      t3 instanceof Uint8Array ? _2 = t3.buffer : (_2 = await createImageBitmap(t3, { imageOrientation: a2 ? "flipY" : "none" }), s(c3));
      const r3 = { data: _2, width: e2, height: i2, needsFlip: t3 instanceof Uint8Array && this.descriptor.flipped, components: 6408 === this._descriptor.pixelFormat ? 4 : 3, preMultiplyAlpha: n4, hasMipmap: p2, hasETC: !!h3, hasS3TC: !!d3 }, o2 = await _E.compressionWorkerHandle.invoke(r3, c3.signal, 1);
      if (s(c3), o2.compressedTexture && this.hasWebGLTextureObject) {
        const t4 = this.usedMemory;
        this._descriptor.internalFormat = o2.internalFormat, this._setData(o2.compressedTexture), m2?.(t4 - this.usedMemory);
      }
    } catch (u2) {
      d(u2) || D().error("Texture compression failed!");
    } finally {
      l2?.decrement(), this._compressionAbortController?.signal.aborted && (this._compressionAbortController = null), _2 instanceof ImageBitmap && _2.close();
    }
  }
  _forEachMipmapLevel(e2, i2 = 1 / 0) {
    let { width: r2, height: s4, depth: o2, hasMipmap: a2, target: n4 } = this._descriptor;
    const p2 = 32879 === n4;
    if (null == r2 || null == s4 || p2 && null == o2) throw new r("texture:missing-size", "Missing texture dimensions for mipmap calculation");
    for (let t3 = 0; e2(t3, r2, s4, o2), a2 && (1 !== r2 || 1 !== s4 || p2 && 1 !== o2) && !(t3 >= i2); ++t3) r2 = Math.max(1, r2 >> 1), s4 = Math.max(1, s4 >> 1), p2 && (o2 = Math.max(1, o2 >> 1));
  }
  _applySamplingMode() {
    const t3 = this._descriptor, e2 = t3.context?.gl;
    let i2 = t3.samplingMode, r2 = t3.samplingMode;
    9985 === i2 || 9987 === i2 ? (i2 = 9729, t3.hasMipmap || (r2 = 9729)) : 9984 !== i2 && 9986 !== i2 || (i2 = 9728, t3.hasMipmap || (r2 = 9728)), e2.texParameteri(t3.target, e2.TEXTURE_MAG_FILTER, i2), e2.texParameteri(t3.target, e2.TEXTURE_MIN_FILTER, r2);
  }
  _applyWrapMode() {
    const t3 = this._descriptor, e2 = t3.context?.gl;
    "number" == typeof t3.wrapMode ? (e2.texParameteri(t3.target, e2.TEXTURE_WRAP_S, t3.wrapMode), e2.texParameteri(t3.target, e2.TEXTURE_WRAP_T, t3.wrapMode)) : (e2.texParameteri(t3.target, e2.TEXTURE_WRAP_S, t3.wrapMode.s), e2.texParameteri(t3.target, e2.TEXTURE_WRAP_T, t3.wrapMode.t));
  }
  _applyShadowMode() {
    const t3 = this._descriptor, e2 = t3.context?.gl, i2 = t3.compareEnabled ? e2.COMPARE_REF_TO_TEXTURE : e2.NONE;
    e2.texParameteri(t3.target, e2.TEXTURE_COMPARE_MODE, i2), t3.compareEnabled && e2.texParameteri(t3.target, e2.TEXTURE_COMPARE_FUNC, e2.GREATER), u(e2);
  }
  _applyAnisotropicFilteringParameters() {
    const t3 = this._descriptor, e2 = t3.context.capabilities.textureFilterAnisotropic;
    if (!e2) return;
    t3.context.gl.texParameterf(t3.target, e2.TEXTURE_MAX_ANISOTROPY, t3.maxAnisotropy ?? 1);
  }
};

export {
  t,
  a,
  c,
  u,
  _,
  i,
  E2 as E,
  h,
  t2,
  E4 as E2
};
//# sourceMappingURL=chunk-T7SNP64P.js.map
