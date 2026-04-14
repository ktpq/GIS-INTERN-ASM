import {
  i as i2
} from "./chunk-LT4ZIN24.js";
import {
  M
} from "./chunk-GH4CFGKG.js";
import {
  s as s2
} from "./chunk-XSKSFX2Z.js";
import "./chunk-N3PJ65QA.js";
import "./chunk-RL36O2XA.js";
import {
  i
} from "./chunk-THA4KIUH.js";
import "./chunk-4FZZ6VNL.js";
import {
  S
} from "./chunk-KBP4WTYN.js";
import {
  I
} from "./chunk-ISFI5GOW.js";
import "./chunk-6MANOION.js";
import "./chunk-4K54FG2U.js";
import "./chunk-37QETD6G.js";
import {
  o
} from "./chunk-2YCWXDXR.js";
import "./chunk-E6MEHWGJ.js";
import "./chunk-6CCMIJI6.js";
import "./chunk-SKNYMK4U.js";
import "./chunk-MJI3LDNH.js";
import "./chunk-FRAOLENO.js";
import "./chunk-3B4JA4VA.js";
import "./chunk-3CTDWY66.js";
import "./chunk-CAH3J23O.js";
import "./chunk-NQCEYKIE.js";
import "./chunk-VQOLBZYG.js";
import "./chunk-WLPGGM5I.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-XAOSXMFM.js";
import "./chunk-SRVOEZ6S.js";
import "./chunk-3H73AEHH.js";
import "./chunk-AJJ6USJB.js";
import "./chunk-LJCFV5JW.js";
import "./chunk-AQC7ZMZB.js";
import "./chunk-2RCOXHZQ.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-S7BA7ETJ.js";
import "./chunk-YSPDI6P3.js";
import "./chunk-YORNLQGX.js";
import "./chunk-3EE7FDFG.js";
import "./chunk-ZWIQBT42.js";
import "./chunk-IODIHRP7.js";
import "./chunk-47CFN4JI.js";
import "./chunk-EDGD22H3.js";
import "./chunk-EMNX7WTQ.js";
import "./chunk-XCLLMA7R.js";
import "./chunk-IO7CXLQO.js";
import "./chunk-UQACG6GI.js";
import "./chunk-NMDBB7YG.js";
import "./chunk-HHAFAO43.js";
import "./chunk-6MXJH5GI.js";
import "./chunk-DVZUPJLC.js";
import "./chunk-B55MAW2I.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-VITXUMTH.js";
import "./chunk-DHYKXKX3.js";
import "./chunk-OCN6JBSQ.js";
import "./chunk-IANKUBS7.js";
import "./chunk-W34UF4X5.js";
import "./chunk-UIKAL3FG.js";
import "./chunk-WEURYJAU.js";
import "./chunk-7F3DNNUI.js";
import "./chunk-KEY3YQEB.js";
import {
  l
} from "./chunk-L5CCICKP.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-62JQGYSV.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-OEXL7OFS.js";
import "./chunk-F6AS75CS.js";
import "./chunk-PM52Q5K4.js";
import "./chunk-ZWC72SJH.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-PYUJO4E2.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-FVU6XCMJ.js";
import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-6XF5AJ25.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import {
  d,
  s,
  u2 as u
} from "./chunk-PQFEWUZC.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/layers/WMSLayerView.js
var m = (m2) => {
  const n2 = m2;
  let h = class extends n2 {
    initialize() {
      this.exportImageParameters = new o({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = u(this.exportImageParameters);
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    get timeExtent() {
      return i2(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    async fetchPopupFeaturesAtLocation(e, r2) {
      const { layer: s3 } = this;
      if (!e) throw new r("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: s3 });
      const { popupEnabled: i3 } = s3;
      if (!i3) throw new r("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: i3 });
      const a2 = this.createFetchPopupFeaturesQuery(e);
      if (!a2) return [];
      const { extent: p, width: m3, height: n3, x: h2, y: u2 } = a2;
      if (!(p && m3 && n3)) throw new r("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: p, width: m3, height: n3 });
      const c2 = await s3.fetchFeatureInfo(p, m3, n3, h2, u2);
      return s(r2), c2;
    }
  };
  return __decorate([a()], h.prototype, "exportImageParameters", void 0), __decorate([a({ readOnly: true })], h.prototype, "exportImageVersion", null), __decorate([a()], h.prototype, "layer", void 0), __decorate([a({ readOnly: true })], h.prototype, "timeExtent", null), h = __decorate([c("esri.views.layers.WMSLayerView")], h), h;
};

// node_modules/@arcgis/core/views/2d/layers/WMSLayerView2D.js
var g = class extends m(i(S(I))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new s2();
  }
  supportsSpatialReference(e) {
    return this.layer.serviceSupportsSpatialReference(e);
  }
  update(e) {
    this.strategy.update(e).catch((e2) => {
      d(e2) || n.getLogger(this).error(e2);
    });
  }
  attach() {
    const { layer: e } = this, { imageMaxHeight: t, imageMaxWidth: r2 } = e;
    this.bitmapContainer = new s2(), this.container.addChild(this.bitmapContainer), this.strategy = new M({ container: this.bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: t, imageMaxWidth: r2, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false }), this.addAttachHandles(l(() => this.exportImageVersion, () => this.requestUpdate()));
  }
  detach() {
    this.strategy = u(this.strategy), this.container.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(e) {
    const { view: t, bitmapContainer: r2 } = this, { x: i3, y: a2 } = e, { spatialReference: s3 } = t;
    let o2, m2 = 0, h = 0;
    if (r2.children.some((e2) => {
      const { width: t2, height: r3, resolution: p2, x: c3, y: d3 } = e2, u2 = c3 + p2 * t2, g2 = d3 - p2 * r3;
      return i3 >= c3 && i3 <= u2 && a2 <= d3 && a2 >= g2 && (o2 = new z({ xmin: c3, ymin: g2, xmax: u2, ymax: d3, spatialReference: s3 }), m2 = t2, h = r3, true);
    }), !o2) return null;
    const p = o2.width / m2, c2 = Math.round((i3 - o2.xmin) / p), d2 = Math.round((o2.ymax - a2) / p);
    return { extent: o2, width: m2, height: h, x: c2, y: d2 };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e, t, r2, i3) {
    return this.layer.fetchImageBitmap(e, t, r2, __spreadValues({ timeExtent: this.timeExtent }, i3));
  }
};
__decorate([a()], g.prototype, "strategy", void 0), g = __decorate([c("esri.views.2d.layers.WMSLayerView2D")], g);
var y = g;
export {
  y as default
};
//# sourceMappingURL=WMSLayerView2D-FJ6IDT7L.js.map
