import {
  e
} from "./chunk-H4RHQ5YI.js";
import "./chunk-BRTBYVJG.js";
import {
  c
} from "./chunk-YAY7KCP6.js";
import {
  i,
  z
} from "./chunk-PWZ6VVYN.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import {
  n
} from "./chunk-KEY3YQEB.js";
import "./chunk-SH72BZH2.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-DF4ABCPV.js";
import {
  f2 as f
} from "./chunk-LAAWMBRE.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
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
    const { fetch: n2 } = await import("./objectResourceUtils-BJ7H6JHQ.js"), a3 = await n2(o2, { disableTextures: true, spherical: true }), u2 = z(a3.referenceBoundingBox, n());
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
//# sourceMappingURL=symbolLayerUtils-BQARNSYJ.js.map
