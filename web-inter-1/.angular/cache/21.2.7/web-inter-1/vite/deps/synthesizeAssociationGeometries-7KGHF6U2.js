import {
  u as u2
} from "./chunk-3WGYKQWJ.js";
import "./chunk-2PCRFCAO.js";
import "./chunk-DFNEH2UF.js";
import "./chunk-F7D7NEYB.js";
import {
  f as f2,
  s,
  u
} from "./chunk-FNL3SIHY.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-253Z6EVN.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import {
  f2 as f
} from "./chunk-TPFIN626.js";
import "./chunk-MCBUVFBI.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=synthesizeAssociationGeometries-7KGHF6U2.js.map
