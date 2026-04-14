import {
  u
} from "./chunk-EHL4RJSZ.js";
import "./chunk-SUV4ABMG.js";
import {
  e
} from "./chunk-67ULQRC7.js";
import {
  q
} from "./chunk-IXW3HBVP.js";
import "./chunk-GSWONWCV.js";
import "./chunk-53OZ2LR7.js";
import "./chunk-FSUIID2U.js";
import "./chunk-NZKVNPZ3.js";
import "./chunk-VLXEOEMU.js";
import "./chunk-DZ6LTFHJ.js";
import "./chunk-CV6DGA6Y.js";
import "./chunk-GDMLFOX7.js";
import "./chunk-OKL2JLQU.js";
import "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-5L27TA3I.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-QRPQOATM.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
import "./chunk-AGHTZMGO.js";
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
import {
  s
} from "./chunk-WARIPJQI.js";
import {
  a,
  r3 as r
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=convertMeshVertexSpace-V7PCFD6U.js.map
