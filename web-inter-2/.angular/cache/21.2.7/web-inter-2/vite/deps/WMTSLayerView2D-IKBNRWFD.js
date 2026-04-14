import {
  n as n2,
  r as r2
} from "./chunk-6QTDT4NY.js";
import "./chunk-M6X4VILT.js";
import "./chunk-FBRVQN23.js";
import {
  i
} from "./chunk-LRT6SH3M.js";
import {
  S
} from "./chunk-DUYAG3MF.js";
import {
  I
} from "./chunk-55LMYHO2.js";
import "./chunk-6EI74O3Z.js";
import "./chunk-VD5IUEGW.js";
import "./chunk-SG6TQSIU.js";
import "./chunk-6BM7NLJV.js";
import "./chunk-6CIU5QP6.js";
import "./chunk-QH6MYNRN.js";
import "./chunk-YJDCNXCC.js";
import "./chunk-HKJEWSCU.js";
import "./chunk-L7NRTQ6W.js";
import "./chunk-YCBJHP4A.js";
import "./chunk-WBF67J46.js";
import "./chunk-ORNJGVFN.js";
import "./chunk-ZAO3VJN3.js";
import "./chunk-EKP7MDUL.js";
import "./chunk-V3SSXFIC.js";
import "./chunk-WFI3NR7T.js";
import "./chunk-OM7G3C2G.js";
import "./chunk-3CTDWY66.js";
import "./chunk-APMZAVZP.js";
import "./chunk-NQCEYKIE.js";
import "./chunk-VQOLBZYG.js";
import "./chunk-D2Z2HLWL.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-BBD6674H.js";
import "./chunk-QAQFE6RT.js";
import "./chunk-LWSMHEIS.js";
import "./chunk-2H4UKOQP.js";
import "./chunk-AVF3K4T4.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-T7SNP64P.js";
import {
  a as a2,
  r
} from "./chunk-WGSJFVNV.js";
import "./chunk-C4O53FIB.js";
import {
  h
} from "./chunk-G7J4V5XH.js";
import "./chunk-JTTFG3NZ.js";
import "./chunk-JXCCENBV.js";
import {
  e
} from "./chunk-RDVONU5Y.js";
import "./chunk-YORNLQGX.js";
import "./chunk-3EE7FDFG.js";
import "./chunk-KI7SNQFW.js";
import {
  p
} from "./chunk-XA3Z7BRX.js";
import "./chunk-UUE5XGVT.js";
import "./chunk-IODIHRP7.js";
import "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import "./chunk-JTZ7OXNS.js";
import "./chunk-HY6H36LC.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-5L27TA3I.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-ZVRAKVBJ.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-PXICZPXV.js";
import "./chunk-2JGVYNV6.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-DVLEZ3TT.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
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
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import {
  T
} from "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
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
  d
} from "./chunk-WARIPJQI.js";
import {
  n2 as n
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/layers/WMTSLayerView2D.js
var y = [0, 0];
var _ = class extends i(r2(S(I))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  get tileMatrixSet() {
    const { activeLayer: e2 } = this.layer, { tileMatrixSet: t } = e2;
    if (t && T(t.tileInfo?.spatialReference, this.view.spatialReference)) return t;
    const i2 = this._getTileMatrixSetBySpatialReference(e2);
    return i2 && i2.id !== e2.tileMatrixSetId ? (e2.tileMatrixSetId = i2.id, i2) : null;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
  }
  attach() {
    const e2 = this.tileMatrixSet?.tileInfo;
    e2 && (this._tileInfoView = new h(e2), this._fetchQueue = new a2({ tileInfoView: this._tileInfoView, concurrency: 16, process: (e3, t) => this.fetchTile(e3, t), scheduler: this.scheduler, priority: p.MAPVIEW_FETCH_QUEUE }), this._tileStrategy = new r({ cachePolicy: "keep", resampling: true, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), this.addAttachHandles(this._updatingHandles.add(() => [this.layer?.activeLayer?.styleId, this.tileMatrixSet], () => this.doRefresh())), super.attach());
  }
  detach() {
    super.detach(), this._tileStrategy?.destroy(), this._fetchQueue?.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(e2) {
    return this.layer.activeLayer.tileMatrixSets?.some((t) => T(t.tileInfo?.spatialReference, e2)) ?? false;
  }
  async doRefresh() {
    if (this.attached) {
      if (this.suspended) return this._tileStrategy.clear(), void this.requestUpdate();
      this._fetchQueue.reset(), this._tileStrategy.refresh((e2) => this._updatingHandles.addPromise(this._enqueueTileFetch(e2)));
    }
  }
  acquireTile(e2) {
    const t = this._bitmapView.createTile(e2), i2 = t.bitmap;
    return [i2.x, i2.y] = this._tileInfoView.getTileCoords(y, t.key), i2.resolution = this._tileInfoView.getTileResolution(t.key), [i2.width, i2.height] = this._tileInfoView.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  async fetchTile(e2, t = {}) {
    const s = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: r3, resamplingLevel: a3 = 0 } = t;
    if (!s) return this._fetchImage(e2, r3);
    const l = new e(0, 0, 0, 0);
    let h2;
    try {
      await s.fetchAvailabilityUpsample(e2.level, e2.row, e2.col, l, { signal: r3 }), h2 = await this._fetchImage(l, r3);
    } catch (n3) {
      if (d(n3)) throw n3;
      if (a3 < 3) {
        const i2 = this._tileInfoView.getTileParentId(e2.id);
        if (i2) {
          const s2 = new e(i2), r4 = await this.fetchTile(s2, __spreadProps(__spreadValues({}, t), { resamplingLevel: a3 + 1 }));
          return n2(this._tileInfoView, r4, s2, e2);
        }
      }
      throw n3;
    }
    return n2(this._tileInfoView, h2, l, e2);
  }
  canResume() {
    const e2 = super.canResume();
    return e2 ? null !== this.tileMatrixSet : e2;
  }
  async _enqueueTileFetch(e2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t = await this._fetchQueue.push(e2.key);
        e2.bitmap.source = t, e2.bitmap.width = this._tileInfoView.size[0], e2.bitmap.height = this._tileInfoView.size[1], e2.once("attach", () => this.requestUpdate());
      } catch (s) {
        d(s) || n.getLogger(this).error(s);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e2, t) {
    return this.layer.fetchImageBitmapTile(e2.level, e2.row, e2.col, { signal: t });
  }
  _getTileMatrixSetBySpatialReference(e2) {
    return e2.tileMatrixSets?.find((e3) => T(e3.tileInfo?.spatialReference, this.view.spatialReference));
  }
};
__decorate([a({ readOnly: true })], _.prototype, "tileMatrixSet", null), _ = __decorate([c("esri.views.2d.layers.WMTSLayerView2D")], _);
var w = _;
export {
  w as default
};
//# sourceMappingURL=WMTSLayerView2D-IKBNRWFD.js.map
