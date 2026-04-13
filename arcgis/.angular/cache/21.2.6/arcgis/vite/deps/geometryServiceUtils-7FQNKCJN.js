import {
  n,
  n2
} from "./chunk-HRQRF2TE.js";
import "./chunk-LHEB3G3E.js";
import "./chunk-TUNGPGHU.js";
import "./chunk-4YKWF6M6.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import {
  M
} from "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OTB5O3ZS.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
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
  r3 as r,
  s
} from "./chunk-IDI4VM7T.js";
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
//# sourceMappingURL=geometryServiceUtils-7FQNKCJN.js.map
