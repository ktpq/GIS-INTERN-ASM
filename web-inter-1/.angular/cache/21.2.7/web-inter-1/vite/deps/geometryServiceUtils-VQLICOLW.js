import {
  n,
  n2
} from "./chunk-O4H6HTBC.js";
import "./chunk-OXKG6ITC.js";
import "./chunk-TTRHBDVK.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import {
  M
} from "./chunk-YY44XNLW.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-GALDA7CN.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-3Z7OKY4G.js";
import "./chunk-LAAWMBRE.js";
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
  r3 as r,
  s2 as s
} from "./chunk-6I475YAP.js";
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
//# sourceMappingURL=geometryServiceUtils-VQLICOLW.js.map
