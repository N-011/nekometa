(function(){"use strict";var n={5682:function(n,e,t){var r=t(9242),o=t(3396);const i={class:"navbar-container"},a=(0,o._)("h1",{id:"nk"},"NK",-1),u=(0,o._)("h1",{id:"mt"},"MT",-1),c=(0,o._)("h1",null,"ABOUT",-1);function f(n,e,t,r,f,s){const l=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(l,{to:"/",class:"navbar-item",id:"nav-logo"},{default:(0,o.w5)((()=>[a,u])),_:1}),(0,o.Wm)(l,{to:"/about",class:"navbar-item"},{default:(0,o.w5)((()=>[c])),_:1})])}var s={name:"NavBar"},l=t(89);const d=(0,l.Z)(s,[["render",f]]);var v=d;const m=(0,o._)("div",{class:"loader"},null,-1);var p={__name:"App",setup(n){return window.addEventListener("load",(()=>{document.querySelector(".loader").classList.add("loader--hidden")})),(n,e)=>{const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[m,(0,o.Wm)(v),(0,o.Wm)(t)],64)}}};const h=p;var b=h,g=t(2483);const w={class:"home"},y=(0,o._)("div",{class:"background"},[(0,o._)("div",{class:"header-text"},[(0,o._)("h1",null,"Flamingo~")]),(0,o._)("div",{class:"header-img"},[(0,o._)("img",{src:"https://images.unsplash.com/photo-1650647441377-715a124f6a2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})])],-1),k=[y];function _(n,e,t,r,i,a){return(0,o.wg)(),(0,o.iD)("div",w,k)}var O={name:"HomeView",components:{}};const j=(0,l.Z)(O,[["render",_]]);var x=j;const T=[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,5974))}],A=(0,g.p7)({history:(0,g.PO)("/nekometa/"),routes:T});var D=A;(0,r.ri)(b).use(D).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r].call(i.exports,i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,i){if(!r){var a=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){n.splice(s--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/about.71f67659.js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="nekometa:";t.l=function(r,o,i,a){if(n[r])n[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",e+i),u.src=r),n[r]=[o];var d=function(e,t){u.onerror=u.onload=null,clearTimeout(v);var o=n[r];if(delete n[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(n){return n(t)})),e)return e(t)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/nekometa/"}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(e),u=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(e){return 0!==n[e]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var s=c(t)}for(e&&e(r);f<a.length;f++)i=a[f],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},r=self["webpackChunknekometa"]=self["webpackChunknekometa"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(5682)}));r=t.O(r)})();
//# sourceMappingURL=app.ec4805b8.js.map