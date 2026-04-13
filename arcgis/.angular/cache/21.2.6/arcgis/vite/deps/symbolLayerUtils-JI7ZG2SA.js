import {
  e
} from "./chunk-F3XOF26Q.js";
import "./chunk-DI27LDDB.js";
import {
  c
} from "./chunk-ZPAQA4G3.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import {
  i,
  z
} from "./chunk-IBGMUXG6.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-SVWIACQP.js";
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
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import "./chunk-LV7AMIAU.js";
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
import {
  r3 as r
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
    const { fetch: n2 } = await import("./objectResourceUtils-MK6KZYP2.js"), a3 = await n2(o2, { disableTextures: true, spherical: true }), u2 = z(a3.referenceBoundingBox, n());
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
//# sourceMappingURL=symbolLayerUtils-JI7ZG2SA.js.map
