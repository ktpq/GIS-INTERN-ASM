import {
  c as c2,
  h,
  x as x2
} from "./chunk-MNLCSEA7.js";
import {
  m as m2
} from "./chunk-YZDX62BD.js";
import {
  o as o3
} from "./chunk-WWKLZ2P6.js";
import {
  q
} from "./chunk-BJNDU6LU.js";
import {
  l
} from "./chunk-NLVGGH5B.js";
import {
  Be,
  v,
  w
} from "./chunk-WDPGHXN4.js";
import {
  g
} from "./chunk-EKLJIMB3.js";
import {
  n as n2
} from "./chunk-FMWSBXS5.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  D,
  a3 as a2,
  c,
  m3 as m,
  o4 as o2,
  r3 as r,
  r4 as r2,
  x
} from "./chunk-JM4CKTH2.js";
import {
  i,
  o
} from "./chunk-SZXJF3IE.js";
import {
  C
} from "./chunk-WARIPJQI.js";
import {
  a,
  n2 as n
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/graphic/getPopupProvider.js
var n3 = /* @__PURE__ */ Symbol("popupProvider");
function o4(n14) {
  return "object" == typeof n14 && null !== n14 && "popupEnabled" in n14 && "popupTemplate" in n14;
}
function p(o7) {
  return !!o7 && n3 in o7;
}
function t(o7) {
  return p(o7) ? o7[n3] : null;
}

// node_modules/@arcgis/core/popup/ExpressionInfo.js
var s;
var i2 = s = class extends n2 {
  constructor(t2) {
    super(t2), this.name = null, this.title = null, this.expression = null, this.returnType = null;
  }
  clone() {
    return new s({ name: this.name, title: this.title, expression: this.expression, returnType: this.returnType });
  }
};
__decorate([a2({ type: String, json: { write: true } })], i2.prototype, "name", void 0), __decorate([a2({ type: String, json: { write: true } })], i2.prototype, "title", void 0), __decorate([a2({ type: String, json: { write: true } })], i2.prototype, "expression", void 0), __decorate([a2({ type: ["string", "number"], json: { write: true } })], i2.prototype, "returnType", void 0), i2 = s = __decorate([c("esri.popup.ExpressionInfo")], i2);
var n4 = i2;

// node_modules/@arcgis/core/support/actions/ActionBase.js
var r3 = class extends o3(b) {
  constructor(t2) {
    super(t2), this.active = false, this.className = null, this.disabled = false, this.icon = null, this.id = null, this.indicator = false, this.title = null, this.type = null, this.visible = true;
  }
};
__decorate([a2()], r3.prototype, "active", void 0), __decorate([a2()], r3.prototype, "className", void 0), __decorate([a2()], r3.prototype, "disabled", void 0), __decorate([a2()], r3.prototype, "icon", void 0), __decorate([a2()], r3.prototype, "id", void 0), __decorate([a2()], r3.prototype, "indicator", void 0), __decorate([a2()], r3.prototype, "title", void 0), __decorate([a2()], r3.prototype, "type", void 0), __decorate([a2()], r3.prototype, "visible", void 0), r3 = __decorate([c("esri.support.actions.ActionBase")], r3);
var p2 = r3;

// node_modules/@arcgis/core/support/actions/ActionButton.js
var o5;
var r4 = o5 = class extends p2 {
  constructor(t2) {
    super(t2), this.image = null, this.type = "button";
  }
  clone() {
    return new o5({ active: this.active, className: this.className, disabled: this.disabled, icon: this.icon, id: this.id, indicator: this.indicator, title: this.title, visible: this.visible, image: this.image });
  }
};
__decorate([a2()], r4.prototype, "image", void 0), r4 = o5 = __decorate([c("esri.support.actions.ActionButton")], r4);
var a3 = r4;

// node_modules/@arcgis/core/popup/content/Content.js
var s2 = class extends n2 {
  constructor(t2) {
    super(t2), this.type = null;
  }
};
__decorate([a2({ type: ["attachments", "custom", "fields", "media", "text", "expression", "relationship", "utility-network-associations"], readOnly: true, json: { read: false, write: true } })], s2.prototype, "type", void 0), s2 = __decorate([c("esri.popup.content.Content")], s2);
var p3 = s2;

// node_modules/@arcgis/core/popup/support/AttachmentsOrderByInfo.js
var i3 = new o({ asc: "ascending", desc: "descending" });
var n5 = class extends l(n2) {
  constructor(o7) {
    super(o7), this.field = null, this.order = "ascending";
  }
};
__decorate([a2({ type: String, json: { write: true } })], n5.prototype, "field", void 0), __decorate([a2({ type: i3.apiValues, json: { type: i3.jsonValues, read: i3.read, write: i3.write } })], n5.prototype, "order", void 0), n5 = __decorate([c("esri.popup.support.AttachmentsOrderByInfo")], n5);
var c3 = n5;

// node_modules/@arcgis/core/popup/content/AttachmentsContent.js
var s3 = class extends l(p3) {
  constructor(t2) {
    super(t2), this.attachmentKeywords = null, this.attachmentTypes = null, this.description = null, this.displayType = "auto", this.orderByFields = null, this.title = null, this.type = "attachments";
  }
};
__decorate([a2({ type: [String], json: { write: true } })], s3.prototype, "attachmentKeywords", void 0), __decorate([a2({ type: [["application", "audio", "image", "model", "text", "video"]], json: { write: true } })], s3.prototype, "attachmentTypes", void 0), __decorate([a2({ type: String, json: { write: true } })], s3.prototype, "description", void 0), __decorate([a2({ type: ["auto", "preview", "list"], json: { write: true } })], s3.prototype, "displayType", void 0), __decorate([a2({ type: [c3], json: { write: true } })], s3.prototype, "orderByFields", void 0), __decorate([a2({ type: String, json: { write: true } })], s3.prototype, "title", void 0), __decorate([a2({ type: ["attachments"], readOnly: true, json: { read: false, write: { isRequired: true } } })], s3.prototype, "type", void 0), s3 = __decorate([c("esri.popup.content.AttachmentsContent")], s3);
var n6 = s3;

// node_modules/@arcgis/core/popup/content/CustomContent.js
var i4;
var p4 = i4 = class extends p3 {
  constructor(t2) {
    super(t2), this.creator = null, this.destroyer = null, this.outFields = null, this.type = "custom";
  }
  clone() {
    return new i4({ creator: this.creator, destroyer: this.destroyer, outFields: Array.isArray(this.outFields) ? a(this.outFields) : null });
  }
};
__decorate([a2()], p4.prototype, "creator", void 0), __decorate([a2()], p4.prototype, "destroyer", void 0), __decorate([a2()], p4.prototype, "outFields", void 0), __decorate([a2({ type: ["custom"], readOnly: true })], p4.prototype, "type", void 0), p4 = i4 = __decorate([c("esri.popup.content.CustomContent")], p4);
var l2 = p4;

// node_modules/@arcgis/core/popup/ElementExpressionInfo.js
var s4;
var i5 = s4 = class extends n2 {
  constructor(t2) {
    super(t2), this.title = null, this.expression = null, this.returnType = "dictionary";
  }
  clone() {
    return new s4({ title: this.title, expression: this.expression });
  }
};
__decorate([a2({ type: String, json: { write: true } })], i5.prototype, "title", void 0), __decorate([a2({ type: String, json: { write: true } })], i5.prototype, "expression", void 0), __decorate([a2({ type: ["dictionary"], readOnly: true, json: { read: false, write: true } })], i5.prototype, "returnType", void 0), i5 = s4 = __decorate([c("esri.popup.ElementExpressionInfo")], i5);
var p5 = i5;

// node_modules/@arcgis/core/popup/content/ExpressionContent.js
var n7;
var p6 = n7 = class extends p3 {
  constructor(o7) {
    super(o7), this.expressionInfo = null, this.type = "expression";
  }
  clone() {
    return new n7({ expressionInfo: this.expressionInfo?.clone() });
  }
};
__decorate([a2({ type: p5, json: { write: true } })], p6.prototype, "expressionInfo", void 0), __decorate([a2({ type: ["expression"], readOnly: true, json: { read: false, write: true } })], p6.prototype, "type", void 0), p6 = n7 = __decorate([c("esri.popup.content.ExpressionContent")], p6);
var i6 = p6;

// node_modules/@arcgis/core/popup/FieldInfo.js
var f = class extends l(n2) {
  constructor(t2) {
    super(t2), this.fieldName = null, this.isEditable = true, this.label = null, this.statisticType = null, this.stringFieldOption = "text-box", this.tooltip = null, this.visible = true;
  }
  set fieldFormat(t2) {
    this._set("fieldFormat", t2), this._set("format", t2 ? x2(t2) : null);
  }
  set format(t2) {
    this._set("format", t2), this._set("fieldFormat", t2 ? h(t2) : null);
  }
  readFormat(t2, o7) {
    if (!o7.fieldFormat) return t2 ? m2.fromJSON(t2) : null;
  }
  clone() {
    const t2 = super.clone();
    return t2._set("format", this.format?.clone()), t2._set("fieldFormat", this.fieldFormat?.clone()), t2;
  }
};
__decorate([a2({ value: null, clonable: false, types: c2, json: { write: { overridePolicy(t2, o7, e2) {
  const { fieldName: r6 } = this;
  return { enabled: !!r6 && !r6.startsWith("expression/") && !r6.startsWith("relationships/") && !!e2?.writeFieldFormat };
} } } })], f.prototype, "fieldFormat", null), __decorate([a2({ type: String, json: { write: true } })], f.prototype, "fieldName", void 0), __decorate([a2({ value: null, clonable: false, type: m2, json: { write: true } })], f.prototype, "format", null), __decorate([o2("format")], f.prototype, "readFormat", null), __decorate([a2({ type: Boolean, json: { write: { alwaysWriteDefaults: true }, default: true } })], f.prototype, "isEditable", void 0), __decorate([a2({ type: String, json: { write: true } })], f.prototype, "label", void 0), __decorate([a2({ type: ["count", "sum", "min", "max", "avg", "stddev", "var"], json: { write: true } })], f.prototype, "statisticType", void 0), __decorate([r(new o({ richtext: "rich-text", textarea: "text-area", textbox: "text-box" }), { default: "text-box" })], f.prototype, "stringFieldOption", void 0), __decorate([a2({ type: String, json: { write: true } })], f.prototype, "tooltip", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], f.prototype, "visible", void 0), f = __decorate([c("esri.popup.FieldInfo")], f);
var u = f;

