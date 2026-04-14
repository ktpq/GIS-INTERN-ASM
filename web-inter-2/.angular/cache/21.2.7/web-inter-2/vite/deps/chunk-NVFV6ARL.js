import {
  s
} from "./chunk-PQFEWUZC.js";
import {
  r3 as r
} from "./chunk-TX75HZKJ.js";

// node_modules/@arcgis/core/layers/support/imageBitmapUtils.js
async function t(t2, o2, a) {
  let c;
  try {
    c = await createImageBitmap(t2);
  } catch (l) {
    throw new r("request:server", `Unable to load ${o2}`, { url: o2, error: l });
  }
  return s(a), c;
}
async function o(t2, o2, a, c, l) {
  let n;
  try {
    n = await createImageBitmap(t2);
  } catch (i) {
    throw new r("request:server", `Unable to load tile ${o2}/${a}/${c}`, { error: i, level: o2, row: a, col: c });
  }
  return s(l), n;
}

export {
  t,
  o
};
//# sourceMappingURL=chunk-NVFV6ARL.js.map
