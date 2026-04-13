import {
  AccessorController
} from "./chunk-2QNFPVEI.js";
import {
  c
} from "./chunk-7IP3DNCI.js";
import {
  l
} from "./chunk-55ZAYF5P.js";
import {
  proxyExports
} from "./chunk-HUOYETLD.js";
import {
  isEsriInternalEnv
} from "./chunk-K65EA25C.js";

// node_modules/@arcgis/map-components/dist/chunks/useViewModel.js
var v = (t, o) => (e) => a(e, t);
var r = class extends AccessorController {
  #o = void 0;
  constructor(o, e) {
    super(o, e), new c(this.component);
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

export {
  v
};
//# sourceMappingURL=chunk-LJCJTNJJ.js.map
