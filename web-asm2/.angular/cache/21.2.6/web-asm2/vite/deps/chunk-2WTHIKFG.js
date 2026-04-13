import {
  e
} from "./chunk-SGJIDPMU.js";
import {
  s
} from "./chunk-OR4JKEPP.js";
import {
  r
} from "./chunk-FPTKPNJ2.js";
import {
  F
} from "./chunk-IQN5O5FG.js";
import {
  $,
  C,
  h,
  l2 as l,
  u3 as u,
  w
} from "./chunk-2DNVIDFH.js";

// node_modules/@arcgis/core/views/support/ScheduledQueueProcessor.js
var u2 = class {
  constructor(e2, s2) {
    this.item = e2, this.controller = s2, this.promise = null;
  }
};
var _ = class {
  constructor(e2) {
    this._schedule = null, this._task = null, this._deferreds = new e(), this._controllers = new e(), this._processingItems = new e(), this._pausedSignal = r(false), this.concurrency = 1, e2.concurrency && (this.concurrency = e2.concurrency), this._queue = new s(e2.peeker), this.process = e2.process;
    const s2 = e2.scheduler;
    e2.priority && s2 && (this._task = s2.registerTask(e2.priority, this));
  }
  destroy() {
    this.clear(), this._schedule = l(this._schedule), this._task = l(this._task);
  }
  get updating() {
    return !!this._task?.updating || this.readyToRun;
  }
  get length() {
    return this._processingItems.size + this._queue.length;
  }
  abort(e2) {
    const s2 = this._controllers.get(e2);
    s2 && s2.abort();
  }
  clear() {
    this._queue.clear();
    const e2 = [];
    this._controllers.forEach((s2) => e2.push(s2)), this._controllers.clear(), e2.forEach((e3) => e3.abort()), this._processingItems.clear(), this._cancelNext();
  }
  forEach(e2) {
    this._deferreds.forEach((s2, t) => e2(t));
  }
  get(e2) {
    const s2 = this._deferreds.get(e2);
    return s2 ? s2.promise : void 0;
  }
  isOngoing(e2) {
    return this._processingItems.has(e2);
  }
  has(e2) {
    return this._deferreds.has(e2);
  }
  pause() {
    this._pausedSignal.value || (this._pausedSignal.value = true, this._cancelNext());
  }
  push(e2, o) {
    const h2 = this.get(e2);
    if (h2) return h2;
    const c = new AbortController();
    let n = null;
    o && (n = w(o, () => c.abort()));
    const l2 = () => {
      const s2 = this._processingItems.get(e2);
      s2 && s2.controller.abort(), u3(), a.reject(u());
    }, u3 = () => {
      _2.remove(), null != n && n.remove(), this._removeItem(e2), this._queue.remove(e2), this._scheduleNext();
    }, _2 = h(c.signal, l2), a = $();
    return this._deferreds.set(e2, a), this._controllers.set(e2, c), a.promise.then(u3, u3), this._queue.push(e2), this._scheduleNext(), a.promise;
  }
  last() {
    return this._queue.last();
  }
  lastPromise() {
    const e2 = this.last();
    return e2 ? this.get(e2) : null;
  }
  peek() {
    return this._queue.peek();
  }
  popLast() {
    const e2 = this._queue.popLast();
    return e2 && (this._deferreds.get(e2)?.reject(u()), this._removeItem(e2)), e2;
  }
  reset() {
    const e2 = Array.from(this._processingItems.values());
    this._processingItems.clear();
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
  get readyToRun() {
    return !this._pausedSignal.value && this._queue.length > 0 && this._processingItems.size < this.concurrency;
  }
  runTask(e2) {
    for (; !e2.done && this._queue.length > 0 && this._processingItems.size < this.concurrency; ) this._process(this._queue.pop()), e2.madeProgress();
  }
  _removeItem(e2) {
    this._deferreds.delete(e2), this._controllers.delete(e2), this._processingItems.delete(e2);
  }
  _scheduleNext() {
    this._task || this._pausedSignal.value || this._schedule || (this._schedule = F(() => {
      this._schedule = null, this._next();
    }));
  }
  _next() {
    for (; this._queue.length > 0 && this._processingItems.size < this.concurrency; ) this._process(this._queue.pop());
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
    const t = new AbortController(), r2 = new u2(e2, t);
    this._processingItems.set(e2, r2);
    try {
      s2 = this.process(e2, t.signal);
    } catch (i) {
      this._processError(r2, i);
    }
    C(s2) ? (r2.promise = s2, s2.then((e3) => this._processResult(r2, e3), (e3) => this._processError(r2, e3))) : this._processResult(r2, s2);
  }
  get test() {
  }
};

export {
  _
};
//# sourceMappingURL=chunk-2WTHIKFG.js.map
