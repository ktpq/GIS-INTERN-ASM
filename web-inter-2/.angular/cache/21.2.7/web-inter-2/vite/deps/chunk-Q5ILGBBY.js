import {
  l as l4
} from "./chunk-HPDWJO76.js";
import {
  v
} from "./chunk-2KMOKZFG.js";
import {
  t
} from "./chunk-YHNKQFNT.js";
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
  x
} from "./chunk-TCXSSBTP.js";
import {
  d as d3
} from "./chunk-44EFV35I.js";
import {
  n as n2
} from "./chunk-OQ5NVOBH.js";
import {
  s as s2
} from "./chunk-P7RZPXO4.js";
import {
  n as n3
} from "./chunk-HEZLCXKB.js";
import {
  b as b2
} from "./chunk-GLZN7WIE.js";
import {
  i
} from "./chunk-UTMQRFW7.js";
import {
  M
} from "./chunk-EDM7PDCW.js";
import {
  Ye
} from "./chunk-PLCSWKU6.js";
import {
  l as l3
} from "./chunk-YUETTAQM.js";
import {
  p as p3
} from "./chunk-YGU33O2Y.js";
import {
  d as d2
} from "./chunk-6JKRZH3D.js";
import {
  R
} from "./chunk-VCFT2RFZ.js";
import {
  p as p2
} from "./chunk-F6XZYXKM.js";
import {
  w
} from "./chunk-LBXDB7YQ.js";
import {
  j as j3
} from "./chunk-QXUZD2G5.js";
import {
  C,
  c2 as c3,
  j as j2,
  n3 as n4,
  n4 as n5,
  p as p4,
  s as s3,
  u,
  x as x2
} from "./chunk-A65L2IOA.js";
import {
  o as o2
} from "./chunk-WWKLZ2P6.js";
import {
  q
} from "./chunk-DVLEZ3TT.js";
import {
  l
} from "./chunk-NLVGGH5B.js";
import {
  Fe as Fe2
} from "./chunk-BGBXZWYV.js";
import {
  o
} from "./chunk-DMOCO4H5.js";
import {
  f as f2
} from "./chunk-UDRKO2UK.js";
import {
  a as a2,
  f as f3,
  h,
  l as l2
} from "./chunk-M44GXGOJ.js";
import {
  N as N2
} from "./chunk-N7OQ4MFT.js";
import {
  e as e3
} from "./chunk-473S3KQM.js";
import {
  _
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  f2 as f4
} from "./chunk-RVKOLALF.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c as c2,
  m3 as m
} from "./chunk-JM4CKTH2.js";
import {
  e as e2
} from "./chunk-RTVKY37F.js";
import {
  L,
  d,
  e,
  j,
  p,
  s,
  y
} from "./chunk-WARIPJQI.js";
import {
  f,
  n2 as n,
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  N,
  c
} from "./chunk-GLWFJLHD.js";
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
var e4 = class {
  constructor(e7, a5) {
    this.preLayerQueryCallback = e7, this.preRequestCallback = a5, this.preLayerQueryCallback || (this.preLayerQueryCallback = (e8) => {
    }), this.preRequestCallback || (this.preLayerQueryCallback = (e8) => {
    });
  }
};

// node_modules/@arcgis/core/widgets/Attachments/AttachmentsViewModel.js
var u2 = { editing: false, operations: { add: true, update: true, delete: true } };
var f5 = q.ofType(d3);
var y2 = class extends b {
  constructor(t2) {
    super(t2), this._getAttachmentsPromise = null, this._attachmentLayer = null, this.attachmentKeywords = null, this.attachmentTypes = null, this.capabilities = __spreadValues({}, u2), this.activeAttachmentInfo = null, this.activeFileInfo = null, this.attachmentInfos = new f5(), this.fileInfos = new q(), this.graphic = null, this.mode = "view", this.orderByFields = null, this.filesEnabled = false, this.addHandles(l2(() => this.graphic, () => this._graphicChanged(), h));
  }
  destroy() {
    this._attachmentLayer = null, this.graphic = null;
  }
  castCapabilities(t2) {
    return __spreadValues(__spreadValues({}, u2), t2);
  }
  get state() {
    return this._getAttachmentsPromise ? "loading" : this.graphic ? "ready" : "disabled";
  }
  get supportsResizeAttachments() {
    const { graphic: t2 } = this;
    if (!t2) return false;
    const e7 = t2.sourceLayer ?? t2.layer;
    return e7?.loaded && "capabilities" in e7 && e7.capabilities && "attachment" in e7.capabilities && e7.capabilities.attachment && "supportsResize" in e7.capabilities.attachment && e7.capabilities.attachment.supportsResize || false;
  }
  get supportsTypeWildcard() {
    const { graphic: t2 } = this;
    if (!t2) return false;
    const e7 = t2.sourceLayer ?? t2.layer;
    return e7?.loaded && "capabilities" in e7 && e7.capabilities && "attachment" in e7.capabilities && e7.capabilities.attachment && "supportsResize" in e7.capabilities.attachment && e7.capabilities.attachment.supportsTypeWildcard || false;
  }
  async getAttachments() {
    const { _attachmentLayer: t2, attachmentInfos: e7, orderByFields: i3, attachmentTypes: a5, attachmentKeywords: r5, supportsTypeWildcard: s8 } = this;
    if (!t2 || "function" != typeof t2.queryAttachments) throw new r("invalid-layer", "getAttachments(): A valid layer is required.");
    const o3 = this._getObjectId();
    if ("number" != typeof o3) throw new r("invalid-object-id", "getAttachments(): Numeric object id is required");
    const c7 = i3?.map((t3) => `${t3.field} ${"descending" === t3.order ? "DESC" : "ASC"}`), h5 = new p3({ objectIds: [o3], returnMetadata: true, orderByFields: c7, attachmentTypes: s8 ? a5?.filter(Boolean).map((t3) => `${t3}/*`) : void 0, keywords: r5 }), d7 = [], l5 = t2.queryAttachments(h5).then((t3) => t3[o3] || d7).catch(() => d7);
    this._getAttachmentsPromise = l5, this.notifyChange("state");
    const m5 = await l5;
    return e7.destroyAll(), m5.length && e7.addMany(m5), this._getAttachmentsPromise = null, this.notifyChange("state"), m5;
  }
  async addAttachment(t2, e7 = this.graphic) {
    const { _attachmentLayer: i3, attachmentInfos: a5, capabilities: r5 } = this;
    if (!e7) throw new r("invalid-graphic", "addAttachment(): A valid graphic is required.", { graphic: e7 });
    if (!t2) throw new r("invalid-attachment", "addAttachment(): An attachment is required.", { attachment: t2 });
    if (!r5.operations?.add) throw new r("invalid-capabilities", "addAttachment(): add capabilities are required.");
    if (!i3 || "function" != typeof i3.addAttachment) throw new r("invalid-layer", "addAttachment(): A valid layer is required.");
    const s8 = i3.addAttachment(e7, t2).then((t3) => this._queryAttachment(t3.objectId, e7)), o3 = await s8;
    return a5.add(o3), o3;
  }
  async deleteAttachment(t2) {
    const { _attachmentLayer: e7, attachmentInfos: i3, graphic: a5, capabilities: r5 } = this;
    if (!t2) throw new r("invalid-attachment-info", "deleteAttachment(): An attachmentInfo is required.", { attachmentInfo: t2 });
    if (!r5.operations?.delete) throw new r("invalid-capabilities", "deleteAttachment(): delete capabilities are required.");
    if (!e7 || "function" != typeof e7.deleteAttachments) throw new r("invalid-layer", "deleteAttachment(): A valid layer is required.");
    if (!a5) throw new r("invalid-graphic", "deleteAttachment(): A graphic is required.");
    const s8 = e7.deleteAttachments(a5, [t2.id]).then(() => t2), o3 = await s8;
    return i3.remove(o3), o3.destroy(), o3;
  }
  async updateAttachment(t2, e7 = this.activeAttachmentInfo) {
    const { _attachmentLayer: i3, attachmentInfos: a5, graphic: r5, capabilities: s8 } = this;
    if (!t2) throw new r("invalid-attachment", "updateAttachment(): An attachment is required.", { attachment: t2 });
    if (!e7) throw new r("invalid-attachment-info", "updateAttachment(): An attachmentInfo is required.", { attachmentInfo: e7 });
    if (!s8.operations?.update) throw new r("invalid-capabilities", "updateAttachment(): Update capabilities are required.");
    const o3 = a5.indexOf(e7);
    if (!i3 || "function" != typeof i3.updateAttachment) throw new r("invalid-layer", "updateAttachment(): A valid layer is required.");
    if (!r5) throw new r("invalid-graphic", "updateAttachment(): A graphic is required.");
    const c7 = i3.updateAttachment(r5, e7.id, t2).then((t3) => this._queryAttachment(t3.objectId)), h5 = await c7;
    return a5.splice(o3, 1, h5), h5;
  }
  async commitFiles() {
    return await Promise.all(this.fileInfos.items.map((t2) => this.addAttachment(t2.form))), this.fileInfos.removeAll(), this.getAttachments();
  }
  addFile(t2, e7) {
    if (!t2 || !e7) return null;
    const i3 = { file: t2, form: e7 };
    return this.fileInfos.add(i3), i3;
  }
  updateFile(t2, e7, i3 = this.activeFileInfo) {
    if (!t2 || !e7 || !i3) return null;
    const a5 = this.fileInfos.indexOf(i3);
    return a5 > -1 && this.fileInfos.splice(a5, 1, { file: t2, form: e7 }), this.fileInfos.items[a5];
  }
  deleteFile(t2) {
    const e7 = this.fileInfos.find((e8) => e8.file === t2);
    return e7 ? (this.fileInfos.remove(e7), e7) : null;
  }
  async _queryAttachment(t2, e7) {
    const { _attachmentLayer: i3 } = this;
    if (!t2 || !i3?.queryAttachments) throw new r("invalid-attachment-id", "Could not query attachment.");
    const a5 = this._getObjectId(e7);
    if ("number" != typeof a5) throw new r("invalid-object-id", "getAttachments(): Numeric object id is required");
    const r5 = new p3({ objectIds: [a5], attachmentsWhere: `AttachmentId=${t2}`, returnMetadata: true });
    return i3.queryAttachments(r5).then((t3) => t3[a5][0]);
  }
  _getObjectId(t2 = this.graphic) {
    return t2?.getObjectId() ?? null;
  }
  _graphicChanged() {
    this.graphic && (this._setAttachmentLayer(), this.getAttachments().catch(() => this.attachmentInfos.destroyAll()));
  }
  _setAttachmentLayer() {
    const { graphic: t2 } = this, e7 = q2(t2);
    this._attachmentLayer = e7 ? "scene" === e7.type && null != e7.associatedLayer ? e7.associatedLayer : e7 : null;
  }
};
__decorate([a({ type: [String] })], y2.prototype, "attachmentKeywords", void 0), __decorate([a({ type: [["application", "audio", "image", "model", "text", "video"]] })], y2.prototype, "attachmentTypes", void 0), __decorate([a()], y2.prototype, "capabilities", void 0), __decorate([m("capabilities")], y2.prototype, "castCapabilities", null), __decorate([a()], y2.prototype, "activeAttachmentInfo", void 0), __decorate([a()], y2.prototype, "activeFileInfo", void 0), __decorate([a({ readOnly: true, type: f5 })], y2.prototype, "attachmentInfos", void 0), __decorate([a()], y2.prototype, "fileInfos", void 0), __decorate([a({ type: j3 })], y2.prototype, "graphic", void 0), __decorate([a()], y2.prototype, "mode", void 0), __decorate([a({ type: [c3] })], y2.prototype, "orderByFields", void 0), __decorate([a({ readOnly: true })], y2.prototype, "state", null), __decorate([a()], y2.prototype, "filesEnabled", void 0), __decorate([a({ readOnly: true })], y2.prototype, "supportsResizeAttachments", null), __decorate([a({ readOnly: true })], y2.prototype, "supportsTypeWildcard", null), y2 = __decorate([c2("esri.widgets.Attachments.AttachmentsViewModel")], y2);

