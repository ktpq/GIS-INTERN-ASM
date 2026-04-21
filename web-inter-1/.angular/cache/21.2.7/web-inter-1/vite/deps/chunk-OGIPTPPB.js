import {
  i2 as i,
  t
} from "./chunk-EK6IDC6N.js";
import {
  c2,
  i as i2
} from "./chunk-XWU2ZKWF.js";
import {
  Be,
  v,
  w,
  x as x2
} from "./chunk-DWF2MCID.js";
import {
  l as l2
} from "./chunk-7ZFYLJ6O.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import {
  r,
  u
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a2,
  c,
  l2 as l,
  m2 as m,
  m3 as m2,
  o4 as o,
  r4 as r2,
  s3 as s,
  x
} from "./chunk-7ELXYOAW.js";
import {
  a
} from "./chunk-XE7VYYSA.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/form/ExpressionInfo.js
var s2;
var i3 = s2 = class extends n {
  constructor(t2) {
    super(t2), this.expression = null, this.name = null, this.returnType = "boolean", this.title = null;
  }
  clone() {
    return new s2({ name: this.name, title: this.title, expression: this.expression, returnType: this.returnType });
  }
};
__decorate([a2({ type: String, json: { write: true } })], i3.prototype, "expression", void 0), __decorate([a2({ type: String, json: { write: true } })], i3.prototype, "name", void 0), __decorate([a2({ type: ["boolean", "date", "number", "string"], json: { write: true } })], i3.prototype, "returnType", void 0), __decorate([a2({ type: String, json: { write: true } })], i3.prototype, "title", void 0), i3 = s2 = __decorate([c("esri.form.ExpressionInfo")], i3);
var n2 = i3;

// node_modules/@arcgis/core/form/elements/Element.js
var s3 = class extends n {
  constructor(t2) {
    super(t2), this.description = null, this.label = null, this.type = null, this.visibilityExpression = null;
  }
};
__decorate([m({ type: String, json: { write: true } })], s3.prototype, "description", void 0), __decorate([m({ type: String, json: { write: true } })], s3.prototype, "label", void 0), __decorate([m()], s3.prototype, "type", void 0), __decorate([m({ type: String, json: { write: true } })], s3.prototype, "visibilityExpression", void 0), s3 = __decorate([l("esri.form.elements.Element")], s3);

// node_modules/@arcgis/core/form/elements/inputs/attachments/Input.js
var p = class extends l2(n) {
  constructor() {
    super(...arguments), this.type = null;
  }
};
__decorate([a2()], p.prototype, "type", void 0), p = __decorate([c("esri.form.elements.inputs.attachments.Input")], p);
var c3 = p;

// node_modules/@arcgis/core/form/elements/inputs/attachments/support/utils.js
var a3 = ["any", "capture", "upload"];

// node_modules/@arcgis/core/form/elements/inputs/attachments/AudioInput.js
var s4 = class extends c3 {
  constructor(t2) {
    super(t2), this.type = "audio", this.inputMethod = "any", this.maxDuration = null;
  }
};
__decorate([a2({ type: ["audio"], readOnly: true, json: { write: true } })], s4.prototype, "type", void 0), __decorate([a2({ type: a3, json: { write: true } })], s4.prototype, "inputMethod", void 0), __decorate([a2({ type: Number, json: { write: true } })], s4.prototype, "maxDuration", void 0), s4 = __decorate([c("esri.form.elements.inputs.attachments.AudioInput")], s4);
var i4 = s4;

// node_modules/@arcgis/core/form/elements/inputs/attachments/DocumentInput.js
var s5 = class extends c3 {
  constructor(t2) {
    super(t2), this.type = "document", this.maxFileSize = null;
  }
};
__decorate([a2({ type: ["document"], readOnly: true, json: { write: true } })], s5.prototype, "type", void 0), __decorate([a2({ type: Number, json: { write: true } })], s5.prototype, "maxFileSize", void 0), s5 = __decorate([c("esri.form.elements.inputs.attachments.DocumentInput")], s5);
var p2 = s5;

