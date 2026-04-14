import {
  b
} from "./chunk-NMDBB7YG.js";
import {
  t2 as t
} from "./chunk-XCGM4D6U.js";
import {
  s
} from "./chunk-PQFEWUZC.js";

// node_modules/@arcgis/core/renderers/support/styleUtils.js
async function t2(t3, i, n) {
  const s2 = t3 && t3.getAtOrigin && t3.getAtOrigin("renderer", i.origin);
  if (s2 && "unique-value" === s2.type && s2.styleOrigin) {
    const a = await b(s2.populateFromStyle());
    if (s(n), false === a.ok) {
      const e = a.error;
      i?.messages && i.messages.push(new t("renderer:style-reference", `Failed to create unique value renderer from style reference: ${e.message}`, { error: e, context: i })), t3.clear("renderer", i?.origin);
    }
  }
}

export {
  t2 as t
};
//# sourceMappingURL=chunk-IECJX5XJ.js.map
