import {
  s as s2,
  s2 as s5
} from "./chunk-HPZKYNFN.js";
import {
  C
} from "./chunk-AQDYRMWV.js";
import {
  i as i2,
  s as s4
} from "./chunk-EBR7N54Z.js";
import {
  s as s3
} from "./chunk-TM5RXVPA.js";
import {
  F as F2,
  N,
  Y,
  k,
  ne,
  se,
  z as z2
} from "./chunk-PDODKCOR.js";
import {
  m as m2
} from "./chunk-DPKT4LYX.js";
import {
  E,
  s
} from "./chunk-YDQ5OQ56.js";
import {
  H,
  K,
  Q,
  W
} from "./chunk-SCB6GXME.js";
import {
  i2 as i
} from "./chunk-YNPTGDAS.js";
import {
  j,
  m,
  v
} from "./chunk-EKKBLUJP.js";
import {
  a as a3
} from "./chunk-IJHRPSGC.js";
import {
  q
} from "./chunk-BJNDU6LU.js";
import {
  l
} from "./chunk-NLVGGH5B.js";
import {
  l as l2
} from "./chunk-473S3KQM.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  ge,
  pe
} from "./chunk-NR66QFNF.js";
import {
  At,
  F,
  vt
} from "./chunk-2F6BRQJJ.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import {
  t
} from "./chunk-HXIOMN57.js";
import {
  a3 as a2,
  c,
  o4 as o,
  r4 as r
} from "./chunk-JM4CKTH2.js";
import {
  a
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/support/FeatureIndex.js
var n2 = class extends l(n) {
  constructor(o2) {
    super(o2);
  }
};
__decorate([a2({ constructOnly: true, json: { write: true } })], n2.prototype, "name", void 0), __decorate([a2({ constructOnly: true, json: { write: true } })], n2.prototype, "fields", void 0), __decorate([a2({ constructOnly: true, json: { write: true } })], n2.prototype, "isAscending", void 0), __decorate([a2({ constructOnly: true, json: { write: true } })], n2.prototype, "indexType", void 0), __decorate([a2({ constructOnly: true, json: { write: true } })], n2.prototype, "isUnique", void 0), __decorate([a2({ constructOnly: true, json: { write: true } })], n2.prototype, "description", void 0), n2 = __decorate([c("esri.layers.support.FeatureIndex")], n2);

// node_modules/@arcgis/core/layers/support/GeometryFieldsInfo.js
var a4 = class extends l(n) {
  constructor(e) {
    super(e), this.shapeAreaField = null, this.shapeLengthField = null, this.units = null;
  }
};
__decorate([a2({ type: String, json: { read: { source: "shapeAreaFieldName" } } })], a4.prototype, "shapeAreaField", void 0), __decorate([a2({ type: String, json: { read: { source: "shapeLengthFieldName" } } })], a4.prototype, "shapeLengthField", void 0), __decorate([a2({ type: String, json: { read: (e) => pe.read(e) || ge.read(e) } })], a4.prototype, "units", void 0), a4 = __decorate([c("esri.layers.support.GeometryFieldsInfo")], a4);

// node_modules/@arcgis/core/layers/support/Subtype.js
var a5 = class extends l(n) {
  constructor(o2) {
    super(o2), this.code = null, this.defaultValues = {}, this.domains = null, this.name = null;
  }
  readDomains(o2) {
    if (!o2) return null;
    const r2 = {};
    for (const t2 of Object.keys(o2)) r2[t2] = i(o2[t2]);
    return r2;
  }
  writeDomains(o2, r2) {
    if (!o2) return;
    const t2 = {};
    for (const e of Object.keys(o2)) o2[e] && (t2[e] = o2[e]?.toJSON());
    r2.domains = t2;
  }
};
__decorate([a2({ type: Number, json: { write: true } })], a5.prototype, "code", void 0), __decorate([a2({ type: Object, json: { write: true } })], a5.prototype, "defaultValues", void 0), __decorate([a2({ json: { write: true } })], a5.prototype, "domains", void 0), __decorate([o("domains")], a5.prototype, "readDomains", null), __decorate([r("domains")], a5.prototype, "writeDomains", null), __decorate([a2({ type: String, json: { write: true } })], a5.prototype, "name", void 0), a5 = __decorate([c("esri.layers.support.Subtype")], a5);

// node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js
var V = (V2) => {
  const G = V2;
  let Z = class extends G {
    constructor() {
      super(...arguments), this.cacheMaxAge = 0, this.capabilities = null, this.copyright = null, this.dateFieldsTimeZone = null, this.datesInUnknownTimezone = false, this.definitionExpression = null, this.displayField = null, this.editFieldsInfo = null, this.editingInfo = null, this.elevationInfo = null, this.fieldsIndex = null, this.floorInfo = null, this.fullExtent = null, this.gdbVersion = null, this.geometryFieldsInfo = null, this.geometryType = null, this.globalIdField = null, this.hasM = void 0, this.hasZ = void 0, this.heightModelInfo = null, this.historicMoment = null, this.indexes = new (q.ofType(n2))(), this.isTable = false, this.layerId = void 0, this.maxScale = 0, this.minScale = 0, this.objectIdField = null, this.preferredTimeZone = null, this.relationships = null, this.returnM = void 0, this.returnZ = void 0, this.serviceDefinitionExpression = null, this.serviceItemId = null, this.sourceJSON = null, this.spatialReference = S.WGS84, this.subtypeField = null, this.subtypes = null, this.trackIdField = null, this.uniqueIdFields = null, this.url = null, this.version = void 0, this._isUrlHostModified = false, this._isUrlHostModificationEnabled = false;
    }
    getFieldDomain(e, t2) {
      throw new Error("Not implemented");
    }
    getField(e) {
      return this.fieldsIndex.get(e);
    }
    get authenticationTriggerEvent() {
      if (!this.url) return null;
      const { capabilities: e } = this;
      if (e) {
        const { query: t3, operations: i3, editing: r2 } = e;
        if (!t3.supportsQueryByOthers || !t3.supportsQueryByAnonymous) return "load";
        if (i3.supportsEditing && !(r2.supportsUpdateByOthers && r2.supportsUpdateByAnonymous && r2.supportsDeleteByOthers && r2.supportsDeleteByAnonymous)) return "load";
      }
      if (Y(this.serviceDefinitionExpression) || Y(this.definitionExpression)) return "load";
      if (this.userHasUpdateItemPrivileges) {
        if (ne(this)) return "load";
        if (this.hasUpdateItemRestrictions) return e.operations.supportsQuery ? "editing" : "load";
      }
      if (this.userHasFullEditingPrivileges && this.hasFullEditingRestrictions) return "editing";
      const t2 = this.editFieldsInfo;
      return (t2?.creatorField || t2?.editorField) && e?.operations.supportsEditing ? "editing" : null;
    }
    readCapabilitiesFromService(e, t2) {
      return C(t2, this.url);
    }
    readEditingInfo(e, t2) {
      const { editingInfo: i3 } = t2;
      return i3 ? { lastEditDate: null != i3.lastEditDate ? new Date(i3.lastEditDate) : null } : null;
    }
    get effectiveCapabilities() {
      const e = this.capabilities;
      if (!e) return null;
      const t2 = a(e), { operations: r2, editing: o2 } = t2;
      return se(this) ? (this.userHasUpdateItemPrivileges && (r2.supportsQuery = true), t2) : this.userHasUpdateItemPrivileges ? (r2.supportsAdd = r2.supportsDelete = r2.supportsEditing = r2.supportsQuery = r2.supportsUpdate = o2.supportsDeleteByOthers = o2.supportsGeometryUpdate = o2.supportsUpdateByOthers = true, t2) : (this.userHasFullEditingPrivileges && r2.supportsEditing && (r2.supportsAdd = r2.supportsDelete = r2.supportsUpdate = o2.supportsGeometryUpdate = true), t2);
    }
    get effectiveEditingEnabled() {
      return false;
    }
    readGlobalIdFieldFromService(e, t2) {
      return k(t2);
    }
    get hasFullEditingRestrictions() {
      const e = this.capabilities;
      if (!e || se(this)) return false;
      const { operations: t2, editing: i3 } = e;
      return t2.supportsEditing && !(t2.supportsAdd && t2.supportsDelete && t2.supportsUpdate && i3.supportsGeometryUpdate);
    }
    get hasUpdateItemRestrictions() {
      const e = this.capabilities;
      if (!e) return false;
      const { operations: t2, editing: i3 } = e;
      return se(this) ? !t2.supportsQuery : !(t2.supportsAdd && t2.supportsDelete && t2.supportsEditing && t2.supportsQuery && t2.supportsUpdate && i3.supportsDeleteByOthers && i3.supportsGeometryUpdate && i3.supportsUpdateByOthers);
    }
    readIsTableFromService(e, t2) {
      return "Table" === t2.type;
    }
    readMaxScale(e, t2) {
      return t2.effectiveMaxScale || e || 0;
    }
    readMinScale(e, t2) {
      return t2.effectiveMinScale || e || 0;
    }
    readObjectIdFieldFromService(e, t2) {
      return z2(t2);
    }
    get parsedUrl() {
      return s4(this);
    }
    readServiceDefinitionExpression(e, t2) {
      return t2.definitionQuery || t2.definitionExpression;
    }
    readUniqueIdFields(e, t2) {
      return t2.uniqueIdInfo?.OIDFieldContainsHashValue ? t2.uniqueIdInfo.fields : null;
    }
    readVersion(e, t2) {
      return N(t2);
    }
    get isUrlHostModified() {
      const { loaded: e, url: t2, _isUrlHostModified: i3 } = this;
      if (i3) return true;
      if (!e || !t2) return false;
      if (this.originIdOf("url") < 7) return false;
      const o2 = this.sourceJSON?.preferredHost;
      if (!o2) return false;
      if (!F(t2, `https://${o2}`, true)) return false;
      for (let s6 = 6; s6 >= 3; s6--) {
        const e2 = this.getAtOrigin("url", t(s6));
        if (e2) return !F(t2, e2, true);
      }
      return false;
    }
    applyPreferredHost(e) {
      const { url: t2, portalItem: i3 } = this;
      if (!t2 || !Q(i3)) return;
      const r2 = H();
      r2 && this._isUrlHostModificationEnabled && (this._set("url", r2), this._isUrlHostModified = true, i3 && W(i3, K()));
    }
    applyHostFromPortalItem() {
      const { url: e, portalItem: t2 } = this;
      if (!e || 7 === this.originIdOf("url") || !t2?.url || !Q(t2) || !s(t2, E.HOSTED_SERVICE) || F(e, t2.url, true) || !this._isUrlHostModificationEnabled) return;
      const i3 = vt(t2.url);
      this._set("url", At(e, i3)), this._isUrlHostModified = true;
    }
  };
  return __decorate([a2({ readOnly: true })], Z.prototype, "authenticationTriggerEvent", null), __decorate([a2({ readOnly: true, json: { read: (e) => e / 60 } })], Z.prototype, "cacheMaxAge", void 0), __decorate([a2({ readOnly: true, json: { read: false, origins: { service: { read: { source: ["advancedQueryCapabilities", "allowGeometryUpdates", "allowUpdateWithoutMValues", "archivingInfo", "capabilities", "datesInUnknownTimezone", "hasAttachments", "hasM", "hasZ", "isDataBranchVersioned", "isDataVersioned", "maxRecordCount", "maxRecordCountFactor", "maxUniqueIDCount", "ownershipBasedAccessControlForFeatures", "standardMaxRecordCount", "supportedQueryFormats", "supportsAdvancedQueries", "supportsApplyEditsWithGlobalIds", "supportsAttachmentsByUploadId", "supportsAttachmentsResizing", "supportsCalculate", "supportsCoordinatesQuantization", "supportsExceedsLimitStatistics", "supportsFieldDescriptionProperty", "supportsQuantizationEditMode", "supportsRollbackOnFailureParameter", "supportsStatistics", "supportsTruncate", "supportsValidateSql", "tileMaxRecordCount", "useStandardizedQueries"] } } } } })], Z.prototype, "capabilities", void 0), __decorate([o("service", "capabilities")], Z.prototype, "readCapabilitiesFromService", null), __decorate([a2({ type: String, json: { origins: { service: { read: { source: "copyrightText" } } } } })], Z.prototype, "copyright", void 0), __decorate([a2(l2("dateFieldsTimeReference"))], Z.prototype, "dateFieldsTimeZone", void 0), __decorate([a2({ type: Boolean })], Z.prototype, "datesInUnknownTimezone", void 0), __decorate([a2({ type: String, json: { origins: { service: { read: false, write: false } }, name: "layerDefinition.definitionExpression", write: { enabled: true, allowNull: true } } })], Z.prototype, "definitionExpression", void 0), __decorate([a2({ type: String, json: { origins: { service: { read: { source: "displayField" } } } } })], Z.prototype, "displayField", void 0), __decorate([a2({ readOnly: true, type: s2 })], Z.prototype, "editFieldsInfo", void 0), __decorate([a2({ readOnly: true })], Z.prototype, "editingInfo", void 0), __decorate([o("editingInfo")], Z.prototype, "readEditingInfo", null), __decorate([a2({ readOnly: true })], Z.prototype, "effectiveCapabilities", null), __decorate([a2()], Z.prototype, "effectiveEditingEnabled", null), __decorate([a2((() => {
    const e = a(m), t2 = e.json.origins;
    return t2["web-map"] = { read: false, write: false }, t2["portal-item"] = { read: false, write: false }, e;
  })())], Z.prototype, "elevationInfo", void 0), __decorate([a2()], Z.prototype, "fieldsIndex", void 0), __decorate([a2({ type: s3, json: { name: "layerDefinition.floorInfo", write: { layerContainerTypes: a3 } } })], Z.prototype, "floorInfo", void 0), __decorate([a2({ type: z, json: { origins: { service: { read: { source: "extent" } } } } })], Z.prototype, "fullExtent", void 0), __decorate([a2()], Z.prototype, "gdbVersion", void 0), __decorate([a2({ readOnly: true, type: a4, json: { read: { source: "geometryProperties" } } })], Z.prototype, "geometryFieldsInfo", void 0), __decorate([a2({ type: ["point", "polygon", "polyline", "multipoint", "multipatch", "mesh"], json: { origins: { service: { read: F2.read } } } })], Z.prototype, "geometryType", void 0), __decorate([a2({ type: String })], Z.prototype, "globalIdField", void 0), __decorate([o("service", "globalIdField", ["globalIdField", "fields"])], Z.prototype, "readGlobalIdFieldFromService", null), __decorate([a2({ readOnly: true })], Z.prototype, "hasFullEditingRestrictions", null), __decorate([a2({ type: Boolean, json: { origins: { service: { read: true } } } })], Z.prototype, "hasM", void 0), __decorate([a2({ readOnly: true })], Z.prototype, "hasUpdateItemRestrictions", null), __decorate([a2({ type: Boolean, json: { origins: { service: { read: true } } } })], Z.prototype, "hasZ", void 0), __decorate([a2({ readOnly: true, type: m2 })], Z.prototype, "heightModelInfo", void 0), __decorate([a2({ type: Date })], Z.prototype, "historicMoment", void 0), __decorate([a2({ type: q.ofType(n2), readOnly: true })], Z.prototype, "indexes", void 0), __decorate([a2({ readOnly: true })], Z.prototype, "isTable", void 0), __decorate([o("service", "isTable", ["type"])], Z.prototype, "readIsTableFromService", null), __decorate([a2({ type: Number, json: { origins: { service: { read: { source: "id" } }, "portal-item": { read: false, write: { target: "id" } } }, read: false } })], Z.prototype, "layerId", void 0), __decorate([a2(v)], Z.prototype, "maxScale", void 0), __decorate([o("service", "maxScale", ["maxScale", "effectiveMaxScale"])], Z.prototype, "readMaxScale", null), __decorate([a2(j)], Z.prototype, "minScale", void 0), __decorate([o("service", "minScale", ["minScale", "effectiveMinScale"])], Z.prototype, "readMinScale", null), __decorate([a2({ type: String })], Z.prototype, "objectIdField", void 0), __decorate([o("service", "objectIdField", ["objectIdField", "fields"])], Z.prototype, "readObjectIdFieldFromService", null), __decorate([a2({ readOnly: true })], Z.prototype, "parsedUrl", null), __decorate([a2(l2("preferredTimeReference"))], Z.prototype, "preferredTimeZone", void 0), __decorate([a2({ type: [s5], readOnly: true })], Z.prototype, "relationships", void 0), __decorate([a2({ type: Boolean })], Z.prototype, "returnM", void 0), __decorate([a2({ type: Boolean })], Z.prototype, "returnZ", void 0), __decorate([a2({ readOnly: true, json: { write: false } })], Z.prototype, "serverGens", void 0), __decorate([a2({ readOnly: true })], Z.prototype, "serviceDefinitionExpression", void 0), __decorate([o("service", "serviceDefinitionExpression", ["definitionQuery", "definitionExpression"])], Z.prototype, "readServiceDefinitionExpression", null), __decorate([a2({ type: String, readOnly: true, json: { read: false, origins: { service: { read: true } } } })], Z.prototype, "serviceItemId", void 0), __decorate([a2()], Z.prototype, "sourceJSON", void 0), __decorate([a2({ type: S, json: { origins: { service: { read: { source: "extent.spatialReference" } } } } })], Z.prototype, "spatialReference", void 0), __decorate([a2({ type: String, readOnly: true, json: { origins: { service: { read: true } } } })], Z.prototype, "subtypeField", void 0), __decorate([a2({ type: [a5], readOnly: true, json: { read: false, origins: { service: { read: true } } } })], Z.prototype, "subtypes", void 0), __decorate([a2({ type: String, json: { read: { source: "timeInfo.trackIdField" } } })], Z.prototype, "trackIdField", void 0), __decorate([a2({ type: [String], readOnly: true })], Z.prototype, "uniqueIdFields", void 0), __decorate([o("service", "uniqueIdFields", ["uniqueIdInfo.OIDFieldContainsHashValue", "uniqueIdInfo.fields"])], Z.prototype, "readUniqueIdFields", null), __decorate([a2(i2({ nonStandardUrlAllowed: true }))], Z.prototype, "url", void 0), __decorate([a2({ json: { origins: { service: { read: true } }, read: false } })], Z.prototype, "version", void 0), __decorate([o("service", "version", ["currentVersion", "capabilities", "drawingInfo", "hasAttachments", "htmlPopupType", "relationships", "timeInfo", "typeIdField", "types"])], Z.prototype, "readVersion", null), __decorate([a2({ readOnly: true })], Z.prototype, "isUrlHostModified", null), Z = __decorate([c("esri.layers.mixins.FeatureLayerBase")], Z), Z;
};

export {
  V
};
//# sourceMappingURL=chunk-WASOJFLJ.js.map
