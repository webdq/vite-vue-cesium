define(["./arrayRemoveDuplicates-6810f093","./BoundingRectangle-0e33bc96","./Transforms-f586e93e","./Matrix2-fb98ca95","./RuntimeError-ac440aa5","./ComponentDatatype-7ed489c0","./CoplanarPolygonGeometryLibrary-c2c610d0","./defaultValue-69ee94f4","./GeometryAttribute-c6fd2455","./GeometryAttributes-1b4134a9","./GeometryInstance-8059c913","./GeometryPipeline-0177166e","./IndexDatatype-b58b63e4","./PolygonGeometryLibrary-3d351e50","./PolygonPipeline-1b3c3695","./VertexFormat-c648f71f","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./WebGLConstants-f63312fc","./OrientedBoundingBox-3acf3d78","./EllipsoidTangentPlane-97c09048","./AxisAlignedBoundingBox-a31690ee","./IntersectionTests-2d241d2b","./Plane-a09326f5","./AttributeCompression-142fe884","./EncodedCartesian3-928e138a","./ArcType-e1641d8d","./EllipsoidRhumbLine-99a9f0c8"],(function(e,t,n,o,a,r,i,s,l,c,p,y,u,m,d,g,f,h,b,C,x,P,A,w,F,G,L,E){"use strict";const v=new o.Cartesian3,T=new t.BoundingRectangle,k=new o.Cartesian2,D=new o.Cartesian2,_=new o.Cartesian3,V=new o.Cartesian3,R=new o.Cartesian3,H=new o.Cartesian3,I=new o.Cartesian3,M=new o.Cartesian3,B=new n.Quaternion,O=new o.Matrix3,z=new o.Matrix3,S=new o.Cartesian3;function N(e,t,a,i,s,p,y,m){const g=e.positions;let f=d.PolygonPipeline.triangulate(e.positions2D,e.holes);f.length<3&&(f=[0,1,2]);const h=u.IndexDatatype.createTypedArray(g.length,f.length);h.set(f);let b=O;if(0!==i){let e=n.Quaternion.fromAxisAngle(p,i,B);if(b=o.Matrix3.fromQuaternion(e,b),t.tangent||t.bitangent){e=n.Quaternion.fromAxisAngle(p,-i,B);const a=o.Matrix3.fromQuaternion(e,z);y=o.Cartesian3.normalize(o.Matrix3.multiplyByVector(a,y,y),y),t.bitangent&&(m=o.Cartesian3.normalize(o.Cartesian3.cross(p,y,m),m))}}else b=o.Matrix3.clone(o.Matrix3.IDENTITY,b);const C=D;t.st&&(C.x=a.x,C.y=a.y);const x=g.length,P=3*x,A=new Float64Array(P),w=t.normal?new Float32Array(P):void 0,F=t.tangent?new Float32Array(P):void 0,G=t.bitangent?new Float32Array(P):void 0,L=t.st?new Float32Array(2*x):void 0;let E=0,T=0,_=0,V=0,R=0;for(let e=0;e<x;e++){const n=g[e];if(A[E++]=n.x,A[E++]=n.y,A[E++]=n.z,t.st){const e=s(o.Matrix3.multiplyByVector(b,n,v),k);o.Cartesian2.subtract(e,C,e);const t=r.CesiumMath.clamp(e.x/a.width,0,1),i=r.CesiumMath.clamp(e.y/a.height,0,1);L[R++]=t,L[R++]=i}t.normal&&(w[T++]=p.x,w[T++]=p.y,w[T++]=p.z),t.tangent&&(F[V++]=y.x,F[V++]=y.y,F[V++]=y.z),t.bitangent&&(G[_++]=m.x,G[_++]=m.y,G[_++]=m.z)}const H=new c.GeometryAttributes;return t.position&&(H.position=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:A})),t.normal&&(H.normal=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:w})),t.tangent&&(H.tangent=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:F})),t.bitangent&&(H.bitangent=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G})),t.st&&(H.st=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:L})),new l.Geometry({attributes:H,indices:h,primitiveType:l.PrimitiveType.TRIANGLES})}function j(e){const t=(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).polygonHierarchy;a.Check.defined("options.polygonHierarchy",t);const n=s.defaultValue(e.vertexFormat,g.VertexFormat.DEFAULT);this._vertexFormat=g.VertexFormat.clone(n),this._polygonHierarchy=t,this._stRotation=s.defaultValue(e.stRotation,0),this._ellipsoid=o.Ellipsoid.clone(s.defaultValue(e.ellipsoid,o.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=m.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+g.VertexFormat.packedLength+o.Ellipsoid.packedLength+2}j.fromPositions=function(e){e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT),a.Check.defined("options.positions",e.positions);return new j({polygonHierarchy:{positions:e.positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},j.pack=function(e,t,n){return a.Check.typeOf.object("value",e),a.Check.defined("array",t),n=s.defaultValue(n,0),n=m.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n),o.Ellipsoid.pack(e._ellipsoid,t,n),n+=o.Ellipsoid.packedLength,g.VertexFormat.pack(e._vertexFormat,t,n),n+=g.VertexFormat.packedLength,t[n++]=e._stRotation,t[n]=e.packedLength,t};const Q=o.Ellipsoid.clone(o.Ellipsoid.UNIT_SPHERE),U=new g.VertexFormat,Y={polygonHierarchy:{}};return j.unpack=function(e,t,n){a.Check.defined("array",e),t=s.defaultValue(t,0);const r=m.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=r.startingIndex,delete r.startingIndex;const i=o.Ellipsoid.unpack(e,t,Q);t+=o.Ellipsoid.packedLength;const l=g.VertexFormat.unpack(e,t,U);t+=g.VertexFormat.packedLength;const c=e[t++],p=e[t];return s.defined(n)||(n=new j(Y)),n._polygonHierarchy=r,n._ellipsoid=o.Ellipsoid.clone(i,n._ellipsoid),n._vertexFormat=g.VertexFormat.clone(l,n._vertexFormat),n._stRotation=c,n.packedLength=p,n},j.createGeometry=function(t){const a=t._vertexFormat,s=t._polygonHierarchy,c=t._stRotation;let d=s.positions;if(d=e.arrayRemoveDuplicates(d,o.Cartesian3.equalsEpsilon,!0),d.length<3)return;let g=_,f=V,h=R,b=I;const C=M;if(!i.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(d,H,b,C))return;if(g=o.Cartesian3.cross(b,C,g),g=o.Cartesian3.normalize(g,g),!o.Cartesian3.equalsEpsilon(H,o.Cartesian3.ZERO,r.CesiumMath.EPSILON6)){const e=t._ellipsoid.geodeticSurfaceNormal(H,S);o.Cartesian3.dot(g,e)<0&&(g=o.Cartesian3.negate(g,g),b=o.Cartesian3.negate(b,b))}const x=i.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(H,b,C),P=i.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(H,b,C);a.tangent&&(f=o.Cartesian3.clone(b,f)),a.bitangent&&(h=o.Cartesian3.clone(C,h));const A=m.PolygonGeometryLibrary.polygonsFromHierarchy(s,x,!1),w=A.hierarchy,F=A.polygons;if(0===w.length)return;d=w[0].outerRing;const G=n.BoundingSphere.fromPoints(d),L=m.PolygonGeometryLibrary.computeBoundingRectangle(g,P,d,c,T),E=[];for(let e=0;e<F.length;e++){const t=new p.GeometryInstance({geometry:N(F[e],a,L,c,P,g,f,h)});E.push(t)}const v=y.GeometryPipeline.combineInstances(E)[0];v.attributes.position.values=new Float64Array(v.attributes.position.values),v.indices=u.IndexDatatype.createTypedArray(v.attributes.position.values.length/3,v.indices);const k=v.attributes;return a.position||delete k.position,new l.Geometry({attributes:k,indices:v.indices,primitiveType:v.primitiveType,boundingSphere:G})},function(e,t){return s.defined(t)&&(e=j.unpack(e,t)),j.createGeometry(e)}}));
//# sourceMappingURL=createCoplanarPolygonGeometry.js.map
