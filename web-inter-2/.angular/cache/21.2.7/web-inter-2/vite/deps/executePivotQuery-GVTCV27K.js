import {
  v
} from "./chunk-ZR44OKIJ.js";
import {
  n
} from "./chunk-AIHQJBD3.js";
import {
  t
} from "./chunk-OVDW6BG5.js";
import "./chunk-6M5I3JU2.js";
import "./chunk-DMPSJLSK.js";
import "./chunk-VITXUMTH.js";
import "./chunk-DHYKXKX3.js";
import {
  P
} from "./chunk-AAMBDXJU.js";
import "./chunk-ZBOTVMFN.js";
import "./chunk-LZSB6OIH.js";
import {
  f as f2
} from "./chunk-KGOQYI3F.js";
import "./chunk-MXBCSABZ.js";
import {
  g
} from "./chunk-CLQKOCYA.js";
import "./chunk-5EVMO3EL.js";
import "./chunk-3PXGXX6C.js";
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
  I,
  V,
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

// node_modules/@arcgis/core/rest/query/operations/queryPivot.js
function n2(t2) {
  const o = n(t2), r = o.outPivots;
  if (r?.length) {
    for (const t3 of r) "Pivot" === t3.pivotType && t3.pivotParameters.outStatistic ? t3.pivotParameters.outStatistic = JSON.stringify(t3.pivotParameters.outStatistic) : "Unpivot" === t3.pivotType && (t3.unPivotParameters.sourceFields = t3.unPivotParameters.sourceFields.join(","));
    o.outPivots = JSON.stringify(r);
  }
  return o;
}
async function u(t2, o, r) {
  return await a(t2, o, r);
}
async function a(s, u2, a2 = {}) {
  const m = "string" == typeof s ? I(s) : s, p = u2.geometry ? [u2.geometry] : [], l = await P(p, null, { signal: a2.signal }), c = l?.[0];
  null != c && ((u2 = u2.clone()).geometry = c);
  const y = t(__spreadValues(__spreadProps(__spreadValues({}, m.query), { f: "json" }), n2(u2)));
  return f(V(m.path, "queryPivot"), __spreadProps(__spreadValues({}, a2), { query: __spreadValues(__spreadValues({}, y), a2.query) }));
}

// node_modules/@arcgis/core/rest/query/executePivotQuery.js
async function i(i2, s, m) {
  const p = f2(i2), u2 = __spreadValues({}, m), { data: a2 } = await u(p, v.from(s), u2);
  return g.fromJSON(a2);
}
export {
  i as executePivotQuery
};
//# sourceMappingURL=executePivotQuery-GVTCV27K.js.map
