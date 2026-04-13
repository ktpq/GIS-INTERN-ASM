import {
  A,
  B
} from "./chunk-SCB6GXME.js";
import {
  C,
  q
} from "./chunk-HQ7TFQ7J.js";
import {
  c,
  l,
  s
} from "./chunk-VBPD3MAX.js";
import {
  m
} from "./chunk-MNLCSEA7.js";
import {
  Te,
  Ue,
  Xe,
  e2 as e
} from "./chunk-WDPGHXN4.js";
import {
  N,
  b
} from "./chunk-N7OQ4MFT.js";
import {
  d
} from "./chunk-473S3KQM.js";
import {
  n2 as n,
  r2 as r
} from "./chunk-6I475YAP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/Feature/support/featureUtils.js
var I = "esri.widgets.Feature.support.featureUtils";
var b2 = () => n.getLogger(I);
var h = /href=(""|'')/gi;
var F = /(\{([^{\r\n]+)\})/g;
var T = /'/g;
var w = /^\s*expression\//i;
var N2 = /(\n)/gi;
var C2 = /[\u00A0-\u9999<>&]/gim;
var j = /href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi;
var Z = /^(?:mailto:|tel:)/;
var v = "relationships/";
var L = N("short-date-short-time");
function q2(e2) {
  if (null != e2) return (e2.sourceLayer || e2.layer) ?? void 0;
}
async function x({ type: e2, value: t, event: n2 }) {
  try {
    return "function" == typeof t ? t(n2) : await t;
  } catch (r2) {
    return void b2().error("error", `An error occurred when calling the "${e2}" function`, { error: r2, graphic: n2.graphic, value: t });
  }
}
function U(e2 = "") {
  if (e2) return !Z.test(e2.trim().toLowerCase());
}
function A2(e2) {
  return !!e2 && w.test(e2);
}
function E(e2, t) {
  if (!t || !A2(t) || !e2) return;
  const n2 = t.replace(w, "").toLowerCase();
  return e2.find(({ name: e3 }) => e3.toLowerCase() === n2);
}
function M(e2) {
  const { fieldInfo: t, graphic: n2, layer: r2 } = e2;
  return k({ fieldInfo: t, graphic: n2 }) ? B(r2, { graphic: n2 }) : null;
}
function k({ fieldInfo: e2, graphic: t }) {
  return !(!e2?.fieldName || A2(e2.fieldName) || Fe(e2.fieldName) || t?.popupTemplate);
}
function R({ expressionInfos: e2, fieldInfo: t, graphic: n2, isContentFieldInfos: r2, layer: i }) {
  if (!t?.fieldName) return null;
  const o = E(e2, t.fieldName);
  if (o) return o.title || null;
  const a = M({ fieldInfo: t, graphic: n2, layer: i });
  if (a) {
    const e3 = a.getFieldAlias(t.fieldName);
    return r2 ? t.label || e3 || t.fieldName : e3 || t.fieldName;
  }
  return t.label || t.fieldName;
}
function $(e2) {
  const { configurableFieldsContainer: t, fieldInfo: n2, isContentFieldInfos: r2 } = e2;
  if (!n2?.fieldName) return null;
  const i = t.popupTemplate || t.fieldConfigurations ? t.getFieldConfiguration(n2.fieldName)?.fieldFormat : m(n2, t.getField(n2.fieldName));
  return r2 && n2.fieldFormat || i;
}
function D(e2, t) {
  const n2 = t.get(e2.toLowerCase());
  return `{${n2?.fieldName || e2}}`;
}
function z(e2) {
  return e2.replaceAll(h, "");
}
function O(e2, t) {
  const n2 = G(t, e2);
  return n2 ? n2.name : e2;
}
function S(e2, t) {
  return e2 && e2.map((e3) => O(e3, t));
}
function G(e2, t) {
  return e2 && "function" == typeof e2.getField && t ? e2.getField(t) ?? null : null;
}
function Q(e2) {
  return `${e2}`.trim();
}
function P({ attributes: e2, globalAttributes: t, layer: n2, text: r2, expressionAttributes: i, fieldInfoMap: o }) {
  return r2 ? _({ formattedAttributes: t, template: K(r2, __spreadValues(__spreadValues(__spreadValues({}, t), i), e2), n2), fieldInfoMap: o }) : "";
}
function _({ formattedAttributes: e2, template: n2, fieldInfoMap: r2 }) {
  return Q(z(r(r(n2, (e3) => D(e3, r2)), e2)));
}
function H(e2, t, n2 = false) {
  const r2 = t[e2];
  if ("string" == typeof r2) {
    const i = "%27", o = (n2 ? encodeURIComponent(r2) : r2).replaceAll(T, i);
    t[e2] = o;
  }
}
function W(e2, t = false) {
  const n2 = __spreadValues({}, e2);
  return Object.keys(n2).forEach((e3) => H(e3, n2, t)), n2;
}
function B2(e2, n2, r2) {
  const i = (n2 = Q(n2)) && !n2.startsWith("{");
  return r(e2, W(r2, i || false));
}
function J(e2, t) {
  return e2.replaceAll(F, (e3, n2, r2) => {
    const i = G(t, r2);
    return i ? `{${i.name}}` : n2;
  });
}
function K(e2, t, n2) {
  const r2 = J(e2, n2);
  return r2 ? r2.replaceAll(j, (e3, n3, r3) => B2(e3, n3 || r3, t)) : r2;
}
function V(e2, t) {
  const n2 = "number" === t?.fieldFormat?.type || t?.format && null == t.format.dateFormat && (null != t.format.places || null != t.format.digitSeparator);
  if ("string" == typeof e2 && n2) {
    const t2 = Number(e2);
    if (!isNaN(t2)) return t2;
  }
  return e2;
}
function X(e2) {
  return null != e2 && "object" == typeof e2 && "fieldsIndex" in e2 && "geometryType" in e2 && "getField" in e2 && "load" in e2 && "loaded" in e2 && "objectIdField" in e2 && "spatialReference" in e2 && "type" in e2 && ("feature" === e2.type || "scene" === e2.type || "subtype-group" === e2.type || "subtype-sublayer" === e2.type || "sublayer" === e2.type) && "when" in e2;
}
function Y(e2) {
  return null != e2 && "object" == typeof e2 && "createQuery" in e2 && "queryFeatureCount" in e2 && "queryObjectIds" in e2 && "queryRelatedFeatures" in e2 && "queryRelatedFeaturesCount" in e2 && "relationships" in e2;
}
function ee(e2) {
  return X(e2) && Y(e2);
}
function te(e2) {
  return !(!(e2 && "object" == typeof e2 && "createQuery" in e2 && "getField" in e2 && "queryFeatureCount" in e2 && "queryFeatures" in e2 && "queryObjectIds" in e2 && "capabilities" in e2 && "fields" in e2 && "fieldsIndex" in e2 && "type" in e2) || "feature" !== e2.type && "subtype-group" !== e2.type && "subtype-sublayer" !== e2.type && "sublayer" !== e2.type || !("when" in e2)) && ("subtype-sublayer" === e2.type && "parent" in e2 && e2.parent && "object" == typeof e2.parent ? "globalIdField" in e2.parent : "globalIdField" in e2);
}
function ne(e2) {
  return !!e2 && "object" == typeof e2 && "sourceLayer" in e2 && ee(e2.sourceLayer);
}
function re(e2, t) {
  const { fieldInfos: n2, fieldName: r2, graphic: l2, isContentFieldInfos: s2, layer: f, preventPlacesFormatting: d2, timeZone: c2 } = t, y = ae(n2, r2), m2 = M({ fieldInfo: y, graphic: l2, layer: f }), g = G(m2 || f, r2), I2 = m2 ? null : y?.format, b3 = m2 ? $({ configurableFieldsContainer: m2, fieldInfo: y, isContentFieldInfos: s2 }) : null, h2 = "number" === b3?.type;
  if (y && !Xe(r2)) {
    const t2 = g?.type, n3 = "date-time" === b3?.type, r3 = I2?.dateFormat;
    if ("date" === t2 || "date-only" === t2 || "time-only" === t2 || "timestamp-offset" === t2 || n3 || r3) return q(e2, { format: n3 ? void 0 : r3, fieldFormat: n3 ? b3 : void 0, fieldType: t2, timeZoneOptions: { layerTimeZone: f && "preferredTimeZone" in f ? f.preferredTimeZone : null, viewTimeZone: c2, datesInUnknownTimezone: !(!f || !("datesInUnknownTimezone" in f)) && !!f.datesInUnknownTimezone } });
  }
  if ("string" == typeof e2 && Xe(r2) && I2) return ie(e2, I2);
  if ("string" == typeof (e2 = V(e2, { format: h2 ? void 0 : I2, fieldFormat: h2 ? b3 : void 0 })) || null == e2 || null == I2 && null == b3) return pe(e2);
  const F2 = h2 ? s(b3) : I2 ? l(I2) : void 0;
  return c(e2, d2 ? __spreadProps(__spreadValues({}, F2), { minimumFractionDigits: 0, maximumFractionDigits: 20 }) : F2);
}
function ie(e2, t) {
  return e2 = e2.trim(), /\d{2}-\d{2}/.test(e2) ? e2 : e2.includes(",") ? oe(e2, ",", ", ", t) : e2.includes(";") ? oe(e2, ";", "; ", t) : e2.includes(" ") ? oe(e2, " ", " ", t) : c(Number(e2), l(t));
}
function oe(e2, t, n2, r2) {
  return e2.trim().split(t).map((e3) => c(Number(e3), l(r2))).join(n2);
}
function ae(e2, t) {
  if (e2?.length && t) return e2.find((e3) => e3.fieldName?.toLowerCase() === t.toLowerCase());
}
function le({ fieldName: e2, graphic: t, layer: n2 }) {
  if (Fe(e2)) return null;
  if (!n2 || "function" != typeof n2.getFeatureType) return null;
  const { typeIdField: r2 } = n2;
  if (!r2 || e2 !== r2) return null;
  const i = n2.getFeatureType(t);
  return i ? i.name : null;
}
function ue({ fieldName: e2, value: t, graphic: n2, layer: r2 }) {
  if (Fe(e2)) return null;
  if (!r2 || "function" != typeof r2.getFieldDomain) return null;
  const i = n2 && r2.getFieldDomain(e2, { feature: n2 });
  return i && "coded-value" === i.type ? i.getName(t) : null;
}
function se(e2, t, r2, i) {
  const { creatorField: o, creationDateField: a, editorField: l2, editDateField: u } = e2;
  if (!t) return;
  const s2 = d(i && "preferredTimeZone" in i ? i.preferredTimeZone : null, !(!i || !("datesInUnknownTimezone" in i)) && !!i.datesInUnknownTimezone, r2, L, "date"), f = __spreadValues(__spreadValues({}, L), s2), d2 = t[u];
  if ("number" == typeof d2) {
    const e3 = t[l2];
    return { type: "edit", date: b(d2, f), user: e3 };
  }
  const c2 = t[a];
  if ("number" == typeof c2) {
    const e3 = t[o];
    return { type: "create", date: b(c2, f), user: e3 };
  }
  return null;
}
function fe(e2, t) {
  const n2 = /* @__PURE__ */ new Map();
  if (!e2) return n2;
  for (const r2 of e2) {
    if (!r2.fieldName) continue;
    const e3 = O(r2.fieldName, t);
    r2.fieldName = e3, n2.set(e3.toLowerCase(), r2);
  }
  return n2;
}
function de(e2) {
  const t = [];
  if (!e2) return t;
  const { fieldInfos: n2, content: r2 } = e2;
  return n2 && t.push(...n2), r2 && Array.isArray(r2) ? (r2.forEach((e3) => {
    if ("fields" === e3.type) {
      const n3 = e3?.fieldInfos;
      n3 && t.push(...n3);
    }
  }), t) : t;
}
function ce(e2) {
  return e2.replaceAll(C2, (e3) => `&#${e3.charCodeAt(0)};`);
}
function pe(e2) {
  return "string" == typeof e2 ? e2.replaceAll(N2, '<br class="esri-text-new-line" />') : e2;
}
function ye(e2) {
  const { fieldInfoMap: t, fieldInfos: n2, fieldName: r2, graphic: i, isContentFieldInfos: o, layer: a, timeZone: l2, value: u } = e2;
  if (null == u) return "";
  const s2 = ue({ fieldName: r2, value: u, graphic: i, layer: a });
  if (s2) return s2;
  const d2 = le({ fieldName: r2, graphic: i, layer: a });
  if (d2) return d2;
  if (t.get(r2.toLowerCase())) return re(u, { fieldInfos: n2 || Array.from(t.values()), fieldName: r2, graphic: i, isContentFieldInfos: o, layer: a, timeZone: l2 });
  const c2 = a?.fieldsIndex?.get(r2);
  return c2 && (C(c2) || Te(c2)) ? q(u, { fieldType: c2.type, timeZoneOptions: { layerTimeZone: a && "preferredTimeZone" in a ? a.preferredTimeZone : null, viewTimeZone: l2, datesInUnknownTimezone: !(!a || !("datesInUnknownTimezone" in a)) && !!a.datesInUnknownTimezone } }) : pe(u);
}
function me({ attributes: e2, fieldInfoMap: t, fieldInfos: n2, graphic: r2, isContentFieldInfos: i, layer: o, relatedInfos: a, timeZone: l2 }) {
  const u = {};
  return a?.forEach((e3) => Ne({ attributes: u, relatedInfo: e3, fieldInfoMap: t, fieldInfos: n2, layer: o, timeZone: l2 })), e2 && Object.keys(e2).forEach((a2) => {
    const s2 = e2[a2];
    u[a2] = ye({ fieldInfoMap: t, fieldInfos: n2, fieldName: a2, graphic: r2, isContentFieldInfos: i, layer: o, timeZone: l2, value: s2 });
  }), u;
}
async function ge(e2, t) {
  const { layer: n2, graphic: r2, outFields: i, objectIds: o, returnGeometry: a, spatialReference: l2 } = e2, u = o[0];
  if ("number" != typeof u && "string" != typeof u) {
    const e3 = "Could not query required fields for the specified feature. The feature's ID is invalid.", t2 = { layer: n2, graphic: r2, objectId: u, requiredFields: i };
    return b2().warn(e3, t2), null;
  }
  if (!A(n2)?.operations?.supportsQuery) {
    const e3 = "The specified layer cannot be queried. The following fields will not be available.", t2 = { layer: n2, graphic: r2, requiredFields: i, returnGeometry: a };
    return b2().warn(e3, t2), null;
  }
  const s2 = n2.createQuery();
  s2.objectIds = o, s2.outFields = i?.length ? i : [n2.objectIdField], s2.returnGeometry = !!a, s2.returnZ = !!a, s2.returnM = !!a, s2.outSpatialReference = l2;
  return (await n2.queryFeatures(s2, t)).features[0];
}
async function Ie(e2) {
  if (!e2.expressionInfos?.length) return false;
  const t = await e(), { arcadeUtils: { hasGeometryFunctions: n2 } } = t;
  return n2(e2);
}
async function be(e2) {
  if (!e2.expressionInfos?.length) return false;
  const t = await e(), { arcadeUtils: { requiresTrack: n2 } } = t;
  return n2(e2);
}
async function he({ graphic: e2, popupTemplate: t, layer: n2, spatialReference: r2 }, i) {
  if (!n2 || !t) return;
  if ("function" == typeof n2.load && await n2.load(i), !e2.attributes) return;
  const o = n2.objectIdField, a = e2.attributes[o];
  if (null == a) return;
  const l2 = [a], u = new Set(await t.getRequiredFields(n2.fieldsIndex));
  null == n2.timeInfo?.trackIdField || u.has(n2.timeInfo.trackIdField) || await be(t) && u.add(n2.timeInfo.trackIdField);
  const f = Ue(e2, u), d2 = f ? [] : u.has(o) ? [...u] : [...u, o], c2 = t.returnGeometry || await Ie(t);
  if (f && !c2) return;
  const p = await ge({ layer: n2, graphic: e2, outFields: d2, objectIds: l2, returnGeometry: c2, spatialReference: r2 }, i);
  p && (p.geometry && (e2.geometry = p.geometry), p.attributes && (e2.attributes = __spreadValues(__spreadValues({}, e2.attributes), p.attributes)));
}
function Fe(e2 = "") {
  return !!e2 && e2.includes(v);
}
function Te2(e2) {
  return e2 ? `${v}${e2.layerId}/${e2.fieldName}` : "";
}
function we({ attributes: e2, graphic: t, relatedInfo: n2, fieldInfos: r2, fieldInfoMap: i, layer: o, timeZone: a }) {
  e2 && t && n2 && Object.keys(t.attributes).forEach((l2) => {
    const u = Te2({ layerId: n2.relation.id.toString(), fieldName: l2 }), s2 = t.attributes[l2];
    e2[u] = ye({ fieldName: u, fieldInfos: r2, fieldInfoMap: i, layer: o, value: s2, graphic: t, timeZone: a });
  });
}
function Ne({ attributes: e2, relatedInfo: t, fieldInfoMap: n2, fieldInfos: r2, layer: i, timeZone: o }) {
  e2 && t && (t.relatedFeatures?.forEach((a) => we({ attributes: e2, graphic: a, relatedInfo: t, fieldInfoMap: n2, fieldInfos: r2, layer: i, timeZone: o })), t.relatedStatsFeatures?.forEach((a) => we({ attributes: e2, graphic: a, relatedInfo: t, fieldInfoMap: n2, fieldInfos: r2, layer: i, timeZone: o })));
}
var Ce = (e2) => {
  if (!e2) return false;
  const t = e2.toUpperCase();
  return t.includes("CURRENT_TIMESTAMP") || t.includes("CURRENT_DATE") || t.includes("CURRENT_TIME");
};
var je = ({ layer: e2, method: t, query: n2, definitionExpression: r2 }) => {
  if (!e2.capabilities?.query?.supportsCacheHint || "attachments" === t) return;
  const i = null != n2.where ? n2.where : null, o = null != n2.geometry ? n2.geometry : null;
  Ce(r2) || Ce(i) || "extent" === o?.type || "tile" === n2.resultType || (n2.cacheHint = true);
};
var Ze = ({ query: e2, layer: t, method: n2 }) => {
  je({ layer: t, method: n2, query: e2, definitionExpression: `${t.definitionExpression} ${t.serviceDefinitionExpression ?? ""}` });
};
var ve = ({ queryPayload: e2, layer: t, method: n2 }) => {
  je({ layer: t, method: n2, query: e2, definitionExpression: `${t.definitionExpression} ${t.serviceDefinitionExpression ?? ""}` });
};
function Le(e2, t, n2) {
  return e2 && t && n2 ? "sublayer" === t.type ? Ue2({ layers: t.layer?.allSublayers, map: e2, relatedLayer: t, relationship: n2 }) || Ue2({ layers: t.layer?.subtables, map: e2, relatedLayer: t, relationship: n2 }) : Ue2({ layers: e2.allLayers, map: e2, relatedLayer: t, relationship: n2 }) || Ue2({ layers: e2.allTables, map: e2, relatedLayer: t, relationship: n2 }) : null;
}
function qe(e2, t) {
  return e2 && "utilityNetworks" in e2 && t ? e2.utilityNetworks?.find((e3) => e3.isUtilityLayer(t)) : null;
}
function xe(e2, t) {
  return e2?.allTables.find((e3) => "feature" === e3.type && e3.layerId === t.id && e3.url === t.layer?.url);
}
function Ue2({ map: e2, relationship: t, relationship: { relatedTableId: n2 }, relatedLayer: r2, layers: i }) {
  if (!i) return null;
  for (const o of i) {
    if ("map-image" === o.type) {
      const n3 = Ue2({ layers: o.sublayers, map: e2, relatedLayer: r2, relationship: t }) || Ue2({ layers: o.subtables, map: e2, relatedLayer: r2, relationship: t });
      if (n3) return n3;
      continue;
    }
    if (!ee(o)) continue;
    if ("sublayer" === r2.type) {
      if (o !== r2 && o.id === n2) return o.isTable ? xe(e2, o) : o;
      continue;
    }
    const i2 = "scene" === r2.type && r2.associatedLayer ? r2.associatedLayer.url : r2.url;
    if (!i2) return null;
    if ("sublayer" !== o.type) {
      if (o !== r2 && o.url === i2 && o.layerId === n2) return o;
    } else if (o !== r2 && o.layer?.url === i2 && o.id === n2) return o.isTable ? xe(e2, o) : o;
  }
  return null;
}

export {
  q2 as q,
  x,
  U,
  A2 as A,
  M,
  R,
  $,
  O,
  S,
  P,
  _,
  J,
  X,
  Y,
  ee,
  te,
  ne,
  re,
  ae,
  se,
  fe,
  de,
  ce,
  pe,
  me,
  ge,
  he,
  Fe,
  Ze,
  ve,
  Le,
  qe
};
//# sourceMappingURL=chunk-DPC4S3UO.js.map
