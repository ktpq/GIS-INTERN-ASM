import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
function r(e) {
  return "portalItem" in e;
}
var s = (s2) => {
  const p = s2;
  let o = class extends p {
    get apiKey() {
      return this._isOverridden("apiKey") ? this._get("apiKey") : r(this) ? this.portalItem?.apiKey : null;
    }
    set apiKey(e) {
      null != e ? this._override("apiKey", e) : (this._clearOverride("apiKey"), this.clear("apiKey", "user"));
    }
  };
  return __decorate([a({ type: String })], o.prototype, "apiKey", null), o = __decorate([c("esri.layers.mixins.APIKeyMixin")], o), o;
};

export {
  s
};
//# sourceMappingURL=chunk-KXNKZ5SG.js.map
