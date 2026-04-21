import {
  c
} from "./chunk-DJQ6MWGR.js";
import {
  j
} from "./chunk-AOPCXW37.js";
import "./chunk-JDO3PFYI.js";
import "./chunk-OVDW6BG5.js";
import "./chunk-Y3RUSY4O.js";
import "./chunk-5HOYHRTL.js";
import "./chunk-F32PRJK5.js";
import "./chunk-SQBU6SSQ.js";
import "./chunk-A7Y45KTY.js";
import "./chunk-MXBCSABZ.js";
import {
  f
} from "./chunk-FNL3SIHY.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-7PBHIAQH.js";
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
import "./chunk-CPNUUDDA.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import {
  z2 as z
} from "./chunk-ORVZAZPX.js";
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
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/query/executeForTopExtents.js
async function e(e2, n, m) {
  const s = f(e2), i = await c(s, j.from(n), __spreadValues({}, m)), u = i.data.extent;
  return !u || isNaN(u.xmin) || isNaN(u.ymin) || isNaN(u.xmax) || isNaN(u.ymax) ? { count: i.data.count, extent: null } : { count: i.data.count, extent: z.fromJSON(u) };
}
export {
  e as executeForTopExtents
};
//# sourceMappingURL=executeForTopExtents-UI75MUW4.js.map
