import {
  n,
  s
} from "./chunk-CCIAPSMR.js";
import "./chunk-OVDW6BG5.js";
import {
  f
} from "./chunk-TTRHBDVK.js";
import {
  d
} from "./chunk-6JKRZH3D.js";
import {
  g
} from "./chunk-PS55PEMY.js";
import "./chunk-ZKGNDXUQ.js";
import "./chunk-YNPTGDAS.js";
import "./chunk-Q3C4JQ3I.js";
import "./chunk-N7QYCMB5.js";
import "./chunk-75MOJZ4V.js";
import "./chunk-YDL4QMG6.js";
import "./chunk-YZDX62BD.js";
import "./chunk-BS2V2OFQ.js";
import "./chunk-TX6LXUDP.js";
import "./chunk-L3KMIFH7.js";
import "./chunk-YAY7KCP6.js";
import "./chunk-QNJTKKZK.js";
import "./chunk-WZW6KMAU.js";
import "./chunk-PJDZXW5F.js";
import "./chunk-WRETNREX.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
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
import "./chunk-YY44XNLW.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-HMYFPFVG.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-TNGHAIJZ.js";
import "./chunk-2RBIX73A.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-3Z7OKY4G.js";
import "./chunk-LAAWMBRE.js";
import "./chunk-PKBHGDEY.js";
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
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js
async function n2(e, n3, u2) {
  n3 = d.from(n3);
  const a = f(e);
  return s(a, n3, u2).then((t) => {
    const r = t.data, e2 = {};
    return Object.keys(r).forEach((t2) => e2[t2] = g.fromJSON(r[t2])), e2;
  });
}
async function u(r, o, n3) {
  o = d.from(o);
  const u2 = f(r);
  return n(u2, o, __spreadValues({}, n3)).then((t) => t.data);
}
export {
  n2 as executeRelationshipQuery,
  u as executeRelationshipQueryForCount
};
//# sourceMappingURL=executeRelationshipQuery-NK54QIDN.js.map
