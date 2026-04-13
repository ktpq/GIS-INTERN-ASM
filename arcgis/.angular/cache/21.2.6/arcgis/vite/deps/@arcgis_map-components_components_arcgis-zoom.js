import "./chunk-LAKDQPXY.js";
import "./chunk-O6MVQQES.js";
import "./chunk-5KUTPSHY.js";
import "./chunk-ENBIPRTI.js";
import "./chunk-HTNA2KGQ.js";
import "./chunk-A2KJGDKC.js";
import "./chunk-5Y6HRERA.js";
import "./chunk-NMDFRCEF.js";
import "./chunk-5CK3KL3F.js";
import "./chunk-7J74KGTX.js";
import "./chunk-EARHNOSL.js";
import "./chunk-P6KY6CNY.js";
import "./chunk-DHP63IFT.js";
import {
  e,
  s
} from "./chunk-QKNXLOOO.js";
import {
  a2 as a,
  l
} from "./chunk-7IP3DNCI.js";
import "./chunk-6BQZ6NJY.js";
import {
  f
} from "./chunk-55ZAYF5P.js";
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import {
  y
} from "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import {
  usePropertyChange
} from "./chunk-HUOYETLD.js";
import "./chunk-6YAOADHH.js";
import {
  LitElement,
  createEvent,
  css,
  html,
  nothing2 as nothing,
  safeClassMap
} from "./chunk-K65EA25C.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/map-components/dist/components/arcgis-zoom/customElement.js
function n(t) {
  if (!t)
    return false;
  if (t.type === "3d")
    return t.ready;
  if (!t?.ready)
    return false;
  const o = m(t), a2 = t.constraints?.effectiveMaxScale;
  return a2 === 0 || o > a2;
}
function l2(t) {
  if (!t)
    return false;
  if (t.type === "3d")
    return t.ready;
  if (!t?.ready)
    return false;
  const o = m(t), a2 = t.constraints?.effectiveMinScale;
  return a2 === 0 || o < a2;
}
function m(t) {
  const e2 = t?.animation?.target;
  return (e2 && "then" in e2 ? void 0 : e2?.scale) ?? t?.scale ?? 0;
}
var w = css`.arcgis-button{--calcite-icon-color: var(--calcite-color-text-3);--calcite-button-background-color: var(--calcite-color-foreground-1);color:var(--calcite-color-text-3);line-height:var(--calcite-font-line-height-relative-tight);display:flex;flex-flow:column;cursor:pointer;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size);:hover{--calcite-icon-color: var(--calcite-color-text-1);--calcite-button-background-color: var(--calcite-color-transparent-hover)}}:host{display:flex;max-width:fit-content}.zoom-out{border-block-start:solid 1px var(--calcite-color-border-1)}.horizontal{flex-flow:row-reverse nowrap}.horizontal .zoom-out{border-block-start:none;border-inline-end:solid 1px var(--calcite-color-border-1)}`;
var $ = class extends LitElement {
  constructor() {
    super(...arguments), this.messages = s({}), this._state = "disabled", this.view = a(this), this.autoDestroyDisabled = false, this.icon = "magnifying-glass-plus", this.layout = "vertical", this.visualScale = "m", this.arcgisActionZoom = createEvent(), this.arcgisPropertyChange = usePropertyChange()("state"), this.arcgisReady = createEvent();
  }
  static {
    this.properties = { _state: 16, view: 0, autoDestroyDisabled: 5, icon: 1, label: 1, layout: 3, messageOverrides: 0, referenceElement: 1, visualScale: 1, state: 32 };
  }
  static {
    this.styles = w;
  }
  get state() {
    return this._state;
  }
  async destroy() {
    await this.manager.destroy();
  }
  async zoomIn() {
    await this.zoomBy(1);
  }
  async zoomOut() {
    await this.zoomBy(-1);
  }
  loaded() {
    this.manager.onLifecycle(() => [
      f(() => this.view?.ready ? "ready" : "disabled", (e2) => {
        this._state = e2;
      }, { sync: true, initial: true })
    ]);
  }
  async zoomBy(e2) {
    const { view: o } = this, a2 = e2 === 1;
    if (!(!(a2 ? n(o) : l2(o)) || !o))
      if (this.arcgisActionZoom.emit({ action: a2 ? "zoomIn" : "zoomOut" }), o.type === "2d") {
        const s2 = o.mapViewNavigation;
        a2 ? await s2.zoomIn() : await s2.zoomOut();
      } else
        await y(o.goTo({ zoom: o.zoom + e2 }));
  }
  render() {
    const e2 = n(this.view), o = l2(this.view), { zoomIn: a2, zoomOut: i } = this.messages;
    return html`<div class=${safeClassMap({
      [e.arcgisButton]: true,
      horizontal: this.layout === "horizontal"
    })}><calcite-button class="zoom-in" .disabled=${!e2} icon-start=plus kind=neutral .label=${a2} @click=${this.zoomIn} .scale=${this.visualScale} title=${a2 ?? nothing}></calcite-button><calcite-button class="zoom-out" .disabled=${!o} icon-start=minus kind=neutral .label=${i} @click=${this.zoomOut} .scale=${this.visualScale} title=${i ?? nothing}></calcite-button></div>`;
  }
};
l("arcgis-zoom", $);
export {
  $ as ArcgisZoom
};
//# sourceMappingURL=@arcgis_map-components_components_arcgis-zoom.js.map
