import {
  e
} from "./chunk-DIKWLDUQ.js";
import {
  m as m2
} from "./chunk-EZOPIZCP.js";
import {
  m
} from "./chunk-MUE6QDRN.js";
import {
  l as l2
} from "./chunk-7ZFYLJ6O.js";
import {
  l
} from "./chunk-473S3KQM.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import {
  a3 as a,
  c,
  o4 as o,
  r3 as r,
  r4 as r2
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/time/TimeInterval.js
var p = class extends l2(n) {
  constructor(o2) {
    super(o2), this.unit = "milliseconds", this.value = 0;
  }
  toMilliseconds() {
    return m(this.value, this.unit, "milliseconds");
  }
};
__decorate([r(e, { nonNullable: true })], p.prototype, "unit", void 0), __decorate([a({ type: Number, json: { write: true }, nonNullable: true })], p.prototype, "value", void 0), p = __decorate([c("esri.time.TimeInterval")], p);

// node_modules/@arcgis/core/layers/support/TimeInfo.js
function p2(t, e2) {
  return p.fromJSON({ value: t, unit: e2 });
}
var u = class extends l2(n) {
  constructor(t) {
    super(t), this.cumulative = false, this.endField = null, this.fullTimeExtent = null, this.hasLiveData = false, this.interval = null, this.startField = null, this.timeZone = null, this.trackIdField = null, this.useTime = true, this.stops = null;
  }
  readFullTimeExtent(t, e2) {
    return e2.timeExtent && Array.isArray(e2.timeExtent) && 2 === e2.timeExtent.length ? m2.fromArray(e2.timeExtent) : null;
  }
  writeFullTimeExtent(t, e2) {
    null != t?.start && null != t.end ? e2.timeExtent = t.toArray() : e2.timeExtent = null;
  }
  readInterval(t, e2) {
    return e2.timeInterval && e2.timeIntervalUnits ? p2(e2.timeInterval, e2.timeIntervalUnits) : e2.defaultTimeInterval && e2.defaultTimeIntervalUnits ? p2(e2.defaultTimeInterval, e2.defaultTimeIntervalUnits) : null;
  }
  writeInterval(t, e2) {
    e2.timeInterval = t?.toJSON().value ?? null, e2.timeIntervalUnits = t?.toJSON().unit ?? null;
  }
};
__decorate([a({ type: Boolean, json: { name: "exportOptions.timeDataCumulative", write: true } })], u.prototype, "cumulative", void 0), __decorate([a({ type: String, json: { name: "endTimeField", write: { enabled: true, allowNull: true } } })], u.prototype, "endField", void 0), __decorate([a({ type: m2, json: { write: { enabled: true, allowNull: true } } })], u.prototype, "fullTimeExtent", void 0), __decorate([o("fullTimeExtent", ["timeExtent"])], u.prototype, "readFullTimeExtent", null), __decorate([r2("fullTimeExtent")], u.prototype, "writeFullTimeExtent", null), __decorate([a({ type: Boolean, json: { write: true } })], u.prototype, "hasLiveData", void 0), __decorate([a({ type: p, json: { write: { enabled: true, allowNull: true } } })], u.prototype, "interval", void 0), __decorate([o("interval", ["timeInterval", "timeIntervalUnits", "defaultTimeInterval", "defaultTimeIntervalUnits"])], u.prototype, "readInterval", null), __decorate([r2("interval")], u.prototype, "writeInterval", null), __decorate([a({ type: String, json: { name: "startTimeField", write: { enabled: true, allowNull: true } } })], u.prototype, "startField", void 0), __decorate([a(l("timeReference", true))], u.prototype, "timeZone", void 0), __decorate([a({ type: String, json: { write: { enabled: true, allowNull: true } } })], u.prototype, "trackIdField", void 0), __decorate([a({ type: Boolean, json: { name: "exportOptions.useTime", write: true } })], u.prototype, "useTime", void 0), __decorate([a({ type: [Date], json: { read: false } })], u.prototype, "stops", void 0), u = __decorate([c("esri.layers.support.TimeInfo")], u);

export {
  p,
  u
};
//# sourceMappingURL=chunk-TFOSTRWW.js.map
