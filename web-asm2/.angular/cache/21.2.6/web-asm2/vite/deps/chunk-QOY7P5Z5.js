import {
  u
} from "./chunk-NAAAH7RP.js";
import {
  O,
  R
} from "./chunk-AFCXMSTT.js";
import {
  has,
  n2 as n
} from "./chunk-6SPQI6I6.js";
import {
  a2 as a,
  c2 as c,
  p,
  t2 as t
} from "./chunk-KWV5EQET.js";

// node_modules/@arcgis/core/views/webgl/BufferObject.js
var f = () => n.getLogger("esri.views.webgl.BufferObject");
var c2 = !!has("esri-tests-disable-gpu-memory-measurements");
var o = class _o {
  static createIndex(t2, e, s) {
    return new _o(t2, 34963, e, s);
  }
  static createUniform(t2, e, s) {
    return new _o(t2, 35345, e, s);
  }
  static createPixelPack(t2, e = 35041, s) {
    const i = new _o(t2, 35051, e);
    return s && i.setSize(s), i;
  }
  static createPixelUnpack(t2, e = 35040, s) {
    return new _o(t2, 35052, e, s);
  }
  static createTransformFeedback(t2, e = 35044, s) {
    const i = new _o(t2, 35982, e);
    return i.setSize(s), i;
  }
  constructor(t2, e, s, i) {
    this._context = t2, this.bufferType = e, this.usage = s, this._glName = null, this._size = -1, this._indexType = void 0, t2.instanceCounter.increment(O.BufferObject, this), this._glName = this._context.gl.createBuffer(), u(this._context.gl), i && this.setData(i);
  }
  get glName() {
    return this._glName;
  }
  get size() {
    return this._size;
  }
  get indexType() {
    return this._indexType;
  }
  get sizeBytes() {
    if (34963 === this.bufferType) {
      if (this._indexType === R.UNSIGNED_INT) return 4 * this._size;
      if (this._indexType === R.UNSIGNED_SHORT) return 2 * this._size;
    }
    return this._size;
  }
  get usedMemory() {
    return c2 ? 0 : this.sizeBytes;
  }
  get _isVAOAware() {
    return 34963 === this.bufferType || 34962 === this.bufferType;
  }
  dispose() {
    if (this._context?.gl) {
      if (this._glName) {
        this._context.gl.deleteBuffer(this._glName), this._glName = null;
      }
      this._context.instanceCounter.decrement(O.BufferObject, this), this._context = null;
    } else this._glName && f().warn("Leaked WebGL buffer object");
  }
  setSize(t2, e = null) {
    if (34963 === this.bufferType && null != e) switch (this._indexType = e, e) {
      case R.UNSIGNED_SHORT:
        t2 *= 2;
        break;
      case R.UNSIGNED_INT:
        t2 *= 4;
    }
    this._setBufferData(t2);
  }
  setData(t2) {
    if (!t2) return;
    let e = t2.byteLength;
    34963 === this.bufferType && (t(t2) ? this._indexType = R.UNSIGNED_BYTE : c(t2) ? (e /= 2, this._indexType = R.UNSIGNED_SHORT) : a(t2) && (e /= 4, this._indexType = R.UNSIGNED_INT)), this._setBufferData(e, t2);
  }
  _setBufferData(t2, e = null) {
    this._size = t2;
    const s = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const i = this._context.gl;
    null != e ? i.bufferData(this.bufferType, e, this.usage) : i.bufferData(this.bufferType, t2, this.usage), u(i), this._isVAOAware && this._context.bindVAO(s);
  }
  setSubData(t2, e, s, i) {
    if (!t2) return;
    const r = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const { gl: u2 } = this._context;
    u2.bufferSubData(this.bufferType, e * t2.BYTES_PER_ELEMENT, t2, s, i - s), u(u2), this._isVAOAware && this._context.bindVAO(r);
  }
  getSubData(t2, e = 0, s, i) {
    if (s < 0 || i < 0) return;
    const r = _(t2) ? t2.BYTES_PER_ELEMENT : 1;
    if (r * ((s ?? 0) + (i ?? 0)) > t2.byteLength) return;
    e + r * (i ?? 0) > this.usedMemory && f().warn("Potential problem getting subdata: requested data exceeds buffer size!");
    const n2 = this._context.gl;
    35982 === this.bufferType ? (this._context.bindBuffer(this, 35982), n2.getBufferSubData(35982, e, t2, s, i), this._context.unbindBuffer(35982)) : (this._context.bindBuffer(this, 36662), n2.getBufferSubData(36662, e, t2, s, i), this._context.unbindBuffer(36662));
  }
  async getSubDataAsync(t2, e = 0, s, i) {
    await this._context.clientWaitAsync(), this.getSubData(t2, e, s, i);
  }
};
function _(e) {
  return p(e);
}

export {
  o
};
//# sourceMappingURL=chunk-QOY7P5Z5.js.map
