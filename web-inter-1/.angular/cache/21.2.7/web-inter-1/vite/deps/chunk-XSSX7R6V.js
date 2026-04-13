import {
  g,
  u
} from "./chunk-ZJZI3V7S.js";
import {
  a as a4,
  r as r2
} from "./chunk-2V6MPTAU.js";
import {
  j as j2
} from "./chunk-WGDQIUNK.js";
import {
  hn,
  tn
} from "./chunk-Y4WJAV66.js";
import {
  j
} from "./chunk-R3PBZCGD.js";
import {
  q
} from "./chunk-HMYFPFVG.js";
import {
  I,
  f2 as f
} from "./chunk-LAAWMBRE.js";
import {
  a as a2,
  n
} from "./chunk-FMWSBXS5.js";
import {
  a3,
  c,
  r4 as r,
  t2 as t
} from "./chunk-JM4CKTH2.js";
import {
  a
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/SceneModification.js
var u2;
var g2 = u2 = class extends n {
  constructor(e) {
    super(e), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e, r3, t2, s) {
    if (s.layer?.spatialReference && 115700 === s.layer?.spatialReference.vcsWkid) {
      let e2 = true;
      if (a4()) {
        const o = u(null, [this], s.layer?.spatialReference), i = r2({ modifications: o, inVCS: 5773 });
        if (i.success && i.modifications) {
          const o2 = g(i.modifications, this);
          o2 && (r3[t2] = o2.toJSON(s), e2 = false);
        }
      }
      if (e2) return void (s?.messages && s.messages.push(new t("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: s.layer.spatialReference, context: s })));
    } else if (s.layer?.spatialReference && !s.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!tn(e.spatialReference, s.layer.spatialReference)) return void (s?.messages && s.messages.push(new t("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: s.layer.spatialReference, context: s })));
      const i = new j();
      hn(e, i, s.layer.spatialReference), r3[t2] = i.toJSON(s);
    } else r3[t2] = e.toJSON(s);
  }
  clone() {
    return new u2({ geometry: a(this.geometry), type: this.type });
  }
};
__decorate([a3({ type: j }), j2()], g2.prototype, "geometry", void 0), __decorate([r(["web-scene", "portal-item"], "geometry")], g2.prototype, "writeGeometry", null), __decorate([a3({ type: ["clip", "mask", "replace"], nonNullable: true }), j2()], g2.prototype, "type", void 0), g2 = u2 = __decorate([c("esri.layers.support.SceneModification")], g2);

// node_modules/@arcgis/core/layers/support/SceneModifications.js
var m;
var p = m = class extends a2(q.ofType(g2)) {
  constructor(r3) {
    super(r3), this.url = null;
  }
  clone() {
    return new m({ url: this.url, items: this.items.map((r3) => r3.clone()) });
  }
  toJSON(r3) {
    return this.toArray().map((o) => o.toJSON(r3)).filter((r4) => !!r4.geometry);
  }
  static fromJSON(r3, o) {
    const t2 = new m();
    for (const e of r3) t2.add(g2.fromJSON(e, o));
    return t2;
  }
  static async fromUrl(r3, t2, e) {
    const i = { url: I(r3), origin: "service" }, n2 = await f(r3, { responseType: "json", signal: e?.signal }), p2 = t2.toJSON(), a5 = [];
    for (const o of n2.data) a5.push(g2.fromJSON(__spreadProps(__spreadValues({}, o), { geometry: __spreadValues({ spatialReference: p2 }, o.geometry) }), i));
    return new m({ url: r3, items: a5 });
  }
};
__decorate([a3({ type: String })], p.prototype, "url", void 0), p = m = __decorate([c("esri.layers.support.SceneModifications")], p);

export {
  p
};
//# sourceMappingURL=chunk-XSSX7R6V.js.map
