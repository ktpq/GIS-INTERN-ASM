import {
  p
} from "./chunk-JWKKLHJV.js";
import {
  B,
  Ge,
  K,
  V,
  be,
  i2,
  ie,
  ne,
  pe,
  re,
  te
} from "./chunk-PNSNEWSP.js";
import {
  J
} from "./chunk-WLPGGM5I.js";
import {
  _ as _2
} from "./chunk-V44XD4F6.js";
import {
  i,
  m,
  r
} from "./chunk-G6RPDJXV.js";
import {
  n as n2
} from "./chunk-B22UQGUL.js";
import {
  u
} from "./chunk-UIKAL3FG.js";
import {
  e,
  f,
  n,
  t
} from "./chunk-UDRKO2UK.js";
import {
  _,
  s
} from "./chunk-X2SNEXCL.js";
import {
  a
} from "./chunk-XCGM4D6U.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/geometry/constructors.js
function a2(r2, e2, t2 = null) {
  const l = u2(r2, true);
  if (void 0 !== l.hasm && (l.hasM = l.hasm, delete l.hasm), void 0 !== l.hasz && (l.hasZ = l.hasz, delete l.hasz), void 0 !== l.spatialreference && (l.spatialReference = l.spatialreference, delete l.spatialreference), l.spatialReference || (l.spatialReference = e2), void 0 !== l.curverings) {
    const n3 = L(l.curverings, l.hasZ, l.hasM, k);
    if (null == n3) return null;
    l.curveRings = n3.arrays, delete l.curverings, delete l.rings, l.hasZ = n3.hasZ, l.hasM = n3.hasM;
  } else if (void 0 !== l.rings) {
    const n3 = L(l.rings, l.hasZ, l.hasM, F);
    if (null == n3) return null;
    l.rings = n3.arrays, l.hasZ = n3.hasZ, l.hasM = n3.hasM;
  }
  if (void 0 !== l.curvepaths) {
    const n3 = L(l.curvepaths, l.hasZ, l.hasM, k);
    if (null == n3) return null;
    l.curvePaths = n3.arrays, delete l.curvepaths, delete l.paths, l.hasZ = n3.hasZ, l.hasM = n3.hasM;
  } else if (void 0 !== l.paths) {
    const n3 = L(l.paths, l.hasZ, l.hasM, F);
    if (null == n3) return null;
    l.paths = n3.arrays, l.hasZ = n3.hasZ, l.hasM = n3.hasM;
  }
  if (void 0 !== l.points) {
    const n3 = E(l.points, l.hasZ, l.hasM);
    if (null == n3) return null;
    l.points = n3.array, l.hasZ = n3.hasZ, l.hasM = n3.hasM;
  }
  const a3 = u(l);
  if (null != t2 && a3?.type !== t2) throw new n2(null, "InvalidParameter", null);
  return a3;
}
function u2(n3, e2 = false) {
  const t2 = {};
  for (const l of n3.keys()) {
    const s2 = e2 ? l.toLowerCase() : l, a3 = n3.attributes[l];
    t2[s2] = K(a3) ? u2(a3) : a3;
  }
  return t2;
}
var i3 = /* @__PURE__ */ Symbol("NoValue");
function o(n3) {
  return Array.isArray(n3) && n3.length > 0 ? n3[0] : te(n3) && n3.length() > 0 ? n3.get(0) : i3;
}
function h(n3) {
  const r2 = o(o(n3));
  return r2 === i3 || Array.isArray(r2) || te(r2) || r2 instanceof _ ? n3 : [n3];
}
var f2 = 0;
function c(n3) {
  return a(n3, f2) ?? f2;
}
function y(n3) {
  return "number" == typeof n3 && !Number.isNaN(n3);
}
var m2 = null;
function p2(n3) {
  return a(n3, m2) ?? m2;
}
function d(n3) {
  return "number" == typeof n3 && !Number.isNaN(n3) || null === n3;
}
function g(n3) {
  return !(n3.length < 2) && ("number" == typeof n3[0] && !Number.isNaN(n3[0]) && ("number" == typeof n3[1] && !Number.isNaN(n3[1])));
}
function v(n3) {
  return g(n3) ? n3.length > 2 ? n3.slice(0, 2) : n3 : null;
}
function M(n3) {
  return g(n3) ? y(n3[2]) ? n3.length > 3 ? n3.slice(0, 3) : n3 : [n3[0], n3[1], c(n3[2])] : null;
}
function Z(n3) {
  return g(n3) ? n3.length >= 3 && !d(n3[2]) ? [n3[0], n3[1], p2(n3[2])] : n3.length > 3 ? n3.slice(0, 3) : n3 : null;
}
function A(n3) {
  return g(n3) ? y(n3[2]) && d(n3[3]) ? n3.length > 4 ? n3.slice(0, 4) : n3 : [n3[0], n3[1], c(n3[2]), p2(n3[3])] : null;
}
function N(n3) {
  return [n3.x, n3.y];
}
function b(n3) {
  return [n3.x, n3.y, n3.z ?? f2];
}
function w(n3) {
  return [n3.x, n3.y, n3.m ?? m2];
}
function P(n3) {
  return [n3.x, n3.y, n3.z ?? f2, n3.m ?? m2];
}
function I(r2, t2, l) {
  if (te(r2) && (r2 = r2.toArray()), !Array.isArray(r2) || 2 !== r2.length) throw new n2(null, "InvalidParameter", null);
  const s2 = F(r2[0], t2, l);
  if (null == s2) return null;
  const a3 = F(r2[1], N, v);
  return null == a3 ? null : { c: [s2, a3] };
}
function j(r2, t2, l) {
  if (te(r2) && (r2 = r2.toArray()), !Array.isArray(r2) || 4 !== r2.length && 7 !== r2.length) throw new n2(null, "InvalidParameter", null);
  const s2 = F(r2[0], t2, l);
  if (null == s2) return null;
  const a3 = F(r2[1], N, v);
  if (null == a3) return null;
  const u3 = r2[2];
  if (0 !== u3 && 1 !== u3) throw new n2(null, "InvalidParameter", null);
  const i4 = r2[3];
  if (0 !== i4 && 1 !== i4) throw new n2(null, "InvalidParameter", null);
  if (4 === r2.length) return { a: [s2, a3, u3, i4] };
  const o2 = r2[4];
  if ("number" != typeof o2) throw new n2(null, "InvalidParameter", null);
  if (Number.isNaN(o2)) return null;
  const h2 = r2[5];
  if ("number" != typeof h2) throw new n2(null, "InvalidParameter", null);
  if (Number.isNaN(h2)) return null;
  const f3 = r2[6];
  if ("number" != typeof f3) throw new n2(null, "InvalidParameter", null);
  return Number.isNaN(f3) ? null : { a: [s2, a3, u3, i4, o2, h2, f3] };
}
function x(r2, t2, l) {
  if (te(r2) && (r2 = r2.toArray()), !Array.isArray(r2) || 3 !== r2.length) throw new n2(null, "InvalidParameter", null);
  const s2 = F(r2[0], t2, l);
  if (null == s2) return null;
  const a3 = F(r2[1], N, v);
  if (null == a3) return null;
  const u3 = F(r2[2], N, v);
  return null == u3 ? null : { b: [s2, a3, u3] };
}
function z(n3, r2) {
  return n3 ? r2 ? A : M : r2 ? Z : v;
}
function R(n3, r2) {
  return n3 ? r2 ? P : b : r2 ? w : N;
}
function F(n3, r2, t2) {
  return Array.isArray(n3) ? t2(n3) : n3 instanceof _ ? r2(n3) : te(n3) ? t2(n3.toArray()) : null;
}
function k(n3, t2, s2) {
  return Array.isArray(n3) ? s2(n3) : K(n3) ? n3.hasField("c") ? I(n3.field("c"), t2, s2) : n3.hasField("a") ? j(n3.field("a"), t2, s2) : n3.hasField("b") ? x(n3.field("b"), t2, s2) : null : n3 instanceof _ ? t2(n3) : te(n3) ? s2(n3.toArray()) : null;
}
function S(n3, r2, t2, l) {
  const s2 = [];
  if (Array.isArray(n3)) for (const e2 of n3) {
    const n4 = r2(e2, t2, l);
    null != n4 && s2.push(n4);
  }
  else if (te(n3)) for (let e2 = 0; e2 < n3.length(); e2++) {
    const a3 = r2(n3.get(e2), t2, l);
    null != a3 && s2.push(a3);
  }
  return s2;
}
function U(n3, r2, t2) {
  return Array.isArray(n3) ? n3.length >= r2 : te(n3) ? n3.length() >= r2 : n3 instanceof _ && n3[t2];
}
function C(n3, r2, e2) {
  return void 0 === n3 && void 0 === r2 ? { hasZ: U(e2, 3, "hasZ"), hasM: U(e2, 4, "hasM") } : void 0 === n3 ? true === r2 ? { hasZ: U(e2, 4, "hasZ"), hasM: true } : { hasZ: U(e2, 3, "hasZ"), hasM: false } : void 0 === r2 ? true === n3 ? { hasZ: true, hasM: U(e2, 4, "hasM") } : { hasZ: false, hasM: U(e2, 3, "hasM") } : { hasZ: true === n3, hasM: true === r2 };
}
function E(n3, r2, e2) {
  const t2 = o(n3);
  if (t2 === i3) return null;
  const { hasZ: l, hasM: s2 } = C(r2, e2, t2);
  return { array: S(n3, F, R(l, s2), z(l, s2)), hasZ: l, hasM: s2 };
}
function L(n3, r2, t2, l) {
  const s2 = o(o(n3 = h(n3)));
  if (s2 === i3) return null;
  const { hasZ: a3, hasM: u3 } = C(r2, t2, s2), f3 = R(a3, u3), c2 = z(a3, u3), y2 = [];
  if (Array.isArray(n3)) for (let e2 = 0; e2 < n3.length; e2++) y2.push(S(n3[e2], l, f3, c2));
  else if (te(n3)) for (let e2 = 0; e2 < n3.length(); e2++) y2.push(S(n3.get(e2), l, f3, c2));
  return { arrays: y2, hasZ: a3, hasM: u3 };
}

