import {
  M
} from "./chunk-IGP6BE54.js";
import {
  s as s2
} from "./chunk-2YUOHXJE.js";
import "./chunk-47KLUZYI.js";
import "./chunk-D7SCNX6L.js";
import {
  i as i2
} from "./chunk-WIHYLSEH.js";
import {
  i
} from "./chunk-BZ5QMKJU.js";
import "./chunk-TF6FMOGZ.js";
import {
  S
} from "./chunk-LQAXBSUN.js";
import {
  I
} from "./chunk-5F5EEEPA.js";
import "./chunk-JPEJPHSH.js";
import "./chunk-LE7L5AWJ.js";
import "./chunk-7HEBNF6D.js";
import {
  o
} from "./chunk-WRR5S6PW.js";
import "./chunk-6VQYM3D7.js";
import "./chunk-UYNYIOPC.js";
import "./chunk-QOY7P5Z5.js";
import "./chunk-DGIEJ3OR.js";
import "./chunk-2ZM4WQIE.js";
import "./chunk-YOINB67K.js";
import "./chunk-ETN7N3NT.js";
import "./chunk-SPI5RLJQ.js";
import "./chunk-G7LDH7VD.js";
import "./chunk-7U4LQW5Y.js";
import "./chunk-QCEMOJ33.js";
import "./chunk-SEVWV2FY.js";
import "./chunk-WAFJ2OD3.js";
import "./chunk-ZSAPXY7T.js";
import "./chunk-Z5FUIBSR.js";
import "./chunk-2DDOBC4Y.js";
import "./chunk-OAK4TACJ.js";
import "./chunk-D4W2QISB.js";
import "./chunk-DO7AIBZH.js";
import "./chunk-NAAAH7RP.js";
import "./chunk-KHI7HSAJ.js";
import "./chunk-EVUW6QB5.js";
import "./chunk-HR7MU35Z.js";
import "./chunk-PCKGNCDO.js";
import "./chunk-GHG4ULKJ.js";
import "./chunk-AFCXMSTT.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-IDR4SUAQ.js";
import "./chunk-KJEM2HRG.js";
import "./chunk-SGJIDPMU.js";
import "./chunk-USGU6VDK.js";
import "./chunk-OCXIU36X.js";
import "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-JNCFJPS4.js";
import "./chunk-WYBA72UW.js";
import "./chunk-IRE2Q6SD.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import "./chunk-Q25A4AK6.js";
import "./chunk-ULJA4TCB.js";
import "./chunk-GLXZFAAW.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import {
  l
} from "./chunk-CD6IOUFB.js";
import "./chunk-B4Y3SDRP.js";
import "./chunk-DOVHXPQB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-4UWOVR5Y.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-TT3WF5RA.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-S3BACLSK.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import {
  d,
  s,
  u2 as u
} from "./chunk-2DNVIDFH.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=WMSLayerView2D-N3Z2JJB3.js.map
