import {
  v
} from "./chunk-WPDE3EEV.js";
import {
  n
} from "./chunk-RTKLNWP4.js";
import {
  g
} from "./chunk-H3GWORLU.js";
import {
  t
} from "./chunk-MDTNXJHL.js";
import "./chunk-L3NTTNVH.js";
import "./chunk-QEI2MEKM.js";
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
import "./chunk-47Z5HJ52.js";
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
import "./chunk-TIZ3VJFS.js";
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
//# sourceMappingURL=executePivotQuery-R72VACOG.js.map
