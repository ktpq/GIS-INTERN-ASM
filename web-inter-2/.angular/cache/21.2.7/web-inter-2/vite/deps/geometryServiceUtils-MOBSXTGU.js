import {
  n,
  n2
} from "./chunk-BKQKWBDG.js";
import "./chunk-ZBOTVMFN.js";
import "./chunk-KGOQYI3F.js";
import "./chunk-UIKAL3FG.js";
import {
  M
} from "./chunk-KYLXXMSB.js";
import "./chunk-FMYEMU2E.js";
import "./chunk-62JQGYSV.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-GF53CKBB.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
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
  r3 as r,
  s
} from "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/portal/support/geometryServiceUtils.js
async function n3(t = null, i) {
  if (s.geometryServiceUrl) return s.geometryServiceUrl;
  if (!t) throw new r("internal:geometry-service-url-not-configured", "No geometryServiceUrl in configuration");
  let n4;
  n4 = "portal" in t ? t.portal || M.getDefault() : t, await n4.load({ signal: i });
  const a2 = n4.helperServices?.geometry?.url;
  if (!a2) throw new r("internal:geometry-service-url-not-configured", "No geometryServiceUrl in configuration");
  return a2;
}
async function a(e, o, a2 = null, c) {
  const l = await n3(a2, c), m = new n({ geometries: [e], outSpatialReference: o }), s2 = await n2(l, m, { signal: c });
  if (s2 && Array.isArray(s2) && 1 === s2.length) return s2[0];
  throw new r("internal:geometry-service-projection-failed", "Geometry projection failed on service");
}
export {
  n3 as getGeometryServiceURL,
  a as projectGeometry
};
//# sourceMappingURL=geometryServiceUtils-MOBSXTGU.js.map
