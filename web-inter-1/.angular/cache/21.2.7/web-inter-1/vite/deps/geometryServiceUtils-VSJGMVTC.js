import {
  n,
  n2
} from "./chunk-6YPBUAZD.js";
import "./chunk-A7Y45KTY.js";
import "./chunk-FNL3SIHY.js";
import {
  M
} from "./chunk-P476LLZ4.js";
import "./chunk-K5YEU7YE.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-253Z6EVN.js";
import "./chunk-XETCTTJV.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
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
  r3 as r,
  s
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=geometryServiceUtils-VSJGMVTC.js.map
