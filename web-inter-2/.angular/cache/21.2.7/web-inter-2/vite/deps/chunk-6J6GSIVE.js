import {
  r as r3
} from "./chunk-HTUMJEPL.js";
import {
  n as n3
} from "./chunk-3YWMEIUN.js";
import {
  d as d2
} from "./chunk-EMNCB52O.js";
import {
  $
} from "./chunk-54KA5PPF.js";
import {
  R
} from "./chunk-HBTHIU55.js";
import {
  d
} from "./chunk-NMDBB7YG.js";
import {
  n as n2
} from "./chunk-XS5ENN45.js";
import {
  F,
  J
} from "./chunk-B2F3RTYB.js";
import {
  e
} from "./chunk-Z3PP4SLW.js";
import {
  c as c3,
  i
} from "./chunk-5EVMO3EL.js";
import {
  D
} from "./chunk-RWJPPLGT.js";
import {
  be,
  ge
} from "./chunk-NLL3NYBQ.js";
import {
  c as c2
} from "./chunk-M756WYLA.js";
import {
  S,
  s2 as s
} from "./chunk-ZRWCUWWK.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import {
  a3 as a2,
  c,
  r4 as r2,
  s4 as s2,
  w
} from "./chunk-XCGM4D6U.js";
import {
  o
} from "./chunk-TIEYANBR.js";
import {
  a,
  r3 as r
} from "./chunk-TX75HZKJ.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/support/AttachmentQuery.js
var a3;
var p = class extends n {
  static {
    a3 = this;
  }
  constructor(t) {
    super(t), this.attachmentTypes = null, this.attachmentsWhere = null, this.cacheHint = void 0, this.keywords = null, this.globalIds = null, this.name = null, this.num = null, this.objectIds = null, this.orderByFields = null, this.returnMetadata = false, this.size = null, this.start = null, this.where = null;
  }
  writeStart(t, e2) {
    e2.resultOffset = this.start, e2.resultRecordCount = this.num || 10;
  }
  clone() {
    return new a3(a({ attachmentTypes: this.attachmentTypes, attachmentsWhere: this.attachmentsWhere, cacheHint: this.cacheHint, keywords: this.keywords, where: this.where, globalIds: this.globalIds, name: this.name, num: this.num, objectIds: this.objectIds, orderByFields: this.orderByFields, returnMetadata: this.returnMetadata, size: this.size, start: this.start }));
  }
};
__decorate([a2({ type: [String], json: { write: true } })], p.prototype, "attachmentTypes", void 0), __decorate([a2({ type: String, json: { read: { source: "attachmentsDefinitionExpression" }, write: { target: "attachmentsDefinitionExpression" } } })], p.prototype, "attachmentsWhere", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], p.prototype, "cacheHint", void 0), __decorate([a2({ type: [String], json: { write: true } })], p.prototype, "keywords", void 0), __decorate([a2({ type: [String], json: { write: true } })], p.prototype, "globalIds", void 0), __decorate([a2({ json: { write: true } })], p.prototype, "name", void 0), __decorate([a2({ type: Number, json: { read: { source: "resultRecordCount" } } })], p.prototype, "num", void 0), __decorate([a2({ type: [Number], json: { write: true } })], p.prototype, "objectIds", void 0), __decorate([a2({ type: [String], json: { write: true } })], p.prototype, "orderByFields", void 0), __decorate([a2({ type: Boolean, json: { default: false, write: true } })], p.prototype, "returnMetadata", void 0), __decorate([a2({ type: [Number], json: { write: true } })], p.prototype, "size", void 0), __decorate([a2({ type: Number, json: { read: { source: "resultOffset" } } })], p.prototype, "start", void 0), __decorate([r2("start"), r2("num")], p.prototype, "writeStart", null), __decorate([a2({ type: String, json: { read: { source: "definitionExpression" }, write: { target: "definitionExpression" } } })], p.prototype, "where", void 0), p = a3 = __decorate([c("esri.rest.support.AttachmentQuery")], p), p.from = w(p);

