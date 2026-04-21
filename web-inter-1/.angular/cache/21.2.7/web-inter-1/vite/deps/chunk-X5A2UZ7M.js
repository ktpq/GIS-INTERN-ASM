import {
  l
} from "./chunk-7ZFYLJ6O.js";
import {
  U
} from "./chunk-VHQJAPCR.js";
import {
  a as a2,
  n
} from "./chunk-CV6NMUZC.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  o
} from "./chunk-BVHAZAH7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/orientedImagery/core/CameraOrientation.js
var s = class extends b {
  set horizontalWKID(t) {
    t ? U({ wkid: +t }) ? this._set("horizontalWKID", +t) : this._set("horizontalWKID", t) : this._set("horizontalWKID", null);
  }
  set verticalWKID(t) {
    t ? this._set("verticalWKID", isFinite(t) && U({ wkid: +t }) ? +t : null) : this._set("verticalWKID", null);
  }
  get isAdvanced() {
    const { affineTransformations: t, focalLength: o2, principalOffsetPoint: e, radialDistortionCoefficients: i2, tangentialDistortionCoefficients: r } = this;
    return t?.length > 1 && !Number.isNaN(o2) && e?.length > 1 && i2?.length > 1 && r?.length > 1;
  }
};
__decorate([a({ json: { write: true } })], s.prototype, "affineTransformations", void 0), __decorate([a({ json: { write: true } })], s.prototype, "focalLength", void 0), __decorate([a({ json: { write: true } })], s.prototype, "principalOffsetPoint", void 0), __decorate([a({ json: { write: true } })], s.prototype, "radialDistortionCoefficients", void 0), __decorate([a({ json: { write: true } })], s.prototype, "tangentialDistortionCoefficients", void 0), __decorate([a({ json: { write: true } })], s.prototype, "horizontalWKID", null), __decorate([a({ json: { write: true } })], s.prototype, "verticalWKID", null), __decorate([a({ json: { write: true } })], s.prototype, "x", void 0), __decorate([a({ json: { write: true } })], s.prototype, "y", void 0), __decorate([a({ json: { write: true } })], s.prototype, "z", void 0), __decorate([a({ json: { write: true } })], s.prototype, "type", void 0), s = __decorate([c("esri.layers.orientedImagery.core.CameraOrientation")], s);
var n2 = s;

// node_modules/@arcgis/core/layers/orientedImagery/core/CameraOrientationHPR.js
var s2 = class extends l(a2(n2)) {
  constructor() {
    super(...arguments), this.type = 1;
  }
  toString() {
    const { type: o2, horizontalWKID: t, verticalWKID: e, x: r, y: i2, z: p3, heading: s7, pitch: n7, roll: a4, affineTransformations: f2, focalLength: y2, principalOffsetPoint: c3, radialDistortionCoefficients: m2, tangentialDistortionCoefficients: u2 } = this, d2 = [o2, t, e, r, i2, p3, s7, n7, a4];
    return this.isAdvanced && (f2?.forEach((o3) => d2.push(o3)), d2.push(y2), c3?.forEach((o3) => d2.push(o3)), m2?.forEach((o3) => d2.push(o3)), u2?.forEach((o3) => d2.push(o3))), d2.map((o3) => Number.isNaN(o3) ? "" : o3).join("|");
  }
};
__decorate([a({ json: { write: true } })], s2.prototype, "type", void 0), __decorate([a({ type: [Number], json: { write: true } })], s2.prototype, "affineTransformations", void 0), __decorate([a({ type: Number, json: { write: true } })], s2.prototype, "focalLength", void 0), __decorate([a({ type: [Number], json: { write: true } })], s2.prototype, "principalOffsetPoint", void 0), __decorate([a({ type: [Number], json: { write: true } })], s2.prototype, "radialDistortionCoefficients", void 0), __decorate([a({ type: [Number], json: { write: true } })], s2.prototype, "tangentialDistortionCoefficients", void 0), __decorate([a({ type: Number, json: { write: true } })], s2.prototype, "heading", void 0), __decorate([a({ type: Number, json: { write: true } })], s2.prototype, "pitch", void 0), __decorate([a({ type: Number, json: { write: true } })], s2.prototype, "roll", void 0), __decorate([a({ type: Number, json: { write: true } })], s2.prototype, "x", void 0), __decorate([a({ type: Number, json: { write: true } })], s2.prototype, "y", void 0), __decorate([a({ type: Number, json: { write: true } })], s2.prototype, "z", void 0), s2 = __decorate([c("esri.layers.orientedImagery.core.CameraOrientationHPR")], s2);
var n3 = s2;

