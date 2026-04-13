import {
  n as n3,
  p
} from "./chunk-FRPW5NA3.js";
import {
  i
} from "./chunk-FLIHJ2WP.js";
import {
  n as n2
} from "./chunk-53GCD5BF.js";
import {
  o as o2
} from "./chunk-DL5A7PLL.js";
import {
  i as i2,
  s
} from "./chunk-RP2ZDN4P.js";
import {
  m as m2
} from "./chunk-DPKT4LYX.js";
import {
  k
} from "./chunk-MCLMCBJF.js";
import {
  u
} from "./chunk-J5YAKAE5.js";
import {
  M
} from "./chunk-YY44XNLW.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  f2 as f,
  m2 as m,
  w,
  y2 as y
} from "./chunk-LAAWMBRE.js";
import {
  a3 as a,
  c,
  o4 as o
} from "./chunk-JM4CKTH2.js";
import {
  L
} from "./chunk-WARIPJQI.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
async function r2(r3, n5, t, s2, a2, i3, l) {
  let d = null;
  if (null != t) {
    const o3 = `${r3}/nodepages/`, n6 = o3 + Math.floor(t.rootIndex / t.nodesPerPage);
    try {
      return { type: "page", rootPage: (await f(n6, { query: __spreadProps(__spreadValues({ f: "json" }, s2), { token: a2 }), responseType: "json", signal: l })).data, rootIndex: t.rootIndex, pageSize: t.nodesPerPage, lodMetric: t.lodSelectionMetricType, urlPrefix: o3 };
    } catch (g) {
      null != i3 && i3.warn("#fetchIndexInfo()", "Failed to load root node page. Falling back to node documents.", n6, g), d = g;
    }
  }
  if (!n5) return null;
  const p2 = n5?.split("/").pop(), c2 = `${r3}/nodes/`, u3 = c2 + p2;
  try {
    return { type: "node", rootNode: (await f(u3, { query: __spreadProps(__spreadValues({ f: "json" }, s2), { token: a2 }), responseType: "json", signal: l })).data, urlPrefix: c2 };
  } catch (g) {
    throw new r("sceneservice:root-node-missing", "Root node missing.", { pageError: d, nodeError: g, url: u3 });
  }
}

// node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js
var n4 = null;
function u2() {
  return n4;
}

