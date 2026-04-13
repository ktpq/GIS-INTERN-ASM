import {
  s as s2
} from "./chunk-TVGZT6OO.js";
import {
  G
} from "./chunk-GMRKHJJA.js";
import {
  E as E2,
  _ as _3,
  c as c4,
  f,
  i as i3,
  ne,
  s,
  v as v2,
  x as x2,
  y as y2
} from "./chunk-HMVPCBOE.js";
import {
  o
} from "./chunk-EDX6OX4S.js";
import {
  e,
  v as v3
} from "./chunk-VMHZD5KD.js";
import {
  U
} from "./chunk-CYJ24BI6.js";
import {
  O,
  c as c3
} from "./chunk-EYKHAA3V.js";
import {
  c as c2
} from "./chunk-PLQ357CF.js";
import {
  E,
  N,
  b,
  h as h3,
  p,
  v,
  x,
  y
} from "./chunk-2T65WP7D.js";
import {
  t
} from "./chunk-OWMNTHDK.js";
import {
  h,
  w
} from "./chunk-JSUZNUEF.js";
import {
  j
} from "./chunk-TV7JW3IK.js";
import {
  a as a2,
  h as h2,
  l
} from "./chunk-CD6IOUFB.js";
import {
  r
} from "./chunk-ZILR7JK7.js";
import {
  _ as _2
} from "./chunk-X7TQ4MJH.js";
import {
  n as n2
} from "./chunk-FCTZWJBQ.js";
import {
  _
} from "./chunk-5AVTDH3Y.js";
import {
  a3 as a,
  c,
  m3 as m
} from "./chunk-GUGGSMY4.js";
import {
  T,
  u2 as u
} from "./chunk-2DNVIDFH.js";
import {
  i2 as i,
  i3 as i2,
  n2 as n,
  r as r2,
  r2 as r3,
  r3 as r4
} from "./chunk-6SPQI6I6.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/Attachments/support/attachmentUtils.js
function e2(i5) {
  const e4 = i5.toLowerCase();
  return "image/bmp" === e4 || "image/emf" === e4 || "image/exif" === e4 || "image/gif" === e4 || "image/x-icon" === e4 || "image/jpeg" === e4 || "image/png" === e4 || "image/tiff" === e4 || "image/x-wmf" === e4;
}
function p2(e4) {
  const p6 = n2("esri/themes/base/images/files/");
  return e4 ? "text/plain" === e4 ? `${p6}text-32.svg` : "application/pdf" === e4 ? `${p6}pdf-32.svg` : "text/csv" === e4 ? `${p6}csv-32.svg` : "application/gpx+xml" === e4 ? `${p6}gpx-32.svg` : "application/x-dwf" === e4 ? `${p6}cad-32.svg` : "application/postscript" === e4 || "application/json" === e4 || "text/xml" === e4 || "model/vrml" === e4 ? `${p6}code-32.svg` : "application/x-zip-compressed" === e4 || "application/x-7z-compressed" === e4 || "application/x-gzip" === e4 || "application/x-tar" === e4 || "application/x-gtar" === e4 || "application/x-bzip2" === e4 || "application/gzip" === e4 || "application/x-compress" === e4 || "application/x-apple-diskimage" === e4 || "application/x-rar-compressed" === e4 || "application/zip" === e4 ? `${p6}zip-32.svg` : e4.includes("image/") ? `${p6}image-32.svg` : e4.includes("audio/") ? `${p6}sound-32.svg` : e4.includes("video/") ? `${p6}video-32.svg` : e4.includes("msexcel") || e4.includes("ms-excel") || e4.includes("spreadsheetml") ? `${p6}excel-32.svg` : e4.includes("msword") || e4.includes("ms-word") || e4.includes("wordprocessingml") ? `${p6}word-32.svg` : e4.includes("powerpoint") || e4.includes("presentationml") ? `${p6}report-32.svg` : `${p6}generic-32.svg` : `${p6}generic-32.svg`;
}