// node_modules/@arcgis/core/form/elements/inputs/attachments/ImageInput.js
var s6 = class extends c3 {
  constructor(t2) {
    super(t2), this.type = "image", this.inputMethod = "any", this.maxImageSize = null;
  }
};
__decorate([a2({ type: ["image"], readOnly: true, json: { write: true } })], s6.prototype, "type", void 0), __decorate([a2({ type: a3, json: { write: true } })], s6.prototype, "inputMethod", void 0), __decorate([a2({ type: Number, json: { write: true } })], s6.prototype, "maxImageSize", void 0), s6 = __decorate([c("esri.form.elements.inputs.attachments.ImageInput")], s6);
var i5 = s6;

// node_modules/@arcgis/core/form/elements/inputs/attachments/SignatureInput.js
var p3 = class extends c3 {
  constructor(t2) {
    super(t2), this.type = "signature", this.inputMethod = "any";
  }
};
__decorate([a2({ type: ["signature"], readOnly: true, json: { write: true } })], p3.prototype, "type", void 0), __decorate([a2({ type: a3, json: { write: true } })], p3.prototype, "inputMethod", void 0), p3 = __decorate([c("esri.form.elements.inputs.attachments.SignatureInput")], p3);
var i6 = p3;

// node_modules/@arcgis/core/form/elements/inputs/attachments/VideoInput.js
var s7 = class extends c3 {
  constructor(t2) {
    super(t2), this.type = "video", this.inputMethod = "any", this.maxDuration = null;
  }
};
__decorate([a2({ type: ["video"], readOnly: true, json: { write: true } })], s7.prototype, "type", void 0), __decorate([a2({ type: a3, json: { write: true } })], s7.prototype, "inputMethod", void 0), __decorate([a2({ type: Number, json: { write: true } })], s7.prototype, "maxDuration", void 0), s7 = __decorate([c("esri.form.elements.inputs.attachments.VideoInput")], s7);
var i7 = s7;

// node_modules/@arcgis/core/form/elements/inputs/attachments/support/inputs.js
function u2(e) {
  return { nestableTypes: { base: c3, key: "type", typeMap: { audio: i4, document: p2, image: i5, signature: i6, video: i7 } }, allTypes: { base: c3, key: "type", typeMap: { attachment: e, audio: i4, document: p2, image: i5, signature: i6, video: i7 } } };
}
function s8(t2, p15, n12) {
  return t2 ? t2.map((t3) => x(n12 ? p15.nestableTypes : p15.allTypes, t3)) : null;
}
function i8(e, t2, p15) {
  if (!e) return null;
  const n12 = p15 ? t2.nestableTypes.typeMap : t2.allTypes.typeMap;
  return e.filter((e2) => n12[e2.type]).map((e2) => n12[e2.type].fromJSON(e2));
}
function m3(e, t2, p15) {
  if (!e) return null;
  const n12 = p15 ? t2.nestableTypes.typeMap : t2.allTypes.typeMap;
  return e.filter((e2) => n12[e2.type]).map((e2) => e2.toJSON());
}

// node_modules/@arcgis/core/form/elements/inputs/attachments/AttachmentInput.js
var y = class extends c3 {
  constructor(t2) {
    super(t2), this.type = "attachment", this.attachmentAssociationType = "exact";
  }
  get inputTypes() {
    return this._get("inputTypes") ?? null;
  }
  set inputTypes(t2) {
    this._set("inputTypes", t2);
  }
  castInputs(t2) {
    return s8(t2, m4, true);
  }
  readInputs(t2, e) {
    return i8(e.inputTypes, m4, true);
  }
  writeInputs(t2, e) {
    e.inputTypes = m3(t2, m4, true);
  }
};
__decorate([a2({ type: ["attachment"], readOnly: true, json: { write: true } })], y.prototype, "type", void 0), __decorate([a2({ type: ["any", "exact", "exactOrNone"], json: { write: true } })], y.prototype, "attachmentAssociationType", void 0), __decorate([a2({ json: { write: { isRequired: true } } })], y.prototype, "inputTypes", null), __decorate([m2("inputTypes")], y.prototype, "castInputs", null), __decorate([o("inputTypes")], y.prototype, "readInputs", null), __decorate([r2("inputTypes")], y.prototype, "writeInputs", null), y = __decorate([c("esri.form.elements.inputs.attachments.AttachmentInput")], y);
var m4 = u2(y);
var l3 = y;

