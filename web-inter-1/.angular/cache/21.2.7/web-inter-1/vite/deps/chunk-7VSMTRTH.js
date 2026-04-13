import {
  f2 as f
} from "./chunk-LAAWMBRE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/request/serviceJSON.js
async function r(r2, t) {
  return (await f(r2, { responseType: "json", query: __spreadProps(__spreadValues({ f: "json" }, t?.customParameters), { token: t?.apiKey }) })).data;
}

export {
  r
};
//# sourceMappingURL=chunk-7VSMTRTH.js.map
