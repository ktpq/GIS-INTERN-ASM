import {
  d as d4
} from "./chunk-I3TW2EZM.js";
import {
  c as c5
} from "./chunk-5L2FDLBC.js";
import {
  i as i3
} from "./chunk-2IW6SZSV.js";
import {
  t as t3
} from "./chunk-SQRHQXRP.js";
import {
  s as s2
} from "./chunk-IIY7ORCT.js";
import {
  d as d3,
  r as r4,
  s
} from "./chunk-IC4VMYLB.js";
import {
  Ye
} from "./chunk-OXV2TYNY.js";
import {
  r as r3
} from "./chunk-6R3QVCJR.js";
import {
  c as c4,
  g,
  h,
  l as l2
} from "./chunk-LDNRXHXA.js";
import {
  c as c3,
  i as i2,
  t as t2
} from "./chunk-BC6QM5BI.js";
import {
  b as b2,
  o2 as o3
} from "./chunk-SCB6GXME.js";
import {
  R
} from "./chunk-VCFT2RFZ.js";
import {
  k
} from "./chunk-N2NNQJRW.js";
import {
  e as e2
} from "./chunk-T3TXTZDJ.js";
import {
  n as n3
} from "./chunk-Z3PP4SLW.js";
import {
  j
} from "./chunk-PF33M5XM.js";
import {
  t
} from "./chunk-XMB55ILJ.js";
import {
  u as u2
} from "./chunk-XJP3RSS7.js";
import {
  d as d2,
  o as o2,
  p
} from "./chunk-E4TLNY2F.js";
import {
  u as u3
} from "./chunk-HJMMRQXJ.js";
import {
  l
} from "./chunk-M44GXGOJ.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  I,
  f2 as f,
  m2 as m
} from "./chunk-2F6BRQJJ.js";
import {
  a,
  n as n2
} from "./chunk-FMWSBXS5.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a2,
  c as c2,
  r3 as r2
} from "./chunk-JM4CKTH2.js";
import {
  i,
  o
} from "./chunk-SZXJF3IE.js";
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  d,
  u3 as u
} from "./chunk-WARIPJQI.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  c
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/networks/support/TopologyValidationJobInfo.js
var l3 = i()({ Pending: "job-waiting", InProgress: "job-executing", Completed: "job-succeeded" });
var d5 = class extends i3 {
  constructor(t4) {
    super(t4), this.statusUrl = null, this.status = null, this.submissionTime = null, this.lastUpdatedTime = null, this._timer = void 0;
  }
  destroy() {
    clearInterval(this._timer);
  }
  async checkJobStatus(t4) {
    const s5 = __spreadProps(__spreadValues({}, t4), { query: { f: "json" } }), { data: r5 } = await f(this.statusUrl, s5);
    return this.read(r5), this.editsResolver && this.editsResolver.resolve({ edits: null, addedFeatures: [], updatedFeatures: [], deletedFeatures: [], addedAttachments: [], updatedAttachments: [], deletedAttachments: [], exceededTransferLimit: true, historicMoment: null }), this;
  }
  async waitForJobCompletion(t4 = {}) {
    const { interval: e3 = 1e3, statusCallback: s5 } = t4;
    return new Promise((t5, o4) => {
      this._clearTimer();
      const i6 = setInterval(() => {
        this._timer || o4(u()), this.checkJobStatus().then((e4) => {
          const { status: r5 } = e4;
          switch (this.status = r5, r5) {
            case "job-succeeded":
              this._clearTimer(), t5(this);
              break;
            case "job-waiting":
            case "job-executing":
              s5 && s5(this);
          }
        }, (t6) => {
          this._clearTimer(), o4(t6);
        });
      }, e3);
      this._timer = i6;
    });
  }
  _clearTimer() {
    clearInterval(this._timer), this._timer = void 0;
  }
};
__decorate([a2()], d5.prototype, "editsResolver", void 0), __decorate([a2({ type: String, json: { write: true } })], d5.prototype, "statusUrl", void 0), __decorate([r2(l3)], d5.prototype, "status", void 0), __decorate([a2({ type: Date, json: { type: Number, write: { writer: (t4, e3) => {
  e3.submissionTime = t4 ? t4.getTime() : null;
} } } })], d5.prototype, "submissionTime", void 0), __decorate([a2({ type: Date, json: { type: Number, write: { writer: (t4, e3) => {
  e3.lastUpdatedTime = t4 ? t4.getTime() : null;
} } } })], d5.prototype, "lastUpdatedTime", void 0), d5 = __decorate([c2("esri.networks.support.TopologyValidationJobInfo")], d5);
var c6 = d5;

