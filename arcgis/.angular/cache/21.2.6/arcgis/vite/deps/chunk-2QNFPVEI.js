import {
  a,
  s
} from "./chunk-7IP3DNCI.js";
import {
  a as a2,
  l
} from "./chunk-55ZAYF5P.js";
import {
  proxyExports
} from "./chunk-HUOYETLD.js";
import {
  GenericController,
  createEventFactory,
  isEsriInternalEnv,
  retrieveComponent,
  trackKey,
  trackPropKey
} from "./chunk-K65EA25C.js";

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
    this.#exportsObservable = s();
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
    a(this.#exportsObservable);
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

export {
  reEmitEvent,
  makeAccessorController,
  AccessorController,
  makeBinderProxy,
  getAccessorControllerBoundProperties,
  reCreateAccessor
};
//# sourceMappingURL=chunk-2QNFPVEI.js.map