// node_modules/@arcgis/core/layers/support/featureLayerUtils.js
var F2 = new o({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryMultiPatch: "multipatch" });
async function x(e2, t, n4, o2) {
  const i2 = await J2(e2);
  if (await P(e2, t, o2), !i2.addAttachment) throw new r(o2, "Layer source does not support addAttachment capability");
  return i2.addAttachment(t, n4);
}
function P(e2, t, n4) {
  const { attributes: o2 } = t, { objectIdField: i2 } = e2;
  return e2.capabilities?.data?.supportsAttachment ? t ? o2 ? i2 && o2[i2] ? Promise.resolve() : Promise.reject(new r(n4, `feature is missing the identifying attribute ${i2}`)) : Promise.reject(new r(n4, "'attributes' are required on a feature to query attachments")) : Promise.reject(new r(n4, "A feature is required to add/delete/update attachments")) : Promise.reject(new r(n4, "this layer doesn't support attachments"));
}
async function q(e2, t, n4, o2, i2) {
  const s3 = await J2(e2);
  if (await P(e2, t, i2), !s3.updateAttachment) throw new r(i2, "Layer source does not support updateAttachment capability");
  return s3.updateAttachment(t, n4, o2);
}
async function S2(e2, t, r4) {
  const { applyEdits: n4 } = await import("./editingSupport-EZWS4KHT.js"), o2 = await e2.load();
  let i2 = r4;
  const { url: s3, type: u, globalIdField: c4 } = o2;
  return "feature" === u && S(s3) && o2.infoFor3D && null != t.deleteFeatures && null != c4 && (i2 = __spreadProps(__spreadValues({}, i2), { globalIdToObjectId: await oe(o2, t.deleteFeatures, c4) })), n4(o2, o2.source, t, i2);
}
async function v(e2, t, r4) {
  const { uploadAssets: n4 } = await import("./editingSupport-EZWS4KHT.js"), o2 = await e2.load();
  return n4(o2, o2.source, t, r4);
}
async function L(e2, t, n4, o2) {
  const i2 = await J2(e2);
  if (await P(e2, t, o2), !i2.deleteAttachments) throw new r(o2, "Layer source does not support deleteAttachments capability");
  return i2.deleteAttachments(t, n4);
}
async function O(e2, t, n4) {
  const o2 = (await e2.load({ signal: t?.signal })).source;
  if (!o2.fetchRecomputedExtents) throw new r(n4, "Layer source does not support fetchUpdates capability");
  return o2.fetchRecomputedExtents(t);
}
async function A(e2, t, n4, o2) {
  let i2 = p.from(t);
  await e2.load();
  const s3 = e2.source, a4 = e2.capabilities;
  if (!a4?.data?.supportsAttachment) throw new r(o2, "this layer doesn't support attachments");
  const { attachmentTypes: u, objectIds: c4, globalIds: l, num: p2, size: d3, start: f, where: y } = i2;
  if (!a4?.operations?.supportsQueryAttachments) {
    if (u?.length > 0 || l?.length > 0 || d3?.length > 0 || p2 || f || y) throw new r(o2, "when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported", i2);
  }
  if (!(c4?.length || l?.length || y)) throw new r(o2, "'objectIds', 'globalIds', or 'where' are required to perform attachment query", i2);
  if (!s3.queryAttachments) throw new r(o2, "Layer source does not support queryAttachments capability", i2);
  return !a4?.attachment?.supportsOrderByFields && i2.orderByFields?.length && (i2 = i2.clone(), i2.orderByFields = null), s3.queryAttachments(i2);
}
async function E(e2, t, n4, o2) {
  const i2 = await J2(e2);
  if (!i2.queryObjectIds) throw new r(o2, "Layer source does not support queryObjectIds capability");
  return i2.queryObjectIds(R.from(t) ?? e2.createQuery(), n4);
}
async function D2(e2, t, n4, o2) {
  const i2 = await J2(e2);
  if (!i2.queryFeatureCount) throw new r(o2, "Layer source does not support queryFeatureCount capability");
  return i2.queryFeatureCount(R.from(t) ?? e2.createQuery(), n4);
}
async function T(e2, t, n4, o2) {
  const i2 = await J2(e2);
  if (!i2.queryExtent) throw new r(o2, "Layer source does not support queryExtent capability");
  return i2.queryExtent(R.from(t) ?? e2.createQuery(), n4);
}
async function C(e2, t, n4, o2) {
  const i2 = await J2(e2);
  if (!i2.queryRelatedFeatures) throw new r(o2, "Layer source does not support queryRelatedFeatures capability");
  return i2.queryRelatedFeatures(d2.from(t), n4);
}
async function B(e2, t, n4, o2) {
  const i2 = await J2(e2);
  if (!i2.queryRelatedFeaturesCount) throw new r(o2, "Layer source does not support queryRelatedFeaturesCount capability");
  return i2.queryRelatedFeaturesCount(d2.from(t), n4);
}
async function R2(e2) {
  const t = e2.source;
  if (t?.refresh) try {
    const { dataChanged: r4, updates: n4 } = await t.refresh();
    if (null != n4 && (e2.sourceJSON = __spreadValues(__spreadValues({}, e2.sourceJSON), n4), e2.read(n4, { origin: "service", url: e2.parsedUrl })), r4) return true;
  } catch {
  }
  if (e2.definitionExpression) try {
    return (await c2(e2.definitionExpression, e2.fieldsIndex)).hasDateFunctions;
  } catch {
  }
  return false;
}
function M(e2) {
  const t = new R();
  t.historicMoment = e2.historicMoment, t.gdbVersion = e2.gdbVersion, t.returnGeometry = true, t.outFields = ["*"], t.multipatchOption = "multipatch" === e2.geometryType ? "xyFootprint" : null;
  const r4 = e2.capabilities?.query;
  r4 && (t.compactGeometryEnabled = r4.supportsCompactGeometry, t.defaultSpatialReferenceEnabled = r4.supportsDefaultSpatialReference);
  const n4 = e2.capabilities?.data;
  n4?.supportsZ && null != e2.returnZ && (t.returnZ = e2.returnZ), n4?.supportsM && null != e2.returnM && (t.returnM = e2.returnM);
  const { timeOffset: o2, timeExtent: i2 } = e2;
  return t.timeExtent = null != o2 && null != i2 ? i2.offset(-o2.value, o2.unit) : i2 || null, t;
}
function k(e2) {
  const { globalIdField: t, fields: r4 } = e2;
  if (t) return t;
  if (r4) {
    for (const n4 of r4) if ("esriFieldTypeGlobalID" === n4.type) return n4.name;
  }
}
function z(e2) {
  const { objectIdField: t, fields: r4 } = e2;
  if (t) return t;
  if (r4) {
    for (const n4 of r4) if ("esriFieldTypeOID" === n4.type) return n4.name;
  }
}
function N(e2) {
  return e2.currentVersion ? e2.currentVersion : e2.hasOwnProperty("capabilities") || e2.hasOwnProperty("drawingInfo") || e2.hasOwnProperty("hasAttachments") || e2.hasOwnProperty("htmlPopupType") || e2.hasOwnProperty("relationships") || e2.hasOwnProperty("timeInfo") || e2.hasOwnProperty("typeIdField") || e2.hasOwnProperty("types") ? 10 : 9.3;
}
function U(e2, t, r4, n4) {
  const o2 = r4?.feature, i2 = !!e2.subtypes?.length;
  if (i2 && !r4?.excludeImpliedDomains) {
    const r5 = V(e2, t);
    if (r5) return r5;
  }
  const s3 = i2 && Q(e2, o2);
  if (s3) {
    const e3 = s3?.domains?.[t];
    return "inherited" === e3?.type ? n4 : e3;
  }
  const a4 = ie(e2.types, e2.typeIdField, o2);
  if (a4) {
    const e3 = a4.domains && a4.domains[t];
    if (e3 && "inherited" !== e3?.type) return e3;
  }
  if (n4) return n4;
  if (!r4?.excludeImpliedDomains) {
    const r5 = G(e2, t);
    if (r5) return r5;
  }
  return null;
}
function Q(e2, t) {
  const { subtypes: r4, subtypeField: n4 } = e2;
  if (!t?.attributes || !r4?.length || !n4) return null;
  const o2 = t.attributes[n4];
  return null == o2 ? null : r4.find((e3) => e3.code === o2);
}
function V(e2, t) {
  const { fieldsIndex: r4, subtypeField: n4 } = e2, { name: o2, type: i2 } = r4.get(t) ?? {};
  if (!o2) return null;
  if ((n4 && r4.get(n4)?.name) === o2 && e2.subtypes?.length) {
    const t2 = e2.subtypes.map((e3) => new i({ code: $2(e3.code, i2), name: e3.name }));
    if (t2?.length) return new c3({ codedValues: t2 });
  }
  return null;
}
function G(e2, t) {
  const { fieldsIndex: r4 } = e2, { name: n4, type: o2 } = r4.get(t) ?? {};
  if (!n4) return null;
  if (("typeIdField" in e2 ? r4.get(e2.typeIdField)?.name : null) === n4 && "types" in e2 && e2.types?.length) {
    const t2 = e2.types.map((e3) => new i({ code: $2(e3.id, o2), name: e3.name }));
    return new c3({ codedValues: t2 });
  }
  return null;
}
function $2(e2, t) {
  return t ? be({ type: t }) && "number" == typeof e2 ? `${e2}` : ge({ type: t }) && "string" == typeof e2 ? Number.parseInt(e2, 10) : e2 : e2;
}
async function J2(e2) {
  return (await e2.load()).source;
}
async function Z(t, r4) {
  if (!s) return;
  const n4 = s.findCredential(t);
  if (n4) return n4.userId;
  let o2;
  try {
    const n5 = await F(t, r4);
    n5 && (o2 = await s.checkSignInStatus(`${n5}/sharing`));
  } catch (i2) {
  }
  return o2 ? o2.userId : null;
}
async function H(t, r4) {
  if (!s) return;
  if (s.findCredential(t)) return;
  let n4;
  try {
    const o2 = await F(t, r4);
    o2 && (n4 = await s.checkSignInStatus(`${o2}/sharing`));
  } catch (o2) {
  }
  if (n4) try {
    const n5 = null != r4 ? r4.signal : null;
    await s.getCredential(t, { signal: n5 });
  } catch (o2) {
  }
}
async function W(e2, t, r4) {
  const n4 = e2.parsedUrl?.path;
  n4 && e2.authenticationTriggerEvent === t && await H(n4, r4);
}
async function _(e2) {
  const t = e2.parsedUrl?.path;
  t && K(e2) && await H(t);
}
function K(e2) {
  return X(e2) && ("serviceDefinitionExpression" in e2 && Y(e2.serviceDefinitionExpression) || "definitionExpression" in e2 && Y(e2.definitionExpression));
}
function X(e2) {
  return !(!J(e2) || !e2.capabilities?.query.supportsCurrentUser);
}
function Y(e2) {
  return !!e2?.toLowerCase().includes("current_user");
}
function ee(e2) {
  return !se(e2) && (e2.userHasUpdateItemPrivileges || e2.editingEnabled);
}
var te = s2({ types: D });
function re(e2, t) {
  if (e2.defaultSymbol) return e2.types?.length ? new $({ defaultSymbol: te(e2.defaultSymbol, e2, t), field: e2.typeIdField, uniqueValueInfos: e2.types.map((e3) => ({ id: e3.id, symbol: te(e3.symbol, e3, t) })) }) : new n3({ symbol: te(e2.defaultSymbol, e2, t) });
}
function ne(e2) {
  let t = e2.sourceJSON?.cacheMaxAge;
  if (!t) return false;
  const r4 = e2.editingInfo?.lastEditDate?.getTime();
  return null == r4 || (t *= 1e3, Date.now() - r4 < t);
}
async function oe(e2, r4, n4) {
  if (null == r4) return null;
  const o2 = [], { objectIdField: s3 } = e2;
  if (r4.forEach((e3) => {
    let t = null;
    if ("attributes" in e3) {
      const { attributes: r5 } = e3;
      t = { globalId: r5[n4], objectId: null != r5[s3] && -1 !== r5[s3] ? r5[s3] : null };
    } else t = { globalId: e3.globalId, objectId: null != e3.objectId && -1 !== e3.objectId ? e3.objectId : null };
    null != t.globalId && (null != t.objectId && -1 !== t.objectId || o2.push(t.globalId));
  }), 0 === o2.length) return null;
  const a4 = e2.createQuery();
  a4.where = o2.map((e3) => `${n4}='${e3}'`).join(" OR "), a4.returnGeometry = false, a4.outFields = [s3, n4], a4.cacheHint = false;
  const u = await d(r3(e2, a4));
  if (!u.ok) return null;
  const c4 = /* @__PURE__ */ new Map(), p2 = u.value.features;
  for (const t of p2) {
    const e3 = t.attributes[n4], r5 = t.attributes[s3];
    null != e3 && null != r5 && -1 !== r5 && c4.set(e(e3), r5);
  }
  return c4;
}
function ie(e2, t, r4) {
  if (!t || !r4 || !e2) return null;
  const n4 = r4.getAttribute(t);
  return null == n4 ? null : e2.find((e3) => {
    const { id: t2 } = e3;
    return null != t2 && t2.toString() === n4.toString();
  }) ?? null;
}
function se(e2) {
  return e2.sourceJSON?.isMultiServicesView || ae(e2);
}
function ae(e2) {
  return !!e2.sourceJSON?.capabilities?.toLowerCase().split(",").map((e3) => e3.trim()).includes("map");
}
function ue(e2, t, n4) {
  const o2 = t?.queryAttributeBins;
  if (!t?.operations?.supportsQueryBins || !o2) throw new r(n4, "Layer source does not support binning");
  switch (e2.binParameters?.type) {
    case "auto-interval":
      if (!o2.supportsAutoInterval) throw new r(n4, "Layer source does not support auto-interval binning");
      if (e2.binParameters.normalizationType && (!o2.supportsNormalization || !ce(e2.binParameters.normalizationType, o2.supportedNormalizationTypes))) throw new r(n4, "Layer source does not support normalization binning");
      break;
    case "date":
      if (!o2.supportsDate) throw new r(n4, "Layer source does not support date binning");
      if (e2.binParameters.snapToData && !o2.supportsSnapToData) throw new r(n4, "Layer source does not support snapToData binning");
      if (e2.binParameters.returnFullIntervalBin && !o2.supportsReturnFullIntervalBin) throw new r(n4, "Layer source does not support returnFullIntervalBin binning");
      break;
    case "fixed-boundaries":
      if (!o2.supportsFixedBoundaries) throw new r(n4, "Layer source does not support fixed-boundaries binning");
      break;
    case "fixed-interval":
      if (!o2.supportsFixedInterval) throw new r(n4, "Layer source does not support fixed-interval binning");
      if (e2.binParameters.normalizationType && (!o2.supportsNormalization || !ce(e2.binParameters.normalizationType, o2.supportedNormalizationTypes))) throw new r(n4, "Layer source does not support normalization binning");
  }
  if (e2.binParameters?.stackBy && !o2.supportsStackBy) throw new r(n4, "Layer source does not support stackBy binning");
  if (e2.binParameters?.splitBy && !o2.supportsSplitBy) throw new r(n4, "Layer source does not support splitBy binning");
  if (e2.binParameters?.firstDayOfWeek && !o2.supportsFirstDayOfWeek) throw new r(n4, "Layer source does not support firstDayOfWeek binning");
  const i2 = o2?.supportedStatistics;
  if (e2.outStatistics && i2) {
    const t2 = /* @__PURE__ */ new Map([["count", "count"], ["sum", "sum"], ["min", "min"], ["max", "max"], ["avg", "avg"], ["stddev", "stddev"], ["var", "var"], ["percentile-continuous", "percentileContinuous"], ["percentile-discrete", "percentileDiscrete"], ["centroid-aggregate", "centroid"], ["convex-hull-aggregate", "convexHull"], ["envelope-aggregate", "envelope"]]);
    for (const { statisticType: o3 } of e2.outStatistics) {
      const e3 = t2.get(o3);
      if (e3 && !i2[e3]) throw new r(n4, `Layer source does not support ${o3} statistic type`);
    }
  }
}
function ce(e2, t) {
  return null != e2 && !!t?.[n2.toJSON(e2)];
}

export {
  p,
  F2 as F,
  x,
  q,
  S2 as S,
  v,
  L,
  O,
  A,
  E,
  D2 as D,
  T,
  C,
  B,
  R2 as R,
  M,
  k,
  z,
  N,
  U,
  Q,
  V,
  Z,
  W,
  _,
  Y,
  ee,
  re,
  ne,
  oe,
  ie,
  se,
  ue
};
//# sourceMappingURL=chunk-6J6GSIVE.js.map
