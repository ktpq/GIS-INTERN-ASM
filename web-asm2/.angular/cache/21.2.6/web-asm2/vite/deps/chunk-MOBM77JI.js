import {
  F,
  I as I2,
  S,
  a,
  l,
  p as p4,
  r as r2,
  s as s4,
  v,
  w2 as w,
  w3 as w2
} from "./chunk-77HLGP2C.js";
import {
  t as t2
} from "./chunk-VCCZVXB2.js";
import {
  t
} from "./chunk-GNDMWO24.js";
import {
  r
} from "./chunk-P4WZNUL2.js";
import {
  M as M2
} from "./chunk-NOYK25RO.js";
import {
  p
} from "./chunk-D2UKWTS5.js";
import {
  B,
  qe
} from "./chunk-2KPSUWRN.js";
import {
  Ye
} from "./chunk-EM7HCL7Y.js";
import {
  n,
  x
} from "./chunk-5XSBG4BK.js";
import {
  G,
  I,
  J,
  M as M3
} from "./chunk-7RXTTEFJ.js";
import {
  n as n2
} from "./chunk-V6YTF7GA.js";
import {
  p as p3
} from "./chunk-ATQTOAUP.js";
import {
  d
} from "./chunk-BLZNVDZS.js";
import {
  R
} from "./chunk-ZEZJAXNN.js";
import {
  p as p2
} from "./chunk-HYDNVC4V.js";
import {
  m
} from "./chunk-2IAEDPBU.js";
import {
  k
} from "./chunk-IDQ6F3RQ.js";
import {
  b
} from "./chunk-JWSXOJ4W.js";
import {
  o
} from "./chunk-RJMYNJ36.js";
import {
  m as m2
} from "./chunk-IDWN24M7.js";
import {
  s as s3
} from "./chunk-X7TQ4MJH.js";
import {
  f2 as f,
  s2
} from "./chunk-5AVTDH3Y.js";
import {
  M,
  s
} from "./chunk-KWV5EQET.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/featureSetCollection.js
var e = class {
  constructor() {
    this.declaredRootClass = "esri.arcade.featureSetCollection", this._layerById = {}, this._layerByName = {};
  }
  add(e2, t3, a2) {
    this._layerById[t3] = a2, this._layerByName[e2] = a2;
  }
  async featureSetByName(e2, t3 = true, a2 = ["*"]) {
    return void 0 === this._layerByName[e2] ? null : this._layerByName[e2];
  }
  async featureSetById(e2, t3 = true, a2 = ["*"]) {
    return void 0 === this._layerById[e2] ? null : this._layerById[e2];
  }
  castToText(e2 = false) {
    return "object, FeatureSetCollection";
  }
};

