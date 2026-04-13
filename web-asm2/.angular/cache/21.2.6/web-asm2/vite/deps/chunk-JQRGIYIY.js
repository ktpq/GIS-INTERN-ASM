// node_modules/@arcgis/core/chunks/bundle.js
var e;
function t(t2) {
  const _2 = e.__externref_table_alloc();
  return e.__wbindgen_externrefs.set(_2, t2), _2;
}
function _(e2, t2) {
  if (!(e2 instanceof t2)) throw new Error(`expected instance of ${t2.name}`);
}
var r = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e2) => e2.dtor(e2.a, e2.b));
function n(e2, t2) {
  return e2 >>>= 0, b().subarray(e2 / 8, e2 / 8 + t2);
}
function i(e2, t2) {
  return e2 >>>= 0, w().subarray(e2 / 2, e2 / 2 + t2);
}
function s(t2, _2) {
  t2 >>>= 0;
  const r2 = g(), n2 = [];
  for (let i2 = t2; i2 < t2 + 4 * _2; i2 += 4) n2.push(e.__wbindgen_externrefs.get(r2.getUint32(i2, true)));
  return e.__externref_drop_slice(t2, _2), n2;
}
function o(e2, t2) {
  return e2 >>>= 0, f().subarray(e2 / 4, e2 / 4 + t2);
}
function a(e2, t2) {
  return e2 >>>= 0, h().subarray(e2 / 1, e2 / 1 + t2);
}
var c = null;
function g() {
  return (null === c || true === c.buffer.detached || void 0 === c.buffer.detached && c.buffer !== e.memory.buffer) && (c = new DataView(e.memory.buffer)), c;
}
var u = null;
function b() {
  return null !== u && 0 !== u.byteLength || (u = new Float64Array(e.memory.buffer)), u;
}
var l = null;
function w() {
  return null !== l && 0 !== l.byteLength || (l = new Int16Array(e.memory.buffer)), l;
}
function p(e2, t2) {
  return A(e2 >>>= 0, t2);
}
var d = null;
function f() {
  return null !== d && 0 !== d.byteLength || (d = new Uint32Array(e.memory.buffer)), d;
}
var y = null;
function h() {
  return null !== y && 0 !== y.byteLength || (y = new Uint8Array(e.memory.buffer)), y;
}
function m(_2, r2) {
  try {
    return _2.apply(this, r2);
  } catch (n2) {
    const _3 = t(n2);
    e.__wbindgen_exn_store(_3);
  }
}
function z(e2) {
  return null == e2;
}
function F(e2, t2, _2, n2) {
  const i2 = { a: e2, b: t2, cnt: 1, dtor: _2 }, s2 = (...e3) => {
    i2.cnt++;
    const t3 = i2.a;
    i2.a = 0;
    try {
      return n2(t3, i2.b, ...e3);
    } finally {
      i2.a = t3, s2._wbg_cb_unref();
    }
  };
  return s2._wbg_cb_unref = () => {
    0 === --i2.cnt && (i2.dtor(i2.a, i2.b), i2.a = 0, r.unregister(i2));
  }, r.register(s2, i2, i2), s2;
}
function q(e2, t2) {
  const _2 = t2(4 * e2.length, 4) >>> 0;
  return f().set(e2, _2 / 4), j = e2.length, _2;
}
function x(e2, t2) {
  const _2 = t2(1 * e2.length, 1) >>> 0;
  return h().set(e2, _2 / 1), j = e2.length, _2;
}
function v(e2, t2) {
  const _2 = t2(8 * e2.length, 8) >>> 0;
  return b().set(e2, _2 / 8), j = e2.length, _2;
}
function S(e2, _2) {
  const r2 = _2(4 * e2.length, 4) >>> 0;
  for (let n2 = 0; n2 < e2.length; n2++) {
    const _3 = t(e2[n2]);
    g().setUint32(r2 + 4 * n2, _3, true);
  }
  return j = e2.length, r2;
}
function R(e2, t2, _2) {
  if (void 0 === _2) {
    const _3 = M.encode(e2), r3 = t2(_3.length, 1) >>> 0;
    return h().subarray(r3, r3 + _3.length).set(_3), j = _3.length, r3;
  }
  let r2 = e2.length, n2 = t2(r2, 1) >>> 0;
  const i2 = h();
  let s2 = 0;
  for (; s2 < r2; s2++) {
    const t3 = e2.charCodeAt(s2);
    if (t3 > 127) break;
    i2[n2 + s2] = t3;
  }
  if (s2 !== r2) {
    0 !== s2 && (e2 = e2.slice(s2)), n2 = _2(n2, r2, r2 = s2 + 3 * e2.length, 1) >>> 0;
    const t3 = h().subarray(n2 + s2, n2 + r2);
    s2 += M.encodeInto(e2, t3).written, n2 = _2(n2, r2, s2, 1) >>> 0;
  }
  return j = s2, n2;
}
function k(t2) {
  const _2 = e.__wbindgen_externrefs.get(t2);
  return e.__externref_table_dealloc(t2), _2;
}
var O = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
O.decode();
var T = 2146435072;
var C = 0;
function A(e2, t2) {
  return C += t2, C >= T && (O = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), O.decode(), C = t2), O.decode(h().subarray(e2, e2 + t2));
}
var M = new TextEncoder();
"encodeInto" in M || (M.encodeInto = function(e2, t2) {
  const _2 = M.encode(e2);
  return t2.set(_2), { read: e2.length, written: _2.length };
});
var j = 0;
function I(t2, _2, r2) {
  e.wasm_bindgen__convert__closures_____invoke__hc750ce93e757c93b(t2, _2, r2);
}
function L(t2, _2, r2, n2) {
  e.wasm_bindgen__convert__closures_____invoke__hb8889eb82d058fe8(t2, _2, r2, n2);
}
var U = ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeBigInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong", "esriFieldTypeString", "esriFieldTypeDate", "esriFieldTypeOID", "esriFieldTypeGeometry", "esriFieldTypeBlob", "esriFieldTypeRaster", "esriFieldTypeGUID", "esriFieldTypeGlobalID", "esriFieldTypeXML", "esriFieldTypeDateOnly", "esriFieldTypeTimeOnly", "esriFieldTypeTimestampOffset"];
var W = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_columndescriptor_free(t2 >>> 0, 1));
var P = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_columnid_free(t2 >>> 0, 1));
var E = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_displayoptimizationxzbuilder_free(t2 >>> 0, 1));
var G = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_displayoptimizationzbuilder_free(t2 >>> 0, 1));
var B = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_extent_free(t2 >>> 0, 1));
var D = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_fieldmetadata_free(t2 >>> 0, 1));
var X = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_geometryfield_free(t2 >>> 0, 1));
var H = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_geometryinfo_free(t2 >>> 0, 1));
var V = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_multiscalegeometryfield_free(t2 >>> 0, 1));
var Y = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_pageencodingdescriptor_free(t2 >>> 0, 1));
var Z = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_parquetchunk_free(t2 >>> 0, 1));
var N = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_parquetfile_free(t2 >>> 0, 1));
var Q = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_parquetpatchchunk_free(t2 >>> 0, 1));
var $ = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_quantizedgeometrybuffer_free(t2 >>> 0, 1));
var J = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_query_free(t2 >>> 0, 1));
var K = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_querystream_free(t2 >>> 0, 1));
var ee = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_rangeproviderjs_free(t2 >>> 0, 1));
var te = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_rowgroup_free(t2 >>> 0, 1));
var _e = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => e.__wbg_rowgroupid_free(t2 >>> 0, 1));
var re = class _re {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_re.prototype);
    return t2.__wbg_ptr = e2, W.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, W.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_columndescriptor_free(t2, 0);
  }
  name() {
    let t2, _2;
    try {
      const r2 = e.columndescriptor_name(this.__wbg_ptr);
      return t2 = r2[0], _2 = r2[1], p(r2[0], r2[1]);
    } finally {
      e.__wbindgen_free(t2, _2, 1);
    }
  }
  physicalType() {
    let t2, _2;
    try {
      const r2 = e.columndescriptor_physicalType(this.__wbg_ptr);
      return t2 = r2[0], _2 = r2[1], p(r2[0], r2[1]);
    } finally {
      e.__wbindgen_free(t2, _2, 1);
    }
  }
  logicalType() {
    const t2 = e.columndescriptor_logicalType(this.__wbg_ptr);
    let _2;
    return 0 !== t2[0] && (_2 = p(t2[0], t2[1]).slice(), e.__wbindgen_free(t2[0], 1 * t2[1], 1)), _2;
  }
  encodings() {
    const t2 = e.columndescriptor_encodings(this.__wbg_ptr);
    var _2 = s(t2[0], t2[1]).slice();
    return e.__wbindgen_free(t2[0], 4 * t2[1], 4), _2;
  }
  pageEncodings() {
    const t2 = e.columndescriptor_pageEncodings(this.__wbg_ptr);
    let _2;
    return 0 !== t2[0] && (_2 = s(t2[0], t2[1]).slice(), e.__wbindgen_free(t2[0], 4 * t2[1], 4)), _2;
  }
  numValues() {
    return e.columndescriptor_numValues(this.__wbg_ptr);
  }
  compression() {
    let t2, _2;
    try {
      const r2 = e.columndescriptor_compression(this.__wbg_ptr);
      return t2 = r2[0], _2 = r2[1], p(r2[0], r2[1]);
    } finally {
      e.__wbindgen_free(t2, _2, 1);
    }
  }
  compressedSize() {
    return e.columndescriptor_compressedSize(this.__wbg_ptr);
  }
  uncompressedSize() {
    return e.columndescriptor_uncompressedSize(this.__wbg_ptr);
  }
  nullCount() {
    const t2 = e.columndescriptor_nullCount(this.__wbg_ptr);
    return 0 === t2[0] ? void 0 : t2[1];
  }
  distinctCount() {
    const t2 = e.columndescriptor_distinctCount(this.__wbg_ptr);
    return 0 === t2[0] ? void 0 : t2[1];
  }
  minValue() {
    return e.columndescriptor_minValue(this.__wbg_ptr);
  }
  maxValue() {
    return e.columndescriptor_maxValue(this.__wbg_ptr);
  }
};
Symbol.dispose && (re.prototype[Symbol.dispose] = re.prototype.free);
var ne = class {
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, P.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_columnid_free(t2, 0);
  }
};
Symbol.dispose && (ne.prototype[Symbol.dispose] = ne.prototype.free);
var ie = Object.freeze({ PBF: 0, 0: "PBF" });
var se = class _se {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_se.prototype);
    return t2.__wbg_ptr = e2, E.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, E.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_displayoptimizationxzbuilder_free(t2, 0);
  }
  static new() {
    const t2 = e.displayoptimizationxzbuilder_new();
    return _se.__wrap(t2);
  }
  setCodeField(t2) {
    const _2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), r2 = j;
    e.displayoptimizationxzbuilder_setCodeField(this.__wbg_ptr, _2, r2);
  }
  setSpatialReference(t2, _2) {
    var r2 = z(_2) ? 0 : R(_2, e.__wbindgen_malloc, e.__wbindgen_realloc), n2 = j;
    const i2 = e.displayoptimizationxzbuilder_setSpatialReference(this.__wbg_ptr, z(t2) ? 4294967297 : t2 >>> 0, r2, n2);
    if (i2[1]) throw k(i2[0]);
  }
  setEncoding(t2) {
    const _2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), r2 = j, n2 = e.displayoptimizationxzbuilder_setEncoding(this.__wbg_ptr, _2, r2);
    if (n2[1]) throw k(n2[0]);
  }
  setGeometryType(t2) {
    e.displayoptimizationxzbuilder_setGeometryType(this.__wbg_ptr, t2);
  }
  setFullExtent(t2) {
    e.displayoptimizationxzbuilder_setFullExtent(this.__wbg_ptr, t2);
  }
  setHasZ(t2) {
    e.displayoptimizationxzbuilder_setHasZ(this.__wbg_ptr, t2);
  }
  setHasM(t2) {
    e.displayoptimizationxzbuilder_setHasM(this.__wbg_ptr, t2);
  }
  setMaxLevel(t2) {
    e.displayoptimizationxzbuilder_setMaxLevel(this.__wbg_ptr, t2);
  }
  addLevel(t2) {
    _(t2, le);
    var r2 = t2.__destroy_into_raw();
    e.displayoptimizationxzbuilder_addLevel(this.__wbg_ptr, r2);
  }
};
Symbol.dispose && (se.prototype[Symbol.dispose] = se.prototype.free);
var oe = class _oe {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_oe.prototype);
    return t2.__wbg_ptr = e2, G.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, G.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_displayoptimizationzbuilder_free(t2, 0);
  }
  static new() {
    const t2 = e.displayoptimizationzbuilder_new();
    return _oe.__wrap(t2);
  }
  setCodeField(t2) {
    const _2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), r2 = j;
    e.displayoptimizationzbuilder_setCodeField(this.__wbg_ptr, _2, r2);
  }
  setXColumn(t2) {
    const _2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), r2 = j;
    e.displayoptimizationzbuilder_setXColumn(this.__wbg_ptr, _2, r2);
  }
  setYColumn(t2) {
    const _2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), r2 = j;
    e.displayoptimizationzbuilder_setYColumn(this.__wbg_ptr, _2, r2);
  }
  setSpatialReference(t2, _2) {
    var r2 = z(_2) ? 0 : R(_2, e.__wbindgen_malloc, e.__wbindgen_realloc), n2 = j;
    const i2 = e.displayoptimizationzbuilder_setSpatialReference(this.__wbg_ptr, z(t2) ? 4294967297 : t2 >>> 0, r2, n2);
    if (i2[1]) throw k(i2[0]);
  }
  setFullExtent(t2) {
    e.displayoptimizationzbuilder_setFullExtent(this.__wbg_ptr, t2);
  }
  setHasZ(t2) {
    e.displayoptimizationzbuilder_setHasZ(this.__wbg_ptr, t2);
  }
  setHasM(t2) {
    e.displayoptimizationzbuilder_setHasM(this.__wbg_ptr, t2);
  }
  setCooordinatePrecision(t2) {
    e.displayoptimizationzbuilder_setCooordinatePrecision(this.__wbg_ptr, t2);
  }
};
Symbol.dispose && (oe.prototype[Symbol.dispose] = oe.prototype.free);
var ae = class {
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, B.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_extent_free(t2, 0);
  }
  get xmin() {
    return e.__wbg_get_extent_xmin(this.__wbg_ptr);
  }
  set xmin(t2) {
    e.__wbg_set_extent_xmin(this.__wbg_ptr, t2);
  }
  get ymin() {
    return e.__wbg_get_extent_ymin(this.__wbg_ptr);
  }
  set ymin(t2) {
    e.__wbg_set_extent_ymin(this.__wbg_ptr, t2);
  }
  get xmax() {
    return e.__wbg_get_extent_xmax(this.__wbg_ptr);
  }
  set xmax(t2) {
    e.__wbg_set_extent_xmax(this.__wbg_ptr, t2);
  }
  get ymax() {
    return e.__wbg_get_extent_ymax(this.__wbg_ptr);
  }
  set ymax(t2) {
    e.__wbg_set_extent_ymax(this.__wbg_ptr, t2);
  }
};
Symbol.dispose && (ae.prototype[Symbol.dispose] = ae.prototype.free);
var ce = class _ce {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_ce.prototype);
    return t2.__wbg_ptr = e2, D.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, D.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_fieldmetadata_free(t2, 0);
  }
  get is_nested() {
    return 0 !== e.__wbg_get_fieldmetadata_is_nested(this.__wbg_ptr);
  }
  set is_nested(t2) {
    e.__wbg_set_fieldmetadata_is_nested(this.__wbg_ptr, t2);
  }
  get name() {
    let t2, _2;
    try {
      const r2 = e.fieldmetadata_name(this.__wbg_ptr);
      return t2 = r2[0], _2 = r2[1], p(r2[0], r2[1]);
    } finally {
      e.__wbindgen_free(t2, _2, 1);
    }
  }
  get type() {
    const t2 = e.fieldmetadata_esri_type(this.__wbg_ptr);
    return U[t2];
  }
  get physicalType() {
    const t2 = e.fieldmetadata_physical_type(this.__wbg_ptr);
    let _2;
    return 0 !== t2[0] && (_2 = p(t2[0], t2[1]).slice(), e.__wbindgen_free(t2[0], 1 * t2[1], 1)), _2;
  }
  get logicalType() {
    const t2 = e.fieldmetadata_logical_type(this.__wbg_ptr);
    let _2;
    return 0 !== t2[0] && (_2 = p(t2[0], t2[1]).slice(), e.__wbindgen_free(t2[0], 1 * t2[1], 1)), _2;
  }
};
Symbol.dispose && (ce.prototype[Symbol.dispose] = ce.prototype.free);
var ge = class _ge {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_ge.prototype);
    return t2.__wbg_ptr = e2, X.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, X.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_geometryfield_free(t2, 0);
  }
  static fromNative(t2, _2, r2) {
    const n2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), i2 = j, s2 = e.geometryfield_fromNative(n2, i2, _2, r2);
    if (s2[2]) throw k(s2[1]);
    return _ge.__wrap(s2[0]);
  }
  static fromWkb(t2, _2, r2) {
    const n2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), i2 = j, s2 = e.geometryfield_fromWkb(n2, i2, _2, r2);
    if (s2[2]) throw k(s2[1]);
    return _ge.__wrap(s2[0]);
  }
  static fromLocation(t2, _2, r2, n2) {
    const i2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), s2 = j, o2 = R(_2, e.__wbindgen_malloc, e.__wbindgen_realloc), a2 = j, c2 = e.geometryfield_fromLocation(i2, s2, o2, a2, r2, n2);
    if (c2[2]) throw k(c2[1]);
    return _ge.__wrap(c2[0]);
  }
};
Symbol.dispose && (ge.prototype[Symbol.dispose] = ge.prototype.free);
var ue = class _ue {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_ue.prototype);
    return t2.__wbg_ptr = e2, H.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, H.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_geometryinfo_free(t2, 0);
  }
  static new() {
    const t2 = e.geometryinfo_new();
    if (t2[2]) throw k(t2[1]);
    return _ue.__wrap(t2[0]);
  }
  setGeometry(t2) {
    _(t2, ge);
    var r2 = t2.__destroy_into_raw();
    e.geometryinfo_setGeometry(this.__wbg_ptr, r2);
  }
  setOptmizationZ(t2) {
    _(t2, oe);
    var r2 = t2.__destroy_into_raw();
    const n2 = e.geometryinfo_setOptmizationZ(this.__wbg_ptr, r2);
    if (n2[1]) throw k(n2[0]);
  }
  setOptmizationXZ(t2) {
    _(t2, se);
    var r2 = t2.__destroy_into_raw();
    const n2 = e.geometryinfo_setOptmizationXZ(this.__wbg_ptr, r2);
    if (n2[1]) throw k(n2[0]);
  }
};
Symbol.dispose && (ue.prototype[Symbol.dispose] = ue.prototype.free);
var be = Object.freeze({ Point: 0, 0: "Point", Polygon: 1, 1: "Polygon", Polyline: 2, 2: "Polyline", Multipoint: 3, 3: "Multipoint" });
var le = class _le {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_le.prototype);
    return t2.__wbg_ptr = e2, V.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, V.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_multiscalegeometryfield_free(t2, 0);
  }
  get scale() {
    return e.__wbg_get_extent_xmin(this.__wbg_ptr);
  }
  set scale(t2) {
    e.__wbg_set_extent_xmin(this.__wbg_ptr, t2);
  }
  get level() {
    return e.__wbg_get_multiscalegeometryfield_level(this.__wbg_ptr);
  }
  set level(t2) {
    e.__wbg_set_multiscalegeometryfield_level(this.__wbg_ptr, t2);
  }
  static new(t2, _2, r2, n2, i2) {
    const s2 = R(r2, e.__wbindgen_malloc, e.__wbindgen_realloc), o2 = j, a2 = v(n2, e.__wbindgen_malloc), c2 = j, g2 = v(i2, e.__wbindgen_malloc), u2 = j, b2 = e.multiscalegeometryfield_new(t2, _2, s2, o2, a2, c2, g2, u2);
    return _le.__wrap(b2);
  }
  has_field(t2) {
    const _2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), r2 = j;
    return 0 !== e.multiscalegeometryfield_has_field(this.__wbg_ptr, _2, r2);
  }
};
Symbol.dispose && (le.prototype[Symbol.dispose] = le.prototype.free);
var we = class _we {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_we.prototype);
    return t2.__wbg_ptr = e2, Y.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Y.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_pageencodingdescriptor_free(t2, 0);
  }
  pageType() {
    let t2, _2;
    try {
      const r2 = e.pageencodingdescriptor_pageType(this.__wbg_ptr);
      return t2 = r2[0], _2 = r2[1], p(r2[0], r2[1]);
    } finally {
      e.__wbindgen_free(t2, _2, 1);
    }
  }
  encoding() {
    let t2, _2;
    try {
      const r2 = e.pageencodingdescriptor_encoding(this.__wbg_ptr);
      return t2 = r2[0], _2 = r2[1], p(r2[0], r2[1]);
    } finally {
      e.__wbindgen_free(t2, _2, 1);
    }
  }
  count() {
    return e.pageencodingdescriptor_count(this.__wbg_ptr);
  }
};
Symbol.dispose && (we.prototype[Symbol.dispose] = we.prototype.free);
var pe = class _pe {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_pe.prototype);
    return t2.__wbg_ptr = e2, Z.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Z.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_parquetchunk_free(t2, 0);
  }
  serialize() {
    const t2 = e.parquetchunk_serialize(this.__wbg_ptr);
    var _2 = a(t2[0], t2[1]).slice();
    return e.__wbindgen_free(t2[0], 1 * t2[1], 1), _2;
  }
  static deserialize(t2) {
    const _2 = x(t2, e.__wbindgen_malloc), r2 = j, n2 = e.parquetchunk_deserialize(_2, r2);
    return _pe.__wrap(n2);
  }
  rowGroup() {
    return e.parquetchunk_rowGroup(this.__wbg_ptr) >>> 0;
  }
  insertPatch(t2) {
    _(t2, fe);
    var r2 = t2.__destroy_into_raw();
    e.parquetchunk_insertPatch(this.__wbg_ptr, r2);
  }
  insertPatchBytes(t2) {
    const _2 = x(t2, e.__wbindgen_malloc), r2 = j;
    e.parquetchunk_insertPatchBytes(this.__wbg_ptr, _2, r2);
  }
  size() {
    return e.parquetchunk_size(this.__wbg_ptr) >>> 0;
  }
  hasColumn(t2) {
    return 0 !== e.parquetchunk_hasColumn(this.__wbg_ptr, t2);
  }
  rowId(t2) {
    return e.parquetchunk_rowId(this.__wbg_ptr, t2);
  }
  readX(t2) {
    const _2 = e.parquetchunk_readX(this.__wbg_ptr, t2);
    return 0 === _2[0] ? void 0 : _2[1];
  }
  readY(t2) {
    const _2 = e.parquetchunk_readY(this.__wbg_ptr, t2);
    return 0 === _2[0] ? void 0 : _2[1];
  }
  readIdsUnsafe() {
    return e.parquetchunk_readIdsUnsafe(this.__wbg_ptr);
  }
  readCoordsUnsafe(t2) {
    return e.parquetchunk_readCoordsUnsafe(this.__wbg_ptr, t2);
  }
  readLengthsUnsafe(t2) {
    return e.parquetchunk_readLengthsUnsafe(this.__wbg_ptr, t2);
  }
  transformGeometry(t2, r2, n2, i2, s2, o2) {
    _(t2, ye);
    const a2 = e.parquetchunk_transformGeometry(this.__wbg_ptr, t2.__wbg_ptr, r2, n2, i2, s2, o2);
    return 16777215 === a2 ? void 0 : 0 !== a2;
  }
  boundsXMin(t2) {
    const _2 = e.parquetchunk_boundsXMin(this.__wbg_ptr, t2);
    return 0 === _2[0] ? void 0 : _2[1];
  }
  boundsYMin(t2) {
    const _2 = e.parquetchunk_boundsYMin(this.__wbg_ptr, t2);
    return 0 === _2[0] ? void 0 : _2[1];
  }
  boundsXMax(t2) {
    const _2 = e.parquetchunk_boundsXMax(this.__wbg_ptr, t2);
    return 0 === _2[0] ? void 0 : _2[1];
  }
  boundsYMax(t2) {
    const _2 = e.parquetchunk_boundsYMax(this.__wbg_ptr, t2);
    return 0 === _2[0] ? void 0 : _2[1];
  }
  readAttribute(t2, _2) {
    return e.parquetchunk_readAttribute(this.__wbg_ptr, t2, _2);
  }
};
Symbol.dispose && (pe.prototype[Symbol.dispose] = pe.prototype.free);
var de = class _de {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_de.prototype);
    return t2.__wbg_ptr = e2, N.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, N.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_parquetfile_free(t2, 0);
  }
  static fromUrl(t2, r2, n2, i2) {
    const s2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), o2 = j;
    let a2 = 0;
    z(i2) || (_(i2, ue), a2 = i2.__destroy_into_raw());
    return e.parquetfile_fromUrl(s2, o2, r2, n2, a2);
  }
  static fromBinary(t2, r2) {
    const n2 = x(t2, e.__wbindgen_malloc), i2 = j;
    let s2 = 0;
    z(r2) || (_(r2, ue), s2 = r2.__destroy_into_raw());
    return e.parquetfile_fromBinary(n2, i2, s2);
  }
  compressionCodecs() {
    const t2 = e.parquetfile_compressionCodecs(this.__wbg_ptr);
    var _2 = s(t2[0], t2[1]).slice();
    return e.__wbindgen_free(t2[0], 4 * t2[1], 4), _2;
  }
  version() {
    return e.parquetfile_version(this.__wbg_ptr);
  }
  byteLength() {
    return e.parquetfile_byteLength(this.__wbg_ptr);
  }
  numRows() {
    return e.parquetfile_numRows(this.__wbg_ptr) >>> 0;
  }
  numFields() {
    return e.parquetfile_numFields(this.__wbg_ptr) >>> 0;
  }
  numColumns() {
    return e.parquetfile_numColumns(this.__wbg_ptr) >>> 0;
  }
  createdBy() {
    const t2 = e.parquetfile_createdBy(this.__wbg_ptr);
    let _2;
    return 0 !== t2[0] && (_2 = p(t2[0], t2[1]).slice(), e.__wbindgen_free(t2[0], 1 * t2[1], 1)), _2;
  }
  keyValueMetadata(t2) {
    const _2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), r2 = j, n2 = e.parquetfile_keyValueMetadata(this.__wbg_ptr, _2, r2);
    let i2;
    return 0 !== n2[0] && (i2 = p(n2[0], n2[1]).slice(), e.__wbindgen_free(n2[0], 1 * n2[1], 1)), i2;
  }
  keys() {
    const t2 = e.parquetfile_keys(this.__wbg_ptr);
    let _2;
    return 0 !== t2[0] && (_2 = s(t2[0], t2[1]).slice(), e.__wbindgen_free(t2[0], 4 * t2[1], 4)), _2;
  }
  columnForFieldName(t2) {
    const _2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), r2 = j, n2 = e.parquetfile_columnForFieldName(this.__wbg_ptr, _2, r2);
    return 4294967297 === n2 ? void 0 : n2;
  }
  fields(t2) {
    const _2 = e.parquetfile_fields(this.__wbg_ptr, t2);
    var r2 = s(_2[0], _2[1]).slice();
    return e.__wbindgen_free(_2[0], 4 * _2[1], 4), r2;
  }
  rowGroups() {
    const t2 = e.parquetfile_rowGroups(this.__wbg_ptr);
    var _2 = s(t2[0], t2[1]).slice();
    return e.__wbindgen_free(t2[0], 4 * t2[1], 4), _2;
  }
  updateChunkFields(r2, n2, i2) {
    _(r2, pe);
    const s2 = S(n2, e.__wbindgen_malloc), o2 = j;
    return e.parquetfile_updateChunkFields(this.__wbg_ptr, r2.__wbg_ptr, s2, o2, z(i2) ? 0 : t(i2));
  }
  createChunkPatch(_2, r2, n2, i2) {
    const s2 = q(r2, e.__wbindgen_malloc), o2 = j, a2 = S(n2, e.__wbindgen_malloc), c2 = j;
    return e.parquetfile_createChunkPatch(this.__wbg_ptr, _2, s2, o2, a2, c2, z(i2) ? 0 : t(i2));
  }
  executeQuery(r2, n2) {
    _(r2, he);
    return e.parquetfile_executeQuery(this.__wbg_ptr, r2.__wbg_ptr, z(n2) ? 0 : t(n2));
  }
  readAttribute(t2, _2, r2) {
    return e.parquetfile_readAttribute(this.__wbg_ptr, t2, _2, r2);
  }
};
Symbol.dispose && (de.prototype[Symbol.dispose] = de.prototype.free);
var fe = class _fe {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_fe.prototype);
    return t2.__wbg_ptr = e2, Q.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Q.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_parquetpatchchunk_free(t2, 0);
  }
  serialize() {
    const t2 = e.parquetpatchchunk_serialize(this.__wbg_ptr);
    var _2 = a(t2[0], t2[1]).slice();
    return e.__wbindgen_free(t2[0], 1 * t2[1], 1), _2;
  }
  static deserialize(t2) {
    const _2 = x(t2, e.__wbindgen_malloc), r2 = j, n2 = e.parquetpatchchunk_deserialize(_2, r2);
    return _fe.__wrap(n2);
  }
};
Symbol.dispose && (fe.prototype[Symbol.dispose] = fe.prototype.free);
var ye = class _ye {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_ye.prototype);
    return t2.__wbg_ptr = e2, $.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_quantizedgeometrybuffer_free(t2, 0);
  }
  static new() {
    const t2 = e.quantizedgeometrybuffer_new();
    return _ye.__wrap(t2);
  }
  readCoordsUnsafe() {
    return e.quantizedgeometrybuffer_readCoordsUnsafe(this.__wbg_ptr);
  }
  readLengthsUnsafe() {
    return e.quantizedgeometrybuffer_readLengthsUnsafe(this.__wbg_ptr);
  }
};
Symbol.dispose && (ye.prototype[Symbol.dispose] = ye.prototype.free);
var he = class _he {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_he.prototype);
    return t2.__wbg_ptr = e2, J.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, J.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_query_free(t2, 0);
  }
  static new() {
    const t2 = e.query_new();
    return _he.__wrap(t2);
  }
  setExtent(t2) {
    e.query_setExtent(this.__wbg_ptr, t2);
  }
  setIds(t2) {
    const _2 = q(t2, e.__wbindgen_malloc), r2 = j;
    e.query_setIds(this.__wbg_ptr, _2, r2);
  }
  setOutFields(t2) {
    const _2 = S(t2, e.__wbindgen_malloc), r2 = j;
    e.query_setOutFields(this.__wbg_ptr, _2, r2);
  }
  setOutSpatialReference(t2) {
    const _2 = e.query_setOutSpatialReference(this.__wbg_ptr, t2);
    if (_2[1]) throw k(_2[0]);
  }
  setReturnGeometry(t2) {
    e.query_setReturnGeometry(this.__wbg_ptr, t2);
  }
  setQuantizationTransform(t2) {
    e.query_setQuantizationTransform(this.__wbg_ptr, t2);
  }
  setScale(t2) {
    e.query_setScale(this.__wbg_ptr, t2);
  }
  setWhere(t2) {
    const _2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), r2 = j;
    e.query_setWhere(this.__wbg_ptr, _2, r2);
  }
  setWhereEvaluator(t2) {
    e.query_setWhereEvaluator(this.__wbg_ptr, t2);
  }
  setWhereFields(t2) {
    const _2 = S(t2, e.__wbindgen_malloc), r2 = j;
    e.query_setWhereFields(this.__wbg_ptr, _2, r2);
  }
};
Symbol.dispose && (he.prototype[Symbol.dispose] = he.prototype.free);
var me = class _me {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_me.prototype);
    return t2.__wbg_ptr = e2, K.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, K.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_querystream_free(t2, 0);
  }
  next(_2) {
    return e.querystream_next(this.__wbg_ptr, z(_2) ? 0 : t(_2));
  }
};
Symbol.dispose && (me.prototype[Symbol.dispose] = me.prototype.free);
var ze = class _ze {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_ze.prototype);
    return t2.__wbg_ptr = e2, ee.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ee.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_rangeproviderjs_free(t2, 0);
  }
  static new(t2, _2) {
    const r2 = e.rangeproviderjs_new(t2, _2);
    return _ze.__wrap(r2);
  }
  static withFetch() {
    const t2 = e.rangeproviderjs_withFetch();
    return _ze.__wrap(t2);
  }
};
Symbol.dispose && (ze.prototype[Symbol.dispose] = ze.prototype.free);
var Fe = class _Fe {
  static __wrap(e2) {
    e2 >>>= 0;
    const t2 = Object.create(_Fe.prototype);
    return t2.__wbg_ptr = e2, te.register(t2, t2.__wbg_ptr, t2), t2;
  }
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, te.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_rowgroup_free(t2, 0);
  }
  columnDescriptorForAttribute(t2) {
    const _2 = R(t2, e.__wbindgen_malloc, e.__wbindgen_realloc), r2 = j, n2 = e.rowgroup_columnDescriptorForAttribute(this.__wbg_ptr, _2, r2);
    return re.__wrap(n2);
  }
};
Symbol.dispose && (Fe.prototype[Symbol.dispose] = Fe.prototype.free);
var qe = class {
  __destroy_into_raw() {
    const e2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, _e.unregister(this), e2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    e.__wbg_rowgroupid_free(t2, 0);
  }
};
function xe() {
  e.enableTracing();
}
Symbol.dispose && (qe.prototype[Symbol.dispose] = qe.prototype.free);
var ve = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function Se(e2, t2) {
  if ("function" == typeof Response && e2 instanceof Response) {
    if ("function" == typeof WebAssembly.instantiateStreaming) try {
      return await WebAssembly.instantiateStreaming(e2, t2);
    } catch (_2) {
      if (!(e2.ok && ve.has(e2.type)) || "application/wasm" === e2.headers.get("Content-Type")) throw _2;
      console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _2);
    }
    const r2 = await e2.arrayBuffer();
    return await WebAssembly.instantiate(r2, t2);
  }
  {
    const _2 = await WebAssembly.instantiate(e2, t2);
    return _2 instanceof WebAssembly.Instance ? { instance: _2, module: e2 } : _2;
  }
}
function Re() {
  const _2 = { wbg: {} };
  return _2.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(e2) {
    return "function" == typeof e2;
  }, _2.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(e2) {
    return void 0 === e2;
  }, _2.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(e2, t2) {
    const _3 = "number" == typeof t2 ? t2 : void 0;
    g().setFloat64(e2 + 8, z(_3) ? 0 : _3, true), g().setInt32(e2 + 0, !z(_3), true);
  }, _2.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(t2, _3) {
    const r2 = "string" == typeof _3 ? _3 : void 0;
    var n2 = z(r2) ? 0 : R(r2, e.__wbindgen_malloc, e.__wbindgen_realloc), i2 = j;
    g().setInt32(t2 + 4, i2, true), g().setInt32(t2 + 0, n2, true);
  }, _2.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(e2, t2) {
    throw new Error(p(e2, t2));
  }, _2.wbg.__wbg__wbg_cb_unref_87dfb5aaa0cbcea7 = function(e2) {
    e2._wbg_cb_unref();
  }, _2.wbg.__wbg_aborted_2cb17c7dcb0e0509 = function(e2) {
    return e2.aborted;
  }, _2.wbg.__wbg_apply_52e9ae668d017009 = function() {
    return m(function(e2, t2, _3) {
      return e2.apply(t2, _3);
    }, arguments);
  }, _2.wbg.__wbg_call_3020136f7a2d6e44 = function() {
    return m(function(e2, t2, _3) {
      return e2.call(t2, _3);
    }, arguments);
  }, _2.wbg.__wbg_call_abb4ff46ce38be40 = function() {
    return m(function(e2, t2) {
      return e2.call(t2);
    }, arguments);
  }, _2.wbg.__wbg_call_c8baa5c5e72d274e = function() {
    return m(function(e2, t2, _3, r2) {
      return e2.call(t2, _3, r2);
    }, arguments);
  }, _2.wbg.__wbg_error_7534b8e9a36f1ab4 = function(t2, _3) {
    let r2, n2;
    try {
      r2 = t2, n2 = _3, console.error(p(t2, _3));
    } finally {
      e.__wbindgen_free(r2, n2, 1);
    }
  }, _2.wbg.__wbg_fieldmetadata_new = function(e2) {
    return ce.__wrap(e2);
  }, _2.wbg.__wbg_get_6b7bd52aca3f9671 = function(e2, t2) {
    return e2[t2 >>> 0];
  }, _2.wbg.__wbg_get_af9dab7e9603ea93 = function() {
    return m(function(e2, t2) {
      return Reflect.get(e2, t2);
    }, arguments);
  }, _2.wbg.__wbg_length_22ac23eaec9d8053 = function(e2) {
    return e2.length;
  }, _2.wbg.__wbg_new_6421f6084cc5bc5a = function(e2) {
    return new Uint8Array(e2);
  }, _2.wbg.__wbg_new_7041ab116402aa97 = function(e2) {
    return new Uint32Array(e2);
  }, _2.wbg.__wbg_new_8a6f238a6ece86ea = function() {
    return new Error();
  }, _2.wbg.__wbg_new_df1173567d5ff028 = function(e2, t2) {
    return new Error(p(e2, t2));
  }, _2.wbg.__wbg_new_ff12d2b041fb48f1 = function(e2, t2) {
    try {
      var _3 = { a: e2, b: t2 }, r2 = (e3, t3) => {
        const r3 = _3.a;
        _3.a = 0;
        try {
          return L(r3, _3.b, e3, t3);
        } finally {
          _3.a = r3;
        }
      };
      return new Promise(r2);
    } finally {
      _3.a = _3.b = 0;
    }
  }, _2.wbg.__wbg_new_from_slice_4d703bec0a9a4603 = function(e2, t2) {
    return new Int16Array(i(e2, t2));
  }, _2.wbg.__wbg_new_from_slice_9a48ef80d2a51f94 = function(e2, t2) {
    return new Float64Array(n(e2, t2));
  }, _2.wbg.__wbg_new_no_args_cb138f77cf6151ee = function(e2, t2) {
    return new Function(p(e2, t2));
  }, _2.wbg.__wbg_new_with_length_12c6de4fac33117a = function(e2) {
    return new Array(e2 >>> 0);
  }, _2.wbg.__wbg_pageencodingdescriptor_new = function(e2) {
    return we.__wrap(e2);
  }, _2.wbg.__wbg_parquetchunk_new = function(e2) {
    return pe.__wrap(e2);
  }, _2.wbg.__wbg_parquetfile_new = function(e2) {
    return de.__wrap(e2);
  }, _2.wbg.__wbg_parquetpatchchunk_new = function(e2) {
    return fe.__wrap(e2);
  }, _2.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(e2, t2, _3) {
    Uint8Array.prototype.set.call(a(e2, t2), _3);
  }, _2.wbg.__wbg_querystream_new = function(e2) {
    return me.__wrap(e2);
  }, _2.wbg.__wbg_queueMicrotask_9b549dfce8865860 = function(e2) {
    return e2.queueMicrotask;
  }, _2.wbg.__wbg_queueMicrotask_fca69f5bfad613a5 = function(e2) {
    queueMicrotask(e2);
  }, _2.wbg.__wbg_resolve_fd5bfbaa4ce36e1e = function(e2) {
    return Promise.resolve(e2);
  }, _2.wbg.__wbg_rowgroup_new = function(e2) {
    return Fe.__wrap(e2);
  }, _2.wbg.__wbg_set_7df433eea03a5c14 = function(e2, t2, _3) {
    e2[t2 >>> 0] = _3;
  }, _2.wbg.__wbg_set_name_df69b75cb0b4de8a = function(e2, t2, _3) {
    e2.name = p(t2, _3);
  }, _2.wbg.__wbg_stack_0ed75d68575b0f3c = function(t2, _3) {
    const r2 = R(_3.stack, e.__wbindgen_malloc, e.__wbindgen_realloc), n2 = j;
    g().setInt32(t2 + 4, n2, true), g().setInt32(t2 + 0, r2, true);
  }, _2.wbg.__wbg_static_accessor_GLOBAL_769e6b65d6557335 = function() {
    const e2 = "undefined" == typeof global ? null : global;
    return z(e2) ? 0 : t(e2);
  }, _2.wbg.__wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1 = function() {
    const e2 = "undefined" == typeof globalThis ? null : globalThis;
    return z(e2) ? 0 : t(e2);
  }, _2.wbg.__wbg_static_accessor_SELF_08f5a74c69739274 = function() {
    const e2 = "undefined" == typeof self ? null : self;
    return z(e2) ? 0 : t(e2);
  }, _2.wbg.__wbg_static_accessor_WINDOW_a8924b26aa92d024 = function() {
    const e2 = "undefined" == typeof window ? null : window;
    return z(e2) ? 0 : t(e2);
  }, _2.wbg.__wbg_then_429f7caf1026411d = function(e2, t2, _3) {
    return e2.then(t2, _3);
  }, _2.wbg.__wbg_then_4f95312d68691235 = function(e2, t2) {
    return e2.then(t2);
  }, _2.wbg.__wbg_valueOf_1024b255fe545c31 = function(e2) {
    return e2.valueOf();
  }, _2.wbg.__wbg_valueOf_17c63ed1b225597a = function(e2) {
    return e2.valueOf();
  }, _2.wbg.__wbindgen_cast_1e9af41a93765cab = function(t2, _3) {
    return F(t2, _3, e.wasm_bindgen__closure__destroy__h67ae5870cc8ab750, I);
  }, _2.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(e2, t2) {
    return p(e2, t2);
  }, _2.wbg.__wbindgen_cast_4af8e60a922bcf35 = function(e2, t2) {
    return n(e2, t2);
  }, _2.wbg.__wbindgen_cast_77bc3e92745e9a35 = function(t2, _3) {
    var r2 = a(t2, _3).slice();
    e.__wbindgen_free(t2, 1 * _3, 1);
    return r2;
  }, _2.wbg.__wbindgen_cast_7c316abdc43840a3 = function(e2, t2) {
    return o(e2, t2);
  }, _2.wbg.__wbindgen_cast_9ae0607507abb057 = function(e2) {
    return e2;
  }, _2.wbg.__wbindgen_cast_cb9088102bce6b30 = function(e2, t2) {
    return a(e2, t2);
  }, _2.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(e2) {
    return e2;
  }, _2.wbg.__wbindgen_cast_e47ceb6027f5c92c = function(e2, t2) {
    return i(e2, t2);
  }, _2.wbg.__wbindgen_init_externref_table = function() {
    const t2 = e.__wbindgen_externrefs, _3 = t2.grow(4);
    t2.set(0, void 0), t2.set(_3 + 0, void 0), t2.set(_3 + 1, null), t2.set(_3 + 2, true), t2.set(_3 + 3, false);
  }, _2;
}
function ke(t2, _2) {
  return e = t2.exports, Te.__wbindgen_wasm_module = _2, c = null, u = null, l = null, d = null, y = null, e.__wbindgen_start(), e;
}
function Oe(t2) {
  if (void 0 !== e) return e;
  void 0 !== t2 && (Object.getPrototypeOf(t2) === Object.prototype ? { module: t2 } = t2 : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const _2 = Re();
  t2 instanceof WebAssembly.Module || (t2 = new WebAssembly.Module(t2));
  return ke(new WebAssembly.Instance(t2, _2), t2);
}
async function Te(t2) {
  if (void 0 !== e) return e;
  void 0 !== t2 && (Object.getPrototypeOf(t2) === Object.prototype ? { module_or_path: t2 } = t2 : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
  const _2 = Re();
  ("string" == typeof t2 || "function" == typeof Request && t2 instanceof Request || "function" == typeof URL && t2 instanceof URL) && (t2 = fetch(t2));
  const { instance: r2, module: n2 } = await Se(await t2, _2);
  return ke(r2, n2);
}

export {
  re,
  ne,
  ie,
  se,
  oe,
  ae,
  ce,
  ge,
  ue,
  be,
  le,
  we,
  pe,
  de,
  fe,
  ye,
  he,
  me,
  ze,
  Fe,
  qe,
  xe,
  Oe,
  Te
};
//# sourceMappingURL=chunk-JQRGIYIY.js.map
