import {
  p
} from "./chunk-A3TI5LYY.js";
import {
  n2 as n
} from "./chunk-IDI4VM7T.js";

// node_modules/@arcgis/core/views/interactive/interactiveToolUtils.js
function o(t) {
  return [t.on("before-add", (o3) => {
    const i2 = o3.item;
    if (null == i2 || t.includes(i2)) return n.getLogger("esri.views.interactive.interactiveToolUtils").warn("Tool is either already in the list of tools or tool is `null`. Not adding tool."), void o3.preventDefault();
    i2.onAdd();
  }), t.on("after-remove", (e) => {
    const t2 = e.item;
    t2.active && (t2.view.activeTool = null), t2.destroy();
  })];
}
function i(e) {
  return e.visible && null != e.getEditableFlag && e.getEditableFlag(0) && e.getEditableFlag(1);
}
function n2(e) {
  return "key-down" === e.type && e.key === p.cancel;
}

// node_modules/@arcgis/core/support/groundInstanceUtils.js
var n3 = /* @__PURE__ */ Symbol("GroundInstance");
function o2(o3) {
  return null != o3 && "object" == typeof o3 && n3 in o3;
}

export {
  n3 as n,
  o2 as o,
  o as o2,
  i,
  n2
};
//# sourceMappingURL=chunk-CBBLZYED.js.map
