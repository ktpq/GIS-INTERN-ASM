import {
  y
} from "./chunk-TFKEOGZ6.js";
import {
  I,
  L,
  V,
  j2 as j
} from "./chunk-2OF3JE3F.js";
import {
  a,
  n2 as n
} from "./chunk-IDI4VM7T.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/multiLayerServiceUtils.js
function i(o) {
  const { nonStandardUrlAllowed: e = false, separator: i2 } = o ?? {}, s2 = a(y), u = s2.json?.write;
  return "object" == typeof u && u && (u.writer = function(r, t, o2, e2) {
    j(this, r, i2, t, e2);
  }), __spreadProps(__spreadValues({}, s2), { set: function(r) {
    if (null == r) return void this._set("url", r);
    const o2 = L({ layer: this, url: r, nonStandardUrlAllowed: e, logger: n.getLogger(this) });
    this._set("url", o2.url), null != o2.layerId && this._set("layerId", o2.layerId);
  } });
}
function s(r, t) {
  const { separator: l } = t ?? {}, n2 = I(r.url);
  return null != n2 && (null != r.dynamicDataSource ? n2.path = V(n2.path, "dynamicLayer") : null != r.layerId && (n2.path = V(n2.path, l ?? "", r.layerId.toString()))), n2;
}

export {
  i,
  s
};
//# sourceMappingURL=chunk-LKFVQQGX.js.map
