import {
  e
} from "./chunk-UNFAJUWX.js";
import {
  u
} from "./chunk-QWNB5I7T.js";
import {
  f2 as f
} from "./chunk-2OF3JE3F.js";
import "./chunk-O3PP4I47.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js
async function n(e2, n2, s) {
  const r = e2.thumbnail?.url;
  if (r) {
    const e3 = o((await f(r, { responseType: "image" })).data, s);
    return s?.node ? (s.node.appendChild(e3), s.node) : e3;
  }
  const a = await e2.fetchSymbol({ acceptedFormats: e });
  return a ? n2(a, s) : null;
}
function o(t, i) {
  const n2 = !/\\.svg$/i.test(t.src) && i?.disableUpsampling, o2 = Math.max(t.width, t.height);
  let s = null != i?.maxSize ? u(i.maxSize) : 120;
  n2 && (s = Math.min(o2, s));
  const r = "number" == typeof i?.size ? i?.size : null, a = Math.min(s, null != r ? u(r) : o2);
  if (a !== o2) {
    const e2 = 0 !== t.width && 0 !== t.height ? t.width / t.height : 1;
    e2 >= 1 ? (t.width = a, t.height = a / e2) : (t.width = a * e2, t.height = a);
  }
  return t;
}
export {
  n as previewWebStyleSymbol
};
//# sourceMappingURL=previewWebStyleSymbol-2N2ZMOKT.js.map
