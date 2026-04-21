import {
  AccessorController,
  c,
  m
} from "./chunk-N4A2F7D5.js";
import {
  makeT9nController,
  proxyExports
} from "./chunk-PQURDETH.js";
import {
  isEsriInternalEnv
} from "./chunk-SIEFVWAL.js";
import {
  l
} from "./chunk-6CYBR6FP.js";

// node_modules/@arcgis/map-components/dist/chunks/useT9n.js
var s = makeT9nController(m);

// node_modules/@arcgis/map-components/dist/chunks/useViewModel.js
var v = (t, o) => (e2) => a(e2, t);
var r = class extends AccessorController {
  #o = void 0;
  constructor(o, e2) {
    super(o, e2), new c(this.component);
  }
  hostLoad() {
    this.#o = l(
      () => this.component.el.view,
      (o) => {
        this.instance.view = o, this.instance.map = o?.map;
      },
      { sync: true, initial: true }
    );
  }
  hostDestroy() {
    this.#o?.remove(), super.hostDestroy();
  }
};
isEsriInternalEnv() && (r.devOnly$allowedPropNameMismatches = /* @__PURE__ */ new Set(["el", "manager", "open", "swipePosition"]));
var a = proxyExports(r);

// node_modules/@arcgis/map-components/dist/chunks/globalCss.js
var e = {
  arcgisButton: "arcgis-button",
  buttonDisabled: "esri-button--disabled",
  disabled: "esri-disabled",
  empty: "esri-widget__content--empty",
  heading: "esri-widget__heading",
  interactive: "esri-interactive",
  loaderAnimation: "esri-widget__loader-animation",
  panel: "esri-widget--panel",
  widget: "esri-widget",
  widgetButton: "esri-widget--button",
  widgetButtonActive: "esri-widget--button-active",
  widgetDisabled: "esri-widget--disabled"
};

export {
  s,
  v,
  e
};
//# sourceMappingURL=chunk-CJQDSLJX.js.map
