import {
  n
} from "./chunk-SY7OJLZ7.js";
import {
  t
} from "./chunk-BCADJITZ.js";
import {
  r
} from "./chunk-PFC2RERS.js";
import {
  $,
  a,
  u3 as u
} from "./chunk-WARIPJQI.js";

// node_modules/@arcgis/core/core/performance.js
function o(o2, t2, e, n2, c2) {
  console.timeStamp(o2, t2, e, c2, n2);
}

// node_modules/@arcgis/core/core/PerformanceSampler.js
var s = class {
  constructor(s2, t2 = 30) {
    this.name = s2, this._counter = 0, this._samples = new Array(t2);
  }
  push(s2) {
    null != s2 && (this._samples[++this._counter % this._samples.length] = s2);
  }
  set(s2) {
    null != s2 && (this._samples[this._counter % this._samples.length] = s2);
  }
  get median() {
    return this._samples.slice().sort((s2, t2) => s2 - t2)[Math.floor(this._samples.length / 2)];
  }
  get average() {
    return this._samples.reduce((s2, t2) => s2 + t2, 0) / this._samples.length;
  }
  get last() {
    return this._samples[this._counter % this._samples.length];
  }
};

// node_modules/@arcgis/core/core/scheduling.js
var c = class {
  constructor(e) {
    this.phases = e, this.paused = false, this.ticks = -1, this.removed = false;
  }
};
var m = class {
  constructor(e) {
    this.callback = e, this.isActive = true;
  }
  remove() {
    this.isActive = false;
  }
};
var u2 = 0;
var l = 0;
var p = { time: n(0), deltaTime: n(0), elapsedFrameTime: n(0), frameDuration: n(0) };
var f = ["prepare", "preRender", "render", "postRender", "update", "finish"];
var h = [];
var d = new r();
var w = class {
  constructor(e) {
    this._task = e;
  }
  remove() {
    this._task.removed = true;
  }
  pause() {
    this._task.paused = true;
  }
  resume() {
    this._task.paused = false, v();
  }
};
function k() {
  null != D && (cancelAnimationFrame(D), D = requestAnimationFrame(g));
}
function v() {
  null == D && (u2 = performance.now(), D = requestAnimationFrame(g));
}
var A = { frameTasks: d, willDispatch: false, clearFrameTasks: j, dispatch: b, executeFrameTasks: M, reschedule: k };
function F(t2) {
  const n2 = new m(t2);
  return h.push(n2), A.willDispatch || (A.willDispatch = true, t(b)), n2;
}
function T(e) {
  const t2 = new c(e);
  return d.push(t2), v(), new w(t2);
}
var D = null;
function j(e = false) {
  d.forAll((e2) => {
    e2.removed = true;
  }), e && q();
}
function g() {
  const e = performance.now();
  D = null;
  const t2 = d.some((e2) => !e2.paused && !e2.removed);
  D = t2 ? requestAnimationFrame(g) : null, A.executeFrameTasks(e);
}
function M(e) {
  const n2 = n(e - u2);
  u2 = e;
  const r2 = l > 0 ? l : 1e3 / 60, s2 = Math.max(0, n2 - r2);
  p.time = e, p.frameDuration = n(r2 - s2);
  for (let a2 = 0; a2 < f.length; a2++) {
    const r3 = performance.now(), s3 = f[a2];
    d.forAll((t2) => {
      if (t2.paused || t2.removed) return;
      0 === a2 && t2.ticks++;
      t2.phases[s3] && (p.elapsedFrameTime = n(performance.now() - e), p.deltaTime = 0 === t2.ticks ? n(0) : n2, t2.phases[s3]?.call(t2, p));
    });
    const o3 = performance.now();
    U[a2].push(o3 - r3), o(s3, r3, o3, "Maps SDK", "Scheduling");
  }
  q();
  const o2 = performance.now();
  z.push(o2 - e), o("Animation Frame", e, o2, "Maps SDK", "Scheduling");
}
var S = new r();
function q() {
  d.forAll((e) => {
    e.removed && S.push(e);
  }), d.removeUnorderedMany(S.data, S.length), S.clear();
}
function b() {
  for (; h.length; ) {
    const e = h.shift();
    e.isActive && e.callback();
  }
  A.willDispatch = false;
}
function y(t2 = 1, n2) {
  const r2 = $(), i = () => {
    a(n2) ? r2.reject(u()) : 0 === t2 ? r2() : (--t2, t(() => i()));
  };
  return i(), r2.promise;
}
function P(e) {
  return y(1, e);
}
async function K(e) {
  await P(e), await new Promise((t2) => requestAnimationFrame(() => {
    e?.aborted || t2();
  }));
}
var U = f.map((e) => new s(e));
var z = new s("total");

export {
  o,
  s,
  F,
  T,
  y,
  P,
  K
};
//# sourceMappingURL=chunk-HDFIZIZL.js.map
