import {
  a as a2,
  c as c2,
  e,
  l,
  n as n2,
  r,
  t
} from "./chunk-LJCFV5JW.js";
import {
  E2 as E,
  h
} from "./chunk-2RCOXHZQ.js";
import {
  S,
  V,
  o as o2,
  p
} from "./chunk-3EE7FDFG.js";
import {
  re
} from "./chunk-JC2AZ2NN.js";
import {
  g
} from "./chunk-6XF5AJ25.js";
import {
  b
} from "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import {
  o
} from "./chunk-TIEYANBR.js";
import {
  n2 as n
} from "./chunk-TX75HZKJ.js";
import {
  U
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/featureTechniqueUtils.js
var o3 = { color: { write: [true, true, true, true], blendMode: "composite" }, depth: false, stencil: { write: false, test: { compare: 514, mask: 255, op: { fail: 7680, zFail: 7680, zPass: 7681 } } } };
var n3 = { color: { write: [true, true, true, true], blendMode: "additive" }, depth: false, stencil: false };
var s = __spreadProps(__spreadValues({}, o3), { color: { write: [true, true, true, true], blendMode: "delete" } });
function r2({ pixelRatio: e4, state: i, displayLevel: o5, requiredLevel: n5 }, s4) {
  const r5 = 1 / 2 ** (o5 - s4.key.level), l4 = 1 / 2 ** (n5 - s4.key.level);
  return { displayMat3: i.displayMat3, displayViewMat3: i.displayViewMat3, displayViewScreenMat3: s4.transforms.displayViewScreenMat3, viewMat3: i.viewMat3, tileMat3: s4.transforms.tileMat3, displayZoomFactor: r5, requiredZoomFactor: l4, tileOffset: [s4.x, s4.y], currentScale: i.scale, currentZoom: o5, metersPerSRUnit: re(i.spatialReference), rotation: i.rotation, pixelRatio: e4 };
}
function l2(t4) {
  return "highlight" === t4.passOptions?.type;
}
function a3(t4) {
  return "hittest" === t4.passOptions?.type;
}
function c3(t4) {
  if (!a3(t4)) return null;
  const { position: e4, distance: i, smallSymbolDistance: o5, smallSymbolSizeThreshold: n5 } = t4.passOptions;
  return { position: e4, distance: i, smallSymbolDistance: o5, smallSymbolSizeThreshold: n5 };
}
function p2(t4) {
  if (!l2(t4)) return null;
  const { activeReasons: e4, highlightAll: i } = t4.passOptions;
  return { activeReasons: e4, highlightAll: i ? 1 : 0 };
}
function u(t4, e4, i) {
  const o5 = {};
  for (const n5 in i) "function" != typeof i[n5] ? o5[n5] = i[n5] : o5[n5] = i[n5](t4, e4);
  return o5;
}
function f(t4, e4) {
  const { attributeView: i, context: o5 } = t4;
  return { storage: i.getUniforms(o5), view: r2(t4, e4), hittestRequest: c3(t4), highlight: p2(t4) };
}
function d(t4) {
  return { inside: 2 === t4.selection, outside: 3 === t4.selection };
}
function m(t4) {
  return a3(t4) ? n3 : l2(t4) && "clear" === t4.passOptions.stepType ? s : o3;
}
function h2(t4) {
  const { row: o5, col: n5 } = t4.key, s4 = n5 * o2, r5 = o5 * o2;
  return { tileOffsetFromLocalOrigin: [s4 % p, r5 % p], maxIntsToLocalOrigin: [Math.floor(s4 / p), Math.floor(r5 / p)] };
}

// node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js
var o4 = 1;
var t2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
var c4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
var e2 = 256;

// node_modules/@arcgis/core/views/support/HighlightOptions.js
var d2;
var y = d2 = class extends b {
  constructor(o5) {
    super(o5), this.name = c2, this.color = e.clone(), this.haloColor = null, this.haloOpacity = r, this.fillOpacity = l, this.shadowColor = n2.clone(), this.shadowOpacity = t, this.shadowDifference = a2, this.haloWidth = 2.1, this.haloBlur = 0.8 / this.haloWidth;
  }
  equals(o5) {
    return this.color.equals(o5.color) && (this.haloColor || this.color).equals(o5.haloColor || o5.color) && this.haloOpacity === o5.haloOpacity && this.fillOpacity === o5.fillOpacity && this.haloWidth === o5.haloWidth && this.haloBlur === o5.haloBlur && this.shadowColor.equals(o5.shadowColor) && this.shadowOpacity === o5.shadowOpacity && this.shadowDifference === o5.shadowDifference;
  }
  clone() {
    return new d2(__spreadProps(__spreadValues({}, this), { color: this.color.clone(), haloColor: this.haloColor?.clone(), shadowColor: this.shadowColor?.clone() }));
  }
  assignFrom(o5) {
    this.color = o5.color.clone(), this.haloColor = o5.haloColor?.clone(), this.haloOpacity = o5.haloOpacity, this.fillOpacity = o5.fillOpacity, this.shadowColor = o5.shadowColor.clone(), this.shadowDifference = o5.shadowDifference, this.shadowOpacity = o5.shadowOpacity, this.haloBlur = o5.haloBlur, this.haloWidth = o5.haloWidth;
  }
};
__decorate([a({ type: String, constructOnly: true, nonNullable: true })], y.prototype, "name", void 0), __decorate([a({ type: g, nonNullable: true })], y.prototype, "color", void 0), __decorate([a({ type: g })], y.prototype, "haloColor", void 0), __decorate([a({ nonNullable: true })], y.prototype, "haloOpacity", void 0), __decorate([a({ nonNullable: true })], y.prototype, "fillOpacity", void 0), __decorate([a({ type: g, nonNullable: true })], y.prototype, "shadowColor", void 0), __decorate([a({ nonNullable: true })], y.prototype, "shadowOpacity", void 0), __decorate([a({ nonNullable: true })], y.prototype, "shadowDifference", void 0), __decorate([a({ nonNullable: true })], y.prototype, "haloWidth", void 0), __decorate([a({ nonNullable: true })], y.prototype, "haloBlur", void 0), y = d2 = __decorate([c("esri.views.support.HighlightOptions")], y);
var u2 = y;

// node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightGradient.js
var s2 = () => n.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");
function a4(o5, i) {
  i.fillColor[0] = o5.color.r / 255, i.fillColor[1] = o5.color.g / 255, i.fillColor[2] = o5.color.b / 255, i.fillColor[3] = o5.color.a, o5.haloColor ? (i.outlineColor[0] = o5.haloColor.r / 255, i.outlineColor[1] = o5.haloColor.g / 255, i.outlineColor[2] = o5.haloColor.b / 255, i.outlineColor[3] = o5.haloColor.a) : (i.outlineColor[0] = i.fillColor[0], i.outlineColor[1] = i.fillColor[1], i.outlineColor[2] = i.fillColor[2], i.outlineColor[3] = i.fillColor[3]), i.fillColor[3] *= o5.fillOpacity, i.outlineColor[3] *= o5.haloOpacity, i.fillColor[0] *= i.fillColor[3], i.fillColor[1] *= i.fillColor[3], i.fillColor[2] *= i.fillColor[3], i.outlineColor[0] *= i.outlineColor[3], i.outlineColor[1] *= i.outlineColor[3], i.outlineColor[2] *= i.outlineColor[3], i.outlineWidth = (1 - o5.haloBlur) * o5.haloWidth, i.outerHaloWidth = o5.haloBlur * o5.haloWidth / 2, i.innerHaloWidth = o5.haloBlur * o5.haloWidth / 2, i.outlinePosition = 0;
}
var u3 = [0, 0, 0, 0];
var d3 = class {
  constructor() {
    this.type = "single", this._highlightOptions = new u2(), this._convertedHighlightOptions = { fillColor: [0, 0, 0, 0], outlineColor: [0, 0, 0, 0], outlinePosition: 0, outlineWidth: 0, innerHaloWidth: 0, outerHaloWidth: 0 }, this._optionsShadeTexKey = "", this._texelData = new Uint8Array(4 * e2), this._minMaxDistance = [0, 0];
  }
  setHighlightOptions(o5) {
    this._highlightOptions = o5;
  }
  applyHighlightOptions(o5, t4) {
    this._updateGradientTexture(o5), o5.bindTexture(this._shadeTex, S), t4.setUniform2fv("u_minMaxDistance", this._minMaxDistance);
  }
  destroy() {
    this._shadeTex?.dispose(), this._shadeTex = null;
  }
  getReasonsWithGradients() {
    return [{ activeReasons: (1 << V) - 1, activeGradient: this }];
  }
  _updateGradientTexture(o5) {
    const i = g2(this._highlightOptions);
    if (i === this._optionsShadeTexKey) return;
    this._optionsShadeTexKey = i, a4(this._highlightOptions, this._convertedHighlightOptions);
    const t4 = this._convertedHighlightOptions, r5 = t4.outlinePosition - t4.outlineWidth / 2 - t4.outerHaloWidth, d4 = t4.outlinePosition - t4.outlineWidth / 2, f2 = t4.outlinePosition + t4.outlineWidth / 2, p4 = t4.outlinePosition + t4.outlineWidth / 2 + t4.innerHaloWidth, C = Math.sqrt(Math.PI / 2) * o4, c5 = Math.abs(r5) > C ? Math.round(10 * (Math.abs(r5) - C)) / 10 : 0, m2 = Math.abs(p4) > C ? Math.round(10 * (Math.abs(p4) - C)) / 10 : 0;
    let x;
    c5 && !m2 ? s2().error("The outer rim of the highlight is " + c5 + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards).") : !c5 && m2 ? s2().error("The inner rim of the highlight is " + m2 + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards).") : c5 && m2 && s2().error("The highlight is " + Math.max(c5, m2) + "px away from the edge of the feature; consider reducing some width values.");
    const _ = [void 0, void 0, void 0, void 0];
    function w(o6, i2, t5) {
      _[0] = (1 - t5) * o6[0] + t5 * i2[0], _[1] = (1 - t5) * o6[1] + t5 * i2[1], _[2] = (1 - t5) * o6[2] + t5 * i2[2], _[3] = (1 - t5) * o6[3] + t5 * i2[3];
    }
    const { _texelData: v } = this;
    for (let l4 = 0; l4 < e2; ++l4) x = r5 + l4 / (e2 - 1) * (p4 - r5), x < r5 ? (_[0] = 0, _[1] = 0, _[2] = 0, _[3] = 0) : x < d4 ? w(u3, t4.outlineColor, (x - r5) / (d4 - r5)) : x < f2 ? [_[0], _[1], _[2], _[3]] = t4.outlineColor : x < p4 ? w(t4.outlineColor, t4.fillColor, (x - f2) / (p4 - f2)) : [_[0], _[1], _[2], _[3]] = t4.fillColor, v[4 * l4] = 255 * _[0], v[4 * l4 + 1] = 255 * _[1], v[4 * l4 + 2] = 255 * _[2], v[4 * l4 + 3] = 255 * _[3];
    if (this._minMaxDistance[0] = r5, this._minMaxDistance[1] = p4, !this._shadeTex) {
      const i2 = new h(e2, 1);
      i2.wrapMode = 33071, this._shadeTex = new E(o5, i2);
    }
    this._shadeTex.updateData(0, 0, 0, e2, 1, this._texelData);
  }
};
function g2(o5) {
  return `${o5.color};${o5.haloColor};${o5.haloOpacity};${o5.fillOpacity};${o5.haloWidth};${o5.haloBlur}`;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/MultiHighlightGradient.js
var s3 = class {
  constructor() {
    this.type = "multi", this.gradients = [];
  }
  setHighlightOptions(s4) {
    for (let e4 = 0; e4 < s4.length; e4++) this.gradients[e4] || (this.gradients[e4] = new d3()), this.gradients[e4].setHighlightOptions(s4[e4]);
    for (let t4 = s4.length + 1; t4 < this.gradients.length; t4++) this.gradients[t4].destroy();
    this.gradients.length = s4.length;
  }
  destroy() {
    for (const t4 of this.gradients) t4.destroy();
  }
  getReasonsWithGradients() {
    let t4 = 1;
    const s4 = [];
    for (let e4 = 0; e4 < this.gradients.length; e4++) {
      const i = this.gradients[e4];
      s4.push({ activeReasons: t4, activeGradient: i }), t4 <<= 1;
    }
    return s4;
  }
};

// node_modules/@arcgis/core/views/2d/layers/support/util.js
var r3 = new o({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryMultiPatch: "multipatch", mesh: "mesh" });
function l3(t4) {
  return r3.toJSON(t4);
}
function a5(t4) {
  const { bandCount: e4, attributeTable: i, colormap: n5, pixelType: s4 } = t4.raster.rasterInfo;
  return 1 === e4 && (null != i || null != n5 || "u8" === s4 || "s8" === s4);
}
function h3(e4, s4) {
  return null == s4 ? (e4?.destroy(), null) : ("single" === e4?.type && Array.isArray(s4) && (e4.destroy(), e4 = null), "multi" !== e4?.type || Array.isArray(s4) || (e4.destroy(), e4 = null), e4 || (e4 = Array.isArray(s4) ? new s3() : new d3()), U(s4) ? "multi" === e4.type && e4.setHighlightOptions(s4) : "single" === e4.type && e4.setHighlightOptions(s4), e4);
}
function p3(t4, e4, i, n5) {
  const { painter: r5, highlightGradient: l4 } = t4, { highlight: o5 } = r5.effects;
  if (!l4) return;
  const a6 = t4.passOptions, h4 = l4.getReasonsWithGradients();
  for (let p4 = 0; p4 < h4.length; p4++) {
    const l5 = __spreadProps(__spreadValues({}, t4), { passOptions: { type: "highlight", activeGradient: null != n5 ? h4[n5].activeGradient : h4[p4].activeGradient, activeReasons: h4[p4].activeReasons, stepType: "burn", highlightAll: e4 } });
    if (o5.bind(l5), i(l5), p4 < h4.length - 1) {
      let s4 = 0;
      for (let t5 = p4 + 1; t5 < h4.length; t5++) s4 |= h4[t5].activeReasons;
      i(__spreadProps(__spreadValues({}, t4), { passOptions: { type: "highlight", activeGradient: null != n5 ? h4[n5].activeGradient : h4[p4].activeGradient, activeReasons: s4, stepType: "clear", highlightAll: e4 } }));
    }
    const a7 = __spreadProps(__spreadValues({}, t4), { passOptions: { type: "highlight", activeGradient: null != n5 ? h4[n5].activeGradient : h4[p4].activeGradient, activeReasons: h4[p4].activeReasons, stepType: "draw", highlightAll: e4 } });
    r5.setPipelineState(m(t4)), r5.updatePipelineState(t4.context), o5.draw(a7), o5.unbind();
  }
  t4.passOptions = a6;
}

// node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f32.js
function e3() {
  const e4 = new Float32Array(9);
  return e4[0] = 1, e4[4] = 1, e4[8] = 1, e4;
}
function t3(e4) {
  const t4 = new Float32Array(9);
  return t4[0] = e4[0], t4[1] = e4[1], t4[2] = e4[2], t4[3] = e4[3], t4[4] = e4[4], t4[5] = e4[5], t4[6] = e4[6], t4[7] = e4[7], t4[8] = e4[8], t4;
}
function n4(e4, t4, n5, r5, o5, a6, c5, l4, u4) {
  const f2 = new Float32Array(9);
  return f2[0] = e4, f2[1] = t4, f2[2] = n5, f2[3] = r5, f2[4] = o5, f2[5] = a6, f2[6] = c5, f2[7] = l4, f2[8] = u4, f2;
}
var r4 = Object.freeze(Object.defineProperty({ __proto__: null, clone: t3, create: e3, fromValues: n4 }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  e3 as e,
  t3 as t,
  r2 as r,
  l2 as l,
  a3 as a,
  u as u2,
  f,
  d,
  m,
  h2 as h,
  o4 as o,
  t2,
  c4 as c,
  l3 as l2,
  a5 as a2,
  h3 as h2,
  p3 as p
};
//# sourceMappingURL=chunk-AJJ6USJB.js.map