// node_modules/@arcgis/core/form/elements/AttachmentElement.js
var r3;
var a4 = u2(l3);
var p4 = r3 = class extends s3 {
  constructor(t2) {
    super(t2), this.allowUserRename = true, this.attachmentKeyword = null, this.displayFilename = false, this.editableExpression = null, this.filenameExpression = 'StandardizeFilename(`${$formElement.attachmentKeyword}_${Text(Now(), "YMMDDHHmmss")}`)', this.input = null, this.maxAttachmentCount = null, this.minAttachmentCount = null, this.type = "attachment", this.useOriginalFilename = true;
  }
  clone() {
    return new r3({ allowUserRename: this.allowUserRename, attachmentKeyword: this.attachmentKeyword, description: this.description, displayFilename: this.displayFilename, editableExpression: this.editableExpression, filenameExpression: this.filenameExpression, input: this.input?.clone(), label: this.label, maxAttachmentCount: this.maxAttachmentCount, minAttachmentCount: this.minAttachmentCount, useOriginalFilename: this.useOriginalFilename, visibilityExpression: this.visibilityExpression });
  }
};
__decorate([a2({ type: Boolean, json: { write: true } })], p4.prototype, "allowUserRename", void 0), __decorate([a2({ type: String, json: { write: { isRequired: true } } })], p4.prototype, "attachmentKeyword", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], p4.prototype, "displayFilename", void 0), __decorate([a2({ type: String, json: { write: true } })], p4.prototype, "editableExpression", void 0), __decorate([a2({ type: String, json: { write: true } })], p4.prototype, "filenameExpression", void 0), __decorate([a2({ types: a4.allTypes, json: { read: { source: "inputType" }, write: { target: "inputType", isRequired: true } } })], p4.prototype, "input", void 0), __decorate([a2({ type: Number, json: { write: true } })], p4.prototype, "maxAttachmentCount", void 0), __decorate([a2({ type: Number, json: { write: true } })], p4.prototype, "minAttachmentCount", void 0), __decorate([a2({ type: ["attachment"], readOnly: true, json: { read: false, write: true } })], p4.prototype, "type", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], p4.prototype, "useOriginalFilename", void 0), p4 = r3 = __decorate([c("esri.form.elements.AttachmentElement")], p4);
var l4 = p4;

// node_modules/@arcgis/core/form/elements/inputs/Input.js
var s9 = class extends n {
  constructor(t2) {
    super(t2), this.type = null;
  }
};
__decorate([a2()], s9.prototype, "type", void 0), s9 = __decorate([c("esri.form.elements.inputs.Input")], s9);
var p5 = s9;

// node_modules/@arcgis/core/form/elements/inputs/TextInput.js
var s10 = class extends p5 {
  constructor(t2) {
    super(t2), this.maxLength = null, this.minLength = 0;
  }
};
__decorate([a2({ type: Number, json: { write: true } })], s10.prototype, "maxLength", void 0), __decorate([a2({ type: Number, json: { write: true } })], s10.prototype, "minLength", void 0), s10 = __decorate([c("esri.form.elements.inputs.TextInput")], s10);
var n3 = s10;

// node_modules/@arcgis/core/form/elements/inputs/BarcodeScannerInput.js
var n4;
var s11 = n4 = class extends n3 {
  constructor(e) {
    super(e), this.type = "barcode-scanner";
  }
  clone() {
    return new n4({ maxLength: this.maxLength, minLength: this.minLength });
  }
};
__decorate([a2({ type: ["barcode-scanner"], json: { read: false, write: true } })], s11.prototype, "type", void 0), s11 = n4 = __decorate([c("esri.form.elements.inputs.BarcodeScannerInput")], s11);
var a5 = s11;

// node_modules/@arcgis/core/form/elements/inputs/ComboBoxInput.js
var n5;
var r4 = n5 = class extends p5 {
  constructor(o2) {
    super(o2), this.noValueOptionLabel = null, this.showNoValueOption = true, this.type = "combo-box";
  }
  clone() {
    return new n5({ showNoValueOption: this.showNoValueOption, noValueOptionLabel: this.noValueOptionLabel });
  }
};
__decorate([a2({ type: String, json: { write: true } })], r4.prototype, "noValueOptionLabel", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], r4.prototype, "showNoValueOption", void 0), __decorate([a2({ type: ["combo-box"], json: { read: false, write: true } })], r4.prototype, "type", void 0), r4 = n5 = __decorate([c("esri.form.elements.inputs.ComboBoxInput")], r4);
var s12 = r4;

