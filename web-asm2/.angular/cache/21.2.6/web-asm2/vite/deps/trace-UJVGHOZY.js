import {
  d
} from "./chunk-QO5V556Y.js";
import "./chunk-JUD2NJ54.js";
import "./chunk-A3PBLCOS.js";
import "./chunk-CR64HCKH.js";
import "./chunk-HF43L7YV.js";
import "./chunk-CR2FSXZK.js";
import "./chunk-C6QDEXLA.js";
import "./chunk-NF4WV2F4.js";
import "./chunk-UUYI3HVY.js";
import "./chunk-J5XU3PTN.js";
import {
  f as f2,
  s,
  u
} from "./chunk-QWYKLNNR.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import {
  f2 as f
} from "./chunk-5AVTDH3Y.js";
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
import "./chunk-6SPQI6I6.js";
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
//# sourceMappingURL=trace-UJVGHOZY.js.map