// node_modules/@arcgis/core/popup/content/FieldsContent.js
var n8;
var p7 = n8 = class extends p3 {
  constructor(t2) {
    super(t2), this.attributes = null, this.description = null, this.fieldInfos = null, this.title = null, this.type = "fields";
  }
  clone() {
    return new n8(a({ attributes: this.attributes, description: this.description, fieldInfos: this.fieldInfos, title: this.title }));
  }
};
__decorate([a2({ type: Object, json: { write: true } })], p7.prototype, "attributes", void 0), __decorate([a2({ type: String, json: { write: true } })], p7.prototype, "description", void 0), __decorate([a2({ type: [u], json: { write: true } })], p7.prototype, "fieldInfos", void 0), __decorate([a2({ type: String, json: { write: true } })], p7.prototype, "title", void 0), __decorate([a2({ type: ["fields"], readOnly: true, json: { read: false, write: { isRequired: true } } })], p7.prototype, "type", void 0), p7 = n8 = __decorate([c("esri.popup.content.FieldsContent")], p7);
var l3 = p7;

// node_modules/@arcgis/core/popup/content/mixins/MediaInfo.js
var i7 = class extends n2 {
  constructor(t2) {
    super(t2), this.altText = null, this.caption = "", this.title = "", this.type = null;
  }
};
__decorate([a2({ type: String, json: { write: true } })], i7.prototype, "altText", void 0), __decorate([a2({ type: String, json: { write: true } })], i7.prototype, "caption", void 0), __decorate([a2({ type: String, json: { write: true } })], i7.prototype, "title", void 0), __decorate([a2({ type: ["image", "bar-chart", "column-chart", "line-chart", "pie-chart"], readOnly: true, json: { read: false, write: true } })], i7.prototype, "type", void 0), i7 = __decorate([c("esri.popup.content.mixins.MediaInfo")], i7);
var p8 = i7;

