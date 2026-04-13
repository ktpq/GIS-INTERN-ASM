import {
  u as u2
} from "./chunk-C6ERGRA2.js";
import "./chunk-IIY7ORCT.js";
import "./chunk-IC4VMYLB.js";
import "./chunk-XDB4VVVR.js";
import {
  f as f2,
  s,
  u
} from "./chunk-NTFCNJJY.js";
import "./chunk-LOVQ4LFC.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import {
  f2 as f
} from "./chunk-2F6BRQJJ.js";
import "./chunk-253Z6EVN.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
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
//# sourceMappingURL=synthesizeAssociationGeometries-RJRBGOL5.js.map
