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
//# sourceMappingURL=SynthesizeAssociationGeometriesParameters-TLOMMUXU.js.map
