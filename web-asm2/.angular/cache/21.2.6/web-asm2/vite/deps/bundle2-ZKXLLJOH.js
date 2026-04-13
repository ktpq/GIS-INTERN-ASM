import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/bundle2.js
var t;
var e = null;
function _() {
  return null !== e && 0 !== e.byteLength || (e = new Uint8Array(t.memory.buffer)), e;
}
var n = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
n.decode();
var r = 2146435072;
var s = 0;
function i(t2, e2) {
  return s += e2, s >= r && (n = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), n.decode(), s = e2), n.decode(_().subarray(t2, t2 + e2));
}
function a(t2, e2) {
  return i(t2 >>>= 0, e2);
}
var o = 0;
var g = new TextEncoder();
function c(t2, e2, n2) {
  if (void 0 === n2) {
    const n3 = g.encode(t2), r3 = e2(n3.length, 1) >>> 0;
    return _().subarray(r3, r3 + n3.length).set(n3), o = n3.length, r3;
  }
  let r2 = t2.length, s2 = e2(r2, 1) >>> 0;
  const i2 = _();
  let a2 = 0;
  for (; a2 < r2; a2++) {
    const e3 = t2.charCodeAt(a2);
    if (e3 > 127) break;
    i2[s2 + a2] = e3;
  }
  if (a2 !== r2) {
    0 !== a2 && (t2 = t2.slice(a2)), s2 = n2(s2, r2, r2 = a2 + 3 * t2.length, 1) >>> 0;
    const e3 = _().subarray(s2 + a2, s2 + r2);
    a2 += g.encodeInto(t2, e3).written, s2 = n2(s2, r2, a2, 1) >>> 0;
  }
  return o = a2, s2;
}
"encodeInto" in g || (g.encodeInto = function(t2, e2) {
  const _2 = g.encode(t2);
  return e2.set(_2), { read: t2.length, written: _2.length };
});
var b = null;
function w() {
  return (null === b || true === b.buffer.detached || void 0 === b.buffer.detached && b.buffer !== t.memory.buffer) && (b = new DataView(t.memory.buffer)), b;
}
function f() {
  t.enableTracing();
}
function l(t2, e2) {
  const n2 = e2(1 * t2.length, 1) >>> 0;
  return _().set(t2, n2 / 1), o = t2.length, n2;
}
function p(e2) {
  const _2 = t.__wbindgen_externrefs.get(e2);
  return t.__externref_table_dealloc(e2), _2;
}
var u = null;
function d() {
  return null !== u && 0 !== u.byteLength || (u = new Uint32Array(t.memory.buffer)), u;
}
function h(t2, e2) {
  const _2 = e2(4 * t2.length, 4) >>> 0;
  return d().set(t2, _2 / 4), o = t2.length, _2;
}
function y(e2, _2) {
  e2 >>>= 0;
  const n2 = w(), r2 = [];
  for (let s2 = e2; s2 < e2 + 4 * _2; s2 += 4) r2.push(t.__wbindgen_externrefs.get(n2.getUint32(s2, true)));
  return t.__externref_drop_slice(e2, _2), r2;
}
var m = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e2) => t.__wbg_face_free(e2 >>> 0, 1));
var v = class _v {
  static __wrap(t2) {
    t2 >>>= 0;
    const e2 = Object.create(_v.prototype);
    return e2.__wbg_ptr = t2, m.register(e2, e2.__wbg_ptr, e2), e2;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, m.unregister(this), t2;
  }
  free() {
    const e2 = this.__destroy_into_raw();
    t.__wbg_face_free(e2, 0);
  }
  static parse(e2) {
    const _2 = l(e2, t.__wbindgen_malloc), n2 = o, r2 = t.face_parse(_2, n2);
    if (r2[2]) throw p(r2[1]);
    return _v.__wrap(r2[0]);
  }
  static parseWoff2(e2) {
    const _2 = l(e2, t.__wbindgen_malloc), n2 = o, r2 = t.face_parseWoff2(_2, n2);
    if (r2[2]) throw p(r2[1]);
    return _v.__wrap(r2[0]);
  }
  shape(e2, _2, n2) {
    const r2 = c(e2, t.__wbindgen_malloc, t.__wbindgen_realloc), s2 = o, i2 = h(_2, t.__wbindgen_malloc), a2 = o, g2 = t.face_shape(this.__wbg_ptr, r2, s2, i2, a2, n2);
    var b2 = y(g2[0], g2[1]).slice();
    return t.__wbindgen_free(g2[0], 4 * g2[1], 4), b2;
  }
  paintCurves(e2, _2, n2, r2) {
    const s2 = t.face_paintCurves(this.__wbg_ptr, e2, _2, n2, r2);
    return 0 === s2 ? void 0 : T.__wrap(s2);
  }
  midline() {
    return t.face_midline(this.__wbg_ptr);
  }
  baseline() {
    return t.face_baseline(this.__wbg_ptr);
  }
};
Symbol.dispose && (v.prototype[Symbol.dispose] = v.prototype.free);
var A = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e2) => t.__wbg_glyphdata_free(e2 >>> 0, 1));
var O = class _O {
  static __wrap(t2) {
    t2 >>>= 0;
    const e2 = Object.create(_O.prototype);
    return e2.__wbg_ptr = t2, A.register(e2, e2.__wbg_ptr, e2), e2;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A.unregister(this), t2;
  }
  free() {
    const e2 = this.__destroy_into_raw();
    t.__wbg_glyphdata_free(e2, 0);
  }
  get glyphId() {
    return t.__wbg_get_glyphdata_glyphId(this.__wbg_ptr) >>> 0;
  }
  set glyphId(e2) {
    t.__wbg_set_glyphdata_glyphId(this.__wbg_ptr, e2);
  }
  get cluster() {
    return t.__wbg_get_glyphdata_cluster(this.__wbg_ptr) >>> 0;
  }
  set cluster(e2) {
    t.__wbg_set_glyphdata_cluster(this.__wbg_ptr, e2);
  }
  get unsafeToBreak() {
    return 0 !== t.__wbg_get_glyphdata_unsafeToBreak(this.__wbg_ptr);
  }
  set unsafeToBreak(e2) {
    t.__wbg_set_glyphdata_unsafeToBreak(this.__wbg_ptr, e2);
  }
  get xAdvance() {
    return t.__wbg_get_glyphdata_xAdvance(this.__wbg_ptr);
  }
  set xAdvance(e2) {
    t.__wbg_set_glyphdata_xAdvance(this.__wbg_ptr, e2);
  }
  get yAdvance() {
    return t.__wbg_get_glyphdata_yAdvance(this.__wbg_ptr);
  }
  set yAdvance(e2) {
    t.__wbg_set_glyphdata_yAdvance(this.__wbg_ptr, e2);
  }
  get xOffset() {
    return t.__wbg_get_glyphdata_xOffset(this.__wbg_ptr);
  }
  set xOffset(e2) {
    t.__wbg_set_glyphdata_xOffset(this.__wbg_ptr, e2);
  }
  get yOffset() {
    return t.__wbg_get_glyphdata_yOffset(this.__wbg_ptr);
  }
  set yOffset(e2) {
    t.__wbg_set_glyphdata_yOffset(this.__wbg_ptr, e2);
  }
  get isWhitespace() {
    return 0 !== t.__wbg_get_glyphdata_isWhitespace(this.__wbg_ptr);
  }
  set isWhitespace(e2) {
    t.__wbg_set_glyphdata_isWhitespace(this.__wbg_ptr, e2);
  }
  get isNewline() {
    return 0 !== t.__wbg_get_glyphdata_isNewline(this.__wbg_ptr);
  }
  set isNewline(e2) {
    t.__wbg_set_glyphdata_isNewline(this.__wbg_ptr, e2);
  }
};
Symbol.dispose && (O.prototype[Symbol.dispose] = O.prototype.free);
var x = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e2) => t.__wbg_glyphrect_free(e2 >>> 0, 1));
var T = class _T {
  static __wrap(t2) {
    t2 >>>= 0;
    const e2 = Object.create(_T.prototype);
    return e2.__wbg_ptr = t2, x.register(e2, e2.__wbg_ptr, e2), e2;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, x.unregister(this), t2;
  }
  free() {
    const e2 = this.__destroy_into_raw();
    t.__wbg_glyphrect_free(e2, 0);
  }
  get width() {
    return t.__wbg_get_glyphdata_xAdvance(this.__wbg_ptr);
  }
  set width(e2) {
    t.__wbg_set_glyphdata_xAdvance(this.__wbg_ptr, e2);
  }
  get height() {
    return t.__wbg_get_glyphdata_yAdvance(this.__wbg_ptr);
  }
  set height(e2) {
    t.__wbg_set_glyphdata_yAdvance(this.__wbg_ptr, e2);
  }
  get top() {
    return t.__wbg_get_glyphdata_xOffset(this.__wbg_ptr);
  }
  set top(e2) {
    t.__wbg_set_glyphdata_xOffset(this.__wbg_ptr, e2);
  }
  get left() {
    return t.__wbg_get_glyphdata_yOffset(this.__wbg_ptr);
  }
  set left(e2) {
    t.__wbg_set_glyphdata_yOffset(this.__wbg_ptr, e2);
  }
};
Symbol.dispose && (T.prototype[Symbol.dispose] = T.prototype.free);
var W = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function I(t2, e2) {
  if ("function" == typeof Response && t2 instanceof Response) {
    if ("function" == typeof WebAssembly.instantiateStreaming) try {
      return await WebAssembly.instantiateStreaming(t2, e2);
    } catch (_2) {
      if (!(t2.ok && W.has(t2.type)) || "application/wasm" === t2.headers.get("Content-Type")) throw _2;
      console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _2);
    }
    const n2 = await t2.arrayBuffer();
    return await WebAssembly.instantiate(n2, e2);
  }
  {
    const _2 = await WebAssembly.instantiate(t2, e2);
    return _2 instanceof WebAssembly.Instance ? { instance: _2, module: t2 } : _2;
  }
}
function R() {
  const e2 = { wbg: {} };
  return e2.wbg.__wbg___wbindgen_throw_b855445ff6a94295 = function(t2, e3) {
    throw new Error(a(t2, e3));
  }, e2.wbg.__wbg_beginPath_ae4169e263573dcd = function(t2) {
    t2.beginPath();
  }, e2.wbg.__wbg_bezierCurveTo_3ad512ab3d4a1424 = function(t2, e3, _2, n2, r2, s2, i2) {
    t2.bezierCurveTo(e3, _2, n2, r2, s2, i2);
  }, e2.wbg.__wbg_closePath_bc64fd4702f5fc60 = function(t2) {
    t2.closePath();
  }, e2.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e3, _2) {
    let n2, r2;
    try {
      n2 = e3, r2 = _2, console.error(a(e3, _2));
    } finally {
      t.__wbindgen_free(n2, r2, 1);
    }
  }, e2.wbg.__wbg_fill_c1b94332a3f5eecc = function(t2) {
    t2.fill();
  }, e2.wbg.__wbg_glyphdata_new = function(t2) {
    return O.__wrap(t2);
  }, e2.wbg.__wbg_lineTo_1e83b5f2f38f15f9 = function(t2, e3, _2) {
    t2.lineTo(e3, _2);
  }, e2.wbg.__wbg_moveTo_8064f6a508217dcd = function(t2, e3, _2) {
    t2.moveTo(e3, _2);
  }, e2.wbg.__wbg_new_8a6f238a6ece86ea = function() {
    return new Error();
  }, e2.wbg.__wbg_quadraticCurveTo_fc736a90d9e7a806 = function(t2, e3, _2, n2, r2) {
    t2.quadraticCurveTo(e3, _2, n2, r2);
  }, e2.wbg.__wbg_stack_0ed75d68575b0f3c = function(e3, _2) {
    const n2 = c(_2.stack, t.__wbindgen_malloc, t.__wbindgen_realloc), r2 = o;
    w().setInt32(e3 + 4, r2, true), w().setInt32(e3 + 0, n2, true);
  }, e2.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(t2, e3) {
    return a(t2, e3);
  }, e2.wbg.__wbindgen_init_externref_table = function() {
    const e3 = t.__wbindgen_externrefs, _2 = e3.grow(4);
    e3.set(0, void 0), e3.set(_2 + 0, void 0), e3.set(_2 + 1, null), e3.set(_2 + 2, true), e3.set(_2 + 3, false);
  }, e2;
}
function S(_2, n2) {
  return t = _2.exports, k.__wbindgen_wasm_module = n2, b = null, u = null, e = null, t.__wbindgen_start(), t;
}
function j(e2) {
  if (void 0 !== t) return t;
  void 0 !== e2 && (Object.getPrototypeOf(e2) === Object.prototype ? { module: e2 } = e2 : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const _2 = R();
  e2 instanceof WebAssembly.Module || (e2 = new WebAssembly.Module(e2));
  return S(new WebAssembly.Instance(e2, _2), e2);
}
async function k(e2) {
  if (void 0 !== t) return t;
  void 0 !== e2 && (Object.getPrototypeOf(e2) === Object.prototype ? { module_or_path: e2 } = e2 : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
  const _2 = R();
  ("string" == typeof e2 || "function" == typeof Request && e2 instanceof Request || "function" == typeof URL && e2 instanceof URL) && (e2 = fetch(e2));
  const { instance: n2, module: r2 } = await I(await e2, _2);
  return S(n2, r2);
}
export {
  v as Face,
  O as GlyphData,
  T as GlyphRect,
  k as default,
  f as enableTracing,
  j as initSync
};
//# sourceMappingURL=bundle2-ZKXLLJOH.js.map
