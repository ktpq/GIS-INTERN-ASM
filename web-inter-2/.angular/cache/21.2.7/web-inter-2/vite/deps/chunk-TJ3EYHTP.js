import {
  s as s2
} from "./chunk-PFVHU3CK.js";
import {
  r as r2,
  s
} from "./chunk-X7HOEUCF.js";
import {
  p
} from "./chunk-KFUUHWZV.js";
import {
  y3 as y
} from "./chunk-N7K4YSHO.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import {
  a3 as a,
  c,
  o4 as o,
  r4 as r
} from "./chunk-XCGM4D6U.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/rest/networks/support/Association.js
var p2 = class extends n {
  constructor(t) {
    super(t), this.globalId = null, this.associationType = null, this.fromNetworkElement = null, this.toNetworkElement = null, this.geometry = null, this.errorMessage = null, this.percentAlong = null, this.errorCode = null, this.isContentVisible = null, this.status = null;
  }
  readFromNetworkElement(t, o2) {
    return o2.fromFirstUnit || o2.fromLastUnit ? new s2({ globalId: o2.fromGlobalId, networkSourceId: o2.fromNetworkSourceId, firstUnit: o2.fromFirstUnit, lastUnit: o2.fromLastUnit }) : new p({ globalId: o2.fromGlobalId, networkSourceId: o2.fromNetworkSourceId, terminalId: o2.fromTerminalId });
  }
  writeFromNetworkElement(t, o2) {
    if (t && (o2.fromGlobalId = t.globalId, o2.fromNetworkSourceId = t.networkSourceId, o2.fromTerminalId = t.terminalId, "telecomNetworkElement" === t.type)) {
      const e = t;
      o2.fromFirstUnit = e.firstUnit, o2.fromLastUnit = e.lastUnit;
    }
  }
  readToNetworkElement(t, o2) {
    return o2.toFirstUnit || o2.toLastUnit ? new s2({ globalId: o2.toGlobalId, networkSourceId: o2.toNetworkSourceId, firstUnit: o2.toFirstUnit, lastUnit: o2.toLastUnit }) : new p({ globalId: o2.toGlobalId, networkSourceId: o2.toNetworkSourceId, terminalId: o2.toTerminalId });
  }
  writeToNetworkElement(t, o2) {
    if (t && (o2.toGlobalId = t.globalId, o2.toNetworkSourceId = t.networkSourceId, o2.toTerminalId = t.terminalId, "telecomNetworkElement" === t.type)) {
      const e = t;
      o2.toFirstUnit = e.firstUnit, o2.toLastUnit = e.lastUnit;
    }
  }
  equals(t) {
    if (this.globalId === r2 && t.globalId === r2) {
      let o2 = function(t2, o3) {
        return t2.networkSourceId === o3.networkSourceId && t2.globalId === o3.globalId && t2.terminalId === o3.terminalId && t2.firstUnit === o3.firstUnit && t2.lastUnit === o3.lastUnit;
      };
      const e = this.fromNetworkElement, r3 = this.toNetworkElement, l = t.fromNetworkElement, n2 = t.toNetworkElement, s3 = o2(e, l), m = o2(r3, n2);
      return s3 && m && this.associationType === t.associationType;
    }
    return null != this.globalId && null != t.globalId && this.globalId === t.globalId;
  }
};
__decorate([a({ type: String, json: { write: true } })], p2.prototype, "globalId", void 0), __decorate([a({ type: s.apiValues, json: { type: s.jsonValues, read: s.read, write: s.write } })], p2.prototype, "associationType", void 0), __decorate([a({ type: p, json: { write: { target: { fromGlobalId: { type: String }, fromNetworkSourceId: { type: Number }, fromTerminalId: { type: Number }, fromFirstUnit: { type: Number }, fromLastUnit: { type: Number } } }, read: { source: ["fromGlobalId", "fromNetworkSourceId", "fromTerminalId", "fromFirstUnit", "fromLastUnit"] } } })], p2.prototype, "fromNetworkElement", void 0), __decorate([o("fromNetworkElement")], p2.prototype, "readFromNetworkElement", null), __decorate([r("fromNetworkElement")], p2.prototype, "writeFromNetworkElement", null), __decorate([a({ type: p, json: { write: { target: { toGlobalId: { type: String }, toNetworkSourceId: { type: Number }, toTerminalId: { type: Number }, toFirstUnit: { type: Number }, toLastUnit: { type: Number } } }, read: { source: ["toGlobalId", "toNetworkSourceId", "toTerminalId", "toFirstUnit", "toLastUnit"] } } })], p2.prototype, "toNetworkElement", void 0), __decorate([o("toNetworkElement")], p2.prototype, "readToNetworkElement", null), __decorate([r("toNetworkElement")], p2.prototype, "writeToNetworkElement", null), __decorate([a({ type: y, json: { write: true } })], p2.prototype, "geometry", void 0), __decorate([a({ type: String, json: { write: true } })], p2.prototype, "errorMessage", void 0), __decorate([a({ type: Number, json: { write: true } })], p2.prototype, "percentAlong", void 0), __decorate([a({ type: Number, json: { write: true } })], p2.prototype, "errorCode", void 0), __decorate([a({ type: Boolean, json: { write: true } })], p2.prototype, "isContentVisible", void 0), __decorate([a({ type: Number, json: { write: true } })], p2.prototype, "status", void 0), p2 = __decorate([c("esri.rest.networks.support.Association")], p2);
var u = p2;

export {
  u
};
//# sourceMappingURL=chunk-TJ3EYHTP.js.map
