import {
  a as a2
} from "./chunk-F7TLI2GK.js";
import {
  s as s6,
  t as t3
} from "./chunk-47FCBABH.js";
import {
  p,
  s as s4,
  s2 as s5,
  t as t2
} from "./chunk-JWBU4JCL.js";
import {
  p as p2
} from "./chunk-4HZ75P6K.js";
import {
  e
} from "./chunk-NY4DWVPM.js";
import {
  g
} from "./chunk-H3GWORLU.js";
import {
  c as c2,
  i as i2,
  m as m2,
  n as n4,
  s as s3,
  t
} from "./chunk-7DXPO6B2.js";
import {
  P
} from "./chunk-CEHUBL44.js";
import {
  f as f2,
  u as u2
} from "./chunk-TUNGPGHU.js";
import {
  m as m3
} from "./chunk-BMYA7NZP.js";
import {
  j
} from "./chunk-V7SQTPST.js";
import {
  y3 as y
} from "./chunk-NNANCYKT.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import {
  _,
  s as s2
} from "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import {
  n as n3
} from "./chunk-LHBO6K5Y.js";
import {
  f2 as f,
  s2 as s
} from "./chunk-2OF3JE3F.js";
import {
  n as n2
} from "./chunk-5EUDKAG7.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c,
  l2 as l,
  m,
  o3,
  r3 as r2
} from "./chunk-LV7AMIAU.js";
import {
  i,
  o as o2
} from "./chunk-O4A47ZEM.js";
import {
  d,
  u3 as u,
  w
} from "./chunk-POW25PFR.js";
import {
  has,
  n2 as n,
  o,
  r3 as r
} from "./chunk-IDI4VM7T.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/geoprocessor/GPOptions.js
var l2;
var i3 = l2 = class extends b {
  constructor(e8) {
    super(e8), this.outSpatialReference = null, this.processExtent = null, this.processSpatialReference = null, this.returnColumnName = false, this.returnFeatureCollection = false, this.returnM = false, this.returnZ = false;
  }
  static from(e8) {
    return m(l2, e8);
  }
};
__decorate([a({ type: S })], i3.prototype, "outSpatialReference", void 0), __decorate([a({ type: z })], i3.prototype, "processExtent", void 0), __decorate([a({ type: S })], i3.prototype, "processSpatialReference", void 0), __decorate([a({ nonNullable: true })], i3.prototype, "returnColumnName", void 0), __decorate([a({ nonNullable: true })], i3.prototype, "returnFeatureCollection", void 0), __decorate([a({ nonNullable: true })], i3.prototype, "returnM", void 0), __decorate([a({ nonNullable: true })], i3.prototype, "returnZ", void 0), i3 = l2 = __decorate([c("esri.rest.geoprocessor.GPOptions")], i3);

// node_modules/@arcgis/core/rest/support/ArealUnit.js
var i4 = class extends n2 {
  constructor(r9) {
    super(r9), this.area = 0, this.units = null;
  }
};
__decorate([a({ json: { write: true } })], i4.prototype, "area", void 0), __decorate([r2(s6)], i4.prototype, "units", void 0), i4 = __decorate([c("esri.rest.support.ArealUnit")], i4);

// node_modules/@arcgis/core/rest/support/DataFile.js
var s7 = class extends n2 {
  constructor(t10) {
    super(t10), this.itemId = null, this.url = null;
  }
};
__decorate([a({ type: String, json: { read: { source: "itemID" }, write: { target: "itemID" } } })], s7.prototype, "itemId", void 0), __decorate([a({ type: String, json: { write: true } })], s7.prototype, "url", void 0), s7 = __decorate([c("esri.rest.support.DataFile")], s7);

// node_modules/@arcgis/core/rest/support/LinearUnit.js
var p3 = class extends n2 {
  constructor(o14) {
    super(o14), this.distance = 0, this.units = null;
  }
};
__decorate([a({ json: { write: true } })], p3.prototype, "distance", void 0), __decorate([r2(t3)], p3.prototype, "units", void 0), p3 = __decorate([c("esri.rest.support.LinearUnit")], p3);

// node_modules/@arcgis/core/rest/support/parameterValueUtils.js
var a3 = "multi-value-";
var t4 = new o2({ GPArealUnit: "areal-unit", GPBoolean: "boolean", GPComposite: "composite", GPDataFile: "data-file", GPDate: "date", GPDouble: "double", GPFeatureRecordSetLayer: "feature-record-set-layer", Field: "field", GPLinearUnit: "linear-unit", GPLong: "long", GPRasterData: "raster-data", GPRasterDataLayer: "raster-data-layer", GPRecordSet: "record-set", GPString: "string", GPTimeUnit: "time-unit", GPValueTable: "value-table", "GPMultiValue:GPArealUnit": `${a3}areal-unit`, "GPMultiValue:GPBoolean": `${a3}boolean`, "GPMultiValue:GPComposite": `${a3}composite`, "GPMultiValue:GPDataFile": `${a3}data-file`, "GPMultiValue:GPDate": `${a3}date`, "GPMultiValue:GPDouble": `${a3}double`, "GPMultiValue:GPFeatureRecordSetLayer": `${a3}feature-record-set-layer`, "GPMultiValue:Field": `${a3}field`, "GPMultiValue:GPLinearUnit": `${a3}linear-unit`, "GPMultiValue:GPLong": `${a3}long`, "GPMultiValue:GPRasterData": `${a3}raster-data`, "GPMultiValue:GPRasterDataLayer": `${a3}raster-data-layer`, "GPMultiValue:GPRecordSet": `${a3}record-set`, "GPMultiValue:GPString": `${a3}string`, "GPMultiValue:GPTimeUnit": `${a3}time-unit` });

// node_modules/@arcgis/core/rest/support/ParameterValue.js
var s8 = class extends n2 {
  constructor(r9) {
    super(r9), this.dataType = null, this.paramName = null, this.value = null;
  }
};
__decorate([r2(t4, { ignoreUnknown: false })], s8.prototype, "dataType", void 0), __decorate([a()], s8.prototype, "paramName", void 0), __decorate([a()], s8.prototype, "value", void 0), s8 = __decorate([c("esri.rest.support.ParameterValue")], s8);

// node_modules/@arcgis/core/rest/support/RasterData.js
var s9 = class extends n2 {
  constructor(r9) {
    super(r9), this.format = null, this.itemId = null, this.type = null, this.url = null;
  }
  readType(r9) {
    return "ImageService" === r9 ? "image-service" : null;
  }
};
__decorate([a()], s9.prototype, "format", void 0), __decorate([a({ json: { name: "itemID", write: true } })], s9.prototype, "itemId", void 0), __decorate([a()], s9.prototype, "type", void 0), __decorate([o3("type")], s9.prototype, "readType", null), __decorate([a({ json: { write: true } })], s9.prototype, "url", void 0), s9 = __decorate([c("esri.rest.support.RasterData")], s9);

// node_modules/@arcgis/core/rest/support/TimeUnit.js
var p4 = class extends n2 {
  constructor(o14) {
    super(o14), this.time = 0, this.units = null;
  }
};
__decorate([a({ json: { write: true } })], p4.prototype, "time", void 0), __decorate([r2(e)], p4.prototype, "units", void 0), p4 = __decorate([c("esri.rest.support.TimeUnit")], p4);

// node_modules/@arcgis/core/rest/geoprocessor/utils.js
async function d2(r9, a7, o14, s30, i9) {
  const u5 = {}, m8 = {}, p17 = [];
  return N(s30, p17, u5), P(p17).then((t10) => {
    const { outSpatialReference: p18, processExtent: c5, processSpatialReference: f7, returnColumnName: l5, returnFeatureCollection: S3, returnM: y8, returnZ: d7 } = o14, { path: N3 } = f2(r9);
    for (const e8 in u5) {
      const [r10, a8] = u5[e8];
      m8[e8] = t10.slice(r10, a8);
    }
    const j5 = p18 ? p18.wkid || p18 : null, J3 = f7 ? f7.wkid || f7 : null, O5 = "execute" === a7 ? { returnColumnName: l5 || void 0, returnFeatureCollection: S3 || void 0, returnM: y8 || void 0, returnZ: d7 || void 0 } : null, g7 = v(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, c5 ? { context: { extent: c5, outSR: j5, processSR: J3 } } : { "env:outSR": j5, "env:processSR": J3 }), s30), O5), { f: "json" }), null, m8), R4 = __spreadProps(__spreadValues({}, i9), { query: g7 });
    return f(`${N3}/${a7}`, R4);
  });
}
function N(e8, r9, t10) {
  for (const a7 in e8) {
    const o14 = e8[a7];
    if (o14 && "object" == typeof o14 && o14 instanceof g) {
      const { features: e9 } = o14;
      t10[a7] = [r9.length, r9.length + e9.length], e9.forEach((e10) => {
        r9.push(e10.geometry);
      });
    }
  }
}
async function j2(e8, t10) {
  switch (e8) {
    case "time-unit":
      return p4.fromJSON(t10);
    case "areal-unit":
      return i4.fromJSON(t10);
    case "boolean":
    case "double":
    case "long":
    case "string":
    case "value-table":
      return t10;
    case "date":
      return new Date(t10);
    case "data-file":
      return s7.fromJSON(t10);
    case "linear-unit":
      return p3.fromJSON(t10);
    case "feature-record-set-layer":
      if ("url" in t10) return s7.fromJSON(t10);
      if ("layerDefinition" in t10) {
        const e9 = new (0, (await import("./FeatureLayer-HEW23VGY.js")).default)(), { layerDefinition: a7, featureSet: o14 } = t10;
        return e9.read({ layerDefinition: a7, featureSet: o14 }, { origin: "portal-item" }), e9.spatialReference = S.fromJSON(o14.spatialReference ?? a7.spatialReference ?? a7.extent.spatialReference), e9;
      }
      return g.fromJSON(t10);
    case "record-set":
      return "url" in t10 ? s7.fromJSON(t10) : g.fromJSON(t10);
    case "raster-data":
    case "raster-data-layer":
      return "mapImage" in t10 ? p2.fromJSON(t10.mapImage) : s9.fromJSON(t10);
    case "field":
      return m2.fromJSON(t10);
  }
}
function J(e8) {
  return e8.startsWith(a3);
}
function O(e8) {
  return e8.replace(a3, "");
}
async function g2(e8, r9) {
  const t10 = O(e8), a7 = "composite" === t10 ? r9.map((e9) => j2(t4.fromJSON(e9.dataType), e9.value)) : r9.map((e9) => j2(t10, e9));
  return Promise.all(a7);
}
async function R(e8) {
  const r9 = t4.fromJSON(e8.dataType), { paramName: t10 } = e8, a7 = J(r9) ? await g2(r9, e8.value) : await j2(r9, e8.value);
  return new s8({ dataType: r9, paramName: t10, value: a7 });
}
function v(e8, r9, t10) {
  for (const a7 in e8) {
    const r10 = e8[a7];
    Array.isArray(r10) ? e8[a7] = JSON.stringify(r10.map((e9) => v({ item: e9 }, true).item)) : r10 instanceof Date && (e8[a7] = r10.getTime());
  }
  return u2(e8, r9, t10);
}

