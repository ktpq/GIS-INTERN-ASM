import {
  p
} from "./chunk-JJ3WJLES.js";
import "./chunk-RTAAX367.js";
import "./chunk-E5J7EV3G.js";
import "./chunk-V7VHUXCE.js";
import "./chunk-Q65CRSH6.js";
import "./chunk-6Q257Z6L.js";
import "./chunk-UFNIHRKY.js";
import {
  f as f2,
  s,
  u
} from "./chunk-NTFCNJJY.js";
import "./chunk-SGNC5H35.js";
import "./chunk-OR24MDO6.js";
import "./chunk-MYLK6AZ6.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-PF33M5XM.js";
import "./chunk-HBLYZMSH.js";
import "./chunk-MNLCSEA7.js";
import "./chunk-YZDX62BD.js";
import "./chunk-MUI2ETB6.js";
import "./chunk-T5UM3L76.js";
import "./chunk-737A5DQP.js";
import "./chunk-MQAP2X3X.js";
import "./chunk-QNJTKKZK.js";
import "./chunk-WZW6KMAU.js";
import "./chunk-WRETNREX.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-LF4XI7IU.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-BJNDU6LU.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-WDPGHXN4.js";
import "./chunk-E4TLNY2F.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-LOVQ4LFC.js";
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
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import {
  f2 as f
} from "./chunk-2F6BRQJJ.js";
import "./chunk-PKBHGDEY.js";
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
//# sourceMappingURL=deleteCircuits-YESPEXPT.js.map
