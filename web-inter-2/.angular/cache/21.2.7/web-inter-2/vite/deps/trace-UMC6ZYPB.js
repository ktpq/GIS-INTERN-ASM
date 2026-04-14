import {
  d
} from "./chunk-LGVUVNF3.js";
import "./chunk-TS2LJBSB.js";
import "./chunk-MH6FDVJZ.js";
import "./chunk-H565NKHI.js";
import "./chunk-PFVHU3CK.js";
import "./chunk-X7HOEUCF.js";
import "./chunk-KFUUHWZV.js";
import "./chunk-3V5B2XJ5.js";
import "./chunk-XH3ATY6S.js";
import "./chunk-Z3PP4SLW.js";
import {
  f as f2,
  s,
  u
} from "./chunk-KGOQYI3F.js";
import "./chunk-L5CCICKP.js";
import "./chunk-F6AS75CS.js";
import "./chunk-PM52Q5K4.js";
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
import "./chunk-URLT4X25.js";
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
import "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=trace-UMC6ZYPB.js.map
