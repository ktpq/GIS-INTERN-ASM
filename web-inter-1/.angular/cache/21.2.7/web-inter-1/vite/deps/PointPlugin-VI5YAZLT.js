import {
  n
} from "./chunk-O3OH5LJH.js";
import "./chunk-TXF5FFQH.js";
import {
  U,
  l
} from "./chunk-6CYBR6FP.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=PointPlugin-VI5YAZLT.js.map