// node_modules/@arcgis/core/popup/content/support/ChartMediaInfoValueSeries.js
var l4;
var i8 = l4 = class extends b {
  constructor(o7) {
    super(o7), this.color = null, this.fieldName = null, this.tooltip = null, this.value = null;
  }
  clone() {
    return new l4({ color: this.color?.clone(), fieldName: this.fieldName, tooltip: this.tooltip, value: this.value });
  }
};
__decorate([a2()], i8.prototype, "color", void 0), __decorate([a2()], i8.prototype, "fieldName", void 0), __decorate([a2()], i8.prototype, "tooltip", void 0), __decorate([a2()], i8.prototype, "value", void 0), i8 = l4 = __decorate([c("esri.popup.content.support.ChartMediaInfoValueSeries")], i8);
var s5 = i8;

// node_modules/@arcgis/core/popup/content/support/ChartMediaInfoValue.js
var n9;
var d = n9 = class extends n2 {
  constructor(o7) {
    super(o7), this.colors = null, this.fields = [], this.normalizeField = null, this.series = [], this.tooltipField = null;
  }
  clone() {
    return new n9({ colors: a(this.colors), fields: a(this.fields), normalizeField: this.normalizeField, series: a(this.series), tooltipField: this.tooltipField });
  }
};
__decorate([a2({ type: [g], json: { type: [[D]], write: true } })], d.prototype, "colors", void 0), __decorate([a2({ type: [String], json: { write: { isRequired: true } } })], d.prototype, "fields", void 0), __decorate([a2({ type: String, json: { write: true } })], d.prototype, "normalizeField", void 0), __decorate([a2({ type: [s5], json: { read: false } })], d.prototype, "series", void 0), __decorate([a2({ type: String, json: { write: true } })], d.prototype, "tooltipField", void 0), d = n9 = __decorate([c("esri.popup.content.support.ChartMediaInfoValue")], d);
var a4 = d;

// node_modules/@arcgis/core/popup/content/mixins/ChartMediaInfo.js
var p9 = class extends p8 {
  constructor(t2) {
    super(t2), this.type = null, this.value = void 0;
  }
};
__decorate([a2({ type: ["bar-chart", "column-chart", "line-chart", "pie-chart"], readOnly: true, json: { read: false, write: true } })], p9.prototype, "type", void 0), __decorate([a2({ type: a4, json: { write: { isRequired: true } } })], p9.prototype, "value", void 0), p9 = __decorate([c("esri.popup.content.mixins.ChartMediaInfo")], p9);
var s6 = p9;

// node_modules/@arcgis/core/popup/content/support/chartMediaInfoUtils.js
var c4 = i()({ barchart: "bar-chart", columnchart: "column-chart", linechart: "line-chart", piechart: "pie-chart" });

// node_modules/@arcgis/core/popup/content/BarChartMediaInfo.js
var i9;
var s7 = i9 = class extends s6 {
  constructor(t2) {
    super(t2), this.type = "bar-chart";
  }
  clone() {
    return new i9({ altText: this.altText, title: this.title, caption: this.caption, value: this.value?.clone() });
  }
};
__decorate([a2({ type: ["bar-chart"], readOnly: true, json: { type: ["barchart"], read: false, write: { writer: c4.write, isRequired: true } } })], s7.prototype, "type", void 0), s7 = i9 = __decorate([c("esri.popup.content.BarChartMediaInfo")], s7);
var p10 = s7;

