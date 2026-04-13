import {
  M,
  O,
  R,
  T,
  z
} from "./chunk-6JFDD4TI.js";
import {
  K
} from "./chunk-XI2UTA6T.js";
import {
  r
} from "./chunk-MGJRQQGJ.js";
import {
  x
} from "./chunk-GPODMP62.js";
import {
  c as c2
} from "./chunk-OU7IBCXM.js";
import {
  i
} from "./chunk-ONXOVX4W.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/interactive/tooltip/infos/TooltipInfoWithCoordinates.js
var g = (g2) => {
  const d = g2;
  let m = class extends d {
    constructor() {
      super(...arguments), this.longitude = O(), this.latitude = T(), this.x = R(), this.y = z(), this.elevation = M(), this.geographic = false;
    }
    get effectiveX() {
      return this.geographic ? this.longitude : this.x;
    }
    get effectiveY() {
      return this.geographic ? this.latitude : this.y;
    }
    get key() {
      return { longitude: this.longitude.actual, latitude: this.latitude.actual, x: this.x.actual, y: this.y.actual, elevation: this.elevation.actual, geographic: this.geographic };
    }
    setLocationFromPoint(t, i2 = t?.spatialReference) {
      if (this.geographic = !!i2 && r(i2), null == t) return this._setActualLonLat(null, null), void this._setActualXY(null, null);
      if (this.geographic) {
        const e = i(t, f);
        this._setActualLonLat(K(e?.[0]), K(e?.[1]));
      } else this._setActualXY(c2(t.x), c2(t.y));
    }
    setElevationFromPoint(t, e) {
      const { elevation: i2 } = this;
      i2.actual = x(t), i2.visible = e.hasZ, i2.readOnly = false, i2.showAsZ = true;
    }
    _setActualLonLat(t, e) {
      this.longitude.actual = t, this.latitude.actual = e;
    }
    _setActualXY(t, e) {
      this.x.actual = t, this.y.actual = e;
    }
  };
  return __decorate([a()], m.prototype, "geographic", void 0), __decorate([a()], m.prototype, "effectiveX", null), __decorate([a()], m.prototype, "effectiveY", null), __decorate([a()], m.prototype, "key", null), m = __decorate([c("esri.views.interactive.tooltip.infos.TooltipInfoWithCoordinates")], m), m;
};
var f = [0, 0];

export {
  g
};
//# sourceMappingURL=chunk-FSFNSAUB.js.map
