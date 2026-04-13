import {
  C,
  m2 as m
} from "./chunk-2F6BRQJJ.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  n2 as n
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var l = (l2) => {
  const p = l2;
  let u = class extends p {
    get title() {
      if (this._get("title") && "defaults" !== this.originOf("title")) return this._get("title");
      if (this.url) {
        const t = m(this.url);
        if (t?.title) return t.title;
      }
      return this._get("title") || "";
    }
    set title(t) {
      this._set("title", t);
    }
    set url(t) {
      this._set("url", C(t, n.getLogger(this)));
    }
  };
  return __decorate([a()], u.prototype, "title", null), __decorate([a({ type: String })], u.prototype, "url", null), u = __decorate([c("esri.layers.mixins.ArcGISService")], u), u;
};

export {
  l
};
//# sourceMappingURL=chunk-MK62RM4E.js.map
