import {
  n,
  n2
} from "./chunk-34Y6VIBC.js";
import "./chunk-GGPUIFVP.js";
import "./chunk-QWYKLNNR.js";
import {
  M
} from "./chunk-IQ4J5AR2.js";
import "./chunk-IDWN24M7.js";
import "./chunk-B4Y3SDRP.js";
import "./chunk-DOVHXPQB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
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
  r3 as r,
  s
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=geometryServiceUtils-SRAUBAFE.js.map