// node_modules/@arcgis/core/networks/support/utils.js
function u4(e3, t4, r5 = "from") {
  const { fromRuleElement: n5, viaRuleElement: o4, toRuleElement: a4 } = y(e3), s5 = [];
  switch (e3.ruleType) {
    case 2:
    case 3:
      "from" === r5 && m2(t4, n5, false) ? s5.push(a4) : "to" === r5 && m2(t4, a4, false) && s5.push(n5);
      break;
    case 4:
    case 1:
      m2(t4, n5, true) ? s5.push(a4) : m2(t4, a4, true) && s5.push(n5);
      break;
    case 5:
      o4 && (m2(t4, o4, true) ? (s5.push(n5), s5.push(a4)) : (m2(t4, n5, true) || m2(t4, a4, true)) && s5.push(o4));
      break;
    default:
      return [];
  }
  return s5;
}
function i4(e3, t4, r5) {
  const { fromRuleElement: n5, viaRuleElement: o4, toRuleElement: a4 } = y(e3);
  switch (e3.ruleType) {
    case 2:
    case 3:
      return p2(t4, r5, n5, a4, false, false);
    case 4:
    case 1:
      return p2(t4, r5, n5, a4, true, true);
    case 5:
      return p2(t4, r5, n5, o4, true, true) || p2(t4, r5, a4, o4, true, true);
    default:
      return false;
  }
}
function p2(e3, t4, r5, n5, o4, a4) {
  if (!r5 || !n5) return false;
  const s5 = m2(e3, r5, a4), l5 = m2(t4, n5, a4);
  if (o4) {
    const o5 = m2(e3, n5, a4), u5 = m2(t4, r5, a4);
    return s5 && l5 || o5 && u5;
  }
  return s5 && l5;
}
function c7(e3, t4) {
  const r5 = e3.terminal?.terminalId, n5 = t4.terminalId;
  return null == r5 && null == n5 || (1 === r5 ? null == n5 || 1 === n5 : r5 === n5);
}
function m2(e3, t4, r5) {
  const { assetGroupCode: n5, assetTypeCode: o4 } = e3;
  return ("layerId" in e3 ? e3.layerId === t4.networkSource?.layerId : e3.networkSourceId === t4.networkSource?.sourceId) && (null == n5 || n5 === t4.assetGroup?.assetGroupCode) && (null == o4 || o4 === t4.assetType?.assetTypeCode) && (!r5 || !("terminalId" in e3) || c7(t4, e3));
}
function y(e3) {
  return { fromRuleElement: { networkSource: e3.fromNetworkSource, assetGroup: e3.fromAssetGroup, assetType: e3.fromAssetType, terminal: e3.fromTerminal }, viaRuleElement: e3.viaNetworkSource ? { networkSource: e3.viaNetworkSource, assetGroup: e3.viaAssetGroup, assetType: e3.viaAssetType, terminal: e3.viaTerminal } : void 0, toRuleElement: { networkSource: e3.toNetworkSource, assetGroup: e3.toAssetGroup, assetType: e3.toAssetType, terminal: e3.toTerminal } };
}
function f2(e3) {
  let t4 = null, r5 = null, o4 = null;
  if (t(e3)) t4 = d6(e3), [r5, o4] = w(e3);
  else if (b2(e3)) {
    t4 = e3.parent?.layerId ?? null;
    const [n5] = I2(e3);
    n5 === e3.subtypeField && (r5 = e3.subtypeCode);
  } else t4 = e3.layerId ?? null;
  return { layerId: t4, assetGroupCode: r5, assetTypeCode: o4 };
}
function d6(e3) {
  const { sourceLayer: t4 } = e3;
  let r5;
  return o3(t4) ? r5 = t4.layerId : b2(t4) && (r5 = t4.parent?.layerId), r5 ?? null;
}
function w(e3) {
  const [t4, r5] = I2(e3.sourceLayer);
  return [t4 ? e3.attributes[t4] : null, r5 ? e3.attributes[r5] : null];
}
function I2(e3) {
  if (!e3 || !("fieldsIndex" in e3)) return [null, null];
  return [e3.fieldsIndex.normalizeFieldName("assetGroup") ?? null, e3.fieldsIndex.normalizeFieldName("assetType") ?? null];
}
async function S2(e3, t4) {
  if ("Utility Network Layer" === e3) {
    const { default: e4 } = await import("./UtilityNetwork-7QJRH6X6.js");
    return new e4({ layerUrl: t4 });
  }
  return null;
}
async function T(r5) {
  let n5 = "portalItem" in r5 ? r5 : { portalItem: r5 };
  !n5.portalItem || n5.portalItem instanceof k || (n5 = __spreadProps(__spreadValues({}, n5), { portalItem: new k(n5.portalItem) }));
  const o4 = n5.portalItem;
  if (await o4.load(), "Feature Service" !== o4.type) throw new r("portal:unknown-item-type", "Unknown item type '${type}'", { type: o4.type });
  const s5 = o4.url, l5 = await f(s5, { responseType: "json", query: { f: "json" } }), u5 = "Network Layer";
  if (l5.data.type?.includes(u5)) return S2(l5.data.type, s5);
  if (l5.data.layers) {
    const e3 = l5.data.layers.find((e4) => e4.type.includes(u5));
    if (e3) {
      const t4 = `${s5}/${e3.id}`;
      return S2(e3.type, t4);
    }
  }
  return null;
}

