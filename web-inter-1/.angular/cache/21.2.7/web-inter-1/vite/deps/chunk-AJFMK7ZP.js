import {
  B,
  N,
  w as w2
} from "./chunk-4AH3SSMZ.js";
import {
  E as E2,
  Q,
  bt,
  c as c4,
  f3,
  ft,
  g,
  ht,
  o as o2,
  p as p3,
  r as r4,
  rt,
  wt,
  x,
  x2
} from "./chunk-Q74NDFLX.js";
import {
  e as e4
} from "./chunk-E7ANZYHQ.js";
import {
  e as e3,
  i as i3
} from "./chunk-T6HQ5ZAR.js";
import {
  R
} from "./chunk-RQ7CHE6V.js";
import {
  et,
  ot,
  t as t2
} from "./chunk-2TFFP4ZQ.js";
import {
  f as f2
} from "./chunk-FA7DZUD2.js";
import {
  f
} from "./chunk-U53G3X2R.js";
import {
  t
} from "./chunk-TZSKNWRI.js";
import {
  n as n4
} from "./chunk-QOQBWURX.js";
import {
  c as c3
} from "./chunk-IT6BFYBX.js";
import {
  E,
  c as c2,
  u as u2
} from "./chunk-SGNC5H35.js";
import {
  j
} from "./chunk-QXDP3GXO.js";
import {
  n as n3
} from "./chunk-IRS5H2YE.js";
import {
  a,
  r as r3,
  s,
  u
} from "./chunk-TVLXQ42J.js";
import {
  m as m2,
  r as r2
} from "./chunk-OR24MDO6.js";
import {
  o
} from "./chunk-4YOIFLLS.js";
import {
  i as i2,
  y
} from "./chunk-U54DMEX7.js";
import {
  _,
  n as n2,
  r
} from "./chunk-KEY3YQEB.js";
import {
  h,
  m,
  p
} from "./chunk-XYIHFHUH.js";
import {
  H,
  O,
  Y,
  d as d2,
  i,
  k,
  p as p2,
  w
} from "./chunk-MZFPTE7Q.js";
import {
  e as e2
} from "./chunk-XNNZ2U24.js";
import {
  d,
  e2 as e
} from "./chunk-2KP24SU5.js";
import {
  has,
  n2 as n
} from "./chunk-XE7VYYSA.js";
import {
  c
} from "./chunk-XCN5EJK7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/renderers/support/RenderingInfo.js
var t3 = class {
  constructor(t8, l5) {
    this.renderer = t8, this.symbol = l5, this.color = null, this.size = null, this.opacity = null, this.outlineSize = null, this.heading = null, this.tilt = null, this.roll = null;
  }
};
var l = class {
  constructor(t8, l5) {
    this.output = t8, this.input = l5;
  }
};

// node_modules/@arcgis/core/renderers/support/renderingInfoUtils.js
function r5(n5, e7) {
  if (null != n5.symbol) return n5.symbol;
  const t8 = e7?.renderer;
  return null != t8 && "dot-density" !== t8.type ? t8.getSymbol(n5, e7) : null;
}
function o3(n5, e7) {
  return l2(n5, r5(n5, e7), e7);
}
function l2(r9, o6, l5) {
  if (!o6) return null;
  const i6 = l5?.renderer, a5 = new t3(i6, o6);
  if (null == i6 || !("visualVariables" in i6) || !i6.visualVariables) return a5;
  const u8 = j(i6, r9, l5) ?? [], s4 = ["proportional", "proportional", "proportional"], c7 = [null, null, null];
  for (const { type: n5, variable: t8, output: p8, input: f7 } of u8) switch (n5) {
    case "color":
      if (null == p8) continue;
      a5.color = new l(p8.toRgba(), f7);
      break;
    case "size":
      if ("outline" === t8.target) {
        if (null == p8) continue;
        a5.outlineSize = new l(p8 ?? 0, f7);
      } else {
        const n6 = t8.axis, e7 = t8.useSymbolValue ? "symbol-value" : p8 ?? "proportional";
        switch (n6) {
          case "width":
            s4[0] = e7, c7[0] = f7;
            break;
          case "depth":
            s4[1] = e7, c7[1] = f7;
            break;
          case "height":
            s4[2] = e7, c7[2] = f7;
            break;
          case "width-and-depth":
            s4[0] = s4[1] = e7, c7[0] = c7[1] = f7;
            break;
          default:
            s4[0] = s4[1] = s4[2] = e7, c7[0] = c7[1] = c7[2] = f7;
        }
      }
      break;
    case "opacity":
      if (null == p8) continue;
      a5.opacity = new l(p8, f7);
      break;
    case "rotation":
      if (null == p8) continue;
      switch (t8.axis) {
        case "tilt":
          a5.tilt = new l(p8, f7);
          break;
        case "roll":
          a5.roll = new l(p8, f7);
          break;
        default:
          a5.heading = new l(p8, f7);
      }
  }
  return "proportional" === s4[0] && "proportional" === s4[1] && "proportional" === s4[2] || (a5.size = new l(s4, c7)), a5;
}
async function i4(n5, e7) {
  return null != n5.symbol ? n5.symbol : e7?.renderer?.getSymbolAsync(n5, e7) ?? null;
}
async function a2(n5, e7) {
  return l2(n5, await i4(n5, e7), e7);
}
function u3(n5, e7 = 0) {
  const t8 = n5[e7];
  return "number" == typeof t8 && isFinite(t8) ? t8 : null;
}
function s2(n5) {
  for (let e7 = 0; e7 < 3; e7++) {
    const t8 = n5[e7];
    if ("number" == typeof t8) return isFinite(t8) ? t8 : 0;
  }
  return 0;
}

// node_modules/@arcgis/core/views/3d/layers/graphics/constants.js
var r6 = 1.2;
var t4 = a;

