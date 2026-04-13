import {
  S,
  l,
  o,
  r,
  s,
  t,
  y
} from "./chunk-IILQWSIB.js";
import {
  u as u2
} from "./chunk-QNJTKKZK.js";
import {
  u
} from "./chunk-PJDZXW5F.js";
import {
  m
} from "./chunk-PKBHGDEY.js";
import {
  d
} from "./chunk-XPGSGU2C.js";

// node_modules/@arcgis/core/symbols/support/defaults.js
var p = u.fromJSON(l);
var u3 = d.fromJSON(o);
var c = m.fromJSON(S);
var a = u2.fromJSON(t);
function J(r2) {
  if (null == r2) return null;
  switch (r2.type) {
    case "mesh":
      return null;
    case "point":
    case "multipoint":
      return p;
    case "polyline":
      return u3;
    case "polygon":
    case "extent":
      return c;
  }
  return null;
}
var N = u.fromJSON(r);
var O = d.fromJSON(s);
var y2 = m.fromJSON(y);

export {
  p,
  u3 as u,
  c,
  a,
  J,
  N,
  O,
  y2 as y
};
//# sourceMappingURL=chunk-XMV6PJP3.js.map
