import {
  a
} from "./chunk-TX75HZKJ.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/webgl/renderState.js
function e(t, e2, i2 = 32774, n2 = [0, 0, 0, 0]) {
  return { srcRgb: t, srcAlpha: t, dstRgb: e2, dstAlpha: e2, opRgb: i2, opAlpha: i2, color: { r: n2[0], g: n2[1], b: n2[2], a: n2[3] } };
}
function i(t, e2, i2, n2, s2 = 32774, l2 = 32774, r2 = [0, 0, 0, 0]) {
  return { srcRgb: t, srcAlpha: e2, dstRgb: i2, dstAlpha: n2, opRgb: s2, opAlpha: l2, color: { r: r2[0], g: r2[1], b: r2[2], a: r2[3] } };
}
var n = e(0, 771);
var s = e(1, 0);
var l = e(1, 1);
var r = e(1, 771);
var a2 = i(770, 1, 771, 771);
var h = i(0, 0, 768, 1);
var o = { face: 1029, mode: 2305 };
var _ = { face: 1028, mode: 2305 };
var c = (t) => 2 === t ? o : 1 === t ? _ : null;
var d = { zNear: 0, zFar: 1 };
var u = { r: true, g: true, b: true, a: true };
function f(t) {
  return D.intern(t);
}
function p(t) {
  return m.intern(t);
}
function g(t) {
  return C.intern(t);
}
function v(t) {
  return P.intern(t);
}
function I(t) {
  return z.intern(t);
}
function W(t) {
  return j.intern(t);
}
function S(t) {
  return N.intern(t);
}
function b(t) {
  return M.intern(t);
}
function T(t) {
  return E.intern(t);
}
function w(t) {
  return H.intern(t);
}
var B = class {
  constructor(t, e2) {
    this._makeKey = t, this._makeRef = e2, this._interns = /* @__PURE__ */ new Map();
  }
  intern(t) {
    if (!t) return null;
    const e2 = this._makeKey(t), i2 = this._interns;
    return i2.has(e2) || i2.set(e2, this._makeRef(t)), i2.get(e2) ?? null;
  }
};
function y(t) {
  return "[" + t.join(",") + "]";
}
var D = new B(O, (t) => __spreadValues({ __tag: "Blending" }, t));
function O(t) {
  return t ? y([t.srcRgb, t.srcAlpha, t.dstRgb, t.dstAlpha, t.opRgb, t.opAlpha, t.color.r, t.color.g, t.color.b, t.color.a]) : null;
}
var m = new B(R, (t) => __spreadValues({ __tag: "Culling" }, t));
function R(t) {
  return t ? y([t.face, t.mode]) : null;
}
var C = new B(A, (t) => __spreadValues({ __tag: "PolygonOffset" }, t));
function A(t) {
  return t ? y([t.factor, t.units]) : null;
}
var P = new B(k, (t) => __spreadValues({ __tag: "DepthTest" }, t));
function k(t) {
  return t ? y([t.func]) : null;
}
var z = new B(F, (t) => __spreadValues({ __tag: "StencilTest" }, t));
function F(t) {
  return t ? y([t.function.func, t.function.ref, t.function.mask, t.operation.fail, t.operation.zFail, t.operation.zPass]) : null;
}
var j = new B(K, (t) => __spreadValues({ __tag: "DepthWrite" }, t));
function K(t) {
  return t ? y([t.zNear, t.zFar]) : null;
}
var N = new B(x, (t) => __spreadValues({ __tag: "ColorWrite" }, t));
function x(t) {
  return t ? y([t.r, t.g, t.b, t.a]) : null;
}
var M = new B(q, (t) => __spreadValues({ __tag: "StencilWrite" }, t));
function q(t) {
  return t ? y([t.mask]) : null;
}
var E = new B(G, (t) => __spreadValues({ __tag: "DrawBuffers" }, t));
function G(t) {
  return t ? y(t.buffers) : null;
}
var H = new B(J, (t) => ({ blending: f(t.blending), culling: p(t.culling), polygonOffset: g(t.polygonOffset), depthTest: v(t.depthTest), stencilTest: I(t.stencilTest), depthWrite: W(t.depthWrite), colorWrite: S(t.colorWrite), stencilWrite: b(t.stencilWrite), drawBuffers: T(t.drawBuffers) }));
function J(t) {
  return t ? y([O(t.blending), R(t.culling), A(t.polygonOffset), k(t.depthTest), F(t.stencilTest), K(t.depthWrite), x(t.colorWrite), q(t.stencilWrite), G(t.drawBuffers)]) : null;
}
var L = class {
  constructor(t) {
    this._pipelineInvalid = true, this._blendingInvalid = true, this._cullingInvalid = true, this._polygonOffsetInvalid = true, this._depthTestInvalid = true, this._stencilTestInvalid = true, this._depthWriteInvalid = true, this._colorWriteInvalid = true, this._stencilWriteInvalid = true, this._drawBuffersInvalid = true, this._stateSetters = t;
  }
  setPipeline(t) {
    (this._pipelineInvalid || t !== this._pipeline) && (this._setBlending(t.blending), this._setCulling(t.culling), this._setPolygonOffset(t.polygonOffset), this._setDepthTest(t.depthTest), this._setStencilTest(t.stencilTest), this._setDepthWrite(t.depthWrite), this._setColorWrite(t.colorWrite), this._setStencilWrite(t.stencilWrite), this._setDrawBuffers(t.drawBuffers), this._pipeline = t), this._pipelineInvalid = false;
  }
  getPipelineState() {
    return a(this._pipeline);
  }
  invalidateBlending() {
    this._blendingInvalid = true, this._pipelineInvalid = true;
  }
  invalidateCulling() {
    this._cullingInvalid = true, this._pipelineInvalid = true;
  }
  invalidatePolygonOffset() {
    this._polygonOffsetInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDepthTest() {
    this._depthTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateStencilTest() {
    this._stencilTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDepthWrite() {
    this._depthWriteInvalid = true, this._pipelineInvalid = true;
  }
  invalidateColorWrite() {
    this._colorWriteInvalid = true, this._pipelineInvalid = true;
  }
  invalidateStencilWrite() {
    this._stencilTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDrawBuffers() {
    this._drawBuffersInvalid = true, this._pipelineInvalid = true;
  }
  _setBlending(t) {
    this._blending = this._setSubState(t, this._blending, this._blendingInvalid, this._stateSetters.setBlending), this._blendingInvalid = false;
  }
  _setCulling(t) {
    this._culling = this._setSubState(t, this._culling, this._cullingInvalid, this._stateSetters.setCulling), this._cullingInvalid = false;
  }
  _setPolygonOffset(t) {
    this._polygonOffset = this._setSubState(t, this._polygonOffset, this._polygonOffsetInvalid, this._stateSetters.setPolygonOffset), this._polygonOffsetInvalid = false;
  }
  _setDepthTest(t) {
    this._depthTest = this._setSubState(t, this._depthTest, this._depthTestInvalid, this._stateSetters.setDepthTest), this._depthTestInvalid = false;
  }
  _setStencilTest(t) {
    this._stencilTest = this._setSubState(t, this._stencilTest, this._stencilTestInvalid, this._stateSetters.setStencilTest), this._stencilTestInvalid = false;
  }
  _setDepthWrite(t) {
    this._depthWrite = this._setSubState(t, this._depthWrite, this._depthWriteInvalid, this._stateSetters.setDepthWrite), this._depthWriteInvalid = false;
  }
  _setColorWrite(t) {
    this._colorWrite = this._setSubState(t, this._colorWrite, this._colorWriteInvalid, this._stateSetters.setColorWrite), this._colorWriteInvalid = false;
  }
  _setStencilWrite(t) {
    this._stencilWrite = this._setSubState(t, this._stencilWrite, this._stencilWriteInvalid, this._stateSetters.setStencilWrite), this._stencilTestInvalid = false;
  }
  _setDrawBuffers(t) {
    this._drawBuffers = this._setSubState(t, this._drawBuffers, this._drawBuffersInvalid, this._stateSetters.setDrawBuffers), this._drawBuffersInvalid = false;
  }
  _setSubState(t, e2, i2, n2) {
    return (i2 || t !== e2) && (n2(t), this._pipelineInvalid = true), t;
  }
};

export {
  i,
  n,
  r,
  a2 as a,
  _,
  c,
  d,
  u,
  w,
  L
};
//# sourceMappingURL=chunk-QLWLILRX.js.map
