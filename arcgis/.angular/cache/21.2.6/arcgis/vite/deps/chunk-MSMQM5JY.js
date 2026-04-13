import {
  i as i2
} from "./chunk-KILV7MXA.js";
import {
  t as t2
} from "./chunk-EWB3NJAR.js";
import {
  r
} from "./chunk-AZAMZEXA.js";
import {
  s2 as s
} from "./chunk-HIVNEJHE.js";
import {
  t
} from "./chunk-2TISYHLG.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import {
  f,
  i
} from "./chunk-QWNB5I7T.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/RightAngleSnappingCandidate.js
var r2 = class extends t2 {
  constructor({ targetPoint: t3, constraint: e, previousVertex: i3, otherVertex: r3, otherVertexType: s3, isDraped: n3, selfSnappingType: o, objectId: h, domain: p }) {
    super(t3, e, n3, p ?? 2), this.previousVertex = i3, this.otherVertex = r3, this.otherVertexType = s3, this.selfSnappingType = o ?? 0, this.objectId = h ?? null;
  }
  get hints() {
    const t3 = this.previousVertex, r3 = 1 === this.otherVertexType ? this.otherVertex : this.targetPoint, s3 = 1 === this.otherVertexType ? this.targetPoint : this.otherVertex;
    return [new s(0, r3, s3, this.isDraped, this.domain), new s(1, t3, r3, this.isDraped, this.domain), new r(this.previousVertex, r3, s3, this.isDraped, this.domain)];
  }
};

// node_modules/@arcgis/core/views/interactive/support/viewUtils.js
function s2(r3, t3, o, s3) {
  return "2d" === s3.type ? (c.x = r3[0], c.y = r3[1], c.spatialReference = t3, s3.toScreen(c)) : (i2(r3, t3, o, s3, a), s3.state.camera.projectToScreen(a, n2), i(n2[0], n2[1]));
}
var c = t(0, 0, 0, null);
var a = n();
var n2 = f();

export {
  r2 as r,
  s2 as s
};
//# sourceMappingURL=chunk-MSMQM5JY.js.map
