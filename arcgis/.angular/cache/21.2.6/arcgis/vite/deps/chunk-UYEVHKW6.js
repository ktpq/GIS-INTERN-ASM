import {
  n
} from "./chunk-5EUDKAG7.js";
import {
  a3 as a,
  c,
  r3 as r
} from "./chunk-LV7AMIAU.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/3d/environment/CloudyWeather.js
var c2;
var i = c2 = class extends n {
  constructor(o) {
    super(o), this.type = "cloudy", this.cloudCover = 0.5;
  }
  clone() {
    return new c2({ cloudCover: this.cloudCover });
  }
};
__decorate([r({ cloudy: "cloudy" }), a({ json: { write: { isRequired: true } } })], i.prototype, "type", void 0), __decorate([a({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], i.prototype, "cloudCover", void 0), i = c2 = __decorate([c("esri.views.3d.environment.CloudyWeather")], i);
var p = i;

// node_modules/@arcgis/core/views/3d/environment/FoggyWeather.js
var n2;
var i2 = n2 = class extends n {
  constructor(o) {
    super(o), this.type = "foggy", this.fogStrength = 0.5;
  }
  clone() {
    return new n2({ fogStrength: this.fogStrength });
  }
};
__decorate([r({ foggy: "foggy" }), a({ json: { write: { isRequired: true } } })], i2.prototype, "type", void 0), __decorate([a({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], i2.prototype, "fogStrength", void 0), i2 = n2 = __decorate([c("esri.views.3d.environment.FoggyWeather")], i2);
var p2 = i2;

// node_modules/@arcgis/core/views/3d/environment/RainyWeather.js
var n3;
var p3 = n3 = class extends n {
  constructor(o) {
    super(o), this.type = "rainy", this.cloudCover = 0.5, this.precipitation = 0.5;
  }
  clone() {
    return new n3({ cloudCover: this.cloudCover, precipitation: this.precipitation });
  }
};
__decorate([r({ rainy: "rainy" }), a({ json: { write: { isRequired: true } } })], p3.prototype, "type", void 0), __decorate([a({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], p3.prototype, "cloudCover", void 0), __decorate([a({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], p3.prototype, "precipitation", void 0), p3 = n3 = __decorate([c("esri.views.3d.environment.RainyWeather")], p3);
var s = p3;

// node_modules/@arcgis/core/views/3d/environment/SnowyWeather.js
var s2;
var n4 = s2 = class extends n {
  constructor(o) {
    super(o), this.type = "snowy", this.cloudCover = 0.5, this.precipitation = 0.5, this.snowCover = "disabled";
  }
  clone() {
    return new s2({ cloudCover: this.cloudCover, precipitation: this.precipitation, snowCover: this.snowCover });
  }
};
__decorate([r({ snowy: "snowy" }), a({ json: { write: { isRequired: true } } })], n4.prototype, "type", void 0), __decorate([a({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], n4.prototype, "cloudCover", void 0), __decorate([a({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], n4.prototype, "precipitation", void 0), __decorate([a({ type: ["enabled", "disabled"], nonNullable: true, json: { write: true } })], n4.prototype, "snowCover", void 0), n4 = s2 = __decorate([c("esri.views.3d.environment.SnowyWeather")], n4);
var p4 = n4;

// node_modules/@arcgis/core/views/3d/environment/SunnyWeather.js
var n5;
var i3 = n5 = class extends n {
  constructor(o) {
    super(o), this.type = "sunny", this.cloudCover = 0.5;
  }
  clone() {
    return new n5({ cloudCover: this.cloudCover });
  }
};
__decorate([r({ sunny: "sunny" }), a({ json: { write: { isRequired: true } } })], i3.prototype, "type", void 0), __decorate([a({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], i3.prototype, "cloudCover", void 0), i3 = n5 = __decorate([c("esri.views.3d.environment.SunnyWeather")], i3);
var p5 = i3;

// node_modules/@arcgis/core/views/3d/environment/weather.js
var n6 = { key: "type", base: p5, typeMap: { sunny: p5, cloudy: p, rainy: s, snowy: p4, foggy: p2 } };
var a2 = Object.keys(n6.typeMap);
var p6 = 1e4;
var i4 = 1e5;

export {
  p6 as p,
  i4 as i
};
//# sourceMappingURL=chunk-UYEVHKW6.js.map
