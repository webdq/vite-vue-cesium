define(["./AxisAlignedBoundingBox-a31690ee","./Matrix2-fb98ca95","./defaultValue-69ee94f4","./TerrainEncoding-11ca6f56","./IndexDatatype-b58b63e4","./ComponentDatatype-7ed489c0","./RuntimeError-ac440aa5","./Transforms-f586e93e","./WebMercatorProjection-02959b6e","./createTaskProcessorWorker","./AttributeCompression-142fe884","./WebGLConstants-f63312fc","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f"],(function(e,t,r,n,o,i,a,s,c,h,d,u,l,I){"use strict";function m(){a.DeveloperError.throwInstantiationError()}Object.defineProperties(m.prototype,{errorEvent:{get:a.DeveloperError.throwInstantiationError},credit:{get:a.DeveloperError.throwInstantiationError},tilingScheme:{get:a.DeveloperError.throwInstantiationError},ready:{get:a.DeveloperError.throwInstantiationError},readyPromise:{get:a.DeveloperError.throwInstantiationError},hasWaterMask:{get:a.DeveloperError.throwInstantiationError},hasVertexNormals:{get:a.DeveloperError.throwInstantiationError},availability:{get:a.DeveloperError.throwInstantiationError}});const g=[];m.getRegularGridIndices=function(e,t){if(e*t>=i.CesiumMath.FOUR_GIGABYTES)throw new a.DeveloperError("The total number of vertices (width * height) must be less than 4,294,967,296.");let n=g[e];r.defined(n)||(g[e]=n=[]);let o=n[t];return r.defined(o)||(o=e*t<i.CesiumMath.SIXTY_FOUR_KILOBYTES?n[t]=new Uint16Array((e-1)*(t-1)*6):n[t]=new Uint32Array((e-1)*(t-1)*6),p(e,t,o,0)),o};const T=[];m.getRegularGridIndicesAndEdgeIndices=function(e,t){if(e*t>=i.CesiumMath.FOUR_GIGABYTES)throw new a.DeveloperError("The total number of vertices (width * height) must be less than 4,294,967,296.");let n=T[e];r.defined(n)||(T[e]=n=[]);let o=n[t];if(!r.defined(o)){const r=m.getRegularGridIndices(e,t),i=E(e,t),a=i.westIndicesSouthToNorth,s=i.southIndicesEastToWest,c=i.eastIndicesNorthToSouth,h=i.northIndicesWestToEast;o=n[t]={indices:r,westIndicesSouthToNorth:a,southIndicesEastToWest:s,eastIndicesNorthToSouth:c,northIndicesWestToEast:h}}return o};const f=[];function E(e,t){const r=new Array(t),n=new Array(e),o=new Array(t),i=new Array(e);let a;for(a=0;a<e;++a)i[a]=a,n[a]=e*t-1-a;for(a=0;a<t;++a)o[a]=(a+1)*e-1,r[a]=(t-a-1)*e;return{westIndicesSouthToNorth:r,southIndicesEastToWest:n,eastIndicesNorthToSouth:o,northIndicesWestToEast:i}}function p(e,t,r,n){let o=0;for(let i=0;i<t-1;++i){for(let t=0;t<e-1;++t){const t=o,i=t+e,a=i+1,s=t+1;r[n++]=t,r[n++]=i,r[n++]=s,r[n++]=s,r[n++]=i,r[n++]=a,++o}++o}}function w(e,t,r,n){let o=e[0];const i=e.length;for(let a=1;a<i;++a){const i=e[a];r[n++]=o,r[n++]=i,r[n++]=t,r[n++]=t,r[n++]=i,r[n++]=t+1,o=i,++t}return n}m.getRegularGridAndSkirtIndicesAndEdgeIndices=function(e,t){if(e*t>=i.CesiumMath.FOUR_GIGABYTES)throw new a.DeveloperError("The total number of vertices (width * height) must be less than 4,294,967,296.");let n=f[e];r.defined(n)||(f[e]=n=[]);let s=n[t];if(!r.defined(s)){const r=e*t,i=(e-1)*(t-1)*6,a=2*e+2*t,c=r+a,h=i+6*Math.max(0,a-4),d=E(e,t),u=d.westIndicesSouthToNorth,l=d.southIndicesEastToWest,I=d.eastIndicesNorthToSouth,g=d.northIndicesWestToEast,T=o.IndexDatatype.createTypedArray(c,h);p(e,t,T,0),m.addSkirtIndices(u,l,I,g,r,T,i),s=n[t]={indices:T,westIndicesSouthToNorth:u,southIndicesEastToWest:l,eastIndicesNorthToSouth:I,northIndicesWestToEast:g,indexCountWithoutSkirts:i}}return s},m.addSkirtIndices=function(e,t,r,n,o,i,a){let s=o;a=w(e,s,i,a),s+=e.length,a=w(t,s,i,a),s+=t.length,a=w(r,s,i,a),s+=r.length,w(n,s,i,a)},m.heightmapTerrainQuality=.25,m.getEstimatedLevelZeroGeometricErrorForAHeightmap=function(e,t,r){return 2*e.maximumRadius*Math.PI*m.heightmapTerrainQuality/(t*r)},m.prototype.requestTileGeometry=a.DeveloperError.throwInstantiationError,m.prototype.getLevelMaximumGeometricError=a.DeveloperError.throwInstantiationError,m.prototype.getTileDataAvailable=a.DeveloperError.throwInstantiationError,m.prototype.loadTileDataAvailability=a.DeveloperError.throwInstantiationError;const y=32767,N=new t.Cartesian3,S=new t.Cartesian3,b=new t.Cartesian3,M=new t.Cartographic,x=new t.Cartesian2;function A(e,r,n,o,a,s,c,h,d){let u=Number.POSITIVE_INFINITY;const l=a.north,I=a.south;let m=a.east;const g=a.west;m<g&&(m+=i.CesiumMath.TWO_PI);const T=e.length;for(let a=0;a<T;++a){const T=e[a],f=n[T],E=o[T];M.longitude=i.CesiumMath.lerp(g,m,E.x),M.latitude=i.CesiumMath.lerp(I,l,E.y),M.height=f-r;const p=s.cartographicToCartesian(M,N);t.Matrix4.multiplyByPoint(c,p,p),t.Cartesian3.minimumByComponent(p,h,h),t.Cartesian3.maximumByComponent(p,d,d),u=Math.min(u,M.height)}return u}function C(e,t,n,o,a,s,h,d,u,l,I,m,g,T){const f=r.defined(h),E=u.north,p=u.south;let w=u.east;const y=u.west;w<y&&(w+=i.CesiumMath.TWO_PI);const S=n.length;for(let r=0;r<S;++r){const u=n[r],S=a[u],b=s[u];M.longitude=i.CesiumMath.lerp(y,w,b.x)+g,M.latitude=i.CesiumMath.lerp(p,E,b.y)+T,M.height=S-l;const A=d.cartographicToCartesian(M,N);if(f){const e=2*u;x.x=h[e],x.y=h[e+1]}let C,v;o.hasWebMercatorT&&(C=(c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(M.latitude)-I)*m),o.hasGeodeticSurfaceNormals&&(v=d.geodeticSurfaceNormal(A)),t=o.encode(e,t,A,b,M.height,x,C,v)}}function v(e,t){let n;return"function"==typeof e.slice&&(n=e.slice(),"function"!=typeof n.sort&&(n=void 0)),r.defined(n)||(n=Array.prototype.slice.call(e)),n.sort(t),n}return h((function(a,h){const d=a.quantizedVertices,u=d.length/3,l=a.octEncodedNormals,I=a.westIndices.length+a.eastIndices.length+a.southIndices.length+a.northIndices.length,g=a.includeWebMercatorT,T=a.exaggeration,f=a.exaggerationRelativeHeight,E=1!==T,p=t.Rectangle.clone(a.rectangle),w=p.west,W=p.south,D=p.east,P=p.north,G=t.Ellipsoid.clone(a.ellipsoid),F=a.minimumHeight,_=a.maximumHeight,k=a.relativeToCenter,H=s.Transforms.eastNorthUpToFixedFrame(k,G),Y=t.Matrix4.inverseTransformation(H,new t.Matrix4);let O,B;g&&(O=c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(W),B=1/(c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(P)-O));const V=d.subarray(0,u),R=d.subarray(u,2*u),L=d.subarray(2*u,3*u),U=r.defined(l),j=new Array(u),z=new Array(u),q=new Array(u),Q=g?new Array(u):[],K=E?new Array(u):[],X=S;X.x=Number.POSITIVE_INFINITY,X.y=Number.POSITIVE_INFINITY,X.z=Number.POSITIVE_INFINITY;const Z=b;Z.x=Number.NEGATIVE_INFINITY,Z.y=Number.NEGATIVE_INFINITY,Z.z=Number.NEGATIVE_INFINITY;let J=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY,ee=Number.POSITIVE_INFINITY,te=Number.NEGATIVE_INFINITY;for(let e=0;e<u;++e){const r=V[e],n=R[e],o=r/y,a=n/y,s=i.CesiumMath.lerp(F,_,L[e]/y);M.longitude=i.CesiumMath.lerp(w,D,o),M.latitude=i.CesiumMath.lerp(W,P,a),M.height=s,J=Math.min(M.longitude,J),$=Math.max(M.longitude,$),ee=Math.min(M.latitude,ee),te=Math.max(M.latitude,te);const h=G.cartographicToCartesian(M);j[e]=new t.Cartesian2(o,a),z[e]=s,q[e]=h,g&&(Q[e]=(c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(M.latitude)-O)*B),E&&(K[e]=G.geodeticSurfaceNormal(h)),t.Matrix4.multiplyByPoint(Y,h,N),t.Cartesian3.minimumByComponent(N,X,X),t.Cartesian3.maximumByComponent(N,Z,Z)}const re=v(a.westIndices,(function(e,t){return j[e].y-j[t].y})),ne=v(a.eastIndices,(function(e,t){return j[t].y-j[e].y})),oe=v(a.southIndices,(function(e,t){return j[t].x-j[e].x})),ie=v(a.northIndices,(function(e,t){return j[e].x-j[t].x}));let ae;if(F<0){ae=new n.EllipsoidalOccluder(G).computeHorizonCullingPointPossiblyUnderEllipsoid(k,q,F)}let se=F;se=Math.min(se,A(a.westIndices,a.westSkirtHeight,z,j,p,G,Y,X,Z)),se=Math.min(se,A(a.southIndices,a.southSkirtHeight,z,j,p,G,Y,X,Z)),se=Math.min(se,A(a.eastIndices,a.eastSkirtHeight,z,j,p,G,Y,X,Z)),se=Math.min(se,A(a.northIndices,a.northSkirtHeight,z,j,p,G,Y,X,Z));const ce=new e.AxisAlignedBoundingBox(X,Z,k),he=new n.TerrainEncoding(k,ce,se,_,H,U,g,E,T,f),de=he.stride,ue=new Float32Array(u*de+I*de);let le=0;for(let e=0;e<u;++e){if(U){const t=2*e;x.x=l[t],x.y=l[t+1]}le=he.encode(ue,le,q[e],j[e],z[e],x,Q[e],K[e])}const Ie=Math.max(0,2*(I-4)),me=a.indices.length+3*Ie,ge=o.IndexDatatype.createTypedArray(u+I,me);ge.set(a.indices,0);const Te=1e-4,fe=($-J)*Te,Ee=(te-ee)*Te,pe=-fe,we=fe,ye=Ee,Ne=-Ee;let Se=u*de;return C(ue,Se,re,he,z,j,l,G,p,a.westSkirtHeight,O,B,pe,0),Se+=a.westIndices.length*de,C(ue,Se,oe,he,z,j,l,G,p,a.southSkirtHeight,O,B,0,Ne),Se+=a.southIndices.length*de,C(ue,Se,ne,he,z,j,l,G,p,a.eastSkirtHeight,O,B,we,0),Se+=a.eastIndices.length*de,C(ue,Se,ie,he,z,j,l,G,p,a.northSkirtHeight,O,B,0,ye),m.addSkirtIndices(re,oe,ne,ie,u,ge,a.indices.length),h.push(ue.buffer,ge.buffer),{vertices:ue.buffer,indices:ge.buffer,westIndicesSouthToNorth:re,southIndicesEastToWest:oe,eastIndicesNorthToSouth:ne,northIndicesWestToEast:ie,vertexStride:de,center:k,minimumHeight:F,maximumHeight:_,occludeePointInScaledSpace:ae,encoding:he,indexCountWithoutSkirts:a.indices.length}}))}));
//# sourceMappingURL=createVerticesFromQuantizedTerrainMesh.js.map