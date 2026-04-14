import {
  p
} from "./chunk-VYBZD663.js";
import {
  tn
} from "./chunk-HHAFAO43.js";
import {
  n as n2
} from "./chunk-KEY3YQEB.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
import {
  r
} from "./chunk-PFC2RERS.js";
import {
  n2 as n
} from "./chunk-TX75HZKJ.js";

// node_modules/@arcgis/core/views/3d/layers/SceneLayerWorkerHandle.js
var h = class {
  constructor(s, t, e, o2, r2, n3) {
    this.layout = s, this.interleavedVertexData = t, this.indices = e, this.hasColors = o2, this.hasModifications = r2, this.positionData = n3;
  }
};
var a = class {
  constructor(s, t, e, o2, r2, n3, i) {
    this.componentOffsets = s, this.featureIds = t, this.anchorIds = e, this.anchors = o2, this.transformedGeometry = r2, this.globalTrafo = n3, this.obb = i;
  }
};
var p2 = new r({ deallocator: null });
var l = n2();
function u(t, e, o2) {
  p2.clear();
  let n3 = 1 / 0, h2 = 1 / 0, a2 = -1 / 0, c = -1 / 0, u2 = false;
  for (const g2 of e) {
    const t2 = "clip" === g2.type ? 2 : "mask" === g2.type ? 1 : 0, e2 = g2.geometry;
    let f3 = (s) => s;
    if (e2.spatialReference) {
      if (!tn(e2.spatialReference, o2)) {
        n.getLogger("esri.views.3d.layers.SceneLayerWorkerHandle").warn("im-modification-projection-failed", "Can't project modification polygon into layer spatial reference, ignoring modification", { polygon: e2 });
        continue;
      }
      f3 = (s) => (p(s, e2.spatialReference, l, o2), l);
    }
    u2 = u2 || 1 === t2;
    const m = e2.rings.length, d = e2.rings.some((s) => s.length < 3);
    if (0 === m || d) n.getLogger("esri.views.3d.layers.SceneLayerWorkerHandle").warn("im-modification-invalid-polygon", "Ignoring invalid modification polygon (no rings or rings with less than 3 vertices).", { polygon: e2 });
    else {
      p2.push(t2), p2.push(m);
      for (const s of e2.rings) {
        p2.push(s.length);
        for (const t3 of s) {
          const s2 = f3(t3);
          p2.push(s2[0]), p2.push(s2[1]), p2.push(s2[2] ?? 0), n3 = Math.min(n3, s2[0]), h2 = Math.min(h2, s2[1]), a2 = Math.max(a2, s2[0]), c = Math.max(c, s2[1]);
        }
      }
    }
  }
  if (null != t) if (u2) {
    const s = 1e-4;
    p2.push(2), p2.push(2), p2.push(4), p2.push(n3 - s), p2.push(h2 - s), p2.push(0), p2.push(a2 + s), p2.push(h2 - s), p2.push(0), p2.push(a2 + s), p2.push(c + s), p2.push(0), p2.push(n3 - s), p2.push(c + s), p2.push(0), p2.push(4), p2.push(t[0]), p2.push(t[1]), p2.push(0), p2.push(t[2]), p2.push(t[1]), p2.push(0), p2.push(t[2]), p2.push(t[3]), p2.push(0), p2.push(t[0]), p2.push(t[3]), p2.push(0);
  } else p2.push(1), p2.push(1), p2.push(4), p2.push(t[0]), p2.push(t[1]), p2.push(0), p2.push(t[2]), p2.push(t[1]), p2.push(0), p2.push(t[2]), p2.push(t[3]), p2.push(0), p2.push(t[0]), p2.push(t[3]), p2.push(0);
  p2.push(3);
  const f2 = new Float64Array(p2.length);
  for (let s = 0; s < p2.length; ++s) f2[s] = p2.at(s);
  return f2;
}
function f(s, t) {
  let e = 0;
  for (const o2 of t) {
    const t2 = o2.geometry, r2 = t2.rings.length, n3 = t2.rings.some((s2) => s2.length < 3);
    if (0 !== r2 && !n3) {
      e += 1, e += 1;
      for (let o3 = 0; o3 < t2.rings.length; ++o3) {
        const r3 = t2.rings[o3];
        e += 1;
        for (let n4 = 0; n4 < r3.length; ++n4) {
          const r4 = [s[e + 0], s[e + 1], s[e + 2]];
          e += 3, t2.setPoint(o3, n4, r4);
        }
      }
    }
  }
}
function g(s, t) {
  let e = 0, o2 = t.geometry;
  const r2 = o2.rings.length, i = o2.rings.some((s2) => s2.length < 3);
  if (0 === r2 || i) return null;
  o2 = o2.clone(), o2.spatialReference = S.WGS84, e += 1, e += 1;
  for (let n3 = 0; n3 < o2.rings.length; ++n3) {
    const t2 = o2.rings[n3];
    e += 1;
    for (let r3 = 0; r3 < t2.length; ++r3) {
      const t3 = [s[e + 0], s[e + 1], s[e + 2]];
      e += 3, o2.setPoint(n3, r3, t3);
    }
  }
  return o2;
}

export {
  h,
  a,
  u,
  f,
  g
};
//# sourceMappingURL=chunk-6RW4R63U.js.map
