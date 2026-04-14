import {
  D
} from "./chunk-XWBLBUQP.js";

// node_modules/@arcgis/core/rest/route/utils.js
function e(e2, r2) {
  if (null == e2) return null;
  const i2 = {}, s2 = new RegExp(`^${r2}`, "i");
  for (const o2 of Object.keys(e2)) if (s2.test(o2)) {
    const s3 = o2.slice(r2.length);
    i2[D.fromJSON(s3)] = e2[o2];
  }
  return i2;
}
function r(e2, r2, i2) {
  if (null != e2) {
    r2.attributes || (r2.attributes = {});
    for (const s2 in e2) {
      const o2 = D.toJSON(s2);
      r2.attributes[`${i2}${o2}`] = e2[s2];
    }
  }
}
function i(e2) {
  const r2 = {};
  for (const i2 of Object.keys(e2)) {
    const s2 = i2;
    r2[D.fromJSON(s2)] = e2[i2];
  }
  return r2;
}
function s(e2) {
  const r2 = {};
  for (const i2 of Object.keys(e2)) {
    const s2 = i2;
    r2[D.toJSON(s2)] = e2[i2];
  }
  return r2;
}
function o(t, e2) {
  return null == t || null == e2 ? null : Math.round((t - e2) / 6e4);
}
function n(t) {
  const e2 = t.toJSON(), r2 = e2;
  return r2.accumulateAttributeNames &&= e2.accumulateAttributeNames?.join(), r2.attributeParameterValues &&= JSON.stringify(e2.attributeParameterValues), r2.barriers &&= JSON.stringify(e2.barriers), r2.locateSettings &&= JSON.stringify(e2.locateSettings), r2.outSR &&= e2.outSR?.wkid, r2.overrides &&= JSON.stringify(e2.overrides), r2.polygonBarriers &&= JSON.stringify(e2.polygonBarriers), r2.polylineBarriers &&= JSON.stringify(e2.polylineBarriers), r2.restrictionAttributeNames &&= e2.restrictionAttributeNames?.join(), r2.stops &&= JSON.stringify(e2.stops), r2.travelMode &&= JSON.stringify(e2.travelMode), r2;
}
function a(t) {
  const e2 = t.toJSON(), r2 = e2;
  return r2.accumulateAttributeNames &&= e2.accumulateAttributeNames?.join(), r2.attributeParameterValues &&= JSON.stringify(e2.attributeParameterValues), r2.barriers &&= JSON.stringify(e2.barriers), r2.facilities &&= JSON.stringify(e2.facilities), r2.incidents &&= JSON.stringify(e2.incidents), r2.outSR &&= e2.outSR?.wkid, r2.overrides &&= JSON.stringify(e2.overrides), r2.polygonBarriers &&= JSON.stringify(e2.polygonBarriers), r2.polylineBarriers &&= JSON.stringify(e2.polylineBarriers), r2.restrictionAttributeNames &&= e2.restrictionAttributeNames?.join(), r2.travelMode &&= JSON.stringify(e2.travelMode), r2;
}

export {
  e,
  r,
  i,
  s,
  o,
  n,
  a
};
//# sourceMappingURL=chunk-LUD2K6Y4.js.map
