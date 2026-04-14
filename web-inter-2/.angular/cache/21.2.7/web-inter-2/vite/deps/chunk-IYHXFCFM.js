import {
  n2 as n4
} from "./chunk-U2JOT2HZ.js";
import {
  t as t3
} from "./chunk-FDC6Z5K3.js";
import {
  E,
  F,
  I as I2,
  g
} from "./chunk-IL76QJRR.js";
import {
  n2 as n3
} from "./chunk-E6VYLEDD.js";
import {
  B,
  C,
  C2,
  Ct,
  Dt,
  Gt as Gt2,
  I,
  P,
  Qt,
  St,
  Te,
  Tt,
  U,
  W,
  We,
  X,
  Xe,
  Y,
  Ye,
  Yt,
  _ as _2,
  _2 as _3,
  _e,
  _t,
  f as f4,
  ge,
  hn,
  ie,
  it,
  je,
  l,
  ln,
  m2 as m,
  nn,
  oe,
  on,
  rt as rt2,
  se,
  un,
  v,
  w,
  we,
  wn,
  zt
} from "./chunk-4FZZ6VNL.js";
import {
  t as t2
} from "./chunk-NOZXZPHM.js";
import {
  G
} from "./chunk-IHDBO625.js";
import {
  r as r4
} from "./chunk-XTHUIDVT.js";
import {
  f as f3
} from "./chunk-FX3Y4WSL.js";
import {
  o as o3
} from "./chunk-6J6IDNXJ.js";
import {
  $,
  Gt,
  Rt,
  bt,
  c as c2,
  kt,
  pt,
  rt
} from "./chunk-4ZH7DSFL.js";
import {
  o as o2
} from "./chunk-3EE7FDFG.js";
import {
  a as a2,
  u as u4,
  x
} from "./chunk-SGNC5H35.js";
import {
  n as n2
} from "./chunk-47CFN4JI.js";
import {
  n,
  r as r3
} from "./chunk-KEY3YQEB.js";
import {
  f
} from "./chunk-L5CCICKP.js";
import {
  i
} from "./chunk-PM52Q5K4.js";
import {
  o,
  r as r2,
  u as u3
} from "./chunk-5GPMO33J.js";
import {
  _
} from "./chunk-X2SNEXCL.js";
import {
  f as f2,
  i as i2
} from "./chunk-UXWT3ISO.js";
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
  t,
  u as u2
} from "./chunk-SY7OJLZ7.js";
import {
  u2 as u
} from "./chunk-PQFEWUZC.js";
import {
  has
} from "./chunk-TX75HZKJ.js";
import {
  __decorate,
  __param
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BitBlitPrograms.js
var r5 = { vertexShader: n3("bitBlit/bitBlit.vert"), fragmentShader: n3("bitBlit/bitBlit.frag") };

// node_modules/@arcgis/core/views/2d/engine/webgl/shaders/StencilPrograms.js
var r6 = { vertexShader: n3("stencil/stencil.vert"), fragmentShader: n3("stencil/stencil.frag") };

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/BlendShader.js
var z = class extends C2 {
};
__decorate([f4(0, X)], z.prototype, "position", void 0);
var A = class extends I {
};
var D = class extends w {
};
__decorate([m(U)], D.prototype, "layerTexture", void 0), __decorate([m(U)], D.prototype, "backbufferTexture", void 0), __decorate([m(C)], D.prototype, "opacity", void 0), __decorate([m(C)], D.prototype, "inFadeOpacity", void 0);
var E2 = class extends P {
  constructor() {
    super(...arguments), this.type = "BlendShader";
  }
  vertex(t5) {
    return { uv: t5.position, glPosition: new _2(g(t5.position), 0, 1) };
  }
  fragment(t5) {
    const l5 = new v(), e2 = wn(this.config.layerTexture, t5.uv), n8 = wn(this.config.backbufferTexture, t5.uv), i5 = zt(Ct(e2.a, new C(0)), e2.rgb, e2.rgb.divide(e2.a)), a6 = zt(Ct(n8.a, new C(0)), n8.rgb, n8.rgb.divide(n8.a)), o4 = this.config.opacity.multiply(e2.a), u6 = n8.a;
    switch (this.blendMode) {
      case "destination-over":
        l5.fragColor = new _2(i5.multiply(o4).multiply(E(u6)).add(a6.multiply(u6)), o4.add(u6).subtract(o4.multiply(u6)));
        break;
      case "source-in":
        {
          const t6 = new _2(i5.multiply(o4).multiply(u6), o4.multiply(u6)), e3 = new _2(a6.multiply(u6), u6).multiply(E(this.config.opacity)).multiply(this.config.inFadeOpacity);
          l5.fragColor = t6.add(e3);
        }
        break;
      case "destination-in":
        {
          const t6 = new _2(a6.multiply(u6).multiply(o4), u6.multiply(o4)), e3 = new _2(a6.multiply(u6), u6).multiply(new _2(E(this.config.opacity).multiply(this.config.inFadeOpacity)));
          l5.fragColor = t6.add(e3);
        }
        break;
      case "source-out":
        l5.fragColor = new _2(i5.multiply(o4).multiply(E(u6)), o4.multiply(E(u6)));
        break;
      case "destination-out":
        l5.fragColor = new _2(a6.multiply(u6).multiply(E(o4)), u6.multiply(E(o4)));
        break;
      case "source-atop":
        l5.fragColor = new _2(i5.multiply(o4).multiply(u6).add(a6.multiply(u6.multiply(E(o4)))), u6);
        break;
      case "destination-atop":
        l5.fragColor = new _2(i5.multiply(o4.multiply(E(u6))).add(a6.multiply(u6).multiply(o4)), o4);
        break;
      case "xor":
        l5.fragColor = new _2(i5.multiply(o4.multiply(E(u6))).add(a6.multiply(u6.multiply(E(o4)))), o4.multiply(E(u6)).add(u6.multiply(E(o4))));
        break;
      case "multiply":
        l5.fragColor = new _2(i5.multiply(o4).multiply(a6.multiply(u6)).add(i5.multiply(o4).multiply(E(u6))).add(a6.multiply(u6).multiply(E(o4))), o4.add(u6.multiply(E(o4))));
        break;
      case "screen":
        l5.fragColor = new _2(i5.add(a6).subtract(i5.multiply(a6)).multiply(o4.multiply(u6)).add(i5.multiply(o4).multiply(E(u6))).add(a6.multiply(u6).multiply(E(o4))), o4.add(u6.multiply(E(o4))));
        break;
      case "overlay":
        {
          const t6 = new Y(I3(a6.r, i5.r), I3(a6.g, i5.g), I3(a6.b, i5.b));
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "darken":
        {
          const t6 = Ye(i5, a6);
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "lighter":
        l5.fragColor = new _2(i5.multiply(o4).add(a6.multiply(u6)), o4.add(u6));
        break;
      case "lighten":
        {
          const t6 = Xe(i5, a6);
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "color-dodge":
        {
          const t6 = se(new Y(J(a6.r, i5.r), J(a6.g, i5.g), J(a6.b, i5.b)), new Y(0), new Y(1));
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "color-burn":
        {
          const t6 = new Y(K(a6.r, i5.r), K(a6.g, i5.g), K(a6.b, i5.b));
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "hard-light":
        {
          const t6 = new Y(L(a6.r, i5.r), L(a6.g, i5.g), L(a6.b, i5.b));
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "soft-light":
        {
          const t6 = new Y(N(a6.r, i5.r), N(a6.g, i5.g), N(a6.b, i5.b));
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "difference":
        {
          const t6 = Qt(a6.subtract(i5));
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "exclusion":
        {
          const t6 = i5.add(a6).subtract(new C(2).multiply(i5).multiply(a6));
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "invert":
        l5.fragColor = new _2(new Y(1).subtract(a6).multiply(o4).multiply(u6).add(a6.multiply(u6).multiply(E(o4))), u6);
        break;
      case "vivid-light":
        {
          const t6 = new Y(se(Q(a6.r, i5.r), new C(0), new C(1)), se(Q(a6.g, i5.g), new C(0), new C(1)), se(Q(a6.b, i5.b), new C(0), new C(1)));
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "hue":
        {
          const t6 = Z(i5, a6, a6);
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "saturation":
        {
          const t6 = Z(a6, i5, a6);
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "color":
        {
          const t6 = Y2(i5, a6);
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "luminosity":
        {
          const t6 = Y2(a6, i5);
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "plus":
        l5.fragColor = se(new _2(e2.r.add(a6.r), e2.g.add(a6.g), e2.b.add(a6.b), o4.add(u6)), new _2(0), new _2(1));
        break;
      case "minus":
        l5.fragColor = new _2(se(new Y(a6.r.subtract(e2.r), a6.g.subtract(e2.g), a6.b.subtract(e2.b)), new Y(0), new Y(1)), u6.multiply(o4));
        break;
      case "average":
        {
          const t6 = a6.add(i5).divide(2);
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      case "reflect":
        {
          const t6 = se(new Y($2(a6.r, i5.r), $2(a6.g, i5.g), $2(a6.b, i5.b)), new Y(0), new Y(1));
          l5.fragColor = H(t6, i5, a6, o4, u6);
        }
        break;
      default:
        l5.fragColor = e2.multiply(this.config.opacity);
    }
    return l5;
  }
};
function H(t5, l5, e2, r9, n8) {
  return new _2(t5.multiply(r9).multiply(n8).add(l5.multiply(r9).multiply(E(n8))).add(e2.multiply(n8).multiply(E(r9))), r9.add(n8.multiply(E(r9))));
}
function I3(t5, l5) {
  return new C(1).subtract(ln(new C(0.5), l5)).multiply(E(new C(2).multiply(E(l5).multiply(E(t5))))).add(ln(new C(0.5), l5).multiply(new C(2).multiply(l5).multiply(t5)));
}
function J(t5, l5) {
  return zt(Ct(t5, new C(0)), new C(0), zt(Ct(l5, new C(1)), new C(1), Ye(new C(1), t5.divide(new C(1).subtract(l5)))));
}
function K(t5, l5) {
  return zt(Ct(t5, new C(1)), new C(1), zt(Ct(l5, new C(0)), new C(0), E(Ye(new C(1), E(t5).divide(l5)))));
}
function L(t5, l5) {
  return new C(1).subtract(ln(new C(0.5), l5)).multiply(new C(2).multiply(l5).multiply(t5)).add(ln(new C(0.5), l5).multiply(E(new C(2).multiply(E(l5).multiply(E(t5))))));
}
function N(t5, l5) {
  return Tt([_t(l5, new C(0.5)), () => {
    const e2 = new C(2).multiply(l5), r9 = E(e2), n8 = E(t5);
    return t5.subtract(r9.multiply(t5).multiply(n8));
  }], [_t(t5, new C(0.25)), () => {
    const e2 = new C(2).multiply(l5), r9 = F(e2).multiply(t5), n8 = new C(16).multiply(t5).subtract(new C(12)).multiply(t5).add(new C(3));
    return t5.add(r9.multiply(n8));
  }], [true, () => {
    const e2 = new C(2).multiply(l5), r9 = F(e2), n8 = hn(t5).subtract(t5);
    return t5.add(r9.multiply(n8));
  }]);
}
function Q(t5, l5) {
  const e2 = E(ln(new C(0.5), l5)).multiply(K(t5, new C(2).multiply(l5))), r9 = ln(new C(0.5), l5).multiply(J(t5, new C(2).multiply(I2(l5, 0.5))));
  return e2.add(r9);
}
function R(t5) {
  return Ye(Ye(t5.r, t5.g), t5.b);
}
function U2(t5) {
  return Xe(Xe(t5.r, t5.g), t5.b);
}
function V(t5) {
  return we(t5, new Y(0.3, 0.59, 0.11));
}
function W2(t5) {
  return U2(t5).subtract(R(t5));
}
function X2(t5) {
  const l5 = V(t5), e2 = R(t5), r9 = U2(t5);
  return Tt([Yt(e2, new C(0)), () => {
    const r10 = t5.subtract(l5).multiply(l5), n8 = l5.subtract(e2);
    return l5.add(r10.divide(n8));
  }], [Gt2(r9, new C(1)), () => {
    const e3 = t5.subtract(l5), n8 = E(l5), i5 = e3.multiply(n8), a6 = r9.subtract(l5);
    return l5.add(i5.divide(a6));
  }], [true, t5]);
}
function Y2(t5, l5) {
  const e2 = V(t5), r9 = V(l5).subtract(e2);
  return X2(t5.add(new Y(r9)));
}
function Z(t5, l5, e2) {
  const r9 = R(t5), n8 = W2(t5), i5 = W2(l5);
  return Y2(zt(Gt2(n8, new C(0)), () => t5.subtract(r9).multiply(i5).divide(n8), new Y(0)), e2);
}
function $2(t5, l5) {
  return zt(Ct(l5, new C(1)), l5, () => {
    const e2 = E(l5), r9 = t5.multiply(t5).divide(e2);
    return Ye(r9, new C(1));
  });
}
__decorate([_3], E2.prototype, "blendMode", void 0), __decorate([m(D)], E2.prototype, "config", void 0), __decorate([__param(0, l(z))], E2.prototype, "vertex", null), __decorate([__param(0, l(A))], E2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/OpacityShader.js
var f5 = class extends C2 {
};
__decorate([f4(0, X)], f5.prototype, "position", void 0);
var g2 = class extends I {
};
var x2 = class extends w {
};
__decorate([m(U)], x2.prototype, "layerTexture", void 0), __decorate([m(C)], x2.prototype, "opacity", void 0);
var v2 = class extends P {
  constructor() {
    super(...arguments), this.type = "OpacityShader";
  }
  vertex(t5) {
    return { uv: t5.position, glPosition: new _2(t5.position.subtract(new X(0.5)).multiply(2), 0, 1) };
  }
  fragment(t5) {
    const o4 = new v();
    return o4.fragColor = wn(this.config.layerTexture, t5.uv).multiply(this.config.opacity), o4;
  }
};
__decorate([m(x2)], v2.prototype, "config", void 0), __decorate([__param(0, l(f5))], v2.prototype, "vertex", null), __decorate([__param(0, l(g2))], v2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaders/HighlightPrograms.js
var e = { vertexShader: n3("highlight/textured.vert"), fragmentShader: n3("highlight/highlight.frag") };
var h = { vertexShader: n3("highlight/textured.vert"), fragmentShader: n3("highlight/blur.frag") };

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/PostProcessingShader.js
var a3 = class extends C2 {
};
__decorate([f4(0, X)], a3.prototype, "position", void 0);
var d = class extends I {
};
var u5 = class extends P {
  constructor() {
    super(...arguments), this.type = "PostProcessingShader";
  }
  vertex(o4) {
    return { uv: o4.position, glPosition: new _2(g(o4.position), 0, 1) };
  }
};
__decorate([__param(0, l(a3))], u5.prototype, "vertex", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/BlitShader.js
var a4 = class extends w {
};
__decorate([m(U)], a4.prototype, "blitTexture", void 0);
var f6 = class extends u5 {
  fragment(t5) {
    const o4 = new v();
    return o4.fragColor = wn(this.blitConfig.blitTexture, t5.uv), o4;
  }
};
__decorate([m(a4)], f6.prototype, "blitConfig", void 0), __decorate([__param(0, l(d))], f6.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/BloomShader.js
var b2 = class extends w {
};
__decorate([m(U)], b2.prototype, "luminosityTexture", void 0), __decorate([m(Y)], b2.prototype, "defaultColor", void 0), __decorate([m(C)], b2.prototype, "defaultOpacity", void 0), __decorate([m(C)], b2.prototype, "luminosityThreshold", void 0), __decorate([m(C)], b2.prototype, "smoothWidth", void 0);
var x3 = class extends u5 {
  constructor() {
    super(...arguments), this.type = "LuminosityHighPassShader";
  }
  fragment(o4) {
    const t5 = new v(), r9 = wn(this.luminosityHighPassConfig.luminosityTexture, o4.uv), e2 = new Y(0.299, 0.587, 0.114), l5 = we(r9.xyz, e2), s3 = new _2(this.luminosityHighPassConfig.defaultColor.rgb, this.luminosityHighPassConfig.defaultOpacity), p = on(this.luminosityHighPassConfig.luminosityThreshold, this.luminosityHighPassConfig.luminosityThreshold.add(this.luminosityHighPassConfig.smoothWidth), l5);
    return t5.fragColor = _e(s3, r9, p), t5;
  }
};
__decorate([m(b2)], x3.prototype, "luminosityHighPassConfig", void 0), __decorate([__param(0, l(d))], x3.prototype, "fragment", null);
var T = class extends w {
};
__decorate([m(U)], T.prototype, "blurTexture1", void 0), __decorate([m(U)], T.prototype, "blurTexture2", void 0), __decorate([m(U)], T.prototype, "blurTexture3", void 0), __decorate([m(U)], T.prototype, "blurTexture4", void 0), __decorate([m(U)], T.prototype, "blurTexture5", void 0), __decorate([m(C)], T.prototype, "bloomStrength", void 0), __decorate([m(C)], T.prototype, "bloomRadius", void 0), __decorate([m(B.ofType(C, 5))], T.prototype, "bloomFactors", void 0), __decorate([m(Y)], T.prototype, "bloomTintColor", void 0);
var C3 = class extends u5 {
  constructor() {
    super(...arguments), this.type = "CompositeShader";
  }
  fragment(o4) {
    const t5 = new v(), { blurTexture1: r9, blurTexture2: e2, blurTexture3: l5, blurTexture4: s3, blurTexture5: y3, bloomStrength: d5, bloomFactors: a6, bloomTintColor: h6, bloomRadius: g7 } = this.compositeConfig, c6 = se(g7, new C(0), new C(1)), f10 = this._lerpBloomFactor(a6[0], c6).multiply(new _2(h6, 1).multiply(wn(r9, o4.uv))), v6 = this._lerpBloomFactor(a6[1], c6).multiply(new _2(h6, 1).multiply(wn(e2, o4.uv))), b3 = this._lerpBloomFactor(a6[2], c6).multiply(new _2(h6, 1).multiply(wn(l5, o4.uv))), x5 = this._lerpBloomFactor(a6[3], c6).multiply(new _2(h6, 1).multiply(wn(s3, o4.uv))), T4 = this._lerpBloomFactor(a6[4], c6).multiply(new _2(h6, 1).multiply(wn(y3, o4.uv))), C6 = d5.multiply(f10.add(v6.add(b3.add(x5.add(T4)))));
    return t5.fragColor = C6, t5;
  }
  _lerpBloomFactor(o4, t5) {
    const i5 = new C(1.2).subtract(o4);
    return _e(o4, i5, t5);
  }
};
__decorate([_3], C3.prototype, "numMips", void 0), __decorate([m(T)], C3.prototype, "compositeConfig", void 0), __decorate([__param(0, l(d))], C3.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/BlurShader.js
var v3 = class extends w {
};
__decorate([m(U)], v3.prototype, "texture", void 0), __decorate([m(X)], v3.prototype, "texSize", void 0), __decorate([m(X)], v3.prototype, "direction", void 0), __decorate([m(C)], v3.prototype, "sigma", void 0);
var h2 = class extends u5 {
  constructor() {
    super(...arguments), this.type = "GaussianBlurShader";
  }
  fragment(t5) {
    const e2 = new v(), r9 = new C(1).divide(this.gaussianBlurConfig.texSize), o4 = this.gaussianBlurConfig.sigma;
    let l5 = x4(new C(0), o4), s3 = wn(this.gaussianBlurConfig.texture, t5.uv).multiply(l5);
    for (let i5 = 1; i5 < this.kernelRadius; i5++) {
      const e3 = new C(i5), a6 = x4(e3, o4), d5 = this.gaussianBlurConfig.direction.multiply(r9).multiply(e3), p = wn(this.gaussianBlurConfig.texture, t5.uv.add(d5)), y3 = wn(this.gaussianBlurConfig.texture, t5.uv.subtract(d5));
      s3 = s3.add(p.multiply(a6)).add(y3.multiply(a6)), l5 = l5.add(new C(2).multiply(a6));
    }
    return e2.fragColor = s3.divide(l5), e2;
  }
};
function x4(t5, e2) {
  return new C(0.39894).multiply(ge(new C(-0.5).multiply(t5).multiply(t5).divide(e2.multiply(e2))).divide(e2));
}
__decorate([_3], h2.prototype, "kernelRadius", void 0), __decorate([m(v3)], h2.prototype, "gaussianBlurConfig", void 0), __decorate([__param(0, l(d))], h2.prototype, "fragment", null);
var w2 = class extends w {
};
__decorate([m(U)], w2.prototype, "texture", void 0);
var B2 = 1;
var C4 = 2.2;
var S = [-0.08, -0.05, -0.03, -0.02, -0.01, 0.01, 0.02, 0.03, 0.05, 0.08];
var R2 = class extends u5 {
  constructor() {
    super(...arguments), this.type = "RadialBlurShader";
  }
  fragment(t5) {
    const e2 = new v();
    let r9 = new C(0.5).subtract(t5.uv);
    const o4 = hn(r9.x.multiply(r9.y).add(r9.y.multiply(r9.y)));
    r9 = r9.divide(o4);
    const l5 = wn(this.radialBlurConfig.texture, t5.uv);
    let s3 = l5;
    for (let i5 = 0; i5 < 10; i5++) {
      const e3 = wn(this.radialBlurConfig.texture, t5.uv.add(r9).multiply(new C(S[i5]).multiply(B2)));
      s3 = s3.add(e3);
    }
    const y3 = new C(1).divide(new C(11));
    s3 = s3.multiply(y3);
    let m3 = o4.multiply(C4);
    return m3 = se(m3, new C(0), new C(1)), e2.fragColor = _e(l5, s3, m3), e2;
  }
};
__decorate([_3], R2.prototype, "kernelRadius", void 0), __decorate([m(w2)], R2.prototype, "radialBlurConfig", void 0), __decorate([__param(0, l(d))], R2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ColorizeShader.js
var h3 = class extends w {
};
__decorate([m(U)], h3.prototype, "colorTexture", void 0), __decorate([m(it)], h3.prototype, "coefficients", void 0);
var y = class extends u5 {
  constructor() {
    super(...arguments), this.type = "FilterEffectShader";
  }
  fragment(e2) {
    const t5 = new v(), o4 = wn(this.filterEffectConfig.colorTexture, e2.uv), i5 = zt(Gt2(o4.a, new C(0)), o4.rgb.divide(o4.a), new Y(0)), f10 = this.filterEffectConfig.coefficients.multiply(new _2(i5, 1)), m3 = o4.a;
    return t5.fragColor = new _2(m3.multiply(f10.rgb), m3), t5;
  }
};
__decorate([m(h3)], y.prototype, "filterEffectConfig", void 0), __decorate([__param(0, l(d))], y.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/DropShadowShader.js
var h4 = class extends w {
};
__decorate([m(U)], h4.prototype, "layerFBOTexture", void 0), __decorate([m(U)], h4.prototype, "blurTexture", void 0), __decorate([m(_2)], h4.prototype, "shadowColor", void 0), __decorate([m(X)], h4.prototype, "shadowOffset", void 0), __decorate([m(rt2)], h4.prototype, "displayViewMat3", void 0);
var c3 = class extends u5 {
  constructor() {
    super(...arguments), this.type = "CompositeShader";
  }
  fragment(o4) {
    const t5 = new v(), { layerFBOTexture: r9, blurTexture: s3, shadowColor: p, shadowOffset: d5, displayViewMat3: u6 } = this.compositeConfig, m3 = u6.multiply(new Y(d5, new C(0))), y3 = wn(r9, o4.uv), n8 = wn(s3, o4.uv.subtract(m3.xy.divide(2)));
    return t5.fragColor = n8.a.multiply(p).multiply(new C(1).subtract(y3.a)).add(y3), t5;
  }
};
__decorate([m(h4)], c3.prototype, "compositeConfig", void 0), __decorate([__param(0, l(d))], c3.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/Profiler.js
var n5 = !!has("esri-2d-profiler");
var r7 = class {
  constructor(r9, i5) {
    if (this._events = new i(), this._entries = /* @__PURE__ */ new Map(), this._timings = new t2(10), this._currentContainer = null, this._currentPass = null, this._currentBrush = null, this._currentSummary = null, !n5) return;
    this._ext = t3(r9.gl, {}), this._debugOutput = i5;
    const o4 = r9.gl;
    if (!this.enableCommandLogging) return;
    let a6;
    for (a6 in o4) if ("function" == typeof o4[a6]) {
      const e2 = o4[a6], t5 = a6.includes("draw");
      o4[a6] = (...s3) => (this._events.emit("command", { container: this._currentContainer, pass: this._currentPass, brush: this._currentBrush, method: a6, args: s3, isDrawCommand: t5 }), this._currentSummary && (this._currentSummary.commands++, t5 && this._currentSummary.drawCommands++), e2.apply(o4, s3));
    }
  }
  get enableCommandLogging() {
    return "object" == typeof n5 && n5.commandLogging;
  }
  get enableTimeLogging() {
    return "object" == typeof n5 && n5.timeLogging;
  }
  get lastTime() {
    return this._timings.peekLast();
  }
  recordContainerStart(e2) {
    n5 && (this._currentContainer = e2);
  }
  recordContainerEnd() {
    n5 && (this._currentContainer = null);
  }
  recordPassStart(e2) {
    n5 && (this._currentPass = e2, this._initSummary());
  }
  recordPassEnd() {
    n5 && (this._currentPass = null, this._emitSummary());
  }
  recordBrushStart(e2) {
    n5 && (this._currentBrush = e2);
  }
  recordBrushEnd() {
    n5 && (this._currentBrush = null);
  }
  recordStart(e2) {
    if (n5 && null != this._ext) {
      if (this._entries.has(e2)) {
        const t6 = this._entries.get(e2), s3 = this._ext.resultAvailable(t6.query), n8 = this._ext.disjoint();
        if (s3 && !n8) {
          const s4 = this._ext.getResult(t6.query) / 1e6;
          let n9 = 0;
          if (null != this._timings.enqueue(s4) && this.enableTimeLogging) {
            const e3 = this._timings.entries, t7 = e3.length;
            let s5 = 0;
            for (const n10 of e3) s5 += n10;
            n9 = s5 / t7;
          }
          const r9 = s4.toFixed(2), i5 = n9 ? n9.toFixed(2) : "--";
          this.enableCommandLogging ? (this.enableTimeLogging ? console.groupCollapsed(`Frame report for ${e2}, ${r9} ms (${i5} last 10 avg)
              ${t6.commandsLen} Commands (${t6.drawCommands} draw)`) : console.groupCollapsed(`Frame report for ${e2}
              ${t6.commandsLen} Commands (${t6.drawCommands} draw)`), console.log("RenderPass breakdown: "), console.table(t6.summaries), console.log("Commands: ", t6.commands), console.groupEnd()) : this.enableTimeLogging && console.log(`Frame report for ${e2}, ${r9} ms (${i5} last 10 avg)`), this.enableTimeLogging && (this._debugOutput.innerHTML = `${r9} (${i5})`);
        }
        for (const e3 of t6.handles) e3.remove();
        this._ext.deleteQuery(t6.query), this._entries.delete(e2);
      }
      const t5 = { name: e2, query: this._ext.createQuery(), commands: [], commandsLen: 0, drawCommands: 0, summaries: [], handles: [] };
      this.enableCommandLogging && (t5.handles.push(this._events.on("command", (e3) => {
        t5.commandsLen++, t5.commands.push(e3), e3.isDrawCommand && t5.drawCommands++;
      })), t5.handles.push(this._events.on("summary", (e3) => {
        t5.summaries.push(e3);
      }))), this._ext.beginTimeElapsed(t5.query), this._entries.set(e2, t5);
    }
  }
  recordEnd(e2) {
    n5 && null != this._ext && this._entries.has(e2) && this._ext.endTimeElapsed();
  }
  _initSummary() {
    this.enableCommandLogging && (this._currentSummary = { container: this._currentContainer, pass: this._currentPass, drawCommands: 0, commands: 0 });
  }
  _emitSummary() {
    this.enableCommandLogging && this._currentSummary && this._events.emit("summary", this._currentSummary);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/VideoScreenShader.js
var f7 = class extends C2 {
};
__decorate([f4(0, X)], f7.prototype, "position", void 0), __decorate([f4(1, X)], f7.prototype, "texcoord", void 0), __decorate([f4(2, C)], f7.prototype, "w", void 0);
var g3 = class extends I {
};
var m2 = class extends w {
};
__decorate([m(U)], m2.prototype, "texture", void 0), __decorate([m(C)], m2.prototype, "opacity", void 0);
var v4 = class extends P {
  constructor() {
    super(...arguments), this.type = "VideoScreenShader";
  }
  vertex(o4) {
    const { position: t5, texcoord: e2, w: r9 } = o4;
    return { glPosition: new _2(t5, 0, r9), texcoord: e2 };
  }
  fragment(o4) {
    const t5 = new v();
    return t5.fragColor = wn(this.config.texture, o4.texcoord).multiply(this.config.opacity), t5;
  }
};
__decorate([m(m2)], v4.prototype, "config", void 0), __decorate([__param(0, l(f7))], v4.prototype, "vertex", null), __decorate([__param(0, l(g3))], v4.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/LabelManager.js
var i3 = 64;
var n6 = class {
  constructor() {
    this.styles = /* @__PURE__ */ new Map(), this.layerContexts = /* @__PURE__ */ new Map();
  }
  get cachedStyles() {
    return this.styles;
  }
  setLabelClassStyle(e2, t5, s3) {
    this.layerContexts.set(e2, t5), this.styles.set(e2, s3);
  }
  removeContainer(e2) {
    for (const [t5, s3] of this.layerContexts.entries()) s3 === e2 && this.layerContexts.delete(t5);
  }
};
var l2 = class extends b {
  constructor(e2) {
    super(e2), this._faderWorkingSet = [], this._styleRepository = new n6(), this.lastUpdateId = -1, this.updateRequested = false, this.view = null;
    const t5 = (e3, t6) => {
      e3.updateLabelVisibility(), e3.requestRender(), e3.isReady && (e3.decluttered = true);
    };
    this.symbolFader = new n4("feature-tile", this._styleRepository, t5, this._faderWorkingSet, o2, i3);
  }
  get updating() {
    return has("esri-2d-log-updating") && console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`), this.updateRequested;
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.view?.requestUpdate());
  }
  processUpdate(e2) {
    this.doUpdate(e2) ? this.updateRequested = false : (this.updateRequested = true, this.view?.requestUpdate());
  }
  setLabelSchemaStyles(e2, t5) {
    let s3;
    switch (e2.type) {
      case "label":
        s3 = e2.classes;
        break;
      case "subtype":
        s3 = Array.from(Object.values(e2.renderers).flatMap((e3) => e3.classes));
        break;
      case "cluster":
        s3 = [...e2.cluster.classes, ...e2.feature.classes];
        break;
      case "track":
        s3 = [...e2.latestObservation.classes, ...e2.previousObservation.classes, ...e2.trackLine.classes];
    }
    for (const r9 of s3) {
      const e3 = c4(r9);
      this._styleRepository.setLabelClassStyle(r9.labelClassId, t5, e3);
    }
  }
  removeContainer(e2) {
    this._styleRepository.removeContainer(e2), this.requestUpdate();
  }
  doUpdate(e2) {
    this._faderWorkingSet.length = 0;
    const t5 = this.view;
    if (!t5) return false;
    const s3 = t5.allLayerViews.map((e3) => e3.featureContainer).filter((e3) => !!e3 && e3?.hasLabels);
    if (s3.length > 0) {
      for (const t6 of s3) for (const s4 of t6.tiles || []) s4.setTransform(e2.state), this._faderWorkingSet.push(s4);
      const r9 = e2.state.scale, o4 = t5.featuresTilingScheme.scaleToZoom(r9);
      return this.symbolFader.update(o4, e2.state);
    }
    return true;
  }
};
function c4(e2) {
  const t5 = "esriGeometryPolyline" === e2.geometryType ? 0 : 1, s3 = "esriGeometryPolyline" === e2.geometryType ? 0 : 1;
  return { geometryType: e2.geometryType, iconAllowOverlap: !e2.deconflictionEnabled, iconIgnorePlacement: false, textAllowOverlap: !e2.deconflictionEnabled, textIgnorePlacement: false, iconRotationAlignment: t5, textRotationAlignment: t5, iconTranslateAnchor: s3, iconTranslate: [0, 0], textTranslateAnchor: s3, textTranslate: [0, 0] };
}
__decorate([a()], l2.prototype, "updateRequested", void 0), __decorate([a()], l2.prototype, "updating", null), __decorate([a()], l2.prototype, "view", void 0), l2 = __decorate([c("esri.views.2d.LabelManager")], l2);

// node_modules/@arcgis/core/views/2d/navigation/ZoomBox.js
var n7 = "esri-zoom-box";
var h5 = { container: `${n7}__container`, overlay: `${n7}__overlay`, background: `${n7}__overlay-background`, box: `${n7}__outline` };
var l3 = { zoom: "Shift", counter: "Control" };
var d2 = class extends b {
  constructor(t5) {
    super(t5), this._container = null, this._overlay = null, this._backgroundShape = null, this._boxShape = null, this._box = { x: 0, y: 0, width: 0, height: 0 }, this._rafId = null, this._redraw = this._redraw.bind(this);
  }
  destroy() {
    this.view = null;
  }
  set view(t5) {
    this.removeAllHandles(), this._destroyOverlay(), this._set("view", t5), t5 && this.addHandles([t5.on("drag", [l3.zoom], (t6) => this._handleDrag(t6, 1), f3.INTERNAL), t5.on("drag", [l3.zoom, l3.counter], (t6) => this._handleDrag(t6, -1), f3.INTERNAL)]);
  }
  _start() {
    this._createContainer(), this._createOverlay(), this.navigation.begin();
  }
  _update(t5, e2, i5, r9) {
    this._box.x = t5, this._box.y = e2, this._box.width = i5, this._box.height = r9, this._rafId || (this._rafId = requestAnimationFrame(this._redraw));
  }
  _end(t5, e2, r9, o4, a6) {
    const n8 = this.view, h6 = n8.toMap(i2(t5 + 0.5 * r9, e2 + 0.5 * o4));
    let l5 = Math.max(r9 / n8.width, o4 / n8.height);
    -1 === a6 && (l5 = 1 / l5), this._destroyOverlay(), this.navigation.end(), n8.goTo({ center: h6, scale: n8.scale * l5 }, { animationMode: "always", duration: r4() });
  }
  _updateBox(t5, e2, i5, r9) {
    const o4 = this._boxShape;
    o4.setAttributeNS(null, "x", "" + t5), o4.setAttributeNS(null, "y", "" + e2), o4.setAttributeNS(null, "width", "" + i5), o4.setAttributeNS(null, "height", "" + r9), o4.setAttributeNS(null, "class", h5.box);
  }
  _updateBackground(t5, e2, i5, r9) {
    this._backgroundShape.setAttributeNS(null, "d", this._toSVGPath(t5, e2, i5, r9, this.view.width, this.view.height));
  }
  _createContainer() {
    const t5 = document.createElement("div");
    t5.className = h5.container, this.view.root.appendChild(t5), this._container = t5;
  }
  _createOverlay() {
    const t5 = this.view.width, e2 = this.view.height, i5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    i5.setAttributeNS(null, "d", "M 0 0 L " + t5 + " 0 L " + t5 + " " + e2 + " L 0 " + e2 + " Z"), i5.setAttributeNS(null, "class", h5.background);
    const r9 = document.createElementNS("http://www.w3.org/2000/svg", "rect"), o4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    o4.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), o4.setAttributeNS(null, "class", h5.overlay), o4.appendChild(i5), o4.appendChild(r9), this._container.appendChild(o4), this._backgroundShape = i5, this._boxShape = r9, this._overlay = o4;
  }
  _destroyOverlay() {
    this._container && this._container.parentNode && this._container.parentNode.removeChild(this._container), this._container = this._backgroundShape = this._boxShape = this._overlay = null;
  }
  _toSVGPath(t5, e2, i5, r9, o4, s3) {
    const a6 = t5 + i5, n8 = e2 + r9;
    return "M 0 0 L " + o4 + " 0 L " + o4 + " " + s3 + " L 0 " + s3 + " ZM " + t5 + " " + e2 + " L " + t5 + " " + n8 + " L " + a6 + " " + n8 + " L " + a6 + " " + e2 + " Z";
  }
  _handleDrag(t5, e2) {
    const i5 = t5.x, r9 = t5.y, o4 = t5.origin.x, s3 = t5.origin.y;
    let a6, n8, h6, l5;
    switch (i5 > o4 ? (a6 = o4, h6 = i5 - o4) : (a6 = i5, h6 = o4 - i5), r9 > s3 ? (n8 = s3, l5 = r9 - s3) : (n8 = r9, l5 = s3 - r9), t5.action) {
      case "start":
        this._start();
        break;
      case "update":
        this._update(a6, n8, h6, l5);
        break;
      case "end":
        this._end(a6, n8, h6, l5, e2);
    }
    t5.stopPropagation();
  }
  _redraw() {
    if (!this._rafId) return;
    if (this._rafId = null, !this._overlay) return;
    const { x: t5, y: e2, width: i5, height: r9 } = this._box;
    this._updateBox(t5, e2, i5, r9), this._updateBackground(t5, e2, i5, r9), this._rafId = requestAnimationFrame(this._redraw);
  }
};
__decorate([a()], d2.prototype, "navigation", void 0), __decorate([a()], d2.prototype, "view", null), d2 = __decorate([c("esri.views.2d.navigation.ZoomBox")], d2);

// node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js
var t4 = class {
  constructor(t5) {
    this._gain = t5, this.lastValue = void 0, this.filteredDelta = void 0;
  }
  update(t5) {
    if (this.hasLastValue()) {
      const e2 = this.computeDelta(t5);
      this._updateDelta(e2);
    }
    this.lastValue = t5;
  }
  reset() {
    this.lastValue = void 0, this.filteredDelta = void 0;
  }
  hasLastValue() {
    return void 0 !== this.lastValue;
  }
  hasFilteredDelta() {
    return void 0 !== this.filteredDelta;
  }
  computeDelta(t5) {
    return void 0 === this.lastValue ? NaN : t5 - this.lastValue;
  }
  _updateDelta(t5) {
    void 0 !== this.filteredDelta ? this.filteredDelta = (1 - this._gain) * this.filteredDelta + this._gain * t5 : this.filteredDelta = t5;
  }
};

// node_modules/@arcgis/core/views/navigation/Momentum.js
var i4 = class {
  constructor(i5, o4, s3) {
    this._initialVelocity = i5, this._stopVelocity = o4, this.friction = s3, this._duration = t(Math.abs(Math.log(Math.abs(this._initialVelocity) / this._stopVelocity) / Math.log(1 - this.friction)));
  }
  get duration() {
    return this._duration;
  }
  isFinished(t5) {
    return t5 > this.duration;
  }
  value(t5) {
    return this.valueFromInitialVelocity(this._initialVelocity, t5);
  }
  valueDelta(t5, i5) {
    const o4 = this.value(t5);
    return this.value(t5 + i5) - o4;
  }
  valueFromInitialVelocity(t5, i5) {
    i5 = Math.min(i5, this.duration);
    const o4 = 1 - this.friction;
    return t5 * (o4 ** i5 - 1) / Math.log(o4);
  }
};

// node_modules/@arcgis/core/views/navigation/PanPlanarMomentumEstimator.js
var l4 = class extends i4 {
  constructor(e2, t5, i5, s3, r9) {
    super(e2, t5, i5), this._sceneVelocity = s3, this.direction = r9;
  }
  value(e2) {
    return super.valueFromInitialVelocity(this._sceneVelocity, e2);
  }
};
var c5 = class {
  constructor(e2 = 300, t5 = 12, i5 = 0.84) {
    this._minimumInitialVelocity = e2, this._stopVelocity = t5, this._friction = i5, this.enabled = true, this._time = new t4(0.6), this._screen = [new t4(0.4), new t4(0.4)], this._scene = [new t4(0.6), new t4(0.6), new t4(0.6)], this._tmpDirection = n();
  }
  add(e2, t5, i5) {
    if (this.enabled) {
      if (this._time.hasLastValue()) {
        if (this._time.computeDelta(i5) < 0.015) return;
      }
      this._screen[0].update(e2[0]), this._screen[1].update(e2[1]), this._scene[0].update(t5[0]), this._scene[1].update(t5[1]), this._scene[2].update(t5[2]), this._time.update(i5);
    }
  }
  reset() {
    this._screen[0].reset(), this._screen[1].reset(), this._scene[0].reset(), this._scene[1].reset(), this._scene[2].reset(), this._time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this._screen[0].hasFilteredDelta() || !this._time.hasFilteredDelta()) return null;
    const e2 = this._screen[0].filteredDelta, t5 = this._screen[1].filteredDelta, i5 = null == e2 || null == t5 ? 0 : Math.sqrt(e2 * e2 + t5 * t5), s3 = this._time.filteredDelta, r9 = null == s3 || null == i5 ? 0 : i5 / s3;
    return Math.abs(r9) < this._minimumInitialVelocity ? null : this.createMomentum(r9, this._stopVelocity, this._friction);
  }
  createMomentum(s3, r9, n8) {
    u4(this._tmpDirection, this._scene[0].filteredDelta ?? 0, this._scene[1].filteredDelta ?? 0, this._scene[2].filteredDelta ?? 0);
    const c6 = a2(this._tmpDirection);
    c6 > 0 && x(this._tmpDirection, this._tmpDirection, 1 / c6);
    const h6 = this._time.filteredDelta;
    return new l4(s3, r9, n8, null == h6 ? 0 : c6 / h6, this._tmpDirection);
  }
};

// node_modules/@arcgis/core/views/2d/navigation/actions/Pan.js
var g4 = class extends b {
  constructor(t5) {
    super(t5), this.animationTime = t(0), this.momentumEstimator = new c5(500, 6, 0.92), this.momentum = null, this.tmpMomentum = n(), this.momentumFinished = false, this.viewpoint = new c2({ targetGeometry: new _(), scale: 0, rotation: 0 }), this._previousDrag = null, this.addHandles(f(() => this.momentumFinished, () => this.navigation.stop()));
  }
  begin(t5, i5) {
    this.navigation.begin(), this.momentumEstimator.reset(), this.addToEstimator(i5), this._previousDrag = i5;
  }
  update(t5, i5) {
    this.addToEstimator(i5);
    let o4 = i5.center.x, e2 = i5.center.y;
    const m3 = this._previousDrag;
    o4 = m3 ? m3.center.x - o4 : -o4, e2 = m3 ? e2 - m3.center.y : e2, t5.viewpoint = kt(this.viewpoint, t5.viewpoint, [o4 || 0, e2 || 0]), this._previousDrag = i5;
  }
  end(t5, i5) {
    this.addToEstimator(i5);
    const e2 = t5.navigation.momentumEnabled && !o3();
    this.momentum = e2 ? this.momentumEstimator.evaluateMomentum() : null, this.animationTime = t(0), this.momentum && this.onAnimationUpdate(t5), this._previousDrag = null, this.navigation.end();
  }
  addToEstimator(t5) {
    const i5 = t5.center.x, o4 = t5.center.y, e2 = f2(-i5, o4), m3 = r3(-i5, o4, 0);
    this.momentumEstimator.add(e2, m3, 1e-3 * t5.timestamp);
  }
  onAnimationUpdate(t5) {
    this.navigation.animationManager?.animateContinuous(t5.viewpoint, (i5, o4) => {
      const { momentum: e2, animationTime: m3, tmpMomentum: n8 } = this, r9 = this.momentumFinished = !e2 || e2.isFinished(m3), p = u2(o4);
      if (!r9) {
        const o5 = e2.valueDelta(m3, p);
        x(n8, e2.direction, o5), kt(i5, i5, n8), t5.constraints.constrainByGeometry(i5);
      }
      this.animationTime = t(this.animationTime + p);
    });
  }
  stopMomentumNavigation() {
    this.momentum && (this.momentumEstimator.reset(), this.momentum = null, this.navigation.stop());
  }
};
__decorate([a()], g4.prototype, "momentumFinished", void 0), __decorate([a()], g4.prototype, "viewpoint", void 0), __decorate([a()], g4.prototype, "navigation", void 0), g4 = __decorate([c("esri.views.2d.navigation.actions.Pan")], g4);

// node_modules/@arcgis/core/views/navigation/MomentumEstimator.js
var s = class {
  constructor(t5 = 2.5, i5 = 0.01, s3 = 0.95, l5 = 12) {
    this._minimumInitialVelocity = t5, this._stopVelocity = i5, this._friction = s3, this._maxVelocity = l5, this.enabled = true, this.value = new t4(0.8), this.time = new t4(0.3);
  }
  add(t5, e2) {
    if (this.enabled && null != e2) {
      if (this.time.hasLastValue()) {
        if (this.time.computeDelta(e2) < 0.01) return;
        if (this.value.hasFilteredDelta()) {
          const e3 = this.value.computeDelta(t5);
          this.value.filteredDelta * e3 < 0 && this.value.reset();
        }
      }
      this.time.update(e2), this.value.update(t5);
    }
  }
  reset() {
    this.value.reset(), this.time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this.value.hasFilteredDelta() || !this.time.hasFilteredDelta()) return null;
    let e2 = this.value.filteredDelta / this.time.filteredDelta;
    return e2 = r(e2, -this._maxVelocity, this._maxVelocity), Math.abs(e2) < this._minimumInitialVelocity ? null : this.createMomentum(e2, this._stopVelocity, this._friction);
  }
  createMomentum(t5, e2, s3) {
    return new i4(t5, e2, s3);
  }
};

// node_modules/@arcgis/core/views/navigation/RotationMomentumEstimator.js
var a5 = class extends s {
  constructor(t5 = 3, a6 = 0.01, s3 = 0.95, o4 = 12) {
    super(t5, a6, s3, o4);
  }
  add(t5, a6) {
    const s3 = this.value.lastValue;
    if (null != s3) {
      let a7 = t5 - s3;
      for (; a7 > Math.PI; ) a7 -= 2 * Math.PI;
      for (; a7 < -Math.PI; ) a7 += 2 * Math.PI;
      t5 = s3 + a7;
    }
    super.add(t5, a6);
  }
};

// node_modules/@arcgis/core/views/navigation/ZoomMomentumEstimator.js
var r8 = class extends i4 {
  constructor(e2, t5, r9) {
    super(e2, t5, r9);
  }
  value(e2) {
    const t5 = super.value(e2);
    return Math.exp(t5);
  }
  valueDelta(e2, t5) {
    const r9 = super.value(e2), s3 = super.value(e2 + t5) - r9;
    return Math.exp(s3);
  }
};
var s2 = class extends s {
  constructor(e2 = 2.5, t5 = 0.01, r9 = 0.95, s3 = 12) {
    super(e2, t5, r9, s3);
  }
  add(e2, t5) {
    super.add(Math.log(e2), t5);
  }
  createMomentum(e2, t5, s3) {
    return new r8(e2, t5, s3);
  }
};

// node_modules/@arcgis/core/views/2d/navigation/actions/Pinch.js
var M = class extends b {
  constructor(t5) {
    super(t5), this._animationTime = t(0), this._momentumFinished = false, this._previousAngle = 0, this._previousRadius = 0, this._previousCenter = null, this._rotationMomentumEstimator = new a5(0.6, 0.15, 0.95), this._rotationDirection = 1, this._startAngle = 0, this._startRadius = 0, this._updateTimestamp = null, this._zoomDirection = 1, this._zoomMomentumEstimator = new s2(), this._zoomOnly = null, this.viewpoint = new c2({ targetGeometry: new _(), scale: 0, rotation: 0 }), this.zoomMomentum = null, this.rotateMomentum = null, this.addHandles(f(() => this._momentumFinished, () => this.navigation.stop()));
  }
  begin(t5, i5) {
    this.navigation.begin(), this._rotationMomentumEstimator.reset(), this._zoomMomentumEstimator.reset(), this._zoomOnly = null, this._previousAngle = this._startAngle = i5.angle, this._previousRadius = this._startRadius = i5.radius, this._previousCenter = i5.center, this._updateTimestamp = null, t5.constraints.rotationEnabled && this.addToRotateEstimator(0, i5.timestamp), this.addToZoomEstimator(i5, 1);
  }
  update(t5, i5) {
    null === this._updateTimestamp && (this._updateTimestamp = i5.timestamp);
    const o4 = i5.angle, s3 = i5.radius, e2 = i5.center, n8 = Math.abs(180 * (o4 - this._startAngle) / Math.PI), m3 = Math.abs(s3 - this._startRadius), a6 = this._startRadius / s3;
    if (this._previousRadius && this._previousCenter) {
      const r9 = s3 / this._previousRadius;
      let h6 = 180 * (o4 - this._previousAngle) / Math.PI;
      this._rotationDirection = h6 >= 0 ? 1 : -1, this._zoomDirection = r9 >= 1 ? 1 : -1, t5.constraints.rotationEnabled ? (null === this._zoomOnly && i5.timestamp - this._updateTimestamp > 200 && (this._zoomOnly = m3 - n8 > 0), null === this._zoomOnly || this._zoomOnly ? h6 = 0 : this.addToRotateEstimator(o4 - this._startAngle, i5.timestamp)) : h6 = 0, this.addToZoomEstimator(i5, a6), this.navigation.setViewpoint([e2.x, e2.y], 1 / r9, h6, [this._previousCenter.x - e2.x, e2.y - this._previousCenter.y]);
    }
    this._previousAngle = o4, this._previousRadius = s3, this._previousCenter = e2;
  }
  end(t5) {
    this.rotateMomentum = this._rotationMomentumEstimator.evaluateMomentum(), this.zoomMomentum = this._zoomMomentumEstimator.evaluateMomentum(), this._animationTime = t(0), (this.rotateMomentum || this.zoomMomentum) && this.onAnimationUpdate(t5), this.navigation.end();
  }
  addToRotateEstimator(t5, i5) {
    this._rotationMomentumEstimator.add(t5, 1e-3 * i5);
  }
  addToZoomEstimator(t5, i5) {
    this._zoomMomentumEstimator.add(i5, 1e-3 * t5.timestamp);
  }
  canZoomIn(t5) {
    const i5 = t5.scale, o4 = t5.constraints.effectiveMaxScale;
    return 0 === o4 || i5 > o4;
  }
  canZoomOut(t5) {
    const i5 = t5.scale, o4 = t5.constraints.effectiveMinScale;
    return 0 === o4 || i5 < o4;
  }
  onAnimationUpdate(t5) {
    this.navigation.animationManager?.animateContinuous(t5.viewpoint, (i5, o4) => {
      const s3 = !this.canZoomIn(t5) && this._zoomDirection > 1 || !this.canZoomOut(t5) && this._zoomDirection < 1, m3 = !this.rotateMomentum || this.rotateMomentum.isFinished(this._animationTime), a6 = s3 || !this.zoomMomentum || this.zoomMomentum.isFinished(this._animationTime), l5 = u2(o4);
      if (this._momentumFinished = m3 && a6, !this._momentumFinished) {
        const o5 = this.rotateMomentum ? Math.abs(this.rotateMomentum.valueDelta(this._animationTime, l5)) * this._rotationDirection * 180 / Math.PI : 0;
        let s4 = this.zoomMomentum ? Math.abs(this.zoomMomentum.valueDelta(this._animationTime, l5)) : 1;
        const e2 = n2(), n8 = n2();
        if (this._previousCenter) {
          o(e2, this._previousCenter.x, this._previousCenter.y), rt(n8, t5.size, t5.padding), u3(e2, e2, n8);
          const { constraints: m4, scale: a7 } = t5, u6 = a7 * s4;
          s4 < 1 && !m4.canZoomInTo(u6) ? (s4 = a7 / m4.effectiveMaxScale, this.zoomMomentum = null, this.rotateMomentum = null) : s4 > 1 && !m4.canZoomOutTo(u6) && (s4 = a7 / m4.effectiveMinScale, this.zoomMomentum = null, this.rotateMomentum = null), Gt(i5, t5.viewpoint, s4, o5, e2, t5.size), t5.constraints.constrainByGeometry(i5);
        }
      }
      this._animationTime = t(this._animationTime + l5);
    });
  }
  stopMomentumNavigation() {
    (this.rotateMomentum || this.zoomMomentum) && (this.rotateMomentum && (this._rotationMomentumEstimator.reset(), this.rotateMomentum = null), this.zoomMomentum && (this._zoomMomentumEstimator.reset(), this.zoomMomentum = null), this.navigation.stop());
  }
};
__decorate([a()], M.prototype, "_momentumFinished", void 0), __decorate([a()], M.prototype, "viewpoint", void 0), __decorate([a()], M.prototype, "navigation", void 0), M = __decorate([c("esri.views.2d.navigation.actions.Pinch")], M);

// node_modules/@arcgis/core/views/2d/navigation/actions/Rotate.js
var d3 = n2();
var f8 = n2();
var g5 = class extends b {
  constructor(t5) {
    super(t5), this._previousCenter = n2(), this.viewpoint = new c2({ targetGeometry: new _(), scale: 0, rotation: 0 });
  }
  begin(t5, e2) {
    this.navigation.begin(), o(this._previousCenter, e2.center.x, e2.center.y);
  }
  update(t5, e2) {
    const { state: { size: i5, padding: o4 } } = t5;
    o(d3, e2.center.x, e2.center.y), $(f8, i5, o4), t5.viewpoint = bt(this.viewpoint, t5.state.paddedViewState.viewpoint, pt(f8, this._previousCenter, d3)), r2(this._previousCenter, d3);
  }
  end() {
    this.navigation.end();
  }
};
__decorate([a()], g5.prototype, "viewpoint", void 0), __decorate([a()], g5.prototype, "navigation", void 0), g5 = __decorate([c("esri.views.2d.navigation.actions.Rotate")], g5);

// node_modules/@arcgis/core/views/2d/navigation/MapViewNavigation.js
var v5 = 10;
var g6 = 1;
var d4 = new c2({ targetGeometry: new _() });
var _4 = [0, 0];
var T2 = 250;
var f9 = class extends b {
  constructor(t5) {
    super(t5), this._endTimer = null, this._lastEventTimestamp = null, this.animationManager = null, this.interacting = false;
  }
  initialize() {
    this.pan = new g4({ navigation: this }), this.rotate = new g5({ navigation: this }), this.pinch = new M({ navigation: this }), this.zoomBox = new d2({ view: this.view, navigation: this });
  }
  destroy() {
    this.pan = u(this.pan), this.rotate = u(this.rotate), this.pinch = u(this.pinch), this.zoomBox = u(this.zoomBox), this.animationManager = null;
  }
  begin() {
    this.stop(), this._set("interacting", true);
  }
  end() {
    this._lastEventTimestamp = performance.now(), this._startTimer(T2);
  }
  async zoom(t5, i5 = this._getDefaultAnchor()) {
    if (this.begin(), this.view.constraints.snapToZoom && this.view.constraints.effectiveLODs) return t5 < 1 ? this.zoomIn(i5) : this.zoomOut(i5);
    this.setViewpoint(i5, t5, 0, [0, 0]);
  }
  async zoomIn(t5) {
    const i5 = this.view, o4 = i5.constraints.snapToNextScale(i5.scale);
    return this._zoomToScale(o4, t5);
  }
  async zoomOut(t5) {
    const i5 = this.view, o4 = i5.constraints.snapToPreviousScale(i5.scale);
    return this._zoomToScale(o4, t5);
  }
  setViewpoint(t5, i5, o4, n8) {
    this.begin(), this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, t5, i5, o4, n8), this.end();
  }
  setViewpointImmediate(t5, i5 = 0, o4 = [0, 0], n8 = this._getDefaultAnchor()) {
    this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, n8, t5, i5, o4);
  }
  continuousRotateClockwise() {
    const t5 = this.view.viewpoint;
    this.animationManager?.animateContinuous(t5, (t6) => {
      bt(t6, t6, -g6);
    });
  }
  continuousRotateCounterclockwise() {
    const t5 = this.view.viewpoint;
    this.animationManager?.animateContinuous(t5, (t6) => {
      bt(t6, t6, g6);
    });
  }
  resetRotation() {
    this.view.constraints.rotationEnabled && (this.view.rotation = 0);
  }
  continuousPanLeft() {
    this._continuousPan([-v5, 0]);
  }
  continuousPanRight() {
    this._continuousPan([v5, 0]);
  }
  continuousPanUp() {
    this._continuousPan([0, v5]);
  }
  continuousPanDown() {
    this._continuousPan([0, -v5]);
  }
  continuousPanVector({ x: t5, y: i5 }) {
    this._continuousPan([t5 * v5, i5 * v5]);
  }
  stop() {
    this.pan.stopMomentumNavigation(), this.animationManager?.stop(), this.end(), null !== this._endTimer && (clearTimeout(this._endTimer), this._endTimer = null, this._set("interacting", false));
  }
  _continuousPan(t5) {
    const i5 = this.view.viewpoint;
    this.animationManager?.animateContinuous(i5, (i6) => {
      kt(i6, i6, t5), this.view.constraints.constrainByGeometry(i6);
    });
  }
  _startTimer(t5) {
    return null !== this._endTimer || (this._endTimer = setTimeout(() => {
      this._endTimer = null;
      const t6 = performance.now() - (this._lastEventTimestamp ?? 0);
      t6 < T2 ? this._endTimer = this._startTimer(t6) : this._set("interacting", false);
    }, t5)), this._endTimer;
  }
  _getDefaultAnchor() {
    const { size: t5, padding: { left: i5, right: o4, top: n8, bottom: e2 } } = this.view;
    return _4[0] = 0.5 * (t5[0] - o4 + i5), _4[1] = 0.5 * (t5[1] - e2 + n8), _4;
  }
  async _zoomToScale(t5, i5 = this._getDefaultAnchor()) {
    const { view: o4 } = this, { constraints: n8, scale: e2, viewpoint: s3, size: a6, padding: r9 } = o4, c6 = n8.canZoomInTo(t5), p = n8.canZoomOutTo(t5);
    if (!(t5 < e2 && !c6 || t5 > e2 && !p)) return Rt(d4, s3, t5 / e2, 0, i5, a6, r9), n8.constrainByGeometry(d4), o4.goTo(d4, { animate: true, animationMode: "always", duration: r4(), pickClosestTarget: false });
  }
  _scaleRotateTranslateViewpoint(t5, i5, o4, n8, e2) {
    const { view: s3 } = this, { size: a6, padding: r9, constraints: m3, scale: p, viewpoint: u6 } = s3, l5 = p * o4, w3 = m3.canZoomInTo(l5), v6 = m3.canZoomOutTo(l5);
    return (o4 < 1 && !w3 || o4 > 1 && !v6) && (o4 = 1), kt(u6, u6, e2), Rt(t5, u6, o4, n8, i5, a6, r9), m3.constrainByGeometry(t5);
  }
};
__decorate([a()], f9.prototype, "animationManager", void 0), __decorate([a({ type: Boolean, readOnly: true })], f9.prototype, "interacting", void 0), __decorate([a()], f9.prototype, "pan", void 0), __decorate([a()], f9.prototype, "pinch", void 0), __decorate([a()], f9.prototype, "rotate", void 0), __decorate([a()], f9.prototype, "view", void 0), __decorate([a()], f9.prototype, "zoomBox", void 0), f9 = __decorate([c("esri.views.2d.navigation.MapViewNavigation")], f9);
var y2 = f9;

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/MagnifierShader.js
var T3 = class extends C2 {
};
__decorate([f4(0, X)], T3.prototype, "position", void 0);
var C5 = class extends I {
};
var E3 = class extends w {
};
__decorate([m(U)], E3.prototype, "readbackTexture", void 0), __decorate([m(U)], E3.prototype, "maskTexture", void 0), __decorate([m(U)], E3.prototype, "overlayTexture", void 0), __decorate([m(_2)], E3.prototype, "background", void 0), __decorate([m(_2)], E3.prototype, "drawPos", void 0), __decorate([m(C)], E3.prototype, "maskEnabled", void 0), __decorate([m(C)], E3.prototype, "overlayEnabled", void 0);
var P2 = class extends P {
  constructor() {
    super(...arguments), this.type = "MagnifierShader";
  }
  vertex(t5) {
    const o4 = t5.position, e2 = t5.position.subtract(new X(0.5)).multiply(this.config.drawPos.zw), r9 = this.config.drawPos.xy.add(e2);
    return { glPosition: new _2(r9, 0, 1), texCoord: o4 };
  }
  fragment(t5) {
    let o4 = wn(this.config.readbackTexture, j(t5.texCoord));
    o4 = o4.add(new C(1).subtract(o4.a)).multiply(this.config.background);
    const e2 = zt(Ct(this.config.maskEnabled, new C(1)), wn(this.config.maskTexture, t5.texCoord).a, new C(1));
    o4 = o4.multiply(e2);
    const n8 = zt(Ct(this.config.overlayEnabled, new C(1)), wn(this.config.overlayTexture, t5.texCoord), new _2(0)), i5 = new v();
    return i5.fragColor = n8.add(new C(1).subtract(n8.a).multiply(o4)), i5;
  }
};
function j(t5) {
  const o4 = t5.multiply(new X(2)).subtract(1);
  return zt(Ct(o4.x, new C(0)).and(Ct(o4.y, new C(0))), new X(0.5), () => {
    const t6 = ie(o4.y, o4.x), e2 = We(je(o4), new C(G)), r9 = new X(oe(t6), un(t6));
    return e2.multiply(r9).multiply(new X(0.5)).add(new C(0.5));
  });
}
__decorate([m(E3)], P2.prototype, "config", void 0), __decorate([__param(0, l(T3))], P2.prototype, "vertex", null), __decorate([__param(0, l(C5))], P2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/GridShader.js
var G2 = class extends C2 {
};
__decorate([f4(0, X)], G2.prototype, "position", void 0);
var S2 = class extends I {
};
var M2 = class extends w {
};
__decorate([m(rt2)], M2.prototype, "dvs", void 0);
var k = class extends w {
};
__decorate([m(C)], k.prototype, "halfWidth", void 0), __decorate([m(C)], k.prototype, "aaWidth", void 0), __decorate([m(C)], k.prototype, "pxPerCell", void 0), __decorate([m(_2)], k.prototype, "minorLineColor", void 0), __decorate([m(_2)], k.prototype, "majorLineColor", void 0), __decorate([m(W)], k.prototype, "majorLineInterval", void 0);
var q = class extends P {
  constructor() {
    super(...arguments), this.type = "GridShader";
  }
  vertex(t5) {
    const o4 = t5.position.multiply(2).subtract(1);
    return { gridPos: this.transform.dvs.multiply(new Y(o4, 1)).xy, glPosition: new _2(o4, 0, 1) };
  }
  fragment(t5) {
    const o4 = Qt(t5.gridPos), e2 = Te(o4), i5 = Ye(e2.x, new C(1).subtract(e2.x)), n8 = Ye(e2.y, new C(1).subtract(e2.y)), s3 = new X(i5, n8).multiply(this.config.pxPerCell).subtract(this.config.halfWidth), p = Ye(s3.x, s3.y), a6 = new C(1).subtract(on(new C(0), this.config.aaWidth, p)), l5 = new W(nn(o4.x)), d5 = new W(nn(o4.y)), c6 = new C(St(l5, this.config.majorLineInterval)), I4 = new C(St(d5, this.config.majorLineInterval)), G3 = zt(Yt(s3.x, s3.y), c6, I4), S3 = Gt2(Dt(ln(s3.x, this.config.aaWidth), ln(s3.y, this.config.aaWidth)), new C(0.5)), M3 = Ye(c6, I4), k2 = zt(S3, M3, G3), q2 = _e(this.config.majorLineColor, this.config.minorLineColor, Ye(k2, new C(1))), z2 = new v();
    return z2.fragColor = q2.multiply(a6), z2;
  }
};
__decorate([m(M2)], q.prototype, "transform", void 0), __decorate([m(k)], q.prototype, "config", void 0), __decorate([__param(0, l(G2))], q.prototype, "vertex", null), __decorate([__param(0, l(S2))], q.prototype, "fragment", null);

export {
  r5 as r,
  r6 as r2,
  E2 as E,
  v2 as v,
  e,
  h,
  f6 as f,
  x3 as x,
  C3 as C,
  h2,
  R2 as R,
  y,
  c3 as c,
  r7 as r3,
  v4 as v2,
  l2 as l,
  y2,
  P2 as P,
  q
};
//# sourceMappingURL=chunk-IYHXFCFM.js.map