// node_modules/@arcgis/core/popup/content/ColumnChartMediaInfo.js
var s8;
var a5 = s8 = class extends s6 {
  constructor(t2) {
    super(t2), this.type = "column-chart";
  }
  clone() {
    return new s8({ altText: this.altText, title: this.title, caption: this.caption, value: this.value?.clone() });
  }
};
__decorate([a2({ type: ["column-chart"], readOnly: true, json: { type: ["columnchart"], read: false, write: { writer: c4.write, isRequired: true } } })], a5.prototype, "type", void 0), a5 = s8 = __decorate([c("esri.popup.content.ColumnChartMediaInfo")], a5);
var n10 = a5;

// node_modules/@arcgis/core/popup/content/support/ImageMediaInfoValue.js
var s9;
var i10 = s9 = class extends n2 {
  constructor(o7) {
    super(o7), this.linkURL = null, this.sourceURL = null;
  }
  clone() {
    return new s9({ linkURL: this.linkURL, sourceURL: this.sourceURL });
  }
};
__decorate([a2({ type: String, json: { write: true } })], i10.prototype, "linkURL", void 0), __decorate([a2({ type: String, json: { write: { isRequired: true } } })], i10.prototype, "sourceURL", void 0), i10 = s9 = __decorate([c("esri.popup.content.support.ImageMediaInfoValue")], i10);
var p11 = i10;

// node_modules/@arcgis/core/popup/content/ImageMediaInfo.js
var s10;
var a6 = s10 = class extends p8 {
  constructor(e2) {
    super(e2), this.refreshInterval = 0, this.type = "image", this.value = void 0;
  }
  clone() {
    return new s10({ altText: this.altText, title: this.title, caption: this.caption, refreshInterval: this.refreshInterval, value: this.value?.clone() });
  }
};
__decorate([a2({ type: Number, json: { write: true } })], a6.prototype, "refreshInterval", void 0), __decorate([a2({ type: ["image"], readOnly: true, json: { read: false, write: { isRequired: true } } })], a6.prototype, "type", void 0), __decorate([a2({ type: p11, json: { write: { isRequired: true } } })], a6.prototype, "value", void 0), a6 = s10 = __decorate([c("esri.popup.content.ImageMediaInfo")], a6);
var p12 = a6;

// node_modules/@arcgis/core/popup/content/LineChartMediaInfo.js
var s11;
var a7 = s11 = class extends s6 {
  constructor(t2) {
    super(t2), this.type = "line-chart";
  }
  clone() {
    return new s11({ altText: this.altText, title: this.title, caption: this.caption, value: this.value?.clone() });
  }
};
__decorate([a2({ type: ["line-chart"], readOnly: true, json: { type: ["linechart"], read: false, write: { writer: c4.write, isRequired: true } } })], a7.prototype, "type", void 0), a7 = s11 = __decorate([c("esri.popup.content.LineChartMediaInfo")], a7);
var n11 = a7;

// node_modules/@arcgis/core/popup/content/PieChartMediaInfo.js
var s12;
var p13 = s12 = class extends s6 {
  constructor(t2) {
    super(t2), this.type = "pie-chart";
  }
  clone() {
    return new s12({ altText: this.altText, title: this.title, caption: this.caption, value: this.value?.clone() });
  }
};
__decorate([a2({ type: ["pie-chart"], readOnly: true, json: { type: ["piechart"], read: false, write: { writer: c4.write, isRequired: true } } })], p13.prototype, "type", void 0), p13 = s12 = __decorate([c("esri.popup.content.PieChartMediaInfo")], p13);
var a8 = p13;

// node_modules/@arcgis/core/popup/content/support/mediaInfoTypes.js
var m3 = { base: p8, key: "type", defaultKeyValue: "image", typeMap: { "bar-chart": p10, "column-chart": n10, "line-chart": n11, "pie-chart": a8, image: p12 } };

// node_modules/@arcgis/core/popup/content/MediaContent.js
var l5;
var I = l5 = class extends p3 {
  constructor(t2) {
    super(t2), this.activeMediaInfoIndex = null, this.attributes = null, this.description = null, this.mediaInfos = null, this.title = null, this.type = "media";
  }
  readMediaInfos(t2) {
    return t2 && t2.map((t3) => "image" === t3.type ? p12.fromJSON(t3) : "barchart" === t3.type ? p10.fromJSON(t3) : "columnchart" === t3.type ? n10.fromJSON(t3) : "linechart" === t3.type ? n11.fromJSON(t3) : "piechart" === t3.type ? a8.fromJSON(t3) : void 0).filter(Boolean);
  }
  writeMediaInfos(t2, e2) {
    e2.mediaInfos = t2 && t2.map((t3) => t3.toJSON());
  }
  clone() {
    return new l5(a({ activeMediaInfoIndex: this.activeMediaInfoIndex, attributes: this.attributes, description: this.description, mediaInfos: this.mediaInfos, title: this.title }));
  }
};
__decorate([a2()], I.prototype, "activeMediaInfoIndex", void 0), __decorate([a2({ type: Object, json: { write: true } })], I.prototype, "attributes", void 0), __decorate([a2({ type: String, json: { write: true } })], I.prototype, "description", void 0), __decorate([a2({ types: [m3] })], I.prototype, "mediaInfos", void 0), __decorate([o2("mediaInfos")], I.prototype, "readMediaInfos", null), __decorate([r2("mediaInfos")], I.prototype, "writeMediaInfos", null), __decorate([a2({ type: String, json: { write: true } })], I.prototype, "title", void 0), __decorate([a2({ type: ["media"], readOnly: true, json: { read: false, write: { isRequired: true } } })], I.prototype, "type", void 0), I = l5 = __decorate([c("esri.popup.content.MediaContent")], I);
var u2 = I;

