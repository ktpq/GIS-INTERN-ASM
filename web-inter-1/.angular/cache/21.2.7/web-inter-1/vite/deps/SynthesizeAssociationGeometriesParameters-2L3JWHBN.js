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

// node_modules/@arcgis/core/rest/networks/support/SynthesizeAssociationGeometriesParameters.js
var p;
var c2 = p = class extends n {
  static from(t) {
    return m(p, t);
  }
  constructor(t) {
    super(t), this.returnAttachmentAssociations = false, this.returnConnectivityAssociations = false, this.returnContainmentAssociations = false, this.extent = null, this.maxGeometryCount = null, this.outSpatialReference = null, this.gdbVersion = null, this.moment = null;
  }
  writeOutSR(t, o, e) {
    if (null != t) {
      const { wkid: r2, latestWkid: i, wkt: s, wkt2: n2 } = t;
      o[e] = JSON.stringify({ wkid: r2 ?? void 0, latestWkid: i ?? void 0, wkt: s ?? void 0, wkt2: n2 ?? void 0 });
    }
  }
};
__decorate([a({ type: Boolean, json: { read: { source: "attachmentAssociations" }, write: { target: "attachmentAssociations" } } })], c2.prototype, "returnAttachmentAssociations", void 0), __decorate([a({ type: Boolean, json: { read: { source: "connectivityAssociations" }, write: { target: "connectivityAssociations" } } })], c2.prototype, "returnConnectivityAssociations", void 0), __decorate([a({ type: Boolean, json: { read: { source: "containmentAssociations" }, write: { target: "containmentAssociations" } } })], c2.prototype, "returnContainmentAssociations", void 0), __decorate([a({ type: z, json: { write: true } })], c2.prototype, "extent", void 0), __decorate([a({ type: Number, json: { write: true } })], c2.prototype, "maxGeometryCount", void 0), __decorate([a({ type: S, json: { write: { target: "outSR" } } })], c2.prototype, "outSpatialReference", void 0), __decorate([r("outSpatialReference")], c2.prototype, "writeOutSR", null), __decorate([a({ type: String, json: { write: true } })], c2.prototype, "gdbVersion", void 0), __decorate([a({ type: Date, json: { type: Number, write: { writer: (t, o) => {
  o.moment = t?.getTime();
} } } })], c2.prototype, "moment", void 0), c2 = p = __decorate([c("esri.rest.networks.support.SynthesizeAssociationGeometriesParameters")], c2);
var m2 = c2;
export {
  m2 as default
};
//# sourceMappingURL=SynthesizeAssociationGeometriesParameters-2L3JWHBN.js.map
