import {
  i
} from "./chunk-DYXM2PKO.js";
import {
  R
} from "./chunk-GVDE3VDW.js";
import "./chunk-RWDDPS5G.js";
import "./chunk-7D6C3VES.js";
import "./chunk-XPFTEEP5.js";
import {
  t
} from "./chunk-OVDW6BG5.js";
import "./chunk-UL6MK5GP.js";
import "./chunk-UU3FW4SQ.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import {
  P
} from "./chunk-F32PRJK5.js";
import "./chunk-SQBU6SSQ.js";
import "./chunk-A7Y45KTY.js";
import "./chunk-MXBCSABZ.js";
import {
  f as f2
} from "./chunk-FNL3SIHY.js";
import "./chunk-KNE7SVYH.js";
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
import {
  u
} from "./chunk-GM5PCDS3.js";
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
import {
  T,
  d
} from "./chunk-VHQJAPCR.js";
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

// node_modules/@arcgis/core/rest/query/operations/queryAttributeBins.js
function l(t2) {
  const e = t2.geometry, i3 = t2.toJSON(), r = i3;
  let u2, l2, a2;
  if (null != e && (l2 = e.spatialReference, a2 = d(l2), r.geometryType = u(e), r.geometry = JSON.stringify(e), r.inSR = a2), i3.outSR ? (r.outSR = d(i3.outSR), u2 = t2.outSpatialReference) : e && (r.outSR = r.inSR, u2 = l2), r.bin &&= JSON.stringify(r.bin), r.quantizationParameters &&= JSON.stringify(r.quantizationParameters), r.outStatistics &&= JSON.stringify(r.outStatistics), r.outTimeReference &&= JSON.stringify(r.outTimeReference), i3.timeExtent) {
    const t3 = i3.timeExtent, { start: e2, end: n } = t3;
    null == e2 && null == n || (r.time = e2 === n ? e2 : `${e2 ?? "null"},${n ?? "null"}`), delete i3.timeExtent;
  }
  return t2.defaultSpatialReference && T(l2, u2) && (r.defaultSR = r.inSR, delete r.inSR, delete r.outSR), r;
}
async function a(t2, e, i3) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? { data: { features: [] } } : await m(t2, e, i3);
}
async function m(n, o, s = {}) {
  const a2 = "string" == typeof n ? I(n) : n, m2 = o.geometry ? [o.geometry] : [], f3 = await P(m2, null, { signal: s.signal }), y = f3?.[0];
  null != y && ((o = o.clone()).geometry = y);
  const p = t(__spreadValues(__spreadProps(__spreadValues({}, a2.query), { f: "json" }), l(o)));
  return f(V(a2.path, "queryBins"), __spreadProps(__spreadValues({}, s), { query: __spreadValues(__spreadValues({}, p), s.query) }));
}

// node_modules/@arcgis/core/rest/query/executeAttributeBinsQuery.js
async function i2(i3, s, u2) {
  const { data: m2 } = await a(f2(i3), R.from(s), u2);
  return i.fromJSON(m2);
}
export {
  i2 as executeAttributeBinsQuery
};
//# sourceMappingURL=executeAttributeBinsQuery-MIN4HE5R.js.map
