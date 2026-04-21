import {
  r as r2
} from "./chunk-L6ET72DF.js";
import "./chunk-64GACA3E.js";
import "./chunk-G2AJQACY.js";
import "./chunk-DA25W2D5.js";
import "./chunk-7YICSANW.js";
import "./chunk-SQXGMFK2.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-RTVKY37F.js";
import {
  s
} from "./chunk-2KP24SU5.js";
import {
  r3 as r
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/PanoramicViewer/support/PanoramicMeshManager.js
var o = class _o {
  constructor() {
    this._connection = null, this.convertPixelBlockToImageData = async (e) => {
      if (!this._connection) throw new r("panoramic-mesh-manager:convertPixelBlockToImageData", "Panoramic mesh manager is not loaded");
      const n = e.clone(), { pixelBlock: o2, transferList: i } = n.getTransferableObject();
      return await this._connection.invoke("convertPixelBlockToImageData", o2, { transferList: i });
    }, this.getFacesWithVertexAttributes = async (e) => {
      if (!this._connection) throw new r("panoramic-mesh-manager:getFacesWithVertexAttributes", "Panoramic mesh manager is not loaded");
      return await this._connection.invoke("getFacesWithVertexAttributes", e);
    };
  }
  destroy() {
    this._connection?.close();
  }
  async _startWorker(t) {
    this._connection = await r2("PanoramicMeshWorker", t);
  }
  static getInstance() {
    return _o._instance || (_o._instance = new _o()), _o._instance;
  }
  async load(t) {
    return s(t), await this._startWorker(t), this;
  }
  async recomputePositions(e, n, o2, i) {
    if (!this._connection) throw new r("panoramic-mesh-manager:recomputePositions", "Panoramic mesh manager is not loaded");
    return await this._connection.invoke("recomputePositions", { oldDistance: e, newDistance: n, position: o2 }, __spreadProps(__spreadValues({}, i), { transferList: [o2.buffer.slice()] }));
  }
};
export {
  o as default
};
//# sourceMappingURL=PanoramicMeshManager-BYFF5XHS.js.map
