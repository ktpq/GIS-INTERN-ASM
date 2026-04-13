import {
  t as t3
} from "./chunk-7NMRWGF3.js";
import {
  E as E2
} from "./chunk-JD4YJIKA.js";
import {
  B,
  C,
  C2,
  I,
  P,
  Qt,
  W,
  X,
  Y,
  Yt,
  _ as _4,
  _2 as _5,
  f as f3,
  je,
  l as l3,
  m2,
  oe,
  on,
  rt,
  s as s4,
  s2 as s5,
  se,
  un,
  v,
  w,
  zt
} from "./chunk-TF6FMOGZ.js";
import {
  e as e2,
  o as o3
} from "./chunk-JPEJPHSH.js";
import {
  h as h3
} from "./chunk-7HEBNF6D.js";
import {
  r as r3
} from "./chunk-UYNYIOPC.js";
import {
  o as o2
} from "./chunk-QOY7P5Z5.js";
import {
  n as n2
} from "./chunk-IX44BN2R.js";
import {
  U2 as U,
  _ as _3
} from "./chunk-QIW5SGHS.js";
import {
  f as f2,
  s as s3
} from "./chunk-36D6UBSS.js";
import {
  m
} from "./chunk-HKAEXOPY.js";
import {
  r
} from "./chunk-G7LDH7VD.js";
import {
  t as t2
} from "./chunk-7U4LQW5Y.js";
import {
  e
} from "./chunk-2DDOBC4Y.js";
import {
  E2 as E,
  h as h2
} from "./chunk-NAAAH7RP.js";
import {
  r as r2
} from "./chunk-HR7MU35Z.js";
import {
  R,
  _ as _2
} from "./chunk-AFCXMSTT.js";
import {
  j
} from "./chunk-TV7JW3IK.js";
import {
  l
} from "./chunk-CD6IOUFB.js";
import {
  M,
  b as b2,
  f,
  h,
  i,
  l as l2,
  o
} from "./chunk-4F4IE6P5.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import {
  u
} from "./chunk-QWNB5I7T.js";
import {
  s
} from "./chunk-ZILR7JK7.js";
import {
  _
} from "./chunk-X7TQ4MJH.js";
import {
  b
} from "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import {
  t
} from "./chunk-HJCCWVZL.js";
import {
  d,
  s as s2
} from "./chunk-2DNVIDFH.js";
import {
  n2 as n
} from "./chunk-6SPQI6I6.js";
import {
  __decorate,
  __param
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/support/flow/utils.js
function o4(e7, t7) {
  let n6 = true;
  return n6 = n6 && e7.collisions === t7.collisions, n6 = n6 && e7.density === t7.density, n6 = n6 && e7.interpolate === t7.interpolate, n6 = n6 && e7.lineCollisionWidth === t7.lineCollisionWidth, n6 = n6 && e7.lineSpacing === t7.lineSpacing, n6 = n6 && e7.maxTurnAngle === t7.maxTurnAngle, n6 = n6 && e7.minSpeedThreshold === t7.minSpeedThreshold, n6 = n6 && e7.segmentLength === t7.segmentLength, n6 = n6 && e7.smoothing === t7.smoothing, n6 = n6 && e7.velocityScale === t7.velocityScale, n6 = n6 && e7.verticesPerLine === t7.verticesPerLine, n6 = n6 && e7.onlyForwardTracing === t7.onlyForwardTracing, n6 = n6 && e7.continuous === t7.continuous, n6 = n6 && e7.maxNumberOfStreamlines === t7.maxNumberOfStreamlines, n6 = n6 && s6(e7.perturb, t7.perturb), n6;
}
function s6(e7, t7) {
  return !e7 && !t7 || !(e7 && !t7 || !e7 && t7) && (e7?.rotation === t7?.rotation && e7?.scale === t7?.scale);
}
function r4(t7) {
  const n6 = u2(m3(t7)), i5 = n6, o7 = true, s12 = Math.max(n6 / 2, 5), r8 = Math.round(u(t7.maxPathLength) / s12) + 1, a4 = 10, { density: l8 } = t7, c5 = u(t7.smoothing), x2 = "flow-from" === t7.flowRepresentation ? 1 : -1, h5 = 1e-3, p3 = 1, g3 = true, d6 = false, { continuous: f8, perturb: y3 } = t7;
  return { smoothing: c5, interpolate: g3, velocityScale: x2, verticesPerLine: r8, minSpeedThreshold: h5, segmentLength: s12, maxTurnAngle: p3, collisions: o7, lineCollisionWidth: i5, lineSpacing: a4, density: l8, onlyForwardTracing: d6, continuous: f8, perturb: y3, wrapAround: false, maxNumberOfStreamlines: 1 / 0 };
}
function a2(e7, o7, s12, r8) {
  if (0 === e7.length) return [];
  const a4 = [], m6 = s12.time - o7.time, u8 = f2(e7), c5 = u8 ? s3(e7[0].hasMagnitude) : 1, x2 = u8 ? ({ vertices: e8 }, n6) => {
    const i5 = e8, o8 = n6 * c5;
    return { x: i5[o8], y: i5[o8 + 1], time: t(i5[o8 + 2]), speed: 0 };
  } : ({ vertices: e8 }, t7) => e8[t7];
  for (const n6 of e7) {
    const { stage: e8, vertices: i5 } = n6;
    if (2 === e8) continue;
    const u9 = i5.length / c5, h5 = x2(n6, 0), p3 = h5.time, g3 = (m6 * r8 - p3) % (x2(n6, u9 - 1).time - p3) + p3;
    let d6 = h5.x, f8 = h5.y, y3 = h5.time;
    for (let o8 = 1; o8 < u9 && y3 < g3; o8++) {
      const e9 = x2(n6, o8), i6 = Math.min(e9.time, g3) - y3, s13 = e9.time - y3;
      d6 += (e9.x - d6) * (i6 / s13), f8 += (e9.y - f8) * (i6 / s13), y3 = t(y3 + i6);
    }
    a4.push(l4(d6, f8, o7, s12));
  }
  return a4;
}
function l4(e7, t7, n6, i5) {
  return e7 /= n6.size[0], t7 = 1 - (t7 /= n6.size[1]), e7 *= n6.extent.xmax - n6.extent.xmin, t7 *= n6.extent.ymax - n6.extent.ymin, e7 += n6.extent.xmin, t7 += n6.extent.ymin, e7 -= i5.extent.xmin, t7 -= i5.extent.ymin, e7 /= i5.extent.xmax - i5.extent.xmin, t7 = 1 - (t7 /= i5.extent.ymax - i5.extent.ymin), { x: e7 *= i5.size[0], y: t7 *= i5.size[1] };
}
function m3(t7) {
  if (!t7.hasVisualVariables("size")) return { kind: "constant", value: [u(t7.trailWidth)] };
  const n6 = t7.getVisualVariablesForType("size")[0], i5 = [], o7 = [];
  let s12;
  if (n6.stops) {
    for (const t8 of n6.stops) i5.push(t8.value), o7.push(u(t8.size));
    s12 = n6.stops.length;
  } else i5.push(n6.minDataValue, n6.maxDataValue), o7.push(u(n6.minSize), u(n6.maxSize)), s12 = 2;
  return { kind: "ramp", stops: i5, values: o7, count: s12 };
}
function u2(e7) {
  return "constant" === e7.kind ? e7.value[0] : e7.values[e7.values.length - 1];
}

// node_modules/@arcgis/core/views/2d/engine/flow/utils.js
function o5(t7) {
  const o7 = t7.toRgba();
  return [o7[0] / 255, o7[1] / 255, o7[2] / 255, o7[3]];
}
function n3(t7) {
  return { kind: "constant", value: [0.1, 0.1, 0.1, 1] };
}
function e3(t7) {
  if (!t7.hasVisualVariables("color")) return { kind: "constant", value: o5(t7.color) };
  const n6 = t7.getVisualVariablesForType("color")[0], e7 = [], s12 = [];
  for (const i5 of n6.stops) e7.push(i5.value), Array.prototype.push.apply(s12, o5(i5.color));
  return { kind: "ramp", stops: e7, values: s12, count: n6.stops.length };
}
function s7(t7) {
  if (!t7.hasVisualVariables("opacity")) return { kind: "constant", value: [1] };
  const o7 = t7.getVisualVariablesForType("opacity")[0], n6 = [], e7 = [];
  for (const s12 of o7.stops) n6.push(s12.value), e7.push(s12.opacity);
  return { kind: "ramp", stops: n6, values: e7, count: o7.stops.length };
}
function i2(t7, o7, n6, e7) {
  switch (o7) {
    case "int":
      t7.setUniform1iv(n6, e7);
      break;
    case "float":
      t7.setUniform1fv(n6, e7);
      break;
    case "vec2":
      t7.setUniform2fv(n6, e7);
      break;
    case "vec3":
      t7.setUniform3fv(n6, e7);
      break;
    case "vec4":
      t7.setUniform4fv(n6, e7);
  }
}
function a3(t7, o7, n6, e7) {
  "constant" === e7.kind ? i2(t7, n6, `u_${o7}`, e7.value) : (i2(t7, "float", `u_${o7}_stops`, e7.stops), i2(t7, n6, `u_${o7}_values`, e7.values), t7.setUniform1i(`u_${o7}_count`, e7.count));
}
function r5(t7, o7) {
  return t7 === o7 || null != t7 && null != o7 && t7.equals(o7);
}
function u3(o7, n6) {
  if (!o4(o7.simulationSettings, n6.simulationSettings)) return false;
  if (!r5(o7.timeExtent, n6.timeExtent)) return false;
  let e7 = true;
  return e7 = e7 && o7.loadImagery === n6.loadImagery, e7 = e7 && o7.createFlowMesh === n6.createFlowMesh, e7 = e7 && o7.color.kind === n6.color.kind, e7 = e7 && o7.opacity.kind === n6.opacity.kind, e7 = e7 && o7.size.kind === n6.size.kind, e7;
}
var c2 = 36e5;
var l5 = 3600;

// node_modules/@arcgis/core/views/2d/engine/flow/styles/AFlowResources.js
var s8 = class {
  constructor(s12, t7) {
    this.query = s12, this.flowPaths = t7;
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/styles/Imagery.js
var h4 = class _h {
  constructor(t7) {
    this._params = t7, this.supportsContinuation = false, this.slideoutDuration = 0, this.animated = false;
  }
  isCompatible(t7) {
    if (!(t7 instanceof _h)) return false;
    if (!r5(this._params.timeExtent, t7._params.timeExtent)) return false;
    let a4 = true;
    return a4 = a4 && this._params.loadImagery === t7._params.loadImagery, a4 = a4 && this._params.color.kind === t7._params.color.kind, a4 = a4 && this._params.opacity.kind === t7._params.opacity.kind, a4;
  }
  async load(r8, a4, e7) {
    const { extent: s12, size: o7 } = r8;
    s2(e7);
    const i5 = await this._params.loadImagery(s12, o7[0], o7[1], this._params.timeExtent, e7);
    return new d2(i5, r8, [], { color: this._params.color, opacity: this._params.opacity });
  }
  render(t7, r8, e7) {
    const { context: o7 } = t7, { program: i5 } = e7;
    o7.setFaceCullingEnabled(false), o7.setBlendingEnabled(true), o7.setBlendFunction(1, 771), o7.useProgram(i5), i5.setUniformMatrix3fv("u_dvsMat3", r8.dvsMat3), o7.bindTexture(e7.texture, 0), i5.setUniform1i("u_texture", 0), i5.setUniform1f("u_Min", e7.min), i5.setUniform1f("u_Max", e7.max), a3(i5, "color", "vec4", this._params.color), a3(i5, "opacity", "float", this._params.opacity), o7.bindVAO(e7.vertexArray), o7.drawArrays(_2.TRIANGLE_STRIP, 0, 4);
  }
};
var f4 = [new t2("a_position", 2, R.UNSIGNED_SHORT, 0, 8), new t2("a_texcoord", 2, R.UNSIGNED_SHORT, 4, 8)];
var u4 = { vsPath: "raster/flow/imagery", fsPath: "raster/flow/imagery", locations: r(f4) };
var d2 = class extends s8 {
  constructor(t7, r8, a4, e7) {
    super(r8, a4), this._flowData = t7, this._values = e7;
  }
  attach(t7) {
    const { context: r8 } = t7, { width: a4, height: e7 } = this._flowData, s12 = new r3(r8, f4, new Uint16Array([0, 0, 0, 1, a4, 0, 1, 1, 0, e7, 0, 0, a4, e7, 1, 0])), o7 = new h3(r8, s12), l8 = [];
    "ramp" === this._values.color.kind && l8.push("vvColor"), "ramp" === this._values.opacity.kind && l8.push("vvOpacity");
    const c5 = t7.getProgram(u4, l8);
    let h5 = 1e6, d6 = -1e6;
    for (let i5 = 0; i5 < e7; i5++) for (let t8 = 0; t8 < a4; t8++) if (0 !== this._flowData.mask[i5 * a4 + t8]) {
      const r9 = this._flowData.data[2 * (i5 * a4 + t8)], e8 = this._flowData.data[2 * (i5 * a4 + t8) + 1], s13 = Math.sqrt(r9 * r9 + e8 * e8);
      h5 = Math.min(h5, s13), d6 = Math.max(d6, s13);
    }
    const _8 = new Uint8Array(4 * a4 * e7);
    for (let i5 = 0; i5 < e7; i5++) for (let t8 = 0; t8 < a4; t8++) if (0 !== this._flowData.mask[i5 * a4 + t8]) {
      const r9 = this._flowData.data[2 * (i5 * a4 + t8)], e8 = this._flowData.data[2 * (i5 * a4 + t8) + 1], s13 = (Math.sqrt(r9 * r9 + e8 * e8) - h5) / (d6 - h5);
      _8[4 * (i5 * a4 + t8)] = 255 * s13, _8[4 * (i5 * a4 + t8) + 1] = 0, _8[4 * (i5 * a4 + t8) + 2] = 0, _8[4 * (i5 * a4 + t8) + 3] = 255;
    } else _8[4 * (i5 * a4 + t8)] = 0, _8[4 * (i5 * a4 + t8) + 1] = 0, _8[4 * (i5 * a4 + t8) + 2] = 0, _8[4 * (i5 * a4 + t8) + 3] = 0;
    const w2 = new h2(a4, e7);
    w2.internalFormat = 6408, w2.wrapMode = 33071, w2.flipped = true;
    const x2 = new E(r8, w2, _8);
    this.vertexArray = o7, this.program = c5, this.texture = x2, this.min = h5, this.max = d6, this._flowData = null;
  }
  detach() {
    this.vertexArray.dispose(), this.texture.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/styles/Particles.js
var c3 = class _c {
  constructor(t7) {
    this._params = t7, this.supportsContinuation = false, this.slideoutDuration = 0;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(t7) {
    return t7 instanceof _c && u3(this._params, t7._params);
  }
  async load(s12, a4, r8) {
    const { extent: o7, size: n6 } = s12;
    s2(r8);
    const m6 = await this._params.loadImagery(o7, n6[0], n6[1], this._params.timeExtent, r8), p3 = a4 && this._params.simulationSettings.continuous ? a2(a4.flowPaths, a4.query, s12, this._params.flowSpeed) : [], { vertexData: l8, indexData: f8, pathData: h5 } = await this._params.createFlowMesh("Particles", this._params.simulationSettings, m6, { positions: p3 }, r8), c5 = n2(h5);
    return new d3(l8, f8, s12, c5, { color: this._params.color, opacity: this._params.opacity, size: this._params.size });
  }
  render(t7, e7, s12) {
    const { context: r8 } = t7, { program: i5 } = s12;
    r8.setFaceCullingEnabled(false), r8.setBlendingEnabled(true), r8.setBlendFunction(1, 771), r8.useProgram(i5), i5.setUniform1f("u_time", e7.time), i5.setUniform1f("u_displayOpacity", e7.displayOpacity), i5.setUniform1f("u_trailLength", this._params.trailLength), i5.setUniform1f("u_flowSpeed", this._params.flowSpeed), i5.setUniform1f("u_featheringSize", this._params.featheringSize), i5.setUniform1f("u_featheringOffset", this._params.featheringOffset), i5.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), i5.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), i5.setUniform1f("u_decayRate", this._params.decayRate), i5.setUniformMatrix3fv("u_dvsMat3", e7.dvsMat3), i5.setUniformMatrix3fv("u_displayViewMat3", e7.displayViewMat3), a3(i5, "color", "vec4", this._params.color), a3(i5, "opacity", "float", this._params.opacity), a3(i5, "size", "float", this._params.size), r8.bindVAO(s12.vertexArray), r8.drawElements(_2.TRIANGLES, s12.indexCount, R.UNSIGNED_INT, 0);
  }
};
var u5 = [new t2("a_xyts0", 4, R.FLOAT, 0, 64), new t2("a_xyts1", 4, R.FLOAT, 16, 64), new t2("a_typeIdDurationSeed", 4, R.FLOAT, 32, 64), new t2("a_extrudeInfo", 4, R.FLOAT, 48, 64)];
var _6 = { vsPath: "raster/flow/particles", fsPath: "raster/flow/particles", locations: r(u5) };
var d3 = class extends s8 {
  constructor(t7, e7, s12, a4, r8) {
    super(s12, a4), this._vertexData = t7, this._indexData = e7, this._values = r8;
  }
  attach(t7) {
    const { context: e7 } = t7, s12 = new r3(e7, u5, this._vertexData), a4 = o2.createIndex(e7, 35044, this._indexData), r8 = new h3(e7, s12, a4), i5 = [];
    "ramp" === this._values.color.kind && i5.push("vvColor"), "ramp" === this._values.opacity.kind && i5.push("vvOpacity"), "ramp" === this._values.size.kind && i5.push("vvSize");
    const n6 = t7.getProgram(_6, i5);
    this.vertexArray = r8, this.program = n6, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/styles/Stack.js
var t4 = class _t {
  constructor(s12) {
    this._styles = s12, this.supportsContinuation = false, this.slideoutDuration = 0;
  }
  get animated() {
    return this._styles.reduce((s12, t7) => s12 || t7.animated, false);
  }
  isCompatible(s12) {
    if (!(s12 instanceof _t)) return false;
    if (this._styles.length !== s12._styles.length) return false;
    const e7 = this._styles.length;
    for (let t7 = 0; t7 < e7; t7++) if (!this._styles[t7].isCompatible(s12._styles[t7])) return false;
    return true;
  }
  async load(s12, t7, r8) {
    const o7 = await Promise.all(this._styles.map((t8) => t8.load(s12, null, r8)));
    return new e4(o7, s12, []);
  }
  render(s12, t7, e7) {
    for (let r8 = 0; r8 < this._styles.length; r8++) this._styles[r8].render(s12, t7, e7.resources[r8]);
  }
};
var e4 = class extends s8 {
  constructor(s12, t7, e7) {
    super(t7, e7), this.resources = s12;
  }
  attach(s12) {
    for (const t7 of this.resources) t7.attach(s12);
  }
  detach() {
    for (const s12 of this.resources) s12.detach();
  }
  get ready() {
    return this.resources.reduce((s12, t7) => s12 && t7.ready, true);
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/styles/Streamlines.js
var u6 = class _u {
  constructor(t7) {
    this._params = t7, this.supportsContinuation = false, this.slideoutDuration = 20;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(t7) {
    return t7 instanceof _u && u3(this._params, t7._params);
  }
  async load(s12, a4, i5) {
    const { extent: o7, size: n6 } = s12;
    s2(i5);
    const m6 = await this._params.loadImagery(o7, n6[0], n6[1], this._params.timeExtent, i5), p3 = a4 && this._params.simulationSettings.continuous ? a2(a4.flowPaths, a4.query, s12, this._params.flowSpeed) : [], { vertexData: f8, indexData: l8, pathData: h5 } = await this._params.createFlowMesh("Streamlines", this._params.simulationSettings, m6, { positions: p3 }, i5), u8 = n2(h5);
    return new c4(f8, l8, s12, u8, { color: this._params.color, opacity: this._params.opacity, size: this._params.size });
  }
  render(t7, e7, s12) {
    const { context: i5 } = t7, { program: r8 } = s12;
    i5.setFaceCullingEnabled(false), i5.setBlendingEnabled(true), i5.setBlendFunction(1, 771), i5.useProgram(r8), r8.setUniform1f("u_time", e7.time - s12.query.time), r8.setUniform1f("u_startTime", e7.startTime - s12.query.time), r8.setUniform1f("u_endTime", e7.endTime - s12.query.time), r8.setUniform1f("u_displayOpacity", e7.displayOpacity), r8.setUniform1f("u_trailLength", this._params.trailLength), r8.setUniform1f("u_flowSpeed", this._params.flowSpeed), r8.setUniform1f("u_featheringSize", this._params.featheringSize), r8.setUniform1f("u_featheringOffset", this._params.featheringOffset), r8.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), r8.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), r8.setUniform1f("u_decayRate", this._params.decayRate), r8.setUniformMatrix3fv("u_dvsMat3", e7.dvsMat3), r8.setUniformMatrix3fv("u_displayViewMat3", e7.displayViewMat3), a3(r8, "color", "vec4", this._params.color), a3(r8, "opacity", "float", this._params.opacity), a3(r8, "size", "float", this._params.size), i5.bindVAO(s12.vertexArray), i5.drawElements(_2.TRIANGLES, s12.indexCount, R.UNSIGNED_INT, 0);
  }
};
var _7 = [new t2("a_positionAndSide", 3, R.FLOAT, 0, 36), new t2("a_timeInfo", 3, R.FLOAT, 12, 36), new t2("a_extrude", 2, R.FLOAT, 24, 36), new t2("a_speed", 1, R.FLOAT, 32, 36)];
var d4 = { vsPath: "raster/flow/streamlines", fsPath: "raster/flow/streamlines", locations: r(_7) };
var c4 = class extends s8 {
  constructor(t7, e7, s12, a4, i5) {
    super(s12, a4), this._vertexData = t7, this._indexData = e7, this._values = i5;
  }
  attach(t7) {
    const { context: e7 } = t7, s12 = new r3(e7, _7, this._vertexData), a4 = o2.createIndex(e7, 35044, this._indexData), i5 = new h3(e7, s12, a4), r8 = [];
    "ramp" === this._values.color.kind && r8.push("vvColor"), "ramp" === this._values.opacity.kind && r8.push("vvOpacity"), "ramp" === this._values.size.kind && r8.push("vvSize");
    const n6 = t7.getProgram(d4, r8);
    this.vertexArray = i5, this.program = n6, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/createFlowStyle.js
var m4 = 4;
var p = 1;
var u7 = 0.5;
var f5 = true;
var d5 = true;
var y = 2.3;
function g(g3, w2) {
  const { flowSpeed: h5, trailLength: j3 } = g3, v2 = r4(g3);
  let S2 = null;
  const k2 = { opacity: s7(g3), size: m3(g3) };
  let x2 = e3(g3);
  if ("none" === g3.background) k2.color = x2;
  else {
    "constant" === x2.kind && (x2 = { kind: "ramp", stops: [0, 1], values: [0, 0, 0, 1, x2.value[0], x2.value[1], x2.value[2], x2.value[3]], count: 2 });
    const t7 = { loadImagery: w2.loadImagery, timeExtent: w2.timeExtent, color: x2, opacity: { kind: "constant", value: [1] } };
    S2 = new h4(t7), k2.color = n3();
  }
  const I2 = { loadImagery: w2.loadImagery, createFlowMesh: w2.createFlowMesh, simulationSettings: v2, timeExtent: w2.timeExtent, trailLength: j3, flowSpeed: h5, featheringSize: p, featheringOffset: u7, introFade: f5, fadeToZero: d5, decayRate: y, color: k2.color, opacity: k2.opacity, size: k2.size }, z3 = "butt" === g3.trailCap || u2(m3(g3)) <= m4 ? new u6(I2) : new c3(I2);
  return null != S2 ? new t4([S2, z3]) : z3;
}

// node_modules/@arcgis/core/views/2d/engine/flow/animatedValues.js
var t5 = class {
  constructor(t7, e7, r8, n6) {
    this.startTime = t7, this.startValue = e7, this.endTime = r8, this.endValue = n6;
  }
  getValue(t7) {
    if (t7 <= this.startTime) return this.startValue;
    if (t7 >= this.endTime) return this.endValue;
    const e7 = (t7 - this.startTime) / (this.endTime - this.startTime);
    return this.startValue + e7 * (this.endValue - this.startValue);
  }
  isForeverZero(t7) {
    return 0 === this.startValue && 0 === this.endValue || 0 === this.endValue && t7 >= this.endTime;
  }
};
function e5(t7, e7) {
  return "number" == typeof t7 ? t7 : t7.getValue(e7);
}
function r6(t7) {
  return "number" == typeof t7 ? t7 : t7.endValue;
}
function n4(t7, e7) {
  return "number" == typeof t7 ? 0 === t7 : t7.isForeverZero(e7);
}
function i3(e7, r8, n6, i5) {
  return e7 === n6 ? e7 : new t5(e7, r8, n6, i5);
}
function s9(t7, r8, n6) {
  const s12 = e5(t7, n6), u8 = s12 * r8;
  return 0 === u8 ? 0 : i3(n6, s12, n6 + u8, 0);
}

// node_modules/@arcgis/core/views/2d/engine/flow/BrushFlow.js
var l6 = class extends t3 {
  constructor() {
    super(...arguments), this._visualState = { time: 0, dvsMat3: e(), displayViewMat3: e(), displayOpacity: 1, startTime: 0, endTime: 0 };
  }
  dispose() {
  }
  prepareState(t7) {
    const { context: e7 } = t7;
    e7.setColorMask(true, true, true, true), e7.setStencilFunction(514, 0, 255);
  }
  draw(t7, r8) {
    const { requestRender: l8, allowDelayedRender: n6 } = t7, { items: o7 } = r8, d6 = [];
    for (const m6 of o7) {
      m6.attached || (m6.resources.attach({ context: t7.context, getProgram: (e7, a4) => t7.painter.materialManager.getProgram(e7, a4) }), m6.attached = true);
      const o8 = t7.time / 1e3;
      if (t7.animationsEnabled ? n4(m6.displayOpacity, o8) || o8 > m6.endTime + m6.style.slideoutDuration : 0 === r6(m6.displayOpacity)) m6.attached && (m6.resources.detach(), m6.attached = false);
      else {
        if (d6.push(m6), n6 && !m6.resources.ready && null != l8) return void l8();
        this._visualState.time = t7.animationsEnabled ? o8 : c2, r8.updateMatrix(t7.state, m6.resources.query), this._visualState.dvsMat3 = r8.transforms.displayViewScreenMat3, this._visualState.displayViewMat3 = t7.state.displayViewMat3, this._visualState.displayOpacity = t7.animationsEnabled ? e5(m6.displayOpacity, o8) : r6(m6.displayOpacity), this._visualState.startTime = m6.startTime, this._visualState.endTime = m6.endTime, m6.style.render({ context: t7.context, getProgram: (e7, a4) => t7.painter.materialManager.getProgram(e7, a4) }, this._visualState, m6.resources), m6.style.animated && null != l8 && t7.animationsEnabled && l8();
      }
    }
    r8.items.splice(0, r8.items.length, ...d6);
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/FlowContainer.js
var s10 = class extends s5 {
  constructor() {
    super(...arguments), this.flowStyle = null;
  }
  doRender(e7) {
    super.doRender(e7);
  }
  prepareRenderPasses(r8) {
    const s12 = r8.registerRenderPass({ name: "flow", brushes: [l6], target: () => this.children, drawPhase: 1 });
    return [...super.prepareRenderPasses(r8), s12];
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayObject.js
var m5 = class extends e2 {
  constructor() {
    super(...arguments), this.items = [];
  }
  clear() {
    for (const t7 of this.items) t7.attached && (t7.resources.detach(), t7.attached = false);
    this.items.length = 0;
  }
  setTransform(t7) {
  }
  updateMatrix(o7, a4) {
    const m6 = a4.extent.xmin, n6 = a4.extent.ymax, c5 = [0, 0];
    o7.toScreen(c5, [m6, n6]);
    const x2 = (a4.extent.xmax - a4.extent.xmin) / a4.size[0] / o7.resolution, l8 = s(o7.rotation), { displayViewScreenMat3: p3 } = this.transforms;
    l2(p3, [-1, 1, 0]), f(p3, p3, [2 / (o7.size[0] * o7.pixelRatio), -2 / (o7.size[1] * o7.pixelRatio), 1]), M(p3, p3, [c5[0], c5[1], 0]), h(p3, p3, l8), f(p3, p3, [x2 * o7.pixelRatio, x2 * o7.pixelRatio, 1]);
  }
  _createTransforms() {
    return { displayViewScreenMat3: e() };
  }
};

// node_modules/@arcgis/core/views/2d/engine/flow/ProcessingTimeEstimate.js
var e6 = class {
  constructor() {
    this._skipInitialSamples = 3, this._samples = [0.35, 0.4, 0.45, 0.4, 0.35], this._maxSampleMemory = this._samples.length, this._average = this._computeAverage(), this._standardDeviation = this._computeStandardDeviation();
  }
  get average() {
    return this._average;
  }
  get standardDeviation() {
    return this._standardDeviation;
  }
  addSample(e7) {
    this._skipInitialSamples--, this._skipInitialSamples > 0 || (this._samples.push(e7), this._samples.length > this._maxSampleMemory && this._samples.splice(0, this._samples.length - this._maxSampleMemory), this._average = this._computeAverage(), this._standardDeviation = this._computeStandardDeviation());
  }
  getSafeTime() {
    return this._average + 3 * this._standardDeviation;
  }
  _computeAverage() {
    return this._samples.reduce((e7, t7) => e7 + t7, 0) / this._samples.length;
  }
  _computeStandardDeviation() {
    return Math.sqrt(this._samples.map((e7) => t6(e7 - this._average)).reduce((e7, t7) => e7 + t7, 0) / this._samples.length);
  }
};
function t6(e7) {
  return e7 * e7;
}

// node_modules/@arcgis/core/views/2d/engine/flow/FlowStrategy.js
var f6 = 1.15;
var y2 = 1;
var g2 = class extends b {
  constructor(t7) {
    super(t7), this._flowDisplayObject = new m5(), this._loading = null, this._processingTimeEstimate = new e6();
  }
  initialize() {
    this.flowContainer.addChild(this._flowDisplayObject);
  }
  destroy() {
    this._clear(), this.flowContainer.removeAllChildren();
  }
  get updating() {
    return null != this._loading;
  }
  update(t7) {
    const { flowStyle: e7 } = this.flowContainer;
    if (null == e7) return void this._clear();
    const { extent: o7, rotation: s12, resolution: n6, pixelRatio: a4 } = t7.state, l8 = x(o7, s12);
    l8.expand(f6);
    const u8 = [Math.round((l8.xmax - l8.xmin) / n6), Math.round((l8.ymax - l8.ymin) / n6)], c5 = performance.now() / 1e3, g3 = { extent: l8, size: u8, pixelRatio: a4, time: c5 + this._processingTimeEstimate.getSafeTime() }, _8 = new AbortController(), { items: w2 } = this._flowDisplayObject, b4 = w2.at(-1);
    if (b4 && this._fastUpdate(b4.style, b4.resources.query, e7, g3)) return b4.style = e7, void (this._loading && (this._loading.abortController.abort(), this._loading = null));
    if (this._loading && this._fastUpdate(this._loading.flowStyle, this._loading.query, e7, g3)) return void (this._loading.flowStyle = e7);
    const { canContinue: C4, previousItem: j3 } = this._previousItemPrevious(b4, e7, g3), v2 = e7.load(g3, C4 ? j3.resources : null, _8.signal).then((t8) => {
      const i5 = performance.now() / 1e3, o8 = i5 - c5;
      if (this._processingTimeEstimate.addSample(o8), C4) {
        for (const e8 of w2) e8.endTime = t8.query.time;
        w2.push({ attached: false, startTime: t8.query.time, endTime: t8.query.time + c2, displayOpacity: 1, resources: t8, style: e7 });
      } else {
        for (const t9 of w2) t9.displayOpacity = s9(t9.displayOpacity, y2, i5);
        w2.push({ attached: false, startTime: i5 - l5, endTime: i5 + c2, displayOpacity: i3(i5, 0, i5 + y2, 1), resources: t8, style: e7 });
      }
      this._flowDisplayObject.requestRender(), this._loading = null;
    }, (t8) => {
      d(t8) || n.getLogger(this).error("A resource failed to load.", t8);
    });
    this._loading?.abortController.abort(), this._loading = { abortController: _8, promise: v2, query: g3, flowStyle: e7 };
  }
  _fastUpdate(t7, e7, i5, o7) {
    if (!t7.isCompatible(i5)) return false;
    return !(!e7.extent.equals(o7.extent) || e7.size[0] !== o7.size[0] || e7.size[1] !== o7.size[1] || e7.pixelRatio !== o7.pixelRatio);
  }
  _previousItemPrevious(t7, e7, i5) {
    if (!t7) return { canContinue: false, previousItem: t7 };
    if (!t7.style.supportsContinuation) return { canContinue: false, previousItem: t7 };
    if (!e7.supportsContinuation) return { canContinue: false, previousItem: t7 };
    const o7 = Math.abs(t7.resources.query.extent.width - i5.extent.width) / i5.extent.width, r8 = Math.abs(t7.resources.query.extent.height - i5.extent.height) / i5.extent.height;
    return o7 > 0.1 || r8 > 0.1 ? { canContinue: false, previousItem: t7 } : { canContinue: true, previousItem: t7 };
  }
  _clear() {
    this._flowDisplayObject.clear(), null != this._loading && (this._loading.abortController.abort(), this._loading = null);
  }
};
function x(t7, e7) {
  const i5 = new _({ x: (t7.xmax + t7.xmin) / 2, y: (t7.ymax + t7.ymin) / 2, spatialReference: t7.spatialReference }), r8 = t7.xmax - t7.xmin, s12 = t7.ymax - t7.ymin, n6 = Math.abs(Math.cos(s(e7))), m6 = Math.abs(Math.sin(s(e7))), p3 = n6 * r8 + m6 * s12, u8 = m6 * r8 + n6 * s12, c5 = new z({ xmin: i5.x - p3 / 2, ymin: i5.y - u8 / 2, xmax: i5.x + p3 / 2, ymax: i5.y + u8 / 2, spatialReference: t7.spatialReference });
  return c5.centerAt(i5), c5;
}
__decorate([a()], g2.prototype, "_loading", void 0), __decorate([a()], g2.prototype, "flowContainer", void 0), __decorate([a()], g2.prototype, "updating", null), g2 = __decorate([c("esri.views.2d.engine.flow.FlowStrategy")], g2);

// node_modules/@arcgis/core/views/2d/engine/flow/FlowView2D.js
var p2 = class extends b {
  constructor() {
    super(...arguments), this._loadImagery = (t7, e7, i5, o7, r8) => m(this.layer, t7, e7, i5, o7, r8), this._createFlowMesh = (t7, e7, i5, o7, r8) => this.layer.createFlowMesh({ meshType: t7, flowData: i5, simulationSettings: e7, startInfo: o7 }, { signal: r8 }), this.attached = false, this.type = "flow", this.timeExtent = null, this.redrawOrRefetch = async () => {
      this._updateVisualization();
    };
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    const { layer: t7 } = this, e7 = () => {
      this._loadImagery = (e8, i5, o7, r8, s12) => m(t7, e8, i5, o7, r8, s12), this._updateVisualization();
    };
    "multidimensionalDefinition" in t7 ? this.addHandles(l(() => t7.multidimensionalDefinition, e7)) : this.addHandles([l(() => t7.mosaicRule, e7), l(() => t7.rasterFunction, e7), l(() => t7.definitionExpression, e7)]), this.container = new s10(), this._strategy = new g2({ flowContainer: this.container }), this._updateVisualization();
  }
  detach() {
    this._strategy.destroy(), this.container?.removeAllChildren(), this.container = null, this.removeHandles();
  }
  update(t7) {
    t7.stationary ? this._strategy.update(t7) : this.layerView.requestUpdate();
  }
  hitTest(t7) {
    return new j({ attributes: {}, geometry: t7.clone(), layer: this.layer });
  }
  moveEnd() {
  }
  async doRefresh() {
  }
  _updateVisualization() {
    const t7 = this.layer.renderer;
    if (null == t7 || "flow" !== t7.type) return;
    const e7 = g(t7, { loadImagery: this._loadImagery, createFlowMesh: this._createFlowMesh, timeExtent: this.timeExtent });
    this.container.flowStyle = e7, this.layerView.requestUpdate();
  }
};
__decorate([a()], p2.prototype, "_strategy", void 0), __decorate([a()], p2.prototype, "attached", void 0), __decorate([a()], p2.prototype, "container", void 0), __decorate([a()], p2.prototype, "layer", void 0), __decorate([a()], p2.prototype, "layerView", void 0), __decorate([a()], p2.prototype, "type", void 0), __decorate([a()], p2.prototype, "updating", null), __decorate([a()], p2.prototype, "timeExtent", void 0), p2 = __decorate([c("esri.views.2d.engine.flow.FlowView2D")], p2);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/raster/MagDirShader.js
var b3 = class extends C2 {
};
__decorate([f3(0, X)], b3.prototype, "position", void 0), __decorate([f3(1, X)], b3.prototype, "offset", void 0), __decorate([f3(2, X)], b3.prototype, "vv", void 0);
var R2 = class extends I {
};
var S = class extends w {
};
__decorate([m2(rt)], S.prototype, "dvsMat3", void 0), __decorate([m2(X)], S.prototype, "coordScale", void 0), __decorate([m2(X)], S.prototype, "symbolSize", void 0), __decorate([m2(X)], S.prototype, "symbolPercentRange", void 0), __decorate([m2(X)], S.prototype, "dataRange", void 0), __decorate([m2(C)], S.prototype, "rotation", void 0), __decorate([m2(B.ofType(_4, 48))], S.prototype, "colors", void 0), __decorate([m2(C)], S.prototype, "opacity", void 0);
var G = new C(3.14159265359);
var M2 = class extends P {
  constructor() {
    super(...arguments), this.type = "MagDirShader", this.rotationGeographic = null, this.dataRange = null;
  }
  vertex(t7) {
    const { position: o7, offset: e7, vv: i5 } = t7, { dataRange: r8, rotation: p3, symbolSize: a4, symbolPercentRange: n6, colors: s12, coordScale: l8, dvsMat3: d6 } = this.config;
    let h5, w2 = e7.y.add(p3);
    if (this.rotationGeographic || (w2 = G.multiply(new C(2)).subtract(w2).subtract(G.divide(new C(2)))), this.dataRange) {
      const t8 = se(i5.y.subtract(r8.x).divide(r8.y.subtract(r8.x)), new C(0), new C(1)), o8 = n6.x.add(t8.multiply(n6.y.subtract(n6.x)));
      h5 = se(o8, n6.x, n6.y);
    } else h5 = n6.x.add(n6.y).divide(new C(2));
    const b4 = new X(oe(w2), un(w2)).multiply(e7.x), R4 = o7.add(b4.multiply(h5.multiply(a4))), S2 = s12.get(new W(i5.x));
    return { glPosition: new _4(d6.multiply(new Y(R4.multiply(l8), new C(1))), new C(1)), color: S2 };
  }
  fragment(t7) {
    const o7 = new v();
    return o7.fragColor = t7.color.multiply(this.config.opacity), o7;
  }
};
__decorate([_5], M2.prototype, "rotationGeographic", void 0), __decorate([_5], M2.prototype, "dataRange", void 0), __decorate([m2(S)], M2.prototype, "config", void 0), __decorate([__param(0, l3(b3))], M2.prototype, "vertex", null), __decorate([__param(0, l3(R2))], M2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/raster/ScalarShader.js
var R3 = class extends C2 {
};
__decorate([f3(0, X)], R3.prototype, "position", void 0), __decorate([f3(1, X)], R3.prototype, "offset", void 0), __decorate([f3(2, X)], R3.prototype, "vv", void 0);
var C3 = class extends I {
};
var j2 = class extends w {
};
__decorate([m2(rt)], j2.prototype, "dvsMat3", void 0), __decorate([m2(X)], j2.prototype, "coordScale", void 0), __decorate([m2(X)], j2.prototype, "symbolSize", void 0), __decorate([m2(X)], j2.prototype, "symbolPercentRange", void 0), __decorate([m2(X)], j2.prototype, "dataRange", void 0), __decorate([m2(C)], j2.prototype, "opacity", void 0);
var M3 = new _4(new C(0.2), new C(0.2), new C(0.2), new C(1));
var P2 = new C(0.02);
var z2 = new C(0.25);
var G2 = new C(0.42);
var k = new C(0.15);
var q = class extends P {
  constructor() {
    super(...arguments), this.type = "ScalarShader", this.innerCircle = null, this.dataRange = null;
  }
  vertex(t7) {
    const { position: e7, offset: o7, vv: n6 } = t7, { dataRange: i5, symbolSize: d6, symbolPercentRange: r8, coordScale: p3, dvsMat3: l8 } = this.config;
    let a4;
    if (i5) {
      const t8 = se(n6.y.subtract(i5.x).divide(i5.y.subtract(i5.x)), new C(0), new C(1)), e8 = r8.y.subtract(r8.x).multiply(t8).add(r8.x);
      a4 = se(e8, r8.x, r8.y);
    } else a4 = r8.x.add(r8.y).divide(new C(2));
    const s12 = d6.multiply(a4), w2 = e7.add(o7.multiply(s12));
    return { glPosition: new _4(l8.multiply(new Y(w2.multiply(p3), new C(1))), new C(1)), pos: o7 };
  }
  fragment(t7) {
    const e7 = new v(), { opacity: o7 } = this.config, { pos: i5 } = t7, d6 = je(i5);
    let r8, p3 = on(G2, G2.add(P2), d6);
    return p3 = p3.multiply(E2(on(G2.add(P2), G2.add(new C(0.1).add(P2)), d6))), this.innerCircle ? (r8 = on(z2, z2.add(P2), d6), r8 = r8.multiply(E2(on(z2.add(P2), z2.add(new C(0.1).add(P2)), d6)))) : r8 = zt(Yt(Qt(i5.x), k), new C(1), new C(0)).multiply(zt(Yt(Qt(i5.y), k), new C(1), new C(0))), e7.fragColor = M3.multiply(o7).multiply(r8.add(p3)), e7;
  }
};
__decorate([_5], q.prototype, "innerCircle", void 0), __decorate([_5], q.prototype, "dataRange", void 0), __decorate([m2(j2)], q.prototype, "config", void 0), __decorate([__param(0, l3(R3))], q.prototype, "vertex", null), __decorate([__param(0, l3(C3))], q.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/raster/VectorFieldTechnique.js
var r7 = 48;
var s11 = [0.27058823529411763, 0.4588235294117647, 0.7098039215686275, 1, 0.396078431372549, 0.5372549019607843, 0.7215686274509804, 1, 0.5176470588235295, 0.6196078431372549, 0.7294117647058823, 1, 0.6352941176470588, 0.7058823529411765, 0.7411764705882353, 1, 0.7529411764705882, 0.8, 0.7450980392156863, 1, 0.8705882352941177, 0.8901960784313725, 0.7490196078431373, 1, 1, 1, 0.7490196078431373, 1, 1, 0.8627450980392157, 0.6313725490196078, 1, 0.9803921568627451, 0.7254901960784313, 0.5176470588235295, 1, 0.9607843137254902, 0.596078431372549, 0.4117647058823529, 1, 0.9294117647058824, 0.4588235294117647, 0.3176470588235294, 1, 0.9098039215686274, 0.08235294117647059, 0.08235294117647059, 1];
var o6 = [0, 92 / 255, 230 / 255, 1];
var i4 = { beaufort_ft: s11, beaufort_m: s11, beaufort_km: s11, beaufort_mi: s11, beaufort_kn: [0.1568627450980392, 0.5725490196078431, 0.7803921568627451, 1, 0.34901960784313724, 0.6352941176470588, 0.7294117647058823, 1, 0.5058823529411764, 0.7019607843137254, 0.6705882352941176, 1, 0.6274509803921569, 0.7607843137254902, 0.6078431372549019, 1, 0.7490196078431373, 0.8313725490196079, 0.5411764705882353, 1, 0.8549019607843137, 0.9019607843137255, 0.4666666666666667, 1, 0.9803921568627451, 0.9803921568627451, 0.39215686274509803, 1, 0.9882352941176471, 0.8352941176470589, 0.3254901960784314, 1, 0.9882352941176471, 0.7019607843137254, 0.4, 1, 0.9803921568627451, 0.5529411764705883, 0.20392156862745098, 1, 0.9686274509803922, 0.43137254901960786, 0.16470588235294117, 1, 0.9411764705882353, 0.2784313725490196, 0.11372549019607843, 1], classified_arrow: [0.2196078431372549, 0.6588235294117647, 0, 1, 0.5450980392156862, 1.2117647058823529, 0, 1, 1, 1, 0, 1, 1, 0.5019607843137255, 0, 1, 1, 0, 0, 1], ocean_current_m: [0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1], ocean_current_kn: [0, 0, 0, 1, 0, 0.1450980392156863, 0.39215686274509803, 1, 0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.592156862745098, 0, 0.39215686274509803, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.6941176470588235, 0.3058823529411765, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.7019607843137254, 0.20392156862745098, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1], simple_scalar: o6, single_arrow: o6, wind_speed: [0, 0, 0, 1] };
var n5 = [0, 20];
var l7 = class extends s4 {
  constructor() {
    super(...arguments), this.type = 3, this.shaders = { magDir: new M2(), scalar: new q() }, this.drawPhase = 1;
  }
  shutdown() {
  }
  render(e7, t7) {
    const { painter: a4, timeline: r8 } = e7, { tiles: s12, displayLevel: o7 } = t7;
    a4.setPipelineState({ depth: false, color: { write: [true, true, true, true], blendMode: "composite" }, stencil: { write: { mask: 0 }, test: { compare: 514, op: { fail: 7680, zFail: 7680, zPass: 7681 }, mask: 255 } } });
    for (const i5 of s12) if (null != i5.source && 0 !== i5.source.validPixelCount) {
      if (r8.begin("Vector field"), i5.updateVectorFieldMesh(e7), "scalar" === e7.renderPass) {
        const t8 = i5.meshes.scalar;
        t8 && this._drawScalars(e7, i5, t8, o7);
      } else {
        const t8 = i5.meshes.magdir;
        t8 && this._drawTriangles(e7, i5, t8, o7);
      }
      r8.end("Vector field");
    }
  }
  _drawTriangles(e7, t7, a4, s12) {
    const { context: o7, painter: l8, requestRender: c5, allowDelayedRender: d6 } = e7, { symbolizerParameters: m6 } = t7, u8 = !!m6.dataRange, f8 = "geographic" === m6.rotationType;
    if (d6 && null != c5) return void c5();
    const { coordScale: h5, opacity: p3, transforms: y3 } = t7, { style: g3, dataRange: b4, symbolPercentRange: w2, rotation: S2 } = m6, _8 = i4[g3].concat(Array(r7 - i4[g3].length).fill(0)), R4 = { shader: this.shaders.magDir, uniforms: { config: { dvsMat3: y3.displayViewScreenMat3, coordScale: h5, opacity: p3, colors: _8, dataRange: b4 || n5, rotation: S2, symbolPercentRange: w2, symbolSize: this._getSymbolSize(e7, t7, s12) } }, defines: { rotationGeographic: f8, dataRange: u8 }, optionalAttributes: null, useComputeBuffer: false };
    l8.submitDrawMeshUntyped(o7, R4, a4, { stencilRef: t7.stencilRef });
  }
  _drawScalars(e7, t7, a4, r8) {
    const { context: s12, painter: o7, requestRender: i5, allowDelayedRender: l8 } = e7, { symbolizerParameters: c5 } = t7, d6 = "wind_speed" === c5.style, m6 = !!c5.dataRange;
    if (l8 && null != i5) return void i5();
    const { coordScale: u8, opacity: f8, transforms: h5 } = t7, { dataRange: p3, symbolPercentRange: y3 } = c5, g3 = { shader: this.shaders.scalar, uniforms: { config: { dvsMat3: h5.displayViewScreenMat3, coordScale: u8, opacity: f8, dataRange: p3 || n5, symbolPercentRange: y3, symbolSize: this._getSymbolSize(e7, t7, r8) } }, defines: { innerCircle: d6, dataRange: m6 }, optionalAttributes: null, useComputeBuffer: false };
    o7.submitDrawMeshUntyped(s12, g3, a4, { stencilRef: t7.stencilRef });
  }
  _getSymbolSize(e7, t7, a4) {
    const r8 = t7.key ? 2 ** (a4 - t7.key.level) : t7.resolution / e7.state.resolution, { symbolTileSize: s12 } = t7.symbolizerParameters;
    return [s12 / (Math.round((t7.width - t7.offset[0]) / s12) * s12) / r8, s12 / (Math.round((t7.height - t7.offset[1]) / s12) * s12) / r8];
  }
};

// node_modules/@arcgis/core/views/2d/engine/imagery/RasterVFDisplayObject.js
var f7 = class extends e2 {
  constructor(e7 = null) {
    super(), this._source = null, this._symbolizerParameters = null, this._meshesInvalidated = true, this.coordScale = [1, 1], this.height = null, this.key = null, this.offset = null, this.stencilRef = 0, this.resolution = null, this.pixelRatio = 1, this.x = 0, this.y = 0, this.rotation = 0, this.rawPixelData = null, this.meshes = null, this.width = null, this.source = e7;
  }
  destroy() {
    super.destroy(), null != this.meshes && (this.meshes.magdir?.destroy(), this.meshes.scalar?.destroy(), this.meshes = null);
  }
  get symbolizerParameters() {
    return this._symbolizerParameters;
  }
  set symbolizerParameters(e7) {
    JSON.stringify(this._symbolizerParameters) !== JSON.stringify(e7) && (this._symbolizerParameters = e7, this.invalidateMeshes());
  }
  get source() {
    return this._source;
  }
  set source(e7) {
    this._source = e7, this.invalidateMeshes();
  }
  invalidateMeshes() {
    this._meshesInvalidated || null == this.meshes || (this.meshes.magdir?.destroy(), this.meshes.scalar?.destroy(), this.meshes = null, this._meshesInvalidated = true, this.requestRender());
  }
  updateVectorFieldMesh(e7) {
    if (this._meshesInvalidated) {
      if (this._meshesInvalidated = false, null != this.source && null == this.meshes) {
        const { style: s12 } = this.symbolizerParameters;
        switch (s12) {
          case "beaufort_ft":
          case "beaufort_km":
          case "beaufort_kn":
          case "beaufort_m":
          case "beaufort_mi":
          case "classified_arrow":
          case "ocean_current_kn":
          case "ocean_current_m":
          case "single_arrow":
            {
              const s13 = U(this.source, this.symbolizerParameters), t7 = this._createVectorFieldMesh(e7, s13);
              this.meshes = { magdir: t7 };
            }
            break;
          case "simple_scalar":
            {
              const s13 = _3(this.source, this.symbolizerParameters), t7 = this._createVectorFieldMesh(e7, s13);
              this.meshes = { scalar: t7 };
            }
            break;
          case "wind_speed": {
            const s13 = U(this.source, this.symbolizerParameters), t7 = this._createVectorFieldMesh(e7, s13), i5 = _3(this.source, this.symbolizerParameters), r8 = this._createVectorFieldMesh(e7, i5);
            this.meshes = { scalar: r8, magdir: t7 };
          }
        }
      }
      this.ready(), this.requestRender();
    }
  }
  _createTransforms() {
    return { displayViewScreenMat3: e() };
  }
  setTransform(a4) {
    const o7 = o(this.transforms.displayViewScreenMat3), [l8, n6] = a4.toScreenNoRotation([0, 0], [this.x, this.y]), m6 = this.resolution / this.pixelRatio / a4.resolution, c5 = m6 * this.width, d6 = m6 * this.height, u8 = Math.PI * this.rotation / 180;
    M(o7, o7, r2(l8, n6)), M(o7, o7, r2(c5 / 2, d6 / 2)), h(o7, o7, -u8), M(o7, o7, r2(-c5 / 2, -d6 / 2)), b2(o7, o7, r2(c5, d6)), i(this.transforms.displayViewScreenMat3, a4.displayViewMat3, o7);
  }
  onAttach() {
    this.invalidateMeshes();
  }
  onDetach() {
    this.invalidateMeshes();
  }
  _createVectorFieldMesh(e7, s12) {
    const { vertexData: t7, indexData: i5 } = s12, r8 = { vertex: { geometry: { data: t7, layout: [new t2("position", 2, R.FLOAT, 0, 24), new t2("offset", 2, R.FLOAT, 8, 24), new t2("vv", 2, R.FLOAT, 16, 24)] } }, index: { indices: { data: i5 } }, groups: [{ index: "indices", primitive: _2.TRIANGLES }], parts: [{ group: 0, start: 0, count: i5.length }] };
    return new o3(e7.context, r8);
  }
};

export {
  p2 as p,
  l7 as l,
  f7 as f
};
//# sourceMappingURL=chunk-4KBJDA2D.js.map
