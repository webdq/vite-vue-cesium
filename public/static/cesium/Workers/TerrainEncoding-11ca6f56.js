define(["exports","./Transforms-f586e93e","./Matrix2-fb98ca95","./RuntimeError-ac440aa5","./defaultValue-69ee94f4","./AttributeCompression-142fe884","./ComponentDatatype-7ed489c0"],(function(t,e,i,o,a,n,r){"use strict";function s(t,e){o.Check.typeOf.object("ellipsoid",t),this._ellipsoid=t,this._cameraPosition=new i.Cartesian3,this._cameraPositionInScaledSpace=new i.Cartesian3,this._distanceToLimbInScaledSpaceSquared=0,a.defined(e)&&(this.cameraPosition=e)}Object.defineProperties(s.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},cameraPosition:{get:function(){return this._cameraPosition},set:function(t){const e=this._ellipsoid.transformPositionToScaledSpace(t,this._cameraPositionInScaledSpace),o=i.Cartesian3.magnitudeSquared(e)-1;i.Cartesian3.clone(t,this._cameraPosition),this._cameraPositionInScaledSpace=e,this._distanceToLimbInScaledSpaceSquared=o}}});const c=new i.Cartesian3;s.prototype.isPointVisible=function(t){return C(this._ellipsoid.transformPositionToScaledSpace(t,c),this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)},s.prototype.isScaledSpacePointVisible=function(t){return C(t,this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)};const d=new i.Cartesian3;s.prototype.isScaledSpacePointVisiblePossiblyUnderEllipsoid=function(t,e){const i=this._ellipsoid;let o,n;return a.defined(e)&&e<0&&i.minimumRadius>-e?(n=d,n.x=this._cameraPosition.x/(i.radii.x+e),n.y=this._cameraPosition.y/(i.radii.y+e),n.z=this._cameraPosition.z/(i.radii.z+e),o=n.x*n.x+n.y*n.y+n.z*n.z-1):(n=this._cameraPositionInScaledSpace,o=this._distanceToLimbInScaledSpaceSquared),C(t,n,o)},s.prototype.computeHorizonCullingPoint=function(t,e,i){return f(this._ellipsoid,t,e,i)};const u=i.Ellipsoid.clone(i.Ellipsoid.UNIT_SPHERE);s.prototype.computeHorizonCullingPointPossiblyUnderEllipsoid=function(t,e,i,o){return f(h(this._ellipsoid,i,u),t,e,o)},s.prototype.computeHorizonCullingPointFromVertices=function(t,e,i,o,a){return x(this._ellipsoid,t,e,i,o,a)},s.prototype.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid=function(t,e,i,o,a,n){return x(h(this._ellipsoid,a,u),t,e,i,o,n)};const l=[];s.prototype.computeHorizonCullingPointFromRectangle=function(t,a,n){o.Check.typeOf.object("rectangle",t);const r=i.Rectangle.subsample(t,a,0,l),s=e.BoundingSphere.fromPoints(r);if(!(i.Cartesian3.magnitude(s.center)<.1*a.minimumRadius))return this.computeHorizonCullingPoint(s.center,r,n)};const m=new i.Cartesian3;function h(t,e,o){if(a.defined(e)&&e<0&&t.minimumRadius>-e){const a=i.Cartesian3.fromElements(t.radii.x+e,t.radii.y+e,t.radii.z+e,m);t=i.Ellipsoid.fromCartesian3(a,o)}return t}function f(t,e,n,r){o.Check.typeOf.object("directionToPoint",e),o.Check.defined("positions",n),a.defined(r)||(r=new i.Cartesian3);const s=b(t,e);let c=0;for(let e=0,i=n.length;e<i;++e){const i=y(t,n[e],s);if(i<0)return;c=Math.max(c,i)}return N(s,c,r)}const p=new i.Cartesian3;function x(t,e,n,r,s,c){o.Check.typeOf.object("directionToPoint",e),o.Check.defined("vertices",n),o.Check.typeOf.number("stride",r),a.defined(c)||(c=new i.Cartesian3),r=a.defaultValue(r,3),s=a.defaultValue(s,i.Cartesian3.ZERO);const d=b(t,e);let u=0;for(let e=0,i=n.length;e<i;e+=r){p.x=n[e]+s.x,p.y=n[e+1]+s.y,p.z=n[e+2]+s.z;const i=y(t,p,d);if(i<0)return;u=Math.max(u,i)}return N(d,u,c)}function C(t,e,o){const a=e,n=o,r=i.Cartesian3.subtract(t,a,c),s=-i.Cartesian3.dot(r,a);return!(n<0?s>0:s>n&&s*s/i.Cartesian3.magnitudeSquared(r)>n)}const S=new i.Cartesian3,g=new i.Cartesian3;function y(t,e,o){const a=t.transformPositionToScaledSpace(e,S);let n=i.Cartesian3.magnitudeSquared(a),r=Math.sqrt(n);const s=i.Cartesian3.divideByScalar(a,r,g);n=Math.max(1,n),r=Math.max(1,r);const c=1/r;return 1/(i.Cartesian3.dot(s,o)*c-i.Cartesian3.magnitude(i.Cartesian3.cross(s,o,s))*(Math.sqrt(n-1)*c))}function N(t,e,o){if(!(e<=0||e===1/0||e!=e))return i.Cartesian3.multiplyByScalar(t,e,o)}const T=new i.Cartesian3;function b(t,e){return i.Cartesian3.equals(e,i.Cartesian3.ZERO)?e:(t.transformPositionToScaledSpace(e,T),i.Cartesian3.normalize(T,T))}const M={getHeight:function(t,e,i){return(t-i)*e+i}},P=new i.Cartesian3;M.getPosition=function(t,e,o,a,n){const r=e.cartesianToCartographic(t,P),s=M.getHeight(r.height,o,a);return i.Cartesian3.fromRadians(r.longitude,r.latitude,s,e,n)};var z=Object.freeze({NONE:0,BITS12:1});const _=new i.Cartesian3,E=new i.Cartesian3,H=new i.Cartesian2,w=new i.Matrix4,A=new i.Matrix4,I=Math.pow(2,12);function O(t,e,o,n,r,s,c,d,u,l){let m,h,f=z.NONE;if(a.defined(e)&&a.defined(o)&&a.defined(n)&&a.defined(r)){const t=e.minimum,a=e.maximum,s=i.Cartesian3.subtract(a,t,E),c=n-o;f=Math.max(i.Cartesian3.maximumComponent(s),c)<I-1?z.BITS12:z.NONE,m=i.Matrix4.inverseTransformation(r,new i.Matrix4);const d=i.Cartesian3.negate(t,_);i.Matrix4.multiply(i.Matrix4.fromTranslation(d,w),m,m);const u=_;u.x=1/s.x,u.y=1/s.y,u.z=1/s.z,i.Matrix4.multiply(i.Matrix4.fromScale(u,w),m,m),h=i.Matrix4.clone(r),i.Matrix4.setTranslation(h,i.Cartesian3.ZERO,h),r=i.Matrix4.clone(r,new i.Matrix4);const l=i.Matrix4.fromTranslation(t,w),p=i.Matrix4.fromScale(s,A),x=i.Matrix4.multiply(l,p,w);i.Matrix4.multiply(r,x,r),i.Matrix4.multiply(h,x,h)}this.quantization=f,this.minimumHeight=o,this.maximumHeight=n,this.center=i.Cartesian3.clone(t),this.toScaledENU=m,this.fromScaledENU=r,this.matrix=h,this.hasVertexNormals=s,this.hasWebMercatorT=a.defaultValue(c,!1),this.hasGeodeticSurfaceNormals=a.defaultValue(d,!1),this.exaggeration=a.defaultValue(u,1),this.exaggerationRelativeHeight=a.defaultValue(l,0),this.stride=0,this._offsetGeodeticSurfaceNormal=0,this._offsetVertexNormal=0,this._calculateStrideAndOffsets()}O.prototype.encode=function(t,e,o,a,s,c,d,u){const l=a.x,m=a.y;if(this.quantization===z.BITS12){(o=i.Matrix4.multiplyByPoint(this.toScaledENU,o,_)).x=r.CesiumMath.clamp(o.x,0,1),o.y=r.CesiumMath.clamp(o.y,0,1),o.z=r.CesiumMath.clamp(o.z,0,1);const a=this.maximumHeight-this.minimumHeight,c=r.CesiumMath.clamp((s-this.minimumHeight)/a,0,1);i.Cartesian2.fromElements(o.x,o.y,H);const u=n.AttributeCompression.compressTextureCoordinates(H);i.Cartesian2.fromElements(o.z,c,H);const h=n.AttributeCompression.compressTextureCoordinates(H);i.Cartesian2.fromElements(l,m,H);const f=n.AttributeCompression.compressTextureCoordinates(H);if(t[e++]=u,t[e++]=h,t[e++]=f,this.hasWebMercatorT){i.Cartesian2.fromElements(d,0,H);const o=n.AttributeCompression.compressTextureCoordinates(H);t[e++]=o}}else i.Cartesian3.subtract(o,this.center,_),t[e++]=_.x,t[e++]=_.y,t[e++]=_.z,t[e++]=s,t[e++]=l,t[e++]=m,this.hasWebMercatorT&&(t[e++]=d);return this.hasVertexNormals&&(t[e++]=n.AttributeCompression.octPackFloat(c)),this.hasGeodeticSurfaceNormals&&(t[e++]=u.x,t[e++]=u.y,t[e++]=u.z),e};const V=new i.Cartesian3,q=new i.Cartesian3;O.prototype.addGeodeticSurfaceNormals=function(t,e,i){if(this.hasGeodeticSurfaceNormals)return;const o=this.stride,a=t.length/o;this.hasGeodeticSurfaceNormals=!0,this._calculateStrideAndOffsets();const n=this.stride;for(let r=0;r<a;r++){for(let i=0;i<o;i++){const a=r*o+i;e[r*n+i]=t[a]}const a=this.decodePosition(e,r,V),s=i.geodeticSurfaceNormal(a,q),c=r*n+this._offsetGeodeticSurfaceNormal;e[c]=s.x,e[c+1]=s.y,e[c+2]=s.z}},O.prototype.removeGeodeticSurfaceNormals=function(t,e){if(!this.hasGeodeticSurfaceNormals)return;const i=this.stride,o=t.length/i;this.hasGeodeticSurfaceNormals=!1,this._calculateStrideAndOffsets();const a=this.stride;for(let n=0;n<o;n++)for(let o=0;o<a;o++){const r=n*i+o;e[n*a+o]=t[r]}},O.prototype.decodePosition=function(t,e,o){if(a.defined(o)||(o=new i.Cartesian3),e*=this.stride,this.quantization===z.BITS12){const a=n.AttributeCompression.decompressTextureCoordinates(t[e],H);o.x=a.x,o.y=a.y;const r=n.AttributeCompression.decompressTextureCoordinates(t[e+1],H);return o.z=r.x,i.Matrix4.multiplyByPoint(this.fromScaledENU,o,o)}return o.x=t[e],o.y=t[e+1],o.z=t[e+2],i.Cartesian3.add(o,this.center,o)},O.prototype.getExaggeratedPosition=function(t,e,i){i=this.decodePosition(t,e,i);const o=this.exaggeration,a=this.exaggerationRelativeHeight;if(1!==o&&this.hasGeodeticSurfaceNormals){const n=this.decodeGeodeticSurfaceNormal(t,e,q),r=this.decodeHeight(t,e),s=M.getHeight(r,o,a)-r;i.x+=n.x*s,i.y+=n.y*s,i.z+=n.z*s}return i},O.prototype.decodeTextureCoordinates=function(t,e,o){return a.defined(o)||(o=new i.Cartesian2),e*=this.stride,this.quantization===z.BITS12?n.AttributeCompression.decompressTextureCoordinates(t[e+2],o):i.Cartesian2.fromElements(t[e+4],t[e+5],o)},O.prototype.decodeHeight=function(t,e){if(e*=this.stride,this.quantization===z.BITS12){return n.AttributeCompression.decompressTextureCoordinates(t[e+1],H).y*(this.maximumHeight-this.minimumHeight)+this.minimumHeight}return t[e+3]},O.prototype.decodeWebMercatorT=function(t,e){return e*=this.stride,this.quantization===z.BITS12?n.AttributeCompression.decompressTextureCoordinates(t[e+3],H).x:t[e+6]},O.prototype.getOctEncodedNormal=function(t,e,o){const a=t[e=e*this.stride+this._offsetVertexNormal]/256,n=Math.floor(a),r=256*(a-n);return i.Cartesian2.fromElements(n,r,o)},O.prototype.decodeGeodeticSurfaceNormal=function(t,e,i){return e=e*this.stride+this._offsetGeodeticSurfaceNormal,i.x=t[e],i.y=t[e+1],i.z=t[e+2],i},O.prototype._calculateStrideAndOffsets=function(){let t=0;if(this.quantization===z.BITS12)t+=3;else t+=6;this.hasWebMercatorT&&(t+=1),this.hasVertexNormals&&(this._offsetVertexNormal=t,t+=1),this.hasGeodeticSurfaceNormals&&(this._offsetGeodeticSurfaceNormal=t,t+=3),this.stride=t};const G={position3DAndHeight:0,textureCoordAndEncodedNormals:1,geodeticSurfaceNormal:2},B={compressed0:0,compressed1:1,geodeticSurfaceNormal:2};O.prototype.getAttributes=function(t){const e=r.ComponentDatatype.FLOAT,i=r.ComponentDatatype.getSizeInBytes(e),o=this.stride*i;let a=0;const n=[];function s(r,s){n.push({index:r,vertexBuffer:t,componentDatatype:e,componentsPerAttribute:s,offsetInBytes:a,strideInBytes:o}),a+=s*i}if(this.quantization===z.NONE){s(G.position3DAndHeight,4);let t=2;t+=this.hasWebMercatorT?1:0,t+=this.hasVertexNormals?1:0,s(G.textureCoordAndEncodedNormals,t),this.hasGeodeticSurfaceNormals&&s(G.geodeticSurfaceNormal,3)}else{const t=this.hasWebMercatorT||this.hasVertexNormals,e=this.hasWebMercatorT&&this.hasVertexNormals;s(B.compressed0,t?4:3),e&&s(B.compressed1,1),this.hasGeodeticSurfaceNormals&&s(B.geodeticSurfaceNormal,3)}return n},O.prototype.getAttributeLocations=function(){return this.quantization===z.NONE?G:B},O.clone=function(t,e){if(a.defined(t))return a.defined(e)||(e=new O),e.quantization=t.quantization,e.minimumHeight=t.minimumHeight,e.maximumHeight=t.maximumHeight,e.center=i.Cartesian3.clone(t.center),e.toScaledENU=i.Matrix4.clone(t.toScaledENU),e.fromScaledENU=i.Matrix4.clone(t.fromScaledENU),e.matrix=i.Matrix4.clone(t.matrix),e.hasVertexNormals=t.hasVertexNormals,e.hasWebMercatorT=t.hasWebMercatorT,e.hasGeodeticSurfaceNormals=t.hasGeodeticSurfaceNormals,e.exaggeration=t.exaggeration,e.exaggerationRelativeHeight=t.exaggerationRelativeHeight,e._calculateStrideAndOffsets(),e},t.EllipsoidalOccluder=s,t.TerrainEncoding=O}));
//# sourceMappingURL=TerrainEncoding-11ca6f56.js.map
