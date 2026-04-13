import {
  r as r3
} from "./chunk-VQGHDTVE.js";
import {
  r as r4
} from "./chunk-UMCLGGCR.js";
import {
  i as i2
} from "./chunk-7MRJRWGA.js";
import {
  E,
  E2,
  h,
  i as i3
} from "./chunk-ICUJG4IU.js";
import {
  Y
} from "./chunk-AFCXMSTT.js";
import {
  i
} from "./chunk-PMKUQ7UU.js";
import {
  n as n3
} from "./chunk-LHBO6K5Y.js";
import {
  Z,
  t4 as t2,
  tt
} from "./chunk-2OF3JE3F.js";
import {
  e2 as e
} from "./chunk-XUZBRFKA.js";
import {
  l2 as l,
  r2,
  s,
  u3 as u,
  w
} from "./chunk-POW25PFR.js";
import {
  n2,
  r3 as r
} from "./chunk-IDI4VM7T.js";
import {
  m,
  n2 as n,
  t2 as t
} from "./chunk-KWV5EQET.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/libs/basisu/BasisUTranscoder.js
function i4() {
  return t3 ??= (async () => {
    const i8 = await import("./basis_transcoder-FS255W7H.js"), t4 = await i8.default({ locateFile: (i9) => n3(`esri/libs/basisu/${i9}`) });
    return t4.initializeBasis(), t4;
  })(), t3;
}
var t3;

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js
var r5 = null;
var i5 = null;
async function a() {
  return null == i5 && (i5 = i4(), r5 = await i5), i5;
}
function l2(e3, t4) {
  if (null == r5) return e3.byteLength;
  const n6 = new r5.BasisFile(new Uint8Array(e3)), s3 = u2(n6) ? o(n6.getNumLevels(0), n6.getHasAlpha(), n6.getImageWidth(0, 0), n6.getImageHeight(0, 0), t4) : 0;
  return n6.close(), n6.delete(), s3;
}
function g(e3, t4) {
  if (null == r5) return e3.byteLength;
  const n6 = new r5.KTX2File(new Uint8Array(e3)), s3 = c(n6) ? o(n6.getLevels(), n6.getHasAlpha(), n6.getWidth(), n6.getHeight(), t4) : 0;
  return n6.close(), n6.delete(), s3;
}
function o(e3, n6, r7, i8, a4) {
  const l4 = E(n6 ? Y.COMPRESSED_RGBA8_ETC2_EAC : Y.COMPRESSED_RGB8_ETC2), g3 = a4 && e3 > 1 ? (4 ** e3 - 1) / (3 * 4 ** (e3 - 1)) : 1;
  return Math.ceil(r7 * i8 * l4 * g3);
}
function u2(e3) {
  return e3.getNumImages() >= 1 && !e3.isUASTC();
}
function c(e3) {
  return e3.getFaces() >= 1 && e3.isETC1S();
}
async function m2(e3, t4, n6) {
  null == r5 && (r5 = await a());
  const s3 = new r5.BasisFile(new Uint8Array(n6));
  if (!u2(s3)) return null;
  s3.startTranscoding();
  const i8 = T(e3, t4, s3.getNumLevels(0), s3.getHasAlpha(), s3.getImageWidth(0, 0), s3.getImageHeight(0, 0), (e4, t5) => s3.getImageTranscodedSizeInBytes(0, e4, t5), (e4, t5, n7) => s3.transcodeImage(n7, 0, e4, t5, 0, 0));
  return s3.close(), s3.delete(), i8;
}
async function h2(e3, t4, n6) {
  null == r5 && (r5 = await a());
  const s3 = new r5.KTX2File(new Uint8Array(n6));
  if (!c(s3)) return null;
  s3.startTranscoding();
  const i8 = T(e3, t4, s3.getLevels(), s3.getHasAlpha(), s3.getWidth(), s3.getHeight(), (e4, t5) => s3.getImageTranscodedSizeInBytes(e4, 0, 0, t5), (e4, t5, n7) => s3.transcodeImage(n7, e4, 0, 0, t5, 0, -1, -1));
  return s3.close(), s3.delete(), i8;
}
function T(e3, s3, r7, i8, a4, l4, g3, o4) {
  const { compressedTextureETC: u4, compressedTextureS3TC: c3 } = e3.capabilities, [m4, h5] = u4 ? i8 ? [1, Y.COMPRESSED_RGBA8_ETC2_EAC] : [0, Y.COMPRESSED_RGB8_ETC2] : c3 ? i8 ? [3, Y.COMPRESSED_RGBA_S3TC_DXT5_EXT] : [2, Y.COMPRESSED_RGB_S3TC_DXT1_EXT] : [13, 6408], T3 = s3.hasMipmap ? r7 : Math.min(1, r7), d2 = [];
  for (let t4 = 0; t4 < T3; t4++) d2.push(new Uint8Array(g3(t4, m4))), o4(t4, m4, d2[t4]);
  return s3.internalFormat = h5, s3.hasMipmap = d2.length > 1, s3.samplingMode = s3.hasMipmap ? 9987 : 9729, s3.width = a4, s3.height = l4, new E2(e3, s3, { type: "compressed", levels: d2 });
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js
var n4 = () => n2.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");
var o2 = 542327876;
var a2 = 131072;
var i6 = 4;
function s2(e3) {
  return e3.charCodeAt(0) + (e3.charCodeAt(1) << 8) + (e3.charCodeAt(2) << 16) + (e3.charCodeAt(3) << 24);
}
function l3(e3) {
  return String.fromCharCode(255 & e3, e3 >> 8 & 255, e3 >> 16 & 255, e3 >> 24 & 255);
}
var u3 = s2("DXT1");
var c2 = s2("DXT3");
var h3 = s2("DXT5");
var m3 = 31;
var f = 0;
var d = 1;
var p = 2;
var g2 = 3;
var D = 4;
var C = 7;
var w2 = 20;
var S = 21;
function T2(e3, t4, n6) {
  const o4 = b(n6, t4.hasMipmap ?? false);
  if (null == o4) throw new Error("DDS texture data is null");
  const { textureData: a4, internalFormat: i8, width: s3, height: l4 } = o4;
  return t4.samplingMode = a4.levels.length > 1 ? 9987 : 9729, t4.hasMipmap = a4.levels.length > 1, t4.internalFormat = i8, t4.width = s3, t4.height = l4, new E2(e3, t4, a4);
}
function b(e3, r7) {
  const s3 = new Int32Array(e3.buffer, e3.byteOffset, m3);
  if (s3[f] !== o2) return n4().error("Invalid magic number in DDS header"), null;
  if (!(s3[w2] & i6)) return n4().error("Unsupported format, must contain a FourCC code"), null;
  const T3 = s3[S];
  let b2, _;
  switch (T3) {
    case u3:
      b2 = 8, _ = Y.COMPRESSED_RGB_S3TC_DXT1_EXT;
      break;
    case c2:
      b2 = 16, _ = Y.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      break;
    case h3:
      b2 = 16, _ = Y.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      break;
    default:
      return n4().error("Unsupported FourCC code:", l3(T3)), null;
  }
  let E3 = 1, x = s3[D], M2 = s3[g2];
  (3 & x || 3 & M2) && (n4().warn("Rounding up compressed texture size to nearest multiple of 4."), x = x + 3 & -4, M2 = M2 + 3 & -4);
  const X = x, A = M2;
  let R, v2;
  s3[p] & a2 && false !== r7 && (E3 = Math.max(1, s3[C]));
  let y = e3.byteOffset + s3[d] + 4;
  const F = [];
  for (let t4 = 0; t4 < E3; ++t4) v2 = (x + 3 >> 2) * (M2 + 3 >> 2) * b2, R = new Uint8Array(e3.buffer, y, v2), F.push(R), y += v2, x = Math.max(1, x >> 1), M2 = Math.max(1, M2 >> 1);
  return { textureData: { type: "compressed", levels: F }, internalFormat: _, width: X, height: A };
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/textureUtils.js
var e2 = 16;
function n5(t4, n6) {
  return n6 = Math.floor(n6 / e2) * e2, Math.min(Math.round(t4 / e2) * e2, n6);
}
function r6(t4, n6) {
  return n6 = Math.floor(n6 / e2) * e2, Math.min(Math.ceil(t4 / e2) * e2, n6);
}
function o3(t4, e3) {
  const [n6, r7] = a3(t4, e3);
  return t4.width === n6 && t4.height === r7 ? t4 : i7(t4, n6, r7);
}
function a3({ width: t4, height: e3 }, { maxPreferredTexturePixels: r7, maxTextureSize: o4 }) {
  const a4 = Math.max(t4, e3), i8 = t4 * e3;
  if (a4 <= o4 && i8 <= r7) return [t4, e3];
  const h5 = Math.min(Math.sqrt(r7 / i8), o4 / a4);
  return [n5(Math.round(t4 * h5), o4), n5(Math.round(e3 * h5), o4)];
}
function i7(t4, e3, n6) {
  if (t4 instanceof ImageData) return i7(h4(t4), e3, n6);
  const r7 = document.createElement("canvas");
  r7.width = e3, r7.height = n6;
  return r7.getContext("2d").drawImage(t4, 0, 0, r7.width, r7.height), r7;
}
function h4(e3) {
  const n6 = document.createElement("canvas");
  n6.width = e3.width, n6.height = e3.height;
  const r7 = n6.getContext("2d");
  if (null == r7) throw new r("texture:context-failed", "Failed to create 2d context from HTMLCanvasElement");
  return r7.putImageData(e3, 0, 0), n6;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/ManagedTexture.js
var M = class {
  constructor(t4, r7) {
    this._data = t4, this.id = e(), this.events = new i(), this._parameters = __spreadValues(__spreadValues({}, U), r7), this._startPreload(t4);
  }
  dispose() {
    this.unload(), this._data = this.update = void 0;
  }
  _startPreload(t4) {
    t4 instanceof HTMLVideoElement ? (this.update = (e3) => this._update(t4, e3), this._startPreloadVideoElement(t4)) : t4 instanceof HTMLImageElement && this._startPreloadImageElement(t4);
  }
  _startPreloadVideoElement(t4) {
    if (!(Z(t4.src) || "auto" === t4.preload && t4.crossOrigin) && (t4.preload = "auto", t4.crossOrigin = "anonymous", t4.src = t4.src, t4.paused && t4.autoplay)) {
      const e3 = [];
      r4(t4, (t5) => e3.push(t5)).then(() => {
        t4.play();
      }).finally(() => e3.forEach((t5) => t5.remove()));
    }
  }
  _startPreloadImageElement(t4) {
    tt(t4.src) || Z(t4.src) || t4.crossOrigin || (t4.crossOrigin = "anonymous", t4.src = t4.src);
  }
  _createDescriptor(t4) {
    const e3 = new h();
    return e3.wrapMode = this._parameters.wrap ?? 10497, e3.flipped = !this._parameters.noUnpackFlip, e3.samplingMode = this._parameters.mipmap ? 9987 : 9729, e3.hasMipmap = !!this._parameters.mipmap, e3.preMultiplyAlpha = !!this._parameters.preMultiplyAlpha, e3.maxAnisotropy = this._parameters.maxAnisotropy ?? (this._parameters.mipmap ? t4.parameters.maxMaxAnisotropy : 1), e3.dataType = this._parameters.dataType ?? e3.dataType, e3.pixelFormat = this._parameters.pixelFormat ?? e3.pixelFormat, e3.internalFormat = this._parameters.internalFormat ?? e3.internalFormat, e3;
  }
  get texture() {
    return this._texture ?? this._emptyTexture;
  }
  get loaded() {
    return null != this._texture;
  }
  get usedMemory() {
    return this._texture?.usedMemory || v(this._data, this._parameters);
  }
  load(t4) {
    if (this._loadingPromise) return this._loadingPromise;
    if (this._texture) return this._texture;
    const e3 = this._data;
    return null == e3 ? (this._texture = new E2(t4, this._createDescriptor(t4), null), this._texture) : (this._emptyTexture = t4.emptyTexture, this._parameters.reloadable || (this._data = void 0), "string" == typeof e3 ? this._loadFromURL(t4, e3) : e3 instanceof Image ? this._loadFromImageElement(t4, e3) : e3 instanceof HTMLVideoElement ? this._loadFromVideoElement(t4, e3) : e3 instanceof ImageData || e3 instanceof HTMLCanvasElement ? this._loadFromImage(t4, e3) : t(e3) && "image/vnd-ms.dds" === this._parameters.encoding ? this._loadFromDDSData(t4, e3) : n(e3) && "image/vnd-ms.dds" === this._parameters.encoding ? this._loadFromDDSData(t4, new Uint8Array(e3)) : (n(e3) || t(e3)) && "image/ktx2" === this._parameters.encoding ? this._loadFromKTX2(t4, e3) : (n(e3) || t(e3)) && "image/x.basis" === this._parameters.encoding ? this._loadFromBasis(t4, e3) : n(e3) ? this._loadFromPixelData(t4, new Uint8Array(e3)) : m(e3) ? this._loadFromPixelData(t4, e3) : null);
  }
  _update(t4, e3) {
    return null == this._texture || t4.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || e3 === t4.currentTime ? e3 : (this._texture.setData(t4), this._texture.descriptor.hasMipmap && this._texture.generateMipmap(), this._parameters.updateCallback && this._parameters.updateCallback(), t4.currentTime);
  }
  _loadFromDDSData(t4, e3) {
    return this._texture = T2(t4, this._createDescriptor(t4), e3), this._emptyTexture = null, this._texture;
  }
  _loadFromKTX2(t4, e3) {
    return this._loadAsync(() => h2(t4, this._createDescriptor(t4), e3).then((t5) => (this._texture = t5, t5)));
  }
  _loadFromBasis(t4, e3) {
    return this._loadAsync(() => m2(t4, this._createDescriptor(t4), e3).then((t5) => (this._texture = t5, t5)));
  }
  _loadFromPixelData(t4, e3) {
    i2(this._parameters.width > 0 && this._parameters.height > 0);
    const r7 = this._createDescriptor(t4);
    return 6407 !== r7.pixelFormat && 6408 !== r7.pixelFormat || (r7.compress = this._parameters.compressionOptions), r7.width = this._parameters.width ?? 0, r7.height = this._parameters.height ?? 0, this._texture = new E2(t4, r7, e3), this._texture;
  }
  _loadFromURL(t4, e3) {
    return this._loadAsync(async (r7) => {
      const a4 = await r3(e3, { signal: r7 });
      return s(r7), this._loadFromImage(t4, a4);
    });
  }
  _loadFromImageElement(t4, e3) {
    return e3.complete ? this._loadFromImage(t4, e3) : this._loadAsync(async (r7) => {
      const a4 = await t2(e3, e3.src, false, r7);
      return s(r7), this._loadFromImage(t4, a4);
    });
  }
  _loadFromVideoElement(t4, e3) {
    return e3.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA ? this._loadFromImage(t4, e3) : this._loadFromVideoElementAsync(t4, e3);
  }
  _loadFromVideoElementAsync(e3, r7) {
    return this._loadAsync((i8) => new Promise((n6, m4) => {
      const l4 = () => {
        r7.removeEventListener("loadeddata", h5), r7.removeEventListener("error", d2), l(p2);
      }, h5 = () => {
        r7.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && (l4(), n6(this._loadFromImage(e3, r7)));
      }, d2 = (e4) => {
        l4(), m4(e4 || new r("texture:load-error", "Failed to load video"));
      };
      r7.addEventListener("loadeddata", h5), r7.addEventListener("error", d2);
      const p2 = w(i8, () => d2(u()));
    }));
  }
  _loadFromImage(t4, e3) {
    let r7 = e3;
    r7 instanceof HTMLVideoElement || (r7 = o3(r7, t4.parameters));
    const a4 = L(r7);
    this._parameters.width = a4.width, this._parameters.height = a4.height;
    const i8 = this._createDescriptor(t4);
    return i8.width = a4.width, i8.height = a4.height, i8.compress = this._parameters.compressionOptions, this._texture = new E2(t4, i8, r7), this._emptyTexture = null, this.events.emit("loaded"), this._texture;
  }
  _loadAsync(t4) {
    const e3 = new AbortController();
    this._loadingController = e3;
    const r7 = t4(e3.signal);
    this._loadingPromise = r7;
    const a4 = () => {
      this._loadingController === e3 && (this._loadingController = null), this._loadingPromise === r7 && (this._loadingPromise = null), this._emptyTexture = null;
    };
    return r7.then(a4, a4), r7;
  }
  unload() {
    if (this._texture = r2(this._texture), this._emptyTexture = null, null != this._loadingController) {
      const t4 = this._loadingController;
      this._loadingController = null, this._loadingPromise = null, t4.abort();
    }
    this.events.emit("unloaded");
  }
  get parameters() {
    return this._parameters;
  }
};
function v(t4, e3) {
  if (null == t4) return 0;
  if (n(t4) || t(t4)) return "image/ktx2" === e3.encoding ? g(t4, !!e3.mipmap) : "image/x.basis" === e3.encoding ? l2(t4, !!e3.mipmap) : t4.byteLength;
  const { width: r7, height: a4 } = t4 instanceof Image || t4 instanceof ImageData || t4 instanceof HTMLCanvasElement || t4 instanceof HTMLVideoElement ? L(t4) : e3, i8 = e3.pixelFormat ?? 6408, s3 = i3(i8);
  return (e3.mipmap ? 4 / 3 : 1) * r7 * a4 * s3 || 0;
}
function L(t4) {
  return t4 instanceof HTMLVideoElement ? { width: t4.videoWidth, height: t4.videoHeight } : t4;
}
var U = { wrap: { s: 10497, t: 10497 }, mipmap: true, noUnpackFlip: false, preMultiplyAlpha: false };

export {
  n5 as n,
  r6 as r,
  M
};
//# sourceMappingURL=chunk-NUQMSDRU.js.map
