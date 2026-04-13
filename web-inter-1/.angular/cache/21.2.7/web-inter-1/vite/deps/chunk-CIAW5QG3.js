import {
  makeGenericController
} from "./chunk-DB4RBZKP.js";

// node_modules/@esri/calcite-components/dist/chunks/useCancelable.js
var useCancelable = () => {
  return makeGenericController((_, controller) => {
    const resources = /* @__PURE__ */ new Set();
    controller.onDisconnected(() => {
      resources.forEach((resource) => resource.cancel());
    });
    return {
      add: (resourceOrResources) => {
        [resourceOrResources].flat().forEach((resource) => resources.add(resource));
      },
      resources
    };
  });
};

export {
  useCancelable
};
//# sourceMappingURL=chunk-CIAW5QG3.js.map
