import {
  f as f2,
  s,
  u
} from "./chunk-QWYKLNNR.js";
import "./chunk-VSDCDWT5.js";
import {
  f2 as f
} from "./chunk-5AVTDH3Y.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import {
  r3 as r
} from "./chunk-6SPQI6I6.js";
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
//# sourceMappingURL=deleteForwardEdits-3MV4XAH5.js.map
