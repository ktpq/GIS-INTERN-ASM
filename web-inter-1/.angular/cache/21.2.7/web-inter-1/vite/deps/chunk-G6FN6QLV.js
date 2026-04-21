import {
  CSS
} from "./chunk-KO3WSCUE.js";
import {
  createObserver
} from "./chunk-ZDLLHKVX.js";
import {
  customElement
} from "./chunk-O7ARSPVE.js";
import {
  LitElement,
  createEvent,
  css,
  html,
  safeClassMap
} from "./chunk-SIEFVWAL.js";

// node_modules/@esri/calcite-components/dist/components/calcite-dropdown-group/customElement.js
var CSS2 = {
  title: "title",
  firstTitle: "first-title",
  separator: "separator"
};
var styles = css`:host{display:block}.container{text-align:start}.title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-dropdown-group-title-text-color, var(--calcite-color-text-1))}.separator{display:block;block-size:1px;background-color:var(--calcite-dropdown-group-border-color, var(--calcite-color-border-3))}:host([scale=s]){font-size:var(--calcite-font-size-relative-sm);line-height:var(--calcite-font-line-height-sm)}:host([scale=s]) .title{padding-block:var(--calcite-spacing-xxs);padding-inline:var(--calcite-spacing-sm)}:host([scale=s]) .first-title{padding-block-start:var(--calcite-spacing-sm)}:host([scale=s]) .separator{margin-block:var(--calcite-spacing-xxs);margin-inline:var(--calcite-spacing-sm)}:host([scale=m]){font-size:var(--calcite-font-size-relative-base);line-height:var(--calcite-font-line-height-base)}:host([scale=m]) .title{padding-block:var(--calcite-spacing-sm);padding-inline:var(--calcite-spacing-md)}:host([scale=m]) .first-title{padding-block-start:var(--calcite-spacing-lg)}:host([scale=m]) .separator{margin-block:var(--calcite-spacing-sm);margin-inline:var(--calcite-spacing-md)}:host([scale=l]){font-size:var(--calcite-font-size-relative-md);line-height:var(--calcite-font-line-height-md)}:host([scale=l]) .title{padding-block:var(--calcite-spacing-sm-plus);padding-inline:var(--calcite-spacing-lg)}:host([scale=l]) .first-title{padding-block-start:var(--calcite-spacing-xl)}:host([scale=l]) .separator{margin-block:var(--calcite-spacing-sm-plus);margin-inline:var(--calcite-spacing-lg)}:host([hidden]){display:none}[hidden]{display:none}`;
var DropdownGroup = class extends LitElement {
  constructor() {
    super();
    this.mutationObserver = createObserver("mutation", () => this.updateItems());
    this.position = -1;
    this.scale = "m";
    this.selectionMode = "single";
    this.calciteInternalDropdownItemChange = createEvent({ cancelable: false });
    this.listen("calciteInternalDropdownItemSelect", this.updateActiveItemOnChange);
  }
  static {
    this.properties = { groupTitle: [3, {}, { reflect: true }], position: [9, {}, { type: Number }], scale: [3, {}, { reflect: true }], selectionMode: [3, {}, { reflect: true }] };
  }
  static {
    this.shadowRootOptions = { mode: "open", delegatesFocus: true };
  }
  static {
    this.styles = styles;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateItems();
    this.mutationObserver?.observe(this.el, { childList: true });
  }
  willUpdate(changes) {
    if (changes.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "single")) {
      this.updateItems();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
  }
  updateActiveItemOnChange(event) {
    this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
    this.requestedDropdownItem = event.detail.requestedDropdownItem;
    this.calciteInternalDropdownItemChange.emit({
      requestedDropdownGroup: this.requestedDropdownGroup,
      requestedDropdownItem: this.requestedDropdownItem
    });
  }
  updateItems() {
    Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((item) => item.selectionMode = this.selectionMode);
  }
  render() {
    const groupTitle = this.groupTitle ? html`<span aria-hidden=true class=${safeClassMap({ [CSS2.title]: true, [CSS2.firstTitle]: this.position === 0 })}>${this.groupTitle}</span>` : null;
    const dropdownSeparator = this.position > 0 ? html`<div class=${safeClassMap(CSS2.separator)} role=separator></div>` : null;
    this.el.ariaLabel = this.groupTitle;
    this.el.role = "group";
    return html`<div class=${safeClassMap({
      [CSS.container]: true
    })}>${dropdownSeparator}${groupTitle}<slot></slot></div>`;
  }
};
customElement("calcite-dropdown-group", DropdownGroup);

export {
  DropdownGroup
};
//# sourceMappingURL=chunk-G6FN6QLV.js.map
