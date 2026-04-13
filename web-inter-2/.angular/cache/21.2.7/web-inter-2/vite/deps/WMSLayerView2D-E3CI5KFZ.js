import {
  M
} from "./chunk-SVOHOXAI.js";
import {
  s as s2
} from "./chunk-QLM7B7H6.js";
import {
  i as i2
} from "./chunk-6PXTB3QA.js";
import "./chunk-M6X4VILT.js";
import "./chunk-FBRVQN23.js";
import {
  i
} from "./chunk-LRT6SH3M.js";
import {
  S
} from "./chunk-CK3MKKLI.js";
import {
  I
} from "./chunk-POZP57IY.js";
import "./chunk-SG6TQSIU.js";
import "./chunk-6BM7NLJV.js";
import "./chunk-YJDCNXCC.js";
import "./chunk-HKJEWSCU.js";
import {
  o
} from "./chunk-RITSGX7C.js";
import "./chunk-E6MEHWGJ.js";
import "./chunk-L7NRTQ6W.js";
import "./chunk-YCBJHP4A.js";
import "./chunk-WBF67J46.js";
import "./chunk-TVZ2UN2Q.js";
import "./chunk-FXR4KJCD.js";
import "./chunk-3CTDWY66.js";
import "./chunk-RNSOC4NC.js";
import "./chunk-NQCEYKIE.js";
import "./chunk-VQOLBZYG.js";
import "./chunk-D2Z2HLWL.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-V4VVCJGU.js";
import "./chunk-BBD6674H.js";
import "./chunk-AE5T726W.js";
import "./chunk-LWSMHEIS.js";
import "./chunk-2H4UKOQP.js";
import "./chunk-AVF3K4T4.js";
import "./chunk-T7SNP64P.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-G7J4V5XH.js";
import "./chunk-RDVONU5Y.js";
import "./chunk-YORNLQGX.js";
import "./chunk-7EZH3JAM.js";
import "./chunk-3EE7FDFG.js";
import "./chunk-KI7SNQFW.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-IODIHRP7.js";
import "./chunk-47CFN4JI.js";
import "./chunk-MYLK6AZ6.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-ZVRAKVBJ.js";
import "./chunk-IQZJUZUB.js";
import "./chunk-TRC3LPOE.js";
import "./chunk-23U7MZU6.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-JTZ7OXNS.js";
import "./chunk-737A5DQP.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-BJNDU6LU.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import {
  l
} from "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-IO7CXLQO.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-PWZ6VVYN.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import "./chunk-2F6BRQJJ.js";
import "./chunk-EKLJIMB3.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import {
  d,
  s,
  u
} from "./chunk-WARIPJQI.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6I475YAP.js";
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
//# sourceMappingURL=WMSLayerView2D-E3CI5KFZ.js.map
