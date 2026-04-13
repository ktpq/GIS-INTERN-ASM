import {
  b,
  e as e2,
  r as r2,
  r4 as r3,
  s
} from "./chunk-VD5IUEGW.js";
import {
  s2
} from "./chunk-SG6TQSIU.js";
import {
  e
} from "./chunk-6CIU5QP6.js";
import {
  h as h2
} from "./chunk-HKJEWSCU.js";
import {
  r
} from "./chunk-L7NRTQ6W.js";
import {
  E2 as E,
  h
} from "./chunk-T7SNP64P.js";
import {
  _
} from "./chunk-IODIHRP7.js";
import {
  has
} from "./chunk-6I475YAP.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrush.js
var t = class {
  constructor() {
    this.name = this.constructor.name || "UnnamedBrush", this.brushEffect = null;
  }
  prepareState(t3, r4) {
  }
  draw(t3, r4, s3) {
  }
  drawMany(t3, r4, s3) {
    for (const a of r4) a.visible && this.draw(t3, a, s3);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushStencil.js
var n = class extends t {
  constructor() {
    super(...arguments), this._color = r2(1, 0, 0, 1), this._initialized = false;
  }
  dispose() {
    this._solidProgram && (this._solidProgram.dispose(), this._solidProgram = null), this._solidVertexArrayObject && (this._solidVertexArrayObject.dispose(), this._solidVertexArrayObject = null);
  }
  prepareState({ context: e3 }) {
    e3.setDepthWriteEnabled(false), e3.setDepthTestEnabled(false), e3.setStencilTestEnabled(true), e3.setBlendingEnabled(false), e3.setColorMask(false, false, false, false), e3.setStencilOp(7680, 7680, 7681), e3.setStencilWriteMask(255);
  }
  draw(e3, r4) {
    const { context: t3, requestRender: s3, allowDelayedRender: o } = e3;
    this._initialized || this._initialize(t3), !o || null == s3 || this._solidProgram.compiled ? (t3.setStencilFunctionSeparate(1032, 516, r4.stencilRef, 255), t3.bindVAO(this._solidVertexArrayObject), t3.useProgram(this._solidProgram), this._solidProgram.setUniformMatrix3fv("u_dvsMat3", r4.transforms.displayViewScreenMat3), this._solidProgram.setUniform2fv("u_coord_range", [r4.rangeX, r4.rangeY]), this._solidProgram.setUniform1f("u_depth", 0), this._solidProgram.setUniform4fv("u_color", this._color), t3.drawArrays(_.TRIANGLE_STRIP, 0, 4), t3.bindVAO(null)) : s3();
  }
  _initialize(e3) {
    if (this._initialized) return true;
    const r4 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), i = new r(e3, s, r4), n3 = new h2(e3, i);
    return this._solidProgram = e(e3, e2, n3.locations), this._solidVertexArrayObject = n3, this._initialized = true, true;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushTileDebugInfo.js
var u = 512;
var d = 512;
var h3 = 16;
var g = 8;
var _2 = (d - 2 * g) / 5;
var x = class extends t {
  constructor() {
    super(...arguments), this._color = r2(1, 0, 0, 1);
  }
  dispose() {
    this._outlineProgram?.dispose(), this._outlineProgram = null, this._tileInfoProgram?.dispose(), this._tileInfoProgram = null, this._outlineVertexArrayObject?.dispose(), this._outlineVertexArrayObject = null, this._tileInfoVertexArrayObject?.dispose(), this._tileInfoVertexArrayObject = null, this._ctx = null;
  }
  prepareState({ context: e3 }) {
    e3.setBlendingEnabled(true), e3.setBlendFunctionSeparate(1, 771, 1, 771), e3.setColorMask(true, true, true, true), e3.setStencilWriteMask(0), e3.setStencilTestEnabled(false);
  }
  draw(e3, r4) {
    const { context: o, requestRender: i, allowDelayedRender: n3 } = e3;
    if (!r4.isReady && r4 instanceof b && r4.hasData) return;
    if (this._loadWGLResources(o), n3 && null != i && (!this._outlineProgram.compiled || !this._tileInfoProgram.compiled)) return void i();
    o.bindVAO(this._outlineVertexArrayObject), o.useProgram(this._outlineProgram), this._outlineProgram.setUniformMatrix3fv("u_dvsMat3", r4.transforms.displayViewScreenMat3), this._outlineProgram.setUniform2f("u_coord_range", r4.rangeX, r4.rangeY), this._outlineProgram.setUniform1f("u_depth", 0), this._outlineProgram.setUniform4fv("u_color", this._color), o.drawArrays(_.LINE_STRIP, 0, 4);
    const l = this._getTexture(o, r4);
    l ? (o.bindVAO(this._tileInfoVertexArrayObject), o.useProgram(this._tileInfoProgram), o.bindTexture(l, 0), this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3", r4.transforms.displayViewScreenMat3), this._tileInfoProgram.setUniform1f("u_depth", 0), this._tileInfoProgram.setUniform2f("u_coord_ratio", r4.rangeX / r4.width, r4.rangeY / r4.height), this._tileInfoProgram.setUniform2f("u_delta", 0, 0), this._tileInfoProgram.setUniform2f("u_dimensions", l.descriptor.width, l.descriptor.height), o.drawArrays(_.TRIANGLE_STRIP, 0, 4), o.bindVAO(null)) : o.bindVAO(null);
  }
  _loadWGLResources(e3) {
    if (this._outlineProgram && this._tileInfoProgram) return;
    const t3 = new Int8Array([0, 0, 1, 0, 1, 1, 0, 1]), r4 = new r(e3, s, t3);
    this._outlineVertexArrayObject = new h2(e3, r4), this._outlineProgram = e(e3, e2, this._outlineVertexArrayObject.locations);
    const s3 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), l = new r(e3, s, s3);
    this._tileInfoVertexArrayObject = new h2(e3, l), this._tileInfoProgram = e(e3, r3, this._tileInfoVertexArrayObject.locations);
  }
  _getTexture(e3, t3) {
    if (!this._ctx) {
      const e4 = document.createElement("canvas");
      e4.width = u, e4.height = d, this._ctx = e4.getContext("2d");
    }
    if (!t3.tileDebugInfoTexture) {
      const r5 = new h(u, d);
      r5.wrapMode = 33071, r5.samplingMode = 9729, r5.isImmutable = true, t3.tileDebugInfoTexture = new E(e3, r5);
    }
    const r4 = this._ctx;
    r4.clearRect(0, 0, r4.canvas.width, r4.canvas.height), r4.textAlign = "left", r4.textBaseline = "top", r4.font = h3 - 2 + "px sans-serif", r4.lineWidth = 2, r4.fillStyle = "white", r4.strokeStyle = "black";
    const { debugSlot: o } = t3;
    let i = g + _2 * o;
    const s3 = `${o}) ${t3.key.id} (${t3.constructor.name})`;
    r4.strokeText(s3, g, i), r4.fillText(s3, g, i), i += h3;
    const { debugInfo: n3 } = t3;
    if (n3) {
      const { length: e4, minOrderedLength: t4, minUnorderedLength: o2, triangleCount: s4 } = n3.display;
      if (e4 > 0) {
        const t5 = `Length: ${e4}`;
        r4.strokeText(t5, g, i), r4.fillText(t5, g, i), i += h3;
      }
      if (t4) {
        const e5 = `Min ordered length: ${t4}`;
        r4.strokeText(e5, g, i), r4.fillText(e5, g, i), i += h3;
      }
      if (o2) {
        const e5 = `Min unordered length: ${o2}`;
        r4.strokeText(e5, g, i), r4.fillText(e5, g, i), i += h3;
      }
      if (s4 > 0) {
        s4 > 1e5 && (r4.fillStyle = "red", r4.strokeStyle = "white");
        const e5 = `Triangle count: ${s4}`;
        r4.strokeText(e5, g, i), r4.fillText(e5, g, i), i += h3;
      }
      const { bytesUsed: l, bytesReserved: a } = n3.memory;
      if (r4.fillStyle = "white", r4.strokeStyle = "black", l > 0 || a > 0) {
        const e5 = `Memory usage: ${l} of ${a} bytes`;
        r4.strokeText(e5, g, i), r4.fillText(e5, g, i), i += h3;
      }
    }
    return t3.tileDebugInfoTexture.setData(r4.canvas), t3.tileDebugInfoTexture;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js
var t2 = (e3, r4) => e3.key.level - r4.key.level !== 0 ? e3.key.level - r4.key.level : e3.key.row - r4.key.row !== 0 ? e3.key.row - r4.key.row : e3.key.col - r4.key.col;
var n2 = class extends s2 {
  constructor(e3) {
    super(), this.tilingScheme = e3, this.sortFunction = t2;
  }
  renderChildren(e3) {
    this.setStencilReference(e3), super.renderChildren(e3);
  }
  createRenderParams(e3) {
    const { state: r4 } = e3, s3 = super.createRenderParams(e3);
    return s3.requiredLevel = this.tilingScheme.getClosestInfoForScale(r4.scale).level, s3.displayLevel = this.tilingScheme.scaleToZoom(r4.scale), s3;
  }
  prepareRenderPasses(e3) {
    const t3 = super.prepareRenderPasses(e3);
    return t3.push(e3.registerRenderPass({ name: "stencil", brushes: [n], drawPhase: 211, target: () => this.getStencilTarget() })), has("esri-tiles-debug") && t3.push(e3.registerRenderPass({ name: "tileInfo", brushes: [x], drawPhase: 64, target: () => this.children })), t3;
  }
  getStencilTarget() {
    return this.children;
  }
  setStencilReference(e3) {
    let r4 = 1;
    for (const s3 of this.children) s3.stencilRef = r4++;
  }
};

export {
  t,
  n,
  x,
  n2
};
//# sourceMappingURL=chunk-6EI74O3Z.js.map
