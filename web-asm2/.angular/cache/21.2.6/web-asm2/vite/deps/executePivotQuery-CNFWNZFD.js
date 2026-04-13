import {
  v
} from "./chunk-XL733PSC.js";
import {
  g
} from "./chunk-Q5KXJ6ZA.js";
import "./chunk-Q7JGI6PX.js";
import "./chunk-HYDNVC4V.js";
import {
  n
} from "./chunk-HTOQTYIJ.js";
import {
  t
} from "./chunk-MDTNXJHL.js";
import "./chunk-2IAEDPBU.js";
import "./chunk-L244Y4DX.js";
import {
  P
} from "./chunk-PC2SGWGS.js";
import "./chunk-GGPUIFVP.js";
import "./chunk-EH727TX6.js";
import {
  f as f2
} from "./chunk-QWYKLNNR.js";
import "./chunk-JC7PAMG4.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import "./chunk-TV7JW3IK.js";
import "./chunk-SPTOZROU.js";
import "./chunk-PMZYW4N2.js";
import "./chunk-ZN24EUTK.js";
import "./chunk-R5ZARNWA.js";
import "./chunk-Q25A4AK6.js";
import "./chunk-GLXJP2Y5.js";
import "./chunk-6X3RLJIF.js";
import "./chunk-GOPT3PO2.js";
import "./chunk-ZPTC4YZQ.js";
import "./chunk-LKWKFYCL.js";
import "./chunk-ULJA4TCB.js";
import "./chunk-GLXZFAAW.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-IQ4J5AR2.js";
import "./chunk-X7ZXABIR.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-WUSMTFBU.js";
import "./chunk-RJMYNJ36.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-IDWN24M7.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-B4Y3SDRP.js";
import "./chunk-OOSRFM7N.js";
import "./chunk-DOVHXPQB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-4UWOVR5Y.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-J27BSZXM.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-XKHV7U7B.js";
import "./chunk-M2KBLK7K.js";
import "./chunk-TT3WF5RA.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-S3BACLSK.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import {
  I,
  V,
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
//# sourceMappingURL=executePivotQuery-CNFWNZFD.js.map
