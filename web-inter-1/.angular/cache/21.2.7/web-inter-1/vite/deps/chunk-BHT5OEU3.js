import {
  l as l3
} from "./chunk-5RENHCGV.js";
import {
  v
} from "./chunk-2LFJNASM.js";
import {
  n as n4
} from "./chunk-OQ5NVOBH.js";
import {
  n as n5
} from "./chunk-HEZLCXKB.js";
import {
  i
} from "./chunk-UTMQRFW7.js";
import {
  d as d3
} from "./chunk-E6R5LRCV.js";
import {
  $,
  A,
  Fe,
  J,
  Le,
  M as M2,
  O,
  P,
  R as R2,
  S as S2,
  Ze,
  _ as _2,
  ae,
  ce,
  de,
  ee,
  fe,
  ge,
  he,
  me,
  pe,
  q as q2,
  se,
  te,
  ve,
  x as x2
} from "./chunk-C46VYQUR.js";
import {
  M
} from "./chunk-PT3QCIYI.js";
import {
  Ye
} from "./chunk-MJWFFWU7.js";
import {
  s as s3
} from "./chunk-FHLW5QSS.js";
import {
  p as p4
} from "./chunk-6QRF2LHR.js";
import {
  d as d2
} from "./chunk-L3PAJVXJ.js";
import {
  R
} from "./chunk-37CL2A4G.js";
import {
  p as p2
} from "./chunk-UU3FW4SQ.js";
import {
  w
} from "./chunk-AP2NAWWU.js";
import {
  j as j3
} from "./chunk-JXLQUNSA.js";
import {
  C,
  c as c3,
  j as j2,
  n2,
  n3,
  p as p3,
  s as s2,
  u,
  x
} from "./chunk-XWU2ZKWF.js";
import {
  Fe as Fe2
} from "./chunk-DWF2MCID.js";
import {
  o as o2
} from "./chunk-E3TCHN5O.js";
import {
  f as f4
} from "./chunk-UDRKO2UK.js";
import {
  l as l2
} from "./chunk-7ZFYLJ6O.js";
import {
  o
} from "./chunk-HIVGPE4F.js";
import {
  e as e2
} from "./chunk-473S3KQM.js";
import {
  _
} from "./chunk-YVKQ6DO2.js";
import {
  S
} from "./chunk-VYBVCH3T.js";
import {
  f2 as f3
} from "./chunk-TPFIN626.js";
import {
  a,
  f as f2,
  h,
  l
} from "./chunk-6CYBR6FP.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a2,
  c as c2,
  m3 as m
} from "./chunk-7ELXYOAW.js";
import {
  L,
  d,
  e2 as e,
  j,
  p,
  s,
  y
} from "./chunk-2KP24SU5.js";
import {
  f,
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  N,
  c
} from "./chunk-XCN5EJK7.js";
import {
  __addDisposableResource,
  __decorate,
  __disposeResources
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/featureset/support/FeatureSetQueryInterceptor.js
var e3 = class {
  constructor(e6, a4) {
    this.preLayerQueryCallback = e6, this.preRequestCallback = a4, this.preLayerQueryCallback || (this.preLayerQueryCallback = (e7) => {
    }), this.preRequestCallback || (this.preLayerQueryCallback = (e7) => {
    });
  }
};

// node_modules/@arcgis/core/widgets/Attachments/AttachmentsViewModel.js
var u2 = { editing: false, operations: { add: true, update: true, delete: true } };
var f5 = q.ofType(d3);
var y2 = class extends b {
  constructor(t) {
    super(t), this._getAttachmentsPromise = null, this._attachmentLayer = null, this.attachmentKeywords = null, this.attachmentTypes = null, this.capabilities = __spreadValues({}, u2), this.activeAttachmentInfo = null, this.activeFileInfo = null, this.attachmentInfos = new f5(), this.fileInfos = new q(), this.graphic = null, this.mode = "view", this.orderByFields = null, this.filesEnabled = false, this.addHandles(l(() => this.graphic, () => this._graphicChanged(), h));
  }
  destroy() {
    this._attachmentLayer = null, this.graphic = null;
  }
  castCapabilities(t) {
    return __spreadValues(__spreadValues({}, u2), t);
  }
  get state() {
    return this._getAttachmentsPromise ? "loading" : this.graphic ? "ready" : "disabled";
  }
  get supportsResizeAttachments() {
    const { graphic: t } = this;
    if (!t) return false;
    const e6 = t.sourceLayer ?? t.layer;
    return e6?.loaded && "capabilities" in e6 && e6.capabilities && "attachment" in e6.capabilities && e6.capabilities.attachment && "supportsResize" in e6.capabilities.attachment && e6.capabilities.attachment.supportsResize || false;
  }
  get supportsTypeWildcard() {
    const { graphic: t } = this;
    if (!t) return false;
    const e6 = t.sourceLayer ?? t.layer;
    return e6?.loaded && "capabilities" in e6 && e6.capabilities && "attachment" in e6.capabilities && e6.capabilities.attachment && "supportsResize" in e6.capabilities.attachment && e6.capabilities.attachment.supportsTypeWildcard || false;
  }
  async getAttachments() {
    const { _attachmentLayer: t, attachmentInfos: e6, orderByFields: i3, attachmentTypes: a4, attachmentKeywords: r4, supportsTypeWildcard: s7 } = this;
    if (!t || "function" != typeof t.queryAttachments) throw new r("invalid-layer", "getAttachments(): A valid layer is required.");
    const o3 = this._getObjectId();
    if ("number" != typeof o3) throw new r("invalid-object-id", "getAttachments(): Numeric object id is required");
    const c7 = i3?.map((t2) => `${t2.field} ${"descending" === t2.order ? "DESC" : "ASC"}`), h5 = new p4({ objectIds: [o3], returnMetadata: true, orderByFields: c7, attachmentTypes: s7 ? a4?.filter(Boolean).map((t2) => `${t2}/*`) : void 0, keywords: r4 }), d7 = [], l4 = t.queryAttachments(h5).then((t2) => t2[o3] || d7).catch(() => d7);
    this._getAttachmentsPromise = l4, this.notifyChange("state");
    const m5 = await l4;
    return e6.destroyAll(), m5.length && e6.addMany(m5), this._getAttachmentsPromise = null, this.notifyChange("state"), m5;
  }
  async addAttachment(t, e6 = this.graphic) {
    const { _attachmentLayer: i3, attachmentInfos: a4, capabilities: r4 } = this;
    if (!e6) throw new r("invalid-graphic", "addAttachment(): A valid graphic is required.", { graphic: e6 });
    if (!t) throw new r("invalid-attachment", "addAttachment(): An attachment is required.", { attachment: t });
    if (!r4.operations?.add) throw new r("invalid-capabilities", "addAttachment(): add capabilities are required.");
    if (!i3 || "function" != typeof i3.addAttachment) throw new r("invalid-layer", "addAttachment(): A valid layer is required.");
    const s7 = i3.addAttachment(e6, t).then((t2) => this._queryAttachment(t2.objectId, e6)), o3 = await s7;
    return a4.add(o3), o3;
  }
  async deleteAttachment(t) {
    const { _attachmentLayer: e6, attachmentInfos: i3, graphic: a4, capabilities: r4 } = this;
    if (!t) throw new r("invalid-attachment-info", "deleteAttachment(): An attachmentInfo is required.", { attachmentInfo: t });
    if (!r4.operations?.delete) throw new r("invalid-capabilities", "deleteAttachment(): delete capabilities are required.");
    if (!e6 || "function" != typeof e6.deleteAttachments) throw new r("invalid-layer", "deleteAttachment(): A valid layer is required.");
    if (!a4) throw new r("invalid-graphic", "deleteAttachment(): A graphic is required.");
    const s7 = e6.deleteAttachments(a4, [t.id]).then(() => t), o3 = await s7;
    return i3.remove(o3), o3.destroy(), o3;
  }
  async updateAttachment(t, e6 = this.activeAttachmentInfo) {
    const { _attachmentLayer: i3, attachmentInfos: a4, graphic: r4, capabilities: s7 } = this;
    if (!t) throw new r("invalid-attachment", "updateAttachment(): An attachment is required.", { attachment: t });
    if (!e6) throw new r("invalid-attachment-info", "updateAttachment(): An attachmentInfo is required.", { attachmentInfo: e6 });
    if (!s7.operations?.update) throw new r("invalid-capabilities", "updateAttachment(): Update capabilities are required.");
    const o3 = a4.indexOf(e6);
    if (!i3 || "function" != typeof i3.updateAttachment) throw new r("invalid-layer", "updateAttachment(): A valid layer is required.");
    if (!r4) throw new r("invalid-graphic", "updateAttachment(): A graphic is required.");
    const c7 = i3.updateAttachment(r4, e6.id, t).then((t2) => this._queryAttachment(t2.objectId)), h5 = await c7;
    return a4.splice(o3, 1, h5), h5;
  }
  async commitFiles() {
    return await Promise.all(this.fileInfos.items.map((t) => this.addAttachment(t.form))), this.fileInfos.removeAll(), this.getAttachments();
  }
  addFile(t, e6) {
    if (!t || !e6) return null;
    const i3 = { file: t, form: e6 };
    return this.fileInfos.add(i3), i3;
  }
  updateFile(t, e6, i3 = this.activeFileInfo) {
    if (!t || !e6 || !i3) return null;
    const a4 = this.fileInfos.indexOf(i3);
    return a4 > -1 && this.fileInfos.splice(a4, 1, { file: t, form: e6 }), this.fileInfos.items[a4];
  }
  deleteFile(t) {
    const e6 = this.fileInfos.find((e7) => e7.file === t);
    return e6 ? (this.fileInfos.remove(e6), e6) : null;
  }
  async _queryAttachment(t, e6) {
    const { _attachmentLayer: i3 } = this;
    if (!t || !i3?.queryAttachments) throw new r("invalid-attachment-id", "Could not query attachment.");
    const a4 = this._getObjectId(e6);
    if ("number" != typeof a4) throw new r("invalid-object-id", "getAttachments(): Numeric object id is required");
    const r4 = new p4({ objectIds: [a4], attachmentsWhere: `AttachmentId=${t}`, returnMetadata: true });
    return i3.queryAttachments(r4).then((t2) => t2[a4][0]);
  }
  _getObjectId(t = this.graphic) {
    return t?.getObjectId() ?? null;
  }
  _graphicChanged() {
    this.graphic && (this._setAttachmentLayer(), this.getAttachments().catch(() => this.attachmentInfos.destroyAll()));
  }
  _setAttachmentLayer() {
    const { graphic: t } = this, e6 = q2(t);
    this._attachmentLayer = e6 ? "scene" === e6.type && null != e6.associatedLayer ? e6.associatedLayer : e6 : null;
  }
};
__decorate([a2({ type: [String] })], y2.prototype, "attachmentKeywords", void 0), __decorate([a2({ type: [["application", "audio", "image", "model", "text", "video"]] })], y2.prototype, "attachmentTypes", void 0), __decorate([a2()], y2.prototype, "capabilities", void 0), __decorate([m("capabilities")], y2.prototype, "castCapabilities", null), __decorate([a2()], y2.prototype, "activeAttachmentInfo", void 0), __decorate([a2()], y2.prototype, "activeFileInfo", void 0), __decorate([a2({ readOnly: true, type: f5 })], y2.prototype, "attachmentInfos", void 0), __decorate([a2()], y2.prototype, "fileInfos", void 0), __decorate([a2({ type: j3 })], y2.prototype, "graphic", void 0), __decorate([a2()], y2.prototype, "mode", void 0), __decorate([a2({ type: [c3] })], y2.prototype, "orderByFields", void 0), __decorate([a2({ readOnly: true })], y2.prototype, "state", null), __decorate([a2()], y2.prototype, "filesEnabled", void 0), __decorate([a2({ readOnly: true })], y2.prototype, "supportsResizeAttachments", null), __decorate([a2({ readOnly: true })], y2.prototype, "supportsTypeWildcard", null), y2 = __decorate([c2("esri.widgets.Attachments.AttachmentsViewModel")], y2);

// node_modules/@arcgis/core/widgets/Feature/FeatureAttachments/FeatureAttachmentsViewModel.js
var s4 = class extends y2 {
  constructor(t) {
    super(t), this.description = null, this.title = null;
  }
};
__decorate([a2()], s4.prototype, "description", void 0), __decorate([a2()], s4.prototype, "title", void 0), s4 = __decorate([c2("esri.widgets.Feature.FeatureAttachments.FeatureAttachmentsViewModel")], s4);

// node_modules/@arcgis/core/widgets/Feature/FeatureContent/FeatureContentViewModel.js
var c4 = class extends b {
  constructor(t) {
    super(t), this._loadingPromise = null, this.created = null, this.creator = null, this.destroyer = null, this.graphic = null, this.addHandles(l(() => this.creator, (t2) => {
      this._destroyContent(), this._createContent(t2);
    }, h));
  }
  destroy() {
    this._destroyContent();
  }
  get state() {
    return this._loadingPromise ? "loading" : "ready";
  }
  _destroyContent() {
    const { created: t, graphic: e6, destroyer: r4 } = this;
    t && e6 && (x2({ type: "content", value: r4, event: { graphic: e6 } }), this._set("created", null));
  }
  async _createContent(t) {
    const e6 = this.graphic;
    if (!e6 || !t) return;
    const r4 = x2({ type: "content", value: t, event: { graphic: e6 } });
    this._loadingPromise = r4, this.notifyChange("state");
    const o3 = await r4;
    r4 === this._loadingPromise && (this._loadingPromise = null, this.notifyChange("state"), this._set("created", o3));
  }
};
__decorate([a2({ readOnly: true })], c4.prototype, "created", void 0), __decorate([a2()], c4.prototype, "creator", void 0), __decorate([a2()], c4.prototype, "destroyer", void 0), __decorate([a2({ type: j3 })], c4.prototype, "graphic", void 0), __decorate([a2({ readOnly: true })], c4.prototype, "state", null), c4 = __decorate([c2("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")], c4);

// node_modules/@arcgis/core/widgets/Feature/FeatureFields/FeatureFieldsViewModel.js
var f6 = class extends b {
  constructor(o3) {
    super(o3), this.attributes = null, this.expressionInfos = null, this.description = null, this.fieldInfos = null, this.isContentFieldInfos = false, this.graphic = null, this.layer = null, this.title = null;
  }
  get formattedFieldInfos() {
    const { expressionInfos: o3, fieldInfos: e6, layer: t, isContentFieldInfos: i3, graphic: s7 } = this, r4 = [];
    return e6?.forEach((e7) => {
      if (!(!e7.hasOwnProperty("visible") || e7.visible)) return;
      const f10 = e7.clone();
      f10.label = R2({ fieldInfo: f10, expressionInfos: o3, layer: t, graphic: s7, isContentFieldInfos: i3 });
      const d7 = M2({ fieldInfo: e7, graphic: s7, layer: t });
      d7 && (f10.fieldFormat = $({ configurableFieldsContainer: d7, fieldInfo: f10, isContentFieldInfos: i3 })), r4.push(f10);
    }), r4;
  }
};
__decorate([a2()], f6.prototype, "attributes", void 0), __decorate([a2({ type: [n3] })], f6.prototype, "expressionInfos", void 0), __decorate([a2()], f6.prototype, "description", void 0), __decorate([a2({ type: [u] })], f6.prototype, "fieldInfos", void 0), __decorate([a2({ readOnly: true })], f6.prototype, "formattedFieldInfos", null), __decorate([a2()], f6.prototype, "isContentFieldInfos", void 0), __decorate([a2()], f6.prototype, "graphic", void 0), __decorate([a2()], f6.prototype, "layer", void 0), __decorate([a2()], f6.prototype, "title", void 0), f6 = __decorate([c2("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")], f6);

// node_modules/@arcgis/core/widgets/Feature/support/relatedFeatureUtils.js
var d4 = "esri.widgets.Feature.support.relatedFeatureUtils";
var p5 = () => n.getLogger(d4);
var m2 = /* @__PURE__ */ new Map();
function h2(e6) {
  if (!Fe(e6)) return null;
  const [t, r4] = e6.split("/").slice(1);
  return { layerId: t, fieldName: r4 };
}
function y3(e6, t) {
  if (!t.relationships) return null;
  let r4 = null;
  const { relationships: i3 } = t;
  return i3.some((t2) => t2.id === parseInt(e6, 10) && (r4 = t2, true)), r4;
}
function I({ originRelationship: e6, relationships: t, layerId: r4 }) {
  return t.find(({ relatedTableId: t2, id: i3 }) => `${t2}` === r4 && i3 === e6?.id) ?? null;
}
function F(e6, t) {
  const r4 = t.toLowerCase();
  for (const i3 in e6) if (i3.toLowerCase() === r4) return e6[i3];
  return null;
}
function b2(e6, t) {
  const r4 = y3(e6, t);
  if (!r4) return;
  return { url: `${t.url}/${r4.relatedTableId}`, sourceSpatialReference: t.spatialReference, relation: r4, relatedFields: [], outStatistics: [] };
}
function g(e6, t) {
  if (!t) return;
  if (!e6) return;
  const { features: r4, statsFeatures: i3 } = e6, o3 = r4?.value;
  t.relatedFeatures = o3 ? o3.features : [];
  const s7 = i3?.value;
  t.relatedStatsFeatures = s7 ? s7.features : [];
}
function S3(e6, t, r4, i3) {
  const o3 = new d2();
  return o3.outFields = ["*"], o3.relationshipId = "number" == typeof t.id ? t.id : parseInt(t.id, 10), o3.objectIds = [e6.attributes[r4.objectIdField]], o3.gdbVersion = r4.gdbVersion ?? null, o3.historicMoment = r4.historicMoment ?? null, r4.queryRelatedFeatures?.(o3, i3) ?? Promise.resolve({});
}
function w2(e6, t, r4) {
  let i3 = 0;
  const o3 = [];
  for (; i3 < t.length; ) o3.push(`${e6} IN (${t.slice(i3, r4 + i3)})`), i3 += r4;
  return o3.join(" OR ");
}
function j4(e6) {
  return e6 ? c(e6) : void 0;
}
function R3(e6) {
  return e6 ? c(e6, (e7, t) => JSON.stringify(e7.toJSON()) === JSON.stringify(t.toJSON())) : void 0;
}
async function $2(e6, t, r4, i3) {
  const o3 = r4.layerId.toString(), { layerInfo: u4, relation: c7, relatedFields: f10, outStatistics: d7, url: p8, sourceSpatialReference: m5 } = t, h5 = j4(f10), y5 = R3(d7);
  if (!u4 || !c7) return null;
  const b6 = I({ originRelationship: c7, relationships: u4.relationships, layerId: o3 });
  if (b6?.relationshipTableId && b6.keyFieldInRelationshipTable) {
    const t2 = (await S3(e6, b6, r4, i3))[e6.attributes[r4.objectIdField]];
    if (!t2) return null;
    const o4 = t2.features.map((e7) => e7.attributes[u4.objectIdField]);
    if (y5?.length && u4.supportsStatistics) {
      const e7 = new R();
      e7.where = w2(u4.objectIdField, o4, 1e3), e7.outFields = h5, e7.outStatistics = y5, e7.sourceSpatialReference = m5;
      const r5 = { features: Promise.resolve(t2), statsFeatures: s3(p8, e7) };
      return j(r5);
    }
  }
  const g3 = b6?.keyField;
  if (g3) {
    const t2 = Fe2(L2(u4.fields, g3)), o4 = F(e6.attributes, c7.keyField), f11 = t2 ? `${g3}=${o4}` : `${g3}='${o4}'`, d8 = r4.historicMoment, I4 = r4.gdbVersion, b7 = s3(p8, new R({ where: f11, outFields: h5, sourceSpatialReference: m5, historicMoment: d8, gdbVersion: I4 }), i3), S4 = !!y5?.length && u4.supportsStatistics ? s3(p8, new R({ where: f11, outFields: h5, outStatistics: y5, sourceSpatialReference: m5 }), i3) : null, w5 = { features: b7 };
    return S4 && (w5.statsFeatures = S4), j(w5);
  }
  return null;
}
function N2(t, r4) {
  return f3(t, { query: { f: "json" }, signal: r4?.signal });
}
function v2({ relatedInfos: e6, layer: t }, i3) {
  const n8 = {};
  return e6.forEach((e7, i4) => {
    const { relation: o3 } = e7;
    if (!o3) {
      const e8 = new r("editor:relation-required", "A relation is required on a layer to retrieve related records.");
      throw p5().error(e8), e8;
    }
    const { relatedTableId: s7 } = o3;
    if ("number" != typeof s7) {
      const e8 = new r("editor:related-table", "A related table ID is required on a layer to retrieve related records.");
      throw p5().error(e8), e8;
    }
    const l4 = `${t.url}/${s7}`, a4 = m2.get(l4), u4 = a4 ?? N2(l4);
    a4 || m2.set(l4, u4), n8[i4] = u4;
  }), p(j(n8), i3);
}
function T({ graphic: e6, relatedInfos: t, layer: r4 }, i3) {
  const o3 = {};
  return t.forEach((t2, s7) => {
    t2.layerInfo && (o3[s7] = $2(e6, t2, r4, i3));
  }), j(o3);
}
function q3({ relatedInfo: e6, fieldName: t, fieldInfo: r4 }) {
  if (e6.relatedFields?.push(t), r4.statisticType) {
    const i3 = new p2({ statisticType: r4.statisticType, onStatisticField: t, outStatisticFieldName: t });
    e6.outStatistics?.push(i3);
  }
}
function L2(e6, t) {
  if (null != e6) {
    t = t.toLowerCase();
    for (const r4 of e6) if (r4 && r4.name.toLowerCase() === t) return r4;
  }
  return null;
}

// node_modules/@arcgis/core/widgets/Feature/FeatureMedia/FeatureMediaViewModel.js
var I2 = { chartAnimation: true };
var v3 = class extends b {
  constructor(t) {
    super(t), this.abilities = __spreadValues({}, I2), this.activeMediaInfoIndex = 0, this.attributes = null, this.description = null, this.fieldInfoMap = null, this.formattedAttributes = null, this.expressionAttributes = null, this.layer = null, this.mediaInfos = null, this.popupTemplate = null, this.relatedInfos = null, this.title = null;
  }
  castAbilities(t) {
    return __spreadValues(__spreadValues({}, I2), t);
  }
  get activeMediaInfo() {
    return this.formattedMediaInfos[this.activeMediaInfoIndex] || null;
  }
  get formattedMediaInfos() {
    return this._formatMediaInfos() || [];
  }
  get formattedMediaInfoCount() {
    return this.formattedMediaInfos.length;
  }
  setActiveMedia(t) {
    this._setContentElementMedia(t);
  }
  next() {
    this._pageContentElementMedia(1);
  }
  previous() {
    this._pageContentElementMedia(-1);
  }
  _setContentElementMedia(t) {
    const { formattedMediaInfoCount: e6 } = this, i3 = (t + e6) % e6;
    this.activeMediaInfoIndex = i3;
  }
  _pageContentElementMedia(t) {
    const { activeMediaInfoIndex: e6 } = this, i3 = e6 + t;
    this._setContentElementMedia(i3);
  }
  _formatMediaInfos() {
    const { mediaInfos: t, layer: e6 } = this, o3 = this.attributes ?? {}, r4 = this.formattedAttributes ?? {}, a4 = this.expressionAttributes ?? {}, s7 = this.fieldInfoMap ?? /* @__PURE__ */ new Map();
    return t?.map((t2) => {
      const i3 = t2?.clone();
      if (!i3) return null;
      if (i3.title = P({ attributes: o3, fieldInfoMap: s7, globalAttributes: r4, expressionAttributes: a4, layer: e6, text: i3.title }), i3.caption = P({ attributes: o3, fieldInfoMap: s7, globalAttributes: r4, expressionAttributes: a4, layer: e6, text: i3.caption }), i3.altText = P({ attributes: o3, fieldInfoMap: s7, globalAttributes: r4, expressionAttributes: a4, layer: e6, text: i3.altText }), "image" === i3.type) {
        if (!i3.value) return;
        return this._setImageValue({ value: i3.value, formattedAttributes: r4, layer: e6 }), i3.value.sourceURL ? i3 : void 0;
      }
      if ("pie-chart" === i3.type || "line-chart" === i3.type || "column-chart" === i3.type || "bar-chart" === i3.type) {
        if (!i3.value) return;
        return this._setChartValue({ value: i3.value, chartType: i3.type, attributes: o3, formattedAttributes: r4, layer: e6, expressionAttributes: a4 }), i3;
      }
      return null;
    }).filter(N) ?? [];
  }
  _setImageValue(t) {
    const e6 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { value: i3, formattedAttributes: o3, layer: r4 } = t, { linkURL: a4, sourceURL: s7 } = i3;
    if (s7) {
      const t2 = J(s7, r4);
      i3.sourceURL = _2({ formattedAttributes: o3, template: t2, fieldInfoMap: e6 });
    }
    if (a4) {
      const t2 = J(a4, r4);
      i3.linkURL = _2({ formattedAttributes: o3, template: t2, fieldInfoMap: e6 });
    }
  }
  _setChartValue(t) {
    const { value: e6, attributes: i3, formattedAttributes: o3, chartType: r4, layer: a4, expressionAttributes: s7 } = t, { popupTemplate: l4, relatedInfos: n8 } = this, { fields: p8, normalizeField: d7 } = e6, c7 = a4;
    e6.fields = S2(p8, c7), d7 && (e6.normalizeField = O(d7, c7));
    if (!p8.some((t2) => !!(null != o3[t2] || Fe(t2) && n8?.size))) return;
    const h5 = l4?.fieldInfos ?? [];
    p8.forEach((t2, a5) => {
      const l5 = e6.colors?.[a5];
      if (Fe(t2)) return void (e6.series = [...e6.series, ...this._getRelatedChartInfos({ fieldInfos: h5, fieldName: t2, formattedAttributes: o3, chartType: r4, value: e6, color: l5 })]);
      const n9 = this._getChartOption({ value: e6, attributes: i3, chartType: r4, formattedAttributes: o3, expressionAttributes: s7, fieldName: t2, fieldInfos: h5, color: l5 });
      e6.series.push(n9);
    });
  }
  _getRelatedChartInfos(t) {
    const { fieldInfos: e6, fieldName: i3, formattedAttributes: o3, chartType: r4, value: a4, color: s7 } = t, l4 = [], n8 = h2(i3), p8 = n8 && this.relatedInfos?.get(n8.layerId.toString());
    if (!p8) return l4;
    const { relatedFeatures: d7, relation: u4 } = p8;
    if (!u4 || !d7) return l4;
    const { cardinality: f10 } = u4;
    d7.forEach((t2) => {
      const { attributes: p9 } = t2;
      p9 && Object.keys(p9).forEach((t3) => {
        t3 === n8.fieldName && l4.push(this._getChartOption({ value: a4, attributes: p9, formattedAttributes: o3, fieldName: i3, chartType: r4, relatedFieldName: t3, hasMultipleRelatedFeatures: d7?.length > 1, fieldInfos: e6, color: s7 }));
      });
    });
    return "one-to-many" === f10 || "many-to-many" === f10 ? l4 : [l4[0]];
  }
  _getTooltip({ label: t, value: e6, chartType: i3 }) {
    return "pie-chart" === i3 ? `${t}` : `${t}: ${e6}`;
  }
  _getChartOption(t) {
    const { value: e6, attributes: i3, formattedAttributes: o3, expressionAttributes: r4, fieldName: a4, relatedFieldName: n8, fieldInfos: p8, chartType: d7, hasMultipleRelatedFeatures: u4, color: I4 } = t, { layer: v5, graphic: M3 } = this, A3 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { normalizeField: g3, tooltipField: x5 } = e6, _4 = g3 ? Fe(g3) ? i3[h2(g3).fieldName] : i3[g3] : null, C3 = A(a4) && void 0 !== r4?.[a4] ? r4[a4] : n8 && void 0 !== i3[n8] ? i3[n8] : void 0 !== i3[a4] ? i3[a4] : o3[a4], T4 = void 0 === C3 ? null : C3 && _4 ? C3 / _4 : C3, N5 = new s2({ fieldName: a4, color: I4, value: null != T4 ? "number" == typeof T4 ? T4 : Number(T4) : void 0 });
    if (Fe(a4)) {
      const t2 = A3.get(a4.toLowerCase()), e7 = x5 && A3.get(x5.toLowerCase()), r5 = t2?.fieldName ?? a4, s7 = u4 && x5 ? h2(x5).fieldName : e7?.fieldName ?? x5, l4 = u4 && s7 ? i3[s7] : o3[s7] ?? (t2 && R2({ fieldInfo: t2, graphic: M3, layer: v5 })) ?? t2?.fieldName ?? n8, p9 = u4 && n8 ? i3[n8] : o3[r5];
      return N5.tooltip = this._getTooltip({ label: l4, value: p9, chartType: d7 }), N5;
    }
    const F6 = ae(p8, a4), w5 = O(a4, v5), E3 = x5 && void 0 !== o3[x5] ? o3[x5] : R2({ fieldInfo: F6 || new u({ fieldName: w5 }), expressionInfos: this.popupTemplate?.expressionInfos, graphic: M3, layer: v5 }), R5 = o3[w5];
    return N5.tooltip = this._getTooltip({ label: E3, value: R5, chartType: d7 }), N5;
  }
};
__decorate([a2()], v3.prototype, "abilities", void 0), __decorate([m("abilities")], v3.prototype, "castAbilities", null), __decorate([a2()], v3.prototype, "activeMediaInfoIndex", void 0), __decorate([a2({ readOnly: true })], v3.prototype, "activeMediaInfo", null), __decorate([a2()], v3.prototype, "attributes", void 0), __decorate([a2()], v3.prototype, "description", void 0), __decorate([a2()], v3.prototype, "fieldInfoMap", void 0), __decorate([a2()], v3.prototype, "formattedAttributes", void 0), __decorate([a2()], v3.prototype, "expressionAttributes", void 0), __decorate([a2({ readOnly: true })], v3.prototype, "formattedMediaInfos", null), __decorate([a2()], v3.prototype, "graphic", void 0), __decorate([a2()], v3.prototype, "layer", void 0), __decorate([a2({ readOnly: true })], v3.prototype, "formattedMediaInfoCount", null), __decorate([a2()], v3.prototype, "mediaInfos", void 0), __decorate([a2()], v3.prototype, "popupTemplate", void 0), __decorate([a2()], v3.prototype, "relatedInfos", void 0), __decorate([a2()], v3.prototype, "title", void 0), v3 = __decorate([c2("esri.widgets.Feature.FeatureMedia.FeatureMediaViewModel")], v3);

// node_modules/@arcgis/core/widgets/Feature/support/arcadeFeatureUtils.js
var d5 = "esri.widgets.Feature.support.arcadeFeatureUtils";
var f7 = () => n.getLogger(d5);
function y4(e6) {
  return pe(ce(e6));
}
function m3(e6) {
  return "createQuery" in e6 && "queryFeatures" in e6;
}
async function g2({ graphic: e6, view: r4, options: t }) {
  const { isAggregate: a4 } = e6, i3 = e6.layer ?? e6.sourceLayer;
  if (!a4 || !i3 || "2d" !== r4?.type) return [];
  const n8 = await r4.whenLayerView(i3);
  if (!m3(n8)) return [];
  const o3 = n8.createQuery(), s7 = e6.getObjectId();
  o3.aggregateIds = null != s7 ? [s7] : [];
  const { features: c7 } = await n8.queryFeatures(o3, t);
  return c7;
}
function w3({ layer: e6, aggregatedFeatures: r4, interceptor: t }) {
  const { fields: a4, objectIdField: i3, geometryType: n8, spatialReference: o3 } = e6, c7 = "displayField" in e6 ? e6.displayField : void 0;
  return new Ye(__spreadProps(__spreadValues({ fields: a4, objectIdField: i3, geometryType: n8, spatialReference: o3, displayField: c7, interceptor: t }, "feature" === e6.type ? { templates: e6.templates, typeIdField: e6.typeIdField, types: e6.types } : null), { source: r4 }));
}
function v4(e6) {
  return e6.isAggregate ? "popup-feature-reduction" : "esri.views.3d.layers.VoxelGraphic" === e6.declaredClass ? "popup-voxel" : n4(e6.origin) || n5(e6.origin) ? "popup-imagery" : "popup";
}
function h3(e6) {
  return { scale: e6?.scale, timeProperties: { currentStart: e6?.timeExtent?.start, currentEnd: e6?.timeExtent?.end, startIncluded: true, endIncluded: true } };
}
function x3(e6) {
  return { $voxel: e6 };
}
function b3(e6, r4, t) {
  let a4 = null;
  if (null != e6) {
    const r5 = e6.origin.layer;
    if ("imagery" === r5.type && "mosaic-dataset" === r5.sourceType) {
      a4 = e6.cloneShallow();
      const r6 = e6.origin.layer.fieldsIndex;
      a4.attributes = Object.fromEntries(Object.entries(a4.attributes ?? {}).filter(([e7]) => r6.has(e7)));
    }
  }
  return { $pixel: e6, $imageCollectionItem: a4, $userInput: r4, $view: h3(t) };
}
async function F2(e6, r4, t, a4, i3, n8, o3) {
  let s7 = null;
  if (n8.has("$aggregatedfeatures")) {
    const e7 = await g2({ graphic: r4, view: t, options: a4 }), n9 = r4.sourceLayer || r4.layer;
    s7 = w3({ layer: n9, aggregatedFeatures: e7, interceptor: i3 });
  }
  return { vars: { $feature: r4, $aggregatedFeatures: s7, $view: h3(t) }, track: o3 ? await $3(e6, r4, t) : null, [Symbol.dispose]: () => s7?.[Symbol.dispose]() };
}
function I3(e6) {
  if (f4(e6)) return e6.getTime();
  if ("number" == typeof e6) return e6;
  if ("string" == typeof e6) return new Date(e6).getTime();
  throw new Error(`Unexpected time value: ${e6}`);
}
async function $3(e6, r4, t) {
  const a4 = r4.sourceLayer || r4.layer;
  if (null == a4 || !("timeInfo" in a4)) return null;
  const n8 = a4.timeInfo?.trackIdField;
  if (null == n8) return null;
  const o3 = r4.getAttribute(n8);
  if (null == o3) return null;
  let s7, u4;
  if ("string" == typeof o3) s7 = `"${n8.replaceAll('"', '""')}" = '${o3.replaceAll("'", "''")}'`;
  else {
    if ("number" != typeof o3) return f7().warn("Expected track id to be a string or number"), null;
    s7 = `"${n8.replaceAll('"', '""')}" = ${o3}`;
  }
  if ("stream" === a4.type && null != t) {
    const e7 = await t.whenLayerView(a4), r5 = e7.createQuery();
    r5.returnGeometry = true, r5.where = o2(r5.where, s7), u4 = (await e7.queryFeatures(r5)).features;
  } else {
    if (!("queryFeatures" in a4)) return null;
    {
      const e7 = a4.createQuery();
      e7.returnGeometry = true, e7.where = o2(e7.where, s7), u4 = (await a4.queryFeatures(e7)).features;
    }
  }
  const l4 = a4.fieldsIndex.normalizeFieldName(a4.timeInfo.startField) ?? i, p8 = a4.timeInfo.endField ? a4.fieldsIndex.normalizeFieldName(a4.timeInfo.endField) : null, d7 = u4.map((r5) => {
    const a5 = r5.getObjectId();
    if (null == a5) throw new Error("Cannot identify observation");
    const i3 = e6.ArcadeFeature.createFromGraphic(r5, t?.timeZone), n9 = I3(r5.getAttribute(l4));
    return { id: a5, feature: i3, startTime: n9, endTime: null != p8 ? I3(r5.getAttribute(p8)) : n9, stats: { totalDistance: void 0, distance: void 0, speed: void 0, acceleration: void 0 } };
  }).sort((e7, r5) => e7.startTime - r5.startTime), y5 = "esri.TrackGraphic" === r4.declaredClass ? d7.length - 1 : d7.findIndex((e7) => r4.getObjectId() === e7.id);
  if (y5 < 0) throw new Error("Couldn't locate feature in observations");
  return { observations: d7, currentObservationIndex: y5 };
}
async function j5(e6, r4, a4, i3, n8, o3) {
  const s7 = (r4.sourceLayer || r4.layer) ?? void 0;
  return { vars: { $feature: r4, $layer: null != s7 && M(s7) ? s7 : "scene" === s7?.type && null != s7.associatedLayer ? s7.associatedLayer : void 0, $map: a4, $datastore: s7 && "url" in s7 ? s7.url : void 0, $userInput: i3, $graph: "knowledge-graph-sublayer" === s7?.type ? s7.parentCompositeLayer?.knowledgeGraph : void 0, $view: h3(n8) }, track: o3 ? await $3(e6, r4, n8) : null };
}
async function T2(e6, { arcade: r4, graphic: t, map: a4, location: i3, view: n8, options: o3, interceptor: s7, arcadeExecutor: c7, usesTrack: u4 }) {
  switch (e6) {
    case "popup":
      return __spreadProps(__spreadValues({}, await j5(r4, t, a4, i3, n8, u4)), { [Symbol.dispose]() {
      } });
    case "popup-feature-reduction": {
      const e7 = new Set(c7.variablesUsed);
      return await F2(r4, t, n8, o3, s7, e7, u4);
    }
    case "popup-voxel":
      return { vars: x3(t), track: null, [Symbol.dispose]() {
      } };
    case "popup-imagery":
      return { vars: b3(t, i3, n8), track: null, [Symbol.dispose]() {
      } };
    default:
      throw new Error(`Unexpected profile name ${e6}`);
  }
}
async function k() {
  const [e6, r4, { Feature: t }] = await Promise.all([import("./arcade-M5MTGHZA.js"), import("./arcade-S6OIDFNH.js"), import("./Feature-IJV7GD4Q.js")]);
  return { executor: e6, syntaxUtils: r4, ArcadeFeature: t };
}
async function E(t, a4, i3) {
  const { executor: { createArcadeProfile: n8, createArcadeExecutor: o3 }, syntaxUtils: s7 } = i3, c7 = v4(a4), u4 = n8(c7);
  let l4;
  try {
    l4 = await o3(t, u4);
  } catch (y5) {
    return f7().error("arcade-executor-error", { error: y5, expression: t }), null;
  }
  const p8 = /* @__PURE__ */ new Set();
  l4.variablesUsed.includes("$view") && (s7.scriptUsesViewProperties(l4.syntaxTree, ["scale"]) && p8.add("view-scale"), s7.scriptUsesViewProperties(l4.syntaxTree, ["timeProperties"]) && p8.add("view-time-extent"));
  const d7 = s7.scriptUsesTrack(l4.syntaxTree);
  return { dependencies: p8, async evaluate({ graphic: a5, interceptor: n9, location: o4, map: s8, options: u5, spatialReference: p9, view: m5 }) {
    const g3 = { stack: [], error: void 0, hasError: false };
    try {
      const r4 = __addDisposableResource(g3, await T2(c7, { arcade: i3, graphic: a5, map: s8, location: o4, view: m5, options: u5, interceptor: n9, arcadeExecutor: l4, usesTrack: d7 }), false), w5 = { abortSignal: u5?.signal ?? void 0, interceptor: n9 ?? void 0, rawOutput: true, spatialReference: p9 ?? void 0, timeZone: m5?.timeZone, track: r4.track, console(...e6) {
        f7().info(...e6);
      } };
      try {
        return await l4.executeAsync(r4.vars, w5);
      } catch (y5) {
        if (u5?.signal?.aborted) return;
        return void f7().error("arcade-execution-error", { error: y5, graphic: a5, expression: t });
      }
    } catch (w5) {
      g3.error = w5, g3.hasError = true;
    } finally {
      __disposeResources(g3);
    }
  } };
}
async function A2({ expression: e6, graphic: r4 }) {
  return e6 ? E(e6, r4, await k()) : null;
}
async function L3(e6, r4) {
  if (!e6?.length) return { dependencies: /* @__PURE__ */ new Set(), expressions: /* @__PURE__ */ new Map() };
  const t = await k(), a4 = /* @__PURE__ */ new Set(), i3 = /* @__PURE__ */ new Map();
  for (const n8 of e6) {
    const e7 = await E(n8.expression, r4, t);
    i3.set(`expression/${n8.name}`, e7), e7?.dependencies.forEach((e8) => a4.add(e8));
  }
  return { dependencies: a4, expressions: i3 };
}

// node_modules/@arcgis/core/widgets/Feature/FeatureExpression/FeatureExpressionViewModel.js
var k2 = 1;
var E2 = class extends b {
  constructor(e6) {
    super(e6), this._compileTask = null, this._evaluateTask = null, this.expressionInfo = null, this.graphic = null, this.contentElementViewModel = null, this.interceptor = null, this.location = null, this.view = null, this._createVM = () => {
      const e7 = this.contentElement?.type;
      this.contentElementViewModel?.destroy();
      const t = "fields" === e7 ? new f6() : "media" === e7 ? new v3() : "text" === e7 ? new c4() : null;
      this._set("contentElementViewModel", t);
    }, this._compileThrottled = l3(this._startCompile, () => this.notifyChange("state"), k2, this), this._evaluateThrottled = l3(this._startEvaluate, () => this.notifyChange("state"), k2, this), this.addHandles([l(() => [this.expressionInfo, this.graphic], () => this._compileThrottled(), h), l(() => [this.contentElement], () => this._createVM(), h), f2(() => {
      if (!this._compileTask?.finished) return null;
      const e7 = this._compileTask.value, t = e7?.dependencies;
      return [e7, this.spatialReference, this.map, this.view, t?.has("view-scale") ? this.view?.scale : null, t?.has("view-time-extent") ? this.view?.timeExtent?.start : null, t?.has("view-time-extent") ? this.view?.timeExtent?.end : null];
    }, ([e7]) => this._evaluateThrottled(e7))]);
  }
  initialize() {
    this.addHandles([this._compileThrottled, this._evaluateThrottled]);
  }
  destroy() {
    this._compileTask = e(this._compileTask), this._evaluateTask = e(this._evaluateTask), this.contentElementViewModel?.destroy(), this._set("contentElementViewModel", null);
  }
  get contentElement() {
    return this._evaluateTask?.value;
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(e6) {
    this._override("spatialReference", e6);
  }
  get state() {
    const { contentElement: e6, contentElementViewModel: t } = this;
    return this._compileThrottled.hasPendingUpdates() || this._evaluateThrottled.hasPendingUpdates() || !this._compileTask?.finished || !this._evaluateTask?.finished ? "loading" : e6 || t ? "ready" : "disabled";
  }
  get map() {
    return this.view?.map ?? null;
  }
  set map(e6) {
    this._override("map", e6);
  }
  _startCompile() {
    this._evaluateTask = e(this._evaluateTask), this._compileTask = e(this._compileTask), this._compileTask = w(async (e6) => {
      const { expressionInfo: t, graphic: i3 } = this, s7 = t?.expression;
      if (!s7 || !i3) return null;
      const o3 = await A2({ expression: s7, graphic: i3 });
      return s(e6), o3;
    });
  }
  _startEvaluate(e6) {
    this._evaluateTask = e(this._evaluateTask), this._evaluateTask = w(async (t) => {
      const { graphic: i3 } = this;
      if (!e6 || !i3) return null;
      const { interceptor: s7, spatialReference: o3, map: r4, location: n8, view: l4 } = this, p8 = await e6.evaluate({ graphic: i3, interceptor: s7, location: n8, map: r4, options: { signal: t }, spatialReference: o3, view: l4 });
      s(t);
      const c7 = p8;
      if (!c7 || "esri.arcade.Dictionary" !== c7.declaredClass) return null;
      const h5 = await c7.castAsJsonAsync(t);
      s(t);
      const m5 = h5?.type, v5 = "media" === m5 ? j2.fromJSON(h5) : "text" === m5 ? x.fromJSON(h5) : "fields" === m5 ? C.fromJSON(h5) : null;
      return "media" === v5.type && !v5.mediaInfos || "fields" === v5.type && !v5.fieldInfos || "text" === v5.type && !v5.text ? null : v5;
    });
  }
};
__decorate([a2()], E2.prototype, "_compileTask", void 0), __decorate([a2()], E2.prototype, "_evaluateTask", void 0), __decorate([a2({ type: p3 })], E2.prototype, "expressionInfo", void 0), __decorate([a2({ type: j3 })], E2.prototype, "graphic", void 0), __decorate([a2({ readOnly: true })], E2.prototype, "contentElement", null), __decorate([a2({ readOnly: true })], E2.prototype, "contentElementViewModel", void 0), __decorate([a2()], E2.prototype, "interceptor", void 0), __decorate([a2({ type: _ })], E2.prototype, "location", void 0), __decorate([a2()], E2.prototype, "spatialReference", null), __decorate([a2({ readOnly: true })], E2.prototype, "state", null), __decorate([a2()], E2.prototype, "map", null), __decorate([a2()], E2.prototype, "view", void 0), E2 = __decorate([c2("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")], E2);

// node_modules/@arcgis/core/widgets/FeatureForm/featureFormUtils.js
var Q = (e6) => {
  const t = [];
  if (e6.formTemplate) {
    const { description: r4, title: n8 } = e6.formTemplate;
    e6.fields?.forEach((e7) => {
      const i3 = n8 && f(n8, e7.name), l4 = r4 && f(r4, e7.name);
      (i3 || l4) && t.push(e7.name);
    });
  }
  return t;
};

// node_modules/@arcgis/core/widgets/Feature/FeatureRelationship/FeatureRelationshipViewModel.js
var F5 = 100;
var _3 = class extends l2(o(b)) {
  constructor(e6) {
    super(e6), this._loaded = false, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.featuresPerPage = 10, this.activeCategory = null, this.allCategories = null, this.description = null, this.graphic = null, this.layer = null, this.map = null, this.orderByFields = null, this.featureCount = 0, this.relationshipId = null, this.showAllEnabled = false, this.title = null, this._cancelQuery = () => {
      const { _queryAbortController: e7 } = this;
      e7 && e7.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const { _queryFeatureCountAbortController: e7 } = this;
      e7 && e7.abort(), this._queryFeatureCountAbortController = null;
    }, this._cancelQueryPage = () => {
      const { _queryPageAbortController: e7 } = this;
      e7 && e7.abort(), this._queryPageAbortController = null;
    }, this._queryController = async () => {
      this._cancelQuery();
      const e7 = new AbortController();
      this._queryAbortController = e7, await y(this._query()), this._queryAbortController === e7 && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = false, this._cancelQueryFeatureCount();
      const e7 = new AbortController();
      this._queryFeatureCountAbortController = e7, await y(this._queryFeatureCount()), this._queryFeatureCountAbortController === e7 && (this._queryFeatureCountAbortController = null), this._loaded = true;
    }, this._queryPageController = async () => {
      const e7 = new AbortController();
      this._queryPageAbortController = e7, await y(this._queryPage()), this._queryPageAbortController === e7 && (this._queryPageAbortController = null);
    }, this._queryDebounced = L(this._queryController, F5), this._queryFeatureCountDebounced = L(this._queryFeatureCountController, F5), this._queryPageDebounced = L(this._queryPageController, F5), this._query = async () => {
      const { _queryAbortController: e7, relatedFeatures: t } = this;
      this.featureCount && ("subtype-group" !== this.relatedLayer?.type || this.activeCategory) && (this._destroyRelatedFeatureViewModels(), this.featurePage = 1, t.destroyAll(), this.destroyed || t.addMany(this._sliceFeatures(await this._queryRelatedFeatures({ signal: e7?.signal }))));
    }, this.addHandles([l(() => [this.displayCount, this.graphic, this.layer, this.layer?.loaded, this.map, this.orderByFields, this.relationshipId, this.featuresPerPage, this.showAllEnabled, this.canQuery, this.featureCount, this.activeCategory], () => this._queryDebounced(), h), l(() => [this.featurePage, this.showAllEnabled], () => this._queryPageDebounced()), l(() => [this.layer, this.relationshipId, this.objectId, this.canQuery, this.activeCategory], () => this._queryFeatureCountDebounced())]);
  }
  destroy() {
    this._destroyRelatedFeatureViewModels(), this.relatedFeatures.destroyAll(), this._cancelQuery(), this._cancelQueryFeatureCount(), this._cancelQueryPage();
  }
  set featurePage(e6) {
    const { featuresPerPage: t, featureCount: r4 } = this, o3 = 1, l4 = Math.ceil(r4 / t) || 1;
    this._set("featurePage", Math.min(Math.max(e6, o3), l4));
  }
  get featurePage() {
    return this._get("featurePage");
  }
  get orderByFieldsFixedCasing() {
    const { orderByFields: e6, relatedLayer: t } = this;
    return e6 && t?.loaded ? e6.map((e7) => {
      const r4 = e7.clone();
      return r4.field = O(e7.field, t), r4;
    }) : e6 ?? [];
  }
  get supportsCacheHint() {
    return !!this.layer?.capabilities?.queryRelated?.supportsCacheHint;
  }
  get canLoad() {
    return !!this.map && null != this.relationshipId && "number" == typeof this.objectId;
  }
  get canQuery() {
    const e6 = this.layer?.capabilities?.queryRelated;
    return !!(this.relatedLayer && this.relationship && null != this.relationshipId && null != this.objectId && e6?.supportsCount && e6?.supportsPagination);
  }
  get allCategoriesCount() {
    return this.allCategories?.length ?? 0;
  }
  get categories() {
    const { allCategories: e6 } = this;
    return this.showAllEnabled ? e6 : e6?.slice(0, this.displayCount) ?? null;
  }
  set displayCount(e6) {
    const t = 0, r4 = 10, o3 = 3;
    this._set("displayCount", Math.min(Math.max(e6 ?? o3, t), r4));
  }
  get displayCount() {
    return this._get("displayCount");
  }
  get itemDescriptionFieldName() {
    return this.orderByFieldsFixedCasing[0]?.field || null;
  }
  get objectId() {
    return (this.objectIdField && this.graphic?.attributes?.[this.objectIdField]) ?? null;
  }
  get objectIdField() {
    return this.layer?.objectIdField || null;
  }
  get relatedFeatures() {
    return this._get("relatedFeatures") || new q();
  }
  get relatedLayer() {
    const { layer: e6, map: t, relationship: r4 } = this;
    if (!e6?.loaded || !t || !r4) return null;
    const o3 = "subtype-sublayer" === e6.type && e6.parent && ee(e6.parent) ? e6.parent : e6;
    return Le(t, o3, r4) ?? null;
  }
  get relatedLayerKeyField() {
    const { relatedLayer: e6, relationshipId: t } = this;
    return e6?.loaded && null != t ? e6.relationships?.find((e7) => e7.id === t)?.keyField : null;
  }
  get relatedLayerKeyFields() {
    const { relatedLayer: e6 } = this;
    return e6?.loaded ? e6.relationships?.map((e7) => e7.keyField).filter(N) ?? [] : [];
  }
  get relationship() {
    const { relationshipId: e6, layer: t } = this;
    return null != e6 && t?.loaded ? t.relationships?.find(({ id: t2 }) => t2 === e6) ?? null : null;
  }
  get relationshipKey() {
    const { relationshipKeyField: e6 } = this;
    return (e6 && this.graphic?.attributes?.[e6]) ?? null;
  }
  get relationshipKeyField() {
    return this.relationship?.keyField || null;
  }
  get relatedFeatureViewModels() {
    return this._get("relatedFeatureViewModels") || new q();
  }
  get state() {
    const { _queryAbortController: e6, _queryFeatureCountAbortController: t, _queryPageAbortController: r4, canQuery: o3, _loaded: l4, canLoad: a4 } = this;
    return t || a4 && !l4 ? "loading" : e6 || r4 ? "querying" : o3 ? "ready" : "disabled";
  }
  getRelatedFeatureByObjectId(e6) {
    return this.relatedFeatures.find((t) => t.getObjectId() === e6);
  }
  refresh() {
    this._queryFeatureCountDebounced();
  }
  _destroyRelatedFeatureViewModels() {
    this.relatedFeatureViewModels?.destroyAll();
  }
  async _queryFeatureCount() {
    const { layer: e6, relatedLayer: t } = this;
    await e6?.load(), await t?.load();
    const { _queryFeatureCountAbortController: r4, activeCategory: l4, canQuery: a4, objectId: i3, relatedLayerKeyField: s7, relationshipId: n8, relationshipKey: u4, supportsCacheHint: d7 } = this;
    if (!a4 || !e6 || !t || null == i3) return this._set("featureCount", 0), void this._set("allCategories", null);
    if ("subtype-group" === t?.type && !l4) {
      if (this._set("featureCount", 0), this._destroyRelatedFeatureViewModels(), this.featurePage = 1, this.relatedFeatures.destroyAll(), s7 && null != u4) {
        const { default: e7 } = await import("./uniqueValues-ENRKCLK4.js"), { uniqueValueInfos: l5 } = await e7({ layer: t, sqlWhere: `${s7} = '${u4}'`, field: t.subtypeField, signal: r4?.signal }), a5 = l5.map(({ count: e8, value: r5 }) => {
          const o3 = t.subtypes?.find((e9) => e9.code === r5)?.name;
          return null != r5 && o3 ? { count: e8, value: r5, name: o3 } : void 0;
        }).filter(N);
        this._set("allCategories", a5);
      }
      return;
    }
    const { historicMoment: y5, gdbVersion: h5 } = e6, c7 = new d2({ cacheHint: d7, gdbVersion: h5, historicMoment: y5, relationshipId: n8, returnGeometry: false, objectIds: [i3], where: this._getRelationshipWhereClause(t) }), g3 = await e6.queryRelatedFeaturesCount(c7, { signal: r4?.signal });
    this._set("allCategories", null), this._set("featureCount", g3[i3] || 0);
  }
  _getRelationshipWhereClause(e6) {
    const { activeCategory: t } = this, r4 = e6.createQuery(), o3 = "subtypeField" in e6 ? e6.subtypeField : void 0, l4 = t && o3 ? `${o3} = ${t.value}` : void 0, a4 = r4.where;
    return a4 && l4 ? `(${a4}) AND (${l4})` : a4 ?? l4;
  }
  _sliceFeatures(e6) {
    const { showAllEnabled: t, displayCount: r4 } = this;
    return t ? e6 : r4 ? e6.slice(0, r4) : [];
  }
  async _queryPage() {
    const { relatedFeatures: e6, featurePage: t, showAllEnabled: r4, _queryPageAbortController: o3, featureCount: l4 } = this;
    !r4 || t < 2 || !l4 || "subtype-group" === this.relatedLayer?.type && !this.activeCategory || e6.addMany(await this._queryRelatedFeatures({ signal: o3?.signal }));
  }
  async _queryRelatedFeatures(e6) {
    const { displayCount: t, featureCount: r4, featurePage: o3, featuresPerPage: l4, layer: a4, orderByFieldsFixedCasing: i3, relatedLayer: s7, relatedLayerKeyFields: n8, relationshipId: u4, showAllEnabled: d7, supportsCacheHint: y5 } = this, { canQuery: h5, objectId: c7 } = this;
    if (!h5 || !a4 || !s7 || null == c7) return [];
    const g3 = d7 ? ((o3 - 1) * l4 + r4) % r4 : 0, C3 = d7 ? l4 : t, F6 = s7.objectIdField, _4 = "subtypeField" in s7 ? s7.subtypeField : void 0, m5 = [...i3.map((e7) => e7.field), ...Q(s7), ...n8, F6, _4].filter(f9), q4 = i3.map((e7) => `${e7.field} ${e7.order}`), { historicMoment: A3, gdbVersion: w5 } = a4, P3 = new d2({ orderByFields: q4, start: g3, num: C3, outFields: m5, cacheHint: y5, historicMoment: A3, gdbVersion: w5, relationshipId: u4, returnGeometry: false, objectIds: [c7], where: this._getRelationshipWhereClause(s7) }), v5 = await a4.queryRelatedFeatures(P3, { signal: e6?.signal }), I4 = v5[c7]?.features || [];
    return "subtype-group" === s7.type && _4 ? I4.forEach((e7) => {
      const t2 = e7.attributes[_4], r5 = s7.findSublayerForSubtypeCode?.(t2);
      e7.sourceLayer = r5, e7.layer = r5;
    }) : I4.forEach((e7) => {
      e7.sourceLayer = s7, e7.layer = s7;
    }), I4;
  }
};
function f9(e6) {
  return null != e6 && "" !== e6;
}
__decorate([a2()], _3.prototype, "_loaded", void 0), __decorate([a2()], _3.prototype, "_queryAbortController", void 0), __decorate([a2()], _3.prototype, "_queryPageAbortController", void 0), __decorate([a2()], _3.prototype, "_queryFeatureCountAbortController", void 0), __decorate([a2({ value: 1 })], _3.prototype, "featurePage", null), __decorate([a2()], _3.prototype, "featuresPerPage", void 0), __decorate([a2({ readOnly: true })], _3.prototype, "orderByFieldsFixedCasing", null), __decorate([a2({ readOnly: true })], _3.prototype, "supportsCacheHint", null), __decorate([a2({ readOnly: true })], _3.prototype, "canLoad", null), __decorate([a2({ readOnly: true })], _3.prototype, "canQuery", null), __decorate([a2()], _3.prototype, "activeCategory", void 0), __decorate([a2({ readOnly: true })], _3.prototype, "allCategories", void 0), __decorate([a2({ readOnly: true })], _3.prototype, "allCategoriesCount", null), __decorate([a2({ readOnly: true })], _3.prototype, "categories", null), __decorate([a2()], _3.prototype, "description", void 0), __decorate([a2({ value: 3 })], _3.prototype, "displayCount", null), __decorate([a2({ type: j3 })], _3.prototype, "graphic", void 0), __decorate([a2({ readOnly: true })], _3.prototype, "itemDescriptionFieldName", null), __decorate([a2()], _3.prototype, "layer", void 0), __decorate([a2()], _3.prototype, "map", void 0), __decorate([a2({ readOnly: true })], _3.prototype, "objectId", null), __decorate([a2({ readOnly: true })], _3.prototype, "objectIdField", null), __decorate([a2()], _3.prototype, "orderByFields", void 0), __decorate([a2({ readOnly: true })], _3.prototype, "relatedFeatures", null), __decorate([a2({ readOnly: true })], _3.prototype, "relatedLayer", null), __decorate([a2({ readOnly: true })], _3.prototype, "relatedLayerKeyField", null), __decorate([a2({ readOnly: true })], _3.prototype, "relatedLayerKeyFields", null), __decorate([a2({ readOnly: true })], _3.prototype, "relationship", null), __decorate([a2({ readOnly: true })], _3.prototype, "relationshipKey", null), __decorate([a2({ readOnly: true })], _3.prototype, "relationshipKeyField", null), __decorate([a2({ readOnly: true })], _3.prototype, "featureCount", void 0), __decorate([a2({ readOnly: true })], _3.prototype, "relatedFeatureViewModels", null), __decorate([a2()], _3.prototype, "relationshipId", void 0), __decorate([a2()], _3.prototype, "showAllEnabled", void 0), __decorate([a2()], _3.prototype, "state", null), __decorate([a2()], _3.prototype, "title", void 0), _3 = __decorate([c2("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")], _3);

// node_modules/@arcgis/core/widgets/Feature/FeatureViewModel.js
var te2;
var ie = 1;
var se2 = "content-view-models";
var oe = "relationship-view-models";
var re = "association-view-models";
var ae2 = { attachmentsContent: true, chartAnimation: true, customContent: true, expressionContent: true, fieldsContent: true, mediaContent: true, textContent: true, relationshipContent: true, utilityNetworkAssociationsContent: true };
var ne = class extends o(b) {
  static {
    te2 = this;
  }
  constructor(e6) {
    super(e6), this._error = null, this._graphicChangedTask = null, this._evaluateExpressionAttributesTask = null, this._associationVMAbortController = null, this._expressionAttributes = null, this._graphicExpressionAttributes = null, this.abilities = __spreadValues({}, ae2), this.content = null, this.contentViewModels = [], this.description = null, this.defaultPopupTemplateEnabled = false, this.formattedAttributes = null, this.graphic = null, this.lastEditInfo = null, this.location = null, this.relatedInfos = /* @__PURE__ */ new Map(), this.title = "", this.view = null, this._graphicChangedThrottled = l3(this._graphicChanged, () => this.notifyChange("waitingForContent"), ie, this), this._isAllowedContentType = (e7) => {
      const { abilities: t } = this;
      return "attachments" === e7.type && !!t.attachmentsContent || "custom" === e7.type && !!t.customContent || "fields" === e7.type && !!t.fieldsContent || "media" === e7.type && !!t.mediaContent || "text" === e7.type && !!t.textContent || "expression" === e7.type && !!t.expressionContent || "relationship" === e7.type && !!t.relationshipContent || "utility-network-associations" === e7.type && !!t.utilityNetworkAssociationsContent;
    }, this._evaluateExpressionAttributesThrottled = l3(this._evaluateExpressionAttributes, () => this.notifyChange("waitingForContent"), ie, this), this.addHandles([l(() => [this.graphic, this._effectivePopupTemplate, this.abilities, this.timeZone], () => this._graphicChangedThrottled(), h), f2(() => {
      if (!this._graphicChangedTask?.finished || null == this._graphicChangedTask.value) return null;
      const e7 = this._graphicChangedTask.value, t = e7?.expressionInfos?.dependencies;
      return [e7, t?.has("view-scale") ? this.view?.scale : null, t?.has("view-time-extent") ? this.view?.timeExtent?.start : null, t?.has("view-time-extent") ? this.view?.timeExtent?.end : null];
    }, ([e7]) => this._evaluateExpressionAttributesThrottled(e7))]);
  }
  initialize() {
    this.addHandles([this._graphicChangedThrottled, this._evaluateExpressionAttributesThrottled]);
  }
  destroy() {
    this._clear(), this._graphicChangedTask = e(this._graphicChangedTask), this._evaluateExpressionAttributesTask = e(this._evaluateExpressionAttributesTask), this._error = null, this.graphic = null, this._destroyContentViewModels(), this.relatedInfos.clear();
  }
  static {
    this.interceptor = new e3(Ze, ve);
  }
  get _effectivePopupTemplate() {
    return null != this.graphic ? this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled) : null;
  }
  get _fieldInfoMap() {
    return fe(de(this._effectivePopupTemplate), this._sourceLayer);
  }
  get _sourceLayer() {
    return q2(this.graphic);
  }
  castAbilities(e6) {
    return __spreadValues(__spreadValues({}, ae2), e6);
  }
  get isFeatureFromTable() {
    return this._sourceLayer?.isTable || false;
  }
  get state() {
    return this.graphic ? this._error ? "error" : this.waitingForContent ? "loading" : "ready" : "disabled";
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(e6) {
    this._override("spatialReference", e6);
  }
  get timeZone() {
    return this.view?.timeZone ?? e2;
  }
  set timeZone(e6) {
    this._overrideIfSome("timeZone", e6);
  }
  get map() {
    return this.view?.map || null;
  }
  set map(e6) {
    this._override("map", e6);
  }
  get waitingForContent() {
    const { _graphicChangedThrottled: e6, _evaluateExpressionAttributesThrottled: t, _graphicChangedTask: i3, _evaluateExpressionAttributesTask: s7, _associationVMAbortController: o3 } = this;
    return e6.hasPendingUpdates() || t.hasPendingUpdates() || null != i3 && !i3.finished || null != s7 && !s7.finished || !!o3;
  }
  setActiveMedia(e6, t) {
    const i3 = this.contentViewModels[e6];
    i3 instanceof v3 && i3.setActiveMedia(t);
  }
  nextMedia(e6) {
    const t = this.contentViewModels[e6];
    t instanceof v3 && t.next();
  }
  previousMedia(e6) {
    const t = this.contentViewModels[e6];
    t instanceof v3 && t.previous();
  }
  async updateGeometry() {
    const { graphic: e6, spatialReference: t, _sourceLayer: i3 } = this;
    await i3?.load();
    const s7 = i3?.objectIdField;
    if (!s7 || !e6 || !i3) return;
    const o3 = e6?.attributes?.[s7];
    if (null == o3) return;
    const r4 = [o3];
    if (!e6.geometry) {
      const s8 = await ge({ layer: i3, graphic: e6, outFields: [], objectIds: r4, returnGeometry: true, spatialReference: t }), o4 = s8?.geometry;
      o4 && (e6.geometry = o4);
    }
  }
  _clear() {
    this._set("title", ""), this._set("content", null), this._set("formattedAttributes", null);
  }
  _graphicChanged() {
    this._evaluateExpressionAttributesTask = e(this._evaluateExpressionAttributesTask), this._graphicChangedTask = e(this._graphicChangedTask), this._graphicChangedTask = w(async (e6) => {
      this._error = null, this._clear();
      const { graphic: t } = this;
      try {
        if (!t) return null;
        const { _sourceLayer: i3, _effectivePopupTemplate: s7 } = this, o3 = this.spatialReference;
        await he({ graphic: t, popupTemplate: s7, layer: i3, spatialReference: o3 }, { signal: e6 });
        const [{ value: r4 }, { value: a4 }] = await j([this._getContent(), this._getTitle()]), [, { value: n8 }] = await j([this._checkForRelatedFeatures({ signal: e6 }), L3(s7?.expressionInfos, t)]);
        return { expressionInfos: n8, content: r4, title: a4 };
      } catch (i3) {
        throw d(i3) || (this._error = i3, n.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: i3, graphic: t, popupTemplate: this._effectivePopupTemplate })), i3;
      }
    });
  }
  _compileContentElement(e6, t) {
    return "attachments" === e6.type ? this._compileAttachments(e6, t) : "custom" === e6.type ? this._compileCustom(e6, t) : "fields" === e6.type ? this._compileFields(e6, t) : "media" === e6.type ? this._compileMedia(e6, t) : "text" === e6.type ? this._compileText(e6, t) : "expression" === e6.type ? this._compileExpression(e6, t) : "relationship" === e6.type ? this._compileRelationship(e6, t) : "utility-network-associations" === e6.type ? this._compileUtilityNetworkAssociation(e6, t) : void 0;
  }
  _compileContent(e6) {
    if (this._destroyContentViewModels(), this.graphic) return Array.isArray(e6) ? e6.filter(this._isAllowedContentType).map((e7, t) => this._compileContentElement(e7, t)).filter(N) : "string" == typeof e6 ? this._compileText(new n2({ text: e6 }), 0).text : e6;
  }
  _destroyContentViewModels() {
    this.removeHandles(oe), this.removeHandles(se2), this.contentViewModels.forEach((e6) => e6 && !e6.destroyed && e6.destroy()), this._set("contentViewModels", []);
  }
  _matchesFeature(e6, t) {
    const i3 = e6?.graphic?.getObjectId(), s7 = t?.getObjectId();
    return null != i3 && null != s7 && i3 === s7;
  }
  _setRelatedFeaturesViewModels({ relatedFeatureViewModels: e6, relatedFeatures: t, map: i3 }) {
    const { view: s7, spatialReference: o3, timeZone: r4 } = this;
    t?.filter(Boolean).forEach((t2) => {
      e6.some((e7) => this._matchesFeature(e7, t2)) || e6.add(new te2({ abilities: { relationshipContent: false }, map: i3, view: s7, spatialReference: o3, timeZone: r4, graphic: t2 }));
    }), e6.forEach((i4) => {
      const s8 = t?.find((e7) => this._matchesFeature(i4, e7));
      s8 || e6.remove(i4);
    });
  }
  _setExpressionContentVM(e6, t) {
    const i3 = this.formattedAttributes, { contentElement: s7, contentElementViewModel: o3 } = e6, r4 = s7?.type;
    o3 && r4 && ("fields" === r4 && (this._createFieldsFormattedAttributes({ contentElement: s7, contentElementIndex: t, formattedAttributes: i3 }), o3.set(this._createFieldsVMParams(s7, t))), "media" === r4 && (this._createMediaFormattedAttributes({ contentElement: s7, contentElementIndex: t, formattedAttributes: i3 }), o3.set(this._createMediaVMParams(s7, t))), "text" === r4 && o3.set(this._createTextVMParams(s7)));
  }
  _compileRelationship(e6, t) {
    const { displayCount: i3, orderByFields: s7, relationshipId: o3, title: r4, description: a4 } = e6, { _sourceLayer: n8, graphic: l4, map: p8 } = this;
    if (!ee(n8)) return;
    const c7 = new _3(__spreadValues({ displayCount: i3, graphic: l4, orderByFields: s7, relationshipId: o3, layer: n8, map: p8 }, this._compileTitleAndDesc({ title: r4, description: a4 })));
    return this.contentViewModels[t] = c7, this.addHandles(a(() => c7.relatedFeatures, "change", () => this._setRelatedFeaturesViewModels(c7)), oe), e6;
  }
  _matchesGlobalFeature(e6, t) {
    return e6.association.equals(t.association);
  }
  _setUpUtilityNetworkAssociationsViewModels(e6, t, i3) {
    const { view: s7, spatialReference: o3, timeZone: r4 } = this;
    e6.forEach((i4, s8) => {
      const o4 = t.get(s8);
      o4 ? i4.forEach((t2) => {
        o4.find((e7) => this._matchesGlobalFeature(t2, e7)) || (i4.remove(t2), 0 === i4.length && e6.delete(s8));
      }) : (i4.removeAll(), e6.delete(s8));
    }), t.forEach((t2, n8) => {
      const l4 = e6.get(n8) || new q();
      t2?.filter(Boolean).forEach((e7, t3) => {
        if (!l4.some((t4) => this._matchesGlobalFeature(t4, e7))) {
          const { association: a4, feature: n9, terminalName: p8, title: c7 } = e7;
          l4.add({ title: c7, association: a4, featureViewModel: new te2({ abilities: { utilityNetworkAssociationsContent: false }, map: i3, view: s7, spatialReference: o3, timeZone: r4, graphic: n9 }), terminalName: p8 }, t3);
        }
      }), e6.set(n8, l4);
    });
  }
  _compileUtilityNetworkAssociation(e6, t) {
    const { displayCount: i3, title: s7, description: o3, associationTypes: r4 } = e6, { _sourceLayer: a4, graphic: n8, map: l4 } = this;
    if (!te(a4)) return;
    const p8 = new v(__spreadValues({ graphic: n8, displayCount: i3, associationTypes: r4, layer: a4, map: l4 }, this._compileTitleAndDesc({ title: s7, description: o3 })));
    return this.contentViewModels[t] = p8, this.addHandles([l(() => p8.associationFeatures.values(), () => this._setUpUtilityNetworkAssociationsViewModels(p8.associationViewModels, p8.associationFeatures, p8.map))], re), e6;
  }
  _compileExpression(e6, t) {
    const { expressionInfo: i3 } = e6, { graphic: s7, map: o3, spatialReference: r4, view: a4, location: n8 } = this, l4 = new E2({ expressionInfo: i3, graphic: s7, interceptor: te2.interceptor, map: o3, spatialReference: r4, view: a4, location: n8 });
    return this.contentViewModels[t] = l4, this.addHandles(l(() => l4.contentElementViewModel, () => this._setExpressionContentVM(l4, t), h), se2), e6;
  }
  _compileAttachments(e6, t) {
    const { graphic: i3 } = this, { description: s7, title: o3, orderByFields: r4, attachmentKeywords: a4, attachmentTypes: n8 } = e6;
    return this.contentViewModels[t] = new s4(__spreadValues({ attachmentKeywords: a4, attachmentTypes: n8, graphic: i3, orderByFields: r4 }, this._compileTitleAndDesc({ title: o3, description: s7 }))), e6;
  }
  _compileCustom(e6, t) {
    const { graphic: i3 } = this, { creator: s7, destroyer: o3 } = e6;
    return this.contentViewModels[t] = new c4({ graphic: i3, creator: s7, destroyer: o3 }), e6;
  }
  _compileTitleAndDesc({ title: e6, description: t }) {
    const { _fieldInfoMap: i3, _sourceLayer: s7, graphic: o3, formattedAttributes: r4 } = this, a4 = o3?.attributes, n8 = this._expressionAttributes, l4 = r4.global;
    return { title: P({ attributes: a4, fieldInfoMap: i3, globalAttributes: l4, expressionAttributes: n8, layer: s7, text: e6 }), description: P({ attributes: a4, fieldInfoMap: i3, globalAttributes: l4, expressionAttributes: n8, layer: s7, text: t }) };
  }
  _createFieldsVMParams(e6, t) {
    const i3 = this._effectivePopupTemplate, s7 = this.formattedAttributes, o3 = __spreadValues(__spreadValues({}, s7?.global), s7?.content[t]), r4 = !!e6?.fieldInfos, a4 = e6?.fieldInfos || i3?.fieldInfos, n8 = a4?.filter(({ fieldName: e7 }) => !!e7 && (A(e7) || Fe(e7) || o3.hasOwnProperty(e7))), l4 = i3?.expressionInfos, { description: p8, title: c7 } = e6;
    return __spreadValues({ attributes: o3, expressionInfos: l4, fieldInfos: n8, isContentFieldInfos: r4, graphic: this.graphic, layer: this._sourceLayer }, this._compileTitleAndDesc({ title: c7, description: p8 }));
  }
  _compileFields(e6, t) {
    const i3 = e6.clone(), s7 = new f6(this._createFieldsVMParams(e6, t));
    return this.contentViewModels[t] = s7, i3.fieldInfos = s7.formattedFieldInfos.slice(), i3;
  }
  _createMediaVMParams(e6, t) {
    const { abilities: i3, graphic: s7, _fieldInfoMap: o3, _effectivePopupTemplate: r4, relatedInfos: a4, _sourceLayer: n8, _expressionAttributes: l4 } = this, p8 = this.formattedAttributes, c7 = s7?.attributes ?? {}, { description: d7, mediaInfos: h5, title: u4 } = e6;
    return __spreadValues({ abilities: { chartAnimation: i3.chartAnimation }, activeMediaInfoIndex: e6.activeMediaInfoIndex || 0, attributes: c7, graphic: s7, layer: n8, fieldInfoMap: o3, formattedAttributes: __spreadValues(__spreadValues({}, p8?.global), p8?.content[t]), expressionAttributes: l4, mediaInfos: h5, popupTemplate: r4, relatedInfos: a4 }, this._compileTitleAndDesc({ title: u4, description: d7 }));
  }
  _compileMedia(e6, t) {
    const i3 = e6.clone(), s7 = new v3(this._createMediaVMParams(e6, t));
    return i3.mediaInfos = s7.formattedMediaInfos.slice(), this.contentViewModels[t] = s7, i3;
  }
  _createTextVMParams(e6) {
    const { graphic: t, _fieldInfoMap: i3, _sourceLayer: s7, _expressionAttributes: o3 } = this;
    if (e6 && e6.text) {
      const r4 = t?.attributes ?? {}, a4 = this.formattedAttributes?.global ?? {};
      e6.text = P({ attributes: r4, fieldInfoMap: i3, globalAttributes: a4, expressionAttributes: o3, layer: s7, text: e6.text });
    }
    return { graphic: t, creator: e6.text };
  }
  _compileText(e6, t) {
    const i3 = e6.clone();
    return this.contentViewModels[t] = new c4(this._createTextVMParams(i3)), i3;
  }
  _compileLastEditInfo() {
    const { _effectivePopupTemplate: e6, _sourceLayer: t, graphic: i3, timeZone: s7 } = this;
    if (!e6) return;
    const { lastEditInfoEnabled: o3 } = e6, r4 = t?.editFieldsInfo;
    return o3 && r4 ? se(r4, i3?.attributes, s7, t) : void 0;
  }
  _compileTitle(e6) {
    const { _fieldInfoMap: t, _sourceLayer: i3, graphic: s7, _expressionAttributes: o3 } = this, r4 = s7?.attributes ?? {}, a4 = this.formattedAttributes?.global ?? {};
    return P({ attributes: r4, fieldInfoMap: t, globalAttributes: a4, expressionAttributes: o3, layer: i3, text: e6 });
  }
  async _getTitle() {
    const { _effectivePopupTemplate: e6, graphic: t } = this;
    return t ? x2({ type: "title", value: e6?.title, event: { graphic: t } }) : null;
  }
  async _getContent() {
    const { _effectivePopupTemplate: e6, graphic: t } = this;
    return t ? x2({ type: "content", value: e6?.content, event: { graphic: t } }) : null;
  }
  _evaluateExpressionAttributes({ title: e6, content: t, expressionInfos: i3 }) {
    this._evaluateExpressionAttributesTask = e(this._evaluateExpressionAttributesTask), this._evaluateExpressionAttributesTask = w(async (s7) => {
      const { graphic: o3, map: r4, view: a4, spatialReference: n8, location: p8 } = this;
      try {
        if (!o3) return;
        let l4;
        if (null != i3) {
          const e7 = [];
          for (const [t2, l5] of i3.expressions.entries()) null != l5 ? e7.push(l5.evaluate({ graphic: o3, interceptor: te2.interceptor, location: p8, map: r4, options: { signal: s7 }, spatialReference: n8, view: a4 }).then((e8) => [t2, "string" == typeof e8 ? y4(e8) : e8]).catch(() => [t2, void 0])) : e7.push(Promise.resolve([t2, void 0]));
          l4 = Object.fromEntries(await Promise.all(e7)), s(s7);
        }
        this._expressionAttributes = l4, this._graphicExpressionAttributes = __spreadValues(__spreadValues({}, o3.attributes), l4), this._set("formattedAttributes", this._createFormattedAttributes(t)), this._set("title", this._compileTitle(e6)), this._set("lastEditInfo", this._compileLastEditInfo() || null), this._set("content", this._compileContent(t) || null);
      } catch (c7) {
        d(c7) || (this._error = c7, n.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: c7, graphic: o3, popupTemplate: this._effectivePopupTemplate }));
      }
    });
  }
  _createMediaFormattedAttributes({ contentElement: e6, contentElementIndex: t, formattedAttributes: i3 }) {
    const { _effectivePopupTemplate: s7, graphic: o3, relatedInfos: r4, _sourceLayer: a4, _fieldInfoMap: n8, _graphicExpressionAttributes: l4, timeZone: p8 } = this;
    i3.content[t] = me({ attributes: __spreadValues(__spreadValues({}, l4), e6.attributes), fieldInfoMap: n8, fieldInfos: s7?.fieldInfos, graphic: o3, layer: a4, relatedInfos: r4, timeZone: p8 });
  }
  _createFieldsFormattedAttributes({ contentElement: e6, contentElementIndex: t, formattedAttributes: i3 }) {
    if (e6.fieldInfos) {
      const { graphic: s7, relatedInfos: o3, _sourceLayer: r4, _fieldInfoMap: a4, _graphicExpressionAttributes: n8, timeZone: l4 } = this;
      i3.content[t] = me({ attributes: __spreadValues(__spreadValues({}, n8), e6.attributes), fieldInfoMap: a4, fieldInfos: e6.fieldInfos, graphic: s7, isContentFieldInfos: true, layer: r4, relatedInfos: o3, timeZone: l4 });
    }
  }
  _createFormattedAttributes(e6) {
    const { _effectivePopupTemplate: t, graphic: i3, relatedInfos: s7, _sourceLayer: o3, _fieldInfoMap: r4, _graphicExpressionAttributes: a4, timeZone: n8 } = this, l4 = t?.fieldInfos, p8 = { global: me({ attributes: a4, fieldInfoMap: r4, fieldInfos: l4, graphic: i3, layer: o3, relatedInfos: s7, timeZone: n8 }), content: [] };
    return Array.isArray(e6) && e6.forEach((e7, t2) => {
      "fields" === e7.type && this._createFieldsFormattedAttributes({ contentElement: e7, contentElementIndex: t2, formattedAttributes: p8 }), "media" === e7.type && this._createMediaFormattedAttributes({ contentElement: e7, contentElementIndex: t2, formattedAttributes: p8 });
    }), p8;
  }
  _checkForRelatedFeatures(e6) {
    const { graphic: t, _effectivePopupTemplate: i3 } = this;
    return this._queryRelatedInfos(t, de(i3), e6);
  }
  async _queryRelatedInfos(e6, t, i3) {
    const { relatedInfos: s7, _sourceLayer: o3 } = this;
    s7.clear();
    const r4 = null != o3?.associatedLayer ? await o3?.associatedLayer.load(i3) : o3;
    if (!r4 || !e6) return;
    const a4 = t.filter((e7) => !!e7.fieldName && Fe(e7.fieldName));
    if (!a4?.length) return;
    t.forEach((e7) => this._configureRelatedInfo(e7, r4));
    const n8 = await v2({ relatedInfos: s7, layer: r4 }, i3);
    Object.keys(n8).forEach((e7) => {
      const t2 = s7.get(e7.toString()), i4 = n8[e7]?.value;
      t2 && i4 && (t2.layerInfo = i4.data);
    });
    const l4 = await T({ graphic: e6, relatedInfos: s7, layer: r4 }, i3);
    Object.keys(l4).forEach((e7) => {
      g(l4[e7]?.value, s7.get(e7.toString()));
    });
  }
  _configureRelatedInfo(e6, t) {
    const { relatedInfos: i3 } = this, s7 = h2(e6.fieldName || "");
    if (!s7) return;
    const { layerId: o3, fieldName: r4 } = s7;
    if (!o3) return;
    const a4 = i3.get(o3.toString()) || b2(o3, t);
    a4 && (q3({ relatedInfo: a4, fieldName: r4, fieldInfo: e6 }), this.relatedInfos.set(o3, a4));
  }
};
__decorate([a2()], ne.prototype, "_error", void 0), __decorate([a2()], ne.prototype, "_graphicChangedTask", void 0), __decorate([a2()], ne.prototype, "_evaluateExpressionAttributesTask", void 0), __decorate([a2()], ne.prototype, "_associationVMAbortController", void 0), __decorate([a2({ readOnly: true })], ne.prototype, "_effectivePopupTemplate", null), __decorate([a2({ readOnly: true })], ne.prototype, "_fieldInfoMap", null), __decorate([a2({ readOnly: true })], ne.prototype, "_sourceLayer", null), __decorate([a2()], ne.prototype, "abilities", void 0), __decorate([m("abilities")], ne.prototype, "castAbilities", null), __decorate([a2({ readOnly: true })], ne.prototype, "content", void 0), __decorate([a2({ readOnly: true })], ne.prototype, "contentViewModels", void 0), __decorate([a2()], ne.prototype, "description", void 0), __decorate([a2({ type: Boolean })], ne.prototype, "defaultPopupTemplateEnabled", void 0), __decorate([a2({ readOnly: true })], ne.prototype, "isFeatureFromTable", null), __decorate([a2({ readOnly: true })], ne.prototype, "state", null), __decorate([a2({ readOnly: true })], ne.prototype, "formattedAttributes", void 0), __decorate([a2({ type: j3 })], ne.prototype, "graphic", void 0), __decorate([a2({ readOnly: true })], ne.prototype, "lastEditInfo", void 0), __decorate([a2({ type: _ })], ne.prototype, "location", void 0), __decorate([a2({ readOnly: true })], ne.prototype, "relatedInfos", void 0), __decorate([a2({ type: S })], ne.prototype, "spatialReference", null), __decorate([a2()], ne.prototype, "timeZone", null), __decorate([a2({ readOnly: true })], ne.prototype, "title", void 0), __decorate([a2()], ne.prototype, "map", null), __decorate([a2({ readOnly: true })], ne.prototype, "waitingForContent", null), __decorate([a2()], ne.prototype, "view", void 0), ne = te2 = __decorate([c2("esri.widgets.Feature.FeatureViewModel")], ne);

