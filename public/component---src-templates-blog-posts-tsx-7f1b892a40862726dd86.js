(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{393:function(e,t,n){"use strict";n.r(t),n.d(t,"IndexPage",(function(){return b}));n(402);var r=n(403),o=n.n(r),i=(n(414),n(426)),a=n.n(i),l=(n(27),n(3),n(600)),c=n(1),u=n.n(c),s=n(111),f=n(388),p=n.n(f),d=n(387),y=n(384),m=n(425),b=(n(389),function(e){var t=e.pathContext,n=t.group,r=t.index,i=t.pageCount,c=r-1==1?"":(r-1).toString(),f=(r+1).toString(),b=l.data.site;return u.a.createElement(d.a,null,u.a.createElement(y.a,{title:b.siteMetadata.title+" | "+b.siteMetadata.description,description:b.siteMetadata.description}),n.map((function(e){var t=e.node,n=t.featured_media&&t.featured_media.localFile&&t.featured_media.localFile.childImageSharp&&t.featured_media.localFile.childImageSharp.fluid?t.featured_media.localFile.childImageSharp.fluid:null,r=t.categories&&t.categories.length>0?t.categories.filter((function(e){return"Uncategorized"!==e.name})):new Array;return u.a.createElement("div",{key:t.slug,className:"posts"},u.a.createElement(s.a,{to:"/post/"+t.slug},u.a.createElement("h1",{className:"black-color margin-bottom-16px"},Object(m.a)(t.title))),r&&r.length>0&&u.a.createElement("div",{className:"categories margin-bottom-24px"},r.map((function(e,t){return u.a.createElement(a.a,{key:t},e.name)}))),u.a.createElement(s.a,{to:"/post/"+t.slug},n&&n.src&&n.src.length>0&&u.a.createElement(p.a,{fluid:n,alt:t.title})),u.a.createElement("div",{className:"post-excerpt",dangerouslySetInnerHTML:{__html:Object(m.a)(t.excerpt)}}))})),u.a.createElement("div",{className:"navigation-links"},r>1&&u.a.createElement("div",{className:"previous-link"},u.a.createElement(s.a,{to:"/posts/"+c},u.a.createElement(o.a,{type:"primary"},"Go to Previous Page"))),r<=i-1&&u.a.createElement("div",{className:"next-link"},u.a.createElement(s.a,{to:"/posts/"+f},u.a.createElement(o.a,{type:"primary"},"Go to Next Page")))))});t.default=b},402:function(e,t,n){"use strict";n(87),n(448)},403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(422)),o=i(n(424));function i(e){return e&&e.__esModule?e:{default:e}}r.default.Group=o.default;var a=r.default;t.default=a},404:function(e,t,n){"use strict";n(61),n(19),n(14),n(11),n(4),n(5),n(3),n(12),n(13),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(1)),i=n(9),a=u(n(423)),l=u(n(224)),c=n(42);function u(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return!e||null===e.offsetParent}var v=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=d(t).apply(this,arguments),(e=!o||"object"!==f(o)&&"function"!=typeof o?y(n):o).animationStart=!1,e.destroy=!1,e.onClick=function(t,n){if(!(!t||b(t)||t.className.indexOf("-leave")>=0)){var o=e.props.insertExtraNode;e.extraNode=document.createElement("div");var i=y(e).extraNode;i.className="ant-click-animating-node";var l,c=e.getAttributeName();t.setAttribute(c,"true"),r=r||document.createElement("style"),!n||"#ffffff"===n||"rgb(255, 255, 255)"===n||(l=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/))&&l[1]&&l[2]&&l[3]&&l[1]===l[2]&&l[2]===l[3]||/rgba\(\d*, \d*, \d*, 0\)/.test(n)||"transparent"===n||(e.csp&&e.csp.nonce&&(r.nonce=e.csp.nonce),i.style.borderColor=n,r.innerHTML="\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ".concat(n,";\n      }"),document.body.contains(r)||document.body.appendChild(r)),o&&t.appendChild(i),a.default.addStartEventListener(t,e.onTransitionStart),a.default.addEndEventListener(t,e.onTransitionEnd)}},e.onTransitionStart=function(t){if(!e.destroy){var n=(0,i.findDOMNode)(y(e));t&&t.target===n&&(e.animationStart||e.resetEffect(n))}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!b(n.target)){e.resetEffect(t);var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,r)}),0),l.default.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=(0,l.default)((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children;return e.csp=n,r},e}var n,u,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(u=[{key:"componentDidMount",value:function(){var e=(0,i.findDOMNode)(this);e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroy=!0}},{key:"getAttributeName",value:function(){return this.props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}},{key:"resetEffect",value:function(e){if(e&&e!==this.extraNode&&e instanceof Element){var t=this.props.insertExtraNode,n=this.getAttributeName();e.setAttribute(n,"false"),r&&(r.innerHTML=""),t&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),a.default.removeStartEventListener(e,this.onTransitionStart),a.default.removeEndEventListener(e,this.onTransitionEnd)}}},{key:"render",value:function(){return o.createElement(c.ConfigConsumer,null,this.renderWave)}}])&&p(n.prototype,u),s&&p(n,s),t}(o.Component);t.default=v},414:function(e,t,n){"use strict";n(87),n(449)},422:function(e,t,n){"use strict";n(35),n(14),n(11),n(19),n(10),n(4),n(5),n(3),n(12),n(13),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=y(n(1)),o=y(n(0)),i=p(n(22)),a=n(43),l=p(n(154)),c=p(n(153)),u=n(42),s=p(n(404)),f=n(221);function p(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function y(e){if(e&&e.__esModule)return e;var t=d();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}}return n.default=e,t&&t.set(e,n),n}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},E=/^[\u4e00-\u9fa5]{2}$/,k=E.test.bind(E);function P(e,t){var n=!1,o=[];return r.Children.forEach(e,(function(e){var t=w(e),r="string"===t||"number"===t;if(n&&r){var i=o.length-1,a=o[i];o[i]="".concat(a).concat(e)}else o.push(e);n=r})),r.Children.map(o,(function(e){return function(e,t){if(null!=e){var n=t?" ":"";return"string"!=typeof e&&"number"!=typeof e&&"string"==typeof e.type&&k(e.props.children)?r.cloneElement(e,{},e.props.children.split("").join(n)):"string"==typeof e?(k(e)&&(e=e.split("").join(n)),r.createElement("span",null,e)):e}}(e,t)}))}(0,f.tuple)("default","primary","ghost","dashed","danger","link");var j=(0,f.tuple)("circle","circle-outline","round"),T=(0,f.tuple)("large","default","small"),_=(0,f.tuple)("submit","button","reset"),S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=h(this,g(t).call(this,e))).saveButtonRef=function(e){n.buttonNode=e},n.handleClick=function(e){var t=n.state.loading,r=n.props.onClick;t||r&&r(e)},n.renderButton=function(e){var t,o=e.getPrefixCls,a=e.autoInsertSpaceInButton,u=n.props,f=u.prefixCls,p=u.type,d=u.shape,y=u.size,v=u.className,h=u.children,g=u.icon,O=u.ghost,w=u.block,E=C(u,["prefixCls","type","shape","size","className","children","icon","ghost","block"]),k=n.state,j=k.loading,T=k.hasTwoCNChar,_=o("btn",f),S=!1!==a,N="";switch(y){case"large":N="lg";break;case"small":N="sm"}var x=j?"loading":g,M=(0,i.default)(_,v,(b(t={},"".concat(_,"-").concat(p),p),b(t,"".concat(_,"-").concat(d),d),b(t,"".concat(_,"-").concat(N),N),b(t,"".concat(_,"-icon-only"),!h&&0!==h&&x),b(t,"".concat(_,"-loading"),!!j),b(t,"".concat(_,"-background-ghost"),O),b(t,"".concat(_,"-two-chinese-chars"),T&&S),b(t,"".concat(_,"-block"),w),t)),A=x?r.createElement(c.default,{type:x}):null,I=h||0===h?P(h,n.isNeedInserted()&&S):null,W=(0,l.default)(E,["htmlType","loading"]);if(void 0!==W.href)return r.createElement("a",m({},W,{className:M,onClick:n.handleClick,ref:n.saveButtonRef}),A,I);var D=E,L=D.htmlType,z=C(D,["htmlType"]),B=r.createElement("button",m({},(0,l.default)(z,["loading"]),{type:L,className:M,onClick:n.handleClick,ref:n.saveButtonRef}),A,I);return"link"===p?B:r.createElement(s.default,null,B)},n.state={loading:e.loading,hasTwoCNChar:!1},n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.fixTwoCNChar()}},{key:"componentDidUpdate",value:function(e){var t=this;this.fixTwoCNChar(),e.loading&&"boolean"!=typeof e.loading&&clearTimeout(this.delayTimeout);var n=this.props.loading;n&&"boolean"!=typeof n&&n.delay?this.delayTimeout=window.setTimeout((function(){t.setState({loading:n})}),n.delay):e.loading!==n&&this.setState({loading:n})}},{key:"componentWillUnmount",value:function(){this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"fixTwoCNChar",value:function(){if(this.buttonNode){var e=this.buttonNode.textContent||this.buttonNode.innerText;this.isNeedInserted()&&k(e)?this.state.hasTwoCNChar||this.setState({hasTwoCNChar:!0}):this.state.hasTwoCNChar&&this.setState({hasTwoCNChar:!1})}}},{key:"isNeedInserted",value:function(){var e=this.props,t=e.icon,n=e.children,o=e.type;return 1===r.Children.count(n)&&!t&&"link"!==o}},{key:"render",value:function(){return r.createElement(u.ConfigConsumer,null,this.renderButton)}}])&&v(n.prototype,o),a&&v(n,a),t}(r.Component);S.__ANT_BUTTON=!0,S.defaultProps={loading:!1,ghost:!1,block:!1,htmlType:"button"},S.propTypes={type:o.string,shape:o.oneOf(j),size:o.oneOf(T),htmlType:o.oneOf(_),onClick:o.func,loading:o.oneOfType([o.bool,o.object]),className:o.string,icon:o.string,block:o.bool,title:o.string},(0,a.polyfill)(S);var N=S;t.default=N},423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},o={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},i=[],a=[];function l(e,t,n){e.addEventListener(t,n,!1)}function c(e,t,n){e.removeEventListener(t,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var e=document.createElement("div").style;function t(t,n){for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];for(var i in o)if(i in e){n.push(o[i]);break}}}"AnimationEvent"in window||(delete r.animationstart.animation,delete o.animationend.animation),"TransitionEvent"in window||(delete r.transitionstart.transition,delete o.transitionend.transition),t(r,i),t(o,a)}();var u={startEvents:i,addStartEventListener:function(e,t){0!==i.length?i.forEach((function(n){l(e,n,t)})):window.setTimeout(t,0)},removeStartEventListener:function(e,t){0!==i.length&&i.forEach((function(n){c(e,n,t)}))},endEvents:a,addEndEventListener:function(e,t){0!==a.length?a.forEach((function(n){l(e,n,t)})):window.setTimeout(t,0)},removeEndEventListener:function(e,t){0!==a.length&&a.forEach((function(n){c(e,n,t)}))}};t.default=u,e.exports=t.default},424:function(e,t,n){"use strict";n(11),n(10),n(4),n(5),n(3),n(12),n(13),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t=l();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(1)),i=(r=n(22))&&r.__esModule?r:{default:r},a=n(42);function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},s=function(e){return o.createElement(a.ConfigConsumer,null,(function(t){var n=t.getPrefixCls,r=e.prefixCls,a=e.size,l=e.className,s=u(e,["prefixCls","size","className"]),f=n("btn-group",r),p="";switch(a){case"large":p="lg";break;case"small":p="sm"}var d=(0,i.default)(f,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},"".concat(f,"-").concat(p),p),l);return o.createElement("div",c({},s,{className:d}))}))};t.default=s},425:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(20);var r=function(e){try{return e.replace(/(&#(\d+);)/g,(function(e,t,n){return String.fromCharCode(n)}))}catch(t){console.error(t)}return e}},426:function(e,t,n){"use strict";n(71),n(19),n(10),n(14),n(11),n(4),n(5),n(3),n(12),n(13),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t=y();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(1)),o=d(n(22)),i=d(n(154)),a=n(43),l=d(n(153)),c=d(n(427)),u=n(42),s=n(428),f=d(n(88)),p=d(n(404));function d(e){return e&&e.__esModule?e:{default:e}}function y(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},E=new RegExp("^(".concat(s.PresetColorTypes.join("|"),")(-inverse)?$")),k=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,O(t).call(this,e))).state={visible:!0},n.handleIconClick=function(e){n.setVisible(!1,e)},n.renderTag=function(e){var t=n.props,o=t.children,a=C(t,["children"]),l="onClick"in a||o&&"a"===o.type,c=(0,i.default)(a,["onClose","afterClose","color","visible","closable","prefixCls"]);return l?r.createElement(p.default,null,r.createElement("span",v({},c,{className:n.getTagClassName(e),style:n.getTagStyle()}),o,n.renderCloseIcon())):r.createElement("span",v({},c,{className:n.getTagClassName(e),style:n.getTagStyle()}),o,n.renderCloseIcon())},(0,f.default)(!("afterClose"in e),"Tag","'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version."),n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,c=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(a=[{key:"getTagStyle",value:function(){var e=this.props,t=e.color,n=e.style,r=this.isPresetColor();return v({backgroundColor:t&&!r?t:void 0},n)}},{key:"getTagClassName",value:function(e){var t,n=e.getPrefixCls,r=this.props,i=r.prefixCls,a=r.className,l=r.color,c=this.state.visible,u=this.isPresetColor(),s=n("tag",i);return(0,o.default)(s,(b(t={},"".concat(s,"-").concat(l),u),b(t,"".concat(s,"-has-color"),l&&!u),b(t,"".concat(s,"-hidden"),!c),t),a)}},{key:"setVisible",value:function(e,t){var n=this.props,r=n.onClose,o=n.afterClose;r&&r(t),o&&!r&&o(),t.defaultPrevented||"visible"in this.props||this.setState({visible:e})}},{key:"isPresetColor",value:function(){var e=this.props.color;return!!e&&E.test(e)}},{key:"renderCloseIcon",value:function(){return this.props.closable?r.createElement(l.default,{type:"close",onClick:this.handleIconClick}):null}},{key:"render",value:function(){return r.createElement(u.ConfigConsumer,null,this.renderTag)}}])&&h(n.prototype,a),c&&h(n,c),t}(r.Component);k.CheckableTag=c.default,k.defaultProps={closable:!1},(0,a.polyfill)(k);var P=k;t.default=P},427:function(e,t,n){"use strict";n(19),n(10),n(14),n(11),n(4),n(5),n(3),n(12),n(13),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t=l();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(1)),i=(r=n(22))&&r.__esModule?r:{default:r},a=n(42);function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},b=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=p(this,d(t).apply(this,arguments))).handleClick=function(){var t=e.props,n=t.checked,r=t.onChange;r&&r(!n)},e.renderCheckableTag=function(t){var n,r=t.getPrefixCls,a=e.props,l=a.prefixCls,c=a.className,f=a.checked,p=m(a,["prefixCls","className","checked"]),d=r("tag",l),y=(0,i.default)(d,(s(n={},"".concat(d,"-checkable"),!0),s(n,"".concat(d,"-checkable-checked"),f),n),c);return delete p.onChange,o.createElement("span",u({},p,{className:y,onClick:e.handleClick}))},e}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.createElement(a.ConfigConsumer,null,this.renderCheckableTag)}}])&&f(n.prototype,r),l&&f(n,l),t}(o.Component);t.default=b},428:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PresetColorTypes=void 0;var r=(0,n(221).tuple)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime");t.PresetColorTypes=r},600:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"My Demo Blog","description":"This is a demo blog"}}}}')}}]);
//# sourceMappingURL=component---src-templates-blog-posts-tsx-7f1b892a40862726dd86.js.map