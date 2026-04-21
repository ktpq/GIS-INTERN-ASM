import {
  u
} from "./chunk-DFNEH2UF.js";
import {
  z2 as z
} from "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import {
  S
} from "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-MCBUVFBI.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
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
//# sourceMappingURL=ValidateNetworkTopologyParameters-VGH2AI75.js.map
