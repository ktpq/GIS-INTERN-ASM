import {
  f as f2,
  s,
  u
} from "./chunk-TUNGPGHU.js";
import "./chunk-IPJXMYTM.js";
import {
  f2 as f
} from "./chunk-2OF3JE3F.js";
import "./chunk-O3PP4I47.js";
import "./chunk-POW25PFR.js";
import {
  r3 as r
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=deleteForwardEdits-KSRU75LB.js.map
