import {
  o as o2
} from "./chunk-4QKD47PD.js";
import {
  E,
  E2,
  a,
  c
} from "./chunk-ICUJG4IU.js";
import {
  D,
  G,
  N,
  O,
  T,
  n as n2,
  o,
  u
} from "./chunk-AFCXMSTT.js";
import {
  r2 as r
} from "./chunk-POW25PFR.js";
import {
  has,
  n2 as n
} from "./chunk-IDI4VM7T.js";

// node_modules/@arcgis/core/views/webgl/RenderbufferDescriptor.js
var i = class {
  constructor(t, i3 = 0, h4 = i3, r5 = false, s4 = 1) {
    this.internalFormat = t, this.width = i3, this.height = h4, this.multisampled = r5, this.samples = s4;
  }
};
function h(i3) {
  return i3.width <= 0 || i3.height <= 0 || null == i3.internalFormat ? 0 : i3.width * i3.height * E(i3.internalFormat);
}

// node_modules/@arcgis/core/views/webgl/Renderbuffer.js
var r2 = !!has("esri-tests-disable-gpu-memory-measurements");
var s = class {
  constructor(t, r5) {
    this._context = t, this._descriptor = r5, this.type = 2, this._context.instanceCounter.increment(O.Renderbuffer, this);
    const s4 = this._context.gl;
    this.glName = s4.createRenderbuffer(), this._context.bindRenderbuffer(this);
    const { width: i3, height: n5, internalFormat: o4, multisampled: h4 } = r5;
    h4 ? s4.renderbufferStorageMultisample(s4.RENDERBUFFER, this.samples, o4, i3, n5) : s4.renderbufferStorage(s4.RENDERBUFFER, o4, i3, n5), this._context.bindRenderbuffer(null);
  }
  get descriptor() {
    return this._descriptor;
  }
  get samples() {
    const e3 = this._descriptor.samples, t = this._context.parameters.maxSamples;
    return e3 ? Math.min(e3, t) : t;
  }
  get usedMemory() {
    return r2 ? 0 : h(this._descriptor);
  }
  resize(e3, t) {
    const r5 = this._descriptor;
    if (r5.width === e3 && r5.height === t) return;
    r5.width = e3, r5.height = t;
    const s4 = this._context.gl;
    this._context.bindRenderbuffer(this), r5.multisampled ? s4.renderbufferStorageMultisample(s4.RENDERBUFFER, this.samples, r5.internalFormat, r5.width, r5.height) : s4.renderbufferStorage(s4.RENDERBUFFER, r5.internalFormat, r5.width, r5.height), this._context.bindRenderbuffer(null);
  }
  dispose() {
    this._context && (this._context.gl.deleteRenderbuffer(this.glName), this._context.instanceCounter.decrement(O.Renderbuffer, this), this._context = null);
  }
};