// node_modules/@arcgis/core/arcade/featureset/actions/AttributeFilter.js
var i = class extends w2 {
  constructor(e2) {
    super(), this.declaredClass = "esri.arcade.featureset.actions.AttributeFilter", this._maxProcessing = 1e3, this._parent = e2.parentfeatureset, e2.whereclause instanceof M2 ? (this._whereClause = e2.whereclause, this._whereClauseFunction = null) : (this._whereClauseFunction = e2.whereclause, this._whereClause = null);
  }
  _initialiseFeatureSet() {
    this.fields = this._parent.fields.slice(), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types, this.subtypeField = this._parent.subtypeField, this.subtypes = this._parent.subtypes;
  }
  async _queryAll() {
    return (await this.query({ abortSignal: t })).features;
  }
  async query(e2) {
    let s5 = e2.where;
    null !== this._whereClauseFunction || (null != s5 ? null !== this._whereClause && (s5 = p4(this._whereClause, s5)) : s5 = this._whereClause), await this._ensureLoaded();
    const r3 = await this._parent.query(__spreadProps(__spreadValues({}, e2), { where: s5 }));
    return s4(e2.abortSignal), r3.filterApplied && null == this._whereClauseFunction ? r3 : __spreadProps(__spreadValues({}, r3), { features: this._applyFilter(r3.features, e2.abortSignal) });
  }
  async *_applyFilter(e2, s5) {
    for await (const r3 of e2) if (s4(s5), null != this._whereClause) {
      const e3 = r3.filter((e4) => this._whereClause.testFeature(e4));
      e3.length > 0 && (yield e3);
    } else if (null != this._whereClauseFunction) {
      const e3 = [];
      for (const t3 of r3) await this._whereClauseFunction(t3) && e3.push(t3);
      e3.length > 0 && (yield e3);
    } else yield r3;
  }
  async queryStat(e2) {
    if (null !== this._whereClauseFunction) return null == e2.where && null == e2.spatialFilter ? this._manualStat(e2.stat, e2.field, e2.limit ?? G, e2.abortSignal) : { calculated: false };
    let t3 = this._whereClause;
    null != e2.where && null !== this._whereClause && (t3 = p4(this._whereClause, e2.where));
    const s5 = await this._parent.queryStat(__spreadProps(__spreadValues({}, e2), { where: t3 }));
    return s5.calculated ? s5 : null == e2.where && null == e2.spatialFilter ? this._manualStat(e2.stat, e2.field, e2.limit ?? G, e2.abortSignal) : { calculated: false };
  }
  async canQueryAggregate(e2) {
    if (null !== this._whereClauseFunction) return false;
    let t3 = e2.where;
    return null != t3 ? null !== this._whereClause && (t3 = p4(this._whereClause, t3)) : t3 = this._whereClause, this._parent.canQueryAggregate(__spreadProps(__spreadValues({}, e2), { where: t3 }));
  }
  async queryAggregate(e2) {
    let t3 = e2.where;
    return null != t3 ? null !== this._whereClause && (t3 = p4(this._whereClause, t3)) : t3 = this._whereClause, this._parent.queryAggregate(__spreadProps(__spreadValues({}, e2), { where: t3 }));
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};

// node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerDynamic.js
function T(e2) {
  if (0 === e2.length) throw new r2("NeverReach");
  const t3 = [];
  for (let i2 = 0; i2 < e2.length; i2++) {
    const r4 = e2[i2], a2 = [`"${r4.name.replaceAll('"', '""')}" ${r4.asc ? ">" : "<"} @last_${i2}`];
    for (let t4 = 0; t4 < i2; t4++) {
      const r5 = e2[t4];
      a2.push(`"${r5.name.replaceAll('"', '""')}" = @last_${t4}`);
    }
    t3.push(a2.join(" AND "));
  }
  const r3 = t3.join(" OR ");
  return M2.create(r3);
}
function Q(e2, t3) {
  null == e2.clause && (e2.clause = T(e2.keyFields));
  for (let r3 = 0; r3 < e2.keyFields.length; r3++) {
    const i2 = e2.keyFields[r3].name;
    e2.clause.parameters[`last_${r3}`] = t3.attributes[i2];
  }
}
var v2 = class _v extends S {
  constructor(e2) {
    super(), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerDynamic", this._removeGeometry = false, this._overrideFields = null, this._requestStandardised = false, this._useDefinitionExpression = true, this._recentlyUsedQueries = null, this._featureSetQueryInterceptor = null, this._featureSetInfo = null, this._maxProcessing = 1e3, this._layer = e2.layer, e2.spatialReference && (this.spatialReference = e2.spatialReference), void 0 !== e2.outFields && (this._overrideFields = e2.outFields), void 0 !== e2.includeGeometry && (this._removeGeometry = false === e2.includeGeometry), e2.lrucache && (this._recentlyUsedQueries = e2.lrucache), e2.interceptor && (this._featureSetQueryInterceptor = e2.interceptor);
  }
  _maxQueryRate() {
    return G;
  }
  get urlQueryPath() {
    return this._layer.parsedUrl.path || "";
  }
  convertQueryToLruCacheKey(e2) {
    const t3 = this.urlQueryPath + "," + J(e2.toJSON());
    return x(t3, n.String);
  }
  async loadImpl() {
    return true === this._layer.loaded ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  _initialiseFeatureSet() {
    if (this.spatialReference ??= this._layer.spatialReference, this.geometryType = this._layer.geometryType ?? "", this.fields = this._layer.fields.slice(), this.hasZ = true === this._layer.capabilities?.data?.supportsZ, this.hasM = true === this._layer.capabilities?.data?.supportsM, null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;
    else {
      const e2 = new Set(this._overrideFields.map((e3) => e3.toLowerCase()));
      this.fields = this.fields.filter(({ type: t3, name: r3 }) => "oid" === t3 || e2.has(r3.toLowerCase())), this._overrideFields = this.fields.map(({ name: e3 }) => e3);
    }
    if (this._layer.source && this._layer.source.sourceJSON) {
      const e2 = this._layer.source.sourceJSON.currentVersion;
      true === this._layer.source.sourceJSON.useStandardizedQueries ? (this._databaseType = 1, null != e2 && e2 >= 10.61 && (this._databaseType = 0)) : null != e2 && (e2 >= 10.5 && (this._databaseType = 1, this._requestStandardised = true), e2 >= 10.61 && (this._databaseType = 0));
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e2 of this.fields) "global-id" === e2.type && (this.globalIdField = e2.name);
    this.subtypeField = this._layer.subtypeField ?? "", this.subtypes = this._layer.subtypes, this.typeIdField = ("typeIdField" in this._layer ? this._layer.typeIdField : null) ?? "", this.types = "types" in this._layer ? this._layer.types : null;
  }
  async _runDatabaseProbe(e2) {
    await this._ensureLoaded();
    const t3 = new R();
    this.datesInUnknownTimezone && (t3.timeReferenceUnknownClient = true), t3.where = e2.replace("OBJECTID", this._layer.objectIdField);
    try {
      return await this._layer.queryObjectIds(t3), true;
    } catch {
      return false;
    }
  }
  _canUsePagination() {
    return !(!this._layer.capabilities || !this._layer.capabilities.query || true !== this._layer.capabilities.query.supportsPagination);
  }
  _cacheableFeatureSetSourceKey() {
    return this._layer.url;
  }
  get gdbVersion() {
    return this._layer && this._layer.capabilities && this._layer.capabilities.data && this._layer.capabilities.data.isVersioned ? this._layer.gdbVersion || "SDE.DEFAULT" : "";
  }
  nativeCapabilities() {
    return { title: this._layer.title ?? "", source: this, canQueryRelated: true, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: this._requestStandardised };
  }
  async _queryAll() {
    return (await this.query({ abortSignal: t })).features;
  }
  async query(e2) {
    return await this._ensureLoaded(), this.isTable() && null != e2.spatialFilter ? I2 : this._canUsePagination() ? this._queryUsingPaging(e2) : this._queryUsingIdSetTraversal(e2);
  }
  async _queryUsingPaging(e2) {
    let t3 = "", r3 = false;
    null != e2.orderBy && true === this._layer.capabilities?.query?.supportsOrderBy && (t3 = e2.orderBy.constructClause(), r3 = true);
    const i2 = await this.databaseType(), a2 = null == e2.where ? null == e2.spatialFilter ? "1=1" : "" : l(e2.where, i2);
    let s5 = this._maxQueryRate();
    const l2 = this._layer.capabilities?.query.maxRecordCount;
    null != l2 && l2 < s5 && (s5 = l2);
    const n3 = true !== this._removeGeometry, o2 = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]), u = this._createQuery();
    return u.where = o(u.where, a2), null != e2.spatialFilter && (u.spatialRelationship = this._makeRelationshipEnum(e2.spatialFilter.relation), u.relationParameter = this._makeRelationshipParam(e2.spatialFilter.relation), u.geometry = e2.spatialFilter.geometry), u.orderByFields = "" !== t3 ? t3.split(",") : null, u.outFields = o2, u.returnGeometry = n3, u.outSpatialReference = this.spatialReference, { ordered: r3, filterApplied: true, spatialFilterApplied: true, features: this._queryPaginated(u, s5, e2.abortSignal) };
  }
  async *_queryPaginated(e2, t3, r3) {
    let i2;
    e2.num = t3, e2.start = 0;
    do {
      s4(r3), i2 = await this.executeQuery(e2, "execute"), yield i2.features, e2.start += t3;
    } while (true === i2.exceededTransferLimit);
  }
  async _queryUsingIdSetTraversal(e2) {
    let t3 = "", r3 = false;
    null != e2.orderBy && this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsOrderBy && (t3 = e2.orderBy.constructClause(), r3 = true);
    const i2 = await this.databaseType(), a2 = null == e2.where ? null == e2.spatialFilter ? "1=1" : "" : l(e2.where, i2), l2 = this._createQuery();
    l2.where = o(l2.where, a2), null != e2.spatialFilter && (l2.spatialRelationship = this._makeRelationshipEnum(e2.spatialFilter.relation), l2.relationParameter = this._makeRelationshipParam(e2.spatialFilter.relation), l2.geometry = e2.spatialFilter.geometry), l2.orderByFields = "" !== t3 ? t3.split(",") : null, l2.outSpatialReference = this.spatialReference;
    const n3 = await this.executeQuery(l2, "executeForIds");
    if (s4(e2.abortSignal), null == n3 || n3.length <= 0) return I2;
    let u = this._maxQueryRate();
    const c2 = this._layer.capabilities?.query.maxRecordCount;
    null != c2 && c2 < u && (u = c2);
    const h = this._createQuery();
    return l2.outFields = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]), l2.returnGeometry = true !== this._removeGeometry, l2.outSpatialReference = this.spatialReference, { ordered: r3, filterApplied: true, spatialFilterApplied: true, features: this._traverseIdSet(h, n3, u, e2.abortSignal) };
  }
  async *_traverseIdSet(e2, t3, r3, i2) {
    for (let a2 = 0; a2 < t3.length; a2 += r3) {
      e2.objectIds = t3.slice(a2, a2 + r3), s4(i2);
      const l2 = await this.executeQuery(e2, "execute");
      yield l2.features;
    }
  }
  async queryStat(e2) {
    await this._ensureLoaded();
    const t3 = this._layer.capabilities?.query, r3 = !!t3?.supportsSqlExpression, i2 = !!t3?.supportsStatistics, a2 = !!t3?.supportsDistinct, s5 = w(e2.stat);
    if ("count" === s5) return a2 ? this._queryCount(e2) : { calculated: false };
    const n3 = e2.field;
    if (null == n3) return { calculated: false };
    if (false === i2 || false === v(n3) && false === r3 || false === n3.isStandardized) return null != e2.spatialFilter || null != e2.where ? { calculated: false } : this._manualStat(e2.stat, n3, e2.limit ?? G, e2.abortSignal);
    if ("distinct" === s5) return false === a2 ? null != e2.spatialFilter || null != e2.where ? { calculated: false } : this._manualStat(s5, n3, e2.limit ?? G, e2.abortSignal) : { calculated: false };
    const o2 = await this.databaseType();
    if (this.isTable() && null != e2.spatialFilter) return { calculated: true, result: null };
    const u = this._createQuery();
    u.where = o(u.where, null == e2.where ? null == e2.spatialFilter ? "1=1" : "" : l(e2.where, o2)), null != e2.spatialFilter && (u.spatialRelationship = this._makeRelationshipEnum(e2.spatialFilter.relation), u.relationParameter = this._makeRelationshipParam(e2.spatialFilter.relation), u.geometry = e2.spatialFilter.geometry);
    const h = new p2();
    h.statisticType = s5, h.onStatisticField = l(n3, o2), h.outStatisticFieldName = "ARCADE_STAT_RESULT", u.returnGeometry = false;
    let y = "ARCADE_STAT_RESULT";
    u.outStatistics = [h];
    const m3 = await this.executeQuery(u, "execute");
    if (!m3.hasOwnProperty("features") || 0 === m3.features.length) throw new r2("InvalidStatResponse");
    let f2 = false;
    const F3 = m3.fields ?? [];
    for (const l2 of F3) if ("ARCADE_STAT_RESULT" === l2.name.toUpperCase()) {
      y = l2.name, "esriFieldTypeDate" === l2.type && (f2 = true);
      break;
    }
    const S3 = m3.features[0].attributes[y];
    return { calculated: true, result: f2 && null != S3 ? new Date(S3) : S3 };
  }
  async _queryCount(e2) {
    const t3 = await this.databaseType();
    if (this.isTable() && null != e2.spatialFilter) return { calculated: true, result: 0 };
    const r3 = this._createQuery();
    r3.where = o(r3.where, null == e2.where ? null == e2.spatialFilter ? "1=1" : "" : l(e2.where, t3)), null != e2.spatialFilter && (r3.spatialRelationship = this._makeRelationshipEnum(e2.spatialFilter.relation), r3.relationParameter = this._makeRelationshipParam(e2.spatialFilter.relation), r3.geometry = e2.spatialFilter.geometry), r3.returnGeometry = false;
    return { calculated: true, result: await this.executeQuery(r3, "executeForCount") };
  }
  async canQueryAggregate(e2) {
    await this._ensureLoaded();
    let t3 = false;
    const r3 = this._layer.capabilities?.query, i2 = true === r3?.supportsSqlExpression;
    if (null != r3 && true === r3.supportsStatistics && true === r3.supportsOrderBy && (t3 = true), t3) for (const a2 of e2.statistics) (false === a2.workingexpr?.isStandardized || false === v(a2.workingexpr) && false === i2) && (t3 = false);
    return t3;
  }
  async queryAggregate(e2) {
    if (await this._ensureLoaded(), this.isTable() && null != e2.spatialFilter) return I2;
    const t3 = await this.databaseType(), r3 = e2.groupBy, i2 = e2.orderBy;
    let a2 = null;
    if (!this._layer.capabilities.query.supportsPaginationOnAggregatedQueries) {
      const e3 = this.getFieldsIndex();
      a2 = { keyFields: r3.map((t4, r4) => ({ name: e3.normalizeFieldName(t4) ?? t4, asc: null == i2 || 1 === i2._directions[r4] })) };
    }
    let s5 = "", l2 = false;
    null != i2 && true === this._layer.capabilities?.query?.supportsOrderBy && (null == a2 || s(r3, 0, r3.length, i2._fields, 0, Math.min(i2._fields.length, r3.length), (e3, t4) => e3.toLowerCase() === t4.toLowerCase())) && (s5 = i2.constructClause(), l2 = true), "" === s5 && (s5 = r3.join(","));
    const n3 = e2.statistics.map((e3) => new p2({ onStatisticField: null !== e3.workingexpr ? l(e3.workingexpr, t3) : "", outStatisticFieldName: e3.field, statisticType: e3.toStatisticsName() }));
    let u = this._maxQueryRate();
    const c2 = this._layer.capabilities?.query.maxRecordCount;
    null != c2 && c2 < u && (u = c2);
    const h = null == e2.where ? null == e2.spatialFilter ? "1=1" : "" : l(e2.where, t3), y = this._createQuery();
    return y.where = o(y.where, h), null != e2.spatialFilter && (y.spatialRelationship = this._makeRelationshipEnum(e2.spatialFilter.relation), y.relationParameter = this._makeRelationshipParam(e2.spatialFilter.relation), y.geometry = e2.spatialFilter.geometry), y.orderByFields = "" !== s5 ? s5.split(",") : null, y.outFields = ["*"], y.outStatistics = n3, y.groupByFieldsForStatistics = r3, y.returnGeometry = false, null == a2 ? { filterApplied: true, spatialFilterApplied: true, ordered: l2, features: this._queryPaginated(y, u, e2.abortSignal) } : { filterApplied: true, spatialFilterApplied: true, ordered: l2, features: this._queryKeysetPaginated(y, a2, e2.abortSignal) };
  }
  async *_queryKeysetPaginated(e2, t3, r3) {
    const i2 = e2.where;
    for (; ; ) {
      if (null != t3.clause) {
        if (!this._layer.capabilities.query.supportsOrderBy) throw new r2("NotImplemented");
        e2.where = o(i2, l(t3.clause, await this.databaseType()));
      }
      const a2 = await this.executeQuery(e2, "execute");
      if (s4(r3), !a2.hasOwnProperty("features")) throw new r2("InvalidStatResponse");
      if (yield a2.features, 0 === a2.features.length || true !== a2.exceededTransferLimit) break;
      Q(t3, a2.features.at(-1));
    }
  }
  _createQuery() {
    const e2 = this._layer.createQuery();
    return e2.returnZ = this.hasZ, e2.returnM = this.hasM, this.datesInUnknownTimezone && (e2.timeReferenceUnknownClient = true), this._requestStandardised && (e2.sqlFormat = "standard"), this._useDefinitionExpression ? "subtype-group" === this._layer.type && (e2.where = this._layer.definitionExpression) : e2.where = null, e2;
  }
  executeQuery(e2, t3) {
    const r3 = "execute" === t3 ? async (e3) => {
      const t4 = await this._layer.source.queryFeaturesJSON(e3);
      return F(t4.features, t4.spatialReference ?? this.spatialReference.toJSON()), t4;
    } : "executeForCount" === t3 ? this._layer.queryFeatureCount.bind(this._layer) : this._layer.queryObjectIds.bind(this._layer);
    let i2 = null;
    if (this._recentlyUsedQueries) {
      const t4 = this.convertQueryToLruCacheKey(e2);
      i2 = this._recentlyUsedQueries.getFromCache(t4), null === i2 && (i2 = r3(e2), this._recentlyUsedQueries.addToCache(t4, i2), i2 = i2.catch((e3) => {
        throw this._recentlyUsedQueries?.removeFromCache(t4), e3;
      }));
    }
    return this._featureSetQueryInterceptor && this._featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: e2, method: t3 }), null === i2 && (i2 = r3(e2)), i2;
  }
  _fieldsIncludingObjectId(e2) {
    if (null === e2) return [this.objectIdField];
    const t3 = e2.slice();
    if (t3.includes("*")) return t3;
    let r3 = false;
    for (const i2 of t3) if (i2.toUpperCase() === this.objectIdField.toUpperCase()) {
      r3 = true;
      break;
    }
    return r3 || t3.push(this.objectIdField), t3;
  }
  isTable() {
    return this._layer.isTable || null === this._layer.geometryType || "table" === this._layer.type || "" === this._layer.geometryType || "esriGeometryNull" === this._layer.geometryType;
  }
  _makeRelationshipEnum(e2) {
    if (e2.includes("esriSpatialRelRelation")) return "relation";
    switch (e2) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e2;
  }
  _makeRelationshipParam(e2) {
    return e2.includes("esriSpatialRelRelation") ? e2.split(":")[1] : "";
  }
  static create(e2, t3, r3, i2, a2) {
    const s5 = new Ye({ url: e2, outFields: null === t3 ? ["*"] : t3 });
    return new _v({ layer: s5, spatialReference: r3, lrucache: i2, interceptor: a2 });
  }
  relationshipMetadata() {
    return this._layer && this._layer.source && this._layer.source.sourceJSON?.relationships ? this._layer.source.sourceJSON.relationships : [];
  }
  serviceUrl() {
    return I(this._layer.parsedUrl.path);
  }
  async queryAttachments(e2, t3, r3, s5, l2) {
    function n3(e3) {
      const t4 = e3.capabilities;
      return t4?.data.supportsAttachment && t4?.operations.supportsQueryAttachments;
    }
    const o2 = this._layer;
    if (!n3(o2)) return [];
    const u = new p3({ objectIds: [e2], returnMetadata: l2 });
    (t3 && t3 > 0 || r3 && r3 > 0) && (u.size = [t3 && t3 > 0 ? t3 : 0, r3 && r3 > 0 ? r3 : t3 + 1]), s5 && s5.length > 0 && (u.attachmentTypes = s5), this._featureSetQueryInterceptor && this._featureSetQueryInterceptor.preLayerQueryCallback({ layer: o2, query: u, method: "attachments" });
    const c2 = await o2.queryAttachments(u);
    return c2?.[e2] ? c2[e2].map((t4) => {
      const r4 = `${this._layer.parsedUrl.path}/${e2}/attachments/${t4.id}`;
      let s6 = null;
      return l2 && t4.exifInfo && (s6 = p.convertJsonToArcade(t4.exifInfo, "system", true)), new t2(t4.id, t4.name, t4.contentType, t4.size, r4, s6, t4.keywords ?? null);
    }) : [];
  }
  async queryRelatedFeatures(e2) {
    const r3 = r(e2);
    r3.f = "json", this._requestStandardised && (r3.sqlFormat = "standard"), this._featureSetQueryInterceptor && this._featureSetQueryInterceptor.preRequestCallback({ layer: this._layer, queryPayload: r3, method: "relatedrecords", url: this._layer.parsedUrl.path + "/queryRelatedRecords" });
    const i2 = await f(this._layer.parsedUrl.path + "/queryRelatedRecords", { responseType: "json", query: r3 });
    if (i2.data) {
      const e3 = {}, t3 = i2.data;
      if (t3?.relatedRecordGroups) {
        const r4 = t3.spatialReference, i3 = true === t3.exceededTransferLimit;
        for (const a2 of t3.relatedRecordGroups) F(a2.relatedRecords, r4), e3[a2.objectId] = { features: a2.relatedRecords, exceededTransferLimit: i3 };
      }
      return e3;
    }
    throw new r2("InvalidRequest");
  }
  async getFeatureByObjectId(e2, t3) {
    const r3 = this._createQuery();
    r3.outFields = t3, r3.returnGeometry = false, r3.outSpatialReference = this.spatialReference, r3.where = o(r3.where, this.objectIdField + "=" + e2.toString()), this._featureSetQueryInterceptor && this._featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: r3, method: "execute" });
    const i2 = await this._layer.source.queryFeaturesJSON(r3);
    return 1 === i2.features.length ? (F(i2.features, i2.spatialReference ?? this.spatialReference.toJSON()), i2.features[0]) : null;
  }
  async getIdentityUser() {
    await this.load();
    const t3 = s2?.findCredential(this._layer.url);
    return t3 ? t3.userId : null;
  }
  async getOwningSystemUrl() {
    await this.load();
    const r3 = s2?.findServerInfo(this._layer.url);
    if (r3) return r3.owningSystemUrl ?? "";
    let i2 = this._layer.url;
    const a2 = i2.toLowerCase().indexOf("/rest/services");
    if (i2 = a2 > -1 ? i2.slice(0, a2) : i2, i2) {
      i2 += "/rest/info";
      try {
        const e2 = await f(i2, { query: { f: "json" } });
        let r4 = "";
        return e2.data?.owningSystemUrl && (r4 = e2.data.owningSystemUrl), r4;
      } catch {
        return "";
      }
    }
    return "";
  }
  getDataSourceFeatureSet() {
    const e2 = new _v({ layer: this._layer, spatialReference: this.spatialReference ?? void 0, outFields: this._overrideFields ?? void 0, includeGeometry: !this._removeGeometry, lrucache: this._recentlyUsedQueries ?? void 0, interceptor: this._featureSetQueryInterceptor ?? void 0 });
    return e2._useDefinitionExpression = false, e2;
  }
  get preferredTimeZone() {
    return this._layer.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._layer.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._layer.datesInUnknownTimezone ?? false;
  }
  get editFieldsInfo() {
    return this._layer.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._layer.timeInfo ?? null;
  }
  async getFeatureSetInfo() {
    if (this._featureSetInfo) return this._featureSetInfo;
    let e2 = null, r3 = "serviceItemId" in this._layer ? this._layer.serviceItemId : null;
    const i2 = this._layer.parsedUrl?.path ?? null;
    if (i2) {
      const a3 = await f(i2, { responseType: "json", query: { f: "json" } });
      e2 = a3?.data?.name ?? null, r3 = a3?.data?.serviceItemId ?? null;
    }
    const a2 = this._layer.title && null !== (this._layer.parent ?? null);
    return this._featureSetInfo = { layerId: this._layer.layerId, layerName: "" === e2 ? null : e2, itemId: "" === r3 ? null : r3, serviceLayerUrl: "" === i2 ? null : i2, webMapLayerId: a2 ? this._layer.id ?? null : null, webMapLayerTitle: a2 ? this._layer.title ?? null : null, className: null, objectClassId: null }, this._featureSetInfo;
  }
};

