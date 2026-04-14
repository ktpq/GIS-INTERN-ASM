import {
  e as e3
} from "./chunk-LAX4TFUD.js";
import {
  U
} from "./chunk-ES4OWHGF.js";
import {
  b as b3,
  k
} from "./chunk-LNYVQOBZ.js";
import {
  i as i2
} from "./chunk-TZ37OLCQ.js";
import {
  D,
  P
} from "./chunk-DLNYS76H.js";
import {
  n
} from "./chunk-47CFN4JI.js";
import {
  w
} from "./chunk-NMDBB7YG.js";
import {
  R
} from "./chunk-IRGX4DBZ.js";
import {
  f
} from "./chunk-AHEHRQEH.js";
import {
  a as a2,
  l
} from "./chunk-L5CCICKP.js";
import {
  y3 as y
} from "./chunk-N7K4YSHO.js";
import {
  g
} from "./chunk-FFRDPIUM.js";
import {
  d2 as d,
  h2 as h,
  h3 as h2,
  l as l3,
  p,
  p2
} from "./chunk-LKZBFHT4.js";
import {
  _,
  b as b2,
  l as l2,
  o,
  u,
  v
} from "./chunk-5GPMO33J.js";
import {
  c as c2,
  e as e2,
  i,
  o as o2,
  v as v2
} from "./chunk-URLT4X25.js";
import {
  ae,
  te
} from "./chunk-JC2AZ2NN.js";
import {
  g as g2
} from "./chunk-6XF5AJ25.js";
import {
  f as f2
} from "./chunk-UXWT3ISO.js";
import {
  s
} from "./chunk-253Z6EVN.js";
import {
  b
} from "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import {
  e
} from "./chunk-PQFEWUZC.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/geometry/support/curves/interpolateCurve.js
function n2(n4, p3, u2) {
  if (e2(p3)) return [n4[0] + u2 * (p3[0] - n4[0]), n4[1] + u2 * (p3[1] - n4[1])];
  if (i(p3)) return p(n4, p3, u2);
  if (c2(p3)) {
    const r2 = l3(n4, p3);
    return h(r2, u2);
  }
  if (o2(p3)) {
    const r2 = h2(n4, p3);
    return h(r2, u2);
  }
  const j = p2(n4, p3);
  return d(j, u2);
}

// node_modules/@arcgis/core/libs/maquette/h.js
var e4 = (e5) => ({ vnodeSelector: "", properties: void 0, children: void 0, text: e5.toString(), domNode: null });
var r = (t2, o3, n4) => {
  for (let l5 = 0, i3 = o3.length; l5 < i3; l5++) {
    let i4 = o3[l5];
    Array.isArray(i4) ? r(t2, i4, n4) : null != i4 && false !== i4 && ("string" == typeof i4 && (i4 = e4(i4)), n4.push(i4));
  }
};
function t(e5, t2, o3) {
  if (Array.isArray(t2)) o3 = t2, t2 = void 0;
  else if (t2 && ("string" == typeof t2 || t2.hasOwnProperty("vnodeSelector")) || o3 && ("string" == typeof o3 || o3.hasOwnProperty("vnodeSelector"))) throw new Error("h called with invalid arguments");
  let n4, l5;
  return o3 && 1 === o3.length && "string" == typeof o3[0] ? n4 = o3[0] : o3 && (l5 = [], r(e5, o3, l5), 0 === l5.length && (l5 = void 0)), { vnodeSelector: e5, properties: t2, children: l5, text: "" === n4 ? void 0 : n4, domNode: null };
}

