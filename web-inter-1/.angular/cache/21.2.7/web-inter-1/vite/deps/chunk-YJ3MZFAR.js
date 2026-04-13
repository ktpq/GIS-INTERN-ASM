import {
  l as l2,
  w
} from "./chunk-M44GXGOJ.js";
import {
  t2
} from "./chunk-HXIOMN57.js";
import {
  K
} from "./chunk-HDFIZIZL.js";
import {
  e2 as e,
  l3 as l,
  t2 as t
} from "./chunk-WARIPJQI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/support/vnodeCache.js
var n = /* @__PURE__ */ new Map();
function t3() {
  n.clear();
}
function e2(t7) {
  return n.get(t7);
}
function c(t7, e6) {
  n.set(t7, e6);
}
function o(t7) {
  n.delete(t7);
}

// node_modules/@arcgis/core/widgets/support/widgetUtils.js
function v(...t7) {
  const n4 = t2.acquire();
  for (let e6 = 0; e6 < t7.length; e6++) {
    const o4 = t7[e6], i2 = typeof o4;
    if ("string" === i2) n4.push(o4);
    else if (Array.isArray(o4)) n4.push.apply(n4, o4);
    else if ("object" === i2) for (const e7 in o4) o4[e7] && n4.push(e7);
  }
  const o3 = n4.join(" ");
  return t2.release(n4), o3;
}
var p = (() => {
  const e6 = /* @__PURE__ */ new Map(), o3 = new ResizeObserver((t7) => {
    t3();
    for (const n4 of t7) e6.get(n4.target)?.(n4);
  }), s2 = (t7, i2, r) => (e6.set(t7, i2), o3.observe(t7, r), e(() => {
    o3.unobserve(t7), e6.delete(t7);
  }));
  return (e7, o4, c3) => {
    let a3 = null;
    return t([l2(() => "function" == typeof e7 ? e7() : e7, (e8) => {
      a3?.remove(), e8 && (a3 = s2(e8, o4, c3));
    }, w), e(() => a3?.remove())]);
  };
})();
function L(e6) {
  const t7 = e6?.closest("[dir]");
  return null !== t7 && t7 instanceof HTMLElement && "rtl" === t7.dir || "rtl" === document.dir;
}
function E(e6) {
  const t7 = "data-node-ref";
  this[e6.getAttribute(t7)] = null;
}
function h(e6) {
  const t7 = "data-node-ref";
  this[e6.getAttribute(t7)] = e6;
}
async function w2(e6, t7) {
  await K(l(t7));
  const n4 = "function" == typeof e6 ? e6() : e6;
  n4 && ("setFocus" in n4 && "function" == typeof n4.setFocus ? await n4.setFocus() : n4 instanceof HTMLElement && n4.focus());
}

// node_modules/@arcgis/core/core/keyboard.js
function n2(n4) {
  return "Enter" === n4 || " " === n4;
}

// node_modules/@arcgis/core/widgets/support/symbols.js
var t4 = /* @__PURE__ */ Symbol("widget");
var e3 = /* @__PURE__ */ Symbol("widget-test-data");

// node_modules/@arcgis/core/widgets/support/jsxWidgetSupport.js
var o2 = [];
var n3 = {};
var i = /* @__PURE__ */ new Map();
function d(e6, t7) {
  let r = t7.children;
  if (r?.length) for (let o3 = 0; o3 < r.length; ++o3) r[o3] = d(e6, r[o3]);
  else r = o2;
  const i2 = t7.vnodeSelector;
  if (f(i2)) {
    const o3 = t7.properties || n3, d2 = o3.key || i2, f3 = { key: d2, afterCreate: c2, afterUpdate: s, afterRemoved: a, parentWidget: e6, widgetConstructor: i2, widgetProperties: __spreadProps(__spreadValues({}, o3), { key: d2, children: r }) };
    return { vnodeSelector: i2.vnodeSelector, properties: f3, children: void 0, text: void 0, domNode: null };
  }
  return t7;
}
function c2(t7, o3, n4, { parentWidget: d2, widgetConstructor: c3, widgetProperties: s2 }) {
  const f3 = new c3(s2);
  f3.container = t7, i.set(t7, f3), f3.afterCreate?.(f3, t7), d2.addHandles(e(() => a(t7))), queueMicrotask(() => {
    f3[e3].projector?.renderNow();
  });
}
function s(e6, t7, r, { widgetProperties: o3 }) {
  const n4 = i.get(e6);
  n4 && (n4.set(o3), n4.afterUpdate?.(n4, e6));
}
function a(e6) {
  const t7 = i.get(e6);
  t7 && (t7.afterRemoved?.(t7, e6), t7.destroy(), i.delete(e6));
}
function f(e6) {
  return "function" == typeof e6 && e6[t4];
}

// node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js
function e4(e6) {
  return (s2, r) => {
    s2.hasOwnProperty("_messageBundleProps") || (s2._messageBundleProps = s2._messageBundleProps ? s2._messageBundleProps.slice() : []);
    s2._messageBundleProps.push({ bundlePath: e6, propertyName: r });
  };
}

// node_modules/@arcgis/core/widgets/support/decorators/vmEvent.js
function e5(e6) {
  return (a3) => {
    a3.hasOwnProperty("_delegatedEventNames") || (a3._delegatedEventNames = a3._delegatedEventNames ? a3._delegatedEventNames.slice() : []);
    const n4 = a3._delegatedEventNames;
    e6 = Array.isArray(e6) ? e6 : t5(e6), n4.push(...e6);
  };
}
function t5(e6) {
  return e6.split(",").map((e7) => e7.trim());
}

// node_modules/@arcgis/core/widgets/support/widget.js
var a2 = function(e6) {
  return { vnodeSelector: "", properties: void 0, children: void 0, text: e6.toString(), domNode: null };
};
var u = function(e6, o3) {
  for (var r = 0, t7 = e6.length; r < t7; r++) {
    var n4 = e6[r];
    Array.isArray(n4) ? u(n4, o3) : null != n4 && false !== n4 && (n4.hasOwnProperty("vnodeSelector") || (n4 = a2(n4)), o3.push(n4));
  }
};
var f2 = function(e6, o3) {
  for (var r = [], t7 = 2; t7 < arguments.length; t7++) r[t7 - 2] = arguments[t7];
  if (1 === r.length && "string" == typeof r[0]) return { vnodeSelector: e6, properties: o3 || void 0, children: void 0, text: r[0], domNode: null };
  var n4 = [];
  return u(r, n4), { vnodeSelector: e6, properties: o3 || void 0, children: n4, text: void 0, domNode: null };
};
var p2 = v;
var v2 = e4;
var m = e5;
var y2 = L;
function x(e6, r, ...t7) {
  return "function" != typeof e6 || f(e6) ? f2(e6, r ?? null, ...t7) : e6(r, ...t7);
}
function S(...e6) {
  return e6;
}
function b(e6) {
  return e6 && "function" == typeof e6.render;
}
function N(e6) {
  return e6 && "function" == typeof e6.postMixInProperties && "function" == typeof e6.buildRendering && "function" == typeof e6.postCreate && "function" == typeof e6.startup;
}

export {
  t4 as t,
  e3 as e,
  d,
  f,
  t3 as t2,
  e2,
  c,
  o,
  n2 as n,
  L,
  E,
  h,
  w2 as w,
  p2 as p,
  v2 as v,
  m,
  y2 as y,
  x,
  S,
  b,
  N
};
//# sourceMappingURL=chunk-YJ3MZFAR.js.map
