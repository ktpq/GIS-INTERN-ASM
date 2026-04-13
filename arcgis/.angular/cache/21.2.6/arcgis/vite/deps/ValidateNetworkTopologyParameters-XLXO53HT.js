import {
  u
} from "./chunk-Y6DLVMLW.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import {
  n
} from "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
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
//# sourceMappingURL=ValidateNetworkTopologyParameters-XLXO53HT.js.map
