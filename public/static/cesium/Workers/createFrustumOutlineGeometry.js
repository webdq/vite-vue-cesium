define(["./defaultValue-69ee94f4","./Transforms-f586e93e","./Matrix2-fb98ca95","./RuntimeError-ac440aa5","./ComponentDatatype-7ed489c0","./FrustumGeometry-d0beee3a","./GeometryAttribute-c6fd2455","./GeometryAttributes-1b4134a9","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./WebGLConstants-f63312fc","./Plane-a09326f5","./VertexFormat-c648f71f"],(function(e,t,r,n,a,i,o,u,c,s,p,m,f){"use strict";function h(a){n.Check.typeOf.object("options",a),n.Check.typeOf.object("options.frustum",a.frustum),n.Check.typeOf.object("options.origin",a.origin),n.Check.typeOf.object("options.orientation",a.orientation);const o=a.frustum,u=a.orientation,c=a.origin,s=e.defaultValue(a._drawNearPlane,!0);let p,m;o instanceof i.PerspectiveFrustum?(p=0,m=i.PerspectiveFrustum.packedLength):o instanceof i.OrthographicFrustum&&(p=1,m=i.OrthographicFrustum.packedLength),this._frustumType=p,this._frustum=o.clone(),this._origin=r.Cartesian3.clone(c),this._orientation=t.Quaternion.clone(u),this._drawNearPlane=s,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+m+r.Cartesian3.packedLength+t.Quaternion.packedLength}h.pack=function(a,o,u){n.Check.typeOf.object("value",a),n.Check.defined("array",o),u=e.defaultValue(u,0);const c=a._frustumType,s=a._frustum;return o[u++]=c,0===c?(i.PerspectiveFrustum.pack(s,o,u),u+=i.PerspectiveFrustum.packedLength):(i.OrthographicFrustum.pack(s,o,u),u+=i.OrthographicFrustum.packedLength),r.Cartesian3.pack(a._origin,o,u),u+=r.Cartesian3.packedLength,t.Quaternion.pack(a._orientation,o,u),o[u+=t.Quaternion.packedLength]=a._drawNearPlane?1:0,o};const d=new i.PerspectiveFrustum,k=new i.OrthographicFrustum,g=new t.Quaternion,l=new r.Cartesian3;return h.unpack=function(a,o,u){n.Check.defined("array",a),o=e.defaultValue(o,0);const c=a[o++];let s;0===c?(s=i.PerspectiveFrustum.unpack(a,o,d),o+=i.PerspectiveFrustum.packedLength):(s=i.OrthographicFrustum.unpack(a,o,k),o+=i.OrthographicFrustum.packedLength);const p=r.Cartesian3.unpack(a,o,l);o+=r.Cartesian3.packedLength;const m=t.Quaternion.unpack(a,o,g),f=1===a[o+=t.Quaternion.packedLength];if(!e.defined(u))return new h({frustum:s,origin:p,orientation:m,_drawNearPlane:f});const y=c===u._frustumType?u._frustum:void 0;return u._frustum=s.clone(y),u._frustumType=c,u._origin=r.Cartesian3.clone(p,u._origin),u._orientation=t.Quaternion.clone(m,u._orientation),u._drawNearPlane=f,u},h.createGeometry=function(e){const r=e._frustumType,n=e._frustum,c=e._origin,s=e._orientation,p=e._drawNearPlane,m=new Float64Array(24);i.FrustumGeometry._computeNearFarPlanes(c,s,r,n,m);const f=new u.GeometryAttributes({position:new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})});let h,d;const k=p?2:1,g=new Uint16Array(8*(k+1));let l=p?0:1;for(;l<2;++l)h=p?8*l:0,d=4*l,g[h]=d,g[h+1]=d+1,g[h+2]=d+1,g[h+3]=d+2,g[h+4]=d+2,g[h+5]=d+3,g[h+6]=d+3,g[h+7]=d;for(l=0;l<2;++l)h=8*(k+l),d=4*l,g[h]=d,g[h+1]=d+4,g[h+2]=d+1,g[h+3]=d+5,g[h+4]=d+2,g[h+5]=d+6,g[h+6]=d+3,g[h+7]=d+7;return new o.Geometry({attributes:f,indices:g,primitiveType:o.PrimitiveType.LINES,boundingSphere:t.BoundingSphere.fromVertices(m)})},function(t,r){return e.defined(r)&&(t=h.unpack(t,r)),h.createGeometry(t)}}));
//# sourceMappingURL=createFrustumOutlineGeometry.js.map
