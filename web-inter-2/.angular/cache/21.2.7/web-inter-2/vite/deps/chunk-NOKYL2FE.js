import {
  e as e2
} from "./chunk-ZJ72IJFK.js";
import {
  d
} from "./chunk-2NN4DV6B.js";
import {
  M,
  c as c2,
  f,
  h,
  i,
  s as s3,
  u as u4
} from "./chunk-JXCCENBV.js";
import {
  L,
  z as z2
} from "./chunk-3QQ7UK2J.js";
import {
  n as n2,
  r as r2
} from "./chunk-47CFN4JI.js";
import {
  F,
  H,
  V,
  tn
} from "./chunk-5L27TA3I.js";
import {
  s as s4
} from "./chunk-WRETNREX.js";
import {
  u as u3
} from "./chunk-XJP3RSS7.js";
import {
  q
} from "./chunk-DVLEZ3TT.js";
import {
  B,
  S as S2,
  e,
  j,
  l,
  o,
  q as q2,
  r,
  u as u2,
  v,
  x,
  y
} from "./chunk-5GPMO33J.js";
import {
  u
} from "./chunk-CHITL6T5.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import {
  _,
  s
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  re
} from "./chunk-NR66QFNF.js";
import {
  G,
  T,
  U
} from "./chunk-LANOLZOB.js";
import {
  s as s2
} from "./chunk-253Z6EVN.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import {
  a3 as a,
  c,
  m3 as m
} from "./chunk-JM4CKTH2.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/Viewpoint.js
var p;
var l2 = p = class extends n {
  constructor(e3) {
    super(e3), this.rotation = 0, this.scale = 0, this.targetGeometry = null, this.camera = null;
  }
  castRotation(e3) {
    return (e3 %= 360) < 0 && (e3 += 360), e3;
  }
  clone() {
    return new p({ rotation: this.rotation, scale: this.scale, targetGeometry: null != this.targetGeometry ? this.targetGeometry.clone() : null, camera: null != this.camera ? this.camera.clone() : null });
  }
};
__decorate([a({ type: Number, json: { write: true, origins: { "web-map": { default: 0, write: true }, "web-scene": { write: { overridePolicy: m2 } } } } })], l2.prototype, "rotation", void 0), __decorate([m("rotation")], l2.prototype, "castRotation", null), __decorate([a({ type: Number, json: { write: true, origins: { "web-map": { default: 0, write: true }, "web-scene": { write: { overridePolicy: m2 } } } } })], l2.prototype, "scale", void 0), __decorate([a({ types: s4, json: { read: u3, write: true, origins: { "web-scene": { read: u3, write: { overridePolicy: m2 } } } } })], l2.prototype, "targetGeometry", void 0), __decorate([a({ type: d, json: { write: true, origins: { "web-scene": { write: { isRequired: true } } } } })], l2.prototype, "camera", void 0), l2 = p = __decorate([c("esri.Viewpoint")], l2);
var c3 = l2;
function m2() {
  return { enabled: !this.camera };
}

