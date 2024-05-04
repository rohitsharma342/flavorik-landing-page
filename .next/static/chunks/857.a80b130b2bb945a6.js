(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{28857:function(e,t,r){"use strict";var n=r(33227),o=r(88361),a=r(85971),i=r(52715),u=r(91193);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});var l=r(10260),c=l._(r(67294)),d=l._(r(62268)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function _getInitialProps(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var s={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},p=function(e){a(Error,e);var t,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=u(Error);if(t){var n=u(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return i(this,e)});function Error(){return n(this,Error),r.apply(this,arguments)}return o(Error,[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,n=this.props.title||f[t]||"An unexpected error has occurred";return c.default.createElement("div",{style:s.error},c.default.createElement(d.default,null,c.default.createElement("title",null,t?t+": "+n:"Application error: a client-side exception has occurred")),c.default.createElement("div",{style:s.desc},c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?c.default.createElement("h1",{className:"next-error-h1",style:s.h1},t):null,c.default.createElement("div",{style:s.wrap},c.default.createElement("h2",{style:s.h2},this.props.title||t?n:c.default.createElement(c.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),Error}(c.default.Component);p.displayName="ErrorPage",p.getInitialProps=_getInitialProps,p.origGetInitialProps=_getInitialProps,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},93539:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(10260)._(r(67294)).default.createContext({})},47187:function(e,t){"use strict";function isInAmpMode(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},62268:function(e,t,r){"use strict";var n=r(930);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return _defaultHead},default:function(){return _default2}});var o=r(10260),a=r(77697)._(r(67294)),i=o._(r(88959)),u=r(93539),l=r(95963),c=r(47187);function _defaultHead(e){void 0===e&&(e=!1);var t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(29067);var d=["name","httpEquiv","charSet","itemProp"];function reduceComponents(e,t){var r,o,i,u,l=t.inAmpMode;return e.reduce(onlyReactElement,[]).reverse().concat(_defaultHead(l).reverse()).filter((r=new Set,o=new Set,i=new Set,u={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var a=e.key.slice(e.key.indexOf("$")+1);r.has(a)?t=!1:r.add(a)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var l=0,c=d.length;l<c;l++){var f=d[l];if(e.props.hasOwnProperty(f)){if("charSet"===f)i.has(f)?t=!1:i.add(f);else{var s=e.props[f],p=u[f]||new Set;("name"!==f||!n)&&p.has(s)?t=!1:(p.add(s),u[f]=p)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!l&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:r})})}var _default2=function(e){var t=e.children,r=(0,a.useContext)(u.AmpStateContext),n=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:reduceComponents,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88959:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});var n=r(67294),o=n.useLayoutEffect,a=n.useEffect;function SideEffect(e){var t=e.headManager,r=e.reduceComponentsToState;function emitChange(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=emitChange),function(){t&&(t._pendingUpdate=emitChange)}}),a(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},29067:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});var warnOnce=function(e){}}}]);