import {
  v
} from "./chunk-JE7AWLNH.js";
import {
  g
} from "./chunk-KMP54B7A.js";
import {
  n
} from "./chunk-AQG7G6RV.js";
import {
  t
} from "./chunk-OVDW6BG5.js";
import "./chunk-4V776ICJ.js";
import "./chunk-F6XZYXKM.js";
import {
  P
} from "./chunk-NGAI3WTZ.js";
import "./chunk-OXKG6ITC.js";
import "./chunk-EM42ND2E.js";
import {
  f as f2
} from "./chunk-NTFCNJJY.js";
import "./chunk-MXBCSABZ.js";
import "./chunk-YNPTGDAS.js";
import "./chunk-Q3C4JQ3I.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-PF33M5XM.js";
import "./chunk-HBLYZMSH.js";
import "./chunk-MNLCSEA7.js";
import "./chunk-YZDX62BD.js";
import "./chunk-MUI2ETB6.js";
import "./chunk-T5UM3L76.js";
import "./chunk-737A5DQP.js";
import "./chunk-MQAP2X3X.js";
import "./chunk-QNJTKKZK.js";
import "./chunk-WZW6KMAU.js";
import "./chunk-WRETNREX.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-LF4XI7IU.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-BJNDU6LU.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-WDPGHXN4.js";
import "./chunk-E4TLNY2F.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-LOVQ4LFC.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-PWZ6VVYN.js";
import "./chunk-OFSNX7BB.js";
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
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import {
  I,
  V,
  f2 as f
} from "./chunk-2F6BRQJJ.js";
import "./chunk-PKBHGDEY.js";
import "./chunk-DNJ342E3.js";
import "./chunk-XPGSGU2C.js";
import "./chunk-EKLJIMB3.js";
import "./chunk-UXWT3ISO.js";
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
import "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
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
//# sourceMappingURL=executePivotQuery-HBOFWFFG.js.map