// node_modules/@arcgis/core/views/webgl/FramebufferObject.js
var _ = () => n.getLogger("esri.views.webgl.FramebufferObject");
var m = class _m {
  constructor(e3, t, r5) {
    if (this._context = e3, this._glName = null, this._colorAttachments = /* @__PURE__ */ new Map(), this._depthStencilBuffer = null, this._depthStencilTexture = null, this._initialized = false, e3.instanceCounter.increment(O.FramebufferObject, this), null != t) {
      const r6 = E3(e3, t);
      null != r6 && (this._colorAttachments.set(D, r6), p(r6) ? this._validateTextureDescriptor(r6.descriptor) : this._validateRenderbufferDescriptor(r6.descriptor)), this._validateColorAttachmentPoint(D);
    }
    if (null != r5) if (x(r5)) this._depthStencilTexture = p(r5) ? r5 : new E2(e3, r5), this._validateTextureDescriptor(this._depthStencilTexture.descriptor);
    else {
      const t2 = T2(r5) ? r5 : new s(e3, r5);
      this._depthStencilBuffer = t2, this._validateRenderbufferDescriptor(t2.descriptor);
    }
  }
  dispose() {
    const { _colorAttachments: e3, _glName: t } = this;
    if (0 === e3.size && !this._depthStencilBuffer && !this._depthStencilTexture && !t) return;
    const { _context: r5 } = this, i3 = r5.getBoundFramebufferObject();
    e3.forEach((e4, t2) => this.detachColorTexture(t2)?.dispose()), this.detachDepthStencilBuffer()?.dispose(), this.detachDepthStencilTexture()?.dispose(), r5.gl.deleteFramebuffer(t), this._glName = null, r5.bindFramebuffer(i3 === this ? null : i3), r5.instanceCounter.decrement(O.FramebufferObject, this);
  }
  get glName() {
    return this._glName;
  }
  get colorTexture() {
    const e3 = this._colorAttachments.get(D);
    return p(e3) ? e3 : null;
  }
  get depthStencil() {
    return this._depthStencilTexture || this._depthStencilBuffer;
  }
  get depthStencilTexture() {
    return this._depthStencilTexture;
  }
  get width() {
    const e3 = this._colorAttachments.get(D) ?? this._depthStencilTexture ?? this._depthStencilBuffer;
    return e3?.descriptor?.width ?? 0;
  }
  get height() {
    const e3 = this._colorAttachments.get(D) ?? this._depthStencilTexture ?? this._depthStencilBuffer;
    return e3?.descriptor?.height ?? 0;
  }
  get usedMemory() {
    return [...this._colorAttachments].reduce((e3, [t, r5]) => e3 + r5.usedMemory, this.depthStencil?.usedMemory ?? 0);
  }
  static {
    this._MAX_COLOR_ATTACHMENTS = -1;
  }
  getColorTexture(e3) {
    const t = this._colorAttachments.get(e3);
    return t && p(t) ? t : null;
  }
  get colorAttachments() {
    return Array.from(this._colorAttachments.keys());
  }
  attachColorTexture(e3, t = D) {
    if (!e3) return;
    this._validateColorAttachmentPoint(t);
    const { descriptor: r5 } = e3;
    this._validateTextureDescriptor(r5), this.detachColorTexture(t)?.dispose(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(e3.glName, t)), this._colorAttachments.set(t, e3);
  }
  detachColorTexture(e3 = D) {
    const t = this._colorAttachments.get(e3);
    if (!t) return;
    const r5 = p(t);
    return this._initialized && this._context.temporaryBindFramebufferObject(this, () => {
      if (r5) this._framebufferTexture2D(null, e3);
      else {
        const t2 = this._context.gl;
        t2.framebufferRenderbuffer(t2.FRAMEBUFFER, e3, t2.RENDERBUFFER, null);
      }
    }), this._colorAttachments.delete(e3), r5 ? t : void 0;
  }
  setColorTextureTarget(e3, t = D, r5 = 0) {
    const i3 = this._colorAttachments.get(t);
    i3 && (35866 === e3 ? this._framebufferTextureLayer(i3.glName, t, 36160, 0, r5) : this._framebufferTexture2D(i3.glName, t, e3, 36160, 0));
  }
  attachDepthStencil(e3) {
    if (e3) switch (e3.type) {
      case 1:
        return this._attachDepthStencilTexture(e3);
      case 2:
        return this._attachDepthStencilBuffer(e3);
    }
  }
  _attachDepthStencilTexture(e3) {
    if (null == e3) return;
    const { descriptor: t } = e3, { pixelFormat: r5, dataType: i3 } = t;
    34041 === r5 || 6402 === r5 ? 34041 !== r5 || i3 === N.UNSIGNED_INT_24_8 ? 6402 !== r5 || i3 === N.UNSIGNED_INT || i3 === N.UNSIGNED_SHORT ? (this._validateTextureDescriptor(t), this._disposeDepthStencilAttachments(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(e3.glName, A(r5))), this._depthStencilTexture?.dispose(), this._depthStencilTexture = e3) : console.error("Depth texture must have data type of UNSIGNED_INT or UNSIGNED_SHORT!") : console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!") : console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!");
  }
  detachDepthStencilTexture() {
    const e3 = this._depthStencilTexture;
    return e3 && this._initialized && this._context.temporaryBindFramebufferObject(this, () => {
      this._framebufferTexture2D(null, A(e3.descriptor.pixelFormat));
    }), this._depthStencilTexture = null, e3;
  }
  _attachDepthStencilBuffer(e3) {
    if (null == e3) return;
    const t = e3.descriptor;
    if (this._validateRenderbufferDescriptor(t), this._disposeDepthStencilAttachments(), this._initialized) {
      this._context.bindFramebuffer(this);
      const { gl: r5 } = this._context, i3 = this._getGLAttachmentPoint(t);
      r5.framebufferRenderbuffer(36160, i3, r5.RENDERBUFFER, e3.glName);
    }
    this._depthStencilBuffer = e3;
  }
  detachDepthStencilBuffer() {
    const e3 = this._depthStencilBuffer;
    if (e3 && this._initialized) {
      const { _context: t } = this, r5 = t.getBoundFramebufferObject();
      t.bindFramebuffer(this);
      const { gl: i3 } = t, s4 = this._getGLAttachmentPoint(e3.descriptor);
      i3.framebufferRenderbuffer(36160, s4, i3.RENDERBUFFER, null), t.bindFramebuffer(r5);
    }
    return this._depthStencilBuffer = null, e3;
  }
  invalidateAttachments(e3) {
    const { _context: t } = this;
    t.temporaryBindFramebufferObject(this, () => t.gl.invalidateFramebuffer(36160, e3), true);
  }
  copyToTexture(e3, t, r5, i3, s4, n5, h4) {
    (e3 < 0 || t < 0 || s4 < 0 || n5 < 0) && console.error("Offsets cannot be negative!"), (r5 <= 0 || i3 <= 0) && console.error("Copy width and height must be greater than zero!");
    const o4 = h4.descriptor;
    3553 !== h4.descriptor.target && console.error("Texture target must be TEXTURE_2D!"), (null == o4?.width || null == o4?.height || e3 + r5 > this.width || t + i3 > this.height || s4 + r5 > o4.width || n5 + i3 > o4.height) && console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");
    const c4 = this._context, a4 = c4.bindTexture(h4, E2.TEXTURE_UNIT_FOR_UPDATES);
    c4.setActiveTexture(E2.TEXTURE_UNIT_FOR_UPDATES), c4.bindFramebuffer(this), c4.gl.copyTexSubImage2D(3553, 0, s4, n5, e3, t, r5, i3), c4.bindTexture(a4, E2.TEXTURE_UNIT_FOR_UPDATES);
  }
  readPixels(e3, t, r5, i3, s4, n5, h4) {
    (r5 <= 0 || i3 <= 0) && console.error("Copy width and height must be greater than zero!"), h4 || console.error("Target memory is not initialized!"), this._context.bindFramebuffer(this), this._context.gl.readPixels(e3, t, r5, i3, s4, n5, h4);
  }
  async readPixelsAsync(e3, t, i3, s4, n5, h4, o4) {
    const { gl: c4 } = this._context, a4 = o2.createPixelPack(this._context, 35041, o4.byteLength);
    this._context.bindBuffer(a4);
    const u3 = this._context.getBoundFramebufferObject();
    this._context.bindFramebuffer(this), c4.readPixels(e3, t, i3, s4, n5, h4, 0), this._context.unbindBuffer(35051), this._context.bindFramebuffer(u3), await a4.getSubDataAsync(o4), a4.dispose();
  }
  resize(e3, t) {
    if (this.width === e3 && this.height === t) return;
    const r5 = { width: e3, height: t };
    if (F(r5, this._context.parameters.maxTextureSize), this._colorAttachments.forEach((e4) => e4.resize(r5.width, r5.height)), this._depthStencilTexture?.resize(r5.width, r5.height), this._initialized && (F(r5, this._context.parameters.maxRenderbufferSize), this._depthStencilBuffer?.resize(r5.width, r5.height), a())) {
      const { gl: e4 } = this._context;
      e4.checkFramebufferStatus(36160) !== e4.FRAMEBUFFER_COMPLETE && console.error("Framebuffer is incomplete!");
    }
  }
  initializeAndBind(e3 = 36160) {
    const { gl: t } = this._context;
    if (this._initialized) return void t.bindFramebuffer(e3, this.glName);
    this._glName && t.deleteFramebuffer(this._glName);
    const r5 = t.createFramebuffer();
    if (t.bindFramebuffer(e3, r5), this._colorAttachments.forEach((t2, r6) => {
      if (p(t2)) {
        const i3 = D2(t2);
        35866 === i3 ? this._framebufferTextureLayer(t2.glName, r6, e3, 0, 0) : this._framebufferTexture2D(t2.glName, r6, i3, e3);
      } else if (T2(t2)) {
        const i3 = this._context.gl;
        i3.framebufferRenderbuffer(e3, r6, i3.RENDERBUFFER, t2.glName);
      }
    }), this._depthStencilBuffer) {
      const r6 = this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);
      t.framebufferRenderbuffer(e3, r6, t.RENDERBUFFER, this._depthStencilBuffer.glName);
    } else if (this._depthStencilTexture) {
      const t2 = A(this._depthStencilTexture.descriptor.pixelFormat);
      this._framebufferTexture2D(this._depthStencilTexture.glName, t2, D2(this._depthStencilTexture), e3);
    }
    if (a()) {
      t.checkFramebufferStatus(e3) !== t.FRAMEBUFFER_COMPLETE && console.error("Framebuffer is incomplete!");
    }
    this._glName = r5, this._initialized = true;
  }
  _framebufferTexture2D(e3, t = D, r5 = 3553, i3 = 36160, s4 = 0) {
    this._context.gl.framebufferTexture2D(i3, t, r5, e3, s4);
  }
  _framebufferTextureLayer(e3, t = D, r5 = 36160, i3 = 0, s4 = 0) {
    this._context.gl.framebufferTextureLayer(r5, t, e3, i3, s4);
  }
  _disposeDepthStencilAttachments() {
    const e3 = this._context.gl;
    if (this._depthStencilBuffer) {
      if (this._initialized) {
        this._context.bindFramebuffer(this);
        const t = this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);
        e3.framebufferRenderbuffer(36160, t, e3.RENDERBUFFER, null);
      }
      this._depthStencilBuffer = r(this._depthStencilBuffer);
    }
    this._depthStencilTexture && (this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, A(this._depthStencilTexture.descriptor.pixelFormat))), this._depthStencilTexture = r(this._depthStencilTexture));
  }
  _validateTextureDescriptor(e3) {
    3553 !== e3.target && 34067 !== e3.target && 35866 !== e3.target && console.error("Texture type must be TEXTURE_2D, TEXTURE_2D_ARRAY or TEXTURE_CUBE_MAP!"), F(e3, this._context.parameters.maxTextureSize), this._validateBufferDimensions(e3);
  }
  _validateRenderbufferDescriptor(e3) {
    F(e3, this._context.parameters.maxRenderbufferSize), this._validateBufferDimensions(e3);
  }
  _validateBufferDimensions(e3) {
    e3.width <= 0 && (e3.width = this.width), e3.height <= 0 && (e3.height = this.height), this.width > 0 && this.height > 0 && (this.width === e3.width && this.height === e3.height || console.error("Attachment size must match framebuffer size!"));
  }
  _getGLAttachmentPoint(e3) {
    switch (e3.internalFormat) {
      case T.DEPTH_COMPONENT16:
      case T.DEPTH_COMPONENT24:
      case T.DEPTH_COMPONENT32F:
        return o;
      case G.DEPTH24_STENCIL8:
      case G.DEPTH32F_STENCIL8:
        return n2;
      case 36168:
        return u;
      default:
        return D;
    }
  }
  _validateColorAttachmentPoint(t) {
    if (-1 === _m._MAX_COLOR_ATTACHMENTS) {
      const { gl: e3 } = this._context;
      _m._MAX_COLOR_ATTACHMENTS = e3.getParameter(e3.MAX_COLOR_ATTACHMENTS);
    }
    const r5 = t - D;
    r5 + 1 > _m._MAX_COLOR_ATTACHMENTS && n.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject", `illegal attachment point for color attachment: ${r5 + 1}. Implementation supports up to ${_m._MAX_COLOR_ATTACHMENTS} color attachments`);
  }
};
function p(e3) {
  return 1 === S(e3);
}
function T2(e3) {
  return 2 === S(e3);
}
function x(e3) {
  return p(e3) || b(e3);
}
function b(e3) {
  return 0 === S(e3);
}
function g(e3) {
  return 3 === S(e3) || null != e3 && "samples" in e3;
}
function S(e3) {
  return null != e3 && "type" in e3 ? e3.type : null;
}
function E3(e3, t) {
  return p(t) || T2(t) ? t : b(t) ? new E2(e3, t) : g(t) ? new s(e3, t) : null;
}
function F(e3, t) {
  const r5 = Math.max(e3.width, e3.height);
  if (r5 > t) {
    _().warnOnce(`Resizing FBO attachment size ${e3.width}x${e3.height} to device limit ${t}`);
    const i3 = t / r5;
    return e3.width = Math.round(e3.width * i3), e3.height = Math.round(e3.height * i3), false;
  }
  return true;
}
function D2(e3) {
  return 34067 === e3.descriptor.target ? 34069 : 35866 === e3.descriptor.target ? 35866 : 3553;
}
function A(e3) {
  return 6402 === e3 ? o : n2;
}