// node_modules/@arcgis/core/networks/Network.js
var k2 = class extends e2(u3) {
  static fromPortalItem(e3) {
    return T(e3);
  }
  constructor(e3) {
    super(e3), this.id = n3(), this.title = null, this.layerUrl = null, this.dataElement = null, this.fullExtent = null, this.spatialReference = null, this.type = null, this.sourceJSON = null, this._historicMoment = null, this._gdbVersion = null, this._sourceIdByLayerId = /* @__PURE__ */ new Map(), this._layerIdBySourceId = /* @__PURE__ */ new Map(), this._applyEditsHandler = (e4) => {
      const { serviceUrl: t4, gdbVersion: r5, result: o4 } = e4, s5 = t4 === this.featureServiceUrl, i6 = g(t4, r5, this.gdbVersion);
      s5 && i6 && o4.then((e5) => {
        c3(t4, r5) && (this.historicMoment = e5.historicMoment);
      });
    }, this._updateMomentHandler = (e4) => {
      const { serviceUrl: t4, gdbVersion: r5, moment: o4 } = e4, s5 = t4 === this.featureServiceUrl, i6 = g(t4, r5, this.gdbVersion);
      s5 && i6 && (this.historicMoment = o4);
    }, this.when().then(() => {
      this.addHandles([l2(this._applyEditsHandler), h(this._updateMomentHandler)]);
    }, () => {
    });
  }
  initialize() {
    this.when().catch((e3) => {
      d(e3) || n.getLogger(this).error("#load()", `Failed to load layer (title: '${this.title ?? "no title"}', id: '${this.id ?? "no id"}')`, { error: e3 });
    });
  }
  get loaded() {
    return super.loaded;
  }
  get datasetName() {
    return this.dataElement?.name ?? null;
  }
  get owner() {
    return this.dataElement?.userIdentity ?? null;
  }
  get schemaGeneration() {
    return this.dataElement?.schemaGeneration ?? null;
  }
  get parsedUrl() {
    return I(this.layerUrl);
  }
  get featureServiceUrl() {
    return m(this.parsedUrl.path).url.path;
  }
  get networkServiceUrl() {
    return this.featureServiceUrl.replace(/\/FeatureServer/i, "/UtilityNetworkServer");
  }
  get layerId() {
    return m(this.parsedUrl.path).sublayer;
  }
  get networkSystemLayers() {
    return null;
  }
  get gdbVersion() {
    return this._gdbVersion;
  }
  set gdbVersion(e3) {
    this._gdbVersion = e3;
  }
  get historicMoment() {
    return this._historicMoment;
  }
  set historicMoment(e3) {
    this._historicMoment = e3;
  }
  async load(e3) {
    return this.addResolvingPromise(this._load(e3)), this;
  }
  async _load(e3) {
    await Promise.all([this._fetchDataElement(this.featureServiceUrl, this.layerId.toString(), e3), this._fetchLayerMetaData(this.layerUrl, e3)]);
  }
  getLayerIdBySourceId(e3) {
    if (!this.dataElement) return null;
    const t4 = this._layerIdBySourceId.get(e3);
    if (null != t4) return t4;
    const r5 = this.dataElement.domainNetworks, o4 = this._traverseNetworkSources(r5, this._layerIdBySourceId, "sourceId", "layerId", e3);
    return o4 >= 0 ? o4 : null;
  }
  getSourceIdByLayerId(e3) {
    if (!this.dataElement) return null;
    const t4 = this._sourceIdByLayerId.get(e3);
    if (null != t4) return t4;
    const r5 = this.dataElement.domainNetworks, o4 = this._traverseNetworkSources(r5, this._sourceIdByLayerId, "layerId", "sourceId", e3);
    return o4 >= 0 ? o4 : null;
  }
  getObjectIdsFromElements(e3) {
    const t4 = [], r5 = /* @__PURE__ */ new Map();
    for (const s5 of e3) {
      const e4 = this.getLayerIdBySourceId(s5.networkSourceId);
      if (null == e4) continue;
      let t5 = r5.get(e4);
      void 0 === t5 && (t5 = []), t5.push(s5.objectId), r5.set(e4, t5);
    }
    const o4 = this.featureServiceUrl;
    return r5.forEach((e4, r6) => t4.push({ layerUrl: `${o4}/${r6}`, objectIds: e4 })), t4;
  }
  async queryNamedTraceConfigurations(e3, t4) {
    const [{ queryNamedTraceConfigurations: r5 }, { default: o4 }] = await Promise.all([import("./queryNamedTraceConfigurations-ROU6EX6L.js"), import("./QueryNamedTraceConfigurationsParameters-XGFA23QF.js")]), s5 = this.networkServiceUrl, i6 = o4.from(e3);
    return (await r5(s5, i6, __spreadValues({}, t4)))?.namedTraceConfigurations;
  }
  async validateTopology(e3, t4) {
    if (!e3.validateArea) throw new r("network:undefined-validateArea", "the network must have validateArea defined in the validate network topology parameters.");
    const [{ validateNetworkTopology: r5 }, { default: s5 }] = await Promise.all([import("./validateNetworkTopology-6GZ4OUGX.js"), import("./ValidateNetworkTopologyParameters-5PRHDR77.js")]), i6 = s5.from(e3);
    c3(this.featureServiceUrl, this.gdbVersion || null) ? (i6.sessionID = t2, await i2(this.featureServiceUrl, this.gdbVersion, true)) : i6.sessionID = null, i6.gdbVersion = this.gdbVersion;
    const a4 = this.networkServiceUrl, n5 = this.featureServiceUrl, l5 = c4(n5, null, this.gdbVersion, true), d7 = await r5(a4, i6, __spreadValues({}, t4));
    if (d7?.serviceEdits) {
      const e4 = [];
      for (const t5 of d7.serviceEdits) {
        const { editedFeatures: r6 } = t5, o4 = r6?.spatialReference ? new S(r6.spatialReference) : null;
        e4.push({ layerId: t5.layerId, editedFeatures: { adds: r6?.adds?.map((e5) => N(e5, o4)) || [], updates: r6?.updates?.map((e5) => ({ original: N(e5[0], o4), current: N(e5[1], o4) })) || [], deletes: r6?.deletes?.map((e5) => N(e5, o4)) || [], spatialReference: o4 } });
      }
      l5.resolve({ edits: null, addedFeatures: [], updatedFeatures: [], deletedFeatures: [], addedAttachments: [], updatedAttachments: [], deletedAttachments: [], editedFeatures: e4, exceededTransferLimit: false, historicMoment: d7.moment });
    }
    return d7;
  }
  async submitTopologyValidationJob(e3, t4) {
    let s5 = null;
    if (!e3.validateArea) throw new r("network:undefined-validateArea", "the network must have validateArea defined in the validate network topology parameters.");
    if (!this.gdbVersion) {
      const e4 = this.layerUrl.replace(/\/FeatureServer/i, "/VersionManagementServer").replace(/\/\d*$/, "");
      s5 = (await f(e4, { responseType: "json", query: { f: "json" } })).data.defaultVersionName;
    }
    const [{ submitValidateNetworkTopologyJob: i6 }, { default: a4 }] = await Promise.all([import("./validateNetworkTopology-6GZ4OUGX.js"), import("./ValidateNetworkTopologyParameters-5PRHDR77.js")]), n5 = a4.from(e3);
    c3(this.featureServiceUrl, this.gdbVersion || null) ? (n5.sessionID = t2, await i2(this.featureServiceUrl, this.gdbVersion, true)) : n5.sessionID = null, n5.gdbVersion = this.gdbVersion || s5;
    const l5 = this.networkServiceUrl, d7 = this.featureServiceUrl ? c4(this.featureServiceUrl, null, this.gdbVersion, true) : void 0, u5 = await i6(l5, n5, __spreadValues({}, t4));
    return new c6({ statusUrl: u5, editsResolver: d7 });
  }
  getSourceTypeById(e3) {
    if (!this.dataElement) return null;
    for (const t4 of this.dataElement.domainNetworks) for (const r5 of [t4.edgeSources ?? [], t4.junctionSources ?? []]) for (const o4 of r5) if (o4.sourceId === e3) return r5 === t4.edgeSources ? "edge" : "junction";
    return null;
  }
  _traverseNetworkSources(e3, t4, r5, o4, s5) {
    for (const i6 of e3) for (const e4 of [i6.edgeSources ?? [], i6.junctionSources ?? []]) for (const i7 of e4) if (i7[r5] === s5) return t4.set(s5, i7[o4]), i7[o4];
    return -1;
  }
  async _fetchLayerMetaData(e3, t4) {
    const o4 = await f(e3, __spreadValues({ responseType: "json", query: { f: "json" } }, t4));
    this.sourceJSON = o4.data, this.read(o4.data, { origin: "service" });
  }
  async _fetchDataElement(e3, t4, o4) {
    if (this.dataElement) return;
    const s5 = await f(`${e3}/queryDataElements`, __spreadValues({ responseType: "json", query: { layers: JSON.stringify([t4]), f: "json" } }, o4)).then((e4) => e4.data.layerDataElements?.[0]);
    s5 && this.read(s5, { origin: "service" });
  }
};
function N(e3, r5) {
  return new j({ attributes: e3.attributes, geometry: u2(__spreadProps(__spreadValues({}, e3.geometry), { spatialReference: r5 })) });
}
__decorate([a2({ type: String, nonNullable: true, json: { origins: { "web-map": { read: true, write: { isRequired: true } } }, read: false } })], k2.prototype, "id", void 0), __decorate([a2({ type: String, nonNullable: true, json: { origins: { "web-map": { read: true, write: { isRequired: true } }, service: { read: { source: "name" } } }, read: false } })], k2.prototype, "title", void 0), __decorate([a2({ type: String, nonNullable: true, json: { origins: { "web-map": { read: { source: "url" }, write: { target: "url", isRequired: true } } }, read: false } })], k2.prototype, "layerUrl", void 0), __decorate([a2({ type: Object, json: { origins: { service: { read: true } }, read: false } })], k2.prototype, "dataElement", void 0), __decorate([a2({ type: z, json: { origins: { service: { read: { source: "extent" } } }, read: false } })], k2.prototype, "fullExtent", void 0), __decorate([a2({ type: S, json: { origins: { service: { read: { source: "extent.spatialReference" } } }, read: false } })], k2.prototype, "spatialReference", void 0), __decorate([a2({ type: ["utility", "trace"], readOnly: true, json: { read: false, write: false } })], k2.prototype, "type", void 0), __decorate([a2({ readOnly: true })], k2.prototype, "datasetName", null), __decorate([a2({ readOnly: true })], k2.prototype, "owner", null), __decorate([a2({ readOnly: true })], k2.prototype, "schemaGeneration", null), __decorate([a2({ readOnly: true })], k2.prototype, "parsedUrl", null), __decorate([a2({ readOnly: true })], k2.prototype, "featureServiceUrl", null), __decorate([a2({ readOnly: true })], k2.prototype, "networkServiceUrl", null), __decorate([a2({ readOnly: true })], k2.prototype, "layerId", null), __decorate([a2()], k2.prototype, "sourceJSON", void 0), __decorate([a2({ readOnly: true })], k2.prototype, "networkSystemLayers", null), __decorate([a2({ type: String })], k2.prototype, "gdbVersion", null), __decorate([a2({ type: Date })], k2.prototype, "historicMoment", null), __decorate([a2()], k2.prototype, "_historicMoment", void 0), __decorate([a2()], k2.prototype, "_gdbVersion", void 0), k2 = __decorate([c2("esri.networks.Network")], k2);
var V = k2;

