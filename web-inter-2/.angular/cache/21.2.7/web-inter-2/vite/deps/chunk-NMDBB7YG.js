import {
  b
} from "./chunk-5OGMOTJP.js";
import {
  l2,
  m2 as m
} from "./chunk-XCGM4D6U.js";
import {
  e2 as e,
  f2 as f,
  j,
  l2 as l,
  w
} from "./chunk-PQFEWUZC.js";
import {
  __addDisposableResource,
  __decorate,
  __disposeResources
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/core/asyncUtils.js
function p(r, t, o) {
  return j(r.map((r2, e2) => t.apply(o, [r2, e2])));
}
async function h(r, t, o) {
  return (await j(r.map((r2, e2) => t.apply(o, [r2, e2])))).map((r2) => r2.value);
}
function m2(r) {
  return { ok: true, value: r };
}
function _(r) {
  return { ok: false, error: r };
}
function f2(r) {
  return null != r && true === r.ok ? r.value : null;
}
function y(r) {
  return null != r && false === r.ok ? r.error : null;
}
async function b2(r) {
  if (null == r) return { ok: false, error: new Error("no promise provided") };
  try {
    return m2(await r);
  } catch (t) {
    return _(t);
  }
}
async function d(r) {
  try {
    return m2(await r);
  } catch (t) {
    return f(t), _(t);
  }
}
function w2(r, t) {
  return new k(r, t);
}
var k = class extends b {
  get value() {
    return f2(this._result);
  }
  get error() {
    return y(this._result);
  }
  get finished() {
    return null != this._result;
  }
  constructor(r, t) {
    super({}), this._result = null, this._abortHandle = null, this.abort = () => {
      this._abortController = e(this._abortController);
    }, this.remove = this.abort, this._abortController = new AbortController();
    const { signal: o } = this._abortController;
    this.promise = r(o), this.promise.then((r2) => {
      this._result = m2(r2), this._cleanup();
    }, (r2) => {
      this._result = _(r2), this._cleanup();
    }), this._abortHandle = w(t, this.abort);
  }
  normalizeCtorArgs() {
    return {};
  }
  destroy() {
    this.abort();
  }
  _cleanup() {
    this._abortHandle = l(this._abortHandle), this._abortController = null;
  }
};
__decorate([m()], k.prototype, "value", null), __decorate([m()], k.prototype, "error", null), __decorate([m()], k.prototype, "finished", null), __decorate([m()], k.prototype, "promise", void 0), __decorate([m()], k.prototype, "_result", void 0), k = __decorate([l2("esri.core.asyncUtils.ReactiveTask")], k);
var C = class {
  constructor() {
    this._sequence = Promise.resolve();
  }
  async acquire() {
    let r;
    this._sequence = new Promise((t2) => {
      r = this._sequence.then(() => t2, () => t2);
    });
    const t = await r;
    return { [Symbol.dispose]: t };
  }
  async run(o) {
    const e2 = { stack: [], error: void 0, hasError: false };
    try {
      __addDisposableResource(e2, await this.acquire(), false);
      return await o();
    } catch (s) {
      e2.error = s, e2.hasError = true;
    } finally {
      __disposeResources(e2);
    }
  }
};

export {
  p,
  h,
  b2 as b,
  d,
  w2 as w,
  C
};
//# sourceMappingURL=chunk-NMDBB7YG.js.map
