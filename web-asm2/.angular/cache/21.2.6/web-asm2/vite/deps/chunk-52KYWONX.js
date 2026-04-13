import {
  e as e3
} from "./chunk-C6P3JIAK.js";
import {
  n as n3
} from "./chunk-ULRT2MRD.js";
import {
  n as n2
} from "./chunk-IXOUFXRS.js";
import {
  e as e2
} from "./chunk-XSQPGBLC.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import {
  e
} from "./chunk-EF6HOWDG.js";
import {
  t
} from "./chunk-YR4EWTGD.js";

// node_modules/@arcgis/core/core/VectorStack.js
var m = class _m {
  constructor(t3) {
    this._create = t3, this._items = new Array(), this._itemsPtr = 0;
  }
  get() {
    return 0 === this._itemsPtr && t(() => this._reset()), this._itemsPtr >= this._items.length && this._items.push(this._create()), this._items[this._itemsPtr++];
  }
  _reset() {
    const t3 = 2 * this._itemsPtr;
    this._items.length > t3 && (this._items.length = t3), this._itemsPtr = 0;
  }
  static createVec2f64() {
    return new _m(n3);
  }
  static createVec3f64() {
    return new _m(n);
  }
  static createVec4f64() {
    return new _m(n2);
  }
  static createMat3f64() {
    return new _m(e);
  }
  static createMat4f64() {
    return new _m(e2);
  }
  static createQuatf64() {
    return new _m(e3);
  }
  get test() {
  }
};

// node_modules/@arcgis/core/geometry/support/vectorStacks.js
var t2 = m.createVec2f64();
var c = m.createVec3f64();
var r = m.createVec4f64();
var a = m.createMat3f64();
var f = m.createMat4f64();
var o = m.createQuatf64();

export {
  t2 as t,
  c,
  r,
  f,
  o
};
//# sourceMappingURL=chunk-52KYWONX.js.map
