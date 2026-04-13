import {
  u
} from "./chunk-36VZTHJE.js";
import "./chunk-3QLZQBWH.js";
import {
  e
} from "./chunk-YKMBF3XB.js";
import {
  q
} from "./chunk-PZZJHOHX.js";
import "./chunk-WJXFIWE3.js";
import "./chunk-MDYX2LWI.js";
import "./chunk-LUNYIW6L.js";
import "./chunk-DZSF27H2.js";
import "./chunk-JQUWFVBV.js";
import "./chunk-BUAZREZX.js";
import "./chunk-I7GA7QPR.js";
import "./chunk-B3N4XLHQ.js";
import "./chunk-7MRJRWGA.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-YM62CGUL.js";
import "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-S3BACLSK.js";
import "./chunk-RTWZV6QR.js";
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
import "./chunk-ZILR7JK7.js";
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
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import {
  s
} from "./chunk-POW25PFR.js";
import {
  a,
  r3 as r
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/convertMeshVertexSpace.js
async function m(m2, n, c) {
  await Promise.resolve(), s(c);
  const l = q(m2, n, { useEllipsoid: c?.useEllipsoid });
  if (!l) throw new r("meshUtils:convertVertexSpace()", "Failed to convert to provided vertex space due to projection errors");
  return m2.clone(e(void 0, { vertexAttributes: new u(__spreadProps(__spreadValues({}, l), { uv: a(m2.vertexAttributes.uv), color: a(m2.vertexAttributes.color) })), vertexSpace: n, transform: null }));
}
export {
  m as convertMeshVertexSpace
};
//# sourceMappingURL=convertMeshVertexSpace-7AZBQF5B.js.map
