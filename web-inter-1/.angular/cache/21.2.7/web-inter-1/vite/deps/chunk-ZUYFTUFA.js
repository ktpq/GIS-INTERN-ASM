import {
  x as x2
} from "./chunk-RSIK7DB2.js";
import {
  R,
  U,
  j
} from "./chunk-M4TJISG2.js";
import {
  Ct,
  Lt,
  Mt,
  Zt,
  bt,
  dt,
  pe
} from "./chunk-2ET52ROV.js";
import {
  f as f3,
  g,
  h
} from "./chunk-ZV255XC4.js";
import {
  N
} from "./chunk-OYBI3GFG.js";
import {
  E,
  I,
  x
} from "./chunk-KWGDYBY5.js";
import {
  f as f2,
  m,
  p as p2
} from "./chunk-OU7IBCXM.js";
import {
  p as p3
} from "./chunk-5CZQAS24.js";
import {
  t
} from "./chunk-TZSKNWRI.js";
import {
  D,
  p
} from "./chunk-XA3Z7BRX.js";
import {
  c as c2,
  e as e2,
  o
} from "./chunk-SGNC5H35.js";
import {
  q
} from "./chunk-HMYFPFVG.js";
import {
  l as l2
} from "./chunk-LQMHYEKG.js";
import {
  _
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  fe,
  me
} from "./chunk-NR66QFNF.js";
import {
  f,
  i
} from "./chunk-UXWT3ISO.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  $,
  L,
  e,
  l
} from "./chunk-WARIPJQI.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/interactive/ManipulatorCollection.js
var a2 = class {
  constructor() {
    this._isToolEditable = true, this._manipulators = new q(), this._resourceContexts = { manipulator3D: {} }, this._attached = false;
  }
  set isToolEditable(t2) {
    this._isToolEditable = t2;
  }
  get length() {
    return this._manipulators.length;
  }
  add(t2, a3 = 0) {
    this.addMany([t2], a3);
  }
  addMany(t2, a3 = 0) {
    for (const i2 of t2) {
      const t3 = { manipulator: i2, visibilityPredicate: a3, attached: false };
      this._manipulators.add(t3), this._attached && this._updateManipulatorAttachment(t3);
    }
  }
  remove(t2) {
    for (let a3 = 0; a3 < this._manipulators.length; a3++) if (this._manipulators.at(a3).manipulator === t2) {
      const t3 = this._manipulators.splice(a3, 1)[0];
      this._detachManipulator(t3);
      break;
    }
  }
  removeAll() {
    this._manipulators.forEach((t2) => {
      this._detachManipulator(t2);
    }), this._manipulators.removeAll();
  }
  attach() {
    this._manipulators.forEach((t2) => {
      this._updateManipulatorAttachment(t2);
    }), this._attached = true;
  }
  detach() {
    this._manipulators.forEach((t2) => {
      this._detachManipulator(t2);
    }), this._attached = false;
  }
  destroy() {
    this.detach(), this._manipulators.forEach(({ manipulator: t2 }) => t2.destroy()), this._manipulators.destroy(), this._resourceContexts = null;
  }
  on(t2, a3) {
    return this._manipulators.on(t2, (t3) => {
      a3(t3);
    });
  }
  forEach(t2) {
    for (const a3 of this._manipulators.items) t2(a3);
  }
  some(t2) {
    return this._manipulators.items.some(t2);
  }
  toArray() {
    const t2 = [];
    return this.forEach((a3) => t2.push(a3.manipulator)), t2;
  }
  intersect(t2, a3) {
    let i2 = null, e3 = Number.MAX_VALUE;
    return this._manipulators.forEach(({ manipulator: s, attached: r }) => {
      if (!r || !s.interactive) return;
      const o2 = s.intersectionDistance(t2, a3);
      null != o2 && o2 < e3 && (e3 = o2, i2 = s);
    }), i2;
  }
  _updateManipulatorAttachment(t2) {
    this._isManipulatorItemVisible(t2) ? this._attachManipulator(t2) : this._detachManipulator(t2);
  }
  _attachManipulator(t2) {
    t2.attached || (t2.manipulator.attach && t2.manipulator.attach(this._resourceContexts), t2.attached = true);
  }
  _detachManipulator(t2) {
    if (!t2.attached) return;
    const a3 = t2.manipulator;
    a3.grabbing = false, a3.dragging = false, a3.hovering = false, a3.selected = false, a3.detach && a3.detach(this._resourceContexts), t2.attached = false;
  }
  _isManipulatorItemVisible(t2) {
    return 2 === t2.visibilityPredicate || (this._isToolEditable ? 0 === t2.visibilityPredicate : 1 === t2.visibilityPredicate);
  }
};

