import {
  u as u2
} from "./chunk-T6HQ5ZAR.js";
import {
  S,
  v
} from "./chunk-XPNLFIFF.js";
import {
  O
} from "./chunk-HIZTOR7Q.js";
import {
  n
} from "./chunk-KEY3YQEB.js";
import {
  e
} from "./chunk-XNNZ2U24.js";
import {
  u
} from "./chunk-FVU6XCMJ.js";
import {
  f2 as f
} from "./chunk-ZRWCUWWK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/3d/layers/i3s/I3SProjectionUtil.js
var a = 1;
var i = 5 - a;

// node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js
var K = u();
async function E3(t, r3, o2, n3, i2, s2, a2, l3) {
  const c = [];
  for (const e2 of r3) if (e2 && i2.includes(e2.name)) {
    const r4 = `${t}/nodes/${o2}/attributes/${e2.key}/0`;
    c.push({ url: r4, storageInfo: e2 });
  }
  const u4 = await Promise.allSettled(c.map((t2) => f(t2.url, { responseType: "array-buffer", query: __spreadProps(__spreadValues({}, a2), { token: s2 }), signal: l3?.signal }).then((e2) => S(t2.storageInfo, e2.data)))), f4 = [];
  for (const e2 of n3) {
    const t2 = {};
    for (let r4 = 0; r4 < u4.length; r4++) {
      const o3 = u4[r4];
      if ("fulfilled" === o3.status) {
        const n4 = o3.value;
        t2[c[r4].storageInfo.name] = v(n4, e2);
      }
    }
    f4.push(t2);
  }
  return f4;
}
var oe = u2({ color: [0, 0, 0, 0], opacity: 0 });
var le = [n(), n(), n(), n(), n(), n(), n(), n()];
var ce = u();
var ue = u();
var fe = new O();
var pe = n();
var me = { data: new Array(72), size: 3, exclusive: true, stride: 3 };
var de = e();

export {
  E3 as E
};
//# sourceMappingURL=chunk-UMZCTS6I.js.map
