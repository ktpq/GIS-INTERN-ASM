import {
  o
} from "./chunk-NIOT37JE.js";
import {
  _
} from "./chunk-KJSHXJQO.js";
import {
  O
} from "./chunk-IODIHRP7.js";
import {
  y
} from "./chunk-U54DMEX7.js";
import {
  r2
} from "./chunk-2KP24SU5.js";
import {
  n2 as n
} from "./chunk-XE7VYYSA.js";
import {
  r
} from "./chunk-XCN5EJK7.js";

// node_modules/@arcgis/core/views/webgl/VertexArrayObject.js
var f = () => n.getLogger("esri.views.webgl.VertexArrayObject");
var h = class t {
  constructor(t2, r3, s, i, n2) {
    this._context = t2, this._indexBuffer = s, this._buffers = r3 instanceof Map ? r3 : /* @__PURE__ */ new Map([["geometry", r3]]), this._baseInstances = null == i ? /* @__PURE__ */ new Map() : "number" == typeof i ? /* @__PURE__ */ new Map([["geometry", i]]) : i, this.locations = n2 ?? r(o(this._buffers));
  }
  get glName() {
    return this._glName;
  }
  get context() {
    return this._context;
  }
  get buffers() {
    return r(this._buffers);
  }
  buffer(e = "geometry") {
    return this.buffers.get(e);
  }
  get indexBuffer() {
    return this._indexBuffer;
  }
  getByteLength(e) {
    return this.buffer(e)?.sizeBytes ?? 0;
  }
  vertexCount(e) {
    const t2 = this.buffer(e);
    return t2 ? t2.sizeBytes / t2.layout[0].stride : 0;
  }
  get usedMemory() {
    return Array.from(this._buffers.values()).reduce((e, t2) => e + t2.usedMemory, this._indexBuffer?.usedMemory ?? 0 + (this._buffers.size + (this._indexBuffer ? 1 : 0)) * y);
  }
  dispose() {
    this._context ? (this._buffers.forEach((e) => e.dispose()), this._buffers.clear(), this._indexBuffer = r2(this._indexBuffer), this.disposeVAOOnly()) : (this._glName || this._buffers.size > 0) && f().warn("Leaked WebGL VAO");
  }
  disposeVAOOnly() {
    this._context ? (this._context.getBoundVAO() === this && this._context.bindVAO(null), this._glName && (this._context.gl.deleteVertexArray(this._glName), this._glName = null, this._context.instanceCounter.decrement(O.VertexArrayObject, this)), this._context = null) : this._glName && f().warn("Leaked WebGL VAO");
  }
  bind(e = this.locations) {
    const t2 = this._context.gl;
    this._glName ? t2.bindVertexArray(this._glName) : (this._context.instanceCounter.increment(O.VertexArrayObject, this), this._glName = t2.createVertexArray(), t2.bindVertexArray(this._glName), this._bindLayout(e));
  }
  _bindLayout(e) {
    const { _buffers: t2, _indexBuffer: r3 } = this;
    if (t2 || f().error("Vertex buffer dictionary is empty!"), t2.forEach((t3, r4) => _(this._context, e, t3, this._baseInstances.get(r4) ?? 0)), null != r3) {
      const e2 = this._context.gl;
      this._context.gl.bindBuffer(e2.ELEMENT_ARRAY_BUFFER, r3.glName);
    }
  }
  unbind() {
    this._context.gl.bindVertexArray(null);
  }
  shallowCloneWithBaseInstances(e) {
    return new t(this._context, this._buffers, this._indexBuffer, e);
  }
};

export {
  h
};
//# sourceMappingURL=chunk-3CNOFERI.js.map