// node_modules/@arcgis/core/layers/orientedImagery/core/CameraOrientationLTP.js
var s3 = class extends l(a2(n2)) {
  constructor() {
    super(...arguments), this.type = 4;
  }
  toString() {
    const { type: t, latitude: e, longitude: o2, ellipsoidRadius: r, squaredEccentricity: i2, properties: p3 } = this, s7 = `${p3}`.split("|");
    return s7.splice(1, 1), `${t}|${e}|${o2}|${r}|${i2}|${s7.join("|")}`;
  }
};
__decorate([a({ json: { write: true } })], s3.prototype, "type", void 0), __decorate([a({ json: { write: true }, type: Number })], s3.prototype, "latitude", void 0), __decorate([a({ json: { write: true }, type: Number })], s3.prototype, "longitude", void 0), __decorate([a({ json: { write: true }, type: Number })], s3.prototype, "ellipsoidRadius", void 0), __decorate([a({ json: { write: true }, type: Number })], s3.prototype, "squaredEccentricity", void 0), __decorate([a({ json: { write: true } })], s3.prototype, "properties", void 0), s3 = __decorate([c("esri.layers.orientedImagery.core.CameraOrientationLTP")], s3);
var n4 = s3;

// node_modules/@arcgis/core/layers/orientedImagery/core/CameraOrientationOPK.js
var s4 = class extends l(a2(n2)) {
  constructor() {
    super(...arguments), this.type = 2;
  }
  toString() {
    const { type: o2, horizontalWKID: t, verticalWKID: e, x: r, y: i2, z: p3, omega: s7, phi: n7, kappa: a4, affineTransformations: f2, focalLength: y2, principalOffsetPoint: m2, radialDistortionCoefficients: c3, tangentialDistortionCoefficients: u2 } = this, d2 = [o2, t, e, r, i2, p3, s7, n7, a4];
    return this.isAdvanced && (f2?.forEach((o3) => d2.push(o3)), d2.push(y2), m2?.forEach((o3) => d2.push(o3)), c3?.forEach((o3) => d2.push(o3)), u2?.forEach((o3) => d2.push(o3))), d2.map((o3) => isNaN(o3) ? "" : o3).join("|");
  }
};
__decorate([a({ json: { write: true } })], s4.prototype, "type", void 0), __decorate([a({ type: [Number], json: { write: true } })], s4.prototype, "affineTransformations", void 0), __decorate([a({ type: Number, json: { write: true } })], s4.prototype, "focalLength", void 0), __decorate([a({ type: [Number], json: { write: true } })], s4.prototype, "principalOffsetPoint", void 0), __decorate([a({ type: [Number], json: { write: true } })], s4.prototype, "radialDistortionCoefficients", void 0), __decorate([a({ type: [Number], json: { write: true } })], s4.prototype, "tangentialDistortionCoefficients", void 0), __decorate([a({ type: Number, json: { write: true } })], s4.prototype, "omega", void 0), __decorate([a({ type: Number, json: { write: true } })], s4.prototype, "phi", void 0), __decorate([a({ type: Number, json: { write: true } })], s4.prototype, "kappa", void 0), __decorate([a({ type: Number, json: { write: true } })], s4.prototype, "x", void 0), __decorate([a({ type: Number, json: { write: true } })], s4.prototype, "y", void 0), __decorate([a({ type: Number, json: { write: true } })], s4.prototype, "z", void 0), s4 = __decorate([c("esri.layers.orientedImagery.core.CameraOrientationOPK")], s4);
var n5 = s4;

