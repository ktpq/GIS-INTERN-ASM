import {
  n as n2
} from "./chunk-2PUTFA4S.js";
import {
  L,
  s2
} from "./chunk-VLLAUUAX.js";
import {
  s
} from "./chunk-SADF36VT.js";
import {
  E2 as E,
  h
} from "./chunk-ICUJG4IU.js";
import {
  r2
} from "./chunk-POW25PFR.js";
import {
  n2 as n,
  r3 as r,
  t
} from "./chunk-IDI4VM7T.js";
import {
  __decorate,
  __param
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/Technique.js
var s3 = class {
  constructor() {
    this.drawPhase = 217;
  }
  startup() {
  }
  shutdown(s8) {
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/ShaderGraphNode.js
function t2(t7) {
  return t7.split(" ").map((t8, e3) => e3 > 0 ? t8.charAt(0).toUpperCase() + t8.slice(1) : t8).join("");
}
function e(t7, e3) {
  const s8 = [];
  for (s8.push(e3); s8.length; ) {
    const e4 = s8.pop();
    if ("object" == typeof e4 && !t7.has(e4.uid)) {
      t7.add(e4.uid);
      for (const t8 of e4.children) s8.push(t8);
    }
  }
}
var s4 = class _s {
  constructor() {
    this.uid = _s.NodeCount++, this._debugName = null, this._isMutable = false, this.isImplicit = false;
  }
  static {
    this.NodeCount = 0;
  }
  get isMutable() {
    return this._isMutable;
  }
  setMutable() {
    return this._isMutable = true, this;
  }
  setDebugName(e3) {
    return e3 = t2(e3), this._debugName = e3, this.isImplicit && this.children[0] instanceof _s && this.children[0].setDebugName(e3), this;
  }
  get debugInfo() {
    return { name: this._debugName ?? "" };
  }
  cloneInto(t7) {
    t7._debugName = this._debugName, t7._isMutable = this._isMutable, t7.isImplicit = this.isImplicit, t7.uid = this.uid;
  }
};
function i(t7) {
  return "object" == typeof t7 ? t7.clone() : t7;
}
var r3 = class extends s4 {
  constructor() {
    super(...arguments), this.shaderType = "primitive-node";
  }
};
var n3 = class _n extends s4 {
  constructor(t7) {
    super(), this.child = t7, this.shaderType = "scope-node";
  }
  get children() {
    return [this.child];
  }
  clone() {
    const t7 = new _n(i(this.child));
    return this.cloneInto(t7), t7;
  }
};
var c = class _c extends s4 {
  constructor(t7, e3, s8) {
    super(), this.property = t7, this.target = e3, this.returnType = s8, this.shaderType = "property-access-node";
  }
  get children() {
    const t7 = [this.target];
    return "string" != typeof this.property && t7.push(this.property), t7;
  }
  clone() {
    const t7 = new _c(this.property, i(this.target), this.returnType);
    return this.cloneInto(t7), t7;
  }
};
var o = class _o extends s4 {
  constructor(t7, e3, s8, i4) {
    super(), this.x = t7, this.y = e3, this.target = s8, this.returnType = i4, this.shaderType = "property-access-2d-node";
  }
  get children() {
    return [this.target, this.x, this.y];
  }
  clone() {
    const t7 = new _o(this.x, this.y, i(this.target), this.returnType);
    return this.cloneInto(t7), t7;
  }
};
var u = class _u extends s4 {
  constructor(t7, e3, s8) {
    super(), this.condition = t7, this.ifTrue = e3, this.ifFalse = s8, this.shaderType = "condition-node";
  }
  get children() {
    return [this.condition, this.ifTrue, this.ifFalse];
  }
  clone() {
    const t7 = i(this.ifTrue), e3 = this.ifFalse ? i(this.ifFalse) : null, s8 = new _u(this.condition, t7, e3);
    return this.cloneInto(s8), s8;
  }
};
var p = class _p extends s4 {
  constructor(t7, e3, s8, i4) {
    super(), this.captureList = t7, this.returnType = e3, this.generator = i4, this.shaderType = "block-node", s8 && (this.subgraph = new n3(s8));
  }
  get children() {
    return Object.keys(this.captureList).map((t7) => this.captureList[t7]).concat(this.subgraph ?? []);
  }
  clone() {
    const t7 = {};
    for (const s8 in this.captureList) t7[s8] = i(this.captureList[s8]);
    const e3 = new _p(t7, this.returnType, this.subgraph ? i(this.subgraph.child) : this.subgraph, this.generator);
    return this.cloneInto(e3), e3;
  }
};
var a = class _a extends s4 {
  constructor(t7, e3, s8, i4, r5, n6 = false) {
    super(), this.token = t7, this._children = e3, this.isInfix = s8, this.isPropertyAccess = i4, this.returnType = r5, this.isTernary = n6, this.shaderType = "function-node";
  }
  get children() {
    return this._children;
  }
  clone() {
    const t7 = new _a(this.token, this._children.map(i), this.isInfix, this.isPropertyAccess, this.returnType, this.isTernary);
    return this.cloneInto(t7), t7;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/glsl.js
var h2;
var l;
var a2;
var f;
var p2;
var d;
var y;
var w;
var m;
var v;
var b;
var g;
var x;
var I;
function D(t7) {
  switch (t7.type) {
    case "bool":
    case "bvec2":
    case "bvec3":
    case "bvec4":
      return J;
    case "float":
    case "vec2":
    case "vec3":
    case "vec4":
      return C;
    case "int":
    case "ivec2":
    case "ivec3":
    case "ivec4":
      return W;
    case "uint":
    case "uvec2":
    case "uvec3":
    case "uvec4":
      return G;
    default:
      throw new Error("Unable to handle type");
  }
}
function k(t7) {
  const e3 = [["float", "vec2", "vec3", "vec4"], ["int", "ivec2", "ivec3", "ivec4"], ["uint", "uvec2", "uvec3", "uvec4"], ["bool", "bvec2", "bvec3", "bvec4"]];
  for (const n6 of e3) if (n6.includes(t7)) return n6.map((t8) => ct[t8]);
  throw new Error("Unable to find type family");
}
function M(t7) {
  return new Proxy(t7, { get(e3, n6) {
    if ("constructor" === n6) return new Proxy(e3.constructor, { construct: (t8, e4, n7) => M(new t8(...e4)) });
    if (n6 in e3) return e3[n6];
    if ("string" == typeof n6) {
      const e4 = k(t7.type);
      return dt(t7, n6, e4[n6.length - 1]);
    }
  } });
}
function S(t7) {
  return new Proxy(t7, { construct: (t8, e3, n6) => M(new t8(...e3)) });
}
function R(t7) {
  return new Proxy(t7, { get(e3, n6) {
    if (n6 in e3) return e3[n6];
    if ("string" == typeof n6) {
      const e4 = parseInt(n6, 10);
      if (!isNaN(e4)) return dt(t7, `[${e4}]`, t7.elementType.constructor);
    }
  } });
}
function j(t7) {
  return new Proxy(t7, { construct: (t8, e3, n6) => R(new t8(...e3)) });
}
var P = class extends Error {
};
var B = class extends r3 {
  static {
    h2 = this;
  }
  static {
    this.type = "array";
  }
  constructor(t7, e3) {
    super(), this.elementType = t7, this.size = e3, this.children = [], this.type = "array";
  }
  clone() {
    const t7 = new h2(this.elementType, this.size);
    return super.cloneInto(t7), t7;
  }
  get(t7, e3) {
    const n6 = new W(t7), r5 = null != e3 ? new W(e3) : null;
    if (null != r5) {
      return yt(this, n6, r5, D(this.elementType.constructor));
    }
    return dt(this, n6, this.elementType.constructor);
  }
  last() {
    return this.get(this.size - 1);
  }
  first() {
    return this.get(0);
  }
  findIndex(t7, e3, n6) {
    return Et(this, t7, e3, n6);
  }
  glslFindIndex(t7, e3, n6) {
    return $t(this, t7, e3, n6);
  }
  static ofType(t7, e3) {
    const n6 = { construct: (n7, r5) => new h2(new t7(), e3) };
    return new Proxy(h2, n6);
  }
};
B = h2 = __decorate([j], B);
var q = class _q extends r3 {
  static {
    this.type = "array-2d";
  }
  constructor(t7, e3, n6, r5 = false) {
    super(), this.elementType = t7, this.xSize = e3, this.ySize = n6, this.isRowMajor = r5, this.children = [], this.type = "array-2d";
  }
  clone() {
    const t7 = new _q(this.elementType, this.xSize, this.ySize, this.isRowMajor);
    return super.cloneInto(t7), t7;
  }
  get size() {
    return this.xSize * this.ySize;
  }
  get(t7, e3) {
    return this.isRowMajor ? this._getRowMajor(t7, e3) : this._getColumnMajor(t7, e3);
  }
  _getColumnMajor(t7, e3) {
    const n6 = new W(t7);
    return dt(this, new W(e3).add(n6.multiply(this.xSize)), this.elementType.constructor);
  }
  _getRowMajor(t7, e3) {
    const n6 = new W(t7), r5 = new W(e3);
    return dt(this, n6.add(r5.multiply(this.ySize)), this.elementType.constructor);
  }
  static ofType(t7, e3, n6, r5 = false) {
    return new Proxy(B, { construct: (i4, c5) => new _q(new t7(), e3, n6, r5) });
  }
};
var U = class _U extends r3 {
  constructor() {
    super(...arguments), this.type = "sampler2D", this.children = [];
  }
  static {
    this.type = "sampler2D";
  }
  clone() {
    const t7 = new _U();
    return t7.children = this.children.map(i), super.cloneInto(t7), t7;
  }
};
var C = class _C extends r3 {
  static {
    this.type = "float";
  }
  constructor(t7) {
    super(), this.type = "float", this.children = [t7];
  }
  clone() {
    const t7 = new _C(i(this.children[0]));
    return super.cloneInto(t7), t7;
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, _C) : t7);
  }
  divide(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, _C) : t7);
  }
  add(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, _C) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, _C) : t7);
  }
};
var X = class extends r3 {
  static {
    l = this;
  }
  static {
    this.type = "vec2";
  }
  constructor(t7, e3) {
    super(), this.type = "vec2", this.children = [t7, e3].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new l(i(this.children[0]), i(this.children[1]));
    return super.cloneInto(t7), t7;
  }
  get 0() {
    return dt(this, "[0]", C);
  }
  get 1() {
    return dt(this, "[1]", C);
  }
  get 2() {
    throw new P();
  }
  get 3() {
    throw new P();
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
  divide(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
  add(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
};
X = l = __decorate([S], X);
var Y = class extends r3 {
  static {
    a2 = this;
  }
  static {
    this.type = "vec3";
  }
  constructor(t7, e3, n6) {
    super(), this.type = "vec3", this.children = [t7, e3, n6].filter((t8) => null != t8);
  }
  get 0() {
    return dt(this, "[0]", C);
  }
  get 1() {
    return dt(this, "[1]", C);
  }
  get 2() {
    return dt(this, "[2]", C);
  }
  get 3() {
    throw new P();
  }
  clone() {
    const t7 = new a2(i(this.children[0]), i(this.children[1]), i(this.children[2]));
    return super.cloneInto(t7), t7;
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
  divide(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
  add(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
};
Y = a2 = __decorate([S], Y);
var _ = class extends r3 {
  static {
    f = this;
  }
  static {
    this.type = "vec4";
  }
  constructor(t7, e3, n6, r5) {
    super(), this.type = "vec4", this.children = [t7, e3, n6, r5].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new f(i(this.children[0]), i(this.children[1]), i(this.children[2]), i(this.children[3]));
    return super.cloneInto(t7), t7;
  }
  get 0() {
    return dt(this, "[0]", C);
  }
  get 1() {
    return dt(this, "[1]", C);
  }
  get 2() {
    return dt(this, "[2]", C);
  }
  get 3() {
    return dt(this, "[3]", C);
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
  divide(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
  add(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, C) : t7);
  }
};
_ = f = __decorate([S], _);
var G = class extends r3 {
  static {
    p2 = this;
  }
  static {
    this.type = "uint";
  }
  constructor(t7) {
    super(), this.type = "uint", this.children = [t7];
  }
  clone() {
    const t7 = new p2(i(this.children[0]));
    return super.cloneInto(t7), t7;
  }
  multiply(t7) {
    return Dt(this, O(t7, p2));
  }
  add(t7) {
    return kt(this, O(t7, p2));
  }
  subtract(t7) {
    return Mt(this, O(t7, p2));
  }
  divide(t7) {
    return Ft(this, O(t7, p2));
  }
};
G = p2 = __decorate([S], G);
var H = class extends r3 {
  static {
    d = this;
  }
  static {
    this.type = "uvec2";
  }
  constructor(t7, e3) {
    super(), this.type = "uvec2", this.children = [t7, e3].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new d(i(this.children[0]), i(this.children[1]));
    return super.cloneInto(t7), t7;
  }
  get 0() {
    return dt(this, "[0]", W);
  }
  get 1() {
    return dt(this, "[1]", W);
  }
  get 2() {
    throw new P();
  }
  get 3() {
    throw new P();
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
  divide(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
  add(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
};
H = d = __decorate([S], H);
var A = class extends r3 {
  static {
    y = this;
  }
  static {
    this.type = "uvec3";
  }
  constructor(t7, e3, n6) {
    super(), this.type = "uvec3", this.children = [t7, e3, n6].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new y(i(this.children[0]), i(this.children[1]), i(this.children[2]));
    return super.cloneInto(t7), t7;
  }
  get 0() {
    return dt(this, "[0]", G);
  }
  get 1() {
    return dt(this, "[1]", G);
  }
  get 2() {
    return dt(this, "[2]", G);
  }
  get 3() {
    throw new P();
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
  divide(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
  add(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
};
A = y = __decorate([S], A);
var V = class extends r3 {
  static {
    w = this;
  }
  static {
    this.type = "uvec4";
  }
  constructor(t7, e3, n6, r5) {
    super(), this.type = "uvec4", this.children = [t7, e3, n6, r5].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new w(i(this.children[0]), i(this.children[1]), i(this.children[2]), i(this.children[3]));
    return super.cloneInto(t7), t7;
  }
  get 0() {
    return dt(this, "[0]", G);
  }
  get 1() {
    return dt(this, "[1]", G);
  }
  get 2() {
    return dt(this, "[2]", G);
  }
  get 3() {
    return dt(this, "[3]", G);
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
  divide(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
  add(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, G) : t7);
  }
};
V = w = __decorate([S], V);
var J = class _J extends r3 {
  static {
    this.type = "bool";
  }
  constructor(t7) {
    super(), this.type = "bool", this.children = [t7];
  }
  and(t7) {
    return Lt(this, t7);
  }
  or(t7) {
    return At(this, t7);
  }
  xor(t7) {
    return Jt(this, t7);
  }
  clone() {
    const t7 = new _J(i(this.children[0]));
    return super.cloneInto(t7), t7;
  }
};
var K = class extends r3 {
  static {
    m = this;
  }
  static {
    this.type = "bvec2";
  }
  constructor(t7, e3) {
    super(), this.type = "bvec2", this.children = [t7, e3].filter((t8) => null != t8);
  }
  all() {
    return te(this);
  }
  any() {
    return ee(this);
  }
  clone() {
    const t7 = new m(i(this.children[0]), i(this.children[1]));
    return super.cloneInto(t7), t7;
  }
};
K = m = __decorate([S], K);
var L2 = class extends r3 {
  static {
    v = this;
  }
  static {
    this.type = "bvec3";
  }
  constructor(t7, e3, n6) {
    super(), this.type = "bvec3", this.children = [t7, e3, n6].filter((t8) => null != t8);
  }
  all() {
    return te(this);
  }
  any() {
    return ee(this);
  }
  clone() {
    const t7 = new v(i(this.children[0]), i(this.children[1]), i(this.children[2]));
    return super.cloneInto(t7), t7;
  }
};
function O(t7, e3) {
  if ("number" == typeof t7) {
    return new e3(t7);
  }
  return t7;
}
L2 = v = __decorate([S], L2);
var Q = class extends r3 {
  static {
    b = this;
  }
  static {
    this.type = "bvec4";
  }
  constructor(t7, e3, n6, r5) {
    super(), this.type = "bvec4", this.children = [t7, e3, n6, r5].filter((t8) => null != t8);
  }
  all() {
    return te(this);
  }
  any() {
    return ee(this);
  }
  clone() {
    const t7 = new b(i(this.children[0]), i(this.children[1]), i(this.children[2]), i(this.children[3]));
    return super.cloneInto(t7), t7;
  }
};
Q = b = __decorate([S], Q);
var W = class _W extends r3 {
  static {
    this.type = "int";
  }
  constructor(t7) {
    super(), this.type = "int", this.children = [t7];
  }
  multiply(t7) {
    return Dt(this, O(t7, _W));
  }
  add(t7) {
    return kt(this, O(t7, _W));
  }
  subtract(t7) {
    return Mt(this, O(t7, _W));
  }
  divide(t7) {
    return Ft(this, O(t7, _W));
  }
  clone() {
    const t7 = new _W(i(this.children[0]));
    return super.cloneInto(t7), t7;
  }
};
var Z = class extends r3 {
  static {
    g = this;
  }
  static {
    this.type = "ivec2";
  }
  constructor(t7, e3) {
    super(), this.type = "ivec2", this.children = [t7, e3].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new g(i(this.children[0]), i(this.children[1]));
    return super.cloneInto(t7), t7;
  }
  get 0() {
    return dt(this, "[0]", W);
  }
  get 1() {
    return dt(this, "[1]", W);
  }
  get 2() {
    throw new P();
  }
  get 3() {
    throw new P();
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
  divide(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
  add(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
};
Z = g = __decorate([S], Z);
var tt = class extends r3 {
  static {
    x = this;
  }
  static {
    this.type = "ivec3";
  }
  constructor(t7, e3, n6) {
    super(), this.type = "ivec3", this.children = [t7, e3, n6].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new x(i(this.children[0]), i(this.children[1]), i(this.children[2]));
    return super.cloneInto(t7), t7;
  }
  get 0() {
    return dt(this, "[0]", W);
  }
  get 1() {
    return dt(this, "[1]", W);
  }
  get 2() {
    return dt(this, "[2]", W);
  }
  get 3() {
    throw new P();
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
  divide(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
  add(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
};
tt = x = __decorate([S], tt);
var et = class extends r3 {
  static {
    I = this;
  }
  static {
    this.type = "ivec4";
  }
  constructor(t7, e3, n6, r5) {
    super(), this.type = "ivec4", this.children = [t7, e3, n6, r5].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new I(i(this.children[0]), i(this.children[1]), i(this.children[2]), i(this.children[3]));
    return super.cloneInto(t7), t7;
  }
  get 0() {
    return dt(this, "[0]", W);
  }
  get 1() {
    return dt(this, "[1]", W);
  }
  get 2() {
    return dt(this, "[2]", W);
  }
  get 3() {
    return dt(this, "[3]", W);
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
  divide(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
  add(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, W) : t7);
  }
};
et = I = __decorate([S], et);
var nt = class _nt extends r3 {
  static {
    this.type = "mat2";
  }
  constructor(t7, e3, n6, r5) {
    super(), this.type = "mat2", this.children = [t7, e3, n6, r5];
  }
  clone() {
    const t7 = new _nt(i(this.children[0]), i(this.children[1]), i(this.children[2]), i(this.children[3]));
    return super.cloneInto(t7), t7;
  }
  get(t7, e3) {
    return yt(this, new W(t7), new W(e3), C);
  }
  multiply(t7) {
    return Dt(this, t7);
  }
};
var rt = class _rt extends r3 {
  static {
    this.type = "mat3";
  }
  static identity() {
    return new _rt(1, 0, 0, 0, 1, 0, 0, 0, 1);
  }
  static fromRotation(t7) {
    const e3 = un(t7), n6 = oe(t7);
    return new _rt(n6, e3, 0, gt(e3), n6, 0, 0, 0, 1);
  }
  constructor(t7, e3, n6, r5, i4, c5, u3, s8, o4) {
    super(), this.type = "mat3", this.children = [t7, e3, n6, r5, i4, c5, u3, s8, o4];
  }
  add(t7) {
    return kt(this, t7);
  }
  multiply(t7) {
    return Dt(this, t7);
  }
  get(t7, e3) {
    return yt(this, new W(t7), new W(e3), C);
  }
  clone() {
    const t7 = new _rt(i(this.children[0]), i(this.children[1]), i(this.children[2]), i(this.children[3]), i(this.children[4]), i(this.children[5]), i(this.children[6]), i(this.children[7]), i(this.children[8]));
    return super.cloneInto(t7), t7;
  }
};
var it = class _it extends r3 {
  static {
    this.type = "mat4";
  }
  static identity() {
    return new _it(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  constructor(t7, e3, n6, r5, i4, c5, u3, s8, o4, h4, l4, a5, f5, p4, d4, y3) {
    super(), this.type = "mat4", this.children = [t7, e3, n6, r5, i4, c5, u3, s8, o4, h4, l4, a5, f5, p4, d4, y3];
  }
  static fromColumns(t7, e3, n6, r5) {
    return new _it(t7.x, t7.y, t7.z, t7.w, e3.x, e3.y, e3.z, e3.w, n6.x, n6.y, n6.z, n6.w, r5.x, r5.y, r5.z, r5.w);
  }
  multiply(t7) {
    return Dt(this, t7);
  }
  get(t7, e3) {
    return yt(this, new W(t7), new W(e3), C);
  }
  clone() {
    const t7 = new _it(i(this.children[0]), i(this.children[1]), i(this.children[2]), i(this.children[3]), i(this.children[4]), i(this.children[5]), i(this.children[6]), i(this.children[7]), i(this.children[8]), i(this.children[9]), i(this.children[10]), i(this.children[11]), i(this.children[12]), i(this.children[13]), i(this.children[14]), i(this.children[15]));
    return super.cloneInto(t7), t7;
  }
};
var ct = { float: C, vec2: X, vec3: Y, vec4: _, int: W, ivec2: Z, ivec3: tt, ivec4: et, uint: G, uvec2: H, uvec3: A, uvec4: V, bool: J, bvec2: K, bvec3: L2, bvec4: Q };
var ut = (...t7) => new W(...t7);
var st = (...t7) => new C(...t7);
var ot = (...t7) => new X(...t7);
var ht = (...t7) => new Y(...t7);
var lt = (...t7) => new _(...t7);
var ft = (...t7) => new rt(...t7);
function dt(t7, e3, n6) {
  const r5 = new n6(new c(e3, t7, n6));
  return r5.isImplicit = true, r5;
}
function yt(t7, e3, n6, r5) {
  const i4 = new r5(new o(e3, n6, t7, r5));
  return i4.isImplicit = true, i4;
}
function wt(t7, e3, n6, r5 = null) {
  if (r5) {
    const i5 = new r5(), u3 = new r5(new a(t7, [e3, n6], true, false, i5));
    return u3.isImplicit = true, u3;
  }
  if ("float" === e3.type || "int" === e3.type) {
    const r6 = new n6.constructor(new a(t7, [e3, n6], true, false, n6.constructor));
    return r6.isImplicit = true, r6;
  }
  if (("mat2" === e3.type || "mat3" === e3.type || "mat4" === e3.type) && "float" !== n6.type) {
    const r6 = new n6.constructor(new a(t7, [e3, n6], true, false, n6.constructor));
    return r6.isImplicit = true, r6;
  }
  const i4 = new e3.constructor(new a(t7, [e3, n6], true, false, e3.constructor));
  return i4.isImplicit = true, i4;
}
function mt(t7, e3, n6 = e3.constructor) {
  const r5 = new n6(new a(t7, [e3], false, false, n6));
  return r5.isImplicit = true, r5;
}
function vt(t7, e3, n6, r5 = e3.constructor) {
  const i4 = new r5(new a(t7, [e3, n6], false, false, r5));
  return i4.isImplicit = true, i4;
}
function bt(t7, e3, n6, r5, i4 = e3.constructor) {
  const u3 = new i4(new a(t7, [e3, n6, r5], false, false, i4));
  return u3.isImplicit = true, u3;
}
function gt(t7) {
  return Dt(t7, st(-1));
}
function xt(t7, e3, n6, r5) {
  return new e3(new p(t7, e3, n6, r5));
}
function Et(t7, e3, n6 = 0, r5 = t7.size) {
  const i4 = new W(n6).setMutable().setDebugName("FindIndexIterator"), c5 = e3(t7.get(i4)).setDebugName("FindIndexPredicate"), u3 = xt({ iter: i4 }, W, c5, ({ out: t8, iter: e4, subgraph: n7 }) => `
${t8} = -1;

for (; ${e4} < ${r5}; ${e4}++) {

${n7.body}

  if (${n7.varName}) {
    ${t8} = ${e4};
    break;
  }

}
`).setDebugName("FindIndexBlock");
  return u3;
}
function $t(t7, e3, n6 = 0, r5 = t7.size) {
  const i4 = xt({ array: t7 }, W, null, ({ out: t8, array: i5 }) => `
${t8} = -1;
for (int i = ${n6}; i < ${r5}; i++) {
  bool condition;
  ${e3({ array: i5, i: "i", out: "condition" })}
  if (condition) {
    ${t8} = i;
    break;
  }
}
`).setDebugName("GlslFindIndexBlock");
  return i4;
}
function zt(t7, e3, n6) {
  const i4 = "function" == typeof e3 ? e3() : e3, c5 = "function" == typeof n6 ? n6() : n6, u3 = new i4.constructor(new u(t7, i4, c5));
  return u3.isImplicit = true, u3;
}
function Tt(...t7) {
  const e3 = t7.map(([t8, e4]) => "function" == typeof e4 ? [t8, e4()] : [t8, e4]), n6 = e3[0][1].constructor, r5 = e3.findIndex((t8) => true === t8[0]);
  if (-1 === r5) throw new Error("A cond must have a fallthrough case with `true`/; ");
  const i4 = e3.slice(0, r5), c5 = e3[r5][1], u3 = new n6(i4.reduceRight((t8, e4) => zt(e4[0], e4[1], t8), c5));
  return u3.isImplicit = true, u3;
}
function Dt(t7, e3) {
  return wt("*", t7, e3);
}
function Ft(t7, e3) {
  return wt("/", t7, e3);
}
function kt(t7, e3) {
  return wt("+", t7, e3);
}
function Mt(t7, e3) {
  return wt("-", t7, e3);
}
function St(t7, e3) {
  return wt("%", t7, e3);
}
function Rt(t7, e3) {
  return wt("<<", t7, e3);
}
function jt(t7, e3) {
  return wt(">>", t7, e3);
}
function Pt(t7, e3) {
  return wt("&", t7, e3);
}
function Bt(t7, e3) {
  return wt("|", t7, e3);
}
function qt(t7, e3) {
  return wt("^", t7, e3);
}
function Ut(t7) {
  return mt("~", t7);
}
function Ct(t7, e3) {
  return wt("==", t7, e3, J);
}
function Xt(t7, e3) {
  return wt("!=", t7, e3, J);
}
function Yt(t7, e3) {
  return wt("<", t7, e3, J);
}
function _t(t7, e3) {
  return wt("<=", t7, e3, J);
}
function Gt(t7, e3) {
  return wt(">", t7, e3, J);
}
function Ht(t7, e3) {
  return wt(">=", t7, e3, J);
}
function At(...t7) {
  return t7.length <= 1 ? t7[0] : t7.slice(1).reduce((t8, e3) => Vt(t8, e3), t7[0]);
}
function Vt(t7, e3) {
  return wt("||", t7, e3, J);
}
function Jt(...t7) {
  return t7.length <= 1 ? t7[0] : t7.slice(1).reduce((t8, e3) => Kt(t8, e3), t7[0]);
}
function Kt(t7, e3) {
  return wt("^^", t7, e3, J);
}
function Lt(...t7) {
  return t7.length <= 1 ? t7[0] : t7.slice(1).reduce((t8, e3) => Ot(t8, e3), t7[0]);
}
function Ot(t7, e3) {
  return wt("&&", t7, e3, J);
}
function Qt(t7) {
  return mt("abs", t7);
}
function Wt(t7) {
  return mt("acos", t7);
}
function Zt(t7) {
  return mt("acosh", t7);
}
function te(t7) {
  return mt("all", t7, J);
}
function ee(t7) {
  return mt("any", t7, J);
}
function ne(t7) {
  return mt("asin", t7);
}
function re(t7) {
  return mt("asinh", t7);
}
function ie(t7, e3) {
  return null == e3 ? mt("atan", t7) : vt("atan", t7, e3, t7.constructor);
}
function ce(t7) {
  return mt("atanh", t7);
}
function ue(t7) {
  return mt("ceil", t7);
}
function se(t7, e3, n6) {
  return bt("clamp", t7, e3, n6, t7.constructor);
}
function oe(t7) {
  return mt("cos", t7);
}
function he(t7) {
  return mt("cosh", t7);
}
function ye(t7, e3) {
  return vt("distance", t7, e3, C);
}
function we(t7, e3) {
  return vt("dot", t7, e3, C);
}
function ge(t7) {
  return mt("exp", t7);
}
function ze(t7) {
  return mt("floor", t7);
}
function Te(t7) {
  return mt("fract", t7);
}
function je(t7) {
  return mt("length", t7, C);
}
function qe(t7) {
  return mt("log", t7);
}
function Ue(t7) {
  return mt("log2", t7);
}
function Xe(t7, e3) {
  return vt("max", t7, e3);
}
function Ye(t7, e3) {
  return vt("min", t7, e3);
}
function _e(t7, e3, n6) {
  return bt("mix", t7, e3, n6);
}
function Ge(t7, e3) {
  return vt("mod", t7, e3);
}
function Ae(t7) {
  return mt("normalize", t7);
}
function Ve(t7) {
  return "bool" === t7.type ? mt("!", t7) : mt("not", t7);
}
function We(t7, e3) {
  return vt("pow", t7, e3);
}
function nn(t7) {
  return mt("round", t7);
}
function cn(t7) {
  return mt("sign", t7);
}
function un(t7) {
  return mt("sin", t7);
}
function sn(t7) {
  return mt("sinh", t7);
}
function on(t7, e3, n6) {
  return bt("smoothstep", t7, e3, n6);
}
function hn(t7) {
  return mt("sqrt", t7);
}
function ln(t7, e3) {
  return vt("step", t7, e3, e3.constructor);
}
function an(t7) {
  return mt("tan", t7);
}
function fn(t7) {
  return mt("tanh", t7);
}
function pn(t7, e3, n6) {
  return bt("texelFetch", t7, e3, n6, _);
}
function wn(t7, e3) {
  return vt("texture", t7, e3, _);
}
function jn(t7, e3) {
  const n6 = We(new C(2), new C(e3));
  return [new _(Ge(t7.x, n6), ze(t7.x.divide(n6)), Ge(t7.y, n6), ze(t7.y.divide(n6))), new _(Ge(t7.z, n6), ze(t7.z.divide(n6)), Ge(t7.w, n6), ze(t7.w.divide(n6)))];
}
function Pn(t7, e3) {
  const { initialValue: n6, xRange: r5, yRange: i4, callback: c5 } = e3, [u3, s8] = r5, [o4, h4] = i4, l4 = new W(0).setMutable().setDebugName("iterX"), a5 = new W(0).setMutable().setDebugName("iterY"), f5 = n6.setMutable().setDebugName("accumulator"), p4 = c5(f5, t7.get(l4, a5), l4, a5).setDebugName("callback"), d4 = xt({ iterX: l4, iterY: a5, accumulator: f5 }, n6.constructor, p4, ({ out: t8, iterX: e4, iterY: n7, accumulator: r6, subgraph: i5 }) => `
for (${n7} = ${o4}; ${n7} < ${h4}; ${n7}++) {
  for (${e4} = ${u3}; ${e4} < ${s8}; ${e4}++) {

  ${i5.body}

  ${r6} = ${i5.varName};
  }
}
${t8} = ${r6};
`).setDebugName("reduce2DBody");
  return d4;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/GlslGraphWriter.js
var e2 = 5;
function n4(e3) {
  for (const n6 of e3.rootOutputNodes()) e3.shouldPruneOutputNode(n6) || (n6.variableName = r4(e3, n6.node));
}
function t3(e3, n6) {
  let t7 = "";
  return "boolean" != typeof n6 && "number" != typeof n6 && n6.debugInfo.name && (t7 = `${n6.debugInfo.name}_`), `${t7}v${e3.varCount++}`;
}
function r4(e3, n6, t7 = false) {
  if ("number" == typeof n6) return n6.toString();
  if ("boolean" == typeof n6) return n6.toString();
  let r5 = e3.getEmit(n6);
  if (r5) return r5;
  switch (n6.shaderType) {
    case "scope-node":
      r5 = i2(e3, n6);
      break;
    case "primitive-node":
      r5 = s5(e3, n6, t7);
      break;
    case "function-node":
      r5 = p3(e3, n6);
      break;
    case "property-access-node":
      r5 = u2(e3, n6);
      break;
    case "property-access-2d-node":
      r5 = a3(e3, n6);
      break;
    case "text-node":
      r5 = n6.text;
      break;
    case "block-node":
      r5 = d2(e3, n6);
      break;
    case "condition-node":
      r5 = c2(e3, n6);
  }
  return e3.setEmit(n6, r5), r5;
}
function o2(e3, n6, t7) {
  const r5 = n6.split("\n");
  for (const o4 of r5) if (o4.trim().length) {
    {
      let n7 = "";
      null != t7 && (n7 += `/*id:${t7 ?? "000"}*/   `), e3.body += n7.padEnd(14);
    }
    e3.body += " ".repeat(e3.indent) + o4 + "\n";
  }
}
function i2(e3, n6) {
  const t7 = new n6.child.constructor();
  t7.setDebugName(n6.debugInfo.name);
  const i4 = r4(e3, t7, true);
  o2(e3, `{ /*ScopeStart: ${n6.uid} ${n6.debugInfo.name}*/`), e3.indent += 2;
  return o2(e3, `${i4} = ${r4(e3, n6.child)};`), e3.indent -= 2, o2(e3, `} /*ScopeEnd: ${n6.uid} ${n6.debugInfo.name}*/`), i4;
}
function c2(e3, n6) {
  const t7 = r4(e3, new n6.ifTrue.constructor(), true);
  o2(e3, `if (${r4(e3, n6.condition)}) {`), e3.indent += 2;
  const i4 = e3.createSubgraphContext(), c5 = r4(i4, n6.ifTrue);
  if (e3.body += i4.body, c5 && o2(e3, `${t7} = ${c5};`), e3.indent -= 2, o2(e3, "}"), n6.ifFalse) {
    o2(e3, "else {"), e3.indent += 2;
    const i5 = e3.createSubgraphContext(), c6 = r4(i5, n6.ifFalse);
    e3.body += i5.body, c6 && o2(e3, `${t7} = ${c6};`), e3.indent -= 2, o2(e3, "}");
  }
  return t7;
}
function d2(e3, n6) {
  const { captureList: t7, generator: i4, returnType: c5 } = n6, d4 = {};
  for (const o4 in t7) {
    if (!t7[o4]) continue;
    const n7 = r4(e3, t7[o4]);
    d4[o4] = n7;
  }
  const u3 = r4(e3, new c5(), true);
  if (d4.out = u3, n6.subgraph) {
    const t8 = e3.createSubgraphContext(), o4 = r4(t8, n6.subgraph.child), i5 = t8.body;
    d4.subgraph = { varName: o4, body: i5 };
  }
  const a5 = i4(d4);
  return o2(e3, "{\n"), e3.indent += 2, o2(e3, a5), e3.indent -= 2, o2(e3, "}\n"), u3;
}
function u2(e3, n6) {
  const t7 = r4(e3, n6.target);
  if ("string" == typeof n6.property && n6.property.includes("[")) return `${t7}${n6.property}`;
  if ("string" != typeof n6.property) {
    return `${t7}[${r4(e3, n6.property)}]`;
  }
  return `${t7}.${n6.property}`;
}
function a3(e3, n6) {
  return `${r4(e3, n6.target)}[${r4(e3, n6.x)}][${r4(e3, n6.y)}]`;
}
function p3(n6, i4) {
  const c5 = i4.returnType.type;
  if (i4.isInfix) {
    const [d5, u4] = i4.children.map((e3) => r4(n6, e3)), a5 = t3(n6, i4);
    return o2(n6, `${c5.padEnd(e2)} ${a5} = ${d5} ${i4.token} ${u4};`, i4.uid), a5;
  }
  const d4 = i4.children.map((e3) => r4(n6, e3)).join(", "), u3 = t3(n6, i4);
  return o2(n6, `${c5.padEnd(e2)} ${u3} = ${i4.token}(${d4});`, i4.uid), u3;
}
function s5(n6, i4, c5 = false) {
  const d4 = n6.getInput(i4);
  if (d4) return d4.isUsed = true, d4.variableName;
  const u3 = 1 === i4.children.length && i4.children[0]?.type === i4.type;
  if (!i4.isMutable && (i4.isImplicit || u3)) return r4(n6, i4.children[0]);
  const a5 = t3(n6, i4);
  if (c5) return o2(n6, `${i4.type.padEnd(e2)} ${a5};`, i4.uid), a5;
  const p4 = !i4.debugInfo.name && !i4.isMutable;
  if (p4) {
    if ("float" === i4.type && "number" == typeof i4.children[0]) return Number.isInteger(i4.children[0]) ? i4.children[0].toFixed(1) : i4.children[0].toString();
    if ("int" === i4.type && "number" == typeof i4.children[0] && Number.isInteger(i4.children[0])) return i4.children[0].toString();
    if ("bool" === i4.type && "boolean" == typeof i4.children[0]) return i4.children[0].toString();
  }
  const s8 = i4.children.map((e3) => r4(n6, e3)).join(", ");
  return "array" === i4.type ? (o2(n6, `${i4.type.padEnd(e2)} ${a5} = [${s8}];`, i4.uid), a5) : p4 ? `${i4.type}(${s8})` : (o2(n6, `${i4.type.padEnd(e2)} ${a5} = ${i4.type}(${s8});`, i4.uid), a5);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/ShaderGraphContext.js
var t4 = class _t2 {
  constructor(e3, t7, a5, n6 = []) {
    this.variableName = e3, this.variableInputType = t7, this.node = a5, this.qualifiers = n6, this.type = "shader-input", this.isUsed = false;
  }
  clone() {
    return new _t2(this.variableName, this.variableInputType, i(this.node), [...this.qualifiers]);
  }
};
var a4 = class _a {
  constructor(e3, t7, a5, n6 = []) {
    this.outVariableName = e3, this.outVariableType = t7, this.node = a5, this.qualifiers = n6, this.type = "shader-output";
  }
  clone() {
    const t7 = new _a(this.outVariableName, this.outVariableType, i(this.node), [...this.qualifiers]);
    return t7.variableName = this.variableName, t7;
  }
};
var n5 = class _n {
  static createVertex(e3, d4, i4, s8, r5, u3) {
    const p4 = [];
    for (const a5 in e3) {
      const n6 = e3[a5], o4 = i4.get(a5);
      o4 ? p4.push(new t4(o4, "builtin", n6)) : p4.push(new t4("a_" + a5, "in", n6));
    }
    for (const a5 of s8) {
      const e4 = a5.uniformHydrated;
      p4.push(new t4(a5.uniformName, "uniform", e4));
    }
    const c5 = [];
    for (const t7 in d4) {
      const e4 = d4[t7];
      if ("glPosition" === t7) c5.push(new a4("gl_Position", "builtin", e4));
      else if ("glPointSize" === t7) c5.push(new a4("gl_PointSize", "builtin", e4));
      else {
        const n6 = o3(e4), d5 = [];
        n6 && d5.push(n6), c5.push(new a4("v_" + t7, "out", e4, d5));
      }
    }
    return new _n(p4, c5, r5, u3);
  }
  static createFragment(e3, o4, d4, i4, s8, r5) {
    const u3 = [], p4 = Array.from(s8.rootOutputNodes());
    for (const a5 in e3) {
      const n6 = e3[a5], o5 = d4.get(a5);
      if (o5) {
        u3.push(new t4(o5, "builtin", n6));
        continue;
      }
      const i5 = p4.find((e4) => e4.node === n6);
      i5 && u3.push(new t4(i5.outVariableName, "in", n6));
    }
    for (const a5 of i4) {
      const e4 = a5.uniformHydrated;
      u3.push(new t4(a5.uniformName, "uniform", e4));
    }
    const c5 = [];
    for (const t7 in o4) {
      const e4 = o4[t7], n6 = d4.get(t7);
      switch (t7) {
        case "discard":
          c5.push(new a4(null, "discard", e4));
          break;
        case "fragData0":
          c5.push(new a4("fragData0", "fragData0", e4));
          break;
        case "fragData1":
          c5.push(new a4("fragData1", "fragData1", e4));
          break;
        case "fragData2":
          c5.push(new a4("fragData2", "fragData2", e4));
          break;
        case "fragData3":
          c5.push(new a4("fragData3", "fragData3", e4));
          break;
        default:
          n6 ? c5.push(new a4(n6, "builtin", e4)) : c5.push(new a4(t7, "out", e4));
      }
    }
    return new _n(u3, c5, r5);
  }
  constructor(e3, t7, a5, n6) {
    this.type = "shader-graph-context", this.indent = 0, this.body = "", this.varCount = 0, this._inputShaderTypesByNodeUid = /* @__PURE__ */ new Map(), this._nodeEmitMap = /* @__PURE__ */ new Map();
    for (const o4 of e3) this._inputShaderTypesByNodeUid.set(o4.node.uid, o4);
    this._outputShaderTypes = t7, this._transformFeedbackBindings = a5, this._transformFeedbackNames = new Set(a5.map((e4) => "v_" + e4.propertyKey)), this._usedInFragmentShader = n6;
  }
  shouldPruneOutputNode(e3) {
    return !!this._usedInFragmentShader && ("builtin" !== e3.outVariableType && (!this._transformFeedbackNames.has(e3.outVariableName) && !this._usedInFragmentShader.has(e3.node.uid)));
  }
  setEmit(e3, t7) {
    this._nodeEmitMap.set(e3.uid, t7);
  }
  getEmit(e3) {
    return this._nodeEmitMap.get(e3.uid);
  }
  inputs() {
    return this._inputShaderTypesByNodeUid.values();
  }
  getInput(e3) {
    return this._inputShaderTypesByNodeUid.get(e3.uid);
  }
  *rootOutputNodes() {
    for (const e3 of this._outputShaderTypes) yield e3;
  }
  *nodes() {
    const e3 = [];
    for (const t7 of this._outputShaderTypes.values()) e3.push(t7.node);
    for (; e3.length; ) {
      const t7 = e3.pop();
      "number" != typeof t7 && "boolean" != typeof t7 && e3.push(...t7.children.filter(Boolean)), yield t7;
    }
  }
  *nodesOfTypeOrFunction() {
    for (const e3 of this.nodes()) "number" != typeof e3 && "boolean" != typeof e3 && (yield e3);
  }
  createSubgraphContext() {
    const e3 = this.clone();
    return e3.body = "", e3.indent = this.indent + 2, e3._nodeEmitMap = new Map(this._nodeEmitMap), e3;
  }
  clone() {
    const e3 = new _n([], this._outputShaderTypes, this._transformFeedbackBindings, this._usedInFragmentShader);
    return e3._inputShaderTypesByNodeUid = this._inputShaderTypesByNodeUid, e3.indent = this.indent, e3.body = this.body, e3.varCount = this.varCount, e3._nodeEmitMap = this._nodeEmitMap, e3;
  }
  insertVertexShader(e3) {
    e3.vertex.code.add(""), this._insertInputs(e3, "vertex"), e3.vertex.code.add(""), e3.vertex.code.add("// OUTPUTS: "), e3.vertex.code.add("// --------------------------------------------------------- ");
    for (const t7 of this.rootOutputNodes()) {
      const a5 = "builtin" === t7.outVariableType;
      if (!this.shouldPruneOutputNode(t7)) if (a5) e3.vertex.code.add(`// ${t7.outVariableType.padEnd(7)} ${t7.node.type.padEnd(9)} ${t7.outVariableName};`);
      else {
        const a6 = [...t7.qualifiers, t7.outVariableType].join(" ");
        e3.vertex.code.add(`${a6.padEnd(10)} ${t7.node.type.padEnd(9)} ${t7.outVariableName};`);
      }
    }
    e3.vertex.code.add(""), e3.vertex.code.add("void main() {"), e3.vertex.code.add("  " + this.body.split("\n").join("\n  "));
    for (const t7 of this.rootOutputNodes()) this.shouldPruneOutputNode(t7) || e3.vertex.code.add(`  ${t7.outVariableName} = ${t7.variableName};`);
    e3.vertex.code.add("}");
  }
  insertFragmentShader(e3) {
    this._insertInputs(e3, "fragment"), e3.fragment.code.add(""), e3.fragment.code.add("// OUTPUTS: "), e3.fragment.code.add("// --------------------------------------------------------- ");
    let t7 = 0;
    for (const d4 of this.rootOutputNodes()) "builtin" === d4.outVariableType ? e3.fragment.code.add(`// ${d4.outVariableType.padEnd(7)} ${d4.node.type.padEnd(9)} ${d4.outVariableName};`) : "discard" === d4.outVariableType || e3.outputs.add(d4.outVariableName, d4.node.type, t7++);
    e3.fragment.code.add(""), e3.fragment.code.add("void main() {"), e3.fragment.code.add("  " + this.body.split("\n").join("\n  "));
    const a5 = Array.from(this.rootOutputNodes()), n6 = a5.find((e4) => "discard" === e4.outVariableType), o4 = a5.filter((e4) => "discard" !== e4.outVariableType);
    n6 && (e3.fragment.code.add(`  if (${n6.variableName}) {`), e3.fragment.code.add("    discard;"), e3.fragment.code.add("  }"), e3.fragment.code.add("  "));
    for (const d4 of o4) e3.fragment.code.add(`  ${d4.outVariableName} = ${d4.variableName};`);
    e3.fragment.code.add("}");
  }
  _insertInputs(e3, t7) {
    e3[t7].code.add("// INPUTS: "), e3[t7].code.add("// --------------------------------------------------------- ");
    for (const a5 of this.inputs()) if (a5.isUsed && "builtin" !== a5.variableInputType) if ("array" === a5.node.type) e3[t7].code.add(`${a5.variableInputType.padEnd(10)} ${a5.node.elementType.type.padEnd(9)} ${a5.variableName}[${a5.node.size}];`);
    else if ("array-2d" === a5.node.type) e3[t7].code.add(`${a5.variableInputType.padEnd(10)} ${a5.node.elementType.type.padEnd(9)} ${a5.variableName}[${a5.node.size}]; // Emulated 2D Array. Not supported by ES3.0`);
    else {
      const n6 = [...a5.qualifiers, a5.variableInputType].join(" ");
      e3[t7].code.add(` ${n6.padEnd(10)} ${a5.node.type.padEnd(9)} ${a5.variableName};`);
    }
  }
};
function o3(e3) {
  switch (e3.type) {
    case "float":
    case "vec2":
    case "vec3":
    case "vec4":
      return null;
    case "int":
    case "ivec2":
    case "ivec3":
    case "ivec4":
    case "uint":
    case "uvec2":
    case "uvec3":
    case "uvec4":
    case "bool":
    case "bvec2":
    case "bvec3":
    case "bvec4":
      return "flat";
    case "mat2":
    case "mat3":
    case "mat4":
    case "array":
    case "sampler2D":
    case "array-2d":
      throw new Error(`InternalError: ${e3.type} is not a valid output type`);
  }
}

// node_modules/@arcgis/core/views/2d/engine/webgl/textureUtils.js
function t5(t7, r5, a5) {
  const i4 = new h(r5.width, r5.height);
  return i4.dataType = r5.dataType, r5.depth && (i4.depth = r5.depth), r5.flipped && (i4.flipped = r5.flipped), r5.hasMipmap && (i4.hasMipmap = r5.hasMipmap), i4.internalFormat = r5.internalFormat, r5.isImmutable && (i4.isImmutable = r5.isImmutable), r5.isOpaque && (i4.isOpaque = r5.isOpaque), r5.maxAnisotropy && (i4.maxAnisotropy = r5.maxAnisotropy), i4.pixelFormat = r5.pixelFormat, r5.preMultiplyAlpha && (i4.preMultiplyAlpha = r5.preMultiplyAlpha), r5.samplingMode && (i4.samplingMode = r5.samplingMode), r5.target && (i4.target = r5.target), r5.unpackAlignment && (i4.unpackAlignment = r5.unpackAlignment), r5.wrapMode && (i4.wrapMode = r5.wrapMode), new E(t7, i4, a5);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/typed/TypedShaderProgram.js
var s6 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.typed.TypedShaderProgram");
function f2(r5, t7, o4) {
  const a5 = t7.length;
  if (a5 !== o4) {
    const i4 = new r("Invalid Uniform", `Invalid length, expected ${o4} but got ${a5}`, { uniformName: r5, values: t7 });
    s6().errorOnce(i4);
  }
}
var m2 = class {
  constructor(e3, r5, t7, o4, a5, i4) {
    this.debugName = e3, this.vertexShader = r5, this.fragmentShader = t7, this._locations = o4, this._uniformBindings = a5, this._transformFeedbackBindings = i4, this._vao = null, this._temporaryTextures = [];
  }
  destroy() {
    this._program = r2(this._program), this.cleanupTemporaryTextures();
  }
  [Symbol.dispose]() {
    this.destroy();
  }
  setUniforms(e3) {
    this._uniforms = e3;
  }
  validate(e3) {
    if (!this._validation) {
      const r5 = this._validateWebGL2(e3);
      "error" === r5.type && (r5.error = `Validation failed for ShaderModule '${this.debugName}'
${r5.error}`), this._validation = r5;
    }
    return this._validation;
  }
  cleanupTemporaryTextures() {
    for (const e3 of this._temporaryTextures) e3.dispose();
    this._temporaryTextures = [];
  }
  bind(e3) {
    const r5 = this._uniforms;
    if (!this._program) {
      const r6 = [];
      for (const e4 of this._transformFeedbackBindings ?? []) {
        const { index: t8, propertyKey: o4 } = e4;
        r6[t8] = `v_${o4}`;
      }
      this._program = new s2(e3, this.vertexShader, this.fragmentShader, this._locations, /* @__PURE__ */ new Map(), r6);
    }
    const t7 = this._program;
    e3.useProgram(t7);
    for (const a5 of this._uniformBindings) {
      const { shaderModulePath: n6, uniformName: s8, uniformType: m4, uniformArrayLength: l4 } = a5, c5 = t(n6, r5);
      if (null == c5) {
        if ("sampler2D" === m4) continue;
        throw new Error(`Failed to find uniform value for ${n6}`);
      }
      switch ("array" === m4 || "array-2d" === m4 ? a5.uniformArrayElementType : m4) {
        case "sampler2D": {
          const { unit: r6, texture: o4 } = c5;
          if (t7.setUniform1i(s8, r6), "type" in o4) e3.bindTexture(o4, r6);
          else {
            const t8 = t5(e3, o4.descriptor, o4.data);
            e3.bindTexture(t8, r6);
          }
          break;
        }
        case "int":
          if (!l4) {
            t7.setUniform1i(s8, c5);
            break;
          }
          f2(a5.uniformName, c5, l4), t7.setUniform1iv(s8, c5);
          break;
        case "float":
          if (!l4) {
            t7.setUniform1f(s8, c5);
            break;
          }
          f2(a5.uniformName, c5, l4), t7.setUniform1fv(s8, c5);
          break;
        case "vec2":
          if (!l4) {
            t7.setUniform2f(s8, c5[0], c5[1]);
            break;
          }
          f2(a5.uniformName, c5, l4), t7.setUniform2fv(s8, c5.flat());
          break;
        case "vec3":
          if (!l4) {
            t7.setUniform3f(s8, c5[0], c5[1], c5[2]);
            break;
          }
          f2(a5.uniformName, c5, l4), t7.setUniform3fv(s8, c5.flat());
          break;
        case "vec4":
          if (!l4) {
            t7.setUniform4f(s8, c5[0], c5[1], c5[2], c5[3]);
            break;
          }
          f2(a5.uniformName, c5, l4), t7.setUniform4fv(s8, c5.flat());
          break;
        case "mat3":
          t7.setUniformMatrix3fv(s8, c5);
          break;
        case "mat4":
          t7.setUniformMatrix4fv(s8, c5);
          break;
        default:
          throw new Error(`Unable to set uniform for type ${m4}`);
      }
    }
  }
  _validateWebGL2(e3) {
    const r5 = e3.gl, t7 = c3(r5, 35633, this.vertexShader);
    if ("error" === t7.type) return t7;
    const o4 = c3(r5, 35632, this.fragmentShader);
    if ("error" === o4.type) return o4;
    const a5 = t7.value, i4 = o4.value, n6 = r5.createProgram();
    if (r5.attachShader(n6, a5), r5.attachShader(n6, i4), r5.linkProgram(n6), !r5.getProgramParameter(n6, r5.LINK_STATUS)) {
      return { type: "error", error: `Failed to link shader:
validated: ${r5.getProgramParameter(n6, r5.VALIDATE_STATUS)}, gl error ${r5.getError()}, vertex: ${r5.getShaderParameter(a5, r5.COMPILE_STATUS)}, fragment: ${r5.getShaderParameter(i4, r5.COMPILE_STATUS)}, info log: ${r5.getProgramInfoLog(n6)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}` };
    }
    return r5.deleteProgram(n6), { type: "ok", value: null };
  }
};
function l2(e3) {
  const r5 = e3.match(/\d+:(\d+):/);
  if (void 0 !== r5?.index && r5?.length > 1) {
    const e4 = r5.index + r5[0].length;
    return { lineNumber: parseInt(r5[1], 10), offset: e4 };
  }
  return null;
}
function c3(e3, r5, t7) {
  const o4 = e3.createShader(r5), a5 = L(t7, r5);
  if (e3.shaderSource(o4, a5), e3.compileShader(o4), !e3.getShaderParameter(o4, e3.COMPILE_STATUS)) {
    const a6 = e3.getShaderInfoLog(o4) ?? "";
    let i4 = "";
    const n6 = a6.split("\n"), s8 = /* @__PURE__ */ new Map(), f5 = [];
    for (const e4 of n6) {
      const r6 = l2(a6);
      if (!r6) {
        f5.push(e4);
        continue;
      }
      let t8 = s8.get(r6.lineNumber);
      t8 || (t8 = [], s8.set(r6.lineNumber, t8)), t8.push({ text: e4, offset: r6.offset });
    }
    const m4 = Array.from(s8.entries()).sort();
    for (const [e4, r6] of m4) {
      const o5 = t7.split("\n"), a7 = Math.max(e4 - 2, 0), n7 = Math.min(e4 + 2, o5.length);
      for (let t8 = a7; t8 !== n7; t8++) {
        if (i4 += `${(t8 + 1).toString().padEnd(4)}${o5[t8]}
`, t8 === e4 - 1) {
          const e5 = o5[t8].length;
          i4 += "    " + new Array(e5).join("^") + "\n";
          for (const { text: t9, offset: o6 } of r6) i4 += "      " + t9.slice(o6).trim() + "\n";
        }
      }
    }
    for (const e4 of f5) i4 += e4 + "\n";
    const c5 = `Failed to compile ${35633 === r5 ? "vertex" : "fragment"} shader:

${i4}`;
    return e3.deleteShader(o4), { type: "error", error: c5 };
  }
  return { type: "ok", value: o4 };
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/GraphShaderModule.js
function y2(t7) {
  return new t7();
}
function d3(t7, e3, r5) {
  const o4 = t7.constructor[e3] ?? [];
  t7.constructor.hasOwnProperty(e3) || Object.defineProperty(t7.constructor, e3, { value: o4.slice() }), t7.constructor[e3].push(r5);
}
function f3(t7, e3) {
  return (r5, o4) => {
    d3(r5, "locations", { typeCtor: e3, propertyKey: o4, parameterIndex: null, index: t7 });
  };
}
var h3 = (t7) => (e3, r5) => {
  d3(e3, "builtins", { builtin: t7, propertyKey: r5 });
};
var l3 = (t7) => (e3, r5, o4) => {
  d3(e3, "inputs", { inputCtor: t7, propertyKey: r5, parameterIndex: o4 });
};
var m3 = (t7) => (e3, r5) => {
  d3(e3, "uniforms", { typeCtor: t7, propertyKey: r5 });
};
var g2 = (t7) => (e3, r5) => {
  d3(e3, "options", { typeCtor: t7, propertyKey: r5 });
};
var _2 = (t7, e3) => {
  d3(t7, "defines", { propertyKey: e3 });
};
var b2 = (t7, e3) => (r5, o4) => {
  r5.constructor.builtins.push({ builtin: t7, propertyKey: o4, typeCtor: e3 });
};
var C2 = class {
  static {
    this.builtins = [];
  }
};
__decorate([b2("gl_VertexID", W)], C2.prototype, "glVertexID", void 0);
var x2 = class {
};
var I2 = class {
  static {
    this.builtins = [];
  }
};
__decorate([b2("gl_FragCoord", _)], I2.prototype, "glFragCoord", void 0), __decorate([b2("gl_PointCoord", X)], I2.prototype, "glPointCoord", void 0);
var v2 = class {
};
__decorate([h3("gl_FragDepth")], v2.prototype, "glFragDepth", void 0);
var w2 = class {
  constructor() {
    this.type = "uniform-group";
  }
  get _uniforms() {
    return this.constructor.uniforms ?? [];
  }
};
var P2 = class {
  constructor() {
    this.logShader = false, this.computeAttributes = {};
  }
  get vertexInput() {
    const t7 = this._shaderModuleClass.inputs.findLast((t8) => "vertex" === t8.propertyKey && 0 === t8.parameterIndex);
    if (!t7) throw new Error("Unable to find vertex input parameter");
    return t7;
  }
  get computeInput() {
    return this._shaderModuleClass.inputs.findLast((t7) => "vertex" === t7.propertyKey && 1 === t7.parameterIndex);
  }
  get fragmentInput() {
    const t7 = this._shaderModuleClass.inputs.findLast((t8) => "fragment" === t8.propertyKey);
    if (!t7) throw new Error("Unable to find fragment input parameter");
    return t7;
  }
  get transformFeedbackBindings() {
    return this.fragmentInput.inputCtor.transformFeedbackBindings ?? [];
  }
  get locations() {
    return [...this.vertexInput.inputCtor.locations, ...this.computeInput?.inputCtor.locations ?? []];
  }
  get locationsMap() {
    const t7 = /* @__PURE__ */ new Map(), r5 = /* @__PURE__ */ new Set();
    for (const o4 of this.locations) r5.has(o4.index) ? n.getLogger("esri.views.2d.engine.webgl.shaderGraph.GraphShaderModule").warnOnce("mapview-rendering", `Unable to assigned attribute ${o4.propertyKey} to ${o4.index}. Index already in use`, { locationsMap: t7 }) : (t7.set(o4.propertyKey, o4.index), r5.add(o4.index));
    return t7;
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const t7 = this.locationsMap, e3 = Array.from(t7.entries()).map(([t8, e4]) => `${t8}.${e4}`).join("."), r5 = this.computeAttributes;
      this._locationInfo = { stringHash: e3, locations: t7, computeAttributeMap: r5 };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const t7 = /* @__PURE__ */ new Map();
    for (const e3 of this.locations) t7.set("a_" + e3.propertyKey, e3.index);
    return t7;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const t7 = /* @__PURE__ */ new Set();
      for (const e3 of this._options) t7.add(e3.propertyKey);
      this._optionPropertyKeys = t7;
    }
    return this._optionPropertyKeys;
  }
  get _shaderModuleClass() {
    return this.constructor;
  }
  get _defines() {
    return this._shaderModuleClass.defines ?? [];
  }
  get _options() {
    return this._shaderModuleClass.options ?? [];
  }
  get _uniforms() {
    return this._shaderModuleClass.uniforms ?? [];
  }
  getProgram(t7, e3, r5, o4) {
    try {
      const { vertex: n6, fragment: s8, uniformBindings: i4 } = this._generateShaders(t7, e3, r5, o4);
      return new m2(this.type, n6, s8, this.renamedLocationsMap, i4, this.transformFeedbackBindings);
    } catch (n6) {
      return new m2(this.type, "", "", this.renamedLocationsMap, [], this.transformFeedbackBindings);
    }
  }
  getDebugUniformClassInfo(t7) {
    const e3 = this._options.find((e4) => e4.propertyKey === t7);
    if (e3) return { type: "option", className: e3.typeCtor };
    const r5 = this._uniforms.find((e4) => e4.propertyKey === t7);
    if (!r5) throw new Error(`Unable to find uniform class type for property: ${t7}`);
    return { type: "required", className: r5.typeCtor };
  }
  getShaderKey(t7, e3, r5, o4) {
    const n6 = Object.keys(t7).map((e4) => `${e4}.${t7[e4]}`).join("."), s8 = Object.keys(r5).map((t8) => `${t8}.${r5[t8]}`).join("."), i4 = Object.keys(o4).map((t8) => `${t8}.${o4[t8]}`).join("."), p4 = Object.keys(e3).filter((t8) => this.optionPropertyKeys.has(t8) && e3[t8]).join(".");
    return `${this.type}.${n6}.${s8}.${i4}.${p4}`;
  }
  _generateShaders(t7, e3, r5, o4) {
    const n6 = [];
    this._setDefines(r5), this._setOptionalUniforms(n6, e3), this._setRequiredUniforms(n6);
    const s8 = this._hydrateVertexInput(o4), u3 = this._injectPackPrecisionFactor(s8, t7), c5 = this._hydrateComputeInput(), y3 = c5 && this._injectComputePackPrecisionFactor(c5, t7), d4 = this.vertex(u3, y3), f5 = this._hydrateFragmentInput(d4), h4 = this.fragment(f5), l4 = /* @__PURE__ */ new Set();
    for (const i4 in h4) {
      const t8 = h4[i4];
      e(l4, t8);
    }
    const m4 = this._getVertexInputBuiltins(), g3 = {};
    for (const [i4, p4] of Object.entries(s8)) g3[i4] = p4;
    if (null != c5) for (const [i4, p4] of Object.entries(c5)) g3[i4] = p4;
    const _3 = n5.createVertex(g3, d4, m4, n6, this.transformFeedbackBindings, l4);
    n4(_3);
    const K2 = this._getFragmentInputBuiltins(h4);
    K2.set("glPointCoord", "gl_PointCoord"), K2.set("glFragCoord", "gl_FragCoord");
    const b3 = n5.createFragment(f5, h4, K2, n6, _3, this.transformFeedbackBindings);
    n4(b3);
    const C3 = this._createShaderBuilder(_3, b3), x4 = C3.generate("vertex"), I3 = C3.generate("fragment");
    return this.logShader && (console.log(x4), console.log(I3)), { vertex: x4, fragment: I3, uniformBindings: n6 };
  }
  _setDefines(t7) {
    for (const e3 in t7) this[e3] = t7[e3];
  }
  _setOptionalUniforms(t7, e3) {
    for (const r5 of this._options) {
      e3[r5.propertyKey] ? this[r5.propertyKey] = this._hydrateUniformGroup(t7, r5) : this[r5.propertyKey] = null;
    }
  }
  _setRequiredUniforms(t7) {
    for (const e3 of this._uniforms) this[e3.propertyKey] = this._hydrateUniformGroup(t7, e3);
  }
  _hydrateUniformGroup(t7, e3) {
    const r5 = new (0, e3.typeCtor)();
    for (const o4 of r5._uniforms ?? []) {
      const n6 = y2(o4.typeCtor), s8 = `u_${e3.propertyKey}_${o4.propertyKey}`, i4 = n6.type, p4 = [e3.propertyKey, o4.propertyKey].join(".");
      if ("type" in o4.typeCtor && "array" === o4.typeCtor.type) {
        const e4 = n6;
        t7.push({ shaderModulePath: p4, uniformName: s8, uniformType: i4, uniformArrayLength: e4.size, uniformArrayElementType: e4.elementType.type, uniformHydrated: n6 });
      } else if ("type" in o4.typeCtor && "array-2d" === o4.typeCtor.type) {
        const e4 = n6;
        t7.push({ shaderModulePath: p4, uniformName: s8, uniformType: i4, uniformArrayLength: e4.size, uniformArrayElementType: e4.elementType.type, uniformHydrated: n6 });
      } else t7.push({ shaderModulePath: p4, uniformName: s8, uniformType: i4, uniformHydrated: n6 });
      r5[o4.propertyKey] = n6;
    }
    return r5;
  }
  _hydrateVertexInput(t7) {
    const e3 = this.vertexInput.inputCtor, r5 = e3.locations.reduce((e4, r6) => false === t7[r6.propertyKey] ? e4 : __spreadProps(__spreadValues({}, e4), { [r6.propertyKey]: y2(r6.typeCtor) }), {});
    for (const { propertyKey: o4, typeCtor: n6 } of e3.builtins) {
      const t8 = y2(n6);
      r5[o4] = t8;
    }
    return r5;
  }
  _hydrateComputeInput() {
    if (null == this.computeInput) return null;
    return this.computeInput.inputCtor.locations.reduce((t7, e3) => __spreadProps(__spreadValues({}, t7), { [e3.propertyKey]: y2(e3.typeCtor) }), {});
  }
  _injectPackPrecisionFactor(t7, e3) {
    const o4 = {};
    for (const n6 in t7) {
      const s8 = t7[n6], i4 = e3[n6];
      if (i4) {
        if ("float" !== s8.type && "vec2" !== s8.type && "vec3" !== s8.type && "vec4" !== s8.type) throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${s8.type}`);
        o4[n6] = s8.divide(new C(i4));
      } else o4[n6] = s8;
    }
    return o4;
  }
  _injectComputePackPrecisionFactor(t7, e3) {
    const o4 = {}, n6 = /* @__PURE__ */ new Map();
    for (const r5 in this.computeAttributes) for (const t8 of this.computeAttributes[r5] ?? []) n6.set(t8, r5);
    for (const s8 in t7) {
      const i4 = t7[s8], p4 = n6.get(s8);
      if (!p4) continue;
      const a5 = e3[p4];
      if (a5) {
        if ("float" !== i4.type && "vec2" !== i4.type && "vec3" !== i4.type && "vec4" !== i4.type) throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${i4.type}`);
        o4[s8] = i4.divide(new C(a5));
      } else o4[s8] = i4;
    }
    return o4;
  }
  _hydrateFragmentInput(t7) {
    const e3 = {};
    for (const r5 in t7) e3[r5] = t7[r5];
    for (const { propertyKey: r5, typeCtor: o4 } of I2.builtins) {
      const t8 = y2(o4);
      e3[r5] = t8;
    }
    return e3;
  }
  _getVertexInputBuiltins() {
    const t7 = this.vertexInput.inputCtor, e3 = /* @__PURE__ */ new Map();
    for (const { builtin: r5, propertyKey: o4 } of t7.builtins) e3.set(o4, r5);
    return e3;
  }
  _getFragmentInputBuiltins(t7) {
    const e3 = t7.constructor, r5 = /* @__PURE__ */ new Map();
    for (const o4 of e3.builtins ?? []) r5.set(o4.propertyKey, o4.builtin);
    return r5;
  }
  _createShaderBuilder(t7, e3) {
    const r5 = new s();
    return this._insertDebugInfo(r5), t7.insertVertexShader(r5), e3.insertFragmentShader(r5), r5;
  }
  _insertDebugInfo(t7) {
    t7.vertex.code.add("// DEFINES: "), t7.vertex.code.add("// --------------------------------------------------------- ");
    for (const e3 of this._defines) this[e3.propertyKey] ? t7.vertex.code.add(`//   ${e3.propertyKey}: true`) : t7.vertex.code.add(`//   ${e3.propertyKey}: false`);
    t7.vertex.code.add(""), t7.vertex.code.add("// OPTIONS: "), t7.vertex.code.add("// --------------------------------------------------------- ");
    for (const e3 of this._options) this[e3.propertyKey] ? t7.vertex.code.add(`//   ${e3.propertyKey}: true`) : t7.vertex.code.add(`//   ${e3.propertyKey}: false`);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/ClipShader.js
var x3 = class extends C2 {
};
__decorate([f3(0, X)], x3.prototype, "pos", void 0);
var c4 = class extends w2 {
};
__decorate([m3(rt)], c4.prototype, "displayViewMat3", void 0);
var f4 = class extends P2 {
  constructor() {
    super(...arguments), this.type = "ClipShader";
  }
  vertex(t7) {
    const o4 = this.options.displayViewMat3.multiply(new Y(t7.pos.xy, 1));
    return { glPosition: new _(o4.xy, 0, 1) };
  }
  fragment(t7) {
    const o4 = new v2();
    return o4.fragColor = new _(1, 0, 0, 1), o4;
  }
};
__decorate([m3(c4)], f4.prototype, "options", void 0), __decorate([__param(0, l3(x3))], f4.prototype, "vertex", null), __decorate([__param(0, l3(I2))], f4.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/clip/ClipTechnique.js
var t6 = class extends s3 {
  constructor() {
    super(...arguments), this.type = 8, this.shaders = { clip: new f4() };
  }
  render(e3, s8) {
    const { context: t7, painter: i4, state: r5 } = e3, o4 = s8.getMesh(t7, r5);
    if (!o4) return;
    i4.setPipelineState({ color: false, depth: false, stencil: { write: { mask: 255 }, test: { compare: 519, op: { fail: 7680, zFail: 7680, zPass: 7681 }, mask: 255 } } });
    const a5 = { shader: this.shaders.clip, uniforms: { options: { displayViewMat3: e3.state.displayMat3 } }, defines: void 0, optionalAttributes: void 0, useComputeBuffer: false };
    i4.submitDrawMesh(t7, a5, o4, { stencilRef: 0 });
  }
};
var i3 = new t6();

// node_modules/@arcgis/core/views/2d/engine/webgl/WGLContainer.js
var s7 = class extends n2 {
  renderChildren(e3) {
    const { painter: s8 } = e3;
    s8.setPipelineState(null), null == this._renderPasses && (this._renderPasses = this.prepareRenderPasses(e3.painter));
    for (const n6 of this._clips) i3.render(e3, n6);
    for (const r5 of this._renderPasses) try {
      r5.render(e3);
    } catch (t7) {
    }
  }
  prepareRenderPasses(e3) {
    return [];
  }
};

export {
  s3 as s,
  B,
  q,
  U,
  C,
  X,
  Y,
  _,
  J,
  W,
  Z,
  nt,
  rt,
  it,
  ut,
  st,
  ot,
  ht,
  lt,
  ft,
  gt,
  xt,
  zt,
  Tt,
  Dt,
  St,
  Rt,
  jt,
  Pt,
  Bt,
  qt,
  Ut,
  Ct,
  Xt,
  Yt,
  _t,
  Gt,
  Ht,
  At,
  Jt,
  Lt,
  Qt,
  Wt,
  Zt,
  ne,
  re,
  ie,
  ce,
  ue,
  se,
  oe,
  he,
  ye,
  we,
  ge,
  ze,
  Te,
  je,
  qe,
  Ue,
  Xe,
  Ye,
  _e,
  Ge,
  Ae,
  Ve,
  We,
  nn,
  cn,
  un,
  sn,
  on,
  hn,
  ln,
  an,
  fn,
  pn,
  wn,
  jn,
  Pn,
  m2 as m,
  f3 as f,
  l3 as l,
  m3 as m2,
  g2 as g,
  _2,
  C2,
  x2 as x,
  I2 as I,
  v2 as v,
  w2 as w,
  P2 as P,
  s7 as s2
};
//# sourceMappingURL=chunk-GBNE3UQB.js.map
