!function(e){function t(t){for(var n,i,c=t[0],l=t[1],u=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={2:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://cdn.jsdelivr.net/gh/mssgme/mssgme-static@v5.19.8/userwebsite/dist/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;a.push([1,1]),r()}({1:function(e,t,r){r("C/am"),r("NFaR"),e.exports=r("u2ML")},"E+3S":function(e,t,r){"use strict";function n(){return window.outerWidth<768}r.d(t,"a",(function(){return n}))},NFaR:function(e,t,r){"use strict";r.r(t),t.default={}},bCRH:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var n=r("r0ML"),o=Object(n.createContext)("en");function a(){return Object(n.useContext)(o)}},pnxo:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return s}));r("z4I3"),r("TPye"),r("orcL");var n=r("8EKQ"),o=r.n(n);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,l(n.key),n)}}function l(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:String(t)}var u=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.locales=t}var t,r,n;return t=e,(r=[{key:"extend",value:function(e){this.locales=Object.assign({},this.locales,e)}},{key:"t",value:function(e,t){return this.locales[e]?o()(this.locales[e],t):e}}])&&c(t.prototype,r),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()),s=u.t.bind(u)},u2ML:function(e,t,r){"use strict";r.r(t);var n=r("r0ML"),o=r.n(n),a=r("+Q0i"),i=r("pnxo"),c=(r("z4I3"),r("TPye"),r("0Kmw"),r("orcL"),r("E+3S")),l=r("bCRH"),u=r.p+"ui/img/brands/facebook-messenger.svg",s=r.p+"ui/img/brands/skype.svg",f=r.p+"ui/img/brands/telegram.svg",p=r.p+"ui/img/brands/viber.svg",b=r.p+"ui/img/brands/vkontakte.svg",m={whatsapp:{label:"WhatsApp",color:"#24d366",downloadUrl:"https://www.whatsapp.com/download/",logo:r.p+"ui/img/brands/whatsapp.svg"},telegram:{label:"Telegram",color:"#1f98d4",downloadUrl:"https://telegram.org/",logo:f},viber:{label:"Viber",color:"#665cac",downloadUrl:"https://www.viber.com/download/",logo:p},messenger:{label:"Facebook Messenger",color:"#0284ff",logo:u},vk:{label:"Vkontakte",color:"#5b88bd",logo:b},skype:{label:"Skype",color:"#00aff0",downloadUrl:"https://www.skype.com/get-skype/",logo:s}},d="_23qSLHWd",y=["href"];function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var w=function(e){var t=e.href,r=g(e,y);return o.a.createElement("a",v({className:d,href:t},r),Object(i.a)("send"))},h="_1n5vTlAo",O="_1ZLkRTg-",j="_31J30ngu",E=function(e){var t=e.messenger,r=m[t],n=r.label,a=r.logo;return o.a.createElement("figure",{className:h},o.a.createElement("img",{className:O,src:a}),o.a.createElement("figcaption",{className:j},n))},P={root:"_8QzbcY43",download:"_1DGdGbHH"},S=function(e){var t=e.messenger;return o.a.createElement("header",{className:P.root},o.a.createElement("div",{className:P.brand},o.a.createElement(E,{messenger:t})))},_={root:"_1srfaVOi",caption:"-USayu3b"},k=function(e){var t=e.caption,r=e.src;return o.a.createElement("figure",{className:_.root},o.a.createElement("figcaption",{className:_.caption},t),o.a.createElement("img",{className:_.text,src:r}))},N="C57yFUFZ",x="_1Yi-01lv",T="_1-ujP19n",L="_2evdrm1Z";function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,q(n.key),n)}}function A(e,t,r){return t=I(t),function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,r||[],I(e).constructor):t.apply(e,r))}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t,r){return(t=q(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e){var t=function(e,t){if("object"!=C(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==C(t)?t:String(t)}function z(){return(z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var B=function(e){return o.a.createElement("div",z({className:L},e))},D=function(e){function t(){var e;M(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return H(U(e=A(this,t,[].concat(n))),"openLink",(function(){var t=e.props.data.appLink;window.location.href=t})),e}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.data,r=t.messenger,n=(t.name,t.qrCode),a=t.appLink,u=(t.branding,t.fullname),s=e.lang,f=m[r],p=f.label,b=f.color;return o.a.createElement(l.a.Provider,{value:s},o.a.createElement("div",{className:N},o.a.createElement(S,{messenger:r}),o.a.createElement("div",{className:x},o.a.createElement("div",null,o.a.createElement("h1",{className:T},Object(i.a)("write_on",[u,p])),o.a.createElement(B,null,Object(i.a)("click_on_button",[p])),o.a.createElement(B,null,o.a.createElement(w,{href:a,style:{backgroundColor:b}})),!Object(c.a)()&&o.a.createElement(B,null,o.a.createElement(k,{caption:Object(i.a)("scan_qr"),src:n}))))))}}])&&R(r.prototype,n),a&&R(r,a),Object.defineProperty(r,"prototype",{writable:!1}),t}(o.a.Component),J=window.INITIAL_DATA,Q=window.document.documentElement.lang;i.b.extend(window.LOCALES),Object(a.render)(o.a.createElement(D,{data:J,lang:Q}),document.getElementById("root"))}});
//# sourceMappingURL=redirect.38580cec07db007491eb.js.map