// node_modules/@arcgis/core/widgets/Attachments.js
var F = { addButton: true, addSubmitButton: true, cancelAddButton: true, cancelUpdateButton: true, deleteButton: true, errorMessage: true, progressBar: true, updateButton: true };
var k = "esri-attachments";
var I = { base: k, loaderContainer: `${k}__loader-container`, loader: `${k}__loader`, container: `${k}__container`, containerList: `${k}__container--list`, containerPreview: `${k}__container--preview`, actions: `${k}__actions`, deleteButton: `${k}__delete-button`, addAttachmentButton: `${k}__add-attachment-button`, errorMessage: `${k}__error-message`, items: `${k}__items`, item: `${k}__item`, itemButton: `${k}__item-button`, itemMask: `${k}__item-mask`, itemMaskIcon: `${k}__item-mask--icon`, itemImage: `${k}__image`, itemImageResizable: `${k}__image--resizable`, itemLabel: `${k}__label`, itemFilename: `${k}__filename`, itemChevronIcon: `${k}__item-chevron-icon`, itemLink: `${k}__item-link`, itemLinkOverlay: `${k}__item-link-overlay`, itemLinkOverlayIcon: `${k}__item-link-overlay-icon`, itemAddIcon: `${k}__item-add-icon`, formNode: `${k}__form-node`, fileFieldset: `${k}__file-fieldset`, fileLabel: `${k}__file-label`, fileName: `${k}__file-name`, fileInput: `${k}__file-input`, metadata: `${k}__metadata`, metadataFieldset: `${k}__metadata-fieldset`, progressBar: `${k}__progress-bar` };
var $ = window.CSS;
var T2 = class extends O {
  constructor(e4, t3) {
    super(e4, t3), this.displayType = "auto", this.messages = null, this.messagesUnits = null, this.selectedFile = null, this.submitting = false, this.viewModel = null, this.visibleElements = __spreadValues({}, F), this._supportsImageOrientation = $ && $.supports && $.supports("image-orientation", "from-image"), this._addAttachmentForm = null, this._updateAttachmentForm = null, e4?.suppressDeprecationWarning || (this.announceDeprecation = () => {
      i(n.getLogger("esri.widgets.Attachments"), "esri.widgets.Attachments", { replacement: "Use the Popup and Editor components to view and edit attachments respectively.", version: "5.0", see: "https://www.esriurl.com/components-transition-plan/", warnOnce: true });
    });
  }
  normalizeCtorArgs(e4) {
    e4?.viewModel || (e4 = __spreadValues({ viewModel: new y2() }, e4));
    const _a = e4, { suppressDeprecationWarning: t3 } = _a, s3 = __objRest(_a, ["suppressDeprecationWarning"]);
    return s3;
  }
  initialize() {
    this.addHandles([a2(() => this.viewModel?.attachmentInfos, "change", () => this.scheduleRender()), a2(() => this.viewModel?.fileInfos, "change", () => this.scheduleRender()), l(() => this.viewModel?.mode, () => this._modeChanged(), h2)]);
  }
  loadDependencies() {
    return c3({ icon: () => import("./calcite-icon-OGZL6YYI.js") });
  }
  get capabilities() {
    return this.viewModel.capabilities;
  }
  set capabilities(e4) {
    this.viewModel.capabilities = e4;
  }
  get effectiveDisplayType() {
    const { displayType: e4 } = this;
    return e4 && "auto" !== e4 ? e4 : this.viewModel.supportsResizeAttachments ? "preview" : "list";
  }
  get attachmentKeywords() {
    return this.viewModel.attachmentKeywords;
  }
  set attachmentKeywords(e4) {
    this.viewModel.attachmentKeywords = e4;
  }
  get attachmentTypes() {
    return this.viewModel.attachmentTypes;
  }
  set attachmentTypes(e4) {
    this.viewModel.attachmentTypes = e4;
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e4) {
    this.viewModel.graphic = e4;
  }
  get icon() {
    return "attachment";
  }
  set icon(e4) {
    this._overrideIfSome("icon", e4);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e4) {
    this._overrideIfSome("label", e4);
  }
  castVisibleElements(e4) {
    return __spreadValues(__spreadValues({}, F), e4);
  }
  addAttachment() {
    const { _addAttachmentForm: e4, viewModel: t3 } = this;
    return this._set("submitting", true), this._set("error", null), t3.addAttachment(e4).then((e5) => (this._set("submitting", false), this._set("error", null), t3.mode = "view", e5)).catch((e5) => {
      throw this._set("submitting", false), this._set("error", new r4("attachments:add-attachment", this.messages.addErrorMessage, e5)), e5;
    });
  }
  deleteAttachment(e4) {
    const { viewModel: t3 } = this;
    return this._set("submitting", true), this._set("error", null), t3.deleteAttachment(e4).then((e5) => (this._set("submitting", false), this._set("error", null), t3.mode = "view", e5)).catch((e5) => {
      throw this._set("submitting", false), this._set("error", new r4("attachments:delete-attachment", this.messages.deleteErrorMessage, e5)), e5;
    });
  }
  updateAttachment() {
    const { viewModel: e4 } = this, { _updateAttachmentForm: t3 } = this;
    return this._set("submitting", true), this._set("error", null), e4.updateAttachment(t3).then((t4) => (this._set("submitting", false), this._set("error", null), e4.mode = "view", t4)).catch((e5) => {
      throw this._set("submitting", false), this._set("error", new r4("attachments:update-attachment", this.messages.updateErrorMessage, e5)), e5;
    });
  }
  addFile() {
    const e4 = this.viewModel.addFile(this.selectedFile, this._addAttachmentForm);
    return this.viewModel.mode = "view", e4;
  }
  updateFile() {
    const { viewModel: e4 } = this, t3 = e4.updateFile(this.selectedFile, this._updateAttachmentForm, e4.activeFileInfo);
    return e4.mode = "view", t3;
  }
  deleteFile(e4) {
    const t3 = this.viewModel.deleteFile(e4 || this.viewModel.activeFileInfo?.file);
    return this.viewModel.mode = "view", t3;
  }
  render() {
    const { submitting: e4, viewModel: t3 } = this, { state: s3 } = t3;
    return x("div", { class: this.classes(I.base, e.widget) }, e4 ? this._renderProgressBar() : null, "loading" === s3 ? this._renderLoading() : this._renderAttachments(), this._renderErrorMessage());
  }
  _renderErrorMessage() {
    const { error: e4, visibleElements: t3 } = this;
    return e4 && t3.errorMessage ? x("div", { class: I.errorMessage, key: "error-message" }, e4.message) : null;
  }
  _renderAttachments() {
    const { activeFileInfo: e4, mode: t3, activeAttachmentInfo: s3 } = this.viewModel;
    return "add" === t3 ? this._renderAddForm() : "edit" === t3 ? this._renderDetailsForm(s3 || e4) : this._renderAttachmentContainer();
  }
  _renderLoading() {
    return x("div", { class: I.loaderContainer, key: "loader" }, x("div", { class: I.loader }));
  }
  _renderProgressBar() {
    return this.visibleElements.progressBar ? x("div", { class: I.progressBar, key: "progress-bar" }) : null;
  }
  _renderAddForm() {
    const { submitting: e4, selectedFile: t3 } = this, s3 = e4 || !t3, i5 = this.visibleElements.cancelAddButton ? x("button", { bind: this, class: this.classes(e.button, e.buttonTertiary, e.buttonSmall, e.buttonHalf, e4 && e.buttonDisabled), disabled: e4, onclick: this._cancelForm, type: "button" }, this.messages.cancel) : null, a3 = this.visibleElements.addSubmitButton ? x("button", { class: this.classes(e.button, e.buttonSecondary, e.buttonSmall, e.buttonHalf, { [e.buttonDisabled]: s3 }), disabled: s3, type: "submit" }, this.messages.add) : null, n6 = t3 ? x("span", { class: I.fileName, key: "file-name" }, t3.name) : null, r6 = x("form", { afterCreate: h3, afterRemoved: E, bind: this, "data-node-ref": "_addAttachmentForm", onsubmit: this._submitAddAttachment }, x("fieldset", { class: I.fileFieldset }, n6, x("label", { class: this.classes(I.fileLabel, e.button, e.buttonSecondary) }, t3 ? this.messages.changeFile : this.messages.selectFile, x("input", { bind: this, class: I.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))), a3, i5);
    return x("div", { class: I.formNode, key: "add-form-container" }, r6);
  }
  _renderDetailsForm(e4) {
    const { visibleElements: t3, viewModel: s3, selectedFile: i5, submitting: a3 } = this, { capabilities: n6 } = s3, r6 = a3 || !i5;
    let l4, d2, c6, m4;
    i5 ? (l4 = i5.type, d2 = i5.name, c6 = i5.size) : e4 && "file" in e4 ? (l4 = e4.file.type, d2 = e4.file.name, c6 = e4.file.size) : e4 && "contentType" in e4 && (l4 = e4.contentType, d2 = e4.name, c6 = e4.size, m4 = e4.url);
    const h6 = n6.editing && n6.operations?.delete && t3.deleteButton ? x("button", { bind: this, class: this.classes(e.button, e.buttonSmall, e.buttonTertiary, I.deleteButton, { [e.buttonDisabled]: a3 }), disabled: a3, key: "delete-button", onclick: (t4) => this._submitDeleteAttachment(t4, e4), type: "button" }, this.messages.delete) : void 0, u4 = n6.editing && n6.operations?.update && t3.updateButton ? x("button", { class: this.classes(e.button, e.buttonSmall, e.buttonThird, { [e.buttonDisabled]: r6 }), disabled: r6, key: "update-button", type: "submit" }, this.messages.update) : void 0, p6 = this.visibleElements.cancelUpdateButton ? x("button", { bind: this, class: this.classes(e.button, e.buttonSmall, e.buttonTertiary, e.buttonThird, { [e.buttonDisabled]: a3 }), disabled: a3, key: "cancel-button", onclick: this._cancelForm, type: "button" }, this.messages.cancel) : void 0, b3 = n6.editing && n6.operations?.update ? x("fieldset", { class: I.fileFieldset, key: "file" }, x("span", { class: I.fileName, key: "file-name" }, d2), x("label", { class: this.classes(I.fileLabel, e.button, e.buttonSecondary) }, this.messages.changeFile, x("input", { bind: this, class: I.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))) : void 0, _5 = x("fieldset", { class: I.metadataFieldset, key: "size" }, x("label", null, G(this.messagesUnits, c6 ?? 0))), v6 = x("fieldset", { class: I.metadataFieldset, key: "content-type" }, x("label", null, l4)), y6 = null != m4 ? x("a", { class: I.itemLink, href: m4, rel: "noreferrer", target: "_blank" }, this._renderImageMask(e4, 400), x("div", { class: I.itemLinkOverlay }, x("span", { class: I.itemLinkOverlayIcon }, x("calcite-icon", { icon: "launch" })))) : this._renderImageMask(e4, 400), w3 = x("form", { afterCreate: h3, afterRemoved: E, bind: this, "data-node-ref": "_updateAttachmentForm", onsubmit: (t4) => this._submitUpdateAttachment(t4, e4) }, x("div", { class: I.metadata }, _5, v6), b3, x("div", { class: I.actions }, h6, p6, u4));
    return x("div", { class: I.formNode, key: "edit-form-container" }, y6, w3);
  }
  _renderImageMask(e4, t3) {
    return e4 ? "file" in e4 ? this._renderGenericImageMask(e4.file.name, e4.file.type) : this._renderImageMaskForAttachment(e4, t3) : null;
  }
  _renderGenericImageMask(e4, t3) {
    const { supportsResizeAttachments: s3 } = this.viewModel, i5 = p2(t3), a3 = { [I.itemImageResizable]: s3 };
    return x("div", { class: this.classes(I.itemMaskIcon, I.itemMask), key: i5 }, x("img", { alt: e4, class: this.classes(a3, I.itemImage), src: i5, title: e4 }));
  }
  _renderImageMaskForAttachment(e4, t3) {
    const { supportsResizeAttachments: s3 } = this.viewModel;
    if (!e4) return null;
    const { contentType: i5, name: a3, size: n6, url: r6 } = e4;
    if (!s3 || !e2(i5)) return this._renderGenericImageMask(a3, i5);
    const l4 = this._getCSSTransform(e4), o2 = l4 ? { transform: l4, "image-orientation": "none" } : {}, d2 = `${r6}${r6?.includes("?") ? "&" : "?"}w=${t3}&s=${n6}`, c6 = { [I.itemImageResizable]: s3 };
    return x("div", { class: this.classes(I.itemMask), key: d2 }, x("img", { alt: a3, class: this.classes(c6, I.itemImage), src: d2, styles: o2, title: a3 }));
  }
  _renderFile(e4) {
    const { file: t3 } = e4;
    return x("li", { class: I.item, key: t3 }, x("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: I.itemButton, key: "details-button", onclick: () => this._startEditFile(e4), title: this.messages.attachmentDetails, type: "button" }, this._renderImageMask(e4), x("label", { class: I.itemLabel }, x("span", { class: I.itemFilename }, t3.name || this.messages.noTitle), x("span", { "aria-hidden": "true", class: this.classes(I.itemChevronIcon, y(this.container) ? i3.left : i3.right) }))));
  }
  _renderAttachmentInfo({ attachmentInfo: e4, displayType: t3 }) {
    const { viewModel: s3, effectiveDisplayType: i5 } = this, { capabilities: a3, supportsResizeAttachments: n6 } = s3, { contentType: r6, name: l4, url: o2 } = e4, d2 = this._renderImageMask(e4, "list" === t3 ? 48 : 400), c6 = a3.editing ? x("span", { "aria-hidden": "true", class: this.classes(I.itemChevronIcon, y(this.container) ? i3.left : i3.right) }) : null, m4 = [d2, "preview" === i5 && n6 && e2(r6) ? null : x("label", { class: I.itemLabel }, x("span", { class: I.itemFilename }, l4 || this.messages.noTitle), c6)], h6 = a3.editing ? x("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: I.itemButton, "data-attachment-info-id": e4.id, key: "details-button", onclick: () => this._startEditAttachment(e4), title: this.messages.attachmentDetails, type: "button" }, m4) : x("a", { class: I.itemButton, href: o2 ?? void 0, key: "details-link", rel: "noreferrer", target: "_blank" }, m4);
    return x("li", { class: I.item, key: e4 }, h6);
  }
  _renderAttachmentContainer() {
    const { effectiveDisplayType: e4, viewModel: t3, visibleElements: s3 } = this, { attachmentInfos: i5, capabilities: a3, fileInfos: n6 } = t3, r6 = !!i5?.length, l4 = !!n6?.length, o2 = { [I.containerList]: "preview" !== e4, [I.containerPreview]: "preview" === e4 }, d2 = a3.editing && a3.operations?.add && s3.addButton ? x("button", { bind: this, class: this.classes(e.button, e.buttonTertiary, I.addAttachmentButton), onclick: () => this._startAddAttachment(), type: "button" }, x("span", { "aria-hidden": "true", class: this.classes(I.itemAddIcon, i3.plus) }), this.messages.add) : void 0, c6 = r6 ? x("ul", { class: I.items, key: "attachments-list" }, i5.toArray().map((t4) => this._renderAttachmentInfo({ attachmentInfo: t4, displayType: e4 }))) : void 0, m4 = l4 ? x("ul", { class: I.items, key: "file-list" }, n6.toArray().map((e5) => this._renderFile(e5))) : void 0, h6 = l4 || r6 ? void 0 : x("div", { class: e.empty }, this.messages.noAttachments);
    return x("div", { class: this.classes(I.container, o2), key: "attachments-container" }, c6, m4, h6, d2);
  }
  _modeChanged() {
    this._set("error", null), this._set("selectedFile", null);
  }
  _handleFileInputChange(e4) {
    const t3 = e4.target, s3 = t3.files?.item(0);
    this._set("selectedFile", s3);
  }
  _submitDeleteAttachment(e4, t3) {
    e4.preventDefault(), t3 && ("file" in t3 ? this.deleteFile(t3.file) : t3 && this.deleteAttachment(t3));
  }
  _submitAddAttachment(e4) {
    e4.preventDefault(), this.viewModel.filesEnabled ? this.addFile() : this.addAttachment();
  }
  _submitUpdateAttachment(e4, t3) {
    e4.preventDefault(), t3 && "file" in t3 ? this.updateFile() : this.updateAttachment();
  }
  _startEditAttachment(e4) {
    const { viewModel: t3 } = this;
    t3.activeFileInfo = null, t3.activeAttachmentInfo = e4, t3.mode = "edit";
  }
  _startEditFile(e4) {
    const { viewModel: t3 } = this;
    t3.activeAttachmentInfo = null, t3.activeFileInfo = e4, t3.mode = "edit";
  }
  _startAddAttachment() {
    this.viewModel.mode = "add";
  }
  _cancelForm(e4) {
    e4.preventDefault(), this.viewModel.mode = "view";
  }
  _getCSSTransform(e4) {
    const { orientationInfo: t3 } = e4;
    return !this._supportsImageOrientation && t3 ? [t3.rotation ? `rotate(${t3.rotation}deg)` : "", t3.mirrored ? "scaleX(-1)" : ""].join(" ") : "";
  }
};
__decorate([a()], T2.prototype, "capabilities", null), __decorate([a()], T2.prototype, "displayType", void 0), __decorate([a({ readOnly: true })], T2.prototype, "effectiveDisplayType", null), __decorate([a()], T2.prototype, "attachmentKeywords", null), __decorate([a()], T2.prototype, "attachmentTypes", null), __decorate([a({ type: j })], T2.prototype, "graphic", null), __decorate([a()], T2.prototype, "icon", null), __decorate([a()], T2.prototype, "label", null), __decorate([a(), v("esri/widgets/Attachments/t9n/Attachments")], T2.prototype, "messages", void 0), __decorate([a(), v("esri/core/t9n/Units")], T2.prototype, "messagesUnits", void 0), __decorate([a({ readOnly: true })], T2.prototype, "selectedFile", void 0), __decorate([a({ readOnly: true })], T2.prototype, "submitting", void 0), __decorate([a({ readOnly: true })], T2.prototype, "error", void 0), __decorate([a({ type: y2 })], T2.prototype, "viewModel", void 0), __decorate([a()], T2.prototype, "visibleElements", void 0), __decorate([m("visibleElements")], T2.prototype, "castVisibleElements", null), T2 = __decorate([c("esri.widgets.Attachments")], T2);

// node_modules/@arcgis/core/widgets/support/Heading.js
function i4(_a, s3) {
  var _b = _a, { level: r6, class: i5 } = _b, l4 = __objRest(_b, ["level", "class"]);
  const a3 = n3(r6);
  return x(`h${a3}`, __spreadProps(__spreadValues({}, l4), { "aria-level": String(a3), class: p(e.heading, i5), role: "heading" }), s3);
}
function n3(t3) {
  return r(Math.ceil(t3), 1, 6);
}

// node_modules/@arcgis/core/widgets/Feature/support/FeatureElementInfo.js
var n4 = "esri-feature-element-info";
var l2 = { base: n4, title: `${n4}__title`, description: `${n4}__description` };
var p3 = class extends O {
  constructor(e4, t3) {
    super(e4, t3), this.description = null, this.headingLevel = 2, this.title = null;
  }
  render() {
    return x("div", { class: l2.base }, this._renderTitle(), this._renderDescription());
  }
  _renderTitle() {
    const { title: e4 } = this;
    return e4 ? x(i4, { class: l2.title, innerHTML: e4, level: this.headingLevel }) : null;
  }
  _renderDescription() {
    const { description: e4 } = this;
    return e4 ? x("div", { class: l2.description, innerHTML: e4, key: "description" }) : null;
  }
};
__decorate([a()], p3.prototype, "description", void 0), __decorate([a()], p3.prototype, "headingLevel", void 0), __decorate([a()], p3.prototype, "title", void 0), p3 = __decorate([c("esri.widgets.Feature.support.FeatureElementInfo")], p3);

// node_modules/@arcgis/core/widgets/Feature/FeatureAttachments.js
var p4 = { base: "esri-feature-attachments" };
var h4 = class extends O {
  constructor(e4, t3) {
    super(e4, t3), this._featureElementInfo = null, this.attachmentsWidget = new T2({ suppressDeprecationWarning: true }), this.headingLevel = 2, this.viewModel = new s();
  }
  initialize() {
    this._featureElementInfo = new p3(), this.addHandles([l(() => [this.viewModel?.description, this.viewModel?.title, this.headingLevel], () => this._setupFeatureElementInfo(), h2), l(() => this.viewModel, (e4) => this.attachmentsWidget.viewModel = e4, h2)]);
  }
  destroy() {
    this.attachmentsWidget.viewModel = null, this.attachmentsWidget.destroy(), this._featureElementInfo?.destroy();
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e4) {
    this.viewModel.description = e4;
  }
  get displayType() {
    return this.attachmentsWidget.displayType;
  }
  set displayType(e4) {
    this.attachmentsWidget.displayType = e4;
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e4) {
    this.viewModel.graphic = e4;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e4) {
    this.viewModel.title = e4;
  }
  render() {
    const { attachmentsWidget: e4 } = this;
    return x("div", { class: p4.base }, this._featureElementInfo?.render(), e4?.render());
  }
  _setupFeatureElementInfo() {
    const { description: e4, title: t3, headingLevel: i5 } = this;
    this._featureElementInfo?.set({ description: e4, title: t3, headingLevel: i5 });
  }
};
__decorate([a({ readOnly: true })], h4.prototype, "attachmentsWidget", void 0), __decorate([a()], h4.prototype, "description", null), __decorate([a()], h4.prototype, "displayType", null), __decorate([a()], h4.prototype, "graphic", null), __decorate([a()], h4.prototype, "headingLevel", void 0), __decorate([a()], h4.prototype, "title", null), __decorate([a({ type: s })], h4.prototype, "viewModel", void 0), h4 = __decorate([c("esri.widgets.Feature.FeatureAttachments")], h4);

// node_modules/@arcgis/core/widgets/Feature/FeatureContent.js
var n5 = "esri-feature-content";
var l3 = { base: n5, loaderContainer: `${n5}__loader-container`, loader: `${n5}__loader` };
var c5 = class extends O {
  constructor(e4, t3) {
    super(e4, t3), this.viewModel = null, this._addTargetToAnchors = (e5) => {
      Array.from(e5.querySelectorAll("a")).forEach((e6) => {
        U(e6.href) && !e6.hasAttribute("target") && e6.setAttribute("target", "_blank");
      });
    };
  }
  get creator() {
    return this.viewModel?.creator;
  }
  set creator(e4) {
    this.viewModel && (this.viewModel.creator = e4);
  }
  get graphic() {
    return this.viewModel?.graphic;
  }
  set graphic(e4) {
    this.viewModel && (this.viewModel.graphic = e4);
  }
  render() {
    const e4 = this.viewModel?.state;
    return x("div", { class: l3.base }, "loading" === e4 ? this._renderLoading() : this._renderCreated());
  }
  _renderLoading() {
    return x("div", { class: l3.loaderContainer, key: "loader" }, x("div", { class: l3.loader }));
  }
  _renderCreated() {
    const e4 = this.viewModel?.created;
    return e4 ? e4 instanceof HTMLElement ? x("div", { afterCreate: this._attachToNode, bind: e4, key: e4 }) : b(e4) ? x("div", { key: e4 }, !e4.destroyed && e4.render()) : x("div", { afterCreate: this._addTargetToAnchors, innerHTML: e4, key: e4 }) : null;
  }
  _attachToNode(e4) {
    const t3 = this;
    e4.appendChild(t3);
  }
};
__decorate([a()], c5.prototype, "creator", null), __decorate([a()], c5.prototype, "graphic", null), __decorate([a({ type: c4 })], c5.prototype, "viewModel", void 0), c5 = __decorate([c("esri.widgets.Feature.FeatureContent")], c5);

// node_modules/@arcgis/core/widgets/support/uriUtils.js
var p5 = [{ pattern: /^\s*(https?:\/\/([^\s]+))\s*$/i, target: "_blank", label: "{messages.view}" }, { pattern: /^\s*(tel:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(mailto:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "App Studio Player" }, { pattern: /^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Collector" }, { pattern: /^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Explorer" }, { pattern: /^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Navigator" }, { pattern: /^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Survey123" }, { pattern: /^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Trek2There" }, { pattern: /^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Workforce" }, { pattern: /^\s*(iform:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "iForm" }, { pattern: /^\s*(flow:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "FlowFinity" }, { pattern: /^\s*(lfmobile:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Laserfische" }, { pattern: /^\s*(mspbi:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Microsoft Power Bi" }];
function r5(r6, t3) {
  if ("string" != typeof t3 || !t3) return t3;
  const n6 = p5.find((e4) => e4.pattern.test(t3));
  if (!n6) return t3;
  const i5 = t3.match(n6.pattern), l4 = i5?.[2], o2 = r3(r3(n6.label, { messages: r6, hierPart: l4 }), { appName: n6.appName }), m4 = n6.target ? ` target="${n6.target}"` : "", g3 = "_blank" === n6.target ? ' rel="noreferrer"' : "";
  return t.sanitizeUrl(_(t3)).replace(n6.pattern, `<a${m4} href="$1"${g3}>${o2}</a>`);
}

// node_modules/@arcgis/core/widgets/Feature/FeatureFields.js
var u2 = "esri-feature-fields";
var m2 = { base: u2, fieldHeader: `${u2}__field-header`, fieldData: `${u2}__field-data`, fieldDataDate: `${u2}__field-data--date` };
var h5 = class extends O {
  constructor(e4, t3) {
    super(e4, t3), this._featureElementInfo = null, this.viewModel = new f(), this.messages = null, this.messagesURIUtils = null;
  }
  initialize() {
    this._featureElementInfo = new p3(), this.addHandles(l(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), h2));
  }
  destroy() {
    this._featureElementInfo?.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e4) {
    this.viewModel.attributes = e4;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e4) {
    this.viewModel.description = e4;
  }
  get expressionInfos() {
    return this.viewModel.expressionInfos;
  }
  set expressionInfos(e4) {
    this.viewModel.expressionInfos = e4;
  }
  get fieldInfos() {
    return this.viewModel.fieldInfos;
  }
  set fieldInfos(e4) {
    this.viewModel.fieldInfos = e4;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e4) {
    this.viewModel.title = e4;
  }
  render() {
    return x("div", { class: m2.base }, this._featureElementInfo?.render(), this._renderFields());
  }
  _renderFieldInfo(e4, t3) {
    const { attributes: s3 } = this.viewModel, i5 = e4.fieldName || "", r6 = e4.label || i5, o2 = s3 ? null == s3[i5] ? "" : s3[i5] : "", l4 = !("date-time" !== e4?.fieldFormat?.type), n6 = "number" == typeof o2 && !l4 ? this._forceLTR(o2) : r5(this.messagesURIUtils, o2), d2 = { [m2.fieldDataDate]: l4 };
    return x("tr", { key: `fields-element-info-row-${i5}-${t3}` }, x("th", { class: m2.fieldHeader, innerHTML: r6, key: `fields-element-info-row-header-${i5}-${t3}` }), x("td", { class: this.classes(m2.fieldData, d2), innerHTML: n6, key: `fields-element-info-row-data-${i5}-${t3}` }));
  }
  _renderFields() {
    const { formattedFieldInfos: e4 } = this.viewModel;
    return e4?.length ? x("table", { class: e.table, summary: this.messages.fieldsSummary }, x("tbody", null, e4.map((e5, t3) => this._renderFieldInfo(e5, t3)))) : null;
  }
  _setupFeatureElementInfo() {
    const { description: e4, title: t3 } = this;
    this._featureElementInfo?.set({ description: e4, title: t3 });
  }
  _forceLTR(e4) {
    return `&lrm;${e4}`;
  }
};
__decorate([a()], h5.prototype, "attributes", null), __decorate([a()], h5.prototype, "description", null), __decorate([a()], h5.prototype, "expressionInfos", null), __decorate([a()], h5.prototype, "fieldInfos", null), __decorate([a()], h5.prototype, "title", null), __decorate([a({ type: f, nonNullable: true })], h5.prototype, "viewModel", void 0), __decorate([a(), v("esri/widgets/Feature/t9n/Feature")], h5.prototype, "messages", void 0), __decorate([a(), v("esri/widgets/support/t9n/uriUtils")], h5.prototype, "messagesURIUtils", void 0), h5 = __decorate([c("esri.widgets.Feature.FeatureFields")], h5);

// node_modules/@arcgis/core/widgets/Feature/FeatureMedia.js
var M = "esri-feature-media";
var _4 = { base: M, mediaContainer: `${M}__container`, mediaItemContainer: `${M}__item-container`, mediaItem: `${M}__item`, mediaItemText: `${M}__item-text`, mediaItemTitle: `${M}__item-title`, mediaItemCaption: `${M}__item-caption`, mediaNavigation: `${M}__item-navigation`, mediaPagination: `${M}__pagination`, mediaPaginationText: `${M}__pagination-text`, mediaChart: `${M}__chart`, mediaPaginationButton: `${M}__pagination-button`, mediaPaginationIcon: `${M}__pagination-icon`, mediaChartRendered: `${M}__chart--rendered` };
var v4 = 15;
var w2 = "category";
var A = "value";
var I2 = "rgba(50, 50, 50, 1)";
var C = 250;
var y3 = 500;
var x3 = 200;
var T3 = class extends O {
  constructor(e4, t3) {
    super(e4, t3), this._refreshTimer = null, this._refreshIntervalInfo = null, this._featureElementInfo = null, this._chartRootMap = /* @__PURE__ */ new WeakMap(), this.viewModel = new v2(), this.messages = null, this._disposeChart = (e5) => {
      this._chartRootMap.get(e5)?.dispose(), this._chartRootMap.delete(e5);
    }, this._createChart = async (e5) => {
      const { destroyed: t4, viewModel: i5 } = this;
      if (t4 || !i5 || !e5) return;
      const { createRoot: a3 } = await import("./chartUtilsAm5-4WEGXU7J.js"), r6 = await a3(e5);
      this._chartRootMap.set(e5, r6), await this._renderChart({ mediaInfo: i5.activeMediaInfo, root: r6 });
    };
  }
  initialize() {
    this._featureElementInfo = new p3(), this.addHandles([l(() => [this.viewModel?.activeMediaInfo, this.viewModel?.activeMediaInfoIndex], () => this._setupMediaRefreshTimer(), h2), l(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), h2)]);
  }
  loadDependencies() {
    return c3({ icon: () => import("./calcite-icon-OGZL6YYI.js") });
  }
  destroy() {
    this._clearMediaRefreshTimer(), this._featureElementInfo?.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e4) {
    this.viewModel.attributes = e4;
  }
  get activeMediaInfoIndex() {
    return this.viewModel.activeMediaInfoIndex;
  }
  set activeMediaInfoIndex(e4) {
    this.viewModel.activeMediaInfoIndex = e4;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e4) {
    this.viewModel.description = e4;
  }
  get fieldInfoMap() {
    return this.viewModel.fieldInfoMap;
  }
  set fieldInfoMap(e4) {
    this.viewModel.fieldInfoMap = e4;
  }
  get layer() {
    return this.viewModel.layer;
  }
  set layer(e4) {
    this.viewModel.layer = e4;
  }
  get mediaInfos() {
    return this.viewModel.mediaInfos;
  }
  set mediaInfos(e4) {
    this.viewModel.mediaInfos = e4;
  }
  get popupTemplate() {
    return this.viewModel.popupTemplate;
  }
  set popupTemplate(e4) {
    this.viewModel.popupTemplate = e4;
  }
  get relatedInfos() {
    return this.viewModel.relatedInfos;
  }
  set relatedInfos(e4) {
    this.viewModel.relatedInfos = e4;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e4) {
    this.viewModel.title = e4;
  }
  render() {
    return x("div", { bind: this, class: _4.base, onkeyup: this._handleMediaKeyup }, this._featureElementInfo?.render(), this._renderMedia());
  }
  _renderMedia() {
    const { formattedMediaInfoCount: e4, activeMediaInfoIndex: i5 } = this.viewModel, a3 = this._renderMediaText();
    return e4 ? x("div", { class: _4.mediaContainer, key: "media-element-container" }, this._renderMediaInfo(), x("div", { class: _4.mediaNavigation }, a3, e4 > 1 ? x("div", { class: _4.mediaPagination }, this._renderMediaPageButton("previous"), x("span", { class: _4.mediaPaginationText }, w(this.messages.pageText, { index: i5 + 1, total: e4 })), this._renderMediaPageButton("next")) : null)) : null;
  }
  _renderMediaText() {
    const { activeMediaInfo: e4 } = this.viewModel;
    if (!e4) return null;
    const t3 = e4 && e4.title ? x("div", { class: _4.mediaItemTitle, innerHTML: e4.title, key: "media-title" }) : null, i5 = e4 && e4.caption ? x("div", { class: _4.mediaItemCaption, innerHTML: e4.caption, key: "media-caption" }) : null;
    return t3 || i5 ? x("div", { class: _4.mediaItemText, key: "media-text" }, t3, i5) : null;
  }
  _renderImageMediaInfo(e4) {
    if (!e4.value) return null;
    const { _refreshIntervalInfo: t3 } = this, { activeMediaInfoIndex: i5, formattedMediaInfoCount: a3 } = this.viewModel, { value: r6, refreshInterval: o2, altText: s3, title: n6, type: l4 } = e4, { sourceURL: d2, linkURL: m4 } = r6, c6 = U(m4 ?? void 0) ? "_blank" : "_self", p6 = "_blank" === c6 ? "noreferrer" : "", f3 = o2 ? t3 : null, g3 = f3 ? f3.timestamp : 0, M3 = f3 ? f3.sourceURL : d2, _5 = x("img", { alt: s3 || n6, key: `media-${l4}-${i5}-${a3}-${g3}`, src: M3 ?? void 0 });
    return (m4 ? x("a", { href: m4, rel: p6, target: c6, title: n6 }, _5) : null) ?? _5;
  }
  _renderChartMediaInfo(e4) {
    const { activeMediaInfoIndex: t3, formattedMediaInfoCount: i5 } = this.viewModel;
    return x("div", { afterCreate: this._createChart, afterRemoved: this._disposeChart, bind: this, class: _4.mediaChart, key: `media-${e4.type}-${t3}-${i5}` });
  }
  _renderMediaInfoType() {
    const { activeMediaInfo: e4 } = this.viewModel;
    return e4 ? "image" === e4.type ? this._renderImageMediaInfo(e4) : e4.type.includes("chart") ? this._renderChartMediaInfo(e4) : null : null;
  }
  _renderMediaInfo() {
    const { activeMediaInfo: e4 } = this.viewModel;
    return e4 ? x("div", { class: _4.mediaItemContainer, key: "media-container" }, x("div", { class: _4.mediaItem, key: "media-item-container" }, this._renderMediaInfoType())) : null;
  }
  _renderMediaPageButton(e4) {
    if (this.viewModel.formattedMediaInfoCount < 2) return null;
    const t3 = "previous" === e4, i5 = t3 ? this.messages.previous : this.messages.next, a3 = t3 ? "chevron-left" : "chevron-right", r6 = t3 ? "media-previous" : "media-next", o2 = t3 ? this._previous : this._next;
    return x("button", { "aria-label": i5, bind: this, class: _4.mediaPaginationButton, key: r6, onclick: o2, tabIndex: 0, title: i5, type: "button" }, x("calcite-icon", { class: _4.mediaPaginationIcon, icon: a3, scale: "s" }));
  }
  _setupFeatureElementInfo() {
    const { description: e4, title: t3 } = this;
    this._featureElementInfo?.set({ description: e4, title: t3 });
  }
  _next() {
    this.viewModel.next();
  }
  _previous() {
    this.viewModel.previous();
  }
  _getRenderer() {
    if (!this.viewModel) return;
    const { graphic: e4, layer: t3 } = this.viewModel;
    return e4?.isAggregate && t3?.featureReduction && "renderer" in t3.featureReduction ? t3.featureReduction.renderer : t3?.renderer;
  }
  async _getSeriesColors(e4) {
    const { colorAm5: t3 } = await import("./chartCommon-KZ5TWL2G.js"), i5 = /* @__PURE__ */ new Map();
    return e4.forEach((e5) => {
      e5.color && i5.set(e5, t3(e5.color.toCss(true)));
    }), i5;
  }
  async _getRendererColors() {
    const { colorAm5: e4 } = await import("./chartCommon-KZ5TWL2G.js"), t3 = /* @__PURE__ */ new Map(), i5 = this._getRenderer(), a3 = "default";
    if (!i5) return t3;
    const r6 = await x2(i5);
    r6.delete(a3);
    return Array.from(r6.values()).every((e5) => 1 === e5?.length) ? (Array.from(r6.keys()).forEach((i6) => {
      const a4 = r6.get(i6)?.[0]?.toCss(true);
      a4 && t3.set(i6, e4(a4));
    }), t3) : t3;
  }
  _handleMediaKeyup(e4) {
    const { key: t3 } = e4;
    "ArrowLeft" === t3 && (e4.stopPropagation(), this.viewModel.previous()), "ArrowRight" === t3 && (e4.stopPropagation(), this.viewModel.next());
  }
  _canAnimateChart() {
    return !!this.viewModel && (!!this.viewModel.abilities.chartAnimation && !o());
  }
  _getChartAnimationMS() {
    return this._canAnimateChart() ? C : 0;
  }
  _getChartSeriesAnimationMS() {
    return this._canAnimateChart() ? y3 : 0;
  }
  async _renderChart(e4) {
    const { root: t3, mediaInfo: i5 } = e4, { value: a3, type: r6 } = i5, { ResponsiveThemeAm5: o2, DarkThemeAm5: s3, AnimatedThemeAm5: n6, ColorSetAm5: d2, ThemeAm5: m4, esriChartColorSet: c6 } = await import("./chartCommon-KZ5TWL2G.js"), h6 = m4.new(t3);
    h6.rule("ColorSet").set("colors", c6), h6.rule("ColorSet").set("reuse", true);
    const p6 = [o2.new(t3), h6];
    c2(this.container) && p6.push(s3.new(t3)), this._canAnimateChart() && p6.push(n6.new(t3)), t3.setThemes(p6);
    const u4 = await this._getRendererColors(), f3 = await this._getSeriesColors(a3.series), g3 = d2.new(t3, {}), M3 = f3.get(a3.series[0]), _5 = M3 ? { lineSettings: { stroke: M3 } } : void 0, v6 = a3.series.map((e5, t4) => {
      const i6 = f3.get(e5) || u4.get(e5.fieldName) || g3.getIndex(t4);
      return __spreadValues({ [w2]: e5.tooltip, [A]: e5.value, columnSettings: { fill: i6, stroke: i6 } }, _5);
    }).filter((e5) => "pie-chart" !== r6 || null != e5.value && e5.value > 0);
    await ("pie-chart" === r6 ? this._createPieChart(e4, v6) : this._createXYChart(e4, v6));
  }
  _getDirection() {
    return y(this.container) ? "rtl" : "ltr";
  }
  async _customizeChartTooltip(e4, t3 = "horizontal") {
    const { colorAm5: i5 } = await import("./chartCommon-KZ5TWL2G.js");
    e4.setAll({ pointerOrientation: t3 }), e4.get("background")?.setAll({ stroke: i5(I2) }), e4.label.setAll({ direction: this._getDirection(), oversizedBehavior: "wrap", maxWidth: x3 });
  }
  async _createPieChart(e4, t3) {
    const { TooltipAm5: i5 } = await import("./chartCommon-KZ5TWL2G.js"), { PieChartAm5: a3, PieSeriesAm5: r6 } = await import("./pieChart-UV6JQL72.js"), { mediaInfo: o2, root: s3 } = e4, { title: n6 } = o2, l4 = 5, d2 = o2?.altText || o2?.title || "", m4 = s3.container.children.push(a3.new(s3, { ariaLabel: d2, focusable: true, paddingBottom: l4, paddingTop: l4, paddingLeft: l4, paddingRight: l4 })), c6 = "{category}: {valuePercentTotal.formatNumber('0.00')}%\n ({value})", h6 = i5.new(s3, { labelText: c6 }), p6 = m4.series.push(r6.new(s3, { name: n6, valueField: A, categoryField: w2, tooltip: h6 }));
    p6.ticks.template.set("forceHidden", true), p6.labels.template.set("forceHidden", true), p6.slices.template.states.create("active", { shiftRadius: l4 }), await this._customizeChartTooltip(h6), p6.slices.template.setAll({ ariaLabel: c6, focusable: true, templateField: "columnSettings" }), p6.data.setAll(t3), await p6.appear(this._getChartSeriesAnimationMS()), await m4.appear(this._getChartAnimationMS()), m4.root.dom.classList.toggle(_4.mediaChartRendered, true);
  }
  _getMinSeriesValue(e4) {
    let t3 = 0;
    return e4.forEach((e5) => t3 = Math.min(e5.value, t3)), t3;
  }
  async _createColumnChart(e4, t3, i5) {
    const { TooltipAm5: a3, ScrollbarAm5: r6 } = await import("./chartCommon-KZ5TWL2G.js"), { CategoryAxisAm5: o2, AxisRendererXAm5: s3, ValueAxisAm5: n6, AxisRendererYAm5: l4, ColumnSeriesAm5: d2 } = await import("./xyChart-LIAYYLK3.js"), { mediaInfo: m4, root: c6 } = t3, { value: h6, title: p6 } = m4;
    e4.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const u4 = e4.xAxes.push(o2.new(c6, { renderer: s3.new(c6, { inversed: y(this.container) }), categoryField: w2 }));
    u4.get("renderer").labels.template.setAll({ forceHidden: true });
    const g3 = e4.yAxes.push(n6.new(c6, { renderer: l4.new(c6, { inside: false }), min: this._getMinSeriesValue(h6.series) }));
    g3.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M3 = "{categoryX}", _5 = a3.new(c6, { labelText: M3 }), I4 = e4.series.push(d2.new(c6, { name: p6, xAxis: u4, yAxis: g3, valueYField: A, categoryXField: w2, tooltip: _5 }));
    await this._customizeChartTooltip(_5), I4.columns.template.setAll({ ariaLabel: M3, focusable: true, templateField: "columnSettings" }), h6.series.length > v4 && e4.set("scrollbarX", r6.new(c6, { orientation: "horizontal" })), u4.data.setAll(i5), I4.data.setAll(i5), await I4.appear(this._getChartSeriesAnimationMS()), await e4.appear(this._getChartAnimationMS());
  }
  async _createBarChart(e4, t3, i5) {
    const { TooltipAm5: a3, ScrollbarAm5: r6 } = await import("./chartCommon-KZ5TWL2G.js"), { CategoryAxisAm5: o2, AxisRendererXAm5: s3, ValueAxisAm5: n6, AxisRendererYAm5: l4, ColumnSeriesAm5: d2 } = await import("./xyChart-LIAYYLK3.js"), { mediaInfo: m4, root: c6 } = t3, { value: h6, title: p6 } = m4;
    e4.setAll({ wheelX: "panY", wheelY: "zoomY" });
    const u4 = e4.yAxes.push(o2.new(c6, { renderer: l4.new(c6, { inversed: true }), categoryField: w2 }));
    u4.get("renderer").labels.template.setAll({ forceHidden: true });
    const g3 = e4.xAxes.push(n6.new(c6, { renderer: s3.new(c6, { inside: false, inversed: y(this.container) }), min: this._getMinSeriesValue(h6.series) }));
    g3.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M3 = "{categoryY}", _5 = a3.new(c6, { labelText: M3 }), I4 = e4.series.push(d2.new(c6, { name: p6, xAxis: g3, yAxis: u4, valueXField: A, categoryYField: w2, tooltip: _5 }));
    await this._customizeChartTooltip(_5, "vertical"), I4.columns.template.setAll({ ariaLabel: M3, focusable: true, templateField: "columnSettings" }), h6.series.length > v4 && e4.set("scrollbarY", r6.new(c6, { orientation: "vertical" })), u4.data.setAll(i5), I4.data.setAll(i5), await I4.appear(this._getChartSeriesAnimationMS()), await e4.appear(this._getChartAnimationMS());
  }
  async _createLineChart(e4, t3, i5) {
    const { TooltipAm5: a3, ScrollbarAm5: r6 } = await import("./chartCommon-KZ5TWL2G.js"), { CategoryAxisAm5: o2, AxisRendererXAm5: s3, ValueAxisAm5: n6, AxisRendererYAm5: l4, LineSeriesAm5: d2 } = await import("./xyChart-LIAYYLK3.js"), { root: m4, mediaInfo: c6 } = t3, { value: h6, title: p6 } = c6;
    e4.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const u4 = e4.xAxes.push(o2.new(m4, { renderer: s3.new(m4, { inversed: y(this.container) }), categoryField: w2 }));
    u4.get("renderer").labels.template.setAll({ forceHidden: true });
    const g3 = e4.yAxes.push(n6.new(m4, { renderer: l4.new(m4, { inside: false }), min: this._getMinSeriesValue(h6.series) }));
    g3.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M3 = "{categoryX}", _5 = i5[0]?.lineSettings?.stroke, I4 = a3.new(m4, { getFillFromSprite: !_5, labelText: M3 });
    _5 && I4.get("background")?.setAll({ fill: _5 });
    const C3 = e4.series.push(d2.new(m4, { name: p6, xAxis: u4, yAxis: g3, valueYField: A, categoryXField: w2, tooltip: I4 }));
    C3.strokes.template.setAll({ templateField: "lineSettings" }), await this._customizeChartTooltip(I4, "vertical"), h6.series.length > v4 && e4.set("scrollbarX", r6.new(m4, { orientation: "horizontal" })), u4.data.setAll(i5), C3.data.setAll(i5), await C3.appear(this._getChartSeriesAnimationMS()), await e4.appear(this._getChartAnimationMS());
  }
  async _createXYChart(e4, t3) {
    const { XYChartAm5: i5, XYCursorAm5: a3 } = await import("./xyChart-LIAYYLK3.js"), { root: r6, mediaInfo: o2 } = e4, { type: s3 } = o2, n6 = o2?.altText || o2?.title || "", l4 = r6.container.children.push(i5.new(r6, { ariaLabel: n6, focusable: true, panX: true, panY: true }));
    l4.set("cursor", a3.new(r6, {})), "column-chart" === s3 && await this._createColumnChart(l4, e4, t3), "bar-chart" === s3 && await this._createBarChart(l4, e4, t3), "line-chart" === s3 && await this._createLineChart(l4, e4, t3), l4.root.dom.classList.toggle(_4.mediaChartRendered, true);
  }
  _clearMediaRefreshTimer() {
    const { _refreshTimer: e4 } = this;
    e4 && (clearTimeout(e4), this._refreshTimer = null);
  }
  _updateMediaInfoTimestamp(e4) {
    const t3 = Date.now();
    this._refreshIntervalInfo = { timestamp: t3, sourceURL: e4 && this._getImageSource(e4, t3) };
  }
  _setupMediaRefreshTimer() {
    this._clearMediaRefreshTimer();
    const { activeMediaInfo: e4 } = this.viewModel;
    "image" === e4?.type && e4?.refreshInterval > 0 && this._setRefreshTimeout(e4);
  }
  _setRefreshTimeout(e4) {
    const { refreshInterval: t3, value: i5 } = e4, a3 = 6e4 * t3;
    this._updateMediaInfoTimestamp(i5.sourceURL);
    const r6 = setInterval(() => {
      this._updateMediaInfoTimestamp(i5.sourceURL);
    }, a3);
    this._refreshTimer = r6;
  }
  _getImageSource(e4, t3) {
    const i5 = e4.includes("?") ? "&" : "?", [a3, r6 = ""] = e4.split("#");
    return `${a3}${i5}timestamp=${t3}${r6 ? "#" : ""}${r6}`;
  }
};
__decorate([a()], T3.prototype, "_refreshIntervalInfo", void 0), __decorate([a()], T3.prototype, "attributes", null), __decorate([a()], T3.prototype, "activeMediaInfoIndex", null), __decorate([a()], T3.prototype, "description", null), __decorate([a()], T3.prototype, "fieldInfoMap", null), __decorate([a()], T3.prototype, "layer", null), __decorate([a()], T3.prototype, "mediaInfos", null), __decorate([a()], T3.prototype, "popupTemplate", null), __decorate([a()], T3.prototype, "relatedInfos", null), __decorate([a()], T3.prototype, "title", null), __decorate([a({ type: v2 })], T3.prototype, "viewModel", void 0), __decorate([a(), v("esri/widgets/Feature/t9n/Feature")], T3.prototype, "messages", void 0), T3 = __decorate([c("esri.widgets.Feature.FeatureMedia")], T3);

// node_modules/@arcgis/core/widgets/Feature/FeatureExpression.js
var m3 = "esri-feature";
var u3 = { base: `${m3}-expression`, loadingSpinnerContainer: `${m3}__loading-container` };
var g = class extends O {
  constructor(e4, t3) {
    super(e4, t3), this._contentWidget = null, this.viewModel = new E2();
  }
  initialize() {
    this.addHandles(l(() => this.viewModel?.contentElementViewModel, () => this._setupExpressionWidget(), h2));
  }
  loadDependencies() {
    return c3({ loader: () => import("./calcite-loader-SGYRH2R7.js") });
  }
  destroy() {
    this._destroyContentWidget();
  }
  render() {
    const { state: e4 } = this.viewModel;
    return x("div", { class: u3.base }, "loading" === e4 ? this._renderLoading() : "disabled" === e4 ? null : this._contentWidget?.render());
  }
  _renderLoading() {
    return x("div", { class: u3.loadingSpinnerContainer, key: "loading-container" }, x("calcite-loader", { inline: true, label: "" }));
  }
  _destroyContentWidget() {
    const { _contentWidget: e4 } = this;
    e4 && (e4.viewModel = null, e4.destroy()), this._contentWidget = null;
  }
  _setupExpressionWidget() {
    const { contentElementViewModel: e4, contentElement: t3 } = this.viewModel, i5 = t3?.type;
    this._destroyContentWidget();
    const o2 = e4 ? "fields" === i5 ? new h5({ viewModel: e4 }) : "media" === i5 ? new T3({ viewModel: e4 }) : "text" === i5 ? new c5({ viewModel: e4 }) : null : null;
    this._contentWidget = o2, this.scheduleRender();
  }
};
__decorate([a({ type: E2 })], g.prototype, "viewModel", void 0), g = __decorate([c("esri.widgets.Feature.FeatureExpression")], g);

// node_modules/@arcgis/core/widgets/Feature/FeatureRelationship.js
var b2;
var y4 = "esri-feature";
var I3 = `${y4}-relationship`;
var F2 = { base: I3, listContainer: `${I3}__list`, listItem: `${I3}__list-item`, listItemHidden: `${I3}__list-item--hidden`, listContainerQuerying: `${I3}__list--querying`, featureObserver: `${y4}__feature-observer`, stickySpinnerContainer: `${y4}__sticky-loading-container`, loadingSpinnerContainer: `${y4}__loading-container` };
var C2 = { title: true, description: true };
var M2 = b2 = class extends O {
  constructor(e4, t3) {
    super(e4, t3), this._featureElementInfo = null, this._relatedFeatureIntersectionObserverNode = null, this._relatedFeatureIntersectionObserver = new IntersectionObserver(([e5]) => {
      e5?.isIntersecting && this._increaseFeaturePage();
    }, { root: window.document }), this.flowItems = null, this.flowType = "feature-relationship", this.headingLevel = 2, this.viewModel = new _3(), this.messages = null, this.messagesCommon = null, this.visibleElements = __spreadValues({}, C2), this._increaseFeaturePage = () => {
      const { state: e5, showAllEnabled: t4, relatedFeatures: s3, featuresPerPage: i5, featurePage: r6 } = this.viewModel;
      "ready" === e5 && t4 && s3.length >= i5 * r6 && this.viewModel.featurePage++;
    };
  }
  initialize() {
    this._featureElementInfo = new p3(), this.addHandles([l(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), h2), l(() => [this.viewModel.state, this.viewModel.showAllEnabled, this._relatedFeatureIntersectionObserverNode], () => this._handleRelatedFeatureObserverChange()), a2(() => this.viewModel.relatedFeatureViewModels, "change", () => this._setupRelatedFeatureViewModels())]);
  }
  loadDependencies() {
    return c3({ chip: () => import("./calcite-chip-WREIAJQI.js"), icon: () => import("./calcite-icon-OGZL6YYI.js"), list: () => import("./calcite-list-BKLPZM5Y.js"), "list-item": () => import("./calcite-list-item-4WFZVGWM.js"), loader: () => import("./calcite-loader-SGYRH2R7.js"), notice: () => import("./calcite-notice-DE3QPC5W.js") });
  }
  destroy() {
    this._unobserveRelatedFeatureObserver(), this._featureElementInfo = u(this._featureElementInfo);
  }
  get displayShowAllButton() {
    const { showAllEnabled: e4, featureCount: t3, displayCount: s3, state: i5, allCategoriesCount: r6 } = this.viewModel;
    return !e4 && "ready" === i5 && (!!r6 && (r6 > s3 || 0 === s3) || !!t3 && (t3 > s3 || 0 === s3));
  }
  get displayListItems() {
    const { relatedFeatureViewModels: e4, allCategoriesCount: t3 } = this.viewModel;
    return this.displayShowAllButton || !!e4.length || !!t3;
  }
  get allItemsDescription() {
    const { messages: e4 } = this, { featureCount: i5, allCategories: r6, allCategoriesCount: o2 } = this.viewModel;
    return w(e4?.numberRecords, { number: h(r6 ? o2 : i5) });
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e4) {
    this.viewModel.description = e4;
  }
  get title() {
    const { activeCategory: e4, title: t3 } = this.viewModel;
    return e4?.name ?? t3;
  }
  set title(e4) {
    this.viewModel.title = e4;
  }
  castVisibleElements(e4) {
    return __spreadValues(__spreadValues({}, C2), e4);
  }
  render() {
    const { state: e4 } = this.viewModel;
    return x("div", { class: this.classes(F2.base, e.widget) }, this._featureElementInfo?.render(), "loading" === e4 ? this._renderLoading() : "disabled" === e4 ? this._renderRelationshipNotFound() : this._renderRelatedFeatures());
  }
  _selectCategory(e4) {
    const { flowItems: t3, featureVisibleElements: s3, viewModel: i5 } = this;
    t3 && (i5.activeCategory = e4, i5.showAllEnabled = true, t3.push(new b2({ flowItems: t3, featureVisibleElements: s3, visibleElements: { title: false, description: false }, viewModel: i5 })));
  }
  async _selectRecord(e4) {
    const { flowItems: t3, featureVisibleElements: s3 } = this;
    if (!t3) return;
    e4.abilities = { relationshipContent: true };
    const { default: i5 } = await import("./Feature-4QKNHPVU.js");
    t3.push(new i5({ flowItems: t3, flowType: this.flowType, viewModel: e4, visibleElements: s3 }));
  }
  _showAllRecords() {
    const { flowItems: e4 } = this;
    if (!e4) return;
    const { viewModel: t3, featureVisibleElements: s3 } = this;
    t3.showAllEnabled = true;
    const i5 = new b2({ flowItems: e4, featureVisibleElements: s3, visibleElements: { title: false, description: false }, viewModel: t3 });
    e4.push(i5);
  }
  _renderStickyLoading() {
    return "querying" === this.viewModel.state ? x("div", { class: F2.stickySpinnerContainer, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return x("calcite-loader", { inline: true, label: "" });
  }
  _renderLoading() {
    return x("div", { class: F2.loadingSpinnerContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderShowAllIconNode() {
    return x("calcite-icon", { icon: "list", scale: "s", slot: "content-end" });
  }
  _renderChevronIconNode() {
    const e4 = y(this.container) ? "chevron-left" : "chevron-right";
    return x("calcite-icon", { icon: e4, scale: "s", slot: "content-end" });
  }
  _renderCategory(e4) {
    const { count: t3, name: i5, value: r6 } = e4, o2 = h(t3);
    return x("calcite-list-item", { class: F2.listItem, disabled: !t3, key: r6, label: i5, onCalciteListItemSelect: () => this._selectCategory(e4) }, x("calcite-chip", { label: o2, scale: "s", slot: "content-end" }, o2), this._renderChevronIconNode());
  }
  _renderRelatedFeature(e4) {
    const { itemDescriptionFieldName: t3 } = this.viewModel, s3 = e4.title;
    e4.description = t3 && e4.formattedAttributes?.global[t3];
    const i5 = "loading" === e4.state;
    return x("calcite-list-item", { class: this.classes(F2.listItem, { [F2.listItemHidden]: i5 }), description: i2(e4.description ?? ""), key: e4.uid, label: i2(s3), onCalciteListItemSelect: () => this._selectRecord(e4) }, this._renderChevronIconNode());
  }
  _renderShowAllListItem() {
    return this.displayShowAllButton ? x("calcite-list-item", { description: this.allItemsDescription, key: "show-all-item", label: this.messages?.showAll, onCalciteListItemSelect: () => this._showAllRecords() }, this._renderShowAllIconNode()) : null;
  }
  _renderNoRelatedFeaturesMessage() {
    return x("calcite-notice", { icon: "information", key: "no-related-features-message", kind: "brand", open: true, scale: "s", width: "full" }, x("div", { slot: "message" }, this.messages?.noRelatedFeatures));
  }
  _renderFeatureObserver() {
    return x("div", { afterCreate: this._relatedFeatureIntersectionObserverCreated, bind: this, class: F2.featureObserver, key: "feature-observer" });
  }
  _renderList() {
    const { relatedFeatureViewModels: e4, categories: t3 } = this.viewModel;
    return x("calcite-list", { displayMode: "flat", label: this.messages?.relatedFeaturesList }, t3?.map((e5) => this._renderCategory(e5)) ?? e4.toArray().map((e5) => this._renderRelatedFeature(e5)), this._renderShowAllListItem());
  }
  _renderRelatedFeatures() {
    const { displayListItems: e4 } = this, { state: t3 } = this.viewModel;
    return x("div", { class: this.classes(F2.listContainer, { [F2.listContainerQuerying]: "querying" === t3 }), key: "list-container" }, e4 ? this._renderList() : "ready" === t3 ? this._renderNoRelatedFeaturesMessage() : null, this._renderStickyLoading(), this._renderFeatureObserver());
  }
  _renderRelationshipNotFound() {
    return x("calcite-notice", { icon: "exclamation-mark-triangle", key: "relationship-not-found", kind: "danger", open: true, scale: "s", width: "full" }, x("div", { slot: "message" }, this.messages?.relationshipNotFound));
  }
  _setupRelatedFeatureViewModels() {
    const { relatedFeatureViewModels: e4 } = this.viewModel, t3 = "related-feature-viewmodels";
    this.removeHandles(t3), e4?.forEach((e5) => {
      this.addHandles(l(() => [e5.title, e5.state], () => this.scheduleRender(), h2), t3);
    }), this.scheduleRender();
  }
  _setupFeatureElementInfo() {
    const { headingLevel: e4, visibleElements: t3 } = this, s3 = t3.description && this.description, i5 = t3.title && this.title;
    this._featureElementInfo?.set({ description: s3, title: i5, headingLevel: e4 });
  }
  async _handleRelatedFeatureObserverChange() {
    this._unobserveRelatedFeatureObserver();
    const { state: e4, showAllEnabled: t3 } = this.viewModel;
    await T(0), this._relatedFeatureIntersectionObserverNode && "ready" === e4 && t3 && this._relatedFeatureIntersectionObserver.observe(this._relatedFeatureIntersectionObserverNode);
  }
  _relatedFeatureIntersectionObserverCreated(e4) {
    this._relatedFeatureIntersectionObserverNode = e4;
  }
  _unobserveRelatedFeatureObserver() {
    this._relatedFeatureIntersectionObserverNode && this._relatedFeatureIntersectionObserver.unobserve(this._relatedFeatureIntersectionObserverNode);
  }
};
__decorate([a()], M2.prototype, "_relatedFeatureIntersectionObserverNode", void 0), __decorate([a({ readOnly: true })], M2.prototype, "displayShowAllButton", null), __decorate([a({ readOnly: true })], M2.prototype, "displayListItems", null), __decorate([a({ readOnly: true })], M2.prototype, "allItemsDescription", null), __decorate([a()], M2.prototype, "description", null), __decorate([a()], M2.prototype, "featureVisibleElements", void 0), __decorate([a()], M2.prototype, "flowItems", void 0), __decorate([a()], M2.prototype, "flowType", void 0), __decorate([a()], M2.prototype, "headingLevel", void 0), __decorate([a()], M2.prototype, "title", null), __decorate([a({ type: _3 })], M2.prototype, "viewModel", void 0), __decorate([a(), v("esri/widgets/Feature/t9n/Feature")], M2.prototype, "messages", void 0), __decorate([a(), v("esri/t9n/common")], M2.prototype, "messagesCommon", void 0), __decorate([a()], M2.prototype, "visibleElements", void 0), __decorate([m("visibleElements")], M2.prototype, "castVisibleElements", null), M2 = b2 = __decorate([c("esri.widgets.Feature.FeatureRelationship")], M2);

// node_modules/@arcgis/core/widgets/Feature/FeatureUtilityNetworkAssociations.js
var y5 = "esri-feature-utility-network-associations";
var v5 = `${y5}__loading-container`;
var f2 = { base: y5, listContainer: `${y5}__list`, loadingContainer: v5, loadingContainerSticky: `${v5}--sticky` };
var g2 = class extends O {
  constructor(e4, t3) {
    super(e4, t3), this._featureElementInfo = null, this.onSelectAssociationType = () => {
    }, this.flowType = "feature-utility-network-associations", this.flowItems = null, this.parentFeatureViewModel = null, this.headingLevel = 5, this.viewModel = new v3(), this.messages = null, this.messagesCommon = null, this.visibleElements = new s2();
  }
  initialize() {
    this._featureElementInfo = new p3(), this.addHandles([l(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), h2)]);
  }
  loadDependencies() {
    return c3({ icon: () => import("./calcite-icon-OGZL6YYI.js"), list: () => import("./calcite-list-BKLPZM5Y.js"), "list-item": () => import("./calcite-list-item-4WFZVGWM.js"), loader: () => import("./calcite-loader-SGYRH2R7.js"), notice: () => import("./calcite-notice-DE3QPC5W.js") });
  }
  destroy() {
    this._featureElementInfo = u(this._featureElementInfo);
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e4) {
    this.viewModel.description = e4;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e4) {
    this.viewModel.title = e4;
  }
  render() {
    const { state: e4 } = this.viewModel;
    return x("div", { class: this.classes(f2.base, e.widget) }, this._featureElementInfo?.render(), "loading" === e4 ? this._renderLoading() : "disabled" === e4 ? this._renderAssociationNotFound() : this._renderContent());
  }
  _renderStickyLoading() {
    return "querying" === this.viewModel.state ? x("div", { class: f2.loadingContainerSticky, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return x("calcite-loader", { inline: true, label: this.messagesCommon.loading });
  }
  _renderLoading() {
    return x("div", { class: f2.loadingContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderAssociationNotFound() {
    return x("calcite-notice", { icon: "information", key: "association-not-found", kind: "info", open: true, scale: "s", width: "full" }, x("div", { slot: "message" }, this.messages?.noAssociations));
  }
  _renderAssociationType(e4) {
    const { viewModel: t3 } = this, i5 = this._getAssociationTypeTitle(e4);
    return x("calcite-list-item", { description: i2(e4.description), key: `association-type-${e4.type}`, label: i2(i5), value: e4.type, onCalciteListItemSelect: () => this.onSelectAssociationType({ viewModel: t3, listType: e4, title: i5 }) }, x("calcite-icon", { flipRtl: true, icon: "chevron-right", scale: "s", slot: "content-end" }));
  }
  _renderAssociations(e4) {
    const { viewModel: t3 } = this;
    return "featureForm" === t3.source || t3.getFeatureCountForAssociationType(e4.type) > 0 ? this._renderAssociationType(e4) : void 0;
  }
  _renderContent() {
    const { messages: e4, viewModel: t3 } = this, { state: i5, associationTypes: o2 } = t3;
    return x("div", { class: f2.listContainer, key: "list-container" }, "ready" === i5 ? x("div", null, x("calcite-list", { displayMode: "flat", label: e4?.associationsList }, o2.map((e5) => this._renderAssociations(e5)))) : null, this._renderStickyLoading());
  }
  _getAssociationTypeTitle(e4) {
    const { messages: t3 } = this;
    if (e4.title) return e4.title;
    switch (e4.type) {
      case "attachment":
        return t3.associationsAttachments;
      case "connectivity":
        return t3.associationsConnectivity;
      case "structure":
        return t3.associationsStructure;
      case "content":
        return t3.associationsContents;
      case "container":
        return t3.associationsContainer;
    }
  }
  _setupFeatureElementInfo() {
    const { headingLevel: e4, visibleElements: t3 } = this, i5 = t3.description && this.description, o2 = t3.title && this.title;
    this._featureElementInfo?.set({ description: i5, title: o2, headingLevel: e4 });
  }
};
__decorate([a({ constructOnly: true })], g2.prototype, "onSelectAssociationType", void 0), __decorate([a()], g2.prototype, "flowType", void 0), __decorate([a()], g2.prototype, "flowItems", void 0), __decorate([a()], g2.prototype, "parentFeatureViewModel", void 0), __decorate([a()], g2.prototype, "featureVisibleElements", void 0), __decorate([a()], g2.prototype, "description", null), __decorate([a()], g2.prototype, "headingLevel", void 0), __decorate([a()], g2.prototype, "title", null), __decorate([a({ type: v3 })], g2.prototype, "viewModel", void 0), __decorate([a(), v("esri/widgets/Feature/t9n/Feature")], g2.prototype, "messages", void 0), __decorate([a(), v("esri/t9n/common")], g2.prototype, "messagesCommon", void 0), __decorate([a({ type: s2, nonNullable: true })], g2.prototype, "visibleElements", void 0), g2 = __decorate([c("esri.widgets.Feature.FeatureUtilityNetworkAssociations")], g2);

// node_modules/@arcgis/core/widgets/Feature/resources.js
var e3 = "esri-feature";
var t2 = { base: e3, container: `${e3}__size-container`, title: `${e3}__title`, main: `${e3}__main-container`, btn: `${e3}__button`, icon: `${e3}__icon`, content: `${e3}__content`, contentNode: `${e3}__content-node`, contentNodeText: `${e3}__content-node--text`, contentElement: `${e3}__content-element`, text: `${e3}__text`, lastEditedInfo: `${e3}__last-edited-info`, fields: `${e3}__fields`, fieldHeader: `${e3}__field-header`, fieldData: `${e3}__field-data`, fieldDataDate: `${e3}__field-data--date`, loadingSpinnerContainer: `${e3}__loading-container` };

// node_modules/@arcgis/core/widgets/Feature/support/FeatureContentMixin.js
var d = (d2) => {
  const c6 = d2;
  let i5 = class extends c6 {
    constructor() {
      super(...arguments), this.renderNodeContent = (e4) => b(e4) && !e4.destroyed ? x("div", { class: t2.contentNode, key: e4 }, e4.render()) : e4 instanceof HTMLElement ? x("div", { afterCreate: this._attachToNode, bind: e4, class: t2.contentNode, key: e4 }) : N(e4) ? x("div", { afterCreate: this._attachToNode, bind: e4.domNode, class: t2.contentNode, key: e4 }) : null;
    }
    _attachToNode(e4) {
      const t3 = this;
      e4.appendChild(t3);
    }
  };
  return i5 = __decorate([c("esri.widgets.Feature.support.FeatureContentMixin")], i5), i5;
};

// node_modules/@arcgis/core/widgets/Feature.js
var j2 = { title: true, content: true, lastEditedInfo: true };
var k2 = class extends d(O) {
  constructor(e4, t3) {
    super(e4, t3), this._contentWidgets = [], this.flowType = "feature", this.flowItems = null, this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.visibleElements = __spreadValues({}, j2), this.viewModel = new ne(), true !== e4?.suppressDeprecationWarning && (this.announceDeprecation = () => {
      r2(n.getLogger(this), "Feature", "arcgis-feature", { version: "4.34" });
    });
  }
  normalizeCtorArgs(e4 = {}) {
    const _a = e4, { suppressDeprecationWarning: t3 } = _a, i5 = __objRest(_a, ["suppressDeprecationWarning"]);
    return i5;
  }
  initialize() {
    this.addHandles(l(() => this.viewModel?.contentViewModels, () => this._setupContentWidgets(), h2));
  }
  loadDependencies() {
    return c3({ notice: () => import("./calcite-notice-DE3QPC5W.js"), loader: () => import("./calcite-loader-SGYRH2R7.js") });
  }
  destroy() {
    this._destroyContentWidgets();
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e4) {
    this.viewModel.graphic = e4;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(e4) {
    this.viewModel.defaultPopupTemplateEnabled = e4;
  }
  get isTable() {
    return this.viewModel.isFeatureFromTable;
  }
  get icon() {
    return "polygon";
  }
  set icon(e4) {
    this._overrideIfSome("icon", e4);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e4) {
    this._overrideIfSome("label", e4);
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e4) {
    this.viewModel.location = e4;
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(e4) {
    this.viewModel.spatialReference = e4;
  }
  get timeZone() {
    return this.viewModel.timeZone;
  }
  set timeZone(e4) {
    this.viewModel.timeZone = e4;
  }
  get title() {
    return this.viewModel.title;
  }
  castVisibleElements(e4) {
    return __spreadValues(__spreadValues({}, j2), e4);
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e4) {
    this.viewModel.map = e4;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e4) {
    this.viewModel.view = e4;
  }
  setActiveMedia(e4, t3) {
    return this.viewModel.setActiveMedia(e4, t3);
  }
  nextMedia(e4) {
    return this.viewModel.nextMedia(e4);
  }
  previousMedia(e4) {
    return this.viewModel.previousMedia(e4);
  }
  render() {
    const { state: e4 } = this.viewModel, t3 = x("div", { class: t2.container, key: "container" }, this._renderTitle(), "error" === e4 ? this._renderError() : "loading" === e4 ? this._renderLoading() : this._renderContentContainer());
    return x("div", { class: this.classes(t2.base, e.widget) }, t3);
  }
  _renderError() {
    const { messagesCommon: e4, messages: t3, visibleElements: i5 } = this;
    return x("calcite-notice", { icon: "exclamation-mark-circle", kind: "danger", open: true, scale: "s" }, i5.title ? x("div", { key: "error-title", slot: "title" }, e4.errorMessage) : null, x("div", { key: "error-message", slot: "message" }, t3.loadingError));
  }
  _renderLoading() {
    return x("div", { class: t2.loadingSpinnerContainer, key: "loading-container" }, x("calcite-loader", { inline: true, label: "" }));
  }
  _renderContentContainer() {
    const { visibleElements: e4 } = this;
    return e4.content ? x("div", { class: t2.main }, [this._renderContent(), this._renderLastEditInfo()]) : null;
  }
  _renderTitle() {
    const { visibleElements: e4, title: t3 } = this;
    return e4.title ? x(i4, { class: t2.title, innerHTML: t3, level: this.headingLevel }) : null;
  }
  _renderContent() {
    const e4 = this.viewModel.content, t3 = "content";
    if (!e4) return null;
    if (Array.isArray(e4)) return e4.length ? x("div", { class: t2.contentNode, key: `${t3}-content-elements` }, e4.map(this._renderContentElement, this)) : null;
    if ("string" == typeof e4) {
      const e5 = this._contentWidgets[0];
      return !e5 || e5.destroyed ? null : x("div", { class: this.classes(t2.contentNode, t2.contentNodeText), key: `${t3}-content` }, e5.render());
    }
    return this.renderNodeContent(e4);
  }
  _renderContentElement(e4, t3) {
    const { visibleElements: i5 } = this;
    if ("boolean" != typeof i5.content && !i5.content?.[e4.type]) return null;
    switch (e4.type) {
      case "attachments":
        return this._renderAttachments(t3);
      case "custom":
        return this._renderCustom(e4, t3);
      case "fields":
        return this._renderFields(t3);
      case "media":
        return this._renderMedia(t3);
      case "text":
        return this._renderText(e4, t3);
      case "expression":
        return this._renderExpression(t3);
      case "relationship":
        return this._renderRelationship(t3);
      case "utility-network-associations":
        return this._renderAssociation(t3);
      default:
        return null;
    }
  }
  _renderAttachments(e4) {
    const t3 = this._contentWidgets[e4];
    if (!t3 || t3.destroyed) return null;
    const { state: i5, attachmentInfos: s3 } = t3.viewModel;
    return "loading" === i5 || s3.length > 0 ? x("div", { class: this.classes(t2.contentElement), key: this._buildKey("attachments-element", e4) }, t3.render()) : null;
  }
  _renderRelationship(e4) {
    const t3 = this._contentWidgets[e4];
    return t3 && !t3.destroyed && this.flowItems ? x("div", { class: t2.contentElement, key: this._buildKey("relationship-element", e4) }, t3.render()) : null;
  }
  _renderAssociation(e4) {
    const t3 = this._contentWidgets[e4];
    return t3 && !t3.destroyed && this.flowItems ? x("div", { class: t2.contentElement, key: this._buildKey("utility-network-association-element", e4) }, t3.render()) : null;
  }
  _renderExpression(e4) {
    const t3 = this._contentWidgets[e4];
    return t3 && !t3.destroyed && t3.viewModel.contentElement ? x("div", { class: t2.contentElement, key: this._buildKey("expression-element", e4) }, t3.render()) : null;
  }
  _renderCustom(e4, t3) {
    const { creator: i5 } = e4, s3 = this._contentWidgets[t3];
    return !s3 || s3.destroyed ? null : i5 ? x("div", { class: t2.contentElement, key: this._buildKey("custom-element", t3) }, s3.render()) : null;
  }
  _renderFields(e4) {
    const t3 = this._contentWidgets[e4];
    return !t3 || t3.destroyed ? null : x("div", { class: t2.contentElement, key: this._buildKey("fields-element", e4) }, t3.render());
  }
  _renderMedia(e4) {
    const t3 = this._contentWidgets[e4];
    return !t3 || t3.destroyed ? null : x("div", { class: t2.contentElement, key: this._buildKey("media-element", e4) }, t3.render());
  }
  _renderLastEditInfo() {
    const { visibleElements: e4, messages: t3 } = this, { lastEditInfo: s3 } = this.viewModel;
    if (!s3 || !e4.lastEditedInfo) return null;
    const { date: n6, user: r6 } = s3, o2 = "edit" === s3.type ? r6 ? t3.lastEditedByUser : t3.lastEdited : r6 ? t3.lastCreatedByUser : t3.lastCreated, l4 = w(o2, { date: n6, user: r6 });
    return x("div", { class: this.classes(t2.lastEditedInfo, t2.contentElement), key: "edit-info-element" }, l4);
  }
  _renderText(e4, t3) {
    const i5 = e4.text, s3 = this._contentWidgets[t3];
    return !s3 || s3.destroyed ? null : i5 ? x("div", { class: this.classes(t2.contentElement, t2.text), key: this._buildKey("text-element", t3) }, s3.render()) : null;
  }
  _buildKey(e4, ...t3) {
    return `${e4}__${this.viewModel?.graphic?.uid || "0"}-${t3.join("-")}`;
  }
  _destroyContentWidget(e4) {
    e4 && (e4.viewModel = null, !e4.destroyed && e4.destroy());
  }
  _destroyContentWidgets() {
    this._contentWidgets.forEach((e4) => this._destroyContentWidget(e4)), this._contentWidgets = [];
  }
  _setupContentWidgets() {
    this._destroyContentWidgets();
    const { headingLevel: e4, visibleElements: t3, flowItems: i5, viewModel: s3 } = this, n6 = s3?.content, { contentViewModels: r6 } = s3;
    if (Array.isArray(n6)) n6.forEach((n7, o2) => {
      if ("attachments" === n7.type && (this._contentWidgets[o2] = new h4({ displayType: n7.displayType, headingLevel: t3.title && e4 < 6 ? e4 + 1 : e4, viewModel: r6[o2] })), "fields" === n7.type && (this._contentWidgets[o2] = new h5({ viewModel: r6[o2] })), "media" === n7.type && (this._contentWidgets[o2] = new T3({ viewModel: r6[o2] })), "text" === n7.type && (this._contentWidgets[o2] = new c5({ viewModel: r6[o2] })), "custom" === n7.type && (this._contentWidgets[o2] = new c5({ viewModel: r6[o2] })), "expression" === n7.type && (this._contentWidgets[o2] = new g({ viewModel: r6[o2] })), "relationship" === n7.type) {
        const e5 = new M2({ flowItems: i5, featureVisibleElements: t3, viewModel: r6[o2] });
        this._contentWidgets[o2] = e5;
      }
      if ("utility-network-associations" === n7.type) {
        const e5 = async (e6) => {
          const { viewModel: n9, listType: r7, title: o3 } = e6;
          if (!i5) return;
          n9.activeAssociationType = r7;
          const { default: l4 } = await import("./FeatureUtilityNetworkAssociationList-74H2DUFI.js"), d2 = new l4({ viewModel: n9, parentFeatureViewModel: s3, listType: r7, title: o3, featureVisibleElements: t3, description: s3.title, flowItems: i5 });
          i5.push(d2);
        }, n8 = new g2({ flowItems: i5, onSelectAssociationType: e5, parentFeatureViewModel: s3, featureVisibleElements: t3, viewModel: r6[o2] });
        this._contentWidgets[o2] = n8;
      }
    }, this);
    else {
      const e5 = r6[0];
      e5 && !e5.destroyed && (this._contentWidgets[0] = new c5({ viewModel: e5 }));
    }
    this.scheduleRender();
  }
};
__decorate([a()], k2.prototype, "flowType", void 0), __decorate([a({ type: j })], k2.prototype, "graphic", null), __decorate([a()], k2.prototype, "defaultPopupTemplateEnabled", null), __decorate([a()], k2.prototype, "flowItems", void 0), __decorate([a()], k2.prototype, "headingLevel", void 0), __decorate([a({ readOnly: true })], k2.prototype, "isTable", null), __decorate([a()], k2.prototype, "icon", null), __decorate([a()], k2.prototype, "label", null), __decorate([a({ type: _2 })], k2.prototype, "location", null), __decorate([a(), v("esri/widgets/Feature/t9n/Feature")], k2.prototype, "messages", void 0), __decorate([a(), v("esri/t9n/common")], k2.prototype, "messagesCommon", void 0), __decorate([a()], k2.prototype, "spatialReference", null), __decorate([a()], k2.prototype, "timeZone", null), __decorate([a({ readOnly: true })], k2.prototype, "title", null), __decorate([a()], k2.prototype, "visibleElements", void 0), __decorate([m("visibleElements")], k2.prototype, "castVisibleElements", null), __decorate([a()], k2.prototype, "map", null), __decorate([a()], k2.prototype, "view", null), __decorate([a({ type: ne })], k2.prototype, "viewModel", void 0), k2 = __decorate([c("esri.widgets.Feature")], k2);

export {
  i4 as i,
  t2 as t,
  d,
  k2 as k
};
//# sourceMappingURL=chunk-33QMEUDY.js.map
