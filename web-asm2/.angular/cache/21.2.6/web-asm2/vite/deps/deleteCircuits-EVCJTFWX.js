import {
  p
} from "./chunk-HAOS2T6Y.js";
import "./chunk-H3PXBQD4.js";
import "./chunk-AHJ6GFNR.js";
import "./chunk-EX3R2E7I.js";
import "./chunk-Z2AEQM3R.js";
import "./chunk-LW5ZVONF.js";
import "./chunk-C6P3JIAK.js";
import "./chunk-YM62CGUL.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-D4W5U2I5.js";
import {
  f as f2,
  s,
  u
} from "./chunk-QWYKLNNR.js";
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

// node_modules/@arcgis/core/rest/networks/circuits/deleteCircuits.js
async function c(c2, u2, e) {
  const p2 = f2(c2), m = u2.toJSON();
  u2.circuits && (m.circuits = JSON.stringify(u2.circuits));
  const n = __spreadProps(__spreadValues({}, m), { f: "json" }), a = u(__spreadValues(__spreadValues({}, p2.query), n)), f3 = s(a, __spreadProps(__spreadValues({}, e), { method: "post", authMode: "no-prompt" })), d = `${p2.path}/circuits/delete`, { data: j } = await f(d, f3);
  return p.fromJSON(j);
}
export {
  c as deleteCircuits
};
//# sourceMappingURL=deleteCircuits-EVCJTFWX.js.map
