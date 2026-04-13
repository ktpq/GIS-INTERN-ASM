import {
  c,
  f
} from "./chunk-FXR4KJCD.js";
import {
  h
} from "./chunk-3CTDWY66.js";
import {
  s
} from "./chunk-VJCO7ZMT.js";
import {
  o
} from "./chunk-3EE7FDFG.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/bufcut.js
function e(e2, t2, r2, i3, u3, o3, l3) {
  D = 0;
  const y3 = (i3 - r2) * o3, p3 = u3 && u3.length, c4 = p3 ? (u3[0] - r2) * o3 : y3;
  let v2, s3, h4, d3, Z2, a3 = n(t2, r2, i3, 0, c4, o3, true);
  if (a3 && a3.next !== a3.prev) {
    if (p3 && (a3 = f2(t2, r2, i3, u3, a3, o3)), y3 > 80 * o3) {
      v2 = h4 = t2[0 + r2 * o3], s3 = d3 = t2[1 + r2 * o3];
      for (let e3 = o3; e3 < c4; e3 += o3) {
        const n2 = t2[e3 + r2 * o3], x3 = t2[e3 + 1 + r2 * o3];
        v2 = Math.min(v2, n2), s3 = Math.min(s3, x3), h4 = Math.max(h4, n2), d3 = Math.max(d3, x3);
      }
      Z2 = Math.max(h4 - v2, d3 - s3), Z2 = 0 !== Z2 ? 1 / Z2 : 0;
    }
    x(a3, e2, o3, v2, s3, Z2, l3, 0);
  }
}
function n(e2, n2, t2, x3, r2, i3, l3) {
  let f4;
  if (l3 === Z(e2, n2, t2, x3, r2, i3) > 0) for (let o3 = x3; o3 < r2; o3 += i3) f4 = u(o3 + n2 * i3, e2[o3 + n2 * i3], e2[o3 + 1 + n2 * i3], f4);
  else for (let o3 = r2 - i3; o3 >= x3; o3 -= i3) f4 = u(o3 + n2 * i3, e2[o3 + n2 * i3], e2[o3 + 1 + n2 * i3], f4);
  return f4 && m(f4, f4.next) && (o2(f4), f4 = f4.next), f4;
}
function t(e2, n2 = e2) {
  if (!e2) return e2;
  let t2, x3 = e2;
  do {
    if (t2 = false, x3.steiner || !m(x3, x3.next) && 0 !== s2(x3.prev, x3, x3.next)) x3 = x3.next;
    else {
      if (o2(x3), x3 = n2 = x3.prev, x3 === x3.next) break;
      t2 = true;
    }
  } while (t2 || x3 !== n2);
  return n2;
}
function x(e2, n2, u3, l3, f4, y3, p3, v2) {
  if (!e2) return;
  !v2 && y3 && (e2 = c2(e2, l3, f4, y3));
  let s3 = e2;
  for (; e2.prev !== e2.next; ) {
    const c4 = e2.prev, h4 = e2.next;
    if (y3 ? i(e2, l3, f4, y3) : r(e2)) n2.push(c4.index / u3 + p3), n2.push(e2.index / u3 + p3), n2.push(h4.index / u3 + p3), o2(e2), e2 = h4.next, s3 = h4.next;
    else if ((e2 = h4) === s3) {
      v2 ? 1 === v2 ? x(e2 = b(e2, n2, u3, p3), n2, u3, l3, f4, y3, p3, 2) : 2 === v2 && g(e2, n2, u3, l3, f4, y3, p3) : x(t(e2), n2, u3, l3, f4, y3, p3, 1);
      break;
    }
  }
}
function r(e2) {
  const n2 = e2.prev, t2 = e2, x3 = e2.next;
  if (s2(n2, t2, x3) >= 0) return false;
  let r2 = e2.next.next;
  const i3 = r2;
  let u3 = 0;
  for (; r2 !== e2.prev && (0 === u3 || r2 !== i3); ) {
    if (u3++, a(n2.x, n2.y, t2.x, t2.y, x3.x, x3.y, r2.x, r2.y) && s2(r2.prev, r2, r2.next) >= 0) return false;
    r2 = r2.next;
  }
  return true;
}
function i(e2, n2, t2, x3) {
  const r2 = e2.prev, i3 = e2, u3 = e2.next;
  if (s2(r2, i3, u3) >= 0) return false;
  const o3 = r2.x < i3.x ? r2.x < u3.x ? r2.x : u3.x : i3.x < u3.x ? i3.x : u3.x, l3 = r2.y < i3.y ? r2.y < u3.y ? r2.y : u3.y : i3.y < u3.y ? i3.y : u3.y, f4 = r2.x > i3.x ? r2.x > u3.x ? r2.x : u3.x : i3.x > u3.x ? i3.x : u3.x, y3 = r2.y > i3.y ? r2.y > u3.y ? r2.y : u3.y : i3.y > u3.y ? i3.y : u3.y, p3 = z(o3, l3, n2, t2, x3), c4 = z(f4, y3, n2, t2, x3);
  let v2 = e2.prevZ, h4 = e2.nextZ;
  for (; v2 && v2.z >= p3 && h4 && h4.z <= c4; ) {
    if (v2 !== e2.prev && v2 !== e2.next && a(r2.x, r2.y, i3.x, i3.y, u3.x, u3.y, v2.x, v2.y) && s2(v2.prev, v2, v2.next) >= 0) return false;
    if (v2 = v2.prevZ, h4 !== e2.prev && h4 !== e2.next && a(r2.x, r2.y, i3.x, i3.y, u3.x, u3.y, h4.x, h4.y) && s2(h4.prev, h4, h4.next) >= 0) return false;
    h4 = h4.nextZ;
  }
  for (; v2 && v2.z >= p3; ) {
    if (v2 !== e2.prev && v2 !== e2.next && a(r2.x, r2.y, i3.x, i3.y, u3.x, u3.y, v2.x, v2.y) && s2(v2.prev, v2, v2.next) >= 0) return false;
    v2 = v2.prevZ;
  }
  for (; h4 && h4.z <= c4; ) {
    if (h4 !== e2.prev && h4 !== e2.next && a(r2.x, r2.y, i3.x, i3.y, u3.x, u3.y, h4.x, h4.y) && s2(h4.prev, h4, h4.next) >= 0) return false;
    h4 = h4.nextZ;
  }
  return true;
}
function u(e2, n2, t2, x3) {
  const r2 = q.create(e2, n2, t2);
  return x3 ? (r2.next = x3.next, r2.prev = x3, x3.next.prev = r2, x3.next = r2) : (r2.prev = r2, r2.next = r2), r2;
}
function o2(e2) {
  e2.next.prev = e2.prev, e2.prev.next = e2.next, e2.prevZ && (e2.prevZ.nextZ = e2.nextZ), e2.nextZ && (e2.nextZ.prevZ = e2.prevZ);
}
function l(e2) {
  let n2 = e2, t2 = e2;
  do {
    (n2.x < t2.x || n2.x === t2.x && n2.y < t2.y) && (t2 = n2), n2 = n2.next;
  } while (n2 !== e2);
  return t2;
}
function f2(e2, t2, x3, r2, i3, u3) {
  const o3 = new Array();
  for (let f4 = 0, y3 = r2.length; f4 < y3; f4++) {
    const i4 = n(e2, t2, x3, r2[f4] * u3, f4 < y3 - 1 ? r2[f4 + 1] * u3 : x3 * u3, u3, false);
    i4 === i4.next && (i4.steiner = true), o3.push(l(i4));
  }
  o3.sort(M);
  for (const n2 of o3) i3 = y(n2, i3);
  return i3;
}
function y(e2, n2) {
  const x3 = p(e2, n2);
  if (!x3) return n2;
  const r2 = A(x3, e2);
  return t(r2, r2.next), t(x3, x3.next);
}
function p(e2, n2) {
  let t2 = n2;
  const x3 = e2.x, r2 = e2.y;
  let i3, u3 = -1 / 0;
  do {
    if (r2 <= t2.y && r2 >= t2.next.y && t2.next.y !== t2.y) {
      const e3 = t2.x + (r2 - t2.y) * (t2.next.x - t2.x) / (t2.next.y - t2.y);
      if (e3 <= x3 && e3 > u3) {
        if (u3 = e3, e3 === x3) {
          if (r2 === t2.y) return t2;
          if (r2 === t2.next.y) return t2.next;
        }
        i3 = t2.x < t2.next.x ? t2 : t2.next;
      }
    }
    t2 = t2.next;
  } while (t2 !== n2);
  if (!i3) return null;
  if (x3 === u3) return i3.prev;
  const o3 = i3, l3 = i3.x, f4 = i3.y;
  let y3, p3 = 1 / 0;
  for (t2 = i3.next; t2 !== o3; ) x3 >= t2.x && t2.x >= l3 && x3 !== t2.x && a(r2 < f4 ? x3 : u3, r2, l3, f4, r2 < f4 ? u3 : x3, r2, t2.x, t2.y) && (y3 = Math.abs(r2 - t2.y) / (x3 - t2.x), (y3 < p3 || y3 === p3 && t2.x > i3.x) && w(t2, e2) && (i3 = t2, p3 = y3)), t2 = t2.next;
  return i3;
}
function c2(e2, n2, t2, x3) {
  let r2;
  for (; r2 !== e2; r2 = r2.next) {
    if (r2 = r2 || e2, null === r2.z && (r2.z = z(r2.x, r2.y, n2, t2, x3)), r2.prev.next !== r2 || r2.next.prev !== r2) return r2.prev.next = r2, r2.next.prev = r2, c2(e2, n2, t2, x3);
    r2.prevZ = r2.prev, r2.nextZ = r2.next;
  }
  return e2.prevZ.nextZ = null, e2.prevZ = null, v(e2);
}
function v(e2) {
  let n2, t2 = 1;
  for (; ; ) {
    let x3, r2 = e2;
    e2 = null, n2 = null;
    let i3 = 0;
    for (; r2; ) {
      i3++, x3 = r2;
      let u3 = 0;
      for (; u3 < t2 && x3; u3++) x3 = x3.nextZ;
      let o3 = t2;
      for (; u3 > 0 || o3 > 0 && x3; ) {
        let t3;
        0 === u3 ? (t3 = x3, x3 = x3.nextZ, o3--) : 0 !== o3 && x3 ? r2.z <= x3.z ? (t3 = r2, r2 = r2.nextZ, u3--) : (t3 = x3, x3 = x3.nextZ, o3--) : (t3 = r2, r2 = r2.nextZ, u3--), n2 ? n2.nextZ = t3 : e2 = t3, t3.prevZ = n2, n2 = t3;
      }
      r2 = x3;
    }
    if (n2.nextZ = null, t2 *= 2, i3 < 2) return e2;
  }
}
function s2(e2, n2, t2) {
  return (n2.y - e2.y) * (t2.x - n2.x) - (n2.x - e2.x) * (t2.y - n2.y);
}
function h2(e2, n2, t2, x3) {
  return !!(m(e2, n2) && m(t2, x3) || m(e2, x3) && m(t2, n2)) || s2(e2, n2, t2) > 0 != s2(e2, n2, x3) > 0 && s2(t2, x3, e2) > 0 != s2(t2, x3, n2) > 0;
}
function d(e2, n2) {
  let t2 = e2;
  do {
    if (t2.index !== e2.index && t2.next.index !== e2.index && t2.index !== n2.index && t2.next.index !== n2.index && h2(t2, t2.next, e2, n2)) return true;
    t2 = t2.next;
  } while (t2 !== e2);
  return false;
}
function Z(e2, n2, t2, x3, r2, i3) {
  let u3 = 0;
  for (let o3 = x3, l3 = r2 - i3; o3 < r2; o3 += i3) u3 += (e2[l3 + n2 * i3] - e2[o3 + n2 * i3]) * (e2[o3 + 1 + n2 * i3] + e2[l3 + 1 + n2 * i3]), l3 = o3;
  return u3;
}
function a(e2, n2, t2, x3, r2, i3, u3, o3) {
  return (r2 - u3) * (n2 - o3) - (e2 - u3) * (i3 - o3) >= 0 && (e2 - u3) * (x3 - o3) - (t2 - u3) * (n2 - o3) >= 0 && (t2 - u3) * (i3 - o3) - (r2 - u3) * (x3 - o3) >= 0;
}
function w(e2, n2) {
  return s2(e2.prev, e2, e2.next) < 0 ? s2(e2, n2, e2.next) >= 0 && s2(e2, e2.prev, n2) >= 0 : s2(e2, n2, e2.prev) < 0 || s2(e2, e2.next, n2) < 0;
}
function z(e2, n2, t2, x3, r2) {
  return (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = 32767 * (e2 - t2) * r2) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) | (n2 = 1431655765 & ((n2 = 858993459 & ((n2 = 252645135 & ((n2 = 16711935 & ((n2 = 32767 * (n2 - x3) * r2) | n2 << 8)) | n2 << 4)) | n2 << 2)) | n2 << 1)) << 1;
}
function m(e2, n2) {
  return e2.x === n2.x && e2.y === n2.y;
}
function M(e2, n2) {
  return e2.x - n2.x;
}
function b(e2, n2, t2, x3) {
  let r2 = e2;
  do {
    const i3 = r2.prev, u3 = r2.next.next;
    !m(i3, u3) && h2(i3, r2, r2.next, u3) && w(i3, u3) && w(u3, i3) && (n2.push(i3.index / t2 + x3), n2.push(r2.index / t2 + x3), n2.push(u3.index / t2 + x3), o2(r2), o2(r2.next), r2 = e2 = u3), r2 = r2.next;
  } while (r2 !== e2);
  return r2;
}
function g(e2, n2, r2, i3, u3, o3, l3) {
  let f4 = e2;
  do {
    let e3 = f4.next.next;
    for (; e3 !== f4.prev; ) {
      if (f4.index !== e3.index && k(f4, e3)) {
        let y3 = A(f4, e3);
        return f4 = t(f4, f4.next), y3 = t(y3, y3.next), x(f4, n2, r2, i3, u3, o3, l3, 0), void x(y3, n2, r2, i3, u3, o3, l3, 0);
      }
      e3 = e3.next;
    }
    f4 = f4.next;
  } while (f4 !== e2);
}
function k(e2, n2) {
  return e2.next.index !== n2.index && e2.prev.index !== n2.index && !d(e2, n2) && w(e2, n2) && w(n2, e2) && j(e2, n2);
}
function j(e2, n2) {
  let t2 = e2, x3 = false;
  const r2 = (e2.x + n2.x) / 2, i3 = (e2.y + n2.y) / 2;
  do {
    t2.y > i3 != t2.next.y > i3 && t2.next.y !== t2.y && r2 < (t2.next.x - t2.x) * (i3 - t2.y) / (t2.next.y - t2.y) + t2.x && (x3 = !x3), t2 = t2.next;
  } while (t2 !== e2);
  return x3;
}
function A(e2, n2) {
  const t2 = q.create(e2.index, e2.x, e2.y), x3 = q.create(n2.index, n2.x, n2.y), r2 = e2.next, i3 = n2.prev;
  return e2.next = n2, n2.prev = e2, t2.next = r2, r2.prev = t2, x3.next = t2, t2.prev = x3, i3.next = x3, x3.prev = i3, x3;
}
var q = class _q {
  constructor() {
    this.index = 0, this.x = 0, this.y = 0, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  static create(e2, n2, t2) {
    const x3 = D < B.length ? B[D++] : new _q();
    return x3.index = e2, x3.x = n2, x3.y = t2, x3.prev = null, x3.next = null, x3.z = null, x3.prevZ = null, x3.nextZ = null, x3.steiner = false, x3;
  }
};
var B = [];
var C = 8096;
var D = 0;
for (let E = 0; E < C; E++) B.push(new q());

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/templateUtils.js
var l2 = 1e-5;
var i2 = new h(0, 0, 0, 1, 0);
var f3 = new h(0, 0, 0, 1, 0);
var c3 = 100;
function u2(t2, e2, n2) {
  let o3 = 0;
  for (let r2 = 1; r2 < n2; r2++) {
    const n3 = t2[2 * (e2 + r2 - 1)], s3 = t2[2 * (e2 + r2 - 1) + 1];
    o3 += (t2[2 * (e2 + r2)] - n3) * (t2[2 * (e2 + r2) + 1] + s3);
  }
  return o3;
}
function h3(t2, e2, n2, o3, r2) {
  let s3 = 0;
  const l3 = 2;
  for (let i3 = n2; i3 < o3; i3 += 3) {
    const n3 = (t2[i3] - r2) * l3, o4 = (t2[i3 + 1] - r2) * l3, f4 = (t2[i3 + 2] - r2) * l3;
    s3 += Math.abs((e2[n3] - e2[f4]) * (e2[o4 + 1] - e2[n3 + 1]) - (e2[n3] - e2[o4]) * (e2[f4 + 1] - e2[n3 + 1]));
  }
  return s3;
}
async function a2(t2) {
  return await c(), g2(t2);
}
function g2(t2) {
  const e2 = [];
  if (!(t2.maxLength > c3) && p2(e2, t2)) return e2.length ? { indices: e2, vertices: t2.coords } : null;
  return { indices: null, vertices: m2(t2) };
}
function p2(t2, e2) {
  const { coords: n2, lengths: o3 } = e2, r2 = 0, i3 = t2;
  let f4 = 0;
  for (let c4 = 0; c4 < o3.length; ) {
    let t3 = c4, e3 = o3[c4], a3 = u2(n2, f4, e3);
    const g3 = [];
    for (; ++t3 < o3.length; ) {
      const r3 = o3[t3], s3 = u2(n2, f4 + e3, r3);
      if (!(s3 > 0)) break;
      a3 += s3, g3.push(f4 + e3), e3 += r3;
    }
    const p3 = i3.length;
    e(i3, n2, f4, f4 + e3, g3, 2, r2);
    const m3 = h3(i3, n2, p3, i3.length, r2), x3 = Math.abs(a3);
    if (Math.abs((m3 - x3) / Math.max(1e-7, x3)) > l2) return i3.length = 0, false;
    c4 = t3, f4 += e3;
  }
  return true;
}
function m2(e2) {
  const { coords: n2, lengths: o3 } = e2, { buffer: r2 } = f(n2, o3);
  return r2;
}
function x2(t2, e2, n2) {
  let o3 = 0;
  for (let r2 = 0; r2 < t2.lengths.length; r2++) {
    const s3 = t2.lengths[r2];
    for (let r3 = 0; r3 < s3; r3++) {
      const s4 = t2.coords[2 * (r3 + o3)], l3 = t2.coords[2 * (r3 + o3) + 1];
      if (s4 < e2 || s4 > n2 || l3 < e2 || l3 > n2) return true;
    }
    o3 += s3;
  }
  return false;
}
function d2(t2, e2) {
  if (null == t2) return null;
  if (!x2(t2, -128, o + 128)) return t2;
  i2.setPixelMargin(e2), i2.reset(3);
  const { stride: n2, lengths: s3, coords: l3 } = t2;
  let f4 = 0;
  for (const o3 of s3) {
    const t3 = f4 + o3 * n2;
    for (i2.moveTo(l3[f4], l3[f4 + 1]), f4 += n2; f4 < t3; ) i2.lineTo(l3[f4], l3[f4 + 1]), f4 += n2;
    i2.close();
  }
  const c4 = i2.result(false);
  if (!c4) return null;
  const u3 = new s();
  for (const o3 of c4) {
    for (const { x: t3, y: e3 } of o3) u3.coords.push(t3, e3);
    u3.lengths.push(o3.length);
  }
  return u3;
}
function y2(t2, e2) {
  f3.setPixelMargin(e2);
  const n2 = f3, o3 = -e2, s3 = o + e2;
  let l3 = [], i3 = false;
  if (!t2.nextPath()) return null;
  let c4 = t2.pathLength(), u3 = true;
  for (; u3; ) {
    t2.seekPathStart();
    const e3 = [];
    if (!t2.pathSize) return null;
    n2.reset(2), t2.nextPoint();
    let r2 = t2.x, f4 = t2.y;
    if (i3) n2.moveTo(r2, f4);
    else {
      if (r2 < o3 || r2 > s3 || f4 < o3 || f4 > s3) {
        i3 = true;
        continue;
      }
      e3.push({ x: r2, y: f4 });
    }
    let h4 = false;
    for (; t2.nextPoint(); ) if (r2 = t2.x, f4 = t2.y, i3) n2.lineTo(r2, f4);
    else {
      if (r2 < o3 || r2 > s3 || f4 < o3 || f4 > s3) {
        h4 = true;
        break;
      }
      e3.push({ x: r2, y: f4 });
    }
    if (h4) i3 = true;
    else {
      if (i3) {
        const t3 = n2.resultWithStarts();
        if (t3) for (const e4 of t3) l3.push(__spreadProps(__spreadValues({}, e4), { pathLength: c4 }));
      } else l3.push({ line: e3, start: 0, pathLength: c4 });
      u3 = t2.nextPath(), c4 = u3 ? t2.pathLength() : 0, i3 = false;
    }
  }
  return l3 = l3.filter((t3) => t3.line.length > 1), 0 === l3.length ? null : l3;
}
i2.setExtent(o), f3.setExtent(o);

export {
  a2 as a,
  g2 as g,
  p2 as p,
  d2 as d,
  y2 as y
};
//# sourceMappingURL=chunk-TVZ2UN2Q.js.map
