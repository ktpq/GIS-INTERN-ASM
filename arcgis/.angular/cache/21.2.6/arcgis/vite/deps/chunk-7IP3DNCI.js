import {
  f as f2,
  l
} from "./chunk-55ZAYF5P.js";
import {
  s
} from "./chunk-FMPS52FS.js";
import {
  s as s2
} from "./chunk-MSRN4ADD.js";
import {
  a,
  f
} from "./chunk-E73BLMZG.js";
import {
  proxyExports
} from "./chunk-HUOYETLD.js";
import {
  GenericController,
  css,
  makeRuntime
} from "./chunk-K65EA25C.js";

// node_modules/@arcgis/map-components/dist/chunks/runtime.js
import "C:/Users/kiww/Desktop/cdg/arcgis/node_modules/@arcgis/map-components/dist/cdn/main.css";

// node_modules/@arcgis/core/applications/Components/reactiveUtils.js
function s3() {
  return new s();
}
function i(r2) {
  return new s2(r2);
}
function a2(r2) {
  a(r2);
}
function p(r2, c3) {
  return f(r2, c3);
}

// node_modules/@arcgis/map-components/dist/chunks/runtime.js
var o = css`:host{display:block;box-sizing:border-box;*,*:before,*:after{box-sizing:inherit}}:host([hidden]){display:none}:host(:not(arcgis-basemap-gallery-item,arcgis-layer-list-item,arcgis-print-custom-text-elements,arcgis-print-dpi-input,arcgis-print-export-button,arcgis-print-exported-link,arcgis-print-exports-panel,arcgis-print-format-select,arcgis-print-layout-advanced-options,arcgis-print-layout-panel,arcgis-print-main-panel,arcgis-print-map-only-advanced-options,arcgis-print-map-only-panel,arcgis-print-out-spatial-reference-input,arcgis-print-preview-input,arcgis-print-scale-section,arcgis-print-template-select,arcgis-print-template-selector,arcgis-labeled-switch,arcgis-measurement-content,arcgis-version-management-service-item,arcgis-version-management-version-item,arcgis-version-management-version-list,arcgis-version-management-version-properties,arcgis-video-player-action-bar,arcgis-video-player-actions-group,arcgis-video-player-controls-group,arcgis-video-player-metadata,arcgis-video-player-settings,arcgis-video-player-slider)){font-family:var(--calcite-font-family)}`;
var e = makeRuntime({ defaultAssetPath: "https://js.arcgis.com/5.0.15/map-components/", hydratedAttribute: "hydrated", commonStyles: o });
var { customElement: l2, getAssetPath: m, setAssetPath: d } = e;
e.t = a2;
e.o = s3;
e.c = i;
e.r = p;

// node_modules/@arcgis/map-components/dist/chunks/component-utils.js
function N(e2) {
  e2.el.childElem && (e2.el.childElem.ownedBy = e2.el);
  const t = g(e2);
  if (!t) {
    const r2 = y(e2);
    if (!r2) {
      c(e2);
      return;
    }
    return a3(r2, e2, true), r2;
  }
  return E(t, e2.el.parent) || (e2.el.parent = t, t.localName === "arcgis-expand" ? h(t, e2) : a3(t, e2, false)), t;
}
function g({ el: e2 }) {
  for (let t = e2.parentElement; t; t = t?.parentElement ?? null) {
    if (o2.has(t.localName))
      return t;
    if ("ownedBy" in t && t.ownedBy instanceof HTMLElement && o2.has(t.ownedBy.localName))
      return t.ownedBy;
  }
}
var o2 = /* @__PURE__ */ new Set(["arcgis-map", "arcgis-scene", "arcgis-link-chart", "arcgis-expand"]);
function E(e2, t) {
  return e2 !== t ? false : e2.localName === "arcgis-expand";
}
function s4(e2, t, r2 = "arcgisReady") {
  const i2 = e2;
  if (i2.view)
    t(i2.view);
  else {
    let n = function(l3) {
      l3.target === e2 && (s4(e2, t, r2), e2.removeEventListener(r2, n));
    };
    e2.addEventListener(r2, n);
  }
}
var h = (e2, t) => s4(e2, (r2) => {
  const i2 = d2(t);
  if (t.el.shadowRoot ? e2.content = t.el : t.el.childElem && e2.content != null && i2.append(t.el.childElem), t.el.view = r2, e2.referenceElement) {
    t.referenceElement = e2.referenceElement;
    return;
  }
  l(
    () => e2.referenceElement,
    (n) => {
      t.referenceElement = n;
    },
    {
      once: true
    }
  );
});
var a3 = (e2, t, r2) => s4(
  e2,
  (i2) => {
    r2 && c(t), t.el.view = i2, t.referenceElement = e2;
  },
  "arcgisViewReadyChange"
);
function B(e2, t) {
  return t === void 0 || e2?.targetGeometry !== t?.targetGeometry || e2?.rotation !== t?.rotation || e2?.scale !== t?.scale;
}
function m2(e2, t) {
  return f3(t?.center, e2);
}
function f3(e2, t) {
  if (typeof t == "string")
    return f3(e2, t.split(",").map(Number));
  if (!e2)
    return t;
  if (Array.isArray(t)) {
    const r2 = t[0], i2 = t[1], n = t.length > 2 ? t[2] : void 0;
    if (r2 !== e2.longitude || i2 !== e2.latitude || n !== e2.z)
      return t;
  } else if (t && !e2?.equals(t))
    return t;
}
function c(e2) {
  e2.el.childElem && d2(e2).append(e2.el.childElem);
}
function d2(e2) {
  return e2.el.shadowRoot ?? e2.el;
}
function y(e2, t) {
  const r2 = e2.referenceElement;
  if (typeof r2 != "string")
    return r2 ?? void 0;
  const i2 = r2.includes("#") || r2.includes(".") || r2.includes("["), n = e2.el.getRootNode();
  return (i2 ? void 0 : n.querySelector(`#${r2}`)) ?? n.querySelector(r2) ?? void 0;
}

// node_modules/@arcgis/map-components/dist/chunks/useView.js
var a4 = (o3) => h2(o3);
var c2 = class extends GenericController {
  #e;
  constructor(e2) {
    super(e2), this.setProvisionalExports(void 0);
  }
  hostConnected() {
    this.component.manager.loadedCalled && N(this.component);
  }
  hostLoad() {
    this.component.manager.destroyed;
  }
  hostLoaded() {
    const { el: e2 } = this.component, n = e2.shadowRoot?.firstElementChild ?? e2.firstElementChild ?? void 0;
    e2.childElem ??= n, this.#e = f2(
      () => this.component.view != null,
      () => {
        this.component.arcgisReady.emit();
      },
      { once: true, initial: true, sync: true }
    ), e2.isConnected && N(this.component);
  }
  hostDisconnected() {
    typeof this.component.el.childElem == "object" && this.component.view?.ui?.remove(this.component.el.childElem), this.#e?.remove();
  }
  hostUpdate(e2) {
    e2.has("referenceElement") && N(this.component);
  }
};
var h2 = proxyExports(c2);

export {
  s3 as s,
  a2 as a,
  l2 as l,
  m,
  B,
  m2,
  a4 as a2,
  c2 as c
};
//# sourceMappingURL=chunk-7IP3DNCI.js.map
