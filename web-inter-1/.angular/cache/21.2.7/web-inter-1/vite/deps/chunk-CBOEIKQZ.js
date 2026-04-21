import {
  m
} from "./chunk-EZOPIZCP.js";
import {
  o
} from "./chunk-MUE6QDRN.js";

// node_modules/@arcgis/core/support/timeUtils.js
function d(t2) {
  if (!t2) return t2;
  const { start: e2, end: r2 } = t2;
  return new m({ start: null != e2 ? o(e2, -e2.getTimezoneOffset(), "minutes") : e2, end: null != r2 ? o(r2, -r2.getTimezoneOffset(), "minutes") : r2 });
}
function p(t2) {
  if (!t2) return t2;
  const { start: e2, end: r2 } = t2;
  return new m({ start: null != e2 ? o(e2, e2.getTimezoneOffset(), "minutes") : e2, end: null != r2 ? o(r2, r2.getTimezoneOffset(), "minutes") : r2 });
}

// node_modules/@arcgis/core/layers/support/timeSupport.js
function n(t2) {
  return null != t2?.timeInfo;
}
function i(n2, i2, l) {
  if (null == n2?.timeInfo) return null;
  const { datesInUnknownTimezone: o2 = false, timeOffset: u, useViewTime: s } = n2;
  let m2 = n2.timeExtent;
  o2 && (m2 = p(m2));
  let r2 = s ? i2 && m2 ? i2.intersection(m2) : i2 || m2 : m2;
  return !r2 || r2.isEmpty || r2.isAllTime ? r2 : (u && (r2 = r2.offset(-u.value, u.unit)), o2 && (r2 = d(r2)), r2.equals(l) ? l : r2);
}

export {
  n,
  i
};
//# sourceMappingURL=chunk-CBOEIKQZ.js.map