// node_modules/@arcgis/core/views/interactive/InteractiveToolBase.js
var n = class extends l2 {
  constructor(t2) {
    super(t2), this.manipulators = new a2(), this.automaticManipulatorSelection = true, this.multiTouchEnabled = true, this.hasGrabbedManipulators = false, this.hasHoveredManipulators = false, this.firstGrabbedManipulator = null, this.created = false, this.removeIncompleteOnCancel = true, this._editableFlags = /* @__PURE__ */ new Map([[1, true], [0, true]]), this._creationFinishedResolver = $();
  }
  get active() {
    return null != this.view && this.view.activeTool === this;
  }
  set visible(t2) {
    this._get("visible") !== t2 && (this._set("visible", t2), this._syncVisible());
  }
  get editable() {
    return this.getEditableFlag(0);
  }
  set editable(t2) {
    this.setEditableFlag(0, t2);
  }
  get updating() {
    return false;
  }
  get cursor() {
    return null;
  }
  get hasFocusedManipulators() {
    return this.hasGrabbedManipulators || this.hasHoveredManipulators;
  }
  destroy() {
    this.manipulators.destroy(), this._set("view", null);
  }
  onAdd() {
    this._syncVisible();
  }
  activate() {
    null != this.view && (this.view.focus(), this.onActivate());
  }
  deactivate() {
    this.onDeactivate();
  }
  cancel() {
    this.emit("cancel");
  }
  handleInputEvent(t2) {
    this.onInputEvent(t2);
  }
  handleInputEventAfter(t2) {
    this.onInputEventAfter(t2);
  }
  setEditableFlag(t2, e3) {
    this._editableFlags.set(t2, e3), this.manipulators.isToolEditable = this.internallyEditable, this._updateManipulatorAttachment(), 0 === t2 && this.notifyChange("editable"), this.onEditableChange(), this.onManipulatorSelectionChanged();
  }
  getEditableFlag(t2) {
    return this._editableFlags.get(t2) ?? false;
  }
  endDrag() {
    const t2 = this.view.inputManager.latestPointerInfo?.location;
    if (!t2) return;
    let e3 = false;
    this.manipulators.forEach(({ manipulator: i2 }) => {
      i2.dragging && (e3 = true, i2.events.emit("drag", { action: "end", start: t2, screenPoint: t2 }));
    }), e3 && (this.view.toolViewManager.activeTool = null);
  }
  whenCreated() {
    return this._creationFinishedResolver.promise;
  }
  onManipulatorSelectionChanged() {
  }
  onActivate() {
  }
  onDeactivate() {
  }
  onShow() {
  }
  onHide() {
  }
  onEditableChange() {
  }
  onInputEvent(t2) {
  }
  onInputEventAfter(t2) {
  }
  get internallyEditable() {
    return this.getEditableFlag(0) && this.getEditableFlag(1);
  }
  finishToolCreation() {
    this.created || this._creationFinishedResolver.resolve(this), this._set("created", true);
  }
  _syncVisible() {
    if (this.initialized) {
      if (this.visible) this._show();
      else if (this._hide(), this.active) return void (this.view.activeTool = null);
    }
  }
  _show() {
    this._updateManipulatorAttachment(), this.onShow();
  }
  _hide() {
    this._updateManipulatorAttachment(), this.onHide();
  }
  _updateManipulatorAttachment() {
    this.visible ? this.manipulators.attach() : this.manipulators.detach();
  }
};
__decorate([a({ constructOnly: true })], n.prototype, "view", void 0), __decorate([a({ readOnly: true })], n.prototype, "active", null), __decorate([a({ value: true })], n.prototype, "visible", null), __decorate([a({ value: true })], n.prototype, "editable", null), __decorate([a({ readOnly: true })], n.prototype, "manipulators", void 0), __decorate([a({ readOnly: true })], n.prototype, "updating", null), __decorate([a()], n.prototype, "cursor", null), __decorate([a({ readOnly: true })], n.prototype, "automaticManipulatorSelection", void 0), __decorate([a({ readOnly: true })], n.prototype, "multiTouchEnabled", void 0), __decorate([a()], n.prototype, "hasFocusedManipulators", null), __decorate([a()], n.prototype, "hasGrabbedManipulators", void 0), __decorate([a()], n.prototype, "hasHoveredManipulators", void 0), __decorate([a()], n.prototype, "firstGrabbedManipulator", void 0), __decorate([a({ readOnly: true })], n.prototype, "created", void 0), __decorate([a({ readOnly: true })], n.prototype, "removeIncompleteOnCancel", void 0), n = __decorate([c("esri.views.interactive.InteractiveToolBase")], n);

