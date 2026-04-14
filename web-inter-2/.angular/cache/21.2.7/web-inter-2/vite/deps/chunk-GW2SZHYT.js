import {
  ie,
  ne
} from "./chunk-JC2AZ2NN.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import {
  a3 as a,
  c,
  o4 as o,
  r4 as r,
  t2 as t
} from "./chunk-XCGM4D6U.js";
import {
  i
} from "./chunk-TIEYANBR.js";
import {
  S
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/HeightModelInfo.js
var c2;
var u = i()({ orthometric: "gravity-related-height", gravity_related_height: "gravity-related-height", ellipsoidal: "ellipsoidal" });
var p = u.jsonValues.slice();
S(p, "orthometric");
var g = i()({ meter: "meters", foot: "feet", "us-foot": "us-feet", "clarke-foot": "clarke-feet", "clarke-yard": "clarke-yards", "clarke-link": "clarke-links", "sears-yard": "sears-yards", "sears-foot": "sears-feet", "sears-chain": "sears-chains", "benoit-1895-b-chain": "benoit-1895-b-chains", "indian-yard": "indian-yards", "indian-1937-yard": "indian-1937-yards", "gold-coast-foot": "gold-coast-feet", "sears-1922-truncated-chain": "sears-1922-truncated-chains", "50-kilometers": "50-kilometers", "150-kilometers": "150-kilometers" });
var m = c2 = class extends n {
  constructor(e) {
    super(e), this.heightModel = "gravity-related-height", this.heightUnit = "meters", this.vertCRS = null;
  }
  writeHeightModel(e, t2, r2) {
    return u.write(e, t2, r2);
  }
  readHeightModel(e, t2, r2) {
    const i2 = u.read(e);
    return i2 || (r2?.messages && r2.messages.push(f(e, { context: r2 })), null);
  }
  readHeightUnit(e, t2, r2) {
    const i2 = g.read(e);
    return i2 || (r2?.messages && r2.messages.push(y(e, { context: r2 })), null);
  }
  readHeightUnitService(e, t2, r2) {
    const i2 = ie(e) || g.read(e);
    return i2 || (r2?.messages && r2.messages.push(y(e, { context: r2 })), null);
  }
  readVertCRS(e, t2) {
    return t2.vertCRS || t2.ellipsoid || t2.geoid;
  }
  clone() {
    return new c2({ heightModel: this.heightModel, heightUnit: this.heightUnit, vertCRS: this.vertCRS });
  }
  equals(e) {
    return !!e && (this === e || this.heightModel === e.heightModel && this.heightUnit === e.heightUnit && this.vertCRS === e.vertCRS);
  }
  static deriveUnitFromSR(e, t2) {
    const r2 = ne(t2);
    return new c2({ heightModel: e.heightModel, heightUnit: r2 ?? void 0, vertCRS: e.vertCRS });
  }
  write(e, t2) {
    return t2 = __spreadValues({ origin: "web-scene" }, t2), super.write(e, t2);
  }
  static fromJSON(e) {
    if (!e) return null;
    const t2 = new c2();
    return t2.read(e, { origin: "web-scene" }), t2;
  }
};
function y(e, t2) {
  return new t("height-unit:unsupported", `Height unit of value '${e}' is not supported`, t2);
}
function f(e, t2) {
  return new t("height-model:unsupported", `Height model of value '${e}' is not supported`, t2);
}
__decorate([a({ type: u.apiValues, constructOnly: true, json: { origins: { "web-scene": { type: p, default: "ellipsoidal", write: { isRequired: true } } } } })], m.prototype, "heightModel", void 0), __decorate([r("web-scene", "heightModel")], m.prototype, "writeHeightModel", null), __decorate([o(["web-scene", "service"], "heightModel")], m.prototype, "readHeightModel", null), __decorate([a({ type: g.apiValues, constructOnly: true, json: { origins: { "web-scene": { type: g.jsonValues, write: { writer: g.write, isRequired: true } } } } })], m.prototype, "heightUnit", void 0), __decorate([o("web-scene", "heightUnit")], m.prototype, "readHeightUnit", null), __decorate([o("service", "heightUnit")], m.prototype, "readHeightUnitService", null), __decorate([a({ type: String, constructOnly: true, json: { origins: { "web-scene": { write: true } } } })], m.prototype, "vertCRS", void 0), __decorate([o("service", "vertCRS", ["vertCRS", "ellipsoid", "geoid"])], m.prototype, "readVertCRS", null), m = c2 = __decorate([c("esri.geometry.HeightModelInfo")], m);

export {
  m
};
//# sourceMappingURL=chunk-GW2SZHYT.js.map
