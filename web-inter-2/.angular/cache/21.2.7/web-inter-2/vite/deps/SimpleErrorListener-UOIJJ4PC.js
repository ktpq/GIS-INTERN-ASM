import {
  je
} from "./chunk-PHO2TL2M.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/knowledgeGraph/antlr/SimpleErrorListener.js
var s = class extends je {
  constructor() {
    super(...arguments), this.errors = null;
  }
  syntaxError(r, s2, e, t, o, n) {
    this.errors || (this.errors = []), this.errors.push({ line: e, column: t, msg: o, e: n });
  }
};
export {
  s as default
};
//# sourceMappingURL=SimpleErrorListener-UOIJJ4PC.js.map
