import {
  e,
  e2,
  h,
  o as o2,
  r as r4
} from "./chunk-NSIDYXSA.js";
import {
  A as A2,
  B as B2,
  C,
  D,
  E,
  H,
  I,
  J,
  u as u3,
  z
} from "./chunk-IHDBO625.js";
import {
  o as o3
} from "./chunk-5BLWOGXQ.js";
import {
  d,
  g as g3,
  y as y2
} from "./chunk-ADPYU6GX.js";
import {
  A,
  O,
  P,
  V,
  c,
  g,
  s as s3,
  w,
  y
} from "./chunk-FZAQ64NS.js";
import {
  r as r3
} from "./chunk-NWF7IRZL.js";
import {
  _ as _2
} from "./chunk-K3KNKCHY.js";
import {
  c as c2
} from "./chunk-NUKEMAQ3.js";
import {
  n as n3
} from "./chunk-SYOFHPTO.js";
import {
  a2,
  s as s4
} from "./chunk-Q6ZHRF5N.js";
import {
  l as l3,
  u as u2
} from "./chunk-SXP7J7HD.js";
import {
  _
} from "./chunk-AKLWLP4J.js";
import {
  n as n2
} from "./chunk-JTTFG3NZ.js";
import {
  a,
  i,
  s as s2
} from "./chunk-JXCCENBV.js";
import {
  Ot,
  Pt,
  Z,
  at,
  ft,
  l as l2,
  wt
} from "./chunk-3EE7FDFG.js";
import {
  R
} from "./chunk-IODIHRP7.js";
import {
  B
} from "./chunk-P3OSPFTR.js";
import {
  o
} from "./chunk-EB3674W2.js";
import {
  t
} from "./chunk-2YANO3UR.js";
import {
  S
} from "./chunk-5GPMO33J.js";
import {
  g as g2
} from "./chunk-SWZYRYDU.js";
import {
  u
} from "./chunk-UXWT3ISO.js";
import {
  r as r2,
  s
} from "./chunk-253Z6EVN.js";
import {
  l3 as l,
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/grouping.js
function e3(e6, o13) {
  let r12;
  if ("string" == typeof e6) r12 = l(e6 + `-seed(${o13})`);
  else {
    let t2 = 12;
    r12 = e6 ^ o13;
    do {
      r12 = 107 * (r12 >> 8 ^ r12) + t2 | 0;
    } while (0 !== --t2);
  }
  return (1 + r12 / (1 << 31)) / 2;
}
function o4(t2) {
  return Math.floor(e3(t2, r5) * n4);
}
var r5 = 53290320;
var n4 = 10;

// node_modules/@arcgis/core/views/2d/engine/webgl/animations/infos.js
function n5(t2) {
  return t2 instanceof i2 ? t2 : "object" == typeof t2 && "type" in t2 ? c3[t2.type].hydrate(t2) : new o5(t2);
}
var i2 = class {
  constructor(t2) {
    this.inputs = t2;
  }
  encode() {
    const t2 = [];
    for (const n11 of this.inputs) t2.push(...n11.encode());
    return t2.push(...this.instructions), t2;
  }
};
var o5 = class extends i2 {
  constructor(t2) {
    super([]), this.value = t2;
  }
  simplify() {
    return this;
  }
  get instructions() {
    if (Array.isArray(this.value)) {
      const [n11, i9, o13, s15] = this.value;
      return null != s15 ? h.vector4.encode([n11, i9 || 0, o13 || 0, s15]) : h.vector3.encode([n11, i9 || 0, o13 || 0]);
    }
    return h.scalar.encode(this.value);
  }
};
var s5 = class _s extends i2 {
  constructor(t2, n11) {
    super([n11]), this._config = t2, this._parent = n11;
  }
  static hydrate(t2) {
    return new _s(t2, n5(t2.parent));
  }
  simplify() {
    if (this._config.relativeTranslation || this._config.absoluteScale) return this;
    const t2 = this._parent.simplify();
    if (!(t2 instanceof o5)) return this;
    const [n11, i9, r12, e6] = t2.value, c8 = this._config.translation.from[0], a8 = this._config.translation.from[1], f7 = this._config.rotation.from, h7 = this._config.scale.from;
    if (c8 === this._config.translation.to[0] && a8 === this._config.translation.to[1] && f7 === this._config.rotation.to && h7 === this._config.scale.to) {
      const t3 = r12 + f7, s15 = e6 * h7, u9 = Math.sin(r12), l12 = Math.cos(r12);
      return new o5([l12 * e6 * c8 - u9 * e6 * a8 + n11, u9 * e6 * c8 + l12 * e6 * a8 + i9, t3, s15]);
    }
    return new _s(this._config, t2);
  }
  get instructions() {
    return h.animatedTransform.encode(this._config);
  }
};
var r6 = class _r extends i2 {
  constructor(t2, n11) {
    super([n11]), this._config = t2, this._parent = n11;
  }
  static hydrate(t2) {
    return new _r(t2, n5(t2.parent));
  }
  simplify() {
    const t2 = this._parent.simplify();
    if (!(t2 instanceof o5)) return this;
    const [n11, i9, s15, e6] = t2.value, c8 = this._config.color.from[0], a8 = this._config.color.from[1], f7 = this._config.color.from[2];
    let h7 = this._config.color.from[3];
    const u9 = this._config.opacity.from;
    return c8 === this._config.color.to[0] && a8 === this._config.color.to[1] && f7 === this._config.color.to[2] && h7 === this._config.color.to[3] && u9 === this._config.opacity.to ? (h7 *= u9, new o5([n11 * c8, i9 * a8, s15 * f7, e6 * h7])) : new _r(this._config, t2);
  }
  get instructions() {
    return h.animatedColor.encode(this._config);
  }
};
var e4 = class _e extends i2 {
  constructor(t2, n11) {
    super([n11]), this._config = t2, this._parent = n11;
  }
  static hydrate(t2) {
    return new _e(t2, n5(t2.parent));
  }
  simplify() {
    const t2 = this._parent.simplify();
    return t2 instanceof o5 ? new _e(this._config, t2) : this;
  }
  get instructions() {
    return h.animatedShift.encode(this._config);
  }
};
var c3 = { AnimatedTransform: s5, AnimatedColor: r6, AnimatedShift: e4 };

// node_modules/@arcgis/core/views/2d/engine/webgl/animations/utils.js
function s6(e6) {
  return a3(e6.map((e7) => l4(e7)).map((e7) => n5(e7).simplify()));
}
function r7(e6) {
  const t2 = [];
  return t2.push(e6.transform), t2.push(e6.fromColor), t2.push(e6.toColor), t2.push(e6.colorMix), t2.push(e6.toOpacity), t2.push(e6.opacityMix), e6?.shift ? t2.push(e6?.shift) : t2.push([1, 1, 1, 1]), t2;
}
function a3(e6) {
  const t2 = [], o13 = [];
  let i9 = 0;
  for (const s15 of e6) {
    const r12 = [...s15.encode(), ...h.ret.encode()];
    t2.push([i9 + e6.length, 0, 0, 0]), o13.push(...r12), i9 += r12.length;
  }
  return [...t2, ...o13];
}
async function c4(e6, t2) {
  const o13 = e6;
  let i9;
  if ("number" == typeof o13 || "string" == typeof o13 || "boolean" == typeof o13) i9 = o13;
  else if (Array.isArray(o13)) i9 = await Promise.all(o13.map((e7) => c4(e7, t2)));
  else if ("object" == typeof o13) if ("valueExpressionInfo" in o13) {
    const { valueExpressionInfo: e7 } = o13, { expression: n11 } = e7;
    i9 = __spreadProps(__spreadValues({}, o13), { computed: await t2.createComputedField({ expression: n11 }) });
  } else {
    i9 = {};
    for (const e7 in o13) i9[e7] = await c4(o13[e7], t2);
  }
  return i9;
}
function l4(i9, n11, s15) {
  function r12(t2) {
    if (!("computed" in t2)) return t2;
    let o13 = t2.computed.readWithDefault(n11, s15, [255 * t2.defaultValue[0], 255 * t2.defaultValue[1], 255 * t2.defaultValue[2], t2.defaultValue[3]]);
    if ("string" == typeof o13) {
      const t3 = g2.fromString(o13);
      t3 && (o13 = [t3.r, t3.g, t3.b, t3.a]);
    }
    return o13;
  }
  const a8 = i9;
  let c8;
  if ("number" == typeof a8 || "string" == typeof a8 || "boolean" == typeof a8) c8 = a8;
  else if (Array.isArray(a8)) c8 = a8.map((e6) => l4(e6, n11, s15));
  else if ("object" == typeof a8) if ("type" in a8 && null != a8.type && "Process" === a8.type) switch (a8.op) {
    case "ArcadeColor":
      {
        const e6 = l4(a8.value, n11, s15);
        p(Array.isArray(e6) && 4 === e6.length);
        c8 = [e6[0] / 255, e6[1] / 255, e6[2] / 255, e6[3]];
      }
      break;
    case "Transparency":
      {
        const e6 = l4(a8.value, n11, s15);
        p("number" == typeof e6), c8 = 1 - e6 / 100;
      }
      break;
    case "Divide":
    case "Multiply":
    case "Add":
      {
        const e6 = l4(a8.left, n11, s15);
        p("number" == typeof e6);
        const t2 = l4(a8.right, n11, s15);
        switch (p("number" == typeof t2), a8.op) {
          case "Divide":
            c8 = e6 / t2;
            break;
          case "Multiply":
            c8 = e6 * t2;
            break;
          case "Add":
            c8 = e6 + t2;
        }
      }
      break;
    case "Random":
      {
        const e6 = l4(a8.seed, n11, s15), i10 = l4(a8.min, n11, s15), r13 = l4(a8.max, n11, s15), f7 = n11.getObjectId(), p6 = o4(f7 || 0);
        c8 = i10 + e3(p6, e6) * (r13 - i10);
      }
      break;
    case "Cond":
      {
        const e6 = l4(a8.condition, n11, s15), t2 = l4(a8.ifTrue, n11, s15), o13 = l4(a8.ifFalse, n11, s15);
        c8 = e6 ? t2 : o13;
      }
      break;
    case "MatchWinding": {
      const e6 = l4(a8.sign, n11, s15);
      let t2 = l4(a8.angle, n11, s15);
      if (e6 > 0) for (; t2 < 0; ) t2 += 2 * Math.PI;
      else for (; t2 > 0; ) t2 -= 2 * Math.PI;
      c8 = t2;
    }
  }
  else if ("computed" in a8) c8 = r12(a8);
  else {
    c8 = {};
    for (const e6 in a8) c8[e6] = l4(a8[e6], n11, s15);
  }
  return c8;
}
function* f(e6) {
  const t2 = e6;
  if (Array.isArray(t2)) for (const o13 of t2) yield* f(o13);
  else if ("object" == typeof t2) if ("type" in t2 && null != t2.type && "Process" === t2.type) switch (t2.op) {
    case "ArcadeColor":
    case "Transparency":
      yield* f(t2.value);
      break;
    case "Divide":
    case "Multiply":
    case "Add":
      yield* f(t2.left), yield* f(t2.right);
      break;
    case "Random":
      yield* f(t2.seed), yield* f(t2.min), yield* f(t2.max);
      break;
    case "Cond":
      yield* f(t2.condition), yield* f(t2.ifTrue), yield* f(t2.ifFalse);
      break;
    case "MatchWinding":
      yield* f(t2.sign), yield* f(t2.angle);
  }
  else if ("computed" in t2) yield t2.computed;
  else for (const o13 in t2) yield* f(t2[o13]);
}
function p(e6) {
  if (!e6) throw new Error("Assertion failed.");
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/meshWriterUtils.js
var n6 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.meshWriterUtils");
var o6 = 0;
var c5 = 100;
function s7(r12, e6) {
  return [!!r12?.minScale && e6.scaleToZoom(r12.minScale) || o6, !!r12?.maxScale && e6.scaleToZoom(r12.maxScale) || c5];
}
function i3(r12) {
  return 1 << r12;
}
function u4(r12) {
  let e6 = 0;
  for (const [t2, n11] of r12) n11 && (e6 |= 1 << t2);
  return e6;
}
function a4(t2) {
  let o13;
  if (!t2) return [0, 0, 0, 0];
  if ("string" == typeof t2) {
    const c9 = g2.fromString(t2);
    if (!c9) return n6().errorOnce(new r("mapview:mesh-processing", "Unable to parse string into color", { color: t2 })), [0, 0, 0, 0];
    o13 = c9.toArray();
  } else o13 = t2;
  const [c8, s15, i9, u9] = o13;
  return [c8 * (u9 / 255), s15 * (u9 / 255), i9 * (u9 / 255), u9];
}
function f2(r12) {
  switch (r12) {
    case "butt":
    case "Butt":
      return 0;
    case "round":
    case "Round":
      return 1;
    case "square":
    case "Square":
      return 2;
  }
}
function m(r12) {
  switch (r12) {
    case "bevel":
    case "Bevel":
      return 0;
    case "miter":
    case "Miter":
      return 2;
    case "round":
    case "Round":
      return 1;
  }
}
function l5(r12, e6) {
  return Math.round(Math.min(Math.sqrt(r12 * e6), 255));
}
function g4(r12, e6) {
  return Math.round(r12 * e6) / e6;
}

// node_modules/@arcgis/core/symbols/cim/effects/EffectHelper.js
var n7 = 96 / 72;
var l6 = class {
  static executeEffects(t2, e6, l12, c8) {
    const f7 = n7, m6 = V(t2);
    let p6 = new y(e6);
    for (const o13 of t2) {
      const t3 = w(o13);
      t3 && (p6 = t3.execute(p6, o13, f7, l12, m6, c8));
    }
    return p6;
  }
  static applyEffects(n11, l12) {
    if (!n11) return l12;
    const c8 = V(n11);
    let f7, m6 = new y(_.fromJSONCIM(l12));
    for (const t2 of n11) {
      const e6 = w(t2);
      e6 && (m6 = e6.execute(m6, t2, 1, null, c8, false));
    }
    const p6 = [];
    let u9 = null;
    for (; f7 = m6.next(); ) p6.push(...t(f7)), u9 = f7.geometryType;
    return 0 === p6.length || null === u9 ? null : "esriGeometryPolygon" === u9 ? { rings: p6 } : { paths: p6 };
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriterVertexPack.js
var i4 = class _i {
  static fromVertexSpec(t2, s15) {
    const c8 = n3.fromVertexSpec(t2, s15);
    return new _i(c8);
  }
  constructor(t2) {
    this._spec = t2, this._packed = new Uint8Array(this._spec.stride * this._spec.packVertexCount), this._packedU32View = new Uint32Array(this._packed.buffer), this._dataView = new DataView(this._packed.buffer);
  }
  get attributeLayout() {
    return this._spec.attributeLayout;
  }
  get stride() {
    return this._spec.stride;
  }
  writeVertex(t2, e6, s15, i9, c8, a8) {
    for (let p6 = 0; p6 < this._spec.packVertexCount; p6++) {
      const t3 = p6 * this._spec.stride;
      this._packPosition(s15, i9, t3), this._packId(e6, t3);
      const r12 = this._spec.bitset;
      if (a8) {
        if (r12.packTessellation) {
          const e7 = r12.packTessellation(a8, c8, s15, i9);
          this._pack(e7, r12, t3);
        }
        for (const e7 of this._spec.standardAttributes) if (null != e7.packTessellation) {
          const p7 = e7.packTessellation(a8, c8, s15, i9);
          this._pack(p7, e7, t3);
        } else if (e7.packAlternating?.packTessellation) {
          const t4 = e7.packAlternating.packTessellation(a8, c8, s15, i9);
          for (let s16 = 0; s16 < this._spec.packVertexCount; s16++) {
            const i10 = t4[s16];
            this._pack(i10, e7, s16 * this._spec.stride);
          }
        }
      }
    }
    t2.vertexWriteRegion(this._packedU32View);
  }
  pack(t2, e6) {
    for (const s15 of this._spec.standardAttributes) if (s15.pack && "string" != typeof s15.pack) {
      const i9 = s15.pack(t2, e6);
      for (let t3 = 0; t3 < this._spec.packVertexCount; t3++) this._pack(i9, s15, t3 * this._spec.stride);
    } else if (s15.packAlternating?.pack) {
      const i9 = s15.packAlternating.pack(t2, e6);
      for (let t3 = 0; t3 < this._spec.packVertexCount; t3++) {
        const e7 = i9[t3];
        this._pack(e7, s15, t3 * this._spec.stride);
      }
    }
  }
  _packPosition(e6, s15, i9) {
    const { offset: c8 } = this._spec.position, a8 = this._spec.position.packPrecisionFactor ?? 1, p6 = s4(e6 * a8, s15 * a8);
    this._dataView.setUint32(i9 + c8, p6, true);
  }
  _packId(t2, e6) {
    const s15 = t2 * (this._spec.id.packPrecisionFactor ?? 1), i9 = 4278190080 & this._dataView.getUint32(e6 + this._spec.id.offset, true);
    this._dataView.setUint32(e6 + this._spec.id.offset, s15 | i9, true);
  }
  _pack(t2, e6, i9) {
    o3(this._dataView, t2, e6, i9);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriter.js
var a5 = class {
  constructor(e6, t2, r12, s15) {
    this._instanceId = e6, this._evaluator = t2, this._enabledOptionalAttributes = r12, this._viewParams = s15, this._evaluator.evaluator = (e7) => this.vertexSpec.createComputedParams(e7);
  }
  get _vertexPack() {
    if (!this._cachedVertexPack) {
      const e6 = i4.fromVertexSpec(this.vertexSpec, this._enabledOptionalAttributes);
      this._evaluator.hasDynamicProperties || e6.pack(this._evaluator.evaluatedMeshParams, this._viewParams), this._cachedVertexPack = e6;
    }
    return this._cachedVertexPack;
  }
  get evaluatedMeshParams() {
    return this._evaluator.evaluatedMeshParams;
  }
  get hasEffects() {
    return !!this.evaluatedMeshParams.effects;
  }
  get effectInfos() {
    return this._evaluator.inputMeshParams.effects?.effectInfos;
  }
  get instanceId() {
    return this._instanceId;
  }
  get attributeLayout() {
    return this._vertexPack.attributeLayout;
  }
  get _preventEffectClipping() {
    return false;
  }
  setReferences(e6) {
    this._references = e6;
  }
  getBoundsInfo() {
    return null;
  }
  getTileInfo() {
    return this._viewParams.tileInfo;
  }
  async loadDependencies() {
    for (const { effect: e6 } of this.effectInfos || []) await g(e6);
  }
  enqueueRequest(e6, t2, r12) {
    this._evaluator.hasDynamicProperties && this._evaluator.enqueueRequest(e6, t2, r12);
  }
  write(e6, t2, r12, s15, a8, i9) {
    this.ensurePacked(t2, r12, s15);
    const n11 = this.evaluatedMeshParams.effects;
    if (!n11 || 0 === n11.length) return void this._write(e6, r12, void 0, a8, i9);
    const c8 = this.getEffectCursor(e6, r12, n11);
    if (!c8) return;
    let o13;
    for (; o13 = c8.next(); ) o13.invertY(), this._write(e6, r12, o13, a8, i9);
  }
  ensurePacked(e6, t2, r12) {
    if (!this._evaluator.hasDynamicProperties) return;
    const s15 = this._evaluator.evaluateMeshParams(e6, t2, r12);
    this._vertexPack.pack(s15, this._viewParams);
  }
  hasArcadeDependency(e6) {
    return this._evaluator.hasArcadeDependency(e6);
  }
  _writeVertex(e6, t2, r12, s15, a8) {
    const i9 = this.evaluatedMeshParams;
    this._vertexPack.writeVertex(e6, t2, r12, s15, i9, a8);
  }
  getEffectCursor(t2, s15, a8) {
    const i9 = s15.readGeometryForDisplay()?.clone();
    if (!i9) return;
    const n11 = _.fromOptimizedCIM(i9, s15.geometryType);
    n11.invertY();
    const c8 = t2.id || "";
    return l6.executeEffects(a8, n11, c8, this._preventEffectClipping);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedMeshWriter.js
var o7 = class extends a5 {
};
function r8(e6) {
  const { sprite: o13, isMapAligned: r12, colorLocked: i9, scaleSymbolsProportionally: l12, isStroke: m6 } = e6;
  let n11 = 0;
  return r12 && (n11 |= i3(o2.bitset.isMapAligned)), i9 && (n11 |= i3(o2.bitset.colorLocked)), o13.sdf && (n11 |= i3(o2.bitset.isSDF)), l12 && (n11 |= i3(o2.bitset.scaleSymbolsProportionally)), m6 && (n11 |= i3(o2.bitset.isStroke)), n11;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/attributes.js
var s8 = { type: R.SHORT, count: 2, packPrecisionFactor: wt, pack: ({ scaleInfo: t2 }, { tileInfo: e6 }) => s7(t2, e6) };
var p2 = { type: R.FLOAT, count: 4, packPrecisionFactor: 1, packTessellation: ({ value1Position2Value2: t2 }) => (p(t2), t2) };
var r9 = { type: R.FLOAT, count: 4, packPrecisionFactor: 1, packTessellation: () => [0, 0, 0, 1] };
var l7 = { type: R.FLOAT, count: 1, packPrecisionFactor: 1, pack: () => 0 };
var k = { type: R.FLOAT, count: 1, packPrecisionFactor: 1, packTessellation: ({ lineLength: t2 }) => t2 };
var u5 = { type: R.UNSIGNED_SHORT, count: 1, packTessellation: ({ distance: t2 }) => t2 };
var T = { type: R.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ directionX: t2, directionY: e6 }) => [t2, e6] };
var m2 = { type: R.FLOAT, count: 2, packPrecisionFactor: 16, packTessellation: ({ normalX: t2, normalY: e6 }) => [t2, e6] };
var y3 = { type: R.UNSIGNED_BYTE, count: 3, pack: "id" };
var f3 = { type: R.UNSIGNED_BYTE, count: 1, pack: r8 };
var F = { type: R.SHORT, count: 2, pack: "position", packPrecisionFactor: 1 };
var O2 = { marker: { type: R.FLOAT, count: 2, packAlternating: { count: 4, pack: ({ texelDimensions: t2 }) => [[-0.5 * t2[0], -0.5 * t2[1]], [0.5 * t2[0], -0.5 * t2[1]], [-0.5 * t2[0], 0.5 * t2[1]], [0.5 * t2[0], 0.5 * t2[1]]] } }, line: { type: R.FLOAT, count: 2, packTessellation: ({ extrusionOffsetX: t2, extrusionOffsetY: e6 }, { baseSize: o13 }) => [t2 * o13 / 2, e6 * o13 / 2] }, fill: { type: R.FLOAT, count: 2, packTessellation: () => [0, 0] } };
var S2 = { marker: { type: R.SHORT, count: 2, packPrecisionFactor: 1, packAlternating: { count: 4, packTessellation: ({ texXmax: t2, texXmin: e6, texYmax: o13, texYmin: i9 }) => [[e6, i9], [t2, i9], [e6, o13], [t2, o13]] } } };
var d2 = { type: R.UNSIGNED_SHORT, count: 4, pack: ({ sprite: t2 }) => {
  const { rect: e6, width: i9, height: c8 } = t2, n11 = e6.x + at, a8 = e6.y + at;
  return [n11 + 1, a8 + 1, n11 + i9 - 1, a8 + c8 - 1];
} };
var x = { type: R.UNSIGNED_SHORT, count: 4, packPrecisionFactor: 4, pack: ({ animations: t2, baseSize: e6, referenceSize: o13 }) => [t2.dataColumn, t2.dataRow, e6, o13] };
var E2 = { type: R.UNSIGNED_SHORT, count: 4, packPrecisionFactor: 8, pack: ({ strokeWidth: t2, pixelDimensions: e6, baseSize: o13, sprite: i9, sizeRatio: c8 }) => {
  const n11 = Math.max(o13 * i9.width / i9.height, o13), a8 = i9.sdfDecodeCoeff * n11 * c8;
  return [e6[0], e6[1], t2, a8];
} };
var N = { type: R.BYTE, count: 1, packTessellation: ({ angle: e6 }) => e6 * u2 };
var P2 = { type: R.BYTE, count: 1, pack: ({ angle: e6 }) => e6 ? e6 * u2 : 0 };
var h2 = { type: R.BYTE, count: 1, pack: () => 0 };

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/LineMeshWriter.js
var d3 = class {
  constructor() {
    this.extrusionOffsetX = 0, this.extrusionOffsetY = 0, this.normalX = 0, this.normalY = 0, this.directionX = 0, this.directionY = 0, this.distance = 0, this.pathLength = 0, this.distanceOffset = 0, this.lineLength = 0;
  }
};
var f4 = { createComputedParams: (t2) => t2, optionalAttributes: { zoomRange: { type: R.SHORT, count: 2, packPrecisionFactor: wt, pack: ({ scaleInfo: t2 }, { tileInfo: e6 }) => s7(t2, e6) } }, attributes: { id: { type: R.UNSIGNED_BYTE, count: 3, pack: "id" }, pos: { type: R.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, bitset: { type: R.UNSIGNED_BYTE, count: 1 }, color: { type: R.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: t2 }) => a4(t2) }, offset: { type: R.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ extrusionOffsetX: t2, extrusionOffsetY: e6 }) => [g4(t2, 16), g4(e6, 16)] }, normal: { type: R.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ normalX: t2, normalY: e6 }) => [g4(t2, 16), g4(e6, 16)] }, halfWidth: { type: R.HALF_FLOAT, count: 1, pack: ({ width: e6 }) => u(0.5 * e6) }, referenceHalfWidth: { type: R.HALF_FLOAT, count: 1, pack: ({ referenceWidth: e6 }) => u(0.5 * e6) } } };
var _3 = class {
  constructor() {
    this.id = 0, this.bitset = 0, this.indexCount = 0, this.vertexCount = 0, this.vertexFrom = 0, this.vertexBounds = 0, this.pathLength = 0, this.distanceOffset = 0;
  }
};
var x2 = 65535;
var T2 = class extends a5 {
  constructor(t2, e6, s15, i9) {
    super(t2, e6, s15, i9), this.vertexSpec = f4, this._currentWrite = new _3(), this._tessellationOptions = { halfWidth: 0, pixelCoordRatio: 1, offset: 0, wrapDistance: x2, textured: false }, this._tessParams = new d3(), this._initializeTessellator();
  }
  writeLineVertices(t2, e6, s15) {
    const i9 = this._getLines(e6);
    null != i9 && this._writeVertices(t2, s15, i9);
  }
  _initializeTessellator() {
    this._lineTessellator = new _2(this._writeTesselatedVertex.bind(this), this._writeTriangle.bind(this), true);
  }
  _write(t2, s15, i9) {
    const r12 = i9 ?? _.fromFeatureSetReaderCIM(s15);
    r12 && this._writeGeometry(t2, s15, r12);
  }
  _writeGeometry(t2, e6, s15, i9) {
    t2.recordStart(this.instanceId, this.attributeLayout, i9), this.writeLineVertices(t2, s15, e6), t2.recordEnd();
  }
  _getLines(t2) {
    return y2(t2, a2(this.evaluatedMeshParams));
  }
  _writeVertices(e6, s15, r12) {
    const { _currentWrite: o13, _tessellationOptions: c8, evaluatedMeshParams: h7 } = this, { width: l12, capType: m6, joinType: u9, miterLimit: p6, hasSizeVV: d5 } = h7, f7 = u(0.5 * l12);
    c8.halfWidth = f7, c8.capType = f2(m6), c8.joinType = m(u9), c8.miterLimit = p6;
    const _5 = !d5;
    o13.out = e6, o13.id = s15.getDisplayId(), o13.vertexCount = 0, o13.indexCount = 0, o13.vertexFrom = e6.vertexCount(), o13.vertexBounds = _5 && f7 < Z ? 0 : 1;
    for (const { line: t2, start: i9, pathLength: n11 } of r12) c8.initialDistance = i9 % x2, o13.pathLength = n11, o13.distanceOffset = Math.floor(i9 / x2) * x2, this._lineTessellator.tessellate(t2, c8, _5);
  }
  _writeTesselatedVertex(t2, e6, s15, i9, r12, o13, n11, a8, c8, h7, l12) {
    const { out: m6, id: u9, vertexBounds: p6, pathLength: d5, distanceOffset: f7 } = this._currentWrite;
    return this.hasEffects && m6.recordBounds(t2, e6, p6, p6), this._tessParams.extrusionOffsetX = n11, this._tessParams.extrusionOffsetY = a8, this._tessParams.normalX = c8, this._tessParams.normalY = h7, this._tessParams.directionX = r12, this._tessParams.directionY = o13, this._tessParams.distance = l12, this._tessParams.pathLength = d5, this._tessParams.distanceOffset = f7, this._writeVertex(m6, u9, t2, e6, this._tessParams), this._currentWrite.vertexFrom + this._currentWrite.vertexCount++;
  }
  _writeTriangle(t2, e6, s15) {
    const { out: i9 } = this._currentWrite;
    i9.indexEnsureSize(3), i9.indexWrite(t2), i9.indexWrite(e6), i9.indexWrite(s15), this._currentWrite.indexCount += 3;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/AFillMeshWriter.js
var i5 = class extends a5 {
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), c2()]);
  }
  _write(e6, t2, s15) {
    const r12 = s15?.asOptimized() ?? t2.readGeometryForDisplay(), i9 = this._clip(r12);
    i9 && (e6.recordStart(this.instanceId, this.attributeLayout), this._writeGeometry(e6, t2, i9.justXY()), e6.recordEnd());
  }
  _clip(e6) {
    if (!e6) return null;
    const s15 = this.hasEffects;
    return d(e6, s15 ? 256 : 8);
  }
  _writeGeometry(e6, t2, r12) {
    r12 = r12.justXY();
    const i9 = g3(r12);
    if (!i9 || !i9.vertices.length) return;
    const o13 = this.createTesselationParams(t2);
    this._writeVertices(e6, t2, i9, o13);
  }
  _writeVertices(e6, t2, s15, r12) {
    const i9 = t2.getDisplayId(), o13 = e6.vertexCount(), n11 = this.hasEffects, { vertices: c8, indices: a8 } = s15;
    let l12 = 0;
    if (a8) for (const d5 of a8) {
      const t3 = c8[2 * d5], s16 = c8[2 * d5 + 1];
      n11 && e6.recordBounds(t3, s16, 0, 0), this._writeVertex(e6, i9, t3, s16, r12), l12++;
    }
    else for (let d5 = 0; d5 < c8.length; d5 += 2) {
      const t3 = Math.round(c8[d5]), s16 = Math.round(c8[d5 + 1]);
      n11 && e6.recordBounds(t3, s16, 0, 0), this._writeVertex(e6, i9, t3, s16, r12), l12++;
    }
    e6.indexEnsureSize(l12);
    for (let d5 = 0; d5 < l12; d5++) e6.indexWrite(d5 + o13);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityMeshWriter.js
var r10 = { createComputedParams: (e6) => e6, optionalAttributes: {}, attributes: { id: { type: R.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: R.UNSIGNED_BYTE, count: 1 }, pos: { type: R.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, inverseArea: { type: R.FLOAT, count: 1, packTessellation: ({ inverseArea: e6 }) => e6 } } };
var s9 = class extends i5 {
  constructor() {
    super(...arguments), this.vertexSpec = r10;
  }
  createTesselationParams(e6) {
    return { inverseArea: 1 / e6.readGeometryArea() };
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/FillMeshWriter.js
var i6 = { createComputedParams: (t2) => t2, optionalAttributes: { zoomRange: { type: R.SHORT, count: 2, packPrecisionFactor: wt, pack: ({ scaleInfo: t2 }, { tileInfo: o13 }) => s7(t2, o13) } }, attributes: { id: { type: R.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: R.UNSIGNED_BYTE, count: 1 }, pos: { type: R.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, color: { type: R.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: t2 }) => a4(t2) } } };
var c6 = class extends i5 {
  constructor() {
    super(...arguments), this.vertexSpec = i6;
  }
  createTesselationParams(t2) {
    return null;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternFillMeshWriter.js
var s10 = { createComputedParams: (t2) => t2, optionalAttributes: i6.optionalAttributes, attributes: __spreadProps(__spreadValues({}, i6.attributes), { tlbr: { count: 4, type: R.UNSIGNED_SHORT, pack: ({ sprite: e6 }) => {
  const { rect: r12, width: i9, height: s15 } = e6, o13 = r12.x + at, a8 = r12.y + at;
  return [o13, a8, o13 + i9, a8 + s15];
} }, inverseRasterizationScale: { count: 1, type: R.BYTE, packPrecisionFactor: 16, pack: ({ sprite: t2 }) => 1 / t2.rasterizationScale } }) };
var o8 = class extends c6 {
  constructor() {
    super(...arguments), this.vertexSpec = s10;
  }
  _write(t2, e6, r12) {
    const i9 = r12?.asOptimized() ?? e6.readGeometryForDisplay(), s15 = this._clip(i9);
    if (!s15) return;
    const o13 = this.evaluatedMeshParams.sprite?.textureBinding;
    t2.recordStart(this.instanceId, this.attributeLayout, o13), this._writeGeometry(t2, e6, s15), t2.recordEnd();
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexFillMeshWriter.js
function p3(e6) {
  const { sprite: o13, aspectRatio: s15, scaleProportionally: r12 } = e6, i9 = u(e6.height), c8 = i9 > 0 ? i9 : o13.height;
  let a8 = i9 * s15;
  return a8 <= 0 ? a8 = o13.width : r12 && (a8 *= o13.width / o13.height), { width: a8, height: c8 };
}
function n8(t2) {
  const { applyRandomOffset: e6, sampleAlphaOnly: s15 } = t2;
  return u4([[A2, e6], [u3, s15]]);
}
var l8 = { createComputedParams: (t2) => t2, optionalAttributes: s10.optionalAttributes, attributes: __spreadProps(__spreadValues({}, s10.attributes), { bitset: { count: 1, type: R.UNSIGNED_BYTE, pack: n8 }, width: { count: 1, type: R.HALF_FLOAT, pack: (t2) => p3(t2).width }, height: { count: 1, type: R.HALF_FLOAT, pack: (t2) => p3(t2).height }, offset: { count: 2, type: R.HALF_FLOAT, pack: ({ offsetX: e6, offsetY: o13 }) => [u(e6), -u(o13)] }, scale: { count: 2, type: R.UNSIGNED_BYTE, packPrecisionFactor: 16, pack: ({ scaleX: t2, scaleY: e6 }) => [t2, e6] }, angle: { count: 1, type: R.UNSIGNED_BYTE, pack: ({ angle: t2 }) => l3(t2) } }) };
var h3 = class extends o8 {
  constructor() {
    super(...arguments), this.vertexSpec = l8;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/OutlineFillMeshWriter.js
var h4 = { createComputedParams: (e6) => e6, optionalAttributes: f4.optionalAttributes, attributes: __spreadProps(__spreadValues({}, f4.attributes), { bitset: { type: R.UNSIGNED_BYTE, count: 1, pack: (e6) => 0 }, color: { type: R.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: e6 }) => a4(e6) } }) };
var m3 = { createComputedParams: (e6) => e6, optionalAttributes: f4.optionalAttributes, attributes: __spreadProps(__spreadValues({}, f4.attributes), { bitset: { type: R.UNSIGNED_BYTE, count: 1, pack: (e6) => u4([[z, true], [J, e6.outlineUsesColorVV]]) }, color: { type: R.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ outlineColor: e6 }) => a4(e6) } }) };
var p4 = class extends T2 {
  constructor() {
    super(...arguments), this.vertexSpec = m3;
  }
};
var f5 = class extends c6 {
  constructor(e6, t2, i9, r12) {
    super(e6, t2, i9, r12), this.vertexSpec = h4, this._lineMeshWriter = this._createOutlineWriter(e6, t2, i9, r12);
  }
  _createOutlineWriter(e6, t2, i9, r12) {
    return new p4(e6, t2, i9, r12);
  }
  _write(e6, t2) {
    const i9 = this.evaluatedMeshParams.effects, r12 = this.evaluatedMeshParams.outlineEffects;
    if (i9?.length || r12?.length) {
      if (i9?.length) {
        const r13 = this.getEffectCursor(e6, t2, i9);
        if (r13) {
          let i10;
          for (; i10 = r13?.next(); ) i10.invertY(), this._writeFill(e6, t2, i10);
        }
      } else this._writeFill(e6, t2);
      if (r12?.length) {
        const i10 = this.getEffectCursor(e6, t2, r12);
        if (i10) {
          let r13;
          for (; r13 = i10?.next(); ) r13.invertY(), this._writeOutline(e6, t2, r13);
        }
      } else this._writeOutline(e6, t2);
    } else this._writeSimpleOutlineFill(e6, t2);
  }
  _writeSimpleOutlineFill(t2, i9) {
    const r12 = i9.readGeometryForDisplay(), s15 = this._clip(r12);
    s15 && (this._writeGeometry(t2, i9, s15), this._lineMeshWriter.writeLineVertices(t2, _.fromOptimizedCIM(s15, "esriGeometryPolyline"), i9));
  }
  _writeFill(e6, t2, i9) {
    const r12 = i9?.asOptimized() ?? t2.readGeometryForDisplay(), s15 = this._clip(r12);
    s15 && this._writeGeometry(e6, t2, s15);
  }
  _writeOutline(t2, i9, r12) {
    const s15 = r12?.asOptimized() ?? i9.readGeometryForDisplay(), o13 = this._clip(s15);
    o13 && this._lineMeshWriter.writeLineVertices(t2, _.fromOptimizedCIM(o13, "esriGeometryPolyline"), i9);
  }
  _clip(e6) {
    return e6 ? d(e6, a2(this.evaluatedMeshParams)) : null;
  }
  get effectInfos() {
    return [...this._evaluator.inputMeshParams.effects?.effectInfos ?? [], ...this._evaluator.inputMeshParams.outlineEffects?.effectInfos ?? []];
  }
  write(e6, t2, i9, r12, s15) {
    this.ensurePacked(t2, i9, r12), e6.recordStart(this.instanceId, this.attributeLayout), this._write(e6, i9), e6.recordEnd();
  }
  ensurePacked(e6, t2, i9) {
    super.ensurePacked(e6, t2, i9), this._lineMeshWriter.ensurePacked(e6, t2, i9);
  }
  enqueueRequest(e6, t2, i9) {
    super.enqueueRequest(e6, t2, i9), this._lineMeshWriter.enqueueRequest(e6, t2, i9);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
  get hasEffects() {
    return !!this.evaluatedMeshParams.outlineEffects;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexOutlineFillMeshWriter.js
var d4 = l8;
var h5 = m3;
var m4 = { createComputedParams: (e6) => e6, optionalAttributes: d4.optionalAttributes, attributes: __spreadProps(__spreadValues({}, d4.attributes), { bitset: { type: R.UNSIGNED_BYTE, count: 1, pack: (e6) => n8(e6) }, aux1: { count: 1, type: R.HALF_FLOAT, pack: (e6) => p3(e6).width }, aux2: { count: 1, type: R.HALF_FLOAT, pack: (e6) => p3(e6).height }, aux3: { count: 2, type: R.HALF_FLOAT, pack: ({ offsetX: t2, offsetY: s15 }) => [u(t2), u(s15)] }, aux4: { count: 2, type: R.UNSIGNED_BYTE, pack: ({ scaleX: e6, scaleY: t2 }) => [e6 * H, t2 * H] } }) };
var x3 = { createComputedParams: (e6) => e6, optionalAttributes: d4.optionalAttributes, attributes: __spreadProps(__spreadValues({}, d4.attributes), { color: h5.attributes.color, bitset: { type: R.UNSIGNED_BYTE, count: 1, pack: (e6) => u4([[z, true]]) }, aux1: { count: 1, type: R.HALF_FLOAT, pack: (t2) => u(0.5 * t2.width) }, aux2: { count: 1, type: R.HALF_FLOAT, pack: (t2) => u(0.5 * t2.referenceWidth) }, aux3: { count: 2, type: R.HALF_FLOAT, packTessellation: ({ extrusionOffsetX: e6, extrusionOffsetY: t2 }) => [e6, t2] }, aux4: { count: 2, type: R.UNSIGNED_BYTE, packTessellation: ({ normalX: e6, normalY: t2 }) => [e6 * H + I, t2 * H + I] } }) };
var A3 = class extends p4 {
  constructor() {
    super(...arguments), this.vertexSpec = x3;
  }
};
var f6 = class extends f5 {
  constructor() {
    super(...arguments), this.vertexSpec = m4;
  }
  _createOutlineWriter(e6, t2, s15, r12) {
    return new A3(e6, t2, s15, r12);
  }
  write(e6, t2, s15, r12, i9) {
    this.ensurePacked(t2, s15, r12);
    const a8 = this.evaluatedMeshParams.sprite?.textureBinding;
    e6.recordStart(this.instanceId, this.attributeLayout, a8), this._write(e6, s15), e6.recordEnd();
  }
  ensurePacked(e6, t2, s15) {
    super.ensurePacked(e6, t2, s15), this._lineMeshWriter.ensurePacked(e6, t2, s15);
  }
  enqueueRequest(e6, t2, s15) {
    super.enqueueRequest(e6, t2, s15), this._lineMeshWriter.enqueueRequest(e6, t2, s15);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/GradientSizeHelper.js
var a6 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.fill.GradientSizeHelper");
var s11 = class {
  constructor(t2, i9) {
    this._size = t2, this._sizeUnits = i9, this._relativeSize = null;
  }
  get relativeSize() {
    return this._relativeSize ??= this.calculateRelativeSize(), this._relativeSize;
  }
  calculateRelativeSize() {
    if (this._sizeUnits === o.Relative) {
      const t2 = Math.min(this._size / 100, 1);
      return [t2, t2];
    }
    return this.calculateRelativeSizeFromAbsolute();
  }
};
var n9 = class extends s11 {
  constructor(t2, i9, e6, r12) {
    super(i9, e6), this.rotationMatrix00 = 1, this.rotationMatrix01 = 0, this.rotationMatrix10 = 0, this.rotationMatrix11 = 1, this.bounds = { xmin: 1 / 0, ymin: 1 / 0, xmax: -1 / 0, ymax: -1 / 0 }, this.rotationMatrix00 = Math.cos(r12), this.rotationMatrix01 = -Math.sin(r12), this.rotationMatrix10 = -this.rotationMatrix01, this.rotationMatrix11 = this.rotationMatrix00;
    const { bounds: a8, rotationMatrix00: s15, rotationMatrix01: n11, rotationMatrix10: o13, rotationMatrix11: c8 } = this;
    t2.forEachVertex((t3, i10) => {
      const e7 = t3 * s15 + i10 * n11, r13 = t3 * o13 + i10 * c8;
      a8.xmin = Math.min(a8.xmin, e7), a8.ymin = Math.min(a8.ymin, r13), a8.xmax = Math.max(a8.xmax, e7), a8.ymax = Math.max(a8.ymax, r13);
    }), this.center = [(a8.xmin + a8.xmax) / 2, (a8.ymin + a8.ymax) / 2];
  }
};
var o9 = class extends n9 {
  constructor(t2, i9, e6, r12) {
    super(t2, i9, e6, r12), this.method = "linear";
  }
  getRelativePosition(t2, i9) {
    const { rotationMatrix00: e6, rotationMatrix01: r12, bounds: a8 } = this, { xmin: s15, xmax: n11 } = a8;
    return [(t2 * e6 + i9 * r12 - s15) / (n11 - s15), 0];
  }
  calculateRelativeSizeFromAbsolute() {
    const { _size: t2, bounds: i9 } = this, { xmin: r12, xmax: a8 } = i9;
    return [u(t2) / (a8 - r12), 0];
  }
};
var c7 = class extends n9 {
  constructor(t2, i9, e6, r12) {
    super(t2, i9, e6, r12), this.method = "rectangular";
  }
  getRelativePosition(t2, i9) {
    const { bounds: e6, center: r12, rotationMatrix00: a8, rotationMatrix01: s15, rotationMatrix10: n11, rotationMatrix11: o13 } = this, c8 = t2 * n11 + i9 * o13, x5 = t2 * a8 + i9 * s15 - r12[0], l12 = c8 - r12[1];
    return [x5 * (2 / (e6.xmax - e6.xmin)), -l12 * (2 / (e6.ymax - e6.ymin))];
  }
  calculateRelativeSizeFromAbsolute() {
    const { _size: t2, bounds: i9 } = this, { xmin: r12, ymin: a8, xmax: s15, ymax: n11 } = i9;
    return [u(2 * t2) / (s15 - r12), u(2 * t2) / (n11 - a8)];
  }
};
var x4 = class extends n9 {
  constructor(t2, i9, e6) {
    super(t2, i9, e6, 0), this.method = "circular";
    const { xmin: r12, xmax: a8, ymin: s15, ymax: n11 } = this.bounds, o13 = a8 - r12, c8 = n11 - s15;
    this.radius = Math.sqrt(o13 * o13 + c8 * c8) / 2;
  }
  getRelativePosition(t2, i9) {
    const { center: e6, radius: r12 } = this;
    return [(t2 - e6[0]) / r12, -((i9 - e6[1]) / r12)];
  }
  calculateRelativeSizeFromAbsolute() {
    const { _size: t2 } = this;
    return [u(t2) / this.radius, 0];
  }
};
function l9(t2, e6) {
  if (null == t2) return null;
  const r12 = s(e6.angle), s15 = e6.gradientSize, n11 = e6.gradientSizeUnits;
  switch (e6.gradientMethod.toLowerCase()) {
    case "linear":
      return new o9(t2, s15, n11, r12);
    case "rectangular":
      return new c7(t2, s15, n11, r12);
    case "circular":
      return new x4(t2, s15, n11);
    default:
      return a6().errorOnce(`Gradient fill method "${e6.gradientMethod}" currently unsupported.`), null;
  }
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/GradientFillMeshWriter.js
var p5 = { createComputedParams: (t2) => t2, optionalAttributes: i6.optionalAttributes, attributes: __spreadProps(__spreadValues({}, i6.attributes), { bitset: { type: R.UNSIGNED_BYTE, count: 1, pack: ({ gradientSizeUnits: e6, gradientType: r12 }) => {
  let i9 = 0;
  return e6 === o.Absolute && (i9 |= i3(e.isAbsolute)), "discrete" === r12.toLowerCase() && (i9 |= i3(e.isDiscrete)), i9;
} }, tlbr: { count: 4, type: R.UNSIGNED_SHORT, pack: ({ sprite: t2 }) => {
  const { rect: i9, width: s15, height: a8 } = t2, o13 = i9.x + at + ft, n11 = i9.y + at;
  return [o13, n11, o13 + s15 - 2 * ft, n11 + a8];
} }, relativePosition: { count: 2, type: R.HALF_FLOAT, packTessellation: ({ gradientStats: t2 }, e6, r12, i9) => t2?.getRelativePosition(r12, i9) ?? [0, 0] }, relativeGradientSize: { count: 2, type: R.HALF_FLOAT, packTessellation: ({ gradientStats: t2 }) => t2?.relativeSize ?? [1, 1] }, gradientMethod: { count: 1, type: R.UNSIGNED_BYTE, pack: ({ gradientMethod: t2 }) => {
  switch (t2.toLowerCase()) {
    case "rectangular":
      return r4.rectangular;
    case "circular":
      return r4.circular;
    default:
      return r4.linear;
  }
} } }) };
var u6 = class extends i5 {
  constructor() {
    super(...arguments), this.vertexSpec = p5;
  }
  get _preventEffectClipping() {
    return true;
  }
  createTesselationParams(t2) {
    return { gradientStats: l9(this._unclippedGeometry, this.evaluatedMeshParams) };
  }
  _write(t2, e6, r12) {
    const i9 = r12?.asOptimized() ?? e6.readGeometryForDisplay();
    this._unclippedGeometry = i9;
    const s15 = this._clip(i9);
    if (!s15) return void (this._unclippedGeometry = null);
    const a8 = this.evaluatedMeshParams.sprite?.textureBinding;
    t2.recordStart(this.instanceId, this.attributeLayout, a8), this._writeGeometry(t2, e6, s15), this._unclippedGeometry = null, t2.recordEnd();
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternOutlineFillMeshWriter.js
var a7 = { optionalAttributes: s10.optionalAttributes, createComputedParams: (e6) => e6, attributes: __spreadValues(__spreadValues({}, s10.attributes), h4.attributes) };
var u7 = { optionalAttributes: s10.optionalAttributes, createComputedParams: (e6) => e6, attributes: __spreadValues(__spreadValues({}, s10.attributes), m3.attributes) };
var n10 = class extends p4 {
  constructor() {
    super(...arguments), this.vertexSpec = u7;
  }
};
var o10 = class extends f5 {
  constructor() {
    super(...arguments), this.vertexSpec = a7;
  }
  _createOutlineWriter(e6, t2, r12, s15) {
    return new n10(e6, t2, r12, s15);
  }
  write(e6, t2, r12, s15, i9) {
    this.ensurePacked(t2, r12, s15);
    const a8 = this.evaluatedMeshParams.sprite?.textureBinding;
    e6.recordStart(this.instanceId, this.attributeLayout, a8), this._write(e6, r12), e6.recordEnd();
  }
  ensurePacked(e6, t2, r12) {
    super.ensurePacked(e6, t2, r12), this._lineMeshWriter.ensurePacked(e6, t2, r12);
  }
  enqueueRequest(e6, t2, r12) {
    super.enqueueRequest(e6, t2, r12), this._lineMeshWriter.enqueueRequest(e6, t2, r12);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/heatmap/HeatmapMeshWriter.js
var r11 = { createComputedParams: (t2) => t2, optionalAttributes: {}, attributes: { pos: { type: R.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: R.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: R.UNSIGNED_BYTE, count: 1 }, offset: { type: R.BYTE, count: 2, packAlternating: { count: 4, pack: () => [[-1, -1], [1, -1], [-1, 1], [1, 1]] } } } };
var i7 = class extends a5 {
  constructor() {
    super(...arguments), this.vertexSpec = r11;
  }
  _write(t2, e6) {
    t2.recordStart(this.instanceId, this.attributeLayout);
    const r12 = e6.getDisplayId();
    if ("esriGeometryPoint" === e6.geometryType) {
      const i9 = e6.readXForDisplay(), o13 = e6.readYForDisplay();
      this._writeQuad(t2, r12, i9, o13);
    } else if ("esriGeometryMultipoint" === e6.geometryType) {
      const i9 = e6.readGeometryForDisplay();
      i9?.forEachVertex((e7, i10) => {
        e7 >= 0 && e7 <= 512 && i10 >= 0 && i10 <= 512 && this._writeQuad(t2, r12, e7, i10);
      });
    }
    t2.recordEnd();
  }
  _writeQuad(t2, e6, r12, i9) {
    const o13 = t2.vertexCount();
    this._writeVertex(t2, e6, r12, i9), t2.indexWrite(o13 + 0), t2.indexWrite(o13 + 1), t2.indexWrite(o13 + 2), t2.indexWrite(o13 + 1), t2.indexWrite(o13 + 3), t2.indexWrite(o13 + 2);
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/CIMMarkerPlacementHelper.js
var e5 = class {
  static getPlacement(e6, r12, n11, s15, c8) {
    const o13 = O(n11);
    if (!o13) return null;
    -1 === r12 && e6.invertY();
    return o13.execute(e6, n11, s15, c8);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextParams.js
var s12 = 96;
var i8 = class {
  constructor(i9) {
    const { offsetX: o13, offsetY: e6, postAngle: f7, fontSize: h7, haloSize: n11, outlineSize: l12, scaleFactor: z3, transforms: a8 } = i9;
    if (this.offsetX = o13, this.offsetY = e6, this.postAngle = f7, this.fontSize = Math.min(h7, s12), this.haloSize = n11 ?? 0, this.outlineSize = l12 ?? 0, this.transforms = a8, a8 && a8.infos.length > 1) {
      const i10 = B(h7, f7, false, o13, e6, a8, false);
      this.fontSize = Math.min(i10.size, s12);
      const n12 = i10.size / h7;
      this.haloSize *= n12, this.outlineSize *= n12, this.postAngle = i10.rotation, this.offsetX = i10.offsetX, this.offsetY = i10.offsetY;
    }
    z3 && (this.fontSize *= z3, this.offsetX *= z3, this.offsetY *= z3);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextMeshWriter.js
var S3 = 28;
var _4 = [4, 4];
var z2 = [16, 4];
var P3 = { topLeft: z2, topRight: z2, bottomLeft: z2, bottomRight: z2 };
var b = [4, 2];
var R2 = [4, 6];
var T3 = { topLeft: b, topRight: b, bottomLeft: R2, bottomRight: R2 };
var k2 = { topLeft: b, topRight: R2, bottomLeft: b, bottomRight: R2 };
var B3 = { topLeft: R2, topRight: R2, bottomLeft: _4, bottomRight: _4 };
var M = { topLeft: _4, topRight: _4, bottomLeft: R2, bottomRight: R2 };
var L = { topLeft: R2, topRight: _4, bottomLeft: R2, bottomRight: _4 };
var w2 = { topLeft: _4, topRight: R2, bottomLeft: _4, bottomRight: R2 };
var A4 = { createComputedParams: (t2) => t2, optionalAttributes: { zoomRange: { type: R.UNSIGNED_SHORT, count: 2, packPrecisionFactor: wt, packTessellation: ({ minZoom: t2, maxZoom: e6 }) => [t2 || 0, e6 || S3] }, clipAngle: { type: R.UNSIGNED_BYTE, count: 1, packTessellation: ({ clipAngle: t2 }) => I2(t2 || 0) }, referenceSymbol: { type: R.BYTE, count: 4, packPrecisionFactor: 1, packTessellation: (t2, o13) => {
  const i9 = t2.isLineLabel || !t2.referenceBounds, n11 = c(i9 ? "center" : o13.horizontalAlignment), a8 = s3(i9 ? "middle" : o13.verticalAlignment), { offsetX: l12, offsetY: c8, size: d5 } = i9 ? { offsetX: 0, offsetY: 0, size: 0 } : t2.referenceBounds;
  return [u(l12), -u(c8), Math.round(u(d5)), n11 + 1 << 2 | a8 + 1];
} }, visibility: { type: R.FLOAT, count: 1, otherSource: true } }, attributes: { pos: { type: R.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: R.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: R.UNSIGNED_BYTE, count: 1, packTessellation: ({ isBackground: t2, mapAligned: e6 }) => u4([[D, t2], [E, !!e6]]) }, offset: { type: R.SHORT, count: 2, packPrecisionFactor: 8, packAlternating: { count: 4, packTessellation: ({ offsets: t2 }) => {
  const { bottomLeft: e6, bottomRight: o13, topLeft: i9, topRight: s15 } = t2;
  return [i9, s15, e6, o13];
} } }, textureUV: { type: R.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, packTessellation: ({ texcoords: t2 }) => {
  const { bottomLeft: e6, bottomRight: o13, topLeft: i9, topRight: s15 } = t2;
  return [i9, s15, e6, o13];
} } }, color: { type: R.UNSIGNED_BYTE, count: 4, normalized: true, packTessellation: ({ color: t2 }) => t2 }, fontAndReferenceSize: { type: R.UNSIGNED_SHORT, count: 4, packPrecisionFactor: 4, packTessellation: ({ fontSize: t2, sdfSize: o13, sdfRadius: i9 }, { referenceSize: s15 }) => [Math.round(u(t2)), Math.round(u(s15 ?? t2)), o13, i9] }, outlineColor: { type: R.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ outlineColor: t2 }) => a4(t2) }, haloColor: { type: R.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ haloColor: t2 }) => a4(t2) }, outlineAndHaloSize: { type: R.UNSIGNED_SHORT, count: 2, packPrecisionFactor: 4, packTessellation: ({ outlineSize: t2, haloSize: o13 }) => [Math.round(u(t2)), Math.round(u(o13))] } } };
var v = class extends a5 {
  constructor() {
    super(...arguments), this.vertexSpec = A4, this._textMeshParamsPropsInitialized = false;
  }
  ensurePacked(t2, e6, o13) {
    super.ensurePacked(t2, e6, o13), this._textMeshParamsPropsInitialized && !this._evaluator.hasDynamicProperties || (this._textMeshTransformProps = new i8(this.evaluatedMeshParams), this._textMeshParamsPropsInitialized = true);
  }
  _write(t2, e6, o13) {
    const i9 = this._getShaping();
    if (!i9) return;
    const s15 = 1 === this.evaluatedMeshParams.alignment, r12 = e6.getDisplayId();
    if (null != this.evaluatedMeshParams.placement) return this._writePlacedTextMarkers(t2, e6, i9, o13);
    if (o13?.nextPath()) return o13.nextPoint(), this._writeGlyphs(t2, r12, o13.x, o13.y, i9, 0, void 0, { mapAligned: s15 });
    if ("esriGeometryPolygon" === e6.geometryType) {
      const o14 = e6.readCentroidForDisplay();
      if (!o14) return;
      const [n12, a9] = o14.coords;
      return this._writeGlyphs(t2, r12, n12, a9, i9, 0, void 0, { mapAligned: s15 });
    }
    if ("esriGeometryMultipoint" === e6.geometryType) {
      const o14 = e6.readGeometryForDisplay();
      return void o14?.forEachVertex((e7, o15) => this._writeGlyphs(t2, r12, e7, o15, i9, 0, void 0, { mapAligned: s15 }));
    }
    const n11 = e6.readXForDisplay(), a8 = e6.readYForDisplay();
    return this._writeGlyphs(t2, r12, n11, a8, i9, 0, void 0, { mapAligned: s15 });
  }
  _writePlacedTextMarkers(t2, s15, r12, n11) {
    const a8 = n11 ?? _.fromFeatureSetReaderCIM(s15);
    if (!a8) return;
    const l12 = -1, c8 = e5.getPlacement(a8, l12, this.evaluatedMeshParams.placement, u(1), t2.id);
    if (!c8) return;
    const d5 = s15.getDisplayId();
    let h7 = c8.next();
    for (; null != h7; ) {
      const e6 = h7.tx, o13 = -h7.ty, i9 = -h7.getAngle();
      this._writeGlyphs(t2, d5, e6, o13, r12, i9, void 0, { mapAligned: 1 === this.evaluatedMeshParams.alignment }), h7 = c8.next();
    }
  }
  _getShaping(o13) {
    const i9 = this._textMeshTransformProps, s15 = this.evaluatedMeshParams;
    if (!s15.glyphs?.glyphs.length) return null;
    const r12 = u(i9.fontSize), n11 = u(i9.offsetX), h7 = u(i9.offsetY), f7 = s15.glyphs.sdfSize, p6 = r2(u(s15.lineWidth), Ot, Pt), m6 = f7 / 24 * l2 * r2(s15.lineHeightRatio, 0.25, 4);
    return A(s15.glyphs, { scale: r12 / f7, angle: i9.postAngle, xOffset: n11, yOffset: h7, horizontalAlignment: s15.horizontalAlignment, verticalAlignment: o13 || s15.verticalAlignment, maxLineWidth: p6, lineHeight: m6, decoration: s15.decoration, borderLineSizePx: u(s15.boxBorderLineSize), hasBackground: !!s15.boxBackgroundColor, useCIMAngleBehavior: s15.useCIMAngleBehavior });
  }
  _writeGlyphs(t2, o13, i9, s15, r12, n11, a8, l12, c8 = true) {
    const d5 = this.evaluatedMeshParams, p6 = this._textMeshTransformProps, m6 = u(p6.fontSize), u9 = p6.haloSize, g6 = p6.outlineSize, x5 = u(p6.offsetX), y4 = u(p6.offsetY), { sdfSize: S5, sdfRadius: _5 } = d5.glyphs, [z3, P5] = s7(d5.scaleInfo, this.getTileInfo());
    0 !== n11 && r12.setRotation(n11);
    const b3 = r12.bounds, R3 = i9 + b3.x + x5, T4 = s15 + b3.y - y4, k4 = 2 * (d5.minPixelBuffer ? d5.minPixelBuffer / m6 : 1), B4 = Math.max(b3.width, b3.height) * k4;
    r12.textBox && (t2.recordStart(this.instanceId, this.attributeLayout, r12.glyphs[0].textureBinding), c8 && t2.recordBounds(R3, T4, B4, B4), this._writeTextBox(t2, o13, i9, s15, r12.textBox, a8, l12), t2.recordEnd());
    for (const e6 of r12.glyphs) {
      t2.recordStart(this.instanceId, this.attributeLayout, e6.textureBinding), c8 && t2.recordBounds(R3, T4, B4, B4);
      const { texcoords: r13, offsets: n12 } = e6;
      this._writeQuad(t2, o13, i9, s15, __spreadValues({ texcoords: r13, offsets: n12, fontSize: m6, haloSize: u9, outlineSize: g6, sdfSize: S5, sdfRadius: _5, color: a4(d5.color), isBackground: false, referenceBounds: a8, minZoom: z3, maxZoom: P5 }, l12)), t2.recordEnd();
    }
    0 !== n11 && r12.setRotation(-n11);
  }
  _writeTextBox(t2, e6, o13, i9, s15, r12, n11) {
    const a8 = this.evaluatedMeshParams, { fontSize: l12, haloSize: c8, outlineSize: d5 } = this._textMeshTransformProps, { boxBackgroundColor: h7, boxBorderLineColor: p6, boxBorderLineSize: m6 } = a8, { sdfSize: u9, sdfRadius: g6 } = a8.glyphs, x5 = !!p6 && m6 > 0, y4 = __spreadValues({ isBackground: true, fontSize: l12, haloSize: c8, outlineSize: d5, referenceBounds: r12, sdfSize: u9, sdfRadius: g6 }, n11);
    h7 && (this._writeQuad(t2, e6, o13, i9, __spreadValues({ texcoords: P3, offsets: s15.main, color: a4(h7) }, y4)), x5 || (this._writeQuad(t2, e6, o13, i9, __spreadValues({ texcoords: B3, offsets: s15.top, color: a4(h7) }, y4)), this._writeQuad(t2, e6, o13, i9, __spreadValues({ texcoords: M, offsets: s15.bot, color: a4(h7) }, y4)), this._writeQuad(t2, e6, o13, i9, __spreadValues({ texcoords: L, offsets: s15.left, color: a4(h7) }, y4)), this._writeQuad(t2, e6, o13, i9, __spreadValues({ texcoords: w2, offsets: s15.right, color: a4(h7) }, y4)))), x5 && (this._writeQuad(t2, e6, o13, i9, __spreadValues({ texcoords: T3, offsets: s15.top, color: a4(p6) }, y4)), this._writeQuad(t2, e6, o13, i9, __spreadValues({ texcoords: T3, offsets: s15.bot, color: a4(p6) }, y4)), this._writeQuad(t2, e6, o13, i9, __spreadValues({ texcoords: k2, offsets: s15.left, color: a4(p6) }, y4)), this._writeQuad(t2, e6, o13, i9, __spreadValues({ texcoords: k2, offsets: s15.right, color: a4(p6) }, y4)));
  }
  _writeQuad(t2, e6, o13, i9, s15) {
    const r12 = t2.vertexCount();
    this._writeVertex(t2, e6, o13, i9, s15), t2.indexWrite(r12 + 0), t2.indexWrite(r12 + 1), t2.indexWrite(r12 + 2), t2.indexWrite(r12 + 1), t2.indexWrite(r12 + 3), t2.indexWrite(r12 + 2);
  }
};
var I2 = (t2) => Math.round(t2 * (254 / 360));

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/GradientStrokeMeshWriter.js
var m5 = { createComputedParams: (t2) => t2, optionalAttributes: f4.optionalAttributes, attributes: __spreadProps(__spreadValues({}, f4.attributes), { bitset: { type: R.UNSIGNED_BYTE, count: 1, pack: ({ gradientMethod: t2, gradientSizeUnits: e6, gradientType: r12 }) => u4([[e2.isAlongLine, "alongline" === t2.toLowerCase()], [e2.isAbsoluteSize, e6 === o.Absolute], [e2.isDiscrete, "discrete" === r12.toLowerCase()]]) }, tlbr: { type: R.UNSIGNED_SHORT, count: 4, pack: ({ sprite: t2 }) => {
  const { rect: e6, width: i9, height: o13 } = t2, n11 = e6.x + at + ft, a8 = e6.y + at;
  return [n11, a8, n11 + i9 - 2 * ft, a8 + o13];
} }, accumulatedDistance: { type: R.HALF_FLOAT, count: 1, packTessellation: ({ distance: t2, pathLength: e6, distanceOffset: i9 }) => (i9 + t2) / e6 }, gradientSize: { type: R.HALF_FLOAT, count: 1, pack: ({ gradientSize: e6, gradientSizeUnits: r12 }) => r12 === o.Relative ? e6 / 100 : u(e6) }, totalLength: { type: R.HALF_FLOAT, count: 1, packTessellation: ({ pathLength: t2 }) => t2 }, segmentDirection: { type: R.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ directionX: t2, directionY: e6 }) => [t2, e6] } }) };
var l10 = class extends T2 {
  get _preventEffectClipping() {
    return true;
  }
  constructor(t2, e6, i9, r12) {
    super(t2, e6, i9, r12), this.vertexSpec = m5, this._tessellationOptions.textured = true;
  }
  _write(t2, i9, r12) {
    const s15 = r12 ?? _.fromFeatureSetReaderCIM(i9);
    if (!s15) return;
    const { sprite: o13 } = this.evaluatedMeshParams;
    this._writeGeometry(t2, i9, s15, o13?.textureBinding);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/TexturedLineMeshWriter.js
var u8 = { createComputedParams: (t2) => t2, optionalAttributes: f4.optionalAttributes, attributes: __spreadProps(__spreadValues({}, f4.attributes), { bitset: { type: R.UNSIGNED_BYTE, count: 1, pack: ({ shouldSampleAlphaOnly: t2, shouldScaleDash: e6, isSDF: r12 }) => u4([[u3, t2], [B2, e6], [C, r12]]) }, tlbr: { type: R.UNSIGNED_SHORT, count: 4, pack: ({ sprite: t2 }) => {
  const { rect: e6, width: s15, height: o13 } = t2, i9 = e6.x + at, a8 = e6.y + at;
  return [i9, a8, i9 + s15, a8 + o13];
} }, accumulatedDistance: { type: R.UNSIGNED_SHORT, count: 1, packTessellation: ({ distance: t2 }) => t2 }, segmentDirection: { type: R.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ directionX: t2, directionY: e6 }) => [t2, e6] }, offsetAlongLine: { type: R.HALF_FLOAT, count: 1, pack: ({ offsetAlongLine: e6 }) => u(e6) }, capType: { type: R.UNSIGNED_BYTE, count: 1, pack: ({ capType: t2 }) => {
  switch (t2) {
    case "Butt":
    case "butt":
    default:
      return 0;
    case "Square":
    case "square":
      return 1;
    case "Round":
    case "round":
      return 2;
  }
} } }) };
var l11 = class extends T2 {
  constructor(t2, e6, r12, s15) {
    super(t2, e6, r12, s15), this.vertexSpec = u8, this._tessellationOptions.textured = true;
  }
  _write(t2, r12, s15) {
    const o13 = s15 ?? _.fromFeatureSetReaderCIM(r12);
    if (!o13) return;
    const { sprite: i9 } = this.evaluatedMeshParams;
    this._writeGeometry(t2, r12, o13, i9?.textureBinding);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/ComputedMarkerParams.js
var o11 = class _o {
  static from(t2) {
    return "width" in t2 ? this.fromSimpleMeshParams(t2) : this.fromComplexMeshParams(t2);
  }
  static fromSimpleMeshParams(e6) {
    const i9 = new _o(e6.sprite, e6.color, e6.outlineColor, e6.minPixelBuffer, e6.placement, e6.scaleInfo, e6.effects), { type: s15, width: h7, height: r12, angle: n11, alignment: a8, outlineSize: c8, referenceSize: f7, sprite: l12, overrideOutlineColor: m6 } = e6;
    return i9.rawWidth = u(h7), i9.rawHeight = u(r12), i9.angle = n11, i9.alignment = a8, i9.outlineSize = u(c8), i9.referenceSize = u(f7), i9.overrideOutlineColor = m6, i9.offsetX = u(e6.offsetX), i9.offsetY = u(e6.offsetY), "simple" !== s15 || l12.sdf || (i9.rawWidth = l12.width, i9.rawHeight = l12.height), i9._computeSize(e6, false), i9;
  }
  static fromComplexMeshParams(i9) {
    const s15 = new _o(i9.sprite, i9.color, i9.outlineColor, i9.minPixelBuffer, i9.placement, i9.scaleInfo, i9.effects);
    let { alignment: h7, transforms: r12, size: n11, scaleX: a8, anchorX: c8, anchorY: f7, angle: l12, colorLocked: m6, frameHeight: d5, widthRatio: u9, offsetX: p6, offsetY: g6, outlineSize: x5, referenceSize: w3, scaleFactor: z3, sizeRatio: X, isAbsoluteAnchorPoint: S5, rotateClockwise: Y, scaleSymbolsProportionally: H2, sprite: C2 } = i9;
    if (r12 && r12.infos.length > 0) {
      const t2 = B(n11, l12, Y, p6, g6, r12);
      n11 = t2.size, l12 = t2.rotation, p6 = t2.offsetX, g6 = t2.offsetY, Y = false;
    }
    z3 && (n11 *= z3, p6 *= z3, g6 *= z3);
    const M2 = a8 * (C2.width / C2.height);
    s15.alignment = h7, s15.rawHeight = u(n11), s15.rawWidth = s15.rawHeight * M2, s15.referenceSize = u(w3), s15.sizeRatio = X, s15.sdfDecodeCoeff = (C2.sdfDecodeCoeff ?? 1) * X, s15.angle = l12, s15.rotateClockwise = Y, s15.anchorX = c8, s15.anchorY = f7, s15.offsetX = u(p6), s15.offsetY = u(g6), S5 && n11 && (C2.sdf ? s15.anchorX = c8 / (n11 * u9) : s15.anchorX = c8 / (n11 * M2), s15.anchorY = f7 / n11);
    const W = H2 && d5 ? n11 / d5 : 1;
    return s15.outlineSize = 0 === x5 || isNaN(x5) ? 0 : u(x5) * W, s15.scaleSymbolsProportionally = H2, s15.colorLocked = m6, s15._computeSize(i9, true), s15;
  }
  constructor(t2, e6, i9, o13, s15, h7, r12) {
    this.sprite = t2, this.color = e6, this.outlineColor = i9, this.minPixelBuffer = o13, this.placement = s15, this.scaleInfo = h7, this.effects = r12, this.rawWidth = 0, this.rawHeight = 0, this.angle = 0, this.outlineSize = 0, this.referenceSize = 0, this.sizeRatio = 1, this.sdfDecodeCoeff = 1, this.alignment = 0, this.scaleSymbolsProportionally = false, this.overrideOutlineColor = false, this.colorLocked = false, this.anchorX = 0, this.anchorY = 0, this.computedWidth = 0, this.computedHeight = 0, this.texXmin = 0, this.texYmin = 0, this.texXmax = 0, this.texYmax = 0, this.offsetX = 0, this.offsetY = 0, this.rotateClockwise = true;
  }
  get boundsInfo() {
    return { size: Math.max(this.computedHeight, this.computedWidth), offsetX: this.offsetX, offsetY: this.offsetY };
  }
  _computeSize(t2, e6) {
    const { sprite: o13, hasSizeVV: r12 } = t2, n11 = !!o13.sdf, a8 = o13.sdfPaddingRatio ?? 0.5, { rawWidth: c8, rawHeight: f7, sizeRatio: l12, outlineSize: m6 } = this, d5 = o13.rect;
    let u9 = c8 * l12, p6 = f7 * l12, g6 = 0, x5 = 0;
    if (n11) {
      const t3 = 1 / (1 - a8);
      if (u9 *= t3, p6 *= t3, r12) this.computedWidth = u9, this.computedHeight = p6;
      else {
        const t4 = e6 && c8 > f7 ? u9 : c8, i9 = f7, s15 = m6 + 2 * 1;
        this.computedWidth = Math.min(t4 + s15, u9), this.computedHeight = Math.min(i9 + s15, p6);
        const h7 = Math.max(o13.width, o13.height) / Math.max(u9, p6);
        g6 = (this.computedWidth - u9) * h7, x5 = (this.computedHeight - p6) * h7;
      }
    } else this.computedWidth = u9 * (d5.width / o13.width), this.computedHeight = p6 * (d5.height / o13.height), g6 = 2 * at, x5 = 2 * at;
    const w3 = d5.x + at - g6 / 2, z3 = d5.y + at - x5 / 2, X = w3 + o13.width + g6, S5 = z3 + o13.height + x5;
    this.texXmin = s13(w3), this.texYmin = s13(z3), this.texXmax = h6(X), this.texYmax = h6(S5), this.computedWidth *= (this.texXmax - this.texXmin) / (X - w3), this.computedHeight *= (this.texYmax - this.texYmin) / (S5 - z3), this.anchorX *= u9 / this.computedWidth, this.anchorY *= p6 / this.computedHeight;
  }
};
function s13(t2, e6 = 1e-7) {
  const i9 = Math.ceil(t2);
  return i9 - t2 < e6 ? i9 : Math.floor(t2);
}
function h6(t2, e6 = 1e-7) {
  const i9 = Math.floor(t2);
  return t2 - i9 < e6 ? i9 : Math.ceil(t2);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/MarkerMeshWriter.js
var P4 = 3.14159265359 / 180;
var g5 = 128 / Math.PI;
function k3(e6, t2) {
  return e6 %= t2, Math.abs(e6 >= 0 ? e6 : e6 + t2);
}
function b2(e6) {
  return k3(e6 * g5, 256);
}
function v2(e6, a8, i9, n11, c8 = false) {
  const l12 = n2(), m6 = c8 ? 1 : -1;
  return a(l12), (a8 || i9) && i(l12, l12, [a8, -i9]), n11 && s2(l12, l12, m6 * P4 * -n11), l12;
}
var S4 = { createComputedParams: (e6) => o11.from(e6), optionalAttributes: { zoomRange: { type: R.SHORT, count: 2, packPrecisionFactor: wt, pack: ({ scaleInfo: e6 }, { tileInfo: t2 }) => s7(e6, t2) } }, attributes: { pos: { type: R.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: R.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: R.UNSIGNED_BYTE, count: 1, pack: ({ sprite: e6, alignment: t2, scaleSymbolsProportionally: r12, overrideOutlineColor: o13, colorLocked: s15 }) => {
  let a8 = 0;
  return e6.sdf && (a8 |= i3(o2.bitset.isSDF)), 1 === t2 && (a8 |= i3(o2.bitset.isMapAligned)), r12 && (a8 |= i3(o2.bitset.scaleSymbolsProportionally)), o13 && (a8 |= i3(o2.bitset.overrideOutlineColor)), s15 && (a8 |= i3(o2.bitset.colorLocked)), a8;
} }, offset: { type: R.HALF_FLOAT, count: 2, packAlternating: { count: 4, pack: ({ angle: e6, computedWidth: t2, computedHeight: r12, anchorX: o13, anchorY: s15, offsetX: i9, offsetY: n11, rotateClockwise: c8 }) => {
  const l12 = v2(0, i9, n11, -e6, c8), m6 = -(0.5 + o13) * t2, u9 = -(0.5 - s15) * r12, d5 = [m6, u9], p6 = [m6 + t2, u9], h7 = [m6, u9 + r12], f7 = [m6 + t2, u9 + r12];
  return S(d5, d5, l12), S(p6, p6, l12), S(h7, h7, l12), S(f7, f7, l12), [d5, p6, h7, f7];
} } }, textureUV: { type: R.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: ({ texXmax: e6, texXmin: t2, texYmax: r12, texYmin: o13 }) => [[t2, o13], [e6, o13], [t2, r12], [e6, r12]] } }, color: { type: R.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: e6 }) => a4(e6) }, outlineColor: { type: R.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ outlineColor: e6 }) => a4(e6) }, sizing: { type: R.UNSIGNED_BYTE, count: 4, pack: ({ rawWidth: e6, rawHeight: t2, outlineSize: r12, referenceSize: o13 }) => {
  const s15 = Math.max(e6, t2);
  return [l5(s15, 128), l5(r12, 128), l5(o13, 128), 0];
} }, placementAngle: { type: R.UNSIGNED_BYTE, count: 1, packTessellation: ({ placementAngle: e6 }) => b2(e6) }, sdfDecodeCoeff: { type: R.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 64, pack: ({ sdfDecodeCoeff: e6 }) => e6 } } };
var I3 = class extends a5 {
  constructor() {
    super(...arguments), this.vertexSpec = S4;
  }
  getBoundsInfo() {
    return this.evaluatedMeshParams.boundsInfo;
  }
  _write(e6, t2, r12) {
    const o13 = this.evaluatedMeshParams.sprite?.textureBinding, s15 = t2.getDisplayId();
    e6.recordStart(this.instanceId, this.attributeLayout, o13);
    const a8 = this.evaluatedMeshParams.minPixelBuffer, i9 = Math.max(this.evaluatedMeshParams.computedWidth, a8), l12 = Math.max(this.evaluatedMeshParams.computedHeight, a8), m6 = -this.evaluatedMeshParams.anchorX * this.evaluatedMeshParams.computedWidth, u9 = this.evaluatedMeshParams.anchorY * this.evaluatedMeshParams.computedHeight, d5 = this.evaluatedMeshParams.offsetX + m6, p6 = -this.evaluatedMeshParams.offsetY + u9;
    if (null != this.evaluatedMeshParams.placement) {
      let o14 = null;
      if (null != r12) {
        const e7 = Math.max(this.evaluatedMeshParams.computedWidth, this.evaluatedMeshParams.computedHeight);
        if (o14 = P(r12, 2 * e7, false), null === o14) return;
      }
      this._writePlacedMarkers(e6, t2, o14, i9, l12);
    } else if (r12?.nextPath()) {
      r12.nextPoint();
      const t3 = r12.x, o14 = r12.y;
      e6.recordBounds(t3 + d5, o14 + p6, i9, l12), this._writeQuad(e6, s15, t3, o14);
    } else if ("esriGeometryPolygon" === t2.geometryType) {
      const r13 = t2.readCentroidForDisplay();
      if (!r13) return;
      const [o14, a9] = r13.coords;
      e6.recordBounds(o14 + d5, a9 + p6, i9, l12), this._writeQuad(e6, s15, o14, a9);
    } else if ("esriGeometryPoint" === t2.geometryType) {
      const r13 = t2.readXForDisplay(), o14 = t2.readYForDisplay();
      e6.recordBounds(r13 + d5, o14 + p6, i9, l12), this._writeQuad(e6, s15, r13, o14);
    } else {
      const r13 = t2.readGeometryForDisplay();
      r13?.forEachVertex((t3, r14) => {
        e6.recordBounds(t3 + d5, r14 + p6, i9, l12), Math.abs(t3) > r3 || Math.abs(r14) > r3 || this._writeQuad(e6, s15, t3, r14);
      });
    }
    e6.recordEnd();
  }
  _writePlacedMarkers(t2, r12, o13, s15, a8) {
    const n11 = o13 ?? _.fromFeatureSetReaderCIM(r12);
    if (!n11) return;
    const m6 = -1, u9 = e5.getPlacement(n11, m6, this.evaluatedMeshParams.placement, u(1), t2.id);
    if (!u9) return;
    const d5 = r12.getDisplayId();
    let p6 = u9.next();
    const h7 = this.evaluatedMeshParams.offsetX, f7 = -this.evaluatedMeshParams.offsetY;
    for (; null != p6; ) {
      const e6 = p6.tx, r13 = -p6.ty;
      if (Math.abs(e6) > r3 || Math.abs(r13) > r3) {
        p6 = u9.next();
        continue;
      }
      const o14 = -p6.getAngle();
      t2.recordBounds(e6 + h7, r13 + f7, s15, a8), this._writeQuad(t2, d5, e6, r13, o14), p6 = u9.next();
    }
  }
  _writeQuad(e6, t2, r12, o13, s15) {
    const a8 = e6.vertexCount(), i9 = null == s15 ? null : { placementAngle: s15 };
    this._writeVertex(e6, t2, r12, o13, i9), e6.indexWrite(a8 + 0), e6.indexWrite(a8 + 1), e6.indexWrite(a8 + 2), e6.indexWrite(a8 + 1), e6.indexWrite(a8 + 3), e6.indexWrite(a8 + 2);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/pieChart/PieChartMeshWriter.js
var o12 = { createComputedParams: (e6) => e6, optionalAttributes: {}, attributes: { pos: { type: R.SHORT, count: 2, packPrecisionFactor: 10, pack: "position" }, id: { type: R.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: R.UNSIGNED_BYTE, count: 1, pack: (e6) => 0 }, offset: { type: R.SHORT, count: 2, packPrecisionFactor: 16, packAlternating: { count: 4, pack: ({ size: t2 }) => {
  const r12 = u(t2), i9 = -r12 / 2, o13 = -r12 / 2;
  return [[i9, o13], [i9 + r12, o13], [i9, o13 + r12], [i9 + r12, o13 + r12]];
} } }, texCoords: { type: R.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: () => [[0, 1], [1, 1], [0, 0], [1, 0]] } }, size: { type: R.UNSIGNED_BYTE, count: 2, pack: ({ size: e6 }) => [e6, e6] }, referenceSize: { type: R.UNSIGNED_BYTE, count: 1, pack: ({ size: t2 }) => u(t2) }, zoomRange: { type: R.UNSIGNED_BYTE, count: 2, pack: ({ scaleInfo: e6 }, { tileInfo: r12 }) => s7(e6, r12) } } };
var s14 = class extends a5 {
  constructor() {
    super(...arguments), this.vertexSpec = o12;
  }
  _write(t2, r12) {
    const i9 = r12.getDisplayId(), o13 = this.evaluatedMeshParams.minPixelBuffer, s15 = Math.max(u(this.evaluatedMeshParams.size), o13);
    let c8, n11;
    if ("esriGeometryPoint" === r12.geometryType) c8 = r12.readXForDisplay(), n11 = r12.readYForDisplay();
    else {
      const e6 = r12.readCentroidForDisplay();
      if (!e6) return;
      c8 = e6?.coords[0], n11 = e6?.coords[1];
    }
    t2.recordStart(this.instanceId, this.attributeLayout), t2.recordBounds(c8, n11, s15, s15);
    const a8 = t2.vertexCount();
    this._writeVertex(t2, i9, c8, n11), t2.indexWrite(a8 + 0), t2.indexWrite(a8 + 1), t2.indexWrite(a8 + 2), t2.indexWrite(a8 + 1), t2.indexWrite(a8 + 3), t2.indexWrite(a8 + 2), t2.recordEnd();
  }
};

export {
  e5 as e,
  s7 as s,
  a4 as a,
  f2 as f,
  m,
  l6 as l,
  o7 as o,
  e3 as e2,
  o4 as o2,
  n5 as n,
  s6 as s2,
  r7 as r,
  a3 as a2,
  c4 as c,
  l4 as l2,
  f as f2,
  s8 as s3,
  p2 as p,
  r9 as r2,
  l7 as l3,
  k,
  u5 as u,
  T,
  m2,
  y3 as y,
  f3,
  F,
  O2 as O,
  S2 as S,
  d2 as d,
  x,
  E2 as E,
  N,
  P2 as P,
  h2 as h,
  d3 as d2,
  T2,
  s9 as s4,
  c6 as c2,
  o8 as o3,
  h3 as h2,
  f5 as f4,
  f6 as f5,
  u6 as u2,
  o10 as o4,
  i7 as i,
  S3 as S2,
  v,
  l10 as l4,
  l11 as l5,
  I3 as I,
  s14 as s5
};
//# sourceMappingURL=chunk-DUQAY76L.js.map