// node_modules/@arcgis/core/form/elements/inputs/DatePickerInput.js
var p6;
function s13(r6) {
  return null != r6 ? r6 : null;
}
function a6(r6) {
  return null != r6 ? r6 : null;
}
var m5 = p6 = class extends p5 {
  constructor(r6) {
    super(r6), this.max = null, this.min = null, this.type = "date-picker";
  }
  readMax(r6, t2) {
    return s13(t2.max);
  }
  writeMax(r6, t2) {
    t2.max = a6(r6);
  }
  readMin(r6, t2) {
    return s13(t2.min);
  }
  writeMin(r6, t2) {
    t2.min = a6(r6);
  }
  clone() {
    return new p6({ max: this.max, min: this.min });
  }
};
__decorate([a2({ type: String, json: { type: String, write: true } })], m5.prototype, "max", void 0), __decorate([o("max")], m5.prototype, "readMax", null), __decorate([r2("max")], m5.prototype, "writeMax", null), __decorate([a2({ type: String, json: { type: String, write: true } })], m5.prototype, "min", void 0), __decorate([o("min")], m5.prototype, "readMin", null), __decorate([r2("min")], m5.prototype, "writeMin", null), __decorate([a2({ type: ["date-picker"], json: { read: false, write: true } })], m5.prototype, "type", void 0), m5 = p6 = __decorate([c("esri.form.elements.inputs.DatePickerInput")], m5);
var l5 = m5;

// node_modules/@arcgis/core/form/elements/inputs/DateTimeOffsetPickerInput.js
var s14;
function p7(t2) {
  return null != t2 ? t2 : null;
}
function m6(t2) {
  return null != t2 ? t2 : null;
}
var l6 = s14 = class extends p5 {
  constructor(t2) {
    super(t2), this.includeTimeOffset = true, this.max = null, this.min = null, this.timeResolution = "minutes", this.type = "datetimeoffset-picker";
  }
  readMax(t2, e) {
    return p7(e.max);
  }
  writeMax(t2, e) {
    e.max = m6(t2);
  }
  readMin(t2, e) {
    return p7(e.min);
  }
  writeMin(t2, e) {
    e.min = m6(t2);
  }
  readTimeResolution(t2, e) {
    return p7(e.timeResolution);
  }
  writeTimeResolution(t2, e) {
    e.timeResolution = m6(t2);
  }
  clone() {
    return new s14({ includeTimeOffset: this.includeTimeOffset, max: this.max, min: this.min, timeResolution: this.timeResolution });
  }
};
__decorate([a2({ type: Boolean, json: { write: true } })], l6.prototype, "includeTimeOffset", void 0), __decorate([a2({ type: String, json: { type: String, write: true } })], l6.prototype, "max", void 0), __decorate([o("max")], l6.prototype, "readMax", null), __decorate([r2("max")], l6.prototype, "writeMax", null), __decorate([a2({ type: String, json: { type: String, write: true } })], l6.prototype, "min", void 0), __decorate([o("min")], l6.prototype, "readMin", null), __decorate([r2("min")], l6.prototype, "writeMin", null), __decorate([a2({ type: String, json: { type: String, write: true } })], l6.prototype, "timeResolution", void 0), __decorate([o("timeResolution")], l6.prototype, "readTimeResolution", null), __decorate([r2("timeResolution")], l6.prototype, "writeTimeResolution", null), __decorate([a2({ type: ["datetimeoffset-picker"], json: { read: false, write: true } })], l6.prototype, "type", void 0), l6 = s14 = __decorate([c("esri.form.elements.inputs.DateTimeOffsetPickerInput")], l6);
var u3 = l6;

