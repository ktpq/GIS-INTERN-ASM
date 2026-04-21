import {
  a as a2
} from "./chunk-CXC3RHSL.js";
import {
  p as p2
} from "./chunk-TFOSTRWW.js";
import {
  A
} from "./chunk-W7BUCBFN.js";
import {
  m
} from "./chunk-GFBTEKTS.js";
import {
  s
} from "./chunk-UKQ72ZFJ.js";
import {
  l as l2,
  p as p3
} from "./chunk-UBZI7BAL.js";
import {
  n as n3
} from "./chunk-M7SICFO2.js";
import {
  p,
  u
} from "./chunk-PJRPIIJV.js";
import {
  n4 as n2,
  q
} from "./chunk-XWU2ZKWF.js";
import {
  l
} from "./chunk-7ZFYLJ6O.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import {
  a3 as a,
  c,
  r4 as r
} from "./chunk-7ELXYOAW.js";
import {
  e
} from "./chunk-XE7VYYSA.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/graphic/TrackGraphicOrigin.js
var o = class extends s {
  constructor(r2) {
    super(), this.type = "track", this.trackInfoProvider = r2;
  }
  get id() {
    return this.trackInfoProvider.id;
  }
  get [n2]() {
    return this.trackInfoProvider.trackInfo;
  }
};

// node_modules/@arcgis/core/layers/support/TrackPartInfo.js
var n4 = class extends l(n) {
  constructor(o2) {
    super(o2), this.labelingInfo = null, this.labelsVisible = true, this.renderer = null, this.visible = true;
  }
};
__decorate([a({ type: [A], json: { write: true } })], n4.prototype, "labelingInfo", void 0), __decorate([a(p3)], n4.prototype, "labelsVisible", void 0), __decorate([a({ types: m, json: { write: true } })], n4.prototype, "renderer", void 0), __decorate([a({ type: Boolean, json: { write: true } })], n4.prototype, "visible", void 0), n4 = __decorate([c("esri.layers.support.TrackPartInfo")], n4);

// node_modules/@arcgis/core/layers/support/TrackInfo.js
var f = class extends l(n) {
  constructor(e2) {
    super(e2), this.enabled = true, this.fields = [], this.latestObservations = new n4({ renderer: new n3({ symbol: p.clone() }) }), this.maxDisplayDuration = null, this.maxDisplayObservationsPerTrack = 0, this.popupEnabled = true, this.popupTemplate = null, this.previousObservations = new n4({ renderer: new n3({ symbol: p.clone() }) }), this.trackLines = new n4({ renderer: new n3({ symbol: u.clone() }) }), this.timeField = "startTimeField";
  }
  writeFields(e2, o2, t) {
    const r2 = e2.filter((e3) => "avg_angle" !== e3.statisticType).map((e3) => e3.toJSON());
    e(t, r2, o2);
  }
};
__decorate([a({ type: Boolean, json: { write: true } })], f.prototype, "enabled", void 0), __decorate([a({ type: [a2], json: { write: true } })], f.prototype, "fields", void 0), __decorate([r("fields")], f.prototype, "writeFields", null), __decorate([a({ type: n4, json: { write: true } })], f.prototype, "latestObservations", void 0), __decorate([a({ type: p2, json: { write: true } })], f.prototype, "maxDisplayDuration", void 0), __decorate([a({ type: Number, json: { write: true } })], f.prototype, "maxDisplayObservationsPerTrack", void 0), __decorate([a(l2)], f.prototype, "popupEnabled", void 0), __decorate([a({ type: q, json: { name: "popupInfo", write: true } })], f.prototype, "popupTemplate", void 0), __decorate([a({ type: n4, json: { write: true } })], f.prototype, "previousObservations", void 0), __decorate([a({ type: n4, json: { write: true } })], f.prototype, "trackLines", void 0), __decorate([a({ type: ["timeReceived", "startTimeField", "endTimeField"], json: { read: true, write: true } })], f.prototype, "timeField", void 0), f = __decorate([c("esri.layers.support.TrackInfo")], f);

// node_modules/@arcgis/core/layers/mixins/TrackableLayer.js
var s2 = (s3) => {
  const a3 = s3;
  let e2 = class extends a3 {
    constructor() {
      super(...arguments), this.trackGraphicOrigin = new o(this), this.trackInfo = null;
    }
  };
  return __decorate([a({ readOnly: true, clonable: false })], e2.prototype, "trackGraphicOrigin", void 0), __decorate([a({ type: f })], e2.prototype, "trackInfo", void 0), e2 = __decorate([c("esri.layers.mixins.TrackableLayer")], e2), e2;
};

export {
  s2 as s
};
//# sourceMappingURL=chunk-RYIMPTUL.js.map
