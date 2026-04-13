import {
  e as e2
} from "./chunk-KD2B2WP5.js";
import {
  C,
  C2,
  I,
  P,
  U,
  X,
  Y,
  _ as _2,
  f as f2,
  l,
  m2 as m,
  rt,
  s,
  s2,
  v,
  w,
  we,
  wn
} from "./chunk-TF6FMOGZ.js";
import {
  o as o2
} from "./chunk-JPEJPHSH.js";
import {
  r as r2
} from "./chunk-W4X6TDMU.js";
import {
  t
} from "./chunk-7U4LQW5Y.js";
import {
  e
} from "./chunk-2DDOBC4Y.js";
import {
  mt
} from "./chunk-HBJAFAVS.js";
import {
  r
} from "./chunk-HR7MU35Z.js";
import {
  R,
  _
} from "./chunk-AFCXMSTT.js";
import {
  S
} from "./chunk-PC2SGWGS.js";
import {
  M,
  f,
  h,
  i,
  o
} from "./chunk-4F4IE6P5.js";
import {
  u as u2
} from "./chunk-7RKO4CUB.js";
import {
  G
} from "./chunk-4X5LQ2UO.js";
import {
  u2 as u
} from "./chunk-2DNVIDFH.js";
import {
  __decorate,
  __param
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/OverlayShader.js
var x = class extends C2 {
};
__decorate([f2(0, X)], x.prototype, "pos", void 0), __decorate([f2(1, X)], x.prototype, "uv", void 0);
var g = class extends I {
};
var w2 = class extends w {
};
__decorate([m(rt)], w2.prototype, "dvs", void 0);
var S2 = class extends w {
};
__decorate([m(X)], S2.prototype, "perspective", void 0), __decorate([m(X)], S2.prototype, "texSize", void 0), __decorate([m(C)], S2.prototype, "wrapAroundShift", void 0), __decorate([m(C)], S2.prototype, "opacity", void 0), __decorate([m(U)], S2.prototype, "texture", void 0);
var j = class extends P {
  constructor() {
    super(...arguments), this.type = "OverlayShader";
  }
  vertex(t2) {
    const o3 = t2.uv.divide(this.config.texSize), e3 = new C(1).add(we(o3, this.config.perspective)), r3 = new Y(t2.pos.add(new X(this.config.wrapAroundShift, 0)), 1), p = this.transform.dvs.multiply(r3);
    return { uv: o3, glPosition: new _2(p.xy.multiply(e3), 0, e3) };
  }
  fragment(t2) {
    const o3 = wn(this.config.texture, t2.uv).multiply(this.config.opacity), e3 = new v();
    return e3.fragColor = o3, e3;
  }
};
__decorate([m(w2)], j.prototype, "transform", void 0), __decorate([m(S2)], j.prototype, "config", void 0), __decorate([__param(0, l(x))], j.prototype, "vertex", null), __decorate([__param(0, l(g))], j.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/overlay/OverlayTechnique.js
var h2 = class extends s {
  constructor() {
    super(...arguments), this.type = 26, this._mesh = null, this.shaders = { overlay: new j() };
  }
  render(e3, t2) {
    const { context: i2, painter: r3 } = e3, n = this._getMesh(e3, t2);
    r3.setPipelineState(e2);
    const { isWrapAround: o3, wrapAroundShift: a } = t2.config, h3 = __spreadProps(__spreadValues({}, t2.config), { wrapAroundShift: 0 }), p = { shader: this.shaders.overlay, uniforms: { transform: t2.transform, config: h3 }, defines: null, optionalAttributes: null, useComputeBuffer: false };
    r3.setPipelineState(__spreadProps(__spreadValues({}, e2), { stencil: { write: false, test: { compare: 514, op: { fail: 7680, zFail: 7680, zPass: 7681 }, mask: 255 } } })), r3.submitDrawMeshUntyped(i2, p, n, { stencilRef: 0 }), o3 && (h3.wrapAroundShift = a, r3.submitDrawMeshUntyped(i2, p, n, { stencilRef: 0 }));
  }
  shutdown() {
    u(this._mesh);
  }
  _getMesh(e3, s3) {
    const { context: i2 } = e3;
    if (this._mesh) {
      const e4 = this._mesh.vertexBuffers.get("positions");
      if (!e4) throw new Error("Buffer not found");
      e4.setData(s3.position);
    } else {
      const e4 = null != s3.index ? s3.index.length : s3.position.length / 2;
      this._mesh = new o2(i2, { vertex: { positions: { data: s3.position, layout: [new t("pos", 2, R.FLOAT, 0, 8)] }, uvs: { data: s3.tex, layout: [new t("uv", 2, R.UNSIGNED_SHORT, 0, 4)] } }, index: null != s3.index ? { index: { data: s3.index } } : void 0, groups: [{ index: null != s3.index ? "index" : void 0, primitive: _.TRIANGLE_STRIP }], parts: [{ group: 0, start: 0, count: e4 }] });
    }
    return this._mesh;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/OverlayContainer.js
var f3 = class extends s2 {
  constructor() {
    super(...arguments), this._viewStateId = -1, this._dvsMat3 = e(), this._overlayTechnique = new h2();
  }
  get dvsMat3() {
    return this._dvsMat3;
  }
  beforeRender(t2) {
    this._updateMatrices(t2), this._updateOverlays(t2, this.children);
    for (const e3 of this.children) e3.beforeRender(t2);
  }
  doRender(t2) {
    if (1 !== t2.drawPhase || !this.visible) return;
    super.doRender(t2);
    const e3 = this._overlayTechnique;
    for (const r3 of this.children) r3.draw(t2, e3);
  }
  onDetach() {
    this._overlayTechnique.shutdown();
  }
  _updateMatrices(a) {
    const { state: h3 } = a, { id: d, size: m2, pixelRatio: p, resolution: f4, rotation: u3, viewpoint: v2, displayMat3: _3 } = h3;
    if (this._viewStateId === d) return;
    const g2 = u2(u3), y = p * m2[0], M2 = p * m2[1];
    this._localOrigin = v2.targetGeometry.clone();
    const { x: w3, y: x2 } = this._localOrigin, b = S(w3, h3.spatialReference);
    this._localOrigin.x = b, this._localOrigin.y = x2;
    const j2 = f4 * y, O = f4 * M2, R2 = o(this._dvsMat3);
    i(R2, R2, _3), M(R2, R2, r(y / 2, M2 / 2)), f(R2, R2, r2(y / j2, -M2 / O, 1)), h(R2, R2, -g2), this._viewStateId = d;
  }
  _updateOverlays(e3, r3) {
    const { state: i2 } = e3, { rotation: o3, spatialReference: s3, worldScreenWidth: a, size: n, viewpoint: l2 } = i2, c = this._localOrigin;
    let m2, p = 0;
    const f4 = G(s3);
    if (f4 && s3.isWrappable) {
      const e4 = n[0], r4 = n[1], c2 = u2(o3), h3 = Math.abs(Math.cos(c2)), u3 = Math.abs(Math.sin(c2)), v2 = Math.round(e4 * h3 + r4 * u3), [_3, g2] = f4.valid, y = mt(s3), { x: M2, y: w3 } = l2.targetGeometry, x2 = [M2, w3], b = [0, 0];
      i2.toScreen(b, x2);
      const j2 = [0, 0];
      let O;
      O = v2 > a ? 0.5 * a : 0.5 * v2;
      const R2 = Math.floor((M2 + 0.5 * y) / y), q = _3 + R2 * y, S3 = g2 + R2 * y, G2 = [b[0] + O, 0];
      i2.toMap(j2, G2), j2[0] > S3 && (p = y), G2[0] = b[0] - O, i2.toMap(j2, G2), j2[0] < q && (p = -y), m2 = { worldWidth: y, xBounds: [_3, g2] };
    }
    for (const t2 of r3) t2.updateDrawCoords(c, p, i2, m2);
  }
};

export {
  f3 as f
};
//# sourceMappingURL=chunk-4OSJPX5A.js.map
