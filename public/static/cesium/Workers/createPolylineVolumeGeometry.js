define(["./defaultValue-69ee94f4","./Matrix2-fb98ca95","./arrayRemoveDuplicates-6810f093","./BoundingRectangle-0e33bc96","./Transforms-f586e93e","./ComponentDatatype-7ed489c0","./PolylineVolumeGeometryLibrary-7ee3dcd3","./RuntimeError-ac440aa5","./GeometryAttribute-c6fd2455","./GeometryAttributes-1b4134a9","./GeometryPipeline-0177166e","./IndexDatatype-b58b63e4","./PolygonPipeline-1b3c3695","./VertexFormat-c648f71f","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./WebGLConstants-f63312fc","./EllipsoidTangentPlane-97c09048","./AxisAlignedBoundingBox-a31690ee","./IntersectionTests-2d241d2b","./Plane-a09326f5","./PolylinePipeline-8738a2dd","./EllipsoidGeodesic-093468e6","./EllipsoidRhumbLine-99a9f0c8","./AttributeCompression-142fe884","./EncodedCartesian3-928e138a"],(function(e,t,n,o,i,r,a,l,s,p,c,d,u,m,y,g,f,h,E,b,P,_,v,k,V,L){"use strict";function w(n){const o=(n=e.defaultValue(n,e.defaultValue.EMPTY_OBJECT)).polylinePositions,i=n.shapePositions;if(!e.defined(o))throw new l.DeveloperError("options.polylinePositions is required.");if(!e.defined(i))throw new l.DeveloperError("options.shapePositions is required.");this._positions=o,this._shape=i,this._ellipsoid=t.Ellipsoid.clone(e.defaultValue(n.ellipsoid,t.Ellipsoid.WGS84)),this._cornerType=e.defaultValue(n.cornerType,a.CornerType.ROUNDED),this._vertexFormat=m.VertexFormat.clone(e.defaultValue(n.vertexFormat,m.VertexFormat.DEFAULT)),this._granularity=e.defaultValue(n.granularity,r.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry";let s=1+o.length*t.Cartesian3.packedLength;s+=1+i.length*t.Cartesian2.packedLength,this.packedLength=s+t.Ellipsoid.packedLength+m.VertexFormat.packedLength+2}w.pack=function(n,o,i){if(!e.defined(n))throw new l.DeveloperError("value is required");if(!e.defined(o))throw new l.DeveloperError("array is required");let r;i=e.defaultValue(i,0);const a=n._positions;let s=a.length;for(o[i++]=s,r=0;r<s;++r,i+=t.Cartesian3.packedLength)t.Cartesian3.pack(a[r],o,i);const p=n._shape;for(s=p.length,o[i++]=s,r=0;r<s;++r,i+=t.Cartesian2.packedLength)t.Cartesian2.pack(p[r],o,i);return t.Ellipsoid.pack(n._ellipsoid,o,i),i+=t.Ellipsoid.packedLength,m.VertexFormat.pack(n._vertexFormat,o,i),i+=m.VertexFormat.packedLength,o[i++]=n._cornerType,o[i]=n._granularity,o};const x=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),C=new m.VertexFormat,D={polylinePositions:void 0,shapePositions:void 0,ellipsoid:x,vertexFormat:C,cornerType:void 0,granularity:void 0};w.unpack=function(n,o,i){if(!e.defined(n))throw new l.DeveloperError("array is required");let r;o=e.defaultValue(o,0);let a=n[o++];const s=new Array(a);for(r=0;r<a;++r,o+=t.Cartesian3.packedLength)s[r]=t.Cartesian3.unpack(n,o);a=n[o++];const p=new Array(a);for(r=0;r<a;++r,o+=t.Cartesian2.packedLength)p[r]=t.Cartesian2.unpack(n,o);const c=t.Ellipsoid.unpack(n,o,x);o+=t.Ellipsoid.packedLength;const d=m.VertexFormat.unpack(n,o,C);o+=m.VertexFormat.packedLength;const u=n[o++],y=n[o];return e.defined(i)?(i._positions=s,i._shape=p,i._ellipsoid=t.Ellipsoid.clone(c,i._ellipsoid),i._vertexFormat=m.VertexFormat.clone(d,i._vertexFormat),i._cornerType=u,i._granularity=y,i):(D.polylinePositions=s,D.shapePositions=p,D.cornerType=u,D.granularity=y,new w(D))};const F=new o.BoundingRectangle;return w.createGeometry=function(e){const l=e._positions,m=n.arrayRemoveDuplicates(l,t.Cartesian3.equalsEpsilon);let y=e._shape;if(y=a.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(y),m.length<2||y.length<3)return;u.PolygonPipeline.computeWindingOrder2D(y)===u.WindingOrder.CLOCKWISE&&y.reverse();const g=o.BoundingRectangle.fromPoints(y,F);return function(e,t,n,o){const l=new p.GeometryAttributes;o.position&&(l.position=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}));const m=t.length,y=e.length/3,g=(y-2*m)/(2*m),f=u.PolygonPipeline.triangulate(t),h=(g-1)*m*6+2*f.length,E=d.IndexDatatype.createTypedArray(y,h);let b,P,_,v,k,V;const L=2*m;let w=0;for(b=0;b<g-1;b++){for(P=0;P<m-1;P++)_=2*P+b*m*2,V=_+L,v=_+1,k=v+L,E[w++]=v,E[w++]=_,E[w++]=k,E[w++]=k,E[w++]=_,E[w++]=V;_=2*m-2+b*m*2,v=_+1,k=v+L,V=_+L,E[w++]=v,E[w++]=_,E[w++]=k,E[w++]=k,E[w++]=_,E[w++]=V}if(o.st||o.tangent||o.bitangent){const e=new Float32Array(2*y),o=1/(g-1),i=1/n.height,a=n.height/2;let p,c,d=0;for(b=0;b<g;b++){for(p=b*o,c=i*(t[0].y+a),e[d++]=p,e[d++]=c,P=1;P<m;P++)c=i*(t[P].y+a),e[d++]=p,e[d++]=c,e[d++]=p,e[d++]=c;c=i*(t[0].y+a),e[d++]=p,e[d++]=c}for(P=0;P<m;P++)p=0,c=i*(t[P].y+a),e[d++]=p,e[d++]=c;for(P=0;P<m;P++)p=(g-1)*o,c=i*(t[P].y+a),e[d++]=p,e[d++]=c;l.st=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(e)})}const x=y-2*m;for(b=0;b<f.length;b+=3){const e=f[b]+x,t=f[b+1]+x,n=f[b+2]+x;E[w++]=e,E[w++]=t,E[w++]=n,E[w++]=n+m,E[w++]=t+m,E[w++]=e+m}let C=new s.Geometry({attributes:l,indices:E,boundingSphere:i.BoundingSphere.fromVertices(e),primitiveType:s.PrimitiveType.TRIANGLES});if(o.normal&&(C=c.GeometryPipeline.computeNormal(C)),o.tangent||o.bitangent){try{C=c.GeometryPipeline.computeTangentAndBitangent(C)}catch(e){a.oneTimeWarning("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}o.tangent||(C.attributes.tangent=void 0),o.bitangent||(C.attributes.bitangent=void 0),o.st||(C.attributes.st=void 0)}return C}(a.PolylineVolumeGeometryLibrary.computePositions(m,y,g,e,!0),y,g,e._vertexFormat)},function(n,o){return e.defined(o)&&(n=w.unpack(n,o)),n._ellipsoid=t.Ellipsoid.clone(n._ellipsoid),w.createGeometry(n)}}));
//# sourceMappingURL=createPolylineVolumeGeometry.js.map