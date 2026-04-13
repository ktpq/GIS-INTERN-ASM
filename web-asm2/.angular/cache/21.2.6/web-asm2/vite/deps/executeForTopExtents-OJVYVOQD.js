import {
  c
} from "./chunk-2AZRYR7O.js";
import {
  j
} from "./chunk-3BDVGAO4.js";
import "./chunk-AUV2V6DQ.js";
import "./chunk-HTOQTYIJ.js";
import "./chunk-MDTNXJHL.js";
import "./chunk-JGXIJ3X5.js";
import "./chunk-PC2SGWGS.js";
import "./chunk-GGPUIFVP.js";
import "./chunk-EH727TX6.js";
import {
  f
} from "./chunk-QWYKLNNR.js";
import "./chunk-JC7PAMG4.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
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
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
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
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/query/executeForTopExtents.js
async function e(e2, n, m) {
  const s = f(e2), i = await c(s, j.from(n), __spreadValues({}, m)), u = i.data.extent;
  return !u || isNaN(u.xmin) || isNaN(u.ymin) || isNaN(u.xmax) || isNaN(u.ymax) ? { count: i.data.count, extent: null } : { count: i.data.count, extent: z.fromJSON(u) };
}
export {
  e as executeForTopExtents
};
//# sourceMappingURL=executeForTopExtents-OJVYVOQD.js.map
