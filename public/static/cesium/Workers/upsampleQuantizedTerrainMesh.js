define(["./AttributeCompression-142fe884","./Transforms-f586e93e","./Matrix2-fb98ca95","./defaultValue-69ee94f4","./TerrainEncoding-11ca6f56","./IndexDatatype-b58b63e4","./RuntimeError-ac440aa5","./ComponentDatatype-7ed489c0","./OrientedBoundingBox-3acf3d78","./createTaskProcessorWorker","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./WebGLConstants-f63312fc","./EllipsoidTangentPlane-97c09048","./AxisAlignedBoundingBox-a31690ee","./IntersectionTests-2d241d2b","./Plane-a09326f5"],(function(e,t,i,n,r,s,o,h,u,d,p,f,l,a,c,g,m){"use strict";const w={clipTriangleAtAxisAlignedThreshold:function(e,t,i,r,s,h){if(!n.defined(e))throw new o.DeveloperError("threshold is required.");if(!n.defined(t))throw new o.DeveloperError("keepAbove is required.");if(!n.defined(i))throw new o.DeveloperError("u0 is required.");if(!n.defined(r))throw new o.DeveloperError("u1 is required.");if(!n.defined(s))throw new o.DeveloperError("u2 is required.");let u,d,p;n.defined(h)?h.length=0:h=[],t?(u=i<e,d=r<e,p=s<e):(u=i>e,d=r>e,p=s>e);const f=u+d+p;let l,a,c,g,m,w;return 1===f?u?(l=(e-i)/(r-i),a=(e-i)/(s-i),h.push(1),h.push(2),1!==a&&(h.push(-1),h.push(0),h.push(2),h.push(a)),1!==l&&(h.push(-1),h.push(0),h.push(1),h.push(l))):d?(c=(e-r)/(s-r),g=(e-r)/(i-r),h.push(2),h.push(0),1!==g&&(h.push(-1),h.push(1),h.push(0),h.push(g)),1!==c&&(h.push(-1),h.push(1),h.push(2),h.push(c))):p&&(m=(e-s)/(i-s),w=(e-s)/(r-s),h.push(0),h.push(1),1!==w&&(h.push(-1),h.push(2),h.push(1),h.push(w)),1!==m&&(h.push(-1),h.push(2),h.push(0),h.push(m))):2===f?u||i===e?d||r===e?p||s===e||(a=(e-i)/(s-i),c=(e-r)/(s-r),h.push(2),h.push(-1),h.push(0),h.push(2),h.push(a),h.push(-1),h.push(1),h.push(2),h.push(c)):(w=(e-s)/(r-s),l=(e-i)/(r-i),h.push(1),h.push(-1),h.push(2),h.push(1),h.push(w),h.push(-1),h.push(0),h.push(1),h.push(l)):(g=(e-r)/(i-r),m=(e-s)/(i-s),h.push(0),h.push(-1),h.push(1),h.push(0),h.push(g),h.push(-1),h.push(2),h.push(0),h.push(m)):3!==f&&(h.push(0),h.push(1),h.push(2)),h},computeBarycentricCoordinates:function(e,t,r,s,h,u,d,p,f){if(!n.defined(e))throw new o.DeveloperError("x is required.");if(!n.defined(t))throw new o.DeveloperError("y is required.");if(!n.defined(r))throw new o.DeveloperError("x1 is required.");if(!n.defined(s))throw new o.DeveloperError("y1 is required.");if(!n.defined(h))throw new o.DeveloperError("x2 is required.");if(!n.defined(u))throw new o.DeveloperError("y2 is required.");if(!n.defined(d))throw new o.DeveloperError("x3 is required.");if(!n.defined(p))throw new o.DeveloperError("y3 is required.");const l=r-d,a=d-h,c=u-p,g=s-p,m=1/(c*l+a*g),w=t-p,x=e-d,C=(c*x+a*w)*m,y=(-g*x+l*w)*m,v=1-C-y;return n.defined(f)?(f.x=C,f.y=y,f.z=v,f):new i.Cartesian3(C,y,v)},computeLineSegmentLineSegmentIntersection:function(e,t,r,s,h,u,d,p,f){o.Check.typeOf.number("x00",e),o.Check.typeOf.number("y00",t),o.Check.typeOf.number("x01",r),o.Check.typeOf.number("y01",s),o.Check.typeOf.number("x10",h),o.Check.typeOf.number("y10",u),o.Check.typeOf.number("x11",d),o.Check.typeOf.number("y11",p);const l=(p-u)*(r-e)-(d-h)*(s-t);if(0===l)return;const a=((d-h)*(t-u)-(p-u)*(e-h))/l,c=((r-e)*(t-u)-(s-t)*(e-h))/l;return a>=0&&a<=1&&c>=0&&c<=1?(n.defined(f)||(f=new i.Cartesian2),f.x=e+a*(r-e),f.y=t+a*(s-t),f):void 0}},x=32767,C=16383,y=[],v=[],B=[],b=new i.Cartographic;let A=new i.Cartesian3;const I=[],E=[],D=[],T=[],O=[],z=new i.Cartesian3,V=new t.BoundingSphere,M=new u.OrientedBoundingBox,N=new i.Cartesian2,k=new i.Cartesian3;function q(){this.vertexBuffer=void 0,this.index=void 0,this.first=void 0,this.second=void 0,this.ratio=void 0}q.prototype.clone=function(e){return n.defined(e)||(e=new q),e.uBuffer=this.uBuffer,e.vBuffer=this.vBuffer,e.heightBuffer=this.heightBuffer,e.normalBuffer=this.normalBuffer,e.index=this.index,e.first=this.first,e.second=this.second,e.ratio=this.ratio,e},q.prototype.initializeIndexed=function(e,t,i,n,r){this.uBuffer=e,this.vBuffer=t,this.heightBuffer=i,this.normalBuffer=n,this.index=r,this.first=void 0,this.second=void 0,this.ratio=void 0},q.prototype.initializeFromClipResult=function(e,t,i){let n=t+1;return-1!==e[t]?i[e[t]].clone(this):(this.vertexBuffer=void 0,this.index=void 0,this.first=i[e[n]],++n,this.second=i[e[n]],++n,this.ratio=e[n],++n),n},q.prototype.getKey=function(){return this.isIndexed()?this.index:JSON.stringify({first:this.first.getKey(),second:this.second.getKey(),ratio:this.ratio})},q.prototype.isIndexed=function(){return n.defined(this.index)},q.prototype.getH=function(){return n.defined(this.index)?this.heightBuffer[this.index]:h.CesiumMath.lerp(this.first.getH(),this.second.getH(),this.ratio)},q.prototype.getU=function(){return n.defined(this.index)?this.uBuffer[this.index]:h.CesiumMath.lerp(this.first.getU(),this.second.getU(),this.ratio)},q.prototype.getV=function(){return n.defined(this.index)?this.vBuffer[this.index]:h.CesiumMath.lerp(this.first.getV(),this.second.getV(),this.ratio)};let H=new i.Cartesian2,R=-1;const S=[new i.Cartesian3,new i.Cartesian3],U=[new i.Cartesian3,new i.Cartesian3];function F(t,n){++R;let r=S[R],s=U[R];return r=e.AttributeCompression.octDecode(t.first.getNormalX(),t.first.getNormalY(),r),s=e.AttributeCompression.octDecode(t.second.getNormalX(),t.second.getNormalY(),s),A=i.Cartesian3.lerp(r,s,t.ratio,A),i.Cartesian3.normalize(A,A),e.AttributeCompression.octEncode(A,n),--R,n}q.prototype.getNormalX=function(){return n.defined(this.index)?this.normalBuffer[2*this.index]:(H=F(this,H),H.x)},q.prototype.getNormalY=function(){return n.defined(this.index)?this.normalBuffer[2*this.index+1]:(H=F(this,H),H.y)};const P=[];function W(e,t,i,r,s,o,h,u,d){if(0===h.length)return;let p=0,f=0;for(;f<h.length;)f=P[p++].initializeFromClipResult(h,f,u);for(let s=0;s<p;++s){const h=P[s];if(h.isIndexed())h.newIndex=o[h.index],h.uBuffer=e,h.vBuffer=t,h.heightBuffer=i,d&&(h.normalBuffer=r);else{const s=h.getKey();if(n.defined(o[s]))h.newIndex=o[s];else{const n=e.length;e.push(h.getU()),t.push(h.getV()),i.push(h.getH()),d&&(r.push(h.getNormalX()),r.push(h.getNormalY())),h.newIndex=n,o[s]=n}}}3===p?(s.push(P[0].newIndex),s.push(P[1].newIndex),s.push(P[2].newIndex)):4===p&&(s.push(P[0].newIndex),s.push(P[1].newIndex),s.push(P[2].newIndex),s.push(P[0].newIndex),s.push(P[2].newIndex),s.push(P[3].newIndex))}return P.push(new q),P.push(new q),P.push(new q),P.push(new q),d((function(e,n){const o=e.isEastChild,d=e.isNorthChild,p=o?C:0,f=o?x:C,l=d?C:0,a=d?x:C,c=I,g=E,m=D,H=O;c.length=0,g.length=0,m.length=0,H.length=0;const R=T;R.length=0;const S={},U=e.vertices;let F=e.indices;F=F.subarray(0,e.indexCountWithoutSkirts);const P=r.TerrainEncoding.clone(e.encoding),X=P.hasVertexNormals;let K=0;const L=e.vertexCountWithoutSkirts,Y=e.minimumHeight,_=e.maximumHeight,j=new Array(L),G=new Array(L),J=new Array(L),Z=X?new Array(2*L):void 0;let Q,$,ee,te,ie;for($=0,ee=0;$<L;++$,ee+=2){const e=P.decodeTextureCoordinates(U,$,N);if(Q=P.decodeHeight(U,$),te=h.CesiumMath.clamp(e.x*x|0,0,x),ie=h.CesiumMath.clamp(e.y*x|0,0,x),J[$]=h.CesiumMath.clamp((Q-Y)/(_-Y)*x|0,0,x),te<20&&(te=0),ie<20&&(ie=0),x-te<20&&(te=x),x-ie<20&&(ie=x),j[$]=te,G[$]=ie,X){const e=P.getOctEncodedNormal(U,$,k);Z[ee]=e.x,Z[ee+1]=e.y}(o&&te>=C||!o&&te<=C)&&(d&&ie>=C||!d&&ie<=C)&&(S[$]=K,c.push(te),g.push(ie),m.push(J[$]),X&&(H.push(Z[ee]),H.push(Z[ee+1])),++K)}const ne=[];ne.push(new q),ne.push(new q),ne.push(new q);const re=[];let se,oe;for(re.push(new q),re.push(new q),re.push(new q),$=0;$<F.length;$+=3){const e=F[$],t=F[$+1],i=F[$+2],n=j[e],r=j[t],s=j[i];ne[0].initializeIndexed(j,G,J,Z,e),ne[1].initializeIndexed(j,G,J,Z,t),ne[2].initializeIndexed(j,G,J,Z,i);const h=w.clipTriangleAtAxisAlignedThreshold(C,o,n,r,s,y);se=0,se>=h.length||(se=re[0].initializeFromClipResult(h,se,ne),se>=h.length||(se=re[1].initializeFromClipResult(h,se,ne),se>=h.length||(se=re[2].initializeFromClipResult(h,se,ne),oe=w.clipTriangleAtAxisAlignedThreshold(C,d,re[0].getV(),re[1].getV(),re[2].getV(),v),W(c,g,m,H,R,S,oe,re,X),se<h.length&&(re[2].clone(re[1]),re[2].initializeFromClipResult(h,se,ne),oe=w.clipTriangleAtAxisAlignedThreshold(C,d,re[0].getV(),re[1].getV(),re[2].getV(),v),W(c,g,m,H,R,S,oe,re,X)))))}const he=o?-32767:0,ue=d?-32767:0,de=[],pe=[],fe=[],le=[];let ae=Number.MAX_VALUE,ce=-ae;const ge=B;ge.length=0;const me=i.Ellipsoid.clone(e.ellipsoid),we=i.Rectangle.clone(e.childRectangle),xe=we.north,Ce=we.south;let ye=we.east;const ve=we.west;for(ye<ve&&(ye+=h.CesiumMath.TWO_PI),$=0;$<c.length;++$)te=Math.round(c[$]),te<=p?(de.push($),te=0):te>=f?(fe.push($),te=x):te=2*te+he,c[$]=te,ie=Math.round(g[$]),ie<=l?(pe.push($),ie=0):ie>=a?(le.push($),ie=x):ie=2*ie+ue,g[$]=ie,Q=h.CesiumMath.lerp(Y,_,m[$]/x),Q<ae&&(ae=Q),Q>ce&&(ce=Q),m[$]=Q,b.longitude=h.CesiumMath.lerp(ve,ye,te/x),b.latitude=h.CesiumMath.lerp(Ce,xe,ie/x),b.height=Q,me.cartographicToCartesian(b,A),ge.push(A.x),ge.push(A.y),ge.push(A.z);const Be=t.BoundingSphere.fromVertices(ge,i.Cartesian3.ZERO,3,V),be=u.OrientedBoundingBox.fromRectangle(we,ae,ce,me,M),Ae=new r.EllipsoidalOccluder(me).computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid(Be.center,ge,3,Be.center,ae,z),Ie=ce-ae,Ee=new Uint16Array(c.length+g.length+m.length);for($=0;$<c.length;++$)Ee[$]=c[$];let De=c.length;for($=0;$<g.length;++$)Ee[De+$]=g[$];for(De+=g.length,$=0;$<m.length;++$)Ee[De+$]=x*(m[$]-ae)/Ie;const Te=s.IndexDatatype.createTypedArray(c.length,R);let Oe;if(X){const e=new Uint8Array(H);n.push(Ee.buffer,Te.buffer,e.buffer),Oe=e.buffer}else n.push(Ee.buffer,Te.buffer);return{vertices:Ee.buffer,encodedNormals:Oe,indices:Te.buffer,minimumHeight:ae,maximumHeight:ce,westIndices:de,southIndices:pe,eastIndices:fe,northIndices:le,boundingSphere:Be,orientedBoundingBox:be,horizonOcclusionPoint:Ae}}))}));
//# sourceMappingURL=upsampleQuantizedTerrainMesh.js.map