// node_modules/@arcgis/core/form/elements/inputs/DateTimePickerInput.js
var p8;
function m7(e) {
  return null != e ? new Date(e) : null;
}
function a7(e) {
  return e ? e.getTime() : null;
}
var s15 = p8 = class extends p5 {
  constructor(e) {
    super(e), this.includeTime = false, this.max = null, this.min = null, this.type = "datetime-picker";
  }
  readMax(e, t2) {
    return m7(t2.max);
  }
  writeMax(e, t2) {
    t2.max = a7(e);
  }
  readMin(e, t2) {
    return m7(t2.min);
  }
  writeMin(e, t2) {
    t2.min = a7(e);
  }
  clone() {
    return new p8({ includeTime: this.includeTime, max: this.max, min: this.min });
  }
};
__decorate([a2({ type: Boolean, json: { write: true } })], s15.prototype, "includeTime", void 0), __decorate([a2({ type: Date, json: { type: Number, write: true } })], s15.prototype, "max", void 0), __decorate([o("max")], s15.prototype, "readMax", null), __decorate([r2("max")], s15.prototype, "writeMax", null), __decorate([a2({ type: Date, json: { type: Number, write: true } })], s15.prototype, "min", void 0), __decorate([o("min")], s15.prototype, "readMin", null), __decorate([r2("min")], s15.prototype, "writeMin", null), __decorate([a2({ type: ["datetime-picker"], json: { read: false, write: true } })], s15.prototype, "type", void 0), s15 = p8 = __decorate([c("esri.form.elements.inputs.DateTimePickerInput")], s15);
var u4 = s15;

// node_modules/@arcgis/core/form/elements/inputs/RadioButtonsInput.js
var s16;
var r5 = s16 = class extends p5 {
  constructor(o2) {
    super(o2), this.noValueOptionLabel = null, this.showNoValueOption = true, this.type = "radio-buttons";
  }
  clone() {
    return new s16({ noValueOptionLabel: this.noValueOptionLabel, showNoValueOption: this.showNoValueOption });
  }
};
__decorate([a2({ type: String, json: { write: true } })], r5.prototype, "noValueOptionLabel", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], r5.prototype, "showNoValueOption", void 0), __decorate([a2({ type: ["radio-buttons"], json: { read: false, write: true } })], r5.prototype, "type", void 0), r5 = s16 = __decorate([c("esri.form.elements.inputs.RadioButtonsInput")], r5);
var i9 = r5;

// node_modules/@arcgis/core/form/elements/inputs/SwitchInput.js
var s17;
var i10 = s17 = class extends p5 {
  constructor(t2) {
    super(t2), this.offValue = null, this.onValue = null, this.type = "switch";
  }
  clone() {
    return new s17({ offValue: this.offValue, onValue: this.onValue });
  }
};
__decorate([a2({ type: [String, Number], json: { write: true } })], i10.prototype, "offValue", void 0), __decorate([a2({ type: [String, Number], json: { write: true } })], i10.prototype, "onValue", void 0), __decorate([a2({ type: ["switch"], json: { read: false, write: true } })], i10.prototype, "type", void 0), i10 = s17 = __decorate([c("esri.form.elements.inputs.SwitchInput")], i10);
var n6 = i10;

// node_modules/@arcgis/core/form/elements/inputs/TextAreaInput.js
var s18;
var n7 = s18 = class extends n3 {
  constructor(t2) {
    super(t2), this.type = "text-area";
  }
  clone() {
    return new s18({ maxLength: this.maxLength, minLength: this.minLength });
  }
};
__decorate([a2({ type: ["text-area"], json: { read: false, write: true } })], n7.prototype, "type", void 0), n7 = s18 = __decorate([c("esri.form.elements.inputs.TextAreaInput")], n7);
var p9 = n7;

// node_modules/@arcgis/core/form/elements/inputs/TextBoxInput.js
var s19;
var n8 = s19 = class extends n3 {
  constructor(t2) {
    super(t2), this.type = "text-box";
  }
  clone() {
    return new s19({ maxLength: this.maxLength, minLength: this.minLength });
  }
};
__decorate([a2({ type: ["text-box"], json: { read: false, write: true } })], n8.prototype, "type", void 0), n8 = s19 = __decorate([c("esri.form.elements.inputs.TextBoxInput")], n8);
var p10 = n8;

