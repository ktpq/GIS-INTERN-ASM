import {
  p
} from "./chunk-AB3Z6NQI.js";
import "./chunk-7ADAE5CI.js";
import "./chunk-UCEDTYKM.js";
import "./chunk-YVLRLQIZ.js";
import "./chunk-Q65CRSH6.js";
import "./chunk-6Q257Z6L.js";
import "./chunk-UFNIHRKY.js";
import "./chunk-SGNC5H35.js";
import "./chunk-OR24MDO6.js";
import "./chunk-HHAFAO43.js";
import "./chunk-6MXJH5GI.js";
import "./chunk-DVZUPJLC.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-OCN6JBSQ.js";
import "./chunk-IANKUBS7.js";
import {
  f as f2,
  s,
  u
} from "./chunk-KGOQYI3F.js";
import "./chunk-TE5PBIJT.js";
import "./chunk-X7OFK26H.js";
import "./chunk-PLGRXYAP.js";
import "./chunk-ZAH4NE7U.js";
import "./chunk-U4R7X4DP.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-UIKAL3FG.js";
import "./chunk-RWJPPLGT.js";
import "./chunk-F2LKHJX3.js";
import "./chunk-WEURYJAU.js";
import "./chunk-UYITUXWW.js";
import "./chunk-WDHJMFLW.js";
import "./chunk-V5XS2I7U.js";
import "./chunk-KYLXXMSB.js";
import "./chunk-6KBSN3RJ.js";
import "./chunk-7F3DNNUI.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLL3NYBQ.js";
import "./chunk-M756WYLA.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-FMYEMU2E.js";
import "./chunk-L5CCICKP.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-62JQGYSV.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-GW4HD2NW.js";
import "./chunk-OEXL7OFS.js";
import "./chunk-F6AS75CS.js";
import "./chunk-PM52Q5K4.js";
import "./chunk-ZWC72SJH.js";
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
import "./chunk-PYUJO4E2.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
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
import "./chunk-Y2SQYXOZ.js";
import "./chunk-CJBFJRGB.js";
import "./chunk-6XF5AJ25.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
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

// node_modules/@arcgis/core/rest/networks/circuits/createCircuit.js
async function e(e2, p2, u2) {
  const m = f2(e2), a = __spreadProps(__spreadValues({}, p2.toJSON()), { f: "json" }), c = u(__spreadValues(__spreadValues({}, m.query), a)), n = s(c, __spreadProps(__spreadValues({}, u2), { method: "post", authMode: "no-prompt" })), f3 = `${m.path}/circuits/create`, { data: d } = await f(f3, n);
  return p.fromJSON(d);
}
export {
  e as createCircuit
};
//# sourceMappingURL=createCircuit-654HCJYA.js.map