// node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerMemory.js
var c = class _c extends S {
  constructor(e2) {
    super(), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerMemory", this._removeGeometry = false, this._overrideFields = null, this._forceIsTable = false, this._maxProcessing = 1e3, this._layer = e2.layer, e2.spatialReference && (this.spatialReference = e2.spatialReference), true === e2.isTable && (this._forceIsTable = true), void 0 !== e2.outFields && (this._overrideFields = e2.outFields), void 0 !== e2.includeGeometry && (this._removeGeometry = false === e2.includeGeometry);
  }
  _maxQueryRate() {
    return G;
  }
  async loadImpl() {
    return true === this._layer.loaded ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  get gdbVersion() {
    return "";
  }
  _initialiseFeatureSet() {
    if (this.spatialReference ??= this._layer.spatialReference, this.geometryType = this._layer.geometryType ?? "", this.fields = this._layer.fields.slice(), null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;
    else {
      const e2 = new Set(this._overrideFields.map((e3) => e3.toLowerCase()));
      this.fields = this.fields.filter(({ type: t3, name: r3 }) => "oid" === t3 || this._layer.objectIdField === r3 || e2.has(r3.toLowerCase())), this._overrideFields = this.fields.map(({ name: e3 }) => e3);
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e2 of this.fields) "global-id" === e2.type && (this.globalIdField = e2.name);
    this._databaseType = 0, this.hasZ = true === this._layer.capabilities?.data?.supportsZ, this.hasM = true === this._layer.capabilities?.data?.supportsM, this.subtypeField = ("subtypeField" in this._layer ? this._layer.subtypeField : null) ?? "", this.subtypes = "subtypes" in this._layer ? this._layer.subtypes : null, this.typeIdField = ("typeIdField" in this._layer ? this._layer.typeIdField : null) ?? "", this.types = "types" in this._layer ? this._layer.types : null;
  }
  isTable() {
    return this._forceIsTable || "isTable" in this._layer && this._layer.isTable || "table" === this._layer.type || !this._layer.geometryType;
  }
  async _queryAll() {
    return (await this.query({ abortSignal: t })).features;
  }
  _queryLayerFeaturesJSON(e2) {
    return "queryFeaturesJSON" in this._layer ? this._layer.queryFeaturesJSON(e2) : this._layer.source.queryFeaturesJSON(e2);
  }
  async query(e2) {
    await this._ensureLoaded();
    let r3 = "", i2 = false;
    if (null != e2.orderBy && (r3 = e2.orderBy.constructClause(), i2 = true), this.isTable() && null != e2.spatialFilter) return I2;
    const l2 = this._createQuery();
    return l2.where = o(l2.where, null == e2.where ? null == e2.spatialFilter ? "1=1" : "" : l(e2.where, 0)), null != e2.spatialFilter && (l2.spatialRelationship = this._makeRelationshipEnum(e2.spatialFilter.relation), l2.relationParameter = this._makeRelationshipParam(e2.spatialFilter.relation), l2.geometry = e2.spatialFilter.geometry), l2.outSpatialReference = this.spatialReference, l2.orderByFields = "" !== r3 ? r3.split(",") : null, { filterApplied: true, spatialFilterApplied: true, ordered: i2, features: async function* () {
      const r4 = await this._queryLayerFeaturesJSON(l2);
      s4(e2.abortSignal);
      for (const e3 of M(r4.features, this._maxQueryRate())) F(e3, r4.spatialReference ?? this.spatialReference.toJSON()), yield e3;
    }.apply(this) };
  }
  async queryStat(e2) {
    return { calculated: false };
  }
  async canQueryAggregate(e2) {
    return false;
  }
  async queryAggregate(e2) {
    throw new r2("NeverReach");
  }
  _createQuery() {
    const e2 = this._layer.createQuery();
    return e2.returnZ = this.hasZ, e2.returnM = this.hasM, e2.outFields = this._overrideFields ?? ["*"], e2.returnGeometry = !this._removeGeometry, e2;
  }
  _makeRelationshipEnum(e2) {
    if (e2.includes("esriSpatialRelRelation")) return "relation";
    switch (e2) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e2;
  }
  _makeRelationshipParam(e2) {
    return e2.includes("esriSpatialRelRelation") ? e2.split(":")[1] : "";
  }
  relationshipMetadata() {
    return [];
  }
  nativeCapabilities() {
    return { title: this._layer.title ?? "", canQueryRelated: false, source: this, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: true };
  }
  static create(e2, t3) {
    let r3 = e2.layerDefinition.objectIdField;
    const i2 = e2.layerDefinition.typeIdField ?? "", s5 = [];
    if (e2.layerDefinition.types) for (const u of e2.layerDefinition.types) s5.push(n2.fromJSON(u));
    let a2 = e2.layerDefinition.geometryType;
    void 0 === a2 && (a2 = e2.featureSet.geometryType || "");
    let l2 = e2.featureSet.features;
    if (!r3) {
      let t4 = false;
      for (const i3 of e2.layerDefinition.fields) if ("oid" === i3.type || "esriFieldTypeOID" === i3.type) {
        r3 = i3.name, t4 = true;
        break;
      }
      if (false === t4) {
        let t5 = "FID", i3 = true, s6 = 0;
        for (; i3; ) {
          let r4 = true;
          for (const i4 of e2.layerDefinition.fields) if (i4.name === t5) {
            r4 = false;
            break;
          }
          true === r4 ? i3 = false : (s6++, t5 = "FID" + s6.toString());
        }
        e2.layerDefinition.fields.push({ type: "esriFieldTypeOID", name: t5, alias: t5 });
        const a3 = [];
        for (let r4 = 0; r4 < l2.length; r4++) a3.push({ geometry: e2.featureSet.features[r4].geometry, attributes: __spreadProps(__spreadValues({}, e2.featureSet.features[r4].attributes), { [t5]: r4 }) });
        l2 = a3, r3 = t5;
      }
    }
    const n3 = [];
    for (const u of e2.layerDefinition.fields) u instanceof m ? n3.push(u) : n3.push(m.fromJSON(u));
    let o2 = a2;
    switch (o2 || (o2 = ""), o2) {
      case "esriGeometryPoint":
        o2 = "point";
        break;
      case "esriGeometryPolyline":
        o2 = "polyline";
        break;
      case "esriGeometryPolygon":
        o2 = "polygon";
        break;
      case "esriGeometryEnvelope":
        o2 = "extent";
        break;
      case "esriGeometryMultipoint":
        o2 = "multipoint";
        break;
      case "":
      case "esriGeometryNull":
        o2 = "esriGeometryNull";
    }
    if ("esriGeometryNull" !== o2) {
      const e3 = t3.toJSON();
      for (const t4 of l2) t4.geometry && t4.geometry instanceof s3 == false && (t4.geometry.type = o2, void 0 === t4.geometry.spatialReference && (t4.geometry.spatialReference = e3));
    } else for (const u of l2) u.geometry && (u.geometry = null);
    const y = { outFields: ["*"], source: l2, fields: n3, hasZ: true === e2.layerDefinition.hasZ || true === e2.featureSet.hasZ, hasM: true === e2.layerDefinition.hasM || true === e2.featureSet.hasM, types: s5, typeIdField: i2, objectIdField: r3, spatialReference: t3 }, f2 = "esriGeometryNull" === o2 || null === o2;
    f2 || (y.geometryType = o2);
    const m3 = new Ye(y);
    return e2.layerDefinition.subtypeField && e2.layerDefinition.subtypes && m3.read({ subtypes: e2.layerDefinition.subtypes, subtypeField: e2.layerDefinition.subtypeField }), new _c({ layer: m3, spatialReference: t3, isTable: f2 });
  }
  async queryAttachments() {
    return [];
  }
  async getFeatureByObjectId(e2) {
    const t3 = this._createQuery();
    t3.where = this.objectIdField + "=" + e2.toString();
    const r3 = await this._queryLayerFeaturesJSON(t3);
    return 1 === r3.features.length ? (F(r3.features, r3.spatialReference ?? this.spatialReference.toJSON()), r3.features[0]) : null;
  }
  serviceUrl() {
    return "";
  }
  async getOwningSystemUrl() {
    return "";
  }
  async getIdentityUser() {
    return "";
  }
  get preferredTimeZone() {
    return "preferredTimeZone" in this._layer ? this._layer.preferredTimeZone : null;
  }
  get dateFieldsTimeZone() {
    return "dateFieldsTimeZone" in this._layer ? this._layer.dateFieldsTimeZone : null;
  }
  get datesInUnknownTimezone() {
    return "datesInUnknownTimezone" in this._layer && this._layer.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return "editFieldsInfo" in this._layer ? this._layer.editFieldsInfo : null;
  }
  get timeInfo() {
    return "timeInfo" in this._layer ? this._layer.timeInfo : null;
  }
  async getFeatureSetInfo() {
    const e2 = this._layer.title && this._layer.parent;
    return { layerId: null, layerName: null, itemId: null, serviceLayerUrl: null, webMapLayerId: e2 ? this._layer.id ?? null : null, webMapLayerTitle: e2 ? this._layer.title ?? null : null, className: null, objectClassId: null };
  }
};

// node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerRelated.js
var d2 = class extends S {
  constructor(e2) {
    super(), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerRelated", this._removeGeometry = false, this._overrideFields = null, this._maxProcessing = 1e3, this._layer = e2.layer, e2.spatialReference && (this.spatialReference = e2.spatialReference), this._findObjectId = e2.objectId, this.relationship = e2.relationship, this._relatedLayer = e2.relatedLayer, void 0 !== e2.outFields && (this._overrideFields = e2.outFields), void 0 !== e2.includeGeometry && (this._removeGeometry = false === e2.includeGeometry);
  }
  _maxQueryRate() {
    return G;
  }
  async loadImpl() {
    return await Promise.all([this._layer.load(), this._relatedLayer.load()]), this._initialiseFeatureSet(), this;
  }
  nativeCapabilities() {
    return this._relatedLayer.nativeCapabilities();
  }
  _initialiseFeatureSet() {
    if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._relatedLayer.geometryType, this.fields = this._relatedLayer.fields.slice(), this.hasZ = this._relatedLayer.hasZ, this.hasM = this._relatedLayer.hasM, null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;
    else {
      const e3 = new Set(this._overrideFields.map((e4) => e4.toLowerCase()));
      this.fields = this.fields.filter(({ type: t3, name: r3 }) => "oid" === t3 || e3.has(r3.toLowerCase())), this._overrideFields = this.fields.map(({ name: e4 }) => e4);
    }
    const e2 = this._layer.nativeCapabilities();
    e2 && (this._databaseType = e2.databaseType), this.objectIdField = this._relatedLayer.objectIdField, this.globalIdField = this._relatedLayer.globalIdField, this.hasM = this._relatedLayer.supportsM, this.hasZ = this._relatedLayer.supportsZ, this.typeIdField = this._relatedLayer.typeIdField, this.types = this._relatedLayer.types, this.subtypeField = this._relatedLayer.subtypeField, this.subtypes = this._relatedLayer.subtypes;
  }
  async databaseType() {
    return this._databaseType = await this._relatedLayer.databaseType(), this._databaseType;
  }
  isTable() {
    return this._relatedLayer.isTable();
  }
  async _queryAll() {
    return (await this.query({ abortSignal: t })).features;
  }
  async query(e2) {
    if (await this._ensureLoaded(), await this.databaseType(), this.isTable() && null != e2.spatialFilter) return I2;
    const r3 = this._layer.nativeCapabilities();
    if (false === r3.canQueryRelated) return I2;
    if (r3.capabilities?.queryRelated.supportsPagination) return this._queryUsingPaging(r3.source, e2);
    let i2 = "", s5 = false;
    null != e2.orderBy && true === r3.capabilities?.queryRelated.supportsOrderBy && (i2 = e2.orderBy.constructClause(), s5 = true);
    const d3 = new d();
    return d3.objectIds = [this._findObjectId], d3.outFields = null !== this._overrideFields ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((e3) => e3.name) : ["*"]), d3.relationshipId = this.relationship.id, d3.where = "1=1", d3.returnGeometry = true !== this._removeGeometry, d3.outSpatialReference = this.spatialReference, d3.orderByFields = "" !== i2 ? i2.split(",") : null, { filterApplied: null == e2.where, spatialFilterApplied: null == e2.spatialFilter, ordered: s5, features: async function* () {
      const i3 = await r3.source.queryRelatedFeatures(d3);
      s4(e2.abortSignal), yield i3[this._findObjectId] ? i3[this._findObjectId].features : [];
    }.apply(this) };
  }
  async _queryUsingPaging(e2, t3) {
    let r3 = "", i2 = false;
    const a2 = this._layer.nativeCapabilities();
    null != t3.orderBy && true === a2.capabilities?.queryRelated.supportsOrderBy && (r3 = t3.orderBy.constructClause(), i2 = true), await this.databaseType();
    let s5 = this._maxQueryRate();
    const d3 = a2.capabilities?.query.maxRecordCount;
    null != d3 && d3 < s5 && (s5 = d3);
    const n3 = new d();
    return n3.relationshipId = this.relationship.id, n3.objectIds = [this._findObjectId], n3.outFields = null !== this._overrideFields ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((e3) => e3.name) : ["*"]), n3.where = "1=1", n3.orderByFields = "" !== r3 ? r3.split(",") : null, n3.returnGeometry = true !== this._removeGeometry, n3.outSpatialReference = this.spatialReference, { filterApplied: null == t3.where, spatialFilterApplied: null == t3.spatialFilter, ordered: i2, features: this._queryPaginated(e2, n3, s5, t3.abortSignal) };
  }
  async *_queryPaginated(e2, r3, i2, a2) {
    let s5;
    r3.num = i2, r3.start = 0;
    do {
      s4(a2);
      s5 = (await e2.queryRelatedFeatures(r3))[this._findObjectId] ?? { exceededTransferLimit: false, features: [] }, yield s5.features, r3.start += i2;
    } while (true === s5.exceededTransferLimit);
  }
  async queryStat(e2) {
    return { calculated: false };
  }
  async canQueryAggregate(e2) {
    return false;
  }
  async queryAggregate(e2) {
    throw new r2("NeverReach");
  }
  _fieldsIncludingObjectId(e2) {
    if (null === e2) return [this.objectIdField];
    const t3 = e2.slice();
    if (t3.includes("*")) return t3;
    let r3 = false;
    for (const i2 of t3) if (i2.toUpperCase() === this.objectIdField.toUpperCase()) {
      r3 = true;
      break;
    }
    return r3 || t3.push(this.objectIdField), t3;
  }
  get gdbVersion() {
    return this._relatedLayer.gdbVersion;
  }
  relationshipMetadata() {
    return this._relatedLayer.relationshipMetadata();
  }
  serviceUrl() {
    return this._relatedLayer.serviceUrl();
  }
  queryAttachments(e2, t3, r3, i2, a2) {
    return this._relatedLayer.queryAttachments(e2, t3, r3, i2, a2);
  }
  getFeatureByObjectId(e2, t3) {
    return this._relatedLayer.getFeatureByObjectId(e2, t3);
  }
  getOwningSystemUrl() {
    return this._relatedLayer.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._relatedLayer.getIdentityUser();
  }
  getDataSourceFeatureSet() {
    return this._relatedLayer;
  }
  get preferredTimeZone() {
    return this._relatedLayer.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._relatedLayer.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._relatedLayer.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._relatedLayer.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._relatedLayer.timeInfo ?? null;
  }
  getFeatureSetInfo() {
    return this._relatedLayer.getFeatureSetInfo();
  }
};