// node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DPathSymbolLayerConstants.js
var o4 = 3;
var t5 = 3;
var c5 = 10;

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/LodResources.js
var i5 = class {
  constructor(e7, t8, r9, s4) {
    this.material = e7, this.buffer = t8, this.numVertices = r9, this.boundingInfo = s4, this.bufferWriter = e7.createBufferWriter();
  }
  get layout() {
    return this.bufferWriter.layout;
  }
  get numTriangles() {
    return this.numVertices / 3;
  }
  computeUsedMemory() {
    return this.buffer.byteLength + y;
  }
  get renderGeometry() {
    return this;
  }
};
var o5 = class {
  constructor(e7) {
    this.engineGeometry = e7;
    const t8 = this.material, r9 = this.engineGeometry, s4 = r9.attributes, n5 = r9.boundingInfo, o6 = t8.createBufferWriter(), u8 = o6.layout, m10 = o6.elementCount(s4), a5 = u8.createBuffer(m10);
    o6.write(null, null, s4, null, a5, 0), this.renderGeometry = new i5(t8, a5.buffer, m10, n5);
  }
  get material() {
    return this.engineGeometry.material;
  }
  get numVertices() {
    return this.engineGeometry.indexCount;
  }
  get numTriangles() {
    return this.numVertices / 3;
  }
  get boundingInfo() {
    return this.engineGeometry.boundingInfo;
  }
  computeUsedMemory() {
    return Array.from(this.engineGeometry.attributes.values()).reduce((e7, r9) => e7 + i2(r9.data, r9.indices), 0);
  }
  intersect(e7, t8, r9, s4, n5, i6, o6, m10) {
    const a5 = this.engineGeometry;
    this.material.intersect(a5, e7.transform.transform, e7, r9, s4, (r10, s5, a6) => u4(r10, s5, a6, e7, t8, i6, o6, n5, m10));
  }
};
function u4(e7, t8, r9, i6, o6, u8, m10, a5, c7) {
  if (e7 < 0) return;
  if (o6 && !o6(i6.rayBegin, i6.rayEnd, e7)) return;
  const l5 = new e4(u8.layerViewUid, u8.graphicUid(a5), r9, m10, c7);
  if ((null == i6.results.min.distance || e7 < i6.results.min.distance) && i6.results.min.set(3, l5, e7, t8, i6.transform.transform), (null == i6.results.max.distance || e7 > i6.results.max.distance) && i6.results.max.set(3, l5, e7, t8, i6.transform.transform), 2 === i6.options.store) {
    const r10 = new f2(i6.results.min.ray);
    r10.set(3, l5, e7, t8, i6.transform.transform), i6.results.all.push(r10);
  }
}
var m3 = class {
  constructor(e7, t8 = null) {
    this.geometry = e7, this.textures = t8;
  }
  get material() {
    return this.geometry.material;
  }
  get numTriangles() {
    return this.geometry.numTriangles;
  }
};
var a3 = class {
  constructor(t8, r9, s4) {
    this.components = t8, this.minScreenSpaceRadius = r9, this.pivotOffset = s4;
    const n5 = c(this.components.map((e7) => e7.geometry));
    this.numVertices = n5.reduce((e7, t9) => e7 + t9.numVertices, 0);
  }
};
var c6 = class {
  constructor(e7) {
    this.levels = e7, this.levels.sort((e8, t8) => e8.minScreenSpaceRadius === t8.minScreenSpaceRadius ? e8.numVertices - t8.numVertices : e8.minScreenSpaceRadius - t8.minScreenSpaceRadius);
  }
  get materialParameters() {
    return this.levels[0].components[0].geometry.material.parameters;
  }
  getMaterials() {
    const t8 = [];
    return this.levels.forEach((e7) => e7.components.forEach((e8) => t8.push(e8.geometry.material))), c(t8);
  }
  getTextures() {
    const t8 = new Array();
    return this.levels.forEach((e7) => e7.components.forEach((e8) => {
      null != e8.textures && t8.push(...e8.textures);
    })), c(t8);
  }
  getGeometries() {
    const t8 = new Array();
    return this.levels.forEach((e7) => e7.components.forEach((e8) => {
      t8.push(e8.geometry);
    })), c(t8);
  }
  getEngineGeometries() {
    return this.getGeometries().map((e7) => e7.engineGeometry).filter((e7) => null != e7);
  }
  computeUsedMemory() {
    const e7 = this.getGeometries(), t8 = this.getTextures(), r9 = e7.reduce((e8, t9) => e8 + t9.computeUsedMemory(), 0);
    return t8.reduce((e8, t9) => e8 + t9.usedMemory, 0) + r9;
  }
};

// node_modules/@arcgis/core/views/3d/layers/graphics/primitiveObjectSymbolUtils.js
function S(e7) {
  switch (e7) {
    case "sphere":
    case "cube":
    case "diamond":
    case "cylinder":
    case "cone":
    case "inverted-cone":
    case "tetrahedron":
      return true;
  }
  return false;
}
function l3(S3, l5) {
  const p8 = (n5, s4, a5 = false) => new c6(n5.map((n6) => {
    const c7 = s4(n6.tesselation);
    return a5 && bt(c7), new a3([new m3(new o5(c7))], n6.minScreenSpaceRadius);
  }));
  switch (S3) {
    case "sphere":
      return p8([{ tesselation: 0, minScreenSpaceRadius: 0 }, { tesselation: 1, minScreenSpaceRadius: 8 }, { tesselation: 2, minScreenSpaceRadius: 16 }, { tesselation: 3, minScreenSpaceRadius: 50 }, { tesselation: 4, minScreenSpaceRadius: 250 }], (e7) => ht(l5, 0.5, e7, true));
    case "cube":
      return p8([{ tesselation: 0, minScreenSpaceRadius: 0 }], () => E2(l5, 1));
    case "cone":
      return p8(m4, (e7) => ft(l5, 1, 0.5, e7, false), true);
    case "inverted-cone":
      return p8(m4, (e7) => ft(l5, 1, 0.5, e7, true), true);
    case "cylinder":
      return p8(m4, (e7) => wt(l5, 1, 0.5, e7, [0, 0, 1], [0, 0, 0.5]));
    case "tetrahedron":
      return p8([{ tesselation: 0, minScreenSpaceRadius: 0 }], () => rt(l5, 1), true);
    case "diamond":
      return p8([{ tesselation: 0, minScreenSpaceRadius: 0 }], () => Q(l5, 1), true);
    default:
      return;
  }
}
var m4 = [{ tesselation: 6, minScreenSpaceRadius: 0 }, { tesselation: 18, minScreenSpaceRadius: 7 }, { tesselation: 64, minScreenSpaceRadius: 65 }];

// node_modules/@arcgis/core/views/3d/layers/graphics/SymbolComplexity.js
var e5 = class {
  constructor(e7) {
    this.estimated = false, this.verticesPerFeature = e7.verticesPerFeature ?? 0, this.verticesPerCoordinate = e7.verticesPerCoordinate ?? 0, this.drawCallsPerFeature = e7.drawCallsPerFeature ?? 0, this.memory = e7.memory ?? new a4();
  }
};
var t6 = class extends e5 {
  constructor(e7) {
    super(e7), this.estimated = true;
  }
};
var s3 = class extends e5 {
  constructor(e7, t8) {
    super(t8), this.numComplexities = e7;
  }
};
var r7 = class extends t6 {
  constructor(e7, t8) {
    super(t8), this.numComplexities = e7;
  }
};
var a4 = class {
  constructor() {
    this.bytesPerFeature = 0, this.bytesPerFeatureLabel = 0, this.resourceBytes = 0, this.draped = { bytesPerFeature: 0, bytesPerFeatureLabel: 0 };
  }
};

