import {
  e as e3
} from "./chunk-7FU7UPOQ.js";
import {
  v,
  y as y2
} from "./chunk-F4H4QHCY.js";
import {
  e as e2
} from "./chunk-TDTJD4MS.js";
import {
  b as b2
} from "./chunk-CEHUBL44.js";
import "./chunk-55DFFBOE.js";
import "./chunk-LHEB3G3E.js";
import "./chunk-JC7PAMG4.js";
import "./chunk-TUNGPGHU.js";
import "./chunk-RTWZV6QR.js";
import {
  v as v2
} from "./chunk-LJCJTNJJ.js";
import "./chunk-4YKWF6M6.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import {
  y3 as y
} from "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import {
  i
} from "./chunk-QWNB5I7T.js";
import "./chunk-ZILR7JK7.js";
import {
  e,
  s
} from "./chunk-QKNXLOOO.js";
import "./chunk-2QNFPVEI.js";
import {
  h
} from "./chunk-DESITEXU.js";
import "./chunk-D7RUZBWM.js";
import "./chunk-OFY6GFSK.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import "./chunk-ERIUCT52.js";
import {
  S as S2,
  _
} from "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import {
  N,
  ae
} from "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import {
  G,
  U
} from "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import {
  l
} from "./chunk-7IP3DNCI.js";
import "./chunk-6BQZ6NJY.js";
import {
  l as l2
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
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import "./chunk-HUOYETLD.js";
import {
  classes
} from "./chunk-6YAOADHH.js";
import {
  LitElement,
  createEvent,
  css,
  html,
  ref,
  safeClassMap,
  safeStyleMap
} from "./chunk-K65EA25C.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/applications/Components/getDefaultUnits.js
function e4(e5) {
  return e3(e5);
}

// node_modules/@arcgis/core/widgets/ScaleBar/ScaleBarViewModel.js
function g(e5) {
  return e5 > 0.5 ? { min: 0.5, max: 1 } : e5 > 0.2 ? { min: 0.2, max: 0.5 } : { min: 0.1, max: 0.2 };
}
function y3(e5, t) {
  switch (t) {
    case "metric":
      return e5 > 1e3 ? { distance: N(e5, "meters", "kilometers"), unit: "kilometer" } : e5 > 1 ? { distance: e5, unit: "meter" } : e5 > 0.01 ? { distance: N(e5, "meters", "centimeters"), unit: "centimeter" } : { distance: N(e5, "meters", "millimeters"), unit: "millimeter" };
    case "imperial":
      return e5 > 1609.344 ? { distance: N(e5, "meters", "miles"), unit: "mile" } : e5 > 0.3048 ? { distance: N(e5, "meters", "feet"), unit: "foot" } : { distance: N(e5, "meters", "inches"), unit: "inch" };
  }
}
function S3(e5) {
  const { isWebMercator: t, wkt: r, wkt2: i2 } = e5;
  return t || ((i2 || r)?.includes("WGS_1984_Web_Mercator") ?? false);
}
function v3({ state: { paddedViewState: e5 }, spatialReference: t, width: r }) {
  return t.isWrappable && e5.worldScreenWidth < r;
}
function j(e5, t) {
  const { x: r, y: i2 } = e5 ? S2(t, true) : t;
  return [r, i2];
}
var M = class extends b {
  constructor(e5) {
    super(e5), this.scaleComputedFrom = i(), this.view = null;
  }
  get state() {
    return this.view?.ready && "2d" === this.view.type ? e2(this.view) && !this.view.inGeographicLayout ? "disabled" : "ready" : "disabled";
  }
  getScaleBarProperties(e5, t) {
    if ("disabled" === this.state || isNaN(e5) || !t || !this.view) return null;
    const r = this._getDistanceInMeters();
    return null == r ? null : this._getScaleBarProps(e5, r, t);
  }
  _getDistanceInMeters() {
    const { state: e5, spatialReference: t } = this.view;
    if (!U(t)) return null;
    const { isGeographic: r } = t, s2 = S3(t);
    if (!r && !s2) {
      return e5.extent.width * (ae(t) ?? 1);
    }
    const [o, n] = this._getScaleMeasuringPoints(), l3 = s2 || r && !y2(t) ? S.WGS84 : t, f = new y({ paths: [[j(s2, o), j(s2, n)]], spatialReference: l3 }), h2 = b2(f, 10);
    let w;
    try {
      [w] = v([h2], "meters");
    } catch {
      return null;
    }
    return w;
  }
  _getScaleMeasuringPoints() {
    const e5 = this.view, { width: t, height: i2, position: s2, spatialReference: o } = e5;
    if (v3(e5)) {
      const e6 = G(o), { valid: t2 } = e6;
      return [new _(t2[0], 0, o), new _(t2[1], 0, o)];
    }
    let n = this.scaleComputedFrom.y - s2[1];
    n > i2 ? n = i2 : n < 0 && (n = 0);
    const a2 = i(0, n), c2 = i(t, n);
    return [e5.toMap(a2), e5.toMap(c2)];
  }
  _getScaleBarProps(e5, t, r) {
    const i2 = this.view, s2 = e5 * t / (v3(i2) ? i2.state.paddedViewState.worldScreenWidth : i2.width);
    if (s2 < 1e-3) return null;
    const o = y3(s2, r), { distance: n, unit: a2 } = o;
    let c2 = n, l3 = 0;
    for (; c2 >= 1; ) c2 /= 10, l3++;
    const { min: m, max: u } = g(c2), p = u / c2 >= c2 / m ? m : u;
    return { length: e5 * (p / c2), value: 10 ** l3 * p, unit: a2 };
  }
};
__decorate([a()], M.prototype, "scaleComputedFrom", void 0), __decorate([a({ readOnly: true })], M.prototype, "state", null), __decorate([a()], M.prototype, "view", void 0), M = __decorate([c("esri.widgets.ScaleBar.ScaleBarViewModel")], M);
var _2 = M;

// node_modules/@arcgis/map-components/dist/components/arcgis-scale-bar/customElement.js
function $(h2 = 0, e5 = 0) {
  return { x: h2, y: e5 };
}
var D = css`.esri-widget__heading{color:var(--calcite-color-text-2);margin:0 0 .5rem;font-weight:var(--calcite-font-weight-semibold)}h1.esri-widget__heading{font-size:var(--calcite-font-size-xl)}h2.esri-widget__heading{font-size:var(--calcite-font-size-md)}h3.esri-widget__heading,h4.esri-widget__heading,h5.esri-widget__heading,h6.esri-widget__heading{font-size:var(--calcite-font-size)}.esri-widget{box-sizing:border-box;color:var(--calcite-color-text-2);background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size);line-height:var(--calcite-font-line-height-relative-tight)}.esri-widget *,.esri-widget :before,.esri-widget :after{box-sizing:inherit}.esri-widget.esri-widget--disabled>*{opacity:.4;pointer-events:none}.esri-widget.esri-widget--compact{--esri-widget-padding-y: 0;--esri-widget-padding-x: 0}.esri-widget__anchor{color:var(--calcite-color-text-2)}.esri-widget__anchor:hover{color:var(--calcite-color-text-3)}.esri-widget__anchor:hover,.esri-widget__anchor:focus{text-decoration:underline}.esri-widget__anchor--disabled{opacity:.4;pointer-events:none}.esri-widget__header{background-color:var(--calcite-color-foreground-1);flex:1 0 100%;justify-content:space-between;align-items:center;width:100%;min-height:48px;padding:12px 0 12px 15px;display:flex}.esri-widget__heading{word-break:break-word}.esri-widget__header .esri-widget__heading{width:calc(100% - 48px);text-align:initial;color:var(--calcite-color-text-1);align-items:center;margin:0;padding:0;display:flex}.esri-widget__header-button{appearance:none;cursor:pointer;color:var(--calcite-color-text-2);background-color:var(--calcite-color-foreground-1);border:none;flex:0 0 48px;justify-content:center;align-self:stretch;align-items:center;width:48px;padding:0;display:flex}.esri-widget__footer{background-color:var(--calcite-color-foreground-1);justify-content:center;align-items:center;width:100%;min-height:48px;display:flex}.esri-widget__footer-pagination{color:var(--calcite-color-text-2);justify-content:space-between;align-items:center;display:flex}.esri-widget__footer-pagination-previous-button,.esri-widget__footer-pagination-next-button{cursor:pointer;background-color:var(--calcite-color-foreground-1);border:0;margin:0 7px;padding:12px 15px;transition:background-color .125s ease-in-out}.esri-widget__footer-pagination-previous-button:hover,.esri-widget__footer-pagination-previous-button:focus,.esri-widget__footer-pagination-next-button:hover,.esri-widget__footer-pagination-next-button:focus{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-1)}.esri-menu{visibility:hidden;z-index:1;background-clip:padding;background-color:var(--calcite-color-foreground-1);background-clip:padding-box;width:100%;max-height:0;margin:2px 0 0;padding:0;font-size:var(--calcite-font-size);line-height:var(--calcite-spacing-xl);position:absolute;top:100%;left:0;overflow:hidden;box-shadow:0 1px 2px #0000004d}.esri-menu .esri-menu__header{color:var(--calcite-color-text-inverse);background-color:var(--calcite-color-inverse);padding:6px 12px}.esri-menu__list{margin:0;padding:0;list-style:none}.esri-menu__list-item{cursor:pointer;border-top:1px solid #adadad4d;border-left:3px solid #0000;padding:.8em 1em}.esri-menu__list-item [class^=esri-icon-],.esri-menu__list-item [class*=" esri-icon-"]{padding-right:2.8px}.esri-menu__list-item:first-child{border-top:none}.esri-menu__list-item--focus,.esri-menu__list-item:hover,.esri-menu__list-item:focus{background-color:var(--calcite-color-foreground-1)}.esri-menu__list-item:active{background-color:var(--calcite-color-foreground-current)}.esri-menu__list-item--active,.esri-menu__list-item--active:hover,.esri-menu__list-item--active:focus{background-color:var(--calcite-color-foreground-1);border-left-color:var(--calcite-color-brand)}.esri-widget__table{border-collapse:collapse;color:var(--calcite-color-text-1);border:none;width:100%;line-height:var(--calcite-font-line-height-relative-tight)}.esri-widget__table tr:nth-child(odd){background-color:var(--calcite-color-transparent)}.esri-widget__table tr:nth-child(2n){background-color:var(--calcite-color-transparent-press)}.esri-widget__table tr a{color:var(--calcite-color-text-2)}.esri-widget__table tr a:hover,.esri-widget__table tr a:focus{color:var(--calcite-color-text-1)}.esri-widget__table tr td,.esri-widget__table tr th{vertical-align:top;word-break:break-word;padding:.5em .7em;font-size:var(--calcite-font-size-sm);font-weight:var(--calcite-font-weight-regular)}.esri-widget__table tr th{text-align:left;border-right:3px solid #0000000d;width:50%}.esri-widget__table tr td{width:50%}.esri-input{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-1);border:1px solid #959595;font-size:var(--calcite-font-size)}.esri-input::-ms-clear{display:none}.esri-input::placeholder{opacity:1;color:var(--calcite-color-text-2)}.esri-input:placeholder-shown{text-overflow:ellipsis}.esri-input[type=text],.esri-input[type=password],.esri-input[type=number]{height:32px;padding:0 .5em}calcite-combobox.esri-input{border:none}.esri-widget__content--empty{text-align:center;color:var(--calcite-color-border-input);flex-flow:column wrap;align-items:center;padding:18px 22px;display:flex}.esri-widget__content--empty h1.esri-widget__heading,.esri-widget__content--empty h2.esri-widget__heading,.esri-widget__content--empty h3.esri-widget__heading,.esri-widget__content--empty h4.esri-widget__heading,.esri-widget__content--empty h5.esri-widget__heading{font-weight:var(--calcite-font-weight-regular)}.esri-widget__content-illustration--empty{width:128px;padding:1rem 0}.esri-widget__content-icon--empty{width:32px;padding:.5rem 0}.esri-select{appearance:none;cursor:pointer;color:var(--calcite-color-text-2);background:var(--calcite-color-foreground-1) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-8 -8 32 32' width='32' height='32'%3E%3Cpath d='M8 11.207l-4-4V5.793l4 4 4-4v1.414z' fill='%23adadad' fillrule='nonzero'/%3E%3C/svg%3E") 100% no-repeat;border:1px solid #959595;border-radius:0;width:100%;height:32px;margin:0;padding:0 .5em;font-family:inherit;font-size:.85em;display:block}.esri-select[disabled]{cursor:auto}.esri-select::-ms-expand{display:none}.esri-disabled a,.esri-disabled [role=menu],.esri-disabled [role=checkbox],.esri-disabled [class^=esri-icon-],.esri-disabled [class*=" esri-icon-"]{color:var(--calcite-color-text-3)}.keynav-mode .esri-widget:focus,.keynav-mode .esri-widget :focus{z-index:1;outline-offset:2px;outline:2px solid #adadad}.esri-widget__loader-animation{border:.15em solid #adadad4d;border-top-color:var(--calcite-color-border-input);border-radius:100%;width:1em;height:1em;font-size:var(--calcite-font-size-md);animation:1.25s linear infinite esri-rotate;display:block;transform:translateZ(0)}:dir(rtl) .esri-widget__table th{text-align:right;border-left:3px solid #0000000d;border-right:none}:dir(rtl) .esri-select{background-position:0}:dir(rtl) .esri-menu__list-item{border-left:none;border-right:3px solid #0000}:dir(rtl) .esri-menu__list-item [class^=esri-icon-],:dir(rtl) .esri-menu__list-item [class*=" esri-icon-"]{padding-left:2px;padding-right:0}:dir(rtl) .esri-menu__list-item--active{border-right-color:var(--calcite-color-brand)}.esri-icon-font-fallback-text{clip:rect(0 0 0 0);width:1px;height:1px;position:absolute;overflow:hidden}.esri-rotating{animation:1.25s linear infinite esri-rotate;transform:translateZ(0)}.esri-clearfix:before,.esri-clearfix:after{content:" ";display:table}.esri-clearfix:after{clear:both}.esri-interactive{cursor:pointer}.esri-hidden{display:none!important}.esri-invisible{visibility:hidden!important}.esri-offscreen{position:absolute;top:-999em;left:-999em}.esri-match-height{flex-direction:column;flex:auto;display:flex;overflow:hidden}.root{box-shadow:none!important;background:0 0}.root.esri-widget{box-shadow:none;background:0 0}.bar-container{align-items:flex-end;font-size:var(--calcite-font-size-sm);transition:width .25s ease-in-out;display:flex;position:relative}.bar-container-ruler{flex-direction:column}.ruler{--color-ruler-background: var(--calcite-color-inverse);--color-ruler-foreground: var(--calcite-color-foreground-1);height:var(--calcite-spacing-xs);box-shadow:0 0 0 1px var(--calcite-color-text-1),0 1px 2px var(--calcite-color-foreground-1)}.ruler:before,.ruler:after{content:"";display:block;height:50%;background-image:linear-gradient(to right,var(--color-ruler-foreground) 0%,var(--color-ruler-foreground) 25%,var(--color-ruler-background) 25%,var(--color-ruler-background) 50%,var(--color-ruler-foreground) 50%,var(--color-ruler-foreground) 75%,var(--color-ruler-background) 75%,var(--color-ruler-background) 100%)}.ruler:after{transform:scaleX(-1)}.bar-container-line:last-child{align-items:flex-start}.line{--line-thickness: 2px;--tic-height: 1.5em;--border-style: var(--line-thickness) solid var(--calcite-color-text-1);background-color:color-mix(in srgb,var(--calcite-color-foreground-1) 50%,transparent);height:var(--tic-height);position:relative;left:0}.line-top{border-bottom:var(--border-style)}.line-bottom{border-top:var(--border-style);top:calc(-1 * var(--line-thickness))}.line-top:before,.line-top:after,.line-bottom:before,.line-bottom:after{content:"";background-color:color-mix(in srgb,var(--calcite-color-foreground-1) 50%,transparent);border-right:var(--border-style);width:1px;height:var(--tic-height);display:block;position:absolute}.line-top:before{bottom:calc(-1 * var(--line-thickness));left:0}.line-top:after{bottom:calc(-1 * var(--line-thickness));right:0}.line-bottom:before{top:calc(-1 * var(--line-thickness));left:0}.line-bottom:after{height:var(--tic-height);top:calc(-1 * var(--line-thickness));right:0}.label-container-line{position:absolute;left:0}.label-container-ruler{justify-content:space-between;width:100%;display:flex;position:relative}.label-container-ruler .label{text-shadow:1px 0 var(--calcite-color-foreground-1),0 1px var(--calcite-color-foreground-1),1px 1px var(--calcite-color-foreground-1),-1px 0 var(--calcite-color-foreground-1),0 -1px var(--calcite-color-foreground-1),-1px -1px var(--calcite-color-foreground-1);padding:6px 0 0}.label-container-top{bottom:0}.label-container-bottom{top:1px}.label{white-space:nowrap;color:var(--calcite-color-text-1);font-size:inherit;padding:0 7px;font-weight:var(--calcite-font-weight-semibold)}:dir(rtl) .ruler{margin:0 .5ch 0 2ch}:dir(rtl) .label-container-line{left:auto;right:0}`;
var R = v2(_2);
var B = class extends LitElement {
  constructor() {
    super(...arguments), this._defaultUnit = "metric", this.messages = s(), this.viewModel = R(this), this.view = this.viewModel.view, this.autoDestroyDisabled = false, this.barStyle = "line", this.icon = "actual-size", this.arcgisReady = createEvent();
  }
  static {
    this.properties = { view: 0, autoDestroyDisabled: 5, barStyle: 1, icon: 1, label: 1, messageOverrides: 0, referenceElement: 1, unit: 1 };
  }
  static {
    this.styles = D;
  }
  get unit() {
    return this._unit ?? this._defaultUnit;
  }
  set unit(e5) {
    this._unit = e5;
  }
  async destroy() {
    await this.manager.destroy();
  }
  updated() {
    this._handleRootCreateOrUpdate();
  }
  loaded() {
    this.manager.onLifecycle(() => l2(() => ({
      defaultUnit: this.viewModel.view ? e4(this.viewModel.view) : void 0,
      stationary: this.viewModel.view?.stationary,
      center: this.viewModel.view?.center,
      scale: this.viewModel.view?.scale,
      zoom: this.viewModel.view?.zoom
    }), ({ defaultUnit: e5, stationary: i2 }) => {
      this._defaultUnit = e5 ?? "metric", i2 && this.requestUpdate();
    }, { initial: true }));
  }
  _handleContainerRef(e5) {
    e5 !== void 0 && this._handleRootCreateOrUpdate();
  }
  _handleRootCreateOrUpdate() {
    const e5 = this.el;
    if (!this.viewModel && !e5.childElem)
      return;
    const i2 = e5.childElem?.getBoundingClientRect();
    if (!i2)
      return;
    const { scaleComputedFrom: r } = this.viewModel, n = i2.left + window.pageXOffset, t = i2.top + window.pageYOffset, o = $(n, t);
    (o.x !== r.x || o.y !== r.y) && (this.viewModel.scaleComputedFrom = o);
  }
  _formatDistance(e5, i2) {
    return h(e5, {
      style: "unit",
      unit: i2,
      unitDisplay: "short"
    });
  }
  render() {
    const e5 = this.viewModel.state === "disabled", i2 = {
      [e.disabled]: e5
    };
    let r, n;
    if (!e5) {
      const { unit: t, barStyle: o } = this, d = t === "imperial" || t === "dual", u = t === "metric" || t === "dual", g2 = 100, p = t === "dual" ? "line" : o;
      if (d) {
        const a2 = this.viewModel.getScaleBarProperties(g2, "imperial");
        a2 && (n = p === "ruler" ? this._renderRuler(a2) : this._renderLine(a2, "bottom"));
      }
      if (u) {
        const a2 = this.viewModel.getScaleBarProperties(g2, "metric");
        a2 && (r = p === "ruler" ? this._renderRuler(a2) : this._renderLine(a2, "top"));
      }
    }
    return html`<div class=${safeClassMap(classes("root", e.widget, i2))} ${ref(this._handleContainerRef)}>${r}${n}</div>`;
  }
  _renderRuler(e5) {
    const { length: i2, unit: r, value: n } = e5, t = Math.round(i2), o = this._formatDistance(n, r);
    return html`<div class=${safeClassMap(classes("bar-container", "bar-container-ruler"))}><div class="ruler" style=${safeStyleMap({ width: `${t}px` })}></div><div class=${safeClassMap(classes("label-container", "label-container-ruler"))}><div class="label">0</div><div class="label">${o}</div></div></div>`;
  }
  _renderLine(e5, i2) {
    const { length: r, unit: n, value: t } = e5, o = Math.round(r), d = this._formatDistance(t, n), g2 = html`<div class=${safeClassMap(classes("label-container", "label-container-line", {
      "label-container-top": i2 === "top",
      "label-container-bottom": i2 === "bottom"
    }))}><div class="label">${d}</div></div>`, a2 = html`<div class=${safeClassMap(classes("line", {
      "line-top": i2 === "top",
      "line-bottom": i2 === "bottom"
    }))} style=${safeStyleMap({ width: `${o}px` })}></div>`;
    return html`<div class=${safeClassMap(classes("bar-container", "bar-container-line"))}>${[a2, g2]}</div>`;
  }
};
l("arcgis-scale-bar", B);
export {
  B as ArcgisScaleBar
};
//# sourceMappingURL=@arcgis_map-components_components_arcgis-scale-bar.js.map
