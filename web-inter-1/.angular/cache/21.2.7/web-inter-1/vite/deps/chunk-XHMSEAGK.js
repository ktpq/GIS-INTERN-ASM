import {
  d
} from "./chunk-DMM6UPJC.js";
import {
  a as a2,
  n as n2
} from "./chunk-XCIG2MTW.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  e,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/support/FeatureEffect.js
var d2;
var f = { read: { reader: n2 }, write: { writer: a2, overridePolicy() {
  return { allowNull: null != this.excludedEffect, isRequired: null == this.excludedEffect };
} } };
var n3 = { read: { reader: n2 }, write: { writer: a2, overridePolicy() {
  return { allowNull: null != this.includedEffect, isRequired: null == this.includedEffect };
} } };
var a3 = { name: "showExcludedLabels", default: true };
var p = d2 = class extends n {
  constructor(e2) {
    super(e2), this.filter = null, this.includedEffect = null, this.excludedEffect = null, this.excludedLabelsVisible = false;
  }
  write(e2, r2) {
    const l = super.write(e2, r2);
    if (r2?.origin) {
      if (l.filter) {
        const e3 = Object.keys(l.filter);
        if (e3.length > 1 || "where" !== e3[0]) return r2.messages?.push(new r("web-document-write:unsupported-feature-effect", "Invalid feature effect 'filter'. A filter can only contain a 'where' property", { layer: r2.layer, effect: this })), null;
      }
      if ("showExcludedLabels" in l) return r2.messages?.push(new r("web-document-write:unsupported-feature-effect", "Invalid value for property 'excludedLabelsVisible' which should always be 'true'", { layer: r2.layer, effect: this })), null;
    }
    return l;
  }
  clone() {
    return new d2({ filter: null != this.filter ? this.filter.clone() : null, includedEffect: this.includedEffect, excludedEffect: this.excludedEffect, excludedLabelsVisible: this.excludedLabelsVisible });
  }
};
__decorate([a({ type: d, json: { write: { allowNull: true, writer(e2, t, r2, i) {
  const o = e2?.write({}, i);
  o && 0 !== Object.keys(o).length ? e(r2, o, t) : e(r2, null, t);
} } } })], p.prototype, "filter", void 0), __decorate([a({ json: { read: n2, write: { writer: a2, allowNull: true }, origins: { "web-map": f, "portal-item": f } } })], p.prototype, "includedEffect", void 0), __decorate([a({ json: { read: n2, write: { writer: a2, allowNull: true }, origins: { "web-map": n3, "portal-item": n3 } } })], p.prototype, "excludedEffect", void 0), __decorate([a({ type: Boolean, json: { write: true, name: "showExcludedLabels", origins: { "web-map": a3, "portal-item": a3 } } })], p.prototype, "excludedLabelsVisible", void 0), p = d2 = __decorate([c("esri.layers.support.FeatureEffect")], p);

export {
  p
};
//# sourceMappingURL=chunk-XHMSEAGK.js.map
