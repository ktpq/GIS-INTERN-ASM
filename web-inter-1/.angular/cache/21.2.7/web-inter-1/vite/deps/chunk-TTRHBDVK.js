import {
  c,
  p
} from "./chunk-3Z7OKY4G.js";
import {
  I,
  s2
} from "./chunk-LAAWMBRE.js";
import {
  a,
  s2 as s
} from "./chunk-6I475YAP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/utils.js
function s3(t, n) {
  return n ? __spreadProps(__spreadValues({}, n), { query: __spreadValues(__spreadValues({}, t), n.query) }) : { query: t };
}
function f(t) {
  return "string" == typeof t ? I(t) : a(t);
}
function u(t, n, r) {
  const e = {};
  for (const i in t) {
    if ("declaredClass" === i) continue;
    const o = t[i];
    if (null != o && "function" != typeof o) if (Array.isArray(o)) e[i] = o.map((t2) => u(t2));
    else if ("object" == typeof o) if (o.toJSON) {
      const t2 = o.toJSON(r?.[i]);
      e[i] = n ? t2 : JSON.stringify(t2);
    } else e[i] = n ? o : JSON.stringify(o);
    else e[i] = o;
  }
  return e;
}
function c2(t, r) {
  return t ? r && p(t) ? r : c(t) ?? s2?.findCredential(t)?.token : null;
}
async function a2(r, e, i) {
  const o = c2(r, e);
  if (o) return o;
  !s2 && s.request.useIdentity && await import("./IdentityManager-KRK4DALP.js");
  const s4 = await s2.getCredential(r, i);
  return s4?.token;
}

export {
  s3 as s,
  f,
  u,
  a2 as a
};
//# sourceMappingURL=chunk-TTRHBDVK.js.map