// node_modules/@arcgis/core/widgets/support/legacyIcon.js
var i2 = { close: "esri-icon-close", collapse: "esri-icon-collapse", down: "esri-icon-down", downArrow: "esri-icon-down-arrow", dragHorizontal: "esri-icon-drag-horizontal", dragVertical: "esri-icon-drag-vertical", duplicate: "esri-icon-duplicate", expand: "esri-icon-expand", fontFallbackText: "esri-icon-font-fallback-text", forward: "esri-icon-forward", handleVertical: "esri-icon-handle-vertical", icon: "esri-icon", left: "esri-icon-left", locateCircled: "esri-icon-locate-circled", noticeTriangle: "esri-icon-notice-triangle", pause: "esri-icon-pause", play: "esri-icon-play", plus: "esri-icon-plus", radioChecked: "esri-icon-radio-checked", radioUnchecked: "esri-icon-radio-unchecked", refresh: "esri-icon-refresh", reverse: "esri-icon-reverse", right: "esri-icon-right", search: "esri-icon-search", swap: "esri-icon-swap", table: "esri-icon-table", trash: "esri-icon-trash", up: "esri-icon-up", upArrow: "esri-icon-up-arrow", upDownArrows: "esri-icon-up-down-arrows", urbanModel: "esri-icon-urban-model", zoomInMagnifyingGlass: "esri-icon-zoom-in-magnifying-glass", zoomToObject: "esri-icon-zoom-to-object" };

export {
  A2 as A,
  y2 as y,
  s4 as s,
  c4 as c,
  f6 as f,
  v3 as v,
  E2 as E,
  _3 as _,
  ne,
  i2 as i
};
//# sourceMappingURL=chunk-BHT5OEU3.js.map
