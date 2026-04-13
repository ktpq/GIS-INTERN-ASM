import {
  c as c2,
  d,
  e as e2,
  e2 as e3,
  f as f3,
  o as o2,
  p,
  t,
  t2
} from "./chunk-2T65WP7D.js";
import {
  n as n4
} from "./chunk-NRIYMVEQ.js";
import {
  N,
  R
} from "./chunk-JSUZNUEF.js";
import {
  n as n3
} from "./chunk-J5XU3PTN.js";
import {
  setAssetPath
} from "./chunk-S64TOCJ5.js";
import {
  f as f2,
  l as l2,
  w
} from "./chunk-CD6IOUFB.js";
import {
  m as m2
} from "./chunk-B4Y3SDRP.js";
import {
  l
} from "./chunk-LHMCLOXR.js";
import {
  n as n5
} from "./chunk-FCTZWJBQ.js";
import {
  _
} from "./chunk-5AVTDH3Y.js";
import {
  s2 as s
} from "./chunk-SG23UZYK.js";
import {
  a3 as a2,
  c
} from "./chunk-GUGGSMY4.js";
import {
  f
} from "./chunk-E7T52Q27.js";
import {
  L,
  e,
  m2 as m,
  n2,
  o4 as o,
  u2 as u
} from "./chunk-2DNVIDFH.js";
import {
  a,
  n2 as n
} from "./chunk-6SPQI6I6.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@esri/calcite-components/dist/index.js
var assetPathChanged = false;
var setAssetPath2 = (path) => {
  assetPathChanged = true;
  setAssetPath(path);
};

// node_modules/@arcgis/core/widgets/support/componentsUtils.js
var n6;
function r() {
  assetPathChanged || setAssetPath2(_(n5(n6)));
}
function c3(t6) {
  const o5 = [];
  for (const s3 of Object.keys(t6)) customElements.get(`calcite-${s3}`) || o5.push(t6[s3]?.());
  return o5.length > 0 ? Promise.all(o5) : null;
}
n6 = "components/assets";

// node_modules/@arcgis/core/core/domUtils.js
function n7(n10) {
  return "string" == typeof n10 ? document.getElementById(n10) : n10 ?? null;
}
function t3(n10, t6) {
  for (; ; ) {
    const e6 = n10.firstChild;
    if (!e6) break;
    t6.appendChild(e6);
  }
}

// node_modules/@arcgis/core/libs/maquette-advanced-projector/advanced-projector-options.js
var e4 = { handleInterceptedEvent: (e6, p2, t6, n10) => (e6.scheduleRender(), p2.properties[`on${n10.type}`].apply(p2.properties.bind || t6, [n10])) };

// node_modules/@arcgis/core/libs/maquette-advanced-projector/utils.js
var e5 = { namespace: void 0, performanceLogger: () => {
}, eventHandlerInterceptor: void 0, styleApplyer: (e6, t6, r2) => {
  t6.startsWith("-") ? e6.style.setProperty(t6, r2) : e6.style[t6] = r2;
} };
var t4 = (t6) => __spreadValues(__spreadValues({}, e5), t6);