// node_modules/@arcgis/core/popup/support/RelatedRecordsInfoFieldOrder.js
var s13;
var p14 = s13 = class extends n2 {
  constructor(r6) {
    super(r6), this.field = null, this.order = null;
  }
  clone() {
    return new s13({ field: this.field, order: this.order });
  }
};
__decorate([a2({ type: String, json: { write: true } })], p14.prototype, "field", void 0), __decorate([a2({ type: ["asc", "desc"], json: { write: true } })], p14.prototype, "order", void 0), p14 = s13 = __decorate([c("esri.popup.support.RelatedRecordsInfoFieldOrder")], p14);
var i11 = p14;

// node_modules/@arcgis/core/popup/content/RelationshipContent.js
var n12 = class extends l(p3) {
  constructor(t2) {
    super(t2), this.description = null, this.displayCount = null, this.displayType = "list", this.orderByFields = null, this.relationshipId = null, this.title = null, this.type = "relationship";
  }
};
__decorate([a2({ type: String, json: { write: true } })], n12.prototype, "description", void 0), __decorate([a2({ type: Number, json: { type: D, write: true } })], n12.prototype, "displayCount", void 0), __decorate([a2({ type: ["list"], json: { write: { isRequired: true } } })], n12.prototype, "displayType", void 0), __decorate([a2({ type: [i11], json: { write: true } })], n12.prototype, "orderByFields", void 0), __decorate([a2({ type: Number, json: { type: D, write: { isRequired: true } } })], n12.prototype, "relationshipId", void 0), __decorate([a2({ type: String, json: { write: true } })], n12.prototype, "title", void 0), __decorate([a2({ type: ["relationship"], readOnly: true, json: { read: false, write: { isRequired: true } } })], n12.prototype, "type", void 0), n12 = __decorate([c("esri.popup.content.RelationshipContent")], n12);
var l6 = n12;

// node_modules/@arcgis/core/popup/content/TextContent.js
var s14;
var p15 = s14 = class extends p3 {
  constructor(t2) {
    super(t2), this.text = null, this.type = "text";
  }
  clone() {
    return new s14({ text: this.text });
  }
};
__decorate([a2({ type: String, json: { write: true } })], p15.prototype, "text", void 0), __decorate([a2({ type: ["text"], readOnly: true, json: { read: false, write: { isRequired: true } } })], p15.prototype, "type", void 0), p15 = s14 = __decorate([c("esri.popup.content.TextContent")], p15);
var n13 = p15;

// node_modules/@arcgis/core/popup/support/UtilityNetworkAssociationType.js
var i12 = class extends l(n2) {
  constructor(t2) {
    super(t2), this.title = null, this.description = null, this.type = null, this.associatedNetworkSourceId = null, this.associatedAssetGroup = null, this.associatedAssetType = null;
  }
};
__decorate([a2({ type: String, json: { write: true } })], i12.prototype, "title", void 0), __decorate([a2({ type: String, json: { write: true } })], i12.prototype, "description", void 0), __decorate([a2({ type: ["attachment", "connectivity", "container", "content", "structure"], json: { write: true } })], i12.prototype, "type", void 0), __decorate([a2({ type: Number, json: { type: D, write: true } })], i12.prototype, "associatedNetworkSourceId", void 0), __decorate([a2({ type: Number, json: { type: D, write: true } })], i12.prototype, "associatedAssetGroup", void 0), __decorate([a2({ type: Number, json: { type: D, write: true } })], i12.prototype, "associatedAssetType", void 0), i12 = __decorate([c("esri.popup.support.UtilityNetworkAssociationType")], i12);
var c5 = i12;

// node_modules/@arcgis/core/popup/content/UtilityNetworkAssociationsContent.js
var c6 = class extends l(p3) {
  constructor(t2) {
    super(t2), this.description = null, this.displayCount = null, this.title = null, this.associationTypes = [], this.type = "utility-network-associations";
  }
};
__decorate([a2({ type: String, json: { write: true } })], c6.prototype, "description", void 0), __decorate([a2({ type: Number, json: { type: D, write: true } })], c6.prototype, "displayCount", void 0), __decorate([a2({ type: String, json: { write: true } })], c6.prototype, "title", void 0), __decorate([a2({ type: [c5], json: { write: true } })], c6.prototype, "associationTypes", void 0), __decorate([r({ utilityNetworkAssociations: "utility-network-associations" })], c6.prototype, "type", void 0), c6 = __decorate([c("esri.popup.content.UtilityNetworkAssociationsContent")], c6);
var a9 = c6;

// node_modules/@arcgis/core/popup/content.js
var a10 = n6;
var c7 = p3;
var f2 = l2;
var l7 = i6;
var C2 = l3;
var j = u2;
var y = l6;
var x3 = n13;
var d2 = a9;
var u3 = { base: null, key: "type", typeMap: { attachment: a10, media: j, text: x3, expression: l7, field: C2, relationship: y, utilityNetworkAssociations: d2 } };
var k = { base: null, key: "type", typeMap: { attachment: a10, media: j, text: x3, expression: l7, field: C2, relationship: y } };