// node_modules/@arcgis/core/widgets/Feature/FeatureAttachments/FeatureAttachmentsViewModel.js
var s4 = class extends y2 {
  constructor(t2) {
    super(t2), this.description = null, this.title = null;
  }
};
__decorate([a()], s4.prototype, "description", void 0), __decorate([a()], s4.prototype, "title", void 0), s4 = __decorate([c2("esri.widgets.Feature.FeatureAttachments.FeatureAttachmentsViewModel")], s4);

// node_modules/@arcgis/core/widgets/Feature/FeatureContent/FeatureContentViewModel.js
var c4 = class extends b {
  constructor(t2) {
    super(t2), this._loadingPromise = null, this.created = null, this.creator = null, this.destroyer = null, this.graphic = null, this.addHandles(l2(() => this.creator, (t3) => {
      this._destroyContent(), this._createContent(t3);
    }, h));
  }
  destroy() {
    this._destroyContent();
  }
  get state() {
    return this._loadingPromise ? "loading" : "ready";
  }
  _destroyContent() {
    const { created: t2, graphic: e7, destroyer: r5 } = this;
    t2 && e7 && (x({ type: "content", value: r5, event: { graphic: e7 } }), this._set("created", null));
  }
  async _createContent(t2) {
    const e7 = this.graphic;
    if (!e7 || !t2) return;
    const r5 = x({ type: "content", value: t2, event: { graphic: e7 } });
    this._loadingPromise = r5, this.notifyChange("state");
    const o3 = await r5;
    r5 === this._loadingPromise && (this._loadingPromise = null, this.notifyChange("state"), this._set("created", o3));
  }
};
__decorate([a({ readOnly: true })], c4.prototype, "created", void 0), __decorate([a()], c4.prototype, "creator", void 0), __decorate([a()], c4.prototype, "destroyer", void 0), __decorate([a({ type: j3 })], c4.prototype, "graphic", void 0), __decorate([a({ readOnly: true })], c4.prototype, "state", null), c4 = __decorate([c2("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")], c4);

// node_modules/@arcgis/core/widgets/Feature/FeatureFields/FeatureFieldsViewModel.js
var f6 = class extends b {
  constructor(o3) {
    super(o3), this.attributes = null, this.expressionInfos = null, this.description = null, this.fieldInfos = null, this.isContentFieldInfos = false, this.graphic = null, this.layer = null, this.title = null;
  }
  get formattedFieldInfos() {
    const { expressionInfos: o3, fieldInfos: e7, layer: t2, isContentFieldInfos: i3, graphic: s8 } = this, r5 = [];
    return e7?.forEach((e8) => {
      if (!(!e8.hasOwnProperty("visible") || e8.visible)) return;
      const f10 = e8.clone();
      f10.label = R2({ fieldInfo: f10, expressionInfos: o3, layer: t2, graphic: s8, isContentFieldInfos: i3 });
      const d7 = M2({ fieldInfo: e8, graphic: s8, layer: t2 });
      d7 && (f10.fieldFormat = $({ configurableFieldsContainer: d7, fieldInfo: f10, isContentFieldInfos: i3 })), r5.push(f10);
    }), r5;
  }
};
__decorate([a()], f6.prototype, "attributes", void 0), __decorate([a({ type: [n4] })], f6.prototype, "expressionInfos", void 0), __decorate([a()], f6.prototype, "description", void 0), __decorate([a({ type: [u] })], f6.prototype, "fieldInfos", void 0), __decorate([a({ readOnly: true })], f6.prototype, "formattedFieldInfos", null), __decorate([a()], f6.prototype, "isContentFieldInfos", void 0), __decorate([a()], f6.prototype, "graphic", void 0), __decorate([a()], f6.prototype, "layer", void 0), __decorate([a()], f6.prototype, "title", void 0), f6 = __decorate([c2("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")], f6);

// node_modules/@arcgis/core/widgets/Feature/support/relatedFeatureUtils.js
var d4 = "esri.widgets.Feature.support.relatedFeatureUtils";
var p5 = () => n.getLogger(d4);
var m2 = /* @__PURE__ */ new Map();
function h2(e7) {
  if (!Fe(e7)) return null;
  const [t2, r5] = e7.split("/").slice(1);
  return { layerId: t2, fieldName: r5 };
}
function y3(e7, t2) {
  if (!t2.relationships) return null;
  let r5 = null;
  const { relationships: i3 } = t2;
  return i3.some((t3) => t3.id === parseInt(e7, 10) && (r5 = t3, true)), r5;
}
function I({ originRelationship: e7, relationships: t2, layerId: r5 }) {
  return t2.find(({ relatedTableId: t3, id: i3 }) => `${t3}` === r5 && i3 === e7?.id) ?? null;
}
function F(e7, t2) {
  const r5 = t2.toLowerCase();
  for (const i3 in e7) if (i3.toLowerCase() === r5) return e7[i3];
  return null;
}
function b3(e7, t2) {
  const r5 = y3(e7, t2);
  if (!r5) return;
  return { url: `${t2.url}/${r5.relatedTableId}`, sourceSpatialReference: t2.spatialReference, relation: r5, relatedFields: [], outStatistics: [] };
}
function g(e7, t2) {
  if (!t2) return;
  if (!e7) return;
  const { features: r5, statsFeatures: i3 } = e7, o3 = r5?.value;
  t2.relatedFeatures = o3 ? o3.features : [];
  const s8 = i3?.value;
  t2.relatedStatsFeatures = s8 ? s8.features : [];
}
function S3(e7, t2, r5, i3) {
  const o3 = new d2();
  return o3.outFields = ["*"], o3.relationshipId = "number" == typeof t2.id ? t2.id : parseInt(t2.id, 10), o3.objectIds = [e7.attributes[r5.objectIdField]], o3.gdbVersion = r5.gdbVersion ?? null, o3.historicMoment = r5.historicMoment ?? null, r5.queryRelatedFeatures?.(o3, i3) ?? Promise.resolve({});
}
function w2(e7, t2, r5) {
  let i3 = 0;
  const o3 = [];
  for (; i3 < t2.length; ) o3.push(`${e7} IN (${t2.slice(i3, r5 + i3)})`), i3 += r5;
  return o3.join(" OR ");
}
function j4(e7) {
  return e7 ? c(e7) : void 0;
}
function R3(e7) {
  return e7 ? c(e7, (e8, t2) => JSON.stringify(e8.toJSON()) === JSON.stringify(t2.toJSON())) : void 0;
}
async function $2(e7, t2, r5, i3) {
  const o3 = r5.layerId.toString(), { layerInfo: u5, relation: c7, relatedFields: f10, outStatistics: d7, url: p8, sourceSpatialReference: m5 } = t2, h5 = j4(f10), y5 = R3(d7);
  if (!u5 || !c7) return null;
  const b7 = I({ originRelationship: c7, relationships: u5.relationships, layerId: o3 });
  if (b7?.relationshipTableId && b7.keyFieldInRelationshipTable) {
    const t3 = (await S3(e7, b7, r5, i3))[e7.attributes[r5.objectIdField]];
    if (!t3) return null;
    const o4 = t3.features.map((e8) => e8.attributes[u5.objectIdField]);
    if (y5?.length && u5.supportsStatistics) {
      const e8 = new R();
      e8.where = w2(u5.objectIdField, o4, 1e3), e8.outFields = h5, e8.outStatistics = y5, e8.sourceSpatialReference = m5;
      const r6 = { features: Promise.resolve(t3), statsFeatures: s2(p8, e8) };
      return j(r6);
    }
  }
  const g3 = b7?.keyField;
  if (g3) {
    const t3 = Fe2(L2(u5.fields, g3)), o4 = F(e7.attributes, c7.keyField), f11 = t3 ? `${g3}=${o4}` : `${g3}='${o4}'`, d8 = r5.historicMoment, I4 = r5.gdbVersion, b8 = s2(p8, new R({ where: f11, outFields: h5, sourceSpatialReference: m5, historicMoment: d8, gdbVersion: I4 }), i3), S4 = !!y5?.length && u5.supportsStatistics ? s2(p8, new R({ where: f11, outFields: h5, outStatistics: y5, sourceSpatialReference: m5 }), i3) : null, w6 = { features: b8 };
    return S4 && (w6.statsFeatures = S4), j(w6);
  }
  return null;
}
function N3(t2, r5) {
  return f4(t2, { query: { f: "json" }, signal: r5?.signal });
}
function v2({ relatedInfos: e7, layer: t2 }, i3) {
  const n8 = {};
  return e7.forEach((e8, i4) => {
    const { relation: o3 } = e8;
    if (!o3) {
      const e9 = new r("editor:relation-required", "A relation is required on a layer to retrieve related records.");
      throw p5().error(e9), e9;
    }
    const { relatedTableId: s8 } = o3;
    if ("number" != typeof s8) {
      const e9 = new r("editor:related-table", "A related table ID is required on a layer to retrieve related records.");
      throw p5().error(e9), e9;
    }
    const l5 = `${t2.url}/${s8}`, a5 = m2.get(l5), u5 = a5 ?? N3(l5);
    a5 || m2.set(l5, u5), n8[i4] = u5;
  }), p(j(n8), i3);
}
function T({ graphic: e7, relatedInfos: t2, layer: r5 }, i3) {
  const o3 = {};
  return t2.forEach((t3, s8) => {
    t3.layerInfo && (o3[s8] = $2(e7, t3, r5, i3));
  }), j(o3);
}
function q3({ relatedInfo: e7, fieldName: t2, fieldInfo: r5 }) {
  if (e7.relatedFields?.push(t2), r5.statisticType) {
    const i3 = new p2({ statisticType: r5.statisticType, onStatisticField: t2, outStatisticFieldName: t2 });
    e7.outStatistics?.push(i3);
  }
}
function L2(e7, t2) {
  if (null != e7) {
    t2 = t2.toLowerCase();
    for (const r5 of e7) if (r5 && r5.name.toLowerCase() === t2) return r5;
  }
  return null;
}