// node_modules/@arcgis/core/rest/support/JobInfo.js
var p5;
var h = i()({ esriJobCancelled: "job-cancelled", esriJobCancelling: "job-cancelling", esriJobDeleted: "job-deleted", esriJobDeleting: "job-deleting", esriJobTimedOut: "job-timed-out", esriJobExecuting: "job-executing", esriJobFailed: "job-failed", esriJobNew: "job-new", esriJobSubmitted: "job-submitted", esriJobSucceeded: "job-succeeded", esriJobWaiting: "job-waiting" }, { ignoreUnknown: false });
var d3 = 1e3;
var g3 = class extends n2 {
  static {
    p5 = this;
  }
  constructor(e8) {
    super(e8), this.jobId = null, this.jobStatus = null, this.messages = null, this.progress = null, this.requestOptions = null, this.sourceUrl = null, this._cancelJobTimer = void 0, this._jobCompletionTimer = void 0;
  }
  async cancelJob(e8) {
    const { jobId: o14, sourceUrl: s30 } = this, { path: a7 } = f2(s30), c5 = __spreadProps(__spreadValues(__spreadValues({}, this.requestOptions), e8), { query: { f: "json" } }), l5 = `${a7}/jobs/${o14}/cancel`, { data: u5 } = await f(l5, c5), { messages: b4, jobStatus: m8, progress: j5 } = p5.fromJSON(u5);
    return this.set({ messages: b4, jobStatus: m8, progress: j5 }), "job-cancelled" === m8 ? this : new Promise((t10, o15) => {
      w(c5.signal, () => {
        this.clearCancelJobTimer(), o15(u());
      }), this.clearCancelJobTimer();
      const s31 = () => {
        this._cancelJobTimer || o15(u()), this.checkJobStatus(e8).then(({ jobStatus: e9 }) => {
          switch (e9) {
            case "job-cancelling":
            default:
              this._cancelJobTimer = setTimeout(s31, d3);
              break;
            case "job-deleted":
            case "job-deleting":
            case "job-executing":
            case "job-failed":
            case "job-new":
            case "job-submitted":
            case "job-succeeded":
            case "job-timed-out":
            case "job-waiting":
              o15(this);
              break;
            case "job-cancelled":
              t10(this);
          }
        }).catch((e9) => {
          o15(e9);
        });
      };
      this._cancelJobTimer = setTimeout(s31, d3);
    });
  }
  destroy() {
    clearInterval(this._cancelJobTimer), clearInterval(this._jobCompletionTimer);
  }
  async checkJobStatus(e8) {
    const { path: o14 } = f2(this.sourceUrl), s30 = __spreadProps(__spreadValues(__spreadValues({}, this.requestOptions), e8), { query: __spreadProps(__spreadValues({}, e8?.query), { f: "json" }) }), r9 = `${o14}/jobs/${this.jobId}`, { data: i9 } = await f(r9, s30), { messages: a7, jobStatus: c5, progress: l5 } = p5.fromJSON(i9);
    return this.set({ messages: a7, jobStatus: c5, progress: l5 }), this;
  }
  async fetchResultData(e8, o14, s30) {
    o14 = i3.from(o14 || {});
    const { returnColumnName: r9, returnFeatureCollection: i9, returnM: a7, returnZ: c5, outSpatialReference: m8 } = o14, { path: j5 } = f2(this.sourceUrl), p17 = __spreadValues({ returnColumnName: r9 || null, returnFeatureCollection: i9 || null, returnM: a7 || null, returnZ: c5 || null, outSR: m8, returnType: "data", f: "json" }, s30?.query), h7 = v(p17, null), d7 = __spreadProps(__spreadValues(__spreadValues({}, this.requestOptions), s30), { query: h7 }), g7 = `${j5}/jobs/${this.jobId}/results/${e8}`, { data: J3 } = await f(g7, d7);
    return R(J3);
  }
  async fetchResultImage(e8, o14, s30) {
    const { path: r9 } = f2(this.sourceUrl), i9 = __spreadProps(__spreadValues({}, o14.toJSON()), { f: "json" }), a7 = v(i9), c5 = __spreadProps(__spreadValues(__spreadValues({}, this.requestOptions), s30), { query: a7 }), l5 = `${r9}/jobs/${this.jobId}/results/${e8}`, { data: m8 } = await f(l5, c5);
    return R(m8);
  }
  async fetchResultMapImageLayer() {
    const { path: e8 } = f2(this.sourceUrl), t10 = e8.indexOf("/GPServer/"), o14 = `${e8.slice(0, Math.max(0, t10))}/MapServer/jobs/${this.jobId}`;
    return new (0, (await import("./@arcgis_core_layers_MapImageLayer.js")).default)({ url: o14 });
  }
  async waitForJobCompletion(e8 = {}) {
    const { interval: t10 = d3, signal: o14, statusCallback: s30, apiKey: a7 } = e8;
    return new Promise((e9, c5) => {
      w(o14, () => {
        this.clearJobCompletionTimer(), c5(u());
      }), this.clearJobCompletionTimer();
      const n9 = () => {
        this._jobCompletionTimer || c5(u()), this.checkJobStatus({ query: { token: a7 } }).then(({ jobStatus: o15 }) => {
          switch (o15) {
            case "job-succeeded":
              e9(this);
              break;
            case "job-executing":
            case "job-new":
            case "job-submitted":
            case "job-waiting":
              s30 && s30(this), this._jobCompletionTimer = setTimeout(n9, t10);
              break;
            case "job-cancelled":
            case "job-cancelling":
            case "job-deleted":
            case "job-deleting":
            case "job-failed":
            case "job-timed-out":
              c5(this);
              break;
            default:
              this._jobCompletionTimer = setTimeout(n9, t10);
          }
        }).catch((e10) => {
          c5(e10);
        });
      };
      this._jobCompletionTimer = setTimeout(n9, t10);
    });
  }
  clearCancelJobTimer() {
    clearTimeout(this._cancelJobTimer), this._cancelJobTimer = void 0;
  }
  clearJobCompletionTimer() {
    clearTimeout(this._jobCompletionTimer), this._jobCompletionTimer = void 0;
  }
};
__decorate([a()], g3.prototype, "jobId", void 0), __decorate([r2(h, { ignoreUnknown: false })], g3.prototype, "jobStatus", void 0), __decorate([a({ type: [a2] })], g3.prototype, "messages", void 0), __decorate([a()], g3.prototype, "progress", void 0), __decorate([a()], g3.prototype, "requestOptions", void 0), __decorate([a({ json: { write: true } })], g3.prototype, "sourceUrl", void 0), g3 = p5 = __decorate([c("esri.rest.support.JobInfo")], g3);

// node_modules/@arcgis/core/rest/geoprocessor/submitJob.js
async function s10(s30, m8, n9, f7) {
  return n9 = i3.from(n9 || {}), d2(s30, "submitJob", n9, m8 ?? {}, f7).then(({ data: o14 }) => {
    const r9 = g3.fromJSON(o14);
    return r9.sourceUrl = s30, r9;
  });
}

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResultHeader.js
var s11 = class extends b {
  constructor(e8) {
    super(e8), this.headerKeys = [], this.outSpatialReference = null, this.exceededTransferLimit = false;
  }
};
__decorate([a()], s11.prototype, "headerKeys", void 0), __decorate([a()], s11.prototype, "outSpatialReference", void 0), __decorate([a()], s11.prototype, "exceededTransferLimit", void 0), s11 = __decorate([c("esri.rest.knowledgeGraph.GraphQueryResultHeader")], s11);

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResult.js
var p6 = class extends b {
  constructor(r9) {
    super(r9), this.resultRows = [], this.resultHeader = new s11();
  }
};
__decorate([a()], p6.prototype, "resultRows", void 0), __decorate([a()], p6.prototype, "resultHeader", void 0), p6 = __decorate([c("esri.rest.knowledgeGraph.GraphQueryResult")], p6);

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryStreamingResult.js
var a4 = class extends b {
  constructor(e8) {
    super(e8), this.resultRowsStream = new ReadableStream(), this.resultHeader = new s11();
  }
};
__decorate([a()], a4.prototype, "resultRowsStream", void 0), __decorate([a()], a4.prototype, "resultHeader", void 0), a4 = __decorate([c("esri.rest.knowledgeGraph.GraphQueryStreamingResult")], a4);

// node_modules/@arcgis/core/rest/knowledgeGraph/FieldIndex.js
var i5 = class extends n2 {
  constructor(e8) {
    super(e8), this.name = null, this.unique = null, this.ascending = true, this.description = "", this.fieldNames = [];
  }
};
__decorate([a({ type: String, json: { write: true } })], i5.prototype, "name", void 0), __decorate([a({ type: Boolean, json: { write: true } })], i5.prototype, "unique", void 0), __decorate([a({ type: Boolean, json: { write: true } })], i5.prototype, "ascending", void 0), __decorate([a({ type: String, json: { write: true } })], i5.prototype, "description", void 0), __decorate([a({ type: [String], json: { write: true } })], i5.prototype, "fieldNames", void 0), i5 = __decorate([c("esri.rest.knowledgeGraph.FieldIndex")], i5);

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphProperty.js
var r3 = class extends n2 {
  constructor(t10) {
    super(t10), this.name = null, this.alias = null, this.fieldType = null, this.geometryType = null, this.hasM = null, this.hasZ = null, this.nullable = null, this.editable = true, this.required = false, this.defaultVisibility = true, this.systemMaintained = null, this.role = "esriGraphPropertyUNSPECIFIED", this.domain = null, this.defaultValue = null;
  }
};
__decorate([a({ type: String, json: { write: true } })], r3.prototype, "name", void 0), __decorate([a({ type: String, json: { write: true } })], r3.prototype, "alias", void 0), __decorate([a({ type: String, json: { write: true } })], r3.prototype, "fieldType", void 0), __decorate([a({ type: String, json: { write: true } })], r3.prototype, "geometryType", void 0), __decorate([a({ type: Boolean, json: { write: true } })], r3.prototype, "hasM", void 0), __decorate([a({ type: Boolean, json: { write: true } })], r3.prototype, "hasZ", void 0), __decorate([a({ type: Boolean, json: { write: true } })], r3.prototype, "nullable", void 0), __decorate([a({ type: Boolean, json: { write: true } })], r3.prototype, "editable", void 0), __decorate([a({ type: Boolean, json: { write: true } })], r3.prototype, "required", void 0), __decorate([a({ type: Boolean, json: { write: true } })], r3.prototype, "defaultVisibility", void 0), __decorate([a({ type: Boolean, json: { write: true } })], r3.prototype, "systemMaintained", void 0), __decorate([a({ type: String, json: { write: true } })], r3.prototype, "role", void 0), __decorate([a({ type: String, json: { write: true } })], r3.prototype, "domain", void 0), __decorate([a({ json: { write: true } })], r3.prototype, "defaultValue", void 0), r3 = __decorate([c("esri.rest.knowledgeGraph.GraphProperty")], r3);

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphObjectType.js
var s12 = class extends n2 {
  constructor(t10) {
    super(t10), this.name = null, this.alias = null, this.role = "Regular", this.strict = null, this.properties = [], this.fieldIndexes = [], this.type = null;
  }
};
__decorate([a({ type: String, json: { write: true } })], s12.prototype, "name", void 0), __decorate([a({ type: String, json: { write: true } })], s12.prototype, "alias", void 0), __decorate([a({ type: String, json: { write: true } })], s12.prototype, "role", void 0), __decorate([a({ type: Boolean, json: { write: true } })], s12.prototype, "strict", void 0), __decorate([a({ type: [r3], json: { write: true } })], s12.prototype, "properties", void 0), __decorate([a({ type: [i5], json: { write: true } })], s12.prototype, "fieldIndexes", void 0), s12 = __decorate([c("esri.rest.knowledgeGraph.GraphObjectType")], s12);

// node_modules/@arcgis/core/rest/knowledgeGraph/EntityType.js
var o4 = class extends s12 {
  constructor(t10) {
    super(t10), this.type = "entity";
  }
};
o4 = __decorate([c("esri.rest.knowledgeGraph.EntityType")], o4);

// node_modules/@arcgis/core/rest/knowledgeGraph/RelationshipType.js
var s13 = class extends s12 {
  constructor(t10) {
    super(t10), this.endPoints = [], this.type = "relationship";
  }
};
__decorate([a({ json: { write: true } })], s13.prototype, "endPoints", void 0), s13 = __decorate([c("esri.rest.knowledgeGraph.RelationshipType")], s13);

// node_modules/@arcgis/core/rest/knowledgeGraph/SourceTypeValueBehavior.js
var s14 = class extends n2 {
  constructor(r9) {
    super(r9), this.value = null, this.behavior = null;
  }
};
__decorate([a({ type: String, json: { write: true } })], s14.prototype, "value", void 0), __decorate([a({ type: String, json: { write: true } })], s14.prototype, "behavior", void 0), s14 = __decorate([c("esri.rest.knowledgeGraph.SourceTypeValueBehavior")], s14);

// node_modules/@arcgis/core/rest/knowledgeGraph/DataModel.js
var y2 = class extends n2 {
  constructor(e8) {
    super(e8), this.timestamp = null, this.spatialReference = null, this.strict = null, this.objectIdField = null, this.globalIdField = null, this.arcgisManaged = null, this.identifierInfo = null, this.searchIndexes = [], this.entityTypes = [], this.relationshipTypes = [], this.metaEntityTypes = [], this.provenanceSourceTypeValues = [], this.domains = [];
  }
};
__decorate([a({ type: Date, json: { type: Number, write: { writer: (e8, t10) => {
  t10.timestamp = e8?.getTime();
} } } })], y2.prototype, "timestamp", void 0), __decorate([a({ type: S, json: { write: true } })], y2.prototype, "spatialReference", void 0), __decorate([a({ type: Boolean, json: { write: true } })], y2.prototype, "strict", void 0), __decorate([a({ type: String, json: { write: true } })], y2.prototype, "objectIdField", void 0), __decorate([a({ type: String, json: { write: true } })], y2.prototype, "globalIdField", void 0), __decorate([a()], y2.prototype, "arcgisManaged", void 0), __decorate([a()], y2.prototype, "identifierInfo", void 0), __decorate([a()], y2.prototype, "searchIndexes", void 0), __decorate([a({ type: [o4], json: { write: true } })], y2.prototype, "entityTypes", void 0), __decorate([a({ type: [s13], json: { write: true } })], y2.prototype, "relationshipTypes", void 0), __decorate([a({ type: [o4], json: { write: true } })], y2.prototype, "metaEntityTypes", void 0), __decorate([a({ type: [s14], json: { write: true } })], y2.prototype, "provenanceSourceTypeValues", void 0), __decorate([a({ types: [t], json: { write: true } })], y2.prototype, "domains", void 0), y2 = __decorate([c("esri.rest.knowledgeGraph.DataModel")], y2);

