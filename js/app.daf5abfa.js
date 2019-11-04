(function(t){function e(e){for(var n,i,l=e[0],o=e[1],c=e[2],m=0,p=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("8c4f"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("SideBar"),a("div",{staticClass:"container"},[a("router-view")],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"side-bar"}},[a("div",{staticClass:"icon"},[t._v("Ayleinee")]),a("div",{staticClass:"portfolio-link-div"},[a("router-link",{staticClass:"side-buttons",attrs:{to:{name:"contact",params:{}}}},[t._v("About / Contact")]),a("router-link",{staticClass:"side-buttons",attrs:{to:{name:"illustrations",params:{}}}},[t._v("Illustrations")]),a("router-link",{staticClass:"side-buttons",attrs:{to:{name:"design",params:{}}}},[t._v("Design")]),a("router-link",{staticClass:"side-buttons",attrs:{to:{name:"games",params:{}}}},[t._v("Games")])],1),t._m(0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"social-media-div"}},[a("a",{staticClass:"link",attrs:{href:"https://www.twitter.com/ayleinee",target:"_blank"}},[a("img",{attrs:{alt:"twitter-logo",src:"/twitter_icon.png"}})]),a("a",{staticClass:"link",attrs:{href:"https://www.instagram.com/ayleinee",target:"_blank"}},[a("img",{attrs:{alt:"twitter-logo",src:"/instagram_icon.png"}})])])}],c={name:"side-bar"},u=c,m=a("2877"),p=Object(m["a"])(u,l,o,!1,null,null,null),g=p.exports,f={name:"app",components:{SideBar:g}},d=f,v=(a("034f"),Object(m["a"])(d,s,i,!1,null,null,null)),_=v.exports,h=(a("c1c3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{attrs:{id:"about-div"}},[a("img",{attrs:{alt:"about",src:t.img}}),t._m(0)])])}),b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-text-div"},[a("h1",[t._v("About Me")]),a("p",[t._v("I am a New York City based artist and programmer. ")]),a("h1",[t._v("Contact")]),a("p",[t._v("What to get in touch? You can usually reach me at one of these channels.")]),a("p",[t._v("email: "),a("a",{attrs:{href:"mailto: ayleinee@gmail.com"}},[t._v("ayleinee@gmail.com")])]),a("p",[t._v("twitter: "),a("a",{attrs:{href:"https://www.twitter.com/ayleinee",target:"_blank"}},[t._v("@ayleinee")])]),a("p",[t._v("instagram: "),a("a",{attrs:{href:"https://www.instagram.com/ayleinee",target:"_blank"}},[t._v("@ayleinee")])])])}],y={data:function(){return{img:"/about-img.png"}}},w=y,C=Object(m["a"])(w,h,b,!1,null,null,null),k=C.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"gallery"},t._l(t.imgs,(function(e){return a("div",{key:e,staticClass:"gallery-image-div"},[a("img",{attrs:{alt:"gallery-image",src:t.folder+e}})])})),0)])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery-header"},[a("span",[a("img",{staticClass:"symbol",attrs:{alt:"symbol",src:"/symbol.png"}}),t._v(" ILLUSTRATIONS")])])}],x={data:function(){return{folder:"/illustrations/",imgs:["1.png","2.gif","3.png","4.png","5.png","6.png"]}}},E=x,$=Object(m["a"])(E,O,j,!1,null,null,null),S=$.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"gallery-header"},[a("span",[a("img",{staticClass:"symbol",attrs:{alt:"symbol",src:"/symbol.png"}}),t._v(" DESIGN")])]),a("div",{staticClass:"gallery"},[t._v(" In progress ")])])}],M={data:function(){return{folder:"/games/",imgs:["1.png","2.gif","3.png","4.png","5.png","6.png"]}}},G=M,A=Object(m["a"])(G,P,I,!1,null,"dfe6afb6",null),T=A.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"gallery game"},[a("span",[t._v("Cloud Love")]),t._l(t.cloud,(function(e){return a("div",{key:e,staticClass:"gallery-image-div"},[a("img",{attrs:{alt:"gallery-image",src:t.folder+e}})])})),a("span",[t._v("Before I Go")]),t._l(t.beforeIGo,(function(e){return a("div",{key:e,staticClass:"gallery-image-div"},[a("img",{attrs:{alt:"gallery-image",src:t.folder2+e}})])})),a("span",[t._v("Humans, Pet Me!")]),t._l(t.humanPet,(function(e){return a("div",{key:e,staticClass:"gallery-image-div"},[a("img",{attrs:{alt:"gallery-image",src:t.folder+e}})])}))],2)])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery-header"},[a("span",[a("img",{staticClass:"symbol",attrs:{alt:"symbol",src:"/symbol.png"}}),t._v(" GAMES")])])}],N={data:function(){return{folder:"/games/",folder2:"/games/before-i-go/",cloud:["cloud_love.gif"],beforeIGo:["title.png","ss1.png","ss2.png","ss3.png","character_sheet.png"],humanPet:["human-pet-me.gif"]}}},D=N,J=Object(m["a"])(D,B,L,!1,null,"6a4747d2",null),Y=J.exports;n["a"].use(r["a"]),n["a"].config.productionTip=!1;var H=new r["a"]({routes:[{path:"/",name:"home",component:S},{path:"/contact",name:"contact",component:k},{path:"/illustrations",name:"illustrations",component:S},{path:"/design",name:"design",component:T},{path:"/games",name:"games",component:Y}]});new n["a"]({render:function(t){return t(_)},router:H}).$mount("#app")},"85ec":function(t,e,a){},c1c3:function(t,e,a){}});
//# sourceMappingURL=app.daf5abfa.js.map