// node_modules/@arcgis/core/widgets/Feature/FeatureMedia/FeatureMediaViewModel.js
var I2 = { chartAnimation: true };
var v3 = class extends b {
  constructor(t2) {
    super(t2), this.abilities = __spreadValues({}, I2), this.activeMediaInfoIndex = 0, this.attributes = null, this.description = null, this.fieldInfoMap = null, this.formattedAttributes = null, this.expressionAttributes = null, this.layer = null, this.mediaInfos = null, this.popupTemplate = null, this.relatedInfos = null, this.title = null;
  }
  castAbilities(t2) {
    return __spreadValues(__spreadValues({}, I2), t2);
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
  setActiveMedia(t2) {
    this._setContentElementMedia(t2);
  }
  next() {
    this._pageContentElementMedia(1);
  }
  previous() {
    this._pageContentElementMedia(-1);
  }
  _setContentElementMedia(t2) {
    const { formattedMediaInfoCount: e7 } = this, i3 = (t2 + e7) % e7;
    this.activeMediaInfoIndex = i3;
  }
  _pageContentElementMedia(t2) {
    const { activeMediaInfoIndex: e7 } = this, i3 = e7 + t2;
    this._setContentElementMedia(i3);
  }
  _formatMediaInfos() {
    const { mediaInfos: t2, layer: e7 } = this, o3 = this.attributes ?? {}, r5 = this.formattedAttributes ?? {}, a5 = this.expressionAttributes ?? {}, s8 = this.fieldInfoMap ?? /* @__PURE__ */ new Map();
    return t2?.map((t3) => {
      const i3 = t3?.clone();
      if (!i3) return null;
      if (i3.title = P({ attributes: o3, fieldInfoMap: s8, globalAttributes: r5, expressionAttributes: a5, layer: e7, text: i3.title }), i3.caption = P({ attributes: o3, fieldInfoMap: s8, globalAttributes: r5, expressionAttributes: a5, layer: e7, text: i3.caption }), i3.altText = P({ attributes: o3, fieldInfoMap: s8, globalAttributes: r5, expressionAttributes: a5, layer: e7, text: i3.altText }), "image" === i3.type) {
        if (!i3.value) return;
        return this._setImageValue({ value: i3.value, formattedAttributes: r5, layer: e7 }), i3.value.sourceURL ? i3 : void 0;
      }
      if ("pie-chart" === i3.type || "line-chart" === i3.type || "column-chart" === i3.type || "bar-chart" === i3.type) {
        if (!i3.value) return;
        return this._setChartValue({ value: i3.value, chartType: i3.type, attributes: o3, formattedAttributes: r5, layer: e7, expressionAttributes: a5 }), i3;
      }
      return null;
    }).filter(N) ?? [];
  }
  _setImageValue(t2) {
    const e7 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { value: i3, formattedAttributes: o3, layer: r5 } = t2, { linkURL: a5, sourceURL: s8 } = i3;
    if (s8) {
      const t3 = J(s8, r5);
      i3.sourceURL = _2({ formattedAttributes: o3, template: t3, fieldInfoMap: e7 });
    }
    if (a5) {
      const t3 = J(a5, r5);
      i3.linkURL = _2({ formattedAttributes: o3, template: t3, fieldInfoMap: e7 });
    }
  }
  _setChartValue(t2) {
    const { value: e7, attributes: i3, formattedAttributes: o3, chartType: r5, layer: a5, expressionAttributes: s8 } = t2, { popupTemplate: l5, relatedInfos: n8 } = this, { fields: p8, normalizeField: d7 } = e7, c7 = a5;
    e7.fields = S2(p8, c7), d7 && (e7.normalizeField = O(d7, c7));
    if (!p8.some((t3) => !!(null != o3[t3] || Fe(t3) && n8?.size))) return;
    const h5 = l5?.fieldInfos ?? [];
    p8.forEach((t3, a6) => {
      const l6 = e7.colors?.[a6];
      if (Fe(t3)) return void (e7.series = [...e7.series, ...this._getRelatedChartInfos({ fieldInfos: h5, fieldName: t3, formattedAttributes: o3, chartType: r5, value: e7, color: l6 })]);
      const n9 = this._getChartOption({ value: e7, attributes: i3, chartType: r5, formattedAttributes: o3, expressionAttributes: s8, fieldName: t3, fieldInfos: h5, color: l6 });
      e7.series.push(n9);
    });
  }
  _getRelatedChartInfos(t2) {
    const { fieldInfos: e7, fieldName: i3, formattedAttributes: o3, chartType: r5, value: a5, color: s8 } = t2, l5 = [], n8 = h2(i3), p8 = n8 && this.relatedInfos?.get(n8.layerId.toString());
    if (!p8) return l5;
    const { relatedFeatures: d7, relation: u5 } = p8;
    if (!u5 || !d7) return l5;
    const { cardinality: f10 } = u5;
    d7.forEach((t3) => {
      const { attributes: p9 } = t3;
      p9 && Object.keys(p9).forEach((t4) => {
        t4 === n8.fieldName && l5.push(this._getChartOption({ value: a5, attributes: p9, formattedAttributes: o3, fieldName: i3, chartType: r5, relatedFieldName: t4, hasMultipleRelatedFeatures: d7?.length > 1, fieldInfos: e7, color: s8 }));
      });
    });
    return "one-to-many" === f10 || "many-to-many" === f10 ? l5 : [l5[0]];
  }
  _getTooltip({ label: t2, value: e7, chartType: i3 }) {
    return "pie-chart" === i3 ? `${t2}` : `${t2}: ${e7}`;
  }
  _getChartOption(t2) {
    const { value: e7, attributes: i3, formattedAttributes: o3, expressionAttributes: r5, fieldName: a5, relatedFieldName: n8, fieldInfos: p8, chartType: d7, hasMultipleRelatedFeatures: u5, color: I4 } = t2, { layer: v6, graphic: M3 } = this, A3 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { normalizeField: g3, tooltipField: x6 } = e7, _4 = g3 ? Fe(g3) ? i3[h2(g3).fieldName] : i3[g3] : null, C3 = A(a5) && void 0 !== r5?.[a5] ? r5[a5] : n8 && void 0 !== i3[n8] ? i3[n8] : void 0 !== i3[a5] ? i3[a5] : o3[a5], T4 = void 0 === C3 ? null : C3 && _4 ? C3 / _4 : C3, N5 = new s3({ fieldName: a5, color: I4, value: null != T4 ? "number" == typeof T4 ? T4 : Number(T4) : void 0 });
    if (Fe(a5)) {
      const t3 = A3.get(a5.toLowerCase()), e8 = x6 && A3.get(x6.toLowerCase()), r6 = t3?.fieldName ?? a5, s8 = u5 && x6 ? h2(x6).fieldName : e8?.fieldName ?? x6, l5 = u5 && s8 ? i3[s8] : o3[s8] ?? (t3 && R2({ fieldInfo: t3, graphic: M3, layer: v6 })) ?? t3?.fieldName ?? n8, p9 = u5 && n8 ? i3[n8] : o3[r6];
      return N5.tooltip = this._getTooltip({ label: l5, value: p9, chartType: d7 }), N5;
    }
    const F6 = ae(p8, a5), w6 = O(a5, v6), E3 = x6 && void 0 !== o3[x6] ? o3[x6] : R2({ fieldInfo: F6 || new u({ fieldName: w6 }), expressionInfos: this.popupTemplate?.expressionInfos, graphic: M3, layer: v6 }), R5 = o3[w6];
    return N5.tooltip = this._getTooltip({ label: E3, value: R5, chartType: d7 }), N5;
  }
};
__decorate([a()], v3.prototype, "abilities", void 0), __decorate([m("abilities")], v3.prototype, "castAbilities", null), __decorate([a()], v3.prototype, "activeMediaInfoIndex", void 0), __decorate([a({ readOnly: true })], v3.prototype, "activeMediaInfo", null), __decorate([a()], v3.prototype, "attributes", void 0), __decorate([a()], v3.prototype, "description", void 0), __decorate([a()], v3.prototype, "fieldInfoMap", void 0), __decorate([a()], v3.prototype, "formattedAttributes", void 0), __decorate([a()], v3.prototype, "expressionAttributes", void 0), __decorate([a({ readOnly: true })], v3.prototype, "formattedMediaInfos", null), __decorate([a()], v3.prototype, "graphic", void 0), __decorate([a()], v3.prototype, "layer", void 0), __decorate([a({ readOnly: true })], v3.prototype, "formattedMediaInfoCount", null), __decorate([a()], v3.prototype, "mediaInfos", void 0), __decorate([a()], v3.prototype, "popupTemplate", void 0), __decorate([a()], v3.prototype, "relatedInfos", void 0), __decorate([a()], v3.prototype, "title", void 0), v3 = __decorate([c2("esri.widgets.Feature.FeatureMedia.FeatureMediaViewModel")], v3);

// node_modules/@arcgis/core/widgets/Feature/support/arcadeFeatureUtils.js
var d5 = "esri.widgets.Feature.support.arcadeFeatureUtils";
var f7 = () => n.getLogger(d5);
function y4(e7) {
  return pe(ce(e7));
}
function m3(e7) {
  return "createQuery" in e7 && "queryFeatures" in e7;
}
async function g2({ graphic: e7, view: r5, options: t2 }) {
  const { isAggregate: a5 } = e7, i3 = e7.layer ?? e7.sourceLayer;
  if (!a5 || !i3 || "2d" !== r5?.type) return [];
  const n8 = await r5.whenLayerView(i3);
  if (!m3(n8)) return [];
  const o3 = n8.createQuery(), s8 = e7.getObjectId();
  o3.aggregateIds = null != s8 ? [s8] : [];
  const { features: c7 } = await n8.queryFeatures(o3, t2);
  return c7;
}
function w3({ layer: e7, aggregatedFeatures: r5, interceptor: t2 }) {
  const { fields: a5, objectIdField: i3, geometryType: n8, spatialReference: o3 } = e7, c7 = "displayField" in e7 ? e7.displayField : void 0;
  return new Ye(__spreadProps(__spreadValues({ fields: a5, objectIdField: i3, geometryType: n8, spatialReference: o3, displayField: c7, interceptor: t2 }, "feature" === e7.type ? { templates: e7.templates, typeIdField: e7.typeIdField, types: e7.types } : null), { source: r5 }));
}
function v4(e7) {
  return e7.isAggregate ? "popup-feature-reduction" : "esri.views.3d.layers.VoxelGraphic" === e7.declaredClass ? "popup-voxel" : n2(e7.origin) || n3(e7.origin) ? "popup-imagery" : "popup";
}
function h3(e7) {
  return { scale: e7?.scale, timeProperties: { currentStart: e7?.timeExtent?.start, currentEnd: e7?.timeExtent?.end, startIncluded: true, endIncluded: true } };
}
function x3(e7) {
  return { $voxel: e7 };
}
function b4(e7, r5, t2) {
  let a5 = null;
  if (null != e7) {
    const r6 = e7.origin.layer;
    if ("imagery" === r6.type && "mosaic-dataset" === r6.sourceType) {
      a5 = e7.cloneShallow();
      const r7 = e7.origin.layer.fieldsIndex;
      a5.attributes = Object.fromEntries(Object.entries(a5.attributes ?? {}).filter(([e8]) => r7.has(e8)));
    }
  }
  return { $pixel: e7, $imageCollectionItem: a5, $userInput: r5, $view: h3(t2) };
}
async function F2(e7, r5, t2, a5, i3, n8, o3) {
  let s8 = null;
  if (n8.has("$aggregatedfeatures")) {
    const e8 = await g2({ graphic: r5, view: t2, options: a5 }), n9 = r5.sourceLayer || r5.layer;
    s8 = w3({ layer: n9, aggregatedFeatures: e8, interceptor: i3 });
  }
  return { vars: { $feature: r5, $aggregatedFeatures: s8, $view: h3(t2) }, track: o3 ? await $3(e7, r5, t2) : null, [Symbol.dispose]: () => s8?.[Symbol.dispose]() };
}
function I3(e7) {
  if (f2(e7)) return e7.getTime();
  if ("number" == typeof e7) return e7;
  if ("string" == typeof e7) return new Date(e7).getTime();
  throw new Error(`Unexpected time value: ${e7}`);
}
async function $3(e7, r5, t2) {
  const a5 = r5.sourceLayer || r5.layer;
  if (null == a5 || !("timeInfo" in a5)) return null;
  const n8 = a5.timeInfo?.trackIdField;
  if (null == n8) return null;
  const o3 = r5.getAttribute(n8);
  if (null == o3) return null;
  let s8, u5;
  if ("string" == typeof o3) s8 = `"${n8.replaceAll('"', '""')}" = '${o3.replaceAll("'", "''")}'`;
  else {
    if ("number" != typeof o3) return f7().warn("Expected track id to be a string or number"), null;
    s8 = `"${n8.replaceAll('"', '""')}" = ${o3}`;
  }
  if ("stream" === a5.type && null != t2) {
    const e8 = await t2.whenLayerView(a5), r6 = e8.createQuery();
    r6.returnGeometry = true, r6.where = o(r6.where, s8), u5 = (await e8.queryFeatures(r6)).features;
  } else {
    if (!("queryFeatures" in a5)) return null;
    {
      const e8 = a5.createQuery();
      e8.returnGeometry = true, e8.where = o(e8.where, s8), u5 = (await a5.queryFeatures(e8)).features;
    }
  }
  const l5 = a5.fieldsIndex.normalizeFieldName(a5.timeInfo.startField) ?? i, p8 = a5.timeInfo.endField ? a5.fieldsIndex.normalizeFieldName(a5.timeInfo.endField) : null, d7 = u5.map((r6) => {
    const a6 = r6.getObjectId();
    if (null == a6) throw new Error("Cannot identify observation");
    const i3 = e7.ArcadeFeature.createFromGraphic(r6, t2?.timeZone), n9 = I3(r6.getAttribute(l5));
    return { id: a6, feature: i3, startTime: n9, endTime: null != p8 ? I3(r6.getAttribute(p8)) : n9, stats: { totalDistance: void 0, distance: void 0, speed: void 0, acceleration: void 0 } };
  }).sort((e8, r6) => e8.startTime - r6.startTime), y5 = "esri.TrackGraphic" === r5.declaredClass ? d7.length - 1 : d7.findIndex((e8) => r5.getObjectId() === e8.id);
  if (y5 < 0) throw new Error("Couldn't locate feature in observations");
  return { observations: d7, currentObservationIndex: y5 };
}
async function j5(e7, r5, a5, i3, n8, o3) {
  const s8 = (r5.sourceLayer || r5.layer) ?? void 0;
  return { vars: { $feature: r5, $layer: null != s8 && M(s8) ? s8 : "scene" === s8?.type && null != s8.associatedLayer ? s8.associatedLayer : void 0, $map: a5, $datastore: s8 && "url" in s8 ? s8.url : void 0, $userInput: i3, $graph: "knowledge-graph-sublayer" === s8?.type ? s8.parentCompositeLayer?.knowledgeGraph : void 0, $view: h3(n8) }, track: o3 ? await $3(e7, r5, n8) : null };
}
async function T2(e7, { arcade: r5, graphic: t2, map: a5, location: i3, view: n8, options: o3, interceptor: s8, arcadeExecutor: c7, usesTrack: u5 }) {
  switch (e7) {
    case "popup":
      return __spreadProps(__spreadValues({}, await j5(r5, t2, a5, i3, n8, u5)), { [Symbol.dispose]() {
      } });
    case "popup-feature-reduction": {
      const e8 = new Set(c7.variablesUsed);
      return await F2(r5, t2, n8, o3, s8, e8, u5);
    }
    case "popup-voxel":
      return { vars: x3(t2), track: null, [Symbol.dispose]() {
      } };
    case "popup-imagery":
      return { vars: b4(t2, i3, n8), track: null, [Symbol.dispose]() {
      } };
    default:
      throw new Error(`Unexpected profile name ${e7}`);
  }
}
async function k() {
  const [e7, r5, { Feature: t2 }] = await Promise.all([import("./arcade-6DIASI7R.js"), import("./arcade-5JE23ONQ.js"), import("./Feature-O6PDI5ER.js")]);
  return { executor: e7, syntaxUtils: r5, ArcadeFeature: t2 };
}
async function E(t2, a5, i3) {
  const { executor: { createArcadeProfile: n8, createArcadeExecutor: o3 }, syntaxUtils: s8 } = i3, c7 = v4(a5), u5 = n8(c7);
  let l5;
  try {
    l5 = await o3(t2, u5);
  } catch (y5) {
    return f7().error("arcade-executor-error", { error: y5, expression: t2 }), null;
  }
  const p8 = /* @__PURE__ */ new Set();
  l5.variablesUsed.includes("$view") && (s8.scriptUsesViewProperties(l5.syntaxTree, ["scale"]) && p8.add("view-scale"), s8.scriptUsesViewProperties(l5.syntaxTree, ["timeProperties"]) && p8.add("view-time-extent"));
  const d7 = s8.scriptUsesTrack(l5.syntaxTree);
  return { dependencies: p8, async evaluate({ graphic: a6, interceptor: n9, location: o4, map: s9, options: u6, spatialReference: p9, view: m5 }) {
    const g3 = { stack: [], error: void 0, hasError: false };
    try {
      const r5 = __addDisposableResource(g3, await T2(c7, { arcade: i3, graphic: a6, map: s9, location: o4, view: m5, options: u6, interceptor: n9, arcadeExecutor: l5, usesTrack: d7 }), false), w6 = { abortSignal: u6?.signal ?? void 0, interceptor: n9 ?? void 0, rawOutput: true, spatialReference: p9 ?? void 0, timeZone: m5?.timeZone, track: r5.track, console(...e7) {
        f7().info(...e7);
      } };
      try {
        return await l5.executeAsync(r5.vars, w6);
      } catch (y5) {
        if (u6?.signal?.aborted) return;
        return void f7().error("arcade-execution-error", { error: y5, graphic: a6, expression: t2 });
      }
    } catch (w6) {
      g3.error = w6, g3.hasError = true;
    } finally {
      __disposeResources(g3);
    }
  } };
}
async function A2({ expression: e7, graphic: r5 }) {
  return e7 ? E(e7, r5, await k()) : null;
}
async function L3(e7, r5) {
  if (!e7?.length) return { dependencies: /* @__PURE__ */ new Set(), expressions: /* @__PURE__ */ new Map() };
  const t2 = await k(), a5 = /* @__PURE__ */ new Set(), i3 = /* @__PURE__ */ new Map();
  for (const n8 of e7) {
    const e8 = await E(n8.expression, r5, t2);
    i3.set(`expression/${n8.name}`, e8), e8?.dependencies.forEach((e9) => a5.add(e9));
  }
  return { dependencies: a5, expressions: i3 };
}

// node_modules/@arcgis/core/widgets/Feature/FeatureExpression/FeatureExpressionViewModel.js
var k2 = 1;
var E2 = class extends b {
  constructor(e7) {
    super(e7), this._compileTask = null, this._evaluateTask = null, this.expressionInfo = null, this.graphic = null, this.contentElementViewModel = null, this.interceptor = null, this.location = null, this.view = null, this._createVM = () => {
      const e8 = this.contentElement?.type;
      this.contentElementViewModel?.destroy();
      const t2 = "fields" === e8 ? new f6() : "media" === e8 ? new v3() : "text" === e8 ? new c4() : null;
      this._set("contentElementViewModel", t2);
    }, this._compileThrottled = l4(this._startCompile, () => this.notifyChange("state"), k2, this), this._evaluateThrottled = l4(this._startEvaluate, () => this.notifyChange("state"), k2, this), this.addHandles([l2(() => [this.expressionInfo, this.graphic], () => this._compileThrottled(), h), l2(() => [this.contentElement], () => this._createVM(), h), f3(() => {
      if (!this._compileTask?.finished) return null;
      const e8 = this._compileTask.value, t2 = e8?.dependencies;
      return [e8, this.spatialReference, this.map, this.view, t2?.has("view-scale") ? this.view?.scale : null, t2?.has("view-time-extent") ? this.view?.timeExtent?.start : null, t2?.has("view-time-extent") ? this.view?.timeExtent?.end : null];
    }, ([e8]) => this._evaluateThrottled(e8))]);
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
  set spatialReference(e7) {
    this._override("spatialReference", e7);
  }
  get state() {
    const { contentElement: e7, contentElementViewModel: t2 } = this;
    return this._compileThrottled.hasPendingUpdates() || this._evaluateThrottled.hasPendingUpdates() || !this._compileTask?.finished || !this._evaluateTask?.finished ? "loading" : e7 || t2 ? "ready" : "disabled";
  }
  get map() {
    return this.view?.map ?? null;
  }
  set map(e7) {
    this._override("map", e7);
  }
  _startCompile() {
    this._evaluateTask = e(this._evaluateTask), this._compileTask = e(this._compileTask), this._compileTask = w(async (e7) => {
      const { expressionInfo: t2, graphic: i3 } = this, s8 = t2?.expression;
      if (!s8 || !i3) return null;
      const o3 = await A2({ expression: s8, graphic: i3 });
      return s(e7), o3;
    });
  }
  _startEvaluate(e7) {
    this._evaluateTask = e(this._evaluateTask), this._evaluateTask = w(async (t2) => {
      const { graphic: i3 } = this;
      if (!e7 || !i3) return null;
      const { interceptor: s8, spatialReference: o3, map: r5, location: n8, view: l5 } = this, p8 = await e7.evaluate({ graphic: i3, interceptor: s8, location: n8, map: r5, options: { signal: t2 }, spatialReference: o3, view: l5 });
      s(t2);
      const c7 = p8;
      if (!c7 || "esri.arcade.Dictionary" !== c7.declaredClass) return null;
      const h5 = await c7.castAsJsonAsync(t2);
      s(t2);
      const m5 = h5?.type, v6 = "media" === m5 ? j2.fromJSON(h5) : "text" === m5 ? x2.fromJSON(h5) : "fields" === m5 ? C.fromJSON(h5) : null;
      return "media" === v6.type && !v6.mediaInfos || "fields" === v6.type && !v6.fieldInfos || "text" === v6.type && !v6.text ? null : v6;
    });
  }
};
__decorate([a()], E2.prototype, "_compileTask", void 0), __decorate([a()], E2.prototype, "_evaluateTask", void 0), __decorate([a({ type: p4 })], E2.prototype, "expressionInfo", void 0), __decorate([a({ type: j3 })], E2.prototype, "graphic", void 0), __decorate([a({ readOnly: true })], E2.prototype, "contentElement", null), __decorate([a({ readOnly: true })], E2.prototype, "contentElementViewModel", void 0), __decorate([a()], E2.prototype, "interceptor", void 0), __decorate([a({ type: _ })], E2.prototype, "location", void 0), __decorate([a()], E2.prototype, "spatialReference", null), __decorate([a({ readOnly: true })], E2.prototype, "state", null), __decorate([a()], E2.prototype, "map", null), __decorate([a()], E2.prototype, "view", void 0), E2 = __decorate([c2("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")], E2);

// node_modules/@arcgis/core/widgets/FeatureForm/featureFormUtils.js
var Q = (e7) => {
  const t2 = [];
  if (e7.formTemplate) {
    const { description: r5, title: n8 } = e7.formTemplate;
    e7.fields?.forEach((e8) => {
      const i3 = n8 && f(n8, e8.name), l5 = r5 && f(r5, e8.name);
      (i3 || l5) && t2.push(e8.name);
    });
  }
  return t2;
};

// node_modules/@arcgis/core/widgets/Feature/FeatureRelationship/FeatureRelationshipViewModel.js
var F5 = 100;
var _3 = class extends l(o2(b)) {
  constructor(e7) {
    super(e7), this._loaded = false, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.featuresPerPage = 10, this.activeCategory = null, this.allCategories = null, this.description = null, this.graphic = null, this.layer = null, this.map = null, this.orderByFields = null, this.featureCount = 0, this.relationshipId = null, this.showAllEnabled = false, this.title = null, this._cancelQuery = () => {
      const { _queryAbortController: e8 } = this;
      e8 && e8.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const { _queryFeatureCountAbortController: e8 } = this;
      e8 && e8.abort(), this._queryFeatureCountAbortController = null;
    }, this._cancelQueryPage = () => {
      const { _queryPageAbortController: e8 } = this;
      e8 && e8.abort(), this._queryPageAbortController = null;
    }, this._queryController = async () => {
      this._cancelQuery();
      const e8 = new AbortController();
      this._queryAbortController = e8, await y(this._query()), this._queryAbortController === e8 && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = false, this._cancelQueryFeatureCount();
      const e8 = new AbortController();
      this._queryFeatureCountAbortController = e8, await y(this._queryFeatureCount()), this._queryFeatureCountAbortController === e8 && (this._queryFeatureCountAbortController = null), this._loaded = true;
    }, this._queryPageController = async () => {
      const e8 = new AbortController();
      this._queryPageAbortController = e8, await y(this._queryPage()), this._queryPageAbortController === e8 && (this._queryPageAbortController = null);
    }, this._queryDebounced = L(this._queryController, F5), this._queryFeatureCountDebounced = L(this._queryFeatureCountController, F5), this._queryPageDebounced = L(this._queryPageController, F5), this._query = async () => {
      const { _queryAbortController: e8, relatedFeatures: t2 } = this;
      this.featureCount && ("subtype-group" !== this.relatedLayer?.type || this.activeCategory) && (this._destroyRelatedFeatureViewModels(), this.featurePage = 1, t2.destroyAll(), this.destroyed || t2.addMany(this._sliceFeatures(await this._queryRelatedFeatures({ signal: e8?.signal }))));
    }, this.addHandles([l2(() => [this.displayCount, this.graphic, this.layer, this.layer?.loaded, this.map, this.orderByFields, this.relationshipId, this.featuresPerPage, this.showAllEnabled, this.canQuery, this.featureCount, this.activeCategory], () => this._queryDebounced(), h), l2(() => [this.featurePage, this.showAllEnabled], () => this._queryPageDebounced()), l2(() => [this.layer, this.relationshipId, this.objectId, this.canQuery, this.activeCategory], () => this._queryFeatureCountDebounced())]);
  }
  destroy() {
    this._destroyRelatedFeatureViewModels(), this.relatedFeatures.destroyAll(), this._cancelQuery(), this._cancelQueryFeatureCount(), this._cancelQueryPage();
  }
  set featurePage(e7) {
    const { featuresPerPage: t2, featureCount: r5 } = this, o3 = 1, l5 = Math.ceil(r5 / t2) || 1;
    this._set("featurePage", Math.min(Math.max(e7, o3), l5));
  }
  get featurePage() {
    return this._get("featurePage");
  }
  get orderByFieldsFixedCasing() {
    const { orderByFields: e7, relatedLayer: t2 } = this;
    return e7 && t2?.loaded ? e7.map((e8) => {
      const r5 = e8.clone();
      return r5.field = O(e8.field, t2), r5;
    }) : e7 ?? [];
  }
  get supportsCacheHint() {
    return !!this.layer?.capabilities?.queryRelated?.supportsCacheHint;
  }
  get canLoad() {
    return !!this.map && null != this.relationshipId && "number" == typeof this.objectId;
  }
  get canQuery() {
    const e7 = this.layer?.capabilities?.queryRelated;
    return !!(this.relatedLayer && this.relationship && null != this.relationshipId && null != this.objectId && e7?.supportsCount && e7?.supportsPagination);
  }
  get allCategoriesCount() {
    return this.allCategories?.length ?? 0;
  }
  get categories() {
    const { allCategories: e7 } = this;
    return this.showAllEnabled ? e7 : e7?.slice(0, this.displayCount) ?? null;
  }
  set displayCount(e7) {
    const t2 = 0, r5 = 10, o3 = 3;
    this._set("displayCount", Math.min(Math.max(e7 ?? o3, t2), r5));
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
    const { layer: e7, map: t2, relationship: r5 } = this;
    if (!e7?.loaded || !t2 || !r5) return null;
    const o3 = "subtype-sublayer" === e7.type && e7.parent && ee(e7.parent) ? e7.parent : e7;
    return Le(t2, o3, r5) ?? null;
  }
  get relatedLayerKeyField() {
    const { relatedLayer: e7, relationshipId: t2 } = this;
    return e7?.loaded && null != t2 ? e7.relationships?.find((e8) => e8.id === t2)?.keyField : null;
  }
  get relatedLayerKeyFields() {
    const { relatedLayer: e7 } = this;
    return e7?.loaded ? e7.relationships?.map((e8) => e8.keyField).filter(N) ?? [] : [];
  }
  get relationship() {
    const { relationshipId: e7, layer: t2 } = this;
    return null != e7 && t2?.loaded ? t2.relationships?.find(({ id: t3 }) => t3 === e7) ?? null : null;
  }
  get relationshipKey() {
    const { relationshipKeyField: e7 } = this;
    return (e7 && this.graphic?.attributes?.[e7]) ?? null;
  }
  get relationshipKeyField() {
    return this.relationship?.keyField || null;
  }
  get relatedFeatureViewModels() {
    return this._get("relatedFeatureViewModels") || new q();
  }
  get state() {
    const { _queryAbortController: e7, _queryFeatureCountAbortController: t2, _queryPageAbortController: r5, canQuery: o3, _loaded: l5, canLoad: a5 } = this;
    return t2 || a5 && !l5 ? "loading" : e7 || r5 ? "querying" : o3 ? "ready" : "disabled";
  }
  getRelatedFeatureByObjectId(e7) {
    return this.relatedFeatures.find((t2) => t2.getObjectId() === e7);
  }
  refresh() {
    this._queryFeatureCountDebounced();
  }
  _destroyRelatedFeatureViewModels() {
    this.relatedFeatureViewModels?.destroyAll();
  }
  async _queryFeatureCount() {
    const { layer: e7, relatedLayer: t2 } = this;
    await e7?.load(), await t2?.load();
    const { _queryFeatureCountAbortController: r5, activeCategory: l5, canQuery: a5, objectId: i3, relatedLayerKeyField: s8, relationshipId: n8, relationshipKey: u5, supportsCacheHint: d7 } = this;
    if (!a5 || !e7 || !t2 || null == i3) return this._set("featureCount", 0), void this._set("allCategories", null);
    if ("subtype-group" === t2?.type && !l5) {
      if (this._set("featureCount", 0), this._destroyRelatedFeatureViewModels(), this.featurePage = 1, this.relatedFeatures.destroyAll(), s8 && null != u5) {
        const { default: e8 } = await import("./uniqueValues-N4VSAEC2.js"), { uniqueValueInfos: l6 } = await e8({ layer: t2, sqlWhere: `${s8} = '${u5}'`, field: t2.subtypeField, signal: r5?.signal }), a6 = l6.map(({ count: e9, value: r6 }) => {
          const o3 = t2.subtypes?.find((e10) => e10.code === r6)?.name;
          return null != r6 && o3 ? { count: e9, value: r6, name: o3 } : void 0;
        }).filter(N);
        this._set("allCategories", a6);
      }
      return;
    }
    const { historicMoment: y5, gdbVersion: h5 } = e7, c7 = new d2({ cacheHint: d7, gdbVersion: h5, historicMoment: y5, relationshipId: n8, returnGeometry: false, objectIds: [i3], where: this._getRelationshipWhereClause(t2) }), g3 = await e7.queryRelatedFeaturesCount(c7, { signal: r5?.signal });
    this._set("allCategories", null), this._set("featureCount", g3[i3] || 0);
  }
  _getRelationshipWhereClause(e7) {
    const { activeCategory: t2 } = this, r5 = e7.createQuery(), o3 = "subtypeField" in e7 ? e7.subtypeField : void 0, l5 = t2 && o3 ? `${o3} = ${t2.value}` : void 0, a5 = r5.where;
    return a5 && l5 ? `(${a5}) AND (${l5})` : a5 ?? l5;
  }
  _sliceFeatures(e7) {
    const { showAllEnabled: t2, displayCount: r5 } = this;
    return t2 ? e7 : r5 ? e7.slice(0, r5) : [];
  }
  async _queryPage() {
    const { relatedFeatures: e7, featurePage: t2, showAllEnabled: r5, _queryPageAbortController: o3, featureCount: l5 } = this;
    !r5 || t2 < 2 || !l5 || "subtype-group" === this.relatedLayer?.type && !this.activeCategory || e7.addMany(await this._queryRelatedFeatures({ signal: o3?.signal }));
  }
  async _queryRelatedFeatures(e7) {
    const { displayCount: t2, featureCount: r5, featurePage: o3, featuresPerPage: l5, layer: a5, orderByFieldsFixedCasing: i3, relatedLayer: s8, relatedLayerKeyFields: n8, relationshipId: u5, showAllEnabled: d7, supportsCacheHint: y5 } = this, { canQuery: h5, objectId: c7 } = this;
    if (!h5 || !a5 || !s8 || null == c7) return [];
    const g3 = d7 ? ((o3 - 1) * l5 + r5) % r5 : 0, C3 = d7 ? l5 : t2, F6 = s8.objectIdField, _4 = "subtypeField" in s8 ? s8.subtypeField : void 0, m5 = [...i3.map((e8) => e8.field), ...Q(s8), ...n8, F6, _4].filter(f9), q5 = i3.map((e8) => `${e8.field} ${e8.order}`), { historicMoment: A3, gdbVersion: w6 } = a5, P3 = new d2({ orderByFields: q5, start: g3, num: C3, outFields: m5, cacheHint: y5, historicMoment: A3, gdbVersion: w6, relationshipId: u5, returnGeometry: false, objectIds: [c7], where: this._getRelationshipWhereClause(s8) }), v6 = await a5.queryRelatedFeatures(P3, { signal: e7?.signal }), I4 = v6[c7]?.features || [];
    return "subtype-group" === s8.type && _4 ? I4.forEach((e8) => {
      const t3 = e8.attributes[_4], r6 = s8.findSublayerForSubtypeCode?.(t3);
      e8.sourceLayer = r6, e8.layer = r6;
    }) : I4.forEach((e8) => {
      e8.sourceLayer = s8, e8.layer = s8;
    }), I4;
  }
};
function f9(e7) {
  return null != e7 && "" !== e7;
}
__decorate([a()], _3.prototype, "_loaded", void 0), __decorate([a()], _3.prototype, "_queryAbortController", void 0), __decorate([a()], _3.prototype, "_queryPageAbortController", void 0), __decorate([a()], _3.prototype, "_queryFeatureCountAbortController", void 0), __decorate([a({ value: 1 })], _3.prototype, "featurePage", null), __decorate([a()], _3.prototype, "featuresPerPage", void 0), __decorate([a({ readOnly: true })], _3.prototype, "orderByFieldsFixedCasing", null), __decorate([a({ readOnly: true })], _3.prototype, "supportsCacheHint", null), __decorate([a({ readOnly: true })], _3.prototype, "canLoad", null), __decorate([a({ readOnly: true })], _3.prototype, "canQuery", null), __decorate([a()], _3.prototype, "activeCategory", void 0), __decorate([a({ readOnly: true })], _3.prototype, "allCategories", void 0), __decorate([a({ readOnly: true })], _3.prototype, "allCategoriesCount", null), __decorate([a({ readOnly: true })], _3.prototype, "categories", null), __decorate([a()], _3.prototype, "description", void 0), __decorate([a({ value: 3 })], _3.prototype, "displayCount", null), __decorate([a({ type: j3 })], _3.prototype, "graphic", void 0), __decorate([a({ readOnly: true })], _3.prototype, "itemDescriptionFieldName", null), __decorate([a()], _3.prototype, "layer", void 0), __decorate([a()], _3.prototype, "map", void 0), __decorate([a({ readOnly: true })], _3.prototype, "objectId", null), __decorate([a({ readOnly: true })], _3.prototype, "objectIdField", null), __decorate([a()], _3.prototype, "orderByFields", void 0), __decorate([a({ readOnly: true })], _3.prototype, "relatedFeatures", null), __decorate([a({ readOnly: true })], _3.prototype, "relatedLayer", null), __decorate([a({ readOnly: true })], _3.prototype, "relatedLayerKeyField", null), __decorate([a({ readOnly: true })], _3.prototype, "relatedLayerKeyFields", null), __decorate([a({ readOnly: true })], _3.prototype, "relationship", null), __decorate([a({ readOnly: true })], _3.prototype, "relationshipKey", null), __decorate([a({ readOnly: true })], _3.prototype, "relationshipKeyField", null), __decorate([a({ readOnly: true })], _3.prototype, "featureCount", void 0), __decorate([a({ readOnly: true })], _3.prototype, "relatedFeatureViewModels", null), __decorate([a()], _3.prototype, "relationshipId", void 0), __decorate([a()], _3.prototype, "showAllEnabled", void 0), __decorate([a()], _3.prototype, "state", null), __decorate([a()], _3.prototype, "title", void 0), _3 = __decorate([c2("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")], _3);

// node_modules/@arcgis/core/widgets/Feature/FeatureViewModel.js
var te2;
var ie = 1;
var se2 = "content-view-models";
var oe = "relationship-view-models";
var re = "association-view-models";
var ae2 = { attachmentsContent: true, chartAnimation: true, customContent: true, expressionContent: true, fieldsContent: true, mediaContent: true, textContent: true, relationshipContent: true, utilityNetworkAssociationsContent: true };
var ne = class extends o2(b) {
  static {
    te2 = this;
  }
  constructor(e7) {
    super(e7), this._error = null, this._graphicChangedTask = null, this._evaluateExpressionAttributesTask = null, this._associationVMAbortController = null, this._expressionAttributes = null, this._graphicExpressionAttributes = null, this.abilities = __spreadValues({}, ae2), this.content = null, this.contentViewModels = [], this.description = null, this.defaultPopupTemplateEnabled = false, this.formattedAttributes = null, this.graphic = null, this.lastEditInfo = null, this.location = null, this.relatedInfos = /* @__PURE__ */ new Map(), this.title = "", this.view = null, this._graphicChangedThrottled = l4(this._graphicChanged, () => this.notifyChange("waitingForContent"), ie, this), this._isAllowedContentType = (e8) => {
      const { abilities: t2 } = this;
      return "attachments" === e8.type && !!t2.attachmentsContent || "custom" === e8.type && !!t2.customContent || "fields" === e8.type && !!t2.fieldsContent || "media" === e8.type && !!t2.mediaContent || "text" === e8.type && !!t2.textContent || "expression" === e8.type && !!t2.expressionContent || "relationship" === e8.type && !!t2.relationshipContent || "utility-network-associations" === e8.type && !!t2.utilityNetworkAssociationsContent;
    }, this._evaluateExpressionAttributesThrottled = l4(this._evaluateExpressionAttributes, () => this.notifyChange("waitingForContent"), ie, this), this.addHandles([l2(() => [this.graphic, this._effectivePopupTemplate, this.abilities, this.timeZone], () => this._graphicChangedThrottled(), h), f3(() => {
      if (!this._graphicChangedTask?.finished || null == this._graphicChangedTask.value) return null;
      const e8 = this._graphicChangedTask.value, t2 = e8?.expressionInfos?.dependencies;
      return [e8, t2?.has("view-scale") ? this.view?.scale : null, t2?.has("view-time-extent") ? this.view?.timeExtent?.start : null, t2?.has("view-time-extent") ? this.view?.timeExtent?.end : null];
    }, ([e8]) => this._evaluateExpressionAttributesThrottled(e8))]);
  }
  initialize() {
    this.addHandles([this._graphicChangedThrottled, this._evaluateExpressionAttributesThrottled]);
  }
  destroy() {
    this._clear(), this._graphicChangedTask = e(this._graphicChangedTask), this._evaluateExpressionAttributesTask = e(this._evaluateExpressionAttributesTask), this._error = null, this.graphic = null, this._destroyContentViewModels(), this.relatedInfos.clear();
  }
  static {
    this.interceptor = new e4(Ze, ve);
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
  castAbilities(e7) {
    return __spreadValues(__spreadValues({}, ae2), e7);
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
  set spatialReference(e7) {
    this._override("spatialReference", e7);
  }
  get timeZone() {
    return this.view?.timeZone ?? e3;
  }
  set timeZone(e7) {
    this._overrideIfSome("timeZone", e7);
  }
  get map() {
    return this.view?.map || null;
  }
  set map(e7) {
    this._override("map", e7);
  }
  get waitingForContent() {
    const { _graphicChangedThrottled: e7, _evaluateExpressionAttributesThrottled: t2, _graphicChangedTask: i3, _evaluateExpressionAttributesTask: s8, _associationVMAbortController: o3 } = this;
    return e7.hasPendingUpdates() || t2.hasPendingUpdates() || null != i3 && !i3.finished || null != s8 && !s8.finished || !!o3;
  }
  setActiveMedia(e7, t2) {
    const i3 = this.contentViewModels[e7];
    i3 instanceof v3 && i3.setActiveMedia(t2);
  }
  nextMedia(e7) {
    const t2 = this.contentViewModels[e7];
    t2 instanceof v3 && t2.next();
  }
  previousMedia(e7) {
    const t2 = this.contentViewModels[e7];
    t2 instanceof v3 && t2.previous();
  }
  async updateGeometry() {
    const { graphic: e7, spatialReference: t2, _sourceLayer: i3 } = this;
    await i3?.load();
    const s8 = i3?.objectIdField;
    if (!s8 || !e7 || !i3) return;
    const o3 = e7?.attributes?.[s8];
    if (null == o3) return;
    const r5 = [o3];
    if (!e7.geometry) {
      const s9 = await ge({ layer: i3, graphic: e7, outFields: [], objectIds: r5, returnGeometry: true, spatialReference: t2 }), o4 = s9?.geometry;
      o4 && (e7.geometry = o4);
    }
  }
  _clear() {
    this._set("title", ""), this._set("content", null), this._set("formattedAttributes", null);
  }
  _graphicChanged() {
    this._evaluateExpressionAttributesTask = e(this._evaluateExpressionAttributesTask), this._graphicChangedTask = e(this._graphicChangedTask), this._graphicChangedTask = w(async (e7) => {
      this._error = null, this._clear();
      const { graphic: t2 } = this;
      try {
        if (!t2) return null;
        const { _sourceLayer: i3, _effectivePopupTemplate: s8 } = this, o3 = this.spatialReference;
        await he({ graphic: t2, popupTemplate: s8, layer: i3, spatialReference: o3 }, { signal: e7 });
        const [{ value: r5 }, { value: a5 }] = await j([this._getContent(), this._getTitle()]), [, { value: n8 }] = await j([this._checkForRelatedFeatures({ signal: e7 }), L3(s8?.expressionInfos, t2)]);
        return { expressionInfos: n8, content: r5, title: a5 };
      } catch (i3) {
        throw d(i3) || (this._error = i3, n.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: i3, graphic: t2, popupTemplate: this._effectivePopupTemplate })), i3;
      }
    });
  }
  _compileContentElement(e7, t2) {
    return "attachments" === e7.type ? this._compileAttachments(e7, t2) : "custom" === e7.type ? this._compileCustom(e7, t2) : "fields" === e7.type ? this._compileFields(e7, t2) : "media" === e7.type ? this._compileMedia(e7, t2) : "text" === e7.type ? this._compileText(e7, t2) : "expression" === e7.type ? this._compileExpression(e7, t2) : "relationship" === e7.type ? this._compileRelationship(e7, t2) : "utility-network-associations" === e7.type ? this._compileUtilityNetworkAssociation(e7, t2) : void 0;
  }
  _compileContent(e7) {
    if (this._destroyContentViewModels(), this.graphic) return Array.isArray(e7) ? e7.filter(this._isAllowedContentType).map((e8, t2) => this._compileContentElement(e8, t2)).filter(N) : "string" == typeof e7 ? this._compileText(new n5({ text: e7 }), 0).text : e7;
  }
  _destroyContentViewModels() {
    this.removeHandles(oe), this.removeHandles(se2), this.contentViewModels.forEach((e7) => e7 && !e7.destroyed && e7.destroy()), this._set("contentViewModels", []);
  }
  _matchesFeature(e7, t2) {
    const i3 = e7?.graphic?.getObjectId(), s8 = t2?.getObjectId();
    return null != i3 && null != s8 && i3 === s8;
  }
  _setRelatedFeaturesViewModels({ relatedFeatureViewModels: e7, relatedFeatures: t2, map: i3 }) {
    const { view: s8, spatialReference: o3, timeZone: r5 } = this;
    t2?.filter(Boolean).forEach((t3) => {
      e7.some((e8) => this._matchesFeature(e8, t3)) || e7.add(new te2({ abilities: { relationshipContent: false }, map: i3, view: s8, spatialReference: o3, timeZone: r5, graphic: t3 }));
    }), e7.forEach((i4) => {
      const s9 = t2?.find((e8) => this._matchesFeature(i4, e8));
      s9 || e7.remove(i4);
    });
  }
  _setExpressionContentVM(e7, t2) {
    const i3 = this.formattedAttributes, { contentElement: s8, contentElementViewModel: o3 } = e7, r5 = s8?.type;
    o3 && r5 && ("fields" === r5 && (this._createFieldsFormattedAttributes({ contentElement: s8, contentElementIndex: t2, formattedAttributes: i3 }), o3.set(this._createFieldsVMParams(s8, t2))), "media" === r5 && (this._createMediaFormattedAttributes({ contentElement: s8, contentElementIndex: t2, formattedAttributes: i3 }), o3.set(this._createMediaVMParams(s8, t2))), "text" === r5 && o3.set(this._createTextVMParams(s8)));
  }
  _compileRelationship(e7, t2) {
    const { displayCount: i3, orderByFields: s8, relationshipId: o3, title: r5, description: a5 } = e7, { _sourceLayer: n8, graphic: l5, map: p8 } = this;
    if (!ee(n8)) return;
    const c7 = new _3(__spreadValues({ displayCount: i3, graphic: l5, orderByFields: s8, relationshipId: o3, layer: n8, map: p8 }, this._compileTitleAndDesc({ title: r5, description: a5 })));
    return this.contentViewModels[t2] = c7, this.addHandles(a2(() => c7.relatedFeatures, "change", () => this._setRelatedFeaturesViewModels(c7)), oe), e7;
  }
  _matchesGlobalFeature(e7, t2) {
    return e7.association.equals(t2.association);
  }
  _setUpUtilityNetworkAssociationsViewModels(e7, t2, i3) {
    const { view: s8, spatialReference: o3, timeZone: r5 } = this;
    e7.forEach((i4, s9) => {
      const o4 = t2.get(s9);
      o4 ? i4.forEach((t3) => {
        o4.find((e8) => this._matchesGlobalFeature(t3, e8)) || (i4.remove(t3), 0 === i4.length && e7.delete(s9));
      }) : (i4.removeAll(), e7.delete(s9));
    }), t2.forEach((t3, n8) => {
      const l5 = e7.get(n8) || new q();
      t3?.filter(Boolean).forEach((e8, t4) => {
        if (!l5.some((t5) => this._matchesGlobalFeature(t5, e8))) {
          const { association: a5, feature: n9, terminalName: p8, title: c7 } = e8;
          l5.add({ title: c7, association: a5, featureViewModel: new te2({ abilities: { utilityNetworkAssociationsContent: false }, map: i3, view: s8, spatialReference: o3, timeZone: r5, graphic: n9 }), terminalName: p8 }, t4);
        }
      }), e7.set(n8, l5);
    });
  }
  _compileUtilityNetworkAssociation(e7, t2) {
    const { displayCount: i3, title: s8, description: o3, associationTypes: r5 } = e7, { _sourceLayer: a5, graphic: n8, map: l5 } = this;
    if (!te(a5)) return;
    const p8 = new v(__spreadValues({ graphic: n8, displayCount: i3, associationTypes: r5, layer: a5, map: l5 }, this._compileTitleAndDesc({ title: s8, description: o3 })));
    return this.contentViewModels[t2] = p8, this.addHandles([l2(() => p8.associationFeatures.values(), () => this._setUpUtilityNetworkAssociationsViewModels(p8.associationViewModels, p8.associationFeatures, p8.map))], re), e7;
  }
  _compileExpression(e7, t2) {
    const { expressionInfo: i3 } = e7, { graphic: s8, map: o3, spatialReference: r5, view: a5, location: n8 } = this, l5 = new E2({ expressionInfo: i3, graphic: s8, interceptor: te2.interceptor, map: o3, spatialReference: r5, view: a5, location: n8 });
    return this.contentViewModels[t2] = l5, this.addHandles(l2(() => l5.contentElementViewModel, () => this._setExpressionContentVM(l5, t2), h), se2), e7;
  }
  _compileAttachments(e7, t2) {
    const { graphic: i3 } = this, { description: s8, title: o3, orderByFields: r5, attachmentKeywords: a5, attachmentTypes: n8 } = e7;
    return this.contentViewModels[t2] = new s4(__spreadValues({ attachmentKeywords: a5, attachmentTypes: n8, graphic: i3, orderByFields: r5 }, this._compileTitleAndDesc({ title: o3, description: s8 }))), e7;
  }
  _compileCustom(e7, t2) {
    const { graphic: i3 } = this, { creator: s8, destroyer: o3 } = e7;
    return this.contentViewModels[t2] = new c4({ graphic: i3, creator: s8, destroyer: o3 }), e7;
  }
  _compileTitleAndDesc({ title: e7, description: t2 }) {
    const { _fieldInfoMap: i3, _sourceLayer: s8, graphic: o3, formattedAttributes: r5 } = this, a5 = o3?.attributes, n8 = this._expressionAttributes, l5 = r5.global;
    return { title: P({ attributes: a5, fieldInfoMap: i3, globalAttributes: l5, expressionAttributes: n8, layer: s8, text: e7 }), description: P({ attributes: a5, fieldInfoMap: i3, globalAttributes: l5, expressionAttributes: n8, layer: s8, text: t2 }) };
  }
  _createFieldsVMParams(e7, t2) {
    const i3 = this._effectivePopupTemplate, s8 = this.formattedAttributes, o3 = __spreadValues(__spreadValues({}, s8?.global), s8?.content[t2]), r5 = !!e7?.fieldInfos, a5 = e7?.fieldInfos || i3?.fieldInfos, n8 = a5?.filter(({ fieldName: e8 }) => !!e8 && (A(e8) || Fe(e8) || o3.hasOwnProperty(e8))), l5 = i3?.expressionInfos, { description: p8, title: c7 } = e7;
    return __spreadValues({ attributes: o3, expressionInfos: l5, fieldInfos: n8, isContentFieldInfos: r5, graphic: this.graphic, layer: this._sourceLayer }, this._compileTitleAndDesc({ title: c7, description: p8 }));
  }
  _compileFields(e7, t2) {
    const i3 = e7.clone(), s8 = new f6(this._createFieldsVMParams(e7, t2));
    return this.contentViewModels[t2] = s8, i3.fieldInfos = s8.formattedFieldInfos.slice(), i3;
  }
  _createMediaVMParams(e7, t2) {
    const { abilities: i3, graphic: s8, _fieldInfoMap: o3, _effectivePopupTemplate: r5, relatedInfos: a5, _sourceLayer: n8, _expressionAttributes: l5 } = this, p8 = this.formattedAttributes, c7 = s8?.attributes ?? {}, { description: d7, mediaInfos: h5, title: u5 } = e7;
    return __spreadValues({ abilities: { chartAnimation: i3.chartAnimation }, activeMediaInfoIndex: e7.activeMediaInfoIndex || 0, attributes: c7, graphic: s8, layer: n8, fieldInfoMap: o3, formattedAttributes: __spreadValues(__spreadValues({}, p8?.global), p8?.content[t2]), expressionAttributes: l5, mediaInfos: h5, popupTemplate: r5, relatedInfos: a5 }, this._compileTitleAndDesc({ title: u5, description: d7 }));
  }
  _compileMedia(e7, t2) {
    const i3 = e7.clone(), s8 = new v3(this._createMediaVMParams(e7, t2));
    return i3.mediaInfos = s8.formattedMediaInfos.slice(), this.contentViewModels[t2] = s8, i3;
  }
  _createTextVMParams(e7) {
    const { graphic: t2, _fieldInfoMap: i3, _sourceLayer: s8, _expressionAttributes: o3 } = this;
    if (e7 && e7.text) {
      const r5 = t2?.attributes ?? {}, a5 = this.formattedAttributes?.global ?? {};
      e7.text = P({ attributes: r5, fieldInfoMap: i3, globalAttributes: a5, expressionAttributes: o3, layer: s8, text: e7.text });
    }
    return { graphic: t2, creator: e7.text };
  }
  _compileText(e7, t2) {
    const i3 = e7.clone();
    return this.contentViewModels[t2] = new c4(this._createTextVMParams(i3)), i3;
  }
  _compileLastEditInfo() {
    const { _effectivePopupTemplate: e7, _sourceLayer: t2, graphic: i3, timeZone: s8 } = this;
    if (!e7) return;
    const { lastEditInfoEnabled: o3 } = e7, r5 = t2?.editFieldsInfo;
    return o3 && r5 ? se(r5, i3?.attributes, s8, t2) : void 0;
  }
  _compileTitle(e7) {
    const { _fieldInfoMap: t2, _sourceLayer: i3, graphic: s8, _expressionAttributes: o3 } = this, r5 = s8?.attributes ?? {}, a5 = this.formattedAttributes?.global ?? {};
    return P({ attributes: r5, fieldInfoMap: t2, globalAttributes: a5, expressionAttributes: o3, layer: i3, text: e7 });
  }
  async _getTitle() {
    const { _effectivePopupTemplate: e7, graphic: t2 } = this;
    return t2 ? x({ type: "title", value: e7?.title, event: { graphic: t2 } }) : null;
  }
  async _getContent() {
    const { _effectivePopupTemplate: e7, graphic: t2 } = this;
    return t2 ? x({ type: "content", value: e7?.content, event: { graphic: t2 } }) : null;
  }
  _evaluateExpressionAttributes({ title: e7, content: t2, expressionInfos: i3 }) {
    this._evaluateExpressionAttributesTask = e(this._evaluateExpressionAttributesTask), this._evaluateExpressionAttributesTask = w(async (s8) => {
      const { graphic: o3, map: r5, view: a5, spatialReference: n8, location: p8 } = this;
      try {
        if (!o3) return;
        let l5;
        if (null != i3) {
          const e8 = [];
          for (const [t3, l6] of i3.expressions.entries()) null != l6 ? e8.push(l6.evaluate({ graphic: o3, interceptor: te2.interceptor, location: p8, map: r5, options: { signal: s8 }, spatialReference: n8, view: a5 }).then((e9) => [t3, "string" == typeof e9 ? y4(e9) : e9]).catch(() => [t3, void 0])) : e8.push(Promise.resolve([t3, void 0]));
          l5 = Object.fromEntries(await Promise.all(e8)), s(s8);
        }
        this._expressionAttributes = l5, this._graphicExpressionAttributes = __spreadValues(__spreadValues({}, o3.attributes), l5), this._set("formattedAttributes", this._createFormattedAttributes(t2)), this._set("title", this._compileTitle(e7)), this._set("lastEditInfo", this._compileLastEditInfo() || null), this._set("content", this._compileContent(t2) || null);
      } catch (c7) {
        d(c7) || (this._error = c7, n.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: c7, graphic: o3, popupTemplate: this._effectivePopupTemplate }));
      }
    });
  }
  _createMediaFormattedAttributes({ contentElement: e7, contentElementIndex: t2, formattedAttributes: i3 }) {
    const { _effectivePopupTemplate: s8, graphic: o3, relatedInfos: r5, _sourceLayer: a5, _fieldInfoMap: n8, _graphicExpressionAttributes: l5, timeZone: p8 } = this;
    i3.content[t2] = me({ attributes: __spreadValues(__spreadValues({}, l5), e7.attributes), fieldInfoMap: n8, fieldInfos: s8?.fieldInfos, graphic: o3, layer: a5, relatedInfos: r5, timeZone: p8 });
  }
  _createFieldsFormattedAttributes({ contentElement: e7, contentElementIndex: t2, formattedAttributes: i3 }) {
    if (e7.fieldInfos) {
      const { graphic: s8, relatedInfos: o3, _sourceLayer: r5, _fieldInfoMap: a5, _graphicExpressionAttributes: n8, timeZone: l5 } = this;
      i3.content[t2] = me({ attributes: __spreadValues(__spreadValues({}, n8), e7.attributes), fieldInfoMap: a5, fieldInfos: e7.fieldInfos, graphic: s8, isContentFieldInfos: true, layer: r5, relatedInfos: o3, timeZone: l5 });
    }
  }
  _createFormattedAttributes(e7) {
    const { _effectivePopupTemplate: t2, graphic: i3, relatedInfos: s8, _sourceLayer: o3, _fieldInfoMap: r5, _graphicExpressionAttributes: a5, timeZone: n8 } = this, l5 = t2?.fieldInfos, p8 = { global: me({ attributes: a5, fieldInfoMap: r5, fieldInfos: l5, graphic: i3, layer: o3, relatedInfos: s8, timeZone: n8 }), content: [] };
    return Array.isArray(e7) && e7.forEach((e8, t3) => {
      "fields" === e8.type && this._createFieldsFormattedAttributes({ contentElement: e8, contentElementIndex: t3, formattedAttributes: p8 }), "media" === e8.type && this._createMediaFormattedAttributes({ contentElement: e8, contentElementIndex: t3, formattedAttributes: p8 });
    }), p8;
  }
  _checkForRelatedFeatures(e7) {
    const { graphic: t2, _effectivePopupTemplate: i3 } = this;
    return this._queryRelatedInfos(t2, de(i3), e7);
  }
  async _queryRelatedInfos(e7, t2, i3) {
    const { relatedInfos: s8, _sourceLayer: o3 } = this;
    s8.clear();
    const r5 = null != o3?.associatedLayer ? await o3?.associatedLayer.load(i3) : o3;
    if (!r5 || !e7) return;
    const a5 = t2.filter((e8) => !!e8.fieldName && Fe(e8.fieldName));
    if (!a5?.length) return;
    t2.forEach((e8) => this._configureRelatedInfo(e8, r5));
    const n8 = await v2({ relatedInfos: s8, layer: r5 }, i3);
    Object.keys(n8).forEach((e8) => {
      const t3 = s8.get(e8.toString()), i4 = n8[e8]?.value;
      t3 && i4 && (t3.layerInfo = i4.data);
    });
    const l5 = await T({ graphic: e7, relatedInfos: s8, layer: r5 }, i3);
    Object.keys(l5).forEach((e8) => {
      g(l5[e8]?.value, s8.get(e8.toString()));
    });
  }
  _configureRelatedInfo(e7, t2) {
    const { relatedInfos: i3 } = this, s8 = h2(e7.fieldName || "");
    if (!s8) return;
    const { layerId: o3, fieldName: r5 } = s8;
    if (!o3) return;
    const a5 = i3.get(o3.toString()) || b3(o3, t2);
    a5 && (q3({ relatedInfo: a5, fieldName: r5, fieldInfo: e7 }), this.relatedInfos.set(o3, a5));
  }
};
__decorate([a()], ne.prototype, "_error", void 0), __decorate([a()], ne.prototype, "_graphicChangedTask", void 0), __decorate([a()], ne.prototype, "_evaluateExpressionAttributesTask", void 0), __decorate([a()], ne.prototype, "_associationVMAbortController", void 0), __decorate([a({ readOnly: true })], ne.prototype, "_effectivePopupTemplate", null), __decorate([a({ readOnly: true })], ne.prototype, "_fieldInfoMap", null), __decorate([a({ readOnly: true })], ne.prototype, "_sourceLayer", null), __decorate([a()], ne.prototype, "abilities", void 0), __decorate([m("abilities")], ne.prototype, "castAbilities", null), __decorate([a({ readOnly: true })], ne.prototype, "content", void 0), __decorate([a({ readOnly: true })], ne.prototype, "contentViewModels", void 0), __decorate([a()], ne.prototype, "description", void 0), __decorate([a({ type: Boolean })], ne.prototype, "defaultPopupTemplateEnabled", void 0), __decorate([a({ readOnly: true })], ne.prototype, "isFeatureFromTable", null), __decorate([a({ readOnly: true })], ne.prototype, "state", null), __decorate([a({ readOnly: true })], ne.prototype, "formattedAttributes", void 0), __decorate([a({ type: j3 })], ne.prototype, "graphic", void 0), __decorate([a({ readOnly: true })], ne.prototype, "lastEditInfo", void 0), __decorate([a({ type: _ })], ne.prototype, "location", void 0), __decorate([a({ readOnly: true })], ne.prototype, "relatedInfos", void 0), __decorate([a({ type: S })], ne.prototype, "spatialReference", null), __decorate([a()], ne.prototype, "timeZone", null), __decorate([a({ readOnly: true })], ne.prototype, "title", void 0), __decorate([a()], ne.prototype, "map", null), __decorate([a({ readOnly: true })], ne.prototype, "waitingForContent", null), __decorate([a()], ne.prototype, "view", void 0), ne = te2 = __decorate([c2("esri.widgets.Feature.FeatureViewModel")], ne);

