import {
  r
} from "./chunk-YHHRJ56I.js";
import {
  e,
  s
} from "./chunk-POW25PFR.js";
import {
  n2 as n
} from "./chunk-IDI4VM7T.js";
import {
  L
} from "./chunk-KWV5EQET.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/core/workers/WorkerHandle.js
var o = class {
  constructor(e2, t, r2, o2, h2 = {}) {
    this._mainMethod = t, this._transferLists = r2, this._listeners = [], this._promise = r(e2, __spreadProps(__spreadValues({}, h2), { schedule: o2 })).then((e3) => {
      if (void 0 === this._thread) {
        this._thread = e3, this._promise = null, h2.hasInitialize && this.broadcast({}, "initialize");
        for (const e4 of this._listeners) this._connectListener(e4);
      } else e3.close();
    }), this._promise.catch((t2) => n.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e2} worker: ${t2}`));
  }
  on(s2, r2) {
    const i = { removed: false, eventName: s2, callback: r2, threadHandle: null };
    return this._listeners.push(i), this._connectListener(i), e(() => {
      i.removed = true, L(this._listeners, i), this._thread && null != i.threadHandle && i.threadHandle.remove();
    });
  }
  [Symbol.dispose]() {
    this.destroy();
  }
  destroy() {
    this._thread && (this._thread.close(), this._thread = null), this._promise = null, this._listeners.length = 0, this._transferLists = {};
  }
  invoke(e2, t, s2) {
    return this.invokeMethod(this._mainMethod, e2, t, s2);
  }
  invokeMethod(e2, t, s2, i) {
    if (this._thread) {
      const r2 = this._transferLists[e2], o2 = r2 ? r2(t) : [];
      return this._thread.invoke(e2, t, { transferList: o2, signal: s2, jobPriority: i });
    }
    return this._promise ? this._promise.then(() => (s(s2), this.invokeMethod(e2, t, s2))) : Promise.reject(null);
  }
  broadcast(e2, t) {
    return this._thread ? Promise.all(this._thread.broadcast(t, e2)).then(h) : this._promise ? this._promise.then(() => this.broadcast(e2, t)) : Promise.reject();
  }
  get promise() {
    return this._promise;
  }
  _connectListener(e2) {
    this._thread && this._thread.on(e2.eventName, e2.callback).then((t) => {
      e2.removed || (e2.threadHandle = t);
    });
  }
};
function h() {
}

export {
  o
};
//# sourceMappingURL=chunk-AVRDYMQL.js.map