// node_modules/@arcgis/core/networks/RulesTable.js
var f3 = class extends a(u3) {
  constructor(e3) {
    super(e3), this.rulesCategorized = { attachment: [], containment: [], connectivity: [] }, this.request = f;
  }
  initialize() {
  }
  async load(e3) {
    const t4 = this.rulesLayer.load(e3).then(() => this._initializeRulesTable());
    return this.addResolvingPromise(t4), this;
  }
  getFeaturesCanAssociateWithClause(e3, t4, s5) {
    const r5 = /* @__PURE__ */ new Map(), [i6, a4] = I2(e3.sourceLayer);
    if (!i6 || !a4) return "";
    const c8 = f2(e3), y2 = f2(t4);
    s5.forEach((e4) => {
      const { type: t5, direction: s6 } = e4;
      this._getRulesForAssociationType(t5).forEach((e5) => {
        u4(e5, c8, s6).filter((e6) => e6.networkSource?.layerId === y2.layerId).forEach((e6) => {
          const t6 = e6.assetGroup?.assetGroupCode, s7 = e6.assetType?.assetTypeCode;
          if (null != t6 && null != s7) {
            const e7 = r5.get(t6) ?? /* @__PURE__ */ new Set();
            e7.add(s7), r5.set(t6, e7);
          }
        });
      });
    });
    let d7 = [];
    return this._mergeAssetCodes(r5).forEach((e4, t5) => {
      const s6 = `${i6} IN (${t5})`, r6 = p(a4, [...e4]);
      s6 && r6 && d7.push(o2(s6, r6));
    }), d7.length > 1 && (d7 = d7.map((e4) => `(${e4})`)), d7.join(" OR ");
  }
  getFeaturesCanAssociateWith(e3, t4, s5) {
    return null == d6(e3) ? [] : t4.filter((t5) => this.canAssociateFeatures(e3, t5, s5));
  }
  canAssociateFeatures(e3, t4, s5) {
    if (!this._canSupportAssociations([e3, t4])) return false;
    const r5 = f2(e3), o4 = f2(t4);
    return s5.some((e4) => {
      const { type: t5, direction: s6 } = e4;
      return this._getRulesForAssociationType(t5).some((e5) => "to" === s6 ? i4(e5, o4, r5) : i4(e5, r5, o4));
    });
  }
  getLayersCanAssociateWith(e3, t4, s5) {
    return null == d6(e3) ? [] : t4.filter((t5) => this.canAssociateFeatureToLayer(e3, t5, s5));
  }
  canAssociateFeatureToLayer(e3, t4, s5) {
    if (!this._canSupportAssociations([e3, t4])) return false;
    const r5 = f2(e3), o4 = f2(t4);
    return s5.some((e4) => {
      const { type: t5, direction: s6 } = e4;
      return this._getRulesForAssociationType(t5).some((e5) => "to" === s6 ? i4(e5, o4, r5) : i4(e5, r5, o4));
    });
  }
  getFeatureSQL(e3, t4) {
    const s5 = e3.layerId.toString(), r5 = e3.fieldsIndex?.normalizeFieldName("assetGroup"), o4 = e3.fieldsIndex?.normalizeFieldName("assetType"), n5 = r5 ? t4.attributes[r5] : null, i6 = o4 ? t4.attributes[o4] : null, a4 = this.rulesHash[s5];
    if (a4) {
      const e4 = a4.assetGroupHash[n5];
      if (e4) {
        return e4.assetTypeHash[i6] || null;
      }
    }
    return null;
  }
  _initializeRulesTable() {
    const e3 = {}, t4 = [{ networkSourceId: "fromNetworkSource", assetGroupId: "fromAssetGroup", assetTypeId: "fromAssetType" }, { networkSourceId: "toNetworkSource", assetGroupId: "toAssetGroup", assetTypeId: "toAssetType" }, { networkSourceId: "viaNetworkSource", assetGroupId: "viaAssetGroup", assetTypeId: "viaAssetType" }];
    this.rulesCategorized = { attachment: [], containment: [], connectivity: [] };
    for (const s5 of this.rules) {
      if (3 === s5.ruleType) {
        this.rulesCategorized.attachment.push(s5);
        continue;
      }
      if (2 === s5.ruleType) {
        this.rulesCategorized.containment.push(s5);
        continue;
      }
      if (1 === s5.ruleType) {
        this.rulesCategorized.connectivity.push(s5);
        continue;
      }
      this.rulesCategorized.connectivity.push(s5);
      let r5 = [[0, 1], [1, 0]];
      5 === s5.ruleType && (r5 = [[0, 2], [2, 0], [1, 2], [2, 1]]);
      for (const o4 of r5) {
        const r6 = o4.shift(), a4 = o4.shift();
        let c8 = false;
        switch (s5.ruleType) {
          case 5:
            c8 = 0 === r6 || 1 === r6;
            break;
          case 4:
            c8 = 1 === r6;
        }
        const u5 = t4[r6], l5 = s5[u5.networkSourceId]?.layerId.toString() ?? "", p3 = s5[u5.assetGroupId]?.assetGroupCode?.toString(), y2 = s5[u5.assetTypeId], d7 = y2?.assetTypeCode?.toString(), h2 = t4[a4], f4 = s5[h2.networkSourceId]?.layerId.toString() ?? "", m4 = s5[h2.assetGroupId]?.assetGroupCode?.toString(), g3 = s5[h2.assetTypeId], T2 = g3?.assetTypeCode?.toString(), S4 = e3[l5] ?? { assetGroupHash: {} };
        if (!(p3 && d7 && m4 && T2)) continue;
        const I3 = S4.assetGroupHash[p3] ?? { assetTypeHash: {} }, v = I3.assetTypeHash[d7] ?? {};
        if (v[f4] = v[f4] ?? {}, c8) {
          v[l5] = v[l5] ?? {};
          const e4 = o2(`assetgroup = ${p3}`, `assettype = ${d7}`);
          "esriNECPEndVertex" === g3?.connectivityPolicy ? v[l5].endVertex = v[l5]?.endVertex ? `${v[l5].endVertex}` : `(${e4})` : v[l5].anyVertex = v[l5].anyVertex ? `${v[l5].anyVertex}` : `(${e4})`;
        }
        const A = o2(`assetgroup = ${m4}`, `assettype = ${T2}`);
        "esriNECPEndVertex" === g3?.connectivityPolicy ? v[f4].endVertex = v[f4]?.endVertex ? d2(v[f4].endVertex, A) : `(${A})` : v[f4].anyVertex = v[f4]?.anyVertex ? d2(v[f4].anyVertex, A) : `(${A})`, I3.assetTypeHash[d7] = v, S4.assetGroupHash[p3] = I3, e3[l5] = S4;
      }
    }
    this._set("rulesHash", e3);
  }
  _getRulesForAssociationType(e3) {
    const { rulesCategorized: t4 } = this;
    switch (e3) {
      case "attachment":
        return t4.attachment;
      case "containment":
        return t4.containment;
      case "connectivity":
      case "junction-junction-connectivity":
        return t4.connectivity.filter((e4) => 1 === e4.ruleType);
      case "junction-edge-from-connectivity":
      case "junction-edge-midspan-connectivity":
      case "junction-edge-to-connectivity":
        return t4.connectivity.filter((e4) => 4 === e4.ruleType || 5 === e4.ruleType);
      default:
        return [];
    }
  }
  _areSetsEqual(e3, t4) {
    if (e3.size !== t4.size) return false;
    for (const s5 of e3) if (!t4.has(s5)) return false;
    return true;
  }
  _mergeAssetCodes(e3) {
    const t4 = /* @__PURE__ */ new Map(), s5 = /* @__PURE__ */ new Set();
    for (const [r5, o4] of e3) {
      const n5 = /* @__PURE__ */ new Set([r5]);
      for (const [t5, a4] of e3) r5 !== t5 && !s5.has(t5) && this._areSetsEqual(o4, a4) && (n5.add(t5), s5.add(t5));
      const i6 = Array.from(n5).sort().join(",");
      t4.set(i6, o4);
    }
    return t4;
  }
  _canSupportAssociations(e3) {
    return e3.every((e4) => {
      const t4 = t(e4) ? e4.sourceLayer : e4, [s5, r5] = I2(t4);
      return null != s5 && null != r5;
    });
  }
};
__decorate([a2({ constructOnly: true })], f3.prototype, "rulesLayer", void 0), __decorate([a2({ constructOnly: true })], f3.prototype, "rules", void 0), __decorate([a2({ readOnly: true })], f3.prototype, "rulesHash", void 0), __decorate([a2()], f3.prototype, "rulesCategorized", void 0), __decorate([a2({ constructOnly: true })], f3.prototype, "request", void 0), f3 = __decorate([c2("esri.networks.RulesTable")], f3);

