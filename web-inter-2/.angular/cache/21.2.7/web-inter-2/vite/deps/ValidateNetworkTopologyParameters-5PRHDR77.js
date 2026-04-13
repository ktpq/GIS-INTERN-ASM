import {
  u
} from "./chunk-IC4VMYLB.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import "./chunk-2F6BRQJJ.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
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
//# sourceMappingURL=ValidateNetworkTopologyParameters-5PRHDR77.js.map