// node_modules/@arcgis/core/arcade/Feature.js
function D(e2) {
  switch (e2.type) {
    case "small-integer":
    case "esriFieldTypeSmallInteger":
    case "integer":
    case "esriFieldTypeInteger":
    case "single":
    case "esriFieldTypeSingle":
    case "double":
    case "esriFieldTypeDouble":
    case "big-integer":
    case "esriFieldTypeBigInteger":
    case "long":
    case "esriFieldTypeLong":
    case "oid":
    case "esriFieldTypeOID":
      return { name: e2.name, type: "number" };
    case "global-id":
    case "esriFieldTypeGlobalID":
    case "guid":
    case "esriFieldTypeGUID":
    case "string":
    case "esriFieldTypeString":
      return { name: e2.name, type: "text" };
    case "date":
    case "esriFieldTypeDate":
    case "timestamp-offset":
    case "esriFieldTypeTimestampOffset":
      return { name: e2.name, type: "date" };
    case "date-only":
    case "esriFieldTypeDateOnly":
      return { name: e2.name, type: "dateOnly" };
    case "time-only":
    case "esriFieldTypeTimeOnly":
      return { name: e2.name, type: "time" };
    default:
      return null;
  }
}
function w2(t2, i4, s2) {
  if (null == t2) return null;
  switch (i4) {
    case "time-only":
      return ie(t2) ? t2 : r.fromReader(t2.toString());
    case "date-only":
      return re(t2) ? t2 : i.fromReader(t2.toString());
    case "timestamp-offset":
      return ne(t2) ? t2 : m.fromReaderAsTimeStampOffset(t2.toString());
    case "date":
      return ne(t2) ? t2 : f(t2) ? m.dateJSAndZoneToArcadeDate(t2, s2) : m.epochToArcadeDate(t2, s2);
    case "geometry":
      return null;
    default:
      return t2;
  }
}
var I2 = class _I {
  constructor() {
    this.arcadeDeclaredClass = "esri.arcade.Feature", this._optimizedGeomDefinition = null, this._geometry = null, this.attributes = null, this._layer = null, this._fieldTypesFixed = true, this.fieldsIndex = null, this.contextTimeZone = null, this.immutable = true, this._fieldsToFixDataTypes = null, this.immutable = true;
  }
  static createFromGraphic(e2, t2) {
    const i4 = new _I();
    return i4.contextTimeZone = t2 ?? null, i4._geometry = null != e2.geometry ? e2.geometry : null, void 0 === e2.attributes || null === e2.attributes ? i4.attributes = {} : i4.attributes = e2.attributes, e2._sourceLayer ? (i4._layer = e2._sourceLayer, i4._fieldTypesFixed = false) : e2._layer ? (i4._layer = e2._layer, i4._fieldTypesFixed = false) : e2.layer && "fields" in e2.layer ? (i4._layer = e2.layer, i4._fieldTypesFixed = false) : e2.sourceLayer && "fields" in e2.sourceLayer && (i4._layer = e2.sourceLayer, i4._fieldTypesFixed = false), i4._layer && !i4._fieldTypesFixed && (i4.fieldsIndex = this.hydrateFieldsIndex(i4._layer)), i4;
  }
  static createFromArcadeFeature(e2) {
    if (e2 instanceof _I) {
      const t3 = new _I();
      return t3._fieldTypesFixed = e2._fieldTypesFixed, t3.attributes = e2.attributes, t3._geometry = e2._geometry, t3._optimizedGeomDefinition = e2._optimizedGeomDefinition, e2._layer && (t3._layer = e2._layer), t3.fieldsIndex = e2.fieldsIndex, t3.contextTimeZone = e2.contextTimeZone, t3;
    }
    const t2 = {};
    for (const i4 of e2.keys()) t2[i4] = e2.field(i4);
    return _I.createFromGraphicLikeObject(e2.geometry(), t2, e2.fullSchema(), e2.contextTimeZone);
  }
  static createFromOptimisedFeature(e2, t2, i4) {
    const s2 = new _I();
    return s2._geometry = e2.geometry ? { geometry: e2.geometry } : null, s2._optimizedGeomDefinition = i4, s2.attributes = e2.attributes || {}, s2._layer = t2, s2._fieldTypesFixed = false, s2;
  }
  static createFromArcadeDictionary(e2, t2) {
    const s2 = new _I();
    return s2.attributes = e2.field("attributes"), null !== s2.attributes && s2.attributes instanceof p ? (s2.attributes = s2.attributes.attributes, null === s2.attributes && (s2.attributes = {})) : s2.attributes = {}, s2._geometry = e2.field("geometry"), null !== s2._geometry && (s2._geometry instanceof p ? s2._geometry = a2(s2._geometry, t2) : s2._geometry instanceof s || (s2._geometry = null)), s2;
  }
  static createFromGraphicLikeObject(e2, t2, i4 = null, s2) {
    const r2 = new _I();
    return r2.contextTimeZone = s2 ?? null, null === t2 && (t2 = {}), r2.attributes = t2, r2._geometry = null != e2 ? e2 : null, r2._layer = i4, r2._layer && (r2._fieldTypesFixed = false, r2.fieldsIndex = this.hydrateFieldsIndex(r2._layer)), r2;
  }
  static hydrateFieldsIndex(e2) {
    return null === e2 ? null : B(e2) ? e2.getFieldsIndex() : e2.fieldsIndex ? e2.fieldsIndex : _2.fromLayerJSON({ datesInUnknownTimezone: e2.datesInUnknownTimezone, fields: e2.fields, timeInfo: e2.timeInfo, editFieldsInfo: e2.editFieldsInfo, dateFieldsTimeReference: e2.dateFieldsTimeReference ?? { timeZone: "UTC", respectsDaylightSaving: false } });
  }
  repurposeFromGraphicLikeObject(e2, t2, i4 = null) {
    null === t2 && (t2 = {}), this.attributes = t2, this._geometry = e2 ?? null, this._layer = i4, this._layer ? this._fieldTypesFixed = false : this._fieldTypesFixed = true;
  }
  castToText(e2 = false) {
    false === this._fieldTypesFixed && this._fixFieldTypes();
    const t2 = pe(this.attributes, { useNumbersForDates: e2 });
    return '{"geometry":' + (null === this.geometry() ? "null" : be(this.geometry())) + ',"attributes":' + t2 + "}";
  }
  _fixFieldTypes() {
    if (this._fieldsToFixDataTypes && this._fieldsToFixDataTypes?.length > 0) return this._fixAllFields(this._fieldsToFixDataTypes), void (this._fieldTypesFixed = true);
    const e2 = [], t2 = this._layer.fields;
    for (let i4 = 0; i4 < (t2?.length ?? 0); i4++) {
      const s2 = t2[i4], { name: r2, type: n3 } = s2;
      switch (n3) {
        case "date":
        case "esriFieldTypeDate":
          e2.push({ field: r2, dataType: "date" });
          break;
        case "date-only":
        case "esriFieldTypeDateOnly":
          e2.push({ field: r2, dataType: "date-only" });
          break;
        case "time-only":
        case "esriFieldTypeTimeOnly":
          e2.push({ field: r2, dataType: "time-only" });
          break;
        case "timestamp-offset":
        case "esriFieldTypeTimestampOffset":
          e2.push({ field: r2, dataType: "timestamp-offset" });
          break;
        case "geometry":
        case "esriFieldTypeGeometry":
          e2.push({ field: r2, dataType: "geometry" });
      }
    }
    this._fieldsToFixDataTypes = e2, e2.length > 0 && this._fixAllFields(e2), this._fieldTypesFixed = true;
  }
  isUnknownDateTimeField(e2) {
    return "unknown" === this.fieldsIndex?.getTimeZone(e2);
  }
  _fixAllFields(e2) {
    this.attributes = __spreadValues({}, this.attributes);
    const t2 = this.contextTimeZone ?? "system";
    for (let i4 = 0; i4 < e2.length; i4++) {
      const s2 = e2[i4].field, r2 = e2[i4].dataType;
      let n3 = this.attributes[s2];
      if (void 0 === n3) {
        for (const e3 in this.attributes) if (e3.toLowerCase() === s2.toLowerCase()) {
          n3 = this.attributes[e3], this.attributes[e3] = w2(n3, r2, this.isUnknownDateTimeField(e3) ? "unknown" : t2);
          break;
        }
      } else null !== n3 && (this.attributes[s2] = w2(n3, r2, this.isUnknownDateTimeField(s2) ? "unknown" : t2));
    }
  }
  geometry() {
    return null === this._geometry || this._geometry instanceof s || (this._optimizedGeomDefinition ? (this._geometry = u(J(this._geometry, this._optimizedGeomDefinition.geometryType, this._optimizedGeomDefinition.hasZ, this._optimizedGeomDefinition.hasM)), this._geometry.spatialReference = this._optimizedGeomDefinition.spatialReference) : this._geometry = u(this._geometry)), this._geometry;
  }
  field(e2) {
    this._fieldTypesFixed || this._fixFieldTypes();
    const t2 = this.attributes[e2];
    if (void 0 !== t2) return t2;
    const i4 = e2.toLowerCase();
    for (const s2 in this.attributes) if (s2.toLowerCase() === i4) return this.attributes[s2];
    if (this._hasFieldDefinition(i4)) return null;
    throw new n2(null, "FieldNotFound", null, { key: e2 });
  }
  _hasFieldDefinition(e2) {
    if (null === this._layer) return false;
    for (let t2 = 0; t2 < this._layer.fields.length; t2++) {
      if (this._layer.fields[t2].name.toLowerCase() === e2) return true;
    }
    return false;
  }
  setField(t2, i4) {
    if (this.immutable) throw new n2(null, "Immutable", null);
    if (i4 instanceof Date && (i4 = this.isUnknownDateTimeField(t2) ? m.unknownDateJSToArcadeDate(i4) : m.dateJSToArcadeDate(i4)), false === V(i4)) throw new n2(null, "TypeNotAllowedInFeature", null);
    const r2 = t2.toLowerCase();
    if (void 0 === this.attributes[t2]) {
      for (const e2 in this.attributes) if (e2.toLowerCase() === r2) return void (this.attributes[e2] = i4);
      this.attributes[t2] = i4;
    } else this.attributes[t2] = i4;
  }
  hasField(e2) {
    const t2 = e2.toLowerCase();
    if (void 0 !== this.attributes[e2]) return true;
    for (const i4 in this.attributes) if (i4.toLowerCase() === t2) return true;
    return !!this._hasFieldDefinition(t2);
  }
  keys() {
    let e2 = [];
    const t2 = {};
    for (const i4 in this.attributes) e2.push(i4), t2[i4.toLowerCase()] = 1;
    if (null !== this._layer) for (let i4 = 0; i4 < this._layer.fields.length; i4++) {
      const s2 = this._layer.fields[i4];
      1 !== t2[s2.name.toLowerCase()] && e2.push(s2.name);
    }
    return e2 = e2.sort(), e2;
  }
  isEmpty() {
    for (const e2 in this.attributes) return false;
    return !(null != this._layer && this._layer.fields.length > 0) && null == this.geometry();
  }
  static parseAttributesFromDictionary(e2) {
    const t2 = {};
    for (const i4 in e2.attributes) {
      const r2 = e2.attributes[i4];
      if (!V(r2)) throw new n2(null, "InvalidParameter", null);
      t2[i4] = r2;
    }
    return t2;
  }
  static fromJson(e2, t2) {
    let i4 = null;
    null !== e2.geometry && void 0 !== e2.geometry && (i4 = u(e2.geometry));
    const r2 = {};
    if (null !== e2.attributes && void 0 !== e2.attributes) for (const n3 in e2.attributes) {
      const t3 = e2.attributes[n3];
      if (null === t3) r2[n3] = t3;
      else {
        if (!(e(t3) || n(t3) || t(t3) || ne(t3) || ie(t3) || re(t3))) throw new n2(null, "InvalidParameter", null);
        r2[n3] = t3;
      }
    }
    return _I.createFromGraphicLikeObject(i4, r2, null, t2 ?? null);
  }
  fullSchema() {
    return this._layer;
  }
  gdbVersion() {
    if (null === this._layer) return "";
    const e2 = this._layer.gdbVersion;
    return void 0 === e2 ? "" : "" === e2 && this._layer.capabilities?.isVersioned ? "SDE.DEFAULT" : e2;
  }
  castAsJson(e2) {
    const t2 = { attributes: {}, geometry: true === e2?.keepGeometryType ? this.geometry() : this.geometry()?.toJSON() ?? null };
    for (const i4 in this.attributes) {
      const s2 = this.attributes[i4];
      void 0 !== s2 && (t2.attributes[i4] = Ge(s2, e2));
    }
    return t2;
  }
  async castAsJsonAsync(e2 = null, t2) {
    return this.castAsJson(t2);
  }
};
i2(I2);

export {
  a2 as a,
  D,
  w2 as w,
  I2 as I
};
//# sourceMappingURL=chunk-PZPVYO2I.js.map