// node_modules/@arcgis/core/networks/support/NetworkSystemLayers.js
var l4 = class extends b {
  constructor(s5) {
    super(s5), this.rulesTableId = null, this.rulesTableUrl = null, this.subnetworksTable = null, this.subnetworksTableId = null, this.subnetworksTableUrl = null, this.dirtyAreasLayerId = null, this.dirtyAreasLayerUrl = null, this.associationsTable = null, this.associationsTableId = null, this.associationsTableUrl = null;
  }
  destroy() {
    this.associationsTable?.destroy();
  }
  async loadAssociationsTable(s5) {
    if (!this.associationsTable) {
      const { associationsTableUrl: s6 } = this;
      if (!s6) throw new r("utility-network-system-layers:missing-associations-table-url", "Unable to load the associations table, as the `associationsTableUrl` is not set.");
      this.associationsTable = new Ye({ url: s6 });
    }
    return await this.associationsTable.load(s5), this.associationsTable;
  }
  async loadSubnetworksTable(s5) {
    if (!this.subnetworksTable) {
      const { subnetworksTableUrl: s6 } = this;
      if (!s6) throw new r("utility-network-system-layers:missing-subnetworks-table-url", "Unable to load the subnetworks table, as the `subnetworksTableUrl` is not set.");
      this.subnetworksTable = new Ye({ url: s6 });
    }
    return await this.subnetworksTable.load(s5), this.subnetworksTable;
  }
};
__decorate([a2({ constructOnly: true })], l4.prototype, "rulesTableId", void 0), __decorate([a2({ constructOnly: true })], l4.prototype, "rulesTableUrl", void 0), __decorate([a2()], l4.prototype, "subnetworksTable", void 0), __decorate([a2({ constructOnly: true })], l4.prototype, "subnetworksTableId", void 0), __decorate([a2({ constructOnly: true })], l4.prototype, "subnetworksTableUrl", void 0), __decorate([a2({ constructOnly: true })], l4.prototype, "dirtyAreasLayerId", void 0), __decorate([a2({ constructOnly: true })], l4.prototype, "dirtyAreasLayerUrl", void 0), __decorate([a2()], l4.prototype, "associationsTable", void 0), __decorate([a2({ constructOnly: true })], l4.prototype, "associationsTableId", void 0), __decorate([a2({ constructOnly: true })], l4.prototype, "associationsTableUrl", void 0), l4 = __decorate([c2("esri.networks.support.NetworkSystemLayers")], l4);

// node_modules/@arcgis/core/networks/support/Terminal.js
var s3 = class extends n2 {
  constructor(r5) {
    super(r5), this.id = null, this.name = null;
  }
};
__decorate([a2({ type: Number, json: { read: { source: "terminalId" }, write: { target: "terminalId" } } })], s3.prototype, "id", void 0), __decorate([a2({ type: String, json: { read: { source: "terminalName" }, write: { target: "terminalName" } } })], s3.prototype, "name", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], s3.prototype, "isUpstreamTerminal", void 0), s3 = __decorate([c2("esri.networks.support.Terminal")], s3);
var i5 = s3;

// node_modules/@arcgis/core/networks/support/TerminalConfiguration.js
var a3 = new o({ esriUNTMBidirectional: "bidirectional", esriUNTMDirectional: "directional" });
var s4 = class extends n2 {
  constructor(t4) {
    super(t4), this.defaultConfiguration = null, this.id = null, this.name = null, this.terminals = [], this.traversabilityModel = null;
  }
};
__decorate([a2({ type: String, json: { write: true } })], s4.prototype, "defaultConfiguration", void 0), __decorate([a2({ type: Number, json: { read: { source: "terminalConfigurationId" }, write: { target: "terminalConfigurationId" } } })], s4.prototype, "id", void 0), __decorate([a2({ type: String, json: { read: { source: "terminalConfigurationName" }, write: { target: "terminalConfigurationName" } } })], s4.prototype, "name", void 0), __decorate([a2({ type: [i5], json: { write: true } })], s4.prototype, "terminals", void 0), __decorate([a2({ type: a3.apiValues, json: { type: a3.jsonValues, read: a3.read, write: a3.write } })], s4.prototype, "traversabilityModel", void 0), s4 = __decorate([c2("esri.networks.support.TerminalConfiguration")], s4);

