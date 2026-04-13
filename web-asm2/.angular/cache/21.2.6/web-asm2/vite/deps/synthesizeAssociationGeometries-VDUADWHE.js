import {
  u as u2
} from "./chunk-XGZIOADS.js";
import "./chunk-HF43L7YV.js";
import "./chunk-CR2FSXZK.js";
import "./chunk-C6QDEXLA.js";
import {
  f as f2,
  s,
  u
} from "./chunk-QWYKLNNR.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import {
  f2 as f
} from "./chunk-5AVTDH3Y.js";
import {
  n
} from "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/networks/support/AssociationGeometriesResult.js
var i = class extends n {
  constructor(o) {
    super(o), this.maxGeometryCountExceeded = false, this.associations = [];
  }
};
__decorate([a({ type: Boolean, json: { write: true } })], i.prototype, "maxGeometryCountExceeded", void 0), __decorate([a({ type: [u2], json: { write: true } })], i.prototype, "associations", void 0), i = __decorate([c("esri.rest.networks.support.AssociationGeometriesResult")], i);

// node_modules/@arcgis/core/rest/networks/synthesizeAssociationGeometries.js
async function n2(r, n3, a2) {
  const c2 = f2(r), f3 = __spreadProps(__spreadValues({}, n3.toJSON()), { f: "json" }), m = u(__spreadValues(__spreadValues({}, c2.query), f3));
  a2 ? a2.method = "post" : a2 = { method: "post" };
  const p = s(m, a2), u3 = `${c2.path}/synthesizeAssociationGeometries`;
  return f(u3, p).then((t) => i2(t, n3.outSpatialReference));
}
function i2(t, e) {
  const { data: o } = t;
  if (e) for (const s2 of o.associations) s2.geometry.spatialReference || (s2.geometry.spatialReference = e.clone());
  return i.fromJSON(o);
}
export {
  n2 as synthesizeAssociationGeometries
};
//# sourceMappingURL=synthesizeAssociationGeometries-VDUADWHE.js.map
