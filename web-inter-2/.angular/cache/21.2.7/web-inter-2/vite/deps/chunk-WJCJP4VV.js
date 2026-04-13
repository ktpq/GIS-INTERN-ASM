import {
  A as A2,
  B as B3,
  C as C4,
  D as D3,
  E as E4,
  g as g4,
  h as h3,
  k,
  q,
  w as w2,
  x as x2,
  z as z2
} from "./chunk-P4OJ2X26.js";
import {
  n2 as n3
} from "./chunk-VD5IUEGW.js";
import {
  Ae,
  At,
  B as B2,
  C as C2,
  C2 as C3,
  Ct,
  Ge,
  Gt,
  Ht,
  I as I2,
  J as J2,
  Lt,
  P,
  Pt,
  Qt,
  Te,
  Tt,
  U as U2,
  Ve,
  W,
  We,
  X,
  Xe,
  Y,
  Ye,
  Yt,
  _ as _3,
  _2 as _4,
  _e,
  _t,
  f as f3,
  ft,
  g as g3,
  gt,
  hn,
  it,
  je,
  jt,
  l as l2,
  ln,
  m as m4,
  m2 as m5,
  nt,
  oe,
  on,
  ot,
  rt,
  s as s4,
  se,
  st,
  ue,
  un,
  ut,
  v,
  w,
  we,
  wn,
  x,
  xt,
  ye,
  ze,
  zt
} from "./chunk-SG6TQSIU.js";
import {
  s as s5
} from "./chunk-6BM7NLJV.js";
import {
  i as i3,
  m as m2,
  s as s3
} from "./chunk-YJDCNXCC.js";
import {
  e as e2,
  e2 as e3,
  g,
  n2,
  o as o5,
  r as r5
} from "./chunk-GSU264RF.js";
import {
  A,
  B,
  C,
  D as D2,
  E as E2,
  F,
  H,
  I,
  J,
  e,
  f,
  g as g2,
  o as o6,
  p,
  r as r4,
  s as s2,
  u as u3,
  z
} from "./chunk-IHDBO625.js";
import {
  _ as _2
} from "./chunk-USWA7LL5.js";
import {
  i as i2,
  o as o4
} from "./chunk-OZUFUJWT.js";
import {
  u
} from "./chunk-A2ZMD6A4.js";
import {
  a,
  d,
  e as e4,
  f as f2,
  h as h2,
  l,
  m as m3,
  r as r6,
  u2 as u4
} from "./chunk-LWSMHEIS.js";
import {
  t as t2
} from "./chunk-HYBWSRPN.js";
import {
  E2 as E3,
  h
} from "./chunk-T7SNP64P.js";
import {
  r as r3
} from "./chunk-UTMQRFW7.js";
import {
  o2 as o3
} from "./chunk-EB3674W2.js";
import {
  D,
  T,
  U,
  V,
  c,
  o as o2,
  wt
} from "./chunk-3EE7FDFG.js";
import {
  E,
  G,
  N as N2,
  R,
  _
} from "./chunk-IODIHRP7.js";
import {
  m
} from "./chunk-OKJ7MV5V.js";
import {
  i,
  s
} from "./chunk-6U5MFJUS.js";
import {
  re
} from "./chunk-NR66QFNF.js";
import {
  o,
  u as u2
} from "./chunk-UXWT3ISO.js";
import {
  $,
  r,
  y
} from "./chunk-WARIPJQI.js";
import {
  has,
  n2 as n,
  r3 as r2
} from "./chunk-6I475YAP.js";
import {
  N,
  t
} from "./chunk-GLWFJLHD.js";
import {
  __decorate,
  __param
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/symbols/cim/animationDebugFlags.js
var e5 = class {
  get forceStaticPath() {
    return "disabled" === has("esri-cim-animations-enable-status");
  }
  get forceAnimatedPath() {
    return "forced" === has("esri-cim-animations-enable-status");
  }
  get freezeGlobalTime() {
    const e9 = has("esri-cim-animations-freeze-time");
    return e9 ?? false;
  }
  get spotlightAnimatedSymbols() {
    return !!has("esri-cim-animations-spotlight");
  }
  get forceGlobalTimeOrigin() {
    return false !== has("esri-cim-animations-freeze-time");
  }
};
var t3 = new e5();

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimationUniformInfo.js
var d2 = class extends w {
};
__decorate([m5(C2)], d2.prototype, "globalTime", void 0), __decorate([m5(X)], d2.prototype, "animationTextureSize", void 0), __decorate([m5(U2)], d2.prototype, "animationTexture", void 0), __decorate([m5(rt)], d2.prototype, "toScreen", void 0), __decorate([m5(rt)], d2.prototype, "toNdc", void 0), __decorate([m5(C2)], d2.prototype, "mapRotation", void 0), __decorate([m5(C2)], d2.prototype, "pixelRatio", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/EntityStorage.js
var p2 = class extends w {
  getVisualVariableData(t8) {
    if (!this._vvData) {
      const a8 = this.getAttributeDataCoords(t8);
      this._vvData = wn(this.visualVariableData, a8).setDebugName("storage2");
    }
    return this._vvData;
  }
  getAttributeDataCoords(t8) {
    if (!this._uv) {
      const a8 = B3(t8), e9 = this.size, i8 = ut(a8.x), r9 = ut(a8.y).multiply(ut(256)), s11 = ut(a8.z).multiply(ut(256)).multiply(ut(256)), n17 = st(i8.add(r9).add(s11)), p9 = Ge(n17, e9), d8 = n17.subtract(p9).divide(e9);
      this._uv = new X(p9, d8).add(0.5).divide(e9);
    }
    return this._uv;
  }
  getFilterData(t8) {
    const a8 = this.getAttributeDataCoords(t8);
    return wn(this.filterFlags, a8).setDebugName("storage0");
  }
  getAnimationData(t8) {
    const a8 = this.getAttributeDataCoords(t8);
    return wn(this.animation, a8).setDebugName("storage1");
  }
  getVVData(t8) {
    return this.getVisualVariableData(t8);
  }
  getDataDrivenData0(t8) {
    const a8 = this.getAttributeDataCoords(t8);
    return wn(this.dataDriven0, a8).setDebugName("storage30");
  }
  getDataDrivenData1(t8) {
    const a8 = this.getAttributeDataCoords(t8);
    return wn(this.dataDriven1, a8).setDebugName("storage31");
  }
  getDataDrivenData2(t8) {
    const a8 = this.getAttributeDataCoords(t8);
    return wn(this.dataDriven2, a8).setDebugName("storage32");
  }
  getGPGPUData(t8) {
    const a8 = this.getAttributeDataCoords(t8);
    return wn(this.gpgpu, a8).setDebugName("storage4");
  }
  getLocalTimeOrigin(t8) {
    const a8 = this.getAttributeDataCoords(t8);
    return wn(this.localTimeOrigin, a8).x.setDebugName("storage5");
  }
  getFilterFlags(t8) {
    return has("webgl-ignores-sampler-precision") ? ue(this.getFilterData(t8).x.multiply(st(255))) : this.getFilterData(t8).x.multiply(st(255));
  }
  getLabelVisibility(t8) {
    const a8 = this.getFilterData(t8).y.multiply(255);
    return new C2(1).subtract(a8);
  }
  getAnimationValue(t8) {
    return this.getAnimationData(t8).x;
  }
  getSizeValue(t8) {
    return this.getVisualVariableData(t8).x;
  }
  getColorValue(t8) {
    return this.getVisualVariableData(t8).y;
  }
  getOpacityValue(t8) {
    return this.getVisualVariableData(t8).z;
  }
  getRotationValue(t8) {
    return this.getVisualVariableData(t8).w;
  }
};
__decorate([m5(U2)], p2.prototype, "filterFlags", void 0), __decorate([m5(U2)], p2.prototype, "animation", void 0), __decorate([m5(U2)], p2.prototype, "gpgpu", void 0), __decorate([m5(U2)], p2.prototype, "localTimeOrigin", void 0), __decorate([m5(U2)], p2.prototype, "visualVariableData", void 0), __decorate([m5(U2)], p2.prototype, "dataDriven0", void 0), __decorate([m5(U2)], p2.prototype, "dataDriven1", void 0), __decorate([m5(U2)], p2.prototype, "dataDriven2", void 0), __decorate([m5(C2)], p2.prototype, "size", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ShaderHighlight.js
var e6 = class extends w {
};
__decorate([m5(C2)], e6.prototype, "activeReasons", void 0), __decorate([m5(C2)], e6.prototype, "highlightAll", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ShaderHittest.js
var i4 = class extends w {
};
__decorate([m5(X)], i4.prototype, "position", void 0), __decorate([m5(C2)], i4.prototype, "distance", void 0), __decorate([m5(C2)], i4.prototype, "smallSymbolDistance", void 0), __decorate([m5(C2)], i4.prototype, "smallSymbolSizeThreshold", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ViewInfo.js
var d3 = class extends w {
};
__decorate([m5(rt)], d3.prototype, "displayViewScreenMat3", void 0), __decorate([m5(rt)], d3.prototype, "displayViewMat3", void 0), __decorate([m5(rt)], d3.prototype, "displayMat3", void 0), __decorate([m5(rt)], d3.prototype, "viewMat3", void 0), __decorate([m5(rt)], d3.prototype, "tileMat3", void 0), __decorate([m5(C2)], d3.prototype, "displayZoomFactor", void 0), __decorate([m5(C2)], d3.prototype, "requiredZoomFactor", void 0), __decorate([m5(X)], d3.prototype, "tileOffset", void 0), __decorate([m5(C2)], d3.prototype, "currentScale", void 0), __decorate([m5(C2)], d3.prototype, "currentZoom", void 0), __decorate([m5(C2)], d3.prototype, "metersPerSRUnit", void 0), __decorate([m5(C2)], d3.prototype, "rotation", void 0), __decorate([m5(C2)], d3.prototype, "pixelRatio", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/AFeatureShader.js
var S = class extends C3 {
};
__decorate([f3(0, Y)], S.prototype, "id", void 0), __decorate([f3(1, C2)], S.prototype, "bitset", void 0), __decorate([f3(2, X)], S.prototype, "pos", void 0);
var q2 = class extends x {
};
__decorate([f3(14, X)], q2.prototype, "nextPos1", void 0), __decorate([f3(15, X)], q2.prototype, "nextPos2", void 0);
var P2 = class extends I2 {
};
var B4 = class extends P {
  clip(t8, i8) {
    let e9 = new C2(0);
    const o16 = this.storage.getFilterFlags(t8);
    if (e9 = e9.add(st(2).multiply(st(1).subtract(q(o16, 0)))), this.inside ? e9 = e9.add(st(2).multiply(st(1).subtract(q(o16, 1)))) : this.outside ? e9 = e9.add(st(2).multiply(q(o16, 1))) : this.highlight && (e9 = e9.add(st(2).multiply(st(1).subtract(this._checkHighlight(o16))))), null != i8) {
      const t9 = new C2(1).subtract(ln(i8.x, this.view.currentZoom)), o17 = ln(i8.y, this.view.currentZoom);
      e9 = e9.add(new C2(2).multiply(t9.add(o17)));
    }
    return e9;
  }
  getFragmentOutput(t8, i8, e9 = new C2(1 / 255)) {
    const s11 = new v();
    return s11.fragColor = this._maybeWriteHittest(i8) ?? this._maybeHighlight(t8, e9) ?? t8, s11;
  }
  _maybeHighlight(t8, i8) {
    return this.highlight ? new _3(t8.rgb, ln(i8, t8.a)) : null;
  }
  _checkHighlight(t8) {
    let e9 = this._checkHighlightBit(t8, 0);
    for (let o16 = 1; o16 < V; o16++) e9 = e9.add(this._checkHighlightBit(t8, o16));
    return ln(new C2(0.1), e9.add(this.highlight.highlightAll));
  }
  _checkHighlightBit(t8, i8) {
    return A2(t8, i8).multiply(h3(this.highlight.activeReasons, i8));
  }
  maybeRunHittest(t8, i8, e9) {
    if (null == this.hittestRequest) return null;
    const o16 = this.hittest(t8, i8, e9);
    let s11 = zt(Gt(o16, this.hittestRequest.distance), new C2(2), new C2(0));
    const r9 = this.storage.getAttributeDataCoords(t8.id), h10 = g4(r9);
    s11 = s11.add(this.clip(t8.id, t8.zoomRange));
    const l10 = new _3(new C2(1 / 255), 0, 0, 0);
    return { glPointSize: new C2(1), glPosition: new _3(h10, s11, 1), color: l10 };
  }
  _maybeWriteHittest(t8) {
    return null != this.hittestRequest ? t8.color : null;
  }
};
__decorate([_4], B4.prototype, "inside", void 0), __decorate([_4], B4.prototype, "outside", void 0), __decorate([g3(e6)], B4.prototype, "highlight", void 0), __decorate([m5(p2)], B4.prototype, "storage", void 0), __decorate([m5(d3)], B4.prototype, "view", void 0), __decorate([g3(i4)], B4.prototype, "hittestRequest", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/LocalTileOffset.js
var n4 = class extends w {
  getPatternOffsetAtTileOrigin(t8, i8 = new C2(0), l10 = new C2(1)) {
    const n17 = new X(F).divide(t8);
    let p9 = t8.multiply(Te(this.maxIntsToLocalOrigin.multiply(n17))).add(this.tileOffsetFromLocalOrigin).subtract(new C2(0.5).multiply(t8));
    return p9 = new X(p9.x.multiply(l10).subtract(p9.y.multiply(i8)), p9.x.multiply(i8).add(p9.y.multiply(l10))), Ge(p9, t8);
  }
};
__decorate([m5(X)], n4.prototype, "tileOffsetFromLocalOrigin", void 0), __decorate([m5(X)], n4.prototype, "maxIntsToLocalOrigin", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/MosaicInfo.js
var s6 = class extends w {
};
__decorate([m5(X)], s6.prototype, "size", void 0), __decorate([m5(U2)], s6.prototype, "texture", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableColor.js
var f4 = class extends w {
  getColor(t8, s11, o16) {
    return Tt([At(x2(t8), o16), s11], [_t(t8, this.values.first()), this.colors.first()], [Ht(t8, this.values.last()), this.colors.last()], [true, () => {
      const s12 = this.values.findIndex((s13) => Gt(s13, t8)), o17 = this.values.get(s12), r9 = s12.subtract(1), e9 = this.values.get(r9), i8 = t8.subtract(e9).divide(o17.subtract(e9));
      return _e(this.colors.get(r9), this.colors.get(s12), i8);
    }]);
  }
};
__decorate([m5(B2.ofType(_3, 8))], f4.prototype, "colors", void 0), __decorate([m5(B2.ofType(C2, 8))], f4.prototype, "values", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableOpacity.js
var h4 = class extends w {
  getOpacity(t8) {
    return Tt([x2(t8), new C2(1)], [_t(t8, this.opacityValues.first()), this.opacities.first()], [Ht(t8, this.opacityValues.last()), this.opacities.last()], [true, () => {
      const i8 = this.opacityValues.findIndex((i9) => Gt(i9, t8)), s11 = this.opacityValues.get(i8), e9 = i8.subtract(1), o16 = this.opacityValues.get(e9), a8 = t8.subtract(o16).divide(s11.subtract(o16));
      return _e(this.opacities.get(e9), this.opacities.get(i8), a8);
    }]);
  }
};
__decorate([m5(B2.ofType(C2, 8))], h4.prototype, "opacities", void 0), __decorate([m5(B2.ofType(C2, 8))], h4.prototype, "opacityValues", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableRotation.js
var g5 = class extends w {
  getVVRotationMat4(t8) {
    return zt(x2(t8), it.identity(), () => {
      const e9 = this.getNormalizedAngle(t8).multiply(e), r9 = un(e9), i8 = oe(e9);
      return new it(i8, r9, 0, 0, r9.multiply(new C2(-1)), i8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    });
  }
  getVVRotationMat3(t8) {
    return zt(x2(t8), rt.identity(), () => {
      const e9 = this.getNormalizedAngle(t8).multiply(e), r9 = un(e9), i8 = oe(e9);
      return new rt(i8, r9, 0, r9.multiply(new C2(-1)), i8, 0, 0, 0, 1);
    });
  }
  getNormalizedAngle(t8) {
    const e9 = Ct(this.rotationType, new C2(1));
    return zt(e9, new C2(90).subtract(t8), t8);
  }
};
__decorate([m5(C2)], g5.prototype, "rotationType", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeMinMaxValue.js
var m6 = class extends w {
  getSize(t8, r9) {
    const e9 = this.minMaxValueAndSize.xy, i8 = this.minMaxValueAndSize.zw;
    return zt(x2(t8), r9, () => {
      const r10 = t8.subtract(e9.x).divide(e9.y.subtract(e9.x)), s11 = se(r10, new C2(0), new C2(1));
      return i8.x.add(s11.multiply(i8.y.subtract(i8.x)));
    });
  }
};
__decorate([m5(_3)], m6.prototype, "minMaxValueAndSize", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeScaleStops.js
var u5 = class extends w {
  getSizeForViewScale(s11) {
    return Tt([_t(s11, this.values.first()), this.sizes.first()], [Ht(s11, this.values.last()), this.sizes.last()], [true, () => {
      const t8 = this.values.findIndex((t9) => Gt(t9, s11)), e9 = this.values.get(t8), i8 = t8.subtract(1), r9 = this.values.get(i8), o16 = s11.subtract(r9).divide(e9.subtract(r9));
      return _e(this.sizes.get(i8), this.sizes.get(t8), o16);
    }]);
  }
};
__decorate([m5(B2.ofType(C2, 8))], u5.prototype, "sizes", void 0), __decorate([m5(B2.ofType(C2, 8))], u5.prototype, "values", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeStops.js
var f5 = class extends w {
  getSize(s11, t8) {
    const e9 = Tt([x2(s11), t8], [_t(s11, this.values.first()), this.sizes.first()], [Ht(s11, this.values.last()), this.sizes.last()], [true, () => {
      const t9 = this.values.findIndex((t10) => Gt(t10, s11)), e10 = this.values.get(t9), i8 = t9.subtract(1), r9 = this.values.get(i8), o16 = s11.subtract(r9).divide(e10.subtract(r9));
      return _e(this.sizes.get(i8), this.sizes.get(t9), o16);
    }]);
    return zt(x2(e9), t8, e9);
  }
};
__decorate([m5(B2.ofType(C2, 8))], f5.prototype, "sizes", void 0), __decorate([m5(B2.ofType(C2, 8))], f5.prototype, "values", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VisualVariableSizeUnitValue.js
var s7 = class extends w {
  getSize(t8, o16) {
    return zt(x2(t8), o16, t8.multiply(this.unitValueToPixelsRatio));
  }
};
__decorate([m5(C2)], s7.prototype, "unitValueToPixelsRatio", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/vvUtils.js
function t4(a8) {
  return null != a8.visualVariableSizeMinMaxValue || null != a8.visualVariableSizeScaleStops || null != a8.visualVariableSizeStops || null != a8.visualVariableSizeUnitValue;
}
function l3(a8, e9, i8) {
  if (t4(a8)) {
    const t8 = a8.storage.getSizeValue(e9);
    return a8.visualVariableSizeMinMaxValue?.getSize(t8, i8) ?? a8.visualVariableSizeScaleStops?.getSizeForViewScale(a8.view.currentScale) ?? a8.visualVariableSizeStops?.getSize(t8, i8) ?? a8.visualVariableSizeUnitValue?.getSize(t8, i8);
  }
  return i8;
}
function r7(e9, i8, t8, l10 = new J2(false)) {
  if (null == e9.visualVariableColor) return t8;
  const r9 = e9.storage.getColorValue(i8);
  return e9.visualVariableColor.getColor(r9, t8, l10);
}
function n5(a8, i8) {
  if (null == a8.visualVariableOpacity) return new C2(1);
  const t8 = a8.storage.getOpacityValue(i8);
  return a8.visualVariableOpacity.getOpacity(t8);
}
function u6(a8, e9) {
  if (null == a8.visualVariableRotation) return rt.identity();
  const t8 = a8.storage.getRotationValue(e9);
  return a8.visualVariableRotation.getVVRotationMat3(t8);
}
function o7(a8, i8) {
  if (null == a8.visualVariableRotation) return new C2(0);
  const t8 = a8.storage.getRotationValue(i8);
  return a8.visualVariableRotation.getNormalizedAngle(t8);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AAnimatedShader.js
var W2 = class extends S {
};
__decorate([f3(3, X)], W2.prototype, "offset", void 0), __decorate([f3(4, _3)], W2.prototype, "sizing", void 0), __decorate([f3(5, _3)], W2.prototype, "value1Position2Value2", void 0), __decorate([f3(6, _3)], W2.prototype, "animationPointerAndBaseSizeAndReferenceSize", void 0), __decorate([f3(7, X)], W2.prototype, "zoomRange", void 0), __decorate([f3(8, C2)], W2.prototype, "lineLength", void 0);
var q3 = class extends P2 {
};
var H2 = class extends B4 {
  _vertexPreamble(i8, t8, e9) {
    const { id: o16, offset: a8, animationPointerAndBaseSizeAndReferenceSize: r9, sizing: s11 } = i8, l10 = r9.xy, n17 = r9.z, b7 = r9.w, S7 = s11.xy, h10 = this._getEvalParams(i8, S7, e9);
    let w6, g14;
    if (i8.value1Position2Value2) {
      const t9 = J3(l10, 6, h10).a, e10 = i8.pos, o17 = i8.value1Position2Value2.yz, a9 = i8.value1Position2Value2.x, r10 = i8.value1Position2Value2.w, s12 = t9.subtract(a9).divide(r10.subtract(a9));
      g14 = e10.add(o17.subtract(e10).multiply(s12)), w6 = ln(new C2(1), s12).add(ln(new C2(0), gt(s12)));
    } else g14 = i8.pos, w6 = new C2(0);
    const V5 = s11.z, x9 = h3(i8.bitset, o5.bitset.isStroke), z7 = s11.w, j6 = h3(i8.bitset, o5.bitset.scaleSymbolsProportionally), T6 = J3(l10, 0, h10), _5 = Tt([Ct(h3(i8.bitset, o5.bitset.isMapAligned), new C2(1)), this.view.rotation.divide(180).multiply(Math.PI)], [true, new C2(0)]), O3 = new nt(oe(_5), un(_5.multiply(-1)), un(_5), oe(_5)).multiply(T6.xy), C8 = T6.z.subtract(_5).subtract(t8.multiply(o6)), M3 = T6.w, A8 = h3(i8.bitset, o5.bitset.isSDF), F10 = l3(this, o16, new C2(b7)).divide(new C2(b7));
    return { baseSize: n17, animationPointer: l10, strokeWidth: V5, isOutline: x9, unscaledDistanceToPx: z7, scaleSymbolsProportionally: j6, isSDF: A8, position: this._getScreenPosition({ id: o16, pos: g14, offset: a8, referenceSize: b7, translation: O3, rotation: C8, scale: M3, vvScale: F10 }), evalParams: h10, vvScale: F10, scale: M3, clip: w6 };
  }
  _getScreenPosition(i8) {
    const { pos: t8, translation: e9, rotation: o16, scale: a8, offset: r9, id: s11, vvScale: l10 } = i8, n17 = o7(this, s11).multiply(Math.PI / 180), p9 = e9.x.multiply(4 / 3), d8 = e9.y.multiply(-1).multiply(4 / 3), c7 = un(n17), y6 = oe(n17), h10 = y6.multiply(p9).add(gt(c7).multiply(d8)), w6 = c7.multiply(p9).add(y6.multiply(d8)), g14 = un(o16.subtract(n17)), V5 = oe(o16.subtract(n17)), x9 = new C2(0), z7 = new C2(1), { pixelRatio: P9 } = this.animationInfo, j6 = new rt(z7, x9, x9, x9, z7, x9, h10.multiply(P9), w6.multiply(P9), z7), T6 = new rt(V5, g14.multiply(-1), x9, g14, V5, x9, 0, 0, z7), _5 = a8.multiply(l10).multiply(P9).multiply(4 / 3), I4 = T6.multiply(_5), O3 = this.animationInfo.toScreen.multiply(new Y(t8, 1)), C8 = j6.multiply(O3).xy, M3 = I4.multiply(new Y(r9, 0)).xy;
    return C8.add(M3);
  }
  _clip(i8, e9) {
    let o16 = super.clip(i8, e9);
    const a8 = _t(this._getLocalTimeOrigin(i8), new C2(0));
    return t3.forceGlobalTimeOrigin || (o16 = o16.add(Tt([a8, () => new C2(2)], [true, () => new C2(0)]))), o16;
  }
  _getLocalTimeOrigin(i8) {
    return this.storage.getLocalTimeOrigin(i8);
  }
  _toNdc(i8) {
    return this.animationInfo.toNdc.multiply(new Y(i8, 1)).xy;
  }
  _getEvalParams(i8, t8, e9) {
    const { globalTime: o16, animationTextureSize: a8, animationTexture: r9 } = this.animationInfo;
    return { globalTime: o16, localTimeOrigin: this._getLocalTimeOrigin(i8.id), animationTextureSize: a8, animationTexture: r9, pixelDimensions: t8, lineLength: e9 };
  }
  _getColor(i8, t8) {
    return zt(Ct(t8.isSDF, new C2(1)), this._getSDFColor(i8, t8), this._getSpriteColor(i8, t8));
  }
  _getSpriteColor(i8, t8) {
    return wn(this.mosaicInfo.texture, i8).multiply(t8.color);
  }
  _getSDFColor(i8, t8) {
    const e9 = wn(this.mosaicInfo.texture, i8), o16 = new C2(0.5).subtract(C4(e9)).multiply(t8.distanceToPx).multiply(p), a8 = se(new C2(0.5).subtract(o16), new C2(0), new C2(1)), r9 = t8.color.multiply(a8), s11 = t8.outlineSize.multiply(0.5), n17 = Qt(o16).subtract(s11), p9 = se(new C2(0.5).subtract(n17), new C2(0), new C2(1)), u19 = t8.outlineColor.multiply(p9);
    return new C2(1).subtract(u19.a).multiply(r9).add(u19);
  }
};
function J3(i8, t8, o16) {
  const a8 = i8.add(new X(t8, 0)), r9 = wn(o16.animationTexture, a8.add(0.5).divide(o16.animationTextureSize)).xy;
  return i8 = i8.add(r9), xt(__spreadValues({ animationPointer: i8 }, o16), _3, null, (i9) => {
    const { out: t9 } = i9;
    if (!t9) throw new Error("out is null");
    return g(__spreadProps(__spreadValues({}, i9), { out: t9 }));
  });
}
__decorate([m5(s6)], H2.prototype, "mosaicInfo", void 0), __decorate([m5(d2)], H2.prototype, "animationInfo", void 0), __decorate([m5(n4)], H2.prototype, "localTileOffset", void 0), __decorate([g3(f4)], H2.prototype, "visualVariableColor", void 0), __decorate([g3(h4)], H2.prototype, "visualVariableOpacity", void 0), __decorate([g3(m6)], H2.prototype, "visualVariableSizeMinMaxValue", void 0), __decorate([g3(u5)], H2.prototype, "visualVariableSizeScaleStops", void 0), __decorate([g3(f5)], H2.prototype, "visualVariableSizeStops", void 0), __decorate([g3(s7)], H2.prototype, "visualVariableSizeUnitValue", void 0), __decorate([g3(g5)], H2.prototype, "visualVariableRotation", void 0);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AAnimatedPolyShader.js
var v2 = class extends W2 {
};
__decorate([f3(9, _3)], v2.prototype, "tlbr", void 0), __decorate([f3(10, C2)], v2.prototype, "angle", void 0);
var S2 = class extends x {
};
__decorate([f3(13, X)], S2.prototype, "nextPos1", void 0), __decorate([f3(14, X)], S2.prototype, "nextPos2", void 0);
var g6 = class extends q3 {
};
var f6 = class extends H2 {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
  _fragmentPoly(t8) {
    const e9 = Ge(t8.uv, new C2(1)), o16 = _e(t8.tlbr.xy, t8.tlbr.zw, e9);
    return this._getColor(o16, { color: t8.color, distanceToPx: t8.distanceToPx, isSDF: t8.isSDF, outlineColor: t8.outlineColor, outlineSize: t8.strokeWidth });
  }
  _vertexPoly(t8) {
    const { position: e9, animationPointer: o16, evalParams: s11, isOutline: m13, unscaledDistanceToPx: p9, vvScale: u19, strokeWidth: b7, scaleSymbolsProportionally: v7, scale: S7, isSDF: g14, baseSize: f15, clip: w6 } = this._vertexPreamble(t8, new C2(0), t8.lineLength || new C2(0)), k7 = this._toNdc(e9);
    let j6 = J3(o16, 1, s11);
    j6 = new _3(j6.rgb.multiply(j6.a), j6.a);
    let z7 = zt(k(t8.bitset, o5.bitset.colorLocked), j6, J3(o16, 2, s11));
    z7 = new _3(z7.rgb.multiply(z7.a), z7.a);
    let D7 = J3(o16, 3, s11);
    D7 = new _3(D7.rgb.multiply(D7.a), D7.a);
    const T6 = J3(o16, 4, s11).a, _5 = J3(o16, 5, s11).a, C8 = r7(this, t8.id, j6, At(k(t8.bitset, o5.bitset.colorLocked), new J2(m13))), F10 = _e(C8, z7, D7), A8 = n5(this, t8.id), L4 = _e(A8, T6, _5), W4 = F10.multiply(L4), O3 = this.clip(t8.id, t8.zoomRange).add(w6.multiply(2)), G7 = p9.multiply(u19);
    return { unscaledDistanceToPx: p9, vvScale: u19, strokeWidth: b7, scaleSymbolsProportionally: v7, scale: S7, isSDF: g14, baseSize: f15, ndc: k7, color: W4, z: O3, isOutline: m13, evalParams: s11, distanceToPx: G7 };
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/hittestUtils.js
function v3(t8, u19) {
  return we(t8, Ae(u19));
}
function j(i8, y6, s11) {
  const l10 = s11.subtract(y6), c7 = v3(i8.subtract(y6), l10), e9 = se(c7.divide(je(l10)), new C2(0), new C2(1));
  return ye(i8, y6.add(e9.multiply(s11.subtract(y6))));
}
function g7(t8) {
  const n17 = Qt(t8);
  return ln(n17.x.add(n17.y).add(n17.z), new C2(1.05));
}
function h5(t8, n17, r9, y6) {
  const s11 = new rt(r9.x.multiply(y6.y).subtract(y6.x.multiply(r9.y)), y6.x.multiply(n17.y).subtract(n17.x.multiply(y6.y)), n17.x.multiply(r9.y).subtract(r9.x.multiply(n17.y)), r9.y.subtract(y6.y), y6.y.subtract(n17.y), n17.y.subtract(r9.y), y6.x.subtract(r9.x), n17.x.subtract(y6.x), r9.x.subtract(n17.x)), l10 = n17.x.multiply(r9.y.subtract(y6.y)), c7 = r9.x.multiply(y6.y.subtract(n17.y)), e9 = y6.x.multiply(n17.y.subtract(r9.y)), o16 = l10.add(c7).add(e9);
  return new C2(1).divide(o16).multiply(s11.multiply(new Y(1, t8)));
}
function M(t8, n17, r9, i8) {
  return Ct(g7(h5(t8, n17, r9, i8)), new C2(1));
}
function P3(t8, n17, r9, i8) {
  const a8 = r9.subtract(n17), o16 = i8.subtract(n17), p9 = z2(a8, o16), x9 = Lt(Yt(p9, new C2(g2)), Gt(p9, new C2(-g2)));
  return Tt([Lt(Ve(x9), M(t8.xy, n17, r9, i8)), new C2(-1)], [true, () => {
    const u19 = j(t8, n17, r9), y6 = j(t8, r9, i8), s11 = j(t8, i8, n17);
    return Ye(Ye(u19, y6), s11);
  }]);
}
function q4(t8) {
  return t8.distance.add(1);
}
function z3(t8, u19, n17) {
  const { viewMat3: r9, tileMat3: y6 } = t8.view, s11 = r9.multiply(y6), l10 = s11.multiply(new Y(u19.pos, 1)), c7 = s11.multiply(new Y(n17.nextPos1, 1)), e9 = s11.multiply(new Y(n17.nextPos2, 1));
  return P3(t8.hittestRequest.position, l10.xy, c7.xy, e9.xy);
}
function R2(t8, u19, n17) {
  return ye(t8, n17).subtract(u19);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/FillShader.js
var g8 = class extends S {
};
__decorate([f3(3, _3)], g8.prototype, "color", void 0), __decorate([f3(4, X)], g8.prototype, "zoomRange", void 0);
var x3 = class extends B4 {
  constructor() {
    super(...arguments), this.type = "FillShader", this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
  vertex(t8, o16) {
    const r9 = n5(this, t8.id), e9 = r7(this, t8.id, t8.color).multiply(r9), i8 = this.view.displayViewScreenMat3.multiply(new Y(t8.pos.xy, 1)), p9 = this.clip(t8.id, t8.zoomRange);
    return __spreadValues({ glPosition: new _3(i8.xy, p9, 1), color: e9 }, this.maybeRunHittest(t8, o16, null));
  }
  fragment(t8) {
    return this.getFragmentOutput(t8.color, t8, new C2(0));
  }
  hittest(t8, o16) {
    return z3(this, t8, o16);
  }
};
__decorate([g3(f4)], x3.prototype, "visualVariableColor", void 0), __decorate([g3(h4)], x3.prototype, "visualVariableOpacity", void 0), __decorate([__param(0, l2(g8)), __param(1, l2(q2))], x3.prototype, "vertex", null), __decorate([__param(0, l2(P2))], x3.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ComplexFillShader.js
var G2 = class extends g8 {
};
__decorate([f3(5, _3)], G2.prototype, "tlbr", void 0), __decorate([f3(6, C2)], G2.prototype, "width", void 0), __decorate([f3(7, C2)], G2.prototype, "height", void 0), __decorate([f3(8, X)], G2.prototype, "offset", void 0), __decorate([f3(9, X)], G2.prototype, "scale", void 0), __decorate([f3(10, C2)], G2.prototype, "angle", void 0);
var L = class extends P2 {
};
function P4(t8, e9, o16, i8, r9) {
  const l10 = Ct(h3(r9, A), st(1)), f15 = C4(new _3(t8, 0));
  return zt(l10, ft(i8.divide(e9.x), o16.divide(e9.y), 0, gt(o16.divide(e9.x)), i8.divide(e9.y), 0, w2(ot(f15, 0)), w2(ot(0, f15)), 1), ft(i8.divide(e9.x), o16.divide(e9.y), 0, gt(o16.divide(e9.x)), i8.divide(e9.y), 0, 0, 0, 1));
}
function Z(t8, e9) {
  const o16 = t8.view.requiredZoomFactor, i8 = new X(e9.width, e9.height), r9 = i8.multiply(e9.scale).multiply(o16), s11 = e9.angle.multiply(o6), p9 = un(s11), n17 = oe(s11), d8 = P4(e9.id, r9, p9, n17, e9.bitset), m13 = t8.localTileOffset.getPatternOffsetAtTileOrigin(i8, p9, n17), u19 = o16.multiply(e9.scale).multiply(e9.offset.subtract(m13)).divide(r9), x9 = new Y(e9.pos, 1), h10 = d8.multiply(x9).xy.subtract(u19), g14 = e9.tlbr.divide(t8.mosaicInfo.size.xyxy);
  let b7 = h3(e9.bitset, u3);
  return null != t8.visualVariableColor && (b7 = zt(x2(t8.storage.getColorValue(e9.id)), new C2(0), b7)), { tileTextureCoord: h10, tlbr: g14, sampleAlphaOnly: b7 };
}
function k2(t8, e9) {
  const o16 = Ge(e9.tileTextureCoord, new C2(1)), i8 = _e(e9.tlbr.xy, e9.tlbr.zw, o16);
  let r9 = wn(t8.mosaicInfo.texture, i8);
  return r9 = zt(Gt(e9.sampleAlphaOnly, new C2(0.5)), r9.aaaa, r9), e9.color.multiply(r9);
}
var B5 = class extends x3 {
  constructor() {
    super(...arguments), this.type = "ComplexFillShader";
  }
  vertex(t8, e9) {
    return __spreadValues(__spreadValues({}, super.vertex(t8, e9)), Z(this, t8));
  }
  fragment(t8) {
    const e9 = k2(this, t8);
    return this.getFragmentOutput(e9, t8, new C2(0));
  }
};
__decorate([m5(s6)], B5.prototype, "mosaicInfo", void 0), __decorate([m5(n4)], B5.prototype, "localTileOffset", void 0), __decorate([__param(0, l2(G2)), __param(1, l2(q2))], B5.prototype, "vertex", null), __decorate([__param(0, l2(L))], B5.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedFillShader.js
var f7 = class extends f6 {
  constructor() {
    super(...arguments), this.type = "AnimatedFillShader";
  }
  vertex(t8, e9) {
    const { distanceToPx: i8, ndc: m13, z: p9, color: u19, isOutline: d8, strokeWidth: c7, isSDF: f15, scale: g14, scaleSymbolsProportionally: x9 } = this._vertexPoly(t8), b7 = this.view.requiredZoomFactor, P9 = t8.sizing.xy, v7 = P9.multiply(b7), S7 = t8.angle ? t8.angle.multiply(o6) : new C2(0), j6 = un(S7), w6 = oe(S7), F10 = P4(t8.id, v7, j6, w6, t8.bitset), O3 = this.localTileOffset.getPatternOffsetAtTileOrigin(P9, j6, w6), A8 = b7.multiply(t8.offset.subtract(O3)).divide(v7), T6 = new Y(t8.pos, 1), z7 = F10.multiply(T6).xy.subtract(A8), k7 = t8.tlbr.divide(this.mosaicInfo.size.xyxy);
    return __spreadValues({ glPosition: new _3(m13, p9, 1), tlbr: k7, uv: z7, color: u19.multiply(new C2(1).subtract(d8)), outlineColor: u19.multiply(d8), distanceToPx: i8, strokeWidth: c7.multiply(_e(new C2(1), g14, x9)), isOutline: d8, isSDF: f15 }, this.maybeRunHittest(t8, e9, {}));
  }
  fragment(t8) {
    const e9 = this._fragmentPoly(t8);
    return this.getFragmentOutput(e9, t8);
  }
  hittest(t8, e9, i8) {
    return z3(this, t8, e9);
  }
};
__decorate([__param(0, l2(v2)), __param(1, l2(S2))], f7.prototype, "vertex", null), __decorate([__param(0, l2(g6))], f7.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/LineShader.js
var q5 = class extends S {
};
__decorate([f3(3, _3)], q5.prototype, "color", void 0), __decorate([f3(4, X)], q5.prototype, "offset", void 0), __decorate([f3(5, X)], q5.prototype, "normal", void 0), __decorate([f3(6, C2)], q5.prototype, "halfWidth", void 0), __decorate([f3(7, C2)], q5.prototype, "referenceHalfWidth", void 0), __decorate([f3(8, X)], q5.prototype, "zoomRange", void 0);
var A3 = class extends P2 {
};
var F2 = class extends w {
};
function D4(t8) {
  return Xe(new C2(r4).multiply(ln(t8, new C2(s2))), new C2(1));
}
function G3(t8, i8) {
  const { halfWidth: e9, normal: o16 } = t8, l10 = D4(e9), a8 = je(o16).multiply(e9);
  return se(l10.multiply(e9.subtract(a8)).divide(i8.add(l10).subtract(new C2(1))), new C2(0), new C2(1));
}
function L2(t8, i8) {
  const { id: e9, halfWidth: o16, referenceHalfWidth: l10 } = i8;
  if (t4(t8)) {
    const i9 = new C2(2).multiply(l10), a8 = l3(t8, e9, i9);
    return new C2(0.5).multiply(o16.divide(Xe(l10, new C2(f)))).multiply(a8);
  }
  return o16;
}
function T2(t8, i8) {
  const { id: e9, offset: o16, pos: l10, normal: a8, zoomRange: r9 } = i8, { displayViewScreenMat3: p9, displayViewMat3: u19 } = t8.view, m13 = r7(t8, e9, i8.color), f15 = n5(t8, e9), h10 = L2(t8, i8), v7 = new C2(0.5).multiply(t8.antialiasingControls.antialiasing), w6 = Xe(h10.add(v7), new C2(0.45)).add(new C2(0.1).multiply(v7)), V5 = D4(w6).multiply(w6).multiply(o16), b7 = u19.multiply(new Y(V5, new C2(0))), S7 = p9.multiply(new Y(l10, new C2(1))).add(b7), x9 = new C2(2).multiply(ln(h10, new C2(0))).add(t8.clip(e9, r9)), g14 = new _3(S7.xy, x9, 1);
  return { color: m13, opacity: f15, halfWidth: w6, normal: a8, scaledOffset: V5, scaledHalfWidth: h10, glPosition: new _3(g14.xy, x9, 1) };
}
function k3(t8, i8) {
  const { opacity: e9, color: o16 } = t8, l10 = G3(t8, i8);
  return e9.multiply(o16).multiply(l10);
}
__decorate([m5(C2)], F2.prototype, "antialiasing", void 0), __decorate([m5(C2)], F2.prototype, "blur", void 0);
var B6 = class extends B4 {
  constructor() {
    super(...arguments), this.type = "LineShader", this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
  vertex(t8, i8) {
    const e9 = T2(this, t8);
    return __spreadValues(__spreadValues({}, e9), this.maybeRunHittest(t8, i8, e9.halfWidth));
  }
  fragment(t8) {
    const i8 = k3(t8, this.antialiasingControls.blur);
    return this.getFragmentOutput(i8, t8);
  }
  hittest(t8, i8, e9) {
    const { viewMat3: o16, tileMat3: l10 } = this.view, a8 = o16.multiply(l10), r9 = a8.multiply(new Y(t8.pos, 1)), u19 = a8.multiply(new Y(i8.nextPos1, 1)), m13 = a8.multiply(new Y(i8.nextPos2, 1)), { distance: d8, smallSymbolDistance: y6, smallSymbolSizeThreshold: c7 } = this.hittestRequest, f15 = ln(e9, c7.multiply(0.5)).multiply(d8.subtract(y6)), h10 = this.hittestRequest.position;
    return Ye(j(h10, r9.xy, u19.xy), j(h10, r9.xy, m13.xy)).subtract(e9).add(f15);
  }
};
__decorate([m5(F2)], B6.prototype, "antialiasingControls", void 0), __decorate([g3(f4)], B6.prototype, "visualVariableColor", void 0), __decorate([g3(h4)], B6.prototype, "visualVariableOpacity", void 0), __decorate([g3(m6)], B6.prototype, "visualVariableSizeMinMaxValue", void 0), __decorate([g3(u5)], B6.prototype, "visualVariableSizeScaleStops", void 0), __decorate([g3(f5)], B6.prototype, "visualVariableSizeStops", void 0), __decorate([g3(s7)], B6.prototype, "visualVariableSizeUnitValue", void 0), __decorate([__param(0, l2(q5)), __param(1, l2(q2))], B6.prototype, "vertex", null), __decorate([__param(0, l2(A3))], B6.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedLineShader.js
var A4 = class extends v2 {
};
__decorate([f3(10, C2)], A4.prototype, "accumulatedDistance", void 0), __decorate([f3(11, X)], A4.prototype, "normal", void 0), __decorate([f3(12, X)], A4.prototype, "segmentDirection", void 0);
var D5 = class extends g6 {
};
var j2 = class extends f6 {
  constructor() {
    super(...arguments), this.type = "AnimatedLineShader";
  }
  vertex(t8, i8) {
    const { animationPointerAndBaseSizeAndReferenceSize: e9 } = t8, s11 = e9.xy, { distanceToPx: l10, ndc: p9, z: u19, color: y6, isOutline: c7, strokeWidth: h10, isSDF: x9, baseSize: v7, scale: f15, scaleSymbolsProportionally: w6, evalParams: g14 } = this._vertexPoly(t8), S7 = t8.sizing.xy, P9 = S7.x.multiply(v7).divide(S7.y), z7 = J3(s11, 6, g14).a, A8 = t8.accumulatedDistance.subtract(z7), { normal: D7 } = t8, j6 = t8.normal.y, C8 = A8.divide(this.view.displayZoomFactor).add(we(t8.segmentDirection, t8.offset)).divide(P9), F10 = j6.add(1).divide(2), R8 = new X(C8, F10), W4 = t8.tlbr.divide(this.mosaicInfo.size.xyxy), M3 = v7.divide(2), O3 = new C2(0.5).multiply(this.antialiasingControls.antialiasing), T6 = Xe(M3.add(O3), new C2(0.45)).add(new C2(0.1).multiply(O3));
    return __spreadValues({ glPosition: new _3(p9, u19, 1), tlbr: W4, uv: R8, color: y6.multiply(new C2(1).subtract(c7)), outlineColor: y6.multiply(c7), distanceToPx: l10, strokeWidth: h10.multiply(_e(new C2(1), f15, w6)), isOutline: c7, isSDF: x9, halfWidth: T6, normal: D7 }, this.maybeRunHittest(t8, i8, T6));
  }
  fragment(t8) {
    const i8 = this._fragmentPoly(t8), e9 = G3(t8, this.antialiasingControls.blur), { halfWidth: s11, normal: l10 } = t8, o16 = D4(s11), a8 = je(l10).multiply(s11), r9 = se(o16.multiply(s11.subtract(a8)).divide(o16.subtract(new C2(1))), new C2(0), new C2(1));
    return this.getFragmentOutput(i8.multiply(r9).multiply(e9), t8);
  }
  hittest(t8, i8, e9) {
    const { viewMat3: s11, tileMat3: l10 } = this.view, o16 = s11.multiply(l10), a8 = o16.multiply(new Y(t8.pos, 1)), n17 = o16.multiply(new Y(i8.nextPos1, 1)), r9 = o16.multiply(new Y(i8.nextPos2, 1)), { distance: d8, smallSymbolDistance: m13, smallSymbolSizeThreshold: p9 } = this.hittestRequest, u19 = ln(e9, p9.multiply(0.5)).multiply(d8.subtract(m13)), x9 = this.hittestRequest.position;
    return Ye(j(x9, a8.xy, n17.xy), j(x9, a8.xy, r9.xy)).subtract(e9).add(u19);
  }
};
__decorate([m5(F2)], j2.prototype, "antialiasingControls", void 0), __decorate([__param(0, l2(A4)), __param(1, l2(S2))], j2.prototype, "vertex", null), __decorate([__param(0, l2(D5))], j2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedMarkerShader.js
var R3 = class extends W2 {
};
__decorate([f3(9, X)], R3.prototype, "uv", void 0), __decorate([f3(10, C2)], R3.prototype, "angle", void 0);
var F3 = class extends x {
};
__decorate([f3(11, X)], F3.prototype, "offsetNextVertex1", void 0), __decorate([f3(12, X)], F3.prototype, "offsetNextVertex2", void 0), __decorate([f3(13, X)], F3.prototype, "textureUVNextVertex1", void 0), __decorate([f3(14, X)], F3.prototype, "textureUVNextVertex2", void 0);
var j3 = class extends q3 {
};
function T3(t8, e9, i8, s11) {
  return e9.multiply(t8.x).add(i8.multiply(t8.y)).add(s11.multiply(t8.z));
}
var U3 = class extends H2 {
  constructor() {
    super(...arguments), this.type = "AnimatedMarkerShader", this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"], uv: ["textureUVNextVertex1", "textureUVNextVertex2"] };
  }
  vertex(t8, e9) {
    const i8 = t8.uv.divide(this.mosaicInfo.size), { position: s11, animationPointer: o16, evalParams: l10, isOutline: h10, unscaledDistanceToPx: x9, vvScale: c7, strokeWidth: y6, scaleSymbolsProportionally: f15, scale: w6, isSDF: g14, baseSize: v7, clip: b7 } = this._vertexPreamble(t8, t8.angle, t8.lineLength || new C2(0)), _5 = this._toNdc(s11);
    let z7 = J3(o16, 1, l10);
    z7 = new _3(z7.rgb.multiply(z7.a), z7.a);
    let C8 = zt(k(t8.bitset, o5.bitset.colorLocked), z7, J3(o16, 2, l10));
    C8 = new _3(C8.rgb.multiply(C8.a), C8.a);
    let P9 = J3(o16, 3, l10);
    P9 = new _3(P9.rgb.multiply(P9.a), P9.a);
    const N3 = J3(o16, 4, l10).a, R8 = J3(o16, 5, l10).a, F10 = r7(this, t8.id, z7, At(k(t8.bitset, o5.bitset.colorLocked), new J2(h10))), j6 = _e(F10, C8, P9), T6 = n5(this, t8.id), U4 = _e(T6, N3, R8), q7 = j6.multiply(U4), A8 = this.clip(t8.id, t8.zoomRange).add(b7.multiply(2)), I4 = x9.multiply(c7);
    return __spreadValues({ glPosition: new _3(_5, A8, 1), uv: i8, color: q7.multiply(new C2(1).subtract(h10)), outlineColor: q7.multiply(h10), distanceToPx: I4, strokeWidth: y6.multiply(_e(new C2(1), w6, f15)), isOutline: h10, isSDF: g14 }, this.maybeRunHittest(t8, e9, { pos: t8.pos, size: v7, sizeCorrection: new C2(1), isMapAligned: new C2(1), vvRotationMat3: new rt(1, 0, 0, 0, 1, 0, 0, 0, 1), placementMat3: new rt(1, 0, 0, 0, 1, 0, 0, 0, 1), outlineSize: new C2(1), distanceToPx: I4, isSDF: g14 }));
  }
  fragment(t8) {
    let e9 = this._getColor(t8.uv, { color: t8.color, distanceToPx: t8.distanceToPx, isSDF: t8.isSDF, outlineColor: t8.outlineColor, outlineSize: t8.strokeWidth });
    return t3.spotlightAnimatedSymbols && (e9 = e9.add(new _3(0, 0.3, 0, 0.3))), this.getFragmentOutput(e9, t8);
  }
  hittest(t8, e9, i8) {
    return zt(Yt(i8.size, this.hittestRequest.smallSymbolSizeThreshold), this._hittestSmallMarker(t8, e9, i8), this._hittestMarker(t8, e9, i8));
  }
  _hittestSmallMarker(t8, e9, i8) {
    const { position: s11, distance: o16, smallSymbolDistance: l10 } = this.hittestRequest, r9 = o16.subtract(l10), { viewMat3: a8, tileMat3: n17 } = this.view, d8 = a8.multiply(n17).multiply(new Y(i8.pos, 1)).xy, m13 = i8.size.multiply(0.5);
    return ye(d8, s11).subtract(m13).add(r9);
  }
  _hittestMarker(t8, e9, i8) {
    const s11 = this._vertexPreamble(__spreadValues({}, t8), t8.angle, new C2(0)).position, o16 = this._vertexPreamble(__spreadProps(__spreadValues({}, t8), { offset: e9.offsetNextVertex1 }), t8.angle, new C2(0)).position, l10 = this._vertexPreamble(__spreadProps(__spreadValues({}, t8), { offset: e9.offsetNextVertex2 }), t8.angle, new C2(0)).position, a8 = this.hittestRequest.position, d8 = this.hittestRequest.distance, m13 = P3(a8, s11, o16, l10);
    return zt(Gt(m13, d8), m13, this._hittestSamples(s11, o16, l10, t8, e9, i8));
  }
  _hittestSamples(t8, e9, i8, s11, o16, l10) {
    const { outlineSize: n17, isSDF: d8, distanceToPx: m13 } = l10, u19 = this.hittestRequest.position, p9 = this.hittestRequest.distance, h10 = h5(u19.add(new X(gt(p9), gt(p9))), t8, e9, i8), x9 = h5(u19.add(new X(0, gt(p9))), t8, e9, i8), c7 = h5(u19.add(new X(p9, gt(p9))), t8, e9, i8), y6 = h5(u19.add(new X(gt(p9), 0)), t8, e9, i8), v7 = h5(u19, t8, e9, i8), S7 = h5(u19.add(new X(p9, 0)), t8, e9, i8), b7 = h5(u19.add(new X(gt(p9), p9)), t8, e9, i8), _5 = h5(u19.add(new X(0, p9)), t8, e9, i8), V5 = h5(u19.add(new X(p9, p9)), t8, e9, i8), z7 = s11.uv.divide(this.mosaicInfo.size), k7 = o16.textureUVNextVertex1.divide(this.mosaicInfo.size), M3 = o16.textureUVNextVertex2.divide(this.mosaicInfo.size), D7 = { color: new _3(1, 1, 1, 1), outlineSize: n17, outlineColor: new _3(1, 1, 1, 1), isSDF: d8, distanceToPx: m13 };
    let R8 = new C2(0);
    return R8 = R8.add(g7(h10).multiply(this._getColor(T3(h10, z7, k7, M3), D7).a)), R8 = R8.add(g7(x9).multiply(this._getColor(T3(x9, z7, k7, M3), D7).a)), R8 = R8.add(g7(c7).multiply(this._getColor(T3(c7, z7, k7, M3), D7).a)), R8 = R8.add(g7(y6).multiply(this._getColor(T3(y6, z7, k7, M3), D7).a)), R8 = R8.add(g7(v7).multiply(this._getColor(T3(v7, z7, k7, M3), D7).a)), R8 = R8.add(g7(S7).multiply(this._getColor(T3(S7, z7, k7, M3), D7).a)), R8 = R8.add(g7(b7).multiply(this._getColor(T3(b7, z7, k7, M3), D7).a)), R8 = R8.add(g7(_5).multiply(this._getColor(T3(_5, z7, k7, M3), D7).a)), R8 = R8.add(g7(V5).multiply(this._getColor(T3(V5, z7, k7, M3), D7).a)), ln(R8, new C2(0.05)).multiply(q4(this.hittestRequest));
  }
};
__decorate([__param(0, l2(R3)), __param(1, l2(F3))], U3.prototype, "vertex", null), __decorate([__param(0, l2(j3))], U3.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/FeatureTechnique.js
var t5 = class extends s4 {
  constructor() {
    super(...arguments), this.symbologyPlane = 0, this._input = null;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/utils.js
function n6(n17) {
  const t8 = 1 / n17;
  return { antialiasing: t8, blur: 0 + t8 };
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedTechnique.js
var f8 = class extends t5 {
  render(o16, f15) {
    const { context: g14, painter: p9, pixelRatio: d8 } = o16, { target: x9 } = f15, { freezeGlobalTime: b7 } = t3, h10 = 0, D7 = p9.textureManager.animationStore.getTexture(g14, h10), T6 = [2 / o16.state.size[0], 0, 0, 0, -2 / o16.state.size[1], 0, -1, 1, 1], R8 = Array.from(s(e4(), T6)), j6 = Array.from(i(e4(), R8, x9.transforms.displayViewScreenMat3)), y6 = f15.instance.getInput(), z7 = p9.textureManager.getMosaicInfo(o16, f15.textureKey, false), { optionalAttributes: S7 } = y6, A8 = S7.zoomRange, I4 = S7.value1Position2Value2, M3 = "accumulatedDistance" in S7 && S7.accumulatedDistance, q7 = "segmentDirection" in S7 && S7.segmentDirection, w6 = "normal" in S7 && S7.normal;
    p9.setShader({ shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(o16, f15.target, y6.uniforms)), f2(o16, f15.target)), { antialiasingControls: n6(d8), mosaicInfo: z7, animationInfo: { globalTime: o16.animationsEnabled ? false === b7 ? o16.time / 1e3 : b7 : 0, animationTextureSize: [D7.descriptor.width, D7.descriptor.height], animationTexture: { unit: 6, texture: D7 }, toScreen: j6, toNdc: T6, mapRotation: o16.state.rotation, pixelRatio: o16.state.pixelRatio }, localTileOffset: h2(f15.target) }), defines: __spreadValues({}, d(o16)), optionalAttributes: { zoomRange: A8, value1Position2Value2: I4, accumulatedDistance: M3, segmentDirection: q7, normal: w6 }, useComputeBuffer: a(o16) }), p9.setPipelineState(__spreadValues({}, m3(o16))), p9.submitDraw(o16, f15), false === b7 && o16.animationsEnabled && x9.requestRender();
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/animated/AnimatedTechniques.js
var o8 = class extends f8 {
  constructor() {
    super(...arguments), this.type = 2, this.symbologyPlane = 2, this.shaders = { geometry: new U3() };
  }
};
var i5 = class extends f8 {
  constructor() {
    super(...arguments), this.type = 3, this.symbologyPlane = 2, this.shaders = { geometry: new U3() };
  }
};
var n7 = class extends f8 {
  constructor() {
    super(...arguments), this.type = 0, this.symbologyPlane = 0, this.shaders = { geometry: new f7() };
  }
};
var a2 = class extends f8 {
  constructor() {
    super(...arguments), this.type = 1, this.symbologyPlane = 1, this.shaders = { geometry: new j2() };
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityPointShader.js
var z4 = class extends C3 {
};
__decorate([f3(0, X)], z4.prototype, "pos", void 0);
var P5 = class extends P2 {
};
var R4 = class extends w {
};
__decorate([m5(C2)], R4.prototype, "dotSize", void 0);
var b = class extends w {
};
__decorate([m5(U2)], b.prototype, "locations", void 0), __decorate([m5(C2)], b.prototype, "pixelRatio", void 0), __decorate([m5(C2)], b.prototype, "tileZoomFactor", void 0);
var F4 = 1e-6;
var C5 = class extends P {
  constructor() {
    super(...arguments), this.type = "DotDensityPointShader";
  }
  vertex(t8) {
    const o16 = new rt(1, 0, 0, 0, -1, 0, 0, 1, 1).multiply(new Y(t8.pos.xy.divide(o2), 1)), i8 = wn(this.draw.locations, o16.xy), r9 = Xe(this.instance.dotSize.divide(2), new C2(1));
    let s11 = new C2(0);
    s11 = s11.add(ln(i8.a, new C2(F4)).multiply(2));
    let d8 = r9.add(this.instance.dotSize);
    const n17 = this.view.displayViewScreenMat3.multiply(new Y(t8.pos.add(0.5), 1)), p9 = new _3(n17.xy, s11, 1), l10 = this.instance.dotSize.divide(d8), h10 = new C2(-1).divide(r9.divide(d8));
    return d8 = d8.multiply(this.draw.pixelRatio.multiply(this.draw.tileZoomFactor)), { glPosition: p9, glPointSize: d8, color: i8, ratio: l10, invEdgeRatio: h10 };
  }
  fragment(t8) {
    const o16 = je(t8.glPointCoord.subtract(0.5)).multiply(2), e9 = on(new C2(0), new C2(1), t8.invEdgeRatio.multiply(o16.subtract(t8.ratio)).add(1)), i8 = new v();
    return i8.fragColor = t8.color.multiply(e9), i8;
  }
};
__decorate([m5(R4)], C5.prototype, "instance", void 0), __decorate([m5(b)], C5.prototype, "draw", void 0), __decorate([m5(d3)], C5.prototype, "view", void 0), __decorate([__param(0, l2(z4))], C5.prototype, "vertex", null), __decorate([__param(0, l2(P5))], C5.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityPolygonShader.js
var j4 = class extends S {
};
__decorate([f3(3, C2)], j4.prototype, "inverseArea", void 0);
var V2 = class extends w {
};
__decorate([m5(B2.ofType(_3, 2))], V2.prototype, "isActive", void 0), __decorate([m5(B2.ofType(_3, 8))], V2.prototype, "colors", void 0), __decorate([m5(C2)], V2.prototype, "dotValue", void 0);
var F5 = class extends w {
};
__decorate([m5(U2)], F5.prototype, "dotTexture0", void 0), __decorate([m5(U2)], F5.prototype, "dotTexture1", void 0), __decorate([m5(C2)], F5.prototype, "tileZoomFactor", void 0), __decorate([m5(C2)], F5.prototype, "pixelRatio", void 0), __decorate([m5(C2)], F5.prototype, "tileDotsOverArea", void 0);
var O = class extends B4 {
  constructor() {
    super(...arguments), this.type = "DotDensityPolygonShader";
  }
  _dotThreshold(t8, e9, o16) {
    return t8.divide(e9).divide(o16);
  }
  vertex(t8) {
    const e9 = new rt(2 / o2, 0, 0, 0, -2 / o2, 0, -1, 1, 1).multiply(new Y(t8.pos, 1)), s11 = this.clip(t8.id), i8 = new _3(e9.xy, s11, 1), r9 = this.storage.getVVData(t8.id).multiply(this.instance.isActive.get(0)).multiply(t8.inverseArea), l10 = this.storage.getDataDrivenData0(t8.id).multiply(this.instance.isActive.get(1)).multiply(t8.inverseArea), d8 = this.draw.tileZoomFactor.multiply(o2).divide(this.draw.pixelRatio), n17 = this._dotThreshold(r9, this.instance.dotValue, this.draw.tileDotsOverArea), c7 = this._dotThreshold(l10, this.instance.dotValue, this.draw.tileDotsOverArea), u19 = t8.pos.add(0.5).divide(d8);
    return { glPosition: i8, color: new _3(0, 0, 0, 0), textureCoords: u19, thresholds0: n17, thresholds1: c7 };
  }
  fragment(t8) {
    const e9 = new v(), o16 = wn(this.draw.dotTexture0, t8.textureCoords), i8 = wn(this.draw.dotTexture1, t8.textureCoords), r9 = t8.thresholds0.subtract(o16), l10 = t8.thresholds1.subtract(i8);
    let d8;
    const n17 = it.fromColumns(this.instance.colors[0], this.instance.colors[1], this.instance.colors[2], this.instance.colors[3]), a8 = it.fromColumns(this.instance.colors[4], this.instance.colors[5], this.instance.colors[6], this.instance.colors[7]);
    if (this.blending) {
      const t9 = ln(new C2(0), r9), e10 = ln(new C2(0), l10), o17 = we(t9, r9).add(we(e10, l10)), s11 = ln(o17, new C2(0)), i9 = new C2(1).subtract(s11), p9 = o17.add(s11), h10 = r9.multiply(t9).divide(p9), c7 = l10.multiply(e10).divide(p9), u19 = n17.multiply(h10).add(a8.multiply(c7));
      d8 = i9.multiply(u19);
    } else {
      const t9 = Xe(D3(r9), D3(l10)), e10 = ln(t9, new C2(0)), o17 = new C2(1).subtract(e10), s11 = ln(t9, r9), i9 = ln(t9, l10), p9 = n17.multiply(s11).add(a8.multiply(i9));
      d8 = o17.multiply(p9);
    }
    return e9.fragColor = d8, e9;
  }
  hittest(t8) {
    return q4(this.hittestRequest);
  }
};
__decorate([_4], O.prototype, "blending", void 0), __decorate([m5(V2)], O.prototype, "instance", void 0), __decorate([m5(F5)], O.prototype, "draw", void 0), __decorate([__param(0, l2(j4))], O.prototype, "vertex", null), __decorate([__param(0, l2(P2))], O.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityResources.js
var m7 = { pos: { count: 2, type: R.UNSIGNED_SHORT } };
var T4 = class {
  constructor() {
    this._dotTextureSize = 0, this._dotTextures = null, this._dotMesh = null;
  }
  destroy() {
    this._disposeTextures(), this._dotFBO && this._dotFBO.dispose(), this._dotMesh && this._dotMesh.destroy();
  }
  getFBO(t8) {
    if (null == this._dotFBO) {
      const s11 = o2, r9 = o2, i8 = new h(s11, r9);
      i8.samplingMode = 9728, i8.wrapMode = 33071;
      const n17 = new s3(t8, new i3(G.DEPTH24_STENCIL8, s11, r9));
      this._dotFBO = new m2(t8, i8, n17);
    }
    return this._dotFBO;
  }
  getDotDensityMesh(t8) {
    if (null == this._dotMesh) {
      const o16 = o2, r9 = o16 * o16, n17 = 2, d8 = new Int16Array(r9 * n17);
      for (let t9 = 0; t9 < o16; t9++) for (let e9 = 0; e9 < o16; e9++) d8[n17 * (e9 + t9 * o16)] = e9, d8[n17 * (e9 + t9 * o16) + 1] = t9;
      this._dotMesh = s5.create(t8, { primitive: _.POINTS, vertex: d8, count: r9, layout: m7 });
    }
    return this._dotMesh;
  }
  getDotDensityTextures(e9, s11, o16) {
    if (this._dotTextureSize === s11 && this._seed === o16 || (this._disposeTextures(), this._dotTextureSize = s11, this._seed = o16), null === this._dotTextures) {
      const r9 = new t(o16);
      this._dotTextures = [this._allocDotDensityTexture(e9, s11, r9), this._allocDotDensityTexture(e9, s11, r9)];
    }
    return this._dotTextures;
  }
  _disposeTextures() {
    if (this._dotTextures) {
      for (let t8 = 0; t8 < this._dotTextures.length; t8++) this._dotTextures[t8].dispose();
      this._dotTextures = null;
    }
  }
  _allocDotDensityTexture(t8, e9, s11) {
    const o16 = new Float32Array(e9 * e9 * 4);
    for (let i8 = 0; i8 < o16.length; i8++) o16[i8] = s11.getFloat();
    const r9 = new h(e9);
    return r9.dataType = N2.FLOAT, r9.samplingMode = 9728, new E3(t8, r9, o16);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityTechnique.js
var f9 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 12, this.shaders = { polygon: new O(), point: new C5(), fill: new x3() }, this._resources = /* @__PURE__ */ new Map();
  }
  render(e9, t8) {
    l(e9) || a(e9) ? this._renderPolygons(e9, t8) : this._renderDotDensity(e9, t8);
  }
  _renderPolygons(e9, t8) {
    const { painter: i8 } = e9;
    i8.setShader({ shader: this.shaders.fill, uniforms: __spreadProps(__spreadValues({}, f2(e9, t8.target)), { visualVariableColor: null, visualVariableOpacity: null }), defines: __spreadValues({}, d(e9)), optionalAttributes: { zoomRange: false }, useComputeBuffer: a(e9) }), i8.setPipelineState(m3(e9)), i8.submitDraw(e9, t8);
  }
  _renderDotDensity(o16, r9) {
    const { context: s11, painter: u19, requiredLevel: c7 } = o16, p9 = r9.instance.getInput().uniforms, h10 = this._getOrCreateResourcesRecord(s11), f15 = h10.getDotDensityTextures(s11, o2, p9.seed), m13 = 1 / 2 ** (c7 - r9.target.key.level), w6 = o2, g14 = w6 * window.devicePixelRatio * w6 * window.devicePixelRatio, x9 = 1 / m13 * (1 / m13), D7 = p9.dotScale ? o16.state.scale / p9.dotScale : 1, b7 = p9.dotValue * D7 * x9;
    u19.setShader({ shader: this.shaders.polygon, uniforms: __spreadProps(__spreadValues({}, f2(o16, r9.target)), { instance: { isActive: p9.isActive, colors: p9.colors, dotValue: Math.max(1, b7) }, draw: { dotTexture0: { unit: T, texture: f15[0] }, dotTexture1: { unit: U, texture: f15[1] }, tileZoomFactor: m13, pixelRatio: window.devicePixelRatio, tileDotsOverArea: g14 / (o2 * window.devicePixelRatio * o2 * window.devicePixelRatio) } }), defines: __spreadProps(__spreadValues({}, d(o16)), { blending: p9.blending }), optionalAttributes: {}, useComputeBuffer: false });
    const y6 = s11.getViewport();
    s11.setViewport(0, 0, o2, o2);
    const R8 = s11.getBoundFramebufferObject(), v7 = h10.getFBO(s11);
    s11.bindFramebuffer(v7), s11.setClearColor(0, 0, 0, 0), s11.clear(16384), u19.setPipelineState({ color: { write: [true, true, true, true], blendMode: "composite" }, depth: false, stencil: false }), u19.updatePipelineState(s11), u19.submitDraw(o16, r9), s11.bindFramebuffer(R8), s11.setViewport(y6.x, y6.y, y6.width, y6.height);
    const P9 = h10.getFBO(s11).colorTexture, S7 = { shader: this.shaders.point, uniforms: { view: r6(o16, r9.target), instance: { dotSize: p9.dotSize }, draw: { locations: { unit: T, texture: P9 }, tileZoomFactor: 1, pixelRatio: window.devicePixelRatio } }, defines: __spreadValues({}, d(o16)), optionalAttributes: {}, useComputeBuffer: false };
    u19.setPipelineState(m3(o16)), u19.submitDrawMesh(s11, S7, h10.getDotDensityMesh(s11), { stencilRef: r9.getStencilReference() });
  }
  shutdown(e9) {
    super.shutdown(e9), this._resources.get(e9)?.destroy(), this._resources.delete(e9);
  }
  _getOrCreateResourcesRecord(e9) {
    let t8 = this._resources.get(e9);
    return null == t8 && (t8 = new T4(), this._resources.set(e9, t8)), t8;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexFillTechnique.js
var u7 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 10, this.shaders = { geometry: new B5() };
  }
  render(e9, n17) {
    const { painter: u19 } = e9, m13 = n17.instance.getInput();
    u19.setShader({ shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(e9, n17.target, m13.uniforms)), f2(e9, n17.target)), { mosaicInfo: u19.textureManager.getMosaicInfo(e9, n17.textureKey), localTileOffset: h2(n17.target) }), defines: __spreadValues({}, d(e9)), optionalAttributes: m13.optionalAttributes, useComputeBuffer: a(e9) }), u19.setPipelineState(m3(e9)), u19.submitDraw(e9, n17);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/OutlineFillShader.js
var R5 = class extends S {
};
__decorate([f3(3, X)], R5.prototype, "offset", void 0), __decorate([f3(4, _3)], R5.prototype, "color", void 0), __decorate([f3(5, X)], R5.prototype, "normal", void 0), __decorate([f3(6, C2)], R5.prototype, "halfWidth", void 0), __decorate([f3(7, C2)], R5.prototype, "referenceHalfWidth", void 0), __decorate([f3(8, X)], R5.prototype, "zoomRange", void 0);
var A5 = class extends A3 {
};
function H3(t8, o16, i8) {
  const { id: e9, bitset: r9 } = o16, s11 = h3(r9, z), m13 = Gt(s11, new C2(0.5)), d8 = T2(t8, o16), c7 = zt(m13, d8.halfWidth, new C2(0)), f15 = n5(t8, e9), h10 = r7(t8, e9, o16.color), V5 = zt(m13, zt(k(r9, J), h10, o16.color), h10.multiply(f15)), S7 = t8.view.displayViewScreenMat3.multiply(new Y(o16.pos.xy, 1)), j6 = t8.clip(o16.id), x9 = new _3(S7.xy, j6, 1), z7 = zt(m13, d8.glPosition, x9), M3 = i8 && t8.maybeRunHittest(o16, i8, m13);
  return __spreadValues({ isOutline: s11, color: V5, opacity: new C2(1), halfWidth: c7, normal: d8.normal, glPosition: z7 }, M3);
}
var q6 = class extends B4 {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
};
__decorate([m5(F2)], q6.prototype, "antialiasingControls", void 0), __decorate([g3(f4)], q6.prototype, "visualVariableColor", void 0), __decorate([g3(h4)], q6.prototype, "visualVariableOpacity", void 0), __decorate([g3(m6)], q6.prototype, "visualVariableSizeMinMaxValue", void 0), __decorate([g3(u5)], q6.prototype, "visualVariableSizeScaleStops", void 0), __decorate([g3(f5)], q6.prototype, "visualVariableSizeStops", void 0), __decorate([g3(s7)], q6.prototype, "visualVariableSizeUnitValue", void 0);
var G4 = class extends q6 {
  constructor() {
    super(...arguments), this.type = "OutlineFillShader";
  }
  vertex(t8, o16) {
    return H3(this, t8, o16);
  }
  fragment(t8) {
    const { color: o16, isOutline: i8 } = t8, e9 = Gt(i8, new C2(0.5)), r9 = k3(t8, this.antialiasingControls.blur), s11 = zt(e9, r9, o16), n17 = zt(e9, new C2(1 / 255), new C2(0));
    return this.getFragmentOutput(s11, t8, n17);
  }
  hittest(t8, o16, i8) {
    return zt(i8, q4(this.hittestRequest), z3(this, t8, o16));
  }
};
__decorate([__param(0, l2(R5)), __param(1, l2(q2))], G4.prototype, "vertex", null), __decorate([__param(0, l2(A5))], G4.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/PatternFillShader.js
var w3 = class extends g8 {
};
__decorate([f3(5, _3)], w3.prototype, "tlbr", void 0), __decorate([f3(6, C2)], w3.prototype, "inverseRasterizationScale", void 0);
var g9 = class extends P2 {
};
function j5(t8) {
  const e9 = new C2(1), r9 = new C2(0);
  return new rt(e9.divide(t8.x), r9.divide(t8.y), 0, gt(r9.divide(t8.x)), e9.divide(t8.y), 0, 0, 0, 1);
}
function O2(t8, e9) {
  const r9 = e9.tlbr.xy, o16 = e9.tlbr.zw, i8 = o16.x.subtract(r9.x), s11 = r9.y.subtract(o16.y), a8 = new X(i8, s11).multiply(e9.inverseRasterizationScale), p9 = a8.multiply(t8.view.requiredZoomFactor), u19 = j5(p9), d8 = t8.localTileOffset.getPatternOffsetAtTileOrigin(a8).divide(p9), c7 = new Y(e9.pos, 1);
  return { tileTextureCoord: u19.multiply(c7).xy.subtract(d8), tlbr: e9.tlbr.divide(t8.mosaicInfo.size.xyxy) };
}
function S3(t8, e9) {
  const r9 = Ge(t8.tileTextureCoord, new C2(1)), o16 = _e(t8.tlbr.xy, t8.tlbr.zw, r9), i8 = wn(e9.texture, o16);
  return t8.color.multiply(i8);
}
var T5 = class extends x3 {
  constructor() {
    super(...arguments), this.type = "PatternFillShader";
  }
  vertex(t8, e9) {
    return __spreadValues(__spreadValues({}, super.vertex(t8, e9)), O2(this, t8));
  }
  fragment(t8) {
    const e9 = S3(t8, this.mosaicInfo);
    return this.getFragmentOutput(e9, t8, new C2(0));
  }
};
__decorate([m5(s6)], T5.prototype, "mosaicInfo", void 0), __decorate([m5(n4)], T5.prototype, "localTileOffset", void 0), __decorate([__param(0, l2(w3)), __param(1, l2(q2))], T5.prototype, "vertex", null), __decorate([__param(0, l2(g9))], T5.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/PatternOutlineFillShader.js
var y2 = class extends R5 {
};
__decorate([f3(9, _3)], y2.prototype, "tlbr", void 0), __decorate([f3(10, C2)], y2.prototype, "inverseRasterizationScale", void 0);
var S4 = class extends A5 {
};
var x4 = class extends G4 {
  constructor() {
    super(...arguments), this.type = "PatternOutlineFillShader";
  }
  vertex(t8, r9) {
    return __spreadValues(__spreadValues({}, H3(this, t8, r9)), O2(this, t8));
  }
  fragment(t8) {
    const { isOutline: r9 } = t8, e9 = Gt(r9, new C2(0.5)), o16 = k3(t8, this.antialiasingControls.blur), i8 = S3(t8, this.mosaicInfo), a8 = zt(e9, o16, i8), p9 = zt(e9, new C2(1 / 255), new C2(0));
    return this.getFragmentOutput(a8, t8, p9);
  }
};
__decorate([m5(s6)], x4.prototype, "mosaicInfo", void 0), __decorate([m5(n4)], x4.prototype, "localTileOffset", void 0), __decorate([__param(0, l2(y2)), __param(1, l2(q2))], x4.prototype, "vertex", null), __decorate([__param(0, l2(S4))], x4.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ComplexOutlineFillShader.js
var F6 = 1 / H;
var w4 = class extends S {
};
__decorate([f3(3, _3)], w4.prototype, "color", void 0), __decorate([f3(4, _3)], w4.prototype, "tlbr", void 0), __decorate([f3(5, C2)], w4.prototype, "angle", void 0), __decorate([f3(6, C2)], w4.prototype, "aux1", void 0), __decorate([f3(7, C2)], w4.prototype, "aux2", void 0), __decorate([f3(8, X)], w4.prototype, "aux3", void 0), __decorate([f3(9, X)], w4.prototype, "aux4", void 0), __decorate([f3(10, X)], w4.prototype, "zoomRange", void 0);
var C6 = class extends S4 {
};
var R6 = class extends q6 {
  constructor() {
    super(...arguments), this.type = "ComplexOutlineFillShader";
  }
  vertex(t8, o16) {
    const { aux1: e9, aux2: r9, aux3: i8, aux4: p9 } = t8, a8 = __spreadProps(__spreadValues({}, t8), { width: e9, height: r9, offset: i8, scale: p9.multiply(F6) }), n17 = __spreadProps(__spreadValues({}, t8), { halfWidth: e9, referenceHalfWidth: r9, offset: i8, normal: p9.subtract(I).multiply(F6) }), m13 = H3(this, n17), u19 = Z(this, a8), h10 = Gt(m13.isOutline, new C2(0.5));
    return __spreadValues(__spreadValues(__spreadValues({}, m13), u19), Object.assign({}, this.maybeRunHittest(t8, o16, h10)));
  }
  fragment(t8) {
    const { isOutline: o16 } = t8, e9 = Gt(o16, new C2(0.5)), r9 = k3(t8, this.antialiasingControls.blur), i8 = k2(this, t8), a8 = zt(e9, r9, i8), n17 = zt(e9, new C2(1 / 255), new C2(0));
    return this.getFragmentOutput(a8, t8, n17);
  }
  hittest(t8, o16, e9) {
    return zt(e9, q4(this.hittestRequest), z3(this, t8, o16));
  }
};
__decorate([m5(s6)], R6.prototype, "mosaicInfo", void 0), __decorate([m5(n4)], R6.prototype, "localTileOffset", void 0), __decorate([__param(0, l2(w4)), __param(1, l2(q2))], R6.prototype, "vertex", null), __decorate([__param(0, l2(C6))], R6.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexOutlineFillTechnique.js
var l4 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 11, this.shaders = { geometry: new R6() };
  }
  render(e9, u19) {
    const { painter: l10, pixelRatio: m13 } = e9, p9 = u19.instance.getInput();
    l10.setShader({ shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(e9, u19.target, p9.uniforms)), f2(e9, u19.target)), { antialiasingControls: n6(m13), mosaicInfo: l10.textureManager.getMosaicInfo(e9, u19.textureKey), localTileOffset: h2(u19.target) }), defines: __spreadValues({}, d(e9)), optionalAttributes: p9.optionalAttributes, useComputeBuffer: a(e9) }), l10.setPipelineState(m3(e9)), l10.submitDraw(e9, u19);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/FillTechnique.js
var n8 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 14, this.shaders = { geometry: new x3() };
  }
  render(e9, a8) {
    const { painter: n17 } = e9, u19 = a8.instance.getInput();
    n17.setShader({ shader: this.shaders.geometry, uniforms: __spreadValues(__spreadValues({}, u4(e9, a8.target, u19.uniforms)), f2(e9, a8.target)), defines: d(e9), optionalAttributes: u19.optionalAttributes, useComputeBuffer: a(e9) }), n17.setPipelineState(m3(e9)), n17.submitDraw(e9, a8);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/GradientFillShader.js
var P6 = class extends g8 {
};
__decorate([f3(5, _3)], P6.prototype, "tlbr", void 0), __decorate([f3(6, X)], P6.prototype, "relativePosition", void 0), __decorate([f3(7, C2)], P6.prototype, "gradientMethod", void 0), __decorate([f3(8, X)], P6.prototype, "relativeGradientSize", void 0);
var D6 = class extends P2 {
};
var A6 = class extends x3 {
  constructor() {
    super(...arguments), this.type = "GradientFillShader";
  }
  vertex(t8, e9) {
    const { tlbr: i8, relativePosition: r9, gradientMethod: o16, relativeGradientSize: a8 } = t8, d8 = zt(k(t8.bitset, e2.isAbsolute), this.view.displayZoomFactor, new C2(1));
    return __spreadProps(__spreadValues({}, super.vertex(t8, e9)), { tlbr: i8, relativePosition: r9, gradientMethod: o16, gradientSize: a8.multiply(d8), isDiscrete: h3(t8.bitset, e2.isDiscrete) });
  }
  fragment(t8) {
    const { tlbr: e9, relativePosition: i8, gradientMethod: r9, gradientSize: o16, isDiscrete: g14 } = t8, w6 = zt(Gt(g14, new C2(0.5)), o16.subtract(1), new X(0)), b7 = Tt([Ct(r9, new C2(r5.rectangular)), () => {
      const t9 = Qt(i8).add(w6).divide(o16);
      return E4(Xe(t9.x, t9.y));
    }], [Ct(r9, new C2(r5.circular)), E4(hn(we(i8, i8)).add(w6.x).divide(o16.x))], [true, E4(i8.x.add(w6.x).divide(o16.x))]), S7 = new X(se(b7, new C2(0), new C2(1)), 0.5), j6 = _e(e9.xy, e9.zw, S7).divide(this.mosaicInfo.size), z7 = wn(this.mosaicInfo.texture, j6), F10 = t8.color.a;
    return this.getFragmentOutput(z7.multiply(F10), t8, new C2(0));
  }
};
__decorate([m5(s6)], A6.prototype, "mosaicInfo", void 0), __decorate([__param(0, l2(P6)), __param(1, l2(q2))], A6.prototype, "vertex", null), __decorate([__param(0, l2(D6))], A6.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/GradientFillTechnique.js
var n9 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 15, this.shaders = { geometry: new A6() }, this.symbologyPlane = 0;
  }
  render(e9, a8) {
    const { painter: n17 } = e9, u19 = a8.instance.getInput();
    n17.setShader({ shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(e9, a8.target, u19.uniforms)), f2(e9, a8.target)), { mosaicInfo: n17.textureManager.getMosaicInfo(e9, a8.textureKey) }), defines: __spreadValues({}, d(e9)), optionalAttributes: u19.optionalAttributes, useComputeBuffer: a(e9) }), n17.setPipelineState(m3(e9)), n17.submitDraw(e9, a8);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/OutlineFillTechnique.js
var u8 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 25, this.shaders = { geometry: new G4() };
  }
  render(e9, a8) {
    const { painter: u19, pixelRatio: m13 } = e9, p9 = a8.instance.getInput();
    u19.setShader({ shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(e9, a8.target, p9.uniforms)), f2(e9, a8.target)), { antialiasingControls: n6(m13) }), defines: __spreadValues({}, d(e9)), optionalAttributes: p9.optionalAttributes, useComputeBuffer: a(e9) }), u19.setPipelineState(m3(e9)), u19.submitDraw(e9, a8);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternFillTechnique.js
var u9 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 27, this.shaders = { geometry: new T5() };
  }
  render(e9, n17) {
    const { painter: u19 } = e9, f15 = n17.instance.getInput();
    u19.setShader({ shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(e9, n17.target, f15.uniforms)), f2(e9, n17.target)), { mosaicInfo: u19.textureManager.getMosaicInfo(e9, n17.textureKey), localTileOffset: h2(n17.target) }), defines: __spreadValues({}, d(e9)), optionalAttributes: f15.optionalAttributes, useComputeBuffer: a(e9) }), u19.setPipelineState(m3(e9)), u19.submitDraw(e9, n17);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternOutlineFillTechnique.js
var l5 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 28, this.shaders = { geometry: new x4() };
  }
  render(e9, u19) {
    const { painter: l10, pixelRatio: m13 } = e9, f15 = u19.instance.getInput();
    l10.setShader({ shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(e9, u19.target, f15.uniforms)), f2(e9, u19.target)), { antialiasingControls: n6(m13), mosaicInfo: l10.textureManager.getMosaicInfo(e9, u19.textureKey), localTileOffset: h2(u19.target) }), defines: __spreadValues({}, d(e9)), optionalAttributes: f15.optionalAttributes, useComputeBuffer: a(e9) }), l10.setPipelineState(m3(e9)), l10.submitDraw(e9, u19);
  }
};

// node_modules/@arcgis/core/views/webgl/heatmapTextureUtils.js
var o9 = class {
  constructor(e9, t8, r9, o16) {
    this.dataType = e9, this.samplingMode = t8, this.pixelFormat = r9, this.internalFormat = o16;
  }
};
function a3(a8, l10) {
  const { textureFloatLinear: n17, colorBufferFloat: i8 } = a8.capabilities, s11 = i8?.textureFloat, f15 = i8?.textureHalfFloat, u19 = i8?.floatBlend, _5 = a8.driverTest.floatBufferBlend.result;
  if (!s11 && !f15) throw new r2("heatmap:missing-color-buffer-float", "HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");
  if (!(u19 && _5 || f15)) throw new r2("heatmap:missing-float-blend", "HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float." + (_5 ? "" : " This device claims support for EXT_float_blend, but does not actually support it."));
  const c7 = s11 && u19 && _5, m13 = f15, p9 = n17, d8 = !!i8?.R32F, h10 = !!i8?.R16F;
  if (c7 && p9) return p9 || l10.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."), new o9(N2.FLOAT, p9 ? 9729 : 9728, d8 ? 6403 : 6408, d8 ? E.R32F : 6408);
  if (m13) return new o9(N2.HALF_FLOAT, 9729, h10 ? 6403 : 6408, h10 ? E.R16F : 6408);
  throw new r2("heatmap:missing-hardware-support", "HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.");
}
var l6 = new o9(N2.HALF_FLOAT, 9728, 6408, 6408);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/heatmap/HeatmapResources.js
var n10 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.heatmap.HeatmapResources");
var m8 = class {
  destroy() {
    this._accumulateFramebuffer = r(this._accumulateFramebuffer), this._resolveGradientTexture = r(this._resolveGradientTexture), this._prevGradientHash = null, this._qualityProfile = null;
  }
  get initialized() {
    return null != this._accumulateFramebuffer && null != this._resolveGradientTexture;
  }
  get accumulateFramebuffer() {
    return this._accumulateFramebuffer;
  }
  get resolveGradientTexture() {
    return this._resolveGradientTexture;
  }
  loadQualityProfile(e9) {
    if (null == this._qualityProfile) {
      const r9 = a3(e9, n10());
      this._qualityProfile = __spreadProps(__spreadValues({}, r9), { defines: { usesHalfFloatPrecision: r9.dataType !== N2.FLOAT } });
    }
    return this._qualityProfile;
  }
  ensureAccumulateFBO(e9, r9, t8) {
    if (null == this._accumulateFramebuffer) {
      const { dataType: s11, samplingMode: l10, pixelFormat: n17, internalFormat: m13 } = this.loadQualityProfile(e9), f15 = new h(r9, t8);
      f15.pixelFormat = n17, f15.internalFormat = m13, f15.dataType = s11, f15.samplingMode = l10, f15.wrapMode = 33071;
      const h10 = new i3(G.DEPTH24_STENCIL8, r9, t8);
      this._accumulateFramebuffer = new m2(e9, f15, h10);
    } else {
      const { width: e10, height: a8 } = this._accumulateFramebuffer;
      e10 === r9 && a8 === t8 || this._accumulateFramebuffer.resize(r9, t8);
    }
    return this._accumulateFramebuffer;
  }
  ensureResolveGradientTexture(e9, r9, t8) {
    if (null == this._resolveGradientTexture) {
      const r10 = new h();
      r10.wrapMode = 33071, this._resolveGradientTexture = new E3(e9, r10), this._prevGradientHash = null;
    }
    return this._prevGradientHash !== r9 && (this._resolveGradientTexture.resize(t8.length / 4, 1), this._resolveGradientTexture.setData(t8), this._prevGradientHash = r9), this._resolveGradientTexture;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/heatmapUtils.js
function n11(n17) {
  return n17 ? 0.25 : 1;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/HeatmapAccumulateShader.js
var v4 = class extends S {
};
__decorate([f3(5, X)], v4.prototype, "offset", void 0);
var x5 = class extends P2 {
};
var g10 = class extends w {
};
__decorate([m5(C2)], g10.prototype, "radius", void 0), __decorate([m5(C2)], g10.prototype, "isFieldActive", void 0);
var F7 = class extends B4 {
  constructor() {
    super(...arguments), this.type = "HeatmapAccumulateShader", this.usesHalfFloatPrecision = false;
  }
  vertex(t8) {
    const { radius: e9, isFieldActive: i8 } = this.kernelControls, s11 = t8.offset, l10 = i8.multiply(this.storage.getVVData(t8.id).x).add(new C2(1).subtract(i8)), o16 = this.view.displayViewScreenMat3.multiply(new Y(t8.pos, 1)).add(this.view.displayViewMat3.multiply(new Y(s11, 0)).multiply(e9)), r9 = this.clip(t8.id);
    return __spreadValues({ glPosition: new _3(o16.xy, r9, 1), offset: s11, fieldValue: l10, color: new _3(0) }, this.maybeRunHittest(t8, {}, null));
  }
  fragment(t8) {
    const { offset: e9, fieldValue: i8 } = t8, s11 = je(e9), l10 = ln(s11, new C2(1)), o16 = new C2(1).subtract(s11.multiply(s11)), r9 = o16.multiply(o16), a8 = l10.multiply(r9).multiply(i8).multiply(new C2(n11(this.usesHalfFloatPrecision)));
    return this.getFragmentOutput(new _3(a8), t8);
  }
  hittest(t8) {
    const { viewMat3: e9, tileMat3: i8 } = this.view, s11 = e9.multiply(i8).multiply(new Y(t8.pos, 1));
    return R2(s11.xy, this.kernelControls.radius, this.hittestRequest.position);
  }
};
__decorate([_4], F7.prototype, "usesHalfFloatPrecision", void 0), __decorate([m5(g10)], F7.prototype, "kernelControls", void 0), __decorate([__param(0, l2(v4))], F7.prototype, "vertex", null), __decorate([__param(0, l2(x5))], F7.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/HeatmapResolveShader.js
var g11 = class extends C3 {
};
__decorate([f3(0, X)], g11.prototype, "position", void 0);
var f10 = class extends I2 {
};
var h6 = class extends w {
};
__decorate([m5(U2)], h6.prototype, "texture", void 0), __decorate([m5(X)], h6.prototype, "minAndInvRange", void 0), __decorate([m5(C2)], h6.prototype, "normalization", void 0);
var w5 = class extends w {
};
__decorate([m5(U2)], w5.prototype, "texture", void 0);
var b2 = class extends P {
  constructor() {
    super(...arguments), this.type = "HeatmapResolveShader", this.usesHalfFloatPrecision = false;
  }
  vertex(t8) {
    return { glPosition: new _3(t8.position.multiply(2).subtract(1), 1, 1), uv: t8.position };
  }
  fragment(t8) {
    const { accumulatedDensity: e9, gradient: o16 } = this;
    let i8 = wn(e9.texture, t8.uv).r.divide(new C2(n11(this.usesHalfFloatPrecision)));
    i8 = i8.multiply(e9.normalization), i8 = i8.subtract(e9.minAndInvRange.x).multiply(e9.minAndInvRange.y);
    const s11 = wn(o16.texture, new X(i8, 0.5)), n17 = new v();
    return n17.fragColor = new _3(s11.rgb.multiply(s11.a), s11.a), n17;
  }
};
__decorate([_4], b2.prototype, "usesHalfFloatPrecision", void 0), __decorate([m5(h6)], b2.prototype, "accumulatedDensity", void 0), __decorate([m5(w5)], b2.prototype, "gradient", void 0), __decorate([__param(0, l2(g11))], b2.prototype, "vertex", null), __decorate([__param(0, l2(f10))], b2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/heatmap/HeatmapTechnique.js
var u10 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 18, this.drawPhase = 73, this.shaders = { accumulate: new F7(), resolve: new b2() }, this._isBound = false, this._resources = /* @__PURE__ */ new Map();
  }
  shutdown(e9) {
    super.shutdown(e9), this._resources.get(e9)?.destroy(), this._resources.delete(e9), this._prevFBO = null, this._unbind();
  }
  render(e9, i8) {
    const { context: n17, painter: o16, state: u19 } = e9, a8 = i8.instance.getInput(), { isFieldActive: l10 } = a8.uniforms, h10 = this._getOrCreateResourcesRecord(n17), f15 = h10.loadQualityProfile(n17);
    a(e9) || this._bind(e9, h10, a8), o16.setShader({ shader: this.shaders.accumulate, uniforms: __spreadProps(__spreadValues({}, f2(e9, i8.target)), { kernelControls: { radius: p3(a8, u19), isFieldActive: l10 ? 1 : 0 } }), defines: __spreadValues(__spreadValues({}, d(e9)), f15.defines), optionalAttributes: {}, useComputeBuffer: a(e9) });
    const m13 = a(e9) ? c2 : d4;
    o16.setPipelineState(m13), o16.submitDraw(e9, i8);
  }
  getStencilReference(e9) {
    return l7(e9);
  }
  renderResolvePass(e9, r9) {
    if (a(e9)) return;
    const { context: s11, painter: i8 } = e9, n17 = this._resources.get(s11);
    if (null == this._prevFBO || null == this._prevViewport || !n17?.initialized) return;
    const { defines: o16 } = n17.loadQualityProfile(s11), { minDensity: u19, maxDensity: a8, radius: l10 } = r9.getInput().uniforms, d8 = 8, c7 = 9, p9 = n17.accumulateFramebuffer, f15 = n17.resolveGradientTexture, m13 = { shader: this.shaders.resolve, uniforms: { accumulatedDensity: { texture: { unit: d8, texture: p9.colorTexture }, minAndInvRange: [u19, 1 / (a8 - u19)], normalization: 3 / (l10 * l10 * Math.PI) }, gradient: { texture: { unit: c7, texture: f15 } } }, defines: o16, optionalAttributes: {}, useComputeBuffer: false };
    s11.bindFramebuffer(this._prevFBO), s11.setViewport(0, 0, this._prevViewport.width, this._prevViewport.height), s11.bindTexture(p9.colorTexture, d8), s11.bindTexture(f15, c7), i8.setPipelineState(h7), i8.submitDrawMesh(s11, m13, i8.quadMesh), this._unbind();
  }
  _getOrCreateResourcesRecord(e9) {
    let t8 = this._resources.get(e9);
    return null == t8 && (t8 = new m8(), this._resources.set(e9, t8)), t8;
  }
  _unbind() {
    this._prevFBO = null, this._prevViewport = null, this._isBound = false;
  }
  _bind(e9, t8, r9) {
    if (this._isBound) return;
    const { context: s11, state: i8, pixelRatio: n17 } = e9, o16 = s11.getBoundFramebufferObject(), u19 = s11.getViewport();
    this._prevFBO = o16, this._prevViewport = u19;
    const { gradient: l10, gradientHash: d8 } = r9.uniforms;
    t8.ensureResolveGradientTexture(s11, d8, l10);
    const { width: c7, height: h10 } = u19, f15 = a4(p3(r9, i8), n17), m13 = c7 * f15, _5 = h10 * f15, w6 = t8.ensureAccumulateFBO(s11, m13, _5);
    s11.blitFramebuffer(o16, w6, 1024), s11.bindFramebuffer(w6), s11.setViewport(0, 0, w6.width, w6.height), s11.setColorMask(true, true, true, true), s11.setClearColor(0, 0, 0, 0), s11.clear(16384), this._isBound = true;
  }
};
function a4(e9, t8) {
  const r9 = t8 > 1.5 ? 0.25 : 0.5;
  return e9 < 1 / (2 * r9) ? 1 : r9;
}
function l7(e9) {
  return e9.key.level + 1;
}
var d4 = { color: { write: [true, true, true, true], blendMode: "additive" }, depth: false, stencil: { write: false, test: { compare: 518, mask: 255, op: { fail: 7680, zFail: 7680, zPass: 7681 } } } };
var c2 = __spreadProps(__spreadValues({}, d4), { stencil: false });
var h7 = { color: { write: [true, true, true, true], blendMode: "composite" }, depth: false, stencil: false };
function p3(e9, t8) {
  const { referenceScale: r9, radius: s11 } = e9.uniforms;
  return s11 * (0 !== r9 ? r9 / t8.scale : 1);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextShader.js
var G5 = 360 / 254;
var Z2 = class extends S {
};
__decorate([f3(3, _3)], Z2.prototype, "color", void 0), __decorate([f3(4, X)], Z2.prototype, "offset", void 0), __decorate([f3(5, X)], Z2.prototype, "textureUV", void 0), __decorate([f3(6, _3)], Z2.prototype, "fontAndReferenceSize", void 0), __decorate([f3(7, _3)], Z2.prototype, "outlineColor", void 0), __decorate([f3(8, _3)], Z2.prototype, "haloColor", void 0), __decorate([f3(9, X)], Z2.prototype, "outlineAndHaloSize", void 0), __decorate([f3(10, X)], Z2.prototype, "zoomRange", void 0), __decorate([f3(11, C2)], Z2.prototype, "clipAngle", void 0), __decorate([f3(12, _3)], Z2.prototype, "referenceSymbol", void 0), __decorate([f3(15, C2)], Z2.prototype, "visibility", void 0);
var J4 = class extends x {
};
__decorate([f3(13, X)], J4.prototype, "offsetNextVertex1", void 0), __decorate([f3(14, X)], J4.prototype, "offsetNextVertex2", void 0);
var K = class extends P2 {
};
var Q = class extends B4 {
  constructor() {
    super(...arguments), this.type = "TextShader", this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"] }, this.textRenderPassType = 0, this.isBackgroundPass = false, this.isLabel = false;
  }
  clipLabel(t8, e9) {
    const { clipAngle: o16, zoomRange: s11, visibility: l10 } = t8, r9 = o16.multiply(G5), a8 = Qt(this.view.rotation.subtract(r9)), n17 = Ye(new C2(360).subtract(a8), a8);
    let d8 = new C2(0);
    const f15 = ze(this.view.currentZoom.multiply(wt)).divide(wt), h10 = s11.x, v7 = s11.y, w6 = new C2(1).subtract(ln(h10, f15)).multiply(2), x9 = ln(new C2(90), n17).multiply(2), b7 = new C2(2).multiply(new C2(1).subtract(ln(f15, v7)));
    return d8 = d8.add(e9.multiply(w6)), d8 = d8.add(e9.multiply(x9)), d8 = d8.add(b7), l10 && (d8 = d8.add(l10)), d8;
  }
  vertex(t8, e9) {
    const i8 = h3(t8.bitset, D2), s11 = new C2(1).subtract(i8);
    let l10 = t8.fontAndReferenceSize[0];
    const r9 = t8.fontAndReferenceSize[1], a8 = t8.fontAndReferenceSize[2], n17 = t8.fontAndReferenceSize[3];
    let d8 = l10.divide(a8);
    const p9 = 1 === this.textRenderPassType ? t8.outlineColor : 2 === this.textRenderPassType ? t8.haloColor : this._getVertexColor(t8), u19 = this.view.displayViewScreenMat3.multiply(new Y(t8.pos, 1));
    let m13 = t8.offset, c7 = new C2(1), g14 = rt.identity(), z7 = new X(0);
    if (this.isLabel) {
      if (!t8.referenceSymbol) throw new Error("InternalError: Optional attribute 'referenceSymbol' expected for labels");
      const e10 = t8.referenceSymbol, i9 = e10.xy, s12 = e10.z, l11 = this._unpackDirection(e10.w), r10 = l3(this, t8.id, s12).divide(2), a9 = l11.multiply(r10.add(D));
      z7 = i9.add(a9), m13 = m13.add(z7);
    } else {
      c7 = l3(this, t8.id, r9).divide(r9), l10 = l10.multiply(c7), d8 = d8.multiply(c7), m13 = m13.multiply(c7), g14 = u6(this, t8.id), m13 = g14.multiply(new Y(m13, 0)).xy;
    }
    const R8 = h3(t8.bitset, E2), j6 = this._getViewRotationMatrix(R8).multiply(new Y(m13, 0));
    let A8 = this.isLabel ? this.clipLabel(t8, R8) : this.clip(t8.id, t8.zoomRange);
    A8 = this.isBackgroundPass ? A8.add(s11.multiply(2)) : A8.add(i8.multiply(2));
    let C8 = new C2(0);
    if (1 === this.textRenderPassType) {
      A8 = A8.add(zt(Ct(t8.outlineAndHaloSize.x, new C2(0)), new C2(2), new C2(0)));
      C8 = new C2(t8.outlineAndHaloSize.x).divide(d8).divide(n17);
    }
    if (2 === this.textRenderPassType) {
      const e10 = t8.outlineAndHaloSize.x, i9 = new C2(t8.outlineAndHaloSize.y);
      A8 = A8.add(zt(Ct(i9, new C2(0)), new C2(2), new C2(0)));
      C8 = i9.add(e10).divide(d8).divide(n17);
    }
    const M3 = this.isLabel ? Gt(A8, new C2(1)) : new J2(false);
    return __spreadValues({ glPosition: new _3(u19.xy.add(j6.xy), A8, 1), color: p9, size: d8, textureUV: t8.textureUV.divide(this.mosaicInfo.size), antialiasingWidth: new C2(0.315).divide(a8.divide(n17)).multiply(a8).divide(l10).divide(this.view.pixelRatio), outlineDistanceOffset: C8 }, this.maybeRunHittest(t8, e9, { vvSizeAdjustment: c7, vvRotation: g14, labelOffset: z7, labelClipped: M3 }));
  }
  _getViewRotationMatrix(t8) {
    const e9 = this.view.displayViewMat3, i8 = this.view.displayMat3, o16 = new C2(1).subtract(t8);
    return e9.multiply(t8).add(i8.multiply(o16));
  }
  fragment(t8) {
    const e9 = new C2(2 / 8), i8 = new C2(1).subtract(e9), o16 = wn(this.mosaicInfo.texture, t8.textureUV).a;
    let s11 = i8.subtract(t8.outlineDistanceOffset);
    this.highlight && (s11 = s11.divide(2));
    const l10 = t8.antialiasingWidth, r9 = on(s11.subtract(l10), s11.add(l10), o16);
    return this.getFragmentOutput(t8.color.multiply(r9), t8);
  }
  hittest(t8, e9, { vvSizeAdjustment: i8, vvRotation: o16, labelOffset: s11, labelClipped: l10 }) {
    let r9, a8, n17;
    this.isLabel ? (r9 = new Y(t8.offset.add(s11), 0), a8 = new Y(e9.offsetNextVertex1.add(s11), 0), n17 = new Y(e9.offsetNextVertex2.add(s11), 0)) : (r9 = o16.multiply(new Y(t8.offset.multiply(i8), 0)), a8 = o16.multiply(new Y(e9.offsetNextVertex1.multiply(i8), 0)), n17 = o16.multiply(new Y(e9.offsetNextVertex2.multiply(i8), 0)));
    const { viewMat3: d8, tileMat3: p9 } = this.view, u19 = d8.multiply(p9).multiply(new Y(t8.pos, 1)), y6 = u19.add(p9.multiply(r9)).xy, m13 = u19.add(p9.multiply(a8)).xy, c7 = u19.add(p9.multiply(n17)).xy, h10 = P3(this.hittestRequest.position, y6.xy, m13.xy, c7.xy);
    return this.isLabel ? zt(l10, q4(this.hittestRequest), h10) : h10;
  }
  _unpackDirection(t8) {
    const e9 = new W(t8), i8 = jt(e9, new W(2)), o16 = Pt(e9, new W(3));
    return new X(new C2(i8).subtract(1), new C2(o16).subtract(1));
  }
  _getVertexColor(t8) {
    let e9 = t8.color;
    if (this.visualVariableColor) {
      const i8 = this.storage.getColorValue(t8.id);
      e9 = this.visualVariableColor.getColor(i8, t8.color, new J2(false));
    }
    if (this.visualVariableOpacity) {
      const i8 = this.storage.getOpacityValue(t8.id), o16 = this.visualVariableOpacity.getOpacity(i8);
      e9 = e9.multiply(o16);
    }
    return e9;
  }
};
__decorate([g3(f4)], Q.prototype, "visualVariableColor", void 0), __decorate([g3(h4)], Q.prototype, "visualVariableOpacity", void 0), __decorate([g3(g5)], Q.prototype, "visualVariableRotation", void 0), __decorate([g3(m6)], Q.prototype, "visualVariableSizeMinMaxValue", void 0), __decorate([g3(u5)], Q.prototype, "visualVariableSizeScaleStops", void 0), __decorate([g3(f5)], Q.prototype, "visualVariableSizeStops", void 0), __decorate([g3(s7)], Q.prototype, "visualVariableSizeUnitValue", void 0), __decorate([m5(s6)], Q.prototype, "mosaicInfo", void 0), __decorate([_4], Q.prototype, "textRenderPassType", void 0), __decorate([_4], Q.prototype, "isBackgroundPass", void 0), __decorate([_4], Q.prototype, "isLabel", void 0), __decorate([__param(0, l2(Z2)), __param(1, l2(J4))], Q.prototype, "vertex", null), __decorate([__param(0, l2(K))], Q.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/labels/LabelTechnique.js
var o10 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 19, this.shaders = { geometry: new Q() }, this.drawPhase = 14, this.symbologyPlane = 3;
  }
  render(e9, n17) {
    const { painter: o16 } = e9, u19 = d(e9), d8 = __spreadProps(__spreadValues({}, m3(e9)), { stencil: { write: false, test: { compare: 516, mask: 255, op: { fail: 7680, zFail: 7680, zPass: 7680 } } } }), m13 = n17.instance.getInput(), c7 = { shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(e9, n17.target, m13.uniforms)), f2(e9, n17.target)), { mosaicInfo: o16.textureManager.getMosaicInfo(e9, n17.textureKey) }), defines: __spreadProps(__spreadValues({}, u19), { textRenderPassType: 0, isBackgroundPass: true, isLabel: true }), optionalAttributes: m13.optionalAttributes, useComputeBuffer: a(e9) };
    o16.setPipelineState(d8), o16.setShader(c7), o16.submitDraw(e9, n17, { stencilRef: 255 }), o16.setShader(__spreadProps(__spreadValues({}, c7), { defines: __spreadProps(__spreadValues({}, u19), { textRenderPassType: 2, isBackgroundPass: false, isLabel: true }) })), o16.submitDraw(e9, n17, { stencilRef: 255 }), o16.setShader(__spreadProps(__spreadValues({}, c7), { defines: __spreadProps(__spreadValues({}, u19), { textRenderPassType: 0, isBackgroundPass: false, isLabel: true }) })), o16.submitDraw(e9, n17, { stencilRef: 255 });
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/GradientStrokeShader.js
function F8(t8) {
  return ln(new C2(0), t8).multiply(2).subtract(1);
}
var G6 = class extends q5 {
};
__decorate([f3(9, C2)], G6.prototype, "accumulatedDistance", void 0), __decorate([f3(10, C2)], G6.prototype, "totalLength", void 0), __decorate([f3(11, C2)], G6.prototype, "gradientSize", void 0), __decorate([f3(12, X)], G6.prototype, "segmentDirection", void 0), __decorate([f3(13, _3)], G6.prototype, "tlbr", void 0);
var P7 = class extends w {
};
__decorate([m5(C2)], P7.prototype, "isColorPass", void 0);
var k4 = class extends B6 {
  constructor() {
    super(...arguments), this.type = "GradientStrokeShader";
  }
  vertex(t8, e9) {
    const { totalLength: i8, gradientSize: o16, segmentDirection: r9, tlbr: s11 } = t8, p9 = T2(this, t8), m13 = h3(t8.bitset, e3.isAlongLine), c7 = i8.divide(this.view.displayZoomFactor), u19 = zt(k(t8.bitset, e3.isAbsoluteSize), () => {
      const t9 = zt(Gt(m13, new C2(0.5)), c7, p9.halfWidth);
      return o16.divide(t9);
    }, o16), h10 = t8.accumulatedDistance.add(we(r9, p9.scaledOffset).divide(c7)), y6 = s11.divide(this.mosaicInfo.size.xyxy);
    return __spreadValues(__spreadProps(__spreadValues({}, p9), { tlbr: y6, relativePositionAlongLine: h10, relativeGradientSize: u19, isAlongLine: h3(t8.bitset, e3.isAlongLine), isDiscrete: h3(t8.bitset, e3.isDiscrete) }), this.maybeRunHittest(t8, e9, p9.halfWidth));
  }
  fragment(t8) {
    const { isAlongLine: e9, isDiscrete: i8, relativePositionAlongLine: o16, relativeGradientSize: r9, normal: s11, tlbr: d8 } = t8, v7 = G3(t8, this.antialiasingControls.blur), f15 = F8(s11.y).multiply(Ye(je(s11), new C2(1))), w6 = new C2(0.5).multiply(f15).add(new C2(0.5)), b7 = zt(Gt(e9, new C2(0.5)), o16, w6), x9 = zt(Gt(i8, new C2(0.5)), r9.subtract(1), new C2(0));
    let L4 = b7.add(x9).divide(r9);
    L4 = zt(Gt(e9, new C2(0.5)), L4, E4(L4));
    const j6 = _e(d8.xy, d8.zw, new X(se(L4, new C2(0), new C2(1)), 0.5)), A8 = wn(this.mosaicInfo.texture, j6), D7 = t8.opacity.multiply(v7), z7 = this.getFragmentOutput(A8.multiply(D7), t8), G7 = ln(new C2(0.5), this.technique.isColorPass).multiply(has("gradient-depth-epsilon")), I4 = ln(new C2(0), s11.y).multiply(new C2(has("gradient-depth-bias")).subtract(G7));
    return z7.glFragDepth = se(je(s11).add(I4), new C2(0), new C2(1)), z7;
  }
};
__decorate([m5(s6)], k4.prototype, "mosaicInfo", void 0), __decorate([m5(P7)], k4.prototype, "technique", void 0), __decorate([__param(0, l2(G6)), __param(1, l2(q2))], k4.prototype, "vertex", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/GradientStrokeTechnique.js
var h8 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 16, this.shaders = { geometry: new k4() }, this.symbologyPlane = 1;
  }
  _getShaderOptions(t8, o16, a8) {
    const { painter: p9, pixelRatio: h10 } = t8, l10 = o16.instance.getInput();
    return { shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(t8, o16.target, l10.uniforms)), f2(t8, o16.target)), { antialiasingControls: n6(h10), mosaicInfo: p9.textureManager.getMosaicInfo(t8, o16.textureKey), technique: { isColorPass: a8 } }), defines: __spreadValues({}, d(t8)), optionalAttributes: l10.optionalAttributes, useComputeBuffer: a(t8) };
  }
  render(t8, s11) {
    const { painter: r9 } = t8;
    if (a(t8) || l(t8)) {
      const e9 = m3(t8);
      return r9.setPipelineState(e9), r9.setShader(this._getShaderOptions(t8, s11, 1)), void r9.submitDraw(t8, s11);
    }
    t8.context.setClearDepth(1), t8.context.clear(256);
    const i8 = { color: false, depth: { write: { zNear: 0, zFar: 1 }, test: 513 }, stencil: { write: false, test: { compare: 514, mask: 255, op: { fail: 7680, zFail: 7680, zPass: 7680 } } } };
    r9.setShader(this._getShaderOptions(t8, s11, 0)), r9.setPipelineState(i8), r9.submitDraw(t8, s11);
    const n17 = { color: { write: [true, true, true, true], blendMode: "composite" }, depth: { write: false, test: 515 }, stencil: { write: false, test: { compare: 514, mask: 255, op: { fail: 7680, zFail: 7680, zPass: 7680 } } } };
    r9.setShader(this._getShaderOptions(t8, s11, 1)), r9.setPipelineState(n17), r9.submitDraw(t8, s11);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/LineTechnique.js
var u11 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 20, this.shaders = { geometry: new B6() }, this.symbologyPlane = 1;
  }
  render(e9, n17) {
    const { painter: u19, pixelRatio: m13 } = e9, p9 = n17.instance.getInput();
    u19.setShader({ shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(e9, n17.target, p9.uniforms)), f2(e9, n17.target)), { antialiasingControls: n6(m13) }), defines: __spreadValues({}, d(e9)), optionalAttributes: p9.optionalAttributes, useComputeBuffer: a(e9) }), u19.setPipelineState(m3(e9)), u19.submitDraw(e9, n17);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/TexturedLineShader.js
var W3 = class extends q5 {
};
__decorate([f3(9, C2)], W3.prototype, "accumulatedDistance", void 0), __decorate([f3(10, X)], W3.prototype, "segmentDirection", void 0), __decorate([f3(11, C2)], W3.prototype, "offsetAlongLine", void 0), __decorate([f3(12, C2)], W3.prototype, "capType", void 0), __decorate([f3(13, _3)], W3.prototype, "tlbr", void 0);
var H4 = class extends B6 {
  constructor() {
    super(...arguments), this.type = "TexturedLineShader";
  }
  _getDistanceRatio(t8, e9) {
    const o16 = h3(t8.bitset, B);
    return o16.multiply(Xe(e9, new C2(0.25)).multiply(new C2(2))).add(new C2(1).subtract(o16).multiply(u2(1)));
  }
  _getSDFAlpha(t8) {
    const { halfWidth: e9, normal: i8, tlbr: r9, patternSize: a8, accumulatedDistance: l10, offsetAlongLine: x9, dashToPx: v7, capType: D7 } = t8, S7 = a8.x.divide(i2).multiply(v7), j6 = Te(l10.add(x9).divide(S7)), A8 = _e(r9.xy, r9.zw, new X(j6, 0.5)), z7 = C4(wn(this.mosaicInfo.texture, A8)).multiply(2).subtract(1).multiply(o4).multiply(v7), F10 = i8.y.multiply(e9), T6 = Tt([Ct(D7, new C2(1)), z7.subtract(e9)], [Ct(D7, new C2(2)), hn(We(Xe(z7, new C2(0)), new C2(2)).add(F10.multiply(F10))).subtract(e9)], [true, z7]), L4 = se(new C2(0.25).subtract(T6), new C2(0), new C2(1));
    return new _3(L4);
  }
  _getPatternColor(t8) {
    const { halfWidth: e9, normal: i8, color: o16, accumulatedDistance: s11, patternSize: r9, sampleAlphaOnly: a8, tlbr: l10 } = t8, n17 = r9.y.multiply(new C2(2).multiply(e9).divide(r9.x)), y6 = Te(s11.divide(n17)), h10 = new C2(0.5).multiply(i8.y).add(new C2(0.5)), f15 = _e(l10.xy, l10.zw, new X(h10, y6));
    let w6 = wn(this.mosaicInfo.texture, f15);
    return null != this.visualVariableColor && (w6 = zt(Gt(a8, new C2(0.5)), new _3(o16.a), o16)), w6;
  }
  vertex(t8, e9) {
    const { segmentDirection: i8, tlbr: o16, bitset: s11 } = t8, r9 = T2(this, t8), a8 = t8.accumulatedDistance.divide(this.view.displayZoomFactor).add(we(i8, r9.scaledOffset)), l10 = new X(o16.z.subtract(o16.x), o16.w.subtract(o16.y)), n17 = o16.divide(this.mosaicInfo.size.xyxy), c7 = h3(s11, C), m13 = h3(s11, u3), d8 = zt(Gt(c7, new C2(0.5)), this._getDistanceRatio(t8, r9.scaledHalfWidth), new C2(1));
    return __spreadValues(__spreadProps(__spreadValues({}, r9), { tlbr: n17, patternSize: l10, accumulatedDistance: a8, isSDF: c7, sampleAlphaOnly: m13, dashToPx: d8, offsetAlongLine: t8.offsetAlongLine, capType: t8.capType }), this.maybeRunHittest(t8, e9, r9.halfWidth));
  }
  fragment(t8) {
    const { color: e9, opacity: i8, isSDF: o16 } = t8, s11 = G3(t8, this.antialiasingControls.blur), r9 = zt(Gt(o16, new C2(0.5)), this._getSDFAlpha(t8), this._getPatternColor(t8)), a8 = e9.multiply(i8).multiply(s11).multiply(r9);
    return this.getFragmentOutput(a8, t8);
  }
};
__decorate([m5(s6)], H4.prototype, "mosaicInfo", void 0), __decorate([__param(0, l2(W3)), __param(1, l2(q2))], H4.prototype, "vertex", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/TexturedLineTechnique.js
var u12 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 32, this.shaders = { geometry: new H4() }, this.symbologyPlane = 1;
  }
  render(e9, n17) {
    const { painter: u19, pixelRatio: m13 } = e9, p9 = n17.instance.getInput();
    u19.setShader({ shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(e9, n17.target, p9.uniforms)), f2(e9, n17.target)), { antialiasingControls: n6(m13), mosaicInfo: u19.textureManager.getMosaicInfo(e9, n17.textureKey) }), defines: __spreadValues({}, d(e9)), optionalAttributes: p9.optionalAttributes, useComputeBuffer: a(e9) }), u19.setPipelineState(m3(e9)), u19.submitDraw(e9, n17);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/MarkerShader.js
var X2 = class extends S {
};
__decorate([f3(3, _3)], X2.prototype, "color", void 0), __decorate([f3(4, _3)], X2.prototype, "outlineColor", void 0), __decorate([f3(5, X)], X2.prototype, "offset", void 0), __decorate([f3(6, X)], X2.prototype, "textureUV", void 0), __decorate([f3(7, _3)], X2.prototype, "sizing", void 0), __decorate([f3(8, C2)], X2.prototype, "placementAngle", void 0), __decorate([f3(9, C2)], X2.prototype, "sdfDecodeCoeff", void 0), __decorate([f3(10, X)], X2.prototype, "zoomRange", void 0);
var Y2 = class extends x {
};
__decorate([f3(11, X)], Y2.prototype, "offsetNextVertex1", void 0), __decorate([f3(12, X)], Y2.prototype, "offsetNextVertex2", void 0), __decorate([f3(13, X)], Y2.prototype, "textureUVNextVertex1", void 0), __decorate([f3(14, X)], Y2.prototype, "textureUVNextVertex2", void 0);
var Z3 = class extends P2 {
};
function $2(t8, e9, i8, o16) {
  return e9.multiply(t8.x).add(i8.multiply(t8.y)).add(o16.multiply(t8.z));
}
function tt(t8) {
  return t8.multiply(t8).divide(128);
}
var et = class extends B4 {
  constructor() {
    super(...arguments), this.type = "MarkerShader", this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"], textureUV: ["textureUVNextVertex1", "textureUVNextVertex2"] };
  }
  vertex(t8, e9) {
    const i8 = tt(t8.sizing.x), o16 = tt(t8.sizing.y), s11 = tt(t8.sizing.z), l10 = t8.placementAngle, r9 = h3(t8.bitset, o5.bitset.isSDF), y6 = h3(t8.bitset, o5.bitset.isMapAligned), h10 = h3(t8.bitset, o5.bitset.scaleSymbolsProportionally), c7 = k(t8.bitset, o5.bitset.colorLocked), x9 = n5(this, t8.id), v7 = r7(this, t8.id, t8.color, c7).multiply(x9), f15 = this.view.displayViewScreenMat3.multiply(new Y(t8.pos.xy, 1)), V5 = l3(this, t8.id, s11).divide(s11), w6 = i8.multiply(V5), S7 = t8.offset.xy.multiply(V5);
    let b7 = o16.multiply(h10.multiply(V5.subtract(1)).add(1));
    b7 = Ye(b7, Xe(w6.subtract(0.99), new C2(0)));
    const g14 = Xe(b7, new C2(1)), C8 = Ye(b7, new C2(1)), z7 = rt.fromRotation(l10.multiply(o6)), _5 = u6(this, t8.id), R8 = this._getViewRotationMatrix(y6).multiply(_5).multiply(z7).multiply(new Y(S7.xy, 0)), U4 = this.clip(t8.id, t8.zoomRange), N3 = new _3(f15.xy.add(R8.xy), U4, 1), D7 = t8.textureUV.divide(this.mosaicInfo.size), F10 = t8.outlineColor.multiply(C8), I4 = h3(t8.bitset, o5.bitset.overrideOutlineColor), O3 = t8.sdfDecodeCoeff.multiply(w6);
    return __spreadValues({ glPosition: N3, color: v7, textureUV: D7, outlineColor: F10, outlineSize: g14, distanceToPx: O3, isSDF: r9, overrideOutlineColor: I4 }, this.maybeRunHittest(t8, e9, { pos: t8.pos, size: w6, sizeCorrection: V5, isMapAligned: y6, vvRotationMat3: _5, placementMat3: z7, outlineSize: g14, distanceToPx: O3, isSDF: r9 }));
  }
  fragment(t8) {
    const e9 = this._getColor(t8.textureUV, t8);
    return this.getFragmentOutput(e9, t8);
  }
  hittest(t8, e9, i8) {
    return zt(Yt(i8.size, this.hittestRequest.smallSymbolSizeThreshold), this._hittestSmallMarker(t8, e9, i8), this._hittestMarker(t8, e9, i8));
  }
  _getViewRotationMatrix(t8) {
    const e9 = this.view.displayViewMat3, i8 = this.view.displayMat3, o16 = new C2(1).subtract(t8);
    return e9.multiply(t8).add(i8.multiply(o16));
  }
  _getViewScreenMatrix(t8) {
    const e9 = this.view.viewMat3.multiply(this.view.tileMat3), i8 = this.view.tileMat3, o16 = new C2(1).subtract(t8);
    return e9.multiply(t8).add(i8.multiply(o16));
  }
  _getColor(t8, e9) {
    return zt(Ct(e9.isSDF, new C2(1)), this._getSDFColor(t8, e9), this._getSpriteColor(t8, e9));
  }
  _getSpriteColor(t8, e9) {
    return wn(this.mosaicInfo.texture, t8).multiply(e9.color);
  }
  _getSDFColor(t8, e9) {
    const i8 = wn(this.mosaicInfo.texture, t8), o16 = new C2(0.5).subtract(C4(i8)).multiply(e9.distanceToPx).multiply(p), s11 = se(new C2(0.5).subtract(o16), new C2(0), new C2(1)), l10 = e9.color.multiply(s11);
    let r9 = e9.outlineSize;
    this.highlight && (r9 = Xe(r9, e9.overrideOutlineColor.multiply(4)));
    const a8 = r9.multiply(0.5), p9 = Qt(o16).subtract(a8), d8 = se(new C2(0.5).subtract(p9), new C2(0), new C2(1)), m13 = _e(e9.outlineColor, e9.color, e9.overrideOutlineColor).multiply(d8);
    return new C2(1).subtract(m13.a).multiply(l10).add(m13);
  }
  _hittestSmallMarker(t8, e9, i8) {
    const { position: o16, distance: s11, smallSymbolDistance: l10 } = this.hittestRequest, r9 = s11.subtract(l10), { viewMat3: p9, tileMat3: n17 } = this.view, u19 = p9.multiply(n17).multiply(new Y(i8.pos, 1)).xy, d8 = i8.size.multiply(0.5);
    return ye(u19, o16).subtract(d8).add(r9);
  }
  _hittestMarker(t8, e9, i8) {
    const { pos: o16, sizeCorrection: s11, isMapAligned: l10 } = i8, r9 = new Y(t8.offset.multiply(s11), 0), p9 = new Y(e9.offsetNextVertex1.multiply(s11), 0), n17 = new Y(e9.offsetNextVertex2.multiply(s11), 0), { viewMat3: u19, tileMat3: d8 } = this.view, m13 = u19.multiply(d8).multiply(new Y(o16, 1)), h10 = this._getViewScreenMatrix(l10).multiply(i8.vvRotationMat3).multiply(i8.placementMat3), c7 = m13.add(h10.multiply(r9)).xy, x9 = m13.add(h10.multiply(p9)).xy, v7 = m13.add(h10.multiply(n17)).xy, f15 = this.hittestRequest.position, V5 = this.hittestRequest.distance, w6 = P3(f15, c7, x9, v7);
    return zt(Gt(w6, V5), w6, this._hittestSamples(c7, x9, v7, t8, e9, i8));
  }
  _hittestSamples(t8, e9, i8, o16, s11, l10) {
    const { outlineSize: r9, isSDF: a8, distanceToPx: p9 } = l10, n17 = this.hittestRequest.position, d8 = this.hittestRequest.distance, y6 = h5(n17.add(new X(gt(d8), gt(d8))), t8, e9, i8), h10 = h5(n17.add(new X(0, gt(d8))), t8, e9, i8), c7 = h5(n17.add(new X(d8, gt(d8))), t8, e9, i8), x9 = h5(n17.add(new X(gt(d8), 0)), t8, e9, i8), v7 = h5(n17, t8, e9, i8), f15 = h5(n17.add(new X(d8, 0)), t8, e9, i8), V5 = h5(n17.add(new X(gt(d8), d8)), t8, e9, i8), w6 = h5(n17.add(new X(0, d8)), t8, e9, i8), S7 = h5(n17.add(new X(d8, d8)), t8, e9, i8), M3 = o16.textureUV.divide(this.mosaicInfo.size), z7 = s11.textureUVNextVertex1.divide(this.mosaicInfo.size), _5 = s11.textureUVNextVertex2.divide(this.mosaicInfo.size), R8 = { color: new _3(1), outlineColor: new _3(1), overrideOutlineColor: new C2(1), outlineSize: r9, distanceToPx: p9, isSDF: a8 };
    let j6 = new C2(0);
    return j6 = j6.add(g7(y6).multiply(this._getColor($2(y6, M3, z7, _5), R8).a)), j6 = j6.add(g7(h10).multiply(this._getColor($2(h10, M3, z7, _5), R8).a)), j6 = j6.add(g7(c7).multiply(this._getColor($2(c7, M3, z7, _5), R8).a)), j6 = j6.add(g7(x9).multiply(this._getColor($2(x9, M3, z7, _5), R8).a)), j6 = j6.add(g7(v7).multiply(this._getColor($2(v7, M3, z7, _5), R8).a)), j6 = j6.add(g7(f15).multiply(this._getColor($2(f15, M3, z7, _5), R8).a)), j6 = j6.add(g7(V5).multiply(this._getColor($2(V5, M3, z7, _5), R8).a)), j6 = j6.add(g7(w6).multiply(this._getColor($2(w6, M3, z7, _5), R8).a)), j6 = j6.add(g7(S7).multiply(this._getColor($2(S7, M3, z7, _5), R8).a)), ln(j6, new C2(0.05)).multiply(q4(this.hittestRequest));
  }
};
__decorate([g3(f4)], et.prototype, "visualVariableColor", void 0), __decorate([g3(h4)], et.prototype, "visualVariableOpacity", void 0), __decorate([g3(g5)], et.prototype, "visualVariableRotation", void 0), __decorate([g3(m6)], et.prototype, "visualVariableSizeMinMaxValue", void 0), __decorate([g3(u5)], et.prototype, "visualVariableSizeScaleStops", void 0), __decorate([g3(f5)], et.prototype, "visualVariableSizeStops", void 0), __decorate([g3(s7)], et.prototype, "visualVariableSizeUnitValue", void 0), __decorate([m5(s6)], et.prototype, "mosaicInfo", void 0), __decorate([__param(0, l2(X2)), __param(1, l2(Y2))], et.prototype, "vertex", null), __decorate([__param(0, l2(Z3))], et.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/MarkerTechnique.js
var n12 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 22, this.shaders = { geometry: new et() }, this.symbologyPlane = 2;
  }
  render(e9, a8) {
    const { painter: n17 } = e9, u19 = a8.instance.getInput();
    n17.setShader({ shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(e9, a8.target, u19.uniforms)), f2(e9, a8.target)), { mosaicInfo: n17.textureManager.getMosaicInfo(e9, a8.textureKey, true) }), defines: __spreadValues({}, d(e9)), optionalAttributes: u19.optionalAttributes, useComputeBuffer: a(e9) }), n17.setPipelineState(m3(e9)), n17.submitDraw(e9, a8);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/GLSLShaderModule.js
var e7 = class {
  constructor() {
    this.computeAttributes = {};
  }
  get locationsMap() {
    const t8 = /* @__PURE__ */ new Map();
    for (const e9 in this.locations) t8.set(e9, this.locations[e9].index);
    return t8;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const t8 = new Set(Object.keys(this.options));
      this._optionPropertyKeys = t8;
    }
    return this._optionPropertyKeys;
  }
  get _transformFeedbackBindings() {
    return [];
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const t8 = this.locationsMap, e9 = Array.from(t8.entries()).map(([t9, e10]) => `${t9}.${e10}`).join(".");
      this._locationInfo = { stringHash: e9, locations: t8, computeAttributeMap: this.computeAttributes };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const t8 = /* @__PURE__ */ new Map();
    for (const [e9, o16] of this.locationsMap.entries()) t8.set("a_" + e9, o16);
    return t8;
  }
  getShaderKey(t8, e9, o16) {
    return `${Object.keys(t8).map((e10) => `${e10}.${t8[e10]}`).join(".")}.${Object.keys(o16).filter((t9) => o16[t9]).map((t9) => `${t9}_${o16[t9].toString()}`).join(".")}.${Object.keys(e9).filter((t9) => this.optionPropertyKeys.has(t9)).join(".")}`;
  }
  getProgram(e9, o16, n17, r9) {
    let i8 = "", s11 = "";
    for (const t8 in n17) if (n17[t8]) {
      const e10 = "boolean" == typeof n17[t8] ? `#define ${t8}
` : `#define ${t8} ${n17[t8]}
`;
      i8 += e10, s11 += e10;
    }
    return i8 += this.vertexShader, s11 += this.fragmentShader, new m4("glslShaderModule", i8, s11, this.renamedLocationsMap, this._getUniformBindings(o16), this._transformFeedbackBindings);
  }
  _getUniformBindings(t8) {
    const e9 = [];
    for (const r9 in this.required) {
      const t9 = this.required[r9];
      e9.push({ uniformHydrated: null, shaderModulePath: r9, uniformName: r9, uniformType: t9.type, uniformArrayElementType: o11(t9), uniformArrayLength: n13(t9) });
    }
    for (const r9 in t8) {
      const i8 = this.options[r9];
      if (t8[r9]) for (const t9 in i8) {
        const s11 = i8[t9];
        e9.push({ uniformHydrated: null, shaderModulePath: `${r9}.${t9}`, uniformName: t9, uniformType: s11.type, uniformArrayElementType: o11(s11), uniformArrayLength: n13(s11) });
      }
    }
    return e9;
  }
};
var o11 = (t8) => "array" === t8.type ? t8.elementType?.type : void 0;
var n13 = (t8) => "array" === t8.type ? t8.size : void 0;

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/pieChart/PieChartShader.js
var p4 = { hittestDist: C2, hittestPos: X };
var d5 = { filterFlags: U2, animation: U2, visualVariableData: U2, dataDriven0: U2, dataDriven1: U2, dataDriven2: U2, gpgpu: U2, size: C2 };
var y3 = { displayViewScreenMat3: rt, displayViewMat3: rt, displayMat3: rt, viewMat3: rt, tileMat3: rt, displayZoomFactor: C2, requiredZoomFactor: C2, tileOffset: X, currentScale: C2, currentZoom: C2, metersPerSRUnit: C2 };
var u13 = class extends e7 {
  constructor() {
    super(...arguments), this.vertexShader = n3("materials/pie/pie.vert"), this.fragmentShader = n3("materials/pie/pie.frag"), this.required = __spreadProps(__spreadValues(__spreadValues({}, d5), y3), { outlineWidth: C2, colors: B2, defaultColor: _3, othersColor: _3, outlineColor: _3, donutRatio: C2, sectorThreshold: C2 }), this.options = { hittestUniforms: p4, visualVariableSizeMinMaxValue: { minMaxValueAndSize: _3 }, visualVariableSizeScaleStops: { sizes: { type: "array", elementType: C2, size: 8 }, values: { type: "array", elementType: C2, size: 8 } }, visualVariableSizeStops: { sizes: { type: "array", elementType: C2, size: 8 }, values: { type: "array", elementType: C2, size: 8 } }, visualVariableSizeUnitValue: { unitValueToPixelsRatio: C2 }, visualVariableOpacity: { opacities: { type: "array", elementType: C2, size: 8 }, opacityValues: { type: "array", elementType: C2, size: 8 } }, highlightUniforms: { highlightAll: C2, activeReasons: C2 } }, this.locations = { pos: { index: 0, type: X }, id: { index: 1, type: Y }, bitset: { index: 2, type: C2 }, offset: { index: 3, type: X }, texCoords: { index: 4, type: X }, size: { index: 5, type: X }, referenceSize: { index: 6, type: C2 }, zoomRange: { index: 7, type: X } }, this.defines = { VV_SIZE_MIN_MAX_VALUE: "boolean", VV_SIZE_SCALE_STOPS: "boolean", VV_SIZE_FIELD_STOPS: "boolean", VV_SIZE_UNIT_VALUE: "boolean", VV_OPACITY: "boolean", HITTEST: "boolean", numberOfFields: "number", highlight: "boolean", inside: "boolean", outside: "boolean" };
  }
  setNumberOfFields(e9) {
    this.required.colors = { type: "array", elementType: _3, size: e9 };
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/pieChart/PieChartTechnique.js
var u14 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 29, this.shaders = { geometry: new u13() }, this.symbologyPlane = 2;
  }
  render(e9, h10) {
    const { painter: u19 } = e9, { instance: o16, target: n17 } = h10, l10 = this.shaders.geometry, m13 = o16.getInput(), f15 = m13.uniforms.numberOfFields, S7 = a(e9), V5 = f2(e9, n17), d8 = d(e9);
    l10.setNumberOfFields(f15), u19.setShader({ shader: l10, uniforms: __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, u4(e9, h10.target, m13.uniforms.shader)), V5.storage), V5.view), V5.highlight), { highlightUniforms: V5.highlight, hittestUniforms: V5.hittestRequest ? { hittestDist: V5.hittestRequest?.distance, hittestPos: V5.hittestRequest?.position } : null }), defines: __spreadProps(__spreadValues({ VV_SIZE_MIN_MAX_VALUE: !!m13.uniforms.shader.visualVariableSizeMinMaxValue, VV_SIZE_SCALE_STOPS: !!m13.uniforms.shader.visualVariableSizeScaleStops, VV_SIZE_FIELD_STOPS: !!m13.uniforms.shader.visualVariableSizeStops, VV_SIZE_UNIT_VALUE: !!m13.uniforms.shader.visualVariableSizeUnitValue, VV_OPACITY: !!m13.uniforms.shader.visualVariableOpacity, HITTEST: S7, highlight: V5.highlight ? 1 : 0 }, d8), { numberOfFields: f15 }), optionalAttributes: {}, useComputeBuffer: S7 }), u19.setPipelineState(m3(e9)), u19.submitDraw(e9, h10);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextTechnique.js
var o12 = class extends t5 {
  constructor() {
    super(...arguments), this.type = 31, this.shaders = { geometry: new Q() }, this.symbologyPlane = 3;
  }
  render(e9, n17) {
    const { painter: o16 } = e9, u19 = d(e9), d8 = n17.instance.getInput(), m13 = { shader: this.shaders.geometry, uniforms: __spreadProps(__spreadValues(__spreadValues({}, u4(e9, n17.target, d8.uniforms)), f2(e9, n17.target)), { mosaicInfo: o16.textureManager.getMosaicInfo(e9, n17.textureKey) }), defines: __spreadProps(__spreadValues({}, u19), { isBackgroundPass: true, isLabel: false, textRenderPassType: 0 }), optionalAttributes: d8.optionalAttributes, useComputeBuffer: a(e9) };
    o16.setShader(m13), o16.setPipelineState(m3(e9)), o16.submitDraw(e9, n17), o16.setShader(__spreadProps(__spreadValues({}, m13), { defines: __spreadProps(__spreadValues({}, u19), { isBackgroundPass: false, isLabel: false, textRenderPassType: 2 }) })), o16.submitDraw(e9, n17), o16.setShader(__spreadProps(__spreadValues({}, m13), { defines: __spreadProps(__spreadValues({}, u19), { isBackgroundPass: false, isLabel: false, textRenderPassType: 1 }) })), o16.submitDraw(e9, n17), o16.setShader(__spreadProps(__spreadValues({}, m13), { defines: __spreadProps(__spreadValues({}, u19), { isBackgroundPass: false, isLabel: false, textRenderPassType: 0 }) })), o16.submitDraw(e9, n17);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/TechniqueRegistry.js
var F9 = { fill: new n8(), patternFill: new u9(), complexFill: new u7(), gradientFill: new n9(), outlineFill: new u8(), patternOutlineFill: new l5(), complexOutlineFill: new l4(), marker: new n12(), pieChart: new u14(), line: new u11(), texturedLine: new u12(), gradientStroke: new h8(), text: new o12(), label: new o10(), heatmap: new u10(), dotDensity: new f9(), animatedMarker: new o8(), animatedMarkerShift: new i5(), animatedFill: new n7(), animatedLine: new a2() };
function x6() {
  for (const e9 in F9) {
    F9[e9].startup();
  }
}
function k5(e9) {
  for (const i8 in F9) {
    F9[i8].shutdown(e9);
  }
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/schemaUtils.js
function n14(n17, t8) {
  const r9 = n17.slice(0, t8), e9 = t8 - r9.length;
  for (let o16 = 0; o16 < e9; o16++) {
    const n18 = r9[r9.length - 1];
    r9.push(n18);
  }
  return r9;
}
function t6(n17) {
  if (!n17) return [0, 0, 0, 0];
  const { r: t8, g: r9, b: e9, a: o16 } = n17;
  return [t8 * (o16 / 255), r9 * (o16 / 255), e9 * (o16 / 255), o16];
}

// node_modules/@arcgis/core/views/2d/layers/features/support/rendererUtils.js
var l8 = 8;
var s8 = l8 - 2;
var n15 = () => n.getLogger("esri.views.2d.layers.features.support.rendererUtils");
function u15(e9) {
  return e9.map((e10) => a5(e10) ? i6(e10.clone()) : e10);
}
function a5(e9) {
  return ("size" === e9.type || "color" === e9.type || "opacity" === e9.type) && null != e9.stops;
}
function i6(e9) {
  return e9.stops = b3(e9.type, e9.stops ?? []), e9;
}
function p5(e9, o16, r9) {
  return (1 - r9) * e9 + r9 * o16;
}
function c3(e9, o16) {
  const [t8, ...l10] = o16, n17 = l10.pop(), u19 = l10[0].value, a8 = l10[l10.length - 1].value, i8 = (a8 - u19) / s8, c7 = [];
  for (let s11 = u19; s11 < a8; s11 += i8) {
    let t9 = 0;
    for (; s11 >= l10[t9].value; ) t9++;
    const n18 = l10[t9], u20 = o16[t9 - 1], a9 = s11 - u20.value, i9 = n18.value === u20.value ? 1 : a9 / (n18.value - u20.value);
    if ("color" === e9) {
      const e10 = l10[t9], r9 = o16[t9 - 1], n19 = e10.color.clone();
      n19.r = p5(r9.color.r, n19.r, i9), n19.g = p5(r9.color.g, n19.g, i9), n19.b = p5(r9.color.b, n19.b, i9), n19.a = p5(r9.color.a, n19.a, i9), c7.push({ value: s11, color: n19, label: e10.label });
    } else if ("size" === e9) {
      const e10 = l10[t9], n19 = o16[t9 - 1], u21 = o(e10.size), a10 = p5(o(n19.size), u21, i9);
      c7.push({ value: s11, size: a10, label: e10.label });
    } else {
      const e10 = l10[t9], r9 = p5(o16[t9 - 1].opacity, e10.opacity, i9);
      c7.push({ value: s11, opacity: r9, label: e10.label });
    }
  }
  return [t8, ...c7, n17];
}
function f11(e9) {
  const [o16, ...r9] = e9, t8 = r9.pop();
  for (; r9.length > s8; ) {
    let e10 = 0, o17 = 0;
    for (let t9 = 1; t9 < r9.length; t9++) {
      const l10 = r9[t9 - 1], s11 = r9[t9], n17 = Math.abs(s11.value - l10.value);
      n17 > o17 && (o17 = n17, e10 = t9);
    }
    r9.splice(e10, 1);
  }
  return [o16, ...r9, t8];
}
function b3(e9, o16) {
  return o16.length <= l8 ? o16 : (n15().warn(`Found ${o16.length} Visual Variable stops, but MapView only supports ${l8}. Displayed stops will be simplified.`), o16.length > 2 * l8 ? c3(e9, o16) : f11(o16));
}
function g12() {
  const { supportsColorBufferFloat: e9, supportsColorBufferFloatBlend: o16, supportsColorBufferHalfFloat: r9 } = t2();
  return e9 && o16 || r9;
}
function m9(o16) {
  if (!o16) return true;
  switch (o16.type) {
    case "dot-density":
      break;
    case "heatmap":
      if (!g12()) {
        const o17 = t2(), r9 = ["supportsColorBufferFloat", "supportsColorBufferFloatBlend", "supportsColorBufferHalfFloat"].filter((e9) => !o17[e9]).join(", ");
        return n15().errorOnce(new r2("webgl-missing-extension", `Missing WebGL2 requirements for Heatmap: ${r9}`)), false;
      }
  }
  return true;
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/VisualVariablesSchema.js
var u16 = 1.25;
var n16 = 128;
var o13 = 128;
function p6(e9) {
  if (!e9.stops?.length) return null;
  const a8 = e9.stops.sort((e10, a9) => e10.value - a9.value), i8 = n14(a8, 8), l10 = i8.map(({ value: e10 }) => e10), r9 = i8.map(({ color: e10 }) => t6(e10));
  return { values: l10, colors: r9 };
}
function c4(e9) {
  if (!e9.stops?.length) return null;
  const a8 = e9.stops.sort((e10, a9) => e10.value - a9.value), i8 = n14(a8, 8);
  return { opacityValues: i8.map(({ value: e10 }) => e10), opacities: i8.map(({ opacity: e10 }) => e10) };
}
function v5(e9) {
  return { rotationType: "geographic" === e9.rotationType ? 0 : 1 };
}
function V3(a8) {
  if (!a8.stops?.length) return null;
  if (a8.stops.some((e9) => e9.useMaxValue || e9.useMinValue)) return (i9, t9) => {
    const r9 = i9.statisticsByLevel.get(t9.key.level), u19 = a8.stops.map((i10) => ({ value: i10.useMaxValue ? r9?.get(a8.field)?.maxValue ?? 0 : i10.useMinValue ? r9?.get(a8.field)?.minValue ?? 0 : i10.value, size: i10.size ? u2(i10.size) : c })).sort((e9, a9) => e9.value - a9.value), n17 = n14(u19, 8);
    return { values: n17.map(({ value: e9 }) => e9), sizes: n17.map(({ size: e9 }) => e9) };
  };
  const i8 = a8.stops.sort((e9, a9) => e9.value - a9.value), t8 = n14(i8, 8);
  return { values: t8.map(({ value: e9 }) => e9), sizes: t8.map(({ size: a9 }) => u2(a9)) };
}
function f12(e9) {
  return (l10) => {
    const { state: s11 } = l10;
    return { unitValueToPixelsRatio: re(s11.spatialReference) / m[e9.valueUnit ?? "meters"] / s11.resolution };
  };
}
function m10(e9, a8) {
  const i8 = a8.length;
  if (e9 < a8[0].value || 1 === i8) return a8[0].size;
  for (let l10 = 1; l10 < i8; l10++) if (e9 < a8[l10].value) {
    const i9 = (e9 - a8[l10 - 1].value) / (a8[l10].value - a8[l10 - 1].value);
    return a8[l10 - 1].size + i9 * (a8[l10].size - a8[l10 - 1].size);
  }
  return a8[i8 - 1].size;
}
function S5(a8) {
  const { minDataValue: i8, maxDataValue: l10, minSize: s11, maxSize: t8 } = a8;
  if ("object" == typeof s11 && "object" == typeof t8) return (a9, r9) => {
    const u19 = a9.state.scale, n17 = u2(m10(u19, s11.stops)), o16 = u2(m10(u19, t8.stops));
    return { minMaxValueAndSize: [i8, l10, n17, o16] };
  };
  if ("object" == typeof s11 || "object" == typeof t8) throw new Error("InternalError: Found a partial VisualVariableSizeMinMaxValue");
  return { minMaxValueAndSize: [i8, l10, u2(s11), u2(t8)] };
}
var b4 = { visualVariableColor: null, visualVariableOpacity: null, visualVariableRotation: null, visualVariableSizeStops: null, visualVariableSizeScaleStops: null, visualVariableSizeOutlineScaleStops: null, visualVariableSizeUnitValue: null, visualVariableSizeMinMaxValue: null };
function z5(e9, a8 = o13, i8 = u16) {
  if (e9.visualVariableSizeMinMaxValue) return "function" == typeof e9.visualVariableSizeMinMaxValue ? n16 : Math.max(e9.visualVariableSizeMinMaxValue.minMaxValueAndSize[3] * i8, a8);
  if (e9.visualVariableSizeScaleStops) {
    if ("function" == typeof e9.visualVariableSizeScaleStops) return n16;
    const l10 = e9.visualVariableSizeScaleStops.sizes;
    return Math.max(l10[l10.length - 1] * i8, a8);
  }
  if (e9.visualVariableSizeStops) {
    if ("function" == typeof e9.visualVariableSizeStops) return n16;
    const l10 = e9.visualVariableSizeStops.sizes;
    return Math.max(l10[l10.length - 1] * i8, a8);
  }
  return e9.visualVariableSizeUnitValue ? 2 * n16 : 0;
}
function x7(e9) {
  const a8 = __spreadValues({}, b4);
  if (!e9 || !("visualVariables" in e9) || !e9.visualVariables) return a8;
  for (const i8 of u15(e9.visualVariables)) switch (i8.type) {
    case "color":
      a8.visualVariableColor = p6(i8);
      break;
    case "opacity":
      a8.visualVariableOpacity = c4(i8);
      break;
    case "rotation":
      a8.visualVariableRotation = v5(i8);
      break;
    case "size":
      switch (y4(i8)) {
        case "field-stops":
          a8.visualVariableSizeStops = V3(i8);
          break;
        case "scale-stops":
          "outline" === i8.target ? a8.visualVariableSizeOutlineScaleStops = V3(i8) : a8.visualVariableSizeScaleStops = V3(i8);
          break;
        case "min-max":
          a8.visualVariableSizeMinMaxValue = S5(i8);
          break;
        case "unit-value":
          a8.visualVariableSizeUnitValue = f12(i8);
      }
      break;
  }
  return a8;
}
function y4(e9) {
  return "number" == typeof e9.minDataValue && "number" == typeof e9.maxDataValue && null != e9.minSize && null != e9.maxSize ? "min-max" : "$view.scale" === e9?.valueExpression && Array.isArray(e9.stops) ? "scale-stops" : null == e9.field && "$view.scale" === e9?.valueExpression || !(Array.isArray(e9.stops) || "levels" in e9 && e9.levels) ? null != e9.field || "$view.scale" !== e9?.valueExpression ? "unit-value" : null : "field-stops";
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/symbols/utils.js
function A7(A8) {
  return !!(A8.visualVariableSizeMinMaxValue || A8.visualVariableSizeScaleStops || A8.visualVariableSizeStops || A8.visualVariableSizeUnitValue || A8.visualVariableSizeOutlineScaleStops);
}
function e8(A8) {
  return !!A8.visualVariableRotation;
}
function a6(A8) {
  return A8.spriteRasterizationParam ? A8.spriteRasterizationParam : { type: "sprite-rasterization-param", resource: { type: "CIMPictureMarker", enable: true, url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAsSURBVEhL7c0xAQAwDASh+jf9lcCU7TDA27ECKqACKqACKqACKqACKqDjYPuLVfSmMPfafQAAAABJRU5ErkJggg==", size: 16, invertBackfaceTexture: false, scaleX: 1, textureFilter: "Picture" }, overrides: [] };
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/symbols/ComplexSymbolSchema.js
function r8(e9) {
  return e9.minScale || e9.maxScale ? { minScale: e9.minScale ?? 0, maxScale: e9.maxScale ?? 0 } : null;
}
function s9(e9) {
  if (null == e9) return null;
  if (Array.isArray(e9)) {
    const [a8, i8, l10, n17] = e9;
    return [a8, i8, l10, 255 * n17];
  }
  return "string" == typeof e9 ? e9 : __spreadProps(__spreadValues({}, e9), { defaultValue: s9(e9?.defaultValue) });
}
async function c5(a8, i8) {
  const { cimResourceManager: l10, cimAnalyzer: n17, scaleExpression: t8 } = i8.schemaOptions;
  await Promise.all(_2.fetchResources(a8.symbol, l10, []));
  const o16 = n17.analyzeSymbolReference(a8, false), s11 = { scaleInfo: r8(a8), scaleExpression: t8 }, c7 = [];
  for (const e9 of o16) switch (e9.type) {
    case "marker":
      c7.push(...u17(e9, i8, s11));
      break;
    case "fill":
      c7.push(...h9(e9, i8, s11));
      break;
    case "outlineFill":
      c7.push(...b5(e9, i8, s11));
      break;
    case "gradientFill":
      c7.push(...v6(e9, i8, s11));
      break;
    case "line":
      c7.push(...y5(e9, i8, s11));
      break;
    case "gradientStroke":
      c7.push(...R7(e9, i8, s11));
      break;
    case "text":
      c7.push(...C7(e9, i8, s11));
  }
  return c7;
}
function u17(e9, a8, l10) {
  const { uniforms: t8, schemaOptions: o16 } = a8, { store: r9 } = o16, s11 = e9.isOutline ? __spreadProps(__spreadValues({}, b4), { visualVariableSizeScaleStops: t8.visualVariableSizeOutlineScaleStops }) : { visualVariableColor: t8.visualVariableColor, visualVariableOpacity: t8.visualVariableOpacity, visualVariableSizeMinMaxValue: t8.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t8.visualVariableSizeScaleStops, visualVariableSizeStops: t8.visualVariableSizeStops, visualVariableSizeUnitValue: t8.visualVariableSizeUnitValue, visualVariableRotation: t8.visualVariableRotation };
  if (e9.animationParams) {
    const { hasShiftAnimation: a9 } = e9.animationParams.params, t9 = a9 ? F9.animatedMarkerShift : F9.animatedMarker;
    return f13(r9.ensureInstance(t9, { uniforms: s11, optionalAttributes: { zoomRange: true, value1Position2Value2: e9.animationParams.params.hasShiftAnimation, lineLength: a9 } }), e9, b4, l10);
  }
  return p7(r9.ensureInstance(F9.marker, { uniforms: s11, optionalAttributes: { zoomRange: !!l10.scaleInfo } }), e9, t8, l10);
}
function f13(e9, a8, i8, l10) {
  if (!a8.animationParams) return [];
  return [e9.createMeshInfo({ pixelDimensions: a8.pixelDimensions, texelDimensions: a8.texelDimensions, effects: a8.effects ? { type: "cim-effect-infos", effectInfos: a8.effects } : null, sprite: a6(a8), animations: a8.animationParams, scaleInfo: l10.scaleInfo, scaleSymbolsProportionally: a8.scaleSymbolsProportionally, strokeWidth: a8.outlineWidth, isMapAligned: 1 === a8.alignment, colorLocked: a8.colorLocked, isStroke: a8.isStroke, baseSize: a8.baseSize, placement: a8.markerPlacement, referenceSize: a8.referenceSize, angleToLine: !!a8.markerPlacement && (a8.markerPlacement.placement && "angleToLine" in a8.markerPlacement.placement && a8.markerPlacement.placement.angleToLine), sizeRatio: a8.sizeRatio, patternHeight: null })];
}
function m11(e9, a8, i8, l10) {
  if (!a8.animationParams) return [];
  return [e9.createMeshInfo({ effects: a8.effects ? { type: "cim-effect-infos", effectInfos: a8.effects } : null, sprite: a6(a8), animations: a8.animationParams, scaleInfo: l10.scaleInfo, scaleSymbolsProportionally: false, strokeWidth: 1, isMapAligned: true, colorLocked: a8.colorLocked || false, isStroke: false, baseSize: "width" in a8 ? a8.width : -1, placement: null, referenceSize: 2, angleToLine: false, sizeRatio: 1, patternHeight: "fill" === a8.type && a8.spriteRasterizationParam ? a8.height : null, joinType: "join" in a8 ? a8.join : "round", capType: "cap" in a8 ? a8.cap : "round", miterLimit: "miterLimit" in a8 && a8.miterLimit || 2, angle: "angle" in a8 ? a8.angle : 0 })];
}
function p7(e9, i8, n17, { scaleInfo: t8, scaleExpression: r9 }) {
  const c7 = A7(n17);
  return [e9.createMeshInfo({ size: i8.size, scaleX: i8.scaleX, anchorX: i8.anchorPoint.x, anchorY: i8.anchorPoint.y, angle: i8.rotation, color: s9(i8.color) ?? [0, 0, 0, 0], colorLocked: i8.colorLocked, frameHeight: i8.frameHeight, widthRatio: i8.widthRatio, scaleInfo: t8, offsetX: i8.offsetX, offsetY: i8.offsetY, outlineColor: s9(i8.outlineColor) ?? [0, 0, 0, 0], outlineSize: i8.outlineWidth, referenceSize: i8.referenceSize || o3.CIMVectorMarker.size, rotateClockwise: i8.rotateClockwise, scaleFactor: r9 ?? 1, sizeRatio: i8.sizeRatio, alignment: i8.alignment, isAbsoluteAnchorPoint: i8.isAbsoluteAnchorPoint, scaleSymbolsProportionally: i8.scaleSymbolsProportionally, sprite: i8.spriteRasterizationParam, hasSizeVV: c7, placement: i8.markerPlacement, effects: i8.effects ? { type: "cim-effect-infos", effectInfos: i8.effects } : null, transforms: i8.transform, minPixelBuffer: z5(n17) })];
}
function S6(e9, a8, l10) {
  const { uniforms: t8, schemaOptions: o16 } = a8, { store: r9 } = o16, s11 = { visualVariableColor: e9.colorLocked ? null : t8.visualVariableColor, visualVariableOpacity: t8.visualVariableOpacity };
  if (e9.animationParams) {
    const a9 = F9.animatedFill;
    return m11(r9.ensureInstance(a9, { uniforms: __spreadProps(__spreadValues({}, s11), { visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null, visualVariableSizeScaleStops: null, visualVariableRotation: null }), optionalAttributes: { zoomRange: true, value1Position2Value2: false, lineLength: false } }), e9, b4, l10);
  }
  return z6(r9.ensureInstance(F9.fill, { uniforms: s11, optionalAttributes: { zoomRange: !!l10.scaleInfo } }), e9, l10);
}
function b5(e9, a8, l10) {
  const { uniforms: n17, schemaOptions: t8 } = a8, { store: o16 } = t8;
  return V4(o16.ensureInstance(F9.outlineFill, { uniforms: { visualVariableColor: e9.colorLocked ? null : n17.visualVariableColor, visualVariableOpacity: n17.visualVariableOpacity, visualVariableSizeMinMaxValue: null, visualVariableSizeScaleStops: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null }, optionalAttributes: { zoomRange: !!l10.scaleInfo } }), e9, l10);
}
function V4(e9, a8, i8) {
  const l10 = s9(a8.color) ?? [0, 0, 0, 0], n17 = s9(a8.outlineColor) ?? [0, 0, 0, 0];
  return [e9.createMeshInfo({ color: l10, outlineColor: n17, width: a8.outlineWidth, referenceWidth: a8.referenceWidth, capType: a8.cap, joinType: a8.join, miterLimit: a8.miterLimit, outlineUsesColorVV: !a8.outlineColorLocked, hasSizeVV: false, scaleInfo: i8.scaleInfo, effects: a8.effects ? { type: "cim-effect-infos", effectInfos: a8.effects } : null, outlineEffects: a8.outlineEffects ? { type: "cim-effect-infos", effectInfos: a8.outlineEffects } : null })];
}
function z6(e9, a8, { scaleInfo: i8 }) {
  return [e9.createMeshInfo({ color: s9(a8.color) ?? [0, 0, 0, 0], scaleInfo: i8, effects: a8.effects ? { type: "cim-effect-infos", effectInfos: a8.effects } : null })];
}
function h9(e9, a8, l10) {
  if (!e9.spriteRasterizationParam) return S6(e9, a8, l10);
  const { uniforms: t8, schemaOptions: o16 } = a8, { store: r9 } = o16, s11 = { visualVariableColor: e9.colorLocked ? null : t8.visualVariableColor, visualVariableOpacity: t8.visualVariableOpacity };
  if (e9.animationParams) {
    const a9 = F9.animatedFill;
    return m11(r9.ensureInstance(a9, { uniforms: __spreadProps(__spreadValues({}, s11), { visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null, visualVariableSizeScaleStops: null, visualVariableRotation: null }), optionalAttributes: { zoomRange: true, value1Position2Value2: false, lineLength: false, angle: !!e9.angle } }), e9, b4, l10);
  }
  return d6(r9.ensureInstance(F9.complexFill, { uniforms: s11, optionalAttributes: { zoomRange: !!l10.scaleInfo } }), e9, null != t8.visualVariableColor, l10);
}
function d6(e9, a8, i8, { scaleInfo: l10 }) {
  if (!a8.spriteRasterizationParam) throw new Error("InternalError: Sprite should always be defined");
  const n17 = !!a8.hasUnresolvedReplacementColor && (!i8 || a8.colorLocked), t8 = a8.sampleAlphaOnly && !n17, o16 = a8.spriteRasterizationParam;
  return [e9.createMeshInfo({ color: s9(a8.color) ?? [0, 0, 0, 0], height: a8.height, aspectRatio: a8.scaleX, offsetX: a8.offsetX, offsetY: a8.offsetY, scaleX: 1, scaleY: 1, angle: a8.angle, applyRandomOffset: a8.applyRandomOffset, sampleAlphaOnly: t8, scaleProportionally: "CIMHatchFill" === o16.resource.type, sprite: o16, scaleInfo: l10, effects: a8.effects ? { type: "cim-effect-infos", effectInfos: a8.effects } : null })];
}
function v6(e9, a8, l10) {
  const { uniforms: n17, schemaOptions: t8 } = a8, { store: o16 } = t8;
  return g13(o16.ensureInstance(F9.gradientFill, { uniforms: { visualVariableColor: null, visualVariableOpacity: n17.visualVariableOpacity }, optionalAttributes: { zoomRange: !!l10.scaleInfo } }), e9, l10);
}
function g13(e9, a8, { scaleInfo: i8 }) {
  if (!a8.spriteRasterizationParam) throw new Error("InternalError: Sprite should always be defined");
  const l10 = a8.spriteRasterizationParam;
  return [e9.createMeshInfo({ color: s9(a8.color) ?? [0, 0, 0, 0], angle: a8.angle, gradientMethod: a8.gradientMethod, gradientSize: a8.gradientSize, gradientSizeUnits: a8.gradientSizeUnits, gradientType: a8.gradientType, sprite: l10, scaleInfo: i8, effects: a8.effects ? { type: "cim-effect-infos", effectInfos: a8.effects } : null })];
}
function y5(e9, a8, l10) {
  const { uniforms: t8, schemaOptions: o16 } = a8, { store: r9 } = o16, s11 = e9.isOutline ? __spreadProps(__spreadValues({}, b4), { visualVariableSizeScaleStops: t8.visualVariableSizeOutlineScaleStops }) : { visualVariableColor: e9.colorLocked ? null : t8.visualVariableColor, visualVariableOpacity: t8.visualVariableOpacity, visualVariableSizeMinMaxValue: t8.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t8.visualVariableSizeScaleStops, visualVariableSizeStops: t8.visualVariableSizeStops, visualVariableSizeUnitValue: t8.visualVariableSizeUnitValue };
  if (e9.animationParams) {
    const { hasShiftAnimation: a9 } = e9.animationParams.params, t9 = F9.animatedLine;
    return m11(r9.ensureInstance(t9, { uniforms: __spreadProps(__spreadValues({}, s11), { visualVariableRotation: null }), optionalAttributes: { zoomRange: true, value1Position2Value2: false, accumulatedDistance: true, segmentDirection: true, normal: true, lineLength: a9, angle: false } }), e9, b4, l10);
  }
  const c7 = { uniforms: s11, optionalAttributes: { zoomRange: !!l10.scaleInfo } }, u19 = !!(s11.visualVariableSizeMinMaxValue || s11.visualVariableSizeScaleStops || s11.visualVariableSizeStops || s11.visualVariableSizeUnitValue);
  if (!e9.spriteRasterizationParam) {
    return M2(r9.ensureInstance(F9.line, c7), e9, u19, l10);
  }
  return P8(r9.ensureInstance(F9.texturedLine, c7), e9, u19, l10);
}
function I3(e9, a8, { scaleInfo: i8 }) {
  return { color: s9(e9.color) ?? [0, 0, 0, 0], width: e9.width, referenceWidth: e9.referenceWidth, capType: e9.cap, joinType: e9.join, miterLimit: e9.miterLimit, scaleInfo: i8, hasSizeVV: a8, effects: e9.effects ? { type: "cim-effect-infos", effectInfos: e9.effects } : null };
}
function M2(e9, a8, i8, l10) {
  if (a8.spriteRasterizationParam) throw new Error("InternalError: Sprite should not be defined");
  const n17 = I3(a8, i8, l10);
  return [e9.createMeshInfo(n17)];
}
function P8(e9, a8, i8, l10) {
  const { spriteRasterizationParam: n17, scaleDash: t8, sampleAlphaOnly: o16 } = a8;
  if (!n17) throw new Error("InternalError: Sprite should be defined");
  return [e9.createMeshInfo(__spreadProps(__spreadValues({}, I3(a8, i8, l10)), { offsetAlongLine: a8.offsetAlongLine ?? 0, shouldScaleDash: t8 ?? false, shouldSampleAlphaOnly: o16, isSDF: "CIMPictureStroke" !== n17.resource.type && "CIMGradientStroke" !== n17.resource.type, sprite: n17 }))];
}
function R7(e9, a8, l10) {
  const { uniforms: t8, schemaOptions: o16 } = a8, { store: r9 } = o16;
  return k6(r9.ensureInstance(F9.gradientStroke, { uniforms: e9.isOutline ? __spreadProps(__spreadValues({}, b4), { visualVariableSizeScaleStops: t8.visualVariableSizeOutlineScaleStops }) : { visualVariableColor: null, visualVariableOpacity: t8.visualVariableOpacity, visualVariableSizeMinMaxValue: t8.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t8.visualVariableSizeScaleStops, visualVariableSizeStops: t8.visualVariableSizeStops, visualVariableSizeUnitValue: t8.visualVariableSizeUnitValue }, optionalAttributes: { zoomRange: !!l10.scaleInfo } }), e9, l10);
}
function k6(e9, a8, i8) {
  if (!a8.spriteRasterizationParam) throw new Error("InternalError: Sprite should always be defined");
  const l10 = a8.spriteRasterizationParam;
  return [e9.createMeshInfo(__spreadProps(__spreadValues({}, I3(a8, false, i8)), { gradientMethod: a8.gradientMethod, gradientSize: a8.gradientSize, gradientSizeUnits: a8.gradientSizeUnits, gradientType: a8.gradientType, sprite: l10, effects: a8.effects ? { type: "cim-effect-infos", effectInfos: a8.effects } : null }))];
}
function C7(e9, a8, l10) {
  const { uniforms: n17, schemaOptions: t8 } = a8, { store: o16 } = t8;
  return L3(o16.ensureInstance(F9.text, { uniforms: { visualVariableColor: e9.colorLocked ? null : n17.visualVariableColor, visualVariableOpacity: n17.visualVariableOpacity, visualVariableRotation: n17.visualVariableRotation, visualVariableSizeMinMaxValue: n17.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: n17.visualVariableSizeScaleStops, visualVariableSizeStops: n17.visualVariableSizeStops, visualVariableSizeUnitValue: n17.visualVariableSizeUnitValue }, optionalAttributes: { zoomRange: !!l10.scaleInfo, referenceSymbol: false, clipAngle: false, visibility: false } }), e9, n17, l10);
}
function L3(e9, a8, i8, { scaleInfo: n17, scaleExpression: t8 }) {
  return [e9.createMeshInfo({ alignment: a8.alignment, boxBackgroundColor: s9(a8.backgroundColor), boxBorderLineColor: s9(a8.borderLineColor), boxBorderLineSize: a8.borderLineWidth ?? 0, color: s9(a8.color) ?? [0, 0, 0, 0], offsetX: a8.offsetX, offsetY: a8.offsetY, postAngle: a8.angle, fontSize: a8.size, referenceSize: a8.referenceSize, decoration: a8.decoration, haloColor: s9(a8.haloColor) ?? [0, 0, 0, 0], haloSize: a8.haloSize ?? 0, outlineColor: s9(a8.outlineColor) ?? [0, 0, 0, 0], outlineSize: a8.outlineSize, lineWidth: a8.lineWidth || 512, lineHeightRatio: 1, horizontalAlignment: a8.horizontalAlignment ?? "center", verticalAlignment: a8.verticalAlignment ?? "baseline", useCIMAngleBehavior: false, glyphs: a8.textRasterizationParam, scaleInfo: n17, effects: a8.effects ? { type: "cim-effect-infos", effectInfos: a8.effects } : null, placement: a8.markerPlacement, transforms: a8.transform, scaleFactor: t8 ?? 1, minPixelBuffer: z5(i8), repeatLabel: null, repeatLabelDistance: null, allowOverrun: null, labelPosition: null, layerId: null, labelClassId: null })];
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/StorageSchema.js
function t7(e9, i8) {
  return { type: "simple", filters: i8, capabilities: { maxTextureSize: t2().maxTextureSize }, bindings: o14(e9) };
}
function s10(e9, r9) {
  const t8 = t2();
  return { type: "multi", target: "feature", keyField: r3, filters: r9, capabilities: { maxTextureSize: t8.maxTextureSize }, bindings: { 0: o14(e9.trackLines.renderer), 1: o14(e9.latestObservations.renderer), 2: o14(e9.previousObservations.renderer) } };
}
function a7(e9) {
  switch (e9) {
    case "opacity":
      return 2;
    case "color":
      return 1;
    case "rotation":
      return 3;
    case "size":
      return 0;
    default:
      return null;
  }
}
function o14(e9) {
  if (!e9) return [];
  switch (e9.type) {
    case "simple":
    case "class-breaks":
    case "unique-value":
    case "dictionary":
      return p8(e9);
    case "dot-density":
      return l9(e9);
    case "pie-chart":
      return u18(e9);
    case "heatmap":
      return c6(e9);
  }
}
function l9(e9) {
  const i8 = [];
  for (const r9 of e9.attributes) i8.push({ binding: i8.length, expression: r9.valueExpression, field: r9.field });
  return i8;
}
function u18(e9) {
  const i8 = p8(e9);
  let r9 = 4;
  for (const n17 of e9.attributes) i8.push({ binding: r9++, expression: n17.valueExpression, field: n17.field });
  return i8;
}
function c6({ valueExpression: e9, field: i8 }) {
  return e9 || i8 ? [{ binding: 0, expression: e9, field: i8 }] : [];
}
function p8(i8) {
  if (!("visualVariables" in i8) || !i8.visualVariables?.length) return [];
  return u15(i8.visualVariables).map((e9) => b6(e9)).filter(N);
}
function f14(e9) {
  return "$view.scale" === e9.valueExpression ? null : { binding: a7(e9.type), field: e9.field, normalizationField: e9.normalizationField, expression: e9.valueExpression, valueRepresentation: e9.valueRepresentation };
}
function d7(e9) {
  return { binding: a7(e9.type), field: e9.field, normalizationField: e9.normalizationField, expression: e9.valueExpression };
}
function m12(e9) {
  return { binding: a7(e9.type), field: e9.field, normalizationField: e9.normalizationField, expression: e9.valueExpression };
}
function x8(e9) {
  return { binding: a7(e9.type), expression: e9.valueExpression, field: e9.field };
}
function b6(e9) {
  switch (e9.type) {
    case "size":
      return f14(e9);
    case "color":
      return d7(e9);
    case "opacity":
      return m12(e9);
    case "rotation":
      return x8(e9);
  }
}

// node_modules/@arcgis/core/views/2d/layers/support/FeatureCommandQueue.js
var i7 = class {
  constructor() {
    this.type = "override-batch", this.messages = [], this._resovler = $();
  }
  get promise() {
    return this._resovler.promise;
  }
  resolve() {
    this._resovler.resolve();
  }
  add(e9) {
    this.messages.push(e9);
  }
};
var o15 = class {
  constructor(e9) {
    this.updateTracking = new n2({ debugName: "FeatureCommandQueue" }), this.process = e9.process, this._queueProcessor = new u({ concurrency: 1, process: async (e10) => {
      if ("override-batch" === e10.type) {
        const e11 = this._nextOverrideBatch;
        if (null == e11) throw new Error("InternalError: Override should be defined");
        return this._nextOverrideBatch = null, await this.process(e11), void e11.resolve();
      }
      return this.process(e10);
    } });
  }
  destroy() {
    this.updateTracking.destroy(), this._queueProcessor.destroy(), this.clear();
  }
  clear() {
    this._queueProcessor.clear();
  }
  async push(r9) {
    return y(this.updateTracking.addPromise(this._doPush(r9)));
  }
  async _doPush(e9) {
    const r9 = this._queueProcessor, s11 = r9.last();
    switch (e9.type) {
      case "update":
      case "highlight":
        if (s11?.type === e9.type) return;
        return r9.push(e9);
      case "override":
      case "edit":
        return this._pushOverride(e9);
    }
  }
  _pushOverride(e9) {
    return null == this._nextOverrideBatch && (this._nextOverrideBatch = new i7(), this._queueProcessor.push(this._nextOverrideBatch)), this._nextOverrideBatch.add(e9), this._nextOverrideBatch.promise;
  }
};

export {
  t3 as t,
  F9 as F,
  x6 as x,
  k5 as k,
  t6 as t2,
  m9 as m,
  b4 as b,
  z5 as z,
  x7 as x2,
  A7 as A,
  e8 as e,
  r8 as r,
  c5 as c,
  f13 as f,
  m11 as m2,
  p7 as p,
  V4 as V,
  z6 as z2,
  d6 as d,
  g13 as g,
  M2 as M,
  P8 as P,
  k6 as k2,
  L3 as L,
  t7 as t3,
  s10 as s,
  p8 as p2,
  o15 as o
};
//# sourceMappingURL=chunk-WJCJP4VV.js.map
