import {
  c
} from "./chunk-M756WYLA.js";
import {
  e as e3,
  u
} from "./chunk-UDRKO2UK.js";
import {
  DateTime
} from "./chunk-HTVDNBEG.js";
import {
  e3 as e2
} from "./chunk-5OGMOTJP.js";
import {
  f
} from "./chunk-PQFEWUZC.js";
import {
  e,
  r3 as r,
  t
} from "./chunk-TX75HZKJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/support/loadArcade.js
var a;
function e4() {
  return a || (a = (async () => {
    const [a3, e7, r3] = await Promise.all([import("./arcadeUtils-DLZAD4X7.js"), import("./batchExec-N2WFXPZD.js"), import("./aiServices-VQQT2SGH.js")]);
    return { arcade: a3.arcade, arcadeUtils: a3, batchExec: e7, aiServices: r3, Dictionary: a3.Dictionary, Feature: a3.arcadeFeature, Voxel: a3.Voxel, Pixel: a3.Pixel };
  })()), a;
}

// node_modules/@arcgis/core/support/dateUtils.js
var t2 = "HH:mm";
var l = "HH:mm:ss";
var m = "HH:mm:ss.SSS";
var i = [m, l, t2, "TT"];
var s = "yyyy-MM-dd";
function e5(r3) {
  if (!r3 || !e3(r3)) return null;
  const t4 = DateTime.fromFormat(r3, s);
  return t4.isValid ? t4 : null;
}
function H(t4) {
  return t4 && e3(t4) ? f(i, (r3) => {
    const n = DateTime.fromFormat(t4, r3);
    return n.isValid ? n : null;
  }) ?? null : null;
}
function c2(r3) {
  if (!r3 || !e3(r3)) return null;
  const t4 = DateTime.fromISO(r3);
  return t4.isValid ? t4 : null;
}

// node_modules/@arcgis/core/layers/support/domainUtils.js
var r2 = /* @__PURE__ */ new Set(["integer", "small-integer", "long", "big-integer", "esriFieldTypeInteger", "esriFieldTypeSmallInteger", "esriFieldTypeLong", "esriFieldTypeBigInteger"]);
function l2(e7) {
  return null != e7 && r2.has(e7.type);
}
function u2(e7) {
  return null != e7 && ("date-only" === e7.type || "esriFieldTypeDateOnly" === e7.type);
}
function a2(e7) {
  return null != e7 && ("timestamp-offset" === e7.type || "esriFieldTypeTimestampOffset" === e7.type);
}
function o(e7) {
  return null != e7 && ("time-only" === e7.type || "esriFieldTypeTimeOnly" === e7.type);
}
var s2 = /* @__PURE__ */ new Set([...["single", "double"], ...["esriFieldTypeSingle", "esriFieldTypeDouble"]]);
var m2 = e2(r2, s2);
function y(e7, n) {
  const i2 = n ?? e7?.domain;
  if (!i2 || "range" !== i2.type) return;
  const t4 = "range" in i2 ? i2.range[0] : i2.minValue, r3 = "range" in i2 ? i2.range[1] : i2.maxValue, s3 = l2(e7);
  return u2(e7) || o(e7) || a2(e7) ? __spreadProps(__spreadValues({}, g(e7, r3, t4)), { isInteger: s3 }) : { min: null != t4 && "number" == typeof t4 ? t4 : null, max: null != r3 && "number" == typeof r3 ? r3 : null, rawMin: t4, rawMax: r3, isInteger: s3 };
}
function g(e7, r3, l3) {
  return u2(e7) ? { min: e5(l3)?.toMillis(), max: e5(r3)?.toMillis(), rawMin: l3, rawMax: r3 } : o(e7) ? { min: H(l3)?.toMillis(), max: H(r3)?.toMillis(), rawMin: l3, rawMax: r3 } : a2(e7) ? { min: c2(l3)?.toMillis(), max: c2(r3)?.toMillis(), rawMin: l3, rawMax: r3 } : { max: null, min: null };
}

