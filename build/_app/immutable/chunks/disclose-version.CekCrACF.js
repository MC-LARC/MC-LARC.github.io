import{ac as l,ad as u,W as v,ae as p,af as h,D as f,K as s,I as E,E as g}from"./runtime.fS1GLMV3.js";function m(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=v;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&p)!==0,_=(t&h)!==0,n,d=!r.startsWith("<!>");return()=>{if(f)return a(s,null),s;n===void 0&&(n=m(d?r:"<!>"+r),e||(n=u(n)));var o=_?document.importNode(n,!0):n.cloneNode(!0);if(e){var c=u(o),i=o.lastChild;a(c,i)}else a(o,o);return o}}function N(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(f)return a(s,null),s;if(!d){var o=m(n),c=u(o);d=u(c)}var i=d.cloneNode(!0);return a(i,i),i}}function M(r=""){if(!f){var t=l(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=l()),E(e)),a(e,e),e}function x(){if(f)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=l();return r.append(t,e),a(t,e),r}function I(r,t){if(f){v.nodes_end=s,g();return}r!==null&&r.before(t)}const T="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(T);export{I as a,M as b,x as c,a as d,m as e,N as n,y as t};
