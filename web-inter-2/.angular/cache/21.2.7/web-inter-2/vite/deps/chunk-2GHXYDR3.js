import {
  n
} from "./chunk-D64TRQJR.js";
import {
  e
} from "./chunk-ZCNXMVZA.js";
import {
  d
} from "./chunk-HLZH52F6.js";
import {
  o
} from "./chunk-DMOCO4H5.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/ExportImageParameters.js
var n2 = { visible: "visibleSublayers", definitionExpression: "layerDefs", labelingInfo: "hasDynamicLayers", labelsVisible: "hasDynamicLayers", opacity: "hasDynamicLayers", minScale: "visibleSublayers", maxScale: "visibleSublayers", renderer: "hasDynamicLayers", source: "hasDynamicLayers" };
var y = class extends b {
  constructor(e2) {
    super(e2), this.floors = null, this.scale = 0;
  }
  destroy() {
    this.layer = null;
  }
  get dynamicLayers() {
    if (!this.hasDynamicLayers) return null;
    const e2 = this.visibleSublayers.map((e3) => {
      const r = n(this.floors, e3);
      return e3.toExportImageJSON(r);
    });
    return e2.length ? JSON.stringify(e2) : null;
  }
  get hasDynamicLayers() {
    return this.layer && e(this.visibleSublayers, this.layer.serviceSublayers, this.layer.gdbVersion);
  }
  set layer(e2) {
    this._get("layer") !== e2 && (this._set("layer", e2), this.removeHandles("layer"), e2 && this.addHandles([e2.allSublayers.on("change", () => this.notifyChange("visibleSublayers")), e2.on("sublayer-update", (e3) => this.notifyChange(n2[e3.propertyName]))], "layer"));
  }
  get layers() {
    const e2 = this.visibleSublayers;
    return e2 ? e2.length ? "show:" + e2.map((e3) => e3.id).join(",") : "show:-1" : null;
  }
  get layerDefs() {
    const e2 = !!this.floors?.length, r = this.visibleSublayers.filter((r2) => null != r2.definitionExpression || e2 && null != r2.floorInfo);
    return r.length ? JSON.stringify(r.reduce((e3, r2) => {
      const t = n(this.floors, r2), i = o(t, r2.definitionExpression);
      return null != i && (e3[r2.id] = i), e3;
    }, {})) : null;
  }
  get version() {
    this.commitProperty("layers"), this.commitProperty("layerDefs"), this.commitProperty("dynamicLayers");
    const e2 = this.layer;
    return e2 && (e2.commitProperty("dpi"), e2.commitProperty("imageFormat"), e2.commitProperty("imageTransparency"), e2.commitProperty("gdbVersion")), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const e2 = [];
    if (!this.layer) return e2;
    const r = this.layer.sublayers, s = this.scale, t = (r2) => {
      r2.visible && (0 === s || d(s, r2.minScale, r2.maxScale)) && (r2.sublayers ? r2.sublayers.forEach(t) : e2.unshift(r2));
    };
    r?.forEach(t);
    const i = this._get("visibleSublayers");
    return !i || i.length !== e2.length || i.some((r2, s2) => e2[s2] !== r2) ? e2 : i;
  }
  toJSON() {
    const e2 = this.layer;
    let r = { dpi: e2.dpi, format: e2.imageFormat, transparent: e2.imageTransparency, gdbVersion: e2.gdbVersion || null };
    return this.hasDynamicLayers && this.dynamicLayers ? r.dynamicLayers = this.dynamicLayers : r = __spreadProps(__spreadValues({}, r), { layers: this.layers, layerDefs: this.layerDefs }), r;
  }
};
__decorate([a({ readOnly: true })], y.prototype, "dynamicLayers", null), __decorate([a()], y.prototype, "floors", void 0), __decorate([a({ readOnly: true })], y.prototype, "hasDynamicLayers", null), __decorate([a()], y.prototype, "layer", null), __decorate([a({ readOnly: true })], y.prototype, "layers", null), __decorate([a({ readOnly: true })], y.prototype, "layerDefs", null), __decorate([a({ type: Number })], y.prototype, "scale", void 0), __decorate([a({ readOnly: true })], y.prototype, "version", null), __decorate([a({ readOnly: true })], y.prototype, "visibleSublayers", null), y = __decorate([c("esri.layers.support.ExportImageParameters")], y);

export {
  y
};
//# sourceMappingURL=chunk-2GHXYDR3.js.map
