import {
  n
} from "./chunk-WSJNDDRJ.js";
import "./chunk-ZWIQBT42.js";
import {
  U,
  l
} from "./chunk-L5CCICKP.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
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
//# sourceMappingURL=PointPlugin-LCDBYF5W.js.map
