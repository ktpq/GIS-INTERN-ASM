import {
  u
} from "./chunk-X7HOEUCF.js";
import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
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

// node_modules/@arcgis/core/rest/networks/support/ValidateNetworkTopologyParameters.js
var n2;
var d = n2 = class extends n {
  static from(t) {
    return m(n2, t);
  }
  constructor(t) {
    super(t), this.gdbVersion = null, this.sessionID = null, this.validationType = null, this.validateArea = null, this.validationSet = null, this.outSpatialReference = null;
  }
  writeOutSR(t, e, o) {
    if (null != t) {
      const { wkid: r2, latestWkid: i, wkt: s, wkt2: p } = t;
      e[o] = JSON.stringify({ wkid: r2 ?? void 0, latestWkid: i ?? void 0, wkt: s ?? void 0, wkt2: p ?? void 0 });
    }
  }
};
__decorate([a({ type: String, json: { write: true } })], d.prototype, "gdbVersion", void 0), __decorate([a({ type: String, json: { write: true } })], d.prototype, "sessionID", void 0), __decorate([a({ type: u.apiValues, json: { type: u.jsonValues, read: u.read, write: u.write } })], d.prototype, "validationType", void 0), __decorate([a({ type: z, json: { write: true } })], d.prototype, "validateArea", void 0), __decorate([a({ type: [Object], json: { write: true } })], d.prototype, "validationSet", void 0), __decorate([a({ type: S, json: { write: { allowNull: true, target: "outSR" } } })], d.prototype, "outSpatialReference", void 0), __decorate([r("outSpatialReference")], d.prototype, "writeOutSR", null), d = n2 = __decorate([c("esri.rest.networks.support.ValidateNetworkTopologyParameters")], d);
var u2 = d;
export {
  u2 as default
};
//# sourceMappingURL=ValidateNetworkTopologyParameters-BNDW2HG3.js.map
