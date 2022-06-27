define(["exports","./Matrix2-fb98ca95","./RuntimeError-ac440aa5","./ComponentDatatype-7ed489c0","./defaultValue-69ee94f4","./EllipsoidRhumbLine-99a9f0c8","./GeometryAttribute-c6fd2455","./WebGLConstants-f63312fc"],(function(e,t,n,r,i,a,u,o){"use strict";var x=h,s=h;function h(e,t,n){n=n||2;var r,i,a,u,o,x,s,h=t&&t.length,c=h?t[0]*n:e.length,y=p(e,0,c,n,!0),v=[];if(!y||y.next===y.prev)return v;if(h&&(y=function(e,t,n,r){var i,a,u,o=[];for(i=0,a=t.length;i<a;i++)(u=p(e,t[i]*r,i<a-1?t[i+1]*r:e.length,r,!1))===u.next&&(u.steiner=!0),o.push(w(u));for(o.sort(C),i=0;i<o.length;i++)n=l(n=m(o[i],n),n.next);return n}(e,t,y,n)),e.length>80*n){r=a=e[0],i=u=e[1];for(var d=n;d<c;d+=n)(o=e[d])<r&&(r=o),(x=e[d+1])<i&&(i=x),o>a&&(a=o),x>u&&(u=x);s=0!==(s=Math.max(a-r,u-i))?1/s:0}return f(y,v,n,r,i,s),v}function p(e,t,n,r,i){var a,u;if(i===G(e,t,n,r)>0)for(a=t;a<n;a+=r)u=T(a,e[a],e[a+1],u);else for(a=n-r;a>=t;a-=r)u=T(a,e[a],e[a+1],u);return u&&O(u,u.next)&&(k(u),u=u.next),u}function l(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!O(r,r.next)&&0!==Z(r.prev,r,r.next))r=r.next;else{if(k(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function f(e,t,n,r,i,a,u){if(e){!u&&a&&function(e,t,n,r){var i=e;do{null===i.z&&(i.z=b(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,n,r,i,a,u,o,x,s=1;do{for(n=e,e=null,a=null,u=0;n;){for(u++,r=n,o=0,t=0;t<s&&(o++,r=r.nextZ);t++);for(x=s;o>0||x>0&&r;)0!==o&&(0===x||!r||n.z<=r.z)?(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,x--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,s*=2}while(u>1)}(i)}(e,r,i,a);for(var o,x,s=e;e.prev!==e.next;)if(o=e.prev,x=e.next,a?y(e,r,i,a):c(e))t.push(o.i/n),t.push(e.i/n),t.push(x.i/n),k(e),e=x.next,s=x.next;else if((e=x)===s){u?1===u?f(e=v(l(e),t,n),t,n,r,i,a,2):2===u&&d(e,t,n,r,i,a):f(l(e),t,n,r,i,a,1);break}}}function c(e){var t=e.prev,n=e,r=e.next;if(Z(t,n,r)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(E(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&Z(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function y(e,t,n,r){var i=e.prev,a=e,u=e.next;if(Z(i,a,u)>=0)return!1;for(var o=i.x<a.x?i.x<u.x?i.x:u.x:a.x<u.x?a.x:u.x,x=i.y<a.y?i.y<u.y?i.y:u.y:a.y<u.y?a.y:u.y,s=i.x>a.x?i.x>u.x?i.x:u.x:a.x>u.x?a.x:u.x,h=i.y>a.y?i.y>u.y?i.y:u.y:a.y>u.y?a.y:u.y,p=b(o,x,t,n,r),l=b(s,h,t,n,r),f=e.prevZ,c=e.nextZ;f&&f.z>=p&&c&&c.z<=l;){if(f!==e.prev&&f!==e.next&&E(i.x,i.y,a.x,a.y,u.x,u.y,f.x,f.y)&&Z(f.prev,f,f.next)>=0)return!1;if(f=f.prevZ,c!==e.prev&&c!==e.next&&E(i.x,i.y,a.x,a.y,u.x,u.y,c.x,c.y)&&Z(c.prev,c,c.next)>=0)return!1;c=c.nextZ}for(;f&&f.z>=p;){if(f!==e.prev&&f!==e.next&&E(i.x,i.y,a.x,a.y,u.x,u.y,f.x,f.y)&&Z(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;c&&c.z<=l;){if(c!==e.prev&&c!==e.next&&E(i.x,i.y,a.x,a.y,u.x,u.y,c.x,c.y)&&Z(c.prev,c,c.next)>=0)return!1;c=c.nextZ}return!0}function v(e,t,n){var r=e;do{var i=r.prev,a=r.next.next;!O(i,a)&&S(i,r,r.next,a)&&R(i,a)&&R(a,i)&&(t.push(i.i/n),t.push(r.i/n),t.push(a.i/n),k(r),k(r.next),r=e=a),r=r.next}while(r!==e);return l(r)}function d(e,t,n,r,i,a){var u=e;do{for(var o=u.next.next;o!==u.prev;){if(u.i!==o.i&&M(u,o)){var x=L(u,o);return u=l(u,u.next),x=l(x,x.next),f(u,t,n,r,i,a),void f(x,t,n,r,i,a)}o=o.next}u=u.next}while(u!==e)}function C(e,t){return e.x-t.x}function m(e,t){var n=function(e,t){var n,r=t,i=e.x,a=e.y,u=-1/0;do{if(a<=r.y&&a>=r.next.y&&r.next.y!==r.y){var o=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=i&&o>u){if(u=o,o===i){if(a===r.y)return r;if(a===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!n)return null;if(i===u)return n;var x,s=n,h=n.x,p=n.y,l=1/0;r=n;do{i>=r.x&&r.x>=h&&i!==r.x&&E(a<p?i:u,a,h,p,a<p?u:i,a,r.x,r.y)&&(x=Math.abs(a-r.y)/(i-r.x),R(r,e)&&(x<l||x===l&&(r.x>n.x||r.x===n.x&&g(n,r)))&&(n=r,l=x)),r=r.next}while(r!==s);return n}(e,t);if(!n)return t;var r=L(n,e),i=l(n,n.next);return l(r,r.next),t===n?i:t}function g(e,t){return Z(e.prev,e,t.prev)<0&&Z(t.next,e,e.next)<0}function b(e,t,n,r,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function w(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function E(e,t,n,r,i,a,u,o){return(i-u)*(t-o)-(e-u)*(a-o)>=0&&(e-u)*(r-o)-(n-u)*(t-o)>=0&&(n-u)*(a-o)-(i-u)*(r-o)>=0}function M(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&S(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(R(e,t)&&R(t,e)&&function(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do{n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(Z(e.prev,e,t.prev)||Z(e,t.prev,t))||O(e,t)&&Z(e.prev,e,e.next)>0&&Z(t.prev,t,t.next)>0)}function Z(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function O(e,t){return e.x===t.x&&e.y===t.y}function S(e,t,n,r){var i=z(Z(e,t,n)),a=z(Z(e,t,r)),u=z(Z(n,r,e)),o=z(Z(n,r,t));return i!==a&&u!==o||(!(0!==i||!A(e,n,t))||(!(0!==a||!A(e,r,t))||(!(0!==u||!A(n,e,r))||!(0!==o||!A(n,t,r)))))}function A(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function z(e){return e>0?1:e<0?-1:0}function R(e,t){return Z(e.prev,e,e.next)<0?Z(e,t,e.next)>=0&&Z(e,e.prev,t)>=0:Z(e,t,e.prev)<0||Z(e,e.next,t)<0}function L(e,t){var n=new D(e.i,e.x,e.y),r=new D(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function T(e,t,n,r){var i=new D(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function k(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function D(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function G(e,t,n,r){for(var i=0,a=t,u=n-r;a<n;a+=r)i+=(e[u]-e[a])*(e[a+1]+e[u+1]),u=a;return i}h.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,u=Math.abs(G(e,0,a,n));if(i)for(var o=0,x=t.length;o<x;o++){var s=t[o]*n,h=o<x-1?t[o+1]*n:e.length;u-=Math.abs(G(e,s,h,n))}var p=0;for(o=0;o<r.length;o+=3){var l=r[o]*n,f=r[o+1]*n,c=r[o+2]*n;p+=Math.abs((e[l]-e[c])*(e[f+1]-e[l+1])-(e[l]-e[f])*(e[c+1]-e[l+1]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},h.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var u=0;u<t;u++)n.vertices.push(e[i][a][u]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n},x.default=s;const W={CLOCKWISE:o.WebGLConstants.CW,COUNTER_CLOCKWISE:o.WebGLConstants.CCW,validate:function(e){return e===W.CLOCKWISE||e===W.COUNTER_CLOCKWISE}};var $=Object.freeze(W);const P=new t.Cartesian3,I=new t.Cartesian3,B={computeArea2D:function(e){n.Check.defined("positions",e),n.Check.typeOf.number.greaterThanOrEquals("positions.length",e.length,3);const t=e.length;let r=0;for(let n=t-1,i=0;i<t;n=i++){const t=e[n],a=e[i];r+=t.x*a.y-a.x*t.y}return.5*r},computeWindingOrder2D:function(e){return B.computeArea2D(e)>0?$.COUNTER_CLOCKWISE:$.CLOCKWISE},triangulate:function(e,r){n.Check.defined("positions",e);const i=t.Cartesian2.packArray(e);return x(i,r,2)}},q=new t.Cartesian3,N=new t.Cartesian3,U=new t.Cartesian3,_=new t.Cartesian3,K=new t.Cartesian3,V=new t.Cartesian3,j=new t.Cartesian3;B.computeSubdivision=function(e,a,o,x){x=i.defaultValue(x,r.CesiumMath.RADIANS_PER_DEGREE),n.Check.typeOf.object("ellipsoid",e),n.Check.defined("positions",a),n.Check.defined("indices",o),n.Check.typeOf.number.greaterThanOrEquals("indices.length",o.length,3),n.Check.typeOf.number.equals("indices.length % 3","0",o.length%3,0),n.Check.typeOf.number.greaterThan("granularity",x,0);const s=o.slice(0);let h;const p=a.length,l=new Array(3*p);let f=0;for(h=0;h<p;h++){const e=a[h];l[f++]=e.x,l[f++]=e.y,l[f++]=e.z}const c=[],y={},v=e.maximumRadius,d=r.CesiumMath.chordLength(x,v),C=d*d;for(;s.length>0;){const e=s.pop(),n=s.pop(),r=s.pop(),a=t.Cartesian3.fromArray(l,3*r,q),u=t.Cartesian3.fromArray(l,3*n,N),o=t.Cartesian3.fromArray(l,3*e,U),x=t.Cartesian3.multiplyByScalar(t.Cartesian3.normalize(a,_),v,_),p=t.Cartesian3.multiplyByScalar(t.Cartesian3.normalize(u,K),v,K),f=t.Cartesian3.multiplyByScalar(t.Cartesian3.normalize(o,V),v,V),d=t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(x,p,j)),m=t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(p,f,j)),g=t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(f,x,j)),b=Math.max(d,m,g);let w,E;b>C?d===b?(w=`${Math.min(r,n)} ${Math.max(r,n)}`,h=y[w],i.defined(h)||(E=t.Cartesian3.add(a,u,j),t.Cartesian3.multiplyByScalar(E,.5,E),l.push(E.x,E.y,E.z),h=l.length/3-1,y[w]=h),s.push(r,h,e),s.push(h,n,e)):m===b?(w=`${Math.min(n,e)} ${Math.max(n,e)}`,h=y[w],i.defined(h)||(E=t.Cartesian3.add(u,o,j),t.Cartesian3.multiplyByScalar(E,.5,E),l.push(E.x,E.y,E.z),h=l.length/3-1,y[w]=h),s.push(n,h,r),s.push(h,e,r)):g===b&&(w=`${Math.min(e,r)} ${Math.max(e,r)}`,h=y[w],i.defined(h)||(E=t.Cartesian3.add(o,a,j),t.Cartesian3.multiplyByScalar(E,.5,E),l.push(E.x,E.y,E.z),h=l.length/3-1,y[w]=h),s.push(e,h,n),s.push(h,r,n)):(c.push(r),c.push(n),c.push(e))}return new u.Geometry({attributes:{position:new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l})},indices:c,primitiveType:u.PrimitiveType.TRIANGLES})};const F=new t.Cartographic,H=new t.Cartographic,J=new t.Cartographic,Q=new t.Cartographic;B.computeRhumbLineSubdivision=function(e,o,x,s){s=i.defaultValue(s,r.CesiumMath.RADIANS_PER_DEGREE),n.Check.typeOf.object("ellipsoid",e),n.Check.defined("positions",o),n.Check.defined("indices",x),n.Check.typeOf.number.greaterThanOrEquals("indices.length",x.length,3),n.Check.typeOf.number.equals("indices.length % 3","0",x.length%3,0),n.Check.typeOf.number.greaterThan("granularity",s,0);const h=x.slice(0);let p;const l=o.length,f=new Array(3*l);let c=0;for(p=0;p<l;p++){const e=o[p];f[c++]=e.x,f[c++]=e.y,f[c++]=e.z}const y=[],v={},d=e.maximumRadius,C=r.CesiumMath.chordLength(s,d),m=new a.EllipsoidRhumbLine(void 0,void 0,e),g=new a.EllipsoidRhumbLine(void 0,void 0,e),b=new a.EllipsoidRhumbLine(void 0,void 0,e);for(;h.length>0;){const n=h.pop(),r=h.pop(),a=h.pop(),u=t.Cartesian3.fromArray(f,3*a,q),o=t.Cartesian3.fromArray(f,3*r,N),x=t.Cartesian3.fromArray(f,3*n,U),s=e.cartesianToCartographic(u,F),l=e.cartesianToCartographic(o,H),c=e.cartesianToCartographic(x,J);m.setEndPoints(s,l);const d=m.surfaceDistance;g.setEndPoints(l,c);const w=g.surfaceDistance;b.setEndPoints(c,s);const E=b.surfaceDistance,M=Math.max(d,w,E);let Z,O,S,A;M>C?d===M?(Z=`${Math.min(a,r)} ${Math.max(a,r)}`,p=v[Z],i.defined(p)||(O=m.interpolateUsingFraction(.5,Q),S=.5*(s.height+l.height),A=t.Cartesian3.fromRadians(O.longitude,O.latitude,S,e,j),f.push(A.x,A.y,A.z),p=f.length/3-1,v[Z]=p),h.push(a,p,n),h.push(p,r,n)):w===M?(Z=`${Math.min(r,n)} ${Math.max(r,n)}`,p=v[Z],i.defined(p)||(O=g.interpolateUsingFraction(.5,Q),S=.5*(l.height+c.height),A=t.Cartesian3.fromRadians(O.longitude,O.latitude,S,e,j),f.push(A.x,A.y,A.z),p=f.length/3-1,v[Z]=p),h.push(r,p,a),h.push(p,n,a)):E===M&&(Z=`${Math.min(n,a)} ${Math.max(n,a)}`,p=v[Z],i.defined(p)||(O=b.interpolateUsingFraction(.5,Q),S=.5*(c.height+s.height),A=t.Cartesian3.fromRadians(O.longitude,O.latitude,S,e,j),f.push(A.x,A.y,A.z),p=f.length/3-1,v[Z]=p),h.push(n,p,r),h.push(p,a,r)):(y.push(a),y.push(r),y.push(n))}return new u.Geometry({attributes:{position:new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f})},indices:y,primitiveType:u.PrimitiveType.TRIANGLES})},B.scaleToGeodeticHeight=function(e,n,r,a){r=i.defaultValue(r,t.Ellipsoid.WGS84);let u=P,o=I;if(n=i.defaultValue(n,0),a=i.defaultValue(a,!0),i.defined(e)){const i=e.length;for(let x=0;x<i;x+=3)t.Cartesian3.fromArray(e,x,o),a&&(o=r.scaleToGeodeticSurface(o,o)),0!==n&&(u=r.geodeticSurfaceNormal(o,u),t.Cartesian3.multiplyByScalar(u,n,u),t.Cartesian3.add(o,u,o)),e[x]=o.x,e[x+1]=o.y,e[x+2]=o.z}return e},e.PolygonPipeline=B,e.WindingOrder=$}));
//# sourceMappingURL=PolygonPipeline-1b3c3695.js.map