// node_modules/@arcgis/core/popup/LayerOptions.js
var e;
var p16 = e = class extends n2 {
  constructor(o7) {
    super(o7), this.returnTopmostRaster = null, this.showNoDataRecords = null;
  }
  clone() {
    return new e({ showNoDataRecords: this.showNoDataRecords, returnTopmostRaster: this.returnTopmostRaster });
  }
};
__decorate([a2({ type: Boolean, json: { write: true } })], p16.prototype, "returnTopmostRaster", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], p16.prototype, "showNoDataRecords", void 0), p16 = e = __decorate([c("esri.popup.LayerOptions")], p16);
var a11 = p16;

// node_modules/@arcgis/core/popup/RelatedRecordsInfo.js
var l8;
var i13 = l8 = class extends n2 {
  constructor(e2) {
    super(e2), this.showRelatedRecords = null, this.orderByFields = null;
  }
  clone() {
    return new l8({ showRelatedRecords: this.showRelatedRecords, orderByFields: this.orderByFields ? a(this.orderByFields) : null });
  }
};
__decorate([a2({ type: Boolean, json: { write: true } })], i13.prototype, "showRelatedRecords", void 0), __decorate([a2({ type: [i11], json: { write: true } })], i13.prototype, "orderByFields", void 0), i13 = l8 = __decorate([c("esri.popup.RelatedRecordsInfo")], i13);
var p17 = i13;

// node_modules/@arcgis/core/support/actions/ActionToggle.js
var o6;
var a12 = o6 = class extends p2 {
  constructor(i14) {
    super(i14), this.image = null, this.type = "toggle", this.value = false;
  }
  clone() {
    return new o6({ active: this.active, className: this.className, disabled: this.disabled, icon: this.icon, id: this.id, indicator: this.indicator, title: this.title, visible: this.visible, image: this.image, value: this.value });
  }
};
__decorate([a2()], a12.prototype, "image", void 0), __decorate([a2()], a12.prototype, "value", void 0), a12 = o6 = __decorate([c("esri.support.actions.ActionToggle")], a12);
var r5 = a12;

