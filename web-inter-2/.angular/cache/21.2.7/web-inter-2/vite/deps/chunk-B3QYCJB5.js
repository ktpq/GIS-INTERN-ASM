import {
  s
} from "./chunk-FLG5AFOF.js";
import {
  l
} from "./chunk-NLVGGH5B.js";
import {
  v
} from "./chunk-WDPGHXN4.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import {
  a3 as a,
  c,
  o4 as o3,
  r4 as r
} from "./chunk-JM4CKTH2.js";
import {
  i,
  o as o2
} from "./chunk-SZXJF3IE.js";
import {
  o
} from "./chunk-WARIPJQI.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/symbols/support/FeatureExpressionInfo.js
var i2;
var p = i2 = class extends n {
  constructor(e) {
    super(e), this.expression = void 0, this.title = void 0;
  }
  async collectRequiredFields(e, t) {
    return v(e, t, null, this.expression);
  }
  clone() {
    return new i2({ expression: this.expression, title: this.title });
  }
  equals(e) {
    return this.expression === e.expression && this.title === e.title;
  }
};
__decorate([a({ type: String, json: { write: { isRequired: true } } })], p.prototype, "expression", void 0), __decorate([a({ type: String, json: { write: true } })], p.prototype, "title", void 0), p = i2 = __decorate([c("esri.symbols.support.FeatureExpressionInfo")], p);
var n2 = p;

// node_modules/@arcgis/core/symbols/support/ElevationInfo.js
var d = i()({ onTheGround: "on-the-ground", relativeToGround: "relative-to-ground", relativeToScene: "relative-to-scene", absoluteHeight: "absolute-height" });
var m = new o2({ foot: "feet", kilometer: "kilometers", meter: "meters", mile: "miles", "us-foot": "us-feet", yard: "yards" });
var x = class extends l(n) {
  constructor(e) {
    super(e), this.featureExpressionInfo = void 0, this.offset = null;
  }
  readFeatureExpressionInfo(e, o4) {
    return null != e ? e.expression ? e : void 0 : o4.featureExpression && 0 === o4.featureExpression.value ? { expression: "0" } : void 0;
  }
  writeFeatureExpressionInfo(e, o4, r2, t) {
    o4[r2] = e.write({}, t), "0" === e.expression && (o4.featureExpression = { value: 0 });
  }
  get mode() {
    const { offset: e, featureExpressionInfo: o4 } = this;
    return this._isOverridden("mode") ? this._get("mode") : null != e || o4 ? "relative-to-ground" : "on-the-ground";
  }
  set mode(e) {
    this._override("mode", e);
  }
  set unit(e) {
    this._set("unit", e);
  }
  write(e, o4) {
    return this.offset || this.mode || this.featureExpressionInfo || this.unit ? super.write(e, o4) : null;
  }
  equals(e) {
    return this.mode === e.mode && this.offset === e.offset && this.unit === e.unit && o(this.featureExpressionInfo, e.featureExpressionInfo);
  }
};
__decorate([a({ type: n2, json: { write: true } })], x.prototype, "featureExpressionInfo", void 0), __decorate([o3("featureExpressionInfo", ["featureExpressionInfo", "featureExpression"])], x.prototype, "readFeatureExpressionInfo", null), __decorate([r("featureExpressionInfo", { featureExpressionInfo: { type: n2 }, "featureExpression.value": { type: [0] } })], x.prototype, "writeFeatureExpressionInfo", null), __decorate([a({ type: d.apiValues, nonNullable: true, json: { type: d.jsonValues, read: d.read, write: { writer: d.write, isRequired: true } } })], x.prototype, "mode", null), __decorate([a({ type: Number, json: { write: true } })], x.prototype, "offset", void 0), __decorate([a({ type: s, json: { type: String, read: m.read, write: m.write } })], x.prototype, "unit", null), x = __decorate([c("esri.symbols.support.ElevationInfo")], x);

export {
  x
};
//# sourceMappingURL=chunk-B3QYCJB5.js.map
