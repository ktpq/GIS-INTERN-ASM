import {
  d
} from "./chunk-4QH6JDQ4.js";
import "./chunk-ABBTQUNT.js";
import "./chunk-VWH64IUY.js";
import "./chunk-YQ2W27NF.js";
import "./chunk-BM7JZATS.js";
import "./chunk-Y6DLVMLW.js";
import "./chunk-JC7XDG6V.js";
import "./chunk-YFEVWOQM.js";
import "./chunk-QJHP7M5C.js";
import "./chunk-J5XU3PTN.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-PMKUQ7UU.js";
import {
  f as f2,
  s,
  u
} from "./chunk-TUNGPGHU.js";
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
import "./chunk-IPJXMYTM.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import {
  f2 as f
} from "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-55ZAYF5P.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=trace-DLDDLPY3.js.map
