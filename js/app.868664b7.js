(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c9fd5054","chunk-effa2d76":"cb294026"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-effa2d76":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-effa2d76":"0c3f356a"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fdc":function(t,e,n){},"2eb1":function(t,e,n){"use strict";var a=n("0fdc"),r=n.n(a);r.a},"3c60":function(t,e,n){t.exports=n.p+"img/f.ba368f13.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("desk-nav",{attrs:{id:"desktop-nav"}}),n("div",{staticClass:"view-container"},[n("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"nav"},[n("div",{staticClass:"nav-menu"},[n("ul",{staticClass:"nav-menu-list"},[n("router-link",{staticClass:"nav-menu-list-item",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"nav-menu-list-item",attrs:{to:"/contact"}},[t._v("Contact")]),n("router-link",{staticClass:"nav-menu-list-item",attrs:{to:"/about"}},[t._v("About")])],1)])])},s=[],c={},l=c,u=(n("7e56"),n("2877")),f=Object(u["a"])(l,i,s,!1,null,"b6108048",null),d=f.exports,p={components:{DeskNav:d}},m=p,v=(n("ba7a"),Object(u["a"])(m,r,o,!1,null,"51320d3d",null)),h=v.exports,b=(n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("main-component")],1)},y=[],_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"profile"},[a("img",{staticClass:"image",attrs:{src:n("3c60"),height:"250px"}}),a("div",{staticClass:"profile-content"},[a("p",[t._v("About Me")]),a("b",[a("h1",[t._v("Adegbite Samuel Adetona")])]),a("p",[a("i",{staticClass:"glyphicon glyphicon-tasks"}),t._v(" Web Developer, Tech geek")]),a("p",[a("i",{staticClass:"glyphicon glyphicon-envelope"}),t._v(" samueladetona56@gmail.com")]),a("p",[a("i",{staticClass:"glyphicon glyphicon-heart"}),t._v(" Knowing more about programming")]),a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-default btn-lg",staticStyle:{background:"white"},attrs:{id:"button"}},[t._v("Social Media")]),a("button",{staticClass:"btn btn-primary dropdown-toggle",staticStyle:{background:"white",color:"black"},attrs:{"data-toggle":"dropdown"}}),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-twitter"})])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-facebook"})])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-instagram"})])])])])])]),a("div",{staticClass:"profile-inner-content"},[a("p",[t._v("My name Adegbite Samuel Adetona, am a computer programmer, I love to code and learn more about programmings. Aside that, I play online games. I'm cool, loving and friendly. ")]),a("table",{attrs:{width:"100%"}},[a("tr",[a("th",[t._v("Skills")]),a("th")]),a("tr",[a("td",[t._v("Front End")]),a("td",[t._v("Html, CSS, Javscript, Wordpress")])]),a("tr",[a("td",[t._v("Back End")]),a("td",[t._v("PHP, Mysql")])]),a("tr",[a("td",[t._v("Graphics Design")]),a("td",[t._v("CorelDraw")])])])])])}],w={},k=w,S=(n("2eb1"),Object(u["a"])(k,_,C,!1,null,"10585e4a",null)),j=S.exports,E={name:"home",components:{MainComponent:j}},O=E,x=Object(u["a"])(O,g,y,!1,null,null,null),A=x.exports;a["a"].use(b["a"]);var P=[{path:"/",name:"home",component:A},{path:"/contact",name:"contact",component:function(){return n.e("chunk-effa2d76").then(n.bind(null,"b8fa"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],M=new b["a"]({mode:"history",base:"/",routes:P}),T=M;a["a"].config.productionTip=!1,new a["a"]({router:T,render:function(t){return t(h)}}).$mount("#app")},"7e56":function(t,e,n){"use strict";var a=n("f09c"),r=n.n(a);r.a},"864b":function(t,e,n){},ba7a:function(t,e,n){"use strict";var a=n("864b"),r=n.n(a);r.a},f09c:function(t,e,n){}});
//# sourceMappingURL=app.868664b7.js.map