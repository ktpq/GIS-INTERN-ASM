import {
  n as n4
} from "./chunk-A3PBLCOS.js";
import {
  s as s2
} from "./chunk-CR64HCKH.js";
import {
  s
} from "./chunk-HF43L7YV.js";
import {
  e,
  i,
  o as o2,
  t
} from "./chunk-CR2FSXZK.js";
import {
  g,
  l as l2
} from "./chunk-NF4WV2F4.js";
import {
  a as a2,
  h,
  l
} from "./chunk-CD6IOUFB.js";
import {
  y3 as y
} from "./chunk-DHIQ5CF2.js";
import {
  n as n3
} from "./chunk-LHMCLOXR.js";
import {
  n as n2
} from "./chunk-JADLUMUQ.js";
import {
  a3 as a,
  c,
  o4 as o,
  r4 as r
} from "./chunk-GUGGSMY4.js";
import {
  n2 as n
} from "./chunk-6SPQI6I6.js";
import {
  N
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/networks/support/CircuitPathConnectivityElement.js
var c2 = class extends n2 {
  constructor(e3) {
    super(e3), this.edgeElement = null, this.junctionElement = null;
  }
  readEdgeElement(e3, t3) {
    return new s({ networkSourceId: t3.edgeNetworkSourceId, globalId: t3.edgeGlobalId, objectId: t3.edgeObjectId, positionFrom: t3.edgePositionFrom, positionTo: t3.edgePositionTo, firstUnit: t3.edgeFirstUnit, lastUnit: t3.edgeLastUnit });
  }
  writeEdgeElement(e3, t3) {
    t3.edgeNetworkSourceId = e3.networkSourceId, t3.edgeGlobalId = e3.globalId, t3.edgeObjectId = e3.objectId, t3.edgePositionFrom = e3.positionFrom, t3.edgePositionTo = e3.positionTo, t3.edgeFirstUnit = e3.firstUnit, t3.edgeLastUnit = e3.lastUnit;
  }
  readJunctionElement(e3, t3) {
    return new s({ networkSourceId: t3.junctionNetworkSourceId, globalId: t3.junctionGlobalId, objectId: t3.junctionObjectId, firstUnit: t3.junctionFirstUnit, lastUnit: t3.junctionLastUnit });
  }
  writeJunctionElement(e3, t3) {
    t3.junctionNetworkSourceId = e3.networkSourceId, t3.junctionGlobalId = e3.globalId, t3.junctionObjectId = e3.objectId, t3.junctionFirstUnit = e3.firstUnit, t3.junctionLastUnit = e3.lastUnit;
  }
};
__decorate([a({ type: s, json: { read: { source: ["edgeNetworkSourceId", "edgeGlobalId", "edgeObjectId", "edgePositionFrom", "edgePositionTo", "edgeFirstUnit", "edgeLastUnit"] }, write: true } })], c2.prototype, "edgeElement", void 0), __decorate([o("edgeElement")], c2.prototype, "readEdgeElement", null), __decorate([r("edgeElement")], c2.prototype, "writeEdgeElement", null), __decorate([a({ type: s, json: { read: { source: ["junctionNetworkSourceId", "junctionGlobalId", "junctionObjectId", "junctionFirstUnit", "junctionLastUnit"] }, write: true } })], c2.prototype, "junctionElement", void 0), __decorate([o("junctionElement")], c2.prototype, "readJunctionElement", null), __decorate([r("junctionElement")], c2.prototype, "writeJunctionElement", null), c2 = __decorate([c("esri.networks.support.CircuitPathConnectivityElement")], c2);
var s3 = c2;

// node_modules/@arcgis/core/networks/support/CircuitPath.js
var n5 = class extends n2 {
  constructor(t3) {
    super(t3), this.pathId = null, this.order = null, this.startingPoint = null, this.stoppingPoint = null, this.pathConnectivity = [], this.geometry = null;
  }
};
__decorate([a({ type: Number, json: { write: true } })], n5.prototype, "pathId", void 0), __decorate([a({ type: Number, json: { write: true } })], n5.prototype, "order", void 0), __decorate([a({ type: n4, json: { write: true } })], n5.prototype, "startingPoint", void 0), __decorate([a({ type: n4, json: { write: true } })], n5.prototype, "stoppingPoint", void 0), __decorate([a({ type: [s3], json: { write: true } })], n5.prototype, "pathConnectivity", void 0), __decorate([a({ type: y, json: { write: true } })], n5.prototype, "geometry", void 0), n5 = __decorate([c("esri.networks.support.CircuitPath")], n5);
var y2 = n5;

// node_modules/@arcgis/core/networks/support/Subcircuit.js
var p = class extends n3(n2) {
  constructor(t3) {
    super(t3), this.name = null, this.globalId = null, this.providerId = null, this.consumerId = null, this.state = "available", this.attributes = null, this._updateHandler = (t4) => {
      const { subcircuitGlobalId: e3, name: r2, subcircuit: i2 } = t4;
      (e3 && this.globalId === e3 || this.name === r2) && this.read(i2);
    };
  }
  initialize() {
    this.addHandles([a2(() => this, "update", this._updateHandler)]);
  }
  getAttribute(t3) {
    return this.attributes?.[t3];
  }
  setAttribute(t3, e3) {
    this.attributes ? this.attributes[t3] = e3 : this.attributes = { [t3]: e3 };
  }
};
__decorate([a({ type: String, json: { write: true } })], p.prototype, "name", void 0), __decorate([a({ type: String, json: { write: true } })], p.prototype, "globalId", void 0), __decorate([a({ type: String })], p.prototype, "providerId", void 0), __decorate([a({ type: String })], p.prototype, "consumerId", void 0), __decorate([a({ type: o2.apiValues, json: { type: o2.jsonValues, read: { reader: o2.read, source: "state" }, write: { writer: o2.write, target: "state" } } })], p.prototype, "state", void 0), __decorate([a({ json: { write: { allowNull: true, writer: (t3, e3) => e3.attributes = t3 ?? {} } } })], p.prototype, "attributes", void 0), p = __decorate([c("esri.networks.support.Subcircuit")], p);

// node_modules/@arcgis/core/networks/support/CircuitSection.js
var d = class extends n3(n2) {
  constructor(t3) {
    super(t3), this.attributes = null, this.globalId = null, this.sectionId = null, this.role = "start-and-end", this.sectionType = "physical", this.startLocation = null, this.stopLocation = null, this.subcircuit = null, this.path = null, this._updateHandler = (t4) => {
      const { sectionId: i2, section: o4 } = t4;
      this.sectionId === i2 && this.read(o4);
    };
  }
  initialize() {
    this.addHandles([a2(() => this, "update", this._updateHandler)]);
  }
  normalizeCtorArgs(t3) {
    if (void 0 === t3) return t3;
    const { sectionId: i2, startLocation: o4, stopLocation: s4, subcircuit: r2 } = t3;
    return (o4 || s4) && r2 ? (delete t3.startLocation, delete t3.stopLocation, n.getLogger(this).warn("Cannot instantiate CircuitSection with both start/stop locations and subcircuit.", `CircuitSection with ID '${i2}' was defaulted to having a subcircuit only.`)) : (o4 && !s4 || !o4 && s4) && !r2 && n.getLogger(this).warn(`CircuitSection with ID '${i2}' must have both start and stop locations.`, "Create/alter operations involving this section will fail unless both are populated."), t3;
  }
  setStartStopLocations(t3, i2) {
    this.startLocation = t3, this.stopLocation = i2, this.subcircuit = null;
  }
  setSubcircuit(t3) {
    this.subcircuit = t3, this.startLocation = null, this.stopLocation = null;
  }
  getAttribute(t3) {
    return this.attributes?.[t3];
  }
  setAttribute(t3, i2) {
    this.attributes ? this.attributes[t3] = i2 : this.attributes = { [t3]: i2 };
  }
};
__decorate([a({ json: { write: { allowNull: true, writer: (t3, i2) => i2.attributes = t3 ?? {} } } })], d.prototype, "attributes", void 0), __decorate([a({ type: String, json: { write: true } })], d.prototype, "globalId", void 0), __decorate([a({ type: Number, json: { write: true } })], d.prototype, "sectionId", void 0), __decorate([a({ type: e.apiValues, json: { type: e.jsonValues, read: e.read }, readOnly: true })], d.prototype, "role", void 0), __decorate([a({ type: i.apiValues, json: { type: i.jsonValues, read: i.read, write: i.write } })], d.prototype, "sectionType", void 0), __decorate([a({ type: s2, json: { write: true } })], d.prototype, "startLocation", void 0), __decorate([a({ type: s2, json: { write: true } })], d.prototype, "stopLocation", void 0), __decorate([a({ type: p, json: { write: true } })], d.prototype, "subcircuit", void 0), __decorate([a({ type: y2, readOnly: true })], d.prototype, "path", void 0), d = __decorate([c("esri.networks.support.CircuitSection")], d);

// node_modules/@arcgis/core/networks/support/jsonHelpers.js
var t2 = /* @__PURE__ */ new Set(["objectid", "circuitid", "sectionid", "startlocationsourceid", "startlocationid", "startlocationfirstunit", "startlocationlastunit", "stoplocationsourceid", "stoplocationid", "stoplocationfirstunit", "stoplocationlastunit", "role", "sectiontype", "globalid", "created_user", "created_date", "last_edited_user", "last_edited_date"]);
var e2 = /* @__PURE__ */ new Set(["objectid", "name", "providerid", "consumerid", "globalid", "created_user", "created_date", "last_edited_user", "last_edited_date"]);
function o3(e3, o4) {
  const a4 = e3.fieldsIndex, n6 = {}, s4 = o4.attributes[a4.get("sectionId").name];
  null != s4 && (n6.sectionId = s4);
  const i2 = o4.attributes[a4.get("startLocationSourceId").name], r2 = o4.attributes[a4.get("startLocationId").name], l3 = o4.attributes[a4.get("startLocationFirstUnit").name], c3 = o4.attributes[a4.get("startLocationLastUnit").name];
  null != i2 && null != r2 && (n6.startLocation = { sourceId: i2, globalId: r2, firstUnit: l3, lastUnit: c3 });
  const d2 = o4.attributes[a4.get("stopLocationSourceId").name], u = o4.attributes[a4.get("stopLocationId").name], b = o4.attributes[a4.get("stopLocationFirstUnit").name], m = o4.attributes[a4.get("stopLocationLastUnit").name];
  null != d2 && null != u && (n6.stopLocation = { sourceId: d2, globalId: u, firstUnit: b, lastUnit: m });
  const g2 = a4.get("role"), I = o4.attributes[g2.name];
  if (null != I) {
    const t3 = g2.domain;
    n6.role = t3.getName(I);
  }
  const p2 = a4.get("sectionType"), L2 = o4.attributes[p2.name];
  if (null != L2) {
    const t3 = p2.domain;
    n6.sectionType = t3.getName(L2);
  }
  const f = o4.attributes[a4.get("globalId").name];
  null != f && (n6.globalId = f);
  const _ = {};
  for (const [U, v] of Object.entries(o4.attributes)) t2.has(U.toLocaleLowerCase()) || (_[U] = v);
  return n6.attributes = _, n6;
}
function a3(t3, o4) {
  const a4 = t3.fieldsIndex, n6 = {}, s4 = o4.attributes[a4.get("globalId").name];
  null != s4 && (n6.globalId = s4);
  const i2 = o4.attributes[a4.get("name").name];
  null != i2 && (n6.name = i2);
  const r2 = o4.attributes[a4.get("providerId").name];
  null != r2 && (n6.providerId = r2);
  const l3 = o4.attributes[a4.get("consumerId").name];
  null != l3 && (n6.consumerId = l3), n6.state = l3 ? r2 === l3 ? "Reserved" : "Consumed" : "Available";
  const c3 = {};
  for (const [d2, u] of Object.entries(o4.attributes)) e2.has(d2.toLocaleLowerCase()) || (c3[d2] = u);
  return n6.attributes = c3, n6;
}

// node_modules/@arcgis/core/networks/support/Circuit.js
var L = /* @__PURE__ */ new Set(["objectid", "name", "sectionorder", "status", "isdeleted", "lastverified", "lastexported", "startlocationsourceid", "startlocationid", "startlocationfirstunit", "startlocationlastunit", "stoplocationsourceid", "stoplocationid", "stoplocationfirstunit", "stoplocationlastunit", "issectioned", "circuittype", "conflictcontainerstate", "globalid", "created_user", "created_date", "last_edited_user", "last_edited_date"]);
var S = class extends n3(n2) {
  constructor(t3) {
    super(t3), this._sectionIdLookup = /* @__PURE__ */ new Map(), this._status = "dirty", this._lastVerifiedTime = null, this._lastExportedTime = null, this._isDeleted = false, this.attributes = null, this.circuitManager = null, this.circuitType = "physical", this.globalId = null, this.name = null, this.sections = null, this.startLocation = null, this.stopLocation = null, this.subcircuits = [], this._applyEditsHandler = (t4) => {
      const { serviceUrl: i2, gdbVersion: e3, result: s4 } = t4;
      if (this.circuitManager) {
        const t5 = this.circuitManager.featureServiceUrl, s5 = this.circuitManager.gdbVersion;
        if (i2 !== t5 || !g(i2, e3, s5)) return;
      }
      s4.then((s5) => {
        if (!this.circuitManager) return;
        const r2 = this.circuitManager.featureServiceUrl, o4 = this.circuitManager.gdbVersion;
        if (i2 !== r2 || !g(i2, e3, o4)) return;
        const a4 = this.circuitManager.circuitTable, c3 = this.circuitManager.circuitSectionTable, n6 = this.circuitManager.subcircuitTable;
        if (!a4.loaded || !c3.loaded || !n6.loaded) return void console.warn(`Circuit tables not loaded yet, skipping edit handling for circuit ${this.name}.`);
        const u = a4?.layerId, d2 = c3?.layerId, p2 = n6?.layerId, h2 = s5.editedFeatures?.find(({ layerId: t5 }) => t5 === u), b = s5.editedFeatures?.find(({ layerId: t5 }) => t5 === d2), g2 = s5.editedFeatures?.find(({ layerId: t5 }) => t5 === p2);
        if (!h2 && !b && !g2) return;
        const f = { serviceUrl: t4.serviceUrl, layerId: u, gdbVersion: t4.gdbVersion, globalId: this.globalId, circuitEdit: null, sectionAdds: [], sectionUpdates: [], sectionDeletes: [], sectionSubcircuits: [], subcircuitAdds: [], subcircuitUpdates: [], subcircuitDeletes: [] };
        if (h2) {
          const { adds: t5, updates: i3 } = h2.editedFeatures, e4 = a4.globalIdField, s6 = t5.find(({ attributes: t6 }) => t6[e4] === this.globalId), r3 = i3.find(({ current: t6 }) => t6.attributes[e4] === this.globalId);
          f.circuitEdit = s6 ?? r3?.current;
        }
        if (b) {
          const { adds: t5, updates: i3, deletes: e4 } = b.editedFeatures, s6 = c3.fieldsIndex.get("circuitId").name, r3 = t5.filter(({ attributes: t6 }) => t6[s6] === this.globalId), o5 = i3.filter(({ original: t6 }) => t6.attributes[s6] === this.globalId), a5 = e4.filter(({ attributes: t6 }) => t6[s6] === this.globalId);
          f.sectionAdds = r3, f.sectionUpdates = o5, f.sectionDeletes = a5;
        }
        if (g2) {
          const { adds: t5, updates: i3, deletes: e4 } = g2.editedFeatures, s6 = n6.fieldsIndex.get("providerId").name, r3 = n6.fieldsIndex.get("consumerId").name, o5 = [], a5 = [], c4 = [];
          t5.forEach((t6) => {
            t6.attributes[s6] === this.globalId ? o5.push(t6) : t6.attributes[r3] === this.globalId && c4.push(t6);
          }), i3.forEach((t6) => {
            t6.original.attributes[s6] === this.globalId ? a5.push(t6) : t6.current.attributes[r3] === this.globalId && c4.push(t6.current);
          });
          const u2 = e4.filter(({ attributes: t6 }) => t6[s6] === this.globalId);
          f.subcircuitAdds = o5, f.subcircuitUpdates = a5, f.subcircuitDeletes = u2, f.sectionSubcircuits = c4;
        }
        this.emit("edits", f);
      }).catch((t5) => {
        console.error("Error processing apply edits result for circuit edits.", t5);
      });
    }, this._editsHandler = (t4) => {
      const { serviceUrl: i2, layerId: e3, gdbVersion: s4, globalId: r2, circuitEdit: o4 } = t4;
      if (!this.circuitManager) return;
      const a4 = this.circuitManager.circuitTable, c3 = a4.layerId, n6 = this.circuitManager.featureServiceUrl, u = this.circuitManager.gdbVersion;
      if (i2 !== n6 || !g(i2, s4, u) || e3 !== c3 || r2 !== this.globalId) return;
      this._handleCircuitEdits(o4);
      const d2 = a4.fieldsIndex.get("sectionOrder").name, p2 = o4?.attributes[d2], h2 = p2 ? JSON.parse(p2) : null;
      this._handleSectionEdits(t4, h2), this._handleSubcircuitEdits(t4);
    };
  }
  initialize() {
    this.addHandles([l(() => this.sections, (t3) => {
      this._sectionIdLookup.clear(), null != t3 && Array.from(t3.keys()).forEach((t4) => this._sectionIdLookup.set(t4.sectionId, t4));
    }, h), l2(this._applyEditsHandler), a2(() => this, "edits", this._editsHandler)]);
  }
  normalizeCtorArgs(t3) {
    if (void 0 === t3) return t3;
    const { name: i2, startLocation: e3, stopLocation: s4, sections: o4 } = t3;
    return (e3 || s4) && o4 ? (delete t3.startLocation, delete t3.stopLocation, n.getLogger(this).warn("Cannot instantiate Circuit with both start/stop locations and sections.", `Circuit '${i2}' was defaulted to having sections only.`)) : (e3 && !s4 || !e3 && s4) && !o4 && n.getLogger(this).warn(`Non-sectioned circuit '${i2}' must have both start and stop locations.`, "Create/alter operations involving this circuit will fail unless both are populated."), t3;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  readIsDeleted(t3, i2) {
    const e3 = i2.isDeleted;
    return this._isDeleted = e3 ?? false, this._isDeleted;
  }
  get isSectioned() {
    return null == this.startLocation && null == this.stopLocation && null != this.sections;
  }
  get lastExportedTime() {
    return this._lastExportedTime;
  }
  readLastExportedTime(t3, i2) {
    const e3 = i2.lastExportedTime;
    return this._lastExportedTime = "number" == typeof e3 ? new Date(e3) : null, this._lastExportedTime;
  }
  get lastVerifiedTime() {
    return this._lastVerifiedTime;
  }
  readLastVerifiedTime(t3, i2) {
    const e3 = i2.lastVerifiedTime;
    return this._lastVerifiedTime = "number" == typeof e3 ? new Date(e3) : null, this._lastVerifiedTime;
  }
  readSections(t3, i2) {
    const { sectionOrder: e3, sections: s4 } = i2;
    return null == s4 ? null : (this._sectionIdLookup.clear(), s4.forEach((t4) => this._sectionIdLookup.set(t4.sectionId, d.fromJSON(t4))), this._createSectionMap(e3));
  }
  writeSections(t3, i2) {
    const e3 = {}, s4 = [];
    t3?.forEach((t4, i3) => {
      const r2 = i3.sectionId.toString(), o4 = t4.map((t5) => t5.sectionId);
      e3[r2] = o4, s4.push(i3.toJSON());
    }), i2.sectionOrder = e3, i2.sections = s4;
  }
  get status() {
    return this._status;
  }
  readStatus(t3, i2) {
    const e3 = i2.status;
    return this._status = e3 ? t.fromJSON(e3) : "dirty", this._status;
  }
  _createSectionMap(t3, e3 = /* @__PURE__ */ new Map()) {
    if (e3.clear(), null == t3) {
      for (const t4 of this._sectionIdLookup.values()) e3.set(t4, []);
      return e3;
    }
    for (const [s4, r2] of Object.entries(t3)) {
      const t4 = Number(s4), o4 = this._sectionIdLookup.get(t4);
      if (null == o4) continue;
      const a4 = r2.map((t5) => this._sectionIdLookup.get(t5)).filter(N);
      e3.set(o4, a4);
    }
    return e3;
  }
  _handleCircuitEdits(t3) {
    t3 && (this._handleSystemPropertyEdits(t3), this._handleUserDefinedAttributeEdits(t3));
  }
  _handleSystemPropertyEdits(t3) {
    if (!this.circuitManager) return;
    const i2 = this.circuitManager.circuitTable.fieldsIndex, e3 = this._getCircuitAttribute(t3, "lastExported");
    void 0 !== e3 && (this._lastExportedTime = e3 ? new Date(e3) : null);
    const s4 = this._getCircuitAttribute(t3, "lastVerified");
    void 0 !== s4 && (this._lastVerifiedTime = s4 ? new Date(s4) : null);
    const r2 = this._getCircuitAttribute(t3, "isDeleted");
    void 0 !== r2 && (this._isDeleted = 0 !== r2);
    if (0 === this._getCircuitAttribute(t3, "isSectioned")) {
      const i3 = this._getCircuitAttribute(t3, "startLocationSourceId"), e4 = this._getCircuitAttribute(t3, "startLocationId"), s5 = this._getCircuitAttribute(t3, "startLocationFirstUnit"), r3 = this._getCircuitAttribute(t3, "startLocationLastUnit"), o5 = this._getCircuitAttribute(t3, "stopLocationSourceId"), a5 = this._getCircuitAttribute(t3, "stopLocationId"), c4 = this._getCircuitAttribute(t3, "stopLocationFirstUnit"), n7 = this._getCircuitAttribute(t3, "stopLocationLastUnit");
      this.setStartStopLocations(new s2({ sourceId: i3, globalId: e4, firstUnit: s5, lastUnit: r3 }), new s2({ sourceId: o5, globalId: a5, firstUnit: c4, lastUnit: n7 }));
    }
    const o4 = i2.get("circuitType"), a4 = this._getCircuitAttribute(t3, "circuitType");
    if (null != a4) {
      const t4 = o4.domain.getName(a4);
      this.circuitType = i.read(t4);
    }
    const c3 = i2.get("status"), n6 = this._getCircuitAttribute(t3, "status");
    if (null != n6) {
      const t4 = c3.domain.getName(n6);
      this._status = t.fromJSON(t4);
    }
    const u = i2.get("name").name, l3 = t3.attributes[u];
    void 0 !== l3 && (this.name = l3);
  }
  _handleUserDefinedAttributeEdits(t3) {
    const i2 = {};
    for (const [e3, s4] of Object.entries(t3.attributes)) L.has(e3.toLocaleLowerCase()) || (i2[e3] = s4);
    this.attributes = i2;
  }
  _applySectionEdits(t3, i2, e3) {
    if (!this.circuitManager) return;
    const { sectionSubcircuits: s4 } = t3, r2 = this.circuitManager.subcircuitTable, o4 = this.circuitManager.telecomDomainNetwork.circuitSources?.find((t4) => "esriUNFCUTSubcircuit" === t4.utilityNetworkFeatureClassUsageType)?.sourceId;
    if (e3.startLocation?.sourceId === o4 && !e3.stopLocation) {
      const t4 = r2.globalIdField, i3 = s4?.find((i4) => i4.attributes[t4] === e3.startLocation.globalId);
      if (i3) {
        const t5 = a3(r2, i3);
        e3.subcircuit = t5, e3.startLocation = void 0;
      }
    }
    const a4 = this._sectionIdLookup.get(i2);
    if (a4) {
      const s5 = this.circuitManager.circuitSectionTable.layerId;
      a4.emit("update", { serviceUrl: t3.serviceUrl, layerId: s5, gdbVersion: t3.gdbVersion, circuitGlobalId: this.globalId, sectionId: i2, section: e3 });
    } else {
      const t4 = d.fromJSON(e3);
      this._sectionIdLookup.set(t4.sectionId, t4);
    }
  }
  _handleSectionEdits(t3, i2) {
    if (!this.circuitManager) return;
    const { sectionAdds: e3, sectionUpdates: s4, sectionDeletes: r2 } = t3, o4 = this.circuitManager.circuitSectionTable, a4 = o4.fieldsIndex, c3 = a4.get("globalId").name, n6 = a4.get("sectionId").name;
    r2.forEach((t4) => {
      const i3 = t4.attributes[n6];
      if (void 0 !== i3) return void this._sectionIdLookup.delete(i3);
      const e4 = t4.attributes[c3], s5 = Array.from(this._sectionIdLookup.values()).find((t5) => t5.globalId === e4);
      s5 && this._sectionIdLookup.delete(s5.sectionId);
    }), s4.forEach((i3) => {
      const e4 = i3.original, s5 = i3.current, r3 = o3(o4, s5);
      this._applySectionEdits(t3, e4.attributes[n6], r3);
    }), e3.forEach((i3) => {
      const e4 = o3(o4, i3);
      this._applySectionEdits(t3, i3.attributes[n6], e4);
    }), this.sections = this._createSectionMap(i2, this.sections ?? void 0);
  }
  _handleSubcircuitEdits(t3) {
    if (!this.circuitManager) return;
    const { subcircuitAdds: i2, subcircuitUpdates: e3, subcircuitDeletes: s4 } = t3, r2 = this.circuitManager.subcircuitTable, o4 = r2.layerId, a4 = r2.fieldsIndex, c3 = r2.globalIdField, n6 = a4.get("name").name;
    s4.forEach((t4) => {
      const i3 = t4.attributes[c3], e4 = this.subcircuits?.findIndex((t5) => t5.globalId === i3);
      -1 !== e4 && this.subcircuits?.splice(e4, 1);
    }), e3.forEach((i3) => {
      const e4 = i3.original, s5 = i3.current, a5 = e4.attributes[c3], u = e4.attributes[n6], l3 = a3(r2, s5), d2 = this.subcircuits.find((t4) => t4.globalId === a5 || t4.name.toLocaleLowerCase() === u.toLocaleLowerCase()) ?? this.subcircuits.find((t4) => t4.name.toLocaleLowerCase() === l3.name.toLocaleLowerCase());
      if (d2) d2.emit("update", { serviceUrl: t3.serviceUrl, layerId: o4, gdbVersion: t3.gdbVersion, circuitGlobalId: this.globalId, subcircuitGlobalId: a5, name: l3.name, subcircuit: l3 });
      else {
        const t4 = p.fromJSON(l3);
        this.subcircuits.push(t4);
      }
    }), i2.forEach((i3) => {
      const e4 = a3(r2, i3), s5 = i3.attributes[n6], a5 = i3.attributes[c3], u = this.subcircuits.find((t4) => t4.name.toLocaleLowerCase() === s5.toLocaleLowerCase());
      if (u) u.emit("update", { serviceUrl: t3.serviceUrl, layerId: o4, gdbVersion: t3.gdbVersion, circuitGlobalId: this.globalId, subcircuitGlobalId: a5, name: e4.name, subcircuit: e4 });
      else {
        const t4 = p.fromJSON(e4);
        this.subcircuits.push(t4);
      }
    });
  }
  _getCircuitAttribute(t3, i2) {
    const e3 = this.circuitManager?.circuitTable?.fieldsIndex.get(i2)?.name;
    return t3.attributes[e3 ?? ""];
  }
  getSectionById(t3) {
    return this._sectionIdLookup.get(t3) ?? null;
  }
  setStartStopLocations(t3, i2) {
    this.startLocation = t3, this.stopLocation = i2, this.sections = null;
  }
  setSections(t3) {
    this.sections = t3, this.startLocation = null, this.stopLocation = null;
  }
  getAttribute(t3) {
    return this.attributes?.[t3];
  }
  setAttribute(t3, i2) {
    this.attributes ? this.attributes[t3] = i2 : this.attributes = { [t3]: i2 };
  }
};
__decorate([a({ json: { write: { allowNull: true, writer: (t3, i2) => i2.attributes = t3 ?? {} } } })], S.prototype, "attributes", void 0), __decorate([a()], S.prototype, "circuitManager", void 0), __decorate([a({ type: i.apiValues, json: { type: i.jsonValues, read: i.read, write: i.write } })], S.prototype, "circuitType", void 0), __decorate([a({ type: String, json: { write: true } })], S.prototype, "globalId", void 0), __decorate([a({ type: Boolean, readOnly: true })], S.prototype, "isDeleted", null), __decorate([o("isDeleted")], S.prototype, "readIsDeleted", null), __decorate([a({ type: Boolean, json: { write: true }, readOnly: true })], S.prototype, "isSectioned", null), __decorate([a({ type: Date, readOnly: true })], S.prototype, "lastExportedTime", null), __decorate([o("lastExportedTime")], S.prototype, "readLastExportedTime", null), __decorate([a({ type: Date, readOnly: true })], S.prototype, "lastVerifiedTime", null), __decorate([o("lastVerifiedTime")], S.prototype, "readLastVerifiedTime", null), __decorate([a({ type: String, json: { write: true } })], S.prototype, "name", void 0), __decorate([a({ json: { read: { source: ["sectionOrder", "sections"] }, write: true } })], S.prototype, "sections", void 0), __decorate([o("sections")], S.prototype, "readSections", null), __decorate([r("sections")], S.prototype, "writeSections", null), __decorate([a({ type: s2, json: { write: true } })], S.prototype, "startLocation", void 0), __decorate([a({ type: t.apiValues, json: { type: t.jsonValues, read: t.read } })], S.prototype, "status", null), __decorate([o("status")], S.prototype, "readStatus", null), __decorate([a({ type: s2, json: { write: true } })], S.prototype, "stopLocation", void 0), __decorate([a({ type: [p], json: { write: true } })], S.prototype, "subcircuits", void 0), S = __decorate([c("esri.networks.support.Circuit")], S);

export {
  y2 as y,
  S
};
//# sourceMappingURL=chunk-JUD2NJ54.js.map
