import {
  i
} from "./chunk-NUH223BD.js";
import {
  f as f2,
  s,
  u
} from "./chunk-FNL3SIHY.js";
import "./chunk-I3MJLPKC.js";
import {
  f2 as f
} from "./chunk-TPFIN626.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import {
  r3 as r
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/networks/validateNetworkTopology.js
async function o(t, o2, d2) {
  const l = f2(t), u2 = o2.toJSON();
  o2.validationSet && (u2.validationSet = JSON.stringify(o2.validationSet));
  const c = __spreadProps(__spreadValues({}, u2), { returnEdits: true, f: "json" }), p = u(__spreadValues(__spreadValues({}, l.query), c)), f3 = s(p, __spreadProps(__spreadValues({}, d2), { method: "post" })), k = `${l.path}/validateNetworkTopology`, { data: v } = await f(k, f3);
  return i.fromJSON(n(v));
}
async function d(r2, o2, d2) {
  if (!o2.gdbVersion) throw new r("submit-validate-network-topology-job:missing-gdb-version", "version is missing");
  const n2 = f2(r2), l = o2.toJSON();
  o2.validationSet && (l.validationSet = JSON.stringify(o2.validationSet));
  const u2 = s(n2.query, __spreadProps(__spreadValues({ query: u(__spreadProps(__spreadValues({}, l), { returnEdits: true, async: true, f: "json" })) }, d2), { method: "post" })), c = `${n2.path}/validateNetworkTopology`, { data: p } = await f(c, u2);
  return p ? p.statusUrl : null;
}
function n(e) {
  return e.serviceEdits && (e.serviceEdits = e.serviceEdits.map((e2) => (e2.editedFeatures.spatialReference && (e2.editedFeatures.spatialReference = { wkid: e2.editedFeatures.spatialReference.wkid, wkt: e2.editedFeatures.spatialReference.wkt, wkt2: e2.editedFeatures.spatialReference.wkt2, latestWkid: e2.editedFeatures.spatialReference.latestWkid, latestVcsWkid: e2.editedFeatures.spatialReference.latestVcsWkid, vcsWkid: e2.editedFeatures.spatialReference.vcsWkid }), e2 = { layerId: e2.id, editedFeatures: e2.editedFeatures }))), e;
}
export {
  n as handleValidateNetworkTopologyResult,
  d as submitValidateNetworkTopologyJob,
  o as validateNetworkTopology
};
//# sourceMappingURL=validateNetworkTopology-M5IIFYY5.js.map
