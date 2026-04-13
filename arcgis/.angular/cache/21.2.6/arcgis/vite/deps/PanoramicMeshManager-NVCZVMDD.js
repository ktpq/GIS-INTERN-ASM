import {
  r as r2
} from "./chunk-YHHRJ56I.js";
import "./chunk-OQNSFBL3.js";
import "./chunk-RCUTEESF.js";
import "./chunk-DESITEXU.js";
import "./chunk-D7RUZBWM.js";
import "./chunk-OFY6GFSK.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-FMPS52FS.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import {
  s
} from "./chunk-POW25PFR.js";
import {
  r3 as r
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=PanoramicMeshManager-NVCZVMDD.js.map
