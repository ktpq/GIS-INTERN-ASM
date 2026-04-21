import {
  l,
  n,
  q,
  u
} from "./chunk-XWU2ZKWF.js";
import {
  m
} from "./chunk-UKSB452I.js";
import {
  E,
  K,
  Q,
  Xe
} from "./chunk-DWF2MCID.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/support/popupUtils.js
function d({ displayField: t, editFieldsInfo: i, fields: n2, objectIdField: o, title: r }, s) {
  if (!n2) return null;
  const l2 = b({ editFieldsInfo: i, fields: n2, objectIdField: o }, s);
  if (!l2.length) return null;
  const a = I({ titleBase: r, fields: n2, displayField: t }), d2 = y();
  return new q({ title: a, content: d2, fieldInfos: l2 });
}
var c = (e, t) => t.visibleFieldNames ? t.visibleFieldNames.has(e.name) : Q(e, t);
function f({ fields: e, ignoreFieldTypes: t, sortDisabled: i }) {
  const n2 = e;
  return t && (e = e.filter((e2) => !t.includes(e2.type))), e === n2 && (e = e.slice()), true !== i && e.sort(p), e;
}
function p(e, t) {
  return "oid" === e.type ? -1 : "oid" === t.type ? 1 : j(e) ? -1 : j(t) ? 1 : (e.alias || e.name).toLocaleLowerCase().localeCompare((t.alias || t.name).toLocaleLowerCase());
}
function b(e, i) {
  const n2 = i?.visibleFieldNames;
  return f({ fields: e.fields ?? [], ignoreFieldTypes: i?.ignoreFieldTypes || C, sortDisabled: i?.sortDisabled }).map((i2) => new u({ fieldName: i2.name, isEditable: K(i2, e), label: i2.alias, format: g(i2), visible: c(i2, __spreadProps(__spreadValues({}, e), { visibleFieldNames: n2 })) }));
}
function g(e) {
  switch (e.type) {
    case "small-integer":
    case "integer":
      return new m({ digitSeparator: true, places: 0 });
    case "single":
    case "double":
      return new m({ digitSeparator: true, places: 2 });
    case "string":
      return Xe(e.name) ? new m({ digitSeparator: true, places: 0 }) : void 0;
    default:
      return;
  }
}
function y() {
  return [new l(), new n()];
}
function I(e) {
  const t = E(e), { titleBase: n2 } = e;
  return t ? `${n2}: {${t.trim()}}` : n2 ?? "";
}
function j(e) {
  if ("name" === (e.name && e.name.toLowerCase())) return true;
  const t = e.alias?.toLowerCase();
  return "name" === t;
}
var C = ["geometry", "blob", "raster", "guid", "xml"];

export {
  d
};
//# sourceMappingURL=chunk-5XE57PQA.js.map
