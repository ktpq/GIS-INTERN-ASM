import {
  r
} from "./chunk-6TJKPIZ2.js";
import {
  m
} from "./chunk-VEYY6VCN.js";
import {
  l
} from "./chunk-LD7VLL5E.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  $,
  e,
  o,
  s,
  u3 as u,
  w
} from "./chunk-2KP24SU5.js";
import {
  N
} from "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/analysis/AnalysisView.js
var n = class extends m(l) {
  constructor() {
    super(...arguments), this.parent = null, this._userInteractive = false, this._interactiveViewModelCount = 0;
  }
  get interactive() {
    return this._interactiveViewModelCount > 0 || this._userInteractive;
  }
  set interactive(e2) {
    this._userInteractive = e2;
  }
  get updating() {
    return false;
  }
  get visible() {
    return (this.parent?.visible && !this.parent.suspended) ?? true;
  }
  set visible(e2) {
    this._overrideIfSome("visible", e2);
  }
  forceInteractive() {
    return this._interactiveViewModelCount++, e(() => this._interactiveViewModelCount--);
  }
};
__decorate([a({ constructOnly: true })], n.prototype, "parent", void 0), __decorate([a({ constructOnly: true })], n.prototype, "view", void 0), __decorate([a({ type: Boolean })], n.prototype, "interactive", null), __decorate([a()], n.prototype, "_userInteractive", void 0), __decorate([a({ readOnly: true })], n.prototype, "updating", null), __decorate([a()], n.prototype, "visible", null), __decorate([a()], n.prototype, "_interactiveViewModelCount", void 0), n = __decorate([c("esri.views.analysis.AnalysisView")], n);

// node_modules/@arcgis/core/views/2d/analysis/AnalysisView2D.js
var i = class extends n {
};
i = __decorate([c("esri.views.2d.analysis.AnalysisView2D")], i);

// node_modules/@arcgis/core/views/analysis/ExclusiveOperationManager.js
var s2 = class {
  constructor() {
    this._currentOperationSignal = r(null);
  }
  get currentOperationType() {
    return this._currentOperationSignal.value?.type ?? null;
  }
  destroy() {
    this.stop();
  }
  async start(i2, s3, l2) {
    const p = this._currentOperationSignal.value;
    p?.stop();
    const c2 = new AbortController(), u2 = l2?.signal, h = AbortSignal.any([c2.signal, u2].filter(N)), m2 = $();
    let g = false;
    const y = () => {
      g || (g = true, m2.reject(u()));
    }, v = { type: i2, resolve: (r2) => {
      g || (g = true, m2.resolve(r2));
    }, reject: y, promise: m2.promise, stop: () => c2.abort(), handles: [] };
    this._currentOperationSignal.value = v, v.handles.push(w(u2, () => {
      c2.abort();
    }), w(h, () => {
      o(v.handles), g || y();
    }));
    try {
      return p && (await p.promise.catch(() => {
      }), s(h)), await s3(v, h), await m2.promise;
    } finally {
      o(v.handles), this._currentOperationSignal.value === v && (this._currentOperationSignal.value = null);
    }
  }
  stop() {
    this._currentOperationSignal.value?.stop();
  }
};

export {
  i,
  s2 as s
};
//# sourceMappingURL=chunk-QU3HBHLS.js.map
