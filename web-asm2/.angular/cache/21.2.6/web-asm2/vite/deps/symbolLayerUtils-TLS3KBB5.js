import {
  e
} from "./chunk-BEJRYYIA.js";
import "./chunk-WE5AL7RH.js";
import {
  c
} from "./chunk-6X3RLJIF.js";
import {
  i,
  z
} from "./chunk-GLXZFAAW.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-L3WEJB7W.js";
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
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import {
  r3 as r
} from "./chunk-6SPQI6I6.js";
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
    const { fetch: n2 } = await import("./objectResourceUtils-N75JXN3C.js"), a3 = await n2(o2, { disableTextures: true, spherical: true }), u2 = z(a3.referenceBoundingBox, n());
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
//# sourceMappingURL=symbolLayerUtils-TLS3KBB5.js.map
