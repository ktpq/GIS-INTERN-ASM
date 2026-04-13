import {
  s as s2
} from "./chunk-H6BWPWXH.js";
import {
  r
} from "./chunk-HY6H36LC.js";
import {
  s
} from "./chunk-PXICZPXV.js";
import {
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
  has,
  n2 as n
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/input/keys.js
var t = has("mac") ? "Meta" : "Control";
var o = /* @__PURE__ */ new Set(["Alt", "Control", "Meta", "Shift", "Ctrl", "Primary"]);
var r2 = (t3) => o.has(t3);

// node_modules/@arcgis/core/views/input/EventMatch.js
var e = class {
  constructor(e2, t3 = []) {
    this.eventType = e2, this.keyModifiers = t3;
  }
  matches(e2) {
    if (e2.type !== this.eventType) return false;
    if (0 === this.keyModifiers.length) return true;
    const t3 = e2.modifiers;
    for (const i5 of this.keyModifiers) if (!t3.has(i5)) return false;
    return true;
  }
};

// node_modules/@arcgis/core/views/input/InputHandler.js
var t2 = class {
  constructor(e2) {
    this._manager = null, this._incoming = {}, this._outgoing = {}, this._incomingEventMatches = null, this._incomingEventTypes = null, this._outgoingEventTypes = null, this._hasSideEffects = e2;
  }
  get incomingEventMatches() {
    if (!this._incomingEventMatches) {
      this._incomingEventMatches = [];
      for (const e2 in this._incoming) {
        const t3 = this._incoming[e2];
        for (const e3 of t3) this._incomingEventMatches.push(e3.match);
      }
    }
    return this._incomingEventMatches;
  }
  get incomingEventTypes() {
    return this._incomingEventTypes || (this._incomingEventTypes = this.incomingEventMatches.map((e2) => e2.eventType)), this._incomingEventTypes;
  }
  get outgoingEventTypes() {
    return this._outgoingEventTypes || (this._outgoingEventTypes = Object.keys(this._outgoing)), this._outgoingEventTypes;
  }
  get hasSideEffects() {
    return this._hasSideEffects;
  }
  get hasPendingInputs() {
    return false;
  }
  onInstall(e2) {
    this._manager || (e2.setEventCallback((e3) => this._handleEvent(e3)), e2.setUninstallCallback(() => this._onUninstall()), this._manager = e2);
  }
  onUninstall() {
  }
  registerIncoming(t3, i5, s3) {
    let o2;
    "function" == typeof i5 ? (s3 = i5, o2 = []) : o2 = i5 || [];
    const a2 = "string" == typeof t3 ? new e(t3, o2) : t3, h = () => {
      this._incomingEventTypes = null, this._incomingEventMatches = null;
    }, r3 = (e2) => {
      const t4 = this._incoming[e2.match.eventType];
      if (t4) {
        const n3 = t4.indexOf(e2);
        t4.splice(n3, 1), h(), this._manager && this._manager.updateDependencies();
      }
    }, g = new n2(a2, s3, { onPause: r3, onRemove: r3, onResume: (e2) => {
      const t4 = this._incoming[e2.match.eventType];
      t4 && !t4.includes(e2) && (t4.push(e2), h(), this._manager && this._manager.updateDependencies());
    } });
    let c3 = this._incoming[a2.eventType];
    return c3 || (c3 = [], this._incoming[a2.eventType] = c3), c3.push(g), h(), this._manager && this._manager.updateDependencies(), g;
  }
  registerOutgoing(e2) {
    if (this._outgoing[e2]) throw new Error("There is already a callback registered for this outgoing InputEvent: " + e2);
    const t3 = new i2(e2, { onEmit: (e3, t4, n3, i5) => {
      this._manager?.emit(e3.eventType, t4, n3, i5);
    }, onRemove: (e3) => {
      delete this._outgoing[e3.eventType], this._manager?.updateDependencies();
    } });
    return this._outgoing[e2] = t3, this._outgoingEventTypes = null, this._manager && this._manager.updateDependencies(), t3;
  }
  startCapturingPointer(e2) {
    this._manager?.setPointerCapture(e2, true);
  }
  stopCapturingPointer(e2) {
    this._manager?.setPointerCapture(e2, false);
  }
  refreshHasPendingInputs() {
    this._manager?.refreshHasPendingInputs();
  }
  _onUninstall() {
    this._manager && (this.onUninstall(), this._manager = null);
  }
  _handleEvent(e2) {
    const t3 = this._incoming[e2.type];
    if (t3) {
      for (const n3 of t3) if (n3.match.matches(e2) && (n3.callback?.(e2), e2.shouldStopPropagation())) break;
    }
  }
};
var n2 = class {
  constructor(e2, t3, n3) {
    this.match = e2, this._callback = t3, this._handler = n3;
  }
  pause() {
    this._handler.onPause(this);
  }
  resume() {
    this._handler.onResume(this);
  }
  remove() {
    this._handler.onRemove(this);
  }
  get callback() {
    return this._callback;
  }
};
var i2 = class {
  constructor(e2, t3) {
    this.eventType = e2, this._removed = false, this._handler = t3;
  }
  emit(e2, t3, n3) {
    this._removed || this._handler.onEmit(this, e2, t3, n3);
  }
  remove() {
    this._removed = true, this._handler.onRemove(this);
  }
};

// node_modules/@arcgis/core/views/input/handlers/LatestPointer.js
var i3 = class extends t2 {
  constructor(t3) {
    super(true), this._onChange = t3, this._value = "mouse", this._x = null, this._y = null, this._id = null, this.registerIncoming("pointer-move", (t4) => this._update(t4.data));
  }
  _update(t3) {
    const i5 = "touch" === t3.native.pointerType ? "touch" : "mouse", { x: s3, y: e2, native: { pointerId: h } } = t3;
    i5 === this._value && this._x === s3 && this._y === e2 && this._id === h || (this._value = i5, this._x = s3, this._y = e2, this._id = h, this._onChange(h, i5, s3, e2));
  }
};

// node_modules/@arcgis/core/views/input/handlers/MultiTouch.js
var i4 = class extends t2 {
  get multiTouchActive() {
    return this._multiTouchActive.value;
  }
  constructor() {
    super(true), this._activeTouchPointerIds = /* @__PURE__ */ new Set(), this._multiTouchActive = r(false), this._onPointerAdd = ({ data: t3 }) => {
      "touch" === t3.pointerType && (this._activeTouchPointerIds.add(t3.native.pointerId), this._update());
    }, this._onPointerRemove = ({ data: t3 }) => {
      "touch" === t3.pointerType && (this._activeTouchPointerIds.delete(t3.native.pointerId), this._update());
    }, this.registerIncoming("pointer-down", this._onPointerAdd), this.registerIncoming("pointer-up", this._onPointerRemove), this.registerIncoming("pointer-capture-lost", this._onPointerRemove), this.registerIncoming("pointer-cancel", this._onPointerRemove);
  }
  _update() {
    this._multiTouchActive.value = this._activeTouchPointerIds.size > 1;
  }
};

// node_modules/@arcgis/core/views/input/InputManager.js
var u = class {
  constructor() {
    this.id = 0, this.type = "mouse", this.location = i();
  }
};
var c2 = class extends b {
  constructor(e2) {
    super(e2), this._pointerCaptures = /* @__PURE__ */ new Map(), this._nameToGroup = {}, this._handlers = [], this._handlersPriority = [], this._currentPropagation = null, this._updateDependenciesAfterPropagation = false, this._sourceEvents = /* @__PURE__ */ new Set(), this._keyModifiers = /* @__PURE__ */ new Set(), this._activeKeyModifiers = /* @__PURE__ */ new Set(), this._stoppedPropagationEventIds = /* @__PURE__ */ new Set(), this.primaryKey = t, this._propertiesPool = new s2({ latestPointerInfo: () => new u() }, this), this._latestPointerInfo = void 0, this._paused = false, this._testTimestamp = void 0;
  }
  initialize() {
    this.eventSource.onEventReceived = this._onEventReceived.bind(this), this._installRecognizers();
  }
  destroy() {
    const e2 = Object.keys(this._nameToGroup);
    for (const t3 of e2) this.uninstallHandlers(t3);
    this.eventSource.destroy(), this._currentPropagation = null, this._propertiesPool.destroy();
  }
  get hasPendingInputs() {
    return this._handlers.some((e2) => e2.handler.hasPendingInputs);
  }
  get multiTouchActive() {
    return this._multiTouchHandler.multiTouchActive;
  }
  get latestPointerInfo() {
    return this._latestPointerInfo;
  }
  get updating() {
    return this.hasPendingInputs || this._paused;
  }
  installHandlers(e2, t3, i5 = f.INTERNAL) {
    if (this._nameToGroup[e2]) return;
    if (0 === t3.length) return;
    const r3 = { name: e2, handlers: t3.map((e3) => ({ handler: e3, active: true, removed: false, priorityIndex: 0, groupPriority: i5, eventCallback: null, uninstallCallback: null })) };
    this._nameToGroup[e2] = r3;
    for (let n3 = r3.handlers.length - 1; n3 >= 0; n3--) {
      const e3 = r3.handlers[n3];
      this._handlers.push(e3), e3.handler.onInstall({ updateDependencies: () => {
        this.updateDependencies();
      }, emit: (t4, i6, r4, n4, s3) => {
        this._emitInputEvent(e3.priorityIndex + 1, t4, i6, r4, s3, n4);
      }, setPointerCapture: (t4, i6) => {
        this._setPointerCapture(r3, e3, t4, i6);
      }, setEventCallback: (t4) => {
        e3.eventCallback = t4;
      }, setUninstallCallback: (t4) => {
        e3.uninstallCallback = t4;
      }, refreshHasPendingInputs: () => {
        this.notifyChange("hasPendingInputs");
      } });
    }
    this.updateDependencies();
  }
  uninstallHandlers(e2) {
    const t3 = this._nameToGroup[e2];
    t3 ? (t3.handlers.forEach((e3) => {
      e3.removed = true, e3.uninstallCallback?.();
    }), delete this._nameToGroup[e2], this._currentPropagation ? this._currentPropagation.needsHandlerGarbageCollect = true : this._garbageCollectRemovedHandlers()) : n.getLogger(this).error("There is no InputHandler group registered under the name `" + e2 + "`");
  }
  hasHandlers(e2) {
    return void 0 !== this._nameToGroup[e2];
  }
  isModifierKeyDown(e2) {
    return this._activeKeyModifiers.has(e2);
  }
  updateDependencies() {
    if (this._currentPropagation) return void (this._updateDependenciesAfterPropagation = true);
    this._updateDependenciesAfterPropagation = false;
    const e2 = /* @__PURE__ */ new Set(), t3 = /* @__PURE__ */ new Set();
    this._handlersPriority = [];
    for (let i5 = this._handlers.length - 1; i5 >= 0; i5--) {
      const e3 = this._handlers[i5];
      e3.priorityIndex = i5, this._handlersPriority.push(e3);
    }
    this._handlersPriority = this._sortHandlersPriority(this._handlersPriority);
    for (let i5 = this._handlersPriority.length - 1; i5 >= 0; i5--) {
      const r3 = this._handlersPriority[i5];
      r3.priorityIndex = i5;
      let n3 = r3.handler.hasSideEffects;
      if (!n3) {
        for (const t4 of r3.handler.outgoingEventTypes) if (e2.has(t4)) {
          n3 = true;
          break;
        }
      }
      if (n3) for (const i6 of r3.handler.incomingEventMatches) {
        e2.add(i6.eventType);
        for (const e3 of i6.keyModifiers) r2(e3) || t3.add(e3);
      }
      r3.active = n3;
    }
    this._sourceEvents = e2, this._keyModifiers = t3, this._pointerCaptures.size > 0 && this._sourceEvents.add("pointer-capture-lost"), this._keyModifiers.size > 0 && (this._sourceEvents.add("key-down"), this._sourceEvents.add("key-up")), this.eventSource && (this.eventSource.activeEvents = this._sourceEvents);
  }
  _setLatestPointer(e2, t3, i5, r3) {
    const n3 = this._latestPointerInfo;
    if (null == n3 || n3.id !== e2 || n3.type !== t3 || n3.location.x !== i5 || n3.location.y !== r3) {
      const n4 = this._propertiesPool.get("latestPointerInfo");
      n4.id = e2, n4.type = t3, n4.location.x = i5, n4.location.y = r3, this._latestPointerInfo = n4;
    }
  }
  _onEventReceived(e2, t3) {
    if ("pointer-capture-lost" === e2) {
      const e3 = t3;
      this._pointerCaptures.delete(e3.native.pointerId);
    }
    this._updateKeyModifiers(e2, t3);
    const i5 = this._testTimestamp ?? t3.native?.timestamp, r3 = t3.native?.cancelable;
    this._emitInputEventFromSource(e2, t3, i5, r3);
  }
  _updateKeyModifiers(e2, t3) {
    if (!t3) return;
    let i5 = false;
    const r3 = () => {
      i5 || (this._activeKeyModifiers = new Set(this._activeKeyModifiers), i5 = true);
    }, n3 = (e3, t4) => {
      t4 && !this._activeKeyModifiers.has(e3) ? (r3(), this._activeKeyModifiers.add(e3)) : !t4 && this._activeKeyModifiers.has(e3) && (r3(), this._activeKeyModifiers.delete(e3));
    };
    if ("key-down" === e2 || "key-up" === e2) {
      const i6 = t3.key;
      this._keyModifiers.has(i6) && n3(i6, "key-down" === e2);
    }
    const s3 = t3.native;
    n3("Alt", !!s3?.altKey), n3("Control", !!s3?.ctrlKey), n3("Ctrl", !!s3?.ctrlKey), n3("Shift", !!s3?.shiftKey), n3("Meta", !!s3?.metaKey), n3("Primary", this._activeKeyModifiers.has(this.primaryKey));
  }
  _installRecognizers() {
    this._latestPointerHandler = new i3((e2, t3, i5, r3) => this._setLatestPointer(e2, t3, i5, r3)), this._multiTouchHandler = new i4(), this.installHandlers("input-manager-logic", [this._latestPointerHandler, this._multiTouchHandler], f.ALWAYS), this.recognizers.length > 0 && this.installHandlers("default", this.recognizers, f.INTERNAL);
  }
  _setPointerCapture(e2, t3, i5, r3) {
    const n3 = e2.name + "-" + t3.priorityIndex, s3 = this._pointerCaptures.get(i5.pointerId) || /* @__PURE__ */ new Set();
    this._pointerCaptures.set(i5.pointerId, s3), r3 ? (s3.add(n3), 1 === s3.size && this.eventSource && this.eventSource.setPointerCapture(i5, true)) : s3.has(n3) && (s3.delete(n3), 0 === s3.size && (this._pointerCaptures.delete(i5.pointerId), this.eventSource && this.eventSource.setPointerCapture(i5, false)));
  }
  _garbageCollectRemovedHandlers() {
    this._handlers = this._handlers.filter((e2) => !e2.removed), this.updateDependencies();
  }
  _emitInputEventFromSource(e2, t3, i5, r3) {
    this._emitInputEvent(0, e2, t3, i5, r3);
  }
  _emitInputEvent(e2, t3, i5, r3, n3, s3) {
    const o2 = r3 ?? this._currentPropagation?.timestamp ?? performance.now(), a2 = n3 ?? false, l = { event: new _(t3, i5, o2, s3 || this._activeKeyModifiers, a2), priorityIndex: e2 };
    this._currentPropagation ? this._currentPropagation.events.push(l) : this._doNewPropagation(l);
  }
  _doNewPropagation(e2) {
    this._currentPropagation = { events: new s(), currentHandler: null, needsHandlerGarbageCollect: false, timestamp: e2.event.timestamp }, this._currentPropagation.events.push(e2), this._continuePropagation();
  }
  _continuePropagation() {
    this._paused = false;
    const e2 = this._currentPropagation;
    if (e2) {
      for (; e2.events.length > 0; ) {
        const { event: t3, priorityIndex: i5 } = e2.events.pop(), r3 = t3.data?.eventId;
        if (!(null != r3 && this._stoppedPropagationEventIds.has(r3))) for (e2.currentHandler = this._handlersPriority[i5]; e2.currentHandler; ) {
          if (e2.currentHandler.removed) e2.needsHandlerGarbageCollect = true;
          else {
            if (e2.currentHandler.active && !t3.shouldStopPropagation() && e2.currentHandler.eventCallback?.(t3), t3.shouldStopPropagation()) {
              null != r3 && this._stoppedPropagationEventIds.add(r3);
              break;
            }
            if (t3.shouldPausePropagation(() => this._continuePropagation())) return void this._pausePropagation({ event: t3, priorityIndex: e2.currentHandler.priorityIndex + 1 });
          }
          e2.currentHandler = this._handlersPriority[e2.currentHandler.priorityIndex + 1];
        }
      }
      e2.needsHandlerGarbageCollect && this._garbageCollectRemovedHandlers(), this.hasPendingInputs || this._stoppedPropagationEventIds.clear(), this._currentPropagation = null, this._updateDependenciesAfterPropagation && this.updateDependencies();
    }
  }
  _pausePropagation(e2) {
    const t3 = new s();
    t3.push(e2);
    const i5 = this._currentPropagation;
    if (i5) {
      for (; i5.events.length; ) t3.push(i5.events.pop());
      i5.events = t3, i5.currentHandler = null, this._paused = true;
    }
  }
  _compareHandlerPriority(e2, t3) {
    if (e2.handler.hasSideEffects !== t3.handler.hasSideEffects) return e2.handler.hasSideEffects ? 1 : -1;
    if (e2.groupPriority !== t3.groupPriority) return e2.groupPriority > t3.groupPriority ? -1 : 1;
    for (const i5 of e2.handler.incomingEventMatches) for (const e3 of t3.handler.incomingEventMatches) {
      if (i5.eventType !== e3.eventType) continue;
      const t4 = i5.keyModifiers.filter((t5) => e3.keyModifiers.includes(t5));
      if (t4.length === i5.keyModifiers.length !== (t4.length === e3.keyModifiers.length)) return i5.keyModifiers.length > e3.keyModifiers.length ? -1 : 1;
    }
    return e2.priorityIndex > t3.priorityIndex ? -1 : 1;
  }
  _sortHandlersPriority(e2) {
    const t3 = [];
    for (const i5 of e2) {
      let e3 = 0;
      for (; e3 < t3.length && this._compareHandlerPriority(i5, t3[e3]) >= 0; ) e3++;
      t3.splice(e3, 0, i5);
    }
    return t3;
  }
  get test() {
  }
};
__decorate([a({ readOnly: true })], c2.prototype, "hasPendingInputs", null), __decorate([a({ constructOnly: true })], c2.prototype, "eventSource", void 0), __decorate([a({ constructOnly: true })], c2.prototype, "recognizers", void 0), __decorate([a()], c2.prototype, "multiTouchActive", null), __decorate([a()], c2.prototype, "_latestPointerInfo", void 0), __decorate([a()], c2.prototype, "latestPointerInfo", null), __decorate([a()], c2.prototype, "_paused", void 0), __decorate([a({ readOnly: true })], c2.prototype, "updating", null), c2 = __decorate([c("esri.views.input.InputManager")], c2);
var _ = class {
  constructor(e2, t3, i5, r3, n3) {
    this.type = e2, this.data = t3, this.timestamp = i5, this.modifiers = r3, this.cancelable = n3, this._propagationState = 0, this._resumeCallback = null;
  }
  stopPropagation() {
    this._propagationState |= 1;
  }
  shouldStopPropagation() {
    return !!(1 & this._propagationState);
  }
  defer(e2) {
    this._propagationState |= 2;
    const t3 = (e3, t4) => {
      this._propagationState &= -3;
      const i5 = this._resumeCallback;
      if (this._resumeCallback = null, i5 && i5(), t4) throw e3;
      return e3;
    };
    return ("function" == typeof e2 ? e2() : e2).then((e3) => t3(e3, false), (e3) => t3(e3, true));
  }
  shouldPausePropagation(e2) {
    return !!(2 & this._propagationState) && (this._resumeCallback = e2, true);
  }
  preventDefault() {
    this.data.native.preventDefault();
  }
};
var f = { ALWAYS: 1, DEFAULT: 0, TOOL: -1, WIDGET: -2, INTERNAL: -3 };

export {
  t,
  t2,
  c2 as c,
  f
};
//# sourceMappingURL=chunk-OK32G4KK.js.map
