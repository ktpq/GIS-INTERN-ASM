import {
  _
} from "./chunk-V44XD4F6.js";
import {
  m
} from "./chunk-5EVMO3EL.js";
import {
  I
} from "./chunk-NLL3NYBQ.js";
import {
  has,
  n2 as n
} from "./chunk-TX75HZKJ.js";

// node_modules/@arcgis/core/layers/support/fieldProperties.js
function s() {
  return { fields: { type: [m], value: null, set: function(i) {
    if (i && has("big-integer-warning-enabled")) {
      const t = i.filter((e) => "big-integer" === e.type || "oid" === e.type && (e.length || 0) >= 8);
      if (t.length) {
        const i2 = t.map((e) => `'${e.name}'`).join(", ");
        n.getLogger(this).warn("#fields", `Layer (title: '${this.title ?? "no title"}', id: '${this.id ?? "no id"}') references big-integer field(s): ${i2}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`);
      }
    }
    this._set("fields", i);
  } }, fieldsIndex: { readOnly: true, get() {
    return _.fromLayer(this);
  } }, outFields: { type: [String], json: { read: false }, set: function(e) {
    this._userOutFields = e, this.notifyChange("outFields");
  }, get: function() {
    const i = this._userOutFields;
    if (!i?.length) return null;
    if (i.includes("*")) return ["*"];
    if (!this.fields) return i;
    for (const t of i) {
      const r = this.fieldsIndex?.has(t);
      r || n.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field", `Invalid field ${t} found in outFields`, { layer: this, outFields: i });
    }
    return I(this.fieldsIndex, i);
  } } };
}

export {
  s
};
//# sourceMappingURL=chunk-VRO6IUOI.js.map
