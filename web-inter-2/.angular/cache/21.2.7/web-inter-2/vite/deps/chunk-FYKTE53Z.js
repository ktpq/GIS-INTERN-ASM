import {
  p
} from "./chunk-C32FOKRN.js";
import {
  i
} from "./chunk-UGNCDVPZ.js";
import {
  x
} from "./chunk-SQCKII37.js";
import {
  n
} from "./chunk-Z3PP4SLW.js";
import {
  Tt,
  V,
  Y,
  Z,
  f,
  g,
  it,
  m,
  v,
  y
} from "./chunk-ZRWCUWWK.js";
import {
  r2
} from "./chunk-5OGMOTJP.js";
import {
  j,
  o3 as o
} from "./chunk-XCGM4D6U.js";
import {
  r3 as r
} from "./chunk-TX75HZKJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js
function j2(r3) {
  const t = r3?.origins ?? [void 0];
  return (e, o2) => {
    const s = v2(r3, e, o2);
    for (const r4 of t) {
      const t2 = j(e, r4, o2);
      for (const r5 in s) t2[r5] = s[r5];
    }
  };
}
function v2(r3, t, e) {
  if ("resource" === r3?.type) return U(r3, t, e);
  switch (r3?.type ?? "other") {
    case "other":
      return { read: true, write: true };
    case "url": {
      const { read: r4, write: t2 } = y;
      return { read: r4, write: t2 };
    }
  }
}
function U(r3, t, n2) {
  const i2 = o(t, n2);
  return { type: String, read: (r4, t2, e) => {
    const o2 = f(r4, t2, e);
    return i2.type === String ? o2 : "function" == typeof i2.type ? new i2.type({ url: o2 }) : void 0;
  }, write: { isRequired: i2.json?.write?.isRequired, writer(t2, p2, c, u) {
    if (!u?.resources) return "string" == typeof t2 ? void (p2[c] = m(t2, u)) : void (p2[c] = t2.write({}, u));
    const l = S(t2), m2 = m(l, __spreadProps(__spreadValues({}, u), { verifyItemRelativeUrls: u?.verifyItemRelativeUrls ? { writtenUrls: u.verifyItemRelativeUrls.writtenUrls, rootPath: void 0 } : void 0 }), 1), y2 = i2.type !== String && (!i(this) || u?.origin && this.originIdOf(n2) > r2(u.origin)), g2 = { object: this, propertyName: n2, value: t2, targetUrl: m2, dest: p2, targetPropertyName: c, context: u, params: r3 };
    u?.portalItem && m2 && !Y(m2) ? y2 && r3?.contentAddressed ? w(g2) : y2 ? I(g2) : P(g2) : u?.portalItem && (null == m2 || null != v(m2) || Z(m2) || y2) ? w(g2) : p2[c] = m2;
  } } };
}
function w(e) {
  const { targetUrl: o2, params: p2, value: u, context: a, dest: l, targetPropertyName: d } = e;
  if (!a.portalItem) return;
  const f2 = g(o2), y2 = N(u, o2, a);
  if (p2?.contentAddressed && "json" !== y2.type) return void a.messages?.push(new r("persistable:contentAddressingUnsupported", `Property "${d}" is trying to serializing a resource with content of type ${y2.type} with content addressing. Content addressing is only supported for json resources.`, { content: y2 }));
  const h = p2?.contentAddressed && "json" === y2.type ? x(y2.jsonString) : f2?.filename ?? n(), j3 = V(p2?.prefix ?? f2?.prefix, h), v3 = `${j3}.${p(y2)}`;
  if (p2?.contentAddressed && a.resources && "json" === y2.type) {
    const r3 = a.resources.toKeep.find(({ resource: r4 }) => r4.path === v3) ?? a.resources.toAdd.find(({ resource: r4 }) => r4.path === v3);
    if (r3) return void (l[d] = r3.resource.itemRelativeUrl);
  }
  const U2 = a.portalItem.resourceFromPath(v3);
  Z(o2) && a.resources && a.resources.pendingOperations.push(it(o2).then((r3) => {
    U2.path = `${j3}.${p({ type: "blob", blob: r3 })}`, l[d] = U2.itemRelativeUrl;
  }).catch(() => {
  }));
  const w2 = p2?.compress ?? false;
  a.resources && b(__spreadProps(__spreadValues({}, e), { resource: U2, content: y2, compress: w2, updates: a.resources.toAdd })), l[d] = U2.itemRelativeUrl;
}
function I(r3) {
  const { context: t, targetUrl: e, params: o2, value: s, dest: n2, targetPropertyName: i2 } = r3;
  if (!t.portalItem) return;
  const c = t.portalItem.resourceFromPath(e), u = N(s, e, t), a = p(u), l = Tt(c.path), d = o2?.compress ?? false;
  a === l ? (t.resources && b(__spreadProps(__spreadValues({}, r3), { resource: c, content: u, compress: d, updates: t.resources.toUpdate })), n2[i2] = e) : w(r3);
}
function P({ context: r3, targetUrl: t, dest: e, targetPropertyName: o2 }) {
  r3.portalItem && r3.resources && (r3.resources.toKeep.push({ resource: r3.portalItem.resourceFromPath(t), compress: false }), e[o2] = t);
}
function b({ object: r3, propertyName: t, updates: e, resource: o2, content: s, compress: n2 }) {
  const i2 = (e2) => {
    x2(r3, t, e2);
  };
  e.push({ resource: o2, content: s, compress: n2, finish: i2 });
}
function N(r3, t, e) {
  return "string" == typeof r3 ? { type: "url", url: t } : { type: "json", jsonString: JSON.stringify(r3.toJSON(e)) };
}
function S(r3) {
  return null == r3 ? null : "string" == typeof r3 ? r3 : r3.url;
}
function x2(r3, t, e) {
  "string" == typeof r3[t] ? r3[t] = e.url : r3[t].url = e.url;
}

export {
  j2 as j
};
//# sourceMappingURL=chunk-FYKTE53Z.js.map