// node_modules/@arcgis/core/layers/orientedImagery/core/CameraOrientationYPR.js
var s5 = class extends l(a2(n2)) {
  constructor() {
    super(...arguments), this.type = 3;
  }
  get isAdvanced() {
    const { affineTransformations: t, focalLength: o2, principalOffsetPoint: e, radialDistortionCoefficients: r, tangentialDistortionCoefficients: i2 } = this;
    return t?.length > 1 || !Number.isNaN(o2) || e?.length > 1 || r?.length > 1 || i2?.length > 1;
  }
  toString() {
    const { type: t, horizontalWKID: o2, verticalWKID: e, x: r, y: i2, z: n7, yaw: s7, pitch: p3, roll: a4, affineTransformations: f2, focalLength: c3, principalOffsetPoint: y2, radialDistortionCoefficients: m2, tangentialDistortionCoefficients: l4 } = this, u2 = [t, o2, e, r, i2, n7, s7, p3, a4];
    return this.isAdvanced && (f2?.forEach((t2) => u2.push(t2)), u2.push(c3), y2?.forEach((t2) => u2.push(t2)), y2?.forEach((t2) => u2.push(t2)), m2?.forEach((t2) => u2.push(t2)), l4?.forEach((t2) => u2.push(t2))), u2.map((t2) => Number.isNaN(t2) ? "" : t2).join("|");
  }
};
__decorate([a({ json: { write: true } })], s5.prototype, "type", void 0), __decorate([a({ type: [Number], json: { write: true } })], s5.prototype, "affineTransformations", void 0), __decorate([a({ type: Number, json: { write: true } })], s5.prototype, "focalLength", void 0), __decorate([a({ type: [Number], json: { write: true } })], s5.prototype, "principalOffsetPoint", void 0), __decorate([a({ type: [Number], json: { write: true } })], s5.prototype, "radialDistortionCoefficients", void 0), __decorate([a({ type: [Number], json: { write: true } })], s5.prototype, "tangentialDistortionCoefficients", void 0), __decorate([a({ type: Number, json: { write: true } })], s5.prototype, "yaw", void 0), __decorate([a({ type: Number, json: { write: true } })], s5.prototype, "pitch", void 0), __decorate([a({ type: Number, json: { write: true } })], s5.prototype, "roll", void 0), __decorate([a({ type: Number, json: { write: true } })], s5.prototype, "x", void 0), __decorate([a({ type: Number, json: { write: true } })], s5.prototype, "y", void 0), __decorate([a({ type: Number, json: { write: true } })], s5.prototype, "z", void 0), s5 = __decorate([c("esri.layers.orientedImagery.core.CameraOrientationYPR")], s5);
var p = s5;

// node_modules/@arcgis/core/layers/orientedImagery/core/cameraOrientationRegistry.js
var n6 = /* @__PURE__ */ new Map();
n6.set("2", { desc: "Using Omega Phi Kappa", constructor: n5 }), n6.set("1", { desc: "Using Heading, Pitch and Roll", constructor: n3 }), n6.set("3", { desc: "Using Yaw, Pitch and Roll", constructor: p }), n6.set("4", { desc: "Using Local Tangent Plane", constructor: n4 });

// node_modules/@arcgis/core/layers/orientedImagery/core/ElevationSourceDefinitions.js
var i = class extends l(n) {
  constructor() {
    super(...arguments), this.url = null;
  }
};
__decorate([a({ type: Number, json: { write: true } })], i.prototype, "lod", void 0), __decorate([a({ type: String, json: { write: true } })], i.prototype, "rasterFunction", void 0), __decorate([a({ type: String, json: { write: true } })], i.prototype, "url", void 0), i = __decorate([c("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")], i);
var s6 = class extends l(n) {
  constructor(o2) {
    super(o2), this.constantElevation = null;
  }
};
__decorate([a({ type: Number, json: { write: true } })], s6.prototype, "constantElevation", void 0), s6 = __decorate([c("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ConstantElevation")], s6);
var l2 = (o2) => null != o2 && "number" == typeof o2.constantElevation;

