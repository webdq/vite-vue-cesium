define(["exports","./RuntimeError-ac440aa5","./defaultValue-69ee94f4"],(function(e,t,a){"use strict";var f=Object.freeze({NONE:0,TOP:1,ALL:2});e.GeometryOffsetAttribute=f,e.arrayFill=function(e,f,n,r){if(t.Check.defined("array",e),t.Check.defined("value",f),a.defined(n)&&t.Check.typeOf.number("start",n),a.defined(r)&&t.Check.typeOf.number("end",r),"function"==typeof e.fill)return e.fill(f,n,r);const i=e.length>>>0,u=a.defaultValue(n,0);let l=u<0?Math.max(i+u,0):Math.min(u,i);const d=a.defaultValue(r,i),c=d<0?Math.max(i+d,0):Math.min(d,i);for(;l<c;)e[l]=f,l++;return e}}));
//# sourceMappingURL=GeometryOffsetAttribute-bae60293.js.map