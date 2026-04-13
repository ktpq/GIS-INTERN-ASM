import {
  T,
  w
} from "./chunk-TFKEOGZ6.js";
import {
  a as a2
} from "./chunk-W3KPPCSW.js";
import {
  m
} from "./chunk-4QSSUPBC.js";
import {
  Z
} from "./chunk-2OF3JE3F.js";
import {
  c as c2,
  d
} from "./chunk-5EUDKAG7.js";
import {
  D,
  _,
  a3 as a,
  c,
  o3 as o,
  r4 as r2,
  t3 as t
} from "./chunk-LV7AMIAU.js";
import {
  r3 as r
} from "./chunk-IDI4VM7T.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/mixins/operationalLayers.js
var e = { ArcGISAnnotationLayer: true, ArcGISDimensionLayer: true, ArcGISFeatureLayer: true, ArcGISImageServiceLayer: true, ArcGISImageServiceVectorLayer: true, ArcGISMapServiceLayer: true, ArcGISStreamLayer: true, ArcGISTiledImageServiceLayer: true, ArcGISTiledMapServiceLayer: true, ArcGISVideoLayer: true, BingMapsAerial: true, BingMapsHybrid: true, BingMapsRoad: true, CatalogLayer: true, CSV: true, GeoJSON: true, GeoRSS: true, GroupLayer: true, KML: true, KnowledgeGraphLayer: true, MediaLayer: true, OGCFeatureLayer: true, OrientedImageryLayer: true, ParquetLayer: true, SubtypeGroupLayer: true, VectorTileLayer: true, WCS: true, WFS: true, WMS: true, WebTiledLayer: true };
var r3 = { ArcGISImageServiceLayer: true, ArcGISImageServiceVectorLayer: true, ArcGISMapServiceLayer: true, ArcGISTiledImageServiceLayer: true, ArcGISTiledMapServiceLayer: true, BingMapsAerial: true, BingMapsHybrid: true, BingMapsRoad: true, OpenStreetMap: true, VectorTileLayer: true, WCS: true, WMS: true, WebTiledLayer: true };
var a3 = { ArcGISFeatureLayer: true, SubtypeGroupTable: true };
var S = { "web-scene/operational-layers": { ArcGISDimensionLayer: true, ArcGISFeatureLayer: true, ArcGISImageServiceLayer: true, ArcGISMapServiceLayer: true, ArcGISSceneServiceLayer: true, ArcGISTiledElevationServiceLayer: true, ArcGISTiledImageServiceLayer: true, ArcGISTiledMapServiceLayer: true, BuildingSceneLayer: true, CatalogLayer: true, CSV: true, GaussianSplatLayer: true, GeoJSON: true, GroupLayer: true, IntegratedMesh3DTilesLayer: true, Object3DTilesLayer: true, IntegratedMeshLayer: true, KML: true, LineOfSightLayer: true, MediaLayer: true, OGCFeatureLayer: true, OrientedImageryLayer: true, PointCloudLayer: true, RasterDataLayer: true, VectorTileLayer: true, ViewshedLayer: true, Voxel: true, WCS: true, WFS: true, WMS: true, WebTiledLayer: true }, "web-scene/basemap-base-layers": { ArcGISImageServiceLayer: true, ArcGISMapServiceLayer: true, ArcGISSceneServiceLayer: true, ArcGISTiledImageServiceLayer: true, ArcGISTiledMapServiceLayer: true, OpenStreetMap: true, VectorTileLayer: true, WCS: true, WMS: true, WebTiledLayer: true }, "web-scene/basemap-ground-layers": { IntegratedMesh3DTilesLayer: true }, "web-scene/ground": { ArcGISTiledElevationServiceLayer: true, RasterDataElevationLayer: true }, "web-scene/tables": { ArcGISFeatureLayer: true }, "web-map/operational-layers": e, "web-map/basemap-base-layers": r3, "web-map/tables": a3, "link-chart/operational-layers": __spreadProps(__spreadValues({}, e), { LinkChartLayer: true }), "link-chart/basemap-base-layers": r3, "link-chart/tables": a3, "portal-item/operational-layers": { ArcGISFeatureLayer: true, ArcGISImageServiceLayer: true, ArcGISMapServiceLayer: true, ArcGISSceneServiceLayer: true, ArcGISStreamLayer: true, ArcGISTiledImageServiceLayer: true, BuildingSceneLayer: true, IntegratedMesh3DTilesLayer: true, IntegratedMeshLayer: true, MediaLayer: true, OrientedImageryLayer: true, PointCloudLayer: true, SubtypeGroupLayer: true, WCS: true }, "portal-item/tables": { ArcGISFeatureLayer: true, SubtypeGroupTable: true } };

