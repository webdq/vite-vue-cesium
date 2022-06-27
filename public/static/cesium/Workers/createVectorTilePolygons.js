define(["./AttributeCompression-142fe884","./Matrix2-fb98ca95","./Color-7b0f070a","./defaultValue-69ee94f4","./IndexDatatype-b58b63e4","./ComponentDatatype-7ed489c0","./OrientedBoundingBox-3acf3d78","./createTaskProcessorWorker","./RuntimeError-ac440aa5","./Transforms-f586e93e","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./WebGLConstants-f63312fc","./EllipsoidTangentPlane-97c09048","./AxisAlignedBoundingBox-a31690ee","./IntersectionTests-2d241d2b","./Plane-a09326f5"],(function(e,t,n,a,r,o,s,i,c,f,d,l,u,h,g,p,b){"use strict";const m=new t.Cartesian3,y=new t.Ellipsoid,C=new t.Rectangle,I={min:void 0,max:void 0,indexBytesPerElement:void 0};function x(e,t,a){const r=t.length,o=2+r*s.OrientedBoundingBox.packedLength+1+function(e){const t=e.length;let a=0;for(let r=0;r<t;++r)a+=n.Color.packedLength+3+e[r].batchIds.length;return a}(a),i=new Float64Array(o);let c=0;i[c++]=e,i[c++]=r;for(let e=0;e<r;++e)s.OrientedBoundingBox.pack(t[e],i,c),c+=s.OrientedBoundingBox.packedLength;const f=a.length;i[c++]=f;for(let e=0;e<f;++e){const t=a[e];n.Color.pack(t.color,i,c),c+=n.Color.packedLength,i[c++]=t.offset,i[c++]=t.count;const r=t.batchIds,o=r.length;i[c++]=o;for(let e=0;e<o;++e)i[c++]=r[e]}return i}const w=new t.Cartesian3,A=new t.Cartesian3,E=new t.Cartesian3,N=new t.Cartesian3,T=new t.Cartesian3,B=new t.Cartographic,k=new t.Rectangle;return i((function(i,c){let f;!function(e){const n=new Float64Array(e);let a=0;I.indexBytesPerElement=n[a++],I.min=n[a++],I.max=n[a++],t.Cartesian3.unpack(n,a,m),a+=t.Cartesian3.packedLength,t.Ellipsoid.unpack(n,a,y),a+=t.Ellipsoid.packedLength,t.Rectangle.unpack(n,a,C)}(i.packedBuffer),f=2===I.indexBytesPerElement?new Uint16Array(i.indices):new Uint32Array(i.indices);const d=new Uint16Array(i.positions),l=new Uint32Array(i.counts),u=new Uint32Array(i.indexCounts),h=new Uint32Array(i.batchIds),g=new Uint32Array(i.batchTableColors),p=new Array(l.length),b=m,L=y;let O=C;const U=I.min,P=I.max;let F,S,D,R=i.minimumHeights,_=i.maximumHeights;a.defined(R)&&a.defined(_)&&(R=new Float32Array(R),_=new Float32Array(_));const M=d.length/2,G=d.subarray(0,M),V=d.subarray(M,2*M);e.AttributeCompression.zigZagDeltaDecode(G,V);const Y=new Float64Array(3*M);for(F=0;F<M;++F){const e=G[F],n=V[F],a=o.CesiumMath.lerp(O.west,O.east,e/32767),r=o.CesiumMath.lerp(O.south,O.north,n/32767),s=t.Cartographic.fromRadians(a,r,0,B),i=L.cartographicToCartesian(s,w);t.Cartesian3.pack(i,Y,3*F)}const H=l.length,v=new Array(H),W=new Array(H);let j=0,z=0;for(F=0;F<H;++F)v[F]=j,W[F]=z,j+=l[F],z+=u[F];const Z=new Float32Array(3*M*2),q=new Uint16Array(2*M),J=new Uint32Array(W.length),K=new Uint32Array(u.length);let Q=[];const X={};for(F=0;F<H;++F)D=g[F],a.defined(X[D])?(X[D].positionLength+=l[F],X[D].indexLength+=u[F],X[D].batchIds.push(F)):X[D]={positionLength:l[F],indexLength:u[F],offset:0,indexOffset:0,batchIds:[F]};let $,ee=0,te=0;for(D in X)if(X.hasOwnProperty(D)){$=X[D],$.offset=ee,$.indexOffset=te;const e=2*$.positionLength,t=2*$.indexLength+6*$.positionLength;ee+=e,te+=t,$.indexLength=t}const ne=[];for(D in X)X.hasOwnProperty(D)&&($=X[D],ne.push({color:n.Color.fromRgba(parseInt(D)),offset:$.indexOffset,count:$.indexLength,batchIds:$.batchIds}));for(F=0;F<H;++F){D=g[F],$=X[D];const e=$.offset;let n=3*e,r=e;const o=v[F],i=l[F],c=h[F];let d=U,m=P;a.defined(R)&&a.defined(_)&&(d=R[F],m=_[F]);let y=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY,I=Number.POSITIVE_INFINITY,x=Number.NEGATIVE_INFINITY;for(S=0;S<i;++S){const e=t.Cartesian3.unpack(Y,3*o+3*S,w);L.scaleToGeodeticSurface(e,e);const a=L.cartesianToCartographic(e,B),s=a.latitude,i=a.longitude;y=Math.min(s,y),C=Math.max(s,C),I=Math.min(i,I),x=Math.max(i,x);const f=L.geodeticSurfaceNormal(e,A);let l=t.Cartesian3.multiplyByScalar(f,d,E);const u=t.Cartesian3.add(e,l,N);l=t.Cartesian3.multiplyByScalar(f,m,l);const h=t.Cartesian3.add(e,l,T);t.Cartesian3.subtract(h,b,h),t.Cartesian3.subtract(u,b,u),t.Cartesian3.pack(h,Z,n),t.Cartesian3.pack(u,Z,n+3),q[r]=c,q[r+1]=c,n+=6,r+=2}O=k,O.west=I,O.east=x,O.south=y,O.north=C,p[F]=s.OrientedBoundingBox.fromRectangle(O,U,P,L);let M=$.indexOffset;const G=W[F],V=u[F];for(J[F]=M,S=0;S<V;S+=3){const t=f[G+S]-o,n=f[G+S+1]-o,a=f[G+S+2]-o;Q[M++]=2*t+e,Q[M++]=2*n+e,Q[M++]=2*a+e,Q[M++]=2*a+1+e,Q[M++]=2*n+1+e,Q[M++]=2*t+1+e}for(S=0;S<i;++S){const t=S,n=(S+1)%i;Q[M++]=2*t+1+e,Q[M++]=2*n+e,Q[M++]=2*t+e,Q[M++]=2*t+1+e,Q[M++]=2*n+1+e,Q[M++]=2*n+e}$.offset+=2*i,$.indexOffset=M,K[F]=M-J[F]}Q=r.IndexDatatype.createTypedArray(Z.length/3,Q);const ae=ne.length;for(let e=0;e<ae;++e){const t=ne[e].batchIds;let n=0;const a=t.length;for(let e=0;e<a;++e)n+=K[t[e]];ne[e].count=n}const re=x(2===Q.BYTES_PER_ELEMENT?r.IndexDatatype.UNSIGNED_SHORT:r.IndexDatatype.UNSIGNED_INT,p,ne);return c.push(Z.buffer,Q.buffer,J.buffer,K.buffer,q.buffer,re.buffer),{positions:Z.buffer,indices:Q.buffer,indexOffsets:J.buffer,indexCounts:K.buffer,batchIds:q.buffer,packedBuffer:re.buffer}}))}));
//# sourceMappingURL=createVectorTilePolygons.js.map