// node_modules/@arcgis/core/networks/support/TraceJobInfo.js
var n4 = i()({ Pending: "job-waiting", InProgress: "job-executing", Completed: "job-succeeded" });
var m3 = class extends d4 {
  constructor(t4) {
    super(t4), this.statusUrl = null, this.status = null, this.submissionTime = null, this.lastUpdatedTime = null, this._timer = void 0;
  }
  destroy() {
    clearInterval(this._timer);
  }
  async checkJobStatus(t4) {
    const s5 = __spreadProps(__spreadValues({}, t4), { query: { f: "json" } }), { data: r5 } = await f(this.statusUrl, s5), i6 = r5.traceResults ? __spreadValues(__spreadValues({}, r5.traceResults), r5) : r5;
    return this.read(i6), this;
  }
  async waitForJobCompletion(t4 = {}) {
    const { interval: e3 = 1e3, statusCallback: s5 } = t4;
    return new Promise((t5, i6) => {
      this._clearTimer();
      const o4 = setInterval(() => {
        this._timer || i6(u()), this.checkJobStatus().then((e4) => {
          const { status: r5 } = e4;
          switch (this.status = r5, r5) {
            case "job-succeeded":
              this._clearTimer(), t5(this);
              break;
            case "job-waiting":
            case "job-executing":
              s5 && s5(this);
          }
        }, (t6) => {
          this._clearTimer(), i6(t6);
        });
      }, e3);
      this._timer = o4;
    });
  }
  _clearTimer() {
    clearInterval(this._timer), this._timer = void 0;
  }
};
__decorate([a2({ type: String, json: { write: true } })], m3.prototype, "statusUrl", void 0), __decorate([r2(n4)], m3.prototype, "status", void 0), __decorate([a2({ type: Date, json: { type: Number, write: { writer: (t4, e3) => {
  e3.submissionTime = t4 ? t4.getTime() : null;
} } } })], m3.prototype, "submissionTime", void 0), __decorate([a2({ type: Date, json: { type: Number, write: { writer: (t4, e3) => {
  e3.lastUpdatedTime = t4 ? t4.getTime() : null;
} } } })], m3.prototype, "lastUpdatedTime", void 0), m3 = __decorate([c2("esri.networks.support.TraceJobInfo")], m3);

