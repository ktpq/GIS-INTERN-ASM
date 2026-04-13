import {
  n
} from "./chunk-6OPXXNEA.js";
import "./chunk-BEEP3FKE.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import {
  U,
  l
} from "./chunk-55ZAYF5P.js";
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
//# sourceMappingURL=PointPlugin-KZJKFGXQ.js.map