// node_modules/@arcgis/core/views/3d/layers/graphics/defaultSymbolComplexity.js
var P = new t6({});
function l4(e7) {
  if ("web-style" === e7.type) return P;
  return F(e7.symbolLayers.toArray().map((r9) => p4(e7, r9)));
}
function F(e7) {
  let r9 = 0, t8 = 0, a5 = 0, s4 = false, u8 = 0;
  const y2 = new a4();
  for (const o6 of e7) null != o6 && (r9 += o6.verticesPerFeature, t8 += o6.verticesPerCoordinate, a5 += o6.drawCallsPerFeature, y2.bytesPerFeature += o6.memory.bytesPerFeature, y2.bytesPerFeatureLabel += o6.memory.bytesPerFeatureLabel, y2.resourceBytes += o6.memory.resourceBytes, y2.draped.bytesPerFeature += o6.memory.bytesPerFeature, y2.draped.bytesPerFeatureLabel += o6.memory.bytesPerFeatureLabel, s4 = s4 || o6.estimated, ++u8);
  return s4 ? new r7(u8, { verticesPerFeature: r9, verticesPerCoordinate: t8, drawCallsPerFeature: a5, memory: y2 }) : new s3(u8, { verticesPerFeature: r9, verticesPerCoordinate: t8, drawCallsPerFeature: a5, memory: y2 });
}
function m5(e7) {
  const r9 = F(e7);
  return r9.numComplexities > 0 && (r9.verticesPerFeature /= r9.numComplexities, r9.verticesPerCoordinate /= r9.numComplexities, r9.drawCallsPerFeature /= r9.numComplexities, r9.memory.bytesPerFeature /= r9.numComplexities, r9.memory.bytesPerFeatureLabel /= r9.numComplexities, r9.memory.resourceBytes /= r9.numComplexities, r9.memory.draped.bytesPerFeature /= r9.numComplexities, r9.memory.draped.bytesPerFeatureLabel /= r9.numComplexities), r9;
}
var d3 = {};
function p4(s4, o6) {
  const b4 = L(s4, o6), i6 = i3(o6) ? 2 : 0;
  switch (o6.type) {
    case "extrude":
      return new e5({ verticesPerFeature: -12, verticesPerCoordinate: 12, drawCallsPerFeature: i6, memory: b4 });
    case "fill":
      if ("mesh-3d" === s4.type) return new e5({ drawCallsPerFeature: i6, memory: b4 });
      if (null != o6.outline && o6.outline.size > 0) return new e5({ verticesPerFeature: -12, verticesPerCoordinate: 9, memory: b4 });
    case "water":
      return new e5({ verticesPerFeature: -6, verticesPerCoordinate: 3, memory: b4 });
    case "line":
      return new e5({ verticesPerFeature: -6, verticesPerCoordinate: 6, memory: b4 });
    case "object":
      return o6.resource?.href ? new t6({ verticesPerFeature: 100, memory: b4 }) : __spreadProps(__spreadValues({}, C(o6.resource?.primitive ?? c3)), { memory: b4 });
    case "path": {
      let e7 = 0, s5 = 0;
      switch (o6.profile) {
        case "circle":
          e7 = c5;
          break;
        case "quad":
          e7 = 4;
          break;
        default:
          return void o6.profile;
      }
      switch (o6.join) {
        case "round":
          s5 = o4;
          break;
        case "miter":
        case "bevel":
          s5 = 1;
          break;
        default:
          return;
      }
      const u8 = 2 * e7, i7 = e7 * s5 * 2, n5 = i7 + u8;
      let c7 = -2 * i7 - u8;
      switch (o6.cap) {
        case "none":
          break;
        case "butt":
        case "square":
          c7 += 2 * (e7 - 1);
          break;
        case "round":
          c7 += 2 * (e7 * (t5 - 1) * 2 + e7);
          break;
        default:
          return;
      }
      return new e5({ verticesPerFeature: c7, verticesPerCoordinate: n5, memory: b4 });
    }
    case "text": {
      const e7 = "label-3d" === s4.type ? 0 : 2;
      return new e5({ verticesPerFeature: 6, memory: b4, drawCallsPerFeature: e7 });
    }
    case "icon":
      return new e5({ verticesPerFeature: 6, memory: b4 });
    default:
      return;
  }
}
function L(e7, r9) {
  const t8 = "point-3d" === e7.type;
  switch (r9.type) {
    case "extrude":
      return r9.edges && r9.edges.size > 0 ? w3.EXTRUDE_EDGES : w3.EXTRUDE;
    case "fill":
      return null != r9.outline && r9.outline.size > 0 ? w3.FILL_OUTLINE : w3.FILL;
    case "water":
      return w3.FILL;
    case "line":
      return "round" === r9.join ? w3.LINE_ROUND : w3.LINE_MITER;
    case "path":
      switch (r9.join) {
        case "round":
          switch (r9.profile) {
            case "circle":
              return w3.PATH_ROUND_CIRCLE;
            case "quad":
              return w3.PATH_ROUND_QUAD;
            default:
              return void r9.profile;
          }
        case "miter":
        case "bevel":
          switch (r9.profile) {
            case "circle":
              return w3.PATH_MITER_CIRCLE;
            case "quad":
              return w3.PATH_MITER_QUAD;
            default:
              return void r9.profile;
          }
        default:
          return;
      }
    case "object":
      return t8 ? w3.OBJECT_POINT : w3.OBJECT_POLYGON;
    case "icon":
    case "text":
      return t8 ? w3.ICON_POINT : w3.ICON_POLYGON;
    default:
      return;
  }
}
function C(e7) {
  const r9 = d3[e7];
  if (r9) return r9;
  const t8 = f4(l3(e7, new R({}, { spherical: true })).levels);
  return d3[e7] = new e5({ verticesPerFeature: t8 }), d3[e7];
}
function f4(e7) {
  return e7.reduce((e8, r9, t8) => e8 + r9.numVertices * (1 / 10 ** t8), 0) / e7.reduce((e8, r9, t8) => e8 + 1 / 10 ** t8, 0);
}
var w3 = { ICON_POINT: { bytesPerFeature: 2658, bytesPerFeatureLabel: 3484, resourceBytes: 0, draped: { bytesPerFeature: 1845, bytesPerFeatureLabel: 3498 } }, ICON_POLYGON: { bytesPerFeature: 3086, bytesPerFeatureLabel: 2996, resourceBytes: 0, draped: { bytesPerFeature: 2694, bytesPerFeatureLabel: 3014 } }, OBJECT_POINT: { bytesPerFeature: 497, bytesPerFeatureLabel: 2933, resourceBytes: 0, draped: { bytesPerFeature: 497, bytesPerFeatureLabel: 2933 } }, OBJECT_POLYGON: { bytesPerFeature: 867, bytesPerFeatureLabel: 2491, resourceBytes: 0, draped: { bytesPerFeature: 867, bytesPerFeatureLabel: 2491 } }, LINE_MITER: { bytesPerFeature: 2337, bytesPerFeatureLabel: 2658, resourceBytes: 0, draped: { bytesPerFeature: 1864, bytesPerFeatureLabel: 2656 } }, LINE_ROUND: { bytesPerFeature: 2341, bytesPerFeatureLabel: 2672, resourceBytes: 0, draped: { bytesPerFeature: 1873, bytesPerFeatureLabel: 2643 } }, PATH_MITER_CIRCLE: { bytesPerFeature: 22374, bytesPerFeatureLabel: 2558, resourceBytes: 0, draped: { bytesPerFeature: 22374, bytesPerFeatureLabel: 2558 } }, PATH_ROUND_CIRCLE: { bytesPerFeature: 24004, bytesPerFeatureLabel: 2598, resourceBytes: 0, draped: { bytesPerFeature: 24004, bytesPerFeatureLabel: 2598 } }, PATH_MITER_QUAD: { bytesPerFeature: 24040, bytesPerFeatureLabel: 2940, resourceBytes: 0, draped: { bytesPerFeature: 24040, bytesPerFeatureLabel: 2940 } }, PATH_ROUND_QUAD: { bytesPerFeature: 23088, bytesPerFeatureLabel: 2886, resourceBytes: 0, draped: { bytesPerFeature: 23088, bytesPerFeatureLabel: 2886 } }, FILL: { bytesPerFeature: 3059, bytesPerFeatureLabel: 2838, resourceBytes: 0, draped: { bytesPerFeature: 2352, bytesPerFeatureLabel: 2808 } }, FILL_OUTLINE: { bytesPerFeature: 3093, bytesPerFeatureLabel: 2632, resourceBytes: 0, draped: { bytesPerFeature: 2480, bytesPerFeatureLabel: 2601 } }, EXTRUDE: { bytesPerFeature: 5075, bytesPerFeatureLabel: 2559, resourceBytes: 0, draped: { bytesPerFeature: 5075, bytesPerFeatureLabel: 2559 } }, EXTRUDE_EDGES: { bytesPerFeature: 2843, bytesPerFeatureLabel: 2139, resourceBytes: 0, draped: { bytesPerFeature: 2843, bytesPerFeatureLabel: 2139 } } };
if (has("esri-tests-disable-symbol-memory-estimators")) for (const E4 in w3) {
  const e7 = w3[E4];
  e7.bytesPerFeature = 0, e7.bytesPerFeatureLabel = 0, e7.draped.bytesPerFeature = 0, e7.draped.bytesPerFeatureLabel = 0;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryWithMapPositions.js
function e6(o6) {
  return null != o6.mapPositions;
}

// node_modules/@arcgis/core/views/3d/layers/graphics/ElevationAligners.js
function f5(t8, e7, o6, n5, r9) {
  const a5 = t8.stageObject, i6 = a5.geometries;
  let s4 = 0;
  for (const l5 of i6) {
    if (!e6(l5)) continue;
    const { update: t9, averageGeometrySampledElevation: i7 } = M(l5, e7, o6, n5, r9);
    s4 += i7, t9 && a5.geometryVertexAttributeUpdated(l5, "position");
  }
  return s4 / i6.length;
}
function p5(e7, n5, a5, i6, m10, c7) {
  const f7 = e7.stageObject, p8 = n5.centerInElevationSR;
  let g4 = 0;
  if (i6(p8, E3), f7.usesVerticalDistanceToGround) p3(f7, E3.verticalDistanceToGround), g4 = E3.sampledElevation;
  else {
    "absolute-height" !== n5.mode && (g4 = E3.sampledElevation);
  }
  const d7 = n3(u5, c7 ?? f7.transformation), I2 = u2(v, d7[12], d7[13], d7[14]);
  t2.TESTS_DISABLE_OPTIMIZATIONS ? (T[0] = p8[0], T[1] = p8[1], T[2] = E3.z, f(a5, T, d7, m10.spatialReference) && (c7 ? n3(c7, d7) : f7.transformation = d7)) : m10.setAltitudeOfTransformation(E3.z, d7);
  const S3 = b / m10.unitInMeters;
  return (Math.abs(d7[12] - I2[0]) >= S3 || Math.abs(d7[13] - I2[1]) >= S3 || Math.abs(d7[14] - I2[2]) >= S3) && (c7 ? n3(c7, d7) : f7.transformation = d7), g4;
}
var u5 = e2();
function g2(t8, e7, n5, a5, i6) {
  const s4 = t8.graphics3DSymbolLayer.lodRenderer;
  if (null == s4) return 0;
  const m10 = e7.centerInElevationSR;
  a5(m10, E3);
  const c7 = "absolute-height" !== e7.mode ? E3.sampledElevation : 0, f7 = s4.instanceData, p8 = t8.instanceIndex, u8 = h2;
  f7.getGlobalTransform(p8, u8);
  const g4 = u2(v, u8[12], u8[13], u8[14]);
  t2.TESTS_DISABLE_OPTIMIZATIONS ? (T[0] = m10[0], T[1] = m10[1], T[2] = E3.z, f(n5, T, u8, i6.spatialReference) && f7.setGlobalTransform(p8, u8)) : i6.setAltitudeOfTransformation(E3.z, u8);
  const d7 = b / i6.unitInMeters;
  return (t2.TESTS_DISABLE_OPTIMIZATIONS || Math.abs(u8[12] - g4[0]) >= d7 || Math.abs(u8[13] - g4[1]) >= d7 || Math.abs(u8[14] - g4[2]) >= d7) && f7.setGlobalTransform(p8, u8), c7;
}
function d4(t8, e7, o6, n5, r9) {
  const a5 = t8.stageObject, i6 = a5.geometries;
  if (0 === i6.length) return 0;
  let s4 = 0, l5 = null, m10 = 0, f7 = false;
  for (const p8 of i6) {
    if (!e6(p8)) continue;
    const t9 = p8.attributes.get("position");
    if (t9 !== l5) {
      const { update: a6, averageGeometrySampledElevation: i7 } = M(p8, e7, o6, n5, r9);
      m10 = i7, l5 = t9, f7 = a6;
    }
    f7 && a5.geometryVertexAttributeUpdated(p8, "position"), s4 += m10;
  }
  return s4 / i6.length;
}
var b = 0.01;
var T = n2();
var I = n2();
var S2 = n2();
var h2 = e2();
var v = n2();
var E3 = new x2();
function M(t8, e7, o6, n5, r9) {
  let i6 = false;
  const s4 = t8.transformation, c7 = e7.requiresSampledElevationInfo;
  I[0] = s4[12], I[1] = s4[13], I[2] = s4[14], t8.invalidateBoundingInfo();
  const f7 = t8.getMutableAttribute("position"), p8 = f7.data, u8 = f7.size, g4 = p8.length / u8, d7 = new r4(t8.mapPositions, o6);
  let h3 = 0, v3 = 0;
  for (let m10 = 0; m10 < g4; m10++) {
    if (S2[0] = p8[h3], S2[1] = p8[h3 + 1], S2[2] = p8[h3 + 2], n5(d7, E3), c7 && (v3 += E3.sampledElevation), t2.TESTS_DISABLE_OPTIMIZATIONS) p8[h3] = d7.array[d7.offset], p8[h3 + 1] = d7.array[d7.offset + 1], p8[h3 + 2] = E3.z, o(p8, o6, h3, p8, r9.spatialReference, h3, 1), p8[h3] -= I[0], p8[h3 + 1] -= I[1], p8[h3 + 2] -= I[2], i6 = true;
    else {
      T[0] = p8[h3] + I[0], T[1] = p8[h3 + 1] + I[1], T[2] = p8[h3 + 2] + I[2], r9.setAltitude(T, E3.z), p8[h3] = T[0] - I[0], p8[h3 + 1] = T[1] - I[1], p8[h3 + 2] = T[2] - I[2];
      const t9 = b / r9.unitInMeters;
      (Math.abs(S2[0] - p8[h3]) >= t9 || Math.abs(S2[1] - p8[h3 + 1]) >= t9 || Math.abs(S2[2] - p8[h3 + 2]) >= t9) && (i6 = true);
    }
    h3 += u8, d7.offset += 3;
  }
  return v3 /= g4, { update: i6, averageGeometrySampledElevation: v3 };
}

// node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObject3DGraphicLayer.js
var d5 = class {
  constructor(e7, t8, i6) {
    this.baseMaterial = e7, this.edgeMaterial = t8, this.hasSlicePlane = i6;
  }
};
var b2 = class {
  _getFlag(e7) {
    return (this._flags & e7) === e7;
  }
  _setFlag(e7, t8) {
    t8 ? this._flags |= e7 : this._flags &= ~e7;
  }
  get needsElevationUpdates() {
    return this._getFlag(2);
  }
  set needsElevationUpdates(e7) {
    this._setFlag(2, e7);
  }
  get useObjectOriginAsAttachmentOrigin() {
    return this._getFlag(4);
  }
  set useObjectOriginAsAttachmentOrigin(e7) {
    this._setFlag(4, e7);
  }
  get hiddenIfDeconflicted() {
    return this._getFlag(8);
  }
  set hiddenIfDeconflicted(e7) {
    this._setFlag(8, e7);
  }
  get isElevationSource() {
    return !!this.stageObject.lastValidElevationBB;
  }
  constructor(e7, t8, i6, s4, a5, n5 = null) {
    this.graphics3DSymbolLayer = e7, this.stageObject = t8, this._sharedResource = i6, this.elevationAligner = s4, this.elevationContext = a5, this._edgeState = n5, this.type = "object3d", this._stageLayer = null, this._flags = 0, this.alignedSampledElevation = 0;
  }
  initialize(e7) {
    this._stageLayer = e7, this.hiddenIfDeconflicted && (e7.add(this.stageObject), this._setFlag(1, true));
  }
  destroy() {
    if (!this._stageLayer) return;
    const e7 = this._stageLayer.stage;
    this._getFlag(1) && (this._stageLayer.remove(this.stageObject), this._setFlag(1, false)), e7.renderer.edgeView?.removeObject(this.stageObject), this.stageObject.dispose(), this._sharedResource?.release(), this._stageLayer = null;
  }
  get usedMemory() {
    return this.graphics3DSymbolLayer.usedMemory;
  }
  layerOpacityChanged(e7, t8) {
    const { stageObject: i6, _edgeState: s4, _stageLayer: a5 } = this;
    if (null == s4) return;
    const n5 = u6(s4.baseMaterial);
    s4.edgeMaterial.objectTransparency !== n5 && (s4.edgeMaterial.objectTransparency = n5, this.resetEdgeObject(t8)), a5.stage.renderer.withEdgeView((t9) => t9.updateAllComponentOpacities(i6, [e7]));
  }
  updateMaterial(e7) {
    this.stageObject.geometries.map((t8) => t8.instantiate({ material: e7 })).forEach((e8) => {
      this.stageObject.addGeometry(e8), this.stageObject.removeGeometry(0);
    });
  }
  updateHighlights(e7) {
  }
  slicePlaneEnabledChanged(e7, t8) {
    const { stageObject: i6, _edgeState: s4, _stageLayer: a5 } = this;
    null != s4 && a5.stage.renderer.withEdgeView((a6) => {
      a6.updateAllComponentMaterials(i6, s4.edgeMaterial, e7, !t8), s4.hasSlicePlane = e7;
    });
  }
  setVisibility(e7) {
    const { _edgeState: t8, stageObject: i6, _stageLayer: s4 } = this;
    null != s4 && this.visible !== e7 && (i6.visible = e7, e7 && !this._getFlag(1) && (s4.add(i6), this._setFlag(1, true)), null != t8 && s4.stage.renderer.withEdgeView((s5) => {
      s5.hasObject(i6) ? s5.updateObjectVisibility(i6, e7) : e7 && this._addOrUpdateEdgeObject(t8, s5, false);
    }));
  }
  get visible() {
    return this._getFlag(1) && this.stageObject.visible;
  }
  alignWithElevation(e7, t8, i6) {
    if (null == this.elevationAligner) return;
    const s4 = (i7, s5) => c4(i7, e7, this.elevationContext, t8, s5);
    this.alignedSampledElevation = this.elevationAligner(this, this.elevationContext, e7.spatialReference, s4, t8), this.resetEdgeObject(i6);
  }
  alignWithAbsoluteElevation(e7, t8, i6) {
    const s4 = (t9, i7) => {
      i7.sampledElevation = e7, i7.verticalDistanceToGround = 0, i7.z = e7;
    };
    this.alignedSampledElevation = this.elevationAligner(this, this.elevationContext, this.graphics3DSymbolLayer.view.spatialReference, s4, t8), this.resetEdgeObject(i6);
  }
  getCenterObjectSpace() {
    return this.stageObject.boundingVolumeObjectSpace.bounds.center;
  }
  getBoundingBoxObjectSpace(e7 = i()) {
    const t8 = this.stageObject.boundingVolumeObjectSpace;
    return d2(e7, t8.min), k(e7, t8.max), e7;
  }
  computeAttachmentOrigin(i6) {
    const s4 = this.stageObject.effectiveTransformation;
    if (this.useObjectOriginAsAttachmentOrigin) i6.render.origin[0] += s4[12], i6.render.origin[1] += s4[13], i6.render.origin[2] += s4[14], i6.render.num++;
    else for (const a5 of this.stageObject.geometries) a5.computeAttachmentOrigin(m7) && (E(m7, m7, s4), c2(i6.render.origin, i6.render.origin, m7), i6.render.num++);
  }
  async getProjectedBoundingBox(t8, i6, s4, a5, n5) {
    const o6 = this.getBoundingBoxObjectSpace(n5), d7 = p6, b4 = H(o6) ? 1 : d7.length;
    for (let r9 = 0; r9 < b4; r9++) {
      const t9 = d7[r9];
      j2[0] = o6[t9[0]], j2[1] = o6[t9[1]], j2[2] = o6[t9[2]], E(j2, j2, this.stageObject.transformation), O2[3 * r9] = j2[0], O2[3 * r9 + 1] = j2[1], O2[3 * r9 + 2] = j2[2];
    }
    if (!t8(O2, 0, b4)) return null;
    w(o6);
    let u8 = null;
    this.calculateRelativeScreenBounds && (u8 = this.calculateRelativeScreenBounds());
    for (let e7 = 0; e7 < 3 * b4; e7 += 3) {
      for (let t9 = 0; t9 < 3; t9++) o6[t9] = Math.min(o6[t9], O2[e7 + t9]), o6[t9 + 3] = Math.max(o6[t9 + 3], O2[e7 + t9]);
      u8 && s4.push({ location: O2.slice(e7, e7 + 3), screenSpaceBoundingRect: u8 });
    }
    if (i6?.service && "absolute-height" !== this.elevationContext.mode) {
      p2(o6, m7);
      const e7 = "relative-to-scene" === this.elevationContext.mode ? "scene" : "ground";
      let t9 = 0;
      if (i6.useViewElevation) t9 = i6.service.getElevation(m7[0], m7[1], e7) ?? 0;
      else try {
        const s5 = N(o6, i6.service.spatialReference, i6);
        t9 = await i6.service.queryElevation(m7[0], m7[1], a5, s5, e7) ?? 0;
      } catch (v3) {
      }
      O(o6, 0, 0, -this.alignedSampledElevation + t9);
    }
    return o6;
  }
  addObjectState(e7) {
    0 === e7.stateType && e7.addObject(this.stageObject, this.stageObject.highlight(e7.highlightName)), 1 === e7.stateType && e7.addObject(this.stageObject, this.stageObject.maskOccludee());
  }
  removeObjectState(e7) {
    e7.removeByObject(this.stageObject);
  }
  resetEdgeObject(e7) {
    const { _edgeState: t8, stageObject: i6, _stageLayer: s4, visible: a5 } = this;
    null != t8 && s4.stage.renderer.withEdgeView((s5) => {
      a5 ? this._addOrUpdateEdgeObject(t8, s5, e7) : s5.removeObject(i6);
    });
  }
  _addOrUpdateEdgeObject(e7, t8, i6) {
    const s4 = u6(e7.baseMaterial);
    e7.edgeMaterial.objectTransparency = s4, t8.addOrUpdateObject3D(this.stageObject, e7.edgeMaterial, e7.hasSlicePlane, !i6).then(() => this._stageLayer?.sync());
  }
};
function u6(e7) {
  return e7.transparent ? 0 : 1;
}
var O2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var j2 = n2();
var m7 = n2();
var p6 = [[0, 1, 2], [3, 1, 2], [0, 4, 2], [3, 4, 2], [0, 1, 5], [3, 1, 5], [0, 4, 5], [3, 4, 5]];

// node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObjectMetadata.js
var t7 = class {
  constructor(t8, e7 = null) {
    this.labelText = e7, this.elevationOffset = t8 ?? 0;
  }
};

// node_modules/@arcgis/core/views/3d/layers/graphics/Loadable.js
var r8 = class {
  constructor(t8) {
    this.schedule = t8, this._abortController = null, this._loadStatus = 0, this._loadError = null, this._loader = null, this.logger = null;
  }
  destroy() {
    this.abortLoad();
  }
  get loadStatus() {
    return this._loadStatus;
  }
  load(t8, r9) {
    return 1 === this._loadStatus ? (t8 && t8(), this._loader ?? Promise.resolve()) : 2 === this._loadStatus ? (r9 && r9(this._loadError), this._loader ?? Promise.resolve()) : (null == this._loader && (this._abortController = new AbortController(), this._loader = this.doLoad(this._abortController.signal).then(() => {
      this._abortController = null, this._loadStatus = 1;
    }, (t9) => {
      throw this._loadError = t9, this._abortController = null, this._loadStatus = 2, !d(t9) && this.logger && t9.message && this.logger.warn(t9.message), t9;
    })), this._loader.then(t8, r9).catch(() => {
    }), this._loader);
  }
  abortLoad() {
    null != this._abortController ? this._abortController = e(this._abortController) : 0 === this._loadStatus && (this._loadStatus = 2), this._loader = null;
  }
};

// node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DSymbolLayer.js
var v2 = () => n.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayer");
var m8 = class extends r8 {
  constructor(e7, t8, r9, i6, o6 = true) {
    super(r9.schedule), this.symbol = e7, this.symbolLayer = t8, this._context = r9, this._drivenOpacityFallbackAlwaysOpaque = o6, this.ignoreDrivers = false, this._drivenProperties = { color: false, opacity: false, opacityAlwaysOpaque: true, size: false, rotation: false }, this._materials = [], this.logger = v2(), this._elevationOptions = { supportsOffsetAdjustment: false, supportsOnTheGround: true }, this.skipHighSymbolLodsChanged = true, this._renderPriority = i6.renderPriority, this._renderPriorityStep = i6.renderPriorityStep, this._elevationContext = new o2(), this.updateComplexity(), this.ignoreDrivers = i6.ignoreDrivers, this.ignoreDrivers || (this._drivenProperties = _2(this._context.renderer, o6)), this._updateElevationContext();
  }
  destroy() {
    this.complexity = null, this._materials.length = 0, super.destroy();
  }
  get view() {
    return this._context.stage.view;
  }
  getCachedSize() {
    return null;
  }
  get extentPadding() {
    return 0;
  }
  get materials() {
    return this._materials;
  }
  get estimatedMemory() {
    const { complexity: e7 } = this;
    if (null == e7) return 0;
    return (this.draped ? e7.memory.draped : e7.memory).bytesPerFeature;
  }
  get usedMemory() {
    return this.estimatedMemory;
  }
  _drivenPropertiesChanged(e7) {
    if (this.ignoreDrivers) return false;
    const t8 = this._drivenProperties, r9 = _2(e7, this._drivenOpacityFallbackAlwaysOpaque);
    return r9.color !== t8.color || r9.opacity !== t8.opacity || r9.opacityAlwaysOpaque !== t8.opacityAlwaysOpaque || r9.size !== t8.size || r9.rotation !== t8.rotation;
  }
  get needsDrivenTransparentPass() {
    return this._hasDrivenColorOrOpacity && !this._drivenProperties.opacityAlwaysOpaque;
  }
  get _hasDrivenColorOrOpacity() {
    return this._drivenProperties.color || this._drivenProperties.opacity;
  }
  _logGeometryCreationWarnings(e7, t8, r9, i6) {
    const o6 = e7.projectionSuccess, n5 = "polygons" in e7 ? e7.polygons : null, s4 = `${i6} geometry failed to be created`;
    o6 ? !this._logGeometryValidationWarnings(t8, r9, i6) && 0 === n5?.length && "rings" === r9 && t8.length > 0 && t8[0].length > 2 && v2().warnOncePerTick(`${s4} (filled rings should use clockwise winding - try reversing the order of vertices)`) : v2().warnOncePerTick(`${s4} (failed to project geometry to view spatial reference)`);
  }
  get needsUpdateFocus() {
    return false;
  }
  _logGeometryValidationWarnings(e7, t8, r9) {
    const i6 = `${r9} geometry failed to be created`;
    return !e7.length || 1 === e7.length && !e7[0].length ? (v2().warnOncePerTick(`${i6} (no ${t8} were defined)`), true) : (!Array.isArray(e7) || !Array.isArray(e7[0])) && (v2().warnOncePerTick(`${i6} (${t8} should be defined as a 2D array)`), true);
  }
  _validateGeometry(e7, t8 = null, r9 = null) {
    if (null != t8 && !t8.includes(e7.type)) return this.logger.warn("unsupported geometry type for " + r9 + ` symbol: ${e7.type}`), false;
    switch (e7.type) {
      case "point": {
        const t9 = e7;
        if (!isFinite(t9.x) || !isFinite(t9.y)) return v2().warn("point coordinate is not a valid number, graphic skipped"), false;
        break;
      }
      case "polygon":
        m(e7);
    }
    return true;
  }
  _defaultElevationInfoNoZ() {
    return x3;
  }
  _defaultElevationInfoZ() {
    return C2;
  }
  _updateElevationContext() {
    null != this._elevationInfoOverride ? (this._elevationContext.setFromElevationInfo(this._elevationInfoOverride), this._elevationContext.setFeatureExpressionInfoContext(null)) : this._context.layer.elevationInfo ? (this._elevationContext.setFromElevationInfo(this._context.layer.elevationInfo), this._elevationContext.setFeatureExpressionInfoContext(this._context.featureExpressionInfoContext)) : this._elevationContext.reset();
  }
  getDefaultElevationInfo(e7) {
    return e7.hasZ ? this._defaultElevationInfoZ() : this._defaultElevationInfoNoZ();
  }
  getGeometryElevationMode(e7, t8 = this.getDefaultElevationInfo(e7)) {
    return this._elevationContext.mode || t8.mode;
  }
  setElevationInfoOverride(e7) {
    this._elevationInfoOverride = e7, this._updateElevationContext();
  }
  createElevationContextForGraphic(e7) {
    const t8 = new o2();
    return this.updateElevationContextForGraphic(t8, e7), t8;
  }
  updateElevationContextForGraphic(e7, t8) {
    const r9 = t8.geometry, i6 = this.getDefaultElevationInfo(r9);
    e7.unit = null != this._elevationContext.unit ? this._elevationContext.unit : i6.unit, e7.mode = this.getGeometryElevationMode(r9, i6), e7.offsetMeters = this._elevationContext.meterUnitOffset ?? i6.offset ?? 0;
    const o6 = !this._elevationOptions.supportsOnTheGround && "on-the-ground" === e7.mode;
    o6 && (e7.mode = "relative-to-ground", e7.offsetMeters = 0);
    const n5 = o6 ? f3 : this._elevationContext.featureExpressionInfoContext;
    n5 ? e7.updateFeatureExpressionInfoContextForGraphic(n5, t8, this._context.layer) : e7.setFeatureExpressionInfoContext(null);
  }
  prepareSymbolLayerPatch(e7) {
  }
  onRemoveGraphic(e7) {
  }
  _getLayerOpacity() {
    if (this._context.graphicsCoreOwner && "fullOpacity" in this._context.graphicsCoreOwner) return this._context.graphicsCoreOwner.fullOpacity ?? 0;
    const e7 = this._context.layer.opacity;
    return e7 ?? 1;
  }
  _getCombinedOpacity(e7, t8 = b3) {
    const r9 = this.draped ? 1 : this._getLayerOpacity();
    return this._drivenProperties.color ? r9 : e7 ? r9 * (this._drivenProperties.opacity ? 1 : e7.a) : t8.hasIntrinsicColor ? r9 : 0;
  }
  _getCombinedOpacityAndColor(e7, r9 = b3) {
    const i6 = this._getCombinedOpacity(e7, r9);
    if (this._drivenProperties.color) return B(null, i6);
    const o6 = e7?.toUnitRGB() ?? _;
    return B(o6, i6);
  }
  _getDrivenUInt8Color({ color: e7, opacity: t8 }, r9, i6) {
    const { color: s4, opacity: a5 } = this._drivenProperties, l5 = r9?.toUnitRGBA() ?? (i6 ? s : a), p8 = s4 ? e7?.output ?? l5 : null, c7 = e7 || r9 || i6, u8 = s4 ? null : l5[3];
    return B(p8, a5 && c7 ? t8?.output ?? u8 : null, 255);
  }
  _getDrivenUInt8ColorWithNaNSupport({ color: e7, opacity: t8 }, o6, n5) {
    const l5 = o6 ? u(o6.toUnitRGBA()) : r3(NaN, NaN, NaN, n5 ? NaN : 0);
    return this._drivenProperties.color && null != e7 && r2(l5, e7.output), this._drivenProperties.opacity && null != t8 && (l5[3] = t8.output), m2(l5, l5, 255), e3(l5, l5);
  }
  isFastUpdatesEnabled() {
    return null != this._fastUpdates;
  }
  updateComplexity() {
    this.complexity = this.computeComplexity();
  }
  computeComplexity() {
    return p4(this.symbol, this.symbolLayer);
  }
  globalPropertyChanged(e7, t8, r9) {
    switch (e7) {
      case "opacity":
        return this.layerOpacityChanged(t8, r9), true;
      case "screenSizePerspectiveEnabled":
        return this.layerScreenSizePerspectiveChanged(t8, r9), true;
      case "elevationInfo": {
        const e8 = this._elevationContext.mode;
        this._updateElevationContext();
        return 2 !== this.layerElevationInfoChanged(t8, r9, e8);
      }
      case "slicePlaneEnabled":
        return this.slicePlaneEnabledChanged(t8, r9);
      case "physicalBasedRenderingEnabled":
        return this.physicalBasedRenderingChanged();
      case "pixelRatio":
        return this.pixelRatioChanged;
      case "skipHighSymbolLods":
        return this.skipHighSymbolLodsChanged;
      case "terrainTransparency":
        return this.terrainTransparencyChanged();
      default:
        return false;
    }
  }
  terrainTransparencyChanged() {
    return true;
  }
  get pixelRatioChanged() {
    return true;
  }
  updateGraphics3DGraphicElevationInfo(e7, t8, r9) {
    let i6 = 1;
    return e7?.forEach((e8) => {
      const o6 = t8(e8);
      if (null != o6) {
        const t9 = e8.graphic;
        this.updateElevationContextForGraphic(o6.elevationContext, t9), o6.needsElevationUpdates = r9(o6.elevationContext.mode);
      } else i6 = 2;
    }), i6;
  }
  applyRendererDiff(e7, t8) {
    return 0;
  }
  getFastUpdateAttrValues(e7) {
    if (!this._fastUpdates) return null;
    const t8 = this._fastUpdates.visualVariables, r9 = et(t8.size, e7.size), i6 = ot(t8.color, e7.color), o6 = ot(t8.opacity, e7.opacity);
    return r3(r9, i6, o6, 0);
  }
  get draped() {
    return this._draped;
  }
  ensureDrapedStatus(e7) {
    return null == this._draped ? (this._draped = e7, true) : (e7 !== this.draped && v2().warnOnce("A symbol can only produce either draped or non-draped visualizations. Use two separate symbol instances for draped and non-draped graphics if necessary."), false);
  }
  test() {
    const e7 = () => ({ size: this._fastUpdates?.visualVariables.size?.source ?? null, color: this._fastUpdates?.visualVariables.color?.source ?? null, opacity: this._fastUpdates?.visualVariables.opacity?.source ?? null, rotation: this._fastUpdates?.visualVariables.rotation?.source ?? null });
    return { drivenProperties: this._drivenProperties, getVisVarFields: e7 };
  }
};
function _2(e7, t8) {
  const r9 = { color: false, opacity: false, opacityAlwaysOpaque: t8, size: false, rotation: false };
  return e7 && "visualVariables" in e7 && e7.visualVariables && e7.visualVariables.forEach((e8) => {
    switch (e8.type) {
      case "color":
        if (r9.color = true, e8.stops) for (let t9 = 0; t9 < e8.stops.length; t9++) {
          const i6 = e8.stops[t9].color;
          i6 && i6.a < 1 && (r9.opacityAlwaysOpaque = false);
        }
        break;
      case "opacity":
        r9.opacity = true, r9.opacityAlwaysOpaque = false;
        break;
      case "size":
        r9.size = true;
        break;
      case "rotation":
        r9.rotation = true;
    }
  }), r9;
}
var x3 = { mode: "on-the-ground", offset: 0, unit: "meters" };
var C2 = { mode: "absolute-height", offset: 0, unit: "meters" };
var b3 = { hasIntrinsicColor: false };
var O3 = r3(NaN, NaN, NaN, NaN);

// node_modules/@arcgis/core/views/3d/layers/graphics/pointUtils.js
function p7(e7, r9, t8, o6, n5) {
  if (m9(e7, r9)) return null;
  t8.localOrigin = g3(e7, r9);
  const i6 = new x({ geometries: [t8], castShadow: false, layerViewUid: e7.layerViewUid, graphicUid: n5, usesVerticalDistanceToGround: true });
  return { object: i6, sampledElevation: g(i6, r9, e7.elevationProvider, e7.renderCoordsHelper, o6) };
}
function u7(e7, r9, t8, o6) {
  if (m9(r9, t8)) return null;
  return g(e7, t8, r9.elevationProvider, r9.renderCoordsHelper, o6);
}
function m9(e7, r9) {
  const n5 = e7.clippingExtent;
  return !!n5 && (n4(r9, j3, e7.elevationProvider.spatialReference), !Y(n5, j3));
}
function f6(r9, o6, n5) {
  const i6 = r9.elevationContext, s4 = n5.spatialReference;
  n4(o6, j3, s4), i6.centerInElevationSR = r(j3[0], j3[1], o6.hasZ ? j3[2] : 0);
}
function d6(e7) {
  switch (e7.type) {
    case "point":
      return e7;
    case "polygon":
    case "extent":
      return w2(e7);
    case "polyline": {
      const r9 = e7.paths[0];
      if (!r9 || 0 === r9.length) return null;
      const t8 = p(r9, h(r9) / 2);
      return t(t8[0], t8[1], t8[2], e7.spatialReference);
    }
    case "mesh":
      return e7.extent.center;
  }
  return null;
}
function g3(e7, r9) {
  return n4(r9, j3, e7.renderCoordsHelper.spatialReference), e7.localOriginFactory.getOrigin(j3);
}
var j3 = n2();

export {
  t3 as t,
  o3 as o,
  a2 as a,
  u3 as u,
  s2 as s,
  r6 as r,
  t4 as t2,
  o4 as o2,
  t5 as t3,
  c5 as c,
  o5 as o3,
  m3 as m,
  a3 as a2,
  c6 as c2,
  S,
  l3 as l,
  e5 as e,
  P,
  l4 as l2,
  F,
  m5 as m2,
  L,
  f4 as f,
  e6 as e2,
  f5 as f2,
  p5 as p,
  g2 as g,
  d4 as d,
  d5 as d2,
  b2 as b,
  t7 as t4,
  r8 as r2,
  m8 as m3,
  O3 as O,
  p7 as p2,
  u7 as u2,
  f6 as f3,
  d6 as d3,
  g3 as g2
};
//# sourceMappingURL=chunk-AJFMK7ZP.js.map
