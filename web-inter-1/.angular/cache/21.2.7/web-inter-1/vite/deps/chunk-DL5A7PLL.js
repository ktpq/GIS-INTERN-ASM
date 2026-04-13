import {
  M
} from "./chunk-YY44XNLW.js";
import {
  I
} from "./chunk-LAAWMBRE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/portal/support/jsonContext.js
function e(t, r) {
  return __spreadProps(__spreadValues({}, l(t, r)), { readResourcePaths: [] });
}
function o(r, e2, o2) {
  const i = I(r.itemUrl);
  return __spreadProps(__spreadValues({}, l(r, e2)), { messages: [], writtenProperties: [], blockedRelativeUrls: [], verifyItemRelativeUrls: i ? { rootPath: i.path, writtenUrls: [] } : null, resources: o2 ? { toAdd: [], toUpdate: [], toKeep: [], pendingOperations: [] } : null });
}
function l(e2, o2) {
  return { origin: o2, url: I(e2.itemUrl), portal: e2.portal || M.getDefault(), portalItem: e2 };
}

export {
  e,
  o
};
//# sourceMappingURL=chunk-DL5A7PLL.js.map
