import {
  M
} from "./chunk-IGP6BE54.js";
import {
  s
} from "./chunk-2YUOHXJE.js";
import "./chunk-47KLUZYI.js";
import "./chunk-D7SCNX6L.js";
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
import "./chunk-Q25A4AK6.js";
import "./chunk-ULJA4TCB.js";
import "./chunk-GLXZFAAW.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-CD6IOUFB.js";
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
import "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
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
  d
} from "./chunk-2DNVIDFH.js";
import {
  n2 as n
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/layers/BaseDynamicLayerView2D.js
var m = class extends i(S(I)) {
  update(t) {
    this._strategy.update(t).catch((t2) => {
      d(t2) || n.getLogger(this).error(t2);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new s(), this.container.addChild(this._bitmapContainer), this._strategy = new M({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(t, e, r) {
    return this.layer.fetchImageBitmap(t, e, r);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
__decorate([a()], m.prototype, "_strategy", void 0), m = __decorate([c("esri.views.2d.layers.BaseDynamicLayerView2D")], m);
var d2 = m;
export {
  d2 as default
};
//# sourceMappingURL=BaseDynamicLayerView2D-4OYEKOYP.js.map
