import {
  d
} from "./chunk-WQDPYV3E.js";
import "./chunk-5GUODJ3Q.js";
import "./chunk-VMMJQHU4.js";
import "./chunk-JPKBSWIO.js";
import "./chunk-IIY7ORCT.js";
import "./chunk-IC4VMYLB.js";
import "./chunk-XDB4VVVR.js";
import {
  f as f2,
  s,
  u
} from "./chunk-TTRHBDVK.js";
import "./chunk-AOZPM4BK.js";
import "./chunk-SZSPBGRC.js";
import "./chunk-Z3PP4SLW.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-URLT4X25.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-3Z7OKY4G.js";
import {
  f2 as f
} from "./chunk-LAAWMBRE.js";
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

// node_modules/@arcgis/core/rest/networks/trace.js
async function n(o, n2, a2) {
  const i = f2(o), u2 = n2.toJSON();
  u2.traceLocations = JSON.stringify(n2.traceLocations), n2.resultTypes && (u2.resultTypes = JSON.stringify(n2.resultTypes)), n2.moment || "SDE.DEFAULT" !== n2.gdbVersion?.toUpperCase() && n2.gdbVersion || (u2.moment = Date.now());
  const y = s(i.query, __spreadValues({ query: u(__spreadProps(__spreadValues({}, u2), { f: "json" })) }, a2)), p = `${i.path}/trace`;
  return f(p, y).then((t) => c(t));
}
async function a(o, n2, a2) {
  const c2 = f2(o), i = n2.toJSON();
  i.traceLocations = JSON.stringify(n2.traceLocations), n2.resultTypes && (i.resultTypes = JSON.stringify(n2.resultTypes));
  const u2 = s(c2.query, __spreadValues({ query: u(__spreadProps(__spreadValues({}, i), { async: true, f: "json" })) }, a2)), y = `${c2.path}/trace`, { data: p } = await f(y, u2);
  return p.statusUrl;
}
function c(t) {
  const { data: s2 } = t;
  return d.fromJSON(s2.traceResults);
}
export {
  a as submitTraceJob,
  n as trace
};
//# sourceMappingURL=trace-4CSKOVBH.js.map