// node_modules/@arcgis/core/views/overlay/TextOverlayItem.js
var l4 = { bottom: "esri-text-overlay-item-anchor-bottom", "bottom-right": "esri-text-overlay-item-anchor-bottom-right", "bottom-left": "esri-text-overlay-item-anchor-bottom-left", top: "esri-text-overlay-item-anchor-top", "top-right": "esri-text-overlay-item-anchor-top-right", "top-left": "esri-text-overlay-item-anchor-top-left", center: "esri-text-overlay-item-anchor-center", right: "esri-text-overlay-item-anchor-right", left: "esri-text-overlay-item-anchor-left" };
var n3 = class extends b {
  get position() {
    return [this.x, this.y];
  }
  set position(t2) {
    this._set("x", t2[0]), this._set("y", t2[1]);
  }
  get _textShadowColor() {
    const { textColor: t2, backgroundColor: e5 } = this, o3 = e5.clone();
    return o3.a *= t2.a, o3;
  }
  get _textShadow() {
    const t2 = this._textShadowColor.toCss(true);
    return `0 0 ${this._textShadowSize}px ${t2}`;
  }
  get padding() {
    return 0.5 * this.fontSize;
  }
  get borderRadius() {
    return this.padding;
  }
  set borderRadius(t2) {
    this._overrideIfSome("borderRadius", t2);
  }
  constructor(t2) {
    super(t2), this.x = 0, this.y = 0, this.text = "-", this.fontSize = 14, this.anchor = "center", this.visible = true, this.isDecoration = true, this.backgroundColor = new g2([0, 0, 0, 0.6]), this.textColor = new g2([255, 255, 255]), this._textShadowSize = 1;
  }
  render() {
    return t("div", { classes: this._cssClasses(), styles: { left: Math.floor(this.x) + "px", top: Math.floor(this.y) + "px", visibility: this.visible ? "visible" : "hidden", fontSize: this.fontSize + "px", lineHeight: this.fontSize + "px", backgroundColor: this.backgroundColor.toCss(true), color: this.textColor.toCss(true), padding: this.padding + "px", borderRadius: this.borderRadius + "px", textShadow: this._textShadow } }, [this.text]);
  }
  renderCanvas(t2) {
    if (!this.visible) return;
    const e5 = t2.font.replace(/^(.*?)px/, "");
    t2.font = `${this.fontSize}px ${e5}`;
    const { padding: o3, borderRadius: i3 } = this, r2 = t2.measureText(this.text).width, s2 = "" !== this.text ? this.fontSize : 0, l5 = h3[this.anchor];
    t2.textAlign = "center", t2.textBaseline = "middle";
    const n4 = r2 + 2 * o3, a4 = s2 + 2 * o3, x = this.x + l5.x * n4, d2 = this.y + l5.y * a4;
    this._roundedRect(t2, x, d2, n4, a4, i3), t2.fillStyle = this.backgroundColor.toCss(true), t2.fill();
    const p3 = this.x + (l5.x + 0.5) * n4, c3 = this.y + (l5.y + 0.5) * a4;
    this._renderTextShadow(t2, this.text, p3, c3), t2.fillStyle = this.textColor.toCss(true), t2.fillText(this.text, p3, c3);
  }
  _renderTextShadow(t2, e5, o3, i3) {
    t2.lineJoin = "miter", t2.fillStyle = `rgba(${this._textShadowColor.r}, ${this._textShadowColor.g}, ${this._textShadowColor.b}, ${1 / a3.length})`;
    const r2 = this._textShadowSize;
    for (const [s2, l5] of a3) t2.fillText(e5, o3 + r2 * s2, i3 + r2 * l5);
  }
  _roundedRect(t2, e5, o3, i3, r2, s2) {
    s2 = Math.min(s2, r2 / 2, i3 / 2), t2.beginPath(), t2.moveTo(e5, o3 + s2), t2.arcTo(e5, o3, e5 + s2, o3, s2), t2.lineTo(e5 + i3 - s2, o3), t2.arcTo(e5 + i3, o3, e5 + i3, o3 + s2, s2), t2.lineTo(e5 + i3, o3 + r2 - s2), t2.arcTo(e5 + i3, o3 + r2, e5 + i3 - s2, o3 + r2, s2), t2.lineTo(e5 + s2, o3 + r2), t2.arcTo(e5, o3 + r2, e5, o3 + r2 - s2, s2), t2.closePath();
  }
  _cssClasses() {
    const t2 = { "esri-text-overlay-item": true };
    let e5;
    for (e5 in l4) t2[l4[e5]] = this.anchor === e5;
    return t2;
  }
};
__decorate([a()], n3.prototype, "x", void 0), __decorate([a()], n3.prototype, "y", void 0), __decorate([a()], n3.prototype, "position", null), __decorate([a()], n3.prototype, "text", void 0), __decorate([a()], n3.prototype, "fontSize", void 0), __decorate([a()], n3.prototype, "anchor", void 0), __decorate([a()], n3.prototype, "visible", void 0), __decorate([a()], n3.prototype, "isDecoration", void 0), __decorate([a()], n3.prototype, "backgroundColor", void 0), __decorate([a()], n3.prototype, "textColor", void 0), __decorate([a()], n3.prototype, "_textShadowSize", void 0), __decorate([a()], n3.prototype, "_textShadowColor", null), __decorate([a()], n3.prototype, "_textShadow", null), __decorate([a()], n3.prototype, "padding", null), __decorate([a()], n3.prototype, "borderRadius", null), n3 = __decorate([c("esri.views.overlay.TextOverlayItem")], n3);
var h3 = { bottom: { x: -0.5, y: -1, textAlign: "center", textBaseline: "bottom" }, "bottom-left": { x: 0, y: -1, textAlign: "left", textBaseline: "bottom" }, "bottom-right": { x: -1, y: -1, textAlign: "right", textBaseline: "bottom" }, center: { x: -0.5, y: -0.5, textAlign: "center", textBaseline: "middle" }, left: { x: 0, y: -0.5, textAlign: "left", textBaseline: "middle" }, right: { x: -1, y: -0.5, textAlign: "right", textBaseline: "middle" }, top: { x: -0.5, y: 0, textAlign: "center", textBaseline: "top" }, "top-left": { x: 0, y: 0, textAlign: "left", textBaseline: "top" }, "top-right": { x: -1, y: 0, textAlign: "right", textBaseline: "top" } };
var a3 = [];
{
  const t2 = 16;
  for (let e5 = 0; e5 < 360; e5 += 360 / t2) a3.push([Math.cos(Math.PI * e5 / 180), Math.sin(Math.PI * e5 / 180)]);
}