// node_modules/@arcgis/core/layers/orientedImagery/core/utils.js
function l3(e, t, r) {
  return t && (e = `${t}${e}`), r && (e += `${r}`), e;
}
function a3(e, t, r) {
  let { url: n7 } = e;
  return n7 ? (n7 = l3(n7, t, r), new i(__spreadProps(__spreadValues({}, e), { url: n7 }))) : null;
}
function c2(e, t, r) {
  return e ? l2(e) ? new s6(e) : a3(e, t, r) : e;
}
var u = new o({ Minutes: "minutes", Hours: "hours", Days: "days", Weeks: "weeks", Months: "months", Years: "years" });
var f = new o({ Feet: "feet", Meter: "meter" });
var p2 = new o({ 360: "360", Horizontal: "horizontal", Inspection: "inspection", Nadir: "nadir", Oblique: "oblique", Terrestrial360Video: "terrestrial-360-video", TerrestrialFrameVideo: "terrestrial-frame-video", Aerial360Video: "aerial-360-video", AerialFrameVideo: "aerial-frame-video", "": null });
var h = /* @__PURE__ */ new Map();
function m(e) {
  const [t, r, n7, i2, o2, s7, l4, a4, c3, u2, f2, p3, h2, m2, g2, y2, v2, w2, D, z2, I2, W] = e.slice(1);
  return __spreadValues({ horizontalWKID: t, verticalWKID: r, x: n7, y: i2, z: o2, omega: s7, phi: l4, kappa: a4 }, d([c3, u2, f2, p3, h2, m2], [y2, v2], [w2, D, z2], [I2, W], g2));
}
h.set("1", y), h.set("3", v), h.set("2", m), h.set("4", w);
var g = (e) => {
  const t = e.map((e2) => parseFloat(e2)).filter((e2) => !isNaN(e2));
  if (t.length === e.length) return t;
};
function d(e, t, r, n7, i2) {
  const o2 = g(e), s7 = g(t), l4 = g(r), a4 = g(n7);
  return { affineTransformations: 6 === o2?.length ? o2 : void 0, focalLength: 6 === o2?.length ? parseFloat(i2) : void 0, principalOffsetPoint: 2 !== s7?.length ? [0, 0] : s7, radialDistortionCoefficients: 3 !== l4?.length ? [0, 0, 0] : l4, tangentialDistortionCoefficients: 2 !== a4?.length ? [0, 0] : a4 };
}
function y(e) {
  const [t, r, n7, i2, o2, s7, l4, a4, c3, u2, f2, p3, h2, m2, g2, y2, v2, w2, D, z2, I2, W] = e.slice(1);
  return __spreadValues({ horizontalWKID: t, verticalWKID: r, x: n7, y: i2, z: o2, heading: s7, pitch: l4, roll: a4 }, d([c3, u2, f2, p3, h2, m2], [y2, v2], [w2, D, z2], [I2, W], g2));
}
function v(e) {
  const [t, r, n7, i2, o2, s7, l4, a4, c3, u2, f2, p3, h2, m2, g2, y2, v2, w2, D, z2, I2, W] = e.slice(1);
  return __spreadValues({ horizontalWKID: t, verticalWKID: r, x: n7, y: i2, z: o2, yaw: s7, pitch: l4, roll: a4 }, d([c3, u2, f2, p3, h2, m2], [y2, v2], [w2, D, z2], [I2, W], g2));
}
function w(e) {
  const [t, r, i2, o2, s7, ...l4] = e.slice(1), a4 = h.get(s7), c3 = n6.get(s7)?.constructor;
  if (!a4 || !c3) return null;
  return { latitude: t, longitude: r, ellipsoidRadius: i2, squaredEccentricity: o2, properties: new c3(a4([s7, "", ...l4])) };
}
function z(e) {
  return Array.isArray(e) && e?.length > 5 && !e.some(isNaN);
}
function I(e) {
  for (e = e.slice(0, 8); e.length < 8; ) e.push(0);
  return e;
}

export {
  c2 as c,
  u,
  f,
  p2 as p,
  z,
  I
};
//# sourceMappingURL=chunk-X5A2UZ7M.js.map
