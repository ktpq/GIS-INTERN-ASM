import {
  _
} from "./chunk-BH57RERT.js";
import {
  r as r3
} from "./chunk-FPTKPNJ2.js";
import {
  f,
  h,
  l as l2
} from "./chunk-CD6IOUFB.js";
import {
  r as r2
} from "./chunk-SG23UZYK.js";
import {
  o,
  s
} from "./chunk-IQN5O5FG.js";
import {
  n as n2
} from "./chunk-HJCCWVZL.js";
import {
  C,
  a,
  d,
  k,
  l2 as l,
  u3 as u,
  y
} from "./chunk-2DNVIDFH.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6SPQI6I6.js";
import {
  S,
  z
} from "./chunk-KWV5EQET.js";

// node_modules/@arcgis/core/views/support/Yield.js
var o2 = /* @__PURE__ */ Symbol("Yield");

// node_modules/@arcgis/core/views/support/PromiseQueue.js
var c = class {
  constructor() {
    this._tasks = new Array(), this._numPendingTasks = r3(0), this._readyToRun = r3(false);
  }
  get length() {
    return this._tasks.length;
  }
  get updating() {
    return this._numPendingTasks.value > 0;
  }
  get readyToRun() {
    return this._readyToRun.value;
  }
  _updateReadyToRun() {
    this._readyToRun.value = this._tasks.length > 0;
  }
  destroy() {
    this.cancelAll();
  }
  runTask(t) {
    if (0 === this.length) return o2;
    for (; !t.done && this._process(t); ) t.madeProgress();
  }
  push(t, e, s2) {
    return this._addTask((r4, o3) => new p(r4, o3, t, e, s2), Array.prototype.push);
  }
  unshift(t, e, s2) {
    return this._addTask((r4, o3) => new p(r4, o3, t, e, s2), Array.prototype.unshift);
  }
  pushGenerator(t, e, s2) {
    return this._addTask((r4, o3) => new _2(r4, o3, t, e, s2), Array.prototype.push);
  }
  _process(t) {
    if (0 === this._tasks.length) return false;
    const e = this._tasks.shift();
    this._updateReadyToRun();
    try {
      if (a(e.signal)) this._cancelTask(e, u());
      else switch (e.type) {
        case 0:
          this._processSimple(e, t);
          break;
        case 1:
          this._processGenerator(e, t);
          break;
        case 2:
          this._processIterator(e, t);
      }
    } catch (o3) {
      e.reject(o3);
    }
    return true;
  }
  cancelAll() {
    const t = u();
    for (const e of this._tasks) this._cancelTask(e, t);
    this._tasks.length = 0, this._updateReadyToRun();
  }
  _cancelTask(t, e) {
    if (t.abortCallback) {
      const s2 = t.abortCallback(e);
      2 === t.type && t.iterator.return && h2(t.iterator.return()), C(s2) ? s2.then(t.resolve, t.reject) : t.resolve(s2);
    } else 2 === t.type && t.iterator.throw && h2(t.iterator.throw(e)), t.reject(e);
  }
  _onIteratorResult(t, e) {
    e.done ? t.resolve(e.value) : (this._tasks.unshift(t), this._updateReadyToRun());
  }
  _processSimple(t, e) {
    const s2 = t.callback(e);
    C(s2) ? s2.then(t.resolve, t.reject) : t.resolve(s2);
  }
  _processGenerator(t, e) {
    const s2 = t.generatorFunction(e), r4 = new d2(t.resolve, t.reject, s2, t.signal, t.abortCallback);
    this._processIterator(r4, e);
  }
  _processIterator(t, e) {
    const s2 = t.iterator.next(e);
    C(s2) ? s2.then((e2) => this._onIteratorResult(t, e2), t.reject) : this._onIteratorResult(t, s2);
  }
  _addTask(t, e) {
    return new Promise((s2, r4) => {
      const o3 = t(s2, r4);
      e.call(this._tasks, o3), ++this._numPendingTasks.value, this._updateReadyToRun();
    }).finally(() => --this._numPendingTasks.value);
  }
};
function h2(t) {
  C(t) ? t.then(l3, l3) : l3(t);
}
function l3(s2) {
  d(s2) || s2 instanceof Error || s2 instanceof r || null != s2 && "object" == typeof s2 && "done" in s2 && s2.done || n.getLogger("esri.layers.support.PromiseQueue").warn("Generator iterator was aborted, but it is not done.");
}
var u2 = class {
  constructor(t, e, s2, r4) {
    this.resolve = t, this.reject = e, this.signal = s2, this.abortCallback = r4;
  }
};
var p = class extends u2 {
  constructor(t, e, s2, r4, o3) {
    super(t, e, r4, o3), this.callback = s2, this.type = 0;
  }
};
var _2 = class extends u2 {
  constructor(t, e, s2, r4, o3) {
    super(t, e, r4, o3), this.generatorFunction = s2, this.type = 1;
  }
};
var d2 = class extends u2 {
  constructor(t, e, s2, r4, o3) {
    super(t, e, r4, o3), this.iterator = s2, this.type = 2;
  }
};

