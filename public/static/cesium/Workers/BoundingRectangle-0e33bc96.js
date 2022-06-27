define(["exports","./Matrix2-fb98ca95","./RuntimeError-ac440aa5","./defaultValue-69ee94f4","./Transforms-f586e93e"],(function(e,t,n,i,h){"use strict";function r(e,t,n,h){this.x=i.defaultValue(e,0),this.y=i.defaultValue(t,0),this.width=i.defaultValue(n,0),this.height=i.defaultValue(h,0)}r.packedLength=4,r.pack=function(e,t,h){return n.Check.typeOf.object("value",e),n.Check.defined("array",t),h=i.defaultValue(h,0),t[h++]=e.x,t[h++]=e.y,t[h++]=e.width,t[h]=e.height,t},r.unpack=function(e,t,h){return n.Check.defined("array",e),t=i.defaultValue(t,0),i.defined(h)||(h=new r),h.x=e[t++],h.y=e[t++],h.width=e[t++],h.height=e[t],h},r.fromPoints=function(e,t){if(i.defined(t)||(t=new r),!i.defined(e)||0===e.length)return t.x=0,t.y=0,t.width=0,t.height=0,t;const n=e.length;let h=e[0].x,c=e[0].y,a=e[0].x,o=e[0].y;for(let t=1;t<n;t++){const n=e[t],i=n.x,r=n.y;h=Math.min(i,h),a=Math.max(i,a),c=Math.min(r,c),o=Math.max(r,o)}return t.x=h,t.y=c,t.width=a-h,t.height=o-c,t};const c=new h.GeographicProjection,a=new t.Cartographic,o=new t.Cartographic;r.fromRectangle=function(e,n,h){if(i.defined(h)||(h=new r),!i.defined(e))return h.x=0,h.y=0,h.width=0,h.height=0,h;const d=(n=i.defaultValue(n,c)).project(t.Rectangle.southwest(e,a)),u=n.project(t.Rectangle.northeast(e,o));return t.Cartesian2.subtract(u,d,u),h.x=d.x,h.y=d.y,h.width=u.x,h.height=u.y,h},r.clone=function(e,t){if(i.defined(e))return i.defined(t)?(t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height,t):new r(e.x,e.y,e.width,e.height)},r.union=function(e,t,h){n.Check.typeOf.object("left",e),n.Check.typeOf.object("right",t),i.defined(h)||(h=new r);const c=Math.min(e.x,t.x),a=Math.min(e.y,t.y),o=Math.max(e.x+e.width,t.x+t.width),d=Math.max(e.y+e.height,t.y+t.height);return h.x=c,h.y=a,h.width=o-c,h.height=d-a,h},r.expand=function(e,t,i){n.Check.typeOf.object("rectangle",e),n.Check.typeOf.object("point",t),i=r.clone(e,i);const h=t.x-i.x,c=t.y-i.y;return h>i.width?i.width=h:h<0&&(i.width-=h,i.x=t.x),c>i.height?i.height=c:c<0&&(i.height-=c,i.y=t.y),i},r.intersect=function(e,t){n.Check.typeOf.object("left",e),n.Check.typeOf.object("right",t);const i=e.x,r=e.y,c=t.x,a=t.y;return i>c+t.width||i+e.width<c||r+e.height<a||r>a+t.height?h.Intersect.OUTSIDE:h.Intersect.INTERSECTING},r.equals=function(e,t){return e===t||i.defined(e)&&i.defined(t)&&e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height},r.prototype.clone=function(e){return r.clone(this,e)},r.prototype.intersect=function(e){return r.intersect(this,e)},r.prototype.equals=function(e){return r.equals(this,e)},e.BoundingRectangle=r}));
//# sourceMappingURL=BoundingRectangle-0e33bc96.js.map
