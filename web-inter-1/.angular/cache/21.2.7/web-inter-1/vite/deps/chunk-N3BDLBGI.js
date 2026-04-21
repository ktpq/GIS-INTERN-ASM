import {
  u
} from "./chunk-RNLQ7ZEK.js";
import {
  n as n2
} from "./chunk-CV6NMUZC.js";
import {
  a3 as a2,
  c,
  m3 as m
} from "./chunk-7ELXYOAW.js";
import {
  a,
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/support/SimpleBandStatistics.js
var l = class {
  constructor(l2 = null, a3 = null, t = null) {
    this.minValue = l2, this.maxValue = a3, this.noDataValue = t;
  }
};

// node_modules/@arcgis/core/layers/support/PixelBlock.js
var p;
var c2 = class extends n2 {
  static {
    p = this;
  }
  static createEmptyBand(t, e) {
    return new (p.getPixelArrayConstructor(t))(e);
  }
  static combineBandMasks(t) {
    if (t.length < 2) return t[0];
    const e = t[0].length, s = new Uint8Array(e).fill(255);
    for (let i = 0; i < t.length; i++) {
      const l2 = t[i];
      for (let t2 = 0; t2 < e; t2++) l2[t2] || (s[t2] = 0);
    }
    return s;
  }
  static getPixelArrayConstructor(t) {
    let e;
    switch (t) {
      case "u1":
      case "u2":
      case "u4":
      case "u8":
        e = Uint8Array;
        break;
      case "u16":
        e = Uint16Array;
        break;
      case "u32":
        e = Uint32Array;
        break;
      case "s8":
        e = Int8Array;
        break;
      case "s16":
        e = Int16Array;
        break;
      case "s32":
        e = Int32Array;
        break;
      case "f32":
      case "c64":
      case "c128":
      case "unknown":
        e = Float32Array;
        break;
      case "f64":
        e = Float64Array;
    }
    return e;
  }
  constructor(t) {
    super(t), this.width = null, this.height = null, this.pixelType = "f32", this.validPixelCount = null, this.mask = null, this.maskIsAlpha = false, this.premultiplyAlpha = false, this.statistics = null, this.depthCount = 1;
  }
  castPixelType(t) {
    if (!t) return "f32";
    let e = t.toLowerCase();
    return ["u1", "u2", "u4"].includes(e) ? e = "u8" : ["unknown", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"].includes(e) || (e = "f32"), e;
  }
  getPlaneCount() {
    return this.pixels?.length;
  }
  addData(t) {
    if (!t.pixels || t.pixels.length !== this.width * this.height) throw new r("pixelblock:invalid-or-missing-pixels", "add data requires valid pixels array that has same length defined by pixel block width * height");
    this.pixels || (this.pixels = []), this.statistics || (this.statistics = []), this.pixels.push(t.pixels), this.statistics.push(t.statistics ?? new l());
  }
  getAsRGBA() {
    const t = new ArrayBuffer(this.width * this.height * 4);
    switch (this.pixelType) {
      case "s8":
      case "s16":
      case "u16":
      case "s32":
      case "u32":
      case "f32":
      case "f64":
        this._fillFromNon8Bit(t);
        break;
      default:
        this._fillFrom8Bit(t);
    }
    return new Uint8ClampedArray(t);
  }
  getAsRGBAFloat() {
    const t = new Float32Array(this.width * this.height * 4);
    return this._fillFrom32Bit(t), t;
  }
  updateStatistics() {
    if (!this.pixels) return;
    this.statistics = this.pixels.map((t2) => u2(t2, this.mask));
    const t = this.mask;
    let e = 0;
    if (null != t) for (let s = 0; s < t.length; s++) t[s] && e++;
    else e = this.width * this.height;
    this.validPixelCount = e;
  }
  clamp(t) {
    if (!t || "f64" === t || "f32" === t || !this.pixels) return;
    const [e, s] = u(t), i = this.pixels, l2 = this.width * this.height, r2 = i.length;
    let n3, o, h;
    const c3 = [];
    for (let a3 = 0; a3 < r2; a3++) {
      h = p.createEmptyBand(t, l2), n3 = i[a3];
      for (let t2 = 0; t2 < l2; t2++) o = n3[t2], h[t2] = o > s ? s : o < e ? e : o;
      c3.push(h);
    }
    this.pixels = c3, this.pixelType = t;
  }
  extractBands(t) {
    const { pixels: e, statistics: s } = this;
    if (null == t || 0 === t.length || !e || 0 === e.length) return this;
    const i = e.length, l2 = t.some((t2) => t2 >= e.length), r2 = i === t.length && !t.some((t2, e2) => t2 !== e2);
    if (l2 || r2) return this;
    const n3 = this.bandMasks?.length === i ? t.map((t2) => this.bandMasks[t2]) : void 0;
    let { mask: o, validPixelCount: a3 } = this;
    const { width: h, height: c3 } = this;
    return n3?.length && (o = p.combineBandMasks(n3), a3 = o.filter((t2) => !!t2).length), new p({ pixelType: this.pixelType, width: h, height: c3, mask: o, bandMasks: n3, validPixelCount: a3, maskIsAlpha: this.maskIsAlpha, pixels: t.map((t2) => e[t2]), statistics: s && t.map((t2) => s[t2]) });
  }
  clone() {
    const t = new p({ width: this.width, height: this.height, pixelType: this.pixelType, maskIsAlpha: this.maskIsAlpha, validPixelCount: this.validPixelCount, premultiplyAlpha: this.premultiplyAlpha, depthCount: this.depthCount });
    let e;
    null != this.mask && (t.mask = new Uint8Array(this.mask)), this.noDataValues && (t.noDataValues = [...this.noDataValues]), this.bandMasks && (t.bandMasks = this.bandMasks.map((t2) => new Uint8Array(t2)));
    const s = p.getPixelArrayConstructor(this.pixelType);
    if (this.pixels && this.pixels.length > 0) {
      t.pixels = [];
      const i = !!this.pixels[0].slice;
      for (e = 0; e < this.pixels.length; e++) t.pixels[e] = i ? this.pixels[e].slice() : new s(this.pixels[e]);
    }
    if (this.statistics) for (t.statistics = [], e = 0; e < this.statistics.length; e++) t.statistics[e] = a(this.statistics[e]);
    return t;
  }
  getTransferableObject() {
    const { pixels: t, bandMasks: e, mask: s } = this;
    this.pixels = [], this.bandMasks = void 0, this.mask = void 0;
    const i = this.toJSON();
    this.pixels = t, this.bandMasks = e, this.mask = s, i.pixels = t ? [...t] : t, i.bandMasks = e ? [...e] : e, i.mask = s;
    const l2 = [];
    return [...t ?? [], s, ...e ?? []].filter((t2) => null != t2 && ArrayBuffer.isView(t2)).forEach((t2) => {
      t2 && !l2.includes(t2.buffer) && l2.push(t2.buffer);
    }), { pixelBlock: i, transferList: l2 };
  }
  _fillFrom8Bit(t) {
    const { mask: e, maskIsAlpha: s, premultiplyAlpha: i, pixels: r2 } = this;
    if (!t || !r2?.length) return void n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    let n3, o, a3, h;
    n3 = o = a3 = r2[0], r2.length >= 3 ? (o = r2[1], a3 = r2[2]) : 2 === r2.length && (o = r2[1]);
    const p2 = new Uint32Array(t), c3 = this.width * this.height;
    if (n3.length === c3) if (null != e && e.length === c3) if (s) for (h = 0; h < c3; h++) {
      const t2 = e[h];
      if (t2) {
        const e2 = t2 / 255;
        p2[h] = i ? t2 << 24 | a3[h] * e2 << 16 | o[h] * e2 << 8 | n3[h] * e2 : t2 << 24 | a3[h] << 16 | o[h] << 8 | n3[h];
      }
    }
    else for (h = 0; h < c3; h++) e[h] && (p2[h] = 255 << 24 | a3[h] << 16 | o[h] << 8 | n3[h]);
    else for (h = 0; h < c3; h++) p2[h] = 255 << 24 | a3[h] << 16 | o[h] << 8 | n3[h];
    else n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
  }
  _fillFromNon8Bit(t) {
    const { pixels: e, mask: s, statistics: i } = this;
    if (!t || !e?.length) return void n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    const r2 = this.pixelType;
    let n3 = 1, o = 0, a3 = 1;
    if (i && i.length > 0) {
      for (const t2 of i) if (null != t2.minValue && (o = Math.min(o, t2.minValue)), null != t2.maxValue && null != t2.minValue) {
        const e2 = t2.maxValue - t2.minValue;
        a3 = Math.max(a3, e2);
      }
      n3 = 255 / a3;
    } else {
      let t2 = 255;
      "s8" === r2 ? (o = -128, t2 = 127) : "u16" === r2 ? t2 = 65535 : "s16" === r2 ? (o = -32768, t2 = 32767) : "u32" === r2 ? t2 = 4294967295 : "s32" === r2 ? (o = -2147483648, t2 = 2147483647) : "f32" === r2 ? (o = -34e38, t2 = 34e38) : "f64" === r2 && (o = -Number.MAX_VALUE, t2 = Number.MAX_VALUE), n3 = 255 / (t2 - o);
    }
    const h = new Uint32Array(t), p2 = this.width * this.height;
    let c3, u3, f, g, d;
    if (c3 = u3 = f = e[0], c3.length !== p2) return n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
    if (e.length >= 2) if (u3 = e[1], e.length >= 3 && (f = e[2]), null != s && s.length === p2) for (g = 0; g < p2; g++) s[g] && (h[g] = 255 << 24 | (f[g] - o) * n3 << 16 | (u3[g] - o) * n3 << 8 | (c3[g] - o) * n3);
    else for (g = 0; g < p2; g++) h[g] = 255 << 24 | (f[g] - o) * n3 << 16 | (u3[g] - o) * n3 << 8 | (c3[g] - o) * n3;
    else if (null != s && s.length === p2) for (g = 0; g < p2; g++) d = (c3[g] - o) * n3, s[g] && (h[g] = 255 << 24 | d << 16 | d << 8 | d);
    else for (g = 0; g < p2; g++) d = (c3[g] - o) * n3, h[g] = 255 << 24 | d << 16 | d << 8 | d;
  }
  _fillFrom32Bit(t) {
    const { pixels: e, mask: s } = this;
    if (!t || !e?.length) return n.getLogger(this).error("getAsRGBAFloat()", "Unable to convert to RGBA. The input pixel block is empty.");
    let i, r2, n3, o;
    i = r2 = n3 = e[0], e.length >= 3 ? (r2 = e[1], n3 = e[2]) : 2 === e.length && (r2 = e[1]);
    const a3 = this.width * this.height;
    if (i.length !== a3) return n.getLogger(this).error("getAsRGBAFloat()", "Unable to convert to RGBA. The pixelblock is invalid.");
    let h = 0;
    if (null != s && s.length === a3) for (o = 0; o < a3; o++) t[h++] = i[o], t[h++] = r2[o], t[h++] = n3[o], t[h++] = 1 & s[o];
    else for (o = 0; o < a3; o++) t[h++] = i[o], t[h++] = r2[o], t[h++] = n3[o], t[h++] = 1;
  }
};
function u2(t, e) {
  let s = 1 / 0, i = -1 / 0;
  const l2 = t.length;
  let r2, n3 = 0;
  if (null != e) for (r2 = 0; r2 < l2; r2++) e[r2] && (n3 = t[r2], s = n3 < s ? n3 : s, i = n3 > i ? n3 : i);
  else for (r2 = 0; r2 < l2; r2++) n3 = t[r2], s = n3 < s ? n3 : s, i = n3 > i ? n3 : i;
  return new l(s, i);
}
__decorate([a2({ json: { write: true } })], c2.prototype, "width", void 0), __decorate([a2({ json: { write: true } })], c2.prototype, "height", void 0), __decorate([a2({ json: { write: true } })], c2.prototype, "pixelType", void 0), __decorate([m("pixelType")], c2.prototype, "castPixelType", null), __decorate([a2({ json: { write: true } })], c2.prototype, "validPixelCount", void 0), __decorate([a2({ json: { write: true } })], c2.prototype, "mask", void 0), __decorate([a2({ json: { write: true } })], c2.prototype, "maskIsAlpha", void 0), __decorate([a2({ json: { write: true } })], c2.prototype, "pixels", void 0), __decorate([a2()], c2.prototype, "premultiplyAlpha", void 0), __decorate([a2({ json: { write: true } })], c2.prototype, "statistics", void 0), __decorate([a2({ json: { write: true } })], c2.prototype, "depthCount", void 0), __decorate([a2({ json: { write: true } })], c2.prototype, "noDataValues", void 0), __decorate([a2({ json: { write: true } })], c2.prototype, "bandMasks", void 0), c2 = p = __decorate([c("esri.layers.support.PixelBlock")], c2);

export {
  l,
  c2 as c
};
//# sourceMappingURL=chunk-N3BDLBGI.js.map
