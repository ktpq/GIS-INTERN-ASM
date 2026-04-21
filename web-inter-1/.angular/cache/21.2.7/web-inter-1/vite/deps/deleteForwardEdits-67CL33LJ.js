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
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import {
  r3 as r
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/versionManagement/gdbVersion/deleteForwardEdits.js
async function e(e2, n, m, a) {
  if (!n) throw new r("post:missing-guid", "guid for version is missing");
  const u2 = f2(e2), d = m.toJSON(), f3 = s(u2.query, __spreadProps(__spreadValues({ query: u(__spreadProps(__spreadValues({}, d), { f: "json" })) }, a), { method: "post" }));
  n.startsWith("{") && (n = n.slice(1, -1));
  const p = `${u2.path}/versions/${n}/deleteForwardEdits`, { data: c } = await f(p, f3);
  return c;
}
export {
  e as deleteForwardEdits
};
//# sourceMappingURL=deleteForwardEdits-67CL33LJ.js.map
