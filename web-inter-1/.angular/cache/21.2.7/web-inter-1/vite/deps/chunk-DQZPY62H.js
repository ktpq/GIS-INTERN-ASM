import {
  n as n2
} from "./chunk-SCV6BBEB.js";
import {
  e as e3
} from "./chunk-FT6EGYS5.js";
import {
  U
} from "./chunk-LFMU2JMK.js";
import {
  b as b3,
  k
} from "./chunk-YP7OFZOK.js";
import {
  i as i2
} from "./chunk-WQBN2KKE.js";
import {
  D,
  P
} from "./chunk-DJSZRQUX.js";
import {
  n
} from "./chunk-47CFN4JI.js";
import {
  R
} from "./chunk-DA25W2D5.js";
import {
  f
} from "./chunk-SQXGMFK2.js";
import {
  w
} from "./chunk-AP2NAWWU.js";
import {
  y3 as y
} from "./chunk-GTWJPBIK.js";
import {
  g
} from "./chunk-XYIHFHUH.js";
import {
  d2 as d,
  h2 as h,
  h3 as h2,
  l as l3,
  p,
  p2
} from "./chunk-MC2OVSQ5.js";
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
} from "./chunk-WSE2ZKFY.js";
import {
  g as g2
} from "./chunk-SWZYRYDU.js";
import {
  f as f2
} from "./chunk-UXWT3ISO.js";
import {
  s
} from "./chunk-253Z6EVN.js";
import {
  ae,
  te
} from "./chunk-DMD5CGVA.js";
import {
  a,
  l
} from "./chunk-6CYBR6FP.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a2,
  c
} from "./chunk-7ELXYOAW.js";
import {
  e
} from "./chunk-2KP24SU5.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/geometry/support/curves/interpolateCurve.js
function n3(n4, p3, u2) {
  if (e2(p3)) return [n4[0] + u2 * (p3[0] - n4[0]), n4[1] + u2 * (p3[1] - n4[1])];
  if (i(p3)) return p(n4, p3, u2);
  if (c2(p3)) {
    const r = l3(n4, p3);
    return h(r, u2);
  }
  if (o2(p3)) {
    const r = h2(n4, p3);
    return h(r, u2);
  }
  const j = p2(n4, p3);
  return d(j, u2);
}

