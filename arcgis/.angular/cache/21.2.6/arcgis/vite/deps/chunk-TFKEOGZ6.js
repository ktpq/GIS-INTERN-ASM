import {
  a as a3
} from "./chunk-W3KPPCSW.js";
import {
  x
} from "./chunk-IQ4Y4GKS.js";
import {
  r
} from "./chunk-AIECNX6R.js";
import {
  l as l2
} from "./chunk-NSJQHJ2B.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import {
  h
} from "./chunk-2OF3JE3F.js";
import {
  n
} from "./chunk-5EUDKAG7.js";
import {
  D,
  a3 as a2,
  c,
  l2 as l,
  m2 as m
} from "./chunk-LV7AMIAU.js";
import {
  a
} from "./chunk-IDI4VM7T.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/tables/elements/AttributeTableElement.js
var s = class extends n {
  constructor(t) {
    super(t), this.description = null, this.label = null, this.type = null;
  }
};
__decorate([m({ type: String, json: { write: true } })], s.prototype, "description", void 0), __decorate([m({ type: String, json: { write: true } })], s.prototype, "label", void 0), __decorate([m()], s.prototype, "type", void 0), s = __decorate([l("esri.tables.elements.AttributeTableElement")], s);
var p = s;

// node_modules/@arcgis/core/tables/elements/AttributeTableAttachmentElement.js
var a4 = class extends l2(p) {
  constructor(t) {
    super(t), this.displayType = "auto", this.type = "attachment";
  }
  clone() {
    return super.clone();
  }
};
__decorate([a2({ type: ["auto"], json: { write: true } })], a4.prototype, "displayType", void 0), __decorate([a2({ type: ["attachment"], readOnly: true, json: { read: false, write: { enabled: true, isRequired: true } } })], a4.prototype, "type", void 0), a4 = __decorate([c("esri.tables.elements.AttributeTableAttachmentElement")], a4);
var p2 = a4;

// node_modules/@arcgis/core/tables/elements/AttributeTableFieldElement.js
var l3 = class extends l2(p) {
  constructor(e) {
    super(e), this.description = null, this.fieldName = null, this.label = null, this.type = "field";
  }
  clone() {
    return super.clone();
  }
};
__decorate([a2({ type: String, json: { read: false, write: false } })], l3.prototype, "description", void 0), __decorate([a2({ type: String, json: { write: { enabled: true, isRequired: true } } })], l3.prototype, "fieldName", void 0), __decorate([a2({ type: String, json: { read: false, write: false } })], l3.prototype, "label", void 0), __decorate([a2({ type: ["field"], readOnly: true, json: { read: false, write: { enabled: true, isRequired: true } } })], l3.prototype, "type", void 0), l3 = __decorate([c("esri.tables.elements.AttributeTableFieldElement")], l3);
var s2 = l3;

// node_modules/@arcgis/core/tables/elements/AttributeTableRelationshipElement.js
var p3 = class extends l2(p) {
  constructor(e) {
    super(e), this.relationshipId = null, this.type = "relationship";
  }
  clone() {
    return super.clone();
  }
};
__decorate([a2({ type: Number, json: { type: D, write: { enabled: true, isRequired: true } } })], p3.prototype, "relationshipId", void 0), __decorate([a2({ type: ["relationship"], readOnly: true, json: { read: false, write: { enabled: true, isRequired: true } } })], p3.prototype, "type", void 0), p3 = __decorate([c("esri.tables.elements.AttributeTableRelationshipElement")], p3);
var l4 = p3;

// node_modules/@arcgis/core/tables/support/tablesUtils.js
var n2 = { base: p, key: "type", typeMap: { attachment: p2, field: s2, relationship: l4 } };
function i(t) {
  return { typesWithGroup: { base: p, key: "type", typeMap: { attachment: p2, field: s2, group: t, relationship: l4 } }, typesWithoutGroup: n2 };
}

// node_modules/@arcgis/core/tables/elements/AttributeTableGroupElement.js
var p4 = class extends l2(p) {
  constructor(e) {
    super(e), this.elements = null, this.type = "group";
  }
  clone() {
    return super.clone();
  }
};
__decorate([a2({ types: [n2], json: { name: "attributeTableElements", write: true } })], p4.prototype, "elements", void 0), __decorate([a2({ type: ["group"], readOnly: true, json: { read: false, write: { enabled: true, isRequired: true } } })], p4.prototype, "type", void 0), p4 = __decorate([c("esri.tables.elements.AttributeTableGroupElement")], p4);
var i2 = p4;