// node_modules/@arcgis/core/support/arcadeExpressionUtils.js
function t3(t4) {
  if (!t4) return;
  const e7 = t4.match(o2);
  return e7?.groups ? e7.groups.doubleQuoted ?? e7.groups.singleQuoted ?? e7.groups.dotNotation : void 0;
}
var o2 = /^(\$feature\[(?:"(?<doubleQuoted>[^"]+)"|'(?<singleQuoted>[^']+)')\]|\$feature\.(?<dotNotation>[a-z_][a-z0-9_]*))$/i;
function e6(t4) {
  return t4.match(u3)?.[1]?.replaceAll("\\'", "'") ?? null;
}
var u3 = /^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/;

// node_modules/@arcgis/core/layers/support/fieldUtils.js
var f2 = /^([0-9_])/;
var c3 = /[^a-z0-9_\u0080-\uffff]+/gi;
function d(e7) {
  if (null == e7) return null;
  return e7.trim().replaceAll(c3, "_").replace(f2, "F$1") || null;
}
var p = ["field", "field2", "field3", "normalizationField", "rotationInfo.field", "proportionalSymbolInfo.field", "proportionalSymbolInfo.normalizationField", "colorInfo.field", "colorInfo.normalizationField"];
var m3 = ["field", "normalizationField"];
function y2(e7, n) {
  if (null != e7 && null != n) {
    for (const i2 of Array.isArray(e7) ? e7 : [e7]) if (g2(p, i2, n), "visualVariables" in i2 && i2.visualVariables) for (const e8 of i2.visualVariables) g2(m3, e8, n);
  }
}
function g2(e7, t4, r3) {
  if (e7) for (const l3 of e7) {
    const e8 = t(l3, t4), o3 = e8 && "function" != typeof e8 && r3.get(e8);
    o3 && e(l3, o3.name, t4);
  }
}
function F(e7, n) {
  if (null != e7 && n?.fields?.length) if ("startField" in e7) {
    const i2 = n.get(e7.startField), t4 = n.get(e7.endField);
    e7.startField = i2?.name ?? null, e7.endField = t4?.name ?? null;
  } else {
    const i2 = n.get(e7.startTimeField), t4 = n.get(e7.endTimeField);
    e7.startTimeField = i2?.name ?? null, e7.endTimeField = t4?.name ?? null;
  }
}
var b = /* @__PURE__ */ new Set();
function I(e7, n) {
  return e7 && n ? (b.clear(), w(b, e7, n), Array.from(b).sort()) : [];
}
function w(e7, n, i2) {
  if (i2) if (n?.fields?.length) if (i2.includes("*")) for (const { name: t4 } of n.fields) e7.add(t4);
  else for (const t4 of i2) x(e7, n, t4);
  else {
    if (i2.includes("*")) return e7.clear(), void e7.add("*");
    for (const n2 of i2) null != n2 && e7.add(n2);
  }
}
function x(e7, n, i2) {
  if ("string" == typeof i2) if (n) {
    const t4 = n.get(i2);
    t4 && e7.add(t4.name);
  } else e7.add(i2);
}
function T(e7, n) {
  return null == n || null == e7 ? [] : n.includes("*") ? (e7.fields ?? []).map((e8) => e8.name) : n;
}
function h(e7, n, i2 = 1) {
  if (!n || !e7) return [];
  if (n.includes("*")) return ["*"];
  const t4 = I(e7, n);
  return t4.length / e7.fields.length >= i2 ? ["*"] : t4;
}
async function v(e7, n, i2, t4) {
  if (!t4) return;
  const r3 = t3(t4);
  if (r3) x(e7, n, r3);
  else {
    const { arcadeUtils: r4 } = await e4(), l3 = r4.extractFieldNames(t4, i2?.partitions ?? n?.fields?.map((e8) => e8.name));
    for (const t5 of l3) x(e7, i2?.index ?? n, t5);
  }
}
async function S(n, i2, t4) {
  if (t4 && "1=1" !== t4) {
    const l3 = await c(t4, i2);
    if (!l3.isStandardized) throw new r("fieldUtils:collectFilterFields", "Where clause is not standardized", { where: t4 });
    w(n, i2, l3.fieldNames);
  }
}
function E({ displayField: e7, fields: n }) {
  return e7 || (n?.length ? A(n) : null);
}
function A(e7) {
  return _(e7, "name-or-title") || _(e7, "unique-identifier") || _(e7, "type-or-category") || $(e7);
}
function $(e7) {
  for (const n of e7) {
    if (!n?.name) continue;
    const e8 = n.name.toLowerCase();
    if (e8.includes("name") || e8.includes("title")) return n.name;
  }
  return null;
}
function _(e7, n) {
  for (const i2 of e7) if (i2?.valueType && i2.valueType === n) return i2.name;
  return null;
}
async function L(e7, n) {
  if (!n) return;
  const i2 = n.elevationInfo?.featureExpressionInfo;
  return i2 ? i2.collectRequiredFields(e7, n.fieldsIndex) : void 0;
}
function M(e7, n, i2) {
  i2.onStatisticExpression ? v(e7, n, null, i2.onStatisticExpression.expression) : e7.add(i2.onStatisticField);
}
async function j(e7, n, i2) {
  if (!n || !i2 || !("fields" in i2)) return;
  const t4 = [], r3 = i2.popupTemplate;
  t4.push(O(e7, n, r3)), i2.fields && t4.push(...i2.fields.map(async (i3) => M(e7, n.fieldsIndex, i3))), await Promise.all(t4);
}
async function D(e7, n) {
  const { fieldsIndex: i2, trackInfo: t4 } = n;
  if (!n || !t4 || !i2) return;
  const r3 = [t4.latestObservations.renderer?.collectRequiredFields(e7, i2), t4.previousObservations.renderer?.collectRequiredFields(e7, i2), t4.trackLines.renderer?.collectRequiredFields(e7, i2)];
  t4.popupTemplate && r3.push(O(e7, n, t4.popupTemplate));
  for (const l3 of [t4.latestObservations.labelingInfo, t4.previousObservations.labelingInfo, t4.trackLines.labelingInfo]) if (l3) for (const n2 of l3) r3.push(ee(e7, i2, n2));
  await Promise.all(r3);
}
async function O(e7, n, i2) {
  const t4 = [];
  i2?.expressionInfos && t4.push(...i2.expressionInfos.map((i3) => v(e7, n.fieldsIndex, null, i3.expression)));
  const r3 = i2?.content;
  if (Array.isArray(r3)) for (const l3 of r3) "expression" === l3.type && l3.expressionInfo && t4.push(v(e7, n.fieldsIndex, null, l3.expressionInfo.expression));
  await Promise.all(t4);
}
async function C(e7, n, i2) {
  n && (n.timeInfo && i2?.timeExtent && w(e7, n.fieldsIndex, [n.timeInfo.startField, n.timeInfo.endField]), n.floorInfo && w(e7, n.fieldsIndex, [n.floorInfo.floorField]), null != i2?.where && await S(e7, n.fieldsIndex, i2.where));
}
async function R(e7, n, i2) {
  n && i2 && await Promise.all(i2.map((i3) => V(e7, n, i3)));
}
async function V(e7, n, i2) {
  n && i2 && (i2.valueExpression ? await v(e7, n.fieldsIndex, null, i2.valueExpression) : i2.field && x(e7, n.fieldsIndex, i2.field));
}
function U(e7) {
  return e7 ? I(e7.fieldsIndex, J(e7)) : [];
}
function q(e7) {
  if (!e7) return [];
  const n = e7.geometryFieldsInfo;
  return n ? I(e7.fieldsIndex, [n.shapeAreaField, n.shapeLengthField]) : [];
}
async function z(e7, n, i2) {
  if (!n || !i2) return;
  const t4 = n.fieldsIndex;
  await Promise.all(i2.filters.map((n2) => S(e7, t4, n2.where)));
}
var X = /* @__PURE__ */ new Set(["oid", "global-id", "guid"]);
var P = /* @__PURE__ */ new Set(["oid", "global-id"]);
var B = [/^fnode_$/i, /^tnode_$/i, /^lpoly_$/i, /^rpoly_$/i, /^poly_$/i, /^shape$/i, /^shape_$/i, /^subclass$/i, /^subclass_$/i, /^rings_ok$/i, /^rings_nok$/i, /objectid/i, /^perimeter_/i, /_perimeter$/i, /_i$/i];
function G(e7) {
  const n = /* @__PURE__ */ new Set();
  W(e7).forEach((e8) => n.add(e8)), q(e7).forEach((e8) => n.add(e8.toLowerCase()));
  const i2 = e7 && "infoFor3D" in e7 ? e7.infoFor3D : void 0;
  return i2 && (Object.values(i2.assetMapFieldRoles).forEach((e8) => n.add(e8.toLowerCase())), Object.values(i2.transformFieldRoles).forEach((e8) => n.add(e8.toLowerCase()))), Array.from(n);
}
function J(e7) {
  if (!e7) return [];
  const n = "editFieldsInfo" in e7 && e7.editFieldsInfo;
  if (!n) return [];
  const { creationDateField: i2, creatorField: t4, editDateField: r3, editorField: l3 } = n;
  return [i2, t4, r3, l3].filter(Boolean);
}
function W(e7) {
  return J(e7).map((e8) => e8.toLowerCase());
}
function H2(e7) {
  return !!e7.type;
}
function K(e7, n) {
  return !!e7.editable && H2(e7) && !X.has(e7.type) && !W(n).includes(e7.name?.toLowerCase() ?? "");
}
function Q(e7, n) {
  const i2 = e7.name?.toLowerCase() ?? "";
  return !(null != n?.objectIdField && i2 === n.objectIdField.toLowerCase() || null != n?.globalIdField && i2 === n.globalIdField.toLowerCase() || G(n).includes(i2) || P.has(e7.type) || B.some((e8) => e8.test(i2)));
}
async function Z(e7, n) {
  const { labelingInfo: i2, fieldsIndex: t4 } = n;
  i2?.length && await Promise.all(i2.map((n2) => ee(e7, t4, n2)));
}
async function ee(e7, n, i2) {
  if (!i2) return;
  const t4 = i2.getLabelExpression(), r3 = i2.where;
  if ("arcade" === t4.type) await v(e7, n, null, t4.expression);
  else {
    const i3 = t4.expression.match(/{[^}]*}/g);
    i3 && i3.forEach((i4) => {
      x(e7, n, i4.slice(1, -1));
    });
  }
  await S(e7, n, r3);
}
function ne(e7) {
  const n = e7.defaultValue;
  return void 0 !== n && se(e7, n) ? n : e7.nullable ? null : void 0;
}
function ie(e7) {
  const n = "string" == typeof e7 ? { type: e7 } : e7;
  return be(n) ? 255 : "esriFieldTypeDate" === n.type || "date" === n.type ? 8 : void 0;
}
function te(e7) {
  return "number" == typeof e7 && !isNaN(e7) && isFinite(e7);
}
function re(e7) {
  return null === e7 || te(e7);
}
function le(e7) {
  return null === e7 || Number.isInteger(e7);
}
function oe() {
  return true;
}
function se(e7, n) {
  let i2;
  switch (e7.type) {
    case "date":
    case "integer":
    case "long":
    case "small-integer":
    case "big-integer":
    case "esriFieldTypeDate":
    case "esriFieldTypeInteger":
    case "esriFieldTypeLong":
    case "esriFieldTypeSmallInteger":
    case "esriFieldTypeBigInteger":
      i2 = e7.nullable ? le : Number.isInteger;
      break;
    case "double":
    case "single":
    case "esriFieldTypeSingle":
    case "esriFieldTypeDouble":
      i2 = e7.nullable ? re : te;
      break;
    case "string":
    case "esriFieldTypeString":
      i2 = e7.nullable ? u : e3;
      break;
    default:
      i2 = oe;
  }
  return 1 === arguments.length ? i2 : i2(n);
}
var ae = ["integer", "small-integer", "big-integer", "long"];
var ue = ["single", "double"];
var fe = [...ae, ...ue];
var ce = ["esriFieldTypeInteger", "esriFieldTypeSmallInteger", "esriFieldTypeLong", "esriFieldTypeBigInteger"];
var de = ["esriFieldTypeSingle", "esriFieldTypeDouble"];
var pe = /* @__PURE__ */ new Set([...ae, ...ce]);
var me = /* @__PURE__ */ new Set([...ue, ...de]);
var ye = e2(pe, me);
function ge(e7) {
  return null != e7 && pe.has(e7.type);
}
function Fe(e7) {
  return null != e7 && ye.has(e7.type);
}
function be(e7) {
  return null != e7 && ("string" === e7.type || "esriFieldTypeString" === e7.type);
}
function Ie(e7) {
  return null != e7 && ("date" === e7.type || "esriFieldTypeDate" === e7.type);
}
function we(e7) {
  return null != e7 && ("date-only" === e7.type || "esriFieldTypeDateOnly" === e7.type);
}
function xe(e7) {
  return null != e7 && ("timestamp-offset" === e7.type || "esriFieldTypeTimestampOffset" === e7.type);
}
function Te(e7) {
  return null != e7 && ("time-only" === e7.type || "esriFieldTypeTimeOnly" === e7.type);
}
function he(e7) {
  return null != e7 && ("date" === e7.type || "date-only" === e7.type || "time-only" === e7.type || "timestamp-offset" === e7.type);
}
function ve(e7) {
  return null != e7 && ("oid" === e7.type || "esriFieldTypeOID" === e7.type);
}
function Se(e7) {
  return null != e7 && ("global-id" === e7.type || "esriFieldTypeGlobalID" === e7.type);
}
function Ee(e7, n) {
  return null === $e(e7, n);
}
function Ae(e7) {
  return null == e7 || "number" == typeof e7 && isNaN(e7) ? null : e7;
}
function $e(e7, n) {
  return null == e7 || e7.nullable && null === n ? null : se(e7, n) ? Fe(e7) && !_e(e7.type, Number(n)) ? "numeric-range-validation-error::out-of-range" : null : "type-validation-error::invalid-type";
}
function _e(e7, n) {
  const i2 = "string" == typeof e7 ? Le(e7) : e7;
  if (!i2) return false;
  const t4 = i2.min, r3 = i2.max;
  return i2.isInteger ? Number.isInteger(n) && n >= t4 && n <= r3 : n >= t4 && n <= r3;
}
function Le(e7) {
  switch (e7) {
    case "esriFieldTypeSmallInteger":
    case "small-integer":
      return je;
    case "esriFieldTypeInteger":
    case "esriFieldTypeLong":
    case "integer":
    case "long":
      return De;
    case "esriFieldTypeBigInteger":
    case "big-integer":
      return Oe;
    case "esriFieldTypeSingle":
    case "single":
      return Re;
    case "esriFieldTypeDouble":
    case "double":
      return Ve;
  }
}
var je = { min: -32768, max: 32767, isInteger: true, rawMin: -32768, rawMax: 32767 };
var De = { min: -2147483648, max: 2147483647, isInteger: true, rawMin: -2147483648, rawMax: 2147483647 };
var Oe = { min: -Number.MAX_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER, isInteger: true, rawMin: -Number.MAX_SAFE_INTEGER, rawMax: Number.MAX_SAFE_INTEGER };
var Ce = (2 - 2 ** -23) * 2 ** 127;
var Re = { min: -Ce, max: Ce, isInteger: false, rawMin: -Ce, rawMax: Ce };
var Ve = { min: -Number.MAX_VALUE, max: Number.MAX_VALUE, isInteger: false, rawMin: -Number.MAX_VALUE, rawMax: Number.MAX_VALUE };
function ke(e7, n, i2) {
  switch (e7) {
    case "domain-validation-error::invalid-coded-value":
      return `Value ${i2} is not in the coded domain - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;
    case "domain-validation-error::value-out-of-range":
      return `Value ${i2} is out of the range of valid values - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;
    case "type-validation-error::invalid-type":
      return `Value ${i2} is not a valid value for the field type - field: ${n.name}, type: ${n.type}, nullable: ${n.nullable}`;
    case "numeric-range-validation-error::out-of-range": {
      const { min: e8, max: t4 } = Le(n.type);
      return `Value ${i2} is out of range for the number type - field: ${n.name}, type: ${n.type}, value range is ${e8} to ${t4}`;
    }
  }
}
function Ue(e7, n) {
  return !qe(e7, n, null);
}
function qe(e7, n, i2) {
  if (!e7?.attributes || !n) {
    if (null != i2) for (const e8 of n ?? []) i2.add(e8);
    return true;
  }
  const t4 = new Set(Object.keys(e7.attributes));
  let r3 = false;
  for (const l3 of n) if (!t4.has(l3)) {
    if (r3 = true, null == i2) break;
    i2.add(l3);
  }
  return r3;
}
function Xe(e7) {
  return !!e7 && ["raster.itempixelvalue", "raster.servicepixelvalue"].some((n) => e7.toLowerCase().startsWith(n));
}
function Be(e7) {
  const n = e7?.match(/{[^}]+}/g);
  return n ? n.map((e8) => e8.slice(1, -1).split(":")[0].trim()) : [];
}
function Ge(e7, n) {
  const { statisticType: i2, onStatisticField: t4, onStatisticExpression: r3 } = e7, l3 = n.get(t4), o3 = Fe(l3), s3 = r3?.returnType;
  switch (i2) {
    case "avg":
    case "avg_angle":
      return l3 ? o3 || Ie(l3) ? "double" : null : s3 && "number" === s3 ? "double" : null;
    case "count":
      return "integer";
    case "min":
    case "max":
      return l3 ? o3 || he(l3) ? l3?.type ?? null : null : s3 && "number" === s3 ? "double" : null;
    case "sum":
      return l3 ? o3 ? l3?.type ?? null : null : s3 && "number" === s3 ? "double" : null;
    case "mode":
      return l3 ? l3?.type ?? null : s3 ? "number" === s3 ? "double" : "string" : null;
    default:
      return null;
  }
}
function Je(e7) {
  const { fieldName: n, fieldsMap: i2, normalizedFieldsMap: t4 } = e7;
  if (!n) return;
  let r3 = i2.get(n);
  return r3 || (r3 = i2.get(We(n)) ?? t4.get(He(n)), r3 && i2.set(n, r3), r3);
}
function We(e7) {
  return e7.trim().toLowerCase();
}
function He(e7) {
  return d(e7)?.toLowerCase() ?? "";
}

export {
  y,
  e6 as e,
  e4 as e2,
  d,
  y2,
  F,
  I,
  w,
  x,
  T,
  h,
  v,
  S,
  E,
  L,
  j,
  D,
  C,
  R,
  U,
  z,
  H2 as H,
  K,
  Q,
  Z,
  ne,
  ie,
  ge,
  Fe,
  be,
  Ie,
  we,
  xe,
  Te,
  ve,
  Se,
  Ee,
  Ae,
  $e,
  ke,
  Ue,
  Xe,
  Be,
  Ge,
  Je,
  We,
  He
};
//# sourceMappingURL=chunk-NLL3NYBQ.js.map
