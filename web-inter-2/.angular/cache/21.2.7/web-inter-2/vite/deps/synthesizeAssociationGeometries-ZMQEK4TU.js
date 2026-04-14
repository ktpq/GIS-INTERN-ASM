import {
  u as u2
} from "./chunk-TJ3EYHTP.js";
import "./chunk-PFVHU3CK.js";
import "./chunk-X7HOEUCF.js";
import "./chunk-KFUUHWZV.js";
import {
  f as f2,
  s,
  u
} from "./chunk-KGOQYI3F.js";
import "./chunk-GF53CKBB.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import {
  f2 as f
} from "./chunk-ZRWCUWWK.js";
import "./chunk-253Z6EVN.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=synthesizeAssociationGeometries-ZMQEK4TU.js.map
