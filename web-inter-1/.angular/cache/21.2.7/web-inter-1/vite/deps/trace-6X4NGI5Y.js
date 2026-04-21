import {
  d
} from "./chunk-7ZI5UPQD.js";
import "./chunk-WEIXVQMN.js";
import "./chunk-MB5U7Y4F.js";
import "./chunk-FCLQUEEM.js";
import "./chunk-2PCRFCAO.js";
import "./chunk-DFNEH2UF.js";
import "./chunk-F7D7NEYB.js";
import "./chunk-7RZXJMGY.js";
import "./chunk-RR67MZES.js";
import {
  f as f2,
  s,
  u
} from "./chunk-FNL3SIHY.js";
import "./chunk-Z3PP4SLW.js";
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
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import {
  f2 as f
} from "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import "./chunk-LD7VLL5E.js";
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
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/networks/trace.js
async function n(o, n2, a2) {
  const i = f2(o), u2 = n2.toJSON();
  u2.traceLocations = JSON.stringify(n2.traceLocations), n2.resultTypes && (u2.resultTypes = JSON.stringify(n2.resultTypes)), n2.moment || "SDE.DEFAULT" !== n2.gdbVersion?.toUpperCase() && n2.gdbVersion || (u2.moment = Date.now());
  const y = s(i.query, __spreadValues({ query: u(__spreadProps(__spreadValues({}, u2), { f: "json" })) }, a2)), p = `${i.path}/trace`;
  return f(p, y).then((t) => c(t));
}
async function a(o, n2, a2) {
  const c2 = f2(o), i = n2.toJSON();
  i.traceLocations = JSON.stringify(n2.traceLocations), n2.resultTypes && (i.resultTypes = JSON.stringify(n2.resultTypes));
  const u2 = s(c2.query, __spreadValues({ query: u(__spreadProps(__spreadValues({}, i), { async: true, f: "json" })) }, a2)), y = `${c2.path}/trace`, { data: p } = await f(y, u2);
  return p.statusUrl;
}
function c(t) {
  const { data: s2 } = t;
  return d.fromJSON(s2.traceResults);
}
export {
  a as submitTraceJob,
  n as trace
};
//# sourceMappingURL=trace-6X4NGI5Y.js.map