// node_modules/@arcgis/core/form/elements/inputs/TimePickerInput.js
var s20;
function p11(t2) {
  return null != t2 ? t2 : null;
}
function m8(t2) {
  return null != t2 ? t2 : null;
}
var l7 = s20 = class extends p5 {
  constructor(t2) {
    super(t2), this.max = null, this.min = null, this.timeResolution = "minutes", this.type = "time-picker";
  }
  readMax(t2, e) {
    return p11(e.max);
  }
  writeMax(t2, e) {
    e.max = m8(t2);
  }
  readMin(t2, e) {
    return p11(e.min);
  }
  writeMin(t2, e) {
    e.min = m8(t2);
  }
  readTimeResolution(t2, e) {
    return p11(e.timeResolution);
  }
  writeTimeResolution(t2, e) {
    e.timeResolution = m8(t2);
  }
  clone() {
    return new s20({ max: this.max, min: this.min, timeResolution: this.timeResolution });
  }
};
__decorate([a2({ type: String, json: { type: String, write: true } })], l7.prototype, "max", void 0), __decorate([o("max")], l7.prototype, "readMax", null), __decorate([r2("max")], l7.prototype, "writeMax", null), __decorate([a2({ type: String, json: { type: String, write: true } })], l7.prototype, "min", void 0), __decorate([o("min")], l7.prototype, "readMin", null), __decorate([r2("min")], l7.prototype, "writeMin", null), __decorate([a2({ type: String, json: { type: String, write: true } })], l7.prototype, "timeResolution", void 0), __decorate([o("timeResolution")], l7.prototype, "readTimeResolution", null), __decorate([r2("timeResolution")], l7.prototype, "writeTimeResolution", null), __decorate([a2({ type: ["time-picker"], json: { read: false, write: true } })], l7.prototype, "type", void 0), l7 = s20 = __decorate([c("esri.form.elements.inputs.TimePickerInput")], l7);
var u5 = l7;

// node_modules/@arcgis/core/form/elements/inputs.js
var c4 = a5;
var f = s12;
var j = l5;
var I = u3;
var k = u4;
var x3 = i9;
var b = n6;
var d = p9;
var T = p10;
var B = u5;
var P = { base: p5, key: "type", typeMap: { "barcode-scanner": c4, "combo-box": f, "date-picker": j, "datetime-picker": k, "datetimeoffset-picker": I, "radio-buttons": x3, switch: b, "text-area": d, "text-box": T, "time-picker": B } };

// node_modules/@arcgis/core/form/elements/FieldElement.js
var n9;
var l8 = n9 = class extends s3 {
  constructor(e) {
    super(e), this.domain = null, this.editable = null, this.editableExpression = null, this.fieldName = null, this.hint = null, this.input = null, this.requiredExpression = null, this.type = "field", this.valueExpression = null;
  }
  clone() {
    return new n9({ description: this.description, domain: this.domain, editable: this.editable, editableExpression: this.editableExpression, fieldName: this.fieldName, hint: this.hint, input: this.input, label: this.label, requiredExpression: this.requiredExpression, valueExpression: this.valueExpression, visibilityExpression: this.visibilityExpression });
  }
};
__decorate([a2({ types: t, json: { read: { reader: i }, write: true } })], l8.prototype, "domain", void 0), __decorate([a2({ type: Boolean, json: { write: true } })], l8.prototype, "editable", void 0), __decorate([a2({ type: String, json: { write: true } })], l8.prototype, "editableExpression", void 0), __decorate([a2({ type: String, json: { write: true } })], l8.prototype, "fieldName", void 0), __decorate([a2({ type: String, json: { write: true } })], l8.prototype, "hint", void 0), __decorate([a2({ types: P, json: { read: { source: "inputType" }, write: { target: "inputType" } } })], l8.prototype, "input", void 0), __decorate([a2({ type: String, json: { write: true } })], l8.prototype, "requiredExpression", void 0), __decorate([a2({ type: String, json: { read: false, write: true } })], l8.prototype, "type", void 0), __decorate([a2({ type: String, json: { write: true } })], l8.prototype, "valueExpression", void 0), l8 = n9 = __decorate([c("esri.form.elements.FieldElement")], l8);