// node_modules/@arcgis/core/views/webgl/reservedWordsGLSL3.js
var e = ["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uint", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"];

// node_modules/@arcgis/core/views/webgl/testUtils.js
var e2 = { enableCache: false };

// node_modules/@arcgis/core/views/webgl/ShaderTranspiler.js
var r3 = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "uvec2", "uvec3", "uvec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "usampler1D", "usampler2D", "usampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"];
var a2 = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"];
var o3 = ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT", "textureSize", "texelFetch"];
var n3 = 999;
var i2 = 9999;
var l = 0;
var s2 = 1;
var c2 = 2;
var u2 = 3;
var d = 4;
var g2 = 5;
var p2 = 6;
var f = 7;
var _2 = 8;
var h2 = 9;
var x2 = 10;
var m2 = 11;
var y = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"];
function w() {
  var e3, t, w2, M2 = 0, v2 = 0, b3 = n3, T4 = [], P2 = [], C2 = 1, k2 = 0, j2 = 0, D4 = false, E5 = false, F3 = "";
  return function(e4) {
    return P2 = [], null !== e4 ? S3(e4.replace ? e4.replace(/\r\n/g, "\n") : e4) : V2();
  };
  function L2(e4) {
    e4.length && P2.push({ type: y[b3], data: e4, position: j2, line: C2, column: k2 });
  }
  function S3(t2) {
    var r5;
    for (M2 = 0, w2 = (F3 += t2).length; e3 = F3[M2], M2 < w2; ) {
      switch (r5 = M2, b3) {
        case l:
          M2 = R();
          break;
        case s2:
          M2 = O2();
          break;
        case c2:
          M2 = G2();
          break;
        case u2:
          M2 = U();
          break;
        case d:
          M2 = z();
          break;
        case m2:
          M2 = B();
          break;
        case g2:
          M2 = A2();
          break;
        case i2:
          M2 = N2();
          break;
        case h2:
          M2 = I();
          break;
        case n3:
          M2 = X2();
      }
      if (r5 !== M2) if ("\n" === F3[r5]) k2 = 0, ++C2;
      else ++k2;
    }
    return v2 += M2, F3 = F3.slice(M2), P2;
  }
  function V2(e4) {
    return T4.length && L2(T4.join("")), b3 = x2, L2("(eof)"), P2;
  }
  function X2() {
    return T4 = T4.length ? [] : T4, "/" === t && "*" === e3 ? (j2 = v2 + M2 - 1, b3 = l, t = e3, M2 + 1) : "/" === t && "/" === e3 ? (j2 = v2 + M2 - 1, b3 = s2, t = e3, M2 + 1) : "#" === e3 ? (b3 = c2, j2 = v2 + M2, M2) : /\s/.test(e3) ? (b3 = h2, j2 = v2 + M2, M2) : (D4 = /\d/.test(e3), E5 = /[^\w_]/.test(e3), j2 = v2 + M2, b3 = D4 ? d : E5 ? u2 : i2, M2);
  }
  function I() {
    return /[^\s]/g.test(e3) ? (L2(T4.join("")), b3 = n3, M2) : (T4.push(e3), t = e3, M2 + 1);
  }
  function G2() {
    return "\r" !== e3 && "\n" !== e3 || "\\" === t ? (T4.push(e3), t = e3, M2 + 1) : (L2(T4.join("")), b3 = n3, M2);
  }
  function O2() {
    return G2();
  }
  function R() {
    return "/" === e3 && "*" === t ? (T4.push(e3), L2(T4.join("")), b3 = n3, M2 + 1) : (T4.push(e3), t = e3, M2 + 1);
  }
  function U() {
    if ("." === t && /\d/.test(e3)) return b3 = g2, M2;
    if ("/" === t && "*" === e3) return b3 = l, M2;
    if ("/" === t && "/" === e3) return b3 = s2, M2;
    if ("." === e3 && T4.length) {
      for (; q(T4); ) ;
      return b3 = g2, M2;
    }
    if (";" === e3 || ")" === e3 || "(" === e3) {
      if (T4.length) for (; q(T4); ) ;
      return L2(e3), b3 = n3, M2 + 1;
    }
    var r5 = 2 === T4.length && "=" !== e3;
    if (/[\w_\d\s]/.test(e3) || r5) {
      for (; q(T4); ) ;
      return b3 = n3, M2;
    }
    return T4.push(e3), t = e3, M2 + 1;
  }
  function q(e4) {
    for (var t2, r5, o4 = 0; ; ) {
      if (t2 = a2.indexOf(e4.slice(0, e4.length + o4).join("")), r5 = a2[t2], -1 === t2) {
        if (o4-- + e4.length > 0) continue;
        r5 = e4.slice(0, 1).join("");
      }
      return L2(r5), j2 += r5.length, (T4 = T4.slice(r5.length)).length;
    }
  }
  function B() {
    return /[^a-fA-F0-9]/.test(e3) ? (L2(T4.join("")), b3 = n3, M2) : (T4.push(e3), t = e3, M2 + 1);
  }
  function z() {
    return "." === e3 || /[eE]/.test(e3) ? (T4.push(e3), b3 = g2, t = e3, M2 + 1) : "x" === e3 && 1 === T4.length && "0" === T4[0] ? (b3 = m2, T4.push(e3), t = e3, M2 + 1) : /[^\d]/.test(e3) ? (L2(T4.join("")), b3 = n3, M2) : (T4.push(e3), t = e3, M2 + 1);
  }
  function A2() {
    return "f" === e3 && (T4.push(e3), t = e3, M2 += 1), /[eE]/.test(e3) || "-" === e3 && /[eE]/.test(t) ? (T4.push(e3), t = e3, M2 + 1) : /[^\d]/.test(e3) ? (L2(T4.join("")), b3 = n3, M2) : (T4.push(e3), t = e3, M2 + 1);
  }
  function N2() {
    if (/[^\d\w_]/.test(e3)) {
      var a4 = T4.join("");
      return b3 = r3.indexOf(a4) > -1 ? _2 : o3.indexOf(a4) > -1 ? f : p2, L2(T4.join("")), b3 = n3, M2;
    }
    return T4.push(e3), t = e3, M2 + 1;
  }
}
function M(e3) {
  var t = w(), r5 = [];
  return r5 = (r5 = r5.concat(t(e3))).concat(t(null));
}
function v(e3) {
  return M(e3);
}
function b2(e3) {
  return e3.map((e4) => "eof" !== e4.type ? e4.data : "").join("");
}
var T3 = /* @__PURE__ */ new Set(["GL_OES_standard_derivatives", "GL_EXT_frag_depth", "GL_EXT_draw_buffers", "GL_EXT_shader_texture_lod"]);
function P(e3, t = "100", r5 = "300 es") {
  const a4 = /^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;
  for (const o4 of e3) if ("preprocessor" === o4.type) {
    const e4 = a4.exec(o4.data);
    if (e4) {
      const a5 = e4[1].replaceAll(/\s{2,}/g, " ");
      if (a5 === r5) return a5;
      if (a5 === t) return o4.data = "#version " + r5, t;
      throw new Error("unknown glsl version: " + a5);
    }
  }
  return e3.splice(0, 0, { type: "preprocessor", data: "#version " + r5 }, { type: "whitespace", data: "\n" }), null;
}
function C(e3, t) {
  for (let r5 = t - 1; r5 >= 0; r5--) {
    const t2 = e3[r5];
    if ("whitespace" !== t2.type && "block-comment" !== t2.type) {
      if ("keyword" !== t2.type) break;
      if ("attribute" === t2.data || "in" === t2.data) return true;
    }
  }
  return false;
}
function k(e3, t, r5, a4) {
  a4 = a4 || r5;
  for (const o4 of e3) if ("ident" === o4.type && o4.data === r5) {
    a4 in t ? t[a4]++ : t[a4] = 0;
    return k(e3, t, a4 + "_" + t[a4], a4);
  }
  return r5;
}
function j(e3, t, r5 = "afterVersion") {
  function a4(e4, t2) {
    for (let r6 = t2; r6 < e4.length; r6++) {
      const t3 = e4[r6];
      if ("operator" === t3.type && ";" === t3.data) return r6;
    }
    return null;
  }
  function o4(e4) {
    let t2 = -1, o5 = 0, n6 = -1;
    for (let i4 = 0; i4 < e4.length; i4++) {
      const l4 = e4[i4];
      if ("preprocessor" === l4.type && (/#(if|ifdef|ifndef)\s+.+/.test(l4.data) ? ++o5 : /#endif\s*.*/.test(l4.data) && --o5), "afterVersion" !== r5 && "afterPrecision" !== r5 || "preprocessor" === l4.type && l4.data.startsWith("#version") && (n6 = Math.max(n6, i4)), "afterPrecision" === r5 && "keyword" === l4.type && "precision" === l4.data) {
        const t3 = a4(e4, i4);
        if (null === t3) throw new Error("precision statement not followed by any semicolons!");
        n6 = Math.max(n6, t3);
      }
      t2 < n6 && 0 === o5 && (t2 = i4);
    }
    return t2 + 1;
  }
  const n5 = { data: "\n", type: "whitespace" }, i3 = (t2) => t2 < e3.length && /[^\r\n]$/.test(e3[t2].data);
  let l3 = o4(e3);
  i3(l3 - 1) && e3.splice(l3++, 0, n5);
  for (const s4 of t) e3.splice(l3++, 0, s4);
  i3(l3 - 1) && i3(l3) && e3.splice(l3, 0, n5);
}
function D3(e3, t, r5, a4 = "lowp") {
  j(e3, [{ type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: a4 }, { type: "whitespace", data: " " }, { type: "keyword", data: r5 }, { type: "whitespace", data: " " }, { type: "ident", data: t }, { type: "operator", data: ";" }], "afterPrecision");
}
function E4(e3, t, r5, a4, o4 = "lowp") {
  j(e3, [{ type: "keyword", data: "layout" }, { type: "operator", data: "(" }, { type: "keyword", data: "location" }, { type: "whitespace", data: " " }, { type: "operator", data: "=" }, { type: "whitespace", data: " " }, { type: "integer", data: a4.toString() }, { type: "operator", data: ")" }, { type: "whitespace", data: " " }, { type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: o4 }, { type: "whitespace", data: " " }, { type: "keyword", data: r5 }, { type: "whitespace", data: " " }, { type: "ident", data: t }, { type: "operator", data: ";" }], "afterPrecision");
}
function F2(e3, t) {
  let r5, a4, o4 = -1;
  for (let n5 = t; n5 < e3.length; n5++) {
    const t2 = e3[n5];
    if ("operator" === t2.type && ("[" === t2.data && (r5 = n5), "]" === t2.data)) {
      a4 = n5;
      break;
    }
    "integer" === t2.type && (o4 = parseInt(t2.data, 10));
  }
  return r5 && a4 && e3.splice(r5, a4 - r5 + 1), o4;
}
function L(t, r5) {
  if (t.startsWith("#version 300")) return t;
  const a4 = V(t);
  if (null != a4) return a4;
  const o4 = v(t);
  if ("300 es" === P(o4, "100", "300 es")) return t;
  let n5 = null, i3 = null;
  const l3 = {}, s4 = {};
  for (let c4 = 0; c4 < o4.length; ++c4) {
    const t2 = o4[c4];
    switch (t2.type) {
      case "keyword":
        35633 === r5 && "attribute" === t2.data ? t2.data = "in" : "varying" === t2.data && (t2.data = 35633 === r5 ? "out" : "in");
        break;
      case "builtin":
        if (/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(t2.data.trim()) && (t2.data = t2.data.replaceAll(/(2D|Cube|EXT)/g, "")), 35632 === r5 && "gl_FragColor" === t2.data && (n5 || (n5 = k(o4, l3, "fragColor"), D3(o4, n5, "vec4")), t2.data = n5), 35632 === r5 && "gl_FragData" === t2.data) {
          const e3 = F2(o4, c4 + 1), r6 = k(o4, l3, "fragData");
          E4(o4, r6, "vec4", e3, "mediump"), t2.data = r6;
        } else 35632 === r5 && "gl_FragDepthEXT" === t2.data && (i3 || (i3 = k(o4, l3, "gl_FragDepth")), t2.data = i3);
        break;
      case "ident":
        if (e.includes(t2.data)) {
          if (35633 === r5 && C(o4, c4)) throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");
          t2.data in s4 || (s4[t2.data] = k(o4, l3, t2.data)), t2.data = s4[t2.data];
        }
    }
  }
  for (let e3 = o4.length - 1; e3 >= 0; --e3) {
    const t2 = o4[e3];
    if ("preprocessor" === t2.type) {
      const r6 = t2.data.match(/#extension\s+(.*):/);
      if (r6?.[1] && T3.has(r6[1].trim())) {
        const t3 = o4[e3 + 1];
        o4.splice(e3, t3 && "whitespace" === t3.type ? 2 : 1);
      }
      const a5 = t2.data.match(/#ifdef\s+(.*)/);
      a5?.[1] && T3.has(a5[1].trim()) && (t2.data = "#if 1");
      const n6 = t2.data.match(/#ifndef\s+(.*)/);
      n6?.[1] && T3.has(n6[1].trim()) && (t2.data = "#if 0");
    }
  }
  return X(t, b2(o4));
}
var S2 = /* @__PURE__ */ new Map();
function V(e3) {
  return e2.enableCache ? S2.get(e3) : null;
}
function X(e3, r5) {
  return e2.enableCache && S2.set(e3, r5), r5;
}

// node_modules/@arcgis/core/views/webgl/Program.js
var n4 = 4294967295;
var r4 = !!has("esri-tests-disable-gpu-memory-measurements");
var s3 = class {
  constructor(e3, s4, m4, h4, f3 = /* @__PURE__ */ new Map(), l3 = []) {
    this._context = e3, this._refCount = 1, this._compiled = false, this._linesOfCode = 0, this._nameToUniformLocation = /* @__PURE__ */ new Map(), this._nameToUniform1 = /* @__PURE__ */ new Map(), this._nameToUniform1v = /* @__PURE__ */ new Map(), this._nameToUniform2 = /* @__PURE__ */ new Map(), this._nameToUniform3 = /* @__PURE__ */ new Map(), this._nameToUniform4 = /* @__PURE__ */ new Map(), this._nameToUniformMatrix3 = /* @__PURE__ */ new Map(), this._nameToUniformMatrix4 = /* @__PURE__ */ new Map(), e3 || console.error("RenderingContext isn't initialized!"), 0 === s4.length && console.error("Shaders source should not be empty!"), s4 = L(s4, 35633), m4 = L(m4, 35632), this._vShader = a3(this._context, 35633, s4), this._fShader = a3(this._context, 35632, m4), c3.enabled && (this._linesOfCode = s4.match(/\n/g).length + m4.match(/\n/g).length + 2, e3.instanceCounter.increment(O.LinesOfCode, this._vShader, this._linesOfCode)), this._vShader && this._fShader || console.error("Error loading shaders!"), e3.instanceCounter.increment(O.Shader, this), c() && (this.vertexShader = s4, this.fragmentShader = m4), this.usedMemory = r4 ? 0 : s4.length + m4.length;
    const _4 = this._context.gl, g3 = _4.createProgram();
    _4.attachShader(g3, this._vShader), _4.attachShader(g3, this._fShader), h4.forEach((t, e4) => _4.bindAttribLocation(g3, t, e4)), this.hasTransformFeedbackVaryings = !!l3?.length, this.hasTransformFeedbackVaryings && _4.transformFeedbackVaryings(g3, l3, _4.SEPARATE_ATTRIBS), _4.linkProgram(g3), c() && !_4.getProgramParameter(g3, _4.LINK_STATUS) && console.error(`Could not link shader
validated: ${_4.getProgramParameter(g3, _4.VALIDATE_STATUS)}, gl error ${_4.getError()}, vertex: ${_4.getShaderParameter(this._vShader, _4.COMPILE_STATUS)}, fragment: ${_4.getShaderParameter(this._fShader, _4.COMPILE_STATUS)}, info log: ${_4.getProgramInfoLog(g3)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);
    for (const [t, o4] of f3) {
      const e4 = _4.getUniformBlockIndex(g3, t);
      e4 < n4 && _4.uniformBlockBinding(g3, e4, o4);
    }
    this._glName = g3, e3.instanceCounter.increment(O.Program, this);
  }
  get glName() {
    return this._glName;
  }
  get hasGLName() {
    return null != this._glName;
  }
  get compiled() {
    return !!this._compiled || (this._context.capabilities.parallelShaderCompile && null != this.glName ? (this._compiled = !!this._context.gl.getProgramParameter(this.glName, 37297), this._compiled) : (this._compiled = true, true));
  }
  dispose() {
    if (--this._refCount > 0) return;
    const t = this._context.gl, e3 = this._context.instanceCounter;
    this._nameToUniformLocation.forEach((t2) => t2 && e3.decrement(O.Uniform, t2)), this._nameToUniformLocation.clear(), this._vShader && (this._linesOfCode > 0 && (e3.decrement(O.LinesOfCode, this._vShader, this._linesOfCode), this._linesOfCode = 0), t.deleteShader(this._vShader), this._vShader = null, e3.decrement(O.Shader, this)), this._fShader && (t.deleteShader(this._fShader), this._fShader = null), this._glName && (t.deleteProgram(this._glName), this._glName = null, e3.decrement(O.Program, this));
  }
  ref() {
    ++this._refCount;
  }
  _getUniformLocation(t) {
    const e3 = this._nameToUniformLocation.get(t);
    if (void 0 !== e3) return e3;
    if (this.glName) {
      const e4 = this._context.gl.getUniformLocation(this.glName, t);
      return this._nameToUniformLocation.set(t, e4), e4 && this._context.instanceCounter.increment(O.Uniform, e4), e4;
    }
    return null;
  }
  hasUniform(t) {
    return null != this._getUniformLocation(t);
  }
  setUniform1i(t, e3, o4) {
    l2(o4, e3);
    const i3 = this._nameToUniform1.get(t);
    void 0 !== i3 && e3 === i3 || (this._context.gl.uniform1i(this._getUniformLocation(t), e3), this._nameToUniform1.set(t, e3));
  }
  setUniform1iv(t, e3, o4) {
    _3(o4, e3), f2(this._nameToUniform1v, t, e3) && this._context.gl.uniform1iv(this._getUniformLocation(t), e3);
  }
  setUniform2iv(t, e3, o4) {
    _3(o4, e3), f2(this._nameToUniform2, t, e3) && this._context.gl.uniform2iv(this._getUniformLocation(t), e3);
  }
  setUniform3iv(t, e3, o4) {
    _3(o4, e3), f2(this._nameToUniform3, t, e3) && this._context.gl.uniform3iv(this._getUniformLocation(t), e3);
  }
  setUniform4iv(t, e3, o4) {
    _3(o4, e3), f2(this._nameToUniform4, t, e3) && this._context.gl.uniform4iv(this._getUniformLocation(t), e3);
  }
  setUniform1f(t, e3, o4) {
    l2(o4, e3);
    const i3 = this._nameToUniform1.get(t);
    void 0 !== i3 && e3 === i3 || (this._context.gl.uniform1f(this._getUniformLocation(t), e3), this._nameToUniform1.set(t, e3));
  }
  setUniform1fv(t, e3, o4) {
    _3(o4, e3), f2(this._nameToUniform1v, t, e3) && this._context.gl.uniform1fv(this._getUniformLocation(t), e3);
  }
  setUniform2f(t, e3, o4, i3) {
    l2(i3, e3, o4);
    const n5 = this._nameToUniform2.get(t);
    void 0 === n5 ? (this._context.gl.uniform2f(this._getUniformLocation(t), e3, o4), this._nameToUniform2.set(t, [e3, o4])) : e3 === n5[0] && o4 === n5[1] || (this._context.gl.uniform2f(this._getUniformLocation(t), e3, o4), n5[0] = e3, n5[1] = o4);
  }
  setUniform2fv(t, e3, o4) {
    _3(o4, e3), f2(this._nameToUniform2, t, e3) && this._context.gl.uniform2fv(this._getUniformLocation(t), e3);
  }
  setUniform3f(t, e3, o4, i3, n5) {
    l2(n5, e3, o4, i3);
    const r5 = this._nameToUniform3.get(t);
    void 0 === r5 ? (this._context.gl.uniform3f(this._getUniformLocation(t), e3, o4, i3), this._nameToUniform3.set(t, [e3, o4, i3])) : e3 === r5[0] && o4 === r5[1] && i3 === r5[2] || (this._context.gl.uniform3f(this._getUniformLocation(t), e3, o4, i3), r5[0] = e3, r5[1] = o4, r5[2] = i3);
  }
  setUniform3fv(t, e3, o4) {
    _3(o4, e3);
    const i3 = this._getUniformLocation(t);
    null != i3 && f2(this._nameToUniform3, t, e3) && this._context.gl.uniform3fv(i3, e3);
  }
  setUniform4f(t, e3, o4, i3, n5, r5) {
    l2(r5, e3, o4, i3, n5);
    const s4 = this._nameToUniform4.get(t);
    void 0 === s4 ? (this._context.gl.uniform4f(this._getUniformLocation(t), e3, o4, i3, n5), this._nameToUniform4.set(t, [e3, o4, i3, n5])) : void 0 !== s4 && e3 === s4[0] && o4 === s4[1] && i3 === s4[2] && n5 === s4[3] || (this._context.gl.uniform4f(this._getUniformLocation(t), e3, o4, i3, n5), s4[0] = e3, s4[1] = o4, s4[2] = i3, s4[3] = n5);
  }
  setUniform4fv(t, e3, o4) {
    _3(o4, e3);
    const i3 = this._getUniformLocation(t);
    null != i3 && f2(this._nameToUniform4, t, e3) && this._context.gl.uniform4fv(i3, e3);
  }
  setUniformMatrix3fv(t, e3, o4 = false, i3) {
    _3(i3, e3);
    const n5 = this._getUniformLocation(t);
    null != n5 && f2(this._nameToUniformMatrix3, t, e3) && this._context.gl.uniformMatrix3fv(n5, o4, e3);
  }
  setUniformMatrix4fv(t, e3, o4 = false, i3) {
    _3(i3, e3);
    const n5 = this._getUniformLocation(t);
    if (null != n5) {
      const i4 = this._nameToUniformMatrix4, r5 = i4.get(t);
      let s4 = false;
      if (r5) {
        const o5 = e3.length;
        if (r5.length !== o5) i4.set(t, Array.from(e3)), s4 = true;
        else for (let t2 = 0; t2 < o5; ++t2) {
          const i5 = e3[t2];
          if (r5[t2] !== i5) {
            for (r5[t2] = i5; t2 < o5; ++t2) r5[t2] = e3[t2];
            s4 = true;
            break;
          }
        }
      } else i4.set(t, Array.from(e3)), s4 = true;
      s4 && this._context.gl.uniformMatrix4fv(n5, o4, e3);
    }
  }
  setUniformMatrices4fv(t, e3, o4 = false, i3) {
    _3(i3, e3);
    const n5 = this._getUniformLocation(t);
    null != n5 && f2(this._nameToUniformMatrix4, t, e3) && this._context.gl.uniformMatrix4fv(n5, o4, e3);
  }
  stop() {
  }
};
function a3(e3, o4, i3) {
  const n5 = e3.gl, r5 = n5.createShader(o4);
  return n5.shaderSource(r5, i3), n5.compileShader(r5), c() && !n5.getShaderParameter(r5, n5.COMPILE_STATUS) && (console.error("Compile error in ".concat(35633 === o4 ? "vertex" : "fragment", " shader")), console.error(n5.getShaderInfoLog(r5)), console.error(m3(i3))), r5;
}
function m3(t) {
  let e3 = 2;
  return t.replaceAll("\n", () => "\n" + h3(e3++) + ":");
}
function h3(t) {
  return t >= 1e3 ? t.toString() : ("  " + t).slice(-3);
}
function f2(t, e3, o4) {
  const i3 = t.get(e3);
  if (!i3) return t.set(e3, Array.from(o4)), true;
  const n5 = o4.length;
  if (i3.length !== n5) return t.set(e3, Array.from(o4)), true;
  for (let r5 = 0; r5 < n5; ++r5) {
    const t2 = o4[r5];
    if (i3[r5] !== t2) {
      for (i3[r5] = t2; r5 < n5; ++r5) i3[r5] = o4[r5];
      return true;
    }
  }
  return false;
}
var c3 = { enabled: false };
var l2 = a() ? (t, ...e3) => _3(t, e3) : () => {
};
var _3 = a() ? (t, e3) => {
  if (t?.supportsNaN) return;
  const o4 = e3.length;
  for (let i3 = 0; i3 < o4; ++i3) {
    const t2 = e3[i3];
    Number.isNaN(t2) && console.error(`Got ${t2} as uniform value from ${new Error().stack}`);
  }
} : () => {
};

export {
  i,
  s,
  m,
  L,
  s3 as s2
};
//# sourceMappingURL=chunk-VLLAUUAX.js.map
