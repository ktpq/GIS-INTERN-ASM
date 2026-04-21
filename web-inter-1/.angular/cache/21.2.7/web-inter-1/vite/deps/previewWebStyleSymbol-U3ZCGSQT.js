import {
  e
} from "./chunk-OXBSNA35.js";
import {
  u
} from "./chunk-UXWT3ISO.js";
import {
  f2 as f
} from "./chunk-TPFIN626.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=previewWebStyleSymbol-U3ZCGSQT.js.map
