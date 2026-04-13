import {
  n
} from "./chunk-KBZ7E6F2.js";
import "./chunk-KI7SNQFW.js";
import {
  U,
  l
} from "./chunk-M44GXGOJ.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/draw/plugins/PointPlugin.js
var o = /* @__PURE__ */ Symbol("primary-vertex");
var n2 = class extends n {
  constructor() {
    super(...arguments), this.enableHelpMessages = false;
  }
  get helpMessageKey() {
    return this.enableHelpMessages ? "point" : null;
  }
  start(e) {
    super.start(e);
    const { session: i, positionOfLastUserInput: r } = e;
    r && i.appendOrReplacePoint(o, r), this._interactiveHandle || (this._interactiveHandle = e.createInteractiveHandle({ defaultCaptureMode: "capture-always" }), this.addHandles([l(() => this._interactiveHandle?.outputMapPosition, (e2) => {
      e2 && !this._isComplete && this._session?.appendOrReplacePoint(o, e2);
    }, U)], this._ownHandlesKey));
  }
};
__decorate([a()], n2.prototype, "enableHelpMessages", void 0), __decorate([a()], n2.prototype, "helpMessageKey", null), __decorate([a()], n2.prototype, "_interactiveHandle", void 0), n2 = __decorate([c("esri.views.draw.plugins.PointPlugin")], n2);
export {
  n2 as PointPlugin
};
//# sourceMappingURL=PointPlugin-M6WU7USO.js.map
