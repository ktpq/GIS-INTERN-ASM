import {
  n
} from "./chunk-E62DEL36.js";
import "./chunk-GHG4ULKJ.js";
import {
  U,
  l
} from "./chunk-CD6IOUFB.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=PointPlugin-FZHBZKKN.js.map