// node_modules/@arcgis/core/widgets/Legend/support/heatmapRampUtils.js
function r4(r5) {
  if (!r5.colorStops) return [];
  const e7 = [...r5.colorStops].filter((o3) => o3.color?.a > 0);
  let t2 = e7.length - 1;
  if (e7 && e7[0]) {
    const r6 = e7[t2];
    r6 && 1 !== r6.ratio && (e7.push(new l3({ ratio: 1, color: r6.color })), t2++);
  }
  return e7.map((o3, e8) => {
    let l5 = "";
    return 0 === e8 ? l5 = r5.legendOptions?.minLabel || "low" : e8 === t2 && (l5 = r5.legendOptions?.maxLabel || "high"), { color: o3.color, label: l5, ratio: o3.ratio };
  }).reverse();
}

// node_modules/@arcgis/core/renderers/support/utils.js
var v5 = N2("short-date");
async function w5(e7, l5, t2) {
  e2(e7, l5, () => []).push(...t2);
}
async function x5(l5) {
  const t2 = /* @__PURE__ */ new Map();
  if (!l5) return t2;
  if ("visualVariables" in l5 && l5.visualVariables) {
    for (const e7 of l5.visualVariables) if (D(e7)) {
      const l6 = (await t(e7) ?? []).map((e8) => e8.color);
      await w5(t2, e7.field || e7.valueExpression, l6);
    }
  }
  if ("heatmap" === l5.type) {
    const e7 = r4(l5).map((e8) => e8.color);
    await w5(t2, l5.field || l5.valueExpression, e7);
  } else if ("pie-chart" === l5.type) {
    for (const e7 of l5.attributes) await w5(t2, e7.field || e7.valueExpression, [e7.color]);
    await w5(t2, "default", [l5?.othersCategory?.color, b2(l5.backgroundFillSymbol, null)]);
  } else if ("dot-density" === l5.type) {
    for (const e7 of l5.attributes) await w5(t2, e7.field || e7.valueExpression, [e7.color]);
    await w5(t2, "default", [l5.backgroundColor]);
  } else if ("unique-value" === l5.type) if ("predominance" === l5.authoringInfo?.type) for (const e7 of l5.uniqueValueInfos ?? []) await w5(t2, e7.value.toString(), [b2(e7.symbol, null)]);
  else {
    const e7 = (l5.uniqueValueInfos ?? []).map((e8) => b2(e8.symbol, null)), { field: i3, field2: o3, field3: a5, valueExpression: n8 } = l5;
    (i3 || n8) && await w5(t2, i3 || n8, e7), o3 && await w5(t2, o3, e7), a5 && await w5(t2, a5, e7);
  }
  else if ("class-breaks" === l5.type) {
    const e7 = l5.classBreakInfos.map((e8) => b2(e8.symbol, null)), { field: i3, valueExpression: o3 } = l5;
    await w5(t2, i3 ?? o3, e7);
  } else "simple" === l5.type && await w5(t2, "default", [b2(l5.symbol, null)]);
  return "defaultSymbol" in l5 && l5.defaultSymbol && await w5(t2, "default", [b2(l5.defaultSymbol, null)]), t2.forEach((l6, i3) => {
    const o3 = c(l6.filter(Boolean), (e7, l7) => JSON.stringify(e7) === JSON.stringify(l7));
    t2.set(i3, o3);
  }), t2;
}
function D(e7) {
  return "color" === e7.type;
}