// node_modules/@arcgis/core/form/elements/RelationshipElement.js
var p12;
var l9 = p12 = class extends s3 {
  constructor(e) {
    super(e), this.displayCount = null, this.displayType = "list", this.editableExpression = null, this.orderByFields = null, this.relationshipId = null, this.type = "relationship";
  }
  clone() {
    return new p12({ description: this.description, displayCount: this.displayCount, displayType: this.displayType, editableExpression: this.editableExpression, label: this.label, orderByFields: a(this.orderByFields), relationshipId: this.relationshipId, visibilityExpression: this.visibilityExpression });
  }
};
__decorate([a2({ type: Number, json: { write: true } })], l9.prototype, "displayCount", void 0), __decorate([a2({ type: ["list"], json: { write: true } })], l9.prototype, "displayType", void 0), __decorate([a2({ type: String, json: { write: true } })], l9.prototype, "editableExpression", void 0), __decorate([a2({ type: [i2], json: { write: true } })], l9.prototype, "orderByFields", void 0), __decorate([a2({ type: Number, json: { write: true } })], l9.prototype, "relationshipId", void 0), __decorate([a2({ type: ["relationship"], json: { read: false, write: true } })], l9.prototype, "type", void 0), l9 = p12 = __decorate([c("esri.form.elements.RelationshipElement")], l9);
var n10 = l9;

// node_modules/@arcgis/core/form/elements/TextElement.js
var i11;
var s21 = i11 = class extends s3 {
  constructor(t2) {
    super(t2), this.text = null, this.textFormat = "plain-text", this.type = "text";
  }
  clone() {
    return new i11({ text: this.text, textFormat: this.textFormat, visibilityExpression: this.visibilityExpression });
  }
};
__decorate([a2({ type: String, json: { write: true } })], s21.prototype, "text", void 0), __decorate([a2({ type: String, json: { write: true } })], s21.prototype, "textFormat", void 0), __decorate([a2({ type: ["text"], readOnly: true, json: { read: false, write: true } })], s21.prototype, "type", void 0), s21 = i11 = __decorate([c("esri.form.elements.TextElement")], s21);
var p13 = s21;

// node_modules/@arcgis/core/form/elements/UtilityNetworkAssociationsElement.js
var p14 = class extends l2(s3) {
  constructor(t2) {
    super(t2), this.associationTypes = null, this.editableExpression = null, this.type = "utilityNetworkAssociations";
  }
};
__decorate([a2({ type: [c2], json: { write: { isRequired: true } } })], p14.prototype, "associationTypes", void 0), __decorate([a2({ type: String, json: { write: true } })], p14.prototype, "editableExpression", void 0), __decorate([a2({ type: ["utilityNetworkAssociations"], json: { read: false, write: true } })], p14.prototype, "type", void 0), p14 = __decorate([c("esri.form.elements.UtilityNetworkAssociationsElement")], p14);
var n11 = p14;

// node_modules/@arcgis/core/form/support/formUtils.js
var s22 = (t2) => "field" === t2.type;
var u6 = (t2) => "group" === t2.type;
var m9 = (t2) => "text" === t2.type;
function h(t2) {
  return { typesWithGroup: { base: s3, key: "type", typeMap: { attachment: l4, field: l8, group: t2, relationship: n10, text: p13, utilityNetworkAssociations: n11 } }, typesWithoutGroup: { base: s3, key: "type", typeMap: { attachment: l4, field: l8, relationship: n10, text: p13, utilityNetworkAssociations: n11 } } };
}
function x4(t2, e, o2 = true) {
  if (!t2) return null;
  const p15 = o2 ? e.typesWithGroup.typeMap : e.typesWithoutGroup.typeMap;
  return t2.filter((t3) => p15[t3.type]).map((t3) => p15[t3.type].fromJSON(t3));
}
function G(t2, e, o2 = true) {
  if (!t2) return null;
  const p15 = o2 ? e.typesWithGroup.typeMap : e.typesWithoutGroup.typeMap;
  return t2.filter((t3) => p15[t3.type]).map((t3) => t3.toJSON());
}
function W(e, o2, p15 = true) {
  return e ? e.map((e2) => x(p15 ? o2.typesWithGroup : o2.typesWithoutGroup, e2)) : null;
}

// node_modules/@arcgis/core/form/elements/GroupElement.js
var d2;
var u7 = d2 = class extends s3 {
  constructor(e) {
    super(e), this.initialState = "expanded", this.type = "group";
  }
  get elements() {
    return this._get("elements") ?? null;
  }
  set elements(e) {
    this._set("elements", e);
  }
  castElements(e) {
    return W(e, f2, false);
  }
  readElements(e, t2) {
    return x4(t2.formElements, f2, false);
  }
  writeElements(e, t2) {
    t2.formElements = G(e, f2, false);
  }
  clone() {
    return new d2({ description: this.description, elements: a(this.elements), initialState: this.initialState, label: this.label, visibilityExpression: this.visibilityExpression });
  }
};
__decorate([a2({ json: { write: true } })], u7.prototype, "elements", null), __decorate([s("elements")], u7.prototype, "castElements", null), __decorate([o("elements", ["formElements"])], u7.prototype, "readElements", null), __decorate([r2("elements")], u7.prototype, "writeElements", null), __decorate([a2({ type: ["collapsed", "expanded"], json: { write: true } })], u7.prototype, "initialState", void 0), __decorate([a2({ type: String, json: { read: false, write: true } })], u7.prototype, "type", void 0), u7 = d2 = __decorate([c("esri.form.elements.GroupElement")], u7);
var f2 = h(u7);
var E = u7;

