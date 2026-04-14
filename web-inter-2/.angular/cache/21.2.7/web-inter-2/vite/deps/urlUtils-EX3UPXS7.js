import {
  f2 as f
} from "./chunk-ZRWCUWWK.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/OrientedImageryViewer/support/urlUtils.js
var e = /\.(\w+)$/;
function n(t) {
  const n2 = new URL(t).pathname.match(e);
  return !n2 || n2.length < 2 ? null : n2[1].toUpperCase();
}
var o = async (e2, n2) => {
  const o2 = await f(e2, __spreadProps(__spreadValues({}, n2), { method: "head" })), r = o2?.getHeader?.("Content-Type");
  return r ? r.split("/")[1] : null;
};
export {
  o as getDatasetFormat,
  n as guessExtensionFromURI
};
//# sourceMappingURL=urlUtils-EX3UPXS7.js.map
