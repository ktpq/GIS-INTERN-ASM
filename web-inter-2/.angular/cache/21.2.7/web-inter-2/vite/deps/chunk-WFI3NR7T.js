import {
  n
} from "./chunk-U5RKVLEL.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  __addDisposableResource,
  __disposeResources
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/geometry/libtess.js
var o = null;
var n2 = null;
var a = 4;
async function c() {
  return o ??= d(), o;
}
async function d() {
  const t = await import("./libtess-f32-XALDYT3N.js"), s = await t.default({ locateFile: (t2) => n(`esri/core/libs/libtess/${t2}`) });
  n2 = s;
}
function f(r2, o2, i = 2) {
  const l = { stack: [], error: void 0, hasError: false };
  try {
    const s = n2;
    if (!s) throw new r("mesh:not-loaded", "libtessF32 not loaded");
    const c2 = __addDisposableResource(l, C.from(s, r2), false), h = __addDisposableResource(l, w.from(s, o2), false), u = a * (r2.length / i), y = __addDisposableResource(l, new C(s, u * i), false), d2 = s.triangulate(c2.ptr, h.ptr, h.size, i, y.ptr, u);
    0;
    return { buffer: y.slice(0, d2 * i), vertexCount: d2 };
  } catch (c2) {
    l.error = c2, l.hasError = true;
  } finally {
    __disposeResources(l);
  }
}
function m(t) {
  return t.HEAPF32;
}
function _(t) {
  return t.HEAP32;
}
var C = class _C {
  static from(t, s) {
    const r2 = new _C(t, s.length);
    return r2.set(s), r2;
  }
  constructor(t, s) {
    this._libtess = t, this.size = s, this.ptr = t.allocateCoordinateArray(s);
  }
  destroy() {
    this._libtess.destroyCoordinateArray(this.ptr);
  }
  [Symbol.dispose]() {
    this.destroy();
  }
  get bytesPerCoordinate() {
    return Float32Array.BYTES_PER_ELEMENT;
  }
  set(t) {
    m(this._libtess).set(t, this.ptr / this.bytesPerCoordinate);
  }
  slice(t, s) {
    const r2 = this.ptr / this.bytesPerCoordinate;
    return m(this._libtess).slice(r2 + t, r2 + s);
  }
};
var w = class _w {
  static from(t, s) {
    const r2 = new _w(t, s.length);
    return r2.set(s), r2;
  }
  constructor(t, s) {
    this._libtess = t, this.size = s, this.ptr = t.allocateLengthsArray(s);
  }
  destroy() {
    this._libtess.destroyLengthsArray(this.ptr);
  }
  [Symbol.dispose]() {
    this.destroy();
  }
  get bytesPerCoordinate() {
    return Int32Array.BYTES_PER_ELEMENT;
  }
  set(t) {
    _(this._libtess).set(t, this.ptr / this.bytesPerCoordinate);
  }
  slice(t, s) {
    const r2 = this.ptr / this.bytesPerCoordinate;
    return _(this._libtess).slice(r2 + t, r2 + s);
  }
};

export {
  c,
  f
};
//# sourceMappingURL=chunk-WFI3NR7T.js.map
