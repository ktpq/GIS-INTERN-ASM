import {
  n as n5
} from "./chunk-ZCNXMVZA.js";
import {
  S as S3
} from "./chunk-RDHCVAGE.js";
import {
  l as l4
} from "./chunk-GGR2ZIIZ.js";
import {
  f as f2
} from "./chunk-TTRHBDVK.js";
import {
  s as s4,
  s2 as s6
} from "./chunk-HPZKYNFN.js";
import {
  C
} from "./chunk-2BF7ML3H.js";
import {
  n as n4
} from "./chunk-J2K7USJX.js";
import {
  s as s5
} from "./chunk-CB4WFOYG.js";
import {
  i as i2
} from "./chunk-XW5I7XVY.js";
import {
  p as p2
} from "./chunk-URA3RGOK.js";
import {
  A as A2,
  c as c2
} from "./chunk-TRRKQHAJ.js";
import {
  m as m5,
  u as u3
} from "./chunk-UPJMK3QA.js";
import {
  ie,
  p
} from "./chunk-DQKD2DFV.js";
import {
  d as d2
} from "./chunk-XLVOGNM7.js";
import {
  o as o4,
  s as s3
} from "./chunk-LHNPEGMS.js";
import {
  a as a3
} from "./chunk-VIFYHMCM.js";
import {
  r as r4
} from "./chunk-7EZH3JAM.js";
import {
  R
} from "./chunk-VCFT2RFZ.js";
import {
  i,
  n as n3
} from "./chunk-ZKGNDXUQ.js";
import {
  m as m4
} from "./chunk-YNPTGDAS.js";
import {
  _
} from "./chunk-WSFVXABO.js";
import {
  e as e2
} from "./chunk-T3TXTZDJ.js";
import {
  d,
  l as l3,
  u as u2
} from "./chunk-J5YAKAE5.js";
import {
  q as q2
} from "./chunk-75MOJZ4V.js";
import {
  S as S2
} from "./chunk-BS2V2OFQ.js";
import {
  y
} from "./chunk-WRETNREX.js";
import {
  o as o3
} from "./chunk-WWKLZ2P6.js";
import {
  q
} from "./chunk-HMYFPFVG.js";
import {
  y2
} from "./chunk-TNGHAIJZ.js";
import {
  o as o2
} from "./chunk-2RBIX73A.js";
import {
  u
} from "./chunk-HJMMRQXJ.js";
import {
  U,
  l as l2
} from "./chunk-M44GXGOJ.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  A,
  V,
  f2 as f,
  m2 as m3
} from "./chunk-LAAWMBRE.js";
import {
  l,
  r2 as r,
  t
} from "./chunk-HXIOMN57.js";
import {
  D,
  a3 as a2,
  c,
  m,
  m3 as m2,
  o4 as o,
  r4 as r3,
  s2,
  w
} from "./chunk-JM4CKTH2.js";
import {
  n as n2
} from "./chunk-IK45K3EN.js";
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  s
} from "./chunk-WARIPJQI.js";
import {
  a,
  has,
  n2 as n,
  r3 as r2
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/mixins/ArcGISMapService.js
var h = (h3) => {
  const b = h3;
  let v = class extends b {
    constructor() {
      super(...arguments), this.capabilities = void 0, this.copyright = null, this.fullExtent = null, this.legendEnabled = true, this.spatialReference = null, this.version = void 0, this._allLayersAndTablesMap = null;
    }
    readCapabilities(e5, t2) {
      const r5 = t2.capabilities && t2.capabilities.split(",").map((e6) => e6.toLowerCase().trim());
      if (!r5) return { operations: { supportsExportMap: false, supportsExportTiles: false, supportsIdentify: false, supportsQuery: false, supportsTileMap: false }, exportMap: null, exportTiles: null };
      const s9 = this.type, i5 = "tile" !== s9 && !!t2.supportsDynamicLayers, o5 = r5.includes("query"), l5 = r5.includes("map"), p4 = !!t2.exportTilesAllowed, n6 = r5.includes("tilemap"), u4 = r5.includes("data"), c3 = "tile" !== s9 && (!t2.tileInfo || i5), y3 = "tile" !== s9 && (!t2.tileInfo || i5), d3 = "tile" !== s9, m6 = "tile" !== s9 && i5 && t2.currentVersion >= 11.1, f4 = t2.cimVersion ? r4.parse(t2.cimVersion) : null, h4 = f4?.greaterEqual(1, 4) ?? false, b2 = f4?.greaterEqual(2, 0) ?? false;
      return { operations: { supportsExportMap: l5, supportsExportTiles: p4, supportsIdentify: o5, supportsQuery: u4, supportsTileMap: n6 }, exportMap: l5 ? { supportsArcadeExpressionForLabeling: h4, supportsCIMSymbols: b2, supportsDynamicLayers: i5, supportsSublayerOrderBy: m6, supportsSublayerDefinitionExpression: y3, supportsSublayerVisibility: c3, supportsSublayersChanges: d3 } : null, exportTiles: p4 ? { maxExportTilesCount: +t2.maxExportTilesCount } : null };
    }
    readVersion(e5, t2) {
      let r5 = t2.currentVersion;
      return r5 || (r5 = t2.hasOwnProperty("capabilities") || t2.hasOwnProperty("tables") ? 10 : t2.hasOwnProperty("supportedImageFormatTypes") ? 9.31 : 9.3), r5;
    }
    async fetchRelatedService(e5) {
      const t2 = this.portalItem;
      if (!t2 || !a3(t2)) return null;
      this._relatedFeatureServicePromise || (this._relatedFeatureServicePromise = t2.fetchRelatedItems({ relationshipType: "Service2Service", direction: "reverse" }, e5).then((e6) => e6.find((e7) => "Feature Service" === e7.type) ?? null, () => null));
      const r5 = await this._relatedFeatureServicePromise;
      return s(e5), r5 ? { itemId: r5.id, url: r5.url } : null;
    }
    async fetchSublayerInfo(e5, r5) {
      const { source: s9 } = e5;
      if (this?.portalItem && "tile" === this.type && "map-layer" === s9?.type && a3(this.portalItem) && e5.originIdOf("url") < 2) {
        const t2 = await this.fetchRelatedService(r5);
        t2 && (e5.url = V(t2.url, s9.mapLayerId.toString()), e5.layerItemId = t2.itemId);
      }
      const { url: i5 } = e5;
      let a4;
      if ("data-layer" === s9.type) {
        a4 = (await f(i5, __spreadValues({ responseType: "json", query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }) }, r5))).data;
      } else {
        let t2 = e5.id;
        "map-layer" === s9?.type && (t2 = s9.mapLayerId);
        try {
          a4 = (await this.fetchAllLayersAndTables(r5)).get(t2);
        } catch {
        }
        if (i5 && e5.originIdOf("url") > 2) try {
          const e6 = await this._fetchAllLayersAndTablesFromService(i5), t3 = m3(i5)?.sublayer ?? s9.mapLayerId, r6 = structuredClone(e6.get(t3));
          if (null != r6) {
            const e7 = ["drawingInfo", "maxScale", "minScale", "name"];
            for (const t4 of e7) delete r6[t4];
            a4 = __spreadValues(__spreadValues({}, a4), r6);
          }
        } catch {
        }
      }
      return a4;
    }
    async fetchAllLayersAndTables(e5) {
      return this._fetchAllLayersAndTablesFromService(this.parsedUrl?.path, e5);
    }
    async _fetchAllLayersAndTablesFromService(e5, a4) {
      await this.load(a4), this._allLayersAndTablesMap ||= /* @__PURE__ */ new Map();
      const l5 = m3(e5), p4 = e(this._allLayersAndTablesMap, l5?.url.path, () => f(V(l5?.url.path, "/layers"), { query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }) }).then(async (e6) => {
        const s9 = /* @__PURE__ */ new Map(), { layers: i5, tables: o5 } = e6.data, a5 = [...i5 ?? [], ...o5 ?? []];
        for (const t2 of a5) s9.set(t2.id, t2);
        if (l(s9.values(), (e7) => null == e7.capabilities || null == e7.extent)) {
          const { data: e7 } = await f(l5?.url.path, { query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }) }).catch(() => ({ data: { capabilities: "", fullExtent: void 0 } }));
          for (const t2 of s9.values()) t2.capabilities ??= e7.capabilities ?? "", t2.extent ??= e7.fullExtent;
        }
        return { result: s9 };
      }, (e6) => ({ error: e6 }))), n6 = await p4;
      if (s(a4), "result" in n6) return n6.result;
      throw n6.error;
    }
  };
  return __decorate([a2({ readOnly: true })], v.prototype, "capabilities", void 0), __decorate([o("service", "capabilities", ["capabilities", "cimVersion", "currentVersion", "exportTilesAllowed", "maxExportTilesCount", "supportsDynamicLayers", "tileInfo"])], v.prototype, "readCapabilities", null), __decorate([a2({ json: { read: { source: "copyrightText" } } })], v.prototype, "copyright", void 0), __decorate([a2({ type: z })], v.prototype, "fullExtent", void 0), __decorate([a2(u2)], v.prototype, "id", void 0), __decorate([a2({ type: Boolean, json: { origins: { service: { read: { enabled: false } } }, read: { source: "showLegend" }, write: { target: "showLegend" } } })], v.prototype, "legendEnabled", void 0), __decorate([a2(l3)], v.prototype, "popupEnabled", void 0), __decorate([a2({ type: S })], v.prototype, "spatialReference", void 0), __decorate([a2({ readOnly: true })], v.prototype, "version", void 0), __decorate([o("service", "version", ["currentVersion", "capabilities", "tables", "supportedImageFormatTypes"])], v.prototype, "readVersion", null), v = __decorate([c("esri.layers.mixins.ArcGISMapService")], v), v;
};

