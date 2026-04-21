import {
  t
} from "./chunk-VQOLBZYG.js";
import {
  N,
  R
} from "./chunk-IODIHRP7.js";
import {
  h
} from "./chunk-TXF5FFQH.js";
import {
  e
} from "./chunk-SUVDIL6O.js";
import {
  l
} from "./chunk-6CYBR6FP.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  l2
} from "./chunk-7ELXYOAW.js";
import {
  u2 as u
} from "./chunk-2KP24SU5.js";
import {
  has,
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/animations/instructions.js
var t2 = class {
  generateSource(t4) {
    const o5 = [];
    for (let a3 = 1; a3 < this.length; a3++) o5.push(`vec4 atom${a3} = texture(${t4.animationTexture}, (pointer + 0.5) / size);`), o5.push("pointer.x += 1.0;");
    for (let a3 = 0; a3 < this.ins; a3++) o5.push("top--;"), o5.push(`vec4 in${this.ins - a3 - 1} = stack[top];`);
    for (let a3 = 0; a3 < this.outs; a3++) o5.push(`vec4 out${a3};`);
    const { microcode: e5 } = this;
    for (const a3 of e5) o5.push(a3);
    for (let a3 = 0; a3 < this.outs; a3++) o5.push(`stack[top] = out${a3};`), o5.push("top++;"), o5.push(`if (top >= ${d}) { top = ${d - 1}; }`);
    return o5;
  }
};
var o = 128;
var e2 = class extends t2 {
  constructor() {
    super(...arguments), this.opcode = ++o, this.length = 1, this.ins = 0, this.outs = 0, this.microcode = ["break;"];
  }
  encode() {
    return [[this.opcode, 0, 0, 0]];
  }
};
var a2 = class extends t2 {
  constructor() {
    super(...arguments), this.opcode = ++o, this.length = 1, this.ins = 0, this.outs = 1, this.microcode = ["out0 = vec4(atom0.y, atom0.y, atom0.y, atom0.y);"];
  }
  encode(t4) {
    return [[this.opcode, t4, 0, 0]];
  }
};
var i = class extends t2 {
  constructor() {
    super(...arguments), this.opcode = ++o, this.length = 1, this.ins = 0, this.outs = 1, this.microcode = ["out0 = vec4(atom0.yzw, 0.0);"];
  }
  encode(t4) {
    return [[this.opcode, t4[0] || 0, t4[1] || 0, t4[2] || 0]];
  }
};
var n2 = class extends t2 {
  constructor() {
    super(...arguments), this.opcode = ++o, this.length = 2, this.ins = 0, this.outs = 1, this.microcode = ["out0 = atom1;"];
  }
  encode(t4) {
    return [[this.opcode, 0, 0, 0], t4];
  }
};
function r2(t4) {
  return [`float duration = clamp(${t4.duration}, 0.05, 3600.0);`, `float startTimeOffset = ${t4.startTimeOffset};`, `float repeatDelay = ${t4.repeatDelay};`, `float timeOriginSelector = ${t4.timeOriginSelector};`, `float repeatType = ${t4.repeatType};`, `float easing = ${t4.easing};`, `float playAnimation = ${t4.playAnimation} * (1.0 - step(0.0, -${t4.duration}));`, `float reverseAnimation = ${t4.reverseAnimation};`, "float time = globalTime - (timeOriginSelector == 1.0 ? localTimeOrigin : 0.0);", "time *= playAnimation;", "time *= 1.0 - reverseAnimation * 2.0;", "float period = duration + repeatDelay;", "time += reverseAnimation == 1.0 ? (period - startTimeOffset - 0.001) : startTimeOffset + 0.001;", "float omega = time / period;", "float oi = floor(omega);", "omega = repeatType == 1.0 || repeatType == 3.0 ? omega - oi : omega;", "float of = omega * period;", "of = (clamp(of, reverseAnimation * repeatDelay, period - (1.0 - reverseAnimation) * repeatDelay) - reverseAnimation * repeatDelay) / duration;", "of = easing == 2.0 ? pow(of, 3.0) : of;", "of = easing == 3.0 ? 1.0 - pow(1.0 - of, 3.0) : of;", "of = easing == 4.0 ? of < 0.5 ? 4.0 * pow(of, 3.0) : 1.0 - pow(-2.0 * of + 2.0, 3.0) / 2.0 : of;", "bool oscillate = repeatType == 3.0 && mod(oi, 2.0) == 1.0;", `${t4.out} = oscillate ? 1.0 - of : of;`];
}
var s = { Linear: 1, EaseIn: 2, EaseOut: 3, EaseInOut: 4 };
var l3 = { Loop: 1, None: 2, Oscillate: 3 };
var m = { Local: 1, Global: 2 };
function c(t4) {
  const o5 = s[t4.easing], e5 = l3[t4.repeatType], a3 = m[t4.timeOriginSelector];
  return [[t4.duration, t4.startTimeOffset, t4.repeatDelay, a3], [e5, o5, t4.playAnimation, t4.reverseAnimation]];
}
var f = class extends t2 {
  constructor() {
    super(...arguments), this.opcode = ++o, this.length = 10, this.ins = 1, this.outs = 1, this.microcode = ["vec2 fromTranslation = atom1.xy;", "vec2 toTranslation = atom1.zw;", "float fromRotation = atom2.x;", "float toRotation = atom2.y;", "float fromScale = atom2.z;", "float toScale = atom2.w;", "bool relativeTranslation = atom9.x == 1.0;", "bool absoluteScale = atom9.y == 1.0;", "vec2 translationMultiplier = relativeTranslation ? pixelDimensions : vec2(1.0, 1.0);", "float scaleDivisor = absoluteScale ? pixelDimensions.y : 1.0;", "float fTranslation;", "{", ...r2({ duration: "atom3.x", startTimeOffset: "atom3.y", repeatDelay: "atom3.z", timeOriginSelector: "atom3.w", repeatType: "atom4.x", easing: "atom4.y", playAnimation: "atom4.z", reverseAnimation: "atom4.w", out: "fTranslation" }), "}", "float fRotation;", "{", ...r2({ duration: "atom5.x", startTimeOffset: "atom5.y", repeatDelay: "atom5.z", timeOriginSelector: "atom5.w", repeatType: "atom6.x", easing: "atom6.y", playAnimation: "atom6.z", reverseAnimation: "atom6.w", out: "fRotation" }), "}", "float fScale;", "{", ...r2({ duration: "atom7.x", startTimeOffset: "atom7.y", repeatDelay: "atom7.z", timeOriginSelector: "atom7.w", repeatType: "atom8.x", easing: "atom8.y", playAnimation: "atom8.z", reverseAnimation: "atom8.w", out: "fScale" }), "}", "vec2 aTranslation = mix(fromTranslation, toTranslation, fTranslation);", "float aRotation = mix(fromRotation, toRotation, fRotation);", "float aScale = mix(fromScale, toScale, fScale);", "vec2 pTranslation = in0.xy;", "float pRotation = in0.z;", "float pScale = in0.w;", "aTranslation *= translationMultiplier;", "aScale /= scaleDivisor;", "float rotation = pRotation + aRotation;", "float scale = pScale * aScale;", "float sin1 = sin(pRotation);", "float cos1 = cos(pRotation);", "float s1 = pScale;", "float x1 = pTranslation.x;", "float y1 = pTranslation.y;", "float x2 = aTranslation.x;", "float y2 = aTranslation.y;", "\n    vec2 translation = vec2(\n      cos1 * s1 * x2 - sin1 * s1 * y2 + x1,\n      sin1 * s1 * x2 + cos1 * s1 * y2 + y1\n    );\n    ", "out0 = vec4(translation, rotation, scale);"];
  }
  encode(t4) {
    return [[this.opcode, 0, 0, 0], [t4.translation.from[0], t4.translation.from[1], t4.translation.to[0], t4.translation.to[1]], [t4.rotation.from, t4.rotation.to, t4.scale.from, t4.scale.to], ...c(t4.translation.timing), ...c(t4.rotation.timing), ...c(t4.scale.timing), [t4.relativeTranslation ? 1 : 0, t4.absoluteScale ? 1 : 0, 0, 0]];
  }
};
var p = class extends t2 {
  constructor() {
    super(...arguments), this.opcode = ++o, this.length = 7, this.ins = 1, this.outs = 1, this.microcode = ["float fromOpacity = atom0.y;", "float toOpacity = atom0.z;", "vec4 fromColor = atom1;", "vec4 toColor = atom2;", "float fColor;", "{", ...r2({ duration: "atom3.x", startTimeOffset: "atom3.y", repeatDelay: "atom3.z", timeOriginSelector: "atom3.w", repeatType: "atom4.x", easing: "atom4.y", playAnimation: "atom4.z", reverseAnimation: "atom4.w", out: "fColor" }), "}", "float fOpacity;", "{", ...r2({ duration: "atom5.x", startTimeOffset: "atom5.y", repeatDelay: "atom5.z", timeOriginSelector: "atom5.w", repeatType: "atom6.x", easing: "atom6.y", playAnimation: "atom6.z", reverseAnimation: "atom6.w", out: "fOpacity" }), "}", "vec4 aColor = mix(fromColor, toColor, fColor);", "aColor.a *= mix(fromOpacity, toOpacity, fOpacity);", "vec4 pColor = in0;", "out0 = aColor * pColor;"];
  }
  encode(t4) {
    return [[this.opcode, t4.opacity.from, t4.opacity.to, 0], [t4.color.from[0], t4.color.from[1], t4.color.from[2], t4.color.from[3]], [t4.color.to[0], t4.color.to[1], t4.color.to[2], t4.color.to[3]], ...c(t4.color.timing), ...c(t4.opacity.timing)];
  }
};
var u2 = class extends t2 {
  constructor() {
    super(...arguments), this.opcode = ++o, this.length = 4, this.ins = 1, this.outs = 1, this.microcode = ["float fromShift = atom0.y;", "float toShift = atom0.z;", "float duration = atom1.x;", "bool multiplyByLineLength = atom3.x == 1.0;", "float fShift;", "{", ...r2({ duration: "duration", startTimeOffset: "atom1.y", repeatDelay: "atom1.z", timeOriginSelector: "atom1.w", repeatType: "atom2.x", easing: "atom2.y", playAnimation: "atom2.z", reverseAnimation: "atom2.w", out: "fShift" }), "}", "toShift *= multiplyByLineLength ? lineLength : 1.0;", "float aShift = mix(fromShift, toShift, fShift);", "vec4 pShift = in0;", "out0 = mod(aShift + pShift, lineLength);"];
  }
  encode(t4) {
    return [[this.opcode, t4.shift.from, t4.shift.to, 0], ...c(t4.shift.timing), [t4.multiplyByLineLength ? 1 : 0, 0, 0, 0]];
  }
};
var h2 = { scalar: new a2(), vector3: new i(), vector4: new n2(), animatedTransform: new f(), animatedColor: new p(), animatedShift: new u2(), ret: new e2() };
var y = 40;
var d = 4;
function g(t4) {
  const o5 = [];
  o5.push(`float globalTime = ${t4.globalTime};`), o5.push(`float localTimeOrigin = ${t4.localTimeOrigin};`), o5.push(`float lineLength = ${t4.lineLength};`), o5.push(`vec2 pointer = ${t4.animationPointer};`), o5.push(`vec2 size = ${t4.animationTextureSize};`), o5.push("int top = 0;"), o5.push(`vec4 stack[${d}];`), o5.push(`for (int counter = 0; counter < ${y}; counter++) {`), o5.push(`vec4 atom0 = texture(${t4.animationTexture}, (pointer + 0.5) / size);`), o5.push("pointer.x += 1.0;"), o5.push(`vec2 pixelDimensions = ${t4.pixelDimensions};`), o5.push("if (false) {");
  for (const e5 in h2) {
    const a3 = h2[e5];
    o5.push(`} else if (int(atom0.x) == ${a3.opcode}) {`);
    for (const e6 of a3.generateSource(t4)) o5.push(e6);
  }
  return o5.push("} // End if-else."), o5.push("} // End for."), o5.push(`${t4.out} = top > 0 ? stack[top - 1] : vec4(0.0);`), o5.join("\n");
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/markerConstants.js
var o2 = { bitset: { isSDF: 0, isMapAligned: 1, scaleSymbolsProportionally: 2, overrideOutlineColor: 3, colorLocked: 4, isStroke: 5 } };

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/gradientFillConstants.js
var r3 = { linear: 0, rectangular: 1, circular: 2 };
var e3 = { isAbsolute: 0, isDiscrete: 1 };

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/gradientStrokeConstants.js
var e4 = { isAlongLine: 0, isAbsoluteSize: 1, isDiscrete: 2 };

// node_modules/@arcgis/core/views/2d/layers/support/UpdateTracking2D.js
var n3 = class extends b {
  constructor(t4) {
    super(t4), this.debugName = "", this._updatingHandles = new h(), this._idToUpdatingState = new e();
  }
  destroy() {
    this._updatingHandles = u(this._updatingHandles), this._idToUpdatingState.clear();
  }
  get updating() {
    const t4 = !this.destroyed && (this._updatingHandles?.updating || Array.from(this._idToUpdatingState.values()).some((t5) => t5));
    if (has("esri-2d-log-updating")) {
      const s4 = Array.from(this._idToUpdatingState.entries()).map(([t5, s5]) => `-> ${t5}: ${s5}`).join("\n");
      console.log(`${this.debugName}: Updating: ${t4}
-> Handles: ${this._updatingHandles.updating}
${s4}`);
    }
    return t4;
  }
  addUpdateTracking(t4, s4) {
    const e5 = l(() => s4.updating, (s5) => this._idToUpdatingState.set(t4, s5), { sync: true });
    this.addHandles(e5);
  }
  addPromise(t4) {
    return this._updatingHandles.addPromise(t4);
  }
};
__decorate([a({ constructOnly: true })], n3.prototype, "debugName", void 0), __decorate([a({ readOnly: true })], n3.prototype, "updating", null), n3 = __decorate([l2("esri.views.2d.layers.support.UpdateTracking2D")], n3);

// node_modules/@arcgis/core/views/2d/engine/webgl/DisplayId.js
var n4 = 8388607;
var t3 = 8388608;
var o3 = (t4) => t4 & n4;
function r4(n5, o5) {
  return ((o5 ? t3 : 0) | n5) >>> 0;
}

// node_modules/@arcgis/core/views/webgl/getDataTypeBytes.js
function s2(s4) {
  switch (s4) {
    case R.BYTE:
    case R.UNSIGNED_BYTE:
      return 1;
    case R.SHORT:
    case R.UNSIGNED_SHORT:
    case R.HALF_FLOAT:
      return 2;
    case R.FLOAT:
    case R.INT:
    case R.UNSIGNED_INT:
      return 4;
  }
}

// node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js
var s3 = () => n.getLogger("esri.views.2d.engine.webgl.Utils");
function o4(t4) {
  switch (t4) {
    case N.UNSIGNED_BYTE:
      return 1;
    case N.UNSIGNED_SHORT_4_4_4_4:
      return 2;
    case N.FLOAT:
      return 4;
    default:
      return void s3().error(new r("webgl-utils", `Unable to handle type ${t4}`));
  }
}
function i2(t4) {
  switch (t4) {
    case N.UNSIGNED_BYTE:
      return Uint8Array;
    case N.UNSIGNED_SHORT_4_4_4_4:
      return Uint16Array;
    case N.FLOAT:
      return Float32Array;
    default:
      return void s3().error(new r("webgl-utils", `Unable to handle type ${t4}`));
  }
}
function c2(e5) {
  let t4 = 0;
  const r5 = e5.map((e6) => {
    const r6 = new t(e6.name, e6.count, e6.type, t4, 0, e6.normalized || false);
    return t4 += e6.count * s2(e6.type), r6;
  });
  return r5.forEach((e6) => e6.stride = t4), r5;
}
var l4 = (e5) => {
  const t4 = /* @__PURE__ */ new Map();
  for (const r5 of e5) t4.set(r5.name, r5.location);
  return t4;
};
var m2 = /* @__PURE__ */ new Map();
var $ = (e5, t4) => {
  if (!m2.has(e5)) {
    const r5 = { bufferLayout: c2(t4), attributes: l4(t4) };
    m2.set(e5, r5);
  }
  return m2.get(e5);
};
var f2 = (e5) => e5.includes("data:image/svg+xml");
function d2(e5) {
  const t4 = [];
  for (let r5 = 0; r5 < e5.length; r5++) t4.push(e5.charCodeAt(r5));
  return t4;
}
function p2(e5) {
  if (null == e5) return "";
  const { type: t4 } = e5;
  switch (t4) {
    case "CIMMarkerPlacementAlongLineRandomSize":
      return `${t4}-${e5.seed}-${e5.randomization}`;
    case "CIMMarkerPlacementAlongLineVariableSize":
      return `${t4}-${e5.maxRandomOffset}-${e5.numberOfSizes}-${e5.seed}-${e5.variationMethod}`;
    case "CIMMarkerPlacementAtExtremities":
      return `${t4}-${e5.extremityPlacement}-${e5.offsetAlongLine}`;
    case "CIMMarkerPlacementAtRatioPositions":
      return `${t4}-${e5.beginPosition}-${e5.endPosition}-${e5.flipFirst}-${JSON.stringify(e5.positionArray)}`;
    case "CIMMarkerPlacementAtMeasuredUnits":
      return `${t4}-${e5.interval}-${e5.skipMarkerRate}-${e5.placeAtExtremities}`;
    case "CIMMarkerPlacementInsidePolygon":
      return `${t4}-${e5.stepX}-${e5.stepY}-${e5.randomness}-${e5.gridType}-${e5.seed}-${e5.shiftOddRows}`;
    case "CIMMarkerPlacementOnLine":
      return `${t4}-${e5.relativeTo}-${e5.startPointOffset}`;
    case "CIMMarkerPlacementOnVertices":
      return `${t4}-${e5.placeOnControlPoints}-${e5.placeOnEndPoints}-${e5.placeOnRegularVertices}`;
    case "CIMMarkerPlacementPolygonCenter":
      return `${t4}-${e5.method}`;
    default:
      return `${t4}`;
  }
}

export {
  o2 as o,
  h2 as h,
  g,
  r3 as r,
  e3 as e,
  e4 as e2,
  n4 as n,
  o3 as o2,
  r4 as r2,
  o4 as o3,
  i2 as i,
  $,
  f2 as f,
  d2 as d,
  p2 as p,
  n3 as n2
};
//# sourceMappingURL=chunk-NSIDYXSA.js.map