// node_modules/@arcgis/core/layers/mixins/SceneService.js
var _ = (_2) => {
  const A = _2;
  let E = class extends A {
    constructor() {
      super(...arguments), this.spatialReference = null, this.fullExtent = null, this.heightModelInfo = null, this.minScale = 0, this.maxScale = 0, this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.copyright = null, this.sublayerTitleMode = "item-title", this.title = null, this.layerId = null, this.url = null, this.indexInfo = null, this._debouncedSaveOperations = L(async (e, t, r3) => {
        switch (e) {
          case 0:
            return this._save(t);
          case 1:
            return this._saveAs(r3, t);
        }
      });
    }
    readSpatialReference(e, t) {
      return L2(t);
    }
    readFullExtent(e, t, r3) {
      if (null != e && "object" == typeof e) {
        const i4 = null == e.spatialReference ? __spreadProps(__spreadValues({}, e), { spatialReference: L2(t) }) : e;
        return z.fromJSON(i4, r3);
      }
      const i3 = t.store, o3 = L2(t);
      return null == o3 || null == i3?.extent || !Array.isArray(i3.extent) || i3.extent.some((e2) => e2 < R) ? null : new z({ xmin: i3.extent[0], ymin: i3.extent[1], xmax: i3.extent[2], ymax: i3.extent[3], spatialReference: o3 });
    }
    parseVersionString(e) {
      const t = { major: Number.NaN, minor: Number.NaN, versionString: e }, r3 = e.split(".");
      return r3.length >= 2 && (t.major = parseInt(r3[0], 10), t.minor = parseInt(r3[1], 10)), t;
    }
    readVersion(e, t) {
      const r3 = t.store, i3 = null != r3.version ? r3.version.toString() : "";
      return this.parseVersionString(i3);
    }
    readTitlePortalItem(e) {
      return "item-title" !== this.sublayerTitleMode ? void 0 : e;
    }
    readTitleService(e, t) {
      if ("item-title" === this.sublayerTitleMode) return this.url ? w(this.url, t.name) : t.name;
      let r3 = t.name;
      if (!r3 && this.url) {
        const e2 = m(this.url);
        null != e2 && (r3 = e2.title);
      }
      const i3 = this.portalItem?.title;
      return "item-title-and-service-name" === this.sublayerTitleMode && i3 && (r3 = i3 + " - " + r3), y(r3);
    }
    get parsedUrl() {
      return s(this, { separator: "layers" });
    }
    async _fetchIndexAndUpdateExtent(e, t) {
      this.indexInfo = r2(this.parsedUrl?.path ?? "", this.rootNode, e, this.customParameters, this.apiKey, n.getLogger(this), t);
      const { fullExtent: r3 } = this;
      null == r3 || r3.hasZ || this._updateExtent(r3, await this.indexInfo);
    }
    _updateExtent(e, t) {
      if ("page" === t?.type) {
        const r3 = t.rootIndex % t.pageSize, i3 = t.rootPage?.nodes?.[r3];
        O(e, i3?.obb);
      } else if ("node" === t?.type) {
        const r3 = t.rootNode?.mbs;
        if (!Array.isArray(r3) || 4 !== r3.length || r3[0] < R) return;
        const i3 = r3[2], o3 = r3[3];
        e.zmin = i3 - o3, e.zmax = i3 + o3;
      }
    }
    async _fetchService(e) {
      if (null == this.url) throw new r("sceneservice:url-not-set", "Scene service can not be loaded without valid portal item or url");
      if (null == this.layerId && /SceneServer\/*$/i.test(this.url)) {
        const t = await this._fetchFirstLayerId(e);
        null != t && (this.layerId = t);
      }
      return this._fetchServiceLayer(e);
    }
    async _fetchFirstLayerId(e) {
      const r3 = await f(this.url ?? "", { query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }), responseType: "json", signal: e });
      if (r3.data && Array.isArray(r3.data.layers) && r3.data.layers.length > 0) return r3.data.layers[0].id;
    }
    async _fetchServiceLayer(e) {
      const r3 = await f(this.parsedUrl?.path ?? "", { query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }), responseType: "json", signal: e });
      r3.ssl && this.url && (this.url = this.url.replace(/^http:/i, "https:"));
      let i3 = false;
      if (r3.data.layerType && "Voxel" === r3.data.layerType && (i3 = true), i3) return this._fetchVoxelServiceLayer();
      const o3 = r3.data;
      this.read(o3, this._getServiceContext()), this.validateLayer(o3);
    }
    async _fetchVoxelServiceLayer(e) {
      const r3 = (await f(this.parsedUrl?.path + "/layer", { query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }), responseType: "json", signal: e })).data;
      this.read(r3, this._getServiceContext()), this.validateLayer(r3);
    }
    _getServiceContext() {
      return { origin: "service", portalItem: this.portalItem, portal: this.portalItem?.portal, url: this.parsedUrl };
    }
    async _ensureLoadBeforeSave() {
      await this.load(), "beforeSave" in this && "function" == typeof this.beforeSave && await this.beforeSave();
    }
    validateLayer(e) {
    }
    async _saveAs(e, t) {
      const i3 = __spreadValues(__spreadValues({}, P), t);
      let o3 = k.from(e);
      if (!o3) throw new r("sceneservice:portal-item-required", "_saveAs() requires a portal item to save to");
      o3.id && (o3 = o3.clone(), o3.id = null);
      const s2 = o3.portal || M.getDefault();
      await this._ensureLoadBeforeSave(), o3.type = U, o3.portal = s2;
      const a2 = o2(o3, "portal-item", true), l = { layers: [this.write({}, a2)] };
      return await Promise.all(a2.resources.pendingOperations ?? []), await this._validateAgainstJSONSchema(l, a2, i3), this.url && (o3.url = this.url), o3.title || (o3.title = this.title), T(o3, i3, 1), await s2.signIn(), await s2.user.addItem({ item: o3, folder: i3?.folder, data: l }), await p(this.resourceReferences, a2), this.portalItem = o3, i(a2), a2.portalItem = o3, o3;
    }
    async _save(e) {
      const t = __spreadValues(__spreadValues({}, P), e);
      if (!this.portalItem) throw new r("sceneservice:portal-item-not-set", "Portal item to save to has not been set on this SceneService");
      if (this.portalItem.type !== U) throw new r("sceneservice:portal-item-wrong-type", `Portal item needs to have type "${U}"`);
      await this._ensureLoadBeforeSave();
      const i3 = o2(this.portalItem, "portal-item", true), o3 = { layers: [this.write({}, i3)] };
      return await Promise.all(i3.resources.pendingOperations ?? []), await this._validateAgainstJSONSchema(o3, i3, t), this.url && (this.portalItem.url = this.url), this.portalItem.title || (this.portalItem.title = this.title), T(this.portalItem, t, 0), await n3(this.portalItem, o3, this.resourceReferences, i3), i(i3), this.portalItem;
    }
    async _validateAgainstJSONSchema(e, t, o3) {
      const s2 = o3?.validationOptions;
      n2(t, { errorName: "sceneservice:save" }, { ignoreUnsupported: s2?.ignoreUnsupported, supplementalUnsupportedErrors: ["scenemodification:unsupported"] });
      const a2 = s2?.enabled, n5 = u2();
      if (a2 && n5) {
        const t2 = (await n5()).validate(e, o3.portalItemLayerType);
        if (!t2.length) return;
        const a3 = `Layer item did not validate:
${t2.join("\n")}`;
        if (n.getLogger(this).error(`_validateAgainstJSONSchema(): ${a3}`), "throw" === s2.failPolicy) {
          const e2 = t2.map((e3) => new r("sceneservice:schema-validation", e3));
          throw new r("sceneservice-validate:error", "Failed to save layer item due to schema validation, see `details.errors`.", { validationErrors: e2 });
        }
      }
    }
  };
  return __decorate([a(u)], E.prototype, "id", void 0), __decorate([a({ type: S })], E.prototype, "spatialReference", void 0), __decorate([o("spatialReference", ["spatialReference", "store.indexCRS", "store.geographicCRS"])], E.prototype, "readSpatialReference", null), __decorate([a({ type: z })], E.prototype, "fullExtent", void 0), __decorate([o("fullExtent", ["fullExtent", "store.extent", "spatialReference", "store.indexCRS", "store.geographicCRS"])], E.prototype, "readFullExtent", null), __decorate([a({ readOnly: true, type: m2 })], E.prototype, "heightModelInfo", void 0), __decorate([a({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: { source: "minScale" }, write: false } } } })], E.prototype, "minScale", void 0), __decorate([a({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: { source: "maxScale" }, write: false } } } })], E.prototype, "maxScale", void 0), __decorate([a({ readOnly: true })], E.prototype, "version", void 0), __decorate([o("version", ["store.version"])], E.prototype, "readVersion", null), __decorate([a({ type: String, json: { read: { source: "copyrightText" } } })], E.prototype, "copyright", void 0), __decorate([a({ type: String, json: { read: false } })], E.prototype, "sublayerTitleMode", void 0), __decorate([a({ type: String })], E.prototype, "title", void 0), __decorate([o("portal-item", "title")], E.prototype, "readTitlePortalItem", null), __decorate([o("service", "title", ["name"])], E.prototype, "readTitleService", null), __decorate([a({ type: Number, json: { origins: { service: { read: { source: "id" } }, "portal-item": { write: { target: "id", isRequired: true, ignoreOrigin: true }, read: false } } } })], E.prototype, "layerId", void 0), __decorate([a(i2({ separator: "layers" }))], E.prototype, "url", void 0), __decorate([a({ readOnly: true })], E.prototype, "parsedUrl", null), __decorate([a({ readOnly: true })], E.prototype, "store", void 0), __decorate([a({ type: String, readOnly: true, json: { read: { source: "store.rootNode" } } })], E.prototype, "rootNode", void 0), E = __decorate([c("esri.layers.mixins.SceneService")], E), E;
};
var R = -1e38;
function L2(e) {
  if (null != e.spatialReference) return S.fromJSON(e.spatialReference);
  const t = e.store, r3 = t.indexCRS || t.geographicCRS, i3 = r3 && parseInt(r3.slice(r3.lastIndexOf("/") + 1), 10);
  return null != i3 ? new S(i3) : null;
}
function O(e, t) {
  if (null == t?.center || null == t.halfSize) throw new r("sceneservice:invalid-node-page", "Invalid node page.");
  if (t.center[0] < R) return;
  const i3 = t.halfSize, o3 = t.center[2], s2 = Math.sqrt(i3[0] * i3[0] + i3[1] * i3[1] + i3[2] * i3[2]);
  e.zmin = o3 - s2, e.zmax = o3 + s2;
}
function T(e, t, r3) {
  e.typeKeywords || (e.typeKeywords = []);
  const i3 = t.getTypeKeywords();
  for (const o3 of i3) e.typeKeywords.push(o3);
  e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((e2, t2, r4) => r4.indexOf(e2) === t2), 1 === r3 && (e.typeKeywords = e.typeKeywords.filter((e2) => "Hosted Service" !== e2)));
}
var U = "Scene Service";
var P = { getTypeKeywords: () => [], portalItemLayerType: "unknown", validationOptions: { enabled: true, ignoreUnsupported: false, failPolicy: "throw" } };

export {
  r2 as r,
  _,
  O
};
//# sourceMappingURL=chunk-O47MC6AY.js.map
