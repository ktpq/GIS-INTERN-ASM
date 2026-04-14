import {
  i
} from "./chunk-LJKW37GV.js";
import {
  R
} from "./chunk-ECUWZJT4.js";
import "./chunk-FL6TAO52.js";
import "./chunk-VVQG655H.js";
import "./chunk-CAH3J23O.js";
import {
  t
} from "./chunk-OVDW6BG5.js";
import "./chunk-DMPSJLSK.js";
import "./chunk-XS5ENN45.js";
import "./chunk-HHAFAO43.js";
import "./chunk-6MXJH5GI.js";
import "./chunk-DVZUPJLC.js";
import "./chunk-VITXUMTH.js";
import "./chunk-DHYKXKX3.js";
import "./chunk-OCN6JBSQ.js";
import "./chunk-IANKUBS7.js";
import {
  P
} from "./chunk-AAMBDXJU.js";
import "./chunk-ZBOTVMFN.js";
import "./chunk-LZSB6OIH.js";
import {
  f as f2
} from "./chunk-KGOQYI3F.js";
import "./chunk-MXBCSABZ.js";
import "./chunk-CLQKOCYA.js";
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
import {
  u
} from "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import {
  T,
  d
} from "./chunk-ZTEDLWCB.js";
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
//# sourceMappingURL=executeAttributeBinsQuery-TWSCQNDI.js.map
