import {
  b
} from "./chunk-435JQ7DO.js";
import {
  n
} from "./chunk-KEY3YQEB.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtilsConversions.js
var b3 = n();

// node_modules/@arcgis/core/analysis/featureReferenceUtils.js
function c(e, t) {
  return s4(e) === s4(t);
}
function s4(e) {
  if (null == e) return null;
  const t = null != e.layer ? e.layer.id : "";
  let r4 = null;
  return r4 = null != e.objectId ? e.objectId : null != e.layer && "objectIdField" in e.layer && null != e.layer.objectIdField && null != e.attributes ? e.attributes[e.layer.objectIdField] : e.uid, null == r4 ? null : `o-${t}-${r4}`;
}
var d = { json: { write: { writer: b4, target: { "feature.layerId": { type: [Number, String], isRequired: true }, "feature.objectId": { type: [Number, String], isRequired: true } } }, origins: { "web-scene": { read: f } } }, clonable: "reference" };
function b4(e, t) {
  null != e?.layer?.objectIdField && null != e.attributes && (t.feature = { layerId: e.layer.id, objectId: e.attributes[e.layer.objectIdField] });
}
function f(e) {
  if (null != e.layerId && null != e.objectId) return { uid: null, layer: { id: e.layerId, objectIdField: "ObjectId" }, attributes: { ObjectId: e.objectId } };
}
var y2 = b();
var g2 = n();

export {
  c,
  d
};
//# sourceMappingURL=chunk-AA5YV3W4.js.map
