import {
  u
} from "./chunk-CR2FSXZK.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import "./chunk-X7TQ4MJH.js";
import {
  S
} from "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import {
  n
} from "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
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
//# sourceMappingURL=ValidateNetworkTopologyParameters-4TNMOGYS.js.map