// node_modules/@arcgis/core/views/support/Scheduler.js
function A() {
  return new C2();
}
var p2 = { RESOURCE_CONTROLLER_IMMEDIATE: "immediate", RESOURCE_CONTROLLER: "schedule", SLIDE: "slide", STREAM_DATA_LOADER: "stream loader", ELEVATION_QUERY: "elevation query", TERRAIN_SURFACE: "terrain", SURFACE_GEOMETRY_UPDATES: "surface geometry updates", LOD_RENDERER: "LoD renderer", GRAPHICS_CORE: "Graphics3D", I3S_CONTROLLER: "I3S", POINT_CLOUD_LAYER: "point cloud", FEATURE_TILE_FETCHER: "feature fetcher", STREAM_CONTROLLER: "stream controller", OVERLAY: "overlay", OVERLAY_RENDERER: "overlay renderer", STAGE: "stage", GRAPHICS_DECONFLICTOR: "graphics deconflictor", FILTER_VISIBILITY: "graphics filter visibility", SCALE_VISIBILITY: "graphics scale visibility", FRUSTUM_VISIBILITY: "graphics frustum visibility", POINT_OF_INTEREST_FREQUENT: "POI frequent", POINT_OF_INTEREST_INFREQUENT: "POI infrequent", LABELER: "labeler", FEATURE_QUERY_ENGINE: "feature query", FEATURE_TILE_TREE: "feature tile tree", FEATURE_TILE_TREE_ACTIVE: "fast feature tile tree", ELEVATION_ALIGNMENT: "elevation alignment", ELEVATION_ALIGNMENT_SCENE: "elevation alignment scene", TEXT_TEXTURE_ATLAS: "text texture atlas", TEXTURE_UNLOAD: "texture unload", LINE_OF_SIGHT_TOOL: "line of sight tool", LINE_OF_SIGHT_TOOL_INTERACTIVE: "interactive line of sight tool", VOLUME_MEASUREMENT: "volume measurement", ELEVATION_PROFILE: "elevation profile", SNAPPING: "snapping", SHADOW_ACCUMULATOR: "shadow accumulator", CLOUDS_GENERATOR: "clouds generator", FLOW_GENERATOR: "flow generator", GAUSSIAN_SPLAT_SORTING: "gaussian splat sorting", GAUSSIAN_SPLAT_TEXTURE_ATLAS: "gaussian splat texture atlas", MAPVIEW_FETCH_QUEUE: "mapview fetch queue", MAPVIEW_LAYERVIEW_UPDATE: "mapview layerview update", MAPVIEW_VECTOR_TILE_PARSING_QUEUE: "mapview vector tile parsing queue", NONE: 0, TEST_PRIO: 1 };
var f2 = 0;
var L = /* @__PURE__ */ new Map([[p2.RESOURCE_CONTROLLER_IMMEDIATE, f2], [p2.RESOURCE_CONTROLLER, 4], [p2.SLIDE, f2], [p2.STREAM_DATA_LOADER, f2], [p2.ELEVATION_QUERY, f2], [p2.TERRAIN_SURFACE, 1], [p2.SURFACE_GEOMETRY_UPDATES, 1], [p2.LOD_RENDERER, 2], [p2.GRAPHICS_CORE, 2], [p2.I3S_CONTROLLER, 2], [p2.POINT_CLOUD_LAYER, 2], [p2.FEATURE_TILE_FETCHER, 2], [p2.STREAM_CONTROLLER, 2], [p2.CLOUDS_GENERATOR, 2], [p2.OVERLAY, 4], [p2.OVERLAY_RENDERER, 4], [p2.STAGE, 4], [p2.GRAPHICS_DECONFLICTOR, 4], [p2.FILTER_VISIBILITY, 4], [p2.SCALE_VISIBILITY, 4], [p2.FRUSTUM_VISIBILITY, 4], [p2.POINT_OF_INTEREST_FREQUENT, 6], [p2.POINT_OF_INTEREST_INFREQUENT, 30], [p2.LABELER, 8], [p2.FEATURE_QUERY_ENGINE, 8], [p2.FEATURE_TILE_TREE, 16], [p2.FEATURE_TILE_TREE_ACTIVE, f2], [p2.ELEVATION_ALIGNMENT, 12], [p2.ELEVATION_ALIGNMENT_SCENE, 14], [p2.TEXT_TEXTURE_ATLAS, 12], [p2.TEXTURE_UNLOAD, 12], [p2.LINE_OF_SIGHT_TOOL, 16], [p2.LINE_OF_SIGHT_TOOL_INTERACTIVE, f2], [p2.VOLUME_MEASUREMENT, 4], [p2.SNAPPING, f2], [p2.SHADOW_ACCUMULATOR, 30], [p2.FLOW_GENERATOR, 12], [p2.GAUSSIAN_SPLAT_SORTING, 2], [p2.GAUSSIAN_SPLAT_TEXTURE_ATLAS, 12], [p2.MAPVIEW_FETCH_QUEUE, f2], [p2.MAPVIEW_LAYERVIEW_UPDATE, 2], [p2.MAPVIEW_VECTOR_TILE_PARSING_QUEUE, f2]]);
function O(e) {
  return L.has(e) ? L.get(e) : "number" == typeof e ? e : 1;
}
var N = n2(6.5);
var S2 = n2(1);
var U = n2(30);
var b = n2(1e3 / 30);
var P = n2(100);
var k2 = 0.9;
var C2 = class {
  get updating() {
    return this._updating.value;
  }
  _updatingChanged() {
    this._updating.value = this._tasks.some((e) => e.needsUpdate);
  }
  constructor() {
    this._updating = r3(true), this._microTaskQueued = false, this._frameNumber = 0, this.performanceInfo = { total: new s("total"), tasks: /* @__PURE__ */ new Map() }, this._frameTaskTimes = /* @__PURE__ */ new Map(), this._budget = new y2(), this.state = 1, this._tasks = new Array(), this._runQueue = new Array(), this._load = 0, this._forceTask = false, this._debug = false, this._debugHandle = l2(() => _.SCHEDULER_LOG_SLOW_TASKS, (e) => this._debug = e, h);
    for (const e of Object.keys(p2)) this.performanceInfo.tasks.set(p2[e], new s(String(p2[e])));
  }
  destroy() {
    this._tasks.forEach((e) => e.remove()), this._tasks.length = 0, this._runQueue.length = 0, l(this._debugHandle), this._microTaskQueued = false, this._updatingChanged();
  }
  taskRunningChanged(e) {
    this._updatingChanged(), e && this._budget.remaining > 0 && !this._microTaskQueued && (this._microTaskQueued = true, queueMicrotask(() => {
      this._microTaskQueued && (this._microTaskQueued = false, this._budget.remaining > 0 && this._schedule() && this._runFrame());
    }));
  }
  registerTask(e, t) {
    const s2 = new F(this, e, t);
    return this._tasks.push(s2), this._updatingChanged(), this.performanceInfo.tasks.has(e) || this.performanceInfo.tasks.set(e, new s(e)), s2;
  }
  get load() {
    return this._load;
  }
  frame(e) {
    if (this._startFrameTaskTimes(), this._updateBudget(e)) {
      const e2 = this._budget.now();
      this._runFrame();
      const t = this._budget.now();
      this._recordFrameTaskTimes(t - e2);
      const s2 = 2 === this.state ? "Idle" : 1 === this.state ? "Interacting" : "Animating";
      return o(`${s2} Frame Tasks`, e2, t, "Maps SDK", "Scheduling"), true;
    }
    return this._recordFrameTaskTimes(0), false;
  }
  _updateBudget(e) {
    this._test && (this._test.usedBudget = 0), ++this._frameNumber;
    let t = N, s2 = e.frameDuration, r4 = S2;
    switch (this.state) {
      case 2:
        t = n2(0), s2 = n2(Math.max(P, e.frameDuration)), r4 = U;
        break;
      case 1:
        s2 = n2(Math.max(b, e.frameDuration));
    }
    return s2 = n2(s2 - e.elapsedFrameTime - t), 2 !== this.state && s2 < S2 && !this._forceTask ? (this._forceTask = true, false) : (s2 = n2(Math.max(s2, r4)), this._budget.reset(s2), this._updateLoad(), this._schedule());
  }
  _runFrame() {
    this._forceTask = false, this._microTaskQueued = false, this._run(), this._test && (this._test.usedBudget = this._budget.elapsed);
  }
  stopFrame() {
    this._budget.reset(n2(0)), this._budget.madeProgress();
  }
  removeTask(t) {
    S(this._tasks, t), S(this._runQueue, t), this._updatingChanged();
  }
  _updateTask(e) {
    this._tasks.forEach((t) => {
      t.name === e && t.setPriority(e);
    });
  }
  _getState(e) {
    if (this._runQueue.some((t2) => t2.name === e)) return "s";
    let t = "i";
    return this._tasks.forEach((s2) => {
      s2.name === e && s2.needsUpdate && (s2.schedulePriority <= 1 ? t = "r" : "r" !== t && (t = "w"));
    }), t;
  }
  _getRuntime(e) {
    let t = 0;
    return this._tasks.forEach((s2) => {
      s2.name === e && (t += s2.runtime);
    }), t;
  }
  _resetRuntimes() {
    this._tasks.forEach((e) => e.runtime = 0);
  }
  _getRunning() {
    const e = /* @__PURE__ */ new Map();
    if (this._tasks.forEach((t2) => {
      t2.needsUpdate && e.set(t2.name, (e.get(t2.name) || 0) + 1);
    }), 0 === e.size) return null;
    let t = "";
    return e.forEach((e2, s2) => {
      t += e2 > 1 ? ` ${e2}x ${s2}` : ` ${s2}`;
    }), t;
  }
  _updateLoad() {
    const e = this._tasks.reduce((e2, t) => t.needsUpdate ? ++e2 : e2, 0);
    this._load = this._load * k2 + e * (1 - k2);
  }
  _schedule() {
    for (z(this._runQueue, (e) => !!e.needsUpdate || (e.schedulePriority = e.basePriority, false)), this._tasks.forEach((e) => {
      e.basePriority === f2 && e.needsUpdate && !this._runQueue.includes(e) && e.blockFrame !== this._frameNumber && this._runQueue.unshift(e);
    }); 0 === this._runQueue.length; ) {
      let e = false, t = 0;
      if (this._tasks.forEach((s2) => {
        if (s2.needsUpdate && 0 !== s2.schedulePriority && s2.basePriority !== f2 && s2.blockFrame !== this._frameNumber) if (e = true, t = Math.max(t, s2.basePriority), 1 === s2.schedulePriority) s2.schedulePriority = 0, this._runQueue.push(s2);
        else --s2.schedulePriority;
      }), !e) return this._updatingChanged(), false;
    }
    return this._updatingChanged(), true;
  }
  _run() {
    do {
      for (; this._runQueue.length > 0; ) {
        const t = this._budget.now(), s2 = this._runQueue.pop();
        this._budget.resetProgress();
        try {
          s2.task.runTask(this._budget) === o2 && (s2.blockFrame = this._frameNumber);
        } catch (e) {
          n.getLogger("esri.views.support.Scheduler").error(`Exception in task "${s2.name}"`, e), s2.blockFrame = this._frameNumber;
        }
        !this._budget.hasProgressed && s2.blockFrame !== this._frameNumber && s2.needsUpdate && (s2.name, p2.I3S_CONTROLLER, s2.blockFrame = this._frameNumber), s2.schedulePriority = s2.basePriority;
        const i = this._budget.now(), n3 = i - t;
        if (o(`${s2.name}`, t, i, "Maps SDK", "Scheduling"), s2.runtime += n3, this._frameTaskTimes.set(s2.priority, this._frameTaskTimes.get(s2.priority) + n3), this._budget.remaining <= 0) return void this._updatingChanged();
      }
    } while (this._schedule());
    this._updatingChanged();
  }
  _startFrameTaskTimes() {
    for (const e of Object.keys(p2)) this._frameTaskTimes.set(p2[e], 0);
  }
  _recordFrameTaskTimes(e) {
    this._frameTaskTimes.forEach((e2, t) => this.performanceInfo.tasks.get(t).push(e2)), this.performanceInfo.total.push(e);
  }
  get test() {
    return this._test;
  }
};
var F = class {
  get task() {
    return this._task.value;
  }
  get readyToRun() {
    return this._queue.readyToRun;
  }
  get updating() {
    return this._queue.updating;
  }
  constructor(e, t, r4) {
    this._scheduler = e, this.name = t, this.blockFrame = 0, this.runtime = 0, this._queue = new c(), this._handles = new r2(), this._basePriority = O(t), this.schedulePriority = this._basePriority, this._task = r3(null != r4 ? r4 : this._queue), this._handles.add(f(() => this.task.readyToRun, (t2) => e.taskRunningChanged(t2)));
  }
  remove() {
    this.processQueue(w), this._scheduler.removeTask(this), this.schedule = D.schedule, this.reschedule = D.reschedule, this.scheduleGenerator = D.scheduleGenerator, this._handles.destroy();
  }
  get basePriority() {
    return this._basePriority;
  }
  setPriority(e) {
    if (this.name === e) return;
    this.name = e;
    const t = O(e);
    this._basePriority !== f2 && 0 === this.schedulePriority || (this.schedulePriority = t), this._basePriority = t;
  }
  get priority() {
    return this.name;
  }
  set priority(e) {
    this.setPriority(e);
  }
  get needsUpdate() {
    return this.readyToRun || !this.task.destroyed && this.task.readyToRun;
  }
  schedule(e, t, s2) {
    return this._queue.push(e, t, s2);
  }
  reschedule(e, t, s2) {
    return this._queue.unshift(e, t, s2);
  }
  scheduleGenerator(e, t, s2) {
    return this._queue.pushGenerator(e, t, s2);
  }
  processQueue(e) {
    return this._queue.runTask(e);
  }
};
var y2 = class {
  constructor() {
    this._begin = performance?.now() ?? 0, this._budget = 0, this._done = false, this._progressed = false, this._enabled = true;
  }
  run(e) {
    return !this.done && (true === e() && this.madeProgress(), true);
  }
  get done() {
    return this._done;
  }
  get budget() {
    return this._budget;
  }
  madeProgress() {
    return this._progressed = true, this._done = this.elapsed >= this._budget && this._enabled, this._done;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e) {
    this._enabled = e;
  }
  reset(e) {
    this._begin = this.now(), this._budget = e, this.resetProgress();
  }
  get remaining() {
    return Math.max(this._budget - this.elapsed, 0);
  }
  now() {
    return performance.now();
  }
  get elapsed() {
    return this.now() - this._begin;
  }
  resetProgress() {
    this._progressed = false, this._done = false;
  }
  get hasProgressed() {
    return this._progressed;
  }
};
var w = new y2();
w.enabled = false;
var G = class {
  remove() {
  }
  processQueue() {
  }
  schedule(e, t, s2) {
    try {
      if (a(t)) {
        const e2 = u();
        return s2 ? Promise.resolve(s2(e2)) : Promise.reject(e2);
      }
      return k(e(w));
    } catch (r4) {
      return Promise.reject(r4);
    }
  }
  reschedule(e, t, s2) {
    return this.schedule(e, t, s2);
  }
  async scheduleGenerator(e, t, s2) {
    if (a(t)) {
      const e2 = u();
      if (s2) return s2(e2);
      throw e2;
    }
    const r4 = e(w);
    for (; ; ) {
      const e2 = r4.next(w), i = C(e2) ? await e2 : e2;
      if (a(t)) {
        const e3 = u();
        if (s2) {
          const t3 = s2(e3), i2 = r4.return(null);
          return C(i2) && await y(i2), t3;
        }
        const t2 = r4.throw(e3);
        throw C(t2) && await y(t2), e3;
      }
      if (i.done) return i.value;
    }
  }
};
var D = new G();

export {
  o2 as o,
  c,
  A,
  p2 as p,
  w,
  D
};
//# sourceMappingURL=chunk-43RE4NFD.js.map
