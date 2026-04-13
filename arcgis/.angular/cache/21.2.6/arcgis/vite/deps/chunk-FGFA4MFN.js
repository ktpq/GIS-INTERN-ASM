import {
  R
} from "./chunk-5XBFAIUN.js";
import {
  c
} from "./chunk-FQUUUHLI.js";
import {
  o
} from "./chunk-BQWO5RXV.js";
import {
  m
} from "./chunk-4QSSUPBC.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import {
  has
} from "./chunk-IDI4VM7T.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/graphics/data/FeatureIdInfo.js
function* e(e2) {
  switch (e2.type) {
    case "object-id":
    case "unique-id-simple":
      return void (yield e2.fieldName);
    case "unique-id-composite":
      return void (yield* e2.fieldNames);
  }
}

// node_modules/@arcgis/core/views/2d/layers/features/sources/FeatureSourceQueryInfo.js
var s = 4;
function o2(e2) {
  switch (e2.type) {
    case "object-id":
    case "unique-id-simple":
      return `${e2.fieldName} ASC`;
    case "unique-id-composite":
      return `${e2.fieldNames.join(",")} ASC`;
  }
}
function n(e2, r, a) {
  const s2 = o2(a.featureIdInfo);
  return { returnCentroid: "esriGeometryPolygon" === a.serviceGeometryType && !e2.queryMetadata.supportsCentroidOnDegeneratedQuantizedGeometry && !e2.queryMetadata.supportsDegeneratedQuantizedGeometry, returnGeometry: true, timeReferenceUnknownClient: a.timeReferenceUnknownClient ?? void 0, outSpatialReference: S.fromJSON(e2.outSpatialReference), orderByFields: "memory" === e2.type ? [] : [s2], where: r.definitionExpression ?? "1=1", outFields: r.availableFields, multipatchOption: "esriGeometryMultiPatch" === a.serviceGeometryType ? "xyFootprint" : null, gdbVersion: r.gdbVersion, historicMoment: r.historicMoment ? new Date(r.historicMoment) : null, timeExtent: r.timeExtent ? m.fromJSON(r.timeExtent) : null };
}
var u = class _u {
  static create(e2, t, r) {
    const a = t.queryScaleRanges, i = t.displayFilterInfo;
    return new _u(n(e2, t, r), i, a, r.subtypeField, t.customParameters, r.geometryType, e2.queryMetadata);
  }
  constructor(e2, t, r, a, i, s2, o3) {
    this._queryParams = e2, this._displayFilter = t, this._queryScaleRanges = r, this._subtypeField = a, this._customParameters = i, this._geometryType = s2, this._queryMetadata = o3;
  }
  getPageSize(e2) {
    if (null == this._queryMetadata) throw new Error("InternalError: Service does not support paged queries");
    const t = this._queryMetadata.supportsMaxRecordCountFactor ? s : null, r = ((e2 ? this._queryMetadata.tileMaxRecordCount : this._queryMetadata.maxRecordCount) ?? this._queryMetadata.maxRecordCount ?? 2e3) * (t ?? 1), a = has("featurelayer-query-max-page-size") ?? 8e3;
    return Math.min(a, r);
  }
  get objectIdsQueryPageSize() {
    return this._queryMetadata?.maxRecordCount ?? 2e3;
  }
  updateHistoricMoment(e2) {
    this._queryParams.historicMoment = e2;
  }
  updateFields(e2) {
    this._queryParams.outFields = e2;
  }
  createPatchFieldsQuery(e2, t, r) {
    if (!t.getSize()) return null;
    const a = e2.clone();
    if ("*" === this._queryParams.outFields[0]) {
      if ("*" === (a.outFields ?? [])[0]) return null;
      a.outFields = this._queryParams.outFields;
    } else {
      const e3 = new Set(this._queryParams.outFields), r2 = [];
      for (const a2 of e3) t.hasField(a2) || r2.push(a2);
      if (0 === r2.length) return null;
      a.outFields = r2;
    }
    a.returnGeometry = false, a.returnCentroid = false, a.quantizationParameters = null, a.cacheHint = true;
    const i = { inner: a, customParameters: this._customParameters };
    if (has("esri-tiles-debug") && null != r) {
      const e3 = r.chunkId.toString().replaceAll("/", ".");
      i.customParameters = i.customParameters ? __spreadProps(__spreadValues({}, i.customParameters), { chunkId: e3 }) : { chunkId: e3 };
    }
    return i;
  }
  createQuery(e2 = {}) {
    if (!this._queryParams) throw new Error("InternalError: queryInfo should be defined");
    return { inner: new R(__spreadValues(__spreadValues({}, this._queryParams), e2)), customParameters: this._customParameters };
  }
  createTileQuery(t, a) {
    if (null == this._queryMetadata) throw new Error("InternalError: Service does not support tile queries");
    const i = this.createQuery(a), o3 = i.inner;
    if (this._queryScaleRanges?.length) {
      const r = this._queryScaleRanges.filter((e2) => (!e2.minScale || e2.minScale >= t.maxScale) && (!e2.maxScale || e2.maxScale <= t.minScale)).map((e2) => e2.subtypeCode);
      if (r.length) {
        const t2 = `${this._subtypeField} IN (${r})`;
        o3.where = o(o3.where, t2);
      }
    }
    if (this._displayFilter && (o3.where = o(o3.where, c(this._displayFilter, t.minScale, t.maxScale))), o3.quantizationParameters = a.quantizationParameters ?? t.getQuantizationParameters(), o3.resultType = "tile", o3.geometry = t.hydratedExtent, this._queryMetadata.supportsQuantization ? "esriGeometryPolyline" === this._geometryType && (o3.maxAllowableOffset = t.resolution * has("feature-polyline-generalization-factor")) : "esriGeometryPolyline" !== this._geometryType && "esriGeometryPolygon" !== this._geometryType || (o3.maxAllowableOffset = t.resolution, "esriGeometryPolyline" === this._geometryType && (o3.maxAllowableOffset *= has("feature-polyline-generalization-factor"))), o3.defaultSpatialReferenceEnabled = this._queryMetadata.supportsDefaultSpatialReference, o3.compactGeometryEnabled = this._queryMetadata.supportsCompactGeometry, this._queryMetadata.supportsMaxRecordCountFactor && (o3.maxRecordCountFactor = s), has("esri-tiles-debug")) {
      const e2 = t.id.replaceAll("/", ".");
      i.customParameters = i.customParameters ? __spreadProps(__spreadValues({}, i.customParameters), { tileId: e2 }) : { tileId: e2 };
    }
    return i;
  }
  createPagedTileQuery(e2, t) {
    const r = this.getPageSize(true);
    return this.createTileQuery(e2, { start: r * t, num: r, returnExceededLimitFeatures: true });
  }
  createPagedQuery(e2, t) {
    const r = this.getPageSize(false);
    return this.createQuery({ start: r * e2, num: r, returnExceededLimitFeatures: true, maxRecordCountFactor: s, quantizationParameters: t, cacheHint: true });
  }
  createObjectIdsQuery(e2) {
    return this.createQuery({ objectIds: e2, outFields: ["*"] });
  }
};

export {
  u,
  e
};
//# sourceMappingURL=chunk-FGFA4MFN.js.map
