define(["exports","./Matrix2-fb98ca95","./defaultValue-69ee94f4","./RuntimeError-ac440aa5","./EllipsoidGeodesic-093468e6","./EllipsoidRhumbLine-99a9f0c8","./IntersectionTests-2d241d2b","./ComponentDatatype-7ed489c0","./Plane-a09326f5"],(function(e,t,n,a,i,r,o,s,c){"use strict";const l={numberOfPoints:function(e,n,a){const i=t.Cartesian3.distance(e,n);return Math.ceil(i/a)},numberOfPointsRhumbLine:function(e,t,n){const a=Math.pow(e.longitude-t.longitude,2)+Math.pow(e.latitude-t.latitude,2);return Math.max(1,Math.ceil(Math.sqrt(a/(n*n))))}},u=new t.Cartographic;l.extractHeights=function(e,t){const n=e.length,a=new Array(n);for(let i=0;i<n;i++){const n=e[i];a[i]=t.cartesianToCartographic(n,u).height}return a};const h=new t.Matrix4,f=new t.Cartesian3,p=new t.Cartesian3,d=new c.Plane(t.Cartesian3.UNIT_X,0),g=new t.Cartesian3,C=new c.Plane(t.Cartesian3.UNIT_X,0),m=new t.Cartesian3,w=new t.Cartesian3,P=[];function T(e,t,n){const a=P;let i;if(a.length=e,t===n){for(i=0;i<e;i++)a[i]=t;return a}const r=(n-t)/e;for(i=0;i<e;i++){const e=t+i*r;a[i]=e}return a}const y=new t.Cartographic,E=new t.Cartographic,A=new t.Cartesian3,R=new t.Cartesian3,b=new t.Cartesian3,D=new i.EllipsoidGeodesic;let M=new r.EllipsoidRhumbLine;function S(e,n,a,i,r,o,s,c){const u=i.scaleToGeodeticSurface(e,R),h=i.scaleToGeodeticSurface(n,b),f=l.numberOfPoints(e,n,a),p=i.cartesianToCartographic(u,y),d=i.cartesianToCartographic(h,E),g=T(f,r,o);D.setEndPoints(p,d);const C=D.surfaceDistance/f;let m=c;p.height=r;let w=i.cartographicToCartesian(p,A);t.Cartesian3.pack(w,s,m),m+=3;for(let e=1;e<f;e++){const n=D.interpolateUsingSurfaceDistance(e*C,E);n.height=g[e],w=i.cartographicToCartesian(n,A),t.Cartesian3.pack(w,s,m),m+=3}return m}function x(e,n,a,i,o,s,c,u){const h=i.cartesianToCartographic(e,y),f=i.cartesianToCartographic(n,E),p=l.numberOfPointsRhumbLine(h,f,a);h.height=0,f.height=0;const d=T(p,o,s);M.ellipsoid.equals(i)||(M=new r.EllipsoidRhumbLine(void 0,void 0,i)),M.setEndPoints(h,f);const g=M.surfaceDistance/p;let C=u;h.height=o;let m=i.cartographicToCartesian(h,A);t.Cartesian3.pack(m,c,C),C+=3;for(let e=1;e<p;e++){const n=M.interpolateUsingSurfaceDistance(e*g,E);n.height=d[e],m=i.cartographicToCartesian(n,A),t.Cartesian3.pack(m,c,C),C+=3}return C}l.wrapLongitude=function(e,a){const i=[],r=[];if(n.defined(e)&&e.length>0){a=n.defaultValue(a,t.Matrix4.IDENTITY);const s=t.Matrix4.inverseTransformation(a,h),l=t.Matrix4.multiplyByPoint(s,t.Cartesian3.ZERO,f),u=t.Cartesian3.normalize(t.Matrix4.multiplyByPointAsVector(s,t.Cartesian3.UNIT_Y,p),p),P=c.Plane.fromPointNormal(l,u,d),T=t.Cartesian3.normalize(t.Matrix4.multiplyByPointAsVector(s,t.Cartesian3.UNIT_X,g),g),y=c.Plane.fromPointNormal(l,T,C);let E=1;i.push(t.Cartesian3.clone(e[0]));let A=i[0];const R=e.length;for(let a=1;a<R;++a){const s=e[a];if(c.Plane.getPointDistance(y,A)<0||c.Plane.getPointDistance(y,s)<0){const e=o.IntersectionTests.lineSegmentPlane(A,s,P,m);if(n.defined(e)){const n=t.Cartesian3.multiplyByScalar(u,5e-9,w);c.Plane.getPointDistance(P,A)<0&&t.Cartesian3.negate(n,n),i.push(t.Cartesian3.add(e,n,new t.Cartesian3)),r.push(E+1),t.Cartesian3.negate(n,n),i.push(t.Cartesian3.add(e,n,new t.Cartesian3)),E=1}}i.push(t.Cartesian3.clone(e[a])),E++,A=s}r.push(E)}return{positions:i,lengths:r}},l.generateArc=function(e){n.defined(e)||(e={});const i=e.positions;if(!n.defined(i))throw new a.DeveloperError("options.positions is required.");const r=i.length,o=n.defaultValue(e.ellipsoid,t.Ellipsoid.WGS84);let c=n.defaultValue(e.height,0);const u=Array.isArray(c);if(r<1)return[];if(1===r){const e=o.scaleToGeodeticSurface(i[0],R);if(c=u?c[0]:c,0!==c){const n=o.geodeticSurfaceNormal(e,A);t.Cartesian3.multiplyByScalar(n,c,n),t.Cartesian3.add(e,n,e)}return[e.x,e.y,e.z]}let h=e.minDistance;if(!n.defined(h)){const t=n.defaultValue(e.granularity,s.CesiumMath.RADIANS_PER_DEGREE);h=s.CesiumMath.chordLength(t,o.maximumRadius)}let f,p=0;for(f=0;f<r-1;f++)p+=l.numberOfPoints(i[f],i[f+1],h);const d=3*(p+1),g=new Array(d);let C=0;for(f=0;f<r-1;f++){C=S(i[f],i[f+1],h,o,u?c[f]:c,u?c[f+1]:c,g,C)}P.length=0;const m=i[r-1],w=o.cartesianToCartographic(m,y);w.height=u?c[r-1]:c;const T=o.cartographicToCartesian(w,A);return t.Cartesian3.pack(T,g,d-3),g};const N=new t.Cartographic,G=new t.Cartographic;l.generateRhumbArc=function(e){n.defined(e)||(e={});const i=e.positions;if(!n.defined(i))throw new a.DeveloperError("options.positions is required.");const r=i.length,o=n.defaultValue(e.ellipsoid,t.Ellipsoid.WGS84);let c=n.defaultValue(e.height,0);const u=Array.isArray(c);if(r<1)return[];if(1===r){const e=o.scaleToGeodeticSurface(i[0],R);if(c=u?c[0]:c,0!==c){const n=o.geodeticSurfaceNormal(e,A);t.Cartesian3.multiplyByScalar(n,c,n),t.Cartesian3.add(e,n,e)}return[e.x,e.y,e.z]}const h=n.defaultValue(e.granularity,s.CesiumMath.RADIANS_PER_DEGREE);let f,p,d=0,g=o.cartesianToCartographic(i[0],N);for(f=0;f<r-1;f++)p=o.cartesianToCartographic(i[f+1],G),d+=l.numberOfPointsRhumbLine(g,p,h),g=t.Cartographic.clone(p,N);const C=3*(d+1),m=new Array(C);let w=0;for(f=0;f<r-1;f++){w=x(i[f],i[f+1],h,o,u?c[f]:c,u?c[f+1]:c,m,w)}P.length=0;const T=i[r-1],E=o.cartesianToCartographic(T,y);E.height=u?c[r-1]:c;const b=o.cartographicToCartesian(E,A);return t.Cartesian3.pack(b,m,C-3),m},l.generateCartesianArc=function(e){const n=l.generateArc(e),a=n.length/3,i=new Array(a);for(let e=0;e<a;e++)i[e]=t.Cartesian3.unpack(n,3*e);return i},l.generateCartesianRhumbArc=function(e){const n=l.generateRhumbArc(e),a=n.length/3,i=new Array(a);for(let e=0;e<a;e++)i[e]=t.Cartesian3.unpack(n,3*e);return i},e.PolylinePipeline=l}));
//# sourceMappingURL=PolylinePipeline-8738a2dd.js.map
