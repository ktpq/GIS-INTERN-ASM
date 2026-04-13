import {
  b
} from "./chunk-SG23UZYK.js";
import {
  l2 as l
} from "./chunk-GUGGSMY4.js";
import {
  n
} from "./chunk-E7T52Q27.js";
import {
  n as n2
} from "./chunk-2DNVIDFH.js";
import {
  p
} from "./chunk-6SPQI6I6.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/core/Clonable.js
var c = /* @__PURE__ */ Symbol("ClonableMixin");
var l2 = (t) => {
  var i;
  const l3 = t;
  let f2 = class extends l3 {
    constructor() {
      super(...arguments), this[i] = true;
    }
    static {
      i = c;
    }
    clone(o) {
      const t2 = n(this);
      n2(t2, "unable to clone instance of non-accessor class");
      const r = t2.metadata, c2 = t2.store, i2 = {}, l4 = /* @__PURE__ */ new Map();
      for (const e in r) {
        const t3 = r[e], n3 = c2?.originOf(e), f4 = t3.clonable;
        if (t3.readOnly || false === f4 || 7 !== n3 && 0 !== n3 && 5 !== n3 && 4 !== n3) continue;
        const a = this[e];
        let p2 = null;
        if ("function" == typeof f4) p2 = f4(a, o);
        else if ("reference" === f4) p2 = a;
        else if (p2 = p(a, o), null != a && null == p2) continue;
        0 === n3 ? l4.set(e, p2) : i2[e] = p2;
      }
      const f3 = new (0, Object.getPrototypeOf(this).constructor)(i2);
      if (l4.size) {
        const o2 = n(f3)?.store;
        if (o2) for (const [t3, s] of l4) o2.set(t3, s, 0);
      }
      return f3;
    }
  };
  return f2 = __decorate([l("esri.core.Clonable")], f2), f2;
};
var f = l2(b);

export {
  l2 as l,
  f
};
//# sourceMappingURL=chunk-DUGX5C7M.js.map