// node_modules/@arcgis/core/layers/mixins/OperationalLayer.js
var g = (g2) => {
  const T2 = g2;
  let v = class extends T2 {
    constructor() {
      super(...arguments), this.persistenceEnabled = true, this.title = null;
    }
    readId(e2, r4, i) {
      return "Group Layer" === i?.portalItem?.type ? void 0 : e2;
    }
    writeListMode(e2, r4, i, t2) {
      (t2 && "ground" === t2.layerContainerType || e2 && c2(this, i, {}, t2)) && (r4[i] = e2);
    }
    writeOperationalLayerType(e2, r4, i) {
      e2 && (r4[i] = e2);
    }
    writeTitle(e2, r4) {
      r4.title = e2 ?? "Layer";
    }
    readVisibilityTimeExtent(e2) {
      return e2 ? m.fromArray(e2) : null;
    }
    writeVisibilityTimeExtent(e2, i, t2, o2) {
      e2 && "tables" !== o2.layerContainerType && (e2.isEmpty ? o2?.messages && o2.messages.push(new r("layer:invalid-visibilityTimeExtent", "visibilityTimeExtent cannot be empty")) : i[t2] = e2.toArray());
    }
    read(e2, r4) {
      r4 && (r4.layer = this), d(this, e2, (r5) => super.read(e2, r5), r4);
    }
    write(e2, t2) {
      if (!this.persistenceEnabled && !t2?.ignorePersistenceEnabled) return null;
      if (t2?.origin) {
        const e3 = `${t2.origin}/${t2.layerContainerType || "operational-layers"}`, r4 = S[e3];
        let i = !!r4?.[this.operationalLayerType];
        if ("ArcGISTiledElevationServiceLayer" === this.operationalLayerType && "web-scene/operational-layers" === e3 && (i = false), "ArcGISDimensionLayer" === this.operationalLayerType && "web-map/operational-layers" === e3 && (i = false), !i) return t(t2, this), null;
      }
      const o2 = super.write(e2, __spreadProps(__spreadValues({}, t2), { layer: this })), s = !!t2 && !!t2.messages && !!t2.messages.filter((e3) => e3 instanceof r && "web-document-write:property-required" === e3.name).length;
      return Z(o2?.url) ? (t2?.messages?.push(new r("layer:invalid-url", `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`, { layer: this })), null) : !this.url && s ? null : o2;
    }
    beforeSave() {
    }
  };
  return __decorate([a({ type: String, json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { isRequired: true, ignoreOrigin: true } }, "portal-item": { write: false } } } })], v.prototype, "id", void 0), __decorate([o("id", ["id"])], v.prototype, "readId", null), __decorate([a(T)], v.prototype, "listMode", void 0), __decorate([r2("listMode")], v.prototype, "writeListMode", null), __decorate([a({ type: String, readOnly: true, json: { read: false, write: { target: "layerType", ignoreOrigin: true }, origins: { "portal-item": { write: false }, "web-scene": { name: "layerType", read: false, write: { enabled: true, ignoreOrigin: true, layerContainerTypes: a2, isRequired: true } } } } })], v.prototype, "operationalLayerType", void 0), __decorate([r2("operationalLayerType")], v.prototype, "writeOperationalLayerType", null), __decorate([a(w)], v.prototype, "opacity", void 0), __decorate([a({ type: Boolean, readOnly: false })], v.prototype, "persistenceEnabled", void 0), __decorate([a({ type: String, json: { write: { ignoreOrigin: true, writerEnsuresNonNull: true }, origins: { "web-scene": { write: { isRequired: true, ignoreOrigin: true, writerEnsuresNonNull: true } }, "portal-item": { write: false } } }, value: "Layer" })], v.prototype, "title", void 0), __decorate([r2("title"), r2(["web-scene"], "title")], v.prototype, "writeTitle", null), __decorate([a({ type: m, json: { origins: { "web-scene": { write: { layerContainerTypes: a2 } } } } })], v.prototype, "visibilityTimeExtent", void 0), __decorate([o("visibilityTimeExtent")], v.prototype, "readVisibilityTimeExtent", null), __decorate([r2(["portal-item", "web-map", "web-scene"], "visibilityTimeExtent", { visibilityTimeExtent: { type: [[D, _]] } })], v.prototype, "writeVisibilityTimeExtent", null), __decorate([a({ type: Boolean, json: { name: "visibility", write: { layerContainerTypes: a2 } } })], v.prototype, "visible", void 0), v = __decorate([c("esri.layers.mixins.OperationalLayer")], v), v;
};

export {
  g
};
//# sourceMappingURL=chunk-SXJ6VOTR.js.map
