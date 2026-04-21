import {
  proxyExports
} from "./chunk-PQURDETH.js";
import {
  GenericController,
  createEventFactory,
  css,
  isEsriInternalEnv,
  makeRuntime,
  retrieveComponent,
  trackKey,
  trackPropKey
} from "./chunk-SIEFVWAL.js";
import {
  a as a2,
  f as f2,
  l
} from "./chunk-6CYBR6FP.js";
import {
  s
} from "./chunk-TUJXLUEV.js";
import {
  s as s2
} from "./chunk-2HP4RAZC.js";
import {
  a,
  f
} from "./chunk-43YEPY4V.js";

// node_modules/@arcgis/map-components/dist/chunks/runtime.js
import "C:/Users/kiww/Desktop/cdg/web-inter-1/node_modules/@arcgis/map-components/dist/cdn/main.css";

// node_modules/@arcgis/core/applications/Components/reactiveUtils.js
function s3() {
  return new s();
}
function i(r2) {
  return new s2(r2);
}
function a3(r2) {
  a(r2);
}
function p(r2, c4) {
  return f(r2, c4);
}

// node_modules/@arcgis/map-components/dist/chunks/runtime.js
var o = css`:host{display:block;box-sizing:border-box;*,*:before,*:after{box-sizing:inherit}}:host([hidden]){display:none}:host(:not(arcgis-basemap-gallery-item,arcgis-layer-list-item,arcgis-print-custom-text-elements,arcgis-print-dpi-input,arcgis-print-export-button,arcgis-print-exported-link,arcgis-print-exports-panel,arcgis-print-format-select,arcgis-print-layout-advanced-options,arcgis-print-layout-panel,arcgis-print-main-panel,arcgis-print-map-only-advanced-options,arcgis-print-map-only-panel,arcgis-print-out-spatial-reference-input,arcgis-print-preview-input,arcgis-print-scale-section,arcgis-print-template-select,arcgis-print-template-selector,arcgis-labeled-switch,arcgis-measurement-content,arcgis-version-management-service-item,arcgis-version-management-version-item,arcgis-version-management-version-list,arcgis-version-management-version-properties,arcgis-video-player-action-bar,arcgis-video-player-actions-group,arcgis-video-player-controls-group,arcgis-video-player-metadata,arcgis-video-player-settings,arcgis-video-player-slider)){font-family:var(--calcite-font-family)}`;
var e = makeRuntime({ defaultAssetPath: "https://js.arcgis.com/5.0.16/map-components/", hydratedAttribute: "hydrated", commonStyles: o });
var { customElement: l2, getAssetPath: m, setAssetPath: d } = e;
e.t = a3;
e.o = s3;
e.c = i;
e.r = p;