// node_modules/@arcgis/core/widgets/support/legacyIcon.js
var i2 = { close: "esri-icon-close", collapse: "esri-icon-collapse", down: "esri-icon-down", downArrow: "esri-icon-down-arrow", dragHorizontal: "esri-icon-drag-horizontal", dragVertical: "esri-icon-drag-vertical", duplicate: "esri-icon-duplicate", expand: "esri-icon-expand", fontFallbackText: "esri-icon-font-fallback-text", forward: "esri-icon-forward", handleVertical: "esri-icon-handle-vertical", icon: "esri-icon", left: "esri-icon-left", locateCircled: "esri-icon-locate-circled", noticeTriangle: "esri-icon-notice-triangle", pause: "esri-icon-pause", play: "esri-icon-play", plus: "esri-icon-plus", radioChecked: "esri-icon-radio-checked", radioUnchecked: "esri-icon-radio-unchecked", refresh: "esri-icon-refresh", reverse: "esri-icon-reverse", right: "esri-icon-right", search: "esri-icon-search", swap: "esri-icon-swap", table: "esri-icon-table", trash: "esri-icon-trash", up: "esri-icon-up", upArrow: "esri-icon-up-arrow", upDownArrows: "esri-icon-up-down-arrows", urbanModel: "esri-icon-urban-model", zoomInMagnifyingGlass: "esri-icon-zoom-in-magnifying-glass", zoomToObject: "esri-icon-zoom-to-object" };

export {
  x5 as x,
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
//# sourceMappingURL=chunk-Q5ILGBBY.js.map
