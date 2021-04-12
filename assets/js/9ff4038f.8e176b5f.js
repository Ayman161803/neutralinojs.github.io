(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),i=(n(0),n(109)),a={title:"Introduction",slug:"/"},l={unversionedId:"getting-started/introduction",id:"getting-started/introduction",isDocsHomePage:!1,title:"Introduction",description:"Notice \ud83d\udd14",source:"@site/docs/getting-started/introduction.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/docs/getting-started/introduction.md",version:"current",sidebar:"docs",next:{title:"Your First Neutralinojs App",permalink:"/docs/getting-started/your-first-neutralinojs-app"}},c=[{value:"Notice \ud83d\udd14",id:"notice-",children:[]},{value:"What is Neutralinojs?",id:"what-is-neutralinojs",children:[]},{value:"Why Neutralinojs?",id:"why-neutralinojs",children:[]},{value:"Highlighted Features",id:"highlighted-features",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"notice-"},"Notice \ud83d\udd14"),Object(i.b)("p",null,"Neutralino v2 is ready for Linux/Windows. You can try this ",Object(i.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/releases/tag/v2.0.0"},"pre-release"),".\nPlease notice that the macOS version is not yet supporting v2 implementaton (still in v1.5.0). If you are interested, you can ",Object(i.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/issues/395"},"help \u2764\ufe0f")," us to implement v2-spec for macOS."),Object(i.b)("h2",{id:"what-is-neutralinojs"},"What is Neutralinojs?"),Object(i.b)("p",null,"Neutralinojs is a lightweight and portable application development framework. It lets you develop cross-platform applications using JavaScript, HTML and CSS. Neutralinojs applications will work on Linux, Windows, macOs, and Web."),Object(i.b)("h2",{id:"why-neutralinojs"},"Why Neutralinojs?"),Object(i.b)("p",null,"In Electron and NWjs you have to install NodeJs and hundreds of dependency libraries. Embedded Chromium and Node make even simple apps bloaty. Neutralino offers a lightweight and portable SDK which is an alternative for Electron and NW.js also with many advantages."),Object(i.b)("p",null,"See performance comparison: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/evaluation"},"Neutralinojs vs Electron vs NW.js (2018)")),Object(i.b)("h2",{id:"highlighted-features"},"Highlighted Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fully portable development kit."),Object(i.b)("li",{parentName:"ul"},"No compilation required for developers."),Object(i.b)("li",{parentName:"ul"},"No additional dependencies required for users."),Object(i.b)("li",{parentName:"ul"},"Native functions support: Read files, run system commands, etc."),Object(i.b)("li",{parentName:"ul"},"Less resource consumption compared to chromium-node-based frameworks."),Object(i.b)("li",{parentName:"ul"},"Cross-platform: Linux, Windows, macOS, and Web.")))}u.isMDXComponent=!0}}]);