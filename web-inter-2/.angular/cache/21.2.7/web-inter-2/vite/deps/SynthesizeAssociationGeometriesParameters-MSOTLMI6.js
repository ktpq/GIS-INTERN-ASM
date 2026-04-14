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
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
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
//# sourceMappingURL=SynthesizeAssociationGeometriesParameters-MSOTLMI6.js.map