// node_modules/@arcgis/core/graphic/isMapImageGraphicOrigin.js
var i3 = /* @__PURE__ */ Symbol("isMapImageGraphicOriginSymbol");

// node_modules/@arcgis/core/graphic/MapImageGraphicOrigin.js
var e3;
var s7 = class extends s3 {
  get [(e3 = i3, o4)]() {
    return this.layer;
  }
  constructor(r5, i5) {
    super(), this[e3] = true, this.type = "map-image", this.layer = r5, this.sublayer = i5;
  }
  get id() {
    return `${this.layer.id}:__${this.sublayer.id}__`;
  }
};

// node_modules/@arcgis/core/graphic/isTileGraphicOrigin.js
var i4 = /* @__PURE__ */ Symbol("isTileGraphicOriginSymbol");

// node_modules/@arcgis/core/graphic/TileGraphicOrigin.js
var e4;
var s8 = class extends s3 {
  get [(e4 = i4, o4)]() {
    return this.layer;
  }
  constructor(r5, i5) {
    super(), this[e4] = true, this.type = "tile", this.layer = r5, this.sublayer = i5;
  }
  get id() {
    return `${this.layer.id}:__${this.sublayer.id}__`;
  }
};

// node_modules/@arcgis/core/layers/support/Sublayer.js
var Y;
function Z(e5) {
  return "esriSMS" === e5?.type;
}
function ee(e5, r5, t2) {
  const i5 = t2.minimumWritableOrigin || t2.origin;
  return !!i5 && e5.originIdOf(r5) >= r(i5);
}
function re(e5, r5, t2) {
  const i5 = ee(this, r5, t2);
  return { ignoreOrigin: true, allowNull: i5, enabled: !!t2 && ("map-image" === t2.layer?.type && (t2.writeSublayerStructure || i5)) };
}
function te(e5, r5, t2) {
  return { enabled: !!t2 && ("tile" === t2.layer?.type && (ee(this, r5, t2) || this._isOverridden(r5))) };
}
function ie2(e5, r5, t2) {
  return { ignoreOrigin: true, enabled: t2 && t2.writeSublayerStructure || false };
}
function oe(e5, r5, t2) {
  return { ignoreOrigin: true, enabled: !!t2?.writeSublayerStructure && this.originIdOf(r5) > 2 };
}
function se(e5, r5, t2) {
  return { ignoreOrigin: true, enabled: !!t2 && (t2.writeSublayerStructure || ee(this, r5, t2)) };
}
var ae = 0;
var le = /* @__PURE__ */ new Set(["layer", "parent", "loaded", "loadStatus", "loadError", "loadWarnings"]);
var ne = class extends e2(o3(u)) {
  static {
    Y = this;
  }
  constructor(e5) {
    super(e5), this.attributeTableTemplate = null, this.capabilities = void 0, this.editFieldsInfo = null, this.maxScaleRange = { minScale: 0, maxScale: 0 }, this.fields = null, this.fullExtent = null, this.geometryType = null, this.globalIdField = null, this.isTable = false, this.legendEnabled = true, this.objectIdField = null, this.parent = null, this.popupEnabled = true, this.popupTemplate = null, this.relationships = null, this.sourceJSON = null, this.spatialReference = null, this.title = null, this.typeIdField = null, this.type = "sublayer", this.types = null, this._lastParsedUrl = null;
  }
  async load(e5) {
    return this.addResolvingPromise(this.reload(e5)), this;
  }
  readCapabilities(e5, r5) {
    r5 = r5.layerDefinition || r5;
    const { attachment: t2, operations: { supportsQuery: i5, supportsQueryAttachments: o5 }, query: { supportsFormatPBF: s9, supportsOrderBy: a4, supportsPagination: l5, relativeTimeBinWindow: n6 }, data: { supportsAttachment: p4 }, queryRelated: y3 } = C(r5, this.url);
    return { attachment: { supportsOrderByFields: t2?.supportsOrderByFields ?? false, supportsResize: t2?.supportsResize ?? false, supportsTypeWildcard: t2?.supportsTypeWildcard ?? false }, exportMap: { supportsModification: !!r5.canModifyLayer }, operations: { supportsQuery: i5, supportsQueryAttachments: o5 }, data: { supportsAttachment: p4 }, query: { relativeTimeBinWindow: n6, supportsFormatPBF: s9, supportsOrderBy: a4, supportsPagination: l5 }, queryRelated: y3 };
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set definitionExpression(e5) {
    this._setAndNotifyLayer("definitionExpression", e5);
  }
  get effectiveScaleRange() {
    const { minScale: e5, maxScale: r5 } = this;
    return { minScale: e5, maxScale: r5 };
  }
  readMaxScaleRange(e5, r5) {
    return { minScale: (r5 = r5.layerDefinition || r5).minScale ?? 0, maxScale: r5.maxScale ?? 0 };
  }
  get fieldsIndex() {
    return new _(this.fields || []);
  }
  set floorInfo(e5) {
    this._setAndNotifyLayer("floorInfo", e5);
  }
  readGlobalIdFieldFromService(e5, r5) {
    if ((r5 = r5.layerDefinition || r5).globalIdField) return r5.globalIdField;
    if (r5.fields) {
      for (const t2 of r5.fields) if ("esriFieldTypeGlobalID" === t2.type) return t2.name;
    }
  }
  get graphicOrigin() {
    if (!this.layer) return null;
    switch (this.layer.type) {
      case "tile":
        return new s8(this.layer, this);
      case "map-image":
        return new s7(this.layer, this);
    }
  }
  get id() {
    const e5 = this._get("id");
    return e5 ?? ae++;
  }
  set id(e5) {
    this._get("id") !== e5 && (false !== this.layer?.capabilities?.exportMap?.supportsDynamicLayers ? this._set("id", e5) : this._logLockedError("id", "capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"));
  }
  readIsTable(e5, r5) {
    return "Table" === r5.type;
  }
  set labelingInfo(e5) {
    this._setAndNotifyLayer("labelingInfo", e5);
  }
  writeLabelingInfo(e5, r5, t2, i5) {
    e5 && e5.length && (r5.layerDefinition = { drawingInfo: { labelingInfo: e5.map((e6) => e6.write({}, i5)) } });
  }
  set labelsVisible(e5) {
    this._setAndNotifyLayer("labelsVisible", e5);
  }
  set layer(e5) {
    this._set("layer", e5), this.sublayers?.forEach((r5) => r5.layer = e5);
  }
  set listMode(e5) {
    this._set("listMode", e5);
  }
  set minScale(e5) {
    this._setAndNotifyLayer("minScale", e5);
  }
  readMinScale(e5, r5) {
    return r5.minScale || r5.layerDefinition?.minScale || 0;
  }
  set maxScale(e5) {
    this._setAndNotifyLayer("maxScale", e5);
  }
  readMaxScale(e5, r5) {
    return r5.maxScale || r5.layerDefinition?.maxScale || 0;
  }
  readObjectIdFieldFromService(e5, r5) {
    if ((r5 = r5.layerDefinition || r5).objectIdField) return r5.objectIdField;
    const t2 = r5.fields?.find((e6) => "esriFieldTypeOID" === e6.type);
    return t2?.name;
  }
  set opacity(e5) {
    this._setAndNotifyLayer("opacity", e5);
  }
  readOpacity(e5, r5) {
    const { layerDefinition: t2 } = r5;
    return 1 - 0.01 * (t2?.transparency ?? t2?.drawingInfo?.transparency ?? 0);
  }
  writeOpacity(e5, r5, t2, i5) {
    r5.layerDefinition = { drawingInfo: { transparency: 100 - 100 * e5 } };
  }
  set orderBy(e5) {
    this._setAndNotifyLayer("orderBy", e5);
  }
  writeParent(e5, r5) {
    this.parent && this.parent !== this.layer ? r5.parentLayerId = s2(this.parent.id) : r5.parentLayerId = -1;
  }
  get queryTask() {
    if (!this.layer) return null;
    const { capabilities: e5, fieldsIndex: r5, layer: t2, url: i5 } = this, { spatialReference: o5 } = t2, s9 = "gdbVersion" in t2 ? t2.gdbVersion : void 0, a4 = has("featurelayer-pbf") && e5?.query.supportsFormatPBF;
    return new S3({ fieldsIndex: r5, gdbVersion: s9, pbfSupported: a4, queryAttachmentsSupported: e5?.operations?.supportsQueryAttachments ?? false, relativeTimeBinWindow: e5?.query?.relativeTimeBinWindow ?? 0, sourceSpatialReference: o5, url: i5 });
  }
  set renderer(e5) {
    if (y2(e5, this.fieldsIndex), e5) {
      for (const r5 of e5.symbols) if (S2(r5)) {
        n.getLogger(this).warn("Sublayer renderer should use 2D symbols");
        break;
      }
    }
    this._setAndNotifyLayer("renderer", e5);
  }
  get source() {
    return this._get("source") || new i({ mapLayerId: this.id });
  }
  set source(e5) {
    this._setAndNotifyLayer("source", e5);
  }
  get sublayers() {
    return this._get("sublayers");
  }
  set sublayers(e5) {
    this._handleSublayersChange(e5, this._get("sublayers")), this._set("sublayers", e5);
  }
  castSublayers(e5) {
    return w(q.ofType(Y), e5);
  }
  writeSublayers(e5, r5, t2) {
    this.sublayers?.length && (r5[t2] = this.sublayers.map((e6) => e6.id).toArray().reverse());
  }
  readTitle(e5, r5) {
    return r5.layerDefinition?.name ?? r5.name;
  }
  readTypeIdField(e5, r5) {
    let t2 = (r5 = r5.layerDefinition || r5).typeIdField;
    if (t2 && r5.fields) {
      t2 = t2.toLowerCase();
      const e6 = r5.fields.find((e7) => e7.name.toLowerCase() === t2);
      e6 && (t2 = e6.name);
    }
    return t2;
  }
  get url() {
    const e5 = this.layer?.parsedUrl ?? this._lastParsedUrl, r5 = this.source;
    if (!e5) return null;
    if (this._lastParsedUrl = e5, "map-layer" === r5?.type) return `${e5.path}/${r5.mapLayerId}`;
    const t2 = { layer: JSON.stringify({ source: this.source }) };
    return `${e5.path}/dynamicLayer?${A(t2)}`;
  }
  set url(e5) {
    this._overrideIfSome("url", e5);
  }
  set visible(e5) {
    this._setAndNotifyLayer("visible", e5);
  }
  writeVisible(e5, r5, t2, i5) {
    r5[t2] = this.getAtOrigin("defaultVisibility", "service") || e5;
  }
  clone() {
    const { store: e5 } = n2(this), r5 = new Y();
    return n2(r5).store = e5.clone(le), this.commitProperty("url"), r5._lastParsedUrl = this._lastParsedUrl, r5;
  }
  createPopupTemplate(e5) {
    return d2(this, e5);
  }
  createQuery() {
    return new R({ returnGeometry: true, where: this.definitionExpression || "1=1" });
  }
  async createFeatureLayer() {
    if (this.sublayers) return null;
    const e5 = (await import("./@arcgis_core_layers_FeatureLayer.js")).default, { layer: r5, url: t2 } = this;
    let i5;
    if (t2 && this.originIdOf("url") > 2) i5 = new e5({ url: t2 });
    else {
      if (!r5?.parsedUrl) throw new r2("createFeatureLayer:missing-information", "Cannot create a FeatureLayer without a url or a parent layer");
      {
        const t3 = r5.parsedUrl;
        i5 = new e5({ url: t3.path }), t3 && this.source && ("map-layer" === this.source.type ? i5.layerId = this.source.mapLayerId : i5.dynamicDataSource = this.source);
      }
    }
    return null != r5?.refreshInterval && (i5.refreshInterval = r5.refreshInterval), this.definitionExpression && (i5.definitionExpression = this.definitionExpression), this.floorInfo && (i5.floorInfo = a(this.floorInfo)), this.originIdOf("labelingInfo") > 2 && (i5.labelingInfo = a(this.labelingInfo)), this.originIdOf("labelsVisible") > 0 && (i5.labelsVisible = this.labelsVisible), this.originIdOf("legendEnabled") > 0 && (i5.legendEnabled = this.legendEnabled), this.originIdOf("visible") > 0 && (i5.visible = this.visible), this.originIdOf("minScale") > 0 && (i5.minScale = this.minScale), this.originIdOf("maxScale") > 0 && (i5.maxScale = this.maxScale), this.originIdOf("opacity") > 0 && (i5.opacity = this.opacity), this.originIdOf("popupTemplate") > 0 && (i5.popupTemplate = a(this.popupTemplate)), this.originIdOf("renderer") > 2 && (i5.renderer = a(this.renderer)), "data-layer" === this.source?.type && (i5.dynamicDataSource = this.source.clone()), this.originIdOf("title") > 0 && (i5.title = this.title), "map-image" === r5?.type && r5.originIdOf("customParameters") > 0 && (i5.customParameters = r5.customParameters), "tile" === r5?.type && r5.originIdOf("customParameters") > 0 && (i5.customParameters = r5.customParameters), i5;
  }
  getField(e5) {
    return this.fieldsIndex.get(e5);
  }
  getFeatureType(e5) {
    return ie(this.types, this.typeIdField, e5);
  }
  getFieldDomain(e5, r5) {
    const t2 = r5?.feature, i5 = this.getFeatureType(t2);
    if (i5) {
      const r6 = i5.domains && i5.domains[e5];
      if (r6 && "inherited" !== r6.type) return r6;
    }
    return this._getLayerDomain(e5);
  }
  async queryAttachments(e5, r5) {
    await this.load();
    let t2 = p.from(e5);
    const i5 = this.capabilities;
    if (!i5?.data?.supportsAttachment) throw new r2("queryAttachments:not-supported", "this layer doesn't support attachments");
    const { attachmentTypes: s9, objectIds: a4, globalIds: l5, num: n6, size: p4, start: y3, where: u4 } = t2;
    if (!i5?.operations?.supportsQueryAttachments) {
      if (s9?.length > 0 || l5?.length > 0 || p4?.length > 0 || n6 || y3 || u4) throw new r2("queryAttachments:option-not-supported", "when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported", t2);
    }
    if (!(a4?.length || l5?.length || u4)) throw new r2("queryAttachments:invalid-query", "'objectIds', 'globalIds', or 'where' are required to perform attachment query", t2);
    return !i5?.attachment?.supportsOrderByFields && t2.orderByFields?.length && (t2 = t2.clone(), t2.orderByFields = null), this.queryTask.executeAttachmentQuery(t2, r5);
  }
  async queryFeatureCount(e5 = this.createQuery(), r5) {
    if (await this.load(), !this.capabilities.operations.supportsQuery) throw new r2("queryFeatureCount:not-supported", "this layer doesn't support queries.");
    if (!this.url) throw new r2("queryFeatureCount:not-supported", "this layer has no url.");
    const t2 = this.layer?.apiKey;
    return await this.queryTask.executeForCount(e5, __spreadProps(__spreadValues({}, r5), { query: __spreadProps(__spreadValues({}, this.layer?.customParameters), { token: t2 }) }));
  }
  async queryFeatures(e5 = this.createQuery(), r5) {
    if (await this.load(), !this.capabilities.operations.supportsQuery) throw new r2("queryFeatures:not-supported", "this layer doesn't support queries.");
    if (!this.url) throw new r2("queryFeatures:not-supported", "this layer has no url.");
    const t2 = await this.queryTask.execute(e5, __spreadProps(__spreadValues({}, r5), { query: __spreadProps(__spreadValues({}, this.layer?.customParameters), { token: this.layer?.apiKey }) }));
    if (t2?.features) {
      const e6 = this.graphicOrigin;
      for (const r6 of t2.features) r6.sourceLayer = this, r6.origin = e6;
    }
    return t2;
  }
  async queryObjectIds(e5 = this.createQuery(), r5) {
    if (await this.load(), !this.capabilities.operations.supportsQuery) throw new r2("queryObjectIds:not-supported", "this layer doesn't support queries.");
    if (!this.url) throw new r2("queryObjectIds:not-supported", "this layer has no url.");
    const t2 = this.layer?.apiKey;
    return await this.queryTask.executeForIds(e5, __spreadProps(__spreadValues({}, r5), { query: __spreadProps(__spreadValues({}, this.layer?.customParameters), { token: t2 }) }));
  }
  async queryRelatedFeatures(e5, r5) {
    if (await this.load(), !this.capabilities.operations.supportsQuery) throw new r2("queryRelatedFeatures:not-supported", "this layer doesn't support queries.");
    if (!this.url) throw new r2("queryRelatedFeatures:not-supported", "this layer has no url.");
    const t2 = this.layer?.apiKey;
    return await this.queryTask.executeRelationshipQuery(e5, __spreadProps(__spreadValues({}, r5), { query: __spreadProps(__spreadValues({}, this.layer?.customParameters), { token: t2 }) }));
  }
  async queryRelatedFeaturesCount(e5, r5) {
    if (await this.load(), !this.capabilities.operations.supportsQuery) throw new r2("queryRelatedFeaturesCount:not-supported", "this layer doesn't support queries.");
    if (!this.capabilities.queryRelated.supportsCount) throw new r2("queryRelatedFeaturesCount:not-supported", "this layer doesn't support query related counts.");
    if (!this.url) throw new r2("queryRelatedFeaturesCount:not-supported", "this layer has no url.");
    const t2 = this.layer?.apiKey;
    return await this.queryTask.executeRelationshipQueryForCount(e5, __spreadProps(__spreadValues({}, r5), { query: __spreadProps(__spreadValues({}, this.layer?.customParameters), { token: t2 }) }));
  }
  async reload(e5) {
    if ("not-loaded" === this.loadStatus) return this.load(e5).then(() => {
    });
    const { layer: r5, url: i5 } = this;
    if (!r5 && !i5) throw new r2("sublayer:missing-layer", "Sublayer can't be loaded without being part of a layer", { sublayer: this });
    const s9 = r5 ? await r5.fetchSublayerInfo(this, e5) : (await f(i5, __spreadValues({ query: { f: "json" } }, e5))).data;
    s9 && (this.sourceJSON = __spreadValues(__spreadValues({}, this.sourceJSON), s9), this.read({ layerDefinition: s9 }, { origin: "service", layer: r5, url: f2(i5) }));
  }
  toExportImageJSON(e5) {
    const r5 = { id: this.id, source: this.source?.toJSON() || { mapLayerId: this.id, type: "mapLayer" } }, t2 = o2(e5, this.definitionExpression);
    null != t2 && (r5.definitionExpression = t2);
    const i5 = ["renderer", "labelingInfo", "opacity", "labelsVisible"].reduce((e6, r6) => (e6[r6] = this.originIdOf(r6), e6), {}), o5 = Object.keys(i5).some((e6) => i5[e6] > 2);
    if (o5) {
      const e6 = r5.drawingInfo = {};
      if (i5.renderer > 2 && (e6.renderer = this.renderer ? this.renderer.toJSON() : null), i5.labelsVisible > 2 && (e6.showLabels = this.labelsVisible), this.labelsVisible && i5.labelingInfo > 2) if (this.labelingInfo) {
        !this.loaded && this.labelingInfo?.some((e7) => !e7.labelPlacement) && n.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`, { sublayer: this });
        let r6 = this.labelingInfo;
        null != this.geometryType && (r6 = c2(this.labelingInfo, y.toJSON(this.geometryType))), e6.showLabels = true, e6.labelingInfo = r6.filter((e7) => e7.labelPlacement).map((e7) => e7.toJSON({ origin: "service", layer: this.layer }));
      } else e6.showLabels = false;
      i5.opacity > 2 && (e6.transparency = 100 - 100 * this.opacity), this._assignDefaultSymbolColors(e6.renderer);
    }
    return (this.layer?.capabilities?.exportMap?.supportsSublayerOrderBy ?? false) && this.originIdOf("orderBy") > 2 && (r5.orderBy = this.orderBy?.map((e6) => e6.toJSON()) ?? null), r5;
  }
  _assignDefaultSymbolColors(e5) {
    this._forEachSimpleMarkerSymbols(e5, (e6) => {
      e6.color || "esriSMSX" !== e6.style && "esriSMSCross" !== e6.style || (e6.outline?.color ? e6.color = e6.outline.color : e6.color = [0, 0, 0, 0]);
    });
  }
  _forEachSimpleMarkerSymbols(e5, r5) {
    if (e5) {
      const t2 = ("uniqueValueInfos" in e5 ? e5.uniqueValueInfos : "classBreakInfos" in e5 ? e5.classBreakInfos : null) ?? [];
      for (const e6 of t2) Z(e6.symbol) && r5(e6.symbol);
      "symbol" in e5 && Z(e5.symbol) && r5(e5.symbol), "defaultSymbol" in e5 && Z(e5.defaultSymbol) && r5(e5.defaultSymbol);
    }
  }
  _setAndNotifyLayer(e5, r5) {
    const t2 = this.layer, i5 = this._get(e5);
    let o5, s9;
    switch (e5) {
      case "definitionExpression":
      case "floorInfo":
        o5 = "supportsSublayerDefinitionExpression";
        break;
      case "minScale":
      case "maxScale":
      case "visible":
        o5 = "supportsSublayerVisibility";
        break;
      case "labelingInfo":
      case "labelsVisible":
      case "opacity":
      case "renderer":
      case "source":
        o5 = "supportsDynamicLayers", s9 = "supportsModification";
        break;
      case "orderBy":
        o5 = "supportsSublayerOrderBy", s9 = "supportsModification";
    }
    const a4 = n2(this).getDefaultOrigin();
    if ("service" !== a4) {
      if (o5 && false === this.layer?.capabilities?.exportMap?.[o5]) return void this._logLockedError(e5, `capability not available 'layer.capabilities.exportMap.${o5}'`);
      if (s9 && false === this.capabilities?.exportMap[s9]) return void this._logLockedError(e5, `capability not available 'capabilities.exportMap.${s9}'`);
    }
    "source" !== e5 || "not-loaded" === this.loadStatus ? (this._set(e5, r5), "service" !== a4 && i5 !== r5 && t2?.emit && t2.emit("sublayer-update", { propertyName: e5, target: this })) : this._logLockedError(e5, "'source' can't be changed after calling sublayer.load()");
  }
  _handleSublayersChange(e5, r5) {
    r5 && (r5.forEach((e6) => {
      e6.parent = null, e6.layer = null;
    }), this.removeAllHandles()), e5 && (e5.forEach((e6) => {
      e6.parent = this, e6.layer = this.layer;
    }), this.addHandles([e5.on("after-add", ({ item: e6 }) => {
      e6.parent = this, e6.layer = this.layer;
    }), e5.on("after-remove", ({ item: e6 }) => {
      e6.parent = null, e6.layer = null;
    }), e5.on("before-changes", (e6) => {
      (this.layer?.capabilities?.exportMap?.supportsSublayersChanges ?? 1) || (n.getLogger(this).error(new r2("sublayer:sublayers-non-modifiable", "Sublayer can't be added, moved, or removed from the layer's sublayers", { sublayer: this, layer: this.layer })), e6.preventDefault());
    })]));
  }
  _logLockedError(e5, r5) {
    const { layer: t2, declaredClass: i5 } = this;
    n.getLogger(i5).error(new r2("sublayer:locked", `Property '${String(e5)}' can't be changed on Sublayer from the layer '${t2?.id}'`, { reason: r5, sublayer: this, layer: t2 }));
  }
  _getLayerDomain(e5) {
    return this.fieldsIndex.get(e5)?.domain ?? null;
  }
  static {
    this.test = { isMapImageLayerOverridePolicy: (e5) => e5 === oe || e5 === ie2 || e5 === re, isTileImageLayerOverridePolicy: (e5) => e5 === te };
  }
};
__decorate([a2({ type: d, json: { name: "attributeTableInfo", write: { overridePolicy: re }, origins: { "web-scene": { write: false } } } })], ne.prototype, "attributeTableTemplate", void 0), __decorate([a2({ readOnly: true })], ne.prototype, "capabilities", void 0), __decorate([o("service", "capabilities", ["layerDefinition.canModifyLayer", "layerDefinition.capabilities"])], ne.prototype, "readCapabilities", null), __decorate([a2()], ne.prototype, "defaultPopupTemplate", null), __decorate([a2({ type: String, value: null, json: { name: "layerDefinition.definitionExpression", write: { allowNull: true, overridePolicy: re } } })], ne.prototype, "definitionExpression", null), __decorate([a2({ readOnly: true, type: s4, json: { origins: { service: { read: { source: "layerDefinition.editFieldsInfo" } } } } })], ne.prototype, "editFieldsInfo", void 0), __decorate([a2({ readOnly: true })], ne.prototype, "effectiveScaleRange", null), __decorate([o("service", "maxScaleRange", ["minScale", "maxScale"])], ne.prototype, "readMaxScaleRange", null), __decorate([a2({ type: [m4], json: { origins: { service: { read: { source: "layerDefinition.fields" } } } } })], ne.prototype, "fields", void 0), __decorate([a2({ readOnly: true })], ne.prototype, "fieldsIndex", null), __decorate([a2({ type: s5, value: null, json: { name: "layerDefinition.floorInfo", read: { source: "layerDefinition.floorInfo" }, write: { target: "layerDefinition.floorInfo", overridePolicy: re }, origins: { "web-scene": { read: false, write: false } } } })], ne.prototype, "floorInfo", null), __decorate([a2({ type: z, json: { read: { source: "layerDefinition.extent" } } })], ne.prototype, "fullExtent", void 0), __decorate([a2({ type: y.apiValues, json: { origins: { service: { name: "layerDefinition.geometryType", read: { reader: y.read } } } } })], ne.prototype, "geometryType", void 0), __decorate([a2({ type: String })], ne.prototype, "globalIdField", void 0), __decorate([o("service", "globalIdField", ["layerDefinition.globalIdField", "layerDefinition.fields"])], ne.prototype, "readGlobalIdFieldFromService", null), __decorate([a2({ readOnly: true })], ne.prototype, "graphicOrigin", null), __decorate([a2({ type: D, json: { write: { ignoreOrigin: true } } })], ne.prototype, "id", null), __decorate([a2({ readOnly: true })], ne.prototype, "isTable", void 0), __decorate([o("service", "isTable", ["type"])], ne.prototype, "readIsTable", null), __decorate([a2({ value: null, type: [A2], json: { read: { source: "layerDefinition.drawingInfo.labelingInfo" }, write: { target: "layerDefinition.drawingInfo.labelingInfo", overridePolicy: oe } } })], ne.prototype, "labelingInfo", null), __decorate([r3("labelingInfo")], ne.prototype, "writeLabelingInfo", null), __decorate([a2({ type: Boolean, value: true, json: { read: { source: "layerDefinition.drawingInfo.showLabels" }, write: { target: "layerDefinition.drawingInfo.showLabels", overridePolicy: ie2 } } })], ne.prototype, "labelsVisible", null), __decorate([a2({ value: null })], ne.prototype, "layer", null), __decorate([a2({ type: String, json: { write: { overridePolicy: te } } })], ne.prototype, "layerItemId", void 0), __decorate([a2({ type: Boolean, value: true, json: { origins: { service: { read: { enabled: false } } }, read: { source: "showLegend" }, write: { target: "showLegend", overridePolicy: se } } })], ne.prototype, "legendEnabled", void 0), __decorate([a2({ type: ["show", "hide", "hide-children"], value: "show", json: { read: false, write: false, origins: { "web-scene": { read: true, write: true } } } })], ne.prototype, "listMode", null), __decorate([a2({ type: Number, value: 0, json: { write: { overridePolicy: ie2 } } })], ne.prototype, "minScale", null), __decorate([o("minScale", ["minScale", "layerDefinition.minScale"])], ne.prototype, "readMinScale", null), __decorate([a2({ type: Number, value: 0, json: { write: { overridePolicy: ie2 } } })], ne.prototype, "maxScale", null), __decorate([o("maxScale", ["maxScale", "layerDefinition.maxScale"])], ne.prototype, "readMaxScale", null), __decorate([a2()], ne.prototype, "objectIdField", void 0), __decorate([o("service", "objectIdField", ["layerDefinition.objectIdField", "layerDefinition.fields"])], ne.prototype, "readObjectIdFieldFromService", null), __decorate([a2({ type: Number, value: 1, json: { write: { target: "layerDefinition.drawingInfo.transparency", overridePolicy: ie2 } } })], ne.prototype, "opacity", null), __decorate([o("opacity", ["layerDefinition.drawingInfo.transparency", "layerDefinition.transparency"])], ne.prototype, "readOpacity", null), __decorate([r3("opacity")], ne.prototype, "writeOpacity", null), __decorate([a2({ value: null, type: [p2], json: { name: "layerDefinition.orderBy", read: { reader: i2 }, write: { overridePolicy: re }, origins: { "web-scene": { read: false, write: false } } } })], ne.prototype, "orderBy", null), __decorate([a2({ json: { type: D, write: { target: "parentLayerId", writerEnsuresNonNull: true, overridePolicy: ie2 } } })], ne.prototype, "parent", void 0), __decorate([r3("parent")], ne.prototype, "writeParent", null), __decorate([a2({ type: Boolean, value: true, json: { read: { source: "disablePopup", reader: (e5, r5) => !r5.disablePopup }, write: { target: "disablePopup", overridePolicy: se, writer(e5, r5, t2) {
  r5[t2] = !e5;
} } } })], ne.prototype, "popupEnabled", void 0), __decorate([a2({ type: q2, json: { read: { source: "popupInfo" }, write: { target: "popupInfo", overridePolicy: se } } })], ne.prototype, "popupTemplate", void 0), __decorate([a2({ readOnly: true })], ne.prototype, "queryTask", null), __decorate([a2({ type: [s6], readOnly: true, json: { origins: { service: { read: { source: "layerDefinition.relationships" } } } } })], ne.prototype, "relationships", void 0), __decorate([a2({ types: m5, value: null, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: oe }, origins: { "web-scene": { types: u3, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: oe } } } } })], ne.prototype, "renderer", null), __decorate([a2({ types: { key: "type", base: null, typeMap: { "data-layer": n3, "map-layer": i } }, cast(e5) {
  if (e5) {
    if ("mapLayerId" in e5) return m(i, e5);
    if ("dataSource" in e5) return m(n3, e5);
  }
  return e5;
}, json: { name: "layerDefinition.source", write: { overridePolicy: ie2 } } })], ne.prototype, "source", null), __decorate([a2()], ne.prototype, "sourceJSON", void 0), __decorate([a2({ type: S, json: { origins: { service: { read: { source: "layerDefinition.extent.spatialReference" } } } } })], ne.prototype, "spatialReference", void 0), __decorate([a2({ value: null, json: { type: [D], write: { target: "subLayerIds", allowNull: true, overridePolicy: ie2 } } })], ne.prototype, "sublayers", null), __decorate([m2("sublayers")], ne.prototype, "castSublayers", null), __decorate([r3("sublayers")], ne.prototype, "writeSublayers", null), __decorate([a2({ type: String, json: { name: "name", write: { overridePolicy: se } } })], ne.prototype, "title", void 0), __decorate([o("service", "title", ["name", "layerDefinition.name"])], ne.prototype, "readTitle", null), __decorate([a2({ type: String })], ne.prototype, "typeIdField", void 0), __decorate([a2({ json: { read: false }, readOnly: true, value: "sublayer" })], ne.prototype, "type", void 0), __decorate([o("typeIdField", ["layerDefinition.typeIdField"])], ne.prototype, "readTypeIdField", null), __decorate([a2({ type: [n4], json: { origins: { service: { read: { source: "layerDefinition.types" } } } } })], ne.prototype, "types", void 0), __decorate([a2({ type: String, json: { name: "layerUrl", write: { overridePolicy: te } } })], ne.prototype, "url", null), __decorate([a2({ type: Boolean, value: true, json: { read: { source: "defaultVisibility" }, write: { target: "defaultVisibility", overridePolicy: ie2 } } })], ne.prototype, "visible", null), __decorate([r3("visible")], ne.prototype, "writeVisible", null), ne = Y = __decorate([c("esri.layers.support.Sublayer")], ne);