// node_modules/@arcgis/core/tables/support/FieldOrder.js
var p5 = class extends l2(n) {
  constructor(r2) {
    super(r2), this.field = null, this.order = null;
  }
};
__decorate([a2({ type: String, json: { write: true } })], p5.prototype, "field", void 0), __decorate([a2({ type: ["asc", "desc"], json: { write: true } })], p5.prototype, "order", void 0), p5 = __decorate([c("esri.tables.support.FieldOrder")], p5);
var i3 = p5;

// node_modules/@arcgis/core/tables/AttributeTableTemplate.js
var m2;
var n3 = i(i2);
var a5 = m2 = class extends n {
  constructor(e) {
    super(e), this.elements = null, this.orderByFields = null;
  }
  clone() {
    return new m2({ elements: a(this.elements), orderByFields: a(this.orderByFields) });
  }
};
__decorate([a2({ types: [n3.typesWithGroup], json: { name: "attributeTableElements", write: true } })], a5.prototype, "elements", void 0), __decorate([a2({ type: [i3], json: { write: true } })], a5.prototype, "orderByFields", void 0), a5 = m2 = __decorate([c("esri.tables.AttributeTableTemplate")], a5);
var d = a5;

// node_modules/@arcgis/core/layers/support/commonProperties.js
var s3 = { type: Boolean, value: true, json: { origins: { service: { read: false, write: false }, "web-map": { read: false, write: false } }, name: "screenSizePerspective", write: { enabled: true, layerContainerTypes: a3 } } };
var l5 = { type: Boolean, value: true, json: { name: "disablePopup", read: { reader: (e, r2) => !r2.disablePopup }, write: { enabled: true, writer(e, r2, n4) {
  r2[n4] = !e;
} } } };
var p6 = { type: Boolean, value: true, nonNullable: true, json: { name: "showLabels", write: { enabled: true, layerContainerTypes: a3 } } };
var y = { type: String, json: { origins: { "portal-item": { write: false } }, write: { isRequired: true, ignoreOrigin: true, writer: h } } };
var d2 = { type: Boolean, value: true, nonNullable: true, json: { origins: { service: { read: { enabled: false } } }, name: "showLegend", write: { enabled: true, layerContainerTypes: a3 } } };
var m3 = { value: null, type: x, json: { origins: { service: { name: "elevationInfo", write: true } }, name: "layerDefinition.elevationInfo", write: { enabled: true, layerContainerTypes: a3 } } };
function c2(e) {
  return { type: e, readOnly: true, json: { origins: { service: { read: true } }, read: false } };
}
var f = { write: { enabled: true, layerContainerTypes: a3 }, read: true };
var w = { type: Number, json: { origins: { "web-document": f, "portal-item": { write: { layerContainerTypes: a3 } } } } };
var b = __spreadProps(__spreadValues({}, w), { json: __spreadProps(__spreadValues({}, w.json), { origins: { "web-document": __spreadProps(__spreadValues({}, f), { write: { enabled: true, layerContainerTypes: a3, target: { opacity: { type: Number }, "layerDefinition.drawingInfo.transparency": { type: Number } } } }) }, read: { source: ["layerDefinition.drawingInfo.transparency", "drawingInfo.transparency"], reader: (e, r2, n4) => n4 && "service" !== n4.origin || !r2.drawingInfo || void 0 === r2.drawingInfo.transparency ? r2.layerDefinition?.drawingInfo && void 0 !== r2.layerDefinition.drawingInfo.transparency ? r(r2.layerDefinition.drawingInfo.transparency) : void 0 : r(r2.drawingInfo.transparency) } }) });
var g = { type: z, readOnly: true, json: { origins: { service: { read: { source: ["fullExtent", "spatialReference"], reader: (e, i4) => {
  const a6 = z.fromJSON(e);
  return null != i4.spatialReference && "object" == typeof i4.spatialReference && (a6.spatialReference = S.fromJSON(i4.spatialReference)), a6;
} } } }, read: false } };
var u = { type: String, json: { origins: { service: { read: false }, "portal-item": { read: false } } } };
var j = { type: Number, json: { origins: { service: { write: { enabled: false } } }, name: "layerDefinition.minScale", write: { layerContainerTypes: a3 } } };
var v = { type: Number, json: { origins: { service: { write: { enabled: false } } }, name: "layerDefinition.maxScale", write: { layerContainerTypes: a3 } } };
var T = { json: { write: { ignoreOrigin: true, layerContainerTypes: a3 }, origins: { "web-map": { read: false, write: false } } } };
var I = { type: d, json: { name: "attributeTableInfo", write: true } };

export {
  d,
  s3 as s,
  l5 as l,
  p6 as p,
  y,
  d2,
  m3 as m,
  c2 as c,
  w,
  b,
  g,
  u,
  j,
  v,
  T,
  I
};
//# sourceMappingURL=chunk-TFKEOGZ6.js.map
