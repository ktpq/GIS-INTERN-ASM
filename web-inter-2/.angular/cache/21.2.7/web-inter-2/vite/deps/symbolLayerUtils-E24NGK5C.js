import {
  e
} from "./chunk-5JGHASMM.js";
import "./chunk-RUUQ2FUK.js";
import {
  c
} from "./chunk-UYITUXWW.js";
import {
  n
} from "./chunk-KEY3YQEB.js";
import {
  i,
  z
} from "./chunk-PYUJO4E2.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
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
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import {
  r3 as r
} from "./chunk-TX75HZKJ.js";
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
    const { fetch: n2 } = await import("./objectResourceUtils-SLCXIBWO.js"), a3 = await n2(o2, { disableTextures: true, spherical: true }), u2 = z(a3.referenceBoundingBox, n());
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
//# sourceMappingURL=symbolLayerUtils-E24NGK5C.js.map