// node_modules/@arcgis/core/views/interactive/SegmentLabels.js
var R2 = 3025;
var A = { default: 15, far: 25 };
var V = class extends b {
  constructor(e4) {
    super(e4), this.context = null, this.stagedVertex = null, this.visible = true, this.edgeDistance = "default", this._messageUnitsTask = null, this._labelInfos = [], this._nextLabelIndex = 0;
  }
  initialize() {
    this.addHandles([l(() => [null != this.context && this.getCameraOrExtent(this.context), this.visible, this._edgeDistancePixels, this.stagedVertex, this._messagesUnits], () => this._update()), a(() => this.context?.editGeometryOperations, ["vertex-add", "vertex-remove"], () => this._update()), a(() => this.context?.editGeometryOperations, "vertex-update", (e4) => this._update(e4.vertices)), l(() => this._colors, (e4) => this._updateStyle(e4)), R(() => this._refreshMessages()), e(() => this._messageUnitsTask?.abort())]), this._refreshMessages();
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
    const e4 = this.context?.view.effectiveTheme.textColor ?? g2.fromArray([255, 255, 255]);
    return { textColor: e4, backgroundColor: D(P(e4, 160), 0.6) };
  }
  _update(e4) {
    if (this.destroyed) return;
    this._nextLabelIndex = 0;
    const { context: t, stagedVertex: s2 } = this;
    if (!t) return this._destroyUnusedLabels();
    const o3 = t.editGeometryOperations.data, { parts: r, geometry: i3, coordinateHelper: n4 } = o3;
    if (!i3) return this._destroyUnusedLabels();
    const a3 = r.length;
    for (let l4 = 0; l4 < a3; ++l4) {
      const r2 = this.getRing(i3, o3, s2, n4, l4), c3 = r2.map((e5) => i2(e5) ? e5 : n4.arrayToXYZ(v2(e5)));
      if (r2.length < 2 || !G(r2, t.view, t.elevationInfo, n4.spatialReference)) continue;
      const h3 = 1 === a3 && !g(c3);
      let m = F, p3 = X;
      this.toScreenPointArray(t, c3[0], m);
      for (let s3 = 1; s3 < r2.length; ++s3) {
        const o4 = c3[s3 - 1], i4 = c3[s3], n5 = r2[s3];
        this.toScreenPointArray(t, i4, p3);
        const a4 = s3 === c3.length - 1, d2 = !(!e4?.length || e4.some(({ index: e5, part: t2 }) => t2.index === l4 && (e5 === s3 - 1 || e5 === s3 || a4 && 0 === e5)));
        this._addLabel(t, o4, m, i4, i2(n5) ? null : n5, p3, h3, d2), [m, p3] = [p3, m];
      }
    }
    this._destroyUnusedLabels();
  }
  _updateStyle({ textColor: e4, backgroundColor: t }) {
    const s2 = this._nextLabelIndex, o3 = this._labelInfos;
    for (let r = 0; r < s2; ++r) {
      const { label: s3 } = o3[r];
      s3.textColor = e4, s3.backgroundColor = t;
    }
  }
  _addLabel(e4, t, s2, o3, r, i3, n4, a3 = false) {
    const { label: l4, wasReused: h3 } = this._getOrCreateLabel(e4);
    if (!this.visible || b2(s2, i3) < R2) return void (l4.visible = false);
    const { spatialReference: m, coordinateHelper: p3 } = e4.editGeometryOperations.data;
    if (!a3 || !h3) {
      const s3 = !r || e2(r) ? e4.automaticLengthMeasurementUtils.autoDistance2D(t, o3, m) : e4.automaticLengthMeasurementUtils.autoLength2D(new y({ spatialReference: m, curvePaths: [[[t[0], t[1]], r]] })), i4 = this._messagesUnits, n5 = e3(e4.view);
      l4.text = null != i4 && null != s3 ? U(i4, s3, n5) : "";
    }
    l4.visible = true;
    const d2 = i3[0] - s2[0], u2 = i3[1] - s2[1];
    if (n4 ? o(q, -u2, d2) : o(q, u2, -d2), v(q, q), l2(q, q, this._edgeDistancePixels), r && !e2(r)) {
      const s3 = p3.arrayToXYZ(n3(t, r, 0.5)), o4 = this.toScreenPointArray(e4, s3);
      u(z, o4, q);
    } else _(z, s2, i3, 0.5), u(z, z, q);
    l4.position = [z[0], z[1]], Math.abs(q[0]) > Math.abs(q[1]) ? l4.anchor = q[0] > 0 ? "left" : "right" : l4.anchor = -q[1] < 0 ? "top" : "bottom";
  }
  _getOrCreateLabel(e4) {
    const t = this._labelInfos.length > this._nextLabelIndex, { textColor: s2, backgroundColor: o3 } = this._colors;
    if (t) {
      const e5 = this._labelInfos[this._nextLabelIndex++], { label: t2 } = e5;
      return t2.textColor = s2, t2.backgroundColor = o3, e5.wasReused = true, e5;
    }
    const r = new n2({ anchor: "center", fontSize: 8, textColor: s2, backgroundColor: o3 });
    e4.view.overlay?.items.add(r);
    const i3 = { label: r, wasReused: false };
    return this._labelInfos.push(i3), this._nextLabelIndex = this._labelInfos.length, i3;
  }
  _destroyUnusedLabels() {
    for (; this._labelInfos.length > this._nextLabelIndex; ) this._destroyLabel(this._labelInfos.pop());
  }
  _destroyLabel({ label: e4 }) {
    this.context?.view.overlay?.items.remove(e4), e4.destroy();
  }
  _refreshMessages() {
    this._messageUnitsTask?.abort(), this._messageUnitsTask = w(() => f("esri/core/t9n/Units"));
  }
};
function G(e4, t, s2, o3) {
  if ("2d" === t.type) return true;
  const r = ae(o3) ?? 1, i3 = te(o3), n4 = (e5) => b3(t, e5, o3, s2, k) ?? 0;
  for (let a3 = 1; a3 < e4.length; ++a3) {
    const t2 = e4[a3 - 1], s3 = e4[a3];
    if (!i2(t2) || !i2(s3)) return false;
    const o4 = (s3[0] - t2[0]) * r, l4 = (s3[1] - t2[1]) * r, c3 = (n4(s3) - n4(t2)) * i3;
    if (Math.abs(c3) / Math.sqrt(o4 * o4 + l4 * l4) > H) return false;
  }
  return true;
}
__decorate([a2()], V.prototype, "context", void 0), __decorate([a2()], V.prototype, "stagedVertex", void 0), __decorate([a2()], V.prototype, "visible", void 0), __decorate([a2()], V.prototype, "edgeDistance", void 0), __decorate([a2()], V.prototype, "updating", null), __decorate([a2()], V.prototype, "_messageUnitsTask", void 0), __decorate([a2()], V.prototype, "_messagesUnits", null), __decorate([a2()], V.prototype, "_edgeDistancePixels", null), __decorate([a2()], V.prototype, "_colors", null), V = __decorate([c("esri.views.interactive.SegmentLabels")], V);
var H = s(5);
var q = n();
var z = n();
var F = f2();
var X = f2();

export {
  V
};
//# sourceMappingURL=chunk-DQZPY62H.js.map
