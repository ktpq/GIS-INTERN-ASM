import {
  c as c4
} from "./chunk-TGURFMYB.js";
import {
  i as i3
} from "./chunk-64IPP4Z5.js";
import {
  o as o3,
  u as u2
} from "./chunk-SGNC5H35.js";
import {
  i as i2
} from "./chunk-TVLXQ42J.js";
import {
  r as r3
} from "./chunk-OR24MDO6.js";
import {
  m as m2
} from "./chunk-I4DPELMA.js";
import {
  c as c3,
  f,
  i,
  l,
  m,
  n as n4,
  o as o2,
  r as r2,
  x
} from "./chunk-IRS5H2YE.js";
import {
  c as c2,
  n as n3,
  o
} from "./chunk-KEY3YQEB.js";
import {
  n as n2,
  u
} from "./chunk-UDRKO2UK.js";
import {
  n
} from "./chunk-6U5MFJUS.js";
import {
  e
} from "./chunk-EQVY5WGD.js";
import {
  e as e2
} from "./chunk-XNNZ2U24.js";
import {
  r
} from "./chunk-253Z6EVN.js";
import {
  b
} from "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import {
  has
} from "./chunk-TX75HZKJ.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4sPassUniform.js
var e3 = class extends i3 {
  constructor(r6, e5, o5, s) {
    super(r6, "vec4", 1, (e6, t3, c5) => e6.setUniform4fv(r6, o5(t3, c5), s), e5);
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatsPassUniform.js
var r4 = class extends i3 {
  constructor(o5, r6, s, t3) {
    super(o5, "float", 1, (r7, e5, f2) => r7.setUniform1fv(o5, s(e5, f2), t3), r6);
  }
};

// node_modules/@arcgis/core/views/3d/support/debugFlags.js
var o4 = class extends b {
  constructor() {
    super(...arguments), this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR = false, this.DECONFLICTOR_SHOW_VISIBLE = false, this.DECONFLICTOR_SHOW_INVISIBLE = false, this.DECONFLICTOR_SHOW_GRID = false, this.LABELS_SHOW_BORDER = false, this.TEXT_SHOW_BASELINE = false, this.TEXT_SHOW_BORDER = false, this.OVERLAY_DRAW_DEBUG_TEXTURE = false, this.OVERLAY_SHOW_CENTER = false, this.SHOW_POI = false, this.OCCLUSION_QUERY_DEBUG_PIXEL = false, this.TESTS_DISABLE_OPTIMIZATIONS = false, this.TESTS_DISABLE_FAST_UPDATES = false, this.DRAW_MESH_GEOMETRY_NORMALS = false, this.FEATURE_TILE_FETCH_SHOW_TILES = false, this.FEATURE_TILE_TREE_SHOW_TILES = false, this.TERRAIN_TILE_TREE_SHOW_TILES = false, this.I3S_TREE_SHOW_TILES = false, this.I3S_SHOW_MODIFICATIONS = false, this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES = false, this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL = false, this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES = false, this.LINE_WIREFRAMES = false, this.FLOW_GLOBAL_SCALE_THRESHOLD = null;
  }
};
__decorate([a()], o4.prototype, "SCENEVIEW_HITTEST_RETURN_INTERSECTOR", void 0), __decorate([a()], o4.prototype, "DECONFLICTOR_SHOW_VISIBLE", void 0), __decorate([a()], o4.prototype, "DECONFLICTOR_SHOW_INVISIBLE", void 0), __decorate([a()], o4.prototype, "DECONFLICTOR_SHOW_GRID", void 0), __decorate([a()], o4.prototype, "LABELS_SHOW_BORDER", void 0), __decorate([a()], o4.prototype, "TEXT_SHOW_BASELINE", void 0), __decorate([a()], o4.prototype, "TEXT_SHOW_BORDER", void 0), __decorate([a()], o4.prototype, "OVERLAY_DRAW_DEBUG_TEXTURE", void 0), __decorate([a()], o4.prototype, "OVERLAY_SHOW_CENTER", void 0), __decorate([a()], o4.prototype, "SHOW_POI", void 0), __decorate([a()], o4.prototype, "OCCLUSION_QUERY_DEBUG_PIXEL", void 0), __decorate([a()], o4.prototype, "TESTS_DISABLE_OPTIMIZATIONS", void 0), __decorate([a()], o4.prototype, "TESTS_DISABLE_FAST_UPDATES", void 0), __decorate([a()], o4.prototype, "DRAW_MESH_GEOMETRY_NORMALS", void 0), __decorate([a()], o4.prototype, "FEATURE_TILE_FETCH_SHOW_TILES", void 0), __decorate([a()], o4.prototype, "FEATURE_TILE_TREE_SHOW_TILES", void 0), __decorate([a()], o4.prototype, "TERRAIN_TILE_TREE_SHOW_TILES", void 0), __decorate([a()], o4.prototype, "I3S_TREE_SHOW_TILES", void 0), __decorate([a()], o4.prototype, "I3S_SHOW_MODIFICATIONS", void 0), __decorate([a()], o4.prototype, "LOD_INSTANCE_RENDERER_DISABLE_UPDATES", void 0), __decorate([a()], o4.prototype, "LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL", void 0), __decorate([a()], o4.prototype, "EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES", void 0), __decorate([a()], o4.prototype, "LINE_WIREFRAMES", void 0), __decorate([a()], o4.prototype, "FLOW_GLOBAL_SCALE_THRESHOLD", void 0), o4 = __decorate([c("esri.views.3d.support.debugFlags")], o4);
var t = new o4();

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js
function e4() {
  return !!has("enable-feature:objectAndLayerId-rendering");
}

// node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js
var w = class {
  constructor(t3) {
    this.source = t3;
  }
};
var j = class extends w {
  constructor(t3) {
    super(t3), this.minSize = [0, 0, 0], this.maxSize = [0, 0, 0], this.offset = [0, 0, 0], this.factor = [0, 0, 0], this.type = [0, 0, 0], this.fallback = [0, 0, 0];
  }
};
var M = class extends w {
  constructor(t3) {
    super(t3), this.colors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.values = [0, 0, 0, 0, 0, 0, 0, 0], this.fallback = [0, 0, 0, 0];
  }
};
var I = class extends w {
  constructor(t3, o5 = 0) {
    super(t3), this.fallback = o5, this.values = [0, 0, 0, 0, 0, 0, 0, 0], this.opacityValues = [0, 0, 0, 0, 0, 0, 0, 0];
  }
};
var N = class {
};
function P(t3) {
  return null != t3;
}
function T(t3, o5) {
  t3 && t3.push(o5);
}
function U(t3, o5, e5, s = e2()) {
  const i4 = t3 || 0, r6 = o5 || 0, n5 = e5 || 0;
  return 0 !== i4 && x(s, s, -i4 / 180 * Math.PI), 0 !== r6 && l(s, s, r6 / 180 * Math.PI), 0 !== n5 && m(s, s, n5 / 180 * Math.PI), s;
}
function D(t3, o5, e5, s, i4) {
  const r6 = t3.minSize, n5 = t3.maxSize;
  if (t3.useSymbolValue) {
    const t4 = s.symbolSize[e5];
    return o5.minSize[e5] = t4, o5.maxSize[e5] = t4, o5.offset[e5] = o5.minSize[e5], o5.factor[e5] = 0, o5.type[e5] = 1, true;
  }
  return P(t3.field) || P(t3.valueExpression) ? P(t3.stops) ? 2 === t3.stops.length && n2(t3.stops[0].size) && n2(t3.stops[1].size) ? (F(t3.stops[0].size, t3.stops[1].size, t3.stops[0].value, t3.stops[1].value, o5, e5), o5.type[e5] = 1, true) : (T(i4, "Could not convert size info: stops only supported with 2 elements"), false) : n2(r6) && n2(n5) && P(t3.minDataValue) && P(t3.maxDataValue) ? (F(r6, n5, t3.minDataValue, t3.maxDataValue, o5, e5), o5.type[e5] = 1, true) : "unknown" === t3.valueUnit ? (T(i4, "Could not convert size info: proportional size not supported"), false) : null != m2[t3.valueUnit] ? (o5.minSize[e5] = -1 / 0, o5.maxSize[e5] = 1 / 0, o5.offset[e5] = 0, o5.factor[e5] = 1 / m2[t3.valueUnit], o5.type[e5] = 1, true) : (T(i4, "Could not convert size info: scale-dependent size not supported"), false) : t3.stops?.[0] && n2(t3.stops[0].size) ? (o5.minSize[e5] = t3.stops[0].size, o5.maxSize[e5] = t3.stops[0].size, o5.offset[e5] = o5.minSize[e5], o5.factor[e5] = 0, o5.type[e5] = 1, true) : n2(r6) ? (o5.minSize[e5] = r6, o5.maxSize[e5] = r6, o5.offset[e5] = r6, o5.factor[e5] = 0, o5.type[e5] = 1, true) : (T(i4, "Could not convert size info: unsupported variant of sizeInfo"), false);
}
function F(t3, o5, e5, s, i4, r6) {
  const n5 = Math.abs(s - e5) > 0 ? (o5 - t3) / (s - e5) : 0;
  i4.minSize[r6] = n5 > 0 ? t3 : o5, i4.maxSize[r6] = n5 > 0 ? o5 : t3, i4.offset[r6] = t3 - e5 * n5, i4.factor[r6] = n5;
}
function A(t3, o5, e5, s) {
  if (t3.normalizationField || t3.valueRepresentation) return T(s, "Could not convert size info: unsupported property"), null;
  if (!u(t3.field) && !u(t3.valueExpression)) return T(s, "Could not convert size info: field is not a string"), null;
  const i4 = B(t3);
  if (o5.size) {
    if (i4) if (o5.size.source) {
      if (i4 !== o5.size.source) return T(s, "Could not convert size info: multiple fields in use"), null;
    } else o5.size.source = i4;
  } else o5.size = new j(i4), o3(o5.size.fallback, e5.fallbackSize);
  let r6;
  switch (t3.axis) {
    case "width":
      return r6 = D(t3, o5.size, 0, e5, s), r6 ? o5 : null;
    case "height":
      return r6 = D(t3, o5.size, 2, e5, s), r6 ? o5 : null;
    case "depth":
      return r6 = D(t3, o5.size, 1, e5, s), r6 ? o5 : null;
    case "width-and-depth":
      return r6 = D(t3, o5.size, 0, e5, s), r6 && D(t3, o5.size, 1, e5, s), r6 ? o5 : null;
    case null:
    case void 0:
    case "all":
      return r6 = D(t3, o5.size, 0, e5, s), r6 = r6 && D(t3, o5.size, 1, e5, s), r6 = r6 && D(t3, o5.size, 2, e5, s), r6 ? o5 : null;
    default:
      return T(s, `Could not convert size info: unknown axis "${t3.axis}""`), null;
  }
}
function R(t3, o5, e5) {
  for (let i4 = 0; i4 < 3; ++i4) {
    let e6 = o5.unitInMeters;
    1 === t3.type[i4] && (e6 *= o5.modelSize[i4], t3.type[i4] = 2), t3.minSize[i4] = t3.minSize[i4] / e6, t3.maxSize[i4] = t3.maxSize[i4] / e6, t3.offset[i4] = t3.offset[i4] / e6, t3.factor[i4] = t3.factor[i4] / e6;
  }
  let s;
  if (0 !== t3.type[0]) s = 0;
  else if (0 !== t3.type[1]) s = 1;
  else {
    if (0 === t3.type[2]) return T(e5, "No size axis contains a valid size or scale"), false;
    s = 2;
  }
  for (let i4 = 0; i4 < 3; ++i4) 0 === t3.type[i4] && (t3.minSize[i4] = t3.minSize[s], t3.maxSize[i4] = t3.maxSize[s], t3.offset[i4] = t3.offset[s], t3.factor[i4] = t3.factor[s], t3.type[i4] = t3.type[s]);
  return true;
}
function O(t3, o5, e5) {
  t3[4 * o5] = e5.r / 255, t3[4 * o5 + 1] = e5.g / 255, t3[4 * o5 + 2] = e5.b / 255, t3[4 * o5 + 3] = e5.a;
}
function _(t3, o5, e5, s) {
  if (t3.normalizationField) return T(s, "Could not convert color info: unsupported property"), null;
  const i4 = B(t3);
  if (i4) {
    if (!t3.stops) return T(s, "Could not convert color info: missing stops or colors"), null;
    {
      if (t3.stops.length > 8) return T(s, "Could not convert color info: too many color stops"), null;
      o5.color = new M(i4);
      const r6 = t3.stops;
      for (let t4 = 0; t4 < 8; ++t4) {
        const e6 = r6[Math.min(t4, r6.length - 1)];
        o5.color.values[t4] = e6.value, O(o5.color.colors, t4, e6.color);
      }
      r3(o5.color.fallback, e5.fallbackColor);
    }
  } else {
    if (!(t3.stops && t3.stops.length >= 0)) return T(s, "Could not convert color info: no field and no colors/stops"), null;
    {
      const s2 = t3.stops && t3.stops.length >= 0 && t3.stops[0].color;
      o5.color = new M(null);
      for (let t4 = 0; t4 < 8; t4++) o5.color.values[t4] = 1 / 0, O(o5.color.colors, t4, s2);
      r3(o5.color.fallback, e5.fallbackColor);
    }
  }
  return o5;
}
function q(t3, o5, e5, s) {
  if (t3.normalizationField) return T(s, "Could not convert opacity info: unsupported property"), null;
  const i4 = B(t3);
  if (i4) {
    if (!t3.stops) return T(s, "Could not convert opacity info: missing stops or opacities"), null;
    {
      if (t3.stops.length > 8) return T(s, "Could not convert opacity info: too many opacity stops"), null;
      o5.opacity = new I(i4, e5.fallbackColor[3]);
      const r6 = t3.stops;
      for (let t4 = 0; t4 < 8; ++t4) {
        const e6 = r6[Math.min(t4, r6.length - 1)];
        o5.opacity.values[t4] = e6.value, o5.opacity.opacityValues[t4] = e6.opacity;
      }
    }
  } else {
    if (!(t3.stops && t3.stops.length >= 0)) return T(s, "Could not convert opacity info: no field and no opacities/stops"), null;
    {
      const s2 = t3.stops && t3.stops.length >= 0 ? t3.stops[0].opacity : 0;
      o5.opacity = { source: "", values: [0, 0, 0, 0, 0, 0, 0, 0], opacityValues: [0, 0, 0, 0, 0, 0, 0, 0], fallback: e5.fallbackColor[3] };
      for (let t4 = 0; t4 < 8; t4++) o5.opacity.values[t4] = 1 / 0, o5.opacity.opacityValues[t4] = s2;
    }
  }
  return o5;
}
function $(t3, o5, e5) {
  const s = 2 === e5 && "arithmetic" === t3.rotationType;
  o5.offset[e5] = s ? 90 : 0, o5.factor[e5] = s ? -1 : 1, o5.type[e5] = 1;
}
function B(t3) {
  return (t3.cache.hasExpression ? t3.valueExpression : t3.field) || "";
}
function L(t3, o5, e5) {
  const s = B(t3);
  if (o5.rotation) {
    if (s) if (o5.rotation.source) {
      if (s !== o5.rotation.source) return T(e5, "Could not convert rotation info: multiple fields in use"), null;
    } else o5.rotation.source = s;
  } else o5.rotation = { source: s, offset: [0, 0, 0], factor: [1, 1, 1], type: [0, 0, 0] };
  switch (t3.axis) {
    case "tilt":
      return $(t3, o5.rotation, 0), o5;
    case "roll":
      return $(t3, o5.rotation, 1), o5;
    case null:
    case void 0:
    case "heading":
      return $(t3, o5.rotation, 2), o5;
    default:
      return T(e5, `Could not convert rotation info: unknown axis "${t3.axis}""`), null;
  }
}
var G = class {
  constructor({ supports: t3, modelSize: o5, symbolSize: e5, unitInMeters: s, anchor: i4, scale: r6, rotation: n5, fallbackColor: l2, fallbackSize: a2 }) {
    this.supports = t3, this.modelSize = o5 ?? c2(), this.symbolSize = e5 ?? c2(), this.unitInMeters = s ?? 1, this.anchor = i4 ?? o(), this.scale = r6 ?? c2(), this.rotation = n5 ?? o(), this.fallbackColor = l2 ?? i2(), this.fallbackSize = a2 ?? c2();
  }
};
function H(t3, o5, e5) {
  if (!t3) return null;
  const s = t3.reduce((t4, s2) => {
    if (!t4) return t4;
    switch (s2.type) {
      case "size":
        return o5.supports.size ? A(s2, t4, o5, e5) : t4;
      case "color":
        return o5.supports.color ? _(s2, t4, o5, e5) : t4;
      case "opacity":
        return o5.supports.opacity ? q(s2, t4, o5, e5) : null;
      case "rotation":
        return o5.supports.rotation ? L(s2, t4, e5) : t4;
      default:
        return null;
    }
  }, new N());
  return !(t3.length > 0 && s) || s.size || s.color || s.opacity || s.rotation ? s?.size && !R(s.size, o5, e5) ? null : s : null;
}
var J = class {
  constructor(t3, o5, e5) {
    this.visualVariables = t3, this.materialParameters = o5, this.requiresShaderTransformation = e5;
  }
};
function K(t3, o5) {
  if (!t3) return null;
  if (e4()) return null;
  if (t.TESTS_DISABLE_FAST_UPDATES) return null;
  const e5 = H(t3.visualVariables, o5);
  return e5 ? new J(e5, Y(e5, o5), !!e5.size) : null;
}
function Q(t3, o5, e5) {
  if (!o5 || !t3) return false;
  const s = t3.visualVariables, i4 = H(o5.visualVariables, e5);
  return !!i4 && (!!(W(s.size, i4.size, "size") && W(s.color, i4.color, "color") && W(s.rotation, i4.rotation, "rotation") && W(s.opacity, i4.opacity, "opacity")) && (t3.visualVariables = i4, t3.materialParameters = Y(i4, e5), t3.requiresShaderTransformation = !!i4.size, true));
}
function W(t3, o5, e5) {
  if (!!t3 != !!o5) return false;
  if (t3 && t3.source !== o5?.source) return false;
  if (t3 && "rotation" === e5) {
    const e6 = t3, s = o5;
    for (let t4 = 0; t4 < 3; t4++) if (e6.type[t4] !== s.type[t4] || e6.offset[t4] !== s.offset[t4] || e6.factor[t4] !== s.factor[t4]) return false;
  }
  return true;
}
var X = class extends c4 {
  constructor(t3) {
    super(), this.vvSize = t3?.size ?? null, this.vvColor = t3?.color ?? null, this.vvOpacity = t3?.opacity ?? null;
  }
  get hasVVSize() {
    return !!this.vvSize;
  }
  get hasVVColor() {
    return !!this.vvColor;
  }
  get hasVVOpacity() {
    return !!this.vvOpacity;
  }
};
function Y(t3, i4) {
  const r6 = new X(t3);
  return r6.vvSize && (r6.vvSymbolAnchor = i4.anchor, o2(nt), U(i4.rotation[2], i4.rotation[0], i4.rotation[1], nt), r6.vvSymbolRotationMatrix = r6.vvSymbolRotationMatrix || e(), n(r6.vvSymbolRotationMatrix, nt)), r6;
}
function Z(t3, o5, e5) {
  if (!t3.vvSize) return e5;
  n4(it, e5);
  const s = t3.vvSymbolRotationMatrix;
  return r2(nt, s[0], s[1], s[2], 0, s[3], s[4], s[5], 0, s[6], s[7], s[8], 0, 0, 0, 0, 1), c3(it, it, nt), tt(rt, t3, o5), f(it, it, rt), i(it, it, t3.vvSymbolAnchor), it;
}
function tt(o5, e5, s) {
  if (!e5.vvSize) return u2(o5, 1, 1, 1), o5;
  if (Number.isNaN(s[0])) return o3(o5, e5.vvSize.fallback);
  for (let i4 = 0; i4 < 3; ++i4) {
    const r6 = e5.vvSize.offset[i4] + s[0] * e5.vvSize.factor[i4];
    o5[i4] = r(r6, e5.vvSize.minSize[i4], e5.vvSize.maxSize[i4]);
  }
  return o5;
}
function ot(t3, o5) {
  return t3?.source ? st(o5?.input) : 0;
}
function et(t3, o5) {
  if (!t3?.source) return 0;
  for (let e5 = 0; e5 < 3; e5++) if (null != o5?.input[e5]) return st(o5.input[e5]);
  return st(void 0);
}
function st(t3) {
  return "number" == typeof t3 && isFinite(t3) ? t3 : NaN;
}
var it = e2();
var rt = n3();
var nt = e2();

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js
var r5 = class extends X {
  constructor() {
    super(...arguments), this.renderOccluded = 1, this.testsTransparentRenderOrder = 0, this.isDecoration = false;
  }
};
var t2 = 8;

export {
  e4 as e,
  e3 as e2,
  r4 as r,
  t,
  G,
  K,
  Q,
  Z,
  tt,
  ot,
  et,
  r5 as r2,
  t2
};
//# sourceMappingURL=chunk-3KKUYP2A.js.map