// node_modules/@arcgis/core/libs/maquette-advanced-projector/projector.js
var o3 = (e6, r2) => {
  const t6 = [];
  for (; e6 && e6 !== r2; ) t6.push(e6), e6 = e6.parentNode;
  return t6;
};
var n8 = (e6, r2) => e6.find(r2);
var d2 = (e6, r2, t6 = false) => {
  let o5 = e6;
  return r2.forEach((e7, d3) => {
    const s3 = o5?.children ? n8(o5.children, (r3) => r3.domNode === e7) : void 0;
    t6 && !s3 && d3 !== r2.length - 1 || (o5 = s3);
  }), o5;
};
var s2 = (n10) => {
  let s3;
  const c4 = __spreadValues(__spreadValues({}, e4), n10), i = t4(c4), a3 = i.performanceLogger;
  let m3, p2 = true, l3 = false;
  const f4 = [], u2 = [], h = (e6, r2, t6) => {
    let n11;
    i.eventHandlerInterceptor = (e7, r3, t7, i2) => function(e8) {
      let r4;
      a3("domEvent", e8);
      const t8 = o3(e8.currentTarget, n11.domNode), i3 = t8.some((e9) => customElements.get(e9?.tagName?.toLowerCase()));
      if (e8.eventPhase === Event.CAPTURING_PHASE || !i3) t8.reverse(), r4 = d2(n11.getLastRender(), t8);
      else {
        const t9 = e8.composedPath(), o5 = t9.slice(t9.indexOf(e8.currentTarget), t9.indexOf(n11.domNode)).reverse();
        r4 = d2(n11.getLastRender(), o5, true);
      }
      let m5;
      return r4 && (m5 = c4.handleInterceptedEvent(s3, r4, this, e8)), a3("domEventProcessed", e8), m5;
    }, c4.postProcessProjectionOptions?.(i);
    const m4 = t6();
    n11 = e6(r2, m4, i), i.eventHandlerInterceptor = void 0, f4.push(n11), u2.push(t6), c4.afterFirstVNodeRendered && c4.afterFirstVNodeRendered(n11, m4);
  };
  let v = () => {
    if (m3 = void 0, p2) {
      p2 = false, a3("renderStart", void 0);
      for (let r2 = 0; r2 < f4.length; r2++) {
        const t6 = u2[r2]();
        a3("rendered", void 0);
        try {
          f4[r2].update(t6);
        } catch (e6) {
          console.error(e6);
        }
        a3("patched", void 0);
      }
      a3("renderDone", void 0), p2 = true;
    }
  };
  return c4.modifyDoRenderImplementation && (v = c4.modifyDoRenderImplementation(v, f4, u2)), s3 = { renderNow: v, scheduleRender: () => {
    m3 || l3 || (m3 = requestAnimationFrame(v));
  }, stop: () => {
    m3 && (cancelAnimationFrame(m3), m3 = void 0), l3 = true;
  }, resume: () => {
    l3 = false, p2 = true, s3.scheduleRender();
  }, append: (r2, t6) => {
    h(n4.append, r2, t6);
  }, insertBefore: (r2, t6) => {
    h(n4.insertBefore, r2, t6);
  }, merge: (r2, t6) => {
    h(n4.merge, r2, t6);
  }, replace: (r2, t6) => {
    h(n4.replace, r2, t6);
  }, detach: (e6) => {
    for (let r2 = 0; r2 < u2.length; r2++) if (u2[r2] === e6) return u2.splice(r2, 1), f4.splice(r2, 1)[0];
    throw new Error("renderFunction was not found");
  } }, s3;
};

// node_modules/@arcgis/core/widgets/support/tests.js
var t5 = /* @__PURE__ */ new Set();
function n9(e6) {
  t5.add(e6), e6.finally(() => t5.delete(e6));
}
function o4(t6) {
  return e();
}