// node_modules/@arcgis/core/rest/knowledgeGraph/ServiceDefinition.js
var p7 = class extends n2 {
  constructor(t10) {
    super(t10), this.capabilities = [], this.supportsSearch = false, this.supportedQueryFormats = [], this.allowGeometryUpdates = false, this.searchMaxRecordCount = null, this.serviceCapabilities = null, this.maxRecordCount = null, this.description = "", this.copyrightText = "", this.units = "", this.spatialReference = null, this.currentVersion = null, this.dateFieldsTimeReference = null, this.serviceItemId = "", this.supportsDocuments = false, this.dataEditingNotSupported = false, this.schemaEditingNotSupported = false, this.supportsProvenance = false;
  }
};
__decorate([a({ type: [String], json: { write: true } })], p7.prototype, "capabilities", void 0), __decorate([a({ type: Boolean, json: { write: true } })], p7.prototype, "supportsSearch", void 0), __decorate([a({ type: [String], json: { write: true } })], p7.prototype, "supportedQueryFormats", void 0), __decorate([a({ type: Boolean, json: { write: true } })], p7.prototype, "allowGeometryUpdates", void 0), __decorate([a({ type: Number, json: { write: true } })], p7.prototype, "searchMaxRecordCount", void 0), __decorate([a({ type: Object, json: { write: true } })], p7.prototype, "serviceCapabilities", void 0), __decorate([a({ type: Number, json: { write: true } })], p7.prototype, "maxRecordCount", void 0), __decorate([a({ type: String, json: { write: true } })], p7.prototype, "description", void 0), __decorate([a({ type: String, json: { write: true } })], p7.prototype, "copyrightText", void 0), __decorate([a({ type: String, json: { write: true } })], p7.prototype, "units", void 0), __decorate([a({ type: S, json: { write: true } })], p7.prototype, "spatialReference", void 0), __decorate([a({ type: Number, json: { write: true } })], p7.prototype, "currentVersion", void 0), __decorate([a({ type: Object, json: { write: true } })], p7.prototype, "dateFieldsTimeReference", void 0), __decorate([a({ type: String, json: { write: true } })], p7.prototype, "serviceItemId", void 0), __decorate([a({ type: Boolean, json: { write: true } })], p7.prototype, "supportsDocuments", void 0), __decorate([a({ type: Boolean, json: { write: true } })], p7.prototype, "dataEditingNotSupported", void 0), __decorate([a({ type: Boolean, json: { write: true } })], p7.prototype, "schemaEditingNotSupported", void 0), __decorate([a({ type: Boolean, json: { write: true } })], p7.prototype, "supportsProvenance", void 0), p7 = __decorate([c("esri.rest.knowledgeGraph.ServiceDefinition")], p7);

