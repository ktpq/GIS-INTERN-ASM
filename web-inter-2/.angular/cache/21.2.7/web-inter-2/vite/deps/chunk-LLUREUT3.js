import {
  e
} from "./chunk-XCLLMA7R.js";
import {
  r
} from "./chunk-OMQXFXI3.js";
import {
  s
} from "./chunk-DVV55TEN.js";
import {
  F
} from "./chunk-DCL27SPX.js";
import {
  $,
  C,
  h,
  l2 as l,
  u3 as u,
  w
} from "./chunk-PQFEWUZC.js";

// node_modules/@arcgis/core/core/QueueProcessor.js
var u2 = class {
  constructor(e2) {
    this._schedule = null, this._deferreds = new e(), this._controllers = new e(), this._processingItems = new e(), this._pausedSignal = r(false), this.process = e2.process, this.concurrency = e2.concurrency, this.sharedConcurrency = e2.sharedConcurrency ?? p, this._queue = new s(e2.peeker);
  }
  destroy() {
    this.clear(), this._schedule = l(this._schedule);
  }
  get updating() {
    return this.running;
  }
  get length() {
    return this._processingItems.size + this._queue.length;
  }
  get running() {
    return !this._pausedSignal.value && this._queue.length > 0 && !this.full;
  }
  get full() {
    return this._processingItems.size >= this.concurrency || this.sharedConcurrency.full;
  }
  abort(e2) {
    const s2 = this._controllers.get(e2);
    s2?.abort();
  }
  clear() {
    this._queue.clear();
    const e2 = Array.from(this._controllers.values());
    this._controllers.clear(), e2.forEach((e3) => e3.abort()), this.sharedConcurrency.current.value -= this._processingItems.size, this._processingItems.clear(), this._cancelNext();
  }
  forEach(e2) {
    this._deferreds.forEach((s2, t) => e2(t));
  }
  _get(e2) {
    const s2 = this._deferreds.get(e2);
    return s2?.promise;
  }
  pause() {
    this._pausedSignal.value || (this._pausedSignal.value = true, this._cancelNext());
  }
  push(e2, i) {
    const c = this._get(e2);
    if (c) return c;
    const n = new AbortController(), o = $(), l2 = i ? w(i, () => n.abort()) : null, u3 = () => {
      const s2 = this._processingItems.get(e2);
      s2 && s2.controller.abort(), a2(), o.reject(u());
    }, _2 = h(n.signal, u3), a2 = () => {
      _2.remove(), l2?.remove(), this._removeItem(e2), this._queue.remove(e2), this._scheduleNext();
    };
    return this._deferreds.set(e2, o), this._controllers.set(e2, n), o.promise.then(a2, a2), this._queue.push(e2), this._scheduleNext(), o.promise;
  }
  last() {
    return this._queue.last();
  }
  reset() {
    const e2 = Array.from(this._processingItems.values());
    this.sharedConcurrency.current.value -= this._processingItems.size, this._processingItems.clear();
    for (const s2 of e2) this._queue.push(s2.item), s2.controller.abort();
    this._scheduleNext();
  }
  resume() {
    this._pausedSignal.value && (this._pausedSignal.value = false, this._scheduleNext());
  }
  takeAll() {
    const e2 = [];
    for (; this._queue.length; ) e2.push(this._queue.pop());
    return this.clear(), e2;
  }
  _removeItem(e2) {
    this._deferreds.delete(e2), this._controllers.delete(e2), this._processingItems.has(e2) && (this._processingItems.delete(e2), this.sharedConcurrency.current.value -= 1);
  }
  _scheduleNext() {
    this._pausedSignal.value || this._schedule || (this._schedule = F(() => {
      this._schedule = null, this._next();
    }));
  }
  _next() {
    for (; this._queue.length > 0 && this._processingItems.size < this.concurrency && !this.sharedConcurrency.full; ) this._process(this._queue.pop());
  }
  _cancelNext() {
    this._schedule && (this._schedule.remove(), this._schedule = null);
  }
  _processResult(e2, s2) {
    this._canProcessFulfillment(e2) && (this._scheduleNext(), this._deferreds.get(e2.item).resolve(s2));
  }
  _processError(e2, s2) {
    this._canProcessFulfillment(e2) && (this._scheduleNext(), this._deferreds.get(e2.item).reject(s2));
  }
  _canProcessFulfillment(e2) {
    return !!this._deferreds.get(e2.item) && this._processingItems.get(e2.item) === e2;
  }
  _process(e2) {
    if (null == e2) return;
    let s2;
    const t = new AbortController(), r2 = new _(e2, t);
    this._processingItems.set(e2, r2), this.sharedConcurrency.current.value += 1;
    try {
      s2 = this.process(e2, t.signal);
    } catch (h2) {
      this._processError(r2, h2);
    }
    C(s2) ? (r2.promise = s2, s2.then((e3) => this._processResult(r2, e3), (e3) => this._processError(r2, e3))) : this._processResult(r2, s2);
  }
};
var _ = class {
  constructor(e2, s2) {
    this.item = e2, this.controller = s2, this.promise = null;
  }
};
var a = class {
  constructor(e2) {
    this.limit = e2, this.current = r(0);
  }
  get full() {
    return this.current.value >= this.limit;
  }
};
var p = new a(1 / 0);

export {
  u2 as u,
  a
};
//# sourceMappingURL=chunk-LLUREUT3.js.map
