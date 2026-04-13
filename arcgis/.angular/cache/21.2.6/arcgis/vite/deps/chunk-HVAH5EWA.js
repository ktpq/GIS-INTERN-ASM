import {
  s as s2
} from "./chunk-NZ4VA6UU.js";
import {
  i
} from "./chunk-NV3NZKNW.js";
import {
  Q,
  t as t2
} from "./chunk-GM4J4SMK.js";
import {
  e as e2
} from "./chunk-ALTGJATZ.js";
import {
  A,
  G,
  P,
  _,
  c,
  e,
  o,
  p,
  u
} from "./chunk-YM62CGUL.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import {
  b,
  s
} from "./chunk-ZILR7JK7.js";
import {
  r
} from "./chunk-TVMQ3GIS.js";
import {
  t
} from "./chunk-KWV5EQET.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js
var n2 = Q().vec3f("position").u16("componentIndex", { integer: true }).freeze();
var r2 = Q().vec2u8("sideness").freeze();
var i2 = t2(r2);
var a = Q().vec3f("position0").vec3f("position1").vec2i16("normalCompressed").u16("componentIndex", { integer: true }).u8("variantOffset", { glNormalized: true }).u8("variantStroke").u8("variantExtension", { glNormalized: true }).freeze();
var m = Q().vec3f("position0").vec3f("position1").vec2i16("normalCompressed").vec2i16("normal2Compressed").u16("componentIndex", { integer: true }).u8("variantOffset", { glNormalized: true }).u8("variantStroke").u8("variantExtension", { glNormalized: true }).freeze();
var f = t2(a, 1);
var p2 = t2(m, 1);
var s3 = i2.concat(f);
var u2 = i2.concat(p2);
var c2 = new i([{ name: "color", type: "vec4unorm8" }, { name: "lineWidth", type: "u8" }, { name: "extensionLength", type: "u8" }, { name: "materialType", type: "u8" }, { name: "opacity", type: "unorm8" }, { name: "elevationOffset", type: "f32" }]);

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/Edge.js
var s4 = class {
  constructor() {
    this.position0 = n(), this.position1 = n(), this.faceNormal0 = n(), this.faceNormal1 = n(), this.componentIndex = 0, this.cosAngle = 0;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js
var p3 = -1;
function d(e3, t4, o2) {
  const c5 = e3.vertices.position, l2 = e3.vertices.componentIndex, i3 = I.position0, g3 = I.position1, h2 = I.faceNormal0, u5 = I.faceNormal1, { edges: d4, normals: v2 } = w(e3), x = d4.length / 4, y3 = t4.allocate(x);
  let j2 = 0;
  const N3 = x, b3 = o2?.allocate(N3);
  let D2 = 0, E2 = 0, F2 = 0;
  V.length = 0;
  for (let s5 = 0; s5 < x; ++s5) {
    const e4 = 4 * s5;
    c5.getVec(d4.data[e4], i3), c5.getVec(d4.data[e4 + 1], g3);
    const t5 = V.pushNew();
    t5.index = 4 * s5, t5.length = p(i3, g3);
  }
  V.sort((e4, t5) => t5.length - e4.length);
  const P3 = new Array(), k = new Array();
  V.forAll(({ length: e4, index: n3 }) => {
    const w3 = d4.data[n3], x2 = d4.data[n3 + 1], V2 = d4.data[n3 + 2], N4 = d4.data[n3 + 3], q2 = N4 === p3;
    if (c5.getVec(w3, i3), c5.getVec(x2, g3), q2) {
      const e5 = 3 * V2;
      u(h2, v2.data[e5], v2.data[e5 + 1], v2.data[e5 + 2]), o(u5, h2), I.componentIndex = l2.get(w3), I.cosAngle = A(h2, u5);
    } else {
      let e5 = 3 * V2;
      if (u(h2, v2.data[e5], v2.data[e5 + 1], v2.data[e5 + 2]), e5 = 3 * N4, u(u5, v2.data[e5], v2.data[e5 + 1], v2.data[e5 + 2]), I.componentIndex = l2.get(w3), I.cosAngle = A(h2, u5), m2(I, L)) return;
      I.cosAngle < -0.9999 && o(u5, h2);
    }
    E2 += e4, F2++, q2 || f2(I, U) ? (t4.write(y3, j2++, I), P3.push(e4)) : A2(I, M) && (b3 && o2 && o2.write(b3, D2++, I), k.push(e4));
  });
  const q = new Float32Array(P3.reverse()), z = new Float32Array(k.reverse()), B = b3 && o2 ? { instancesData: b3.slice(0, D2), lodInfo: { lengths: z } } : void 0;
  return { regular: { instancesData: y3.slice(0, j2), lodInfo: { lengths: q } }, silhouette: B, averageEdgeLength: E2 / F2 };
}
function f2(e3, t4) {
  return e3.cosAngle < t4;
}
function m2(e3, t4) {
  return e3.cosAngle > t4;
}
function A2(t4, o2) {
  const n3 = b(t4.cosAngle);
  G(b2, t4.position1, t4.position0);
  return n3 * (A(P(N, t4.faceNormal0, t4.faceNormal1), b2) > 0 ? -1 : 1) > o2;
}
function w(e3) {
  const t4 = e3.faces.length / 3, o2 = e3.faces, n3 = e3.neighbors, s5 = e3.vertices.position;
  y.length = j.length = 0;
  for (let a4 = 0; a4 < t4; a4++) {
    const e4 = 3 * a4, t5 = n3[e4], r3 = n3[e4 + 1], g3 = n3[e4 + 2], h2 = o2[e4], u5 = o2[e4 + 1], d4 = o2[e4 + 2];
    s5.getVec(h2, D), s5.getVec(u5, E), s5.getVec(d4, F), e(E, E, D), e(F, F, D), P(D, E, F), _(D, D), j.pushArray(D), (t5 === p3 || h2 < u5) && (y.push(h2), y.push(u5), y.push(a4), y.push(t5)), (r3 === p3 || u5 < d4) && (y.push(u5), y.push(d4), y.push(a4), y.push(r3)), (g3 === p3 || d4 < h2) && (y.push(d4), y.push(h2), y.push(a4), y.push(g3));
  }
  return { edges: y, normals: j };
}
var v = class {
  constructor() {
    this.index = 0, this.length = 0;
  }
};
var V = new r({ allocator: (e3) => e3 || new v(), deallocator: null });
var y = new r({ deallocator: null });
var j = new r({ deallocator: null });
var I = new s4();
var N = n();
var b2 = n();
var D = n();
var E = n();
var F = n();
var M = s(4);
var L = Math.cos(M);
var P2 = s(35);
var U = Math.cos(P2);

// node_modules/@arcgis/core/views/3d/support/meshProcessing.js
function t3(t4, o2, n3) {
  const r3 = o2 / 3, c5 = new Uint32Array(n3 + 1), e3 = new Uint32Array(n3 + 1), s5 = (t5, o3) => {
    t5 < o3 ? c5[t5 + 1]++ : e3[o3 + 1]++;
  };
  for (let x = 0; x < r3; x++) {
    const o3 = t4[3 * x], n4 = t4[3 * x + 1], r4 = t4[3 * x + 2];
    s5(o3, n4), s5(n4, r4), s5(r4, o3);
  }
  let f5 = 0, l2 = 0;
  for (let x = 0; x < n3; x++) {
    const t5 = c5[x + 1], o3 = e3[x + 1];
    c5[x + 1] = f5, e3[x + 1] = l2, f5 += t5, l2 += o3;
  }
  const i3 = new Uint32Array(6 * r3), a4 = c5[n3], w3 = (t5, o3, n4) => {
    if (t5 < o3) {
      const r4 = c5[t5 + 1]++;
      i3[2 * r4] = o3, i3[2 * r4 + 1] = n4;
    } else {
      const r4 = e3[o3 + 1]++;
      i3[2 * a4 + 2 * r4] = t5, i3[2 * a4 + 2 * r4 + 1] = n4;
    }
  };
  for (let x = 0; x < r3; x++) {
    const o3 = t4[3 * x], n4 = t4[3 * x + 1], r4 = t4[3 * x + 2];
    w3(o3, n4, x), w3(n4, r4, x), w3(r4, o3, x);
  }
  const y3 = (t5, o3) => {
    const n4 = 2 * t5, r4 = o3 - t5;
    for (let c6 = 1; c6 < r4; c6++) {
      const t6 = i3[n4 + 2 * c6], o4 = i3[n4 + 2 * c6 + 1];
      let r5 = c6 - 1;
      for (; r5 >= 0 && i3[n4 + 2 * r5] > t6; r5--) i3[n4 + 2 * r5 + 2] = i3[n4 + 2 * r5], i3[n4 + 2 * r5 + 3] = i3[n4 + 2 * r5 + 1];
      i3[n4 + 2 * r5 + 2] = t6, i3[n4 + 2 * r5 + 3] = o4;
    }
  };
  for (let x = 0; x < n3; x++) y3(c5[x], c5[x + 1]), y3(a4 + e3[x], a4 + e3[x + 1]);
  const A3 = new Int32Array(3 * r3), U2 = (o3, n4) => o3 === t4[3 * n4] ? 0 : o3 === t4[3 * n4 + 1] ? 1 : o3 === t4[3 * n4 + 2] ? 2 : -1, u5 = (t5, o3) => {
    const n4 = U2(t5, o3);
    A3[3 * o3 + n4] = -1;
  }, p6 = (t5, o3, n4, r4) => {
    const c6 = U2(t5, o3);
    A3[3 * o3 + c6] = r4;
    const e4 = U2(n4, r4);
    A3[3 * r4 + e4] = o3;
  };
  for (let x = 0; x < n3; x++) {
    let t5 = c5[x];
    const o3 = c5[x + 1];
    let n4 = e3[x];
    const r4 = e3[x + 1];
    for (; t5 < o3 && n4 < r4; ) {
      const o4 = i3[2 * t5], r5 = i3[2 * a4 + 2 * n4];
      o4 === r5 ? (p6(x, i3[2 * t5 + 1], r5, i3[2 * a4 + 2 * n4 + 1]), t5++, n4++) : o4 < r5 ? (u5(x, i3[2 * t5 + 1]), t5++) : (u5(r5, i3[2 * a4 + 2 * n4 + 1]), n4++);
    }
    for (; t5 < o3; ) u5(x, i3[2 * t5 + 1]), t5++;
    for (; n4 < r4; ) {
      u5(i3[2 * a4 + 2 * n4], i3[2 * a4 + 2 * n4 + 1]), n4++;
    }
  }
  return A3;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js
var a2 = 0.7;
var c3 = class {
  updateSettings(t4) {
    this.settings = t4, this._edgeHashFunction = t4.reducedPrecision ? l : u3;
  }
  write(t4, e3, o2) {
    S.seed = this._edgeHashFunction(o2);
    const r3 = S.getIntRange(0, 255), n3 = S.getIntRange(0, this.settings.variants - 1), i3 = S.getFloat(), s5 = 255 * (0.5 * g(-(1 - Math.min(i3 / a2, 1)) + Math.max(0, i3 - a2) / (1 - a2), 1.2) + 0.5);
    t4.position0.setVec(e3, o2.position0), t4.position1.setVec(e3, o2.position1), t4.componentIndex.set(e3, o2.componentIndex), t4.variantOffset.set(e3, r3), t4.variantStroke.set(e3, n3), t4.variantExtension.set(e3, s5);
  }
};
var m3 = new Float32Array(6);
var f3 = new Uint32Array(m3.buffer);
var p4 = new Uint32Array(1);
function u3(t4) {
  return m3[0] = t4.position0[0], m3[1] = t4.position0[1], m3[2] = t4.position0[2], m3[3] = t4.position1[0], m3[4] = t4.position1[1], m3[5] = t4.position1[2], p4[0] = 31 * (31 * (31 * (31 * (31 * (166811 + f3[0]) + f3[1]) + f3[2]) + f3[3]) + f3[4]) + f3[5], p4[0];
}
function l(t4) {
  const e3 = m3;
  e3[0] = h(t4.position0[0]), e3[1] = h(t4.position0[1]), e3[2] = h(t4.position0[2]), e3[3] = h(t4.position1[0]), e3[4] = h(t4.position1[1]), e3[5] = h(t4.position1[2]), p4[0] = 5381;
  for (let o2 = 0; o2 < f3.length; o2++) p4[0] = 31 * p4[0] + f3[o2];
  return p4[0];
}
var d2 = 1e4;
function h(t4) {
  return Math.round(t4 * d2) / d2;
}
function g(t4, e3) {
  return Math.abs(t4) ** e3 * Math.sign(t4);
}
var w2 = class {
  constructor() {
    this._commonWriter = new c3();
  }
  updateSettings(t4) {
    this._commonWriter.updateSettings(t4);
  }
  allocate(t4) {
    return a.createBuffer(t4);
  }
  write(t4, r3, i3) {
    this._commonWriter.write(t4, r3, i3), c(N2, i3.faceNormal0, i3.faceNormal1), _(N2, N2);
    const { typedBuffer: s5, typedBufferStride: a4 } = t4.normalCompressed;
    s2(s5, r3, N2[0], N2[1], N2[2], a4);
  }
};
var y2 = class {
  constructor() {
    this._commonWriter = new c3();
  }
  updateSettings(t4) {
    this._commonWriter.updateSettings(t4);
  }
  allocate(t4) {
    return m.createBuffer(t4);
  }
  write(t4, e3, o2) {
    this._commonWriter.write(t4, e3, o2);
    {
      const { typedBuffer: r3, typedBufferStride: i3 } = t4.normalCompressed;
      s2(r3, e3, o2.faceNormal0[0], o2.faceNormal0[1], o2.faceNormal0[2], i3);
    }
    {
      const { typedBuffer: r3, typedBufferStride: i3 } = t4.normal2Compressed;
      s2(r3, e3, o2.faceNormal1[0], o2.faceNormal1[1], o2.faceNormal1[2], i3);
    }
  }
};
var N2 = n();
var S = new t();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js
function c4(e3) {
  const t4 = f4(e3.data, e3.skipDeduplicate, e3.indices, e3.indicesLength);
  return p5.updateSettings(e3.writerSettings), d3.updateSettings(e3.writerSettings), d(t4, p5, d3);
}
function f4(i3, r3, n3, o2) {
  if (r3) {
    const e3 = t3(n3, o2, i3.count);
    return new u4(n3, o2, e3, i3);
  }
  const c5 = e2(i3.buffer, i3.stride / 4, { originalIndices: n3 }), f5 = t3(c5.indices, o2, c5.uniqueCount);
  return { faces: c5.indices, facesLength: c5.indices.length, neighbors: f5, vertices: n2.createView(c5.buffer) };
}
var u4 = class {
  constructor(e3, t4, i3, s5) {
    this.faces = e3, this.facesLength = t4, this.neighbors = i3, this.vertices = s5;
  }
};
var p5 = new w2();
var d3 = new y2();
var g2 = Q().vec3f("position0").vec3f("position1");
var a3 = Q().vec3f("position0").vec3f("position1").u16("componentIndex", { integer: true });

export {
  n2 as n,
  d,
  c4 as c,
  f4 as f,
  g2 as g,
  a3 as a
};
//# sourceMappingURL=chunk-HVAH5EWA.js.map
