import{l as v,a0 as h,a1 as y,B as k,z as x,a2 as S,$ as T,A as w}from"./entry.466d1d0a.js";const p=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function b(e,r){if(typeof e!="string")throw new TypeError("argument str must be a string");const i={},a=(r||{}).decode||P;let s=0;for(;s<e.length;){const o=e.indexOf("=",s);if(o===-1)break;let n=e.indexOf(";",s);if(n===-1)n=e.length;else if(n<o){s=e.lastIndexOf(";",o-1)+1;continue}const u=e.slice(s,o).trim();if(i[u]===void 0){let c=e.slice(o+1,n).trim();c.codePointAt(0)===34&&(c=c.slice(1,-1)),i[u]=E(c,a)}s=n+1}return i}function m(e,r,i){const t=i||{},a=t.encode||A;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!p.test(e))throw new TypeError("argument name is invalid");const s=a(r);if(s&&!p.test(s))throw new TypeError("argument val is invalid");let o=e+"="+s;if(t.maxAge!==void 0&&t.maxAge!==null){const n=t.maxAge-0;if(Number.isNaN(n)||!Number.isFinite(n))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(n)}if(t.domain){if(!p.test(t.domain))throw new TypeError("option domain is invalid");o+="; Domain="+t.domain}if(t.path){if(!p.test(t.path))throw new TypeError("option path is invalid");o+="; Path="+t.path}if(t.expires){if(!C(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(o+="; HttpOnly"),t.secure&&(o+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function C(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function E(e,r){try{return r(e)}catch{return e}}function P(e){return e.includes("%")?decodeURIComponent(e):e}function A(e){return encodeURIComponent(e)}const I={path:"/",watch:!0,decode:e=>T(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function l(e,r){var u;const i={...I,...r},t=O(i)||{};let a;i.maxAge!==void 0?a=i.maxAge*1e3:i.expires&&(a=i.expires.getTime()-Date.now());const s=a!==void 0&&a<=0,o=s?void 0:t[e]??((u=i.default)==null?void 0:u.call(i)),n=a&&!s?D(o,a):v(o);{const c=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${e}`),f=()=>{R(e,n.value,i),c==null||c.postMessage(i.encode(n.value))};let d=!1;h()&&y(()=>{d=!0,f(),c==null||c.close()}),c&&(c.onmessage=g=>{d=!0,n.value=i.decode(g.data),k(()=>{d=!1})}),i.watch?x(n,()=>{d||f()},{deep:i.watch!=="shallow"}):f()}return n}function O(e={}){return b(document.cookie,e)}function N(e,r,i={}){return r==null?m(e,r,{...i,maxAge:-1}):m(e,r,i)}function R(e,r,i={}){document.cookie=N(e,r,i)}function D(e,r){let i;return y(()=>{clearTimeout(i)}),S((t,a)=>({get(){return t(),e},set(s){clearTimeout(i),i=setTimeout(()=>{e=void 0,a()},r),e=s,a()}}))}const j=()=>({isEnabled:()=>{const t=w().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||l("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>l("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{l("previewToken").value=t,w().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{j as u};
