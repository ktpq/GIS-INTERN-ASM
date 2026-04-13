import {
  h
} from "./chunk-BEEP3FKE.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/draw/plugins/PluginBase.js
var n = class extends b {
  constructor() {
    super(...arguments), this._ownHandlesKey = /* @__PURE__ */ Symbol("remove-on-complete"), this._downstreamHandlesKey = /* @__PURE__ */ Symbol("remove-on-downstream-change"), this._updateHandles = new h(), this._isComplete = false;
  }
  get _session() {
    return this._context?.session;
  }
  get updating() {
    return this._updateHandles.updating;
  }
  start(e, t) {
    this._context = e;
  }
  complete() {
    const e = this._context?.session;
    e?.groupGeometryChanges(), e?.complete(), this._isComplete = true, this.removeHandles(this._ownHandlesKey), this.removeHandles(this._downstreamHandlesKey);
  }
};
__decorate([a()], n.prototype, "_context", void 0), __decorate([a()], n.prototype, "_isComplete", void 0), __decorate([a()], n.prototype, "_session", null), __decorate([a()], n.prototype, "configuration", void 0), __decorate([a()], n.prototype, "updating", null), n = __decorate([c("esri.views.draw.plugins.PluginBase")], n);

export {
  n
};
//# sourceMappingURL=chunk-6OPXXNEA.js.map
