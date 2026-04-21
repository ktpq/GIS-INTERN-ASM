import {
  c
} from "./chunk-YHDV72OA.js";
import {
  x
} from "./chunk-XJEMOC6M.js";
import {
  w
} from "./chunk-DA25W2D5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/support/actions/actionUtils.js
var n = () => c({ action: () => import("./calcite-action-EB7V3T34.js") });
function e(t, i, n2) {
  const { title: e2, textEnabled: c3 } = i, { type: r2, active: s, uid: d, disabled: u, indicator: l } = t;
  return t.visible ? x("calcite-action", __spreadProps(__spreadValues({}, i), { active: "toggle" === r2 && t.value, "data-action-id": t.id, "data-action-uid": d, disabled: u, icon: a(t), indicator: l, loading: s, text: e2 ?? "", title: c3 ? void 0 : e2 }), n2) : null;
}
function a(t) {
  return t.icon ? t.icon : "image" in t && t.image || t.className ? void 0 : "question";
}
function c2(t) {
  return t ? { backgroundImage: `url(${t})` } : {};
}
function r({ action: i, feature: o }) {
  const n2 = o?.attributes, e2 = "image" in i ? i.image : void 0;
  return e2 && n2 ? w(e2, n2) : e2 ?? "";
}

export {
  n,
  e,
  a,
  c2 as c,
  r
};
//# sourceMappingURL=chunk-3LZB5PLU.js.map
