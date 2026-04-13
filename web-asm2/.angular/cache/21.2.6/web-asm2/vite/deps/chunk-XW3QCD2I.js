import {
  S as S2
} from "./chunk-YDHIJ7J4.js";
import {
  G,
  I,
  S,
  T
} from "./chunk-DHNLUBWZ.js";
import {
  f,
  w
} from "./chunk-4X5LQ2UO.js";

// node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js
var p = new S2(S);
var f2 = new S2(T);
var c = new S2(G);
var a = new S2(I);
function u(e) {
  const t = k.get(e);
  if (t) return t;
  let n = p;
  if (e) if (e === f2) n = f2;
  else if (e === c) n = c;
  else {
    const t2 = e.wkid, s = e.latestWkid;
    if (null != t2 || null != s) w(t2) || w(s) ? n = f2 : (f(t2) || f(s)) && (n = c);
    else {
      const t3 = e.wkt2 ?? e.wkt;
      if (t3) {
        const e2 = t3.toUpperCase();
        e2 === U ? n = f2 : e2 === d && (n = c);
      }
    }
  }
  return k.set(e, n), n;
}
var k = /* @__PURE__ */ new Map();
var U = f2.wkt.toUpperCase();
var d = c.wkt.toUpperCase();

export {
  p,
  a,
  u
};
//# sourceMappingURL=chunk-XW3QCD2I.js.map
