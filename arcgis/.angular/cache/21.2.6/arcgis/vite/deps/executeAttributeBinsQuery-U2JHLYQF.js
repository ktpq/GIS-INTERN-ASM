import {
  i
} from "./chunk-GQUXOXZR.js";
import {
  R
} from "./chunk-YLMDVCR4.js";
import "./chunk-TUSYJ5HY.js";
import "./chunk-O2QKXNMI.js";
import "./chunk-AR7ZBAWX.js";
import "./chunk-H3GWORLU.js";
import {
  t
} from "./chunk-MDTNXJHL.js";
import "./chunk-QEI2MEKM.js";
import "./chunk-AMVHY7YB.js";
import "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-7DXPO6B2.js";
import "./chunk-JJJRQB6X.js";
import "./chunk-D5MS4RFG.js";
import "./chunk-UOTNWVQN.js";
import "./chunk-AEEIJGHJ.js";
import "./chunk-MK2KB2KA.js";
import "./chunk-NIXSIW3X.js";
import "./chunk-DZN3R4UM.js";
import "./chunk-OD52MENG.js";
import "./chunk-XK2FSQWW.js";
import "./chunk-AIECNX6R.js";
import "./chunk-ZPAQA4G3.js";
import "./chunk-WLCIR5JN.js";
import "./chunk-OFIL7BYT.js";
import "./chunk-M3PLR22U.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-LKWKFYCL.js";
import "./chunk-ULJA4TCB.js";
import "./chunk-DNCZTJNI.js";
import "./chunk-BQWO5RXV.js";
import "./chunk-IBGMUXG6.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-QU4UZ7C2.js";
import "./chunk-HKOFZI3I.js";
import "./chunk-V6655I3I.js";
import "./chunk-S3BACLSK.js";
import "./chunk-4QSSUPBC.js";
import "./chunk-FHDG7GP6.js";
import "./chunk-U3CRXBTW.js";
import "./chunk-QLC3W7PG.js";
import "./chunk-KO4S3BRZ.js";
import "./chunk-PMKUQ7UU.js";
import {
  P
} from "./chunk-CEHUBL44.js";
import "./chunk-55DFFBOE.js";
import "./chunk-LHEB3G3E.js";
import "./chunk-JC7PAMG4.js";
import {
  f as f2
} from "./chunk-TUNGPGHU.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-4YKWF6M6.js";
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
import {
  u
} from "./chunk-47Z5HJ52.js";
import "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import {
  T,
  d
} from "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import {
  I,
  V,
  f2 as f
} from "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-55ZAYF5P.js";
import "./chunk-FMPS52FS.js";
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
//# sourceMappingURL=executeAttributeBinsQuery-U2JHLYQF.js.map
