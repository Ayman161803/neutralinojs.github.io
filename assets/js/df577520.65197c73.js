(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,s=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?a.a.createElement(s,i(i({ref:t},c),{},{components:n})):a.a.createElement(s,i({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),l=(n(0),n(109)),o={title:"Global Variables"},i={unversionedId:"developer-environment/global-variables",id:"developer-environment/global-variables",isDocsHomePage:!1,title:"Global Variables",description:"These JavaScript variables can be used anywhere because those variables are defined in the window scope.",source:"@site/docs/developer-environment/global-variables.md",slug:"/developer-environment/global-variables",permalink:"/docs/developer-environment/global-variables",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/docs/developer-environment/global-variables.md",version:"current",sidebar:"docs",previous:{title:"neu CLI",permalink:"/docs/developer-environment/cli"},next:{title:"Modes",permalink:"/docs/developer-environment/modes"}},b=[],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"These JavaScript variables can be used anywhere because those variables are defined in the window scope."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_OS")),Object(l.b)("td",{parentName:"tr",align:null},"Operating system name: ",Object(l.b)("inlineCode",{parentName:"td"},"Linux"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Windows"),", or ",Object(l.b)("inlineCode",{parentName:"td"},"macOS"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_APPID")),Object(l.b)("td",{parentName:"tr",align:null},"Application identifier")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_PORT")),Object(l.b)("td",{parentName:"tr",align:null},"Application port")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_MODE")),Object(l.b)("td",{parentName:"tr",align:null},"Mode of the application: ",Object(l.b)("inlineCode",{parentName:"td"},"window"),", ",Object(l.b)("inlineCode",{parentName:"td"},"browser"),", or ",Object(l.b)("inlineCode",{parentName:"td"},"cloud"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_VERSION")),Object(l.b)("td",{parentName:"tr",align:null},"Neutralinojs version")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_CWD")),Object(l.b)("td",{parentName:"tr",align:null},"Current working directory")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_PATH")),Object(l.b)("td",{parentName:"tr",align:null},"Application path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"NL_ARGS")),Object(l.b)("td",{parentName:"tr",align:null},"Command-line arguments")))),Object(l.b)("p",null,"You make custom global variables too via ",Object(l.b)("inlineCode",{parentName:"p"},"neutralino.config.json"),", as shown\nbelow."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'....\n"globalVariables": {\n    "TEST": "Test Value"\n},\n....\n')),Object(l.b)("p",null,"The above custom global variable's value can be accessed with ",Object(l.b)("inlineCode",{parentName:"p"},"NL_TEST"),"."))}p.isMDXComponent=!0}}]);