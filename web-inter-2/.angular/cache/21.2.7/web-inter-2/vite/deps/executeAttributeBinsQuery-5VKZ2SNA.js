import {
  i
} from "./chunk-RVY3EDRU.js";
import {
  R
} from "./chunk-U4ITOIXS.js";
import "./chunk-NZG3PRTT.js";
import "./chunk-QFCIAXTC.js";
import "./chunk-APMZAVZP.js";
import {
  t
} from "./chunk-OVDW6BG5.js";
import {
  P
} from "./chunk-3QQ7UK2J.js";
import "./chunk-OXKG6ITC.js";
import "./chunk-EM42ND2E.js";
import {
  f as f2
} from "./chunk-F77L3CIW.js";
import "./chunk-MXBCSABZ.js";
import "./chunk-EE4SGCNH.js";
import "./chunk-F6XZYXKM.js";
import "./chunk-YYUTDQ2Q.js";
import "./chunk-5L27TA3I.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-YNPTGDAS.js";
import "./chunk-Q3C4JQ3I.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-QXUZD2G5.js";
import "./chunk-A65L2IOA.js";
import "./chunk-TEGVFVAJ.js";
import "./chunk-YZDX62BD.js";
import "./chunk-FQ4W5OTG.js";
import "./chunk-RC57P4JN.js";
import "./chunk-2JGVYNV6.js";
import "./chunk-MQAP2X3X.js";
import "./chunk-QNJTKKZK.js";
import "./chunk-WZW6KMAU.js";
import "./chunk-WRETNREX.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-OOTSAG75.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-DVLEZ3TT.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-BGBXZWYV.js";
import "./chunk-DMOCO4H5.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-GALDA7CN.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-QRPQOATM.js";
import "./chunk-OIICDJNU.js";
import "./chunk-PKBHGDEY.js";
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
import {
  u
} from "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import {
  T,
  d
} from "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import {
  I,
  V,
  f2 as f
} from "./chunk-RVKOLALF.js";
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
//# sourceMappingURL=executeAttributeBinsQuery-5VKZ2SNA.js.map