// node_modules/@arcgis/core/arcade/featureSetUtils.js
function w3() {
  null === a.applicationCache && (a.applicationCache = new a());
}
async function I3(e2, t3, a2) {
  if (a.applicationCache) {
    const a3 = a.applicationCache.getLayerInfo(e2);
    if (a3) {
      const r3 = await a3;
      return new Ye({ url: e2, outFields: t3, sourceJSON: r3 });
    }
    const n3 = new Ye({ url: e2, outFields: t3 }), l2 = (async () => (await n3.load(), n3.sourceJSON))();
    if (a.applicationCache) {
      a.applicationCache.setLayerInfo(e2, l2);
      try {
        return await l2, n3;
      } catch (r3) {
        throw a.applicationCache.clearLayerInfo(e2), r3;
      }
    }
    return await l2, n3;
  }
  if (null != a2) {
    const r3 = a2.getCachedLayerMetadata(e2);
    if (r3) {
      const a3 = await r3;
      return new Ye({ url: e2, outFields: t3, sourceJSON: a3 });
    }
    const l2 = new Ye({ url: e2, outFields: t3 }), s5 = (async () => (await l2.load(), l2.sourceJSON))();
    a2.setCachedLayerMetadata(e2, s5);
    try {
      return await s5, l2;
    } catch (n3) {
      throw a2.removeCachedLayerMetadata(e2, s5), n3;
    }
  }
  return new Ye({ url: e2, outFields: t3 });
}
async function L(e2, t3, a2, r3, n3, l2 = null) {
  return S2(await I3(e2, ["*"], n3), t3, a2, r3, n3, l2);
}
function S2(e2, t3 = null, a2 = null, r3 = true, i2 = null, o2 = null) {
  switch (e2.type) {
    case "catalog-footprint":
      return S2(e2.parent, t3, a2, r3, i2, o2);
    case "subtype-sublayer": {
      const l2 = S2(e2.parent, t3, a2, r3, i2, o2);
      return new i({ parentfeatureset: l2, whereclause: M2.create(e2.parent.subtypeField + "=" + e2.subtypeCode.toString(), { fieldsIndex: e2.parent.fieldsIndex, timeZone: l2.dateFieldsTimeZoneDefaultUTC }) });
    }
    case "csv":
    case "geojson":
    case "knowledge-graph-sublayer":
    case "wfs":
      return new c({ layer: e2, spatialReference: t3, outFields: a2, includeGeometry: r3, lrucache: i2, interceptor: o2 });
    case "catalog":
    case "feature":
    case "oriented-imagery":
    case "subtype-group": {
      const n3 = { layer: e2, spatialReference: t3, outFields: a2, includeGeometry: r3, lrucache: i2, interceptor: o2 };
      return !e2.url && e2.source ? new c(n3) : new v2(n3);
    }
    default:
      throw new Error(`Unsupported layer type: ${e2.type}`);
  }
}
async function _(t3) {
  if (null !== a.applicationCache) {
    const e2 = a.applicationCache.getLayerInfo(t3);
    if (null !== e2) return e2;
  }
  const a2 = (async () => {
    const a3 = await f(t3, { responseType: "json", query: { f: "json" } });
    return a3.data ? a3.data : null;
  })();
  if (null !== a.applicationCache) {
    a.applicationCache.setLayerInfo(t3, a2);
    try {
      return await a2;
    } catch (r3) {
      throw a.applicationCache.clearLayerInfo(t3), r3;
    }
  }
  return a2;
}
async function C(t3, a2) {
  const r3 = "QUERYDATAELEMTS:" + a2.toString() + ":" + t3;
  if (null !== a.applicationCache) {
    const e2 = a.applicationCache.getLayerInfo(r3);
    if (null !== e2) return e2;
  }
  const n3 = (async () => {
    const r4 = await f(t3 + "/queryDataElements", { method: "post", responseType: "json", query: { layers: JSON.stringify([a2.toString()]), f: "json" } });
    if (r4.data) {
      const e2 = r4.data;
      if (e2.layerDataElements?.[0]) return e2.layerDataElements[0];
    }
    throw new r2("DataElementsNotFound");
  })();
  if (null !== a.applicationCache) {
    a.applicationCache.setLayerInfo(r3, n3);
    try {
      return await n3;
    } catch (l2) {
      throw a.applicationCache.clearLayerInfo(r3), l2;
    }
  }
  return n3;
}
async function k2(t3, a2) {
  if (null !== a.applicationCache) {
    const e2 = a.applicationCache.getLayerInfo(t3);
    if (null !== e2) return e2;
  }
  if (null != a2) {
    const e2 = a2.getCachedServiceMetadata(t3);
    if (null != e2) return e2;
  }
  const r3 = (async () => {
    const a3 = await f(t3, { responseType: "json", query: { f: "json" }, authMode: "no-prompt" });
    if (a3.data) {
      const e2 = a3.data;
      return e2.layers || (e2.layers = []), e2.tables || (e2.tables = []), e2;
    }
    return { layers: [], tables: [] };
  })();
  if (null !== a.applicationCache) {
    a.applicationCache.setLayerInfo(t3, r3);
    try {
      return await r3;
    } catch (n3) {
      throw a.applicationCache.clearLayerInfo(t3), n3;
    }
  }
  if (null != a2) {
    a2.setCachedServiceMetadata(t3, r3);
    try {
      return await r3;
    } catch (l2) {
      throw a2.removeCachedServiceMetadata(t3, r3), l2;
    }
  }
  return r3;
}
async function g(e2, t3, a2) {
  const r3 = { metadata: null, networkId: -1, unVersion: 3, terminals: [], layerIdLookup: /* @__PURE__ */ new Map(), sourceIdLookup: /* @__PURE__ */ new Map(), queryelem: null, layerNameLkp: {}, lkp: null }, l2 = await k2(e2, null);
  if (r3.metadata = l2, void 0 !== l2.controllerDatasetLayers?.utilityNetworkLayerId && null !== l2.controllerDatasetLayers.utilityNetworkLayerId) {
    if (l2.layers) for (const e3 of l2.layers) r3.layerNameLkp[e3.id] = e3.name;
    if (l2.tables) for (const e3 of l2.tables) r3.layerNameLkp[e3.id] = e3.name;
    const s5 = l2.controllerDatasetLayers.utilityNetworkLayerId;
    r3.networkId = s5;
    const i2 = await C(e2, s5);
    if (i2) {
      r3.queryelem = i2, r3.queryelem?.dataElement && void 0 !== r3.queryelem.dataElement.schemaGeneration && (r3.unVersion = r3.queryelem.dataElement.schemaGeneration), r3.lkp = {}, r3.queryelem.dataElement.domainNetworks || (r3.queryelem.dataElement.domainNetworks = []);
      for (const e3 of r3.queryelem.dataElement.domainNetworks) {
        for (const t4 of e3.edgeSources ?? []) {
          const e4 = { layerId: t4.layerId, sourceId: t4.sourceId, className: r3.layerNameLkp[t4.layerId] ?? null };
          r3.layerIdLookup.set(e4.layerId, e4), r3.sourceIdLookup.set(e4.sourceId, e4), e4.className && (r3.lkp[e4.className] = e4);
        }
        for (const t4 of e3.junctionSources ?? []) {
          const e4 = { layerId: t4.layerId, sourceId: t4.sourceId, className: r3.layerNameLkp[t4.layerId] ?? null };
          r3.layerIdLookup.set(e4.layerId, e4), r3.sourceIdLookup.set(e4.sourceId, e4), e4.className && (r3.lkp[e4.className] = e4);
        }
      }
      if (r3.queryelem.dataElement.terminalConfigurations) for (const e3 of r3.queryelem.dataElement.terminalConfigurations) for (const t4 of e3.terminals) r3.terminals.push({ terminalId: t4.terminalId, terminalName: t4.terminalName });
      const l3 = await _(e2 + "/" + s5);
      if (void 0 !== l3.systemLayers?.associationsTableId && null !== l3.systemLayers.associationsTableId) {
        let s6 = null;
        if (a2 && r3.unVersion < 8) {
          const a3 = [];
          r3.unVersion >= 4 && (a3.push("STATUS"), a3.push("PERCENTALONG")), s6 = await L(e2 + "/" + l3.systemLayers.associationsTableId, t3, ["OBJECTID", "FROMNETWORKSOURCEID", "TONETWORKSOURCEID", "FROMGLOBALID", "TOGLOBALID", "TOTERMINALID", "FROMTERMINALID", "ASSOCIATIONTYPE", "ISCONTENTVISIBLE", "GLOBALID", ...a3], false, null, null), await s6.load(), r3.unVersion >= 4 && (s6 = new i({ parentfeatureset: s6, whereclause: M2.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63)", { fieldsIndex: s6.getFieldsIndex(), timeZone: s6.dateFieldsTimeZoneDefaultUTC }) }), await s6.load());
        }
        return { lkp: r3.lkp, associations: s6, unVersion: r3.unVersion, terminals: r3.terminals, layerIdLookup: r3.layerIdLookup, sourceIdLookup: r3.sourceIdLookup };
      }
      return { associations: null, unVersion: r3.unVersion, lkp: null, terminals: [], layerIdLookup: /* @__PURE__ */ new Map(), sourceIdLookup: /* @__PURE__ */ new Map() };
    }
    return { associations: null, unVersion: r3.unVersion, lkp: null, terminals: [], layerIdLookup: /* @__PURE__ */ new Map(), sourceIdLookup: /* @__PURE__ */ new Map() };
  }
  return { associations: null, unVersion: r3.unVersion, lkp: null, terminals: [], layerIdLookup: /* @__PURE__ */ new Map(), sourceIdLookup: /* @__PURE__ */ new Map() };
}
async function F2(e2, t3, a2, r3 = null, n3 = null, l2 = true, s5 = null, o2 = null) {
  let u = e2.serviceUrl();
  if (!u) return null;
  u = u.endsWith("/") ? u + t3.relatedTableId.toString() : u + "/" + t3.relatedTableId.toString();
  const c2 = await L(u, r3, n3, l2, s5, o2);
  return new d2({ layer: e2, relatedLayer: c2, relationship: t3, objectId: a2, spatialReference: r3, outFields: n3, includeGeometry: l2, lrucache: s5, interceptor: o2 });
}
var N = class extends e {
  constructor(e2, t3 = null, a2 = null, r3 = null) {
    super(), this._map = e2, this._overrideSpatialReference = t3, this._lrucache = a2, this._interceptor = r3, this._instantLayers = [];
  }
  _makeAndAddFeatureSet(e2, t3 = true, a2 = null) {
    const r3 = S2(e2, this._overrideSpatialReference, null === a2 ? ["*"] : a2, t3, this._lrucache, this._interceptor);
    return this._instantLayers.push({ featureset: r3, opitem: e2, includeGeometry: t3, outFields: JSON.stringify(a2) }), r3;
  }
  async featureSetByName(e2, t3 = true, a2 = null) {
    if (m2(this._map) && !this._map.loaded) return await this._map.load(), this.featureSetByName(e2, t3, a2);
    null === a2 && (a2 = ["*"]), a2 = (a2 = a2.slice()).sort();
    const r3 = JSON.stringify(a2);
    for (let l2 = 0; l2 < this._instantLayers.length; l2++) {
      const a3 = this._instantLayers[l2];
      if (a3.opitem.title === e2 && a3.includeGeometry === t3 && a3.outFields === r3) return this._instantLayers[l2].featureset;
    }
    const n3 = this._map.allLayers.find((t4) => M3(t4) && t4.title === e2);
    if (null != n3) return this._makeAndAddFeatureSet(n3, t3, a2);
    if (this._map.allTables) {
      const r4 = this._map.allTables.find((t4) => M3(t4) && t4.title === e2);
      if (null != r4) return this._makeAndAddFeatureSet(r4, t3, a2);
    }
    return null;
  }
  async featureSetById(e2, t3 = true, a2 = ["*"]) {
    if (m2(this._map) && !this._map.loaded) return await this._map.load(), this.featureSetById(e2, t3, a2);
    null === a2 && (a2 = ["*"]), a2 = (a2 = a2.slice()).sort();
    const r3 = JSON.stringify(a2);
    for (let l2 = 0; l2 < this._instantLayers.length; l2++) {
      const a3 = this._instantLayers[l2];
      if (a3.opitem.id === e2 && a3.includeGeometry === t3 && a3.outFields === r3) return this._instantLayers[l2].featureset;
    }
    const n3 = this._map.allLayers.find((t4) => M3(t4) && t4.id === e2);
    if (n3) return this._makeAndAddFeatureSet(n3, t3, a2);
    if (this._map.allTables) {
      const r4 = this._map.allTables.find((t4) => M3(t4) && t4.id === e2);
      if (null != r4) return this._makeAndAddFeatureSet(r4, t3, a2);
    }
    return null;
  }
};
var T2 = class _T extends e {
  constructor(e2, t3 = null, a2 = null, r3 = null) {
    super(), this._url = e2, this._overrideSpatialReference = t3, this._lrucache = a2, this._interceptor = r3, this.metadata = null, this._instantLayers = [];
  }
  get url() {
    return this._url;
  }
  _makeAndAddFeatureSet(e2, t3 = true, a2 = null) {
    const r3 = S2(e2, this._overrideSpatialReference, null === a2 ? ["*"] : a2, t3, this._lrucache);
    return this._instantLayers.push({ featureset: r3, opitem: e2, includeGeometry: t3, outFields: JSON.stringify(a2) }), r3;
  }
  async _loadMetaData() {
    const e2 = await k2(this._url, this._lrucache);
    return this.metadata = e2, e2;
  }
  load() {
    return this._loadMetaData();
  }
  clone() {
    return new _T(this._url, this._overrideSpatialReference, this._lrucache, this._interceptor);
  }
  async featureSetByName(e2, t3 = true, a2 = null) {
    null === a2 && (a2 = ["*"]), a2 = (a2 = a2.slice()).sort();
    const r3 = JSON.stringify(a2);
    for (let s5 = 0; s5 < this._instantLayers.length; s5++) {
      const a3 = this._instantLayers[s5];
      if (a3.opitem.title === e2 && a3.includeGeometry === t3 && a3.outFields === r3) return this._instantLayers[s5].featureset;
    }
    const n3 = await this._loadMetaData();
    let l2 = null;
    for (const s5 of n3.layers ?? []) s5.name === e2 && (l2 = s5);
    if (!l2) for (const s5 of n3.tables ?? []) s5.name === e2 && (l2 = s5);
    if (l2) {
      const e3 = await I3(this._url + "/" + l2.id, ["*"], this._lrucache);
      return this._makeAndAddFeatureSet(e3, t3, a2);
    }
    return null;
  }
  async featureSetById(e2, t3 = true, a2 = ["*"]) {
    null === a2 && (a2 = ["*"]), a2 = (a2 = a2.slice()).sort();
    const r3 = JSON.stringify(a2);
    e2 = null != e2 ? e2.toString() : "";
    for (let s5 = 0; s5 < this._instantLayers.length; s5++) {
      const a3 = this._instantLayers[s5];
      if (a3.opitem.id === e2 && a3.includeGeometry === t3 && a3.outFields === r3) return this._instantLayers[s5].featureset;
    }
    const n3 = await this._loadMetaData();
    let l2 = null;
    for (const s5 of n3.layers ?? []) null !== s5.id && void 0 !== s5.id && s5.id.toString() === e2 && (l2 = s5);
    if (!l2) for (const s5 of n3.tables ?? []) null !== s5.id && void 0 !== s5.id && s5.id.toString() === e2 && (l2 = s5);
    if (l2) {
      const e3 = await I3(this._url + "/" + l2.id, ["*"], this._lrucache);
      return this._makeAndAddFeatureSet(e3, t3, a2);
    }
    return null;
  }
};
function O(e2, t3, a2 = null, r3 = null) {
  return new N(e2, t3, a2, r3);
}
function A(e2, t3, a2 = null, r3 = null) {
  return new T2(e2, t3, a2, r3);
}
function E(e2, t3, n3, l2, s5) {
  if (null === e2) return null;
  if (B(e2)) {
    switch (t3) {
      case "datasource":
        return e2.getDataSourceFeatureSet();
      case "parent":
        return e2;
      case "root":
        return e2.getRootFeatureSet();
    }
    return null;
  }
  if (e2 instanceof b && M3(e2)) {
    switch (t3) {
      case "datasource":
        return S2(e2, s5, "outFields" in e2 ? e2.outFields : null, true, n3, l2).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return S2(e2, s5, "outFields" in e2 ? e2.outFields : null, true, n3, l2);
    }
    return null;
  }
  if (qe(e2)) {
    switch (t3) {
      case "datasource":
        return S2(e2.parent, s5, e2.parent.outFields, true, n3, l2).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return S2(e2, s5, e2.parent.outFields, true, n3, l2);
    }
    return null;
  }
  return null;
}
async function M4(e2, t3, a2, r3, n3, l2, s5, i2 = null) {
  if (a.applicationCache) {
    const u2 = a.applicationCache.getLayerInfo(e2 + ":" + l2.url);
    if (u2) return D(await u2, t3, a2, r3, n3, s5, i2);
  }
  if (null != s5) {
    const o2 = s5.getCachedPortalItem(l2.url, e2);
    if (null != o2) return await D(await o2, t3, a2, r3, n3, s5, i2);
  }
  const u = new k({ id: e2, portal: l2 }).load();
  a.applicationCache ? a.applicationCache.setLayerInfo(e2 + ":" + l2.url, u) : null != s5 && s5.setCachedPortalItem(l2.url, e2, u);
  try {
    return await D(await u, t3, a2, r3, n3, s5, i2);
  } catch (c2) {
    throw a.applicationCache && a.applicationCache.clearLayerInfo(e2 + ":" + l2.url), null != s5 && s5.removeCachedPortalItem(l2.url, e2, u), c2;
  }
}
async function D(e2, t3, a2, r3, n3, l2, s5) {
  let i2;
  if ("Feature Service" === e2.type || "Map Service" === e2.type) i2 = await I3(I(e2.url ?? "") + "/" + t3, ["*"], l2);
  else {
    if (t3) throw new Error(`layerId=${t3} provided for ${e2.type} item`);
    if (null != l2) {
      const t4 = l2.getCachedPortalItemLayer(e2.portal.url, e2.id);
      if (null != t4) i2 = await t4;
      else {
        const t5 = b.fromPortalItem(e2);
        l2.setCachedPortalItemLayer(e2.portal.url, e2.id, t5);
        try {
          i2 = await t5;
        } catch (o2) {
          throw l2.removeCachedPortalItemLayer(e2.portal.url, e2.id, t5), o2;
        }
      }
    } else i2 = await b.fromPortalItem(e2);
  }
  return S2(i2, a2, r3, n3, l2, s5);
}

export {
  i,
  c,
  w3 as w,
  L,
  S2 as S,
  g,
  F2 as F,
  O,
  A,
  E,
  M4 as M
};
//# sourceMappingURL=chunk-MOBM77JI.js.map