// node_modules/@arcgis/core/form/FormTemplate.js
var b2 = h(E);
var g = class extends l2(n) {
  constructor(e) {
    super(e), this.description = null, this.expressionInfos = null, this.preserveFieldValuesWhenHidden = false, this.supportsAttachmentElements = false, this.title = null;
  }
  get elements() {
    return this._get("elements") ?? null;
  }
  set elements(e) {
    this._set("elements", e);
  }
  castElements(e) {
    return W(e, b2);
  }
  readElements(e, t2) {
    return x4(t2.formElements, b2);
  }
  writeElements(e, t2) {
    t2.formElements = G(e, b2);
  }
  async getFieldsUsed(e, t2) {
    const s23 = /* @__PURE__ */ new Set(), { description: o2, elements: r6, expressionInfos: n12, title: i12 } = this;
    if (U(s23, e, o2), U(s23, e, i12), !r6) return [];
    const l10 = F(r6, n12).map((t3) => v(s23, e, null, t3));
    await Promise.all(l10);
    for (const p15 of r6) I2(s23, { fieldsIndex: e, relationships: t2 }, p15);
    return Array.from(s23).sort();
  }
};
function I2(e, t2, s23) {
  const { fieldsIndex: o2 } = t2;
  if (o2?.fields.length !== e.size) switch (U(e, o2, s23.label), U(e, o2, s23.description), s23.type) {
    case "field":
      x2(e, o2, s23.fieldName);
      break;
    case "group":
      s23.elements.forEach((s24) => I2(e, t2, s24));
      break;
    case "relationship":
      if (t2.relationships) {
        const r6 = t2.relationships.find((e2) => e2.id === s23.relationshipId);
        r6 && x2(e, o2, r6.keyField);
      }
      w(e, o2, s23.orderByFields?.map((e2) => e2.field));
      break;
    case "text":
      U(e, o2, s23.text);
  }
}
function F(e, t2) {
  if (!t2 || 0 === t2.length) return [];
  const s23 = k2(e), o2 = [];
  for (const r6 of t2) s23.has(r6.name) && o2.push(r6.expression);
  return o2;
}
function k2(e) {
  const t2 = /* @__PURE__ */ new Set();
  for (const s23 of e) if (u(t2, s23.visibilityExpression), !m9(s23)) {
    if (u6(s23)) r(t2, k2(s23.elements));
    else if (u(t2, s23.editableExpression), s22(s23)) {
      const { requiredExpression: e2, valueExpression: o2 } = s23;
      r(t2, [e2, o2]);
    }
  }
  return t2;
}
function U(e, t2, s23) {
  w(e, t2, Be(s23));
}
__decorate([a2({ type: String, json: { write: true } })], g.prototype, "description", void 0), __decorate([a2({ json: { write: true } })], g.prototype, "elements", null), __decorate([m2("elements")], g.prototype, "castElements", null), __decorate([o("elements", ["formElements"])], g.prototype, "readElements", null), __decorate([r2("elements")], g.prototype, "writeElements", null), __decorate([a2({ type: [n2], json: { write: true } })], g.prototype, "expressionInfos", void 0), __decorate([a2({ type: Boolean, json: { default: false, write: true } })], g.prototype, "preserveFieldValuesWhenHidden", void 0), __decorate([a2({ type: Boolean, json: { default: false, write: true } })], g.prototype, "supportsAttachmentElements", void 0), __decorate([a2({ type: String, json: { write: true } })], g.prototype, "title", void 0), g = __decorate([c("esri.form.FormTemplate")], g);

export {
  l8 as l,
  g
};
//# sourceMappingURL=chunk-OGIPTPPB.js.map