// node_modules/@arcgis/core/views/interactive/SegmentLabels.js
var R2 = 3025;
var A = { default: 15, far: 25 };
var V = class extends b {
  constructor(e5) {
    super(e5), this.context = null, this.stagedVertex = null, this.visible = true, this.edgeDistance = "default", this._messageUnitsTask = null, this._labelInfos = [], this._nextLabelIndex = 0;
  }
  initialize() {
    this.addHandles([l(() => [null != this.context && this.getCameraOrExtent(this.context), this.visible, this._edgeDistancePixels, this.stagedVertex, this._messagesUnits], () => this._update()), a2(() => this.context?.editGeometryOperations, ["vertex-add", "vertex-remove"], () => this._update()), a2(() => this.context?.editGeometryOperations, "vertex-update", (e5) => this._update(e5.vertices)), l(() => this._colors, (e5) => this._updateStyle(e5)), R(() => this._refreshMessages()), e(() => this._messageUnitsTask?.abort())]), this._refreshMessages();
  }
  destroy() {
    for (this._nextLabelIndex = 0; this._labelInfos.length; ) this._destroyLabel(this._labelInfos.pop());
  }
  get updating() {
    return null == this._messagesUnits;
  }
  get test() {
  }
  get _messagesUnits() {
    return this._messageUnitsTask?.value;
  }
  get _edgeDistancePixels() {
    return A[this.edgeDistance];
  }
  get _colors() {
    const e5 = this.context?.view.effectiveTheme.textColor ?? g2.fromArray([255, 255, 255]);
    return { textColor: e5, backgroundColor: D(P(e5, 160), 0.6) };
  }
  _update(e5) {
    if (this.destroyed) return;
    this._nextLabelIndex = 0;
    const { context: t2, stagedVertex: s2 } = this;
    if (!t2) return this._destroyUnusedLabels();
    const o3 = t2.editGeometryOperations.data, { parts: r2, geometry: i3, coordinateHelper: n4 } = o3;
    if (!i3) return this._destroyUnusedLabels();
    const a4 = r2.length;
    for (let l5 = 0; l5 < a4; ++l5) {
      const r3 = this.getRing(i3, o3, s2, n4, l5), c3 = r3.map((e6) => i2(e6) ? e6 : n4.arrayToXYZ(v2(e6)));
      if (r3.length < 2 || !G(r3, t2.view, t2.elevationInfo, n4.spatialReference)) continue;
      const h4 = 1 === a4 && !g(c3);
      let m = F, p3 = X;
      this.toScreenPointArray(t2, c3[0], m);
      for (let s3 = 1; s3 < r3.length; ++s3) {
        const o4 = c3[s3 - 1], i4 = c3[s3], n5 = r3[s3];
        this.toScreenPointArray(t2, i4, p3);
        const a5 = s3 === c3.length - 1, d2 = !(!e5?.length || e5.some(({ index: e6, part: t3 }) => t3.index === l5 && (e6 === s3 - 1 || e6 === s3 || a5 && 0 === e6)));
        this._addLabel(t2, o4, m, i4, i2(n5) ? null : n5, p3, h4, d2), [m, p3] = [p3, m];
      }
    }
    this._destroyUnusedLabels();
  }
  _updateStyle({ textColor: e5, backgroundColor: t2 }) {
    const s2 = this._nextLabelIndex, o3 = this._labelInfos;
    for (let r2 = 0; r2 < s2; ++r2) {
      const { label: s3 } = o3[r2];
      s3.textColor = e5, s3.backgroundColor = t2;
    }
  }
  _addLabel(e5, t2, s2, o3, r2, i3, n4, a4 = false) {
    const { label: l5, wasReused: h4 } = this._getOrCreateLabel(e5);
    if (!this.visible || b2(s2, i3) < R2) return void (l5.visible = false);
    const { spatialReference: m, coordinateHelper: p3 } = e5.editGeometryOperations.data;
    if (!a4 || !h4) {
      const s3 = !r2 || e2(r2) ? e5.automaticLengthMeasurementUtils.autoDistance2D(t2, o3, m) : e5.automaticLengthMeasurementUtils.autoLength2D(new y({ spatialReference: m, curvePaths: [[[t2[0], t2[1]], r2]] })), i4 = this._messagesUnits, n5 = e3(e5.view);
      l5.text = null != i4 && null != s3 ? U(i4, s3, n5) : "";
    }
    l5.visible = true;
    const d2 = i3[0] - s2[0], u2 = i3[1] - s2[1];
    if (n4 ? o(q, -u2, d2) : o(q, u2, -d2), v(q, q), l2(q, q, this._edgeDistancePixels), r2 && !e2(r2)) {
      const s3 = p3.arrayToXYZ(n2(t2, r2, 0.5)), o4 = this.toScreenPointArray(e5, s3);
      u(z, o4, q);
    } else _(z, s2, i3, 0.5), u(z, z, q);
    l5.position = [z[0], z[1]], Math.abs(q[0]) > Math.abs(q[1]) ? l5.anchor = q[0] > 0 ? "left" : "right" : l5.anchor = -q[1] < 0 ? "top" : "bottom";
  }
  _getOrCreateLabel(e5) {
    const t2 = this._labelInfos.length > this._nextLabelIndex, { textColor: s2, backgroundColor: o3 } = this._colors;
    if (t2) {
      const e6 = this._labelInfos[this._nextLabelIndex++], { label: t3 } = e6;
      return t3.textColor = s2, t3.backgroundColor = o3, e6.wasReused = true, e6;
    }
    const r2 = new n3({ anchor: "center", fontSize: 8, textColor: s2, backgroundColor: o3 });
    e5.view.overlay?.items.add(r2);
    const i3 = { label: r2, wasReused: false };
    return this._labelInfos.push(i3), this._nextLabelIndex = this._labelInfos.length, i3;
  }
  _destroyUnusedLabels() {
    for (; this._labelInfos.length > this._nextLabelIndex; ) this._destroyLabel(this._labelInfos.pop());
  }
  _destroyLabel({ label: e5 }) {
    this.context?.view.overlay?.items.remove(e5), e5.destroy();
  }
  _refreshMessages() {
    this._messageUnitsTask?.abort(), this._messageUnitsTask = w(() => f("esri/core/t9n/Units"));
  }
};
function G(e5, t2, s2, o3) {
  if ("2d" === t2.type) return true;
  const r2 = ae(o3) ?? 1, i3 = te(o3), n4 = (e6) => b3(t2, e6, o3, s2, k) ?? 0;
  for (let a4 = 1; a4 < e5.length; ++a4) {
    const t3 = e5[a4 - 1], s3 = e5[a4];
    if (!i2(t3) || !i2(s3)) return false;
    const o4 = (s3[0] - t3[0]) * r2, l5 = (s3[1] - t3[1]) * r2, c3 = (n4(s3) - n4(t3)) * i3;
    if (Math.abs(c3) / Math.sqrt(o4 * o4 + l5 * l5) > H) return false;
  }
  return true;
}
__decorate([a()], V.prototype, "context", void 0), __decorate([a()], V.prototype, "stagedVertex", void 0), __decorate([a()], V.prototype, "visible", void 0), __decorate([a()], V.prototype, "edgeDistance", void 0), __decorate([a()], V.prototype, "updating", null), __decorate([a()], V.prototype, "_messageUnitsTask", void 0), __decorate([a()], V.prototype, "_messagesUnits", null), __decorate([a()], V.prototype, "_edgeDistancePixels", null), __decorate([a()], V.prototype, "_colors", null), V = __decorate([c("esri.views.interactive.SegmentLabels")], V);
var H = s(5);
var q = n();
var z = n();
var F = f2();
var X = f2();

export {
  V
};
//# sourceMappingURL=chunk-LKKX2GEH.js.map
