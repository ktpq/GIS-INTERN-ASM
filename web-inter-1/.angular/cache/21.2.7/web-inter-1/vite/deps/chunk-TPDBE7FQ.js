import {
  hn,
  tn
} from "./chunk-QBEV3F3C.js";
import {
  j
} from "./chunk-2YANO3UR.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import {
  a
} from "./chunk-CV6NMUZC.js";
import {
  c,
  t2 as t
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/support/PolygonCollection.js
var c2;
var l = c2 = class extends a(q.ofType(j)) {
  constructor(e) {
    super(e);
  }
  clone() {
    return new c2(this.items.map((e) => e.clone()));
  }
  write(e, r) {
    return this.toJSON(r);
  }
  toJSON(e) {
    const r = e?.layer?.spatialReference;
    return r ? this.toArray().map((t2) => {
      if (!r.equals(t2.spatialReference)) {
        if (!tn(t2.spatialReference, r)) return e?.messages?.push(new t("scenefilter:unsupported", "Scene filters with incompatible spatial references are not supported", { modification: this, spatialReference: e.layer.spatialReference, context: e })), null;
        const s2 = new j();
        hn(t2, s2, r), t2 = s2;
      }
      const s = t2.toJSON(e);
      return delete s.spatialReference, s;
    }).filter((e2) => null != e2) : this.toArray().map((r2) => r2.toJSON(e));
  }
  static fromJSON(e, r) {
    const t2 = new c2();
    return e.forEach((e2) => t2.add(j.fromJSON(e2, r))), t2;
  }
};
l = c2 = __decorate([c("esri.layers.support.PolygonCollection")], l);
var p = l;

export {
  p
};
//# sourceMappingURL=chunk-TPDBE7FQ.js.map