// node_modules/@arcgis/core/views/interactive/sketch/constraintUtils.js
function M(e3, n2, t2, r, o2, i2) {
  let l4 = "geodesic", u2 = N(t2);
  const s = f3();
  return h(e3, n2, r, s), s[2] = 0, u2 && p3(s, t2, s, u2) || (l4 = "euclidean", u2 = t2), { mode: l4, view: n2, elevationInfo: r, hasZ: o2, directionMode: i2, spatialReference: e3.spatialReference, measurementSR: u2, origin: s };
}
function U2(n2, t2, o2) {
  if (null == t2 || null == n2) return;
  const i2 = me(o2.measurementSR);
  if (null == i2) return;
  const l4 = k(n2, o2);
  if (null == l4) return;
  const u2 = m(t2, i2);
  return new Lt(l4, u2);
}
function Z(e3, t2, r, o2) {
  if (null == r || null == e3) return;
  const i2 = k(e3, o2);
  if (null == i2) return;
  const l4 = U(r), u2 = 10, c4 = (e4) => {
    if (null == e4) return;
    const t3 = f3(), r2 = p2(e4, "degrees", "geographic");
    return R(t3, i2, o2.measurementSR, u2, r2, o2.mode) ? new bt(i2, t3) : void 0;
  }, s = () => {
    if (null != t2 && null != e3) return U(j(t2, e3));
  };
  switch (o2.directionMode) {
    case "absolute":
      return c4(l4);
    case "relative": {
      const e4 = s();
      if (null == e4) return;
      return c4(e4 + l4);
    }
    case "relative-bilateral": {
      const e4 = s();
      if (null == e4) return;
      return pe([c4(e4 + l4), c4(e4 - l4)]);
    }
  }
}
function P(e3, n2) {
  const t2 = B(e3, n2);
  return null != t2 ? new Mt(t2) : void 0;
}
function T(e3, n2, t2) {
  const { context: r, longitude: o2, latitude: i2, direction: l4, distance: u2, elevation: c4 } = t2;
  if (null != o2 || null != i2 || null != u2 || null != c4 || null != l4) {
    if (null != o2 || null != i2) {
      const e4 = U(o2), n3 = U(i2), t3 = B(c4, r);
      return new Zt(e4, n3, t3);
    }
    return V(e3, n2, t2);
  }
}
function V(n2, t2, { context: r, direction: o2, distance: i2, elevation: l4 }) {
  if (null == t2) return P(l4, r);
  const { view: u2, elevationInfo: c4, measurementSR: s } = r, f4 = h(t2, u2, c4);
  if (!s || !p3(f4, t2.spatialReference, D2, s)) return;
  const [m2, d] = D2, v = null != i2 ? m(i2, "meters") : void 0, g2 = U(o2), R2 = B(l4, r), y = (e3) => {
    const n3 = new Ct([m2, d], s, v, R2, e3);
    return null == v || null == e3 || null == R2 && r.hasZ ? n3 : new dt(n3.closestTo(f4));
  };
  if (null == g2) return y(void 0);
  const h3 = () => {
    if (null != n2 && null != t2) return U(j(n2, t2));
  };
  switch (r.directionMode) {
    case "absolute":
      return y(g2);
    case "relative": {
      const e3 = h3();
      if (null == e3) return;
      return y(e3 + g2);
    }
    case "relative-bilateral": {
      const e3 = h3();
      if (null == e3) return;
      return pe([y(e3 + g2), y(e3 - g2)]);
    }
  }
}
function q2(e3) {
  return "geodesic" === e3.context.mode ? T(null, null, e3) : G(e3);
}
function z(e3, n2, t2) {
  const { context: r, x: o2, y: i2, distance: l4, direction: u2, elevation: c4 } = t2;
  return "geodesic" === r.mode ? T(n2, e3, t2) : null != o2 || null != i2 ? G(t2) : W([U2(e3, l4, r), Z(e3, n2, u2, r), P(c4, r)]);
}
function G({ x: e3, y: n2, elevation: t2, context: r }) {
  H.x = e3?.value ?? 0, H.y = n2?.value ?? 0, H.spatialReference = r.spatialReference;
  const o2 = k(H, r, E2);
  return new Zt(null != e3 && null != o2 ? o2[0] : void 0, null != n2 && null != o2 ? o2[1] : void 0, B(t2, r));
}
function W(e3) {
  let n2;
  for (const t2 of e3) t2 && (n2 = n2?.intersect(t2) ?? t2);
  return n2;
}
function k(e3, n2, t2 = f3()) {
  const { view: r, elevationInfo: o2, measurementSR: l4, origin: u2, mode: c4 } = n2;
  if (h(e3, r, o2, t2), p3(t2, e3.spatialReference, t2, l4)) return "geodesic" !== c4 && e2(t2, t2, u2), t2;
}
function A(e3, n2, t2, r) {
  const { view: o2, measurementSR: i2, spatialReference: c4, origin: s, mode: f4 } = t2;
  if ("geodesic" === f4 ? o(F, e3) : c2(F, e3, s), p3(F, i2, F, c4)) return g(F, o2, n2, t2, r);
}
function B(e3, n2) {
  return C(e3, n2)?.value ?? void 0;
}
function C(n2, { view: r, origin: i2, elevationInfo: l4, hasZ: u2, measurementSR: c4 }) {
  if (null == n2 || !u2) return;
  const s = fe(c4);
  if (null == s) return;
  const [a3, f4] = i2, d = m(n2, s), v = "3d" === r?.type ? I(r, a3, f4, d, c4, l4) : d;
  return null != v ? f2(v, s) : void 0;
}
var D2 = f3();
var E2 = f3();
var F = f3();
var H = t(0, 0, 0, S.WGS84);