// node_modules/@arcgis/lumina/dist/controllers/accessor/index.js
var reEmitEvent = (getEventedAccessor, eventName) => {
  const component = retrieveComponent();
  const manager = component.manager;
  manager.onLoaded(() => manager.onLifecycle(() => a2(getEventedAccessor, eventName, emitter.emit)));
  const emitter = createEventFactory();
  if (isEsriInternalEnv()) {
    if (typeof emitter !== "object" || emitter === null || !("emit" in emitter) || typeof emitter.emit !== "function") {
      throw new Error(`Expected to find $createEvent static property on Lumina's LitElement`);
    }
  }
  return emitter;
};
var makeAccessorController = (createInstance, _options) => (component) => proxy(component, createInstance);
var AccessorController = class extends GenericController {
  constructor(component, createInstance) {
    super(component);
    this.Y = /* @__PURE__ */ new Map();
    this.A = void 0;
    this.#exportsObservable = s3();
    const that = this;
    that.#createInstance = createInstance;
    that.Z();
    that.setProvisionalExports(
      makeBinderProxy(
        component,
        new WeakRef(that),
        component.M.length - 1,
        that.instance,
        that.Y
      ),
      false
    );
    trackPropKey(
      component,
      (resolved) => {
        if (resolved) {
          const handle = l(
            // If the property to which controller is assigned is public, the user may
            // manually create an accessor instance and assign it to this property
            // We pick it up and replace our created accessor instance with user's.
            () => component[resolved],
            (newInstance) => {
              if (newInstance === that.instance) {
                return;
              }
              const oldInstance = that.instance;
              that.exports = newInstance;
              that.instance = newInstance;
              that.Y.forEach(
                (propName, propertyName) => component.requestUpdate(propName, oldInstance[propertyName])
              );
              if (that.#isInstanceOwner) {
                oldInstance.destroy();
              }
              that.#isInstanceOwner = false;
            },
            { sync: true }
          );
          that.onDestroy(handle.remove);
        }
      },
      that.exports
    );
  }
  #isInstanceOwner;
  #exportsObservable;
  #createInstance;
  get exports() {
    a3(this.#exportsObservable);
    return super.exports;
  }
  set exports(value) {
    super.exports = value;
    this.#exportsObservable.notify();
  }
  /** @private */
  Z() {
    const that = this;
    that.instance = "prototype" in that.#createInstance && "declaredClass" in that.#createInstance.prototype ? new that.#createInstance() : that.#createInstance();
    that.#isInstanceOwner = true;
  }
  hostConnected() {
    this.exports = this.instance;
  }
  // FEATURE: is there a way to detect that accessor does not need to be destroyed?
  //   Is it possible to write accessors that don't need to be destroyed?
  hostDestroy() {
    if (this.#isInstanceOwner) {
      this.instance.destroy?.();
    }
  }
};
var proxy = proxyExports(AccessorController);
var makeBinderProxy = (component, accessorControllerRef, accessorControllerIndex, instance, boundProperties) => new Proxy(instance, {
  get: (target, propertyName) => {
    const value = target[propertyName];
    if (
      // Possibly called by the JS engine
      typeof propertyName === "symbol" || // Already bound?
      boundProperties.has(propertyName)
    ) {
      return value;
    }
    const accessorController = component.M[accessorControllerIndex];
    accessorController.A = propertyName;
    return trackKey(
      component,
      (resolved) => {
        accessorController.A = void 0;
        if (resolved !== void 0) {
          const propName = resolved.key;
          boundProperties.set(propertyName, propName);
          const descriptor = component.constructor.getPropertyOptions(
            propName
          );
          if (isEsriInternalEnv()) {
            if (!(propertyName in instance)) {
              throw new Error(`"${propertyName}" does not exist on the accessor instance`);
            }
            const accessorController2 = component.M[accessorControllerIndex];
            if (descriptor.i !== void 0 && descriptor.i !== accessorControllerIndex) {
              console.error(component.M[descriptor.i], accessorController2);
              throw Error(
                `Expected property "${propName}" to be bound to the controller at index ${descriptor.i}, but tried to bind it to a controller at index ${accessorControllerIndex}. Double check whether you are calling useAccessor() conditionally in a way that is not supported.`
              );
            }
            if (accessorController2 !== accessorControllerRef.deref()) {
              console.error(accessorController2);
              throw Error(
                `Expected controller at index ${accessorControllerIndex} to be instance of useAccessor but it is not.`
              );
            }
            const isFlippingBoolean = resolved.key.toLowerCase().includes("disable");
            const collidesWithNativeProp = propertyName in HTMLElement.prototype;
            const collidesWithCustomProp = accessorControllerRef.deref().constructor.devOnly$allowedPropNameMismatches?.has(propName) === true;
            if (resolved.key !== propertyName && !collidesWithNativeProp && !collidesWithCustomProp && !isFlippingBoolean) {
              throw new Error(
                `Tried to bind "${resolved?.key}" property to "${propertyName.toString()}" - property names must match`
              );
            }
            if (!resolved.isReactive) {
              throw new Error(
                `For two-way binding with Accessor to work, the property on your component must have @property() or @state() decorator. "${propertyName.toString()}" has neither`
              );
            }
          }
          const shouldFlipBoolean = propertyName !== propName && propName.toLowerCase().includes("disable");
          watchBoundProperty(accessorControllerRef, descriptor, propertyName, propName, shouldFlipBoolean);
          if (descriptor.i === void 0) {
            bindPropToProperty(descriptor, accessorControllerIndex, propertyName, shouldFlipBoolean);
          }
        }
      },
      value
    );
  }
});
var watchBoundProperty = (controllerRef, descriptor, propertyName, propName, shouldFlipBoolean, _handle) => _handle = l(
  () => {
    const controller = controllerRef.deref();
    return controller === void 0 || controller.component.manager.destroyed ? _handle = _handle.remove() : controller.exports[propertyName];
  },
  (_, oldValue) => {
    if (!_handle) {
      return;
    }
    const component = controllerRef.deref().component;
    component?.requestUpdate(propName, shouldFlipBoolean ? !oldValue : oldValue);
    descriptor.c = false;
  },
  // At present, since useAccessor initializes the Accessor instance without
  // any properties, it assumes that there is no need to do initial sync of
  // accessor properties to the component, especially since the component
  // setter always gets the newest value from the Accessor instance anyway.
  // We might wish to change that if view model is shared between multiple
  // components and has default value for some property. Even then, this issue
  // will only manifest itself in default value not being reflected to
  // attribute (). If fixing above becomes important, can do so by adding
  // `initial: true` here and updating the above code to only call .notify()
  // if hasChanged returns true (see reference implementation in
  // _handleInstanceChanged). Not doing so yet as it is an edge case that is
  // easy to work around and proper fix will add overhead to the startup of
  // each component.
  { sync: true }
);
var bindPropToProperty = (descriptor, accessorControllerIndex, propertyName, shouldFlipBoolean) => {
  descriptor.d.get = function() {
    const value = this.M[accessorControllerIndex]?.exports[propertyName];
    return shouldFlipBoolean ? !value : value;
  };
  descriptor.d.set = function(newValue) {
    const accessorController = this.M[accessorControllerIndex];
    if (accessorController.A !== propertyName) {
      accessorController.exports[propertyName] = shouldFlipBoolean ? !newValue : newValue;
    }
  };
};
var getAccessorControllerBoundProperties = (controller) => controller.Y;
var reCreateAccessor = (instance, component) => {
  const accessorController = component.manager.useRefSync(instance);
  accessorController?.hostDestroy();
  accessorController?.Z();
  accessorController?.hostConnected();
  if (accessorController === void 0) {
    console.error("Unable to resolve the useAccessor controller from the provided value");
  }
};

// node_modules/@arcgis/map-components/dist/chunks/component-utils.js
function N(e2) {
  e2.el.childElem && (e2.el.childElem.ownedBy = e2.el);
  const t = g(e2);
  if (!t) {
    const r2 = y(e2);
    if (!r2) {
      c2(e2);
      return;
    }
    return a5(r2, e2, true), r2;
  }
  return E(t, e2.el.parent) || (e2.el.parent = t, t.localName === "arcgis-expand" ? h(t, e2) : a5(t, e2, false)), t;
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
var a5 = (e2, t, r2) => s4(
  e2,
  (i2) => {
    r2 && c2(t), t.el.view = i2, t.referenceElement = e2;
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
function c2(e2) {
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
var c3 = class extends GenericController {
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
var h2 = proxyExports(c3);

export {
  l2 as l,
  m,
  reEmitEvent,
  makeAccessorController,
  AccessorController,
  makeBinderProxy,
  getAccessorControllerBoundProperties,
  reCreateAccessor,
  B,
  m2,
  c3 as c
};
//# sourceMappingURL=chunk-N4A2F7D5.js.map
