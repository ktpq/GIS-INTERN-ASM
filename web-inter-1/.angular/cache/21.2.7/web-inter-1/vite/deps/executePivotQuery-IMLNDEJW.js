import {
  v
} from "./chunk-OJWIUFGO.js";
import {
  n
} from "./chunk-JDO3PFYI.js";
import {
  t
} from "./chunk-OVDW6BG5.js";
import "./chunk-TSYJHA7W.js";
import "./chunk-UU3FW4SQ.js";
import {
  P
} from "./chunk-F32PRJK5.js";
import "./chunk-SQBU6SSQ.js";
import "./chunk-A7Y45KTY.js";
import "./chunk-MXBCSABZ.js";
import {
  f as f2
} from "./chunk-FNL3SIHY.js";
import {
  g
} from "./chunk-KNE7SVYH.js";
import "./chunk-EK6IDC6N.js";
import "./chunk-ZBPHFQZH.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-JXLQUNSA.js";
import "./chunk-XWU2ZKWF.js";
import "./chunk-QKDZ43GD.js";
import "./chunk-UKSB452I.js";
import "./chunk-7PBHIAQH.js";
import "./chunk-FAG2TZ7O.js";
import "./chunk-MDVA2DB6.js";
import "./chunk-3Y2ZRVZS.js";
import "./chunk-VWG26L3C.js";
import "./chunk-6PVP32FV.js";
import "./chunk-TKPO3PT4.js";
import "./chunk-7LBYAQE7.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-P476LLZ4.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-K5YEU7YE.js";
import "./chunk-DWF2MCID.js";
import "./chunk-E3TCHN5O.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-LFCO57WV.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MZFPTE7Q.js";
import "./chunk-U3RH7VGM.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-ZC4RH2DW.js";
import "./chunk-ON6HJSAD.js";
import "./chunk-SWZYRYDU.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-2FYYEMZJ.js";
import "./chunk-HIVGPE4F.js";
import "./chunk-XETCTTJV.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import {
  I,
  V,
  f2 as f
} from "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
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
//# sourceMappingURL=executePivotQuery-IMLNDEJW.js.map