// node_modules/@arcgis/core/networks/UtilityNetwork.js
var S3 = class extends V {
  constructor(e3) {
    super(e3), this.sharedNamedTraceConfigurations = [], this.type = "utility", this._circuitManagerMap = /* @__PURE__ */ new Map(), this._terminalById = /* @__PURE__ */ new Map(), this._unitIdentifierManager = null;
  }
  initialize() {
    this.addHandles(l(() => [this.gdbVersion, this.historicMoment], () => {
      this.networkSystemLayers.associationsTable && (this.networkSystemLayers.associationsTable.gdbVersion !== this.gdbVersion && (this.networkSystemLayers.associationsTable.gdbVersion = this.gdbVersion), this.networkSystemLayers.associationsTable.historicMoment !== this.historicMoment && (this.networkSystemLayers.associationsTable.historicMoment = this.historicMoment));
    }));
  }
  get _rulesLayer() {
    const { gdbVersion: e3, historicMoment: t4 } = this, r5 = this.networkSystemLayers.rulesTableUrl;
    return new Ye({ url: r5, gdbVersion: e3, historicMoment: t4 });
  }
  get _utilityLayerList() {
    const e3 = /* @__PURE__ */ new Set();
    return this.dataElement?.domainNetworks?.map((t4) => {
      t4?.edgeSources?.map(({ layerId: t5, sourceId: r5 }) => {
        this._layerIdBySourceId.set(r5, t5), this._sourceIdByLayerId.set(t5, r5), e3.add(t5);
      }), t4?.junctionSources?.map(({ layerId: t5, sourceId: r5 }) => {
        this._layerIdBySourceId.set(r5, t5), this._sourceIdByLayerId.set(t5, r5), e3.add(t5);
      });
    }), e3;
  }
  get serviceTerritoryFeatureLayerId() {
    return this.dataElement?.serviceTerritoryFeatureLayerId ?? null;
  }
  get networkSystemLayers() {
    return new l4({ rulesTableId: this.sourceJSON?.systemLayers.rulesTableId, rulesTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.rulesTableId}` : null, subnetworksTableId: this.sourceJSON?.systemLayers.subnetworksTableId, subnetworksTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.subnetworksTableId}` : null, dirtyAreasLayerId: this.sourceJSON?.systemLayers.dirtyAreasLayerId, dirtyAreasLayerUrl: this.sourceJSON ? `${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.dirtyAreasLayerId}` : null, associationsTableId: this.sourceJSON?.systemLayers.associationsTableId, associationsTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.associationsTableId}` : null });
  }
  get terminalConfigurations() {
    return this.dataElement?.terminalConfigurations.map((e3) => s4.fromJSON(e3)) || [];
  }
  get domainNetworkNames() {
    return this.dataElement?.domainNetworks.map((e3) => e3.domainNetworkName) || [];
  }
  get hasTelecomNetwork() {
    return this.dataElement?.domainNetworks.some((e3) => e3.isTelecomNetwork) ?? false;
  }
  get associationsTable() {
    return this.networkSystemLayers.associationsTable;
  }
  async load(e3) {
    return this.addResolvingPromise(this._load(e3)), this;
  }
  async _load(e3) {
    await super._load(e3), await Promise.all([this._loadNamedTraceConfigurationsFromNetwork(e3), this.networkSystemLayers.loadAssociationsTable(e3)]);
  }
  getTerminalConfiguration(e3) {
    let t4 = null, r5 = null;
    const s5 = e3.sourceLayer ?? e3.origin ?? e3.layer ?? null;
    let o4 = null;
    if ("feature" === s5?.type) {
      if (o4 = s5.layerId, null === o4) return null;
    } else {
      if ("subtype-sublayer" !== s5?.type) return null;
      if (o4 = s5?.parent?.layerId ?? null, null === o4) return null;
    }
    const i6 = e3.attributes;
    if (null == i6) return null;
    for (const l5 of Object.keys(i6)) "ASSETGROUP" === l5.toUpperCase() && (t4 = e3.getAttribute(l5)), "ASSETTYPE" === l5.toUpperCase() && (r5 = e3.getAttribute(l5));
    if (!this.dataElement) return null;
    let a4 = null;
    const n5 = this.dataElement.domainNetworks;
    for (const l5 of n5) {
      const e4 = l5.junctionSources?.find((e5) => e5.layerId === o4);
      if (e4) {
        const s6 = e4.assetGroups?.find((e5) => e5.assetGroupCode === t4);
        if (s6) {
          const e5 = s6.assetTypes?.find((e6) => e6.assetTypeCode === r5);
          if (e5?.isTerminalConfigurationSupported) {
            a4 = e5.terminalConfigurationId;
            break;
          }
        }
      }
    }
    if (null != a4) {
      const e4 = this.dataElement.terminalConfigurations, t5 = e4?.find((e5) => e5.terminalConfigurationId === a4);
      return t5 ? s4.fromJSON(t5) : null;
    }
    return null;
  }
  getTierNames(e3) {
    const t4 = this.dataElement?.domainNetworks.find((t5) => t5.domainNetworkName === e3);
    return t4?.tiers?.map((e4) => e4.name) || [];
  }
  async getRulesTable() {
    const e3 = this._rulesLayer;
    e3.loaded || await e3.load();
    const t4 = this.dataElement?.domainNetworks;
    if (!t4) return null;
    const r5 = t4.flatMap((e4) => [...e4.edgeSources || [], ...e4.junctionSources || []]), s5 = (await this._queryRulesTable(e3)).map((t5) => this._hydrateRuleInfo(e3, r5, t5));
    return new f3({ rulesLayer: e3, rules: s5 });
  }
  async getCircuitManager(e3) {
    if (!this.hasTelecomNetwork) return null;
    const t4 = this.dataElement?.domainNetworks.find((t5) => t5.domainNetworkName === e3 && t5.isTelecomNetwork);
    if (!t4) return null;
    const { default: r5 } = await import("./CircuitManager-JAGSG2RR.js");
    return e(this._circuitManagerMap, e3, () => new r5({ utilityNetwork: this, telecomDomainNetwork: t4 }));
  }
  async getUnitIdentifierManager() {
    if (!this.hasTelecomNetwork) return null;
    if (this._unitIdentifierManager) return this._unitIdentifierManager;
    const { default: e3 } = await import("./UnitIdentifierManager-PIVV6TYO.js");
    return this._unitIdentifierManager = new e3({ utilityNetwork: this }), this._unitIdentifierManager;
  }
  getTerminalById(e3) {
    if (!this.dataElement || null == e3) return null;
    const t4 = this._terminalById.get(e3);
    return null != t4 ? t4 : (this.terminalConfigurations.forEach((e4) => {
      e4.terminals.forEach((e5) => {
        this._terminalById.set(e5.id, e5);
      });
    }), this._terminalById.get(e3));
  }
  isUtilityLayer(e3) {
    return "layerId" in e3 ? null != e3.layerId && this._utilityLayerList.has(e3.layerId) && (e3.url?.startsWith(this.featureServiceUrl) ?? false) : !("subtype-sublayer" !== e3.type || !e3.parent) && (this._utilityLayerList.has(e3.parent.layerId) && (e3.parent.url?.startsWith(this.featureServiceUrl) ?? false));
  }
  async queryAssociations(e3, t4) {
    const [{ queryAssociations: r5 }, { default: s5 }] = await Promise.all([import("./queryAssociations-U4EEZ3O4.js"), import("./QueryAssociationsParameters-7NSO2KA2.js")]), o4 = s5.from(e3);
    o4.gdbVersion = this.gdbVersion, o4.moment = this.historicMoment;
    return (await r5(this.networkServiceUrl, o4, t4)).associations;
  }
  async synthesizeAssociationGeometries(e3) {
    const [{ synthesizeAssociationGeometries: t4 }, { default: r5 }] = await Promise.all([import("./synthesizeAssociationGeometries-RJRBGOL5.js"), import("./SynthesizeAssociationGeometriesParameters-IT6ESGW6.js")]), s5 = r5.from(e3);
    return s5.gdbVersion = this.gdbVersion, s5.moment = this.historicMoment, t4(this.networkServiceUrl, s5);
  }
  async trace(e3) {
    const [{ trace: t4 }, { default: r5 }] = await Promise.all([import("./trace-YPXDMF65.js"), import("./TraceParameters-6LAOCN47.js")]), s5 = r5.from(e3);
    return s5.gdbVersion = this.gdbVersion, s5.moment = this.historicMoment, t4(this.networkServiceUrl, s5);
  }
  async submitTraceJob(e3) {
    const [{ submitTraceJob: t4 }, { default: r5 }] = await Promise.all([import("./trace-YPXDMF65.js"), import("./TraceParameters-6LAOCN47.js")]), s5 = r5.from(e3);
    s5.gdbVersion = this.gdbVersion, s5.moment = this.historicMoment;
    const o4 = await t4(this.networkServiceUrl, s5);
    return new m3({ statusUrl: o4 });
  }
  async canAddAssociation(e3) {
    const t4 = await this.getRulesTable();
    if (!t4) return false;
    const { fromNetworkElement: r5, toNetworkElement: s5 } = e3;
    if (!r5 || !s5) return false;
    await t4.load();
    let o4 = null;
    switch (e3.associationType) {
      case "containment":
        o4 = t4.rulesCategorized.containment;
        break;
      case "attachment":
        o4 = t4.rulesCategorized.attachment;
        break;
      default:
        o4 = t4.rulesCategorized.connectivity;
    }
    return o4.some((e4) => i4(e4, r5, s5));
  }
  generateAddAssociations(e3) {
    const { associationsTable: r5 } = this.networkSystemLayers, { fromNetworkSourceId: s5, fromGlobalId: o4, fromTerminalId: i6, fromFirstUnit: a4, fromLastUnit: n5, toNetworkSourceId: l5, toGlobalId: u5, toTerminalId: d7, toFirstUnit: m4, toLastUnit: c8, associationType: h2, isContentVisible: p3, percentAlong: f4, globalId: I3 } = t3(r5);
    return { addFeatures: e3.map((e4) => {
      const r6 = new j({ attributes: { [s5]: e4.fromNetworkElement?.networkSourceId, [o4]: e4.fromNetworkElement?.globalId, [i6]: e4.fromNetworkElement?.terminalId, [l5]: e4.toNetworkElement?.networkSourceId, [u5]: e4.toNetworkElement?.globalId, [d7]: e4.toNetworkElement?.terminalId, [h2]: d3[e4.associationType], [p3]: null == e4.isContentVisible ? void 0 : e4.isContentVisible ? 1 : 0, [f4]: e4.percentAlong, [I3]: e4.globalId } }), y2 = e4.associationType.includes("connectivity");
      return e4.fromNetworkElement instanceof s2 && (r6.attributes[a4] = e4.fromNetworkElement?.firstUnit, r6.attributes[n5] = e4.fromNetworkElement?.lastUnit, y2 && (r6.attributes[i6] = 1)), e4.toNetworkElement instanceof s2 && (r6.attributes[m4] = e4.toNetworkElement?.firstUnit, r6.attributes[c8] = e4.toNetworkElement?.lastUnit, y2 && (r6.attributes[d7] = 1)), r6;
    }), id: this.networkSystemLayers.associationsTableId, identifierFields: { globalIdField: r5?.globalIdField ?? "globalid", objectIdField: r5?.objectIdField ?? "objectid" } };
  }
  generateDeleteAssociations(e3) {
    const { associationsTable: t4, associationsTableId: r5 } = this.networkSystemLayers, s5 = { id: r5, identifierFields: { globalIdField: t4?.globalIdField ?? "globalid", objectIdField: t4?.objectIdField ?? "objectid" } };
    if (-8 === this.dataElement?.schemaGeneration) {
      const t5 = this._generateDeleteTelecomAssociationPayload(e3);
      return __spreadProps(__spreadValues({}, s5), { deleteAssociations: t5 });
    }
    const o4 = e3.map((e4) => ({ globalId: e4.globalId }));
    return __spreadProps(__spreadValues({}, s5), { deleteFeatures: o4 });
  }
  generateCombineNetworkElements(e3) {
    return { id: this._ensureSingleSourceIdAsValidLayerId(e3), combineGroupedObjects: [{ globalIds: e3.map((e4) => e4.globalId) }] };
  }
  generateDivideNetworkElements(e3, t4) {
    return { id: this._ensureSingleSourceIdAsValidLayerId([e3]), divideGroupedObjects: [{ globalId: e3.globalId, numUnits: t4 }] };
  }
  async loadAssociationsTable() {
    return this.networkSystemLayers.loadAssociationsTable();
  }
  async loadSubnetworksTable() {
    return this.networkSystemLayers.loadSubnetworksTable();
  }
  async _loadNamedTraceConfigurationsFromNetwork(e3) {
    if (0 === this.sharedNamedTraceConfigurations?.length) return;
    const t4 = this.sharedNamedTraceConfigurations.map((e4) => e4.globalId), r5 = await this.queryNamedTraceConfigurations({ globalIds: t4 }, e3);
    for (const s5 of this.sharedNamedTraceConfigurations) {
      const e4 = r5?.find((e5) => e5.globalId === s5.globalId);
      if (e4) {
        const t5 = e4.write({}, { origin: "service" });
        s5.read(t5, { origin: "service" });
      }
    }
  }
  _hydrateRuleInfo(e3, t4, r5) {
    const s5 = e3.fieldsIndex, o4 = s5.get("RULETYPE"), i6 = s5.get("CREATIONDATE"), a4 = s5.get("FROMNETWORKSOURCEID"), n5 = s5.get("FROMASSETGROUP"), l5 = s5.get("FROMASSETTYPE"), u5 = s5.get("FROMTERMINALID"), d7 = s5.get("TONETWORKSOURCEID"), m4 = s5.get("TOASSETGROUP"), c8 = s5.get("TOASSETTYPE"), y2 = s5.get("TOTERMINALID"), h2 = s5.get("VIANETWORKSOURCEID"), p3 = s5.get("VIAASSETGROUP"), f4 = s5.get("VIAASSETTYPE"), w2 = s5.get("VIATERMINALID"), I3 = r5.attributes[o4.name], b3 = new Date(r5.attributes[i6.name]), g3 = [{ networkSourceId: r5.attributes[a4.name], assetGroupId: r5.attributes[n5.name], assetTypeId: r5.attributes[l5.name], terminalId: r5.attributes[u5.name] }, { networkSourceId: r5.attributes[d7.name], assetGroupId: r5.attributes[m4.name], assetTypeId: r5.attributes[c8.name], terminalId: r5.attributes[y2.name] }, { networkSourceId: r5.attributes[h2.name], assetGroupId: r5.attributes[p3.name], assetTypeId: r5.attributes[f4.name], terminalId: r5.attributes[w2.name] }], T2 = { ruleType: I3, creationDate: b3 };
    for (const k3 of [0, 1, 2]) {
      if (5 !== I3 && 2 === k3) continue;
      const e4 = g3[k3], r6 = t4.find((t5) => t5.sourceId === e4.networkSourceId), s6 = r6?.assetGroups.find((t5) => t5.assetGroupCode === e4.assetGroupId), o5 = s6?.assetTypes.find((t5) => t5.assetTypeCode === e4.assetTypeId), i7 = this._getTerminal(o5, e4);
      let a5 = "";
      switch (k3) {
        case 0:
          a5 = "from";
          break;
        case 1:
          a5 = "to";
          break;
        case 2:
          a5 = "via";
      }
      T2[`${a5}NetworkSource`] = r6, T2[`${a5}AssetGroup`] = s6, T2[`${a5}AssetType`] = o5, T2[`${a5}Terminal`] = i7?.toJSON();
    }
    return T2;
  }
  _getTerminal(e3, t4) {
    const r5 = e3?.terminalConfigurationId, s5 = this.terminalConfigurations?.find((e4) => e4.id === r5);
    return s5?.terminals?.find((e4) => e4.id === t4.terminalId) ?? null;
  }
  async _queryRulesTable(e3) {
    const { gdbVersion: t4, historicMoment: r5 } = this, s5 = new R({ where: "1=1", outFields: ["*"], gdbVersion: t4, historicMoment: r5 });
    return (await r3(e3, s5)).features;
  }
  _generateDeleteTelecomAssociationPayload(e3) {
    return e3.map((e4) => ({ globalId: e4.globalId ?? r4, associationType: s.toJSON(e4.associationType), fromSourceId: e4.fromNetworkElement.networkSourceId, fromGlobalId: e4.fromNetworkElement.globalId, fromTerminalId: e4.fromNetworkElement.terminalId, toSourceId: e4.toNetworkElement.networkSourceId, toGlobalId: e4.toNetworkElement.globalId, toTerminalId: e4.toNetworkElement.terminalId }));
  }
  _ensureSingleSourceIdAsValidLayerId(e3) {
    const t4 = c(e3.map((e4) => e4.networkSourceId));
    if (t4.length > 1) throw new r("utility-network:invalid-source-id", "'networkSourceId' is not valid. Ensure that all network elements have the same 'networkSourceId' and that it corresponds to a valid layer in the utility network.");
    const o4 = t4[0], i6 = this.getLayerIdBySourceId(o4);
    if (null == i6) throw new r("utility-network:invalid-source-id", "'networkSourceId' is not valid. Ensure that all network elements have the same 'networkSourceId' and that it corresponds to a valid layer in the utility network.");
    return i6;
  }
};
__decorate([a2({ readOnly: true })], S3.prototype, "_rulesLayer", null), __decorate([a2({ type: [c5], json: { origins: { "web-map": { read: { source: "traceConfigurations" }, write: { target: "traceConfigurations" } }, service: { read: { source: "traceConfigurations" } } }, read: false } })], S3.prototype, "sharedNamedTraceConfigurations", void 0), __decorate([a2({ type: ["utility"], readOnly: true, json: { read: false, write: false } })], S3.prototype, "type", void 0), __decorate([a2({ readOnly: true })], S3.prototype, "serviceTerritoryFeatureLayerId", null), __decorate([a2({ readOnly: true })], S3.prototype, "networkSystemLayers", null), __decorate([a2({ readOnly: true })], S3.prototype, "terminalConfigurations", null), __decorate([a2({ readOnly: true })], S3.prototype, "domainNetworkNames", null), __decorate([a2({ readOnly: true })], S3.prototype, "hasTelecomNetwork", null), __decorate([a2({ readOnly: true, json: { read: false } })], S3.prototype, "associationsTable", null), S3 = __decorate([c2("esri.networks.UtilityNetwork")], S3);
var N2 = S3;

export {
  N2 as N
};
//# sourceMappingURL=chunk-WMBAAXRO.js.map