// node_modules/@arcgis/core/views/draw/drawSurfaces.js
var c3 = class {
  constructor(e3, t2, s, r = null) {
    this._elevationInfo = e3, this.defaultZ = t2, this._view = s, this._excludeGraphics = r;
  }
  screenToMap(t2) {
    const { defaultZ: s, _view: r } = this, n2 = r.sceneIntersectionHelper.intersectElevationFromScreen(f(t2.x, t2.y), this._elevationInfo, s ?? 0, this._excludeGraphics);
    return null == s && null != n2 && (n2.z = void 0), n2;
  }
  mapToScreen(e3) {
    const t2 = t(e3.x, e3.y, E(this._view, e3, this._elevationInfo), e3.spatialReference);
    return this._view.toScreen(t2);
  }
  constrainZ(e3) {
    const { defaultZ: t2 } = this;
    return null != t2 && e3.z !== t2 && ((e3 = x2(e3)).z = t2), e3;
  }
};
var l3 = class {
  constructor(e3, t2, s = []) {
    this.view = e3, this.elevationInfo = t2, this.exclude = s;
  }
  screenToMap(e3) {
    const t2 = this.view.toMap(e3, { exclude: this.exclude, excludeLabels: true });
    return null != t2 && (t2.z = x(t2, this.view, this.elevationInfo)), t2;
  }
  mapToScreen(e3) {
    let t2 = e3;
    return null != this.elevationInfo && (t2 = t(e3.x, e3.y, E(this.view, e3, this.elevationInfo), e3.spatialReference)), this.view.toScreen(t2);
  }
  constrainZ(e3) {
    return e3;
  }
};
var h2 = class {
  constructor(e3, t2 = false, s = 0) {
    this.view = e3, this.hasZ = t2, this.defaultZ = s, this.mapToScreen = (t3) => e3.toScreen(t3), this.screenToMap = t2 ? (t3) => {
      const r = e3.toMap(t3);
      return r.z = s, r;
    } : (t3) => e3.toMap(t3);
  }
  constrainZ(e3) {
    const { defaultZ: t2 } = this;
    return this.hasZ && e3.z !== t2 && ((e3 = x2(e3)).z = t2), e3;
  }
};
var u = class _u {
  screenToMap(e3) {
    const { x: t2, y: r } = e3;
    return new _({ x: t2, y: r, spatialReference: _u.spatialReference });
  }
  mapToScreen(e3) {
    return i(e3.x, e3.y);
  }
  constrainZ(e3) {
    return e3;
  }
  static {
    this.spatialReference = new S();
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/SnappingOperation.js
var p4 = class extends b {
  constructor(t2) {
    super(t2), this.constrainResult = (t3) => t3, this._snapPoints = null, this._frameTask = null, this._abortController = null, this._stagedPoint = null, this._snap = L(async (t3, s, o2, n2) => {
      const i2 = this._frameTask;
      if (null == i2) return;
      const e3 = await i2.schedule(() => s.snap(__spreadProps(__spreadValues({}, t3), { context: o2, signal: n2 })), n2);
      e3.valid && await i2.schedule(() => {
        this.stagedPoint = e3.apply(), t3 !== this._snapPoints && null != this._snapPoints && (this.stagedPoint = s.update(__spreadProps(__spreadValues({}, this._snapPoints), { context: o2 })));
      }, n2);
    });
  }
  get stagedPoint() {
    return this._stagedPoint;
  }
  set stagedPoint(t2) {
    this._stagedPoint = this.constrainResult(t2);
  }
  initialize() {
    const t2 = "3d" === this.view.type ? this.view?.resourceController?.scheduler : null;
    this._frameTask = null != t2 ? t2.registerTask(p.SNAPPING) : D;
  }
  destroy() {
    this._abortController = e(this._abortController), this._frameTask = l(this._frameTask);
  }
  update(t2, s, o2) {
    this._snapPoints = t2;
    const { point: n2, scenePoint: i2 } = t2, e3 = s.update({ point: n2, scenePoint: i2, context: o2 });
    return this.stagedPoint = e3, e3;
  }
  async snap(t2, s, o2) {
    const { point: n2, scenePoint: i2 } = t2;
    return this.stagedPoint = s.update({ point: n2, scenePoint: i2, context: o2 }), this._snapPoints = t2, null == this._abortController && (this._abortController = new AbortController()), this._snap(t2, s, o2, this._abortController.signal);
  }
  async snapAgainNearPreviousMapPoint(t2, s) {
    null != this._snapPoints && await this.snap(this._snapPoints, t2, s);
  }
  abort() {
    this._abortController = e(this._abortController), this._snapPoints = null;
  }
};
__decorate([a({ constructOnly: true })], p4.prototype, "view", void 0), __decorate([a()], p4.prototype, "stagedPoint", null), __decorate([a()], p4.prototype, "constrainResult", void 0), __decorate([a()], p4.prototype, "_stagedPoint", void 0), p4 = __decorate([c("esri.views.interactive.snapping.SnappingOperation")], p4);

export {
  M,
  q2 as q,
  z,
  k,
  A,
  a2 as a,
  n,
  p4 as p,
  c3 as c,
  l3 as l,
  h2 as h
};
//# sourceMappingURL=chunk-ZUYFTUFA.js.map
