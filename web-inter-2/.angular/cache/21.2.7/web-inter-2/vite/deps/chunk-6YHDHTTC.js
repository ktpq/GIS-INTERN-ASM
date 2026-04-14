import {
  r as r3
} from "./chunk-5T3LXRWY.js";
import {
  t
} from "./chunk-TPDTUQ5K.js";
import {
  l,
  u
} from "./chunk-GM5PCDS3.js";
import {
  F,
  P,
  r as r2
} from "./chunk-DK6LJVYU.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorProject.js
var o;
function u2() {
  return !!o && r2();
}
async function c() {
  if (!u2()) {
    const [n2, t2] = await Promise.all([import("./OperatorProject-IRZTFFHO.js"), import("./SpatialReference-53GCE4ZP.js").then((n3) => n3.aP).then(({ injectPe: n3 }) => n3), P()]);
    o = new n2.OperatorProject(), t2(F);
  }
}
function a(n2, e) {
  return o.execute(n2, e, null);
}
function s(e, r4) {
  const t2 = o.executeMany(new t(e), r4, null);
  return Array.from(t2);
}
function m() {
  return o.supportsCurves();
}

// node_modules/@arcgis/core/geometry/operators/support/projectionZScaling.js
function s2(t2, s3, n2) {
  let p;
  for (const c2 of t2) if (c2 && l(c2) && !("vertexAttributes" in c2)) {
    if (!p) {
      null == s3.vcsWkid && null == n2.vcsWkid || i(s3, n2);
      const t3 = "type" in c2 ? c2.type : u(c2);
      if (p = r3(t3, s3, n2), !p) return;
    }
    p(c2);
  }
}
var n = class extends r {
  constructor() {
    super("projection:z-unsupported", "projection of z values is unsupported between different vertical coordinate systems");
  }
};
function i({ vcsWkid: t2 }, { vcsWkid: o2 }) {
  if ((t2 ?? null) !== (o2 ?? null)) throw new n();
}

export {
  u2 as u,
  c,
  a,
  s,
  m,
  s2
};
//# sourceMappingURL=chunk-6YHDHTTC.js.map
