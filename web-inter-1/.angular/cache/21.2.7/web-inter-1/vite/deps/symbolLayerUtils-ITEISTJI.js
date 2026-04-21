import {
  e
} from "./chunk-PNVUVXFO.js";
import "./chunk-SG27QVO6.js";
import {
  c
} from "./chunk-VWG26L3C.js";
import {
  n
} from "./chunk-KEY3YQEB.js";
import {
  i,
  z
} from "./chunk-MZFPTE7Q.js";
import "./chunk-U3RH7VGM.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-P7NLTDL7.js";
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
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import {
  r3 as r
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/symbols/support/symbolLayerUtils.js
var c2 = a();
function a() {
  return new e(50);
}
function u() {
  c2 = a();
}
async function l(e2, o) {
  if (e2.resource?.href) return m(e2.resource.href).then((e3) => [e3.width, e3.height]);
  if (e2.resource?.primitive) return null != o ? [o, o] : [256, 256];
  throw new r("symbol3d:invalid-symbol-layer", "symbol layers of type Icon must have either an href or a primitive resource");
}
function m(r2) {
  return f(r2, { responseType: "image" }).then((e2) => e2.data);
}
async function f2(e2, o = null) {
  if (!e2.isPrimitive) {
    const o2 = e2.resource?.href;
    if (!o2) throw new r("symbol:invalid-resource", "The symbol does not have a valid resource");
    const s = c2.get(o2);
    if (null != s) return s;
    const { fetch: n2 } = await import("./objectResourceUtils-EPQGOENL.js"), a3 = await n2(o2, { disableTextures: true, spherical: true }), u2 = z(a3.referenceBoundingBox, n());
    return c2.put(o2, u2), u2;
  }
  if (!e2.resource?.primitive) throw new r("symbol:invalid-resource", "The symbol does not have a valid resource");
  const a2 = i(c(e2.resource.primitive));
  if (null != o) for (let r2 = 0; r2 < a2.length; r2++) a2[r2] *= o;
  return z(a2, n());
}
export {
  u as clearBoundingBoxCache,
  l as computeIconLayerResourceSize,
  f2 as computeObjectLayerResourceSize
};
//# sourceMappingURL=symbolLayerUtils-ITEISTJI.js.map