// node_modules/@arcgis/core/rest/knowledgeGraph/KnowledgeGraph.js
var p8 = class extends n2 {
  constructor(o14) {
    super(o14), this.url = null, this.dataModel = null, this.serviceDefinition = null;
  }
};
__decorate([a({ type: String, json: { write: true } })], p8.prototype, "url", void 0), __decorate([a({ type: y2, json: { write: true } })], p8.prototype, "dataModel", void 0), __decorate([a({ type: p7, json: { write: true } })], p8.prototype, "serviceDefinition", void 0), p8 = __decorate([c("esri.rest.knowledgeGraph.KnowledgeGraph")], p8);

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmUtils.js
function e2(e8, o14, d7) {
  if (0 !== e8.error_code) throw new r(o14, d7, { errorCode: e8.error_code, errorMessage: e8.error_message });
}
function o5(e8) {
  return e8?.error_code ? new r("knowledgeGraphService:server-or-decoding-error", e8.error_message, { errorCode: e8.error_code }) : void 0;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/clientDataToWasmEncodedFactories.js
function t5(t10, r9, a7, o14 = false) {
  const c5 = new a7.ClientDataFetchRequestEncoder();
  c5.deleteLater();
  for (const e8 of t10) {
    const t11 = n5(e8, r9, a7, o14);
    c5.add_client_data_fetch_request_parameter(t11);
  }
  c5.encode();
  const s30 = c5.get_encoding_result();
  return e2(s30.error, "knowledge-graph:fetchClientDataAtKeys-encoding-failed", "Attempting to encode the fetchClientDataAtKeys failed"), structuredClone(s30.get_byte_buffer());
}
function n5(e8, t10, n9, r9) {
  const a7 = new n9.ClientDataKey();
  a7.deleteLater(), a7.key_string = e8;
  const o14 = new n9.ClientDataFetchRequestParameter();
  o14.deleteLater(), o14.set_key(a7);
  const c5 = t10.get(e8);
  return c5 && !r9 && (o14.v_tag = { v_tag: c5.version }), o14;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/knowledgeWasmAccess.js
var t6 = "esri/rest/knowledgeGraph/wasmInterface/";
var s15;
var r4;
async function n6() {
  const e8 = s15 ?? r4;
  if (e8) return e8;
  const t10 = !!has("wasm-simd");
  return r4 = o6(t10), r4;
}
async function o6(s30) {
  if (s30) {
    const { default: s31 } = await import("./arcgis-knowledge-client-core-simd-ABV4Y3X2.js").then((e8) => e8.a);
    return s31({ locateFile: (s32) => n3(t6 + s32) });
  }
  const { default: r9 } = await import("./arcgis-knowledge-client-core-FDQQ7C3T.js").then((e8) => e8.a);
  return r9({ locateFile: (s31) => n3(t6 + s31) });
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmQueryWrapperInterfaces.js
var e3 = { exclude: 0, include: 1 };

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/queryToWasmEncodedFactories.js
function l3(e8, t10) {
  const n9 = new t10.ArrayValue();
  return n9.deleteLater(), e8.forEach((e9) => {
    n9.add_value(f3(e9, t10));
  }), n9;
}
function s16(e8, t10) {
  const n9 = new t10.ObjectValue();
  n9.deleteLater();
  for (const [o14, r9] of Object.entries(e8)) n9.set_key_value(o14, f3(r9, t10));
  return n9;
}
function u3(t10, i9) {
  if (t10 instanceof m3) return g4(t10, i9);
  if (t10 instanceof _) return h2(t10, i9);
  if (t10 instanceof y || t10 instanceof j) return p9(t10, i9);
  throw new r("knowledge-graph:unsupported-geometry", "Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge", { geometry: t10 });
}
function y3(e8, t10) {
  t10.input_quantization_parameters = { xy_resolution: e8.xyResolution, x_false_origin: e8.xFalseOrigin, y_false_origin: e8.yFalseOrigin, z_resolution: e8.zResolution, z_false_origin: e8.zFalseOrigin, m_resolution: e8.mResolution, m_false_origin: e8.mFalseOrigin };
}
function m4(t10, n9, o14) {
  if (!t10.extent) throw new r("knowledge-graph:illegal-output-quantization", "The Output quantization provided to the encoder had an illegal value as part of its extent", t10.extent);
  if (!t10.quantizeMode) throw new r("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal mode setting", t10.quantizeMode);
  if (!t10.tolerance) throw new r("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal tolerance setting", t10.quantizeMode);
  n9.output_quantization_parameters = { extent: { xmax: t10.extent.xmax, ymax: t10.extent.ymax, xmin: t10.extent.xmin, ymin: t10.extent.ymin }, quantize_mode: o14.esriQuantizeMode[t10.quantizeMode], tolerance: t10.tolerance };
}
function c3(e8, t10) {
  t10.provenance_behavior = { value: e3[e8] };
}
function f3(e8, n9) {
  if (null == e8) return "";
  if ("object" != typeof e8) return e8;
  if (e8 instanceof Date) return e8;
  if (e8 instanceof s2) return u3(e8, n9);
  if (Array.isArray(e8)) {
    const t10 = new n9.ArrayValue();
    return t10.deleteLater(), e8.forEach((e9) => {
      t10.add_value(f3(e9, n9));
    }), t10;
  }
  return s16(e8, n9);
}
function p9(e8, t10) {
  const n9 = new t10.GeometryValue();
  n9.deleteLater(), n9.has_z = e8.hasZ, n9.has_m = e8.hasM;
  const o14 = [], i9 = [];
  let l5 = [];
  e8 instanceof y ? (n9.geometry_type = t10.esriGeometryType.esriGeometryPolyline, l5 = e8.paths) : e8 instanceof j && (n9.geometry_type = t10.esriGeometryType.esriGeometryPolygon, l5 = e8.rings);
  let s30 = 0, u5 = 0;
  return l5.forEach((e9) => {
    let t11 = 0;
    e9.forEach((e10) => {
      t11++, e10.forEach((e11) => {
        o14[u5] = e11, u5++;
      });
    }), i9[s30] = t11, s30++;
  }), n9.coords = new Float64Array(o14), n9.lengths = new Uint32Array(i9), n9;
}
function g4(e8, t10) {
  const n9 = new t10.GeometryValue();
  n9.deleteLater(), n9.geometry_type = n9.geometry_type = t10.esriGeometryType.esriGeometryMultipoint, n9.has_z = e8.hasZ, n9.has_m = e8.hasM;
  const o14 = [], r9 = [];
  r9[0] = e8.points.length;
  let a7 = 0;
  return e8.points.forEach((e9) => {
    e9.forEach((e10) => {
      o14[a7] = e10, a7++;
    });
  }), n9.coords = new Float64Array(o14), n9.lengths = new Uint32Array(r9), n9;
}
function h2(e8, t10) {
  const n9 = new t10.GeometryValue();
  n9.deleteLater(), n9.geometry_type = t10.esriGeometryType.esriGeometryPoint, n9.has_z = e8.hasZ, n9.has_m = e8.hasM;
  const o14 = [], r9 = [];
  r9[0] = 1, o14[0] = e8.x, o14[1] = e8.y;
  let a7 = 2;
  return e8.hasZ && (o14[a7] = e8.z, a7++), e8.hasM && (o14[a7] = e8.m, a7++), n9.coords = new Float64Array(o14), n9.lengths = new Uint32Array(r9), n9;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/types.js
var e4 = { esriMethodHintUNSPECIFIED: 0, esriUUIDESRI: 1, esriUUIDRFC4122: 2 };
var r5 = { esriSplitPolicyType_UNSPECIFIED: 0, esriSplitPolicyTypeGeometryRatio: 1, esriSplitPolicyTypeDuplicate: 2, esriSplitPolicyTypeDefaultValue: 3 };
var i6 = { esriTypeUNSPECIFIED: 0, esriTypeEntity: 1, esriTypeRelationship: 2, esriTypeBoth: 4, esriTypeMetaEntityProvenance: 8 };
var t7 = { esriMergePolicyType_UNSPECIFIED: 0, esriMergePolicyTypeSumValues: 1, esriMergePolicyTypeAreaWeighted: 2, esriMergePolicyTypeDefaultValue: 3 };
var p10 = { esriIdentifierInfoTypeUNSPECIFIED: 0, esriIdentifierInfoTypeDatabaseNative: 1, esriIdentifierInfoTypeUniformProperty: 2 };
var o7 = { esriGraphPropertyUNSPECIFIED: 0, esriGraphPropertyRegular: 1, esriGraphPropertyDocumentName: 2, esriGraphPropertyDocumentTitle: 3, esriGraphPropertyDocumentUrl: 4, esriGraphPropertyDocumentText: 5, esriGraphPropertyDocumentKeywords: 6, esriGraphPropertyDocumentContentType: 7, esriGraphPropertyDocumentMetadata: 8, esriGraphPropertyDocumentFileExtension: 9, esriGraphPropertyProvenanceInstanceId: 10, esriGraphPropertyProvenanceSourceType: 11, esriGraphPropertyProvenanceSourceName: 12, esriGraphPropertyProvenanceSource: 13, esriGraphPropertyProvenanceComment: 14, esriGraphPropertyProvenanceTypeName: 15, esriGraphPropertyProvenancePropertyName: 16 };
var y4 = { esriGeometryNull: 0, esriGeometryPoint: 1, esriGeometryMultipoint: 2, esriGeometryPolyline: 3, esriGeometryPolygon: 4, esriGeometryEnvelope: 5, esriGeometryAny: 7, esriGeometryMultiPatch: 9 };
var s17 = { esriFieldTypeSmallInteger: 0, esriFieldTypeInteger: 1, esriFieldTypeSingle: 2, esriFieldTypeDouble: 3, esriFieldTypeString: 4, esriFieldTypeDate: 5, esriFieldTypeOID: 6, esriFieldTypeGeometry: 7, esriFieldTypeBlob: 8, esriFieldTypeRaster: 9, esriFieldTypeGUID: 10, esriFieldTypeGlobalID: 11, esriFieldTypeXML: 12, esriFieldTypeBigInteger: 13, esriFieldTypeDateOnly: 14, esriFieldTypeTimeOnly: 15, esriFieldTypeTimestampOffset: 16 };
var n7 = { Regular: 0, Provenance: 1, Document: 2 };

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/updateToWasmEncodedFactories.js
function d4(t10, n9) {
  if (!t10.typeName) throw new r("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits");
  if (!("originId" in t10)) {
    const e8 = new n9.EntityValue();
    e8.deleteLater(), e8.type_name = t10.typeName;
    for (const [i9, a7] of Object.entries(t10.properties)) e8.set_key_value(i9, O2(a7, n9));
    return t10.id && e8.set_id(t10.id), e8;
  }
  if ("originId" in t10 && "destinationId" in t10) {
    const e8 = new n9.RelationshipValue();
    e8.deleteLater(), e8.type_name = t10.typeName;
    for (const [i9, a7] of Object.entries(t10.properties)) e8.set_key_value(i9, O2(a7, n9));
    return t10.id && e8.set_id(t10.id), t10.originId && t10.destinationId && e8.set_related_entity_ids(t10.originId, t10.destinationId), e8;
  }
  throw new r("knowledge-graph:applyEdits-encoding-failure", "Could not determine the type of a named graph object passed to the encoder");
}
function u4(e8) {
  return { xy_resolution: e8.xyResolution, x_false_origin: e8.xFalseOrigin, y_false_origin: e8.yFalseOrigin, z_resolution: e8.zResolution, z_false_origin: e8.zFalseOrigin, m_resolution: e8.mResolution, m_false_origin: e8.mFalseOrigin };
}
function p11(e8, t10) {
  const n9 = new t10.EntityType();
  return n9.deleteLater(), v2(e8, t10, n9);
}
function y5(e8, t10) {
  const n9 = new t10.RelationshipType();
  n9.deleteLater();
  for (const i9 of e8.endPoints) {
    const e9 = new t10.EndPoint();
    e9.deleteLater(), e9.origin_entity_type = i9.originEntityType, e9.dest_entity_type = i9.destinationEntityType, n9.add_end_point(e9);
  }
  return v2(e8, t10, n9);
}
function c4(e8, t10) {
  const n9 = new t10.EntityType();
  return n9.deleteLater(), b2(e8, n9);
}
function f4(e8, t10) {
  const n9 = new t10.RelationshipType();
  return n9.deleteLater(), b2(e8, n9);
}
function m5(e8, t10) {
  const i9 = new t10.GraphProperty();
  return i9.deleteLater(), i9.name = e8.name, i9.alias = e8.alias ?? "", i9.field_type = { value: s17[e8.fieldType] }, i9.geometry_type = { value: e8.geometryType ? y4[e8.geometryType] : y4.esriGeometryNull }, i9.has_m = e8.hasM ?? false, i9.has_z = e8.hasZ ?? false, i9.nullable = e8.nullable ?? false, i9.editable = e8.editable, i9.required = e8.required, i9.default_visibility = e8.defaultVisibility, i9.system_maintained = e8.systemMaintained ?? false, i9.role = { value: o7[e8.role] }, i9.default_value = O2(e8.defaultValue, t10), i9.domain = e8.domain ?? "", i9;
}
function _2(e8, t10) {
  const n9 = new t10.GraphProperty();
  return n9.deleteLater(), e8.hasOwnProperty("alias") && (n9.alias = e8.alias), e8.hasOwnProperty("editable") && (n9.editable = e8.editable), e8.hasOwnProperty("required") && (n9.required = e8.required), e8.hasOwnProperty("defaultVisibility") && (n9.default_visibility = e8.defaultVisibility), e8.hasOwnProperty("defaultValue") && (n9.default_value = O2(e8.defaultValue, t10)), e8.hasOwnProperty("domain") && (n9.domain = e8.domain), n9;
}
function g5(e8, t10) {
  const n9 = new t10.SearchIndexProperties();
  n9.deleteLater();
  for (const i9 of e8.propertyNames) n9.add_search_property_name(i9);
  return n9;
}
function w2(e8, t10) {
  const n9 = new t10.FieldIndex();
  n9.deleteLater(), n9.name = e8.name, n9.unique = e8.unique, n9.ascending = e8.ascending, n9.description = e8.description ?? "";
  for (const i9 of e8.fieldNames) n9.add_field(i9);
  return n9;
}
function h3(e8, t10, o14, r9) {
  const l5 = new t10.Domain();
  l5.deleteLater(), l5.name = e8.name;
  const s30 = s17[o14];
  l5.field_type = { value: s30 };
  let d7 = s30;
  if (s30 !== s17.esriFieldTypeTimeOnly && s30 !== s17.esriFieldTypeDateOnly && s30 !== s17.esriFieldTypeTimestampOffset || (d7 = s17.esriFieldTypeString), r9 && (l5.merge_policy_type = { value: t7[r9.mergePolicy] }, l5.split_policy_type = { value: r5[r9.splitPolicy] }), "coded-value" === e8.type) {
    const n9 = e8;
    l5.type = "codedValue";
    const i9 = new t10.CodedValueDomain();
    i9.deleteLater();
    for (const e9 of n9.codedValues) {
      const n10 = new t10.CodedValue();
      n10.deleteLater(), n10.name = e9.name, n10.set_code(e9.code, { value: d7 }), i9.add_coded_value(n10);
    }
    l5.coded_value_domain = i9;
  } else if ("range" === e8.type) {
    const n9 = e8;
    l5.type = "range";
    const i9 = new t10.RangeDomain();
    i9.deleteLater(), i9.add_value(n9.minValue, { value: d7 }), i9.add_value(n9.maxValue, { value: d7 }), l5.range_domain = i9;
  } else l5.type = e8.type ?? "unspecified";
  return l5;
}
function v2(e8, t10, n9) {
  n9.name = e8.name, n9.alias = e8.alias ?? "", n9.role = { value: n7[e8.role] }, n9.strict = e8.strict;
  for (const i9 of e8.properties) {
    const e9 = m5(i9, t10);
    n9.add_property(e9);
  }
  return n9;
}
function b2(e8, t10) {
  return e8.hasOwnProperty("alias") && (t10.alias = e8.alias), t10;
}
function O2(e8, n9) {
  return null == e8 ? null : "object" != typeof e8 || e8 instanceof Date ? e8 : e8 instanceof s2 ? u3(e8, n9) : null;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToClientDataFactories.js
function e5(e8, t10, _4, a7 = false) {
  const n9 = /* @__PURE__ */ new Map();
  for (let s30 = 0; s30 < e8.get_results_count(); s30++) {
    const r9 = e8.get_result_at(s30);
    if (2 !== r9.get_fetch_result_case().value || 0 !== r9.error().error_code) {
      const e9 = r9.get_key().key_string;
      _4.has(e9) && t10.delete(e9);
      continue;
    }
    const g7 = r9.get_value(), c5 = r9.get_key().key_string, o14 = _4.get(c5);
    let u5;
    if (2 === g7.get_data_case().value && o14) u5 = o14.value;
    else {
      if (1 !== g7.get_data_case().value) continue;
      {
        u5 = g7.get_data().client_data_string;
        const e9 = r9.get_value().get_v_tag().v_tag;
        a7 || t10.set(c5, { key: c5, version: e9, value: u5 });
      }
    }
    n9.set(c5, u5);
  }
  return n9;
}
function t8(e8) {
  const t10 = e8.get_keys(), _4 = new Array();
  for (let a7 = 0; a7 < t10.get_keys_count(); a7++) {
    const e9 = t10.get_key_at(a7);
    1 === e9.get_client_data_key_type().value && _4.push(e9.key_string);
  }
  return _4;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphDataModelOperationResult.js
var s18 = class extends b {
  constructor(o14) {
    super(o14), this.decoderError = null, this.resultsCount = 0, this.results = [], this.updatedKnowledgeGraph = null;
  }
};
__decorate([a()], s18.prototype, "decoderError", void 0), __decorate([a()], s18.prototype, "resultsCount", void 0), __decorate([a()], s18.prototype, "results", void 0), __decorate([a()], s18.prototype, "updatedKnowledgeGraph", void 0), s18 = __decorate([c("esri.rest.knowledgeGraph.GraphDataModelOperationResult")], s18);
var p12 = s18;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphAddFieldIndexResult.js
var t9 = class extends p12 {
  constructor(r9) {
    super(r9);
  }
};
t9 = __decorate([c("esri.rest.knowledgeGraph.GraphAddFieldIndexResult")], t9);
var s19 = t9;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphAddNamedTypesResult.js
var r6 = class extends p12 {
  constructor(t10) {
    super(t10), this.entityAddResultsCount = 0, this.relationshipAddResultsCount = 0, this.entityAddResults = [], this.relationshipAddResults = [];
  }
};
__decorate([a()], r6.prototype, "entityAddResultsCount", void 0), __decorate([a()], r6.prototype, "relationshipAddResultsCount", void 0), __decorate([a()], r6.prototype, "entityAddResults", void 0), __decorate([a()], r6.prototype, "relationshipAddResults", void 0), r6 = __decorate([c("esri.rest.knowledgeGraph.GraphAddNamedTypesResult")], r6);
var d5 = r6;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphAddPropertyResult.js
var e6 = class extends p12 {
  constructor(r9) {
    super(r9);
  }
};
e6 = __decorate([c("esri.rest.knowledgeGraph.GraphAddPropertyResult")], e6);
var s20 = e6;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphDataModelSingletonOperationResult.js
var s21 = class extends b {
  constructor(r9) {
    super(r9), this.decoderError = null, this.updatedKnowledgeGraph = null;
  }
};
__decorate([a()], s21.prototype, "decoderError", void 0), __decorate([a()], s21.prototype, "updatedKnowledgeGraph", void 0), s21 = __decorate([c("esri.rest.knowledgeGraph.GraphDataModelSingletonOperationResult")], s21);
var p13 = s21;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphDeleteFieldIndexResult.js
var o8 = class extends p12 {
  constructor(e8) {
    super(e8);
  }
};
o8 = __decorate([c("esri.rest.knowledgeGraph.GraphDeleteFieldIndexResult")], o8);
var s22 = o8;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphDeleteNamedTypeResult.js
var o9 = class extends p12 {
  constructor(e8) {
    super(e8);
  }
};
o9 = __decorate([c("esri.rest.knowledgeGraph.GraphDeleteNamedTypeResult")], o9);
var s23 = o9;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphDeletePropertyResult.js
var o10 = class extends p12 {
  constructor(r9) {
    super(r9);
  }
};
o10 = __decorate([c("esri.rest.knowledgeGraph.GraphDeletePropertyResult")], o10);
var s24 = o10;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphUpdateNamedTypesResult.js
var o11 = class extends p12 {
  constructor(r9) {
    super(r9);
  }
};
o11 = __decorate([c("esri.rest.knowledgeGraph.GraphUpdateNamedTypesResult")], o11);
var s25 = o11;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphUpdatePropertyResult.js
var o12 = class extends p12 {
  constructor(r9) {
    super(r9);
  }
};
o12 = __decorate([c("esri.rest.knowledgeGraph.GraphUpdatePropertyResult")], o12);
var s26 = o12;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphUpdateSearchIndexResult.js
var o13 = class extends p12 {
  constructor(r9) {
    super(r9);
  }
};
o13 = __decorate([c("esri.rest.knowledgeGraph.GraphUpdateSearchIndexResult")], o13);
var s27 = o13;

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToDataModelChangeResponseFactories.js
function p14(r9, e8) {
  const t10 = [];
  for (let o14 = 0; o14 < e8; o14++) {
    const e9 = r9.get_result_at(o14);
    t10.push({ name: e9.get_name(), error: o5(e9.get_error()) });
  }
  return t10;
}
function i7(r9) {
  const t10 = r9.get_results_count(), o14 = r9.get_entity_type_add_results_count(), s30 = r9.get_relationship_type_add_results_count(), n9 = new d5({ resultsCount: t10, results: p14(r9, t10), decoderError: o5(r9.error), entityAddResultsCount: o14, relationshipAddResultsCount: s30 });
  for (let e8 = 0; e8 < o14; e8++) {
    const t11 = r9.get_entity_type_add_results_at(e8), o15 = t11.get_name(), s31 = t11.get_error();
    n9.entityAddResults.push({ name: o15, error: o5(s31) });
  }
  for (let e8 = 0; e8 < s30; e8++) {
    const t11 = r9.get_relationship_type_add_results_at(e8), o15 = t11.get_name(), s31 = t11.get_error();
    n9.relationshipAddResults.push({ name: o15, error: o5(s31) });
  }
  return n9;
}
function a5(r9) {
  const e8 = r9.get_results_count();
  return new s25({ resultsCount: e8, results: p14(r9, e8), decoderError: o5(r9.error) });
}
function m6(r9) {
  const e8 = r9.get_results_count();
  return new s23({ resultsCount: e8, results: p14(r9, e8), decoderError: o5(r9.error) });
}
function f5(r9) {
  const e8 = r9.get_results_count();
  return new s20({ resultsCount: e8, results: p14(r9, e8), decoderError: o5(r9.error) });
}
function g6(r9) {
  const e8 = r9.get_results_count();
  return new s24({ resultsCount: e8, results: p14(r9, e8), decoderError: o5(r9.error) });
}
function h4(r9) {
  const e8 = r9.get_results_count();
  return new s26({ resultsCount: e8, results: p14(r9, e8), decoderError: o5(r9.error) });
}
function y6(r9) {
  const e8 = r9.get_results_count();
  return new s27({ resultsCount: e8, results: p14(r9, e8), decoderError: o5(r9.error) });
}
function R2(e8) {
  const t10 = e8.get_results_count();
  return new s19({ resultsCount: t10, results: p14(e8, t10), decoderError: o5(e8.error) });
}
function j3(r9) {
  const e8 = r9.get_results_count();
  return new s22({ resultsCount: e8, results: p14(r9, e8), decoderError: o5(r9.error) });
}
function w3(r9) {
  return new p13({ decoderError: o5(r9.error) });
}

// node_modules/@arcgis/core/rest/knowledgeGraph/SearchIndex.js
var s28 = class extends b {
  constructor(e8) {
    super(e8), this.name = null, this.supportedCategory = "esriTypeUNSPECIFIED", this.analyzers = [], this.searchProperties = /* @__PURE__ */ new Map();
  }
};
__decorate([a()], s28.prototype, "name", void 0), __decorate([a()], s28.prototype, "supportedCategory", void 0), __decorate([a()], s28.prototype, "analyzers", void 0), __decorate([a()], s28.prototype, "searchProperties", void 0), s28 = __decorate([c("esri.rest.knowledgeGraph.SearchIndex")], s28);

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmDataModelWrapperInterfaces.js
var e7 = { unspecified: 0, codedValue: 1, range: 2 };

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToDataModelFactories.js
var I = false;
function L(e8) {
  e8.deleteLater(), I = false;
  const i9 = new y2({ timestamp: e8.timestamp, spatialReference: new S(e8.spatial_reference), strict: e8.strict, objectIdField: e8.objectid_property, globalIdField: e8.globalid_property, arcgisManaged: e8.arcgis_managed, identifierInfo: { identifierMappingInfo: { identifierInfoType: o(p10, e8.identifier_info?.identifier_mapping_info?.identifier_info_type?.value), databaseNativeIdentifier: e8.identifier_info?.identifier_mapping_info?.database_native_identifier, uniformPropertyIdentifier: { identifierPropertyName: e8.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name } }, identifierGenerationInfo: { uuidMethodHint: o(e4, e8.identifier_info?.identifier_generation_info?.uuid_method_hint?.value) } }, searchIndexes: B(e8.search_indexes), entityTypes: q(e8.entity_types), relationshipTypes: C(e8.relationship_types), metaEntityTypes: q(e8.meta_entity_types), provenanceSourceTypeValues: O3(e8.provenance_source_type_values.value_behavior_array), domains: W(e8) });
  return I && n.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("A big integer field was detected in the retrieved data model. The `big-integer` field type is not fully supported in web clients. Please see https://developers.arcgis.com/javascript/latest/references/core/layers/support/Field/#type"), i9;
}
function V(e8) {
  return e8.deleteLater(), new o4(D(e8));
}
function x(e8) {
  return e8.deleteLater(), new i5({ name: e8.name, unique: e8.unique, ascending: e8.ascending, description: e8.description, fieldNames: E(e8.fields) });
}
function D(e8) {
  return { name: e8.name, alias: e8.alias, role: o(n7, e8.role.value), strict: e8.strict, properties: N2(e8.properties), fieldIndexes: R3(e8.field_indexes) };
}
function F(e8) {
  return e8.deleteLater(), new r3({ alias: e8.alias, name: e8.name, fieldType: o(s17, e8.field_type.value) ?? void 0, geometryType: o(y4, e8.geometry_type.value) ?? null, hasM: e8.has_m, hasZ: e8.has_z, nullable: e8.nullable, editable: e8.editable, required: e8.required, defaultVisibility: e8.default_visibility, systemMaintained: e8.system_maintained, role: o(o7, e8.role.value), defaultValue: e8.default_value, domain: e8.domain });
}
var G = class extends n4 {
};
function P2(e8) {
  return e8.get_domain_type().value === e7.range ? new s3({ name: e8.name, minValue: e8.range_domain.value_at(0), maxValue: e8.range_domain.value_at(1) }) : e8.get_domain_type().value === e7.codedValue ? new c2({ name: e8.name, codedValues: A(e8) }) : new G({ name: e8.name });
}
function S2(e8) {
  e8.deleteLater();
  const t10 = D(e8), r9 = [];
  for (let i9 = 0; i9 < e8.end_points.size(); i9++) {
    const t11 = e8.end_points.get(i9);
    r9.push({ originEntityType: t11.origin_entity_type, destinationEntityType: t11.dest_entity_type });
  }
  return e8.end_points.delete(), new s13(Object.assign({ endPoints: r9 }, t10));
}
function k(e8) {
  return new s14({ behavior: e8.behavior, value: e8.value });
}
function q(e8) {
  const t10 = [];
  for (let r9 = 0; r9 < e8.size(); r9++) t10.push(V(e8.get(r9)));
  return e8.delete(), t10;
}
function E(e8) {
  const t10 = [];
  for (let r9 = 0; r9 < e8.size(); r9++) t10.push(e8.get(r9));
  return e8.delete(), t10;
}
function N2(e8) {
  const t10 = [];
  for (let r9 = 0; r9 < e8.size(); r9++) {
    const i9 = F(e8.get(r9));
    "esriFieldTypeBigInteger" === i9.fieldType && (I = true), t10.push(i9);
  }
  return e8.delete(), t10;
}
function R3(e8) {
  const t10 = [];
  for (let r9 = 0; r9 < e8.size(); r9++) t10.push(x(e8.get(r9)));
  return e8.delete(), t10;
}
function C(e8) {
  const t10 = [];
  for (let r9 = 0; r9 < e8.size(); r9++) t10.push(S2(e8.get(r9)));
  return e8.delete(), t10;
}
function O3(e8) {
  const t10 = [];
  for (let r9 = 0; r9 < e8.size(); r9++) {
    const i9 = e8.get(r9);
    i9.deleteLater(), t10.push(k(i9));
  }
  return e8.delete(), t10;
}
function B(e8) {
  const t10 = [];
  for (let i9 = 0; i9 < e8.size(); i9++) {
    const n9 = new s28(), o14 = e8.get(i9);
    n9.name = o14.name, n9.supportedCategory = o(i6, o14.supported_category.value);
    const a7 = o14.analyzers.size();
    for (let e9 = 0; e9 < a7; e9++) n9.analyzers.push({ name: o14.analyzers.get(e9).name });
    o14.analyzers.delete();
    for (let e9 = 0; e9 < o14.search_properties.keys().size(); e9++) {
      const t11 = o14.search_properties.keys().get(e9), r9 = o14.search_properties.get(t11), i10 = [];
      for (let e10 = 0; e10 < r9.property_names.size(); e10++) i10.push(r9.property_names.get(e10));
      n9.searchProperties.set(t11, { propertyNames: i10 });
    }
    t10.push(n9);
  }
  return e8.delete(), t10;
}
function W(e8) {
  const t10 = [];
  for (let r9 = 0; r9 < e8.domains_count(); r9++) {
    const i9 = e8.domain_at(r9);
    i9.deleteLater(), t10.push(P2(i9));
  }
  return t10;
}
function A(e8) {
  const t10 = [];
  for (let r9 = 0; r9 < e8.coded_value_domain.coded_values_count(); r9++) {
    const i9 = e8.coded_value_domain.coded_value_at(r9);
    i9.deleteLater(), t10.push(new i2({ name: i9.name, code: i9.get_code() }));
  }
  return t10;
}
G = __decorate([l("esri.rest.knowledgeGraph.wasmInterface.wasmToDataModelFactories")], G);

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToGeometryFactories.js
function n8(t10, o14) {
  const s30 = { spatialReference: o14 }, r9 = p15(t10, s30), n9 = t10.lengths, a7 = t10.coords, h7 = n9[0];
  s30.points = [];
  let l5 = 0;
  for (let e8 = 0; e8 < h7; e8++) {
    const t11 = [];
    for (let e9 = 0; e9 < r9; e9++) t11[e9] = a7[l5], l5++;
    s30.points.push(t11);
  }
  return new m3(s30);
}
function a6(t10, e8) {
  const s30 = { spatialReference: e8 };
  let r9 = 2;
  p15(t10, s30);
  const n9 = t10.coords;
  return s30.x = n9[0], s30.y = n9[1], t10.has_z && (s30.z = n9[r9], r9++), t10.has_m && (s30.m = n9[r9]), new _(s30);
}
function h5(t10, e8) {
  const { paths: o14, hasM: s30, hasZ: n9 } = i8(t10, 3);
  return new y({ paths: o14, hasM: s30, hasZ: n9, spatialReference: e8 });
}
function l4(t10, e8) {
  const { paths: o14, hasM: r9, hasZ: n9 } = i8(t10, 4);
  return new j({ rings: o14, hasM: r9, hasZ: n9, spatialReference: e8 });
}
function i8(e8, o14) {
  const s30 = { paths: [], hasM: false, hasZ: false }, r9 = p15(e8, s30), { coords: n9, geometry_type: a7, lengths: h7 } = e8;
  if (a7.value !== o14) throw new r("KnowledgeGraph:illegal-geometry-type", "Illegal Geometry type for multipath conversion");
  let l5 = 0;
  return h7.forEach((t10) => {
    const e9 = [];
    for (let o15 = 0; o15 < t10; o15++) {
      const t11 = [];
      for (let e10 = 0; e10 < r9; e10++) t11[e10] = n9[l5], l5++;
      e9.push(t11);
    }
    s30.paths.push(e9);
  }), s30;
}
function p15(t10, e8) {
  let o14 = 2;
  return t10.has_z ? (e8.hasZ = t10.has_z, o14++) : e8.hasZ = false, t10.has_m ? (e8.hasM = t10.has_m, o14++) : e8.hasM = false, o14;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToQueryResponseObjFactories.js
var d6 = () => n.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors");
var _3 = { decodedWasmObjToQueryResponseObj: (e8, t10, n9) => {
  if (null == e8) return null;
  if ("object" != typeof e8) return e8;
  if ("getDate" in e8) return e8;
  if ("geometry_type" in e8) switch (e8.geometry_type.value) {
    case null:
      return null;
    case 1:
      return a6(e8, n9);
    case 2:
      return n8(e8, n9);
    case 3:
      return h5(e8, n9);
    case 4:
      return l4(e8, n9);
    case 5:
    case 7:
      return d6().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"), null;
    default:
      return d6().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"), null;
  }
  else {
    if (!("object_value_type" in e8)) return d6().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"), null;
    switch (e8.object_value_type.value) {
      case 0:
        return h6(e8, t10, n9);
      case 1:
        return y7(e8, t10, n9);
      case 2:
        return b3(e8, t10, n9);
      case 3:
        return w4(e8, t10, n9);
      case 4:
        return f6(e8, t10, n9);
      default:
        return d6().warnOnce("Unknown graph object type detected!  Result interpreted as null"), null;
    }
  }
} };
function f6(e8, t10, n9) {
  const r9 = [], o14 = e8.count();
  for (let s30 = 0; s30 < o14; s30++) {
    const o15 = e8.get_value_at(s30);
    r9.push(m7(o15, t10, n9));
  }
  return r9;
}
function m7(e8, t10, n9) {
  return _3.decodedWasmObjToQueryResponseObj(e8, t10, n9);
}
function y7(e8, t10, r9) {
  const o14 = e8.type_name, s30 = j4(e8, t10, r9), u5 = e8.get_id();
  return new p(Object.assign({ typeName: o14, id: u5 }, s30));
}
function j4(e8, t10, n9) {
  const r9 = {}, o14 = e8.key_count();
  for (let s30 = 0; s30 < o14; s30++) r9[e8.get_key_at(s30)] = m7(e8.get_value_at(s30), t10, n9);
  return { properties: r9 };
}
function h6(e8, t10, n9) {
  return new t2(j4(e8, t10, n9));
}
function w4(e8, t10, n9) {
  const r9 = e8.entity_count(), o14 = e8.relationship_count(), s30 = [];
  for (let u5 = 0; u5 < r9; u5++) s30.push(y7(e8.get_entity_at(u5), t10, n9)), u5 < o14 && s30.push(b3(e8.get_relationship_at(u5), t10, n9));
  return new s4({ path: s30 });
}
function b3(e8, t10, n9) {
  const r9 = e8.type_name, o14 = j4(e8, t10, n9);
  return new s5(Object.assign({ typeName: r9, id: e8.get_id(), originId: e8.get_origin_entity_id(), destinationId: e8.get_destination_entity_id() }, o14));
}
function O4(e8) {
  const n9 = [];
  for (let t10 = 0; t10 < e8.get_header_keys().size(); t10++) n9.push(e8.get_header_keys().get(t10));
  const r9 = new S(e8.get_out_sr());
  return new s11({ headerKeys: n9, outSpatialReference: r9, exceededTransferLimit: e8.exceeded_transfer_limit() });
}

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphApplyEditsResult.js
var r7 = class extends b {
  constructor(e8) {
    super(e8), this.hasError = false, this.error = null, this.editResults = [], this.cascadeRelationshipDeleteResults = [], this.cascadeProvenanceDeleteResults = [];
  }
};
__decorate([a()], r7.prototype, "hasError", void 0), __decorate([a()], r7.prototype, "error", void 0), __decorate([a()], r7.prototype, "editResults", void 0), __decorate([a()], r7.prototype, "cascadeRelationshipDeleteResults", void 0), __decorate([a()], r7.prototype, "cascadeProvenanceDeleteResults", void 0), r7 = __decorate([c("esri.rest.knowledgeGraph.GraphApplyEditsResult")], r7);
var p16 = r7;

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToUpdateResponseFactories.js
function r8(r9) {
  const s30 = r9.has_error(), _4 = new p16({ hasError: s30, error: s30 ? o5(r9.error) : null }), d7 = r9.get_edit_results_count();
  for (let e8 = 0; e8 < d7; e8++) {
    const s31 = r9.get_edit_results_at(e8);
    s31.deleteLater();
    const d8 = r9.get_edit_results_type_name_at(e8), o15 = [], a7 = [], l5 = [], n9 = s31.get_add_results_count(), c5 = s31.get_update_results_count(), u5 = s31.get_delete_results_count();
    for (let e9 = 0; e9 < n9; e9++) {
      const r10 = s31.get_add_result_at(e9);
      r10.deleteLater(), o15.push({ id: r10.id, error: o5(r10.error) });
    }
    for (let e9 = 0; e9 < c5; e9++) {
      const r10 = s31.get_update_result_at(e9);
      r10.deleteLater(), a7.push({ id: r10.id, error: o5(r10.error) });
    }
    for (let e9 = 0; e9 < u5; e9++) {
      const r10 = s31.get_delete_result_at(e9);
      r10.deleteLater(), l5.push({ id: r10.id, error: o5(r10.error) });
    }
    _4.editResults.push({ typeName: d8, adds: o15, updates: a7, deletes: l5 });
  }
  const o14 = r9.get_cascaded_rel_deletes_count();
  for (let e8 = 0; e8 < o14; e8++) {
    const s31 = r9.get_cascaded_rel_deletes_at(e8);
    s31.deleteLater();
    const d8 = r9.get_cascaded_rel_deletes_type_name_at(e8), o15 = [];
    for (let e9 = 0; e9 < s31.get_count(); e9++) {
      const r10 = s31.get_result_at(e9);
      r10.deleteLater(), o15.push({ id: r10.id, originId: r10.origin_id, destinationId: r10.dest_id, error: o5(r10.error) });
    }
    _4.cascadeRelationshipDeleteResults.push({ typeName: d8, cascadeRelationshipDeletes: o15 });
  }
  if (r9.has_cascading_provenance_deletes()) {
    const e8 = r9.get_cascading_provenance_deletes();
    e8.deleteLater();
    const s31 = e8.get_count();
    for (let r10 = 0; r10 < s31; r10++) {
      const s32 = e8.get_result_at(r10);
      s32.deleteLater(), _4.cascadeProvenanceDeleteResults.push({ id: s32.id, error: o5(s32.error) });
    }
  }
  return _4;
}

// node_modules/@arcgis/core/rest/knowledgeGraphService.js
var V2 = /* @__PURE__ */ new Map();
var J2 = () => new Map(V2.entries());
var Y = { fetchKnowledgeGraph: async (e8) => {
  const t10 = new p8({ url: e8 }), a7 = [];
  return a7.push(ge(t10)), a7.push(ye(t10)), await Promise.all(a7), t10;
}, refreshDataModel: async (e8) => {
  e8.dataModel = await it(e8);
}, refreshServiceDefinition: async (e8) => {
  const a7 = (await f(e8.url, { query: { f: "json" } })).data;
  return a7.capabilities = a7?.capabilities?.split(","), a7.supportedQueryFormats = a7?.supportedQueryFormats?.split(","), e8.serviceDefinition = new p7(a7), e8.serviceDefinition;
}, executeFindPathsAsynchronous: async (e8, t10) => {
  const r9 = e8.inKnowledgeGraphUrl.split("/rest/services");
  if (r9.length < 2) throw new r("knowledge-graph:invalid-tool-url", "The URL for the KG Service was not correctly formatted.  It should contain /rest/services/");
  const n9 = r9[0], o14 = (await De(`${n9}/rest/info`, { query: { f: "json" } })).data.currentVersion, d7 = `/rest/services/${o14 && o14 < 12 ? "System" : "Utilities"}/KnowledgeGraphServerToolsAsync/GPServer/ServerFilteredFindPaths`;
  return await ve(`${n9}${d7}`, { in_knowledge_graph_url: e8.inKnowledgeGraphUrl, config_type: "STRING", config_string: e8.config.toJSON(), result_type: "STRING" }, {}, t10);
}, executeFindPaths: async (e8, t10) => {
  const r9 = e8.inKnowledgeGraphUrl.split("/rest/services");
  if (r9.length < 2) throw new r("knowledge-graph:invalid-tool-url", "The URL for the KG Service was not correctly formatted.  It should contain /rest/services/");
  const n9 = r9[0], o14 = (await De(`${n9}/rest/info`, { query: { f: "json" } })).data.currentVersion, d7 = `/rest/services/${o14 && o14 < 12 ? "System" : "Utilities"}/KnowledgeGraphServerTools/GPServer/ServerFilteredFindPaths/execute`, i9 = await De(`${n9}${d7}`, __spreadValues({ method: "post", query: { f: "pjson", in_knowledge_graph_url: e8.inKnowledgeGraphUrl, config_type: "STRING", config_string: JSON.stringify(e8.config), result_type: "STRING" } }, t10));
  if (i9.data.results.length < 1) throw new r("knowledge-graph:no-results", "No results were returned from the FindPaths tool - no results returned", i9);
  let s30;
  for (const a7 of i9.data.results) if ("out_results_string" === a7.paramName) {
    s30 = a7.value;
    break;
  }
  if (!s30) throw new r("knowledge-graph:no-results", "No results were returned from the FindPaths tool - no results were returned on the expected paramater out_results_string", i9);
  return s30;
}, fetchAsynchronousFindPathsResultData: async (e8, t10) => (await e8.fetchResultData("out_results_string", null, t10)).value, executeQueryStreaming: async (e8, t10, r9) => {
  const n9 = "include", o14 = `${e8.url}/graph/query`;
  await Pe(e8);
  const d7 = await Qe(o14, r9);
  if (!e8.serviceDefinition?.supportsProvenance && t10.provenanceBehavior === n9) throw new r("knowledge-graph:provenance-not-supported", "The Knowledge Graph Service definition indicated that provenance is not supported");
  d7.data.body = await Ke(t10, e8);
  const i9 = await Te(d7.data.url, d7.data);
  if (e8.dataModel) {
    const t11 = await dt(i9, e8.dataModel);
    return new a4({ resultRowsStream: t11.readableStream, resultHeader: t11.resultHeader });
  }
  throw new r("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, executeApplyEdits: async (e8, t10, r9) => {
  if (e8.serviceDefinition?.dataEditingNotSupported || null != e8.dataModel.arcgisManaged && !e8.dataModel.arcgisManaged) throw new r("knowledge-graph:data-editing-not-supported", "The Knowledge Graph Service definition indicated that data editing is not supported");
  const n9 = `${e8.url}/graph/applyEdits`;
  await Pe(e8);
  const o14 = await Qe(n9, r9);
  o14.data.body = await Se(t10, e8);
  return Oe(await Te(o14.data.url, o14.data));
}, executeAddNamedTypes: async (e8, t10, r9) => {
  if (!t10.newEntityTypes?.length && !t10.newRelationshipTypes?.length) throw new r("knowledge-graph:no-arguments", "The operation to add types to the data model contained no values");
  const n9 = `${e8.url}/dataModel/edit/namedTypes/add`;
  await Pe(e8);
  const o14 = await Qe(n9, r9);
  o14.data.body = await Re(t10);
  const d7 = await Te(o14.data.url, o14.data), i9 = await We(d7);
  return i9.updatedKnowledgeGraph = await we(e8.url), i9;
}, executeDeleteNamedType: async (e8, t10, r9) => {
  if (!t10) throw new r("knowledge-graph:no-arguments", "The operation to delete a named type from the data model contained no value");
  const n9 = `${e8.url}/dataModel/edit/namedTypes/${t10}/delete`;
  await Pe(e8);
  const o14 = await Qe(n9, r9);
  o14.data.body = "";
  const d7 = await Te(o14.data.url, o14.data), i9 = await He(d7);
  return i9.updatedKnowledgeGraph = await we(e8.url), i9;
}, executeUpdateNamedType: async (e8, t10, r9, n9) => {
  if (!t10 && !Object.keys(r9).length) throw new r("knowledge-graph:no-arguments", "The operation to update types in the data model contained missing or empty values");
  const o14 = `${e8.url}/dataModel/edit/namedTypes/${t10}/update`;
  await Pe(e8);
  const d7 = await Qe(o14, n9);
  d7.data.body = await Ee(r9, t10, e8.dataModel);
  const i9 = await Te(d7.data.url, d7.data), s30 = await ze(i9);
  return s30.updatedKnowledgeGraph = await we(e8.url), s30;
}, executeAddGraphProperties: async (e8, t10, r9, n9) => {
  if (!t10 && !r9.length) throw new r("knowledge-graph:no-arguments", "The operation to add properties to the data model contained missing or empty values");
  const o14 = `${e8.url}/dataModel/edit/namedTypes/${t10}/fields/add`;
  await Pe(e8);
  const d7 = await Qe(o14, n9);
  d7.data.body = await Me(r9);
  const i9 = await Te(d7.data.url, d7.data), s30 = await Be(i9);
  return s30.updatedKnowledgeGraph = await we(e8.url), s30;
}, executeDeleteGraphProperty: async (e8, t10, r9, n9) => {
  if (!t10 && !r9) throw new r("knowledge-graph:no-arguments", "The operation to delete property contained missing or empty values");
  const o14 = `${e8.url}/dataModel/edit/namedTypes/${t10}/fields/delete`;
  await Pe(e8);
  const d7 = await Qe(o14, n9);
  d7.data.body = await Ce(r9);
  const i9 = await Te(d7.data.url, d7.data), s30 = await Ve(i9);
  return s30.updatedKnowledgeGraph = await we(e8.url), s30;
}, executeUpdateGraphProperty: async (e8, t10, r9, n9, o14) => {
  if (!t10 && !r9 && !Object.keys(n9).length) throw new r("knowledge-graph:no-arguments", "The operation to update properties in the data model contained missing or empty values");
  const d7 = `${e8.url}/dataModel/edit/namedTypes/${t10}/fields/update`;
  await Pe(e8);
  const i9 = await Qe(d7, o14);
  i9.data.body = await qe(r9, n9);
  const s30 = await Te(i9.data.url, i9.data), c5 = await Je(s30);
  return c5.updatedKnowledgeGraph = await we(e8.url), c5;
}, executeAddGraphFieldIndex: async (e8, t10, r9, n9) => {
  if (!t10) throw new r("knowledge-graph:no-arguments", "The operation to update search index in the data model contained missing named type");
  if (!r9?.length) throw new r("knowledge-graph:no-arguments", "The operation to update search index in the data model contained missing or empty field index values");
  const o14 = `${e8.url}/dataModel/edit/namedTypes/${t10}/indexes/add`;
  await Pe(e8);
  const d7 = await Qe(o14, n9);
  d7.data.body = await Fe(r9);
  const i9 = await Te(d7.data.url, d7.data), s30 = await Ye(i9);
  return s30.updatedKnowledgeGraph = await we(e8.url), s30;
}, executeDeleteGraphFieldIndex: async (e8, t10, r9, n9) => {
  if (!t10) throw new r("knowledge-graph:no-arguments", "The operation to update search index in the data model contained missing named type");
  if (!r9?.length) throw new r("knowledge-graph:no-arguments", "The operation to update search index in the data model contained missing or empty field index values");
  const o14 = `${e8.url}/dataModel/edit/namedTypes/${t10}/indexes/delete`;
  await Pe(e8);
  const d7 = await Qe(o14, n9);
  d7.data.body = await Ue(r9);
  const i9 = await Te(d7.data.url, d7.data), s30 = await Xe(i9);
  return s30.updatedKnowledgeGraph = await we(e8.url), s30;
}, executeUpdateSearchIndex: async (e8, t10, r9, n9) => {
  if (!t10) throw new r("knowledge-graph:no-arguments", "The operation to update search index in the data model contained missing named type");
  if (!Object.keys(r9.addSearchProperties ?? {}).length && !Object.keys(r9.removeSearchProperties ?? {}).length) throw new r("knowledge-graph:no-arguments", "The operation to update search index in the data model contained missing or empty properties values");
  const o14 = `${e8.url}/dataModel/searchIndex/update`;
  await Pe(e8);
  const d7 = await Qe(o14, n9);
  d7.data.body = await $e(t10, r9);
  const i9 = await Te(d7.data.url, d7.data), s30 = await Ze(i9);
  return s30.updatedKnowledgeGraph = await we(e8.url), s30;
}, executeAddDomain: async (e8, t10, a7, { mergePolicy: r9 = "esriMergePolicyTypeDefaultValue", splitPolicy: n9 = "esriSplitPolicyTypeDefaultValue" }, o14) => {
  const d7 = `${e8.url}/dataModel/domains/add`;
  await Pe(e8);
  const i9 = await Qe(d7, o14);
  i9.data.body = await Ie(t10, a7, { mergePolicy: r9, splitPolicy: n9 });
  const s30 = await Te(i9.data.url, i9.data), c5 = await et(s30);
  return c5.updatedKnowledgeGraph = await we(e8.url), c5;
}, executeUpdateDomain: async (e8, t10, a7, r9, n9) => {
  const o14 = `${e8.url}/dataModel/domains/${t10.name}/update`;
  await Pe(e8);
  const d7 = await Qe(o14, n9);
  d7.data.body = await je(t10, a7, r9);
  const i9 = await Te(d7.data.url, d7.data), s30 = await tt(i9);
  return s30.updatedKnowledgeGraph = await we(e8.url), s30;
}, executeDeleteDomain: async (e8, t10, r9) => {
  const n9 = `${e8.url}/dataModel/domains/${t10}/delete`;
  if (!t10) throw new r("knowledge-graph:no-arguments", "The operation to delete a domain from the data model contained missing or empty domain name");
  await Pe(e8);
  const o14 = await Qe(n9, r9);
  o14.data.body = "";
  const d7 = await Te(o14.data.url, o14.data), i9 = await at(d7);
  return i9.updatedKnowledgeGraph = await we(e8.url), i9;
}, executeQuery: async (e8, r9, n9) => {
  const o14 = `${e8.url}/graph/query`, d7 = await f(o14, { responseType: "array-buffer", query: __spreadValues({ f: "pbf", openCypherQuery: r9.openCypherQuery }, n9?.query), signal: n9?.signal, timeout: n9?.timeout }), i9 = d7.getHeader?.("content-type"), c5 = d7.data;
  if (i9?.includes("application/x-protobuf")) {
    const t10 = new (await n6()).GraphQueryDecoder();
    if (t10.deleteLater(), e8.dataModel) {
      const a7 = ot({ wasmQueryDecoder: t10, newArrayBufferToParse: c5, dataModel: e8.dataModel });
      return new p6({ resultRows: a7.resultRows, resultHeader: a7.resultHeader });
    }
    throw new r("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new r("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: i9, data: d7.data });
}, executeSearch: async (e8, r9, n9) => {
  const o14 = "provenance" === r9.typeCategoryFilter ? "metaEntityProvenance" : r9.typeCategoryFilter, d7 = `${e8.url}/graph/search`, i9 = await f(d7, { responseType: "array-buffer", query: __spreadValues({ f: "pbf", searchQuery: `"${r9.searchQuery}"`, typeCategoryFilter: o14 }, n9?.query), signal: n9?.signal, timeout: n9?.timeout }), c5 = i9.getHeader?.("content-type"), p17 = i9.data;
  if (c5?.includes("application/x-protobuf")) {
    const t10 = new (await n6()).GraphQueryDecoder();
    if (t10.deleteLater(), e8.dataModel) {
      const a7 = ot({ wasmQueryDecoder: t10, newArrayBufferToParse: p17, dataModel: e8.dataModel });
      return new p6({ resultRows: a7.resultRows, resultHeader: a7.resultHeader });
    }
    throw new r("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new r("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: c5, data: i9.data });
}, executeSearchStreaming: async (e8, t10, r9) => {
  const n9 = `${e8.url}/graph/search`;
  await Pe(e8);
  const o14 = await Qe(n9, r9);
  o14.data.body = await Ne(t10);
  const d7 = await Te(o14.data.url, o14.data);
  if (e8.dataModel) {
    const t11 = await dt(d7, e8.dataModel);
    return new a4({ resultRowsStream: t11.readableStream, resultHeader: t11.resultHeader });
  }
  throw new r("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, fetchClientDataAtKeys: async (e8, t10, r9 = { ignoreCache: false }) => {
  if (!t10.length) return /* @__PURE__ */ new Map();
  let n9 = V2.get(e8.url || "");
  n9 || (n9 = /* @__PURE__ */ new Map(), V2.set(e8.url || "", n9));
  const o14 = new Map(n9.entries()), d7 = `${e8.url}/clientData/fetch`;
  t10 = Array.from(new Set(t10));
  const i9 = await n6(), s30 = t5(t10, n9, i9, r9.ignoreCache), c5 = await Qe(d7, r9.requestOptions);
  c5.data.body = s30;
  const p17 = await Te(c5.data.url, c5.data), l5 = p17.headers.get("content-type");
  if (l5?.includes("application/x-protobuf")) {
    const e9 = new i9.ClientDataFetchResponseDecoder();
    e9.deleteLater();
    const t11 = await p17.arrayBuffer();
    return e9.decode(new Uint8Array(t11)), e9.has_error() && e2(e9.error, "knowledge-graph:fetchClientDataAtKeys-decoding-error", "An error occurred while decoding the client data keys response"), e5(e9, n9, o14, r9.ignoreCache);
  }
  throw new r("knowledge-graph:unexpected-server-response", "server returned an unexpected response when fetching client data", { responseType: l5, data: p17 });
}, fetchAllClientDataKeys: async (e8, r9) => {
  const n9 = `${e8.url}/clientData`, o14 = await f(n9, { responseType: "array-buffer", query: { f: "pbf" }, signal: r9?.signal, timeout: r9?.timeout }), d7 = o14.getHeader?.("content-type"), i9 = o14.data;
  if (d7?.includes("application/x-protobuf")) {
    const e9 = new (await n6()).ClientDataKeysResponseDecoder();
    return e9.deleteLater(), e9.decode(new Uint8Array(i9)), e9.has_error() && e2(e9.error, "knowledge-graph:fetchAllClientDataKeys-decoding-error", "An error occurred while decoding the client data keys response"), t8(e9);
  }
  throw new r("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: d7, data: o14.data });
}, clearClientDataCache: () => V2.clear(), _fetchWrapper: async (e8, t10) => fetch(e8, t10), _submitJobWrapper: async (e8, t10, a7, r9) => s10(e8, t10, a7, r9), _esriRequestWrapper: async (e8, a7) => f(e8, a7) };
async function X(e8, t10, a7) {
  return Y.executeApplyEdits(e8, t10, a7);
}
async function Z(e8, t10, a7) {
  return Y.executeAddNamedTypes(e8, t10, a7);
}
async function ee(e8, t10, a7) {
  return Y.executeDeleteNamedType(e8, t10, a7);
}
async function te(e8, t10, a7, r9) {
  return Y.executeUpdateNamedType(e8, t10, a7, r9);
}
async function ae(e8, t10, a7, r9) {
  return Y.executeAddGraphProperties(e8, t10, a7, r9);
}
async function re(e8, t10, a7, r9) {
  return Y.executeDeleteGraphProperty(e8, t10, a7, r9);
}
async function ne(e8, t10, a7, r9, n9) {
  return Y.executeUpdateGraphProperty(e8, t10, a7, r9, n9);
}
async function oe(e8, t10, a7, r9) {
  return Y.executeAddGraphFieldIndex(e8, t10, a7, r9);
}
async function de(e8, t10, a7, r9) {
  return Y.executeDeleteGraphFieldIndex(e8, t10, a7, r9);
}
async function ie(e8, t10, a7, r9) {
  return Y.executeUpdateSearchIndex(e8, t10, a7, r9);
}
async function se(e8, t10, a7) {
  return Y.executeQuery(e8, t10, a7);
}
async function ce(e8, t10, a7) {
  return Y.executeQueryStreaming(e8, t10, a7);
}
async function pe(e8, t10, a7) {
  return Y.executeSearch(e8, t10, a7);
}
async function le(e8, t10, a7) {
  return Y.executeSearchStreaming(e8, t10, a7);
}
function ue(e8, t10) {
  return Y.fetchAllClientDataKeys(e8, t10);
}
function he(e8, t10, a7) {
  return Y.fetchClientDataAtKeys(e8, t10, a7);
}
async function we(e8) {
  return Y.fetchKnowledgeGraph(e8);
}
async function ge(e8) {
  return Y.refreshDataModel(e8);
}
async function ye(e8) {
  return Y.refreshServiceDefinition(e8);
}
async function fe(e8, t10) {
  return Y.executeFindPathsAsynchronous(e8, t10);
}
async function me(e8, t10) {
  return Y.executeFindPaths(e8, t10);
}
async function _e(e8, t10) {
  return Y.fetchAsynchronousFindPathsResultData(e8, t10);
}
async function ke(e8, t10, a7, r9 = { mergePolicy: "esriMergePolicyTypeDefaultValue", splitPolicy: "esriSplitPolicyTypeDefaultValue" }, n9) {
  return Y.executeAddDomain(e8, t10, a7, r9, n9);
}
async function Ge(e8, t10, a7, r9, n9) {
  return Y.executeUpdateDomain(e8, t10, a7, r9, n9);
}
async function be(e8, t10, a7) {
  return Y.executeDeleteDomain(e8, t10, a7);
}
function xe() {
  return Y.clearClientDataCache();
}
async function Te(e8, t10) {
  return Y._fetchWrapper(e8, t10);
}
async function ve(e8, t10, a7, r9) {
  return Y._submitJobWrapper(e8, t10, a7, r9);
}
async function De(e8, t10) {
  return Y._esriRequestWrapper(e8, t10);
}
async function Pe(t10) {
  const a7 = s?.findCredential(t10.url);
  a7 || (t10.dataModel ? await it(t10) : await ge(t10));
}
function Ae(e8, t10, a7, r9) {
  null == t10 ? a7.set_param_key_value(e8, "") : "object" != typeof t10 || t10 instanceof Date ? a7.set_param_key_value(e8, t10) : t10 instanceof s2 ? a7.set_param_key_value(e8, u3(t10, r9)) : Array.isArray(t10) ? a7.set_param_key_value(e8, l3(t10, r9)) : a7.set_param_key_value(e8, s16(t10, r9));
}
async function Se(e8, t10) {
  if (t10.dataModel || await ge(t10), !t10.dataModel) throw new r("knowledge-graph:data-model-undefined", "Encoding could not proceed because a data model was not provided and it could not be determined from the service");
  const r9 = await n6(), n9 = !!e8.options?.cascadeDelete, o14 = !!e8.options?.cascadeProvenanceDelete, d7 = new r9.GraphApplyEditsEncoder(r9.SpatialReferenceUtil.WGS84(), e8.options?.inputQuantizationParameters ? u4(e8.options?.inputQuantizationParameters) : r9.InputQuantizationUtil.WGS84_lossless());
  d7.deleteLater(), d7.cascade_delete = n9, d7.cascade_delete_provenance = o14;
  try {
    let t11;
    e8.entityAdds?.forEach((e9) => {
      t11 = d7.add_entity(d4(e9, r9)), e2(t11, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), e8.relationshipAdds?.forEach((e9) => {
      if (!e9.originId || !e9.destinationId) throw new r("knowledge-graph:relationship-origin-destination-missing", "When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");
      t11 = d7.add_relationship(d4(e9, r9)), e2(t11, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), e8.entityUpdates?.forEach((e9) => {
      if (!e9.id) throw new r("knowledge-graph:entity-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      t11 = d7.update_entity(d4(e9, r9)), e2(t11, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), e8.relationshipUpdates?.forEach((e9) => {
      if (!e9.id) throw new r("knowledge-graph:relationship-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      t11 = d7.update_relationship(d4(e9, r9)), e2(t11, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), e8.entityDeletes?.forEach((e9) => {
      if (!e9.typeName) throw new r("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const t12 = d7.make_delete_helper(e9.typeName, true);
      t12.deleteLater(), e9.ids?.forEach((e10) => {
        t12.delete_by_id(e10);
      });
    }), e8.relationshipDeletes?.forEach((e9) => {
      if (!e9.typeName) throw new r("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const t12 = d7.make_delete_helper(e9.typeName, false);
      e9.ids?.forEach((e10) => {
        t12.delete_by_id(e10);
      });
    }), d7.encode();
  } catch (s30) {
    throw new r("knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed", { error: s30 });
  }
  const i9 = d7.get_encoding_result();
  return e2(i9.error, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed"), structuredClone(i9.get_byte_buffer());
}
async function Re(e8) {
  const t10 = await n6(), r9 = new t10.GraphNamedObjectTypeAddsRequestEncoder();
  r9.deleteLater(), e8.newEntityTypes?.forEach((e9) => {
    r9.add_entity_type(p11(e9, t10));
  }), e8.newRelationshipTypes?.forEach((e9) => {
    r9.add_relationship_type(y5(e9, t10));
  });
  try {
    r9.encode();
  } catch (o14) {
    throw new r("knowledge-graph:addNamedTypes-encoding-failed", "Attempting to encode the addNamedTypes failed", { error: o14 });
  }
  const n9 = r9.get_encoding_result();
  return e2(n9.error, "knowledge-graph:addNamedTypes-encoding-failed", "Attempting to encode the addNamedTypes failed"), structuredClone(n9.get_byte_buffer());
}
async function Ee(e8, t10, r9) {
  const n9 = await n6(), o14 = new n9.GraphNamedObjectTypeUpdateRequestEncoder();
  o14.deleteLater();
  if (r9.entityTypes.some((e9) => e9.name === t10)) o14.update_entity_type(c4(e8, n9));
  else {
    if (!r9.relationshipTypes.some((e9) => e9.name === t10)) throw new r("knowledge-graph:updateNamedType-encoding-failed", "The named type you are trying to update does not exist in the data model");
    o14.update_relationship_type(f4(e8, n9));
  }
  o14.update_alias = e8.hasOwnProperty("alias");
  try {
    o14.encode();
  } catch (i9) {
    throw new r("knowledge-graph:updateNamedType-encoding-failed", "Attempting to encode the updateNamedType failed", { error: i9 });
  }
  const d7 = o14.get_encoding_result();
  return e2(d7.error, "knowledge-graph:updateNamedType-encoding-failed", "Attempting to encode the updateNamedType failed"), structuredClone(d7.get_byte_buffer());
}
async function Me(e8) {
  const t10 = await n6(), r9 = new t10.GraphPropertyAddsRequestEncoder();
  r9.deleteLater(), e8.forEach((e9) => {
    r9.add_graph_property(m5(e9, t10));
  });
  try {
    r9.encode();
  } catch (o14) {
    throw new r("knowledge-graph:addGraphProperties-encoding-failed", "Attempting to encode the addGraphProperties failed", { error: o14 });
  }
  const n9 = r9.get_encoding_result();
  return e2(n9.error, "knowledge-graph:addGraphProperties-encoding-failed", "Attempting to encode the addGraphProperties failed"), structuredClone(n9.get_byte_buffer());
}
async function Ce(e8) {
  const t10 = new (await n6()).GraphPropertyDeleteRequestEncoder();
  t10.deleteLater(), t10.field_name = e8;
  try {
    t10.encode();
  } catch (n9) {
    throw new r("knowledge-graph:deleteGraphProperty-encoding-failed", "Attempting to encode the deleteGraphProperty failed", { error: n9 });
  }
  const r9 = t10.get_encoding_result();
  return e2(r9.error, "knowledge-graph:deleteGraphProperty-encoding-failed", "Attempting to encode the deleteGraphProperty failed"), structuredClone(r9.get_byte_buffer());
}
async function qe(e8, t10) {
  const r9 = await n6(), n9 = new r9.GraphPropertyUpdateRequestEncoder();
  n9.deleteLater(), n9.update_graph_property(_2(t10, r9)), n9.set_property_name(e8), n9.update_alias = t10.hasOwnProperty("alias"), n9.update_editable = t10.hasOwnProperty("editable"), n9.update_required = t10.hasOwnProperty("required"), n9.update_visible = t10.hasOwnProperty("defaultVisibility"), n9.update_default_value = t10.hasOwnProperty("defaultValue"), n9.update_domain = t10.hasOwnProperty("domain");
  try {
    n9.encode();
  } catch (d7) {
    throw new r("knowledge-graph:updateGraphProperty-encoding-failed", "Attempting to encode the updateGraphProperty failed", { error: d7 });
  }
  const o14 = n9.get_encoding_result();
  return e2(o14.error, "knowledge-graph:updateGraphProperty-encoding-failed", "Attempting to encode the updateGraphProperty failed"), structuredClone(o14.get_byte_buffer());
}
async function Fe(e8) {
  const t10 = await n6(), r9 = new t10.GraphIndexAddsRequestEncoder();
  r9.deleteLater(), e8.forEach((e9) => {
    r9.add_field_index(w2(e9, t10));
  });
  try {
    r9.encode();
  } catch (o14) {
    throw new r("knowledge-graph:addGraphFieldIndex-encoding-failed", "Attempting to encode the addGraphFieldIndex failed", { error: o14 });
  }
  const n9 = r9.get_encoding_result();
  return e2(n9.error, "knowledge-graph:addGraphFieldIndex-encoding-failed", "Attempting to encode the addGraphFieldIndex failed"), structuredClone(n9.get_byte_buffer());
}
async function Ie(e8, t10, r9) {
  const n9 = await n6(), o14 = new n9.GraphDomainAddRequestEncoder();
  o14.deleteLater(), o14.set_domain(h3(e8, n9, t10, r9));
  try {
    o14.encode();
  } catch (i9) {
    throw new r("knowledge-graph:addDomain-encoding-failed", "Attempting to encode the domain failed", { error: i9 });
  }
  const d7 = o14.get_encoding_result();
  return e2(d7.error, "knowledge-graph:addDomain-encoding-failed", "Attempting to encode the domain failed"), structuredClone(d7.get_byte_buffer());
}
async function je(e8, t10, r9) {
  const n9 = await n6(), o14 = new n9.GraphDomainUpdateRequestEncoder();
  o14.deleteLater(), o14.set_domain(h3(e8, n9, t10, r9)), o14.update_domain = true, r9?.mergePolicy && (o14.update_merge_policy = true), r9?.splitPolicy && (o14.update_split_policy = true);
  try {
    o14.encode();
  } catch (i9) {
    throw new r("knowledge-graph:updateDomain-encoding-failed", "Attempting to encode the domain failed", { error: i9 });
  }
  const d7 = o14.get_encoding_result();
  return e2(d7.error, "knowledge-graph:updateDomain-encoding-failed", "Attempting to encode the domain failed"), structuredClone(d7.get_byte_buffer());
}
async function Ue(e8) {
  const t10 = new (await n6()).GraphIndexDeleteRequestEncoder();
  t10.deleteLater(), e8.forEach((e9) => {
    t10.add_index_name(e9);
  });
  try {
    t10.encode();
  } catch (n9) {
    throw new r("knowledge-graph:deleteGraphFieldIndex-encoding-failed", "Attempting to encode the deleteGraphFieldIndex failed", { error: n9 });
  }
  const r9 = t10.get_encoding_result();
  return e2(r9.error, "knowledge-graph:deleteGraphFieldIndex-encoding-failed", "Attempting to encode the deleteGraphFieldIndex failed"), structuredClone(r9.get_byte_buffer());
}
async function $e(e8, t10) {
  const r9 = await n6(), n9 = new r9.GraphUpdateSearchIndexRequestEncoder();
  n9.deleteLater(), t10.hasOwnProperty("addSearchProperties") && n9.insert_add_search_property(e8, g5(t10.addSearchProperties, r9)), t10.hasOwnProperty("removeSearchProperties") && n9.insert_delete_search_property(e8, g5(t10.removeSearchProperties, r9));
  try {
    n9.encode();
  } catch (d7) {
    throw new r("knowledge-graph:updateSearchIndex-encoding-failed", "Attempting to encode the updateSearchIndex failed", { error: d7 });
  }
  const o14 = n9.get_encoding_result();
  return e2(o14.error, "knowledge-graph:updateSearchIndex-encoding-failed", "Attempting to encode the updateSearchIndex failed"), structuredClone(o14.get_byte_buffer());
}
async function Ke(e8, t10) {
  const r9 = await n6(), n9 = new r9.GraphQueryRequestEncoder();
  if (n9.deleteLater(), e8.outputSpatialReference ? n9.output_spatial_reference = { wkid: e8.outputSpatialReference.wkid, latestWkid: e8.outputSpatialReference.latestWkid, vcsWkid: e8.outputSpatialReference.vcsWkid, latestVcsWkid: e8.outputSpatialReference.latestVcsWkid, wkt: e8.outputSpatialReference.wkt ?? "" } : n9.output_spatial_reference = r9.SpatialReferenceUtil.WGS84(), n9.open_cypher_query = e8.openCypherQuery, e8.bindParameters) for (const [a7, i9] of Object.entries(e8.bindParameters)) Ae(a7, i9, n9, r9);
  if (e8.bindGeometryQuantizationParameters) y3(e8.bindGeometryQuantizationParameters, n9);
  else {
    if (t10.dataModel || await ge(t10), 4326 !== t10.dataModel?.spatialReference?.wkid) throw new r("knowledge-graph:SR-quantization-mismatch", "If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");
    n9.input_quantization_parameters = r9.InputQuantizationUtil.WGS84_lossless();
  }
  e8.outputQuantizationParameters && m4(e8.outputQuantizationParameters, n9, r9), e8.provenanceBehavior && c3(e8.provenanceBehavior, n9);
  try {
    n9.encode();
  } catch (d7) {
    throw new r("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { error: d7 });
  }
  const o14 = n9.get_encoding_result();
  if (0 !== o14.error.error_code) throw new r("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { errorCode: o14.error.error_code, errorMessage: o14.error.error_message });
  return structuredClone(o14.get_byte_buffer());
}
async function Ne(e8) {
  const t10 = await n6(), r9 = new t10.GraphSearchRequestEncoder();
  r9.deleteLater(), r9.search_query = e8.searchQuery;
  const n9 = "provenance" === e8.typeCategoryFilter ? "meta_entity_provenance" : e8.typeCategoryFilter;
  if (r9.type_category_filter = t10.esriNamedTypeCategory[n9], true === e8.returnSearchContext && (r9.return_search_context = e8.returnSearchContext), null != e8.start && e8.start > 0 && (r9.start_index = e8.start), null != e8.num && (r9.max_num_results = e8.num), null != e8.idsFilter && Array.isArray(e8.idsFilter) && e8.idsFilter.length > 0) try {
    r9.set_ids_filter(l3(e8.idsFilter, t10));
  } catch (d7) {
    throw new r("knowledge-graph:ids-format-error", "Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string", { error: d7 });
  }
  e8.namedTypesFilter?.forEach((e9) => {
    r9.add_named_type_filter(e9);
  });
  try {
    r9.encode();
  } catch (d7) {
    throw new r("knowledge-graph:search-encoding-failed", "Attempting to encode the search failed", { error: d7 });
  }
  const o14 = r9.get_encoding_result();
  if (0 !== o14.error.error_code) throw new r("knowledge-graph:search-encoding-failed", "Attempting to get encoding result from the query failed", { errorCode: o14.error.error_code, errorMessage: o14.error.error_message });
  return structuredClone(o14.get_byte_buffer());
}
async function Qe(e8, a7) {
  return f(e8, { responseType: "native-request-init", method: "post", query: __spreadValues({ f: "pbf" }, a7?.query), body: "x", headers: { "Content-Type": "application/octet-stream" }, signal: a7?.signal, timeout: a7?.timeout });
}
async function Le(e8, t10, r9) {
  const n9 = e8.headers.get("content-type");
  if (n9?.includes("application/x-protobuf")) {
    const a7 = await e8.arrayBuffer(), n10 = new t10();
    try {
      return n10.decode(new Uint8Array(a7)), r9(n10);
    } finally {
      n10.deleteLater();
    }
  }
  throw new r("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: n9, data: await e8.text() });
}
async function Oe(e8) {
  return Le(e8, (await n6()).GraphApplyEditsDecoder, r8);
}
async function We(e8) {
  return Le(e8, (await n6()).GraphNamedObjectTypeAddsResponseDecoder, i7);
}
async function He(e8) {
  return Le(e8, (await n6()).GraphNamedObjectTypeDeleteResponseDecoder, m6);
}
async function ze(e8) {
  return Le(e8, (await n6()).GraphNamedObjectTypeUpdateResponseDecoder, a5);
}
async function Be(e8) {
  return Le(e8, (await n6()).GraphPropertyAddsResponseDecoder, f5);
}
async function Ve(e8) {
  return Le(e8, (await n6()).GraphPropertyDeleteResponseDecoder, g6);
}
async function Je(e8) {
  return Le(e8, (await n6()).GraphPropertyUpdateResponseDecoder, h4);
}
async function Ye(e8) {
  return Le(e8, (await n6()).GraphIndexAddsResponseDecoder, R2);
}
async function Xe(e8) {
  return Le(e8, (await n6()).GraphIndexDeleteResponseDecoder, j3);
}
async function Ze(e8) {
  return Le(e8, (await n6()).GraphUpdateSearchIndexResponseDecoder, y6);
}
async function et(e8) {
  return Le(e8, (await n6()).GraphDomainAddResponseDecoder, w3);
}
async function tt(e8) {
  return Le(e8, (await n6()).GraphDomainUpdateResponseDecoder, w3);
}
async function at(e8) {
  return Le(e8, (await n6()).GraphDomainDeleteResponseDecoder, w3);
}
var rt = 50;
function nt(e8) {
  rt = e8;
}
function ot({ wasmQueryDecoder: e8, newArrayBufferToParse: t10, dataModel: r9, decodedHeader: n9, limitMaxProcessingTime: o14 = false }) {
  t10 && e8.push_buffer(new Uint8Array(t10));
  const i9 = [];
  let s30, c5, p17 = 0;
  const l5 = Date.now();
  let u5 = true;
  for (; e8.next_row(); ) {
    s30 && c5 || (s30 = n9 ?? O4(e8), c5 = s30.outSpatialReference ?? new S({ wkid: 4326 })), p17 || (p17 = e8.get_header_keys().size());
    const t11 = new Array(p17);
    for (let a7 = 0; a7 < p17; a7++) {
      const n10 = e8.get_value(a7);
      t11[a7] = m7(n10, r9, c5);
    }
    if (i9.push(t11), o14 && Date.now() - l5 > rt) {
      u5 = false;
      break;
    }
  }
  if (e8.has_error()) throw new r("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded - inner row decoding", { errorCode: e8.error.error_code, errorMessage: e8.error.error_message });
  return { resultHeader: s30, resultRows: i9, parsedAllResultsFromBuffer: u5 };
}
async function dt(e8, t10) {
  const o14 = e8.headers.get("content-type");
  if (e8.headers.get("content-length") && n.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."), o14?.includes("application/x-protobuf")) {
    const o15 = e8.body?.getReader(), d7 = new (await n6()).GraphQueryDecoder();
    let i9, s30, p17;
    d7.deleteLater();
    const l5 = new Promise((e9, t11) => {
      s30 = e9, p17 = t11;
    });
    let u5 = false, h7 = null;
    const g7 = new ReadableStream({ pull: async function e9(l6) {
      if (!o15) {
        const e10 = new r("knowledge-graph:stream-decoding-error", "Error reading from stream - reader is undefined");
        throw p17(e10), e10;
      }
      const { done: w5, value: g8 } = h7 ? { done: false, value: null } : await o15.read().catch((e10) => {
        throw p17(e10), o15.releaseLock(), e10;
      });
      g8 && (h7 = g8);
      try {
        if (w5) {
          let e10;
          if (d7.has_error() ? e10 = new r("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded - query stream done", { errorCode: d7.error.error_code, errorMessage: d7.error.error_message }) : u5 || s30(new s11()), o15.releaseLock(), e10) throw l6.error(e10), p17(e10), e10;
          return void l6.close();
        }
        const { resultHeader: r9, resultRows: n9, parsedAllResultsFromBuffer: y8 } = ot({ wasmQueryDecoder: d7, newArrayBufferToParse: g8, dataModel: t10, decodedHeader: i9, limitMaxProcessingTime: true });
        return y8 && (h7 = null), !i9 && r9 && (i9 = r9, s30(r9), u5 = true), n9.length > 0 ? void l6.enqueue(n9) : await e9(l6);
      } catch (y8) {
        throw n.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").error(y8), p17(y8), o15.releaseLock(), d(y8) ? y8 : new r("knowledge-graph:unexpected-server-response", "Error inside streaming data return parsing", { error: y8 });
      }
    } });
    return { readableStream: g7, resultHeader: await l5 };
  }
  throw new r("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: o14, data: e8.text() });
}
async function it(e8) {
  const r9 = `${e8.url}/dataModel/queryDataModel`, n9 = await f(r9, { responseType: "array-buffer", query: { f: "pbf" } }), o14 = n9.getHeader?.("content-type"), d7 = n9.data;
  if (o14?.includes("application/x-protobuf")) {
    const e9 = (await n6()).decode_data_model_from_protocol_buffer(new Uint8Array(d7));
    if (!e9) throw new r("knowledge-graph:data-model-decode-failure", "The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");
    return L(e9);
  }
  throw new r("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: o14, data: n9.data });
}

export {
  n6 as n,
  y4 as y,
  s17 as s,
  V2 as V,
  J2 as J,
  Y,
  X,
  Z,
  ee,
  te,
  ae,
  re,
  ne,
  oe,
  de,
  ie,
  se,
  ce,
  pe,
  le,
  ue,
  he,
  we,
  ge,
  ye,
  fe,
  me,
  _e,
  ke,
  Ge,
  be,
  xe,
  Te,
  ve,
  De,
  Pe,
  nt
};
//# sourceMappingURL=chunk-7RCG4SVH.js.map
