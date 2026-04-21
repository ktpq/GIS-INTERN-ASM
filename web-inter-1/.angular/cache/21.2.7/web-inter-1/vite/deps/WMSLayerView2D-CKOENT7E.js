import {
  M
} from "./chunk-ZA2WCCBW.js";
import {
  s as s2
} from "./chunk-JJHCUVW5.js";
import "./chunk-F5XCEIBQ.js";
import "./chunk-AMP4TCY4.js";
import {
  i as i2
} from "./chunk-CBOEIKQZ.js";
import {
  i
} from "./chunk-EVFM4CNX.js";
import "./chunk-4QIBPFL3.js";
import {
  S
} from "./chunk-ODLEE4BR.js";
import {
  I
} from "./chunk-5KV73MIO.js";
import "./chunk-3K5KLKJL.js";
import "./chunk-QYKDJLGK.js";
import "./chunk-3CNOFERI.js";
import "./chunk-XQEXCDWC.js";
import {
  o
} from "./chunk-FO7Y7JQA.js";
import "./chunk-E6MEHWGJ.js";
import "./chunk-P4A4DSDY.js";
import "./chunk-KQNX6YU5.js";
import "./chunk-KQFKIJCG.js";
import "./chunk-ADPYU6GX.js";
import "./chunk-NUKEMAQ3.js";
import "./chunk-3CTDWY66.js";
import "./chunk-XPFTEEP5.js";
import "./chunk-NIOT37JE.js";
import "./chunk-VQOLBZYG.js";
import "./chunk-XKXL36MC.js";
import "./chunk-V2SUAMGW.js";
import "./chunk-RVILGR2W.js";
import "./chunk-MZZNMZJG.js";
import "./chunk-KJSHXJQO.js";
import "./chunk-A6Q34YGS.js";
import "./chunk-EKQLPN2Z.js";
import "./chunk-YORNLQGX.js";
import "./chunk-3EE7FDFG.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-IODIHRP7.js";
import "./chunk-RUNHW2N4.js";
import "./chunk-KRGMLSA4.js";
import "./chunk-KY6VK7AR.js";
import "./chunk-TXF5FFQH.js";
import "./chunk-47CFN4JI.js";
import "./chunk-55ANZSLC.js";
import "./chunk-GAFIIT3P.js";
import "./chunk-SUVDIL6O.js";
import "./chunk-ES2UPZO6.js";
import "./chunk-ZKCON565.js";
import "./chunk-OUD4F5KK.js";
import "./chunk-2CBDH3OZ.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-AP2NAWWU.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import "./chunk-U54DMEX7.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-3QRB5MAM.js";
import "./chunk-3Y2ZRVZS.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-W34UF4X5.js";
import "./chunk-K5YEU7YE.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MZFPTE7Q.js";
import "./chunk-U3RH7VGM.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-SWZYRYDU.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-HIVGPE4F.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import {
  z2 as z
} from "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import {
  l
} from "./chunk-6CYBR6FP.js";
import "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import {
  d,
  s,
  u2 as u
} from "./chunk-2KP24SU5.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=WMSLayerView2D-CKOENT7E.js.map