// node_modules/@arcgis/core/layers/mixins/SublayersOwner.js
function p3(e5, r5) {
  const s9 = [], t2 = {};
  return e5 ? (e5.forEach((e6) => {
    const a4 = new ne();
    if (a4.read(e6, r5), t2[a4.id] = a4, null != e6.parentLayerId && -1 !== e6.parentLayerId) {
      const r6 = t2[e6.parentLayerId];
      r6.sublayers || (r6.sublayers = []), r6.sublayers.unshift(a4);
    } else s9.unshift(a4);
  }), s9) : s9;
}
var h2 = q.ofType(ne);
function f3(e5, r5) {
  e5 && e5.forEach((e6) => {
    r5(e6), e6.sublayers && e6.sublayers.length && f3(e6.sublayers, r5);
  });
}
var S4 = (S5) => {
  const m6 = S5;
  let v = class extends m6 {
    constructor(...e5) {
      super(...e5), this.allSublayers = new l4({ getCollections: () => [this.sublayers], getChildrenFunction: (e6) => e6.sublayers }), this.sublayersSourceJSON = { 2: {}, 3: {}, 4: {}, 5: {}, 6: {} }, this.subtables = null, this.addHandles([l2(() => this.sublayers, (e6, r5) => this._handleSublayersChange(e6, r5), U), l2(() => this.subtables, (e6, r5) => this._handleSublayersChange(e6, r5), U)]);
    }
    destroy() {
      this.allSublayers.destroy();
    }
    readSublayers(e5, r5) {
      if (!r5 || !e5) return;
      const { sublayersSourceJSON: s9 } = this, t2 = r(r5.origin);
      if (t2 < 2) return;
      if (s9[t2] = { context: r5, visibleLayers: e5.visibleLayers || s9[t2].visibleLayers, layers: e5.layers || s9[t2].layers }, t2 > 2) return;
      this._set("serviceSublayers", this.createSublayersForOrigin("service").sublayers);
      const { sublayers: a4, origin: l5 } = this.createSublayersForOrigin("web-document"), o5 = n2(this);
      o5.setDefaultOrigin(l5), this._set("sublayers", new h2(a4)), o5.setDefaultOrigin("user");
    }
    findSublayerById(e5) {
      return this.allSublayers.find((r5) => r5.id === e5);
    }
    createServiceSublayers() {
      return this.createSublayersForOrigin("service").sublayers;
    }
    createSublayersForOrigin(e5) {
      let r5;
      const s9 = r("web-document" === e5 ? "web-map" : e5);
      let t2 = 2, a4 = this.sublayersSourceJSON[2].layers, l5 = this.sublayersSourceJSON[2].context, o5 = null;
      const i5 = [3, 4, 5].filter((e6) => e6 <= s9);
      for (const u4 of i5) {
        const e6 = this.sublayersSourceJSON[u4];
        n5(e6.layers) && (t2 = u4, a4 = e6.layers, l5 = e6.context, e6.visibleLayers && (o5 = { visibleLayers: e6.visibleLayers, context: e6.context }));
      }
      const n6 = [3, 4, 5].filter((e6) => e6 > t2 && e6 <= s9);
      let c3 = null;
      for (const u4 of n6) {
        const { layers: e6, visibleLayers: s10, context: t3 } = this.sublayersSourceJSON[u4];
        e6 && (c3 = { layers: e6, context: t3 }, r5 ??= u4), s10 && (o5 = { visibleLayers: s10, context: t3 });
      }
      const b = p3(a4, l5), S6 = /* @__PURE__ */ new Map(), m7 = /* @__PURE__ */ new Set();
      if (c3) for (const u4 of c3.layers) S6.set(u4.id, u4);
      if (o5?.visibleLayers) for (const u4 of o5.visibleLayers) m7.add(u4);
      return f3(b, (e6) => {
        c3 && e6.read(S6.get(e6.id), c3.context), o5 && e6.read({ defaultVisibility: m7.has(e6.id) }, o5.context);
      }), { origin: t(t2), originWithPartialOverrides: r5 ? t(r5) : null, sublayers: new h2({ items: b }) };
    }
    read(e5, r5) {
      super.read(e5, r5), this.readSublayers(e5, r5);
    }
    _handleSublayersChange(e5, r5) {
      r5 && (r5.forEach((e6) => {
        e6.parent = null, e6.layer = null;
      }), this.removeHandles("sublayers-owner")), e5 && (e5.forEach((e6) => {
        e6.parent = this, e6.layer = this;
      }), this.addHandles([e5.on("after-add", ({ item: e6 }) => {
        e6.parent = this, e6.layer = this;
      }), e5.on("after-remove", ({ item: e6 }) => {
        e6.parent = null, e6.layer = null;
      })], "sublayers-owner"), "tile" === this.type && this.addHandles(e5.on("before-changes", (e6) => {
        n.getLogger("esri.layers.TileLayer").error(new r2("tilelayer:sublayers-non-modifiable", "Sublayer can't be added, moved, or removed from the layer's sublayers", { layer: this })), e6.preventDefault();
      }), "sublayers-owner"));
    }
  };
  return __decorate([a2({ readOnly: true })], v.prototype, "allSublayers", void 0), __decorate([a2({ readOnly: true, type: q.ofType(ne) })], v.prototype, "serviceSublayers", void 0), __decorate([a2({ value: null, type: h2, json: { read: false, write: { allowNull: true, ignoreOrigin: true } } })], v.prototype, "sublayers", void 0), __decorate([a2({ readOnly: true })], v.prototype, "sublayersSourceJSON", void 0), __decorate([a2({ type: h2, json: { read: { source: "tables" } } })], v.prototype, "subtables", void 0), v = __decorate([c("esri.layers.mixins.SublayersOwner")], v), v;
};

export {
  h,
  ne,
  S4 as S
};
//# sourceMappingURL=chunk-QKBTG4WK.js.map