// node_modules/@arcgis/core/PopupTemplate.js
var B = "relationships/";
var L = "expression/";
var M = q.ofType({ key: "type", defaultKeyValue: "button", base: p2, typeMap: { button: a3, toggle: r5 } });
var P = { base: c7, key: "type", typeMap: { media: j, custom: f2, text: x3, attachments: a10, fields: C2, expression: l7, relationship: y, utilityNetworkAssociations: d2 } };
var W = /* @__PURE__ */ new Set(["attachments", "fields", "media", "text", "expression", "relationship"]);
var k2 = /* @__PURE__ */ new Set([...W, "utility-network-associations"]);
var U = class extends l(n2) {
  constructor(t2) {
    super(t2), this.actions = null, this.expressionInfos = null, this.fieldInfos = null, this.layerOptions = null, this.lastEditInfoEnabled = true, this.outFields = null, this.overwriteActions = false, this.returnGeometry = false, this.title = "";
  }
  get content() {
    return this._get("content") ?? "";
  }
  set content(t2) {
    this._set("content", t2);
  }
  castContent(t2) {
    return Array.isArray(t2) ? t2.map((t3) => x(P, t3)) : "string" == typeof t2 || "function" == typeof t2 || t2 instanceof HTMLElement || C(t2) ? t2 : (n.getLogger(this).error("content error", "unsupported content value", { value: t2 }), null);
  }
  readContent(t2, e2) {
    const { popupElements: o7 } = e2;
    return Array.isArray(o7) && o7.length > 0 ? this._readPopupInfoElements(e2.description, e2.mediaInfos, o7) : this._readPopupInfo(e2);
  }
  writeWebSceneContent(t2, e2, o7, s15) {
    this._writePopupTemplateContent(t2, e2, s15);
  }
  writeWebMapContent(t2, e2, o7, s15) {
    this._writePopupTemplateContent(t2, e2, s15);
  }
  writeFieldInfos(t2, e2, o7, s15) {
    const { content: i14 } = this, r6 = Array.isArray(i14) ? i14 : null, _a = s15 || {}, { writeFieldFormat: n14 } = _a, p18 = __objRest(_a, ["writeFieldFormat"]);
    if (t2) {
      const o8 = r6 ? r6.filter((t3) => "fields" === t3.type) : [], s16 = o8.length && o8.every((t3) => t3.fieldInfos?.length);
      e2.fieldInfos = t2.filter(Boolean).map((t3) => {
        const e3 = t3.toJSON(p18);
        return s16 && (e3.visible = false), e3;
      });
    }
    if (r6) for (const l9 of r6) "fields" === l9.type && this._writeFieldsContent(l9, e2, p18);
  }
  writeLayerOptions(t2, e2, o7, s15) {
    e2[o7] = !t2 || null === t2.showNoDataRecords && null === t2.returnTopmostRaster ? null : t2.toJSON(s15);
  }
  writeTitle(t2, e2) {
    e2.title = t2 || "";
  }
  async collectRequiredFields(t2, e2, o7) {
    const s15 = this.expressionInfos || [];
    await this._collectExpressionInfoFields(t2, e2, o7, [...s15, ...this._getContentExpressionInfos(this.content, s15)]), w(t2, e2, [...this.outFields || [], ...this._getActionsFields(this.actions), ...this._getTitleFields(this.title), ...this._getContentFields(this.content)]);
  }
  async getRequiredFields(t2, e2) {
    const o7 = /* @__PURE__ */ new Set();
    return await this.collectRequiredFields(o7, t2, e2), [...o7].sort();
  }
  _writePopupTemplateContent(t2, e2, o7) {
    "string" != typeof t2 ? Array.isArray(t2) && (e2.popupElements = t2.filter((t3) => "web-scene" === o7?.origin ? W.has(t3.type) : k2.has(t3.type)).map((t3) => t3?.toJSON(o7)), e2.popupElements.forEach((t3) => {
      "attachments" === t3.type ? this._writeAttachmentContent(e2) : "media" === t3.type ? this._writeMediaContent(t3, e2) : "text" === t3.type ? this._writeTextContent(t3, e2) : "relationship" === t3.type && this._writeRelationshipContent(t3, e2);
    })) : e2.description = t2;
  }
  _writeFieldsContent(t2, e2, o7) {
    const s15 = t2.fieldInfos;
    if (!Array.isArray(s15) || !s15.length) return;
    const i14 = e2.fieldInfos;
    if (Array.isArray(i14)) for (const r6 of s15) {
      const t3 = i14.find((t4) => t4.fieldName?.toLowerCase() === r6.fieldName?.toLowerCase());
      t3 ? t3.visible = true : i14.push(r6.toJSON(o7));
    }
    else e2.fieldInfos = s15.map((t3) => t3.toJSON(o7));
  }
  _writeAttachmentContent(t2) {
    t2.showAttachments || (t2.showAttachments = true);
  }
  _writeRelationshipContent(t2, e2) {
    const o7 = t2.orderByFields?.map((e3) => this._toFieldOrderJSON(e3, t2.relationshipId)) || [], s15 = [...e2.relatedRecordsInfo?.orderByFields || [], ...o7];
    e2.relatedRecordsInfo = __spreadValues({ showRelatedRecords: true }, s15?.length && { orderByFields: s15 });
  }
  _writeTextContent(t2, e2) {
    !e2.description && t2.text && (e2.description = t2.text);
  }
  _writeMediaContent(t2, e2) {
    if (!Array.isArray(t2.mediaInfos) || !t2.mediaInfos.length) return;
    const o7 = a(t2.mediaInfos);
    Array.isArray(e2.mediaInfos) ? e2.mediaInfos = [...e2.mediaInfos, ...o7] : e2.mediaInfos = o7;
  }
  _readPopupInfoElements(t2, e2, o7) {
    const s15 = { description: false, mediaInfos: false };
    return o7.map((o8) => "media" === o8.type ? (o8.mediaInfos || !e2 || s15.mediaInfos || (o8.mediaInfos = e2, s15.mediaInfos = true), j.fromJSON(o8)) : "text" === o8.type ? (o8.text || !t2 || s15.description || (o8.text = t2, s15.description = true), x3.fromJSON(o8)) : "attachments" === o8.type ? a10.fromJSON(o8) : "fields" === o8.type ? C2.fromJSON(o8) : "expression" === o8.type ? l7.fromJSON(o8) : "relationship" === o8.type ? y.fromJSON(o8) : "utilityNetworkAssociations" === o8.type ? d2.fromJSON(o8) : void 0).filter(Boolean);
  }
  _toRelationshipContent(t2) {
    const { field: e2, order: o7 } = t2;
    if (!e2?.startsWith(B)) return null;
    const s15 = e2.replace(B, "").split("/");
    if (2 !== s15.length) return null;
    const i14 = parseInt(s15[0], 10), r6 = s15[1];
    return !Number.isNaN(i14) && r6 ? y.fromJSON({ relationshipId: i14, orderByFields: [{ field: r6, order: o7 }] }) : null;
  }
  _toFieldOrderJSON(t2, e2) {
    const { order: o7, field: s15 } = t2;
    return { field: `${B}${e2}/${s15}`, order: o7 };
  }
  _readPopupInfo({ description: t2, mediaInfos: e2, showAttachments: o7, relatedRecordsInfo: s15 = { showRelatedRecords: false } }) {
    const i14 = [];
    t2 ? i14.push(new x3({ text: t2 })) : i14.push(new C2()), Array.isArray(e2) && e2.length && i14.push(j.fromJSON({ mediaInfos: e2 })), o7 && i14.push(a10.fromJSON({ displayType: "auto" }));
    const { showRelatedRecords: r6, orderByFields: n14 } = s15;
    return r6 && n14?.length && n14.forEach((t3) => {
      const e3 = this._toRelationshipContent(t3);
      e3 && i14.push(e3);
    }), i14.length ? i14 : t2;
  }
  _getContentElementFields(t2) {
    const e2 = t2?.type;
    if ("attachments" === e2) return [...this._extractFieldNames(t2.title), ...this._extractFieldNames(t2.description)];
    if ("custom" === e2) return t2.outFields || [];
    if ("fields" === e2) return [...this._extractFieldNames(t2.title), ...this._extractFieldNames(t2.description), ...this._getFieldInfoFields(t2.fieldInfos ?? this.fieldInfos)];
    if ("media" === e2) {
      const e3 = t2.mediaInfos || [];
      return [...this._extractFieldNames(t2.title), ...this._extractFieldNames(t2.description), ...e3.reduce((t3, e4) => [...t3, ...this._getMediaInfoFields(e4)], [])];
    }
    return "text" === e2 ? this._extractFieldNames(t2.text) : "relationship" === e2 || "utility-network-associations" === e2 ? [...this._extractFieldNames(t2.title), ...this._extractFieldNames(t2.description)] : [];
  }
  _getMediaInfoFields(t2) {
    const { caption: e2, title: o7, value: s15 } = t2, i14 = s15 || {}, { fields: r6, normalizeField: n14, tooltipField: p18, sourceURL: l9, linkURL: a13 } = i14, d3 = [...this._extractFieldNames(o7), ...this._extractFieldNames(e2), ...this._extractFieldNames(l9), ...this._extractFieldNames(a13), ...r6 ?? []];
    return n14 && d3.push(n14), p18 && d3.push(p18), d3;
  }
  _getContentExpressionInfos(t2, e2) {
    return Array.isArray(t2) ? t2.reduce((t3, e3) => [...t3, ..."expression" === e3.type && e3.expressionInfo ? [e3.expressionInfo] : []], e2) : [];
  }
  _getContentFields(t2) {
    return "string" == typeof t2 ? this._extractFieldNames(t2) : Array.isArray(t2) ? t2.reduce((t3, e2) => [...t3, ...this._getContentElementFields(e2)], []) : [];
  }
  async _collectExpressionInfoFields(t2, e2, o7, s15) {
    s15 && await Promise.all(s15.map((s16) => v(t2, e2, o7, s16.expression)));
  }
  _getFieldInfoFields(t2) {
    return t2 ? t2.filter(({ fieldName: t3, visible: e2 }) => !(void 0 !== e2 && !e2 || !t3 || t3.startsWith(B) || t3.startsWith(L))).map((t3) => t3.fieldName) : [];
  }
  _getActionsFields(t2) {
    return t2 ? t2.toArray().reduce((t3, e2) => [...t3, ...this._getActionFields(e2)], []) : [];
  }
  _getActionFields(t2) {
    const { className: e2, title: o7, type: s15 } = t2, i14 = "button" === s15 || "toggle" === s15 ? t2.image : "";
    return [...this._extractFieldNames(o7), ...this._extractFieldNames(e2), ...this._extractFieldNames(i14)];
  }
  _getTitleFields(t2) {
    return "string" == typeof t2 ? this._extractFieldNames(t2) : [];
  }
  _extractFieldNames(t2) {
    return Be(t2).filter((t3) => !(t3.startsWith(B) || t3.startsWith(L)));
  }
};
__decorate([a2({ type: M })], U.prototype, "actions", void 0), __decorate([a2()], U.prototype, "content", null), __decorate([m("content")], U.prototype, "castContent", null), __decorate([o2("content", ["description", "fieldInfos", "popupElements", "mediaInfos", "showAttachments", "relatedRecordsInfo"])], U.prototype, "readContent", null), __decorate([r2("web-scene", "content", { popupElements: { type: q.ofType(k) }, showAttachments: { type: Boolean }, mediaInfos: { type: q.ofType(m3) }, description: { type: String }, relatedRecordsInfo: { type: p17 } })], U.prototype, "writeWebSceneContent", null), __decorate([r2("content", { popupElements: { type: q.ofType(u3) }, showAttachments: { type: Boolean }, mediaInfos: { type: q.ofType(m3) }, description: { type: String }, relatedRecordsInfo: { type: p17 } })], U.prototype, "writeWebMapContent", null), __decorate([a2({ type: [n4], json: { write: true } })], U.prototype, "expressionInfos", void 0), __decorate([a2({ type: [u] })], U.prototype, "fieldInfos", void 0), __decorate([r2("fieldInfos")], U.prototype, "writeFieldInfos", null), __decorate([a2({ type: a11 })], U.prototype, "layerOptions", void 0), __decorate([r2("layerOptions")], U.prototype, "writeLayerOptions", null), __decorate([a2({ type: Boolean, json: { read: { source: "showLastEditInfo" }, write: { target: "showLastEditInfo" }, default: true } })], U.prototype, "lastEditInfoEnabled", void 0), __decorate([a2()], U.prototype, "outFields", void 0), __decorate([a2()], U.prototype, "overwriteActions", void 0), __decorate([a2()], U.prototype, "returnGeometry", void 0), __decorate([a2({ json: { type: String } })], U.prototype, "title", void 0), __decorate([r2("title")], U.prototype, "writeTitle", null), U = __decorate([c("esri.PopupTemplate")], U);
var q2 = U;

export {
  n3 as n,
  o4 as o,
  t,
  i11 as i,
  c5 as c,
  u,
  c3 as c2,
  n6 as n2,
  l3 as l,
  n4 as n3,
  p5 as p,
  s5 as s,
  u2,
  n13 as n4,
  C2 as C,
  j,
  x3 as x,
  p2,
  a3 as a,
  r5 as r,
  q2 as q
};
//# sourceMappingURL=chunk-HBLYZMSH.js.map