// node_modules/@arcgis/core/views/2d/viewpointUtils.js
var O = 96;
var Q = 39.37;
var T2 = 180 / Math.PI;
function B2(t) {
  return t.wkid ? t : t.spatialReference || S.WGS84;
}
function D(t, e3) {
  return e3.type ? o(t, e3.x, e3.y) : r(t, e3);
}
function W(t) {
  return re(t);
}
function H2(t, e3, n3 = 0) {
  let o2 = t.width, a2 = t.height;
  if (0 !== n3) {
    const e4 = s2(n3), i3 = Math.abs(Math.cos(e4)), c5 = Math.abs(Math.sin(e4));
    o2 = t.width * i3 + t.height * c5, a2 = t.width * c5 + t.height * i3;
  }
  const i2 = Math.max(1, e3[0]), c4 = Math.max(1, e3[1]);
  return Math.max(o2 / i2, a2 / c4) * ct(t.spatialReference);
}
async function J(t, r3, n3, o2) {
  let a2, i2;
  if (!t) return null;
  if (Array.isArray(t) && !t.length) return null;
  if (q.isCollection(t) && (t = t.toArray()), Array.isArray(t) && t.length && "object" == typeof t[0]) {
    const e3 = t.every((t2) => "attributes" in t2), a3 = t.some((t2) => !t2.geometry);
    let i3 = t;
    if (e3 && a3 && r3 && r3.allLayerViews) {
      const e4 = /* @__PURE__ */ new Map();
      for (const r4 of t) {
        const t2 = r4.layer, n5 = e4.get(t2) || [], o4 = r4.attributes[t2.objectIdField];
        null != o4 && n5.push(o4), e4.set(t2, n5);
      }
      const n4 = [];
      e4.forEach((t2, e5) => {
        const o4 = r3.allLayerViews?.find((t3) => t3.layer.id === e5.id);
        if (o4 && "queryFeatures" in o4) {
          const r4 = e5.createQuery();
          r4.objectIds = t2, r4.returnGeometry = true, n4.push(o4.queryFeatures(r4));
        }
      });
      const o3 = await Promise.all(n4), a4 = [];
      for (const t2 of o3) if (t2 && t2.features && t2.features.length) for (const e5 of t2.features) null != e5.geometry && a4.push(e5.geometry);
      i3 = a4;
    }
    for (const t2 of i3) o2 = await J(t2, r3, n3, o2);
    return o2;
  }
  if (Array.isArray(t) && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1]) a2 = new _(t);
  else if (t instanceof s) a2 = t;
  else if ("geometry" in t) {
    if (t.geometry) a2 = t.geometry;
    else if (t.layer) {
      const e3 = t.layer, n4 = r3.allLayerViews?.find((t2) => t2.layer.id === e3.id);
      if (n4 && "queryFeatures" in n4) {
        const r4 = e3.createQuery();
        r4.objectIds = [t.attributes[e3.objectIdField]], r4.returnGeometry = true;
        const o3 = await n4.queryFeatures(r4);
        a2 = o3?.features?.[0]?.geometry;
      }
    }
  }
  if (null == a2) return null;
  switch (a2.type) {
    case "point":
      i2 = new z({ xmin: a2.x, ymin: a2.y, xmax: a2.x, ymax: a2.y, spatialReference: a2.spatialReference });
      break;
    case "extent":
    case "multipoint":
    case "polygon":
    case "polyline":
      i2 = z2(a2);
      break;
    default:
      i2 = a2.extent;
  }
  if (!i2) return null;
  V() || tn(i2.spatialReference, n3) || await F();
  const c4 = H(i2, n3);
  if (!c4) return null;
  if (o2) {
    const t2 = c4.center, e3 = t2.clone();
    e3.x = L(t2.x, o2.center.x, n3), e3.x !== t2.x && c4.centerAt(e3), o2 = o2.union(c4);
  } else o2 = c4;
  return o2;
}
function K(t) {
  if (t && (!Array.isArray(t) || "number" != typeof t[0]) && ("object" == typeof t || Array.isArray(t) && "object" == typeof t[0])) {
    if ("layer" in t && null != t.layer?.minScale && null != t.layer.maxScale) {
      const e3 = t.layer;
      return { min: e3.minScale, max: e3.maxScale };
    }
    if (Array.isArray(t) && t.length && t.every((t2) => "layer" in t2)) {
      let e3 = 0, r3 = 0;
      for (const n3 of t) {
        const t2 = n3.layer;
        t2?.minScale && t2.maxScale && (e3 = t2.minScale < e3 ? t2.minScale : e3, r3 = t2.maxScale > r3 ? t2.maxScale : r3);
      }
      return e3 && r3 ? { min: e3, max: r3 } : null;
    }
  }
}
function X(t, e3) {
  const r3 = B2(t);
  return T(r3, e3) || r3.imageCoordinateSystem || e3.imageCoordinateSystem ? t : H(t, e3);
}
async function Y(e3, r3) {
  if (!e3 || !r3) return new c3({ targetGeometry: new _(), scale: 0, rotation: 0 });
  let n3 = r3.spatialReference;
  const { constraints: o2, padding: a2, viewpoint: i2, size: c4 } = r3, s5 = [a2 ? c4[0] - a2.left - a2.right : c4[0], a2 ? c4[1] - a2.top - a2.bottom : c4[1]];
  let u5 = null;
  e3 instanceof c3 ? u5 = e3 : e3.viewpoint ? u5 = e3.viewpoint : e3.target && "esri.Viewpoint" === e3.target.declaredClass && (u5 = e3.target);
  let l3 = null;
  u5?.targetGeometry ? l3 = u5.targetGeometry : e3 instanceof z ? l3 = e3 : e3 instanceof s ? l3 = await J(e3, r3, n3) : e3 && (l3 = await J(e3.center, r3, n3) || await J(e3.target, r3, n3) || await J(e3, r3, n3)), !l3 && i2?.targetGeometry ? l3 = i2.targetGeometry : !l3 && r3.extent && (l3 = r3.extent), n3 || (n3 = B2(r3.spatialReference || r3.extent || l3)), V() || T(l3.spatialReference, n3) || tn(l3.spatialReference, n3) || await F();
  const f2 = X(l3, n3), m3 = "center" in f2 ? f2.center : f2;
  false !== r3.pickClosestTarget && "point" === m3.type && "point" === i2.targetGeometry?.type && (m3.x = L(m3.x, i2.targetGeometry.x, m3.spatialReference));
  let y2 = 0;
  u5 ? y2 = u5.rotation : e3.hasOwnProperty("rotation") ? y2 = e3.rotation : i2 && (y2 = i2.rotation);
  let p2 = 0;
  p2 = null != u5?.targetGeometry && "point" === u5.targetGeometry.type ? u5.scale : "scale" in e3 && e3.scale ? e3.scale : "zoom" in e3 && -1 !== e3.zoom && o2 && o2.effectiveLODs ? o2.zoomToScale(e3.zoom) : Array.isArray(l3) || "point" === l3.type || "extent" === l3.type && 0 === l3.width && 0 === l3.height ? i2.scale : H2(X(l3.extent, n3), s5, y2);
  const g = K(e3.target ?? e3);
  g && (g.min && g.min < p2 ? p2 = g.min : g.max && g.max > p2 && (p2 = g.max));
  let x2 = new c3({ targetGeometry: m3, scale: p2, rotation: y2 });
  return o2 && (x2 = o2.fit(x2), o2.constrainByGeometry(x2), o2.rotationEnabled || (x2.rotation = i2.rotation)), x2;
}
function Z(t, e3) {
  const r3 = t.targetGeometry, n3 = e3.targetGeometry;
  return r3.x = n3.x, r3.y = n3.y, r3.spatialReference = n3.spatialReference, t.scale = e3.scale, t.rotation = e3.rotation, t;
}
function $(t, e3, r3) {
  return r3 ? o(t, 0.5 * (e3[0] - r3.right + r3.left), 0.5 * (e3[1] - r3.bottom + r3.top)) : l(t, e3, 0.5);
}
var _2 = (function() {
  const t = n2();
  return function(e3, r3, n3) {
    const o2 = r3.targetGeometry;
    D(t, o2);
    const a2 = 0.5 * ot(r3);
    return e3.xmin = t[0] - a2 * n3[0], e3.ymin = t[1] - a2 * n3[1], e3.xmax = t[0] + a2 * n3[0], e3.ymax = t[1] + a2 * n3[1], e3.spatialReference = o2.spatialReference, e3;
  };
})();
function tt(t, e3, r3, n3, o2) {
  return xt(t, e3, r3.center), t.scale = H2(r3, n3), o2?.constraints?.constrain(t), t;
}
function et(t, e3, r3, n3) {
  return lt(t, e3, r3, n3), u4(t, t);
}
var rt = (function() {
  const t = n2();
  return function(e3, r3, n3) {
    return B(e3, st(e3, r3), $(t, r3, n3));
  };
})();
var nt = (function() {
  const t = e2(), e3 = n2();
  return function(r3, n3, o2, a2) {
    const c4 = ot(n3), l3 = it(n3);
    return o(e3, c4, c4), h(t, e3), s3(t, t, l3), i(t, t, rt(e3, o2, a2)), i(t, t, [0, a2.top - a2.bottom]), o(r3, t[4], t[5]);
  };
})();
function ot(t) {
  return t.scale * at(t.targetGeometry?.spatialReference);
}
function at(t) {
  return U(t) ? 1 / (W(t) * Q * O) : 1;
}
function it(t) {
  return u(t.rotation) || 0;
}
function ct(t) {
  return U(t) ? W(t) * Q * O : 1;
}
function st(t, e3) {
  return l(t, e3, 0.5);
}
var ut = (function() {
  const t = n2(), e3 = n2(), r3 = n2();
  return function(n3, o2, u5, l3, f2, m3) {
    return x(t, o2), l(e3, u5, 0.5 * m3), o(r3, 1 / l3 * m3, -1 / l3 * m3), f(n3, e3), f2 && s3(n3, n3, f2), c2(n3, n3, r3), i(n3, n3, t), n3;
  };
})();
var lt = (function() {
  const t = n2();
  return function(e3, r3, n3, o2) {
    const a2 = ot(r3), i2 = it(r3);
    return D(t, r3.targetGeometry), ut(e3, t, n3, a2, i2, o2);
  };
})();
var ft = (function() {
  const t = n2();
  return function(e3, r3, n3, o2) {
    const a2 = ot(r3);
    return D(t, r3.targetGeometry), ut(e3, t, n3, a2, 0, o2);
  };
})();
function mt(t) {
  const e3 = G(t);
  return e3 ? e3.valid[1] - e3.valid[0] : 0;
}
function yt(t, e3) {
  return Math.round(mt(t) / e3);
}
var pt = (function() {
  const t = n2(), e3 = n2(), r3 = [0, 0, 0];
  return function(n3, o2, a2) {
    e(t, n3, o2), v(t, t), e(e3, n3, a2), v(e3, e3), y(r3, t, e3);
    let i2 = Math.acos(j(t, e3) / (q2(t) * q2(e3))) * T2;
    return r3[2] < 0 && (i2 = -i2), isNaN(i2) && (i2 = 0), i2;
  };
})();
var gt = (function() {
  const t = n2();
  return function(e3, r3, n3, o2) {
    const a2 = e3.targetGeometry;
    return Z(e3, r3), nt(t, r3, n3, o2), a2.x += t[0], a2.y += t[1], e3;
  };
})();
var xt = function(t, e3, r3) {
  Z(t, e3);
  const n3 = t.targetGeometry;
  return n3.x = r3.x, n3.y = r3.y, n3.spatialReference = r3.spatialReference, t;
};
var ht = (function() {
  const t = n2();
  return function(e3, r3, n3, o2, a2) {
    a2 || (a2 = "center"), B(t, n3, o2), l(t, t, 0.5);
    const i2 = t[0], c4 = t[1];
    switch (a2) {
      case "center":
        o(t, 0, 0);
        break;
      case "left":
        o(t, -i2, 0);
        break;
      case "top":
        o(t, 0, c4);
        break;
      case "right":
        o(t, i2, 0);
        break;
      case "bottom":
        o(t, 0, -c4);
        break;
      case "top-left":
        o(t, -i2, c4);
        break;
      case "bottom-left":
        o(t, -i2, -c4);
        break;
      case "top-right":
        o(t, i2, c4);
        break;
      case "bottom-right":
        o(t, i2, -c4);
    }
    return kt(e3, r3, t), e3;
  };
})();
function bt(t, e3, r3) {
  return Z(t, e3), t.rotation += r3, t;
}
function wt(t, e3, r3) {
  return Z(t, e3), t.rotation = r3, t;
}
var dt = (function() {
  const t = n2();
  return function(e3, r3, n3, o2, a2) {
    return Z(e3, r3), isNaN(n3) || 0 === n3 || (At(t, o2, r3, a2), e3.scale = r3.scale * n3, St(t, t, e3, a2), kt(e3, e3, o(t, t[0] - o2[0], o2[1] - t[1]))), e3;
  };
})();
function jt(t, e3, r3) {
  return Z(t, e3), t.scale = r3, t;
}
var Gt = (function() {
  const t = n2();
  return function(e3, r3, n3, o2, a2, i2) {
    return Z(e3, r3), isNaN(n3) || 0 === n3 || (At(t, a2, r3, i2), e3.scale = r3.scale * n3, e3.rotation += o2, St(t, t, e3, i2), kt(e3, e3, o(t, t[0] - a2[0], a2[1] - t[1]))), e3;
  };
})();
var Rt = (function() {
  const t = n2(), e3 = n2();
  return function(r3, n3, o2, a2, i2, c4, s5) {
    return rt(e3, c4, s5), u2(t, i2, e3), a2 ? Gt(r3, n3, o2, a2, t, c4) : dt(r3, n3, o2, t, c4);
  };
})();
var At = (function() {
  const t = e2();
  return function(e3, r3, n3, o2) {
    return S2(e3, r3, et(t, n3, o2, 1));
  };
})();
var St = (function() {
  const t = e2();
  return function(e3, r3, n3, o2) {
    return S2(e3, r3, lt(t, n3, o2, 1));
  };
})();
var kt = (function() {
  const t = n2(), e3 = e2();
  return function(r3, n3, o2) {
    Z(r3, n3);
    const a2 = ot(n3), i2 = r3.targetGeometry;
    return M(e3, it(n3)), c2(e3, e3, r2(a2, a2)), S2(t, o2, e3), i2.x += t[0], i2.y += t[1], r3;
  };
})();

export {
  c3 as c,
  H2 as H,
  Y,
  Z,
  $,
  _2 as _,
  tt,
  rt,
  ot,
  at,
  ut,
  lt,
  ft,
  mt,
  yt,
  pt,
  gt,
  xt,
  ht,
  bt,
  wt,
  jt,
  Gt,
  Rt,
  kt
};
//# sourceMappingURL=chunk-NOKYL2FE.js.map