// node_modules/@arcgis/core/widgets/Widget.js
var H;
var $ = 0;
function D(e6, t6) {
  const r2 = Object.prototype.hasOwnProperty;
  for (const s3 in t6) r2.call(t6, s3) && r2.call(e6, s3) && (null != e6[s3] && null != t6[s3] && "object" == typeof e6[s3] && "object" == typeof t6[s3] ? D(e6[s3], t6[s3]) : e6[s3] = t6[s3]);
  return e6;
}
var U = s2({ postProcessProjectionOptions(e6) {
  const t6 = e6.eventHandlerInterceptor, r2 = /capture$/i;
  e6.eventHandlerInterceptor = (e7, s3, o5, i) => {
    const n10 = t6?.(e7, s3, o5, i), d3 = r2.test(e7);
    if (!((e7 = e7.replace(r2, "")).toLowerCase() in o5) || d3) {
      const t7 = e7[2].toLowerCase() + e7.slice(3), r3 = (e8) => n10?.call(o5, e8);
      o5.addEventListener(t7, r3, d3);
      const s4 = () => o5.removeEventListener(t7, r3, d3), a3 = i.afterRemoved;
      i.afterRemoved = (e8) => {
        a3?.(e8), s4();
      };
    }
    return n10;
  };
}, handleInterceptedEvent(e6, t6, r2, s3) {
  const { eventPhase: o5, type: i } = s3, n10 = o5 === Event.CAPTURING_PHASE;
  let d3 = `on${i}${n10 ? "capture" : ""}`;
  const a3 = t6.properties;
  (a3 && d3 in a3 || (d3 = `on${i[0].toUpperCase()}${i.slice(1)}${n10 ? "Capture" : ""}`, a3 && d3 in a3)) && (t2(), e6.scheduleRender(), a3[d3].call(a3.bind || r2, s3));
} });
var z = false;
var x = class extends m2(l) {
  static {
    this[H] = true;
  }
  constructor(e6, r2) {
    super(e6, r2), this._attached = false, this._projector = U, this._readyForTrueRender = false, this.key = this, this.autoRenderingEnabled = true, this.topLayerDisabled = false, this._loadLocale = L(async () => {
      if (this._messageBundleProps?.length) {
        const e7 = await Promise.allSettled(this._messageBundleProps.map(async ({ bundlePath: e8, propertyName: r3 }) => {
          if (this.destroyed) return;
          let s4 = await N(e8);
          this.destroyed || (this.uiStrings && Object.keys(this.uiStrings) && (s4 = D(a(s4), this.uiStrings)), this[r3] = s4);
        }));
        if (this.destroyed) return;
        for (const t6 of e7) "rejected" === t6.status && n.getLogger(this).error("widget-intl:locale-error", this.declaredClass, t6.reason);
      }
      await this.loadLocale();
    }), this.addHandles(o4()), r();
    const s3 = "esri-widget-uid-" + n3(), o5 = this.render.bind(this);
    this._trackingTarget = new s(() => {
      this.autoRenderingEnabled && this.scheduleRender();
    });
    const i = () => ({ vnodeSelector: "div", properties: { key: `${s3}-hidden`, class: "", styles: { display: "none" } }, domNode: null, children: void 0, text: void 0 }), n10 = () => {
      if (!this._readyForTrueRender || this.destroyed) return null;
      const e7 = o5() ?? i(), t6 = e7.properties ??= {};
      if (t6.key ??= s3, f3(e7.vnodeSelector)) {
        if (!this.visible) return i();
      } else this.visible ? t6.styles || (t6.styles = {}) : (t6.class = "", t6.styles = { display: "none" }), t6.styles.display ??= "";
      let r3 = 0;
      return e7.children?.forEach((e8) => {
        f3(e8.vnodeSelector) || (e8.properties ??= {}, e8.properties.key ??= `${this.id}--${r3++}`);
      }), d(this, e7);
    };
    this.render = () => {
      if (z) return n10();
      let e7 = e3(this) ?? null;
      if (e7) return e7;
      this._trackingTarget.clear(), z = true;
      try {
        e7 = f(this._trackingTarget, n10);
      } catch (t6) {
        throw n.getLogger(this).error(t6), t6;
      } finally {
        z = false;
      }
      return e7 && c2(this, e7), e7;
    };
    const l3 = this.beforeFirstRender();
    l3 ? this._resourcesFetch = l3.then(() => {
      this.destroyed || (this._readyForTrueRender = true, this._postInitialize());
    }) : (this._resourcesFetch = Promise.resolve().then(() => {
      this.destroyed || this._postInitialize();
    }), this._readyForTrueRender = true), this.addResolvingPromise(this._resourcesFetch), n9(this._resourcesFetch);
  }
  normalizeCtorArgs(e6, t6) {
    const r2 = __spreadValues({}, e6);
    return t6 && (r2.container = t6), r2;
  }
  postInitialize() {
  }
  beforeFirstRender() {
    const e6 = this.loadDependencies();
    return this._messageBundleProps?.length || e6 ? Promise.all([e6, this._loadLocale()]).then(() => {
    }).catch(m) : null;
  }
  loadDependencies() {
    return null;
  }
  loadLocale() {
    return null;
  }
  destroy() {
    this.destroyed || (u(this._trackingTarget), u(this.viewModel), this._detach(this.container), this._set("container", null), this.render = () => null, this._projector = null, o2(this));
  }
  get container() {
    return this._get("container");
  }
  set container(e6) {
    this._get("container") || this._set("container", n7(e6));
  }
  get destroyed() {
    return super.destroyed;
  }
  get domNode() {
    return this.container;
  }
  set domNode(e6) {
    this.container = e6;
  }
  get icon() {
    return null;
  }
  set icon(e6) {
    this._overrideIfSome("icon", e6);
  }
  get id() {
    return this._get("id") || this.container?.id || Date.now().toString(16) + "-widget-" + $++;
  }
  set id(e6) {
    e6 && this._set("id", e6);
  }
  get label() {
    return this.declaredClass.split(".").pop();
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  get renderable() {
    return this._resourcesFetch;
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e6) {
    this._set("visible", e6);
  }
  get [(H = t, e2)]() {
    return { projector: this._projector };
  }
  static {
    this.vnodeSelector = "div";
  }
  render() {
    throw new Error("not implemented");
  }
  removeContainer() {
    this._set("container", null);
  }
  scheduleRender() {
    this.destroyed || (o2(this), this._projector.scheduleRender());
  }
  classes(...e6) {
    return p.apply(this, e6);
  }
  renderNow() {
    o2(this), this._projector.renderNow();
  }
  _postInitialize() {
    if (this.destroyed) return;
    this.scheduleRender(), this._delegatedEventNames?.length && this.addHandles(l2(() => this.viewModel, (e7, t6) => {
      t6 && this.removeHandles("delegated-events"), e7 && n2(e7) && this.addHandles(this._delegatedEventNames.map((t7) => o(e7, t7, (e8) => {
        this.emit(t7, e8);
      })), "delegated-events");
    }, w)), this.postInitialize();
    const e6 = async () => {
      await this._loadLocale().catch(m), this.scheduleRender();
    };
    this.addHandles([R(e6), l2(() => this.uiStrings, e6)]), this.addHandles(f2(() => this.container, (e7) => {
      this.destroyed || (e7.closest("[arcgis-widget-wrapped]") || (this.topLayerDisabled = true, this.announceDeprecation?.()), this._attach(e7));
    }, { initial: true, once: true }));
  }
  _attach(e6) {
    e6 && (this._projector.merge(e6, this.render), this._attached = true);
  }
  _detach(e6) {
    this._attached && (this._projector.detach(this.render), this._attached = false), e6?.parentNode?.removeChild(e6);
  }
};
__decorate([a2()], x.prototype, "_readyForTrueRender", void 0), __decorate([a2({ value: null })], x.prototype, "container", null), __decorate([a2()], x.prototype, "icon", null), __decorate([a2()], x.prototype, "id", null), __decorate([a2()], x.prototype, "label", null), __decorate([a2()], x.prototype, "renderable", null), __decorate([a2()], x.prototype, "uiStrings", void 0), __decorate([a2()], x.prototype, "viewModel", void 0), __decorate([a2({ value: true })], x.prototype, "visible", null), __decorate([a2()], x.prototype, "key", void 0), __decorate([a2()], x.prototype, "children", void 0), __decorate([a2()], x.prototype, "afterCreate", void 0), __decorate([a2()], x.prototype, "afterUpdate", void 0), __decorate([a2()], x.prototype, "afterRemoved", void 0), __decorate([a2()], x.prototype, "topLayerDisabled", void 0), x = __decorate([c("esri.widgets.Widget")], x);
var O = x;

export {
  n7 as n,
  t3 as t,
  c3 as c,
  O
};
//# sourceMappingURL=chunk-EYKHAA3V.js.map
