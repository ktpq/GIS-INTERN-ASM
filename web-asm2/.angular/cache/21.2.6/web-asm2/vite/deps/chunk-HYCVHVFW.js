import {
  I,
  r,
  w3 as w
} from "./chunk-77HLGP2C.js";
import {
  G
} from "./chunk-7RXTTEFJ.js";

// node_modules/@arcgis/core/arcade/featureset/sources/Empty.js
var a = class extends w {
  constructor(e) {
    super(), this.declaredClass = "esri.layers.featureset.sources.Empty", this._maxProcessing = 1e3, this._parent = e.parentfeatureset, this._databaseType = 0;
  }
  async _queryAll() {
    return I.features;
  }
  async query(e) {
    return I;
  }
  async queryStat(e) {
    return await this._manualStat(e.stat, e.field, e.limit ?? G, e.abortSignal);
  }
  async canQueryAggregate(e) {
    return false;
  }
  async queryAggregate(r2) {
    throw new r("NeverReach");
  }
  async queryAttachments() {
    return [];
  }
};

export {
  a
};
//# sourceMappingURL=chunk-HYCVHVFW.js.map
