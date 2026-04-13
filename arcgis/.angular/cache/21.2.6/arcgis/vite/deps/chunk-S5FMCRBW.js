import {
  De,
  Qs,
  et,
  mr,
  nt,
  se,
  st
} from "./chunk-MKUY72VH.js";

// node_modules/@arcgis/core/chunks/FlatGeometry.js
function i({ type: s, vertexCount: o, vertexXY: i2, vertexZ: f, vertexM: u, partCount: p, partOffsets: l, partFlags: c, segmentFlags: y, segmentIndices: A, segmentParams: g, segmentCountArc: w, segmentCountBezier: C }) {
  const v = new m[s]();
  if (v instanceof se) return v.setXYCoords(i2[0], i2[1]), f && v.setZ(f[0]), u && v.setM(u[0]), v;
  const z = new nt({ fromArray: i2 });
  if (v.setAttributeStreamRef(0, z), f) {
    const e = new nt({ fromArray: f });
    v.setAttributeStreamRef(1, e);
  }
  if (u) {
    const e = new nt({ fromArray: u });
    v.setAttributeStreamRef(2, e);
  }
  if (v instanceof De) return v.resizeNoInit(o), v;
  {
    const e = p + 1, t = new st({ fromArray: l, size: e }), s2 = new et({ fromArray: c, size: e });
    v.setPathStreamRef(t), v.setPathFlagsStreamRef(s2);
  }
  if (null == y) return v.resizeImpl(o), v;
  const P = new et({ fromArray: y }), S = new st({ fromArray: A }), x = new nt({ fromArray: g });
  return v.setSegmentData(S, x, P, g.length), v.incCurveType(4, w), v.incCurveType(2, C), v.modifyCurveCounter(w + C), v.resizeImpl(o), v;
}
var m = { point: se, multipoint: De, polyline: Qs, polygon: mr };

export {
  i
};
//# sourceMappingURL=chunk-S5FMCRBW.js.map
