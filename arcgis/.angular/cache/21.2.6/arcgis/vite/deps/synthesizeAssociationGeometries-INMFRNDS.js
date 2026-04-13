import {
  u as u2
} from "./chunk-U6S2WVJN.js";
import "./chunk-BM7JZATS.js";
import "./chunk-Y6DLVMLW.js";
import "./chunk-JC7XDG6V.js";
import {
  f as f2,
  s,
  u
} from "./chunk-TUNGPGHU.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import {
  f2 as f
} from "./chunk-2OF3JE3F.js";
import {
  n
} from "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
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
//# sourceMappingURL=synthesizeAssociationGeometries-INMFRNDS.js.map
